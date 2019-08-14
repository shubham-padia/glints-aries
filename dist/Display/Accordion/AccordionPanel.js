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

var _Icon = _interopRequireDefault(require("../../General/Icon"));

var _AccordionStyle = require("../../Style/Display/AccordionStyle");

var _Colors = require("../../Style/Colors");

var AccordionPanel = function AccordionPanel(props) {
  var className = props.className,
      label = props.label,
      content = props.content,
      active = props.active,
      defaultProps = (0, _objectWithoutProperties2["default"])(props, ["className", "label", "content", "active"]);
  return React.createElement(_AccordionStyle.AccordionPanelWrapper, (0, _extends2["default"])({
    className: className,
    role: "tab",
    "aria-expanded": active,
    tabIndex: 0
  }, defaultProps), React.createElement(_AccordionStyle.AccordionContentWrapper, {
    className: "accordion-content",
    tabIndex: -1
  }, React.createElement(_AccordionStyle.AccordionIconWrapper, null, React.createElement(_Icon["default"], {
    name: "add",
    color: _Colors.SecondaryColor.lightblack
  })), React.createElement("p", null, label), active && React.createElement(_AccordionStyle.AccordionContent, {
    onClick: function onClick(e) {
      return e.stopPropagation();
    }
  }, content)));
};

var _default = AccordionPanel;
exports["default"] = _default;