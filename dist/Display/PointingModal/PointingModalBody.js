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

var PointingModalBody = function PointingModalBody(props) {
  var children = props.children,
      className = props.className,
      defaultProps = (0, _objectWithoutProperties2["default"])(props, ["children", "className"]);
  return React.createElement(_PointingModalStyle.PointingModalBodyWrapper, (0, _extends2["default"])({
    className: (0, _classnames["default"])('pointingmodal-body', className),
    role: "list"
  }, defaultProps), React.createElement("ul", null, children));
};

var _default = PointingModalBody;
exports["default"] = _default;