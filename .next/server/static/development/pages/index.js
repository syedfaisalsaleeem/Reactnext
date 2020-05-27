module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./components/Dashboard/cyberexposurescore.js":
/*!****************************************************!*\
  !*** ./components/Dashboard/cyberexposurescore.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _progressbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./progressbar */ "./components/Dashboard/progressbar.js");
var _jsxFileName = "E:\\reactnext\\components\\Dashboard\\cyberexposurescore.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class CyberExposureScore extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super();

    _defineProperty(this, "calculate", () => {
      let char;
      char = this.state.thevalue / 300 * 100;
      console.log(char, "char");
      this.setState({
        calculate: String(char).concat("%")
      });
    });

    this.state = {
      count: 0,
      calculate: 0,
      minvalue: 0,
      increment: 0,
      thevalue: 120
    };
    this.calculate = this.calculate.bind(this);
  }

  componentDidMount() {
    this.calculate();
    this.timeout = setTimeout(() => {
      this.setState({
        count: this.state.calculate,
        minvalue: this.state.thevalue
      });
    }, 1000);
    this.interval = setInterval(() => {
      this.setState({
        increment: this.state.increment + 1
      });

      if (this.state.increment === this.state.thevalue) {
        clearInterval(this.interval);
      }
    }, 10);
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  render() {
    return __jsx("div", {
      className: "jsx-4137189062" + " " + "ces",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "jsx-4137189062" + " " + "ces1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 13
      }
    }, __jsx("p", {
      className: "jsx-4137189062",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }
    }, " Cyber Exposure Score")), __jsx("div", {
      className: "jsx-4137189062" + " " + "ces2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 13
      }
    }, __jsx("p", {
      className: "jsx-4137189062",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 17
      }
    }, __jsx("small", {
      className: "jsx-4137189062",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 20
      }
    }, "Companies are given exposure score based on identified risk divided by employee count on last 12 months. Score ranges from 0 to 300+.Companies with no exposure during the past 12 months have score 0. Companies that have score 300+ represent the top 10% most exposed Companies."))), __jsx("div", {
      className: "jsx-4137189062" + " " + "ces3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "jsx-4137189062" + " " + "ces31",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }
    }, __jsx("h1", {
      style: {
        display: "block"
      },
      className: "jsx-4137189062",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 21
      }
    }, " ", this.state.increment)), __jsx("div", {
      className: "jsx-4137189062" + " " + "ces32",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 17
      }
    }, __jsx("p", {
      className: "jsx-4137189062",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 21
      }
    }, "/300"))), __jsx("div", {
      className: "jsx-4137189062" + " " + "ces4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "jsx-4137189062" + " " + "ces42",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }
    }, __jsx(_progressbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
      values: this.state.count,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 17
      }
    })), __jsx("div", {
      className: "jsx-4137189062" + " " + "ces41",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "jsx-4137189062" + " " + "ces411",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 21
      }
    }, __jsx("p", {
      className: "jsx-4137189062",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 25
      }
    }, __jsx("small", {
      className: "jsx-4137189062",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 28
      }
    }, "0"))), __jsx("div", {
      className: "jsx-4137189062" + " " + "ces412",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 21
      }
    }, __jsx("p", {
      className: "jsx-4137189062",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 21
      }
    }, __jsx("small", {
      className: "jsx-4137189062",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 24
      }
    }, "300"))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "4137189062",
      __self: this
    }, ".ces411.jsx-4137189062{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:50%;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;border-left:1px solid gray;}.ces412.jsx-4137189062{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:50%;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;border-right:1px solid gray;}.ces42.jsx-4137189062{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:50%;width:100%;}.ces41.jsx-4137189062{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.ces.jsx-4137189062{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin-left:5%;height:100%;width:90%;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;}.ces1.jsx-4137189062{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:20px;height:10%;over-flow:auto;}.ces2.jsx-4137189062{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;position:relative;height:20%;over-flow:auto;}.ces3.jsx-4137189062{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:20%;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;}.ces31.jsx-4137189062{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:90%;width:49%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;font-size:31px;padding-top:30px;}.ces32.jsx-4137189062{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:49%;height:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;font-size:25px;padding-top:34px;}.ces4.jsx-4137189062{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;height:20%;width:100%;}ces31.jsx-4137189062 h1.jsx-4137189062{display:none;-webkit-transition:display 1s ease-in-out;transition:display 1s ease-in-out;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxyZWFjdG5leHRcXGNvbXBvbmVudHNcXERhc2hib2FyZFxcY3liZXJleHBvc3VyZXNjb3JlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJGb0IsQUFHeUIsQUFPQSxBQU9BLEFBTUEsQUFPQSxBQVNBLEFBV0EsQUFTQSxBQVFBLEFBU0EsQUFTQSxBQVNBLGFBQ3NCLDZEQTNGekIsQUFPQSxBQU9DLEFBTUEsQUFPVyxBQVNDLEFBV0osQUFTQSxBQVFSLEFBU0QsQUFTWSxVQWpGQyxBQU9BLEFBa0VYLENBM0RELEFBTVEsQUE0Q1QsSUEyQmIsTUExQnNCLENBakR0QixBQTBEc0IsK0NBakJSLFNBN0JJLEFBc0RRLEVBeEJNLGFBN0JqQixBQWtCVyxXQTFCQSxDQVNiLElBTWEsS0E4QkUsQ0FuQ0ksQUE0Q0YsSUExRUEsQUFPRixvRUEyRUUsS0FuQ1QsV0F6QnJCLEFBcUNBLEtBdEJrQixFQVdKLENBa0JJLEtBMURhLElBbUViLENBMUJBLEVBWEosQ0FyQ2dCLEVBa0VWLFFBNUJGLENBcUNFLENBekJwQixFQXBCQSxLQXFDQSxDQTNEQSxLQWdDQSxFQXZDQSxDQTJFQSx3Q0FPYyxXQUNBLFdBQ2QiLCJmaWxlIjoiRTpcXHJlYWN0bmV4dFxcY29tcG9uZW50c1xcRGFzaGJvYXJkXFxjeWJlcmV4cG9zdXJlc2NvcmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQcm9ncmVzc2JhciBmcm9tIFwiLi9wcm9ncmVzc2JhclwiXHJcblxyXG5cclxuXHJcbmNsYXNzIEN5YmVyRXhwb3N1cmVTY29yZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcigpXHJcbiAgICAgICAgdGhpcy5zdGF0ZT17XHJcbiAgICAgICAgICAgIGNvdW50OjAsXHJcbiAgICAgICAgICAgIGNhbGN1bGF0ZTowLFxyXG4gICAgICAgICAgICBtaW52YWx1ZTowLFxyXG4gICAgICAgICAgICBpbmNyZW1lbnQ6MCxcclxuICAgICAgICAgICAgdGhldmFsdWU6MTIwXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNhbGN1bGF0ZT10aGlzLmNhbGN1bGF0ZS5iaW5kKHRoaXMpXHJcbiAgICBcclxuICAgIH1cclxuICAgIGNhbGN1bGF0ZSA9ICgpPT57XHJcbiAgICAgICAgbGV0IGNoYXI7XHJcbiAgICAgICAgY2hhcj0odGhpcy5zdGF0ZS50aGV2YWx1ZS8zMDApKjEwMDtcclxuICAgICAgICBjb25zb2xlLmxvZyhjaGFyLFwiY2hhclwiKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2NhbGN1bGF0ZTpTdHJpbmcoY2hhcikuY29uY2F0KFwiJVwiKX0pXHJcblxyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICB0aGlzLmNhbGN1bGF0ZSgpXHJcbiAgICAgICAgdGhpcy50aW1lb3V0PXNldFRpbWVvdXQoKCk9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2NvdW50OnRoaXMuc3RhdGUuY2FsY3VsYXRlLG1pbnZhbHVlOnRoaXMuc3RhdGUudGhldmFsdWV9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSwxMDAwKTtcclxuICAgICAgICB0aGlzLmludGVydmFsPXNldEludGVydmFsKCgpPT57XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2luY3JlbWVudDp0aGlzLnN0YXRlLmluY3JlbWVudCsxfSlcclxuICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5pbmNyZW1lbnQ9PT10aGlzLnN0YXRlLnRoZXZhbHVlKXtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LDEwKTtcclxuXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKXtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbnJlbmRlcigpe1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlczFcIj5cclxuICAgICAgICAgICAgICAgIDxwPiBDeWJlciBFeHBvc3VyZSBTY29yZTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VzMlwiPlxyXG4gICAgICAgICAgICAgICAgPHA+PHNtYWxsPlxyXG4gICAgICAgICAgICAgICAgQ29tcGFuaWVzIGFyZSBnaXZlbiBleHBvc3VyZSBzY29yZSBiYXNlZCBvbiBpZGVudGlmaWVkIHJpc2tcclxuICAgICAgICAgICAgICAgIGRpdmlkZWQgYnkgZW1wbG95ZWUgY291bnQgb24gbGFzdCAxMiBtb250aHMuIFNjb3JlIHJhbmdlcyBmcm9tIDBcclxuICAgICAgICAgICAgICAgIHRvIDMwMCsuQ29tcGFuaWVzIHdpdGggbm8gZXhwb3N1cmUgZHVyaW5nIHRoZSBwYXN0IDEyIG1vbnRocyBoYXZlIHNjb3JlIDAuXHJcbiAgICAgICAgICAgICAgICBDb21wYW5pZXMgdGhhdCBoYXZlIHNjb3JlIDMwMCsgcmVwcmVzZW50IHRoZSB0b3AgMTAlIG1vc3QgZXhwb3NlZCBDb21wYW5pZXMuXHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZXMzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlczMxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7ZGlzcGxheTpcImJsb2NrXCJ9fT4ge3RoaXMuc3RhdGUuaW5jcmVtZW50fTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VzMzJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD4vMzAwPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZXM0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlczQyXCI+XHJcbiAgICAgICAgICAgICAgICA8UHJvZ3Jlc3NiYXIgdmFsdWVzPXt0aGlzLnN0YXRlLmNvdW50fS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VzNDFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlczQxMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD48c21hbGw+MDwvc21hbGw+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VzNDEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+PHNtYWxsPjMwMDwvc21hbGw+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuY2VzNDExe1xyXG4gICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgIHdpZHRoOjUwJTtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6ZmxleC1zdGFydDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OjFweCBzb2xpZCBncmF5O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2VzNDEye1xyXG4gICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgIHdpZHRoOjUwJTtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6ZmxleC1zdGFydDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OmZsZXgtZW5kO1xyXG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6MXB4IHNvbGlkIGdyYXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jZXM0MntcclxuICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6NTAlO1xyXG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNlczQxe1xyXG4gICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jZXN7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6NSU7XHJcbiAgICAgICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAgICAgICB3aWR0aDo5MCU7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1ldmVubHk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jZXMxe1xyXG4gICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmb250LXNpemU6MjBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OjEwJTtcclxuICAgICAgICAgICAgb3Zlci1mbG93OmF1dG87XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAuY2VzMntcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICAgICAgaGVpZ2h0OjIwJTtcclxuICAgICAgICAgICAgb3Zlci1mbG93OmF1dG87XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAuY2VzM3tcclxuICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpyb3c7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBoZWlnaHQ6MjAlO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtZXZlbmx5O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNlczMxe1xyXG4gICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgIGhlaWdodDo5MCU7XHJcbiAgICAgICAgICAgIHdpZHRoOjQ5JTtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTozMXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDozMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2VzMzJ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgd2lkdGg6NDklO1xyXG4gICAgICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtcclxuICAgICAgICAgICAgZm9udC1zaXplOjI1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOjM0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jZXM0e1xyXG4gICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6ZmxleC1zdGFydDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBoZWlnaHQ6MjAlO1xyXG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjZXMzMSBoMXtcclxuICAgICAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBkaXNwbGF5IDFzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBgfVxyXG5cclxuXHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxuXHJcbn1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ3liZXJFeHBvc3VyZVNjb3JlOyJdfQ== */\n/*@ sourceURL=E:\\\\reactnext\\\\components\\\\Dashboard\\\\cyberexposurescore.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CyberExposureScore);

/***/ }),

/***/ "./components/Dashboard/dashboardcontent.js":
/*!**************************************************!*\
  !*** ./components/Dashboard/dashboardcontent.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cyberexposurescore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cyberexposurescore */ "./components/Dashboard/cyberexposurescore.js");
/* harmony import */ var _exposuretrends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exposuretrends */ "./components/Dashboard/exposuretrends.js");
var _jsxFileName = "E:\\reactnext\\components\\Dashboard\\dashboardcontent.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class Dashboardcontent extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super();
  }

  render() {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "div1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "div1in1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "dc1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 21
      }
    }, __jsx(_cyberexposurescore__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 25
      }
    })), __jsx("div", {
      className: "dc2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 21
      }
    })), __jsx("div", {
      className: "div1in2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "dac1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }
    }, __jsx(_exposuretrends__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 21
      }
    })), __jsx("div", {
      className: "dac2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 17
      }
    }))), __jsx("style", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }
    }, `
        .div1{
            display:flex;
            flex-direction:column;
            align-items:center;
            
            width:100%;
            height:950px;
            justify-content:space-evenly;
        }
        .div1in1{
            display:flex;
            flex-direction:row;
            
            width:90%;
            height:48%;
            flex-wrap:wrap;
            justify-content:space-evenly;
            
        }
        .div1in2{
            display:flex;
            flex-direction:row;
            
            flex-wrap:wrap;
            width:90%;
            height:48%;
            justify-content:space-evenly;
            
        }
        .dc1{
            display:flex;
            border: 0.5px solid #dddfe6;;
            box-shadow: 0 20px 60px 0 rgba(163, 171, 186, 0);
            background:#F9F9F9;
            width:48%;
            
            
        }
        .dc2{
            display:flex;
            border: 0.5px solid #dddfe6;;
            box-shadow: 0 20px 60px 0 rgba(163, 171, 186, 0);
            background:#F9F9F9;
            width:48%;
            flex-basis:48%;
            
            
        }
        .dac1{
            border: 0.5px solid #dddfe6;;
            box-shadow: 0 20px 60px 0 rgba(163, 171, 186, 0);
            background:#F9F9F9;
            width:48%;
            
            
        }
        .dac2{
            border: 0.5px solid #dddfe6;;
            box-shadow: 0 20px 60px 0 rgba(163, 171, 186, 0);
            background:#F9F9F9;
            width:48%;
            
            
        }
        @media (max-width: 1500px) {
            .div1{
                display:flex;
                flex-direction:column;
                align-items:center;
                
                width:100%;
                height:2000px;
                justify-content:space-evenly;
            }
            .div1in1{
                display:flex;
                flex-direction:column;
                
                width:90%;
                height:48%;
                flex-wrap:wrap;
                align-items:center;
                justify-content:space-evenly;
                
            }
            .dc1{
                display:flex;
                
                height:48%;
                width:100%;
                  
            }
            .dc2{
                display:flex;
                
                height:48%;
                width:100%;
                
                
            }
            .div1in2{
                display:flex;
                flex-direction:column;
                
                width:90%;
                height:48%;
                flex-wrap:wrap;
                align-items:center;
                justify-content:space-evenly;
                
            }
            .dac1{
                display:flex;
                
                height:48%;
                width:100%;
                  
            }
            .dac2{
                display:flex;
                
                height:48%;
                width:100%;
                
                
            }

        
        `));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Dashboardcontent);

/***/ }),

/***/ "./components/Dashboard/dashboardheading.js":
/*!**************************************************!*\
  !*** ./components/Dashboard/dashboardheading.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\reactnext\\components\\Dashboard\\dashboardheading.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class Dashboardheading extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super();
  }

  render() {
    return __jsx("div", {
      className: "jsx-1820691021" + " " + "main",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "jsx-1820691021" + " " + "heading",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "jsx-1820691021" + " " + "headingin",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "jsx-1820691021" + " " + "in1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "jsx-1820691021" + " " + "in11",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 25
      }
    }, __jsx("h1", {
      className: "jsx-1820691021",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 25
      }
    }, "Dashboard")), __jsx("div", {
      className: "jsx-1820691021" + " " + "in12",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 25
      }
    }, __jsx("p", {
      className: "jsx-1820691021",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 25
      }
    }, " Organization name: Demo Account", __jsx("br", {
      className: "jsx-1820691021",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 60
      }
    }), "Your previous login: 26/05/2020 at 16:04"))), __jsx("div", {
      className: "jsx-1820691021" + " " + "in2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 21
      }
    }, __jsx("p", {
      className: "jsx-1820691021",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 25
      }
    }, " ", __jsx("b", {
      className: "jsx-1820691021",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 29
      }
    }, __jsx("small", {
      className: "jsx-1820691021",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 32
      }
    }, "Download as PDF")))))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1820691021",
      __self: this
    }, ".main.jsx-1820691021{width:100%;}.heading.jsx-1820691021{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-top:160px;width:100%;}.headingin.jsx-1820691021{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:85%;height:200px;}.in1.jsx-1820691021{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:flex-start;-webkit-box-align:flex-start;-ms-flex-align:flex-start;align-items:flex-start;width:50%;height:100%;}.in12.jsx-1820691021{margin-top:0px;}.in2.jsx-1820691021{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:50%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;height:100%;}@media (max-width:1440px){.headingin.jsx-1820691021{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:90%;height:300px;}.in2.jsx-1820691021{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;height:100%;}}@media (max-width:400px){.headingin.jsx-1820691021{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:90%;height:350px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxyZWFjdG5leHRcXGNvbXBvbmVudHNcXERhc2hib2FyZFxcZGFzaGJvYXJkaGVhZGluZy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0Qm9CLEFBR3VCLEFBR0UsQUFRQSxBQU1BLEFBUUUsQUFHRixBQVdJLEFBT0EsQUFZQSxXQXpEcEIsSUF5QkEsMkRBckJzQixBQU9ULEFBTVksQUFXWixBQVdnQixBQU9YLEFBWVcsVUE3Q2IsQUFnQk0sQ0FrQkksWUFqQzFCLHVEQUkyQixBQXNCVixBQW1CQSxVQWpCRyxBQW1CQSxLQXhETSxRQXNDdEIsQUFtQkEsRUFoQ3dCLENBa0JJLG1GQTdCbkIsS0FiTyxLQWNMLEdBWUEsQ0FrQkksUUEzQ0wsQUFlZCxHQWFBLENBa0JJLE9BN0NKIiwiZmlsZSI6IkU6XFxyZWFjdG5leHRcXGNvbXBvbmVudHNcXERhc2hib2FyZFxcZGFzaGJvYXJkaGVhZGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuY2xhc3MgRGFzaGJvYXJkaGVhZGluZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcigpXHJcblxyXG4gICAgfVxyXG5yZW5kZXIoKXtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkaW5nXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRpbmdpblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW4xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW4xMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+RGFzaGJvYXJkPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW4xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4gT3JnYW5pemF0aW9uIG5hbWU6IERlbW8gQWNjb3VudDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBZb3VyIHByZXZpb3VzIGxvZ2luOiAyNi8wNS8yMDIwIGF0IDE2OjA0PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW4yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4gPGI+PHNtYWxsPkRvd25sb2FkIGFzIFBERjwvc21hbGw+PC9iPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5tYWlue1xyXG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaGVhZGluZ3tcclxuICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOjE2MHB4O1xyXG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaGVhZGluZ2lue1xyXG4gICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgIHdpZHRoOjg1JTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGhlaWdodDoyMDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmluMXtcclxuICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICB3aWR0aDo1MCU7XHJcbiAgICAgICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLmluMTJ7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaW4ye1xyXG4gICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgIHdpZHRoOjUwJTtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTQ0MHB4KSB7XHJcbiAgICAgICAgICAgIC5oZWFkaW5naW57XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICAgICAgICAgICAgICB3aWR0aDo5MCU7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGhlaWdodDozMDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaW4ye1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gICAgICAgICAgICAuaGVhZGluZ2lue1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6OTAlO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6MzUwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGB9XHJcblxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcblxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmRoZWFkaW5nOyJdfQ== */\n/*@ sourceURL=E:\\\\reactnext\\\\components\\\\Dashboard\\\\dashboardheading.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Dashboardheading);

/***/ }),

/***/ "./components/Dashboard/exposuretrends.js":
/*!************************************************!*\
  !*** ./components/Dashboard/exposuretrends.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _linechart1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./linechart1 */ "./components/Dashboard/linechart1.js");
var _jsxFileName = "E:\\reactnext\\components\\Dashboard\\exposuretrends.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



class Exposuretrends extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor() {
    super();
  }

  render() {
    return __jsx("div", {
      className: "jsx-3317647813" + " " + "et",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "jsx-3317647813" + " " + "et1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 13
      }
    }, __jsx("p", {
      className: "jsx-3317647813",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 13
      }
    }, " EXPOSURE TRENDS (LAST 24 MONTHS)")), __jsx("div", {
      className: "jsx-3317647813" + " " + "et2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }
    }, __jsx(_linechart1__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }
    })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3317647813",
      __self: this
    }, ".et.jsx-3317647813{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:100%;width:100%;}.et1.jsx-3317647813{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;height:16%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:18px;}.et2.jsx-3317647813{overflow:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxyZWFjdG5leHRcXGNvbXBvbmVudHNcXERhc2hib2FyZFxcZXhwb3N1cmV0cmVuZHMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJhLEFBRzZCLEFBU0EsQUFXSSxnQkFDcEIsMERBcEJ5QixBQVNYLFdBQ0EsV0FDUSx3REFUUCxZQUNELFdBR2QsY0FNMEIsbUdBQ1IsZUFJbEIiLCJmaWxlIjoiRTpcXHJlYWN0bmV4dFxcY29tcG9uZW50c1xcRGFzaGJvYXJkXFxleHBvc3VyZXRyZW5kcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5lY2hhcnQxIGZyb20gXCIuL2xpbmVjaGFydDFcIlxyXG5jbGFzcyBFeHBvc3VyZXRyZW5kcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKVxyXG4gICAgfVxyXG5cclxucmVuZGVyKCl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV0MVwiPlxyXG4gICAgICAgICAgICA8cD4gRVhQT1NVUkUgVFJFTkRTIChMQVNUIDI0IE1PTlRIUyk8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV0MlwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmVjaGFydDEvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAuZXR7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmV0MXtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6MTYlO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxOHB4O1xyXG5cclxuICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZXQye1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRXhwb3N1cmV0cmVuZHM7Il19 */\n/*@ sourceURL=E:\\\\reactnext\\\\components\\\\Dashboard\\\\exposuretrends.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Exposuretrends);

/***/ }),

/***/ "./components/Dashboard/linechart1.js":
/*!********************************************!*\
  !*** ./components/Dashboard/linechart1.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! highcharts */ "highcharts");
/* harmony import */ var highcharts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(highcharts__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var highcharts_react_official__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts-react-official */ "highcharts-react-official");
/* harmony import */ var highcharts_react_official__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts_react_official__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "E:\\reactnext\\components\\Dashboard\\linechart1.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const options = {
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

class LineChart1 extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor() {
    super();
  }

  render() {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 9
      }
    }, __jsx(highcharts_react_official__WEBPACK_IMPORTED_MODULE_2___default.a, {
      highcharts: highcharts__WEBPACK_IMPORTED_MODULE_1___default.a,
      options: options,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 5
      }
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (LineChart1);

/***/ }),

/***/ "./components/Dashboard/progressbar.js":
/*!*********************************************!*\
  !*** ./components/Dashboard/progressbar.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\reactnext\\components\\Dashboard\\progressbar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class Progressbar extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super();
    this.state = {
      numberComplete: 10
    };
  }

  render(props) {
    return __jsx("div", {
      className: "jsx-1103940666" + " " + "progress",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }
    }, __jsx("div", {
      style: {
        width: this.props.values
      },
      className: "jsx-1103940666" + " " + "progress-bar",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 13
      }
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "1103940666",
      __self: this
    }, ".progress.jsx-1103940666{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background-color:#eee;width:100%;height:2rem;border-radius:10rem;margin-bottom:3rem;}.progress-bar.jsx-1103940666{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background:linear-gradient(to right,#F2709C,#FF9472);width:0%;height:100%;border-radius:10rem;color:#fff;opacity:1;-webkit-transition:width 1s ease-in-out;transition:width 1s ease-in-out;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxyZWFjdG5leHRcXGNvbXBvbmVudHNcXERhc2hib2FyZFxccHJvZ3Jlc3NiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJhLEFBRzZCLEFBVUEsMEVBVFUsQUFVaUMsc0JBUjVDLFdBQ0MsWUFDUSxRQU9aLFNBQ0ksR0FQTyxTQVFDLFVBTnhCLFVBT2UsV0FFRCxVQUNzQix3RUFHUCxpR0FDTiw2RkFDdkIiLCJmaWxlIjoiRTpcXHJlYWN0bmV4dFxcY29tcG9uZW50c1xcRGFzaGJvYXJkXFxwcm9ncmVzc2Jhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNsYXNzIFByb2dyZXNzYmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKClcclxuICAgICAgICB0aGlzLnN0YXRlPXtcclxuICAgICAgICAgICAgbnVtYmVyQ29tcGxldGU6MTBcclxuICAgICAgICB9XHJcbiAgICB9ICAgIFxyXG4gICAgXHJcbnJlbmRlcihwcm9wcyl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzLWJhclwiIHN0eWxlPXt7d2lkdGg6dGhpcy5wcm9wcy52YWx1ZXN9fT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAucHJvZ3Jlc3Mge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTByZW07XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZ3Jlc3MtYmFyIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0YyNzA5QywgI0ZGOTQ3Mik7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDowJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcmVtO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAxcyBlYXNlLWluLW91dDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBQcm9ncmVzc2JhciJdfQ== */\n/*@ sourceURL=E:\\\\reactnext\\\\components\\\\Dashboard\\\\progressbar.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Progressbar);

/***/ }),

