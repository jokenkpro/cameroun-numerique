Radio group with legend; use RadioGroup, not bare Radio.
```jsx
<RadioGroup name="type" legend="Type de document" value={v} onChange={setV} options={[{value:'extrait',label:'Extrait'},{value:'copie',label:'Copie intégrale',hint:'Nécessite une pièce d’identité'}]} />
```