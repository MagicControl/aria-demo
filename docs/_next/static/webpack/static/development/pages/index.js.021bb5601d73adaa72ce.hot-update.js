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
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "jsx-226751566",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Accessible Rich Internet Applications (ARIA) is a set of attributes that define ways to make web content and web applications (especially those developed with JavaScript) more accessible to people with disabilities.")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", {
    className: "jsx-226751566",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("header", {
    className: "jsx-226751566",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    tabIndex: "0",
    className: "jsx-226751566",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Simple case. Using aria attributes to label a component.")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-226751566",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
    className: "jsx-226751566",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, "Variant one:"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_shared_components_Input__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    label: "This component was labeled by aria-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-226751566",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
    className: "jsx-226751566",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Variant two:"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_shared_components_Input__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    id: "1",
    label: "This component was labeled by aria-labelledby",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", {
    className: "jsx-226751566",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    tabIndex: "0",
    className: "jsx-226751566",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Complex case. Using aria attributes to create custom controls."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-226751566",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
    className: "jsx-226751566",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Custom checkbox."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_shared_components_Checkbox__WEBPACK_IMPORTED_MODULE_4__["Checkbox"], {
    checked: checked,
    label: "This checkbox was made using role and aria- attributes",
    onChange: setChecked,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-226751566",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h3", {
    className: "jsx-226751566",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "Custom select."), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_shared_components_Dropdown__WEBPACK_IMPORTED_MODULE_6__["Dropdown"], {
    values: [11, 22, 33, 44],
    selectedValue: dropdownValue,
    label: "custom dropdown",
    setValue: selectValue,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "https://w3c.github.io/using-aria/",
    className: "jsx-226751566",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "See more on w3c.github.io"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "226751566",
    __self: this
  }, "*{box-sizing:border-box;}body{background-color:#bc986a;box-sizing:border-box;}.container{width:1024px;margin:0 auto;}.dropdown{margin-bottom:20px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnRvbi5oYWxhc255L215UHJvamVjdHMvbmV4dC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtRm1DLEFBRytDLEFBSUcsQUFLWixBQUtNLGFBSkwsTUFLbEIsR0FkQSxHQUkwQixFQU0xQixvQkFMQSIsImZpbGUiOiIvVXNlcnMvYW50b24uaGFsYXNueS9teVByb2plY3RzL25leHQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgdXNlQURBSW5wdXQgfSBmcm9tICcuLi9zaGFyZWQvaG9va3MvaW5wdXQnO1xuaW1wb3J0IHsgQ2hlY2tib3ggfSBmcm9tICcuLi9zaGFyZWQvY29tcG9uZW50cy9DaGVja2JveCc7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJy4uL3NoYXJlZC9jb21wb25lbnRzL0lucHV0JztcbmltcG9ydCB7IERyb3Bkb3duIH0gZnJvbSAnLi4vc2hhcmVkL2NvbXBvbmVudHMvRHJvcGRvd24nO1xuaW1wb3J0IHsgd2l0aEdBLCB3aXRoQ2xpY2tUcmFja2luZyB9IGZyb20gJy4uL3NoYXJlZC9saWJzL2dhJztcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gJy4uL3NoYXJlZC9jb21wb25lbnRzL0J1dHRvbic7XG5cbmNvbnN0IFRyYWNrZWRCdXR0b24gPSB3aXRoQ2xpY2tUcmFja2luZyhCdXR0b24sICdjbGljaycsIHtcbiAgICBldmVudF9jYXRlZ29yeTogJ3Rlc3QnLFxuICAgIGV2ZW50X2xhYmVsOiAnYmxhLWJsYScsXG4gICAgdmFsdWU6ICdoaScsXG59KTtcblxuY29uc3QgUGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBbY2hlY2tlZCwgc2V0Q2hlY2tlZF0gPSB1c2VBREFJbnB1dChmYWxzZSwgc3RhdGUgPT4gIXN0YXRlKTtcbiAgICBjb25zdCBbZHJvcGRvd25WYWx1ZSwgc2V0RHJvcGRvd25WYWx1ZV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICAgIGNvbnN0IHNlbGVjdFZhbHVlID0gdmFsdWUgPT4gc2V0RHJvcGRvd25WYWx1ZSh2YWx1ZSk7XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8aGVhZGVyPlxuICAgICAgICAgICAgICAgICAgICA8aDEgdGFiSW5kZXg9XCIwXCI+V2VsY29tZSB0byBBUklBIGRlbW8uPC9oMT5cbiAgICAgICAgICAgICAgICA8L2hlYWRlcj5cblxuICAgICAgICAgICAgICAgIHsvKiA8VHJhY2tlZEJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBjb25zb2xlLmxvZygnSGknKX0gLz4gKi99XG4gICAgICAgICAgICAgICAgPGFydGljbGUgdGFiSW5kZXg9XCIwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgQWNjZXNzaWJsZSBSaWNoIEludGVybmV0IEFwcGxpY2F0aW9ucyAoQVJJQSkgaXMgYSBzZXQgb2ZcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZXMgdGhhdCBkZWZpbmUgd2F5cyB0byBtYWtlIHdlYiBjb250ZW50IGFuZCB3ZWJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9ucyAoZXNwZWNpYWxseSB0aG9zZSBkZXZlbG9wZWQgd2l0aFxuICAgICAgICAgICAgICAgICAgICAgICAgSmF2YVNjcmlwdCkgbW9yZSBhY2Nlc3NpYmxlIHRvIHBlb3BsZSB3aXRoIGRpc2FiaWxpdGllcy5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPGhlYWRlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiB0YWJJbmRleD1cIjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTaW1wbGUgY2FzZS4gVXNpbmcgYXJpYSBhdHRyaWJ1dGVzIHRvIGxhYmVsIGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQuXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8L2hlYWRlcj5cblxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlZhcmlhbnQgb25lOjwvaDM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXQgbGFiZWw9XCJUaGlzIGNvbXBvbmVudCB3YXMgbGFiZWxlZCBieSBhcmlhLWxhYmVsXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+VmFyaWFudCB0d286PC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiMVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUaGlzIGNvbXBvbmVudCB3YXMgbGFiZWxlZCBieSBhcmlhLWxhYmVsbGVkYnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8aDIgdGFiSW5kZXg9XCIwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBDb21wbGV4IGNhc2UuIFVzaW5nIGFyaWEgYXR0cmlidXRlcyB0byBjcmVhdGUgY3VzdG9tXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250cm9scy5cbiAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5DdXN0b20gY2hlY2tib3guPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2NoZWNrZWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJUaGlzIGNoZWNrYm94IHdhcyBtYWRlIHVzaW5nIHJvbGUgYW5kIGFyaWEtIGF0dHJpYnV0ZXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXRDaGVja2VkfVxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+Q3VzdG9tIHNlbGVjdC48L2gzPlxuICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzPXtbMTEsIDIyLCAzMywgNDRdfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVmFsdWU9e2Ryb3Bkb3duVmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJjdXN0b20gZHJvcGRvd25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFZhbHVlPXtzZWxlY3RWYWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93M2MuZ2l0aHViLmlvL3VzaW5nLWFyaWEvXCI+XG4gICAgICAgICAgICAgICAgICAgIFNlZSBtb3JlIG9uIHczYy5naXRodWIuaW9cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgICAgICAgICAgICAgKiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYm9keSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmM5ODZhO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5jb250YWluZXIge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMjRweDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmRyb3Bkb3duIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhHQShQYWdlLCAnTXkgaW5kZXggcGFnZScpO1xuIl19 */\n/*@ sourceURL=/Users/anton.halasny/myProjects/next/pages/index.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_shared_libs_ga__WEBPACK_IMPORTED_MODULE_7__["withGA"])(Page, 'My index page'));

/***/ })

})
//# sourceMappingURL=index.js.021bb5601d73adaa72ce.hot-update.js.map