/***/ "./components/assets.js":
/*!******************************!*\
  !*** ./components/assets.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "E:\\reactnext\\components\\assets.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



class Assets extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
  }

  twofunctionso1() {
    this.backdropClickHandler();
  }

  twofunctionsf1() {
    this.backdropClickHandler();
  }

  render(props) {
    return __jsx("div", {
      className: "jsx-30606889",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 5
      }
    }, __jsx("div", {
      style: {
        display: this.props.call ? "flex" : "none"
      },
      onMouseEnter: this.props.c,
      onMouseLeave: this.props.c,
      className: "jsx-30606889" + " " + "assetbar",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }
    }, __jsx("a", {
      className: "jsx-30606889",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }
    }, "  Discovery    "), __jsx("a", {
      className: "jsx-30606889",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 13
      }
    }, "  List  "), __jsx("a", {
      className: "jsx-30606889",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 13
      }
    }, "  Map  ")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "30606889",
      __self: this
    }, ".assetbar.jsx-30606889{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:white;min-width:160px;box-shadow:0px 8px 16px 0px rgba(0,0,0,0.2);z-index:1;position:absolute;width:108%;}.assetbar.jsx-30606889>a.jsx-30606889{color:gray;-webkit-text-decoration:none;text-decoration:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-family:'Gilroy',sans-serif;font-size:14px;text-transform:uppercase;font-weight:400;-webkit-flex-basis:100px;-ms-flex-preferred-size:100px;flex-basis:100px;height:70px;opacity:0.8;}.assetbar.jsx-30606889 a.jsx-30606889:hover{color:black;opacity:1;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxyZWFjdG5leHRcXGNvbXBvbmVudHNcXGFzc2V0cy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1QmdCLEFBR3NCLEFBWUYsQUFjaUIsV0FiUCxDQWFpQixVQUFlLGVBQUMsd0JBWnhDLGFBYkssNkRBY0EsUUFiSSw2REFjSixzQ0FiRix1REFjTSxzQ0FiTixpQkFDRCxnQkFDNEIsNEJBWVAsZ0JBWDNCLFVBQ08sTUFXRixZQVZMLEdBV2MsUUFWMUIsaUJBV2lCLGdCQUNDLHdFQUNMLFlBQ0MsWUFDZCIsImZpbGUiOiJFOlxccmVhY3RuZXh0XFxjb21wb25lbnRzXFxhc3NldHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcbmNsYXNzIEFzc2V0cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcblx0XHRzdXBlcihwcm9wcylcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIHR3b2Z1bmN0aW9uc28xKCl7XHJcbiAgICAgICAgdGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcigpXHJcblxyXG4gICAgICB9XHJcbiAgICB0d29mdW5jdGlvbnNmMSgpe1xyXG4gICAgICAgIHRoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXIoKVxyXG4gICAgICB9XHJcbnJlbmRlcihwcm9wcyl7XHJcbiAgICByZXR1cm4oXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXNzZXRiYXJcIiBzdHlsZT17e2Rpc3BsYXk6dGhpcy5wcm9wcy5jYWxsP1wiZmxleFwiOlwibm9uZVwifX0gb25Nb3VzZUVudGVyPXt0aGlzLnByb3BzLmN9ICAgb25Nb3VzZUxlYXZlPXt0aGlzLnByb3BzLmN9PlxyXG4gICAgICAgICAgICA8YT4gIERpc2NvdmVyeSAgICA8L2E+XHJcbiAgICAgICAgICAgIDxhPiAgTGlzdCAgPC9hPlxyXG4gICAgICAgICAgICA8YT4gIE1hcCAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAuYXNzZXRiYXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICBtaW4td2lkdGg6IDE2MHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6MTA4JTtcclxuICAgICAgfVxyXG4gICAgICAuYXNzZXRiYXIgPmEge1xyXG4gICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnR2lscm95Jywgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OjQwMDtcclxuICAgICAgICBmbGV4LWJhc2lzOjEwMHB4O1xyXG4gICAgICAgIGhlaWdodDo3MHB4O1xyXG4gICAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgICAgfVxyXG4gICAgICAuYXNzZXRiYXIgYTpob3ZlciB7Y29sb3I6IGJsYWNrO29wYWNpdHk6IDE7Y3Vyc29yOiBwb2ludGVyO31cclxuICAgIGB9PC9zdHlsZT5cclxuICAgIFxyXG4gICAgXHJcbiAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG59XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQXNzZXRzOyJdfQ== */\n/*@ sourceURL=E:\\\\reactnext\\\\components\\\\assets.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Assets);

/***/ }),

/***/ "./components/footer.js":
/*!******************************!*\
  !*** ./components/footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "E:\\reactnext\\components\\footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


class Footer extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return __jsx("div", {
      className: "jsx-2738153475",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 5
      }
    }, __jsx("div", {
      className: "jsx-2738153475" + " " + "footer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 13
      }
    }, __jsx("p", {
      className: "jsx-2738153475",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 4
      }
    }, " Copyright 2020 \xA9 Cyber Intelligence House")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "2738153475",
      __self: this
    }, ".footer.jsx-2738153475{position:relative;left:0;bottom:0;width:100%;padding-left:100px;color:gray;text-align:left;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxyZWFjdG5leHRcXGNvbXBvbmVudHNcXGZvb3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhZ0IsQUFHMkIsa0JBQ1gsT0FDRSxTQUNFLFdBQ08sbUJBQ1AsV0FDSyxnQkFDcEIiLCJmaWxlIjoiRTpcXHJlYWN0bmV4dFxcY29tcG9uZW50c1xcZm9vdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuY2xhc3MgRm9vdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcclxuXHRcdHN1cGVyKHByb3BzKVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5yZW5kZXIoKXtcclxucmV0dXJuKFxyXG4gICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiAgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XHJcblx0XHRcdDxwPiBDb3B5cmlnaHQgMjAyMCDCqSBDeWJlciBJbnRlbGxpZ2VuY2UgSG91c2U8L3A+XHJcblx0XHRcdDwvZGl2PlxyXG4gICAgXHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAuZm9vdGVye1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6MTAwcHg7XHJcbiAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxuXHJcbiAgICBgfVxyXG5cclxuXHJcbiAgICA8L3N0eWxlPlxyXG4gICAgXHJcbiAgICA8L2Rpdj5cclxuXHJcbilcclxufVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjsiXX0= */\n/*@ sourceURL=E:\\\\reactnext\\\\components\\\\footer.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/landingcontent.js":
/*!**************************************!*\
  !*** ./components/landingcontent.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "E:\\reactnext\\components\\landingcontent.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



class Landingcontent extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return __jsx("div", {
      className: "jsx-3713670795",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 4
      }
    }, __jsx("div", {
      className: "jsx-3713670795" + " " + "main1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 4
      }
    }, __jsx("div", {
      className: "jsx-3713670795" + " " + "c1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 5
      }
    }, __jsx("div", {
      className: "jsx-3713670795" + " " + "c1main",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 6
      }
    }, __jsx("div", {
      className: "jsx-3713670795" + " " + "m1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 7
      }
    }, __jsx("p", {
      className: "jsx-3713670795",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 7
      }
    }, __jsx("b", {
      className: "jsx-3713670795",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 10
      }
    }, "112")), __jsx("p", {
      className: "jsx-3713670795",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 7
      }
    }, " Matches for exposed Information"), __jsx("hr", {
      className: "jsx-3713670795",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 7
      }
    })), __jsx("div", {
      className: "jsx-3713670795" + " " + "m2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 7
      }
    }, __jsx("p", {
      className: "jsx-3713670795",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 7
      }
    }, __jsx("b", {
      className: "jsx-3713670795",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 10
      }
    }, "63")), __jsx("p", {
      className: "jsx-3713670795",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21,
        columnNumber: 7
      }
    }, " Passwords found")), __jsx("div", {
      className: "jsx-3713670795" + " " + "m3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 7
      }
    }, __jsx("p", {
      className: "jsx-3713670795",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 7
      }
    }, __jsx("b", {
      className: "jsx-3713670795",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 10
      }
    }, "29")), __jsx("p", {
      className: "jsx-3713670795",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 7
      }
    }, " Personal Information")), __jsx("div", {
      className: "jsx-3713670795" + " " + "m4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 7
      }
    }, __jsx("p", {
      className: "jsx-3713670795",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 7
      }
    }, __jsx("b", {
      className: "jsx-3713670795",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 10
      }
    }, "20")), __jsx("p", {
      className: "jsx-3713670795",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 7
      }
    }, "Hacker Group Targeting")), __jsx("div", {
      className: "jsx-3713670795" + " " + "m5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 7
      }
    }, __jsx("a", {
      className: "jsx-3713670795",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 7
      }
    }, __jsx("pre", {
      className: "jsx-3713670795",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 7
      }
    }, " View ", __jsx("b", {
      className: "jsx-3713670795",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 18
      }
    }, "Exposed Information"), " ", __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
      flipped: "horizontally",
      fitted: true,
      name: "caret left",
      size: "large",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 45
      }
    })))))), __jsx("div", {
      className: "jsx-3713670795" + " " + "c2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 5
      }
    }, __jsx("div", {
      className: "jsx-3713670795" + " " + "c1main",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 6
      }
    }, __jsx("div", {
      className: "jsx-3713670795" + " " + "m1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 7
      }
    }, __jsx("p", {
      className: "jsx-3713670795",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 7
      }
    }, __jsx("b", {
      className: "jsx-3713670795",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 10
      }
    }, "31")), __jsx("p", {
      className: "jsx-3713670795",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 7
      }
    }, " Visible assets"), __jsx("hr", {
      className: "jsx-3713670795",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 7
      }
    })), __jsx("div", {
      className: "jsx-3713670795" + " " + "m2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 7
      }
    }, __jsx("p", {
      className: "jsx-3713670795",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 7
      }
    }, __jsx("b", {
      className: "jsx-3713670795",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 10
      }
    }, "31")), __jsx("p", {
      className: "jsx-3713670795",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 7
      }
    }, " Confirmed assets")), __jsx("div", {
      className: "jsx-3713670795" + " " + "m3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 7
      }
    }, __jsx("p", {
      className: "jsx-3713670795",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 7
      }
    }, __jsx("b", {
      className: "jsx-3713670795",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 10
      }
    }, "0")), __jsx("p", {
      className: "jsx-3713670795",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 7
      }
    }, " Pending assets")), __jsx("div", {
      className: "jsx-3713670795" + " " + "m15",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 7
      }
    }, __jsx("a", {
      className: "jsx-3713670795",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 7
      }
    }, __jsx("pre", {
      className: "jsx-3713670795",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 7
      }
    }, " View ", __jsx("b", {
      className: "jsx-3713670795",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 18
      }
    }, "Assets"), " ", __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
      flipped: "horizontally",
      fitted: true,
      name: "caret left",
      size: "large",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 32
      }
    })))))), __jsx("div", {
      className: "jsx-3713670795" + " " + "c3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 5
      }
    }, __jsx("div", {
      className: "jsx-3713670795" + " " + "c1main",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 6
      }
    }, __jsx("div", {
      className: "jsx-3713670795" + " " + "m1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 7
      }
    }, __jsx("p", {
      className: "jsx-3713670795",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 7
      }
    }, __jsx("b", {
      className: "jsx-3713670795",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 10
      }
    }, "0"), __jsx("p1", {
      className: "jsx-3713670795",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 18
      }
    }, __jsx("b", {
      className: "jsx-3713670795",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 22
      }
    }, "/")), __jsx("p2", {
      className: "jsx-3713670795",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 35
      }
    }, __jsx("b", {
      className: "jsx-3713670795",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 39
      }
    }, "16"))), __jsx("p", {
      className: "jsx-3713670795",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 7
      }
    }, " Assets in infrastructure testing"), __jsx("hr", {
      className: "jsx-3713670795",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 7
      }
    })), __jsx("div", {
      className: "jsx-3713670795" + " " + "m2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 7
      }
    }, __jsx("p", {
      className: "jsx-3713670795",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 7
      }
    }, __jsx("b", {
      className: "jsx-3713670795",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 10
      }
    }, "0"), __jsx("p1", {
      className: "jsx-3713670795",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 18
      }
    }, __jsx("b", {
      className: "jsx-3713670795",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 22
      }
    }, "/")), __jsx("p2", {
      className: "jsx-3713670795",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 35
      }
    }, __jsx("b", {
      className: "jsx-3713670795",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 39
      }
    }, "1"))), __jsx("p", {
      className: "jsx-3713670795",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 7
      }
    }, " Assets in application testing")), __jsx("div", {
      className: "jsx-3713670795" + " " + "m3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 7
      }
    }, __jsx("p", {
      className: "jsx-3713670795",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 7
      }
    }, __jsx("b", {
      className: "jsx-3713670795",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 10
      }
    }, "0"), __jsx("p1", {
      className: "jsx-3713670795",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 18
      }
    }, __jsx("b", {
      className: "jsx-3713670795",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 22
      }
    }, "/")), __jsx("p2", {
      className: "jsx-3713670795",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 35
      }
    }, __jsx("b", {
      className: "jsx-3713670795",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 39
      }
    }, "1"))), __jsx("p", {
      className: "jsx-3713670795",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 7
      }
    }, " Assets in penetration testing")), __jsx("div", {
      className: "jsx-3713670795" + " " + "m15",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 7
      }
    }, __jsx("a", {
      className: "jsx-3713670795",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 7
      }
    }, __jsx("pre", {
      className: "jsx-3713670795",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 7
      }
    }, " View ", __jsx("b", {
      className: "jsx-3713670795",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 18
      }
    }, "Continuous testing"), " ", __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__["Icon"], {
      flipped: "horizontally",
      fitted: true,
      name: "caret left",
      size: "large",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 44
      }
    }))))))), __jsx("div", {
      className: "jsx-3713670795" + " " + "needhelp",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 4
      }
    }, __jsx("div", {
      className: "jsx-3713670795" + " " + "needhelp1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 5
      }
    }, __jsx("h1", {
      className: "jsx-3713670795",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 6
      }
    }, " Need help? "), __jsx("p", {
      className: "jsx-3713670795",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 6
      }
    }, "You can get analyst support using our", __jsx("br", {
      className: "jsx-3713670795",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 46
      }
    }), "online chat or organise a call to our expert.")), __jsx("button", {
      className: "jsx-3713670795" + " " + "btnsuccess",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 5
      }
    }, "Support")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "3713670795",
      __self: this
    }, ".btnsuccess.jsx-3713670795{border:2px solid black;background-color:white;color:black;padding:14px 28px;font-size:16px;cursor:pointer;}.btnsuccess.jsx-3713670795:hover{border-color:gray;color:gray;}.needhelp1.jsx-3713670795{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;height:200px;}.needhelp.jsx-3713670795{position:relative;height:400px;margin-top:40px;margin-left:50px;}.m5.jsx-3713670795 a.jsx-3713670795{color:gray;}.m5.jsx-3713670795 a.jsx-3713670795:hover{color:black;-webkit-text-decoration:none;text-decoration:none;cursor:pointer;}.m15.jsx-3713670795 a.jsx-3713670795{color:gray;}.m15.jsx-3713670795 a.jsx-3713670795:hover{color:black;-webkit-text-decoration:none;text-decoration:none;cursor:pointer;}.c1main.jsx-3713670795{margin-left:15px;margin-top:30px;width:90%;}.m1.jsx-3713670795>p.jsx-3713670795{line-height:10px;}.m2.jsx-3713670795{margin-top:15px;}.m2.jsx-3713670795>p.jsx-3713670795{line-height:10px;}.m3.jsx-3713670795{margin-top:20px;}.m3.jsx-3713670795>p.jsx-3713670795{line-height:10px;}.m4.jsx-3713670795{margin-top:20px;}.m4.jsx-3713670795>p.jsx-3713670795{line-height:10px;}.m5.jsx-3713670795{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;margin-top:30px;}.m15.jsx-3713670795{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:flex-end;-webkit-box-align:flex-end;-ms-flex-align:flex-end;align-items:flex-end;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;margin-top:90px;}.main1.jsx-3713670795{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:500px;margin-top:80px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}.c1.jsx-3713670795{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-top:60px;background:white;height:350px;width:350px;margin-left:10px;border:0.5px solid #dddfe6;box-shadow:0 20px 60px 0 rgba(163,171,186,0);}.c2.jsx-3713670795{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:350px;margin-left:10px;background:white;height:350px;margin-top:60px;border:0.5px solid #dddfe6;box-shadow:0 20px 60px 0 rgba(163,171,186,0);}.c3.jsx-3713670795{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:350px;margin-left:10px;background:white;height:350px;margin-top:60px;border:0.5px solid #dddfe6;box-shadow:0 20px 60px 0 rgba(163,171,186,0);}@media (max-width:1100px){.c1.jsx-3713670795{margin-left:0px;}.main1.jsx-3713670795{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;height:1400px;margin-top:80px;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:space-around;-webkit-justify-content:space-around;-ms-flex-pack:space-around;justify-content:space-around;width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxyZWFjdG5leHRcXGNvbXBvbmVudHNcXGxhbmRpbmdjb250ZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNHZSxBQUk0QixBQVNGLEFBSU4sQUFVRyxBQVFQLEFBR0MsQUFLRCxBQUdDLEFBS0ssQUFLQyxBQUdGLEFBR0UsQUFHRixBQUdFLEFBR0YsQUFHRSxBQUdMLEFBUUEsQUFZQSxBQVlBLEFBV0EsQUFXQSxBQVlJLEFBR0QsV0E5R2hCLEFBUUEsQ0FMcUIsQUFRQSxJQWFyQixBQU1BLEFBTUEsQUF3RUMsQ0E1RmUsQUFLaEIsQUFNQSxBQU1BLEFBTUEsQ0E3RGMsQUFlRCxLQXhCVSxNQVVyQixFQWVjLEVBdUJOLFVBQ1YsR0FoRFksQ0F5QkssV0F4QkMsSUFpQ0gsQUFRQSxFQWZmLFVBZndCLEFBNERILEFBUUEsQUFZRixBQVlILEFBV0osQUFXQSxBQWVVLEVBM0lQLENBaUNmLEFBUUEsU0F5RWlCLEFBV0EsSUF0QkEsQ0F0R0YsWUFrSEUsQUFXQSxHQTVIakIsQ0FzR2EsYUFDRCxBQVdDLEFBV0EsWUFyQkksQ0FXQSxBQVdBLFVBckNKLE1BZ0JnQixBQVdBLEFBV0EsR0F0SGhCLEFBaUlDLElBaERFLE9BL0VELEdBZ0lDLE1BaERHLEdBdEJNLEFBUUEsQ0EvRHZCLEFBNEZnRCxBQVdBLEFBV0EsTUFZL0IsdUNBaENuQixBQVdBLEFBVUEsNENBckN1QixPQXRCUCxBQVFBLEdBK0RhLGFBcEU3QixBQVFBLDRFQWdCQSxrQ0E2Q1csV0FFUCIsImZpbGUiOiJFOlxccmVhY3RuZXh0XFxjb21wb25lbnRzXFxsYW5kaW5nY29udGVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7Q29tcG9uZW50fSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEljb24gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuY2xhc3MgTGFuZGluZ2NvbnRlbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpe1xyXG5cdFx0c3VwZXIocHJvcHMpXHJcblxyXG5cdH1cclxuXHRyZW5kZXIoKXtcclxuXHRcdHJldHVybihcclxuXHRcdFx0PGRpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtYWluMVwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYzFcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYzFtYWluXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibTFcIj5cclxuXHRcdFx0XHRcdFx0PHA+PGI+MTEyPC9iPjwvcD5cclxuXHRcdFx0XHRcdFx0PHA+IE1hdGNoZXMgZm9yIGV4cG9zZWQgSW5mb3JtYXRpb248L3A+XHJcblx0XHRcdFx0XHRcdDxoci8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm0yXCI+XHJcblx0XHRcdFx0XHRcdDxwPjxiPjYzPC9iPjwvcD5cclxuXHRcdFx0XHRcdFx0PHA+IFBhc3N3b3JkcyBmb3VuZDwvcD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibTNcIj5cclxuXHRcdFx0XHRcdFx0PHA+PGI+Mjk8L2I+PC9wPlxyXG5cdFx0XHRcdFx0XHQ8cD4gUGVyc29uYWwgSW5mb3JtYXRpb248L3A+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm00XCI+XHJcblx0XHRcdFx0XHRcdDxwPjxiPjIwPC9iPjwvcD5cclxuXHRcdFx0XHRcdFx0PHA+SGFja2VyIEdyb3VwIFRhcmdldGluZzwvcD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibTVcIj5cclxuXHRcdFx0XHRcdFx0PGE+XHJcblx0XHRcdFx0XHRcdDxwcmU+IFZpZXcgPGI+RXhwb3NlZCBJbmZvcm1hdGlvbjwvYj4gPEljb24gZmxpcHBlZD0naG9yaXpvbnRhbGx5JyBmaXR0ZWQgbmFtZT0nY2FyZXQgbGVmdCcgc2l6ZT1cImxhcmdlXCIgLz5cclxuXHRcdFx0XHRcdFx0PC9wcmU+XHJcblx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImMyXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImMxbWFpblwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm0xXCI+XHJcblx0XHRcdFx0XHRcdDxwPjxiPjMxPC9iPjwvcD5cclxuXHRcdFx0XHRcdFx0PHA+IFZpc2libGUgYXNzZXRzPC9wPlxyXG5cdFx0XHRcdFx0XHQ8aHIvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtMlwiPlxyXG5cdFx0XHRcdFx0XHQ8cD48Yj4zMTwvYj48L3A+XHJcblx0XHRcdFx0XHRcdDxwPiBDb25maXJtZWQgYXNzZXRzPC9wPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtM1wiPlxyXG5cdFx0XHRcdFx0XHQ8cD48Yj4wPC9iPjwvcD5cclxuXHRcdFx0XHRcdFx0PHA+IFBlbmRpbmcgYXNzZXRzPC9wPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtMTVcIj5cclxuXHRcdFx0XHRcdFx0PGE+XHJcblx0XHRcdFx0XHRcdDxwcmU+IFZpZXcgPGI+QXNzZXRzPC9iPiA8SWNvbiBmbGlwcGVkPSdob3Jpem9udGFsbHknIGZpdHRlZCBuYW1lPSdjYXJldCBsZWZ0JyBzaXplPVwibGFyZ2VcIiAvPlxyXG5cdFx0XHRcdFx0XHQ8L3ByZT5cclxuXHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFxyXG5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImMzXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImMxbWFpblwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm0xXCI+XHJcblx0XHRcdFx0XHRcdDxwPjxiPjA8L2I+PHAxPjxiPi88L2I+PC9wMT48cDI+PGI+MTY8L2I+PC9wMj48L3A+XHJcblx0XHRcdFx0XHRcdDxwPiBBc3NldHMgaW4gaW5mcmFzdHJ1Y3R1cmUgdGVzdGluZzwvcD5cclxuXHRcdFx0XHRcdFx0PGhyLz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibTJcIj5cclxuXHRcdFx0XHRcdFx0PHA+PGI+MDwvYj48cDE+PGI+LzwvYj48L3AxPjxwMj48Yj4xPC9iPjwvcDI+PC9wPlxyXG5cdFx0XHRcdFx0XHQ8cD4gQXNzZXRzIGluIGFwcGxpY2F0aW9uIHRlc3Rpbmc8L3A+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm0zXCI+XHJcblx0XHRcdFx0XHRcdDxwPjxiPjA8L2I+PHAxPjxiPi88L2I+PC9wMT48cDI+PGI+MTwvYj48L3AyPjwvcD5cclxuXHRcdFx0XHRcdFx0PHA+IEFzc2V0cyBpbiBwZW5ldHJhdGlvbiB0ZXN0aW5nPC9wPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibTE1XCI+XHJcblx0XHRcdFx0XHRcdDxhPlxyXG5cdFx0XHRcdFx0XHQ8cHJlPiBWaWV3IDxiPkNvbnRpbnVvdXMgdGVzdGluZzwvYj4gPEljb24gZmxpcHBlZD0naG9yaXpvbnRhbGx5JyBmaXR0ZWQgbmFtZT0nY2FyZXQgbGVmdCcgc2l6ZT1cImxhcmdlXCIgLz5cclxuXHRcdFx0XHRcdFx0PC9wcmU+XHJcblx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHJcblxyXG5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmVlZGhlbHBcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5lZWRoZWxwMVwiPlxyXG5cdFx0XHRcdFx0PGgxPiBOZWVkIGhlbHA/IDwvaDE+XHJcblx0XHRcdFx0XHQ8cD5Zb3UgY2FuIGdldCBhbmFseXN0IHN1cHBvcnQgdXNpbmcgb3VyPGJyLz5cclxuXHRcdFx0XHRcdG9ubGluZSBjaGF0IG9yIG9yZ2FuaXNlIGEgY2FsbCB0byBvdXIgZXhwZXJ0LlxyXG5cdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxidXR0b24gY2xhc3NOYW1lPVwiYnRuc3VjY2Vzc1wiPlN1cHBvcnQ8L2J1dHRvbj5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cclxuXHRcdFx0PHN0eWxlIGpzeD57YFxyXG5cclxuXHRcdFx0XHQuYnRuc3VjY2VzcyB7XHJcblx0XHRcdFx0Ym9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcblx0XHRcdFx0YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblx0XHRcdFx0Y29sb3I6IGJsYWNrO1xyXG5cdFx0XHRcdHBhZGRpbmc6IDE0cHggMjhweDtcclxuXHRcdFx0XHRmb250LXNpemU6IDE2cHg7XHJcblx0XHRcdFx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0LmJ0bnN1Y2Nlc3M6aG92ZXJ7XHJcblx0ICBcdFx0XHRcdGJvcmRlci1jb2xvcjogZ3JheTtcclxuICBcdFx0XHRcdFx0Y29sb3I6IGdyYXk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHQubmVlZGhlbHAxe1xyXG5cdFx0XHRcdFx0XHRcdGRpc3BsYXk6ZmxleDtcclxuXHRcdFx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcblx0XHRcdFx0XHRcdFx0d2lkdGg6MTAwJTtcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRoZWlnaHQ6MjAwcHg7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdC5uZWVkaGVscHtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0cG9zaXRpb246cmVsYXRpdmU7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGhlaWdodDo0MDBweDtcclxuXHRcdFx0XHRcdG1hcmdpbi10b3A6NDBweDtcclxuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OjUwcHg7XHJcblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQubTUgYXtcclxuXHRcdFx0XHRcdGNvbG9yOmdyYXk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5tNSBhOmhvdmVye1xyXG5cdFx0XHRcdFx0Y29sb3I6YmxhY2s7XHJcblx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuXHRcdFx0XHRcdGN1cnNvcjpwb2ludGVyO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQubTE1IGF7XHJcblx0XHRcdFx0XHRjb2xvcjpncmF5O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQubTE1IGE6aG92ZXJ7XHJcblx0XHRcdFx0XHRjb2xvcjpibGFjaztcclxuXHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG5cdFx0XHRcdFx0Y3Vyc29yOnBvaW50ZXI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5jMW1haW57XHJcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDoxNXB4O1xyXG5cdFx0XHRcdFx0bWFyZ2luLXRvcDozMHB4O1xyXG5cdFx0XHRcdFx0d2lkdGg6OTAlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQubTEgPnB7XHJcblx0XHRcdFx0XHRsaW5lLWhlaWdodDogMTBweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Lm0ye1xyXG5cdFx0XHRcdFx0bWFyZ2luLXRvcDoxNXB4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQubTIgPnB7XHJcblx0XHRcdFx0XHRsaW5lLWhlaWdodDogMTBweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Lm0ze1xyXG5cdFx0XHRcdFx0bWFyZ2luLXRvcDoyMHB4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQubTMgPnB7XHJcblx0XHRcdFx0XHRsaW5lLWhlaWdodDogMTBweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Lm00e1xyXG5cdFx0XHRcdFx0bWFyZ2luLXRvcDoyMHB4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQubTQgPnB7XHJcblx0XHRcdFx0XHRsaW5lLWhlaWdodDogMTBweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Lm01e1xyXG5cdFx0XHRcdFx0ZGlzcGxheTpmbGV4O1xyXG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6ZmxleC1lbmQ7XHJcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7XHJcblx0XHRcdFx0XHRtYXJnaW4tdG9wOjMwcHg7XHJcblxyXG5cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Lm0xNXtcclxuXHRcdFx0XHRcdGRpc3BsYXk6ZmxleDtcclxuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOmZsZXgtZW5kO1xyXG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OmZsZXgtZW5kO1xyXG5cdFx0XHRcdFx0bWFyZ2luLXRvcDo5MHB4O1xyXG5cclxuXHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRcclxuXHRcdFx0XHJcblx0XHRcdFx0Lm1haW4xe1xyXG5cclxuXHRcdFx0XHRcdGRpc3BsYXk6ZmxleDtcclxuXHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOnJvdztcclxuXHRcdFx0XHRcdGhlaWdodDo1MDBweDtcclxuXHRcdFx0XHRcdG1hcmdpbi10b3A6ODBweDtcclxuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFxyXG5cclxuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5jMXtcclxuXHRcdFx0XHRcdGRpc3BsYXk6ZmxleDtcclxuXHRcdFx0XHRcdG1hcmdpbi10b3A6NjBweDtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6d2hpdGU7XHJcblx0XHRcdFx0XHRoZWlnaHQ6MzUwcHg7XHJcblx0XHRcdFx0XHR3aWR0aDozNTBweDtcclxuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OjEwcHg7XHJcblx0XHRcdFx0XHQgYm9yZGVyOiAwLjVweCBzb2xpZCAjZGRkZmU2OztcclxuXHRcdFx0XHRcdCBib3gtc2hhZG93OiAwIDIwcHggNjBweCAwIHJnYmEoMTYzLCAxNzEsIDE4NiwgMCk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LmMye1xyXG5cdFx0XHRcdFx0ZGlzcGxheTpmbGV4O1xyXG5cdFx0XHRcdFx0d2lkdGg6MzUwcHg7XHJcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDoxMHB4O1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDp3aGl0ZTtcclxuXHRcdFx0XHRcdGhlaWdodDozNTBweDtcclxuXHRcdFx0XHRcdCBtYXJnaW4tdG9wOjYwcHg7XHJcblx0XHRcdFx0XHQgYm9yZGVyOiAwLjVweCBzb2xpZCAjZGRkZmU2OztcclxuXHRcdFx0XHRcdCBib3gtc2hhZG93OiAwIDIwcHggNjBweCAwIHJnYmEoMTYzLCAxNzEsIDE4NiwgMCk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LmMze1xyXG5cdFx0XHRcdFx0ZGlzcGxheTpmbGV4O1xyXG5cdFx0XHRcdFx0d2lkdGg6MzUwcHg7XHJcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDoxMHB4O1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDp3aGl0ZTtcclxuXHRcdFx0XHRcdGhlaWdodDozNTBweDtcclxuXHRcdFx0XHRcdCBtYXJnaW4tdG9wOjYwcHg7XHJcblx0XHRcdFx0XHQgYm9yZGVyOiAwLjVweCBzb2xpZCAjZGRkZmU2OztcclxuXHRcdFx0XHRcdCBib3gtc2hhZG93OiAwIDIwcHggNjBweCAwIHJnYmEoMTYzLCAxNzEsIDE4NiwgMCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdCBAbWVkaWEgKG1heC13aWR0aDogMTEwMHB4KSB7XHJcblxyXG5cdFx0XHRcdFx0LmMxe1xyXG5cdFx0XHRcdFx0XHRtYXJnaW4tbGVmdDowcHg7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0ICAgIC5tYWluMXtcclxuXHRcdFx0XHQgICAgZGlzcGxheTpmbGV4O1xyXG5cdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG5cdFx0XHRcdFx0aGVpZ2h0OjE0MDBweDtcclxuXHRcdFx0XHRcdG1hcmdpbi10b3A6ODBweDtcclxuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDpzcGFjZS1hcm91bmQ7XHJcblx0XHRcdFx0XHR3aWR0aDoxMDAlO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0ICAgIH1cclxuXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0YH08L3N0eWxlPlxyXG5cclxuXHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0KVxyXG5cdH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBMYW5kaW5nY29udGVudCJdfQ== */\n/*@ sourceURL=E:\\\\reactnext\\\\components\\\\landingcontent.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Landingcontent);

/***/ }),

