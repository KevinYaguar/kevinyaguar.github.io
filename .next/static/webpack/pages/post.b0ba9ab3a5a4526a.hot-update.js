"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/post",{

/***/ "./pages/post.js":
/*!***********************!*\
  !*** ./pages/post.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Layout */ \"./pages/components/Layout.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../profile */ \"./profile.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Post = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const currentPost = _profile__WEBPACK_IMPORTED_MODULE_4__.posts.filter((post)=>post.title === router.query.title)[0];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        footer: false,\n        title: currentPost.title,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: currentPost.imageUrl,\n                    alt: \"\",\n                    className: \"img-fluid\",\n                    style: {\n                        width: \"30%\"\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\yagua\\\\OneDrive\\\\Escritorio\\\\proyectos\\\\portafolio-simple\\\\pages\\\\post.js\",\n                    lineNumber: 15,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: currentPost.content\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\yagua\\\\OneDrive\\\\Escritorio\\\\proyectos\\\\portafolio-simple\\\\pages\\\\post.js\",\n                    lineNumber: 16,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\yagua\\\\OneDrive\\\\Escritorio\\\\proyectos\\\\portafolio-simple\\\\pages\\\\post.js\",\n            lineNumber: 14,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\yagua\\\\OneDrive\\\\Escritorio\\\\proyectos\\\\portafolio-simple\\\\pages\\\\post.js\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Post, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = Post;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQW1DO0FBQ007QUFDRDtBQUNMO0FBRW5DLE1BQU1JLE9BQU87O0lBRVQsTUFBTUMsU0FBU0gsc0RBQVNBO0lBRXhCLE1BQU1JLGNBQWNILDJDQUFLQSxDQUFDSSxNQUFNLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS0MsS0FBSyxLQUFLSixPQUFPSyxLQUFLLENBQUNELEtBQUssQ0FBQyxDQUFDLEVBQUU7SUFFaEYscUJBQ0ksOERBQUNSLDBEQUFNQTtRQUFDVSxRQUFRO1FBQU9GLE9BQU9ILFlBQVlHLEtBQUs7a0JBQzNDLDRFQUFDRztZQUFJQyxXQUFVOzs4QkFDWCw4REFBQ0M7b0JBQUlDLEtBQUtULFlBQVlVLFFBQVE7b0JBQUVDLEtBQUk7b0JBQUdKLFdBQVU7b0JBQVlLLE9BQU87d0JBQUNDLE9BQU87b0JBQUs7Ozs7Ozs4QkFDakYsOERBQUNDOzhCQUFHZCxZQUFZZSxPQUFPOzs7Ozs7Ozs7Ozs7Ozs7OztBQUl2QztHQWRNakI7O1FBRWFGLGtEQUFTQTs7O0tBRnRCRTtBQWdCTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wb3N0LmpzPzI1NjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUmVkdWNlciB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgcG9zdHMgfSBmcm9tIFwiLi4vcHJvZmlsZVwiO1xyXG5cclxuY29uc3QgUG9zdCA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBjb25zdCBjdXJyZW50UG9zdCA9IHBvc3RzLmZpbHRlcigocG9zdCkgPT4gcG9zdC50aXRsZSA9PT0gcm91dGVyLnF1ZXJ5LnRpdGxlKVswXVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dCBmb290ZXI9e2ZhbHNlfSB0aXRsZT17Y3VycmVudFBvc3QudGl0bGV9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17Y3VycmVudFBvc3QuaW1hZ2VVcmx9IGFsdD1cIlwiIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHN0eWxlPXt7d2lkdGg6ICczMCUnfX0vPlxyXG4gICAgICAgICAgICAgICAgPHA+e2N1cnJlbnRQb3N0LmNvbnRlbnR9PC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0xheW91dD5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdDsiXSwibmFtZXMiOlsidXNlUmVkdWNlciIsIkxheW91dCIsInVzZVJvdXRlciIsInBvc3RzIiwiUG9zdCIsInJvdXRlciIsImN1cnJlbnRQb3N0IiwiZmlsdGVyIiwicG9zdCIsInRpdGxlIiwicXVlcnkiLCJmb290ZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJpbWFnZVVybCIsImFsdCIsInN0eWxlIiwid2lkdGgiLCJwIiwiY29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/post.js\n"));

/***/ })

});