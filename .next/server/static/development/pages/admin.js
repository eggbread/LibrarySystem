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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _pages_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/Header */ "./pages/Header.js");
var _jsxFileName = "C:\\Users\\gyeongmin\\LibrarySystem\\components\\Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Layout = props => __jsx("div", {
  style: {
    width: "100%"
  },
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("link", {
  rel: "stylesheet",
  href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
  integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
  crossorigin: "anonymous",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}), __jsx(_pages_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}), props.children);

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptors */ "core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./pages/Header.js":
/*!*************************!*\
  !*** ./pages/Header.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_headerHook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hooks/headerHook */ "./pages/hooks/headerHook.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\gyeongmin\\LibrarySystem\\pages\\Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Header = () => {
  const [modal, dispatchModal] = Object(_hooks_headerHook__WEBPACK_IMPORTED_MODULE_2__["default"])("modal");
  const [SI, dispatchSI] = Object(_hooks_headerHook__WEBPACK_IMPORTED_MODULE_2__["default"])("signin");
  const [SU, dispatchSU] = Object(_hooks_headerHook__WEBPACK_IMPORTED_MODULE_2__["default"])("signup");
  const [isLogin, setLogin] = Object(_hooks_headerHook__WEBPACK_IMPORTED_MODULE_2__["default"])("isLogin");
  const {
    0: validatedSU,
    1: setValidatedSU
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: validatedUD,
    1: setValidatedUD
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const [userData, dispatchUserData] = Object(_hooks_headerHook__WEBPACK_IMPORTED_MODULE_2__["default"])("userdata");

  const SignIn = async (userId, userPw) => {
    var check = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("http://localhost:4000/signin", {
      userId: userId,
      userPw: userPw
    });

    if (!check.data) {
      alert("Login Fault");
    } else {
      setLogin(check.data);
    }
  };

  const handleSubmitSU = async event => {
    console.log(event.target.value);
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      const data = SU;
      console.log(data);
      var check = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("http://localhost:4000/signup", {
        userId: data.userId,
        userPw: data.userPw,
        userName: data.userName,
        userEmail: data.userEmail,
        userPhone: data.userPhone,
        userJob: data.userJob
      });
    }

    setValidatedSU(true);
  };

  const handleSubmitUserData = async event => {
    console.log(event.target.value);
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      const data = userData;
      console.log(data);
      var check = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("http://localhost:4000/mypage/fix", {
        userId: data.userId,
        userPw: data.userPw,
        userName: data.userName,
        userEmail: data.userEmail,
        userPhone: data.userPhone,
        userJob: data.userJob
      });
    }

    setValidatedUD(true);
  };

  const SignUp = async data => {
    var check = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("http://localhost:4000/signup", {
      userId: data.userId,
      userPw: data.userPw,
      userName: data.userName,
      userEmail: data.userEmail,
      userPhone: data.userPhone,
      userJob: data.userJob
    });
  };

  var loginBtn;

  if (!isLogin) {
    loginBtn = __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: undefined
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      style: {
        margin: "0 10px"
      },
      variant: "dark",
      onClick: () => dispatchModal("openSI"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: undefined
    }, "Sign in"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      variant: "dark",
      onClick: () => dispatchModal("openSU"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: undefined
    }, "Sign up"));
  } else {
    loginBtn = __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: undefined
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
      style: {
        color: "white"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: undefined
    }, isLogin + "'s"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      variant: "dark",
      onClick: async () => {
        var check = await axios__WEBPACK_IMPORTED_MODULE_3___default.a.post("http://localhost:4000/mypage", {// userId: data.userId,
          // userPw: data.userPw,
          // userName: data.userName,
          // userEmail: data.userEmail,
          // userPhone: data.userPhone,
          // userJob: data.userJob
        });

        if (check.data) {
          dispatchUserData({
            type: "setName",
            userName: check.data.userName
          });
          dispatchUserData({
            type: "setJob",
            userJob: "Master"
          });
          dispatchUserData({
            type: "setList",
            userList: check.data.listData
          });
          dispatchModal("openMP");
        } else {
          alert("Can't find User data");
        }
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: undefined
    }, "My Page"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      variant: "dark",
      onClick: () => setLogin(false),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137
      },
      __self: undefined
    }, "Log out"));
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"], {
    bg: "dark",
    variant: "dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Navbar"].Brand, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: undefined
  }, "CNU Library"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"], {
    className: "mr-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Link, {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: undefined
  }, "Home"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Link, {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: undefined
  }, "about"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Nav"].Link, {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: undefined
  }, "Contact")), loginBtn), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    show: modal.showMP,
    onHide: () => dispatchModal("hideMP"),
    onEnter: () => {
      console.log(userData);
    },
    size: "xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Header, {
    closeButton: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: undefined
  }, "My Page")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    noValidate: true,
    validated: validatedUD,
    onSubmit: handleSubmitUserData,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    controlId: "validationCustom01",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
    },
    __self: undefined
  }, "ID"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    required: true,
    type: "text",
    placeholder: "ID",
    defaultValue: userData.userName,
    onInput: ref => dispatchUserData({
      type: "setId",
      userId: ref.target.value
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: undefined
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control.Feedback, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: undefined
  }, "Looks good!")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    controlId: "validationCustom02",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
    },
    __self: undefined
  }, "Password"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    required: true,
    type: "text",
    placeholder: "Password",
    defaultValue: userData.userName,
    onInput: ref => dispatchUserData({
      type: "setPw",
      userPw: ref.target.value
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: undefined
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control.Feedback, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: undefined
  }, "Looks good!"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    controlId: "validationCustomUsername",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: undefined
  }, "Username"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    placeholder: "Username",
    "aria-describedby": "inputGroupPrepend",
    required: true,
    defaultValue: userData.userName,
    onInput: ref => dispatchUserData({
      type: "setName",
      userName: ref.target.value
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: undefined
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control.Feedback, {
    type: "invalid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: undefined
  }, "Please choose a username."))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    controlId: "validationCustom03",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: undefined
  }, "Email"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    placeholder: "Email",
    required: true,
    defaultValue: userData.userName,
    onInput: ref => dispatchUserData({
      type: "setEmail",
      userEmail: ref.target.value
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 231
    },
    __self: undefined
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control.Feedback, {
    type: "invalid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: undefined
  }, "Please provide a valid city."))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    md: "6",
    controlId: "validationCustom04",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
    },
    __self: undefined
  }, "Phone"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    placeholder: "Phone",
    required: true,
    defaultValue: userData.userName,
    onInput: ref => dispatchUserData({
      type: "setPhone",
      userPhone: ref.target.value
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251
    },
    __self: undefined
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control.Feedback, {
    type: "invalid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263
    },
    __self: undefined
  }, "Please provide a valid state.")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    md: "6",
    controlId: "validationCustom05",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: undefined
  }, "Job"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    as: "select",
    value: userData.userJob,
    onChange: ref => dispatchUserData({
      type: "setJob",
      userJob: ref.target.value
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269
    },
    __self: undefined
  }, __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279
    },
    __self: undefined
  }, "Bachelor"), __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280
    },
    __self: undefined
  }, "Master"), __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281
    },
    __self: undefined
  }, "Staff")))), __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285
    },
    __self: undefined
  }, "My Book List"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286
    },
    __self: undefined
  }, __jsx("thead", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287
    },
    __self: undefined
  }, __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288
    },
    __self: undefined
  }, __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289
    },
    __self: undefined
  }, "Title"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290
    },
    __self: undefined
  }, "Author"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291
    },
    __self: undefined
  }, "Company"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292
    },
    __self: undefined
  }, "ISBN"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293
    },
    __self: undefined
  }, "Start Date"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294
    },
    __self: undefined
  }, "End Date"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295
    },
    __self: undefined
  }, "Return"))), __jsx("tbody", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298
    },
    __self: undefined
  }, userData.userList.map(data => __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 300
    },
    __self: undefined
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301
    },
    __self: undefined
  }, data.title), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302
    },
    __self: undefined
  }, data.author), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303
    },
    __self: undefined
  }, data.company), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 304
    },
    __self: undefined
  }, data.ISBN), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305
    },
    __self: undefined
  }, data.startDate), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306
    },
    __self: undefined
  }, data.endDate), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 308
    },
    __self: undefined
  }, "Return")))))), __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314
    },
    __self: undefined
  }, "My Reservation"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Table"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315
    },
    __self: undefined
  }, __jsx("thead", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316
    },
    __self: undefined
  }, __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317
    },
    __self: undefined
  }, __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318
    },
    __self: undefined
  }, "Title"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319
    },
    __self: undefined
  }, "Author"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320
    },
    __self: undefined
  }, "Company"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321
    },
    __self: undefined
  }, "ISBN"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322
    },
    __self: undefined
  }, "Start Date"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323
    },
    __self: undefined
  }, "End Date"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324
    },
    __self: undefined
  }, "Return"))), __jsx("tbody", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327
    },
    __self: undefined
  }, userData.userList.map(data => __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329
    },
    __self: undefined
  }, __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330
    },
    __self: undefined
  }, data.title), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 331
    },
    __self: undefined
  }, data.author), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 332
    },
    __self: undefined
  }, data.company), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 333
    },
    __self: undefined
  }, data.ISBN), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 334
    },
    __self: undefined
  }, data.startDate), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 335
    },
    __self: undefined
  }, data.endDate), __jsx("td", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 336
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 337
    },
    __self: undefined
  }, "Return")))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "danger",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343
    },
    __self: undefined
  }, "User Secession"), " ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343
    },
    __self: undefined
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "secondary",
    onClick: () => dispatchModal("hideSU"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344
    },
    __self: undefined
  }, "Close"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347
    },
    __self: undefined
  }, "Submit"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Footer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350
    },
    __self: undefined
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    show: modal.showSI,
    onHide: () => dispatchModal("hideSI"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Header, {
    closeButton: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355
    },
    __self: undefined
  }, "Sign In")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    controlId: "formBasicEmail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360
    },
    __self: undefined
  }, "ID"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    placeholder: "Enter ID",
    onInput: ref => dispatchSI({
      type: "setId",
      userId: ref.target.value
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 361
    },
    __self: undefined
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    controlId: "formBasicPassword",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371
    },
    __self: undefined
  }, "Password"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "password",
    placeholder: "Password",
    onInput: ref => dispatchSI({
      type: "setPw",
      userPw: ref.target.value
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 372
    },
    __self: undefined
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    controlId: "formBasicCheckbox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "checkbox",
    label: "Check me out",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381
    },
    __self: undefined
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Footer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "secondary",
    onClick: () => dispatchModal("hideSI"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386
    },
    __self: undefined
  }, "Close"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "primary",
    type: "submit",
    onClick: async ref => {
      if (SI.userId && SI.userPw) {
        await SignIn(SI.userId, SI.userPw);
      }

      dispatchModal("hideSI");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 389
    },
    __self: undefined
  }, "Submit"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"], {
    show: modal.showSU,
    onHide: () => dispatchModal("hideSU"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Header, {
    closeButton: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406
    },
    __self: undefined
  }, "Sign Up")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    noValidate: true,
    validated: validatedSU,
    onSubmit: handleSubmitSU,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    controlId: "validationCustom01",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412
    },
    __self: undefined
  }, "ID"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    required: true,
    type: "text",
    placeholder: "ID",
    onInput: ref => dispatchSU({
      type: "setId",
      userId: ref.target.value
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413
    },
    __self: undefined
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control.Feedback, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 421
    },
    __self: undefined
  }, "Looks good!")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    controlId: "validationCustom02",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425
    },
    __self: undefined
  }, "Password"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    required: true,
    type: "text",
    placeholder: "Password",
    onInput: ref => dispatchSU({
      type: "setPw",
      userPw: ref.target.value
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 426
    },
    __self: undefined
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control.Feedback, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434
    },
    __self: undefined
  }, "Looks good!"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    controlId: "validationCustomUsername",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439
    },
    __self: undefined
  }, "Username"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["InputGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    placeholder: "Username",
    "aria-describedby": "inputGroupPrepend",
    required: true,
    onInput: ref => dispatchSU({
      type: "setName",
      userName: ref.target.value
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 441
    },
    __self: undefined
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control.Feedback, {
    type: "invalid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 453
    },
    __self: undefined
  }, "Please choose a username."))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    controlId: "validationCustom03",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 458
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 459
    },
    __self: undefined
  }, "Email"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    placeholder: "Email",
    required: true,
    onInput: ref => dispatchSU({
      type: "setEmail",
      userEmail: ref.target.value
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 460
    },
    __self: undefined
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control.Feedback, {
    type: "invalid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471
    },
    __self: undefined
  }, "Please provide a valid city."))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 476
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    md: "6",
    controlId: "validationCustom04",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 477
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 478
    },
    __self: undefined
  }, "Phone"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    placeholder: "Phone",
    required: true,
    onInput: ref => dispatchSU({
      type: "setPhone",
      userPhone: ref.target.value
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 479
    },
    __self: undefined
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control.Feedback, {
    type: "invalid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 490
    },
    __self: undefined
  }, "Please provide a valid state.")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Col"],
    md: "6",
    controlId: "validationCustom05",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 494
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 495
    },
    __self: undefined
  }, "Job"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    as: "select",
    onChange: ref => dispatchSU({
      type: "setJob",
      userJob: ref.target.value
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 496
    },
    __self: undefined
  }, __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 502
    },
    __self: undefined
  }, "Bachelor"), __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 503
    },
    __self: undefined
  }, "Master"), __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 504
    },
    __self: undefined
  }, "Staff")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "secondary",
    onClick: () => dispatchModal("hideSU"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 508
    },
    __self: undefined
  }, "Close"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 511
    },
    __self: undefined
  }, "Submit form"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Modal"].Footer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 514
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./pages/admin.js":
/*!************************!*\
  !*** ./pages/admin.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "react-bootstrap");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _hooks_headerHook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hooks/headerHook */ "./pages/hooks/headerHook.js");
