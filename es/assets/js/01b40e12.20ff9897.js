"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[47127],{3905:(e,r,t)=>{t.d(r,{Zo:()=>d,kt:()=>y});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=a.createContext({}),c=function(e){var r=a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},d=function(e){var r=c(e.components);return a.createElement(p.Provider,{value:r},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},u=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),m=c(t),u=n,y=m["".concat(p,".").concat(u)]||m[u]||s[u]||l;return t?a.createElement(y,o(o({ref:r},d),{},{components:t})):a.createElement(y,o({ref:r},d))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,o=new Array(l);o[0]=u;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i[m]="string"==typeof e?e:n,o[1]=i;for(var c=2;c<l;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},84766:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>g,contentTitle:()=>f,default:()=>N,frontMatter:()=>y,metadata:()=>b,toc:()=>k});var a=t(3905),n=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,r,t)=>r in e?n(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,m=(e,r)=>{for(var t in r||(r={}))p.call(r,t)&&d(e,t,r[t]);if(i)for(var t of i(r))c.call(r,t)&&d(e,t,r[t]);return e},s=(e,r)=>l(e,o(r)),u=(e,r)=>{var t={};for(var a in e)p.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&i)for(var a of i(e))r.indexOf(a)<0&&c.call(e,a)&&(t[a]=e[a]);return t};const y={title:"$arraySplice",description:"$arraySplice empalmar\xe1 elementos de la matriz.",id:"arraySplice"},f=void 0,b={unversionedId:"functions/array-related/arraySplice",id:"version-6.4.0/functions/array-related/arraySplice",title:"$arraySplice",description:"$arraySplice empalmar\xe1 elementos de la matriz.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/array-related/arraySplice.md",sourceDirName:"functions/array-related",slug:"/functions/array-related/arraySplice",permalink:"/es/docs/functions/array-related/arraySplice",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1691521389,formattedLastUpdatedAt:"8 ago 2023",frontMatter:{title:"$arraySplice",description:"$arraySplice empalmar\xe1 elementos de la matriz.",id:"arraySplice"},sidebar:"docs",previous:{title:"$arraySort",permalink:"/es/docs/functions/array-related/arraySort"},next:{title:"$arrayUnshift",permalink:"/es/docs/functions/array-related/arrayUnshift"}},g={},k=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],v={toc:k},O="wrapper";function N(e){var r=e,{components:t}=r,n=u(r,["components"]);return(0,a.kt)(O,s(m(m({},v),n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$arraySplice")," empalmar\xe1 elementos de la matriz."),(0,a.kt)("h2",m({},{id:"uso"}),"Uso"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$arraySplice[nombre;\xedndice;cantidad;...elementos]\n")),(0,a.kt)("h2",m({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Campo"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Tipo"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Descripci\xf3n"),(0,a.kt)("th",m({parentName:"tr"},{align:"center"}),"Requerido"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"nombre"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"cadena"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Nombre de matriz"),(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"verdadero")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\xedndice"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"n\xfamero"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"\xcdndice del elemento."),(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"verdadero")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"cantidad"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"n\xfamero"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Cantidad a empalmar."),(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"verdadero")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"...elementos"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"cadena"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Elementos a empalmar."),(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"verdadero")))),(0,a.kt)("h2",m({},{id:"ejemplos"}),"Ejemplo(s)"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "array-splice",\n    code: `\n  $arraySplice[array;2;3]\n  $createArray[array;aoi.js;akarui;documents;bot]\n  `\n});\n')))}N.isMDXComponent=!0}}]);