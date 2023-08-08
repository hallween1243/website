"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[78219],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,f=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(f,l(l({ref:t},c),{},{components:n})):r.createElement(f,l({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},17889:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>v,default:()=>O,frontMatter:()=>f,metadata:()=>g,toc:()=>y});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))i.call(t,n)&&c(e,n,t[n]);if(s)for(var n of s(t))u.call(t,n)&&c(e,n,t[n]);return e},d=(e,t)=>o(e,l(t)),m=(e,t)=>{var n={};for(var r in e)i.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$usersInChannel",description:"$usersInChannel devolver\xe1 todos los usuarios conectados al canal de voz especificado.",id:"usersInChannel"},v=void 0,g={unversionedId:"functions/user-related/usersInChannel",id:"version-6.4.0/functions/user-related/usersInChannel",title:"$usersInChannel",description:"$usersInChannel devolver\xe1 todos los usuarios conectados al canal de voz especificado.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/user-related/usersInChannel.md",sourceDirName:"functions/user-related",slug:"/functions/user-related/usersInChannel",permalink:"/es/docs/functions/user-related/usersInChannel",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1691521389,formattedLastUpdatedAt:"8 ago 2023",frontMatter:{title:"$usersInChannel",description:"$usersInChannel devolver\xe1 todos los usuarios conectados al canal de voz especificado.",id:"usersInChannel"},sidebar:"docs",previous:{title:"$usersBanned",permalink:"/es/docs/functions/user-related/usersBanned"},next:{title:"$usersWithRole",permalink:"/es/docs/functions/user-related/usersWithRole"}},b={},y=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],k={toc:y},h="wrapper";function O(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(h,d(p(p({},k),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$usersInChannel")," devolver\xe1 todos los usuarios conectados al canal de voz especificado."),(0,r.kt)("h2",p({},{id:"uso"}),"Uso"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$usersInChannel[servidorID;opcion?;sep?]\n")),(0,r.kt)("h2",p({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Campo"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,r.kt)("th",p({parentName:"tr"},{align:"center"}),"Requerido"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"canalID"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"entero"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Canal de voz."),(0,r.kt)("td",p({parentName:"tr"},{align:"center"}),"verdadero")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"opci\xf3n?"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"cadena"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"C\xf3mo devolver los usuarios ",(0,r.kt)("br",null)," 1. ",(0,r.kt)("strong",{parentName:"td"},"id")," (por defecto) ",(0,r.kt)("br",null)," 2. ",(0,r.kt)("strong",{parentName:"td"},"usuario")," - menciona a los usuarios"),(0,r.kt)("td",p({parentName:"tr"},{align:"center"}),"falso")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"sep?"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"cadena"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"El separador para separar los valores devueltos."),(0,r.kt)("td",p({parentName:"tr"},{align:"center"}),"falso")))),(0,r.kt)("h2",p({},{id:"ejemplos"}),"Ejemplo(s)"),(0,r.kt)("p",null,"Esto devolver\xe1 los usuarios conectados a un canal de voz:"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'usersInChannel',\n    code: `\n  $usersInChannel[$voiceID;user;, ]\n  `\n});\n")))}O.isMDXComponent=!0}}]);