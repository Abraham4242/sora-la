/* =============================================================
   SORA · HOST PIPELINE
   Prospective Sora hosts per country — the people who actually
   ran weekends well, have local rolodex, design eye, English+ES.
   Mix of known candidates and search frameworks (IG hashtag /
   location queries) so the team can populate as they find leads.
   Loaded as window.SORA_HOSTS.
   ============================================================= */
window.SORA_HOSTS = {

/* Hosting archetype the team should be looking for */
ARCHETYPE: {
  es: 'El anfitrión Sora no es un guía turístico. Es alguien que YA opera weekends-de-amigos en su ciudad — chef que organiza cenas privadas, fotógrafo que arma trips, ex-hotelero que se independizó, surfero/yogui que tiene base local, curador cultural con red. Característica común: cuando entras a su Instagram ves fotos de gente real (no stock), lugares reales no-turísticos, y la calidad estética es Sora-compatible. Bilingüe ES/EN obligatorio. Edad ideal 28-42. Ingreso entre $1.5-2.5k/mes USD es el sweet spot — suficiente para que el sueldo importe, no tanto como para que no haya hambre.',
  en: 'A Sora host is not a tour guide. It\'s someone who already runs weekends-of-friends in their city — chef who hosts private dinners, photographer who organizes trips, ex-hotelier who went independent, surfer/yogi with a local base, cultural curator with a network. Common signal: their Instagram shows real people (not stock), real non-touristy places, and the aesthetic is Sora-compatible. Bilingual ES/EN required. Ideal age 28-42. $1.5-2.5k/mo USD is the sweet spot — enough that the salary matters, not so much that hunger is gone.'
},

/* Per-country search frameworks: hashtags, location tags, accounts to mine */
SEARCH: {
  MX: {
    hashtags: ['#romanorte','#cdmxcuratedweekend','#tulumlocal','#oaxacaeats','#mezcalpalenque','#sayulitalocal','#valledebravo','#sanmigueldeallende'],
    locations: ['Pujol, Polanco','Habitas Tulum','La Botica Mezcalería','Hotel B Oaxaca','Casa Bosque Polanco'],
    seedAccounts: ['@habitas','@hotelescala','@pujolrestaurante','@quintonil','@kurimanzutto','@romarestaurante','@oaxacaproject','@eduardogarcia.mb'],
    cityFocus:['CDMX (Roma/Condesa)','Tulum/Riviera Maya','Oaxaca City','San Miguel de Allende','Valle de Bravo','Sayulita']
  },
  CO: {
    hashtags: ['#medellinprovenza','#cartagenaweekend','#cocoraweekend','#salentolocal','#guatapelocal','#colombiacurated'],
    locations: ['Carmen Medellín','Casa San Agustín Cartagena','Bosko Guatapé','Hacienda Bambusa'],
    seedAccounts: ['@carmenmedellin','@casasanagustin','@bosko_guatape','@pergaminocafe','@haciendabambusa','@medellinlocal'],
    cityFocus: ['Medellín (Laureles/El Poblado)','Cartagena (Centro Histórico)','Eje Cafetero','Santa Marta/Palomino','Guatapé']
  },
  BR: {
    hashtags: ['#trancosolifestyle','#buziosbrasil','#rioleblon','#paratybrasil','#chapadadiamantina'],
    locations: ['UXUA Casa Trancoso','Janeiro Hotel','Insólito Búzios','Belmond Copacabana'],
    seedAccounts: ['@uxua','@janeirohotel','@oteque','@trancosobrasil','@silvinhatrancoso','@francismallmann'],
    cityFocus: ['Trancoso/Bahia','Rio (Leblon/Santa Teresa)','Búzios','Paraty','Chapada Diamantina']
  },
  AR: {
    hashtags: ['#palermohollywood','#mendozavinedos','#barilochelago','#argentinacurated','#nochecitabuenosaires'],
    locations: ['Don Julio Parrilla','Faena Hotel','The Vines of Mendoza','Llao Llao','Anchoita'],
    seedAccounts: ['@parrilladonjulio','@faenabuenosaires','@tegui','@anchoita','@thevinesresort','@francismallmann','@niceto.club'],
    cityFocus: ['Buenos Aires (Palermo)','Mendoza (Valle de Uco)','Bariloche','Salta/Cafayate','El Calafate']
  },
  CR: {
    hashtags: ['#nosaralocal','#santateresacostarica','#manuelantoniopr','#arenalcostarica','#monteverdetraveler'],
    locations: ['Bodhi Tree Nosara','Hotel Nantipa','Nayara Tented Camp','Lapa Rios'],
    seedAccounts: ['@bodhitreeyogaresort','@harmonyhotelnosara','@nantipahotel','@nayararesorts','@laparios','@nosaracostarica'],
    cityFocus: ['Nosara (Guanacaste)','Santa Teresa/Mal País','Manuel Antonio','La Fortuna/Arenal','Osa Peninsula']
  },
  PE: {
    hashtags: ['#cuscolocal','#vallesagradoperu','#limalifestyle','#barrancoartes','#mancorasurf'],
    locations: ['Central Restaurante','Belmond Río Sagrado','Hotel B Lima','Sanctuary Lodge MP'],
    seedAccounts: ['@centralrestaurante','@hotelb_peru','@belmond','@piacentralleon','@mitsuharutsumura','@piscoperu'],
    cityFocus: ['Lima (Barranco/Miraflores)','Cusco/Valle Sagrado','Arequipa','Máncora','Tambopata Amazonia']
  },
  CL: {
    hashtags: ['#santiagolastarria','#atacamavida','#patagoniacuratedchile','#valledelmaipo','#rapanuilocal'],
    locations: ['Boragó Santiago','Tierra Atacama','Explora Patagonia','Lapostolle Residence'],
    seedAccounts: ['@borago.cl','@tierraatacama','@explora.travel','@lapostolle','@singularsantiago'],
    cityFocus: ['Santiago (Lastarria/Vitacura)','San Pedro de Atacama','Patagonia (Torres Paine)','Colchagua','Rapa Nui']
  },
  UY: {
    hashtags: ['#joseignaciolocal','#puntadeleste','#garzonpueblo','#cabopolonio'],
    locations: ['Bahía Vik','Parador La Huella','Hotel Garzón','Casapueblo'],
    seedAccounts: ['@vikretreats','@parador.lahuella','@hotelgarzon','@francismallmann','@joseignaciouruguay'],
    cityFocus: ['José Ignacio','Punta del Este','Garzón','Cabo Polonio','Colonia del Sacramento','Montevideo']
  },
  PA: {
    hashtags: ['#boquetepanama','#bocasdeltoro','#cascoviejo','#pedasilocal','#chiriquilife'],
    locations: ['Tranquilo Bay Bocas','Finca Lerida Boquete','American Trade Hotel','Casa Hassan Boquete'],
    seedAccounts: ['@tranquilobaybocas','@fincalerida','@americantradehotel','@bocasbaliresort','@bambirootsmusic'],
    cityFocus: ['Boquete (Chiriquí)','Bocas del Toro','Casco Viejo','Pedasí/Azuero','Pearl Islands']
  },
  VE: {
    hashtags: ['#caracaslifestyle','#losroquesvenezuela','#meridaandes','#choroniaragua'],
    locations: ['Alto Restaurant Caracas','Posada La Cigala Los Roques','Hotel Belensate Mérida'],
    seedAccounts: ['@altovenezuela','@carlosgarciacaracas','@amapola.caracas','@losroquesvenezuela'],
    cityFocus: ['Caracas (Las Mercedes/Altamira)','Los Roques','Mérida','Choroní/Chuao','Margarita']
  }
},

/* Identified candidates (warm leads + cold targets) */
CANDIDATES: [
  /* MX */
  { id:'h-mx-1', country:'MX', region:'CDMX', name:'Por identificar · CDMX ex-Habitas content lead', archetype:'ex-hotelier', instagram:'',
    status:'cold', owner:'Abraham', notes:{es:'Buscar ex-Habitas Tulum content team que se mudó CDMX. Red probable: @felipe_romero, @feliperomero.mx', en:'Find ex-Habitas Tulum content team who moved to CDMX. Likely via @felipe_romero, @feliperomero.mx network.'} },
  { id:'h-mx-2', country:'MX', region:'CDMX', name:'Felipe Romero', archetype:'photographer-host', instagram:'@feliperomero',
    status:'partnered', owner:'Abraham', notes:{es:'Ya partner como fotógrafo de marca — explorar si quiere rol expandido host.', en:'Already brand photographer partner — explore expanded host role.'} },
  { id:'h-mx-3', country:'MX', region:'Tulum', name:'Por identificar · Tulum yoga + concierge', archetype:'wellness-host', instagram:'',
    status:'cold', owner:'Abdiel', notes:{es:'Cruz IG yoga teachers Tulum con conexión Habitas/Azulik. Hablar inglés perfecto.', en:'IG yoga teachers Tulum cross-linked Habitas/Azulik. Perfect English speakers.'} },
  { id:'h-mx-4', country:'MX', region:'Oaxaca City', name:'Por identificar · Oaxaca chef ó textile curator', archetype:'cultural-curator', instagram:'',
    status:'cold', owner:'Abdiel', notes:{es:'Curador textil Teotitlán o chef Casa Oaxaca alumni que ya hace pop-ups.', en:'Teotitlán textile curator or Casa Oaxaca alumni chef already doing pop-ups.'} },
  /* CO */
  { id:'h-co-1', country:'CO', region:'Medellín', name:'Por identificar · ex-Habitas Antioquia hostess', archetype:'ex-hotelier', instagram:'',
    status:'cold', owner:'Abraham', notes:{es:'Personal Habitas + Casacol que ya tiene rolodex Provenza + Laureles.', en:'Habitas + Casacol staff who already have Provenza + Laureles rolodex.'} },
  { id:'h-co-2', country:'CO', region:'Cartagena', name:'Por identificar · curadora cultural Centro', archetype:'cultural-curator', instagram:'',
    status:'cold', owner:'Abraham', notes:{es:'Casa San Agustín o Sofitel-staff alumna con experiencia eventos privados.', en:'Casa San Agustín or Sofitel alumna with private events experience.'} },
  { id:'h-co-3', country:'CO', region:'Eje Cafetero', name:'Por identificar · barista boutique Salento', archetype:'coffee-host', instagram:'',
    status:'cold', owner:'Abdiel', notes:{es:'Cruz red Pedro Echavarría / Pergamino para alumni Salento.', en:'Cross Pedro Echavarría / Pergamino network for Salento alumni.'} },

  /* BR */
  { id:'h-br-1', country:'BR', region:'Trancoso', name:'Por identificar · ex-UXUA staff', archetype:'ex-hotelier', instagram:'',
    status:'cold', owner:'Abraham', notes:{es:'Personal UXUA alumni que viven Trancoso year-round. Pocos pero existen.', en:'UXUA alumni who live Trancoso year-round. Few but exist.'} },
  { id:'h-br-2', country:'BR', region:'Rio de Janeiro', name:'Por identificar · Janeiro Hotel concierge alumni', archetype:'ex-hotelier', instagram:'',
    status:'cold', owner:'Abdiel', notes:{es:'Janeiro o Belmond Copacabana staff con red samba + cultura RJ.', en:'Janeiro or Belmond Copacabana staff with samba + RJ culture network.'} },

  /* AR */
  { id:'h-ar-1', country:'AR', region:'Buenos Aires', name:'Por identificar · Don Julio sommelier alumni', archetype:'culinary-host', instagram:'',
    status:'cold', owner:'Abraham', notes:{es:'Pablo Rivero conexión — alumno sommelier que organiza cenas privadas.', en:'Pablo Rivero connection — sommelier alumnus organizing private dinners.'} },
  { id:'h-ar-2', country:'AR', region:'Mendoza', name:'Por identificar · The Vines / Catena alumni', archetype:'wine-host', instagram:'',
    status:'cold', owner:'Abraham', notes:{es:'Personal The Vines Resort que conoce los winemakers indie.', en:'The Vines Resort staff who know indie winemakers.'} },

  /* CR */
  { id:'h-cr-1', country:'CR', region:'Nosara', name:'Por identificar · Bodhi Tree staff alumni', archetype:'wellness-host', instagram:'',
    status:'cold', owner:'Abdiel', notes:{es:'Helena Lara puede referir. Ex-Bodhi yoga teacher con base Guiones year-round.', en:'Helena Lara can refer. Ex-Bodhi yoga teacher with year-round Guiones base.'} },

  /* PE */
  { id:'h-pe-1', country:'PE', region:'Lima', name:'Por identificar · Central / Maido sommelier alumni', archetype:'culinary-host', instagram:'',
    status:'cold', owner:'Abraham', notes:{es:'Vía Pia León / Mitsuharu Tsumura — alumno con experiencia tasting menus.', en:'Via Pia León / Mitsuharu Tsumura — alumnus with tasting menu experience.'} },
  { id:'h-pe-2', country:'PE', region:'Cusco', name:'Por identificar · guía arqueólogo independiente', archetype:'cultural-curator', instagram:'',
    status:'cold', owner:'Abdiel', notes:{es:'Belmond Río Sagrado staff o guías Camino Inca independientes.', en:'Belmond Río Sagrado staff or independent Inca Trail guides.'} },

  /* UY */
  { id:'h-uy-1', country:'UY', region:'José Ignacio', name:'Por identificar · Vik staff alumni Dec-Mar full / off-season part-time', archetype:'ex-hotelier', instagram:'',
    status:'cold', owner:'Abraham', notes:{es:'Carrie Vik puede referir. Mejor candidato: alguien que vive Maldonado year-round.', en:'Carrie Vik can refer. Best candidate: someone living Maldonado year-round.'} },

  /* PA · already partnered */
  { id:'h-pa-abraham', country:'PA', region:'Boquete + Bocas', name:'Abraham (founder)', archetype:'founder-host', instagram:'@abrahameeid',
    status:'active', owner:'Self', notes:{es:'Origen Sora. Cubre PA full hasta scale.', en:'Sora origin. Covers PA full until scale.'} },

  /* VE */
  { id:'h-ve-1', country:'VE', region:'Caracas', name:'Por identificar · Alto Restaurant staff alumni', archetype:'culinary-host', instagram:'',
    status:'cold', owner:'Abraham', notes:{es:'Carlos García puede referir ex-staff Alto con experiencia private events.', en:'Carlos García can refer ex-Alto staff with private events experience.'} },

  /* High-trust referrals */
  { id:'h-global-1', country:'CO/MX/AR', name:'Felipe Romero', archetype:'photographer-host', instagram:'@feliperomero',
    region:'Multi', status:'partnered', owner:'Abraham', notes:{es:'Brand photographer. Red en CDMX + Tulum + ya viajó BA.', en:'Brand photographer. Network CDMX + Tulum + has traveled BA.'} }
]

};
