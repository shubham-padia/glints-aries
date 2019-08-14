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

var _BadgeStyle = require("../../Style/General/BadgeStyle");

var Badge = function Badge(props) {
  var label = props.label,
      sup = props.sup,
      className = props.className,
      defaultProps = (0, _objectWithoutProperties2["default"])(props, ["label", "sup", "className"]);
  return React.createElement(React.Fragment, null, label && React.createElement(_BadgeStyle.BadgeContainer, (0, _extends2["default"])({
    className: (0, _classnames["default"])('aries-badge', className),
    sup: sup
  }, defaultProps), React.createElement("span", {
    className: "badge-content"
  }, label)));
};

var _default = Badge;
exports["default"] = _default;