"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _JobOverviewStyle = require("../../Style/Application/JobOverviewStyle");

var _JobOverViewHeader = _interopRequireDefault(require("./JobOverViewHeader"));

var _JobOverviewLabel = _interopRequireDefault(require("./JobOverviewLabel"));

var _JobOverviewBody = _interopRequireDefault(require("./JobOverviewBody"));

var _JobOverviewHeading = _interopRequireDefault(require("./JobOverviewHeading"));

var _JobOverviewLink = _interopRequireDefault(require("./JobOverviewLink"));

var _JobOverviewInfo = _interopRequireDefault(require("./JobOverviewInfo"));

var JobOverview = function JobOverview(_ref) {
  var children = _ref.children;
  return React.createElement(_JobOverviewStyle.JobOverviewContainer, null, children);
};

JobOverview.Header = _JobOverViewHeader["default"];
JobOverview.Body = _JobOverviewBody["default"];
JobOverview.Label = _JobOverviewLabel["default"];
JobOverview.Heading = _JobOverviewHeading["default"];
JobOverview.Link = _JobOverviewLink["default"];
JobOverview.Info = _JobOverviewInfo["default"];
var _default = JobOverview;
exports["default"] = _default;