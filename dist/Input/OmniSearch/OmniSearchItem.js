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

var OmniSearchItem = function OmniSearchItem(props) {
  var children = props.children,
      className = props.className,
      onClick = props.onClick,
      defaultProps = (0, _objectWithoutProperties2["default"])(props, ["children", "className", "onClick"]);
  return React.createElement(React.Fragment, null, React.createElement(_OmniSearchStyle.OmniSearchItemWrapper, (0, _extends2["default"])({
    className: className,
    onMouseDown: onClick,
    role: "listitem"
  }, defaultProps), children));
};

var _default = OmniSearchItem;
exports["default"] = _default;