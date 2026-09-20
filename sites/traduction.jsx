/* Traduction à l'exécution : quand la langue est EN, les nœuds texte, placeholders, aria-label et title trouvés dans le dictionnaire (FR → EN) sont remplacés ;
   le FR d'origine est conservé sur le nœud pour revenir en arrière. Un observateur suit les re-rendus React. Les dictionnaires (v2/sites/dict/*.jsx) alimentent window.DICT. */
window.DICT=window.DICT||{};
const _norm=s=>s.replace(/\s+/g,' ').trim();
const _lookup=t=>{const k=_norm(t);if(!k)return null;if(DICT[k])return DICT[k];const k2=k.replace(/[\s :·]+$/,'');if(DICT[k2]){const suf=k.slice(k2.length);return DICT[k2]+suf;}
  // « Texte : » / « Texte · » / mots simples avec ponctuation finale
  const m=k.match(/^(.*?)([.!?…]|\s*→)$/);if(m&&DICT[m[1]])return DICT[m[1]]+m[2];return null;};
const ATTRS=['placeholder','aria-label','title','alt'];
function translateNode(node,toEN){
  if(node.nodeType===3){const p=node.parentNode;if(!p||['SCRIPT','STYLE','CODE','PRE'].includes(p.nodeName))return;
    if(toEN){if(node.__fr==null){const en=_lookup(node.nodeValue);if(en){node.__fr=node.nodeValue;node.nodeValue=node.nodeValue.replace(_norm(node.nodeValue),en);}}}
    else if(node.__fr!=null){node.nodeValue=node.__fr;node.__fr=null;}
    return;}
  if(node.nodeType!==1)return;
  for(const a of ATTRS){if(!node.hasAttribute(a))continue;const key='__fr_'+a;
    if(toEN){if(node[key]==null){const en=_lookup(node.getAttribute(a));if(en){node[key]=node.getAttribute(a);node.setAttribute(a,en);}}}
    else if(node[key]!=null){node.setAttribute(a,node[key]);node[key]=null;}}
  node.childNodes.forEach(c=>translateNode(c,toEN));
}
let _obs=null,_pending=false;
function applyTranslation(){const toEN=getLang()==='EN';document.documentElement.lang=toEN?'en':'fr';translateNode(document.body,toEN);}
function startTranslator(){if(_obs)return;_obs=new MutationObserver(()=>{if(_pending)return;_pending=true;requestAnimationFrame(()=>{_pending=false;if(getLang()==='EN')translateNode(document.body,true);});});_obs.observe(document.body,{childList:true,subtree:true,characterData:true});applyTranslation();window.addEventListener('cm-lang',()=>{translateNode(document.body,false);applyTranslation();});}
if(document.body)startTranslator();else document.addEventListener('DOMContentLoaded',startTranslator);
Object.assign(window,{applyTranslation,startTranslator});
