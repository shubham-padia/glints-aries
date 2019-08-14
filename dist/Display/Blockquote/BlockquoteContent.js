"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _BlockquoteStyle = require("../../Style/Display/BlockquoteStyle");

var BlockquoteContent = function BlockquoteContent(props) {
  var children = props.children,
      className = props.className;
  return React.createElement(_BlockquoteStyle.BlockquoteContentWrapper, {
    className: (0, _classnames["default"])('blockquote-contentwrapper', className)
  }, children);
};

var _default = BlockquoteContent;
exports["default"] = _default;