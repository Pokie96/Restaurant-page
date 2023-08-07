/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home-page.js":
/*!**************************!*\
  !*** ./src/home-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_home_page_image_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/home-page-image.jpeg */ "./src/assets/home-page-image.jpeg");
/* harmony import */ var _page_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-tabs */ "./src/page-tabs.js");



function renderHomePage(){
    const contentContainer = document.querySelector('#content');
    contentContainer.innerHTML = '';

    (0,_page_tabs__WEBPACK_IMPORTED_MODULE_1__["default"])();
    
    //Create title for the page
    const titleElement = document.createElement('h1');
    titleElement.innerText = "Big Bob's Burgers";
    titleElement.className = "title";

    //Add image to the page
    const imageElement = document.createElement('img');
    imageElement.src = _assets_home_page_image_jpeg__WEBPACK_IMPORTED_MODULE_0__;

    //Create text for page
    const pageText = document.createElement('p');
    pageText.innerText = "Home of the Belly Buster Burger! Here at BBB's, we use the freshest ingredients for your gourmet experience at an unbeatable cost!"
    pageText.className = "page-text";
    
    contentContainer.appendChild(titleElement);
    contentContainer.appendChild(imageElement);
    contentContainer.appendChild(pageText);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderHomePage);

/***/ }),

/***/ "./src/menu-page.js":
/*!**************************!*\
  !*** ./src/menu-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _page_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-tabs */ "./src/page-tabs.js");


function renderMenuPage(){
    const contentContainer = document.querySelector('#content');
    contentContainer.innerHTML = '';

    (0,_page_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])();

    //Create title for the page
    const titleElement = document.createElement('h1');
    titleElement.innerText = "Big Bob's Burgers Menu";
    titleElement.className = "title";

    //Create menu list for page
    const menuList = document.createElement('ul');
    const menuItem1 = document.createElement('li')
    const menuItem2 = document.createElement('li')
    const menuItem3 = document.createElement('li')
    const menuItem4 = document.createElement('li')
    const menuItem5 = document.createElement('li')

    menuItem1.innerText = "Cheese Burger: £3.99";
    menuItem2.innerText = "Chicken Burger: £3.99";
    menuItem3.innerText = "Plain Burger: £3.49";
    menuItem4.innerText = "Chips: £1.49";
    menuItem5.innerText = "Canned Drinks: 99p";

    menuList.appendChild(menuItem1);
    menuList.appendChild(menuItem2);
    menuList.appendChild(menuItem3);
    menuList.appendChild(menuItem4);
    menuList.appendChild(menuItem5);

    contentContainer.appendChild(titleElement);
    contentContainer.appendChild(menuList);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderMenuPage);

/***/ }),

/***/ "./src/page-tabs.js":
/*!**************************!*\
  !*** ./src/page-tabs.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-page */ "./src/home-page.js");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu-page */ "./src/menu-page.js");



function renderPageTabs(){
    const contentContainer = document.querySelector('#content');

    const homePageTab = document.createElement('button');
    homePageTab.innerText = 'Home Page';
    homePageTab.addEventListener('click', () => {
        (0,_home_page__WEBPACK_IMPORTED_MODULE_0__["default"])();
    });

    const menuPageTab = document.createElement('button');
    menuPageTab.innerText = 'Menu Page';
    menuPageTab.addEventListener('click', () => {
        (0,_menu_page__WEBPACK_IMPORTED_MODULE_1__["default"])();
    });

    const contactPageTab = document.createElement('button');
    contactPageTab.innerText = 'Contact Page';

    contentContainer.appendChild(homePageTab);
    contentContainer.appendChild(menuPageTab);
    contentContainer.appendChild(contactPageTab);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderPageTabs);

/***/ }),

/***/ "./src/assets/home-page-image.jpeg":
/*!*****************************************!*\
  !*** ./src/assets/home-page-image.jpeg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6de76c4a7cddfdb3b556.jpeg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-page */ "./src/home-page.js");
