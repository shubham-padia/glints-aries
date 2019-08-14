"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LinkBtn = exports.GhostBtnContainer = exports.GhostBtn = exports.SecondaryContainer = exports.SecondaryBtn = exports.PrimaryBtn = exports.PrimaryContainer = exports.DefaultBtn = exports.DefaultBtnContainer = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Colors = require("../Colors");

var _StyleConfig = require("../../Utils/StyleConfig");

function _templateObject12() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-weight: normal;\n  text-transform: inherit;\n  width: ", ";\n  padding: 0;\n  justify-content: flex-start;\n  color: ", ";\n\n  label {\n    cursor: pointer;\n  }\n\n  &:hover {\n    color: ", ";\n  }\n\n  &:active {\n    color: ", ";\n  }\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  display: ", ";\n  z-index: 1;\n\n  ", "\n\n  ", " {\n    ", "\n  }\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  transition: background-color .5s;\n  width: ", ";\n  background: ", ";\n  padding: ", ";\n  }\n\n  ", "\n\n  &:hover {\n    transition: background-color .5s;\n  \n    ", "\n  }\n\n  ", "\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n        &:hover:after {\n          opacity: 1;\n          transition: opacity .8s linear;\n          animation: ", " .5s linear;\n        }\n      "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  display: ", ";\n\n  &:after {\n    content: '';\n    opacity: 0;\n    background-color: ", ";\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    z-index: -1;\n    top: 6px;\n    left: 6px;\n    transition: all .2s;\n    transform: translate3d(-4px, -4px, 0);\n    z-index: 1;\n  }\n\n  &:hover {\n    ", " {\n      ", "\n    }\n  }\n\n  &:active {\n    ", " {\n      background-color: ", ";\n      color: ", ";\n      transition: all .2s;\n      transform: translate3d(0, 0, 0);\n    }\n  }\n\n  &:active:after {\n    background-color: ", ";\n    transform: translate3d(-6px, -6px, 0);\n    transition: all .2s;\n  }\n\n  ", "\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  background-color: ", ";\n  color: ", ";\n  z-index: 2;\n  width: ", ";\n\n  ", "\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  25%, 75% {\n    transform: translate3d(0, 0, 0);\n  }\n\n  50%, 100% {\n    transform: translate3d(-4px, -4px, 0);\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  transition: all .2s;\n  width: ", ";\n\n  ", "\n\n  &:hover {\n    ", "\n  }\n\n  &:active {\n    ", "\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  display: ", ";\n  z-index: 1;\n\n  &:after {\n    content: '';\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    z-index: -1;\n    top: 8px;\n    left: 8px;\n    transition: all .2s;\n\n    ", "\n  }\n\n  &:hover:after {\n    ", "\n  }\n\n  &:active:after {\n    ", "\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: ", ";\n\n  ", "\n\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  display: ", ";\n  z-index: 1;\n\n  ", "\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  position: relative;\n  align-items: center;\n  justify-content: center;\n  border: none;\n  text-transform: uppercase;\n  outline: none;\n  cursor: pointer;\n  font-weight: bold;\n  font-size: 1em;\n  line-height: 1.5;\n  padding: ", ";\n  background: transparent;\n  transition: all .2s;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var generalButtonPadding = [15, 40];
var smallButtonPadding = [10, 20];

var Button = _styledComponents["default"].button(_templateObject(), function (_ref) {
  var small = _ref.small;
  return small ? "".concat(smallButtonPadding[0], "px ").concat(smallButtonPadding[1], "px") : "".concat(generalButtonPadding[0], "px ").concat(generalButtonPadding[1], "px");
});

/*
 * Default Button
 */
var DefaultBtnContainer = _styledComponents["default"].div(_templateObject2(), function (_ref2) {
  var block = _ref2.block;
  return block ? 'flex' : 'inline-flex';
}, function (_ref3) {
  var disabled = _ref3.disabled,
      removeHoverEffect = _ref3.removeHoverEffect;

  if (!disabled && !removeHoverEffect) {
    return "\n      &:active {\n        background: ".concat(_Colors.SecondaryColor.black, ";\n        color: ").concat(_Colors.SecondaryColor.white, ";\n        transform: translate3d(2px, 2px, 0);\n        transition: all .2s;\n      }\n\n      &:after {\n        content: '';\n        opacity: 0;\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        background: repeating-linear-gradient(-45deg, transparent, transparent 3px, rgba(0, 0, 0, 0.5) 5px);\n        top: 5px;\n        left: 5px;\n        z-index: -1;\n        transition: all .2s;\n      }\n\n      &:hover:after {\n        opacity: 1;\n        transition: all .2s;\n      }\n\n      &:active:after {\n        transform: translate3d(-5px, -5px, 0);\n        transition: all .2s;\n      }\n      ");
  }
});

