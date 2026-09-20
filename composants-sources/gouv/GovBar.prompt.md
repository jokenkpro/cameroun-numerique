Barre gouvernementale commune (ébène, 40 px) placée au-dessus de l'en-tête de chaque site de l'État : bloc-marque, sélecteur « Tous les sites », recherche inter-sites, bouton Accessibilité, FR/EN, connexion « Identité Cameroun ».
```jsx
<GovBar ministry="musee" sites={SITES} onSiteChange={go} onSearch={q=>…} onAccessibility={()=>setA11y(true)} onLogin={login} lang={lang} onLangChange={setLang}/>
```
Toujours suivie du `Header` du site (compact). `user` remplace le bouton de connexion.
