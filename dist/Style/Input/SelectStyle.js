"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SelectItemWrapper = exports.SelectListWrapper = exports.SelectInput = exports.SelectLabel = exports.SelectWrapper = exports.SelectContainer = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = require("../Colors");

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  padding: .5em 1em;\n  list-style-type: none;\n  \n  &:first-child {\n    margin-top: .5em;\n  }\n\n  &:last-child {\n    margin-bottom: .5em;\n  }\n\n  &.active {\n    color: ", ";\n    background: ", ";\n  }\n\n  &.select-loading {\n    justify-content: center;\n  }\n\n  ", "\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  visibility: ", ";\n  opacity: ", ";\n  transform: ", ";\n  transform-origin: center top;\n  transition: ", ";\n  background: ", ";\n  width: 100%;\n  height: auto;\n  box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.12);\n  z-index: 9999;\n  max-height: 200px;\n  overflow: auto;\n  font-size: ", ";\n  padding: 0;\n  margin: 0;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: 100%;\n  border: none;\n  outline: none;\n  padding: ", ";\n  border: ", ";\n  transition: all .5s;\n  font-size: ", ";\n  line-height: 1.5;\n  /* Styling for disableTyping */\n  ", "\n  ", "\n    \n  &:disabled {\n    cursor: not-allowed;\n    background: ", ";\n    + ", " {\n      background: transparent;\n      color: ", ";\n    }\n    &:hover {\n      border: 2px solid ", ";\n    }\n  }\n  &:hover {\n    border: 2px solid ", ";\n    transition: all .5s;\n    ", "\n    + ", " {\n      color: ", ";\n      ", "\n    }\n  }\n  &:focus {\n    border: 2px solid ", ";\n    ", "\n    + ", " {\n      padding: 0 5px;\n      top: 1em;\n      transform: ", ";\n      transition: all .2s;\n      color: ", ";\n      font-size: 12px;\n      ", "\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  left: ", ";\n  background: ", ";\n  color: ", ";\n  transition: all .2s;\n  pointer-events: none;\n  font-weight: 300;\n  font-size: 1.1em;\n  \n  ", "\n  ", "\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: center;\n  .select-icon {\n    position: absolute;\n    right: 1em;\n    display: flex;\n    align-items: center;\n    pointer-events: none;\n    svg {\n      transform: ", ";\n      transition: ", ";\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  flex-grow: 1;\n  position: relative;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var SelectContainer = _styledComponents["default"].div(_templateObject());

exports.SelectContainer = SelectContainer;

var SelectWrapper = _styledComponents["default"].div(_templateObject2(), function (_ref) {
  var isFocus = _ref.isFocus;
  return isFocus ? 'rotate(180deg)' : 'rotate(0)';
}, function (_ref2) {
  var isFocus = _ref2.isFocus;
  return isFocus ? 'transform .5s' : 'transform .5s';
});

exports.SelectWrapper = SelectWrapper;

var SelectLabel = _styledComponents["default"].label(_templateObject3(), function (_ref3) {
  var small = _ref3.small;
  return small ? '16px' : '22px';
}, _Colors.SecondaryColor.white, function (_ref4) {
  var floating = _ref4.floating;
  return floating ? "".concat(_Colors.SecondaryColor.black) : "".concat(_Colors.SecondaryColor.lightblack);
}, function (_ref5) {
  var floating = _ref5.floating;

  if (floating) {
    return "\n        padding: 0 5px;\n        top: 1em;\n        transform: translate3d(-15px, -20px, 0);\n        transition: all .2s;\n        font-size: 12px;\n      ";
  }
}, function (_ref6) {
  var floating = _ref6.floating,
      small = _ref6.small;

  if (floating && small) {
    return "\n        transform: translate3d(-10px, -20px, 0);\n      ";
  }
}, function (_ref7) {
  var status = _ref7.status,
      floating = _ref7.floating;

  if (status === 'error' && floating) {
    return "\n        color: ".concat(_Colors.PrimaryColor.glintsred, ";\n      ");
  }
});

exports.SelectLabel = SelectLabel;

var SelectInput = _styledComponents["default"].input(_templateObject4(), function (_ref8) {
  var small = _ref8.small;
  return small ? '13px 2.5em 13px 15px' : '15px 2.5em 15px 20px';
}, function (_ref9) {
  var status = _ref9.status;
  return status === 'error' ? "2px solid ".concat(_Colors.PrimaryColor.glintsred) : "2px solid ".concat(_Colors.SecondaryColor.lightblack);
}, function (_ref10) {
  var small = _ref10.small;
  return small ? '1em' : '1.1em';
}, function (_ref11) {
  var disableTyping = _ref11.disableTyping;

  if (disableTyping) {
    return "\n        color: transparent;\n        text-shadow: 0 0 0 black;\n        cursor: pointer;\n      ";
  }
}, function (_ref12) {
  var status = _ref12.status,
      floating = _ref12.floating;

  if (status === 'error') {
    if (floating) {
      return "\n          border: 2px solid ".concat(_Colors.PrimaryColor.glintsred, ";\n        ");
    }
  }
}, _Colors.SecondaryColor.whitesmoke, SelectLabel, _Colors.SecondaryColor.grey, _Colors.SecondaryColor.lightgrey, _Colors.SecondaryColor.actionblue, function (_ref13) {
  var status = _ref13.status;

  if (status === 'error') {
    return "\n          border: 2px solid ".concat(_Colors.PrimaryColor.glintsred, ";\n        ");
  }
}, SelectLabel, _Colors.SecondaryColor.black, function (_ref14) {
  var status = _ref14.status;

  if (status === 'error') {
    return "\n          color: ".concat(_Colors.PrimaryColor.glintsred, ";\n        ");
  }
}, _Colors.SecondaryColor.actionblue, function (_ref15) {
  var status = _ref15.status;

  if (status === 'error') {
    return "\n          border: 2px solid ".concat(_Colors.PrimaryColor.glintsred, ";\n        ");
  }
}, SelectLabel, function (_ref16) {
  var small = _ref16.small;
  return small ? 'translate3d(-10px, -20px, 0)' : 'translate3d(-15px, -20px, 0)';
}, _Colors.SecondaryColor.black, function (_ref17) {
  var status = _ref17.status;

  if (status === 'error') {
    return "\n          color: ".concat(_Colors.PrimaryColor.glintsred, ";\n        ");
  }
});

exports.SelectInput = SelectInput;

var SelectListWrapper = _styledComponents["default"].ul(_templateObject5(), function (_ref18) {
  var open = _ref18.open;
  return open ? 'visible' : 'hidden';
}, function (_ref19) {
  var open = _ref19.open;
  return open ? '1' : '0';
}, function (_ref20) {
  var open = _ref20.open;
  return open ? 'scaleY(1)' : 'scaleY(0.9)';
}, function (_ref21) {
  var open = _ref21.open;
  return open ? 'all .2s ease' : 'all .1s ease';
}, _Colors.SecondaryColor.white, function (_ref22) {
  var small = _ref22.small;
  return small ? '1em' : '1.1em';
});

exports.SelectListWrapper = SelectListWrapper;

var SelectItemWrapper = _styledComponents["default"].li(_templateObject6(), _Colors.SecondaryColor.actionblue, _Colors.SecondaryColor.lightergrey, function (_ref23) {
  var disabled = _ref23.disabled;

  if (disabled) {
    return "\n        cursor: not-allowed;\n        background: ".concat(_Colors.SecondaryColor.lightergrey, ";\n        color: ").concat(_Colors.SecondaryColor.grey, ";\n        font-style: italic;\n      ");
  }
});

exports.SelectItemWrapper = SelectItemWrapper;