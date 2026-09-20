# Dossier personnel — v2 (non publié sur les sites)

Notes destinées au porteur du projet ; à ne pas intégrer aux sites publics.

## Sujets sensibles écartés du Musée numérique (à explorer plus tard, avec un comité scientifique)
- Guerre d'indépendance et répression du maquis UPC (1955–1971), bilan humain contesté ; exécution d'Ernest Ouandié (15 janvier 1971) ; assassinat de Félix Moumié à Genève (1960). Sources : Deltombe/Domergue/Tatsitsa, *Kamerun !* (2011) ; rapport de la commission franco-camerounaise d'historiens (2025).
- Tentative de coup d'État du 6 avril 1984.
- Émeutes de février 2008 ; révision constitutionnelle de 2008.
- Insurrection de Boko Haram dans l'Extrême-Nord (depuis 2013–2014).
- Crise dans les régions du Nord-Ouest et du Sud-Ouest (depuis 2016) ; Grand Dialogue national (2019) ; statut spécial.
- Contentieux électoraux (1992, 2018).
- Travail forcé sous mandat français et exactions coloniales allemandes (traités frontalement dans la frise seulement via Manga Bell et Samba, et la mention du chemin de fer).
- Traite négrière à Bimbia : présent comme lieu de mémoire, sans développement.

Proposition : une salle « Mémoires » à accès explicite, textes validés par des historiens des deux langues, sources primaires, ton factuel.

## Recherche UX — filtres de la frise (résumé)
- Mémoire de travail ≈ 4 éléments (Cowan, révision de Miller) → premier choix limité à 6 époques + « toutes ».
- Divulgation progressive (Nielsen 2006, Tidwell 2005) : ≤ 3 niveaux ; niveau 1 époque, niveau 2 profondeur + recherche, niveau 3 facettes repliées.
- Navigation à facettes (Hearst, Flamenco) : compteurs par valeur, valeurs vides désactivées, filtres actifs résumés et retirables en un clic.
- Novices / experts : curseur « Essentiel / Approfondi / Complet » (25 / 45 / 54 repères) au lieu d'un seul niveau de détail.
- Orientation : rail de siècle collant à gauche, couleur = époque, forme = type, contour = tragique.
- Accessibilité : rôles tablist/radiogroup/group, compteurs en aria-live, cibles ≥ 32 px (chips) et 44 px (boutons), aucun sens porté par la couleur seule.

## À fournir par l'État
Armoiries (SVG officiel), enregistrement de l'hymne, portraits d'archives, photos MINAC/MINTOUR, fichiers de polices auto-hébergés, liste officielle des ministères (décret d'organisation du gouvernement en vigueur).

## Retours intégrés (site musée, dernière itération)
- Espace au-dessus de Valeurs et de la Bibliographie : marge 80 px + bande toghu.
- Photographies : Wikimedia Commons (Manga Bell, Njoya, Um Nyobè, Ahidjo ; palais de Foumban, Monument de la Réunification, Nouvelle Liberté, stade Ahidjo), licence affichée ; portraits manquants → cartouche monogramme sur motif ndop (jamais de visage inventé).
- Âme camerounaise formelle : épigraphe de l'hymne en ouverture, numérotation romaine or des sections, filets or #B98A00, bande toghu comme séparateur, fiche héraldique des armoiries.

## Organisation des lots (rappel des décisions)
Lot 1 : hub Cameroun numérique (par besoin citoyen puis ministère), comptes citoyen & professionnel (Identité Cameroun), 12 ministères × 3 écrans. Lot 2 : documentation visuelle du système + poster, guide-site par public, 2 présentations 16:9 FR/EN (~12 slides). Lot 3 : CMS d'État (vue personnel de ministère), architecture d'intégration.
