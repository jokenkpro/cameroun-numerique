const {Button,Card,Badge,Breadcrumb,Tag,Accordion,Icon,Alert,Table}=window.SystMeDeDesignDeLTatDuCameroun_f51bf6;
const CATS=['Tous','Souverains','Résistants','Nationalistes','Chefs d’État','Bâtisseurs','Lettres & savoirs','Arts','Sport'];
function Personnages({go}){
  const [cat,setCat]=React.useState('Tous');const [ep,setEp]=React.useState('toutes');
  const list=PERSONNAGES.filter(p=>(cat==='Tous'||p.cat===cat)&&(ep==='toutes'||p.ep===ep));
  return <Container style={{padding:'var(--space-10) var(--gutter) var(--space-16)'}}>
    <SectionTitle level={1} overline="Personnages" num={2}>Celles et ceux qui ont fait le pays</SectionTitle>
    <div style={{display:'flex',gap:6,flexWrap:'wrap'}}>{CATS.map(c=><Tag key={c} selected={cat===c} onClick={()=>setCat(c)}>{c}{c!=='Tous'&&<span style={{color:'var(--text-subtle)',marginLeft:6,fontVariantNumeric:'tabular-nums'}}>{PERSONNAGES.filter(p=>p.cat===c).length}</span>}</Tag>)}</div>
    <div style={{display:'flex',gap:6,flexWrap:'wrap',marginTop:10}}><Tag size="sm" selected={ep==='toutes'} onClick={()=>setEp('toutes')}>Toutes les époques</Tag>{EPOQUES.map(e=><Tag key={e.id} size="sm" selected={ep===e.id} onClick={()=>setEp(e.id)}>{e.nom}</Tag>)}</div>
    <p style={{font:'var(--type-caption)',color:'var(--text-muted)',marginTop:16,fontVariantNumeric:'tabular-nums'}} aria-live="polite">{list.length} personnage{list.length>1?'s':''}</p>
    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',gap:'var(--space-4)',marginTop:'var(--space-4)'}}>{list.map(p=>{const ep=epOf(p.ep);return <button key={p.id} type="button" onClick={()=>go('personnage',p.id)} style={{all:'unset',boxSizing:'border-box',cursor:'pointer',display:'grid',gridTemplateColumns:'64px 1fr',gap:14,padding:'var(--space-4)',background:'var(--surface-card)',border:'var(--hairline)',borderLeft:'4px solid '+ep.color,textAlign:'left',alignItems:'start'}}><Portrait p={p} ratio="1/1" style={{width:64}}/><span><span style={{font:'var(--type-h6)',color:'var(--text-heading)',display:'block'}}>{p.nom}</span><span style={{font:'var(--type-body-sm)',color:'var(--text-body)',display:'block',marginTop:2}}>{p.role}</span><span style={{font:'var(--type-caption)',color:'var(--text-muted)',display:'block',marginTop:4,fontVariantNumeric:'tabular-nums'}}>{p.dates} · {p.reg} · {p.cat}</span></span></button>;})}</div>
  </Container>;
}
function Personnage({go,id,falc}){
  const p=PERSONNAGES.find(x=>x.id===id)||PERSONNAGES[0];const ep=epOf(p.ep);const last=p.nom.split(' ').slice(-1)[0];const lies=FRISE.filter(e=>(e.t+' '+e.d).includes(last));
  const autres=PERSONNAGES.filter(x=>x.cat===p.cat&&x.id!==p.id).slice(0,3);
  return <Container style={{padding:'var(--space-8) var(--gutter) var(--space-16)'}}>
    <Breadcrumb items={[{label:'Accueil',href:'#'},{label:'Personnages',href:'#'},{label:p.nom}]}/>
    <div style={{display:'grid',gridTemplateColumns:'minmax(0,2fr) minmax(280px,1fr)',gap:'var(--space-12)',marginTop:'var(--space-8)',alignItems:'start'}}>
      <article>
        <Overline color={ep.color}>{ep.nom} · {p.reg} · {p.cat}</Overline>
        <h1 style={{font:'var(--type-h1)',marginTop:8,letterSpacing:'var(--tracking-tight)'}}>{p.nom}</h1>
        <div style={{display:'flex',gap:12,alignItems:'baseline',marginTop:8,flexWrap:'wrap'}}><span style={{font:'var(--type-mono)',color:'var(--text-muted)'}}>{p.dates}</span><span style={{font:'var(--type-lead)',color:'var(--text-muted)'}}>{p.role}</span></div>
        <p style={{font:'var(--type-body)',fontSize:falc?'var(--text-xl)':'var(--text-lg)',marginTop:'var(--space-8)',lineHeight:'var(--leading-relaxed)',maxWidth:'var(--measure)'}}>{p.bio}</p>
        <div style={{marginTop:'var(--space-8)',padding:'var(--space-5)',background:'var(--surface-brand-soft)',border:'1px solid var(--cm-vert-200)',display:'grid',gridTemplateColumns:'24px 1fr',gap:12}}><Icon name="landmark" size={22} color="var(--cm-vert-800)"/><div><div style={{font:'var(--type-label)',fontWeight:700}}>Héritage</div><div style={{font:'var(--type-body-sm)',marginTop:4}}>{p.fait}</div></div></div>
        {lies.length>0&&<><h2 style={{font:'var(--type-h4)',marginTop:'var(--space-10)'}}>Dans la frise</h2><ol style={{margin:'12px 0 0',padding:0,listStyle:'none',display:'grid',gap:2}}>{lies.map((e,i)=><li key={i}><button type="button" onClick={()=>go('frise',e.ep,e.an+e.t)} style={{all:'unset',boxSizing:'border-box',cursor:'pointer',display:'grid',gridTemplateColumns:'12px 88px 1fr',gap:14,alignItems:'center',width:'100%',padding:'10px 12px',borderBottom:'var(--hairline)',background:'var(--surface-card)',textAlign:'left'}}><Marker type={e.type} nat={e.nat} color={epOf(e.ep).color}/><span style={{font:'var(--type-mono)',color:epOf(e.ep).color,fontVariantNumeric:'tabular-nums'}}>{fmtAn(e.an)}</span><span style={{font:'var(--type-label)',fontWeight:600}}>{e.t}</span></button></li>)}</ol></>}
        <h2 style={{font:'var(--type-h4)',marginTop:'var(--space-10)'}}>Sources</h2><ul style={{margin:'12px 0 0',paddingLeft:20,lineHeight:'var(--leading-relaxed)'}}>{p.src.map((s,i)=><li key={i}>{s}</li>)}</ul>
      </article>
      <aside style={{display:'grid',gap:'var(--space-4)'}}>
        <Portrait p={p} ratio="4/5"/>
        {autres.length>0&&<div><Overline color="var(--text-muted)" style={{marginBottom:8}}>Même catégorie</Overline><div style={{display:'grid',gap:2}}>{autres.map(a=><button key={a.id} type="button" onClick={()=>go('personnage',a.id)} style={{all:'unset',boxSizing:'border-box',cursor:'pointer',display:'grid',gridTemplateColumns:'1fr auto',gap:12,padding:'10px 12px',background:'var(--surface-card)',borderBottom:'var(--hairline)',alignItems:'center',textAlign:'left'}}><span><span style={{font:'var(--type-label)',fontWeight:600,display:'block'}}>{a.nom}</span><span style={{font:'var(--type-caption)',color:'var(--text-muted)'}}>{a.dates}</span></span><Icon name="chevron-right" size={16} color="var(--text-subtle)"/></button>)}</div></div>}
        <Button variant="secondary" iconLeft="arrow-left" onClick={()=>go('personnages')}>Tous les personnages</Button>
      </aside>
    </div>
  </Container>;
}
const TYPES_M=['Tous','Palais','Monument','Sculpture','Lieu de mémoire','Ouvrage','Édifice religieux','Architecture','Musée','Site naturel'];
function Monuments({go}){
  const [t,setT]=React.useState('Tous');const list=MONUMENTS.filter(m=>t==='Tous'||m.type===t);
  return <Container style={{padding:'var(--space-10) var(--gutter) var(--space-16)'}}>
    <SectionTitle level={1} overline="Monuments & lieux" num={3}>Pierres, terre et mémoire</SectionTitle>
    <div style={{display:'flex',gap:6,flexWrap:'wrap'}}>{TYPES_M.map(c=><Tag key={c} selected={t===c} onClick={()=>setT(c)}>{c}{c!=='Tous'&&<span style={{color:'var(--text-subtle)',marginLeft:6}}>{MONUMENTS.filter(m=>m.type===c).length}</span>}</Tag>)}</div>
    <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',gap:'var(--space-6)',marginTop:'var(--space-8)'}}>{list.map(m=><Card key={m.id} image={srcOf(m,800)||undefined} href="#" onClick={e=>{e.preventDefault();go('monument',m.id);}} title={m.nom} description={m.lieu} meta={m.an} badge={<Badge>{m.type}</Badge>}/>)}</div>
  </Container>;
}
function Monument({go,id,falc}){
  const m=MONUMENTS.find(x=>x.id===id)||MONUMENTS[0];const ref=React.useRef(null);
  React.useEffect(()=>{if(!window.L||!ref.current)return;const map=L.map(ref.current,{zoomControl:false,scrollWheelZoom:false,attributionControl:true}).setView(m.ll,12);L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'© OpenStreetMap contributors'}).addTo(map);L.marker(m.ll,{icon:L.divIcon({className:'',iconSize:[18,18],iconAnchor:[9,9],html:'<span style="display:block;width:100%;height:100%;background:#A8452B;border:2px solid #fff;box-shadow:0 1px 4px rgba(21,17,14,.4)"></span>'})}).addTo(map);setTimeout(()=>map.invalidateSize(),80);return()=>map.remove();},[m.id]);
  const autres=MONUMENTS.filter(x=>x.id!==m.id&&x.type===m.type).slice(0,3);const lies=FRISE.filter(e=>e.type==='monument'&&e.t.includes(m.nom.split(' ')[0]));
  return <>
    <Photo src={srcOf(m,1600)} credit={creditOf(m)} ratio="16/5" style={{minHeight:260}} placeholder="Photographie à fournir (MINAC / MINTOUR)"><Container style={{position:'absolute',left:0,right:0,bottom:0,padding:'0 var(--gutter) var(--space-8)',color:srcOf(m)?'#fff':'var(--text-heading)'}}><Badge status="brand">{m.type}</Badge><h1 style={{font:'var(--type-h1)',color:'inherit',letterSpacing:'var(--tracking-tight)',marginTop:10}}>{m.nom}</h1><div style={{display:'flex',gap:8,alignItems:'center',marginTop:6,font:'var(--type-body)',color:srcOf(m)?'var(--cm-gris-200)':'var(--text-muted)'}}><Icon name="map-pin" size={16}/>{m.lieu} · <span style={{fontFamily:'var(--font-mono)'}}>{m.an}</span></div></Container></Photo>
    <Container style={{padding:'var(--space-6) var(--gutter) var(--space-16)'}}>
      <Breadcrumb items={[{label:'Accueil',href:'#'},{label:'Monuments & lieux',href:'#'},{label:m.nom}]}/>
      <div style={{display:'grid',gridTemplateColumns:'minmax(0,2fr) minmax(280px,1fr)',gap:'var(--space-12)',marginTop:'var(--space-8)',alignItems:'start'}}>
        <article><p style={{font:'var(--type-body)',fontSize:falc?'var(--text-xl)':'var(--text-lg)',lineHeight:'var(--leading-relaxed)',maxWidth:'var(--measure)'}}>{m.d}</p>
          <Accordion style={{marginTop:'var(--space-8)'}} defaultOpen={['v']} items={[{id:'v',title:'Visiter',content:<p>{m.acces} Coordonnées <span style={{fontFamily:'var(--font-mono)'}}>{m.ll[0].toFixed(3)}, {m.ll[1].toFixed(3)}</span>. Voir aussi <a href="#" onClick={e=>e.preventDefault()}>Visiter le Cameroun</a> (site du ministère du Tourisme, lot 1).</p>},{id:'p',title:'Protection et conservation',content:<p>Le patrimoine est protégé par la loi n° 2013/003 du 18 avril 2013 régissant le patrimoine culturel au Cameroun. Toute intervention est soumise à l’avis du ministère des Arts et de la Culture.</p>},{id:'s',title:'Source',content:<p>{m.src}</p>}]}/>
          {lies.length>0&&<><h2 style={{font:'var(--type-h4)',marginTop:'var(--space-10)'}}>Dans la frise</h2><ol style={{margin:'12px 0 0',padding:0,listStyle:'none'}}>{lies.map((e,i)=><li key={i}><button type="button" onClick={()=>go('frise',e.ep,e.an+e.t)} style={{all:'unset',boxSizing:'border-box',cursor:'pointer',display:'grid',gridTemplateColumns:'12px 88px 1fr',gap:14,alignItems:'center',width:'100%',padding:'10px 12px',borderBottom:'var(--hairline)',background:'var(--surface-card)',textAlign:'left'}}><Marker type={e.type} nat={e.nat} color={epOf(e.ep).color}/><span style={{font:'var(--type-mono)',color:epOf(e.ep).color}}>{fmtAn(e.an)}</span><span style={{font:'var(--type-label)',fontWeight:600}}>{e.t}</span></button></li>)}</ol></>}
        </article>
        <aside style={{display:'grid',gap:'var(--space-4)'}}><div ref={ref} role="img" aria-label={'Carte de localisation : '+m.lieu} style={{height:240,background:'var(--cm-gris-100)',border:'var(--hairline)'}}/>
          {autres.length>0&&<div><Overline color="var(--text-muted)" style={{marginBottom:8}}>Autres {m.type.toLowerCase()}s</Overline><div style={{display:'grid',gap:2}}>{autres.map(a=><button key={a.id} type="button" onClick={()=>go('monument',a.id)} style={{all:'unset',boxSizing:'border-box',cursor:'pointer',display:'grid',gridTemplateColumns:'1fr auto',gap:12,padding:'10px 12px',background:'var(--surface-card)',borderBottom:'var(--hairline)',alignItems:'center',textAlign:'left'}}><span><span style={{font:'var(--type-label)',fontWeight:600,display:'block'}}>{a.nom}</span><span style={{font:'var(--type-caption)',color:'var(--text-muted)'}}>{a.lieu}</span></span><Icon name="chevron-right" size={16} color="var(--text-subtle)"/></button>)}</div></div>}
          <Button variant="secondary" iconLeft="arrow-left" onClick={()=>go('monuments')}>Tous les monuments</Button></aside>
      </div>
    </Container>
  </>;
}
Object.assign(window,{Personnages,Personnage,Monuments,Monument});
