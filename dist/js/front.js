<<<<<<< HEAD
(()=>{var t,e={757:(t,e,r)=>{t.exports=r(666)},794:(t,e,r)=>{"use strict";var n=r(757),o=r.n(n);function i(){var t=document.querySelector("#splash img"),e=t.getBoundingClientRect().x+0,r=t.getBoundingClientRect().y+0,n=0,o=0;window.addEventListener("mousemove",(function(t){o=(t.clientX-e)/25,n=(t.clientY-r)/25}));var i=0,a=0;!function e(){requestAnimationFrame(e),i+=(o-i)/100,a+=(n-a)/100,t.style.setProperty("--new-x",i+"px"),t.style.setProperty("--new-y",a+"px")}()}function a(){var t=document.querySelector("body");t.style.setProperty("--selection","#C1CE9F"),document.querySelectorAll("li").forEach((function(e){e.addEventListener("click",(function(){var e=Math.floor(3*Math.random())+1;1===e?t.style.setProperty("--selection","#C1CE9F"):2===e?t.style.setProperty("--selection","#F1CDBD"):t.style.setProperty("--selection","#B9A9D5")}))}))}function c(t){var e=0,r=0;window.addEventListener("scroll",(function(){e=window.pageYOffset/5,r=window.pageYOffset/3}));var n=0,o=0,i=t.dataset.delay;!function a(){requestAnimationFrame(a),(n+=(e-n)/i)<1e-4&&(n=0),(o+=(r-o)/i)<1e-4&&(o=0),t.style.setProperty("--x-value",n+"deg"),t.style.setProperty("--y-value",o+"deg")}()}function u(){var t=document.querySelector(".date");window.addEventListener("scroll",(function(){var e=window.scrollY;t.style.setProperty("--y",.6*e+"px"),e>=50?t.classList.add("disappear"):t.classList.remove("disappear")}))}function s(){var t=document.querySelectorAll(".menu-top-menu-container li"),e=1200;t.forEach((function(t){t.style.setProperty("--delay",e+"ms"),e+=100}));var r=document.querySelector("#menu_btn");r.addEventListener("click",(function(){r.classList.contains("closed")||""==r.classList?(r.classList.remove("closed"),r.offsetHeight,r.classList.add("open"),document.querySelector("body").style.overflowY="hidden"):r.classList.contains("open")&&(r.classList.remove("open"),r.offsetHeight,r.classList.add("closed"),document.querySelector("body").style.overflowY="initial"),document.querySelector(".menu_list").classList.toggle("open"),document.querySelector(".header_clr").classList.toggle("open")}))}function l(){var t=document.createElement("div");t.classList.add("cursor"),document.querySelector("body").appendChild(t);var e=document.querySelector(".cursor"),r=0,n=0,o=e.offsetHeight/2;document.addEventListener("mousemove",(function(t){r=t.clientX,n=t.clientY}));var i=0,a=0;!function t(){requestAnimationFrame(t),o=e.offsetHeight/2,i+=(r-i)/15,a+=(n-a)/15,e.style.setProperty("--new-x",i-o+50+"px"),e.style.setProperty("--new-y",a-o+50+"px")}();var c=document.querySelectorAll("a, #menu_btn");c.forEach((function(t){t.addEventListener("mouseover",(function(){e.classList.add("expand")}))})),c.forEach((function(t){t.addEventListener("mouseout",(function(){e.classList.remove("expand")}))}))}function f(){d(),window.addEventListener("resize",d)}function d(){document.querySelectorAll(".gitter, .front_page .graphic, .skaber_list li").forEach((function(t){var e=t.offsetWidth;t.style.height=e+"px"}))}function h(){document.querySelectorAll("picture").forEach((function(t){var e=t.dataset.image,r=t.dataset.fallback;t.querySelector("source").srcset=e,t.querySelector("img").src=r}))}function y(t){return new URLSearchParams(window.location.search).get(t)}function p(){var t=window.location.href;document.querySelector(".mode_pop_up").classList.add("show"),document.querySelector(".eco_btn").addEventListener("click",(function(){v(t,1)})),document.querySelector(".normal_btn").addEventListener("click",(function(){v(t,0)}))}function v(t,e){window.location.href=t+"?eco="+e}function m(){var t=y("eco");document.querySelectorAll("a").forEach((function(e){e.addEventListener("click",(function(e){e.preventDefault();var r=this.getAttribute("href");v(r,t),window.location.href=r+"?eco="+t}))}))}function g(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function w(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){g(i,n,o,a,c,"next",t)}function c(t){g(i,n,o,a,c,"throw",t)}a(void 0)}))}}function L(){return(L=w(o().mark((function t(){var e;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:null==(e=y("eco"))?(document.querySelector("body").style.overflow="hidden",p()):(m(),f(),s(),u(),0==e?(h(),window.innerWidth>600&&l(),i(),a(),document.querySelectorAll("#splash .circles span").forEach((function(t){c(t)}))):document.querySelector("body").classList.add("eco"));case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}window.addEventListener("DOMContentLoaded",(function(){return L.apply(this,arguments)}))},511:()=>{},666:t=>{var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),a=new k(n||[]);return i._invoke=function(t,e,r){var n=f;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===y){if("throw"===o)throw i;return j()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=q(a,r);if(c){if(c===p)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=y,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var u=l(t,e,r);if("normal"===u.type){if(n=r.done?y:d,u.arg===p)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=y,r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=s;var f="suspendedStart",d="suspendedYield",h="executing",y="completed",p={};function v(){}function m(){}function g(){}var w={};u(w,i,(function(){return this}));var L=Object.getPrototypeOf,E=L&&L(L(P([])));E&&E!==r&&n.call(E,i)&&(w=E);var b=g.prototype=v.prototype=Object.create(w);function x(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function S(t,e){function r(o,i,a,c){var u=l(t[o],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function i(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(i,i):i()}}function q(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,q(t,r),"throw"===r.method))return p;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return p}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,p;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,p):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,p)}function O(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function P(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:j}}function j(){return{value:e,done:!0}}return m.prototype=g,u(b,"constructor",g),u(g,"constructor",m),m.displayName=u(g,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},x(S.prototype),u(S.prototype,a,(function(){return this})),t.AsyncIterator=S,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new S(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(b),u(b,c,"Generator"),u(b,i,(function(){return this})),u(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=P,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(_),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(u&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,p):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),p},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),p}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:P(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),p}},t}(t.exports);try{regeneratorRuntime=e}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=e:Function("r","regeneratorRuntime = r")(e)}}},r={};function n(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={exports:{}};return e[t](i,i.exports,n),i.exports}n.m=e,t=[],n.O=(e,r,o,i)=>{if(!r){var a=1/0;for(l=0;l<t.length;l++){for(var[r,o,i]=t[l],c=!0,u=0;u<r.length;u++)(!1&i||a>=i)&&Object.keys(n.O).every((t=>n.O[t](r[u])))?r.splice(u--,1):(c=!1,i<a&&(a=i));if(c){t.splice(l--,1);var s=o();void 0!==s&&(e=s)}}return e}i=i||0;for(var l=t.length;l>0&&t[l-1][2]>i;l--)t[l]=t[l-1];t[l]=[r,o,i]},n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t={24:0,170:0};n.O.j=e=>0===t[e];var e=(e,r)=>{var o,i,[a,c,u]=r,s=0;if(a.some((e=>0!==t[e]))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(u)var l=u(n)}for(e&&e(r);s<a.length;s++)i=a[s],n.o(t,i)&&t[i]&&t[i][0](),t[a[s]]=0;return n.O(l)},r=self.webpackChunkkursfestival=self.webpackChunkkursfestival||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})(),n.O(void 0,[170],(()=>n(794)));var o=n.O(void 0,[170],(()=>n(511)));o=n.O(o)})();
=======
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./src/front.js":
/*!**********************!*\
  !*** ./src/front.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_modules_moveonmouse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js_modules/moveonmouse.js */ "./src/js_modules/moveonmouse.js");
