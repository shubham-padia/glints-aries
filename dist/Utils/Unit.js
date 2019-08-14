"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var moment = _interopRequireWildcard(require("moment"));

function memoize(fn) {
  var cacheMap = new Map();
  return function (key) {
    var cacheKey = key;
    var cache = cacheMap.get(cacheKey);

    if (cache) {
      return cache;
    }

    var result = fn(key);
    cacheMap.set(cacheKey, result);
    return result;
  };
}

var Unit = function Unit() {
  (0, _classCallCheck2["default"])(this, Unit);
};

exports["default"] = Unit;
(0, _defineProperty2["default"])(Unit, "numToRem", memoize(function (num) {
  return "".concat((num * 0.1).toFixed(1), "rem");
}));
(0, _defineProperty2["default"])(Unit, "formatDate", function (date) {
  return moment(date).diff(Date.now(), 'days') === 0 ? moment(date).locale('id').fromNow() : moment(date).locale('id').format('D MMMM');
});
(0, _defineProperty2["default"])(Unit, "deltaDate", function (date) {
  return date.diff(moment(), 'days');
});