"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[34803],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),p=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(d.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=p(a),m=r,f=s["".concat(d,".").concat(m)]||s[m]||u[m]||l;return a?n.createElement(f,o(o({ref:t},c),{},{components:a})):n.createElement(f,o({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[s]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8862:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>v,contentTitle:()=>k,default:()=>w,frontMatter:()=>f,metadata:()=>g,toc:()=>b});var n=a(3905),r=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,s=(e,t)=>{for(var a in t||(t={}))d.call(t,a)&&c(e,a,t[a]);if(i)for(var a of i(t))p.call(t,a)&&c(e,a,t[a]);return e},u=(e,t)=>l(e,o(t)),m=(e,t)=>{var a={};for(var n in e)d.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&p.call(e,n)&&(a[n]=e[n]);return a};const f={title:"$ifAwaited",description:"$ifAwaited comprobar\xe1 una condici\xf3n y devolver\xe1 verdadero o falso dependiendo de que la condici\xf3n sea verdadera o falsa.",id:"ifAwaited"},k=void 0,g={unversionedId:"functions/misc-related/ifAwaited",id:"version-6.4.0/functions/misc-related/ifAwaited",title:"$ifAwaited",description:"$ifAwaited comprobar\xe1 una condici\xf3n y devolver\xe1 verdadero o falso dependiendo de que la condici\xf3n sea verdadera o falsa.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/misc-related/ifAwaited.md",sourceDirName:"functions/misc-related",slug:"/functions/misc-related/ifAwaited",permalink:"/es/docs/functions/misc-related/ifAwaited",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1690769721,formattedLastUpdatedAt:"31 jul 2023",frontMatter:{title:"$ifAwaited",description:"$ifAwaited comprobar\xe1 una condici\xf3n y devolver\xe1 verdadero o falso dependiendo de que la condici\xf3n sea verdadera o falsa.",id:"ifAwaited"},sidebar:"docs",previous:{title:"$if",permalink:"/es/docs/functions/misc-related/if"},next:{title:"$isTicket",permalink:"/es/docs/functions/misc-related/isTicket"}},v={},b=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Despu\xe9s del operador matem\xe1tico",id:"despu\xe9s-del-operador-matem\xe1tico",level:4},{value:"Ejemplo(s)",id:"ejemplos",level:2}],y={toc:b},N="wrapper";function w(e){var t=e,{components:a}=t,r=m(t,["components"]);return(0,n.kt)(N,u(s(s({},y),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$ifAwaited")," comprobar\xe1 una condici\xf3n y devolver\xe1 verdadero o falso dependiendo de que la condici\xf3n sea verdadera o falsa."),(0,n.kt)("h2",s({},{id:"uso"}),"Uso"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$if[condicion;verdadero;falso?]\n")),(0,n.kt)("h2",s({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Campo"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Descripci\xf3n"),(0,n.kt)("th",s({parentName:"tr"},{align:"center"}),"Requerido"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"condici\xf3n"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"cadena"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Condici\xf3n para usar"),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),"verdadero")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"verdadero"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"cadena"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Qu\xe9 volver cuando la condici\xf3n es verdadera."),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),"verdadero")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"falso?"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"cadena"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"Qu\xe9 volver cuando la condici\xf3n es falsa."),(0,n.kt)("td",s({parentName:"tr"},{align:"center"}),"falso")))),(0,n.kt)("h4",s({},{id:"despu\xe9s-del-operador-matem\xe1tico"}),"Despu\xe9s del operador matem\xe1tico"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Operador"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"Las expresiones matem\xe1ticas"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"=="),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"es igual a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"!="),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"no es igual a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"<="),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"es inferior o igual a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),">","="),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"mayor que o igual a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),">"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"es superior a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"<"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"menos que")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\\ "),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"|"," O l\xf3gico")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"&&"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"conjunci\xf3n causal")))),(0,n.kt)("h2",s({},{id:"ejemplos"}),"Ejemplo(s)"),(0,n.kt)("p",null,"Esto ejecutar\xe1 el comando ",(0,n.kt)("inlineCode",{parentName:"p"},"awaitedCommand")," esperado ya que la declaraci\xf3n es verdadera:"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "ifAwaited",\n    code: `\n    $ifAwaited[1==1;{execute:awaitedCommand}]\n    `\n});\n\nbot.awaitedCommand({\n    name: "awaitedCommand",\n    code: `\n    $sendMessage[That\'s true!;false]\n    `\n});\n')))}w.isMDXComponent=!0}}]);