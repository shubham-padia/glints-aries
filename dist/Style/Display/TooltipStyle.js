"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TooltipMessage = exports.TooltipContent = exports.TooltipContainer = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = require("../Colors");

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background: ", ";\n  border-radius: 3px;\n  color: ", ";\n  line-height: 1.5;\n  font-size: .8em;\n  padding: 5px;\n  text-align: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  z-index: 10;\n\n  ", "\n\n  ", "\n\n  &:after {\n    content: '';\n    position: absolute;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  display: inline-flex;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var TooltipContainer = _styledComponents["default"].div(_templateObject());

exports.TooltipContainer = TooltipContainer;

var TooltipContent = _styledComponents["default"].div(_templateObject2(), function (_ref) {
  var text = _ref.text;

  if (text.length > 150) {
    return "\n        width: ".concat(text.length + 20, "px;\n      ");
  }

  return "\n      width: 150px;\n    ";
}, function (_ref2) {
  var position = _ref2.position;

  switch (position) {
    case 'bottom':
      return "\n          top: 100%;\n          left: 50%;\n          padding-top: 9px;\n          transform: translateX(-50%);\n\n          &:after {\n            border-left: 9px solid transparent;\n            border-right: 9px solid transparent;\n            border-bottom: 9px solid ".concat(_Colors.SecondaryColor.black, ";\n            top: 0;\n            left: 50%;\n            transform: translateX(-50%);\n          }\n        ");

    case 'left':
      return "\n          top: 50%;\n          right: 100%;\n          padding-right: 9px;\n          transform: translateY(-50%);\n          \n          &:after {\n            border-left: 9px solid ".concat(_Colors.SecondaryColor.black, ";\n            border-top: 9px solid transparent;\n            border-bottom: 9px solid transparent;\n            top: 50%;\n            right: 0;\n            transform: translateY(-50%);\n          }\n        ");

    case 'right':
      return "\n          top: 50%;\n          left: 100%;\n          padding-left: 9px;\n          transform: translateY(-50%);\n          \n          &::after {\n            border-right: 9px solid ".concat(_Colors.SecondaryColor.black, ";\n            border-top: 9px solid transparent;\n            border-bottom: 9px solid transparent;\n            top: 50%;\n            left: 0;\n            transform: translateY(-50%);\n          }\n        ");

    default:
      return "\n          bottom: 100%;\n          left: 50%;\n          padding-bottom: 9px;\n          transform: translateX(-50%);\n\n          &:after {\n            border-left: 9px solid transparent;\n            border-right: 9px solid transparent;\n            border-top: 9px solid ".concat(_Colors.SecondaryColor.black, ";\n            bottom: 0;\n            left: 50%;\n            transform: translateX(-50%);\n          }\n        ");
  }
});

exports.TooltipContent = TooltipContent;

var TooltipMessage = _styledComponents["default"].div(_templateObject3(), _Colors.SecondaryColor.black, _Colors.SecondaryColor.white);

exports.TooltipMessage = TooltipMessage;