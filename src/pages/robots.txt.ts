// robots.txt — généré au build plutôt que posé en dur dans public/, pour que
// l'URL du sitemap suive `site`/`base` (astro.config.mjs) et que les builds
// noindex (previews de PR, staging) refusent explicitement l'exploration.
//
// NB : les crawlers ne lisent le robots.txt qu'à la RACINE du domaine, servie
// par le build de `main`. Celui des previews (/preview/pr-N/robots.txt) n'est
// jamais consulté — leur protection réelle reste le <meta name="robots"
// content="noindex"> posé par Base.astro (PREVIEW=1).
import type { APIRoute } from 'astro';
import { STAGING_NOINDEX } from '../config';

export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const sitemap = new URL(`${base}/sitemap.xml`, site).href;

  // Ni /preview/ ni /validation/ ne sont bloqués ici volontairement : ces copies
  // portent déjà un `noindex`, et un Disallow empêcherait justement Google de le
  // lire (une URL interdite d'exploration peut malgré tout finir indexée).
  const body = STAGING_NOINDEX
    ? ['User-agent: *', 'Disallow: /', ''].join('\n')
    : ['User-agent: *', 'Allow: /', '', `Sitemap: ${sitemap}`, ''].join('\n');

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
