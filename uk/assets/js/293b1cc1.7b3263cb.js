"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[31125],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(n),f=a,m=s["".concat(c,".").concat(f)]||s[f]||d[f]||o;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},44139:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>v,default:()=>k,frontMatter:()=>m,metadata:()=>y,toc:()=>w});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&u(e,n,t[n]);if(i)for(var n of i(t))p.call(t,n)&&u(e,n,t[n]);return e},d=(e,t)=>o(e,l(t)),f=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const m={title:"$newRole",description:"$newRole \u043c\u0456\u0441\u0442\u0438\u0442\u044c \u0434\u0430\u043d\u0456 \u043f\u0440\u043e \u0441\u0442\u0432\u043e\u0440\u0435\u043d\u0443 \u0440\u043e\u043b\u044c, \u043e\u043d\u043e\u0432\u043b\u0435\u043d\u0443 \u0430\u0431\u043e \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u0443. \u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454\u0442\u044c\u0441\u044f \u0432 \u044f\u043a\u043e\u0441\u0442\u0456 \u0440\u043e\u043b\u0456 \u043e\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044f / \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u043d\u044f / \u0441\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f \u043f\u043e\u0434\u0456\u0439, \u0430\u0431\u043e \u0456\u043d\u0448\u0438\u0439 \u0432\u043e\u043d\u0430 \u043d\u0435 \u0434\u0430\u0441\u0442\u044c \u0436\u043e\u0434\u043d\u0438\u0445 \u0434\u0430\u043d\u0438\u0445.",id:"newRole"},v=void 0,y={unversionedId:"functions/event-related/newRole",id:"version-6.4.0/functions/event-related/newRole",title:"$newRole",description:"$newRole \u043c\u0456\u0441\u0442\u0438\u0442\u044c \u0434\u0430\u043d\u0456 \u043f\u0440\u043e \u0441\u0442\u0432\u043e\u0440\u0435\u043d\u0443 \u0440\u043e\u043b\u044c, \u043e\u043d\u043e\u0432\u043b\u0435\u043d\u0443 \u0430\u0431\u043e \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u0443. \u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454\u0442\u044c\u0441\u044f \u0432 \u044f\u043a\u043e\u0441\u0442\u0456 \u0440\u043e\u043b\u0456 \u043e\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044f / \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u043d\u044f / \u0441\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f \u043f\u043e\u0434\u0456\u0439, \u0430\u0431\u043e \u0456\u043d\u0448\u0438\u0439 \u0432\u043e\u043d\u0430 \u043d\u0435 \u0434\u0430\u0441\u0442\u044c \u0436\u043e\u0434\u043d\u0438\u0445 \u0434\u0430\u043d\u0438\u0445.",source:"@site/i18n/uk/docusaurus-plugin-content-docs/version-6.4.0/functions/event-related/newRole.md",sourceDirName:"functions/event-related",slug:"/functions/event-related/newRole",permalink:"/uk/docs/functions/event-related/newRole",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1691974849,formattedLastUpdatedAt:"14 \u0441\u0435\u0440\u043f. 2023 \u0440.",frontMatter:{title:"$newRole",description:"$newRole \u043c\u0456\u0441\u0442\u0438\u0442\u044c \u0434\u0430\u043d\u0456 \u043f\u0440\u043e \u0441\u0442\u0432\u043e\u0440\u0435\u043d\u0443 \u0440\u043e\u043b\u044c, \u043e\u043d\u043e\u0432\u043b\u0435\u043d\u0443 \u0430\u0431\u043e \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u0443. \u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454\u0442\u044c\u0441\u044f \u0432 \u044f\u043a\u043e\u0441\u0442\u0456 \u0440\u043e\u043b\u0456 \u043e\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044f / \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u043d\u044f / \u0441\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f \u043f\u043e\u0434\u0456\u0439, \u0430\u0431\u043e \u0456\u043d\u0448\u0438\u0439 \u0432\u043e\u043d\u0430 \u043d\u0435 \u0434\u0430\u0441\u0442\u044c \u0436\u043e\u0434\u043d\u0438\u0445 \u0434\u0430\u043d\u0438\u0445.",id:"newRole"},sidebar:"docs",previous:{title:"$newPresence",permalink:"/uk/docs/functions/event-related/newPresence"},next:{title:"$newState",permalink:"/uk/docs/functions/event-related/newState"}},b={},w=[{value:"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",level:2}],O={toc:w},g="wrapper";function k(e){var t=e,{components:n}=t,a=f(t,["components"]);return(0,r.kt)(g,d(s(s({},O),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$newRole")," \u0437\u0431\u0435\u0440\u0456\u0433\u0430\u0454 \u0434\u0430\u043d\u0456 \u0440\u043e\u043b\u0456 \u0441\u0442\u0432\u043e\u0440\u0435\u043d\u043e\u0457 \u0440\u043e\u043b\u0456, \u043e\u043d\u043e\u0432\u043b\u0435\u043d\u0456 \u0430\u0431\u043e \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u0456. \u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u043e\u0432\u0443\u0454\u0442\u044c\u0441\u044f \u0443 \u044f\u043a\u043e\u0441\u0442\u0456 \u0440\u043e\u043b\u0456 \u043e\u043d\u043e\u0432\u043b\u0435\u043d\u043d\u044f / \u0432\u0438\u0434\u0430\u043b\u0435\u043d\u043d\u044f / \u0441\u0442\u0432\u043e\u0440\u0435\u043d\u043d\u044f \u043f\u043e\u0434\u0456\u0439, \u0430\u0431\u043e \u0434\u043b\u044f \u0442\u043e\u0433\u043e \u0449\u043e\u0431 \u0432\u043e\u043d\u0438 \u043d\u0435 \u0434\u0430\u0432\u0430\u043b\u0438 \u0434\u0430\u043d\u0438\u0445."),(0,r.kt)("h2",s({},{id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"}),"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$newRole[option]\n")),(0,r.kt)("h2",s({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"\u041f\u043e\u043b\u0435"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"\u0422\u0438\u043f"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441"),(0,r.kt)("th",s({parentName:"tr"},{align:"center"}),"\u041e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u0439"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u043e\u043f\u0446\u0456\u044f"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"\u041c\u043e\u0436\u043b\u0438\u0432\u0456\u0441\u0442\u044c \u043e\u0442\u0440\u0438\u043c\u0430\u0442\u0438."),(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")))))}k.isMDXComponent=!0}}]);