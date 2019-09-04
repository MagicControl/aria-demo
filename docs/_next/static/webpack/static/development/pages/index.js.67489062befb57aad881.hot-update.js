webpackHotUpdate("static/development/pages/index.js",{

/***/ "./shared/components/Dropdown.js":
/*!***************************************!*\
  !*** ./shared/components/Dropdown.js ***!
  \***************************************/
/*! exports provided: Dropdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return Dropdown; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/Users/anton.halasny/myProjects/next/shared/components/Dropdown.js";



var Dropdown = function Dropdown(_ref) {
  var values = _ref.values,
      selectedValue = _ref.selectedValue,
      label = _ref.label,
      setValue = _ref.setValue;
  var dropdownRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])();
  var selectedIndex = selectedValue ? values.indexOf(selectedValue) : 0;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      expanded = _useState2[0],
      setExpanded = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(selectedIndex),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      focus = _useState4[0],
      setFocus = _useState4[1];

  var show = function show() {
    return setExpanded(true);
  };

  var hide = function hide() {
    setExpanded(false);
  };

  var handleKeyPress = function handleKeyPress(e) {
    var keyCode = e.keyCode;

    if (keyCode === 38) {
      setFocus(focus ? focus - 1 : values.length - 1);
      return;
    }

    if (keyCode === 40) {
      setFocus((focus + 1) % values.length);
      return;
    }

    if (keyCode === 13 || keyCode === 32) {
      if (expanded) {
        setValue(values[focus]);
        hide();
        dropdownRef.current.focus();
      } else {
        show();
      }
    }
  };

  var handleClick = function handleClick(e) {
    return setValue(e.target.dataset.item);
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    role: "dropdown",
    tabIndex: "0",
    "aria-labelledby": "2",
    "aria-activedescendant": values[focus],
    onClick: show,
    onKeyUp: handleKeyPress,
    onBlur: hide,
    ref: dropdownRef,
    "aria-haspopup": "listbox",
    className: "jsx-4001185638" + " " + "dropdown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-4001185638" + " " + "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    id: "2",
    className: "jsx-4001185638",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, label)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    "aria-hidden": !expanded,
    role: "listbox",
    className: "jsx-4001185638" + " " + "list".concat(!expanded ? ' hidden' : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    className: "jsx-4001185638",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, values.map(function (item, i) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", {
      id: item,
      key: item,
      tabIndex: -1,
      "data-item": item,
      role: "option",
      "aria-selected": selectedValue === item,
      onMouseDown: handleClick,
      className: "jsx-4001185638" + " " + (classnames__WEBPACK_IMPORTED_MODULE_3___default()({
        selected: selectedValue === item,
        hovered: values[focus] === item
      }) || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    }, "item ", item);
  }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "4001185638",
    __self: this
  }, ".dropdown.jsx-4001185638{width:350px;border-radius:5px;background-color:white;}.title.jsx-4001185638{width:100%;padding:10px;}.list.jsx-4001185638{border-top:1px solid grey;}ul.jsx-4001185638{list-style-type:none;margin:0;padding:0;}li.jsx-4001185638{padding:5px 7px;}li.selected.jsx-4001185638{color:green;}li.hovered.jsx-4001185638,li.jsx-4001185638:hover{background-color:black;color:white;}.hidden.jsx-4001185638{display:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbnRvbi5oYWxhc255L215UHJvamVjdHMvbmV4dC9zaGFyZWQvY29tcG9uZW50cy9Ecm9wZG93bi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RXdCLEFBR2lDLEFBTUQsQUFLZSxBQUlMLEFBTUwsQUFJSixBQUtXLEFBS1YsV0E1QkEsQ0FOSyxBQXlCdEIsQ0FVQSxHQWRBLEtBTmEsRUFlRyxDQXZCaEIsRUFJQSxJQVYyQixBQWViLEtBZWQsS0FkQSxhQWZBIiwiZmlsZSI6Ii9Vc2Vycy9hbnRvbi5oYWxhc255L215UHJvamVjdHMvbmV4dC9zaGFyZWQvY29tcG9uZW50cy9Ecm9wZG93bi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnO1xuXG5leHBvcnQgY29uc3QgRHJvcGRvd24gPSAoeyB2YWx1ZXMsIHNlbGVjdGVkVmFsdWUsIGxhYmVsLCBzZXRWYWx1ZSB9KSA9PiB7XG4gICAgY29uc3QgZHJvcGRvd25SZWYgPSB1c2VSZWYoKTtcbiAgICBjb25zdCBzZWxlY3RlZEluZGV4ID0gc2VsZWN0ZWRWYWx1ZSA/IHZhbHVlcy5pbmRleE9mKHNlbGVjdGVkVmFsdWUpIDogMDtcbiAgICBjb25zdCBbZXhwYW5kZWQsIHNldEV4cGFuZGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbZm9jdXMsIHNldEZvY3VzXSA9IHVzZVN0YXRlKHNlbGVjdGVkSW5kZXgpO1xuICAgIGNvbnN0IHNob3cgPSAoKSA9PiBzZXRFeHBhbmRlZCh0cnVlKTtcbiAgICBjb25zdCBoaWRlID0gKCkgPT4ge1xuICAgICAgICBzZXRFeHBhbmRlZChmYWxzZSk7XG4gICAgfTtcbiAgICBjb25zdCBoYW5kbGVLZXlQcmVzcyA9IGUgPT4ge1xuICAgICAgICBjb25zdCB7IGtleUNvZGUgfSA9IGU7XG4gICAgICAgIGlmIChrZXlDb2RlID09PSAzOCkge1xuICAgICAgICAgICAgc2V0Rm9jdXMoZm9jdXMgPyBmb2N1cyAtIDEgOiB2YWx1ZXMubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGtleUNvZGUgPT09IDQwKSB7XG4gICAgICAgICAgICBzZXRGb2N1cygoZm9jdXMgKyAxKSAlIHZhbHVlcy5sZW5ndGgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChrZXlDb2RlID09PSAxMyB8fCBrZXlDb2RlID09PSAzMikge1xuICAgICAgICAgICAgaWYgKGV4cGFuZGVkKSB7XG4gICAgICAgICAgICAgICAgc2V0VmFsdWUodmFsdWVzW2ZvY3VzXSk7XG4gICAgICAgICAgICAgICAgaGlkZSgpO1xuICAgICAgICAgICAgICAgIGRyb3Bkb3duUmVmLmN1cnJlbnQuZm9jdXMoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc2hvdygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gZSA9PiBzZXRWYWx1ZShlLnRhcmdldC5kYXRhc2V0Lml0ZW0pO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZHJvcGRvd25cIlxuICAgICAgICAgICAgcm9sZT1cImRyb3Bkb3duXCJcbiAgICAgICAgICAgIHRhYkluZGV4PVwiMFwiXG4gICAgICAgICAgICBhcmlhLWxhYmVsbGVkYnk9XCIyXCJcbiAgICAgICAgICAgIGFyaWEtYWN0aXZlZGVzY2VuZGFudD17dmFsdWVzW2ZvY3VzXX1cbiAgICAgICAgICAgIG9uQ2xpY2s9e3Nob3d9XG4gICAgICAgICAgICBvbktleVVwPXtoYW5kbGVLZXlQcmVzc31cbiAgICAgICAgICAgIG9uQmx1cj17aGlkZX1cbiAgICAgICAgICAgIHJlZj17ZHJvcGRvd25SZWZ9XG4gICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwibGlzdGJveFwiXG4gICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBpZD1cIjJcIj57bGFiZWx9PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbGlzdCR7IWV4cGFuZGVkID8gJyBoaWRkZW4nIDogJyd9YH1cbiAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj17IWV4cGFuZGVkfVxuICAgICAgICAgICAgICAgIHJvbGU9XCJsaXN0Ym94XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIHt2YWx1ZXMubWFwKChpdGVtLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17aXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXg9ey0xfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtaXRlbT17aXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByb2xlPVwib3B0aW9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLXNlbGVjdGVkPXtzZWxlY3RlZFZhbHVlID09PSBpdGVtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDogc2VsZWN0ZWRWYWx1ZSA9PT0gaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaG92ZXJlZDogdmFsdWVzW2ZvY3VzXSA9PT0gaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRG93bj17aGFuZGxlQ2xpY2t9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSB7aXRlbX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgICAuZHJvcGRvd24ge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzUwcHg7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmxpc3Qge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgZ3JleTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB1bCB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDdweDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsaS5zZWxlY3RlZCB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBncmVlbjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsaS5ob3ZlcmVkLFxuICAgICAgICAgICAgICAgIGxpOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuaGlkZGVuIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59O1xuIl19 */\n/*@ sourceURL=/Users/anton.halasny/myProjects/next/shared/components/Dropdown.js */"));
};

/***/ })

})
//# sourceMappingURL=index.js.67489062befb57aad881.hot-update.js.map