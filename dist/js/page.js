/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cursor": () => (/* binding */ cursor)
/* harmony export */ });
function cursor() {
  var circle = document.createElement("div");
  circle.classList.add("cursor");
  circle.innerHTML = "<svg id=\"Layer_1\" data-name=\"Layer 1\" xmlns=\"http://www.w3.org/2000/svg\" width=\"95.56\" height=\"95.54\" viewBox=\"0 0 95.56 95.54\"><path d=\"M47.63,0A47.38,47.38,0,0,1,95.56,47.3c.12,27-20.93,48.26-47.79,48.24A47.53,47.53,0,0,1,0,48,47.38,47.38,0,0,1,47.63,0Zm.23,4.66A42.77,42.77,0,0,0,4.67,47.3a43.11,43.11,0,1,0,86.22.54A42.77,42.77,0,0,0,47.86,4.66Z\"/><path d=\"M27.5,59.11c12.58,14,28.76,14,40.41,0l2.88,1.56C68,68.46,59.09,75.94,48.26,76c-10.15.08-19.86-6-23.52-15.22Z\"/><path d=\"M37,36.24a6.08,6.08,0,1,1-5.86-6.08A6,6,0,0,1,37,36.24Z\"/><path d=\"M64.64,42.3a6.08,6.08,0,1,1,6.14-5.85A6.13,6.13,0,0,1,64.64,42.3Z\"/></svg>";
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
  var allATags = document.querySelectorAll("a, #menu_btn, input");
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

/***/ "./src/js_modules/hundredvh.js":
/*!*************************************!*\
  !*** ./src/js_modules/hundredvh.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
  var allH = document.querySelectorAll('a:not(a[target="_blank"])');
  allH.forEach(function (elm) {
    console.log(elm);
    elm.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(".loading").classList.add("open");
      var hrefUrl = this.getAttribute("href");
      setTimeout(function () {
        setUrlParam(hrefUrl, param);
      }, 1500);
    });
  });
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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/page.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_modules_selection_randomizer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js_modules/selection_randomizer.js */ "./src/js_modules/selection_randomizer.js");
/* harmony import */ var _js_modules_burgermenu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js_modules/burgermenu.js */ "./src/js_modules/burgermenu.js");
/* harmony import */ var _js_modules_cursor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js_modules/cursor.js */ "./src/js_modules/cursor.js");
/* harmony import */ var _js_modules_gitter_aspect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js_modules/gitter_aspect */ "./src/js_modules/gitter_aspect.js");
/* harmony import */ var _js_modules_loadImgs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js_modules/loadImgs.js */ "./src/js_modules/loadImgs.js");
/* harmony import */ var _js_modules_hundredvh_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js_modules/hundredvh.js */ "./src/js_modules/hundredvh.js");
/* harmony import */ var _js_modules_modeSelection_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js_modules/modeSelection.js */ "./src/js_modules/modeSelection.js");







window.addEventListener("DOMContentLoaded", init);

function init() {
  var eco = (0,_js_modules_modeSelection_js__WEBPACK_IMPORTED_MODULE_6__.getUrlParam)("eco");
  (0,_js_modules_hundredvh_js__WEBPACK_IMPORTED_MODULE_5__.setHundredVh)();
  window.addEventListener("resize", _js_modules_hundredvh_js__WEBPACK_IMPORTED_MODULE_5__.setHundredVh);

  if (eco == null) {
    (0,_js_modules_modeSelection_js__WEBPACK_IMPORTED_MODULE_6__.showModePopUp)();
  } else {
    (0,_js_modules_modeSelection_js__WEBPACK_IMPORTED_MODULE_6__.addParamsToHrefClick)();
    (0,_js_modules_gitter_aspect__WEBPACK_IMPORTED_MODULE_3__.gitterAspectRatio)();
    (0,_js_modules_burgermenu_js__WEBPACK_IMPORTED_MODULE_1__.toggleMenu)();
    document.querySelector(".loading").classList.remove("open");

    if (eco == 0) {
      if (window.innerWidth > 600) {
        (0,_js_modules_cursor_js__WEBPACK_IMPORTED_MODULE_2__.cursor)();
      }

      (0,_js_modules_loadImgs_js__WEBPACK_IMPORTED_MODULE_4__.loadImgs)();
      (0,_js_modules_selection_randomizer_js__WEBPACK_IMPORTED_MODULE_0__.randomizeSelection)();
    } else {
      document.querySelector("body").classList.add("eco");
    }
  }
}
})();

/******/ })()
;