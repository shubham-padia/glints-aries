"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TextFieldInput = exports.TextFieldLabel = exports.TextFieldContainer = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = require("../Colors");

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  width: 100%;\n  border: none;\n  outline: none;\n  font-size: ", ";\n  line-height: 1.5;\n  padding: ", ";\n  border: ", ";\n  transition: all .5s;\n\n  ", "\n\n  ", "\n    \n\n  &:disabled {\n    cursor: not-allowed;\n    background: ", ";\n\n    + ", " {\n      background: transparent;\n      color: ", ";\n    }\n\n    &:hover {\n      border: 2px solid ", ";\n    }\n  }\n\n  &:hover {\n    border: 2px solid ", ";\n    transition: all .5s;\n\n    ", "\n\n    + ", " {\n      color: ", ";\n\n      ", "\n    }\n  }\n\n  &:focus {\n    border: 2px solid ", ";\n\n    ", "\n\n    + ", " {\n      padding: 0 5px;\n      top: 1em;\n      transform: ", ";\n      transition: all .2s;\n      color: ", ";\n      font-size: 12px;\n\n      ", "\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  left: ", ";\n  background: ", ";\n  color: ", ";\n  transition: all .2s;\n  pointer-events: none;\n  font-weight: 300;\n  font-size: 1.1em;\n  \n  ", "\n  \n  ", "\n\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  flex-grow: 1;\n\n  .see-password {\n    position: absolute;\n    display: flex;\n    right: 1em;\n    cursor: pointer;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var TextFieldContainer = _styledComponents["default"].div(_templateObject());

exports.TextFieldContainer = TextFieldContainer;

var TextFieldLabel = _styledComponents["default"].label(_templateObject2(), function (_ref) {
  var small = _ref.small;
  return small ? '16px' : '22px';
}, _Colors.SecondaryColor.white, function (_ref2) {
  var floating = _ref2.floating;
  return floating ? "".concat(_Colors.SecondaryColor.black) : "".concat(_Colors.SecondaryColor.lightblack);
}, function (_ref3) {
  var floating = _ref3.floating;

  if (floating) {
    return "\n        padding: 0 5px;\n        top: 1em;\n        transform: translate3d(-15px, -20px, 0);\n        transition: all .2s;\n        font-size: 12px;\n      ";
  }
}, function (_ref4) {
  var floating = _ref4.floating,
      small = _ref4.small;

  if (floating && small) {
    return "\n        transform: translate3d(-10px, -20px, 0);\n      ";
  }
}, function (_ref5) {
  var status = _ref5.status,
      floating = _ref5.floating;

  if (status === 'error' && floating) {
    return "\n        color: ".concat(_Colors.PrimaryColor.glintsred, ";\n      ");
  }
});

exports.TextFieldLabel = TextFieldLabel;

var TextFieldInput = _styledComponents["default"].input(_templateObject3(), function (_ref6) {
  var small = _ref6.small;
  return small ? '1em' : '1.1em';
}, function (_ref7) {
  var small = _ref7.small;
  return small ? '13px 15px' : '15px 20px';
}, function (_ref8) {
  var status = _ref8.status;
  return status === 'error' ? "2px solid ".concat(_Colors.PrimaryColor.glintsred) : "2px solid ".concat(_Colors.SecondaryColor.lightblack);
}, function (_ref9) {
  var disableTyping = _ref9.disableTyping;

  if (disableTyping) {
    return "\n        color: transparent;\n        text-shadow: 0 0 0 black;\n        cursor: pointer;\n      ";
  }
}, function (_ref10) {
  var status = _ref10.status,
      floating = _ref10.floating;

  if (status === 'error') {
    if (floating) {
      return "\n          border: 2px solid ".concat(_Colors.PrimaryColor.glintsred, ";\n        ");
    }
  }
}, _Colors.SecondaryColor.whitesmoke, TextFieldLabel, _Colors.SecondaryColor.grey, _Colors.SecondaryColor.lightgrey, _Colors.SecondaryColor.actionblue, function (_ref11) {
  var status = _ref11.status;

  if (status === 'error') {
    return "\n          border: 2px solid ".concat(_Colors.PrimaryColor.glintsred, ";\n        ");
  }
}, TextFieldLabel, _Colors.SecondaryColor.black, function (_ref12) {
  var status = _ref12.status;

  if (status === 'error') {
    return "\n          color: ".concat(_Colors.PrimaryColor.glintsred, ";\n        ");
  }
}, _Colors.SecondaryColor.actionblue, function (_ref13) {
  var status = _ref13.status;

  if (status === 'error') {
    return "\n          border: 2px solid ".concat(_Colors.PrimaryColor.glintsred, ";\n        ");
  }
}, TextFieldLabel, function (_ref14) {
  var small = _ref14.small;
  return small ? 'translate3d(-10px, -20px, 0)' : 'translate3d(-15px, -20px, 0)';
}, _Colors.SecondaryColor.black, function (_ref15) {
  var status = _ref15.status;

  if (status === 'error') {
    return "\n          color: ".concat(_Colors.PrimaryColor.glintsred, ";\n        ");
  }
});

exports.TextFieldInput = TextFieldInput;