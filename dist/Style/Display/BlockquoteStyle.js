"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BlockquoteContentWrapper = exports.BlockquoteContainer = exports.BlockquoteProfileWrapper = exports.BlockquoteOriginWrapper = exports.BlockquoteAuthorWrapper = exports.BlockquoteTestimonyWrapper = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = require("../Colors");

var _StyleConfig = require("../../Utils/StyleConfig");

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  padding: 2.86em 2.86em 3.57em 9em;\n  \n  @media ", " {\n    padding: 2.5em 2em 2.5em 2em;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  background: ", ";\n  color: ", ";\n  transition: all .2s;\n  font-size: 1em;\n  line-height: 1.5;\n  \n  @media ", " {\n    flex-direction: column;\n    text-align: center;\n  }\n  \n  &:hover {\n    background: ", ";\n    color: ", ";\n  }\n\n  svg {\n    position: absolute;\n    font-size: 3em;\n    top: -20px;\n    left: 120px;\n\n    @media ", " {\n      display: inline-flex;\n      align-self: center;\n      position: relative;\n      left: auto;\n      top: 120px;\n    }\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  font-size: 1.7em;\n  transform: translate(-25%, 40%);\n\n\n  @media ", " {\n    position: relative;\n    display: flex;\n    justify-content: center;\n    transform: translateY(-75%);\n    top: 0;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-weight: 100;\n  font-size: 1em;\n  opacity: .75;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin: 0;\n  font-weight: 500;\n  font-size: 1.1em;\n  opacity: .75;\n\n  &:before {\n    position: relative;\n    content: '';\n    display: inline-flex;\n    width: 2em;\n    height: 1px;\n    bottom: .2em;\n    margin-right: 1em;\n    background: ", ";\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-weight: 100;\n  font-size: 1.1em;\n  margin-bottom: .5em;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var BlockquoteTestimonyWrapper = _styledComponents["default"].p(_templateObject());

exports.BlockquoteTestimonyWrapper = BlockquoteTestimonyWrapper;

var BlockquoteAuthorWrapper = _styledComponents["default"].p(_templateObject2(), _Colors.SecondaryColor.lightblack);

exports.BlockquoteAuthorWrapper = BlockquoteAuthorWrapper;

var BlockquoteOriginWrapper = _styledComponents["default"].span(_templateObject3());

exports.BlockquoteOriginWrapper = BlockquoteOriginWrapper;

var BlockquoteProfileWrapper = _styledComponents["default"].div(_templateObject4(), _StyleConfig.Device.mobileL);

exports.BlockquoteProfileWrapper = BlockquoteProfileWrapper;

var BlockquoteContainer = _styledComponents["default"].div(_templateObject5(), _Colors.SecondaryColor.white, _Colors.SecondaryColor.black, _StyleConfig.Device.mobileL, _Colors.PrimaryColor.glintsblue, _Colors.SecondaryColor.white, _StyleConfig.Device.mobileL);

exports.BlockquoteContainer = BlockquoteContainer;

var BlockquoteContentWrapper = _styledComponents["default"].div(_templateObject6(), _StyleConfig.Device.mobileL);

exports.BlockquoteContentWrapper = BlockquoteContentWrapper;