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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Layout */ \"./pages/components/Layout.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../profile */ \"./profile.js\");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ \"./node_modules/react-i18next/dist/es/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Project = ()=>{\n    var _currentProject, _currentProject1, _currentProject2;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { i18n, t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();\n    const currentProject = _profile__WEBPACK_IMPORTED_MODULE_3__.projects.filter((project)=>{\n        var _project, _router_query_title, _router_query, _router;\n        return ((_project = project) === null || _project === void 0 ? void 0 : _project.name.replaceAll(\" \", \"_\")) === ((_router = router) === null || _router === void 0 ? void 0 : (_router_query = _router.query) === null || _router_query === void 0 ? void 0 : (_router_query_title = _router_query.title) === null || _router_query_title === void 0 ? void 0 : _router_query_title.replaceAll(\" \", \"_\"));\n    })[0];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        footer: false,\n        title: (_currentProject = currentProject) === null || _currentProject === void 0 ? void 0 : _currentProject.name,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-center d-flex justify-content-around border-right border-info\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"/\".concat((_currentProject1 = currentProject) === null || _currentProject1 === void 0 ? void 0 : _currentProject1.image),\n                    alt: \"\",\n                    className: \"img-fluid border border-info\",\n                    style: {\n                        width: \"30%\"\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\yagua\\\\OneDrive\\\\Escritorio\\\\proyectos\\\\portafolio-simple\\\\pages\\\\project.js\",\n                    lineNumber: 19,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"py-5 px-5\",\n                    children: t((_currentProject2 = currentProject) === null || _currentProject2 === void 0 ? void 0 : _currentProject2.content)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\yagua\\\\OneDrive\\\\Escritorio\\\\proyectos\\\\portafolio-simple\\\\pages\\\\project.js\",\n                    lineNumber: 20,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\yagua\\\\OneDrive\\\\Escritorio\\\\proyectos\\\\portafolio-simple\\\\pages\\\\project.js\",\n            lineNumber: 18,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\yagua\\\\OneDrive\\\\Escritorio\\\\proyectos\\\\portafolio-simple\\\\pages\\\\project.js\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Project, \"/Bc7xOHjFMjfQQv1vBt8zoFYHMM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation\n    ];\n});\n_c = Project;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Project);\nvar _c;\n$RefreshReg$(_c, \"Project\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9qZWN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBeUM7QUFDRDtBQUNGO0FBQ1M7QUFFL0MsTUFBTUksVUFBVTtRQVdzQkMsaUJBRVJBLGtCQUNjQTs7SUFaeEMsTUFBTUMsU0FBU0wsc0RBQVNBO0lBRXhCLE1BQU0sRUFBRU0sSUFBSSxFQUFFQyxDQUFDLEVBQUUsR0FBR0wsNkRBQWNBO0lBRWxDLE1BQU1FLGlCQUFpQkgsOENBQVFBLENBQUNPLE1BQU0sQ0FBQyxDQUFDQztZQUM3QkEsVUFBdUNKLHFCQUFBQSxlQUFBQTtRQUE5QyxPQUFPSSxFQUFBQSxXQUFBQSxxQkFBQUEsK0JBQUFBLFNBQVNDLElBQUksQ0FBQ0MsVUFBVSxDQUFDLEtBQUssWUFBU04sVUFBQUEsb0JBQUFBLCtCQUFBQSxnQkFBQUEsUUFBUU8sS0FBSyxjQUFiUCxxQ0FBQUEsc0JBQUFBLGNBQWVRLEtBQUssY0FBcEJSLDBDQUFBQSxvQkFBc0JNLFVBQVUsQ0FBQyxLQUFLO0lBQ3hGLEVBQUUsQ0FBQyxFQUFFO0lBRUwscUJBQ0ksOERBQUNaLDBEQUFNQTtRQUFDZSxRQUFRO1FBQU9ELEtBQUssR0FBRVQsa0JBQUFBLDRCQUFBQSxzQ0FBQUEsZ0JBQWdCTSxJQUFJO2tCQUM5Qyw0RUFBQ0s7WUFBSUMsV0FBVTs7OEJBQ1gsOERBQUNDO29CQUFJQyxLQUFLLElBQTBCLFFBQXRCZCxtQkFBQUEsNEJBQUFBLHVDQUFBQSxpQkFBZ0JlLEtBQUs7b0JBQUlDLEtBQUk7b0JBQUdKLFdBQVU7b0JBQStCSyxPQUFPO3dCQUFDQyxPQUFPO29CQUFLOzs7Ozs7OEJBQzNHLDhEQUFDQztvQkFBRVAsV0FBVTs4QkFBYVQsR0FBRUgsbUJBQUFBLDRCQUFBQSx1Q0FBQUEsaUJBQWdCb0IsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJbkU7R0FsQk1yQjs7UUFFYUgsa0RBQVNBO1FBRUpFLHlEQUFjQTs7O0tBSmhDQztBQW9CTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9qZWN0LmpzPzUxOGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tIFwiLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHByb2plY3RzIH0gZnJvbSBcIi4uL3Byb2ZpbGVcIjtcclxuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tIFwicmVhY3QtaTE4bmV4dFwiO1xyXG5cclxuY29uc3QgUHJvamVjdCA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuXHJcbiAgICBjb25zdCB7IGkxOG4sIHQgfSA9IHVzZVRyYW5zbGF0aW9uKClcclxuICAgIFxyXG4gICAgY29uc3QgY3VycmVudFByb2plY3QgPSBwcm9qZWN0cy5maWx0ZXIoKHByb2plY3QpID0+IHtcclxuICAgICAgICByZXR1cm4gcHJvamVjdD8ubmFtZS5yZXBsYWNlQWxsKCcgJywgJ18nKSA9PT0gcm91dGVyPy5xdWVyeT8udGl0bGU/LnJlcGxhY2VBbGwoJyAnLCAnXycpXHJcbiAgICB9KVswXVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPExheW91dCBmb290ZXI9e2ZhbHNlfSB0aXRsZT17Y3VycmVudFByb2plY3Q/Lm5hbWV9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYXJvdW5kIGJvcmRlci1yaWdodCBib3JkZXItaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2AvJHtjdXJyZW50UHJvamVjdD8uaW1hZ2V9YH0gYWx0PVwiXCIgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGJvcmRlciBib3JkZXItaW5mb1wiIHN0eWxlPXt7d2lkdGg6ICczMCUnfX0vPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHktNSBweC01XCI+e3QoY3VycmVudFByb2plY3Q/LmNvbnRlbnQpfTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7Il0sIm5hbWVzIjpbIkxheW91dCIsInVzZVJvdXRlciIsInByb2plY3RzIiwidXNlVHJhbnNsYXRpb24iLCJQcm9qZWN0IiwiY3VycmVudFByb2plY3QiLCJyb3V0ZXIiLCJpMThuIiwidCIsImZpbHRlciIsInByb2plY3QiLCJuYW1lIiwicmVwbGFjZUFsbCIsInF1ZXJ5IiwidGl0bGUiLCJmb290ZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWciLCJzcmMiLCJpbWFnZSIsImFsdCIsInN0eWxlIiwid2lkdGgiLCJwIiwiY29udGVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/project.js\n"));

/***/ })

});