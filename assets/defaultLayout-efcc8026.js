import{C as B,i as R,p as F,D as $,E as z,B as h,h as g,w as W,G as J,H as b,I as j,g as O,J as H,o as v,f as m,l as c,z as V,F as E,y as T,s as C,n as M,q as S,K as G,T as P,r as Y,b as X}from "./vendor-32df7c5d.js";import{R as A,_ as N}from "./index-da6001b0.js";function U(e){return $()?(z(e),!0):!1}function I(e){return typeof e=="function"?e():h(e)}const q=typeof window<"u",K=()=>{};function Z(e, s=!0){B()?R(e):s?e():F(e)}function ee(e){var s;const n=I(e);return(s=n==null?void 0:n.$el)!=null?s:n}const D=q?window:void 0;function te(...e){let s,n,i,t;if(typeof e[0]=="string"||Array.isArray(e[0])?([n,i,t]=e,s=D):[s,n,i,t]=e,!s)return K;Array.isArray(n)||(n=[n]),Array.isArray(i)||(i=[i]);const r=[],u=()=>{r.forEach(f=>f()),r.length=0},d=(f, o, a, l)=>(f.addEventListener(o,a,l),()=>f.removeEventListener(o,a,l)),_=W(()=>[ee(s),I(t)],([f,o])=>{u(),f&&r.push(...n.flatMap(a=>i.map(l=>d(f,a,l,o))))},{immediate:!0,flush:"post"}),p=()=>{_(),u()};return U(p),p}function se(){const e=g(!1);return B()&&R(()=>{e.value=!0}),e}function ne(e){const s=se();return b(()=>(s.value,!!e()))}function oe(e, s={}){const{window:n=D}=s,i=ne(()=>n&&"matchMedia"in n&&typeof n.matchMedia=="function");let t;const r=g(!1),u= p=>{r.value=p.matches},d=()=>{t&&("removeEventListener"in t?t.removeEventListener("change",u):t.removeListener(u))},_=J(()=>{i.value&&(d(),t=n.matchMedia(I(e)),"addEventListener"in t?t.addEventListener("change",u):t.addListener(u),r.value=t.matches)});return U(()=>{_(),d(),t=void 0}),r}function Q(e={}){const{window:s=D,initialWidth:n=Number.POSITIVE_INFINITY,initialHeight:i=Number.POSITIVE_INFINITY,listenOrientation:t=!0,includeScrollbar:r=!0}=e,u=g(n),d=g(i),_=()=>{s&&(r?(u.value=s.innerWidth,d.value=s.innerHeight):(u.value=s.document.documentElement.clientWidth,d.value=s.document.documentElement.clientHeight))};if(_(),Z(_),te("resize",_,{passive:!0}),t){const p=oe("(orientation: portrait)");W(p,()=>_())}return{width:u,height:d}}const L=j("sidebar",{state:()=>({isOpen:!1}),getters:{},actions:{TOGGLE_SIDEBAR(){this.isOpen=!this.isOpen},SET_SIDEBAR_OPEN(){this.isOpen=!0},SET_SIDEBAR_CLOSE(){this.isOpen=!1}}});var w=(e=>(e[e.small=375]="small",e[e.phone=480]="phone",e[e.tablet=768]="tablet",e[e.desktop=1024]="desktop",e[e.widescreen=1280]="widescreen",e[e.largescreen=1440]="largescreen",e))(w||{});const ae="/assets/flower-logo-c24666eb.svg",le="data:image/webp;base64,UklGRoIBAABXRUJQVlA4WAoAAAAQAAAALwAALwAAQUxQSDEBAAABJyAQSOFmFxERg+zatuJGOiACQG4FgKsVQA0EIMHJPymQhx7+I/o/AfxHS6/xJVk1vqIN2wuydS3dFxQX+HR57jBAfirfb00At/tHeCB3tU7GeNUcA+TJflGs96YRita7xtlhJOsGzRr4NM3aDpzWde0moG8zh+w0Ame9SAB9qAw+VLR2DY9twOEGzQVoF80AzQDZDbL77PR3wB3grORmmhXHNByOYcY5LMPn8It3Zcc0HINhdrgF+ja0Sm6mWTNAN0B2h+w2cwdOdzhNwFkvElC0do3P0VUrwHHRN6A4DUC7aBU43de1uwDus9NI1gSnFYppVqy3rhE+df/uxhnNEciOO5dlqABDDVfkj/V0st1vgccPAxQTT3+6wKfxuWyNa5cXNtX9FUWt4RWUXgP/UQBWUDggKgAAADADAJ0BKjAAMAA//f7/f7+7NrIjiAPwP4lpAAAbgb0+DgAA/ua1AAAAAA==",ie="/assets/stone-299da04a.jpg";function x(e){return new URL(Object.assign({"../assets/img/flower-logo.svg":ae,"../assets/img/flower-logo.webp":le,"../assets/img/stone.jpg":ie})[`../assets/img/${e}`],self.location).href}const re={class:"header"},ue={class:"logo"},ce=["srcset"],de=["src"],_e=O({__name:"BHeader",setup(e){const s=H(),n=L(),{width:i}=Q(),t=b(()=>i.value<w.phone),r=b(()=>i.value>w.phone),u=()=>{t.value&&n.TOGGLE_SIDEBAR()},d=()=>{r.value&&n.SET_SIDEBAR_OPEN()},_= o=>{var a;if(o.relatedTarget instanceof HTMLElement){if(((a=o.relatedTarget.closest("#sidebars"))==null?void 0:a.classList.value)==="sidebars")return;r.value&&n.TOGGLE_SIDEBAR()}else r.value&&n.TOGGLE_SIDEBAR()},p=x("flower-logo.png"),f=x("flower-logo.webp");return(o, a)=>(v(),m("header",re,[c("div",{id:"menu","data-test-id":"mobileSidebarController",class:"menu",onClick:u,onMouseenter:d,onMouseleave:_},[c("span",{class:V({underline:h(n).isOpen})},"Menu",2)],32),c("div",ue,[c("picture",null,[c("source",{srcset:h(f)},null,8,ce),c("img",{"data-test-id":"goToDefaultPage",src:h(p),alt:"bloobloom logo",onClick:a[0]||(a[0]= l=>h(s).push({name:h(A).spectaclesWomen}))},null,8,de)])])]))}});const fe=N(_e,[["__file","/Users/vladislavomelyanenko/Documents/test/bloobloomAssessment/src/components/functional/Header/BHeader.vue"]]),pe={class:"sidebar-first"},ve={class:"list"},me=["onClick","onMouseenter"],he={class:"title"},Ae={key:0,class:"arrow"},ge={key:0,id:"sidebarSecond",class:"sidebar-second"},be={class:"list"},we=["onClick"],Se={class:"title"},ye=O({__name:"BSidebar",setup(e){const{width:s}=Q(),n=L(),i=H(),t=g(null),r=b(()=>s.value<w.phone),u=b(()=>s.value>w.phone),d=[{id:1,title:"Spectacles",expand:!0,subMenu:[{id:1,title:"Women",routeName:A.spectaclesWomen},{id:2,title:"Men",routeName:A.spectaclesMen}]},{id:2,title:"Sunglasses",expand:!0,subMenu:[{id:1,title:"Women",routeName:A.sunglassesWomen},{id:2,title:"Men",routeName:A.sunglassesMen}]},{id:3,title:"Home tray on",expand:!1},{id:4,title:"Pair for pair",expand:!1}],_= o=>{var a;r.value&&(o!=null&&o.subMenu)?o.id===((a=t.value)==null?void 0:a.id)?t.value=null:t.value=o:t.value=null},p= o=>{if(o.relatedTarget instanceof Element){if(o.relatedTarget.id==="menu"){t.value=null;return}t.value=null,setTimeout(()=>{n.SET_SIDEBAR_CLOSE()},150)}},f= o=>{var a;u.value&&(o!=null&&o.subMenu)?o.id===((a=t.value)==null?void 0:a.id)?t.value=null:t.value=o:t.value=null};return(o, a)=>(v(),m("div",{id:"sidebars",class:"sidebars",onMouseleave:p},[c("div",pe,[c("ul",ve,[(v(),m(E,null,T(d, l=>{var y;return c("li",{key:l.id,class:V([{selected:r.value&&l.id===((y=t.value)==null?void 0:y.id)},"item"]),"data-test-id":"openSecondary",onClick: k=>_(l),onMouseenter: k=>f(l)},[c("span",he,C(l.title),1),l.expand?(v(),m("span",Ae)):M("v-if",!0)],42,me)}),64))])]),S(P,{name:"slide-second"},{default:G(()=>[t.value?(v(),m("div",ge,[c("ul",be,[(v(!0),m(E,null,T(t.value.subMenu, l=>(v(),m("li",{key:l.id,"data-test-id":"subMenu",class:"item",onClick: y=>h(i).push({name:l.routeName})},[c("span",Se,C(l.title),1)],8,we))),128))])])):M("v-if",!0)]),_:1})],32))}});const Ee=N(ye,[["__file","/Users/vladislavomelyanenko/Documents/test/bloobloomAssessment/src/components/functional/Menu/BSidebar.vue"]]),Me={class:"main"},Oe=O({__name:"defaultLayout",setup(e){const s=L();return(n, i)=>{const t=Y("router-view");return v(),m(E,null,[S(fe),S(P,{name:"slide"},{default:G(()=>[h(s).isOpen?(v(),X(Ee,{key:0})):M("v-if",!0)]),_:1}),c("main",Me,[S(t)])],64)}}});const De=N(Oe,[["__scopeId","data-v-813c47dc"],["__file","/Users/vladislavomelyanenko/Documents/test/bloobloomAssessment/src/components/layout/defaultLayout.vue"]]);export{De as default};
