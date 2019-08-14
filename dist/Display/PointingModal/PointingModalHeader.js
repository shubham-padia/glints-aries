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

var _PointingModalStyle = require("../../Style/Display/PointingModalStyle");

var PointingModalHeader = function PointingModalHeader(props) {
  var children = props.children,
      className = props.className,
      defaultProps = (0, _objectWithoutProperties2["default"])(props, ["children", "className"]);
  return React.createElement(_PointingModalStyle.PointingModalHeaderWrapper, (0, _extends2["default"])({
    className: (0, _classnames["default"])('pointingmodal-header', className),
    role: "group"
  }, defaultProps), children);
};

var _default = PointingModalHeader;
exports["default"] = _default;