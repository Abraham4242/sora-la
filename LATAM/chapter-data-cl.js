window.CHAPTERS.CL = {
  code:'CL', flag:'🇨🇱', tier:2, status:'soon', goLive:'Q2 2027',
  name:{es:'Chile', en:'Chile'},
  hero:{
    targetMargin:'30-34%',
    tagline:{
      es:'El país más infraestructurado de Sudamérica. Atacama, Patagonia y vinos del Maipo — sin la fricción operativa del resto del continente.',
      en:'South America\'s most infrastructured country. Atacama, Patagonia and Maipo wines — without the rest of the continent\'s operational friction.'
    },
    svg:`<svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="clsky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#234A6A"/>
          <stop offset="40%" stop-color="#3D6A8A"/>
          <stop offset="75%" stop-color="#C8543A"/>
          <stop offset="100%" stop-color="#7A2D24"/>
        </linearGradient>
      </defs>
      <rect width="1600" height="900" fill="url(#clsky)"/>
      <path d="M0,460 L140,300 L280,400 L420,260 L560,360 L700,220 L840,320 L980,200 L1120,300 L1280,180 L1420,280 L1600,220 L1600,560 Q1200,640 800,580 T0,620 Z" fill="#2A3A52" opacity=".78"/>
      <path d="M0,650 Q300,580 600,620 T1200,610 T1600,580 L1600,900 L0,900 Z" fill="#161E2A" opacity=".88"/>
      <g opacity=".70" fill="#FFFFFF">
        <path d="M280,300 L320,260 L360,300 Z" opacity=".55"/>
        <path d="M420,260 L450,225 L480,260 Z" opacity=".5"/>
        <path d="M560,360 L600,310 L640,360 Z" opacity=".55"/>
        <path d="M700,220 L735,180 L770,220 Z" opacity=".5"/>
        <path d="M980,200 L1020,160 L1060,200 Z" opacity=".55"/>
        <path d="M1280,180 L1320,140 L1360,180 Z" opacity=".5"/>
      </g>
    </svg>`
  },
  thesis:{
    es:'Chile es el país más infraestructurado de Sudamérica. Vuelos LATAM puntuales, autopistas privatizadas, lodges de talla mundial (Tierra Atacama, Explora Patagonia, Awasi). El Tier-2 más fácil de operar — y el más caro del continente para el guest.\n\nMárgenes ajustados por costos altos (operaciones, salarios, transporte interno), compensados con ticket alto y tipo de cambio favorable post-2024.',
    en:'Chile is South America\'s most infrastructured country. On-time LATAM flights, privatized highways, world-class lodges (Tierra Atacama, Explora Patagonia, Awasi). Easiest Tier-2 to operate — and the continent\'s most expensive for the guest.\n\nMargins tightened by high costs (ops, salaries, internal transport), compensated by high ticket and favorable post-2024 exchange rate.'
  },
  regions:[
    {name:'Atacama · San Pedro', vibe:{es:'Desierto más seco del mundo', en:'Driest desert on Earth'}, why:{es:'Tierra Atacama, Explora, Awasi. Cielo estelar único, géiseres, salares, ALMA observatorio.', en:'Tierra Atacama, Explora, Awasi. Unique starry sky, geysers, salt flats, ALMA observatory.'}},
    {name:'Patagonia · Torres del Paine', vibe:{es:'Trekking icónico', en:'Iconic trekking'}, why:{es:'Explora, Awasi, Tierra Patagonia. W-trek o circuito O. Pumas + glaciares + macizo Paine.', en:'Explora, Awasi, Tierra Patagonia. W-trek or O-circuit. Pumas + glaciers + Paine massif.'}},
    {name:'Valle del Maipo · Casablanca · Colchagua', vibe:{es:'Vinos premium', en:'Premium wines'}, why:{es:'Concha y Toro, Viña Casa Silva, Lapostolle. Día desde Santiago.', en:'Concha y Toro, Viña Casa Silva, Lapostolle. Day trip from Santiago.'}},
    {name:'Santiago · Lastarria · Bellavista', vibe:{es:'Capital cosmopolita', en:'Cosmopolitan capital'}, why:{es:'Cerro San Cristóbal, Boragó (top 30 mundial), Mercado Central. Base de operaciones.', en:'Cerro San Cristóbal, Boragó (world top 30), Mercado Central. Operations base.'}},
    {name:'Isla de Pascua · Rapa Nui', vibe:{es:'Isla mítica + moai', en:'Mythic island + moai'}, why:{es:'Explora Rapa Nui. Vuelo desde Santiago 5h. Bucket-list para guest fuerte.', en:'Explora Rapa Nui. 5h flight from Santiago. Bucket-list for strong guest.'}},
    {name:'Chiloé · Lagos Sur', vibe:{es:'Mar interior + iglesias UNESCO', en:'Inland sea + UNESCO churches'}, why:{es:'Tierra Chiloé. Producto crudo, intacto. Curanto + palafitos + caleta de mariscos.', en:'Tierra Chiloé. Raw, intact product. Curanto + palafitos + seafood coves.'}}
  ],
  weekends:[
    {title:'Atacama · <em>Cielos del Norte</em>', where:'Antofagasta', nights:'4 noches', hotel:'Tierra Atacama', pax:'10 invitados',
      price:'$3,290', margin:'34%',
      itin:{es:'Géiseres del Tatio al amanecer, Salar de Atacama (flamencos), Valle de la Luna atardecer, observatorio astronómico privado, lagunas altiplánicas.',
       en:'Tatio Geysers at sunrise, Salar de Atacama (flamingos), Valle de la Luna sunset, private astronomical observatory, altiplanic lagoons.'}},
    {title:'Patagonia · <em>Torres del Paine</em>', where:'Magallanes', nights:'5 noches', hotel:'Explora Patagonia', pax:'10 invitados',
      price:'$4,890', margin:'32%',
      itin:{es:'Trekking guiado base Torres, cabalgata, mirador Cuernos, glaciar Grey navegación, fauna (pumas + huemules + cóndores).',
       en:'Guided trek to Torres base, horseback ride, Cuernos viewpoint, Grey glacier navigation, wildlife (pumas + huemul + condors).'}},
    {title:'Valle de Colchagua · <em>Ruta del Vino</em>', where:'Colchagua', nights:'3 noches', hotel:'Lapostolle Residence', pax:'12 invitados',
      price:'$1,890', margin:'35%',
      itin:{es:'4 viñas (Lapostolle, Casa Silva, Montes, Neyen), cabalgata viña, cena de chef en residencia, museo Colchagua.',
       en:'4 wineries (Lapostolle, Casa Silva, Montes, Neyen), vineyard horseback ride, chef\'s dinner at residence, Colchagua museum.'}},
    {title:'Santiago · <em>Capital + Casablanca</em>', where:'Región Metropolitana', nights:'3 noches', hotel:'The Singular Santiago', pax:'14 invitados',
      price:'$1,580', margin:'33%',
      itin:{es:'Boragó menú degustación, Cerro San Cristóbal, mercado central, día en Casablanca (4 viñas), atardecer en Sky Costanera.',
       en:'Boragó tasting menu, Cerro San Cristóbal, Mercado Central, Casablanca day (4 wineries), Sky Costanera sunset.'}},
    {title:'Rapa Nui · <em>Isla de Pascua</em>', where:'Isla de Pascua', nights:'5 noches', hotel:'Explora Rapa Nui', pax:'8 invitados',
      price:'$4,290', margin:'33%',
      itin:{es:'Rano Raraku (cantera moai), Ahu Tongariki amanecer, Orongo, snorkel Anakena, ceremonia con anciano local.',
       en:'Rano Raraku (moai quarry), Ahu Tongariki sunrise, Orongo, Anakena snorkel, ceremony with local elder.'}}
  ],
  experiences:[
    {title:'Boragó · mesa privada', hours:'4h', price:'$320', desc:{es:'Rodolfo Guzmán, ingredientes endémicos chilenos. Reserva 60 días.', en:'Rodolfo Guzmán, endemic Chilean ingredients. Book 60 days ahead.'}},
    {title:'Géiseres del Tatio · amanecer', hours:'7h', price:'$165', desc:{es:'4am salida, 4,300m altitud, desayuno con vista a fumarolas.', en:'4am departure, 4,300m altitude, breakfast with view of fumaroles.'}},
    {title:'Observatorio privado · Atacama', hours:'3h', price:'$195', desc:{es:'Telescopio profesional, astrónomo guía. Mejor cielo nocturno del planeta.', en:'Pro telescope, astronomer guide. Best night sky on Earth.'}},
    {title:'W-trek 1 día · Torres', hours:'10h', price:'$285', desc:{es:'Mirador Torres base. 18km ida y vuelta. Guía + almuerzo de campo.', en:'Torres base viewpoint. 18km round-trip. Guide + field lunch.'}},
    {title:'Lapostolle · cata icónica', hours:'4h', price:'$185', desc:{es:'Clos Apalta vertical. Almuerzo en bodega subterránea. Sommelier de la viña.', en:'Clos Apalta vertical. Lunch in underground winery. Estate sommelier.'}},
    {title:'Casablanca · 4 viñas', hours:'8h', price:'$165', desc:{es:'Casas del Bosque, Matetic, Veramonte, Loma Larga. Almuerzo en una.', en:'Casas del Bosque, Matetic, Veramonte, Loma Larga. Lunch at one.'}},
    {title:'Cerro San Cristóbal + Bellavista', hours:'4h', price:'$75', desc:{es:'Funicular, atardecer en cima, cena en Como Agua para Chocolate.', en:'Funicular, summit sunset, dinner at Como Agua para Chocolate.'}},
    {title:'Ahu Tongariki amanecer', hours:'4h', price:'$95', desc:{es:'15 moai recibiendo el sol. Solo Sora con guía rapanui propio.', en:'15 moai catching the sun. Only Sora with our own Rapa Nui guide.'}}
  ],
  realEstate:{
    lede:{es:'Mercado caro, regulado, transparente. Compra extranjera 100% permitida. Apreciación lenta pero segura.', en:'Pricey, regulated, transparent market. 100% foreign purchase allowed. Slow but safe appreciation.'},
    intro:{es:'Plays más interesantes son boutique-hospitality (lodge en Atacama/Patagonia) que residencial. Santiago es comparable a Buenos Aires en precio.', en:'Most interesting plays are boutique-hospitality (Atacama/Patagonia lodge) over residential. Santiago is comparable to Buenos Aires in price.'},
    zones:[
      {name:'Santiago · Vitacura · Lastarria', range:'$200k – $1.5M', note:{es:'Departamento 2BR Lastarria $250-400k. Renta corporativa estable USD.', en:'2BR Lastarria apartment $250-400k. Stable USD corporate rental.'}},
      {name:'San Pedro de Atacama · lodge', range:'$500k – $5M', note:{es:'Lodge boutique 8-12 cabañas $1-3M. Operación turística directa, no flip.', en:'Boutique 8-12 cabin lodge $1-3M. Direct hospitality op, not flip.'}},
      {name:'Patagonia · Estancia', range:'$1M – $20M', note:{es:'Estancia ganadera con turismo $2-8M. Para guest serio o family office.', en:'Tourism-ranch estancia $2-8M. For serious guest or family office.'}},
      {name:'Casablanca · viña', range:'$300k – $3M', note:{es:'Hectárea con cepa $80-150k. Boutique wine play viable.', en:'Hectare with vines $80-150k. Boutique wine play viable.'}}
    ],
    brokers:[
      {name:'Engel & Völkers Santiago', tag:'Santiago'},
      {name:'Tierra Hotels (lodge expansion)', tag:'Atacama · Patagonia'},
      {name:'Vitacura Propiedades', tag:'Santiago'},
      {name:'Patagonia Land', tag:'Sur'}
    ],
    commission:'2-4% · $10-80k'
  },
  ops:{
    vehicle:{es:'Sociedad por Acciones (SpA)', en:'Sociedad por Acciones (SpA)'},
    vehicleNote:{es:'SpA es el más usado para foreign founders. $2-3k legales, 2-3 semanas. Sin capital mínimo.', en:'SpA most common for foreign founders. $2-3k legal, 2-3 weeks. No minimum capital.'},
    firms:[
      {name:'Carey y Cía.', tag:'Tier-1'},
      {name:'Bofill Mir & Álvarez Jana', tag:'Mid'},
      {name:'Cariola Díez Pérez-Cotapos', tag:'Real estate'}
    ],
    bank:'Banco de Chile · Santander · BCI',
    bankNote:{es:'USDC vía Buda.com o CryptoMKT. CLP estable. Cuenta USD para extranjeros con RUT.', en:'USDC via Buda.com or CryptoMKT. CLP stable. USD account for foreigners with RUT.'},
    hosts:{es:'2 anfitriones — uno Santiago (capital + Valle Maipo/Casablanca), uno Sur (Patagonia + Chiloé) o Norte (Atacama). $1,800/mes USD c/u.', en:'2 hosts — one Santiago (capital + Maipo/Casablanca), one South (Patagonia + Chiloé) or North (Atacama). $1,800/mo USD each.'}
  },
  econ:{
    setup:'$5,500', burn:'$4,400/mo', breakeven:'$13.2k', q1:'$28k', re:'$10-80k',
    setupNote:{es:'SpA + bancos + setup', en:'SpA + bank + setup'},
    burnNote:{es:'2 anfitriones + contador', en:'2 hosts + accountant'},
    q1Note:{es:'5 weekends × 10 × $2,800 × 32%', en:'5 weekends × 10 × $2,800 × 32%'}
  },
  risks:[
    {label:{es:'Costo operativo alto', en:'High operating cost'}, body:{es:'Chile es 60-70% costo USA en hospitalidad. Margen requiere ticket alto — no es destino budget.', en:'Chile is 60-70% US cost in hospitality. Margin needs high ticket — not a budget destination.'}},
    {label:{es:'Estacionalidad Patagonia', en:'Patagonia seasonality'}, body:{es:'Solo Nov-Mar. Operar Atacama + Santiago + viñas el resto del año.', en:'Only Nov-Mar. Operate Atacama + Santiago + wineries the rest of the year.'}},
    {label:{es:'Sismos · volcánica', en:'Quakes · volcanic activity'}, body:{es:'Chile es zona sísmica. Seguro de eventos obligatorio. Hoteles top tienen contingencia, validar.', en:'Chile is seismic zone. Event insurance mandatory. Top hotels have contingency, validate.'}},
    {label:{es:'Cambio político', en:'Political swings'}, body:{es:'Constituyente y reformas tributarias cíclicas. Tasa corporativa puede subir. Modelar 30% impuesto base.', en:'Constituent + tax reforms are cyclical. Corp rate can rise. Model 30% base tax.'}}
  ]
};
