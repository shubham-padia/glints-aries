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

var BlockquoteAuthor = function BlockquoteAuthor(props) {
  var children = props.children,
      className = props.className;
  return React.createElement(_BlockquoteStyle.BlockquoteAuthorWrapper, {
    className: (0, _classnames["default"])('blockquote-author', className)
  }, children);
};

var _default = BlockquoteAuthor;
exports["default"] = _default;