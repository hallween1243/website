"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[80368],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=c(n),f=o,m=p["".concat(u,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=f;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[p]="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},98483:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>y,default:()=>j,frontMatter:()=>m,metadata:()=>b,toc:()=>O});var r=n(3905),o=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&s(e,n,t[n]);if(a)for(var n of a(t))c.call(t,n)&&s(e,n,t[n]);return e},d=(e,t)=>i(e,l(t)),f=(e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&a)for(var r of a(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const m={title:"$mentionedRolesCount",description:"$mentionedRolesCount \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0443\u043f\u043e\u043c\u0438\u043d\u0430\u043d\u0438\u0439 \u0440\u043e\u043b\u0438 \u0432 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0438.",id:"mentionedRolesCount"},y=void 0,b={unversionedId:"functions/util-related/mentionedRolesCount",id:"version-6.4.0/functions/util-related/mentionedRolesCount",title:"$mentionedRolesCount",description:"$mentionedRolesCount \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0443\u043f\u043e\u043c\u0438\u043d\u0430\u043d\u0438\u0439 \u0440\u043e\u043b\u0438 \u0432 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0438.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/mentionedRolesCount.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/mentionedRolesCount",permalink:"/ru/docs/functions/util-related/mentionedRolesCount",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1690088438,formattedLastUpdatedAt:"23 \u0438\u044e\u043b. 2023 \u0433.",frontMatter:{title:"$mentionedRolesCount",description:"$mentionedRolesCount \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0443\u043f\u043e\u043c\u0438\u043d\u0430\u043d\u0438\u0439 \u0440\u043e\u043b\u0438 \u0432 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0438.",id:"mentionedRolesCount"},sidebar:"docs",previous:{title:"$mentionedRoles",permalink:"/ru/docs/functions/util-related/mentionedRoles"},next:{title:"$mentionedUsersCount",permalink:"/ru/docs/functions/util-related/mentionedUsersCount"}},v={},O=[{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",level:2}],g={toc:O},C="wrapper";function j(e){var t=e,{components:n}=t,o=f(t,["components"]);return(0,r.kt)(C,d(p(p({},g),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$mentionedRolesCount")," \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0443\u043f\u043e\u043c\u0438\u043d\u0430\u043d\u0438\u0439 \u043e \u0440\u043e\u043b\u0438 \u0432 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0438."),(0,r.kt)("h2",p({},{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"}),"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$mentionedRolesCount\n")),(0,r.kt)("h2",p({},{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"}),"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)"),(0,r.kt)("p",null,"\u042d\u0442\u043e \u0432\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 \u043a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e \u0443\u043f\u043e\u043c\u0438\u043d\u0430\u043d\u0438\u0439 \u043e \u0440\u043e\u043b\u0438 \u0432 \u0434\u0430\u043d\u043d\u043e\u043c \u0442\u0435\u043a\u0441\u0442\u0435 \u0442\u0435\u043a\u0441\u0442\u0430:"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'mentionedRolesCount',\n    code: `\n  \u0423 \u0432\u0430\u0441 \u0435\u0441\u0442\u044c: \u0440\u043e\u043b\u044c $mentionedRolesCount \u0443\u043f\u043e\u043c\u0438\u043d\u0430\u0435\u0442 \u0432 \u0432\u0430\u0448\u0435\u043c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0438!\n\xab\n});\n")))}j.isMDXComponent=!0}}]);