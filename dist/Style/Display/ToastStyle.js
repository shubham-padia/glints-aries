"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ToastBodyWrapper = exports.ToastIcon = exports.ToastTopWrapper = exports.ToastContainer = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _StyleConfig = require("../../Utils/StyleConfig");

var _Colors = require("../Colors");

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: .5em;\n  text-align: center;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: none;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: flex-end;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  visibility: ", ";\n  opacity: ", ";\n  transform: ", ";\n  transition: ", ";\n  position: fixed;\n  bottom: 4em;\n  right: 4em;\n  min-width: 300px;\n  max-width: 500px;\n  background: ", ";\n  color: ", ";\n  z-index: 1005;\n  line-height: 1.5;\n  padding: 1em;\n  box-shadow: 0 10px 15px 0 rgba(0,0,0,0.05);\n\n  h1, h2, h3, h4, h5, h6, p {\n    color: ", ";\n  }\n\n  @media ", " {\n    min-width: 100%;\n    bottom: 0;\n    right: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ToastContainer = _styledComponents["default"].div(_templateObject(), function (_ref) {
  var isVisible = _ref.isVisible;
  return isVisible ? 'visible' : 'hidden';
}, function (_ref2) {
  var isVisible = _ref2.isVisible;
  return isVisible ? '1' : '0';
}, function (_ref3) {
  var isVisible = _ref3.isVisible;
  return isVisible ? 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)' : 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 30, 0, 1)';
}, function (_ref4) {
  var isVisible = _ref4.isVisible;
  return isVisible ? 'all .25s ease-in' : 'all .25s ease-out';
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme === 'black' ? "".concat(_Colors.SecondaryColor.black) : "".concat(_Colors.PrimaryColor.glintsblue);
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme === 'black' ? "".concat(_Colors.SecondaryColor.white) : "".concat(_Colors.SecondaryColor.black);
}, function (_ref7) {
  var theme = _ref7.theme;
  return theme === 'black' ? "".concat(_Colors.SecondaryColor.white) : "".concat(_Colors.SecondaryColor.black);
}, _StyleConfig.Device.mobileM);

exports.ToastContainer = ToastContainer;

var ToastTopWrapper = _styledComponents["default"].div(_templateObject2());

exports.ToastTopWrapper = ToastTopWrapper;

var ToastIcon = _styledComponents["default"].button(_templateObject3());

exports.ToastIcon = ToastIcon;

var ToastBodyWrapper = _styledComponents["default"].div(_templateObject4());

exports.ToastBodyWrapper = ToastBodyWrapper;