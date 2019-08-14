"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _GlintsContainerStyle = _interopRequireDefault(require("../../Style/GlintsContainerStyle"));

var _Col = _interopRequireDefault(require("./Col"));

var _Row = _interopRequireDefault(require("./Row"));

var Grid = _GlintsContainerStyle["default"];
Grid.Col = _Col["default"];
Grid.Row = _Row["default"];
var _default = Grid;
exports["default"] = _default;