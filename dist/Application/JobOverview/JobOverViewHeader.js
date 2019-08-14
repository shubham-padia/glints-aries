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

var JobOverViewHeader = function JobOverViewHeader(props) {
  var children = props.children,
      defaultProps = (0, _objectWithoutProperties2["default"])(props, ["children"]);
  return React.createElement(_JobOverviewStyle.JobOverviewHeaderStyle, defaultProps, children);
};

;
var _default = JobOverViewHeader;
exports["default"] = _default;