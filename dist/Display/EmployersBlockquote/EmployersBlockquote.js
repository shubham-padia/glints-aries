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

var _EmployersBlockquoteStyle = require("../../Style/Display/EmployersBlockquoteStyle");

var Blockquote = function Blockquote(props) {
  var children = props.children,
      className = props.className,
      profileURL = props.profileURL,
      alt = props.alt,
      profileName = props.profileName,
      additionalInfo = props.additionalInfo,
      defaultProps = (0, _objectWithoutProperties2["default"])(props, ["children", "className", "profileURL", "alt", "profileName", "additionalInfo"]);
  return React.createElement(_EmployersBlockquoteStyle.BlockquoteContainer, (0, _extends2["default"])({
    className: (0, _classnames["default"])('aries-empblockquote', className),
    tabIndex: 0,
    role: "presentation"
  }, defaultProps), React.createElement(_EmployersBlockquoteStyle.BlockquoteWrapper, {
    className: "empblockquote-wrapper",
    tabIndex: -1
  }, React.createElement(_EmployersBlockquoteStyle.BlockquoteContent, {
    className: "empblockquote-testimony"
  }, children), React.createElement(_EmployersBlockquoteStyle.BlockquoteProfileWrapper, {
    className: "empblockquote-profilewrapper"
  }, React.createElement(_EmployersBlockquoteStyle.BlockquoteProfilePicture, {
    className: "empblockquote-profile"
  }, React.createElement("img", {
    src: profileURL,
    alt: alt,
    "aria-hidden": "true"
  })), React.createElement(_EmployersBlockquoteStyle.BlockquoteIdentity, null, React.createElement("p", {
    className: "empblockquote-author"
  }, profileName), React.createElement("span", {
    className: "empblockquote-origin"
  }, additionalInfo)))));
};

var _default = Blockquote;
exports["default"] = _default;