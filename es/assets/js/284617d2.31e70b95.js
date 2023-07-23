"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[51892],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||o;return n?a.createElement(f,l(l({ref:t},p),{},{components:n})):a.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},59255:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>I,frontMatter:()=>f,metadata:()=>v,toc:()=>b});var a=n(3905),r=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&p(e,n,t[n]);if(i)for(var n of i(t))c.call(t,n)&&p(e,n,t[n]);return e},s=(e,t)=>o(e,l(t)),m=(e,t)=>{var n={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n};const f={title:"$interactionModal",description:"$interactionModal crea un usuario modal interactivo.",id:"interactionModal"},g=void 0,v={unversionedId:"functions/interaction-related/interactionModal",id:"version-6.4.0/functions/interaction-related/interactionModal",title:"$interactionModal",description:"$interactionModal crea un usuario modal interactivo.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/interaction-related/interactionModal.md",sourceDirName:"functions/interaction-related",slug:"/functions/interaction-related/interactionModal",permalink:"/es/docs/functions/interaction-related/interactionModal",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1690088438,formattedLastUpdatedAt:"23 jul 2023",frontMatter:{title:"$interactionModal",description:"$interactionModal crea un usuario modal interactivo.",id:"interactionModal"},sidebar:"docs",previous:{title:"$image",permalink:"/es/docs/functions/interaction-related/image"},next:{title:"$isAutoComplete",permalink:"/es/docs/functions/interaction-related/isAutoComplete"}},y={},b=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],k={toc:b},O="wrapper";function I(e){var t=e,{components:n}=t,r=m(t,["components"]);return(0,a.kt)(O,s(d(d({},k),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$interactionModal")," crea un modal interactivo de usuario."),(0,a.kt)("h2",d({},{id:"uso"}),"Uso"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$interactionModal[titulo;ID personalizado;componentes]\n")),(0,a.kt)("h2",d({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Campo"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Tipo"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,a.kt)("th",d({parentName:"tr"},{align:"center"}),"Requerido"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"T\xedtulo"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"consulta"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"El t\xedtulo de la modal que se mostrar\xe1 como Cabecera de Modal."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"verdadero")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"ID personalizado"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"consulta"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"El ID del componente."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"verdadero")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\xbfcomponentes?"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Los componentes de texto modal."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"verdadero")))),(0,a.kt)("h2",d({},{id:"ejemplos"}),"Ejemplo(s)"),(0,a.kt)("p",null,"Esto crear\xe1 un bot\xf3n y un modal que enviar\xe1 los datos introducidos al mismo canal y dar\xe1 una respuesta efemeral al usuario que envi\xf3 el formulario:"),(0,a.kt)("p",null,'Tenga en cuenta que requiere "',(0,a.kt)("strong",{parentName:"p"},"events: ",'["onMessage", "onInteractionCreate"]'),'" en su archivo principal (tambi\xe9n conocido como, en la mayor\xeda de los casos, index.js)'),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-js"}),'bot.command({\n    name: "interactionModal",\n    code: `\n$addButton[1;Press Me!;primary;exampleID;false]\nPretty Example!`\n}); // Cree un bot\xf3n que activar\xe1 el modal.\n\nbot.interactionCommand({\n    name: "exampleID",\n    prototype: "button",  // Usar "prototype" ya que esta interacci\xf3n pertenece a un bot\xf3n.\n\n    code: `\n$interactionModal[Example!;customID;\n  {actionRow:\n    {textInput:\xbfC\xf3mo te llamas?:1:nameInput:true:\xa1Tu bonito nombre!:2:200}\n  }\n  {actionRow:\n    {textInput:\xbfCual es tu edad?:1:ageInput:true:\xa1Alma joven!:1:3}\n  }\n  {actionRow:\n    {textInput:\xbfCu\xe1l es tu g\xe9nero?:2:genderInput:true:\xa1Cualquier cosa funcionar\xe1!:1:10}\n  }\n]`\n}); /* El modal en s\xed, usamos {textInput} para aceptar la entrada del usuario.\n\nEl uso correcto de {textInput} ser\xeda:\n\n{textInput:t\xedtulo:tipo(1 : peque\xf1o campo de texto, 2 :campo de texto grande):ID personalizado:requerido( true, false ):marcador de posici\xf3n:Valor m\xednimo:valor m\xe1ximo}\n\n*/\n\nbot.interactionCommand({\n    name: "customID",\n    prototype: "modal", // Usar "prototype" ya que esta interacci\xf3n pertenece a un modal.\n\n    code: `\n$interactionReply[Gracias por enviar este formulario!;;;;everyone;true]\n\n$title[$username envi\xf3 un formulario!;$userAvatar]\n$addField[Su nombre es..;$textInputValue[nameInput]]\n$addField[su edad es..;$textInputValue[ageInput]]\n$addField[su genero es..;$textInputValue[genderInput]]`\n}); /* Devolver\xe1 los valores ingresados \u200b\u200b\u200b\u200banteriormente desde el modal. Usando $textInputValue para recuperarlos.\n\nTambi\xe9n puedes usar $channelSendMessage[canalID;contenido] para enviar los datos a otro canal.\n$channelSendMessage[$channelID;{newEmbed:{title:$username envi\xf3 un formulario!:$userAvatar}{field:Su nombre es..:$textInputValue[nameInput]}{field:Su edad es..:$textInputValue[ageInput]}{field:Su genero es..:$textInputValue[genderInput]}}]\n*/\n')))}I.isMDXComponent=!0}}]);