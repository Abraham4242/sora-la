window.CHAPTERS.PE = {
  code:'PE', flag:'🇵🇪', tier:2, status:'soon', goLive:'Q2 2027',
  name:{es:'Perú', en:'Peru'},
  hero:{
    targetMargin:'30-34%',
    tagline:{
      es:'La capital culinaria de LATAM + el ícono espiritual del continente. Lima cocina, Cusco sana, Machu Picchu sella.',
      en:'LATAM\'s culinary capital + the continent\'s spiritual icon. Lima cooks, Cusco heals, Machu Picchu seals.'
    },
    svg:`<svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pesky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#7A5C3B"/>
          <stop offset="40%" stop-color="#A87246"/>
          <stop offset="75%" stop-color="#C8543A"/>
          <stop offset="100%" stop-color="#3F2D26"/>
        </linearGradient>
      </defs>
      <rect width="1600" height="900" fill="url(#pesky)"/>
      <path d="M0,500 L120,360 L240,440 L360,300 L500,400 L640,260 L780,360 L920,240 L1080,340 L1240,220 L1400,320 L1600,260 L1600,900 L0,900 Z" fill="#5C3A2A" opacity=".72"/>
      <path d="M0,640 L150,520 L300,600 L450,490 L600,570 L760,460 L920,540 L1080,440 L1240,520 L1400,420 L1600,500 L1600,900 L0,900 Z" fill="#3A2418" opacity=".85"/>
      <path d="M0,780 L200,720 L400,760 L600,710 L800,750 L1000,705 L1200,745 L1400,700 L1600,740 L1600,900 L0,900 Z" fill="#1E120A" opacity=".92"/>
      <g opacity=".55" fill="#FFE8B8">
        <circle cx="380" cy="200" r="1.5"/><circle cx="640" cy="180" r="1"/><circle cx="940" cy="220" r="2"/><circle cx="1240" cy="190" r="1.5"/>
      </g>
    </svg>`
  },
  thesis:{
    es:'Perú tiene dos productos únicos en LATAM: (1) Lima como capital culinaria global (Central, Maido, Kjolle), (2) Valle Sagrado + Machu Picchu como peregrinaje espiritual. Ningún otro país combina culinario + arqueológico al mismo nivel.\n\nLogística más compleja que el resto del Tier 1 (altitud, vuelos internos, permisos MP), pero ticket alto y demanda cautiva. Sora-Perú depende de relaciones con 3-4 lodges en Valle Sagrado y reserva de Inca Rail/PeruRail con 90+ días de antelación.',
    en:'Peru has two LATAM-unique products: (1) Lima as global culinary capital (Central, Maido, Kjolle), (2) Sacred Valley + Machu Picchu as spiritual pilgrimage. No other country combines culinary + archaeological at this level.\n\nLogistics more complex than rest of Tier 1 (altitude, internal flights, MP permits), but high ticket and captive demand. Sora-Peru depends on relationships with 3-4 Sacred Valley lodges and Inca Rail/PeruRail booking 90+ days ahead.'
  },
  regions:[
    {name:'Lima · Barranco · Miraflores', vibe:{es:'Capital culinaria', en:'Culinary capital'}, why:{es:'Central, Maido, Kjolle. Top-10 mundial. Barranco para arte + cocktails.', en:'Central, Maido, Kjolle. World top-10. Barranco for art + cocktails.'}},
    {name:'Cusco · Valle Sagrado', vibe:{es:'Andes sagrados', en:'Sacred Andes'}, why:{es:'Belmond Río Sagrado, Sol y Luna, Inkaterra. Aclimatación + arqueología + textiles.', en:'Belmond Río Sagrado, Sol y Luna, Inkaterra. Acclimatization + archaeology + textiles.'}},
    {name:'Machu Picchu · Aguas Calientes', vibe:{es:'Ícono mundial', en:'World icon'}, why:{es:'Reserva 90 días antes. Belmond Sanctuary Lodge (único hotel adentro) o Inkaterra MP Pueblo.', en:'Book 90 days ahead. Belmond Sanctuary Lodge (only hotel inside) or Inkaterra MP Pueblo.'}},
    {name:'Arequipa · Cañón del Colca', vibe:{es:'Ciudad blanca + cóndores', en:'White city + condors'}, why:{es:'Monasterio Santa Catalina, Cañón Colca (2× Gran Cañón), Picaflor Lodge.', en:'Santa Catalina Monastery, Colca Canyon (2× Grand Canyon), Picaflor Lodge.'}},
    {name:'Mancora · Costa Norte', vibe:{es:'Surf + sol todo el año', en:'Year-round surf + sun'}, why:{es:'Único pedazo de costa peruana siempre soleado. Surf de calidad, pueblo todavía sin saturar.', en:'Only patch of Peruvian coast that\'s always sunny. Quality surf, still-undersaturated town.'}},
    {name:'Amazonia · Tambopata · Manú', vibe:{es:'Jungla amazónica', en:'Amazon jungle'}, why:{es:'Tambopata Research Center, Posada Amazonas. Macaws + monos + cocodrilos. Pre/post extension a Cusco.', en:'Tambopata Research Center, Posada Amazonas. Macaws + monkeys + crocodiles. Pre/post Cusco extension.'}}
  ],
  weekends:[
    {title:'Lima · <em>Cumbre Culinaria</em>', where:'Lima', nights:'3 noches', hotel:'Hotel B / Country Club Lima', pax:'10 invitados',
      price:'$1,890', margin:'34%',
      itin:{es:'Central (Pia León) menú degustación, Maido omakase, Kjolle almuerzo, mercado Surquillo con chef, pisco bar tour en Barranco.',
       en:'Central (Pia León) tasting menu, Maido omakase, Kjolle lunch, Surquillo market with chef, Barranco pisco bar tour.'}},
    {title:'Valle Sagrado · <em>Camino Sagrado</em>', where:'Cusco', nights:'4 noches', hotel:'Belmond Río Sagrado', pax:'10 invitados',
      price:'$2,690', margin:'33%',
      itin:{es:'Aclimatación en valle (más bajo que Cusco), Ollantaytambo, Pisac mercado, tejedoras de Chinchero, cena con menú andino del chef.',
       en:'Acclimatize in valley (lower than Cusco), Ollantaytambo, Pisac market, Chinchero weavers, Andean tasting menu.'}},
    {title:'Machu Picchu · <em>Amanecer</em>', where:'Aguas Calientes', nights:'2 noches', hotel:'Belmond Sanctuary Lodge', pax:'8 invitados',
      price:'$3,290', margin:'35%',
      itin:{es:'Tren Hiram Bingham (Belmond), entrada al amanecer sin crowd, Huayna Picchu trek, almuerzo con vista, retorno por la tarde.',
       en:'Hiram Bingham train, sunrise entry without crowd, Huayna Picchu trek, lunch with view, afternoon return.'}},
    {title:'Arequipa · <em>Colca</em>', where:'Arequipa', nights:'3 noches', hotel:'Casa Andina Premium / Las Casitas', pax:'10 invitados',
      price:'$1,580', margin:'32%',
      itin:{es:'Centro de Arequipa, Monasterio Santa Catalina, Cañón Colca, vuelo del cóndor, termas de La Calera.',
       en:'Arequipa center, Santa Catalina Monastery, Colca Canyon, condor flight, La Calera hot springs.'}},
    {title:'Tambopata · <em>Amazonia</em>', where:'Madre de Dios', nights:'4 noches', hotel:'Tambopata Research Center', pax:'8 invitados',
      price:'$2,190', margin:'34%',
      itin:{es:'Colpa de guacamayos, lago Sandoval (caimanes), monos aulladores, caminata nocturna con biólogo.',
       en:'Macaw clay lick, Sandoval Lake (caimans), howler monkeys, night walk with biologist.'}}
  ],
  experiences:[
    {title:'Central · mesa privada', hours:'4h', price:'$280', desc:{es:'Reservar 60 días antes. 17 tiempos por altitud. Sora tiene relación directa.', en:'Book 60 days ahead. 17 courses by altitude. Sora has direct relationship.'}},
    {title:'Mercado Surquillo · chef', hours:'3h', price:'$95', desc:{es:'Tour con chef peruano, almuerzo de ceviche fresco al final.', en:'Tour with Peruvian chef, fresh ceviche lunch at the end.'}},
    {title:'Pisco bar crawl Barranco', hours:'4h', price:'$85', desc:{es:'3 paradas: Ayahuasca, Antigua Taberna Queirolo, Carnaval. Tapas incluidas.', en:'3 stops: Ayahuasca, Antigua Taberna Queirolo, Carnaval. Tapas included.'}},
    {title:'Pisac · mercado + tejedoras', hours:'5h', price:'$95', desc:{es:'Domingos en Pisac. Demostración de teñido natural. Almuerzo en finca.', en:'Sundays in Pisac. Natural dye demo. Lunch at finca.'}},
    {title:'Maras · Moray · Salineras', hours:'6h', price:'$120', desc:{es:'Salineras (4,000 pozos rosados) + terrazas Moray + almuerzo en mirador.', en:'Salt pans (4,000 pink pools) + Moray terraces + viewpoint lunch.'}},
    {title:'Vuelo del cóndor · Colca', hours:'5h', price:'$110', desc:{es:'Mirador Cruz del Cóndor 7am, 6-12 cóndores garantizados. Desayuno antes.', en:'Mirador Cruz del Cóndor 7am, 6-12 condors guaranteed. Pre-breakfast.'}},
    {title:'Lago Sandoval · caimanes', hours:'7h', price:'$135', desc:{es:'Bote eléctrico. Caimanes negros, nutrias gigantes, monos. Almuerzo selvático.', en:'Electric boat. Black caimans, giant otters, monkeys. Jungle lunch.'}},
    {title:'Surf Mancora', hours:'2h', price:'$55', desc:{es:'Olas izquierdas largas. Coach local. Ideal para nivel intermedio.', en:'Long left waves. Local coach. Ideal for intermediate level.'}}
  ],
  realEstate:{
    lede:{es:'Mercado más institucional que vacacional. Lima (Miraflores/Barranco) y Valle Sagrado son los plays viables.', en:'More institutional than vacation market. Lima (Miraflores/Barranco) and Sacred Valley are the viable plays.'},
    intro:{es:'Compra extranjera permitida. Restricción 50km de frontera. Vía corporación local o persona natural según monto.', en:'Foreign purchase allowed. 50km border restriction. Via local corp or natural person depending on amount.'},
    zones:[
      {name:'Lima · Barranco · Miraflores', range:'$200k – $1.5M', note:{es:'Departamento 2BR vista al mar Miraflores $300-500k. Renta corporativa estable.', en:'2BR ocean-view Miraflores apartment $300-500k. Stable corporate rental.'}},
      {name:'Valle Sagrado · finca con casa', range:'$150k – $800k', note:{es:'Hectárea con casa colonial $200-400k. Boutique lodge play emergente.', en:'Hectare with colonial house $200-400k. Emerging boutique lodge play.'}},
      {name:'Mancora · frente al mar', range:'$80k – $400k', note:{es:'Casa frente al mar 3BR $200-350k. Mercado boutique aún sin saturar.', en:'3BR beachfront house $200-350k. Still-unsaturated boutique market.'}}
    ],
    brokers:[
      {name:'Sotheby\'s International Lima', tag:'Lima'},
      {name:'Properati Lima', tag:'Lima · listings'},
      {name:'Sacred Valley Real Estate', tag:'Cusco · Valle'},
      {name:'Mancora Properties', tag:'Mancora'}
    ],
    commission:'3-5% · $8-50k'
  },
  ops:{
    vehicle:{es:'Sociedad Anónima Cerrada (SAC)', en:'Sociedad Anónima Cerrada (SAC)'},
    vehicleNote:{es:'SAC ágil para socios extranjeros. $3-4k legales, 4-6 semanas. Capital mínimo simbólico.', en:'SAC nimble for foreign partners. $3-4k legal, 4-6 weeks. Symbolic minimum capital.'},
    firms:[
      {name:'Estudio Echecopar (Baker McKenzie)', tag:'Tier-1'},
      {name:'Rebaza, Alcázar & De Las Casas', tag:'Mid · M&A'},
      {name:'Miranda & Amado', tag:'Real estate'}
    ],
    bank:'BCP · Interbank · BBVA',
    bankNote:{es:'USDC vía Buda.com o Lemon. Cuenta USD fácil en Perú. Sol estable últimos años.', en:'USDC via Buda.com or Lemon. USD account easy in Peru. Sol has been stable recent years.'},
    hosts:{es:'2 anfitriones — uno Lima, uno Cusco/Valle Sagrado. $1,400-1,800/mes USD c/u. Bilingüe + conocimiento arqueológico para Cusco.', en:'2 hosts — one Lima, one Cusco/Sacred Valley. $1,400-1,800/mo USD each. Bilingual + archaeology knowledge for Cusco.'}
  },
  econ:{
    setup:'$7,000', burn:'$3,800/mo', breakeven:'$11.4k', q1:'$22k', re:'$8-50k',
    setupNote:{es:'SAC + bancos + permisos MP', en:'SAC + bank + MP permits'},
    burnNote:{es:'2 anfitriones + contador + permisos', en:'2 hosts + accountant + permits'},
    q1Note:{es:'5 weekends × 9 × $2,100 × 33%', en:'5 weekends × 9 × $2,100 × 33%'}
  },
  risks:[
    {label:{es:'Permisos Machu Picchu', en:'Machu Picchu permits'}, body:{es:'Cupos diarios limitados, gobierno cambia reglas frecuentemente. Reserva con 90+ días siempre.', en:'Limited daily quotas, government changes rules often. Book with 90+ days always.'}},
    {label:{es:'Altitud · Cusco 3,400m', en:'Altitude · Cusco 3,400m'}, body:{es:'Aclimatar primero en Valle Sagrado (2,800m). Tener oxígeno + coca en hotel. Cualquier guest cardiaco notificar antes.', en:'Acclimatize first in Sacred Valley (2,800m). Have oxygen + coca at hotel. Any cardiac guest must notify upfront.'}},
    {label:{es:'Inestabilidad política', en:'Political instability'}, body:{es:'Protestas pueden cerrar vías hacia Cusco. Plan B: vuelo directo Lima-Cusco vs tren Aguas Calientes.', en:'Protests can shut roads to Cusco. Plan B: direct flight Lima-Cusco vs Aguas Calientes train.'}},
    {label:{es:'Tren Hiram Bingham', en:'Hiram Bingham train'}, body:{es:'Solo Belmond. Pricing volátil estacional. Bloquear con 6 meses antelación para temporada alta.', en:'Belmond-only. Seasonally volatile pricing. Block 6 months ahead for high season.'}}
  ]
};
