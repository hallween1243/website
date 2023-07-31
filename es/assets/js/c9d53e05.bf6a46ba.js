"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[39604],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,g=p["".concat(s,".").concat(m)]||p[m]||u[m]||o;return a?n.createElement(g,i(i({ref:t},d),{},{components:a})):n.createElement(g,i({ref:t},d))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},60796:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>N,contentTitle:()=>f,default:()=>v,frontMatter:()=>g,metadata:()=>k,toc:()=>b});var n=a(3905),r=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,p=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&d(e,a,t[a]);if(l)for(var a of l(t))c.call(t,a)&&d(e,a,t[a]);return e},u=(e,t)=>o(e,i(t)),m=(e,t)=>{var a={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&c.call(e,n)&&(a[n]=e[n]);return a};const g={title:"$awaitMessageReactions",description:"$awaitMessageReactions responder\xe1 cuando un usuario reaccione con un emoji espec\xedfico.",id:"awaitMessageReactions"},f=void 0,k={unversionedId:"functions/awaited-related/awaitMessageReactions",id:"version-6.4.0/functions/awaited-related/awaitMessageReactions",title:"$awaitMessageReactions",description:"$awaitMessageReactions responder\xe1 cuando un usuario reaccione con un emoji espec\xedfico.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/awaited-related/awaitMessageReactions.md",sourceDirName:"functions/awaited-related",slug:"/functions/awaited-related/awaitMessageReactions",permalink:"/es/docs/functions/awaited-related/awaitMessageReactions",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1690769721,formattedLastUpdatedAt:"31 jul 2023",frontMatter:{title:"$awaitMessageReactions",description:"$awaitMessageReactions responder\xe1 cuando un usuario reaccione con un emoji espec\xedfico.",id:"awaitMessageReactions"},sidebar:"docs",previous:{title:"$awaitData",permalink:"/es/docs/functions/awaited-related/awaitData"},next:{title:"$awaitMessages",permalink:"/es/docs/functions/awaited-related/awaitMessages"}},N={},b=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],y={toc:b},w="wrapper";function v(e){var t=e,{components:a}=t,r=m(t,["components"]);return(0,n.kt)(w,u(p(p({},y),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$awaitMessageReactions")," responder\xe1 cuando un usuario reaccione con un emoji espec\xedfico."),(0,n.kt)("h2",p({},{id:"uso"}),"Uso"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$awaitMessageReactions[Canal ID;ID de mensaje;filtro de usuario\n;tiempo;reacciones;comandos;mensaje de error?;esperar datos?]\n")),(0,n.kt)("h2",p({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Campo"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Descripci\xf3n"),(0,n.kt)("th",p({parentName:"tr"},{align:"center"}),"Requerido"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"canalID"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"entero"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"ID del canal."),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"verdadero")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"ID de mensaje"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"entero"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Mensaje ID."),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"verdadero")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"filtro de usuario"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"cadena"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"A lo que el bot responder\xe1 ",(0,n.kt)("br",null)," 1. ",(0,n.kt)("strong",{parentName:"td"},"todos ")," ",(0,n.kt)("br",null)," 2. ",(0,n.kt)("strong",{parentName:"td"},"ID de usuario espec\xedfico")," - cualquier ID de usuario"),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"verdadero")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"tiempo"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"cadena"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Cu\xe1nto tiempo durar\xe1 el comando / cu\xe1ndo caduca el comando."),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"verdadero")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"reacciones"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"cadena"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Reacciones, puedes a\xf1adir m\xfaltiples separ\xe1ndolos con comas ( ",(0,n.kt)("inlineCode",{parentName:"td"},","),")"),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"verdadero")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"comandos"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"cadena"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Comandos que se ejecutar\xe1n, puedes separar m\xfaltiples emojis con una coma (",(0,n.kt)("inlineCode",{parentName:"td"},","),")"),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"verdadero")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"\xbfMensaje de error?"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"cadena"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Mensaje de error cuando caduca el comando."),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"falso")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"esperar datos?"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"cadena"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Datos esperados."),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"falso")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Aseg\xfarate de tener ",(0,n.kt)("inlineCode",{parentName:"strong"},"GuildMessageReactions")," como intenci\xf3n en tu archivo principal. ")),(0,n.kt)("h2",p({},{id:"ejemplos"}),"Ejemplo(s)"),(0,n.kt)("p",null,'Esto le responder\xe1 cuando reaccione con el emoji "\u2764\ufe0f" al mensaje del bot:'),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-js"}),'bot.command({\n    name: "awaitMessageReactions",\n    code: `\n\xa1Reacciona con "\u2764\ufe0f" para una sorpresa!\n \n  $awaitMessageReactions[$channelID;$messageID;$authorID;10s;\u2764\ufe0f;awaitedcommandexample;Ups!\n No reaccionaste a tiempo..]\n\n  `\n});\n\nbot.awaitedCommand({\n    name: "awaitedcommandexample",\n    code: `\nBonito, reaccionaste con \u2764\ufe0f.\n  `\n});\n')))}v.isMDXComponent=!0}}]);