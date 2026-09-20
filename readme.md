# Cameroun numérique

**Langage de conception commun pour les sites de l’État du Cameroun.** Prototype de recherche et d’intérêt public : maquettes cliquables, bilingues FR/EN, accessibles, avec un compte unique et un guide de mise en œuvre.

- **Démonstration en ligne** : https://jokenkpro.github.io/cameroun-numerique/
- **Auteur** : Johan Kenneth Nken — jokenkpro@gmail.com
- **Licence** : [CC BY-NC-SA 4.0](LICENSE) — attribution obligatoire, **usage commercial interdit** sans accord écrit, partage à l’identique. Mention à recopier : [NOTICE.md](NOTICE.md).
- **Statut** : travail indépendant, **non affilié** au Gouvernement de la République du Cameroun. Les contenus, chiffres et dossiers sont des données de démonstration ; les barèmes et textes cités doivent être validés par les administrations concernées.

## Lancer en local

```bash
git clone https://github.com/jokenkpro/cameroun-numerique.git && cd cameroun-numerique
python3 -m http.server 8080      # puis ouvrir http://localhost:8080/
```

Aucune installation : HTML + React via CDN, bibliothèque de composants pré-compilée (`_ds_bundle.js`).

## Publier (GitHub Pages)

```bash
./publier.sh                     # init, commit, push sur main
# Settings → Pages → Deploy from a branch → main / (root)
```

## Réutilisation

Crédit exigé partout où un élément est repris (interface, documentation, présentation) :

> Cameroun numérique — Johan Kenneth Nken (https://github.com/jokenkpro/cameroun-numerique), sous licence CC BY-NC-SA 4.0.

Usage commercial, institutionnel ou rémunéré : accord écrit préalable — jokenkpro@gmail.com.

Éléments non couverts par la licence : symboles de l’État, photographies (Unsplash, Wikimedia Commons — crédits affichés), polices (SIL OFL), bibliothèques tierces (MIT, BSD).

---

## Le projet

Réseau unifié des sites de l’État du Cameroun. La v2 repart de zéro : un dossier autonome (`v2/`), ses propres fondations (`v2/styles.css`, `v2/tokens/`), un hub central, des sites de ministères construits sur un même gabarit, un musée numérique encyclopédique, et une documentation destinée au public et aux équipes. Elle n’hérite rien de la v1 (`ui_kits/`, `guidelines/`), conservée telle quelle pour comparaison.

## Ce que voit le citoyen

- **Une seule barre en haut de tous les sites** : « République du Cameroun · Cameroun numérique », panneau « Ministères & services » (hub · sites de l’État · services transverses, site courant marqué), recherche unifiée avec suggestions groupées (démarches, frais, compte, institutions, musée, relais, aide) qui ouvrent l’écran précis du bon site, Accessibilité, FR/EN, un seul bouton **Identité Cameroun**.
- **Recherche unifiée** : index commun `v2/sites/recherche.jsx` (≈ 70 entrées, synonymes, sans accents), même composant dans la barre et dans les héros ; routes par hash `#page/arg` sur chaque site ; page de résultats groupés dans le hub.
- **Un compte unique** avec deux contextes : *citoyen* (démarches, documents, famille, santé, échéances, préférences d’accessibilité synchronisées) et *professionnel* (fiscalité, salariés & CNPS, marchés publics, licences, délégation d’accès, douanes).
- **Des sites prévisibles** : même en-tête compact, même pied de page avec annuaire, mêmes composants, même ton. Changer de ministère ne change ni la navigation ni les gestes.
- **Un panneau d’accessibilité** partout : taille du texte, contraste renforcé, espacement, police Atkinson Hyperlegible, version facile à lire (FALC), liens renforcés, animations réduites. Réglages conservés d’un site à l’autre.

## Sites de la v2

| Dossier | Site | Statut |
|---|---|---|
| `v2/sites/musee/` | Musée numérique du Cameroun (site pilote, rattaché aux Arts et à la Culture) | livré |
| `v2/sites/hub/` | Cameroun numérique — hub, démarches par besoin, annuaire de 42 institutions, Identité Cameroun, comptes citoyen & professionnel, communauté | livré |
| `v2/sites/tresor/` | Trésor public — Paiements de l’État : frais, paiement, quittances tracées, redistribution, signalement d’abus | livré |
| `v2/sites/presidence/` · `v2/sites/sports/` | Présidence de la République · Sports et Éducation physique — gabarit commun `v2/sites/ministere-shell.jsx` | livrés |
| `v2/sites/ministeres/` | Gabarit commun bilingue des 40 institutions (`#<id>/<page>`), images contextuelles, démarches avec coût et délai | livré |
| `v2/sites/<ministere>/` | 12 ministères × 3 écrans (Présidence, Premier ministre, Santé, Éducation, Enseignement supérieur, Sports, Relations extérieures, Arts et Culture, Transports, État civil, Travail/CNPS, Agriculture) | lot 1, à venir |
| `v2/docs/` | Documentation visuelle du système, poster, guide par public, deux présentations FR/EN | lot 2 |

## Fondations (v2/tokens)

Mêmes familles de couleurs, de type et d’espacement qu’en v1, plus `detail.css` : filets 1 px, filet tricolore 48 × 3 px sous chaque titre de section, marqueurs de frise 12 px alignés sur une ligne de 2 px, chiffres tabulaires partout, mesure 58–65 ch, aucun texte translucide, gradient de protection photo à 72 %.

Règles de finition (« sens du détail ») :
1. Tout élément répété est aligné sur une grille : marqueurs, dates, filets, badges.
2. Un seul appel à l’action primaire par écran ; les autres sont secondaires ou tertiaires.
3. Chaque image porte un crédit ; chaque fait porte une source ; chaque emplacement vide dit ce qu’il attend et de qui.
4. Les états vides, d’erreur et de chargement sont dessinés, pas improvisés.
5. Les nombres se lisent en colonne (tabulaires, alignés à droite) ; les dates en mono.
6. Rien ne dépend de la couleur seule : forme, mot ou icône l’accompagnent.

## Contenu

Vouvoiement ; verbe d’action + objet dans les boutons ; coût et délai en première ligne ; FR et EN à égalité ; aucun emoji ; références en mono. Le musée cite ses sources à chaque repère ; les sujets sensibles sont réservés à une salle « Mémoires » ultérieure (voir `v2/dossier-perso`).

## Composants

La v2 consomme la bibliothèque compilée du projet (`_ds_bundle.js`, namespace `SystMeDeDesignDeLTatDuCameroun_f51bf6`). Communs à tous les sites : GovBar, AccessPanel, Header (`showLogin={false}`), Footer, SearchBar, Stat, Stepper, Table, Timeline, Pagination, Card, Badge, Tag, Button, IconButton, Icon, Field, Input, Textarea, Select, Checkbox, Radio, RadioGroup, Switch, Alert, Dialog, Toast, ToastStack, Tooltip, Accordion, Breadcrumb, Tabs, VoteCard.

## Ouvrir la v2 dans un nouveau projet
Copier le contenu du dossier `v2/` à la racine d'un nouveau projet Claude Design (type design system), puis copier le dossier `components/` de ce projet à côté (il n'est pas dupliqué ici pour éviter un double export dans le bundle compilé). Tout y est relatif : `styles.css`, `tokens/`, `components/`, `guidelines/`, `sites/`, `thumbnail.html`, `SKILL.md`. Les pages chargent `_ds_bundle.js` à la racine v2 et, à défaut (tant que la v2 vit dans ce projet), celui du projet parent. Le namespace compilé pourra changer : mettre à jour la constante `__NS` dans `sites/musee/shell.jsx` et les cartes `components/*/*.card.html` selon `check_design_system`.