/* harmony import */ var _page_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-tabs */ "./src/page-tabs.js");




(0,_page_tabs__WEBPACK_IMPORTED_MODULE_1__["default"])();
(0,_home_page__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQXlEO0FBQ2hCOztBQUV6QztBQUNBO0FBQ0E7O0FBRUEsSUFBSSxzREFBYztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUIseURBQWE7O0FBRXBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZTs7Ozs7Ozs7Ozs7Ozs7O0FDNUIwQjs7QUFFekM7QUFDQTtBQUNBOztBQUVBLElBQUksc0RBQWM7O0FBRWxCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsY0FBYzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDWTtBQUNBOztBQUV6QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQWM7QUFDdEIsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFjO0FBQ3RCLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxjQUFjOzs7Ozs7Ozs7Ozs7Ozs7O1VDMUI3QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7OztBQ2xCeUM7QUFDQTs7O0FBR3pDLHNEQUFjO0FBQ2Qsc0RBQWMsRyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUtcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZS10YWJzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGhvbWVQYWdlSW1hZ2UgZnJvbSAnLi9hc3NldHMvaG9tZS1wYWdlLWltYWdlLmpwZWcnXG5pbXBvcnQgcmVuZGVyUGFnZVRhYnMgZnJvbSAnLi9wYWdlLXRhYnMnO1xuXG5mdW5jdGlvbiByZW5kZXJIb21lUGFnZSgpe1xuICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIGNvbnRlbnRDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG5cbiAgICByZW5kZXJQYWdlVGFicygpO1xuICAgIFxuICAgIC8vQ3JlYXRlIHRpdGxlIGZvciB0aGUgcGFnZVxuICAgIGNvbnN0IHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgdGl0bGVFbGVtZW50LmlubmVyVGV4dCA9IFwiQmlnIEJvYidzIEJ1cmdlcnNcIjtcbiAgICB0aXRsZUVsZW1lbnQuY2xhc3NOYW1lID0gXCJ0aXRsZVwiO1xuXG4gICAgLy9BZGQgaW1hZ2UgdG8gdGhlIHBhZ2VcbiAgICBjb25zdCBpbWFnZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBpbWFnZUVsZW1lbnQuc3JjID0gaG9tZVBhZ2VJbWFnZTtcblxuICAgIC8vQ3JlYXRlIHRleHQgZm9yIHBhZ2VcbiAgICBjb25zdCBwYWdlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwYWdlVGV4dC5pbm5lclRleHQgPSBcIkhvbWUgb2YgdGhlIEJlbGx5IEJ1c3RlciBCdXJnZXIhIEhlcmUgYXQgQkJCJ3MsIHdlIHVzZSB0aGUgZnJlc2hlc3QgaW5ncmVkaWVudHMgZm9yIHlvdXIgZ291cm1ldCBleHBlcmllbmNlIGF0IGFuIHVuYmVhdGFibGUgY29zdCFcIlxuICAgIHBhZ2VUZXh0LmNsYXNzTmFtZSA9IFwicGFnZS10ZXh0XCI7XG4gICAgXG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZUVsZW1lbnQpO1xuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoaW1hZ2VFbGVtZW50KTtcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHBhZ2VUZXh0KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVySG9tZVBhZ2UiLCJpbXBvcnQgcmVuZGVyUGFnZVRhYnMgZnJvbSBcIi4vcGFnZS10YWJzXCI7XG5cbmZ1bmN0aW9uIHJlbmRlck1lbnVQYWdlKCl7XG4gICAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgY29udGVudENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcblxuICAgIHJlbmRlclBhZ2VUYWJzKCk7XG5cbiAgICAvL0NyZWF0ZSB0aXRsZSBmb3IgdGhlIHBhZ2VcbiAgICBjb25zdCB0aXRsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHRpdGxlRWxlbWVudC5pbm5lclRleHQgPSBcIkJpZyBCb2IncyBCdXJnZXJzIE1lbnVcIjtcbiAgICB0aXRsZUVsZW1lbnQuY2xhc3NOYW1lID0gXCJ0aXRsZVwiO1xuXG4gICAgLy9DcmVhdGUgbWVudSBsaXN0IGZvciBwYWdlXG4gICAgY29uc3QgbWVudUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgIGNvbnN0IG1lbnVJdGVtMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICBjb25zdCBtZW51SXRlbTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG4gICAgY29uc3QgbWVudUl0ZW0zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKVxuICAgIGNvbnN0IG1lbnVJdGVtNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICBjb25zdCBtZW51SXRlbTUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXG5cbiAgICBtZW51SXRlbTEuaW5uZXJUZXh0ID0gXCJDaGVlc2UgQnVyZ2VyOiDCozMuOTlcIjtcbiAgICBtZW51SXRlbTIuaW5uZXJUZXh0ID0gXCJDaGlja2VuIEJ1cmdlcjogwqMzLjk5XCI7XG4gICAgbWVudUl0ZW0zLmlubmVyVGV4dCA9IFwiUGxhaW4gQnVyZ2VyOiDCozMuNDlcIjtcbiAgICBtZW51SXRlbTQuaW5uZXJUZXh0ID0gXCJDaGlwczogwqMxLjQ5XCI7XG4gICAgbWVudUl0ZW01LmlubmVyVGV4dCA9IFwiQ2FubmVkIERyaW5rczogOTlwXCI7XG5cbiAgICBtZW51TGlzdC5hcHBlbmRDaGlsZChtZW51SXRlbTEpO1xuICAgIG1lbnVMaXN0LmFwcGVuZENoaWxkKG1lbnVJdGVtMik7XG4gICAgbWVudUxpc3QuYXBwZW5kQ2hpbGQobWVudUl0ZW0zKTtcbiAgICBtZW51TGlzdC5hcHBlbmRDaGlsZChtZW51SXRlbTQpO1xuICAgIG1lbnVMaXN0LmFwcGVuZENoaWxkKG1lbnVJdGVtNSk7XG5cbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlRWxlbWVudCk7XG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51TGlzdCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlck1lbnVQYWdlOyIsImltcG9ydCByZW5kZXJIb21lUGFnZSBmcm9tIFwiLi9ob21lLXBhZ2VcIjtcbmltcG9ydCByZW5kZXJNZW51UGFnZSBmcm9tIFwiLi9tZW51LXBhZ2VcIjtcblxuZnVuY3Rpb24gcmVuZGVyUGFnZVRhYnMoKXtcbiAgICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IGhvbWVQYWdlVGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaG9tZVBhZ2VUYWIuaW5uZXJUZXh0ID0gJ0hvbWUgUGFnZSc7XG4gICAgaG9tZVBhZ2VUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHJlbmRlckhvbWVQYWdlKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBtZW51UGFnZVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG1lbnVQYWdlVGFiLmlubmVyVGV4dCA9ICdNZW51IFBhZ2UnO1xuICAgIG1lbnVQYWdlVGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICByZW5kZXJNZW51UGFnZSgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY29udGFjdFBhZ2VUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb250YWN0UGFnZVRhYi5pbm5lclRleHQgPSAnQ29udGFjdCBQYWdlJztcblxuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoaG9tZVBhZ2VUYWIpO1xuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudVBhZ2VUYWIpO1xuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdFBhZ2VUYWIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJQYWdlVGFiczsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHJlbmRlckhvbWVQYWdlIGZyb20gXCIuL2hvbWUtcGFnZVwiO1xuaW1wb3J0IHJlbmRlclBhZ2VUYWJzIGZyb20gXCIuL3BhZ2UtdGFic1wiO1xuXG5cbnJlbmRlclBhZ2VUYWJzKCk7XG5yZW5kZXJIb21lUGFnZSgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==