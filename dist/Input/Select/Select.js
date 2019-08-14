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

var ReactDOM = _interopRequireWildcard(require("react-dom"));

var _classnames = _interopRequireDefault(require("classnames"));

var _SelectItem = _interopRequireDefault(require("./SelectItem"));

var _Icon = _interopRequireDefault(require("../../General/Icon"));

var _Loading = _interopRequireDefault(require("../../General/Loading"));

var _SelectStyle = require("../../Style/Input/SelectStyle");

var Select =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Select, _React$Component);

  function Select(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Select);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Select).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "node", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      floating: false,
      isFocus: false,
      selectedValue: '',
      filterValue: [],
      cursor: 0,
      notMatch: false,
      childrenLength: 0,
      defaultValue: '',
      isLoading: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleOnBlur", function (event) {
      var element = event.target;

      if (!ReactDOM.findDOMNode(_this.node.current).contains(element)) {
        _this.setState({
          isFocus: false
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleFocusOut", function (onBlur) {
      var listener = function listener(e) {
        _this.setState({
          floating: e.target.value.length > 0
        });

        if (onBlur !== undefined) {
          return onBlur(e);
        }
      };

      return listener;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleFocus", function (onFocus) {
      var listener = function listener(e) {
        _this.setState({
          isFocus: true
        });

        if (onFocus !== undefined) {
          return onFocus(e);
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
        var _this$props = _this.props,
            children = _this$props.children,
            onChange = _this$props.onChange;

        _this.setState({
          selectedValue: e.currentTarget.innerText,
          filterValue: React.Children.map(children, function (data) {
            return data;
          }),
          isFocus: false
        });

        if (onChange !== undefined) {
          var element = e.target;
          onChange(element.dataset.value);
        }

        if (onOptionClick !== undefined) {
          onOptionClick(e);
        }
      };

      return listener;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleKeyDown", function (e) {
      var _this$props2 = _this.props,
          children = _this$props2.children,
          onChange = _this$props2.onChange,
          disableTyping = _this$props2.disableTyping;
      var _this$state = _this.state,
          cursor = _this$state.cursor,
          filterValue = _this$state.filterValue;
      var inputElement = e.target;

      if (disableTyping) {
        e.preventDefault();
      }

      if (e.keyCode === 38 && cursor > 0) {
        _this.setState({
          cursor: cursor - 1
        });
      } else if (e.keyCode === 40 && cursor < filterValue.length - 1) {
        _this.setState({
          cursor: cursor + 1
        });
      } else if (e.keyCode === 13) {
        inputElement.blur();

        var activeElement = _this.node.current.querySelector('.active');

        _this.setState({
          selectedValue: activeElement.innerText,
          filterValue: React.Children.map(children, function (data) {
            return data;
          }),
          floating: true,
          isFocus: false
        });

        if (onChange !== undefined) {
          var itemValue = activeElement.dataset.value;
          onChange(itemValue);
        }
      } else if (e.keyCode === 27) {
        inputElement.blur();

        _this.setState({
          isFocus: false
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleMouseEnter", function (e) {
      var listItemElement = e.target;

      _this.setState({
        cursor: Number(listItemElement.dataset.id)
      });
    });
    _this.node = React.createRef();
    return _this;
  }

  (0, _createClass2["default"])(Select, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props3 = this.props,
          value = _this$props3.value,
          children = _this$props3.children; // Checking if children data is exist or not.

      if (React.Children.count(children) !== 0) {
        this.setState({
          childrenLength: React.Children.count(children),
          filterValue: React.Children.map(children, function (data) {
            return data;
          })
        });
      } else {
        this.setState({
          notMatch: true
        });
      }

      if (value !== undefined && value !== '' && value !== null) {
        this.setState({
          floating: true,
          selectedValue: value,
          defaultValue: value
        });
      }

      document.addEventListener('click', this.handleOnBlur, false);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.handleOnBlur, false);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props4 = this.props,
          label = _this$props4.label,
          value = _this$props4.value,
          status = _this$props4.status,
          disabled = _this$props4.disabled,
          className = _this$props4.className,
          onFocus = _this$props4.onFocus,
          onBlur = _this$props4.onBlur,
          onChange = _this$props4.onChange,
          noOptionResult = _this$props4.noOptionResult,
          children = _this$props4.children,
          small = _this$props4.small,
          disableTyping = _this$props4.disableTyping,
          removeFloatingLabel = _this$props4.removeFloatingLabel,
          removeDropIcon = _this$props4.removeDropIcon,
          defaultProps = (0, _objectWithoutProperties2["default"])(_this$props4, ["label", "value", "status", "disabled", "className", "onFocus", "onBlur", "onChange", "noOptionResult", "children", "small", "disableTyping", "removeFloatingLabel", "removeDropIcon"]);
      var _this$state2 = this.state,
          floating = _this$state2.floating,
          isFocus = _this$state2.isFocus,
          selectedValue = _this$state2.selectedValue,
          filterValue = _this$state2.filterValue,
          cursor = _this$state2.cursor,
          notMatch = _this$state2.notMatch,
          isLoading = _this$state2.isLoading;
      return React.createElement(_SelectStyle.SelectContainer, {
        className: (0, _classnames["default"])('aries-select', className),
        ref: this.node
      }, React.createElement(_SelectStyle.SelectWrapper, {
        className: "select-inputwrapper",
        isFocus: isFocus
      }, React.createElement(_SelectStyle.SelectInput, (0, _extends2["default"])({
        type: "text",
        placeholder: removeFloatingLabel && label,
        role: "combobox",
        "aria-expanded": isFocus,
        "aria-autocomplete": "list",
        status: status,
        disabled: disabled,
        onFocus: this.handleFocus(onFocus),
        onBlur: this.handleFocusOut(onBlur),
        onChange: this.handleChange(onChange),
        onKeyDown: this.handleKeyDown,
        floating: floating,
        value: selectedValue,
        small: small,
        disableTyping: disableTyping
      }, defaultProps)), !removeFloatingLabel && React.createElement(_SelectStyle.SelectLabel, {
        floating: floating,
        status: status,
        small: small
      }, label), !removeDropIcon && React.createElement("div", {
        className: "select-icon",
        "aria-label": "show options"
      }, React.createElement(_Icon["default"], {
        name: "arrow-down",
        color: "#777777"
      }))), React.createElement(_SelectStyle.SelectListWrapper, {
        className: "select-listbox",
        role: "listbox",
        "aria-hidden": !isFocus && true,
        open: isFocus,
        small: small
      }, filterValue.length !== 0 && !isLoading ? filterValue.map(function (data, index) {
        return React.createElement(_SelectItem["default"], {
          className: cursor === index ? 'active' : null,
          key: data.props.value,
          role: "option",
          "data-className": index,
          "data-value": data.props.value,
          onClick: _this2.handleClick(data.props.onOptionClick),
          onMouseEnter: _this2.handleMouseEnter,
          tabIndex: 0
        }, data.props.children);
      }) : !isLoading ? React.createElement(_SelectItem["default"], {
        className: "select-loading",
        role: "option"
      }, React.createElement(_Loading["default"], null)) : React.createElement(_SelectItem["default"], {
        disabled: true,
        role: "option",
        "aria-hidden": false,
        "aria-disabled": "true"
      }, noOptionResult)));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (React.Children.count(nextProps.children) !== prevState.childrenLength) {
        if (nextProps.value) {
          return {
            selectedValue: nextProps.value,
            defaultValue: nextProps.value,
            floating: true,
            filterValue: React.Children.map(nextProps.children, function (data) {
              return data;
            })
          };
        }

        return {
          filterValue: React.Children.map(nextProps.children, function (data) {
            return data;
          }),
          childrenLength: React.Children.count(nextProps.children)
        };
      }

      if (prevState.filterValue.length === 0) {
        return {
          notMatch: true
        };
      }

      if (nextProps.value && nextProps.value !== prevState.defaultValue) {
        return {
          selectedValue: nextProps.value,
          defaultValue: nextProps.value,
          floating: true
        };
      }

      if (nextProps.value === '') {
        return {
          selectedValue: nextProps.value,
          defaultValue: nextProps.value,
          floating: false
        };
      }

      if (nextProps.isLoading !== undefined) {
        return {
          isLoading: nextProps.isLoading
        };
      }

      return {
        notMatch: false
      };
    }
  }]);
  return Select;
}(React.Component);

(0, _defineProperty2["default"])(Select, "Option", function () {
  return null;
});
var _default = Select;
exports["default"] = _default;