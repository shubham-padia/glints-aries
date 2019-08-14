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

var _TooltipStyle = require("../../Style/Display/TooltipStyle");

var Tooltip =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Tooltip, _React$Component);

  function Tooltip() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, Tooltip);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(Tooltip)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      isHover: false
    });
    return _this;
  }

  (0, _createClass2["default"])(Tooltip, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          text = _this$props.text,
          position = _this$props.position,
          defaultProps = (0, _objectWithoutProperties2["default"])(_this$props, ["className", "children", "text", "position"]);
      var isHover = this.state.isHover;
      return React.createElement(_TooltipStyle.TooltipContainer, (0, _extends2["default"])({
        className: (0, _classnames["default"])('aries-tooltip', className),
        role: "tooltip",
        "aria-hidden": isHover ? 'false' : 'true',
        "aria-label": text,
        onMouseEnter: function onMouseEnter() {
          return _this2.setState({
            isHover: true
          });
        },
        onMouseLeave: function onMouseLeave() {
          return _this2.setState({
            isHover: false
          });
        }
      }, defaultProps), isHover && React.createElement(_TooltipStyle.TooltipContent, {
        text: text,
        position: position
      }, React.createElement(_TooltipStyle.TooltipMessage, null, text)), children);
    }
  }]);
  return Tooltip;
}(React.Component);

var _default = Tooltip;
exports["default"] = _default;