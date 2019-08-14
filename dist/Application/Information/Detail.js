"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _InformationStyle = require("../../Style/Application/InformationStyle");

var Detail = function Detail(props) {
  var children = props.children,
      className = props.className;
  return React.createElement(_InformationStyle.DetailWrapper, {
    className: className
  }, children);
};

var _default = Detail;
exports["default"] = _default;