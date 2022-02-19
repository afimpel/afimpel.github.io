"use strict";(self.webpackChunkafimpel_github_io=self.webpackChunkafimpel_github_io||[]).push([[239,439],{6478:function(e,t,n){n.d(t,{Z:function(){return u}});var i=n(1413),r=n(5987),c=(n(2791),n(3786)),s=n(3400),o=n(6379),a=n(6151),l=n(5021),x=n(7064),h=n(9900),m=n(184),d=["children","primary","secondary","to","alternative","target","type","icons","iconSRC","badgeContent"];function u(e){var t=e.children,n=e.primary,u=e.secondary,Z=e.to,f=(e.alternative,e.target,e.type,e.icons),p=e.iconSRC,v=e.badgeContent,j=(0,r.Z)(e,d),g=function(e){window.open(e,"_blank")};switch(e.type){case"menu":return(0,m.jsx)(c.Z,(0,i.Z)((0,i.Z)({},j),{},{onClick:function(){return g(Z)},title:n,children:t}));case"list":return(0,m.jsxs)(l.ZP,(0,i.Z)((0,i.Z)({button:!0,onClick:function(){return g(Z)},title:n},j),{},{children:[f?(0,m.jsx)(x.Z,(0,i.Z)((0,i.Z)({},j),{},{children:p})):"",(0,m.jsx)(h.Z,(0,i.Z)({primary:n,secondary:u},j))]}),n);case"badge":return(0,m.jsx)(s.Z,(0,i.Z)((0,i.Z)({},j),{},{onClick:function(){return g(Z)},title:n,children:(0,m.jsx)(o.Z,{badgeContent:v,overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},children:t})}));default:return f?(0,m.jsx)(s.Z,(0,i.Z)((0,i.Z)({},j),{},{onClick:function(){return g(Z)},title:n,children:t})):(0,m.jsx)(a.Z,(0,i.Z)((0,i.Z)({},j),{},{onClick:function(){return g(Z)},title:n,children:t}))}}u.defaultProps={icons:!1,iconSRC:"",target:"_self",type:"button",primary:"",secondary:"",badgeContent:""}},4439:function(e,t,n){n.r(t),n.d(t,{default:function(){return x}});n(2791);var i=n(8870),r=n(890),c=n(1889),s=n(4721);function o(e,t,n){var i=new Date,r=i.getFullYear(),c=i.getMonth(),s=i.getDate(),o=r-n;return c<e-1&&o--,e-1==c&&s<t&&o--,o}var a=n(703),l=n(184);function x(e){var t=e.lang,n=e.min,x=e.children,h=new Date("9/4/1984").toLocaleDateString(t.type,{month:"long",day:"numeric"}),m=n?160:364;return(0,l.jsxs)(a.Z,{sx:{p:0,mx:1,mt:1,mb:2,flexGrow:1,borderRadius:3,boxShadow:5,display:"flex",flexDirection:{xs:"column",md:"row"},alignItems:"center",overflow:"hidden"},children:[(0,l.jsx)(i.Z,{component:"img",sx:{height:{xs:m,md:"100%"},width:{xs:"100%",md:m},maxHeight:m,maxWidth:m},alt:t.fullname,title:t.fullname,src:"https://avatars.githubusercontent.com/u/10385173?v=4"}),(0,l.jsxs)(i.Z,{sx:{display:"flex",flexDirection:"column",alignItems:{xs:"center",md:"flex-start"},m:0,minWidth:m,height:{xs:"100%",md:m},width:{xs:m,md:"100%"}},children:[(0,l.jsx)(c.ZP,{item:!0,xs:!0,sx:{p:0,my:0,mx:1,textAlign:"center",display:"block",width:"100%"},children:(0,l.jsx)(r.Z,{variant:"h1",fontWeight:700,component:"h1",sx:{my:0,mx:0,textAlign:"center"},children:t.fullname})}),(0,l.jsx)(s.Z,{item:!0,xs:!0,sx:{width:"100%",my:1}}),(0,l.jsxs)(c.ZP,{item:!0,xs:!0,container:!0,sx:{p:0,my:0,mx:1,textAlign:"center"},children:[(0,l.jsxs)(c.ZP,{item:!0,xs:6,sx:{m:0},children:[(0,l.jsx)("b",{children:o(9,4,1984)})," ",t.cv.Age]}),(0,l.jsxs)(c.ZP,{item:!0,xs:6,sx:{m:0},children:[t.cv.Birthday,": ",(0,l.jsx)("b",{children:h})]})]}),(0,l.jsx)(r.Z,{item:!0,xs:!0,sx:{px:2,py:0},color:"text.secondary",children:x})]})]})}},7239:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});var i=n(1413),r=(n(2791),n(6871)),c=n(8773),s=n(890),o=n(4439),a=n(703),l=n(1889),x=n(9875),h=n(1918),m=n(4721),d=n(4941),u=n(5702),Z=n(5674),f=n(4651),p=n(8066),v=n(132),j=n(6478),g=n(184);function b(e){var t=e.lang,n=e.env,b=e.list,y=(0,r.UO)(),w=y.work,k=y.subwork,C=b.find((function(e){return e.link===w})),z={};try{z=C.works.find((function(e){return e.link===k}))}catch(M){console.error("error",M)}var D=new Date(z.entry),P=new Date(z.egress),V={year:"numeric",month:"short"},A=D.toLocaleDateString(t.type,V),H=P.toLocaleDateString(t.type,V);return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(o.default,(0,i.Z)((0,i.Z)({},e),{},{min:!0})),(0,g.jsxs)(a.Z,{sx:{p:2,mx:1,mt:1,mb:2,flexGrow:1,borderRadius:3,boxShadow:5,display:"flex",flexDirection:"column",overflow:"hidden"},children:[(0,g.jsxs)(l.ZP,{container:!0,spacing:1,columns:16,children:[(0,g.jsx)(l.ZP,{item:!0,xs:2,sx:{p:"auto",textAlign:"center",verticalAlign:"center"},children:(0,g.jsx)(x.Z,{sx:{fontSize:"76px !important;"},children:z.icons})}),(0,g.jsxs)(l.ZP,{item:!0,xs:!0,sx:{p:"auto",textAlign:"center"},children:[(0,g.jsx)(s.Z,{variant:"h6",fontWeight:700,component:"h6",sx:{my:0,mx:0,textAlign:"center"},children:C.name}),(0,g.jsx)(s.Z,{variant:"h2",fontWeight:700,component:"h2",sx:{my:0,mx:0,textAlign:"center"},children:z.name})]}),(0,g.jsxs)(l.ZP,{item:!0,xs:3,sx:{p:"auto",textAlign:"center"},children:[(0,g.jsx)(h.Z,{sx:{px:3},icon:(0,g.jsx)(d.Z,{}),label:A}),z.actuality?(0,g.jsx)(g.Fragment,{}):(0,g.jsx)(h.Z,{sx:{px:3,mt:1},icon:(0,g.jsx)(u.Z,{}),label:H})]})]}),(0,g.jsx)(m.Z,{item:!0,xs:!0,sx:{width:"100%",my:1}}),(0,g.jsxs)(l.ZP,{container:!0,item:!0,direction:"row",justifyContent:"space-around",alignItems:"center",children:[(0,g.jsx)(h.Z,{item:!0,sx:{px:3},icon:(0,g.jsx)(Z.Z,{}),label:C.type}),(0,g.jsx)(h.Z,{item:!0,sx:{px:3},icon:(0,g.jsx)(f.Z,{}),label:z.jobs}),(0,g.jsx)(h.Z,{item:!0,sx:{px:3},icon:(0,g.jsx)(p.Z,{}),label:z.city}),""!==z.website?(0,g.jsx)(l.ZP,{item:!0,children:(0,g.jsx)(j.Z,{to:z.website,target:"_blank",startIcon:(0,g.jsx)(v.Z,{}),icons:!1,sx:{width:"100%",m:"auto"},children:"Website"})}):""]}),(0,g.jsx)(c.Z,{sx:{p:0},replaceList:[{origen:"changeMe",replace:(new Date).getFullYear()-2004}],env:n,file:"https://raw.githubusercontent.com/afimpel/afimpel.github.io/cv/CurriculumVitae/Jobs/".concat(z.filename)})]})]})}},5702:function(e,t,n){var i=n(5318);t.Z=void 0;var r=i(n(5649)),c=n(184),s=(0,r.default)((0,c.jsx)("path",{d:"M19 19V5c0-1.1-.9-2-2-2H7c-1.1 0-2 .9-2 2v14H3v2h18v-2h-2zm-8-6H9v-2h2v2z"}),"DoorBack");t.Z=s},4941:function(e,t,n){var i=n(5318);t.Z=void 0;var r=i(n(5649)),c=n(184),s=(0,r.default)((0,c.jsx)("path",{d:"M14 6v15H3v-2h2V3h9v1h5v15h2v2h-4V6h-3zm-4 5v2h2v-2h-2z"}),"MeetingRoom");t.Z=s},5674:function(e,t,n){var i=n(4223),r=n(184);t.Z=(0,i.Z)((0,r.jsx)("path",{d:"m14.5 14.2 2.9 1.7-.8 1.3L13 15v-5h1.5v4.2zM22 14c0 4.41-3.59 8-8 8-2.02 0-3.86-.76-5.27-2H4c-1.15 0-2-.85-2-2V9c0-1.12.89-1.96 2-2v-.5C4 4.01 6.01 2 8.5 2c2.34 0 4.24 1.79 4.46 4.08.34-.05.69-.08 1.04-.08 4.41 0 8 3.59 8 8zM6 7h5v-.74C10.88 4.99 9.8 4 8.5 4 7.12 4 6 5.12 6 6.5V7zm14 7c0-3.31-2.69-6-6-6s-6 2.69-6 6 2.69 6 6 6 6-2.69 6-6z"}),"LockClock")},132:function(e,t,n){var i=n(4223),r=n(184);t.Z=(0,i.Z)((0,r.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"}),"Web")},4651:function(e,t,n){var i=n(4223),r=n(184);t.Z=(0,i.Z)((0,r.jsx)("path",{d:"M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"}),"Work")}}]);
//# sourceMappingURL=239.abfe1bfd.chunk.js.map