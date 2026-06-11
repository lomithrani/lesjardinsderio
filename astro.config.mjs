// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages (project page) : https://lomithrani.github.io/lesjardinsderio/
// Les previews de PR sont buildées avec ASTRO_BASE=/lesjardinsderio/preview/pr-<n°>
// (variable posée par le CI — voir .github/workflows/deploy.yml).
// ⛑ Quand le domaine personnalisé sera branché : remplacer `site`, retirer `base`
// (la valeur par défaut ci-dessous), ajouter public/CNAME.
export default defineConfig({
  site: process.env.ASTRO_SITE ?? 'https://lomithrani.github.io',
  base: process.env.ASTRO_BASE ?? '/lesjardinsderio',
});