/* harmony import */ var _js_modules_selection_randomizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js_modules/selection_randomizer.js */ "./src/js_modules/selection_randomizer.js");
/* harmony import */ var _js_modules_rotateOnScroll_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js_modules/rotateOnScroll.js */ "./src/js_modules/rotateOnScroll.js");
/* harmony import */ var _js_modules_datedisappear_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js_modules/datedisappear.js */ "./src/js_modules/datedisappear.js");
/* harmony import */ var _js_modules_burgermenu_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js_modules/burgermenu.js */ "./src/js_modules/burgermenu.js");
/* harmony import */ var _js_modules_cursor_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js_modules/cursor.js */ "./src/js_modules/cursor.js");
/* harmony import */ var _js_modules_gitter_aspect_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js_modules/gitter_aspect.js */ "./src/js_modules/gitter_aspect.js");
/* harmony import */ var _js_modules_loadImgs_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js_modules/loadImgs.js */ "./src/js_modules/loadImgs.js");
/* harmony import */ var _js_modules_hundredvh_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./js_modules/hundredvh.js */ "./src/js_modules/hundredvh.js");
/* harmony import */ var _js_modules_modeSelection_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./js_modules/modeSelection.js */ "./src/js_modules/modeSelection.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }











window.addEventListener("DOMContentLoaded", init);

