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

var GhostButton = function GhostButton(_ref) {
  var children = _ref.children,
      className = _ref.className,
      theme = _ref.theme,
      disabled = _ref.disabled,
      block = _ref.block,
      small = _ref.small,
      removeHoverEffect = _ref.removeHoverEffect,
      defaultProps = (0, _objectWithoutProperties2["default"])(_ref, ["children", "className", "theme", "disabled", "block", "small", "removeHoverEffect"]);
  return React.createElement(_ButtonStyle.GhostBtnContainer, {
    className: (0, _classnames["default"])('aries-ghostbtn', className),
    theme: theme,
    disabled: disabled,
    block: block,
    removeHoverEffect: removeHoverEffect
  }, React.createElement(_ButtonStyle.GhostBtn, (0, _extends2["default"])({
    className: "ghostbtn-content",
    theme: theme,
    disabled: disabled,
    block: block,
    small: small
  }, defaultProps), children));
};

var _default = GhostButton;
exports["default"] = _default;