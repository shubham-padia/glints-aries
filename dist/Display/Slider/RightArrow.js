"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _Icon = require("../../General/Icon");

var _SliderStyle = require("../../Style/Display/SliderStyle");

var RightArrow = function RightArrow(props) {
  var index = props.index,
      limit = props.limit,
      nextSlide = props.nextSlide,
      arrowWhite = props.arrowWhite;
  var arrowColor = 'black';
  if (limit === index) arrowColor = '#c7c7c7';
  return React.createElement(_SliderStyle.RightArrowContainer, {
    index: index,
    limit: limit,
    onClick: nextSlide
  }, React.createElement(_Icon.Icon, {
    name: "arrow-next",
    color: arrowWhite ? '#FFFFFF' : arrowColor
  }));
};

var _default = RightArrow;
exports["default"] = _default;