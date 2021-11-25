/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/front.js":
/*!**********************!*\
  !*** ./src/front.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_modules_moveonmouse_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js_modules/moveonmouse.js */ "./src/js_modules/moveonmouse.js");
/* harmony import */ var _js_modules_selection_randomizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js_modules/selection_randomizer.js */ "./src/js_modules/selection_randomizer.js");
/* harmony import */ var _js_modules_rotateOnScroll_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js_modules/rotateOnScroll.js */ "./src/js_modules/rotateOnScroll.js");
/* harmony import */ var _js_modules_datedisappear_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js_modules/datedisappear.js */ "./src/js_modules/datedisappear.js");
/* harmony import */ var _js_modules_burgermenu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js_modules/burgermenu.js */ "./src/js_modules/burgermenu.js");
/* harmony import */ var _js_modules_cursor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js_modules/cursor.js */ "./src/js_modules/cursor.js");
/* harmony import */ var _js_modules_gitter_aspect__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js_modules/gitter_aspect */ "./src/js_modules/gitter_aspect.js");







window.addEventListener("DOMContentLoaded", init);

function init() {
  (0,_js_modules_gitter_aspect__WEBPACK_IMPORTED_MODULE_6__.gitterAspectRatio)();

  if (window.innerWidth > 600) {
    (0,_js_modules_cursor_js__WEBPACK_IMPORTED_MODULE_5__.cursor)();
  }

  (0,_js_modules_moveonmouse_js__WEBPACK_IMPORTED_MODULE_0__.moveElm)();
  (0,_js_modules_selection_randomizer_js__WEBPACK_IMPORTED_MODULE_1__.randomizeSelection)();
  (0,_js_modules_datedisappear_js__WEBPACK_IMPORTED_MODULE_3__.dateDisappear)();
  (0,_js_modules_burgermenu_js__WEBPACK_IMPORTED_MODULE_4__.toggleMenu)();
  var fpCircles = document.querySelectorAll("#splash .circles span");
  fpCircles.forEach(function (circle) {
    console.log(circle);
    (0,_js_modules_rotateOnScroll_js__WEBPACK_IMPORTED_MODULE_2__.rotateOnScroll)(circle);
  });
}

/***/ }),

/***/ "./src/js_modules/burgermenu.js":
/*!**************************************!*\
  !*** ./src/js_modules/burgermenu.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
  menuBtn.addEventListener("click", function (e) {
    e.target.classList.toggle("open");
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
  console.log(radius);
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

/***/ "./src/js_modules/moveonmouse.js":
/*!***************************************!*\
  !*** ./src/js_modules/moveonmouse.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
  console.log(delay);

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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "randomizeSelection": () => (/* binding */ randomizeSelection)
/* harmony export */ });
function randomizeSelection() {
  var body = document.querySelector("body");
  body.style.setProperty("--selection", "#C1CE9F");
  document.querySelectorAll("li").forEach(function (elm) {
    console.log("hej");
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

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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