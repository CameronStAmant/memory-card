(this["webpackJsonpmemory-card"]=this["webpackJsonpmemory-card"]||[]).push([[0],[,,,,,,,,,,,function(e,i,a){},function(e,i,a){},function(e,i,a){},function(e,i,a){},function(e,i,a){},function(e,i,a){"use strict";a.r(i);var g=a(0),m=a(1),t=a.n(m),n=a(5),c=a.n(n),s=(a(11),a(2)),r=a(4),d={image:"images/image-1.png",imageAlt:"image-1",id:0},l={image:"images/image-2.png",imageAlt:"image-2",id:1},o={image:"images/image-3.png",imageAlt:"image-3",id:2},u={image:"images/image-4.png",imageAlt:"image-4",id:3},p={image:"images/image-5.png",imageAlt:"image-5",id:4},j={image:"images/image-6.png",imageAlt:"image-6",id:5},A={image:"images/image-7.png",imageAlt:"image-7",id:6},b={image:"images/image-8.png",imageAlt:"image-8",id:7},f={image:"images/image-9.png",imageAlt:"image-9",id:8},O={image:"images/image-10.png",imageAlt:"image-10",id:9},h={image:"images/image-11.png",imageAlt:"image-11",id:10},v={image:"images/image-12.png",imageAlt:"image-12",id:11},x={image:"images/image-13.png",imageAlt:"image-13",id:12},k={image:"images/image-14.png",imageAlt:"image-14",id:13},y={image:"images/image-15.png",imageAlt:"image-15",id:14},C={image:"images/image-16.png",imageAlt:"image-16",id:15},S={image:"images/image-17.png",imageAlt:"image-17",id:16},w={image:"images/image-18.png",imageAlt:"image-18",id:17},M={image:"images/image-19.png",imageAlt:"image-19",id:18},E={image:"images/image-20.png",imageAlt:"image-20",id:19},J={image:"images/image-21.png",imageAlt:"image-21",id:20},B={image:"images/image-22.png",imageAlt:"image-22",id:21},G={image:"images/image-23.png",imageAlt:"image-23",id:22},I={image:"images/image-24.png",imageAlt:"image-24",id:23},L={image:"images/image-25.png",imageAlt:"image-25",id:24},N={image:"images/image-26.png",imageAlt:"image-26",id:25},R={image:"images/image-27.png",imageAlt:"image-27",id:26},Y={image:"images/image-28.png",imageAlt:"image-28",id:27},q={image:"images/image-29.png",imageAlt:"image-29",id:28},z={image:"images/image-30.png",imageAlt:"image-30",id:29};a(12);var D=function(e){return Object(g.jsx)("div",{className:"cards",onClick:function(){e.onClick(),e.selected(e.index)},children:Object(g.jsx)("img",{src:e.image,alt:e.imageAlt})})};a(13);function F(e){var i=function(e){for(var i=e.length-1;i>0;i--){var a=Math.floor(Math.random()*(i+1)),g=[e[a],e[i]];e[i]=g[0],e[a]=g[1]}return e}([d,l,o,u,p,j,A,b,f,O,h,v,x,k,y,C,S,w,M,E,J,B,G,I,L,N,R,Y,q,z]).map((function(i,a){return Object(m.createElement)(D,Object(r.a)(Object(r.a)({},i),{},{index:i.id,key:a,onClick:e.onClick,selected:e.selected}))}));return Object(g.jsx)("div",{id:"layout",children:i})}a(14);function H(e){return Object(g.jsx)("div",{children:Object(g.jsxs)("div",{id:"text",children:["Your current score is ",e.score," and your best score is"," ",e.bestScore,"."]})})}a(15);function K(e){return Object(g.jsx)("div",{id:"reset",children:Object(g.jsx)("button",{onClick:function(){e.reset()},children:"Restart"})})}var P=function(){var e=Object(m.useState)(0),i=Object(s.a)(e,2),a=i[0],t=i[1],n=Object(m.useState)(0),c=Object(s.a)(n,2),r=c[0],d=c[1],l=Object(m.useState)([!1,!1,!1,!1]),o=Object(s.a)(l,2),u=o[0],p=o[1],j=function(){var e=new Array(u.length);p(e.fill(!1,0)),t(0),d((function(e){return e-1}))},A=function(e){var i=u;!0===i[e]?(alert("Game over. Looks like that color was chosen already."),j()):(i[e]=!0,p(i))};return Object(g.jsxs)("div",{children:[Object(g.jsx)(H,{score:a,bestScore:r}),Object(g.jsx)(K,{score:a,reset:j}),Object(g.jsx)(F,{onClick:function(){t((function(e){return e+1})),r<=a&&d((function(e){return e+1}))},selected:function(e){return A(e)}})]})};c.a.render(Object(g.jsx)(t.a.StrictMode,{children:Object(g.jsx)(P,{})}),document.getElementById("root"))}],[[16,1,2]]]);
//# sourceMappingURL=main.040912f5.chunk.js.map