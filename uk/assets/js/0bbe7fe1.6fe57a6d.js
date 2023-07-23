"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[82999],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,k=d["".concat(c,".").concat(m)]||d[m]||s[m]||l;return r?n.createElement(k,o(o({ref:t},u),{},{components:r})):n.createElement(k,o({ref:t},u))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},80260:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>g,contentTitle:()=>f,default:()=>N,frontMatter:()=>k,metadata:()=>b,toc:()=>y});var n=r(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&u(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&u(e,r,t[r]);return e},s=(e,t)=>l(e,o(t)),m=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const k={title:"$createWebhook",description:"$createWebhook \u0441\u0442\u0432\u043e\u0440\u0438\u0442\u044c \u0432\u0435\u0431\u0433\u0430\u043a.",id:"createWebhook"},f=void 0,b={unversionedId:"functions/guild-related/createWebhook",id:"version-6.4.0/functions/guild-related/createWebhook",title:"$createWebhook",description:"$createWebhook \u0441\u0442\u0432\u043e\u0440\u0438\u0442\u044c \u0432\u0435\u0431\u0433\u0430\u043a.",source:"@site/i18n/uk/docusaurus-plugin-content-docs/version-6.4.0/functions/guild-related/createWebhook.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/createWebhook",permalink:"/uk/docs/functions/guild-related/createWebhook",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1690088438,formattedLastUpdatedAt:"23 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$createWebhook",description:"$createWebhook \u0441\u0442\u0432\u043e\u0440\u0438\u0442\u044c \u0432\u0435\u0431\u0433\u0430\u043a.",id:"createWebhook"},sidebar:"docs",previous:{title:"$createThread",permalink:"/uk/docs/functions/guild-related/createThread"},next:{title:"$deleteChannel",permalink:"/uk/docs/functions/guild-related/deleteChannel"}},g={},y=[{value:"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",level:2},{value:"\u041f\u0440\u0438\u043a\u043b\u0430\u0434(\u0438)",id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438",level:2}],h={toc:y},v="wrapper";function N(e){var t=e,{components:r}=t,a=m(t,["components"]);return(0,n.kt)(v,s(d(d({},h),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$createWebhook")," \u0441\u0442\u0432\u043e\u0440\u0438\u0442\u044c \u0432\u0435\u0431\u0445\u0443\u043a."),(0,n.kt)("h2",d({},{id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"}),"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$createWebhook[channelID;name;avatar;reason;sep?]\n")),(0,n.kt)("h2",d({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u041f\u043e\u043b\u0435"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u0422\u0438\u043f"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441"),(0,n.kt)("th",d({parentName:"tr"},{align:"center"}),"\u041e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u0439"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"ID \u043a\u0430\u043d\u0430\u043b\u0443"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u0446\u0456\u043b\u0435"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"ID \u043a\u0430\u043d\u0430\u043b\u0443, \u0432 \u044f\u043a\u043e\u043c\u0443 \u0431\u0443\u0434\u0435 \u0441\u0442\u0432\u043e\u0440\u0435\u043d\u043e \u0432\u0435\u0431\u0433\u0430\u043a."),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u043d\u0430\u0437\u0432\u0430"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u0406\u043c'\u044f \u043f\u043e\u043a\u0430\u0437\u0443 \u0432\u0435\u0431\u0445\u0443\u043a\u0430."),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u0430\u0432\u0430\u0442\u0430\u0440"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u0410\u0432\u0430\u0442\u0430\u0440 \u0432\u0435\u0431\u0433\u0430\u043a\u0430 url."),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u043f\u0440\u0438\u0447\u0438\u043d\u0430"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u041f\u0440\u0438\u0447\u0438\u043d\u0430, \u044f\u043a\u0430 \u0431\u0443\u0434\u0435 \u0432\u0456\u0434\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u0438\u0441\u044f \u0432 \u0436\u0443\u0440\u043d\u0430\u043b\u0456 \u0430\u0443\u0434\u0438\u0442\u0443 \u0433\u0456\u043b\u044c\u0434\u0456\u0457."),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u043c\u0456\u0441\u0446\u0435?"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u0420\u043e\u0437\u0434\u0456\u043b\u044e\u0432\u0430\u0447, \u044f\u043a\u0438\u0439 \u0431\u0443\u0434\u0435 \u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0432\u0430\u0442\u0438\u0441\u044f \u0434\u043b\u044f \u0432\u0456\u0434\u043e\u043a\u0440\u0435\u043c\u043b\u0435\u043d\u043d\u044f \u0432\u0430\u0436\u043b\u0438\u0432\u0438\u0445 \u043e\u0431\u043b\u0456\u043a\u043e\u0432\u0438\u0445 \u0437\u0430\u043f\u0438\u0441\u0456\u0432, \u0442\u0430\u043a\u0438\u0445 \u044f\u043a \u0442\u043e\u043a\u0435\u043d \u0442\u0430 ID, ",(0,n.kt)("inlineCode",{parentName:"td"},","),"."),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u043d\u0456")))),(0,n.kt)("h2",d({},{id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438"}),"\u041f\u0440\u0438\u043a\u043b\u0430\u0434(\u0438)"),(0,n.kt)("p",null,"\u0426\u0435 \u0441\u0442\u0432\u043e\u0440\u0438\u0442\u044c \u0432\u0435\u0431\u0445\u0443\u043a \u0443 \u043f\u043e\u0442\u043e\u0447\u043d\u043e\u043c\u0443 \u043a\u0430\u043d\u0430\u043b\u0456:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'createWebhook',\n    \u043a\u043e\u0434: `\n  $createWebhook[$channelID;aoi.js is great;$userAvatar[$authorID];\u041f\u0440\u043e\u0441\u0442\u043e \u0442\u0435\u0441\u0442\u0443\u0432\u0430\u043d\u043d\u044f.;, ]\n  `\n});\n")))}N.isMDXComponent=!0}}]);