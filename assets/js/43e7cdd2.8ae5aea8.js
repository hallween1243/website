"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[48913],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},g="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),g=p(n),u=s,m=g["".concat(i,".").concat(u)]||g[u]||d[u]||a;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[g]="string"==typeof e?e:s,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8174:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>f,default:()=>O,frontMatter:()=>m,metadata:()=>v,toc:()=>b});var r=n(3905),s=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,g=(e,t)=>{for(var n in t||(t={}))i.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&c(e,n,t[n]);return e},d=(e,t)=>a(e,o(t)),u=(e,t)=>{var n={};for(var r in e)i.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const m={title:"$sendCrosspostingMessage",description:"$sendCrosspostingMessage will crosspost a given message to the given channels.",id:"sendCrosspostingMessage"},f=void 0,v={unversionedId:"functions/message-related/sendCrosspostingMessage",id:"version-6.4.0/functions/message-related/sendCrosspostingMessage",title:"$sendCrosspostingMessage",description:"$sendCrosspostingMessage will crosspost a given message to the given channels.",source:"@site/versioned_docs/version-6.4.0/functions/message-related/sendCrosspostingMessage.md",sourceDirName:"functions/message-related",slug:"/functions/message-related/sendCrosspostingMessage",permalink:"/docs/functions/message-related/sendCrosspostingMessage",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1691521389,formattedLastUpdatedAt:"Aug 8, 2023",frontMatter:{title:"$sendCrosspostingMessage",description:"$sendCrosspostingMessage will crosspost a given message to the given channels.",id:"sendCrosspostingMessage"},sidebar:"docs",previous:{title:"$pinMessage",permalink:"/docs/functions/message-related/pinMessage"},next:{title:"$sendMessage",permalink:"/docs/functions/message-related/sendMessage"}},y={},b=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],h={toc:b},k="wrapper";function O(e){var t=e,{components:n}=t,s=u(t,["components"]);return(0,r.kt)(k,d(g(g({},h),s),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$sendCrosspostingMessage")," will crosspost a given message to the given channels."),(0,r.kt)("h2",g({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-php"}),"$sendCrosspostingMessage[content;...channelIDs]\n")),(0,r.kt)("h2",g({},{id:"parameters"}),"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",g({parentName:"tr"},{align:null}),"Field"),(0,r.kt)("th",g({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",g({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",g({parentName:"tr"},{align:"center"}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"content"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"The message to send."),(0,r.kt)("td",g({parentName:"tr"},{align:"center"}),"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",g({parentName:"tr"},{align:null}),"...channelIDs"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"integer"),(0,r.kt)("td",g({parentName:"tr"},{align:null}),"Where to send the given message."),(0,r.kt)("td",g({parentName:"tr"},{align:"center"}),"true")))),(0,r.kt)("h2",g({},{id:"examples"}),"Example(s)"),(0,r.kt)("p",null,"This will crosspost a message to multiple channels in your server:"),(0,r.kt)("pre",null,(0,r.kt)("code",g({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'sendCrosspostingMessage',\n    code: `\n   $sendCrosspostingMessage[Hello!;$channelID;$randomChannelID]\n  `\n});\n")))}O.isMDXComponent=!0}}]);