"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _Icon = require("../../General/Icon");

var _SliderStyle = require("../../Style/Display/SliderStyle");

var LeftArrow = function LeftArrow(props) {
  var index = props.index,
      previousSlide = props.previousSlide,
      arrowWhite = props.arrowWhite;
  var arrowColor = 'black';
  if (index === 1) arrowColor = '#c7c7c7';
  return React.createElement(_SliderStyle.LeftArrowContainer, {
    index: index,
    onClick: previousSlide
  }, React.createElement(_Icon.Icon, {
    name: "arrow-back",
    color: arrowWhite ? '#FFFFFF' : arrowColor
  }));
};

var _default = LeftArrow;
exports["default"] = _default;