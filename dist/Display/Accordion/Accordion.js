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

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _AccordionPanel = _interopRequireDefault(require("./AccordionPanel"));

var _AccordionStyle = require("../../Style/Display/AccordionStyle");

var Accordion =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Accordion, _React$Component);

  function Accordion() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, Accordion);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(Accordion)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      currIndex: -1,
      isOpenSingleItem: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleOpen", function (index) {
      var currIndex = _this.state.currIndex;

      _this.setState({
        currIndex: currIndex === index ? -1 : index
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleOpenSingleItem", function () {
      var isOpenSingleItem = _this.state.isOpenSingleItem;

      _this.setState({
        isOpenSingleItem: !isOpenSingleItem
      });
    });
    return _this;
  }

  (0, _createClass2["default"])(Accordion, [{
    key: "renderMultipleItem",
    value: function renderMultipleItem() {
      var _this2 = this;

      var children = this.props.children;
      var currIndex = this.state.currIndex;
      return React.Children.map(children, function (data, index) {
        return React.createElement(_AccordionPanel["default"], {
          className: "accordion-contentwrapper",
          key: index,
          label: data.props.label,
          content: data.props.content,
          active: currIndex === index,
          onClick: function onClick() {
            return _this2.handleOpen(index);
          }
        });
      });
    }
  }, {
    key: "renderSingleItem",
    value: function renderSingleItem() {
      var children = this.props.children;
      var isOpenSingleItem = this.state.isOpenSingleItem;
      var childProps = children.props;
      return React.createElement(_AccordionPanel["default"], {
        className: "accordion-contentwrapper",
        label: childProps.label,
        content: childProps.content,
        active: isOpenSingleItem,
        onClick: this.handleOpenSingleItem
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className;
      return React.createElement(_AccordionStyle.AccordionContainer, {
        className: (0, _classnames["default"])('aries-accordion', className)
      }, React.Children.count(children) > 1 ? this.renderMultipleItem() : this.renderSingleItem());
    }
  }]);
  return Accordion;
}(React.Component);

(0, _defineProperty2["default"])(Accordion, "Panel", _AccordionPanel["default"]);
var _default = Accordion;
exports["default"] = _default;