Panneau latéral d'accessibilité (taille du texte, contraste renforcé, espacement, police Atkinson Hyperlegible, FALC, liens soulignés, animations réduites) ; réglages persistés dans localStorage et appliqués à <html>. Ouvrir depuis le bouton « Accessibilité » de la GovBar.
```jsx
const [a,setA]=React.useState(false);
React.useEffect(()=>applyA11y(readA11y()),[]);
<GovBar onAccessibility={()=>setA(true)}/>
<AccessPanel open={a} onClose={()=>setA(false)} onChange={p=>setFalc(p.falc)}/>
```
Lire `prefs.falc` pour afficher la version « facile à lire » d'une page.
