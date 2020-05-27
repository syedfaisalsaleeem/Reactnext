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
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! highcharts/modules/exporting */ "highcharts/modules/exporting");
/* harmony import */ var highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var highcharts_react_official__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! highcharts-react-official */ "highcharts-react-official");
/* harmony import */ var highcharts_react_official__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(highcharts_react_official__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "E:\\reactnext\\components\\Dashboard\\linechart1.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





if (typeof highcharts__WEBPACK_IMPORTED_MODULE_1___default.a === 'object') {
  highcharts_modules_exporting__WEBPACK_IMPORTED_MODULE_2___default()(highcharts__WEBPACK_IMPORTED_MODULE_1___default.a);
}

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
        lineNumber: 76,
        columnNumber: 9
      }
    }, __jsx(highcharts_react_official__WEBPACK_IMPORTED_MODULE_3___default.a, {
      highcharts: highcharts__WEBPACK_IMPORTED_MODULE_1___default.a,
      options: options,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
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

/***/ "highcharts/modules/exporting":
/*!***********************************************!*\
  !*** external "highcharts/modules/exporting" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("highcharts/modules/exporting");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Rhc2hib2FyZC9jeWJlcmV4cG9zdXJlc2NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EYXNoYm9hcmQvZGFzaGJvYXJkY29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0Rhc2hib2FyZC9kYXNoYm9hcmRoZWFkaW5nLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGFzaGJvYXJkL2V4cG9zdXJldHJlbmRzLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRGFzaGJvYXJkL2xpbmVjaGFydDEuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9EYXNoYm9hcmQvcHJvZ3Jlc3NiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9hc3NldHMuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9sYW5kaW5nY29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL25hdmlnYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9taXR0LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImhpZ2hjaGFydHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJoaWdoY2hhcnRzLXJlYWN0LW9mZmljaWFsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaGlnaGNoYXJ0cy9tb2R1bGVzL2V4cG9ydGluZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInByb3AtdHlwZXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzLWV4YWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNlbWFudGljLXVpLXJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zdHlsZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInVybFwiIl0sIm5hbWVzIjpbIkN5YmVyRXhwb3N1cmVTY29yZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImNoYXIiLCJzdGF0ZSIsInRoZXZhbHVlIiwiY29uc29sZSIsImxvZyIsInNldFN0YXRlIiwiY2FsY3VsYXRlIiwiU3RyaW5nIiwiY29uY2F0IiwiY291bnQiLCJtaW52YWx1ZSIsImluY3JlbWVudCIsImJpbmQiLCJjb21wb25lbnREaWRNb3VudCIsInRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImNsZWFyVGltZW91dCIsInJlbmRlciIsImRpc3BsYXkiLCJEYXNoYm9hcmRjb250ZW50IiwiRGFzaGJvYXJkaGVhZGluZyIsIkV4cG9zdXJldHJlbmRzIiwiSGlnaGNoYXJ0cyIsIkhpZ2hjaGFydHNFeHBvcnRpbmciLCJvcHRpb25zIiwiY2hhcnQiLCJ0eXBlIiwiYmFja2dyb3VuZENvbG9yIiwidGl0bGUiLCJ0ZXh0IiwieUF4aXMiLCJ4QXhpcyIsImRhdGVUaW1lTGFiZWxGb3JtYXRzIiwiZGF5Iiwic2VyaWVzIiwibmFtZSIsImRhdGEiLCJwb2ludFN0YXJ0IiwiRGF0ZSIsIlVUQyIsInBvaW50SW50ZXJ2YWwiLCJjb2xvciIsImRhdGFMYWJlbHMiLCJlbmFibGVkIiwiYWxpZ24iLCJ4IiwieSIsInN0eWxlIiwiZm9udFNpemUiLCJmb250RmFtaWx5IiwiTGluZUNoYXJ0MSIsIlByb2dyZXNzYmFyIiwibnVtYmVyQ29tcGxldGUiLCJ3aWR0aCIsInZhbHVlcyIsIkFzc2V0cyIsInR3b2Z1bmN0aW9uc28xIiwiYmFja2Ryb3BDbGlja0hhbmRsZXIiLCJ0d29mdW5jdGlvbnNmMSIsImNhbGwiLCJjIiwiRm9vdGVyIiwiTGFuZGluZ2NvbnRlbnQiLCJOYXZpZ2F0aW9uIiwicHJldlN0YXRlIiwic2hvdyIsInNob3dhIiwic2hvd2IiLCJzaG93YyIsImJhY2tkcm9wQ2xpY2tIYW5kbGVydCIsImJhY2tkcm9wQ2xpY2tIYW5kbGVyZiIsImJhY2tkcm9wQ2xpY2tIYW5kbGVyMXQiLCJiYWNrZHJvcENsaWNrSGFuZGxlcjFmIiwidHdvZnVuY3Rpb25zbyIsInR3b2Z1bmN0aW9uc2YiLCJiYWNrZHJvcENsaWNrSGFuZGxlcjIiLCJiYWNrZHJvcENsaWNrSGFuZGxlcjMiLCJ1cmwiLCJvcmlnaW4iLCJsYXN0SHJlZiIsImxhc3RBcyIsImxhc3RSZXN1bHQiLCJocmVmIiwiYXMiLCJyZXN1bHQiLCJmb3JtYXRGdW5jIiwibGlzdGVuZXJzIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJ3aW5kb3ciLCJwcmVmZXRjaGVkIiwib2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJjYiIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJnZXRPYnNlcnZlciIsInAiLCJtZW1vaXplZEZvcm1hdFVybCIsImZvcm1hdFVybCIsImFzSHJlZiIsImUiLCJub2RlTmFtZSIsInRhcmdldCIsImlzTG9jYWwiLCJzY3JvbGwiLCJSb3V0ZXIiLCJzaGFsbG93Iiwic3VjY2VzcyIsImRvY3VtZW50IiwiZ2V0UGF0aHMiLCJyZXNvbHZlZEhyZWYiLCJwYXJzZWRBcyIsImhhbmRsZVJlZiIsInJlZiIsImlzUHJlZmV0Y2hlZCIsInByZWZldGNoIiwicGF0aHMiLCJlcnIiLCJjaGlsZHJlbiIsImNoaWxkIiwiQ2hpbGRyZW4iLCJlbCIsIm9uTW91c2VFbnRlciIsInByaW9yaXR5Iiwib25DbGljayIsInByb2Nlc3MiLCJ3YXJuIiwiUHJvcFR5cGVzIiwicmVxdWlyZSIsImV4YWN0IiwiTGluayIsInJlcGxhY2UiLCJwYXNzSHJlZiIsInZhbHVlIiwic2luZ2xldG9uUm91dGVyIiwicm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsIk9iamVjdCIsImdldCIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnQiLCJldmVudEZpZWxkIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiYWxsIiwib24iLCJvZmYiLCJlbWl0IiwiaGFuZGxlciIsImJhc2VQYXRoIiwicGF0aCIsInByZXBhcmVSb3V0ZSIsInRvUm91dGUiLCJhdHRlbXB0cyIsImlzU2VydmVyUmVuZGVyIiwicGF0aG5hbWUiLCJhZGRCYXNlUGF0aCIsIl9fTkVYVF9EQVRBX18iLCJidWlsZElkIiwiZGVsQmFzZVBhdGgiLCJjcmVkZW50aWFscyIsInJlcyIsImdldFJlc3BvbnNlIiwicm91dGUiLCJxdWVyeSIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiUHJvbWlzZSIsImZldGNoTmV4dERhdGEiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsInVwZGF0ZSIsIm1vZCIsIm5ld0RhdGEiLCJyZWxvYWQiLCJiYWNrIiwicHVzaCIsImNoYW5nZSIsIlNUIiwicGVyZm9ybWFuY2UiLCJyZXNvbHZlIiwibWV0aG9kIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJtaXNzaW5nUGFyYW1zIiwicGFyYW0iLCJyZWplY3QiLCJhc1BhdGhuYW1lIiwicm91dGVJbmZvIiwiZXJyb3IiLCJhcHBDb21wIiwiY2hhbmdlU3RhdGUiLCJnZXRSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJoYW5kbGVFcnJvciIsInBhZ2UiLCJnaXBFcnIiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsImNhbmNlbGxlZCIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiZm4iLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5IiwiVEVTVF9ST1VURSIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50IiwicGFyYW1zIiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsImVzY2FwZWRSb3V0ZSIsImVzY2FwZVJlZ2V4Iiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsImlzT3B0aW9uYWwiLCIkMSIsImlzQ2F0Y2hBbGwiLCJwb3MiLCJyZXBlYXQiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImtleSIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicHJvdG9jb2wiLCJob3N0bmFtZSIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsIkluZGV4Il0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFF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QSwwQ0FBZSxRQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQztBQUFBLDBDQUFlLElBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUFILENBREEsRUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMENBRkEsRUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFIQSxDQURELEVBTUM7QUFBQSwwQ0FBZSxJQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBSCxDQURBLEVBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQUZBLENBTkQsRUFVQztBQUFBLDBDQUFlLElBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUFILENBREEsRUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBRkEsQ0FWRCxFQWNDO0FBQUEsMENBQWUsSUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQUgsQ0FEQSxFQUVBO0FBQUE7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c3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXGluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDMpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFByb2dyZXNzYmFyIGZyb20gXCIuL3Byb2dyZXNzYmFyXCJcclxuXHJcblxyXG5cclxuY2xhc3MgQ3liZXJFeHBvc3VyZVNjb3JlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMpe1xyXG4gICAgICAgIHN1cGVyKClcclxuICAgICAgICB0aGlzLnN0YXRlPXtcclxuICAgICAgICAgICAgY291bnQ6MCxcclxuICAgICAgICAgICAgY2FsY3VsYXRlOjAsXHJcbiAgICAgICAgICAgIG1pbnZhbHVlOjAsXHJcbiAgICAgICAgICAgIGluY3JlbWVudDowLFxyXG4gICAgICAgICAgICB0aGV2YWx1ZToxMjBcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY2FsY3VsYXRlPXRoaXMuY2FsY3VsYXRlLmJpbmQodGhpcylcclxuICAgIFxyXG4gICAgfVxyXG4gICAgY2FsY3VsYXRlID0gKCk9PntcclxuICAgICAgICBsZXQgY2hhcjtcclxuICAgICAgICBjaGFyPSh0aGlzLnN0YXRlLnRoZXZhbHVlLzMwMCkqMTAwO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGNoYXIsXCJjaGFyXCIpXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y2FsY3VsYXRlOlN0cmluZyhjaGFyKS5jb25jYXQoXCIlXCIpfSlcclxuXHJcbiAgICB9XHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIHRoaXMuY2FsY3VsYXRlKClcclxuICAgICAgICB0aGlzLnRpbWVvdXQ9c2V0VGltZW91dCgoKT0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7Y291bnQ6dGhpcy5zdGF0ZS5jYWxjdWxhdGUsbWludmFsdWU6dGhpcy5zdGF0ZS50aGV2YWx1ZX1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICB9LDEwMDApO1xyXG4gICAgICAgIHRoaXMuaW50ZXJ2YWw9c2V0SW50ZXJ2YWwoKCk9PntcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7aW5jcmVtZW50OnRoaXMuc3RhdGUuaW5jcmVtZW50KzF9KVxyXG4gICAgICAgICAgICBpZih0aGlzLnN0YXRlLmluY3JlbWVudD09PXRoaXMuc3RhdGUudGhldmFsdWUpe1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sMTApO1xyXG5cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpe1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxucmVuZGVyKCl7XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VzXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VzMVwiPlxyXG4gICAgICAgICAgICAgICAgPHA+IEN5YmVyIEV4cG9zdXJlIFNjb3JlPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZXMyXCI+XHJcbiAgICAgICAgICAgICAgICA8cD48c21hbGw+XHJcbiAgICAgICAgICAgICAgICBDb21wYW5pZXMgYXJlIGdpdmVuIGV4cG9zdXJlIHNjb3JlIGJhc2VkIG9uIGlkZW50aWZpZWQgcmlza1xyXG4gICAgICAgICAgICAgICAgZGl2aWRlZCBieSBlbXBsb3llZSBjb3VudCBvbiBsYXN0IDEyIG1vbnRocy4gU2NvcmUgcmFuZ2VzIGZyb20gMFxyXG4gICAgICAgICAgICAgICAgdG8gMzAwKy5Db21wYW5pZXMgd2l0aCBubyBleHBvc3VyZSBkdXJpbmcgdGhlIHBhc3QgMTIgbW9udGhzIGhhdmUgc2NvcmUgMC5cclxuICAgICAgICAgICAgICAgIENvbXBhbmllcyB0aGF0IGhhdmUgc2NvcmUgMzAwKyByZXByZXNlbnQgdGhlIHRvcCAxMCUgbW9zdCBleHBvc2VkIENvbXBhbmllcy5cclxuICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlczNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VzMzFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgc3R5bGU9e3tkaXNwbGF5OlwiYmxvY2tcIn19PiB7dGhpcy5zdGF0ZS5pbmNyZW1lbnR9PC9oMT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZXMzMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPi8zMDA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlczRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VzNDJcIj5cclxuICAgICAgICAgICAgICAgIDxQcm9ncmVzc2JhciB2YWx1ZXM9e3RoaXMuc3RhdGUuY291bnR9Lz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZXM0MVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VzNDExXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPjxzbWFsbD4wPC9zbWFsbD48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZXM0MTJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cD48c21hbGw+MzAwPC9zbWFsbD48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5jZXM0MTF7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgd2lkdGg6NTAlO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczpmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtcclxuICAgICAgICAgICAgYm9yZGVyLWxlZnQ6MXB4IHNvbGlkIGdyYXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jZXM0MTJ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgd2lkdGg6NTAlO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczpmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7XHJcbiAgICAgICAgICAgIGJvcmRlci1yaWdodDoxcHggc29saWQgZ3JheTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNlczQye1xyXG4gICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgIGhlaWdodDo1MCU7XHJcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAuY2VzNDF7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNlc3tcclxuICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDo1JTtcclxuICAgICAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgICAgIHdpZHRoOjkwJTtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OnNwYWNlLWV2ZW5seTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNlczF7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6ZmxleC1zdGFydDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6MTAlO1xyXG4gICAgICAgICAgICBvdmVyLWZsb3c6YXV0bztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jZXMye1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6MjAlO1xyXG4gICAgICAgICAgICBvdmVyLWZsb3c6YXV0bztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jZXMze1xyXG4gICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOnJvdztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGhlaWdodDoyMCU7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1ldmVubHk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAuY2VzMzF7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgaGVpZ2h0OjkwJTtcclxuICAgICAgICAgICAgd2lkdGg6NDklO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpmbGV4LWVuZDtcclxuICAgICAgICAgICAgZm9udC1zaXplOjMxcHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOjMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jZXMzMntcclxuICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICB3aWR0aDo0OSU7XHJcbiAgICAgICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICBmb250LXNpemU6MjVweDtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6MzRweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNlczR7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczpmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1zdGFydDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGhlaWdodDoyMCU7XHJcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNlczMxIGgxe1xyXG4gICAgICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IGRpc3BsYXkgMXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGB9XHJcblxyXG5cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG5cclxufVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBDeWJlckV4cG9zdXJlU2NvcmU7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgQ3liZXJFeHBvc3VyZVNjb3JlIGZyb20gXCIuL2N5YmVyZXhwb3N1cmVzY29yZVwiXHJcbmltcG9ydCBFeHBvc3VyZVRyZW5kcyBmcm9tIFwiLi9leHBvc3VyZXRyZW5kc1wiXHJcbmNsYXNzIERhc2hib2FyZGNvbnRlbnQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIoKVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5yZW5kZXIoKXtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdjFcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGl2MWluMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGMxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDeWJlckV4cG9zdXJlU2NvcmUvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGMyXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpdjFpbjJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFjMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxFeHBvc3VyZVRyZW5kcy8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGFjMlwiPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICA8c3R5bGU+e2BcclxuICAgICAgICAuZGl2MXtcclxuICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDo5NTBweDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OnNwYWNlLWV2ZW5seTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRpdjFpbjF7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246cm93O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgd2lkdGg6OTAlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6NDglO1xyXG4gICAgICAgICAgICBmbGV4LXdyYXA6d3JhcDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OnNwYWNlLWV2ZW5seTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kaXYxaW4ye1xyXG4gICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOnJvdztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDp3cmFwO1xyXG4gICAgICAgICAgICB3aWR0aDo5MCU7XHJcbiAgICAgICAgICAgIGhlaWdodDo0OCU7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1ldmVubHk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAuZGMxe1xyXG4gICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMC41cHggc29saWQgI2RkZGZlNjs7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMjBweCA2MHB4IDAgcmdiYSgxNjMsIDE3MSwgMTg2LCAwKTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDojRjlGOUY5O1xyXG4gICAgICAgICAgICB3aWR0aDo0OCU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLmRjMntcclxuICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDAuNXB4IHNvbGlkICNkZGRmZTY7O1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDIwcHggNjBweCAwIHJnYmEoMTYzLCAxNzEsIDE4NiwgMCk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6I0Y5RjlGOTtcclxuICAgICAgICAgICAgd2lkdGg6NDglO1xyXG4gICAgICAgICAgICBmbGV4LWJhc2lzOjQ4JTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAuZGFjMXtcclxuICAgICAgICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjZGRkZmU2OztcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAyMHB4IDYwcHggMCByZ2JhKDE2MywgMTcxLCAxODYsIDApO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiNGOUY5Rjk7XHJcbiAgICAgICAgICAgIHdpZHRoOjQ4JTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAuZGFjMntcclxuICAgICAgICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCAjZGRkZmU2OztcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAyMHB4IDYwcHggMCByZ2JhKDE2MywgMTcxLCAxODYsIDApO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiNGOUY5Rjk7XHJcbiAgICAgICAgICAgIHdpZHRoOjQ4JTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTUwMHB4KSB7XHJcbiAgICAgICAgICAgIC5kaXYxe1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjIwMDBweDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1ldmVubHk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRpdjFpbjF7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHdpZHRoOjkwJTtcclxuICAgICAgICAgICAgICAgIGhlaWdodDo0OCU7XHJcbiAgICAgICAgICAgICAgICBmbGV4LXdyYXA6d3JhcDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpzcGFjZS1ldmVubHk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZGMxe1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6NDglO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRjMntcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjQ4JTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5kaXYxaW4ye1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB3aWR0aDo5MCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6NDglO1xyXG4gICAgICAgICAgICAgICAgZmxleC13cmFwOndyYXA7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtZXZlbmx5O1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmRhYzF7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGhlaWdodDo0OCU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZGFjMntcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjQ4JTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIGB9XHJcblxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcblxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmRjb250ZW50OyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuY2xhc3MgRGFzaGJvYXJkaGVhZGluZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcigpXHJcblxyXG4gICAgfVxyXG5yZW5kZXIoKXtcclxuICAgIHJldHVybihcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkaW5nXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRpbmdpblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW4xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW4xMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+RGFzaGJvYXJkPC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW4xMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4gT3JnYW5pemF0aW9uIG5hbWU6IERlbW8gQWNjb3VudDxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBZb3VyIHByZXZpb3VzIGxvZ2luOiAyNi8wNS8yMDIwIGF0IDE2OjA0PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW4yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD4gPGI+PHNtYWxsPkRvd25sb2FkIGFzIFBERjwvc21hbGw+PC9iPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5tYWlue1xyXG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaGVhZGluZ3tcclxuICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOjE2MHB4O1xyXG4gICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaGVhZGluZ2lue1xyXG4gICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgIHdpZHRoOjg1JTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGhlaWdodDoyMDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmluMXtcclxuICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICB3aWR0aDo1MCU7XHJcbiAgICAgICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLmluMTJ7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaW4ye1xyXG4gICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgIHdpZHRoOjUwJTtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBoZWlnaHQ6MTAwJTtcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogMTQ0MHB4KSB7XHJcbiAgICAgICAgICAgIC5oZWFkaW5naW57XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICAgICAgICAgICAgICB3aWR0aDo5MCU7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGhlaWdodDozMDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaW4ye1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDpmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gICAgICAgICAgICAuaGVhZGluZ2lue1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6OTAlO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6MzUwcHg7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIGB9XHJcblxyXG4gICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcblxyXG5cclxuICAgIH1cclxuXHJcblxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmRoZWFkaW5nOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5lY2hhcnQxIGZyb20gXCIuL2xpbmVjaGFydDFcIlxyXG5jbGFzcyBFeHBvc3VyZXRyZW5kcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgc3VwZXIoKVxyXG4gICAgfVxyXG5cclxucmVuZGVyKCl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJldFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV0MVwiPlxyXG4gICAgICAgICAgICA8cD4gRVhQT1NVUkUgVFJFTkRTIChMQVNUIDI0IE1PTlRIUyk8L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV0MlwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmVjaGFydDEvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAuZXR7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGhlaWdodDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmV0MXtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6MTYlO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToxOHB4O1xyXG5cclxuICAgXHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuZXQye1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRXhwb3N1cmV0cmVuZHM7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgSGlnaGNoYXJ0cyBmcm9tICdoaWdoY2hhcnRzJ1xyXG5pbXBvcnQgSGlnaGNoYXJ0c0V4cG9ydGluZyBmcm9tICdoaWdoY2hhcnRzL21vZHVsZXMvZXhwb3J0aW5nJ1xyXG5pbXBvcnQgSGlnaGNoYXJ0c1JlYWN0IGZyb20gJ2hpZ2hjaGFydHMtcmVhY3Qtb2ZmaWNpYWwnXHJcblxyXG5pZiAodHlwZW9mIEhpZ2hjaGFydHMgPT09ICdvYmplY3QnKSB7XHJcbiAgICBIaWdoY2hhcnRzRXhwb3J0aW5nKEhpZ2hjaGFydHMpXHJcbn1cclxuY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgIFxyXG4gICAgY2hhcnQ6IHtcclxuICAgICAgICB0eXBlOiAnc3BsaW5lJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6XCIjRjlGOUY5XCIsXHJcbiAgICAgIH0sXHJcbiAgICB0aXRsZToge1xyXG4gICAgICB0ZXh0OiAnJ1xyXG4gICAgfSxcclxuICAgIHlBeGlzOntcclxuICAgICAgICB0aXRsZTpcIlwiXHJcbiAgICB9LFxyXG4gICAgeEF4aXM6IHtcclxuICAgICAgICB0eXBlOiAnZGF0ZXRpbWUnLFxyXG4gICAgICAgIGRhdGVUaW1lTGFiZWxGb3JtYXRzOiB7XHJcbiAgICAgICAgICAgIGRheTogJyViJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZXJpZXM6IFt7XHJcbiAgICAgICAgbmFtZTogJ0FsZXJ0cycsXHJcbiAgICAgICAgZGF0YTogWzksIDYsIDUsIDUsIDcsIDQsNCw0LDUsMjAsMTAsMTYsMTAsMTAsNywxLDcsNSwzLDQsMyw0LDUsNF0sXHJcbiAgICAgICAgcG9pbnRTdGFydDogRGF0ZS5VVEMoMjAxOSwgNCwgMSksXHJcbiAgICAgICAgcG9pbnRJbnRlcnZhbDogMjQgKjEyICogMzYwMCAqIDEwMDAsXHJcbiAgICAgICAgY29sb3I6J2dyZWVuJyxcclxuXHJcbiAgICAgICAgZGF0YUxhYmVsczoge1xyXG4gICAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbG9yOiAnI0ZGRkZGRicsXHJcbiAgICAgICAgICAgIGFsaWduOiAncmlnaHQnLFxyXG4gICAgICAgICAgICB4OiAtNjAsXHJcbiAgICAgICAgICAgIHk6IDIwLFxyXG4gICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6ICcxM3B4JyxcclxuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdWZXJkYW5hLCBzYW5zLXNlcmlmJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnUmlzaycsXHJcbiAgICAgICAgZGF0YTogWzguMjUsOS43NSw0LjUsNC41LDUuMjUsOSwzLDEzLjUsMTUuNzUsMjcuNzUsMTIsMTkuNSwxMiwxOC43NSwxNi41LDEuNSwxMiw0LjUsMyw5LDMuNzUsNC41LDksMy43NSBdLFxyXG4gICAgICAgIHBvaW50U3RhcnQ6IERhdGUuVVRDKDIwMTksIDQsIDEpLFxyXG4gICAgICAgIHBvaW50SW50ZXJ2YWw6IDI0ICoxMiogMzYwMCAqIDEwMDAsXHJcbiAgICAgICAgY29sb3I6J3JlZCcsXHJcbiAgICAgICAgZGF0YUxhYmVsczoge1xyXG4gICAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbG9yOiAnI0ZGRkZGRicsXHJcbiAgICAgICAgICAgIGFsaWduOiAncmlnaHQnLFxyXG4gICAgICAgICAgICB4OiAtNjAsXHJcbiAgICAgICAgICAgIHk6IDIwLFxyXG4gICAgICAgICAgICBzdHlsZToge1xyXG4gICAgICAgICAgICAgICAgZm9udFNpemU6ICcxM3B4JyxcclxuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk6ICdWZXJkYW5hLCBzYW5zLXNlcmlmJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXVxyXG5cclxuICB9XHJcbmNsYXNzIExpbmVDaGFydDEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHN1cGVyKClcclxuICAgIH1cclxucmVuZGVyKCl7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgIDxIaWdoY2hhcnRzUmVhY3RcclxuICAgICAgaGlnaGNoYXJ0cz17SGlnaGNoYXJ0c31cclxuICAgICAgb3B0aW9ucz17b3B0aW9uc31cclxuICAgIC8+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTGluZUNoYXJ0MTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5jbGFzcyBQcm9ncmVzc2JhciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcigpXHJcbiAgICAgICAgdGhpcy5zdGF0ZT17XHJcbiAgICAgICAgICAgIG51bWJlckNvbXBsZXRlOjEwXHJcbiAgICAgICAgfVxyXG4gICAgfSAgICBcclxuICAgIFxyXG5yZW5kZXIocHJvcHMpe1xyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3NcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzcy1iYXJcIiBzdHlsZT17e3dpZHRoOnRoaXMucHJvcHMudmFsdWVzfX0+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgLnByb2dyZXNzIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlOztcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMnJlbTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcmVtO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnByb2dyZXNzLWJhciB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNGMjcwOUMsICNGRjk0NzIpO1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6MCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHJlbTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggMXMgZWFzZS1pbi1vdXQ7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgYH1cclxuICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgUHJvZ3Jlc3NiYXIiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcbmNsYXNzIEFzc2V0cyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcblx0XHRzdXBlcihwcm9wcylcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIHR3b2Z1bmN0aW9uc28xKCl7XHJcbiAgICAgICAgdGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcigpXHJcblxyXG4gICAgICB9XHJcbiAgICB0d29mdW5jdGlvbnNmMSgpe1xyXG4gICAgICAgIHRoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXIoKVxyXG4gICAgICB9XHJcbnJlbmRlcihwcm9wcyl7XHJcbiAgICByZXR1cm4oXHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXNzZXRiYXJcIiBzdHlsZT17e2Rpc3BsYXk6dGhpcy5wcm9wcy5jYWxsP1wiZmxleFwiOlwibm9uZVwifX0gb25Nb3VzZUVudGVyPXt0aGlzLnByb3BzLmN9ICAgb25Nb3VzZUxlYXZlPXt0aGlzLnByb3BzLmN9PlxyXG4gICAgICAgICAgICA8YT4gIERpc2NvdmVyeSAgICA8L2E+XHJcbiAgICAgICAgICAgIDxhPiAgTGlzdCAgPC9hPlxyXG4gICAgICAgICAgICA8YT4gIE1hcCAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgXHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAuYXNzZXRiYXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgICAgICBtaW4td2lkdGg6IDE2MHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gICAgICAgIHotaW5kZXg6IDE7XHJcbiAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgd2lkdGg6MTA4JTtcclxuICAgICAgfVxyXG4gICAgICAuYXNzZXRiYXIgPmEge1xyXG4gICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnR2lscm95Jywgc2Fucy1zZXJpZjtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OjQwMDtcclxuICAgICAgICBmbGV4LWJhc2lzOjEwMHB4O1xyXG4gICAgICAgIGhlaWdodDo3MHB4O1xyXG4gICAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgICAgfVxyXG4gICAgICAuYXNzZXRiYXIgYTpob3ZlciB7Y29sb3I6IGJsYWNrO29wYWNpdHk6IDE7Y3Vyc29yOiBwb2ludGVyO31cclxuICAgIGB9PC9zdHlsZT5cclxuICAgIFxyXG4gICAgXHJcbiAgICA8L2Rpdj5cclxuICAgICk7XHJcblxyXG59XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQXNzZXRzOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmNsYXNzIEZvb3RlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcblx0XHRzdXBlcihwcm9wcylcclxuICAgICAgICBcclxuICAgIH1cclxucmVuZGVyKCl7XHJcbnJldHVybihcclxuICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgIGNsYXNzTmFtZT1cImZvb3RlclwiPlxyXG5cdFx0XHQ8cD4gQ29weXJpZ2h0IDIwMjAgwqkgQ3liZXIgSW50ZWxsaWdlbmNlIEhvdXNlPC9wPlxyXG5cdFx0XHQ8L2Rpdj5cclxuICAgIFxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgLmZvb3RlcntcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OjEwMHB4O1xyXG4gICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB9XHJcblxyXG4gICAgYH1cclxuXHJcblxyXG4gICAgPC9zdHlsZT5cclxuICAgIFxyXG4gICAgPC9kaXY+XHJcblxyXG4pXHJcbn1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7IiwiaW1wb3J0IFJlYWN0LHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSWNvbiB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xyXG5jbGFzcyBMYW5kaW5nY29udGVudCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudHtcclxuXHRjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcblx0XHRzdXBlcihwcm9wcylcclxuXHJcblx0fVxyXG5cdHJlbmRlcigpe1xyXG5cdFx0cmV0dXJuKFxyXG5cdFx0XHQ8ZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1haW4xXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjMVwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJjMW1haW5cIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtMVwiPlxyXG5cdFx0XHRcdFx0XHQ8cD48Yj4xMTI8L2I+PC9wPlxyXG5cdFx0XHRcdFx0XHQ8cD4gTWF0Y2hlcyBmb3IgZXhwb3NlZCBJbmZvcm1hdGlvbjwvcD5cclxuXHRcdFx0XHRcdFx0PGhyLz5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibTJcIj5cclxuXHRcdFx0XHRcdFx0PHA+PGI+NjM8L2I+PC9wPlxyXG5cdFx0XHRcdFx0XHQ8cD4gUGFzc3dvcmRzIGZvdW5kPC9wPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtM1wiPlxyXG5cdFx0XHRcdFx0XHQ8cD48Yj4yOTwvYj48L3A+XHJcblx0XHRcdFx0XHRcdDxwPiBQZXJzb25hbCBJbmZvcm1hdGlvbjwvcD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibTRcIj5cclxuXHRcdFx0XHRcdFx0PHA+PGI+MjA8L2I+PC9wPlxyXG5cdFx0XHRcdFx0XHQ8cD5IYWNrZXIgR3JvdXAgVGFyZ2V0aW5nPC9wPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtNVwiPlxyXG5cdFx0XHRcdFx0XHQ8YT5cclxuXHRcdFx0XHRcdFx0PHByZT4gVmlldyA8Yj5FeHBvc2VkIEluZm9ybWF0aW9uPC9iPiA8SWNvbiBmbGlwcGVkPSdob3Jpem9udGFsbHknIGZpdHRlZCBuYW1lPSdjYXJldCBsZWZ0JyBzaXplPVwibGFyZ2VcIiAvPlxyXG5cdFx0XHRcdFx0XHQ8L3ByZT5cclxuXHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYzJcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYzFtYWluXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibTFcIj5cclxuXHRcdFx0XHRcdFx0PHA+PGI+MzE8L2I+PC9wPlxyXG5cdFx0XHRcdFx0XHQ8cD4gVmlzaWJsZSBhc3NldHM8L3A+XHJcblx0XHRcdFx0XHRcdDxoci8+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm0yXCI+XHJcblx0XHRcdFx0XHRcdDxwPjxiPjMxPC9iPjwvcD5cclxuXHRcdFx0XHRcdFx0PHA+IENvbmZpcm1lZCBhc3NldHM8L3A+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm0zXCI+XHJcblx0XHRcdFx0XHRcdDxwPjxiPjA8L2I+PC9wPlxyXG5cdFx0XHRcdFx0XHQ8cD4gUGVuZGluZyBhc3NldHM8L3A+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm0xNVwiPlxyXG5cdFx0XHRcdFx0XHQ8YT5cclxuXHRcdFx0XHRcdFx0PHByZT4gVmlldyA8Yj5Bc3NldHM8L2I+IDxJY29uIGZsaXBwZWQ9J2hvcml6b250YWxseScgZml0dGVkIG5hbWU9J2NhcmV0IGxlZnQnIHNpemU9XCJsYXJnZVwiIC8+XHJcblx0XHRcdFx0XHRcdDwvcHJlPlxyXG5cdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHJcblxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYzNcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiYzFtYWluXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibTFcIj5cclxuXHRcdFx0XHRcdFx0PHA+PGI+MDwvYj48cDE+PGI+LzwvYj48L3AxPjxwMj48Yj4xNjwvYj48L3AyPjwvcD5cclxuXHRcdFx0XHRcdFx0PHA+IEFzc2V0cyBpbiBpbmZyYXN0cnVjdHVyZSB0ZXN0aW5nPC9wPlxyXG5cdFx0XHRcdFx0XHQ8aHIvPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtMlwiPlxyXG5cdFx0XHRcdFx0XHQ8cD48Yj4wPC9iPjxwMT48Yj4vPC9iPjwvcDE+PHAyPjxiPjE8L2I+PC9wMj48L3A+XHJcblx0XHRcdFx0XHRcdDxwPiBBc3NldHMgaW4gYXBwbGljYXRpb24gdGVzdGluZzwvcD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibTNcIj5cclxuXHRcdFx0XHRcdFx0PHA+PGI+MDwvYj48cDE+PGI+LzwvYj48L3AxPjxwMj48Yj4xPC9iPjwvcDI+PC9wPlxyXG5cdFx0XHRcdFx0XHQ8cD4gQXNzZXRzIGluIHBlbmV0cmF0aW9uIHRlc3Rpbmc8L3A+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9XCJtMTVcIj5cclxuXHRcdFx0XHRcdFx0PGE+XHJcblx0XHRcdFx0XHRcdDxwcmU+IFZpZXcgPGI+Q29udGludW91cyB0ZXN0aW5nPC9iPiA8SWNvbiBmbGlwcGVkPSdob3Jpem9udGFsbHknIGZpdHRlZCBuYW1lPSdjYXJldCBsZWZ0JyBzaXplPVwibGFyZ2VcIiAvPlxyXG5cdFx0XHRcdFx0XHQ8L3ByZT5cclxuXHRcdFx0XHRcdFx0PC9hPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcclxuXHJcblxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJuZWVkaGVscFwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibmVlZGhlbHAxXCI+XHJcblx0XHRcdFx0XHQ8aDE+IE5lZWQgaGVscD8gPC9oMT5cclxuXHRcdFx0XHRcdDxwPllvdSBjYW4gZ2V0IGFuYWx5c3Qgc3VwcG9ydCB1c2luZyBvdXI8YnIvPlxyXG5cdFx0XHRcdFx0b25saW5lIGNoYXQgb3Igb3JnYW5pc2UgYSBjYWxsIHRvIG91ciBleHBlcnQuXHJcblx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGJ1dHRvbiBjbGFzc05hbWU9XCJidG5zdWNjZXNzXCI+U3VwcG9ydDwvYnV0dG9uPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblxyXG5cdFx0XHQ8c3R5bGUganN4PntgXHJcblxyXG5cdFx0XHRcdC5idG5zdWNjZXNzIHtcclxuXHRcdFx0XHRib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuXHRcdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHRcdFx0XHRjb2xvcjogYmxhY2s7XHJcblx0XHRcdFx0cGFkZGluZzogMTRweCAyOHB4O1xyXG5cdFx0XHRcdGZvbnQtc2l6ZTogMTZweDtcclxuXHRcdFx0XHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQuYnRuc3VjY2Vzczpob3ZlcntcclxuXHQgIFx0XHRcdFx0Ym9yZGVyLWNvbG9yOiBncmF5O1xyXG4gIFx0XHRcdFx0XHRjb2xvcjogZ3JheTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdC5uZWVkaGVscDF7XHJcblx0XHRcdFx0XHRcdFx0ZGlzcGxheTpmbGV4O1xyXG5cdFx0XHRcdFx0XHRcdGZsZXgtZGlyZWN0aW9uOmNvbHVtbjtcclxuXHRcdFx0XHRcdFx0XHR3aWR0aDoxMDAlO1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdGhlaWdodDoyMDBweDtcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0Lm5lZWRoZWxwe1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0aGVpZ2h0OjQwMHB4O1xyXG5cdFx0XHRcdFx0bWFyZ2luLXRvcDo0MHB4O1xyXG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6NTBweDtcclxuXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5tNSBhe1xyXG5cdFx0XHRcdFx0Y29sb3I6Z3JheTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Lm01IGE6aG92ZXJ7XHJcblx0XHRcdFx0XHRjb2xvcjpibGFjaztcclxuXHRcdFx0XHRcdHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG5cdFx0XHRcdFx0Y3Vyc29yOnBvaW50ZXI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5tMTUgYXtcclxuXHRcdFx0XHRcdGNvbG9yOmdyYXk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5tMTUgYTpob3ZlcntcclxuXHRcdFx0XHRcdGNvbG9yOmJsYWNrO1xyXG5cdFx0XHRcdFx0dGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcblx0XHRcdFx0XHRjdXJzb3I6cG9pbnRlcjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LmMxbWFpbntcclxuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OjE1cHg7XHJcblx0XHRcdFx0XHRtYXJnaW4tdG9wOjMwcHg7XHJcblx0XHRcdFx0XHR3aWR0aDo5MCU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5tMSA+cHtcclxuXHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQubTJ7XHJcblx0XHRcdFx0XHRtYXJnaW4tdG9wOjE1cHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5tMiA+cHtcclxuXHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQubTN7XHJcblx0XHRcdFx0XHRtYXJnaW4tdG9wOjIwcHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5tMyA+cHtcclxuXHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQubTR7XHJcblx0XHRcdFx0XHRtYXJnaW4tdG9wOjIwcHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdC5tNCA+cHtcclxuXHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiAxMHB4O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQubTV7XHJcblx0XHRcdFx0XHRkaXNwbGF5OmZsZXg7XHJcblx0XHRcdFx0XHRhbGlnbi1pdGVtczpmbGV4LWVuZDtcclxuXHRcdFx0XHRcdGp1c3RpZnktY29udGVudDpmbGV4LWVuZDtcclxuXHRcdFx0XHRcdG1hcmdpbi10b3A6MzBweDtcclxuXHJcblxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQubTE1e1xyXG5cdFx0XHRcdFx0ZGlzcGxheTpmbGV4O1xyXG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6ZmxleC1lbmQ7XHJcblx0XHRcdFx0XHRqdXN0aWZ5LWNvbnRlbnQ6ZmxleC1lbmQ7XHJcblx0XHRcdFx0XHRtYXJnaW4tdG9wOjkwcHg7XHJcblxyXG5cclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdFx0XHQubWFpbjF7XHJcblxyXG5cdFx0XHRcdFx0ZGlzcGxheTpmbGV4O1xyXG5cdFx0XHRcdFx0ZmxleC1kaXJlY3Rpb246cm93O1xyXG5cdFx0XHRcdFx0aGVpZ2h0OjUwMHB4O1xyXG5cdFx0XHRcdFx0bWFyZ2luLXRvcDo4MHB4O1xyXG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6Y2VudGVyO1xyXG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OmNlbnRlcjtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHJcblxyXG5cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0LmMxe1xyXG5cdFx0XHRcdFx0ZGlzcGxheTpmbGV4O1xyXG5cdFx0XHRcdFx0bWFyZ2luLXRvcDo2MHB4O1xyXG5cdFx0XHRcdFx0YmFja2dyb3VuZDp3aGl0ZTtcclxuXHRcdFx0XHRcdGhlaWdodDozNTBweDtcclxuXHRcdFx0XHRcdHdpZHRoOjM1MHB4O1xyXG5cdFx0XHRcdFx0bWFyZ2luLWxlZnQ6MTBweDtcclxuXHRcdFx0XHRcdCBib3JkZXI6IDAuNXB4IHNvbGlkICNkZGRmZTY7O1xyXG5cdFx0XHRcdFx0IGJveC1zaGFkb3c6IDAgMjBweCA2MHB4IDAgcmdiYSgxNjMsIDE3MSwgMTg2LCAwKTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQuYzJ7XHJcblx0XHRcdFx0XHRkaXNwbGF5OmZsZXg7XHJcblx0XHRcdFx0XHR3aWR0aDozNTBweDtcclxuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OjEwcHg7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOndoaXRlO1xyXG5cdFx0XHRcdFx0aGVpZ2h0OjM1MHB4O1xyXG5cdFx0XHRcdFx0IG1hcmdpbi10b3A6NjBweDtcclxuXHRcdFx0XHRcdCBib3JkZXI6IDAuNXB4IHNvbGlkICNkZGRmZTY7O1xyXG5cdFx0XHRcdFx0IGJveC1zaGFkb3c6IDAgMjBweCA2MHB4IDAgcmdiYSgxNjMsIDE3MSwgMTg2LCAwKTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQuYzN7XHJcblx0XHRcdFx0XHRkaXNwbGF5OmZsZXg7XHJcblx0XHRcdFx0XHR3aWR0aDozNTBweDtcclxuXHRcdFx0XHRcdG1hcmdpbi1sZWZ0OjEwcHg7XHJcblx0XHRcdFx0XHRiYWNrZ3JvdW5kOndoaXRlO1xyXG5cdFx0XHRcdFx0aGVpZ2h0OjM1MHB4O1xyXG5cdFx0XHRcdFx0IG1hcmdpbi10b3A6NjBweDtcclxuXHRcdFx0XHRcdCBib3JkZXI6IDAuNXB4IHNvbGlkICNkZGRmZTY7O1xyXG5cdFx0XHRcdFx0IGJveC1zaGFkb3c6IDAgMjBweCA2MHB4IDAgcmdiYSgxNjMsIDE3MSwgMTg2LCAwKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0IEBtZWRpYSAobWF4LXdpZHRoOiAxMTAwcHgpIHtcclxuXHJcblx0XHRcdFx0XHQuYzF7XHJcblx0XHRcdFx0XHRcdG1hcmdpbi1sZWZ0OjBweDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHQgICAgLm1haW4xe1xyXG5cdFx0XHRcdCAgICBkaXNwbGF5OmZsZXg7XHJcblx0XHRcdFx0XHRmbGV4LWRpcmVjdGlvbjpjb2x1bW47XHJcblx0XHRcdFx0XHRoZWlnaHQ6MTQwMHB4O1xyXG5cdFx0XHRcdFx0bWFyZ2luLXRvcDo4MHB4O1xyXG5cdFx0XHRcdFx0YWxpZ24taXRlbXM6Y2VudGVyO1xyXG5cdFx0XHRcdFx0anVzdGlmeS1jb250ZW50OnNwYWNlLWFyb3VuZDtcclxuXHRcdFx0XHRcdHdpZHRoOjEwMCU7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHQgICAgfVxyXG5cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRgfTwvc3R5bGU+XHJcblxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHQpXHJcblx0fVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IExhbmRpbmdjb250ZW50IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IEFzc2V0cyBmcm9tIFwiLi9hc3NldHMuanNcIlxyXG5pbXBvcnQgeyBJY29uIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnXHJcbmNsYXNzIE5hdmlnYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcblx0Y29uc3RydWN0b3IocHJvcHMpe1xyXG5cdFx0c3VwZXIocHJvcHMpXHJcbiAgICAgICAgdGhpcy5zdGF0ZT17XHJcbiAgICAgICAgICAgIHNob3c6ZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3dhOmZhbHNlLFxyXG4gICAgICAgICAgICBzaG93YjpmYWxzZSxcclxuICAgICAgICAgICAgc2hvd2M6ZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcnQ9dGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcnQuYmluZCh0aGlzKVxyXG4gICAgICAgIHRoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXJmPXRoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXJmLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLmJhY2tkcm9wQ2xpY2tIYW5kbGVyMXQ9dGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcjF0LmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLmJhY2tkcm9wQ2xpY2tIYW5kbGVyMWY9dGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcjFmLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLnR3b2Z1bmN0aW9uc289dGhpcy50d29mdW5jdGlvbnNvLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLnR3b2Z1bmN0aW9uc2Y9dGhpcy50d29mdW5jdGlvbnNmLmJpbmQodGhpcylcclxuICAgICAgICB0aGlzLnR3b2Z1bmN0aW9uc28xPXRoaXMudHdvZnVuY3Rpb25zbzEuYmluZCh0aGlzKVxyXG4gICAgICAgIHRoaXMudHdvZnVuY3Rpb25zZjE9dGhpcy50d29mdW5jdGlvbnNmMS5iaW5kKHRoaXMpXHJcblx0fVxyXG4gIGJhY2tkcm9wQ2xpY2tIYW5kbGVyID0oKSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKChwcmV2U3RhdGUpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtzaG93OiAhcHJldlN0YXRlLnNob3d9O1xyXG5cclxuICAgICAgICBcclxuICAgIH0pO1xyXG5cclxuXHJcbiAgfTtcclxuXHJcbiAgICBiYWNrZHJvcENsaWNrSGFuZGxlcjEgPSgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge3Nob3dhOiAhcHJldlN0YXRlLnNob3dhfTsgICAgICAgIFxyXG4gICAgfSk7XHJcblxyXG5cclxuICB9O1xyXG4gICAgICBiYWNrZHJvcENsaWNrSGFuZGxlcjIgPSgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge3Nob3diOiAhcHJldlN0YXRlLnNob3difTsgICAgICAgIFxyXG4gICAgfSk7XHJcblxyXG5cclxuICB9O1xyXG4gIGJhY2tkcm9wQ2xpY2tIYW5kbGVyMyA9KCkgPT4ge1xyXG4gICAgdGhpcy5zZXRTdGF0ZSgocHJldlN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7c2hvd2M6ICFwcmV2U3RhdGUuc2hvd2N9OyAgICAgICAgXHJcbiAgICB9KTtcclxuXHJcblxyXG4gIH07XHJcbiAgYmFja2Ryb3BDbGlja0hhbmRsZXJ0KCl7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtzaG93OnRydWV9KVxyXG5cclxuICB9O1xyXG4gICAgYmFja2Ryb3BDbGlja0hhbmRsZXJmKCl7XHJcbiAgICB0aGlzLnNldFN0YXRlKHtzaG93OmZhbHNlfSlcclxuICB9O1xyXG4gIGJhY2tkcm9wQ2xpY2tIYW5kbGVyMXQoKXtcclxuICAgIHRoaXMuc2V0U3RhdGUoe3Nob3dhOnRydWV9KVxyXG5cclxuICB9O1xyXG4gICAgYmFja2Ryb3BDbGlja0hhbmRsZXIxZigpe1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7c2hvd2E6ZmFsc2V9KVxyXG4gIH07XHJcbiAgdHdvZnVuY3Rpb25zbygpe1xyXG4gICAgdGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcnQoKVxyXG4gICAgdGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcjF0KClcclxuICB9XHJcbiAgICB0d29mdW5jdGlvbnNmKCl7XHJcbiAgICB0aGlzLmJhY2tkcm9wQ2xpY2tIYW5kbGVyZigpXHJcbiAgICB0aGlzLmJhY2tkcm9wQ2xpY2tIYW5kbGVyMWYoKVxyXG4gIH1cclxuICAgIHR3b2Z1bmN0aW9uc28xKCl7XHJcbiAgICB0aGlzLmJhY2tkcm9wQ2xpY2tIYW5kbGVydCgpXHJcbiAgICB0aGlzLmJhY2tkcm9wQ2xpY2tIYW5kbGVyMigpXHJcbiAgfVxyXG4gICAgdHdvZnVuY3Rpb25zZjEoKXtcclxuICAgIHRoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXJmKClcclxuICAgIHRoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXIyKClcclxuICB9XHJcbnJlbmRlcigpe1xyXG5cdFx0cmV0dXJuKFxyXG4gICAgPGRpdj5cclxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cImRlc2lnbmluZ1wiPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibG9nb1wiPiA8aW1nIGNsYXNzTmFtZT1cImwxXCIgc3JjPVwibG9nby5wbmdcIi8+ICA8L2xpPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2Rhc2hib2FyZHBhZ2VcIj5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpbmsxXCIgICBvbk1vdXNlRW50ZXI9e3RoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXJ0fSBvbk1vdXNlTGVhdmU9e3RoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXJmfT4gXHJcbiAgICAgICAgICAgICAgIEV4cG9zZWQgSW5mb3JtYXRpb24gXHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpbmsyXCJcclxuICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17dGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcjN9XHJcbiAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e3RoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXIzfT4gQXNzZXRzIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaW5rM1wiPiBTdXBwb3J0IDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzcGFjZXJcIj48L2xpPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL1wiID48YT48aW1nIHNyYz1cInVzZXJpY29uLnBuZ1wiIGNsYXNzTmFtZT1cInVzZXJsb2dvXCIvPjwvYT48L0xpbms+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJkZW1vYWNjb3VudFwiPiBEZW1vIGFjY291bnQgPC9saT5cclxuICAgICAgICAgICAgPGxpID4gPGltZyBzcmM9XCJvdXQucG5nXCIgY2xhc3NOYW1lPVwibG9nbzFcIi8+IDwvbGk+XHJcbiAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGVudFwiICAgICAgc3R5bGU9e3tkaXNwbGF5OnRoaXMuc3RhdGUuc2hvdz9cImZsZXhcIjpcIm5vbmVcIn19XHJcbiAgICAgICAgICBvbk1vdXNlRW50ZXI9e3RoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXJ0fSAgIG9uTW91c2VMZWF2ZT17dGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcmZ9ICAgID5cclxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzcGFjZXIxXCI+PC9saT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZGFzaGJvYXJkcGFnZVwiPlxyXG4gICAgICAgICAgICA8YSAgY2xhc3NOYW1lPVwiZGFzaGJvYXJkc1wiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cInNxdWFyZXMucG5nXCIvPjxwPkRBU0hCT0FSRFM8L3A+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz4gIFxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG48aW1nIHNyYz1cInNlYXJjaC5wbmdcIiBjbGFzc05hbWU9XCJzZWFyY2hcIi8+XHJcbjxwcmU+IDwvcHJlPlxyXG4gICAgICAgICAgICBLRVlXT1JEUzwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBvbk1vdXNlRW50ZXI9e3RoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXIxdH1cclxuICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXt0aGlzLmJhY2tkcm9wQ2xpY2tIYW5kbGVyMWZ9XHJcbiAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICA+XHJcbjxpbWcgc3JjPVwiYmVsbC5wbmdcIiBjbGFzc05hbWU9XCJhbGVydHNcIi8+XHJcbjxwcmU+IDwvcHJlPlxyXG4gICAgICAgICAgICBBTEVSVFNcclxuICAgICAgICAgICAgPHByZT4gPC9wcmU+XHJcbiAgICAgICAgICAgIDxJY29uIGZsaXBwZWQ9J2hvcml6b250YWxseScgZml0dGVkIG5hbWU9J2NhcmV0IGRvd24nIHNpemU9XCJsYXJnZVwiIC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI9e3RoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXIyfVxyXG4gICAgICAgICAgICAgICBvbk1vdXNlTGVhdmU9e3RoaXMuYmFja2Ryb3BDbGlja0hhbmRsZXIyfT5cclxuPGltZyBzcmM9XCJzaGVhbGQucG5nXCIgY2xhc3NOYW1lPVwic2hlYWxkXCJcclxuLz5cclxuPHByZT4gPC9wcmU+XHJcblxyXG4gICAgICAgICAgICBSRU1FRElBVElPTlxyXG4gICAgICAgICAgICA8cHJlPiA8L3ByZT5cclxuICAgICAgICAgICAgPEljb24gZmxpcHBlZD0naG9yaXpvbnRhbGx5JyBmaXR0ZWQgbmFtZT0nY2FyZXQgZG93bicgc2l6ZT1cImxhcmdlXCIgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuPGltZyBzcmM9XCJzZWF0aW5nLnBuZ1wiIGNsYXNzTmFtZT1cInNlYXRpbmdcIi8+XHJcblxyXG4gICAgICAgICAgICBTRVRUSU5HUzwvYT5cclxuXHJcbiAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcGRvd24tY29udGVudDFcIiAgc3R5bGU9e3tkaXNwbGF5OnRoaXMuc3RhdGUuc2hvd2E/XCJmbGV4XCI6XCJub25lXCJ9fSBcclxuICAgICAgICAgICAgb25Nb3VzZUVudGVyPXt0aGlzLnR3b2Z1bmN0aW9uc299ICAgb25Nb3VzZUxlYXZlPXt0aGlzLnR3b2Z1bmN0aW9uc2Z9IFxyXG4gIFxyXG4gICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBBbGwgQWxlcnRzXHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgU2Vuc2l0aXZlIEluZm9ybWF0aW9uPC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICBEaXNjdXNzaW9uczwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgQmxhY2sgTWFya2V0czwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgRmluYW5jaWFsPC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICBFeHBvc2VkIENyZWRlbnRpYWxzPC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICBQZXJzb25hbCBJbmZvcm1hdGlvbjwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgSGFja2VyIEdyb3VwIFRhcmdldGluZzwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgQXR0YWNrICYgQ29tcHJvbWlzZXM8L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgIFVuZGVyIEFuYWx5c2lzPC9hPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wZG93bi1jb250ZW50M1wiICBzdHlsZT17e2Rpc3BsYXk6dGhpcy5zdGF0ZS5zaG93Yj9cImZsZXhcIjpcIm5vbmVcIn19IFxyXG4gICAgICAgICAgICBvbk1vdXNlRW50ZXI9e3RoaXMudHdvZnVuY3Rpb25zbzF9ICAgb25Nb3VzZUxlYXZlPXt0aGlzLnR3b2Z1bmN0aW9uc2YxfSA+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJzcGFjZXIxXCI+PC9saT5cclxuICAgICAgICAgICAgPGxpIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwiZGFzaGJvYXJkc1wiPlxyXG4gICAgICAgICAgICA8cD48L3A+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPHByZT4gPC9wcmU+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDxsaSBocmVmPVwiI1wiID5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxwcmU+IDwvcHJlPlxyXG4gICAgICAgICAgICA8cHJlPiA8L3ByZT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgIDxwcmU+IDwvcHJlPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJkMVwiPkFjdGlvbnM8L2E+XHJcbiAgICAgICAgICAgIDxwcmU+ICAgPC9wcmU+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImQyXCI+TG9nPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGxpIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2xpPlxyXG5cclxuXHJcblxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxBc3NldHMgY2FsbD17dGhpcy5zdGF0ZS5zaG93Y30gYz17dGhpcy5iYWNrZHJvcENsaWNrSGFuZGxlcjN9Lz5cclxuICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgLmwxe1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDowcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDozMDBweDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDo0MHB4O1xyXG4gICAgICAgICAgICB9XHJcbi5kZXNpZ25pbmd7XHJcbiAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgXHJcbiAgd2lkdGg6MTAwJTtcclxuICBcclxuICBcclxuXHJcbn1cclxuLnNwYWNlcjJ7XHJcbmRpc3BsYXk6ZmxleDtcclxuYmFja2dyb3VuZDpibHVlO1xyXG5mbGV4LWJhc2lzOjUwJTtcclxufVxyXG4uc2VhcmNoe1xyXG4gICAgICAgICB3aWR0aDoyNHB4O1xyXG4gICAgaGVpZ2h0OjI0cHg7ICBcclxufVxyXG4uc2hlYWxke1xyXG4gICAgICB3aWR0aDo0MHB4O1xyXG4gICAgaGVpZ2h0OjQwcHg7ICBcclxufVxyXG4uYWxlcnRze1xyXG4gICAgd2lkdGg6MjVweDtcclxuICAgIGhlaWdodDoyNXB4O1xyXG59XHJcbi5kZXNpZ25pbmcgPmxpIHtcclxuICBjb2xvcjp3aGl0ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG5cclxuICBsaXN0LXN0eWxlOm5vbmU7IFxyXG59XHJcbi5sb2dve1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gIGZsZXgtYmFzaXM6IDQwJTtcclxufVxyXG4ubGluazF7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdHaWxyb3knLCBzYW5zLXNlcmlmO1xyXG4gIHdpZHRoOjE1MHB4O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBib3JkZXItYm90dG9tOjNweCBzb2xpZCB0cmFuc3BhcmVudDtcclxufVxyXG4ubGluazJ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6NzVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkdpbHJveVwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBib3JkZXItYm90dG9tOjNweCBzb2xpZCB0cmFuc3BhcmVudDtcclxufVxyXG4ubGluazN7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgd2lkdGg6NzBweDtcclxuICAgICAgIGZvbnQtZmFtaWx5OiBcIkdpbHJveVwiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxuICBib3JkZXItYm90dG9tOjNweCBzb2xpZCB0cmFuc3BhcmVudDtcclxufVxyXG4uc3BhY2Vye1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1iYXNpczogMjAlO1xyXG5cclxuICBcclxufVxyXG4udXNlcmxvZ297XHJcbiAgZGlzcGxheTogZmxleDtcclxuZmxleC1iYXNpczogMTUlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIHdpZHRoOiAyNXB4O1xyXG59XHJcbi5kZW1vYWNjb3VudHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgICAgZm9udC1mYW1pbHk6IFwiR2lscm95XCIsIHNhbnMtc2VyaWY7XHJcbiAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgd2lkdGg6IDExMHB4O1xyXG5cclxufVxyXG4ubG9nbzF7XHJcbiB3aWR0aDoyNXB4O1xyXG4gaGVpZ2h0OjI1cHg7XHJcbn1cclxuLyogRHJvcGRvd24gQnV0dG9uICovXHJcblxyXG5cclxuLyogVGhlIGNvbnRhaW5lciA8ZGl2PiAtIG5lZWRlZCB0byBwb3NpdGlvbiB0aGUgZHJvcGRvd24gY29udGVudCAqL1xyXG5cclxuLnNwYWNlcjF7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWJhc2lzOiAyMCU7XHJcbn1cclxuXHJcbi5kcm9wZG93bi1jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5hbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIG1pbi13aWR0aDogMTYwcHg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMik7XHJcbiAgei1pbmRleDogMTtcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICB3aWR0aDoxMDAlO1xyXG59XHJcbi5zZWF0aW5ne1xyXG4gICAgd2lkdGg6MzVweDtcclxuICAgIGhlaWdodDozMHB4O1xyXG59XHJcbi8qIExpbmtzIGluc2lkZSB0aGUgZHJvcGRvd24gKi9cclxuLmRyb3Bkb3duLWNvbnRlbnQgPmEge1xyXG4gIGNvbG9yOiBncmF5O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnR2lscm95Jywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xyXG4gIGZvbnQtd2VpZ2h0OjQwMDtcclxuICB3aWR0aDogMTgwcHg7XHJcbiAgaGVpZ2h0OjcwcHg7XHJcbiAgb3BhY2l0eTogMC44O1xyXG59XHJcblxyXG4vKiBDaGFuZ2UgY29sb3Igb2YgZHJvcGRvd24gbGlua3Mgb24gaG92ZXIgKi9cclxuLmRyb3Bkb3duLWNvbnRlbnQgYTpob3ZlciB7Y29sb3I6IGJsYWNrO29wYWNpdHk6IDE7fVxyXG5cclxuXHJcbi5saW5rMTpob3ZlciB7Ym9yZGVyLWJvdHRvbTozcHggc29saWQgIzAwNzZmZjsgY3Vyc29yOiBwb2ludGVyO31cclxuLmxpbmsyOmhvdmVyIHtib3JkZXItYm90dG9tOjNweCBzb2xpZCAjMDA3NmZmOyBjdXJzb3I6IHBvaW50ZXI7fVxyXG4ubGluazM6aG92ZXIge2JvcmRlci1ib3R0b206M3B4IHNvbGlkICMwMDc2ZmY7IGN1cnNvcjogcG9pbnRlcjt9XHJcbi5kYXNoYm9hcmRze1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG53aWR0aDogMTAwcHg7XHJcblxyXG59XHJcbi5kYXNoYm9hcmRzIGltZ3tcclxuICAgIGhlaWdodDozMHB4O1xyXG4gICAgd2lkdGg6MzBweDtcclxufVxyXG4uZHJvcGRvd24tY29udGVudDEge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6c3BhY2UtZXZlbmx5O1xyXG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICB3aWR0aDoxMDAlO1xyXG4gIG1hcmdpbi10b3A6NzBweDtcclxufVxyXG5cclxuXHJcbi5kcm9wZG93bi1jb250ZW50MSA+YSB7XHJcbiAgICBjb2xvcjogZ3JheTtcclxuICBcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBmb250LWZhbWlseTogJ0dpbHJveScsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG5cclxuICBoZWlnaHQ6NjBweDtcclxufVxyXG4uZHJvcGRvd24tY29udGVudDEgYTpob3ZlciB7Y29sb3I6IGJsYWNrO31cclxuXHJcbi5kcm9wZG93bi1jb250ZW50MyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBtaW4td2lkdGg6IDE2MHB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLDAsMCwwLjIpO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgbWFyZ2luLXRvcDo3MHB4O1xyXG59XHJcblxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQzID5saSB7XHJcbiAgY29sb3I6IGdyYXk7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgZm9udC1mYW1pbHk6ICdHaWxyb3knLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XHJcbiAgZm9udC13ZWlnaHQ6NDAwO1xyXG4gIHdpZHRoOiAxODBweDtcclxuICBoZWlnaHQ6NjBweDtcclxuICBvcGFjaXR5OiAwLjg7XHJcbiAgbGlzdC1zdHlsZTpub25lO1xyXG4gICAgIFxyXG4gICAgY3Vyc29yOiBkZWZhdWx0O1xyXG5cclxufVxyXG4uZDF7XHJcbmNvbG9yOmdyYXk7XHJcbnRleHQtZGVjb3JhdGlvbjpub25lO1xyXG59XHJcbi5kMntcclxuY29sb3I6Z3JheTtcclxudGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbn1cclxuLmQxOmhvdmVyIHtjb2xvcjogYmxhY2s7Y3Vyc29yOiBwb2ludGVyO31cclxuLmQyOmhvdmVyIHtjb2xvcjogYmxhY2s7Y3Vyc29yOiBwb2ludGVyO31cclxuIEBtZWRpYSAobWF4LXdpZHRoOiAxMDQ0cHgpIHtcclxuICAgLmRlc2lnbmluZ3tcclxuICAgICB3aWR0aDoxMDAlO1xyXG4gICB9XHJcbiAgIC5kcm9wZG93bi1jb250ZW50e1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgfVxyXG4gICAuZHJvcGRvd24tY29udGVudDF7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICB9XHJcbiAgIC5kcm9wZG93bi1jb250ZW50M3tcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgIH1cclxuICAgIC5kZXNpZ25pbmcgLmxpbmsxIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgLmRlc2lnbmluZyAubGluazIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAuZGVzaWduaW5nIC5saW5rMyB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbn1cclxuIEBtZWRpYSAobWF4LXdpZHRoOiA2MDRweCkge1xyXG4gICAuZGVzaWduaW5ne1xyXG4gICAgIHdpZHRoOjEwMCU7XHJcbiAgIH1cclxuXHJcbiAgfVxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAzMDRweCkge1xyXG4gICAgLmRlc2lnbmluZ3tcclxuICAgICAgd2lkdGg6MTAwJTtcclxuICAgIH1cclxuIFxyXG4gICB9XHJcblxyXG59ICAgICAgICAgXHJcblxyXG4gICAgICAgICAgYH0gPC9zdHlsZT5cclxuICAgIFxyXG4gICAgPC9kaXY+XHJcblx0XHRcdClcclxuXHR9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgTmF2aWdhdGlvbjsiLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJkZWNsYXJlIGNvbnN0IF9fTkVYVF9EQVRBX186IGFueVxuXG5pbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4sIENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgcGFyc2UsIHJlc29sdmUsIFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IFByZWZldGNoT3B0aW9ucyB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHtcbiAgZXhlY09uY2UsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IFJvdXRlciBmcm9tICcuL3JvdXRlcidcbmltcG9ydCB7IGFkZEJhc2VQYXRoIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5cbmZ1bmN0aW9uIGlzTG9jYWwoaHJlZjogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGNvbnN0IHVybCA9IHBhcnNlKGhyZWYsIGZhbHNlLCB0cnVlKVxuICBjb25zdCBvcmlnaW4gPSBwYXJzZShnZXRMb2NhdGlvbk9yaWdpbigpLCBmYWxzZSwgdHJ1ZSlcblxuICByZXR1cm4gKFxuICAgICF1cmwuaG9zdCB8fCAodXJsLnByb3RvY29sID09PSBvcmlnaW4ucHJvdG9jb2wgJiYgdXJsLmhvc3QgPT09IG9yaWdpbi5ob3N0KVxuICApXG59XG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIEZvcm1hdFJlc3VsdCA9IHsgaHJlZjogc3RyaW5nOyBhcz86IHN0cmluZyB9XG5cbmZ1bmN0aW9uIG1lbW9pemVkRm9ybWF0VXJsKGZvcm1hdEZ1bmM6IChocmVmOiBVcmwsIGFzPzogVXJsKSA9PiBGb3JtYXRSZXN1bHQpIHtcbiAgbGV0IGxhc3RIcmVmOiBudWxsIHwgVXJsID0gbnVsbFxuICBsZXQgbGFzdEFzOiB1bmRlZmluZWQgfCBudWxsIHwgVXJsID0gbnVsbFxuICBsZXQgbGFzdFJlc3VsdDogbnVsbCB8IEZvcm1hdFJlc3VsdCA9IG51bGxcbiAgcmV0dXJuIChocmVmOiBVcmwsIGFzPzogVXJsKSA9PiB7XG4gICAgaWYgKGxhc3RSZXN1bHQgJiYgaHJlZiA9PT0gbGFzdEhyZWYgJiYgYXMgPT09IGxhc3RBcykge1xuICAgICAgcmV0dXJuIGxhc3RSZXN1bHRcbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHQgPSBmb3JtYXRGdW5jKGhyZWYsIGFzKVxuICAgIGxhc3RIcmVmID0gaHJlZlxuICAgIGxhc3RBcyA9IGFzXG4gICAgbGFzdFJlc3VsdCA9IHJlc3VsdFxuICAgIHJldHVybiByZXN1bHRcbiAgfVxufVxuXG5mdW5jdGlvbiBmb3JtYXRVcmwodXJsOiBVcmwpOiBzdHJpbmcge1xuICByZXR1cm4gdXJsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnID8gZm9ybWF0V2l0aFZhbGlkYXRpb24odXJsKSA6IHVybFxufVxuXG5leHBvcnQgdHlwZSBMaW5rUHJvcHMgPSB7XG4gIGhyZWY6IFVybFxuICBhcz86IFVybFxuICByZXBsYWNlPzogYm9vbGVhblxuICBzY3JvbGw/OiBib29sZWFuXG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIHBhc3NIcmVmPzogYm9vbGVhblxuICBwcmVmZXRjaD86IGJvb2xlYW5cbn1cblxubGV0IG9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKG9ic2VydmVyKSB7XG4gICAgcmV0dXJuIG9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAob2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuY2xhc3MgTGluayBleHRlbmRzIENvbXBvbmVudDxMaW5rUHJvcHM+IHtcbiAgcDogYm9vbGVhblxuXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBMaW5rUHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHByb3BzLnByZWZldGNoKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJ1xuICAgICAgICApXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMucCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuICB9XG5cbiAgY2xlYW5VcExpc3RlbmVycyA9ICgpID0+IHt9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKTogdm9pZCB7XG4gICAgdGhpcy5jbGVhblVwTGlzdGVuZXJzKClcbiAgfVxuXG4gIGdldFBhdGhzKCk6IHN0cmluZ1tdIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgICBjb25zdCB7IGhyZWY6IHBhcnNlZEhyZWYsIGFzOiBwYXJzZWRBcyB9ID0gdGhpcy5mb3JtYXRVcmxzKFxuICAgICAgdGhpcy5wcm9wcy5ocmVmLFxuICAgICAgdGhpcy5wcm9wcy5hc1xuICAgIClcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPSByZXNvbHZlKHBhdGhuYW1lLCBwYXJzZWRIcmVmKVxuICAgIHJldHVybiBbcmVzb2x2ZWRIcmVmLCBwYXJzZWRBcyA/IHJlc29sdmUocGF0aG5hbWUsIHBhcnNlZEFzKSA6IHJlc29sdmVkSHJlZl1cbiAgfVxuXG4gIGhhbmRsZVJlZihyZWY6IEVsZW1lbnQpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5wICYmIEludGVyc2VjdGlvbk9ic2VydmVyICYmIHJlZiAmJiByZWYudGFnTmFtZSkge1xuICAgICAgdGhpcy5jbGVhblVwTGlzdGVuZXJzKClcblxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID1cbiAgICAgICAgcHJlZmV0Y2hlZFtcbiAgICAgICAgICB0aGlzLmdldFBhdGhzKCkuam9pbihcbiAgICAgICAgICAgIC8vIEpvaW4gb24gYW4gaW52YWxpZCBVUkkgY2hhcmFjdGVyXG4gICAgICAgICAgICAnJSdcbiAgICAgICAgICApXG4gICAgICAgIF1cbiAgICAgIGlmICghaXNQcmVmZXRjaGVkKSB7XG4gICAgICAgIHRoaXMuY2xlYW5VcExpc3RlbmVycyA9IGxpc3RlblRvSW50ZXJzZWN0aW9ucyhyZWYsICgpID0+IHtcbiAgICAgICAgICB0aGlzLnByZWZldGNoKClcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBUaGUgZnVuY3Rpb24gaXMgbWVtb2l6ZWQgc28gdGhhdCBubyBleHRyYSBsaWZlY3ljbGVzIGFyZSBuZWVkZWRcbiAgLy8gYXMgcGVyIGh0dHBzOi8vcmVhY3Rqcy5vcmcvYmxvZy8yMDE4LzA2LzA3L3lvdS1wcm9iYWJseS1kb250LW5lZWQtZGVyaXZlZC1zdGF0ZS5odG1sXG4gIGZvcm1hdFVybHMgPSBtZW1vaXplZEZvcm1hdFVybCgoaHJlZiwgYXNIcmVmKSA9PiB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IGFkZEJhc2VQYXRoKGZvcm1hdFVybChocmVmKSksXG4gICAgICBhczogYXNIcmVmID8gYWRkQmFzZVBhdGgoZm9ybWF0VXJsKGFzSHJlZikpIDogYXNIcmVmLFxuICAgIH1cbiAgfSlcblxuICBsaW5rQ2xpY2tlZCA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3QgeyBub2RlTmFtZSwgdGFyZ2V0IH0gPSBlLmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgICBpZiAoXG4gICAgICBub2RlTmFtZSA9PT0gJ0EnICYmXG4gICAgICAoKHRhcmdldCAmJiB0YXJnZXQgIT09ICdfc2VsZicpIHx8XG4gICAgICAgIGUubWV0YUtleSB8fFxuICAgICAgICBlLmN0cmxLZXkgfHxcbiAgICAgICAgZS5zaGlmdEtleSB8fFxuICAgICAgICAoZS5uYXRpdmVFdmVudCAmJiBlLm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKSlcbiAgICApIHtcbiAgICAgIC8vIGlnbm9yZSBjbGljayBmb3IgbmV3IHRhYiAvIG5ldyB3aW5kb3cgYmVoYXZpb3JcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGxldCB7IGhyZWYsIGFzIH0gPSB0aGlzLmZvcm1hdFVybHModGhpcy5wcm9wcy5ocmVmLCB0aGlzLnByb3BzLmFzKVxuXG4gICAgaWYgKCFpc0xvY2FsKGhyZWYpKSB7XG4gICAgICAvLyBpZ25vcmUgY2xpY2sgaWYgaXQncyBvdXRzaWRlIG91ciBzY29wZSAoZS5nLiBodHRwczovL2dvb2dsZS5jb20pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSB3aW5kb3cubG9jYXRpb25cbiAgICBocmVmID0gcmVzb2x2ZShwYXRobmFtZSwgaHJlZilcbiAgICBhcyA9IGFzID8gcmVzb2x2ZShwYXRobmFtZSwgYXMpIDogaHJlZlxuXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgICBsZXQgeyBzY3JvbGwgfSA9IHRoaXMucHJvcHNcbiAgICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICAgIHNjcm9sbCA9IGFzLmluZGV4T2YoJyMnKSA8IDBcbiAgICB9XG5cbiAgICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgICBSb3V0ZXJbdGhpcy5wcm9wcy5yZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgICAgc2hhbGxvdzogdGhpcy5wcm9wcy5zaGFsbG93LFxuICAgIH0pLnRoZW4oKHN1Y2Nlc3M6IGJvb2xlYW4pID0+IHtcbiAgICAgIGlmICghc3VjY2VzcykgcmV0dXJuXG4gICAgICBpZiAoc2Nyb2xsKSB7XG4gICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgICBkb2N1bWVudC5ib2R5LmZvY3VzKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgcHJlZmV0Y2gob3B0aW9ucz86IFByZWZldGNoT3B0aW9ucyk6IHZvaWQge1xuICAgIGlmICghdGhpcy5wIHx8IHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gICAgY29uc3QgcGF0aHMgPSB0aGlzLmdldFBhdGhzKClcbiAgICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gICAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gICAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gICAgUm91dGVyLnByZWZldGNoKHBhdGhzWy8qIGhyZWYgKi8gMF0sIHBhdGhzWy8qIGFzUGF0aCAqLyAxXSwgb3B0aW9ucykuY2F0Y2goXG4gICAgICAoZXJyKSA9PiB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgICAgIHRocm93IGVyclxuICAgICAgICB9XG4gICAgICB9XG4gICAgKVxuICAgIHByZWZldGNoZWRbXG4gICAgICBwYXRocy5qb2luKFxuICAgICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgICAnJSdcbiAgICAgIClcbiAgICBdID0gdHJ1ZVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGxldCB7IGNoaWxkcmVuIH0gPSB0aGlzLnByb3BzXG4gICAgY29uc3QgeyBocmVmLCBhcyB9ID0gdGhpcy5mb3JtYXRVcmxzKHRoaXMucHJvcHMuaHJlZiwgdGhpcy5wcm9wcy5hcylcbiAgICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICAgIH1cblxuICAgIC8vIFRoaXMgd2lsbCByZXR1cm4gdGhlIGZpcnN0IGNoaWxkLCBpZiBtdWx0aXBsZSBhcmUgcHJvdmlkZWQgaXQgd2lsbCB0aHJvdyBhbiBlcnJvclxuICAgIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICAgIGNvbnN0IHByb3BzOiB7XG4gICAgICBvbk1vdXNlRW50ZXI6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgICAgaHJlZj86IHN0cmluZ1xuICAgICAgcmVmPzogYW55XG4gICAgfSA9IHtcbiAgICAgIHJlZjogKGVsOiBhbnkpID0+IHtcbiAgICAgICAgdGhpcy5oYW5kbGVSZWYoZWwpXG5cbiAgICAgICAgaWYgKGNoaWxkICYmIHR5cGVvZiBjaGlsZCA9PT0gJ29iamVjdCcgJiYgY2hpbGQucmVmKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgY2hpbGQucmVmLmN1cnJlbnQgPSBlbFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG9uTW91c2VFbnRlcjogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnByZWZldGNoKHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICAgIH0sXG4gICAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgICB0aGlzLmxpbmtDbGlja2VkKGUpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgfVxuXG4gICAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gICAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gICAgaWYgKFxuICAgICAgdGhpcy5wcm9wcy5wYXNzSHJlZiB8fFxuICAgICAgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpXG4gICAgKSB7XG4gICAgICBwcm9wcy5ocmVmID0gYXMgfHwgaHJlZlxuICAgIH1cblxuICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAvLyBcIjxwYWdlPi9pbmRleC5odG1sXCIgZGlyZWN0bHkuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgIGNvbnN0IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0ID0gcmVxdWlyZSgnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yZXdyaXRlLXVybC1mb3ItZXhwb3J0JylcbiAgICAgICAgLnJld3JpdGVVcmxGb3JOZXh0RXhwb3J0XG4gICAgICBpZiAoXG4gICAgICAgIHByb3BzLmhyZWYgJiZcbiAgICAgICAgdHlwZW9mIF9fTkVYVF9EQVRBX18gIT09ICd1bmRlZmluZWQnICYmXG4gICAgICAgIF9fTkVYVF9EQVRBX18ubmV4dEV4cG9ydFxuICAgICAgKSB7XG4gICAgICAgIHByb3BzLmhyZWYgPSByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydChwcm9wcy5ocmVmKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIHByb3BzKVxuICB9XG59XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICBjb25zdCB3YXJuID0gZXhlY09uY2UoY29uc29sZS5lcnJvcilcblxuICAvLyBUaGlzIG1vZHVsZSBnZXRzIHJlbW92ZWQgYnkgd2VicGFjay5JZ25vcmVQbHVnaW5cbiAgY29uc3QgUHJvcFR5cGVzID0gcmVxdWlyZSgncHJvcC10eXBlcycpXG4gIGNvbnN0IGV4YWN0ID0gcmVxdWlyZSgncHJvcC10eXBlcy1leGFjdCcpXG4gIC8vIEB0cy1pZ25vcmUgdGhlIHByb3BlcnR5IGlzIHN1cHBvcnRlZCwgd2hlbiBkZWNsYXJpbmcgaXQgb24gdGhlIGNsYXNzIGl0IG91dHB1dHMgYW4gZXh0cmEgYml0IG9mIGNvZGUgd2hpY2ggaXMgbm90IG5lZWRlZC5cbiAgTGluay5wcm9wVHlwZXMgPSBleGFjdCh7XG4gICAgaHJlZjogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLnN0cmluZywgUHJvcFR5cGVzLm9iamVjdF0pLmlzUmVxdWlyZWQsXG4gICAgYXM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5zdHJpbmcsIFByb3BUeXBlcy5vYmplY3RdKSxcbiAgICBwcmVmZXRjaDogUHJvcFR5cGVzLmJvb2wsXG4gICAgcmVwbGFjZTogUHJvcFR5cGVzLmJvb2wsXG4gICAgc2hhbGxvdzogUHJvcFR5cGVzLmJvb2wsXG4gICAgcGFzc0hyZWY6IFByb3BUeXBlcy5ib29sLFxuICAgIHNjcm9sbDogUHJvcFR5cGVzLmJvb2wsXG4gICAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgICAgUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgICAocHJvcHM6IGFueSwgcHJvcE5hbWU6IHN0cmluZykgPT4ge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHByb3BzW3Byb3BOYW1lXVxuXG4gICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgd2FybihcbiAgICAgICAgICAgIGBXYXJuaW5nOiBZb3UncmUgdXNpbmcgYSBzdHJpbmcgZGlyZWN0bHkgaW5zaWRlIDxMaW5rPi4gVGhpcyB1c2FnZSBoYXMgYmVlbiBkZXByZWNhdGVkLiBQbGVhc2UgYWRkIGFuIDxhPiB0YWcgYXMgY2hpbGQgb2YgPExpbms+YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9LFxuICAgIF0pLmlzUmVxdWlyZWQsXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWNvbnNvbGVcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKHt9LCBfcm91dGVyW3Byb3BlcnR5XSkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHBhcnNlLCBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmluZGV4T2YoYmFzZVBhdGgpICE9PSAwID8gYmFzZVBhdGggKyBwYXRoIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguaW5kZXhPZihiYXNlUGF0aCkgPT09IDBcbiAgICA/IHBhdGguc3Vic3RyKGJhc2VQYXRoLmxlbmd0aCkgfHwgJy8nXG4gICAgOiBwYXRoXG59XG5cbmZ1bmN0aW9uIHRvUm91dGUocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGgucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLydcbn1cblxuY29uc3QgcHJlcGFyZVJvdXRlID0gKHBhdGg6IHN0cmluZykgPT5cbiAgdG9Sb3V0ZSghcGF0aCB8fCBwYXRoID09PSAnLycgPyAnL2luZGV4JyA6IHBhdGgpXG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbnR5cGUgQ29tcG9uZW50UmVzID0geyBwYWdlOiBDb21wb25lbnRUeXBlOyBtb2Q6IGFueSB9XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBOZXh0Um91dGVyID0gQmFzZVJvdXRlciAmXG4gIFBpY2s8XG4gICAgUm91dGVyLFxuICAgIHwgJ3B1c2gnXG4gICAgfCAncmVwbGFjZSdcbiAgICB8ICdyZWxvYWQnXG4gICAgfCAnYmFjaydcbiAgICB8ICdwcmVmZXRjaCdcbiAgICB8ICdiZWZvcmVQb3BTdGF0ZSdcbiAgICB8ICdldmVudHMnXG4gICAgfCAnaXNGYWxsYmFjaydcbiAgPlxuXG5leHBvcnQgdHlwZSBQcmVmZXRjaE9wdGlvbnMgPSB7XG4gIHByaW9yaXR5PzogYm9vbGVhblxufVxuXG50eXBlIFJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIF9fTl9TU0c/OiBib29sZWFuXG4gIF9fTl9TU1A/OiBib29sZWFuXG4gIHByb3BzPzogYW55XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFJvdXRlSW5mbywgQXBwPzogQ29tcG9uZW50VHlwZSkgPT4gdm9pZFxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IGFueSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShcbiAgcGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5IHwgbnVsbCxcbiAgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4sXG4gIGNiPzogKC4uLmFyZ3M6IGFueSkgPT4gYW55XG4pIHtcbiAgbGV0IGF0dGVtcHRzID0gaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMVxuICBmdW5jdGlvbiBnZXRSZXNwb25zZSgpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBmZXRjaChcbiAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKFxuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgX19ORVhUX0RBVEFfX1xuICAgICAgICAgIGAvX25leHQvZGF0YS8ke19fTkVYVF9EQVRBX18uYnVpbGRJZH0ke2RlbEJhc2VQYXRoKHBhdGhuYW1lKX0uanNvbmBcbiAgICAgICAgKSxcbiAgICAgICAgcXVlcnksXG4gICAgICB9KSxcbiAgICAgIHtcbiAgICAgICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgICAgIC8vIENvb2tpZXMgbWF5IGFsc28gYmUgcmVxdWlyZWQgZm9yIGBnZXRTZXJ2ZXJTaWRlUHJvcHNgLlxuICAgICAgICAvL1xuICAgICAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgICAgIC8vID4gb3B0aW9uLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgICAgIC8vXG4gICAgICAgIC8vID4gRm9yIG1heGltdW0gYnJvd3NlciBjb21wYXRpYmlsaXR5IHdoZW4gaXQgY29tZXMgdG8gc2VuZGluZyAmXG4gICAgICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAgICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZ2l0aHViL2ZldGNoI2NhdmVhdHNcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICB9XG4gICAgKS50aGVuKChyZXMpID0+IHtcbiAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgIGlmICgtLWF0dGVtcHRzID4gMCAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICAgIHJldHVybiBnZXRSZXNwb25zZSgpXG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICB9KVxuICB9XG5cbiAgcmV0dXJuIGdldFJlc3BvbnNlKClcbiAgICAudGhlbigoZGF0YSkgPT4ge1xuICAgICAgcmV0dXJuIGNiID8gY2IoZGF0YSkgOiBkYXRhXG4gICAgfSlcbiAgICAuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAgIC8vIFdlIHNob3VsZCBvbmx5IHRyaWdnZXIgYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uIGlmIHRoaXMgd2FzIGNhdXNlZFxuICAgICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAgIC8vIGxvb3AuXG4gICAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICAgIDsoZXJyIGFzIGFueSkuY29kZSA9ICdQQUdFX0xPQURfRVJST1InXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cblxuICBzdGF0aWMgZXZlbnRzOiBNaXR0RW1pdHRlciA9IG1pdHQoKVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAge1xuICAgICAgaW5pdGlhbFByb3BzLFxuICAgICAgcGFnZUxvYWRlcixcbiAgICAgIEFwcCxcbiAgICAgIHdyYXBBcHAsXG4gICAgICBDb21wb25lbnQsXG4gICAgICBlcnIsXG4gICAgICBzdWJzY3JpcHRpb24sXG4gICAgICBpc0ZhbGxiYWNrLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIEFwcDogQ29tcG9uZW50VHlwZVxuICAgICAgd3JhcEFwcDogKEFwcDogQ29tcG9uZW50VHlwZSkgPT4gYW55XG4gICAgICBlcnI/OiBFcnJvclxuICAgICAgaXNGYWxsYmFjazogYm9vbGVhblxuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0geyBDb21wb25lbnQ6IEFwcCB9XG5cbiAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgIC8vIFRPRE86IFNob3VsZCBiZSByZW1vdmUgdGhlIGZvbGxvd2luZyBtYWpvciB2ZXJzaW9uIGFzIGl0IHdhcyBuZXZlciBkb2N1bWVudGVkXG4gICAgdGhpcy5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgICB0aGlzLnBhZ2VMb2FkZXIgPSBwYWdlTG9hZGVyXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcbiAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxuICAgIHRoaXMuYXNQYXRoID1cbiAgICAgIC8vIEB0cy1pZ25vcmUgdGhpcyBpcyB0ZW1wb3JhcmlseSBnbG9iYWwgKGF0dGFjaGVkIHRvIHdpbmRvdylcbiAgICAgIGlzRHluYW1pY1JvdXRlKHBhdGhuYW1lKSAmJiBfX05FWFRfREFUQV9fLmF1dG9FeHBvcnQgPyBwYXRobmFtZSA6IGFzXG4gICAgdGhpcy5iYXNlUGF0aCA9IGJhc2VQYXRoXG4gICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb25cbiAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB0aGlzLl93cmFwQXBwID0gd3JhcEFwcFxuICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxuICAgIHRoaXMuaXNTc3IgPSB0cnVlXG5cbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBpc0ZhbGxiYWNrXG5cbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSBcImFzXCIgZG9lc24ndCBzdGFydCB3aXRoIGRvdWJsZSBzbGFzaGVzIG9yIGVsc2UgaXQgY2FuXG4gICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxuICAgICAgaWYgKGFzLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xuICAgICAgICAvLyBpbiBvcmRlciBmb3IgYGUuc3RhdGVgIHRvIHdvcmsgb24gdGhlIGBvbnBvcHN0YXRlYCBldmVudFxuICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBhc1xuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcbiAgICB9XG4gIH1cblxuICAvLyBAZGVwcmVjYXRlZCBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSBldmVuIHRob3VnaCBpdCdzIGEgcHJpdmF0ZSBtZXRob2QuXG4gIHN0YXRpYyBfcmV3cml0ZVVybEZvck5leHRFeHBvcnQodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfRVhQT1JUX1RSQUlMSU5HX1NMQVNIKSB7XG4gICAgICBjb25zdCByZXdyaXRlVXJsRm9yTmV4dEV4cG9ydCA9IHJlcXVpcmUoJy4vcmV3cml0ZS11cmwtZm9yLWV4cG9ydCcpXG4gICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgcmV0dXJuIHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KHVybClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHVybFxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGlmICghZS5zdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAoXG4gICAgICBlLnN0YXRlICYmXG4gICAgICB0aGlzLmlzU3NyICYmXG4gICAgICBlLnN0YXRlLmFzID09PSB0aGlzLmFzUGF0aCAmJlxuICAgICAgcGFyc2UoZS5zdGF0ZS51cmwpLnBhdGhuYW1lID09PSB0aGlzLnBhdGhuYW1lXG4gICAgKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZG93bnN0cmVhbSBhcHBsaWNhdGlvbiByZXR1cm5zIGZhbHN5LCByZXR1cm4uXG4gICAgLy8gVGhleSB3aWxsIHRoZW4gYmUgcmVzcG9uc2libGUgZm9yIGhhbmRsaW5nIHRoZSBldmVudC5cbiAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoZS5zdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHsgdXJsLCBhcywgb3B0aW9ucyB9ID0gZS5zdGF0ZVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHVybCA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIGFzID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ2Bwb3BzdGF0ZWAgZXZlbnQgdHJpZ2dlcmVkIGJ1dCBgZXZlbnQuc3RhdGVgIGRpZCBub3QgaGF2ZSBgdXJsYCBvciBgYXNgIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9wb3BzdGF0ZS1zdGF0ZS1lbXB0eSdcbiAgICAgICAgKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnJlcGxhY2UodXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIHVwZGF0ZShyb3V0ZTogc3RyaW5nLCBtb2Q6IGFueSkge1xuICAgIGNvbnN0IENvbXBvbmVudDogQ29tcG9uZW50VHlwZSA9IG1vZC5kZWZhdWx0IHx8IG1vZFxuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG4gICAgaWYgKCFkYXRhKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENhbm5vdCB1cGRhdGUgdW5hdmFpbGFibGUgcm91dGU6ICR7cm91dGV9YClcbiAgICB9XG5cbiAgICBjb25zdCBuZXdEYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgZGF0YSwge1xuICAgICAgQ29tcG9uZW50LFxuICAgICAgX19OX1NTRzogbW9kLl9fTl9TU0csXG4gICAgICBfX05fU1NQOiBtb2QuX19OX1NTUCxcbiAgICB9KVxuICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSBuZXdEYXRhXG5cbiAgICAvLyBwYWdlcy9fYXBwLmpzIHVwZGF0ZWRcbiAgICBpZiAocm91dGUgPT09ICcvX2FwcCcpIHtcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmIChyb3V0ZSA9PT0gdGhpcy5yb3V0ZSkge1xuICAgICAgdGhpcy5ub3RpZnkobmV3RGF0YSlcbiAgICB9XG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgX3VybDogVXJsLFxuICAgIF9hczogVXJsLFxuICAgIG9wdGlvbnM6IGFueVxuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgaWYgKCFvcHRpb25zLl9oKSB7XG4gICAgICAgIHRoaXMuaXNTc3IgPSBmYWxzZVxuICAgICAgfVxuICAgICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgICAgaWYgKFNUKSB7XG4gICAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICAgIH1cblxuICAgICAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gICAgICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICAgICAgbGV0IHVybCA9IHR5cGVvZiBfdXJsID09PSAnb2JqZWN0JyA/IGZvcm1hdFdpdGhWYWxpZGF0aW9uKF91cmwpIDogX3VybFxuICAgICAgbGV0IGFzID0gdHlwZW9mIF9hcyA9PT0gJ29iamVjdCcgPyBmb3JtYXRXaXRoVmFsaWRhdGlvbihfYXMpIDogX2FzXG5cbiAgICAgIHVybCA9IGFkZEJhc2VQYXRoKHVybClcbiAgICAgIGFzID0gYWRkQmFzZVBhdGgoYXMpXG5cbiAgICAgIC8vIEFkZCB0aGUgZW5kaW5nIHNsYXNoIHRvIHRoZSBwYXRocy4gU28sIHdlIGNhbiBzZXJ2ZSB0aGVcbiAgICAgIC8vIFwiPHBhZ2U+L2luZGV4Lmh0bWxcIiBkaXJlY3RseSBmb3IgdGhlIFNTUiBwYWdlLlxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9FWFBPUlRfVFJBSUxJTkdfU0xBU0gpIHtcbiAgICAgICAgY29uc3QgcmV3cml0ZVVybEZvck5leHRFeHBvcnQgPSByZXF1aXJlKCcuL3Jld3JpdGUtdXJsLWZvci1leHBvcnQnKVxuICAgICAgICAgIC5yZXdyaXRlVXJsRm9yTmV4dEV4cG9ydFxuICAgICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICAgIGlmIChfX05FWFRfREFUQV9fLm5leHRFeHBvcnQpIHtcbiAgICAgICAgICBhcyA9IHJld3JpdGVVcmxGb3JOZXh0RXhwb3J0KGFzKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuYWJvcnRDb21wb25lbnRMb2FkKGFzKVxuXG4gICAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxuXG4gICAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICAgIGlmICghb3B0aW9ucy5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShhcykpIHtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhc1xuICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKVxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgICAgdGhpcy5zY3JvbGxUb0hhc2goYXMpXG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5LCBwcm90b2NvbCB9ID0gcGFyc2UodXJsLCB0cnVlKVxuXG4gICAgICBpZiAoIXBhdGhuYW1lIHx8IHByb3RvY29sKSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYEludmFsaWQgaHJlZiBwYXNzZWQgdG8gcm91dGVyOiAke3VybH0gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2ludmFsaWQtaHJlZi1wYXNzZWRgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKVxuICAgICAgfVxuXG4gICAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXG4gICAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxuICAgICAgaWYgKCF0aGlzLnVybElzTmV3KGFzKSkge1xuICAgICAgICBtZXRob2QgPSAncmVwbGFjZVN0YXRlJ1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZSA9IHRvUm91dGUocGF0aG5hbWUpXG4gICAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IGFzUGF0aG5hbWUgfSA9IHBhcnNlKGFzKVxuICAgICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgICAgY29uc3Qgcm91dGVNYXRjaCA9IGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4KShhc1BhdGhuYW1lKVxuICAgICAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAgIChwYXJhbSkgPT4gIXF1ZXJ5W3BhcmFtXVxuICAgICAgICAgIClcblxuICAgICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGAgZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgICBgdGhlIHBhcmFtczogJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJlamVjdChcbiAgICAgICAgICAgICAgbmV3IEVycm9yKFxuICAgICAgICAgICAgICAgIGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGAgK1xuICAgICAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2luY29tcGF0aWJsZS1ocmVmLWFzYFxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgICAgLy8gSWYgc2hhbGxvdyBpcyB0cnVlIGFuZCB0aGUgcm91dGUgZXhpc3RzIGluIHRoZSByb3V0ZXIgY2FjaGUgd2UgcmV1c2UgdGhlIHByZXZpb3VzIHJlc3VsdFxuICAgICAgdGhpcy5nZXRSb3V0ZUluZm8ocm91dGUsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHNoYWxsb3cpLnRoZW4oXG4gICAgICAgIChyb3V0ZUluZm8pID0+IHtcbiAgICAgICAgICBjb25zdCB7IGVycm9yIH0gPSByb3V0ZUluZm9cblxuICAgICAgICAgIGlmIChlcnJvciAmJiBlcnJvci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKGZhbHNlKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuXG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnN0IGFwcENvbXA6IGFueSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnRcbiAgICAgICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICAgICAhKHJvdXRlSW5mby5Db21wb25lbnQgYXMgYW55KS5nZXRJbml0aWFsUHJvcHNcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVJbmZvKVxuXG4gICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgYXMpXG4gICAgICAgICAgICB0aHJvdyBlcnJvclxuICAgICAgICAgIH1cblxuICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuICAgICAgICAgIHJldHVybiByZXNvbHZlKHRydWUpXG4gICAgICAgIH0sXG4gICAgICAgIHJlamVjdFxuICAgICAgKVxuICAgIH0pXG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgfSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFJvdXRlSW5mbz4ge1xuICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgIC8vIElmIHRoZXJlIGlzIGEgc2hhbGxvdyByb3V0ZSB0cmFuc2l0aW9uIHBvc3NpYmxlXG4gICAgLy8gSWYgdGhlIHJvdXRlIGlzIGFscmVhZHkgcmVuZGVyZWQgb24gdGhlIHNjcmVlbi5cbiAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoY2FjaGVkUm91dGVJbmZvKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZUVycm9yID0gKFxuICAgICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICAgKSA9PiB7XG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgaWYgKGVyci5jb2RlID09PSAnUEFHRV9MT0FEX0VSUk9SJyB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgICAgICAvLyBTbywgd2UgbmVlZCB0byBtYXJrIGl0IGFzIGEgY2FuY2VsbGVkIGVycm9yIGFuZCBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgICAgIGVyci5jYW5jZWxsZWQgPSB0cnVlXG4gICAgICAgICAgLy8gQHRzLWlnbm9yZSBUT0RPOiBmaXggdGhlIGNvbnRyb2wgZmxvdyBoZXJlXG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUoeyBlcnJvcjogZXJyIH0pXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICAgIC8vIEB0cy1pZ25vcmUgVE9ETzogZml4IHRoZSBjb250cm9sIGZsb3cgaGVyZVxuICAgICAgICAgIHJldHVybiByZXNvbHZlKHsgZXJyb3I6IGVyciB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmVzb2x2ZShcbiAgICAgICAgICB0aGlzLmZldGNoQ29tcG9uZW50KCcvX2Vycm9yJylcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyBwYWdlOiBDb21wb25lbnQgfSA9IHJlc1xuICAgICAgICAgICAgICBjb25zdCByb3V0ZUluZm86IFJvdXRlSW5mbyA9IHsgQ29tcG9uZW50LCBlcnIgfVxuICAgICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgfSBhcyBhbnkpLnRoZW4oXG4gICAgICAgICAgICAgICAgICAocHJvcHMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLmVycm9yID0gZXJyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUocm91dGVJbmZvKVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIChnaXBFcnIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAnRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJyxcbiAgICAgICAgICAgICAgICAgICAgICBnaXBFcnJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8uZXJyb3IgPSBlcnJcbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyb3V0ZUluZm8pXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KSBhcyBQcm9taXNlPFJvdXRlSW5mbz5cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4gaGFuZGxlRXJyb3IoZXJyLCB0cnVlKSlcbiAgICAgICAgKVxuICAgICAgfSkgYXMgUHJvbWlzZTxSb3V0ZUluZm8+XG4gICAgfVxuXG4gICAgcmV0dXJuIChuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBpZiAoY2FjaGVkUm91dGVJbmZvKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlKGNhY2hlZFJvdXRlSW5mbylcbiAgICAgIH1cblxuICAgICAgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbihcbiAgICAgICAgKHJlcykgPT5cbiAgICAgICAgICByZXNvbHZlKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSksXG4gICAgICAgIHJlamVjdFxuICAgICAgKVxuICAgIH0pIGFzIFByb21pc2U8Um91dGVJbmZvPilcbiAgICAgIC50aGVuKChyb3V0ZUluZm86IFJvdXRlSW5mbykgPT4ge1xuICAgICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl9nZXREYXRhPFJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgICBfX05fU1NHXG4gICAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoYXMpXG4gICAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShhcylcbiAgICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgICAgKVxuICAgICAgICApLnRoZW4oKHByb3BzKSA9PiB7XG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChoYW5kbGVFcnJvcilcbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFJvdXRlSW5mb1xuICApOiB2b2lkIHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHByb3RvY29sIH0gPSBwYXJzZSh1cmwpXG5cbiAgICAgIGlmICghcGF0aG5hbWUgfHwgcHJvdG9jb2wpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgSW52YWxpZCBocmVmIHBhc3NlZCB0byByb3V0ZXI6ICR7dXJsfSBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvaW52YWxpZC1ocmVmLXBhc3NlZGBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgY29uc3Qgcm91dGUgPSBkZWxCYXNlUGF0aCh0b1JvdXRlKHBhdGhuYW1lKSlcbiAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyLnByZWZldGNoRGF0YSh1cmwsIGRlbEJhc2VQYXRoKGFzUGF0aCkpLFxuICAgICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksXG4gICAgICBdKS50aGVuKCgpID0+IHJlc29sdmUoKSwgcmVqZWN0KVxuICAgIH0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxDb21wb25lbnRSZXM+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAodGhpcy5jbGMgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfSlcbiAgICByb3V0ZSA9IGRlbEJhc2VQYXRoKHJvdXRlKVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhID0gKGFzUGF0aDogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+ID0+IHtcbiAgICBjb25zdCBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZShwYXJzZShhc1BhdGgpLnBhdGhuYW1lISlcblxuICAgIHJldHVybiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW3BhdGhuYW1lXVxuICAgICAgPyBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbcGF0aG5hbWVdKVxuICAgICAgOiBmZXRjaE5leHREYXRhKFxuICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgIG51bGwsXG4gICAgICAgICAgdGhpcy5pc1NzcixcbiAgICAgICAgICAoZGF0YSkgPT4gKHRoaXMuc2RjW3BhdGhuYW1lXSA9IGRhdGEpXG4gICAgICAgIClcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhID0gKGFzUGF0aDogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+ID0+IHtcbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlKGFzUGF0aCwgdHJ1ZSlcbiAgICBwYXRobmFtZSA9IHByZXBhcmVSb3V0ZShwYXRobmFtZSEpXG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEocGF0aG5hbWUsIHF1ZXJ5LCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcClcbiAgICBjdHguQXBwVHJlZSA9IEFwcFRyZWVcbiAgICByZXR1cm4gbG9hZEdldEluaXRpYWxQcm9wczxBcHBDb250ZXh0VHlwZTxSb3V0ZXI+PihBcHAsIHtcbiAgICAgIEFwcFRyZWUsXG4gICAgICBDb21wb25lbnQsXG4gICAgICByb3V0ZXI6IHRoaXMsXG4gICAgICBjdHgsXG4gICAgfSlcbiAgfVxuXG4gIGFib3J0Q29tcG9uZW50TG9hZChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuY2xjKSB7XG4gICAgICBjb25zdCBlID0gbmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKVxuICAgICAgOyhlIGFzIGFueSkuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUm91dGVJbmZvKTogdm9pZCB7XG4gICAgdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsIi8vIHRoaXMgaXNuJ3QgaW1wb3J0aW5nIHRoZSBlc2NhcGUtc3RyaW5nLXJlZ2V4IG1vZHVsZVxuLy8gdG8gcmVkdWNlIGJ5dGVzXG5mdW5jdGlvbiBlc2NhcGVSZWdleChzdHI6IHN0cmluZykge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoL1t8XFxcXHt9KClbXFxdXiQrKj8uLV0vZywgJ1xcXFwkJicpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZVJlZ2V4KFxuICBub3JtYWxpemVkUm91dGU6IHN0cmluZ1xuKToge1xuICByZTogUmVnRXhwXG4gIG5hbWVkUmVnZXg/OiBzdHJpbmdcbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IHsgcG9zOiBudW1iZXI7IHJlcGVhdDogYm9vbGVhbiB9IH1cbn0ge1xuICAvLyBFc2NhcGUgYWxsIGNoYXJhY3RlcnMgdGhhdCBjb3VsZCBiZSBjb25zaWRlcmVkIFJlZ0V4XG4gIGNvbnN0IGVzY2FwZWRSb3V0ZSA9IGVzY2FwZVJlZ2V4KG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogeyBwb3M6IG51bWJlcjsgcmVwZWF0OiBib29sZWFuIH0gfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IGVzY2FwZWRSb3V0ZS5yZXBsYWNlKFxuICAgIC9cXC9cXFxcXFxbKFteL10rPylcXFxcXFxdKD89XFwvfCQpL2csXG4gICAgKF8sICQxKSA9PiB7XG4gICAgICBjb25zdCBpc09wdGlvbmFsID0gL15cXFxcXFxbLipcXFxcXFxdJC8udGVzdCgkMSlcbiAgICAgIGlmIChpc09wdGlvbmFsKSB7XG4gICAgICAgICQxID0gJDEuc2xpY2UoMiwgLTIpXG4gICAgICB9XG4gICAgICBjb25zdCBpc0NhdGNoQWxsID0gL14oXFxcXFxcLil7M30vLnRlc3QoJDEpXG4gICAgICBpZiAoaXNDYXRjaEFsbCkge1xuICAgICAgICAkMSA9ICQxLnNsaWNlKDYpXG4gICAgICB9XG4gICAgICBncm91cHNbXG4gICAgICAgICQxXG4gICAgICAgICAgLy8gVW4tZXNjYXBlIGtleVxuICAgICAgICAgIC5yZXBsYWNlKC9cXFxcKFt8XFxcXHt9KClbXFxdXiQrKj8uLV0pL2csICckMScpXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgIF0gPSB7IHBvczogZ3JvdXBJbmRleCsrLCByZXBlYXQ6IGlzQ2F0Y2hBbGwgfVxuICAgICAgcmV0dXJuIGlzQ2F0Y2hBbGwgPyAoaXNPcHRpb25hbCA/ICcoPzovKC4rPykpPycgOiAnLyguKz8pJykgOiAnLyhbXi9dKz8pJ1xuICAgIH1cbiAgKVxuXG4gIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZTogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIG5hbWVkUGFyYW1ldGVyaXplZFJvdXRlID0gZXNjYXBlZFJvdXRlLnJlcGxhY2UoXG4gICAgICAvXFwvXFxcXFxcWyhbXi9dKz8pXFxcXFxcXSg/PVxcL3wkKS9nLFxuICAgICAgKF8sICQxKSA9PiB7XG4gICAgICAgIGNvbnN0IGlzQ2F0Y2hBbGwgPSAvXihcXFxcXFwuKXszfS8udGVzdCgkMSlcbiAgICAgICAgY29uc3Qga2V5ID0gJDFcbiAgICAgICAgICAvLyBVbi1lc2NhcGUga2V5XG4gICAgICAgICAgLnJlcGxhY2UoL1xcXFwoW3xcXFxce30oKVtcXF1eJCsqPy4tXSkvZywgJyQxJylcbiAgICAgICAgICAucmVwbGFjZSgvXlxcLnszfS8sICcnKVxuXG4gICAgICAgIHJldHVybiBpc0NhdGNoQWxsXG4gICAgICAgICAgPyBgLyg/PCR7ZXNjYXBlUmVnZXgoa2V5KX0+Lis/KWBcbiAgICAgICAgICA6IGAvKD88JHtlc2NhcGVSZWdleChrZXkpfT5bXi9dKz8pYFxuICAgICAgfVxuICAgIClcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoJ14nICsgcGFyYW1ldGVyaXplZFJvdXRlICsgJyg/Oi8pPyQnLCAnaScpLFxuICAgIGdyb3VwcyxcbiAgICBuYW1lZFJlZ2V4OiBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZVxuICAgICAgPyBgXiR7bmFtZWRQYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGBcbiAgICAgIDogdW5kZWZpbmVkLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBmb3JtYXQsIFVSTEZvcm1hdE9wdGlvbnMsIFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnLi4vLi4vbGliL2xvYWQtZW52LWNvbmZpZydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogYW55XG4gIHBhZ2U6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYnVpbGRJZDogc3RyaW5nXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIHJ1bnRpbWVDb25maWc/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9XG4gIG5leHRFeHBvcnQ/OiBib29sZWFuXG4gIGF1dG9FeHBvcnQ/OiBib29sZWFuXG4gIGlzRmFsbGJhY2s/OiBib29sZWFuXG4gIGR5bmFtaWNJZHM/OiBzdHJpbmdbXVxuICBlcnI/OiBFcnJvciAmIHsgc3RhdHVzQ29kZT86IG51bWJlciB9XG4gIGdzcD86IGJvb2xlYW5cbiAgZ3NzcD86IGJvb2xlYW5cbiAgY3VzdG9tU2VydmVyPzogYm9vbGVhblxuICBnaXA/OiBib29sZWFuXG4gIGFwcEdpcD86IGJvb2xlYW5cbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmUgaW50ZXJmYWNlLW5hbWVcbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgYW1wUGF0aDogc3RyaW5nXG4gIGluQW1wTW9kZTogYm9vbGVhblxuICBoeWJyaWRBbXA6IGJvb2xlYW5cbiAgc3RhdGljTWFya3VwOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZGV2RmlsZXM6IHN0cmluZ1tdXG4gIGZpbGVzOiBzdHJpbmdbXVxuICBsb3dQcmlvcml0eUZpbGVzOiBzdHJpbmdbXVxuICBwb2x5ZmlsbEZpbGVzOiBzdHJpbmdbXVxuICBkeW5hbWljSW1wb3J0czogTWFuaWZlc3RJdGVtW11cbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgY2Fub25pY2FsQmFzZTogc3RyaW5nXG4gIGh0bWxQcm9wczogYW55XG4gIGJvZHlUYWdzOiBhbnlbXVxuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2Vcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcbn1cblxuLyoqXG4gKiBTZW5kIGJvZHkgb2YgcmVzcG9uc2VcbiAqL1xudHlwZSBTZW5kPFQ+ID0gKGJvZHk6IFQpID0+IHZvaWRcblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlc3BvbnNlXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlSZXNwb25zZTxUID0gYW55PiA9IFNlcnZlclJlc3BvbnNlICYge1xuICAvKipcbiAgICogU2VuZCBkYXRhIGBhbnlgIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIHNlbmQ6IFNlbmQ8VD5cbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBganNvbmAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAganNvbjogU2VuZDxUPlxuICBzdGF0dXM6IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL2dldC1pbml0aWFsLXByb3BzLWFzLWFuLWluc3RhbmNlLW1ldGhvZCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5gXG4gICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgICB9XG4gIH1cbiAgLy8gd2hlbiBjYWxsZWQgZnJvbSBfYXBwIGBjdHhgIGlzIG5lc3RlZCBpbiBgY3R4YFxuICBjb25zdCByZXMgPSBjdHgucmVzIHx8IChjdHguY3R4ICYmIGN0eC5jdHgucmVzKVxuXG4gIGlmICghQXBwLmdldEluaXRpYWxQcm9wcykge1xuICAgIGlmIChjdHguY3R4ICYmIGN0eC5Db21wb25lbnQpIHtcbiAgICAgIC8vIEB0cy1pZ25vcmUgcGFnZVByb3BzIGRlZmF1bHRcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHBhZ2VQcm9wczogYXdhaXQgbG9hZEdldEluaXRpYWxQcm9wcyhjdHguQ29tcG9uZW50LCBjdHguY3R4KSxcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHt9IGFzIElQXG4gIH1cblxuICBjb25zdCBwcm9wcyA9IGF3YWl0IEFwcC5nZXRJbml0aWFsUHJvcHMoY3R4KVxuXG4gIGlmIChyZXMgJiYgaXNSZXNTZW50KHJlcykpIHtcbiAgICByZXR1cm4gcHJvcHNcbiAgfVxuXG4gIGlmICghcHJvcHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgIEFwcFxuICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgc2hvdWxkIHJlc29sdmUgdG8gYW4gb2JqZWN0LiBCdXQgZm91bmQgXCIke3Byb3BzfVwiIGluc3RlYWQuYFxuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvcHMpLmxlbmd0aCA9PT0gMCAmJiAhY3R4LmN0eCkge1xuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICBgJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgICBBcHBcbiAgICAgICAgKX0gcmV0dXJuZWQgYW4gZW1wdHkgb2JqZWN0IGZyb20gXFxgZ2V0SW5pdGlhbFByb3BzXFxgLiBUaGlzIGRlLW9wdGltaXplcyBhbmQgcHJldmVudHMgYXV0b21hdGljIHN0YXRpYyBvcHRpbWl6YXRpb24uIGh0dHBzOi8vZXJyLnNoL3plaXQvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICB1cmw6IFVybE9iamVjdCxcbiAgb3B0aW9ucz86IFVSTEZvcm1hdE9wdGlvbnNcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICBpZiAodXJsICE9PSBudWxsICYmIHR5cGVvZiB1cmwgPT09ICdvYmplY3QnKSB7XG4gICAgICBPYmplY3Qua2V5cyh1cmwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBpZiAodXJsT2JqZWN0S2V5cy5pbmRleE9mKGtleSkgPT09IC0xKSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgYFVua25vd24ga2V5IHBhc3NlZCB2aWEgdXJsT2JqZWN0IGludG8gdXJsLmZvcm1hdDogJHtrZXl9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZm9ybWF0KHVybCBhcyBVUkwsIG9wdGlvbnMpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJpbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL25hdmlnYXRpb24nO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyJztcclxuaW1wb3J0IExhbmRpbmdjb250ZW50IGZyb20gJy4uL2NvbXBvbmVudHMvbGFuZGluZ2NvbnRlbnQnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgRGFzaGJvYXJkaGVhZGluZyBmcm9tICcuLi9jb21wb25lbnRzL0Rhc2hib2FyZC9kYXNoYm9hcmRoZWFkaW5nJztcclxuaW1wb3J0IERhc2hib2FyZGNvbnRlbnQgZnJvbSAnLi4vY29tcG9uZW50cy9EYXNoYm9hcmQvZGFzaGJvYXJkY29udGVudCc7XHJcblxyXG5jb25zdCBJbmRleCA9KCkgPT4gKFxyXG48ZGl2PlxyXG48SGVhZD5cclxuPHRpdGxlPk1haW4gUGFnZSA8L3RpdGxlPlxyXG48bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cIi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vc2VtYW50aWMtdWlAMi40LjIvZGlzdC9zZW1hbnRpYy5taW4uY3NzXCIgLz5cclxuPC9IZWFkPlxyXG48bWFpbj5cclxuPE5hdmlnYXRpb24vPiBcclxuXHJcbjxMYW5kaW5nY29udGVudC8+XHJcblxyXG48Rm9vdGVyLz5cclxuXHJcbjwvbWFpbj5cclxuPC9kaXY+XHJcblx0KVxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaGlnaGNoYXJ0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJoaWdoY2hhcnRzLXJlYWN0LW9mZmljaWFsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImhpZ2hjaGFydHMvbW9kdWxlcy9leHBvcnRpbmdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInByb3AtdHlwZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlcy1leGFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZW1hbnRpYy11aS1yZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInVybFwiKTsiXSwic291cmNlUm9vdCI6IiJ9