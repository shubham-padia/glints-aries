"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeadingContainer = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = require("../Colors");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  display: ", ";\n  font-size: 2em;\n  text-transform: ", ";\n\n  span {\n    background-image: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var HeadingContainer = _styledComponents["default"].h1(_templateObject(), function (_ref) {
  var inline = _ref.inline;
  return inline ? 'inline-block' : 'block';
}, function (_ref2) {
  var uppercaseText = _ref2.uppercaseText;
  return uppercaseText ? 'uppercase' : null;
}, "linear-gradient(to top, ".concat(_Colors.PrimaryColor.glintsyellow, " 40%, transparent 0)"));

exports.HeadingContainer = HeadingContainer;