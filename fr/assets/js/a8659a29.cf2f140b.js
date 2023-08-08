"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[99686],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),s=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(c.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return t?n.createElement(f,l(l({ref:r},p),{},{components:t})):n.createElement(f,l({ref:r},p))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},54134:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>h,contentTitle:()=>v,default:()=>O,frontMatter:()=>f,metadata:()=>b,toc:()=>y});var n=t(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,r,t)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))c.call(r,t)&&p(e,t,r[t]);if(i)for(var t of i(r))s.call(r,t)&&p(e,t,r[t]);return e},d=(e,r)=>o(e,l(r)),m=(e,r)=>{var t={};for(var n in e)c.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&i)for(var n of i(e))r.indexOf(n)<0&&s.call(e,n)&&(t[n]=e[n]);return t};const f={title:"$handleError",description:"$handleError renvoie des informations sur l'erreur qui s'est produite.",id:"handleError"},v=void 0,b={unversionedId:"functions/event-related/handleError",id:"version-6.4.0/functions/event-related/handleError",title:"$handleError",description:"$handleError renvoie des informations sur l'erreur qui s'est produite.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/event-related/handleError.md",sourceDirName:"functions/event-related",slug:"/functions/event-related/handleError",permalink:"/fr/docs/functions/event-related/handleError",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1691521389,formattedLastUpdatedAt:"8 ao\xfbt 2023",frontMatter:{title:"$handleError",description:"$handleError renvoie des informations sur l'erreur qui s'est produite.",id:"handleError"},sidebar:"docs",previous:{title:"$channelUsed",permalink:"/fr/docs/functions/event-related/channelUsed"},next:{title:"$interactionData",permalink:"/fr/docs/functions/event-related/interactionData"}},h={},y=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple(s)",id:"exemples",level:2}],g={toc:y},k="wrapper";function O(e){var r=e,{components:t}=r,a=m(r,["components"]);return(0,n.kt)(k,d(u(u({},g),a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$handleError")," renvoie des informations sur l'erreur qui s'est produite."),(0,n.kt)("h2",u({},{id:"utilisation"}),"Utilisation"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$handleError[option]\n")),(0,n.kt)("h2",u({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Champ"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",u({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"option"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"Quelles donn\xe9es doivent \xeatre renvoy\xe9es. ",(0,n.kt)("br",null)," 1. ",(0,n.kt)("strong",{parentName:"td"},"function")," - nom de la fonction ",(0,n.kt)("br",null)," 2. ",(0,n.kt)("strong",{parentName:"td"},"command")," - nom de la commande ",(0,n.kt)("br",null)," 3. ",(0,n.kt)("strong",{parentName:"td"},"error")," - erreur qui s'est produite"),(0,n.kt)("td",u({parentName:"tr"},{align:"center"}),"vrai")))),(0,n.kt)("h2",u({},{id:"exemples"}),"Exemple(s)"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Vous avez besoin de ",(0,n.kt)("inlineCode",{parentName:"strong"},'events: ["onFunctionError"]')," dans votre fichier principal pour utiliser cette fonction !")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),'bot.functionErrorCommand({\n    channel: "channelID (optional)",\n    code: `Quelque chose a mal tourn\xe9 dans votre commande "$handleError[command]" ! La fonction "$handleError[function]" a renvoy\xe9 l\'erreur "$handleError[error]"!`\n});\n')))}O.isMDXComponent=!0}}]);