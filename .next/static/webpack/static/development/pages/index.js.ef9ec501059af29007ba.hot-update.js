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
        className: "jsx-718634065",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 5
        }
      }, __jsx("nav", {
        className: "jsx-718634065" + " " + "designing",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 9
        }
      }, __jsx("li", {
        className: "jsx-718634065" + " " + "logo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 13
        }
      }, " CYBER INTELLIGENCE HOUSE  "), __jsx("li", {
        onMouseEnter: this.backdropClickHandlert,
        onMouseLeave: this.backdropClickHandlerf,
        className: "jsx-718634065" + " " + "link1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 13
        }
      }, " Exposed Information "), __jsx("li", {
        className: "jsx-718634065" + " " + "link2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 13
        }
      }, " Assets "), __jsx("li", {
        className: "jsx-718634065" + " " + "link3",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 13
        }
      }, " Support "), __jsx("li", {
        className: "jsx-718634065" + " " + "spacer",
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
        className: "jsx-718634065",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 29
        }
      }, __jsx("img", {
        src: "usericon.png",
        className: "jsx-718634065" + " " + "userlogo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 32
        }
      }))), __jsx("li", {
        className: "jsx-718634065" + " " + "demoaccount",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 13
        }
      }, " Demo account "), __jsx("li", {
        className: "jsx-718634065",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 13
        }
      }, " ", __jsx("img", {
        src: "out.png",
        className: "jsx-718634065" + " " + "logo1",
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
        className: "jsx-718634065" + " " + "dropdown-content",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }
      }, __jsx("li", {
        className: "jsx-718634065" + " " + "spacer1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 11
        }
      }), __jsx("a", {
        href: "#",
        className: "jsx-718634065" + " " + "dashboards",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 13
        }
      }, __jsx("img", {
        src: "squares.png",
        className: "jsx-718634065",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 13
        }
      }), __jsx("p", {
        className: "jsx-718634065",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 37
        }
      }, "DASHBOARDS")), __jsx("a", {
        href: "#",
        className: "jsx-718634065",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 13
        }
      }, __jsx("img", {
        src: "search.png",
        className: "jsx-718634065" + " " + "search",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 1
        }
      }), __jsx("pre", {
        className: "jsx-718634065",
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
        className: "jsx-718634065",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 13
        }
      }, __jsx("img", {
        src: "bell.png",
        className: "jsx-718634065" + " " + "alerts",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 1
        }
      }), __jsx("pre", {
        className: "jsx-718634065",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 1
        }
      }, " "), "ALERTS", __jsx("pre", {
        className: "jsx-718634065",
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
        className: "jsx-718634065",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 13
        }
      }, __jsx("img", {
        src: "sheald.png",
        className: "jsx-718634065" + " " + "sheald",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 1
        }
      }), __jsx("pre", {
        className: "jsx-718634065",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117,
          columnNumber: 1
        }
      }, " "), "REMEDIATION", __jsx("pre", {
        className: "jsx-718634065",
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
        className: "jsx-718634065",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124,
          columnNumber: 13
        }
      }, __jsx("img", {
        src: "seating.png",
        className: "jsx-718634065" + " " + "seating",
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
        className: "jsx-718634065" + " " + "dropdown-content1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 13
        }
      }, __jsx("a", {
        href: "#",
        className: "jsx-718634065",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 13
        }
      }, "All Alerts"), __jsx("a", {
        href: "#",
        className: "jsx-718634065",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 13
        }
      }, "Sensitive Information"), __jsx("a", {
        href: "#",
        className: "jsx-718634065",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 13
        }
      }, "Discussions"), __jsx("a", {
        href: "#",
        className: "jsx-718634065",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 13
        }
      }, "Black Markets"), __jsx("a", {
        href: "#",
        className: "jsx-718634065",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 13
        }
      }, "Financial"), __jsx("a", {
        href: "#",
        className: "jsx-718634065",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 13
        }
      }, "Exposed Credentials"), __jsx("a", {
        href: "#",
        className: "jsx-718634065",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151,
          columnNumber: 13
        }
      }, "Personal Information"), __jsx("a", {
        href: "#",
        className: "jsx-718634065",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 13
        }
      }, "Hacker Group Targeting"), __jsx("a", {
        href: "#",
        className: "jsx-718634065",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 13
        }
      }, "Attack & Compromises"), __jsx("a", {
        href: "#",
        className: "jsx-718634065",
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
        className: "jsx-718634065" + " " + "dropdown-content2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162,
          columnNumber: 13
        }
      }, __jsx("div", {
        className: "jsx-718634065" + " " + "box1",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 13
        }
      }, " ", __jsx("p", {
        className: "jsx-718634065",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 36
        }
      }, " faisal")), __jsx("div", {
        className: "jsx-718634065" + " " + "box2",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167,
          columnNumber: 13
        }
      }, __jsx("a", {
        href: "#",
        className: "jsx-718634065",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168,
          columnNumber: 13
        }
      }, "Actions"), __jsx("a", {
        href: "#",
        className: "jsx-718634065",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171,
          columnNumber: 13
        }
      }, "Log"))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "718634065",
        __self: this
      }, ".designing.jsx-718634065{background:black;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;}.spacer2.jsx-718634065{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background:blue;-webkit-flex-basis:50%;-ms-flex-preferred-size:50%;flex-basis:50%;}.search.jsx-718634065{width:24px;height:24px;}.sheald.jsx-718634065{width:40px;height:40px;}.alerts.jsx-718634065{width:25px;height:25px;}.designing.jsx-718634065>li.jsx-718634065{color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:50px;list-style:none;}.logo.jsx-718634065{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-basis:40%;-ms-flex-preferred-size:40%;flex-basis:40%;}.link1.jsx-718634065{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-family:'Gilroy',sans-serif;width:150px;font-size:15px;border-bottom:3px solid transparent;}.link2.jsx-718634065{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:70px;font-family:\"Gilroy\",sans-serif;font-size:15px;border-bottom:3px solid transparent;}.link3.jsx-718634065{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:70px;font-family:\"Gilroy\",sans-serif;font-size:15px;border-bottom:3px solid transparent;}.spacer.jsx-718634065{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-basis:20%;-ms-flex-preferred-size:20%;flex-basis:20%;}.userlogo.jsx-718634065{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-basis:15%;-ms-flex-preferred-size:15%;flex-basis:15%;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;background:black;height:25px;width:25px;}.demoaccount.jsx-718634065{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;font-family:\"Gilroy\",sans-serif;font-size:14px;width:110px;}.logo1.jsx-718634065{width:25px;height:25px;}.spacer1.jsx-718634065{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-basis:20%;-ms-flex-preferred-size:20%;flex-basis:20%;}.dropdown-content.jsx-718634065{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:white;min-width:160px;box-shadow:0px 8px 16px 0px rgba(0,0,0,0.2);z-index:1;}.seating.jsx-718634065{width:35px;height:30px;}.dropdown-content.jsx-718634065>a.jsx-718634065{color:gray;-webkit-text-decoration:none;text-decoration:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-family:'Gilroy',sans-serif;font-size:14px;text-transform:uppercase;font-weight:400;width:180px;height:70px;opacity:0.8;}.dropdown-content.jsx-718634065 a.jsx-718634065:hover{color:black;opacity:1;}.link1.jsx-718634065:hover{border-bottom:3px solid #0076ff;}.dashboards.jsx-718634065{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100px;}.dashboards.jsx-718634065 img.jsx-718634065{height:30px;width:30px;}.dropdown-content1.jsx-718634065{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:white;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;box-shadow:0px 8px 16px 0px rgba(0,0,0,0.2);z-index:1;}.dropdown-content1.jsx-718634065>a.jsx-718634065{color:gray;-webkit-text-decoration:none;text-decoration:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-family:'Gilroy',sans-serif;font-size:12px;height:60px;}.dropdown-content1.jsx-718634065 a.jsx-718634065:hover{color:black;}.dropdown-content2.jsx-718634065{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;background:white;box-shadow:0px 8px 16px 0px rgba(0,0,0,0.2);z-index:1;}.dropdown-content2.jsx-718634065>a.jsx-718634065{color:gray;min-width:70px;-webkit-text-decoration:none;text-decoration:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-family:'Gilroy',sans-serif;font-size:12px;height:60px;}.dropdown-content2.jsx-718634065 a.jsx-718634065:hover{color:black;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxyZWFjdG5leHRcXGNvbXBvbmVudHNcXG5hdmlnYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUxzQixBQUlvQixBQVVQLEFBS08sQUFJSCxBQUlGLEFBSUQsQUFTRSxBQUtFLEFBT0EsQUFPQSxBQU9GLEFBTUEsQUFRRSxBQVFOLEFBU0ksQUFLQSxBQVVELEFBS0QsQUFnQnlCLEFBR00sQUFJN0IsQUFPQSxBQUlBLEFBV0EsQUFZd0IsQUFHeEIsQUFXQSxBQVd3QixXQW5MeEIsQUFJQSxBQUlBLEFBNkRILEFBd0JHLEFBS1EsQUE4Q0EsQUF5QlAsQ0E3SkQsQUFxR2lDLEFBZWxDLEFBMEIwQixBQXlCQSxLQWxNekIsS0FnSWtDLENBaEhqRCxBQUlBLEFBSUEsQUE2REEsQUF3QkEsQUFtQ0EsR0F5Q3VCLE1BdERzQiw2QkFqQjdCLEFBOENBLGFBdEpELEFBMkJFLEFBSW9CLEFBT3ZCLEFBT0EsQUFPRyxBQU1GLEFBUWMsQUFpQlosQUFLSSxBQXNDQSxBQVdBLEFBMEJBLEVBYUwsU0F6SXFCLEFBT0csQ0E1QmYsSUFqQlgsQ0FWTyxlQXlDUixXQVFJLEFBT0EsQ0FkQSxjQVFvQixBQU9BLENBZEEsRUF1RWhCLEFBOENBLEtBM0hyQixBQTJCQSxBQUk2QixBQXlCN0IsR0FLNkIsQUFzQ1IsQUFXRixBQTBCQSxPQWFFLE1BL0tyQixJQVZxQixRQWtEckIsQUFPQSxDQWRBLEVBZ0N3QyxjQWhEbkIsa0JBaURILENBc0NHLEFBOENBLGNBbkZOLENBNkdNLFdBM0dyQixNQXlEWSxBQVdPLEFBMEJHLENBekdMLFdBOEJFLEFBd0NuQixLQXpJWSxBQW1Ka0IsQ0EvRWhCLFVBaEVkLEVBaUVhLFdBQ2IsQ0EzQ2MsWUFFRyxPQXFGUSxBQThDQSxTQWxJekIsTUE0SnlCLHVCQWJOLE1BM0VBLFdBNEUyQixNQTNFNUIsZ0JBQzRCLEVBZ0RBLG9CQWpDUCxBQThDQSxBQWMzQixVQUNaLEtBV3VDLE9BdEYzQixFQWdEQSxRQS9DWixBQWNpQixBQThDQSxFQVpqQixhQWpDMEIsQUErQ2IsQUF3QkksWUF2QmpCLEdBd0JhLFVBdkVJLEVBd0VqQixjQXZFYyxZQUNELFlBQ0MsWUFDZCIsImZpbGUiOiJFOlxccmVhY3RuZXh0XFxjb21wb25lbnRzXFxuYXZpZ2F0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IEFsZXJ0c2Ryb3Bkb3duIGZyb20gXCIuL2FsZXJ0c2Ryb3Bkb3duLmpzXCJcclxuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xyXG5jbGFzcyBOYXZpZ2F0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcclxuXHRcdHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHRoaXMuc3RhdGU9e1xyXG4gICAgICAgICAgICBzaG93OmZhbHNlLFxyXG4gICAgICAgICAgICBzaG93YTpmYWxzZSxcclxuICAgICAgICAgICAgc2hvd2I6ZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcnQ9dGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcnQuYmluZCh0aGlzKVxyXG4gICAgICAgIHRoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXJmPXRoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXJmLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLmJhY2tkcm9wQ2xpY2tIYW5kbGVyMXQ9dGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcjF0LmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLmJhY2tkcm9wQ2xpY2tIYW5kbGVyMWY9dGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcjFmLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLnR3b2Z1bmN0aW9uc289dGhpcy50d29mdW5jdGlvbnNvLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLnR3b2Z1bmN0aW9uc2Y9dGhpcy50d29mdW5jdGlvbnNmLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLnR3b2Z1bmN0aW9uc28xPXRoaXMudHdvZnVuY3Rpb25zbzEuYmluZCh0aGlzKVxyXG4gICAgICAgIHRoaXMudHdvZnVuY3Rpb25zZjE9dGhpcy50d29mdW5jdGlvbnNmMS5iaW5kKHRoaXMpXHJcblx0fVxyXG4gIGJhY2tkcm9wQ2xpY2tIYW5kbGVyID0oKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtzaG93OiAhcHJldlN0YXRlLnNob3d9O1xyXG5cclxuICAgICAgICBcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgfTtcclxuXHJcbiAgICBiYWNrZHJvcENsaWNrSGFuZGxlcjEgPSgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge3Nob3dhOiAhcHJldlN0YXRlLnNob3dhfTsgICAgICAgIFxyXG4gICAgfSk7XHJcblxyXG5cclxuICB9O1xyXG4gICAgICBiYWNrZHJvcENsaWNrSGFuZGxlcjIgPSgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge3Nob3diOiAhcHJldlN0YXRlLnNob3difTsgICAgICAgIFxyXG4gICAgfSk7XHJcblxyXG5cclxuICB9O1xyXG4gIGJhY2tkcm9wQ2xpY2tIYW5kbGVydCgpe1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7c2hvdzp0cnVlfSlcclxuXHJcbiAgfTtcclxuICAgIGJhY2tkcm9wQ2xpY2tIYW5kbGVyZigpe1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7c2hvdzpmYWxzZX0pXHJcbiAgfTtcclxuICBiYWNrZHJvcENsaWNrSGFuZGxlcjF0KCl7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtzaG93YTp0cnVlfSlcclxuXHJcbiAgfTtcclxuICAgIGJhY2tkcm9wQ2xpY2tIYW5kbGVyMWYoKXtcclxuICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dhOmZhbHNlfSlcclxuICB9O1xyXG4gIHR3b2Z1bmN0aW9uc28oKXtcclxuICAgIHRoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXJ0KClcclxuICAgIHRoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXIxdCgpXHJcbiAgfVxyXG4gICAgdHdvZnVuY3Rpb25zZigpe1xyXG4gICAgdGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcmYoKVxyXG4gICAgdGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcjFmKClcclxuICB9XHJcbiAgICB0d29mdW5jdGlvbnNvMSgpe1xyXG4gICAgdGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcnQoKVxyXG4gICAgdGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcjIoKVxyXG4gIH1cclxuICAgIHR3b2Z1bmN0aW9uc2YxKCl7XHJcbiAgICB0aGlzLmJhY2tkcm9wQ2xpY2tIYW5kbGVyZigpXHJcbiAgICB0aGlzLmJhY2tkcm9wQ2xpY2tIYW5kbGVyMigpXHJcbiAgfVxyXG5yZW5kZXIoKXtcclxuXHRcdHJldHVybihcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJkZXNpZ25pbmdcIj5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxvZ29cIj4gQ1lCRVIgSU5URUxMSUdFTkNFIEhPVVNFICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGluazFcIiAgIG9uTW91c2VFbnRlcj17dGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcnR9XHJcbiAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17dGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcmZ9XHJcbiAgID4gRXhwb3NlZCBJbmZvcm1hdGlvbiA8L2xpPlxyXG5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpbmsyXCI+IEFzc2V0cyA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGluazNcIj4gU3VwcG9ydCA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic3BhY2VyXCI+PC9saT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiA+PGE+PGltZyBzcmM9XCJ1c2VyaWNvbi5wbmdcIiBjbGFzc05hbWU9XCJ1c2VybG9nb1wiLz48L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZGVtb2FjY291bnRcIj4gRGVtbyBhY2NvdW50IDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSA+IDxpbWcgc3JjPVwib3V0LnBuZ1wiIGNsYXNzTmFtZT1cImxvZ28xXCIvPiA8L2xpPlxyXG4gICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRlbnRcIiAgICAgIHN0eWxlPXt7ZGlzcGxheTp0aGlzLnN0YXRlLnNob3c/XCJmbGV4XCI6XCJub25lXCJ9fVxyXG4gICAgICAgICAgb25Nb3VzZUVudGVyPXt0aGlzLmJhY2tkcm9wQ2xpY2tIYW5kbGVydH0gICBvbk1vdXNlTGVhdmU9e3RoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXJmfSAgICA+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic3BhY2VyMVwiPjwvbGk+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZGFzaGJvYXJkc1wiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cInNxdWFyZXMucG5nXCIvPjxwPkRBU0hCT0FSRFM8L3A+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuPGltZyBzcmM9XCJzZWFyY2gucG5nXCIgY2xhc3NOYW1lPVwic2VhcmNoXCIvPlxyXG48cHJlPiA8L3ByZT5cclxuICAgICAgICAgICAgS0VZV09SRFM8L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25Nb3VzZUVudGVyPXt0aGlzLmJhY2tkcm9wQ2xpY2tIYW5kbGVyMXR9XHJcbiAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17dGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcjFmfVxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgPlxyXG48aW1nIHNyYz1cImJlbGwucG5nXCIgY2xhc3NOYW1lPVwiYWxlcnRzXCIvPlxyXG48cHJlPiA8L3ByZT5cclxuICAgICAgICAgICAgQUxFUlRTXHJcbiAgICAgICAgICAgIDxwcmU+IDwvcHJlPlxyXG4gICAgICAgICAgICA8SWNvbiBmbGlwcGVkPSdob3Jpem9udGFsbHknIGZpdHRlZCBuYW1lPSdjYXJldCBkb3duJyBzaXplPVwibGFyZ2VcIiAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgb25Nb3VzZUVudGVyPXt0aGlzLmJhY2tkcm9wQ2xpY2tIYW5kbGVyMn1cclxuICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXt0aGlzLmJhY2tkcm9wQ2xpY2tIYW5kbGVyMn0+XHJcbjxpbWcgc3JjPVwic2hlYWxkLnBuZ1wiIGNsYXNzTmFtZT1cInNoZWFsZFwiXHJcbi8+XHJcbjxwcmU+IDwvcHJlPlxyXG5cclxuICAgICAgICAgICAgUkVNRURJQVRJT05cclxuICAgICAgICAgICAgPHByZT4gPC9wcmU+XHJcbiAgICAgICAgICAgIDxJY29uIGZsaXBwZWQ9J2hvcml6b250YWxseScgZml0dGVkIG5hbWU9J2NhcmV0IGRvd24nIHNpemU9XCJsYXJnZVwiIC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbjxpbWcgc3JjPVwic2VhdGluZy5wbmdcIiBjbGFzc05hbWU9XCJzZWF0aW5nXCIvPlxyXG5cclxuICAgICAgICAgICAgU0VUVElOR1M8L2E+XHJcblxyXG4gICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRlbnQxXCIgIHN0eWxlPXt7ZGlzcGxheTp0aGlzLnN0YXRlLnNob3dhP1wiZmxleFwiOlwibm9uZVwifX0gXHJcbiAgICAgICAgICAgIG9uTW91c2VFbnRlcj17dGhpcy50d29mdW5jdGlvbnNvfSAgIG9uTW91c2VMZWF2ZT17dGhpcy50d29mdW5jdGlvbnNmfSBcclxuICBcclxuICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgQWxsIEFsZXJ0c1xyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgIFNlbnNpdGl2ZSBJbmZvcm1hdGlvbjwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgRGlzY3Vzc2lvbnM8L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgIEJsYWNrIE1hcmtldHM8L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgIEZpbmFuY2lhbDwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgRXhwb3NlZCBDcmVkZW50aWFsczwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgUGVyc29uYWwgSW5mb3JtYXRpb248L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgIEhhY2tlciBHcm91cCBUYXJnZXRpbmc8L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgIEF0dGFjayAmIENvbXByb21pc2VzPC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICBVbmRlciBBbmFseXNpczwvYT5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGVudDJcIiAgc3R5bGU9e3tkaXNwbGF5OnRoaXMuc3RhdGUuc2hvd2I/XCJmbGV4XCI6XCJub25lXCJ9fSBcclxuICAgICAgICAgICAgb25Nb3VzZUVudGVyPXt0aGlzLnR3b2Z1bmN0aW9uc28xfSAgIG9uTW91c2VMZWF2ZT17dGhpcy50d29mdW5jdGlvbnNmMX0gXHJcbiAgXHJcbiAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveDFcIj4gPHA+IGZhaXNhbDwvcD48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3gyXCI+IFxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICBBY3Rpb25zXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgTG9nPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8c3R5bGUganN4PntgXHJcblxyXG4uZGVzaWduaW5ne1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgXHJcbiAgXHJcblxyXG59XHJcbi5zcGFjZXIye1xyXG5kaXNwbGF5OmZsZXg7XHJcbmJhY2tncm91bmQ6Ymx1ZTtcclxuZmxleC1iYXNpczo1MCU7XHJcbn1cclxuLnNlYXJjaHtcclxuICAgICAgICAgd2lkdGg6MjRweDtcclxuICAgIGhlaWdodDoyNHB4OyAgXHJcbn1cclxuLnNoZWFsZHtcclxuICAgICAgd2lkdGg6NDBweDtcclxuICAgIGhlaWdodDo0MHB4OyAgXHJcbn1cclxuLmFsZXJ0c3tcclxuICAgIHdpZHRoOjI1cHg7XHJcbiAgICBoZWlnaHQ6MjVweDtcclxufVxyXG4uZGVzaWduaW5nID5saSB7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogNTBweDtcclxuXHJcbiAgbGlzdC1zdHlsZTpub25lOyBcclxufVxyXG4ubG9nb3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICBmbGV4LWJhc2lzOiA0MCU7XHJcbn1cclxuLmxpbmsxe1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZvbnQtZmFtaWx5OiAnR2lscm95Jywgc2Fucy1zZXJpZjtcclxuICB3aWR0aDoxNTBweDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTozcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuLmxpbmsye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOjcwcHg7XHJcbiAgICBmb250LWZhbWlseTogXCJHaWxyb3lcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTozcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuLmxpbmsze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOjcwcHg7XHJcbiAgICAgICBmb250LWZhbWlseTogXCJHaWxyb3lcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTozcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuLnNwYWNlcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtYmFzaXM6IDIwJTtcclxuXHJcbiAgXHJcbn1cclxuLnVzZXJsb2dve1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbmZsZXgtYmFzaXM6IDE1JTtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbmJhY2tncm91bmQ6IGJsYWNrO1xyXG4gIGhlaWdodDogMjVweDtcclxuICB3aWR0aDogMjVweDtcclxufVxyXG4uZGVtb2FjY291bnR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgIGZvbnQtZmFtaWx5OiBcIkdpbHJveVwiLCBzYW5zLXNlcmlmO1xyXG4gICBmb250LXNpemU6IDE0cHg7XHJcbiAgIHdpZHRoOiAxMTBweDtcclxuXHJcbn1cclxuLmxvZ28xe1xyXG4gd2lkdGg6MjVweDtcclxuIGhlaWdodDoyNXB4O1xyXG59XHJcbi8qIERyb3Bkb3duIEJ1dHRvbiAqL1xyXG5cclxuXHJcbi8qIFRoZSBjb250YWluZXIgPGRpdj4gLSBuZWVkZWQgdG8gcG9zaXRpb24gdGhlIGRyb3Bkb3duIGNvbnRlbnQgKi9cclxuXHJcbi5zcGFjZXIxe1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1iYXNpczogMjAlO1xyXG59XHJcblxyXG4uZHJvcGRvd24tY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBtaW4td2lkdGg6IDE2MHB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuLnNlYXRpbmd7XHJcbiAgICB3aWR0aDozNXB4O1xyXG4gICAgaGVpZ2h0OjMwcHg7XHJcbn1cclxuLyogTGlua3MgaW5zaWRlIHRoZSBkcm9wZG93biAqL1xyXG4uZHJvcGRvd24tY29udGVudCA+YSB7XHJcbiAgY29sb3I6IGdyYXk7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgZm9udC1mYW1pbHk6ICdHaWxyb3knLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XHJcbiAgZm9udC13ZWlnaHQ6NDAwO1xyXG4gIHdpZHRoOiAxODBweDtcclxuICBoZWlnaHQ6NzBweDtcclxuICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuXHJcbi8qIENoYW5nZSBjb2xvciBvZiBkcm9wZG93biBsaW5rcyBvbiBob3ZlciAqL1xyXG4uZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtjb2xvcjogYmxhY2s7b3BhY2l0eTogMTt9XHJcblxyXG5cclxuLmxpbmsxOmhvdmVyIHtib3JkZXItYm90dG9tOjNweCBzb2xpZCAjMDA3NmZmO31cclxuXHJcblxyXG4uZGFzaGJvYXJkc3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxud2lkdGg6IDEwMHB4O1xyXG5cclxufVxyXG4uZGFzaGJvYXJkcyBpbWd7XHJcbiAgICBoZWlnaHQ6MzBweDtcclxuICAgIHdpZHRoOjMwcHg7XHJcbn1cclxuLmRyb3Bkb3duLWNvbnRlbnQxIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAganVzdGlmeS1jb250ZW50OnNwYWNlLWV2ZW5seTtcclxuICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQxID5hIHtcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gIFxyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnR2lscm95Jywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEycHg7XHJcblxyXG4gIGhlaWdodDo2MHB4O1xyXG59XHJcbi5kcm9wZG93bi1jb250ZW50MSBhOmhvdmVyIHtjb2xvcjogYmxhY2s7fVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuXHJcbi5kcm9wZG93bi1jb250ZW50MiA+YSB7XHJcbiAgICBjb2xvcjogZ3JheTtcclxuICBtaW4td2lkdGg6NzBweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBmb250LWZhbWlseTogJ0dpbHJveScsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGhlaWdodDo2MHB4O1xyXG59XHJcbi5kcm9wZG93bi1jb250ZW50MiBhOmhvdmVyIHtjb2xvcjogYmxhY2s7fVxyXG4gICAgICAgICAgYH0gPC9zdHlsZT5cclxuICAgIFxyXG4gICAgPC9kaXY+XHJcblx0XHRcdClcclxuXHR9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbjsiXX0= */\n/*@ sourceURL=E:\\\\reactnext\\\\components\\\\navigation.js */"));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdmlnYXRpb24uanMiXSwibmFtZXMiOlsiTmF2aWdhdGlvbiIsInByb3BzIiwic2V0U3RhdGUiLCJwcmV2U3RhdGUiLCJzaG93Iiwic2hvd2EiLCJzaG93YiIsInN0YXRlIiwiYmFja2Ryb3BDbGlja0hhbmRsZXJ0IiwiYmluZCIsImJhY2tkcm9wQ2xpY2tIYW5kbGVyZiIsImJhY2tkcm9wQ2xpY2tIYW5kbGVyMXQiLCJiYWNrZHJvcENsaWNrSGFuZGxlcjFmIiwidHdvZnVuY3Rpb25zbyIsInR3b2Z1bmN0aW9uc2YiLCJ0d29mdW5jdGlvbnNvMSIsInR3b2Z1bmN0aW9uc2YxIiwiYmFja2Ryb3BDbGlja0hhbmRsZXIyIiwiZGlzcGxheSIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztJQUNNQSxVOzs7OztBQUNMLHNCQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUE7O0FBQ2pCLDhCQUFNQSxLQUFOOztBQURpQiwrTkFnQkssWUFBTTtBQUMxQixZQUFLQyxRQUFMLENBQWMsVUFBQ0MsU0FBRCxFQUFlO0FBQ3JCLGVBQU87QUFBQ0MsY0FBSSxFQUFFLENBQUNELFNBQVMsQ0FBQ0M7QUFBbEIsU0FBUDtBQUdQLE9BSkQ7QUFPRCxLQXhCZ0I7O0FBQUEsZ09BMEJRLFlBQU07QUFDN0IsWUFBS0YsUUFBTCxDQUFjLFVBQUNDLFNBQUQsRUFBZTtBQUNyQixlQUFPO0FBQUNFLGVBQUssRUFBRSxDQUFDRixTQUFTLENBQUNFO0FBQW5CLFNBQVA7QUFDUCxPQUZEO0FBS0QsS0FoQ2dCOztBQUFBLGdPQWlDVSxZQUFNO0FBQy9CLFlBQUtILFFBQUwsQ0FBYyxVQUFDQyxTQUFELEVBQWU7QUFDckIsZUFBTztBQUFDRyxlQUFLLEVBQUUsQ0FBQ0gsU0FBUyxDQUFDRztBQUFuQixTQUFQO0FBQ1AsT0FGRDtBQUtELEtBdkNnQjs7QUFFWCxVQUFLQyxLQUFMLEdBQVc7QUFDUEgsVUFBSSxFQUFDLEtBREU7QUFFUEMsV0FBSyxFQUFDLEtBRkM7QUFHUEMsV0FBSyxFQUFDO0FBSEMsS0FBWDtBQUtBLFVBQUtFLHFCQUFMLEdBQTJCLE1BQUtBLHFCQUFMLENBQTJCQyxJQUEzQix5R0FBM0I7QUFDQSxVQUFLQyxxQkFBTCxHQUEyQixNQUFLQSxxQkFBTCxDQUEyQkQsSUFBM0IseUdBQTNCO0FBQ0EsVUFBS0Usc0JBQUwsR0FBNEIsTUFBS0Esc0JBQUwsQ0FBNEJGLElBQTVCLHlHQUE1QjtBQUNBLFVBQUtHLHNCQUFMLEdBQTRCLE1BQUtBLHNCQUFMLENBQTRCSCxJQUE1Qix5R0FBNUI7QUFDQSxVQUFLSSxhQUFMLEdBQW1CLE1BQUtBLGFBQUwsQ0FBbUJKLElBQW5CLHlHQUFuQjtBQUNBLFVBQUtLLGFBQUwsR0FBbUIsTUFBS0EsYUFBTCxDQUFtQkwsSUFBbkIseUdBQW5CO0FBQ0EsVUFBS00sY0FBTCxHQUFvQixNQUFLQSxjQUFMLENBQW9CTixJQUFwQix5R0FBcEI7QUFDQSxVQUFLTyxjQUFMLEdBQW9CLE1BQUtBLGNBQUwsQ0FBb0JQLElBQXBCLHlHQUFwQjtBQWRXO0FBZWpCOzs7OzRDQXlCdUI7QUFDckIsV0FBS1AsUUFBTCxDQUFjO0FBQUNFLFlBQUksRUFBQztBQUFOLE9BQWQ7QUFFRDs7OzRDQUN3QjtBQUN2QixXQUFLRixRQUFMLENBQWM7QUFBQ0UsWUFBSSxFQUFDO0FBQU4sT0FBZDtBQUNEOzs7NkNBQ3VCO0FBQ3RCLFdBQUtGLFFBQUwsQ0FBYztBQUFDRyxhQUFLLEVBQUM7QUFBUCxPQUFkO0FBRUQ7Ozs2Q0FDeUI7QUFDeEIsV0FBS0gsUUFBTCxDQUFjO0FBQUNHLGFBQUssRUFBQztBQUFQLE9BQWQ7QUFDRDs7O29DQUNjO0FBQ2IsV0FBS0cscUJBQUw7QUFDQSxXQUFLRyxzQkFBTDtBQUNEOzs7b0NBQ2dCO0FBQ2YsV0FBS0QscUJBQUw7QUFDQSxXQUFLRSxzQkFBTDtBQUNEOzs7cUNBQ2lCO0FBQ2hCLFdBQUtKLHFCQUFMO0FBQ0EsV0FBS1MscUJBQUw7QUFDRDs7O3FDQUNpQjtBQUNoQixXQUFLUCxxQkFBTDtBQUNBLFdBQUtPLHFCQUFMO0FBQ0Q7Ozs2QkFDSztBQUNOLGFBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0k7QUFBQSwyQ0FBZSxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFBLDJDQUFjLE1BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1Q0FESixFQUVJO0FBQXdCLG9CQUFZLEVBQUUsS0FBS1QscUJBQTNDO0FBQ0csb0JBQVksRUFBRSxLQUFLRSxxQkFEdEI7QUFBQSwyQ0FBYyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBRkosRUFNSTtBQUFBLDJDQUFjLE9BQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFOSixFQU9JO0FBQUEsMkNBQWMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVBKLEVBUUk7QUFBQSwyQ0FBYyxRQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFSSixFQVNJLE1BQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQWdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUFHO0FBQUssV0FBRyxFQUFDLGNBQVQ7QUFBQSwyQ0FBa0MsVUFBbEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUFILENBQWhCLENBVEosRUFVSTtBQUFBLDJDQUFjLGFBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFWSixFQVdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFNO0FBQUssV0FBRyxFQUFDLFNBQVQ7QUFBQSwyQ0FBNkIsT0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUFOLE1BWEosQ0FESixFQWNNO0FBQXVDLGFBQUssRUFBRTtBQUFDUSxpQkFBTyxFQUFDLEtBQUtYLEtBQUwsQ0FBV0gsSUFBWCxHQUFnQixNQUFoQixHQUF1QjtBQUFoQyxTQUE5QztBQUNBLG9CQUFZLEVBQUUsS0FBS0kscUJBRG5CO0FBQzRDLG9CQUFZLEVBQUUsS0FBS0UscUJBRC9EO0FBQUEsMkNBQWUsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUVBO0FBQUEsMkNBQWMsU0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRkEsRUFHRTtBQUFHLFlBQUksRUFBQyxHQUFSO0FBQUEsMkNBQXNCLFlBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDQTtBQUFLLFdBQUcsRUFBQyxhQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURBLEVBQ3dCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFEeEIsQ0FIRixFQU1FO0FBQUcsWUFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ1o7QUFBSyxXQUFHLEVBQUMsWUFBVDtBQUFBLDJDQUFnQyxRQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBRFksRUFFWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGWSxhQU5GLEVBVUU7QUFBRyxZQUFJLEVBQUMsR0FBUjtBQUFZLG9CQUFZLEVBQUUsS0FBS0Msc0JBQS9CO0FBQ0csb0JBQVksRUFBRSxLQUFLQyxzQkFEdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBSVo7QUFBSyxXQUFHLEVBQUMsVUFBVDtBQUFBLDJDQUE4QixRQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBSlksRUFLWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFMWSxZQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVBBLEVBUUEsTUFBQyx1REFBRDtBQUFNLGVBQU8sRUFBQyxjQUFkO0FBQTZCLGNBQU0sTUFBbkM7QUFBb0MsWUFBSSxFQUFDLFlBQXpDO0FBQXNELFlBQUksRUFBQyxPQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBUkEsQ0FWRixFQW9CRTtBQUFHLFlBQUksRUFBQyxHQUFSO0FBQ0Esb0JBQVksRUFBRSxLQUFLSyxxQkFEbkI7QUFFRyxvQkFBWSxFQUFFLEtBQUtBLHFCQUZ0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FHWjtBQUFLLFdBQUcsRUFBQyxZQUFUO0FBQUEsMkNBQWdDLFFBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFIWSxFQUtaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxZLGlCQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVJBLEVBU0EsTUFBQyx1REFBRDtBQUFNLGVBQU8sRUFBQyxjQUFkO0FBQTZCLGNBQU0sTUFBbkM7QUFBb0MsWUFBSSxFQUFDLFlBQXpDO0FBQXNELFlBQUksRUFBQyxPQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBVEEsQ0FwQkYsRUFnQ0U7QUFBRyxZQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDWjtBQUFLLFdBQUcsRUFBQyxhQUFUO0FBQUEsMkNBQWlDLFNBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFEWSxhQWhDRixDQWROLEVBc0RRO0FBQW9DLGFBQUssRUFBRTtBQUFDQyxpQkFBTyxFQUFDLEtBQUtYLEtBQUwsQ0FBV0YsS0FBWCxHQUFpQixNQUFqQixHQUF3QjtBQUFqQyxTQUEzQztBQUNBLG9CQUFZLEVBQUUsS0FBS1EsYUFEbkI7QUFDb0Msb0JBQVksRUFBRSxLQUFLQyxhQUR2RDtBQUFBLDJDQUFlLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FLQTtBQUFHLFlBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFMQSxFQVNBO0FBQUcsWUFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQVRBLEVBV0E7QUFBRyxZQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBWEEsRUFhQTtBQUFHLFlBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFiQSxFQWVBO0FBQUcsWUFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWZBLEVBaUJBO0FBQUcsWUFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQWpCQSxFQW1CQTtBQUFHLFlBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FuQkEsRUFxQkE7QUFBRyxZQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBckJBLEVBdUJBO0FBQUcsWUFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQXZCQSxFQXlCQTtBQUFHLFlBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkF6QkEsQ0F0RFIsRUFvRlE7QUFBb0MsYUFBSyxFQUFFO0FBQUNJLGlCQUFPLEVBQUMsS0FBS1gsS0FBTCxDQUFXRCxLQUFYLEdBQWlCLE1BQWpCLEdBQXdCO0FBQWpDLFNBQTNDO0FBQ0Esb0JBQVksRUFBRSxLQUFLUyxjQURuQjtBQUNxQyxvQkFBWSxFQUFFLEtBQUtDLGNBRHhEO0FBQUEsMkNBQWUsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQUlBO0FBQUEsMkNBQWUsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQXVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBdkIsQ0FKQSxFQUtBO0FBQUEsMkNBQWUsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBQ0E7QUFBRyxZQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREEsRUFJQTtBQUFHLFlBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpBLENBTEEsQ0FwRlI7QUFBQTtBQUFBO0FBQUEsdzhvQkFERjtBQWdUQTs7OztFQXhYdUJHLDRDQUFLLENBQUNDLFM7O0FBMFhoQnBCLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3N0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcy5lZjllYzUwMTA1OWFmMjkwMDdiYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IEFsZXJ0c2Ryb3Bkb3duIGZyb20gXCIuL2FsZXJ0c2Ryb3Bkb3duLmpzXCJcclxuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xyXG5jbGFzcyBOYXZpZ2F0aW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcclxuXHRcdHN1cGVyKHByb3BzKVxyXG4gICAgICAgIHRoaXMuc3RhdGU9e1xyXG4gICAgICAgICAgICBzaG93OmZhbHNlLFxyXG4gICAgICAgICAgICBzaG93YTpmYWxzZSxcclxuICAgICAgICAgICAgc2hvd2I6ZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcnQ9dGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcnQuYmluZCh0aGlzKVxyXG4gICAgICAgIHRoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXJmPXRoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXJmLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLmJhY2tkcm9wQ2xpY2tIYW5kbGVyMXQ9dGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcjF0LmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLmJhY2tkcm9wQ2xpY2tIYW5kbGVyMWY9dGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcjFmLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLnR3b2Z1bmN0aW9uc289dGhpcy50d29mdW5jdGlvbnNvLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLnR3b2Z1bmN0aW9uc2Y9dGhpcy50d29mdW5jdGlvbnNmLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLnR3b2Z1bmN0aW9uc28xPXRoaXMudHdvZnVuY3Rpb25zbzEuYmluZCh0aGlzKVxyXG4gICAgICAgIHRoaXMudHdvZnVuY3Rpb25zZjE9dGhpcy50d29mdW5jdGlvbnNmMS5iaW5kKHRoaXMpXHJcblx0fVxyXG4gIGJhY2tkcm9wQ2xpY2tIYW5kbGVyID0oKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtzaG93OiAhcHJldlN0YXRlLnNob3d9O1xyXG5cclxuICAgICAgICBcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgfTtcclxuXHJcbiAgICBiYWNrZHJvcENsaWNrSGFuZGxlcjEgPSgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge3Nob3dhOiAhcHJldlN0YXRlLnNob3dhfTsgICAgICAgIFxyXG4gICAgfSk7XHJcblxyXG5cclxuICB9O1xyXG4gICAgICBiYWNrZHJvcENsaWNrSGFuZGxlcjIgPSgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge3Nob3diOiAhcHJldlN0YXRlLnNob3difTsgICAgICAgIFxyXG4gICAgfSk7XHJcblxyXG5cclxuICB9O1xyXG4gIGJhY2tkcm9wQ2xpY2tIYW5kbGVydCgpe1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7c2hvdzp0cnVlfSlcclxuXHJcbiAgfTtcclxuICAgIGJhY2tkcm9wQ2xpY2tIYW5kbGVyZigpe1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7c2hvdzpmYWxzZX0pXHJcbiAgfTtcclxuICBiYWNrZHJvcENsaWNrSGFuZGxlcjF0KCl7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtzaG93YTp0cnVlfSlcclxuXHJcbiAgfTtcclxuICAgIGJhY2tkcm9wQ2xpY2tIYW5kbGVyMWYoKXtcclxuICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dhOmZhbHNlfSlcclxuICB9O1xyXG4gIHR3b2Z1bmN0aW9uc28oKXtcclxuICAgIHRoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXJ0KClcclxuICAgIHRoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXIxdCgpXHJcbiAgfVxyXG4gICAgdHdvZnVuY3Rpb25zZigpe1xyXG4gICAgdGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcmYoKVxyXG4gICAgdGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcjFmKClcclxuICB9XHJcbiAgICB0d29mdW5jdGlvbnNvMSgpe1xyXG4gICAgdGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcnQoKVxyXG4gICAgdGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcjIoKVxyXG4gIH1cclxuICAgIHR3b2Z1bmN0aW9uc2YxKCl7XHJcbiAgICB0aGlzLmJhY2tkcm9wQ2xpY2tIYW5kbGVyZigpXHJcbiAgICB0aGlzLmJhY2tkcm9wQ2xpY2tIYW5kbGVyMigpXHJcbiAgfVxyXG5yZW5kZXIoKXtcclxuXHRcdHJldHVybihcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJkZXNpZ25pbmdcIj5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxvZ29cIj4gQ1lCRVIgSU5URUxMSUdFTkNFIEhPVVNFICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGluazFcIiAgIG9uTW91c2VFbnRlcj17dGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcnR9XHJcbiAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17dGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcmZ9XHJcbiAgID4gRXhwb3NlZCBJbmZvcm1hdGlvbiA8L2xpPlxyXG5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpbmsyXCI+IEFzc2V0cyA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGluazNcIj4gU3VwcG9ydCA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic3BhY2VyXCI+PC9saT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiA+PGE+PGltZyBzcmM9XCJ1c2VyaWNvbi5wbmdcIiBjbGFzc05hbWU9XCJ1c2VybG9nb1wiLz48L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiZGVtb2FjY291bnRcIj4gRGVtbyBhY2NvdW50IDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSA+IDxpbWcgc3JjPVwib3V0LnBuZ1wiIGNsYXNzTmFtZT1cImxvZ28xXCIvPiA8L2xpPlxyXG4gICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRlbnRcIiAgICAgIHN0eWxlPXt7ZGlzcGxheTp0aGlzLnN0YXRlLnNob3c/XCJmbGV4XCI6XCJub25lXCJ9fVxyXG4gICAgICAgICAgb25Nb3VzZUVudGVyPXt0aGlzLmJhY2tkcm9wQ2xpY2tIYW5kbGVydH0gICBvbk1vdXNlTGVhdmU9e3RoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXJmfSAgICA+XHJcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwic3BhY2VyMVwiPjwvbGk+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZGFzaGJvYXJkc1wiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cInNxdWFyZXMucG5nXCIvPjxwPkRBU0hCT0FSRFM8L3A+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuPGltZyBzcmM9XCJzZWFyY2gucG5nXCIgY2xhc3NOYW1lPVwic2VhcmNoXCIvPlxyXG48cHJlPiA8L3ByZT5cclxuICAgICAgICAgICAgS0VZV09SRFM8L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCIgb25Nb3VzZUVudGVyPXt0aGlzLmJhY2tkcm9wQ2xpY2tIYW5kbGVyMXR9XHJcbiAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17dGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcjFmfVxyXG4gICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgPlxyXG48aW1nIHNyYz1cImJlbGwucG5nXCIgY2xhc3NOYW1lPVwiYWxlcnRzXCIvPlxyXG48cHJlPiA8L3ByZT5cclxuICAgICAgICAgICAgQUxFUlRTXHJcbiAgICAgICAgICAgIDxwcmU+IDwvcHJlPlxyXG4gICAgICAgICAgICA8SWNvbiBmbGlwcGVkPSdob3Jpem9udGFsbHknIGZpdHRlZCBuYW1lPSdjYXJldCBkb3duJyBzaXplPVwibGFyZ2VcIiAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgb25Nb3VzZUVudGVyPXt0aGlzLmJhY2tkcm9wQ2xpY2tIYW5kbGVyMn1cclxuICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXt0aGlzLmJhY2tkcm9wQ2xpY2tIYW5kbGVyMn0+XHJcbjxpbWcgc3JjPVwic2hlYWxkLnBuZ1wiIGNsYXNzTmFtZT1cInNoZWFsZFwiXHJcbi8+XHJcbjxwcmU+IDwvcHJlPlxyXG5cclxuICAgICAgICAgICAgUkVNRURJQVRJT05cclxuICAgICAgICAgICAgPHByZT4gPC9wcmU+XHJcbiAgICAgICAgICAgIDxJY29uIGZsaXBwZWQ9J2hvcml6b250YWxseScgZml0dGVkIG5hbWU9J2NhcmV0IGRvd24nIHNpemU9XCJsYXJnZVwiIC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbjxpbWcgc3JjPVwic2VhdGluZy5wbmdcIiBjbGFzc05hbWU9XCJzZWF0aW5nXCIvPlxyXG5cclxuICAgICAgICAgICAgU0VUVElOR1M8L2E+XHJcblxyXG4gICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRlbnQxXCIgIHN0eWxlPXt7ZGlzcGxheTp0aGlzLnN0YXRlLnNob3dhP1wiZmxleFwiOlwibm9uZVwifX0gXHJcbiAgICAgICAgICAgIG9uTW91c2VFbnRlcj17dGhpcy50d29mdW5jdGlvbnNvfSAgIG9uTW91c2VMZWF2ZT17dGhpcy50d29mdW5jdGlvbnNmfSBcclxuICBcclxuICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgQWxsIEFsZXJ0c1xyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgIFNlbnNpdGl2ZSBJbmZvcm1hdGlvbjwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgRGlzY3Vzc2lvbnM8L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgIEJsYWNrIE1hcmtldHM8L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgIEZpbmFuY2lhbDwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgRXhwb3NlZCBDcmVkZW50aWFsczwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgUGVyc29uYWwgSW5mb3JtYXRpb248L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgIEhhY2tlciBHcm91cCBUYXJnZXRpbmc8L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgIEF0dGFjayAmIENvbXByb21pc2VzPC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICBVbmRlciBBbmFseXNpczwvYT5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGVudDJcIiAgc3R5bGU9e3tkaXNwbGF5OnRoaXMuc3RhdGUuc2hvd2I/XCJmbGV4XCI6XCJub25lXCJ9fSBcclxuICAgICAgICAgICAgb25Nb3VzZUVudGVyPXt0aGlzLnR3b2Z1bmN0aW9uc28xfSAgIG9uTW91c2VMZWF2ZT17dGhpcy50d29mdW5jdGlvbnNmMX0gXHJcbiAgXHJcbiAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJveDFcIj4gPHA+IGZhaXNhbDwvcD48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3gyXCI+IFxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICBBY3Rpb25zXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgTG9nPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8c3R5bGUganN4PntgXHJcblxyXG4uZGVzaWduaW5ne1xyXG4gIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgXHJcbiAgXHJcblxyXG59XHJcbi5zcGFjZXIye1xyXG5kaXNwbGF5OmZsZXg7XHJcbmJhY2tncm91bmQ6Ymx1ZTtcclxuZmxleC1iYXNpczo1MCU7XHJcbn1cclxuLnNlYXJjaHtcclxuICAgICAgICAgd2lkdGg6MjRweDtcclxuICAgIGhlaWdodDoyNHB4OyAgXHJcbn1cclxuLnNoZWFsZHtcclxuICAgICAgd2lkdGg6NDBweDtcclxuICAgIGhlaWdodDo0MHB4OyAgXHJcbn1cclxuLmFsZXJ0c3tcclxuICAgIHdpZHRoOjI1cHg7XHJcbiAgICBoZWlnaHQ6MjVweDtcclxufVxyXG4uZGVzaWduaW5nID5saSB7XHJcbiAgY29sb3I6d2hpdGU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGhlaWdodDogNTBweDtcclxuXHJcbiAgbGlzdC1zdHlsZTpub25lOyBcclxufVxyXG4ubG9nb3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICBmbGV4LWJhc2lzOiA0MCU7XHJcbn1cclxuLmxpbmsxe1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZvbnQtZmFtaWx5OiAnR2lscm95Jywgc2Fucy1zZXJpZjtcclxuICB3aWR0aDoxNTBweDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTozcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuLmxpbmsye1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOjcwcHg7XHJcbiAgICBmb250LWZhbWlseTogXCJHaWxyb3lcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTozcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuLmxpbmsze1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOjcwcHg7XHJcbiAgICAgICBmb250LWZhbWlseTogXCJHaWxyb3lcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgYm9yZGVyLWJvdHRvbTozcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbn1cclxuLnNwYWNlcntcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtYmFzaXM6IDIwJTtcclxuXHJcbiAgXHJcbn1cclxuLnVzZXJsb2dve1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbmZsZXgtYmFzaXM6IDE1JTtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbmJhY2tncm91bmQ6IGJsYWNrO1xyXG4gIGhlaWdodDogMjVweDtcclxuICB3aWR0aDogMjVweDtcclxufVxyXG4uZGVtb2FjY291bnR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgIGZvbnQtZmFtaWx5OiBcIkdpbHJveVwiLCBzYW5zLXNlcmlmO1xyXG4gICBmb250LXNpemU6IDE0cHg7XHJcbiAgIHdpZHRoOiAxMTBweDtcclxuXHJcbn1cclxuLmxvZ28xe1xyXG4gd2lkdGg6MjVweDtcclxuIGhlaWdodDoyNXB4O1xyXG59XHJcbi8qIERyb3Bkb3duIEJ1dHRvbiAqL1xyXG5cclxuXHJcbi8qIFRoZSBjb250YWluZXIgPGRpdj4gLSBuZWVkZWQgdG8gcG9zaXRpb24gdGhlIGRyb3Bkb3duIGNvbnRlbnQgKi9cclxuXHJcbi5zcGFjZXIxe1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1iYXNpczogMjAlO1xyXG59XHJcblxyXG4uZHJvcGRvd24tY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBtaW4td2lkdGg6IDE2MHB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuLnNlYXRpbmd7XHJcbiAgICB3aWR0aDozNXB4O1xyXG4gICAgaGVpZ2h0OjMwcHg7XHJcbn1cclxuLyogTGlua3MgaW5zaWRlIHRoZSBkcm9wZG93biAqL1xyXG4uZHJvcGRvd24tY29udGVudCA+YSB7XHJcbiAgY29sb3I6IGdyYXk7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgZm9udC1mYW1pbHk6ICdHaWxyb3knLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XHJcbiAgZm9udC13ZWlnaHQ6NDAwO1xyXG4gIHdpZHRoOiAxODBweDtcclxuICBoZWlnaHQ6NzBweDtcclxuICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuXHJcbi8qIENoYW5nZSBjb2xvciBvZiBkcm9wZG93biBsaW5rcyBvbiBob3ZlciAqL1xyXG4uZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtjb2xvcjogYmxhY2s7b3BhY2l0eTogMTt9XHJcblxyXG5cclxuLmxpbmsxOmhvdmVyIHtib3JkZXItYm90dG9tOjNweCBzb2xpZCAjMDA3NmZmO31cclxuXHJcblxyXG4uZGFzaGJvYXJkc3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxud2lkdGg6IDEwMHB4O1xyXG5cclxufVxyXG4uZGFzaGJvYXJkcyBpbWd7XHJcbiAgICBoZWlnaHQ6MzBweDtcclxuICAgIHdpZHRoOjMwcHg7XHJcbn1cclxuLmRyb3Bkb3duLWNvbnRlbnQxIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAganVzdGlmeS1jb250ZW50OnNwYWNlLWV2ZW5seTtcclxuICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQxID5hIHtcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gIFxyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnR2lscm95Jywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEycHg7XHJcblxyXG4gIGhlaWdodDo2MHB4O1xyXG59XHJcbi5kcm9wZG93bi1jb250ZW50MSBhOmhvdmVyIHtjb2xvcjogYmxhY2s7fVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuXHJcbi5kcm9wZG93bi1jb250ZW50MiA+YSB7XHJcbiAgICBjb2xvcjogZ3JheTtcclxuICBtaW4td2lkdGg6NzBweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBmb250LWZhbWlseTogJ0dpbHJveScsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGhlaWdodDo2MHB4O1xyXG59XHJcbi5kcm9wZG93bi1jb250ZW50MiBhOmhvdmVyIHtjb2xvcjogYmxhY2s7fVxyXG4gICAgICAgICAgYH0gPC9zdHlsZT5cclxuICAgIFxyXG4gICAgPC9kaXY+XHJcblx0XHRcdClcclxuXHR9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbjsiXSwic291cmNlUm9vdCI6IiJ9