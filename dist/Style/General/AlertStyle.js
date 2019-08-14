"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AlertIcon = exports.AlertMessage = exports.AlertContent = exports.AlertContainer = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _StyleConfig = require("../../Utils/StyleConfig");

var _Colors = require("../Colors");

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n\n  svg {\n    cursor: pointer;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  margin: 0;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  flex: 1;\n  display: flex;\n  justify-content: space-between;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: fixed;\n  left: 50%;\n  top: ", ";\n  transform: ", ";\n  display: flex;\n  box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.12);\n  padding: 10px;\n  background-color: ", ";\n  z-index: 5000;\n  min-width: 500px;\n  max-width: 800px;\n  animation: ", " .3s ease-in-out;\n  outline: none;\n  line-height: 1.5;\n  font-size: 1em;\n\n  @media ", " {\n    min-width: 100%;\n  }\n\n  ", "\n\n  > svg {\n    font-size: 1.4em;\n    margin-right: 10px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  0% {\n      transform: translate(-50%, 0%);\n    }\n\n  100% {\n    transform: translate(-50%, -100%);\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  0% {\n    transform: translate(-50%, -100%);\n  }\n\n  100% {\n    transform: translate(-50%, 0%);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var fadeDown = (0, _styledComponents.keyframes)(_templateObject());
var fadeUp = (0, _styledComponents.keyframes)(_templateObject2());

var AlertContainer = _styledComponents["default"].div(_templateObject3(), function (_ref) {
  var isVisible = _ref.isVisible;
  return isVisible ? '10px' : '0px';
}, function (_ref2) {
  var isVisible = _ref2.isVisible;
  return isVisible ? 'translate(-50%, 0%)' : 'translate(-50%, -100%)';
}, _Colors.SecondaryColor.ivory, function (_ref3) {
  var isOpen = _ref3.isOpen;
  return isOpen ? fadeDown : fadeUp;
}, _StyleConfig.Device.mobileM, function (_ref4) {
  var type = _ref4.type;

  switch (type) {
    case 'success':
      return "\n          background: ".concat(_Colors.SecondaryColor.lightgreen, ";\n          border: 1px solid ").concat(_Colors.SecondaryColor.darkgreen, ";\n        ");

    case 'warning':
      return "\n          background: ".concat(_Colors.SecondaryColor.lightorange, ";\n          border: 1px solid ").concat(_Colors.SecondaryColor.orange, ";\n        ");

    case 'danger':
      return "\n          background: ".concat(_Colors.SecondaryColor.lightred, ";\n          border: 1px solid ").concat(_Colors.PrimaryColor.glintsred, ";\n        ");

    case 'info':
      return "\n          background: ".concat(_Colors.SecondaryColor.lightblue, ";\n          border: 1px solid ").concat(_Colors.PrimaryColor.glintsblue, ";\n        ");

    default:
      return "\n          background: ".concat(_Colors.SecondaryColor.lightblue, ";\n          border: 1px solid ").concat(_Colors.PrimaryColor.glintsblue, ";\n        ");
  }
});

exports.AlertContainer = AlertContainer;

var AlertContent = _styledComponents["default"].div(_templateObject4());

exports.AlertContent = AlertContent;

var AlertMessage = _styledComponents["default"].p(_templateObject5());

exports.AlertMessage = AlertMessage;

var AlertIcon = _styledComponents["default"].div(_templateObject6());

exports.AlertIcon = AlertIcon;