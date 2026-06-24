// Configuration centrale du site.
// ⛑ PLACEHOLDER RESTANT : le domaine définitif (voir astro.config.mjs).
// Tant que le site vit sur l'URL de staging GitHub Pages, on bloque l'indexation.
// ⛑ Passer STAGING à false au lancement sur le domaine définitif.
// Les previews de PR (PREVIEW=1, posé par le CI) restent noindex quoi qu'il arrive.
const STAGING = false;
export const STAGING_NOINDEX = STAGING || process.env.PREVIEW === '1';

export const SITE = {
  name: 'Les Jardins de Rio',
  phone: '+55 (21) 3217-1334',
  phoneHref: 'tel:+552132171334',
  mobile: '+55 (21) 96909-4331',
  mobileHref: 'tel:+5521969094331',
  whatsappNumber: '5521969094331',
  email: 'lesjardinsderio@gmail.com',
  addressLine1: 'Rua Cosme Velho, 1342 – Cosme Velho',
  addressLine2: 'Rio de Janeiro – RJ, 22241-091',
  mapsUrl: 'https://maps.app.goo.gl/gCyWFP2PJh8RmYYw5',
  instagram: 'https://www.instagram.com/lesjardinsderioboutiquehotel/',
  // Moteur de réservation NoBeds — par chambre (OnePage booking engine, book=1).
  // Format : https://nobeds.app/Calendar/Beta/<RoomID>?<params>
  // Embarqué en iframe dans l'overlay « Réserver » de chaque carte (cf. Rooms.astro).
  NOBEDS_BETA_BASE: 'https://nobeds.app/Calendar/Beta',
  // Paramètres NoBeds (réglables) : calendars = nb de mois affichés, minstay = séjour
  // minimum, rates/hotel = options d'affichage, book=1 active le moteur de réservation.
  NOBEDS_BETA_PARAMS: 'calendars=1&minstay=1&rates=1&hotel=1&book=1',
  NOBEDS_DEFAULT_ID: '2515855', // Suite Deluxe (Red) — repli si id absent
} as const;

// Construit l'URL du moteur de réservation NoBeds d'une chambre (iframe de l'overlay).
export function nobedsBooking(id: string = SITE.NOBEDS_DEFAULT_ID): string {
  return `${SITE.NOBEDS_BETA_BASE}/${id}?${SITE.NOBEDS_BETA_PARAMS}`;
}

export type Locale = 'pt' | 'en' | 'fr';
export const LOCALES: Locale[] = ['pt', 'en', 'fr'];
export const DEFAULT_LOCALE: Locale = 'pt';

export const HTML_LANG: Record<Locale, string> = {
  pt: 'pt-BR',
  en: 'en',
  fr: 'fr',
};

// Slugs localisés par page logique. Source de vérité du routing + hreflang.
export const ROUTES: Record<string, Record<Locale, string>> = {
  home: { pt: '/pt/', en: '/en/', fr: '/fr/' },
  rooms: { pt: '/pt/quartos/', en: '/en/rooms/', fr: '/fr/chambres/' },
  spa: { pt: '/pt/spa/', en: '/en/spa/', fr: '/fr/spa/' },
  events: { pt: '/pt/eventos/', en: '/en/events/', fr: '/fr/evenements/' },
  experiences: { pt: '/pt/experiencias/', en: '/en/experiences/', fr: '/fr/experiences/' },
  gallery: { pt: '/pt/galeria/', en: '/en/gallery/', fr: '/fr/galerie/' },
  contact: { pt: '/pt/contato/', en: '/en/contact/', fr: '/fr/contact/' },
};

export function whatsappLink(locale: Locale, context?: string): string {
  const base: Record<Locale, string> = {
    pt: 'Olá! Gostaria de informações sobre Les Jardins de Rio',
    en: 'Hello! I would like information about Les Jardins de Rio',
    fr: 'Bonjour ! Je souhaiterais des informations sur Les Jardins de Rio',
  };
  const text = encodeURIComponent(base[locale] + (context ? ` — ${context}` : '') + '.');
  return `https://wa.me/${SITE.whatsappNumber}?text=${text}`;
}
