"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[87363],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=c(r),f=o,m=s["".concat(u,".").concat(f)]||s[f]||d[f]||l;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[s]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<l;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},49572:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>h,frontMatter:()=>m,metadata:()=>v,toc:()=>b});var n=r(3905),o=Object.defineProperty,l=Object.defineProperties,a=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&p(e,r,t[r]);if(i)for(var r of i(t))c.call(t,r)&&p(e,r,t[r]);return e},d=(e,t)=>l(e,a(t)),f=(e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const m={title:"$getRoleColor",description:"$getRoleColor retournera la couleur du r\xf4le donn\xe9.",id:"getRoleColor"},g=void 0,v={unversionedId:"functions/info-related/getRoleColor",id:"version-6.4.0/functions/info-related/getRoleColor",title:"$getRoleColor",description:"$getRoleColor retournera la couleur du r\xf4le donn\xe9.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/info-related/getRoleColor.md",sourceDirName:"functions/info-related",slug:"/functions/info-related/getRoleColor",permalink:"/fr/docs/functions/info-related/getRoleColor",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1690769721,formattedLastUpdatedAt:"31 juil. 2023",frontMatter:{title:"$getRoleColor",description:"$getRoleColor retournera la couleur du r\xf4le donn\xe9.",id:"getRoleColor"},sidebar:"docs",previous:{title:"$getReactions",permalink:"/fr/docs/functions/info-related/getReactions"},next:{title:"$guildLowestRole",permalink:"/fr/docs/functions/info-related/guildLowestRole"}},y={},b=[{value:"Usage",id:"usage",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple(s)",id:"exemples",level:2}],k={toc:b},O="wrapper";function h(e){var t=e,{components:r}=t,o=f(t,["components"]);return(0,n.kt)(O,d(s(s({},k),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$getRoleColor")," renverra la couleur du r\xf4le donn\xe9."),(0,n.kt)("h2",s({},{id:"usage"}),"Usage"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$getRoleColor[IDr\xf4le;IDserveur?]\n")),(0,n.kt)("h2",s({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Champ"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",s({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"IDr\xf4le"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"entier"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"L'ID du r\xf4le dont vous voulez que la couleur soit retourn\xe9e."),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),"vrai")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"IDserveur?"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"entier"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"L'ID du serveur dans lequel le r\xf4le existe."),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),"Faux")))),(0,n.kt)("h2",s({},{id:"exemples"}),"Exemple(s)"),(0,n.kt)("p",null,"Cela retournera la couleur de votre plus haut r\xf4le :"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'getRoleColor',\n    code: `\n  $getRoleColor[$userHighestRole]\n  `\n});\n")))}h.isMDXComponent=!0}}]);