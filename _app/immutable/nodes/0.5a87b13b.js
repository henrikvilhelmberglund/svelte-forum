import{s as $,c as C,d as R,u as q,g as z,e as D,n as m}from"../chunks/scheduler.b0c1c2c3.js";import{S as H,i as x,e as k,a as b,t as v,b as L,d as g,f as h,p as M,g as f,s as j,h as d,j as T,x as S,c as w,k as y,y as p}from"../chunks/index.2188c4af.js";import{n as F}from"../chunks/stores.7bbb5eaa.js";const I=!0;async function O({fetch:r}){let e=await(await r("https://jsonplaceholder.typicode.com/posts")).json(),i=await(await r("https://jsonplaceholder.typicode.com/users")).json();return{postsData:e,usersData:i}}const B=Object.freeze(Object.defineProperty({__proto__:null,load:O,prerender:I},Symbol.toStringTag,{value:"Module"}));function V(r){let t,e,o="Svelte - Forum",i,u,n,_;const s=r[2].default,l=R(s,r,r[1],null);return{c(){t=f("div"),e=f("h1"),e.textContent=o,i=j(),u=f("hr"),n=j(),l&&l.c(),this.h()},l(a){t=d(a,"DIV",{class:!0});var c=T(t);e=d(c,"H1",{class:!0,["data-svelte-h"]:!0}),S(e)!=="svelte-i5hv9p"&&(e.textContent=o),i=w(c),u=d(c,"HR",{}),n=w(c),l&&l.l(c),c.forEach(h),this.h()},h(){y(e,"class","uno-0qjc8z"),y(t,"class","uno-9470y0")},m(a,c){b(a,t,c),p(t,e),p(t,i),p(t,u),p(t,n),l&&l.m(t,null),_=!0},p(a,c){l&&l.p&&(!_||c&2)&&q(l,s,a,a[1],_?D(s,a[1],c,null):z(a[1]),null)},i(a){_||(g(l,a),_=!0)},o(a){v(l,a),_=!1},d(a){a&&h(t),l&&l.d(a)}}}function Z(r){let t,e=`<h1 class="uno-0qjc8z">Svelte - Forum</h1> <hr/> <img src="https://i.gifer.com/ZKZg.gif" alt="loading gif" style="${{height:"120px",width:"auto"}}"/>`;return{c(){t=f("div"),t.innerHTML=e,this.h()},l(o){t=d(o,"DIV",{class:!0,["data-svelte-h"]:!0}),S(t)!=="svelte-1qxp6lh"&&(t.innerHTML=e),this.h()},h(){y(t,"class","uno-zukihr")},m(o,i){b(o,t,i)},p:m,i:m,o:m,d(o){o&&h(t)}}}function E(r){let t,e,o,i;const u=[Z,V],n=[];function _(s,l){return s[0]?0:1}return t=_(r),e=n[t]=u[t](r),{c(){e.c(),o=k()},l(s){e.l(s),o=k()},m(s,l){n[t].m(s,l),b(s,o,l),i=!0},p(s,[l]){let a=t;t=_(s),t===a?n[t].p(s,l):(M(),v(n[a],1,1,()=>{n[a]=null}),L(),e=n[t],e?e.p(s,l):(e=n[t]=u[t](s),e.c()),g(e,1),e.m(o.parentNode,o))},i(s){i||(g(e),i=!0)},o(s){v(e),i=!1},d(s){s&&h(o),n[t].d(s)}}}function K(r,t,e){let o;C(r,F,n=>e(0,o=n));let{$$slots:i={},$$scope:u}=t;return r.$$set=n=>{"$$scope"in n&&e(1,u=n.$$scope)},[o,u,i]}class G extends H{constructor(t){super(),x(this,t,K,E,$,{})}}export{G as component,B as universal};