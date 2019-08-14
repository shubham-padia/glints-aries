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

var _OmniSearchStyle = require("../../Style/Input/OmniSearchStyle");

var OmniSearchList = function OmniSearchList(props) {
  var title = props.title,
      children = props.children,
      className = props.className,
      defaultProps = (0, _objectWithoutProperties2["default"])(props, ["title", "children", "className"]);
  return React.createElement(_OmniSearchStyle.OmniSearchListItem, (0, _extends2["default"])({
    className: (0, _classnames["default"])('omnisearch-listitem', className),
    role: "list"
  }, defaultProps), React.createElement("label", null, title), React.createElement("ul", null, children));
};

var _default = OmniSearchList;
exports["default"] = _default;