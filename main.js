/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact-page.js":
/*!*****************************!*\
  !*** ./src/contact-page.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _page_tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-tabs */ "./src/page-tabs.js");


function renderContactPage(){
    const contentContainer = document.querySelector('#content');
    contentContainer.innerHTML = '';

    (0,_page_tabs__WEBPACK_IMPORTED_MODULE_0__["default"])();
    
    const titleElement = document.createElement('h1');
    titleElement.innerText = "Contact Big Bob's Burgers";
    titleElement.className = "title";

    const contactList = document.createElement('ul');

    const address = document.createElement('li');
    address.textContent = "12 Imitation Lane, Lookalikesville. FA12 3KE";
    
    const phoneNumber = document.createElement('li');
    phoneNumber.textContent = "Phone Number: 0100 8008135";;

    const emailAddress = document.createElement('li');
    emailAddress.textContent = "Email Address: BigBobsBurgers@bur.ger";

    contactList.appendChild(address);
    contactList.appendChild(phoneNumber);
    contactList.appendChild(emailAddress);

    contentContainer.appendChild(titleElement);
    contentContainer.appendChild(contactList);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderContactPage);

/***/ }),

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

    const menuItem1 = document.createElement('li');
    const menuItem2 = document.createElement('li');
    const menuItem3 = document.createElement('li');
    const menuItem4 = document.createElement('li');
    const menuItem5 = document.createElement('li');

    menuItem1.innerText = "Belly Buster Burger: £5.99";
    menuItem2.innerText = "Chicken Burger: £3.99";
    menuItem3.innerText = "Cheese Burger: £3.49";
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
/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact-page */ "./src/contact-page.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-page */ "./src/home-page.js");
/* harmony import */ var _menu_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-page */ "./src/menu-page.js");




