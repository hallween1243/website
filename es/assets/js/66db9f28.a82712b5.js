"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[21400],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,g=u["".concat(c,".").concat(m)]||u[m]||s[m]||l;return r?a.createElement(g,o(o({ref:t},d),{},{components:r})):a.createElement(g,o({ref:t},d))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6413:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>k,default:()=>y,frontMatter:()=>g,metadata:()=>f,toc:()=>N});var a=r(3905),n=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&d(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&d(e,r,t[r]);return e},s=(e,t)=>l(e,o(t)),m=(e,t)=>{var r={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&p.call(e,a)&&(r[a]=e[a]);return r};const g={title:"$createThread",description:"$createThread crear\xe1 un nuevo hilo.",id:"createThread"},k=void 0,f={unversionedId:"functions/guild-related/createThread",id:"version-6.4.0/functions/guild-related/createThread",title:"$createThread",description:"$createThread crear\xe1 un nuevo hilo.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/guild-related/createThread.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/createThread",permalink:"/es/docs/functions/guild-related/createThread",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1691521389,formattedLastUpdatedAt:"8 ago 2023",frontMatter:{title:"$createThread",description:"$createThread crear\xe1 un nuevo hilo.",id:"createThread"},sidebar:"docs",previous:{title:"$createSticker",permalink:"/es/docs/functions/guild-related/createSticker"},next:{title:"$createWebhook",permalink:"/es/docs/functions/guild-related/createWebhook"}},h={},N=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],v={toc:N},b="wrapper";function y(e){var t=e,{components:r}=t,n=m(t,["components"]);return(0,a.kt)(b,s(u(u({},v),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$createThread")," crear\xe1 un nuevo rol de gremio."),(0,a.kt)("h2",u({},{id:"uso"}),"Uso"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$createThread[canalID;nombre;archieve;tipo;mensaje de inicio;ID de retorno?]\n")),(0,a.kt)("h2",u({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Campo"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Tipo"),(0,a.kt)("th",u({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,a.kt)("th",u({parentName:"tr"},{align:"center"}),"Requerido"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"canalID"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"entero"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"El ID del canal en el que debe crearse el hilo."),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"verdadero")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"name"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"consulta"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"El nombre del tema reci\xe9n creado."),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"verdadero")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"archieve"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Despu\xe9s de cu\xe1nto tiempo se eliminar\xe1 el mensaje)."),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"verdadero")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"type"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Tipo de hilo ",(0,a.kt)("br",null)," 1. ",(0,a.kt)("strong",{parentName:"td"},"online")," (por defecto) ",(0,a.kt)("br",null)," 2. ",(0,a.kt)("strong",{parentName:"td"},"private")),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"verdadero")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"iniciar mensaje"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"cadena"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"El ID del canal en el que debe crearse el hilo."),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"verdadero")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"ID de retorno?"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"cadena"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"Si la funci\xf3n devuelve el ID del hilo despu\xe9s de su creaci\xf3n."),(0,a.kt)("td",u({parentName:"tr"},{align:"center"}),"falso")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"60 \u2014")," Esta opci\xf3n hace que el hilo permanezca activo durante ",(0,a.kt)("strong",{parentName:"li"},"1 hora"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"1440 \u2014")," Esta opci\xf3n hace que el hilo permanezca activo durante ",(0,a.kt)("strong",{parentName:"li"},"1 d\xeda"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"4320 \u2014")," Esta opci\xf3n hace que el hilo permanezca activo durante ",(0,a.kt)("strong",{parentName:"li"},"3 d\xedas"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"10080 \u2014")," Esta opci\xf3n hace que el hilo permanezca activo durante ",(0,a.kt)("strong",{parentName:"li"},"1 semana"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"MAX \u2014")," Esta opci\xf3n hace que el hilo permanezca activo durante ",(0,a.kt)("strong",{parentName:"li"},"el mayor tiempo posible."),".")),(0,a.kt)("h2",u({},{id:"ejemplos"}),"Ejemplo(s)"),(0,a.kt)("p",null,"Esto crear\xe1 un hilo en el canal actual:"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'createThread',\n    code: `\n  $createThread[$channelID;Example!;60;public;$messageID;false]\n  `\n});\n")))}y.isMDXComponent=!0}}]);