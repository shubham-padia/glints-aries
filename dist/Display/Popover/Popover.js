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

var _Icon = _interopRequireDefault(require("../../General/Icon"));

var _PopoverStyle = require("../../Style/Display/PopoverStyle");

var Popover =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Popover, _React$Component);

  function Popover(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Popover);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Popover).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleOnClick", function () {
      var isOpen = _this.state.isOpen;

      _this.setState({
        isOpen: !isOpen
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClickOutside", function () {
      _this.setState({
        isOpen: false
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderChildren", function () {
      var content = _this.props.content;
      var isOpen = _this.state.isOpen;
      return React.createElement(_PopoverStyle.PopoverItemWrapper, null, React.createElement(_PopoverStyle.PopoverIcon, null, React.createElement(_Icon["default"], {
        name: "arrow-down",
        color: "black"
      })), isOpen && React.createElement(_PopoverStyle.PopOverContent, null, content));
    });
    _this.state = {
      isOpen: false
    };
    return _this;
  }

  (0, _createClass2["default"])(Popover, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className;
      return React.createElement(_PopoverStyle.PopoverContainer, {
        className: (0, _classnames["default"])('aries-popover', className),
        onBlur: this.handleClickOutside,
        "aria-haspopup": "true",
        "aria-busy": "false",
        tabIndex: 0
      }, React.createElement(_PopoverStyle.PopoverChildren, {
        onClick: this.handleOnClick
      }, children), React.createElement(_PopoverStyle.PopoverContentWrapper, {
        onClick: this.handleOnClick
      }, this.renderChildren()));
    }
  }]);
  return Popover;
}(React.Component);

var _default = Popover;
exports["default"] = _default;