exports.DefaultBtnContainer = DefaultBtnContainer;
var DefaultBtn = (0, _styledComponents["default"])(Button)(_templateObject3(), function (_ref4) {
  var block = _ref4.block;
  return block && '100%';
}, function (props) {
  switch (props.theme) {
    case "".concat(_StyleConfig.Theme.RED):
      return "\n          background-color: ".concat(_Colors.PrimaryColor.glintsred, ";\n          color: ").concat(_Colors.SecondaryColor.white, ";\n        ");

    case "".concat(_StyleConfig.Theme.BLUE):
      return "\n          background-color: ".concat(_Colors.SecondaryColor.actionblue, ";\n          color: ").concat(_Colors.SecondaryColor.white, ";\n        ");

    case "".concat(_StyleConfig.Theme.YELLOW):
      return "\n          background-color: ".concat(_Colors.PrimaryColor.glintsyellow, ";\n          color: ").concat(_Colors.SecondaryColor.black, ";\n        ");

    default:
      return "\n          background-color: ".concat(_Colors.SecondaryColor.white, ";\n          color: ").concat(_Colors.SecondaryColor.black, ";\n\n          &:hover {\n            background-color: ").concat(_Colors.SecondaryColor.lightergrey, ";\n            color: ").concat(_Colors.SecondaryColor.blue, ";\n          }\n\n          &:active {\n            background-color: ").concat(_Colors.SecondaryColor.black, ";\n            color: ").concat(_Colors.SecondaryColor.white, ";\n          }\n        ");
  }
}, function (_ref5) {
  var disabled = _ref5.disabled;

  if (disabled) {
    return "\n        background-color: ".concat(_Colors.SecondaryColor.lightgrey, ";\n        cursor: not-allowed;\n      ");
  }
});
exports.DefaultBtn = DefaultBtn;

/*
 * Primary Button
 */
var PrimaryContainer = _styledComponents["default"].div(_templateObject4(), function (_ref6) {
  var block = _ref6.block;
  return block ? 'flex' : 'inline-flex';
}, function (props) {
  var _themeBackgrounds;

  var themeBackgrounds = (_themeBackgrounds = {}, (0, _defineProperty2["default"])(_themeBackgrounds, _StyleConfig.Theme.BLUE_RED, _Colors.PrimaryColor.glintsred), (0, _defineProperty2["default"])(_themeBackgrounds, _StyleConfig.Theme.YELLOW, _Colors.PrimaryColor.glintsred), _themeBackgrounds);

  if (props.disabled) {
    return 'background-color: none';
  }

  if (props.theme && themeBackgrounds[props.theme]) {
    return "background-color: ".concat(themeBackgrounds[props.theme], ";");
  }

  return "background-color: ".concat(_Colors.PrimaryColor.glintsyellow, ";");
}, function (props) {
  if (props.disabled) {
    return 'background-color: none;';
  }

  return "\n      background: ".concat(_Colors.SecondaryColor.black, ";\n      transform: translate3d(-2px, -2px, 0);\n      transition: all .2s;\n    ");
}, function (props) {
  if (!props.disabled) {
    return "\n        transform: translate3d(-4px, -4px, 0);\n        transition: all .2s;\n      ";
  }

  return false;
});

