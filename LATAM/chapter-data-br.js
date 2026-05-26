window.CHAPTERS.BR = {
  code:'BR', flag:'🇧🇷', tier:1, status:'soon', goLive:'Q1 2027',
  name:{es:'Brasil', en:'Brazil'},
  hero:{
    targetMargin:'32-38%',
    tagline:{
      es:'El otro mercado premium grande de LATAM — y la única estética que no es hispana. Trancoso, Búzios, Noronha. Lujo que solo Brasil sabe vender.',
      en:'LATAM\'s other large premium market — and the only non-Hispanic aesthetic on the continent. Trancoso, Búzios, Noronha. Luxury only Brazil knows how to sell.'
    },
    svg:`<svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="brsky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#1A6E6F"/>
          <stop offset="40%" stop-color="#2C8A7A"/>
          <stop offset="75%" stop-color="#E2A24A"/>
          <stop offset="100%" stop-color="#D9573B"/>
        </linearGradient>
        <radialGradient id="brsun" cx="22%" cy="32%" r="22%"><stop offset="0%" stop-color="#FFF3D2" stop-opacity=".75"/><stop offset="100%" stop-color="#E2A24A" stop-opacity="0"/></radialGradient>
      </defs>
      <rect width="1600" height="900" fill="url(#brsky)"/>
      <circle cx="352" cy="288" r="320" fill="url(#brsun)"/>
      <path d="M0,520 Q400,420 800,500 T1600,470 L1600,620 Q1200,720 800,640 T0,680 Z" fill="#0D3F4A" opacity=".7"/>
      <path d="M0,640 Q300,580 600,620 T1200,610 T1600,590 L1600,900 L0,900 Z" fill="#082B33" opacity=".82"/>
      <path d="M0,740 Q400,700 800,720 T1600,710 L1600,900 L0,900 Z" fill="#04161A" opacity=".9"/>
      <g opacity=".55" fill="#04161A">
        <path d="M180,720 L180,640 L168,640 L184,580 L200,640 L188,640 L188,720 Z"/>
        <ellipse cx="184" cy="582" rx="42" ry="14"/>
        <path d="M380,730 L380,650 L368,650 L384,590 L400,650 L388,650 L388,730 Z"/>
        <ellipse cx="384" cy="592" rx="38" ry="13"/>
        <path d="M1180,725 L1180,645 L1168,645 L1184,585 L1200,645 L1188,645 L1188,725 Z"/>
        <ellipse cx="1184" cy="587" rx="40" ry="14"/>
        <path d="M1400,735 L1400,655 L1388,655 L1404,595 L1420,655 L1408,655 L1408,735 Z"/>
        <ellipse cx="1404" cy="597" rx="36" ry="12"/>
      </g>
    </svg>`
  },
  thesis:{
    es:'Brasil es el otro mercado premium grande de LATAM — y el único con estética propia no-hispana. Trancoso convirtió la pousada en categoría de lujo global. Río, Búzios y Fernando de Noronha tienen demanda fija sin curador. El Real es volátil, la fiscalidad compleja, pero el margen unitario por evento es el más alto del continente.\n\nSora-Brasil debe vivir en una rotación de 5-6 destinos boutique, no en mass-tourism Río/SP.',
    en:'Brazil is LATAM\'s other large premium market — and the only one with a non-Hispanic aesthetic of its own. Trancoso turned the pousada into a global luxury category. Rio, Búzios and Fernando de Noronha have built-in demand without a curator. The Real is volatile, the tax code is complex, but unit margin per event is the highest on the continent.\n\nSora-Brazil should live in a rotation of 5-6 boutique destinations, not mass-tourism Rio/SP.'
  },
  regions:[
    {name:'Trancoso · Bahia', vibe:{es:'Pousada de lujo', en:'Luxury pousada'}, why:{es:'Quadrado, UXUA Casa, Praia do Espelho. La definición global del lujo brasileño.', en:'The Quadrado, UXUA Casa, Praia do Espelho. The global definition of Brazilian luxury.'}},
    {name:'Río de Janeiro · Leblon · Santa Teresa', vibe:{es:'Ciudad maravillosa', en:'Cidade maravilhosa'}, why:{es:'Restaurantes Oteque + Lasai, vista Christ the Redeemer, brunch en Copacabana Palace.', en:'Oteque + Lasai dining, Christ the Redeemer view, brunch at Copacabana Palace.'}},
    {name:'Búzios · Río Estado', vibe:{es:'Brigitte Bardot riviera', en:'Bardot riviera'}, why:{es:'Península de 23 playas, vida nocturna pulida, escape de fin de semana desde Río.', en:'Peninsula of 23 beaches, polished nightlife, weekend escape from Rio.'}},
    {name:'Fernando de Noronha', vibe:{es:'Archipiélago patrimonio UNESCO', en:'UNESCO archipelago'}, why:{es:'Solo 420 visitantes por día. El reef más limpio del Atlántico. Vuelos limitados, ticket alto.', en:'Only 420 visitors/day. Cleanest reef in the Atlantic. Limited flights, high ticket.'}},
    {name:'Chapada Diamantina · Bahia', vibe:{es:'Cañones + cascadas', en:'Canyons + waterfalls'}, why:{es:'Trekking serio, cascadas color té, eco-pousadas. Audiencia más activa que Trancoso.', en:'Serious trekking, tea-colored waterfalls, eco-pousadas. More active audience than Trancoso.'}},
    {name:'Paraty · Costa Verde', vibe:{es:'Colonial + mar verde', en:'Colonial + emerald sea'}, why:{es:'Casco histórico empedrado + 65 islas + cachaça artesanal. Festival Literário de calidad.', en:'Cobblestone historic center + 65 islands + artisanal cachaça. Quality Literary Festival.'}}
  ],
  weekends:[
    {title:'Trancoso · <em>Quadrado Weekend</em>', where:'Bahia', nights:'4 noches', hotel:'UXUA Casa Hotel', pax:'10 invitados',
      price:'$2,890', margin:'38%',
      itin:{es:'Cena en Casa Branca, día en Praia do Espelho con barco, masaje en spa UXUA, fogata en Quadrado al atardecer.',
       en:'Dinner at Casa Branca, day at Praia do Espelho with boat, UXUA spa massage, sunset bonfire at the Quadrado.'}},
    {title:'Río · <em>Cidade Maravilhosa</em>', where:'Río de Janeiro', nights:'3 noches', hotel:'Belmond Copacabana / Janeiro Hotel', pax:'12 invitados',
      price:'$1,890', margin:'32%',
      itin:{es:'Almuerzo en Oteque, atardecer en Vista Chinesa, samba en Pedra do Sal, brunch en Janeiro, helicóptero al Pão de Açúcar opcional.',
       en:'Lunch at Oteque, sunset at Vista Chinesa, samba at Pedra do Sal, brunch at Janeiro, optional helicopter to Sugarloaf.'}},
    {title:'Búzios · <em>Riviera Weekend</em>', where:'Río Estado', nights:'3 noches', hotel:'Insólito Boutique', pax:'14 invitados',
      price:'$1,420', margin:'35%',
      itin:{es:'Tour de 4 playas en barco, cena en Sawasdee, vida nocturna en Rua das Pedras, día de spa.',
       en:'4-beach boat tour, dinner at Sawasdee, nightlife on Rua das Pedras, spa day.'}},
    {title:'Fernando de Noronha · <em>Reef Retreat</em>', where:'Pernambuco', nights:'4 noches', hotel:'Pousada Maravilha', pax:'8 invitados',
      price:'$3,290', margin:'36%',
      itin:{es:'Snorkel con tortugas, buceo Baía do Sancho, trekking Morro Dois Irmãos, cena al borde del acantilado.',
       en:'Turtle snorkel, dive Baía do Sancho, Morro Dois Irmãos trek, cliffside dinner.'}},
    {title:'Chapada Diamantina · <em>Cascadas</em>', where:'Bahia', nights:'4 noches', hotel:'Vila Serrano', pax:'10 invitados',
      price:'$1,580', margin:'33%',
      itin:{es:'Cachoeira da Fumaça (340m), Poço Azul (cueva sumergida), trek Vale do Pati 2 días.',
       en:'Cachoeira da Fumaça (340m), Poço Azul (submerged cave), Vale do Pati 2-day trek.'}}
  ],
  experiences:[
    {title:'Vista Chinesa · atardecer', hours:'3h', price:'$95', desc:{es:'Subida en bici eléctrica + caipirinha + vista 270° sobre Río.', en:'E-bike climb + caipirinha + 270° view over Rio.'}},
    {title:'Oteque · mesa privada', hours:'3h', price:'$320', desc:{es:'Chef Alberto Landgraf, 8 tiempos, maridaje. Dos estrellas Michelin.', en:'Chef Alberto Landgraf, 8 courses, pairing. Two Michelin stars.'}},
    {title:'Samba · Pedra do Sal', hours:'4h', price:'$85', desc:{es:'Roda de samba auténtica, guía local, snacks de barrio.', en:'Authentic samba circle, local guide, neighborhood snacks.'}},
    {title:'Praia do Espelho · barco', hours:'8h', price:'$295', desc:{es:'Lancha desde Trancoso, almuerzo en Silvinha, regreso al atardecer.', en:'Boat from Trancoso, lunch at Silvinha, sunset return.'}},
    {title:'Buceo · Noronha', hours:'4h', price:'$185', desc:{es:'2 inmersiones, certificado PADI requerido. Visibilidad 40m+.', en:'2 dives, PADI cert required. 40m+ visibility.'}},
    {title:'Cachoeira da Fumaça', hours:'8h', price:'$110', desc:{es:'Trek de 8km a la cascada de 340m. Almuerzo en cima.', en:'8km trek to the 340m waterfall. Lunch at the top.'}},
    {title:'Cachaça artisanal · Paraty', hours:'5h', price:'$95', desc:{es:'3 alambiques, cata, almuerzo en Engenho.', en:'3 stills, tasting, lunch at the Engenho.'}},
    {title:'Helicóptero Pão de Açúcar', hours:'1h', price:'$245', desc:{es:'Vuelo de 12 min sobre Río. Mejor antes del atardecer.', en:'12-min flight over Rio. Best before sunset.'}}
  ],
  realEstate:{
    lede:{es:'Brasil es el más complejo fiscalmente — pero el ticket es alto y la apreciación en zonas costeras curadas es real.', en:'Brazil is the most tax-complex — but the ticket is high and curated coastal-zone appreciation is real.'},
    intro:{es:'No para principiantes. Asesor contable obligatorio. Carteras estructuradas vía Sociedad Limitada local + tratado bilateral cuando aplica.', en:'Not for beginners. Mandatory tax advisor. Portfolios structured via local Sociedade Limitada + bilateral treaty where applicable.'},
    zones:[
      {name:'Trancoso · pousada / casa', range:'$400k – $3M', note:{es:'Casa en el Quadrado ya escasa. Lotes en Praia do Espelho $200-500k.', en:'Houses on the Quadrado already scarce. Praia do Espelho lots $200-500k.'}},
      {name:'Búzios · frente al mar', range:'$300k – $2M', note:{es:'Casa con vista al mar $500k-$1.5M. Renta vacacional fuerte año redondo.', en:'Ocean-view house $500k-$1.5M. Strong year-round vacation rental.'}},
      {name:'Río · Leblon · Lagoa', range:'$500k – $4M', note:{es:'Apartamento Leblon vista al mar $800k-$1.8M. Mercado denso, comparable a NYC ratio.', en:'Leblon ocean-view apartment $800k-$1.8M. Dense market, NYC-ratio comparable.'}},
      {name:'Paraty · centro histórico', range:'$200k – $800k', note:{es:'Casa colonial restaurada $350-700k. Pousada boutique posible.', en:'Restored colonial house $350-700k. Boutique pousada play viable.'}}
    ],
    brokers:[
      {name:'Bossa Nova Sotheby\'s', tag:'Trancoso · Río'},
      {name:'Engel & Völkers Búzios', tag:'Búzios'},
      {name:'Bamberg Imóveis', tag:'Río'},
      {name:'Paraty Imóveis', tag:'Paraty'}
    ],
    commission:'5-6% · $20-80k'
  },
  ops:{
    vehicle:{es:'Sociedade Limitada (Ltda) o EIRELI', en:'Sociedade Limitada (Ltda) or EIRELI'},
    vehicleNote:{es:'Ltda más común para socios extranjeros. Costo $5-8k, 4-6 semanas. Contador obligatorio mensual.', en:'Ltda most common for foreign partners. Cost $5-8k, 4-6 weeks. Monthly bookkeeping mandatory.'},
    firms:[
      {name:'Mattos Filho', tag:'Tier-1 · M&A · cripto'},
      {name:'BMA Advogados', tag:'Mid · ágil'},
      {name:'Demarest', tag:'Real estate'}
    ],
    bank:'Itaú · Bradesco',
    bankNote:{es:'USDC vía Mercado Bitcoin o Foxbit. Pix para todo retail. Cuenta USD vía banco offshore Cayman/Bahamas.', en:'USDC via Mercado Bitcoin or Foxbit. Pix for all retail. USD account via offshore Cayman/Bahamas bank.'},
    hosts:{es:'2 anfitriones — uno Río (city + Búzios), uno Trancoso. $2,200/mes USD c/u. Portugués nativo + inglés.', en:'2 hosts — one Rio (city + Búzios), one Trancoso. $2,200/mo USD each. Native Portuguese + English.'}
  },
  econ:{
    setup:'$11,000', burn:'$6,400/mo', breakeven:'$19.2k', q1:'$26k', re:'$20-80k',
    setupNote:{es:'Ltda + contador + bancos', en:'Ltda + accountant + bank'},
    burnNote:{es:'2 anfitriones + contador + marketing', en:'2 hosts + accountant + marketing'},
    q1Note:{es:'5 weekends × 9 × $2,100 × 35%', en:'5 weekends × 9 × $2,100 × 35%'}
  },
  risks:[
    {label:{es:'Volatilidad del Real', en:'Real volatility'}, body:{es:'Cotizar USD, hedge mensual si exposición > $50k. BRL puede moverse 8-12% por trimestre.', en:'Price USD, hedge monthly if exposure > $50k. BRL can move 8-12% per quarter.'}},
    {label:{es:'Fiscalidad compleja', en:'Complex taxation'}, body:{es:'Sistema más complejo de LATAM. Contador local desde día 1 — no negociable.', en:'Most complex tax system in LATAM. Local accountant from day 1 — non-negotiable.'}},
    {label:{es:'Vuelos limitados a Noronha', en:'Limited flights to Noronha'}, body:{es:'Solo 6 vuelos/día. Reservar block-booking 90 días antes. Sin esto no hay weekend.', en:'Only 6 flights/day. Book block 90 days ahead. Without it, no weekend.'}},
    {label:{es:'Seguridad Río', en:'Rio security'}, body:{es:'Mantener rutas curadas (Leblon, Ipanema, Botafogo, Santa Teresa). Evitar favelas no curadas. Coche con chofer privado para nocturnas.', en:'Keep curated routes (Leblon, Ipanema, Botafogo, Santa Teresa). Avoid uncurated favelas. Private driver for nighttime.'}}
  ]
};
