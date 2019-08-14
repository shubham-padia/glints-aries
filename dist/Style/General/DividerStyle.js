"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DividerContainer = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = require("../Colors");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    display: flex;\n    width: 100%;\n    height: .15em;\n\n    ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var DividerContainer = _styledComponents["default"].div(_templateObject(), function (_ref) {
  var theme = _ref.theme;

  switch (theme) {
    case 'red':
      return "\n          background: ".concat(_Colors.PrimaryColor.glintsred, ";\n        ");

    case 'blue':
      return "\n          background: ".concat(_Colors.PrimaryColor.glintsblue, ";\n        ");

    case 'yellow':
      return "\n          background: ".concat(_Colors.PrimaryColor.glintsyellow, ";\n        ");

    case 'white':
      return "\n          background: ".concat(_Colors.SecondaryColor.white, ";\n        ");

    case 'grey':
      return "\n          background: ".concat(_Colors.SecondaryColor.lightgrey, ";\n        ");

    default:
      return "\n          background: ".concat(_Colors.SecondaryColor.black, ";\n        ");
  }
});

exports.DividerContainer = DividerContainer;