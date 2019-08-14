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

var BlockquoteProfile = function BlockquoteProfile(props) {
  var children = props.children,
      className = props.className;
  return React.createElement(_BlockquoteStyle.BlockquoteProfileWrapper, {
    className: (0, _classnames["default"])('blockquote-profile', className)
  }, children);
};

var _default = BlockquoteProfile;
exports["default"] = _default;