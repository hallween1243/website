"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[74352],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),d=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=d(e.components);return a.createElement(c.Provider,{value:n},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=d(t),u=r,f=s["".concat(c,".").concat(u)]||s[u]||m[u]||o;return t?a.createElement(f,l(l({ref:n},p),{},{components:t})):a.createElement(f,l({ref:n},p))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=u;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[s]="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=t[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},24624:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>b,contentTitle:()=>h,default:()=>y,frontMatter:()=>f,metadata:()=>w,toc:()=>k});var a=t(3905),r=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,n,t)=>n in e?r(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,s=(e,n)=>{for(var t in n||(n={}))c.call(n,t)&&p(e,t,n[t]);if(i)for(var t of i(n))d.call(n,t)&&p(e,t,n[t]);return e},m=(e,n)=>o(e,l(n)),u=(e,n)=>{var t={};for(var a in e)c.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&i)for(var a of i(e))n.indexOf(a)<0&&d.call(e,a)&&(t[a]=e[a]);return t};const f={title:"$channelCooldown",description:"$channelCooldown will set a cooldown bound to a specific channel after execution of the command.",id:"channelCooldown"},h=void 0,w={unversionedId:"functions/variables-related/channelCooldown",id:"version-6.4.0/functions/variables-related/channelCooldown",title:"$channelCooldown",description:"$channelCooldown will set a cooldown bound to a specific channel after execution of the command.",source:"@site/versioned_docs/version-6.4.0/functions/variables-related/channelCooldown.md",sourceDirName:"functions/variables-related",slug:"/functions/variables-related/channelCooldown",permalink:"/uk/docs/functions/variables-related/channelCooldown",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1691974849,formattedLastUpdatedAt:"14 \u0441\u0435\u0440\u043f. 2023 \u0440.",frontMatter:{title:"$channelCooldown",description:"$channelCooldown will set a cooldown bound to a specific channel after execution of the command.",id:"channelCooldown"},sidebar:"docs",previous:{title:"$advanceCooldown",permalink:"/uk/docs/functions/variables-related/advanceCooldown"},next:{title:"$cooldown",permalink:"/uk/docs/functions/variables-related/cooldown"}},b={},k=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],g={toc:k},v="wrapper";function y(e){var n=e,{components:t}=n,r=u(n,["components"]);return(0,a.kt)(v,m(s(s({},g),r),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$channelCooldown")," will set a channel-based cooldown."),(0,a.kt)("h2",s({},{id:"usage"}),"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$channelCooldown[time;errorMessage]\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You are able to retrieve the remaining cooldown in the ",(0,a.kt)("inlineCode",{parentName:"li"},"$channelCooldown")," function by using ",(0,a.kt)("strong",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"strong"},"%time%"))," or any of the\nfollowing below.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"%time%"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"%year%"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"%month%"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"%week%"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"%day%"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"%hour%"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"%min%"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"%sec%"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"%ms%"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"%fullTime%"))))),(0,a.kt)("h2",s({},{id:"parameters"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Field"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Description"),(0,a.kt)("th",s({parentName:"tr"},{align:"center"}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"time"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Timer of the cooldown"),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"errorMessage"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Error message when given cooldown timer is still active."),(0,a.kt)("td",s({parentName:"tr"},{align:"center"}),"false")))),(0,a.kt)("h2",s({},{id:"examples"}),"Example(s)"),(0,a.kt)("p",null,"This will set a cooldown for a command in the channel where the command was executed in and returns the remaining\ncooldown:"),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'channelCooldown',\n    code: `\n  hello\n  $channelCooldown[2m;Please wait %time% to execute this command again.]\n  `\n});\n")))}y.isMDXComponent=!0}}]);