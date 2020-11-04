(this["webpackJsonphousing-benasque"]=this["webpackJsonphousing-benasque"]||[]).push([[0],{21:function(n,e,t){n.exports=t(33)},26:function(n,e,t){},33:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(15),c=t.n(i),o=(t(26),t(2)),u=t(1),m=t(19),s=t(3);function l(){var n=Object(o.a)(["\n  display: flex;\n  ","\n  ","\n  ","\n"]);return l=function(){return n},n}function d(){var n=Object(o.a)(["\n  ","\n  justify-content: center;\n  align-items: center;\n"]);return d=function(){return n},n}function f(){var n=Object(o.a)(["\n  flex-direction: column;\n"]);return f=function(){return n},n}var g=Object(u.b)(f()),b=Object(u.b)(d(),g),p=u.c.div(l(),(function(n){return n.column&&g}),(function(n){return n.center&&b}),(function(n){return n.styles})),v=t(20);function h(){var n=Object(o.a)(["\n  margin: 0;\n  transition: all 0.1s ease-in-out;\n  font-size: ",";\n  ","\n  \n  ","\n  \n  @media (max-width: 48rem) {\n    font-size:  ",";\n  }\n"]);return h=function(){return n},n}function j(){var n=Object(o.a)(["\n  text-align: center;\n"]);return j=function(){return n},n}var x=Object(u.b)(j()),O=u.c.p(h(),(function(n){var e=n.size;return e?e+"px":"1rem"}),(function(n){return n.center&&x}),(function(n){return n.styles}),(function(n){return"h2"===n.as?"4vw":"3vw"})),w=function(n){var e=n.variant,t=Object(v.a)(n,["variant"]);return a.a.createElement(O,Object.assign({},t,{as:e}))};function y(){var n=Object(o.a)(["\n  text-shadow: rgba(0, 0, 0, 0.5) 0px 1px 3px;\n  padding: 1rem;\n  @media (max-width: 48rem) {\n    padding: 0.5rem;\n  }\n"]);return y=function(){return n},n}function E(){var n=Object(o.a)(["\n  background: ",";\n  color: white;\n  font-size: 1rem;\n  // border-radius: ",";\n  margin-bottom: 1rem;\n"]);return E=function(){return n},n}var k=Object(u.b)(E(),(function(n){return n.theme.primaryColor}),(function(n){return n.theme.borderRadius})),z=Object(u.b)(y()),I=function(){return a.a.createElement(p,{center:!0,styles:k},a.a.createElement(w,{center:!0,variant:"h2",size:28,styles:z},"Header"))};function q(){var n=Object(o.a)(["\n  width: 100%;\n  transition: opacity ","s ease-in-out;\n  ","\n  box-shadow: 5px 5px 5px #aaa;\n \n  ","\n  border-radius: ","; \n"]);return q=function(){return n},n}function R(){var n=Object(o.a)(["\n  position: absolute;\n"]);return R=function(){return n},n}function C(){var n=Object(o.a)(["\n  position: relative;\n"]);return C=function(){return n},n}function A(){var n=Object(o.a)(["\n  position: relative;\n  width: 60%;\n  @media only screen and (max-width: 75rem) {\n    width: 80%;\n  }\n  @media only screen and (max-width: 48rem) {\n    width: 100%;\n  }\n"]);return A=function(){return n},n}var B=["/images/carousel/1.jpg","/images/carousel/2.jpg","/images/carousel/3.jpg","/images/carousel/4.jpg","/images/carousel/5.jpg","/images/carousel/6.jpg"],J=u.c.div(A()),W=Object(u.b)(C()),H=Object(u.b)(R()),M=u.c.img(q(),2,(function(n){var e=n.theme,t=n.index;return e.fadeInOut(t,B.length,2,5)}),(function(n){return n.styles}),(function(n){return n.theme.borderRadius})),N=function(){return a.a.createElement(J,null,B.map((function(n,e){return a.a.createElement(M,{key:e,index:e,styles:e===B.length-1?W:H,src:"/housing-benasque"+n})})))};function Q(){var n=Object(o.a)(["\n  color: white;\n  text-shadow: rgba(0, 0, 0, 0.5) 0px 1px 3px;\n  font-weight: 500;\n"]);return Q=function(){return n},n}function S(){var n=Object(o.a)(["\n  margin: 2rem 0.5rem;\n  :first-child {\n    margin-left: 0;\n  }\n  :last-child {\n    margin-right: 0;\n  }\n  @media (max-width: 48rem) {\n    margin: 1rem 0 0 0;\n  }\n  padding: 4rem 0.5rem;\n  @media (max-width: 48rem) {\n    padding: 2rem 0.5rem;\n  }\n  flex: 1 1 33%;\n\n  background-image: url(",");\n  background-size: cover;\n  border-radius: ",";\n  background-position: center;\n  :hover {\n    cursor: pointer;\n  }\n"]);return S=function(){return n},n}var $=u.c.div(S(),(function(n){return n.image}),(function(n){return n.theme.borderRadius})),D=Object(u.b)(Q()),F=function(n){var e=n.image,t=n.text;return a.a.createElement($,{image:"/housing-benasque"+e},a.a.createElement(w,{center:!0,size:24,variant:"h2",styles:D},t))};function G(){var n=Object(o.a)(["\n  width: 100%;\n  @media (max-width: 48rem) {\n    flex-direction: column;\n  }\n"]);return G=function(){return n},n}var K=Object(u.b)(G()),L=[{text:"Qui\xe9nes somos",image:"/images/people.jpg"},{text:"Nuestros apartamentos",image:"/images/apartments.jpg"},{text:"Conoce el valle",image:"/images/valley.jpg"}],P=function(){return a.a.createElement(p,{styles:K},L.map((function(n,e){var t=n.text,r=n.image;return a.a.createElement(F,{key:e,text:t,image:r})})))};function T(){var n=Object(o.a)(["\n  margin: 0 1rem;\n"]);return T=function(){return n},n}var U=Object(u.b)(T()),V=function(){return a.a.createElement(p,{center:!0,styles:U},a.a.createElement(N,null),a.a.createElement(P,null))};function X(){var n=Object(o.a)(["\n  // padding: 1rem 2rem;\n  // @media (max-width: 48rem) {\n  //   padding: 1rem;\n  // }\n"]);return X=function(){return n},n}var Y={primaryColor:"#1abc9c",borderRadius:"0.6rem",fadeInOut:function(n,e,t,r){return"\n  @keyframes fadeInOutAnimation-".concat(n," {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: ").concat(0===n?1:0,";\n    }\n    ").concat(100*n/e-100*t/(r*e),"% {\n      opacity: 0;\n    }\n    ").concat(n*(100/e),"% {\n      opacity: 1;\n    }\n    ").concat(100*(n+1)/e-100*t/(r*e),"% {\n      opacity: 1;\n    }\n    ").concat((n+1)*(100/e),"% {\n      opacity: 0;\n    }\n    ").concat(100-100*t/(r*e),"% {\n      opacity: ").concat(n===e-1?1:0,";\n    }\n  }\n  animation: fadeInOutAnimation-").concat(n," ").concat(r*e,"s ease-in-out infinite;\n")}};u.c.div(X());var Z=function(){return a.a.createElement(u.a,{theme:Y},a.a.createElement(I,null),a.a.createElement(m.a,null,a.a.createElement(s.c,null,a.a.createElement(s.a,{path:"/"},a.a.createElement(V,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.c2232ffd.chunk.js.map