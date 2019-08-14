"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DetailWrapper = exports.DescriptionWrapper = exports.TitleWrapper = exports.InformationContainer = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = require("../Colors");

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n    \n  li {\n    color: ", ";\n    font-size: 12px;\n    font-weight: 100;\n    margin-bottom: .5em;\n\n    &:last-child {\n      margin-bottom: 0;\n    }\n\n    span {\n      font-weight: 500;\n      color: rgba(0, 0, 0, .4);\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-size: 12px;\n  font-weight: 100;\n  color: ", ";\n  margin-bottom: 30px;\n  margin: 0;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  text-transform: ", ";\n  font-weight: ", ";\n  font-size: ", ";\n  margin-bottom: 15px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var InformationContainer = _styledComponents["default"].div(_templateObject());

exports.InformationContainer = InformationContainer;

var TitleWrapper = _styledComponents["default"].p(_templateObject2(), function (_ref) {
  var bold = _ref.bold;
  return bold ? 'uppercase' : null;
}, function (_ref2) {
  var bold = _ref2.bold;
  return bold ? 'bold' : null;
}, function (_ref3) {
  var bold = _ref3.bold;
  return bold ? '30px' : '18px';
});

exports.TitleWrapper = TitleWrapper;

var DescriptionWrapper = _styledComponents["default"].p(_templateObject3(), _Colors.SecondaryColor.grey);

exports.DescriptionWrapper = DescriptionWrapper;

var DetailWrapper = _styledComponents["default"].div(_templateObject4(), _Colors.SecondaryColor.lightgrey);

exports.DetailWrapper = DetailWrapper;