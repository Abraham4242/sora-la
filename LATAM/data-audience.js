/* =============================================================
   SORA · AUDIENCE & TOURISM STATISTICS
   Per-country tourism baseline + premium-segment estimates +
   origin markets + seasonal patterns + Sora-fit audience sizing.
   Sources: UNWTO (2024 data), national tourism authorities,
   STR Hotels, Statista, Skift. Verify before any strategic call.
   Loaded as window.SORA_AUDIENCE.
   ============================================================= */
window.SORA_AUDIENCE = {

/* ============================== MX ============================== */
MX: {
  macro: {
    intlArrivals2024: 45_000_000,         // UNWTO 2024 — Mexico 6th globally
    intlArrivals2023: 42_200_000,
    yoyGrowth: '+6.6%',
    receiptsUSD: 31_400_000_000,           // $31.4B intl tourism receipts 2024
    tourismPctGDP: '8.7%',
    avgStay: 11.2,                         // nights
    avgSpendPerVisitor: 698,               // USD
    occupancyTopHotels: '71%'              // 4-5* nat. avg
  },
  origins: [
    { country:'USA',     share:'59%', arrivals:26_500_000, premium:true,  note:{es:'70% del premium total. Drive market crítico.', en:'70% of total premium. Critical drive market.'} },
    { country:'Canada',  share:'9%',  arrivals:4_100_000,  premium:true,  note:{es:'Sun-seekers + snowbirds. Largo gasto en SMA y Sayulita.', en:'Sun-seekers + snowbirds. Long spend in SMA + Sayulita.'} },
    { country:'UK',      share:'3.2%', arrivals:1_440_000, premium:true,  note:{es:'Premium adventure + cultural. Tulum + CDMX.', en:'Premium adventure + cultural. Tulum + CDMX.'} },
    { country:'Colombia',share:'2.8%', arrivals:1_260_000, premium:false, note:{es:'Conexión LATAM-LATAM. Trabajo + leisure.', en:'LATAM-LATAM. Work + leisure.'} },
    { country:'Germany', share:'2.1%', arrivals:945_000,   premium:true,  note:{es:'Bookpacker → upgraded. Sub-mercado wellness.', en:'Backpacker → upgraded. Wellness sub-market.'} }
  ],
  premium: {
    annualPremiumTravelers: 5_400_000,    // estimated $400+/night premium-leisure visitors
    avgPremiumSpendTotal: 2_850,          // USD per trip avg
    targetSpendBand: '$1,200 - $4,500',
    luxuryHotelInventory: 18_700,         // rooms 4-5* + boutique
    nationalPremiumOccupancy: '68%',
    growthLastThreeYears: '+22%'
  },
  soraFit: {
    bullseyeSize: 320_000,                 // US/Canada/UK premium leisure 28-50yrs
    addressableMarket: 1_400_000,
    saturation: 'medium',                  // Tulum saturated, CDMX growing, SMA + Valle still open
    competitive: ['Black Tomato (UK)','Audley Travel (UK)','Indagare','Beyondaresorts','Habitas-direct'],
    fitNote: {
      es: 'México es el mayor TAM premium de LATAM. La pregunta no es si Sora cabe, es cómo diferenciarse de Habitas (mismo target). Diferenciación: cross-chapter portfolio (Sora puede llevar el mismo guest a Trancoso o BA — Habitas no).',
      en: 'Mexico is LATAM\'s largest premium TAM. The question isn\'t whether Sora fits, it\'s how to differentiate from Habitas (same target). Differentiation: cross-chapter portfolio (Sora can route the same guest to Trancoso or BA — Habitas can\'t).'
    }
  },
  seasonality: {
    peak: ['Dec','Jan','Feb','Mar','Jul'],            // northern winter + Semana Santa + summer
    shoulder: ['Apr','May','Jun','Aug','Nov'],
    low: ['Sep','Oct'],                                // hurricane season Caribe
    notes: {
      es: 'Dec 15 - Jan 5 ventana premium-máxima (NY/LA exec families). SMA Día de Muertos Oct 30 - Nov 2 es sub-peak. Sep-Oct Caribe = downturn por huracanes.',
      en: 'Dec 15 - Jan 5 is premium-max window (NY/LA exec families). SMA Day of Dead Oct 30 - Nov 2 is sub-peak. Sep-Oct Caribbean = hurricane-driven downturn.'
    }
  },
  demographic: {
    avgAge: 38,
    soloShare: '21%',
    coupleShare: '52%',
    groupFriendsShare: '20%',
    familyShare: '7%',
    lgbtqIndex: 'high-friendly (CDMX/Tulum world-tier)',
    languageNote: {es:'Inglés operativo en zonas premium. Español ayuda pero no obligatorio.', en:'Operational English in premium zones. Spanish helps but not mandatory.'}
  },
  insight: {
    es: 'Compra Sora-MX al portfolio: el guest que entra a Tulum una vez vuelve 2.7× para CDMX, SMA y Valle el primer año. Crítico: hospedar el segundo viaje en CDMX para anclar la membresía.',
    en: 'Sora-MX portfolio play: a guest who enters via Tulum returns 2.7× to CDMX, SMA and Valle in year one. Critical: host their second trip in CDMX to anchor membership.'
  }
},

/* ============================== CO ============================== */
CO: {
  macro: {
    intlArrivals2024: 6_200_000,
    intlArrivals2023: 5_870_000,
    yoyGrowth: '+5.6%',
    receiptsUSD: 9_800_000_000,
    tourismPctGDP: '2.9%',
    avgStay: 12.4,
    avgSpendPerVisitor: 1_580,
    occupancyTopHotels: '66%'
  },
  origins: [
    { country:'USA',       share:'30%', arrivals:1_860_000, premium:true,  note:{es:'Crecimiento +18% YoY. Medellín drive principal.', en:'+18% YoY growth. Medellín main draw.'} },
    { country:'Venezuela', share:'13%', arrivals:806_000,   premium:false, note:{es:'Mayormente diáspora retorno + comercio frontera.', en:'Mostly diaspora return + border commerce.'} },
    { country:'Mexico',    share:'8%',  arrivals:496_000,   premium:true,  note:{es:'Profesionales tech + creativos. Provenza/Cartagena.', en:'Tech + creative professionals. Provenza/Cartagena.'} },
    { country:'Spain',     share:'7%',  arrivals:434_000,   premium:true,  note:{es:'Cultural + lengua. Cartagena premium específico.', en:'Cultural + language. Cartagena premium specifically.'} },
    { country:'Argentina', share:'5%',  arrivals:310_000,   premium:true,  note:{es:'Post-Milei: profesionales upper-mid relocan.', en:'Post-Milei: upper-mid professionals relocating.'} }
  ],
  premium: {
    annualPremiumTravelers: 880_000,
    avgPremiumSpendTotal: 2_240,
    targetSpendBand: '$900 - $3,000',
    luxuryHotelInventory: 4_200,
    nationalPremiumOccupancy: '63%',
    growthLastThreeYears: '+38%'                       // fastest in Tier 1
  },
  soraFit: {
    bullseyeSize: 78_000,
    addressableMarket: 380_000,
    saturation: 'low-medium',
    competitive: ['Selina (defunct)','Independent boutique ops','Cartagena Sotheby\'s touring','no major curator yet'],
    fitNote: {
      es: 'CO es la oportunidad de Sora más subexplotada. NO hay competidor premium-LATAM-curator establecido. La ventana es 18-24 meses antes que Habitas-Cartagena o un Indagare establezcan presencia.',
      en: 'CO is Sora\'s most underexploited opportunity. NO established premium-LATAM-curator competitor. The window is 18-24 months before Habitas-Cartagena or an Indagare establish presence.'
    }
  },
  seasonality: {
    peak: ['Dec','Jan','Feb','Jul','Aug'],
    shoulder: ['Mar','Apr','Jun','Sep','Nov'],
    low: ['May','Oct'],
    notes: {
      es: 'Cartagena alta sostenida Nov-Apr (clima seco). Medellín año-redondo (22°C). Festival Hay Cartagena enero es sub-peak literario.',
      en: 'Cartagena sustained high Nov-Apr (dry season). Medellín year-round (22°C). Hay Cartagena festival January is sub-peak literary.'
    }
  },
  demographic: {
    avgAge: 34,
    soloShare: '28%',
    coupleShare: '46%',
    groupFriendsShare: '19%',
    familyShare: '7%',
    lgbtqIndex: 'medium-high (Medellín progresivo; Cartagena más conservador)',
    languageNote: {es:'Inglés escaso fuera de El Poblado + Centro Cartagena. Sora hosts bilingüe = ventaja real.', en:'English scarce outside El Poblado + Centro Cartagena. Bilingual Sora hosts = real advantage.'}
  },
  insight: {
    es: 'CO premium guest es más joven (34 promedio vs 38 MX) y más solo-traveler. Producto Sora-CO debe optimizar para encuentro: cenas comunales, weekends con mezcla solo+pareja, no formato "trip privado".',
    en: 'CO premium guest is younger (34 avg vs 38 MX) and more solo-traveler. Sora-CO product should optimize for connection: communal dinners, solo+couple-mixed weekends, not "private trip" format.'
  }
},

/* ============================== BR ============================== */
BR: {
  macro: {
    intlArrivals2024: 7_500_000,
    intlArrivals2023: 5_900_000,
    yoyGrowth: '+27%',                                 // big rebound post-pandemia
    receiptsUSD: 6_900_000_000,
    tourismPctGDP: '7.6%',
    avgStay: 14.8,
    avgSpendPerVisitor: 920,
    occupancyTopHotels: '69%'
  },
  origins: [
    { country:'Argentina', share:'24%', arrivals:1_800_000, premium:true,  note:{es:'Veraneo del 1% argentino. Punta del Este overflow → Búzios/Trancoso.', en:'Argentine 1% summer. Punta del Este overflow → Búzios/Trancoso.'} },
    { country:'USA',       share:'12%', arrivals:900_000,   premium:true,  note:{es:'Trancoso y Río target. Crecimiento +35% YoY.', en:'Trancoso and Rio target. +35% YoY growth.'} },
    { country:'Chile',     share:'9%',  arrivals:675_000,   premium:true,  note:{es:'Veraneo + cross-border tourism. Calidad media-alta.', en:'Summer + cross-border tourism. Mid-high quality.'} },
    { country:'Paraguay',  share:'8%',  arrivals:600_000,   premium:false, note:{es:'Comercio frontera + shopping turismo.', en:'Border trade + shopping tourism.'} },
    { country:'France',    share:'4%',  arrivals:300_000,   premium:true,  note:{es:'Mercado premium europeo dominante. Trancoso preferido.', en:'Dominant premium European market. Trancoso preferred.'} }
  ],
  premium: {
    annualPremiumTravelers: 720_000,
    avgPremiumSpendTotal: 4_100,                       // highest LATAM
    targetSpendBand: '$1,800 - $5,500',
    luxuryHotelInventory: 8_400,
    nationalPremiumOccupancy: '72%',
    growthLastThreeYears: '+44%'
  },
  soraFit: {
    bullseyeSize: 95_000,
    addressableMarket: 440_000,
    saturation: 'medium-high',
    competitive: ['UXUA direct booking','Janeiro Hotel','Brazilian Beach Houses','Black Tomato (UK)','some local curators in SP'],
    fitNote: {
      es: 'BR es alto-margen pero competitivo. UXUA captura Trancoso premium directo. Sora ángulo: rotación inter-país (BA + Trancoso + Búzios en un trip) que ningún operador local ofrece.',
      en: 'BR is high-margin but competitive. UXUA captures Trancoso premium directly. Sora angle: cross-country rotation (BA + Trancoso + Búzios in one trip) which no local operator offers.'
    }
  },
  seasonality: {
    peak: ['Dec','Jan','Feb','Jul'],
    shoulder: ['Mar','Apr','Jun','Aug','Nov'],
    low: ['May','Sep','Oct'],
    notes: {
      es: 'Réveillon Río Dec 31 = top premium window globally. Carnaval Feb pico cultural pero saturado. Noronha noviembre-marzo (mar calmo).',
      en: 'Rio Réveillon Dec 31 = global top premium window. Feb Carnival is cultural peak but saturated. Noronha Nov-Mar (calm sea).'
    }
  },
  demographic: {
    avgAge: 41,
    soloShare: '16%',
    coupleShare: '54%',
    groupFriendsShare: '21%',
    familyShare: '9%',
    lgbtqIndex: 'high-friendly (Rio + SP world-tier)',
    languageNote: {es:'Portugués obligatorio. Inglés limitado fuera Rio centro/Trancoso. Sora-BR debe contratar host portugues-nativo.', en:'Portuguese mandatory. English limited outside central Rio/Trancoso. Sora-BR must hire Portuguese-native host.'}
  },
  insight: {
    es: 'BR guest es el de mayor ticket promedio de LATAM ($4,100/trip vs $2,240 CO). Producto Sora-BR debe ser el más premium del portfolio — Trancoso-Quadrado + chef Mallmann + helicóptero a Praia do Espelho.',
    en: 'BR guest has highest avg ticket in LATAM ($4,100/trip vs $2,240 CO). Sora-BR product should be portfolio\'s most premium — Trancoso-Quadrado + Mallmann chef + helicopter to Praia do Espelho.'
  }
},

/* ============================== AR ============================== */
AR: {
  macro: {
    intlArrivals2024: 6_700_000,
    intlArrivals2023: 7_300_000,
    yoyGrowth: '-8.2%',                                // Milei stabilization shock
    receiptsUSD: 4_100_000_000,
    tourismPctGDP: '2.4%',
    avgStay: 9.8,
    avgSpendPerVisitor: 612,
    occupancyTopHotels: '64%'
  },
  origins: [
    { country:'Brazil',     share:'31%', arrivals:2_077_000, premium:true,  note:{es:'Bariloche + Mendoza pico. Vacaciones de invierno BR julio.', en:'Bariloche + Mendoza peak. BR winter holidays July.'} },
    { country:'Chile',      share:'15%', arrivals:1_005_000, premium:false, note:{es:'Cross-border shopping (USD post-Milei = ganga). No premium.', en:'Cross-border shopping (post-Milei USD = bargain). Not premium.'} },
    { country:'USA',        share:'10%', arrivals:670_000,   premium:true,  note:{es:'Wine + steak + tango. Audiencia más sofisticada Sora-fit.', en:'Wine + steak + tango. Most sophisticated Sora-fit audience.'} },
    { country:'Uruguay',    share:'7%',  arrivals:469_000,   premium:true,  note:{es:'Cross-border casi diario. Mid-tier business.', en:'Near-daily cross-border. Mid-tier business.'} },
    { country:'Europa (top 5)', share:'18%', arrivals:1_206_000, premium:true, note:{es:'España + Italia + Francia + Alemania + UK. Audiencia premium cultural fuerte.', en:'Spain + Italy + France + Germany + UK. Strong cultural premium audience.'} }
  ],
  premium: {
    annualPremiumTravelers: 540_000,
    avgPremiumSpendTotal: 2_900,
    targetSpendBand: '$1,000 - $4,200',
    luxuryHotelInventory: 5_100,
    nationalPremiumOccupancy: '61%',
    growthLastThreeYears: '+8%'                        // slow but stable
  },
  soraFit: {
    bullseyeSize: 62_000,
    addressableMarket: 290_000,
    saturation: 'low',
    competitive: ['Mai 10','Mendoza Wine Tours (boutique)','Faena Hotel direct','Hands-on Mendoza','no premium LATAM curator established'],
    fitNote: {
      es: 'AR es underserved-premium. Post-Milei: USD comprador puede acceder al lujo más fácil. Sora-AR margen estructural más alto del portfolio (low operating cost / USD pricing).',
      en: 'AR is underserved-premium. Post-Milei: USD buyer can access luxury more easily. Sora-AR has portfolio\'s structurally highest margin (low operating cost / USD pricing).'
    }
  },
  seasonality: {
    peak: ['Dec','Jan','Feb','Mar','Jul'],
    shoulder: ['Apr','May','Sep','Nov'],
    low: ['Jun','Aug','Oct'],
    notes: {
      es: 'BA año-redondo (calor enero - frio agosto). Patagonia solo Nov-Mar y Jul-Sep (ski). Vendimia Mar Mendoza es sub-peak premium-natural.',
      en: 'BA year-round (Jan heat - Aug cold). Patagonia only Nov-Mar and Jul-Sep (ski). March Mendoza harvest is premium-natural sub-peak.'
    }
  },
  demographic: {
    avgAge: 40,
    soloShare: '23%',
    coupleShare: '49%',
    groupFriendsShare: '22%',
    familyShare: '6%',
    lgbtqIndex: 'very-high (BA top-tier global)',
    languageNote: {es:'Español obligatorio. Inglés escaso fuera Palermo. Vos/tú divergencia cultural.', en:'Spanish mandatory. English scarce outside Palermo. Vos/tú cultural divergence.'}
  },
  insight: {
    es: 'AR guest es educado, foodie, cultural. Producto Sora-BA debe ser intelectual — Malba + Don Julio + librería curada + tango sin trampa turística. Audiencia tolera precios premium si la curaduría es real.',
    en: 'AR guest is educated, foodie, cultural. Sora-BA product must be intellectual — Malba + Don Julio + curated bookshop + non-touristy tango. Audience tolerates premium pricing if curation is real.'
  }
},

/* ============================== CR ============================== */
CR: {
  macro: {
    intlArrivals2024: 2_900_000,
    intlArrivals2023: 2_660_000,
    yoyGrowth: '+9.0%',
    receiptsUSD: 4_500_000_000,
    tourismPctGDP: '8.2%',
    avgStay: 11.6,
    avgSpendPerVisitor: 1_552,                          // 3rd highest LATAM avg
    occupancyTopHotels: '74%'                           // highest LATAM
  },
  origins: [
    { country:'USA',     share:'52%', arrivals:1_508_000, premium:true,  note:{es:'Dominante. Nosara + Santa Teresa + Manuel Antonio.', en:'Dominant. Nosara + Santa Teresa + Manuel Antonio.'} },
    { country:'Canada',  share:'12%', arrivals:348_000,   premium:true,  note:{es:'Winter escape. Larga estancia.', en:'Winter escape. Long stay.'} },
    { country:'Germany', share:'4%',  arrivals:116_000,   premium:true,  note:{es:'Eco-luxury sub-segment.', en:'Eco-luxury sub-segment.'} },
    { country:'Mexico',  share:'4%',  arrivals:116_000,   premium:false, note:{es:'Mid-tier vacation.', en:'Mid-tier vacation.'} },
    { country:'UK',      share:'3%',  arrivals:87_000,    premium:true,  note:{es:'Audley + similar operators.', en:'Audley + similar operators.'} }
  ],
  premium: {
    annualPremiumTravelers: 580_000,
    avgPremiumSpendTotal: 3_400,
    targetSpendBand: '$1,500 - $4,800',
    luxuryHotelInventory: 3_800,
    nationalPremiumOccupancy: '74%',
    growthLastThreeYears: '+18%'
  },
  soraFit: {
    bullseyeSize: 88_000,
    addressableMarket: 410_000,
    saturation: 'high',
    competitive: ['Nantipa direct','Bodhi Tree direct','Nayara direct','Cayuga Collection (Lapa Rios)','REI Adventures','Audley','Black Tomato'],
    fitNote: {
      es: 'CR es el más saturado del Tier 1. Diferenciación obligatoria: producto Sora-CR debe ser cross-country (Nosara + Bocas + Bajo Mono) no solo Nosara/ST.',
      en: 'CR is Tier 1\'s most saturated. Differentiation mandatory: Sora-CR product must be cross-country (Nosara + Bocas + Bajo Mono) not just Nosara/ST.'
    }
  },
  seasonality: {
    peak: ['Dec','Jan','Feb','Mar','Jul'],
    shoulder: ['Apr','Jun','Aug','Nov'],
    low: ['May','Sep','Oct'],                          // green season
    notes: {
      es: 'Dec 15 - Apr 15 = ventana premium fuerte. Green season Sep-Oct cae 40% pero tarifas-50% — espacio para producto wellness/retreat más barato.',
      en: 'Dec 15 - Apr 15 = strong premium window. Green season Sep-Oct drops 40% but rates -50% — room for cheaper wellness/retreat product.'
    }
  },
  demographic: {
    avgAge: 42,
    soloShare: '18%',
    coupleShare: '51%',
    groupFriendsShare: '17%',
    familyShare: '14%',
    lgbtqIndex: 'high (Nosara LGBTQ+ scene fuerte)',
    languageNote: {es:'Inglés operativo excelente en zonas turísticas. Sora hosts pueden ser inglés-primario.', en:'Excellent operational English in tourist zones. Sora hosts can be English-primary.'}
  },
  insight: {
    es: 'CR es el "default LATAM" del wellness tourism US. Producto Sora-CR no compite por novedad — compite por curaduría: el guest ya iría a Nosara solo, Sora gana por organizar lo que él no sabe organizar.',
    en: 'CR is the "LATAM default" of US wellness tourism. Sora-CR product doesn\'t compete on novelty — competes on curation: guest would go to Nosara anyway, Sora wins by organizing what they can\'t.'
  }
},

/* ============================== PE ============================== */
PE: {
  macro: {
    intlArrivals2024: 3_400_000,
    intlArrivals2023: 2_900_000,
    yoyGrowth: '+17%',
    receiptsUSD: 4_800_000_000,
    tourismPctGDP: '3.7%',
    avgStay: 9.4,
    avgSpendPerVisitor: 1_412,
    occupancyTopHotels: '70%'
  },
  origins: [
    { country:'USA',     share:'25%', arrivals:850_000,   premium:true,  note:{es:'Cusco + Machu Picchu drive. Long-haul premium.', en:'Cusco + Machu Picchu drive. Long-haul premium.'} },
    { country:'Chile',   share:'18%', arrivals:612_000,   premium:false, note:{es:'Cross-border shopping + business.', en:'Cross-border shopping + business.'} },
    { country:'Argentina', share:'7%', arrivals:238_000,  premium:true,  note:{es:'Pos-Milei: viajes culturales.', en:'Post-Milei: cultural trips.'} },
    { country:'Spain',   share:'6%',  arrivals:204_000,   premium:true,  note:{es:'Lengua + cultural. Lima foodie sub-segment.', en:'Language + cultural. Lima foodie sub-segment.'} },
    { country:'Mexico',  share:'5%',  arrivals:170_000,   premium:true,  note:{es:'Foodie tourism Lima. Central/Maido draw.', en:'Lima foodie tourism. Central/Maido draw.'} }
  ],
  premium: {
    annualPremiumTravelers: 510_000,
    avgPremiumSpendTotal: 3_800,                       // alto por MP + Belmond
    targetSpendBand: '$2,000 - $5,500',
    luxuryHotelInventory: 2_700,
    nationalPremiumOccupancy: '70%',
    growthLastThreeYears: '+24%'
  },
  soraFit: {
    bullseyeSize: 64_000,
    addressableMarket: 270_000,
    saturation: 'medium',
    competitive: ['Belmond network','Inkaterra','Mountain Lodges of Peru','Black Tomato','operators Cusco-direct'],
    fitNote: {
      es: 'PE bullseye es foodie + arqueológico simultaneous. Producto Sora-PE = Central Lima + Valle Sagrado Belmond + Cusco arqueológico independiente, no Belmond-tour.',
      en: 'PE bullseye is foodie + archaeological simultaneous. Sora-PE product = Central Lima + Sacred Valley Belmond + independent Cusco archaeology, not Belmond-tour.'
    }
  },
  seasonality: {
    peak: ['Jun','Jul','Aug','Sep'],                   // dry season Cusco
    shoulder: ['Apr','May','Oct','Nov'],
    low: ['Dec','Jan','Feb','Mar'],                    // wet season MP
    notes: {
      es: 'Inv inverso a Caribe: dry season Cusco junio-sep es premium. Lima año-redondo. Diciembre puede llover Machu Picchu y cerrar trails.',
      en: 'Inverse of Caribbean: Cusco dry season Jun-Sep is premium. Lima year-round. December rain may close MP trails.'
    }
  },
  demographic: {
    avgAge: 43,
    soloShare: '19%',
    coupleShare: '48%',
    groupFriendsShare: '15%',
    familyShare: '18%',
    lgbtqIndex: 'medium (Lima moderado; Cusco conservador)',
    languageNote: {es:'Inglés decente Lima Barranco/Miraflores. Cusco bilingüe quechua-español + inglés básico.', en:'Decent English Lima Barranco/Miraflores. Cusco bilingual Quechua-Spanish + basic English.'}
  },
  insight: {
    es: 'PE guest es older (43) y más family. Producto Sora-PE puede acomodar multigeneracional — Valle Sagrado familias 8-12 con abuelos. Diferenciación: chef privado Central-grade en finca, no restaurante público.',
    en: 'PE guest is older (43) and more family. Sora-PE product can accommodate multigenerational — Sacred Valley families 8-12 with grandparents. Differentiation: Central-grade private chef at finca, not public restaurant.'
  }
},

/* ============================== CL ============================== */
CL: {
  macro: {
    intlArrivals2024: 4_900_000,
    intlArrivals2023: 4_200_000,
    yoyGrowth: '+16.7%',
    receiptsUSD: 3_100_000_000,
    tourismPctGDP: '3.2%',
    avgStay: 10.2,
    avgSpendPerVisitor: 632,
    occupancyTopHotels: '67%'
  },
  origins: [
    { country:'Argentina', share:'35%', arrivals:1_715_000, premium:false, note:{es:'Cross-border. Calidad media-baja.', en:'Cross-border. Mid-low quality.'} },
    { country:'Brazil',    share:'12%', arrivals:588_000,   premium:true,  note:{es:'Esquí + Patagonia. Premium real.', en:'Ski + Patagonia. Real premium.'} },
    { country:'USA',       share:'8%',  arrivals:392_000,   premium:true,  note:{es:'Atacama + Patagonia. Top-spender.', en:'Atacama + Patagonia. Top-spender.'} },
    { country:'Peru',      share:'7%',  arrivals:343_000,   premium:false, note:{es:'Comercio + visita familiar.', en:'Commerce + family visit.'} },
    { country:'Europa (top 5)', share:'15%', arrivals:735_000, premium:true, note:{es:'France + Germany + UK + Spain + Italy. Patagonia driver.', en:'France + Germany + UK + Spain + Italy. Patagonia driver.'} }
  ],
  premium: {
    annualPremiumTravelers: 380_000,
    avgPremiumSpendTotal: 5_200,                       // highest LATAM (long-haul + remote)
    targetSpendBand: '$2,500 - $7,000',
    luxuryHotelInventory: 2_200,
    nationalPremiumOccupancy: '65%',
    growthLastThreeYears: '+19%'
  },
  soraFit: {
    bullseyeSize: 42_000,
    addressableMarket: 210_000,
    saturation: 'medium',
    competitive: ['Explora (Atacama + Patagonia)','Tierra Hotels','Awasi','Cascada Expediciones'],
    fitNote: {
      es: 'CL premium es Explora/Tierra/Awasi-dominated. Sora ángulo: portfolio cross-Chile (Atacama + Santiago wine + Patagonia) en un producto, sin tener que reservar 3 hoteles separados.',
      en: 'CL premium is Explora/Tierra/Awasi-dominated. Sora angle: cross-Chile portfolio (Atacama + Santiago wine + Patagonia) in one product, without booking 3 separate hotels.'
    }
  },
  seasonality: {
    peak: ['Dec','Jan','Feb','Mar'],                   // austral summer Patagonia
    shoulder: ['Apr','May','Sep','Nov'],
    low: ['Jun','Jul','Aug','Oct'],
    notes: {
      es: 'Patagonia ventana Nov-Mar (luz + clima). Atacama año-redondo (desierto). Vendimia Mar Casablanca es sub-peak.',
      en: 'Patagonia window Nov-Mar (light + weather). Atacama year-round (desert). March Casablanca harvest is sub-peak.'
    }
  },
  demographic: {
    avgAge: 45,
    soloShare: '22%',
    coupleShare: '52%',
    groupFriendsShare: '14%',
    familyShare: '12%',
    lgbtqIndex: 'medium-high (Santiago Bellas Artes/Lastarria scene)',
    languageNote: {es:'Inglés excelente en zonas premium (Atacama, Patagonia). Santiago bilingüe sector empresarial.', en:'Excellent English in premium zones (Atacama, Patagonia). Bilingual Santiago business sector.'}
  },
  insight: {
    es: 'CL guest es el más mayor del LATAM premium (45) y el de mayor ticket ($5,200). Producto Sora-CL = bucket-list trip (Atacama + Patagonia + cena Boragó) para guests que ya hicieron MX/PE/AR.',
    en: 'CL guest is LATAM premium\'s oldest (45) and highest-ticket ($5,200). Sora-CL product = bucket-list trip (Atacama + Patagonia + Boragó dinner) for guests who already did MX/PE/AR.'
  }
},

/* ============================== UY ============================== */
UY: {
  macro: {
    intlArrivals2024: 4_100_000,
    intlArrivals2023: 3_700_000,
    yoyGrowth: '+10.8%',
    receiptsUSD: 2_700_000_000,
    tourismPctGDP: '7.4%',
    avgStay: 8.4,
    avgSpendPerVisitor: 658,
    occupancyTopHotels: '72%'                          // José Ignacio summer 95%+
  },
  origins: [
    { country:'Argentina', share:'58%', arrivals:2_378_000, premium:true,  note:{es:'PORTEÑO PREMIUM. Punta + JI dominan. 80% del premium UY.', en:'PORTEÑO PREMIUM. Punta + JI dominate. 80% of UY premium.'} },
    { country:'Brazil',    share:'17%', arrivals:697_000,   premium:true,  note:{es:'Veraneo paulista. Crecimiento +25% YoY.', en:'Paulista summer. +25% YoY growth.'} },
    { country:'USA',       share:'4%',  arrivals:164_000,   premium:true,  note:{es:'Pequeño pero ultra-premium. Mansiones JI.', en:'Small but ultra-premium. JI mansions.'} },
    { country:'Chile',     share:'4%',  arrivals:164_000,   premium:false, note:{es:'Comercio Punta del Este off-season.', en:'Punta del Este off-season commerce.'} },
    { country:'Paraguay',  share:'3%',  arrivals:123_000,   premium:false, note:{es:'Mid-tier vacation.', en:'Mid-tier vacation.'} }
  ],
  premium: {
    annualPremiumTravelers: 270_000,
    avgPremiumSpendTotal: 3_900,
    targetSpendBand: '$1,800 - $6,000',
    luxuryHotelInventory: 1_200,                       // muy concentrado JI/Punta
    nationalPremiumOccupancy: '95% pico / 25% bajo',   // estacionalidad extrema
    growthLastThreeYears: '+12%'
  },
  soraFit: {
    bullseyeSize: 38_000,
    addressableMarket: 140_000,
    saturation: 'medium-high (JI saturado, Garzón abierto)',
    competitive: ['Vik Retreats','Garzón Mallmann','Casa Suaya','UXUA-similar boutique'],
    fitNote: {
      es: 'UY es producto temporal — Dic-Mar concentra 75% del ingreso. Sora ángulo: extender stay agregando Garzón + Cabo Polonio + Colonia → producto 5-7 días no 3 días.',
      en: 'UY is seasonal product — Dec-Mar concentrates 75% of revenue. Sora angle: extend stay by adding Garzón + Cabo Polonio + Colonia → 5-7 day product not 3 days.'
    }
  },
  seasonality: {
    peak: ['Dec','Jan','Feb','Mar'],
    shoulder: ['Apr','Nov'],
    low: ['May','Jun','Jul','Aug','Sep','Oct'],
    notes: {
      es: 'Concentración estacional más extrema LATAM. Sora-UY DEBE operar Dic-Mar con anfitrión full + Abr-Nov part-time o cero.',
      en: 'Most extreme seasonal concentration in LATAM. Sora-UY MUST run Dec-Mar with full host + Apr-Nov part-time or zero.'
    }
  },
  demographic: {
    avgAge: 39,
    soloShare: '12%',
    coupleShare: '58%',
    groupFriendsShare: '24%',
    familyShare: '6%',
    lgbtqIndex: 'high (UY tier-1 globalmente leyes igualdad)',
    languageNote: {es:'Español. Inglés operativo zonas premium. Portugués en aumento.', en:'Spanish. Operational English in premium zones. Portuguese rising.'}
  },
  insight: {
    es: 'UY guest es 1% LATAM puro (porteño + paulista). Producto Sora-UY debe igualar standard JI (Bahía Vik tier) o no entrar. No espacio para "casual premium" — la audiencia no existe en UY.',
    en: 'UY guest is pure LATAM 1% (porteño + paulista). Sora-UY product must match JI standard (Bahía Vik tier) or don\'t enter. No room for "casual premium" — that audience doesn\'t exist in UY.'
  }
},

/* ============================== PA ============================== */
PA: {
  macro: {
    intlArrivals2024: 2_200_000,
    intlArrivals2023: 2_000_000,
    yoyGrowth: '+10%',
    receiptsUSD: 4_600_000_000,                        // alto por conexión Hub
    tourismPctGDP: '12.0%',                            // muy dependiente
    avgStay: 6.8,
    avgSpendPerVisitor: 2_091,                         // alto por hub + canal
    occupancyTopHotels: '68%'
  },
  origins: [
    { country:'USA',       share:'34%', arrivals:748_000, premium:true,  note:{es:'PTY hub + Boquete expats. Drive market estable.', en:'PTY hub + Boquete expats. Stable drive market.'} },
    { country:'Colombia',  share:'12%', arrivals:264_000, premium:false, note:{es:'Mayormente business + comercio.', en:'Mostly business + commerce.'} },
    { country:'Venezuela', share:'8%',  arrivals:176_000, premium:false, note:{es:'Diáspora + tránsito. Estable.', en:'Diaspora + transit. Stable.'} },
    { country:'Costa Rica',share:'5%',  arrivals:110_000, premium:true,  note:{es:'Cross-border premium tourism Boquete.', en:'Cross-border premium tourism to Boquete.'} },
    { country:'Mexico',    share:'4%',  arrivals:88_000,  premium:true,  note:{es:'Bocas + Casco. Audiencia mid-premium.', en:'Bocas + Casco. Mid-premium audience.'} }
  ],
  premium: {
    annualPremiumTravelers: 240_000,
    avgPremiumSpendTotal: 2_650,
    targetSpendBand: '$700 - $3,000',
    luxuryHotelInventory: 2_400,
    nationalPremiumOccupancy: '68%',
    growthLastThreeYears: '+15%'
  },
  soraFit: {
    bullseyeSize: 36_000,
    addressableMarket: 170_000,
    saturation: 'low',
    competitive: ['Tranquilo Bay direct (Bocas)','Cuba/CR alternatives','no premium LATAM curator'],
    fitNote: {
      es: 'PA es origen Sora — ventaja operativa máxima. Audiencia pequeña pero alta retención. Producto Sora-PA debe ser "starter chapter" para guest internacional nuevo a LATAM premium.',
      en: 'PA is Sora origin — maximum operational advantage. Small but high-retention audience. Sora-PA product should be "starter chapter" for international guest new to LATAM premium.'
    }
  },
  seasonality: {
    peak: ['Dec','Jan','Feb','Mar','Apr'],             // dry season
    shoulder: ['May','Nov'],
    low: ['Jun','Jul','Aug','Sep','Oct'],              // wet season
    notes: {
      es: 'Boquete dry Dec-Abr. Bocas mejor Jun-Oct paradójicamente (mar calmado). Dos productos estacionales distintos.',
      en: 'Boquete dry Dec-Apr. Bocas paradoxically better Jun-Oct (calm sea). Two seasonal products distinct.'
    }
  },
  demographic: {
    avgAge: 44,
    soloShare: '17%',
    coupleShare: '54%',
    groupFriendsShare: '14%',
    familyShare: '15%',
    lgbtqIndex: 'medium (Casco Viejo progresivo)',
    languageNote: {es:'Inglés muy operativo (segunda lengua nacional). Excelente para Sora.', en:'Very operational English (national second language). Excellent for Sora.'}
  },
  insight: {
    es: 'PA es plataforma de pruebas Sora. Audiencia pequeña → bajo riesgo product-market test. Lo que funciona aquí escala a chapters más grandes.',
    en: 'PA is Sora test platform. Small audience → low product-market-test risk. What works here scales to larger chapters.'
  }
},

/* ============================== VE ============================== */
VE: {
  macro: {
    intlArrivals2024: 600_000,                         // recovery early stage
    intlArrivals2023: 380_000,
    yoyGrowth: '+58%',                                 // rebound base baja
    receiptsUSD: 720_000_000,
    tourismPctGDP: '1.2%',
    avgStay: 12.5,
    avgSpendPerVisitor: 1_200,
    occupancyTopHotels: '52%'
  },
  origins: [
    { country:'Colombia',  share:'28%', arrivals:168_000, premium:false, note:{es:'Cross-border + diáspora retorno. NO premium.', en:'Cross-border + diaspora return. NOT premium.'} },
    { country:'USA',       share:'18%', arrivals:108_000, premium:true,  note:{es:'Recovery post-AA reanudación. Audiencia adventure-curious + diáspora-VE.', en:'Recovery post-AA resumption. Adventure-curious audience + VE-diaspora.'} },
    { country:'Spain',     share:'9%',  arrivals:54_000,  premium:true,  note:{es:'Diáspora histórica. Cultural + family.', en:'Historic diaspora. Cultural + family.'} },
    { country:'Argentina', share:'5%',  arrivals:30_000,  premium:true,  note:{es:'Adventurous. Los Roques target.', en:'Adventurous. Los Roques target.'} },
    { country:'Brazil',    share:'4%',  arrivals:24_000,  premium:false, note:{es:'Border trade.', en:'Border trade.'} }
  ],
  premium: {
    annualPremiumTravelers: 90_000,
    avgPremiumSpendTotal: 2_800,
    targetSpendBand: '$1,000 - $4,000',
    luxuryHotelInventory: 800,                         // muy limitado
    nationalPremiumOccupancy: '52%',
    growthLastThreeYears: '+85%'                       // base baja
  },
  soraFit: {
    bullseyeSize: 14_000,
    addressableMarket: 65_000,
    saturation: 'extremely-low',
    competitive: ['Posadas Los Roques (concesión-bound)','no premium curator establecido'],
    fitNote: {
      es: 'VE es la jugada de opcionalidad. Mercado pequeño hoy pero exponencial si transición política consolida. Si Sora-VE entra ya, captura el primer-mover advantage histórico.',
      en: 'VE is the optionality play. Small market today but exponential if political transition consolidates. If Sora-VE enters now, captures historic first-mover advantage.'
    }
  },
  seasonality: {
    peak: ['Dec','Jan','Feb','Mar','Jul','Aug'],
    shoulder: ['Apr','Nov'],
    low: ['May','Jun','Sep','Oct'],
    notes: {
      es: 'Los Roques dry season Dec-Abr ventana premium. Caracas año-redondo (clima estable). Canaima solo Dic-Mayo (acceso vía Margarita).',
      en: 'Los Roques dry season Dec-Apr premium window. Caracas year-round (stable climate). Canaima only Dec-May (access via Margarita).'
    }
  },
  demographic: {
    avgAge: 36,
    soloShare: '24%',
    coupleShare: '46%',
    groupFriendsShare: '22%',
    familyShare: '8%',
    lgbtqIndex: 'low-medium (Caracas-este permisivo; resto conservador)',
    languageNote: {es:'Español. Inglés escaso. Operadores premium bilingües.', en:'Spanish. Limited English. Premium operators bilingual.'}
  },
  insight: {
    es: 'VE guest es adventure-curious + cripto-savvy. Producto Sora-VE debe ser specialty (Los Roques snorkel + Caracas restaurant scene + Andes paragliding), no commodity beach.',
    en: 'VE guest is adventure-curious + crypto-savvy. Sora-VE product should be specialty (Los Roques snorkel + Caracas restaurant scene + Andes paragliding), not commodity beach.'
  }
}

};

