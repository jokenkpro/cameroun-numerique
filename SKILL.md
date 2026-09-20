---
name: cameroun-numerique-design
description: Use this skill to design any site, screen, deck or document for the State of Cameroon's unified digital network "Cameroun numérique" (v2 of the Système de Design de l'État du Cameroun). Contains tokens, React components (GovBar, AccessPanel, Header, Footer…), the pilot site (Musée numérique du Cameroun), finishing rules and content rules.
user-invocable: true
---

Read readme.md first, then: tokens/ (CSS variables; detail.css holds the finishing rules), components/*/​*.prompt.md (usage notes), sites/musee/ (pilot site — copy its shell.jsx pattern for any new ministry site), guidelines/ (foundation cards), dossier-perso/ (owner-only notes; never publish).
Every State site = GovBar + Header(compact, showLogin=false) + content + Toghu strip + Footer. One sign-in only ("Identité Cameroun" in the GovBar). Accessibility panel everywhere; settings persist.
If creating visual artifacts, write static HTML that loads ../../styles.css and ../../_ds_bundle.js. If working on production code, read the rules and reuse the components.
Non-negotiables: 4px tricolour band at the top of every page; textual "République du Cameroun" mark (never redraw the coat of arms); green for action, red for alerts only, yellow for emphasis, bronze-gold #B98A00 for hairline finishing only; square corners; Anybody / Figtree / IBM Plex Mono; FR + EN at parity; WCAG 2.2 AA, 44px targets, visible indigo focus; no emoji; every image credited, every fact sourced, every empty slot says what it awaits and from whom.
