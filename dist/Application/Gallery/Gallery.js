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

var _Modal = _interopRequireDefault(require("../../Display/Modal"));

var _Slider = _interopRequireDefault(require("../../Display/Slider"));

var _GalleryStyle = require("../../Style/Application/GalleryStyle");

/* eslint-disable react/no-array-index-key */
var Gallery =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Gallery, _React$Component);

  function Gallery(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Gallery);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Gallery).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "sliderRef", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      visible: false,
      currentIndex: 1,
      imageLeft: 0
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "closeModal", function () {
      _this.setState({
        visible: false
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClick", function (index) {
      _this.setState({
        visible: true,
        currentIndex: index
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClickThumbs", function (index) {
      _this.setState({
        currentIndex: index
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getCurrentIndex", function (index) {
      _this.setState({
        currentIndex: index - 1
      });
    });
    _this.sliderRef = React.createRef();
    return _this;
  }

  (0, _createClass2["default"])(Gallery, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var children = this.props.children;

      if (React.Children.count(children) > 8) {
        this.setState({
          imageLeft: React.Children.count(children) - 8
        });
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, nextState) {
      if (!nextState.visible) {
        this.sliderRef.current.sliderContainerRef.current.focus();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.sliderRef.current.sliderContainerRef.current.blur();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;
      var _this$state = this.state,
          visible = _this$state.visible,
          currentIndex = _this$state.currentIndex,
          imageLeft = _this$state.imageLeft;
      return React.createElement(_GalleryStyle.GalleryContainer, {
        className: "aries-gallery"
      }, React.createElement(_GalleryStyle.GalleryItemWrapper, {
        className: "gallery-wrapper"
      }, React.Children.toArray(children).slice(0, 8).map(function (data, index) {
        return React.createElement(_GalleryStyle.GalleryItem, {
          className: "gallery-item",
          key: "".concat(data.props.src, "_").concat(index),
          imageLeft: imageLeft,
          onClick: function onClick() {
            return _this2.handleClick(index);
          }
        }, React.createElement("img", {
          src: data.props.src,
          alt: index.toString(10)
        }));
      })), React.createElement(_Modal["default"], {
        isVisible: visible,
        onClose: this.closeModal,
        hideContentArea: true,
        removeAnimation: true
      }, React.createElement(_Slider["default"], {
        initialItem: currentIndex + 1,
        arrowWhite: true,
        removeDots: true,
        afterChange: this.getCurrentIndex,
        ref: this.sliderRef
      }, React.Children.map(children, function (data, index) {
        return React.createElement(_Slider["default"].Item, {
          key: "".concat(data.props.src, "_").concat(index)
        }, React.createElement(_GalleryStyle.GalleryImageWrapper, {
          role: "banner",
          tabIndex: 0
        }, React.createElement("img", {
          src: data.props.src,
          key: "".concat(data.props.src, "_").concat(index),
          alt: index.toString(10)
        })));
      })), React.createElement(_GalleryStyle.GalleryThumbnailWrapper, null, React.Children.map(children, function (data, index) {
        return React.createElement("div", {
          key: "".concat(data.props.src, "_").concat(index),
          onClick: function onClick() {
            return _this2.handleClickThumbs(index);
          }
        }, React.createElement("img", {
          src: data.props.src,
          alt: index.toString(10),
          className: index === currentIndex ? 'active' : null
        }));
      }))));
    }
  }]);
  return Gallery;
}(React.Component);

;
;
var _default = Gallery;
exports["default"] = _default;