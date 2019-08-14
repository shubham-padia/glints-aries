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

var _RadioButton = require("../RadioButton");

var _SwitchStyle = require("../../Style/Input/SwitchStyle");

var Switch =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Switch, _React$Component);

  function Switch() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, Switch);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(Switch)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      clickID: '',
      initialValue: ''
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleChange", function (e) {
      var radioButton = e.target;
      var value = radioButton.value;

      _this.setState({
        clickID: value,
        initialValue: value
      });
    });
    return _this;
  }

  (0, _createClass2["default"])(Switch, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          value = _this$props.value,
          defaultValue = _this$props.defaultValue;
      this.setState({
        clickID: value[0],
        initialValue: defaultValue
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          label = _this$props2.label,
          name = _this$props2.name,
          value = _this$props2.value,
          className = _this$props2.className,
          defaultProps = (0, _objectWithoutProperties2["default"])(_this$props2, ["label", "name", "value", "className"]);
      var _this$state = this.state,
          clickID = _this$state.clickID,
          initialValue = _this$state.initialValue;
      return React.createElement(_SwitchStyle.SwitchContainer, (0, _extends2["default"])({
        className: (0, _classnames["default"])('aries-switch', className),
        role: "switch",
        "aria-checked": "true"
      }, defaultProps, {
        ID: clickID,
        defaultValue: initialValue,
        items: value
      }), React.createElement(_SwitchStyle.SwitchItemWrapper, {
        className: "switch-left"
      }, React.createElement(_RadioButton.RadioButton, {
        className: value[0],
        "aria-label": label[0],
        label: label[0],
        name: name[0],
        value: value[0],
        theme: "white",
        checked: initialValue === "".concat(value[0]) && true,
        onChange: this.handleChange
      })), React.createElement(_SwitchStyle.SwitchItemWrapper, {
        className: "switch-right"
      }, React.createElement(_RadioButton.RadioButton, {
        className: value[1],
        "aria-label": label[1],
        label: label[1],
        name: name[1],
        value: value[1],
        theme: "white",
        checked: initialValue === "".concat(value[1]) && true,
        onChange: this.handleChange
      })));
    }
  }]);
  return Switch;
}(React.Component);

var _default = Switch;
exports["default"] = _default;