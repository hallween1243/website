"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[67517],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return n?a.createElement(f,i(i({ref:t},s),{},{components:n})):a.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88021:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>x,frontMatter:()=>f,metadata:()=>h,toc:()=>b});var a=n(3905),r=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&s(e,n,t[n]);return e},d=(e,t)=>o(e,i(t)),m=(e,t)=>{var n={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&c.call(e,a)&&(n[a]=e[a]);return n};const f={title:"$interactionModal",description:"$interactionModal create an user interactive modal.",id:"interactionModal"},g=void 0,h={unversionedId:"functions/interaction-related/interactionModal",id:"version-6.4.0/functions/interaction-related/interactionModal",title:"$interactionModal",description:"$interactionModal create an user interactive modal.",source:"@site/versioned_docs/version-6.4.0/functions/interaction-related/interactionModal.md",sourceDirName:"functions/interaction-related",slug:"/functions/interaction-related/interactionModal",permalink:"/uk/docs/functions/interaction-related/interactionModal",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1691521389,formattedLastUpdatedAt:"8 \u0441\u0435\u0440\u043f. 2023 \u0440.",frontMatter:{title:"$interactionModal",description:"$interactionModal create an user interactive modal.",id:"interactionModal"},sidebar:"docs",previous:{title:"$image",permalink:"/uk/docs/functions/interaction-related/image"},next:{title:"$isAutoComplete",permalink:"/uk/docs/functions/interaction-related/isAutoComplete"}},y={},b=[{value:"Usage",id:"usage",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Example(s)",id:"examples",level:2}],v={toc:b},k="wrapper";function x(e){var t=e,{components:n}=t,r=m(t,["components"]);return(0,a.kt)(k,d(p(p({},v),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$interactionModal")," create an user interactive modal."),(0,a.kt)("h2",p({},{id:"usage"}),"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$interactionModal[title;customID;components]\n")),(0,a.kt)("h2",p({},{id:"parameters"}),"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Field"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Description"),(0,a.kt)("th",p({parentName:"tr"},{align:"center"}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"title"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"The title of the modal which will be displayed as Modal Header."),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"customID"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"The component custom ID."),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"components"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"The modal text components."),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"true")))),(0,a.kt)("h2",p({},{id:"examples"}),"Example(s)"),(0,a.kt)("p",null,"This will create a button and modal which will send the entered data to the same channel and give an ephemeral response\nto the user who submitted the form:"),(0,a.kt)("p",null,'Please note that you require "',(0,a.kt)("strong",{parentName:"p"},"events: ",'["onMessage", "onInteractionCreate"]'),'" in your main file (also known as, in\nmost cases, index.js)'),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-js"}),'bot.command({\n    name: "interactionModal",\n    code: `\n$addButton[1;Press Me!;primary;exampleID;false]\nPretty Example!`\n}); // Create a button which will trigger the modal.\n\nbot.interactionCommand({\n    name: "exampleID",\n    prototype: "button",  // Using "prototype" as this interaction belongs to a button.\n    code: `\n$interactionModal[Example!;customID;\n  {actionRow:\n    {textInput:What\'s your name?:1:nameInput:true:Your pretty name!:2:200}\n  }\n  {actionRow:\n    {textInput:What\'s your age?:1:ageInput:true:You young soul!:1:3}\n  }\n  {actionRow:\n    {textInput:What\'s your gender?:2:genderInput:true:Anything will work!:1:10}\n  }\n]`\n}); /* The modal itself, we use {textInput} to accept user input.\n\nThe correct usage of {textInput} would be:\n\n{textInput:title:type (1 : small text field, 2 : big text field):customID:required ( true, false ):placeholder:minVal:maxVal}\n\n*/\n\nbot.interactionCommand({\n    name: "customID",\n    prototype: "modal", // Using "prototype" as this interaction belongs to a modal.\n    code: `\n$interactionReply[Thanks for submitting this form!;;;;everyone;true]\n\n$title[$username submitted a form!;$userAvatar]\n$addField[Their name is..;$textInputValue[nameInput]]\n$addField[Their age is..;$textInputValue[ageInput]]\n$addField[Their gender is..;$textInputValue[genderInput]]`\n}); /* Will return the values entered earlier from the modal. Using $textInputValue to retrieve those.\n\nAlternatively you could use $channelSendMessage[channelID;content] to send the data to another channel.\n$channelSendMessage[$channelID;{newEmbed:{title:$username submitted a form!:$userAvatar}{field:Their name is..:$textInputValue[nameInput]}{field:Their age is..:$textInputValue[ageInput]}{field:Their gender is..:$textInputValue[genderInput]}}]\n*/\n')))}x.isMDXComponent=!0}}]);