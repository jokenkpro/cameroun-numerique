Indicateur de progression d'un parcours administratif (formulaire multi-étapes, télédéclaration) ; utiliser dès qu'une démarche dépasse 2 écrans.
```jsx
<Stepper current={2} steps={[{label:'Identité',hint:'NIU, raison sociale'},'Revenus','Paiement','Reçu']}/>
```
Props : `orientation="vertical"` pour une barre latérale ; les étapes passées reçoivent une coche, l'étape active est en gras et `aria-current="step"`.
