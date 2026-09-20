/* Recherche unifiée — index commun à tous les sites v2. Chaque entrée renvoie vers l'écran précis (hash de route) du bon site.
   Chemins relatifs depuis v2/sites/<site>/ ; les sites sont frères. */
const SITES_RESEAU=[
 {id:'hub',label:'Cameroun numérique',hint:'Hub · comptes · annuaire des sites',group:'Hub',icon:'home',href:'../hub/index.html'},
 {id:'presidence',label:'Présidence de la République',hint:'Institution, actes, agenda',group:'Sites de l’État',icon:'landmark',href:'../presidence/index.html'},
 {id:'sports',label:'Sports et Éducation physique',hint:'Fédérations, licences, stades',group:'Sites de l’État',icon:'trophy',href:'../sports/index.html'},
 {id:'musee',label:'Musée numérique du Cameroun',hint:'Histoire, symboles, peuples',group:'Sites de l’État',icon:'book-open',href:'../musee/index.html'},
 {id:'impots',label:'Impôts — DGI',hint:'Ministère des Finances',group:'Sites de l’État',icon:'receipt',href:'../ministeres/index.html#minfi'},
 {id:'tourisme',label:'Visiter le Cameroun',hint:'Ministère du Tourisme',group:'Sites de l’État',icon:'map',href:'../ministeres/index.html#mintoul'},
 {id:'tresor',label:'Trésor public — Paiements de l’État',hint:'Payer, quittances, frais, signaler un abus',group:'Services transverses',icon:'banknote',href:'../tresor/index.html'},
 {id:'identite',label:'Identité Cameroun',hint:'Connexion unique, première connexion au relais',group:'Services transverses',icon:'fingerprint',href:'../hub/index.html#identite'},
 {id:'relais',label:'Relais locaux',hint:'Mairies, chefferies, commissariats, guichets',group:'Services transverses',icon:'map-pin',href:'../hub/index.html#relais'}
];
const H='../hub/index.html#',T='../tresor/index.html#',M='../musee/index.html#',S='../sports/index.html#',P='../presidence/index.html#';
const E=(group,label,hint,href,icon,keys)=>({group,label,hint,href,icon,keys:keys||''});
const RECHERCHE=[
 // Démarches (hub → besoin)
 E('Démarches','Demander un acte de naissance','BUNEC · gratuit · 48 h',H+'besoin/papiers','id-card','naissance acte etat civil bunec mairie copie'),
 E('Démarches','Renouveler sa carte nationale d’identité','DGSN · 2 800 FCFA',H+'besoin/papiers','id-card','cni carte identite dgsn renouveler perdue'),
 E('Démarches','Obtenir un passeport biométrique','DGSN · 110 000 FCFA · 48 h',H+'besoin/papiers','id-card','passeport voyage biometrique'),
 E('Démarches','Extrait de casier judiciaire','Tribunal · 1 500 FCFA · 72 h',H+'besoin/papiers','scale','casier judiciaire bulletin 3'),
 E('Démarches','Attestation de résidence','Chefferie → mairie · gratuit',H+'besoin/papiers','crown','residence domicile chefferie'),
 E('Démarches','S’inscrire à la Couverture santé universelle','MINSANTE · gratuit',H+'besoin/sante','heart-pulse','csu sante couverture assurance maladie'),
 E('Démarches','Carnet de vaccination numérique','MINSANTE',H+'besoin/sante','heart-pulse','vaccin vaccination carnet pev'),
 E('Démarches','Obtenir son NIU','DGI · gratuit · immédiat',H+'besoin/impots','receipt','niu identifiant unique contribuable impots'),
 E('Démarches','Télédéclarer ses impôts','DGI · IRPP, TVA, IS',H+'besoin/impots','receipt','declaration impot irpp tva is teledeclaration'),
 E('Démarches','Attestation de conformité fiscale','DGI · 48 h',H+'besoin/impots','receipt','conformite fiscale attestation non redevance'),
 E('Démarches','Déclarer une naissance','Mairie · gratuit sous 90 jours',H+'besoin/famille','users','naissance declarer bebe'),
 E('Démarches','Mariage civil','Mairie · publication 30 jours',H+'besoin/famille','users','mariage bans civil'),
 E('Démarches','Résultats du BEPC, probatoire, baccalauréat','OBC',H+'besoin/education','graduation-cap','resultats examen bepc bac probatoire obc gce'),
 E('Démarches','Bourse universitaire','MINESUP',H+'besoin/education','graduation-cap','bourse universite etudiant'),
 E('Démarches','S’immatriculer à la CNPS','e-CNPS · gratuit',H+'besoin/travail','briefcase','cnps retraite securite sociale immatriculation pension'),
 E('Démarches','Concours de la fonction publique','MINFOPRA',H+'besoin/travail','briefcase','concours fonction publique'),
 E('Démarches','Titre foncier','Conservation foncière',H+'besoin/logement','home','titre foncier terrain cadastre'),
 E('Démarches','Permis de construire','Commune · 1 % des travaux',H+'besoin/logement','home','permis construire batir'),
 E('Démarches','Permis de conduire','MINT',H+'besoin/transport','car','permis conduire auto ecole'),
 E('Démarches','Carte grise','MINT · 72 h',H+'besoin/transport','car','carte grise immatriculation vehicule'),
 E('Démarches','Créer une entreprise en 72 h','CFCE · 41 500 FCFA (SARL)',H+'besoin/entreprise','store','creer entreprise cfce sarl societe rccm'),
 E('Démarches','Appels d’offres publics','COLEPS',H+'besoin/entreprise','gavel','marche public appel offre coleps'),
 E('Démarches','Créer une coopérative','MINADER · gratuit',H+'besoin/agriculture','sprout','cooperative agriculture'),
 E('Démarches','Demander un e-Visa','MINREX · 72 h',H+'besoin/international','globe','visa evisa etranger voyage tourisme'),
 E('Démarches','Déposer une plainte','Commissariat · gratuit',H+'besoin/securite','shield','plainte police gendarmerie'),
 E('Démarches','Déclarer une association','Préfecture · gratuit',H+'besoin/securite','landmark','association declarer recepisse'),
 E('Démarches','Activer Identité Cameroun','Gratuit · première connexion au relais',H+'premiere','fingerprint','identite cameroun compte connexion inscription activer'),
 E('Démarches','Licence sportive','Fédération · 72 h · payée au Trésor',S+'licences','trophy','licence sport football club federation'),
 E('Démarches','Écrire au Chef de l’État','Cabinet civil · suivi 48 h',P+'services','mail','courrier president presidence ecrire requete'),
 // Paiements (Trésor)
 E('Payer & frais','Combien coûte… (barème officiel)','25 frais sourcés',T+'frais','search-check','cout prix frais tarif bareme combien'),
 E('Payer & frais','Payer un dossier ou un avis','Mobile Money, carte, guichet',T+'payer/dossier','qr-code','payer paiement mobile money orange mtn carte'),
 E('Payer & frais','Péage routier','500 FCFA véhicule léger',T+'frais/péage','route','peage route autoroute'),
 E('Payer & frais','Timbre fiscal','1 000 – 1 500 FCFA',T+'frais/timbre','receipt','timbre fiscal'),
 E('Payer & frais','Mes paiements et quittances','Journal, relevé annuel',T+'transactions','receipt','quittance recu paiement historique releve'),
 E('Payer & frais','Vérifier une quittance','Par numéro TR-…',T+'accueil','badge-check','verifier quittance authentique'),
 E('Payer & frais','Où va l’argent','Redistribution par bénéficiaire',T+'redistribution','route','transparence redistribution argent budget'),
 E('Payer & frais','Signaler un abus ou une corruption','Identifié ou anonyme · CONAC 1517',T+'signaler','flag','corruption abus signaler denoncer pot de vin anonyme'),
 // Compte
 E('Mon compte','Tableau de bord citoyen','Démarches, documents, échéances',H+'citoyen','user','compte citoyen tableau bord mes documents coffre echeances'),
 E('Mon compte','Compte professionnel','Fiscalité, CNPS, marchés, douanes',H+'pro','building-2','entreprise compte pro professionnel niu salaries douane'),
 E('Mon compte','Se connecter','Clé d’accès, sans mot de passe',H+'connexion','fingerprint','connexion login se connecter mot de passe'),
 // Institutions
 E('Institutions','Annuaire des ministères','42 institutions, rôle et statut',H+'annuaire','landmark','ministere annuaire gouvernement liste'),
 E('Institutions','Présidence de la République','Actes, communiqués, institution',P+'accueil','landmark','presidence president palais unite decret'),
 E('Institutions','Ministère des Finances (MINFI)','Impôts, douanes, Trésor',H+'institution/minfi','receipt','finances minfi'),
 E('Institutions','Ministère de la Santé publique','CSU, hôpitaux, vaccination',H+'institution/minsante','heart-pulse','sante minsante hopital'),
 E('Institutions','Ministère des Sports (MINSEP)','Fédérations, stades',S+'accueil','trophy','sport minsep lions stade'),
 E('Institutions','Arts et Culture (MINAC)','Patrimoine, Musée numérique',H+'institution/minac','book-open','culture minac patrimoine'),
 E('Institutions','Relations extérieures (MINREX)','Consulats, e-Visa',H+'institution/minrex','globe','minrex diplomatie ambassade consulat'),
 // Musée
 E('Musée','Frise chronologique','119 repères, −30 000 → 2025',M+'frise','book-open','histoire frise chronologie date'),
 E('Musée','Indépendance et réunification','1960 · 1961',M+'frise/independance','book-open','independance reunification 1960 1961 ahidjo foncha'),
 E('Musée','Rudolf Duala Manga Bell','Roi des Duala, héros national',M+'personnage/manga-bell','user','manga bell douala heros'),
 E('Musée','Sultan Ibrahim Njoya','Inventeur de l’écriture shümom',M+'personnage/njoya','user','njoya bamoun foumban shumom ecriture'),
 E('Musée','Ruben Um Nyobè','Secrétaire général de l’UPC',M+'personnage/um-nyobe','user','um nyobe upc mpodol'),
 E('Musée','Symboles nationaux','Drapeau, armoiries, hymne, devise',M+'symboles','flag','drapeau armoiries hymne devise symbole paix travail patrie'),
 E('Musée','Régions et peuples','10 régions, 4 aires culturelles',M+'regions','map','region peuple ethnie langue bamileke sawa fang beti'),
 E('Musée','Monuments et lieux','Palais de Foumban, Réunification…',M+'monuments','landmark','monument palais foumban reunification bimbia'),
 E('Musée','Lac Nyos (1986)','Catastrophe et dégazage',M+'frise/unitaire','book-open','nyos lac catastrophe 1986'),
 E('Musée','Lions indomptables','CAN, Italie 90, Sydney 2000',M+'frise/contemporain','trophy','lions indomptables milla eto o can coupe monde'),
 E('Musée','Culture vivante','Musiques, cuisine, lettres, glossaire',M+'culture','music','makossa bikutsi ndole cuisine musique litterature'),
 // Relais
 E('Relais locaux','Mairie / centre d’état civil','Actes, attestations, timbres',H+'relais/mairie','building','mairie commune etat civil'),
 E('Relais locaux','Chefferie traditionnelle','Identité, résidence, conciliation',H+'relais/chefferie','crown','chefferie chef traditionnel village'),
 E('Relais locaux','Commissariat / brigade','CNI, passeport, plaintes',H+'relais/commissariat','shield','commissariat police gendarmerie brigade'),
 E('Relais locaux','Guichet Cameroun numérique','Accompagnement, enrôlement',H+'relais/guichet','monitor','guichet aide accompagnement'),
 E('Aide','Centre d’appel 8100','Gratuit, 7 j/7, FR/EN',H+'besoins','phone','aide contact telephone 8100 assistance'),
 E('Aide','Accessibilité','Taille, contraste, FALC, lecture facilitée',H+'accueil','accessibility','accessibilite handicap malvoyant facile lire falc contraste')
];
const SYN={cni:'carte nationale identite',impot:'impots',taxe:'impots frais',visa:'evisa',bac:'baccalaureat',fac:'universite',boulot:'travail emploi',argent:'payer frais',recu:'quittance',permis:'permis',mariage:'mariage',bebe:'naissance',ecole:'education inscription',retraite:'cnps pension',entreprise:'entreprise creer',corruption:'signaler abus',plainte:'plainte',histoire:'musee frise',president:'presidence',foot:'football sport licence'};
const norm=s=>String(s||'').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[’'`]/g,' ').replace(/[^a-z0-9 ]/g,' ').replace(/\s+/g,' ').trim();
function rechercher(q){const nq=norm(q);if(nq.length<2)return[];const toks=nq.split(' ').flatMap(t=>[t,...(SYN[t]?norm(SYN[t]).split(' '):[])]).filter(Boolean);
  const scored=RECHERCHE.map(e=>{const hay=norm(e.label)+' '+norm(e.hint)+' '+norm(e.keys)+' '+norm(e.group);const lab=norm(e.label);let s=0;toks.forEach(t=>{if(lab.startsWith(t))s+=6;else if(lab.includes(t))s+=4;else if(hay.includes(t))s+=2;});if(hay.includes(nq))s+=5;return{e,s};}).filter(x=>x.s>0).sort((a,b)=>b.s-a.s);
  // ordre des groupes : démarches d'abord, puis paiement, compte, institutions, musée, relais, aide
  const ORDER=['Démarches','Payer & frais','Mon compte','Institutions','Musée','Relais locaux','Aide'];
  return scored.slice(0,12).map(x=>x.e).sort((a,b)=>ORDER.indexOf(a.group)-ORDER.indexOf(b.group));}
/* Routage par hash : "#page/arg" lu au chargement, écrit à chaque navigation. */
function lireHash(){const h=decodeURIComponent((location.hash||'').slice(1));if(!h)return null;const i=h.indexOf('/');return i<0?{page:h,arg:''}:{page:h.slice(0,i),arg:h.slice(i+1)};}
function ecrireHash(page,arg){const h='#'+page+(arg?'/'+encodeURIComponent(arg):'');if(location.hash!==h)history.replaceState(null,'',h);}
/* Champ de recherche de héros : même index, mêmes suggestions groupées que la barre gouvernementale. */
function RechercheGlobale({placeholder='Que cherchez-vous ? ex. acte de naissance, péage, e-Visa…',label='Rechercher sur tous les sites de l’État',onSubmit,style,exemples=[]}){
  const Icon=(window.SystMeDeDesignDeLTatDuCameroun_f51bf6||{}).Icon||(()=>null);
  const [q,setQ]=React.useState('');const [res,setRes]=React.useState([]);const [act,setAct]=React.useState(-1);const [focus,setFocus]=React.useState(false);const ref=React.useRef(null);const box=React.useRef(null);
  React.useEffect(()=>{if(q.trim().length<2){setRes([]);setAct(-1);return;}const t=setTimeout(()=>{setRes(rechercher(q).slice(0,8));setAct(-1);},80);return()=>clearTimeout(t);},[q]);
  React.useEffect(()=>{const c=e=>{if(box.current&&!box.current.contains(e.target))setFocus(false);};const k=e=>{if(e.key==='Escape')setFocus(false);};document.addEventListener('mousedown',c);document.addEventListener('keydown',k);return()=>{document.removeEventListener('mousedown',c);document.removeEventListener('keydown',k);};},[]);
  const go=e=>{if(!e)return;setFocus(false);location.href=e.href;};
  const submit=ev=>{ev.preventDefault();if(act>=0&&res[act])return go(res[act]);if(res[0])return go(res[0]);onSubmit&&onSubmit(q);};
  let i=-1;const gs=[];res.forEach(x=>{const y=gs.find(z=>z.g===x.group);if(y)y.items.push(x);else gs.push({g:x.group,items:[x]});});
  return <div ref={box} style={{position:'relative',...style}}>
    <form role="search" onSubmit={submit} style={{display:'flex',alignItems:'stretch',height:56,background:'var(--surface-card)',border:'2px solid '+(focus?'var(--cm-jaune-500)':'var(--border-input)'),boxSizing:'border-box'}}><span style={{display:'grid',placeItems:'center',paddingLeft:14,color:'var(--text-muted)'}}><Icon name="search" size={20}/></span><input ref={ref} value={q} onChange={e=>setQ(e.target.value)} onFocus={()=>setFocus(true)} onKeyDown={e=>{if(!res.length)return;if(e.key==='ArrowDown'){e.preventDefault();setAct(a=>Math.min(a+1,res.length-1));}else if(e.key==='ArrowUp'){e.preventDefault();setAct(a=>Math.max(a-1,-1));}}} role="combobox" aria-expanded={focus&&res.length>0} aria-controls="rg-results" aria-activedescendant={act>=0?'rg-opt-'+act:undefined} aria-autocomplete="list" aria-label={label} placeholder={placeholder} style={{all:'unset',flex:1,minWidth:0,padding:'0 12px',font:'var(--type-body)',fontSize:'var(--text-lg)',color:'var(--text-body)'}}/>{q&&<button type="button" aria-label="Effacer" onClick={()=>{setQ('');ref.current&&ref.current.focus();}} style={{all:'unset',cursor:'pointer',width:44,display:'grid',placeItems:'center',color:'var(--text-muted)'}}><Icon name="x" size={16}/></button>}<button type="submit" style={{all:'unset',cursor:'pointer',background:'var(--cm-vert-800)',color:'#fff',padding:'0 20px',font:'var(--type-label)',fontWeight:700,display:'inline-flex',alignItems:'center',gap:8}}>{(window.tr||(x=>x))('Rechercher','Search')}</button></form>
    {exemples.length>0&&!focus&&<div style={{display:'flex',gap:8,flexWrap:'wrap',marginTop:12,alignItems:'center'}}><span style={{font:'var(--type-body-sm)',color:'var(--cm-gris-300)'}}>{(window.tr||(x=>x))('Souvent :','Popular:')}</span>{exemples.map(x=><button key={x} type="button" onClick={()=>{setQ(x);setFocus(true);ref.current&&ref.current.focus();}} style={{all:'unset',boxSizing:'border-box',cursor:'pointer',minHeight:32,padding:'0 12px',display:'inline-flex',alignItems:'center',font:'var(--type-caption)',fontWeight:600,color:'#fff',border:'1px solid var(--cm-gris-500)'}}>{x}</button>)}</div>}
    {focus&&q.trim().length>=2&&<div style={{position:'absolute',top:'calc(100% + 6px)',left:0,right:0,background:'var(--surface-card)',color:'var(--text-body)',border:'1px solid var(--border-default)',boxShadow:'var(--shadow-lg)',zIndex:50,maxHeight:'min(60vh,480px)',overflowY:'auto'}}>
      {res.length===0&&<div style={{padding:'14px 16px',font:'var(--type-body-sm)',color:'var(--text-muted)'}}>{(window.tr||(x=>x))('Aucune correspondance directe. Entrée : voir tous les résultats pour','No direct match. Press Enter to see all results for')} « {q} »</div>}
      <ul id="rg-results" role="listbox" style={{margin:0,padding:0,listStyle:'none'}}>{gs.map(gr=><li key={gr.g} role="presentation"><div style={{padding:'10px 16px 4px',font:'var(--type-overline)',letterSpacing:'var(--tracking-caps)',textTransform:'uppercase',color:'var(--text-muted)'}}>{gr.g}</div><ul role="group" style={{margin:0,padding:0,listStyle:'none'}}>{gr.items.map(x=>{i++;const idx=i;return <li key={idx} id={'rg-opt-'+idx} role="option" aria-selected={act===idx}><button type="button" tabIndex={-1} onMouseEnter={()=>setAct(idx)} onClick={()=>go(x)} style={{all:'unset',boxSizing:'border-box',cursor:'pointer',display:'grid',gridTemplateColumns:'20px 1fr',gap:12,alignItems:'center',width:'100%',minHeight:44,padding:'8px 16px',background:act===idx?'var(--surface-brand-soft)':'transparent',borderLeft:'3px solid '+(act===idx?'var(--cm-vert-800)':'transparent')}}><Icon name={x.icon||'arrow-right'} size={16} color="var(--cm-vert-800)"/><span><span style={{font:'var(--type-body-sm)',fontWeight:600,color:'var(--text-heading)',display:'block'}}>{x.label}</span>{x.hint&&<span style={{font:'var(--type-caption)',color:'var(--text-muted)'}}>{x.hint}</span>}</span></button></li>;})}</ul></li>)}</ul>
      <div style={{borderTop:'1px solid var(--border-default)',padding:'8px 16px',display:'flex',justifyContent:'space-between',font:'var(--type-caption)',color:'var(--text-muted)'}}><span>{(window.tr||(x=>x))('↑↓ puis Entrée','↑↓ then Enter')}</span><button type="button" onClick={()=>{setFocus(false);onSubmit&&onSubmit(q);}} style={{all:'unset',cursor:'pointer',color:'var(--cm-vert-800)',fontWeight:600}}>{(window.tr||(x=>x))('Tous les résultats →','All results →')}</button></div>
    </div>}
  </div>;
}
Object.assign(window,{SITES_RESEAU,RECHERCHE,rechercher,lireHash,ecrireHash,normaliser:norm,RechercheGlobale});
