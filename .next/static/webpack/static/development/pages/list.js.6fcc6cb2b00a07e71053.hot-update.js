webpackHotUpdate("static\\development\\pages\\list.js",{

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
        lineNumber: 137
      },
      __self: this
    }, "Log out"));
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Navbar"], {
    bg: "dark",
    variant: "dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Navbar"].Brand, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, "CNU Library"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"], {
    className: "mr-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"].Link, {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, "Home"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"].Link, {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, "about"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Nav"].Link, {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
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
    size: "xl",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Header, {
    closeButton: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, "My Page")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    noValidate: true,
    validated: validatedUD,
    onSubmit: handleSubmitUserData,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"],
    controlId: "validationCustom01",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174
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
      lineNumber: 175
    },
    __self: this
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control.Feedback, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }, "Looks good!")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"],
    controlId: "validationCustom02",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191
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
      lineNumber: 192
    },
    __self: this
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control.Feedback, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, "Looks good!"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"],
    controlId: "validationCustomUsername",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }, "Username"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
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
      lineNumber: 211
    },
    __self: this
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control.Feedback, {
    type: "invalid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, "Please choose a username."))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"],
    controlId: "validationCustom03",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
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
      lineNumber: 231
    },
    __self: this
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control.Feedback, {
    type: "invalid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: this
  }, "Please provide a valid city."))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"],
    md: "6",
    controlId: "validationCustom04",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 249
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 250
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
      lineNumber: 251
    },
    __self: this
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control.Feedback, {
    type: "invalid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263
    },
    __self: this
  }, "Please provide a valid state.")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"],
    md: "6",
    controlId: "validationCustom05",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 267
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
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
      lineNumber: 269
    },
    __self: this
  }, __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 279
    },
    __self: this
  }, "Bachelor"), __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 280
    },
    __self: this
  }, "Master"), __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 281
    },
    __self: this
  }, "Staff")))), __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 285
    },
    __self: this
  }, "My Book List"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Table"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 286
    },
    __self: this
  }, __jsx("thead", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 287
    },
    __self: this
  }, __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 288
    },
    __self: this
  }, __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 289
    },
    __self: this
  }, "Title"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290
    },
    __self: this
  }, "Author"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 291
    },
    __self: this
  }, "Company"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292
    },
    __self: this
  }, "ISBN"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293
    },
    __self: this
  }, "Start Date"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 294
    },
    __self: this
  }, "End Date"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295
    },
    __self: this
  }, "Return"))), __jsx("tbody", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298
    },
    __self: this
  }, userData.userList.map(function (data) {
    return __jsx("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 300
      },
      __self: this
    }, __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 301
      },
      __self: this
    }, data.title), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 302
      },
      __self: this
    }, data.author), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 303
      },
      __self: this
    }, data.company), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 304
      },
      __self: this
    }, data.ISBN), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 305
      },
      __self: this
    }, data.startDate), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 306
      },
      __self: this
    }, data.endDate), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 307
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 308
      },
      __self: this
    }, "Return")));
  }))), __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 314
    },
    __self: this
  }, "My Reservation"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Table"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 315
    },
    __self: this
  }, __jsx("thead", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 316
    },
    __self: this
  }, __jsx("tr", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317
    },
    __self: this
  }, __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318
    },
    __self: this
  }, "Title"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 319
    },
    __self: this
  }, "Author"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 320
    },
    __self: this
  }, "Company"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321
    },
    __self: this
  }, "ISBN"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322
    },
    __self: this
  }, "Start Date"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323
    },
    __self: this
  }, "End Date"), __jsx("th", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 324
    },
    __self: this
  }, "Return"))), __jsx("tbody", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327
    },
    __self: this
  }, userData.userList.map(function (data) {
    return __jsx("tr", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 329
      },
      __self: this
    }, __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 330
      },
      __self: this
    }, data.title), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 331
      },
      __self: this
    }, data.author), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 332
      },
      __self: this
    }, data.company), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 333
      },
      __self: this
    }, data.ISBN), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 334
      },
      __self: this
    }, data.startDate), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 335
      },
      __self: this
    }, data.endDate), __jsx("td", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 336
      },
      __self: this
    }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 337
      },
      __self: this
    }, "Return")));
  }))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 343
    },
    __self: this
  }, "User Secession"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "secondary",
    onClick: function onClick() {
      return dispatchModal("hideSU");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 344
    },
    __self: this
  }, "Close"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 347
    },
    __self: this
  }, "Submit"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Footer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 350
    },
    __self: this
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    show: modal.showSI,
    onHide: function onHide() {
      return dispatchModal("hideSI");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 353
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Header, {
    closeButton: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 354
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 355
    },
    __self: this
  }, "Sign In")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 357
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 358
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    controlId: "formBasicEmail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 359
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 360
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
      lineNumber: 361
    },
    __self: this
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    controlId: "formBasicPassword",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 370
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 371
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
      lineNumber: 372
    },
    __self: this
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    controlId: "formBasicCheckbox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 380
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Check, {
    type: "checkbox",
    label: "Check me out",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 381
    },
    __self: this
  })))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Footer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 385
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "secondary",
    onClick: function onClick() {
      return dispatchModal("hideSI");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 386
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
      lineNumber: 389
    },
    __self: this
  }, "Submit"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"], {
    show: modal.showSU,
    onHide: function onHide() {
      return dispatchModal("hideSU");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 404
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Header, {
    closeButton: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 405
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 406
    },
    __self: this
  }, "Sign Up")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 408
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"], {
    noValidate: true,
    validated: validatedSU,
    onSubmit: handleSubmitSU,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 409
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 410
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"],
    controlId: "validationCustom01",
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
      lineNumber: 413
    },
    __self: this
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control.Feedback, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 421
    },
    __self: this
  }, "Looks good!")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"],
    controlId: "validationCustom02",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 424
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 425
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
      lineNumber: 426
    },
    __self: this
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control.Feedback, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 434
    },
    __self: this
  }, "Looks good!"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 437
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"],
    controlId: "validationCustomUsername",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 438
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 439
    },
    __self: this
  }, "Username"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["InputGroup"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 440
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
      lineNumber: 441
    },
    __self: this
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control.Feedback, {
    type: "invalid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 453
    },
    __self: this
  }, "Please choose a username."))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"],
    controlId: "validationCustom03",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 458
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 459
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
      lineNumber: 460
    },
    __self: this
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control.Feedback, {
    type: "invalid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 471
    },
    __self: this
  }, "Please provide a valid city."))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Row, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 476
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"],
    md: "6",
    controlId: "validationCustom04",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 477
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 478
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
      lineNumber: 479
    },
    __self: this
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Control.Feedback, {
    type: "invalid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 490
    },
    __self: this
  }, "Please provide a valid state.")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Group, {
    as: react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Col"],
    md: "6",
    controlId: "validationCustom05",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 494
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 495
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
      lineNumber: 496
    },
    __self: this
  }, __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 502
    },
    __self: this
  }, "Bachelor"), __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 503
    },
    __self: this
  }, "Master"), __jsx("option", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 504
    },
    __self: this
  }, "Staff")))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: "secondary",
    onClick: function onClick() {
      return dispatchModal("hideSU");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 508
    },
    __self: this
  }, "Close"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 511
    },
    __self: this
  }, "Submit form"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Modal"].Footer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 514
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ })

})
//# sourceMappingURL=list.js.6fcc6cb2b00a07e71053.hot-update.js.map