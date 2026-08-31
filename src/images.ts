import type { ImageMetadata } from 'astro';

// ── Système de collections de photos ────────────────────────────────────────
// Toute image sous src/assets/ (peuplé par scripts/prepare-assets.mjs depuis
// assets-src/) est identifiée par son CHEMIN relatif sans extension :
//   'photos/hero-maison-piscine'
//   'rooms/deluxe-green/01-chambre'
// Le chemin EST l'ID — aucune table de correspondance à maintenir.
//
// Une « collection » est un dossier : rooms/<id>, spaces/<key>,
// experiences/<key>, spa/<key>. Ajouter une photo dans le dossier (via
// l'interface GitHub : naviguer dans assets-src/<collection>/ → « Add file →
// Upload files ») suffit pour qu'elle apparaisse dans le carrousel associé.
// L'ordre d'affichage = ordre alphabétique des noms de fichiers → préfixer
// 01-, 02-, … pour contrôler l'ordre.

const modules = import.meta.glob<{ default: ImageMetadata }>(
  './assets/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true }
);

const byId = new Map<string, ImageMetadata>();
// Table inverse : permet de retrouver l'ID d'une image qu'on ne tient que sous
// forme d'ImageMetadata (cas des collections/carrousels), pour aller chercher
// ses métadonnées associées — crédit photo, par exemple (cf. src/credits.ts).
// Indexée sur l'IDENTITÉ de l'objet, pas sur son `src` : deux fichiers sources
// au contenu identique sont dédupliqués par Astro et partagent alors le même
// `src`, ce qui rendrait le lookup ambigu. Les objets, eux, restent distincts —
// et `image()` / `gallery()` renvoient ceux-ci, jamais des copies.
const idByImage = new WeakMap<ImageMetadata, string>();
for (const [path, mod] of Object.entries(modules)) {
  const id = path.replace(/^\.\/assets\//, '').replace(/\.(jpe?g|png|webp)$/i, '');
  byId.set(id, mod.default);
  idByImage.set(mod.default, id);
}

/** Une image précise par son ID (chemin sans extension). Échoue au build si absente. */
export function image(id: string): ImageMetadata {
  const img = byId.get(id);
  if (!img) {
    throw new Error(
      `Image introuvable : « ${id} » — vérifie le chemin dans assets-src/ (et que scripts/prepare-assets.mjs a tourné).`
    );
  }
  return img;
}

/** ID (chemin sans extension) d'une image, ou '' si elle ne vient pas de src/assets/. */
export function idOf(img: ImageMetadata): string {
  return idByImage.get(img) ?? '';
}

/** Toutes les images d'une collection (enfants directs du dossier), triées par nom de fichier. */
export function gallery(collection: string): ImageMetadata[] {
  const prefix = `${collection}/`;
  return [...byId.keys()]
    .filter((id) => id.startsWith(prefix) && !id.slice(prefix.length).includes('/'))
    .sort((a, b) => a.localeCompare(b, 'en', { numeric: true }))
    .map((id) => byId.get(id)!);
}

/**
 * Images d'une collection ; si le dossier est vide, retombe sur les IDs donnés.
 * Échoue au build si la collection ET le fallback sont vides : une carte sans
 * photo est un bug de contenu, autant le savoir avant la mise en ligne.
 */
export function galleryOr(collection: string, ...fallbackIds: string[]): ImageMetadata[] {
  const imgs = gallery(collection);
  if (imgs.length) return imgs;
  if (!fallbackIds.length) {
    throw new Error(`Collection vide et sans fallback : « ${collection} » — ajoute au moins une photo dans assets-src/${collection}/.`);
  }
  return fallbackIds.map(image);
}

/** Photo de couverture d'une collection (la première par ordre alphabétique), avec fallback optionnel. */
export function cover(collection: string, fallbackId?: string): ImageMetadata {
  return galleryOr(collection, ...(fallbackId ? [fallbackId] : []))[0];
}
