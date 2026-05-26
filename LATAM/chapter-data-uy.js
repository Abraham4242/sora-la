window.CHAPTERS.UY = {
  code:'UY', flag:'🇺🇾', tier:2, status:'soon', goLive:'Q4 2027',
  name:{es:'Uruguay', en:'Uruguay'},
  hero:{
    targetMargin:'34-38%',
    tagline:{
      es:'El refugio costero del 1% latinoamericano. José Ignacio y Punta del Este — el lujo en mayúsculas, en español.',
      en:'The coastal hideaway of LATAM\'s 1%. José Ignacio and Punta del Este — uppercase luxury, in Spanish.'
    },
    svg:`<svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="uysky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#A98F6E"/>
          <stop offset="40%" stop-color="#C8A981"/>
          <stop offset="70%" stop-color="#5B7A88"/>
          <stop offset="100%" stop-color="#2A4452"/>
        </linearGradient>
        <radialGradient id="uysun" cx="50%" cy="38%" r="22%"><stop offset="0%" stop-color="#FFE8B8" stop-opacity=".7"/><stop offset="100%" stop-color="#C8A981" stop-opacity="0"/></radialGradient>
      </defs>
      <rect width="1600" height="900" fill="url(#uysky)"/>
      <circle cx="800" cy="342" r="320" fill="url(#uysun)"/>
      <circle cx="800" cy="342" r="62" fill="#FFEBC2" opacity=".85"/>
      <path d="M0,580 Q200,560 400,575 T800,570 T1200,575 T1600,565 L1600,640 Q1200,660 800,650 T0,640 Z" fill="#3A5A6A" opacity=".75"/>
      <path d="M0,660 Q300,640 600,650 T1200,648 T1600,640 L1600,900 L0,900 Z" fill="#22404E" opacity=".85"/>
      <path d="M0,760 Q400,720 800,740 T1600,730 L1600,900 L0,900 Z" fill="#0E1F28" opacity=".92"/>
    </svg>`
  },
  thesis:{
    es:'Uruguay es el refugio costero del 1% latinoamericano. José Ignacio (la "Hamptons del sur") y Punta del Este capturan al porteño + paulista + chileno premium con casa de fin de semana. Temporada corta (Dic-Mar) pero intensa, con eventos saturados a precios USD altos.\n\nFiscalidad atractiva (residencia fiscal simple, sin impuesto a la herencia), seguridad jurídica AAA, infraestructura banking impecable. Sora-Uruguay es un capítulo de margen alto / volumen bajo / temporada concentrada — perfecto para complementar mercados de invierno boreal.',
    en:'Uruguay is the coastal hideaway of LATAM\'s 1%. José Ignacio (the "Southern Hamptons") and Punta del Este capture the porteño + paulista + Chilean premium with a weekend house. Short season (Dec-Mar) but intense, with sold-out events at high USD prices.\n\nAttractive taxation (simple fiscal residency, no inheritance tax), AAA legal certainty, impeccable banking. Sora-Uruguay is a high-margin / low-volume / concentrated-season chapter — perfect to complement Northern winter markets.'
  },
  regions:[
    {name:'José Ignacio · La Barra', vibe:{es:'Pueblo de pescadores → lujo', en:'Fishing village → luxury'}, why:{es:'Posada Garzón, Bahía Vik, Playa Vik. La Huella es el restaurante más famoso del Cono Sur.', en:'Posada Garzón, Bahía Vik, Playa Vik. La Huella is the Southern Cone\'s most famous restaurant.'}},
    {name:'Punta del Este · Punta Ballena', vibe:{es:'Riviera porteña', en:'Porteño riviera'}, why:{es:'Casapueblo de Vilaró, Conrad Casino, Brava + Mansa. Centro de la temporada alta.', en:'Vilaró\'s Casapueblo, Conrad Casino, Brava + Mansa. Heart of high season.'}},
    {name:'Garzón · pueblo interior', vibe:{es:'Pueblo de chef de tres estrellas', en:'Three-star chef\'s town'}, why:{es:'Francis Mallmann compró el pueblo. Hotel Garzón + restaurante boutique. Lavanda + olivos.', en:'Francis Mallmann bought the town. Hotel Garzón + boutique restaurant. Lavender + olives.'}},
    {name:'Cabo Polonio · Rocha', vibe:{es:'Sin luz · sin asfalto · sin internet', en:'No power · no asphalt · no wifi'}, why:{es:'Pueblo en parque nacional accesible solo en 4×4 dunero. Antítesis de José Ignacio.', en:'Town inside national park, accessible only via 4×4 dune buggy. The antithesis of José Ignacio.'}},
    {name:'Colonia del Sacramento · UNESCO', vibe:{es:'Casco colonial portugués', en:'Portuguese colonial center'}, why:{es:'Pueblo UNESCO frente a Buenos Aires. Día desde Punta o BA via ferry Buquebus.', en:'UNESCO town across from Buenos Aires. Day from Punta or BA via Buquebus ferry.'}},
    {name:'Montevideo · Punta Carretas · Pocitos', vibe:{es:'Capital tranquila', en:'Quiet capital'}, why:{es:'Mercado del Puerto, rambla, Teatro Solís. Hotel Sofitel + Hyatt Centric. Base de operaciones.', en:'Mercado del Puerto, rambla, Teatro Solís. Hotel Sofitel + Hyatt Centric. Operations base.'}}
  ],
  weekends:[
    {title:'José Ignacio · <em>La Barra Weekend</em>', where:'Maldonado', nights:'4 noches', hotel:'Bahía Vik / Playa Vik', pax:'12 invitados',
      price:'$2,890', margin:'38%',
      itin:{es:'Cena en La Huella, atardecer en Faro José Ignacio, día en Posada del Faro, almuerzo en Garzón con Mallmann, surf en playa Brava.',
       en:'Dinner at La Huella, sunset at José Ignacio Lighthouse, day at Posada del Faro, lunch in Garzón with Mallmann, surf at Brava beach.'}},
    {title:'Garzón · <em>Mallmann Estate</em>', where:'Maldonado', nights:'3 noches', hotel:'Hotel Garzón', pax:'10 invitados',
      price:'$2,290', margin:'40%',
      itin:{es:'Cata de olivos Bodega Garzón, almuerzo en Restaurante Garzón (Mallmann), cabalgata por viñedos, asado de 7 fuegos privado.',
       en:'Olive tasting at Bodega Garzón, lunch at Garzón Restaurant (Mallmann), vineyard horseback ride, private 7-fires asado.'}},
    {title:'Punta del Este · <em>Verano Riviera</em>', where:'Maldonado', nights:'4 noches', hotel:'The Grand Hotel / Conrad', pax:'14 invitados',
      price:'$2,490', margin:'36%',
      itin:{es:'Casapueblo al atardecer, día de yate en isla Gorriti, Conrad Casino noche, brunch en Lo de Tere, paddle en Brava.',
       en:'Casapueblo at sunset, yacht day at Gorriti Island, Conrad Casino night, brunch at Lo de Tere, paddle at Brava.'}},
    {title:'Cabo Polonio · <em>Off-grid Atlantic</em>', where:'Rocha', nights:'3 noches', hotel:'Posada Buena Vista', pax:'8 invitados',
      price:'$1,580', margin:'35%',
      itin:{es:'Camión 4×4 dunero entrada, lobos marinos, faro, noche estrellada (no hay luz eléctrica), pescado del día en posada.',
       en:'4×4 dune buggy entry, sea lions, lighthouse, starry night (no electricity), catch of the day at posada.'}},
    {title:'Montevideo + Colonia · <em>Heritage</em>', where:'Montevideo + Colonia', nights:'3 noches', hotel:'Sofitel Carrasco + Charco Hotel', pax:'12 invitados',
      price:'$1,290', margin:'34%',
      itin:{es:'Mercado del Puerto, Teatro Solís función, ferry a Colonia, casco UNESCO, almuerzo en Charco, regreso por rambla.',
       en:'Mercado del Puerto, Teatro Solís show, ferry to Colonia, UNESCO old town, lunch at Charco, return via rambla.'}}
  ],
  experiences:[
    {title:'La Huella · cena', hours:'3h', price:'$165', desc:{es:'El restaurante más famoso del Cono Sur. Reserva Sora 60 días antes.', en:'Most famous restaurant in the Southern Cone. Sora booking 60 days ahead.'}},
    {title:'Mallmann · Garzón', hours:'4h', price:'$245', desc:{es:'Almuerzo de Francis Mallmann en su restaurante. Fuego abierto, ingredientes locales.', en:'Lunch by Francis Mallmann at his restaurant. Open fire, local ingredients.'}},
    {title:'Bodega Garzón · cata', hours:'3h', price:'$95', desc:{es:'Tannat + olivos. Tour de la bodega más arquitectónica de Uruguay.', en:'Tannat + olives. Tour of Uruguay\'s most architectural winery.'}},
    {title:'Yate · Isla Gorriti', hours:'7h', price:'$285', desc:{es:'Capitán privado, almuerzo a bordo, baño en aguas turquesas a 15 min de Punta.', en:'Private captain, onboard lunch, swim in turquoise waters 15 min from Punta.'}},
    {title:'Casapueblo · atardecer', hours:'2h', price:'$45', desc:{es:'Ceremonia al sol de Vilaró + copa de vino + vista desde el balcón blanco.', en:'Vilaró\'s sunset ceremony + glass of wine + view from white balcony.'}},
    {title:'Dunero a Cabo Polonio', hours:'5h', price:'$95', desc:{es:'4×4 desde Valizas, fauna marina, regreso por playa.', en:'4×4 from Valizas, marine wildlife, beach return.'}},
    {title:'Mercado del Puerto · parrilla', hours:'3h', price:'$75', desc:{es:'Carrasco asado, vino Tannat, recorrido por puestos clásicos.', en:'Carrasco asado, Tannat wine, classic stall tour.'}},
    {title:'Ferry Buquebus · Colonia día', hours:'10h', price:'$185', desc:{es:'Buquebus ida y vuelta, almuerzo en Charco, casco histórico UNESCO.', en:'Buquebus round-trip, lunch at Charco, UNESCO old town.'}}
  ],
  realEstate:{
    lede:{es:'Mercado costero ultra-líquido en USD. Punta del Este y José Ignacio son blue-chip. Garzón es la apreciación emergente.', en:'Ultra-liquid coastal market in USD. Punta del Este and José Ignacio are blue-chip. Garzón is emerging appreciation.'},
    intro:{es:'Compra extranjera 100% permitida. Sin impuesto a la herencia. Residencia fiscal accesible (~$1.7M en propiedad o $370k + presencia).', en:'100% foreign purchase allowed. No inheritance tax. Accessible fiscal residency (~$1.7M in property or $370k + presence).'},
    zones:[
      {name:'José Ignacio · frente al mar', range:'$1M – $8M', note:{es:'Casa frente al mar $2-5M. Renta vacacional Dic-Mar $50-150k/temporada.', en:'Oceanfront house $2-5M. Dec-Mar vacation rental $50-150k/season.'}},
      {name:'Punta del Este · La Mansa', range:'$300k – $3M', note:{es:'Departamento frente al mar $400-900k. Edificios icónicos Vik, Onda.', en:'Oceanfront apartment $400-900k. Iconic Vik, Onda buildings.'}},
      {name:'Garzón · campo con casa', range:'$200k – $2M', note:{es:'Hectáreas con casa + olivos $400-900k. Lavanda boutique play.', en:'Hectares with house + olives $400-900k. Lavender boutique play.'}},
      {name:'Montevideo · Carrasco · Pocitos', range:'$200k – $1.5M', note:{es:'Departamento 3BR Pocitos $300-500k. Renta corporativa estable.', en:'3BR Pocitos apartment $300-500k. Stable corporate rental.'}}
    ],
    brokers:[
      {name:'Engel & Völkers Punta del Este', tag:'Punta'},
      {name:'Christie\'s José Ignacio', tag:'José Ignacio'},
      {name:'Mallmann Inmobiliaria Garzón', tag:'Garzón'},
      {name:'Sotheby\'s Montevideo', tag:'Montevideo'}
    ],
    commission:'3-5% · $15-200k'
  },
  ops:{
    vehicle:{es:'Sociedad Anónima (S.A.) o Sociedad de Responsabilidad Limitada', en:'Sociedad Anónima (S.A.) or LLC'},
    vehicleNote:{es:'S.A. más común. $2-3k legales, 3-4 semanas. Capital mínimo simbólico. Régimen fiscal claro.', en:'S.A. most common. $2-3k legal, 3-4 weeks. Symbolic minimum capital. Clear fiscal regime.'},
    firms:[
      {name:'Ferrere', tag:'Tier-1'},
      {name:'Guyer & Regules', tag:'Mid · banking'},
      {name:'Posadas, Posadas & Vecino', tag:'Real estate'}
    ],
    bank:'Itaú · Santander · BBVA',
    bankNote:{es:'USDC vía Bitex o Lemon. UYU estable, pero todo retail premium se cotiza USD. Cuenta USD trivial.', en:'USDC via Bitex or Lemon. UYU stable, but all premium retail is priced USD. USD account trivial.'},
    hosts:{es:'1 anfitrión José Ignacio/Punta del Este (Dic-Mar full-time, Abr-Nov part-time) + 1 Montevideo a tiempo parcial. $2,000/mes temporada alta.', en:'1 host José Ignacio/Punta del Este (Dec-Mar full-time, Apr-Nov part-time) + 1 part-time Montevideo. $2,000/mo high season.'}
  },
  econ:{
    setup:'$4,500', burn:'$3,200/mo', breakeven:'$9.6k', q1:'$32k', re:'$15-200k',
    setupNote:{es:'S.A. + bancos', en:'S.A. + bank'},
    burnNote:{es:'Anfitrión + contador + marketing temporada', en:'Host + accountant + seasonal marketing'},
    q1Note:{es:'Temporada concentrada Dic-Mar: 6 weekends × 11 × $2,300 × 37%', en:'Concentrated Dec-Mar season: 6 weekends × 11 × $2,300 × 37%'}
  },
  risks:[
    {label:{es:'Temporada de 4 meses', en:'4-month season'}, body:{es:'Diciembre-Marzo concentra el 75% del ingreso. Resto del año es Montevideo + Colonia + Garzón con volumen bajo.', en:'December-March concentrates 75% of revenue. Rest of year is Montevideo + Colonia + Garzón at low volume.'}},
    {label:{es:'Precio comparable USA', en:'US-comparable pricing'}, body:{es:'José Ignacio cobra Hamptons. Margen estructural si el ticket aguanta. Sin descuento posible.', en:'José Ignacio charges Hamptons-level. Structural margin if ticket holds. No discount possible.'}},
    {label:{es:'Dependencia de demanda BA/SP', en:'BA/SP demand dependency'}, body:{es:'Si Argentina/Brasil sufren crisis cambiaria, demanda Uruguay cae 30-50%. Diversificar con US/EU guest.', en:'If Argentina/Brazil suffer FX crisis, Uruguay demand drops 30-50%. Diversify with US/EU guest.'}},
    {label:{es:'Saturación José Ignacio', en:'José Ignacio saturation'}, body:{es:'Ya está caro y conocido. Diferenciar moviendo a Garzón + Cabo Polonio para narrativa boutique.', en:'Already pricey and known. Differentiate by shifting to Garzón + Cabo Polonio for boutique narrative.'}}
  ]
};
