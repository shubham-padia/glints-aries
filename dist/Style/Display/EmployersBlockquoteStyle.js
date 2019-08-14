"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BlockquoteIdentity = exports.BlockquoteProfilePicture = exports.BlockquoteProfileWrapper = exports.BlockquoteContent = exports.BlockquoteContainer = exports.BlockquoteWrapper = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _StyleConfig = require("../../Utils/StyleConfig");

var _Colors = require("../Colors");

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  margin-left: 12px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  max-width: 150px;\n\n  p {\n    margin: 0;\n    font-weight: bold;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  border-radius: 50%;\n  width: 5em;\n  height: 5em;\n  background: white;\n  box-shadow: 0 2px 0px 0 rgba(0,0,0,0.2);\n  padding: .2em;\n\n  img {\n    border-radius: 50%;\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n\n  @media ", " {\n    width: 4em;\n    height: 4em;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n\n  @media ", " {\n    justify-content: flex-start;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  font-size: 1em;\n  line-height: 1.5;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  border: 1px solid ", ";\n  background: ", ";\n\n  &:after {\n    content: '';\n    opacity: 0;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background: repeating-linear-gradient(-45deg, transparent, transparent 5px, ", " 7px);\n    top: 12px;\n    left: 12px;\n    z-index: -1;\n    transition: all .2s;\n  }\n\n  &:hover:after {\n    opacity: 1;\n    transition: all .2s;\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  &:focus > ", " {\n    outline: 5px auto -webkit-focus-ring-color;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  padding: 30px;\n  outline: none;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var BlockquoteWrapper = _styledComponents["default"].div(_templateObject());

exports.BlockquoteWrapper = BlockquoteWrapper;

var BlockquoteContainer = _styledComponents["default"].div(_templateObject2(), _Colors.SecondaryColor.black, _Colors.SecondaryColor.white, _Colors.SecondaryColor.black, BlockquoteWrapper);

exports.BlockquoteContainer = BlockquoteContainer;

var BlockquoteContent = _styledComponents["default"].p(_templateObject3());

exports.BlockquoteContent = BlockquoteContent;

var BlockquoteProfileWrapper = _styledComponents["default"].div(_templateObject4(), _StyleConfig.Device.mobileL);

exports.BlockquoteProfileWrapper = BlockquoteProfileWrapper;

var BlockquoteProfilePicture = _styledComponents["default"].div(_templateObject5(), _StyleConfig.Device.mobileS);

exports.BlockquoteProfilePicture = BlockquoteProfilePicture;

var BlockquoteIdentity = _styledComponents["default"].div(_templateObject6());

exports.BlockquoteIdentity = BlockquoteIdentity;