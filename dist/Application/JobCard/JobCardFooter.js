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

var _classnames = _interopRequireDefault(require("classnames"));

var _JobCardStyle = require("../../Style/Application/JobCardStyle");

var JobCardFooter = function JobCardFooter(props) {
  var children = props.children,
      className = props.className,
      defaultProps = (0, _objectWithoutProperties2["default"])(props, ["children", "className"]);
  return React.createElement(_JobCardStyle.JobCardFooterWrapper, (0, _extends2["default"])({
    className: (0, _classnames["default"])('jobcard-footer', className),
    role: "presentation",
    "aria-label": "Job Card Footer",
    tabIndex: 0 // totalItems={React.Children.count(children)}

  }, defaultProps), children);
};

var _default = JobCardFooter;
exports["default"] = _default;