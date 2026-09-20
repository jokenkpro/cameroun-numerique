Modal panel with tricolour band, square corners, grey footer for actions. Esc + backdrop close.
```jsx
<Dialog open={o} onClose={()=>setO(false)} title="Confirmer l’envoi" footer={<><Button variant="secondary">Annuler</Button><Button>Envoyer</Button></>}>Votre dossier sera transmis à la mairie de Yaoundé 3e.</Dialog>
```