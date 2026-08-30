# Photos du site — mode d'emploi

**Un dossier = un carrousel.** Pour ajouter une photo à une chambre, un espace,
une expérience : déposer le fichier (`.jpg`, `.png`, `.webp`) dans le bon
dossier ci-dessous — rien d'autre à faire, le site se reconstruit tout seul.

Depuis GitHub : naviguer dans le dossier voulu → **Add file → Upload files**.

```
rooms/<id-chambre>/      → carrousel de la chambre (page Chambres + vignette Accueil)
spaces/<espace>/         → carrousel de l'espace événementiel (Accueil)
experiences/<clé>/       → carrousel de la carte Expériences
spa/<clé>/               → carrousel de la carte Spa
photos/                  → photos générales (héros, galerie, sections)
```

**Ordre des photos** : alphabétique → préfixer `01-`, `02-`, `03-`…
La **première** photo du dossier sert de couverture (vignettes de l'Accueil).

## Nomenclature des chambres

⚠️ **Les dossiers portent l'ancien code couleur, pas le nom commercial.** Les noms
ont changé en août 2026 ; les dossiers, eux, n'ont pas bougé — les renommer
casserait toutes les galeries. Pour déposer les photos d'une chambre, se repérer
avec cette table.

| Dossier photos | Nom commercial (site, Booking, Expedia) | Surface | NoBeds | Expedia |
|---|---|---|---|---|
| `rooms/presidential-white/` | Presidential White Suite (Private Terrace) | 65 m² | 2515860 | 200714660 |
| `rooms/luxury-violet/`      | The Amethyst Suite                        | 54 m² | 2515862 | 200719046 |
| `rooms/presidential-pink/`  | The Library Suite (Private Terrace)       | 52 m² | 2515859 | 200817763 |
| `rooms/deluxe-green/`       | The Botanical Suite                       | 37 m² | 2515858 | 324004551 |
| `rooms/master-orange/`      | The Sunset Garden Room (Private Terrace)  | 29 m² | 2515857 | 323606968 |
| `rooms/deluxe-garden/`      | Blue Suite (Private Terrace)              | 22 m² | 2515861 | 200719049 |
| `rooms/deluxe-red/`         | Red Room (Garden View)                    | 18 m² | 2515855 | 323606954 |
| `rooms/luxury-yellow/`      | Maracuja Room (Private Terrace)           | 17 m² | 2515856 | 324004544 |

Les deux pièges de cette table :

- `deluxe-garden` **n'est pas** la Red Room malgré son « Garden View » : c'est la
  **Blue Suite** (linge bleu nuit, ouverture sur le patio). La Red Room, c'est
  `deluxe-red` (plaid rouge, verrière sur la salle de bains).
- `master-orange` et `luxury-violet` ne gardent plus rien d'orange ni de violet
  dans leur nom public — ce sont la Sunset Garden Room et l'Amethyst Suite.

Les noms sont **identiques en portugais, anglais et français** : ce sont des noms
propres, communs à tous les canaux de réservation. Pour les modifier ou changer
une surface : [`src/i18n/rooms.ts`](../src/i18n/rooms.ts), source de vérité unique
(page Chambres, vignettes Accueil, libellés de réservation, balisage SEO).

**Réutiliser une photo ailleurs** : chaque photo a un identifiant = son chemin
sans extension (ex. `rooms/deluxe-green/01-suite-green`). Dans le code :
`image('rooms/deluxe-green/01-suite-green')`. On référence, on ne duplique pas.

Si un dossier de chambre est vide, le build échoue volontairement : une chambre
sans photo est un bug de contenu.

**Crédit photo** : si la photo ajoutée a un auteur à créditer, l'ajouter à
`src/credits.ts` (table `PHOTO_CREDIT`, clé = identifiant de la photo). Le crédit
s'affiche alors automatiquement sur la photo, et la suit partout où elle est
réutilisée.
