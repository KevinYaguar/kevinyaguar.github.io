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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Layout */ \"./pages/components/Layout.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _profile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../profile */ \"./profile.js\");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-i18next */ \"./node_modules/react-i18next/dist/es/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Project = ()=>{\n    var _currentProject, _currentProject1, _currentProject2;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { i18n, t } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation)();\n    const currentProject = _profile__WEBPACK_IMPORTED_MODULE_3__.projects.filter((project)=>{\n        var _project, _router_query_title, _router_query, _router;\n        return ((_project = project) === null || _project === void 0 ? void 0 : _project.name.replaceAll(\" \", \"_\")) === ((_router = router) === null || _router === void 0 ? void 0 : (_router_query = _router.query) === null || _router_query === void 0 ? void 0 : (_router_query_title = _router_query.title) === null || _router_query_title === void 0 ? void 0 : _router_query_title.replaceAll(\" \", \"_\"));\n    })[0];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        footer: false,\n        title: (_currentProject = currentProject) === null || _currentProject === void 0 ? void 0 : _currentProject.name,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"text-center d-flex justify-content-around\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"/\".concat((_currentProject1 = currentProject) === null || _currentProject1 === void 0 ? void 0 : _currentProject1.image),\n                    alt: \"\",\n                    className: \"img-fluid\",\n                    style: {\n                        width: \"30%\"\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\yagua\\\\OneDrive\\\\Escritorio\\\\proyectos\\\\portafolio-simple\\\\pages\\\\project.js\",\n                    lineNumber: 19,\n                    columnNumber: 17\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"py-5\",\n                    children: t((_currentProject2 = currentProject) === null || _currentProject2 === void 0 ? void 0 : _currentProject2.content)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\yagua\\\\OneDrive\\\\Escritorio\\\\proyectos\\\\portafolio-simple\\\\pages\\\\project.js\",\n                    lineNumber: 20,\n                    columnNumber: 17\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\yagua\\\\OneDrive\\\\Escritorio\\\\proyectos\\\\portafolio-simple\\\\pages\\\\project.js\",\n            lineNumber: 18,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\yagua\\\\OneDrive\\\\Escritorio\\\\proyectos\\\\portafolio-simple\\\\pages\\\\project.js\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Project, \"/Bc7xOHjFMjfQQv1vBt8zoFYHMM=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_i18next__WEBPACK_IMPORTED_MODULE_4__.useTranslation\n    ];\n});\n_c = Project;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Project);\nvar _c;\n$RefreshReg$(_c, \"Project\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9qZWN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBeUM7QUFDRDtBQUNGO0FBQ1M7QUFFL0MsTUFBTUksVUFBVTtRQVdzQkMsaUJBRVJBLGtCQUNTQTs7SUFabkMsTUFBTUMsU0FBU0wsc0RBQVNBO0lBRXhCLE1BQU0sRUFBRU0sSUFBSSxFQUFFQyxDQUFDLEVBQUUsR0FBR0wsNkRBQWNBO0lBRWxDLE1BQU1FLGlCQUFpQkgsOENBQVFBLENBQUNPLE1BQU0sQ0FBQyxDQUFDQztZQUM3QkEsVUFBdUNKLHFCQUFBQSxlQUFBQTtRQUE5QyxPQUFPSSxFQUFBQSxXQUFBQSxxQkFBQUEsK0JBQUFBLFNBQVNDLElBQUksQ0FBQ0MsVUFBVSxDQUFDLEtBQUssWUFBU04sVUFBQUEsb0JBQUFBLCtCQUFBQSxnQkFBQUEsUUFBUU8sS0FBSyxjQUFiUCxxQ0FBQUEsc0JBQUFBLGNBQWVRLEtBQUssY0FBcEJSLDBDQUFBQSxvQkFBc0JNLFVBQVUsQ0FBQyxLQUFLO0lBQ3hGLEVBQUUsQ0FBQyxFQUFFO0lBRUwscUJBQ0ksOERBQUNaLDBEQUFNQTtRQUFDZSxRQUFRO1FBQU9ELEtBQUssR0FBRVQsa0JBQUFBLDRCQUFBQSxzQ0FBQUEsZ0JBQWdCTSxJQUFJO2tCQUM5Qyw0RUFBQ0s7WUFBSUMsV0FBVTs7OEJBQ1gsOERBQUNDO29CQUFJQyxLQUFLLElBQTBCLFFBQXRCZCxtQkFBQUEsNEJBQUFBLHVDQUFBQSxpQkFBZ0JlLEtBQUs7b0JBQUlDLEtBQUk7b0JBQUdKLFdBQVU7b0JBQVlLLE9BQU87d0JBQUNDLE9BQU87b0JBQUs7Ozs7Ozs4QkFDeEYsOERBQUNDO29CQUFFUCxXQUFVOzhCQUFRVCxHQUFFSCxtQkFBQUEsNEJBQUFBLHVDQUFBQSxpQkFBZ0JvQixPQUFPOzs7Ozs7Ozs7Ozs7Ozs7OztBQUk5RDtHQWxCTXJCOztRQUVhSCxrREFBU0E7UUFFSkUseURBQWNBOzs7S0FKaENDO0FBb0JOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3Byb2plY3QuanM/NTE4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGF5b3V0IGZyb20gXCIuL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgcHJvamVjdHMgfSBmcm9tIFwiLi4vcHJvZmlsZVwiO1xyXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gXCJyZWFjdC1pMThuZXh0XCI7XHJcblxyXG5jb25zdCBQcm9qZWN0ID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG5cclxuICAgIGNvbnN0IHsgaTE4biwgdCB9ID0gdXNlVHJhbnNsYXRpb24oKVxyXG4gICAgXHJcbiAgICBjb25zdCBjdXJyZW50UHJvamVjdCA9IHByb2plY3RzLmZpbHRlcigocHJvamVjdCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBwcm9qZWN0Py5uYW1lLnJlcGxhY2VBbGwoJyAnLCAnXycpID09PSByb3V0ZXI/LnF1ZXJ5Py50aXRsZT8ucmVwbGFjZUFsbCgnICcsICdfJylcclxuICAgIH0pWzBdXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8TGF5b3V0IGZvb3Rlcj17ZmFsc2V9IHRpdGxlPXtjdXJyZW50UHJvamVjdD8ubmFtZX0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgZC1mbGV4IGp1c3RpZnktY29udGVudC1hcm91bmRcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgLyR7Y3VycmVudFByb2plY3Q/LmltYWdlfWB9IGFsdD1cIlwiIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiIHN0eWxlPXt7d2lkdGg6ICczMCUnfX0vPlxyXG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHktNVwiPnt0KGN1cnJlbnRQcm9qZWN0Py5jb250ZW50KX08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvTGF5b3V0PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0OyJdLCJuYW1lcyI6WyJMYXlvdXQiLCJ1c2VSb3V0ZXIiLCJwcm9qZWN0cyIsInVzZVRyYW5zbGF0aW9uIiwiUHJvamVjdCIsImN1cnJlbnRQcm9qZWN0Iiwicm91dGVyIiwiaTE4biIsInQiLCJmaWx0ZXIiLCJwcm9qZWN0IiwibmFtZSIsInJlcGxhY2VBbGwiLCJxdWVyeSIsInRpdGxlIiwiZm9vdGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1nIiwic3JjIiwiaW1hZ2UiLCJhbHQiLCJzdHlsZSIsIndpZHRoIiwicCIsImNvbnRlbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/project.js\n"));

/***/ })

});