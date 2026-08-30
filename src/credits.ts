import type { ImageMetadata } from 'astro';
import { idOf } from './images';

// Crédits photo, par ID d'image (cf. src/images.ts) — même convention que
// src/i18n/photos.ts pour les descriptions.
//
// Le crédit est attaché à la PHOTO, pas à l'emplacement : une photo réutilisée
// ailleurs sur le site emporte son crédit avec elle, sans rien à re-déclarer.
//
// Pas de traduction : « © Prénom Nom » se lit dans les trois langues.
//
// ⛑ En ajoutant une photo dans assets-src/, penser à la déclarer ici si elle a
//    un auteur à créditer (cf. assets-src/README.md).
export const PHOTO_CREDIT: Record<string, string> = {
  'photos/hero-maison-piscine': 'Camille Gentil',
  'photos/piscine-jardin': 'Camille Gentil',
  'photos/piscine-jungle': 'Camille Gentil',
  'photos/facade-palmiers': 'Camille Gentil',
};

/** Auteur d'une photo par son ID, ou '' si elle n'est pas créditée. */
export function photoCredit(id: string): string {
  return PHOTO_CREDIT[id] ?? '';
}

/**
 * Auteur d'une photo à partir de l'image elle-même — pratique quand on manipule
 * une collection (carrousels) et non des IDs littéraux.
 */
export function creditFor(img: ImageMetadata): string {
  return photoCredit(idOf(img));
}
