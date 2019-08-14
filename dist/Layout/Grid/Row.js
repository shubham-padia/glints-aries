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

var Row = function Row(_ref) {
  var children = _ref.children,
      alignContent = _ref.alignContent,
      justifyContent = _ref.justifyContent,
      defaultProps = (0, _objectWithoutProperties2["default"])(_ref, ["children", "alignContent", "justifyContent"]);
  return React.createElement(_GridStyle.RowContainer, (0, _extends2["default"])({
    alignContent: alignContent,
    justifyContent: justifyContent
  }, defaultProps), children);
};

var _default = Row;
exports["default"] = _default;