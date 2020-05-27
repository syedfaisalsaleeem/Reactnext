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
    type: 'spline'
  },
  title: {
    text: ''
  },
  series: [{
    name: 'Alerts',
    data: [9, 6, 5, 5, 7, 4, 4, 4, 5, 20, 10, 16, 10, 10, 7, 1, 7, 5, 3, 4, 3, 4, 5, 4],
    color: 'green',
    backgroundColor: "yellow",
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
          lineNumber: 59,
          columnNumber: 9
        }
      }, __jsx(highcharts_react_official__WEBPACK_IMPORTED_MODULE_7___default.a, {
        highcharts: highcharts__WEBPACK_IMPORTED_MODULE_6___default.a,
        options: options,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Rhc2hib2FyZC9saW5lY2hhcnQxLmpzIl0sIm5hbWVzIjpbIm9wdGlvbnMiLCJjaGFydCIsInR5cGUiLCJ0aXRsZSIsInRleHQiLCJzZXJpZXMiLCJuYW1lIiwiZGF0YSIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiZGF0YUxhYmVscyIsImVuYWJsZWQiLCJhbGlnbiIsIngiLCJ5Iiwic3R5bGUiLCJmb250U2l6ZSIsImZvbnRGYW1pbHkiLCJMaW5lQ2hhcnQxIiwiSGlnaGNoYXJ0cyIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUEsSUFBTUEsT0FBTyxHQUFHO0FBRVpDLE9BQUssRUFBRTtBQUNIQyxRQUFJLEVBQUU7QUFESCxHQUZLO0FBS1pDLE9BQUssRUFBRTtBQUNMQyxRQUFJLEVBQUU7QUFERCxHQUxLO0FBU1pDLFFBQU0sRUFBRSxDQUFDO0FBQ0xDLFFBQUksRUFBRSxRQUREO0FBRUxDLFFBQUksRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQWtCLENBQWxCLEVBQW9CLENBQXBCLEVBQXNCLENBQXRCLEVBQXdCLEVBQXhCLEVBQTJCLEVBQTNCLEVBQThCLEVBQTlCLEVBQWlDLEVBQWpDLEVBQW9DLEVBQXBDLEVBQXVDLENBQXZDLEVBQXlDLENBQXpDLEVBQTJDLENBQTNDLEVBQTZDLENBQTdDLEVBQStDLENBQS9DLEVBQWlELENBQWpELEVBQW1ELENBQW5ELEVBQXFELENBQXJELEVBQXVELENBQXZELEVBQXlELENBQXpELENBRkQ7QUFHTEMsU0FBSyxFQUFDLE9BSEQ7QUFJTEMsbUJBQWUsRUFBQyxRQUpYO0FBS0xDLGNBQVUsRUFBRTtBQUNSQyxhQUFPLEVBQUUsS0FERDtBQUdSSCxXQUFLLEVBQUUsU0FIQztBQUlSSSxXQUFLLEVBQUUsT0FKQztBQUtSQyxPQUFDLEVBQUUsQ0FBQyxFQUxJO0FBTVJDLE9BQUMsRUFBRSxFQU5LO0FBT1JDLFdBQUssRUFBRTtBQUNIQyxnQkFBUSxFQUFFLE1BRFA7QUFFSEMsa0JBQVUsRUFBRTtBQUZUO0FBUEM7QUFMUCxHQUFELEVBa0JSO0FBQ0lYLFFBQUksRUFBRSxNQURWO0FBRUlDLFFBQUksRUFBRSxDQUFDLElBQUQsRUFBTSxJQUFOLEVBQVcsR0FBWCxFQUFlLEdBQWYsRUFBbUIsSUFBbkIsRUFBd0IsQ0FBeEIsRUFBMEIsQ0FBMUIsRUFBNEIsSUFBNUIsRUFBaUMsS0FBakMsRUFBdUMsS0FBdkMsRUFBNkMsRUFBN0MsRUFBZ0QsSUFBaEQsRUFBcUQsRUFBckQsRUFBd0QsS0FBeEQsRUFBOEQsSUFBOUQsRUFBbUUsR0FBbkUsRUFBdUUsRUFBdkUsRUFBMEUsR0FBMUUsRUFBOEUsQ0FBOUUsRUFBZ0YsQ0FBaEYsRUFBa0YsSUFBbEYsRUFBdUYsR0FBdkYsRUFBMkYsQ0FBM0YsRUFBNkYsSUFBN0YsQ0FGVjtBQUdJQyxTQUFLLEVBQUMsS0FIVjtBQUlJRSxjQUFVLEVBQUU7QUFDUkMsYUFBTyxFQUFFLEtBREQ7QUFHUkgsV0FBSyxFQUFFLFNBSEM7QUFJUkksV0FBSyxFQUFFLE9BSkM7QUFLUkMsT0FBQyxFQUFFLENBQUMsRUFMSTtBQU1SQyxPQUFDLEVBQUUsRUFOSztBQU9SQyxXQUFLLEVBQUU7QUFDSEMsZ0JBQVEsRUFBRSxNQURQO0FBRUhDLGtCQUFVLEVBQUU7QUFGVDtBQVBDO0FBSmhCLEdBbEJRO0FBVEksQ0FBaEI7O0lBZ0RNQyxVOzs7OztBQUNGLHdCQUFhO0FBQUE7O0FBQUE7QUFFWjs7Ozs2QkFDRztBQUNKLGFBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUNKLE1BQUMsZ0VBQUQ7QUFDRSxrQkFBVSxFQUFFQyxpREFEZDtBQUVFLGVBQU8sRUFBRW5CLE9BRlg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURJLENBREo7QUFTSDs7OztFQWR3Qm9CLDRDQUFLLENBQUNDLFM7O0FBZ0JoQkgseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGRhc2hib2FyZHBhZ2UuanMuZWU3MTg2NTY2OGE3MDU3ZmRlMzYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhpZ2hjaGFydHMgZnJvbSAnaGlnaGNoYXJ0cyc7XHJcbmltcG9ydCBIaWdoY2hhcnRzUmVhY3QgZnJvbSAnaGlnaGNoYXJ0cy1yZWFjdC1vZmZpY2lhbCc7XHJcblxyXG5jb25zdCBvcHRpb25zID0ge1xyXG4gICAgXHJcbiAgICBjaGFydDoge1xyXG4gICAgICAgIHR5cGU6ICdzcGxpbmUnXHJcbiAgICAgIH0sXHJcbiAgICB0aXRsZToge1xyXG4gICAgICB0ZXh0OiAnJ1xyXG4gICAgfSxcclxuXHJcbiAgICBzZXJpZXM6IFt7XHJcbiAgICAgICAgbmFtZTogJ0FsZXJ0cycsXHJcbiAgICAgICAgZGF0YTogWzksIDYsIDUsIDUsIDcsIDQsNCw0LDUsMjAsMTAsMTYsMTAsMTAsNywxLDcsNSwzLDQsMyw0LDUsNF0sXHJcbiAgICAgICAgY29sb3I6J2dyZWVuJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XCJ5ZWxsb3dcIixcclxuICAgICAgICBkYXRhTGFiZWxzOiB7XHJcbiAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29sb3I6ICcjRkZGRkZGJyxcclxuICAgICAgICAgICAgYWxpZ246ICdyaWdodCcsXHJcbiAgICAgICAgICAgIHg6IC02MCxcclxuICAgICAgICAgICAgeTogMjAsXHJcbiAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEzcHgnLFxyXG4gICAgICAgICAgICAgICAgZm9udEZhbWlseTogJ1ZlcmRhbmEsIHNhbnMtc2VyaWYnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdSaXNrJyxcclxuICAgICAgICBkYXRhOiBbOC4yNSw5Ljc1LDQuNSw0LjUsNS4yNSw5LDMsMTMuNSwxNS43NSwyNy43NSwxMiwxOS41LDEyLDE4Ljc1LDE2LjUsMS41LDEyLDQuNSwzLDksMy43NSw0LjUsOSwzLjc1IF0sXHJcbiAgICAgICAgY29sb3I6J3JlZCcsXHJcbiAgICAgICAgZGF0YUxhYmVsczoge1xyXG4gICAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbG9yOiAnI0ZGRkZGRicsXHJcbiAgICAgICAgICAgIGFsaWduOiAncmlnaHQnLFxyXG4gICAgICAgICAgICB4OiAtNjAsXHJcbiAgICAgICAgICAgIHk6IDIwLFxyXG4gICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6ICcxM3B4JyxcclxuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdWZXJkYW5hLCBzYW5zLXNlcmlmJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXVxyXG5cclxuICB9XHJcbmNsYXNzIExpbmVDaGFydDEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKClcclxuICAgIH1cclxucmVuZGVyKCl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgIDxIaWdoY2hhcnRzUmVhY3RcclxuICAgICAgaGlnaGNoYXJ0cz17SGlnaGNoYXJ0c31cclxuICAgICAgb3B0aW9ucz17b3B0aW9uc31cclxuICAgIC8+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTGluZUNoYXJ0MTsiXSwic291cmNlUm9vdCI6IiJ9