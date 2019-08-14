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

var _TagStyle = require("../../Style/General/TagStyle");

var Tag = function Tag(props) {
  var className = props.className,
      children = props.children,
      theme = props.theme,
      block = props.block,
      outline = props.outline,
      defaultProps = (0, _objectWithoutProperties2["default"])(props, ["className", "children", "theme", "block", "outline"]);
  return React.createElement(React.Fragment, null, React.createElement(_TagStyle.TagContainer, (0, _extends2["default"])({
    className: (0, _classnames["default"])('aries-tag', className),
    role: "presentation",
    tabIndex: 0,
    theme: theme,
    block: block,
    outline: outline
  }, defaultProps), React.createElement(_TagStyle.TagContent, {
    className: "tag-content",
    tabIndex: -1
  }, children)));
};

var _default = Tag;
exports["default"] = _default;