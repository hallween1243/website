"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[60940],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||l;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9582:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>O,frontMatter:()=>f,metadata:()=>k,toc:()=>h});var r=n(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&u(e,n,t[n]);if(i)for(var n of i(t))p.call(t,n)&&u(e,n,t[n]);return e},d=(e,t)=>l(e,o(t)),m=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$hasRoles",description:"$hasRoles , \u0447\u0438 \u043c\u0430\u0454 \u0432\u043a\u0430\u0437\u0430\u043d\u0438\u0439 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447 \u0440\u043e\u043b\u0456, \u043f\u0435\u0440\u0435\u0440\u0430\u0445\u043e\u0432\u0430\u043d\u0456 \u0432 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430\u0445 \u0440\u043e\u043b\u0435\u0439.",id:"hasRoles"},g=void 0,k={unversionedId:"functions/util-related/hasRoles",id:"version-6.4.0/functions/util-related/hasRoles",title:"$hasRoles",description:"$hasRoles , \u0447\u0438 \u043c\u0430\u0454 \u0432\u043a\u0430\u0437\u0430\u043d\u0438\u0439 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447 \u0440\u043e\u043b\u0456, \u043f\u0435\u0440\u0435\u0440\u0430\u0445\u043e\u0432\u0430\u043d\u0456 \u0432 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430\u0445 \u0440\u043e\u043b\u0435\u0439.",source:"@site/i18n/uk/docusaurus-plugin-content-docs/version-6.4.0/functions/util-related/hasRoles.md",sourceDirName:"functions/util-related",slug:"/functions/util-related/hasRoles",permalink:"/uk/docs/functions/util-related/hasRoles",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1690088438,formattedLastUpdatedAt:"23 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$hasRoles",description:"$hasRoles , \u0447\u0438 \u043c\u0430\u0454 \u0432\u043a\u0430\u0437\u0430\u043d\u0438\u0439 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447 \u0440\u043e\u043b\u0456, \u043f\u0435\u0440\u0435\u0440\u0430\u0445\u043e\u0432\u0430\u043d\u0456 \u0432 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430\u0445 \u0440\u043e\u043b\u0435\u0439.",id:"hasRoles"},sidebar:"docs",previous:{title:"$hasPermsInChannel",permalink:"/uk/docs/functions/util-related/hasPermsInChannel"},next:{title:"$httpRequest",permalink:"/uk/docs/functions/util-related/httpRequest"}},y={},h=[{value:"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",level:2},{value:"\u041f\u0440\u0438\u043a\u043b\u0430\u0434(\u0438)",id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438",level:2}],b={toc:h},v="wrapper";function O(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(v,d(c(c({},b),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$hasRoles")," \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0442\u0438 \u0447\u0438 \u043d\u0430\u0434\u0430\u043d\u0438\u0439 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447 \u043c\u0430\u0454 \u0440\u043e\u043b\u0456, \u043f\u0435\u0440\u0435\u0440\u0430\u0445\u043e\u0432\u0430\u043d\u0456 \u0432 \u0430\u0440\u0433\u0443\u043c\u0435\u043d\u0442\u0430\u0445 \u0440\u043e\u043b\u0435\u0439."),(0,r.kt)("h2",c({},{id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"}),"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-php"}),"$hasRoles[guildID;userID;...roles]\n")),(0,r.kt)("h2",c({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"\u041f\u043e\u043b\u0435"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"\u0422\u0438\u043f"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441"),(0,r.kt)("th",c({parentName:"tr"},{align:"center"}),"\u041e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u0439"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u0433\u0456\u043b\u044c\u0434\u0456\u044f"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u0446\u0456\u043b\u0435"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"ID \u0433\u0456\u043b\u044c\u0434\u0456\u0457, \u0432 \u044f\u043a\u043e\u043c\u0443 \u043f\u0440\u0438\u0441\u0443\u0442\u043d\u0456 \u0440\u043e\u043b\u0456."),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"ID \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u0446\u0456\u043b\u0435"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"ID \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447\u0430, \u044f\u043a\u0438\u0439 \u043c\u0430\u0454 \u0440\u043e\u043b\u0456."),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"...\u0440\u043e\u043b\u0456"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u0446\u0456\u043b\u0435"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u0420\u043e\u043b\u0456, \u044f\u043a\u0456 \u0431\u0443\u0434\u0443\u0442\u044c \u043f\u0435\u0440\u0435\u0432\u0456\u0440\u0435\u043d\u0456."),(0,r.kt)("td",c({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")))),(0,r.kt)("h2",c({},{id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438"}),"\u041f\u0440\u0438\u043a\u043b\u0430\u0434(\u0438)"),(0,r.kt)("p",null,"\u0426\u0435 \u043f\u043e\u0432\u0435\u0440\u043d\u0435 ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," , \u043a\u043e\u043b\u0438 \u043a\u043e\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0447 \u043c\u0430\u0454 \u0440\u043e\u043b\u0456 \u0443 \u0441\u043f\u0438\u0441\u043a\u0443:"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'hasRoles',\n    \u043a\u043e\u0434: `\n  $hasRoles[$guildID;$authorID;$findRole[Owner]]\n  `\n});\n")))}O.isMDXComponent=!0}}]);