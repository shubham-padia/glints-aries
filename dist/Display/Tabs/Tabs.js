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

var _TabPane = _interopRequireDefault(require("./TabPane"));

var _TabsStyle = require("../../Style/Display/TabsStyle");

var Tabs =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Tabs, _React$Component);

  function Tabs(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Tabs);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Tabs).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClickTab", function (index) {
      var listener = function listener() {
        _this.setState({
          currentIndex: index
        });
      };

      return listener;
    });
    _this.state = {
      currentIndex: 0
    };
    return _this;
  }

  (0, _createClass2["default"])(Tabs, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className;
      var currentIndex = this.state.currentIndex;
      var childrenArray = React.Children.toArray(children);
      var currentChild = childrenArray[currentIndex];
      return React.createElement(_TabsStyle.TabsContainer, {
        className: (0, _classnames["default"])('aries-tabs', className)
      }, React.createElement(_TabsStyle.TabsHeader, {
        className: "tabs-header"
      }, React.createElement("ul", {
        className: "tabs-list",
        role: "tablist"
      }, React.Children.map(children, function (data, index) {
        return React.createElement("li", {
          className: (0, _classnames["default"])("tab-".concat(index), {
            active: currentIndex === index
          }),
          key: data.props.tab,
          role: "tab",
          "aria-selected": currentIndex === index && true,
          "aria-controls": "tab-item-".concat(index),
          tabIndex: currentIndex === index ? 0 : -1
        }, React.createElement("button", {
          type: "button",
          onClick: _this2.handleClickTab(index),
          tabIndex: -1
        }, data.props.tab));
      }))), React.createElement(_TabsStyle.TabsBody, {
        className: "tabs-body",
        tabIndex: 0
      }, React.createElement(_TabPane["default"], {
        className: (0, _classnames["default"])('tabs-item', "tab-item-".concat(currentIndex)),
        role: "tabpanel",
        "aria-labelledby": "tab-".concat(currentIndex),
        tabIndex: -1
      }, React.isValidElement(currentChild) && currentChild.props.children)));
    }
  }]);
  return Tabs;
}(React.Component);

(0, _defineProperty2["default"])(Tabs, "Pane", _TabPane["default"]);
var _default = Tabs;
exports["default"] = _default;