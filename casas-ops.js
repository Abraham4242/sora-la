/* ════ SORA Casas · shared utilities + cloud sync for the internal ops suite ════ */

/* ⚙️ SHARED BACKEND (optional) — paste your Supabase project URL + anon key here to
   make the WHOLE suite multi-user and live. Leave blank → local-only (localStorage).
   Setup: create a free Supabase project, run casas-cloud-setup.sql, then fill these. */
window.CASAS_CLOUD = { url: '', anon: '' };  // e.g. url:'https://abcd.supabase.co', anon:'eyJhbGci...'

window.CasasOps = (function () {
  const CLOUD = window.CASAS_CLOUD || { url: '', anon: '' };
  const cloudOn = () => !!(CLOUD.url && CLOUD.anon);
  const _h = extra => Object.assign({ apikey: CLOUD.anon, Authorization: 'Bearer ' + CLOUD.anon }, extra || {});

  async function cloudPull(key) {
    if (!cloudOn()) return null;
    try {
      const r = await fetch(CLOUD.url + '/rest/v1/casas_state?key=eq.' + encodeURIComponent(key) + '&select=data', { headers: _h() });
      if (!r.ok) return null; const j = await r.json(); return (j[0] && j[0].data) || null;
    } catch (_) { return null; }
  }
  async function cloudPush(key, data) {
    if (!cloudOn()) return;
    try {
      await fetch(CLOUD.url + '/rest/v1/casas_state', {
        method: 'POST',
        headers: _h({ 'Content-Type': 'application/json', 'Prefer': 'resolution=merge-duplicates,return=minimal' }),
        body: JSON.stringify({ key: key, data: data, updated_at: new Date().toISOString() })
      });
    } catch (_) { }
  }
  // Pull on load + on window focus; if cloud has no row yet, seed it from local.
  function cloudSync(key, apply) {
    if (!cloudOn()) return;
    const pull = () => cloudPull(key).then(d => {
      if (d) { localStorage.setItem(key, JSON.stringify(d)); apply(d); }
      else { cloudPush(key, JSON.parse(localStorage.getItem(key) || '[]')); }
    });
    pull();
    window.addEventListener('focus', pull);
  }

  function initLang(onChange) {
    function apply(l) {
      document.querySelectorAll('[data-es]').forEach(el => { const v = el.getAttribute('data-' + l); if (v != null) { if (/<[a-z]/i.test(v)) el.innerHTML = v; else el.textContent = v; } });
      document.querySelectorAll('[data-es-html]').forEach(el => { const v = el.getAttribute('data-' + l + '-html'); if (v != null) el.innerHTML = v; });
      document.documentElement.lang = l; localStorage.setItem('sora.lang', l);
      document.querySelectorAll('.lang-toggle button').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
      if (onChange) onChange(l);
    }
    document.querySelectorAll('.lang-toggle button').forEach(b => b.addEventListener('click', () => apply(b.dataset.lang)));
    apply(localStorage.getItem('sora.lang') || 'en');
    badge();
  }
  function badge() {
    if (document.getElementById('cloud-badge')) return;
    const b = document.createElement('div'); b.id = 'cloud-badge';
    b.style.cssText = 'position:fixed;right:12px;bottom:12px;z-index:200;font-family:monospace;font-size:10px;letter-spacing:.08em;text-transform:uppercase;padding:6px 11px;border-radius:20px;border:.5px solid rgba(20,17,12,.18)';
    if (cloudOn()) { b.style.background = '#dcefe1'; b.style.color = '#3f8f5e'; b.textContent = '☁ Cloud · synced'; }
    else { b.style.background = '#efe9d8'; b.style.color = '#8a7e6a'; b.textContent = '● Local only'; }
    document.body.appendChild(b);
  }

  const lang = () => document.documentElement.lang || 'en';
  const money = n => (n == null || n === '') ? '—' : '$' + Number(n).toLocaleString();
  const money0 = n => (n == null || n === '' || isNaN(n)) ? '$0' : '$' + Math.round(Number(n)).toLocaleString();
  const num = n => n == null ? '—' : Number(n).toLocaleString();
  const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const dateShort = (d, l) => d ? new Date(d + 'T00:00:00').toLocaleDateString((l || lang()) === 'es' ? 'es-PA' : 'en-US', { year: '2-digit', month: 'short', day: 'numeric' }) : '—';
  const daysTo = d => d ? Math.ceil((new Date(d + 'T00:00:00') - Date.now()) / 86400000) : null;
  const loadLocal = (key, seed) => JSON.parse(localStorage.getItem(key) || 'null') || (seed || []);
  // save writes locally AND pushes to cloud (if configured)
  const save = (key, data) => { localStorage.setItem(key, JSON.stringify(data)); cloudPush(key, data); };
  const peek = key => JSON.parse(localStorage.getItem(key) || 'null') || [];
  function exportJSON(data, name) { const b = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' }); const a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = name; a.click(); }
  function importJSON(e, cb) { const f = e.target.files[0]; if (!f) return; const r = new FileReader(); r.onload = () => { try { const d = JSON.parse(r.result); if (Array.isArray(d)) cb(d); } catch (_) { alert('Invalid JSON'); } }; r.readAsText(f); }
  const uid = () => String(Date.now()) + Math.floor(Math.random() * 1000);
  const lab = (dict, key, l) => (dict[key] ? dict[key][l || lang()] : (key || '—'));

  return { initLang, lang, money, money0, num, esc, dateShort, daysTo, load: loadLocal, save, peek, exportJSON, importJSON, uid, lab, cloudOn, cloudPull, cloudPush, cloudSync };
})();
