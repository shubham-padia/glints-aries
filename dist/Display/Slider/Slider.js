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

var ReactDOM = _interopRequireWildcard(require("react-dom"));

var _classnames = _interopRequireDefault(require("classnames"));

var _SliderStyle = require("../../Style/Display/SliderStyle");

var _LeftArrow = _interopRequireDefault(require("./LeftArrow"));

var _RightArrow = _interopRequireDefault(require("./RightArrow"));

var _SliderItem = _interopRequireDefault(require("./SliderItem"));

var Slider =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Slider, _React$Component);

  function Slider(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Slider);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Slider).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "interval", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "sliderContainerRef", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "previousSlide", function () {
      var afterChange = _this.props.afterChange;
      var _this$state = _this.state,
          index = _this$state.index,
          translateValue = _this$state.translateValue,
          screenSize = _this$state.screenSize;

      if (index !== 1) {
        _this.setState({
          index: index - 1,
          translateValue: translateValue + screenSize
        });

        if (afterChange !== undefined) {
          afterChange(index - 1);
        }
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "nextSlide", function () {
      var _this$props = _this.props,
          children = _this$props.children,
          afterChange = _this$props.afterChange;
      var _this$state2 = _this.state,
          index = _this$state2.index,
          translateValue = _this$state2.translateValue,
          screenSize = _this$state2.screenSize;

      if (index !== React.Children.count(children)) {
        _this.setState({
          index: index + 1,
          translateValue: translateValue - screenSize
        });

        if (afterChange !== undefined) {
          afterChange(index + 1);
        }
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "setSize", function () {
      var index = _this.state.index;

      var windowWidth = _this.getSliderContainerDOMNode().getBoundingClientRect().width;

      _this.setState({
        screenSize: _this.getSliderContainerDOMNode().getBoundingClientRect().width,
        translateValue: -(windowWidth * (index - 1))
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleDotClick", function (idx) {
      var afterChange = _this.props.afterChange;
      var screenSize = _this.state.screenSize;

      _this.setState({
        index: idx + 1,
        translateValue: -(screenSize * idx)
      });

      if (afterChange !== undefined) {
        afterChange(idx + 1);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleKeyDown", function (e) {
      if (e.keyCode === 37) {
        _this.previousSlide();
      } else if (e.keyCode === 39) {
        _this.nextSlide();
      }
    });
    _this.state = {
      translateValue: 0,
      screenSize: 0,
      index: 1
    };
    _this.sliderContainerRef = React.createRef();
    return _this;
  }

  (0, _createClass2["default"])(Slider, [{
    key: "getSliderContainerDOMNode",
    value: function getSliderContainerDOMNode() {
      return ReactDOM.findDOMNode(this.sliderContainerRef.current);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _this$props2 = this.props,
          initialItem = _this$props2.initialItem,
          autoplay = _this$props2.autoplay,
          children = _this$props2.children;
      var _this$state3 = this.state,
          index = _this$state3.index,
          screenSize = _this$state3.screenSize;
      var windowWidth = this.getSliderContainerDOMNode().getBoundingClientRect().width;
      this.setState({
        screenSize: windowWidth
      });

      if (initialItem !== undefined) {
        if (initialItem > 0 && initialItem <= React.Children.count(children)) {
          this.setState({
            translateValue: -(windowWidth * (initialItem - 1)),
            index: initialItem
          });
        } else {
          this.setState({
            translateValue: 0,
            index: 1
          });
        }
      }

      if (autoplay) {
        this.interval = setInterval(function () {
          // eslint-disable-next-line react/destructuring-assignment
          if (_this2.state.index != React.Children.count(children)) {
            _this2.setState(function (prevState) {
              return {
                index: prevState.index + 1,
                translateValue: -(prevState.screenSize * prevState.index)
              };
            });
          } else {
            _this2.setState(function () {
              return {
                index: 1,
                translateValue: -(screenSize * index)
              };
            });
          }
        }, 6000);
      }

      window.addEventListener('resize', this.setSize);
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var windowWidth = this.getSliderContainerDOMNode().getBoundingClientRect().width;
      this.setState({
        translateValue: -(windowWidth * (nextProps.initialItem - 1)),
        index: nextProps.initialItem
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.setSize);
      clearInterval(this.interval);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props3 = this.props,
          children = _this$props3.children,
          className = _this$props3.className,
          fullContent = _this$props3.fullContent,
          arrowWhite = _this$props3.arrowWhite,
          removeDots = _this$props3.removeDots;
      var _this$state4 = this.state,
          translateValue = _this$state4.translateValue,
          index = _this$state4.index;
      return React.createElement(_SliderStyle.SliderContainer, {
        ref: this.sliderContainerRef,
        className: (0, _classnames["default"])('aries-slider', className),
        onKeyDown: this.handleKeyDown,
        fullContent: fullContent,
        tabIndex: 0
      }, React.createElement(_SliderStyle.SliderContentWrapper, {
        className: "slider-wrapper",
        style: {
          transform: "translateX(".concat(translateValue, "px)"),
          transition: 'transform ease-out 0.45s'
        }
      }, children), React.createElement(_LeftArrow["default"], {
        previousSlide: this.previousSlide,
        index: index,
        arrowWhite: arrowWhite
      }), React.createElement(_RightArrow["default"], {
        nextSlide: this.nextSlide,
        index: index,
        limit: React.Children.count(children),
        arrowWhite: arrowWhite
      }), !removeDots && React.createElement("ul", null, React.Children.map(children, function (data, idx) {
        return (// eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
          React.createElement("li", {
            className: idx + 1 === index ? 'active' : null,
            onClick: function onClick() {
              return _this3.handleDotClick(idx);
            },
            key: idx
          })
        );
      })));
    }
  }]);
  return Slider;
}(React.Component);

(0, _defineProperty2["default"])(Slider, "Item", _SliderItem["default"]);
var _default = Slider;
exports["default"] = _default;