/* =============================================================
   PORTFOLIO-LEVEL INSIGHTS
   ============================================================= */
window.SORA_PORTFOLIO_INSIGHT = {
  topPremiumByVolume: ['MX', 'BR', 'CO', 'CR', 'AR'],
  topAvgTicket:       ['CL', 'BR', 'PE', 'UY', 'CR'],
  fastestGrowing:     ['VE', 'CO', 'BR', 'PE', 'CL'],
  leastSaturated:     ['VE', 'CO', 'AR', 'PA', 'PE'],
  highestUSOriginShare:['CR', 'PA', 'MX', 'PE'],
  highestArgOriginShare:['UY', 'BR', 'CL'],

  sora2026Priority: [
    { rank:1, code:'MX', why:{es:'Mayor TAM premium + portfolio anchor.', en:'Largest premium TAM + portfolio anchor.'} },
    { rank:2, code:'CO', why:{es:'Fastest-growing + zero premium competitor.', en:'Fastest-growing + zero premium competitor.'} },
    { rank:3, code:'AR', why:{es:'Highest structural margin + Sora differentiation natural.', en:'Highest structural margin + natural Sora differentiation.'} },
    { rank:4, code:'BR', why:{es:'Highest avg ticket + best origin diversity.', en:'Highest avg ticket + best origin diversity.'} },
    { rank:5, code:'CR', why:{es:'Saturated but mature; Sora portfolio play.', en:'Saturated but mature; Sora portfolio play.'} }
  ],

  crossSellMap: {
    es: 'Guest típico LATAM-premium hace 2.4 chapters Sora en 18 meses. Cross-sell óptimo: MX→CO (similar guest, diferente sensación); CO→BR (escalada premium); AR→UY (Dec-Mar weekend); CR→PA (vecino conveniente); PE→CL (bucket-list pair).',
    en: 'Typical LATAM-premium guest does 2.4 Sora chapters in 18 months. Optimal cross-sell: MX→CO (similar guest, different feel); CO→BR (premium upgrade); AR→UY (Dec-Mar weekend); CR→PA (convenient neighbor); PE→CL (bucket-list pair).'
  }
};
