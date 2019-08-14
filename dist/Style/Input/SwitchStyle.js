"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SwitchItemWrapper = exports.SwitchContainer = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = require("../Colors");

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  flex: 1 auto;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  display: flex;\n  background: ", ";\n  border-radius: 3em;\n\n  label {\n    display: flex;\n    justify-content: center;\n    color: ", ";\n    font-weight: 100;\n    padding: 1em;\n    width: 100%;\n  }\n\n  &:before {\n    content: '';\n    background: ", ";\n    width: 50%;\n    height: 100%;\n    border-radius: 3em;\n    display: flex;\n    position: absolute;\n    left: 0;\n    box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.2);\n    transform: ", ";\n    transition: transform .2s ease-out;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var SwitchContainer = _styledComponents["default"].div(_templateObject(), _Colors.SecondaryColor.lighterblack, _Colors.SecondaryColor.white, _Colors.PrimaryColor.glintsblue, function (_ref) {
  var ID = _ref.ID,
      items = _ref.items,
      defaultValue = _ref.defaultValue;
  return ID && items[0] === defaultValue ? 'translateX(0)' : 'translateX(100%)';
});

exports.SwitchContainer = SwitchContainer;

var SwitchItemWrapper = _styledComponents["default"].div(_templateObject2());

exports.SwitchItemWrapper = SwitchItemWrapper;