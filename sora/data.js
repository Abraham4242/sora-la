/* ============================================================
   SORA · DATA · single source of truth across web/admin/app
   Loaded as window.SORA_DATA. Admin overrides localStorage.
   ============================================================ */
window.SORA_DATA = {
  meta: {
    version: '0.4',
    updated: '2026-05-24',
    defaultCountry: 'PA',
    brand: { name: 'SORA', sub: 'Travel Agency', company: 'La Compañía' }
  },

  /* ============ COUNTRIES (15 chapters across LATAM) ============ */
  countries: [
    { code: 'PA', name: { es: 'Panamá', en: 'Panama' },           flag: '🇵🇦', tier: 2, status: 'live',      hero: 'Chiriquí · Bocas del Toro' },
    { code: 'MX', name: { es: 'México', en: 'Mexico' },            flag: '🇲🇽', tier: 1, status: 'launching', hero: 'CDMX · Tulum · Oaxaca · San Miguel' },
    { code: 'CO', name: { es: 'Colombia', en: 'Colombia' },        flag: '🇨🇴', tier: 1, status: 'launching', hero: 'Medellín · Cartagena · Coffee Region' },
    { code: 'VE', name: { es: 'Venezuela', en: 'Venezuela' },      flag: '🇻🇪', tier: 2, status: 'launching', hero: 'Caracas · Los Roques · Mérida' },
    { code: 'BR', name: { es: 'Brasil', en: 'Brazil' },            flag: '🇧🇷', tier: 1, status: 'soon',      hero: 'Trancoso · Rio · Búzios · Noronha' },
    { code: 'AR', name: { es: 'Argentina', en: 'Argentina' },      flag: '🇦🇷', tier: 1, status: 'soon',      hero: 'Buenos Aires · Mendoza · Patagonia' },
    { code: 'CR', name: { es: 'Costa Rica', en: 'Costa Rica' },    flag: '🇨🇷', tier: 1, status: 'soon',      hero: 'Nosara · Santa Teresa · Manuel Antonio' },
    { code: 'PE', name: { es: 'Perú', en: 'Peru' },                flag: '🇵🇪', tier: 2, status: 'soon',      hero: 'Lima · Sacred Valley · Machu Picchu' },
    { code: 'CL', name: { es: 'Chile', en: 'Chile' },              flag: '🇨🇱', tier: 2, status: 'soon',      hero: 'Atacama · Patagonia · Wine Country' },
    { code: 'UY', name: { es: 'Uruguay', en: 'Uruguay' },          flag: '🇺🇾', tier: 2, status: 'soon',      hero: 'José Ignacio · Punta del Este' },
    { code: 'DO', name: { es: 'República Dominicana', en: 'Dominican Republic' }, flag: '🇩🇴', tier: 3, status: 'soon', hero: 'Las Terrenas · Santo Domingo · Cap Cana' },
    { code: 'GT', name: { es: 'Guatemala', en: 'Guatemala' },      flag: '🇬🇹', tier: 3, status: 'soon',      hero: 'Antigua · Lake Atitlán · Tikal' },
    { code: 'EC', name: { es: 'Ecuador', en: 'Ecuador' },          flag: '🇪🇨', tier: 3, status: 'soon',      hero: 'Galápagos · Quito · Mindo' },
    { code: 'PR', name: { es: 'Puerto Rico', en: 'Puerto Rico' },  flag: '🇵🇷', tier: 3, status: 'soon',      hero: 'Old San Juan · Vieques · Dorado' },
    { code: 'CU', name: { es: 'Cuba', en: 'Cuba' },                flag: '🇨🇺', tier: 3, status: 'gated',     hero: 'Havana · Viñales · Trinidad' }
  ],

  /* ============ PER-COUNTRY CONFIG (contact + social) ============ */
  config: {
    PA: { whatsapp: '50760000000', email: 'pa@sora.la', instagram: '', tiktok: '', facebook: '' },
    MX: { whatsapp: '5215500000000', email: 'mx@sora.la', instagram: '', tiktok: '', facebook: '' },
    CO: { whatsapp: '573000000000', email: 'co@sora.la', instagram: '', tiktok: '', facebook: '' },
    VE: { whatsapp: '584140000000', email: 've@sora.la', instagram: '', tiktok: '', facebook: '' },
    BR: { whatsapp: '', email: 'br@sora.la', instagram: '', tiktok: '', facebook: '' },
    AR: { whatsapp: '', email: 'ar@sora.la', instagram: '', tiktok: '', facebook: '' },
    CR: { whatsapp: '', email: 'cr@sora.la', instagram: '', tiktok: '', facebook: '' },
    PE: { whatsapp: '', email: 'pe@sora.la', instagram: '', tiktok: '', facebook: '' },
    CL: { whatsapp: '', email: 'cl@sora.la', instagram: '', tiktok: '', facebook: '' },
    UY: { whatsapp: '', email: 'uy@sora.la', instagram: '', tiktok: '', facebook: '' },
    DO: { whatsapp: '', email: 'do@sora.la', instagram: '', tiktok: '', facebook: '' },
    GT: { whatsapp: '', email: 'gt@sora.la', instagram: '', tiktok: '', facebook: '' },
    EC: { whatsapp: '', email: 'ec@sora.la', instagram: '', tiktok: '', facebook: '' },
    PR: { whatsapp: '', email: 'pr@sora.la', instagram: '', tiktok: '', facebook: '' },
    CU: { whatsapp: '', email: 'cu@sora.la', instagram: '', tiktok: '', facebook: '' },
    // Default fallback when no country selected
    _: { whatsapp: '50760000000', email: 'hola@sora.la', instagram: '', tiktok: '', facebook: '' }
  },

  /* ============ WEEKEND EVENTS ============
     Each event has: id (country-prefixed), country, badge, date,
     where, titleEs/En, descEs/En, price, pax, hours, scene, bg.    */
  events: [
    /* ---------- PANAMÁ (live) ---------- */
    { id: 'pa-mirador-baru', country: 'PA',
      badge: 'Sunset Series', date: { es: '14 – 15 Junio', en: 'June 14 – 15' },
      where: 'Volcán · Chiriquí',
      titleEs: 'Mirador <em>Barú</em>', titleEn: 'Mirador <em>Barú</em>',
      descEs: 'Cena al atardecer sobre las nubes, set acústico de Bambi Roots y noche en Volcán Lodge. 12 invitados.',
      descEn: 'Sunset dinner above the clouds, Bambi Roots acoustic set and a night at Volcán Lodge. 12 guests.',
      price: '$680', pax: '12 invitados · 36h',
      scene: 'mirador',
      bg: 'radial-gradient(ellipse 80% 60% at 30% 20%, rgba(212,184,122,0.5), transparent 60%), linear-gradient(180deg, #2a3d4a 0%, #1a2530 50%, #0a1218 100%)'
    },
    { id: 'pa-caribbean-drift', country: 'PA',
      badge: 'Archipelago', date: { es: '24 – 27 Julio', en: 'July 24 – 27' },
      where: 'Isla Bastimentos · Bocas',
      titleEs: 'Caribbean <em>Drift</em>', titleEn: 'Caribbean <em>Drift</em>',
      descEs: 'Tres noches en isla privada. Lancha, surf en Carenero, mariscos del día y fogata bajo las estrellas. 18 invitados.',
      descEn: 'Three nights on a private island. Boat, Carenero surf, fresh seafood and a fire under the stars. 18 guests.',
      price: '$1,420', pax: '18 invitados · 72h',
      scene: 'bocas',
      bg: 'radial-gradient(ellipse 80% 60% at 70% 25%, rgba(212,184,122,0.4), transparent 60%), linear-gradient(180deg, #2c6e7f 0%, #1a4250 50%, #0e2530 100%)'
    },
    { id: 'pa-finca-lerida', country: 'PA',
      badge: 'Coffee Sunrise', date: { es: '22 – 23 Agosto', en: 'August 22 – 23' },
      where: 'Boquete · Chiriquí',
      titleEs: 'Finca <em>Lerida</em>', titleEn: 'Finca <em>Lerida</em>',
      descEs: 'Cata privada de café Geisha, amanecer en la finca, almuerzo farm-to-table y termas de Caldera al cierre. 16 invitados.',
      descEn: 'Private Geisha coffee tasting, sunrise on the farm, farm-to-table lunch and Caldera hot springs to close. 16 guests.',
      price: '$580', pax: '16 invitados · 36h',
      scene: 'finca',
      bg: 'radial-gradient(ellipse 80% 60% at 30% 30%, rgba(212,184,122,0.4), transparent 60%), linear-gradient(180deg, #4a5c3a 0%, #2a3c20 50%, #15200d 100%)'
    },
    { id: 'pa-isla-colon', country: 'PA',
      badge: 'Overwater', date: { es: '19 – 20 Septiembre', en: 'September 19 – 20' },
      where: 'Bocas Town · Bocas del Toro',
      titleEs: 'Isla Colón <em>Sunset</em>', titleEn: 'Isla Colón <em>Sunset</em>',
      descEs: 'Bungalow overwater frente al Caribe. Cena en Punta Caracol, snorkel privado en Cayos Zapatilla. 14 invitados.',
      descEn: 'Overwater bungalow on the Caribbean. Dinner at Punta Caracol, private snorkel at Cayos Zapatilla. 14 guests.',
      price: '$720', pax: '14 invitados · 36h',
      scene: 'bocas',
      bg: 'radial-gradient(ellipse 80% 60% at 60% 30%, rgba(212,184,122,0.45), transparent 60%), linear-gradient(180deg, #1f6b8c 0%, #0e3850 50%, #051f30 100%)'
    },

    /* ---------- MÉXICO (launching Q3 2026) ---------- */
    { id: 'mx-roma-norte', country: 'MX',
      badge: 'Design Weekend', date: { es: '11 – 13 Septiembre 2026', en: 'September 11 – 13, 2026' },
      where: 'Roma Norte · Ciudad de México',
      titleEs: 'CDMX · <em>Roma Norte</em>', titleEn: 'CDMX · <em>Roma Norte</em>',
      descEs: 'Pujol dinner, mezcal en La Botica, gallery tour en Kurimanzutto, brunch en Lardo. 10 invitados.',
      descEn: 'Pujol dinner, mezcal at La Botica, gallery tour at Kurimanzutto, brunch at Lardo. 10 guests.',
      price: '$1,180', pax: '10 invitados · 48h',
      scene: 'night',
      bg: 'radial-gradient(ellipse 80% 60% at 50% 30%, rgba(212,184,122,0.4), transparent 60%), linear-gradient(180deg, #2a1f3a 0%, #1a1224 50%, #0a0612 100%)'
    },
    { id: 'mx-sian-kaan', country: 'MX',
      badge: 'Bioreserve', date: { es: '16 – 19 Octubre 2026', en: 'October 16 – 19, 2026' },
      where: 'Tulum · Sian Ka\'an',
      titleEs: 'Tulum · <em>Sian Ka\'an</em>', titleEn: 'Tulum · <em>Sian Ka\'an</em>',
      descEs: 'Habitas Tulum, boat day en la biorreserva, cenote sunrise, fire ceremony, yoga en Sanara. 12 invitados.',
      descEn: 'Habitas Tulum, biosphere boat day, cenote sunrise, fire ceremony, yoga at Sanara. 12 guests.',
      price: '$1,890', pax: '12 invitados · 72h',
      scene: 'bocas',
      bg: 'radial-gradient(ellipse 75% 55% at 60% 30%, rgba(244,185,66,0.5), transparent 60%), linear-gradient(180deg, #2c6e6e 0%, #1a4040 50%, #0a1f1f 100%)'
    },
    { id: 'mx-san-miguel-dod', country: 'MX',
      badge: 'Día de Muertos', date: { es: '30 Oct – 2 Nov 2026', en: 'Oct 30 – Nov 2, 2026' },
      where: 'San Miguel de Allende · Guanajuato',
      titleEs: 'San Miguel · <em>Día de Muertos</em>', titleEn: 'San Miguel · <em>Day of the Dead</em>',
      descEs: 'Rosewood San Miguel. Procesiones, dinner en Áperi, hot air balloon al amanecer, atelier privado. 14 invitados.',
      descEn: 'Rosewood San Miguel. Processions, dinner at Áperi, sunrise hot air balloon, private atelier. 14 guests.',
      price: '$1,420', pax: '14 invitados · 72h',
      scene: 'finca',
      bg: 'radial-gradient(ellipse 80% 60% at 30% 25%, rgba(224,122,95,0.5), transparent 60%), linear-gradient(180deg, #5a2a1a 0%, #2e1810 50%, #150a06 100%)'
    },
    { id: 'mx-oaxaca-coast', country: 'MX',
      badge: 'Mezcal + Pacífico', date: { es: '20 – 24 Noviembre 2026', en: 'November 20 – 24, 2026' },
      where: 'Oaxaca · Mazunte',
      titleEs: 'Oaxaca · <em>Mezcal y Costa</em>', titleEn: 'Oaxaca · <em>Mezcal &amp; Coast</em>',
      descEs: 'Hotel Sin Nombre + Casa Sandra. Tres palenques, Casa Oaxaca, mercado, costa, sunset turtle release. 10 invitados.',
      descEn: 'Hotel Sin Nombre + Casa Sandra. Three palenques, Casa Oaxaca, market, coast, sunset turtle release. 10 guests.',
      price: '$1,650', pax: '10 invitados · 96h',
      scene: 'finca',
      bg: 'radial-gradient(ellipse 80% 60% at 70% 30%, rgba(212,184,122,0.45), transparent 60%), linear-gradient(180deg, #6a4a2a 0%, #3a2814 50%, #1a1208 100%)'
    },

    /* ---------- COLOMBIA (launching Q4 2026) ---------- */
    { id: 'co-cartagena-rosario', country: 'CO',
      badge: 'Walled City', date: { es: '20 – 23 Noviembre 2026', en: 'November 20 – 23, 2026' },
      where: 'Cartagena · Islas del Rosario',
      titleEs: 'Cartagena · <em>Walled City</em>', titleEn: 'Cartagena · <em>Walled City</em>',
      descEs: 'Casa San Agustín. Sunset en las murallas, dinner en Donjuán, lancha privada Rosario, salsa en Getsemaní. 14 invitados.',
      descEn: 'Casa San Agustín. Sunset on the walls, dinner at Donjuán, private boat to Rosario Islands, salsa in Getsemaní. 14 guests.',
      price: '$1,580', pax: '14 invitados · 72h',
      scene: 'bocas',
      bg: 'radial-gradient(ellipse 80% 60% at 40% 30%, rgba(212,184,122,0.45), transparent 60%), linear-gradient(180deg, #5a3a2a 0%, #3a241a 50%, #1a100a 100%)'
    },
    { id: 'co-medellin-provenza', country: 'CO',
      badge: 'Design + Tech', date: { es: '4 – 7 Diciembre 2026', en: 'December 4 – 7, 2026' },
      where: 'Medellín · El Poblado',
      titleEs: 'Medellín · <em>Provenza</em>', titleEn: 'Medellín · <em>Provenza</em>',
      descEs: 'The Charlee. Comuna 13 con artistas, dinner en Carmen, paragliding San Felix, café en Pergamino. 12 invitados.',
      descEn: 'The Charlee. Comuna 13 with the artists, dinner at Carmen, paragliding San Felix, coffee at Pergamino. 12 guests.',
      price: '$1,140', pax: '12 invitados · 72h',
      scene: 'bosque',
      bg: 'radial-gradient(ellipse 80% 60% at 30% 30%, rgba(74,125,99,0.5), transparent 60%), linear-gradient(180deg, #2e4438, #0e201a 80%)'
    },
    { id: 'co-salento', country: 'CO',
      badge: 'Coffee Region', date: { es: '22 – 24 Enero 2027', en: 'January 22 – 24, 2027' },
      where: 'Salento · Eje Cafetero',
      titleEs: 'Salento · <em>Cocora Valley</em>', titleEn: 'Salento · <em>Cocora Valley</em>',
      descEs: 'Bio Habitat. Finca El Ocaso (cherry-to-cup), valle del Cocora a caballo, jeep tour Willys, Helena Adentro. 10 invitados.',
      descEn: 'Bio Habitat. Finca El Ocaso (cherry-to-cup), horseback in Cocora Valley, Willys jeep tour, Helena Adentro. 10 guests.',
      price: '$890', pax: '10 invitados · 60h',
      scene: 'finca',
      bg: 'radial-gradient(ellipse at 30% 20%, rgba(212,184,122,0.4), transparent 60%), linear-gradient(180deg, #4a5c2a, #1a200e)'
    },

    /* ---------- VENEZUELA (launching Q4 2026 · Abraham\'s home base) ---------- */
    { id: 've-mirador-avila', country: 'VE',
      badge: 'Caracas Series', date: { es: '5 – 7 Diciembre 2026', en: 'December 5 – 7, 2026' },
      where: 'Caracas · Cerro El Ávila',
      titleEs: 'Caracas · <em>Mirador Ávila</em>', titleEn: 'Caracas · <em>Mirador Ávila</em>',
      descEs: 'Renaissance Caracas. Sabas Nieves al amanecer, dinner en Alto, Setenta cocktails, brunch en Franca. 12 invitados.',
      descEn: 'Renaissance Caracas. Sabas Nieves at sunrise, dinner at Alto, Setenta cocktails, brunch at Franca. 12 guests.',
      price: '$480', pax: '12 invitados · 48h',
      scene: 'mirador',
      bg: 'radial-gradient(ellipse 75% 50% at 70% 22%, rgba(244,185,66,0.45), transparent 65%), linear-gradient(180deg, #2a1a14 0%, #1f3024 55%, #0a1812 100%)'
    },
    { id: 've-los-roques', country: 'VE',
      badge: 'Caribbean Paradise', date: { es: '15 – 18 Febrero 2027', en: 'February 15 – 18, 2027' },
      where: 'Los Roques · Cayo de Agua',
      titleEs: 'Los Roques · <em>Cayo de Agua</em>', titleEn: 'Los Roques · <em>Cayo de Agua</em>',
      descEs: 'Posada La Cigala. Lancha entre cayos, langosta del día, snorkel, sunset en Madrisquí. 8 invitados.',
      descEn: 'Posada La Cigala. Boat between cays, lobster of the day, snorkel, sunset on Madrisquí. 8 guests.',
      price: '$1,890', pax: '8 invitados · 72h',
      scene: 'bocas',
      bg: 'radial-gradient(ellipse 80% 60% at 50% 30%, rgba(212,184,122,0.5), transparent 60%), linear-gradient(180deg, #1f8caf 0%, #0e4860 50%, #051f30 100%)'
    },
    { id: 've-merida', country: 'VE',
      badge: 'Andes Weekend', date: { es: '5 – 8 Marzo 2027', en: 'March 5 – 8, 2027' },
      where: 'Mérida · Sierra Nevada',
      titleEs: 'Mérida · <em>Sierra Nevada</em>', titleEn: 'Mérida · <em>Sierra Nevada</em>',
      descEs: 'Hostería La Trinitaria. Paragliding, teleférico Pico Espejo, trucha andina, café de altura. 10 invitados.',
      descEn: 'Hostería La Trinitaria. Paragliding, Pico Espejo cable car, Andean trout, high-altitude coffee. 10 guests.',
      price: '$720', pax: '10 invitados · 72h',
      scene: 'mirador',
      bg: 'radial-gradient(ellipse 80% 60% at 40% 25%, rgba(212,184,122,0.4), transparent 60%), linear-gradient(180deg, #3a4a5a 0%, #1f2c3a 50%, #0a1218 100%)'
    }
  ],

  /* ============ DAY EXPERIENCES ============ */
  experiences: [
    /* PA — already running */
    { id: 'pa-geisha', country: 'PA', cat: 'gastronomia', name: { es: 'Cata de café Geisha', en: 'Geisha coffee tasting' }, dur: '2h', price: '$45', loc: 'Finca Lerida · Boquete', scene: 'finca', wide: true,
      bg: 'radial-gradient(ellipse at 30% 20%, rgba(212,184,122,0.5), transparent 60%), linear-gradient(180deg, #5a4a2a, #2e1f10)' },
    { id: 'pa-baru', country: 'PA', cat: 'aventura', name: { es: 'Sunrise Volcán Barú', en: 'Sunrise Volcán Barú' }, dur: '8h', price: '$95', loc: 'Parque Nacional · Volcán', scene: 'mirador',
      bg: 'radial-gradient(ellipse at 50% 10%, rgba(212,184,122,0.5), transparent 60%), linear-gradient(180deg, #2a3d4a, #0a1218)' },
    { id: 'pa-caldera', country: 'PA', cat: 'bienestar', name: { es: 'Termas privadas Caldera', en: 'Caldera private hot springs' }, dur: '2.5h', price: '$80', loc: 'Río Caldera · Chiriquí', scene: 'termas',
      bg: 'radial-gradient(ellipse at 40% 30%, rgba(74,125,99,0.4), transparent 60%), linear-gradient(180deg, #2e4438, #0e201a)' },
    { id: 'pa-quetzal', country: 'PA', cat: 'naturaleza', name: { es: 'Avistar quetzales', en: 'Quetzal birdwatching' }, dur: '4h', price: '$70', loc: 'Sendero Los Quetzales · Boquete', scene: 'bosque',
      bg: 'radial-gradient(ellipse at 30% 30%, rgba(74,125,99,0.5), transparent 60%), linear-gradient(180deg, #1f3a2c, #0a1a13)' },
    { id: 'pa-punta-caracol', country: 'PA', cat: 'gastronomia', name: { es: 'Cena Punta Caracol', en: 'Punta Caracol dinner' }, dur: '4h', price: '$180', loc: 'Bahía Almirante · Bocas', scene: 'bocas', wide: true,
      bg: 'radial-gradient(ellipse at 50% 25%, rgba(212,184,122,0.5), transparent 60%), linear-gradient(180deg, #1f6b8c, #0e3850)' },
    { id: 'pa-zapatilla', country: 'PA', cat: 'aventura', name: { es: 'Snorkel Cayos Zapatilla', en: 'Cayos Zapatilla snorkel' }, dur: '8h', price: '$245', loc: 'Parque Nacional · Bocas', scene: 'bocas',
      bg: 'radial-gradient(ellipse at 50% 30%, rgba(74,140,140,0.5), transparent 60%), linear-gradient(180deg, #1f4a4a, #0a1f1f)' },

    /* MX — launch seeds */
    { id: 'mx-pujol', country: 'MX', cat: 'gastronomia', name: { es: 'Pujol mesa privada', en: 'Pujol private table' }, dur: '4h', price: '$280', loc: 'Polanco · CDMX', scene: 'night',
      bg: 'radial-gradient(ellipse at 50% 30%, rgba(212,184,122,0.4), transparent 60%), linear-gradient(180deg, #2a1f3a, #0a0612)' },
    { id: 'mx-xochimilco', country: 'MX', cat: 'cultura', name: { es: 'Xochimilco al amanecer', en: 'Xochimilco at sunrise' }, dur: '4h', price: '$180', loc: 'Xochimilco · CDMX', scene: 'termas',
      bg: 'radial-gradient(ellipse at 40% 30%, rgba(74,125,99,0.4), transparent 60%), linear-gradient(180deg, #2e4438, #0e201a)' },
    { id: 'mx-cenote-tulum', country: 'MX', cat: 'naturaleza', name: { es: 'Cenote sunrise + desayuno', en: 'Cenote sunrise + breakfast' }, dur: '4h', price: '$145', loc: 'Tulum · Quintana Roo', scene: 'bosque', wide: true,
      bg: 'radial-gradient(ellipse at 30% 30%, rgba(74,140,140,0.45), transparent 60%), linear-gradient(180deg, #1f4a4a, #0a1f1f)' },
    { id: 'mx-mezcal-botica', country: 'MX', cat: 'gastronomia', name: { es: 'Mezcal en La Botica', en: 'Mezcal at La Botica' }, dur: '2h', price: '$75', loc: 'Roma Norte · CDMX', scene: 'night',
      bg: 'radial-gradient(ellipse at 50% 30%, rgba(244,185,66,0.4), transparent 60%), linear-gradient(180deg, #3a2a14, #1a1208)' },
    { id: 'mx-balloon-sma', country: 'MX', cat: 'aventura', name: { es: 'Globo aerostático San Miguel', en: 'Hot air balloon San Miguel' }, dur: '3h', price: '$245', loc: 'San Miguel de Allende', scene: 'finca',
      bg: 'radial-gradient(ellipse at 50% 20%, rgba(224,122,95,0.45), transparent 60%), linear-gradient(180deg, #5a2a1a, #2e1810)' },

    /* CO — launch seeds */
    { id: 'co-comuna13', country: 'CO', cat: 'cultura', name: { es: 'Comuna 13 con guía local', en: 'Comuna 13 with local guide' }, dur: '4h', price: '$85', loc: 'Medellín', scene: 'bosque',
      bg: 'radial-gradient(ellipse at 30% 30%, rgba(74,140,140,0.4), transparent 60%), linear-gradient(180deg, #2a4a4a, #0a1f1f)' },
    { id: 'co-pergamino', country: 'CO', cat: 'gastronomia', name: { es: 'Café Pergamino origen', en: 'Pergamino coffee origin' }, dur: '3h', price: '$65', loc: 'El Poblado · Medellín', scene: 'finca',
      bg: 'radial-gradient(ellipse at 40% 30%, rgba(212,184,122,0.4), transparent 60%), linear-gradient(180deg, #4a3a1f, #1a1208)' },
    { id: 'co-rosario-boat', country: 'CO', cat: 'aventura', name: { es: 'Islas del Rosario lancha privada', en: 'Rosario Islands private boat' }, dur: '8h', price: '$185', loc: 'Cartagena · Bolívar', scene: 'bocas', wide: true,
      bg: 'radial-gradient(ellipse at 50% 25%, rgba(212,184,122,0.45), transparent 60%), linear-gradient(180deg, #1f8caf, #0e4860)' },
    { id: 'co-cocora-horseback', country: 'CO', cat: 'naturaleza', name: { es: 'Valle de Cocora a caballo', en: 'Cocora Valley on horseback' }, dur: '4h', price: '$90', loc: 'Salento · Quindío', scene: 'bosque',
      bg: 'radial-gradient(ellipse at 30% 30%, rgba(74,125,99,0.5), transparent 60%), linear-gradient(180deg, #1f3a2c, #0a1a13)' },

    /* VE — launch seeds */
    { id: 've-sabas-nieves', country: 'VE', cat: 'aventura', name: { es: 'Sabas Nieves al amanecer', en: 'Sabas Nieves at sunrise' }, dur: '5h', price: '$65', loc: 'Ávila · Caracas', scene: 'mirador',
      bg: 'radial-gradient(ellipse at 50% 20%, rgba(244,185,66,0.45), transparent 60%), linear-gradient(180deg, #2a1a14, #0a1812)' },
    { id: 've-alto-chef', country: 'VE', cat: 'gastronomia', name: { es: 'Alto mesa del chef', en: "Alto chef's table" }, dur: '3h', price: '$185', loc: 'Las Mercedes · Caracas', scene: 'night',
      bg: 'radial-gradient(ellipse at 50% 30%, rgba(212,184,122,0.4), transparent 60%), linear-gradient(180deg, #2a1f1a, #0a0612)' },
    { id: 've-chuao-cacao', country: 'VE', cat: 'cultura', name: { es: 'Chuao · ruta del cacao', en: 'Chuao · cacao route' }, dur: '5h', price: '$95', loc: 'Choroní · Aragua', scene: 'bocas',
      bg: 'radial-gradient(ellipse at 40% 30%, rgba(74,125,99,0.45), transparent 60%), linear-gradient(180deg, #2e4438, #0e201a)' }
  ],

  /* ============ REAL ESTATE PROPERTIES ============ */
  properties: [
    /* PA */
    { id: 'pa-boquete-vista', country: 'PA',
      titleEs: 'Lote con vista al Volcán', titleEn: 'Lot with Volcano view',
      location: 'Bajo Boquete, Chiriquí', price: '$85,000',
      sizeEs: '1,200 m²', sizeEn: '1,200 sqm', bedrooms: '',
      descEs: 'Terreno residencial con vista directa al Volcán Barú. Acceso pavimentado, agua y luz disponibles.',
      descEn: 'Residential lot with direct Volcán Barú view. Paved access, water and electricity available.',
      status: 'available', image: '', scene: 'mirador'
    },
    { id: 'pa-finca-cafetera', country: 'PA',
      titleEs: 'Finca cafetera', titleEn: 'Coffee farm',
      location: 'Volcán, Chiriquí', price: '$320,000',
      sizeEs: '4 hectáreas', sizeEn: '4 hectares', bedrooms: '',
      descEs: 'Finca de café Geisha en producción, con casa principal de 3 hab. Beneficio húmedo incluido.',
      descEn: 'Producing Geisha coffee farm with 3-bedroom main house. Wet mill included.',
      status: 'available', image: '', scene: 'finca'
    },
    { id: 'pa-bastimentos', country: 'PA',
      titleEs: 'Casa frente al mar · Bocas', titleEn: 'Beachfront home · Bocas',
      location: 'Isla Bastimentos, Bocas del Toro', price: '$245,000',
      sizeEs: '600 m²', sizeEn: '600 sqm', bedrooms: '3',
      descEs: 'Casa de madera con muelle privado y vista al Caribe. 3 habitaciones, 2 baños. Energía solar.',
      descEn: 'Wooden home with private dock and Caribbean view. 3 bedrooms, 2 bathrooms. Solar power.',
      status: 'sold', image: '', scene: 'bocas'
    },

    /* MX — seed listings */
    { id: 'mx-tulum-zama', country: 'MX',
      titleEs: 'Lote en la selva · Aldea Zama', titleEn: 'Jungle lot · Aldea Zama',
      location: 'Aldea Zama, Tulum', price: '$185,000',
      sizeEs: '450 m²', sizeEn: '450 sqm', bedrooms: '',
      descEs: 'Lote para construir en zona consolidada de Tulum. Cerca de la zona hotelera, cenotes y restaurantes. Permisos al día.',
      descEn: 'Buildable lot in established Tulum zone. Near hotel zone, cenotes, restaurants. Permits in order.',
      status: 'available', image: '', scene: 'bosque'
    },
    { id: 'mx-sma-colonial', country: 'MX',
      titleEs: 'Casa colonial restaurada · Centro', titleEn: 'Restored colonial home · Centro',
      location: 'Centro Histórico, San Miguel de Allende', price: '$680,000',
      sizeEs: '320 m²', sizeEn: '320 sqm', bedrooms: '3',
      descEs: 'Casa del siglo XVIII con patio interior, fuente y bóveda. 3 hab, 3 baños. A 4 cuadras del Jardín.',
      descEn: '18th-century home with interior patio, fountain and vaulted ceilings. 3 bed, 3 bath. 4 blocks from El Jardín.',
      status: 'available', image: '', scene: 'finca'
    },
    { id: 'mx-valle-vines', country: 'MX',
      titleEs: 'Lote en viñedos · Valle de Guadalupe', titleEn: 'Vineyard lot · Valle de Guadalupe',
      location: 'Valle de Guadalupe, Baja California', price: '$220,000',
      sizeEs: '5,000 m²', sizeEn: '5,000 sqm', bedrooms: '',
      descEs: 'Media hectárea apta para viñedo boutique o casa de campo. Vista a los cerros, agua de pozo.',
      descEn: 'Half-hectare apt for boutique vineyard or country house. Hill views, well water.',
      status: 'available', image: '', scene: 'finca'
    },

    /* CO — seed listings */
    { id: 'co-poblado-penthouse', country: 'CO',
      titleEs: 'Penthouse El Poblado', titleEn: 'El Poblado Penthouse',
      location: 'El Poblado, Medellín', price: '$320,000',
      sizeEs: '180 m²', sizeEn: '180 sqm', bedrooms: '3',
      descEs: 'Penthouse moderno con terraza panorámica al valle de Aburrá. 3 hab, 3 baños, parqueo doble.',
      descEn: 'Modern penthouse with panoramic terrace over Aburrá valley. 3 bed, 3 bath, two parking spots.',
      status: 'available', image: '', scene: 'bosque'
    },
    { id: 'co-cartagena-getsemani', country: 'CO',
      titleEs: 'Casa colonial · Getsemaní', titleEn: 'Colonial home · Getsemaní',
      location: 'Getsemaní, Cartagena de Indias', price: '$590,000',
      sizeEs: '240 m²', sizeEn: '240 sqm', bedrooms: '4',
      descEs: 'Casa restaurada del siglo XVII con patio central y piscina. 4 hab, 4 baños. Una cuadra del Centenario.',
      descEn: '17th-century restored home with central patio and pool. 4 bed, 4 bath. One block from Centenario park.',
      status: 'available', image: '', scene: 'bocas'
    },

    /* VE — seed listings (Venezuela is the real estate flagship per VE chapter) */
    { id: 've-altamira-penthouse', country: 'VE',
      titleEs: 'Penthouse Altamira', titleEn: 'Altamira Penthouse',
      location: 'Altamira, Caracas', price: '$240,000',
      sizeEs: '260 m²', sizeEn: '260 sqm', bedrooms: '3',
      descEs: 'Penthouse renovado con vista al Ávila. 3 hab, 3 baños, planta eléctrica, tanque de agua, parqueo.',
      descEn: 'Renovated penthouse with Ávila view. 3 bed, 3 bath, backup generator, water tank, parking.',
      status: 'available', image: '', scene: 'mirador'
    },
    { id: 've-lpg-condo', country: 'VE',
      titleEs: 'Apartamento Los Palos Grandes', titleEn: 'Los Palos Grandes apartment',
      location: 'Los Palos Grandes, Caracas', price: '$135,000',
      sizeEs: '140 m²', sizeEn: '140 sqm', bedrooms: '2',
      descEs: 'Apartamento luminoso en torre con seguridad 24/7. 2 hab, 2 baños, planta eléctrica, gym.',
      descEn: 'Light-filled apartment in tower with 24/7 security. 2 bed, 2 bath, backup generator, gym.',
      status: 'available', image: '', scene: 'mirador'
    }
  ]
};

