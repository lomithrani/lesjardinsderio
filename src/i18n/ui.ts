import type { Locale } from '../config';

type Dict = Record<Locale, any>;

export const nav: Dict = {
  pt: { home: 'Início', rooms: 'Quartos', spa: 'Spa', events: 'Eventos', experiences: 'Experiências', about: 'Sobre nós', gallery: 'Galeria', contact: 'Contato', terms: 'Condições gerais', book: 'Reservar' },
  en: { home: 'Home', rooms: 'Rooms', spa: 'Spa', events: 'Events', experiences: 'Experiences', about: 'About us', gallery: 'Gallery', contact: 'Contact', terms: 'Terms & conditions', book: 'Book now' },
  fr: { home: 'Accueil', rooms: 'Chambres', spa: 'Spa', events: 'Événements', experiences: 'Expériences', about: 'À propos de nous', gallery: 'Galerie', contact: 'Contact', terms: 'Conditions générales', book: 'Réserver' },
};

export const common: Dict = {
  pt: {
    discover: 'Descobrir', learnMore: 'Saiba mais', checkAvailability: 'Ver disponibilidade',
    requestQuote: 'Pedir orçamento', writeWhatsApp: 'Falar no WhatsApp', sendEmail: 'Enviar e-mail',
    upTo: 'até', guests: 'convidados', seated: 'sentados', sqm: 'm²',
    footerTagline: 'Natureza & arte no coração do Rio de Janeiro.',
    footerNote: 'Casa de hóspedes & espaço de eventos — Cosme Velho, Rio de Janeiro.',
    rights: 'Todos os direitos reservados.',
    contactUs: 'Fale conosco',
    emailMenuHint: 'Escrever com', emailDefault: 'E-mail',
    emailCopy: 'Copiar endereço', emailCopied: 'Endereço copiado!',
  },
  en: {
    discover: 'Discover', learnMore: 'Learn more', checkAvailability: 'Check availability',
    requestQuote: 'Request a quote', writeWhatsApp: 'Chat on WhatsApp', sendEmail: 'Send an email',
    upTo: 'up to', guests: 'guests', seated: 'seated', sqm: 'sqm',
    footerTagline: 'Nature & art in the heart of Rio de Janeiro.',
    footerNote: 'Guest house & event venue — Cosme Velho, Rio de Janeiro.',
    rights: 'All rights reserved.',
    contactUs: 'Contact us',
    emailMenuHint: 'Compose with', emailDefault: 'E-mail',
    emailCopy: 'Copy address', emailCopied: 'Address copied!',
  },
  fr: {
    discover: 'Découvrir', learnMore: 'En savoir plus', checkAvailability: 'Voir les disponibilités',
    requestQuote: 'Demander un devis', writeWhatsApp: 'Écrire sur WhatsApp', sendEmail: 'Envoyer un e-mail',
    upTo: "jusqu'à", guests: 'invités', seated: 'assis', sqm: 'm²',
    footerTagline: "Nature & art au cœur de Rio de Janeiro.",
    footerNote: "Maison d'hôtes & lieu d'événements — Cosme Velho, Rio de Janeiro.",
    rights: 'Tous droits réservés.',
    contactUs: 'Nous contacter',
    emailMenuHint: 'Écrire avec', emailDefault: 'E-mail',
    emailCopy: "Copier l'adresse", emailCopied: 'Adresse copiée !',
  },
};

