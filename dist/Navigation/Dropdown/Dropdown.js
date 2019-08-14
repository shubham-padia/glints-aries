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

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Icon = _interopRequireDefault(require("../../General/Icon"));

var _DomUtils = require("../../Utils/DomUtils");

var _DropdownStyle = require("../../Style/Navigation/DropdownStyle");

var _DropdownItem = _interopRequireDefault(require("./DropdownItem"));

var Dropdown =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Dropdown, _React$Component);

  function Dropdown(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Dropdown);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Dropdown).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "dropdownBodyRef", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleOpen", function () {
      var disabled = _this.props.disabled;
      var isOpen = _this.state.isOpen;

      if (!disabled) {
        _this.setState({
          isOpen: !isOpen
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "hoverOpen", function () {
      var hoverToOpen = _this.props.hoverToOpen;

      if (hoverToOpen) {
        _this.setState({
          isOpen: true
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "hoverClose", function () {
      var hoverToOpen = _this.props.hoverToOpen;

      if (hoverToOpen) {
        _this.setState({
          isOpen: false,
          cursor: 0
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClose", function () {
      _this.setState({
        isOpen: false,
        cursor: 0
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClickItem", function (onClick) {
      return function (e) {
        var onChange = _this.props.onChange;
        var itemElement = e.target;

        if (itemElement.dataset.value) {
          _this.setState({
            dropdownLabel: itemElement.dataset.value,
            isOpen: false
          });

          if (onChange !== undefined) {
            onChange(itemElement.dataset.value);
          }
        } else {
          _this.setState({
            isOpen: false
          });
        }

        if (onClick !== undefined) {
          onClick(e);
        }
      };
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleMouseEnter", function (index) {
      _this.setState({
        cursor: index
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleKeyDown", function (e) {
      e.preventDefault();
      var children = _this.props.children;
      var cursor = _this.state.cursor;

      if (e.keyCode === 38 && cursor > 0) {
        _this.setState({
          cursor: cursor - 1
        });
      } else if (e.keyCode === 40 && cursor < React.Children.count(children) - 1) {
        _this.setState({
          cursor: cursor + 1
        });
      } else if (e.keyCode === 13) {
        _this.setState({
          dropdownLabel: _this.dropdownBodyRef.current.querySelector('.active').innerHTML,
          isOpen: false
        });
      }
    });
    _this.dropdownBodyRef = React.createRef();
    _this.state = {
      dropdownLabel: props.label,
      isOpen: false,
      cursor: 0
    };
    return _this;
  }

  (0, _createClass2["default"])(Dropdown, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('keydown', (0, _DomUtils.escEvent)(this.handleClose), false);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('keydown', (0, _DomUtils.escEvent)(this.handleClose), false);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          label = _this$props.label,
          disabled = _this$props.disabled,
          showHoverLine = _this$props.showHoverLine,
          leftIconName = _this$props.leftIconName,
          dropDownPlacement = _this$props.dropDownPlacement,
          noLineBreak = _this$props.noLineBreak,
          itemElement = _this$props.itemElement,
          iconDefaultColor = _this$props.iconDefaultColor,
          showFullWidth = _this$props.showFullWidth,
          hoverToOpen = _this$props.hoverToOpen,
          onChange = _this$props.onChange,
          defaultProps = (0, _objectWithoutProperties2["default"])(_this$props, ["children", "className", "label", "disabled", "showHoverLine", "leftIconName", "dropDownPlacement", "noLineBreak", "itemElement", "iconDefaultColor", "showFullWidth", "hoverToOpen", "onChange"]);
      var _this$state = this.state,
          isOpen = _this$state.isOpen,
          dropdownLabel = _this$state.dropdownLabel,
          cursor = _this$state.cursor;
      return React.createElement(_DropdownStyle.DropdownContainer, (0, _extends2["default"])({
        className: (0, _classnames["default"])('aries-dropdown', className),
        tabIndex: 0,
        onClick: this.handleOpen,
        onMouseEnter: this.hoverOpen,
        onMouseLeave: this.hoverClose,
        onBlur: this.handleClose,
        onKeyDown: this.handleKeyDown,
        role: "menuitem",
        "aria-label": dropdownLabel,
        "aria-haspopup": "true"
      }, defaultProps), React.createElement(_DropdownStyle.DropdownWrapper, {
        className: "dropdown-contentwrapper",
        tabIndex: -1
      }, React.createElement(_DropdownStyle.DropdownHeader, {
        className: "dropdown-content",
        isOpen: isOpen,
        disabled: disabled,
        showHoverLine: showHoverLine,
        showFullWidth: showFullWidth
      }, leftIconName && React.createElement(_Icon["default"], {
        name: leftIconName,
        color: !disabled ? iconDefaultColor : '#777777'
      }), React.createElement("span", null, itemElement ? itemElement : dropdownLabel), React.createElement(_DropdownStyle.IconWrapper, {
        isOpen: isOpen
      }, React.createElement(_Icon["default"], {
        name: "arrow-down",
        color: !disabled ? iconDefaultColor : '#777777'
      }))), React.createElement(_DropdownStyle.DropdownBody, {
        className: "dropdown-listbox",
        role: "listbox",
        "aria-hidden": !isOpen && true,
        onClick: function onClick(e) {
          return e.stopPropagation();
        },
        open: isOpen,
        dropDownPlacement: dropDownPlacement,
        noLineBreak: noLineBreak,
        showFullWidth: showFullWidth,
        showHoverLine: showHoverLine,
        ref: this.dropdownBodyRef
      }, React.Children.map(children, function (item, index) {
        return React.createElement(_DropdownStyle.DropdownItemWrapper, {
          className: (0, _classnames["default"])({
            active: cursor === index
          }),
          role: "option",
          "data-value": item.props.value,
          key: item.key,
          onMouseDown: _this2.handleClickItem(item.props.onClick),
          onMouseEnter: function onMouseEnter() {
            return _this2.handleMouseEnter(index);
          },
          tabIndex: 0,
          showFullWidth: showFullWidth
        }, item.props.children);
      }))));
    }
  }]);
  return Dropdown;
}(React.Component);

(0, _defineProperty2["default"])(Dropdown, "Item", _DropdownItem["default"]);
(0, _defineProperty2["default"])(Dropdown, "defaultProps", {
  showHoverLine: false,
  dropDownPlacement: 'left',
  noLineBreak: false,
  iconDefaultColor: 'black',
  showFullWidth: false
});
var _default = Dropdown;
exports["default"] = _default;