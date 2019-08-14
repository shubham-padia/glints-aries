"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextareaInput = exports.TextareaLabel = exports.TextareaContainer = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = require("../Colors");

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  width: 100%;\n  border: none;\n  outline: none;\n  font-size: 1.1em;\n  line-height: 1.5;\n  padding: 15px 20px;\n  border: ", ";\n  transition: border .5s;\n  resize: vertical;\n  overflow: auto;\n  height: auto;\n\n  ", "\n    \n\n  &:disabled {\n    cursor: not-allowed;\n    background: ", ";\n\n    + ", " {\n      background: transparent;\n      color: ", ";\n    }\n\n    &:hover {\n      border: 2px solid ", ";\n    }\n  }\n\n  &:hover {\n    border: 2px solid ", ";\n    transition: border .5s;\n\n    ", "\n\n    + ", " {\n      color: ", ";\n\n      ", "\n    }\n  }\n\n  &:focus {\n    border: 2px solid ", ";\n\n    ", "\n\n    + ", " {\n      padding: 0 5px;\n      transform: translate3d(-15px,-20px,0);\n      transition: all .2s;\n      color: ", ";\n      font-size: 12px;\n\n      ", "\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  left: 22px;\n  top: 1em;\n  background: ", ";\n  color: ", ";\n  transition: all .2s;\n  pointer-events: none;\n  font-weight: 300;\n  font-size: 1.1em;\n  \n  ", "\n\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  flex-grow: 1;\n  position: relative;\n  display: flex;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var TextareaContainer = _styledComponents["default"].div(_templateObject());

exports.TextareaContainer = TextareaContainer;

var TextareaLabel = _styledComponents["default"].label(_templateObject2(), _Colors.SecondaryColor.white, function (_ref) {
  var floating = _ref.floating;
  return floating ? "".concat(_Colors.SecondaryColor.black) : "".concat(_Colors.SecondaryColor.lightblack);
}, function (_ref2) {
  var floating = _ref2.floating;

  if (floating) {
    return "\n        padding: 0 5px;\n        transform: translate3d(-15px,-20px,0);\n        transition: all .2s;\n        font-size: 12px;\n      ";
  }
}, function (_ref3) {
  var status = _ref3.status,
      floating = _ref3.floating;

  if (status === 'error' && floating) {
    return "\n        color: ".concat(_Colors.PrimaryColor.glintsred, ";\n      ");
  }
});

exports.TextareaLabel = TextareaLabel;

var TextareaInput = _styledComponents["default"].textarea(_templateObject3(), function (_ref4) {
  var status = _ref4.status;
  return status === 'error' ? "2px solid ".concat(_Colors.PrimaryColor.glintsred) : "2px solid ".concat(_Colors.SecondaryColor.lightblack);
}, function (_ref5) {
  var status = _ref5.status,
      floating = _ref5.floating;

  if (status === 'error') {
    if (floating) {
      return "\n          border: 2px solid ".concat(_Colors.PrimaryColor.glintsred, ";\n        ");
    }
  }
}, _Colors.SecondaryColor.whitesmoke, TextareaLabel, _Colors.SecondaryColor.grey, _Colors.SecondaryColor.lightgrey, _Colors.SecondaryColor.actionblue, function (_ref6) {
  var status = _ref6.status;

  if (status === 'error') {
    return "\n          border: 2px solid ".concat(_Colors.PrimaryColor.glintsred, ";\n        ");
  }
}, TextareaLabel, _Colors.SecondaryColor.black, function (_ref7) {
  var status = _ref7.status;

  if (status === 'error') {
    return "\n          color: ".concat(_Colors.PrimaryColor.glintsred, ";\n        ");
  }
}, _Colors.SecondaryColor.actionblue, function (_ref8) {
  var status = _ref8.status;

  if (status === 'error') {
    return "\n          border: 2px solid ".concat(_Colors.PrimaryColor.glintsred, ";\n        ");
  }
}, TextareaLabel, _Colors.SecondaryColor.black, function (_ref9) {
  var status = _ref9.status;

  if (status === 'error') {
    return "\n          color: ".concat(_Colors.PrimaryColor.glintsred, ";\n        ");
  }
});

exports.TextareaInput = TextareaInput;