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

// ── Composition d'e-mail (bouton « Envoyer un e-mail ») ──────────────────────
// mailto: ne fonctionne que si le visiteur a un client mail configuré comme
// gestionnaire par défaut — souvent absent sur desktop (cf. EmailButton.astro).
// On propose donc, en plus de mailto:, les compositeurs web de Gmail et Outlook
// (pré-remplis, ouverts dans un nouvel onglet).
// ⚠ iCloud Mail web n'expose PAS d'URL de composition fiable : c'est mailto: qui
//   sert les comptes iCloud (il ouvre Apple Mail, où le compte iCloud est branché).
//   L'item mailto: capte donc aussi Apple Mail / iCloud et tout autre client par défaut.
export type EmailProvider = 'gmail' | 'outlook' | 'mailto';

export interface EmailComposer {
  provider: EmailProvider;
  href: string;
  external: boolean; // true → webmail (nouvel onglet) ; false → mailto:
}

export function emailComposers(locale: Locale, context?: string): EmailComposer[] {
  const subjectBase: Record<Locale, string> = {
    pt: 'Contato — Les Jardins de Rio',
    en: 'Enquiry — Les Jardins de Rio',
    fr: 'Demande — Les Jardins de Rio',
  };
  const bodyBase: Record<Locale, string> = {
    pt: 'Olá! Gostaria de informações sobre Les Jardins de Rio',
    en: 'Hello! I would like information about Les Jardins de Rio',
    fr: 'Bonjour ! Je souhaiterais des informations sur Les Jardins de Rio',
  };
  const suffix = context ? ` — ${context}` : '';
  const subject = subjectBase[locale] + suffix;
  const body = bodyBase[locale] + suffix + '.';
  const to = SITE.email;
  const e = encodeURIComponent;

  return [
    {
      provider: 'gmail',
      href: `https://mail.google.com/mail/?view=cm&fs=1&to=${e(to)}&su=${e(subject)}&body=${e(body)}`,
      external: true,
    },
    {
      provider: 'outlook',
      href: `https://outlook.live.com/mail/0/deeplink/compose?to=${e(to)}&subject=${e(subject)}&body=${e(body)}`,
      external: true,
    },
    {
      provider: 'mailto',
      href: `mailto:${to}?subject=${e(subject)}&body=${e(body)}`,
      external: false,
    },
  ];
}

// ── Search Console ──────────────────────────────────────────────────────────
// Jeton de validation de propriété Google Search Console (méthode « balise HTML »).
// Il doit rester présent en permanence : Google revérifie périodiquement, et la
// propriété est révoquée si la balise disparaît. Posé sur toutes les pages ainsi
// que sur la redirection racine, la validation portant sur l'URL d'accueil.
export const GOOGLE_SITE_VERIFICATION = 'Q2Y0YUHC5UWqIpMzm0shyPNzJz3_1DPhzwDFP92GXpg';

// ── Mesure d'audience & consentement ────────────────────────────────────────
// Conteneur Google Tag Manager de la cliente. C'est le SEUL chemin de chargement
// Google du site : GA4 n'est pas appelé en direct depuis le code, il se configure
// comme un tag DANS l'interface GTM. Deux chemins parallèles compteraient deux
// fois les mêmes visites.
export const GTM_ID = 'GTM-MCLC59W8';

// Le conteneur n'est posé que sur la production : ni sur les previews de PR et la
// page de validation (PREVIEW=1, posé par le CI), ni en dev local — le trafic de
// test ne doit pas polluer les statistiques de la cliente.
export const GTM_ENABLED = import.meta.env.PROD && process.env.PREVIEW !== '1';

// Le bandeau s'affiche partout où un tag Google peut se déclencher (donc en
// production), et AUSSI sur les previews de PR — sans quoi il serait invisible là
// où on le fait justement relire. En preview il tourne à vide : le choix est
// enregistré et le Mode Consentement mis à jour, mais il n'y a aucun GTM derrière.
export const CONSENT_UI_ENABLED = GTM_ENABLED || process.env.PREVIEW === '1';

// ⛑ À FAIRE CÔTÉ GOOGLE, sur le tag GA4 configuré dans GTM :
//   1. Conservation des données : Analytics → Admin → « 14 mois ». Le bandeau
//      annonce 14 mois au visiteur ; si la propriété est réglée autrement, le
//      texte affiché devient faux. Les deux doivent rester alignés.
//   2. Durée du cookie de mesure : régler « cookie_expires » à 34128000 (≈ 13
//      mois) et « cookie_update » à false dans les paramètres du tag GA4. Sans
//      ça GA4 pose un cookie de 2 ans PROLONGÉ à chaque visite, ce que la CNIL
//      refuse explicitement. Ce réglage vivait dans le code tant que GA4 était
//      appelé en direct ; il relève désormais de la configuration GTM.

// Clé localStorage du choix du visiteur ({ v, choice: 'granted' | 'denied', ts }).
export const CONSENT_KEY = 'ljdr-consent';

// Durée de validité du choix : 6 mois (recommandation CNIL, valable pour un refus
// comme pour une acceptation). Passé ce délai, le bandeau est reproposé.
export const CONSENT_MAX_AGE = 182 * 24 * 60 * 60 * 1000;
