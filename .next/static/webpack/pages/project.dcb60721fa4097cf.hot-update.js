"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/project",{

/***/ "./pages/project.js":
/*!**************************!*\
  !*** ./pages/project.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Layout */ \"./pages/components/Layout.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../profile */ \"./profile.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Post = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    console.log(router);\n    const currentPost = _profile__WEBPACK_IMPORTED_MODULE_3__.projects.filter((project)=>project.name === router.query.title.replaceAll(\" \", \"_\"))[0];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        footer: false,\n        title: currentPost.name,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: currentPost.imageUrl,\n                    alt: \"\",\n                    className: \"img-fluid\",\n                    style: {\n                        width: \"30%\"\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\yagua\\\\OneDrive\\\\Escritorio\\\\proyectos\\\\portafolio-simple\\\\pages\\\\project.js\",\n                    lineNumber: 15,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: currentPost.content\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\yagua\\\\OneDrive\\\\Escritorio\\\\proyectos\\\\portafolio-simple\\\\pages\\\\project.js\",\n                    lineNumber: 16,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\yagua\\\\OneDrive\\\\Escritorio\\\\proyectos\\\\portafolio-simple\\\\pages\\\\project.js\",\n            lineNumber: 14,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\yagua\\\\OneDrive\\\\Escritorio\\\\proyectos\\\\portafolio-simple\\\\pages\\\\project.js\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Post, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Post;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Post);\nvar _c;\n$RefreshReg$(_c, \"Post\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9qZWN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF5QztBQUNEO0FBQ0Y7QUFFdEMsTUFBTUcsT0FBTzs7SUFFVCxNQUFNQyxTQUFTSCxzREFBU0E7SUFDeEJJLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFFWixNQUFNRyxjQUFjTCw4Q0FBUUEsQ0FBQ00sTUFBTSxDQUFDLENBQUNDLFVBQVlBLFFBQVFDLElBQUksS0FBS04sT0FBT08sS0FBSyxDQUFDQyxLQUFLLENBQUNDLFVBQVUsQ0FBQyxLQUFLLEtBQUssQ0FBQyxFQUFFO0lBRTdHLHFCQUNJLDhEQUFDYiwwREFBTUE7UUFBQ2MsUUFBUTtRQUFPRixPQUFPTCxZQUFZRyxJQUFJO2tCQUMxQyw0RUFBQ0s7WUFBSUMsV0FBVTs7OEJBQ1gsOERBQUNDO29CQUFJQyxLQUFLWCxZQUFZWSxRQUFRO29CQUFFQyxLQUFJO29CQUFHSixXQUFVO29CQUFZSyxPQUFPO3dCQUFDQyxPQUFPO29CQUFLOzs7Ozs7OEJBQ2pGLDhEQUFDQzs4QkFBR2hCLFlBQVlpQixPQUFPOzs7Ozs7Ozs7Ozs7Ozs7OztBQUl2QztHQWZNckI7O1FBRWFGLGtEQUFTQTs7O0tBRnRCRTtBQWlCTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9qZWN0LmpzPzUxOGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4uL3Byb2ZpbGVcIjtcclxuXHJcbmNvbnN0IFBvc3QgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zb2xlLmxvZyhyb3V0ZXIpXHJcblxyXG4gICAgY29uc3QgY3VycmVudFBvc3QgPSBwcm9qZWN0cy5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3QubmFtZSA9PT0gcm91dGVyLnF1ZXJ5LnRpdGxlLnJlcGxhY2VBbGwoJyAnLCAnXycpKVswXVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dCBmb290ZXI9e2ZhbHNlfSB0aXRsZT17Y3VycmVudFBvc3QubmFtZX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtjdXJyZW50UG9zdC5pbWFnZVVybH0gYWx0PVwiXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCIgc3R5bGU9e3t3aWR0aDogJzMwJSd9fS8+XHJcbiAgICAgICAgICAgICAgICA8cD57Y3VycmVudFBvc3QuY29udGVudH08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0OyJdLCJuYW1lcyI6WyJMYXlvdXQiLCJ1c2VSb3V0ZXIiLCJwcm9qZWN0cyIsIlBvc3QiLCJyb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudFBvc3QiLCJmaWx0ZXIiLCJwcm9qZWN0IiwibmFtZSIsInF1ZXJ5IiwidGl0bGUiLCJyZXBsYWNlQWxsIiwiZm9vdGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiaW1hZ2VVcmwiLCJhbHQiLCJzdHlsZSIsIndpZHRoIiwicCIsImNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/project.js\n"));

/***/ })

});