/***/ "./components/navigation.js":
/*!**********************************!*\
  !*** ./components/navigation.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets.js */ "./components/assets.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "E:\\reactnext\\components\\navigation.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class Navigation extends react__WEBPACK_IMPORTED_MODULE_1___default.a.Component {
  constructor(props) {
    super(props);

    _defineProperty(this, "backdropClickHandler", () => {
      this.setState(prevState => {
        return {
          show: !prevState.show
        };
      });
    });

    _defineProperty(this, "backdropClickHandler1", () => {
      this.setState(prevState => {
        return {
          showa: !prevState.showa
        };
      });
    });

    _defineProperty(this, "backdropClickHandler2", () => {
      this.setState(prevState => {
        return {
          showb: !prevState.showb
        };
      });
    });

    _defineProperty(this, "backdropClickHandler3", () => {
      this.setState(prevState => {
        return {
          showc: !prevState.showc
        };
      });
    });

    this.state = {
      show: false,
      showa: false,
      showb: false,
      showc: false
    };
    this.backdropClickHandlert = this.backdropClickHandlert.bind(this);
    this.backdropClickHandlerf = this.backdropClickHandlerf.bind(this);
    this.backdropClickHandler1t = this.backdropClickHandler1t.bind(this);
    this.backdropClickHandler1f = this.backdropClickHandler1f.bind(this);
    this.twofunctionso = this.twofunctionso.bind(this);
    this.twofunctionsf = this.twofunctionsf.bind(this);
    this.twofunctionso1 = this.twofunctionso1.bind(this);
    this.twofunctionsf1 = this.twofunctionsf1.bind(this);
  }

  backdropClickHandlert() {
    this.setState({
      show: true
    });
  }

  backdropClickHandlerf() {
    this.setState({
      show: false
    });
  }

  backdropClickHandler1t() {
    this.setState({
      showa: true
    });
  }

  backdropClickHandler1f() {
    this.setState({
      showa: false
    });
  }

  twofunctionso() {
    this.backdropClickHandlert();
    this.backdropClickHandler1t();
  }

  twofunctionsf() {
    this.backdropClickHandlerf();
    this.backdropClickHandler1f();
  }

  twofunctionso1() {
    this.backdropClickHandlert();
    this.backdropClickHandler2();
  }

  twofunctionsf1() {
    this.backdropClickHandlerf();
    this.backdropClickHandler2();
  }

  render() {
    return __jsx("div", {
      className: "jsx-241816005",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 5
      }
    }, __jsx("nav", {
      className: "jsx-241816005" + " " + "designing",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 9
      }
    }, __jsx("li", {
      className: "jsx-241816005" + " " + "logo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 13
      }
    }, " ", __jsx("img", {
      src: "logo.png",
      className: "jsx-241816005" + " " + "l1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 35
      }
    }), "  "), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/dashboardpage",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 13
      }
    }, __jsx("li", {
      onMouseEnter: this.backdropClickHandlert,
      onMouseLeave: this.backdropClickHandlerf,
      className: "jsx-241816005" + " " + "link1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 13
      }
    }, "Exposed Information")), __jsx("li", {
      onMouseEnter: this.backdropClickHandler3,
      onMouseLeave: this.backdropClickHandler3,
      className: "jsx-241816005" + " " + "link2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 13
      }
    }, " Assets "), __jsx("li", {
      className: "jsx-241816005" + " " + "link3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 13
      }
    }, " Support "), __jsx("li", {
      className: "jsx-241816005" + " " + "spacer",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 13
      }
    }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 13
      }
    }, __jsx("a", {
      className: "jsx-241816005",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: "usericon.png",
      className: "jsx-241816005" + " " + "userlogo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 32
      }
    }))), __jsx("li", {
      className: "jsx-241816005" + " " + "demoaccount",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 13
      }
    }, " Demo account "), __jsx("li", {
      className: "jsx-241816005",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 13
      }
    }, " ", __jsx("img", {
      src: "out.png",
      className: "jsx-241816005" + " " + "logo1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 19
      }
    }), " ")), __jsx("div", {
      style: {
        display: this.state.show ? "flex" : "none"
      },
      onMouseEnter: this.backdropClickHandlert,
      onMouseLeave: this.backdropClickHandlerf,
      className: "jsx-241816005" + " " + "dropdown-content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 11
      }
    }, __jsx("li", {
      className: "jsx-241816005" + " " + "spacer1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 11
      }
    }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: "/dashboardpage",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 11
      }
    }, __jsx("a", {
      className: "jsx-241816005" + " " + "dashboards",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: "squares.png",
      className: "jsx-241816005",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 13
      }
    }), __jsx("p", {
      className: "jsx-241816005",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 37
      }
    }, "DASHBOARDS"))), __jsx("a", {
      href: "#",
      className: "jsx-241816005",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: "search.png",
      className: "jsx-241816005" + " " + "search",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 1
      }
    }), __jsx("pre", {
      className: "jsx-241816005",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 1
      }
    }, " "), "KEYWORDS"), __jsx("a", {
      href: "#",
      onMouseEnter: this.backdropClickHandler1t,
      onMouseLeave: this.backdropClickHandler1f,
      className: "jsx-241816005",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: "bell.png",
      className: "jsx-241816005" + " " + "alerts",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 1
      }
    }), __jsx("pre", {
      className: "jsx-241816005",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 1
      }
    }, " "), "ALERTS", __jsx("pre", {
      className: "jsx-241816005",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 13
      }
    }, " "), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
      flipped: "horizontally",
      fitted: true,
      name: "caret down",
      size: "large",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 13
      }
    })), __jsx("a", {
      href: "#",
      onMouseEnter: this.backdropClickHandler2,
      onMouseLeave: this.backdropClickHandler2,
      className: "jsx-241816005",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: "sheald.png",
      className: "jsx-241816005" + " " + "sheald",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 1
      }
    }), __jsx("pre", {
      className: "jsx-241816005",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 1
      }
    }, " "), "REMEDIATION", __jsx("pre", {
      className: "jsx-241816005",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 13
      }
    }, " "), __jsx(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
      flipped: "horizontally",
      fitted: true,
      name: "caret down",
      size: "large",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 13
      }
    })), __jsx("a", {
      href: "#",
      className: "jsx-241816005",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: "seating.png",
      className: "jsx-241816005" + " " + "seating",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 1
      }
    }), "SETTINGS")), __jsx("div", {
      style: {
        display: this.state.showa ? "flex" : "none"
      },
      onMouseEnter: this.twofunctionso,
      onMouseLeave: this.twofunctionsf,
      className: "jsx-241816005" + " " + "dropdown-content1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 13
      }
    }, __jsx("a", {
      href: "#",
      className: "jsx-241816005",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 13
      }
    }, "All Alerts"), __jsx("a", {
      href: "#",
      className: "jsx-241816005",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 154,
        columnNumber: 13
      }
    }, "Sensitive Information"), __jsx("a", {
      href: "#",
      className: "jsx-241816005",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 13
      }
    }, "Discussions"), __jsx("a", {
      href: "#",
      className: "jsx-241816005",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 13
      }
    }, "Black Markets"), __jsx("a", {
      href: "#",
      className: "jsx-241816005",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160,
        columnNumber: 13
      }
    }, "Financial"), __jsx("a", {
      href: "#",
      className: "jsx-241816005",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 13
      }
    }, "Exposed Credentials"), __jsx("a", {
      href: "#",
      className: "jsx-241816005",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 13
      }
    }, "Personal Information"), __jsx("a", {
      href: "#",
      className: "jsx-241816005",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 13
      }
    }, "Hacker Group Targeting"), __jsx("a", {
      href: "#",
      className: "jsx-241816005",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 13
      }
    }, "Attack & Compromises"), __jsx("a", {
      href: "#",
      className: "jsx-241816005",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 13
      }
    }, "Under Analysis")), __jsx("div", {
      style: {
        display: this.state.showb ? "flex" : "none"
      },
      onMouseEnter: this.twofunctionso1,
      onMouseLeave: this.twofunctionsf1,
      className: "jsx-241816005" + " " + "dropdown-content3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 13
      }
    }, __jsx("li", {
      className: "jsx-241816005" + " " + "spacer1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 13
      }
    }), __jsx("li", {
      href: "#",
      className: "jsx-241816005" + " " + "dashboards",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 13
      }
    }, __jsx("p", {
      className: "jsx-241816005",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 13
      }
    })), __jsx("li", {
      href: "#",
      className: "jsx-241816005",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 13
      }
    }, __jsx("pre", {
      className: "jsx-241816005",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 13
      }
    }, " ")), __jsx("li", {
      href: "#",
      className: "jsx-241816005",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 13
      }
    }, __jsx("pre", {
      className: "jsx-241816005",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 13
      }
    }, " "), __jsx("pre", {
      className: "jsx-241816005",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 13
      }
    }, " ")), __jsx("li", {
      href: "#",
      className: "jsx-241816005",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 13
      }
    }, __jsx("pre", {
      className: "jsx-241816005",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 13
      }
    }, " "), __jsx("a", {
      className: "jsx-241816005" + " " + "d1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 13
      }
    }, "Actions"), __jsx("pre", {
      className: "jsx-241816005",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 13
      }
    }, "   "), __jsx("a", {
      className: "jsx-241816005" + " " + "d2",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 13
      }
    }, "Log")), __jsx("li", {
      href: "#",
      className: "jsx-241816005",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 197,
        columnNumber: 13
      }
    })), __jsx(_assets_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      call: this.state.showc,
      c: this.backdropClickHandler3,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 13
      }
    }), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      id: "241816005",
      __self: this
    }, ".l1.jsx-241816005{margin-top:0px;width:300px;height:40px;}.designing.jsx-241816005{background:black;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;}.spacer2.jsx-241816005{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background:blue;-webkit-flex-basis:50%;-ms-flex-preferred-size:50%;flex-basis:50%;}.search.jsx-241816005{width:24px;height:24px;}.sheald.jsx-241816005{width:40px;height:40px;}.alerts.jsx-241816005{width:25px;height:25px;}.designing.jsx-241816005>li.jsx-241816005{color:white;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:50px;list-style:none;}.logo.jsx-241816005{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-basis:40%;-ms-flex-preferred-size:40%;flex-basis:40%;}.link1.jsx-241816005{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-family:'Gilroy',sans-serif;width:150px;font-size:15px;border-bottom:3px solid transparent;}.link2.jsx-241816005{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:75px;font-family:\"Gilroy\",sans-serif;font-size:15px;border-bottom:3px solid transparent;}.link3.jsx-241816005{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:70px;font-family:\"Gilroy\",sans-serif;font-size:15px;border-bottom:3px solid transparent;}.spacer.jsx-241816005{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-basis:20%;-ms-flex-preferred-size:20%;flex-basis:20%;}.userlogo.jsx-241816005{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-basis:15%;-ms-flex-preferred-size:15%;flex-basis:15%;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;background:black;height:25px;width:25px;}.demoaccount.jsx-241816005{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;font-family:\"Gilroy\",sans-serif;font-size:14px;width:110px;}.logo1.jsx-241816005{width:25px;height:25px;}.spacer1.jsx-241816005{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-basis:20%;-ms-flex-preferred-size:20%;flex-basis:20%;}.dropdown-content.jsx-241816005{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:white;min-width:160px;box-shadow:0px 8px 16px 0px rgba(0,0,0,0.2);z-index:1;position:absolute;width:100%;}.seating.jsx-241816005{width:35px;height:30px;}.dropdown-content.jsx-241816005>a.jsx-241816005{color:gray;-webkit-text-decoration:none;text-decoration:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-family:'Gilroy',sans-serif;font-size:14px;text-transform:uppercase;font-weight:400;width:180px;height:70px;opacity:0.8;}.dropdown-content.jsx-241816005 a.jsx-241816005:hover{color:black;opacity:1;}.link1.jsx-241816005:hover{border-bottom:3px solid #0076ff;cursor:pointer;}.link2.jsx-241816005:hover{border-bottom:3px solid #0076ff;cursor:pointer;}.link3.jsx-241816005:hover{border-bottom:3px solid #0076ff;cursor:pointer;}.dashboards.jsx-241816005{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100px;}.dashboards.jsx-241816005 img.jsx-241816005{height:30px;width:30px;}.dropdown-content1.jsx-241816005{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:white;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;box-shadow:0px 8px 16px 0px rgba(0,0,0,0.2);z-index:1;position:absolute;width:100%;margin-top:70px;}.dropdown-content1.jsx-241816005>a.jsx-241816005{color:gray;-webkit-text-decoration:none;text-decoration:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-family:'Gilroy',sans-serif;font-size:12px;height:60px;}.dropdown-content1.jsx-241816005 a.jsx-241816005:hover{color:black;}.dropdown-content3.jsx-241816005{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background:white;min-width:160px;box-shadow:0px 8px 16px 0px rgba(0,0,0,0.2);z-index:1;position:absolute;width:100%;margin-top:70px;}.dropdown-content3.jsx-241816005>li.jsx-241816005{color:gray;-webkit-text-decoration:none;text-decoration:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-family:'Gilroy',sans-serif;font-size:14px;text-transform:uppercase;font-weight:400;width:180px;height:60px;opacity:0.8;list-style:none;cursor:default;}.d1.jsx-241816005{color:gray;-webkit-text-decoration:none;text-decoration:none;}.d2.jsx-241816005{color:gray;-webkit-text-decoration:none;text-decoration:none;}.d1.jsx-241816005:hover{color:black;cursor:pointer;}.d2.jsx-241816005:hover{color:black;cursor:pointer;}@media (max-width:1044px){.designing.jsx-241816005{width:100%;}.dropdown-content.jsx-241816005{width:100%;}.dropdown-content1.jsx-241816005{width:100%;}.dropdown-content3.jsx-241816005{width:100%;}.designing.jsx-241816005 .link1.jsx-241816005{display:none;}.designing.jsx-241816005 .link2.jsx-241816005{display:none;}.designing.jsx-241816005 .link3.jsx-241816005{display:none;}}@media (max-width:604px){.designing.jsx-241816005{width:100%;}}@media (max-width:304px){.designing.jsx-241816005{width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6XFxyZWFjdG5leHRcXGNvbXBvbmVudHNcXG5hdmlnYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNk1zQixBQUcrQixBQUtYLEFBV1AsQUFLTyxBQUlILEFBSUYsQUFJRCxBQVNFLEFBS0UsQUFPQSxBQU9BLEFBT0YsQUFNQSxBQVFFLEFBUU4sQUFTSSxBQUtBLEFBWUQsQUFLRCxBQWdCeUIsQUFHTSxBQUNBLEFBQ0EsQUFFN0IsQUFPQSxBQUlBLEFBY0EsQUFZd0IsQUFHeEIsQUFlRixBQW1CSCxBQUlBLEFBR1ksQUFDQSxBQUdQLEFBR0QsQUFHQSxBQUdBLEFBR08sQUFJQSxBQUdBLEFBTU4sQUFNQyxXQTlPRCxBQUlBLEFBSUEsQUE2REgsQUEwQkcsQUFLUSxBQWlEQSxBQTZCQSxBQW1CSCxBQUlBLEFBT2pCLEFBR0EsQUFHQSxBQUdBLEFBZ0JBLEFBTUMsQ0FuT1csQUF1R2lDLEFBZWxDLEFBNkIwQixBQTRDSCxBQUNBLENBaUJqQyxBQUdBLEFBR0EsRUF4UHVCLEVBS1osS0FtSWtDLENBbEhqRCxBQUlBLEFBSUEsQUE2REEsQUEwQkEsQUFtQ0EsSUF2SjJCLEFBK05XLEFBQ0EsS0F0RnNCLEFBQ0EsQUFDQSxPQTNJaEQsUUF5SWlELEFBQ0EsQUFDQSxjQW5CN0MsQUFpREEsQUE2QkEsQUFtQmhCLEFBSUEsYUEvTWUsQUEyQkUsQUFJb0IsQUFPdkIsQUFPQSxBQU9HLEFBTUYsQUFRYyxBQWlCWixBQUtJLEFBd0NBLEFBV0EsQUE2QkEsV0FqSWdCLEFBT0csQ0E1QmYsSUFqQlgsQ0FYTyxlQTBDUixXQVFJLEFBT0EsQ0FkQSxjQVFvQixBQU9BLENBZEEsRUF5RWhCLEFBaURBLEFBNkJBLEtBN0pyQixBQTJCQSxBQUk2QixBQXlCN0IsR0FLNkIsQUF3Q1IsQUFXRixBQTZCVSxhQXZLN0IsSUFYcUIsUUFtRHJCLEFBT0EsQ0FkQSxFQWdDd0MsY0FoRG5CLGtCQWlESCxDQXdDRyxBQWlEQSxBQTZCQSxjQXJITixZQUVmLE1BMkRZLEFBV08sQ0FqRkYsV0E4QkUsQUEwQ25CLEFBc0NtQixLQWpMUCxBQXFKa0IsQ0FqRmhCLFVBaEVkLEVBaUVhLFdBQ2IsQ0EzQ2MsWUFFRyxPQXVGUSxBQWlEQSxBQTZCQSxTQXBLekIsbUNBb0VtQixBQWdGQSxpQkEvRUQsQUFnRkEsZ0JBL0U0QixBQWdGQSxFQTlCQSxvQkFqQ1AsQUFpREEsQUE2QkEsc0JBOUYzQixBQWdGQSxFQTlCQSxRQWpETyxBQWdCRixBQWlEQSxBQWVNLEFBY04sRUE1Q0ksYUFqQ0ssQUFrRGIsQUE0QmEsR0E5RmQsQUFnRkEsRUE5QkEsT0FpQlosRUFsRUEsQUFnRmlCLEVBOUJBLFNBbENBLEFBOEVBLEtBYmpCLEVBOUJBLFNBbENjLEFBOEVBLFlBN0VELEFBOEVBLFlBN0VDLEFBOEVBLFlBN0VkLEFBOEVpQixnQkFFRSxlQUVuQiIsImZpbGUiOiJFOlxccmVhY3RuZXh0XFxjb21wb25lbnRzXFxuYXZpZ2F0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IEFzc2V0cyBmcm9tIFwiLi9hc3NldHMuanNcIlxyXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcbmNsYXNzIE5hdmlnYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpe1xyXG5cdFx0c3VwZXIocHJvcHMpXHJcbiAgICAgICAgdGhpcy5zdGF0ZT17XHJcbiAgICAgICAgICAgIHNob3c6ZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3dhOmZhbHNlLFxyXG4gICAgICAgICAgICBzaG93YjpmYWxzZSxcclxuICAgICAgICAgICAgc2hvd2M6ZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcnQ9dGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcnQuYmluZCh0aGlzKVxyXG4gICAgICAgIHRoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXJmPXRoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXJmLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLmJhY2tkcm9wQ2xpY2tIYW5kbGVyMXQ9dGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcjF0LmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLmJhY2tkcm9wQ2xpY2tIYW5kbGVyMWY9dGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcjFmLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLnR3b2Z1bmN0aW9uc289dGhpcy50d29mdW5jdGlvbnNvLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLnR3b2Z1bmN0aW9uc2Y9dGhpcy50d29mdW5jdGlvbnNmLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLnR3b2Z1bmN0aW9uc28xPXRoaXMudHdvZnVuY3Rpb25zbzEuYmluZCh0aGlzKVxyXG4gICAgICAgIHRoaXMudHdvZnVuY3Rpb25zZjE9dGhpcy50d29mdW5jdGlvbnNmMS5iaW5kKHRoaXMpXHJcblx0fVxyXG4gIGJhY2tkcm9wQ2xpY2tIYW5kbGVyID0oKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtzaG93OiAhcHJldlN0YXRlLnNob3d9O1xyXG5cclxuICAgICAgICBcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgfTtcclxuXHJcbiAgICBiYWNrZHJvcENsaWNrSGFuZGxlcjEgPSgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge3Nob3dhOiAhcHJldlN0YXRlLnNob3dhfTsgICAgICAgIFxyXG4gICAgfSk7XHJcblxyXG5cclxuICB9O1xyXG4gICAgICBiYWNrZHJvcENsaWNrSGFuZGxlcjIgPSgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge3Nob3diOiAhcHJldlN0YXRlLnNob3difTsgICAgICAgIFxyXG4gICAgfSk7XHJcblxyXG5cclxuICB9O1xyXG4gIGJhY2tkcm9wQ2xpY2tIYW5kbGVyMyA9KCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7c2hvd2M6ICFwcmV2U3RhdGUuc2hvd2N9OyAgICAgICAgXHJcbiAgICB9KTtcclxuXHJcblxyXG4gIH07XHJcbiAgYmFja2Ryb3BDbGlja0hhbmRsZXJ0KCl7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtzaG93OnRydWV9KVxyXG5cclxuICB9O1xyXG4gICAgYmFja2Ryb3BDbGlja0hhbmRsZXJmKCl7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtzaG93OmZhbHNlfSlcclxuICB9O1xyXG4gIGJhY2tkcm9wQ2xpY2tIYW5kbGVyMXQoKXtcclxuICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dhOnRydWV9KVxyXG5cclxuICB9O1xyXG4gICAgYmFja2Ryb3BDbGlja0hhbmRsZXIxZigpe1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7c2hvd2E6ZmFsc2V9KVxyXG4gIH07XHJcbiAgdHdvZnVuY3Rpb25zbygpe1xyXG4gICAgdGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcnQoKVxyXG4gICAgdGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcjF0KClcclxuICB9XHJcbiAgICB0d29mdW5jdGlvbnNmKCl7XHJcbiAgICB0aGlzLmJhY2tkcm9wQ2xpY2tIYW5kbGVyZigpXHJcbiAgICB0aGlzLmJhY2tkcm9wQ2xpY2tIYW5kbGVyMWYoKVxyXG4gIH1cclxuICAgIHR3b2Z1bmN0aW9uc28xKCl7XHJcbiAgICB0aGlzLmJhY2tkcm9wQ2xpY2tIYW5kbGVydCgpXHJcbiAgICB0aGlzLmJhY2tkcm9wQ2xpY2tIYW5kbGVyMigpXHJcbiAgfVxyXG4gICAgdHdvZnVuY3Rpb25zZjEoKXtcclxuICAgIHRoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXJmKClcclxuICAgIHRoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXIyKClcclxuICB9XHJcbnJlbmRlcigpe1xyXG5cdFx0cmV0dXJuKFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImRlc2lnbmluZ1wiPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibG9nb1wiPiA8aW1nIGNsYXNzTmFtZT1cImwxXCIgc3JjPVwibG9nby5wbmdcIi8+ICA8L2xpPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2Rhc2hib2FyZHBhZ2VcIj5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpbmsxXCIgICBvbk1vdXNlRW50ZXI9e3RoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXJ0fSBvbk1vdXNlTGVhdmU9e3RoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXJmfT4gXHJcbiAgICAgICAgICAgICAgIEV4cG9zZWQgSW5mb3JtYXRpb24gXHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpbmsyXCJcclxuICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17dGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcjN9XHJcbiAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e3RoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXIzfT4gQXNzZXRzIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaW5rM1wiPiBTdXBwb3J0IDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzcGFjZXJcIj48L2xpPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiID48YT48aW1nIHNyYz1cInVzZXJpY29uLnBuZ1wiIGNsYXNzTmFtZT1cInVzZXJsb2dvXCIvPjwvYT48L0xpbms+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkZW1vYWNjb3VudFwiPiBEZW1vIGFjY291bnQgPC9saT5cclxuICAgICAgICAgICAgPGxpID4gPGltZyBzcmM9XCJvdXQucG5nXCIgY2xhc3NOYW1lPVwibG9nbzFcIi8+IDwvbGk+XHJcbiAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGVudFwiICAgICAgc3R5bGU9e3tkaXNwbGF5OnRoaXMuc3RhdGUuc2hvdz9cImZsZXhcIjpcIm5vbmVcIn19XHJcbiAgICAgICAgICBvbk1vdXNlRW50ZXI9e3RoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXJ0fSAgIG9uTW91c2VMZWF2ZT17dGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcmZ9ICAgID5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzcGFjZXIxXCI+PC9saT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZGFzaGJvYXJkcGFnZVwiPlxyXG4gICAgICAgICAgICA8YSAgY2xhc3NOYW1lPVwiZGFzaGJvYXJkc1wiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cInNxdWFyZXMucG5nXCIvPjxwPkRBU0hCT0FSRFM8L3A+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz4gIFxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG48aW1nIHNyYz1cInNlYXJjaC5wbmdcIiBjbGFzc05hbWU9XCJzZWFyY2hcIi8+XHJcbjxwcmU+IDwvcHJlPlxyXG4gICAgICAgICAgICBLRVlXT1JEUzwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbk1vdXNlRW50ZXI9e3RoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXIxdH1cclxuICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXt0aGlzLmJhY2tkcm9wQ2xpY2tIYW5kbGVyMWZ9XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICA+XHJcbjxpbWcgc3JjPVwiYmVsbC5wbmdcIiBjbGFzc05hbWU9XCJhbGVydHNcIi8+XHJcbjxwcmU+IDwvcHJlPlxyXG4gICAgICAgICAgICBBTEVSVFNcclxuICAgICAgICAgICAgPHByZT4gPC9wcmU+XHJcbiAgICAgICAgICAgIDxJY29uIGZsaXBwZWQ9J2hvcml6b250YWxseScgZml0dGVkIG5hbWU9J2NhcmV0IGRvd24nIHNpemU9XCJsYXJnZVwiIC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI9e3RoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXIyfVxyXG4gICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e3RoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXIyfT5cclxuPGltZyBzcmM9XCJzaGVhbGQucG5nXCIgY2xhc3NOYW1lPVwic2hlYWxkXCJcclxuLz5cclxuPHByZT4gPC9wcmU+XHJcblxyXG4gICAgICAgICAgICBSRU1FRElBVElPTlxyXG4gICAgICAgICAgICA8cHJlPiA8L3ByZT5cclxuICAgICAgICAgICAgPEljb24gZmxpcHBlZD0naG9yaXpvbnRhbGx5JyBmaXR0ZWQgbmFtZT0nY2FyZXQgZG93bicgc2l6ZT1cImxhcmdlXCIgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuPGltZyBzcmM9XCJzZWF0aW5nLnBuZ1wiIGNsYXNzTmFtZT1cInNlYXRpbmdcIi8+XHJcblxyXG4gICAgICAgICAgICBTRVRUSU5HUzwvYT5cclxuXHJcbiAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGVudDFcIiAgc3R5bGU9e3tkaXNwbGF5OnRoaXMuc3RhdGUuc2hvd2E/XCJmbGV4XCI6XCJub25lXCJ9fSBcclxuICAgICAgICAgICAgb25Nb3VzZUVudGVyPXt0aGlzLnR3b2Z1bmN0aW9uc299ICAgb25Nb3VzZUxlYXZlPXt0aGlzLnR3b2Z1bmN0aW9uc2Z9IFxyXG4gIFxyXG4gICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBBbGwgQWxlcnRzXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgU2Vuc2l0aXZlIEluZm9ybWF0aW9uPC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICBEaXNjdXNzaW9uczwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgQmxhY2sgTWFya2V0czwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgRmluYW5jaWFsPC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICBFeHBvc2VkIENyZWRlbnRpYWxzPC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICBQZXJzb25hbCBJbmZvcm1hdGlvbjwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgSGFja2VyIEdyb3VwIFRhcmdldGluZzwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgQXR0YWNrICYgQ29tcHJvbWlzZXM8L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgIFVuZGVyIEFuYWx5c2lzPC9hPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1jb250ZW50M1wiICBzdHlsZT17e2Rpc3BsYXk6dGhpcy5zdGF0ZS5zaG93Yj9cImZsZXhcIjpcIm5vbmVcIn19IFxyXG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI9e3RoaXMudHdvZnVuY3Rpb25zbzF9ICAgb25Nb3VzZUxlYXZlPXt0aGlzLnR3b2Z1bmN0aW9uc2YxfSA+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzcGFjZXIxXCI+PC9saT5cclxuICAgICAgICAgICAgPGxpIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZGFzaGJvYXJkc1wiPlxyXG4gICAgICAgICAgICA8cD48L3A+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPHByZT4gPC9wcmU+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBocmVmPVwiI1wiID5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxwcmU+IDwvcHJlPlxyXG4gICAgICAgICAgICA8cHJlPiA8L3ByZT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgIDxwcmU+IDwvcHJlPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkMVwiPkFjdGlvbnM8L2E+XHJcbiAgICAgICAgICAgIDxwcmU+ICAgPC9wcmU+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImQyXCI+TG9nPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGxpIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2xpPlxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxBc3NldHMgY2FsbD17dGhpcy5zdGF0ZS5zaG93Y30gYz17dGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcjN9Lz5cclxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLmwxe1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDowcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDozMDBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDo0MHB4O1xyXG4gICAgICAgICAgICB9XHJcbi5kZXNpZ25pbmd7XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgXHJcbiAgd2lkdGg6MTAwJTtcclxuICBcclxuICBcclxuXHJcbn1cclxuLnNwYWNlcjJ7XHJcbmRpc3BsYXk6ZmxleDtcclxuYmFja2dyb3VuZDpibHVlO1xyXG5mbGV4LWJhc2lzOjUwJTtcclxufVxyXG4uc2VhcmNoe1xyXG4gICAgICAgICB3aWR0aDoyNHB4O1xyXG4gICAgaGVpZ2h0OjI0cHg7ICBcclxufVxyXG4uc2hlYWxke1xyXG4gICAgICB3aWR0aDo0MHB4O1xyXG4gICAgaGVpZ2h0OjQwcHg7ICBcclxufVxyXG4uYWxlcnRze1xyXG4gICAgd2lkdGg6MjVweDtcclxuICAgIGhlaWdodDoyNXB4O1xyXG59XHJcbi5kZXNpZ25pbmcgPmxpIHtcclxuICBjb2xvcjp3aGl0ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG5cclxuICBsaXN0LXN0eWxlOm5vbmU7IFxyXG59XHJcbi5sb2dve1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gIGZsZXgtYmFzaXM6IDQwJTtcclxufVxyXG4ubGluazF7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdHaWxyb3knLCBzYW5zLXNlcmlmO1xyXG4gIHdpZHRoOjE1MHB4O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBib3JkZXItYm90dG9tOjNweCBzb2xpZCB0cmFuc3BhcmVudDtcclxufVxyXG4ubGluazJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6NzVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkdpbHJveVwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBib3JkZXItYm90dG9tOjNweCBzb2xpZCB0cmFuc3BhcmVudDtcclxufVxyXG4ubGluazN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6NzBweDtcclxuICAgICAgIGZvbnQtZmFtaWx5OiBcIkdpbHJveVwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBib3JkZXItYm90dG9tOjNweCBzb2xpZCB0cmFuc3BhcmVudDtcclxufVxyXG4uc3BhY2Vye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1iYXNpczogMjAlO1xyXG5cclxuICBcclxufVxyXG4udXNlcmxvZ297XHJcbiAgZGlzcGxheTogZmxleDtcclxuZmxleC1iYXNpczogMTUlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIHdpZHRoOiAyNXB4O1xyXG59XHJcbi5kZW1vYWNjb3VudHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgZm9udC1mYW1pbHk6IFwiR2lscm95XCIsIHNhbnMtc2VyaWY7XHJcbiAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgd2lkdGg6IDExMHB4O1xyXG5cclxufVxyXG4ubG9nbzF7XHJcbiB3aWR0aDoyNXB4O1xyXG4gaGVpZ2h0OjI1cHg7XHJcbn1cclxuLyogRHJvcGRvd24gQnV0dG9uICovXHJcblxyXG5cclxuLyogVGhlIGNvbnRhaW5lciA8ZGl2PiAtIG5lZWRlZCB0byBwb3NpdGlvbiB0aGUgZHJvcGRvd24gY29udGVudCAqL1xyXG5cclxuLnNwYWNlcjF7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWJhc2lzOiAyMCU7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIG1pbi13aWR0aDogMTYwcHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgei1pbmRleDogMTtcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICB3aWR0aDoxMDAlO1xyXG59XHJcbi5zZWF0aW5ne1xyXG4gICAgd2lkdGg6MzVweDtcclxuICAgIGhlaWdodDozMHB4O1xyXG59XHJcbi8qIExpbmtzIGluc2lkZSB0aGUgZHJvcGRvd24gKi9cclxuLmRyb3Bkb3duLWNvbnRlbnQgPmEge1xyXG4gIGNvbG9yOiBncmF5O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnR2lscm95Jywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xyXG4gIGZvbnQtd2VpZ2h0OjQwMDtcclxuICB3aWR0aDogMTgwcHg7XHJcbiAgaGVpZ2h0OjcwcHg7XHJcbiAgb3BhY2l0eTogMC44O1xyXG59XHJcblxyXG4vKiBDaGFuZ2UgY29sb3Igb2YgZHJvcGRvd24gbGlua3Mgb24gaG92ZXIgKi9cclxuLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7Y29sb3I6IGJsYWNrO29wYWNpdHk6IDE7fVxyXG5cclxuXHJcbi5saW5rMTpob3ZlciB7Ym9yZGVyLWJvdHRvbTozcHggc29saWQgIzAwNzZmZjsgY3Vyc29yOiBwb2ludGVyO31cclxuLmxpbmsyOmhvdmVyIHtib3JkZXItYm90dG9tOjNweCBzb2xpZCAjMDA3NmZmOyBjdXJzb3I6IHBvaW50ZXI7fVxyXG4ubGluazM6aG92ZXIge2JvcmRlci1ib3R0b206M3B4IHNvbGlkICMwMDc2ZmY7IGN1cnNvcjogcG9pbnRlcjt9XHJcbi5kYXNoYm9hcmRze1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG53aWR0aDogMTAwcHg7XHJcblxyXG59XHJcbi5kYXNoYm9hcmRzIGltZ3tcclxuICAgIGhlaWdodDozMHB4O1xyXG4gICAgd2lkdGg6MzBweDtcclxufVxyXG4uZHJvcGRvd24tY29udGVudDEge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtZXZlbmx5O1xyXG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICB3aWR0aDoxMDAlO1xyXG4gIG1hcmdpbi10b3A6NzBweDtcclxufVxyXG5cclxuXHJcbi5kcm9wZG93bi1jb250ZW50MSA+YSB7XHJcbiAgICBjb2xvcjogZ3JheTtcclxuICBcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBmb250LWZhbWlseTogJ0dpbHJveScsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG5cclxuICBoZWlnaHQ6NjBweDtcclxufVxyXG4uZHJvcGRvd24tY29udGVudDEgYTpob3ZlciB7Y29sb3I6IGJsYWNrO31cclxuXHJcbi5kcm9wZG93bi1jb250ZW50MyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBtaW4td2lkdGg6IDE2MHB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgbWFyZ2luLXRvcDo3MHB4O1xyXG59XHJcblxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQzID5saSB7XHJcbiAgY29sb3I6IGdyYXk7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgZm9udC1mYW1pbHk6ICdHaWxyb3knLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XHJcbiAgZm9udC13ZWlnaHQ6NDAwO1xyXG4gIHdpZHRoOiAxODBweDtcclxuICBoZWlnaHQ6NjBweDtcclxuICBvcGFjaXR5OiAwLjg7XHJcbiAgbGlzdC1zdHlsZTpub25lO1xyXG4gICAgIFxyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG5cclxufVxyXG4uZDF7XHJcbmNvbG9yOmdyYXk7XHJcbnRleHQtZGVjb3JhdGlvbjpub25lO1xyXG59XHJcbi5kMntcclxuY29sb3I6Z3JheTtcclxudGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbn1cclxuLmQxOmhvdmVyIHtjb2xvcjogYmxhY2s7Y3Vyc29yOiBwb2ludGVyO31cclxuLmQyOmhvdmVyIHtjb2xvcjogYmxhY2s7Y3Vyc29yOiBwb2ludGVyO31cclxuIEBtZWRpYSAobWF4LXdpZHRoOiAxMDQ0cHgpIHtcclxuICAgLmRlc2lnbmluZ3tcclxuICAgICB3aWR0aDoxMDAlO1xyXG4gICB9XHJcbiAgIC5kcm9wZG93bi1jb250ZW50e1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgfVxyXG4gICAuZHJvcGRvd24tY29udGVudDF7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICB9XHJcbiAgIC5kcm9wZG93bi1jb250ZW50M3tcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgIH1cclxuICAgIC5kZXNpZ25pbmcgLmxpbmsxIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgLmRlc2lnbmluZyAubGluazIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuZGVzaWduaW5nIC5saW5rMyB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbn1cclxuIEBtZWRpYSAobWF4LXdpZHRoOiA2MDRweCkge1xyXG4gICAuZGVzaWduaW5ne1xyXG4gICAgIHdpZHRoOjEwMCU7XHJcbiAgIH1cclxuXHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAzMDRweCkge1xyXG4gICAgLmRlc2lnbmluZ3tcclxuICAgICAgd2lkdGg6MTAwJTtcclxuICAgIH1cclxuIFxyXG4gICB9XHJcblxyXG59ICAgICAgICAgXHJcblxyXG4gICAgICAgICAgYH0gPC9zdHlsZT5cclxuICAgIFxyXG4gICAgPC9kaXY+XHJcblx0XHRcdClcclxuXHR9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbjsiXX0= */\n/*@ sourceURL=E:\\\\reactnext\\\\components\\\\navigation.js */"));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _url = __webpack_require__(/*! url */ "url");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _router2 = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: (0, _router2.addBasePath)(formatUrl(href)),
        as: asHref ? (0, _router2.addBasePath)(formatUrl(asHref)) : asHref
      };
    });

    this.linkClicked = e => {
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  getPaths() {
    const {
      pathname
    } = window.location;
    const {
      href: parsedHref,
      as: parsedAs
    } = this.formatUrls(this.props.href, this.props.as);
    const resolvedHref = (0, _url.resolve)(pathname, parsedHref);
    return [resolvedHref, parsedAs ? (0, _url.resolve)(pathname, parsedAs) : resolvedHref];
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      const isPrefetched = prefetched[this.getPaths().join( // Join on an invalid URI character
      '%')];

      if (!isPrefetched) {
        this.cleanUpListeners = listenToIntersections(ref, () => {
          this.prefetch();
        });
      }
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch(options) {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    const paths = this.getPaths(); // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch

    _router.default.prefetch(paths[
    /* href */
    0], paths[
    /* asPath */
    1], options).catch(err => {
      if (true) {
        // rethrow to show invalid URL errors
        throw err;
      }
    });

    prefetched[paths.join( // Join on an invalid URI character
    '%')] = true;
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = /*#__PURE__*/_react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch({
          priority: true
        });
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const PropTypes = __webpack_require__(/*! prop-types */ "prop-types");

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact"); // @ts-ignore the property is supported, when declaring it on the class it outputs an extra bit of code which is not needed.


  Link.propTypes = exact({
    href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    as: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    prefetch: PropTypes.bool,
    replace: PropTypes.bool,
    shallow: PropTypes.bool,
    passHref: PropTypes.bool,
    scroll: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn(`Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>`);
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error(`Error when running the Router event: ${eventField}`); // tslint:disable-next-line:no-console

          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.default = void 0;

var _url2 = __webpack_require__(/*! url */ "url");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function addBasePath(path) {
  return path.indexOf(basePath) !== 0 ? basePath + path : path;
}

function delBasePath(path) {
  return path.indexOf(basePath) === 0 ? path.substr(basePath.length) || '/' : path;
}

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

const prepareRoute = path => toRoute(!path || path === '/' ? '/index' : path);

function fetchNextData(pathname, query, isServerRender, cb) {
  let attempts = isServerRender ? 3 : 1;

  function getResponse() {
    return fetch((0, _utils.formatWithValidation)({
      pathname: addBasePath( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${delBasePath(pathname)}.json`),
      query
    }), {
      // Cookies are required to be present for Next.js' SSG "Preview Mode".
      // Cookies may also be required for `getServerSideProps`.
      //
      // > `fetch` won’t send cookies, unless you set the credentials init
      // > option.
      // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
      //
      // > For maximum browser compatibility when it comes to sending &
      // > receiving cookies, always supply the `credentials: 'same-origin'`
      // > option instead of relying on the default.
      // https://github.com/github/fetch#caveats
      credentials: 'same-origin'
    }).then(res => {
      if (!res.ok) {
        if (--attempts > 0 && res.status >= 500) {
          return getResponse();
        }

        throw new Error(`Failed to load static props`);
      }

      return res.json();
    });
  }

  return getResponse().then(data => {
    return cb ? cb(data) : data;
  }).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      ;
      err.code = 'PAGE_LOAD_ERROR';
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as2, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription,
    isFallback
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;

    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname,
          query
        }), (0, _utils.getURL)());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.as === this.asPath && (0, _url2.parse)(e.state.url).pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    };

    this._getStaticData = asPath => {
      const pathname = prepareRoute((0, _url2.parse)(asPath).pathname);
      return  false ? undefined : fetchNextData(pathname, null, this.isSsr, data => this.sdc[pathname] = data);
    };

    this._getServerData = asPath => {
      let {
        pathname,
        query
      } = (0, _url2.parse)(asPath, true);
      pathname = prepareRoute(pathname);
      return fetchNextData(pathname, query, this.isSsr);
    }; // represents the current component key


    this.route = toRoute(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as2;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    if (false) {} else {
      return url;
    }
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = Object.assign({}, data, {
      Component,
      __N_SSG: mod.__N_SSG,
      __N_SSP: mod.__N_SSP
    });
    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (_utils.ST) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      let url = typeof _url === 'object' ? (0, _utils.formatWithValidation)(_url) : _url;
      let as = typeof _as === 'object' ? (0, _utils.formatWithValidation)(_as) : _as;
      url = addBasePath(url);
      as = addBasePath(as); // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as, options);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = (0, _url2.parse)(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      }

      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if ((0, _isDynamic.isDynamicRoute)(route)) {
        const {
          pathname: asPathname
        } = (0, _url2.parse)(as);
        const routeRegex = (0, _routeRegex.getRouteRegex)(route);
        const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);

        if (!routeMatch) {
          const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

          if (missingParams.length > 0) {
            if (true) {
              console.warn(`Mismatching \`as\` and \`href\` failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
            }

            return reject(new Error(`The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`));
          }
        } else {
          // Merge params into `query`, overwriting any specified in search
          Object.assign(query, routeMatch);
        }
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        }

        this.set(route, pathname, query, as, routeInfo);

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      window.history[method]({
        url,
        as,
        options
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return Promise.resolve(cachedRouteInfo);
    }

    const handleError = (err, loadErrorFail) => {
      return new Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR' || loadErrorFail) {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(res => {
          const {
            page: Component
          } = res;
          const routeInfo = {
            Component,
            err
          };
          return new Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }).catch(err => handleError(err, true)));
      });
    };

    return new Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(res => resolve({
        Component: res.page,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }), reject);
    }).then(routeInfo => {
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return this._getData(() => __N_SSG ? this._getStaticData(as) : __N_SSP ? this._getServerData(as) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      })).then(props => {
        routeInfo.props = props;
        this.components[route] = routeInfo;
        return routeInfo;
      });
    }).catch(handleError);
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  prefetch(url, asPath = url, options = {}) {
    return new Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = (0, _url2.parse)(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) {
        return;
      }

      const route = delBasePath(toRoute(pathname));
      Promise.all([this.pageLoader.prefetchData(url, delBasePath(asPath)), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]).then(() => resolve(), reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    route = delBasePath(route);
    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = escapeRegex(normalizedRoute.replace(/\/$/, '') || '/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isOptional = /^\\\[.*\\\]$/.test($1);

    if (isOptional) {
      $1 = $1.slice(2, -2);
    }

    const isCatchAll = /^(\\\.){3}/.test($1);

    if (isCatchAll) {
      $1 = $1.slice(6);
    }

    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? isOptional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
  });
  let namedParameterizedRoute; // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    namedParameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
      const isCatchAll = /^(\\\.){3}/.test($1);
      const key = $1 // Un-escape key
      .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '');
      return isCatchAll ? `/(?<${escapeRegex(key)}>.+?)` : `/(?<${escapeRegex(key)}>[^/]+?)`;
    });
  }

  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups,
    namedRegex: namedParameterizedRoute ? `^${namedParameterizedRoute}(?:/)?$` : undefined
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _url = __webpack_require__(/*! url */ "url");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) === null || _App$prototype === void 0 ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _url.format)(url, options);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_navigation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/navigation */ "./components/navigation.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/footer */ "./components/footer.js");
/* harmony import */ var _components_landingcontent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/landingcontent */ "./components/landingcontent.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Dashboard_dashboardheading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Dashboard/dashboardheading */ "./components/Dashboard/dashboardheading.js");
/* harmony import */ var _components_Dashboard_dashboardcontent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Dashboard/dashboardcontent */ "./components/Dashboard/dashboardcontent.js");
var _jsxFileName = "E:\\reactnext\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const Index = () => __jsx("div", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 1
  }
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 1
  }
}, __jsx("title", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 1
  }
}, "Main Page "), __jsx("link", {
  rel: "stylesheet",
  href: "//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 1
  }
})), __jsx("main", {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 1
  }
}, __jsx(_components_navigation__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 1
  }
}), __jsx(_components_landingcontent__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 1
  }
}), __jsx(_components_footer__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 1
  }
})));

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\reactnext\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "highcharts":
/*!*****************************!*\
  !*** external "highcharts" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("highcharts");

/***/ }),

/***/ "highcharts-react-official":
/*!********************************************!*\
  !*** external "highcharts-react-official" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("highcharts-react-official");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Rhc2hib2FyZC9jeWJlcmV4cG9zdXJlc2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EYXNoYm9hcmQvZGFzaGJvYXJkY29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Rhc2hib2FyZC9kYXNoYm9hcmRoZWFkaW5nLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGFzaGJvYXJkL2V4cG9zdXJldHJlbmRzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGFzaGJvYXJkL2xpbmVjaGFydDEuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EYXNoYm9hcmQvcHJvZ3Jlc3NiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hc3NldHMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYW5kaW5nY29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImhpZ2hjaGFydHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJoaWdoY2hhcnRzLXJlYWN0LW9mZmljaWFsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXMtZXhhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic2VtYW50aWMtdWktcmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidXJsXCIiXSwibmFtZXMiOlsiQ3liZXJFeHBvc3VyZVNjb3JlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiY2hhciIsInN0YXRlIiwidGhldmFsdWUiLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJjYWxjdWxhdGUiLCJTdHJpbmciLCJjb25jYXQiLCJjb3VudCIsIm1pbnZhbHVlIiwiaW5jcmVtZW50IiwiYmluZCIsImNvbXBvbmVudERpZE1vdW50IiwidGltZW91dCIsInNldFRpbWVvdXQiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImNvbXBvbmVudFdpbGxVbm1vdW50IiwiY2xlYXJUaW1lb3V0IiwicmVuZGVyIiwiZGlzcGxheSIsIkRhc2hib2FyZGNvbnRlbnQiLCJEYXNoYm9hcmRoZWFkaW5nIiwiRXhwb3N1cmV0cmVuZHMiLCJvcHRpb25zIiwiY2hhcnQiLCJ0eXBlIiwiYmFja2dyb3VuZENvbG9yIiwidGl0bGUiLCJ0ZXh0IiwieUF4aXMiLCJ4QXhpcyIsImRhdGVUaW1lTGFiZWxGb3JtYXRzIiwiZGF5Iiwic2VyaWVzIiwibmFtZSIsImRhdGEiLCJwb2ludFN0YXJ0IiwiRGF0ZSIsIlVUQyIsInBvaW50SW50ZXJ2YWwiLCJjb2xvciIsImRhdGFMYWJlbHMiLCJlbmFibGVkIiwiYWxpZ24iLCJ4IiwieSIsInN0eWxlIiwiZm9udFNpemUiLCJmb250RmFtaWx5IiwiTGluZUNoYXJ0MSIsIkhpZ2hjaGFydHMiLCJQcm9ncmVzc2JhciIsIm51bWJlckNvbXBsZXRlIiwid2lkdGgiLCJ2YWx1ZXMiLCJBc3NldHMiLCJ0d29mdW5jdGlvbnNvMSIsImJhY2tkcm9wQ2xpY2tIYW5kbGVyIiwidHdvZnVuY3Rpb25zZjEiLCJjYWxsIiwiYyIsIkZvb3RlciIsIkxhbmRpbmdjb250ZW50IiwiTmF2aWdhdGlvbiIsInByZXZTdGF0ZSIsInNob3ciLCJzaG93YSIsInNob3diIiwic2hvd2MiLCJiYWNrZHJvcENsaWNrSGFuZGxlcnQiLCJiYWNrZHJvcENsaWNrSGFuZGxlcmYiLCJiYWNrZHJvcENsaWNrSGFuZGxlcjF0IiwiYmFja2Ryb3BDbGlja0hhbmRsZXIxZiIsInR3b2Z1bmN0aW9uc28iLCJ0d29mdW5jdGlvbnNmIiwiYmFja2Ryb3BDbGlja0hhbmRsZXIyIiwiYmFja2Ryb3BDbGlja0hhbmRsZXIzIiwidXJsIiwib3JpZ2luIiwibGFzdEhyZWYiLCJsYXN0QXMiLCJsYXN0UmVzdWx0IiwiaHJlZiIsImFzIiwicmVzdWx0IiwiZm9ybWF0RnVuYyIsImxpc3RlbmVycyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwid2luZG93IiwicHJlZmV0Y2hlZCIsIm9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiY2IiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwiZ2V0T2JzZXJ2ZXIiLCJwIiwibWVtb2l6ZWRGb3JtYXRVcmwiLCJmb3JtYXRVcmwiLCJhc0hyZWYiLCJlIiwibm9kZU5hbWUiLCJ0YXJnZXQiLCJpc0xvY2FsIiwic2Nyb2xsIiwiUm91dGVyIiwic2hhbGxvdyIsInN1Y2Nlc3MiLCJkb2N1bWVudCIsImdldFBhdGhzIiwicmVzb2x2ZWRIcmVmIiwicGFyc2VkQXMiLCJoYW5kbGVSZWYiLCJyZWYiLCJpc1ByZWZldGNoZWQiLCJwcmVmZXRjaCIsInBhdGhzIiwiZXJyIiwiY2hpbGRyZW4iLCJjaGlsZCIsIkNoaWxkcmVuIiwiZWwiLCJvbk1vdXNlRW50ZXIiLCJwcmlvcml0eSIsIm9uQ2xpY2siLCJwcm9jZXNzIiwid2FybiIsIlByb3BUeXBlcyIsInJlcXVpcmUiLCJleGFjdCIsIkxpbmsiLCJyZXBsYWNlIiwicGFzc0hyZWYiLCJ2YWx1ZSIsInNpbmdsZXRvblJvdXRlciIsInJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJPYmplY3QiLCJnZXQiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50IiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsInBhdGgiLCJwcmVwYXJlUm91dGUiLCJ0b1JvdXRlIiwiYXR0ZW1wdHMiLCJpc1NlcnZlclJlbmRlciIsInBhdGhuYW1lIiwiYWRkQmFzZVBhdGgiLCJfX05FWFRfREFUQV9fIiwiYnVpbGRJZCIsImRlbEJhc2VQYXRoIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJnZXRSZXNwb25zZSIsInJvdXRlIiwicXVlcnkiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIlByb21pc2UiLCJmZXRjaE5leHREYXRhIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJ1cGRhdGUiLCJtb2QiLCJuZXdEYXRhIiwicmVsb2FkIiwiYmFjayIsInB1c2giLCJjaGFuZ2UiLCJTVCIsInBlcmZvcm1hbmNlIiwicmVzb2x2ZSIsIm1ldGhvZCIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwibWlzc2luZ1BhcmFtcyIsInBhcmFtIiwicmVqZWN0IiwiYXNQYXRobmFtZSIsInJvdXRlSW5mbyIsImVycm9yIiwiYXBwQ29tcCIsImNoYW5nZVN0YXRlIiwiZ2V0Um91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwiaGFuZGxlRXJyb3IiLCJwYWdlIiwiZ2lwRXJyIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImhhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJjYW5jZWxsZWQiLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJfZ2V0RGF0YSIsImZuIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsIlRFU1RfUk9VVEUiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInBhcmFtcyIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJlc2NhcGVkUm91dGUiLCJlc2NhcGVSZWdleCIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJpc09wdGlvbmFsIiwiJDEiLCJpc0NhdGNoQWxsIiwicG9zIiwicmVwZWF0IiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJrZXkiLCJuYW1lZFJlZ2V4IiwidXNlZCIsInByb3RvY29sIiwiaG9zdG5hbWUiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJJbmRleCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtR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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFBSCxDQURBLEVBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBDQUZBLEVBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSEEsQ0FERCxFQU1DO0FBQUEsMENBQWUsSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQUgsQ0FEQSxFQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFGQSxDQU5ELEVBVUM7QUFBQSwwQ0FBZSxJQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBSCxDQURBLEVBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUZBLENBVkQsRUFjQztBQUFBLDBDQUFlLElBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFILENBREEsRUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBRkEsQ0FkRCxFQWtCQztBQUFBLDBDQUFlLElBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNBO0FBQUE7QUFB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O0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBSixDQUE1QixDQURBLEVBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJDQUZBLEVBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSEEsQ0FERCxFQU1DO0FBQUEsMENBQWUsSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQUgsRUFBVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBSixDQUFYLEVBQTRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFKLENBQTVCLENBREEsRUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0NBRkEsQ0FORCxFQVVDO0FBQUEsMENBQWUsSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQUgsRUFBVztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FBSixDQUFYLEVBQTRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxP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QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNMEUsS0FBSyxHQUFFLE1BQ2I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNBLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREEsRUFFQTtBQUFNLEtBQUcsRUFBQyxZQUFWO0FBQXVCLE1BQUksRUFBQyxnRUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUZBLENBREEsRUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0EsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREEsRUFHQSxNQUFDLGtFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFIQSxFQUtBLE1BQUMsMERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUxBLENBTEEsQ0FEQTs7QUFnQmVBLG9FQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBLHVDOzs7Ozs7Ozs7OztBQ0FBLHNEOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLDhDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLGdDIiwiZmlsZSI6InN0YXRpY1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQcm9ncmVzc2JhciBmcm9tIFwiLi9wcm9ncmVzc2JhclwiXHJcblxyXG5cclxuXHJcbmNsYXNzIEN5YmVyRXhwb3N1cmVTY29yZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcigpXHJcbiAgICAgICAgdGhpcy5zdGF0ZT17XHJcbiAgICAgICAgICAgIGNvdW50OjAsXHJcbiAgICAgICAgICAgIGNhbGN1bGF0ZTowLFxyXG4gICAgICAgICAgICBtaW52YWx1ZTowLFxyXG4gICAgICAgICAgICBpbmNyZW1lbnQ6MCxcclxuICAgICAgICAgICAgdGhldmFsdWU6MTIwXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmNhbGN1bGF0ZT10aGlzLmNhbGN1bGF0ZS5iaW5kKHRoaXMpXHJcbiAgICBcclxuICAgIH1cclxuICAgIGNhbGN1bGF0ZSA9ICgpPT57XHJcbiAgICAgICAgbGV0IGNoYXI7XHJcbiAgICAgICAgY2hhcj0odGhpcy5zdGF0ZS50aGV2YWx1ZS8zMDApKjEwMDtcclxuICAgICAgICBjb25zb2xlLmxvZyhjaGFyLFwiY2hhclwiKVxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2NhbGN1bGF0ZTpTdHJpbmcoY2hhcikuY29uY2F0KFwiJVwiKX0pXHJcblxyXG4gICAgfVxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICB0aGlzLmNhbGN1bGF0ZSgpXHJcbiAgICAgICAgdGhpcy50aW1lb3V0PXNldFRpbWVvdXQoKCk9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2NvdW50OnRoaXMuc3RhdGUuY2FsY3VsYXRlLG1pbnZhbHVlOnRoaXMuc3RhdGUudGhldmFsdWV9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSwxMDAwKTtcclxuICAgICAgICB0aGlzLmludGVydmFsPXNldEludGVydmFsKCgpPT57XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe2luY3JlbWVudDp0aGlzLnN0YXRlLmluY3JlbWVudCsxfSlcclxuICAgICAgICAgICAgaWYodGhpcy5zdGF0ZS5pbmNyZW1lbnQ9PT10aGlzLnN0YXRlLnRoZXZhbHVlKXtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LDEwKTtcclxuXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKXtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbnJlbmRlcigpe1xyXG5cclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlczFcIj5cclxuICAgICAgICAgICAgICAgIDxwPiBDeWJlciBFeHBvc3VyZSBTY29yZTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VzMlwiPlxyXG4gICAgICAgICAgICAgICAgPHA+PHNtYWxsPlxyXG4gICAgICAgICAgICAgICAgQ29tcGFuaWVzIGFyZSBnaXZlbiBleHBvc3VyZSBzY29yZSBiYXNlZCBvbiBpZGVudGlmaWVkIHJpc2tcclxuICAgICAgICAgICAgICAgIGRpdmlkZWQgYnkgZW1wbG95ZWUgY291bnQgb24gbGFzdCAxMiBtb250aHMuIFNjb3JlIHJhbmdlcyBmcm9tIDBcclxuICAgICAgICAgICAgICAgIHRvIDMwMCsuQ29tcGFuaWVzIHdpdGggbm8gZXhwb3N1cmUgZHVyaW5nIHRoZSBwYXN0IDEyIG1vbnRocyBoYXZlIHNjb3JlIDAuXHJcbiAgICAgICAgICAgICAgICBDb21wYW5pZXMgdGhhdCBoYXZlIHNjb3JlIDMwMCsgcmVwcmVzZW50IHRoZSB0b3AgMTAlIG1vc3QgZXhwb3NlZCBDb21wYW5pZXMuXHJcbiAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZXMzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlczMxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxIHN0eWxlPXt7ZGlzcGxheTpcImJsb2NrXCJ9fT4ge3RoaXMuc3RhdGUuaW5jcmVtZW50fTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VzMzJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD4vMzAwPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZXM0XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlczQyXCI+XHJcbiAgICAgICAgICAgICAgICA8UHJvZ3Jlc3NiYXIgdmFsdWVzPXt0aGlzLnN0YXRlLmNvdW50fS8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VzNDFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlczQxMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD48c21hbGw+MDwvc21hbGw+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VzNDEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHA+PHNtYWxsPjMwMDwvc21hbGw+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAuY2VzNDExe1xyXG4gICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgIHdpZHRoOjUwJTtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6ZmxleC1zdGFydDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OjFweCBzb2xpZCBncmF5O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2VzNDEye1xyXG4gICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgIHdpZHRoOjUwJTtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6ZmxleC1zdGFydDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OmZsZXgtZW5kO1xyXG4gICAgICAgICAgICBib3JkZXItcmlnaHQ6MXB4IHNvbGlkIGdyYXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jZXM0MntcclxuICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6NTAlO1xyXG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNlczQxe1xyXG4gICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jZXN7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6NSU7XHJcbiAgICAgICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAgICAgICB3aWR0aDo5MCU7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1ldmVubHk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jZXMxe1xyXG4gICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOmZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmb250LXNpemU6MjBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OjEwJTtcclxuICAgICAgICAgICAgb3Zlci1mbG93OmF1dG87XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAuY2VzMntcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICAgICAgICAgICAgaGVpZ2h0OjIwJTtcclxuICAgICAgICAgICAgb3Zlci1mbG93OmF1dG87XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAuY2VzM3tcclxuICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpyb3c7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBoZWlnaHQ6MjAlO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtZXZlbmx5O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNlczMxe1xyXG4gICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgIGhlaWdodDo5MCU7XHJcbiAgICAgICAgICAgIHdpZHRoOjQ5JTtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTozMXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDozMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY2VzMzJ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgd2lkdGg6NDklO1xyXG4gICAgICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtcclxuICAgICAgICAgICAgZm9udC1zaXplOjI1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOjM0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jZXM0e1xyXG4gICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6ZmxleC1zdGFydDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBoZWlnaHQ6MjAlO1xyXG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjZXMzMSBoMXtcclxuICAgICAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBkaXNwbGF5IDFzIGVhc2UtaW4tb3V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBgfVxyXG5cclxuXHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxuXHJcbn1cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQ3liZXJFeHBvc3VyZVNjb3JlOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEN5YmVyRXhwb3N1cmVTY29yZSBmcm9tIFwiLi9jeWJlcmV4cG9zdXJlc2NvcmVcIlxyXG5pbXBvcnQgRXhwb3N1cmVUcmVuZHMgZnJvbSBcIi4vZXhwb3N1cmV0cmVuZHNcIlxyXG5jbGFzcyBEYXNoYm9hcmRjb250ZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKClcclxuICAgICAgICBcclxuICAgIH1cclxucmVuZGVyKCl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXYxXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdjFpbjFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRjMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q3liZXJFeHBvc3VyZVNjb3JlLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRjMlwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaXYxaW4yXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhYzFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8RXhwb3N1cmVUcmVuZHMvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRhYzJcIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgPHN0eWxlPntgXHJcbiAgICAgICAgLmRpdjF7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6OTUwcHg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1ldmVubHk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kaXYxaW4xe1xyXG4gICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOnJvdztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHdpZHRoOjkwJTtcclxuICAgICAgICAgICAgaGVpZ2h0OjQ4JTtcclxuICAgICAgICAgICAgZmxleC13cmFwOndyYXA7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1ldmVubHk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAuZGl2MWluMntcclxuICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpyb3c7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmbGV4LXdyYXA6d3JhcDtcclxuICAgICAgICAgICAgd2lkdGg6OTAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6NDglO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtZXZlbmx5O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRjMXtcclxuICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDAuNXB4IHNvbGlkICNkZGRmZTY7O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDIwcHggNjBweCAwIHJnYmEoMTYzLCAxNzEsIDE4NiwgMCk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6I0Y5RjlGOTtcclxuICAgICAgICAgICAgd2lkdGg6NDglO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kYzJ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjZGRkZmU2OztcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAyMHB4IDYwcHggMCByZ2JhKDE2MywgMTcxLCAxODYsIDApO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiNGOUY5Rjk7XHJcbiAgICAgICAgICAgIHdpZHRoOjQ4JTtcclxuICAgICAgICAgICAgZmxleC1iYXNpczo0OCU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRhYzF7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMC41cHggc29saWQgI2RkZGZlNjs7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMjBweCA2MHB4IDAgcmdiYSgxNjMsIDE3MSwgMTg2LCAwKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDojRjlGOUY5O1xyXG4gICAgICAgICAgICB3aWR0aDo0OCU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRhYzJ7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMC41cHggc29saWQgI2RkZGZlNjs7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMjBweCA2MHB4IDAgcmdiYSgxNjMsIDE3MSwgMTg2LCAwKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDojRjlGOUY5O1xyXG4gICAgICAgICAgICB3aWR0aDo0OCU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDE1MDBweCkge1xyXG4gICAgICAgICAgICAuZGl2MXtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDoyMDAwcHg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtZXZlbmx5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5kaXYxaW4xe1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB3aWR0aDo5MCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6NDglO1xyXG4gICAgICAgICAgICAgICAgZmxleC13cmFwOndyYXA7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtZXZlbmx5O1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRjMXtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjQ4JTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5kYzJ7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGhlaWdodDo0OCU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZGl2MWluMntcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6OTAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjQ4JTtcclxuICAgICAgICAgICAgICAgIGZsZXgtd3JhcDp3cmFwO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OnNwYWNlLWV2ZW5seTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5kYWMxe1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6NDglO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRhYzJ7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGhlaWdodDo0OCU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuICAgICAgICBgfVxyXG5cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkY29udGVudDsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmNsYXNzIERhc2hib2FyZGhlYWRpbmcgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIoKVxyXG5cclxuICAgIH1cclxucmVuZGVyKCl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGluZ1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkaW5naW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluMTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPkRhc2hib2FyZDwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+IE9yZ2FuaXphdGlvbiBuYW1lOiBEZW1vIEFjY291bnQ8YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgWW91ciBwcmV2aW91cyBsb2dpbjogMjYvMDUvMjAyMCBhdCAxNjowNDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+IDxiPjxzbWFsbD5Eb3dubG9hZCBhcyBQREY8L3NtYWxsPjwvYj48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAubWFpbntcclxuICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmhlYWRpbmd7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDoxNjBweDtcclxuICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmhlYWRpbmdpbntcclxuICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICB3aWR0aDo4NSU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBoZWlnaHQ6MjAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbjF7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgd2lkdGg6NTAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbjEye1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmluMntcclxuICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICB3aWR0aDo1MCU7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OmZsZXgtZW5kO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDE0NDBweCkge1xyXG4gICAgICAgICAgICAuaGVhZGluZ2lue1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6OTAlO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6MzAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmluMntcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAgICAgICAgICAgLmhlYWRpbmdpbntcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuICAgICAgICAgICAgICAgIHdpZHRoOjkwJTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjM1MHB4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBgfVxyXG5cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkaGVhZGluZzsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluZWNoYXJ0MSBmcm9tIFwiLi9saW5lY2hhcnQxXCJcclxuY2xhc3MgRXhwb3N1cmV0cmVuZHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKClcclxuICAgIH1cclxuXHJcbnJlbmRlcigpe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldDFcIj5cclxuICAgICAgICAgICAgPHA+IEVYUE9TVVJFIFRSRU5EUyAoTEFTVCAyNCBNT05USFMpPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldDJcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5lY2hhcnQxLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgLmV0e1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5ldDF7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjE2JTtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6MThweDtcclxuXHJcbiAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmV0MntcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGB9XHJcbiAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEV4cG9zdXJldHJlbmRzOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEhpZ2hjaGFydHMgZnJvbSAnaGlnaGNoYXJ0cyc7XHJcbmltcG9ydCBIaWdoY2hhcnRzUmVhY3QgZnJvbSAnaGlnaGNoYXJ0cy1yZWFjdC1vZmZpY2lhbCc7XHJcblxyXG5jb25zdCBvcHRpb25zID0ge1xyXG4gICAgXHJcbiAgICBjaGFydDoge1xyXG4gICAgICAgIHR5cGU6ICdzcGxpbmUnLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjpcIiNGOUY5RjlcIixcclxuICAgICAgfSxcclxuICAgIHRpdGxlOiB7XHJcbiAgICAgIHRleHQ6ICcnXHJcbiAgICB9LFxyXG4gICAgeUF4aXM6e1xyXG4gICAgICAgIHRpdGxlOlwiXCJcclxuICAgIH0sXHJcbiAgICB4QXhpczoge1xyXG4gICAgICAgIHR5cGU6ICdkYXRldGltZScsXHJcbiAgICAgICAgZGF0ZVRpbWVMYWJlbEZvcm1hdHM6IHtcclxuICAgICAgICAgICAgZGF5OiAnJWInXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHNlcmllczogW3tcclxuICAgICAgICBuYW1lOiAnQWxlcnRzJyxcclxuICAgICAgICBkYXRhOiBbOSwgNiwgNSwgNSwgNywgNCw0LDQsNSwyMCwxMCwxNiwxMCwxMCw3LDEsNyw1LDMsNCwzLDQsNSw0XSxcclxuICAgICAgICBwb2ludFN0YXJ0OiBEYXRlLlVUQygyMDE5LCA0LCAxKSxcclxuICAgICAgICBwb2ludEludGVydmFsOiAyNCAqMTIgKiAzNjAwICogMTAwMCxcclxuICAgICAgICBjb2xvcjonZ3JlZW4nLFxyXG5cclxuICAgICAgICBkYXRhTGFiZWxzOiB7XHJcbiAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29sb3I6ICcjRkZGRkZGJyxcclxuICAgICAgICAgICAgYWxpZ246ICdyaWdodCcsXHJcbiAgICAgICAgICAgIHg6IC02MCxcclxuICAgICAgICAgICAgeTogMjAsXHJcbiAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEzcHgnLFxyXG4gICAgICAgICAgICAgICAgZm9udEZhbWlseTogJ1ZlcmRhbmEsIHNhbnMtc2VyaWYnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdSaXNrJyxcclxuICAgICAgICBkYXRhOiBbOC4yNSw5Ljc1LDQuNSw0LjUsNS4yNSw5LDMsMTMuNSwxNS43NSwyNy43NSwxMiwxOS41LDEyLDE4Ljc1LDE2LjUsMS41LDEyLDQuNSwzLDksMy43NSw0LjUsOSwzLjc1IF0sXHJcbiAgICAgICAgcG9pbnRTdGFydDogRGF0ZS5VVEMoMjAxOSwgNCwgMSksXHJcbiAgICAgICAgcG9pbnRJbnRlcnZhbDogMjQgKjEyKiAzNjAwICogMTAwMCxcclxuICAgICAgICBjb2xvcjoncmVkJyxcclxuICAgICAgICBkYXRhTGFiZWxzOiB7XHJcbiAgICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29sb3I6ICcjRkZGRkZGJyxcclxuICAgICAgICAgICAgYWxpZ246ICdyaWdodCcsXHJcbiAgICAgICAgICAgIHg6IC02MCxcclxuICAgICAgICAgICAgeTogMjAsXHJcbiAgICAgICAgICAgIHN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogJzEzcHgnLFxyXG4gICAgICAgICAgICAgICAgZm9udEZhbWlseTogJ1ZlcmRhbmEsIHNhbnMtc2VyaWYnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5dXHJcblxyXG4gIH1cclxuY2xhc3MgTGluZUNoYXJ0MSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKVxyXG4gICAgfVxyXG5yZW5kZXIoKXtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgPEhpZ2hjaGFydHNSZWFjdFxyXG4gICAgICBoaWdoY2hhcnRzPXtIaWdoY2hhcnRzfVxyXG4gICAgICBvcHRpb25zPXtvcHRpb25zfVxyXG4gICAgLz5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBMaW5lQ2hhcnQxOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmNsYXNzIFByb2dyZXNzYmFyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKClcclxuICAgICAgICB0aGlzLnN0YXRlPXtcclxuICAgICAgICAgICAgbnVtYmVyQ29tcGxldGU6MTBcclxuICAgICAgICB9XHJcbiAgICB9ICAgIFxyXG4gICAgXHJcbnJlbmRlcihwcm9wcyl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzLWJhclwiIHN0eWxlPXt7d2lkdGg6dGhpcy5wcm9wcy52YWx1ZXN9fT5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAucHJvZ3Jlc3Mge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTByZW07XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzcmVtO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAucHJvZ3Jlc3MtYmFyIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI0YyNzA5QywgI0ZGOTQ3Mik7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDowJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcmVtO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAxcyBlYXNlLWluLW91dDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBgfVxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBQcm9ncmVzc2JhciIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEljb24gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuY2xhc3MgQXNzZXRzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcclxuXHRcdHN1cGVyKHByb3BzKVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgdHdvZnVuY3Rpb25zbzEoKXtcclxuICAgICAgICB0aGlzLmJhY2tkcm9wQ2xpY2tIYW5kbGVyKClcclxuXHJcbiAgICAgIH1cclxuICAgIHR3b2Z1bmN0aW9uc2YxKCl7XHJcbiAgICAgICAgdGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcigpXHJcbiAgICAgIH1cclxucmVuZGVyKHByb3BzKXtcclxuICAgIHJldHVybihcclxuICAgIDxkaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhc3NldGJhclwiIHN0eWxlPXt7ZGlzcGxheTp0aGlzLnByb3BzLmNhbGw/XCJmbGV4XCI6XCJub25lXCJ9fSBvbk1vdXNlRW50ZXI9e3RoaXMucHJvcHMuY30gICBvbk1vdXNlTGVhdmU9e3RoaXMucHJvcHMuY30+XHJcbiAgICAgICAgICAgIDxhPiAgRGlzY292ZXJ5ICAgIDwvYT5cclxuICAgICAgICAgICAgPGE+ICBMaXN0ICA8L2E+XHJcbiAgICAgICAgICAgIDxhPiAgTWFwICA8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgIC5hc3NldGJhciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgICAgIG1pbi13aWR0aDogMTYwcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICB3aWR0aDoxMDglO1xyXG4gICAgICB9XHJcbiAgICAgIC5hc3NldGJhciA+YSB7XHJcbiAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdHaWxyb3knLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6NDAwO1xyXG4gICAgICAgIGZsZXgtYmFzaXM6MTAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OjcwcHg7XHJcbiAgICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgICB9XHJcbiAgICAgIC5hc3NldGJhciBhOmhvdmVyIHtjb2xvcjogYmxhY2s7b3BhY2l0eTogMTtjdXJzb3I6IHBvaW50ZXI7fVxyXG4gICAgYH08L3N0eWxlPlxyXG4gICAgXHJcbiAgICBcclxuICAgIDwvZGl2PlxyXG4gICAgKTtcclxuXHJcbn1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBBc3NldHM7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuY2xhc3MgRm9vdGVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcclxuXHRcdHN1cGVyKHByb3BzKVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5yZW5kZXIoKXtcclxucmV0dXJuKFxyXG4gICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiAgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XHJcblx0XHRcdDxwPiBDb3B5cmlnaHQgMjAyMCDCqSBDeWJlciBJbnRlbGxpZ2VuY2UgSG91c2U8L3A+XHJcblx0XHRcdDwvZGl2PlxyXG4gICAgXHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAuZm9vdGVye1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIGJvdHRvbTogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6MTAwcHg7XHJcbiAgICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIH1cclxuXHJcbiAgICBgfVxyXG5cclxuXHJcbiAgICA8L3N0eWxlPlxyXG4gICAgXHJcbiAgICA8L2Rpdj5cclxuXHJcbilcclxufVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjsiLCJpbXBvcnQgUmVhY3Qse0NvbXBvbmVudH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcbmNsYXNzIExhbmRpbmdjb250ZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG5cdGNvbnN0cnVjdG9yKHByb3BzKXtcclxuXHRcdHN1cGVyKHByb3BzKVxyXG5cclxuXHR9XHJcblx0cmVuZGVyKCl7XHJcblx0XHRyZXR1cm4oXHJcblx0XHRcdDxkaXY+XHJcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibWFpbjFcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImMxXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cImMxbWFpblwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm0xXCI+XHJcblx0XHRcdFx0XHRcdDxwPjxiPjExMjwvYj48L3A+XHJcblx0XHRcdFx0XHRcdDxwPiBNYXRjaGVzIGZvciBleHBvc2VkIEluZm9ybWF0aW9uPC9wPlxyXG5cdFx0XHRcdFx0XHQ8aHIvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtMlwiPlxyXG5cdFx0XHRcdFx0XHQ8cD48Yj42MzwvYj48L3A+XHJcblx0XHRcdFx0XHRcdDxwPiBQYXNzd29yZHMgZm91bmQ8L3A+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm0zXCI+XHJcblx0XHRcdFx0XHRcdDxwPjxiPjI5PC9iPjwvcD5cclxuXHRcdFx0XHRcdFx0PHA+IFBlcnNvbmFsIEluZm9ybWF0aW9uPC9wPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtNFwiPlxyXG5cdFx0XHRcdFx0XHQ8cD48Yj4yMDwvYj48L3A+XHJcblx0XHRcdFx0XHRcdDxwPkhhY2tlciBHcm91cCBUYXJnZXRpbmc8L3A+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm01XCI+XHJcblx0XHRcdFx0XHRcdDxhPlxyXG5cdFx0XHRcdFx0XHQ8cHJlPiBWaWV3IDxiPkV4cG9zZWQgSW5mb3JtYXRpb248L2I+IDxJY29uIGZsaXBwZWQ9J2hvcml6b250YWxseScgZml0dGVkIG5hbWU9J2NhcmV0IGxlZnQnIHNpemU9XCJsYXJnZVwiIC8+XHJcblx0XHRcdFx0XHRcdDwvcHJlPlxyXG5cdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjMlwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjMW1haW5cIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtMVwiPlxyXG5cdFx0XHRcdFx0XHQ8cD48Yj4zMTwvYj48L3A+XHJcblx0XHRcdFx0XHRcdDxwPiBWaXNpYmxlIGFzc2V0czwvcD5cclxuXHRcdFx0XHRcdFx0PGhyLz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibTJcIj5cclxuXHRcdFx0XHRcdFx0PHA+PGI+MzE8L2I+PC9wPlxyXG5cdFx0XHRcdFx0XHQ8cD4gQ29uZmlybWVkIGFzc2V0czwvcD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibTNcIj5cclxuXHRcdFx0XHRcdFx0PHA+PGI+MDwvYj48L3A+XHJcblx0XHRcdFx0XHRcdDxwPiBQZW5kaW5nIGFzc2V0czwvcD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibTE1XCI+XHJcblx0XHRcdFx0XHRcdDxhPlxyXG5cdFx0XHRcdFx0XHQ8cHJlPiBWaWV3IDxiPkFzc2V0czwvYj4gPEljb24gZmxpcHBlZD0naG9yaXpvbnRhbGx5JyBmaXR0ZWQgbmFtZT0nY2FyZXQgbGVmdCcgc2l6ZT1cImxhcmdlXCIgLz5cclxuXHRcdFx0XHRcdFx0PC9wcmU+XHJcblx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcclxuXHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjM1wiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjMW1haW5cIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtMVwiPlxyXG5cdFx0XHRcdFx0XHQ8cD48Yj4wPC9iPjxwMT48Yj4vPC9iPjwvcDE+PHAyPjxiPjE2PC9iPjwvcDI+PC9wPlxyXG5cdFx0XHRcdFx0XHQ8cD4gQXNzZXRzIGluIGluZnJhc3RydWN0dXJlIHRlc3Rpbmc8L3A+XHJcblx0XHRcdFx0XHRcdDxoci8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm0yXCI+XHJcblx0XHRcdFx0XHRcdDxwPjxiPjA8L2I+PHAxPjxiPi88L2I+PC9wMT48cDI+PGI+MTwvYj48L3AyPjwvcD5cclxuXHRcdFx0XHRcdFx0PHA+IEFzc2V0cyBpbiBhcHBsaWNhdGlvbiB0ZXN0aW5nPC9wPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtM1wiPlxyXG5cdFx0XHRcdFx0XHQ8cD48Yj4wPC9iPjxwMT48Yj4vPC9iPjwvcDE+PHAyPjxiPjE8L2I+PC9wMj48L3A+XHJcblx0XHRcdFx0XHRcdDxwPiBBc3NldHMgaW4gcGVuZXRyYXRpb24gdGVzdGluZzwvcD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm0xNVwiPlxyXG5cdFx0XHRcdFx0XHQ8YT5cclxuXHRcdFx0XHRcdFx0PHByZT4gVmlldyA8Yj5Db250aW51b3VzIHRlc3Rpbmc8L2I+IDxJY29uIGZsaXBwZWQ9J2hvcml6b250YWxseScgZml0dGVkIG5hbWU9J2NhcmV0IGxlZnQnIHNpemU9XCJsYXJnZVwiIC8+XHJcblx0XHRcdFx0XHRcdDwvcHJlPlxyXG5cdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFxyXG5cclxuXHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm5lZWRoZWxwXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuZWVkaGVscDFcIj5cclxuXHRcdFx0XHRcdDxoMT4gTmVlZCBoZWxwPyA8L2gxPlxyXG5cdFx0XHRcdFx0PHA+WW91IGNhbiBnZXQgYW5hbHlzdCBzdXBwb3J0IHVzaW5nIG91cjxici8+XHJcblx0XHRcdFx0XHRvbmxpbmUgY2hhdCBvciBvcmdhbmlzZSBhIGNhbGwgdG8gb3VyIGV4cGVydC5cclxuXHRcdFx0XHRcdDwvcD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8YnV0dG9uIGNsYXNzTmFtZT1cImJ0bnN1Y2Nlc3NcIj5TdXBwb3J0PC9idXR0b24+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHJcblx0XHRcdDxzdHlsZSBqc3g+e2BcclxuXHJcblx0XHRcdFx0LmJ0bnN1Y2Nlc3Mge1xyXG5cdFx0XHRcdGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xyXG5cdFx0XHRcdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cdFx0XHRcdGNvbG9yOiBibGFjaztcclxuXHRcdFx0XHRwYWRkaW5nOiAxNHB4IDI4cHg7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdFx0XHRcdGN1cnNvcjogcG9pbnRlcjtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC5idG5zdWNjZXNzOmhvdmVye1xyXG5cdCAgXHRcdFx0XHRib3JkZXItY29sb3I6IGdyYXk7XHJcbiAgXHRcdFx0XHRcdGNvbG9yOiBncmF5O1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0Lm5lZWRoZWxwMXtcclxuXHRcdFx0XHRcdFx0XHRkaXNwbGF5OmZsZXg7XHJcblx0XHRcdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG5cdFx0XHRcdFx0XHRcdHdpZHRoOjEwMCU7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0aGVpZ2h0OjIwMHB4O1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHQubmVlZGhlbHB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRoZWlnaHQ6NDAwcHg7XHJcblx0XHRcdFx0XHRtYXJnaW4tdG9wOjQwcHg7XHJcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDo1MHB4O1xyXG5cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Lm01IGF7XHJcblx0XHRcdFx0XHRjb2xvcjpncmF5O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQubTUgYTpob3ZlcntcclxuXHRcdFx0XHRcdGNvbG9yOmJsYWNrO1xyXG5cdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcblx0XHRcdFx0XHRjdXJzb3I6cG9pbnRlcjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Lm0xNSBhe1xyXG5cdFx0XHRcdFx0Y29sb3I6Z3JheTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Lm0xNSBhOmhvdmVye1xyXG5cdFx0XHRcdFx0Y29sb3I6YmxhY2s7XHJcblx0XHRcdFx0XHR0ZXh0LWRlY29yYXRpb246bm9uZTtcclxuXHRcdFx0XHRcdGN1cnNvcjpwb2ludGVyO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQuYzFtYWlue1xyXG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6MTVweDtcclxuXHRcdFx0XHRcdG1hcmdpbi10b3A6MzBweDtcclxuXHRcdFx0XHRcdHdpZHRoOjkwJTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Lm0xID5we1xyXG5cdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDEwcHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5tMntcclxuXHRcdFx0XHRcdG1hcmdpbi10b3A6MTVweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Lm0yID5we1xyXG5cdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDEwcHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5tM3tcclxuXHRcdFx0XHRcdG1hcmdpbi10b3A6MjBweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Lm0zID5we1xyXG5cdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDEwcHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5tNHtcclxuXHRcdFx0XHRcdG1hcmdpbi10b3A6MjBweDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Lm00ID5we1xyXG5cdFx0XHRcdFx0bGluZS1oZWlnaHQ6IDEwcHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5tNXtcclxuXHRcdFx0XHRcdGRpc3BsYXk6ZmxleDtcclxuXHRcdFx0XHRcdGFsaWduLWl0ZW1zOmZsZXgtZW5kO1xyXG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OmZsZXgtZW5kO1xyXG5cdFx0XHRcdFx0bWFyZ2luLXRvcDozMHB4O1xyXG5cclxuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5tMTV7XHJcblx0XHRcdFx0XHRkaXNwbGF5OmZsZXg7XHJcblx0XHRcdFx0XHRhbGlnbi1pdGVtczpmbGV4LWVuZDtcclxuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDpmbGV4LWVuZDtcclxuXHRcdFx0XHRcdG1hcmdpbi10b3A6OTBweDtcclxuXHJcblxyXG5cdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHJcblx0XHRcdFxyXG5cdFx0XHRcdC5tYWluMXtcclxuXHJcblx0XHRcdFx0XHRkaXNwbGF5OmZsZXg7XHJcblx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjpyb3c7XHJcblx0XHRcdFx0XHRoZWlnaHQ6NTAwcHg7XHJcblx0XHRcdFx0XHRtYXJnaW4tdG9wOjgwcHg7XHJcblx0XHRcdFx0XHRhbGlnbi1pdGVtczpjZW50ZXI7XHJcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcclxuXHJcblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQuYzF7XHJcblx0XHRcdFx0XHRkaXNwbGF5OmZsZXg7XHJcblx0XHRcdFx0XHRtYXJnaW4tdG9wOjYwcHg7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOndoaXRlO1xyXG5cdFx0XHRcdFx0aGVpZ2h0OjM1MHB4O1xyXG5cdFx0XHRcdFx0d2lkdGg6MzUwcHg7XHJcblx0XHRcdFx0XHRtYXJnaW4tbGVmdDoxMHB4O1xyXG5cdFx0XHRcdFx0IGJvcmRlcjogMC41cHggc29saWQgI2RkZGZlNjs7XHJcblx0XHRcdFx0XHQgYm94LXNoYWRvdzogMCAyMHB4IDYwcHggMCByZ2JhKDE2MywgMTcxLCAxODYsIDApO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5jMntcclxuXHRcdFx0XHRcdGRpc3BsYXk6ZmxleDtcclxuXHRcdFx0XHRcdHdpZHRoOjM1MHB4O1xyXG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6MTBweDtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6d2hpdGU7XHJcblx0XHRcdFx0XHRoZWlnaHQ6MzUwcHg7XHJcblx0XHRcdFx0XHQgbWFyZ2luLXRvcDo2MHB4O1xyXG5cdFx0XHRcdFx0IGJvcmRlcjogMC41cHggc29saWQgI2RkZGZlNjs7XHJcblx0XHRcdFx0XHQgYm94LXNoYWRvdzogMCAyMHB4IDYwcHggMCByZ2JhKDE2MywgMTcxLCAxODYsIDApO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5jM3tcclxuXHRcdFx0XHRcdGRpc3BsYXk6ZmxleDtcclxuXHRcdFx0XHRcdHdpZHRoOjM1MHB4O1xyXG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6MTBweDtcclxuXHRcdFx0XHRcdGJhY2tncm91bmQ6d2hpdGU7XHJcblx0XHRcdFx0XHRoZWlnaHQ6MzUwcHg7XHJcblx0XHRcdFx0XHQgbWFyZ2luLXRvcDo2MHB4O1xyXG5cdFx0XHRcdFx0IGJvcmRlcjogMC41cHggc29saWQgI2RkZGZlNjs7XHJcblx0XHRcdFx0XHQgYm94LXNoYWRvdzogMCAyMHB4IDYwcHggMCByZ2JhKDE2MywgMTcxLCAxODYsIDApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQgQG1lZGlhIChtYXgtd2lkdGg6IDExMDBweCkge1xyXG5cclxuXHRcdFx0XHRcdC5jMXtcclxuXHRcdFx0XHRcdFx0bWFyZ2luLWxlZnQ6MHB4O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdCAgICAubWFpbjF7XHJcblx0XHRcdFx0ICAgIGRpc3BsYXk6ZmxleDtcclxuXHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuXHRcdFx0XHRcdGhlaWdodDoxNDAwcHg7XHJcblx0XHRcdFx0XHRtYXJnaW4tdG9wOjgwcHg7XHJcblx0XHRcdFx0XHRhbGlnbi1pdGVtczpjZW50ZXI7XHJcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtYXJvdW5kO1xyXG5cdFx0XHRcdFx0d2lkdGg6MTAwJTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdCAgICB9XHJcblxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdGB9PC9zdHlsZT5cclxuXHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdClcclxuXHR9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTGFuZGluZ2NvbnRlbnQiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgQXNzZXRzIGZyb20gXCIuL2Fzc2V0cy5qc1wiXHJcbmltcG9ydCB7IEljb24gfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcclxuY2xhc3MgTmF2aWdhdGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcblx0XHRzdXBlcihwcm9wcylcclxuICAgICAgICB0aGlzLnN0YXRlPXtcclxuICAgICAgICAgICAgc2hvdzpmYWxzZSxcclxuICAgICAgICAgICAgc2hvd2E6ZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3diOmZhbHNlLFxyXG4gICAgICAgICAgICBzaG93YzpmYWxzZVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmJhY2tkcm9wQ2xpY2tIYW5kbGVydD10aGlzLmJhY2tkcm9wQ2xpY2tIYW5kbGVydC5iaW5kKHRoaXMpXHJcbiAgICAgICAgdGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcmY9dGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcmYuYmluZCh0aGlzKVxyXG4gICAgICAgIHRoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXIxdD10aGlzLmJhY2tkcm9wQ2xpY2tIYW5kbGVyMXQuYmluZCh0aGlzKVxyXG4gICAgICAgIHRoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXIxZj10aGlzLmJhY2tkcm9wQ2xpY2tIYW5kbGVyMWYuYmluZCh0aGlzKVxyXG4gICAgICAgIHRoaXMudHdvZnVuY3Rpb25zbz10aGlzLnR3b2Z1bmN0aW9uc28uYmluZCh0aGlzKVxyXG4gICAgICAgIHRoaXMudHdvZnVuY3Rpb25zZj10aGlzLnR3b2Z1bmN0aW9uc2YuYmluZCh0aGlzKVxyXG4gICAgICAgIHRoaXMudHdvZnVuY3Rpb25zbzE9dGhpcy50d29mdW5jdGlvbnNvMS5iaW5kKHRoaXMpXHJcbiAgICAgICAgdGhpcy50d29mdW5jdGlvbnNmMT10aGlzLnR3b2Z1bmN0aW9uc2YxLmJpbmQodGhpcylcclxuXHR9XHJcbiAgYmFja2Ryb3BDbGlja0hhbmRsZXIgPSgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge3Nob3c6ICFwcmV2U3RhdGUuc2hvd307XHJcblxyXG4gICAgICAgIFxyXG4gICAgfSk7XHJcblxyXG5cclxuICB9O1xyXG5cclxuICAgIGJhY2tkcm9wQ2xpY2tIYW5kbGVyMSA9KCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7c2hvd2E6ICFwcmV2U3RhdGUuc2hvd2F9OyAgICAgICAgXHJcbiAgICB9KTtcclxuXHJcblxyXG4gIH07XHJcbiAgICAgIGJhY2tkcm9wQ2xpY2tIYW5kbGVyMiA9KCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7c2hvd2I6ICFwcmV2U3RhdGUuc2hvd2J9OyAgICAgICAgXHJcbiAgICB9KTtcclxuXHJcblxyXG4gIH07XHJcbiAgYmFja2Ryb3BDbGlja0hhbmRsZXIzID0oKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtzaG93YzogIXByZXZTdGF0ZS5zaG93Y307ICAgICAgICBcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgfTtcclxuICBiYWNrZHJvcENsaWNrSGFuZGxlcnQoKXtcclxuICAgIHRoaXMuc2V0U3RhdGUoe3Nob3c6dHJ1ZX0pXHJcblxyXG4gIH07XHJcbiAgICBiYWNrZHJvcENsaWNrSGFuZGxlcmYoKXtcclxuICAgIHRoaXMuc2V0U3RhdGUoe3Nob3c6ZmFsc2V9KVxyXG4gIH07XHJcbiAgYmFja2Ryb3BDbGlja0hhbmRsZXIxdCgpe1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7c2hvd2E6dHJ1ZX0pXHJcblxyXG4gIH07XHJcbiAgICBiYWNrZHJvcENsaWNrSGFuZGxlcjFmKCl7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtzaG93YTpmYWxzZX0pXHJcbiAgfTtcclxuICB0d29mdW5jdGlvbnNvKCl7XHJcbiAgICB0aGlzLmJhY2tkcm9wQ2xpY2tIYW5kbGVydCgpXHJcbiAgICB0aGlzLmJhY2tkcm9wQ2xpY2tIYW5kbGVyMXQoKVxyXG4gIH1cclxuICAgIHR3b2Z1bmN0aW9uc2YoKXtcclxuICAgIHRoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXJmKClcclxuICAgIHRoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXIxZigpXHJcbiAgfVxyXG4gICAgdHdvZnVuY3Rpb25zbzEoKXtcclxuICAgIHRoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXJ0KClcclxuICAgIHRoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXIyKClcclxuICB9XHJcbiAgICB0d29mdW5jdGlvbnNmMSgpe1xyXG4gICAgdGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcmYoKVxyXG4gICAgdGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcjIoKVxyXG4gIH1cclxucmVuZGVyKCl7XHJcblx0XHRyZXR1cm4oXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiZGVzaWduaW5nXCI+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsb2dvXCI+IDxpbWcgY2xhc3NOYW1lPVwibDFcIiBzcmM9XCJsb2dvLnBuZ1wiLz4gIDwvbGk+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZGFzaGJvYXJkcGFnZVwiPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGluazFcIiAgIG9uTW91c2VFbnRlcj17dGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcnR9IG9uTW91c2VMZWF2ZT17dGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcmZ9PiBcclxuICAgICAgICAgICAgICAgRXhwb3NlZCBJbmZvcm1hdGlvbiBcclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGluazJcIlxyXG4gICAgICAgICAgICAgb25Nb3VzZUVudGVyPXt0aGlzLmJhY2tkcm9wQ2xpY2tIYW5kbGVyM31cclxuICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17dGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcjN9PiBBc3NldHMgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpbmszXCI+IFN1cHBvcnQgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNwYWNlclwiPjwvbGk+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgPjxhPjxpbWcgc3JjPVwidXNlcmljb24ucG5nXCIgY2xhc3NOYW1lPVwidXNlcmxvZ29cIi8+PC9hPjwvTGluaz5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImRlbW9hY2NvdW50XCI+IERlbW8gYWNjb3VudCA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgPiA8aW1nIHNyYz1cIm91dC5wbmdcIiBjbGFzc05hbWU9XCJsb2dvMVwiLz4gPC9saT5cclxuICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1jb250ZW50XCIgICAgICBzdHlsZT17e2Rpc3BsYXk6dGhpcy5zdGF0ZS5zaG93P1wiZmxleFwiOlwibm9uZVwifX1cclxuICAgICAgICAgIG9uTW91c2VFbnRlcj17dGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcnR9ICAgb25Nb3VzZUxlYXZlPXt0aGlzLmJhY2tkcm9wQ2xpY2tIYW5kbGVyZn0gICAgPlxyXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNwYWNlcjFcIj48L2xpPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9kYXNoYm9hcmRwYWdlXCI+XHJcbiAgICAgICAgICAgIDxhICBjbGFzc05hbWU9XCJkYXNoYm9hcmRzXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwic3F1YXJlcy5wbmdcIi8+PHA+REFTSEJPQVJEUzwvcD5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPiAgXHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbjxpbWcgc3JjPVwic2VhcmNoLnBuZ1wiIGNsYXNzTmFtZT1cInNlYXJjaFwiLz5cclxuPHByZT4gPC9wcmU+XHJcbiAgICAgICAgICAgIEtFWVdPUkRTPC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiIG9uTW91c2VFbnRlcj17dGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcjF0fVxyXG4gICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e3RoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXIxZn1cclxuICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgID5cclxuPGltZyBzcmM9XCJiZWxsLnBuZ1wiIGNsYXNzTmFtZT1cImFsZXJ0c1wiLz5cclxuPHByZT4gPC9wcmU+XHJcbiAgICAgICAgICAgIEFMRVJUU1xyXG4gICAgICAgICAgICA8cHJlPiA8L3ByZT5cclxuICAgICAgICAgICAgPEljb24gZmxpcHBlZD0naG9yaXpvbnRhbGx5JyBmaXR0ZWQgbmFtZT0nY2FyZXQgZG93bicgc2l6ZT1cImxhcmdlXCIgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgIG9uTW91c2VFbnRlcj17dGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcjJ9XHJcbiAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17dGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcjJ9PlxyXG48aW1nIHNyYz1cInNoZWFsZC5wbmdcIiBjbGFzc05hbWU9XCJzaGVhbGRcIlxyXG4vPlxyXG48cHJlPiA8L3ByZT5cclxuXHJcbiAgICAgICAgICAgIFJFTUVESUFUSU9OXHJcbiAgICAgICAgICAgIDxwcmU+IDwvcHJlPlxyXG4gICAgICAgICAgICA8SWNvbiBmbGlwcGVkPSdob3Jpem9udGFsbHknIGZpdHRlZCBuYW1lPSdjYXJldCBkb3duJyBzaXplPVwibGFyZ2VcIiAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG48aW1nIHNyYz1cInNlYXRpbmcucG5nXCIgY2xhc3NOYW1lPVwic2VhdGluZ1wiLz5cclxuXHJcbiAgICAgICAgICAgIFNFVFRJTkdTPC9hPlxyXG5cclxuICAgICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1jb250ZW50MVwiICBzdHlsZT17e2Rpc3BsYXk6dGhpcy5zdGF0ZS5zaG93YT9cImZsZXhcIjpcIm5vbmVcIn19IFxyXG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI9e3RoaXMudHdvZnVuY3Rpb25zb30gICBvbk1vdXNlTGVhdmU9e3RoaXMudHdvZnVuY3Rpb25zZn0gXHJcbiAgXHJcbiAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIEFsbCBBbGVydHNcclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICBTZW5zaXRpdmUgSW5mb3JtYXRpb248L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgIERpc2N1c3Npb25zPC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICBCbGFjayBNYXJrZXRzPC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICBGaW5hbmNpYWw8L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgIEV4cG9zZWQgQ3JlZGVudGlhbHM8L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgIFBlcnNvbmFsIEluZm9ybWF0aW9uPC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICBIYWNrZXIgR3JvdXAgVGFyZ2V0aW5nPC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICBBdHRhY2sgJiBDb21wcm9taXNlczwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgVW5kZXIgQW5hbHlzaXM8L2E+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRyb3Bkb3duLWNvbnRlbnQzXCIgIHN0eWxlPXt7ZGlzcGxheTp0aGlzLnN0YXRlLnNob3diP1wiZmxleFwiOlwibm9uZVwifX0gXHJcbiAgICAgICAgICAgIG9uTW91c2VFbnRlcj17dGhpcy50d29mdW5jdGlvbnNvMX0gICBvbk1vdXNlTGVhdmU9e3RoaXMudHdvZnVuY3Rpb25zZjF9ID5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInNwYWNlcjFcIj48L2xpPlxyXG4gICAgICAgICAgICA8bGkgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJkYXNoYm9hcmRzXCI+XHJcbiAgICAgICAgICAgIDxwPjwvcD5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8cHJlPiA8L3ByZT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGhyZWY9XCIjXCIgPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPHByZT4gPC9wcmU+XHJcbiAgICAgICAgICAgIDxwcmU+IDwvcHJlPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgPHByZT4gPC9wcmU+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImQxXCI+QWN0aW9uczwvYT5cclxuICAgICAgICAgICAgPHByZT4gICA8L3ByZT5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiZDJcIj5Mb2c8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8bGkgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvbGk+XHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPEFzc2V0cyBjYWxsPXt0aGlzLnN0YXRlLnNob3djfSBjPXt0aGlzLmJhY2tkcm9wQ2xpY2tIYW5kbGVyM30vPlxyXG4gICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAubDF7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOjBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOjMwMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjQwcHg7XHJcbiAgICAgICAgICAgIH1cclxuLmRlc2lnbmluZ3tcclxuICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBcclxuICB3aWR0aDoxMDAlO1xyXG4gIFxyXG4gIFxyXG5cclxufVxyXG4uc3BhY2VyMntcclxuZGlzcGxheTpmbGV4O1xyXG5iYWNrZ3JvdW5kOmJsdWU7XHJcbmZsZXgtYmFzaXM6NTAlO1xyXG59XHJcbi5zZWFyY2h7XHJcbiAgICAgICAgIHdpZHRoOjI0cHg7XHJcbiAgICBoZWlnaHQ6MjRweDsgIFxyXG59XHJcbi5zaGVhbGR7XHJcbiAgICAgIHdpZHRoOjQwcHg7XHJcbiAgICBoZWlnaHQ6NDBweDsgIFxyXG59XHJcbi5hbGVydHN7XHJcbiAgICB3aWR0aDoyNXB4O1xyXG4gICAgaGVpZ2h0OjI1cHg7XHJcbn1cclxuLmRlc2lnbmluZyA+bGkge1xyXG4gIGNvbG9yOndoaXRlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBoZWlnaHQ6IDUwcHg7XHJcblxyXG4gIGxpc3Qtc3R5bGU6bm9uZTsgXHJcbn1cclxuLmxvZ297XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgZmxleC1iYXNpczogNDAlO1xyXG59XHJcbi5saW5rMXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmb250LWZhbWlseTogJ0dpbHJveScsIHNhbnMtc2VyaWY7XHJcbiAgd2lkdGg6MTUwcHg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGJvcmRlci1ib3R0b206M3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG59XHJcbi5saW5rMntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDo3NXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiR2lscm95XCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGJvcmRlci1ib3R0b206M3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG59XHJcbi5saW5rM3tcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDo3MHB4O1xyXG4gICAgICAgZm9udC1mYW1pbHk6IFwiR2lscm95XCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGJvcmRlci1ib3R0b206M3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG59XHJcbi5zcGFjZXJ7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWJhc2lzOiAyMCU7XHJcblxyXG4gIFxyXG59XHJcbi51c2VybG9nb3tcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5mbGV4LWJhc2lzOiAxNSU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG5iYWNrZ3JvdW5kOiBibGFjaztcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbn1cclxuLmRlbW9hY2NvdW50e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgICBmb250LWZhbWlseTogXCJHaWxyb3lcIiwgc2Fucy1zZXJpZjtcclxuICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICB3aWR0aDogMTEwcHg7XHJcblxyXG59XHJcbi5sb2dvMXtcclxuIHdpZHRoOjI1cHg7XHJcbiBoZWlnaHQ6MjVweDtcclxufVxyXG4vKiBEcm9wZG93biBCdXR0b24gKi9cclxuXHJcblxyXG4vKiBUaGUgY29udGFpbmVyIDxkaXY+IC0gbmVlZGVkIHRvIHBvc2l0aW9uIHRoZSBkcm9wZG93biBjb250ZW50ICovXHJcblxyXG4uc3BhY2VyMXtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtYmFzaXM6IDIwJTtcclxufVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgbWluLXdpZHRoOiAxNjBweDtcclxuICBib3gtc2hhZG93OiAwcHggOHB4IDE2cHggMHB4IHJnYmEoMCwwLDAsMC4yKTtcclxuICB6LWluZGV4OiAxO1xyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIHdpZHRoOjEwMCU7XHJcbn1cclxuLnNlYXRpbmd7XHJcbiAgICB3aWR0aDozNXB4O1xyXG4gICAgaGVpZ2h0OjMwcHg7XHJcbn1cclxuLyogTGlua3MgaW5zaWRlIHRoZSBkcm9wZG93biAqL1xyXG4uZHJvcGRvd24tY29udGVudCA+YSB7XHJcbiAgY29sb3I6IGdyYXk7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgZm9udC1mYW1pbHk6ICdHaWxyb3knLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XHJcbiAgZm9udC13ZWlnaHQ6NDAwO1xyXG4gIHdpZHRoOiAxODBweDtcclxuICBoZWlnaHQ6NzBweDtcclxuICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuXHJcbi8qIENoYW5nZSBjb2xvciBvZiBkcm9wZG93biBsaW5rcyBvbiBob3ZlciAqL1xyXG4uZHJvcGRvd24tY29udGVudCBhOmhvdmVyIHtjb2xvcjogYmxhY2s7b3BhY2l0eTogMTt9XHJcblxyXG5cclxuLmxpbmsxOmhvdmVyIHtib3JkZXItYm90dG9tOjNweCBzb2xpZCAjMDA3NmZmOyBjdXJzb3I6IHBvaW50ZXI7fVxyXG4ubGluazI6aG92ZXIge2JvcmRlci1ib3R0b206M3B4IHNvbGlkICMwMDc2ZmY7IGN1cnNvcjogcG9pbnRlcjt9XHJcbi5saW5rMzpob3ZlciB7Ym9yZGVyLWJvdHRvbTozcHggc29saWQgIzAwNzZmZjsgY3Vyc29yOiBwb2ludGVyO31cclxuLmRhc2hib2FyZHN7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbndpZHRoOiAxMDBweDtcclxuXHJcbn1cclxuLmRhc2hib2FyZHMgaW1ne1xyXG4gICAgaGVpZ2h0OjMwcHg7XHJcbiAgICB3aWR0aDozMHB4O1xyXG59XHJcbi5kcm9wZG93bi1jb250ZW50MSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGp1c3RpZnktY29udGVudDpzcGFjZS1ldmVubHk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgei1pbmRleDogMTtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgbWFyZ2luLXRvcDo3MHB4O1xyXG59XHJcblxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQxID5hIHtcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gIFxyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnR2lscm95Jywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEycHg7XHJcblxyXG4gIGhlaWdodDo2MHB4O1xyXG59XHJcbi5kcm9wZG93bi1jb250ZW50MSBhOmhvdmVyIHtjb2xvcjogYmxhY2s7fVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIG1pbi13aWR0aDogMTYwcHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgei1pbmRleDogMTtcclxuICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBtYXJnaW4tdG9wOjcwcHg7XHJcbn1cclxuXHJcblxyXG4uZHJvcGRvd24tY29udGVudDMgPmxpIHtcclxuICBjb2xvcjogZ3JheTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBmb250LWZhbWlseTogJ0dpbHJveScsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcclxuICBmb250LXdlaWdodDo0MDA7XHJcbiAgd2lkdGg6IDE4MHB4O1xyXG4gIGhlaWdodDo2MHB4O1xyXG4gIG9wYWNpdHk6IDAuODtcclxuICBsaXN0LXN0eWxlOm5vbmU7XHJcbiAgICAgXHJcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcblxyXG59XHJcbi5kMXtcclxuY29sb3I6Z3JheTtcclxudGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbn1cclxuLmQye1xyXG5jb2xvcjpncmF5O1xyXG50ZXh0LWRlY29yYXRpb246bm9uZTtcclxufVxyXG4uZDE6aG92ZXIge2NvbG9yOiBibGFjaztjdXJzb3I6IHBvaW50ZXI7fVxyXG4uZDI6aG92ZXIge2NvbG9yOiBibGFjaztjdXJzb3I6IHBvaW50ZXI7fVxyXG4gQG1lZGlhIChtYXgtd2lkdGg6IDEwNDRweCkge1xyXG4gICAuZGVzaWduaW5ne1xyXG4gICAgIHdpZHRoOjEwMCU7XHJcbiAgIH1cclxuICAgLmRyb3Bkb3duLWNvbnRlbnR7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICB9XHJcbiAgIC5kcm9wZG93bi1jb250ZW50MXtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgIH1cclxuICAgLmRyb3Bkb3duLWNvbnRlbnQze1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgfVxyXG4gICAgLmRlc2lnbmluZyAubGluazEge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAuZGVzaWduaW5nIC5saW5rMiB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC5kZXNpZ25pbmcgLmxpbmszIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxufVxyXG4gQG1lZGlhIChtYXgtd2lkdGg6IDYwNHB4KSB7XHJcbiAgIC5kZXNpZ25pbmd7XHJcbiAgICAgd2lkdGg6MTAwJTtcclxuICAgfVxyXG5cclxuICB9XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDMwNHB4KSB7XHJcbiAgICAuZGVzaWduaW5ne1xyXG4gICAgICB3aWR0aDoxMDAlO1xyXG4gICAgfVxyXG4gXHJcbiAgIH1cclxuXHJcbn0gICAgICAgICBcclxuXHJcbiAgICAgICAgICBgfSA8L3N0eWxlPlxyXG4gICAgXHJcbiAgICA8L2Rpdj5cclxuXHRcdFx0KVxyXG5cdH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImRlY2xhcmUgY29uc3QgX19ORVhUX0RBVEFfXzogYW55XG5cbmltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiwgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBwYXJzZSwgcmVzb2x2ZSwgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUHJlZmV0Y2hPcHRpb25zIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQge1xuICBleGVjT25jZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgUm91dGVyIGZyb20gJy4vcm91dGVyJ1xuaW1wb3J0IHsgYWRkQmFzZVBhdGggfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcblxuZnVuY3Rpb24gaXNMb2NhbChocmVmOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgY29uc3QgdXJsID0gcGFyc2UoaHJlZiwgZmFsc2UsIHRydWUpXG4gIGNvbnN0IG9yaWdpbiA9IHBhcnNlKGdldExvY2F0aW9uT3JpZ2luKCksIGZhbHNlLCB0cnVlKVxuXG4gIHJldHVybiAoXG4gICAgIXVybC5ob3N0IHx8ICh1cmwucHJvdG9jb2wgPT09IG9yaWdpbi5wcm90b2NvbCAmJiB1cmwuaG9zdCA9PT0gb3JpZ2luLmhvc3QpXG4gIClcbn1cblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgRm9ybWF0UmVzdWx0ID0geyBocmVmOiBzdHJpbmc7IGFzPzogc3RyaW5nIH1cblxuZnVuY3Rpb24gbWVtb2l6ZWRGb3JtYXRVcmwoZm9ybWF0RnVuYzogKGhyZWY6IFVybCwgYXM/OiBVcmwpID0+IEZvcm1hdFJlc3VsdCkge1xuICBsZXQgbGFzdEhyZWY6IG51bGwgfCBVcmwgPSBudWxsXG4gIGxldCBsYXN0QXM6IHVuZGVmaW5lZCB8IG51bGwgfCBVcmwgPSBudWxsXG4gIGxldCBsYXN0UmVzdWx0OiBudWxsIHwgRm9ybWF0UmVzdWx0ID0gbnVsbFxuICByZXR1cm4gKGhyZWY6IFVybCwgYXM/OiBVcmwpID0+IHtcbiAgICBpZiAobGFzdFJlc3VsdCAmJiBocmVmID09PSBsYXN0SHJlZiAmJiBhcyA9PT0gbGFzdEFzKSB7XG4gICAgICByZXR1cm4gbGFzdFJlc3VsdFxuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IGZvcm1hdEZ1bmMoaHJlZiwgYXMpXG4gICAgbGFzdEhyZWYgPSBocmVmXG4gICAgbGFzdEFzID0gYXNcbiAgICBsYXN0UmVzdWx0ID0gcmVzdWx0XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFVybCh1cmw6IFVybCk6IHN0cmluZyB7XG4gIHJldHVybiB1cmwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcgPyBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmwpIDogdXJsXG59XG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxufVxuXG5sZXQgb2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwPEVsZW1lbnQsICgpID0+IHZvaWQ+KClcbmNvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuICBpZiAob2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gb2JzZXJ2ZXJcbiAgfVxuXG4gIC8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuICBpZiAoIUludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIChvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSBsaXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkhXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgcm9vdE1hcmdpbjogJzIwMHB4JyB9XG4gICkpXG59XG5cbmNvbnN0IGxpc3RlblRvSW50ZXJzZWN0aW9ucyA9IChlbDogRWxlbWVudCwgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcigpXG4gIGlmICghb2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWwpXG4gIGxpc3RlbmVycy5zZXQoZWwsIGNiKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShlbClcbiAgfVxufVxuXG5jbGFzcyBMaW5rIGV4dGVuZHMgQ29tcG9uZW50PExpbmtQcm9wcz4ge1xuICBwOiBib29sZWFuXG5cbiAgY29uc3RydWN0b3IocHJvcHM6IExpbmtQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAocHJvcHMucHJlZmV0Y2gpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICAgIClcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5wID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlXG4gIH1cblxuICBjbGVhblVwTGlzdGVuZXJzID0gKCkgPT4ge31cblxuICBjb21wb25lbnRXaWxsVW5tb3VudCgpOiB2b2lkIHtcbiAgICB0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKVxuICB9XG5cbiAgZ2V0UGF0aHMoKTogc3RyaW5nW10ge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHdpbmRvdy5sb2NhdGlvblxuICAgIGNvbnN0IHsgaHJlZjogcGFyc2VkSHJlZiwgYXM6IHBhcnNlZEFzIH0gPSB0aGlzLmZvcm1hdFVybHMoXG4gICAgICB0aGlzLnByb3BzLmhyZWYsXG4gICAgICB0aGlzLnByb3BzLmFzXG4gICAgKVxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmUocGF0aG5hbWUsIHBhcnNlZEhyZWYpXG4gICAgcmV0dXJuIFtyZXNvbHZlZEhyZWYsIHBhcnNlZEFzID8gcmVzb2x2ZShwYXRobmFtZSwgcGFyc2VkQXMpIDogcmVzb2x2ZWRIcmVmXVxuICB9XG5cbiAgaGFuZGxlUmVmKHJlZjogRWxlbWVudCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnAgJiYgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiYgcmVmICYmIHJlZi50YWdOYW1lKSB7XG4gICAgICB0aGlzLmNsZWFuVXBMaXN0ZW5lcnMoKVxuXG4gICAgICBjb25zdCBpc1ByZWZldGNoZWQgPVxuICAgICAgICBwcmVmZXRjaGVkW1xuICAgICAgICAgIHRoaXMuZ2V0UGF0aHMoKS5qb2luKFxuICAgICAgICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgICAgICAgICclJ1xuICAgICAgICAgIClcbiAgICAgICAgXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgdGhpcy5jbGVhblVwTGlzdGVuZXJzID0gbGlzdGVuVG9JbnRlcnNlY3Rpb25zKHJlZiwgKCkgPT4ge1xuICAgICAgICAgIHRoaXMucHJlZmV0Y2goKVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFRoZSBmdW5jdGlvbiBpcyBtZW1vaXplZCBzbyB0aGF0IG5vIGV4dHJhIGxpZmVjeWNsZXMgYXJlIG5lZWRlZFxuICAvLyBhcyBwZXIgaHR0cHM6Ly9yZWFjdGpzLm9yZy9ibG9nLzIwMTgvMDYvMDcveW91LXByb2JhYmx5LWRvbnQtbmVlZC1kZXJpdmVkLXN0YXRlLmh0bWxcbiAgZm9ybWF0VXJscyA9IG1lbW9pemVkRm9ybWF0VXJsKChocmVmLCBhc0hyZWYpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgaHJlZjogYWRkQmFzZVBhdGgoZm9ybWF0VXJsKGhyZWYpKSxcbiAgICAgIGFzOiBhc0hyZWYgPyBhZGRCYXNlUGF0aChmb3JtYXRVcmwoYXNIcmVmKSkgOiBhc0hyZWYsXG4gICAgfVxuICB9KVxuXG4gIGxpbmtDbGlja2VkID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpOiB2b2lkID0+IHtcbiAgICBjb25zdCB7IG5vZGVOYW1lLCB0YXJnZXQgfSA9IGUuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICAgIGlmIChcbiAgICAgIG5vZGVOYW1lID09PSAnQScgJiZcbiAgICAgICgodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICAgICAgZS5tZXRhS2V5IHx8XG4gICAgICAgIGUuY3RybEtleSB8fFxuICAgICAgICBlLnNoaWZ0S2V5IHx8XG4gICAgICAgIChlLm5hdGl2ZUV2ZW50ICYmIGUubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpKVxuICAgICkge1xuICAgICAgLy8gaWdub3JlIGNsaWNrIGZvciBuZXcgdGFiIC8gbmV3IHdpbmRvdyBiZWhhdmlvclxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgbGV0IHsgaHJlZiwgYXMgfSA9IHRoaXMuZm9ybWF0VXJscyh0aGlzLnByb3BzLmhyZWYsIHRoaXMucHJvcHMuYXMpXG5cbiAgICBpZiAoIWlzTG9jYWwoaHJlZikpIHtcbiAgICAgIC8vIGlnbm9yZSBjbGljayBpZiBpdCdzIG91dHNpZGUgb3VyIHNjb3BlIChlLmcuIGh0dHBzOi8vZ29vZ2xlLmNvbSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHdpbmRvdy5sb2NhdGlvblxuICAgIGhyZWYgPSByZXNvbHZlKHBhdGhuYW1lLCBocmVmKVxuICAgIGFzID0gYXMgPyByZXNvbHZlKHBhdGhuYW1lLCBhcykgOiBocmVmXG5cbiAgICBlLnByZXZlbnREZWZhdWx0KClcblxuICAgIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICAgIGxldCB7IHNjcm9sbCB9ID0gdGhpcy5wcm9wc1xuICAgIGlmIChzY3JvbGwgPT0gbnVsbCkge1xuICAgICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICAgIH1cblxuICAgIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICAgIFJvdXRlclt0aGlzLnByb3BzLnJlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7XG4gICAgICBzaGFsbG93OiB0aGlzLnByb3BzLnNoYWxsb3csXG4gICAgfSkudGhlbigoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBwcmVmZXRjaChvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnAgfHwgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICAgIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgICBjb25zdCBwYXRocyA9IHRoaXMuZ2V0UGF0aHMoKVxuICAgIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgICAvLyBsb2FkaW5nIHdpdGggcHJpb3JpdHkgd2hpY2ggY2FuIHJlamVjdCBidXQgd2UgZG9uJ3RcbiAgICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgICBSb3V0ZXIucHJlZmV0Y2gocGF0aHNbLyogaHJlZiAqLyAwXSwgcGF0aHNbLyogYXNQYXRoICovIDFdLCBvcHRpb25zKS5jYXRjaChcbiAgICAgIChlcnIpID0+IHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXG4gICAgICAgICAgdGhyb3cgZXJyXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApXG4gICAgcHJlZmV0Y2hlZFtcbiAgICAgIHBhdGhzLmpvaW4oXG4gICAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICAgICclJ1xuICAgICAgKVxuICAgIF0gPSB0cnVlXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgbGV0IHsgY2hpbGRyZW4gfSA9IHRoaXMucHJvcHNcbiAgICBjb25zdCB7IGhyZWYsIGFzIH0gPSB0aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLCB0aGlzLnByb3BzLmFzKVxuICAgIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xuICAgIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gICAgfVxuXG4gICAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gICAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gICAgY29uc3QgcHJvcHM6IHtcbiAgICAgIG9uTW91c2VFbnRlcjogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgICBocmVmPzogc3RyaW5nXG4gICAgICByZWY/OiBhbnlcbiAgICB9ID0ge1xuICAgICAgcmVmOiAoZWw6IGFueSkgPT4ge1xuICAgICAgICB0aGlzLmhhbmRsZVJlZihlbClcblxuICAgICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWYpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGQucmVmKGVsKVxuICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBjaGlsZC5yZWYuY3VycmVudCA9IGVsXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgb25Nb3VzZUVudGVyOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMucHJlZmV0Y2goeyBwcmlvcml0eTogdHJ1ZSB9KVxuICAgICAgfSxcbiAgICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgIHRoaXMubGlua0NsaWNrZWQoZSlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9XG5cbiAgICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgICBpZiAoXG4gICAgICB0aGlzLnByb3BzLnBhc3NIcmVmIHx8XG4gICAgICAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSlcbiAgICApIHtcbiAgICAgIHByb3BzLmhyZWYgPSBhcyB8fCBocmVmXG4gICAgfVxuXG4gICAgLy8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuICAgIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseS5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAucmV3cml0ZVVybEZvck5leHRFeHBvcnRcbiAgICAgIGlmIChcbiAgICAgICAgcHJvcHMuaHJlZiAmJlxuICAgICAgICB0eXBlb2YgX19ORVhUX0RBVEFfXyAhPT0gJ3VuZGVmaW5lZCcgJiZcbiAgICAgICAgX19ORVhUX0RBVEFfXy5uZXh0RXhwb3J0XG4gICAgICApIHtcbiAgICAgICAgcHJvcHMuaHJlZiA9IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHByb3BzLmhyZWYpXG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgcHJvcHMpXG4gIH1cbn1cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gIGNvbnN0IHdhcm4gPSBleGVjT25jZShjb25zb2xlLmVycm9yKVxuXG4gIC8vIFRoaXMgbW9kdWxlIGdldHMgcmVtb3ZlZCBieSB3ZWJwYWNrLklnbm9yZVBsdWdpblxuICBjb25zdCBQcm9wVHlwZXMgPSByZXF1aXJlKCdwcm9wLXR5cGVzJylcbiAgY29uc3QgZXhhY3QgPSByZXF1aXJlKCdwcm9wLXR5cGVzLWV4YWN0JylcbiAgLy8gQHRzLWlnbm9yZSB0aGUgcHJvcGVydHkgaXMgc3VwcG9ydGVkLCB3aGVuIGRlY2xhcmluZyBpdCBvbiB0aGUgY2xhc3MgaXQgb3V0cHV0cyBhbiBleHRyYSBiaXQgb2YgY29kZSB3aGljaCBpcyBub3QgbmVlZGVkLlxuICBMaW5rLnByb3BUeXBlcyA9IGV4YWN0KHtcbiAgICBocmVmOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtQcm9wVHlwZXMuc3RyaW5nLCBQcm9wVHlwZXMub2JqZWN0XSkuaXNSZXF1aXJlZCxcbiAgICBhczogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLFxuICAgIHByZWZldGNoOiBQcm9wVHlwZXMuYm9vbCxcbiAgICByZXBsYWNlOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBzaGFsbG93OiBQcm9wVHlwZXMuYm9vbCxcbiAgICBwYXNzSHJlZjogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2Nyb2xsOiBQcm9wVHlwZXMuYm9vbCxcbiAgICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgICBQcm9wVHlwZXMuZWxlbWVudCxcbiAgICAgIChwcm9wczogYW55LCBwcm9wTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gcHJvcHNbcHJvcE5hbWVdXG5cbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB3YXJuKFxuICAgICAgICAgICAgYFdhcm5pbmc6IFlvdSdyZSB1c2luZyBhIHN0cmluZyBkaXJlY3RseSBpbnNpZGUgPExpbms+LiBUaGlzIHVzYWdlIGhhcyBiZWVuIGRlcHJlY2F0ZWQuIFBsZWFzZSBhZGQgYW4gPGE+IHRhZyBhcyBjaGlsZCBvZiA8TGluaz5gXG4gICAgICAgICAgKVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgIH0sXG4gICAgXSkuaXNSZXF1aXJlZCxcbiAgfSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tY29uc29sZVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oe30sIF9yb3V0ZXJbcHJvcGVydHldKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYml0d2lzZVxuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcGFyc2UsIFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgIT09IDAgPyBiYXNlUGF0aCArIHBhdGggOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5pbmRleE9mKGJhc2VQYXRoKSA9PT0gMFxuICAgID8gcGF0aC5zdWJzdHIoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbiAgICA6IHBhdGhcbn1cblxuZnVuY3Rpb24gdG9Sb3V0ZShwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJ1xufVxuXG5jb25zdCBwcmVwYXJlUm91dGUgPSAocGF0aDogc3RyaW5nKSA9PlxuICB0b1JvdXRlKCFwYXRoIHx8IHBhdGggPT09ICcvJyA/ICcvaW5kZXgnIDogcGF0aClcblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxudHlwZSBDb21wb25lbnRSZXMgPSB7IHBhZ2U6IENvbXBvbmVudFR5cGU7IG1vZDogYW55IH1cblxuZXhwb3J0IHR5cGUgQmFzZVJvdXRlciA9IHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbnR5cGUgUm91dGVJbmZvID0ge1xuICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBhbnlcbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxudHlwZSBTdWJzY3JpcHRpb24gPSAoZGF0YTogUm91dGVJbmZvLCBBcHA/OiBDb21wb25lbnRUeXBlKSA9PiB2b2lkXG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogYW55KSA9PiBib29sZWFuXG5cbnR5cGUgQ29tcG9uZW50TG9hZENhbmNlbCA9ICgoKSA9PiB2b2lkKSB8IG51bGxcblxudHlwZSBIaXN0b3J5TWV0aG9kID0gJ3JlcGxhY2VTdGF0ZScgfCAncHVzaFN0YXRlJ1xuXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKFxuICBwYXRobmFtZTogc3RyaW5nLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnkgfCBudWxsLFxuICBpc1NlcnZlclJlbmRlcjogYm9vbGVhbixcbiAgY2I/OiAoLi4uYXJnczogYW55KSA9PiBhbnlcbikge1xuICBsZXQgYXR0ZW1wdHMgPSBpc1NlcnZlclJlbmRlciA/IDMgOiAxXG4gIGZ1bmN0aW9uIGdldFJlc3BvbnNlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuIGZldGNoKFxuICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgoXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZSBfX05FWFRfREFUQV9fXG4gICAgICAgICAgYC9fbmV4dC9kYXRhLyR7X19ORVhUX0RBVEFfXy5idWlsZElkfSR7ZGVsQmFzZVBhdGgocGF0aG5hbWUpfS5qc29uYFxuICAgICAgICApLFxuICAgICAgICBxdWVyeSxcbiAgICAgIH0pLFxuICAgICAge1xuICAgICAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAgICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAgICAgLy8gPiBvcHRpb24uXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9GZXRjaF9BUEkvVXNpbmdfRmV0Y2hcbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAgICAgLy8gPiByZWNlaXZpbmcgY29va2llcywgYWx3YXlzIHN1cHBseSB0aGUgYGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nYFxuICAgICAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgIH1cbiAgICApLnRoZW4oKHJlcykgPT4ge1xuICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgaWYgKC0tYXR0ZW1wdHMgPiAwICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgICAgcmV0dXJuIGdldFJlc3BvbnNlKClcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzLmpzb24oKVxuICAgIH0pXG4gIH1cblxuICByZXR1cm4gZ2V0UmVzcG9uc2UoKVxuICAgIC50aGVuKChkYXRhKSA9PiB7XG4gICAgICByZXR1cm4gY2IgPyBjYihkYXRhKSA6IGRhdGFcbiAgICB9KVxuICAgIC5jYXRjaCgoZXJyOiBFcnJvcikgPT4ge1xuICAgICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgICAgLy8gbG9vcC5cbiAgICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgICAgOyhlcnIgYXMgYW55KS5jb2RlID0gJ1BBR0VfTE9BRF9FUlJPUidcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFJvdXRlSW5mbyB9XG4gIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gIHNkYzogeyBbYXNQYXRoOiBzdHJpbmddOiBvYmplY3QgfSA9IHt9XG4gIHN1YjogU3Vic2NyaXB0aW9uXG4gIGNsYzogQ29tcG9uZW50TG9hZENhbmNlbFxuICBwYWdlTG9hZGVyOiBhbnlcbiAgX2JwczogQmVmb3JlUG9wU3RhdGVDYWxsYmFjayB8IHVuZGVmaW5lZFxuICBldmVudHM6IE1pdHRFbWl0dGVyXG4gIF93cmFwQXBwOiAoQXBwOiBDb21wb25lbnRUeXBlKSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgfToge1xuICAgICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb25cbiAgICAgIGluaXRpYWxQcm9wczogYW55XG4gICAgICBwYWdlTG9hZGVyOiBhbnlcbiAgICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgQXBwOiBDb21wb25lbnRUeXBlXG4gICAgICB3cmFwQXBwOiAoQXBwOiBDb21wb25lbnRUeXBlKSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSlcblxuICAgIC8vIHNldCB1cCB0aGUgY29tcG9uZW50IGNhY2hlIChieSByb3V0ZSBrZXlzKVxuICAgIHRoaXMuY29tcG9uZW50cyA9IHt9XG4gICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxuICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxuICAgIGlmIChwYXRobmFtZSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgZXJyLFxuICAgICAgICBfX05fU1NHOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU0csXG4gICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUCxcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7IENvbXBvbmVudDogQXBwIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGFzXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKVxuICAgIH1cbiAgfVxuXG4gIC8vIEBkZXByZWNhdGVkIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IGV2ZW4gdGhvdWdoIGl0J3MgYSBwcml2YXRlIG1ldGhvZC5cbiAgc3RhdGljIF9yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICByZXR1cm4gcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdXJsXG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgaWYgKCFlLnN0YXRlKSB7XG4gICAgICAvLyBXZSBnZXQgc3RhdGUgYXMgdW5kZWZpbmVkIGZvciB0d28gcmVhc29ucy5cbiAgICAgIC8vICAxLiBXaXRoIG9sZGVyIHNhZmFyaSAoPCA4KSBhbmQgb2xkZXIgY2hyb21lICg8IDM0KVxuICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgLy9cbiAgICAgIC8vIEluIHRoZSBib3RoIGNhc2VzLCB3ZSBkb24ndCBuZWVkIHRvIHByb2NlZWQgYW5kIGNoYW5nZSB0aGUgcm91dGUuXG4gICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAvLyBCdXQgd2UgY2FuIHNpbXBseSByZXBsYWNlIHRoZSBzdGF0ZSB3aXRoIHRoZSBuZXcgY2hhbmdlcy5cbiAgICAgIC8vIEFjdHVhbGx5LCBmb3IgKDEpIHdlIGRvbid0IG5lZWQgdG8gbm90aGluZy4gQnV0IGl0J3MgaGFyZCB0byBkZXRlY3QgdGhhdCBldmVudC5cbiAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHRoaXNcbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmIChcbiAgICAgIGUuc3RhdGUgJiZcbiAgICAgIHRoaXMuaXNTc3IgJiZcbiAgICAgIGUuc3RhdGUuYXMgPT09IHRoaXMuYXNQYXRoICYmXG4gICAgICBwYXJzZShlLnN0YXRlLnVybCkucGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWVcbiAgICApIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhlLnN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBlLnN0YXRlXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2YgdXJsID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2YgYXMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnYHBvcHN0YXRlYCBldmVudCB0cmlnZ2VyZWQgYnV0IGBldmVudC5zdGF0ZWAgZGlkIG5vdCBoYXZlIGB1cmxgIG9yIGBhc2AgaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL3BvcHN0YXRlLXN0YXRlLWVtcHR5J1xuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucmVwbGFjZSh1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgdXBkYXRlKHJvdXRlOiBzdHJpbmcsIG1vZDogYW55KSB7XG4gICAgY29uc3QgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlID0gbW9kLmRlZmF1bHQgfHwgbW9kXG4gICAgY29uc3QgZGF0YSA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgQ2Fubm90IHVwZGF0ZSB1bmF2YWlsYWJsZSByb3V0ZTogJHtyb3V0ZX1gKVxuICAgIH1cblxuICAgIGNvbnN0IG5ld0RhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBkYXRhLCB7XG4gICAgICBDb21wb25lbnQsXG4gICAgICBfX05fU1NHOiBtb2QuX19OX1NTRyxcbiAgICAgIF9fTl9TU1A6IG1vZC5fX05fU1NQLFxuICAgIH0pXG4gICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IG5ld0RhdGFcblxuICAgIC8vIHBhZ2VzL19hcHAuanMgdXBkYXRlZFxuICAgIGlmIChyb3V0ZSA9PT0gJy9fYXBwJykge1xuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHJvdXRlID09PSB0aGlzLnJvdXRlKSB7XG4gICAgICB0aGlzLm5vdGlmeShuZXdEYXRhKVxuICAgIH1cbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICBfdXJsOiBVcmwsXG4gICAgX2FzOiBVcmwsXG4gICAgb3B0aW9uczogYW55XG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoIW9wdGlvbnMuX2gpIHtcbiAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgICB9XG4gICAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XG4gICAgICBpZiAoU1QpIHtcbiAgICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgICAgfVxuXG4gICAgICAvLyBJZiB1cmwgYW5kIGFzIHByb3ZpZGVkIGFzIGFuIG9iamVjdCByZXByZXNlbnRhdGlvbixcbiAgICAgIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gICAgICBsZXQgdXJsID0gdHlwZW9mIF91cmwgPT09ICdvYmplY3QnID8gZm9ybWF0V2l0aFZhbGlkYXRpb24oX3VybCkgOiBfdXJsXG4gICAgICBsZXQgYXMgPSB0eXBlb2YgX2FzID09PSAnb2JqZWN0JyA/IGZvcm1hdFdpdGhWYWxpZGF0aW9uKF9hcykgOiBfYXNcblxuICAgICAgdXJsID0gYWRkQmFzZVBhdGgodXJsKVxuICAgICAgYXMgPSBhZGRCYXNlUGF0aChhcylcblxuICAgICAgLy8gQWRkIHRoZSBlbmRpbmcgc2xhc2ggdG8gdGhlIHBhdGhzLiBTbywgd2UgY2FuIHNlcnZlIHRoZVxuICAgICAgLy8gXCI8cGFnZT4vaW5kZXguaHRtbFwiIGRpcmVjdGx5IGZvciB0aGUgU1NSIHBhZ2UuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0VYUE9SVF9UUkFJTElOR19TTEFTSCkge1xuICAgICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgICAgaWYgKF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydCkge1xuICAgICAgICAgIGFzID0gcmV3cml0ZVVybEZvck5leHRFeHBvcnQoYXMpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQoYXMpXG5cbiAgICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXG4gICAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAgIC8vIGh5ZHJhdGlvbi4gWW91ciBhcHAgc2hvdWxkIF9uZXZlcl8gdXNlIHRoaXMgcHJvcGVydHkuIEl0IG1heSBjaGFuZ2UgYXRcbiAgICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGFzKSkge1xuICAgICAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZVN0YXJ0JywgYXMpXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgICB0aGlzLnNjcm9sbFRvSGFzaChhcylcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSlcbiAgICAgIH1cblxuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcXVlcnksIHByb3RvY29sIH0gPSBwYXJzZSh1cmwsIHRydWUpXG5cbiAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpXG4gICAgICB9XG5cbiAgICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXG4gICAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXG4gICAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgICBpZiAoIXRoaXMudXJsSXNOZXcoYXMpKSB7XG4gICAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlID0gdG9Sb3V0ZShwYXRobmFtZSlcbiAgICAgIGNvbnN0IHsgc2hhbGxvdyA9IGZhbHNlIH0gPSBvcHRpb25zXG5cbiAgICAgIGlmIChpc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcbiAgICAgICAgY29uc3QgeyBwYXRobmFtZTogYXNQYXRobmFtZSB9ID0gcGFyc2UoYXMpXG4gICAgICAgIGNvbnN0IHJvdXRlUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICAgICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKFxuICAgICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgICAgKVxuXG4gICAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgIGBNaXNtYXRjaGluZyBcXGBhc1xcYCBhbmQgXFxgaHJlZlxcYCBmYWlsZWQgdG8gbWFudWFsbHkgcHJvdmlkZSBgICtcbiAgICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICAgKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGBcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmVqZWN0KFxuICAgICAgICAgICAgICBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCArXG4gICAgICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvaW5jb21wYXRpYmxlLWhyZWYtYXNgXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgICAvLyBJZiBzaGFsbG93IGlzIHRydWUgYW5kIHRoZSByb3V0ZSBleGlzdHMgaW4gdGhlIHJvdXRlciBjYWNoZSB3ZSByZXVzZSB0aGUgcHJldmlvdXMgcmVzdWx0XG4gICAgICB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgc2hhbGxvdykudGhlbihcbiAgICAgICAgKHJvdXRlSW5mbykgPT4ge1xuICAgICAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IHJvdXRlSW5mb1xuXG4gICAgICAgICAgaWYgKGVycm9yICYmIGVycm9yLmNhbmNlbGxlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc29sdmUoZmFsc2UpXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpXG4gICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpXG5cbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICAgICAgOyh3aW5kb3cgYXMgYW55KS5uZXh0LmlzUHJlcmVuZGVyZWQgPVxuICAgICAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZUluZm8pXG5cbiAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBhcylcbiAgICAgICAgICAgIHRocm93IGVycm9yXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUodHJ1ZSlcbiAgICAgICAgfSxcbiAgICAgICAgcmVqZWN0XG4gICAgICApXG4gICAgfSlcbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICB9LFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFByb21pc2U8Um91dGVJbmZvPiB7XG4gICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgLy8gSWYgdGhlcmUgaXMgYSBzaGFsbG93IHJvdXRlIHRyYW5zaXRpb24gcG9zc2libGVcbiAgICAvLyBJZiB0aGUgcm91dGUgaXMgYWxyZWFkeSByZW5kZXJlZCBvbiB0aGUgc2NyZWVuLlxuICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjYWNoZWRSb3V0ZUluZm8pXG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlRXJyb3IgPSAoXG4gICAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgICApID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICBpZiAoZXJyLmNvZGUgPT09ICdQQUdFX0xPQURfRVJST1InIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgICAgIC8vIFNvLCB3ZSBuZWVkIHRvIG1hcmsgaXQgYXMgYSBjYW5jZWxsZWQgZXJyb3IgYW5kIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgICAvLyBAdHMtaWdub3JlIFRPRE86IGZpeCB0aGUgY29udHJvbCBmbG93IGhlcmVcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh7IGVycm9yOiBlcnIgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIH1cblxuICAgICAgICByZXNvbHZlKFxuICAgICAgICAgIHRoaXMuZmV0Y2hDb21wb25lbnQoJy9fZXJyb3InKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IHBhZ2U6IENvbXBvbmVudCB9ID0gcmVzXG4gICAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbzogUm91dGVJbmZvID0geyBDb21wb25lbnQsIGVyciB9XG4gICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICB9IGFzIGFueSkudGhlbihcbiAgICAgICAgICAgICAgICAgIChwcm9wcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgKGdpcEVycikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLFxuICAgICAgICAgICAgICAgICAgICAgIGdpcEVyclxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5lcnJvciA9IGVyclxuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJvdXRlSW5mbylcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pIGFzIFByb21pc2U8Um91dGVJbmZvPlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiBoYW5kbGVFcnJvcihlcnIsIHRydWUpKVxuICAgICAgICApXG4gICAgICB9KSBhcyBQcm9taXNlPFJvdXRlSW5mbz5cbiAgICB9XG5cbiAgICByZXR1cm4gKG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGlmIChjYWNoZWRSb3V0ZUluZm8pIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmUoY2FjaGVkUm91dGVJbmZvKVxuICAgICAgfVxuXG4gICAgICB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKFxuICAgICAgICAocmVzKSA9PlxuICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSxcbiAgICAgICAgcmVqZWN0XG4gICAgICApXG4gICAgfSkgYXMgUHJvbWlzZTxSb3V0ZUluZm8+KVxuICAgICAgLnRoZW4oKHJvdXRlSW5mbzogUm91dGVJbmZvKSA9PiB7XG4gICAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2dldERhdGE8Um91dGVJbmZvPigoKSA9PlxuICAgICAgICAgIF9fTl9TU0dcbiAgICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShhcylcbiAgICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGFzKVxuICAgICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgICApXG4gICAgICAgICkudGhlbigocHJvcHMpID0+IHtcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGhhbmRsZUVycm9yKVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUm91dGVJbmZvXG4gICk6IHZvaWQge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3QgeyBwYXRobmFtZSwgcHJvdG9jb2wgfSA9IHBhcnNlKHVybClcblxuICAgICAgaWYgKCFwYXRobmFtZSB8fCBwcm90b2NvbCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIHJvdXRlcjogJHt1cmx9IGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9pbnZhbGlkLWhyZWYtcGFzc2VkYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBjb25zdCByb3V0ZSA9IGRlbEJhc2VQYXRoKHRvUm91dGUocGF0aG5hbWUpKVxuICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKHVybCwgZGVsQmFzZVBhdGgoYXNQYXRoKSksXG4gICAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICAgIF0pLnRoZW4oKCkgPT4gcmVzb2x2ZSgpLCByZWplY3QpXG4gICAgfSlcbiAgfVxuXG4gIGFzeW5jIGZldGNoQ29tcG9uZW50KHJvdXRlOiBzdHJpbmcpOiBQcm9taXNlPENvbXBvbmVudFJlcz4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuICAgIHJvdXRlID0gZGVsQmFzZVBhdGgocm91dGUpXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEgPSAoYXNQYXRoOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4gPT4ge1xuICAgIGNvbnN0IHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHBhcnNlKGFzUGF0aCkucGF0aG5hbWUhKVxuXG4gICAgcmV0dXJuIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbcGF0aG5hbWVdXG4gICAgICA/IFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1twYXRobmFtZV0pXG4gICAgICA6IGZldGNoTmV4dERhdGEoXG4gICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgICB0aGlzLmlzU3NyLFxuICAgICAgICAgIChkYXRhKSA9PiAodGhpcy5zZGNbcGF0aG5hbWVdID0gZGF0YSlcbiAgICAgICAgKVxuICB9XG5cbiAgX2dldFNlcnZlckRhdGEgPSAoYXNQYXRoOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4gPT4ge1xuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2UoYXNQYXRoLCB0cnVlKVxuICAgIHBhdGhuYW1lID0gcHJlcGFyZVJvdXRlKHBhdGhuYW1lISlcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShwYXRobmFtZSwgcXVlcnksIHRoaXMuaXNTc3IpXG4gIH1cblxuICBnZXRJbml0aWFsUHJvcHMoXG4gICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlLFxuICAgIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gICk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcCB9ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddXG4gICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwKVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIGNvbnN0IGUgPSBuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpXG4gICAgICA7KGUgYXMgYW55KS5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlLCBhcylcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShkYXRhOiBSb3V0ZUluZm8pOiB2b2lkIHtcbiAgICB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3JvdXRlLXJlZ2V4J1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXg6IFJldHVyblR5cGU8dHlwZW9mIGdldFJvdXRlUmVnZXg+KSB7XG4gIGNvbnN0IHsgcmUsIGdyb3VwcyB9ID0gcm91dGVSZWdleFxuICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkKSA9PiB7XG4gICAgY29uc3Qgcm91dGVNYXRjaCA9IHJlLmV4ZWMocGF0aG5hbWUhKVxuICAgIGlmICghcm91dGVNYXRjaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgY29uc3QgZGVjb2RlID0gKHBhcmFtOiBzdHJpbmcpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocGFyYW0pXG4gICAgICB9IGNhdGNoIChfKSB7XG4gICAgICAgIGNvbnN0IGVycjogRXJyb3IgJiB7IGNvZGU/OiBzdHJpbmcgfSA9IG5ldyBFcnJvcihcbiAgICAgICAgICAnZmFpbGVkIHRvIGRlY29kZSBwYXJhbSdcbiAgICAgICAgKVxuICAgICAgICBlcnIuY29kZSA9ICdERUNPREVfRkFJTEVEJ1xuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgcGFyYW1zOiB7IFtwYXJhbU5hbWU6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdIH0gPSB7fVxuXG4gICAgT2JqZWN0LmtleXMoZ3JvdXBzKS5mb3JFYWNoKChzbHVnTmFtZTogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCBnID0gZ3JvdXBzW3NsdWdOYW1lXVxuICAgICAgY29uc3QgbSA9IHJvdXRlTWF0Y2hbZy5wb3NdXG4gICAgICBpZiAobSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmFtc1tzbHVnTmFtZV0gPSB+bS5pbmRleE9mKCcvJylcbiAgICAgICAgICA/IG0uc3BsaXQoJy8nKS5tYXAoKGVudHJ5KSA9PiBkZWNvZGUoZW50cnkpKVxuICAgICAgICAgIDogZy5yZXBlYXRcbiAgICAgICAgICA/IFtkZWNvZGUobSldXG4gICAgICAgICAgOiBkZWNvZGUobSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBwYXJhbXNcbiAgfVxufVxuIiwiLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogeyBwb3M6IG51bWJlcjsgcmVwZWF0OiBib29sZWFuIH0gfVxufSB7XG4gIC8vIEVzY2FwZSBhbGwgY2hhcmFjdGVycyB0aGF0IGNvdWxkIGJlIGNvbnNpZGVyZWQgUmVnRXhcbiAgY29uc3QgZXNjYXBlZFJvdXRlID0gZXNjYXBlUmVnZXgobm9ybWFsaXplZFJvdXRlLnJlcGxhY2UoL1xcLyQvLCAnJykgfHwgJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiB7IHBvczogbnVtYmVyOyByZXBlYXQ6IGJvb2xlYW4gfSB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG5cbiAgY29uc3QgcGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoXG4gICAgL1xcL1xcXFxcXFsoW14vXSs/KVxcXFxcXF0oPz1cXC98JCkvZyxcbiAgICAoXywgJDEpID0+IHtcbiAgICAgIGNvbnN0IGlzT3B0aW9uYWwgPSAvXlxcXFxcXFsuKlxcXFxcXF0kLy50ZXN0KCQxKVxuICAgICAgaWYgKGlzT3B0aW9uYWwpIHtcbiAgICAgICAgJDEgPSAkMS5zbGljZSgyLCAtMilcbiAgICAgIH1cbiAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSlcbiAgICAgIGlmIChpc0NhdGNoQWxsKSB7XG4gICAgICAgICQxID0gJDEuc2xpY2UoNilcbiAgICAgIH1cbiAgICAgIGdyb3Vwc1tcbiAgICAgICAgJDFcbiAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlcXVlbmNlc1xuICAgICAgXSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdDogaXNDYXRjaEFsbCB9XG4gICAgICByZXR1cm4gaXNDYXRjaEFsbCA/IChpc09wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgfVxuICApXG5cbiAgbGV0IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAvLyBkZWFkIGNvZGUgZWxpbWluYXRlIGZvciBicm93c2VyIHNpbmNlIGl0J3Mgb25seSBuZWVkZWRcbiAgLy8gd2hpbGUgZ2VuZXJhdGluZyByb3V0ZXMtbWFuaWZlc3RcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBlc2NhcGVkUm91dGUucmVwbGFjZShcbiAgICAgIC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csXG4gICAgICAoXywgJDEpID0+IHtcbiAgICAgICAgY29uc3QgaXNDYXRjaEFsbCA9IC9eKFxcXFxcXC4pezN9Ly50ZXN0KCQxKVxuICAgICAgICBjb25zdCBrZXkgPSAkMVxuICAgICAgICAgIC8vIFVuLWVzY2FwZSBrZXlcbiAgICAgICAgICAucmVwbGFjZSgvXFxcXChbfFxcXFx7fSgpW1xcXV4kKyo/Li1dKS9nLCAnJDEnKVxuICAgICAgICAgIC5yZXBsYWNlKC9eXFwuezN9LywgJycpXG5cbiAgICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGxcbiAgICAgICAgICA/IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT4uKz8pYFxuICAgICAgICAgIDogYC8oPzwke2VzY2FwZVJlZ2V4KGtleSl9PlteL10rPylgXG4gICAgICB9XG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIHtcbiAgICByZTogbmV3IFJlZ0V4cCgnXicgKyBwYXJhbWV0ZXJpemVkUm91dGUgKyAnKD86Lyk/JCcsICdpJyksXG4gICAgZ3JvdXBzLFxuICAgIG5hbWVkUmVnZXg6IG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlXG4gICAgICA/IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYFxuICAgICAgOiB1bmRlZmluZWQsXG4gIH1cbn1cbiIsImltcG9ydCB7IEluY29taW5nTWVzc2FnZSwgU2VydmVyUmVzcG9uc2UgfSBmcm9tICdodHRwJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IGZvcm1hdCwgVVJMRm9ybWF0T3B0aW9ucywgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICcuLi8uLi9saWIvbG9hZC1lbnYtY29uZmlnJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuZXhwb3J0IHR5cGUgRW5oYW5jZXI8Qz4gPSAoQ29tcG9uZW50OiBDKSA9PiBDXG5cbmV4cG9ydCB0eXBlIENvbXBvbmVudHNFbmhhbmNlciA9XG4gIHwge1xuICAgICAgZW5oYW5jZUFwcD86IEVuaGFuY2VyPEFwcFR5cGU+XG4gICAgICBlbmhhbmNlQ29tcG9uZW50PzogRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG4gICAgfVxuICB8IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlUmVzdWx0ID0ge1xuICBodG1sOiBzdHJpbmdcbiAgaGVhZD86IEFycmF5PEpTWC5FbGVtZW50IHwgbnVsbD5cbn1cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZSA9IChcbiAgb3B0aW9ucz86IENvbXBvbmVudHNFbmhhbmNlclxuKSA9PiBSZW5kZXJQYWdlUmVzdWx0IHwgUHJvbWlzZTxSZW5kZXJQYWdlUmVzdWx0PlxuXG5leHBvcnQgdHlwZSBCYXNlQ29udGV4dCA9IHtcbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgW2s6IHN0cmluZ106IGFueVxufVxuXG5leHBvcnQgdHlwZSBORVhUX0RBVEEgPSB7XG4gIHByb3BzOiBhbnlcbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBpbnRlcmZhY2UtbmFtZVxuZXhwb3J0IGludGVyZmFjZSBOZXh0UGFnZUNvbnRleHQge1xuICAvKipcbiAgICogRXJyb3Igb2JqZWN0IGlmIGVuY291bnRlcmVkIGR1cmluZyByZW5kZXJpbmdcbiAgICovXG4gIGVycj86IChFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9KSB8IG51bGxcbiAgLyoqXG4gICAqIGBIVFRQYCByZXF1ZXN0IG9iamVjdC5cbiAgICovXG4gIHJlcT86IEluY29taW5nTWVzc2FnZVxuICAvKipcbiAgICogYEhUVFBgIHJlc3BvbnNlIG9iamVjdC5cbiAgICovXG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIC8qKlxuICAgKiBQYXRoIHNlY3Rpb24gb2YgYFVSTGAuXG4gICAqL1xuICBwYXRobmFtZTogc3RyaW5nXG4gIC8qKlxuICAgKiBRdWVyeSBzdHJpbmcgc2VjdGlvbiBvZiBgVVJMYCBwYXJzZWQgYXMgYW4gb2JqZWN0LlxuICAgKi9cbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIC8qKlxuICAgKiBgU3RyaW5nYCBvZiB0aGUgYWN0dWFsIHBhdGggaW5jbHVkaW5nIHF1ZXJ5LlxuICAgKi9cbiAgYXNQYXRoPzogc3RyaW5nXG4gIC8qKlxuICAgKiBgQ29tcG9uZW50YCB0aGUgdHJlZSBvZiB0aGUgQXBwIHRvIHVzZSBpZiBuZWVkaW5nIHRvIHJlbmRlciBzZXBhcmF0ZWx5XG4gICAqL1xuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxufVxuXG5leHBvcnQgdHlwZSBBcHBDb250ZXh0VHlwZTxSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXI+ID0ge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dD5cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbiAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgcm91dGVyOiBSXG59XG5cbmV4cG9ydCB0eXBlIEFwcEluaXRpYWxQcm9wcyA9IHtcbiAgcGFnZVByb3BzOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHNUeXBlPFxuICBSIGV4dGVuZHMgTmV4dFJvdXRlciA9IE5leHRSb3V0ZXIsXG4gIFAgPSB7fVxuPiA9IEFwcEluaXRpYWxQcm9wcyAmIHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQsIGFueSwgUD5cbiAgcm91dGVyOiBSXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50Q29udGV4dCA9IE5leHRQYWdlQ29udGV4dCAmIHtcbiAgcmVuZGVyUGFnZTogUmVuZGVyUGFnZVxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudEluaXRpYWxQcm9wcyA9IFJlbmRlclBhZ2VSZXN1bHQgJiB7XG4gIHN0eWxlcz86IFJlYWN0LlJlYWN0RWxlbWVudFtdIHwgUmVhY3QuUmVhY3RGcmFnbWVudFxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudFByb3BzID0gRG9jdW1lbnRJbml0aWFsUHJvcHMgJiB7XG4gIF9fTkVYVF9EQVRBX186IE5FWFRfREFUQVxuICBkYW5nZXJvdXNBc1BhdGg6IHN0cmluZ1xuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBzdGF0aWNNYXJrdXA6IGJvb2xlYW5cbiAgaXNEZXZlbG9wbWVudDogYm9vbGVhblxuICBkZXZGaWxlczogc3RyaW5nW11cbiAgZmlsZXM6IHN0cmluZ1tdXG4gIGxvd1ByaW9yaXR5RmlsZXM6IHN0cmluZ1tdXG4gIHBvbHlmaWxsRmlsZXM6IHN0cmluZ1tdXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaHRtbFByb3BzOiBhbnlcbiAgYm9keVRhZ3M6IGFueVtdXG4gIGhlYWRUYWdzOiBhbnlbXVxuICB1bnN0YWJsZV9ydW50aW1lSlM/OiBmYWxzZVxufVxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVxdWVzdFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRBcGlSZXF1ZXN0IGV4dGVuZHMgSW5jb21pbmdNZXNzYWdlIHtcbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgcXVlcnlgIHZhbHVlcyBmcm9tIHVybFxuICAgKi9cbiAgcXVlcnk6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXVxuICB9XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYGNvb2tpZXNgIGZyb20gaGVhZGVyXG4gICAqL1xuICBjb29raWVzOiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXG4gIH1cblxuICBib2R5OiBhbnlcblxuICBlbnY6IEVudlxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2VtcHR5LW9iamVjdC1nZXRJbml0aWFsUHJvcHNgXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHByb3BzXG59XG5cbmV4cG9ydCBjb25zdCB1cmxPYmplY3RLZXlzID0gW1xuICAnYXV0aCcsXG4gICdoYXNoJyxcbiAgJ2hvc3QnLFxuICAnaG9zdG5hbWUnLFxuICAnaHJlZicsXG4gICdwYXRoJyxcbiAgJ3BhdGhuYW1lJyxcbiAgJ3BvcnQnLFxuICAncHJvdG9jb2wnLFxuICAncXVlcnknLFxuICAnc2VhcmNoJyxcbiAgJ3NsYXNoZXMnLFxuXVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gIHVybDogVXJsT2JqZWN0LFxuICBvcHRpb25zPzogVVJMRm9ybWF0T3B0aW9uc1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXQodXJsIGFzIFVSTCwgb3B0aW9ucylcbn1cblxuZXhwb3J0IGNvbnN0IFNQID0gdHlwZW9mIHBlcmZvcm1hbmNlICE9PSAndW5kZWZpbmVkJ1xuZXhwb3J0IGNvbnN0IFNUID1cbiAgU1AgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1hcmsgPT09ICdmdW5jdGlvbicgJiZcbiAgdHlwZW9mIHBlcmZvcm1hbmNlLm1lYXN1cmUgPT09ICdmdW5jdGlvbidcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsImltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvbmF2aWdhdGlvbic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInO1xyXG5pbXBvcnQgTGFuZGluZ2NvbnRlbnQgZnJvbSAnLi4vY29tcG9uZW50cy9sYW5kaW5nY29udGVudCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBEYXNoYm9hcmRoZWFkaW5nIGZyb20gJy4uL2NvbXBvbmVudHMvRGFzaGJvYXJkL2Rhc2hib2FyZGhlYWRpbmcnO1xyXG5pbXBvcnQgRGFzaGJvYXJkY29udGVudCBmcm9tICcuLi9jb21wb25lbnRzL0Rhc2hib2FyZC9kYXNoYm9hcmRjb250ZW50JztcclxuXHJcbmNvbnN0IEluZGV4ID0oKSA9PiAoXHJcbjxkaXY+XHJcbjxIZWFkPlxyXG48dGl0bGU+TWFpbiBQYWdlIDwvdGl0bGU+XHJcbjxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiLy9jZG4uanNkZWxpdnIubmV0L25wbS9zZW1hbnRpYy11aUAyLjQuMi9kaXN0L3NlbWFudGljLm1pbi5jc3NcIiAvPlxyXG48L0hlYWQ+XHJcbjxtYWluPlxyXG48TmF2aWdhdGlvbi8+IFxyXG5cclxuPExhbmRpbmdjb250ZW50Lz5cclxuXHJcbjxGb290ZXIvPlxyXG5cclxuPC9tYWluPlxyXG48L2Rpdj5cclxuXHQpXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJoaWdoY2hhcnRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImhpZ2hjaGFydHMtcmVhY3Qtb2ZmaWNpYWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlcy1leGFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZW1hbnRpYy11aS1yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVybFwiKTsiXSwic291cmNlUm9vdCI6IiJ9