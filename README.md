# Les Jardins de Rio

Site vitrine trilingue (PT-BR / EN / FR) — maison d'hôtes & lieu d'événements à Cosme Velho, Rio de Janeiro.

- **Framework** : [Astro 5](https://astro.build), sortie 100 % statique
- **Hébergement** : GitHub Pages, déploiement automatique à chaque push sur `main`
- **Staging** : https://lomithrani.github.io/lesjardinsderio/
- **Réservation chambres** : NoBeds — moteur de réservation par chambre (`book=1`), ouvert dans un overlay (iframe `Beta`) sur la page Chambres (cf. `nobedsBooking()` dans `src/config.ts`)
- **Contact** : WhatsApp + mailto (pas de backend)

## Développement

```bash
npm install
npm run dev      # prépare les assets puis lance le serveur de dev
npm run build    # prépare les assets puis build de production dans dist/
```

## Photos : un dossier = une collection

Les photos sont organisées en **collections** : un dossier sous `assets-src/`,
lu automatiquement par les carrousels et les cartes du site. **Pour ajouter une
photo à une chambre ou une expérience, il suffit de la déposer dans le bon
dossier** — aucun code à modifier :

```
assets-src/
  rooms/<id de la suite>/      # carrousel de la page Chambres (ex. rooms/presidential-pink/)
  experiences/<clé>/           # carrousel des cartes Expériences (dayuse, workshops, gastronomy)
  spa/<clé>/                   # carrousel des cartes Spa (soins, eau, yoga)
  spaces/<clé>/                # carrousel des espaces sur la Home (lounge, rooftop, janus, piscine, evenementiel)
  photos/                      # photos générales (héros, ambiance, galerie)
```

Mode d'emploi (sans git) : sur GitHub, **naviguer dans le dossier cible**
(ex. `assets-src/rooms/presidential-pink/`) puis « Add file → Upload files ».
⚠ Uploader depuis l'intérieur du dossier — un upload depuis la racine ne préserve
pas l'arborescence.

Conventions :
- les photos d'un dossier sont triées par nom de fichier → préfixer `01-`, `02-`, …
  pour contrôler l'ordre du carrousel ; la première photo sert de couverture ;
- **l'ID d'une photo = son chemin sans extension** (ex. `photos/salon-large`,
  `rooms/presidential-pink/suite-pink`), réutilisable partout via `image(id)`
  (`src/images.ts`) — on référence, on ne duplique jamais un binaire ;
- formats acceptés : jpg, jpeg, png, webp ;
- une collection référencée mais vide **fait échouer le build** (message explicite).

> Note : `presidential-white` n'a pas encore de vraie photo ; en attendant, sa
> couverture est téléchargée au build depuis le CDN du site actuel (fallback dans
> `prepare-assets.mjs`). Déposer une photo dans `assets-src/rooms/presidential-white/`
> rend ce fallback inutile.

### Pipeline d'assets binaires

Le MCP GitHub ne transporte que du texte ; les images suivent donc un canal dédié :

- `assets-src/` — **source de vérité des binaires** (photos, logo, favicon), committée
  dans le repo (voir ci-dessus pour l'ajout).
- `assets-b64/` — canal de secours : fichiers `*.b64` (base64) poussables via le MCP,
  décodés au build (les chemins relatifs y reproduisent les collections).
- `scripts/prepare-assets.mjs` — exécuté automatiquement avant `dev`/`build`
  (`prebuild`/`predev`) : régénère `src/assets/` depuis `assets-src/` et `assets-b64/`
  (+ `public/favicon.png`). Ces destinations sont ignorées par git.

## Mesure d'audience & cookies

Le site ne dépose **aucun cookie** tant que Google Analytics n'est pas activé, et
GA n'est activé qu'après acceptation explicite du visiteur.

**Pour brancher GA4** : coller l'ID de mesure (`G-XXXXXXXXXX`, dans Google
Analytics → Admin → Flux de données → Flux Web) dans `GA_MEASUREMENT_ID`
(`src/config.ts`), **puis régler Admin → Conservation des données sur « 14 mois »** :
c'est la durée annoncée au visiteur par le bandeau, les deux doivent rester
alignées.

Sur les **previews de PR**, le bandeau s'affiche et se manipule normalement mais
tourne **à vide** : aucun GA n'est déclenché derrière (`CONSENT_UI_ENABLED` vs
`ANALYTICS_ENABLED`). C'est ce qui permet de le faire relire avant même que l'ID
de mesure existe. Tant que la chaîne est vide, aucun script Google n'est chargé
et le bandeau ne s'affiche pas. La mesure reste désactivée sur les previews de PR
et en staging (pages `noindex`), pour ne pas polluer les statistiques.

