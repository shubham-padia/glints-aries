"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccordionContent = exports.AccordionIconWrapper = exports.AccordionPanelWrapper = exports.AccordionContentWrapper = exports.AccordionContainer = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = require("../Colors");

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  grid-column-start: 2;\n  cursor: default;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: center;\n  margin-right: 1em;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  \n  &:focus {\n    outline: none;\n  }\n\n  &:focus > ", " {\n    outline: 5px auto -webkit-focus-ring-color;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  display: grid;\n  grid-template-columns: max-content 1fr;\n  grid-gap: .6em;\n  font-size: 1em;\n  line-height: 1.5;\n  padding: 1.5em 0;\n  cursor: pointer;\n  outline: none;\n\n  p {\n    margin: 0;\n    font-weight: bold;\n\n    &:hover {\n      color: ", ";\n    }\n  }\n\n  &:not(:last-child):after {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    width: 100%;\n    height: 1px;\n    background: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var AccordionContainer = _styledComponents["default"].div(_templateObject());

exports.AccordionContainer = AccordionContainer;

var AccordionContentWrapper = _styledComponents["default"].div(_templateObject2(), _Colors.SecondaryColor.actionblue, _Colors.SecondaryColor.lightgrey);

exports.AccordionContentWrapper = AccordionContentWrapper;

var AccordionPanelWrapper = _styledComponents["default"].div(_templateObject3(), AccordionContentWrapper);

exports.AccordionPanelWrapper = AccordionPanelWrapper;

var AccordionIconWrapper = _styledComponents["default"].div(_templateObject4());

exports.AccordionIconWrapper = AccordionIconWrapper;

var AccordionContent = _styledComponents["default"].div(_templateObject5());

exports.AccordionContent = AccordionContent;