function init() {
  return _init.apply(this, arguments);
}

function _init() {
  _init = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
    var eco, fpCircles;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            eco = (0,_js_modules_modeSelection_js__WEBPACK_IMPORTED_MODULE_10__.getUrlParam)("eco");
            (0,_js_modules_hundredvh_js__WEBPACK_IMPORTED_MODULE_9__.setHundredVh)();
            window.addEventListener("resize", _js_modules_hundredvh_js__WEBPACK_IMPORTED_MODULE_9__.setHundredVh);

            if (eco == null) {
              // prevent scroll on body when the box is shown
              document.querySelector("body").style.overflow = "hidden";
              (0,_js_modules_modeSelection_js__WEBPACK_IMPORTED_MODULE_10__.showModePopUp)();
            } else {
              (0,_js_modules_modeSelection_js__WEBPACK_IMPORTED_MODULE_10__.addParamsToHrefClick)();
              (0,_js_modules_gitter_aspect_js__WEBPACK_IMPORTED_MODULE_7__.gitterAspectRatio)();
              (0,_js_modules_burgermenu_js__WEBPACK_IMPORTED_MODULE_5__.toggleMenu)();
              (0,_js_modules_datedisappear_js__WEBPACK_IMPORTED_MODULE_4__.dateDisappear)();

              if (eco == 0) {
                (0,_js_modules_loadImgs_js__WEBPACK_IMPORTED_MODULE_8__.loadImgs)();

                if (window.innerWidth > 600) {
                  (0,_js_modules_cursor_js__WEBPACK_IMPORTED_MODULE_6__.cursor)();
                }

                (0,_js_modules_moveonmouse_js__WEBPACK_IMPORTED_MODULE_1__.moveElm)();
                (0,_js_modules_selection_randomizer_js__WEBPACK_IMPORTED_MODULE_2__.randomizeSelection)();
                fpCircles = document.querySelectorAll("#splash .circles span");
                fpCircles.forEach(function (circle) {
                  (0,_js_modules_rotateOnScroll_js__WEBPACK_IMPORTED_MODULE_3__.rotateOnScroll)(circle);
                });
              } else {
                document.querySelector("body").classList.add("eco");
              }
            }

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _init.apply(this, arguments);
}

/***/ }),

/***/ "./src/js_modules/burgermenu.js":
/*!**************************************!*\
  !*** ./src/js_modules/burgermenu.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toggleMenu": () => (/* binding */ toggleMenu)
/* harmony export */ });
function toggleMenu() {
  var allLi = document.querySelectorAll(".menu-top-menu-container li");
  var delay = 1200;
  allLi.forEach(function (li) {
    li.style.setProperty("--delay", delay + "ms");
    delay += 100;
  });
  var menuBtn = document.querySelector("#menu_btn");
  menuBtn.addEventListener("click", function () {
    // Menu btn anim toggle
    if (menuBtn.classList.contains("closed") || menuBtn.classList == "") {
      menuBtn.classList.remove("closed");
      menuBtn.offsetHeight;
      menuBtn.classList.add("open");
      document.querySelector("body").style.overflowY = "hidden";
    } else if (menuBtn.classList.contains("open")) {
      menuBtn.classList.remove("open");
      menuBtn.offsetHeight;
      menuBtn.classList.add("closed");
      document.querySelector("body").style.overflowY = "initial";
    }

    document.querySelector(".menu_list").classList.toggle("open");
    document.querySelector(".header_clr").classList.toggle("open");
  });
}

