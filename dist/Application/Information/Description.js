"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _InformationStyle = require("../../Style/Application/InformationStyle");

var Description = function Description(props) {
  var children = props.children,
      className = props.className;
  return React.createElement(React.Fragment, null, React.createElement(_InformationStyle.DescriptionWrapper, {
    className: className
  }, children));
};

var _default = Description;
exports["default"] = _default;