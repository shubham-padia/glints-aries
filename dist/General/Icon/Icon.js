"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _IconLibrary = require("../../Utils/IconLibrary");

var Icon = function Icon(props) {
  var name = props.name,
      color = props.color;
  var iconName = name.replace(/-/g, '_');
  return React.createElement("svg", {
    width: "1em",
    height: "1em",
    fill: color,
    viewBox: "0 0 100 100"
  }, _IconLibrary.ICONS[iconName.toUpperCase()]);
};

var _default = Icon;
exports["default"] = _default;