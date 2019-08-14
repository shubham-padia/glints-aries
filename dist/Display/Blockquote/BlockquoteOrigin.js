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

var BlockquoteOrigin = function BlockquoteOrigin(props) {
  var children = props.children,
      className = props.className;
  return React.createElement(_BlockquoteStyle.BlockquoteOriginWrapper, {
    className: (0, _classnames["default"])('blockquote-origin', className)
  }, children);
};

var _default = BlockquoteOrigin;
exports["default"] = _default;