"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[52740],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),m=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=m(r),d=o,f=u["".concat(s,".").concat(d)]||u[d]||c[d]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var m=2;m<a;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},64267:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>j,default:()=>O,frontMatter:()=>f,metadata:()=>b,toc:()=>g});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))m.call(t,r)&&p(e,r,t[r]);return e},c=(e,t)=>a(e,i(t)),d=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&m.call(e,n)&&(r[n]=e[n]);return r};const f={title:"$isCustomEmoji",description:"$isCustomEmoji comprobar\xe1 si el emoji dado es un emoji personalizado o no.",id:"isCustomEmoji"},j=void 0,b={unversionedId:"functions/util-related/isCustomEmoji",id:"version-6.4.0/functions/util-related/isCustomEmoji",title:"$isCustomEmoji",description:"$isCustomEmoji comprobar\xe1 si el emoji dado es un emoji personalizado o no.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/isCustomEmoji.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/isCustomEmoji",permalink:"/es/docs/functions/util-related/isCustomEmoji",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1691974849,formattedLastUpdatedAt:"14 ago 2023",frontMatter:{title:"$isCustomEmoji",description:"$isCustomEmoji comprobar\xe1 si el emoji dado es un emoji personalizado o no.",id:"isCustomEmoji"},sidebar:"docs",previous:{title:"$isChannelManageable",permalink:"/es/docs/functions/util-related/isChannelManageable"},next:{title:"$isDM",permalink:"/es/docs/functions/util-related/isDM"}},y={},g=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],v={toc:g},k="wrapper";function O(e){var t=e,{components:r}=t,o=d(t,["components"]);return(0,n.kt)(k,c(u(u({},v),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$isCustomEmoji")," comprobar\xe1 si el emoji dado es un emoji personalizado o no."),(0,n.kt)("h2",u({},{id:"uso"}),"Uso"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$isCustomEmoji[emojiResolver;guildID?]\n")),(0,n.kt)("h2",u({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Campo"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,n.kt)("th",u({parentName:"tr"},{align:"center"}),"Requerido"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"resolutor de emojios"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"consulta"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Emoji que quieres comprobar si es un emoji personalizado."),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"verdadero")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"servidorID?"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"entero"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"ID del gremio en el que se crearon los emojis."),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"no")))),(0,n.kt)("h2",u({},{id:"ejemplos"}),"Ejemplo(s)"),(0,n.kt)("p",null,"Esto devolver\xe1 ",(0,n.kt)("inlineCode",{parentName:"p"},"verdadero")," como el emoji ",(0,n.kt)("img",u({parentName:"p"},{src:"https://cdn.discordapp.com/emojis/1003365344724910191.webp?size=16&quality=lossless",alt:"emoji"}))," es realmente un emojis personalizado:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'isCustomEmoji',\n    code: `\n  $isCustomEmoji[<:LerefMoney:1003365344724910191>;773352845738115102]\n  `\n});\n")))}O.isMDXComponent=!0}}]);