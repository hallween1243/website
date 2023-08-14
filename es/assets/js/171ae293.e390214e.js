"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[7934],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),u=a,f=d["".concat(s,".").concat(u)]||d[u]||m[u]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},73943:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>b,contentTitle:()=>y,default:()=>T,frontMatter:()=>f,metadata:()=>v,toc:()=>O});var n=r(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&c(e,r,t[r]);if(l)for(var r of l(t))p.call(t,r)&&c(e,r,t[r]);return e},m=(e,t)=>o(e,i(t)),u=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const f={title:"$readyTimestamp",description:"$readyTimestamp devolver\xe1 el timestamp de cuando el bot estaba listo.",id:"readyTimestamp"},y=void 0,v={unversionedId:"functions/info-related/readyTimestamp",id:"version-6.4.0/functions/info-related/readyTimestamp",title:"$readyTimestamp",description:"$readyTimestamp devolver\xe1 el timestamp de cuando el bot estaba listo.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/info-related/readyTimestamp.md",sourceDirName:"functions/info-related",slug:"/functions/info-related/readyTimestamp",permalink:"/es/docs/functions/info-related/readyTimestamp",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1691974849,formattedLastUpdatedAt:"14 ago 2023",frontMatter:{title:"$readyTimestamp",description:"$readyTimestamp devolver\xe1 el timestamp de cuando el bot estaba listo.",id:"readyTimestamp"},sidebar:"docs",previous:{title:"$reactionCount",permalink:"/es/docs/functions/info-related/reactionCount"},next:{title:"$referenceChannelId",permalink:"/es/docs/functions/info-related/referenceChannelId"}},b={},O=[{value:"Uso",id:"uso",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],g={toc:O},j="wrapper";function T(e){var t=e,{components:r}=t,a=u(t,["components"]);return(0,n.kt)(j,m(d(d({},g),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$readyTimestamp")," devolver\xe1 el timestamp de cuando el bot estaba listo."),(0,n.kt)("h2",d({},{id:"uso"}),"Uso"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$readyTimestamp\n")),(0,n.kt)("h2",d({},{id:"ejemplos"}),"Ejemplo(s)"),(0,n.kt)("p",null,"Esto devolver\xe1 la \xfaltima vez que su bot arranc\xf3/estaba listo:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'readyTimestamp',\n    code: `\n  $readyTimestamp\n  `\n});\n")))}T.isMDXComponent=!0}}]);