webpackHotUpdate("static\\development\\pages\\dashboardpage.js",{

/***/ "./components/Dashboard/linechart1.js":
/*!********************************************!*\
  !*** ./components/Dashboard/linechart1.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! highcharts */ "./node_modules/highcharts/highcharts.js");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var highcharts_react_official__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! highcharts-react-official */ "./node_modules/highcharts-react-official/dist/highcharts-react.min.js");
/* harmony import */ var highcharts_react_official__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(highcharts_react_official__WEBPACK_IMPORTED_MODULE_7__);





var _jsxFileName = "E:\\reactnext\\components\\Dashboard\\linechart1.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }




var options = {
  chart: {
    type: 'spline',
    backgroundColor: "#F9F9F9"
  },
  title: {
    text: ''
  },
  series: [{
    name: 'Alerts',
    data: [9, 6, 5, 5, 7, 4, 4, 4, 5, 20, 10, 16, 10, 10, 7, 1, 7, 5, 3, 4, 3, 4, 5, 4],
    pointStart: Date.UTC(2020, 0, 0),
    pointInterval: 24 * 30 * 3600 * 1000,
    color: 'green',
    dataLabels: {
      enabled: false,
      color: '#FFFFFF',
      align: 'right',
      x: -60,
      y: 20,
      style: {
        fontSize: '13px',
        fontFamily: 'Verdana, sans-serif'
      }
    }
  }, {
    name: 'Risk',
    data: [8.25, 9.75, 4.5, 4.5, 5.25, 9, 3, 13.5, 15.75, 27.75, 12, 19.5, 12, 18.75, 16.5, 1.5, 12, 4.5, 3, 9, 3.75, 4.5, 9, 3.75],
    pointStart: Date.UTC(2020, 0, 0),
    pointInterval: 24 * 30 * 3600 * 1000,
    color: 'red',
    dataLabels: {
      enabled: false,
      color: '#FFFFFF',
      align: 'right',
      x: -60,
      y: 20,
      style: {
        fontSize: '13px',
        fontFamily: 'Verdana, sans-serif'
      }
    }
  }]
};

