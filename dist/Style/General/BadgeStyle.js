"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BadgeContainer = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = require("../Colors");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  display: inline-flex;\n  background: ", ";\n  color: ", ";\n  border-radius: 20px;\n\n  ", "\n\n  span {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: ", ";\n    min-width: ", ";\n    font-size: ", ";\n    line-height: 1.5;\n    font-weight: 600;\n    padding: .4em;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var BadgeContainer = _styledComponents["default"].div(_templateObject(), _Colors.PrimaryColor.glintsred, _Colors.SecondaryColor.white, function (_ref) {
  var sup = _ref.sup;

  if (sup) {
    return "\n        top: -.6em;\n      ";
  }
}, function (_ref2) {
  var sup = _ref2.sup;
  return sup ? '1.6em' : '2em';
}, function (_ref3) {
  var sup = _ref3.sup;
  return sup ? '1.6em' : '2em';
}, function (_ref4) {
  var sup = _ref4.sup;
  return sup ? '.7em' : '1em';
});

exports.BadgeContainer = BadgeContainer;