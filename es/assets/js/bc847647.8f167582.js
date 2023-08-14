"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[45306],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>y});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=a.createContext({}),s=function(e){var r=a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=s(e.components);return a.createElement(i.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(t),m=n,y=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return t?a.createElement(y,l(l({ref:r},u),{},{components:t})):a.createElement(y,l({ref:r},u))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=m;var c={};for(var i in r)hasOwnProperty.call(r,i)&&(c[i]=r[i]);c.originalType=e,c[p]="string"==typeof e?e:n,l[1]=c;for(var s=2;s<o;s++)l[s]=t[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},17943:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>v,contentTitle:()=>f,default:()=>j,frontMatter:()=>y,metadata:()=>b,toc:()=>g});var a=t(3905),n=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,r,t)=>r in e?n(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,p=(e,r)=>{for(var t in r||(r={}))i.call(r,t)&&u(e,t,r[t]);if(c)for(var t of c(r))s.call(r,t)&&u(e,t,r[t]);return e},d=(e,r)=>o(e,l(r)),m=(e,r)=>{var t={};for(var a in e)i.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&c)for(var a of c(e))r.indexOf(a)<0&&s.call(e,a)&&(t[a]=e[a]);return t};const y={title:"$arrayIncludes",description:"$arrayIncludes comprobar\xe1 si existe un elemento espec\xedfico en la matriz.",id:"arrayIncludes"},f=void 0,b={unversionedId:"functions/array-related/arrayIncludes",id:"version-6.4.0/functions/array-related/arrayIncludes",title:"$arrayIncludes",description:"$arrayIncludes comprobar\xe1 si existe un elemento espec\xedfico en la matriz.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/array-related/arrayIncludes.md",sourceDirName:"functions/array-related",slug:"/functions/array-related/arrayIncludes",permalink:"/es/docs/functions/array-related/arrayIncludes",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1691974849,formattedLastUpdatedAt:"14 ago 2023",frontMatter:{title:"$arrayIncludes",description:"$arrayIncludes comprobar\xe1 si existe un elemento espec\xedfico en la matriz.",id:"arrayIncludes"},sidebar:"docs",previous:{title:"$arrayForEach",permalink:"/es/docs/functions/array-related/arrayForEach"},next:{title:"$arrayIndexOf",permalink:"/es/docs/functions/array-related/arrayIndexOf"}},v={},g=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],k={toc:g},O="wrapper";function j(e){var r=e,{components:t}=r,n=m(r,["components"]);return(0,a.kt)(O,d(p(p({},k),n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$arrayIncludes")," verificar\xe1 si existe un elemento espec\xedfico en la matriz."),(0,a.kt)("h2",p({},{id:"uso"}),"Uso"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$arrayIncludes[nombre;consulta]\n")),(0,a.kt)("h2",p({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Campo"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Tipo"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Descripci\xf3n"),(0,a.kt)("th",p({parentName:"tr"},{align:"center"}),"Requerido"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"nombre"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"cadena"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Nombre de matriz"),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"verdadero")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"consulta"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"cadena"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"El elemento que estaremos consultando para cada elemento dentro de la matriz."),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"verdadero")))),(0,a.kt)("h2",p({},{id:"ejemplos"}),"Ejemplo(s)"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "array-includes",\n    code: `\n  $arrayIncludes[array;Leref]\n  $createArray[array;aoi.js;akarui;documents;bot]\n  `\n// Devolver\xe1 "false" ya que no contiene la palabra "Leref".\n});\n')),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "array-includes",\n    code: `\n  $arrayIncludes[array;akarui]\n  $createArray[array;aoi.js;akarui;documents;bot]\n  `\n// Devolver\xe1 "true" ya que contiene la palabra "akarui".\n});\n')))}j.isMDXComponent=!0}}]);