"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[50601],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},32413:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>b,default:()=>P,frontMatter:()=>f,metadata:()=>g,toc:()=>v});var r=n(3905),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&c(e,n,t[n]);return e},d=(e,t)=>i(e,o(t)),u=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$setApplicationCommandPermissions",description:"$setApplicationCommandPermissions d\xe9finira les permissions d'une commande d'application sp\xe9cifique.",id:"setApplicationCommandPermissions"},b=void 0,g={unversionedId:"functions/interaction-related/setApplicationCommandPermissions",id:"version-6.4.0/functions/interaction-related/setApplicationCommandPermissions",title:"$setApplicationCommandPermissions",description:"$setApplicationCommandPermissions d\xe9finira les permissions d'une commande d'application sp\xe9cifique.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/interaction-related/setApplicationCommandPermissions.md",sourceDirName:"functions/interaction-related",slug:"/functions/interaction-related/setApplicationCommandPermissions",permalink:"/fr/docs/functions/interaction-related/setApplicationCommandPermissions",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1690088438,formattedLastUpdatedAt:"23 juil. 2023",frontMatter:{title:"$setApplicationCommandPermissions",description:"$setApplicationCommandPermissions d\xe9finira les permissions d'une commande d'application sp\xe9cifique.",id:"setApplicationCommandPermissions"},sidebar:"docs",previous:{title:"$sendTTS",permalink:"/fr/docs/functions/interaction-related/sendTTS"},next:{title:"$slowmode",permalink:"/fr/docs/functions/interaction-related/slowmode"}},y={},v=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2}],k={toc:v},O="wrapper";function P(e){var t=e,{components:n}=t,a=u(t,["components"]);return(0,r.kt)(O,d(m(m({},k),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$setApplicationCommandPermissions")," d\xe9finira les permissions d'une commande d'application sp\xe9cifique."),(0,r.kt)("h2",m({},{id:"utilisation"}),"Utilisation"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$setApplicationCommandPermissions[IDserveur/global;ID;...permissions]\n")),(0,r.kt)("h2",m({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Champ"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",m({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"IDserveur/global"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"entier, cha\xeene de caract\xe8res"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Type de commande de l'application. ",(0,r.kt)("br",null)," 1. ",(0,r.kt)("strong",{parentName:"td"},"global")," ",(0,r.kt)("br",null)," 2. ",(0,r.kt)("strong",{parentName:"td"},"ID sp\xe9cifique de serveur")),(0,r.kt)("td",m({parentName:"tr"},{align:"center"}),"vrai")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"ID"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"entier"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"ID de la commande d'application."),(0,r.kt)("td",m({parentName:"tr"},{align:"center"}),"vrai")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"...perms"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"Permissions \xe0 changer."),(0,r.kt)("td",m({parentName:"tr"},{align:"center"}),"vrai")))))}P.isMDXComponent=!0}}]);