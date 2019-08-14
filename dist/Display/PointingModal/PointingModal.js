"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _PointingModalStyle = require("../../Style/Display/PointingModalStyle");

var _PointingModalHeader = _interopRequireDefault(require("./PointingModalHeader"));

var _PointingModalBody = _interopRequireDefault(require("./PointingModalBody"));

var _PointingModalItem = _interopRequireDefault(require("./PointingModalItem"));

var _PointingModalFooter = _interopRequireDefault(require("./PointingModalFooter"));

var PointingModal = function PointingModal(props) {
  var children = props.children,
      className = props.className,
      defaultProps = (0, _objectWithoutProperties2["default"])(props, ["children", "className"]);
  return React.createElement(_PointingModalStyle.PointingModalContainer, (0, _extends2["default"])({
    className: (0, _classnames["default"])('aries-pointingmodal', className),
    role: "dialog",
    "aria-modal": "true"
  }, defaultProps), React.createElement(_PointingModalStyle.PointingModalHeaderArrow, {
    role: "presentation"
  }), children);
};

PointingModal.Header = _PointingModalHeader["default"];
PointingModal.Body = _PointingModalBody["default"];
PointingModal.Item = _PointingModalItem["default"];
PointingModal.Footer = _PointingModalFooter["default"];
var _default = PointingModal;
exports["default"] = _default;