"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[22345],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var m=a.createContext({}),s=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(m.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,m=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(n),u=o,b=p["".concat(m,".").concat(u)]||p[u]||d[u]||i;return n?a.createElement(b,r(r({ref:t},c),{},{components:n})):a.createElement(b,r({ref:t},c))}));function b(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[p]="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},81639:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>f,contentTitle:()=>g,default:()=>v,frontMatter:()=>b,metadata:()=>h,toc:()=>k});var a=n(3905),o=Object.defineProperty,i=Object.defineProperties,r=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&c(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&c(e,n,t[n]);return e},d=(e,t)=>i(e,r(t)),u=(e,t)=>{var n={};for(var a in e)m.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&s.call(e,a)&&(n[a]=e[a]);return n};const b={title:"Subcommands",description:"This page covers everything about Subcommands of Application Commands.",id:"interaction-subcommands"},g=void 0,h={unversionedId:"guides/application-cmds/interaction-subcommands",id:"version-6.4.0/guides/application-cmds/interaction-subcommands",title:"Subcommands",description:"This page covers everything about Subcommands of Application Commands.",source:"@site/versioned_docs/version-6.4.0/guides/application-cmds/2subcommands.md",sourceDirName:"guides/application-cmds",slug:"/guides/application-cmds/interaction-subcommands",permalink:"/fr/docs/guides/application-cmds/interaction-subcommands",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1691974849,formattedLastUpdatedAt:"14 ao\xfbt 2023",frontMatter:{title:"Subcommands",description:"This page covers everything about Subcommands of Application Commands.",id:"interaction-subcommands"},sidebar:"docs",previous:{title:"User Commands",permalink:"/fr/docs/guides/application-cmds/interaction-usercommands"},next:{title:"Subcommand Groups",permalink:"/fr/docs/guides/application-cmds/interaction-subcommandgroups"}},f={},k=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"Sub commands",id:"sub-commands",level:2},{value:"Creating Application Commands",id:"creating-application-commands",level:2},{value:"Examples of creating Application Commands with sub commands",id:"examples-of-creating-application-commands-with-sub-commands",level:3},{value:"Creating Sub Commands with options",id:"creating-sub-commands-with-options",level:4},{value:"Preview of the Example",id:"preview-of-the-example",level:3},{value:"Replying to Sub commands",id:"replying-to-sub-commands",level:2}],y={toc:k},N="wrapper";function v(e){var t=e,{components:n}=t,o=u(t,["components"]);return(0,a.kt)(N,d(p(p({},y),o),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("admonition",p({},{title:"Unfinished",type:"info"}),(0,a.kt)("h2",p({parentName:"admonition"},{id:"this-guide-is-unfinished-and-will-change-in-the-future"}),"This guide is unfinished, and will change in the future.")),(0,a.kt)("h2",p({},{id:"table-of-contents"}),"Table of Contents"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"#sub-commands"}),"Sub commands")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"#creating-application-commands"}),"Creating Application Commands"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"#examples-of-creating-application-commands-with-sub-commands"}),"Examples of creating Application Commands with sub commands"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"#creating-sub-commands-with-options"}),"Creating Sub Commands with options")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"#preview-of-the-example"}),"Preview of the Example")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"#replying-to-sub-commands"}),"Replying to Sub commands"))),(0,a.kt)("hr",null),(0,a.kt)("h2",p({},{id:"sub-commands"}),"Sub commands"),(0,a.kt)("p",null,'Sub-commands are apart of slash commands and are used to add as the name already suggest sub commands to the regular slash command. Which does not only "bypass" the slash command limit but also allows you to properly structure your application commands.'),(0,a.kt)("h2",p({},{id:"creating-application-commands"}),"Creating Application Commands"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-js"}),"$createApplicationCommand[guildID/global;name;description;defaultPermission(true/false);type(slash/user/message);options?]\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Field"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"Description"),(0,a.kt)("th",p({parentName:"tr"},{align:"center"}),"Required"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"guildID/global"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"string, integer"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"The type of application command, either for every guild (global) or for one specific guild (specific guildID)."),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"name"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"string, number"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"The actual slash command name that will be visible to the user."),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"description"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"string, number"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"The slash command description that will be visible to the user."),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"defaultPermission"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"If the application command should syncronisate to the default permissions."),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"type"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"The application command type (explained below)"),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"options?"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"object"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Slash commands options."),(0,a.kt)("td",p({parentName:"tr"},{align:"center"}),"true")))),(0,a.kt)("h3",p({},{id:"examples-of-creating-application-commands-with-sub-commands"}),"Examples of creating Application Commands with sub commands"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-js"}),'bot.command({\n    name: "createApplicationCommand",\n    code: `\n  $createApplicationCommand[guildID/global;moderation;Moderation Commands!;true;slash;[\n{\n  "name": "kick",\n  "description": "Kick someone of your guild!",\n  "type": 1 \n},\n{\n  "name": "ban",\n  "description": "Ban someone of your guild!",\n  "type": 1 \n}\n]]`\n});\n')),(0,a.kt)("h4",p({},{id:"creating-sub-commands-with-options"}),"Creating Sub Commands with options"),(0,a.kt)("p",null,"Creating sub commands with options or choices work basically the same as any other."),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-js"}),'bot.command({\n    name: "createApplicationCommand",\n    code: `\n  $createApplicationCommand[guildID/global;moderation;Moderation Commands!;true;slash;[\n  {\n    name: "kick",\n    description: "Kick someone of your guild!",\n    type: 1,\n    options: [\n      {\n        name: "user",\n        description: "Mention the user you want to kick",\n        required: true,\n        type: 6,\n      },\n      {\n        name: "reason",\n        description: "Reason",\n        required: true,\n        type: 3,\n      },\n    ],\n  },\n  {\n    name: "ban",\n    description: "Ban someone of your guild!",\n    type: 1,\n  },\n];`\n});\n')),(0,a.kt)("p",null,'That would for example add two options called "user" and "reason", where reason is type 3, string and user type 6, mention (user).'),(0,a.kt)("h3",p({},{id:"preview-of-the-example"}),"Preview of the Example"),(0,a.kt)("p",null,(0,a.kt)("img",p({parentName:"p"},{src:"https://raw.githubusercontent.com/aoijs/website/main/assets/images/previews/application-commands.png",alt:"preview"}))),(0,a.kt)("h2",p({},{id:"replying-to-sub-commands"}),"Replying to Sub commands"),(0,a.kt)("p",null,'To interact with those we need to filter the different options of the "moderation" slash commands. We can do that with ',(0,a.kt)("inlineCode",{parentName:"p"},"$onlyIf")," and some advanced functions."),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-js"}),"$onlyIf[$interactionData[options._subcommand]==sub_command_name;]\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$interactionData")," contains information about the interaction, and we use ",(0,a.kt)("inlineCode",{parentName:"p"},"$onlyIf")," to check if the subcommand matches ours. "),(0,a.kt)("p",null,"This will basically check for the sub command name and if it doesn't match it will block the command, so for our case it would look something like this.."),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-js"}),'bot.interactionCommand({\n    name: "moderation",\n    prototype: "slash",\n    code: `\n    $interactionReply[You picked the **ban** sub command!]\n    $onlyIf[$interactionData[options._subcommand]==ban;]`\n})\n\nbot.interactionCommand({\n    name: "moderation",\n    prototype: "slash",\n    code: `\n    $interactionReply[You picked the **kick** sub command!]\n    $onlyIf[$interactionData[options._subcommand]==kick;]`\n})\n')),(0,a.kt)("p",null,"Here's the handler example (which has the ability to store multiple commands in the same file, therfore its compacter):"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-js"}),'module.exports = [{\n    name: "moderation",\n    prototype: "slash",\n    type: "interaction",\n    code: `\n    $interactionReply[You picked the **ban** sub command!]\n    $onlyIf[$interactionData[options._subcommand]==ban;]`\n}, {\n    name: "moderation",\n    prototype: "slash",\n    type: "interaction",\n    code: `\n    $interactionReply[You picked the **kick** sub command!]\n    $onlyIf[$interactionData[options._subcommand]==kick;]`\n}]\n')))}v.isMDXComponent=!0}}]);