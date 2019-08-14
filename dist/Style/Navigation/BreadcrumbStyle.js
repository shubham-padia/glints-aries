"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BreadcrumbContainer = exports.BreadcrumbItemWrapper = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = require("../Colors");

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  display: flex;\n  background-color: ", ";\n  padding: 1em;\n\n  > label:last-child span {\n    display: none;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  cursor: pointer;\n  font-size: 1em;\n  line-height: 1.5;\n  \n  * {\n    color: ", ";\n  }\n\n  span {\n    margin: 0 1em;\n    color: ", ";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var BreadcrumbItemWrapper = _styledComponents["default"].label(_templateObject(), function (_ref) {
  var active = _ref.active;
  return active ? "".concat(_Colors.SecondaryColor.blue) : "".concat(_Colors.SecondaryColor.lightblack);
}, _Colors.SecondaryColor.lighterblack);

exports.BreadcrumbItemWrapper = BreadcrumbItemWrapper;

var BreadcrumbContainer = _styledComponents["default"].div(_templateObject2(), _Colors.SecondaryColor.whitesmoke);

exports.BreadcrumbContainer = BreadcrumbContainer;