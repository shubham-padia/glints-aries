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

var _HeadingStyle = require("../../Style/General/HeadingStyle");

var Heading = function Heading(props) {
  var className = props.className,
      inline = props.inline,
      children = props.children,
      uppercaseText = props.uppercaseText,
      defaultProps = (0, _objectWithoutProperties2["default"])(props, ["className", "inline", "children", "uppercaseText"]);
  return React.createElement(React.Fragment, null, React.createElement(_HeadingStyle.HeadingContainer, (0, _extends2["default"])({
    className: (0, _classnames["default"])('aries-heading', className),
    inline: inline,
    uppercaseText: uppercaseText
  }, defaultProps), React.createElement("span", {
    className: "heading-text"
  }, children)));
};

var _default = Heading;
exports["default"] = _default;