/***/ }),

/***/ "./src/js_modules/cursor.js":
/*!**********************************!*\
  !*** ./src/js_modules/cursor.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cursor": () => (/* binding */ cursor)
/* harmony export */ });
function cursor() {
  var circle = document.createElement("div");
  circle.classList.add("cursor");
  document.querySelector("body").appendChild(circle);
  var cursor = document.querySelector(".cursor");
  var x = 0;
  var y = 0;
  var radius = cursor.offsetHeight / 2;
  document.addEventListener("mousemove", function (e) {
    x = e.clientX;
    y = e.clientY;
  });
  var delay = 15;
  var revisedX = 0;
  var revisedY = 0;

  function animateCursor() {
    requestAnimationFrame(animateCursor);
    radius = cursor.offsetHeight / 2;
    revisedX += (x - revisedX) / delay;
    revisedY += (y - revisedY) / delay;
    cursor.style.setProperty("--new-x", revisedX - radius + 50 + "px");
    cursor.style.setProperty("--new-y", revisedY - radius + 50 + "px");
  }

  animateCursor();
  var allATags = document.querySelectorAll("a, #menu_btn");
  allATags.forEach(function (a) {
    a.addEventListener("mouseover", expandMouse);

    function expandMouse() {
      cursor.classList.add("expand");
    }
  });
  allATags.forEach(function (a) {
    a.addEventListener("mouseout", expandMouse);

    function expandMouse() {
      cursor.classList.remove("expand");
    }
  });
}

/***/ }),

/***/ "./src/js_modules/datedisappear.js":
/*!*****************************************!*\
  !*** ./src/js_modules/datedisappear.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dateDisappear": () => (/* binding */ dateDisappear)
/* harmony export */ });
function dateDisappear() {
  var date = document.querySelector(".date");
  window.addEventListener("scroll", function () {
    var y = window.scrollY;
    date.style.setProperty("--y", 0.6 * y + "px");

    if (y >= 50) {
      date.classList.add("disappear");
      return;
    } else {
      date.classList.remove("disappear");
    }
  });
}

/***/ }),

/***/ "./src/js_modules/gitter_aspect.js":
/*!*****************************************!*\
  !*** ./src/js_modules/gitter_aspect.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gitterAspectRatio": () => (/* binding */ gitterAspectRatio)
/* harmony export */ });
function gitterAspectRatio() {
  setAspectRatio();
  window.addEventListener("resize", setAspectRatio);
}

function setAspectRatio() {
  var gitters = document.querySelectorAll(".gitter, .front_page .graphic, .skaber_list li");
  gitters.forEach(function (elm) {
    var width = elm.offsetWidth;
    elm.style.height = width + "px";
  });
}

/***/ }),

/***/ "./src/js_modules/hundredvh.js":
/*!*************************************!*\
  !*** ./src/js_modules/hundredvh.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setHundredVh": () => (/* binding */ setHundredVh)
/* harmony export */ });
function setHundredVh() {
  var vh = window.innerHeight;
  document.querySelector("body").style.setProperty("--vh", vh + "px");
}

/***/ }),

/***/ "./src/js_modules/loadImgs.js":
/*!************************************!*\
  !*** ./src/js_modules/loadImgs.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadImgs": () => (/* binding */ loadImgs)
/* harmony export */ });
function loadImgs() {
  var pictures = document.querySelectorAll("picture");
  pictures.forEach(function (elm) {
    var webpUrl = elm.dataset.image;
    var fallbackUrl = elm.dataset.fallback;
    elm.querySelector("source").srcset = webpUrl;
    elm.querySelector("img").src = fallbackUrl;
  });
}

/***/ }),

/***/ "./src/js_modules/modeSelection.js":
/*!*****************************************!*\
  !*** ./src/js_modules/modeSelection.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getUrlParam": () => (/* binding */ getUrlParam),
