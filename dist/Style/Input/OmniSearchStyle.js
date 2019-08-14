"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.OmniSearchItemWrapper = exports.OmniSearchListItem = exports.OmniSearchResultContainer = exports.OmniSearchBodyWrapper = exports.OmniSearchButton = exports.OmniSearchBar = exports.OmniSearchContainer = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Button = _interopRequireDefault(require("../../General/Button"));

var _StyleConfig = require("../../Utils/StyleConfig");

var _Colors = require("../Colors");

function _templateObject7() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n\n  label {\n    color: ", ";\n    text-transform: uppercase;\n    font-weight: 600;\n    letter-spacing: .3px;\n  }\n\n  ul {\n    padding: 0;\n    margin: 0;\n\n    li {\n      display: flex;\n      align-items: center;\n      margin-bottom: .6em;\n      cursor: pointer;\n      list-style-type: none;\n\n      &:first-child {\n        margin-top: .5em;\n      }\n\n      &:last-child {\n        margin-bottom: 0;\n      }\n\n      svg,\n      img {\n        margin-right: 1em;\n      }\n\n      img {\n        object-fit: cover;\n        border-radius: 50%;\n      }\n    }\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  padding: 25px 30px;\n  font-size: 1.1em;\n  background: ", ";\n  border: 1px solid ", ";\n  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.12);\n  \n  @media ", " {\n    grid-template-columns: auto;\n    grid-gap: 2em;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  display: ", ";\n  z-index: 50;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  right: 3px;\n  font-size: 1.5em;\n  font-weight: normal;\n  height: 100%;\n\n  @media ", " {\n    top: 5em;\n    right: 0;\n    width: 100%;\n\n    button {\n      width: 100%;\n    }\n  }\n\n  svg {\n    margin-left: 1em;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: center;\n  \n  @media ", " {\n    flex-direction: column;\n  }\n\n  input { \n    padding: 25px 8em 25px 30px;\n    background: ", ";\n    border: 3px solid ", ";\n    font-size: 1.5em;\n    line-height: 1.5;\n    color: ", ";\n    width: 100%;\n    \n    @media ", " {\n      padding: 1em;\n    }\n\n    &:focus {\n      outline: none;\n    }\n\n    &:hover,\n    &:focus {\n      border: 3px solid ", ";\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.12);\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var OmniSearchContainer = _styledComponents["default"].div(_templateObject());

exports.OmniSearchContainer = OmniSearchContainer;

var OmniSearchBar = _styledComponents["default"].div(_templateObject2(), _StyleConfig.Device.mobileL, _Colors.SecondaryColor.white, _Colors.SecondaryColor.darkgrey, _Colors.SecondaryColor.lightblack, _StyleConfig.Device.mobileL, _Colors.SecondaryColor.actionblue);

exports.OmniSearchBar = OmniSearchBar;
var OmniSearchButton = (0, _styledComponents["default"])(_Button["default"])(_templateObject3(), _StyleConfig.Device.mobileL);
exports.OmniSearchButton = OmniSearchButton;

var OmniSearchBodyWrapper = _styledComponents["default"].div(_templateObject4(), function (_ref) {
  var open = _ref.open;
  return open ? 'block' : 'none';
});

exports.OmniSearchBodyWrapper = OmniSearchBodyWrapper;

var OmniSearchResultContainer = _styledComponents["default"].div(_templateObject5(), _Colors.SecondaryColor.white, _Colors.SecondaryColor.lightgrey, _StyleConfig.Device.mobileL);

exports.OmniSearchResultContainer = OmniSearchResultContainer;

var OmniSearchListItem = _styledComponents["default"].div(_templateObject6(), _Colors.SecondaryColor.lightblack);

exports.OmniSearchListItem = OmniSearchListItem;

var OmniSearchItemWrapper = _styledComponents["default"].li(_templateObject7());

exports.OmniSearchItemWrapper = OmniSearchItemWrapper;