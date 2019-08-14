"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadioContainer = exports.RadioLabel = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = require("../Colors");

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: inline-flex;\n  cursor: pointer; \n  user-select:none;\n  text-align: left;\n\n  input {\n    display: none;\n\n    &+", ";\n    \n    &:checked+span:after {\n      opacity: 1;\n      transform: scale(1,1);\n    }\n  }\n\n  &:focus {\n    outline: none;\n  }\n\n  &:focus > ", " {\n    outline: 5px auto -webkit-focus-ring-color;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: inline-flex; \n  position: relative;\n  font-size: 1em;\n  color: ", ";\n  outline: none;\n\n  &:before {\n    content: '';\n    display: block; \n    position: relative;\n    top: 0;\n    left: 0;\n    margin-right: 8px;\n    border-radius: 50%;\n    width: 1.4em;\n    height: 1.4em;\n    border: ", ";\n    background: ", ";\n  }\n  &:after {\n    content: '';\n    display: block; \n    width: 1em;\n    height: 1em;\n    background: ", ";\n    position: absolute;\n    border-radius: 50%;\n    top: .2em;\n    left: .2em;\n    opacity: 0;\n    transform: scale(0,0); \n    transition: all .2s cubic-bezier(0.64, 0.57, 0.67, 1.53);\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var RadioLabel = _styledComponents["default"].span(_templateObject(), function (_ref) {
  var theme = _ref.theme;
  return theme === 'white' ? "".concat(_Colors.SecondaryColor.white) : "".concat(_Colors.SecondaryColor.black);
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme === 'white' ? "1px solid ".concat(_Colors.SecondaryColor.white) : "1px solid ".concat(_Colors.SecondaryColor.lightgrey);
}, function (_ref3) {
  var theme = _ref3.theme;
  return theme === 'white' ? 'transparent' : "".concat(_Colors.SecondaryColor.white);
}, function (_ref4) {
  var theme = _ref4.theme;
  return theme === 'white' ? "".concat(_Colors.SecondaryColor.white) : "".concat(_Colors.SecondaryColor.darkgreen);
});

exports.RadioLabel = RadioLabel;

var RadioContainer = _styledComponents["default"].label(_templateObject2(), RadioLabel, RadioLabel);

exports.RadioContainer = RadioContainer;