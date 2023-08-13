import{c as h,a as y,r as E,o as w,b as M,d as W,e as S,S as _}from "./vendor-32df7c5d.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))c(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();const L="modulepreload",O=function(e){return"/"+e},v={},m=function(o, t, c){if(!t||t.length===0)return o();const n=document.getElementsByTagName("link");return Promise.all(t.map(s=>{if(s=O(s),s in v)return;v[s]=!0;const r=s.endsWith(".css"),g=r?'[rel="stylesheet"]':"";if(!!c)for(let u=n.length-1; u>=0; u--){const p=n[u];if(p.href===s&&(!r||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${g}`))return;const l=document.createElement("link");if(l.rel=r?"stylesheet":L,r||(l.as="script",l.crossOrigin=""),l.href=s,document.head.appendChild(l),r)return new Promise((u, p)=>{l.addEventListener("load",u),l.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>o()).catch(s=>{const r=new Event("vite:preloadError",{cancelable:!0});if(r.payload=s,window.dispatchEvent(r),!r.defaultPrevented)throw s})},b=(e, o)=>{const t=e[o];return t?typeof t=="function"?t():Promise.resolve(t):new Promise((c, n)=>{(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+o)))})};var a=(e=>(e.collections="/collections",e.spectaclesWomen="spectacles-women",e.sunglassesWomen="sunglasses-women",e.spectaclesMen="spectacles-man",e.sunglassesMen="sunglasses-man",e))(a||{}),i=(e=>(e.collections="collections",e.spectaclesWomen="spectaclesWomen",e.sunglassesWomen="sunglassesWomen",e.spectaclesMen="spectaclesMen",e.sunglassesMen="sunglassesMen",e))(i||{});const f=(e, o)=>()=>b(Object.assign({"../views/Men/Spectacles.vue":()=>m(()=>import("./Spectacles-6929f646.js"),["assets/Spectacles-6929f646.js","assets/vendor-32df7c5d.js"]),"../views/Men/Sunglasses.vue":()=>m(()=>import("./Sunglasses-f1ec56fd.js"),["assets/Sunglasses-f1ec56fd.js","assets/vendor-32df7c5d.js"]),"../views/Women/Spectacles.vue":()=>m(()=>import("./Spectacles-60f29d9c.js"),["assets/Spectacles-60f29d9c.js","assets/vendor-32df7c5d.js","assets/Spectacles-2cdf9f4a.css"]),"../views/Women/Sunglasses.vue":()=>m(()=>import("./Sunglasses-a5e895c5.js"),["assets/Sunglasses-a5e895c5.js","assets/vendor-32df7c5d.js"])}),`../views/${o}/${e}.vue`),P=[{path:a.collections,component:()=>m(()=>import("./defaultLayout-efcc8026.js"),["assets/defaultLayout-efcc8026.js","assets/vendor-32df7c5d.js","assets/defaultLayout-7ba03d55.css"]),children:[{path:a.spectaclesWomen,name:i.spectaclesWomen,component:f("Spectacles","Women")},{path:a.sunglassesWomen,name:i.sunglassesWomen,component:f("Sunglasses","Women")},{path:a.spectaclesMen,name:i.spectaclesMen,component:f("Spectacles","Men")},{path:a.sunglassesMen,name:i.sunglassesMen,component:f("Sunglasses","Men")},{path:"/:pathMatch*",redirect:{name:i.spectaclesWomen}}]}],A=h({history:y(),routes:P}),k=(e, o)=>{const t=e.__vccOpts||e;for(const[c,n]of o)t[c]=n;return t},D={};function I(e, o){const t=E("router-view");return w(),M(t)}const T=k(D,[["render",I],["__file","/Users/vladislavomelyanenko/Documents/test/bloobloomAssessment/src/App.vue"]]),d=W(T);d.use(A);d.use(S());d.component(_.name,_);const B=async()=>{d.mount("#app")};B();export{i as R,k as _};