## Index des fichiers

- `v2/readme.md` — ce document.
- `v2/styles.css` → `v2/tokens/` (fonts, colors, typography, spacing, shape, motion, semantic, motifs, a11y, base, detail).
- `components/` (racine du projet parent) — à copier tel quel dans le nouveau projet : core, forms, feedback, navigation, data, communaute, gouv.
- `v2/guidelines/` — cartes Fondations (gabarit d'un site d'État, finitions).
- `v2/thumbnail.html`, `v2/SKILL.md`.
- `v2/sites/responsive.css` — règles responsives et rythme des sections, communes à tous les sites.
- `v2/sites/recherche.jsx` — index de recherche unifié, routage par hash, champ de recherche de héros.
- `v2/sites/commun.jsx` — langue FR/EN (`useLang`, `tr`), liste des 40 ministères (noms FR/EN, images), mentions légales FR/EN (7 pages), `footerProps` (pied de page standard, version du langage).
- `v2/sites/legal.jsx` — page des mentions dans le hub (`#legal/<id>`).
- `v2/sites/traduction.jsx` + `v2/sites/dict/` — traduction FR/EN à l’exécution (≈ 600 entrées) ; les textes écrits avec `tr()` s’en passent.
- Institutions de poids ≥ 4 : « âme » propre dans `v2/sites/ministeres/app.jsx` (AME : accent, devise de service, chiffres clés, service signature) sur le gabarit commun.
- Compte citoyen : coffre unique (documents de l’État / données très personnelles avec confirmation par clé d’accès), messagerie sécurisée par ministère.
- `v2/sites/ministere-shell.jsx` — gabarit commun des sites de ministère (Shell, Hero, Row, Photo, Garde).
- `v2/sites/hub/`, `v2/sites/tresor/`, `v2/sites/musee/`, `v2/sites/presidence/`, `v2/sites/sports/` — un README et un index.html cliquable chacun.
- `v2/dossier-perso/` — notes réservées au porteur du projet.

## Licence et crédits

© 2026 Johan Kenneth Nken. Code, contenus et maquettes sous [CC BY-NC-SA 4.0](LICENSE). Voir [NOTICE.md](NOTICE.md) pour la mention d’attribution et [LICENSE](LICENSE) pour les exceptions (symboles de l’État, photographies, polices, bibliothèques).

Photographies : Edouard Tamba, Christian Aime Nanga, Ariel Nathan Ada Mbita, Youssouf Nchetkou Ndam (Unsplash) ; Wikimedia Commons (domaine public / CC BY-SA, crédits affichés dans l’interface).
