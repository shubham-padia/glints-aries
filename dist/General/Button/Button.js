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

var _DefaultButton = _interopRequireDefault(require("./DefaultButton"));

var _PrimaryButton = _interopRequireDefault(require("./PrimaryButton"));

var _SecondaryButton = _interopRequireDefault(require("./SecondaryButton"));

var _GhostButton = _interopRequireDefault(require("./GhostButton"));

var _LinkButton = _interopRequireDefault(require("./LinkButton"));

var _StyleConfig = require("../../Utils/StyleConfig");

var renderButton = function renderButton(_ref) {
  var variant = _ref.variant,
      theme = _ref.theme,
      children = _ref.children,
      onClick = _ref.onClick,
      block = _ref.block,
      small = _ref.small,
      className = _ref.className,
      removeHoverEffect = _ref.removeHoverEffect,
      defaultProps = (0, _objectWithoutProperties2["default"])(_ref, ["variant", "theme", "children", "onClick", "block", "small", "className", "removeHoverEffect"]);

  switch (variant) {
    case _StyleConfig.Variant.PRIMARY:
      return React.createElement(_PrimaryButton["default"], (0, _extends2["default"])({
        theme: theme,
        className: className,
        onClick: onClick,
        block: block,
        small: small
      }, defaultProps), children);

    case _StyleConfig.Variant.SECONDARY:
      return React.createElement(_SecondaryButton["default"], (0, _extends2["default"])({
        className: className,
        onClick: onClick,
        block: block,
        small: small
      }, defaultProps), children);

    case _StyleConfig.Variant.GHOST:
      return React.createElement(_GhostButton["default"], (0, _extends2["default"])({
        theme: theme,
        className: className,
        onClick: onClick,
        block: block,
        small: small,
        removeHoverEffect: removeHoverEffect
      }, defaultProps), children);

    case _StyleConfig.Variant.LINK:
      return React.createElement(_LinkButton["default"], (0, _extends2["default"])({
        theme: theme,
        className: className,
        onClick: onClick,
        block: block,
        small: small
      }, defaultProps), children);

    default:
      return React.createElement(_DefaultButton["default"], (0, _extends2["default"])({
        theme: theme,
        className: className,
        onClick: onClick,
        block: block,
        small: small,
        removeHoverEffect: removeHoverEffect
      }, defaultProps), children);
  }
};

var Button = function Button(props) {
  return React.createElement(React.Fragment, null, renderButton(props));
};

var _default = Button;
exports["default"] = _default;