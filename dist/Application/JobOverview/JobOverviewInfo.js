"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _JobOverviewStyle = require("../../Style/Application/JobOverviewStyle");

var JobOverviewInfo = function JobOverviewInfo(_ref) {
  var children = _ref.children,
      style = _ref.style;
  return React.createElement(_JobOverviewStyle.JobOverviewInfostyle, {
    style: style
  }, children);
};

var _default = JobOverviewInfo;
exports["default"] = _default;