export const home: Dict = {
  pt: {
    metaTitle: 'Les Jardins de Rio — Casa de hóspedes & eventos no Cosme Velho, Rio',
    metaDesc: 'Uma casa mágica e sofisticada, única no Rio de Janeiro. 8 suítes, piscina, jardim tropical e espaços para casamentos e eventos aos pés do Corcovado.',
    heroEyebrow: 'Cosme Velho · Rio de Janeiro',
    heroTitle: 'Uma casa mágica e sofisticada, única no Rio de Janeiro.',
    heroSub: 'Onde acontece a união entre a natureza e a arte, aos pés do Cristo Redentor.',
    heroCtaRooms: 'Nossos quartos',
    introEyebrow: 'A casa',
    introTitle: 'Brancos luminosos, curvas sensuais, madeiras raras.',
    introText1: 'Construída nos anos 70 e assinada pelo arquiteto Roberto Bastos Cruz, parceiro do célebre Oscar Niemeyer, a casa gera harmonia entre natureza e arquitetura, com decoração franco-brasileira.',
    introText2: 'É um lugar artístico e inspirador, na confluência da natureza e da cultura, onde, entre outros, Chico Buarque e Maria Bethânia cantaram. Um terreno de 5.000 m², uma casa de 1.400 m², inteiramente restaurados em 2013.',
    spacesEyebrow: 'Os espaços',
    spacesTitle: 'Composição dos espaços',
    spacesIntro: 'Plantas tropicais que crescem ao som do canto dos pássaros: a música de fundo perfeita para a piscina cristalina e um rooftop iluminado pelo pôr-do-sol.',
    roomsEyebrow: 'Hospedagem',
    roomsTitle: 'Oito suítes, cada uma com sua personalidade',
    roomsText: 'Da Suíte Presidencial de 80 m² com três terraços privativos às suítes deluxe com vista para a piscina, cada quarto combina conforto e arte de viver.',
    roomsCta: 'Ver todos os quartos',
    eventsEyebrow: 'Eventos',
    eventsTitle: 'Casamentos abençoados pela beleza brasileira',
    eventsText: 'Casamentos, coquetéis, seminários, filmagens, festivais — a casa inteira pode ser privatizada para celebrações de até 500 convidados.',
    eventsCta: 'Organizar um evento',
    locationEyebrow: 'Localização',
    locationTitle: 'Aos pés do Corcovado',
    locationText: 'No bairro residencial do Cosme Velho, ao lado da Fundação Roberto Marinho, a poucos minutos de Laranjeiras e das praias da Zona Sul. Dos terraços, vistas que revelam a cidade maravilhosa.',
    locationCta: 'Ver no mapa',
  },
  en: {
    metaTitle: 'Les Jardins de Rio — Guest house & events in Cosme Velho, Rio',
    metaDesc: 'A magical and sophisticated house, unique in Rio de Janeiro. 8 suites, pool, tropical garden and event spaces at the foot of Corcovado.',
    heroEyebrow: 'Cosme Velho · Rio de Janeiro',
    heroTitle: 'A magical and sophisticated house, unique in Rio de Janeiro.',
    heroSub: 'Where nature meets art, under the open arms of Christ the Redeemer.',
    heroCtaRooms: 'Our rooms',
    introEyebrow: 'The house',
    introTitle: 'Luminous whites, sensual curves, rare woods.',
    introText1: 'Built in the 70s and designed by architect Roberto Bastos Cruz, a colleague of the famous Oscar Niemeyer, the house blends nature with architecture, enhanced by Franco-Brazilian decoration.',
    introText2: 'An inspiring, artistic place at the confluence of nature and culture, where Chico Buarque and Maria Bethânia, among others, enjoyed playing. 5,000 sqm of land, a 1,400 sqm house, entirely restored in 2013.',
    spacesEyebrow: 'The spaces',
    spacesTitle: 'Various configurations',
    spacesIntro: 'Tropical plants that flourish to the sound of birds — the perfect background music for the crystal-clear pool and a rooftop lit by the sunset.',
    roomsEyebrow: 'Stay',
    roomsTitle: 'Eight suites, each with its own personality',
    roomsText: 'From the 80 sqm Presidential Suite with three private terraces to the deluxe suites overlooking the pool, every room combines comfort with art de vivre.',
    roomsCta: 'See all rooms',
    eventsEyebrow: 'Events',
    eventsTitle: 'Weddings blessed by Brazilian beauty',
    eventsText: 'Weddings, cocktail parties, seminars, film shoots, festivals — the entire house can be privatized for celebrations of up to 500 guests.',
    eventsCta: 'Plan an event',
    locationEyebrow: 'Location',
    locationTitle: 'At the foot of Corcovado',
    locationText: 'In the residential Cosme Velho district, next to the Roberto Marinho Foundation, minutes from Laranjeiras and the Zona Sul beaches. From the terraces, views that reveal the marvelous city.',
    locationCta: 'View on the map',
  },
  fr: {
    metaTitle: "Les Jardins de Rio — Maison d'hôtes & événements à Cosme Velho, Rio",
    metaDesc: "Une maison magique et sophistiquée, unique à Rio de Janeiro. 8 suites, piscine, jardin tropical et espaces événementiels au pied du Corcovado.",
    heroEyebrow: 'Cosme Velho · Rio de Janeiro',
    heroTitle: 'Une maison magique et sophistiquée, unique à Rio de Janeiro.',
    heroSub: "Là où s'opère la magie de l'union entre la nature et l'art, au pied du Christ Rédempteur.",
    heroCtaRooms: 'Nos chambres',
    introEyebrow: 'La maison',
    introTitle: 'Des blancs lumineux, des courbes sensuelles, des bois rares.',
    introText1: "Construite dans les années 70 et signée par l'architecte Roberto Bastos Cruz, partenaire du célèbre Oscar Niemeyer, la maison crée une harmonie entre nature et architecture, portée par une décoration franco-brésilienne.",
    introText2: "Un lieu artistique et inspirant, au confluent de la nature et de la culture, où ont chanté, entre autres, Chico Buarque et Maria Bethânia. Un terrain de 5 000 m², une maison de 1 400 m², entièrement restaurés en 2013.",
    spacesEyebrow: 'Les espaces',
    spacesTitle: 'Composition des espaces',
    spacesIntro: "Des plantes tropicales qui poussent au son du chant des oiseaux : une musique d'ambiance parfaite pour profiter de la piscine cristalline et d'un rooftop illuminé par le coucher du soleil.",
    roomsEyebrow: 'Séjourner',
    roomsTitle: 'Huit suites, chacune avec sa personnalité',
    roomsText: 'De la Suite Présidentielle de 80 m² aux trois terrasses privées aux suites deluxe avec vue sur la piscine, chaque chambre allie confort et art de vivre.',
    roomsCta: 'Voir toutes les chambres',
    eventsEyebrow: 'Événements',
    eventsTitle: 'Des mariages bénis par la beauté brésilienne',
    eventsText: "Mariages, cocktails, séminaires, tournages, festivals — la maison entière peut être privatisée pour des célébrations jusqu'à 500 invités.",
    eventsCta: 'Organiser un événement',
    locationEyebrow: 'Localisation',
    locationTitle: 'Au pied du Corcovado',
    locationText: "Dans le quartier résidentiel de Cosme Velho, à côté de la Fondation Roberto Marinho, à quelques minutes de Laranjeiras et des plages de la Zona Sul. Depuis les terrasses, des vues qui révèlent la ville merveilleuse.",
    locationCta: 'Voir sur la carte',
  },
};

