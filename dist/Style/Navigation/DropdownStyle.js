"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconWrapper = exports.DropdownItemWrapper = exports.DropdownBody = exports.DropdownHeader = exports.DropdownContainer = exports.DropdownWrapper = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = require("../Colors");

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n\n  svg {\n    transform: ", ";\n    transition: ", ";\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  padding: 1em 1.4em;\n  cursor: pointer;\n  ", "\n\n  &.active {\n    background: ", ";\n  }\n\n  &:hover > ", " {\n    ", "\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  visibility: ", ";\n  opacity: ", ";\n  transform: ", ";\n  transform-origin: center top;\n  transition: ", ";\n  background: ", ";\n  box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.12);\n  z-index: 1000;\n  padding: 0;\n  margin: 0;\n  white-space: ", ";\n\n  ", ";\n\n  ", ";\n  \n  li {\n    list-style-type: none;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  display: inline-flex;\n  align-items: center;\n  cursor: ", ";\n  color: ", ";\n  transition: all .4s;\n  ", ";\n\n  svg:first-child {\n    margin-right: .6em;\n  }\n\n  svg:last-child {\n    margin-left: .6em;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: inline;\n  position: relative;\n\n  &:focus {\n    outline: none;\n  }\n\n  &:focus > ", " {\n    outline: 5px auto -webkit-focus-ring-color;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: inline;\n  outline: none;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var underLine = "\n  position: relative;\n  \n  &:hover {\n    color: black;\n    background-color: rgba(255, 255, 255, 1);\n    &:after {\n      transform: scaleX(1);\n    }\n  }\n    \n  &:after {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 2px;\n    background: black;\n    bottom: -5px;\n    left: 0px;\n    transition: all .2s ease-in-out;\n    transform: scaleX(0);\n  }\n";
var underLineAlwaysShow = "\n  position: relative;\n  \n  &:after {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 2px;\n    background: black;\n    bottom: -5px;\n    left: 0px;\n    transition: all .2s ease-in-out;\n    transform: scaleX(1);\n  }\n";

var DropdownWrapper = _styledComponents["default"].div(_templateObject());

exports.DropdownWrapper = DropdownWrapper;

var DropdownContainer = _styledComponents["default"].div(_templateObject2(), DropdownWrapper);

exports.DropdownContainer = DropdownContainer;

var DropdownHeader = _styledComponents["default"].div(_templateObject3(), function (_ref) {
  var disabled = _ref.disabled;
  return disabled ? 'not-allowed' : 'pointer';
}, function (_ref2) {
  var disabled = _ref2.disabled;
  return disabled && "".concat(_Colors.SecondaryColor.lightblack);
}, function (_ref3) {
  var showHoverLine = _ref3.showHoverLine,
      isOpen = _ref3.isOpen,
      disabled = _ref3.disabled,
      showFullWidth = _ref3.showFullWidth;

  if (showHoverLine) {
    if (isOpen) {
      return "\n          ".concat(underLineAlwaysShow, "\n        ");
    }

    return "\n        ".concat(underLine, "\n      ");
  }

  if (showFullWidth) {
    return "\n        width: 100%;\n        padding: 10px 0 10px 20px;\n      ";
  }

  return "\n      padding: 1em 1.4em;\n      background: ".concat(isOpen || disabled ? "".concat(_Colors.SecondaryColor.whitesmoke) : null, ";\n      &:hover {\n        background: ").concat(_Colors.SecondaryColor.whitesmoke, ";\n        transition: all .4s;\n      }");
});

exports.DropdownHeader = DropdownHeader;

var DropdownBody = _styledComponents["default"].ul(_templateObject4(), function (_ref4) {
  var open = _ref4.open;
  return open ? 'visible' : 'hidden';
}, function (_ref5) {
  var open = _ref5.open;
  return open ? '1' : '0';
}, function (_ref6) {
  var open = _ref6.open;
  return open ? 'scaleY(1)' : 'scaleY(0.9)';
}, function (_ref7) {
  var open = _ref7.open;
  return open ? 'all .2s ease' : 'all .1s ease';
}, _Colors.SecondaryColor.white, function (_ref8) {
  var noLineBreak = _ref8.noLineBreak;
  return noLineBreak ? 'normal' : 'nowrap';
}, function (_ref9) {
  var dropDownPlacement = _ref9.dropDownPlacement,
      showFullWidth = _ref9.showFullWidth;

  if (dropDownPlacement === 'right') {
    return "\n        right: 0;\n        width: auto;\n      ";
  }

  if (showFullWidth) {
    return "\n        width: calc(100% - 20px);\n        left: 10px;\n      ";
  }

  return "\n      left: 0;\n      width: auto;\n    ";
}, function (_ref10) {
  var showHoverLine = _ref10.showHoverLine;

  if (showHoverLine) {
    return "\n        margin-top: 13px;\n      ";
  }

  return null;
});

exports.DropdownBody = DropdownBody;

var DropdownItemWrapper = _styledComponents["default"].li(_templateObject5(), function (_ref11) {
  var showFullWidth = _ref11.showFullWidth;

  if (showFullWidth) {
    return "\n        width: 100%;\n      ";
  }

  return null;
}, _Colors.SecondaryColor.whitesmoke, DropdownHeader, underLine);

exports.DropdownItemWrapper = DropdownItemWrapper;

var IconWrapper = _styledComponents["default"].span(_templateObject6(), function (_ref12) {
  var isOpen = _ref12.isOpen;
  return isOpen ? 'rotate(180deg)' : 'rotate(0)';
}, function (_ref13) {
  var isOpen = _ref13.isOpen;
  return isOpen ? 'transform .5s;' : 'transform .5s';
});

exports.IconWrapper = IconWrapper;