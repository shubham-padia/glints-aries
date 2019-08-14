"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TabsBody = exports.TabsContent = exports.TabsHeader = exports.TabsContainer = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = require("../Colors");

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  padding-top: 1.2em;\n\n  &:focus {\n    outline: none;\n  }\n\n  &:focus > ", " {\n    outline: 5px auto -webkit-focus-ring-color;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  outline: none;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  border-bottom: 1px solid ", ";\n\n  ul {\n    position: relative;\n    display: flex;\n    white-space: nowrap;\n    overflow: auto;\n    font-size: 1em;\n    padding: 0;\n    margin: 0;\n    \n    &::-webkit-scrollbar {\n      display: none;\n    }\n\n    li {\n      display: inline-flex;\n      padding: 1.2em 0;\n      margin: 0 .6em;\n      text-transform: uppercase;\n      list-style-type: none;\n\n      &:first-child {\n        margin-left: 0;\n      }\n\n      &:last-child {\n        margin-right: 0;\n      }\n\n      &.active {\n        border-bottom: 2px solid ", ";\n\n        button {\n          font-weight: bold;\n          text-transform: uppercase;\n        }\n      }\n\n      &:focus {\n        outline: none;\n      }\n\n      &:focus > button {\n        outline: 5px auto -webkit-focus-ring-color;\n      }\n\n      button {\n        padding: 0;\n        background: transparent;\n        border: none;\n        cursor: pointer;\n        outline: none;\n        text-transform: uppercase;\n      }\n    }\n  }\n"]);

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

var TabsContainer = _styledComponents["default"].div(_templateObject());

exports.TabsContainer = TabsContainer;

var TabsHeader = _styledComponents["default"].div(_templateObject2(), _Colors.SecondaryColor.lightergrey, _Colors.SecondaryColor.black);

exports.TabsHeader = TabsHeader;

var TabsContent = _styledComponents["default"].div(_templateObject3());

exports.TabsContent = TabsContent;

var TabsBody = _styledComponents["default"].div(_templateObject4(), TabsContent);

exports.TabsBody = TabsBody;