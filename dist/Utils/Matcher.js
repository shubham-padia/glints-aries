"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var Matcher = function Matcher() {
  (0, _classCallCheck2["default"])(this, Matcher);
};

exports["default"] = Matcher;
(0, _defineProperty2["default"])(Matcher, "create", function (propName, pairs) {
  var map = new Map(pairs);
  return function (props) {
    var key = props[propName];
    return map.get(key);
  };
});