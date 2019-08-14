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

var _RangeStyle = require("../../Style/Input/RangeStyle");

var Range =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Range, _React$Component);

  function Range() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, Range);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(Range)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      minVal: 0,
      maxVal: 100,
      val: 0
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleChange", function (onChange) {
      var listener = function listener(e) {
        var newValue = parseInt(e.target.value, 10);

        _this.setState({
          val: newValue
        });

        if (onChange !== undefined) {
          onChange(e.target.value);
        }
      };

      return listener;
    });
    return _this;
  }

  (0, _createClass2["default"])(Range, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          min = _this$props.min,
          max = _this$props.max,
          value = _this$props.value;

      if (min !== undefined && min >= 0) {
        this.setState({
          minVal: min
        });
      }

      if (max !== undefined && max > 0) {
        this.setState({
          maxVal: max
        });
      }

      if (value !== undefined && value > 0) {
        this.setState({
          val: value
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          className = _this$props2.className,
          onChange = _this$props2.onChange,
          block = _this$props2.block,
          defaultProps = (0, _objectWithoutProperties2["default"])(_this$props2, ["className", "onChange", "block"]);
      var _this$state = this.state,
          minVal = _this$state.minVal,
          maxVal = _this$state.maxVal,
          val = _this$state.val;
      return React.createElement(React.Fragment, null, React.createElement(_RangeStyle.RangeContainer, (0, _extends2["default"])({
        type: "range",
        className: (0, _classnames["default"])('aries-range', className),
        min: minVal,
        max: maxVal,
        value: val,
        onChange: this.handleChange(onChange),
        block: block
      }, defaultProps)));
    }
  }]);
  return Range;
}(React.Component);

var _default = Range;
exports["default"] = _default;