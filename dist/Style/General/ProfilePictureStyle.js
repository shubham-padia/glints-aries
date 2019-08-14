"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ProfilePictureContainer = exports.ProfilePictureContent = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  display: inline-flex;\n\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  z-index: 1;\n  width: 5em;\n  height: 5em;\n  border-radius: 50%;\n\n  svg {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n\n  ", "\n    \n  &:after {\n    content: '';\n    position: absolute;\n    z-index: -1;\n    background: url(", ");\n    height: 100%;\n    width: 100%;\n    border-radius: 50%;\n    top: 4px;\n    left: 4px;\n  }\n\n  img {\n    object-fit: cover;\n    border-radius: 50%;\n    width: 100%;\n    height: 100%;\n    z-index: 1;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var CrossPattern = require('../../../assets/image/cross-pattern.svg');

var ProfilePictureContent = _styledComponents["default"].div(_templateObject(), function (_ref) {
  var editable = _ref.editable;

  if (editable) {
    return "\n        outline: none;\n        cursor: pointer;\n\n        &:hover:before {\n          content: '';\n          position: absolute;\n          background-color: rgba(0, 0, 0, .5);\n          height: 100%;\n          width: 100%;\n          top: 0\n          left: 0;\n          border-radius: 50%;\n        }\n      ";
  }
}, CrossPattern);

exports.ProfilePictureContent = ProfilePictureContent;

var ProfilePictureContainer = _styledComponents["default"].div(_templateObject2(), function (_ref2) {
  var editable = _ref2.editable;

  if (editable) {
    return "\n        &:focus {\n          outline: none;\n        }\n\n        &:focus > ".concat(ProfilePictureContent, " {\n          outline: 5px auto -webkit-focus-ring-color;\n        }\n      ");
  }
});

exports.ProfilePictureContainer = ProfilePictureContainer;