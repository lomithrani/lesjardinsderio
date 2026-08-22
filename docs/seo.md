# Stratégie SEO — Les Jardins de Rio

État des lieux et plan d'action, au 22 août 2026.
Site : https://lesjardinsderio.com.br — Astro statique, GitHub Pages, 3 langues (pt-BR / en / fr), 7 pages logiques × 3 = 21 URL indexables.

---

## 0. Le contexte, avant la technique

Deux métiers cohabitent sur le même site, et ils ne se référencent pas de la même façon :

| Activité | Où se joue la visibilité | Levier n°1 |
|---|---|---|
| **Hébergement** (8 suites) | Google Maps / pack local, Google Hotels, OTA (Booking, Airbnb), avis | Fiche Google Business Profile + avis |
| **Événements** (mariages, tournages, séminaires, jusqu'à 500 pers.) | Recherche Google classique, longue traîne, prescripteurs | Contenu éditorial + netlinking (wedding planners, agences) |

Conséquence : **le site ne peut pas porter seul la partie hébergement.** L'essentiel du trafic « je cherche un hôtel à Rio » passe par Maps et les OTA. Le site sert à convertir (réservation directe = 0 % de commission) et à capter la partie événements, où il peut réellement dominer.

Langues, par ordre de priorité business :
1. **pt-BR** — marché local, événements, day use, mariages cariocas.
2. **en** — voyageurs internationaux.
3. **fr** — niche (clientèle francophone, maison franco-brésilienne), peu volumique.

---

## 1. Ce qui est déjà en place et solide

À ne pas retoucher, c'est bon :

- `<title>` et `<meta description>` propres et distincts par page **et** par langue (`src/i18n/ui.ts`).
- `<link rel="canonical">` absolu sur chaque page (`src/layouts/Base.astro`).
- **hreflang complet** : les 3 langues + `x-default`, déclarés à la fois dans le `<head>` et dans le sitemap — c'est la configuration que Google recommande, et elle est rarement faite correctement.
- `sitemap.xml` généré depuis `ROUTES`, donc jamais désynchronisé du routing. Pas de `lastmod` bidon ni de `changefreq` inutile : bon choix.
- `robots.txt` généré au build, qui bascule en `Disallow: /` sur les previews.
- Previews de PR en `noindex` — aucun risque de contenu dupliqué.
- Propriété Search Console validée, balise posée en permanence (y compris sur la redirection racine).
- GTM + Mode Consentement Google v2, conforme.
- **Un seul `<h1>` par page**, hiérarchie h1/h2/h3 cohérente sur les 7 templates.
- Images servies par `astro:assets` (responsive `widths`/`sizes`, formats modernes), hero en `loading="eager"` + `fetchpriority="high"` → LCP correct.
- JSON-LD `BedAndBreakfast` présent.

**Note sur la racine `/`** : elle utilise un `<meta http-equiv="refresh">` vers `/pt/`, faute de pouvoir faire un 301 sur GitHub Pages. Google traite un refresh à 0 seconde comme une redirection permanente : c'est acceptable, **aucune action**. Simplement, c'est `/pt/` qui capitalise l'autorité, pas `lesjardinsderio.com.br` nu.

---

## 2. Ce qui DOIT être fait

Par ordre d'impact décroissant.

### 2.1 — Google Business Profile (hors site, priorité absolue)

Pour un hôtel, la fiche Google pèse plus que tout le reste du site réuni. Elle alimente le pack local, Maps et Google Hotels.

À faire côté Google, pas côté code :
- Revendiquer / vérifier la fiche à l'adresse Rua Cosme Velho 1342.
- Catégorie principale : *Pousada* / *Bed & breakfast*. Catégories secondaires : *Salle de réception*, *Lieu de mariage*.
- 30+ photos géolocalisées, réparties : façade, piscine, chaque suite, jardin, rooftop, petit-déjeuner, espace événement.
- Horaires, téléphone, site, lien de réservation directe.
- **Une routine d'avis** : demander systématiquement un avis Google au check-out (QR code en chambre, message WhatsApp J+1). Le volume et la fraîcheur des avis sont le premier critère de classement local.
- Publier un « post » Google par mois (offre day use, événement à venir).

Sans ça, tout le reste est marginal.

### 2.2 — `og:image` absent (`src/layouts/Base.astro`) — ✅ fait

Aucune balise `og:image` ni `twitter:card` sur le site. Concrètement : **chaque lien partagé sur WhatsApp, Instagram, Facebook ou par e-mail affichait une carte grise sans photo.** Pour une maison qui se vend par l'image et dont le canal de contact principal est WhatsApp, c'était la perte la plus chère du lot — et la plus vite corrigée.

Livré : une vignette **par page**, recadrée en 1200 × 630 au build (`getImage()`), en JPEG — WhatsApp n'affiche pas les vignettes WebP de façon fiable, alors qu'Astro sert du WebP par défaut. Table `OG_IMAGES` dans `Base.astro` : hero pour l'accueil, suite Présidentielle pour Chambres, piscine sous la canopée pour Événements, façade pour Contact, etc. Complété par `og:image:width`/`height` (sans lesquelles l'aperçu WhatsApp n'apparaît qu'au second partage), `og:image:alt`, `og:locale` + `og:locale:alternate` (`OG_LOCALE` dans `config.ts` — Open Graph veut `pt_BR`, pas `pt-BR`) et le jeu `twitter:*` en `summary_large_image`.

