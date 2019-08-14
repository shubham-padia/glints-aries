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

var JobCardHeader = function JobCardHeader(props) {
  var title = props.title,
      tag = props.tag,
      url = props.url,
      imgUrl = props.imgUrl,
      subtitle = props.subtitle,
      onClickSubtitle = props.onClickSubtitle,
      className = props.className,
      jobTitleClass = props.jobTitleClass,
      companyNameClass = props.companyNameClass,
      defaultProps = (0, _objectWithoutProperties2["default"])(props, ["title", "tag", "url", "imgUrl", "subtitle", "onClickSubtitle", "className", "jobTitleClass", "companyNameClass"]);
  return React.createElement(_JobCardStyle.JobcardHeaderWrapper, (0, _extends2["default"])({
    className: (0, _classnames["default"])('jobcard-header', className),
    role: "presentation",
    "aria-label": "Job Card Header",
    tabIndex: 0
  }, defaultProps), React.createElement(_JobCardStyle.JobcardHeaderImage, {
    "aria-hidden": "true"
  }, typeof imgUrl === 'string' ? React.createElement(_JobCardStyle.Image, {
    src: imgUrl,
    alt: ""
  }) : imgUrl), React.createElement(_JobCardStyle.JobcardHeaderContent, null, tag && React.createElement(_JobCardStyle.LabelTag, null, tag), React.createElement(_JobCardStyle.Title, {
    className: jobTitleClass
  }, "".concat(title.slice(0, 50))), React.createElement(_JobCardStyle.SubtitleTitle, {
    onClick: onClickSubtitle,
    className: companyNameClass,
    role: "link",
    tabIndex: 0
  }, subtitle)));
};

;
JobCardHeader.defaultProps = {
  jobTitleClass: '',
  companyNameClass: '',
  onClickSubtitle: function onClickSubtitle() {}
};
var _default = JobCardHeader;
exports["default"] = _default;