/* harmony export */   "showModePopUp": () => (/* binding */ showModePopUp),
/* harmony export */   "addParamsToHrefClick": () => (/* binding */ addParamsToHrefClick)
/* harmony export */ });
function getUrlParam(param) {
  var urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}
function showModePopUp() {
  var currentUrl = window.location.href;
  document.querySelector(".mode_pop_up").classList.add("show");
  document.querySelector(".eco_btn").addEventListener("click", function () {
    setUrlParam(currentUrl, 1);
  });
  document.querySelector(".normal_btn").addEventListener("click", function () {
    setUrlParam(currentUrl, 0);
  });
}

function setUrlParam(url, param) {
  window.location.href = url + "?eco=" + param;
}

function addParamsToHrefClick() {
  var param = getUrlParam("eco");
  var allH = document.querySelectorAll("a");
  allH.forEach(function (elm) {
    elm.addEventListener("click", function (e) {
      e.preventDefault();
      var hrefUrl = this.getAttribute("href");
      setUrlParam(hrefUrl, param);
      window.location.href = hrefUrl + "?eco=" + param;
    });
  });
}

/***/ }),

/***/ "./src/js_modules/moveonmouse.js":
/*!***************************************!*\
  !*** ./src/js_modules/moveonmouse.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "moveElm": () => (/* binding */ moveElm)
/* harmony export */ });
function moveElm() {
  var brush = document.querySelector("#splash img");
  var brushWidth = 0;
  var originalX = brush.getBoundingClientRect().x + brushWidth;
  var originalY = brush.getBoundingClientRect().y + brushWidth;
  var mouseY = 0;
  var mouseX = 0;
  window.addEventListener("mousemove", function (e) {
    mouseX = (e.clientX - originalX) / 25;
    mouseY = (e.clientY - originalY) / 25;
  });
  var delay = 100;
  var revisedX = 0;
  var revisedY = 0;

  function animateBrush() {
    requestAnimationFrame(animateBrush);
    revisedX += (mouseX - revisedX) / delay;
    revisedY += (mouseY - revisedY) / delay;
    brush.style.setProperty("--new-x", revisedX + "px");
    brush.style.setProperty("--new-y", revisedY + "px");
  }

  animateBrush();
}

/***/ }),

/***/ "./src/js_modules/rotateOnScroll.js":
/*!******************************************!*\
  !*** ./src/js_modules/rotateOnScroll.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rotateOnScroll": () => (/* binding */ rotateOnScroll)
/* harmony export */ });
function rotateOnScroll(elm) {
  var x = 0;
  var y = 0;
  window.addEventListener("scroll", function () {
    x = window.pageYOffset / 5;
    y = window.pageYOffset / 3;
  });
  var revicedX = 0;
  var revicedY = 0;
  var delay = elm.dataset.delay;

  function calculateRotation() {
    requestAnimationFrame(calculateRotation);
    revicedX += (x - revicedX) / delay;
    revicedY += (y - revicedY) / delay;

    if (revicedX < 0.0001) {
      revicedX = 0;
    }

    if (revicedY < 0.0001) {
      revicedY = 0;
    }

    elm.style.setProperty("--x-value", revicedX + "deg");
    elm.style.setProperty("--y-value", revicedY + "deg");
  }

  calculateRotation();
}

/***/ }),

/***/ "./src/js_modules/selection_randomizer.js":
/*!************************************************!*\
  !*** ./src/js_modules/selection_randomizer.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "randomizeSelection": () => (/* binding */ randomizeSelection)
/* harmony export */ });
function randomizeSelection() {
  var body = document.querySelector("body");
  body.style.setProperty("--selection", "#C1CE9F");
  document.querySelectorAll("li").forEach(function (elm) {
    elm.addEventListener("click", function () {
      var rnd = Math.floor(Math.random() * 3) + 1;

      if (rnd === 1) {
        body.style.setProperty("--selection", "#C1CE9F");
      } else if (rnd === 2) {
        body.style.setProperty("--selection", "#F1CDBD");
      } else {
        body.style.setProperty("--selection", "#B9A9D5");
      }
    });
  });
}

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/front": 0,
/******/ 			"css/app": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkkursfestival"] = self["webpackChunkkursfestival"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./src/front.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app"], () => (__webpack_require__("./src/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
>>>>>>> dev
