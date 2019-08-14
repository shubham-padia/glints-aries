"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../../General/Icon"));

var _DomUtils = require("../../Utils/DomUtils");

var _ToastStyle = require("../../Style/Display/ToastStyle");

var Toast =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Toast, _React$Component);

  function Toast() {
    (0, _classCallCheck2["default"])(this, Toast);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Toast).apply(this, arguments));
  }

  (0, _createClass2["default"])(Toast, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var onClose = this.props.onClose;
      document.addEventListener('keydown', (0, _DomUtils.escEvent)(onClose), false);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var onClose = this.props.onClose;
      document.removeEventListener('keydown', (0, _DomUtils.escEvent)(onClose), false);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          isVisible = _this$props.isVisible,
          onClose = _this$props.onClose,
          theme = _this$props.theme;
      return React.createElement(_ToastStyle.ToastContainer, {
        className: "aries-toast",
        theme: theme,
        isVisible: isVisible
      }, React.createElement(_ToastStyle.ToastTopWrapper, {
        className: "toast-header"
      }, React.createElement(_ToastStyle.ToastIcon, {
        onClick: onClose
      }, React.createElement(_Icon["default"], {
        name: "close",
        color: theme === 'black' ? 'white' : 'black'
      }))), React.createElement(_ToastStyle.ToastBodyWrapper, {
        className: "toast-body"
      }, children));
    }
  }]);
  return Toast;
}(React.Component);

var _default = Toast;
exports["default"] = _default;