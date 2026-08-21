// sitemap.xml — construit depuis ROUTES (src/config.ts), seule source de vérité
// du routing. Chaque page logique produit une entrée par langue, et chaque entrée
// déclare ses alternates hreflang : c'est la version « sitemap » des <link
// rel="alternate"> de Base.astro, que Google recommande de fournir aux deux
// endroits pour un site multilingue.
//
// Pas de <lastmod> : il faudrait une vraie date de dernière modification du
// contenu. Mettre la date de build mentirait à chaque déploiement (Google
// dévalue alors le signal), et l'omettre vaut mieux qu'une valeur fausse.
// Pas de <changefreq>/<priority> non plus : Google les ignore.
import type { APIRoute } from 'astro';
import { ROUTES, LOCALES, HTML_LANG, DEFAULT_LOCALE } from '../config';

// Pages logiques exclues du sitemap : `gallery` n'est encore qu'une redirection
// `noindex` vers l'accueil (cf. src/pages/*/galerie.astro). À retirer d'ici le
// jour où la galerie devient une vraie page.
const EXCLUDED = new Set(['gallery']);

export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const abs = (path: string) => new URL(`${base}${path}`, site).href;

  const pages = Object.entries(ROUTES).filter(([page]) => !EXCLUDED.has(page));

  const urls = pages.flatMap(([, paths]) =>
    LOCALES.map((locale) => {
      const alternates = [
        ...LOCALES.map((l) => `    <xhtml:link rel="alternate" hreflang="${HTML_LANG[l]}" href="${abs(paths[l])}" />`),
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(paths[DEFAULT_LOCALE])}" />`,
      ].join('\n');

      return `  <url>\n    <loc>${abs(paths[locale])}</loc>\n${alternates}\n  </url>`;
    }),
  );

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...urls,
    '</urlset>',
    '',
  ].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
