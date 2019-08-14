"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CheckboxContainer = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = require("../Colors");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  display: inline-flex;\n  font-size: 1em;\n  line-height: 1.5;\n\n  &:focus {\n    outline: none;\n  }\n  \n  &:focus > label {\n    outline: 5px auto -webkit-focus-ring-color;\n  }\n\n  input {\n    padding: 0;\n    height: initial;\n    width: initial;\n    margin-bottom: 0;\n    display: none;\n    cursor: pointer;\n\n    &:checked + label:after {\n      content: '';\n      display: block;\n      position: absolute;\n      top: .2em;\n      left: .5em;\n      width: .4em;\n      height: .85em;\n      border: solid ", ";\n      border-width: 0 .15em .15em 0;\n      transform: rotate(45deg);\n    }\n\n    &:checked + label:before {\n      background: ", ";\n      border: 2px solid ", ";\n    }\n  }\n\n  label {\n    position: relative;\n    display: flex;\n    justify-content: center;\n    line-height: 1.5;\n    cursor: pointer;\n    outline: none;\n\n    &:before{\n      content:'';\n      -webkit-appearance: none;\n      background-color: transparent;\n      border: 2px solid ", ";\n      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), inset 0px -15px 10px -12px rgba(0, 0, 0, 0.05);\n      padding: .6em;\n      display: inline-block;\n      position: relative;\n      vertical-align: middle;\n      cursor: pointer;\n      margin-right: .5em;\n      border-radius: 4px;\n      height: 1em;\n      width: 1em;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var CheckboxContainer = _styledComponents["default"].div(_templateObject(), _Colors.SecondaryColor.white, _Colors.SecondaryColor.darkgreen, _Colors.SecondaryColor.darkgreen, _Colors.SecondaryColor.lightblack);

exports.CheckboxContainer = CheckboxContainer;