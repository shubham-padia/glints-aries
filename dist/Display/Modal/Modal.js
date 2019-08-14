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

var _ModalStyle = require("../../Style/Display/ModalStyle");

var Modal =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Modal, _React$Component);

  function Modal(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Modal);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Modal).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "modalContentAreaRef", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      isOpen: false
    });
    _this.modalContentAreaRef = React.createRef();
    return _this;
  }

  (0, _createClass2["default"])(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var onClose = this.props.onClose;
      document.addEventListener('keydown', (0, _DomUtils.escEvent)(onClose), false);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var isVisible = this.props.isVisible;

      if (!prevProps.isVisible && isVisible) {
        this.modalContentAreaRef.current.focus();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var onClose = this.props.onClose;
      document.removeEventListener('keydown', (0, _DomUtils.escEvent)(onClose), false);
      document.body.removeAttribute('style');
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          onClose = _this$props.onClose,
          type = _this$props.type,
          children = _this$props.children,
          className = _this$props.className,
          hideContentArea = _this$props.hideContentArea,
          centering = _this$props.centering,
          removeAnimation = _this$props.removeAnimation,
          footer = _this$props.footer,
          size = _this$props.size,
          hideHeader = _this$props.hideHeader,
          defaultProps = (0, _objectWithoutProperties2["default"])(_this$props, ["title", "onClose", "type", "children", "className", "hideContentArea", "centering", "removeAnimation", "footer", "size", "hideHeader"]);
      var isOpen = this.state.isOpen;
      return React.createElement(_ModalStyle.ModalContainer, {
        className: (0, _classnames["default"])('aries-modal', className),
        centering: centering,
        onClick: function onClick() {
          return onClose();
        },
        isOpen: isOpen,
        removeAnimation: removeAnimation
      }, React.createElement(_ModalStyle.ModalDialog, {
        className: "modal-dialog"
      }, React.createElement(_ModalStyle.ModalContentArea, (0, _extends2["default"])({
        className: "modal-content",
        role: "dialog",
        "aria-modal": "true",
        hideContentArea: hideContentArea,
        centering: centering,
        onClick: function onClick(e) {
          return e.stopPropagation();
        },
        tabIndex: 0,
        isOpen: isOpen,
        removeAnimation: removeAnimation,
        size: size,
        ref: this.modalContentAreaRef
      }, defaultProps), !hideHeader && React.createElement(_ModalStyle.ModalHeader, {
        className: "modal-header"
      }, React.createElement("h3", null, title), React.createElement("button", {
        type: "button",
        onClick: function onClick() {
          return onClose();
        }
      }, React.createElement(_Icon["default"], {
        name: "close",
        color: hideContentArea ? 'white' : 'grey'
      }))), React.createElement(_ModalStyle.ModalBody, {
        className: "modal-body",
        hideContentArea: hideContentArea
      }, children), footer !== undefined && React.createElement(_ModalStyle.ModalFooter, {
        className: "modal-footer"
      }, footer))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.isVisible && !prevState.isOpen) {
        document.body.style.overflow = 'hidden';
        return {
          isOpen: true
        };
      }

      if (!nextProps.isVisible && prevState.isOpen) {
        document.body.removeAttribute('style');
        return {
          isOpen: false
        };
      }

      return null;
    }
  }]);
  return Modal;
}(React.Component);

var _default = Modal;
exports["default"] = _default;