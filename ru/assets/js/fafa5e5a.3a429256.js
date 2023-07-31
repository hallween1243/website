"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[87417],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>y});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),p=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(a.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(n),d=i,y=s["".concat(a,".").concat(d)]||s[d]||f[d]||o;return n?r.createElement(y,l(l({ref:t},u),{},{components:n})):r.createElement(y,l({ref:t},u))}));function y(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=d;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c[s]="string"==typeof e?e:i,l[1]=c;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},24450:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>m,default:()=>j,frontMatter:()=>y,metadata:()=>g,toc:()=>v});var r=n(3905),i=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))a.call(t,n)&&u(e,n,t[n]);if(c)for(var n of c(t))p.call(t,n)&&u(e,n,t[n]);return e},f=(e,t)=>o(e,l(t)),d=(e,t)=>{var n={};for(var r in e)a.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const y={title:"$clientTyping",description:"$clientTyping \u0441\u0434\u0435\u043b\u0430\u0435\u0442 \u0432\u0430\u0448 \u0431\u043e\u0442 \u0442\u0438\u043f\u043e\u043c \u0432 \u043a\u0430\u043d\u0430\u043b\u0435 (\u043f\u043e\u043a\u0430\u0436\u0438\u0442\u0435 \u0447\u0442\u043e \u043e\u043d \u043f\u0435\u0447\u0430\u0442\u0430\u0435\u0442).",id:"clientTyping"},m=void 0,g={unversionedId:"functions/client-related/clientTyping",id:"version-6.4.0/functions/client-related/clientTyping",title:"$clientTyping",description:"$clientTyping \u0441\u0434\u0435\u043b\u0430\u0435\u0442 \u0432\u0430\u0448 \u0431\u043e\u0442 \u0442\u0438\u043f\u043e\u043c \u0432 \u043a\u0430\u043d\u0430\u043b\u0435 (\u043f\u043e\u043a\u0430\u0436\u0438\u0442\u0435 \u0447\u0442\u043e \u043e\u043d \u043f\u0435\u0447\u0430\u0442\u0430\u0435\u0442).",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-6.4.0/functions/client-related/clientTyping.md",sourceDirName:"functions/client-related",slug:"/functions/client-related/clientTyping",permalink:"/ru/docs/functions/client-related/clientTyping",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1690769721,formattedLastUpdatedAt:"31 \u0438\u044e\u043b. 2023 \u0433.",frontMatter:{title:"$clientTyping",description:"$clientTyping \u0441\u0434\u0435\u043b\u0430\u0435\u0442 \u0432\u0430\u0448 \u0431\u043e\u0442 \u0442\u0438\u043f\u043e\u043c \u0432 \u043a\u0430\u043d\u0430\u043b\u0435 (\u043f\u043e\u043a\u0430\u0436\u0438\u0442\u0435 \u0447\u0442\u043e \u043e\u043d \u043f\u0435\u0447\u0430\u0442\u0430\u0435\u0442).",id:"clientTyping"},sidebar:"docs",previous:{title:"$clientToken",permalink:"/ru/docs/functions/client-related/clientToken"},next:{title:"$fetchClientValues",permalink:"/ru/docs/functions/client-related/fetchClientValues"}},b={},v=[{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",level:2}],O={toc:v},T="wrapper";function j(e){var t=e,{components:n}=t,i=d(t,["components"]);return(0,r.kt)(T,f(s(s({},O),i),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$clientTyping")," \u0441\u0434\u0435\u043b\u0430\u0435\u0442 \u0432\u0430\u0448 \u0431\u043e\u0442 \u0442\u0438\u043f\u043e\u043c \u043a\u0430\u043d\u0430\u043b\u0430 (\u043f\u043e\u043a\u0430\u0436\u0435\u0442, \u0447\u0442\u043e \u043e\u043d \u043f\u0435\u0447\u0430\u0442\u0430\u0435\u0442)."),(0,r.kt)("h2",s({},{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"}),"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$clientTyping\n")),(0,r.kt)("h2",s({},{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"}),"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)"),(0,r.kt)("p",null,"\u041e\u0442\u043e\u0431\u0440\u0430\u0436\u0430\u0435\u0442\u0441\u044f \u0432\u0430\u0448 \u0431\u043e\u0442 \u043a\u0430\u043a \u043f\u0435\u0447\u0430\u0442\u0430\u044e\u0449\u0438\u0439 \u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u044e\u0449\u0438\u0439 \xab\u041f\u0440\u0438\u0432\u0435\u0442!\xbb \u043a\u0430\u043a \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435:"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'clientTyping',\n    code: `\n  Hello!\n  $clientTyping\n  `\n});\n")))}j.isMDXComponent=!0}}]);