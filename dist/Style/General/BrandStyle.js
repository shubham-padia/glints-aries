"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BrandImage = exports.BrandContainer = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  object-fit: contain;\n  width: 3em;\n  height: 3em;\n  outline: none;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  display: inline-flex;\n  cursor: pointer;\n\n  &:focus {\n    outline: none;\n  }\n\n  &:focus > img {\n    outline: 5px auto -webkit-focus-ring-color;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var BrandContainer = _styledComponents["default"].div(_templateObject());

exports.BrandContainer = BrandContainer;

var BrandImage = _styledComponents["default"].img(_templateObject2());

exports.BrandImage = BrandImage;