# Sources des composants (référence)

Copie lisible des 33 composants React du langage. Les fichiers portent le suffixe `.txt` (`Button.jsx.txt`, `Button.d.ts.txt`) pour qu’aucun atelier de conception ne les recompile en double ; retirez le suffixe pour les réutiliser :

```bash
find composants-sources -name '*.txt' -exec bash -c 'mv "$1" "${1%.txt}"' _ {} \;
```

À l’exécution, les sites chargent la bibliothèque déjà compilée `_ds_bundle.js` (namespace `window.SystMeDeDesignDeLTatDuCameroun_f51bf6`) ; ces sources servent à lire, auditer et adapter.

Groupes : core (Button, IconButton, Icon, Badge, Tag, Card), forms (Field, Input, Textarea, Select, Checkbox, Radio, RadioGroup, Switch), feedback (Alert, Dialog, Toast, Tooltip), navigation (Header, Footer, Breadcrumb, Tabs, Accordion), data (Table, Stat, Stepper, Timeline, Pagination), communaute (VoteCard, SearchBar), gouv (GovBar, AccessPanel).
