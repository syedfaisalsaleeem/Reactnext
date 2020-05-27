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
  yAxis: {
    text: "range"
  },
  xAxis: {
    type: 'datetime',
    dateTimeLabelFormats: {
      day: '%b'
    }
  },
  series: [{
    name: 'Alerts',
    data: [9, 6, 5, 5, 7, 4, 4, 4, 5, 20, 10, 16, 10, 10, 7, 1, 7, 5, 3, 4, 3, 4, 5, 4],
    pointStart: Date.UTC(2019, 4, 1),
    pointInterval: 24 * 12 * 3600 * 1000,
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
    pointStart: Date.UTC(2019, 4, 1),
    pointInterval: 24 * 12 * 3600 * 1000,
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
          lineNumber: 72,
          columnNumber: 9
        }
      }, __jsx(highcharts_react_official__WEBPACK_IMPORTED_MODULE_7___default.a, {
        highcharts: highcharts__WEBPACK_IMPORTED_MODULE_6___default.a,
        options: options,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Rhc2hib2FyZC9saW5lY2hhcnQxLmpzIl0sIm5hbWVzIjpbIm9wdGlvbnMiLCJjaGFydCIsInR5cGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0aXRsZSIsInRleHQiLCJ5QXhpcyIsInhBeGlzIiwiZGF0ZVRpbWVMYWJlbEZvcm1hdHMiLCJkYXkiLCJzZXJpZXMiLCJuYW1lIiwiZGF0YSIsInBvaW50U3RhcnQiLCJEYXRlIiwiVVRDIiwicG9pbnRJbnRlcnZhbCIsImNvbG9yIiwiZGF0YUxhYmVscyIsImVuYWJsZWQiLCJhbGlnbiIsIngiLCJ5Iiwic3R5bGUiLCJmb250U2l6ZSIsImZvbnRGYW1pbHkiLCJMaW5lQ2hhcnQxIiwiSGlnaGNoYXJ0cyIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHO0FBRVpDLE9BQUssRUFBRTtBQUNIQyxRQUFJLEVBQUUsUUFESDtBQUVIQyxtQkFBZSxFQUFDO0FBRmIsR0FGSztBQU1aQyxPQUFLLEVBQUU7QUFDTEMsUUFBSSxFQUFFO0FBREQsR0FOSztBQVNaQyxPQUFLLEVBQUM7QUFDRkQsUUFBSSxFQUFDO0FBREgsR0FUTTtBQVlaRSxPQUFLLEVBQUU7QUFDSEwsUUFBSSxFQUFFLFVBREg7QUFFSE0sd0JBQW9CLEVBQUU7QUFDbEJDLFNBQUcsRUFBRTtBQURhO0FBRm5CLEdBWks7QUFrQlpDLFFBQU0sRUFBRSxDQUFDO0FBQ0xDLFFBQUksRUFBRSxRQUREO0FBRUxDLFFBQUksRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQWtCLENBQWxCLEVBQW9CLENBQXBCLEVBQXNCLENBQXRCLEVBQXdCLEVBQXhCLEVBQTJCLEVBQTNCLEVBQThCLEVBQTlCLEVBQWlDLEVBQWpDLEVBQW9DLEVBQXBDLEVBQXVDLENBQXZDLEVBQXlDLENBQXpDLEVBQTJDLENBQTNDLEVBQTZDLENBQTdDLEVBQStDLENBQS9DLEVBQWlELENBQWpELEVBQW1ELENBQW5ELEVBQXFELENBQXJELEVBQXVELENBQXZELEVBQXlELENBQXpELENBRkQ7QUFHTEMsY0FBVSxFQUFFQyxJQUFJLENBQUNDLEdBQUwsQ0FBUyxJQUFULEVBQWUsQ0FBZixFQUFrQixDQUFsQixDQUhQO0FBSUxDLGlCQUFhLEVBQUUsS0FBSSxFQUFKLEdBQVMsSUFBVCxHQUFnQixJQUoxQjtBQUtMQyxTQUFLLEVBQUMsT0FMRDtBQU9MQyxjQUFVLEVBQUU7QUFDUkMsYUFBTyxFQUFFLEtBREQ7QUFHUkYsV0FBSyxFQUFFLFNBSEM7QUFJUkcsV0FBSyxFQUFFLE9BSkM7QUFLUkMsT0FBQyxFQUFFLENBQUMsRUFMSTtBQU1SQyxPQUFDLEVBQUUsRUFOSztBQU9SQyxXQUFLLEVBQUU7QUFDSEMsZ0JBQVEsRUFBRSxNQURQO0FBRUhDLGtCQUFVLEVBQUU7QUFGVDtBQVBDO0FBUFAsR0FBRCxFQW9CUjtBQUNJZCxRQUFJLEVBQUUsTUFEVjtBQUVJQyxRQUFJLEVBQUUsQ0FBQyxJQUFELEVBQU0sSUFBTixFQUFXLEdBQVgsRUFBZSxHQUFmLEVBQW1CLElBQW5CLEVBQXdCLENBQXhCLEVBQTBCLENBQTFCLEVBQTRCLElBQTVCLEVBQWlDLEtBQWpDLEVBQXVDLEtBQXZDLEVBQTZDLEVBQTdDLEVBQWdELElBQWhELEVBQXFELEVBQXJELEVBQXdELEtBQXhELEVBQThELElBQTlELEVBQW1FLEdBQW5FLEVBQXVFLEVBQXZFLEVBQTBFLEdBQTFFLEVBQThFLENBQTlFLEVBQWdGLENBQWhGLEVBQWtGLElBQWxGLEVBQXVGLEdBQXZGLEVBQTJGLENBQTNGLEVBQTZGLElBQTdGLENBRlY7QUFHSUMsY0FBVSxFQUFFQyxJQUFJLENBQUNDLEdBQUwsQ0FBUyxJQUFULEVBQWUsQ0FBZixFQUFrQixDQUFsQixDQUhoQjtBQUlJQyxpQkFBYSxFQUFFLEtBQUksRUFBSixHQUFRLElBQVIsR0FBZSxJQUpsQztBQUtJQyxTQUFLLEVBQUMsS0FMVjtBQU1JQyxjQUFVLEVBQUU7QUFDUkMsYUFBTyxFQUFFLEtBREQ7QUFHUkYsV0FBSyxFQUFFLFNBSEM7QUFJUkcsV0FBSyxFQUFFLE9BSkM7QUFLUkMsT0FBQyxFQUFFLENBQUMsRUFMSTtBQU1SQyxPQUFDLEVBQUUsRUFOSztBQU9SQyxXQUFLLEVBQUU7QUFDSEMsZ0JBQVEsRUFBRSxNQURQO0FBRUhDLGtCQUFVLEVBQUU7QUFGVDtBQVBDO0FBTmhCLEdBcEJRO0FBbEJJLENBQWhCOztJQTZETUMsVTs7Ozs7QUFDRix3QkFBYTtBQUFBOztBQUFBO0FBRVo7Ozs7NkJBQ0c7QUFDSixhQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSixNQUFDLGdFQUFEO0FBQ0Usa0JBQVUsRUFBRUMsaURBRGQ7QUFFRSxlQUFPLEVBQUUzQixPQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFESSxDQURKO0FBU0g7Ozs7RUFkd0I0Qiw0Q0FBSyxDQUFDQyxTOztBQWdCaEJILHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxkYXNoYm9hcmRwYWdlLmpzLjJkMTA5N2E2MTIwOWQ0NTJiMzM2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIaWdoY2hhcnRzIGZyb20gJ2hpZ2hjaGFydHMnO1xyXG5pbXBvcnQgSGlnaGNoYXJ0c1JlYWN0IGZyb20gJ2hpZ2hjaGFydHMtcmVhY3Qtb2ZmaWNpYWwnO1xyXG5cclxuY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIFxyXG4gICAgY2hhcnQ6IHtcclxuICAgICAgICB0eXBlOiAnc3BsaW5lJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XCIjRjlGOUY5XCIsXHJcbiAgICAgIH0sXHJcbiAgICB0aXRsZToge1xyXG4gICAgICB0ZXh0OiAnJ1xyXG4gICAgfSxcclxuICAgIHlBeGlzOntcclxuICAgICAgICB0ZXh0OlwicmFuZ2VcIlxyXG4gICAgfSxcclxuICAgIHhBeGlzOiB7XHJcbiAgICAgICAgdHlwZTogJ2RhdGV0aW1lJyxcclxuICAgICAgICBkYXRlVGltZUxhYmVsRm9ybWF0czoge1xyXG4gICAgICAgICAgICBkYXk6ICclYidcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2VyaWVzOiBbe1xyXG4gICAgICAgIG5hbWU6ICdBbGVydHMnLFxyXG4gICAgICAgIGRhdGE6IFs5LCA2LCA1LCA1LCA3LCA0LDQsNCw1LDIwLDEwLDE2LDEwLDEwLDcsMSw3LDUsMyw0LDMsNCw1LDRdLFxyXG4gICAgICAgIHBvaW50U3RhcnQ6IERhdGUuVVRDKDIwMTksIDQsIDEpLFxyXG4gICAgICAgIHBvaW50SW50ZXJ2YWw6IDI0ICoxMiAqIDM2MDAgKiAxMDAwLFxyXG4gICAgICAgIGNvbG9yOidncmVlbicsXHJcblxyXG4gICAgICAgIGRhdGFMYWJlbHM6IHtcclxuICAgICAgICAgICAgZW5hYmxlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb2xvcjogJyNGRkZGRkYnLFxyXG4gICAgICAgICAgICBhbGlnbjogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgeDogLTYwLFxyXG4gICAgICAgICAgICB5OiAyMCxcclxuICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTNweCcsXHJcbiAgICAgICAgICAgICAgICBmb250RmFtaWx5OiAnVmVyZGFuYSwgc2Fucy1zZXJpZidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ1Jpc2snLFxyXG4gICAgICAgIGRhdGE6IFs4LjI1LDkuNzUsNC41LDQuNSw1LjI1LDksMywxMy41LDE1Ljc1LDI3Ljc1LDEyLDE5LjUsMTIsMTguNzUsMTYuNSwxLjUsMTIsNC41LDMsOSwzLjc1LDQuNSw5LDMuNzUgXSxcclxuICAgICAgICBwb2ludFN0YXJ0OiBEYXRlLlVUQygyMDE5LCA0LCAxKSxcclxuICAgICAgICBwb2ludEludGVydmFsOiAyNCAqMTIqIDM2MDAgKiAxMDAwLFxyXG4gICAgICAgIGNvbG9yOidyZWQnLFxyXG4gICAgICAgIGRhdGFMYWJlbHM6IHtcclxuICAgICAgICAgICAgZW5hYmxlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb2xvcjogJyNGRkZGRkYnLFxyXG4gICAgICAgICAgICBhbGlnbjogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgeDogLTYwLFxyXG4gICAgICAgICAgICB5OiAyMCxcclxuICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTNweCcsXHJcbiAgICAgICAgICAgICAgICBmb250RmFtaWx5OiAnVmVyZGFuYSwgc2Fucy1zZXJpZidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbl1cclxuXHJcbiAgfVxyXG5jbGFzcyBMaW5lQ2hhcnQxIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICBzdXBlcigpXHJcbiAgICB9XHJcbnJlbmRlcigpe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICA8SGlnaGNoYXJ0c1JlYWN0XHJcbiAgICAgIGhpZ2hjaGFydHM9e0hpZ2hjaGFydHN9XHJcbiAgICAgIG9wdGlvbnM9e29wdGlvbnN9XHJcbiAgICAvPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IExpbmVDaGFydDE7Il0sInNvdXJjZVJvb3QiOiIifQ==