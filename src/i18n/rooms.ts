import type { Locale } from '../config';

export interface Room {
  id: string;
  nobedsId: string; // RoomID NoBeds — moteur de réservation par chambre (cf. nobedsBooking)
  // Photos : dossier assets-src/rooms/<id>/ (cf. assets-src/README.md).
  // L'id de la chambre EST le nom du dossier ; carrousel et couverture en découlent.
  size?: number; // m²
  name: Record<Locale, string>;
  desc: Record<Locale, string>;
}

// Noms commerciaux et surfaces : alignés sur la fiche Expedia de l'hôtel (h8409409),
// elle-même synchronisée avec Booking et le channel manager. C'est la source de vérité :
// un client qui a réservé « The Library Suite » doit retrouver ce nom ici.
// Les `id` restent les anciens codes couleur — ce sont les noms de dossiers photos
// (assets-src/rooms/<id>/), invisibles du visiteur ; les renommer casserait les galeries.
// Les noms sont identiques en pt/en/fr : ce sont des noms propres, communs à tous les canaux.
//
// ORDRE : de la plus grande surface à la plus petite. C'est l'ordre d'affichage de la page
// Chambres et des vignettes de l'Accueil — insérer une chambre à sa place, pas à la fin.
// Table de correspondance dossier photos ↔ nom commercial : assets-src/README.md.
export const rooms: Room[] = [
  {
    id: 'presidential-white', nobedsId: '2515860', size: 65, // Expedia 200714660
    name: {
      pt: 'Presidential White Suite (Private Terrace)',
      en: 'Presidential White Suite (Private Terrace)',
      fr: 'Presidential White Suite (Private Terrace)',
    },
    desc: {
      pt: 'A suíte mais elegante e espaçosa da casa. Pedra natural e mármore branco, quatro ambientes — quarto, banheiro com banheira e ducha, closet — e três terraços privativos: jardim de verão, de inverno e interno.',
      en: 'The most elegant and largest suite, finished with genuine stone and white marble. Four distinct spaces — bedroom, bathroom with bath and shower, dressing room — and three private outdoor terraces: summer, winter and indoor gardens.',
      fr: 'La suite la plus élégante et la plus vaste de la maison. Pierre naturelle et marbre blanc, quatre espaces — chambre, salle de bains avec baignoire et douche, dressing — et trois terrasses privées : jardin d’été, d’hiver et intérieur.',
    },
  },
  {
    id: 'luxury-violet', nobedsId: '2515862', size: 54, // Expedia 200719046
    name: {
      pt: 'The Amethyst Suite',
      en: 'The Amethyst Suite',
      fr: 'The Amethyst Suite',
    },
    desc: {
      pt: 'Recentemente modernizada, oferece uma experiência serena: acesso direto ao jardim, terraço privativo perfeito para relaxar, ducha e estação de boas-vindas com iPad.',
      en: 'Recently modernized for a peaceful, serene experience: direct garden access, a private terrace perfect for relaxing, a shower and an iPad welcome station.',
      fr: 'Récemment modernisée pour une expérience sereine : accès direct au jardin, terrasse privée parfaite pour se détendre, douche et station d’accueil iPad.',
    },
  },
  {
    id: 'presidential-pink', nobedsId: '2515859', size: 52, // Expedia 200817763
    name: {
      pt: 'The Library Suite (Private Terrace)',
      en: 'The Library Suite (Private Terrace)',
      fr: 'The Library Suite (Private Terrace)',
    },
    desc: {
      pt: 'Ampla e relaxante, com decoração inspirada em uma biblioteca. Terraço privativo com acesso direto à piscina e aos jardins, banheiro balinês com banheira e dupla cuba. Ideal para uma família de quatro.',
      en: 'Spacious and relaxing, inspired by the decor of a library. Private terrace with direct access to the pool and gardens, authentic Balinese bathroom with bathtub and double washbasin. Ideal for a family of four.',
      fr: 'Spacieuse et apaisante, à la décoration inspirée d’une bibliothèque. Terrasse privée avec accès direct à la piscine et aux jardins, salle de bains balinaise avec baignoire et double vasque. Idéale pour une famille de quatre.',
    },
  },
  {
    id: 'deluxe-green', nobedsId: '2515858', size: 37, // Expedia 324004551
    name: {
      pt: 'The Botanical Suite',
      en: 'The Botanical Suite',
      fr: 'The Botanical Suite',
    },
    desc: {
      pt: 'No prédio anexo, com acesso independente ao jardim e vista para a piscina, a floresta e o jardim. Comunica-se com outra suíte no nível inferior — ideal para famílias. Ar-condicionado, smart TV, Wi-Fi.',
      en: 'In the annex building with independent garden access, overlooking the pool, forest and garden. Communicates with another suite on the lower level — ideal for families. Air conditioning, smart TV, Wi-Fi.',
      fr: 'Dans le bâtiment annexe, avec accès indépendant au jardin et vue sur la piscine, la forêt et le jardin. Communique avec une suite en contrebas — idéale pour les familles. Climatisation, smart TV, Wi-Fi.',
    },
  },
  {
    id: 'master-orange', nobedsId: '2515857', size: 29, // Expedia 323606968
    name: {
      pt: 'The Sunset Garden Room (Private Terrace)',
      en: 'The Sunset Garden Room (Private Terrace)',
      fr: 'The Sunset Garden Room (Private Terrace)',
    },
    desc: {
      pt: 'Suíte elegante no prédio principal. Banheiro com acesso exclusivo a um charmoso jardim de inverno e acesso direto ao jardim tropical.',
      en: 'An elegant suite in the main building. The bathroom enjoys exclusive access to a charming winter garden, with direct access to the tropical garden.',
      fr: 'Suite élégante du bâtiment principal. Salle de bains avec accès exclusif à un charmant jardin d’hiver, et accès direct au jardin tropical.',
    },
  },
  {
    id: 'deluxe-garden', nobedsId: '2515861', size: 22, // Expedia 200719049
    name: {
      pt: 'Blue Suite (Private Terrace)',
      en: 'Blue Suite (Private Terrace)',
      fr: 'Blue Suite (Private Terrace)',
    },
    desc: {
      pt: 'Suíte espaçosa de grandes proporções, com vários pátios e closet.',
      en: 'A spacious suite with a large layout, multiple patios and a walk-in closet.',
      fr: 'Suite spacieuse aux grands volumes, avec plusieurs patios et un dressing.',
    },
  },
  {
    id: 'deluxe-red', nobedsId: '2515855', size: 18, // Expedia 323606954
    name: {
      pt: 'Red Room (Garden View)',
      en: 'Red Room (Garden View)',
      fr: 'Red Room (Garden View)',
    },
    desc: {
      pt: 'Suíte moderna no prédio principal, com vista para a piscina e persianas de madeira exclusivas e acolhedoras.',
      en: 'A modern suite in the main building overlooking the pool, with exclusive, warm wooden blinds.',
      fr: 'Suite moderne du bâtiment principal, avec vue sur la piscine et stores en bois exclusifs et chaleureux.',
    },
  },
  {
    id: 'luxury-yellow', nobedsId: '2515856', size: 17, // Expedia 324004544
    name: {
      pt: 'Maracuja Room (Private Terrace)',
      en: 'Maracuja Room (Private Terrace)',
      fr: 'Maracuja Room (Private Terrace)',
    },
    desc: {
      pt: 'Uma mistura única de decoração moderna e original, com banheira de mármore e entrada independente pelo exterior da casa.',
      en: 'A unique blend of modern and original decoration, featuring a marble tub and its own exclusive entrance from outside the house.',
      fr: 'Un mélange unique de décoration moderne et d’origine, avec baignoire en marbre et entrée indépendante depuis l’extérieur de la maison.',
    },
  },
];
