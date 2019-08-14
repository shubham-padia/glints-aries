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

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var React = _interopRequireWildcard(require("react"));

var _DrawerStyle = require("../../Style/Navigation/DrawerStyle");

var Drawer =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Drawer, _React$Component);

  function Drawer(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Drawer);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Drawer).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleAnimationStart", function () {
      _this.setState({
        isDisplay: true
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleAnimationEnd", function () {
      _this.setState({
        isDisplay: false
      });
    });
    _this.state = {
      isDisplay: false
    };
    return _this;
  }

  (0, _createClass2["default"])(Drawer, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var isDisplay = this.state.isDisplay;
      var isOpen = this.props.isOpen;

      if (isOpen && !isDisplay) {
        this.handleAnimationStart();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          isOpen = _this$props.isOpen,
          onClose = _this$props.onClose,
          defaultProps = (0, _objectWithoutProperties2["default"])(_this$props, ["children", "isOpen", "onClose"]);
      var isDisplay = this.state.isDisplay;
      return React.createElement(_DrawerStyle.DrawerContainer, {
        className: "aries-drawer",
        "aria-modal": "true",
        "aria-hidden": isDisplay ? 'false' : 'true',
        isDisplay: isDisplay,
        open: isOpen,
        onAnimationStart: this.handleAnimationStart,
        onAnimationEnd: this.handleAnimationEnd,
        onClick: function onClick() {
          return onClose();
        }
      }, React.createElement(_DrawerStyle.DrawerWrapper, (0, _extends2["default"])({
        className: "drawer-contentwrapper",
        role: "dialog",
        open: isOpen,
        tabIndex: 0,
        onClick: function onClick(e) {
          return e.stopPropagation();
        }
      }, defaultProps), children));
    }
  }]);
  return Drawer;
}(React.Component);

var _default = Drawer;
exports["default"] = _default;