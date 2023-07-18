"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[57640],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(r),m=o,b=u["".concat(p,".").concat(m)]||u[m]||s[m]||a;return r?n.createElement(b,l(l({ref:t},c),{},{components:r})):n.createElement(b,l({ref:t},c))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var d=2;d<a;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},52599:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>f,default:()=>O,frontMatter:()=>b,metadata:()=>k,toc:()=>g});var n=r(3905),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))d.call(t,r)&&c(e,r,t[r]);return e},s=(e,t)=>a(e,l(t)),m=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&d.call(e,n)&&(r[n]=e[n]);return r};const b={title:"$deleteWebhook",description:"$deleteWebhook supprimera le webhook donn\xe9.",id:"deleteWebhook"},f=void 0,k={unversionedId:"functions/guild-related/deleteWebhook",id:"version-6.4.0/functions/guild-related/deleteWebhook",title:"$deleteWebhook",description:"$deleteWebhook supprimera le webhook donn\xe9.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/guild-related/deleteWebhook.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/deleteWebhook",permalink:"/fr/docs/functions/guild-related/deleteWebhook",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689718184,formattedLastUpdatedAt:"18 juil. 2023",frontMatter:{title:"$deleteWebhook",description:"$deleteWebhook supprimera le webhook donn\xe9.",id:"deleteWebhook"},sidebar:"docs",previous:{title:"$deleteThread",permalink:"/fr/docs/functions/guild-related/deleteThread"},next:{title:"$editChannel",permalink:"/fr/docs/functions/guild-related/editChannel"}},h={},g=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple(s)",id:"exemples",level:2}],y={toc:g},v="wrapper";function O(e){var t=e,{components:r}=t,o=m(t,["components"]);return(0,n.kt)(v,s(u(u({},y),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$deleteWebhook")," supprimera le webhook donn\xe9."),(0,n.kt)("h2",u({},{id:"utilisation"}),"Utilisation"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$deleteWebhook[IDwebhook;tokenWebhook]\n")),(0,n.kt)("h2",u({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Champ"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",u({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"IDwebhook"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"entier"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"L'ID du webhook."),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"oui")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"tokenWebhook"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"chaine de caract\xe8res"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Le token du webhook."),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"true")))),(0,n.kt)("h2",u({},{id:"exemples"}),"Exemple(s)"),(0,n.kt)("p",null,"Ceci supprimera un webhook de votre serveur:"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'deleteWebhook',\n    code: `\n  $deleteWebhook[IDwebhook;tokenWebhook]\n  ` // remplacez les champs par des informations valides actuellement.\n});\n")))}O.isMDXComponent=!0}}]);