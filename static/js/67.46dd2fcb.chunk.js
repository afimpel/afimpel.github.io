"use strict";(self.webpackChunkafimpel_github_io=self.webpackChunkafimpel_github_io||[]).push([[67],{2970:function(e,t,n){var r=n(1388),i=(0,r.setup)({baseURL:"https://api.github.com",cache:{exclude:{maxAge:36e5,methods:["put","patch","delete","post"]}}});t.Z=i},5650:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(1413),i=(n(2791),n(1889)),a=n(890),o=n(9762),s=n(255),c=n(2456),l=n(132),x=n(4721),u=n(5050),h=n(184);function d(e){var t=e.lang,n=e.list,d=new Date(n.created_at),p=new Date(n.updated_at),f={weekday:"short",year:"numeric",month:"short",day:"numeric"},Z=d.toLocaleDateString(t.type,f),m=p.toLocaleDateString(t.type,f);return n.owner?(0,h.jsxs)(u.default,(0,r.Z)((0,r.Z)({},e),{},{children:[(0,h.jsxs)(i.ZP,{item:!0,xs:!0,children:[(0,h.jsx)(a.Z,{gutterBottom:!0,variant:"h2",fontWeight:700,component:"h1",sx:{my:0},children:n.name}),(0,h.jsxs)(a.Z,{variant:"body2",gutterBottom:!0,color:"text.secondary",children:[n.description," / ",n.language]}),(0,h.jsx)(x.Z,{sx:{my:1}}),(0,h.jsxs)(i.ZP,{container:!0,spacing:1,columns:16,children:[(0,h.jsxs)(i.ZP,{item:!0,xs:!0,sx:{p:"auto",textAlign:"center"},children:[t.git.Created,": ",(0,h.jsx)("b",{children:Z})]}),(0,h.jsxs)(i.ZP,{item:!0,xs:!0,sx:{p:"auto",textAlign:"center"},children:[t.git.Updated,": ",(0,h.jsx)("b",{children:m})]}),(0,h.jsxs)(i.ZP,{item:!0,xs:!0,sx:{p:"auto",textAlign:"center"},children:[t.git.Branch,": ",(0,h.jsx)("b",{children:n.default_branch})]})]})]}),(0,h.jsxs)(i.ZP,{container:!0,spacing:1,columns:16,color:"text.secondary",sx:{mb:2},children:[(0,h.jsx)(i.ZP,{item:!0,xs:!0,sx:{p:"auto"},children:(0,h.jsx)(o.Z,{to:n.html_url,type:"chip",icons:!1,sx:{px:3},iconSRC:(0,h.jsx)(s.Z,{}),children:"Repo"})}),(0,h.jsxs)(i.ZP,{item:!0,xs:!0,sx:{p:"auto"},children:[(0,h.jsx)(o.Z,{to:n.url+"/tarball/"+n.default_branch,type:"chip",icons:!1,sx:{px:3,mx:2},iconSRC:(0,h.jsx)(c.Z,{}),children:"tar.gz"}),(0,h.jsx)(o.Z,{to:n.url+"/zipball/"+n.default_branch,type:"chip",icons:!1,sx:{px:3,mx:2},iconSRC:(0,h.jsx)(c.Z,{}),children:"zip"})]}),""!==n.homepage?(0,h.jsx)(i.ZP,{item:!0,xs:!0,sx:{p:"auto"},children:(0,h.jsx)(o.Z,{to:n.homepage,type:"chip",icons:!1,sx:{px:3,mx:"auto"},iconSRC:(0,h.jsx)(l.Z,{}),children:"GitHub Pages"})}):""]})]})):(0,h.jsx)(h.Fragment,{})}},67:function(e,t,n){n.r(t),n.d(t,{default:function(){return A}});var r=n(1413),i=n(9439),a=n(5987),o=n(2791),s=n(9276),c=n(6871),l=n(8773),x=n(5650),u=n(2970);function h(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(n,r){return n[e]>r[e]?t?-1:1:n[e]<r[e]?t?1:-1:0}}var d=n(8870),p=n(6748),f=n(1942),Z=n(890),m=n(6759),g=n(215);function j(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=t?1e3:1024;if(Math.abs(e)<r)return e+" B";var i=t?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],a=-1,o=Math.pow(10,n);do{e/=r,++a}while(Math.round(Math.abs(e)*o)/o>=r&&a<i.length-1);return e.toFixed(n)+" "+i[a]}var b=n(703),v=n(4721),y=n(8931),B=n(6106),w=n(184),P=["bgColor","color","labelIcon","labelInfo","labelText"];function C(e,t){return e.filter((function(e){return e.folder===t})).map((function(t){return"tree"===t.type?(0,r.Z)((0,r.Z)({},t),{},{children:C(e,t.path)}):t}))}function I(e){e.bgColor,e.color;var t=e.labelIcon,n=e.labelInfo,i=e.labelText,o=(0,a.Z)(e,P);return(0,w.jsx)(f.Z,(0,r.Z)({label:(0,w.jsxs)(d.Z,{sx:{display:"flex",alignItems:"center",p:0,m:0,width:"100%"},children:[(0,w.jsx)(d.Z,{component:t,sx:{mr:1}}),(0,w.jsx)(Z.Z,{variant:"body2",sx:{fontWeight:"inherit",flexGrow:1},children:i}),(0,w.jsx)(Z.Z,{variant:"caption",children:n})]})},o))}var _=function e(t){return(0,w.jsx)(I,{nodeId:t.path,labelText:t.name,labelInfo:"tree"===t.type?"":j(t.size,!0),labelIcon:"tree"===t.type?y.Z:B.Z,sx:{flexGrow:1,overflowY:"auto"},children:Array.isArray(t.children)?t.children.map((function(t){return e(t)})):null},t.id)};function S(e){var t=e.repos,n=e.titles,r=C(t,"");return(0,w.jsxs)(b.Z,{sx:{py:2,margin:2,flexGrow:1,borderRadius:3,boxShadow:5},children:[(0,w.jsx)(Z.Z,{component:"h4",variant:"h4",sx:{mx:5},children:n}),(0,w.jsx)(v.Z,{sx:{my:1}}),(0,w.jsx)(p.Z,{"aria-label":"rich object",defaultCollapseIcon:(0,w.jsx)(m.Z,{}),defaultExpandIcon:(0,w.jsx)(g.Z,{}),children:r.map((function(e){return _(e)}))})]})}var R=["env","list","lang"];function A(e){var t=e.env,n=e.list,d=e.lang,p=(0,a.Z)(e,R),f=(0,c.UO)(),Z=f.repo,m=f.user,g=f["*"],j=(0,o.useState)({}),b=(0,i.Z)(j,2),v=b[0],y=b[1],B=(0,o.useState)([]),P=(0,i.Z)(B,2),C=P[0],I=P[1];return(0,o.useEffect)((function(){y(n.find((function(e){return e.name===Z}))),u.Z.get("/repos/".concat(m,"/").concat(Z,"/git/trees/").concat(g,"?recursive=1")).then((function(e){var t=e.data,n=[];t.tree.sort(h("type",!0));var i=0;t.tree.map((function(e){var t=e.path.split("/"),a=(0,r.Z)((0,r.Z)({},e),{},{id:i,length:t.length,name:t.pop(),folder:t.join("/")});n.push(a),i++})),n.sort(h("length",!1)),I(n)})).catch((function(e){console.error("error",e),I([])}))}),[g,n,Z,m]),(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(x.default,(0,r.Z)({list:v,lang:d,env:t},p)),(0,w.jsx)(S,{repos:C,titles:d.git.Files}),(0,w.jsx)(s.Z,{sx:{width:"98%",m:2,p:0},children:(0,w.jsx)(l.Z,{env:t,file:"https://raw.githubusercontent.com/".concat(m,"/").concat(Z,"/").concat(g,"/README.md")})})]})}}}]);
//# sourceMappingURL=67.46dd2fcb.chunk.js.map