exports.PrimaryContainer = PrimaryContainer;
var PrimaryBtn = (0, _styledComponents["default"])(Button)(_templateObject5(), function (_ref7) {
  var block = _ref7.block;
  return block && '100%';
}, function (props) {
  var _themeColors;

  if (props.disabled) {
    return "\n        cursor: not-allowed;\n        background-color: ".concat(_Colors.SecondaryColor.lightgrey, ";\n        color: ").concat(_Colors.SecondaryColor.white, ";\n      ");
  }

  var themeColors = (_themeColors = {}, (0, _defineProperty2["default"])(_themeColors, _StyleConfig.Theme.RED, "\n        background-color: ".concat(_Colors.PrimaryColor.glintsred, ";\n        color: ").concat(_Colors.SecondaryColor.white, ";\n      ")), (0, _defineProperty2["default"])(_themeColors, _StyleConfig.Theme.BLUE, "\n        background-color: ".concat(_Colors.PrimaryColor.glintsblue, ";\n        color: ").concat(_Colors.SecondaryColor.white, ";\n      ")), (0, _defineProperty2["default"])(_themeColors, _StyleConfig.Theme.BLUE_RED, "\n        background-color: ".concat(_Colors.PrimaryColor.glintsblue, ";\n        color: ").concat(_Colors.SecondaryColor.white, ";\n      ")), (0, _defineProperty2["default"])(_themeColors, _StyleConfig.Theme.YELLOW, "\n        background-color: ".concat(_Colors.PrimaryColor.glintsyellow, ";\n      ")), _themeColors);

  if (props.theme && themeColors[props.theme]) {
    return themeColors[props.theme];
  }

  return "\n      background-color: ".concat(_Colors.SecondaryColor.white, ";\n      color: ").concat(_Colors.PrimaryColor.glintsblue, ";\n\n      &:active {\n        color: ").concat(_Colors.SecondaryColor.white, ";\n      }\n    ");
}, function (props) {
  if (props.disabled) {
    return 'transform: none';
  }

  return "\n      transform: translate3d(2px, 2px, 0);\n      transition: all .2s;\n    ";
}, function (props) {
  if (!props.disabled) {
    return "\n        transform: translate3d(4px, 4px, 0);\n        transition: all .2s;\n        background-color: ".concat(_Colors.SecondaryColor.black, ";\n        color: ").concat(_Colors.SecondaryColor.white, ";\n      ");
  }

  return 'transform: none';
});
exports.PrimaryBtn = PrimaryBtn;

/*
 * Secondary Button
 */
var Bouncing = (0, _styledComponents.keyframes)(_templateObject6());
var SecondaryBtn = (0, _styledComponents["default"])(Button)(_templateObject7(), _Colors.SecondaryColor.whitesmoke, _Colors.SecondaryColor.black, function (_ref8) {
  var block = _ref8.block;
  return block && '100%';
}, function (_ref9) {
  var disabled = _ref9.disabled;

  if (disabled) {
    return "\n        background-color: ".concat(_Colors.SecondaryColor.lightgrey, ";\n        color: ").concat(_Colors.SecondaryColor.white, ";\n        cursor: not-allowed;\n      ");
  }
});
exports.SecondaryBtn = SecondaryBtn;

var SecondaryContainer = _styledComponents["default"].div(_templateObject8(), function (_ref10) {
  var block = _ref10.block;
  return block ? 'flex' : 'inline-flex';
}, _Colors.PrimaryColor.glintsred, SecondaryBtn, function (_ref11) {
  var disabled = _ref11.disabled;

  if (!disabled) {
    return "\n          background-color: ".concat(_Colors.PrimaryColor.glintsyellow, ";\n          transform: translate3d(-4px, -4px, 0);\n          transition: transform .2s;\n        ");
  }
}, SecondaryBtn, _Colors.SecondaryColor.black, _Colors.SecondaryColor.white, _Colors.SecondaryColor.black, function (_ref12) {
  var disabled = _ref12.disabled;

  if (!disabled) {
    return (0, _styledComponents.css)(_templateObject9(), Bouncing);
  }
});

exports.SecondaryContainer = SecondaryContainer;

/*
 * Ghost Button
 */
