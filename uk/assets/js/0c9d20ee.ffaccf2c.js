"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[24399],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=r,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||o;return n?a.createElement(f,s(s({ref:t},c),{},{components:n})):a.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:r,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95682:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>y,contentTitle:()=>g,default:()=>b,frontMatter:()=>f,metadata:()=>k,toc:()=>N});var a=n(3905),r=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&c(e,n,t[n]);if(i)for(var n of i(t))u.call(t,n)&&c(e,n,t[n]);return e},p=(e,t)=>o(e,s(t)),d=(e,t)=>{var n={};for(var a in e)l.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&u.call(e,a)&&(n[a]=e[a]);return n};const f={title:"Custom Functions",description:"This guide is covering custom functions, their usage and some useful examples.",id:"customfunctions"},g=void 0,k={unversionedId:"guides/other/customfunctions",id:"version-6.4.0/guides/other/customfunctions",title:"Custom Functions",description:"This guide is covering custom functions, their usage and some useful examples.",source:"@site/versioned_docs/version-6.4.0/guides/other/1customfunctions.md",sourceDirName:"guides/other",slug:"/guides/other/customfunctions",permalink:"/uk/docs/guides/other/customfunctions",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1690088438,formattedLastUpdatedAt:"23 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"Custom Functions",description:"This guide is covering custom functions, their usage and some useful examples.",id:"customfunctions"},sidebar:"docs",previous:{title:"Localization",permalink:"/uk/docs/guides/application-cmds/interaction-localization"},next:{title:"Command Options",permalink:"/uk/docs/guides/other/commandoptions"}},y={},N=[{value:"Table of Contents",id:"table-of-contents",level:3},{value:"Basics / How to create custom functions",id:"basics--how-to-create-custom-functions",level:2},{value:"Aoi.js Custom Functions",id:"aoijs-custom-functions",level:3},{value:"Discord.js Custom Functions",id:"discordjs-custom-functions",level:3},{value:"Custom Functions Examples",id:"custom-functions-examples",level:2},{value:"Aoi.js Custom Functions Examples",id:"aoijs-custom-functions-examples",level:3},{value:"Discord.js Custom Functions Examples",id:"discordjs-custom-functions-examples",level:3}],h={toc:N},v="wrapper";function b(e){var t=e,{components:n}=t,r=d(t,["components"]);return(0,a.kt)(v,p(m(m({},h),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"This Guide covers everything you need to know about Custom Functions.")),(0,a.kt)("h3",m({},{id:"table-of-contents"}),"Table of Contents"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"#basics--how-to-create-custom-functions"}),"Basics / How to create custom functions"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"#aoijs-custom-functions"}),"Aoi.js Custom Functions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"#discordjs-custom-functions"}),"Discord.js Custom Functions")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"#custom-functions-examples"}),"Custom Functions Examples"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"#aoijs-custom-functions-examples"}),"Aoi.js Custom Functions Examples")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"#discordjs-custom-functions-examples"}),"Discord.js Custom Functions Examples"))))),(0,a.kt)("hr",null),(0,a.kt)("h2",m({},{id:"basics--how-to-create-custom-functions"}),"Basics / How to create custom functions"),(0,a.kt)("admonition",m({},{type:"info"}),(0,a.kt)("p",{parentName:"admonition"},"Please note that this is most likely only useful for advanced aoi.js users.")),(0,a.kt)("p",null,"To begin with, there are two types of custom functions."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"aoi.js")," custom functions and ",(0,a.kt)("inlineCode",{parentName:"p"},"djs")," custom functions."),(0,a.kt)("p",null,"As you may can tell by the name ",(0,a.kt)("inlineCode",{parentName:"p"},"aoi.js")," custom functions include aoi.js functions, on the other side ",(0,a.kt)("inlineCode",{parentName:"p"},"djs")," refers to ",(0,a.kt)("inlineCode",{parentName:"p"},"discord.js")," which means it will create a discord.js custom function using discord.js functions/syntax."),(0,a.kt)("h3",m({},{id:"aoijs-custom-functions"}),"Aoi.js Custom Functions"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-js"}),'bot.functionManager.createFunction({\n    name: "$function", // custom function name, can be anything.\n    params: [ "parameter", ... ], // function parameters, $function[parameter;parameter]\n    type: "aoi.js", // custom function type\n    code: "..." // the code that will be executed\n});\n')),(0,a.kt)("p",null,"Pretty simple example, and usage."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"To return any parameter of ",(0,a.kt)("inlineCode",{parentName:"li"},"params: [...]")," you can use ",(0,a.kt)("inlineCode",{parentName:"li"},"{name}")," (name stands for the parameter name).")),(0,a.kt)("h3",m({},{id:"discordjs-custom-functions"}),"Discord.js Custom Functions"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-js"}),'bot.functionManager.createFunction({\n    name: "$function", // custom function name, can be anything.\n    type: "djs", // custom function type\n    code: ... // the code that will be executed\n});\n')),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-js"}),'bot.functionManager.createFunction({\n  name: "$function",\n  type: "djs",\n  code: async d => { // fetching data\n    const data = d.util.aoiFunc(d);\n    const [parameter, ...] = data.inside.splits; // command parameters\n\n    ...\n\n    data.result = ... // needed for the function to properly work, will set the "output" of the function\n    return {\n      code: d.util.setCode(data) // will return the output from data.result\n    };\n  }\n});\n')),(0,a.kt)("p",null,"You can create error messages like the following;"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-js"}),"aoiError.fnError(d, type, data, message)\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"TYPE"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"RETURNS"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"member"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Invalid Member ID Provided In ...")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"message"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Invalid Message ID Provided In ...")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"channel"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Invalid Channel ID Provided In ...")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"user"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Invalid User ID Provided In ...")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"role"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Invalid Role ID Provided In ...")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"guild"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Invalid Guild ID Provided In ...")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"emoji"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Invalid Emoji ID Provided In ...")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"option"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Invalid Option ID Provided In ...")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"custom"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Given Custom Error Message")))),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-js"}),"aoiError.consoleError(name, e)\n")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-js"}),"if (!parameter) return d.aoiError.fnError(d, 'custom', {}, 'Custom Error Message');\n// will return a error message when the parameter \"parameter\" doesn't have any arguments.\n")),(0,a.kt)("h2",m({},{id:"custom-functions-examples"}),"Custom Functions Examples"),(0,a.kt)("p",null,"Advanced Custom Functions Examples can be found here, some are useful others are more likely miscellaneous."),(0,a.kt)("h3",m({},{id:"aoijs-custom-functions-examples"}),"Aoi.js Custom Functions Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-ts"}),"$say[userID?;message]\n")),(0,a.kt)("p",null,"Packages required: ",(0,a.kt)("inlineCode",{parentName:"p"},"none"),(0,a.kt)("br",{parentName:"p"}),"\n","Difficulty: Beginner"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-js"}),'bot.functionManager.createFunction({\n  name: "$say", \n  params: ["userID", "message"],\n  type: "aoi.js", \n  code: ` \n    **$userTag[$replaceText[$replaceText[$checkCondition[{userID}==||{userID}==undefined];true;$authorID];false;{userID}]]** says: **{message}**\n    $disableMentionType[everyone]\n  ` \n})\n')),(0,a.kt)("h3",m({},{id:"discordjs-custom-functions-examples"}),"Discord.js Custom Functions Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-ts"}),"$sendImage[URL]\n")),(0,a.kt)("p",null,"Packages required: ",(0,a.kt)("inlineCode",{parentName:"p"},"none"),(0,a.kt)("br",{parentName:"p"}),"\n","Difficulty: Beginner"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-js"}),'bot.functionManager.createFunction({\n  name: "$sendImage",\n  type: "djs",\n  code: async d => {\n    const data = d.util.aoiFunc(d);\n    const [URL] = data.inside.splits;\n\n    let image = URL;\n    const a = await d.message.channel.send({\n      files: [{ \n        attachment: image // set the given URL as attachment.\n        }]\n    });\n\n    data.result = a;\n     return { \n        code: d.util.setCode(data) \n        }\n    }   \n});\n')),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-ts"}),"$imagine[prompt]\n")),(0,a.kt)("p",null,"Packages required: ",(0,a.kt)("inlineCode",{parentName:"p"},"openai"),(0,a.kt)("br",{parentName:"p"}),"\n","Difficulty: Advanced"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),"bot.functionManager.createFunction({\n  name: '$imagine',\n  type: 'djs',\n  code: async d => {\n  const { Configuration, OpenAIApi } = require(\"openai\");\n  const data = d.util.aoiFunc(d);\n  const [description] = data.inside.splits;\n  if(!description) return d.aoiError.fnError(d, 'custom', {}, 'Missing description to generate a image!');\n\n  const config = new Configuration({\n    apiKey: \"openAI API key\" // required to interact with the API\n  });\n  const openai = new OpenAIApi(config);\n\n  try {\n    const response = await openai.createImage({\n      prompt: description, // get the description from the input $imagine[INPUT]\n      n: 1, // generate one variation.\n      size: \"1024x1024\",\n    });\n    data.result = response.data.data[0].URL;\n    return {\n      code: d.util.setCode(data) \n    };\n  } catch (e) {\n    console.error(e);\n    return d.aoiError.fnError(d, 'custom', {}, 'Couldnt generate image');\n  }\n}\n});\n")))}b.isMDXComponent=!0}}]);