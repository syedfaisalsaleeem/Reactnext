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
        className: "jsx-1836369071",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 5
        }
      }, __jsx("nav", {
        className: "jsx-1836369071" + " " + "designing",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 9
        }
      }, __jsx("li", {
        className: "jsx-1836369071" + " " + "logo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 13
        }
      }, " CYBER INTELLIGENCE HOUSE  "), __jsx("li", {
        onMouseEnter: this.backdropClickHandlert,
        onMouseLeave: this.backdropClickHandlerf,
        className: "jsx-1836369071" + " " + "link1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 13
        }
      }, " Exposed Information "), __jsx("li", {
        className: "jsx-1836369071" + " " + "link2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 13
        }
      }, " Assets "), __jsx("li", {
        className: "jsx-1836369071" + " " + "link3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 13
        }
      }, " Support "), __jsx("li", {
        className: "jsx-1836369071" + " " + "spacer",
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
        className: "jsx-1836369071",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 29
        }
      }, __jsx("img", {
        src: "usericon.png",
        className: "jsx-1836369071" + " " + "userlogo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 32
        }
      }))), __jsx("li", {
        className: "jsx-1836369071" + " " + "demoaccount",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 13
        }
      }, " Demo account "), __jsx("li", {
        className: "jsx-1836369071",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 13
        }
      }, " ", __jsx("img", {
        src: "out.png",
        className: "jsx-1836369071" + " " + "logo1",
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
        className: "jsx-1836369071" + " " + "dropdown-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }
      }, __jsx("li", {
        className: "jsx-1836369071" + " " + "spacer1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 11
        }
      }), __jsx("a", {
        href: "#",
        className: "jsx-1836369071" + " " + "dashboards",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 13
        }
      }, __jsx("img", {
        src: "squares.png",
        className: "jsx-1836369071",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 13
        }
      }), __jsx("p", {
        className: "jsx-1836369071",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 37
        }
      }, "DASHBOARDS")), __jsx("a", {
        href: "#",
        className: "jsx-1836369071",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 13
        }
      }, __jsx("img", {
        src: "search.png",
        className: "jsx-1836369071" + " " + "search",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 1
        }
      }), __jsx("pre", {
        className: "jsx-1836369071",
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
        className: "jsx-1836369071",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 13
        }
      }, __jsx("img", {
        src: "bell.png",
        className: "jsx-1836369071" + " " + "alerts",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 1
        }
      }), __jsx("pre", {
        className: "jsx-1836369071",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 1
        }
      }, " "), "ALERTS", __jsx("pre", {
        className: "jsx-1836369071",
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
        className: "jsx-1836369071",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 13
        }
      }, __jsx("img", {
        src: "sheald.png",
        className: "jsx-1836369071" + " " + "sheald",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 1
        }
      }), __jsx("pre", {
        className: "jsx-1836369071",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 1
        }
      }, " "), "REMEDIATION", __jsx("pre", {
        className: "jsx-1836369071",
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
        className: "jsx-1836369071",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 13
        }
      }, __jsx("img", {
        src: "seating.png",
        className: "jsx-1836369071" + " " + "seating",
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
        className: "jsx-1836369071" + " " + "dropdown-content1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 13
        }
      }, __jsx("a", {
        href: "#",
        className: "jsx-1836369071",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 13
        }
      }, "All Alerts"), __jsx("a", {
        href: "#",
        className: "jsx-1836369071",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 13
        }
      }, "Sensitive Information"), __jsx("a", {
        href: "#",
        className: "jsx-1836369071",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 13
        }
      }, "Discussions"), __jsx("a", {
        href: "#",
        className: "jsx-1836369071",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 13
        }
      }, "Black Markets"), __jsx("a", {
        href: "#",
        className: "jsx-1836369071",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 13
        }
      }, "Financial"), __jsx("a", {
        href: "#",
        className: "jsx-1836369071",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 13
        }
      }, "Exposed Credentials"), __jsx("a", {
        href: "#",
        className: "jsx-1836369071",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 13
        }
      }, "Personal Information"), __jsx("a", {
        href: "#",
        className: "jsx-1836369071",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 13
        }
      }, "Hacker Group Targeting"), __jsx("a", {
        href: "#",
        className: "jsx-1836369071",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 13
        }
      }, "Attack & Compromises"), __jsx("a", {
        href: "#",
        className: "jsx-1836369071",
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
        className: "jsx-1836369071" + " " + "dropdown-content3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 13
        }
      }, __jsx("li", {
        className: "jsx-1836369071" + " " + "spacer1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 13
        }
      }), __jsx("li", {
        href: "#",
        className: "jsx-1836369071" + " " + "dashboards",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 13
        }
      }, __jsx("p", {
        className: "jsx-1836369071",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 13
        }
      })), __jsx("li", {
        href: "#",
        className: "jsx-1836369071",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 13
        }
      }, __jsx("pre", {
        className: "jsx-1836369071",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170,
          columnNumber: 13
        }
      }, " ")), __jsx("li", {
        href: "#",
        className: "jsx-1836369071",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172,
          columnNumber: 13
        }
      }, __jsx("pre", {
        className: "jsx-1836369071",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 13
        }
      }, " "), __jsx("pre", {
        className: "jsx-1836369071",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 13
        }
      }, " ")), __jsx("li", {
        href: "#",
        className: "jsx-1836369071",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177,
          columnNumber: 13
        }
      }, __jsx("pre", {
        className: "jsx-1836369071",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178,
          columnNumber: 13
        }
      }, " "), __jsx("li", {
        className: "jsx-1836369071",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179,
          columnNumber: 13
        }
      }, "Actions"), __jsx("pre", {
        className: "jsx-1836369071",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180,
          columnNumber: 13
        }
      }, "   "), __jsx("li", {
        className: "jsx-1836369071",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181,
          columnNumber: 13
        }
      }, "Log")), __jsx("li", {
        href: "#",
        className: "jsx-1836369071",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184,
          columnNumber: 13
        }
      })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "1836369071",
        __self: this
      }, ".designing.jsx-1836369071{background:black;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;}.spacer2.jsx-1836369071{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background:blue;-webkit-flex-basis:50%;-ms-flex-preferred-size:50%;flex-basis:50%;}.search.jsx-1836369071{width:24px;height:24px;}.sheald.jsx-1836369071{width:40px;height:40px;}.alerts.jsx-1836369071{width:25px;height:25px;}.designing.jsx-1836369071>li.jsx-1836369071{color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:50px;list-style:none;}.logo.jsx-1836369071{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-basis:40%;-ms-flex-preferred-size:40%;flex-basis:40%;}.link1.jsx-1836369071{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-family:'Gilroy',sans-serif;width:150px;font-size:15px;border-bottom:3px solid transparent;}.link2.jsx-1836369071{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:70px;font-family:\"Gilroy\",sans-serif;font-size:15px;border-bottom:3px solid transparent;}.link3.jsx-1836369071{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:70px;font-family:\"Gilroy\",sans-serif;font-size:15px;border-bottom:3px solid transparent;}.spacer.jsx-1836369071{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-basis:20%;-ms-flex-preferred-size:20%;flex-basis:20%;}.userlogo.jsx-1836369071{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-basis:15%;-ms-flex-preferred-size:15%;flex-basis:15%;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;background:black;height:25px;width:25px;}.demoaccount.jsx-1836369071{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;font-family:\"Gilroy\",sans-serif;font-size:14px;width:110px;}.logo1.jsx-1836369071{width:25px;height:25px;}.spacer1.jsx-1836369071{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-basis:20%;-ms-flex-preferred-size:20%;flex-basis:20%;}.dropdown-content.jsx-1836369071{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:white;min-width:160px;box-shadow:0px 8px 16px 0px rgba(0,0,0,0.2);z-index:1;}.seating.jsx-1836369071{width:35px;height:30px;}.dropdown-content.jsx-1836369071>a.jsx-1836369071{color:gray;-webkit-text-decoration:none;text-decoration:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-family:'Gilroy',sans-serif;font-size:14px;text-transform:uppercase;font-weight:400;width:180px;height:70px;opacity:0.8;}.dropdown-content.jsx-1836369071 a.jsx-1836369071:hover{color:black;opacity:1;}.link1.jsx-1836369071:hover{border-bottom:3px solid #0076ff;}.dashboards.jsx-1836369071{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100px;}.dashboards.jsx-1836369071 img.jsx-1836369071{height:30px;width:30px;}.dropdown-content1.jsx-1836369071{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:white;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;box-shadow:0px 8px 16px 0px rgba(0,0,0,0.2);z-index:1;}.dropdown-content1.jsx-1836369071>a.jsx-1836369071{color:gray;-webkit-text-decoration:none;text-decoration:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-family:'Gilroy',sans-serif;font-size:12px;height:60px;}.dropdown-content1.jsx-1836369071 a.jsx-1836369071:hover{color:black;}.dropdown-content3.jsx-1836369071{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:white;min-width:160px;box-shadow:0px 8px 16px 0px rgba(0,0,0,0.2);z-index:1;}.dropdown-content3.jsx-1836369071>li.jsx-1836369071{color:gray;-webkit-text-decoration:none;text-decoration:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-family:'Gilroy',sans-serif;font-size:14px;text-transform:uppercase;font-weight:400;width:180px;height:70px;opacity:0.8;list-style:none;}.dropdown-content3.jsx-1836369071 li.jsx-1836369071:hover{color:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxyZWFjdG5leHRcXGNvbXBvbmVudHNcXG5hdmlnYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0xzQixBQUdvQixBQVVQLEFBS08sQUFJSCxBQUlGLEFBSUQsQUFTRSxBQUtFLEFBT0EsQUFPQSxBQU9GLEFBTUEsQUFRRSxBQVFOLEFBU0ksQUFLQSxBQVVELEFBS0QsQUFnQnlCLEFBR00sQUFJN0IsQUFPQSxBQUlBLEFBV0EsQUFZd0IsQUFHeEIsQUFZRixBQWdCMkIsV0F6THpCLEFBSUEsQUFJQSxBQTZESCxBQXdCRyxBQUtRLEFBOENBLEFBMEJBLENBOUpSLEFBcUdpQyxBQWVsQyxBQTBCMEIsQUErQkMsS0F4TTFCLEtBZ0lrQyxDQWhIakQsQUFJQSxBQUlBLEFBNkRBLEFBd0JBLEFBbUNBLFNBYjZDLDZCQWpCN0IsQUE4Q0EsQUEwQkEsYUFoTEQsQUEyQkUsQUFJb0IsQUFPdkIsQUFPQSxBQU9HLEFBTUYsQUFRYyxBQWlCWixBQUtJLEFBc0NBLEFBV0EsQUEwQkEsV0E1SGdCLEFBT0csQ0E1QmYsSUFqQlgsQ0FWTyxlQXlDUixXQVFJLEFBT0EsQ0FkQSxjQVFvQixBQU9BLENBZEEsRUF1RWhCLEFBOENBLEFBMEJBLEtBckpyQixBQTJCQSxBQUk2QixBQXlCN0IsR0FLNkIsQUFzQ1IsQUFXRixBQTBCVSxhQWxLN0IsSUFWcUIsUUFrRHJCLEFBT0EsQ0FkQSxFQWdDd0MsY0FoRG5CLGtCQWlESCxDQXNDRyxBQThDQSxBQTBCQSxjQTdHTixZQUVmLE1BeURZLEFBV08sQ0EvRUYsV0E4QkUsQUF3Q25CLEFBbUNtQixLQTVLUCxBQW1Ka0IsQ0EvRWhCLFVBaEVkLEVBaUVhLFdBQ2IsQ0EzQ2MsWUFFRyxPQXFGUSxBQThDQSxBQTBCQSxTQTVKekIsbUNBb0VtQixBQTJFQSxpQkExRUQsQUEyRUEsZ0JBMUU0QixBQTJFQSxFQTNCQSxvQkFqQ1AsQUE4Q0EsQUEwQkEsc0JBdEYzQixBQTJFQSxFQTNCQSxRQS9DWixBQWNpQixBQThDQSxBQWVqQixBQVdpQixFQXRDakIsYUFqQzBCLEFBK0NiLEFBeUJhLFlBeEIxQixhQS9DaUIsQUF3RUEsZ0JBdkVILEFBd0VBLFlBdkVELEFBd0VBLFlBdkVDLEFBd0VBLFlBdkVkLEFBd0VpQixnQkFFakIiLCJmaWxlIjoiRTpcXHJlYWN0bmV4dFxcY29tcG9uZW50c1xcbmF2aWdhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBBbGVydHNkcm9wZG93biBmcm9tIFwiLi9hbGVydHNkcm9wZG93bi5qc1wiXHJcbmltcG9ydCB7IEljb24gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuY2xhc3MgTmF2aWdhdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcblx0XHRzdXBlcihwcm9wcylcclxuICAgICAgICB0aGlzLnN0YXRlPXtcclxuICAgICAgICAgICAgc2hvdzpmYWxzZSxcclxuICAgICAgICAgICAgc2hvd2E6ZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3diOmZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXJ0PXRoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXJ0LmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLmJhY2tkcm9wQ2xpY2tIYW5kbGVyZj10aGlzLmJhY2tkcm9wQ2xpY2tIYW5kbGVyZi5iaW5kKHRoaXMpXHJcbiAgICAgICAgdGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcjF0PXRoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXIxdC5iaW5kKHRoaXMpXHJcbiAgICAgICAgdGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcjFmPXRoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXIxZi5iaW5kKHRoaXMpXHJcbiAgICAgICAgdGhpcy50d29mdW5jdGlvbnNvPXRoaXMudHdvZnVuY3Rpb25zby5iaW5kKHRoaXMpXHJcbiAgICAgICAgdGhpcy50d29mdW5jdGlvbnNmPXRoaXMudHdvZnVuY3Rpb25zZi5iaW5kKHRoaXMpXHJcbiAgICAgICAgdGhpcy50d29mdW5jdGlvbnNvMT10aGlzLnR3b2Z1bmN0aW9uc28xLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLnR3b2Z1bmN0aW9uc2YxPXRoaXMudHdvZnVuY3Rpb25zZjEuYmluZCh0aGlzKVxyXG5cdH1cclxuICBiYWNrZHJvcENsaWNrSGFuZGxlciA9KCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7c2hvdzogIXByZXZTdGF0ZS5zaG93fTtcclxuXHJcbiAgICAgICAgXHJcbiAgICB9KTtcclxuXHJcblxyXG4gIH07XHJcblxyXG4gICAgYmFja2Ryb3BDbGlja0hhbmRsZXIxID0oKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtzaG93YTogIXByZXZTdGF0ZS5zaG93YX07ICAgICAgICBcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgfTtcclxuICAgICAgYmFja2Ryb3BDbGlja0hhbmRsZXIyID0oKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtzaG93YjogIXByZXZTdGF0ZS5zaG93Yn07ICAgICAgICBcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgfTtcclxuICBiYWNrZHJvcENsaWNrSGFuZGxlcnQoKXtcclxuICAgIHRoaXMuc2V0U3RhdGUoe3Nob3c6dHJ1ZX0pXHJcblxyXG4gIH07XHJcbiAgICBiYWNrZHJvcENsaWNrSGFuZGxlcmYoKXtcclxuICAgIHRoaXMuc2V0U3RhdGUoe3Nob3c6ZmFsc2V9KVxyXG4gIH07XHJcbiAgYmFja2Ryb3BDbGlja0hhbmRsZXIxdCgpe1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7c2hvd2E6dHJ1ZX0pXHJcblxyXG4gIH07XHJcbiAgICBiYWNrZHJvcENsaWNrSGFuZGxlcjFmKCl7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtzaG93YTpmYWxzZX0pXHJcbiAgfTtcclxuICB0d29mdW5jdGlvbnNvKCl7XHJcbiAgICB0aGlzLmJhY2tkcm9wQ2xpY2tIYW5kbGVydCgpXHJcbiAgICB0aGlzLmJhY2tkcm9wQ2xpY2tIYW5kbGVyMXQoKVxyXG4gIH1cclxuICAgIHR3b2Z1bmN0aW9uc2YoKXtcclxuICAgIHRoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXJmKClcclxuICAgIHRoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXIxZigpXHJcbiAgfVxyXG4gICAgdHdvZnVuY3Rpb25zbzEoKXtcclxuICAgIHRoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXJ0KClcclxuICAgIHRoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXIyKClcclxuICB9XHJcbiAgICB0d29mdW5jdGlvbnNmMSgpe1xyXG4gICAgdGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcmYoKVxyXG4gICAgdGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcjIoKVxyXG4gIH1cclxucmVuZGVyKCl7XHJcblx0XHRyZXR1cm4oXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZGVzaWduaW5nXCI+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsb2dvXCI+IENZQkVSIElOVEVMTElHRU5DRSBIT1VTRSAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpbmsxXCIgICBvbk1vdXNlRW50ZXI9e3RoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXJ0fVxyXG4gICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e3RoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXJmfVxyXG4gICA+IEV4cG9zZWQgSW5mb3JtYXRpb24gPC9saT5cclxuXHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaW5rMlwiPiBBc3NldHMgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpbmszXCI+IFN1cHBvcnQgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNwYWNlclwiPjwvbGk+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgPjxhPjxpbWcgc3JjPVwidXNlcmljb24ucG5nXCIgY2xhc3NOYW1lPVwidXNlcmxvZ29cIi8+PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRlbW9hY2NvdW50XCI+IERlbW8gYWNjb3VudCA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgPiA8aW1nIHNyYz1cIm91dC5wbmdcIiBjbGFzc05hbWU9XCJsb2dvMVwiLz4gPC9saT5cclxuICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1jb250ZW50XCIgICAgICBzdHlsZT17e2Rpc3BsYXk6dGhpcy5zdGF0ZS5zaG93P1wiZmxleFwiOlwibm9uZVwifX1cclxuICAgICAgICAgIG9uTW91c2VFbnRlcj17dGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcnR9ICAgb25Nb3VzZUxlYXZlPXt0aGlzLmJhY2tkcm9wQ2xpY2tIYW5kbGVyZn0gICAgPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNwYWNlcjFcIj48L2xpPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImRhc2hib2FyZHNcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJzcXVhcmVzLnBuZ1wiLz48cD5EQVNIQk9BUkRTPC9wPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbjxpbWcgc3JjPVwic2VhcmNoLnBuZ1wiIGNsYXNzTmFtZT1cInNlYXJjaFwiLz5cclxuPHByZT4gPC9wcmU+XHJcbiAgICAgICAgICAgIEtFWVdPUkRTPC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uTW91c2VFbnRlcj17dGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcjF0fVxyXG4gICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e3RoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXIxZn1cclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgID5cclxuPGltZyBzcmM9XCJiZWxsLnBuZ1wiIGNsYXNzTmFtZT1cImFsZXJ0c1wiLz5cclxuPHByZT4gPC9wcmU+XHJcbiAgICAgICAgICAgIEFMRVJUU1xyXG4gICAgICAgICAgICA8cHJlPiA8L3ByZT5cclxuICAgICAgICAgICAgPEljb24gZmxpcHBlZD0naG9yaXpvbnRhbGx5JyBmaXR0ZWQgbmFtZT0nY2FyZXQgZG93bicgc2l6ZT1cImxhcmdlXCIgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgIG9uTW91c2VFbnRlcj17dGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcjJ9XHJcbiAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17dGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcjJ9PlxyXG48aW1nIHNyYz1cInNoZWFsZC5wbmdcIiBjbGFzc05hbWU9XCJzaGVhbGRcIlxyXG4vPlxyXG48cHJlPiA8L3ByZT5cclxuXHJcbiAgICAgICAgICAgIFJFTUVESUFUSU9OXHJcbiAgICAgICAgICAgIDxwcmU+IDwvcHJlPlxyXG4gICAgICAgICAgICA8SWNvbiBmbGlwcGVkPSdob3Jpem9udGFsbHknIGZpdHRlZCBuYW1lPSdjYXJldCBkb3duJyBzaXplPVwibGFyZ2VcIiAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG48aW1nIHNyYz1cInNlYXRpbmcucG5nXCIgY2xhc3NOYW1lPVwic2VhdGluZ1wiLz5cclxuXHJcbiAgICAgICAgICAgIFNFVFRJTkdTPC9hPlxyXG5cclxuICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1jb250ZW50MVwiICBzdHlsZT17e2Rpc3BsYXk6dGhpcy5zdGF0ZS5zaG93YT9cImZsZXhcIjpcIm5vbmVcIn19IFxyXG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI9e3RoaXMudHdvZnVuY3Rpb25zb30gICBvbk1vdXNlTGVhdmU9e3RoaXMudHdvZnVuY3Rpb25zZn0gXHJcbiAgXHJcbiAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIEFsbCBBbGVydHNcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICBTZW5zaXRpdmUgSW5mb3JtYXRpb248L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgIERpc2N1c3Npb25zPC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICBCbGFjayBNYXJrZXRzPC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICBGaW5hbmNpYWw8L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgIEV4cG9zZWQgQ3JlZGVudGlhbHM8L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgIFBlcnNvbmFsIEluZm9ybWF0aW9uPC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICBIYWNrZXIgR3JvdXAgVGFyZ2V0aW5nPC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICBBdHRhY2sgJiBDb21wcm9taXNlczwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgVW5kZXIgQW5hbHlzaXM8L2E+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRlbnQzXCIgIHN0eWxlPXt7ZGlzcGxheTp0aGlzLnN0YXRlLnNob3diP1wiZmxleFwiOlwibm9uZVwifX0gXHJcbiAgICAgICAgICAgIG9uTW91c2VFbnRlcj17dGhpcy50d29mdW5jdGlvbnNvMX0gICBvbk1vdXNlTGVhdmU9e3RoaXMudHdvZnVuY3Rpb25zZjF9ID5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNwYWNlcjFcIj48L2xpPlxyXG4gICAgICAgICAgICA8bGkgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJkYXNoYm9hcmRzXCI+XHJcbiAgICAgICAgICAgIDxwPjwvcD5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8cHJlPiA8L3ByZT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGhyZWY9XCIjXCIgPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPHByZT4gPC9wcmU+XHJcbiAgICAgICAgICAgIDxwcmU+IDwvcHJlPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgPHByZT4gPC9wcmU+XHJcbiAgICAgICAgICAgIDxsaT5BY3Rpb25zPC9saT5cclxuICAgICAgICAgICAgPHByZT4gICA8L3ByZT5cclxuICAgICAgICAgICAgPGxpPkxvZzwvbGk+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8bGkgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvbGk+XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuLmRlc2lnbmluZ3tcclxuICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDoxMDAlO1xyXG4gIFxyXG4gIFxyXG5cclxufVxyXG4uc3BhY2VyMntcclxuZGlzcGxheTpmbGV4O1xyXG5iYWNrZ3JvdW5kOmJsdWU7XHJcbmZsZXgtYmFzaXM6NTAlO1xyXG59XHJcbi5zZWFyY2h7XHJcbiAgICAgICAgIHdpZHRoOjI0cHg7XHJcbiAgICBoZWlnaHQ6MjRweDsgIFxyXG59XHJcbi5zaGVhbGR7XHJcbiAgICAgIHdpZHRoOjQwcHg7XHJcbiAgICBoZWlnaHQ6NDBweDsgIFxyXG59XHJcbi5hbGVydHN7XHJcbiAgICB3aWR0aDoyNXB4O1xyXG4gICAgaGVpZ2h0OjI1cHg7XHJcbn1cclxuLmRlc2lnbmluZyA+bGkge1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDUwcHg7XHJcblxyXG4gIGxpc3Qtc3R5bGU6bm9uZTsgXHJcbn1cclxuLmxvZ297XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgZmxleC1iYXNpczogNDAlO1xyXG59XHJcbi5saW5rMXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmb250LWZhbWlseTogJ0dpbHJveScsIHNhbnMtc2VyaWY7XHJcbiAgd2lkdGg6MTUwcHg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGJvcmRlci1ib3R0b206M3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG59XHJcbi5saW5rMntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDo3MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiR2lscm95XCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGJvcmRlci1ib3R0b206M3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG59XHJcbi5saW5rM3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDo3MHB4O1xyXG4gICAgICAgZm9udC1mYW1pbHk6IFwiR2lscm95XCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGJvcmRlci1ib3R0b206M3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG59XHJcbi5zcGFjZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWJhc2lzOiAyMCU7XHJcblxyXG4gIFxyXG59XHJcbi51c2VybG9nb3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5mbGV4LWJhc2lzOiAxNSU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5iYWNrZ3JvdW5kOiBibGFjaztcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbn1cclxuLmRlbW9hY2NvdW50e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICBmb250LWZhbWlseTogXCJHaWxyb3lcIiwgc2Fucy1zZXJpZjtcclxuICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICB3aWR0aDogMTEwcHg7XHJcblxyXG59XHJcbi5sb2dvMXtcclxuIHdpZHRoOjI1cHg7XHJcbiBoZWlnaHQ6MjVweDtcclxufVxyXG4vKiBEcm9wZG93biBCdXR0b24gKi9cclxuXHJcblxyXG4vKiBUaGUgY29udGFpbmVyIDxkaXY+IC0gbmVlZGVkIHRvIHBvc2l0aW9uIHRoZSBkcm9wZG93biBjb250ZW50ICovXHJcblxyXG4uc3BhY2VyMXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtYmFzaXM6IDIwJTtcclxufVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgbWluLXdpZHRoOiAxNjBweDtcclxuICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcbi5zZWF0aW5ne1xyXG4gICAgd2lkdGg6MzVweDtcclxuICAgIGhlaWdodDozMHB4O1xyXG59XHJcbi8qIExpbmtzIGluc2lkZSB0aGUgZHJvcGRvd24gKi9cclxuLmRyb3Bkb3duLWNvbnRlbnQgPmEge1xyXG4gIGNvbG9yOiBncmF5O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnR2lscm95Jywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xyXG4gIGZvbnQtd2VpZ2h0OjQwMDtcclxuICB3aWR0aDogMTgwcHg7XHJcbiAgaGVpZ2h0OjcwcHg7XHJcbiAgb3BhY2l0eTogMC44O1xyXG59XHJcblxyXG4vKiBDaGFuZ2UgY29sb3Igb2YgZHJvcGRvd24gbGlua3Mgb24gaG92ZXIgKi9cclxuLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7Y29sb3I6IGJsYWNrO29wYWNpdHk6IDE7fVxyXG5cclxuXHJcbi5saW5rMTpob3ZlciB7Ym9yZGVyLWJvdHRvbTozcHggc29saWQgIzAwNzZmZjt9XHJcblxyXG5cclxuLmRhc2hib2FyZHN7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbndpZHRoOiAxMDBweDtcclxuXHJcbn1cclxuLmRhc2hib2FyZHMgaW1ne1xyXG4gICAgaGVpZ2h0OjMwcHg7XHJcbiAgICB3aWR0aDozMHB4O1xyXG59XHJcbi5kcm9wZG93bi1jb250ZW50MSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGp1c3RpZnktY29udGVudDpzcGFjZS1ldmVubHk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuXHJcbi5kcm9wZG93bi1jb250ZW50MSA+YSB7XHJcbiAgICBjb2xvcjogZ3JheTtcclxuICBcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBmb250LWZhbWlseTogJ0dpbHJveScsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG5cclxuICBoZWlnaHQ6NjBweDtcclxufVxyXG4uZHJvcGRvd24tY29udGVudDEgYTpob3ZlciB7Y29sb3I6IGJsYWNrO31cclxuXHJcbi5kcm9wZG93bi1jb250ZW50MyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBtaW4td2lkdGg6IDE2MHB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcblxyXG4uZHJvcGRvd24tY29udGVudDMgPmxpIHtcclxuICBjb2xvcjogZ3JheTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBmb250LWZhbWlseTogJ0dpbHJveScsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcclxuICBmb250LXdlaWdodDo0MDA7XHJcbiAgd2lkdGg6IDE4MHB4O1xyXG4gIGhlaWdodDo3MHB4O1xyXG4gIG9wYWNpdHk6IDAuODtcclxuICBsaXN0LXN0eWxlOm5vbmU7XHJcblxyXG59XHJcbi5kcm9wZG93bi1jb250ZW50MyBsaTpob3ZlciB7Y29sb3I6IGJsYWNrO31cclxuICAgICAgICAgIGB9IDwvc3R5bGU+XHJcbiAgICBcclxuICAgIDwvZGl2PlxyXG5cdFx0XHQpXHJcblx0fVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb247Il19 */\n/*@ sourceURL=E:\\\\reactnext\\\\components\\\\navigation.js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdmlnYXRpb24uanMiXSwibmFtZXMiOlsiTmF2aWdhdGlvbiIsInByb3BzIiwic2V0U3RhdGUiLCJwcmV2U3RhdGUiLCJzaG93Iiwic2hvd2EiLCJzaG93YiIsInN0YXRlIiwiYmFja2Ryb3BDbGlja0hhbmRsZXJ0IiwiYmluZCIsImJhY2tkcm9wQ2xpY2tIYW5kbGVyZiIsImJhY2tkcm9wQ2xpY2tIYW5kbGVyMXQiLCJiYWNrZHJvcENsaWNrSGFuZGxlcjFmIiwidHdvZnVuY3Rpb25zbyIsInR3b2Z1bmN0aW9uc2YiLCJ0d29mdW5jdGlvbnNvMSIsInR3b2Z1bmN0aW9uc2YxIiwiYmFja2Ryb3BDbGlja0hhbmRsZXIyIiwiZGlzcGxheSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztJQUNNQSxVOzs7OztBQUNMLHNCQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOOztBQURpQiwrTkFnQkssWUFBTTtBQUMxQixZQUFLQyxRQUFMLENBQWMsVUFBQ0MsU0FBRCxFQUFlO0FBQ3JCLGVBQU87QUFBQ0MsY0FBSSxFQUFFLENBQUNELFNBQVMsQ0FBQ0M7QUFBbEIsU0FBUDtBQUdQLE9BSkQ7QUFPRCxLQXhCZ0I7O0FBQUEsZ09BMEJRLFlBQU07QUFDN0IsWUFBS0YsUUFBTCxDQUFjLFVBQUNDLFNBQUQsRUFBZTtBQUNyQixlQUFPO0FBQUNFLGVBQUssRUFBRSxDQUFDRixTQUFTLENBQUNFO0FBQW5CLFNBQVA7QUFDUCxPQUZEO0FBS0QsS0FoQ2dCOztBQUFBLGdPQWlDVSxZQUFNO0FBQy9CLFlBQUtILFFBQUwsQ0FBYyxVQUFDQyxTQUFELEVBQWU7QUFDckIsZUFBTztBQUFDRyxlQUFLLEVBQUUsQ0FBQ0gsU0FBUyxDQUFDRztBQUFuQixTQUFQO0FBQ1AsT0FG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QUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEEsRUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKQSxDQWZBLEVBc0JBO0FBQUksWUFBSSxFQUFDLEdBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBdEJBLENBcEZSO0FBQUE7QUFBQTtBQUFBLDh1cUJBREY7QUFtVUE7Ozs7RUEzWXVCRyw0Q0FBSyxDQUFDQyxTOztBQTZZaEJwQix5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcaW5kZXguanMuOTE5ZDY4NGFhYmI5MWNkYjI0YzAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBBbGVydHNkcm9wZG93biBmcm9tIFwiLi9hbGVydHNkcm9wZG93bi5qc1wiXHJcbmltcG9ydCB7IEljb24gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuY2xhc3MgTmF2aWdhdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcblx0XHRzdXBlcihwcm9wcylcclxuICAgICAgICB0aGlzLnN0YXRlPXtcclxuICAgICAgICAgICAgc2hvdzpmYWxzZSxcclxuICAgICAgICAgICAgc2hvd2E6ZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3diOmZhbHNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXJ0PXRoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXJ0LmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLmJhY2tkcm9wQ2xpY2tIYW5kbGVyZj10aGlzLmJhY2tkcm9wQ2xpY2tIYW5kbGVyZi5iaW5kKHRoaXMpXHJcbiAgICAgICAgdGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcjF0PXRoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXIxdC5iaW5kKHRoaXMpXHJcbiAgICAgICAgdGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcjFmPXRoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXIxZi5iaW5kKHRoaXMpXHJcbiAgICAgICAgdGhpcy50d29mdW5jdGlvbnNvPXRoaXMudHdvZnVuY3Rpb25zby5iaW5kKHRoaXMpXHJcbiAgICAgICAgdGhpcy50d29mdW5jdGlvbnNmPXRoaXMudHdvZnVuY3Rpb25zZi5iaW5kKHRoaXMpXHJcbiAgICAgICAgdGhpcy50d29mdW5jdGlvbnNvMT10aGlzLnR3b2Z1bmN0aW9uc28xLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLnR3b2Z1bmN0aW9uc2YxPXRoaXMudHdvZnVuY3Rpb25zZjEuYmluZCh0aGlzKVxyXG5cdH1cclxuICBiYWNrZHJvcENsaWNrSGFuZGxlciA9KCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7c2hvdzogIXByZXZTdGF0ZS5zaG93fTtcclxuXHJcbiAgICAgICAgXHJcbiAgICB9KTtcclxuXHJcblxyXG4gIH07XHJcblxyXG4gICAgYmFja2Ryb3BDbGlja0hhbmRsZXIxID0oKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtzaG93YTogIXByZXZTdGF0ZS5zaG93YX07ICAgICAgICBcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgfTtcclxuICAgICAgYmFja2Ryb3BDbGlja0hhbmRsZXIyID0oKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtzaG93YjogIXByZXZTdGF0ZS5zaG93Yn07ICAgICAgICBcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgfTtcclxuICBiYWNrZHJvcENsaWNrSGFuZGxlcnQoKXtcclxuICAgIHRoaXMuc2V0U3RhdGUoe3Nob3c6dHJ1ZX0pXHJcblxyXG4gIH07XHJcbiAgICBiYWNrZHJvcENsaWNrSGFuZGxlcmYoKXtcclxuICAgIHRoaXMuc2V0U3RhdGUoe3Nob3c6ZmFsc2V9KVxyXG4gIH07XHJcbiAgYmFja2Ryb3BDbGlja0hhbmRsZXIxdCgpe1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7c2hvd2E6dHJ1ZX0pXHJcblxyXG4gIH07XHJcbiAgICBiYWNrZHJvcENsaWNrSGFuZGxlcjFmKCl7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtzaG93YTpmYWxzZX0pXHJcbiAgfTtcclxuICB0d29mdW5jdGlvbnNvKCl7XHJcbiAgICB0aGlzLmJhY2tkcm9wQ2xpY2tIYW5kbGVydCgpXHJcbiAgICB0aGlzLmJhY2tkcm9wQ2xpY2tIYW5kbGVyMXQoKVxyXG4gIH1cclxuICAgIHR3b2Z1bmN0aW9uc2YoKXtcclxuICAgIHRoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXJmKClcclxuICAgIHRoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXIxZigpXHJcbiAgfVxyXG4gICAgdHdvZnVuY3Rpb25zbzEoKXtcclxuICAgIHRoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXJ0KClcclxuICAgIHRoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXIyKClcclxuICB9XHJcbiAgICB0d29mdW5jdGlvbnNmMSgpe1xyXG4gICAgdGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcmYoKVxyXG4gICAgdGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcjIoKVxyXG4gIH1cclxucmVuZGVyKCl7XHJcblx0XHRyZXR1cm4oXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZGVzaWduaW5nXCI+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsb2dvXCI+IENZQkVSIElOVEVMTElHRU5DRSBIT1VTRSAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpbmsxXCIgICBvbk1vdXNlRW50ZXI9e3RoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXJ0fVxyXG4gICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e3RoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXJmfVxyXG4gICA+IEV4cG9zZWQgSW5mb3JtYXRpb24gPC9saT5cclxuXHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaW5rMlwiPiBBc3NldHMgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpbmszXCI+IFN1cHBvcnQgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNwYWNlclwiPjwvbGk+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgPjxhPjxpbWcgc3JjPVwidXNlcmljb24ucG5nXCIgY2xhc3NOYW1lPVwidXNlcmxvZ29cIi8+PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRlbW9hY2NvdW50XCI+IERlbW8gYWNjb3VudCA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgPiA8aW1nIHNyYz1cIm91dC5wbmdcIiBjbGFzc05hbWU9XCJsb2dvMVwiLz4gPC9saT5cclxuICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1jb250ZW50XCIgICAgICBzdHlsZT17e2Rpc3BsYXk6dGhpcy5zdGF0ZS5zaG93P1wiZmxleFwiOlwibm9uZVwifX1cclxuICAgICAgICAgIG9uTW91c2VFbnRlcj17dGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcnR9ICAgb25Nb3VzZUxlYXZlPXt0aGlzLmJhY2tkcm9wQ2xpY2tIYW5kbGVyZn0gICAgPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNwYWNlcjFcIj48L2xpPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImRhc2hib2FyZHNcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJzcXVhcmVzLnBuZ1wiLz48cD5EQVNIQk9BUkRTPC9wPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbjxpbWcgc3JjPVwic2VhcmNoLnBuZ1wiIGNsYXNzTmFtZT1cInNlYXJjaFwiLz5cclxuPHByZT4gPC9wcmU+XHJcbiAgICAgICAgICAgIEtFWVdPUkRTPC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uTW91c2VFbnRlcj17dGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcjF0fVxyXG4gICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e3RoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXIxZn1cclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgID5cclxuPGltZyBzcmM9XCJiZWxsLnBuZ1wiIGNsYXNzTmFtZT1cImFsZXJ0c1wiLz5cclxuPHByZT4gPC9wcmU+XHJcbiAgICAgICAgICAgIEFMRVJUU1xyXG4gICAgICAgICAgICA8cHJlPiA8L3ByZT5cclxuICAgICAgICAgICAgPEljb24gZmxpcHBlZD0naG9yaXpvbnRhbGx5JyBmaXR0ZWQgbmFtZT0nY2FyZXQgZG93bicgc2l6ZT1cImxhcmdlXCIgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgIG9uTW91c2VFbnRlcj17dGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcjJ9XHJcbiAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17dGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcjJ9PlxyXG48aW1nIHNyYz1cInNoZWFsZC5wbmdcIiBjbGFzc05hbWU9XCJzaGVhbGRcIlxyXG4vPlxyXG48cHJlPiA8L3ByZT5cclxuXHJcbiAgICAgICAgICAgIFJFTUVESUFUSU9OXHJcbiAgICAgICAgICAgIDxwcmU+IDwvcHJlPlxyXG4gICAgICAgICAgICA8SWNvbiBmbGlwcGVkPSdob3Jpem9udGFsbHknIGZpdHRlZCBuYW1lPSdjYXJldCBkb3duJyBzaXplPVwibGFyZ2VcIiAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG48aW1nIHNyYz1cInNlYXRpbmcucG5nXCIgY2xhc3NOYW1lPVwic2VhdGluZ1wiLz5cclxuXHJcbiAgICAgICAgICAgIFNFVFRJTkdTPC9hPlxyXG5cclxuICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1jb250ZW50MVwiICBzdHlsZT17e2Rpc3BsYXk6dGhpcy5zdGF0ZS5zaG93YT9cImZsZXhcIjpcIm5vbmVcIn19IFxyXG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI9e3RoaXMudHdvZnVuY3Rpb25zb30gICBvbk1vdXNlTGVhdmU9e3RoaXMudHdvZnVuY3Rpb25zZn0gXHJcbiAgXHJcbiAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIEFsbCBBbGVydHNcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICBTZW5zaXRpdmUgSW5mb3JtYXRpb248L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgIERpc2N1c3Npb25zPC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICBCbGFjayBNYXJrZXRzPC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICBGaW5hbmNpYWw8L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgIEV4cG9zZWQgQ3JlZGVudGlhbHM8L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgIFBlcnNvbmFsIEluZm9ybWF0aW9uPC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICBIYWNrZXIgR3JvdXAgVGFyZ2V0aW5nPC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICBBdHRhY2sgJiBDb21wcm9taXNlczwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgVW5kZXIgQW5hbHlzaXM8L2E+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRlbnQzXCIgIHN0eWxlPXt7ZGlzcGxheTp0aGlzLnN0YXRlLnNob3diP1wiZmxleFwiOlwibm9uZVwifX0gXHJcbiAgICAgICAgICAgIG9uTW91c2VFbnRlcj17dGhpcy50d29mdW5jdGlvbnNvMX0gICBvbk1vdXNlTGVhdmU9e3RoaXMudHdvZnVuY3Rpb25zZjF9ID5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNwYWNlcjFcIj48L2xpPlxyXG4gICAgICAgICAgICA8bGkgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJkYXNoYm9hcmRzXCI+XHJcbiAgICAgICAgICAgIDxwPjwvcD5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8cHJlPiA8L3ByZT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGhyZWY9XCIjXCIgPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPHByZT4gPC9wcmU+XHJcbiAgICAgICAgICAgIDxwcmU+IDwvcHJlPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgPHByZT4gPC9wcmU+XHJcbiAgICAgICAgICAgIDxsaT5BY3Rpb25zPC9saT5cclxuICAgICAgICAgICAgPHByZT4gICA8L3ByZT5cclxuICAgICAgICAgICAgPGxpPkxvZzwvbGk+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8bGkgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvbGk+XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuLmRlc2lnbmluZ3tcclxuICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDoxMDAlO1xyXG4gIFxyXG4gIFxyXG5cclxufVxyXG4uc3BhY2VyMntcclxuZGlzcGxheTpmbGV4O1xyXG5iYWNrZ3JvdW5kOmJsdWU7XHJcbmZsZXgtYmFzaXM6NTAlO1xyXG59XHJcbi5zZWFyY2h7XHJcbiAgICAgICAgIHdpZHRoOjI0cHg7XHJcbiAgICBoZWlnaHQ6MjRweDsgIFxyXG59XHJcbi5zaGVhbGR7XHJcbiAgICAgIHdpZHRoOjQwcHg7XHJcbiAgICBoZWlnaHQ6NDBweDsgIFxyXG59XHJcbi5hbGVydHN7XHJcbiAgICB3aWR0aDoyNXB4O1xyXG4gICAgaGVpZ2h0OjI1cHg7XHJcbn1cclxuLmRlc2lnbmluZyA+bGkge1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDUwcHg7XHJcblxyXG4gIGxpc3Qtc3R5bGU6bm9uZTsgXHJcbn1cclxuLmxvZ297XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgZmxleC1iYXNpczogNDAlO1xyXG59XHJcbi5saW5rMXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmb250LWZhbWlseTogJ0dpbHJveScsIHNhbnMtc2VyaWY7XHJcbiAgd2lkdGg6MTUwcHg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGJvcmRlci1ib3R0b206M3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG59XHJcbi5saW5rMntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDo3MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiR2lscm95XCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGJvcmRlci1ib3R0b206M3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG59XHJcbi5saW5rM3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDo3MHB4O1xyXG4gICAgICAgZm9udC1mYW1pbHk6IFwiR2lscm95XCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGJvcmRlci1ib3R0b206M3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG59XHJcbi5zcGFjZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWJhc2lzOiAyMCU7XHJcblxyXG4gIFxyXG59XHJcbi51c2VybG9nb3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5mbGV4LWJhc2lzOiAxNSU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5iYWNrZ3JvdW5kOiBibGFjaztcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbn1cclxuLmRlbW9hY2NvdW50e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICBmb250LWZhbWlseTogXCJHaWxyb3lcIiwgc2Fucy1zZXJpZjtcclxuICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICB3aWR0aDogMTEwcHg7XHJcblxyXG59XHJcbi5sb2dvMXtcclxuIHdpZHRoOjI1cHg7XHJcbiBoZWlnaHQ6MjVweDtcclxufVxyXG4vKiBEcm9wZG93biBCdXR0b24gKi9cclxuXHJcblxyXG4vKiBUaGUgY29udGFpbmVyIDxkaXY+IC0gbmVlZGVkIHRvIHBvc2l0aW9uIHRoZSBkcm9wZG93biBjb250ZW50ICovXHJcblxyXG4uc3BhY2VyMXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtYmFzaXM6IDIwJTtcclxufVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgbWluLXdpZHRoOiAxNjBweDtcclxuICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcbi5zZWF0aW5ne1xyXG4gICAgd2lkdGg6MzVweDtcclxuICAgIGhlaWdodDozMHB4O1xyXG59XHJcbi8qIExpbmtzIGluc2lkZSB0aGUgZHJvcGRvd24gKi9cclxuLmRyb3Bkb3duLWNvbnRlbnQgPmEge1xyXG4gIGNvbG9yOiBncmF5O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnR2lscm95Jywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xyXG4gIGZvbnQtd2VpZ2h0OjQwMDtcclxuICB3aWR0aDogMTgwcHg7XHJcbiAgaGVpZ2h0OjcwcHg7XHJcbiAgb3BhY2l0eTogMC44O1xyXG59XHJcblxyXG4vKiBDaGFuZ2UgY29sb3Igb2YgZHJvcGRvd24gbGlua3Mgb24gaG92ZXIgKi9cclxuLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7Y29sb3I6IGJsYWNrO29wYWNpdHk6IDE7fVxyXG5cclxuXHJcbi5saW5rMTpob3ZlciB7Ym9yZGVyLWJvdHRvbTozcHggc29saWQgIzAwNzZmZjt9XHJcblxyXG5cclxuLmRhc2hib2FyZHN7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbndpZHRoOiAxMDBweDtcclxuXHJcbn1cclxuLmRhc2hib2FyZHMgaW1ne1xyXG4gICAgaGVpZ2h0OjMwcHg7XHJcbiAgICB3aWR0aDozMHB4O1xyXG59XHJcbi5kcm9wZG93bi1jb250ZW50MSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGp1c3RpZnktY29udGVudDpzcGFjZS1ldmVubHk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuXHJcbi5kcm9wZG93bi1jb250ZW50MSA+YSB7XHJcbiAgICBjb2xvcjogZ3JheTtcclxuICBcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBmb250LWZhbWlseTogJ0dpbHJveScsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG5cclxuICBoZWlnaHQ6NjBweDtcclxufVxyXG4uZHJvcGRvd24tY29udGVudDEgYTpob3ZlciB7Y29sb3I6IGJsYWNrO31cclxuXHJcbi5kcm9wZG93bi1jb250ZW50MyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBtaW4td2lkdGg6IDE2MHB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcblxyXG4uZHJvcGRvd24tY29udGVudDMgPmxpIHtcclxuICBjb2xvcjogZ3JheTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBmb250LWZhbWlseTogJ0dpbHJveScsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcclxuICBmb250LXdlaWdodDo0MDA7XHJcbiAgd2lkdGg6IDE4MHB4O1xyXG4gIGhlaWdodDo3MHB4O1xyXG4gIG9wYWNpdHk6IDAuODtcclxuICBsaXN0LXN0eWxlOm5vbmU7XHJcblxyXG59XHJcbi5kcm9wZG93bi1jb250ZW50MyBsaTpob3ZlciB7Y29sb3I6IGJsYWNrO31cclxuICAgICAgICAgIGB9IDwvc3R5bGU+XHJcbiAgICBcclxuICAgIDwvZGl2PlxyXG5cdFx0XHQpXHJcblx0fVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb247Il0sInNvdXJjZVJvb3QiOiIifQ==