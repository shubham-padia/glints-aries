"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _LoadingStyle = require("../../Style/General/LoadingStyle");

var Loading = function Loading(props) {
  var className = props.className;
  return React.createElement(_LoadingStyle.LoadingContainer, {
    className: (0, _classnames["default"])('aries-loading', className),
    role: "alert",
    "aria-busy": "true",
    "aria-live": "polite"
  }, React.createElement(_LoadingStyle.Spinner, null));
};

var _default = Loading;
exports["default"] = _default;