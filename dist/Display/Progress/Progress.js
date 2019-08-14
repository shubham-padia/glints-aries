"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ProgressStyle = require("../../Style/Display/ProgressStyle");

var _Colors = require("../../Style/Colors");

var Progress = function Progress(props) {
  var className = props.className,
      _props$percentage = props.percentage,
      percentage = _props$percentage === void 0 ? 100 : _props$percentage,
      _props$percentageRang = props.percentageRange,
      percentageRange = _props$percentageRang === void 0 ? [50] : _props$percentageRang,
      _props$size = props.size,
      size = _props$size === void 0 ? 8 : _props$size,
      content = props.content,
      defaultProps = (0, _objectWithoutProperties2["default"])(props, ["className", "percentage", "percentageRange", "size", "content"]);
  var normalizedPercentage;
  var normalizedSize;

  if (percentage < 0 || percentage > 100) {
    normalizedPercentage = percentage < 0 ? 0 : percentage > 100 ? 100 : percentage;
    console.warn("Invalid prop value on Progress component: percentage prop expected a value between 0-100. Received ".concat(percentage, " instead."));
  } else {
    normalizedPercentage = percentage;
  }

  if (percentageRange.length > 2) {
    console.warn("Invalid prop value on Progress component: percentageRange prop expected an array with a maximum of 2 numbers. Received [".concat(percentageRange, "] instead."));
  }

  if (size < 1 || size > 10) {
    normalizedSize = size < 1 ? 1 : size > 10 ? 10 : size;
    console.warn("Invalid prop value on Progress component: size prop expected a value between 1-10. Received ".concat(size, " instead."));
  } else {
    normalizedSize = size;
  }

  var progressValue = normalizedPercentage > 100 ? 282.6 * (1 - 100 / 100) : 282.6 * (1 - normalizedPercentage / 100);
  var sizeInEm = (normalizedSize + 2) / 10;
  var color;

  if (percentageRange.length >= 2) {
    var _percentageRange = (0, _slicedToArray2["default"])(percentageRange, 2),
        firstRange = _percentageRange[0],
        secondRange = _percentageRange[1];

    color = normalizedPercentage > secondRange ? _Colors.SecondaryColor.green : normalizedPercentage > firstRange ? _Colors.SecondaryColor.orange : _Colors.PrimaryColor.glintsred;
  } else if (percentageRange.length === 1) {
    var _percentageRange2 = (0, _slicedToArray2["default"])(percentageRange, 1),
        _firstRange = _percentageRange2[0];

    color = normalizedPercentage > _firstRange ? _Colors.SecondaryColor.green : _Colors.SecondaryColor.orange;
  } else {
    color = _Colors.SecondaryColor.green;
  }

  return React.createElement(React.Fragment, null, React.createElement(_ProgressStyle.ProgressContainer, (0, _extends2["default"])({
    className: (0, _classnames["default"])('aries-progress', className),
    progress: progressValue,
    size: sizeInEm,
    role: "progressbar",
    "aria-valuenow": normalizedPercentage,
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    tabIndex: 0
  }, defaultProps), React.createElement(_ProgressStyle.ProgressContent, {
    tabIndex: -1,
    size: sizeInEm
  }, React.createElement("svg", {
    width: "8em",
    height: "8em",
    viewBox: "0 0 100 100"
  }, React.createElement("circle", {
    cx: "50",
    cy: "50",
    r: "45",
    fill: "none",
    stroke: _Colors.SecondaryColor.lighterblack,
    strokeWidth: "8"
  }), React.createElement("circle", {
    className: "progress-circle__value",
    cx: "50",
    cy: "50",
    r: "45",
    fill: "none",
    stroke: color,
    strokeWidth: "8"
  })), React.createElement(_ProgressStyle.ProgressLabelWrapper, {
    "aria-hidden": "true"
  }, content || React.createElement(_ProgressStyle.PercentageCompletion, null, "".concat(normalizedPercentage > 100 ? 100 : normalizedPercentage, "%")), content ? null : React.createElement(_ProgressStyle.LabelText, null, "COMPLETE")))));
};

var _default = Progress;
exports["default"] = _default;