/* ============ HELPER FUNCTIONS ============
   These run in the page after data.js is loaded. They're attached
   to window so app/web/admin can all call them.                  */

window.soraData = {
  // List of countries to show in the UI (default = launched only)
  countriesShown(includeSoon) {
    return window.SORA_DATA.countries.filter(c =>
      includeSoon ? true : (c.status === 'live' || c.status === 'launching')
    );
  },
  byCode(code) {
    return window.SORA_DATA.countries.find(c => c.code === code);
  },
  // Filter helpers — accepts country code, returns scoped array
  eventsFor(country)      { return window.SORA_DATA.events.filter(e => !country || e.country === country); },
  experiencesFor(country) { return window.SORA_DATA.experiences.filter(e => !country || e.country === country); },
  propertiesFor(country)  { return window.SORA_DATA.properties.filter(p => !country || p.country === country); },
  configFor(country) {
    const cfg = window.SORA_DATA.config[country] || window.SORA_DATA.config._;
    return cfg;
  },
  // Merge admin overrides from localStorage on top of defaults
  loadEffective() {
    const try_ = (k, fallback) => {
      try {
        const v = JSON.parse(localStorage.getItem(k) || 'null');
        return Array.isArray(v) ? v : fallback;
      } catch (e) { return fallback; }
    };
    return {
      events:      try_('sora.events',      window.SORA_DATA.events),
      experiences: try_('sora.experiences', window.SORA_DATA.experiences),
      properties:  try_('sora.properties',  window.SORA_DATA.properties),
      configByCountry: (() => {
        try {
          const stored = JSON.parse(localStorage.getItem('sora.config.byCountry') || 'null');
          if (stored && typeof stored === 'object') return { ...window.SORA_DATA.config, ...stored };
        } catch (e) {}
        return window.SORA_DATA.config;
      })()
    };
  }
};
