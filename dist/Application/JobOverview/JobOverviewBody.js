"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _JobOverviewStyle = require("../../Style/Application/JobOverviewStyle");

var JobOverViewBody = function JobOverViewBody(_ref) {
  var children = _ref.children,
      defaultProps = (0, _objectWithoutProperties2["default"])(_ref, ["children"]);
  return React.createElement(_JobOverviewStyle.JobOverviewBodystyle, defaultProps, children);
};

var _default = JobOverViewBody;
exports["default"] = _default;