function renderPageTabs(){
    const contentContainer = document.querySelector('#content');

    const homePageTab = document.createElement('button');
    homePageTab.innerText = 'Home Page';
    homePageTab.addEventListener('click', () => {
        (0,_home_page__WEBPACK_IMPORTED_MODULE_1__["default"])();
    });

    const menuPageTab = document.createElement('button');
    menuPageTab.innerText = 'Menu Page';
    menuPageTab.addEventListener('click', () => {
        (0,_menu_page__WEBPACK_IMPORTED_MODULE_2__["default"])();
    });

    const contactPageTab = document.createElement('button');
    contactPageTab.innerText = 'Contact Page';
    contactPageTab.addEventListener('click', () => {
        (0,_contact_page__WEBPACK_IMPORTED_MODULE_0__["default"])();
    });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7O0FBRXpDO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLHNEQUFjO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlFQUFlLGlCQUFpQjs7Ozs7Ozs7Ozs7Ozs7OztBQy9CeUI7QUFDaEI7O0FBRXpDO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLHNEQUFjO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUF1Qix5REFBYTs7QUFFcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlOzs7Ozs7Ozs7Ozs7Ozs7QUM1QjBCOztBQUV6QztBQUNBO0FBQ0E7O0FBRUEsSUFBSSxzREFBYzs7QUFFbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsY0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q2tCO0FBQ047QUFDQTs7QUFFekM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHNEQUFjO0FBQ3RCLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBYztBQUN0QixLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLFFBQVEseURBQWlCO0FBQ3pCLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUVBQWUsY0FBYzs7Ozs7Ozs7Ozs7Ozs7OztVQzlCN0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsQnlDO0FBQ0E7OztBQUd6QyxzREFBYztBQUNkLHNEQUFjLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC1wYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUtcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvcGFnZS10YWJzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHJlbmRlclBhZ2VUYWJzIGZyb20gXCIuL3BhZ2UtdGFic1wiO1xuXG5mdW5jdGlvbiByZW5kZXJDb250YWN0UGFnZSgpe1xuICAgIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICAgIGNvbnRlbnRDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG5cbiAgICByZW5kZXJQYWdlVGFicygpO1xuICAgIFxuICAgIGNvbnN0IHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgdGl0bGVFbGVtZW50LmlubmVyVGV4dCA9IFwiQ29udGFjdCBCaWcgQm9iJ3MgQnVyZ2Vyc1wiO1xuICAgIHRpdGxlRWxlbWVudC5jbGFzc05hbWUgPSBcInRpdGxlXCI7XG5cbiAgICBjb25zdCBjb250YWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbiAgICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBhZGRyZXNzLnRleHRDb250ZW50ID0gXCIxMiBJbWl0YXRpb24gTGFuZSwgTG9va2FsaWtlc3ZpbGxlLiBGQTEyIDNLRVwiO1xuICAgIFxuICAgIGNvbnN0IHBob25lTnVtYmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBwaG9uZU51bWJlci50ZXh0Q29udGVudCA9IFwiUGhvbmUgTnVtYmVyOiAwMTAwIDgwMDgxMzVcIjs7XG5cbiAgICBjb25zdCBlbWFpbEFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGVtYWlsQWRkcmVzcy50ZXh0Q29udGVudCA9IFwiRW1haWwgQWRkcmVzczogQmlnQm9ic0J1cmdlcnNAYnVyLmdlclwiO1xuXG4gICAgY29udGFjdExpc3QuYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XG4gICAgY29udGFjdExpc3QuYXBwZW5kQ2hpbGQocGhvbmVOdW1iZXIpO1xuICAgIGNvbnRhY3RMaXN0LmFwcGVuZENoaWxkKGVtYWlsQWRkcmVzcyk7XG5cbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlRWxlbWVudCk7XG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0TGlzdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJDb250YWN0UGFnZTsiLCJpbXBvcnQgaG9tZVBhZ2VJbWFnZSBmcm9tICcuL2Fzc2V0cy9ob21lLXBhZ2UtaW1hZ2UuanBlZydcbmltcG9ydCByZW5kZXJQYWdlVGFicyBmcm9tICcuL3BhZ2UtdGFicyc7XG5cbmZ1bmN0aW9uIHJlbmRlckhvbWVQYWdlKCl7XG4gICAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gICAgY29udGVudENvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcblxuICAgIHJlbmRlclBhZ2VUYWJzKCk7XG4gICAgXG4gICAgLy9DcmVhdGUgdGl0bGUgZm9yIHRoZSBwYWdlXG4gICAgY29uc3QgdGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICB0aXRsZUVsZW1lbnQuaW5uZXJUZXh0ID0gXCJCaWcgQm9iJ3MgQnVyZ2Vyc1wiO1xuICAgIHRpdGxlRWxlbWVudC5jbGFzc05hbWUgPSBcInRpdGxlXCI7XG5cbiAgICAvL0FkZCBpbWFnZSB0byB0aGUgcGFnZVxuICAgIGNvbnN0IGltYWdlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGltYWdlRWxlbWVudC5zcmMgPSBob21lUGFnZUltYWdlO1xuXG4gICAgLy9DcmVhdGUgdGV4dCBmb3IgcGFnZVxuICAgIGNvbnN0IHBhZ2VUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHBhZ2VUZXh0LmlubmVyVGV4dCA9IFwiSG9tZSBvZiB0aGUgQmVsbHkgQnVzdGVyIEJ1cmdlciEgSGVyZSBhdCBCQkIncywgd2UgdXNlIHRoZSBmcmVzaGVzdCBpbmdyZWRpZW50cyBmb3IgeW91ciBnb3VybWV0IGV4cGVyaWVuY2UgYXQgYW4gdW5iZWF0YWJsZSBjb3N0IVwiXG4gICAgcGFnZVRleHQuY2xhc3NOYW1lID0gXCJwYWdlLXRleHRcIjtcbiAgICBcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlRWxlbWVudCk7XG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChpbWFnZUVsZW1lbnQpO1xuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQocGFnZVRleHQpO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJIb21lUGFnZSIsImltcG9ydCByZW5kZXJQYWdlVGFicyBmcm9tIFwiLi9wYWdlLXRhYnNcIjtcblxuZnVuY3Rpb24gcmVuZGVyTWVudVBhZ2UoKXtcbiAgICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgICBjb250ZW50Q29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuXG4gICAgcmVuZGVyUGFnZVRhYnMoKTtcblxuICAgIC8vQ3JlYXRlIHRpdGxlIGZvciB0aGUgcGFnZVxuICAgIGNvbnN0IHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgdGl0bGVFbGVtZW50LmlubmVyVGV4dCA9IFwiQmlnIEJvYidzIEJ1cmdlcnMgTWVudVwiO1xuICAgIHRpdGxlRWxlbWVudC5jbGFzc05hbWUgPSBcInRpdGxlXCI7XG5cbiAgICAvL0NyZWF0ZSBtZW51IGxpc3QgZm9yIHBhZ2VcbiAgICBjb25zdCBtZW51TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG5cbiAgICBjb25zdCBtZW51SXRlbTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IG1lbnVJdGVtMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgY29uc3QgbWVudUl0ZW0zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBtZW51SXRlbTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGNvbnN0IG1lbnVJdGVtNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG5cbiAgICBtZW51SXRlbTEuaW5uZXJUZXh0ID0gXCJCZWxseSBCdXN0ZXIgQnVyZ2VyOiDCozUuOTlcIjtcbiAgICBtZW51SXRlbTIuaW5uZXJUZXh0ID0gXCJDaGlja2VuIEJ1cmdlcjogwqMzLjk5XCI7XG4gICAgbWVudUl0ZW0zLmlubmVyVGV4dCA9IFwiQ2hlZXNlIEJ1cmdlcjogwqMzLjQ5XCI7XG4gICAgbWVudUl0ZW00LmlubmVyVGV4dCA9IFwiQ2hpcHM6IMKjMS40OVwiO1xuICAgIG1lbnVJdGVtNS5pbm5lclRleHQgPSBcIkNhbm5lZCBEcmlua3M6IDk5cFwiO1xuXG4gICAgbWVudUxpc3QuYXBwZW5kQ2hpbGQobWVudUl0ZW0xKTtcbiAgICBtZW51TGlzdC5hcHBlbmRDaGlsZChtZW51SXRlbTIpO1xuICAgIG1lbnVMaXN0LmFwcGVuZENoaWxkKG1lbnVJdGVtMyk7XG4gICAgbWVudUxpc3QuYXBwZW5kQ2hpbGQobWVudUl0ZW00KTtcbiAgICBtZW51TGlzdC5hcHBlbmRDaGlsZChtZW51SXRlbTUpO1xuXG4gICAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZUVsZW1lbnQpO1xuICAgIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUxpc3QpO1xufVxuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJNZW51UGFnZTsiLCJpbXBvcnQgcmVuZGVyQ29udGFjdFBhZ2UgZnJvbSBcIi4vY29udGFjdC1wYWdlXCI7XG5pbXBvcnQgcmVuZGVySG9tZVBhZ2UgZnJvbSBcIi4vaG9tZS1wYWdlXCI7XG5pbXBvcnQgcmVuZGVyTWVudVBhZ2UgZnJvbSBcIi4vbWVudS1wYWdlXCI7XG5cbmZ1bmN0aW9uIHJlbmRlclBhZ2VUYWJzKCl7XG4gICAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbiAgICBjb25zdCBob21lUGFnZVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGhvbWVQYWdlVGFiLmlubmVyVGV4dCA9ICdIb21lIFBhZ2UnO1xuICAgIGhvbWVQYWdlVGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICByZW5kZXJIb21lUGFnZSgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgbWVudVBhZ2VUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBtZW51UGFnZVRhYi5pbm5lclRleHQgPSAnTWVudSBQYWdlJztcbiAgICBtZW51UGFnZVRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcmVuZGVyTWVudVBhZ2UoKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGNvbnRhY3RQYWdlVGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29udGFjdFBhZ2VUYWIuaW5uZXJUZXh0ID0gJ0NvbnRhY3QgUGFnZSc7XG4gICAgY29udGFjdFBhZ2VUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHJlbmRlckNvbnRhY3RQYWdlKCk7XG4gICAgfSk7XG5cbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGhvbWVQYWdlVGFiKTtcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVQYWdlVGFiKTtcbiAgICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RQYWdlVGFiKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyUGFnZVRhYnM7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCByZW5kZXJIb21lUGFnZSBmcm9tIFwiLi9ob21lLXBhZ2VcIjtcbmltcG9ydCByZW5kZXJQYWdlVGFicyBmcm9tIFwiLi9wYWdlLXRhYnNcIjtcblxuXG5yZW5kZXJQYWdlVGFicygpO1xucmVuZGVySG9tZVBhZ2UoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=