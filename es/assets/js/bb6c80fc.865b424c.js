"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[80859],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),p=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(r),s=a,f=m["".concat(d,".").concat(s)]||m[s]||c[s]||o;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=s;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[m]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},3097:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>k,default:()=>N,frontMatter:()=>f,metadata:()=>b,toc:()=>g});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&u(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&u(e,r,t[r]);return e},c=(e,t)=>o(e,l(t)),s=(e,t)=>{var r={};for(var n in e)d.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const f={title:"$modifyWebhook",description:"$modifyWebhook modificar\xe1 un webhook determinado.",id:"modifyWebhook"},k=void 0,b={unversionedId:"functions/guild-related/modifyWebhook",id:"version-6.4.0/functions/guild-related/modifyWebhook",title:"$modifyWebhook",description:"$modifyWebhook modificar\xe1 un webhook determinado.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/guild-related/modifyWebhook.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/modifyWebhook",permalink:"/es/docs/functions/guild-related/modifyWebhook",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689718184,formattedLastUpdatedAt:"18 jul 2023",frontMatter:{title:"$modifyWebhook",description:"$modifyWebhook modificar\xe1 un webhook determinado.",id:"modifyWebhook"},sidebar:"docs",previous:{title:"$modifyRolePerms",permalink:"/es/docs/functions/guild-related/modifyRolePerms"},next:{title:"$ownerID",permalink:"/es/docs/functions/guild-related/ownerID"}},y={},g=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],h={toc:g},v="wrapper";function N(e){var t=e,{components:r}=t,a=s(t,["components"]);return(0,n.kt)(v,c(m(m({},h),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$modifyWebhook")," modificar\xe1 un webhook determinado."),(0,n.kt)("h2",m({},{id:"uso"}),"Uso"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$modifyWebhook[webhookID;nombre;avatar;canalID?;razon?]\n")),(0,n.kt)("h2",m({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Campo"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,n.kt)("th",m({parentName:"tr"},{align:"center"}),"Requerido"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"webhookID"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"entero"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"El ID de webhook para modificar."),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"verdadero")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"name"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"consulta"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Nuevo nombre de webhook."),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"verdadero")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"avatar"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Nuevo avatar de webhook."),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"verdadero")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"canalID?"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"entero"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"ID del canal en el que se encuentra el webhook."),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"falso")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"\xbfraz\xf3n?"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"cadena"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Raz\xf3n que se mostrar\xe1 en los registros de auditor\xeda del gremio."),(0,n.kt)("td",m({parentName:"tr"},{align:"center"}),"falso")))),(0,n.kt)("h2",m({},{id:"ejemplos"}),"Ejemplo(s)"),(0,n.kt)("p",null,"Esto modificar\xe1 un webhook existente y cambiar\xe1 su avatar a su avatar de usuario:"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'modifyWebhook',\n    code: `\n  $modifyWebhook[webhookID;Hello!;$userAvatar[$authorID];$channelID;Testing!]\n  `\n});\n")))}N.isMDXComponent=!0}}]);