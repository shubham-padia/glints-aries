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

var _Icon = _interopRequireDefault(require("../Icon"));

var _ProfilePictureStyle = require("../../Style/General/ProfilePictureStyle");

var ProfilePicture =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(ProfilePicture, _React$Component);

  function ProfilePicture() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, ProfilePicture);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(ProfilePicture)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      isHover: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleMouseEnter", function () {
      var editable = _this.props.editable;

      if (editable) {
        _this.setState({
          isHover: true
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleMouseLeave", function () {
      var editable = _this.props.editable;

      if (editable) {
        _this.setState({
          isHover: false
        });
      }
    });
    return _this;
  }

  (0, _createClass2["default"])(ProfilePicture, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          editable = _this$props.editable,
          children = _this$props.children,
          className = _this$props.className,
          defaultProps = (0, _objectWithoutProperties2["default"])(_this$props, ["editable", "children", "className"]);
      var isHover = this.state.isHover;
      return React.createElement(_ProfilePictureStyle.ProfilePictureContainer, (0, _extends2["default"])({
        className: (0, _classnames["default"])('aries-profile', className),
        role: editable ? 'button' : 'presentation',
        "aria-label": "Profile Picture",
        onMouseEnter: this.handleMouseEnter,
        onMouseLeave: this.handleMouseLeave,
        tabIndex: editable ? 0 : undefined
      }, defaultProps), React.createElement(_ProfilePictureStyle.ProfilePictureContent, {
        editable: editable,
        tabIndex: editable ? -1 : undefined
      }, isHover && React.createElement(_Icon["default"], {
        name: "edit",
        color: "white"
      }), children));
    }
  }]);
  return ProfilePicture;
}(React.Component);

;
var _default = ProfilePicture;
exports["default"] = _default;