(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var s=n(7),c=n.n(s),o=n(6),i=n(8),r=n(1),a=n(3),l=n.n(a),u=(n(13),n(14),n(0)),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],h="length",d="alphabetically";var j=function(){var t=Object(r.useState)(""),e=Object(o.a)(t,2),n=e[0],s=e[1],c=Object(r.useState)(!1),a=Object(o.a)(c,2),j=a[0],f=a[1],p=function(t,e){var n=e.sortField,s=e.isReversed,c=Object(i.a)(t);return n&&c.sort((function(t,e){switch(n){case d:return t.length-e.length;case h:return t.localeCompare(e);default:return 0}})),s?c.reverse():c}(b,{sortField:n,isReversed:j}),g=j||n;return Object(u.jsxs)("div",{className:"section content",children:[Object(u.jsxs)("div",{className:"buttons",children:[Object(u.jsx)("button",{type:"button",className:l()("button","is-info",{"is-light":n!==h}),onClick:function(){return s(h)},children:"Sort alphabetically"}),Object(u.jsx)("button",{type:"button",className:l()("button","is-info",{"is-light":n!==d}),onClick:function(){return s(d)},children:"Sort by length"}),Object(u.jsx)("button",{type:"button",className:l()("button","is-info",{"is-light":!j}),onClick:function(){return f(!j)},children:"Reverse"}),g&&Object(u.jsx)("button",{type:"button",className:l()("button","is-danger","is-light"),onClick:function(){s(""),f(!1)},children:"Reset"})]}),Object(u.jsx)("ul",{children:p.map((function(t){return Object(u.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};c.a.render(Object(u.jsx)(j,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.ed33cfa9.chunk.js.map