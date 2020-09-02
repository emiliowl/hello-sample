"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HelloDft = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Hello = _interopRequireDefault(require("./Hello"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var meta = {
  title: "Example/Hello",
  component: _Hello.default,
  argTypes: {
    text: {
      control: "text"
    }
  }
};
var _default = meta;
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Hello.default, args);
};

var HelloDft = Template.bind({});
exports.HelloDft = HelloDft;
HelloDft.args = {
  text: "yay, hello dft"
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21wb25lbnRzL0hlbGxvLnN0b3JpZXMudHN4Il0sIm5hbWVzIjpbIm1ldGEiLCJ0aXRsZSIsImNvbXBvbmVudCIsIkhlbGxvIiwiYXJnVHlwZXMiLCJ0ZXh0IiwiY29udHJvbCIsIlRlbXBsYXRlIiwiYXJncyIsIkhlbGxvRGZ0IiwiYmluZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUlBOzs7O0FBRUEsSUFBTUEsSUFBSSxHQUFHO0FBQ1hDLEVBQUFBLEtBQUssRUFBRSxlQURJO0FBRVhDLEVBQUFBLFNBQVMsRUFBRUMsY0FGQTtBQUdYQyxFQUFBQSxRQUFRLEVBQUU7QUFDUkMsSUFBQUEsSUFBSSxFQUFFO0FBQUVDLE1BQUFBLE9BQU8sRUFBRTtBQUFYO0FBREU7QUFIQyxDQUFiO2VBUWVOLEk7OztBQUVmLElBQU1PLFFBQTJCLEdBQUcsU0FBOUJBLFFBQThCLENBQUNDLElBQUQ7QUFBQSxzQkFBVSw2QkFBQyxjQUFELEVBQVdBLElBQVgsQ0FBVjtBQUFBLENBQXBDOztBQUVPLElBQU1DLFFBQVEsR0FBR0YsUUFBUSxDQUFDRyxJQUFULENBQWMsRUFBZCxDQUFqQjs7QUFDUEQsUUFBUSxDQUFDRCxJQUFULEdBQWdCO0FBQ2RILEVBQUFBLElBQUksRUFBRTtBQURRLENBQWhCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuaW1wb3J0IHsgU3RvcnksIE1ldGEgfSBmcm9tIFwiQHN0b3J5Ym9vay9yZWFjdC90eXBlcy02LTBcIjtcclxuXHJcbmltcG9ydCBIZWxsbywgeyBIZWxsb1Byb3BzIH0gZnJvbSBcIi4vSGVsbG9cIjtcclxuXHJcbmNvbnN0IG1ldGEgPSB7XHJcbiAgdGl0bGU6IFwiRXhhbXBsZS9IZWxsb1wiLFxyXG4gIGNvbXBvbmVudDogSGVsbG8sXHJcbiAgYXJnVHlwZXM6IHtcclxuICAgIHRleHQ6IHsgY29udHJvbDogXCJ0ZXh0XCIgfVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1ldGE7XHJcblxyXG5jb25zdCBUZW1wbGF0ZSA6U3Rvcnk8SGVsbG9Qcm9wcz4gPSAoYXJncykgPT4gPEhlbGxvIHsuLi5hcmdzfSAvPjtcclxuXHJcbmV4cG9ydCBjb25zdCBIZWxsb0RmdCA9IFRlbXBsYXRlLmJpbmQoe30pO1xyXG5IZWxsb0RmdC5hcmdzID0ge1xyXG4gIHRleHQ6IFwieWF5LCBoZWxsbyBkZnRcIixcclxufTtcclxuIl19