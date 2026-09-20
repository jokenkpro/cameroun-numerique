Tableau de données (échéances fiscales, historique de paiements, liste de dossiers) ; toujours avec une `caption` pour les lecteurs d'écran.
```jsx
<Table caption="Échéances" columns={[{key:'ref',label:'Référence',mono:true},{key:'impot',label:'Impôt'},{key:'montant',label:'Montant',align:'right',mono:true},{key:'etat',label:'État',render:v=><Badge status={v==='Payé'?'success':'warning'}>{v}</Badge>}]} rows={rows}/>
```
`dense` pour les back-offices ; montants et références en mono, alignés à droite.
