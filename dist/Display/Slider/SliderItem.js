"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _SliderStyle = require("../../Style/Display/SliderStyle");

var SliderItem = function SliderItem(props) {
  var children = props.children;
  return React.createElement(_SliderStyle.SliderItemWrapper, {
    className: "slider-item"
  }, children);
};

var _default = SliderItem;
exports["default"] = _default;