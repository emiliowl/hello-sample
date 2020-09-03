"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Hello;

var _react = _interopRequireDefault(require("react"));

var _Jumbotron = _interopRequireDefault(require("react-bootstrap/Jumbotron"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Hello(props) {
  return /*#__PURE__*/_react.default.createElement(_Jumbotron.default, null, /*#__PURE__*/_react.default.createElement("h1", null, props.title), /*#__PURE__*/_react.default.createElement("p", null, props.text), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    onClick: props.onClick
  }, props.actionText)));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0hlbGxvL0hlbGxvLnRzeCJdLCJuYW1lcyI6WyJIZWxsbyIsInByb3BzIiwidGl0bGUiLCJ0ZXh0Iiwib25DbGljayIsImFjdGlvblRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQTs7OztBQVNlLFNBQVNBLEtBQVQsQ0FBZUMsS0FBZixFQUFrQztBQUM3QyxzQkFDRSw2QkFBQyxrQkFBRCxxQkFDRSx5Q0FBS0EsS0FBSyxDQUFDQyxLQUFYLENBREYsZUFFRSx3Q0FDR0QsS0FBSyxDQUFDRSxJQURULENBRkYsZUFLRSx1REFDRTtBQUFRLElBQUEsSUFBSSxFQUFDLFFBQWI7QUFBc0IsSUFBQSxPQUFPLEVBQUVGLEtBQUssQ0FBQ0c7QUFBckMsS0FBK0NILEtBQUssQ0FBQ0ksVUFBckQsQ0FERixDQUxGLENBREY7QUFXSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5pbXBvcnQgSnVtYm90cm9uIGZyb20gJ3JlYWN0LWJvb3RzdHJhcC9KdW1ib3Ryb24nO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBIZWxsb1Byb3BzIHtcclxuICAgIHRpdGxlOiBzdHJpbmc7XHJcbiAgICB0ZXh0OiBzdHJpbmc7XHJcbiAgICBhY3Rpb25UZXh0OiBzdHJpbmc7XHJcbiAgICBvbkNsaWNrOiAoKSA9PiB2b2lkO1xyXG4gIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlbGxvKHByb3BzIDpIZWxsb1Byb3BzKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8SnVtYm90cm9uPlxyXG4gICAgICAgIDxoMT57cHJvcHMudGl0bGV9PC9oMT5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIHtwcm9wcy50ZXh0fVxyXG4gICAgICAgIDwvcD5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17cHJvcHMub25DbGlja30+e3Byb3BzLmFjdGlvblRleHR9PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvSnVtYm90cm9uPlxyXG4gICAgKTtcclxufVxyXG4iXX0=