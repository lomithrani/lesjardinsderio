import type { Locale } from '../config';

type Dict = Record<Locale, any>;

// Textes de la page Événements. Sortis de ui.ts (53 Ko) : ce contenu est celui
// que le client fait le plus évoluer, et le MCP GitHub ne pousse que des
// fichiers entiers — un fichier dédié rend chaque itération peu coûteuse.
export const events: Dict = {
  pt: {
    metaTitle: 'Eventos & casamentos — Les Jardins de Rio',
    metaDesc: 'Casamentos, coquetéis, seminários, filmagens e festivais no Cosme Velho. Privatização completa da casa para até 500 convidados.',
    eyebrow: 'Eventos & celebrações',
    title: 'Crie o seu evento sob medida',
    venueTitle: 'Um lugar único para os seus eventos no Rio',
    venue: [
      'Aos pés do Corcovado, Les Jardins de Rio oferecem um cenário único para os seus eventos no Rio de Janeiro. Uma casa modernista rodeada de jardins tropicais, onde arquitetura, natureza e arte se encontram.',
      'Aproveite diferentes espaços para imaginar o seu evento: jardim, piscina, salão, rooftop com vista para o Cristo Redentor. Os espaços se adaptam a cada ocasião, da celebração intimista à grande recepção.',
    ],
    celebrateTitle: 'Celebre os seus momentos no Rio',
    celebrate: [
      'Casamento, aniversário, jantar privativo, coquetel, seminário ou evento corporativo: Les Jardins de Rio se adaptam aos seus desejos.',
      'A casa pode ser inteiramente privatizada para o seu evento. Você também pode aproveitar as nossas oito suítes para prolongar a experiência no local.',
    ],
    servicesTitle: 'Para os seus eventos no Rio de Janeiro',
    servicesIntro: 'Acompanhamos você na organização do seu evento privado ou corporativo no Rio de Janeiro, com serviços adaptados aos seus desejos e ao formato da sua recepção.',
    services: [
      { title: 'Buffet & gastronomia', text: 'almoço, jantar privativo, coquetel ou recepção sob medida.' },
      { title: 'Bar & coquetéis', text: 'barman, coquetéis autorais, champanhe e open bar.' },
      { title: 'Música & animação', text: 'DJ, bandas ao vivo e músicos para criar o clima do seu evento.' },
      { title: 'Arte & projeções', text: 'instalações artísticas, projeções e cenografia.' },
      { title: 'Decoração & cenografia', text: 'flores, mobiliário, iluminação e decoração personalizada.' },
      { title: 'Organização sob medida', text: 'coordenação dos fornecedores e acompanhamento na preparação do seu evento.' },
    ],
    servicesClosing: 'Cada detalhe é pensado para criar uma recepção elegante e personalizada, em harmonia com o espírito de Les Jardins de Rio.',
    ctaTitle: 'Conte-nos sobre o seu evento',
    ctaText: 'Data, número de convidados, tipo de evento: escreva-nos e responderemos com uma proposta.',
  },
  en: {
    metaTitle: 'Events & weddings — Les Jardins de Rio',
    metaDesc: 'Weddings, cocktail parties, seminars, film shoots and festivals in Cosme Velho. Full privatization of the house for up to 500 guests.',
    eyebrow: 'Events & celebrations',
    title: 'Create your bespoke event',
    venueTitle: 'A unique setting for your events in Rio',
    venue: [
      'At the foot of Corcovado, Les Jardins de Rio offers a unique setting for your events in Rio de Janeiro. A modernist house surrounded by tropical gardens, where architecture, nature and art meet.',
      'Make the most of a variety of spaces to imagine your event: garden, pool, lounge, rooftop with a view of Christ the Redeemer. Each space adapts to the occasion, from an intimate celebration to a large reception.',
    ],
    celebrateTitle: 'Celebrate your moments in Rio',
    celebrate: [
      'Wedding, birthday, private dinner, cocktail party, seminar or corporate event: Les Jardins de Rio adapts to your wishes.',
      'The house can be fully privatized for your event. You can also enjoy our eight suites to extend the experience on site.',
    ],
    servicesTitle: 'For your events in Rio de Janeiro',
    servicesIntro: 'We support you in organising your private or corporate event in Rio de Janeiro, with services tailored to your wishes and to the format of your reception.',
    services: [
      { title: 'Catering & gastronomy', text: 'lunch, private dinner, cocktail party or bespoke reception.' },
      { title: 'Bar & cocktails', text: 'barman, signature cocktails, champagne and open bar.' },
      { title: 'Music & entertainment', text: 'DJs, live bands and musicians to set the mood of your event.' },
      { title: 'Art & projections', text: 'art installations, video projections and scenography.' },
      { title: 'Decoration & staging', text: 'flowers, furniture, lighting and personalized decoration.' },
      { title: 'Bespoke planning', text: 'coordination of suppliers and support throughout the preparation of your event.' },
    ],
    servicesClosing: 'Every detail is designed to create an elegant, personalized reception, in harmony with the spirit of Les Jardins de Rio.',
    ctaTitle: 'Tell us about your event',
    ctaText: 'Date, number of guests, type of event: write to us and we will reply with a proposal.',
  },
  fr: {
    metaTitle: 'Événements & mariages — Les Jardins de Rio',
    metaDesc: 'Mariages, cocktails, séminaires, tournages et festivals à Cosme Velho. Privatisation complète de la maison jusqu’à 500 invités.',
    eyebrow: 'Événements & célébrations',
    title: 'Créer votre événement sur mesure',
    venueTitle: 'Un lieu unique pour vos événements à Rio',
    venue: [
      "Au pied du Corcovado, Les Jardins de Rio offrent un cadre unique pour vos événements à Rio de Janeiro. Une maison moderniste entourée de jardins tropicaux, où architecture, nature et art se rencontrent.",
      'Profitez de différents espaces pour imaginer votre événement : jardin, piscine, salon, rooftop avec vue sur le Christ Rédempteur. Les espaces s’adaptent à chaque occasion, de la célébration intime à la grande réception.',
    ],
    celebrateTitle: 'Célébrez vos moments à Rio',
    celebrate: [
      'Mariage, anniversaire, dîner privé, cocktail, séminaire ou événement professionnel : Les Jardins de Rio s’adaptent à vos envies.',
      "La maison peut être entièrement privatisée pour votre événement. Vous pouvez également profiter de nos huit suites pour prolonger l’expérience sur place.",
    ],
    servicesTitle: 'Pour vos événements à Rio de Janeiro',
    servicesIntro: 'Nous vous accompagnons dans l’organisation de votre événement privé ou professionnel à Rio de Janeiro, avec des services adaptés à vos envies et au format de votre réception.',
    services: [
      { title: 'Traiteur & gastronomie', text: 'déjeuner, dîner privé, cocktail ou réception sur mesure.' },
      { title: 'Bar & cocktails', text: 'barman, cocktails signature, champagne et open bar.' },
      { title: 'Musique & animation', text: 'DJ, groupes live et musiciens pour créer l’ambiance de votre événement.' },
      { title: 'Arts & projections', text: 'installations artistiques, projections et scénographie.' },
      { title: 'Décoration & mise en scène', text: 'fleurs, mobilier, éclairage et décoration personnalisée.' },
      { title: 'Organisation sur mesure', text: 'coordination des prestataires et accompagnement dans la préparation de votre événement.' },
    ],
    servicesClosing: 'Chaque détail est pensé pour créer une réception élégante et personnalisée, en harmonie avec l’esprit des Jardins de Rio.',
    ctaTitle: 'Parlez-nous de votre événement',
    ctaText: 'Date, nombre d’invités, type d’événement : écrivez-nous et nous reviendrons vers vous avec une proposition.',
  },
};
