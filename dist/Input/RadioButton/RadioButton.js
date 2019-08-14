"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _RadioButtonStyle = require("../../Style/Input/RadioButtonStyle");

var RadioButton = function RadioButton(props) {
  var label = props.label,
      theme = props.theme,
      className = props.className,
      defaultProps = (0, _objectWithoutProperties2["default"])(props, ["label", "theme", "className"]);
  return React.createElement(React.Fragment, null, React.createElement(_RadioButtonStyle.RadioContainer, {
    className: (0, _classnames["default"])('aries-radiobtn', className),
    tabIndex: 0
  }, React.createElement("input", (0, _extends2["default"])({
    type: "radio"
  }, defaultProps)), React.createElement(_RadioButtonStyle.RadioLabel, {
    className: "radiobtn-content",
    theme: theme,
    tabIndex: -1
  }, label)));
};

var _default = RadioButton;
exports["default"] = _default;