"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _JobOverviewStyle = require("../../Style/Application/JobOverviewStyle");

var JobOverviewHeading = function JobOverviewHeading(props) {
  var children = props.children,
      style = props.style;
  return React.createElement(_JobOverviewStyle.JobOverviewHeadingStyle, {
    style: style
  }, children);
};

var _default = JobOverviewHeading;
exports["default"] = _default;