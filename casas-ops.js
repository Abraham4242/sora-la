/* ════ SORA Casas · shared utilities for the internal ops tool suite ════ */
window.CasasOps = (function () {
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
  }
  const lang = () => document.documentElement.lang || 'en';
  const money = n => (n == null || n === '') ? '—' : '$' + Number(n).toLocaleString();
  const money0 = n => (n == null || n === '' || isNaN(n)) ? '$0' : '$' + Math.round(Number(n)).toLocaleString();
  const num = n => n == null ? '—' : Number(n).toLocaleString();
  const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const dateShort = (d, l) => d ? new Date(d + 'T00:00:00').toLocaleDateString((l || lang()) === 'es' ? 'es-PA' : 'en-US', { year: '2-digit', month: 'short', day: 'numeric' }) : '—';
  const daysTo = d => d ? Math.ceil((new Date(d + 'T00:00:00') - Date.now()) / 86400000) : null;
  const load = (key, seed) => JSON.parse(localStorage.getItem(key) || 'null') || (seed || []);
  const save = (key, data) => localStorage.setItem(key, JSON.stringify(data));
  const peek = key => JSON.parse(localStorage.getItem(key) || 'null') || [];
  function exportJSON(data, name) { const b = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' }); const a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = name; a.click(); }
  function importJSON(e, cb) { const f = e.target.files[0]; if (!f) return; const r = new FileReader(); r.onload = () => { try { const d = JSON.parse(r.result); if (Array.isArray(d)) cb(d); } catch (_) { alert('Invalid JSON'); } }; r.readAsText(f); }
  const uid = () => String(Date.now()) + Math.floor(Math.random() * 1000);
  // map a record's value to {es,en,cls} via a dictionary
  const lab = (dict, key, l) => (dict[key] ? dict[key][l || lang()] : (key || '—'));
  return { initLang, lang, money, money0, num, esc, dateShort, daysTo, load, save, peek, exportJSON, importJSON, uid, lab };
})();
