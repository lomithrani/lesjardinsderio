// @ts-check
import { defineConfig } from 'astro/config';

// Domaine personnalisé : https://lesjardinsderio.com.br (apex, servi à la racine).
// Le CNAME GitHub Pages est posé via public/CNAME.
// Les previews de PR sont buildées par le CI avec ASTRO_BASE=/preview/pr-<n°>,
// et la page de validation (dernière PR ouverte) avec ASTRO_BASE=/validation.
// site/base restent surchargeables par env ASTRO_SITE/ASTRO_BASE (voir deploy.yml).
export default defineConfig({
  site: process.env.ASTRO_SITE ?? 'https://lesjardinsderio.com.br',
  base: process.env.ASTRO_BASE ?? '/',
});
