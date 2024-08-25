"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/CartContext.js":
/*!***********************************!*\
  !*** ./components/CartContext.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CartContext: () => (/* binding */ CartContext),\n/* harmony export */   CartContextProvider: () => (/* binding */ CartContextProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst CartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\n// save products to local storage\nfunction CartContextProvider({ children }) {\n    const locStorage =  false ? 0 : null;\n    //const defaultBooks = locStorage ? JSON.parse(locStorage.getItem('cart')) : [];\n    const [cartBooks, setCartBooks] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (cartBooks?.length > 0) {\n            locStorage?.setItem(\"cart\", JSON.stringify(cartBooks));\n        }\n    }, [\n        cartBooks\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (locStorage && locStorage.getItem(\"cart\")) {\n            setCartBooks(JSON.parse(locStorage.getItem(\"cart\")));\n        }\n    }, []);\n    function addBook(bookId) {\n        setCartBooks((prev)=>[\n                ...prev,\n                bookId\n            ]);\n    }\n    function removeBook(bookId) {\n        setCartBooks((prev)=>{\n            const positionId = prev.indexOf(bookId);\n            if (positionId !== -1) {\n                return prev.filter((value, index)=>index !== positionId);\n            }\n            return prev;\n        });\n    }\n    function clearCart() {\n        setCartBooks([]);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartContext.Provider, {\n        value: {\n            cartBooks,\n            setCartBooks,\n            addBook,\n            removeBook,\n            clearCart\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\ecommerce-user\\\\components\\\\CartContext.js\",\n        lineNumber: 43,\n        columnNumber: 9\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhcnRDb250ZXh0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMkQ7QUFFcEQsTUFBTUcsNEJBQWNILG9EQUFhQSxDQUFDLENBQUMsR0FBRztBQUU3QyxpQ0FBaUM7QUFDMUIsU0FBU0ksb0JBQW9CLEVBQUNDLFFBQVEsRUFBQztJQUMxQyxNQUFNQyxhQUFhLE1BQTZCLEdBQUdDLENBQW1CLEdBQUc7SUFDekUsZ0ZBQWdGO0lBQ2hGLE1BQU0sQ0FBQ0UsV0FBV0MsYUFBYSxHQUFHUiwrQ0FBUUEsQ0FBQyxFQUFFO0lBRTdDRCxnREFBU0EsQ0FBQztRQUNOLElBQUlRLFdBQVdFLFNBQVMsR0FBRztZQUN2QkwsWUFBWU0sUUFBUSxRQUFRQyxLQUFLQyxTQUFTLENBQUNMO1FBQy9DO0lBQ0osR0FBRztRQUFDQTtLQUFVO0lBRWRSLGdEQUFTQSxDQUFDO1FBQ04sSUFBSUssY0FBY0EsV0FBV1MsT0FBTyxDQUFDLFNBQVM7WUFDMUNMLGFBQWFHLEtBQUtHLEtBQUssQ0FBQ1YsV0FBV1MsT0FBTyxDQUFDO1FBQy9DO0lBQ0osR0FBRyxFQUFFO0lBRUwsU0FBU0UsUUFBUUMsTUFBTTtRQUNuQlIsYUFBYVMsQ0FBQUEsT0FBUTttQkFBSUE7Z0JBQU1EO2FBQU87SUFDMUM7SUFFQSxTQUFTRSxXQUFXRixNQUFNO1FBQ3RCUixhQUFhUyxDQUFBQTtZQUNULE1BQU1FLGFBQWFGLEtBQUtHLE9BQU8sQ0FBQ0o7WUFFaEMsSUFBSUcsZUFBZSxDQUFDLEdBQUc7Z0JBQ25CLE9BQU9GLEtBQUtJLE1BQU0sQ0FBQyxDQUFDQyxPQUFPQyxRQUFVQSxVQUFVSjtZQUNuRDtZQUNBLE9BQU9GO1FBQ1g7SUFDSjtJQUVBLFNBQVNPO1FBQ0xoQixhQUFhLEVBQUU7SUFDbkI7SUFFQSxxQkFDSSw4REFBQ1AsWUFBWXdCLFFBQVE7UUFBQ0gsT0FBTztZQUFDZjtZQUFXQztZQUFjTztZQUFTRztZQUFZTTtRQUFTO2tCQUNoRnJCOzs7Ozs7QUFHYiIsInNvdXJjZXMiOlsid2VicGFjazovL2Vjb21tZXJjZS11c2VyLy4vY29tcG9uZW50cy9DYXJ0Q29udGV4dC5qcz84MjNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJ0Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30pO1xyXG5cclxuLy8gc2F2ZSBwcm9kdWN0cyB0byBsb2NhbCBzdG9yYWdlXHJcbmV4cG9ydCBmdW5jdGlvbiBDYXJ0Q29udGV4dFByb3ZpZGVyKHtjaGlsZHJlbn0pIHtcclxuICAgIGNvbnN0IGxvY1N0b3JhZ2UgPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93LmxvY2FsU3RvcmFnZSA6IG51bGw7XHJcbiAgICAvL2NvbnN0IGRlZmF1bHRCb29rcyA9IGxvY1N0b3JhZ2UgPyBKU09OLnBhcnNlKGxvY1N0b3JhZ2UuZ2V0SXRlbSgnY2FydCcpKSA6IFtdO1xyXG4gICAgY29uc3QgW2NhcnRCb29rcywgc2V0Q2FydEJvb2tzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChjYXJ0Qm9va3M/Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgbG9jU3RvcmFnZT8uc2V0SXRlbSgnY2FydCcsIEpTT04uc3RyaW5naWZ5KGNhcnRCb29rcykpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIFtjYXJ0Qm9va3NdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGlmIChsb2NTdG9yYWdlICYmIGxvY1N0b3JhZ2UuZ2V0SXRlbSgnY2FydCcpKSB7XHJcbiAgICAgICAgICAgIHNldENhcnRCb29rcyhKU09OLnBhcnNlKGxvY1N0b3JhZ2UuZ2V0SXRlbSgnY2FydCcpKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW10pO1xyXG5cclxuICAgIGZ1bmN0aW9uIGFkZEJvb2soYm9va0lkKSB7XHJcbiAgICAgICAgc2V0Q2FydEJvb2tzKHByZXYgPT4gWy4uLnByZXYsIGJvb2tJZF0pO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlbW92ZUJvb2soYm9va0lkKSB7XHJcbiAgICAgICAgc2V0Q2FydEJvb2tzKHByZXYgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbklkID0gcHJldi5pbmRleE9mKGJvb2tJZCk7XHJcblxyXG4gICAgICAgICAgICBpZiAocG9zaXRpb25JZCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcmV2LmZpbHRlcigodmFsdWUsIGluZGV4KSA9PiBpbmRleCAhPT0gcG9zaXRpb25JZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHByZXY7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2xlYXJDYXJ0KCkge1xyXG4gICAgICAgIHNldENhcnRCb29rcyhbXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q2FydENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3tjYXJ0Qm9va3MsIHNldENhcnRCb29rcywgYWRkQm9vaywgcmVtb3ZlQm9vaywgY2xlYXJDYXJ0fX0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0NhcnRDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ2FydENvbnRleHQiLCJDYXJ0Q29udGV4dFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJsb2NTdG9yYWdlIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwiY2FydEJvb2tzIiwic2V0Q2FydEJvb2tzIiwibGVuZ3RoIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXRJdGVtIiwicGFyc2UiLCJhZGRCb29rIiwiYm9va0lkIiwicHJldiIsInJlbW92ZUJvb2siLCJwb3NpdGlvbklkIiwiaW5kZXhPZiIsImZpbHRlciIsInZhbHVlIiwiaW5kZXgiLCJjbGVhckNhcnQiLCJQcm92aWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CartContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_CartContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/CartContext */ \"./components/CartContext.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst GlobalStyles = (0,styled_components__WEBPACK_IMPORTED_MODULE_2__.createGlobalStyle)([\n    \"@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');body{background-color:#eee;padding:0;margin:0;font-family:\\\"Poppins\\\",sans-serif;}\"\n]);\n// runing app\nfunction App({ Component, pageProps }) {\n    return(// react fragment\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalStyles, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\ecommerce-user\\\\pages\\\\_app.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CartContext__WEBPACK_IMPORTED_MODULE_1__.CartContextProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\ecommerce-user\\\\pages\\\\_app.js\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\User\\\\Desktop\\\\ecommerce-user\\\\pages\\\\_app.js\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBK0Q7QUFDVDtBQUV0RCxNQUFNRSxlQUFlRCxvRUFBaUJBOzs7QUFXdEMsYUFBYTtBQUNFLFNBQVNFLElBQUksRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUU7SUFDbEQsT0FFRSxpQkFBaUI7a0JBQ2pCOzswQkFDRSw4REFBQ0g7Ozs7OzBCQUNELDhEQUFDRix3RUFBbUJBOzBCQUNsQiw0RUFBQ0k7b0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7OztBQUloQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Vjb21tZXJjZS11c2VyLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENhcnRDb250ZXh0UHJvdmlkZXIgfSBmcm9tIFwiQC9jb21wb25lbnRzL0NhcnRDb250ZXh0XCI7XG5pbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuXG5jb25zdCBHbG9iYWxTdHlsZXMgPSBjcmVhdGVHbG9iYWxTdHlsZWBcbiAgQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UG9wcGluczp3Z2h0QDQwMDs1MDA7NjAwOzcwMCZkaXNwbGF5PXN3YXAnKTtcblxuICBib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcbiAgfVxuYDtcblxuLy8gcnVuaW5nIGFwcFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuXG4gICAgLy8gcmVhY3QgZnJhZ21lbnRcbiAgICA8PlxuICAgICAgPEdsb2JhbFN0eWxlcyAvPlxuICAgICAgPENhcnRDb250ZXh0UHJvdmlkZXI+XG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvQ2FydENvbnRleHRQcm92aWRlcj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJDYXJ0Q29udGV4dFByb3ZpZGVyIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJHbG9iYWxTdHlsZXMiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();