Reste à faire une fois en ligne : passer les 7 URL dans le [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) pour forcer la mise en cache des vignettes.

### 2.3 — Données structurées incomplètes et non spécialisées — ✅ fait

Le bloc JSON-LD était correct mais minimal, et **identique sur les 7 pages**.

Livré : un `@graph` dont les nœuds se référencent par `@id`, pour que Google comprenne que la salle d'événements et les suites appartiennent à *cet* établissement et non à trois entités homonymes.

- `BedAndBreakfast` enrichi : `image` (16:9, le ratio privilégié pour les résultats enrichis), `geo`, `hasMap`, `sameAs` (Instagram), `openingHoursSpecification` (les horaires de réception de la page Contact), `amenityFeature` complété (rooftop, bar), et `numberOfRooms` **dérivé de `rooms.length`** — impossible de désynchroniser le schéma du site.
- `/evenements` → `EventVenue`, `maximumAttendeeCapacity: 500`.
- `/chambres` → un `HotelRoom` par suite, avec `floorSize` en m² quand la surface est connue.
- Partout → `BreadcrumbList` (localisé) et `WebSite`.

Les coordonnées `geo` viennent du marqueur de la fiche Google du lieu, pas d'une estimation.

**Trois champs restent volontairement vides**, faute de valeur exacte : `priceRange`, `checkinTime` / `checkoutTime`, `starRating`. Ils alimentent Google Hotels et méritent d'être renseignés — mais un schéma qui contredit la réalité est pénalisé, donc ils attendent une confirmation de la cliente. Un ⛑ les signale dans le code.

### 2.4 — Images de contenu avec `alt=""` — ✅ fait

Hero, intérieur, piscine-jungle, façade-palmiers… déclarées décoratives alors qu'elles portent le message. Double perte : **Google Images** (canal important en hôtellerie) et **accessibilité**, elle-même signal de qualité pour Google.

En cherchant à les rédiger, découverte utile : un dictionnaire d'alt trilingues pour 15 photos **existait déjà**, enfermé dans `Gallery.astro` — un template que rien n'importe (cf. §2.6). Du travail fait, inaccessible au reste du site.

Livré : ce dictionnaire est extrait dans `src/i18n/photos.ts`, complété pour les 6 photos manquantes (21 en tout), et branché en trois endroits — les `alt` des pages, la galerie, et `og:image:alt`. Une photo décrite une fois l'est partout.

Restent en `alt=""`, **à raison** : les deux logos de l'en-tête et du pied de page (suivis d'un `<span>` portant le nom — un alt ferait répéter le nom au lecteur d'écran), et les diapos secondaires des carrousels (redondantes avec la première).

### 2.5 — Page 404 absente — ✅ fait

GitHub Pages servait sa page 404 générique : hors charte, en anglais, sans navigation. Un visiteur tombant sur un ancien lien était dans un cul-de-sac.

Livré : `src/pages/404.astro`, dans la charte (photo plein écran, logo, liens vers les six pages principales). Volontairement **autonome, sans `Base.astro`** : GitHub Pages sert ce fichier pour toute URL inconnue du domaine, quelle que soit la langue du chemin demandé, donc la langue ne peut pas être choisie au build. Les trois versions sont écrites dans la page et un script inline en révèle une seule, d'après le préfixe de l'URL fautive (`/fr/…`) puis, à défaut, `navigator.language`. Avec `Base.astro`, l'en-tête et le pied de page seraient restés figés en portugais au-dessus d'un contenu passé en français.

Vérifié en preview : `/fr/…` → français, `/en/…` → anglais même avec un navigateur en français (le chemin prime), URL sans préfixe → langue du navigateur, et le statut HTTP renvoyé est bien 404.

Conséquence assumée : pas de GTM sur cette page, donc les liens morts n'apparaissent pas dans GA4 — c'est la Search Console qui les signale.

### 2.6 — La galerie est du code mort

Le template `src/templates/Gallery.astro` est **écrit et complet**, mais les pages `src/pages/*/galerie.astro` sont des redirections `noindex` vers l'accueil, et la galerie est exclue du sitemap. Trois pages sont donc perdues alors que le travail est fait.

Pour un hôtel, une galerie est une page à fort temps de session et un réservoir d'images indexables. **Décision à prendre : brancher le template (recommandé) ou supprimer le code.** L'état actuel est le pire des deux.

### 2.7 — Aucun contenu de longue traîne

C'est le manque **stratégique** principal. Le site fait 7 pages, toutes transactionnelles. Il ne peut se positionner que sur son propre nom.

