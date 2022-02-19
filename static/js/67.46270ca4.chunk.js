"use strict";(self.webpackChunkafimpel_github_io=self.webpackChunkafimpel_github_io||[]).push([[67],{6478:function(t,e,n){n.d(e,{Z:function(){return Z}});var r=n(1413),i=n(5987),a=(n(2791),n(3786)),o=n(3400),s=n(6379),c=n(6151),l=n(5021),d=n(7064),u=n(9900),x=n(184),h=["children","primary","secondary","to","alternative","target","type","icons","iconSRC","badgeContent"];function Z(t){var e=t.children,n=t.primary,Z=t.secondary,p=t.to,f=(t.alternative,t.target,t.type,t.icons),g=t.iconSRC,m=t.badgeContent,j=(0,i.Z)(t,h),b=function(t){window.open(t,"_blank")};switch(t.type){case"menu":return(0,x.jsx)(a.Z,(0,r.Z)((0,r.Z)({},j),{},{onClick:function(){return b(p)},title:n,children:e}));case"list":return(0,x.jsxs)(l.ZP,(0,r.Z)((0,r.Z)({button:!0,onClick:function(){return b(p)},title:n},j),{},{children:[f?(0,x.jsx)(d.Z,(0,r.Z)((0,r.Z)({},j),{},{children:g})):"",(0,x.jsx)(u.Z,(0,r.Z)({primary:n,secondary:Z},j))]}),n);case"badge":return(0,x.jsx)(o.Z,(0,r.Z)((0,r.Z)({},j),{},{onClick:function(){return b(p)},title:n,children:(0,x.jsx)(s.Z,{badgeContent:m,overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},children:e})}));default:return f?(0,x.jsx)(o.Z,(0,r.Z)((0,r.Z)({},j),{},{onClick:function(){return b(p)},title:n,children:e})):(0,x.jsx)(c.Z,(0,r.Z)((0,r.Z)({},j),{},{onClick:function(){return b(p)},title:n,children:e}))}}Z.defaultProps={icons:!1,iconSRC:"",target:"_self",type:"button",primary:"",secondary:"",badgeContent:""}},2970:function(t,e,n){var r=n(1388),i=(0,r.setup)({baseURL:"https://api.github.com",cache:{exclude:{maxAge:36e5,methods:["put","patch","delete","post"]}}});e.Z=i},5650:function(t,e,n){n.r(e),n.d(e,{default:function(){return f}});n(2791);var r=n(1889),i=n(703),a=n(890),o=n(6478),s=n(255),c=n(2456),l=n(132),d=n(3044),u=n(4721),x=n(493),h=n(5021),Z=n(9900),p=n(184);function f(t){var e=t.lang,n=t.list,f=new Date(n.created_at),g=new Date(n.updated_at),m={weekday:"short",year:"numeric",month:"short",day:"numeric"},j=f.toLocaleDateString(e.type,m),b=g.toLocaleDateString(e.type,m);return n.owner?(0,p.jsx)(i.Z,{sx:{p:2,margin:1,flexGrow:1,borderRadius:6,boxShadow:5},children:(0,p.jsxs)(r.ZP,{container:!0,spacing:4,children:[(0,p.jsx)(r.ZP,{item:!0,children:(0,p.jsx)(o.Z,{color:"success",icons:!0,to:n.owner.html_url,target:"_blank",type:"badge",badgeContent:(0,p.jsx)(s.Z,{sx:{fontSize:45,color:"text.primary"}}),sx:{boxShadow:3,borderRadius:6},children:(0,p.jsx)(d.Z,{sx:{width:256,height:256,borderRadius:5},alt:n.owner.login,title:n.owner.login,src:n.owner.avatar_url})})}),(0,p.jsx)(r.ZP,{item:!0,xs:12,sm:!0,container:!0,children:(0,p.jsxs)(r.ZP,{item:!0,xs:!0,container:!0,direction:"column",spacing:1,children:[(0,p.jsxs)(r.ZP,{item:!0,xs:!0,children:[(0,p.jsx)(a.Z,{gutterBottom:!0,variant:"h2",fontWeight:700,component:"h1",sx:{my:0},children:n.name}),(0,p.jsxs)(a.Z,{variant:"body2",gutterBottom:!0,color:"text.secondary",children:[n.description," / ",n.language]}),(0,p.jsx)(u.Z,{sx:{my:1}}),(0,p.jsxs)(r.ZP,{container:!0,spacing:1,columns:16,children:[(0,p.jsxs)(r.ZP,{item:!0,xs:!0,sx:{p:"auto",textAlign:"center"},children:[e.git.Created,": ",(0,p.jsx)("b",{children:j})]}),(0,p.jsxs)(r.ZP,{item:!0,xs:!0,sx:{p:"auto",textAlign:"center"},children:[e.git.Updated,": ",(0,p.jsx)("b",{children:b})]}),(0,p.jsxs)(r.ZP,{item:!0,xs:!0,sx:{p:"auto",textAlign:"center"},children:[e.git.Branch,": ",(0,p.jsx)("b",{children:n.default_branch})]})]})]}),(0,p.jsxs)(r.ZP,{container:!0,spacing:1,columns:16,color:"text.secondary",children:[(0,p.jsx)(r.ZP,{item:!0,xs:!0,sx:{p:"auto"},children:(0,p.jsx)(o.Z,{to:n.html_url,target:"_blank",startIcon:(0,p.jsx)(s.Z,{}),icons:!1,sx:{m:"auto"},children:"Repo"})}),(0,p.jsxs)(r.ZP,{item:!0,xs:!0,sx:{p:"auto"},children:[(0,p.jsx)(o.Z,{to:n.url+"/tarball/"+n.default_branch,target:"_blank",startIcon:(0,p.jsx)(c.Z,{}),icons:!1,sx:{m:"auto"},children:"tar.gz"}),(0,p.jsx)(o.Z,{to:n.url+"/zipball/"+n.default_branch,target:"_blank",startIcon:(0,p.jsx)(c.Z,{}),icons:!1,sx:{m:"auto"},children:"zip"})]}),""!==n.homepage?(0,p.jsx)(r.ZP,{item:!0,xs:!0,children:(0,p.jsx)(o.Z,{to:n.homepage,target:"_blank",startIcon:(0,p.jsx)(l.Z,{}),icons:!1,sx:{width:"100%",m:"auto"},children:"GitHub Pages"})}):""]})]})}),(0,p.jsx)(r.ZP,{item:!0,children:(0,p.jsx)(x.Z,{dense:!0,children:n.topics.map((function(t,e){return(0,p.jsx)(h.ZP,{sx:{m:0,p:0},children:(0,p.jsx)(Z.Z,{primary:t})},e)}))})})]})}):(0,p.jsx)(p.Fragment,{children:"ddd"})}},67:function(t,e,n){n.r(e),n.d(e,{default:function(){return R}});var r=n(1413),i=n(9439),a=n(5987),o=n(2791),s=n(9276),c=n(6871),l=n(8773),d=n(5650),u=n(2970);function x(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(n,r){return n[t]>r[t]?e?-1:1:n[t]<r[t]?e?1:-1:0}}var h=n(8870),Z=n(6748),p=n(1942),f=n(890),g=n(6759),m=n(215);function j(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=e?1e3:1024;if(Math.abs(t)<r)return t+" B";var i=e?["kB","MB","GB","TB","PB","EB","ZB","YB"]:["KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],a=-1,o=Math.pow(10,n);do{t/=r,++a}while(Math.round(Math.abs(t)*o)/o>=r&&a<i.length-1);return t.toFixed(n)+" "+i[a]}var b=n(703),v=n(4721),y=n(8931),w=n(6106),B=n(184),P=["bgColor","color","labelIcon","labelInfo","labelText"];function C(t,e){return t.filter((function(t){return t.folder===e})).map((function(e){return"tree"===e.type?(0,r.Z)((0,r.Z)({},e),{},{children:C(t,e.path)}):e}))}function _(t){t.bgColor,t.color;var e=t.labelIcon,n=t.labelInfo,i=t.labelText,o=(0,a.Z)(t,P);return(0,B.jsx)(p.Z,(0,r.Z)({label:(0,B.jsxs)(h.Z,{sx:{display:"flex",alignItems:"center",p:0,m:0,width:"100%"},children:[(0,B.jsx)(h.Z,{component:e,sx:{mr:1}}),(0,B.jsx)(f.Z,{variant:"body2",sx:{fontWeight:"inherit",flexGrow:1},children:i}),(0,B.jsx)(f.Z,{variant:"caption",children:n})]})},o))}var k=function t(e){return(0,B.jsx)(_,{nodeId:e.path,labelText:e.name,labelInfo:"tree"===e.type?"":j(e.size,!0),labelIcon:"tree"===e.type?y.Z:w.Z,sx:{flexGrow:1,overflowY:"auto"},children:Array.isArray(e.children)?e.children.map((function(e){return t(e)})):null},e.id)};function I(t){var e=t.repos,n=t.titles,r=C(e,"");return(0,B.jsxs)(b.Z,{sx:{py:2,margin:2,flexGrow:1,borderRadius:3,boxShadow:5},children:[(0,B.jsx)(f.Z,{component:"h4",variant:"h4",sx:{mx:5},children:n}),(0,B.jsx)(v.Z,{sx:{my:1}}),(0,B.jsx)(Z.Z,{"aria-label":"rich object",defaultCollapseIcon:(0,B.jsx)(g.Z,{}),defaultExpandIcon:(0,B.jsx)(m.Z,{}),children:r.map((function(t){return k(t)}))})]})}var S=["env","list","lang"];function R(t){var e=t.env,n=t.list,h=t.lang,Z=(0,a.Z)(t,S),p=(0,c.UO)(),f=p.repo,g=p.user,m=p["*"],j=(0,o.useState)({}),b=(0,i.Z)(j,2),v=b[0],y=b[1],w=(0,o.useState)([]),P=(0,i.Z)(w,2),C=P[0],_=P[1];return(0,o.useEffect)((function(){y(n.find((function(t){return t.name===f}))),u.Z.get("/repos/".concat(g,"/").concat(f,"/git/trees/").concat(m,"?recursive=1")).then((function(t){var e=t.data,n=[];e.tree.sort(x("type",!0));var i=0;e.tree.map((function(t){var e=t.path.split("/"),a=(0,r.Z)((0,r.Z)({},t),{},{id:i,length:e.length,name:e.pop(),folder:e.join("/")});n.push(a),i++})),n.sort(x("length",!1)),_(n)})).catch((function(t){console.error("error",t),_([])}))}),[m,n,f,g]),(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)(d.default,(0,r.Z)({list:v,lang:h,env:e},Z)),(0,B.jsx)(I,{repos:C,titles:h.git.Files}),(0,B.jsx)(s.Z,{sx:{width:"98%",m:2,p:0},children:(0,B.jsx)(l.Z,{env:e,file:"https://raw.githubusercontent.com/".concat(g,"/").concat(f,"/").concat(m,"/README.md")})})]})}}}]);
//# sourceMappingURL=67.46270ca4.chunk.js.map