export const spaces: Dict = {
  pt: {
    items: [
      { name: 'Lounge principal', desc: 'Salão majestoso de mais de 99 m², com 8 m de altura e teto de vidro que se abre para admirar as estrelas. Jantares sentados de 10 a 100 pessoas.', img: 'photos/salon-large', key: 'lounge' },
      { name: 'Rooftop panorâmico', desc: 'Vista da Baía de Guanabara e do Corcovado. Cerimônias para até 80 pessoas, casamentos ao pôr-do-sol, coquetéis e yoga.', img: 'photos/courbes-ciel', key: 'rooftop' },
      { name: 'Sala Janus', desc: 'Com vista para o jardim interno, a piscina e a Baía de Guanabara. Workshops, conferências, coquetéis e casamentos para até 40 pessoas sentadas.', img: 'photos/salon-angle', key: 'janus' },
      { name: 'Piscina & jardim', desc: 'Piscina de 40 m² rodeada por um jardim tropical, com bar coberto e equipado, pool house e sala de jantar coberta.', img: 'photos/piscine-jardin', key: 'piscine' },
      { name: 'Espaço para eventos', desc: 'Um grande espaço de 650 m² para eventos de até 500 convidados: concertos, festivais e exibições ao ar livre.', img: 'photos/pelouse-jardin', key: 'evenementiel' },
    ],
  },
  en: {
    items: [
      { name: 'Main lounge', desc: 'A majestic lounge of more than 99 sqm with an 8 m ceiling that opens to admire the stars. Seated dinners from 10 to 100 people.', img: 'photos/salon-large', key: 'lounge' },
      { name: 'Panoramic rooftop', desc: 'Views of Guanabara Bay and Corcovado. Ceremonies for up to 80 people, sunset weddings, cocktails and yoga.', img: 'photos/courbes-ciel', key: 'rooftop' },
      { name: 'Janus Room', desc: 'Overlooking the inner garden, the pool and Guanabara Bay. Workshops, conferences, cocktails and weddings for up to 40 seated guests.', img: 'photos/salon-angle', key: 'janus' },
      { name: 'Pool & garden', desc: 'A 40 sqm pool surrounded by a tropical garden, with an equipped covered bar, pool house and covered dining room.', img: 'photos/piscine-jardin', key: 'piscine' },
      { name: 'Large event space', desc: 'A 650 sqm space for events of up to 500 guests: concerts, festivals and outdoor exhibitions.', img: 'photos/pelouse-jardin', key: 'evenementiel' },
    ],
  },
  fr: {
    items: [
      { name: 'Salon principal', desc: "Un hall majestueux de plus de 99 m², haut de 8 m, doté d'un plafond de verre qui s'ouvre sur le ciel. Dîners assis de 10 à 100 personnes.", img: 'photos/salon-large', key: 'lounge' },
      { name: 'Rooftop panoramique', desc: 'Vue sur la baie de Guanabara et le Corcovado. Cérémonies jusqu’à 80 personnes, mariages au coucher du soleil, cocktails et yoga.', img: 'photos/courbes-ciel', key: 'rooftop' },
      { name: 'Salle Janus', desc: 'Donnant sur le jardin intérieur, la piscine et la baie de Guanabara. Ateliers, conférences, cocktails et mariages jusqu’à 40 personnes assises.', img: 'photos/salon-angle', key: 'janus' },
      { name: 'Piscine & jardin', desc: 'Une piscine de 40 m² entourée d’un jardin tropical, avec bar couvert et équipé, pool house et salle à manger couverte.', img: 'photos/piscine-jardin', key: 'piscine' },
      { name: 'Espace événementiel', desc: 'Un grand espace de 650 m² pour des événements jusqu’à 500 invités : concerts, festivals et expositions en plein air.', img: 'photos/pelouse-jardin', key: 'evenementiel' },
    ],
  },
};

