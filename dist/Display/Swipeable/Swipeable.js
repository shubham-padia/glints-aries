"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _SwipeableStyle = require("../../Style/Display/SwipeableStyle");

var _SwipeableItem = _interopRequireDefault(require("./SwipeableItem"));

var Swipeable = function Swipeable(props) {
  var children = props.children,
      className = props.className;
  return React.createElement(_SwipeableStyle.SwipeableContainer, {
    className: (0, _classnames["default"])('aries-swipeable', className)
  }, children);
};

Swipeable.Item = _SwipeableItem["default"];
var _default = Swipeable;
exports["default"] = _default;