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

var _SwipeableStyle = require("../../Style/Display/SwipeableStyle");

var SwipeableItem = function SwipeableItem(props) {
  var children = props.children,
      className = props.className,
      defaultProps = (0, _objectWithoutProperties2["default"])(props, ["children", "className"]);
  return React.createElement(_SwipeableStyle.SwipeableItemWrapper, (0, _extends2["default"])({
    className: "swipeable-itemwrapper"
  }, defaultProps), children);
};

var _default = SwipeableItem;
exports["default"] = _default;