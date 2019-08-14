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

var _classnames = _interopRequireDefault(require("classnames"));

var _Icon = _interopRequireDefault(require("../../General/Icon"));

var _TextFieldStyle = require("../../Style/Input/TextFieldStyle");

var TextField =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(TextField, _React$Component);

  function TextField(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, TextField);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(TextField).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleFocusChange", function (onBlur) {
      var listener = function listener(e) {
        _this.setState({
          floating: e.target.value.length > 0
        });

        if (onBlur !== undefined) {
          return onBlur(e);
        }
      };

      return listener;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleShowPassword", function () {
      var inputType = _this.state.inputType;

      _this.setState({
        inputType: inputType === 'password' ? 'text' : 'password'
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleKeyDown", function (e) {
      var _this$props = _this.props,
          disableTyping = _this$props.disableTyping,
          onKeyDown = _this$props.onKeyDown;

      if (disableTyping) {
        e.preventDefault();
      }

      if (onKeyDown !== undefined) {
        return onKeyDown(e);
      }
    });
    var type = _this.props.type;
    _this.state = {
      floating: false,
      inputType: type
    };
    return _this;
  }

  (0, _createClass2["default"])(TextField, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props2 = this.props,
          value = _this$props2.value,
          defaultValue = _this$props2.defaultValue;

      if (value !== undefined || defaultValue !== undefined) {
        if (value !== '') {
          this.setState({
            floating: true
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          type = _this$props3.type,
          label = _this$props3.label,
          value = _this$props3.value,
          status = _this$props3.status,
          disabled = _this$props3.disabled,
          className = _this$props3.className,
          onBlur = _this$props3.onBlur,
          small = _this$props3.small,
          removeFloatingLabel = _this$props3.removeFloatingLabel,
          disableTyping = _this$props3.disableTyping,
          defaultProps = (0, _objectWithoutProperties2["default"])(_this$props3, ["type", "label", "value", "status", "disabled", "className", "onBlur", "small", "removeFloatingLabel", "disableTyping"]);
      var _this$state = this.state,
          floating = _this$state.floating,
          inputType = _this$state.inputType;
      return React.createElement(_TextFieldStyle.TextFieldContainer, {
        className: (0, _classnames["default"])('aries-textfield', className)
      }, React.createElement(_TextFieldStyle.TextFieldInput, (0, _extends2["default"])({
        type: inputType,
        placeholder: removeFloatingLabel && label,
        status: status,
        disabled: disabled,
        onBlur: this.handleFocusChange(onBlur),
        onKeyDown: this.handleKeyDown,
        floating: floating,
        value: value,
        "aria-label": label,
        small: small,
        disableTyping: disableTyping
      }, defaultProps)), !removeFloatingLabel && React.createElement(_TextFieldStyle.TextFieldLabel, {
        className: "textfield-label",
        floating: floating,
        status: status,
        small: small
      }, label), type === 'password' && React.createElement("div", {
        className: "see-password",
        onClick: this.handleShowPassword
      }, React.createElement(_Icon["default"], {
        name: inputType === 'password' ? 'eye' : 'eye-slashed',
        color: inputType === 'password' ? 'black' : '#777777'
      })));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      if (nextProps.value) {
        return {
          floating: true
        };
      }

      return false;
    }
  }]);
  return TextField;
}(React.Component);

var _default = TextField;
exports["default"] = _default;