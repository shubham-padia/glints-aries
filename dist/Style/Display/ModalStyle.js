"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalFooter = exports.ModalBody = exports.ModalHeader = exports.ModalContentArea = exports.ModalDialog = exports.ModalContainer = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _StyleConfig = require("../../Utils/StyleConfig");

var _Colors = require("../Colors");

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  display: flex;\n  padding: 15px 30px;\n  justify-content: flex-end;\n  border-top: 1px solid ", ";\n\n  @media ", " {\n    padding: 15px;\n  }\n\n  * {\n    margin-left: 10px;\n\n    &:first-child {\n      margin-left: 0;\n    }\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  padding: ", ";\n\n  @media ", " {\n    padding: ", ";\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  align-content: center;\n  font-size: 1.6em;\n  border-bottom: 1px solid ", ";\n  padding: 15px;\n\n  h3 {\n    font-size: .8em;\n    text-transform: uppercase;\n    margin: 0;\n    margin-right: 36px;\n  }\n  \n  button {\n    display: flex;\n    background: transparent;\n    border: none;\n    cursor: pointer;\n    padding: 0;\n    width: 15px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  background: ", ";\n  margin: 2.5em auto;\n  outline: none;\n\n  ", "\n\n  ", "\n    \n  @media ", " {\n    width: 95vw;\n  }\n\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  visibility: ", ";\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  align-items: ", ";\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1001;\n  background: rgba(0, 0, 0, 0.65);\n  overflow: auto;\n\n  ", "\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var ModalContainer = _styledComponents["default"].div(_templateObject(), function (_ref) {
  var isOpen = _ref.isOpen;
  return isOpen ? 'visible' : 'hidden';
}, function (_ref2) {
  var centering = _ref2.centering;
  return centering && 'center';
}, function (_ref3) {
  var removeAnimation = _ref3.removeAnimation,
      isOpen = _ref3.isOpen;

  if (!removeAnimation) {
    return "\n        opacity: ".concat(isOpen ? '1' : '0', ";\n        transform: ").concat(isOpen ? 'scale(1)' : 'scale(0.98)', ";\n        transform-origin: center;\n        transition: ").concat(isOpen ? 'all .2s ease-in' : 'all .15s ease-out', ";\n      ");
  }
});

exports.ModalContainer = ModalContainer;

var ModalDialog = _styledComponents["default"].div(_templateObject2());

exports.ModalDialog = ModalDialog;

var ModalContentArea = _styledComponents["default"].div(_templateObject3(), function (_ref4) {
  var hideContentArea = _ref4.hideContentArea;
  return hideContentArea ? 'transparent' : "".concat(_Colors.SecondaryColor.white);
}, function (_ref5) {
  var size = _ref5.size;

  switch (size) {
    case 's':
      return "\n          width: 300px;\n        ";

    case 'm':
      return "\n          width: 500px;\n        ";

    case 'l':
      return "\n          width: 800px;\n        ";

    case 'xl':
      return "\n          width: 920px;\n        ";

    default:
      return "\n          width: 500px;\n        ";
  }
}, function (_ref6) {
  var centering = _ref6.centering;

  if (centering) {
    return "\n        max-height: 85vh;\n        overflow: auto;\n      ";
  }
}, _StyleConfig.Device.mobileM, function (_ref7) {
  var removeAnimation = _ref7.removeAnimation,
      isOpen = _ref7.isOpen;

  if (!removeAnimation) {
    return "\n        opacity: ".concat(isOpen ? '1' : '0', ";\n        transform: ").concat(isOpen ? 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)' : 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 30, 0, 1)', ";\n        transition: ").concat(isOpen ? 'all .25s ease-in' : 'all .25s ease-out', ";\n      ");
  }
});

exports.ModalContentArea = ModalContentArea;

var ModalHeader = _styledComponents["default"].header(_templateObject4(), _Colors.SecondaryColor.lightgrey);

exports.ModalHeader = ModalHeader;

var ModalBody = _styledComponents["default"].section(_templateObject5(), function (_ref8) {
  var hideContentArea = _ref8.hideContentArea;
  return hideContentArea ? '0' : '20px 30px';
}, _StyleConfig.Device.mobileM, function (_ref9) {
  var hideContentArea = _ref9.hideContentArea;
  return hideContentArea ? '0' : '20px 15px';
});

exports.ModalBody = ModalBody;

var ModalFooter = _styledComponents["default"].footer(_templateObject6(), _Colors.SecondaryColor.lightgrey, _StyleConfig.Device.mobileM);

exports.ModalFooter = ModalFooter;