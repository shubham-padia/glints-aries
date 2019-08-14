"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwipeableCardExample = exports.SwipeableItemWrapper = exports.SwipeableContainer = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = require("../Colors");

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: 150px;\n  height: 150px;\n  background: ", ";\n  box-shadow: 0 10px 15px 0 rgba(0,0,0,0.05);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: inline-flex;\n  margin: 0 1em;\n  padding: 1em 0;\n\n  &:first-child {\n    margin-left: 0;\n  }\n\n  &:last-child {\n    margin-right: 0;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  position: relative;\n  overflow-x: auto;\n\n  &::-webkit-scrollbar {\n    display: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var SwipeableContainer = _styledComponents["default"].div(_templateObject());

exports.SwipeableContainer = SwipeableContainer;

var SwipeableItemWrapper = _styledComponents["default"].div(_templateObject2());

exports.SwipeableItemWrapper = SwipeableItemWrapper;

var SwipeableCardExample = _styledComponents["default"].div(_templateObject3(), _Colors.SecondaryColor.white);

exports.SwipeableCardExample = SwipeableCardExample;