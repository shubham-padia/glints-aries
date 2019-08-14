"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _BrandStyle = require("../../Style/General/BrandStyle");

var GlintsBlack = require('../../../assets/image/glints-logo-black.svg');

var GlintsWhite = require('../../../assets/image/glints-logo-white.svg');

var Brand =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Brand, _React$Component);

  function Brand() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, Brand);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(Brand)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleRightClick", function (e) {
      var _this$props = _this.props,
          rightClickURL = _this$props.rightClickURL,
          onContextMenu = _this$props.onContextMenu;

      if (rightClickURL) {
        e.preventDefault();

        if (onContextMenu !== undefined) {
          onContextMenu();
        }

        window.location.href = rightClickURL;
      }
    });
    return _this;
  }

  (0, _createClass2["default"])(Brand, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          alt = _this$props2.alt,
          asset = _this$props2.asset,
          className = _this$props2.className,
          defaultProps = (0, _objectWithoutProperties2["default"])(_this$props2, ["alt", "asset", "className"]);
      var srcAsset = '';

      if (asset === 'glints-black') {
        srcAsset = GlintsBlack;
      } else if (asset === 'glints-white') {
        srcAsset = GlintsWhite;
      } else {
        srcAsset = asset;
      }

      return React.createElement(_BrandStyle.BrandContainer, (0, _extends2["default"])({
        className: (0, _classnames["default"])('aries-brand', className),
        role: "presentation",
        tabIndex: 0,
        onContextMenu: this.handleRightClick
      }, defaultProps), React.createElement(_BrandStyle.BrandImage, {
        className: "brand-image",
        src: srcAsset,
        alt: alt,
        tabIndex: -1
      }));
    }
  }]);
  return Brand;
}(React.Component);

var _default = Brand;
exports["default"] = _default;