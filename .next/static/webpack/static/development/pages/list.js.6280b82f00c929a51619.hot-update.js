webpackHotUpdate("static\\development\\pages\\list.js",{

/***/ "./pages/MyPage.js":
/*!*************************!*\
  !*** ./pages/MyPage.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);


var _jsxFileName = "C:\\Users\\gyeongmin\\LibrarySystem\\pages\\MyPage.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;

var MyPage = function MyPage(props) {
  // const [modal, dispatchModal] = props
  var modal = props.modal;
  var dispatchModal = props.dispatchModal;
  return __jsx(Modal, {
    show: modal.showMP,
    onHide: function onHide() {
      return dispatchModal("hideMP");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx(Modal.Header, {
    closeButton: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx(Modal.Title, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "My Page")), __jsx(Modal.Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, __jsx(Form, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx(Form.Group, {
    controlId: "formBasicEmail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx(Form.Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "ID"), __jsx(Form.Control, {
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
      lineNumber: 15
    },
    __self: this
  })), __jsx(Form.Group, {
    controlId: "formBasicPassword",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(Form.Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Password"), __jsx(Form.Control, {
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
      lineNumber: 26
    },
    __self: this
  })), __jsx(Form.Group, {
    controlId: "formBasicCheckbox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx(Form.Check, {
    type: "checkbox",
    label: "Check me out",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  })))), __jsx(Modal.Footer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx(Button, {
    variant: "secondary",
    onClick: function onClick() {
      return dispatchModal("hideSI");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Close"), __jsx(Button, {
    variant: "primary",
    type: "submit",
    onClick:
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ref) {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(SI.userId && SI.userPw)) {
                  _context.next = 3;
                  break;
                }

                _context.next = 3;
                return SignIn(SI.userId, SI.userPw);

              case 3:
                dispatchModal("hideSI");

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "Submit")));
};

/* harmony default export */ __webpack_exports__["default"] = (MyPage);

/***/ })

})
//# sourceMappingURL=list.js.6280b82f00c929a51619.hot-update.js.map