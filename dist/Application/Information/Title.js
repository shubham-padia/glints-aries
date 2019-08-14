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

var _InformationStyle = require("../../Style/Application/InformationStyle");

var Title = function Title(props) {
  var children = props.children,
      bold = props.bold,
      className = props.className,
      defaultProps = (0, _objectWithoutProperties2["default"])(props, ["children", "bold", "className"]);
  return React.createElement(_InformationStyle.TitleWrapper, (0, _extends2["default"])({
    bold: bold
  }, defaultProps), children);
};

var _default = Title;
exports["default"] = _default;