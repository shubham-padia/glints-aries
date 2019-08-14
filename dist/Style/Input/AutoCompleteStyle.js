"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AutoCompleteItemWrapper = exports.AutoCompleteListWrapper = exports.AutoCompleteInput = exports.AutoCompleteLabel = exports.AutoCompleteWrapper = exports.AutoCompleteContainer = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = require("../Colors");

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  cursor: pointer;\n  padding: .5em 1em;\n  list-style-type: none;\n  \n  &:first-child {\n    margin-top: .5em;\n  }\n\n  &:last-child {\n    margin-bottom: .5em;\n  }\n\n  &.active {\n    color: ", ";\n    background: ", ";\n  }\n\n  .autocomplete-additionalinfo {\n    color: ", ";\n  }\n\n  ", "\n"]);

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
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  width: 100%;\n  border: none;\n  outline: none;\n  font-size: ", ";\n  line-height: 1.5;\n  padding: ", ";\n  border: ", ";\n  transition: all .5s;\n\n  ", "\n    \n\n  &:disabled {\n    cursor: not-allowed;\n    background: ", ";\n\n    + ", " {\n      background: transparent;\n      color: ", ";\n    }\n\n    &:hover {\n      border: 2px solid ", ";\n    }\n  }\n\n  &:hover {\n    border: 2px solid ", ";\n    transition: all .5s;\n\n    ", "\n\n    + ", " {\n      color: ", ";\n\n      ", "\n    }\n  }\n\n  &:focus {\n    border: 2px solid ", ";\n\n    ", "\n\n    + ", " {\n      padding: 0 5px;\n      top: 1em;\n      transform: ", ";\n      transition: all .2s;\n      color: ", ";\n      font-size: 12px;\n\n      ", "\n    }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  left: ", ";\n  background: ", ";\n  color: ", ";\n  transition: all .2s;\n  pointer-events: none;\n  font-weight: 300;\n  font-size: 1.1em;\n  \n  ", "\n  \n  ", "\n\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  align-items: center;\n"]);

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

var AutoCompleteContainer = _styledComponents["default"].div(_templateObject());

exports.AutoCompleteContainer = AutoCompleteContainer;

var AutoCompleteWrapper = _styledComponents["default"].div(_templateObject2());

exports.AutoCompleteWrapper = AutoCompleteWrapper;

var AutoCompleteLabel = _styledComponents["default"].label(_templateObject3(), function (_ref) {
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

exports.AutoCompleteLabel = AutoCompleteLabel;

var AutoCompleteInput = _styledComponents["default"].input(_templateObject4(), function (_ref6) {
  var small = _ref6.small;
  return small ? '1em' : '1.1em';
}, function (_ref7) {
  var small = _ref7.small;
  return small ? '13px 15px' : '15px 20px';
}, function (_ref8) {
  var status = _ref8.status;
  return status === 'error' ? "2px solid ".concat(_Colors.PrimaryColor.glintsred) : "2px solid ".concat(_Colors.SecondaryColor.lightblack);
}, function (_ref9) {
  var status = _ref9.status,
      floating = _ref9.floating;

  if (status === 'error') {
    if (floating) {
      return "\n          border: 2px solid ".concat(_Colors.PrimaryColor.glintsred, ";\n        ");
    }
  }
}, _Colors.SecondaryColor.whitesmoke, AutoCompleteLabel, _Colors.SecondaryColor.grey, _Colors.SecondaryColor.lightgrey, _Colors.SecondaryColor.actionblue, function (_ref10) {
  var status = _ref10.status;

  if (status === 'error') {
    return "\n          border: 2px solid ".concat(_Colors.PrimaryColor.glintsred, ";\n        ");
  }
}, AutoCompleteLabel, _Colors.SecondaryColor.black, function (_ref11) {
  var status = _ref11.status;

  if (status === 'error') {
    return "\n          color: ".concat(_Colors.PrimaryColor.glintsred, ";\n        ");
  }
}, _Colors.SecondaryColor.actionblue, function (_ref12) {
  var status = _ref12.status;

  if (status === 'error') {
    return "\n          border: 2px solid ".concat(_Colors.PrimaryColor.glintsred, ";\n        ");
  }
}, AutoCompleteLabel, function (_ref13) {
  var small = _ref13.small;
  return small ? 'translate3d(-10px, -20px, 0)' : 'translate3d(-15px, -20px, 0)';
}, _Colors.SecondaryColor.black, function (_ref14) {
  var status = _ref14.status;

  if (status === 'error') {
    return "\n          color: ".concat(_Colors.PrimaryColor.glintsred, ";\n        ");
  }
});

exports.AutoCompleteInput = AutoCompleteInput;

var AutoCompleteListWrapper = _styledComponents["default"].ul(_templateObject5(), function (_ref15) {
  var open = _ref15.open;
  return open ? 'visible' : 'hidden';
}, function (_ref16) {
  var open = _ref16.open;
  return open ? '1' : '0';
}, function (_ref17) {
  var open = _ref17.open;
  return open ? 'scaleY(1)' : 'scaleY(0.9)';
}, function (_ref18) {
  var open = _ref18.open;
  return open ? 'all .2s ease' : 'all .1s ease';
}, _Colors.SecondaryColor.white, function (_ref19) {
  var small = _ref19.small;
  return small ? '1em' : '1.1em';
});

exports.AutoCompleteListWrapper = AutoCompleteListWrapper;

var AutoCompleteItemWrapper = _styledComponents["default"].li(_templateObject6(), _Colors.SecondaryColor.actionblue, _Colors.SecondaryColor.lightergrey, _Colors.SecondaryColor.lighterblack, function (_ref20) {
  var disabled = _ref20.disabled;

  if (disabled) {
    return "\n        cursor: not-allowed;\n        background: ".concat(_Colors.SecondaryColor.lightergrey, ";\n        color: ").concat(_Colors.SecondaryColor.grey, ";\n        font-style: italic;\n      ");
  }
});

exports.AutoCompleteItemWrapper = AutoCompleteItemWrapper;