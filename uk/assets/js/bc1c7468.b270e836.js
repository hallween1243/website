"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[23046],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(a),m=n,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return a?r.createElement(f,o(o({ref:t},p),{},{components:a})):r.createElement(f,o({ref:t},p))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},32385:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>g,contentTitle:()=>w,default:()=>k,frontMatter:()=>f,metadata:()=>b,toc:()=>y});var r=a(3905),n=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))c.call(t,a)&&p(e,a,t[a]);if(l)for(var a of l(t))s.call(t,a)&&p(e,a,t[a]);return e},u=(e,t)=>i(e,o(t)),m=(e,t)=>{var a={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&s.call(e,r)&&(a[r]=e[r]);return a};const f={title:"$awaitData",description:"$awaitData will return awaited data given in awaited commands.",id:"awaitData"},w=void 0,b={unversionedId:"functions/awaited-related/awaitData",id:"version-6.4.0/functions/awaited-related/awaitData",title:"$awaitData",description:"$awaitData will return awaited data given in awaited commands.",source:"@site/versioned_docs/version-6.4.0/functions/awaited-related/awaitData.md",sourceDirName:"functions/awaited-related",slug:"/functions/awaited-related/awaitData",permalink:"/uk/docs/functions/awaited-related/awaitData",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1690088438,formattedLastUpdatedAt:"23 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$awaitData",description:"$awaitData will return awaited data given in awaited commands.",id:"awaitData"},sidebar:"docs",previous:{title:"$awaitComponentsUntil",permalink:"/uk/docs/functions/awaited-related/awaitComponentsUntil"},next:{title:"$awaitMessageReactions",permalink:"/uk/docs/functions/awaited-related/awaitMessageReactions"}},g={},y=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],v={toc:y},O="wrapper";function k(e){var t=e,{components:a}=t,n=m(t,["components"]);return(0,r.kt)(O,u(d(d({},v),n),{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$awaitData")," will return awaited data given in awaited commands."),(0,r.kt)("h2",d({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$awaitData[name]\n")),(0,r.kt)("h2",d({},{id:"parameters"}),"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Field"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",d({parentName:"tr"},{align:"center"}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"name"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Awaited Data Name."),(0,r.kt)("td",d({parentName:"tr"},{align:"center"}),"true")))),(0,r.kt)("h2",d({},{id:"examples"}),"Example(s)"),(0,r.kt)("p",null,"This will return the ID of every server member and log it in your console:"),(0,r.kt)("pre",null,(0,r.kt)("code",d({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "awaitData",\n  code: `\n  $forEachMember[1s;{ "members": "$membersCount" };returnMembers;]\n  `\n});\n\nbot.awaitedCommand({\n  name: "returnMembers",\n  code: `\n  $log[ $authorID , is one out of $awaitData[members] members ]\n  `\n});\n')))}k.isMDXComponent=!0}}]);