export const spa: Dict = {
  pt: {
    metaTitle: 'Spa & Day use — Les Jardins de Rio',
    metaDesc: 'Um spa a céu aberto: massagens e tratamentos sob consulta, relaxamento à beira da piscina cristalina e fórmulas day use no jardim tropical do Cosme Velho.',
    eyebrow: 'Spa & bem-estar',
    title: 'Um spa a céu aberto, no coração do jardim',
    lede: 'Entre a piscina cristalina, o jardim tropical e o canto dos pássaros, o tempo desacelera. Tratamentos, massagens e dias de descanso, a minutos do Corcovado.',
    introTitle: 'Recarregar as energias, em plena natureza',
    introText: 'Longe da agitação da cidade, a casa convida ao descanso: espreguiçadeiras à sombra das palmeiras, água turquesa, terraços envoltos em verde. Nossos tratamentos e massagens são reservados sob consulta, neste cenário de exceção.',
    items: [
      { key: 'soins', img: 'photos/terrasse-coussins', title: 'Tratamentos & massagens', text: 'Massagens e tratamentos corporais sob agendamento, no quarto ou de frente para o jardim, com profissionais parceiros.' },
      { key: 'eau', img: 'photos/piscine-canopee', title: 'Relaxar à beira da água', text: 'Piscina cristalina, espreguiçadeiras e pool bar: uma pausa aquática sob a copa tropical.' },
      { key: 'yoga', img: 'photos/jardin-aerien', title: 'Yoga & holístico', text: 'Sessões de yoga no rooftop e oficinas holísticas, em formatos íntimos, sob consulta.' },
    ],
    dayuseEyebrow: 'Sem se hospedar',
    dayuseTitle: 'Day use',
    dayuseText: 'Aproveite a casa por um dia, sem dormir: acesso à piscina, ao jardim e aos espaços de convivência, com tranquilidade.',
    includes: ['Acesso à piscina e ao jardim tropical', 'Espreguiçadeiras e áreas de descanso', 'Pool bar', 'Sob reserva, conforme disponibilidade'],
    note: 'Preços, tratamentos disponíveis e calendário sob consulta — fale conosco pelo WhatsApp.',
  },
  en: {
    metaTitle: 'Spa & Day use — Les Jardins de Rio',
    metaDesc: 'An open-air spa: massages and treatments on request, relaxation by the crystal-clear pool, and day-use packages in the tropical garden of Cosme Velho.',
    eyebrow: 'Spa & wellness',
    title: 'An open-air spa, in the heart of the garden',
    lede: 'Between the crystal-clear pool, the tropical garden and the song of birds, time slows down. Treatments, massages and relaxing days, minutes from Corcovado.',
    introTitle: 'Recharge, surrounded by nature',
    introText: "Away from the city's bustle, the house naturally invites rest: sunbeds in the shade of palm trees, turquoise water, terraces nestled in greenery. Our treatments and massages are booked on request, in this exceptional setting.",
    items: [
      { key: 'soins', img: 'photos/terrasse-coussins', title: 'Treatments & massages', text: 'Body treatments and massages by appointment, in your room or facing the garden, by partner practitioners.' },
      { key: 'eau', img: 'photos/piscine-canopee', title: 'Relaxation by the water', text: 'Crystal-clear pool, sunbeds and pool bar: an aquatic pause under the tropical canopy.' },
      { key: 'yoga', img: 'photos/jardin-aerien', title: 'Yoga & holistic', text: 'Rooftop yoga sessions and holistic workshops, in intimate formats, on request.' },
    ],
    dayuseEyebrow: 'Without staying over',
    dayuseTitle: 'Day use',
    dayuseText: 'Enjoy the house for a day, without spending the night: access to the pool, the garden and the living spaces, in peace and quiet.',
    includes: ['Access to the pool and tropical garden', 'Sunbeds and relaxation areas', 'Pool bar', 'By reservation, subject to availability'],
    note: 'Prices, available treatments and calendar on request — chat with us on WhatsApp.',
  },
  fr: {
    metaTitle: 'Spa & Day use — Les Jardins de Rio',
    metaDesc: "Un spa à ciel ouvert : massages et soins sur demande, détente au bord de la piscine cristalline et formules day use dans le jardin tropical de Cosme Velho.",
    eyebrow: 'Spa & bien-être',
    title: 'Un spa à ciel ouvert, au cœur du jardin',
    lede: "Entre la piscine cristalline, le jardin tropical et le chant des oiseaux, le temps ralentit. Soins, massages et journées détente, à quelques minutes du Corcovado.",
    introTitle: 'Se ressourcer, les pieds dans la nature',
    introText: "Loin de l'agitation de la ville, la maison se prête naturellement au repos : transats à l'ombre des palmiers, eau turquoise, terrasses lovées dans la verdure. Nos soins et massages se réservent sur demande, dans ce décor d'exception.",
    items: [
      { key: 'soins', img: 'photos/terrasse-coussins', title: 'Soins & massages', text: 'Massages et soins du corps sur réservation, en chambre ou face au jardin, dispensés par des praticiens partenaires.' },
      { key: 'eau', img: 'photos/piscine-canopee', title: "Détente au fil de l'eau", text: 'Piscine cristalline, transats et pool bar : une parenthèse aquatique sous la canopée tropicale.' },
      { key: 'yoga', img: 'photos/jardin-aerien', title: 'Yoga & holistique', text: 'Séances de yoga sur le rooftop et ateliers holistiques, en formats intimes, sur demande.' },
    ],
    dayuseEyebrow: 'Sans séjourner',
    dayuseTitle: 'Day use',
    dayuseText: "Profitez de la maison le temps d'une journée, sans y dormir : accès à la piscine, au jardin et aux espaces de vie, dans le calme.",
    includes: ['Accès à la piscine et au jardin tropical', 'Transats et espaces de détente', 'Pool bar', 'Sur réservation, selon disponibilité'],
    note: 'Tarifs, soins disponibles et calendrier sur demande — écrivez-nous sur WhatsApp.',
  },
};