var _jsxFileName = "C:\\Users\\gyeongmin\\LibrarySystem\\pages\\admin.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Admin = () => {
  const [SI, dispatchSI] = Object(_hooks_headerHook__WEBPACK_IMPORTED_MODULE_3__["default"])("signin");
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    controlId: "formBasicEmail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, "ID"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "text",
    placeholder: "Enter ID",
    onInput: ref => dispatchSI({
      type: "setId",
      userId: ref.target.value
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    controlId: "formBasicPassword",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, "Password"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Control, {
    type: "password",
    placeholder: "Password",
    onInput: ref => dispatchSI({
      type: "setPw",
      userPw: ref.target.value
    }),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Group, {
    controlId: "formBasicCheckbox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Form"].Check, {
    type: "checkbox",
    label: "Check me out",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "secondary",
    onClick: () => dispatchModal("hideSI"),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, "Close"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "primary",
    type: "submit",
    onClick: async ref => {
      if (SI.userId && SI.userPw) {
        await SignIn(SI.userId, SI.userPw);
      }

      dispatchModal("hideSI");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, "Submit")));
};

/* harmony default export */ __webpack_exports__["default"] = (Admin);

/***/ }),

/***/ "./pages/hooks/headerHook.js":
/*!***********************************!*\
  !*** ./pages/hooks/headerHook.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(source).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }




const SingUp = () => {};

const initialState = {
  isLogin: false,
  modal: {
    showSI: false,
    showSU: false,
    showMP: false
  },
  signin: {
    userId: "",
    userPw: ""
  },
  signup: {
    userId: "",
    userPw: "",
    userName: "",
    userEmail: "",
    userPhone: "",
    userJob: "Bachelor"
  },
  userdata: {
    userId: "",
    userPw: "",
    userName: "",
    userEmail: "",
    userPhone: "",
    userJob: "",
    userList: []
  }
};

const modalReducer = (state, action) => {
  switch (action) {
    case "openSI":
      {
        return _objectSpread({}, state, {
          showSI: true
        });
      }

    case "openSU":
      {
        return _objectSpread({}, state, {
          showSU: true
        });
      }

    case "openMP":
      {
        return _objectSpread({}, state, {
          showMP: true
        });
      }

    case "hideSI":
      {
        return _objectSpread({}, state, {
          showSI: false
        });
      }

    case "hideSU":
      {
        return _objectSpread({}, state, {
          showSU: false
        });
      }

    case "hideMP":
      {
        return _objectSpread({}, state, {
          showMP: false
        });
      }

    default:
      {
        throw new Error("Error");
      }
  }
};

const signinReducer = (state, action) => {
  switch (action.type) {
    case "setId":
      {
        return _objectSpread({}, state, {
          userId: action.userId
        });
      }

    case "setPw":
      {
        return _objectSpread({}, state, {
          userPw: action.userPw
        });
      }

    case "setData":
      {
        if (!(state.userId && state.userPw)) {
          return false;
        }

        return SignIn(state.userId, state.userPw);
      }

    default:
      {
        throw new Error("Error");
      }
  }
};

const userdataReducer = (state, action) => {
  switch (action.type) {
    case "all":
      {
        return _objectSpread({}, state, {}, action);
      }

    case "setId":
      {
        return _objectSpread({}, state, {
          userId: action.userId
        });
      }

    case "setPw":
      {
        return _objectSpread({}, state, {
          userPw: action.userPw
        });
      }

    case "setName":
      {
        return _objectSpread({}, state, {
          userName: action.userName
        });
      }

    case "setEmail":
      {
        return _objectSpread({}, state, {
          userEmail: action.userEmail
        });
      }

    case "setPhone":
      {
        return _objectSpread({}, state, {
          userPhone: action.userPhone
        });
      }

    case "setJob":
      {
        return _objectSpread({}, state, {
          userJob: action.userJob
        });
      }

    case "setList":
      {
        return _objectSpread({}, state, {
          userList: action.userList
        });
      }

    default:
      {
        throw new Error("Error");
      }
  }
};

const signupReducer = (state, action) => {
  switch (action.type) {
    case "setId":
      {
        return _objectSpread({}, state, {
          userId: action.userId
        });
      }

    case "setPw":
      {
        return _objectSpread({}, state, {
          userPw: action.userPw
        });
      }

    case "setName":
      {
        return _objectSpread({}, state, {
          userName: action.userName
        });
      }

    case "setEmail":
      {
        return _objectSpread({}, state, {
          userEmail: action.userEmail
        });
      }

    case "setPhone":
      {
        return _objectSpread({}, state, {
          userPhone: action.userPhone
        });
      }

    case "setJob":
      {
        return _objectSpread({}, state, {
          userJob: action.userJob
        });
      }

    default:
      {
        throw new Error("Error");
      }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (type => {
  switch (type) {
    case "isLogin":
      {
        return Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(false);
      }

    case "modal":
      {
        return Object(react__WEBPACK_IMPORTED_MODULE_7__["useReducer"])(modalReducer, initialState.modal);
      }

    case "signin":
      {
        return Object(react__WEBPACK_IMPORTED_MODULE_7__["useReducer"])(signinReducer, initialState.signin);
      }

    case "signup":
      {
        return Object(react__WEBPACK_IMPORTED_MODULE_7__["useReducer"])(signupReducer, initialState.signup);
      }

    case "userdata":
      {
        return Object(react__WEBPACK_IMPORTED_MODULE_7__["useReducer"])(userdataReducer, initialState.userdata);
      }
  }
});

/***/ }),

/***/ 6:
/*!******************************!*\
  !*** multi ./pages/admin.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\gyeongmin\LibrarySystem\pages\admin.js */"./pages/admin.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptors":
/*!*************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptors" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-bootstrap":
/*!**********************************!*\
  !*** external "react-bootstrap" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-bootstrap");

/***/ })

/******/ });
//# sourceMappingURL=admin.js.map