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

var _BreadcrumbStyle = require("../../Style/Navigation/BreadcrumbStyle");

var _BreadcrumbItem = _interopRequireDefault(require("./BreadcrumbItem"));

var Breadcrumb = function Breadcrumb(props) {
  var className = props.className,
      children = props.children,
      defaultProps = (0, _objectWithoutProperties2["default"])(props, ["className", "children"]);
  return React.createElement(_BreadcrumbStyle.BreadcrumbContainer, (0, _extends2["default"])({
    className: (0, _classnames["default"])('aries-breadcrumb', className)
  }, defaultProps), children);
};

Breadcrumb.Item = _BreadcrumbItem["default"];
var _default = Breadcrumb;
exports["default"] = _default;