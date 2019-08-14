"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PopOverContent = exports.PopoverIcon = exports.PopoverItemWrapper = exports.PopoverContentWrapper = exports.PopoverChildren = exports.PopoverContainer = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

function _templateObject7() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  right: 50%;\n  top: 2.5em;\n  animation: ", " .2s linear;\n  z-index: 10;\n  min-width: 250px;\n  transform: translateX(calc(1em + .7em)) translateY(.5em);\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  font-size: 1.5em;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: center;\n  margin-left: 1em;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  outline: none;\n  display: flex;\n  justify-content: flex-end;\n  cursor: pointer;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  0% {\n    opacity: 0\n  }\n  80% {\n    opacity: 1;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var opacityAnimation = (0, _styledComponents.keyframes)(_templateObject());

var PopoverContainer = _styledComponents["default"].div(_templateObject2());

exports.PopoverContainer = PopoverContainer;

var PopoverChildren = _styledComponents["default"].div(_templateObject3());

exports.PopoverChildren = PopoverChildren;

var PopoverContentWrapper = _styledComponents["default"].div(_templateObject4());

exports.PopoverContentWrapper = PopoverContentWrapper;

var PopoverItemWrapper = _styledComponents["default"].div(_templateObject5());

exports.PopoverItemWrapper = PopoverItemWrapper;

var PopoverIcon = _styledComponents["default"].div(_templateObject6());

exports.PopoverIcon = PopoverIcon;

var PopOverContent = _styledComponents["default"].div(_templateObject7(), opacityAnimation);

exports.PopOverContent = PopOverContent;