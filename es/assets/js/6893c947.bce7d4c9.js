"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[14759],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),s=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(u.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(t),m=a,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return t?n.createElement(f,l(l({ref:r},c),{},{components:t})):n.createElement(f,l({ref:r},c))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},12225:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>b,contentTitle:()=>v,default:()=>D,frontMatter:()=>f,metadata:()=>y,toc:()=>g});var n=t(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,r,t)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,p=(e,r)=>{for(var t in r||(r={}))u.call(r,t)&&c(e,t,r[t]);if(i)for(var t of i(r))s.call(r,t)&&c(e,t,r[t]);return e},d=(e,r)=>o(e,l(r)),m=(e,r)=>{var t={};for(var n in e)u.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&i)for(var n of i(e))r.indexOf(n)<0&&s.call(e,n)&&(t[n]=e[n]);return t};const f={title:"$userID",description:"$userID devolver\xe1 la identificaci\xf3n de un usuario determinado.",id:"userID"},v=void 0,y={unversionedId:"functions/user-related/userID",id:"version-6.4.0/functions/user-related/userID",title:"$userID",description:"$userID devolver\xe1 la identificaci\xf3n de un usuario determinado.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/user-related/userID.md",sourceDirName:"functions/user-related",slug:"/functions/user-related/userID",permalink:"/es/docs/functions/user-related/userID",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1691974849,formattedLastUpdatedAt:"14 ago 2023",frontMatter:{title:"$userID",description:"$userID devolver\xe1 la identificaci\xf3n de un usuario determinado.",id:"userID"},sidebar:"docs",previous:{title:"$userExists",permalink:"/es/docs/functions/user-related/userExists"},next:{title:"$userNickname",permalink:"/es/docs/functions/user-related/userNickname"}},b={},g=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],O={toc:g},k="wrapper";function D(e){var r=e,{components:t}=r,a=m(r,["components"]);return(0,n.kt)(k,d(p(p({},O),a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$userID")," devolver\xe1 la ID de un usuario determinado."),(0,n.kt)("h2",p({},{id:"uso"}),"Uso"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$userID[usuario]\n")),(0,n.kt)("h2",p({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Campo"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,n.kt)("th",p({parentName:"tr"},{align:"center"}),"Requerido"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"usuario"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"cadena, n\xfamero"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"El ID del usuario del que desea que se devuelva el rol m\xe1s alto."),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"verdadera")))),(0,n.kt)("h2",p({},{id:"ejemplos"}),"Ejemplo(s)"),(0,n.kt)("p",null,"Esto devolver\xe1 tu ID de usuario:"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'userID',\n    code: `\n  $userID[$username]\n  `\n});\n")))}D.isMDXComponent=!0}}]);