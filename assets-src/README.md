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

Les dossiers suivent le nom commercial (renommés en septembre 2026 ; les anciens
codes couleur sont rappelés ci-dessous pour s'y retrouver dans l'historique).
Les photos d'un dossier se nomment `NN-<dossier>.jpg` (`01-library.jpg`, …).

| Dossier photos | Nom commercial (site, Booking, Expedia) | Surface | NoBeds | Expedia | Ancien dossier |
|---|---|---|---|---|---|
| `rooms/presidential-white/` | Presidential White Suite (Private Terrace) | 65 m² | 2515860 | 200714660 | *(inchangé)* |
| `rooms/amethyst/`           | The Amethyst Suite                        | 54 m² | 2515862 | 200719046 | `luxury-violet` |
| `rooms/library/`            | The Library Suite (Private Terrace)       | 52 m² | 2515859 | 200817763 | `presidential-pink` |
| `rooms/botanical/`          | The Botanical Suite                       | 37 m² | 2515858 | 324004551 | `deluxe-green` |
| `rooms/sunset-garden/`      | The Sunset Garden Room (Private Terrace)  | 29 m² | 2515857 | 323606968 | `master-orange` |
| `rooms/corcovado/`          | The Corcovado Room                        | 22 m² | 2515861 | 200719049 | `deluxe-garden` (ex-Blue Suite) |
| `rooms/red/`                | Red Room (Garden View)                    | 18 m² | 2515855 | 323606954 | `deluxe-red` |
| `rooms/maracuja/`           | Maracuja Room (Private Terrace)           | 17 m² | 2515856 | 324004544 | `luxury-yellow` |

Renommer un dossier impose de changer l'`id` correspondant dans
[`src/i18n/rooms.ts`](../src/i18n/rooms.ts) : l'id de la chambre EST le nom du dossier.

Les noms sont **identiques en portugais, anglais et français** : ce sont des noms
propres, communs à tous les canaux de réservation. Pour les modifier ou changer
une surface : [`src/i18n/rooms.ts`](../src/i18n/rooms.ts), source de vérité unique
(page Chambres, vignettes Accueil, libellés de réservation, balisage SEO).

**Recadrer une photo sans la retoucher** : `crops.json` (à la racine de ce
dossier) déclare, par identifiant, des pixels à retirer par bord
(`{ "photos/x": { "right": 21 } }`) ; le recadrage est appliqué au build, le
fichier source reste intact. Supprimer l'entrée quand un original propre est déposé.

**Réutiliser une photo ailleurs** : chaque photo a un identifiant = son chemin
sans extension (ex. `rooms/botanical/01-botanical`). Dans le code :
`image('rooms/botanical/01-botanical')`. On référence, on ne duplique pas.

Si un dossier de chambre est vide, le build échoue volontairement : une chambre
sans photo est un bug de contenu.

**Crédit photo** : si la photo ajoutée a un auteur à créditer, l'ajouter à
`src/credits.ts` (table `PHOTO_CREDIT`, clé = identifiant de la photo). Le crédit
s'affiche alors automatiquement sur la photo, et la suit partout où elle est
réutilisée.
