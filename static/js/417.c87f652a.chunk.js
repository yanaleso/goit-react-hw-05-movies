"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[417],{417:function(n,t,r){r.r(t),r.d(t,{default:function(){return v}});var e,c,u,a=r(885),i=r(9676),s=r(2791),o=r(6871),p=r(168),f=r(6031),h=f.ZP.ul(e||(e=(0,p.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: ","px;\n  justify-content: space-between;\n"])),(function(n){return n.theme.space[7]})),l=f.ZP.span(c||(c=(0,p.Z)(["\n  font-weight: ",";\n  color: ",";\n  background-color: ",";\n"])),(function(n){return n.theme.fontWeights.semiBold}),(function(n){return n.theme.colors.secondary}),(function(n){return n.theme.colors.primary})),m=f.ZP.p(u||(u=(0,p.Z)(["\n  font-size:  ",";\n  line-height: ",";\n"])),(function(n){return n.theme.fontSizes.xxs}),(function(n){return n.theme.lineHeights.heading})),d=r(184),v=function(){var n=(0,s.useState)([]),t=(0,a.Z)(n,2),r=t[0],e=t[1],c=(0,o.UO)().movieId;return(0,s.useEffect)((function(){(0,i.y)(c).then(e)}),[c]),(0,d.jsx)(d.Fragment,{children:r&&(0,d.jsx)(h,{children:r.slice(0,10).map((function(n){var t=n.original_name,r=n.character,e=n.profile_path,c=n.id;return(0,d.jsxs)("li",{children:[(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(e),alt:t}),(0,d.jsxs)(m,{children:[(0,d.jsx)(l,{children:"Name:"})," ",t]}),(0,d.jsxs)(m,{children:[(0,d.jsx)(l,{children:"Character:"})," ",r]})]},c)}))})})}},9676:function(n,t,r){r.d(t,{Bt:function(){return g},K9:function(){return d},Y5:function(){return m},rc:function(){return b},wr:function(){return h},y:function(){return w}});var e=r(5861),c=r(7757),u=r.n(c),a=r(4569),i=r.n(a),s="https://api.themoviedb.org/3",o={params:{api_key:"470b53b8228b70c791d3c6418cea7265"}};function p(n){return f.apply(this,arguments)}function f(){return f=(0,e.Z)(u().mark((function n(t){var r,e,c,a=arguments;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=a.length>1&&void 0!==a[1]?a[1]:{},n.prev=1,n.next=4,i().get(t,r);case 4:return e=n.sent,c=e.data,n.abrupt("return",c);case 9:return n.prev=9,n.t0=n.catch(1),n.abrupt("return",new Error("Sorry something went wrong. ".concat(n.t0.message)));case 12:case"end":return n.stop()}}),n,null,[[1,9]])}))),f.apply(this,arguments)}function h(){return l.apply(this,arguments)}function l(){return(l=(0,e.Z)(u().mark((function n(){var t,r,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(s,"/trending/movie/day"),n.next=3,p(t,o);case 3:return r=n.sent,e=r.results,n.abrupt("return",e);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function m(n){return p("".concat(s,"/movie/").concat(n),o)}function d(n){return v.apply(this,arguments)}function v(){return(v=(0,e.Z)(u().mark((function n(t){var r,e,c,a;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(s,"/search/movie"),e={params:{api_key:"470b53b8228b70c791d3c6418cea7265",query:t}},n.next=4,p(r,e);case 4:return c=n.sent,a=c.results,n.abrupt("return",a);case 7:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function w(n){return x.apply(this,arguments)}function x(){return(x=(0,e.Z)(u().mark((function n(t){var r,e,c;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(s,"/movie/").concat(t,"/credits"),n.next=3,p(r,o);case 3:return e=n.sent,c=e.cast,n.abrupt("return",c);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return y.apply(this,arguments)}function y(){return(y=(0,e.Z)(u().mark((function n(t){var r,e,c;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="".concat(s,"/movie/").concat(t,"/reviews"),n.next=3,p(r,o);case 3:return e=n.sent,c=e.results,n.abrupt("return",c);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function b(){return k.apply(this,arguments)}function k(){return(k=(0,e.Z)(u().mark((function n(){var t,r,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t="".concat(s,"/genre/movie/list"),n.next=3,p(t,o);case 3:return r=n.sent,e=r.genres,n.abrupt("return",e);case 6:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=417.c87f652a.chunk.js.map