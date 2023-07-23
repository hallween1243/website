"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[4471],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),p=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),s=a,f=c["".concat(d,".").concat(s)]||c[s]||m[s]||l;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=s;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},88:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>v,contentTitle:()=>y,default:()=>N,frontMatter:()=>f,metadata:()=>g,toc:()=>b});var n=r(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&u(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&u(e,r,t[r]);return e},m=(e,t)=>l(e,o(t)),s=(e,t)=>{var r={};for(var n in e)d.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const f={title:"$modifyRole",description:"$modifyRole modifiera un r\xf4le donn\xe9.",id:"modifyRole"},y=void 0,g={unversionedId:"functions/guild-related/modifyRole",id:"version-6.4.0/functions/guild-related/modifyRole",title:"$modifyRole",description:"$modifyRole modifiera un r\xf4le donn\xe9.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/guild-related/modifyRole.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/modifyRole",permalink:"/fr/docs/functions/guild-related/modifyRole",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1690088438,formattedLastUpdatedAt:"23 juil. 2023",frontMatter:{title:"$modifyRole",description:"$modifyRole modifiera un r\xf4le donn\xe9.",id:"modifyRole"},sidebar:"docs",previous:{title:"$modifyEmoji",permalink:"/fr/docs/functions/guild-related/modifyEmoji"},next:{title:"$modifyRolePerms",permalink:"/fr/docs/functions/guild-related/modifyRolePerms"}},v={},b=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple(s)",id:"exemples",level:2}],k={toc:b},O="wrapper";function N(e){var t=e,{components:r}=t,a=s(t,["components"]);return(0,n.kt)(O,m(c(c({},k),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$modifyRole")," modifiera un r\xf4le donn\xe9."),(0,n.kt)("h2",c({},{id:"utilisation"}),"Utilisation"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$modifyRole[IDserveur;IDr\xf4le;...donn\xe9es]\n")),(0,n.kt)("h2",c({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Champ"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Type"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"Description"),(0,n.kt)("th",c({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"IDserveur"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"entier"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"L'ID du serveur o\xf9 se trouve le r\xf4le."),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"vrai")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"IDr\xf4le"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"entier"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"L'ID du r\xf4le \xe0 modifier."),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"vrai")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"... donn\xe9es"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res, objet"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Nouvelles donn\xe9es du r\xf4le."),(0,n.kt)("td",c({parentName:"tr"},{align:"center"}),"vrai")))),(0,n.kt)("h2",c({},{id:"exemples"}),"Exemple(s)"),(0,n.kt)("p",null,'Cela va modifier un r\xf4le existant / changer son nom en "G\xe9nial !":'),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: \'modifierR\xf4le\',\n    code: `\n  $modifyRole[$guildID;IDr\xf4le;{\n    "name": "G\xe9nial !"\n  }]\n  `\n});\n')))}N.isMDXComponent=!0}}]);