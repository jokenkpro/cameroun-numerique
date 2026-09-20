State header: 4px tricolour band, "République du Cameroun" block + service name, search, FR/EN toggle, login or user chip, optional main nav row.
```jsx
<Header serviceName="Portail des services publics" tagline="Vos démarches, en ligne" onSearch={q=>…} lang="FR" onLangChange={setLang} nav={[{value:'demarches',label:'Démarches'}]} active="demarches" />
```