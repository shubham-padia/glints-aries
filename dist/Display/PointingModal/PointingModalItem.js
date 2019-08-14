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

var _PointingModalStyle = require("../../Style/Display/PointingModalStyle");

var PointingModalItem = function PointingModalItem(props) {
  var children = props.children,
      className = props.className,
      defaultProps = (0, _objectWithoutProperties2["default"])(props, ["children", "className"]);
  return React.createElement(_PointingModalStyle.PointingModalItemWrapper, (0, _extends2["default"])({
    className: "pointingmodal-item"
  }, defaultProps), children);
};

var _default = PointingModalItem;
exports["default"] = _default;