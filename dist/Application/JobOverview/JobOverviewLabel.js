"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _JobOverviewStyle = require("../../Style/Application/JobOverviewStyle");

var JobOverviewLabel = function JobOverviewLabel(props) {
  var children = props.children,
      style = props.style;
  return React.createElement(_JobOverviewStyle.JobOverviewLabelStyle, {
    style: style
  }, children);
};

var _default = JobOverviewLabel;
exports["default"] = _default;