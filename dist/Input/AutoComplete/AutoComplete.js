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

var _AutoCompleteItem = _interopRequireDefault(require("./AutoCompleteItem"));

var _AutoCompleteStyle = require("../../Style/Input/AutoCompleteStyle");

var AutoComplete =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(AutoComplete, _React$Component);

  function AutoComplete(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, AutoComplete);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(AutoComplete).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "autoCompleteContainerRef", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleFocus", function (onFocus) {
      var listener = function listener(e) {
        var children = _this.props.children;
        var childrenArray = React.Children.toArray(children);
        var inputValue = e.target.value;

        if (e.target.value !== '') {
          _this.setState({
            filterValue: childrenArray.filter(function (data) {
              return data.props.children.toLowerCase().includes(inputValue.toLowerCase());
            })
          });
        }

        if (onFocus !== undefined) {
          return onFocus(e);
        }
      };

      return listener;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleFocusOut", function (onBlur) {
      var listener = function listener(e) {
        _this.setState({
          floating: e.target.value.length > 0,
          filterValue: []
        });

        if (onBlur !== undefined) {
          return onBlur();
        }
      };

      return listener;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleChange", function (onChange) {
      var listener = function listener(e) {
        var children = _this.props.children;
        var childrenArray = React.Children.toArray(children);

        _this.setState({
          selectedValue: e.target.value,
          filterValue: childrenArray.filter(function (data) {
            return data.props.children.toLowerCase().includes(e.target.value.toLowerCase());
          }),
          cursor: 0
        });

        if (onChange !== undefined) {
          return onChange(e);
        }
      };

      return listener;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClick", function (onOptionClick) {
      var listener = function listener(e) {
        var onChange = _this.props.onChange;

        _this.setState({
          selectedValue: e.currentTarget.children[0].innerText,
          filterValue: []
        });

        if (onChange !== undefined) {
          var containerElement = _this.autoCompleteContainerRef.current;
          var activeItemElement = containerElement.querySelector('.active');
          var itemValue = activeItemElement.dataset.value;
          onChange(itemValue);
        }

        if (onOptionClick !== undefined) {
          onOptionClick(e);
        }
      };

      return listener;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleKeyDown", function (e) {
      var onChange = _this.props.onChange;
      var _this$state = _this.state,
          cursor = _this$state.cursor,
          filterValue = _this$state.filterValue;
      var inputElement = e.target;

      if (e.keyCode === 38 && cursor > 0) {
        _this.setState({
          cursor: cursor - 1
        });
      } else if (e.keyCode === 40 && cursor < filterValue.length - 1) {
        _this.setState({
          cursor: cursor + 1
        });
      } else if (e.keyCode === 13) {
        var containerElement = _this.autoCompleteContainerRef.current;
        var activeItemElement = containerElement.querySelector('.active');
        inputElement.blur();

        _this.setState({
          selectedValue: activeItemElement.children[0].innerText,
          filterValue: [],
          floating: true
        });

        if (onChange !== undefined) {
          var itemValue = activeItemElement.dataset.value;
          onChange(itemValue);
        }
      } else if (e.keyCode === 27) {
        inputElement.blur();

        _this.setState({
          isOpen: false
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleMouseEnter", function (e) {
      var itemElement = e.target;

      _this.setState({
        cursor: Number(itemElement.dataset.id)
      });
    });
    _this.state = {
      floating: false,
      isOpen: false,
      selectedValue: '',
      filterValue: [],
      cursor: 0,
      defaultValue: ''
    };
    _this.autoCompleteContainerRef = React.createRef();
    return _this;
  }

  (0, _createClass2["default"])(AutoComplete, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var value = this.props.value;

      if (value !== undefined && value !== '' && value !== null) {
        this.setState({
          floating: true,
          selectedValue: value,
          defaultValue: value
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          label = _this$props.label,
          value = _this$props.value,
          status = _this$props.status,
          disabled = _this$props.disabled,
          className = _this$props.className,
          onFocus = _this$props.onFocus,
          onBlur = _this$props.onBlur,
          onChange = _this$props.onChange,
          small = _this$props.small,
          removeFloatingLabel = _this$props.removeFloatingLabel,
          defaultProps = (0, _objectWithoutProperties2["default"])(_this$props, ["children", "label", "value", "status", "disabled", "className", "onFocus", "onBlur", "onChange", "small", "removeFloatingLabel"]);
      var _this$state2 = this.state,
          isOpen = _this$state2.isOpen,
          floating = _this$state2.floating,
          cursor = _this$state2.cursor,
          selectedValue = _this$state2.selectedValue,
          filterValue = _this$state2.filterValue;
      return React.createElement(_AutoCompleteStyle.AutoCompleteContainer, {
        className: (0, _classnames["default"])('aries-autocomplete', className),
        ref: this.autoCompleteContainerRef
      }, React.createElement(_AutoCompleteStyle.AutoCompleteWrapper, {
        className: "autocomplete-inputwrapper"
      }, React.createElement(_AutoCompleteStyle.AutoCompleteInput, (0, _extends2["default"])({
        type: "text",
        placeholder: removeFloatingLabel && label,
        status: status,
        disabled: disabled,
        onFocus: this.handleFocus(onFocus),
        onBlur: this.handleFocusOut(onBlur),
        onChange: this.handleChange(onChange),
        onKeyDown: this.handleKeyDown,
        floating: floating,
        value: selectedValue,
        "aria-label": label,
        small: small
      }, defaultProps)), !removeFloatingLabel && React.createElement(_AutoCompleteStyle.AutoCompleteLabel, {
        floating: floating,
        status: status,
        small: small
      }, label)), React.createElement(_AutoCompleteStyle.AutoCompleteListWrapper, {
        className: "autocomplete-listbox",
        role: "listbox",
        "aria-hidden": !isOpen && true,
        open: isOpen,
        small: small
      }, filterValue.map(function (data, index) {
        return React.createElement(_AutoCompleteItem["default"], {
          className: cursor === index ? 'active' : null,
          key: data.props.value,
          role: "option",
          "data-id": index,
          "data-value": data.props.value,
          onClick: _this2.handleClick(data.props.onOptionClick),
          onMouseEnter: _this2.handleMouseEnter,
          tabIndex: 0
        }, React.createElement("span", {
          className: "autocomplete-value"
        }, data.props.children), React.createElement("span", {
          className: "autocomplete-additionalinfo"
        }, data.props.additionalInfo));
      })));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (prevState.selectedValue === '' || prevState.filterValue.length === 0) {
        return {
          isOpen: false,
          filterValue: []
        };
      }

      if (prevState.filterValue.length !== 0) {
        return {
          isOpen: true
        };
      }

      if (nextProps.value && nextProps.value !== prevState.defaultValue) {
        return {
          selectedValue: nextProps.value,
          defaultValue: nextProps.value
        };
      }

      return null;
    }
  }]);
  return AutoComplete;
}(React.Component);

(0, _defineProperty2["default"])(AutoComplete, "Option", function () {
  return null;
});
var _default = AutoComplete;
exports["default"] = _default;