export const experiences: Dict = {
  pt: {
    metaTitle: 'Experiências — Les Jardins de Rio',
    metaDesc: 'Bar e café da manhã de frente para o jardim, day use à beira da piscina, oficinas e workshops: a arte de viver carioca no Cosme Velho.',
    eyebrow: 'Experiências',
    title: 'A arte de viver, em todas as suas formas',
    items: [
      { key: 'gastronomy', img: 'photos/bar-interieur', title: 'Bar', text: 'Um bar coberto e equipado à beira da piscina, prolongado pelo pool house e por uma sala de jantar coberta. De manhã, o café da manhã é servido de frente para o jardim — frutas tropicais, sucos naturais, waffles e pães frescos, café brasileiro. Ao entardecer, entram os coquetéis do barman e uma seleção de vinhos, noite adentro sob a copa das árvores.' },
      { key: 'dayuse', img: 'photos/jardin-aerien', title: 'Day use', text: 'Um dia inteiro à beira da piscina cristalina, no jardim tropical, ao som dos pássaros. Fórmulas com acesso aos espaços e ao bar.' },
      { key: 'workshops', img: 'photos/terrasse-palmier', title: 'Oficinas & workshops', text: 'Café da manhã-ateliê, yoga no rooftop, oficinas holísticas e criativas: formatos íntimos em um cenário inspirador.' },
    ],
    note: 'Preços e calendário sob consulta — fale conosco pelo WhatsApp.',
  },
  en: {
    metaTitle: 'Experiences — Les Jardins de Rio',
    metaDesc: 'Bar and breakfast facing the garden, poolside day use, workshops: carioca art de vivre in Cosme Velho.',
    eyebrow: 'Experiences',
    title: 'Art de vivre, in all its forms',
    items: [
      { key: 'gastronomy', img: 'photos/bar-interieur', title: 'Bar', text: 'A covered, fully equipped bar by the pool, extended by the pool house and a covered dining room. Mornings begin with breakfast facing the garden — tropical fruit, freshly pressed juices, waffles and warm breads, Brazilian coffee. Come evening, the barman takes over with cocktails and a selection of wines, late into the night under the canopy.' },
      { key: 'dayuse', img: 'photos/jardin-aerien', title: 'Day use', text: 'A full day by the crystal-clear pool, in the tropical garden, to the sound of birds. Packages with access to the spaces and the bar.' },
      { key: 'workshops', img: 'photos/terrasse-palmier', title: 'Workshops', text: 'Breakfast-ateliers, rooftop yoga, holistic and creative workshops: intimate formats in an inspiring setting.' },
    ],
    note: 'Prices and calendar on request — chat with us on WhatsApp.',
  },
  fr: {
    metaTitle: 'Expériences — Les Jardins de Rio',
    metaDesc: "Bar et petit-déjeuner face au jardin, day use au bord de la piscine, ateliers et workshops : l'art de vivre carioca à Cosme Velho.",
    eyebrow: 'Expériences',
    title: "L'art de vivre, sous toutes ses formes",
    items: [
      { key: 'gastronomy', img: 'photos/bar-interieur', title: 'Bar', text: 'Un bar couvert et équipé au bord de la piscine, prolongé par le pool house et une salle à manger couverte. Le matin, le petit-déjeuner se prend face au jardin — fruits tropicaux, jus pressés, gaufres et pains frais, café brésilien. Le soir venu, place aux cocktails du barman et à une sélection de vins, jusque tard sous la canopée.' },
      { key: 'dayuse', img: 'photos/jardin-aerien', title: 'Day use', text: 'Une journée entière au bord de la piscine cristalline, dans le jardin tropical, au chant des oiseaux. Formules avec accès aux espaces et au bar.' },
      { key: 'workshops', img: 'photos/terrasse-palmier', title: 'Ateliers & workshops', text: 'Petit-déjeuner-atelier, yoga sur le rooftop, ateliers holistiques et créatifs : des formats intimes dans un cadre inspirant.' },
    ],
    note: 'Tarifs et calendrier sur demande — écrivez-nous sur WhatsApp.',
  },
};

export const gallery: Dict = {
  pt: { metaTitle: 'Galeria — Les Jardins de Rio', metaDesc: 'A casa, a piscina, os jardins: imagens de Les Jardins de Rio.', eyebrow: 'Galeria', title: 'A casa em imagens' },
  en: { metaTitle: 'Gallery — Les Jardins de Rio', metaDesc: 'The house, the pool, the gardens: images of Les Jardins de Rio.', eyebrow: 'Gallery', title: 'The house in pictures' },
  fr: { metaTitle: 'Galerie — Les Jardins de Rio', metaDesc: 'La maison, la piscine, les jardins : Les Jardins de Rio en images.', eyebrow: 'Galerie', title: 'La maison en images' },
};

export const contact: Dict = {
  pt: {
    metaTitle: 'Contato — Les Jardins de Rio',
    metaDesc: 'Fale conosco pelo WhatsApp, telefone ou e-mail. Rua Cosme Velho, 1342 — Rio de Janeiro.',
    eyebrow: 'Contato',
    title: 'Fale conosco',
    intro: 'Para reservas, eventos ou qualquer pergunta, o WhatsApp é o caminho mais rápido — respondemos todos os dias.',
    whatsappTitle: 'WhatsApp',
    whatsappText: 'A forma mais rápida de falar conosco.',
    emailTitle: 'E-mail',
    phoneTitle: 'Telefone',
    addressTitle: 'Endereço',
    hoursTitle: 'Recepção',
    hours: 'Segunda a domingo · 9h – 17h',
  },
  en: {
    metaTitle: 'Contact — Les Jardins de Rio',
    metaDesc: 'Reach us on WhatsApp, by phone or e-mail. Rua Cosme Velho, 1342 — Rio de Janeiro.',
    eyebrow: 'Contact',
    title: 'Get in touch',
    intro: 'For bookings, events or any question, WhatsApp is the fastest way — we reply every day.',
    whatsappTitle: 'WhatsApp',
    whatsappText: 'The fastest way to reach us.',
    emailTitle: 'E-mail',
    phoneTitle: 'Phone',
    addressTitle: 'Address',
    hoursTitle: 'Concierge hours',
    hours: 'Monday – Sunday · 9am – 5pm',
  },
  fr: {
    metaTitle: 'Contact — Les Jardins de Rio',
    metaDesc: 'Contactez-nous par WhatsApp, téléphone ou e-mail. Rua Cosme Velho, 1342 — Rio de Janeiro.',
    eyebrow: 'Contact',
    title: 'Nous contacter',
    intro: "Pour les réservations, les événements ou toute question, WhatsApp est le moyen le plus rapide — nous répondons tous les jours.",
    whatsappTitle: 'WhatsApp',
    whatsappText: 'Le moyen le plus rapide de nous joindre.',
    emailTitle: 'E-mail',
    phoneTitle: 'Téléphone',
    addressTitle: 'Adresse',
    hoursTitle: 'Réception',
    hours: 'Lundi à dimanche · 9h – 17h',
  },
};

