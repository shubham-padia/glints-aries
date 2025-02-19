"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  *,\n  *:before,\n  *:after {\n    box-sizing: border-box;\n    font-family: 'Poppins';\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var StorybookStyle = _styledComponents["default"].div(_templateObject());

var _default = StorybookStyle;
exports["default"] = _default;