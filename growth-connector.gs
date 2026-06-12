/**
 * SORA CASAS — Growth Data Connector  (Google Apps Script)
 * ────────────────────────────────────────────────────────────────────────
 * Pulls live metrics from GA4 (Analytics Data API) + Google Search Console
 * and writes them into growth-data.json in the sora-la repo, so the Lead
 * Machine dashboard (sora-casas-growth.html) shows REAL numbers.
 *
 * ONE-TIME SETUP (~10 min):
 *  1. Create a GA4 property for sora.la/casas → give the Measurement ID to Claude
 *     (goes in leads.js so data starts collecting). Note the numeric Property ID
 *     (Admin → Property Settings) for GA4_PROPERTY_ID below.
 *  2. Verify sora.la in Google Search Console. Put the exact property in GSC_SITE
 *     (a URL like 'https://sora.la/' OR a domain property 'sc-domain:sora.la').
 *  3. Go to script.google.com → New project → paste this whole file.
 *  4. Editor → Services (＋) → add "Google Analytics Data API"  (identifier: AnalyticsData).
 *  5. Create a GitHub fine-grained token with Contents:Read+Write on Abraham4242/sora-la.
 *     Project Settings → Script Properties → add  GH_TOKEN = <that token>.
 *  6. Set GA4_PROPERTY_ID and GSC_SITE below. Run `run()` once (authorize when asked).
 *  7. Triggers (clock icon) → add a daily time-driven trigger on `run`.
 *  Done — growth-data.json updates daily and the dashboard lights up.
 *
 * Test anytime: run `run()` then open growth-data.json in the repo, or deploy as a
 * Web App (doGet) to eyeball the JSON.
 */

const GA4_PROPERTY_ID = '000000000';        // numeric GA4 property id
const GSC_SITE        = 'https://sora.la/'; // or 'sc-domain:sora.la'
const GH_REPO         = 'Abraham4242/sora-la';
const GH_PATH         = 'growth-data.json';

function getGrowthData() {
  const today = new Date();
  const start = new Date(today.getFullYear(), today.getMonth(), 1); // month-to-date
  const fmt = d => Utilities.formatDate(d, 'UTC', 'yyyy-MM-dd');

  // ── GA4: total sessions, organic sessions, leads (key events) ──
  let totalSessions = null, organicSessions = null, leads = null;
  try {
    const rep = AnalyticsData.Properties.runReport({
      dateRanges: [{ startDate: fmt(start), endDate: 'today' }],
      dimensions: [{ name: 'sessionDefaultChannelGroup' }],
      metrics: [{ name: 'sessions' }, { name: 'keyEvents' }]
    }, 'properties/' + GA4_PROPERTY_ID);
    totalSessions = 0; organicSessions = 0; leads = 0;
    (rep.rows || []).forEach(r => {
      const ch = r.dimensionValues[0].value;
      const s = Number(r.metricValues[0].value), k = Number(r.metricValues[1].value);
      totalSessions += s; leads += k;
      if (ch === 'Organic Search') organicSessions += s;
    });
  } catch (e) { Logger.log('GA4 error: ' + e); }

  // ── Search Console: clicks, impressions, avg position, page-1 keyword count ──
  let clicks = null, impressions = null, position = null, kwPage1 = null;
  try {
    const tok = ScriptApp.getOAuthToken();
    const url = 'https://searchconsole.googleapis.com/webmasters/v3/sites/'
      + encodeURIComponent(GSC_SITE) + '/searchAnalytics/query';
    const body = { startDate: fmt(start), endDate: fmt(today), dimensions: ['query'], rowLimit: 5000, type: 'web' };
    const res = UrlFetchApp.fetch(url, { method: 'post', contentType: 'application/json',
      headers: { Authorization: 'Bearer ' + tok }, payload: JSON.stringify(body), muteHttpExceptions: true });
    const data = JSON.parse(res.getContentText());
    const rows = data.rows || [];
    clicks = 0; impressions = 0; kwPage1 = 0; let posW = 0;
    rows.forEach(r => { clicks += r.clicks; impressions += r.impressions; posW += r.position * r.impressions; if (r.position <= 10) kwPage1++; });
    position = impressions ? Math.round((posW / impressions) * 10) / 10 : null;
  } catch (e) { Logger.log('GSC error: ' + e); }

  return {
    updated: today.toISOString(),
    period: Utilities.formatDate(start, 'UTC', 'MMM yyyy') + ' (month-to-date)',
    live: {
      organic_sessions: organicSessions, total_sessions: totalSessions, leads: leads,
      keywords_page1: kwPage1, gsc_clicks: clicks, gsc_impressions: impressions, gsc_avg_position: position
    }
  };
}

function run() {
  const json = JSON.stringify(getGrowthData(), null, 2);
  commitToRepo(json);
  Logger.log('Updated growth-data.json:\n' + json);
}

function commitToRepo(content) {
  const token = PropertiesService.getScriptProperties().getProperty('GH_TOKEN');
  if (!token) throw new Error('Set GH_TOKEN in Script Properties first.');
  const api = 'https://api.github.com/repos/' + GH_REPO + '/contents/' + GH_PATH;
  const headers = { Authorization: 'Bearer ' + token, Accept: 'application/vnd.github+json' };
  // current sha (file already exists in the repo)
  let sha = null;
  const get = UrlFetchApp.fetch(api, { headers: headers, muteHttpExceptions: true });
  if (get.getResponseCode() === 200) sha = JSON.parse(get.getContentText()).sha;
  const payload = {
    message: 'chore: update growth-data.json (GA4 + GSC)',
    content: Utilities.base64Encode(content, Utilities.Charset.UTF_8)
  };
  if (sha) payload.sha = sha;
  const put = UrlFetchApp.fetch(api, { method: 'put', headers: headers,
    contentType: 'application/json', payload: JSON.stringify(payload), muteHttpExceptions: true });
  if (put.getResponseCode() >= 300) throw new Error('GitHub commit failed: ' + put.getContentText());
}

// Optional: deploy as Web App to view the JSON live without committing.
function doGet() {
  return ContentService.createTextOutput(JSON.stringify(getGrowthData()))
    .setMimeType(ContentService.MimeType.JSON);
}
