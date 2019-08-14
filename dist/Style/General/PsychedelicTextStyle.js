"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SubHeading = exports.Heading = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = require("../Colors");

var _StyleConfig = require("../../Utils/StyleConfig");

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  text-shadow: 2px 0 0 ", ", -2px 0 0 ", ", 0 2px 0 ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var Heading = _styledComponents["default"].h1(_templateObject(), _Colors.PrimaryColor.glintsblue, _Colors.PrimaryColor.glintsyellow, _Colors.PrimaryColor.glintsred);

exports.Heading = Heading;

var SubHeading = _styledComponents["default"].h3(_templateObject2(), function (props) {
  switch (props.psychTheme) {
    case "".concat(_StyleConfig.PsychedelicTheme.BLUE_DOMINANT):
      return "\n          color: ".concat(_Colors.PrimaryColor.glintsblue, ";\n          text-shadow: 1px 0 0 ").concat(_Colors.PrimaryColor.glintsred, ", 1px 1px 0 ").concat(_Colors.PrimaryColor.glintsyellow, ";\n        ");

    case "".concat(_StyleConfig.PsychedelicTheme.BLUE_DEFAULT):
      return "\n          text-shadow: 1px 0 0 ".concat(_Colors.PrimaryColor.glintsyellow, ", 1px 1px 0 ").concat(_Colors.PrimaryColor.glintsred, ";\n        ");

    case "".concat(_StyleConfig.PsychedelicTheme.RED_DOMINANT):
      return "\n          color: ".concat(_Colors.PrimaryColor.glintsred, ";\n          text-shadow: 1px 0 0 ").concat(_Colors.PrimaryColor.glintsyellow, ", 1px 1px 0 ").concat(_Colors.PrimaryColor.glintsblue, ";\n        ");

    case "".concat(_StyleConfig.PsychedelicTheme.RED_DEFAULT):
      return "\n          text-shadow: 1px 0 0 ".concat(_Colors.PrimaryColor.glintsblue, ", 1px 1px 0 ").concat(_Colors.PrimaryColor.glintsyellow, ";\n        ");

    case "".concat(_StyleConfig.PsychedelicTheme.YELLOW_DOMINANT):
      return "\n          color: ".concat(_Colors.PrimaryColor.glintsyellow, ";\n          text-shadow: 1px 0 0 ").concat(_Colors.PrimaryColor.glintsblue, ", 1px 1px 0 ").concat(_Colors.PrimaryColor.glintsred, ";\n        ");

    case "".concat(_StyleConfig.PsychedelicTheme.YELLOW_DEFAULT):
      return "\n          text-shadow: 1px 0 0 ".concat(_Colors.PrimaryColor.glintsblue, ", 1px 1px 0 ").concat(_Colors.PrimaryColor.glintsred, ";\n        ");

    default:
      return null;
  }
});

exports.SubHeading = SubHeading;