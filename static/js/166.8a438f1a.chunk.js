"use strict";(self.webpackChunkafimpel_github_io=self.webpackChunkafimpel_github_io||[]).push([[166],{6478:function(e,t,r){r.d(t,{Z:function(){return m}});var n=r(1413),i=r(5987),o=(r(2791),r(3786)),a=r(3400),c=r(6379),s=r(6151),l=r(5021),u=r(7064),d=r(9900),h=r(184),x=["children","primary","secondary","to","alternative","target","type","icons","iconSRC","badgeContent"];function m(e){var t=e.children,r=e.primary,m=e.secondary,Z=e.to,f=(e.alternative,e.target,e.type,e.icons),g=e.iconSRC,p=e.badgeContent,v=(0,i.Z)(e,x),j=function(e){window.open(e,"_blank")};switch(e.type){case"menu":return(0,h.jsx)(o.Z,(0,n.Z)((0,n.Z)({},v),{},{onClick:function(){return j(Z)},title:r,children:t}));case"list":return(0,h.jsxs)(l.ZP,(0,n.Z)((0,n.Z)({button:!0,onClick:function(){return j(Z)},title:r},v),{},{children:[f?(0,h.jsx)(u.Z,(0,n.Z)((0,n.Z)({},v),{},{children:g})):"",(0,h.jsx)(d.Z,(0,n.Z)({primary:r,secondary:m},v))]}),r);case"badge":return(0,h.jsx)(a.Z,(0,n.Z)((0,n.Z)({},v),{},{onClick:function(){return j(Z)},title:r,children:(0,h.jsx)(c.Z,{badgeContent:p,overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},children:t})}));default:return f?(0,h.jsx)(a.Z,(0,n.Z)((0,n.Z)({},v),{},{onClick:function(){return j(Z)},title:r,children:t})):(0,h.jsx)(s.Z,(0,n.Z)((0,n.Z)({},v),{},{onClick:function(){return j(Z)},title:r,children:t}))}}m.defaultProps={icons:!1,iconSRC:"",target:"_self",type:"button",primary:"",secondary:"",badgeContent:""}},8166:function(e,t,r){r.r(t),r.d(t,{default:function(){return g}});r(2791);var n=r(1889),i=r(703),o=r(890),a=r(6478),c=r(4223),s=r(184),l=(0,c.Z)((0,s.jsx)("path",{d:"M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"}),"Twitter"),u=r(255),d=r(8066),h=r(4651),x=r(132),m=r(3044),Z=r(4721),f=r(1918);function g(e){var t=e.lang,r=e.owner,c=new Date(r.created_at),g=new Date(r.updated_at),p={weekday:"short",year:"numeric",month:"short",day:"numeric"},v=c.toLocaleDateString(t.type,p),j=g.toLocaleDateString(t.type,p);return(0,s.jsx)(i.Z,{sx:{p:2,margin:1,flexGrow:1,borderRadius:6,boxShadow:5},children:(0,s.jsxs)(n.ZP,{container:!0,spacing:4,children:[(0,s.jsx)(n.ZP,{item:!0,children:(0,s.jsx)(a.Z,{color:"success",icons:!0,to:r.html_url,target:"_blank",type:"badge",badgeContent:(0,s.jsx)(u.Z,{sx:{fontSize:45,color:"text.primary"}}),sx:{boxShadow:3,borderRadius:6},children:(0,s.jsx)(m.Z,{sx:{width:256,height:256,borderRadius:5},alt:r.login,title:r.login,src:r.avatar_url})})}),(0,s.jsx)(n.ZP,{item:!0,xs:12,sm:!0,container:!0,children:(0,s.jsxs)(n.ZP,{item:!0,xs:!0,container:!0,direction:"column",spacing:1,children:[(0,s.jsxs)(n.ZP,{item:!0,xs:!0,children:[(0,s.jsx)(o.Z,{gutterBottom:!0,variant:"h1",fontWeight:700,component:"h1",sx:{my:0},children:r.name}),(0,s.jsx)(o.Z,{variant:"body2",gutterBottom:!0,color:"text.secondary",children:r.bio}),(0,s.jsx)(Z.Z,{sx:{my:1}}),(0,s.jsxs)(n.ZP,{container:!0,spacing:1,columns:16,children:[(0,s.jsxs)(n.ZP,{item:!0,xs:!0,sx:{p:"auto",textAlign:"center"},children:[t.git.Created,": ",(0,s.jsx)("b",{children:v})]}),(0,s.jsxs)(n.ZP,{item:!0,xs:!0,sx:{p:"auto",textAlign:"center"},children:[t.git.Updated,": ",(0,s.jsx)("b",{children:j})]}),(0,s.jsxs)(n.ZP,{item:!0,xs:3,sx:{p:"auto",textAlign:"center"},children:[(0,s.jsx)("b",{children:r.followers})," ",t.git.Followers]}),(0,s.jsxs)(n.ZP,{item:!0,xs:3,sx:{p:"auto",textAlign:"center"},children:[(0,s.jsx)("b",{children:r.following})," ",t.git.Following]})]})]}),(0,s.jsxs)(n.ZP,{container:!0,spacing:1,columns:16,color:"text.secondary",children:[(0,s.jsx)(n.ZP,{item:!0,xs:6,sx:{p:"auto"},children:(0,s.jsx)(f.Z,{sx:{px:3},icon:(0,s.jsx)(d.Z,{}),label:r.location})}),(0,s.jsx)(n.ZP,{item:!0,xs:4,children:(0,s.jsx)(f.Z,{sx:{px:3},icon:(0,s.jsx)(h.Z,{}),label:r.company})}),(0,s.jsx)(n.ZP,{item:!0,xs:3,children:(0,s.jsx)(a.Z,{to:r.blog,target:"_blank",startIcon:(0,s.jsx)(x.Z,{}),icons:!1,sx:{width:"100%",m:"auto"},children:"afimpel.com"})}),(0,s.jsx)(n.ZP,{item:!0,xs:3,children:(0,s.jsx)(a.Z,{to:"//twitter.com/"+r.twitter_username,target:"_blank",startIcon:(0,s.jsx)(l,{}),icons:!1,sx:{width:"100%",m:"auto"},children:"@afimpel"})})]})]})})]})})}},132:function(e,t,r){var n=r(4223),i=r(184);t.Z=(0,n.Z)((0,i.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z"}),"Web")},4651:function(e,t,r){var n=r(4223),i=r(184);t.Z=(0,n.Z)((0,i.jsx)("path",{d:"M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"}),"Work")},3044:function(e,t,r){r.d(t,{Z:function(){return j}});var n=r(9439),i=r(3366),o=r(7462),a=r(2791),c=r(8182),s=r(767),l=r(7630),u=r(3736),d=r(4223),h=r(184),x=(0,d.Z)((0,h.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person"),m=r(5159);function Z(e){return(0,m.Z)("MuiAvatar",e)}(0,r(208).Z)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var f=["alt","children","className","component","imgProps","sizes","src","srcSet","variant"],g=(0,l.ZP)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,t[r.variant],r.colorDefault&&t.colorDefault]}})((function(e){var t=e.theme,r=e.ownerState;return(0,o.Z)({position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:t.typography.fontFamily,fontSize:t.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},"rounded"===r.variant&&{borderRadius:t.shape.borderRadius},"square"===r.variant&&{borderRadius:0},r.colorDefault&&{color:t.palette.background.default,backgroundColor:"light"===t.palette.mode?t.palette.grey[400]:t.palette.grey[600]})})),p=(0,l.ZP)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:function(e,t){return t.img}})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),v=(0,l.ZP)(x,{name:"MuiAvatar",slot:"Fallback",overridesResolver:function(e,t){return t.fallback}})({width:"75%",height:"75%"});var j=a.forwardRef((function(e,t){var r=(0,u.Z)({props:e,name:"MuiAvatar"}),l=r.alt,d=r.children,x=r.className,m=r.component,j=void 0===m?"div":m,b=r.imgProps,y=r.sizes,w=r.src,P=r.srcSet,k=r.variant,C=void 0===k?"circular":k,S=(0,i.Z)(r,f),R=null,z=function(e){var t=e.crossOrigin,r=e.referrerPolicy,i=e.src,o=e.srcSet,c=a.useState(!1),s=(0,n.Z)(c,2),l=s[0],u=s[1];return a.useEffect((function(){if(i||o){u(!1);var e=!0,n=new Image;return n.onload=function(){e&&u("loaded")},n.onerror=function(){e&&u("error")},n.crossOrigin=t,n.referrerPolicy=r,n.src=i,o&&(n.srcset=o),function(){e=!1}}}),[t,r,i,o]),l}((0,o.Z)({},b,{src:w,srcSet:P})),_=w||P,A=_&&"error"!==z,D=(0,o.Z)({},r,{colorDefault:!A,component:j,variant:C}),M=function(e){var t=e.classes,r={root:["root",e.variant,e.colorDefault&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,s.Z)(r,Z,t)}(D);return R=A?(0,h.jsx)(p,(0,o.Z)({alt:l,src:w,srcSet:P,sizes:y,ownerState:D,className:M.img},b)):null!=d?d:_&&l?l[0]:(0,h.jsx)(v,{className:M.fallback}),(0,h.jsx)(g,(0,o.Z)({as:j,ownerState:D,className:(0,c.Z)(M.root,x),ref:t},S,{children:R}))}))}}]);
//# sourceMappingURL=166.8a438f1a.chunk.js.map