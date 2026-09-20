const {Button,Badge,Tag,Icon,Table,Stat}=window.SystMeDeDesignDeLTatDuCameroun_f51bf6;
function Regions({go,focus}){
  const ref=React.useRef(null);const map=React.useRef(null);const layers=React.useRef({});
  const isAire=AIRES.some(a=>a.id===focus);
  const [mode,setMode]=React.useState(isAire?'aires':'regions');const [sel,setSel]=React.useState(focus||'centre');
  React.useEffect(()=>{if(!window.L||map.current)return;const m=L.map(ref.current,{zoomControl:true,scrollWheelZoom:false}).setView([6.5,12.6],6);L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png',{attribution:'© OpenStreetMap contributors'}).addTo(m);
    const gA=L.layerGroup(),gR=L.layerGroup();
    AIRES.forEach(a=>{L.circle(a.ll,{radius:a.id==='soudano'?220000:a.id==='fang-beti'?170000:a.id==='sawa'?90000:80000,color:a.color,weight:2,fillColor:a.color,fillOpacity:.16}).addTo(gA).on('click',()=>{setMode('aires');setSel(a.id);}).bindTooltip(a.nom,{sticky:true});});
    REGIONS.forEach(r=>{L.marker(r.ll,{icon:L.divIcon({className:'',iconSize:[14,14],iconAnchor:[7,7],html:'<span role="img" aria-label="'+r.nom+'" style="display:block;width:100%;height:100%;background:#0F6448;border:2px solid #fff;box-shadow:0 1px 4px rgba(21,17,14,.4)"></span>'}),title:r.chef}).addTo(gR).bindTooltip(r.nom+' · '+r.chef).on('click',()=>{setMode('regions');setSel(r.id);});});
    MONUMENTS.forEach(mo=>L.marker(mo.ll,{icon:L.divIcon({className:'',iconSize:[10,10],iconAnchor:[5,5],html:'<span style="display:block;width:100%;height:100%;background:#15110E;border:2px solid #fff;clip-path:polygon(50% 0,100% 100%,0 100%)"></span>'}),title:mo.nom}).addTo(gR).bindTooltip(mo.nom).on('click',()=>go('monument',mo.id)));
    layers.current={gA,gR};gR.addTo(m);if(isAire)gA.addTo(m);map.current=m;setTimeout(()=>m.invalidateSize(),80);},[]);
  React.useEffect(()=>{const m=map.current;if(!m)return;const {gA,gR}=layers.current;if(mode==='aires'){gA.addTo(m);}else{m.removeLayer(gA);}gR.addTo(m);},[mode]);
  React.useEffect(()=>{const m=map.current;if(!m)return;const o=mode==='aires'?AIRES.find(x=>x.id===sel):REGIONS.find(x=>x.id===sel);if(o)m.flyTo(o.ll,mode==='aires'?6:7,{duration:.6});},[sel,mode]);
  const a=AIRES.find(x=>x.id===sel);const r=REGIONS.find(x=>x.id===sel);
  const seg=(v,l)=><button key={v} type="button" role="tab" aria-selected={mode===v} onClick={()=>{setMode(v);setSel(v==='aires'?'sawa':'centre');}} style={{all:'unset',boxSizing:'border-box',cursor:'pointer',height:40,padding:'0 16px',font:'var(--type-label)',fontWeight:600,background:mode===v?'var(--cm-vert-800)':'transparent',color:mode===v?'#fff':'var(--text-body)'}}>{l}</button>;
  return <>
    <Container style={{padding:'var(--space-10) var(--gutter) 0'}}><SectionTitle level={1} overline="Régions & peuples" num={5} action={<div role="tablist" style={{display:'inline-flex',border:'1px solid var(--border-default)',background:'var(--surface-card)'}}>{seg('regions','10 régions')}{seg('aires','4 aires culturelles')}</div>}>Le pays en dix régions</SectionTitle>
      <p style={{color:'var(--text-muted)',maxWidth:'64ch',marginTop:-8}}>Carrés verts : chefs-lieux de région. Triangles noirs : monuments et lieux du musée. Les cercles colorés (mode « aires ») indiquent une aire d’influence principale ; les frontières culturelles sont poreuses et les villes mêlent tous les peuples.</p>
      <div role="tablist" aria-label={mode==='aires'?'Aire culturelle':'Région'} style={{display:'flex',gap:6,flexWrap:'wrap',marginTop:'var(--space-6)'}}>{(mode==='aires'?AIRES:REGIONS).map(x=><button key={x.id} type="button" role="tab" aria-selected={sel===x.id} onClick={()=>setSel(x.id)} style={{all:'unset',boxSizing:'border-box',cursor:'pointer',display:'inline-flex',alignItems:'center',gap:8,height:36,padding:'0 12px',font:'var(--type-caption)',fontWeight:600,border:'2px solid '+(sel===x.id?(x.color||'var(--cm-vert-800)'):'var(--border-default)'),background:sel===x.id?'var(--surface-card)':'transparent'}}>{x.color&&<span style={{width:10,height:10,background:x.color}}/>}{x.nom}</button>)}</div></Container>
    <Container style={{padding:'var(--space-6) var(--gutter) var(--space-16)',display:'grid',gridTemplateColumns:'minmax(0,3fr) minmax(300px,2fr)',gap:'var(--space-8)',alignItems:'start'}}>
      <div ref={ref} role="region" aria-label="Carte du Cameroun" style={{height:560,background:'var(--cm-gris-100)',border:'var(--hairline)'}}/>
      {mode==='aires'&&a&&<aside style={{background:'var(--surface-card)',border:'var(--hairline)',borderTop:'4px solid '+a.color,padding:'var(--space-6)',display:'grid',gap:'var(--space-4)'}}>
        <h2 style={{font:'var(--type-h4)'}}>{a.nom}</h2>
        <div><Overline color="var(--text-muted)">Peuples</Overline><p style={{marginTop:4}}>{a.peuples}</p></div>
        <div><Overline color="var(--text-muted)">Langues principales</Overline><p style={{marginTop:4,fontFamily:'var(--font-mono)',fontSize:'var(--text-sm)'}}>{a.langues}</p></div>
        <p>{a.d}</p>
        <div><Overline color="var(--text-muted)" style={{marginBottom:6}}>Régions</Overline><div style={{display:'flex',gap:6,flexWrap:'wrap'}}>{a.regions.map(id=>{const rr=REGIONS.find(x=>x.id===id);return <Tag key={id} size="sm" onClick={()=>{setMode('regions');setSel(id);}}>{rr.nom}</Tag>;})}</div></div>
      </aside>}
      {mode==='regions'&&r&&<aside style={{background:'var(--surface-card)',border:'var(--hairline)',borderTop:'4px solid var(--cm-vert-800)',padding:'var(--space-6)',display:'grid',gap:'var(--space-4)'}}>
        <div><Overline>Région</Overline><h2 style={{font:'var(--type-h4)',marginTop:4}}>{r.nom}</h2></div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'var(--space-4)'}}><Stat size="sm" value={r.chef} label="chef-lieu" accent="vert"/><Stat size="sm" value={r.pop} label="habitants" detail="projection 2024" accent="laterite"/></div>
        <p>{r.d}</p>
        <div><Overline color="var(--text-muted)">Langues</Overline><p style={{marginTop:4,fontFamily:'var(--font-mono)',fontSize:'var(--text-sm)'}}>{r.langues}</p></div>
        <div><Overline color="var(--text-muted)">Fête</Overline><p style={{marginTop:4}}>{r.fete}</p></div>
        <div><Overline color="var(--text-muted)" style={{marginBottom:6}}>Lieux du musée</Overline><div style={{display:'grid',gap:2}}>{MONUMENTS.filter(m=>m.lieu.toLowerCase().includes(r.nom.toLowerCase())||m.lieu.includes(r.chef)).map(m=><button key={m.id} type="button" onClick={()=>go('monument',m.id)} style={{all:'unset',boxSizing:'border-box',cursor:'pointer',display:'grid',gridTemplateColumns:'1fr auto',gap:8,padding:'8px 0',borderBottom:'var(--hairline)',font:'var(--type-body-sm)',fontWeight:600}}>{m.nom}<Icon name="chevron-right" size={14} color="var(--text-subtle)"/></button>)}</div></div>
        <div style={{display:'flex',gap:8,flexWrap:'wrap'}}><Button size="sm" variant="secondary" iconLeft="map">Visiter la région</Button><Button size="sm" variant="tertiary" iconLeft="flag">Proposer un complément</Button></div>
      </aside>}
    </Container>
    <Toghu/><section style={{background:'var(--surface-card)'}}><Container style={{padding:'var(--space-12) var(--gutter)'}}><SectionTitle overline="Tableau">Les dix régions en un coup d’œil</SectionTitle>
      <Table caption="Régions administratives (loi de 2008 ; projections INS 2024)" columns={[{key:'nom',label:'Région',strong:true},{key:'chef',label:'Chef-lieu'},{key:'pop',label:'Population',align:'right',mono:true},{key:'langues',label:'Langues principales'},{key:'fete',label:'Fête'},{key:'x',label:'',align:'right',render:(_,row)=><Button size="sm" variant="tertiary" onClick={()=>{setMode('regions');setSel(row.id);window.scrollTo({top:0});}}>Voir</Button>}]} rows={REGIONS}/>
    </Container></section>
  </>;
}
function Culture({go,focus}){
  React.useEffect(()=>{if(focus){const el=document.getElementById('cul-'+focus);if(el)window.scrollTo({top:el.getBoundingClientRect().top+window.scrollY-90});}},[focus]);
  const Sec=({id,overline,title,children})=><section id={'cul-'+id} style={{marginBottom:'var(--space-16)'}}><SectionTitle overline={overline}>{title}</SectionTitle>{children}</section>;
  return <Container style={{padding:'var(--space-10) var(--gutter) var(--space-16)'}}>
    <SectionTitle level={1} overline="Culture vivante" num={6}>Ce que le pays crée, chante et partage</SectionTitle>
    <Sec id="musiques" overline="Musiques" title="Sept rythmes, un pays qui danse"><div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(260px,1fr))',gap:'var(--space-4)'}}>{CULTURE.musiques.map(([n,r,d])=><article key={n} style={{background:'var(--surface-card)',border:'var(--hairline)',padding:'var(--space-5)'}}><div style={{display:'flex',justifyContent:'space-between',gap:8,alignItems:'baseline'}}><h3 style={{font:'var(--type-h5)'}}>{n}</h3><Badge size="sm">{r}</Badge></div><p style={{font:'var(--type-body-sm)',marginTop:8}}>{d}</p></article>)}</div></Sec>
    <Sec id="cuisine" overline="Cuisine" title="La table camerounaise"><Table caption="Plats emblématiques et leur région d’origine" columns={[{key:'0',label:'Plat',strong:true},{key:'1',label:'Origine'},{key:'2',label:'Description'}]} rows={CULTURE.cuisine}/></Sec>
    <Sec id="lettres" overline="Lettres, pensée, écrans" title="Créer et penser"><div style={{display:'grid',gap:2}}>{CULTURE.lettres.map(([n,d])=><div key={n} style={{display:'grid',gridTemplateColumns:'160px 1fr',gap:16,padding:'14px 0',borderBottom:'var(--hairline)'}}><div style={{font:'var(--type-label)',fontWeight:700}}>{n}</div><div style={{font:'var(--type-body-sm)'}}>{d}</div></div>)}</div></Sec>
    <Sec id="glossaire" overline="Glossaire" title="Les mots pour dire le Cameroun"><dl style={{margin:0,display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(300px,1fr))',gap:'var(--space-3)'}}>{CULTURE.glossaire.map(([t,d])=><div key={t} style={{background:'var(--surface-card)',border:'var(--hairline)',padding:'var(--space-4)'}}><dt style={{font:'var(--type-h6)'}}>{t}</dt><dd style={{margin:'6px 0 0',font:'var(--type-body-sm)',color:'var(--text-body)'}}>{d}</dd></div>)}</dl></Sec>
  </Container>;
}
Object.assign(window,{Regions,Culture});
