"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[67264],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,f=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},50855:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>b,default:()=>h,frontMatter:()=>f,metadata:()=>g,toc:()=>v});var r=n(3905),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))d.call(t,n)&&s(e,n,t[n]);return e},u=(e,t)=>i(e,o(t)),m=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&d.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$addClientReactions",description:"$addClientReactions will add a reaction to the bot's message.",id:"addClientReactions"},b=void 0,g={unversionedId:"functions/interaction-related/addClientReactions",id:"version-6.4.0/functions/interaction-related/addClientReactions",title:"$addClientReactions",description:"$addClientReactions will add a reaction to the bot's message.",source:"@site/versioned_docs/version-6.4.0/functions/interaction-related/addClientReactions.md",sourceDirName:"functions/interaction-related",slug:"/functions/interaction-related/addClientReactions",permalink:"/docs/functions/interaction-related/addClientReactions",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1689718184,formattedLastUpdatedAt:"Jul 18, 2023",frontMatter:{title:"$addClientReactions",description:"$addClientReactions will add a reaction to the bot's message.",id:"addClientReactions"},sidebar:"docs",previous:{title:"$addButton",permalink:"/docs/functions/interaction-related/addButton"},next:{title:"$addCmdReactions",permalink:"/docs/functions/interaction-related/addCmdReactions"}},y={},v=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],O={toc:v},k="wrapper";function h(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(k,u(p(p({},O),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$addClientReactions")," will add a reaction to the bot's message."),(0,r.kt)("h2",p({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$addClientReactions[...reactions]\n")),(0,r.kt)("h2",p({},{id:"parameters"}),"Parameters"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Field"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",p({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",p({parentName:"tr"},{align:"center"}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:null}),"reactions"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",p({parentName:"tr"},{align:null}),"Reactions to add."),(0,r.kt)("td",p({parentName:"tr"},{align:"center"}),"true")))),(0,r.kt)("h2",p({},{id:"examples"}),"Example(s)"),(0,r.kt)("p",null,'This will add the given emojis to the bot\'s response ("Hello!"):'),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'addClientReactions',\n    code: `\n    Hello!\n    $addClientReactions[\ud83e\udde1;\u2764]\n  `\n});\n")))}h.isMDXComponent=!0}}]);