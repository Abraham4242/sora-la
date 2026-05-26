window.CHAPTERS.CR = {
  code:'CR', flag:'🇨🇷', tier:1, status:'soon', goLive:'Q4 2026',
  name:{es:'Costa Rica', en:'Costa Rica'},
  hero:{
    targetMargin:'32-36%',
    tagline:{
      es:'El estándar wellness del continente. Nosara, Santa Teresa, Manuel Antonio. Pura vida — bien curada.',
      en:'The continent\'s wellness standard. Nosara, Santa Teresa, Manuel Antonio. Pura vida — properly curated.'
    },
    svg:`<svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="crsky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#5C8B5A"/>
          <stop offset="40%" stop-color="#3F7350"/>
          <stop offset="75%" stop-color="#1F4030"/>
          <stop offset="100%" stop-color="#0E1F18"/>
        </linearGradient>
        <radialGradient id="crsun" cx="72%" cy="40%" r="20%"><stop offset="0%" stop-color="#FFE8B8" stop-opacity=".7"/><stop offset="100%" stop-color="#E2A24A" stop-opacity="0"/></radialGradient>
      </defs>
      <rect width="1600" height="900" fill="url(#crsky)"/>
      <circle cx="1152" cy="360" r="280" fill="url(#crsun)"/>
      <path d="M0,560 Q200,500 400,540 T800,520 T1200,530 T1600,510 L1600,900 L0,900 Z" fill="#2A4030" opacity=".75"/>
      <path d="M0,680 Q300,620 600,660 T1200,640 T1600,620 L1600,900 L0,900 Z" fill="#1B2A20" opacity=".88"/>
      <g opacity=".70" fill="#0E1612">
        <path d="M250,720 C250,680 230,640 260,600 C285,640 280,680 270,720 Z"/>
        <path d="M260,720 L268,720 L268,750 L260,750 Z"/>
        <path d="M450,710 C450,670 425,625 460,585 C490,625 485,670 470,710 Z"/>
        <path d="M460,710 L470,710 L470,745 L460,745 Z"/>
        <path d="M1150,725 C1150,685 1125,640 1160,600 C1190,640 1185,685 1170,725 Z"/>
        <path d="M1160,725 L1170,725 L1170,755 L1160,755 Z"/>
        <path d="M1350,720 C1350,680 1325,640 1360,595 C1390,640 1385,680 1370,720 Z"/>
        <path d="M1360,720 L1370,720 L1370,750 L1360,750 Z"/>
      </g>
    </svg>`
  },
  thesis:{
    es:'Costa Rica es el destino de wellness por defecto en LATAM. Nosara es el yoga capital occidental, Santa Teresa es el surf-luxury, Manuel Antonio es el postcard nacional. Mercado expat US ya maduro, infraestructura aceptable, sin riesgo cambiario (dólar circula).\n\nMargen estructural alto porque los costos son medios pero el precio que el mercado paga es premium. Setup legal limpio, banking accesible. Mejor capítulo para abrir después de Panamá si se busca riesgo bajo + escala rápida.',
    en:'Costa Rica is LATAM\'s default wellness destination. Nosara is the Western yoga capital, Santa Teresa is surf-luxury, Manuel Antonio is the national postcard. US expat market is mature, infrastructure is acceptable, no FX risk (USD circulates).\n\nStructurally high margin because costs are medium but market-clearing price is premium. Clean legal setup, accessible banking. Best chapter to open after Panama for low-risk + quick-scale.'
  },
  regions:[
    {name:'Nosara · Guiones · Pelada', vibe:{es:'Yoga + surf', en:'Yoga + surf'}, why:{es:'Capital occidental del yoga. Bodhi Tree, Harmony Hotel. Surf consistente todo el año.', en:'Western yoga capital. Bodhi Tree, Harmony Hotel. Year-round consistent surf.'}},
    {name:'Santa Teresa · Malpaís', vibe:{es:'Surf de lujo', en:'Surf luxury'}, why:{es:'Pueblo bohemio que se gentrificó. Tap House, Koji, Drift. Lance Armstrong y Mel Gibson tienen casa.', en:'Boho town that gentrified. Tap House, Koji, Drift. Lance Armstrong and Mel Gibson have homes.'}},
    {name:'Manuel Antonio · Quepos', vibe:{es:'Parque + playa', en:'Park + beach'}, why:{es:'Parque Nacional con monos cara blanca + playa de postal. Familias y parejas. Hoteles boutique.', en:'National Park with white-faced monkeys + postcard beach. Families and couples. Boutique hotels.'}},
    {name:'La Fortuna · Arenal', vibe:{es:'Volcán + termas', en:'Volcano + hot springs'}, why:{es:'Arenal en el fondo de cada vista. Tabacón Hot Springs, Nayara Tented Camp.', en:'Arenal in the background of every view. Tabacón Hot Springs, Nayara Tented Camp.'}},
    {name:'Monteverde · Bosque Nuboso', vibe:{es:'Selva en las nubes', en:'Cloud forest'}, why:{es:'Tirolesas, puentes colgantes, quetzal. Eco-lujo en Senda Monteverde.', en:'Ziplines, hanging bridges, quetzal. Eco-luxury at Senda Monteverde.'}},
    {name:'Osa · Drake Bay · Corcovado', vibe:{es:'Última frontera', en:'Last frontier'}, why:{es:'Corcovado tiene 2.5% de biodiversidad mundial. Lapa Rios, Bosque del Cabo. Premium aventura.', en:'Corcovado holds 2.5% of global biodiversity. Lapa Rios, Bosque del Cabo. Premium adventure.'}}
  ],
  weekends:[
    {title:'Nosara · <em>Yoga + Surf</em>', where:'Guanacaste', nights:'4 noches', hotel:'Bodhi Tree / Harmony Hotel', pax:'12 invitados',
      price:'$1,580', margin:'34%',
      itin:{es:'2 clases de yoga diarias, surf en Guiones, sound healing, cena en Coyol, atardecer Pelada con bebidas frías.',
       en:'2 daily yoga classes, surf at Guiones, sound healing, dinner at Coyol, Pelada sunset with cold drinks.'}},
    {title:'Santa Teresa · <em>Surf Luxe</em>', where:'Puntarenas', nights:'4 noches', hotel:'Hotel Nantipa / Koji', pax:'12 invitados',
      price:'$1,890', margin:'36%',
      itin:{es:'Surf con coach pro, cena en Koji, día en Playa Hermosa, sunset en La Lora.',
       en:'Surf with pro coach, dinner at Koji, day at Playa Hermosa, sunset at La Lora.'}},
    {title:'Arenal · <em>Volcán + Termas</em>', where:'Alajuela', nights:'3 noches', hotel:'Nayara Tented Camp', pax:'10 invitados',
      price:'$1,690', margin:'35%',
      itin:{es:'Tabacón hot springs noche, caminata Cerro Chato, cena en Nayara, café en finca local, kayak Lago Arenal.',
       en:'Tabacón hot springs at night, Cerro Chato hike, dinner at Nayara, local-farm coffee, Lake Arenal kayak.'}},
    {title:'Manuel Antonio · <em>Pacífico + Parque</em>', where:'Puntarenas', nights:'3 noches', hotel:'Arenas del Mar', pax:'12 invitados',
      price:'$1,240', margin:'33%',
      itin:{es:'Tour del parque al amanecer (sin crowd), almuerzo en El Avión, catamarán al atardecer, cena en Ronay.',
       en:'Sunrise park tour (no crowd), lunch at El Avión, sunset catamaran, dinner at Ronay.'}},
    {title:'Osa · <em>Corcovado Wild</em>', where:'Puntarenas', nights:'4 noches', hotel:'Lapa Rios Lodge', pax:'8 invitados',
      price:'$2,690', margin:'36%',
      itin:{es:'Caminatas guiadas en Corcovado, jaguares + tapires, snorkel en Isla del Caño, cena en bungalow.',
       en:'Guided Corcovado walks, jaguars + tapirs, snorkel at Caño Island, in-bungalow dinner.'}}
  ],
  experiences:[
    {title:'Yoga + sound healing', hours:'2h', price:'$45', desc:{es:'Clase + cuenco tibetano + té. Nosara o Santa Teresa.', en:'Class + Tibetan bowls + tea. Nosara or Santa Teresa.'}},
    {title:'Surf lesson · coach pro', hours:'2h', price:'$85', desc:{es:'Tabla incluida, fotos profesionales, breakfast post-sesión.', en:'Board included, pro photos, post-session breakfast.'}},
    {title:'Tabacón hot springs · noche', hours:'4h', price:'$120', desc:{es:'5 piscinas termales, cena buffet, vista al Arenal.', en:'5 thermal pools, buffet dinner, Arenal view.'}},
    {title:'Manuel Antonio Park · sin crowd', hours:'4h', price:'$95', desc:{es:'Tour 6am con biólogo. Perezosos, monos, tucanes garantizados.', en:'6am tour with biologist. Sloths, monkeys, toucans guaranteed.'}},
    {title:'Catamarán · Pacífico Central', hours:'5h', price:'$135', desc:{es:'Snorkel, almuerzo, delfines frecuentes. Open bar.', en:'Snorkel, lunch, frequent dolphins. Open bar.'}},
    {title:'Café boutique · tour finca', hours:'3h', price:'$65', desc:{es:'Tour cereza a taza + cata + almuerzo. Cooperativa Dota o Tarrazú.', en:'Cherry-to-cup tour + tasting + lunch. Dota or Tarrazú co-op.'}},
    {title:'Tirolesa Monteverde', hours:'3h', price:'$95', desc:{es:'13 cables, 2km, dossel bosque nuboso. Selvatura o Sky Adventures.', en:'13 cables, 2km, cloud-forest canopy. Selvatura or Sky Adventures.'}},
    {title:'Corcovado day-trek', hours:'8h', price:'$185', desc:{es:'Sirena Station con biólogo. Mejor avistamiento de jaguar en LATAM.', en:'Sirena Station with biologist. Best jaguar sighting in LATAM.'}}
  ],
  realEstate:{
    lede:{es:'Mercado caro pero líquido. Nosara y Santa Teresa son boutique-real-estate ya maduros. Osa y Monteverde son la próxima frontera.', en:'Pricey but liquid market. Nosara and Santa Teresa are mature boutique-real-estate. Osa and Monteverde are the next frontier.'},
    intro:{es:'Costa Rica permite propiedad 100% extranjera. Vía corporación local (S.A. o LLC) por privacidad y eficiencia fiscal. Pago en USD estándar.', en:'Costa Rica allows 100% foreign ownership. Via local corporation (S.A. or LLC) for privacy and tax efficiency. USD payment standard.'},
    zones:[
      {name:'Nosara · Guiones', range:'$400k – $2M', note:{es:'Casa boutique selva 3BR $600-900k. Renta vacacional USD 8-10% bruto.', en:'3BR jungle boutique house $600-900k. USD vacation rental 8-10% gross.'}},
      {name:'Santa Teresa · frente al mar', range:'$500k – $3M', note:{es:'Casa frente al mar $1-2M. Mercado ya muy caliente — diligencia estricta.', en:'Beachfront house $1-2M. Market is very hot — strict diligence.'}},
      {name:'Manuel Antonio · vista al mar', range:'$300k – $1.5M', note:{es:'Casa con vista al parque $400-800k. Mercado más maduro y estable.', en:'Park-view house $400-800k. More mature and stable market.'}},
      {name:'Osa · finca selva', range:'$80k – $500k', note:{es:'Hectáreas con bosque primario $30-80k/ha. Eco-lodge play viable.', en:'Hectares with primary forest $30-80k/ha. Eco-lodge play viable.'}}
    ],
    brokers:[
      {name:'2Costa Rica Real Estate', tag:'Nosara'},
      {name:'Tres Amigos Realty', tag:'Santa Teresa'},
      {name:'Coldwell Banker Pacific', tag:'Manuel Antonio'},
      {name:'Osa Tropical Properties', tag:'Osa'}
    ],
    commission:'5-6% · $15-60k'
  },
  ops:{
    vehicle:{es:'Sociedad Anónima (S.A.) o S.R.L.', en:'Sociedad Anónima (S.A.) or LLC'},
    vehicleNote:{es:'S.A. más usada. $1,500-2,500 todo incluido. 3-4 semanas. Sin capital mínimo.', en:'S.A. most common. $1,500-2,500 all-in. 3-4 weeks. No minimum capital.'},
    firms:[
      {name:'BLP Legal', tag:'Tier-1'},
      {name:'Aguilar Castillo Love', tag:'Mid'},
      {name:'Outlier Legal Services', tag:'Boutique · expat'}
    ],
    bank:'BAC San José · Banco Nacional',
    bankNote:{es:'USDC vía SatoshiTango o Bitso. Colón solo para nómina y operativo. USD circula libremente.', en:'USDC via SatoshiTango or Bitso. Colón only for payroll and ops. USD circulates freely.'},
    hosts:{es:'2 anfitriones — uno Guanacaste (Nosara + Santa Teresa), uno Pacífico Central (Manuel Antonio + Arenal). $2,000/mes USD c/u.', en:'2 hosts — one Guanacaste (Nosara + Santa Teresa), one Central Pacific (Manuel Antonio + Arenal). $2,000/mo USD each.'}
  },
  econ:{
    setup:'$5,000', burn:'$4,800/mo', breakeven:'$14.4k', q1:'$20k', re:'$15-60k',
    setupNote:{es:'S.A. + bancos + setup', en:'S.A. + bank + setup'},
    burnNote:{es:'2 anfitriones + marketing', en:'2 hosts + marketing'},
    q1Note:{es:'5 weekends × 11 × $1,580 × 35%', en:'5 weekends × 11 × $1,580 × 35%'}
  },
  risks:[
    {label:{es:'Saturación Nosara · Santa Teresa', en:'Nosara · Santa Teresa saturation'}, body:{es:'Ya caros y conocidos. Diferenciar con anclas privadas (chef en casa, surf coach exclusivo) o migrar a Osa.', en:'Already pricey and known. Differentiate with private anchors (in-house chef, exclusive surf coach) or shift to Osa.'}},
    {label:{es:'Lluvia · Sept-Nov', en:'Rain · Sept-Nov'}, body:{es:'Temporada verde reduce demanda 40%. Diseñar weekends indoor-friendly (yoga, sound, chef\'s table).', en:'Green season cuts demand 40%. Design indoor-friendly weekends (yoga, sound, chef\'s table).'}},
    {label:{es:'Caminos a Osa · Santa Teresa', en:'Roads to Osa · Santa Teresa'}, body:{es:'4×4 obligatorio. Coordinar traslados con anticipación. No prometer "fácil".', en:'4×4 required. Coordinate transfers ahead. Don\'t promise "easy".'}},
    {label:{es:'Costo de vida creciente', en:'Rising cost of living'}, body:{es:'Costa Rica ya es 70-80% del costo USA. Margen aprieta cada año. Cotizar con buffer.', en:'Costa Rica is already 70-80% of US cost. Margin tightens yearly. Price with buffer.'}}
  ]
};
