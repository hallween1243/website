"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[96990],{3905:(l,i,e)=>{e.d(i,{Zo:()=>u,kt:()=>g});var t=e(67294);function r(l,i,e){return i in l?Object.defineProperty(l,i,{value:e,enumerable:!0,configurable:!0,writable:!0}):l[i]=e,l}function o(l,i){var e=Object.keys(l);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(l);i&&(t=t.filter((function(i){return Object.getOwnPropertyDescriptor(l,i).enumerable}))),e.push.apply(e,t)}return e}function s(l){for(var i=1;i<arguments.length;i++){var e=null!=arguments[i]?arguments[i]:{};i%2?o(Object(e),!0).forEach((function(i){r(l,i,e[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(i){Object.defineProperty(l,i,Object.getOwnPropertyDescriptor(e,i))}))}return l}function n(l,i){if(null==l)return{};var e,t,r=function(l,i){if(null==l)return{};var e,t,r={},o=Object.keys(l);for(t=0;t<o.length;t++)e=o[t],i.indexOf(e)>=0||(r[e]=l[e]);return r}(l,i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(l);for(t=0;t<o.length;t++)e=o[t],i.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(l,e)&&(r[e]=l[e])}return r}var d=t.createContext({}),a=function(l){var i=t.useContext(d),e=i;return l&&(e="function"==typeof l?l(i):s(s({},i),l)),e},u=function(l){var i=a(l.components);return t.createElement(d.Provider,{value:i},l.children)},c="mdxType",m={inlineCode:"code",wrapper:function(l){var i=l.children;return t.createElement(t.Fragment,{},i)}},p=t.forwardRef((function(l,i){var e=l.components,r=l.mdxType,o=l.originalType,d=l.parentName,u=n(l,["components","mdxType","originalType","parentName"]),c=a(e),p=r,g=c["".concat(d,".").concat(p)]||c[p]||m[p]||o;return e?t.createElement(g,s(s({ref:i},u),{},{components:e})):t.createElement(g,s({ref:i},u))}));function g(l,i){var e=arguments,r=i&&i.mdxType;if("string"==typeof l||r){var o=e.length,s=new Array(o);s[0]=p;var n={};for(var d in i)hasOwnProperty.call(i,d)&&(n[d]=i[d]);n.originalType=l,n[c]="string"==typeof l?l:r,s[1]=n;for(var a=2;a<o;a++)s[a]=e[a];return t.createElement.apply(null,s)}return t.createElement.apply(null,e)}p.displayName="MDXCreateElement"},54136:(l,i,e)=>{e.r(i),e.d(i,{assets:()=>b,contentTitle:()=>k,default:()=>A,frontMatter:()=>g,metadata:()=>h,toc:()=>x});var t=e(3905),r=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,u=(l,i,e)=>i in l?r(l,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):l[i]=e,c=(l,i)=>{for(var e in i||(i={}))d.call(i,e)&&u(l,e,i[e]);if(n)for(var e of n(i))a.call(i,e)&&u(l,e,i[e]);return l},m=(l,i)=>o(l,s(i)),p=(l,i)=>{var e={};for(var t in l)d.call(l,t)&&i.indexOf(t)<0&&(e[t]=l[t]);if(null!=l&&n)for(var t of n(l))i.indexOf(t)<0&&a.call(l,t)&&(e[t]=l[t]);return e};const g={title:"Client Permissions",description:"This page is covering all Discord permissions.",id:"permissions"},k=void 0,h={unversionedId:"guides/client/permissions",id:"version-6.4.0/guides/client/permissions",title:"Client Permissions",description:"This page is covering all Discord permissions.",source:"@site/versioned_docs/version-6.4.0/guides/client/2permissions.md",sourceDirName:"guides/client",slug:"/guides/client/permissions",permalink:"/ru/docs/guides/client/permissions",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1691521389,formattedLastUpdatedAt:"8 \u0430\u0432\u0433. 2023 \u0433.",frontMatter:{title:"Client Permissions",description:"This page is covering all Discord permissions.",id:"permissions"},sidebar:"docs",previous:{title:"Client Intents",permalink:"/ru/docs/guides/client/intents"},next:{title:"Command Handler",permalink:"/ru/docs/guides/client/handler"}},b={},x=[],y=l=>function(i){return console.warn("Component "+l+" was not imported, exported, or provided by MDXProvider as global scope"),(0,t.kt)("div",c({},i))},f=y("Highlight"),T=y("Slash"),H=y("Tooltip"),v={toc:x},w="wrapper";function A(l){var i=l,{components:e}=i,r=p(i,["components"]);return(0,t.kt)(w,m(c(c({},v),r),{components:e,mdxType:"MDXLayout"}),(0,t.kt)("details",null,(0,t.kt)("summary",null," createinvite "),"Allows creation of instant invites",(0,t.kt)("br",null),(0,t.kt)("br",null),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"Guild"),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},(0,t.kt)("a",{id:"channel-type",color:"#fff"},"T, V, S")),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"PermissionsBitField: 2")),(0,t.kt)("details",null,(0,t.kt)("summary",null," kickmembers "),"Allows kicking members",(0,t.kt)("br",null),(0,t.kt)("br",null),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"Guild"),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"PermissionsBitField: 3")),(0,t.kt)("details",null,(0,t.kt)("summary",null," kickmembers "),"Allows banning members",(0,t.kt)("br",null),(0,t.kt)("br",null),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"Guild"),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"PermissionsBitField: 4")),(0,t.kt)("details",null,(0,t.kt)("summary",null," administrator "),"Allows all permissions and bypasses channel permission overwrites",(0,t.kt)("br",null),(0,t.kt)("br",null),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"Guild"),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"PermissionsBitField: 5"),(0,t.kt)(f,{color:"#A52A2A",radius:"3px",mdxType:"Highlight"},"danger")),(0,t.kt)("details",null,(0,t.kt)("summary",null," managechannels "),"Allows management and editing of channels",(0,t.kt)("br",null),(0,t.kt)("br",null),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"Guild"),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},(0,t.kt)("a",{id:"channel-type",color:"#fff"},"T, V, S")),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"PermissionsBitField: 6")),(0,t.kt)("details",null,(0,t.kt)("summary",null," manageguild "),"Allows management and editing of the guild",(0,t.kt)("br",null),(0,t.kt)("br",null),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"Guild"),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"PermissionsBitField: 7")),(0,t.kt)("details",null,(0,t.kt)("summary",null," addreactions "),"Allows for the addition of reactions to messages",(0,t.kt)("br",null),(0,t.kt)("br",null),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"Guild"),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},(0,t.kt)("a",{id:"channel-type",color:"#fff"},"T, V, S")),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"PermissionsBitField: 8")),(0,t.kt)("details",null,(0,t.kt)("summary",null," viewauditlog "),"Allows for viewing of audit logs",(0,t.kt)("br",null),(0,t.kt)("br",null),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"Guild"),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"PermissionsBitField: 9")),(0,t.kt)("details",null,(0,t.kt)("summary",null," priorityspeaker "),"Allows for using priority speaker in a voice channel",(0,t.kt)("br",null),(0,t.kt)("br",null),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"Guild"),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},(0,t.kt)("a",{id:"channel-type",color:"#fff"},"Voice")),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"PermissionsBitField: 10")),(0,t.kt)("details",null,(0,t.kt)("summary",null," stream "),"Allows the user to go live",(0,t.kt)("br",null),(0,t.kt)("br",null),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"Guild"),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},(0,t.kt)("a",{id:"channel-type",color:"#fff"},"Voice")),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"PermissionsBitField: 11")),(0,t.kt)("details",null,(0,t.kt)("summary",null," viewchannel "),"Allows guild members to view a channel, which includes reading messages in text channels and joining voice channels",(0,t.kt)("br",null),(0,t.kt)("br",null),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"Guild"),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},(0,t.kt)("a",{id:"channel-type",color:"#fff"},"T, V, S")),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"PermissionsBitField: 12")),(0,t.kt)("details",null,(0,t.kt)("summary",null," sendmessages "),"Allows for sending messages in a channel and creating threads in a forum (does not allow sending messages in threads)",(0,t.kt)("br",null),(0,t.kt)("br",null),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"Guild"),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},(0,t.kt)("a",{id:"channel-type",color:"#fff"},"T, V, S")),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"PermissionsBitField: 13")),(0,t.kt)("details",null,(0,t.kt)("summary",null," sendttsmessages "),"Allows for sending of ",(0,t.kt)(T,{mdxType:"Slash"},"/tts")," messages",(0,t.kt)("br",null),(0,t.kt)("br",null),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"Guild"),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},(0,t.kt)("a",{id:"channel-type",color:"#fff"},"T, V, S")),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"PermissionsBitField: 14")),(0,t.kt)("details",null,(0,t.kt)("summary",null," managemessages "),"Allows for deletion of other users messages",(0,t.kt)("br",null),(0,t.kt)("br",null),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"Guild"),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},(0,t.kt)("a",{id:"channel-type",color:"#fff"},"T, V, S")),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"PermissionsBitField: 15")),(0,t.kt)("details",null,(0,t.kt)("summary",null," embedlinks "),"Links sent by users with this permission will be auto-embedded",(0,t.kt)("br",null),(0,t.kt)("br",null),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"Guild"),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},(0,t.kt)("a",{id:"channel-type",color:"#fff"},"T, V, S")),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"PermissionsBitField: 16")),(0,t.kt)("details",null,(0,t.kt)("summary",null," attachfiles "),"Allows for uploading images and files",(0,t.kt)("br",null),(0,t.kt)("br",null),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"Guild"),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},(0,t.kt)("a",{id:"channel-type",color:"#fff"},"T, V, S")),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"PermissionsBitField: 17")),(0,t.kt)("details",null,(0,t.kt)("summary",null," readmessagehistory "),"Allows for reading of message history",(0,t.kt)("br",null),(0,t.kt)("br",null),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"Guild"),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},(0,t.kt)("a",{id:"channel-type",color:"#fff"},"T, V, S")),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"PermissionsBitField: 18")),(0,t.kt)("details",null,(0,t.kt)("summary",null," mentioneveryone "),"Allows for using the ",(0,t.kt)("code",null,"@everyone")," tag to notify all users in a channel, and the ",(0,t.kt)("code",null,"@here")," tag to notify all online users in a channel",(0,t.kt)("br",null),(0,t.kt)("br",null),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"Guild"),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},(0,t.kt)("a",{id:"channel-type",color:"#fff"},"T, V, S")),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"PermissionsBitField: 19"),(0,t.kt)(f,{color:"#A52A2A",radius:"3px",mdxType:"Highlight"},"danger")),(0,t.kt)("details",null,(0,t.kt)("summary",null," useexternalemojis "),"Allows the usage of custom emojis from other servers",(0,t.kt)("br",null),(0,t.kt)("br",null),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"Guild"),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},(0,t.kt)("a",{id:"channel-type",color:"#fff"},"T, V, S")),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"PermissionsBitField: 20")),(0,t.kt)("details",null,(0,t.kt)("summary",null," viewguildinsights "),"Allows for viewing guild insights",(0,t.kt)("br",null),(0,t.kt)("br",null),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"Guild"),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"PermissionsBitField: 21")),(0,t.kt)("details",null,(0,t.kt)("summary",null," connect "),"Allows for joining of a voice channel",(0,t.kt)("br",null),(0,t.kt)("br",null),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"Guild"),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},(0,t.kt)("a",{id:"channel-type",color:"#fff"},"V, S")),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"PermissionsBitField: 22")),(0,t.kt)("details",null,(0,t.kt)("summary",null," speak "),"Allows for speaking in a voice channel",(0,t.kt)("br",null),(0,t.kt)("br",null),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"Guild"),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},(0,t.kt)("a",{id:"channel-type",color:"#fff"},"Voice")),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"PermissionsBitField: 23")),(0,t.kt)("details",null,(0,t.kt)("summary",null," mutemembers "),"Allows for muting members in a voice channel",(0,t.kt)("br",null),(0,t.kt)("br",null),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"Guild"),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},(0,t.kt)("a",{id:"channel-type",color:"#fff"},"V, S")),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"PermissionsBitField: 24")),(0,t.kt)("details",null,(0,t.kt)("summary",null," deafenmembers "),"Allows for deafening of members in a voice channel",(0,t.kt)("br",null),(0,t.kt)("br",null),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"Guild"),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},(0,t.kt)("a",{id:"channel-type",color:"#fff"},"Voice")),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"PermissionsBitField: 25")),(0,t.kt)("details",null,(0,t.kt)("summary",null," movemembers "),"Allows for moving of members between voice channels",(0,t.kt)("br",null),(0,t.kt)("br",null),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"Guild"),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},(0,t.kt)("a",{id:"channel-type",color:"#fff"},"V, S")),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"PermissionsBitField: 26")),(0,t.kt)("details",null,(0,t.kt)("summary",null," usevad "),"Allows for using voice-activity-detection in a voice channel",(0,t.kt)("br",null),(0,t.kt)("br",null),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"Guild"),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},(0,t.kt)("a",{id:"channel-type",color:"#fff"},"Voice")),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"PermissionsBitField: 27")),(0,t.kt)("details",null,(0,t.kt)("summary",null," changenickname "),"Allows for modification of own nickname",(0,t.kt)("br",null),(0,t.kt)("br",null),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"User"),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"PermissionsBitField: 28")),(0,t.kt)("details",null,(0,t.kt)("summary",null," managenicknames "),"Allows for modification of other users nicknames",(0,t.kt)("br",null),(0,t.kt)("br",null),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"Guild"),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"PermissionsBitField: 29")),(0,t.kt)("details",null,(0,t.kt)("summary",null," manageroles "),"Allows management and editing of roles",(0,t.kt)("br",null),(0,t.kt)("br",null),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"Guild"),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},(0,t.kt)("a",{id:"channel-type",color:"#fff"},"T, V, S")),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"PermissionsBitField: 30")),(0,t.kt)("details",null,(0,t.kt)("summary",null," managewebhooks "),"Allows management and editing of webhooks",(0,t.kt)("br",null),(0,t.kt)("br",null),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"Guild"),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},(0,t.kt)("a",{id:"channel-type",color:"#fff"},"T, V, S")),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"PermissionsBitField: 31")),(0,t.kt)("details",null,(0,t.kt)("summary",null," manageemojisandstickers "),"Allows management and editing of emojis & stickers",(0,t.kt)("br",null),(0,t.kt)("br",null),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"Guild"),(0,t.kt)(f,{color:"#A52A2A",radius:"3px",mdxType:"Highlight"},"deprecated")),(0,t.kt)("details",null,(0,t.kt)("summary",null," manageguildexpressions "),"Allows management and editing of emojis, stickers, and soundboard sounds",(0,t.kt)("br",null),(0,t.kt)("br",null),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"Guild"),(0,t.kt)(f,{color:"#A52A2A",radius:"3px",mdxType:"Highlight"},"not implemented")),(0,t.kt)("details",null,(0,t.kt)("summary",null," useapplicationcommands "),"Allows members to use application commands, including slash commands and context menu commands.",(0,t.kt)("br",null),(0,t.kt)("br",null),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"Guild"),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},(0,t.kt)("a",{id:"channel-type",color:"#fff"},"T, V, S")),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"PermissionsBitField: 33")),(0,t.kt)("details",null,(0,t.kt)("summary",null," requesttospeak "),"Allows for requesting to speak in stage channels. (This permission is under active development and may be changed or removed.)",(0,t.kt)("br",null),(0,t.kt)("br",null),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"Guild"),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},(0,t.kt)("a",{id:"channel-type",color:"#fff"},"Stage")),(0,t.kt)(f,{color:"#A52A2A",radius:"3px",mdxType:"Highlight"},"NOT FINAL"),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"PermissionsBitField: 34")),(0,t.kt)("details",null,(0,t.kt)("summary",null," manageevents "),"Allows for creating, editing, and deleting scheduled events",(0,t.kt)("br",null),(0,t.kt)("br",null),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"Guild"),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},(0,t.kt)("a",{id:"channel-type",color:"#fff"},"V, S")),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"PermissionsBitField: 35")),(0,t.kt)("details",null,(0,t.kt)("summary",null," managethreads "),"Allows for deleting and archiving threads, and viewing all private threads",(0,t.kt)("br",null),(0,t.kt)("br",null),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"Guild"),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},(0,t.kt)("a",{id:"channel-type",color:"#fff"},"Text")),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"PermissionsBitField: 36")),(0,t.kt)("details",null,(0,t.kt)("summary",null," createpublicthreads "),"Allows for creating public and announcement threads",(0,t.kt)("br",null),(0,t.kt)("br",null),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"Guild"),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},(0,t.kt)("a",{id:"channel-type",color:"#fff"},"Text")),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"PermissionsBitField: 37")),(0,t.kt)("details",null,(0,t.kt)("summary",null," createprivatethreads "),"Allows for creating private threads",(0,t.kt)("br",null),(0,t.kt)("br",null),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"Guild"),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},(0,t.kt)("a",{id:"channel-type",color:"#fff"},"Text")),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"PermissionsBitField: 38")),(0,t.kt)("details",null,(0,t.kt)("summary",null," useexternalstickers "),"Allows the usage of custom stickers from other servers",(0,t.kt)("br",null),(0,t.kt)("br",null),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"Guild"),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},(0,t.kt)("a",{id:"channel-type",color:"#fff"},"T, V, S")),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"PermissionsBitField: 39")),(0,t.kt)("details",null,(0,t.kt)("summary",null," sendmessagesinthreads "),"Allows for sending messages in threads",(0,t.kt)("br",null),(0,t.kt)("br",null),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"Guild"),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},(0,t.kt)("a",{id:"channel-type",color:"#fff"},"Text")),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"PermissionsBitField: 40")),(0,t.kt)("details",null,(0,t.kt)("summary",null," useembeddedactivities "),"Allows for using Activities (applications with the ",(0,t.kt)("code",null,"EMBEDDED")," flag) in a voice channel",(0,t.kt)("br",null),(0,t.kt)("br",null),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"Guild"),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},(0,t.kt)("a",{id:"channel-type",color:"#fff"},"Voice")),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"PermissionsBitField: 41")),(0,t.kt)("details",null,(0,t.kt)("summary",null," moderatemembers "),"Allows for timing out users to prevent them from sending or reacting to messages in chat and threads, and from speaking in voice and stage channels",(0,t.kt)("br",null),(0,t.kt)("br",null),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"User, Guild"),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"PermissionsBitField: 42")),(0,t.kt)("details",null,(0,t.kt)("summary",null," viewcreatormonetizationanalytics "),"Allows for viewing role subscription insights",(0,t.kt)("br",null),(0,t.kt)("br",null),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"Guild"),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"PermissionsBitField: 43")),(0,t.kt)("details",null,(0,t.kt)("summary",null," usesoundboard "),"Allows for using soundboard in a voice channel",(0,t.kt)("br",null),(0,t.kt)("br",null),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"Guild"),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},(0,t.kt)("a",{id:"channel-type",color:"#fff"},"Voice")),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"PermissionsBitField: 44")),(0,t.kt)("details",null,(0,t.kt)("summary",null," useexternalsounds "),"Allows the usage of custom soundboard sounds from other servers",(0,t.kt)("br",null),(0,t.kt)("br",null),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"Guild"),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},(0,t.kt)("a",{id:"channel-type",color:"#fff"},"Voice")),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"PermissionsBitField: 45")),(0,t.kt)("details",null,(0,t.kt)("summary",null," sendvoicemessages "),"Allows sending voice messages",(0,t.kt)("br",null),(0,t.kt)("br",null),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"Guild"),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},(0,t.kt)("a",{id:"channel-type",color:"#fff"},"T, V, S")),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"PermissionsBitField: 46")),(0,t.kt)("hr",null),(0,t.kt)("details",null,(0,t.kt)("summary",null," all "),"All Permissions",(0,t.kt)("br",null),(0,t.kt)("br",null),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},"Guild"),(0,t.kt)(f,{color:"#4cb3d4",radius:"3px",mdxType:"Highlight"},(0,t.kt)("a",{id:"channel-type",color:"#fff"},"T, V, S")),(0,t.kt)(f,{color:"#A52A2A",radius:"3px",mdxType:"Highlight"},"danger")),(0,t.kt)(H,{anchorSelect:"#channel-type",color:"#fff","not-clickable":!0,mdxType:"Tooltip"},"Channel Types Supported"))}A.isMDXComponent=!0}}]);