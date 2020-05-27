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
  xAxis: {
    type: 'datetime',
    tickInterval: 1000 * 3600 * 24 * 30 // 1 month

  },
  series: [{
    name: 'Alerts',
    data: [{
      x: Date.UTC(2014, 0, 1),
      y: 1
    }, {
      x: Date.UTC(2014, 1, 1),
      y: 2
    }, {
      x: Date.UTC(2014, 2, 1),
      y: 3
    }, {
      x: Date.UTC(2014, 3, 1),
      y: 4
    }, {
      x: Date.UTC(2014, 4, 1),
      y: 5
    }, {
      x: Date.UTC(2014, 5, 1),
      y: 6
    }, {
      x: Date.UTC(2014, 6, 1),
      y: 7
    }, {
      x: Date.UTC(2014, 7, 1),
      y: 8
    }, {
      x: Date.UTC(2014, 8, 1),
      y: 9
    }, {
      x: Date.UTC(2014, 9, 1),
      y: 10
    }, {
      x: Date.UTC(2014, 10, 1),
      y: 11
    }, {
      x: Date.UTC(2014, 11, 1),
      y: 12
    }, {
      x: Date.UTC(2015, 0, 1),
      y: 1
    }, {
      x: Date.UTC(2015, 1, 1),
      y: 2
    }, {
      x: Date.UTC(2015, 2, 1),
      y: 3
    }, {
      x: Date.UTC(2015, 3, 1),
      y: 4
    }, {
      x: Date.UTC(2015, 4, 1),
      y: 5
    }],
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
          lineNumber: 79,
          columnNumber: 9
        }
      }, __jsx(highcharts_react_official__WEBPACK_IMPORTED_MODULE_7___default.a, {
        highcharts: highcharts__WEBPACK_IMPORTED_MODULE_6___default.a,
        options: options,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Rhc2hib2FyZC9saW5lY2hhcnQxLmpzIl0sIm5hbWVzIjpbIm9wdGlvbnMiLCJjaGFydCIsInR5cGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0aXRsZSIsInRleHQiLCJ4QXhpcyIsInRpY2tJbnRlcnZhbCIsInNlcmllcyIsIm5hbWUiLCJkYXRhIiwieCIsIkRhdGUiLCJVVEMiLCJ5IiwiY29sb3IiLCJkYXRhTGFiZWxzIiwiZW5hYmxlZCIsImFsaWduIiwic3R5bGUiLCJmb250U2l6ZSIsImZvbnRGYW1pbHkiLCJMaW5lQ2hhcnQxIiwiSGlnaGNoYXJ0cyIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHO0FBRVpDLE9BQUssRUFBRTtBQUNIQyxRQUFJLEVBQUUsUUFESDtBQUVIQyxtQkFBZSxFQUFDO0FBRmIsR0FGSztBQU1aQyxPQUFLLEVBQUU7QUFDTEMsUUFBSSxFQUFFO0FBREQsR0FOSztBQVNaQyxPQUFLLEVBQUU7QUFDSEosUUFBSSxFQUFFLFVBREg7QUFFSEssZ0JBQVksRUFBRSxPQUFPLElBQVAsR0FBYyxFQUFkLEdBQWtCLEVBRjdCLENBRWdDOztBQUZoQyxHQVRLO0FBYVpDLFFBQU0sRUFBRSxDQUFDO0FBQ0xDLFFBQUksRUFBRSxRQUREO0FBRUxDLFFBQUksRUFBRyxDQUFDO0FBQUNDLE9BQUMsRUFBRUMsSUFBSSxDQUFDQyxHQUFMLENBQVMsSUFBVCxFQUFjLENBQWQsRUFBZ0IsQ0FBaEIsQ0FBSjtBQUF3QkMsT0FBQyxFQUFFO0FBQTNCLEtBQUQsRUFDSDtBQUFDSCxPQUFDLEVBQUVDLElBQUksQ0FBQ0MsR0FBTCxDQUFTLElBQVQsRUFBYyxDQUFkLEVBQWdCLENBQWhCLENBQUo7QUFBd0JDLE9BQUMsRUFBRTtBQUEzQixLQURHLEVBRUg7QUFBQ0gsT0FBQyxF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QUFFLENBQUMsSUFBRCxFQUFNLElBQU4sRUFBVyxHQUFYLEVBQWUsR0FBZixFQUFtQixJQUFuQixFQUF3QixDQUF4QixFQUEwQixDQUExQixFQUE0QixJQUE1QixFQUFpQyxLQUFqQyxFQUF1QyxLQUF2QyxFQUE2QyxFQUE3QyxFQUFnRCxJQUFoRCxFQUFxRCxFQUFyRCxFQUF3RCxLQUF4RCxFQUE4RCxJQUE5RCxFQUFtRSxHQUFuRSxFQUF1RSxFQUF2RSxFQUEwRSxHQUExRSxFQUE4RSxDQUE5RSxFQUFnRixDQUFoRixFQUFrRixJQUFsRixFQUF1RixHQUF2RixFQUEyRixDQUEzRixFQUE2RixJQUE3RixDQUZWO0FBR0lLLFNBQUssRUFBQyxLQUhWO0FBSUlDLGNBQVUsRUFBRTtBQUNSQyxhQUFPLEVBQUUsS0FERDtBQUdSRixXQUFLLEVBQUUsU0FIQztBQUlSRyxXQUFLLEVBQUUsT0FKQztBQUtSUCxPQUFDLEVBQUUsQ0FBQyxFQUxJO0FBTVJHLE9BQUMsRUFBRSxFQU5LO0FBT1JLLFdBQUssRUFBRTtBQUNIQyxnQkFBUSxFQUFFLE1BRFA7QUFFSEMsa0JBQVUsRUFBRTtBQUZUO0FBUEM7QUFKaEIsR0FsQ1E7QUFiSSxDQUFoQjs7SUFvRU1DLFU7Ozs7O0FBQ0Ysd0JBQWE7QUFBQTs7QUFBQTtBQUVaOzs7OzZCQUNHO0FBQ0osYUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0osTUFBQyxnRUFBRDtBQUNFLGtCQUFVLEVBQUVDLGlEQURkO0FBRUUsZUFBTyxFQUFFdkIsT0FGWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREksQ0FESjtBQVNIOzs7O0VBZHdCd0IsNENBQUssQ0FBQ0MsUzs7QUFnQmhCSCx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcZGFzaGJvYXJkcGFnZS5qcy5jOGYwOWNlYjFjMDI0OTJmMDllZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSGlnaGNoYXJ0cyBmcm9tICdoaWdoY2hhcnRzJztcclxuaW1wb3J0IEhpZ2hjaGFydHNSZWFjdCBmcm9tICdoaWdoY2hhcnRzLXJlYWN0LW9mZmljaWFsJztcclxuXHJcbmNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICBcclxuICAgIGNoYXJ0OiB7XHJcbiAgICAgICAgdHlwZTogJ3NwbGluZScsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOlwiI0Y5RjlGOVwiLFxyXG4gICAgICB9LFxyXG4gICAgdGl0bGU6IHtcclxuICAgICAgdGV4dDogJydcclxuICAgIH0sXHJcbiAgICB4QXhpczoge1xyXG4gICAgICAgIHR5cGU6ICdkYXRldGltZScsXHJcbiAgICAgICAgdGlja0ludGVydmFsOiAxMDAwICogMzYwMCAqIDI0ICozMCAvLyAxIG1vbnRoXHJcbiAgICB9LFxyXG4gICAgc2VyaWVzOiBbe1xyXG4gICAgICAgIG5hbWU6ICdBbGVydHMnLFxyXG4gICAgICAgIGRhdGEgOiBbe3g6IERhdGUuVVRDKDIwMTQsMCwxKSwgeTogMX0sXHJcbiAgICAgICAgICAgIHt4OiBEYXRlLlVUQygyMDE0LDEsMSksIHk6IDJ9LFxyXG4gICAgICAgICAgICB7eDogRGF0ZS5VVEMoMjAxNCwyLDEpLCB5OiAzfSxcclxuICAgICAgICAgICAge3g6IERhdGUuVVRDKDIwMTQsMywxKSwgeTogNH0sXHJcbiAgICAgICAgICAgIHt4OiBEYXRlLlVUQygyMDE0LDQsMSksIHk6IDV9LFxyXG4gICAgICAgICAgICB7eDogRGF0ZS5VVEMoMjAxNCw1LDEpLCB5OiA2fSxcclxuICAgICAgICAgICAge3g6IERhdGUuVVRDKDIwMTQsNiwxKSwgeTogN30sXHJcbiAgICAgICAgICAgIHt4OiBEYXRlLlVUQygyMDE0LDcsMSksIHk6IDh9LFxyXG4gICAgICAgICAgICB7eDogRGF0ZS5VVEMoMjAxNCw4LDEpLCB5OiA5fSxcclxuICAgICAgICAgICAge3g6IERhdGUuVVRDKDIwMTQsOSwxKSwgeTogMTB9LFxyXG4gICAgICAgICAgICB7eDogRGF0ZS5VVEMoMjAxNCwxMCwxKSwgeTogMTF9LFxyXG4gICAgICAgICAgICB7eDogRGF0ZS5VVEMoMjAxNCwxMSwxKSwgeTogMTJ9LFxyXG4gICAgICAgICAgICB7eDogRGF0ZS5VVEMoMjAxNSwwLDEpLCB5OiAxfSxcclxuICAgICAgICAgICAge3g6IERhdGUuVVRDKDIwMTUsMSwxKSwgeTogMn0sXHJcbiAgICAgICAgICAgIHt4OiBEYXRlLlVUQygyMDE1LDIsMSksIHk6IDN9LFxyXG4gICAgICAgICAgICB7eDogRGF0ZS5VVEMoMjAxNSwzLDEpLCB5OiA0fSxcclxuICAgICAgICAgICAge3g6IERhdGUuVVRDKDIwMTUsNCwxKSwgeTogNX1dLFxyXG4gICAgICAgIGNvbG9yOidncmVlbicsXHJcblxyXG4gICAgICAgIGRhdGFMYWJlbHM6IHtcclxuICAgICAgICAgICAgZW5hYmxlZDogZmFsc2UsXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb2xvcjogJyNGRkZGRkYnLFxyXG4gICAgICAgICAgICBhbGlnbjogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgeDogLTYwLFxyXG4gICAgICAgICAgICB5OiAyMCxcclxuICAgICAgICAgICAgc3R5bGU6IHtcclxuICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMTNweCcsXHJcbiAgICAgICAgICAgICAgICBmb250RmFtaWx5OiAnVmVyZGFuYSwgc2Fucy1zZXJpZidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ1Jpc2snLFxyXG4gICAgICAgIGRhdGE6IFs4LjI1LDkuNzUsNC41LDQuNSw1LjI1LDksMywxMy41LDE1Ljc1LDI3Ljc1LDEyLDE5LjUsMTIsMTguNzUsMTYuNSwxLjUsMTIsNC41LDMsOSwzLjc1LDQuNSw5LDMuNzUgXSxcclxuICAgICAgICBjb2xvcjoncmVkJyxcclxuICAgICAgICBkYXRhTGFiZWxzOiB7XHJcbiAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29sb3I6ICcjRkZGRkZGJyxcclxuICAgICAgICAgICAgYWxpZ246ICdyaWdodCcsXHJcbiAgICAgICAgICAgIHg6IC02MCxcclxuICAgICAgICAgICAgeTogMjAsXHJcbiAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEzcHgnLFxyXG4gICAgICAgICAgICAgICAgZm9udEZhbWlseTogJ1ZlcmRhbmEsIHNhbnMtc2VyaWYnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5dXHJcblxyXG4gIH1cclxuY2xhc3MgTGluZUNoYXJ0MSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKVxyXG4gICAgfVxyXG5yZW5kZXIoKXtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgPEhpZ2hjaGFydHNSZWFjdFxyXG4gICAgICBoaWdoY2hhcnRzPXtIaWdoY2hhcnRzfVxyXG4gICAgICBvcHRpb25zPXtvcHRpb25zfVxyXG4gICAgLz5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBMaW5lQ2hhcnQxOyJdLCJzb3VyY2VSb290IjoiIn0=