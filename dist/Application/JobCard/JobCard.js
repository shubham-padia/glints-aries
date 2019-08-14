"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var React = _interopRequireWildcard(require("react"));

var _JobCardStyle = require("../../Style/Application/JobCardStyle");

var _JobCardHeader = _interopRequireDefault(require("./JobCardHeader"));

var _JobCardBody = _interopRequireDefault(require("./JobCardBody"));

var _JobCardDetail = _interopRequireDefault(require("./JobCardDetail"));

var _JobCardDescription = _interopRequireDefault(require("./JobCardDescription"));

var _JobCardFooter = _interopRequireDefault(require("./JobCardFooter"));

var JobCard =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(JobCard, _React$Component);

  function JobCard() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, JobCard);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(JobCard)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderLinkChild", function () {
      var _this$props = _this.props,
          children = _this$props.children,
          targetUrl = _this$props.targetUrl,
          defaultProps = (0, _objectWithoutProperties2["default"])(_this$props, ["children", "targetUrl"]);
      var linkChild = React.Children.map(children, function (child) {
        if (targetUrl && child.props.isLinkAble) {
          return React.cloneElement(child, (0, _objectSpread2["default"])({}, defaultProps));
        }

        return null;
      });
      return linkChild;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderNonLinkChild", function () {
      var children = _this.props.children;
      var nonLinkChild = React.Children.map(children, function (child) {
        if (!child.props.isLinkAble) {
          return child;
        }

        return null;
      });
      return nonLinkChild;
    });
    return _this;
  }

  (0, _createClass2["default"])(JobCard, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          className = _this$props2.className,
          target = _this$props2.target,
          targetUrl = _this$props2.targetUrl,
          defaultProps = (0, _objectWithoutProperties2["default"])(_this$props2, ["children", "className", "target", "targetUrl"]);
      return React.createElement(_JobCardStyle.JobcardContainer, {
        className: "aries-jobcard"
      }, React.createElement(_JobCardStyle.JobCardWrapper, (0, _extends2["default"])({
        className: className,
        role: "presentation",
        "aria-label": "Job Card",
        tabIndex: 0
      }, defaultProps), targetUrl ? React.createElement(React.Fragment, null, React.createElement(_JobCardStyle.CustomLink, {
        to: targetUrl,
        target: target
      }, this.renderLinkChild()), this.renderNonLinkChild()) : this.renderNonLinkChild()));
    }
  }]);
  return JobCard;
}(React.Component);

(0, _defineProperty2["default"])(JobCard, "Header", _JobCardHeader["default"]);
(0, _defineProperty2["default"])(JobCard, "Body", _JobCardBody["default"]);
(0, _defineProperty2["default"])(JobCard, "Detail", _JobCardDetail["default"]);
(0, _defineProperty2["default"])(JobCard, "Description", _JobCardDescription["default"]);
(0, _defineProperty2["default"])(JobCard, "Footer", _JobCardFooter["default"]);
var _default = JobCard;
exports["default"] = _default;