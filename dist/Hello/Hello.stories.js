"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HelloDft = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

require("bootstrap/dist/css/bootstrap.css");

var _Hello = _interopRequireDefault(require("./Hello"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
  title: "Cox4U/Hello",
  component: _Hello.default,
  argTypes: {
    title: {
      control: "text"
    },
    text: {
      control: "text"
    },
    actionText: {
      control: "text"
    },
    onClick: {
      action: 'clicked'
    }
  }
};
exports.default = _default;

var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_Hello.default, args);
};

var HelloDft = Template.bind({});
exports.HelloDft = HelloDft;
HelloDft.args = {
  title: "The Title",
  text: "yay, hello dft",
  actionText: "Do Action!"
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL0hlbGxvL0hlbGxvLnN0b3JpZXMudHN4Il0sIm5hbWVzIjpbInRpdGxlIiwiY29tcG9uZW50IiwiSGVsbG8iLCJhcmdUeXBlcyIsImNvbnRyb2wiLCJ0ZXh0IiwiYWN0aW9uVGV4dCIsIm9uQ2xpY2siLCJhY3Rpb24iLCJUZW1wbGF0ZSIsImFyZ3MiLCJIZWxsb0RmdCIsImJpbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFJQTs7OztlQUVlO0FBQ2JBLEVBQUFBLEtBQUssRUFBRSxhQURNO0FBRWJDLEVBQUFBLFNBQVMsRUFBRUMsY0FGRTtBQUdiQyxFQUFBQSxRQUFRLEVBQUU7QUFDUkgsSUFBQUEsS0FBSyxFQUFFO0FBQUVJLE1BQUFBLE9BQU8sRUFBRTtBQUFYLEtBREM7QUFFUkMsSUFBQUEsSUFBSSxFQUFFO0FBQUVELE1BQUFBLE9BQU8sRUFBRTtBQUFYLEtBRkU7QUFHUkUsSUFBQUEsVUFBVSxFQUFFO0FBQUVGLE1BQUFBLE9BQU8sRUFBRTtBQUFYLEtBSEo7QUFJUkcsSUFBQUEsT0FBTyxFQUFFO0FBQUVDLE1BQUFBLE1BQU0sRUFBRTtBQUFWO0FBSkQ7QUFIRyxDOzs7QUFXZixJQUFNQyxRQUEyQixHQUFHLFNBQTlCQSxRQUE4QixDQUFDQyxJQUFEO0FBQUEsc0JBQXNCLDZCQUFDLGNBQUQsRUFBV0EsSUFBWCxDQUF0QjtBQUFBLENBQXBDOztBQUVPLElBQU1DLFFBQVEsR0FBR0YsUUFBUSxDQUFDRyxJQUFULENBQWMsRUFBZCxDQUFqQjs7QUFDUEQsUUFBUSxDQUFDRCxJQUFULEdBQWdCO0FBQ2RWLEVBQUFBLEtBQUssRUFBRSxXQURPO0FBRWRLLEVBQUFBLElBQUksRUFBRSxnQkFGUTtBQUdkQyxFQUFBQSxVQUFVLEVBQUU7QUFIRSxDQUFoQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0ICdib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzcydcclxuXHJcbmltcG9ydCB7IFN0b3J5LCBNZXRhIH0gZnJvbSBcIkBzdG9yeWJvb2svcmVhY3QvdHlwZXMtNi0wXCI7XHJcblxyXG5pbXBvcnQgSGVsbG8sIHsgSGVsbG9Qcm9wcyB9IGZyb20gXCIuL0hlbGxvXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgdGl0bGU6IFwiQ294NFUvSGVsbG9cIixcclxuICBjb21wb25lbnQ6IEhlbGxvLFxyXG4gIGFyZ1R5cGVzOiB7XHJcbiAgICB0aXRsZTogeyBjb250cm9sOiBcInRleHRcIiB9LFxyXG4gICAgdGV4dDogeyBjb250cm9sOiBcInRleHRcIiB9LFxyXG4gICAgYWN0aW9uVGV4dDogeyBjb250cm9sOiBcInRleHRcIiB9LFxyXG4gICAgb25DbGljazogeyBhY3Rpb246ICdjbGlja2VkJyB9XHJcbiAgfVxyXG59IGFzIE1ldGE7XHJcblxyXG5jb25zdCBUZW1wbGF0ZSA6U3Rvcnk8SGVsbG9Qcm9wcz4gPSAoYXJncyA6SGVsbG9Qcm9wcykgPT4gPEhlbGxvIHsuLi5hcmdzfSAvPjtcclxuXHJcbmV4cG9ydCBjb25zdCBIZWxsb0RmdCA9IFRlbXBsYXRlLmJpbmQoe30pO1xyXG5IZWxsb0RmdC5hcmdzID0ge1xyXG4gIHRpdGxlOiBcIlRoZSBUaXRsZVwiLFxyXG4gIHRleHQ6IFwieWF5LCBoZWxsbyBkZnRcIixcclxuICBhY3Rpb25UZXh0OiBcIkRvIEFjdGlvbiFcIlxyXG59O1xyXG4iXX0=