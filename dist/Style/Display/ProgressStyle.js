"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LabelText = exports.PercentageCompletion = exports.ProgressLabelWrapper = exports.ProgressContainer = exports.ProgressContent = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Colors = require("../Colors");

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin: .6em 0 0;\n  font-size: .75em;\n  font-weight: 500;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin: 0;\n  font-size: 1.5em;\n  font-weight: 900;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  top: 50%;\n  left: 0;\n  display: block;\n  width: 100%;\n  text-align: center;\n  line-height: 1;\n  font-size: inherit;\n  transform: translateY(-50%);\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  display: flex;\n  background: transparent;\n  z-index: 2;\n\n  &:focus {\n    outline: none;\n  }\n\n  &:focus > ", " {\n    outline: 5px auto -webkit-focus-ring-color;\n  }\n\n  &:after {\n    content: '';\n    position: absolute;\n    display: block;\n    top: 1em;\n    left: 1em;\n    width: 7.2em;\n    height: 7.2em;\n    border-radius: 50%;\n    font-size: ", ";\n    background: ", ";\n    z-index: -1;\n  }\n\n  > div > svg {\n    transform: rotate(-90deg);\n\n    .progress-circle__value {\n      stroke-dasharray: 282.6;\n      stroke-dashoffset: ", ";\n      animation: ", " 1s ease-in-out;\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  outline: none;\n  font-size: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  from {\n    stroke-dashoffset: 282.6;\n  }\n\n  to {\n    stroke-dashoffset: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var spinning = (0, _styledComponents.keyframes)(_templateObject(), function (props) {
  return props.progress;
});

var ProgressContent = _styledComponents["default"].div(_templateObject2(), function (props) {
  return "".concat(props.size, "em");
});

exports.ProgressContent = ProgressContent;

var ProgressContainer = _styledComponents["default"].div(_templateObject3(), ProgressContent, function (props) {
  return "".concat(props.size, "em");
}, _Colors.SecondaryColor.whitesmoke, function (props) {
  return props.progress;
}, spinning);

exports.ProgressContainer = ProgressContainer;

var ProgressLabelWrapper = _styledComponents["default"].label(_templateObject4());

exports.ProgressLabelWrapper = ProgressLabelWrapper;

var PercentageCompletion = _styledComponents["default"].h1(_templateObject5());

exports.PercentageCompletion = PercentageCompletion;

var LabelText = _styledComponents["default"].p(_templateObject6());

exports.LabelText = LabelText;