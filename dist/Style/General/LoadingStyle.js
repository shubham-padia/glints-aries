"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Spinner = exports.LoadingContainer = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Colors = require("../Colors");

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 2em;\n  height: 2em;\n\n  &:before {\n    ", ";\n    z-index: 100;\n    animation: ", " 1s infinite;\n  }\n  &:after {\n    ", ";\n    border: .35em solid ", ";\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  display: inline-flex;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  content: \"\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  border-radius: 100%;\n  border: .35em solid transparent;\n  border-top-color: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  0%{\n    transform: rotate(0deg);\n  }\n  100%{\n    transform: rotate(360deg);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var spin = (0, _styledComponents.keyframes)(_templateObject());
var spinnerGlobal = (0, _styledComponents.css)(_templateObject2(), _Colors.SecondaryColor.white);

var LoadingContainer = _styledComponents["default"].div(_templateObject3());

exports.LoadingContainer = LoadingContainer;

var Spinner = _styledComponents["default"].div(_templateObject4(), spinnerGlobal, spin, spinnerGlobal, _Colors.SecondaryColor.actionblue);

exports.Spinner = Spinner;