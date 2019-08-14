"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UikitConsumer = exports.UikitProvider = exports.Uikit = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var React = _interopRequireWildcard(require("react"));

var _createReactContext = _interopRequireDefault(require("create-react-context"));

var uikitAssets = require('../../dist/public/manifest.json');

var Uikit = function Uikit(publicPath, LinkComponent) {
  var _this = this;

  (0, _classCallCheck2["default"])(this, Uikit);
  (0, _defineProperty2["default"])(this, "publicPath", void 0);
  (0, _defineProperty2["default"])(this, "assetsMap", void 0);
  (0, _defineProperty2["default"])(this, "Link", void 0);
  (0, _defineProperty2["default"])(this, "getUrl", function (assetPath) {
    return "".concat(_this.publicPath).concat(_this.assetsMap.get(assetPath) || 'notfound');
  });
  this.publicPath = publicPath;
  this.Link = LinkComponent;
  this.assetsMap = new Map(Object.keys(uikitAssets).map(function (asset) {
    return [asset, uikitAssets[asset]];
  }));
};

exports.Uikit = Uikit;

var DefaultLink = function DefaultLink(props) {
  return React.createElement("a", props);
};

var UikitContext = (0, _createReactContext["default"])(new Uikit('/', DefaultLink));
var UikitProvider = UikitContext.Provider;
exports.UikitProvider = UikitProvider;
var UikitConsumer = UikitContext.Consumer;
exports.UikitConsumer = UikitConsumer;