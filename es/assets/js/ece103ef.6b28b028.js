"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[5634],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>v});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,v=p["".concat(i,".").concat(m)]||p[m]||c[m]||o;return r?n.createElement(v,l(l({ref:t},d),{},{components:r})):n.createElement(v,l({ref:t},d))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},43942:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>f,default:()=>N,frontMatter:()=>v,metadata:()=>g,toc:()=>y});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&d(e,r,t[r]);if(s)for(var r of s(t))u.call(t,r)&&d(e,r,t[r]);return e},c=(e,t)=>o(e,l(t)),m=(e,t)=>{var r={};for(var n in e)i.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const v={title:"$moveUser",description:"$moveUser mover\xe1 a un usuario determinado entre dos canales de voz.",id:"moveUser"},f=void 0,g={unversionedId:"functions/user-related/moveUser",id:"version-6.4.0/functions/user-related/moveUser",title:"$moveUser",description:"$moveUser mover\xe1 a un usuario determinado entre dos canales de voz.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/user-related/moveUser.md",sourceDirName:"functions/user-related",slug:"/functions/user-related/moveUser",permalink:"/es/docs/functions/user-related/moveUser",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1691974849,formattedLastUpdatedAt:"14 ago 2023",frontMatter:{title:"$moveUser",description:"$moveUser mover\xe1 a un usuario determinado entre dos canales de voz.",id:"moveUser"},sidebar:"docs",previous:{title:"$membersCount",permalink:"/es/docs/functions/user-related/membersCount"},next:{title:"$muteUser",permalink:"/es/docs/functions/user-related/muteUser"}},b={},y=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],k={toc:y},O="wrapper";function N(e){var t=e,{components:r}=t,a=m(t,["components"]);return(0,n.kt)(O,c(p(p({},k),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$moveUser")," mover\xe1 a un usuario determinado entre dos canales de voz."),(0,n.kt)("h2",p({},{id:"uso"}),"Uso"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$moveUser[servidorID;ID de usuario;canalID;razon?]\n")),(0,n.kt)("h2",p({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Campo"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,n.kt)("th",p({parentName:"tr"},{align:"center"}),"Requerido"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"servidorID"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"entero"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"El ID de la hermandad de donde est\xe1n ubicados los roles."),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"verdadero")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"usarioID"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"entero"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"El ID de usuario del usuario a mover."),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"verdadero")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"canalID"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"entero"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"El ID del canal de voz de donde se mover\xe1 el usuario."),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"verdadero")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"\xbfraz\xf3n?"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Raz\xf3n que se mostrar\xe1 en los registros de auditor\xeda del gremio."),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"falso")))),(0,n.kt)("h2",p({},{id:"ejemplos"}),"Ejemplo(s)"),(0,n.kt)("p",null,"Esto mover\xe1 un usuario a otro canal de voz:"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'moveUser',\n    code: `\n  $moveUser[$guildID;userID;new voice channel ID;Testing!]\n  `\n});\n")))}N.isMDXComponent=!0}}]);