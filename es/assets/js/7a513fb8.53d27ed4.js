"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[49790],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),p=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(a.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,a=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),f=o,m=u["".concat(a,".").concat(f)]||u[f]||d[f]||l;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,i=new Array(l);i[0]=f;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},73302:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>v,default:()=>T,frontMatter:()=>m,metadata:()=>k,toc:()=>b});var r=n(3905),o=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))a.call(t,n)&&s(e,n,t[n]);if(c)for(var n of c(t))p.call(t,n)&&s(e,n,t[n]);return e},d=(e,t)=>l(e,i(t)),f=(e,t)=>{var n={};for(var r in e)a.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const m={title:"$clientToken",description:"$clientToken devolver\xe1 el token del cliente.",id:"clientToken"},v=void 0,k={unversionedId:"functions/client-related/clientToken",id:"version-6.4.0/functions/client-related/clientToken",title:"$clientToken",description:"$clientToken devolver\xe1 el token del cliente.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/client-related/clientToken.md",sourceDirName:"functions/client-related",slug:"/functions/client-related/clientToken",permalink:"/es/docs/functions/client-related/clientToken",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1690088438,formattedLastUpdatedAt:"23 jul 2023",frontMatter:{title:"$clientToken",description:"$clientToken devolver\xe1 el token del cliente.",id:"clientToken"},sidebar:"docs",previous:{title:"$clientPrefixes",permalink:"/es/docs/functions/client-related/clientPrefixes"},next:{title:"$clientTyping",permalink:"/es/docs/functions/client-related/clientTyping"}},y={},b=[{value:"Uso",id:"uso",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],O={toc:b},g="wrapper";function T(e){var t=e,{components:n}=t,o=f(t,["components"]);return(0,r.kt)(g,d(u(u({},O),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$clientToken")," devolver\xe1 el token del cliente."),(0,r.kt)("h2",u({},{id:"uso"}),"Uso"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$clientToken\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"}," \u26a0 Nunca debes compartir tu Discord Bot Token con nadie."))),(0,r.kt)("h2",u({},{id:"ejemplos"}),"Ejemplo(s)"),(0,r.kt)("p",null,"Esto devolver\xe1 el Token del cliente:"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'clientToken',\n    code: `\n  $clientToken\n  `\n});\n")))}T.isMDXComponent=!0}}]);