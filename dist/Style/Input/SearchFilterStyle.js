"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SearchFilterItemWrapper = exports.SearchFilterListWrapper = exports.SearchFilterResultContainer = exports.SearchFilterBodyWrapper = exports.SearchFilterButton = exports.SearchFilterBar = exports.SearchFilterContainer = void 0;

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
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  width: 100%;\n  display: grid;\n  font-size: 1.1em;\n  grid-template-columns: repeat(3, 1fr);\n  padding: 25px 30px;\n  background: ", ";\n  border: 1px solid ", ";\n  \n  @media ", " {\n    grid-template-columns: auto;\n    grid-gap: 2em;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  display: ", ";\n  z-index: 9999;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  right: 0;\n  top: 0;\n  font-size: 1.5em;\n  height: 100%;\n\n  button {\n    @media ", " {\n      padding: 15px 20px;\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: center;\n  position: relative;\n\n  input { \n    padding: 25px 6em 25px 30px;\n    background: ", ";\n    border: 3px solid ", ";\n    font-size: 1.4em;\n    line-height: 1.5;\n    color: ", ";\n    width: 100%;\n\n    @media ", " {\n      padding: 1em 5em 1em 1em;\n      font-size: 1em;\n    }\n\n    &:focus {\n      outline: none;\n    }\n\n    &:hover,\n    &:focus {\n      border: 3px solid ", ";\n    }\n  }\n"]);

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

var SearchFilterContainer = _styledComponents["default"].div(_templateObject());

exports.SearchFilterContainer = SearchFilterContainer;

var SearchFilterBar = _styledComponents["default"].div(_templateObject2(), _Colors.SecondaryColor.white, _Colors.SecondaryColor.darkgrey, _Colors.SecondaryColor.lightblack, _StyleConfig.Device.mobileL, _Colors.SecondaryColor.actionblue);

exports.SearchFilterBar = SearchFilterBar;
var SearchFilterButton = (0, _styledComponents["default"])(_Button["default"])(_templateObject3(), _StyleConfig.Device.mobileL);
exports.SearchFilterButton = SearchFilterButton;

var SearchFilterBodyWrapper = _styledComponents["default"].div(_templateObject4(), function (_ref) {
  var open = _ref.open;
  return open ? 'block' : 'none';
});

exports.SearchFilterBodyWrapper = SearchFilterBodyWrapper;

var SearchFilterResultContainer = _styledComponents["default"].div(_templateObject5(), _Colors.SecondaryColor.white, _Colors.SecondaryColor.lightgrey, _StyleConfig.Device.mobileL);

exports.SearchFilterResultContainer = SearchFilterResultContainer;

var SearchFilterListWrapper = _styledComponents["default"].div(_templateObject6(), _Colors.SecondaryColor.lightblack);

exports.SearchFilterListWrapper = SearchFilterListWrapper;

var SearchFilterItemWrapper = _styledComponents["default"].li(_templateObject7());

exports.SearchFilterItemWrapper = SearchFilterItemWrapper;