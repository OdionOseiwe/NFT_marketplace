"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_throw_mjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @swc/helpers/src/_throw.mjs */ \"./node_modules/@swc/helpers/src/_throw.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3modal */ \"./node_modules/web3modal/dist/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _address__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../address */ \"./address.js\");\n/* harmony import */ var _address__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_address__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _artifacts_contracts_NFT_sol_NARUTO_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../artifacts/contracts/NFT.sol/NARUTO.json */ \"./artifacts/contracts/NFT.sol/NARUTO.json\");\n/* harmony import */ var _artifacts_contracts_Marketplace_sol_Marketplace_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../artifacts/contracts/Marketplace.sol/Marketplace.json */ \"./artifacts/contracts/Marketplace.sol/Marketplace.json\");\n/* harmony import */ var wagmi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! wagmi */ \"./node_modules/wagmi/dist/wagmi.esm.js\");\n\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    var ref = (0,wagmi__WEBPACK_IMPORTED_MODULE_7__.useContractRead)({\n        addressOrName: \"0x45205E53BB788E954fC0753e4CBC7bEF5d1c62d2\",\n        contractInterface: _artifacts_contracts_NFT_sol_NARUTO_json__WEBPACK_IMPORTED_MODULE_5__,\n        functionName: \"symbol\"\n    }), data = ref.data, isError = ref.isError, isLoading = ref.isLoading;\n    var ref1 = (0,wagmi__WEBPACK_IMPORTED_MODULE_7__.useConnect)({}), ref1 = ref1 !== null ? ref1 : (0,_swc_helpers_src_throw_mjs__WEBPACK_IMPORTED_MODULE_8__[\"default\"])(new TypeError(\"Cannot destructure undefined\"));\n    var ref2 = (0,wagmi__WEBPACK_IMPORTED_MODULE_7__.useAccount)({}), address = ref2.address, isConnected = ref2.isConnected;\n    console.log(address, isConnected);\n    console.log(data, isError, isLoading);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: \"Welcome to Home\"\n        }, void 0, false, {\n            fileName: \"/home/oseiwe/Desktop/ALL PROJECTS/solidity/ProjectNFTmarketplace/nft_fondend/pages/index.js\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/oseiwe/Desktop/ALL PROJECTS/solidity/ProjectNFTmarketplace/nft_fondend/pages/index.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"xw1SwgwDmROoV7JsO0smXVs4WRQ=\", false, function() {\n    return [\n        wagmi__WEBPACK_IMPORTED_MODULE_7__.useContractRead,\n        wagmi__WEBPACK_IMPORTED_MODULE_7__.useConnect,\n        wagmi__WEBPACK_IMPORTED_MODULE_7__.useAccount\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFBOEM7QUFDSDtBQUNqQjtBQUNRO0FBQ3VCO0FBQ0k7QUFDZTtBQUNkO0FBSS9DLFNBQVNZLElBQUksR0FBRzs7SUFDN0IsSUFBcUNILEdBS25DLEdBTG1DQSxzREFBZSxDQUFDO1FBQ25ESSxhQUFhLEVBQUUsNENBQTRDO1FBQzNEQyxpQkFBaUIsRUFBRVAscUVBQUc7UUFDdEJRLFlBQVksRUFBRSxRQUFRO0tBRXZCLENBQUMsRUFMTUMsSUFBSSxHQUF5QlAsR0FLbkMsQ0FMTU8sSUFBSSxFQUFFQyxPQUFPLEdBQWdCUixHQUtuQyxDQUxZUSxPQUFPLEVBQUVDLFNBQVMsR0FBS1QsR0FLbkMsQ0FMcUJTLFNBQVM7SUFPaEMsSUFBVVIsSUFFUixHQUZRQSxpREFBVSxDQUFDLEVBRXBCLENBQUMsRUFGRyxJQUVILEdBRlFBLElBRVIsWUFGUUEsSUFFUix3SEFGSztJQUlQLElBQStCQyxJQUU3QixHQUY2QkEsaURBQVUsQ0FBQyxFQUV6QyxDQUFDLEVBRktRLE9BQU8sR0FBaUJSLElBRTdCLENBRktRLE9BQU8sRUFBRUMsV0FBVyxHQUFJVCxJQUU3QixDQUZjUyxXQUFXO0lBSTNCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsT0FBTyxFQUFFQyxXQUFXLENBQUMsQ0FBQztJQUVsQ0MsT0FBTyxDQUFDQyxHQUFHLENBQUNOLElBQUksRUFBRUMsT0FBTyxFQUFFQyxTQUFTLENBQUMsQ0FBQztJQUV0QyxxQkFDRSw4REFBQ0ssS0FBRztRQUFDQyxTQUFTLEVBQUV4QiwwRUFBZ0I7a0JBQzlCLDRFQUFDMEIsSUFBRTtzQkFBQyxpQkFBZTs7Ozs7Z0JBQUs7Ozs7O1lBQ3BCLENBRVA7QUFDSCxDQUFDO0dBMUJ1QmQsSUFBSTs7UUFDV0gsa0RBQWU7UUFPMUNDLDZDQUFVO1FBSVdDLDZDQUFVOzs7QUFabkJDLEtBQUFBLElBQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyB1c2VFZmZlY3QsdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHdlYjNNb2RhbCBmcm9tIFwid2ViM21vZGFsXCI7XG5pbXBvcnQge25mdGFkZHJlc3MsbWFya2V0cGxhY2VhZGRyZXNzfSBmcm9tICcuLi9hZGRyZXNzJztcbmltcG9ydCBORlQgZnJvbSAnLi4vYXJ0aWZhY3RzL2NvbnRyYWN0cy9ORlQuc29sL05BUlVUTy5qc29uJztcbmltcG9ydCBNQVJLRVQgZnJvbSAnLi4vYXJ0aWZhY3RzL2NvbnRyYWN0cy9NYXJrZXRwbGFjZS5zb2wvTWFya2V0cGxhY2UuanNvbidcbmltcG9ydCB7IHVzZUNvbnRyYWN0UmVhZCAsdXNlQ29ubmVjdCwgdXNlQWNjb3VudH0gZnJvbSAnd2FnbWknXG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCB7IGRhdGEsIGlzRXJyb3IsIGlzTG9hZGluZyB9ID0gdXNlQ29udHJhY3RSZWFkKHtcbiAgICBhZGRyZXNzT3JOYW1lOiAnMHg0NTIwNUU1M0JCNzg4RTk1NGZDMDc1M2U0Q0JDN2JFRjVkMWM2MmQyJyxcbiAgICBjb250cmFjdEludGVyZmFjZTogTkZULFxuICAgIGZ1bmN0aW9uTmFtZTogJ3N5bWJvbCcsXG4gICBcbiAgfSlcblxuICBjb25zdHt9ID0gdXNlQ29ubmVjdCh7XG5cbiAgfSlcblxuICBjb25zdCB7YWRkcmVzcywgaXNDb25uZWN0ZWR9ID0gdXNlQWNjb3VudCh7XG5cbiAgfSlcblxuICBjb25zb2xlLmxvZyhhZGRyZXNzLCBpc0Nvbm5lY3RlZCk7XG5cbiAgY29uc29sZS5sb2coZGF0YSwgaXNFcnJvciwgaXNMb2FkaW5nKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxoMT5XZWxjb21lIHRvIEhvbWU8L2gxPlxuICAgIDwvZGl2PlxuXG4gIClcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF4aW9zIiwid2ViM01vZGFsIiwibmZ0YWRkcmVzcyIsIm1hcmtldHBsYWNlYWRkcmVzcyIsIk5GVCIsIk1BUktFVCIsInVzZUNvbnRyYWN0UmVhZCIsInVzZUNvbm5lY3QiLCJ1c2VBY2NvdW50IiwiSG9tZSIsImFkZHJlc3NPck5hbWUiLCJjb250cmFjdEludGVyZmFjZSIsImZ1bmN0aW9uTmFtZSIsImRhdGEiLCJpc0Vycm9yIiwiaXNMb2FkaW5nIiwiYWRkcmVzcyIsImlzQ29ubmVjdGVkIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImgxIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ }),

/***/ "./node_modules/@swc/helpers/src/_throw.mjs":
/*!**************************************************!*\
  !*** ./node_modules/@swc/helpers/src/_throw.mjs ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ _throw; }\n/* harmony export */ });\nfunction _throw(e) {\n    throw e;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvQHN3Yy9oZWxwZXJzL3NyYy9fdGhyb3cubWpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBZTtBQUNmO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0Bzd2MvaGVscGVycy9zcmMvX3Rocm93Lm1qcz85MjYwIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90aHJvdyhlKSB7XG4gICAgdGhyb3cgZTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/@swc/helpers/src/_throw.mjs\n"));

/***/ })

});