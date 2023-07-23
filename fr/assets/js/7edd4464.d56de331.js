"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[32688],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var p=a.createContext({}),c=function(e){var r=a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=c(e.components);return a.createElement(p.Provider,{value:r},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(t),d=n,m=s["".concat(p,".").concat(d)]||s[d]||f[d]||i;return t?a.createElement(m,o(o({ref:r},u),{},{components:t})):a.createElement(m,o({ref:r},u))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l[s]="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},55644:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>h,contentTitle:()=>y,default:()=>k,frontMatter:()=>m,metadata:()=>b,toc:()=>v});var a=t(3905),n=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,r,t)=>r in e?n(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,s=(e,r)=>{for(var t in r||(r={}))p.call(r,t)&&u(e,t,r[t]);if(l)for(var t of l(r))c.call(r,t)&&u(e,t,r[t]);return e},f=(e,r)=>i(e,o(r)),d=(e,r)=>{var t={};for(var a in e)p.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&l)for(var a of l(e))r.indexOf(a)<0&&c.call(e,a)&&(t[a]=e[a]);return t};const m={title:"$arrayShift",description:"$arrayShift retournera le premier \xe9l\xe9ment du tableau donn\xe9.",id:"arrayShift"},y=void 0,b={unversionedId:"functions/array-related/arrayShift",id:"version-6.4.0/functions/array-related/arrayShift",title:"$arrayShift",description:"$arrayShift retournera le premier \xe9l\xe9ment du tableau donn\xe9.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/array-related/arrayShift.md",sourceDirName:"functions/array-related",slug:"/functions/array-related/arrayShift",permalink:"/fr/docs/functions/array-related/arrayShift",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1690088438,formattedLastUpdatedAt:"23 juil. 2023",frontMatter:{title:"$arrayShift",description:"$arrayShift retournera le premier \xe9l\xe9ment du tableau donn\xe9.",id:"arrayShift"},sidebar:"docs",previous:{title:"$arrayReverse",permalink:"/fr/docs/functions/array-related/arrayReverse"},next:{title:"$arrayShuffle",permalink:"/fr/docs/functions/array-related/arrayShuffle"}},h={},v=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple(s)",id:"exemples",level:2}],g={toc:v},O="wrapper";function k(e){var r=e,{components:t}=r,n=d(r,["components"]);return(0,a.kt)(O,f(s(s({},g),n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$arrayShift")," retournera le premier \xe9l\xe9ment du tableau donn\xe9."),(0,a.kt)("h2",s({},{id:"utilisation"}),"Utilisation"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$arrayShift[nom]\n")),(0,a.kt)("h2",s({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Champ"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Description"),(0,a.kt)("th",s({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"nom"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Nom du tableau."),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),"vrai")))),(0,a.kt)("h2",s({},{id:"exemples"}),"Exemple(s)"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "array-shift",\n    code: `\n  $arrayShift[tableau]\n  $createArray[tableau;aoi.js;akarui;documents;bot]\n  `\n});\n')))}k.isMDXComponent=!0}}]);