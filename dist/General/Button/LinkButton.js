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

var _ButtonStyle = require("../../Style/General/ButtonStyle");

var LinkButton = function LinkButton(_ref) {
  var children = _ref.children,
      defaultProps = (0, _objectWithoutProperties2["default"])(_ref, ["children"]);
  return React.createElement(_ButtonStyle.LinkBtn, (0, _extends2["default"])({
    className: "aries-linkbtn"
  }, defaultProps), children);
};

var _default = LinkButton;
exports["default"] = _default;