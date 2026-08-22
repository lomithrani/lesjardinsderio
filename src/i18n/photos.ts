import type { Locale } from '../config';

// Descriptions des photos de la maison, par ID d'image (cf. src/images.ts).
//
// Ces textes servent trois usages à la fois : l'attribut alt des <Image>, la
// vignette de partage (og:image:alt) et la galerie. D'où ce module partagé
// plutôt qu'une liste par template — une photo décrite une fois l'est partout.
//
// Ce sont des DESCRIPTIONS, pas des mots-clés : elles sont lues à voix haute par
// les lecteurs d'écran, et Google déclasse le bourrage. Écrire ce qu'on voit.
//
// Une photo absente de cette table est traitée comme décorative (alt=""), ce qui
// est le bon comportement pour un fond d'ambiance : un alt inventé y serait du
// bruit pour l'utilisateur de lecteur d'écran.
export const PHOTO_ALT: Record<string, Record<Locale, string>> = {
  'photos/hero-maison-piscine': {
    pt: 'A casa modernista e a piscina cristalina no jardim tropical',
    en: 'The modernist house and the crystal-clear pool in the tropical garden',
    fr: 'La maison moderniste et la piscine cristalline dans le jardin tropical',
  },
  'photos/facade-palmiers': {
    pt: 'A fachada branca da casa entre as palmeiras',
    en: 'The white façade of the house among the palm trees',
    fr: 'La façade blanche de la maison entre les palmiers',
  },
  'photos/interieur-perspective': {
    pt: 'Perspectiva dos ambientes interiores, em brancos e madeiras',
    en: 'Perspective through the interior spaces, in whites and warm woods',
    fr: 'Perspective sur les espaces intérieurs, blancs et bois chauds',
  },
  'photos/piscine-canopee': {
    pt: 'A piscina sob a copa das árvores',
    en: 'The pool beneath the tree canopy',
    fr: 'La piscine sous la canopée des arbres',
  },
  'photos/pelouse-jardin': {
    pt: 'O gramado do jardim tropical',
    en: 'The lawn of the tropical garden',
    fr: 'La pelouse du jardin tropical',
  },
  'photos/salon-angle': {
    pt: 'O salão e suas curvas, visto de ângulo',
    en: 'The lounge and its curves, seen from an angle',
    fr: 'Le salon et ses courbes, vu d’angle',
  },
  // ── Reprises de la sélection de la galerie ────────────────────────────────
  'photos/piscine-maison': {
    pt: 'A piscina e a casa',
    en: 'The pool and the house',
    fr: 'La piscine et la maison',
  },
  'photos/salon-large': {
    pt: 'O lounge principal',
    en: 'The main lounge',
    fr: 'Le salon principal',
  },
  'photos/allee-piscine': {
    pt: 'Aleia ao longo da piscina',
    en: 'Alley along the pool',
    fr: 'Allée le long de la piscine',
  },
  'photos/coin-art-rose': {
    pt: 'Recanto artístico',
    en: 'Artistic corner',
    fr: 'Coin artistique',
  },
  'photos/piscine-escalier': {
    pt: 'Escadas curvas junto à piscina',
    en: 'Curved stairs by the pool',
    fr: 'Escalier courbe près de la piscine',
  },
  'photos/terrasse-coussins': {
    pt: 'Terraço com almofadas',
    en: 'Terrace with cushions',
    fr: 'Terrasse aux coussins',
  },
  'photos/jardin-aerien': {
    pt: 'O jardim visto de cima',
    en: 'The garden from above',
    fr: 'Le jardin vu d’en haut',
  },
  'photos/piscine-arbres': {
    pt: 'A piscina entre as árvores',
    en: 'The pool through the trees',
    fr: 'La piscine à travers les arbres',
  },
  'photos/terrasse-courbes': {
    pt: 'Curvas brancas do terraço',
    en: 'White curves of the terrace',
    fr: 'Courbes blanches de la terrasse',
  },
  'photos/bar-interieur': {
    pt: 'O bar interno',
    en: 'The indoor bar',
    fr: 'Le bar intérieur',
  },
  'photos/piscine-jungle': {
    pt: 'Vegetação tropical',
    en: 'Tropical greenery',
    fr: 'Végétation tropicale',
  },
  'photos/terrasse-palmier': {
    pt: 'Terraço sob a palmeira',
    en: 'Terrace under the palm tree',
    fr: 'Terrasse sous le palmier',
  },
  'photos/jardin-transats': {
    pt: 'Espreguiçadeiras no gramado',
    en: 'Loungers on the lawn',
    fr: 'Transats sur la pelouse',
  },
  'photos/piscine-jardin': {
    pt: 'Folhagens à beira da piscina',
    en: 'Foliage by the pool',
    fr: 'Feuillages au bord de la piscine',
  },
  'photos/courbes-ciel': {
    pt: 'Curvas contra o céu',
    en: 'Curves against the sky',
    fr: 'Courbes sur le ciel',
  },
};

/** Description d'une photo, ou '' si elle n'est pas décrite (image décorative). */
export function photoAlt(id: string, locale: Locale): string {
  return PHOTO_ALT[id]?.[locale] ?? '';
}
