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

var _GridStyle = require("../../Style/Layout/GridStyle");

var Col = function Col(_ref) {
  var xs = _ref.xs,
      sm = _ref.sm,
      md = _ref.md,
      xsOrder = _ref.xsOrder,
      smOrder = _ref.smOrder,
      mdOrder = _ref.mdOrder,
      children = _ref.children,
      defaultProps = (0, _objectWithoutProperties2["default"])(_ref, ["xs", "sm", "md", "xsOrder", "smOrder", "mdOrder", "children"]);
  return React.createElement(_GridStyle.ColumnContainer, (0, _extends2["default"])({
    xs: xs,
    sm: sm,
    md: md,
    xsOrder: xsOrder,
    smOrder: smOrder,
    mdOrder: mdOrder
  }, defaultProps), children);
};

Col.defaultProps = {
  xs: 12,
  sm: 12,
  md: 12
};
var _default = Col;
exports["default"] = _default;