var GhostBtn = (0, _styledComponents["default"])(Button)(_templateObject10(), function (_ref13) {
  var block = _ref13.block;
  return block && '100%';
}, _Colors.SecondaryColor.white, function (_ref14) {
  var small = _ref14.small;
  return small ? "".concat(smallButtonPadding[0] - 2, "px ").concat(smallButtonPadding[1] - 2, "px") : "".concat(generalButtonPadding[0] - 2, "px ").concat(generalButtonPadding[1] - 2, "px");
}, function (props) {
  switch (props.theme) {
    case "".concat(_StyleConfig.Theme.RED):
      return "\n          border: 2px solid ".concat(_Colors.PrimaryColor.glintsred, ";\n          color: ").concat(_Colors.PrimaryColor.glintsred, ";\n        ");

    case "".concat(_StyleConfig.Theme.YELLOW):
      return "\n          border: 2px solid ".concat(_Colors.PrimaryColor.glintsyellow, ";\n          color: ").concat(_Colors.PrimaryColor.glintsyellow, ";\n        ");

    case "".concat(_StyleConfig.Theme.BLUE):
      return "\n          border: 2px solid ".concat(_Colors.SecondaryColor.actionblue, ";\n          color: ").concat(_Colors.SecondaryColor.actionblue, ";\n        ");

    case "".concat(_StyleConfig.Theme.WHITE):
      return "\n          border: 2px solid ".concat(_Colors.SecondaryColor.white, ";\n          color: ").concat(_Colors.SecondaryColor.white, ";\n        ");

    default:
      return null;
  }
}, function (_ref15) {
  var disabled = _ref15.disabled,
      theme = _ref15.theme;

  if (!disabled) {
    switch (theme) {
      case "".concat(_StyleConfig.Theme.RED):
        return "\n            background-color: ".concat(_Colors.PrimaryColor.glintsred, ";\n            color: ").concat(_Colors.SecondaryColor.white, ";\n          ");

      case "".concat(_StyleConfig.Theme.YELLOW):
        return "\n            background-color: ".concat(_Colors.PrimaryColor.glintsyellow, ";\n            color: ").concat(_Colors.SecondaryColor.white, ";\n          ");

      case "".concat(_StyleConfig.Theme.BLUE):
        return "\n            background-color: ".concat(_Colors.SecondaryColor.actionblue, ";\n            color: ").concat(_Colors.SecondaryColor.white, ";\n          ");

      case "".concat(_StyleConfig.Theme.WHITE):
        return "\n            background-color: ".concat(_Colors.SecondaryColor.white, ";\n            color: ").concat(_Colors.PrimaryColor.glintsblue, ";\n          ");

      default:
        return null;
    }
  }
}, function (_ref16) {
  var disabled = _ref16.disabled;

  if (disabled) {
    return "\n        background-color: ".concat(_Colors.SecondaryColor.lightgrey, ";\n        color: ").concat(_Colors.SecondaryColor.white, ";\n        border: none;\n        cursor: not-allowed;\n      ");
  }
});
exports.GhostBtn = GhostBtn;

var GhostBtnContainer = _styledComponents["default"].div(_templateObject11(), function (_ref17) {
  var block = _ref17.block;
  return block ? 'flex' : 'inline-flex';
}, function (_ref18) {
  var disabled = _ref18.disabled,
      removeHoverEffect = _ref18.removeHoverEffect;

  if (!disabled && !removeHoverEffect) {
    return "\n        &:active {\n          transition: background-color .5s; \n          transform: translate3d(2px, 2px, 0);\n          transition: all .2s;\n        }\n\n        &:after {\n          content: '';\n          opacity: 0;\n          position: absolute;\n          width: 100%;\n          height: 100%;\n          background: repeating-linear-gradient(-45deg, transparent, transparent 3px, rgba(0, 0, 0, 0.5) 5px);\n          top: 5px;\n          left: 5px;\n          z-index: -1;\n          transition: all .2s;\n        }\n\n        &:hover:after {\n          opacity: 1;\n          transition: all .2s;\n        }\n\n        &:active:after {\n          transform: translate3d(-5px, -5px, 0);\n          transition: all .2s;\n        }\n        ";
  }
}, GhostBtn, function (_ref19) {
  var disabled = _ref19.disabled;

  if (!disabled) {
    return "\n        &:active {\n          background-color: ".concat(_Colors.SecondaryColor.black, ";\n          color: ").concat(_Colors.SecondaryColor.white, ";\n          border: 2px solid ").concat(_Colors.SecondaryColor.black, ";\n        }\n      ");
  }
});

exports.GhostBtnContainer = GhostBtnContainer;

/*
 * Link Button
 */
var LinkBtn = (0, _styledComponents["default"])(Button)(_templateObject12(), function (_ref20) {
  var block = _ref20.block;
  return block && '100%';
}, _Colors.SecondaryColor.actionblue, _Colors.SecondaryColor.darkblue, _Colors.SecondaryColor.black);
exports.LinkBtn = LinkBtn;