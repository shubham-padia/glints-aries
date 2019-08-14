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

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Icon = _interopRequireDefault(require("../Icon"));

var _AlertStyle = require("../../Style/General/AlertStyle");

var _Colors = require("../../Style/Colors");

var Alert =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Alert, _React$Component);

  function Alert(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Alert);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Alert).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "alertContainerRef", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "autoCloseTimeout", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleKeyDown", function (onClose) {
      var listener = function listener(e) {
        if (e.keyCode === 13 || e.keyCode === 27) {
          onClose();
        }
      };

      return listener;
    });
    _this.alertContainerRef = React.createRef();
    _this.state = {
      isVisible: props.isOpen
    };
    return _this;
  }

  (0, _createClass2["default"])(Alert, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this2 = this;

      var isOpen = this.props.isOpen;
      clearTimeout(this.autoCloseTimeout);

      if (prevProps.isOpen && !isOpen) {
        setTimeout(function () {
          return _this2.setState({
            isVisible: false
          });
        }, 300);
      } else if (isOpen && prevProps.autoClose) {
        this.autoCloseTimeout = setTimeout(function () {
          prevProps.onClose();
        }, prevProps.autoClose);
      }

      if (isOpen) {
        this.alertContainerRef.current.focus();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.autoCloseTimeout);
    }
  }, {
    key: "renderAlertTypeIcon",
    value: function renderAlertTypeIcon() {
      var type = this.props.type;
      var alertType = null;
      var alertColor = null;

      switch (type) {
        case 'success':
          alertType = 'checkmark-solid';
          alertColor = _Colors.SecondaryColor.darkgreen;
          break;

        case 'warning':
          alertType = 'warning-solid';
          alertColor = _Colors.SecondaryColor.orange;
          break;

        case 'danger':
          alertType = 'warning-solid';
          alertColor = _Colors.PrimaryColor.glintsred;
          break;

        case 'info':
          alertType = 'info-solid';
          alertColor = _Colors.PrimaryColor.glintsblue;
          break;

        default:
          alertType = 'info-solid';
          alertColor = _Colors.PrimaryColor.glintsblue;
          break;
      }

      return React.createElement(React.Fragment, null, React.createElement(_Icon["default"], {
        name: alertType,
        color: alertColor
      }));
    }
  }, {
    key: "renderMessage",
    value: function renderMessage() {
      var message = this.props.message;
      return React.createElement(_AlertStyle.AlertMessage, {
        className: "alert-message"
      }, message);
    }
  }, {
    key: "renderIcon",
    value: function renderIcon() {
      var onClose = this.props.onClose;
      return React.createElement(_AlertStyle.AlertIcon, {
        className: "alert-close",
        role: "button",
        "aria-label": "Press Escape or Enter button to close alert",
        title: "Close alert",
        onClick: onClose
      }, React.createElement(_Icon["default"], {
        name: "close",
        color: _Colors.SecondaryColor.grey
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          type = _this$props.type,
          isOpen = _this$props.isOpen,
          onClose = _this$props.onClose,
          className = _this$props.className;
      var isVisible = this.state.isVisible;
      return isVisible ? React.createElement(_AlertStyle.AlertContainer, {
        className: (0, _classnames["default"])('aries-alert', className),
        type: type,
        role: "alertdialog",
        "aria-hidden": isVisible ? 'false' : 'true',
        "aria-describedby": "alert-message",
        isOpen: isOpen,
        isVisible: isVisible,
        tabIndex: 0,
        onKeyDown: this.handleKeyDown(onClose),
        ref: this.alertContainerRef
      }, this.renderAlertTypeIcon(), React.createElement(_AlertStyle.AlertContent, {
        className: "alert-content"
      }, this.renderMessage(), this.renderIcon())) : null;
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.isOpen && !prevState.isVisible) {
        return {
          isVisible: true
        };
      }

      return null;
    }
  }]);
  return Alert;
}(React.Component);

var _default = Alert;
exports["default"] = _default;