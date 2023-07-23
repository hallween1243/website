"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[77913],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=a.createContext({}),p=function(e){var r=a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=p(e.components);return a.createElement(c.Provider,{value:r},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},y=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=p(t),y=n,m=d["".concat(c,".").concat(y)]||d[y]||s[y]||o;return t?a.createElement(m,l(l({ref:r},u),{},{components:t})):a.createElement(m,l({ref:r},u))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=y;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[d]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},44590:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>g,contentTitle:()=>f,default:()=>O,frontMatter:()=>m,metadata:()=>b,toc:()=>k});var a=t(3905),n=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,r,t)=>r in e?n(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,d=(e,r)=>{for(var t in r||(r={}))c.call(r,t)&&u(e,t,r[t]);if(i)for(var t of i(r))p.call(r,t)&&u(e,t,r[t]);return e},s=(e,r)=>o(e,l(r)),y=(e,r)=>{var t={};for(var a in e)c.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&i)for(var a of i(e))r.indexOf(a)<0&&p.call(e,a)&&(t[a]=e[a]);return t};const m={title:"$arrayForEach",description:"$arrayForEach \u0432\u0438\u043a\u043e\u043d\u0430\u0454 \u043e\u0447\u0456\u043a\u0443\u0432\u0430\u043d\u0443 \u043a\u043e\u043c\u0430\u043d\u0434\u0443 \u0434\u043b\u044f \u043a\u043e\u0436\u043d\u043e\u0433\u043e \u0435\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0443 \u043c\u0430\u0441\u0438\u0432\u0456.",id:"arrayForEach"},f=void 0,b={unversionedId:"functions/array-related/arrayForEach",id:"version-6.4.0/functions/array-related/arrayForEach",title:"$arrayForEach",description:"$arrayForEach \u0432\u0438\u043a\u043e\u043d\u0430\u0454 \u043e\u0447\u0456\u043a\u0443\u0432\u0430\u043d\u0443 \u043a\u043e\u043c\u0430\u043d\u0434\u0443 \u0434\u043b\u044f \u043a\u043e\u0436\u043d\u043e\u0433\u043e \u0435\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0443 \u043c\u0430\u0441\u0438\u0432\u0456.",source:"@site/i18n/uk/docusaurus-plugin-content-docs/version-6.4.0/functions/array-related/arrayForEach.md",sourceDirName:"functions/array-related",slug:"/functions/array-related/arrayForEach",permalink:"/uk/docs/functions/array-related/arrayForEach",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1690088438,formattedLastUpdatedAt:"23 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$arrayForEach",description:"$arrayForEach \u0432\u0438\u043a\u043e\u043d\u0430\u0454 \u043e\u0447\u0456\u043a\u0443\u0432\u0430\u043d\u0443 \u043a\u043e\u043c\u0430\u043d\u0434\u0443 \u0434\u043b\u044f \u043a\u043e\u0436\u043d\u043e\u0433\u043e \u0435\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0443 \u043c\u0430\u0441\u0438\u0432\u0456.",id:"arrayForEach"},sidebar:"docs",previous:{title:"$arrayFind",permalink:"/uk/docs/functions/array-related/arrayFind"},next:{title:"$arrayIncludes",permalink:"/uk/docs/functions/array-related/arrayIncludes"}},g={},k=[{value:"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",level:2}],v={toc:k},h="wrapper";function O(e){var r=e,{components:t}=r,n=y(r,["components"]);return(0,a.kt)(h,s(d(d({},v),n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$arrayForEach")," \u0432\u0438\u043a\u043e\u043d\u0430\u0454 \u043e\u0447\u0456\u043a\u0443\u0432\u0430\u043d\u0443 \u043a\u043e\u043c\u0430\u043d\u0434\u0443 \u0434\u043b\u044f \u043a\u043e\u0436\u043d\u043e\u0433\u043e \u0435\u043b\u0435\u043c\u0435\u043d\u0442\u0430 \u0432 \u043c\u0430\u0441\u0438\u0432\u0456."),(0,a.kt)("h2",d({},{id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"}),"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$arrayForEach[name;awaitedCommand;awaitData?]\n")),(0,a.kt)("h2",d({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"\u041f\u043e\u043b\u0435"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"\u0422\u0438\u043f"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441"),(0,a.kt)("th",d({parentName:"tr"},{align:"center"}),"\u041e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u0439"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u043d\u0430\u0437\u0432\u0430"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u041d\u0430\u0437\u0432\u0430 \u043c\u0430\u0441\u0438\u0432\u0443."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"awaitedCommand"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u041e\u0447\u0456\u043a\u0443\u0432\u0430\u043d\u0430 \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u0434\u043b\u044f \u0432\u0438\u043a\u043e\u043d\u0430\u043d\u043d\u044f."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"awaitData?"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u041e\u0447\u0456\u043a\u0443\u0432\u0430\u043d\u0456 \u0414\u0430\u043d\u0456."),(0,a.kt)("td",d({parentName:"tr"},{align:"center"}),"\u043d\u0456")))))}O.isMDXComponent=!0}}]);