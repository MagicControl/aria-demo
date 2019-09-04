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
    className: "jsx-87210630" + " " + "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("header", {
    className: "jsx-87210630",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    tabIndex: "0",
    className: "jsx-87210630",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, "Welcome to ARIA demo")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("article", {
    tabIndex: "0",
    className: "jsx-87210630",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "jsx-87210630",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "Accessible Rich Internet Applications (ARIA) is a set of attributes that define ways to make web content and web applications (especially those developed with JavaScript) more accessible to people with disabilities.")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", {
    className: "jsx-87210630",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("header", {
    className: "jsx-87210630",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    tabIndex: "0",
    className: "jsx-87210630",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Simple case. Labeling a component")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_shared_components_Input__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    label: "This component was labeled by aria-label",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_shared_components_Input__WEBPACK_IMPORTED_MODULE_5__["Input"], {
    id: "1",
    label: "This component was labeled by aria-labelledby",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", {
    className: "jsx-87210630",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h2", {
    tabIndex: "0",
    className: "jsx-87210630",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, "Complex case: using aria attributes to create custom controls"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_shared_components_Checkbox__WEBPACK_IMPORTED_MODULE_4__["Checkbox"], {
    checked: checked,
    label: "This checkbox was made using role and aria- attributes",
    onChange: setChecked,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_shared_components_Dropdown__WEBPACK_IMPORTED_MODULE_6__["Dropdown"], {
    values: [11, 22, 33, 44],
    selectedValue: dropdownValue,
    label: "custom dropdown",
    setValue: selectValue,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "https://w3c.github.io/using-aria/",
    className: "jsx-87210630",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "See more on w3c.github.io"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "87210630",
    __self: this
  }, "body{background-color:#bc986a;box-sizing:border-box;}.container{width:1024px;margin:0 auto;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnRvbi5oYWxhc255L215UHJvamVjdHMvbmV4dC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvRW1DLEFBR2tELEFBS1osYUFDQyxZQUxRLEVBTTFCLG9CQUxBIiwiZmlsZSI6Ii9Vc2Vycy9hbnRvbi5oYWxhc255L215UHJvamVjdHMvbmV4dC9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyB1c2VBREFJbnB1dCB9IGZyb20gJy4uL3NoYXJlZC9ob29rcy9pbnB1dCc7XG5pbXBvcnQgeyBDaGVja2JveCB9IGZyb20gJy4uL3NoYXJlZC9jb21wb25lbnRzL0NoZWNrYm94JztcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnLi4vc2hhcmVkL2NvbXBvbmVudHMvSW5wdXQnO1xuaW1wb3J0IHsgRHJvcGRvd24gfSBmcm9tICcuLi9zaGFyZWQvY29tcG9uZW50cy9Ecm9wZG93bic7XG5pbXBvcnQgeyB3aXRoR0EsIHdpdGhDbGlja1RyYWNraW5nIH0gZnJvbSAnLi4vc2hhcmVkL2xpYnMvZ2EnO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vc2hhcmVkL2NvbXBvbmVudHMvQnV0dG9uJztcblxuY29uc3QgVHJhY2tlZEJ1dHRvbiA9IHdpdGhDbGlja1RyYWNraW5nKEJ1dHRvbiwgJ2NsaWNrJywge1xuICAgIGV2ZW50X2NhdGVnb3J5OiAndGVzdCcsXG4gICAgZXZlbnRfbGFiZWw6ICdibGEtYmxhJyxcbiAgICB2YWx1ZTogJ2hpJyxcbn0pO1xuXG5jb25zdCBQYWdlID0gKCkgPT4ge1xuICAgIGNvbnN0IFtjaGVja2VkLCBzZXRDaGVja2VkXSA9IHVzZUFEQUlucHV0KGZhbHNlLCBzdGF0ZSA9PiAhc3RhdGUpO1xuICAgIGNvbnN0IFtkcm9wZG93blZhbHVlLCBzZXREcm9wZG93blZhbHVlXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gICAgY29uc3Qgc2VsZWN0VmFsdWUgPSB2YWx1ZSA9PiBzZXREcm9wZG93blZhbHVlKHZhbHVlKTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgIDxoMSB0YWJJbmRleD1cIjBcIj5XZWxjb21lIHRvIEFSSUEgZGVtbzwvaDE+XG4gICAgICAgICAgICAgICAgPC9oZWFkZXI+XG5cbiAgICAgICAgICAgICAgICB7LyogPFRyYWNrZWRCdXR0b24gb25DbGljaz17KCkgPT4gY29uc29sZS5sb2coJ0hpJyl9IC8+ICovfVxuICAgICAgICAgICAgICAgIDxhcnRpY2xlIHRhYkluZGV4PVwiMFwiPlxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIEFjY2Vzc2libGUgUmljaCBJbnRlcm5ldCBBcHBsaWNhdGlvbnMgKEFSSUEpIGlzIGEgc2V0IG9mXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGVzIHRoYXQgZGVmaW5lIHdheXMgdG8gbWFrZSB3ZWIgY29udGVudCBhbmQgd2ViXG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBsaWNhdGlvbnMgKGVzcGVjaWFsbHkgdGhvc2UgZGV2ZWxvcGVkIHdpdGhcbiAgICAgICAgICAgICAgICAgICAgICAgIEphdmFTY3JpcHQpIG1vcmUgYWNjZXNzaWJsZSB0byBwZW9wbGUgd2l0aCBkaXNhYmlsaXRpZXMuXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxoZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgdGFiSW5kZXg9XCIwXCI+U2ltcGxlIGNhc2UuIExhYmVsaW5nIGEgY29tcG9uZW50PC9oMj5cbiAgICAgICAgICAgICAgICAgICAgPC9oZWFkZXI+XG5cbiAgICAgICAgICAgICAgICAgICAgPElucHV0IGxhYmVsPVwiVGhpcyBjb21wb25lbnQgd2FzIGxhYmVsZWQgYnkgYXJpYS1sYWJlbFwiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCIxXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVGhpcyBjb21wb25lbnQgd2FzIGxhYmVsZWQgYnkgYXJpYS1sYWJlbGxlZGJ5XCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxoMiB0YWJJbmRleD1cIjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIENvbXBsZXggY2FzZTogdXNpbmcgYXJpYSBhdHRyaWJ1dGVzIHRvIGNyZWF0ZSBjdXN0b21cbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xzXG4gICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17Y2hlY2tlZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiVGhpcyBjaGVja2JveCB3YXMgbWFkZSB1c2luZyByb2xlIGFuZCBhcmlhLSBhdHRyaWJ1dGVzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXRDaGVja2VkfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8RHJvcGRvd25cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcz17WzExLCAyMiwgMzMsIDQ0XX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkVmFsdWU9e2Ryb3Bkb3duVmFsdWV9XG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cImN1c3RvbSBkcm9wZG93blwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZT17c2VsZWN0VmFsdWV9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3czYy5naXRodWIuaW8vdXNpbmctYXJpYS9cIj5cbiAgICAgICAgICAgICAgICAgICAgU2VlIG1vcmUgb24gdzNjLmdpdGh1Yi5pb1xuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAgICAgICAgICAgICBib2R5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNiYzk4NmE7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAyNHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhHQShQYWdlLCAnTXkgaW5kZXggcGFnZScpO1xuIl19 */\n/*@ sourceURL=/Users/anton.halasny/myProjects/next/pages/index.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_shared_libs_ga__WEBPACK_IMPORTED_MODULE_7__["withGA"])(Page, 'My index page'));

/***/ })

})
//# sourceMappingURL=index.js.02975f59b70cac389cb2.hot-update.js.map