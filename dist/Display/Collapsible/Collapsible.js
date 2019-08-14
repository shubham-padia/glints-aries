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

var _Icon = _interopRequireDefault(require("../../General/Icon"));

var _CollapsibleStyle = require("../../Style/Display/CollapsibleStyle");

var Collapsible =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Collapsible, _React$Component);

  function Collapsible() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, Collapsible);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(Collapsible)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      isOpen: true
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleOpen", function () {
      var isOpen = _this.state.isOpen;

      _this.setState({
        isOpen: !isOpen
      });
    });
    return _this;
  }

  (0, _createClass2["default"])(Collapsible, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      var isOpen = this.state.isOpen;

      if (isOpen !== nextState.isOpen) {
        // re-render
        return true;
      } // nothing changed. avoid unnecessary re-render


      return false;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var isOpen = this.props.isOpen;

      if (isOpen === false && isOpen !== undefined) {
        this.setState({
          isOpen: isOpen
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          label = _this$props.label,
          children = _this$props.children,
          className = _this$props.className,
          defaultProps = (0, _objectWithoutProperties2["default"])(_this$props, ["label", "children", "className"]);
      var isOpen = this.state.isOpen;
      return React.createElement(_CollapsibleStyle.CollapsibleContainer, (0, _extends2["default"])({
        className: (0, _classnames["default"])('aries-collapsible', className),
        tabIndex: 0,
        onClick: this.handleOpen
      }, defaultProps), React.createElement(_CollapsibleStyle.CollapsibleContent, {
        tabIndex: -1
      }, React.createElement(_CollapsibleStyle.CollapsibleHeader, {
        className: "collapsible-title",
        role: "tab",
        "aria-expanded": isOpen,
        isOpen: isOpen
      }, label, React.createElement(_Icon["default"], {
        name: "arrow-down",
        color: "#000000"
      })), isOpen && React.createElement(_CollapsibleStyle.CollapsibleBody, {
        className: "collapsible-content",
        onClick: function onClick(e) {
          return e.stopPropagation();
        }
      }, children)));
    }
  }]);
  return Collapsible;
}(React.Component);

var _default = Collapsible;
exports["default"] = _default;