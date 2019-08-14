"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RangeContainer = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = require("../Colors");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  -webkit-appearance: none;\n  outline: none;\n  background: ", ";\n  height: .4rem;\n  width: ", ";\n  border-radius: 5px;\n\n  &::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    width: 18px;\n    height: 18px;\n    border-radius: 50%;\n    background: ", ";\n    border: 1px solid ", ";\n    cursor: pointer;\n  }\n\n  &::-moz-range-thumb {\n    border: none;\n    height: 14px;\n    width: 14px;\n    border-radius: 50%;\n    background: ", ";\n    border: 1px solid ", ";\n    cursor: pointer;\n  }\n\n  &::-moz-range-track {\n    width: 100%;\n    height: 3px;\n    cursor: pointer;\n    background: ", ";\n    border: 1px solid ", ";\n    border-radius: 5px;\n    cursor: pointer;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var RangeContainer = _styledComponents["default"].input(_templateObject(), _Colors.SecondaryColor.lighterblack, function (_ref) {
  var block = _ref.block;
  return block && '100%';
}, _Colors.SecondaryColor.white, _Colors.SecondaryColor.lightgrey, _Colors.SecondaryColor.white, _Colors.SecondaryColor.lightgrey, _Colors.SecondaryColor.white, _Colors.SecondaryColor.lightgrey);

exports.RangeContainer = RangeContainer;