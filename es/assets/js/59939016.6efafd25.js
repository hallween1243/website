"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[45215],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(r),c=a,f=d["".concat(i,".").concat(c)]||d[c]||m[c]||o;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:a,l[1]=s;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},39331:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>k,contentTitle:()=>b,default:()=>O,frontMatter:()=>f,metadata:()=>g,toc:()=>v});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&p(e,r,t[r]);if(s)for(var r of s(t))u.call(t,r)&&p(e,r,t[r]);return e},m=(e,t)=>o(e,l(t)),c=(e,t)=>{var r={};for(var n in e)i.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const f={title:"$pruneMembers",description:"$pruneMembers expulsar\xe1 a todos los usuarios inactivos que hayan estado inactivos durante un cierto tiempo.",id:"pruneMembers"},b=void 0,g={unversionedId:"functions/user-related/pruneMembers",id:"version-6.4.0/functions/user-related/pruneMembers",title:"$pruneMembers",description:"$pruneMembers expulsar\xe1 a todos los usuarios inactivos que hayan estado inactivos durante un cierto tiempo.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/user-related/pruneMembers.md",sourceDirName:"functions/user-related",slug:"/functions/user-related/pruneMembers",permalink:"/es/docs/functions/user-related/pruneMembers",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1691521389,formattedLastUpdatedAt:"8 ago 2023",frontMatter:{title:"$pruneMembers",description:"$pruneMembers expulsar\xe1 a todos los usuarios inactivos que hayan estado inactivos durante un cierto tiempo.",id:"pruneMembers"},sidebar:"docs",previous:{title:"$muteUser",permalink:"/es/docs/functions/user-related/muteUser"},next:{title:"$removeThreadMember",permalink:"/es/docs/functions/user-related/removeThreadMember"}},k={},v=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],y={toc:v},N="wrapper";function O(e){var t=e,{components:r}=t,a=c(t,["components"]);return(0,n.kt)(N,m(d(d({},y),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$pruneMembers")," expulsar\xe1 a todos los usuarios inactivos que hayan estado inactivos durante un per\xedodo de tiempo determinado."),(0,n.kt)("h2",d({},{id:"uso"}),"Uso"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$pruneMembers[d\xedas;servidorID?;rolesIDs?;seco?;razon?;volverCuenta?]\n")),(0,n.kt)("h2",d({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Campo"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,n.kt)("th",d({parentName:"tr"},{align:"center"}),"Requerido"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"d\xedas"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"n\xfamero"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"N\xfamero de d\xedas para contar para la poda (1-30, 7 por defecto)."),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"verdadero")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"servidorID?"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"entero"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Donde los miembros van a ser podados."),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"falso")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"rolesIDs?"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"entero, cadena"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Rol para incluir, dividido por comas."),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"falso")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"seco?"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"booleano"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"1. ",(0,n.kt)("strong",{parentName:"td"},"true")," ",(0,n.kt)("br",null)," 2. ",(0,n.kt)("strong",{parentName:"td"},"false")," (por defecto)"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"falso")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\xbfraz\xf3n?"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"cadena"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Raz\xf3n que se mostrar\xe1 en los registros de auditor\xeda del gremio."),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"falso")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"volverCuenta?"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"booleano"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"N\xfamero de devoluciones de miembros podados. ",(0,n.kt)("br",null)," 1. ",(0,n.kt)("strong",{parentName:"td"},"Verdadero")," ",(0,n.kt)("br",null)," 2. ",(0,n.kt)("strong",{parentName:"td"},"falso")," (por defecto)"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"falso")))),(0,n.kt)("h2",d({},{id:"ejemplos"}),"Ejemplo(s)"),(0,n.kt)("p",null,"Esto eliminar\xe1 a todos los miembros que han estado inactivos durante 4 d\xedas y devolver\xe1 el recuento de los miembros eliminados que cumplen con esos requisitos:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'pruneMembers',\n    code: `\n   $pruneMembers[4;$guildID;$guildID;true;Pruning!;true]\n  `\n});\n")))}O.isMDXComponent=!0}}]);