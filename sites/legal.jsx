const {Button,Icon,Breadcrumb}=window.SystMeDeDesignDeLTatDuCameroun_f51bf6;
/* Page des mentions (hub) : #legal/<id>. Textes FR/EN dans commun.jsx (LEGAL). */
function LegalP({go,id}){
  const [lang]=useLang();const EN=lang==='EN';const cur=LEGAL.find(l=>l.id===id)||LEGAL[0];
  return <Container style={{padding:'var(--space-10) var(--gutter) var(--space-16)'}}>
    <Breadcrumb items={[{label:EN?'Home':'Accueil',href:'#accueil'},{label:EN?'Legal & policies':'Mentions et politiques'},{label:EN?cur.en:cur.fr}]}/>
    <div style={{display:'grid',gridTemplateColumns:'minmax(200px,260px) minmax(0,1fr)',gap:'var(--space-10)',marginTop:'var(--space-8)',alignItems:'start'}}>
      <nav aria-label={EN?'Legal pages':'Pages légales'} style={{background:'var(--surface-card)',border:'var(--hairline)'}}><ol style={{margin:0,padding:0,listStyle:'none'}}>{LEGAL.map((l,i)=><li key={l.id}><a href={'#legal/'+l.id} aria-current={l.id===cur.id?'page':undefined} style={{display:'grid',gridTemplateColumns:'24px 20px 1fr',gap:10,alignItems:'center',minHeight:44,padding:'10px 12px',textDecoration:'none',color:'var(--text-heading)',font:'var(--type-label)',fontWeight:l.id===cur.id?700:500,background:l.id===cur.id?'var(--surface-page)':'transparent',borderLeft:'3px solid '+(l.id===cur.id?'var(--cm-vert-800)':'transparent'),borderBottom:'var(--hairline)'}}><span style={{fontFamily:'var(--font-mono)',fontSize:12,color:'var(--text-muted)'}}>{String(i+1).padStart(2,'0')}</span><Icon name={l.icon} size={16} color="var(--cm-vert-800)"/>{EN?l.en:l.fr}</a></li>)}</ol></nav>
      <article style={{maxWidth:'var(--measure)'}}><Overline><span style={{whiteSpace:'nowrap'}}>{EN?'Legal & policies':'Mentions et politiques'} · {String(LEGAL.indexOf(cur)+1).padStart(2,'0')}</span></Overline><h1 style={{font:'var(--type-h1)',marginTop:8,letterSpacing:'var(--tracking-tight)'}}>{EN?cur.en:cur.fr}</h1><div aria-hidden="true" style={{height:3,width:48,background:'var(--brand-band)',margin:'12px 0 var(--space-8)'}}/>
        {(EN?cur.txt.en:cur.txt.fr).map((p,i)=><p key={i} style={{marginTop:i?16:0,lineHeight:'var(--leading-relaxed)'}}>{p}</p>)}
        <p style={{font:'var(--type-caption)',color:'var(--text-muted)',marginTop:'var(--space-8)'}}>{EN?'Last updated: 21 September 2026 · ':'Dernière mise à jour : 21 septembre 2026 · '}{VERSION_LANGAGE}</p>
        <div style={{display:'flex',gap:8,flexWrap:'wrap',marginTop:'var(--space-6)'}}><Button variant="secondary" iconLeft="printer">{EN?'Print':'Imprimer'}</Button><Button variant="tertiary" iconLeft="flag" href="../tresor/index.html#signaler">{EN?'Report a problem':'Signaler un problème'}</Button></div></article>
    </div>
  </Container>;
}
Object.assign(window,{LegalP});
