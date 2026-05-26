window.CHAPTERS.AR = {
  code:'AR', flag:'🇦🇷', tier:1, status:'soon', goLive:'Q1 2027',
  name:{es:'Argentina', en:'Argentina'},
  hero:{
    targetMargin:'34-40%',
    tagline:{
      es:'La cuna del gusto en LATAM. Buenos Aires, Mendoza, Patagonia. Tipo de cambio favorable convierte cada peso en margen.',
      en:'LATAM\'s seat of taste. Buenos Aires, Mendoza, Patagonia. Favorable exchange rate converts every peso into margin.'
    },
    svg:`<svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="arsky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#3D2238"/>
          <stop offset="35%" stop-color="#6E3650"/>
          <stop offset="70%" stop-color="#B5694E"/>
          <stop offset="100%" stop-color="#E2A24A"/>
        </linearGradient>
      </defs>
      <rect width="1600" height="900" fill="url(#arsky)"/>
      <path d="M0,540 L120,420 L240,500 L360,380 L500,470 L640,360 L780,440 L920,330 L1080,420 L1240,300 L1400,400 L1600,330 L1600,900 L0,900 Z" fill="#2A1F2A" opacity=".75"/>
      <path d="M0,640 L160,560 L320,610 L480,520 L640,580 L800,500 L960,570 L1120,490 L1280,560 L1440,470 L1600,540 L1600,900 L0,900 Z" fill="#1A1320" opacity=".88"/>
      <g opacity=".55" fill="#FFF3D2">
        <circle cx="280" cy="180" r="1.5"/><circle cx="540" cy="220" r="1"/><circle cx="780" cy="160" r="2"/><circle cx="1020" cy="200" r="1.5"/>
        <circle cx="1260" cy="180" r="1.5"/><circle cx="1420" cy="230" r="1"/><circle cx="180" cy="260" r="1"/>
      </g>
      <path d="M1080,260 Q1100,265 1120,260 L1120,255 Q1100,260 1080,255 Z" fill="#FFF3D2" opacity=".7"/>
    </svg>`
  },
  thesis:{
    es:'Argentina es la cuna del gusto en LATAM — vino, carne, diseño, literatura. Buenos Aires tiene la densidad cultural de Madrid o Lisboa a 30% del costo en USD para el turista premium. Mendoza es la región vinícola más importante del hemisferio sur. El Calafate y Bariloche son productos terminados.\n\nLa volatilidad cambiaria es el principal riesgo operativo pero crea el principal margen: cotizar USD, gastar pesos, el spread es la utilidad. Sora-Argentina puede tener el margen más alto del continente.',
    en:'Argentina is LATAM\'s seat of taste — wine, beef, design, literature. Buenos Aires has the cultural density of Madrid or Lisbon at 30% the USD cost to the premium traveler. Mendoza is the most important wine region in the Southern Hemisphere. El Calafate and Bariloche are finished products.\n\nExchange-rate volatility is the main operational risk but creates the main margin: price USD, spend pesos, the spread is the profit. Sora-Argentina can carry the highest margin on the continent.'
  },
  regions:[
    {name:'Buenos Aires · Palermo · Recoleta · San Telmo', vibe:{es:'Capital cultural', en:'Cultural capital'}, why:{es:'Mejor escena de restaurantes y noche en LATAM. Don Julio, Tegui, Anchoita. Tango y librerías como infraestructura.', en:'Best restaurant + nightlife scene in LATAM. Don Julio, Tegui, Anchoita. Tango and bookshops as infrastructure.'}},
    {name:'Mendoza · Valle de Uco · Luján de Cuyo', vibe:{es:'Capital del Malbec', en:'Malbec capital'}, why:{es:'1,500 bodegas. Catena Zapata, Salentein, Bodega DiamAndes. Cordillera al fondo.', en:'1,500 wineries. Catena Zapata, Salentein, Bodega DiamAndes. Andes as backdrop.'}},
    {name:'Bariloche · Patagonia Norte', vibe:{es:'Lagos + bosques', en:'Lakes + forests'}, why:{es:'Llao Llao, Cerro Catedral, Ruta de los 7 Lagos. Suiza pero con Malbec.', en:'Llao Llao, Cerro Catedral, Seven Lakes Route. Switzerland but with Malbec.'}},
    {name:'El Calafate · Glaciar Perito Moreno', vibe:{es:'Hielo dramático', en:'Dramatic ice'}, why:{es:'El glaciar es bucket-list pura. Trekking sobre hielo, navegación en el lago.', en:'The glacier is pure bucket-list. Ice trekking, lake navigation.'}},
    {name:'Salta · Cafayate · Norte Andino', vibe:{es:'Desierto rojo + Torrontés', en:'Red desert + Torrontés'}, why:{es:'Quebrada de Humahuaca UNESCO, ruta de altura, vinos de altura únicos en el mundo.', en:'Quebrada de Humahuaca UNESCO, high-altitude route, world-unique high-altitude wines.'}},
    {name:'Península Valdés · Patagonia Atlántica', vibe:{es:'Ballenas + fauna', en:'Whales + wildlife'}, why:{es:'Junio-diciembre: ballenas franca australes. Pingüinos en Punta Tombo. Producto estacional fuerte.', en:'June-December: southern right whales. Penguins at Punta Tombo. Strong seasonal product.'}}
  ],
  weekends:[
    {title:'Buenos Aires · <em>Palermo Long Weekend</em>', where:'CABA', nights:'3 noches', hotel:'Casa Lucía / Faena Hotel', pax:'14 invitados',
      price:'$1,180', margin:'40%',
      itin:{es:'Cena Don Julio (mesa privada), tango milonga en La Catedral, mercado de San Telmo, brunch en Oporto, librería El Ateneo, almuerzo en Tegui.',
       en:'Don Julio (private table), tango milonga at La Catedral, San Telmo market, brunch at Oporto, El Ateneo bookshop, lunch at Tegui.'}},
    {title:'Mendoza · <em>Valle de Uco</em>', where:'Mendoza', nights:'3 noches', hotel:'The Vines Resort / Cavas Wine Lodge', pax:'12 invitados',
      price:'$1,580', margin:'38%',
      itin:{es:'4 bodegas curadas (Salentein, DiamAndes, Bodega Atamisque), asado en Siete Fuegos (Francis Mallmann), cabalgata al atardecer.',
       en:'4 curated wineries (Salentein, DiamAndes, Bodega Atamisque), asado at Siete Fuegos (Francis Mallmann), sunset horseback ride.'}},
    {title:'Bariloche · <em>Lagos Andinos</em>', where:'Patagonia Norte', nights:'4 noches', hotel:'Llao Llao Resort', pax:'12 invitados',
      price:'$1,890', margin:'35%',
      itin:{es:'Cerro Campanario, Ruta de los 7 Lagos, navegación Brazo Tristeza, almuerzo en Patagonia Sin Fronteras, chocolatería de Bariloche.',
       en:'Cerro Campanario, Seven Lakes Route, Brazo Tristeza navigation, lunch at Patagonia Sin Fronteras, Bariloche chocolate.'}},
    {title:'El Calafate · <em>Perito Moreno</em>', where:'Santa Cruz', nights:'3 noches', hotel:'EOLO Lodge', pax:'10 invitados',
      price:'$2,290', margin:'36%',
      itin:{es:'Trekking sobre el glaciar (mini-trek), navegación cara sur, cena en EOLO con vista, cabalgata en estepa.',
       en:'Mini-trek on the glacier, south-face navigation, EOLO dinner with view, steppe horseback ride.'}},
    {title:'Salta · Cafayate · <em>Norte Andino</em>', where:'Salta', nights:'4 noches', hotel:'Patios de Cafayate / House of Jasmines', pax:'10 invitados',
      price:'$1,420', margin:'37%',
      itin:{es:'Quebrada de Humahuaca, Salinas Grandes, bodega El Esteco, cocina andina en El Bagual, mercado de Salta.',
       en:'Quebrada de Humahuaca, Salinas Grandes, El Esteco winery, Andean cuisine at El Bagual, Salta market.'}}
  ],
  experiences:[
    {title:'Don Julio · mesa privada', hours:'3h', price:'$185', desc:{es:'La parrilla #1 del mundo (lista 50 Best). Sora tiene reserva blindada.', en:'World\'s #1 parrilla (50 Best). Sora has locked-in reservation.'}},
    {title:'Milonga La Catedral', hours:'3h', price:'$65', desc:{es:'Clase de tango + show + cena ligera. Atmosfera de teatro abandonado.', en:'Tango class + show + light dinner. Abandoned-theater atmosphere.'}},
    {title:'Recoleta · cementerio + galerías', hours:'4h', price:'$85', desc:{es:'Guía cultural privado. Eva Perón + Malba + Galería Cosmocosa.', en:'Private culture guide. Eva Perón + Malba + Galería Cosmocosa.'}},
    {title:'Catena Zapata · cata privada', hours:'4h', price:'$195', desc:{es:'Pirámide icónica de Catena. Cata vertical de Malbec con enólogo. Almuerzo.', en:'Iconic Catena pyramid. Vertical Malbec tasting with winemaker. Lunch.'}},
    {title:'Asado en Siete Fuegos', hours:'4h', price:'$245', desc:{es:'Mallmann en The Vines. Cocción al fuego abierto, 7 brasas. Reservar 60 días antes.', en:'Mallmann at The Vines. Open-fire cooking, 7 embers. Book 60 days ahead.'}},
    {title:'Mini-trek Perito Moreno', hours:'8h', price:'$220', desc:{es:'1 hora caminando sobre el glaciar con crampones. Brindis con whisky en hielo milenario.', en:'1 hour walking on the glacier with crampons. Whisky toast on millennial ice.'}},
    {title:'Salinas Grandes · día completo', hours:'10h', price:'$165', desc:{es:'Manejo escénico por Quebrada, fotos en el blanco infinito, almuerzo en Purmamarca.', en:'Scenic drive through Quebrada, photos on the infinite white, lunch in Purmamarca.'}},
    {title:'Anchoita · mesa chef', hours:'3h', price:'$140', desc:{es:'Cocina argentina contemporánea de Enrique Piñeyro. 7 tiempos, maridaje.', en:'Contemporary Argentine cuisine by Enrique Piñeyro. 7 courses, pairing.'}}
  ],
  realEstate:{
    lede:{es:'Argentina en USD es un bargain estructural — pero el cepo cambiario y la fiscalidad requieren ingeniería. Premio: rendimiento de alquiler en USD ridículamente alto.', en:'Argentina in USD is a structural bargain — but the currency controls and taxation require engineering. Payoff: ridiculously high USD rental yields.'},
    intro:{es:'Operar vía Sociedad Anónima local. Compras en USD efectivo o vía transferencias offshore. Asesor cambiario obligatorio para mover capital.', en:'Operate via local Sociedad Anónima. Purchases in USD cash or via offshore wires. Currency advisor mandatory to move capital.'},
    zones:[
      {name:'Palermo · Recoleta · CABA', range:'$1,800 – $3,500 /m²', note:{es:'Apartamento 2BR Palermo Hollywood $180-300k. Rendimiento Airbnb USD: 8-12% bruto.', en:'2BR Palermo Hollywood apartment $180-300k. USD Airbnb yield: 8-12% gross.'}},
      {name:'Mendoza · Chacras de Coria', range:'$200k – $1.2M', note:{es:'Casa con olivos $300-600k. Boutique wine-lodge play viable.', en:'House with olive trees $300-600k. Boutique wine-lodge play viable.'}},
      {name:'Bariloche · lago', range:'$300k – $2M', note:{es:'Casa al lago $400k-$1.2M. Renta vacacional fuerte verano + invierno.', en:'Lakefront house $400k-$1.2M. Strong vacation rental summer + winter.'}},
      {name:'Cafayate · viñedo', range:'$80k – $500k', note:{es:'Hectárea con viña activa $40-120k. Producción Torrontés boutique posible.', en:'Hectare with active vineyard $40-120k. Boutique Torrontés production viable.'}}
    ],
    brokers:[
      {name:'Mantra Real Estate', tag:'BA · Palermo'},
      {name:'Bullrich Inmobiliaria', tag:'BA · Recoleta'},
      {name:'Cordillera Vinos', tag:'Mendoza'},
      {name:'Llao Llao Properties', tag:'Bariloche'}
    ],
    commission:'3-4% · $10-60k'
  },
  ops:{
    vehicle:{es:'Sociedad Anónima (S.A.) o S.R.L.', en:'Sociedad Anónima (S.A.) or S.R.L.'},
    vehicleNote:{es:'S.A. preferida. Costo $3-5k, 30-45 días. Capital mínimo simbólico. Asesor cambiario AFIP desde día 1.', en:'S.A. preferred. Cost $3-5k, 30-45 days. Symbolic minimum capital. AFIP currency advisor from day 1.'},
    firms:[
      {name:'Marval O\'Farrell Mairal', tag:'Tier-1'},
      {name:'Bruchou & Funes de Rioja', tag:'Mid · ágil'},
      {name:'Pérez Alati', tag:'Real estate'}
    ],
    bank:'Galicia · Banco Santander Río',
    bankNote:{es:'USDC vía Lemon Cash, Belo, Buenbit. Stablecoins son carril dominante. Cuenta USD requiere CUIT + residencia fiscal AR.', en:'USDC via Lemon Cash, Belo, Buenbit. Stablecoins are the dominant rail. USD account requires CUIT + AR tax residency.'},
    hosts:{es:'2 anfitriones — uno BA (city + Mendoza), uno Patagonia (Bariloche + Calafate). $1,200/mes USD c/u. Sueldo en USD genera lealtad excepcional.', en:'2 hosts — one BA (city + Mendoza), one Patagonia (Bariloche + Calafate). $1,200/mo USD each. USD pay generates exceptional loyalty.'}
  },
  econ:{
    setup:'$6,500', burn:'$3,400/mo', breakeven:'$10.2k', q1:'$24k', re:'$10-60k',
    setupNote:{es:'S.A. + contador + bancos', en:'S.A. + accountant + bank'},
    burnNote:{es:'2 anfitriones (USD) + contador', en:'2 hosts (USD) + accountant'},
    q1Note:{es:'5 weekends × 11 × $1,500 × 38%', en:'5 weekends × 11 × $1,500 × 38%'}
  },
  risks:[
    {label:{es:'Volatilidad cambiaria extrema', en:'Extreme FX volatility'}, body:{es:'Operar USD-only. Pesos solo para nómina y operativo. Brecha oficial/blue varía 30-90%, usar tipo de cambio MEP.', en:'Operate USD-only. Pesos for payroll and ops only. Official/blue gap varies 30-90%, use MEP rate.'}},
    {label:{es:'Cepo cambiario · controles', en:'Currency controls · cepo'}, body:{es:'Mover capital requiere planificación. Repatriación de utilidades es proceso AFIP largo.', en:'Moving capital requires planning. Profit repatriation is a long AFIP process.'}},
    {label:{es:'Cambio político', en:'Political swing'}, body:{es:'Régimen económico cambia cada elección. Diseñar para resiliencia, no para un escenario único.', en:'Economic regime shifts with each election. Design for resilience, not single-scenario.'}},
    {label:{es:'Estacionalidad Patagonia', en:'Patagonia seasonality'}, body:{es:'Bariloche/Calafate solo Nov-Abr y Jul-Ago. Resto del año operar BA + Mendoza + Norte.', en:'Bariloche/Calafate only Nov-Apr and Jul-Aug. Rest of year operate BA + Mendoza + North.'}}
  ]
};
