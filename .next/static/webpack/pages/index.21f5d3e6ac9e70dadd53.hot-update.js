/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/TimeLine/TimeLine.js":
/*!*********************************************!*\
  !*** ./src/components/TimeLine/TimeLine.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TimeLineStyles */ \"./src/components/TimeLine/TimeLineStyles.js\");\n/* harmony import */ var _styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../styles/GlobalComponents */ \"./src/styles/GlobalComponents/index.js\");\n/* harmony import */ var _constants_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../constants/constants */ \"./src/constants/constants.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/home/kmwangemi/Downloads/NextJs/Portfolio/kmwangemi-portifolio-website/src/components/TimeLine/TimeLine.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\nvar TOTAL_CAROUSEL_COUNT = _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length;\n\nvar Timeline = function Timeline() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),\n      activeItem = _useState[0],\n      setActiveItem = _useState[1];\n\n  var carouselRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n\n  var scroll = function scroll(node, left) {\n    return node.scrollTo({\n      left: left,\n      behavior: 'smooth'\n    });\n  };\n\n  var handleClick = function handleClick(e, i) {\n    e.preventDefault();\n\n    if (carouselRef.current) {\n      var scrollLeft = Math.floor(carouselRef.current.scrollWidth * 0.7 * (i / _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length));\n      scroll(carouselRef.current, scrollLeft);\n    }\n  };\n\n  var handleScroll = function handleScroll() {\n    if (carouselRef.current) {\n      var index = Math.round(carouselRef.current.scrollLeft / (carouselRef.current.scrollWidth * 0.7) * _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.length);\n      setActiveItem(index);\n    }\n  }; // snap back to beginning of scroll when window is resized\n  // avoids a bug where content is covered up if coming from smaller screen\n\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    var handleResize = function handleResize() {\n      scroll(carouselRef.current, 0);\n    };\n\n    window.addEventListener('resize', handleResize);\n  }, []);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.Section, {\n    id: \"about\",\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionTitle, {\n      children: \"About Me\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 47,\n      columnNumber: 10\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styles_GlobalComponents__WEBPACK_IMPORTED_MODULE_3__.SectionText, {\n      children: \"The purpose of javascript mastery is to help ...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 10\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselContainer, {\n      ref: carouselRef,\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: _constants_constants__WEBPACK_IMPORTED_MODULE_4__.TimeLineData.map(function (item, index) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselMobileScrollNode, {\n            \"final\": index === TOTAL_CAROUSEL_COUNT - 1,\n            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_TimeLineStyles__WEBPACK_IMPORTED_MODULE_2__.CarouselItem, {\n              index: index,\n              id: \"carousel__item-\".concat(index),\n              active: true\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 56,\n              columnNumber: 25\n            }, _this)\n          }, index, false, {\n            fileName: _jsxFileName,\n            lineNumber: 55,\n            columnNumber: 22\n          }, _this);\n        })\n      }, void 0, false)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 10\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 46,\n    columnNumber: 7\n  }, _this);\n};\n\n_s(Timeline, \"qE2Y7awmqdFA9rYczLkhjQwwAdI=\");\n\n_c = Timeline;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Timeline);\n\nvar _c;\n\n$RefreshReg$(_c, \"Timeline\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvVGltZUxpbmUvVGltZUxpbmUuanM/ODQ5MSJdLCJuYW1lcyI6WyJUT1RBTF9DQVJPVVNFTF9DT1VOVCIsIlRpbWVMaW5lRGF0YSIsIlRpbWVsaW5lIiwidXNlU3RhdGUiLCJhY3RpdmVJdGVtIiwic2V0QWN0aXZlSXRlbSIsImNhcm91c2VsUmVmIiwidXNlUmVmIiwic2Nyb2xsIiwibm9kZSIsImxlZnQiLCJzY3JvbGxUbyIsImJlaGF2aW9yIiwiaGFuZGxlQ2xpY2siLCJlIiwiaSIsInByZXZlbnREZWZhdWx0IiwiY3VycmVudCIsInNjcm9sbExlZnQiLCJNYXRoIiwiZmxvb3IiLCJzY3JvbGxXaWR0aCIsImhhbmRsZVNjcm9sbCIsImluZGV4Iiwicm91bmQiLCJ1c2VFZmZlY3QiLCJoYW5kbGVSZXNpemUiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiaXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsb0JBQW9CLEdBQUdDLHFFQUE3Qjs7QUFFQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQUEsa0JBQ2dCQywrQ0FBUSxDQUFDLENBQUQsQ0FEeEI7QUFBQSxNQUNiQyxVQURhO0FBQUEsTUFDREMsYUFEQzs7QUFFcEIsTUFBTUMsV0FBVyxHQUFHQyw2Q0FBTSxFQUExQjs7QUFFQSxNQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxJQUFELEVBQU9DLElBQVAsRUFBZ0I7QUFDNUIsV0FBT0QsSUFBSSxDQUFDRSxRQUFMLENBQWM7QUFBRUQsVUFBSSxFQUFKQSxJQUFGO0FBQVFFLGNBQVEsRUFBRTtBQUFsQixLQUFkLENBQVA7QUFDRixHQUZEOztBQUlBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLENBQUQsRUFBSUMsQ0FBSixFQUFVO0FBQzNCRCxLQUFDLENBQUNFLGNBQUY7O0FBRUEsUUFBSVYsV0FBVyxDQUFDVyxPQUFoQixFQUF5QjtBQUN0QixVQUFNQyxVQUFVLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXZCxXQUFXLENBQUNXLE9BQVosQ0FBb0JJLFdBQXBCLEdBQWtDLEdBQWxDLElBQXlDTixDQUFDLEdBQUdkLHFFQUE3QyxDQUFYLENBQW5CO0FBRUFPLFlBQU0sQ0FBQ0YsV0FBVyxDQUFDVyxPQUFiLEVBQXNCQyxVQUF0QixDQUFOO0FBQ0Y7QUFDSCxHQVJEOztBQVVBLE1BQU1JLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFDeEIsUUFBSWhCLFdBQVcsQ0FBQ1csT0FBaEIsRUFBeUI7QUFDdEIsVUFBTU0sS0FBSyxHQUFHSixJQUFJLENBQUNLLEtBQUwsQ0FBWWxCLFdBQVcsQ0FBQ1csT0FBWixDQUFvQkMsVUFBcEIsSUFBa0NaLFdBQVcsQ0FBQ1csT0FBWixDQUFvQkksV0FBcEIsR0FBa0MsR0FBcEUsQ0FBRCxHQUE2RXBCLHFFQUF4RixDQUFkO0FBRUFJLG1CQUFhLENBQUNrQixLQUFELENBQWI7QUFDRjtBQUNILEdBTkQsQ0FsQm9CLENBMEJwQjtBQUNBOzs7QUFDQUUsa0RBQVMsQ0FBQyxZQUFNO0FBQ2IsUUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsR0FBTTtBQUN4QmxCLFlBQU0sQ0FBQ0YsV0FBVyxDQUFDVyxPQUFiLEVBQXNCLENBQXRCLENBQU47QUFDRixLQUZEOztBQUlBVSxVQUFNLENBQUNDLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDRixZQUFsQztBQUNGLEdBTlEsRUFNTixFQU5NLENBQVQ7QUFRQSxzQkFDRyw4REFBQyw2REFBRDtBQUFTLE1BQUUsRUFBQyxPQUFaO0FBQUEsNEJBQ0csOERBQUMsa0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESCxlQUVHLDhEQUFDLGlFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkgsZUFLRyw4REFBQyw4REFBRDtBQUFtQixTQUFHLEVBQUVwQixXQUF4QjtBQUFBLDZCQUNHO0FBQUEsa0JBRU1MLGtFQUFBLENBQWlCLFVBQUM0QixJQUFELEVBQU9OLEtBQVA7QUFBQSw4QkFDZCw4REFBQyxxRUFBRDtBQUFzQyxxQkFBT0EsS0FBSyxLQUFLdkIsb0JBQW9CLEdBQUcsQ0FBOUU7QUFBQSxtQ0FDRyw4REFBQyx5REFBRDtBQUNHLG1CQUFLLEVBQUV1QixLQURWO0FBRUcsZ0JBQUUsMkJBQW9CQSxLQUFwQixDQUZMO0FBR0csb0JBQU07QUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREgsYUFBK0JBLEtBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRGM7QUFBQSxTQUFqQjtBQUZOO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURIO0FBNEJGLENBaEVEOztHQUFNckIsUTs7S0FBQUEsUTtBQWtFTiwrREFBZUEsUUFBZiIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL1RpbWVMaW5lL1RpbWVMaW5lLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQ2Fyb3VzZWxCdXR0b24sIENhcm91c2VsQnV0dG9uRG90LCBDYXJvdXNlbEJ1dHRvbnMsIENhcm91c2VsQ29udGFpbmVyLCBDYXJvdXNlbEl0ZW0sIENhcm91c2VsSXRlbUltZywgQ2Fyb3VzZWxJdGVtVGV4dCwgQ2Fyb3VzZWxJdGVtVGl0bGUsIENhcm91c2VsTW9iaWxlU2Nyb2xsTm9kZSB9IGZyb20gJy4vVGltZUxpbmVTdHlsZXMnO1xuaW1wb3J0IHsgU2VjdGlvbiwgU2VjdGlvbkRpdmlkZXIsIFNlY3Rpb25UZXh0LCBTZWN0aW9uVGl0bGUgfSBmcm9tICcuLi8uLi9zdHlsZXMvR2xvYmFsQ29tcG9uZW50cyc7XG5pbXBvcnQgeyBUaW1lTGluZURhdGEgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvY29uc3RhbnRzJztcblxuY29uc3QgVE9UQUxfQ0FST1VTRUxfQ09VTlQgPSBUaW1lTGluZURhdGEubGVuZ3RoO1xuXG5jb25zdCBUaW1lbGluZSA9ICgpID0+IHtcbiAgIGNvbnN0IFthY3RpdmVJdGVtLCBzZXRBY3RpdmVJdGVtXSA9IHVzZVN0YXRlKDApO1xuICAgY29uc3QgY2Fyb3VzZWxSZWYgPSB1c2VSZWYoKTtcblxuICAgY29uc3Qgc2Nyb2xsID0gKG5vZGUsIGxlZnQpID0+IHtcbiAgICAgIHJldHVybiBub2RlLnNjcm9sbFRvKHsgbGVmdCwgYmVoYXZpb3I6ICdzbW9vdGgnIH0pO1xuICAgfVxuXG4gICBjb25zdCBoYW5kbGVDbGljayA9IChlLCBpKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGlmIChjYXJvdXNlbFJlZi5jdXJyZW50KSB7XG4gICAgICAgICBjb25zdCBzY3JvbGxMZWZ0ID0gTWF0aC5mbG9vcihjYXJvdXNlbFJlZi5jdXJyZW50LnNjcm9sbFdpZHRoICogMC43ICogKGkgLyBUaW1lTGluZURhdGEubGVuZ3RoKSk7XG5cbiAgICAgICAgIHNjcm9sbChjYXJvdXNlbFJlZi5jdXJyZW50LCBzY3JvbGxMZWZ0KTtcbiAgICAgIH1cbiAgIH1cblxuICAgY29uc3QgaGFuZGxlU2Nyb2xsID0gKCkgPT4ge1xuICAgICAgaWYgKGNhcm91c2VsUmVmLmN1cnJlbnQpIHtcbiAgICAgICAgIGNvbnN0IGluZGV4ID0gTWF0aC5yb3VuZCgoY2Fyb3VzZWxSZWYuY3VycmVudC5zY3JvbGxMZWZ0IC8gKGNhcm91c2VsUmVmLmN1cnJlbnQuc2Nyb2xsV2lkdGggKiAwLjcpKSAqIFRpbWVMaW5lRGF0YS5sZW5ndGgpO1xuXG4gICAgICAgICBzZXRBY3RpdmVJdGVtKGluZGV4KTtcbiAgICAgIH1cbiAgIH1cblxuICAgLy8gc25hcCBiYWNrIHRvIGJlZ2lubmluZyBvZiBzY3JvbGwgd2hlbiB3aW5kb3cgaXMgcmVzaXplZFxuICAgLy8gYXZvaWRzIGEgYnVnIHdoZXJlIGNvbnRlbnQgaXMgY292ZXJlZCB1cCBpZiBjb21pbmcgZnJvbSBzbWFsbGVyIHNjcmVlblxuICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGNvbnN0IGhhbmRsZVJlc2l6ZSA9ICgpID0+IHtcbiAgICAgICAgIHNjcm9sbChjYXJvdXNlbFJlZi5jdXJyZW50LCAwKTtcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIGhhbmRsZVJlc2l6ZSk7XG4gICB9LCBbXSk7XG5cbiAgIHJldHVybiAoXG4gICAgICA8U2VjdGlvbiBpZD0nYWJvdXQnPlxuICAgICAgICAgPFNlY3Rpb25UaXRsZT5BYm91dCBNZTwvU2VjdGlvblRpdGxlPlxuICAgICAgICAgPFNlY3Rpb25UZXh0PlxuICAgICAgICAgICAgVGhlIHB1cnBvc2Ugb2YgamF2YXNjcmlwdCBtYXN0ZXJ5IGlzIHRvIGhlbHAgLi4uXG4gICAgICAgICA8L1NlY3Rpb25UZXh0PlxuICAgICAgICAgPENhcm91c2VsQ29udGFpbmVyIHJlZj17Y2Fyb3VzZWxSZWZ9PlxuICAgICAgICAgICAgPD5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFRpbWVMaW5lRGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICA8Q2Fyb3VzZWxNb2JpbGVTY3JvbGxOb2RlIGtleT17aW5kZXh9IGZpbmFsPXtpbmRleCA9PT0gVE9UQUxfQ0FST1VTRUxfQ09VTlQgLSAxfT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJvdXNlbEl0ZW1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPXtgY2Fyb3VzZWxfX2l0ZW0tJHtpbmRleH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2Fyb3VzZWxJdGVtPlxuXG4gICAgICAgICAgICAgICAgICAgICA8L0Nhcm91c2VsTW9iaWxlU2Nyb2xsTm9kZT5cblxuICAgICAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvPlxuXG4gICAgICAgICA8L0Nhcm91c2VsQ29udGFpbmVyPlxuICAgICAgPC9TZWN0aW9uPlxuICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRpbWVsaW5lO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/TimeLine/TimeLine.js\n");

/***/ })

});