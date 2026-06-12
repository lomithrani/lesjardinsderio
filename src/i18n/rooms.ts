import type { Locale } from '../config';

export interface Room {
  id: string;
  nobedsId: string; // RoomID NoBeds — moteur de réservation par chambre (cf. nobedsBooking)
  img: string; // photo principale (nom de fichier dans src/assets/rooms/, sans extension)
  gallery?: string[]; // photos additionnelles du carousel (mêmes noms de fichiers) — à fournir
  size?: number; // m²
  name: Record<Locale, string>;
  desc: Record<Locale, string>;
}

// Source : scraping du site preview (docs/scraping/chambres-2026-06-10.md).
// ⛑ À valider par le client : surfaces des suites Red et Garden View ; photos par chambre.
export const rooms: Room[] = [
  {
    id: 'presidential-white', nobedsId: '2515860', img: 'suite-white', size: 80,
    name: { pt: 'Suíte Presidencial (White)', en: 'Presidential Suite (White)', fr: 'Suite Présidentielle (White)' },
    desc: {
      pt: 'A suíte mais elegante e espaçosa da casa. Pedra natural e mármore branco, quatro ambientes — quarto, banheiro com banheira e ducha, closet — e três terraços privativos: jardim de verão, de inverno e interno.',
      en: 'The most elegant and largest suite, finished with genuine stone and white marble. Four distinct spaces — bedroom, bathroom with bath and shower, dressing room — and three private outdoor terraces: summer, winter and indoor gardens.',
      fr: 'La suite la plus élégante et la plus vaste de la maison. Pierre naturelle et marbre blanc, quatre espaces — chambre, salle de bains avec baignoire et douche, dressing — et trois terrasses privées : jardin d’été, d’hiver et intérieur.',
    },
  },
  {
    id: 'presidential-pink', nobedsId: '2515859', img: 'suite-pink', size: 53,
    name: { pt: 'Suíte Presidencial (Pink)', en: 'Presidential Suite (Pink)', fr: 'Suite Présidentielle (Pink)' },
    desc: {
      pt: 'Ampla e relaxante, com decoração inspirada em uma biblioteca. Terraço privativo com acesso direto à piscina e aos jardins, banheiro balinês com banheira e dupla cuba. Ideal para uma família de quatro.',
      en: 'Spacious and relaxing, inspired by the decor of a library. Private terrace with direct access to the pool and gardens, authentic Balinese bathroom with bathtub and double washbasin. Ideal for a family of four.',
      fr: 'Spacieuse et apaisante, à la décoration inspirée d’une bibliothèque. Terrasse privée avec accès direct à la piscine et aux jardins, salle de bains balinaise avec baignoire et double vasque. Idéale pour une famille de quatre.',
    },
  },
  {
    id: 'luxury-violet', nobedsId: '2515862', img: 'suite-violet', size: 28,
    name: { pt: 'Suíte Luxury (Violet)', en: 'Luxury Suite (Violet)', fr: 'Suite Luxury (Violet)' },
    desc: {
      pt: 'Recentemente modernizada, oferece uma experiência serena: acesso direto ao jardim, terraço privativo perfeito para relaxar, ducha e estação de boas-vindas com iPad.',
      en: 'Recently modernized for a peaceful, serene experience: direct garden access, a private terrace perfect for relaxing, a shower and an iPad welcome station.',
      fr: 'Récemment modernisée pour une expérience sereine : accès direct au jardin, terrasse privée parfaite pour se détendre, douche et station d’accueil iPad.',
    },
  },
  {
    id: 'master-orange', nobedsId: '2515857', img: 'suite-orange', size: 28,
    name: { pt: 'Suíte Master (Orange)', en: 'Suite Master (Orange)', fr: 'Suite Master (Orange)' },
    desc: {
      pt: 'Suíte elegante no prédio principal. Banheiro com acesso exclusivo a um charmoso jardim de inverno e acesso direto ao jardim tropical.',
      en: 'An elegant suite in the main building. The bathroom enjoys exclusive access to a charming winter garden, with direct access to the tropical garden.',
      fr: 'Suite élégante du bâtiment principal. Salle de bains avec accès exclusif à un charmant jardin d’hiver, et accès direct au jardin tropical.',
    },
  },
  {
    id: 'luxury-yellow', nobedsId: '2515856', img: 'suite-yellow', size: 32,
    name: { pt: 'Suíte Luxury (Yellow)', en: 'Luxury Suite (Yellow)', fr: 'Suite Luxury (Yellow)' },
    desc: {
      pt: 'Uma mistura única de decoração moderna e original, com banheira de mármore e entrada independente pelo exterior da casa.',
      en: 'A unique blend of modern and original decoration, featuring a marble tub and its own exclusive entrance from outside the house.',
      fr: 'Un mélange unique de décoration moderne et d’origine, avec baignoire en marbre et entrée indépendante depuis l’extérieur de la maison.',
    },
  },
  {
    id: 'deluxe-red', nobedsId: '2515855', img: 'suites-deluxe',
    name: { pt: 'Suíte Deluxe (Red)', en: 'Deluxe Suite (Red)', fr: 'Suite Deluxe (Red)' },
    desc: {
      pt: 'Suíte moderna no prédio principal, com vista para a piscina e persianas de madeira exclusivas e acolhedoras.',
      en: 'A modern suite in the main building overlooking the pool, with exclusive, warm wooden blinds.',
      fr: 'Suite moderne du bâtiment principal, avec vue sur la piscine et stores en bois exclusifs et chaleureux.',
    },
  },
  {
    id: 'deluxe-garden', nobedsId: '2515861', img: 'suites-deluxe',
    name: { pt: 'Suíte Deluxe (Garden View)', en: 'Deluxe Suite (Garden View)', fr: 'Suite Deluxe (Garden View)' },
    desc: {
      pt: 'Suíte espaçosa de grandes proporções, com vários pátios e closet.',
      en: 'A spacious suite with a large layout, multiple patios and a walk-in closet.',
      fr: 'Suite spacieuse aux grands volumes, avec plusieurs patios et un dressing.',
    },
  },
  {
    id: 'deluxe-green', nobedsId: '2515858', img: 'suite-green', size: 32,
    name: { pt: 'Suíte Deluxe (Green)', en: 'Deluxe Suite (Green)', fr: 'Suite Deluxe (Green)' },
    desc: {
      pt: 'No prédio anexo, com acesso independente ao jardim e vista para a piscina, a floresta e o jardim. Comunica-se com outra suíte no nível inferior — ideal para famílias. Ar-condicionado, smart TV, Wi-Fi.',
      en: 'In the annex building with independent garden access, overlooking the pool, forest and garden. Communicates with another suite on the lower level — ideal for families. Air conditioning, smart TV, Wi-Fi.',
      fr: 'Dans le bâtiment annexe, avec accès indépendant au jardin et vue sur la piscine, la forêt et le jardin. Communique avec une suite en contrebas — idéale pour les familles. Climatisation, smart TV, Wi-Fi.',
    },
  },
];
