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

var BlockquoteTestimony = function BlockquoteTestimony(props) {
  var children = props.children,
      className = props.className;
  return React.createElement(_BlockquoteStyle.BlockquoteTestimonyWrapper, {
    className: (0, _classnames["default"])('blockquote-testimony', className)
  }, children);
};

var _default = BlockquoteTestimony;
exports["default"] = _default;