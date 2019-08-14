"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../../General/Icon"));

var _JobCardStyle = require("../../Style/Application/JobCardStyle");

var JobCardDetail = function JobCardDetail(_ref) {
  var details = _ref.details,
      id = _ref.id,
      defaultProps = (0, _objectWithoutProperties2["default"])(_ref, ["details", "id"]);
  return React.createElement(_JobCardStyle.JobcardDetailWrapper, defaultProps, React.createElement("ul", null, details.filter(function (detail) {
    return detail !== '';
  }).map(function (detail, index) {
    return React.createElement("div", {
      key: "".concat(detail.key, "-").concat(id, "-").concat(index)
    }, React.createElement(_JobCardStyle.IconHolder, null, React.createElement(_Icon["default"], {
      name: "dot",
      color: "#c6c6c6"
    })), React.createElement("li", null, detail));
  })));
};

var _default = JobCardDetail;
exports["default"] = _default;