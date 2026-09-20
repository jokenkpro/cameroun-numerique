// Trésor public — Paiements de l'État. Données de démonstration.
const MOYENS=[{id:'momo',nom:'MTN Mobile Money',icon:'smartphone',frais:'0 FCFA (pris en charge par l’État)',delai:'Immédiat',note:'Numéro marchand unique 8100'},{id:'om',nom:'Orange Money',icon:'smartphone',frais:'0 FCFA',delai:'Immédiat',note:'Numéro marchand unique 8100'},{id:'carte',nom:'Carte bancaire (GIMAC, Visa, Mastercard)',icon:'credit-card',frais:'0 FCFA',delai:'Immédiat',note:'3-D Secure'},{id:'virement',nom:'Virement bancaire',icon:'building',frais:'Selon banque',delai:'24 – 48 h',note:'Référence de paiement obligatoire'},{id:'guichet',nom:'Espèces au guichet du Trésor ou de la banque partenaire',icon:'banknote',frais:'0 FCFA',delai:'Immédiat',note:'Présenter le QR du dossier ; quittance imprimée et numérique'},{id:'cheque',nom:'Chèque certifié',icon:'file-text',frais:'Selon banque',delai:'48 – 72 h',note:'Entreprises et montants élevés'},{id:'campost',nom:'Mandat CAMPOST',icon:'mail',frais:'Selon barème postal',delai:'24 h',note:'Zones sans agence bancaire'}];
const CATS=['Tous','Timbres & actes','Impôts & taxes','Péages & transports','Frais de procédure','Santé','Éducation','Amendes','Douanes'];
const FRAIS=[
 {cat:'Timbres & actes',t:'Timbre fiscal (acte administratif)',m:'1 000 – 1 500 FCFA',ref:'CGI art. 470',b:'MINFI'},
 {cat:'Timbres & actes',t:'Carte nationale d’identité',m:'2 800 FCFA',ref:'Décret 2016/375',b:'DGSN'},
 {cat:'Timbres & actes',t:'Passeport biométrique',m:'110 000 FCFA',ref:'Décret 2021/060',b:'DGSN'},
 {cat:'Timbres & actes',t:'Copie d’acte d’état civil (timbre communal)',m:'200 – 1 000 FCFA selon commune',ref:'Délibération communale',b:'Commune'},
 {cat:'Impôts & taxes',t:'Impôt sur le revenu des personnes physiques',m:'Barème progressif 10 – 35 %',ref:'CGI art. 69',b:'DGI'},
 {cat:'Impôts & taxes',t:'TVA',m:'19,25 %',ref:'CGI art. 142',b:'DGI'},
 {cat:'Impôts & taxes',t:'Taxe foncière',m:'0,1 % de la valeur',ref:'CGI art. 577',b:'DGI'},
 {cat:'Impôts & taxes',t:'Patente',m:'Selon chiffre d’affaires',ref:'CGI art. 159',b:'DGI / Commune'},
 {cat:'Péages & transports',t:'Péage routier — véhicule léger',m:'500 FCFA',ref:'Arrêté MINTP',b:'MINTP'},
 {cat:'Péages & transports',t:'Péage routier — poids lourd',m:'1 000 – 2 000 FCFA',ref:'Arrêté MINTP',b:'MINTP'},
 {cat:'Péages & transports',t:'Pesage — surcharge (par tonne)',m:'Selon barème',ref:'Règlement CEMAC 04/01',b:'MINTP'},
 {cat:'Péages & transports',t:'Carte grise',m:'Selon puissance fiscale',ref:'CGI art. 596',b:'MINT / DGI'},
 {cat:'Péages & transports',t:'Visite technique — véhicule léger',m:'Selon centre agréé',ref:'Arrêté MINT',b:'MINT'},
 {cat:'Frais de procédure',t:'Casier judiciaire (bulletin n° 3)',m:'1 500 FCFA',ref:'Timbre',b:'MINJUSTICE'},
 {cat:'Frais de procédure',t:'Permis de construire',m:'1 % du coût des travaux',ref:'Loi 2004/003',b:'MINHDU / Commune'},
 {cat:'Frais de procédure',t:'Création d’entreprise (SARL) au CFCE',m:'41 500 FCFA',ref:'Arrêté MINPMEESA',b:'CFCE'},
 {cat:'Frais de procédure',t:'Licence d’import-export',m:'15 000 FCFA',ref:'Arrêté MINCOMMERCE',b:'MINCOMMERCE'},
 {cat:'Frais de procédure',t:'e-Visa',m:'50 000 – 100 000 FCFA',ref:'Décret 2023',b:'MINREX'},
 {cat:'Santé',t:'Consultation — hôpital de district',m:'600 – 2 000 FCFA',ref:'Grille tarifaire MINSANTE',b:'MINSANTE'},
 {cat:'Santé',t:'Carnet de santé',m:'500 FCFA',ref:'Grille MINSANTE',b:'MINSANTE'},
 {cat:'Éducation',t:'Frais d’inscription — lycée public',m:'7 500 FCFA',ref:'Arrêté MINESEC',b:'MINESEC'},
 {cat:'Éducation',t:'Droits universitaires — université d’État',m:'50 000 FCFA',ref:'Décret 93/027',b:'MINESUP'},
 {cat:'Éducation',t:'Inscription au baccalauréat',m:'Selon session',ref:'OBC',b:'MINESEC'},
 {cat:'Amendes',t:'Amende forfaitaire — code de la route',m:'Selon classe',ref:'Code de la route 2021',b:'MINT / DGSN'},
 {cat:'Douanes',t:'Droits de douane — tarif extérieur commun',m:'5 – 30 %',ref:'TEC CEMAC',b:'DGD'}
];
const TRANSACTIONS=[
 {id:'TR-2026-0915-88213',date:'15 sept. 2026 · 09:12',t:'Péage de Nkometou (Yaoundé – Obala)',b:'MINTP',m:500,moyen:'Orange Money',statut:'Réglé',hash:'9f3a…c21e',red:['Fonds routier 70 %','Commune 20 %','Trésor 10 %']},
 {id:'TR-2026-0912-77104',date:'12 sept. 2026 · 16:40',t:'Timbre — copie d’acte de naissance (Amadou)',b:'Commune de Douala 1er',m:500,moyen:'MTN Mobile Money',statut:'Réglé',hash:'71bd…08aa',red:['Commune 100 %']},
 {id:'TR-2026-0902-51230',date:'2 sept. 2026 · 11:05',t:'Renouvellement CNI',b:'DGSN',m:2800,moyen:'Carte bancaire',statut:'Réglé',hash:'e04c…f7d9',red:['DGSN — production 80 %','Trésor 20 %']},
 {id:'TR-2026-0315-00193',date:'15 mars 2026 · 08:58',t:'IRPP 2025 — solde',b:'DGI',m:184000,moyen:'Virement bancaire',statut:'Réglé',hash:'2ac9…13b7',red:['Budget de l’État 100 %']},
 {id:'TR-2026-0920-00001',date:'20 sept. 2026',t:'Inscription CSU — Sarah',b:'MINSANTE',m:0,moyen:'—',statut:'Gratuit',hash:'44e1…9b0c',red:['—']},
 {id:'TR-2026-0918-90311',date:'18 sept. 2026 · 14:22',t:'Frais d’inscription lycée — Amadou',b:'MINESEC',m:7500,moyen:'MTN Mobile Money',statut:'En attente de confirmation',hash:'—',red:['Établissement 60 %','MINESEC 40 %']}
];
const REDIST=[['Budget général de l’État','Impôts, droits, amendes','MINFI — Direction du Trésor'],['Fonds routier','Péages, pesage, taxes à l’essieu','MINTP / MINT'],['Communes et régions','Timbres communaux, patente (part), taxes locales','MINDDEVEL / FEICOM'],['Établissements publics','Hôpitaux, universités, lycées','MINSANTE, MINESUP, MINESEC'],['Caisses de sécurité sociale','Cotisations','CNPS'],['Organismes de production','CNI, passeports, cartes grises','DGSN, MINT']];
const SIGNALEMENTS_TYPES=['Frais demandés hors barème','Paiement exigé en espèces sans quittance','Lenteur conditionnée à un « geste »','Favoritisme ou passe-droit','Détournement, double facturation','Menace ou intimidation','Autre'];
Object.assign(window,{MOYENS,CATS,FRAIS,TRANSACTIONS,REDIST,SIGNALEMENTS_TYPES});
