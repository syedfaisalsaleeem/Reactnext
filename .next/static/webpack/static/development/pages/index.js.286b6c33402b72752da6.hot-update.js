webpackHotUpdate("static\\development\\pages\\index.js",{

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
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! highcharts/modules/exporting */ "./node_modules/highcharts/modules/exporting.js");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var highcharts_react_official__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! highcharts-react-official */ "./node_modules/highcharts-react-official/dist/highcharts-react.min.js");
/* harmony import */ var highcharts_react_official__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(highcharts_react_official__WEBPACK_IMPORTED_MODULE_8__);





var _jsxFileName = "E:\\reactnext\\components\\Dashboard\\linechart1.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






if (typeof highcharts__WEBPACK_IMPORTED_MODULE_6___default.a === 'object') {
  highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_7___default()(highcharts__WEBPACK_IMPORTED_MODULE_6___default.a);
}

var LineChart1 = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(LineChart1, _React$Component);

  var _super = _createSuper(LineChart1);

  function LineChart1() {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LineChart1);

    _this = _super.call(this);
    _this.state = {
      options: {
        chart: {
          type: 'spline',
          backgroundColor: "#F9F9F9"
        },
        title: {
          text: ''
        },
        yAxis: {
          title: ""
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
          color: 'green'
        }, {
          name: 'Risk',
          data: [8.25, 9.75, 4.5, 4.5, 5.25, 9, 3, 13.5, 15.75, 27.75, 12, 19.5, 12, 18.75, 16.5, 1.5, 12, 4.5, 3, 9, 3.75, 4.5, 9, 3.75],
          pointStart: Date.UTC(2019, 4, 1),
          pointInterval: 24 * 12 * 3600 * 1000,
          color: 'red'
        }]
      }
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LineChart1, [{
    key: "render",
    value: function render() {
      return __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 9
        }
      }, __jsx(highcharts_react_official__WEBPACK_IMPORTED_MODULE_8___default.a, {
        highcharts: highcharts__WEBPACK_IMPORTED_MODULE_6___default.a,
        options: options,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Rhc2hib2FyZC9saW5lY2hhcnQxLmpzIl0sIm5hbWVzIjpbIkhpZ2hjaGFydHMiLCJIaWdoY2hhcnRzRXhwb3J0aW5nIiwiTGluZUNoYXJ0MSIsInN0YXRlIiwib3B0aW9ucyIsImNoYXJ0IiwidHlwZSIsImJhY2tncm91bmRDb2xvciIsInRpdGxlIiwidGV4dCIsInlBeGlzIiwieEF4aXMiLCJkYXRlVGltZUxhYmVsRm9ybWF0cyIsImRheSIsInNlcmllcyIsIm5hbWUiLCJkYXRhIiwicG9pbnRTdGFydCIsIkRhdGUiLCJVVEMiLCJwb2ludEludGVydmFsIiwiY29sb3IiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSSxPQUFPQSxpREFBUCxLQUFzQixRQUExQixFQUFvQztBQUNoQ0MscUVBQW1CLENBQUNELGlEQUFELENBQW5CO0FBQ0g7O0lBRUtFLFU7Ozs7O0FBQ0Ysd0JBQWE7QUFBQTs7QUFBQTs7QUFDVDtBQUNBLFVBQUtDLEtBQUwsR0FBVztBQUNQQyxhQUFPLEVBQUc7QUFFTkMsYUFBSyxFQUFFO0FBQ0hDLGNBQUksRUFBRSxRQURIO0FBRUhDLHlCQUFlLEVBQUM7QUFGYixTQUZEO0FBTU5DLGFBQUssRUFBRTtBQUNMQyxjQUFJLEVBQUU7QUFERCxTQU5EO0FBU05DLGFBQUssRUFBQztBQUNGRixlQUFLLEVBQUM7QUFESixTQVRBO0FBWU5HLGFBQUssRUFBRTtBQUNITCxjQUFJLEVBQUUsVUFESDtBQUVITSw4QkFBb0IsRUFBRTtBQUNsQkMsZUFBRyxFQUFFO0FBRGE7QUFGbkIsU0FaRDtBQWtCTkMsY0FBTSxFQUFFLENBQUM7QUFDTEMsY0FBSSxFQUFFLFFBREQ7QUFFTEMsY0FBSSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBa0IsQ0FBbEIsRUFBb0IsQ0FBcEIsRUFBc0IsQ0FBdEIsRUFBd0IsRUFBeEIsRUFBMkIsRUFBM0IsRUFBOEIsRUFBOUIsRUFBaUMsRUFBakMsRUFBb0MsRUFBcEMsRUFBdUMsQ0FBdkMsRUFBeUMsQ0FBekMsRUFBMkMsQ0FBM0MsRUFBNkMsQ0FBN0MsRUFBK0MsQ0FBL0MsRUFBaUQsQ0FBakQsRUFBbUQsQ0FBbkQsRUFBcUQsQ0FBckQsRUFBdUQsQ0FBdkQsRUFBeUQsQ0FBekQsQ0FGRDtBQUdMQyxvQkFBVSxFQUFFQyxJQUFJLENBQUNDLEdBQUwsQ0FBUyxJQUFULEVBQWUsQ0FBZixFQUFrQixDQUFsQixDQUhQO0FBSUxDLHVCQUFhLEVBQUUsS0FBSSxFQUFKLEdBQVMsSUFBVCxHQUFnQixJQUoxQjtBQUtMQyxlQUFLLEVBQUM7QUFMRCxTQUFELEVBU1I7QUFDSU4sY0FBSSxFQUFFLE1BRFY7QUFFSUMsY0FBSSxFQUFFLENBQUMsSUFBRCxFQUFNLElBQU4sRUFBVyxHQUFYLEVBQWUsR0FBZixFQUFtQixJQUFuQixFQUF3QixDQUF4QixFQUEwQixDQUExQixFQUE0QixJQUE1QixFQUFpQyxLQUFqQyxFQUF1QyxLQUF2QyxFQUE2QyxFQUE3QyxFQUFnRCxJQUFoRCxFQUFxRCxFQUFyRCxFQUF3RCxLQUF4RCxFQUE4RCxJQUE5RCxFQUFtRSxHQUFuRSxFQUF1RSxFQUF2RSxFQUEwRSxHQUExRSxFQUE4RSxDQUE5RSxFQUFnRixDQUFoRixFQUFrRixJQUFsRixFQUF1RixHQUF2RixFQUEyRixDQUEzRixFQUE2RixJQUE3RixDQUZWO0FBR0lDLG9CQUFVLEVBQUVDLElBQUksQ0FBQ0MsR0FBTCxDQUFTLElBQVQsRUFBZSxDQUFmLEVBQWtCLENBQWxCLENBSGhCO0FBSUlDLHVCQUFhLEVBQUUsS0FBSSxFQUFKLEdBQVEsSUFBUixHQUFlLElBSmxDO0FBS0lDLGVBQUssRUFBQztBQUxWLFNBVFE7QUFsQkY7QUFESCxLQUFYO0FBRlM7QUEyQ1o7Ozs7NkJBQ0c7QUFDSixhQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSixNQUFDLGdFQUFEO0FBQ0Usa0JBQVUsRUFBRXJCLGlEQURkO0FBRUUsZUFBTyxFQUFFSSxPQUZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFESSxDQURKO0FBU0g7Ozs7RUF2RHdCa0IsNENBQUssQ0FBQ0MsUzs7QUF5RGhCckIseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzLjI4NmI2YzMzNDAyYjcyNzUyZGE2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIaWdoY2hhcnRzIGZyb20gJ2hpZ2hjaGFydHMnXHJcbmltcG9ydCBIaWdoY2hhcnRzRXhwb3J0aW5nIGZyb20gJ2hpZ2hjaGFydHMvbW9kdWxlcy9leHBvcnRpbmcnXHJcbmltcG9ydCBIaWdoY2hhcnRzUmVhY3QgZnJvbSAnaGlnaGNoYXJ0cy1yZWFjdC1vZmZpY2lhbCdcclxuXHJcbmlmICh0eXBlb2YgSGlnaGNoYXJ0cyA9PT0gJ29iamVjdCcpIHtcclxuICAgIEhpZ2hjaGFydHNFeHBvcnRpbmcoSGlnaGNoYXJ0cylcclxufVxyXG5cclxuY2xhc3MgTGluZUNoYXJ0MSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKVxyXG4gICAgICAgIHRoaXMuc3RhdGU9e1xyXG4gICAgICAgICAgICBvcHRpb25zIDoge1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICBjaGFydDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzcGxpbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjpcIiNGOUY5RjlcIixcclxuICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgICAgICAgIHRleHQ6ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgeUF4aXM6e1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOlwiXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB4QXhpczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdkYXRldGltZScsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZVRpbWVMYWJlbEZvcm1hdHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF5OiAnJWInXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHNlcmllczogW3tcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiAnQWxlcnRzJyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbOSwgNiwgNSwgNSwgNywgNCw0LDQsNSwyMCwxMCwxNiwxMCwxMCw3LDEsNyw1LDMsNCwzLDQsNSw0XSxcclxuICAgICAgICAgICAgICAgICAgICBwb2ludFN0YXJ0OiBEYXRlLlVUQygyMDE5LCA0LCAxKSxcclxuICAgICAgICAgICAgICAgICAgICBwb2ludEludGVydmFsOiAyNCAqMTIgKiAzNjAwICogMTAwMCxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjonZ3JlZW4nLFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6ICdSaXNrJyxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBbOC4yNSw5Ljc1LDQuNSw0LjUsNS4yNSw5LDMsMTMuNSwxNS43NSwyNy43NSwxMiwxOS41LDEyLDE4Ljc1LDE2LjUsMS41LDEyLDQuNSwzLDksMy43NSw0LjUsOSwzLjc1IF0sXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRTdGFydDogRGF0ZS5VVEMoMjAxOSwgNCwgMSksXHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRJbnRlcnZhbDogMjQgKjEyKiAzNjAwICogMTAwMCxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjoncmVkJyxcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbnJlbmRlcigpe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICA8SGlnaGNoYXJ0c1JlYWN0XHJcbiAgICAgIGhpZ2hjaGFydHM9e0hpZ2hjaGFydHN9XHJcbiAgICAgIG9wdGlvbnM9e29wdGlvbnN9XHJcbiAgICAvPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IExpbmVDaGFydDE7Il0sInNvdXJjZVJvb3QiOiIifQ==