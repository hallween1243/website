"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[97674],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,f=s["".concat(d,".").concat(m)]||s[m]||c[m]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},46019:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>g,default:()=>w,frontMatter:()=>f,metadata:()=>b,toc:()=>v});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&u(e,n,t[n]);if(i)for(var n of i(t))p.call(t,n)&&u(e,n,t[n]);return e},c=(e,t)=>o(e,l(t)),m=(e,t)=>{var n={};for(var r in e)d.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$guildCooldown",description:"$guildCooldown establecer\xe1 un tiempo de enfriamiento para el gremio despu\xe9s de ser usado.",id:"guildCooldown"},g=void 0,b={unversionedId:"functions/variables-related/guildCooldown",id:"version-6.4.0/functions/variables-related/guildCooldown",title:"$guildCooldown",description:"$guildCooldown establecer\xe1 un tiempo de enfriamiento para el gremio despu\xe9s de ser usado.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/variables-related/guildCooldown.md",sourceDirName:"functions/variables-related",slug:"/functions/variables-related/guildCooldown",permalink:"/es/docs/functions/variables-related/guildCooldown",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1690769721,formattedLastUpdatedAt:"31 jul 2023",frontMatter:{title:"$guildCooldown",description:"$guildCooldown establecer\xe1 un tiempo de enfriamiento para el gremio despu\xe9s de ser usado.",id:"guildCooldown"},sidebar:"docs",previous:{title:"$globalUserLeaderBoard",permalink:"/es/docs/functions/variables-related/globalUserLeaderBoard"},next:{title:"$guildLeaderBoard",permalink:"/es/docs/functions/variables-related/guildLeaderBoard"}},k={},v=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],y={toc:v},N="wrapper";function w(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(N,c(s(s({},y),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$guildCooldown")," establecer\xe1 un enfriamiento basado en gremios."),(0,r.kt)("h2",s({},{id:"uso"}),"Uso"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$guildCooldown[time;errorMessage]\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Puedes recuperar el tiempo de enfriamiento restante en la funci\xf3n ",(0,r.kt)("inlineCode",{parentName:"li"},"$guildCooldown")," usando ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"%time%"))," o cualquiera de los siguientes a continuaci\xf3n.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"%time%"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"%year%"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"%month%"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"%week%"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"%day%"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"%hour%"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"%min%"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"%sec%")," ",(0,r.kt)("inlineCode",{parentName:"li"},"%ms%"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"%fullTime%"))))),(0,r.kt)("h2",s({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Campo"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,r.kt)("th",s({parentName:"tr"},{align:"center"}),"Requerido"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"tiempo"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"n\xfamero"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"La duraci\xf3n del enfriamiento."),(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),"verdadero")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"mensaje de error"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"consulta"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Mensaje de error cuando queda tiempo para el tiempo de enfriamiento."),(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),"verdadero")))),(0,r.kt)("h2",s({},{id:"ejemplos"}),"Ejemplo(s)"),(0,r.kt)("p",null,"Esto establecer\xe1 un tiempo de reutilizaci\xf3n para un comando que s\xf3lo se aplica al gremio y devolver\xe1 el tiempo de reutilizaci\xf3n restante:"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'guildCooldown',\n    code: `\n  hola\n  $guildCooldown[2m;Please wait %time% to execute this command again.]\n  `\n});\n")))}w.isMDXComponent=!0}}]);