"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[22775],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>y});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,y=d["".concat(c,".").concat(m)]||d[m]||s[m]||i;return r?n.createElement(y,o(o({ref:t},p),{},{components:r})):n.createElement(y,o({ref:t},p))}));function y(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},89238:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>f,default:()=>h,frontMatter:()=>y,metadata:()=>b,toc:()=>g});var n=r(3905),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))u.call(t,r)&&p(e,r,t[r]);return e},s=(e,t)=>i(e,o(t)),m=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const y={title:"$arrayAt",description:"$arrayAt choisira l'index (position) de l'\xe9l\xe9ment du tableau \xe0 retourner. Ne retourne rien si l'index donn\xe9 est introuvable.",id:"arrayAt"},f=void 0,b={unversionedId:"functions/array-related/arrayAt",id:"version-6.4.0/functions/array-related/arrayAt",title:"$arrayAt",description:"$arrayAt choisira l'index (position) de l'\xe9l\xe9ment du tableau \xe0 retourner. Ne retourne rien si l'index donn\xe9 est introuvable.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/array-related/arrayAt.md",sourceDirName:"functions/array-related",slug:"/functions/array-related/arrayAt",permalink:"/fr/docs/functions/array-related/arrayAt",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689718184,formattedLastUpdatedAt:"18 juil. 2023",frontMatter:{title:"$arrayAt",description:"$arrayAt choisira l'index (position) de l'\xe9l\xe9ment du tableau \xe0 retourner. Ne retourne rien si l'index donn\xe9 est introuvable.",id:"arrayAt"},sidebar:"docs",previous:{title:"Soundcloud ID",permalink:"/fr/docs/guides/other/soundcloudid"},next:{title:"$arrayConcat",permalink:"/fr/docs/functions/array-related/arrayConcat"}},v={},g=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple(s)",id:"exemples",level:2}],k={toc:g},O="wrapper";function h(e){var t=e,{components:r}=t,a=m(t,["components"]);return(0,n.kt)(O,s(d(d({},k),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$arrayAt")," choisira l'index (position) de l'\xe9l\xe9ment du tableau \xe0 retourner. Ne retourne rien si l'index donn\xe9 est introuvable."),(0,n.kt)("h2",d({},{id:"utilisation"}),"Utilisation"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$arrayAt[nom;index]\n")),(0,n.kt)("h2",d({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Champ"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",d({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"nom"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Nom du tableau."),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"vrai")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"index"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"La position de l'\xe9l\xe9ment."),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"vrai")))),(0,n.kt)("h2",d({},{id:"exemples"}),"Exemple(s)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Ceci retournera ",(0,n.kt)("inlineCode",{parentName:"li"},"Aoi.dashboard")," :")),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "array-at",\n    code: `\n  $arrayAt[Aoi;3]\n\n  $createArray[Aoi;Aoi.music;Aoi.panel;Aoi.dashboard;Aoi]\n  `\n    // Retourne "Aoi.dashboard"\n});\n')))}h.isMDXComponent=!0}}]);