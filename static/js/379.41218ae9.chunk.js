"use strict";(self.webpackChunkafimpel_github_io=self.webpackChunkafimpel_github_io||[]).push([[379],{6379:function(r,o,n){n.d(o,{Z:function(){return P}});var a=n(4942),i=n(3366),t=n(7462),e=n(2791),c=n(8182),l=function(r){var o=e.useRef({});return e.useEffect((function(){o.current=r})),o.current},s=n(208),g=n(5159);function v(r){return(0,g.Z)("MuiBadge",r)}var h=(0,s.Z)("MuiBadge",["root","badge","dot","standard","anchorOriginTopLeft","anchorOriginTopRight","anchorOriginBottomLeft","anchorOriginBottomRight","invisible"]),d=n(7312),u=n(767),p=n(627);function m(r){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;return(0,p.Z)(r)?o:(0,t.Z)({},o,{ownerState:(0,t.Z)({},o.ownerState,n)})}var f=n(184),b=["anchorOrigin","classes","badgeContent","component","children","className","components","componentsProps","invisible","max","showZero","variant"],O=e.forwardRef((function(r,o){var n=r.anchorOrigin,a=void 0===n?{vertical:"top",horizontal:"right"}:n,e=r.classes,s=r.component,g=r.children,h=r.className,p=r.components,O=void 0===p?{}:p,Z=r.componentsProps,x=void 0===Z?{}:Z,R=r.max,w=void 0===R?99:R,C=r.showZero,z=void 0!==C&&C,B=r.variant,y=void 0===B?"standard":B,S=(0,i.Z)(r,b),P=function(r){var o=r.anchorOrigin,n=void 0===o?{vertical:"top",horizontal:"right"}:o,a=r.badgeContent,i=r.invisible,t=r.max,e=void 0===t?99:t,c=r.showZero,s=void 0!==c&&c,g=r.variant,v=void 0===g?"standard":g,h=l({anchorOrigin:n,badgeContent:a,max:e,variant:v}),d=i;null==i&&(0===a&&!s||null==a&&"dot"!==v)&&(d=!0);var u=d?h:r,p=u.anchorOrigin,m=void 0===p?n:p,f=u.badgeContent,b=u.max,O=void 0===b?e:b,Z=u.variant,x=void 0===Z?v:Z,R="";return"dot"!==x&&(R=f&&Number(f)>O?"".concat(O,"+"):f),{anchorOrigin:m,badgeContent:f,invisible:d,max:O,variant:x,displayValue:R}}((0,t.Z)({},r,{anchorOrigin:a,max:w,variant:y})),T=P.anchorOrigin,M=P.badgeContent,N=P.max,k=P.variant,L=P.displayValue,W=P.invisible,I=(0,t.Z)({},r,{anchorOrigin:T,badgeContent:M,classes:e,invisible:W,max:N,variant:k,showZero:z}),j=function(r){var o=r.variant,n=r.anchorOrigin,a=r.invisible,i=r.classes,t={root:["root"],badge:["badge",o,"anchorOrigin".concat((0,d.Z)(n.vertical)).concat((0,d.Z)(n.horizontal)),a&&"invisible"]};return(0,u.Z)(t,v,i)}(I),_=s||O.Root||"span",E=m(_,(0,t.Z)({},S,x.root),I),F=O.Badge||"span",V=m(F,x.badge,I);return(0,f.jsxs)(_,(0,t.Z)({},E,{ref:o},S,{className:(0,c.Z)(j.root,E.className,h),children:[g,(0,f.jsx)(F,(0,t.Z)({},V,{className:(0,c.Z)(j.badge,V.className),children:L}))]}))})),Z=O,x=n(7630),R=n(1046),w=function(r){return!r||!(0,p.Z)(r)},C=n(4036),z=["anchorOrigin","component","components","componentsProps","overlap","color","invisible","badgeContent","showZero","variant"],B=(0,t.Z)({},h,(0,s.Z)("MuiBadge",["colorError","colorInfo","colorPrimary","colorSecondary","colorSuccess","colorWarning","overlapRectangular","overlapCircular","anchorOriginTopLeftCircular","anchorOriginTopLeftRectangular","anchorOriginTopRightCircular","anchorOriginTopRightRectangular","anchorOriginBottomLeftCircular","anchorOriginBottomLeftRectangular","anchorOriginBottomRightCircular","anchorOriginBottomRightRectangular"])),y=(0,x.ZP)("span",{name:"MuiBadge",slot:"Root",overridesResolver:function(r,o){return o.root}})({position:"relative",display:"inline-flex",verticalAlign:"middle",flexShrink:0}),S=(0,x.ZP)("span",{name:"MuiBadge",slot:"Badge",overridesResolver:function(r,o){var n=r.ownerState;return[o.badge,o[n.variant],o["anchorOrigin".concat((0,C.Z)(n.anchorOrigin.vertical)).concat((0,C.Z)(n.anchorOrigin.horizontal)).concat((0,C.Z)(n.overlap))],"default"!==n.color&&o["color".concat((0,C.Z)(n.color))],n.invisible&&o.invisible]}})((function(r){var o=r.theme,n=r.ownerState;return(0,t.Z)({display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignContent:"center",alignItems:"center",position:"absolute",boxSizing:"border-box",fontFamily:o.typography.fontFamily,fontWeight:o.typography.fontWeightMedium,fontSize:o.typography.pxToRem(12),minWidth:20,lineHeight:1,padding:"0 6px",height:20,borderRadius:10,zIndex:1,transition:o.transitions.create("transform",{easing:o.transitions.easing.easeInOut,duration:o.transitions.duration.enteringScreen})},"default"!==n.color&&{backgroundColor:o.palette[n.color].main,color:o.palette[n.color].contrastText},"dot"===n.variant&&{borderRadius:4,height:8,minWidth:8,padding:0},"top"===n.anchorOrigin.vertical&&"right"===n.anchorOrigin.horizontal&&"rectangular"===n.overlap&&(0,a.Z)({top:0,right:0,transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%"},"&.".concat(B.invisible),{transform:"scale(0) translate(50%, -50%)"}),"bottom"===n.anchorOrigin.vertical&&"right"===n.anchorOrigin.horizontal&&"rectangular"===n.overlap&&(0,a.Z)({bottom:0,right:0,transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%"},"&.".concat(B.invisible),{transform:"scale(0) translate(50%, 50%)"}),"top"===n.anchorOrigin.vertical&&"left"===n.anchorOrigin.horizontal&&"rectangular"===n.overlap&&(0,a.Z)({top:0,left:0,transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%"},"&.".concat(B.invisible),{transform:"scale(0) translate(-50%, -50%)"}),"bottom"===n.anchorOrigin.vertical&&"left"===n.anchorOrigin.horizontal&&"rectangular"===n.overlap&&(0,a.Z)({bottom:0,left:0,transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%"},"&.".concat(B.invisible),{transform:"scale(0) translate(-50%, 50%)"}),"top"===n.anchorOrigin.vertical&&"right"===n.anchorOrigin.horizontal&&"circular"===n.overlap&&(0,a.Z)({top:"14%",right:"14%",transform:"scale(1) translate(50%, -50%)",transformOrigin:"100% 0%"},"&.".concat(B.invisible),{transform:"scale(0) translate(50%, -50%)"}),"bottom"===n.anchorOrigin.vertical&&"right"===n.anchorOrigin.horizontal&&"circular"===n.overlap&&(0,a.Z)({bottom:"14%",right:"14%",transform:"scale(1) translate(50%, 50%)",transformOrigin:"100% 100%"},"&.".concat(B.invisible),{transform:"scale(0) translate(50%, 50%)"}),"top"===n.anchorOrigin.vertical&&"left"===n.anchorOrigin.horizontal&&"circular"===n.overlap&&(0,a.Z)({top:"14%",left:"14%",transform:"scale(1) translate(-50%, -50%)",transformOrigin:"0% 0%"},"&.".concat(B.invisible),{transform:"scale(0) translate(-50%, -50%)"}),"bottom"===n.anchorOrigin.vertical&&"left"===n.anchorOrigin.horizontal&&"circular"===n.overlap&&(0,a.Z)({bottom:"14%",left:"14%",transform:"scale(1) translate(-50%, 50%)",transformOrigin:"0% 100%"},"&.".concat(B.invisible),{transform:"scale(0) translate(-50%, 50%)"}),n.invisible&&{transition:o.transitions.create("transform",{easing:o.transitions.easing.easeInOut,duration:o.transitions.duration.leavingScreen})})})),P=e.forwardRef((function(r,o){var n,a,e=(0,R.Z)({props:r,name:"MuiBadge"}),s=e.anchorOrigin,g=void 0===s?{vertical:"top",horizontal:"right"}:s,h=e.component,d=void 0===h?"span":h,u=e.components,p=void 0===u?{}:u,m=e.componentsProps,b=void 0===m?{}:m,O=e.overlap,x=void 0===O?"rectangular":O,B=e.color,P=void 0===B?"default":B,T=e.invisible,M=e.badgeContent,N=e.showZero,k=void 0!==N&&N,L=e.variant,W=void 0===L?"standard":L,I=(0,i.Z)(e,z),j=l({anchorOrigin:g,color:P,overlap:x}),_=T;null==T&&(0===M&&!k||null==M&&"dot"!==W)&&(_=!0);var E=_?j:e,F=E.color,V=void 0===F?P:F,A=E.overlap,D=void 0===A?x:A,H=E.anchorOrigin,q=void 0===H?g:H,G=function(r){var o=r.color,n=r.anchorOrigin,a=r.overlap,i=r.classes,e=void 0===i?{}:i;return(0,t.Z)({},e,{badge:(0,c.Z)(e.badge,v("anchorOrigin".concat((0,C.Z)(n.vertical)).concat((0,C.Z)(n.horizontal)).concat((0,C.Z)(a))),v("overlap".concat((0,C.Z)(a))),"default"!==o&&[v("color".concat((0,C.Z)(o))),e["color".concat((0,C.Z)(o))]])})}((0,t.Z)({},e,{anchorOrigin:q,invisible:_,color:V,overlap:D}));return(0,f.jsx)(Z,(0,t.Z)({anchorOrigin:q,invisible:T,badgeContent:M,showZero:k,variant:W},I,{components:(0,t.Z)({Root:y,Badge:S},p),componentsProps:{root:(0,t.Z)({},b.root,w(p.Root)&&{as:d,ownerState:(0,t.Z)({},null==(n=b.root)?void 0:n.ownerState,{color:V,overlap:D})}),badge:(0,t.Z)({},b.badge,w(p.Badge)&&{ownerState:(0,t.Z)({},null==(a=b.badge)?void 0:a.ownerState,{color:V,overlap:D})})},classes:G,ref:o}))}))}}]);
//# sourceMappingURL=379.41218ae9.chunk.js.map