var LineChart1 = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(LineChart1, _React$Component);

  var _super = _createSuper(LineChart1);

  function LineChart1() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LineChart1);

    return _super.call(this);
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LineChart1, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 9
        }
      }, __jsx(highcharts_react_official__WEBPACK_IMPORTED_MODULE_7___default.a, {
        highcharts: highcharts__WEBPACK_IMPORTED_MODULE_6___default.a,
        options: options,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 5
        }
      }));
    }
  }]);

  return LineChart1;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (LineChart1);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Rhc2hib2FyZC9saW5lY2hhcnQxLmpzIl0sIm5hbWVzIjpbIm9wdGlvbnMiLCJjaGFydCIsInR5cGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0aXRsZSIsInRleHQiLCJzZXJpZXMiLCJuYW1lIiwiZGF0YSIsInBvaW50U3RhcnQiLCJEYXRlIiwiVVRDIiwicG9pbnRJbnRlcnZhbCIsImNvbG9yIiwiZGF0YUxhYmVscyIsImVuYWJsZWQiLCJhbGlnbiIsIngiLCJ5Iiwic3R5bGUiLCJmb250U2l6ZSIsImZvbnRGYW1pbHkiLCJMaW5lQ2hhcnQxIiwiSGlnaGNoYXJ0cyIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHO0FBRVpDLE9BQUssRUFBRTtBQUNIQyxRQUFJLEVBQUUsUUFESDtBQUVIQyxtQkFBZSxFQUFDO0FBRmIsR0FGSztBQU1aQyxPQUFLLEVBQUU7QUFDTEMsUUFBSSxFQUFFO0FBREQsR0FOSztBQVVaQyxRQUFNLEVBQUUsQ0FBQztBQUNMQyxRQUFJLEVBQUUsUUFERDtBQUVMQyxRQUFJLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFrQixDQUFsQixFQUFvQixDQUFwQixFQUFzQixDQUF0QixFQUF3QixFQUF4QixFQUEyQixFQUEzQixFQUE4QixFQUE5QixFQUFpQyxFQUFqQyxFQUFvQyxFQUFwQyxFQUF1QyxDQUF2QyxFQUF5QyxDQUF6QyxFQUEyQyxDQUEzQyxFQUE2QyxDQUE3QyxFQUErQyxDQUEvQyxFQUFpRCxDQUFqRCxFQUFtRCxDQUFuRCxFQUFxRCxDQUFyRCxFQUF1RCxDQUF2RCxFQUF5RCxDQUF6RCxDQUZEO0FBR0xDLGNBQVUsRUFBRUMsSUFBSSxDQUFDQyxHQUFMLENBQVMsSUFBVCxFQUFlLENBQWYsRUFBa0IsQ0FBbEIsQ0FIUDtBQUlMQyxpQkFBYSxFQUFFLEtBQUksRUFBSixHQUFTLElBQVQsR0FBZ0IsSUFKMUI7QUFLTEMsU0FBSyxFQUFDLE9BTEQ7QUFPTEMsY0FBVSxFQUFFO0FBQ1JDLGFBQU8sRUFBRSxLQUREO0FBR1JGLFdBQUssRUFBRSxTQUhDO0FBSVJHLFdBQUssRUFBRSxPQUpDO0FBS1JDLE9BQUMsRUFBRSxDQUFDLEVBTEk7QUFNUkMsT0FBQyxFQUFFLEVBTks7QUFPUkMsV0FBSyxFQUFFO0FBQ0hDLGdCQUFRLEVBQUUsTUFEUDtBQUVIQyxrQkFBVSxFQUFFO0FBRlQ7QUFQQztBQVBQLEdBQUQsRUFvQlI7QUFDSWQsUUFBSSxFQUFFLE1BRFY7QUFFSUMsUUFBSSxFQUFFLENBQUMsSUFBRCxFQUFNLElBQU4sRUFBVyxHQUFYLEVBQWUsR0FBZixFQUFtQixJQUFuQixFQUF3QixDQUF4QixFQUEwQixDQUExQixFQUE0QixJQUE1QixFQUFpQyxLQUFqQyxFQUF1QyxLQUF2QyxFQUE2QyxFQUE3QyxFQUFnRCxJQUFoRCxFQUFxRCxFQUFyRCxFQUF3RCxLQUF4RCxFQUE4RCxJQUE5RCxFQUFtRSxHQUFuRSxFQUF1RSxFQUF2RSxFQUEwRSxHQUExRSxFQUE4RSxDQUE5RSxFQUFnRixDQUFoRixFQUFrRixJQUFsRixFQUF1RixHQUF2RixFQUEyRixDQUEzRixFQUE2RixJQUE3RixDQUZWO0FBR0lDLGNBQVUsRUFBRUMsSUFBSSxDQUFDQyxHQUFMLENBQVMsSUFBVCxFQUFlLENBQWYsRUFBa0IsQ0FBbEIsQ0FIaEI7QUFJSUMsaUJBQWEsRUFBRSxLQUFJLEVBQUosR0FBUSxJQUFSLEdBQWUsSUFKbEM7QUFLSUMsU0FBSyxFQUFDLEtBTFY7QUFNSUMsY0FBVSxFQUFFO0FBQ1JDLGFBQU8sRUFBRSxLQUREO0FBR1JGLFdBQUssRUFBRSxTQUhDO0FBSVJHLFdBQUssRUFBRSxPQUpDO0FBS1JDLE9BQUMsRUFBRSxDQUFDLEVBTEk7QUFNUkMsT0FBQyxFQUFFLEVBTks7QUFPUkMsV0FBSyxFQUFFO0FBQ0hDLGdCQUFRLEVBQUUsTUFEUDtBQUVIQyxrQkFBVSxFQUFFO0FBRlQ7QUFQQztBQU5oQixHQXBCUTtBQVZJLENBQWhCOztJQXFETUMsVTs7Ozs7QUFDRix3QkFBYTtBQUFBOztBQUFBO0FBRVo7Ozs7NkJBQ0c7QUFDSixhQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSixNQUFDLGdFQUFEO0FBQ0Usa0JBQVUsRUFBRUMsaURBRGQ7QUFFRSxlQUFPLEVBQUV2QixPQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFESSxDQURKO0FBU0g7Ozs7RUFkd0J3Qiw0Q0FBSyxDQUFDQyxTOztBQWdCaEJILHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxkYXNoYm9hcmRwYWdlLmpzLmFiZTQ4NGZlMjJjZmM5MmRkMjE2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIaWdoY2hhcnRzIGZyb20gJ2hpZ2hjaGFydHMnO1xyXG5pbXBvcnQgSGlnaGNoYXJ0c1JlYWN0IGZyb20gJ2hpZ2hjaGFydHMtcmVhY3Qtb2ZmaWNpYWwnO1xyXG5cclxuY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIFxyXG4gICAgY2hhcnQ6IHtcclxuICAgICAgICB0eXBlOiAnc3BsaW5lJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XCIjRjlGOUY5XCIsXHJcbiAgICAgIH0sXHJcbiAgICB0aXRsZToge1xyXG4gICAgICB0ZXh0OiAnJ1xyXG4gICAgfSxcclxuXHJcbiAgICBzZXJpZXM6IFt7XHJcbiAgICAgICAgbmFtZTogJ0FsZXJ0cycsXHJcbiAgICAgICAgZGF0YTogWzksIDYsIDUsIDUsIDcsIDQsNCw0LDUsMjAsMTAsMTYsMTAsMTAsNywxLDcsNSwzLDQsMyw0LDUsNF0sXHJcbiAgICAgICAgcG9pbnRTdGFydDogRGF0ZS5VVEMoMjAyMCwgMCwgMCksXHJcbiAgICAgICAgcG9pbnRJbnRlcnZhbDogMjQgKjMwICogMzYwMCAqIDEwMDAsXHJcbiAgICAgICAgY29sb3I6J2dyZWVuJyxcclxuXHJcbiAgICAgICAgZGF0YUxhYmVsczoge1xyXG4gICAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbG9yOiAnI0ZGRkZGRicsXHJcbiAgICAgICAgICAgIGFsaWduOiAncmlnaHQnLFxyXG4gICAgICAgICAgICB4OiAtNjAsXHJcbiAgICAgICAgICAgIHk6IDIwLFxyXG4gICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6ICcxM3B4JyxcclxuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdWZXJkYW5hLCBzYW5zLXNlcmlmJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnUmlzaycsXHJcbiAgICAgICAgZGF0YTogWzguMjUsOS43NSw0LjUsNC41LDUuMjUsOSwzLDEzLjUsMTUuNzUsMjcuNzUsMTIsMTkuNSwxMiwxOC43NSwxNi41LDEuNSwxMiw0LjUsMyw5LDMuNzUsNC41LDksMy43NSBdLFxyXG4gICAgICAgIHBvaW50U3RhcnQ6IERhdGUuVVRDKDIwMjAsIDAsIDApLFxyXG4gICAgICAgIHBvaW50SW50ZXJ2YWw6IDI0ICozMCogMzYwMCAqIDEwMDAsXHJcbiAgICAgICAgY29sb3I6J3JlZCcsXHJcbiAgICAgICAgZGF0YUxhYmVsczoge1xyXG4gICAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbG9yOiAnI0ZGRkZGRicsXHJcbiAgICAgICAgICAgIGFsaWduOiAncmlnaHQnLFxyXG4gICAgICAgICAgICB4OiAtNjAsXHJcbiAgICAgICAgICAgIHk6IDIwLFxyXG4gICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6ICcxM3B4JyxcclxuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdWZXJkYW5hLCBzYW5zLXNlcmlmJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXVxyXG5cclxuICB9XHJcbmNsYXNzIExpbmVDaGFydDEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKClcclxuICAgIH1cclxucmVuZGVyKCl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgIDxIaWdoY2hhcnRzUmVhY3RcclxuICAgICAgaGlnaGNoYXJ0cz17SGlnaGNoYXJ0c31cclxuICAgICAgb3B0aW9ucz17b3B0aW9uc31cclxuICAgIC8+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTGluZUNoYXJ0MTsiXSwic291cmNlUm9vdCI6IiJ9