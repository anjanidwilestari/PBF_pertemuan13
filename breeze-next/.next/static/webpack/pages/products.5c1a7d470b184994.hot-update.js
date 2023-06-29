"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/products",{

/***/ "./src/pages/products.js":
/*!*******************************!*\
  !*** ./src/pages/products.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Layouts_AppLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/Layouts/AppLayout */ \"./src/components/Layouts/AppLayout.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/axios */ \"./src/lib/axios.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Products = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const [Datas, setDatas] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{\n        _lib_axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/api/products\").then(function(response) {\n            setDatas(response.data.data);\n            console.log(Datas);\n        }).catch(function(error) {\n            console.log(error);\n        });\n    }, [\n        Datas\n    ]);\n    console.log(\"Data:\", Datas);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layouts_AppLayout__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        header: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n            className: \"font-semibold text-xl text-gray-800 leading-tight\",\n            children: \"Products Page\"\n        }, void 0, false, void 0, void 0),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Laravel - Product\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\react\\\\pertemuanKuis2\\\\breeze-next\\\\src\\\\pages\\\\products.js\",\n                    lineNumber: 31,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\react\\\\pertemuanKuis2\\\\breeze-next\\\\src\\\\pages\\\\products.js\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-white\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-2xl font-bold tracking-tight text-gray-900\",\n                            children: \"Customers also purchased\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\react\\\\pertemuanKuis2\\\\breeze-next\\\\src\\\\pages\\\\products.js\",\n                            lineNumber: 36,\n                            columnNumber: 21\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8\",\n                            children: Datas.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"group relative\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: \"https://media.karousell.com/media/photos/products/2019/01/18/baju_wanita_soft_pink_1547798947_15196065_progressive.jpg\",\n                                                alt: product.imageAlt,\n                                                className: \"h-full w-full object-cover object-center lg:h-full lg:w-full\"\n                                            }, void 0, false, {\n                                                fileName: \"C:\\\\react\\\\pertemuanKuis2\\\\breeze-next\\\\src\\\\pages\\\\products.js\",\n                                                lineNumber: 44,\n                                                columnNumber: 37\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\react\\\\pertemuanKuis2\\\\breeze-next\\\\src\\\\pages\\\\products.js\",\n                                            lineNumber: 43,\n                                            columnNumber: 33\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"mt-4 flex justify-between\",\n                                            children: [\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                    children: [\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                            className: \"text-sm text-gray-700\",\n                                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                                href: product.href,\n                                                                children: [\n                                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                                        \"aria-hidden\": \"true\",\n                                                                        className: \"absolute inset-0\"\n                                                                    }, void 0, false, {\n                                                                        fileName: \"C:\\\\react\\\\pertemuanKuis2\\\\breeze-next\\\\src\\\\pages\\\\products.js\",\n                                                                        lineNumber: 56,\n                                                                        columnNumber: 49\n                                                                    }, undefined),\n                                                                    product.product_name\n                                                                ]\n                                                            }, void 0, true, {\n                                                                fileName: \"C:\\\\react\\\\pertemuanKuis2\\\\breeze-next\\\\src\\\\pages\\\\products.js\",\n                                                                lineNumber: 55,\n                                                                columnNumber: 45\n                                                            }, undefined)\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\react\\\\pertemuanKuis2\\\\breeze-next\\\\src\\\\pages\\\\products.js\",\n                                                            lineNumber: 54,\n                                                            columnNumber: 41\n                                                        }, undefined),\n                                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                            className: \"mt-1 text-sm text-gray-500\",\n                                                            children: product.color\n                                                        }, void 0, false, {\n                                                            fileName: \"C:\\\\react\\\\pertemuanKuis2\\\\breeze-next\\\\src\\\\pages\\\\products.js\",\n                                                            lineNumber: 63,\n                                                            columnNumber: 41\n                                                        }, undefined)\n                                                    ]\n                                                }, void 0, true, {\n                                                    fileName: \"C:\\\\react\\\\pertemuanKuis2\\\\breeze-next\\\\src\\\\pages\\\\products.js\",\n                                                    lineNumber: 53,\n                                                    columnNumber: 37\n                                                }, undefined),\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                    className: \"text-sm font-medium text-gray-900\",\n                                                    children: product.price\n                                                }, void 0, false, {\n                                                    fileName: \"C:\\\\react\\\\pertemuanKuis2\\\\breeze-next\\\\src\\\\pages\\\\products.js\",\n                                                    lineNumber: 67,\n                                                    columnNumber: 37\n                                                }, undefined)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"C:\\\\react\\\\pertemuanKuis2\\\\breeze-next\\\\src\\\\pages\\\\products.js\",\n                                            lineNumber: 52,\n                                            columnNumber: 33\n                                        }, undefined)\n                                    ]\n                                }, product.id, true, {\n                                    fileName: \"C:\\\\react\\\\pertemuanKuis2\\\\breeze-next\\\\src\\\\pages\\\\products.js\",\n                                    lineNumber: 42,\n                                    columnNumber: 29\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\react\\\\pertemuanKuis2\\\\breeze-next\\\\src\\\\pages\\\\products.js\",\n                            lineNumber: 40,\n                            columnNumber: 21\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\react\\\\pertemuanKuis2\\\\breeze-next\\\\src\\\\pages\\\\products.js\",\n                    lineNumber: 35,\n                    columnNumber: 17\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\react\\\\pertemuanKuis2\\\\breeze-next\\\\src\\\\pages\\\\products.js\",\n                lineNumber: 34,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\react\\\\pertemuanKuis2\\\\breeze-next\\\\src\\\\pages\\\\products.js\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Products, \"c0NIK5W5LPKoxEvD8gMR5rvyNfI=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = Products;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Products);\nvar _c;\n$RefreshReg$(_c, \"Products\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvcHJvZHVjdHMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7QUFBc0Q7QUFDMUI7QUFDRztBQUNRO0FBQ0k7QUFFM0MsTUFBTU0sV0FBVyxJQUFNOztJQUNuQixNQUFNQyxTQUFTSixzREFBU0E7SUFDeEIsTUFBTSxDQUFDSyxPQUFPQyxTQUFTLEdBQUdKLCtDQUFRQSxDQUFDLEVBQUU7SUFFckNELGdEQUFTQSxDQUFDLElBQU07UUFDWkYsc0RBQ1EsQ0FBQyxpQkFDSlMsSUFBSSxDQUFDLFNBQVVDLFFBQVEsRUFBRTtZQUN0QkgsU0FBU0csU0FBU0MsSUFBSSxDQUFDQSxJQUFJO1lBQzNCQyxRQUFRQyxHQUFHLENBQUNQO1FBQ2hCLEdBQ0NRLEtBQUssQ0FBQyxTQUFVQyxLQUFLLEVBQUU7WUFDcEJILFFBQVFDLEdBQUcsQ0FBQ0U7UUFDaEI7SUFDUixHQUFHO1FBQUNUO0tBQU07SUFDVk0sUUFBUUMsR0FBRyxDQUFDLFNBQVNQO0lBQ3JCLHFCQUNJLDhEQUFDUixxRUFBU0E7UUFDTmtCLHNCQUNJLDhEQUFDQztZQUFHQyxXQUFVO3NCQUFvRDs7OzBCQUl0RSw4REFBQ25CLGtEQUFJQTswQkFDRCw0RUFBQ29COzhCQUFNOzs7Ozs7Ozs7OzswQkFHWCw4REFBQ0M7Z0JBQUlGLFdBQVU7MEJBQ1gsNEVBQUNFO29CQUFJRixXQUFVOztzQ0FDWCw4REFBQ0Q7NEJBQUdDLFdBQVU7c0NBQWtEOzs7Ozs7c0NBSWhFLDhEQUFDRTs0QkFBSUYsV0FBVTtzQ0FDVlosTUFBTWUsR0FBRyxDQUFDQyxDQUFBQSx3QkFDUCw4REFBQ0Y7b0NBQXFCRixXQUFVOztzREFDNUIsOERBQUNFOzRDQUFJRixXQUFVO3NEQUNYLDRFQUFDSztnREFDR0MsS0FDSTtnREFFSkMsS0FBS0gsUUFBUUksUUFBUTtnREFDckJSLFdBQVU7Ozs7Ozs7Ozs7O3NEQUdsQiw4REFBQ0U7NENBQUlGLFdBQVU7OzhEQUNYLDhEQUFDRTs7c0VBQ0csOERBQUNPOzREQUFHVCxXQUFVO3NFQUNWLDRFQUFDVTtnRUFBRUMsTUFBTVAsUUFBUU8sSUFBSTs7a0ZBQ2pCLDhEQUFDQzt3RUFDR0MsZUFBWTt3RUFDWmIsV0FBVTs7Ozs7O29FQUViSSxRQUFRVSxZQUFZOzs7Ozs7Ozs7Ozs7c0VBRzdCLDhEQUFDQzs0REFBRWYsV0FBVTtzRUFDUkksUUFBUVksS0FBSzs7Ozs7Ozs7Ozs7OzhEQUd0Qiw4REFBQ0Q7b0RBQUVmLFdBQVU7OERBQ1JJLFFBQVFhLEtBQUs7Ozs7Ozs7Ozs7Ozs7bUNBMUJoQmIsUUFBUWMsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0NoRDtHQXZFTWhDOztRQUNhSCxrREFBU0E7OztLQUR0Qkc7QUF5RU4sK0RBQWVBLFFBQVFBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL3Byb2R1Y3RzLmpzPzkzOGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcExheW91dCBmcm9tICdAL2NvbXBvbmVudHMvTGF5b3V0cy9BcHBMYXlvdXQnXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ0AvbGliL2F4aW9zJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgUHJvZHVjdHMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gICAgY29uc3QgW0RhdGFzLCBzZXREYXRhc10gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGF4aW9zXHJcbiAgICAgICAgICAgIC5nZXQoJy9hcGkvcHJvZHVjdHMnKVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgIHNldERhdGFzKHJlc3BvbnNlLmRhdGEuZGF0YSlcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKERhdGFzKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgfSlcclxuICAgIH0sIFtEYXRhc10pXHJcbiAgICBjb25zb2xlLmxvZygnRGF0YTonLCBEYXRhcylcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEFwcExheW91dFxyXG4gICAgICAgICAgICBoZWFkZXI9e1xyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtc2VtaWJvbGQgdGV4dC14bCB0ZXh0LWdyYXktODAwIGxlYWRpbmctdGlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgICBQcm9kdWN0cyBQYWdlXHJcbiAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICB9PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5MYXJhdmVsIC0gUHJvZHVjdDwvdGl0bGU+XHJcbiAgICAgICAgICAgIDwvSGVhZD5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBtYXgtdy0yeGwgcHgtNCBweS0xNiBzbTpweC02IHNtOnB5LTI0IGxnOm1heC13LTd4bCBsZzpweC04XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZCB0cmFja2luZy10aWdodCB0ZXh0LWdyYXktOTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEN1c3RvbWVycyBhbHNvIHB1cmNoYXNlZFxyXG4gICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNiBncmlkIGdyaWQtY29scy0xIGdhcC14LTYgZ2FwLXktMTAgc206Z3JpZC1jb2xzLTIgbGc6Z3JpZC1jb2xzLTQgeGw6Z2FwLXgtOFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7RGF0YXMubWFwKHByb2R1Y3QgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e3Byb2R1Y3QuaWR9IGNsYXNzTmFtZT1cImdyb3VwIHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhc3BlY3QtaC0xIGFzcGVjdC13LTEgdy1mdWxsIG92ZXJmbG93LWhpZGRlbiByb3VuZGVkLW1kIGJnLWdyYXktMjAwIGxnOmFzcGVjdC1ub25lIGdyb3VwLWhvdmVyOm9wYWNpdHktNzUgbGc6aC04MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdodHRwczovL21lZGlhLmthcm91c2VsbC5jb20vbWVkaWEvcGhvdG9zL3Byb2R1Y3RzLzIwMTkvMDEvMTgvYmFqdV93YW5pdGFfc29mdF9waW5rXzE1NDc3OTg5NDdfMTUxOTYwNjVfcHJvZ3Jlc3NpdmUuanBnJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtwcm9kdWN0LmltYWdlQWx0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaC1mdWxsIHctZnVsbCBvYmplY3QtY292ZXIgb2JqZWN0LWNlbnRlciBsZzpoLWZ1bGwgbGc6dy1mdWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTQgZmxleCBqdXN0aWZ5LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJ0ZXh0LXNtIHRleHQtZ3JheS03MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtwcm9kdWN0LmhyZWZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC5wcm9kdWN0X25hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTEgdGV4dC1zbSB0ZXh0LWdyYXktNTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3QuY29sb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXNtIGZvbnQtbWVkaXVtIHRleHQtZ3JheS05MDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0LnByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9BcHBMYXlvdXQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RzXHJcbiJdLCJuYW1lcyI6WyJBcHBMYXlvdXQiLCJIZWFkIiwiYXhpb3MiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlByb2R1Y3RzIiwicm91dGVyIiwiRGF0YXMiLCJzZXREYXRhcyIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnJvciIsImhlYWRlciIsImgyIiwiY2xhc3NOYW1lIiwidGl0bGUiLCJkaXYiLCJtYXAiLCJwcm9kdWN0IiwiaW1nIiwic3JjIiwiYWx0IiwiaW1hZ2VBbHQiLCJoMyIsImEiLCJocmVmIiwic3BhbiIsImFyaWEtaGlkZGVuIiwicHJvZHVjdF9uYW1lIiwicCIsImNvbG9yIiwicHJpY2UiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/products.js\n"));

/***/ })

});