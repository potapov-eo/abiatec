(this["webpackJsonptest-react"]=this["webpackJsonptest-react"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,c){},,function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(9),s=c.n(a),u=(c(15),c(3)),o=c.n(u),i=c(4),j=c(2),b=c(10),l=(c(17),c(0)),O=function(e){return Object(l.jsx)("button",Object(b.a)({className:"Button"},e))},h=(c(19),function(e){var t=e.onSearch,c=Object(n.useState)(""),r=Object(j.a)(c,2),a=r[0],s=r[1],u=Object(n.useCallback)((function(e){return s(e.target.value)}),[]),o=Object(n.useCallback)((function(){return t(a)}),[a,t]);return Object(l.jsxs)("div",{className:"SearchInput",children:[Object(l.jsx)("input",{value:a,onChange:u}),Object(l.jsx)(O,{onClick:o,children:"Submit"})]})}),f=c.p+"static/media/logo.e1f86449.svg",p=(c(20),function(e){var t=e.onSearch;return Object(l.jsxs)("header",{className:"Header",children:[Object(l.jsx)("img",{src:f,className:"Header-logo",alt:"logo"}),Object(l.jsx)(h,{onSearch:t})]})}),x=function(e){var t=e.content;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("ul",{children:t&&t.map((function(e){return Object(l.jsxs)("div",{children:[Object(l.jsx)("div",{children:e.name}),Object(l.jsx)("img",{alt:e.name,src:e.image})]},e.id)}))})})},d=c(6),v=(c(21),function(){var e=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)(1),s=Object(j.a)(a,2),u=s[0],b=s[1],l=Object(n.useState)(""),O=Object(j.a)(l,2),h=O[0],f=O[1],p=Object(n.useState)(!1),x=Object(j.a)(p,2),v=x[0],m=x[1],g=Object(n.useCallback)(function(){var e=Object(i.a)(o.a.mark((function e(t,c){var n,r,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m(!1),e.next=4,fetch("https://rickandmortyapi.com/api/character/?name=".concat(t,"&page=").concat(c));case 4:return n=e.sent,e.next=7,n.json();case 7:return r=e.sent,a=r.results,e.abrupt("return",[r,a]);case 12:e.prev=12,e.t0=e.catch(0),console.log("fetch request error");case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,c){return e.apply(this,arguments)}}(),[]),k=Object(n.useCallback)(function(){var e=Object(i.a)(o.a.mark((function e(t){var c,n,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g(t,1);case 3:c=e.sent,(n=Object(j.a)(c,2))[0],a=n[1],r(a.slice(0,10)),b(2),f(t),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log("fetch request error");case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),[g]),S=Object(n.useCallback)(Object(i.a)(o.a.mark((function e(){var t,n,a,s,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,b(u+1),t=Math.round(u/2),e.next=5,g(h,t);case 5:n=e.sent,a=Object(j.a)(n,2),s=a[0],i=a[1],s.info.next||m(!0),r(u%2?[].concat(Object(d.a)(c),Object(d.a)(i.slice(0,10))):[].concat(Object(d.a)(c.slice(0,c.length-10)),Object(d.a)(i))),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),console.log("fetch request error");case 17:case"end":return e.stop()}}),e,null,[[0,14]])}))),[c,h,u,g]);return[k,c,S,v]}(),t=Object(j.a)(e,4),c=t[0],r=t[1],a=t[2],s=t[3];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c("");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[c]),Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(p,{onSearch:c}),Object(l.jsx)("h1",{children:"Simple content list"}),Object(l.jsx)(x,{content:r}),s?Object(l.jsx)("h2",{children:"\u044d\u0442\u043e \u0432\u0441\u0435 \u0441\u043e\u0434\u0435\u0440\u0436\u0438\u043c\u043e\u0435"}):Object(l.jsx)(O,{onClick:a,children:"FetchMoreButton"})]})});s.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(v,{})}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.fcdfd048.chunk.js.map