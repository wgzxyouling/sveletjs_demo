import{S as s,c as t,s as a,o as e,e as r,t as i,R as c,g as l,q as n,d as o,f as h,p as u,h as p,j as f,r as d,v,B as m}from"./client.17468977.js";function E(s){let t,a,E,R,g,H,T,j,D,w,x,L,q,y,A,I,M,$=s[0].printDate+"",b=s[0].printReadingTime+"",B=s[0].title+"",C=s[0].html+"";return document.title=t=s[0].title,{c(){a=e(),E=r("header"),R=r("p"),g=i($),H=i(" ~ "),T=i(b),j=e(),D=r("h1"),w=i(B),x=e(),L=r("hr"),q=e(),y=r("div"),A=r("article"),I=e(),M=r("hr"),this.h()},l(s){c('[data-svelte="svelte-iu3vwn"]',document.head).forEach(l),a=n(s),E=o(s,"HEADER",{class:!0});var t=h(E);R=o(t,"P",{class:!0});var e=h(R);g=u(e,$),H=u(e," ~ "),T=u(e,b),e.forEach(l),j=n(t),D=o(t,"H1",{class:!0});var r=h(D);w=u(r,B),r.forEach(l),x=n(t),L=o(t,"HR",{class:!0}),t.forEach(l),q=n(s),y=o(s,"DIV",{class:!0});var i=h(y);A=o(i,"ARTICLE",{class:!0}),h(A).forEach(l),I=n(i),M=o(i,"HR",{}),i.forEach(l),this.h()},h(){p(R,"class","svelte-1uh130i"),p(D,"class","svelte-1uh130i"),p(L,"class","svelte-1uh130i"),p(E,"class","svelte-1uh130i"),p(A,"class","content"),p(y,"class","container")},m(s,t){f(s,a,t),f(s,E,t),d(E,R),d(R,g),d(R,H),d(R,T),d(E,j),d(E,D),d(D,w),d(E,x),d(E,L),f(s,q,t),f(s,y,t),d(y,A),A.innerHTML=C,d(y,I),d(y,M)},p(s,[a]){1&a&&t!==(t=s[0].title)&&(document.title=t),1&a&&$!==($=s[0].printDate+"")&&v(g,$),1&a&&b!==(b=s[0].printReadingTime+"")&&v(T,b),1&a&&B!==(B=s[0].title+"")&&v(w,B),1&a&&C!==(C=s[0].html+"")&&(A.innerHTML=C)},i:m,o:m,d(s){s&&l(a),s&&l(E),s&&l(q),s&&l(y)}}}async function R({params:s,query:t}){const a=await this.fetch(`blog/${s.slug}.json`),e=await a.json();if(200===a.status)return{post:e};this.error(a.status,e.message)}function g(s,t,a){let{post:e}=t;return s.$set=s=>{"post"in s&&a(0,e=s.post)},[e]}export default class extends s{constructor(s){super(),t(this,s,g,E,a,{post:0})}}export{R as preload};
