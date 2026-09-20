const __NS=window.SystMeDeDesignDeLTatDuCameroun_f51bf6||{};const {Header,Footer}=__NS;
const GovBar=__NS.GovBar||(()=>null);const AccessPanel=__NS.AccessPanel||(()=>null);const applyA11y=__NS.applyA11y||(()=>{});const readA11y=__NS.readA11y||(()=>({falc:false}));
const OR='#B98A00';
const SITES=window.SITES_RESEAU||[];
const LINKS={hub:'../hub/index.html',presidence:'../presidence/index.html',sports:'../sports/index.html',tresor:'../tresor/index.html',musee:'../musee/index.html',impots:'../ministeres/index.html#minfi',tourisme:'../ministeres/index.html#mintoul'};
const NAVF=()=>[{value:'accueil',label:tr('Accueil','Home')},{value:'besoins',label:tr('Démarches par besoin','Services by need')},{value:'annuaire',label:tr('Ministères & services','Ministries & services')},{value:'relais',label:tr('Relais locaux','Local desks')},{value:'identite',label:'Identité Cameroun'},{value:'communaute',label:tr('Communauté','Community')}];
const Container=({children,style})=><div style={{maxWidth:'var(--container-lg)',margin:'0 auto',padding:'0 var(--gutter)',boxSizing:'border-box',width:'100%',...style}}>{children}</div>;
const ROMAN=['I','II','III','IV','V','VI','VII','VIII','IX','X'];
const Overline=({children,color='var(--accent-laterite)',num,style})=><div style={{font:'var(--type-overline)',letterSpacing:'var(--tracking-caps)',textTransform:'uppercase',color,display:'flex',alignItems:'center',gap:10,flexWrap:'wrap',...style}}>{num!=null&&<span style={{fontFamily:'var(--font-display)',fontWeight:700,color:OR}}>{ROMAN[num-1]||num}</span>}{num!=null&&<span aria-hidden="true" style={{width:20,height:1,background:OR}}/>}<span>{children}</span></div>;
const SectionTitle=({children,overline,action,id,level=2,num,top})=><div id={id} style={{marginBottom:'var(--space-6)',marginTop:top?'var(--space-20)':0,display:'flex',alignItems:'flex-end',justifyContent:'space-between',gap:16,flexWrap:'wrap',scrollMarginTop:100}}><div>{overline&&<Overline num={num} style={{marginBottom:6}}>{overline}</Overline>}{level===1?<h1 style={{font:'var(--type-h2)'}}>{children}</h1>:<h2 style={{font:'var(--type-h3)'}}>{children}</h2>}<div aria-hidden="true" style={{height:'var(--rule-title)',width:'var(--rule-title-w)',background:'var(--brand-band)',marginTop:10}}/></div>{action}</div>;
const Star=({size=12,color=OR})=><svg viewBox="0 0 100 100" width={size} height={size} aria-hidden="true"><polygon fill={color} points="50,5 61.8,38.2 96.6,38.2 68.4,58.8 79.4,92 50,71.4 20.6,92 31.6,58.8 3.4,38.2 38.2,38.2"/></svg>;
const Ornement=({style})=><div aria-hidden="true" style={{display:'grid',gridTemplateColumns:'1fr auto 1fr',alignItems:'center',gap:16,...style}}><span style={{height:1,background:'linear-gradient(90deg,transparent,'+OR+')'}}/><Star/><span style={{height:1,background:'linear-gradient(90deg,'+OR+',transparent)'}}/></div>;
const instOf=id=>INSTITUTIONS.find(i=>i.id===id);
const STATUT={livré:'success','gabarit commun':'info',maquette:'info','à venir':'neutral'};
/* Ligne d'action : verbe + objet, ministère en gris, chevron. Hauteur 44 px minimum (cible tactile). */
const Row=({title,meta,right,onClick,icon,style})=><button type="button" onClick={onClick} style={{all:'unset',boxSizing:'border-box',cursor:'pointer',display:'grid',gridTemplateColumns:(icon?'20px ':'')+'1fr auto 16px',gap:14,alignItems:'center',width:'100%',minHeight:44,padding:'10px 12px',borderBottom:'var(--hairline)',textAlign:'left',...style}}>{icon&&<__NS.Icon name={icon} size={18} color="var(--cm-vert-800)"/>}<span style={{minWidth:0}}><span style={{font:'var(--type-label)',fontWeight:600,color:'var(--text-heading)',display:'block'}}>{title}</span>{meta&&<span style={{font:'var(--type-caption)',fontWeight:500,color:'var(--text-muted)'}}>{meta}</span>}</span><span style={{font:'var(--type-caption)',color:'var(--text-muted)',textAlign:'right'}}>{right}</span><__NS.Icon name="chevron-right" size={16} color="var(--text-subtle)"/></button>;
function Shell({page,go,falc,setFalc,user,setUser,children}){
  const [lang,setLang]=useLang();
  const [a11y,setA11y]=React.useState(false);
  React.useEffect(()=>{const p=readA11y();applyA11y(p);setFalc(!!p.falc);},[]);
  const active={besoin:'besoins',institution:'annuaire',connexion:'identite',citoyen:'identite',pro:'identite',premiere:'identite',legal:null,recherche:null}[page];const activeNav=active===undefined?page:active;
  const fp=footerProps({site:'Cameroun numérique',lang,desc:tr("Le point d’entrée unique vers les services de l’État : une barre commune, un compte unique, des sites prévisibles. Le langage évolue avec les votes de la communauté.","The single entry point to State services: one common bar, one account, predictable sites. The design language evolves with community votes."),extraLinks:[{label:tr('Écrire au médiateur du réseau','Write to the network ombudsman'),href:'#legal/accessibilite'}]});
  return <div style={{minHeight:'100vh',display:'flex',flexDirection:'column',background:'var(--surface-page)'}}>
    <a href="#main" style={{position:'absolute',left:-9999,top:8,zIndex:2000,background:'var(--a11y-skip-bg)',padding:'8px 12px',font:'var(--type-label)',color:'var(--a11y-skip-text)'}} onFocus={e=>{e.target.style.left='8px';}} onBlur={e=>{e.target.style.left='-9999px';}}>Aller au contenu</a>
    <GovBar ministry="hub" hubHref="../hub/index.html" sites={SITES} onSiteChange={id=>{const s=SITES.find(x=>x.id===id);if(s&&s.href)location.href=s.href;}} suggest={window.rechercher} onSearch={q=>location.href='../hub/index.html#recherche/'+encodeURIComponent(q)} onAccessibility={()=>setA11y(true)} lang={lang} onLangChange={setLang} user={user?{name:user.nom,initials:user.initials}:null} onLogin={()=>go('connexion')}/>
    <Header compact showLogin={false} serviceName="Cameroun numérique" tagline={tr('Le portail unifié de l’État — gouv.cm','The State’s unified portal — gouv.cm')} nav={NAVF()} active={typeof activeNav!=='undefined'?activeNav:active} onNavigate={v=>go(v)}/>
    {falc&&<div role="status" style={{background:'var(--cm-jaune-100)',borderBottom:'1px solid var(--cm-jaune-300)',font:'var(--type-body-sm)',padding:'8px var(--gutter)',textAlign:'center'}}>Version <b>facile à lire</b> activée : textes courts, un message par paragraphe.</div>}
    <main id="main" style={{flex:1}}>{children}</main>
    <Footer {...fp}/>
    <AccessPanel open={a11y} onClose={()=>setA11y(false)} onChange={p=>setFalc(!!p.falc)}/>
  </div>;
}
Object.assign(window,{Shell,Container,Overline,SectionTitle,Star,Ornement,instOf,STATUT,Row,SITES,LINKS,NAVF,OR});
