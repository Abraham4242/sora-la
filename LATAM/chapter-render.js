/* =========================================================================
   SORA CHAPTER · render engine
   ========================================================================= */
(function(){
  const ORDER = ['MX','CO','BR','AR','CR','PE','CL','UY','PA','VE'];
  const root = document.getElementById('chapter-root');
  const menu = document.getElementById('country-menu');
  const trig = document.getElementById('country-trigger');
  const curFlag = document.getElementById('cur-flag');
  const curName = document.getElementById('cur-name');

  /* ---------- lang ---------- */
  const langBtns = document.querySelectorAll('.lang-toggle button');
  function setLang(l){
    document.documentElement.setAttribute('lang', l);
    localStorage.setItem('sora.lang', l);
    langBtns.forEach(b=>b.classList.toggle('active', b.dataset.lang===l));
    // also refresh nav button visibility
  }
  langBtns.forEach(b=>b.addEventListener('click',()=>setLang(b.dataset.lang)));
  setLang(localStorage.getItem('sora.lang') || 'es');

  /* ---------- menu ---------- */
  function buildMenu(activeCode){
    menu.innerHTML = ORDER.map(code=>{
      const c = window.CHAPTERS[code]; if(!c) return '';
      const isActive = code===activeCode ? 'active':'';
      return `<a class="nav-menu-item ${isActive}" href="#${code}">
        <span class="flag">${c.flag}</span>
        <span class="nm">${c.name.es} <span style="color:var(--faint);font-family:var(--mono);font-size:10px;margin-left:6px">${code}</span></span>
        <span class="nm-meta">${c.status}</span>
      </a>`;
    }).join('');
  }
  trig.addEventListener('click', e=>{e.stopPropagation(); menu.classList.toggle('open');});
  document.addEventListener('click', ()=>menu.classList.remove('open'));
  window.addEventListener('hashchange', route);

  /* ---------- template ---------- */
  function esc(s){return (s||'').replace(/[<>]/g, c=>({'<':'&lt;','>':'&gt;'}[c]||c));}
  function txt(o){ // bilingual paragraph spans
    if(!o) return '';
    return `<span data-es>${o.es||''}</span><span data-en>${o.en||o.es||''}</span>`;
  }
  function ptxt(o){
    if(!o) return '';
    return `<p data-es>${o.es||''}</p><p data-en>${o.en||o.es||''}</p>`;
  }
  // Auto-bilingual helper: wraps a single-language string in ES + auto-translated EN span
  function autoEs(str, rules){
    if(!str) return '';
    let en = String(str);
    for(const [re, rep] of rules) en = en.replace(re, rep);
    return `<span data-es>${esc(str)}</span><span data-en>${esc(en)}</span>`;
  }
  const NIGHTS_RULES = [
    [/(\d+)\s+noches?\b/gi, '$1 nights'],
    [/(\d+)\s+días?\b/gi, '$1 days'],
  ];
  const PAX_RULES = [
    [/(\d+)\s+invitados\b/gi, '$1 guests'],
    [/(\d+)\s+invitadas\b/gi, '$1 guests'],
    [/mesa privada/gi, 'private table'],
    [/mesa de chef/gi, 'chef’s table'],
    [/cabaña/gi, 'cabin'],
    [/cabañas/gi, 'cabins'],
  ];
  const EMPIRE_RULES = [
    [/panadería/gi, 'bakery'],
    [/cerveza/gi, 'beer'],
    [/harina/gi, 'flour'],
    [/medios/gi, 'media'],
    [/banca/gi, 'banking'],
    [/seguros/gi, 'insurance'],
    [/cementos?/gi, 'cement'],
    [/joyería/gi, 'jewelry'],
    [/petróleo/gi, 'oil'],
    [/forestal/gi, 'forestry'],
    [/lácteos/gi, 'dairy'],
    [/diversos/gi, 'diversified'],
    [/(\d+)\+\s*marcas/gi, '$1+ brands'],
    [/más grande del mundo/gi, 'largest in the world'],
    [/(\d+)\s+países/gi, '$1 countries'],
    [/participaciones varias/gi, 'various holdings'],
    [/intereses inmobiliarios/gi, 'real estate interests'],
    [/construcción/gi, 'construction'],
    [/minería/gi, 'mining'],
    [/cobre/gi, 'copper'],
    [/ferrocarriles/gi, 'rail'],
    [/infraestructura/gi, 'infrastructure'],
    [/aeropuertos/gi, 'airports'],
    [/viñedos/gi, 'vineyards'],
    [/hoteles/gi, 'hotels'],
    [/cadena/gi, 'chain'],
    [/oposición histórica/gi, 'historic opposition'],
    [/figura política/gi, 'political figure'],
    [/compite con/gi, 'competes with'],
    [/ingenios azucareros/gi, 'sugar mills'],
    [/azúcar/gi, 'sugar'],
    [/televisión/gi, 'television'],
    [/\bcon\s+([A-Z])/g, 'with $1'],      // "con Setubal" → "with Setubal"
  ];
  const NAME_RULES = [
    [/^Familia\s+(.+)$/, 'The $1 Family'],
    [/^Familias\s+(.+)$/, 'The $1 Families'],
  ];
  const PRINCIPAL_RULES = [
    [/sin patriarca único/gi, 'no single patriarch'],
    [/sucesión/gi, 'succession'],
    [/fallecido/gi, 'deceased'],
    [/hijos?/gi, 'children'],
    [/hermanos?/gi, 'brothers'],
    [/hermanas?/gi, 'sisters'],
    [/familias/gi, 'families'],
  ];
  // Generic words used inside Spanish descriptions of empires that should soften in EN:
  const NOTE_RULES = [
    [/compite con/gi, 'competes with'],
    [/junto a/gi, 'alongside'],
    [/con\s+(\w)/g, 'with $1'],  // leave proper nouns
  ];

  function renderHero(c){
    const tier = c.tier===1?'Tier 1':c.tier===2?'Tier 2':'Tier 3';
    const stat = c.status==='live'?(['EN VIVO','LIVE']):c.status==='launching'?(['LANZANDO','LAUNCHING']):c.status==='gated'?(['ACCESO POR INVITACIÓN','GATED']):(['PRÓXIMAMENTE','COMING SOON']);
    return `
    <section class="hero">
      <div class="hero-bg">${c.hero.svg||''}</div>
      <div class="hero-veil"></div>
      <div class="hero-in">
        <div class="hero-eyebrow">
          <span class="dot"></span>
          <span>${c.flag}&nbsp;&nbsp;${c.code}</span>
          <span class="sep"></span>
          <span data-es>${tier} · ${stat[0]}</span><span data-en>${tier} · ${stat[1]}</span>
          <span class="sep"></span>
          <span>SORA · LA COMPAÑÍA</span>
        </div>
        <h1><span data-es>${c.name.es}</span><span data-en>${c.name.en}</span></h1>
        <div class="hero-tag">${txt(c.hero.tagline)}</div>
        <div class="hero-meta">
          <div>
            <span class="k" data-es>Go-live</span><span class="k" data-en>Go-live</span>
            <span class="v">${esc(c.goLive)}</span>
          </div>
          <div>
            <span class="k" data-es>Capítulos</span><span class="k" data-en>Chapters</span>
            <span class="v">${c.weekends.length} · ${c.experiences.length} <span data-es>experiencias</span><span data-en>day exp.</span></span>
          </div>
          <div>
            <span class="k" data-es>Margen meta</span><span class="k" data-en>Target margin</span>
            <span class="v">${esc(c.hero.targetMargin||'30-35%')}</span>
          </div>
          <div>
            <span class="k" data-es>Burn mensual</span><span class="k" data-en>Monthly burn</span>
            <span class="v">${esc(c.econ.burn)}</span>
          </div>
        </div>
      </div>
    </section>`;
  }

  function renderThesis(c){
    return `
    <section>
      <div class="wrap">
        <div class="thesis">
          <div>
            <div class="section-num"><em>01</em> · <span data-es>Tesis</span><span data-en>Thesis</span></div>
          </div>
          <div class="thesis-body">${ptxt(c.thesis)}</div>
        </div>
      </div>
    </section>`;
  }

  function renderRegions(c){
    return `
    <section>
      <div class="wrap">
        <div class="section-head">
          <div>
            <div class="section-num"><em>02</em> · <span data-es>Anclas</span><span data-en>Anchors</span></div>
          </div>
          <div>
            <h2 class="section-title"><span data-es>Regiones <em>ancla</em></span><span data-en>Anchor <em>regions</em></span></h2>
            <div class="section-lede">${txt(c.regionsLede||{es:'Los lugares donde cada fin de semana Sora ya hace sentido. Curaduría, dormida, cocina y gente — todo a una hora de manejo.', en:'The places where every Sora weekend already makes sense. Curation, lodging, kitchen and people — all within a one-hour drive.'})}</div>
          </div>
        </div>
        <div class="regions">
          ${c.regions.map((r,i)=>`
            <div class="region">
              <div class="region-mark">${String(i+1).padStart(2,'0')}</div>
              <div class="region-vibe">${txt(r.vibe)}</div>
              <div class="region-name">${esc(r.name)}</div>
              <div class="region-why">${txt(r.why)}</div>
            </div>`).join('')}
        </div>
      </div>
    </section>`;
  }

  function renderWeekends(c){
    return `
    <section>
      <div class="wrap">
        <div class="section-head">
          <div>
            <div class="section-num"><em>03</em> · <span data-es>Fines de semana</span><span data-en>Weekends</span></div>
          </div>
          <div>
            <h2 class="section-title"><span data-es>Pesos pesados <em>curados</em></span><span data-en>Curated <em>headliners</em></span></h2>
            <div class="section-lede">${txt({es:'Cada fin de semana es un guion de 36-96 horas. Hotel, cocina, paseo, gente. Sin sorpresas — solo lo que vinieron a vivir.', en:'Every weekend is a 36-96 hour script. Hotel, kitchen, walk, people. No surprises — only what they came to live.'})}</div>
          </div>
        </div>
        <div class="weekends">
          ${c.weekends.map((w,i)=>`
            <div class="wknd">
              <div class="wknd-num">${String(i+1).padStart(2,'0')}</div>
              <div class="wknd-head">
                <h3>${w.title}</h3>
                <div class="wknd-where">${esc(w.where)}</div>
                <div class="wknd-meta">
                  <span>${autoEs(w.nights, NIGHTS_RULES)}</span>
                  <span>${esc(w.hotel)}</span>
                  <span>${autoEs(w.pax, PAX_RULES)}</span>
                </div>
              </div>
              <div class="wknd-itin">${txt(w.itin)}</div>
              <div class="wknd-price">
                <div class="p">${esc(w.price)}</div>
                <div class="pax" data-es>por persona</div><div class="pax" data-en>per guest</div>
                <div class="margin">${esc(w.margin)} <span data-es>margen</span><span data-en>margin</span></div>
              </div>
            </div>`).join('')}
        </div>
      </div>
    </section>`;
  }

  function renderExperiences(c){
    return `
    <section>
      <div class="wrap">
        <div class="section-head">
          <div>
            <div class="section-num"><em>04</em> · <span data-es>Días</span><span data-en>Day trips</span></div>
          </div>
          <div>
            <h2 class="section-title"><span data-es>Experiencias <em>de día</em></span><span data-en>Single-<em>day</em> experiences</span></h2>
            <div class="section-lede">${txt({es:'Para los que no pueden cortar un fin de semana entero. Lo justo para abrir el apetito de volver.', en:"For those who can't carve out a full weekend. Just enough to whet the appetite to return."})}</div>
          </div>
        </div>
        <div class="exp-grid">
          ${c.experiences.map(e=>`
            <div class="exp">
              <div class="et">${esc(e.title)}</div>
              <div class="ed">${txt(e.desc)}</div>
              <div class="ef">
                <div class="eh">${esc(e.hours)}</div>
                <div class="ep">${esc(e.price)}</div>
              </div>
            </div>`).join('')}
        </div>
      </div>
    </section>`;
  }

  function renderRealEstate(c){
    return `
    <section>
      <div class="wrap">
        <div class="section-head">
          <div>
            <div class="section-num"><em>05</em> · <span data-es>Propiedades</span><span data-en>Real estate</span></div>
          </div>
          <div>
            <h2 class="section-title"><span data-es>Brazo <em>inmobiliario</em></span><span data-en>The <em>property</em> arm</span></h2>
            <div class="section-lede">${txt(c.realEstate.lede)}</div>
          </div>
        </div>
        <div class="re-grid">
          <div>
            <div class="re-intro">${txt(c.realEstate.intro)}</div>
            <div class="re-zones">
              ${c.realEstate.zones.map(z=>`
                <div class="re-zone">
                  <div>
                    <div class="rn">${esc(z.name)}</div>
                    ${z.note?`<div class="re-note">${txt(z.note)}</div>`:''}
                  </div>
                  <div class="rr">${esc(z.range)}</div>
                </div>`).join('')}
            </div>
          </div>
          <div class="re-side">
            <h4 data-es>Brokers recomendados</h4><h4 data-en>Recommended brokers</h4>
            ${c.realEstate.brokers.map(b=>`<div class="re-broker">${esc(b.name)} <em>${esc(b.tag||'')}</em></div>`).join('')}
            <h4 style="margin-top:24px" data-es>Comisión típica</h4><h4 style="margin-top:24px" data-en>Typical commission</h4>
            <div class="re-broker" style="font-family:var(--display);font-size:24px;color:var(--coral);border:0">${esc(c.realEstate.commission)}</div>
          </div>
        </div>
      </div>
    </section>`;
  }

  function renderPower(c){
    const p = (window.SORA_POWER || {})[c.code];
    if(!p) return '';
    const pol = (p.political||[]).map(x=>`
      <div class="power-row">
        <div class="pr-role">${esc(x.role)}</div>
        <div class="pr-name">${esc(x.name)}</div>
        <div class="pr-org">${esc(x.org||'')}</div>
        ${x.notes?`<div class="pr-note">${txt(x.notes)}</div>`:''}
      </div>`).join('');
    const tou = (p.tourism||[]).map(x=>`
      <div class="power-row">
        <div class="pr-role">${esc(x.name)}</div>
        <div class="pr-name">${esc(x.leader||'')}</div>
        <div class="pr-org">${esc(x.size||'')}</div>
        ${x.notes?`<div class="pr-note">${txt(x.notes)}</div>`:''}
      </div>`).join('');
    const fam = (p.families||[]).map(x=>`
      <div class="power-family">
        <div class="pf-head">
          <div class="pf-name">${autoEs(x.name, NAME_RULES)}</div>
          ${x.principal?`<div class="pf-principal">${autoEs(x.principal, PRINCIPAL_RULES)}${x.age?' · '+x.age:''}</div>`:''}
        </div>
        ${x.empire?`<div class="pf-empire">${autoEs(x.empire, EMPIRE_RULES)}</div>`:''}
        ${x.reach?`<div class="pf-reach">${txt(x.reach)}</div>`:''}
        ${x.angle?`<div class="pf-angle"><strong>${(document.documentElement.lang==='en')?'Sora angle:':'Ángulo Sora:'}</strong> ${txt(x.angle)}</div>`:''}
      </div>`).join('');
    const ass = (p.associations||[]).map(x=>`
      <div class="power-row">
        <div class="pr-role">${esc(x.name)}</div>
        ${x.notes?`<div class="pr-note">${txt(x.notes)}</div>`:''}
      </div>`).join('');
    return `
    <section style="background:linear-gradient(180deg,var(--cream) 0%,var(--cream-2) 50%,var(--cream) 100%)">
      <div class="wrap">
        <div class="section-head">
          <div>
            <div class="section-num"><em>06</em> · <span data-es>Poder & influencia</span><span data-en>Power & influence</span></div>
          </div>
          <div>
            <h2 class="section-title"><span data-es>Cómo <em>se mueve</em> el país</span><span data-en>How the country <em>actually moves</em></span></h2>
            <div class="section-lede">${txt({es:'Quién controla qué — y por dónde entrar. Cinco capas: gobierno actual, cámaras de turismo, familias económicas y su alcance, asociaciones gremiales. Verificar nombres antes de cualquier acercamiento (los cargos rotan).', en:"Who controls what — and where to enter. Five layers: current government, tourism chambers, economic families and their reach, trade associations. Verify names before any outreach (positions rotate)."})}</div>
          </div>
        </div>

        <div class="power-summary">${ptxt(p.summary)}</div>

        <div class="power-section">
          <h4 class="power-h"><span data-es>· Gobierno & enforcement</span><span data-en>· Government & enforcement</span></h4>
          <div class="power-grid">${pol}</div>
        </div>

        <div class="power-section">
          <h4 class="power-h"><span data-es>· Autoridades de turismo</span><span data-en>· Tourism authorities</span></h4>
          <div class="power-grid">${tou}</div>
        </div>

        <div class="power-section">
          <h4 class="power-h"><span data-es>· Familias económicas · alcance e influencia</span><span data-en>· Economic families · reach & influence</span></h4>
          <div class="power-families">${fam}</div>
        </div>

        ${ass ? `<div class="power-section">
          <h4 class="power-h"><span data-es>· Asociaciones empresariales</span><span data-en>· Business associations</span></h4>
          <div class="power-grid power-grid-half">${ass}</div>
        </div>` : ''}

      </div>
    </section>`;
  }

  function renderOps(c){
    return `
    <section>
      <div class="wrap">
        <div class="section-head">
          <div>
            <div class="section-num"><em>07</em> · <span data-es>Legal & operación</span><span data-en>Legal & ops</span></div>
          </div>
          <div>
            <h2 class="section-title"><span data-es>Estructura <em>local</em></span><span data-en>Local <em>structure</em></span></h2>
            <div class="section-lede">${txt({es:'Cómo se monta legalmente el capítulo, qué bufete contratar, qué banco, qué carril cripto. Sin esto no hay weekend que venda.', en:'How the chapter is legally set up — which firm, which bank, which crypto rail. Without this, no weekend sells.'})}</div>
          </div>
        </div>
        <div class="ops-grid">
          <div class="ops">
            <h4 data-es>Vehículo legal</h4><h4 data-en>Legal vehicle</h4>
            <div class="opv">${txt(c.ops.vehicle)}</div>
            <div class="opn">${txt(c.ops.vehicleNote)}</div>
          </div>
          <div class="ops">
            <h4 data-es>Bufetes</h4><h4 data-en>Law firms</h4>
            <ul>
              ${c.ops.firms.map(f=>`<li>${esc(f.name)} <em>${esc(f.tag||'')}</em></li>`).join('')}
            </ul>
          </div>
          <div class="ops">
            <h4 data-es>Banco · cripto · anfitriones</h4><h4 data-en>Bank · crypto · hosts</h4>
            <div class="opv">${esc(c.ops.bank)}</div>
            <div class="opn">${txt(c.ops.bankNote)}</div>
            <div class="opn" style="margin-top:10px"><strong style="color:var(--ink)">${txt({es:'Anfitriones',en:'Hosts'})}:</strong> ${txt(c.ops.hosts)}</div>
          </div>
        </div>
      </div>
    </section>`;
  }

  function renderEcon(c){
    const e = c.econ;
    return `
    <section>
      <div class="wrap">
        <div class="section-head">
          <div>
            <div class="section-num"><em>08</em> · <span data-es>Números</span><span data-en>Numbers</span></div>
          </div>
          <div>
            <h2 class="section-title"><span data-es>Cómo <em>cierra</em></span><span data-en>How it <em>breaks even</em></span></h2>
            <div class="section-lede">${txt({es:'Cada capítulo se mide solo. Si no llega a break-even en 6 meses se replantea.', en:"Each chapter stands on its own. If it doesn't hit break-even within 6 months, we re-think it."})}</div>
          </div>
        </div>
        <div class="econ">
          <div class="econ-cell"><div class="ek" data-es>Setup</div><div class="ek" data-en>Setup</div><div class="ev">${esc(e.setup)}</div><div class="es">${txt(e.setupNote||{es:'Una vez',en:'One-time'})}</div></div>
          <div class="econ-cell"><div class="ek" data-es>Burn mensual</div><div class="ek" data-en>Monthly burn</div><div class="ev">${esc(e.burn)}</div><div class="es">${txt(e.burnNote||{es:'Anfitriones + marketing + retainer',en:'Hosts + marketing + retainer'})}</div></div>
          <div class="econ-cell accent"><div class="ek" data-es>Break-even / trim.</div><div class="ek" data-en>Break-even / qtr</div><div class="ev">${esc(e.breakeven)}</div><div class="es">${txt(e.breakevenNote||{es:'Punto al que tiene que llegar',en:'The number it has to clear'})}</div></div>
          <div class="econ-cell"><div class="ek" data-es>Q1 realista</div><div class="ek" data-en>Realistic Q1</div><div class="ev">${esc(e.q1)}</div><div class="es">${txt(e.q1Note||{es:'Margen del primer trimestre',en:'Margin in first quarter'})}</div></div>
          <div class="econ-cell"><div class="ek" data-es>Inmobiliario suma</div><div class="ek" data-en>Real estate adds</div><div class="ev">${esc(e.re)}</div><div class="es">${txt(e.reNote||{es:'Por cierre',en:'Per closing'})}</div></div>
        </div>
      </div>
    </section>`;
  }

  function renderRisks(c){
    return `
    <section>
      <div class="wrap">
        <div class="section-head">
          <div>
            <div class="section-num"><em>09</em> · <span data-es>Riesgos</span><span data-en>Risks</span></div>
          </div>
          <div>
            <h2 class="section-title"><span data-es>Qué <em>vigilar</em></span><span data-en>What to <em>watch</em></span></h2>
            <div class="section-lede">${txt({es:'No para dar miedo — para tener un plan B antes de que el plan A se rompa.', en:'Not to be alarmist — to have a plan B before plan A breaks.'})}</div>
          </div>
        </div>
        <div class="risks">
          ${c.risks.map((r,i)=>`
            <div class="risk">
              <div class="rn">${String(i+1).padStart(2,'0')} · ${txt(r.label)}</div>
              <div class="rb">${txt(r.body)}</div>
            </div>`).join('')}
        </div>
      </div>
    </section>`;
  }

  function renderFoot(c){
    const idx = ORDER.indexOf(c.code);
    const prev = ORDER[(idx-1+ORDER.length)%ORDER.length];
    const next = ORDER[(idx+1)%ORDER.length];
    const P = window.CHAPTERS[prev], N = window.CHAPTERS[next];
    return `
    <footer class="chap-foot">
      <div class="chap-foot-in">
        <div>
          <h5 data-es>Anterior</h5><h5 data-en>Previous</h5>
          <a href="#${prev}" class="chap-nav-pair">
            <span class="npk">${P.flag}&nbsp;&nbsp;${prev}</span>
            <span class="npv">${P.name.es}</span>
          </a>
        </div>
        <div>
          <h5 data-es>Enlaces</h5><h5 data-en>Links</h5>
          <a href="../sora-hq.html">↗ <span data-es>Comando central HQ</span><span data-en>HQ command center</span></a>
          <a href="./dashboard.html">↗ <span data-es>Tablero LATAM en vivo</span><span data-en>Live LATAM dashboard</span></a>
          <a href="../sora/web/index.html">↗ <span data-es>Sitio público Sora</span><span data-en>Sora public site</span></a>
          <a href="../sora/app/index.html">↗ <span data-es>App Sora</span><span data-en>Sora app</span></a>
        </div>
        <div>
          <h5 data-es>Siguiente</h5><h5 data-en>Next</h5>
          <a href="#${next}" class="chap-nav-pair">
            <span class="npk">${N.flag}&nbsp;&nbsp;${next}</span>
            <span class="npv">${N.name.es}</span>
          </a>
        </div>
      </div>
      <div class="chap-sig">SORA · La Compañía · MMXXVI · <span data-es>Una marca, quince capítulos, un continente</span><span data-en>One brand, fifteen chapters, one continent</span></div>
    </footer>`;
  }

  /* ---------- route ---------- */
  function route(){
    let code = (location.hash||'').replace('#','').toUpperCase();
    if(!ORDER.includes(code)) code = 'MX';
    const c = window.CHAPTERS[code];
    if(!c){ root.innerHTML = `<div style="padding:120px 32px;text-align:center;font-family:var(--serif);color:var(--ink-3)">Loading ${code}…</div>`; return; }
    curFlag.textContent = c.flag;
    curName.textContent = c.name.es;
    document.title = `SORA · ${c.name.en} Chapter`;
    buildMenu(code);
    root.innerHTML =
      renderHero(c) +
      renderThesis(c) +
      renderRegions(c) +
      renderWeekends(c) +
      renderExperiences(c) +
      renderRealEstate(c) +
      renderPower(c) +
      renderOps(c) +
      renderEcon(c) +
      renderRisks(c) +
      renderFoot(c);
    window.scrollTo({top:0,behavior:'instant'});
  }

  // wait one tick to allow all data scripts to load
  if(document.readyState==='loading'){document.addEventListener('DOMContentLoaded',route);}
  else{route();}
})();
