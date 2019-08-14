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

var _JobOverviewStyle = require("../../Style/Application/JobOverviewStyle");

var JobOverviewLink = function JobOverviewLink(props) {
  var children = props.children,
      style = props.style,
      defaultProps = (0, _objectWithoutProperties2["default"])(props, ["children", "style"]);
  return React.createElement(_JobOverviewStyle.JobOverviewLinkStyle, (0, _extends2["default"])({
    style: style
  }, defaultProps), children);
};

var _default = JobOverviewLink;
exports["default"] = _default;