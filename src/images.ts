import type { ImageMetadata } from 'astro';

const photoModules = import.meta.glob<{ default: ImageMetadata }>('./assets/photos/*.jpg', { eager: true });
const roomModules = import.meta.glob<{ default: ImageMetadata }>('./assets/rooms/*.jpg', { eager: true });

function pick(modules: Record<string, { default: ImageMetadata }>, name: string): ImageMetadata {
  const entry = Object.entries(modules).find(([path]) => path.endsWith(`/${name}.jpg`));
  if (!entry) throw new Error(`Image introuvable : ${name} (as-tu lancé scripts/prepare-assets.mjs ?)`);
  return entry[1].default;
}

export const photo = (name: string) => pick(photoModules, name);
export const roomPhoto = (name: string) => pick(roomModules, name);
