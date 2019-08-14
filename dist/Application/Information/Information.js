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

var _Description = _interopRequireDefault(require("./Description"));

var _Detail = _interopRequireDefault(require("./Detail"));

var _Title = _interopRequireDefault(require("./Title"));

var Information = function Information(props) {
  var children = props.children,
      className = props.className,
      defaultProps = (0, _objectWithoutProperties2["default"])(props, ["children", "className"]);
  return React.createElement(_InformationStyle.InformationContainer, (0, _extends2["default"])({
    className: className
  }, defaultProps), children);
};

Information.Title = _Title["default"];
Information.Description = _Description["default"];
Information.Detail = _Detail["default"];
;
var _default = Information;
exports["default"] = _default;