Les requêtes qui amènent des clients ne sont pas « Les Jardins de Rio », ce sont :
- *hotel perto do Cristo Redentor*, *onde ficar em Cosme Velho*, *pousada com piscina Rio de Janeiro*
- *casamento ao ar livre Rio de Janeiro*, *espaço para eventos Zona Sul*, *locação para filmagem Rio*
- *where to stay near Christ the Redeemer*, *boutique hotel Rio garden pool*
- *day use piscina Rio*

Aujourd'hui, **aucune page ne vise ces requêtes**. Voir §3.2.

---

## 3. Ce qui PEUT être fait

Gains réels, moins urgents.

### 3.1 — Une page par suite

8 suites × 3 langues = **24 nouvelles URL**, avec du contenu déjà rédigé (`src/i18n/rooms.ts`) et les photos déjà classées par dossier. Chaque page vise « suite avec terrasse privée Rio », « suíte com vista para a piscina », etc. C'est le meilleur rapport effort/gain du site : le contenu existe, il ne manque que le routing.

### 3.2 — Un volet éditorial

3 à 5 pages guides, en pt-BR d'abord (marché le plus volumique), traduites ensuite :
- « Visiter le Christ Rédempteur depuis Cosme Velho » — la maison est à 10–15 min à pied de la gare du Trem do Corcovado : angle unique et défendable.
- « Se marier à Rio : lieux, saisons, budget » — vise la partie événements, à forte valeur.
- « Que faire à Cosme Velho / Santa Teresa / Laranjeiras ».
- « Day use à Rio : où passer la journée au bord d'une piscine ».

Une bonne partie du contenu existe déjà dans la section « Activités & alentours » de la page Expériences — il s'agit de la déplier en pages autonomes plutôt que d'écrire à partir de rien.

### 3.3 — FAQ + schéma `FAQPage`

Sur Contact, Chambres et Événements : check-in/check-out, parking, transferts aéroport, petit-déjeuner inclus, animaux, capacité, privatisation. Capte les questions posées directement à Google, et réduit le nombre de messages WhatsApp basiques.

### 3.4 — Auto-héberger les polices

`Marcellus` et `Karla` sont chargées depuis Google Fonts : 2 `preconnect` + une requête CSS bloquante avant le premier rendu. Les servir depuis `/fonts/` améliore le LCP (donc les Core Web Vitals) **et** supprime un transfert d'IP vers Google avant consentement — cohérent avec le sérieux déjà mis sur le RGPD ici.

### 3.5 — `lastmod` dans le sitemap

Le commentaire du fichier a raison de refuser la date de build. Mais la vraie date de dernière modification est disponible : `git log -1 --format=%cI -- <fichier>`, à calculer au build, par page.

### 3.6 — Maillage interne

Presque tous les CTA pointent vers `/chambres`. Spa, Expériences et Événements ne se citent pas entre eux. Des liens contextuels croisés (le spa mentionne le day use, les événements mentionnent l'hébergement des invités…) répartissent l'autorité et allongent les sessions.

### 3.7 — Netlinking et citations

- **NAP cohérent** (nom, adresse, téléphone strictement identiques) sur le site, Google Business Profile, Booking, TripAdvisor, Airbnb, Instagram. Toute divergence dilue le signal local.
- Prescripteurs à démarcher : wedding planners de Rio, agences de production (tournages), Fondation Roberto Marinho (voisine), offices de tourisme, blogs voyage francophones et lusophones.
- L'angle « maison de Roberto Bastos Cruz, associé de Niemeyer, où ont chanté Chico Buarque et Maria Bethânia » est un vrai sujet de presse et d'architecture — c'est le meilleur argument pour obtenir des liens éditoriaux, les seuls qui comptent vraiment.

### 3.8 — Mesure

Sans mesure, la stratégie n'est pas pilotable :
- Vérifier que le tag GA4 est bien configuré **dans** GTM (`src/config.ts` porte encore deux ⛑ à traiter côté Google : rétention 14 mois, `cookie_expires` 34128000).
- Déclarer des conversions : clic WhatsApp, clic e-mail, ouverture de l'iframe de réservation NoBeds.
- Search Console : suivre mensuellement les requêtes, le CTR par page et la couverture d'indexation.

---

## 4. Séquencement proposé

| Vague | Contenu | Effort | Impact |
|---|---|---|---|
| **1 — Semaine 1** | **Google Business Profile (§2.1)** — seul point restant · ~~`og:image` (§2.2)~~ ✅ · ~~`alt` (§2.4)~~ ✅ · ~~page 404 (§2.5)~~ ✅ | Faible | Fort |
| **2 — Semaines 2-3** | ~~JSON-LD enrichi et par page (§2.3)~~ ✅ · **décision galerie (§2.6)** · pages par suite (§3.1) | Moyen | Fort |
| **3 — Mois 2** | Contenu éditorial (§3.2) · FAQ (§3.3) · maillage (§3.6) | Fort | Moyen à long terme |
| **4 — Continu** | Avis Google · netlinking (§3.7) · mesure (§3.8) · polices (§3.4) · `lastmod` (§3.5) | Continu | Cumulatif |

Le SEO ne se lit pas avant 3 à 6 mois. Les vagues 1 et 2 se mesurent plus vite (partages sociaux, Google Images, pack local).
