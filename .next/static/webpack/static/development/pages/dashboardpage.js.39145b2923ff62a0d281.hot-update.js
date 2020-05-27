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
    dateTimeLabelFormats: {
      day: '%e of %b'
    }
  },
  series: [{
    name: 'Alerts',
    data: [9, 6, 5, 5, 7, 4, 4, 4, 5, 20, 10, 16, 10, 10, 7, 1, 7, 5, 3, 4, 3, 4, 5, 4],
    pointStart: Date.UTC(2020, 0, 1),
    pointInterval: 24 * 3600 * 1000,
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
    pointStart: Date.UTC(2020, 0, 1),
    pointInterval: 24 * 3600 * 1000,
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
          lineNumber: 69,
          columnNumber: 9
        }
      }, __jsx(highcharts_react_official__WEBPACK_IMPORTED_MODULE_7___default.a, {
        highcharts: highcharts__WEBPACK_IMPORTED_MODULE_6___default.a,
        options: options,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Rhc2hib2FyZC9saW5lY2hhcnQxLmpzIl0sIm5hbWVzIjpbIm9wdGlvbnMiLCJjaGFydCIsInR5cGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0aXRsZSIsInRleHQiLCJ4QXhpcyIsImRhdGVUaW1lTGFiZWxGb3JtYXRzIiwiZGF5Iiwic2VyaWVzIiwibmFtZSIsImRhdGEiLCJwb2ludFN0YXJ0IiwiRGF0ZSIsIlVUQyIsInBvaW50SW50ZXJ2YWwiLCJjb2xvciIsImRhdGFMYWJlbHMiLCJlbmFibGVkIiwiYWxpZ24iLCJ4IiwieSIsInN0eWxlIiwiZm9udFNpemUiLCJmb250RmFtaWx5IiwiTGluZUNoYXJ0MSIsIkhpZ2hjaGFydHMiLCJSZWFjdCIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLE9BQU8sR0FBRztBQUVaQyxPQUFLLEVBQUU7QUFDSEMsUUFBSSxFQUFFLFFBREg7QUFFSEMsbUJBQWUsRUFBQztBQUZiLEdBRks7QUFNWkMsT0FBSyxFQUFFO0FBQ0xDLFFBQUksRUFBRTtBQURELEdBTks7QUFTWkMsT0FBSyxFQUFFO0FBQ0hKLFFBQUksRUFBRSxVQURIO0FBRUhLLHdCQUFvQixFQUFFO0FBQ2xCQyxTQUFHLEVBQUU7QUFEYTtBQUZuQixHQVRLO0FBZVpDLFFBQU0sRUFBRSxDQUFDO0FBQ0xDLFFBQUksRUFBRSxRQUREO0FBRUxDLFFBQUksRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQWtCLENBQWxCLEVBQW9CLENBQXBCLEVBQXNCLENBQXRCLEVBQXdCLEVBQXhCLEVBQTJCLEVBQTNCLEVBQThCLEVBQTlCLEVBQWlDLEVBQWpDLEVBQW9DLEVBQXBDLEVBQXVDLENBQXZDLEVBQXlDLENBQXpDLEVBQTJDLENBQTNDLEVBQTZDLENBQTdDLEVBQStDLENBQS9DLEVBQWlELENBQWpELEVBQW1ELENBQW5ELEVBQXFELENBQXJELEVBQXVELENBQXZELEVBQXlELENBQXpELENBRkQ7QUFHTEMsY0FBVSxFQUFFQyxJQUFJLENBQUNDLEdBQUwsQ0FBUyxJQUFULEVBQWUsQ0FBZixFQUFrQixDQUFsQixDQUhQO0FBSUxDLGlCQUFhLEVBQUUsS0FBSyxJQUFMLEdBQVksSUFKdEI7QUFLTEMsU0FBSyxFQUFDLE9BTEQ7QUFPTEMsY0FBVSxFQUFFO0FBQ1JDLGFBQU8sRUFBRSxLQUREO0FBR1JGLFdBQUssRUFBRSxTQUhDO0FBSVJHLFdBQUssRUFBRSxPQUpDO0FBS1JDLE9BQUMsRUFBRSxDQUFDLEVBTEk7QUFNUkMsT0FBQyxFQUFFLEVBTks7QUFPUkMsV0FBSyxFQUFFO0FBQ0hDLGdCQUFRLEVBQUUsTUFEUDtBQUVIQyxrQkFBVSxFQUFFO0FBRlQ7QUFQQztBQVBQLEdBQUQsRUFvQlI7QUFDSWQsUUFBSSxFQUFFLE1BRFY7QUFFSUMsUUFBSSxFQUFFLENBQUMsSUFBRCxFQUFNLElBQU4sRUFBVyxHQUFYLEVBQWUsR0FBZixFQUFtQixJQUFuQixFQUF3QixDQUF4QixFQUEwQixDQUExQixFQUE0QixJQUE1QixFQUFpQyxLQUFqQyxFQUF1QyxLQUF2QyxFQUE2QyxFQUE3QyxFQUFnRCxJQUFoRCxFQUFxRCxFQUFyRCxFQUF3RCxLQUF4RCxFQUE4RCxJQUE5RCxFQUFtRSxHQUFuRSxFQUF1RSxFQUF2RSxFQUEwRSxHQUExRSxFQUE4RSxDQUE5RSxFQUFnRixDQUFoRixFQUFrRixJQUFsRixFQUF1RixHQUF2RixFQUEyRixDQUEzRixFQUE2RixJQUE3RixDQUZWO0FBR0lDLGNBQVUsRUFBRUMsSUFBSSxDQUFDQyxHQUFMLENBQVMsSUFBVCxFQUFlLENBQWYsRUFBa0IsQ0FBbEIsQ0FIaEI7QUFJSUMsaUJBQWEsRUFBRSxLQUFLLElBQUwsR0FBWSxJQUovQjtBQUtJQyxTQUFLLEVBQUMsS0FMVjtBQU1JQyxjQUFVLEVBQUU7QUFDUkMsYUFBTyxFQUFFLEtBREQ7QUFHUkYsV0FBSyxFQUFFLFNBSEM7QUFJUkcsV0FBSyxFQUFFLE9BSkM7QUFLUkMsT0FBQyxFQUFFLENBQUMsRUFMSTtBQU1SQyxPQUFDLEVBQUUsRUFOSztBQU9SQyxXQUFLLEVBQUU7QUFDSEMsZ0JBQVEsRUFBRSxNQURQO0FBRUhDLGtCQUFVLEVBQUU7QUFGVDtBQVBDO0FBTmhCLEdBcEJRO0FBZkksQ0FBaEI7O0lBMERNQyxVOzs7OztBQUNGLHdCQUFhO0FBQUE7O0FBQUE7QUFFWjs7Ozs2QkFDRztBQUNKLGFBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNKLE1BQUMsZ0VBQUQ7QUFDRSxrQkFBVSxFQUFFQyxpREFEZDtBQUVFLGVBQU8sRUFBRTFCLE9BRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURJLENBREo7QUFTSDs7OztFQWR3QjJCLDRDQUFLLENBQUNDLFM7O0FBZ0JoQkgseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGRhc2hib2FyZHBhZ2UuanMuMzkxNDViMjkyM2ZmNjJhMGQyODEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhpZ2hjaGFydHMgZnJvbSAnaGlnaGNoYXJ0cyc7XHJcbmltcG9ydCBIaWdoY2hhcnRzUmVhY3QgZnJvbSAnaGlnaGNoYXJ0cy1yZWFjdC1vZmZpY2lhbCc7XHJcblxyXG5jb25zdCBvcHRpb25zID0ge1xyXG4gICAgXHJcbiAgICBjaGFydDoge1xyXG4gICAgICAgIHR5cGU6ICdzcGxpbmUnLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjpcIiNGOUY5RjlcIixcclxuICAgICAgfSxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgIHRleHQ6ICcnXHJcbiAgICB9LFxyXG4gICAgeEF4aXM6IHtcclxuICAgICAgICB0eXBlOiAnZGF0ZXRpbWUnLFxyXG4gICAgICAgIGRhdGVUaW1lTGFiZWxGb3JtYXRzOiB7XHJcbiAgICAgICAgICAgIGRheTogJyVlIG9mICViJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZXJpZXM6IFt7XHJcbiAgICAgICAgbmFtZTogJ0FsZXJ0cycsXHJcbiAgICAgICAgZGF0YTogWzksIDYsIDUsIDUsIDcsIDQsNCw0LDUsMjAsMTAsMTYsMTAsMTAsNywxLDcsNSwzLDQsMyw0LDUsNF0sXHJcbiAgICAgICAgcG9pbnRTdGFydDogRGF0ZS5VVEMoMjAyMCwgMCwgMSksXHJcbiAgICAgICAgcG9pbnRJbnRlcnZhbDogMjQgKiAzNjAwICogMTAwMCxcclxuICAgICAgICBjb2xvcjonZ3JlZW4nLFxyXG5cclxuICAgICAgICBkYXRhTGFiZWxzOiB7XHJcbiAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29sb3I6ICcjRkZGRkZGJyxcclxuICAgICAgICAgICAgYWxpZ246ICdyaWdodCcsXHJcbiAgICAgICAgICAgIHg6IC02MCxcclxuICAgICAgICAgICAgeTogMjAsXHJcbiAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEzcHgnLFxyXG4gICAgICAgICAgICAgICAgZm9udEZhbWlseTogJ1ZlcmRhbmEsIHNhbnMtc2VyaWYnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdSaXNrJyxcclxuICAgICAgICBkYXRhOiBbOC4yNSw5Ljc1LDQuNSw0LjUsNS4yNSw5LDMsMTMuNSwxNS43NSwyNy43NSwxMiwxOS41LDEyLDE4Ljc1LDE2LjUsMS41LDEyLDQuNSwzLDksMy43NSw0LjUsOSwzLjc1IF0sXHJcbiAgICAgICAgcG9pbnRTdGFydDogRGF0ZS5VVEMoMjAyMCwgMCwgMSksXHJcbiAgICAgICAgcG9pbnRJbnRlcnZhbDogMjQgKiAzNjAwICogMTAwMCxcclxuICAgICAgICBjb2xvcjoncmVkJyxcclxuICAgICAgICBkYXRhTGFiZWxzOiB7XHJcbiAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29sb3I6ICcjRkZGRkZGJyxcclxuICAgICAgICAgICAgYWxpZ246ICdyaWdodCcsXHJcbiAgICAgICAgICAgIHg6IC02MCxcclxuICAgICAgICAgICAgeTogMjAsXHJcbiAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEzcHgnLFxyXG4gICAgICAgICAgICAgICAgZm9udEZhbWlseTogJ1ZlcmRhbmEsIHNhbnMtc2VyaWYnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5dXHJcblxyXG4gIH1cclxuY2xhc3MgTGluZUNoYXJ0MSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKVxyXG4gICAgfVxyXG5yZW5kZXIoKXtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgPEhpZ2hjaGFydHNSZWFjdFxyXG4gICAgICBoaWdoY2hhcnRzPXtIaWdoY2hhcnRzfVxyXG4gICAgICBvcHRpb25zPXtvcHRpb25zfVxyXG4gICAgLz5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBMaW5lQ2hhcnQxOyJdLCJzb3VyY2VSb290IjoiIn0=