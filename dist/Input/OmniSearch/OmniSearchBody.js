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

var _OmniSearchStyle = require("../../Style/Input/OmniSearchStyle");

var OmniSearchBody = function OmniSearchBody(props) {
  var children = props.children,
      className = props.className,
      defaultProps = (0, _objectWithoutProperties2["default"])(props, ["children", "className"]);
  return React.createElement(_OmniSearchStyle.OmniSearchResultContainer, (0, _extends2["default"])({
    className: className
  }, defaultProps), children);
};

var _default = OmniSearchBody;
exports["default"] = _default;