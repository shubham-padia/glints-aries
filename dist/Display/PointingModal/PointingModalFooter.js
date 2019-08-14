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

var PointingModalFooter = function PointingModalFooter(props) {
  var children = props.children,
      className = props.className,
      defaultProps = (0, _objectWithoutProperties2["default"])(props, ["children", "className"]);
  return React.createElement(_PointingModalStyle.PointingModalFooterWrapper, (0, _extends2["default"])({
    className: (0, _classnames["default"])('pointingmodal-footer', className)
  }, defaultProps), children);
};

var _default = PointingModalFooter;
exports["default"] = _default;