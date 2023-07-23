"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[9848],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),s=a,f=u["".concat(p,".").concat(s)]||u[s]||m[s]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},18591:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>b,default:()=>h,frontMatter:()=>f,metadata:()=>y,toc:()=>v});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))d.call(t,n)&&c(e,n,t[n]);return e},m=(e,t)=>o(e,i(t)),s=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$ordinal",description:"$ordinal \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442 \u0447\u0438\u0441\u043b\u043e, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 1, 2, 3, 4.",id:"ordinal"},b=void 0,y={unversionedId:"functions/math-related/ordinal",id:"version-6.4.0/functions/math-related/ordinal",title:"$ordinal",description:"$ordinal \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442 \u0447\u0438\u0441\u043b\u043e, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 1, 2, 3, 4.",source:"@site/i18n/ru/docusaurus-plugin-content-docs/version-6.4.0/functions/math-related/ordinal.md",sourceDirName:"functions/math-related",slug:"/functions/math-related/ordinal",permalink:"/ru/docs/functions/math-related/ordinal",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1690088438,formattedLastUpdatedAt:"23 \u0438\u044e\u043b. 2023 \u0433.",frontMatter:{title:"$ordinal",description:"$ordinal \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442 \u0447\u0438\u0441\u043b\u043e, \u043d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 1, 2, 3, 4.",id:"ordinal"},sidebar:"docs",previous:{title:"$multi",permalink:"/ru/docs/functions/math-related/multi"},next:{title:"$round",permalink:"/ru/docs/functions/math-related/round"}},k={},v=[{value:"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b",level:2},{value:"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)",id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b",level:2}],g={toc:v},O="wrapper";function h(e){var t=e,{components:n}=t,a=s(t,["components"]);return(0,r.kt)(O,m(u(u({},g),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$ordinal")," \u0434\u043e\u0431\u0430\u0432\u043b\u044f\u0435\u0442 ",(0,r.kt)("inlineCode",{parentName:"p"},"st"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"nd"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"rd"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"th")," \u043d\u0430 \u0447\u0438\u0441\u043b\u043e, \u0442\u0430\u043a\u043e\u0435 \u043a\u0430\u043a ",(0,r.kt)("inlineCode",{parentName:"p"},"1-\u0439"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"2-\u044f"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"3-\u044f"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"4-\u044f"),"."),(0,r.kt)("h2",u({},{id:"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"}),"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$ordinal[number]\n")),(0,r.kt)("h2",u({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Nbg"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441\u0430\u043d\u0438\u0435"),(0,r.kt)("th",u({parentName:"tr"},{align:"center"}),"\u041d\u0443\u0436\u043d\u043e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u0447\u0438\u0441\u043b\u043e"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u0447\u0438\u0441\u043b\u043e"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"\u0427\u0438\u0441\u043b\u043e, \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0434\u043e\u0431\u0430\u0432\u0438\u0442 ",(0,r.kt)("inlineCode",{parentName:"td"},"st"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"nd"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"rd"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"th")," \u043a \u043d\u0435\u043c\u0443."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"\u0434\u0430")))),(0,r.kt)("h2",u({},{id:"\u043f\u0440\u0438\u043c\u0435\u0440\u044b"}),"\u041f\u0440\u0438\u043c\u0435\u0440(\u044b)"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'ordinal',\n    \u043a\u043e\u0434: `\n  $ordinal[12] -> \u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 12nd \n  $ordinal[50] -> \u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 50th\n  $ordinal[11] -> \u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 11st\n  $ordinal[88] -> \u0412\u043e\u0437\u0432\u0440\u0430\u0449\u0430\u0435\u0442 88th\n  `\n});\n")))}h.isMDXComponent=!0}}]);