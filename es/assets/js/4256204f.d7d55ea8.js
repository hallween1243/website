"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[32816],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),d=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=d(e.components);return r.createElement(c.Provider,{value:n},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=d(t),f=a,m=u["".concat(c,".").concat(f)]||u[f]||s[f]||l;return t?r.createElement(m,o(o({ref:n},p),{},{components:t})):r.createElement(m,o({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,o=new Array(l);o[0]=f;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var d=2;d<l;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},89440:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>y,contentTitle:()=>b,default:()=>O,frontMatter:()=>m,metadata:()=>v,toc:()=>g});var r=t(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))c.call(n,t)&&p(e,t,n[t]);if(i)for(var t of i(n))d.call(n,t)&&p(e,t,n[t]);return e},s=(e,n)=>l(e,o(n)),f=(e,n)=>{var t={};for(var r in e)c.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&i)for(var r of i(e))n.indexOf(r)<0&&d.call(e,r)&&(t[r]=e[r]);return t};const m={title:"$findChannel",description:"$findChannel buscar\xe1 un canal determinado por su nombre.",id:"findChannel"},b=void 0,v={unversionedId:"functions/util-related/findChannel",id:"version-6.4.0/functions/util-related/findChannel",title:"$findChannel",description:"$findChannel buscar\xe1 un canal determinado por su nombre.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/findChannel.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/findChannel",permalink:"/es/docs/functions/util-related/findChannel",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1691974849,formattedLastUpdatedAt:"14 ago 2023",frontMatter:{title:"$findChannel",description:"$findChannel buscar\xe1 un canal determinado por su nombre.",id:"findChannel"},sidebar:"docs",previous:{title:"$filterMessage",permalink:"/es/docs/functions/util-related/filterMessage"},next:{title:"$findGuildChannel",permalink:"/es/docs/functions/util-related/findGuildChannel"}},y={},g=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],h={toc:g},k="wrapper";function O(e){var n=e,{components:t}=n,a=f(n,["components"]);return(0,r.kt)(k,s(u(u({},h),a),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$findChannel")," buscar\xe1 un canal determinado por su nombre."),(0,r.kt)("h2",u({},{id:"uso"}),"Uso"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$findChannel[canalResolver;returnSelf?]\n")),(0,r.kt)("h2",u({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Campo"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,r.kt)("th",u({parentName:"tr"},{align:"center"}),"Requerido"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"canalResolver"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"cadena"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"El nombre del artefacto que quieres buscar."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"verdadero")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"volverYo mismo?"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"booleano"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Devuelve el canal donde el comando se ejecuta por defecto si el canal dado no fue encontrado."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"falso")))),(0,r.kt)("h2",u({},{id:"ejemplos"}),"Ejemplo(s)"),(0,r.kt)("p",null,"Esto devolver\xe1 ",(0,r.kt)("inlineCode",{parentName:"p"},"882360051640193054")," ya que fue capaz de encontrar el canal ",(0,r.kt)("inlineCode",{parentName:"p"},"#\xe1-aoi_v6"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'findChannel',\n    code: `\n  $findChannel[\u2282\u30fb\u2283\ufe50aoi_v6;false]\n  `\n});\n")))}O.isMDXComponent=!0}}]);