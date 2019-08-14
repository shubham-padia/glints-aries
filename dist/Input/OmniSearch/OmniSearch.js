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

var _OmniSearchStyle = require("../../Style/Input/OmniSearchStyle");

var _OmniSearchBody = _interopRequireDefault(require("./OmniSearchBody"));

var _OmniSearchList = _interopRequireDefault(require("./OmniSearchList"));

var _OmniSearchItem = _interopRequireDefault(require("./OmniSearchItem"));

var OmniSearch =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(OmniSearch, _React$Component);

  function OmniSearch() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, OmniSearch);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(OmniSearch)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      isOpen: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleOpen", function () {
      var isOpen = _this.state.isOpen;

      _this.setState({
        isOpen: !isOpen
      });
    });
    return _this;
  }

  (0, _createClass2["default"])(OmniSearch, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          label = _this$props.label,
          children = _this$props.children,
          className = _this$props.className,
          content = _this$props.content,
          value = _this$props.value,
          defaultProps = (0, _objectWithoutProperties2["default"])(_this$props, ["label", "children", "className", "content", "value"]);
      var isOpen = this.state.isOpen;
      return React.createElement(_OmniSearchStyle.OmniSearchContainer, {
        className: (0, _classnames["default"])('aries-omnisearch', className),
        role: "search",
        "aria-expanded": isOpen,
        "aria-label": label
      }, React.createElement(_OmniSearchStyle.OmniSearchBar, {
        className: "omnisearch-inputwrapper"
      }, React.createElement("input", (0, _extends2["default"])({
        type: "text",
        placeholder: label,
        onFocus: this.handleOpen,
        onBlur: this.handleOpen,
        value: value
      }, defaultProps)), content), React.createElement(_OmniSearchStyle.OmniSearchBodyWrapper, {
        className: "omnisearch-content",
        role: "menuitem",
        "aria-hidden": !isOpen && true,
        open: isOpen
      }, children));
    }
  }]);
  return OmniSearch;
}(React.Component);

(0, _defineProperty2["default"])(OmniSearch, "Body", _OmniSearchBody["default"]);
(0, _defineProperty2["default"])(OmniSearch, "Button", _OmniSearchStyle.OmniSearchButton);
(0, _defineProperty2["default"])(OmniSearch, "List", _OmniSearchList["default"]);
(0, _defineProperty2["default"])(OmniSearch, "Item", _OmniSearchItem["default"]);
var _default = OmniSearch;
exports["default"] = _default;