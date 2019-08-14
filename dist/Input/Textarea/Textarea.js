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

var _lodash = require("lodash");

var _TextareaStyle = require("../../Style/Input/TextareaStyle");

var Textarea =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2["default"])(Textarea, _React$PureComponent);

  function Textarea(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Textarea);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Textarea).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "textareaInputRef", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      floating: false,
      rows: 4,
      minRows: 4,
      maxRows: 12,
      textareaMaxHeight: 0
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleFocusChange", function (onBlur) {
      var listener = function listener(e) {
        _this.setState({
          floating: e.target.value.length > 0
        });

        if (onBlur !== undefined) {
          return onBlur();
        }
      };

      return listener;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleChange", function (e) {
      var _this$state = _this.state,
          minRows = _this$state.minRows,
          maxRows = _this$state.maxRows;
      var previousRows = e.target.rows;
      e.target.rows = minRows;
      var currentRows = ~~(e.target.scrollHeight / 30);

      if (currentRows === previousRows) {
        e.target.rows = currentRows;
      }

      if (currentRows >= maxRows) {
        e.target.rows = maxRows;
        e.target.scrollTop = e.target.scrollHeight;
      }

      _this.setState({
        rows: currentRows < maxRows ? currentRows : maxRows
      });

      if ((0, _lodash.isFunction)(_this.props.onChange)) {
        return _this.props.onChange(e);
      }
    });
    _this.textareaInputRef = React.createRef();
    return _this;
  }

  (0, _createClass2["default"])(Textarea, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var textarea = this.textareaInputRef.current;

      if (textarea.value.length > 0) {
        this.setState({
          floating: true
        });
      }

      this.setState({
        textareaMaxHeight: ~~(textarea.offsetHeight * 3.7 + 23 * 8 + 1)
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var value = this.props.value;
      var floating = this.state.floating;

      if (value && value !== '' && !floating) {
        this.setState({
          floating: true
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          label = _this$props.label,
          value = _this$props.value,
          status = _this$props.status,
          disabled = _this$props.disabled,
          className = _this$props.className,
          onBlur = _this$props.onBlur,
          onChange = _this$props.onChange,
          removeFloatingLabel = _this$props.removeFloatingLabel,
          defaultProps = (0, _objectWithoutProperties2["default"])(_this$props, ["label", "value", "status", "disabled", "className", "onBlur", "onChange", "removeFloatingLabel"]);
      var _this$state2 = this.state,
          floating = _this$state2.floating,
          rows = _this$state2.rows,
          textareaMaxHeight = _this$state2.textareaMaxHeight;
      return React.createElement(_TextareaStyle.TextareaContainer, {
        className: (0, _classnames["default"])('aries-textarea', className)
      }, React.createElement(_TextareaStyle.TextareaInput, (0, _extends2["default"])({
        ref: this.textareaInputRef,
        placeholder: removeFloatingLabel && label,
        rows: rows,
        status: status,
        disabled: disabled,
        onBlur: this.handleFocusChange(onBlur),
        onChange: this.handleChange,
        floating: floating,
        value: value,
        "aria-label": label
      }, defaultProps, {
        style: {
          maxHeight: "".concat(textareaMaxHeight, "px")
        }
      })), !removeFloatingLabel && React.createElement(_TextareaStyle.TextareaLabel, {
        floating: floating,
        status: status
      }, label));
    }
  }]);
  return Textarea;
}(React.PureComponent);

var _default = Textarea;
exports["default"] = _default;