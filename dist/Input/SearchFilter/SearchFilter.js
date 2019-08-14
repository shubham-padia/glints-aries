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

var _SearchFilterStyle = require("../../Style/Input/SearchFilterStyle");

var _SearchFilterBody = _interopRequireDefault(require("./SearchFilterBody"));

var _SearchFilterList = _interopRequireDefault(require("./SearchFilterList"));

var _SearchFilterItem = _interopRequireDefault(require("./SearchFilterItem"));

var SearchFilter =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(SearchFilter, _React$Component);

  function SearchFilter() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, SearchFilter);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(SearchFilter)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      isOpen: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "searchFilterRef", React.createRef());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "inputRef", React.createRef());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleOpen", function () {
      _this.setState({
        isOpen: true
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClose", function () {
      _this.setState({
        isOpen: false
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleMouseDown", function (event) {
      var element = event.target;
      var hasClickedOnInput = element === _this.inputRef.current;

      var hasClickedInsideSearchFilter = _this.searchFilterRef.current.contains(element);

      var hasClickedOnScrollBar = hasClickedInsideSearchFilter && (event.offsetX > element.clientWidth || event.offsetY > element.clientHeight);

      if (hasClickedOnInput || hasClickedOnScrollBar) {
        return;
      } else {
        _this.handleClose();
      }
    });
    return _this;
  }

  (0, _createClass2["default"])(SearchFilter, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('mousedown', this.handleMouseDown, false);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleMouseDown, false);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          label = _this$props.label,
          content = _this$props.content,
          value = _this$props.value,
          defaultProps = (0, _objectWithoutProperties2["default"])(_this$props, ["children", "className", "label", "content", "value"]);
      var isOpen = this.state.isOpen;
      return React.createElement(_SearchFilterStyle.SearchFilterContainer, {
        className: (0, _classnames["default"])('aries-searchfilter', className),
        role: "search",
        "aria-expanded": isOpen,
        "aria-label": label,
        ref: this.searchFilterRef
      }, React.createElement(_SearchFilterStyle.SearchFilterBar, {
        className: "searchfilter-inputwrapper"
      }, React.createElement("input", (0, _extends2["default"])({
        type: "text",
        placeholder: label,
        onFocus: this.handleOpen,
        value: value,
        ref: this.inputRef
      }, defaultProps)), content), React.createElement(_SearchFilterStyle.SearchFilterBodyWrapper, {
        className: "searchfilter-content",
        role: "menuitem",
        "aria-hidden": !isOpen && true,
        open: isOpen
      }, children));
    }
  }]);
  return SearchFilter;
}(React.Component);

(0, _defineProperty2["default"])(SearchFilter, "Body", _SearchFilterBody["default"]);
(0, _defineProperty2["default"])(SearchFilter, "Button", _SearchFilterStyle.SearchFilterButton);
(0, _defineProperty2["default"])(SearchFilter, "List", _SearchFilterList["default"]);
(0, _defineProperty2["default"])(SearchFilter, "Item", _SearchFilterItem["default"]);
;
var _default = SearchFilter;
exports["default"] = _default;