export const roomsPage: Dict = {
  pt: {
    metaTitle: 'Quartos & suítes — Les Jardins de Rio',
    metaDesc: 'Oito suítes únicas entre jardim tropical e arquitetura orgânica: presidenciais, luxury e deluxe.',
    eyebrow: 'Hospedagem',
    title: 'Quartos & suítes',
    intro: 'Oito suítes, cada uma com sua personalidade, entre mármore branco, madeiras raras e jardim tropical.',
    bookNote: 'A reserva é feita pelo nosso sistema seguro NoBeds.',
    termsLink: 'Ver as condições de cancelamento',
  },
  en: {
    metaTitle: 'Rooms & suites — Les Jardins de Rio',
    metaDesc: 'Eight unique suites amid the tropical garden and organic architecture: presidential, luxury and deluxe.',
    eyebrow: 'Stay',
    title: 'Rooms & suites',
    intro: 'Eight suites, each with its own personality, amid white marble, rare woods and the tropical garden.',
    bookNote: 'Bookings are handled through our secure NoBeds system.',
    termsLink: 'See our cancellation policy',
  },
  fr: {
    metaTitle: 'Chambres & suites — Les Jardins de Rio',
    metaDesc: 'Huit suites uniques entre jardin tropical et architecture organique : présidentielles, luxury et deluxe.',
    eyebrow: 'Séjourner',
    title: 'Chambres & suites',
    intro: 'Huit suites, chacune avec sa personnalité, entre marbre blanc, bois rares et jardin tropical.',
    bookNote: 'La réservation passe par notre système sécurisé NoBeds.',
    termsLink: 'Voir nos conditions d’annulation',
  },
};