**Ce que fait le dispositif**, une fois l'ID renseigné :

- le `<head>` initialise le **mode Consentement Google (v2)** avec tout en
  `denied` — y compris les signaux publicitaires, jamais utilisés ici ;
- `gtag.js` n'est **pas téléchargé** tant que le visiteur n'a pas cliqué
  « Accepter » (le RGPD exige un consentement *préalable* au dépôt ; la LGPD
  brésilienne est plus souple, le même dispositif couvre les deux) ;
- le bandeau (`src/components/CookieBanner.astro`, textes dans `i18n/ui.ts`)
  propose **Refuser** et **Accepter** avec le même style, la même taille et la
  même place — deux boutons rigoureusement identiques, comme le demande la CNIL ;
- le détail « En savoir plus » nomme le destinataire (Google), le transfert
  possible hors UE, et lie sa politique de confidentialité ; il ne qualifie
  **pas** les données d'« anonymes » (GA4 les rattache à un identifiant
  pseudonyme, qui reste une donnée personnelle au sens du RGPD) ;
- le cookie de mesure est plafonné à **13 mois** et **n'est pas prolongé** à
  chaque visite (`cookie_expires` / `cookie_update`, plafond CNIL — GA4 poserait
  sinon un cookie de 2 ans renouvelé à chaque passage) ;
- le choix est stocké dans `localStorage` (`ljdr-consent`) et **expire au bout de
  6 mois** (recommandation CNIL) : le bandeau est alors reproposé ;
- le lien **« Cookies »** en bas de page rouvre le bandeau à tout moment ;
  refuser après avoir accepté repasse le consentement en `denied` **et efface les
  cookies `_ga` déjà posés**.

## Structure

```
src/
  config.ts          # coordonnées, routes localisées, NoBeds (base Beta + params), STAGING_NOINDEX
  images.ts          # résolution des images par ID / collection (dossier)
  i18n/ui.ts         # textes des pages ×3 langues
  i18n/rooms.ts      # données des 8 suites ×3 langues
  styles/global.css  # design tokens + composants
  components/        # Curve (séparateur signature) + Carousel
  layouts/Base.astro # head SEO + hreflang + header/footer + JSON-LD
  templates/         # 1 template par page logique
  pages/             # pt/ en/ fr/ — pages fines (slugs localisés) + redirection racine
```

## ⛑ Placeholders à remplacer

| Quoi | Où |
|---|---|
| Paramètres du moteur NoBeds | `src/config.ts` → `SITE.NOBEDS_BETA_PARAMS` |
| Domaine définitif | `astro.config.mjs` (`site`, retirer `base`, ajouter `public/CNAME`) + DNS |
| Indexation | `src/config.ts` → `STAGING_NOINDEX = false` au lancement |
| Surfaces suites Red / Garden View | `src/i18n/rooms.ts` |

## Déploiement & vérification automatique

GitHub Pages est configuré en source **« Deploy from a branch » → `gh-pages`**.
`.github/workflows/deploy.yml` publie sur cette branche :

- **push sur `main`** → build déployé à la **racine** de `gh-pages`
  (staging : https://lomithrani.github.io/lesjardinsderio/) ;
- **PR ouverte / mise à jour** → build déployé en preview sur
  `https://lomithrani.github.io/lesjardinsderio/preview/pr-<n°>/`
  (`noindex` forcé) + commentaire automatique sur la PR avec le lien ;
- **PR fermée / mergée** → suppression automatique de sa preview.

Dans tous les cas :

1. **deploy** — install → prepare assets → `astro build` → push sur `gh-pages`.
   Échec = badge rouge.
2. **verify** — chaque page embarque `<meta name="build" content="<sha> <date>">` ;
   ce job attend (retry 3 min) que l'URL cible serve **le SHA du commit**, puis
   vérifie que les pages clés des 3 langues répondent HTTP 200.

**Badge vert = le build passe ET les changements sont réellement en ligne.**

Workflow de contribution : jamais de commit direct sur `main` — branche
`feat/<sujet>` ou `fix/<sujet>`, PR, validation sur la preview, merge.

[![Deploy](https://github.com/lomithrani/lesjardinsderio/actions/workflows/deploy.yml/badge.svg)](https://github.com/lomithrani/lesjardinsderio/actions/workflows/deploy.yml)
