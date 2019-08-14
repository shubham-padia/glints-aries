"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CollapsibleBody = exports.CollapsibleHeader = exports.CollapsibleContainer = exports.CollapsibleContent = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Colors = require("../Colors");

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  padding: 0 1.2em 1.2em 1.2em;\n  margin-bottom: 0;\n  animation: ", " .3s linear;\n  cursor: default;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background: ", ";\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.2em;\n\n  &:hover {\n    color: ", ";\n  }\n\n  svg {\n    transform: rotate(0);\n    transition: transform .5s;\n    ", "\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  cursor: pointer;\n  color: black;\n  background-color: ", ";\n  border: solid 1px ", ";\n  font-size: 1em;\n\n  &:focus {\n    outline: none;\n  }\n\n  &:focus > ", " {\n    outline: 5px auto -webkit-focus-ring-color;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  outline: none;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  from {\n    opacity: 0;\n    transform: translate3d(0, 10%, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var animateCollapsible = (0, _styledComponents.keyframes)(_templateObject());

var CollapsibleContent = _styledComponents["default"].div(_templateObject2());

exports.CollapsibleContent = CollapsibleContent;

var CollapsibleContainer = _styledComponents["default"].div(_templateObject3(), _Colors.SecondaryColor.white, _Colors.SecondaryColor.lightgrey, CollapsibleContent);

exports.CollapsibleContainer = CollapsibleContainer;

var CollapsibleHeader = _styledComponents["default"].div(_templateObject4(), _Colors.SecondaryColor.white, _Colors.SecondaryColor.blue, function (_ref) {
  var isOpen = _ref.isOpen;

  if (isOpen) {
    return "\n        transform: rotate(180deg);\n        transition: transform .5s;\n      ";
  }
});

exports.CollapsibleHeader = CollapsibleHeader;

var CollapsibleBody = _styledComponents["default"].div(_templateObject5(), animateCollapsible);

exports.CollapsibleBody = CollapsibleBody;