// Conditions générales de vente — la politique d'annulation de la maison.
//
// Le texte de référence est l'anglais : c'est la version fournie par la cliente,
// reprise ici mot pour mot. Le portugais et le français en sont la traduction
// fidèle, sans ajout ni omission — sur une page contractuelle, une nuance
// introduite par la traduction crée une divergence entre les trois versions,
// toutes également opposables au client qui a réservé dans SA langue.
//
// ⛑ Toute modification de la politique doit être répercutée dans les TROIS
// langues d'un seul tenant, et alignée sur ce qui est réellement paramétré dans
// le moteur de réservation (NoBeds) et sur les plateformes (Booking, Expedia…) :
// c'est la politique affichée au moment de la réservation qui fait foi.
export const terms: Dict = {
  pt: {
    metaTitle: 'Condições gerais de venda — Les Jardins de Rio',
    metaDesc: 'Política de cancelamento de Les Jardins de Rio: tarifa flexível, tarifa não reembolsável, datas especiais, alterações de reserva e erros de preço.',
    eyebrow: 'Informações legais',
    title: 'Condições gerais de venda',
    intro: 'As condições abaixo se aplicam às reservas de hospedagem em Les Jardins de Rio.',
    policyTitle: 'Política de cancelamento',
    sections: [
      {
        title: 'Tarifa flexível',
        paragraphs: [
          'Os hóspedes podem cancelar a reserva gratuitamente até 21 dias antes da data prevista de chegada.',
          'Para cancelamentos feitos com menos de 21 dias de antecedência em relação à chegada, será cobrado 100% do valor total da reserva.',
          'Em caso de não comparecimento (no-show) ou de saída antecipada, será cobrado 100% do valor restante da reserva.',
        ],
      },
      {
        title: 'Tarifa não reembolsável',
        paragraphs: [
          'As reservas feitas sob tarifa não reembolsável são integralmente pré-pagas e não podem ser canceladas, alteradas ou reembolsadas, salvo quando a legislação aplicável dispuser de outra forma.',
        ],
      },
      {
        title: 'Datas especiais & períodos de alta demanda',
        paragraphs: [
          'Para o Réveillon, o Carnaval e outros períodos de alta demanda ou eventos especiais assim designados, podem ser aplicadas condições específicas de cancelamento e de pagamento.',
          'Essas condições são exibidas com clareza no momento da reserva e passam a fazer parte dela.',
        ],
      },
      {
        title: 'Alterações na reserva',
        paragraphs: [
          'Qualquer pedido de alteração de datas, categoria de quarto ou número de hóspedes está sujeito à disponibilidade e pode implicar mudança de tarifa e/ou das condições de cancelamento.',
          'As alterações só são confirmadas depois de aceitas por Les Jardins de Rio ou pela plataforma de reserva.',
        ],
      },
      {
        title: 'Erros de preço',
        paragraphs: [
          'Em caso de erro de preço manifesto e substancial, inclusive erro técnico ou de sistema evidente que resulte em uma tarifa substancialmente inferior à tarifa aplicável, Les Jardins de Rio reserva-se o direito de entrar em contato com o hóspede prontamente para esclarecer a situação.',
          'Quando permitido pela legislação aplicável, o hotel poderá oferecer ao hóspede a possibilidade de manter a reserva pela tarifa correta. Caso a reserva não possa ser razoavelmente honrada pela tarifa equivocada, o hotel poderá cancelá-la e reembolsar integralmente os valores já pagos.',
          'Esta disposição não se aplica a tarifas promocionais, descontos ou ofertas especiais genuínos, publicados intencionalmente por Les Jardins de Rio.',
        ],
      },
      {
        title: 'Condições gerais',
        paragraphs: [
          'A política de cancelamento aplicável a uma reserva é aquela exibida e aceita pelo hóspede no momento da reserva.',
          'Nada nesta política pretende excluir ou limitar os direitos assegurados aos consumidores pela legislação brasileira aplicável.',
        ],
      },
    ],
    contactTitle: 'Dúvidas sobre a sua reserva?',
    contactText: 'Fale conosco pelo WhatsApp ou por e-mail — respondemos todos os dias.',
  },
  en: {
    metaTitle: 'Terms & conditions — Les Jardins de Rio',
    metaDesc: 'Cancellation policy of Les Jardins de Rio: flexible rate, non-refundable rate, special dates, changes to a reservation and pricing errors.',
    eyebrow: 'Legal information',
    title: 'Terms & conditions of sale',
    intro: 'The conditions below apply to stay reservations at Les Jardins de Rio.',
    policyTitle: 'Cancellation policy',
    sections: [
      {
        title: 'Flexible Rate',
        paragraphs: [
          'Guests may cancel their reservation free of charge up to 21 days before the scheduled arrival date.',
          'For cancellations made less than 21 days before arrival, 100% of the total reservation amount will be charged.',
          'In case of no-show or early departure, 100% of the remaining reservation amount will be charged.',
        ],
      },
      {
        title: 'Non-Refundable Rate',
        paragraphs: [
          'Reservations booked under a Non-Refundable Rate are fully prepaid and cannot be cancelled, modified or refunded, except where otherwise required by applicable law.',
        ],
      },
      {
        title: 'Special Dates & High-Demand Periods',
        paragraphs: [
          "For New Year's Eve, Carnival and other designated high-demand periods or special events, specific cancellation and payment conditions may apply.",
          'These conditions will be clearly displayed at the time of booking and will form part of the reservation.',
        ],
      },
      {
        title: 'Changes to a Reservation',
        paragraphs: [
          'Any request to change the dates, room category or number of guests is subject to availability and may result in a change of rate and/or cancellation conditions.',
          'Changes are only confirmed once accepted by Les Jardins de Rio or by the booking platform.',
        ],
      },
      {
        title: 'Pricing Errors',
        paragraphs: [
          'In the event of a manifest and substantial pricing error, including an obvious technical or system error resulting in a rate substantially below the applicable rate, Les Jardins de Rio reserves the right to contact the guest promptly to clarify the situation.',
          'Where permitted by applicable law, the hotel may offer the guest the possibility of maintaining the reservation at the correct rate. If the reservation cannot reasonably be honoured at the erroneous rate, the hotel may cancel the reservation and provide a full refund of any amount already paid.',
          'This provision does not apply to genuine promotional rates, discounts or special offers intentionally published by Les Jardins de Rio.',
        ],
      },
      {
        title: 'General Conditions',
        paragraphs: [
          'The cancellation policy applicable to a reservation is the policy displayed and accepted by the guest at the time of booking.',
          'Nothing in this policy is intended to exclude or limit any mandatory rights granted to consumers under applicable Brazilian law.',
        ],
      },
    ],
    contactTitle: 'A question about your booking?',
    contactText: 'Reach us on WhatsApp or by e-mail — we reply every day.',
  },
  fr: {
    metaTitle: 'Conditions générales de vente — Les Jardins de Rio',
    metaDesc: "Politique d’annulation des Jardins de Rio : tarif flexible, tarif non remboursable, dates spéciales, modification de réservation et erreurs de tarif.",
    eyebrow: 'Informations légales',
    title: 'Conditions générales de vente',
    intro: 'Les conditions ci-dessous s’appliquent aux réservations de séjour aux Jardins de Rio.',
    policyTitle: "Politique d’annulation",
    sections: [
      {
        title: 'Tarif flexible',
        paragraphs: [
          "Les clients peuvent annuler leur réservation sans frais jusqu’à 21 jours avant la date d’arrivée prévue.",
          "Pour toute annulation intervenant moins de 21 jours avant l’arrivée, 100 % du montant total de la réservation sera facturé.",
          'En cas de non-présentation (no-show) ou de départ anticipé, 100 % du montant restant de la réservation sera facturé.',
        ],
      },
      {
        title: 'Tarif non remboursable',
        paragraphs: [
          'Les réservations effectuées sous un tarif non remboursable sont intégralement prépayées et ne peuvent être ni annulées, ni modifiées, ni remboursées, sauf disposition contraire de la loi applicable.',
        ],
      },
      {
        title: 'Dates spéciales & périodes de forte demande',
        paragraphs: [
          "Pour le réveillon du Nouvel An, le Carnaval et les autres périodes de forte demande ou événements spéciaux désignés comme tels, des conditions d’annulation et de paiement spécifiques peuvent s’appliquer.",
          'Ces conditions sont clairement affichées au moment de la réservation et font partie intégrante de celle-ci.',
        ],
      },
      {
        title: "Modification d’une réservation",
        paragraphs: [
          "Toute demande de modification des dates, de la catégorie de chambre ou du nombre de personnes est soumise à disponibilité et peut entraîner un changement de tarif et/ou de conditions d’annulation.",
          'Les modifications ne sont confirmées qu’une fois acceptées par Les Jardins de Rio ou par la plateforme de réservation.',
        ],
      },
      {
        title: 'Erreurs de tarif',
        paragraphs: [
          "En cas d’erreur de tarif manifeste et substantielle, y compris une erreur technique ou système évidente aboutissant à un tarif nettement inférieur au tarif applicable, Les Jardins de Rio se réserve le droit de contacter rapidement le client afin de clarifier la situation.",
          "Dans les limites autorisées par la loi applicable, l’établissement peut proposer au client de maintenir la réservation au tarif correct. Si la réservation ne peut raisonnablement être honorée au tarif erroné, l’établissement peut l’annuler et rembourser intégralement les sommes déjà versées.",
          'Cette disposition ne s’applique pas aux véritables tarifs promotionnels, remises ou offres spéciales publiés intentionnellement par Les Jardins de Rio.',
        ],
      },
      {
        title: 'Conditions générales',
        paragraphs: [
          "La politique d’annulation applicable à une réservation est celle affichée et acceptée par le client au moment de la réservation.",
          'Aucune disposition de la présente politique n’a pour objet d’exclure ou de limiter les droits impératifs reconnus aux consommateurs par la loi brésilienne applicable.',
        ],
      },
    ],
    contactTitle: 'Une question sur votre réservation ?',
    contactText: 'Écrivez-nous sur WhatsApp ou par e-mail — nous répondons tous les jours.',
  },
};

