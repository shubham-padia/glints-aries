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

var _CheckboxStyle = require("../../Style/Input/CheckboxStyle");

var Checkbox =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2["default"])(Checkbox, _React$PureComponent);

  function Checkbox() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, Checkbox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(Checkbox)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      checked: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClick", function (e) {
      var onClick = _this.props.onClick;
      var checked = _this.state.checked;

      _this.setState({
        checked: !checked
      });

      if (onClick !== undefined) {
        return onClick(e);
      }
    });
    return _this;
  }

  (0, _createClass2["default"])(Checkbox, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          value = _this$props.value,
          onClick = _this$props.onClick,
          className = _this$props.className,
          defaultProps = (0, _objectWithoutProperties2["default"])(_this$props, ["id", "value", "onClick", "className"]);
      var checked = this.state.checked;
      return React.createElement(_CheckboxStyle.CheckboxContainer, {
        className: (0, _classnames["default"])('aries-checkbox', className),
        role: "checkbox",
        "aria-labelledby": id,
        "aria-checked": checked,
        tabIndex: 0
      }, React.createElement("input", (0, _extends2["default"])({
        type: "checkbox",
        id: id,
        onClick: this.handleClick
      }, defaultProps)), React.createElement("label", {
        htmlFor: id,
        tabIndex: -1
      }, value));
    }
  }]);
  return Checkbox;
}(React.PureComponent);

var _default = Checkbox;
exports["default"] = _default;