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

var _Icon = _interopRequireDefault(require("../../General/Icon"));

var _BlockquoteStyle = require("../../Style/Display/BlockquoteStyle");

var _Colors = require("../../Style/Colors");

var _BlockquoteProfile = _interopRequireDefault(require("./BlockquoteProfile"));

var _BlockquoteContent = _interopRequireDefault(require("./BlockquoteContent"));

var _BlockquoteTestimony = _interopRequireDefault(require("./BlockquoteTestimony"));

var _BlockquoteAuthor = _interopRequireDefault(require("./BlockquoteAuthor"));

var _BlockquoteOrigin = _interopRequireDefault(require("./BlockquoteOrigin"));

var Blockquote =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Blockquote, _React$Component);

  function Blockquote() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, Blockquote);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(Blockquote)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      isHover: false
    });
    return _this;
  }

  (0, _createClass2["default"])(Blockquote, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className;
      var isHover = this.state.isHover;
      return React.createElement(_BlockquoteStyle.BlockquoteContainer, {
        className: (0, _classnames["default"])('aries-blockquote', className),
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
      }, React.createElement(_Icon["default"], {
        name: "quotation",
        color: isHover ? _Colors.PrimaryColor.glintsred : _Colors.PrimaryColor.glintsblue
      }), children);
    }
  }]);
  return Blockquote;
}(React.Component);

(0, _defineProperty2["default"])(Blockquote, "Profile", _BlockquoteProfile["default"]);
(0, _defineProperty2["default"])(Blockquote, "Content", _BlockquoteContent["default"]);
(0, _defineProperty2["default"])(Blockquote, "Testimony", _BlockquoteTestimony["default"]);
(0, _defineProperty2["default"])(Blockquote, "Author", _BlockquoteAuthor["default"]);
(0, _defineProperty2["default"])(Blockquote, "Origin", _BlockquoteOrigin["default"]);
var _default = Blockquote;
exports["default"] = _default;