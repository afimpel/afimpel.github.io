"use strict";(self.webpackChunkafimpel_github_io=self.webpackChunkafimpel_github_io||[]).push([[67],{2970:function(e,t,n){var r=n(1388),i=(0,r.setup)({baseURL:"https://api.github.com",cache:{exclude:{maxAge:36e5,methods:["put","patch","delete","post"]}}});t.Z=i},5650:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var r=n(1413),i=(n(2791),n(1889)),o=n(890),a=n(9762),s=n(6843),c=n(255),l=n(2456),x=n(132),h=n(4721),u=n(5050),d=n(184);function p(e){var t=e.lang,n=e.list,p=new Date(n.created_at),m=new Date(n.updated_at),f={weekday:"short",year:"numeric",month:"short",day:"numeric"},Z=p.toLocaleDateString(t.type,f),g=m.toLocaleDateString(t.type,f);return n.owner?(0,d.jsxs)(u.default,(0,r.Z)((0,r.Z)({},e),{},{children:[(0,d.jsxs)(i.ZP,{item:!0,xs:!0,children:[(0,d.jsx)(o.Z,{gutterBottom:!0,variant:"h2",fontWeight:700,component:"h1",sx:{my:0},children:n.name}),(0,d.jsxs)(o.Z,{variant:"body2",gutterBottom:!0,color:"text.secondary",children:[n.description," / ",n.language]}),0!==n.topics.length?(0,d.jsx)(o.Z,{variant:"body2",gutterBottom:!0,color:"text.secondary",children:n.topics.map((function(e,t){return(0,d.jsx)(a.Z,{to:"https://github.com/topics/"+e,type:"chip",icons:!1,sx:{px:1,mx:1},iconSRC:(0,d.jsx)(s.Z,{}),children:e},t)}))}):"",(0,d.jsx)(h.Z,{sx:{my:1}}),(0,d.jsxs)(i.ZP,{container:!0,spacing:1,columns:16,children:[(0,d.jsxs)(i.ZP,{item:!0,xs:!0,sx:{p:"auto",textAlign:"center"},children:[t.git.Created,": ",(0,d.jsx)("b",{children:Z})]}),(0,d.jsxs)(i.ZP,{item:!0,xs:!0,sx:{p:"auto",textAlign:"center"},children:[t.git.Updated,": ",(0,d.jsx)("b",{children:g})]}),(0,d.jsxs)(i.ZP,{item:!0,xs:!0,sx:{p:"auto",textAlign:"center"},children:[t.git.Branch,": ",(0,d.jsx)("b",{children:n.default_branch})]})]})]}),(0,d.jsxs)(i.ZP,{container:!0,spacing:1,columns:16,color:"text.secondary",sx:{mb:2},children:[(0,d.jsx)(i.ZP,{item:!0,xs:!0,sx:{p:"auto"},children:(0,d.jsx)(a.Z,{to:n.html_url,type:"chip",icons:!1,sx:{px:3},iconSRC:(0,d.jsx)(c.Z,{}),children:"Repo"})}),(0,d.jsxs)(i.ZP,{item:!0,xs:!0,sx:{p:"auto"},children:[(0,d.jsx)(a.Z,{to:n.url+"/tarball/"+n.default_branch,type:"chip",icons:!1,sx:{px:3,mx:2},iconSRC:(0,d.jsx)(l.Z,{}),children:"tar.gz"}),(0,d.jsx)(a.Z,{to:n.url+"/zipball/"+n.default_branch,type:"chip",icons:!1,sx:{px:3,mx:2},iconSRC:(0,d.jsx)(l.Z,{}),children:"zip"})]}),null!==n.homepage&&""!==n.homepage?(0,d.jsx)(i.ZP,{item:!0,xs:!0,sx:{p:"auto"},children:(0,d.jsx)(a.Z,{to:n.homepage,type:"chip",icons:!1,sx:{px:3,mx:"auto"},iconSRC:(0,d.jsx)(x.Z,{}),children:"GitHub Pages"})}):""]})]})):(0,d.jsx)(d.Fragment,{})}},67:function(e,t,n){n.r(t),n.d(t,{default:function(){return A}});var r=n(1413),i=n(9439),o=n(5987),a=n(2791),s=n(9276),c=n(890),l=n(6871),x=n(5953),h=n(5650),u=n(2970);function d(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(n,r){return n[e]>r[e]?t?-1:1:n[e]<r[e]?t?1:-1:0}}var p=n(8870),m=n(6748),f=n(1942),Z=n(6759),g=n(215);function j(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=t?1e3:1024;if(Math.abs(e)<r)return e+" B";var i=t?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],o=-1,a=Math.pow(10,n);do{e/=r,++o}while(Math.round(Math.abs(e)*a)/a>=r&&o<i.length-1);return e.toFixed(n)+" "+i[o]}var b=n(703),v=n(4721),y=n(8931),B=n(6106),w=n(184),P=["bgColor","color","labelIcon","labelInfo","labelText"];function C(e,t){return e.filter((function(e){return e.folder===t})).map((function(t){return"tree"===t.type?(0,r.Z)((0,r.Z)({},t),{},{children:C(e,t.path)}):t}))}function S(e){e.bgColor,e.color;var t=e.labelIcon,n=e.labelInfo,i=e.labelText,a=(0,o.Z)(e,P);return(0,w.jsx)(f.Z,(0,r.Z)({label:(0,w.jsxs)(p.Z,{sx:{display:"flex",alignItems:"center",p:0,m:0,width:"100%"},children:[(0,w.jsx)(p.Z,{component:t,sx:{mr:1}}),(0,w.jsx)(c.Z,{variant:"body2",sx:{fontWeight:"inherit",flexGrow:1},children:i}),(0,w.jsx)(c.Z,{variant:"caption",children:n})]})},a))}var I=function e(t){return(0,w.jsx)(S,{nodeId:t.path,labelText:t.name,labelInfo:"tree"===t.type?"":j(t.size,!0),labelIcon:"tree"===t.type?y.Z:B.Z,sx:{flexGrow:1,overflowY:"auto"},children:Array.isArray(t.children)?t.children.map((function(t){return e(t)})):null},t.id)};function _(e){var t=e.repos,n=e.titles,r=C(t,"");return(0,w.jsxs)(b.Z,{sx:{py:2,margin:2,flexGrow:1,borderRadius:3,boxShadow:5},children:[(0,w.jsx)(c.Z,{component:"h4",variant:"h4",sx:{mx:5},children:n}),(0,w.jsx)(v.Z,{sx:{my:1}}),(0,w.jsx)(m.Z,{"aria-label":"rich object",defaultCollapseIcon:(0,w.jsx)(Z.Z,{}),defaultExpandIcon:(0,w.jsx)(g.Z,{}),children:r.map((function(e){return I(e)}))})]})}var R=["env","list","lang"];function A(e){var t=e.env,n=e.list,p=e.lang,m=(0,o.Z)(e,R),f=(0,l.UO)(),Z=f.repo,g=f.user,j=f["*"],b=(0,a.useState)({}),v=(0,i.Z)(b,2),y=v[0],B=v[1],P=(0,a.useState)([]),C=(0,i.Z)(P,2),S=C[0],I=C[1];return(0,a.useEffect)((function(){B(n.find((function(e){return e.name===Z}))),u.Z.get("/repos/".concat(g,"/").concat(Z,"/git/trees/").concat(j,"?recursive=1")).then((function(e){var t=e.data,n=[];t.tree.sort(d("type",!0));var i=0;t.tree.map((function(e){var t=e.path.split("/"),o=(0,r.Z)((0,r.Z)({},e),{},{id:i,length:t.length,name:t.pop(),folder:t.join("/")});n.push(o),i++})),n.sort(d("length",!1)),I(n)})).catch((function(e){console.error("error",e),I([])}))}),[j,n,Z,g]),(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(h.default,(0,r.Z)({list:y,lang:p,env:t},m)),(0,w.jsx)(_,{repos:S,titles:p.git.Files}),(0,w.jsx)(s.Z,{sx:{width:"98%",m:2,p:0},children:(0,w.jsx)(x.Z,{env:t,file:"https://raw.githubusercontent.com/".concat(g,"/").concat(Z,"/").concat(j,"/README.md")})}),t?(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)(c.Z,{variant:"code",gutterBottom:!0,component:"pre",wrap:"nowrap",children:[g,"/",Z," - ",t]}),(0,w.jsx)("hr",{}),(0,w.jsx)(c.Z,{variant:"code",gutterBottom:!0,component:"pre",wrap:"nowrap",children:JSON.stringify(y," "," ")})]}):""]})}}}]);
//# sourceMappingURL=67.545b89eb.chunk.js.map