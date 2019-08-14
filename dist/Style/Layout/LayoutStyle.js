"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LayoutFooterWrapper = exports.LayoutBodyWrapper = exports.LayoutHeaderWrapper = exports.LayoutContainer = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = require("../Colors");

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100vw;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100vw;\n  padding-top: 90px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: fixed;\n  top: 0px;\n  background-color: ", ";\n  width: 100vw;\n  z-index: 100;\n  border-bottom: 3px solid #E3E3E3;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100vw;\n  height: 100vh;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var LayoutContainer = _styledComponents["default"].div(_templateObject());

exports.LayoutContainer = LayoutContainer;

var LayoutHeaderWrapper = _styledComponents["default"].div(_templateObject2(), _Colors.SecondaryColor.white);

exports.LayoutHeaderWrapper = LayoutHeaderWrapper;

var LayoutBodyWrapper = _styledComponents["default"].div(_templateObject3());

exports.LayoutBodyWrapper = LayoutBodyWrapper;

var LayoutFooterWrapper = _styledComponents["default"].div(_templateObject4());

exports.LayoutFooterWrapper = LayoutFooterWrapper;