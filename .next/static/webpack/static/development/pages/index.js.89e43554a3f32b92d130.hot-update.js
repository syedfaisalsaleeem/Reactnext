webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./components/navigation.js":
/*!**********************************!*\
  !*** ./components/navigation.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _alertsdropdown_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./alertsdropdown.js */ "./components/alertsdropdown.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");







var _jsxFileName = "E:\\reactnext\\components\\navigation.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var Navigation = /*#__PURE__*/function (_React$Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Navigation, _React$Component);

  var _super = _createSuper(Navigation);

  function Navigation(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Navigation);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "backdropClickHandler", function () {
      _this.setState(function (prevState) {
        return {
          show: !prevState.show
        };
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "backdropClickHandler1", function () {
      _this.setState(function (prevState) {
        return {
          showa: !prevState.showa
        };
      });
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "backdropClickHandler2", function () {
      _this.setState(function (prevState) {
        return {
          showb: !prevState.showb
        };
      });
    });

    _this.state = {
      show: false,
      showa: false,
      showb: false
    };
    _this.backdropClickHandlert = _this.backdropClickHandlert.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.backdropClickHandlerf = _this.backdropClickHandlerf.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.backdropClickHandler1t = _this.backdropClickHandler1t.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.backdropClickHandler1f = _this.backdropClickHandler1f.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.twofunctionso = _this.twofunctionso.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.twofunctionsf = _this.twofunctionsf.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.twofunctionso1 = _this.twofunctionso1.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    _this.twofunctionsf1 = _this.twofunctionsf1.bind(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this));
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Navigation, [{
    key: "backdropClickHandlert",
    value: function backdropClickHandlert() {
      this.setState({
        show: true
      });
    }
  }, {
    key: "backdropClickHandlerf",
    value: function backdropClickHandlerf() {
      this.setState({
        show: false
      });
    }
  }, {
    key: "backdropClickHandler1t",
    value: function backdropClickHandler1t() {
      this.setState({
        showa: true
      });
    }
  }, {
    key: "backdropClickHandler1f",
    value: function backdropClickHandler1f() {
      this.setState({
        showa: false
      });
    }
  }, {
    key: "twofunctionso",
    value: function twofunctionso() {
      this.backdropClickHandlert();
      this.backdropClickHandler1t();
    }
  }, {
    key: "twofunctionsf",
    value: function twofunctionsf() {
      this.backdropClickHandlerf();
      this.backdropClickHandler1f();
    }
  }, {
    key: "twofunctionso1",
    value: function twofunctionso1() {
      this.backdropClickHandlert();
      this.backdropClickHandler2();
    }
  }, {
    key: "twofunctionsf1",
    value: function twofunctionsf1() {
      this.backdropClickHandlerf();
      this.backdropClickHandler2();
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "jsx-1990242638",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 5
        }
      }, __jsx("nav", {
        className: "jsx-1990242638" + " " + "designing",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 9
        }
      }, __jsx("li", {
        className: "jsx-1990242638" + " " + "logo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 13
        }
      }, " ", __jsx("img", {
        src: "out.png",
        className: "jsx-1990242638",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 35
        }
      }), "  "), __jsx("li", {
        onMouseEnter: this.backdropClickHandlert,
        onMouseLeave: this.backdropClickHandlerf,
        className: "jsx-1990242638" + " " + "link1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 13
        }
      }, " Exposed Information "), __jsx("li", {
        className: "jsx-1990242638" + " " + "link2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 13
        }
      }, " Assets "), __jsx("li", {
        className: "jsx-1990242638" + " " + "link3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 13
        }
      }, " Support "), __jsx("li", {
        className: "jsx-1990242638" + " " + "spacer",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 13
        }
      }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_9___default.a, {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 13
        }
      }, __jsx("a", {
        className: "jsx-1990242638",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 29
        }
      }, __jsx("img", {
        src: "usericon.png",
        className: "jsx-1990242638" + " " + "userlogo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 32
        }
      }))), __jsx("li", {
        className: "jsx-1990242638" + " " + "demoaccount",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 13
        }
      }, " Demo account "), __jsx("li", {
        className: "jsx-1990242638",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 13
        }
      }, " ", __jsx("img", {
        src: "out.png",
        className: "jsx-1990242638" + " " + "logo1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 19
        }
      }), " ")), __jsx("div", {
        style: {
          display: this.state.show ? "flex" : "none"
        },
        onMouseEnter: this.backdropClickHandlert,
        onMouseLeave: this.backdropClickHandlerf,
        className: "jsx-1990242638" + " " + "dropdown-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }
      }, __jsx("li", {
        className: "jsx-1990242638" + " " + "spacer1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 11
        }
      }), __jsx("a", {
        href: "#",
        className: "jsx-1990242638" + " " + "dashboards",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 13
        }
      }, __jsx("img", {
        src: "squares.png",
        className: "jsx-1990242638",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 13
        }
      }), __jsx("p", {
        className: "jsx-1990242638",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 37
        }
      }, "DASHBOARDS")), __jsx("a", {
        href: "#",
        className: "jsx-1990242638",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 13
        }
      }, __jsx("img", {
        src: "search.png",
        className: "jsx-1990242638" + " " + "search",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 1
        }
      }), __jsx("pre", {
        className: "jsx-1990242638",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 1
        }
      }, " "), "KEYWORDS"), __jsx("a", {
        href: "#",
        onMouseEnter: this.backdropClickHandler1t,
        onMouseLeave: this.backdropClickHandler1f,
        className: "jsx-1990242638",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 13
        }
      }, __jsx("img", {
        src: "bell.png",
        className: "jsx-1990242638" + " " + "alerts",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 1
        }
      }), __jsx("pre", {
        className: "jsx-1990242638",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 1
        }
      }, " "), "ALERTS", __jsx("pre", {
        className: "jsx-1990242638",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 13
        }
      }, " "), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Icon"], {
        flipped: "horizontally",
        fitted: true,
        name: "caret down",
        size: "large",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110,
          columnNumber: 13
        }
      })), __jsx("a", {
        href: "#",
        onMouseEnter: this.backdropClickHandler2,
        onMouseLeave: this.backdropClickHandler2,
        className: "jsx-1990242638",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 13
        }
      }, __jsx("img", {
        src: "sheald.png",
        className: "jsx-1990242638" + " " + "sheald",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 1
        }
      }), __jsx("pre", {
        className: "jsx-1990242638",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 1
        }
      }, " "), "REMEDIATION", __jsx("pre", {
        className: "jsx-1990242638",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120,
          columnNumber: 13
        }
      }, " "), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_11__["Icon"], {
        flipped: "horizontally",
        fitted: true,
        name: "caret down",
        size: "large",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 13
        }
      })), __jsx("a", {
        href: "#",
        className: "jsx-1990242638",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 13
        }
      }, __jsx("img", {
        src: "seating.png",
        className: "jsx-1990242638" + " " + "seating",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 1
        }
      }), "SETTINGS")), __jsx("div", {
        style: {
          display: this.state.showa ? "flex" : "none"
        },
        onMouseEnter: this.twofunctionso,
        onMouseLeave: this.twofunctionsf,
        className: "jsx-1990242638" + " " + "dropdown-content1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 13
        }
      }, __jsx("a", {
        href: "#",
        className: "jsx-1990242638",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 13
        }
      }, "All Alerts"), __jsx("a", {
        href: "#",
        className: "jsx-1990242638",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 13
        }
      }, "Sensitive Information"), __jsx("a", {
        href: "#",
        className: "jsx-1990242638",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 13
        }
      }, "Discussions"), __jsx("a", {
        href: "#",
        className: "jsx-1990242638",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 13
        }
      }, "Black Markets"), __jsx("a", {
        href: "#",
        className: "jsx-1990242638",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 13
        }
      }, "Financial"), __jsx("a", {
        href: "#",
        className: "jsx-1990242638",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 13
        }
      }, "Exposed Credentials"), __jsx("a", {
        href: "#",
        className: "jsx-1990242638",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 13
        }
      }, "Personal Information"), __jsx("a", {
        href: "#",
        className: "jsx-1990242638",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 13
        }
      }, "Hacker Group Targeting"), __jsx("a", {
        href: "#",
        className: "jsx-1990242638",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 13
        }
      }, "Attack & Compromises"), __jsx("a", {
        href: "#",
        className: "jsx-1990242638",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 13
        }
      }, "Under Analysis")), __jsx("div", {
        style: {
          display: this.state.showb ? "flex" : "none"
        },
        onMouseEnter: this.twofunctionso1,
        onMouseLeave: this.twofunctionsf1,
        className: "jsx-1990242638" + " " + "dropdown-content3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 13
        }
      }, __jsx("li", {
        className: "jsx-1990242638" + " " + "spacer1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 13
        }
      }), __jsx("li", {
        href: "#",
        className: "jsx-1990242638" + " " + "dashboards",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 13
        }
      }, __jsx("p", {
        className: "jsx-1990242638",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 13
        }
      })), __jsx("li", {
        href: "#",
        className: "jsx-1990242638",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 13
        }
      }, __jsx("pre", {
        className: "jsx-1990242638",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 13
        }
      }, " ")), __jsx("li", {
        href: "#",
        className: "jsx-1990242638",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 13
        }
      }, __jsx("pre", {
        className: "jsx-1990242638",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 13
        }
      }, " "), __jsx("pre", {
        className: "jsx-1990242638",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 13
        }
      }, " ")), __jsx("li", {
        href: "#",
        className: "jsx-1990242638",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 13
        }
      }, __jsx("pre", {
        className: "jsx-1990242638",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 13
        }
      }, " "), __jsx("a", {
        className: "jsx-1990242638" + " " + "d1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 13
        }
      }, "Actions"), __jsx("pre", {
        className: "jsx-1990242638",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 13
        }
      }, "   "), __jsx("a", {
        className: "jsx-1990242638" + " " + "d2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 13
        }
      }, "Log")), __jsx("li", {
        href: "#",
        className: "jsx-1990242638",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 13
        }
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1990242638",
        __self: this
      }, ".designing.jsx-1990242638{background:black;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;}.spacer2.jsx-1990242638{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background:blue;-webkit-flex-basis:50%;-ms-flex-preferred-size:50%;flex-basis:50%;}.search.jsx-1990242638{width:24px;height:24px;}.sheald.jsx-1990242638{width:40px;height:40px;}.alerts.jsx-1990242638{width:25px;height:25px;}.designing.jsx-1990242638>li.jsx-1990242638{color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:50px;list-style:none;}.logo.jsx-1990242638{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-basis:40%;-ms-flex-preferred-size:40%;flex-basis:40%;}.link1.jsx-1990242638{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-family:'Gilroy',sans-serif;width:150px;font-size:15px;border-bottom:3px solid transparent;}.link2.jsx-1990242638{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:70px;font-family:\"Gilroy\",sans-serif;font-size:15px;border-bottom:3px solid transparent;}.link3.jsx-1990242638{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:70px;font-family:\"Gilroy\",sans-serif;font-size:15px;border-bottom:3px solid transparent;}.spacer.jsx-1990242638{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-basis:20%;-ms-flex-preferred-size:20%;flex-basis:20%;}.userlogo.jsx-1990242638{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-basis:15%;-ms-flex-preferred-size:15%;flex-basis:15%;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;background:black;height:25px;width:25px;}.demoaccount.jsx-1990242638{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;font-family:\"Gilroy\",sans-serif;font-size:14px;width:110px;}.logo1.jsx-1990242638{width:25px;height:25px;}.spacer1.jsx-1990242638{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-basis:20%;-ms-flex-preferred-size:20%;flex-basis:20%;}.dropdown-content.jsx-1990242638{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:white;min-width:160px;box-shadow:0px 8px 16px 0px rgba(0,0,0,0.2);z-index:1;position:absolute;width:100%;}.seating.jsx-1990242638{width:35px;height:30px;}.dropdown-content.jsx-1990242638>a.jsx-1990242638{color:gray;-webkit-text-decoration:none;text-decoration:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-family:'Gilroy',sans-serif;font-size:14px;text-transform:uppercase;font-weight:400;width:180px;height:70px;opacity:0.8;}.dropdown-content.jsx-1990242638 a.jsx-1990242638:hover{color:black;opacity:1;}.link1.jsx-1990242638:hover{border-bottom:3px solid #0076ff;cursor:pointer;}.dashboards.jsx-1990242638{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100px;}.dashboards.jsx-1990242638 img.jsx-1990242638{height:30px;width:30px;}.dropdown-content1.jsx-1990242638{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:white;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;box-shadow:0px 8px 16px 0px rgba(0,0,0,0.2);z-index:1;position:absolute;width:100%;margin-top:70px;}.dropdown-content1.jsx-1990242638>a.jsx-1990242638{color:gray;-webkit-text-decoration:none;text-decoration:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-family:'Gilroy',sans-serif;font-size:12px;height:60px;}.dropdown-content1.jsx-1990242638 a.jsx-1990242638:hover{color:black;}.dropdown-content3.jsx-1990242638{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:white;min-width:160px;box-shadow:0px 8px 16px 0px rgba(0,0,0,0.2);z-index:1;position:absolute;width:100%;margin-top:70px;}.dropdown-content3.jsx-1990242638>li.jsx-1990242638{color:gray;-webkit-text-decoration:none;text-decoration:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-family:'Gilroy',sans-serif;font-size:14px;text-transform:uppercase;font-weight:400;width:180px;height:60px;opacity:0.8;list-style:none;cursor:default;}.d1.jsx-1990242638{color:gray;-webkit-text-decoration:none;text-decoration:none;}.d2.jsx-1990242638{color:gray;-webkit-text-decoration:none;text-decoration:none;}.d1.jsx-1990242638:hover{color:black;cursor:pointer;}.d2.jsx-1990242638:hover{color:black;cursor:pointer;}@media (max-width:1024px){.designing.jsx-1990242638 .link1.jsx-1990242638{display:none;}.designing.jsx-1990242638 .link2.jsx-1990242638{display:none;}.designing.jsx-1990242638 .link3.jsx-1990242638{display:none;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxyZWFjdG5leHRcXGNvbXBvbmVudHNcXG5hdmlnYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0xzQixBQUdvQixBQVVQLEFBS08sQUFJSCxBQUlGLEFBSUQsQUFTRSxBQUtFLEFBT0EsQUFPQSxBQU9GLEFBTUEsQUFRRSxBQVFOLEFBU0ksQUFLQSxBQVlELEFBS0QsQUFnQnlCLEFBR00sQUFJN0IsQUFPQSxBQUlBLEFBY0EsQUFZd0IsQUFHeEIsQUFlRixBQW1CSCxBQUlBLEFBR1ksQUFDQSxBQUdELEFBSUEsQUFHQSxXQXROTixBQUlBLEFBSUEsQUE2REgsQUEwQkcsQUFLUSxBQWlEQSxBQTZCQSxBQW1CSCxBQUlBLENBN0xMLEFBdUdpQyxBQWVsQyxBQTZCMEIsQUE0Q0gsQUFDQSxDQUtqQyxBQUdBLEFBR0EsSUF0T1csS0FrSWtDLENBbEhqRCxBQUlBLEFBSUEsQUE2REEsQUEwQkEsQUFtQ0EsSUF3RXNDLEFBQ0EsS0F0RnNCLGVBQUMsY0FqQjdDLEFBaURBLEFBNkJBLEFBbUJoQixBQUlBLGFBL01lLEFBMkJFLEFBSW9CLEFBT3ZCLEFBT0EsQUFPRyxBQU1GLEFBUWMsQUFpQlosQUFLSSxBQXdDQSxBQVdBLEFBNkJBLFdBaklnQixBQU9HLENBNUJmLElBakJYLENBVk8sZUF5Q1IsV0FRSSxBQU9BLENBZEEsY0FRb0IsQUFPQSxDQWRBLEVBeUVoQixBQWlEQSxBQTZCQSxLQTdKckIsQUEyQkEsQUFJNkIsQUF5QjdCLEdBSzZCLEFBd0NSLEFBV0YsQUE2QlUsYUF2SzdCLElBVnFCLFFBa0RyQixBQU9BLENBZEEsRUFnQ3dDLGNBaERuQixrQkFpREgsQ0F3Q0csQUFpREEsQUE2QkEsY0FySE4sWUFFZixNQTJEWSxBQVdPLENBakZGLFdBOEJFLEFBMENuQixBQXNDbUIsS0FqTFAsQUFxSmtCLENBakZoQixVQWhFZCxFQWlFYSxXQUNiLENBM0NjLFlBRUcsT0F1RlEsQUFpREEsQUE2QkEsU0FwS3pCLG1DQW9FbUIsQUFnRkEsaUJBL0VELEFBZ0ZBLGdCQS9FNEIsQUFnRkEsRUE5QkEsb0JBakNQLEFBaURBLEFBNkJBLHNCQTlGM0IsQUFnRkEsRUE5QkEsUUFqRE8sQUFnQkYsQUFpREEsQUFlTSxBQWNOLEVBNUNJLGFBakNLLEFBa0RiLEFBNEJhLEdBOUZkLEFBZ0ZBLEVBOUJBLE9BaUJaLEVBbEVBLEFBZ0ZpQixFQTlCQSxTQWxDQSxBQThFQSxLQWJqQixFQTlCQSxTQWxDYyxBQThFQSxZQTdFRCxBQThFQSxZQTdFQyxBQThFQSxZQTdFZCxBQThFaUIsZ0JBRUUsZUFFbkIiLCJmaWxlIjoiRTpcXHJlYWN0bmV4dFxcY29tcG9uZW50c1xcbmF2aWdhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBBbGVydHNkcm9wZG93biBmcm9tIFwiLi9hbGVydHNkcm9wZG93bi5qc1wiXHJcbmltcG9ydCB7IEljb24gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuY2xhc3MgTmF2aWdhdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcblx0XHRzdXBlcihwcm9wcylcclxuICAgICAgICB0aGlzLnN0YXRlPXtcclxuICAgICAgICAgICAgc2hvdzpmYWxzZSxcclxuICAgICAgICAgICAgc2hvd2E6ZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3diOmZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXJ0PXRoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXJ0LmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLmJhY2tkcm9wQ2xpY2tIYW5kbGVyZj10aGlzLmJhY2tkcm9wQ2xpY2tIYW5kbGVyZi5iaW5kKHRoaXMpXHJcbiAgICAgICAgdGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcjF0PXRoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXIxdC5iaW5kKHRoaXMpXHJcbiAgICAgICAgdGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcjFmPXRoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXIxZi5iaW5kKHRoaXMpXHJcbiAgICAgICAgdGhpcy50d29mdW5jdGlvbnNvPXRoaXMudHdvZnVuY3Rpb25zby5iaW5kKHRoaXMpXHJcbiAgICAgICAgdGhpcy50d29mdW5jdGlvbnNmPXRoaXMudHdvZnVuY3Rpb25zZi5iaW5kKHRoaXMpXHJcbiAgICAgICAgdGhpcy50d29mdW5jdGlvbnNvMT10aGlzLnR3b2Z1bmN0aW9uc28xLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLnR3b2Z1bmN0aW9uc2YxPXRoaXMudHdvZnVuY3Rpb25zZjEuYmluZCh0aGlzKVxyXG5cdH1cclxuICBiYWNrZHJvcENsaWNrSGFuZGxlciA9KCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7c2hvdzogIXByZXZTdGF0ZS5zaG93fTtcclxuXHJcbiAgICAgICAgXHJcbiAgICB9KTtcclxuXHJcblxyXG4gIH07XHJcblxyXG4gICAgYmFja2Ryb3BDbGlja0hhbmRsZXIxID0oKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtzaG93YTogIXByZXZTdGF0ZS5zaG93YX07ICAgICAgICBcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgfTtcclxuICAgICAgYmFja2Ryb3BDbGlja0hhbmRsZXIyID0oKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtzaG93YjogIXByZXZTdGF0ZS5zaG93Yn07ICAgICAgICBcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgfTtcclxuICBiYWNrZHJvcENsaWNrSGFuZGxlcnQoKXtcclxuICAgIHRoaXMuc2V0U3RhdGUoe3Nob3c6dHJ1ZX0pXHJcblxyXG4gIH07XHJcbiAgICBiYWNrZHJvcENsaWNrSGFuZGxlcmYoKXtcclxuICAgIHRoaXMuc2V0U3RhdGUoe3Nob3c6ZmFsc2V9KVxyXG4gIH07XHJcbiAgYmFja2Ryb3BDbGlja0hhbmRsZXIxdCgpe1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7c2hvd2E6dHJ1ZX0pXHJcblxyXG4gIH07XHJcbiAgICBiYWNrZHJvcENsaWNrSGFuZGxlcjFmKCl7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtzaG93YTpmYWxzZX0pXHJcbiAgfTtcclxuICB0d29mdW5jdGlvbnNvKCl7XHJcbiAgICB0aGlzLmJhY2tkcm9wQ2xpY2tIYW5kbGVydCgpXHJcbiAgICB0aGlzLmJhY2tkcm9wQ2xpY2tIYW5kbGVyMXQoKVxyXG4gIH1cclxuICAgIHR3b2Z1bmN0aW9uc2YoKXtcclxuICAgIHRoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXJmKClcclxuICAgIHRoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXIxZigpXHJcbiAgfVxyXG4gICAgdHdvZnVuY3Rpb25zbzEoKXtcclxuICAgIHRoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXJ0KClcclxuICAgIHRoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXIyKClcclxuICB9XHJcbiAgICB0d29mdW5jdGlvbnNmMSgpe1xyXG4gICAgdGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcmYoKVxyXG4gICAgdGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcjIoKVxyXG4gIH1cclxucmVuZGVyKCl7XHJcblx0XHRyZXR1cm4oXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZGVzaWduaW5nXCI+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsb2dvXCI+IDxpbWcgc3JjPVwib3V0LnBuZ1wiLz4gIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaW5rMVwiICAgb25Nb3VzZUVudGVyPXt0aGlzLmJhY2tkcm9wQ2xpY2tIYW5kbGVydH1cclxuICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXt0aGlzLmJhY2tkcm9wQ2xpY2tIYW5kbGVyZn1cclxuICAgPiBFeHBvc2VkIEluZm9ybWF0aW9uIDwvbGk+XHJcblxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGluazJcIj4gQXNzZXRzIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaW5rM1wiPiBTdXBwb3J0IDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzcGFjZXJcIj48L2xpPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiID48YT48aW1nIHNyYz1cInVzZXJpY29uLnBuZ1wiIGNsYXNzTmFtZT1cInVzZXJsb2dvXCIvPjwvYT48L0xpbms+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkZW1vYWNjb3VudFwiPiBEZW1vIGFjY291bnQgPC9saT5cclxuICAgICAgICAgICAgPGxpID4gPGltZyBzcmM9XCJvdXQucG5nXCIgY2xhc3NOYW1lPVwibG9nbzFcIi8+IDwvbGk+XHJcbiAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGVudFwiICAgICAgc3R5bGU9e3tkaXNwbGF5OnRoaXMuc3RhdGUuc2hvdz9cImZsZXhcIjpcIm5vbmVcIn19XHJcbiAgICAgICAgICBvbk1vdXNlRW50ZXI9e3RoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXJ0fSAgIG9uTW91c2VMZWF2ZT17dGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcmZ9ICAgID5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzcGFjZXIxXCI+PC9saT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJkYXNoYm9hcmRzXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwic3F1YXJlcy5wbmdcIi8+PHA+REFTSEJPQVJEUzwvcD5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG48aW1nIHNyYz1cInNlYXJjaC5wbmdcIiBjbGFzc05hbWU9XCJzZWFyY2hcIi8+XHJcbjxwcmU+IDwvcHJlPlxyXG4gICAgICAgICAgICBLRVlXT1JEUzwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbk1vdXNlRW50ZXI9e3RoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXIxdH1cclxuICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXt0aGlzLmJhY2tkcm9wQ2xpY2tIYW5kbGVyMWZ9XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICA+XHJcbjxpbWcgc3JjPVwiYmVsbC5wbmdcIiBjbGFzc05hbWU9XCJhbGVydHNcIi8+XHJcbjxwcmU+IDwvcHJlPlxyXG4gICAgICAgICAgICBBTEVSVFNcclxuICAgICAgICAgICAgPHByZT4gPC9wcmU+XHJcbiAgICAgICAgICAgIDxJY29uIGZsaXBwZWQ9J2hvcml6b250YWxseScgZml0dGVkIG5hbWU9J2NhcmV0IGRvd24nIHNpemU9XCJsYXJnZVwiIC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI9e3RoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXIyfVxyXG4gICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e3RoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXIyfT5cclxuPGltZyBzcmM9XCJzaGVhbGQucG5nXCIgY2xhc3NOYW1lPVwic2hlYWxkXCJcclxuLz5cclxuPHByZT4gPC9wcmU+XHJcblxyXG4gICAgICAgICAgICBSRU1FRElBVElPTlxyXG4gICAgICAgICAgICA8cHJlPiA8L3ByZT5cclxuICAgICAgICAgICAgPEljb24gZmxpcHBlZD0naG9yaXpvbnRhbGx5JyBmaXR0ZWQgbmFtZT0nY2FyZXQgZG93bicgc2l6ZT1cImxhcmdlXCIgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuPGltZyBzcmM9XCJzZWF0aW5nLnBuZ1wiIGNsYXNzTmFtZT1cInNlYXRpbmdcIi8+XHJcblxyXG4gICAgICAgICAgICBTRVRUSU5HUzwvYT5cclxuXHJcbiAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGVudDFcIiAgc3R5bGU9e3tkaXNwbGF5OnRoaXMuc3RhdGUuc2hvd2E/XCJmbGV4XCI6XCJub25lXCJ9fSBcclxuICAgICAgICAgICAgb25Nb3VzZUVudGVyPXt0aGlzLnR3b2Z1bmN0aW9uc299ICAgb25Nb3VzZUxlYXZlPXt0aGlzLnR3b2Z1bmN0aW9uc2Z9IFxyXG4gIFxyXG4gICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBBbGwgQWxlcnRzXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgU2Vuc2l0aXZlIEluZm9ybWF0aW9uPC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICBEaXNjdXNzaW9uczwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgQmxhY2sgTWFya2V0czwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgRmluYW5jaWFsPC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICBFeHBvc2VkIENyZWRlbnRpYWxzPC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICBQZXJzb25hbCBJbmZvcm1hdGlvbjwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgSGFja2VyIEdyb3VwIFRhcmdldGluZzwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgQXR0YWNrICYgQ29tcHJvbWlzZXM8L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgIFVuZGVyIEFuYWx5c2lzPC9hPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1jb250ZW50M1wiICBzdHlsZT17e2Rpc3BsYXk6dGhpcy5zdGF0ZS5zaG93Yj9cImZsZXhcIjpcIm5vbmVcIn19IFxyXG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI9e3RoaXMudHdvZnVuY3Rpb25zbzF9ICAgb25Nb3VzZUxlYXZlPXt0aGlzLnR3b2Z1bmN0aW9uc2YxfSA+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzcGFjZXIxXCI+PC9saT5cclxuICAgICAgICAgICAgPGxpIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZGFzaGJvYXJkc1wiPlxyXG4gICAgICAgICAgICA8cD48L3A+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPHByZT4gPC9wcmU+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBocmVmPVwiI1wiID5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxwcmU+IDwvcHJlPlxyXG4gICAgICAgICAgICA8cHJlPiA8L3ByZT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgIDxwcmU+IDwvcHJlPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkMVwiPkFjdGlvbnM8L2E+XHJcbiAgICAgICAgICAgIDxwcmU+ICAgPC9wcmU+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImQyXCI+TG9nPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGxpIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2xpPlxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8c3R5bGUganN4PntgXHJcbi5kZXNpZ25pbmd7XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBcclxuICBcclxuXHJcbn1cclxuLnNwYWNlcjJ7XHJcbmRpc3BsYXk6ZmxleDtcclxuYmFja2dyb3VuZDpibHVlO1xyXG5mbGV4LWJhc2lzOjUwJTtcclxufVxyXG4uc2VhcmNoe1xyXG4gICAgICAgICB3aWR0aDoyNHB4O1xyXG4gICAgaGVpZ2h0OjI0cHg7ICBcclxufVxyXG4uc2hlYWxke1xyXG4gICAgICB3aWR0aDo0MHB4O1xyXG4gICAgaGVpZ2h0OjQwcHg7ICBcclxufVxyXG4uYWxlcnRze1xyXG4gICAgd2lkdGg6MjVweDtcclxuICAgIGhlaWdodDoyNXB4O1xyXG59XHJcbi5kZXNpZ25pbmcgPmxpIHtcclxuICBjb2xvcjp3aGl0ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG5cclxuICBsaXN0LXN0eWxlOm5vbmU7IFxyXG59XHJcbi5sb2dve1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gIGZsZXgtYmFzaXM6IDQwJTtcclxufVxyXG4ubGluazF7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdHaWxyb3knLCBzYW5zLXNlcmlmO1xyXG4gIHdpZHRoOjE1MHB4O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBib3JkZXItYm90dG9tOjNweCBzb2xpZCB0cmFuc3BhcmVudDtcclxufVxyXG4ubGluazJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6NzBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkdpbHJveVwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBib3JkZXItYm90dG9tOjNweCBzb2xpZCB0cmFuc3BhcmVudDtcclxufVxyXG4ubGluazN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6NzBweDtcclxuICAgICAgIGZvbnQtZmFtaWx5OiBcIkdpbHJveVwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBib3JkZXItYm90dG9tOjNweCBzb2xpZCB0cmFuc3BhcmVudDtcclxufVxyXG4uc3BhY2Vye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1iYXNpczogMjAlO1xyXG5cclxuICBcclxufVxyXG4udXNlcmxvZ297XHJcbiAgZGlzcGxheTogZmxleDtcclxuZmxleC1iYXNpczogMTUlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIHdpZHRoOiAyNXB4O1xyXG59XHJcbi5kZW1vYWNjb3VudHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgZm9udC1mYW1pbHk6IFwiR2lscm95XCIsIHNhbnMtc2VyaWY7XHJcbiAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgd2lkdGg6IDExMHB4O1xyXG5cclxufVxyXG4ubG9nbzF7XHJcbiB3aWR0aDoyNXB4O1xyXG4gaGVpZ2h0OjI1cHg7XHJcbn1cclxuLyogRHJvcGRvd24gQnV0dG9uICovXHJcblxyXG5cclxuLyogVGhlIGNvbnRhaW5lciA8ZGl2PiAtIG5lZWRlZCB0byBwb3NpdGlvbiB0aGUgZHJvcGRvd24gY29udGVudCAqL1xyXG5cclxuLnNwYWNlcjF7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWJhc2lzOiAyMCU7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIG1pbi13aWR0aDogMTYwcHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgei1pbmRleDogMTtcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICB3aWR0aDoxMDAlO1xyXG59XHJcbi5zZWF0aW5ne1xyXG4gICAgd2lkdGg6MzVweDtcclxuICAgIGhlaWdodDozMHB4O1xyXG59XHJcbi8qIExpbmtzIGluc2lkZSB0aGUgZHJvcGRvd24gKi9cclxuLmRyb3Bkb3duLWNvbnRlbnQgPmEge1xyXG4gIGNvbG9yOiBncmF5O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnR2lscm95Jywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xyXG4gIGZvbnQtd2VpZ2h0OjQwMDtcclxuICB3aWR0aDogMTgwcHg7XHJcbiAgaGVpZ2h0OjcwcHg7XHJcbiAgb3BhY2l0eTogMC44O1xyXG59XHJcblxyXG4vKiBDaGFuZ2UgY29sb3Igb2YgZHJvcGRvd24gbGlua3Mgb24gaG92ZXIgKi9cclxuLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7Y29sb3I6IGJsYWNrO29wYWNpdHk6IDE7fVxyXG5cclxuXHJcbi5saW5rMTpob3ZlciB7Ym9yZGVyLWJvdHRvbTozcHggc29saWQgIzAwNzZmZjsgY3Vyc29yOiBwb2ludGVyO31cclxuXHJcblxyXG4uZGFzaGJvYXJkc3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxud2lkdGg6IDEwMHB4O1xyXG5cclxufVxyXG4uZGFzaGJvYXJkcyBpbWd7XHJcbiAgICBoZWlnaHQ6MzBweDtcclxuICAgIHdpZHRoOjMwcHg7XHJcbn1cclxuLmRyb3Bkb3duLWNvbnRlbnQxIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAganVzdGlmeS1jb250ZW50OnNwYWNlLWV2ZW5seTtcclxuICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICB6LWluZGV4OiAxO1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBtYXJnaW4tdG9wOjcwcHg7XHJcbn1cclxuXHJcblxyXG4uZHJvcGRvd24tY29udGVudDEgPmEge1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgXHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgZm9udC1mYW1pbHk6ICdHaWxyb3knLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuXHJcbiAgaGVpZ2h0OjYwcHg7XHJcbn1cclxuLmRyb3Bkb3duLWNvbnRlbnQxIGE6aG92ZXIge2NvbG9yOiBibGFjazt9XHJcblxyXG4uZHJvcGRvd24tY29udGVudDMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgbWluLXdpZHRoOiAxNjBweDtcclxuICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICB6LWluZGV4OiAxO1xyXG4gICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICB3aWR0aDoxMDAlO1xyXG4gIG1hcmdpbi10b3A6NzBweDtcclxufVxyXG5cclxuXHJcbi5kcm9wZG93bi1jb250ZW50MyA+bGkge1xyXG4gIGNvbG9yOiBncmF5O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnR2lscm95Jywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xyXG4gIGZvbnQtd2VpZ2h0OjQwMDtcclxuICB3aWR0aDogMTgwcHg7XHJcbiAgaGVpZ2h0OjYwcHg7XHJcbiAgb3BhY2l0eTogMC44O1xyXG4gIGxpc3Qtc3R5bGU6bm9uZTtcclxuICAgICBcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuXHJcbn1cclxuLmQxe1xyXG5jb2xvcjpncmF5O1xyXG50ZXh0LWRlY29yYXRpb246bm9uZTtcclxufVxyXG4uZDJ7XHJcbmNvbG9yOmdyYXk7XHJcbnRleHQtZGVjb3JhdGlvbjpub25lO1xyXG59XHJcbi5kMTpob3ZlciB7Y29sb3I6IGJsYWNrO2N1cnNvcjogcG9pbnRlcjt9XHJcbi5kMjpob3ZlciB7Y29sb3I6IGJsYWNrO2N1cnNvcjogcG9pbnRlcjt9XHJcbiBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAuZGVzaWduaW5nIC5saW5rMSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIC5kZXNpZ25pbmcgLmxpbmsyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLmRlc2lnbmluZyAubGluazMge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG59ICAgICAgICAgXHJcblxyXG4gICAgICAgICAgYH0gPC9zdHlsZT5cclxuICAgIFxyXG4gICAgPC9kaXY+XHJcblx0XHRcdClcclxuXHR9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbjsiXX0= */\n/*@ sourceURL=E:\\\\reactnext\\\\components\\\\navigation.js */"));
    }
  }]);

  return Navigation;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Navigation);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdmlnYXRpb24uanMiXSwibmFtZXMiOlsiTmF2aWdhdGlvbiIsInByb3BzIiwic2V0U3RhdGUiLCJwcmV2U3RhdGUiLCJzaG93Iiwic2hvd2EiLCJzaG93YiIsInN0YXRlIiwiYmFja2Ryb3BDbGlja0hhbmRsZXJ0IiwiYmluZCIsImJhY2tkcm9wQ2xpY2tIYW5kbGVyZiIsImJhY2tkcm9wQ2xpY2tIYW5kbGVyMXQiLCJiYWNrZHJvcENsaWNrSGFuZGxlcjFmIiwidHdvZnVuY3Rpb25zbyIsInR3b2Z1bmN0aW9uc2YiLCJ0d29mdW5jdGlvbnNvMSIsInR3b2Z1bmN0aW9uc2YxIiwiYmFja2Ryb3BDbGlja0hhbmRsZXIyIiwiZGlzcGxheSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztJQUNNQSxVOzs7OztBQUNMLHNCQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOOztBQURpQiwrTkFnQkssWUFBTTtBQUMxQixZQUFLQyxRQUFMLENBQWMsVUFBQ0MsU0FBRCxFQUFlO0FBQ3JCLGVBQU87QUFBQ0MsY0FBSSxFQUFFLENBQUNELFNBQVMsQ0FBQ0M7QUFBbEIsU0FBUDtBQUdQLE9BSkQ7QUFPRCxLQXhCZ0I7O0FBQUEsZ09BMEJRLFlBQU07QUFDN0IsWUFBS0YsUUFBTCxDQUFjLFVBQUNDLFNBQUQsRUFBZTtBQUNyQixlQUFPO0FBQUNFLGVBQUssRUFBRSxDQUFDRixTQUFTLENBQUNFO0FBQW5CLFNBQVA7QUFDUCxPQUZEO0FBS0QsS0FoQ2dCOztBQUFBLGdPQWlDVSxZQUFNO0FBQy9CLFlBQUtILFFBQUwsQ0FBYyxVQUFDQyxTQUFELEVBQWU7QUFDckIsZUFBTztBQUFDRyxlQUFLLEVBQUUsQ0FBQ0gsU0FBUyxDQUFDRztBQUFuQixTQUFQO0FBQ1AsT0FG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QUFBLGFBREEsRUFFQTtBQUFBLDRDQUFhLElBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGQSxFQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhBLEVBSUE7QUFBQSw0Q0FBYSxJQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKQSxDQWZBLEVBc0JBO0FBQUksWUFBSSxFQUFDLEdBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBdEJBLENBcEZSO0FBQUE7QUFBQTtBQUFBLHEwdEJBREY7QUFzV0E7Ozs7RUE5YXVCRyw0Q0FBSyxDQUFDQyxTOztBQWdiaEJwQix5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuODllNDM1NTRhM2YzMmI5MmQxMzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBBbGVydHNkcm9wZG93biBmcm9tIFwiLi9hbGVydHNkcm9wZG93bi5qc1wiXHJcbmltcG9ydCB7IEljb24gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuY2xhc3MgTmF2aWdhdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcblx0XHRzdXBlcihwcm9wcylcclxuICAgICAgICB0aGlzLnN0YXRlPXtcclxuICAgICAgICAgICAgc2hvdzpmYWxzZSxcclxuICAgICAgICAgICAgc2hvd2E6ZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3diOmZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXJ0PXRoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXJ0LmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLmJhY2tkcm9wQ2xpY2tIYW5kbGVyZj10aGlzLmJhY2tkcm9wQ2xpY2tIYW5kbGVyZi5iaW5kKHRoaXMpXHJcbiAgICAgICAgdGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcjF0PXRoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXIxdC5iaW5kKHRoaXMpXHJcbiAgICAgICAgdGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcjFmPXRoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXIxZi5iaW5kKHRoaXMpXHJcbiAgICAgICAgdGhpcy50d29mdW5jdGlvbnNvPXRoaXMudHdvZnVuY3Rpb25zby5iaW5kKHRoaXMpXHJcbiAgICAgICAgdGhpcy50d29mdW5jdGlvbnNmPXRoaXMudHdvZnVuY3Rpb25zZi5iaW5kKHRoaXMpXHJcbiAgICAgICAgdGhpcy50d29mdW5jdGlvbnNvMT10aGlzLnR3b2Z1bmN0aW9uc28xLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLnR3b2Z1bmN0aW9uc2YxPXRoaXMudHdvZnVuY3Rpb25zZjEuYmluZCh0aGlzKVxyXG5cdH1cclxuICBiYWNrZHJvcENsaWNrSGFuZGxlciA9KCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7c2hvdzogIXByZXZTdGF0ZS5zaG93fTtcclxuXHJcbiAgICAgICAgXHJcbiAgICB9KTtcclxuXHJcblxyXG4gIH07XHJcblxyXG4gICAgYmFja2Ryb3BDbGlja0hhbmRsZXIxID0oKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtzaG93YTogIXByZXZTdGF0ZS5zaG93YX07ICAgICAgICBcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgfTtcclxuICAgICAgYmFja2Ryb3BDbGlja0hhbmRsZXIyID0oKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtzaG93YjogIXByZXZTdGF0ZS5zaG93Yn07ICAgICAgICBcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgfTtcclxuICBiYWNrZHJvcENsaWNrSGFuZGxlcnQoKXtcclxuICAgIHRoaXMuc2V0U3RhdGUoe3Nob3c6dHJ1ZX0pXHJcblxyXG4gIH07XHJcbiAgICBiYWNrZHJvcENsaWNrSGFuZGxlcmYoKXtcclxuICAgIHRoaXMuc2V0U3RhdGUoe3Nob3c6ZmFsc2V9KVxyXG4gIH07XHJcbiAgYmFja2Ryb3BDbGlja0hhbmRsZXIxdCgpe1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7c2hvd2E6dHJ1ZX0pXHJcblxyXG4gIH07XHJcbiAgICBiYWNrZHJvcENsaWNrSGFuZGxlcjFmKCl7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtzaG93YTpmYWxzZX0pXHJcbiAgfTtcclxuICB0d29mdW5jdGlvbnNvKCl7XHJcbiAgICB0aGlzLmJhY2tkcm9wQ2xpY2tIYW5kbGVydCgpXHJcbiAgICB0aGlzLmJhY2tkcm9wQ2xpY2tIYW5kbGVyMXQoKVxyXG4gIH1cclxuICAgIHR3b2Z1bmN0aW9uc2YoKXtcclxuICAgIHRoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXJmKClcclxuICAgIHRoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXIxZigpXHJcbiAgfVxyXG4gICAgdHdvZnVuY3Rpb25zbzEoKXtcclxuICAgIHRoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXJ0KClcclxuICAgIHRoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXIyKClcclxuICB9XHJcbiAgICB0d29mdW5jdGlvbnNmMSgpe1xyXG4gICAgdGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcmYoKVxyXG4gICAgdGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcjIoKVxyXG4gIH1cclxucmVuZGVyKCl7XHJcblx0XHRyZXR1cm4oXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZGVzaWduaW5nXCI+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsb2dvXCI+IDxpbWcgc3JjPVwib3V0LnBuZ1wiLz4gIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaW5rMVwiICAgb25Nb3VzZUVudGVyPXt0aGlzLmJhY2tkcm9wQ2xpY2tIYW5kbGVydH1cclxuICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXt0aGlzLmJhY2tkcm9wQ2xpY2tIYW5kbGVyZn1cclxuICAgPiBFeHBvc2VkIEluZm9ybWF0aW9uIDwvbGk+XHJcblxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGluazJcIj4gQXNzZXRzIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaW5rM1wiPiBTdXBwb3J0IDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzcGFjZXJcIj48L2xpPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiID48YT48aW1nIHNyYz1cInVzZXJpY29uLnBuZ1wiIGNsYXNzTmFtZT1cInVzZXJsb2dvXCIvPjwvYT48L0xpbms+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkZW1vYWNjb3VudFwiPiBEZW1vIGFjY291bnQgPC9saT5cclxuICAgICAgICAgICAgPGxpID4gPGltZyBzcmM9XCJvdXQucG5nXCIgY2xhc3NOYW1lPVwibG9nbzFcIi8+IDwvbGk+XHJcbiAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGVudFwiICAgICAgc3R5bGU9e3tkaXNwbGF5OnRoaXMuc3RhdGUuc2hvdz9cImZsZXhcIjpcIm5vbmVcIn19XHJcbiAgICAgICAgICBvbk1vdXNlRW50ZXI9e3RoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXJ0fSAgIG9uTW91c2VMZWF2ZT17dGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcmZ9ICAgID5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzcGFjZXIxXCI+PC9saT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJkYXNoYm9hcmRzXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwic3F1YXJlcy5wbmdcIi8+PHA+REFTSEJPQVJEUzwvcD5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG48aW1nIHNyYz1cInNlYXJjaC5wbmdcIiBjbGFzc05hbWU9XCJzZWFyY2hcIi8+XHJcbjxwcmU+IDwvcHJlPlxyXG4gICAgICAgICAgICBLRVlXT1JEUzwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbk1vdXNlRW50ZXI9e3RoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXIxdH1cclxuICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXt0aGlzLmJhY2tkcm9wQ2xpY2tIYW5kbGVyMWZ9XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICA+XHJcbjxpbWcgc3JjPVwiYmVsbC5wbmdcIiBjbGFzc05hbWU9XCJhbGVydHNcIi8+XHJcbjxwcmU+IDwvcHJlPlxyXG4gICAgICAgICAgICBBTEVSVFNcclxuICAgICAgICAgICAgPHByZT4gPC9wcmU+XHJcbiAgICAgICAgICAgIDxJY29uIGZsaXBwZWQ9J2hvcml6b250YWxseScgZml0dGVkIG5hbWU9J2NhcmV0IGRvd24nIHNpemU9XCJsYXJnZVwiIC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI9e3RoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXIyfVxyXG4gICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e3RoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXIyfT5cclxuPGltZyBzcmM9XCJzaGVhbGQucG5nXCIgY2xhc3NOYW1lPVwic2hlYWxkXCJcclxuLz5cclxuPHByZT4gPC9wcmU+XHJcblxyXG4gICAgICAgICAgICBSRU1FRElBVElPTlxyXG4gICAgICAgICAgICA8cHJlPiA8L3ByZT5cclxuICAgICAgICAgICAgPEljb24gZmxpcHBlZD0naG9yaXpvbnRhbGx5JyBmaXR0ZWQgbmFtZT0nY2FyZXQgZG93bicgc2l6ZT1cImxhcmdlXCIgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuPGltZyBzcmM9XCJzZWF0aW5nLnBuZ1wiIGNsYXNzTmFtZT1cInNlYXRpbmdcIi8+XHJcblxyXG4gICAgICAgICAgICBTRVRUSU5HUzwvYT5cclxuXHJcbiAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGVudDFcIiAgc3R5bGU9e3tkaXNwbGF5OnRoaXMuc3RhdGUuc2hvd2E/XCJmbGV4XCI6XCJub25lXCJ9fSBcclxuICAgICAgICAgICAgb25Nb3VzZUVudGVyPXt0aGlzLnR3b2Z1bmN0aW9uc299ICAgb25Nb3VzZUxlYXZlPXt0aGlzLnR3b2Z1bmN0aW9uc2Z9IFxyXG4gIFxyXG4gICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBBbGwgQWxlcnRzXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgU2Vuc2l0aXZlIEluZm9ybWF0aW9uPC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICBEaXNjdXNzaW9uczwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgQmxhY2sgTWFya2V0czwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgRmluYW5jaWFsPC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICBFeHBvc2VkIENyZWRlbnRpYWxzPC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICBQZXJzb25hbCBJbmZvcm1hdGlvbjwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgSGFja2VyIEdyb3VwIFRhcmdldGluZzwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgQXR0YWNrICYgQ29tcHJvbWlzZXM8L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgIFVuZGVyIEFuYWx5c2lzPC9hPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1jb250ZW50M1wiICBzdHlsZT17e2Rpc3BsYXk6dGhpcy5zdGF0ZS5zaG93Yj9cImZsZXhcIjpcIm5vbmVcIn19IFxyXG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI9e3RoaXMudHdvZnVuY3Rpb25zbzF9ICAgb25Nb3VzZUxlYXZlPXt0aGlzLnR3b2Z1bmN0aW9uc2YxfSA+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzcGFjZXIxXCI+PC9saT5cclxuICAgICAgICAgICAgPGxpIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZGFzaGJvYXJkc1wiPlxyXG4gICAgICAgICAgICA8cD48L3A+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPHByZT4gPC9wcmU+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBocmVmPVwiI1wiID5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxwcmU+IDwvcHJlPlxyXG4gICAgICAgICAgICA8cHJlPiA8L3ByZT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgIDxwcmU+IDwvcHJlPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkMVwiPkFjdGlvbnM8L2E+XHJcbiAgICAgICAgICAgIDxwcmU+ICAgPC9wcmU+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImQyXCI+TG9nPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGxpIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2xpPlxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8c3R5bGUganN4PntgXHJcbi5kZXNpZ25pbmd7XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBcclxuICBcclxuXHJcbn1cclxuLnNwYWNlcjJ7XHJcbmRpc3BsYXk6ZmxleDtcclxuYmFja2dyb3VuZDpibHVlO1xyXG5mbGV4LWJhc2lzOjUwJTtcclxufVxyXG4uc2VhcmNoe1xyXG4gICAgICAgICB3aWR0aDoyNHB4O1xyXG4gICAgaGVpZ2h0OjI0cHg7ICBcclxufVxyXG4uc2hlYWxke1xyXG4gICAgICB3aWR0aDo0MHB4O1xyXG4gICAgaGVpZ2h0OjQwcHg7ICBcclxufVxyXG4uYWxlcnRze1xyXG4gICAgd2lkdGg6MjVweDtcclxuICAgIGhlaWdodDoyNXB4O1xyXG59XHJcbi5kZXNpZ25pbmcgPmxpIHtcclxuICBjb2xvcjp3aGl0ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG5cclxuICBsaXN0LXN0eWxlOm5vbmU7IFxyXG59XHJcbi5sb2dve1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gIGZsZXgtYmFzaXM6IDQwJTtcclxufVxyXG4ubGluazF7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdHaWxyb3knLCBzYW5zLXNlcmlmO1xyXG4gIHdpZHRoOjE1MHB4O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBib3JkZXItYm90dG9tOjNweCBzb2xpZCB0cmFuc3BhcmVudDtcclxufVxyXG4ubGluazJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6NzBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkdpbHJveVwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBib3JkZXItYm90dG9tOjNweCBzb2xpZCB0cmFuc3BhcmVudDtcclxufVxyXG4ubGluazN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6NzBweDtcclxuICAgICAgIGZvbnQtZmFtaWx5OiBcIkdpbHJveVwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBib3JkZXItYm90dG9tOjNweCBzb2xpZCB0cmFuc3BhcmVudDtcclxufVxyXG4uc3BhY2Vye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1iYXNpczogMjAlO1xyXG5cclxuICBcclxufVxyXG4udXNlcmxvZ297XHJcbiAgZGlzcGxheTogZmxleDtcclxuZmxleC1iYXNpczogMTUlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIHdpZHRoOiAyNXB4O1xyXG59XHJcbi5kZW1vYWNjb3VudHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgZm9udC1mYW1pbHk6IFwiR2lscm95XCIsIHNhbnMtc2VyaWY7XHJcbiAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgd2lkdGg6IDExMHB4O1xyXG5cclxufVxyXG4ubG9nbzF7XHJcbiB3aWR0aDoyNXB4O1xyXG4gaGVpZ2h0OjI1cHg7XHJcbn1cclxuLyogRHJvcGRvd24gQnV0dG9uICovXHJcblxyXG5cclxuLyogVGhlIGNvbnRhaW5lciA8ZGl2PiAtIG5lZWRlZCB0byBwb3NpdGlvbiB0aGUgZHJvcGRvd24gY29udGVudCAqL1xyXG5cclxuLnNwYWNlcjF7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWJhc2lzOiAyMCU7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIG1pbi13aWR0aDogMTYwcHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgei1pbmRleDogMTtcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICB3aWR0aDoxMDAlO1xyXG59XHJcbi5zZWF0aW5ne1xyXG4gICAgd2lkdGg6MzVweDtcclxuICAgIGhlaWdodDozMHB4O1xyXG59XHJcbi8qIExpbmtzIGluc2lkZSB0aGUgZHJvcGRvd24gKi9cclxuLmRyb3Bkb3duLWNvbnRlbnQgPmEge1xyXG4gIGNvbG9yOiBncmF5O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnR2lscm95Jywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xyXG4gIGZvbnQtd2VpZ2h0OjQwMDtcclxuICB3aWR0aDogMTgwcHg7XHJcbiAgaGVpZ2h0OjcwcHg7XHJcbiAgb3BhY2l0eTogMC44O1xyXG59XHJcblxyXG4vKiBDaGFuZ2UgY29sb3Igb2YgZHJvcGRvd24gbGlua3Mgb24gaG92ZXIgKi9cclxuLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7Y29sb3I6IGJsYWNrO29wYWNpdHk6IDE7fVxyXG5cclxuXHJcbi5saW5rMTpob3ZlciB7Ym9yZGVyLWJvdHRvbTozcHggc29saWQgIzAwNzZmZjsgY3Vyc29yOiBwb2ludGVyO31cclxuXHJcblxyXG4uZGFzaGJvYXJkc3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxud2lkdGg6IDEwMHB4O1xyXG5cclxufVxyXG4uZGFzaGJvYXJkcyBpbWd7XHJcbiAgICBoZWlnaHQ6MzBweDtcclxuICAgIHdpZHRoOjMwcHg7XHJcbn1cclxuLmRyb3Bkb3duLWNvbnRlbnQxIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAganVzdGlmeS1jb250ZW50OnNwYWNlLWV2ZW5seTtcclxuICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICB6LWluZGV4OiAxO1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBtYXJnaW4tdG9wOjcwcHg7XHJcbn1cclxuXHJcblxyXG4uZHJvcGRvd24tY29udGVudDEgPmEge1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgXHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgZm9udC1mYW1pbHk6ICdHaWxyb3knLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuXHJcbiAgaGVpZ2h0OjYwcHg7XHJcbn1cclxuLmRyb3Bkb3duLWNvbnRlbnQxIGE6aG92ZXIge2NvbG9yOiBibGFjazt9XHJcblxyXG4uZHJvcGRvd24tY29udGVudDMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgbWluLXdpZHRoOiAxNjBweDtcclxuICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICB6LWluZGV4OiAxO1xyXG4gICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICB3aWR0aDoxMDAlO1xyXG4gIG1hcmdpbi10b3A6NzBweDtcclxufVxyXG5cclxuXHJcbi5kcm9wZG93bi1jb250ZW50MyA+bGkge1xyXG4gIGNvbG9yOiBncmF5O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnR2lscm95Jywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xyXG4gIGZvbnQtd2VpZ2h0OjQwMDtcclxuICB3aWR0aDogMTgwcHg7XHJcbiAgaGVpZ2h0OjYwcHg7XHJcbiAgb3BhY2l0eTogMC44O1xyXG4gIGxpc3Qtc3R5bGU6bm9uZTtcclxuICAgICBcclxuICAgIGN1cnNvcjogZGVmYXVsdDtcclxuXHJcbn1cclxuLmQxe1xyXG5jb2xvcjpncmF5O1xyXG50ZXh0LWRlY29yYXRpb246bm9uZTtcclxufVxyXG4uZDJ7XHJcbmNvbG9yOmdyYXk7XHJcbnRleHQtZGVjb3JhdGlvbjpub25lO1xyXG59XHJcbi5kMTpob3ZlciB7Y29sb3I6IGJsYWNrO2N1cnNvcjogcG9pbnRlcjt9XHJcbi5kMjpob3ZlciB7Y29sb3I6IGJsYWNrO2N1cnNvcjogcG9pbnRlcjt9XHJcbiBAbWVkaWEgKG1heC13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAuZGVzaWduaW5nIC5saW5rMSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIC5kZXNpZ25pbmcgLmxpbmsyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAgLmRlc2lnbmluZyAubGluazMge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG59ICAgICAgICAgXHJcblxyXG4gICAgICAgICAgYH0gPC9zdHlsZT5cclxuICAgIFxyXG4gICAgPC9kaXY+XHJcblx0XHRcdClcclxuXHR9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbjsiXSwic291cmNlUm9vdCI6IiJ9