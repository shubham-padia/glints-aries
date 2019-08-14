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

var _BreadcrumbStyle = require("../../Style/Navigation/BreadcrumbStyle");

var BreadcrumbItem = function BreadcrumbItem(props) {
  var active = props.active,
      className = props.className,
      children = props.children,
      defaultProps = (0, _objectWithoutProperties2["default"])(props, ["active", "className", "children"]);
  return React.createElement(_BreadcrumbStyle.BreadcrumbItemWrapper, (0, _extends2["default"])({
    className: className,
    active: active
  }, defaultProps), children, React.createElement("span", null, "/"));
};

var _default = BreadcrumbItem;
exports["default"] = _default;