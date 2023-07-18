"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[49825],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),s=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(r),m=n,f=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return r?a.createElement(f,l(l({ref:t},p),{},{components:r})):a.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[d]="string"==typeof e?e:n,l[1]=c;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},33545:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>O,frontMatter:()=>f,metadata:()=>b,toc:()=>k});var a=r(3905),n=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&p(e,r,t[r]);if(c)for(var r of c(t))s.call(t,r)&&p(e,r,t[r]);return e},u=(e,t)=>o(e,l(t)),m=(e,t)=>{var r={};for(var a in e)i.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&c)for(var a of c(e))t.indexOf(a)<0&&s.call(e,a)&&(r[a]=e[a]);return r};const f={title:"$forEachUser",description:"$forEachUser ejecutar\xe1 comandos esperados en cada canal de cada gremio.",id:"forEachUser"},g=void 0,b={unversionedId:"functions/misc-related/forEachUser",id:"version-6.4.0/functions/misc-related/forEachUser",title:"$forEachUser",description:"$forEachUser ejecutar\xe1 comandos esperados en cada canal de cada gremio.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/misc-related/forEachUser.md",sourceDirName:"functions/misc-related",slug:"/functions/misc-related/forEachUser",permalink:"/es/docs/functions/misc-related/forEachUser",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689718184,formattedLastUpdatedAt:"18 jul 2023",frontMatter:{title:"$forEachUser",description:"$forEachUser ejecutar\xe1 comandos esperados en cada canal de cada gremio.",id:"forEachUser"},sidebar:"docs",previous:{title:"$forEachRole",permalink:"/es/docs/functions/misc-related/forEachRole"},next:{title:"$getApplicationCommandID",permalink:"/es/docs/functions/misc-related/getApplicationCommandID"}},y={},k=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],v={toc:k},h="wrapper";function O(e){var t=e,{components:r}=t,n=m(t,["components"]);return(0,a.kt)(h,u(d(d({},v),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$forEachUser")," ejecutar\xe1 los comandos esperados para el usuario en todos los gremios."),(0,a.kt)("h2",d({},{id:"uso"}),"Uso"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$forEachUser[tiempo;esperar datos;...Cmds esperados;finalizar comando]\n")),(0,a.kt)("h2",d({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Campo"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Tipo"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,a.kt)("th",d({parentName:"tr"},{align:"center"}),"Requerido"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"tiempo"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"cadena"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Cu\xe1nto tiempo tarda entre cada canal en ejecutar el siguiente."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"verdadero")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"awaitData"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"objeto"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Datos esperados."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"verdadero")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"...Cmds esperados"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"cadena"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Comando esperado para ejecutar."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"verdadero")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"finalizar comando"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"cadena"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Comando esperado para ejecutar cuando termine el bucle."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"verdadera")))),(0,a.kt)("h2",d({},{id:"ejemplos"}),"Ejemplo(s)"),(0,a.kt)("p",null,"Esto registrar\xe1 cada usuario (cach\xe9) en tu consola:"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "awaitData",\n  code: `\n  $forEachUser[1;{};returnUsers;]\n  `\n});\n\nbot.awaitedCommand({\n  name: "returnUsers",\n  code: `\n  $log[ $authorID ]\n  `\n});\n')))}O.isMDXComponent=!0}}]);