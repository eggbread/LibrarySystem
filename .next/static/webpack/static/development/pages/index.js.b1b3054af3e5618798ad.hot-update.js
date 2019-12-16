webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/Header.js":
/*!*************************!*\
  !*** ./pages/Header.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _hooks_headerHook__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hooks/headerHook */ "./pages/hooks/headerHook.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_6__);



var _jsxFileName = "C:\\Users\\gyeongmin\\LibrarySystem\\pages\\Header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;





var Header = function Header() {
  var _useData = Object(_hooks_headerHook__WEBPACK_IMPORTED_MODULE_5__["default"])("modal"),
      _useData2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useData, 2),
      modal = _useData2[0],
      dispatchModal = _useData2[1];

  var _useData3 = Object(_hooks_headerHook__WEBPACK_IMPORTED_MODULE_5__["default"])("signin"),
      _useData4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useData3, 2),
      SI = _useData4[0],
      dispatchSI = _useData4[1];

  var _useData5 = Object(_hooks_headerHook__WEBPACK_IMPORTED_MODULE_5__["default"])("signup"),
      _useData6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useData5, 2),
      SU = _useData6[0],
      dispatchSU = _useData6[1];

  var _useData7 = Object(_hooks_headerHook__WEBPACK_IMPORTED_MODULE_5__["default"])("isLogin"),
      _useData8 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useData7, 2),
      isLogin = _useData8[0],
      setLogin = _useData8[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      validatedSU = _useState[0],
      setValidatedSU = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      validatedUD = _useState2[0],
      setValidatedUD = _useState2[1];

  var _useData9 = Object(_hooks_headerHook__WEBPACK_IMPORTED_MODULE_5__["default"])("userdata"),
      _useData10 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useData9, 2),
      userData = _useData10[0],
      dispatchUserData = _useData10[1];

  var SignIn =
  /*#__PURE__*/
  function () {
    var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(userId, userPw) {
      var check;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_6___default.a.post("http://localhost:4000/signin", {
                userId: userId,
                userPw: userPw
              });

            case 2:
              check = _context.sent;

              if (!check.data) {
                alert("Login Fault");
              } else {
                setLogin(check.data);
              }

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function SignIn(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  var handleSubmitSU =
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(event) {
      var form, data, check;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              console.log(event.target.value);
              form = event.currentTarget;

              if (!(form.checkValidity() === false)) {
                _context2.next = 7;
                break;
              }

              event.preventDefault();
              event.stopPropagation();
              _context2.next = 12;
              break;

            case 7:
              data = SU;
              console.log(data);
              _context2.next = 11;
              return axios__WEBPACK_IMPORTED_MODULE_6___default.a.post("http://localhost:4000/signup", {
                userId: data.userId,
                userPw: data.userPw,
                userName: data.userName,
                userEmail: data.userEmail,
                userPhone: data.userPhone,
                userJob: data.userJob
              });

            case 11:
              check = _context2.sent;

            case 12:
              setValidatedSU(true);

            case 13:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function handleSubmitSU(_x3) {
      return _ref2.apply(this, arguments);
    };
  }();

  var handleSubmitUserData =
  /*#__PURE__*/
  function () {
    var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(event) {
      var form, data, check;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              console.log(event.target.value);
              form = event.currentTarget;

              if (!(form.checkValidity() === false)) {
                _context3.next = 7;
                break;
              }

              event.preventDefault();
              event.stopPropagation();
              _context3.next = 12;
              break;

            case 7:
              data = userData;
              console.log(data);
              _context3.next = 11;
              return axios__WEBPACK_IMPORTED_MODULE_6___default.a.post("http://localhost:4000/mypage/fix", {
                userId: data.userId,
                userPw: data.userPw,
                userName: data.userName,
                userEmail: data.userEmail,
                userPhone: data.userPhone,
                userJob: data.userJob
              });

            case 11:
              check = _context3.sent;

            case 12:
              setValidatedUD(true);

            case 13:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function handleSubmitUserData(_x4) {
      return _ref3.apply(this, arguments);
    };
  }();

  var SignUp =
  /*#__PURE__*/
  function () {
    var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(data) {
      var check;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return axios__WEBPACK_IMPORTED_MODULE_6___default.a.post("http://localhost:4000/signup", {
                userId: data.userId,
                userPw: data.userPw,
                userName: data.userName,
                userEmail: data.userEmail,
                userPhone: data.userPhone,
                userJob: data.userJob
              });

            case 2:
              check = _context4.sent;

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function SignUp(_x5) {
      return _ref4.apply(this, arguments);
    };
  }();

  var loginBtn;

  if (!isLogin) {
    loginBtn = __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      style: {
        margin: "0 10px"
      },
      variant: "dark",
      onClick: function onClick() {
        return dispatchModal("openSI");
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, "Sign in"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      variant: "dark",
      onClick: function onClick() {
        return dispatchModal("openSU");
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99
      },
      __self: this
    }, "Sign up"));
  } else {
    loginBtn = __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
      style: {
        color: "white"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, isLogin + "'s"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      variant: "dark",
      onClick:
      /*#__PURE__*/
      Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var check;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_6___default.a.post("http://localhost:4000/mypage", {// userId: data.userId,
                  // userPw: data.userPw,
                  // userName: data.userName,
                  // userEmail: data.userEmail,
                  // userPhone: data.userPhone,
                  // userJob: data.userJob
                });

              case 2:
                check = _context5.sent;

                if (check.data) {
                  dispatchUserData({
                    type: "setName",
                    userName: check.data
                  });
                  dispatchUserData({
                    type: "setJob",
                    userJob: "Master"
                  });
                  dispatchModal("openMP");
                } else {
                  alert("Can't find User data");
                }

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      })),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, "My Page"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      variant: "dark",
      onClick: function onClick() {
        return setLogin(false);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }, "Log out"));
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Navbar"], {
    bg: "dark",
    variant: "dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Navbar"].Brand, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, "CNU Library"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"], {
    className: "mr-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"].Link, {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, "Home"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"].Link, {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, "about"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"].Link, {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, "Contact")), loginBtn), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    show: modal.showMP,
    onHide: function onHide() {
      return dispatchModal("hideMP");
    },
    onEnter: function onEnter() {
      console.log(userData);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Header, {
    closeButton: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, "My Page")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    noValidate: true,
    validated: validatedUD,
    onSubmit: handleSubmitUserData,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"],
    controlId: "validationCustom01",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, "ID"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    required: true,
    type: "text",
    placeholder: "ID",
    defaultValue: userData.userName,
    onInput: function onInput(ref) {
      return dispatchUserData({
        type: "setId",
        userId: ref.target.value
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control.Feedback, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, "Looks good!")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"],
    controlId: "validationCustom02",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 171
    },
    __self: this
  }, "Password"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    required: true,
    type: "text",
    placeholder: "Password",
    defaultValue: userData.userName,
    onInput: function onInput(ref) {
      return dispatchUserData({
        type: "setPw",
        userPw: ref.target.value
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control.Feedback, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, "Looks good!"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"],
    controlId: "validationCustomUsername",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }, "Username"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "text",
    placeholder: "Username",
    "aria-describedby": "inputGroupPrepend",
    required: true,
    defaultValue: userData.userName,
    onInput: function onInput(ref) {
      return dispatchUserData({
        type: "setName",
        userName: ref.target.value
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188
    },
    __self: this
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control.Feedback, {
    type: "invalid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, "Please choose a username."))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"],
    controlId: "validationCustom03",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, "Email"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "text",
    placeholder: "Email",
    required: true,
    defaultValue: userData.userName,
    onInput: function onInput(ref) {
      return dispatchUserData({
        type: "setEmail",
        userEmail: ref.target.value
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control.Feedback, {
    type: "invalid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220
    },
    __self: this
  }, "Please provide a valid city."))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"],
    md: "6",
    controlId: "validationCustom04",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  }, "Phone"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "text",
    placeholder: "Phone",
    required: true,
    defaultValue: userData.userName,
    onInput: function onInput(ref) {
      return dispatchUserData({
        type: "setPhone",
        userPhone: ref.target.value
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control.Feedback, {
    type: "invalid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240
    },
    __self: this
  }, "Please provide a valid state.")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"],
    md: "6",
    controlId: "validationCustom05",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: this
  }, "Job"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    as: "select",
    value: userData.userJob,
    onChange: function onChange(ref) {
      return dispatchUserData({
        type: "setJob",
        userJob: ref.target.value
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 246
    },
    __self: this
  }, __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: this
  }, "Bachelor"), __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: this
  }, "Master"), __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: this
  }, "Staff")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "secondary",
    onClick: function onClick() {
      return dispatchModal("hideSU");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259
    },
    __self: this
  }, "Close"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262
    },
    __self: this
  }, "Submit"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Footer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 265
    },
    __self: this
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    show: modal.showSI,
    onHide: function onHide() {
      return dispatchModal("hideSI");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Header, {
    closeButton: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272
    },
    __self: this
  }, "Sign In")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 274
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    controlId: "formBasicEmail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 276
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 277
    },
    __self: this
  }, "ID"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "text",
    placeholder: "Enter ID",
    onInput: function onInput(ref) {
      return dispatchSI({
        type: "setId",
        userId: ref.target.value
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278
    },
    __self: this
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    controlId: "formBasicPassword",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288
    },
    __self: this
  }, "Password"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "password",
    placeholder: "Password",
    onInput: function onInput(ref) {
      return dispatchSI({
        type: "setPw",
        userPw: ref.target.value
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289
    },
    __self: this
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    controlId: "formBasicCheckbox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Check, {
    type: "checkbox",
    label: "Check me out",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298
    },
    __self: this
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Footer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 302
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "secondary",
    onClick: function onClick() {
      return dispatchModal("hideSI");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 303
    },
    __self: this
  }, "Close"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "primary",
    type: "submit",
    onClick:
    /*#__PURE__*/
    function () {
      var _ref6 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6(ref) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                if (!(SI.userId && SI.userPw)) {
                  _context6.next = 3;
                  break;
                }

                _context6.next = 3;
                return SignIn(SI.userId, SI.userPw);

              case 3:
                dispatchModal("hideSI");

              case 4:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function (_x6) {
        return _ref6.apply(this, arguments);
      };
    }(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306
    },
    __self: this
  }, "Submit"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    show: modal.showSU,
    onHide: function onHide() {
      return dispatchModal("hideSU");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Header, {
    closeButton: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323
    },
    __self: this
  }, "Sign Up")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 325
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    noValidate: true,
    validated: validatedSU,
    onSubmit: handleSubmitSU,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"],
    controlId: "validationCustom01",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 328
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 329
    },
    __self: this
  }, "ID"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    required: true,
    type: "text",
    placeholder: "ID",
    onInput: function onInput(ref) {
      return dispatchSU({
        type: "setId",
        userId: ref.target.value
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 330
    },
    __self: this
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control.Feedback, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 338
    },
    __self: this
  }, "Looks good!")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"],
    controlId: "validationCustom02",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 341
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 342
    },
    __self: this
  }, "Password"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    required: true,
    type: "text",
    placeholder: "Password",
    onInput: function onInput(ref) {
      return dispatchSU({
        type: "setPw",
        userPw: ref.target.value
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343
    },
    __self: this
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control.Feedback, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 351
    },
    __self: this
  }, "Looks good!"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"],
    controlId: "validationCustomUsername",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 356
    },
    __self: this
  }, "Username"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "text",
    placeholder: "Username",
    "aria-describedby": "inputGroupPrepend",
    required: true,
    onInput: function onInput(ref) {
      return dispatchSU({
        type: "setName",
        userName: ref.target.value
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358
    },
    __self: this
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control.Feedback, {
    type: "invalid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370
    },
    __self: this
  }, "Please choose a username."))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"],
    controlId: "validationCustom03",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 375
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 376
    },
    __self: this
  }, "Email"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "text",
    placeholder: "Email",
    required: true,
    onInput: function onInput(ref) {
      return dispatchSU({
        type: "setEmail",
        userEmail: ref.target.value
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 377
    },
    __self: this
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control.Feedback, {
    type: "invalid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 388
    },
    __self: this
  }, "Please provide a valid city."))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 393
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"],
    md: "6",
    controlId: "validationCustom04",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 394
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 395
    },
    __self: this
  }, "Phone"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    type: "text",
    placeholder: "Phone",
    required: true,
    onInput: function onInput(ref) {
      return dispatchSU({
        type: "setPhone",
        userPhone: ref.target.value
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 396
    },
    __self: this
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control.Feedback, {
    type: "invalid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 407
    },
    __self: this
  }, "Please provide a valid state.")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"],
    md: "6",
    controlId: "validationCustom05",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 411
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 412
    },
    __self: this
  }, "Job"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control, {
    as: "select",
    onChange: function onChange(ref) {
      return dispatchSU({
        type: "setJob",
        userJob: ref.target.value
      });
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 413
    },
    __self: this
  }, __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 419
    },
    __self: this
  }, "Bachelor"), __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 420
    },
    __self: this
  }, "Master"), __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 421
    },
    __self: this
  }, "Staff")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "secondary",
    onClick: function onClick() {
      return dispatchModal("hideSU");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425
    },
    __self: this
  }, "Close"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 428
    },
    __self: this
  }, "Submit form"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Footer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 431
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=index.js.b1b3054af3e5618798ad.hot-update.js.map