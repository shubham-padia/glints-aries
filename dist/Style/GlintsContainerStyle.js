"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _StyleConfig = require("../Utils/StyleConfig");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  margin: 0 auto;\n  font-family: Poppins, sans-serif;\n  @media ", " {\n    width: 1400px;\n    padding: 0 20px;\n  }\n  @media ", " and (max-width: 1439px) {\n    width: 1200px;\n    padding: 0 30px;\n  }\n  @media ", " and (max-width: 1259px) {\n    padding: 0 32px;\n  }\n  @media ", " and (max-width: 1023px) {\n    padding: 0 32px;\n  }\n  @media ", " and (max-width: 767px) {\n    padding: 0 24px;\n  }\n  @media ", " and (max-width: 639px) {\n    padding: 0 20px;\n  }\n  @media ", " and (max-width: 479px) {\n    padding: 0 10px;\n  }\n  @media ", " {\n    padding: 0 10px;\n  }\n\n  *,\n  *:before,\n  *:after {\n    box-sizing: border-box;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var GlintsContainer = _styledComponents["default"].div(_templateObject(), "(min-width: ".concat(_StyleConfig.ScreenSize.desktopL, "px)"), "(min-width: ".concat(_StyleConfig.ScreenSize.desktopM, "px)"), "(min-width: ".concat(_StyleConfig.ScreenSize.desktopS, "px)"), "(min-width: ".concat(_StyleConfig.ScreenSize.tablet, "px)"), "(min-width: ".concat(_StyleConfig.ScreenSize.mobileL, "px)"), "(min-width: ".concat(_StyleConfig.ScreenSize.mobileM, "px)"), "(min-width: ".concat(_StyleConfig.ScreenSize.mobileS, "px)"), _StyleConfig.Device.mobileS);

var _default = GlintsContainer;
exports["default"] = _default;