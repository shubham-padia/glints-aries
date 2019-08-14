"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SliderContainer = exports.RightArrowContainer = exports.LeftArrowContainer = exports.SliderItemWrapper = exports.SliderContentWrapper = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Colors = require("../Colors");

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  white-space: nowrap;\n  overflow: hidden;\n  outline: none;\n\n  ", " {\n    padding: ", ";\n  }\n\n  ul {\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    padding: 0;\n    margin: 10px 0;\n    display: flex;\n    justify-content: center;\n\n    li {\n      display: inline-flex;\n      width: 12px;\n      height: 12px;\n      background: ", ";\n      border-radius: 50%;\n      box-shadow: 0 1px 1px rgba(0,0,0,0.15);\n      margin: 0 4px;\n      cursor: pointer;\n\n      &.active {\n        width: 2.5em;\n        border-radius: 1em;\n        background: ", ";\n      }\n    }\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", ";\n  right: 0;\n  cursor: ", ";\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", ";\n  left: 0;\n  cursor: ", ";\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: inline-flex;\n  flex: 0 0 auto;\n  justify-content: center;\n  width: 100%;\n  white-space: normal;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  display: flex;\n  align-items: center;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  display: flex;\n  top: 50%;\n  transform: translateY(-50%);\n  cursor: pointer;\n  font-size: 2em;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var arrow = (0, _styledComponents.css)(_templateObject());

var SliderContentWrapper = _styledComponents["default"].div(_templateObject2());

exports.SliderContentWrapper = SliderContentWrapper;

var SliderItemWrapper = _styledComponents["default"].div(_templateObject3());

exports.SliderItemWrapper = SliderItemWrapper;

var LeftArrowContainer = _styledComponents["default"].div(_templateObject4(), arrow, function (_ref) {
  var index = _ref.index;
  return index === 1 ? 'not-allowed' : 'pointer';
});

exports.LeftArrowContainer = LeftArrowContainer;

var RightArrowContainer = _styledComponents["default"].div(_templateObject5(), arrow, function (_ref2) {
  var index = _ref2.index,
      limit = _ref2.limit;
  return index === limit ? 'not-allowed' : 'pointer';
});

exports.RightArrowContainer = RightArrowContainer;

var SliderContainer = _styledComponents["default"].div(_templateObject6(), SliderItemWrapper, function (_ref3) {
  var fullContent = _ref3.fullContent;
  return !fullContent && '2em 4em';
}, _Colors.SecondaryColor.lightgrey, _Colors.PrimaryColor.glintsyellow);

exports.SliderContainer = SliderContainer;