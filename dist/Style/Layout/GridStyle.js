"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RowContainer = exports.ColumnContainer = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _StyleConfig = require("../../Utils/StyleConfig");

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    flex-basis: 100%;\n        \n    ", "\n    ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ColumnContainer = _styledComponents["default"].div(_templateObject(), function (_ref) {
  var xs = _ref.xs,
      sm = _ref.sm,
      md = _ref.md,
      xsOrder = _ref.xsOrder,
      smOrder = _ref.smOrder,
      mdOrder = _ref.mdOrder;
  return "\n    max-width: 100%;\n    flex-basis: calc(100% / 12 * ".concat(xs, ");\n    order: ").concat(xsOrder || 0, ";\n    @media (min-width: ").concat(_StyleConfig.ScreenSize.mobileS, "px) {\n      flex-basis: calc(100% / 12 * ").concat(xs, ");\n      order: ").concat(xsOrder || 0, ";\n    }\n\n    @media (min-width: ").concat(_StyleConfig.ScreenSize.mobileM, "px) {\n      flex-basis: calc(100% / 12 * ").concat(xs, ");\n      order: ").concat(xsOrder || 0, ";\n    }\n\n    @media (min-width: ").concat(_StyleConfig.ScreenSize.mobileL, "px) {\n      flex-basis: calc(100% / 12 * ").concat(xs, ");\n      order: ").concat(xsOrder || 0, ";\n    }\n\n    @media (min-width: ").concat(_StyleConfig.ScreenSize.tablet, "px) {\n      flex-basis: calc(100% / 12 * ").concat(sm, ");\n      order: ").concat(smOrder || 0, ";\n    }\n\n    @media (min-width: ").concat(_StyleConfig.ScreenSize.desktopS, "px) {\n      flex-basis: calc(100% / 12 * ").concat(md, ");\n      order: ").concat(mdOrder || 0, ";\n    }\n\n    @media (min-width: ").concat(_StyleConfig.ScreenSize.desktopM, "px) {\n      flex-basis: calc(100% / 12 * ").concat(md, ");\n      order: ").concat(mdOrder || 0, ";\n    }\n\n    @media (min-width: ").concat(_StyleConfig.ScreenSize.desktopL, "px) {\n      flex-basis: calc(100% / 12 * ").concat(md, ");\n      order: ").concat(mdOrder || 0, ";\n    }\n  ");
});

exports.ColumnContainer = ColumnContainer;

var RowContainer = _styledComponents["default"].div(_templateObject2(), function (_ref2) {
  var alignContent = _ref2.alignContent;

  if (alignContent) {
    return "\n        align-content: ".concat(alignContent, ";\n        align-items: ").concat(alignContent, ";\n        ");
  }

  return null;
}, function (_ref3) {
  var justifyContent = _ref3.justifyContent;

  if (justifyContent) {
    return "\n        justify-content: ".concat(justifyContent, ";\n        justify-items: ").concat(justifyContent, ";\n      ");
  }

  return null;
});

exports.RowContainer = RowContainer;