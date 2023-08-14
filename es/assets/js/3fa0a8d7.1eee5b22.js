"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[40202],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),d=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(a),u=r,f=p["".concat(c,".").concat(u)]||p[u]||m[u]||o;return a?n.createElement(f,i(i({ref:t},s),{},{components:a})):n.createElement(f,i({ref:t},s))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},13883:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>k,default:()=>v,frontMatter:()=>f,metadata:()=>g,toc:()=>y});var n=a(3905),r=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,s=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,p=(e,t)=>{for(var a in t||(t={}))c.call(t,a)&&s(e,a,t[a]);if(l)for(var a of l(t))d.call(t,a)&&s(e,a,t[a]);return e},m=(e,t)=>o(e,i(t)),u=(e,t)=>{var a={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&d.call(e,n)&&(a[n]=e[n]);return a};const f={title:"$awaitCmdReactions",description:"$awaitCmdReactions responder\xe1 cuando un usuario reaccione al mensaje de comando inicial con un emoji espec\xedfico.",id:"awaitCmdReactions"},k=void 0,g={unversionedId:"functions/awaited-related/awaitCmdReactions",id:"version-6.4.0/functions/awaited-related/awaitCmdReactions",title:"$awaitCmdReactions",description:"$awaitCmdReactions responder\xe1 cuando un usuario reaccione al mensaje de comando inicial con un emoji espec\xedfico.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/awaited-related/awaitCmdReactions.md",sourceDirName:"functions/awaited-related",slug:"/functions/awaited-related/awaitCmdReactions",permalink:"/es/docs/functions/awaited-related/awaitCmdReactions",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1691974849,formattedLastUpdatedAt:"14 ago 2023",frontMatter:{title:"$awaitCmdReactions",description:"$awaitCmdReactions responder\xe1 cuando un usuario reaccione al mensaje de comando inicial con un emoji espec\xedfico.",id:"awaitCmdReactions"},sidebar:"docs",previous:{title:"$deleteArray",permalink:"/es/docs/functions/array-related/deleteArray"},next:{title:"$awaitComponents",permalink:"/es/docs/functions/awaited-related/awaitComponents"}},b={},y=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],N={toc:y},w="wrapper";function v(e){var t=e,{components:a}=t,r=u(t,["components"]);return(0,n.kt)(w,m(p(p({},N),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$awaitCmdReactions")," responder\xe1 cuando un usuario reaccione al mensaje de comando inicial con un emoji espec\xedfico."),(0,n.kt)("h2",p({},{id:"uso"}),"Uso"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$awaitCmdReactions[filtro de usuario;tiempo;reacciones;comandos;mensaje de error?;esperar datos?]\n")),(0,n.kt)("h2",p({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Campo"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Descripci\xf3n"),(0,n.kt)("th",p({parentName:"tr"},{align:"center"}),"Requerido"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"filtro de usuario"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"cadena"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"A lo que el bot responder\xe1 ",(0,n.kt)("br",null)," 1. ",(0,n.kt)("strong",{parentName:"td"},"todos ")," ",(0,n.kt)("br",null)," 2. ",(0,n.kt)("strong",{parentName:"td"},"ID de usuario espec\xedfico")," - cualquier ID de usuario"),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"verdadero")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"tiempo"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"cadena"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Cu\xe1nto tiempo durar\xe1 el comando / cu\xe1ndo caduca el comando."),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"verdadero")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"reacciones"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"cadena"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Reacciones que escuchar\xe1 el bot, puede separar varios emojis con una coma ( ",(0,n.kt)("inlineCode",{parentName:"td"},",")," )"),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"verdadero")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"comandos"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"cadena"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Comandos que se ejecutar\xe1n, puedes separar m\xfaltiples emojis con una coma (",(0,n.kt)("inlineCode",{parentName:"td"},","),")"),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"verdadero")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"mensaje de error?"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"cadena"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Mensaje de error cuando caduca el comando."),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"falso")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"esperar datos?"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"cadena"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Datos esperados."),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"falso")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Aseg\xfarate de tener ",(0,n.kt)("inlineCode",{parentName:"strong"},"GuildMessageReactions")," como intenci\xf3n en tu archivo principal. ")),(0,n.kt)("h2",p({},{id:"ejemplos"}),"Ejemplo(s)"),(0,n.kt)("p",null,'Esto le responder\xe1 cuando reaccione con el emoji "\u2764\ufe0f" a su mensaje de comando inicial:'),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-js"}),'bot.command({\n    name: "awaitCmdReaction",\n    code: `\n  \xa1Reacciona con "\u2764\ufe0f" para una sorpresa! \n  $awaitCmdReactions[$authorID;10s;\u2764\ufe0f;awaitedCommandExample;Ups! No reaccionaste a tiempo..]\n\n  bot.awaitedCommand({\n    name: "awaitedCommandExample",\n    code: `\n  Genial, reaccionaste con \u2764\ufe0f.\n  });\n')))}v.isMDXComponent=!0}}]);