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

var _ButtonStyle = require("../../Style/General/ButtonStyle");

var SecondaryButton = function SecondaryButton(_ref) {
  var children = _ref.children,
      className = _ref.className,
      block = _ref.block,
      small = _ref.small,
      disabled = _ref.disabled,
      defaultProps = (0, _objectWithoutProperties2["default"])(_ref, ["children", "className", "block", "small", "disabled"]);
  return React.createElement(_ButtonStyle.SecondaryContainer, {
    className: (0, _classnames["default"])('aries-secondarybtn', className),
    block: block,
    disabled: disabled
  }, React.createElement(_ButtonStyle.SecondaryBtn, (0, _extends2["default"])({
    className: "secondarybtn-content",
    block: block,
    small: small,
    disabled: disabled
  }, defaultProps), children));
};

var _default = SecondaryButton;
exports["default"] = _default;