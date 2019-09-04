webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_hooks_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/hooks/input */ "./shared/hooks/input.js");
/* harmony import */ var _shared_components_Checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/components/Checkbox */ "./shared/components/Checkbox.js");
/* harmony import */ var _shared_components_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/components/Input */ "./shared/components/Input.js");
/* harmony import */ var _shared_components_Dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/components/Dropdown */ "./shared/components/Dropdown.js");
/* harmony import */ var _shared_libs_ga__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/libs/ga */ "./shared/libs/ga.js");
/* harmony import */ var _shared_components_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/components/Button */ "./shared/components/Button.js");

var _jsxFileName = "/Users/anton.halasny/myProjects/next/pages/index.js";









var TrackedButton = Object(_shared_libs_ga__WEBPACK_IMPORTED_MODULE_7__["withClickTracking"])(_shared_components_Button__WEBPACK_IMPORTED_MODULE_8__["Button"], 'click', {
  event_category: 'test',
  event_label: 'bla-bla',
  value: 'hi'
});

var Page = function Page() {
  var _useADAInput = Object(_shared_hooks_input__WEBPACK_IMPORTED_MODULE_3__["useADAInput"])(false, function (state) {
    return !state;
  }),
      _useADAInput2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useADAInput, 2),
      checked = _useADAInput2[0],
      setChecked = _useADAInput2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      dropdownValue = _useState2[0],
      setDropdownValue = _useState2[1];

  var selectValue = function selectValue(value) {
    return setDropdownValue(value);
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-226751566" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("header", {
    className: "jsx-226751566",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    tabIndex: "0",
    className: "jsx-226751566",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Welcome to ARIA demo.")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("article", {
    tabIndex: "0",
    className: "jsx-226751566",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("header", {
    className: "jsx-226751566",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "jsx-226751566",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "Accessible Rich Internet Applications (ARIA) is a set of attributes that define ways to make web content and web applications (especially those developed with JavaScript) more accessible to people with disabilities.")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", {
    className: "jsx-226751566",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("header", {
    className: "jsx-226751566",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    tabIndex: "0",
    className: "jsx-226751566",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Simple case. Using aria attributes to label a component.")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-226751566",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
    className: "jsx-226751566",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "Variant one:"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_shared_components_Input__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    label: "This component was labeled by aria-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-226751566",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
    className: "jsx-226751566",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, "Variant two:"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_shared_components_Input__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    id: "1",
    label: "This component was labeled by aria-labelledby",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", {
    className: "jsx-226751566",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    tabIndex: "0",
    className: "jsx-226751566",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "Complex case. Using aria attributes to create custom controls."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-226751566",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
    className: "jsx-226751566",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "Custom checkbox."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_shared_components_Checkbox__WEBPACK_IMPORTED_MODULE_4__["Checkbox"], {
    checked: checked,
    label: "This checkbox was made using role and aria- attributes",
    onChange: setChecked,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-226751566",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
    className: "jsx-226751566",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "Custom select."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_shared_components_Dropdown__WEBPACK_IMPORTED_MODULE_6__["Dropdown"], {
    values: [11, 22, 33, 44],
    selectedValue: dropdownValue,
    label: "custom dropdown",
    setValue: selectValue,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "https://w3c.github.io/using-aria/",
    className: "jsx-226751566",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "See more on w3c.github.io")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "226751566",
    __self: this
  }, "*{box-sizing:border-box;}body{background-color:#bc986a;box-sizing:border-box;}.container{width:1024px;margin:0 auto;}.dropdown{margin-bottom:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnRvbi5oYWxhc255L215UHJvamVjdHMvbmV4dC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1Rm1DLEFBRytDLEFBSUcsQUFLWixBQUtNLGFBSkwsTUFLbEIsR0FkQSxHQUkwQixFQU0xQixvQkFMQSIsImZpbGUiOiIvVXNlcnMvYW50b24uaGFsYXNueS9teVByb2plY3RzL25leHQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgdXNlQURBSW5wdXQgfSBmcm9tICcuLi9zaGFyZWQvaG9va3MvaW5wdXQnO1xuaW1wb3J0IHsgQ2hlY2tib3ggfSBmcm9tICcuLi9zaGFyZWQvY29tcG9uZW50cy9DaGVja2JveCc7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJy4uL3NoYXJlZC9jb21wb25lbnRzL0lucHV0JztcbmltcG9ydCB7IERyb3Bkb3duIH0gZnJvbSAnLi4vc2hhcmVkL2NvbXBvbmVudHMvRHJvcGRvd24nO1xuaW1wb3J0IHsgd2l0aEdBLCB3aXRoQ2xpY2tUcmFja2luZyB9IGZyb20gJy4uL3NoYXJlZC9saWJzL2dhJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL3NoYXJlZC9jb21wb25lbnRzL0J1dHRvbic7XG5cbmNvbnN0IFRyYWNrZWRCdXR0b24gPSB3aXRoQ2xpY2tUcmFja2luZyhCdXR0b24sICdjbGljaycsIHtcbiAgICBldmVudF9jYXRlZ29yeTogJ3Rlc3QnLFxuICAgIGV2ZW50X2xhYmVsOiAnYmxhLWJsYScsXG4gICAgdmFsdWU6ICdoaScsXG59KTtcblxuY29uc3QgUGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBbY2hlY2tlZCwgc2V0Q2hlY2tlZF0gPSB1c2VBREFJbnB1dChmYWxzZSwgc3RhdGUgPT4gIXN0YXRlKTtcbiAgICBjb25zdCBbZHJvcGRvd25WYWx1ZSwgc2V0RHJvcGRvd25WYWx1ZV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICAgIGNvbnN0IHNlbGVjdFZhbHVlID0gdmFsdWUgPT4gc2V0RHJvcGRvd25WYWx1ZSh2YWx1ZSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICA8aDEgdGFiSW5kZXg9XCIwXCI+V2VsY29tZSB0byBBUklBIGRlbW8uPC9oMT5cbiAgICAgICAgICAgICAgICA8L2hlYWRlcj5cblxuICAgICAgICAgICAgICAgIHsvKiA8VHJhY2tlZEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjb25zb2xlLmxvZygnSGknKX0gLz4gKi99XG4gICAgICAgICAgICAgICAgPGFydGljbGUgdGFiSW5kZXg9XCIwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBY2Nlc3NpYmxlIFJpY2ggSW50ZXJuZXQgQXBwbGljYXRpb25zIChBUklBKSBpcyBhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0IG9mIGF0dHJpYnV0ZXMgdGhhdCBkZWZpbmUgd2F5cyB0byBtYWtlIHdlYlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQgYW5kIHdlYiBhcHBsaWNhdGlvbnMgKGVzcGVjaWFsbHkgdGhvc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXZlbG9wZWQgd2l0aCBKYXZhU2NyaXB0KSBtb3JlIGFjY2Vzc2libGUgdG8gcGVvcGxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2l0aCBkaXNhYmlsaXRpZXMuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIHRhYkluZGV4PVwiMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaW1wbGUgY2FzZS4gVXNpbmcgYXJpYSBhdHRyaWJ1dGVzIHRvIGxhYmVsIGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2hlYWRlcj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+VmFyaWFudCBvbmU6PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgbGFiZWw9XCJUaGlzIGNvbXBvbmVudCB3YXMgbGFiZWxlZCBieSBhcmlhLWxhYmVsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+VmFyaWFudCB0d286PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUaGlzIGNvbXBvbmVudCB3YXMgbGFiZWxlZCBieSBhcmlhLWxhYmVsbGVkYnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiB0YWJJbmRleD1cIjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb21wbGV4IGNhc2UuIFVzaW5nIGFyaWEgYXR0cmlidXRlcyB0byBjcmVhdGUgY3VzdG9tXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbHMuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+Q3VzdG9tIGNoZWNrYm94LjwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVGhpcyBjaGVja2JveCB3YXMgbWFkZSB1c2luZyByb2xlIGFuZCBhcmlhLSBhdHRyaWJ1dGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3NldENoZWNrZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDM+Q3VzdG9tIHNlbGVjdC48L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93blxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXM9e1sxMSwgMjIsIDMzLCA0NF19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVmFsdWU9e2Ryb3Bkb3duVmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiY3VzdG9tIGRyb3Bkb3duXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWU9e3NlbGVjdFZhbHVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93M2MuZ2l0aHViLmlvL3VzaW5nLWFyaWEvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBTZWUgbW9yZSBvbiB3M2MuZ2l0aHViLmlvXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2FydGljbGU+XG5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgICAgICAgICAgICAqIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiYzk4NmE7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAyNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuZHJvcGRvd24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aEdBKFBhZ2UsICdNeSBpbmRleCBwYWdlJyk7XG4iXX0= */\n/*@ sourceURL=/Users/anton.halasny/myProjects/next/pages/index.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_shared_libs_ga__WEBPACK_IMPORTED_MODULE_7__["withGA"])(Page, 'My index page'));

/***/ })

})
//# sourceMappingURL=index.js.2adaa8f3a544cd6456cf.hot-update.js.map