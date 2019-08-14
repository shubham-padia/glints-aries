"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _DividerStyle = require("../../Style/General/DividerStyle");

var Divider = function Divider(props) {
  var theme = props.theme,
      className = props.className,
      style = props.style;
  return React.createElement(_DividerStyle.DividerContainer, {
    className: (0, _classnames["default"])('aries-divider', className),
    style: style,
    theme: theme
  });
};

var _default = Divider;
exports["default"] = _default;