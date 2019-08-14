"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _Icon = require("../../General/Icon");

var _JobCardStyle = require("../../Style/Application/JobCardStyle");

var JobCardDescription = function JobCardDescription(_ref) {
  var description = _ref.description,
      time = _ref.time,
      defaultProps = (0, _objectWithoutProperties2["default"])(_ref, ["description", "time"]);
  return React.createElement(_JobCardStyle.JobcardDescriptionWrapper, defaultProps, React.createElement("p", null, "".concat(description)), React.createElement("span", null, React.createElement(_Icon.Icon, {
    name: "clock",
    color: "#646464"
  }), time));
};

var _default = JobCardDescription;
exports["default"] = _default;