// Bandeau cookies (mesure d'audience GA4). RGPD : le refus doit être aussi
// simple que l'acceptation, et le choix révocable à tout moment — d'où le lien
// « Cookies » du pied de page qui rouvre le bandeau.
//
// Rédaction volontairement prudente : on ne parle PAS de données « anonymes »
// (GA4 rattache la visite à un identifiant pseudonyme, ce qui reste une donnée
// personnelle au sens du RGPD), on nomme le destinataire (Google) et le transfert
// possible hors UE, et on n'affirme sur la publicité que ce que la configuration
// garantit réellement (signaux publicitaires en « denied » en dur, cf. Base.astro).
// Page 404. Servie par GitHub Pages à la racine du domaine pour toute URL
// inconnue, donc rendue dans les trois langues d'un coup (cf. src/pages/404.astro).
export const notFound: Dict = {
  pt: {
    title: 'Esta página não existe',
    text: 'O endereço está errado, ou a página mudou de lugar. Os jardins, esses, continuam no mesmo sítio.',
    home: 'Voltar ao início',
    elsewhere: 'Ou continue a visita :',
  },
  en: {
    title: 'This page does not exist',
    text: 'The address is wrong, or the page has moved. The gardens, however, are exactly where you left them.',
    home: 'Back to home',
    elsewhere: 'Or carry on with the visit:',
  },
  fr: {
    title: "Cette page n'existe pas",
    text: "L'adresse est erronée, ou la page a changé de place. Les jardins, eux, n'ont pas bougé.",
    home: "Retour à l'accueil",
    elsewhere: 'Ou poursuivez la visite :',
  },
};

export const cookies: Dict = {
  pt: {
    title: 'Cookies e privacidade',
    text: 'Usamos cookies de medição de audiência (Google Analytics) para entender como o site é consultado. Nenhum cookie é depositado sem o seu consentimento.',
    accept: 'Aceitar',
    decline: 'Recusar',
    more: 'Saiba mais',
    details:
      'Se você aceitar, cookies de medição são depositados no seu aparelho e o Google Analytics 4 registra sua navegação: páginas vistas, página de origem, idioma, país e cidade aproximados, tipo de aparelho e navegador. Esses dados ficam vinculados a um identificador aleatório e nunca ao seu nome — não conseguimos identificar você, mas eles também não são totalmente anônimos. São tratados por nossa conta pelo Google, que pode hospedá-los fora do Brasil e da União Europeia, e são conservados por 14 meses antes de serem excluídos. Os cookies de medição expiram em no máximo 13 meses, e o identificador de visitante não é prorrogado a cada passagem. Os sinais publicitários do Google estão desativados: esses dados não servem para segmentação de anúncios e não os repassamos a mais ninguém. Se você recusar, nenhum cookie é depositado e nenhum dado é enviado. Sua escolha fica registrada no seu navegador por 6 meses; você pode mudá-la a qualquer momento pelo link “Cookies” no rodapé.',
    policy: 'Política de privacidade do Google',
    manage: 'Cookies',
  },
  en: {
    title: 'Cookies & privacy',
    text: 'We use audience measurement cookies (Google Analytics) to understand how the site is used. No cookie is stored without your consent.',
    accept: 'Accept',
    decline: 'Decline',
    more: 'Learn more',
    details:
      'If you accept, measurement cookies are stored on your device and Google Analytics 4 records your visit: pages viewed, referring page, language, approximate country and city, device type and browser. This data is tied to a random identifier and never to your name — we cannot identify you from it, but it is not fully anonymous either. It is processed on our behalf by Google, which may host it outside the European Union, and is kept for 14 months before being deleted. The measurement cookies expire after no more than 13 months, and the visitor identifier is not extended on each visit. Google’s advertising signals are switched off: this data is not used for ad targeting, and we pass it on to no one else. If you decline, no cookie is stored and no data is sent. Your choice is kept in your browser for 6 months; you can change it at any time via the “Cookies” link in the footer.',
    policy: 'Google’s privacy policy',
    manage: 'Cookies',
  },
  fr: {
    title: 'Cookies & confidentialité',
    text: "Nous utilisons des cookies de mesure d'audience (Google Analytics) pour comprendre comment le site est consulté. Aucun cookie n'est déposé sans votre accord.",
    accept: 'Accepter',
    decline: 'Refuser',
    more: 'En savoir plus',
    details:
      "Si vous acceptez, des cookies de mesure sont déposés sur votre appareil et Google Analytics 4 enregistre votre navigation : pages consultées, page d'origine, langue, pays et ville approximatifs, type d'appareil et navigateur. Ces données sont rattachées à un identifiant aléatoire et jamais à votre nom — nous ne pouvons pas vous identifier, mais elles ne sont pas pour autant totalement anonymes. Elles sont traitées pour notre compte par Google, qui peut les héberger hors de l'Union européenne, et sont conservées 14 mois avant d'être supprimées. Les cookies de mesure expirent au bout de 13 mois au plus, et l'identifiant de visiteur n'est pas prolongé à chaque passage. Les signaux publicitaires de Google sont désactivés : ces données ne servent pas au ciblage publicitaire et nous ne les cédons à personne d'autre. Si vous refusez, aucun cookie n'est déposé et aucune donnée n'est envoyée. Votre choix est enregistré dans votre navigateur pendant 6 mois ; vous pouvez en changer à tout moment via le lien « Cookies » en bas de page.",
    policy: 'Politique de confidentialité de Google',
    manage: 'Cookies',
  },
};
