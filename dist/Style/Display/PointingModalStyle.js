"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PointingModalFooterWrapper = exports.PointingModalItemWrapper = exports.PointingModalBodyWrapper = exports.PointingModalHeaderWrapper = exports.PointingModalHeaderArrow = exports.PointingModalContainer = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = require("../Colors");

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  position: relative;\n  padding: 1.2em;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-weight: 600;\n  cursor: pointer;\n  padding: .5em 1.2em;\n  list-style-type: none;\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  * {\n    cursor: pointer;\n    color: ", ";\n  }\n\n  &:hover {\n    background: ", ";\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n\n  ul {\n    padding: 1.2em 0;\n    margin: 0;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: center;\n  padding: 1.2em;\n\n  > *:first-child {\n    margin-left: 0;\n  }\n\n  > *:last-child {\n    margin-right: 0;\n  }\n\n  > * {\n    margin-left: .5em;\n    margin-right: .5em;\n  }\n\n  .aries-modal-profile {\n    font-weight: 700;\n  }\n\n  span {\n    font-size: 1em;\n    font-weight: 500;\n  }\n\n  a {\n    display: flex;\n    color: ", ";\n    font-size: 1.2em;\n    margin: 0;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  right: 1em;\n  top: -.7em;\n  width: 1.5em;\n  height: 1.5em;\n  transform: rotate(45deg);\n  background-color: white;\n  box-shadow: -2px -2px 5px rgba(0, 0, 0, 0.06);\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  background: ", ";\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  outline: none;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var PointingModalContainer = _styledComponents["default"].div(_templateObject(), _Colors.SecondaryColor.white);

exports.PointingModalContainer = PointingModalContainer;

var PointingModalHeaderArrow = _styledComponents["default"].div(_templateObject2());

exports.PointingModalHeaderArrow = PointingModalHeaderArrow;

var PointingModalHeaderWrapper = _styledComponents["default"].div(_templateObject3(), _Colors.SecondaryColor.black);

exports.PointingModalHeaderWrapper = PointingModalHeaderWrapper;

var PointingModalBodyWrapper = _styledComponents["default"].div(_templateObject4());

exports.PointingModalBodyWrapper = PointingModalBodyWrapper;

var PointingModalItemWrapper = _styledComponents["default"].li(_templateObject5(), _Colors.SecondaryColor.black, _Colors.SecondaryColor.whitesmoke);

exports.PointingModalItemWrapper = PointingModalItemWrapper;

var PointingModalFooterWrapper = _styledComponents["default"].footer(_templateObject6());

exports.PointingModalFooterWrapper = PointingModalFooterWrapper;