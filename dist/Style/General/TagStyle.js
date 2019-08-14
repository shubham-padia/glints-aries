"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TagContainer = exports.TagContent = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = require("../Colors");

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: inline-flex;\n  border-radius: ", ";\n  font-size: 1em;\n  line-height: 1.5;\n  color: ", ";\n\n  ", "\n  \n  &:focus {\n    outline: none;\n  }\n\n  &:focus > ", " {\n    outline: 5px auto -webkit-focus-ring-color;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: center;\n  padding: .4em .9em;\n  outline: none;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var TagContent = _styledComponents["default"].label(_templateObject());

exports.TagContent = TagContent;

var TagContainer = _styledComponents["default"].div(_templateObject2(), function (_ref) {
  var block = _ref.block;
  return !block && '20px';
}, _Colors.SecondaryColor.white, function (_ref2) {
  var theme = _ref2.theme,
      outline = _ref2.outline;

  if (!outline) {
    switch (theme) {
      case 'red':
        return "\n            background: ".concat(_Colors.PrimaryColor.glintsred, ";\n          ");

      case 'blue':
        return "\n            background: ".concat(_Colors.PrimaryColor.glintsblue, ";\n          ");

      case 'orange':
        return "\n            background: ".concat(_Colors.SecondaryColor.orange, ";\n          ");

      case 'green':
        return "\n            background: ".concat(_Colors.SecondaryColor.green, ";\n          ");

      case 'black':
        return "\n            background: ".concat(_Colors.SecondaryColor.black, ";\n          ");

      default:
        return "\n            background: ".concat(_Colors.SecondaryColor.lightergrey, ";\n          ");
    }
  } else {
    switch (theme) {
      case 'red':
        return "\n            border: 1px solid ".concat(_Colors.PrimaryColor.glintsred, ";\n            color: ").concat(_Colors.PrimaryColor.glintsred, ";\n          ");

      case 'blue':
        return "\n            border: 1px solid ".concat(_Colors.PrimaryColor.glintsblue, ";\n            color: ").concat(_Colors.PrimaryColor.glintsblue, ";\n          ");

      case 'orange':
        return "\n            border: 1px solid ".concat(_Colors.SecondaryColor.orange, ";\n            color: ").concat(_Colors.SecondaryColor.orange, ";\n          ");

      case 'green':
        return "\n            border: 1px solid ".concat(_Colors.SecondaryColor.green, ";\n            color: ").concat(_Colors.SecondaryColor.green, ";\n          ");

      default:
        return "\n            border: 1px solid ".concat(_Colors.SecondaryColor.black, ";\n            color: ").concat(_Colors.SecondaryColor.black, ";\n          ");
    }
  }
}, TagContent);

exports.TagContainer = TagContainer;