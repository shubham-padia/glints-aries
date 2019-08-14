"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DrawerWrapper = exports.DrawerContainer = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  height: 100vh;\n  width: 80vw;\n  max-width: 300px;\n  top: 0px;\n  right: 0px;\n  background-color: white;\n  animation: ", " .3s ease-in-out;\n  transform: ", ";\n  outline: none;\n  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.15);\n  overflow-y: auto;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: fixed;\n  display: ", ";\n  min-height: 100vh;\n  max-height: 100vh;\n  width: 100vw;\n  top: 0px;\n  left: 0px;\n  background-color: rgba(0, 0, 0, 0.5);\n  animation: ", " .3s ease-in-out;\n  z-index: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  from {\n    transform: translateX(0%);\n  }\n\n  to {\n    transform: translateX(100%);\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  from {\n    transform: translateX(100%);\n  }\n\n  to {\n    transform: translateX(0%);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var sideToLeft = (0, _styledComponents.keyframes)(_templateObject());
var sideToRight = (0, _styledComponents.keyframes)(_templateObject2());
var fadeIn = (0, _styledComponents.keyframes)(_templateObject3());
var fadeOut = (0, _styledComponents.keyframes)(_templateObject4());

var DrawerContainer = _styledComponents["default"].div(_templateObject5(), function (_ref) {
  var isDisplay = _ref.isDisplay;
  return isDisplay ? 'block' : 'none';
}, function (_ref2) {
  var open = _ref2.open;
  return open ? fadeIn : fadeOut;
}, function (_ref3) {
  var isDisplay = _ref3.isDisplay;
  return isDisplay ? '9999' : '-1';
});

exports.DrawerContainer = DrawerContainer;

var DrawerWrapper = _styledComponents["default"].div(_templateObject6(), function (_ref4) {
  var open = _ref4.open;
  return open ? sideToLeft : sideToRight;
}, function (_ref5) {
  var open = _ref5.open;
  return open ? 'translateX(0%)' : 'translateX(100%)';
});

exports.DrawerWrapper = DrawerWrapper;