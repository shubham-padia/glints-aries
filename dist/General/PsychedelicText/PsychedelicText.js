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

var _PsychedelicTextStyle = require("../../Style/General/PsychedelicTextStyle");

var renderPsychedelicText = function renderPsychedelicText(_ref) {
  var children = _ref.children,
      type = _ref.type,
      psychTheme = _ref.psychTheme,
      className = _ref.className,
      defaultProps = (0, _objectWithoutProperties2["default"])(_ref, ["children", "type", "psychTheme", "className"]);

  switch (type) {
    case 'heading':
      return React.createElement(_PsychedelicTextStyle.Heading, (0, _extends2["default"])({
        className: (0, _classnames["default"])('aries-psyctext', className)
      }, defaultProps), children);

    case 'subheading':
      return React.createElement(_PsychedelicTextStyle.SubHeading, (0, _extends2["default"])({
        className: (0, _classnames["default"])('aries-psyctext', className),
        psychTheme: psychTheme
      }, defaultProps), children);

    default:
      return React.createElement("h3", null, children);
  }
};

var PsychedelicText = function PsychedelicText(props) {
  return React.createElement(React.Fragment, null, renderPsychedelicText(props));
};

;
var _default = PsychedelicText;
exports["default"] = _default;