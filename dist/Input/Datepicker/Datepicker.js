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

var moment = _interopRequireWildcard(require("moment"));

var _DatepickerStyle = require("../../Style/Input/DatepickerStyle");

var _TextField = _interopRequireDefault(require("../TextField"));

var _Icon = _interopRequireDefault(require("../../General/Icon"));

/* eslint-disable no-plusplus */
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

var Datepicker =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Datepicker, _React$Component);

  function Datepicker(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Datepicker);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Datepicker).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleOnFocus", function (e) {
      var isFocus = e.currentTarget === document.activeElement;

      _this.setState({
        isOpen: isFocus,
        showMonths: false
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleOnInputBlur", function (e) {
      var isBlur = e.currentTarget === document.activeElement;

      _this.setState({
        isOpen: isBlur
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleOnDateBlur", function (e) {
      var isBlur = e.currentTarget === document.activeElement;

      _this.setState({
        isOpen: isBlur,
        isDatepickerFocus: false
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleMouseDownDate", function (e) {
      e.currentTarget.focus();

      _this.setState({
        isDatepickerFocus: true
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClickToday", function () {
      _this.setState({
        getFullDate: moment(new Date()).format('LL'),
        isOpen: false
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleOnClickSelectedDate", function (date) {
      var _this$state = _this.state,
          monthValue = _this$state.monthValue,
          currentYear = _this$state.currentYear;
      var tempDate = Number(date.toString().length) === 1 ? "0".concat(date) : "".concat(date);
      var tempMonth = Number((monthValue + 1).toString().length) === 1 ? "0".concat(monthValue + 1) : "".concat(monthValue + 1);
      var activeDate = "".concat(currentYear).concat(monthValue).concat(date);

      _this.setState({
        getFullDate: moment("".concat(currentYear, "-").concat(tempMonth, "-").concat(tempDate)).format('LL'),
        currentActiveDate: activeDate,
        isOpen: false
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleShowMonths", function (e) {
      e.preventDefault();

      _this.setState({
        showMonths: true
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleChooseMonth", function (e, month, tempMonth) {
      e.preventDefault();

      _this.setState({
        monthValue: tempMonth.indexOf(month),
        showMonths: false
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "setYearBack", function () {
      var currentYear = _this.state.currentYear;
      var currentMonth = new Date().getMonth();

      _this.setState({
        currentYear: Number(currentYear) - 1,
        firstDay: new Date(Number(currentYear) - 1, currentMonth, 1).getDay(),
        lastDate: new Date(Number(currentYear) - 1, currentMonth, 0).getDate()
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "setYearNext", function () {
      var currentYear = _this.state.currentYear;
      var currentMonth = new Date().getMonth();

      _this.setState({
        currentYear: Number(currentYear) + 1,
        firstDay: new Date(Number(currentYear) + 1, currentMonth, 1).getDay(),
        lastDate: new Date(Number(currentYear) + 1, currentMonth, 0).getDate()
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "setMonthBack", function () {
      var _this$state2 = _this.state,
          monthValue = _this$state2.monthValue,
          currentYear = _this$state2.currentYear;
      var checkCurrentMonth = monthValue;

      if (checkCurrentMonth > 0) {
        _this.setState({
          monthValue: monthValue - 1,
          firstDay: new Date(currentYear, monthValue, 1).getDay(),
          lastDate: new Date(currentYear, monthValue, 0).getDate()
        });
      } else {
        _this.setYearBack();

        _this.setState({
          monthValue: 11
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "setMonthNext", function () {
      var _this$state3 = _this.state,
          monthValue = _this$state3.monthValue,
          currentYear = _this$state3.currentYear;
      var checkCurrentMonth = monthValue;

      if (checkCurrentMonth < 11) {
        _this.setState({
          monthValue: monthValue + 1,
          firstDay: new Date(currentYear, monthValue + 2, 1).getDay(),
          lastDate: new Date(currentYear, monthValue + 2, 0).getDate()
        });
      } else {
        _this.setYearNext();

        _this.setState({
          monthValue: 0
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderTHead", function () {
      var days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
      return React.createElement("thead", null, React.createElement("tr", {
        role: "row"
      }, days.map(function (day) {
        return React.createElement(_DatepickerStyle.Th, {
          key: day,
          role: "columnheader",
          title: day
        }, React.createElement(_DatepickerStyle.HoverContent, null, day));
      })));
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderTBody", function () {
      var content = [];
      content.push(_this.renderFirstWeekRow());
      content.push(_this.renderDayRow());
      return React.createElement("tbody", null, content);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderFirstWeekRow", function () {
      var _this$state4 = _this.state,
          firstDay = _this$state4.firstDay,
          currentMonth = _this$state4.currentMonth,
          currentYear = _this$state4.currentYear,
          currentActiveDate = _this$state4.currentActiveDate;
      var tempArray = [];
      tempArray = _this.renderOffSetDay();

      var _loop = function _loop(i) {
        tempArray.push(React.createElement(_DatepickerStyle.Td, {
          role: "gridcell",
          key: i,
          onMouseDown: function onMouseDown() {
            return _this.handleOnClickSelectedDate(i);
          }
        }, React.createElement(_DatepickerStyle.HoverContent, {
          index: "".concat(currentYear).concat(currentMonth).concat(i),
          currentActiveDate: "".concat(currentYear).concat(currentMonth).concat(i) === currentActiveDate && currentActiveDate,
          hoverAble: true
        }, i)));
      };

      for (var i = 1; i <= 7 - firstDay; i++) {
        _loop(i);
      }

      return React.createElement("tr", {
        role: "row",
        key: "row1"
      }, tempArray);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderDayRow", function () {
      var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var startingCount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var _this$state5 = _this.state,
          firstDay = _this$state5.firstDay,
          lastDate = _this$state5.lastDate,
          currentMonth = _this$state5.currentMonth,
          currentYear = _this$state5.currentYear,
          currentActiveDate = _this$state5.currentActiveDate;
      var functionArray = array;
      var functionStartingCount = startingCount === 0 ? 8 - firstDay : startingCount;
      var tempArray = [];
      var isLastDate = false;

      var _loop2 = function _loop2(i) {
        if (i <= lastDate) {
          tempArray.push(React.createElement(_DatepickerStyle.Td, {
            role: "gridcell",
            key: i,
            onMouseDown: function onMouseDown() {
              return _this.handleOnClickSelectedDate(i);
            }
          }, React.createElement(_DatepickerStyle.HoverContent, {
            index: "".concat(currentYear).concat(currentMonth).concat(i),
            currentActiveDate: "".concat(currentYear).concat(currentMonth).concat(i) === currentActiveDate && currentActiveDate,
            hoverAble: true
          }, i)));
        } else {
          tempArray.push(React.createElement(_DatepickerStyle.Td, {
            key: i
          }));
          isLastDate = true;
        }
      };

      for (var i = functionStartingCount; i < functionStartingCount + 7; i++) {
        _loop2(i);
      }

      functionArray.push(React.createElement("tr", {
        role: "row",
        key: "row".concat(functionArray.length)
      }, tempArray));

      if (isLastDate) {
        return functionArray;
      }

      return _this.renderDayRow(functionArray, functionStartingCount + 7);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderOffSetDay", function () {
      var firstDay = _this.state.firstDay;
      var tempArray = [];

      for (var i = firstDay; i >= 1; i--) {
        tempArray.push(React.createElement(_DatepickerStyle.Td, {
          key: "offset".concat(i)
        }));
      }

      return tempArray;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderLeftSideIcon", function (showMonths) {
      return React.createElement(_DatepickerStyle.DatepickerNavigation, null, React.createElement(_DatepickerStyle.DatepickerIconWrapper, {
        onMouseDown: _this.setYearBack
      }, React.createElement(_Icon["default"], {
        name: "arrow-back-double",
        color: "grey"
      })), !showMonths && React.createElement(_DatepickerStyle.DatepickerIconWrapper, {
        needMargin: true,
        onMouseDown: _this.setMonthBack
      }, React.createElement(_Icon["default"], {
        name: "arrow-back",
        color: "grey"
      })));
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderRightSideIcon", function (showMonths) {
      return React.createElement(_DatepickerStyle.DatepickerNavigation, null, !showMonths && React.createElement(_DatepickerStyle.DatepickerIconWrapper, {
        needMargin: true,
        onMouseDown: _this.setMonthNext
      }, React.createElement(_Icon["default"], {
        name: "arrow-next",
        color: "grey"
      })), React.createElement(_DatepickerStyle.DatepickerIconWrapper, {
        onMouseDown: _this.setYearNext
      }, React.createElement(_Icon["default"], {
        name: "arrow-next-double",
        color: "grey"
      })));
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderShowMonths", function () {
      var tempMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      var rows = [];

      for (var i = 0; i < 4; i++) {
        rows.push(React.createElement("tr", {
          role: "row",
          key: tempMonth[i]
        }, tempMonth.slice(i * 3, 3 + i * 3).map(function (data) {
          return React.createElement(_DatepickerStyle.Td, {
            role: "gridcell",
            key: data
          }, React.createElement(_DatepickerStyle.HoverContent, {
            hoverAble: true,
            biggerSize: true,
            onMouseDown: function onMouseDown(e) {
              return _this.handleChooseMonth(e, data, tempMonth);
            }
          }, data));
        })));
      }

      return React.createElement("tbody", null, rows);
    });

    var _currentYear = new Date().getFullYear();

    var _currentMonth = new Date().getMonth();

    _this.state = {
      previousFullDate: '',
      getFullDate: '',
      currentActiveDate: '',
      currentYear: _currentYear,
      currentMonth: _currentMonth,
      monthValue: _currentMonth,
      firstDay: new Date(_currentYear, _currentMonth + 1, 1).getDay(),
      lastDate: new Date(_currentYear, _currentMonth + 1, 0).getDate(),
      isOpen: false,
      isDatepickerFocus: false,
      showMonths: false
    };
    return _this;
  }

  (0, _createClass2["default"])(Datepicker, [{
    key: "render",
    value: function render() {
      var label = this.props.label;
      var _this$state6 = this.state,
          getFullDate = _this$state6.getFullDate,
          currentYear = _this$state6.currentYear,
          monthValue = _this$state6.monthValue,
          isOpen = _this$state6.isOpen,
          showMonths = _this$state6.showMonths;
      return React.createElement(_DatepickerStyle.DatepickerContainer, {
        className: "aries-datepicker"
      }, React.createElement(_TextField["default"], {
        type: "text",
        label: label || 'Select date',
        value: getFullDate,
        removeFloatingLabel: true,
        disableTyping: true,
        onFocus: this.handleOnFocus,
        onBlur: this.handleOnInputBlur
      }), React.createElement(_DatepickerStyle.DatepickerWrapper, {
        isOpen: isOpen,
        onBlur: this.handleOnDateBlur,
        onMouseDown: this.handleMouseDownDate,
        tabIndex: 0
      }, React.createElement(_DatepickerStyle.DatepickerSection, {
        border: true
      }, React.createElement(_DatepickerStyle.DatepickerContent, {
        justify: "space-between"
      }, this.renderLeftSideIcon(showMonths), React.createElement(_DatepickerStyle.DatepickerContent, null, !showMonths && React.createElement(_DatepickerStyle.DatepickerMonthYearBtn, {
        onMouseDown: this.handleShowMonths
      }, months[monthValue]), React.createElement(_DatepickerStyle.DatepickerMonthYearBtn, null, currentYear)), this.renderRightSideIcon(showMonths))), React.createElement(_DatepickerStyle.DatepickerSection, {
        border: true
      }, React.createElement(_DatepickerStyle.DatepickerContent, null, React.createElement(_DatepickerStyle.DatepickerTable, {
        cellSpacing: "0",
        role: "grid"
      }, !showMonths ? React.createElement(React.Fragment, null, this.renderTHead(), this.renderTBody()) : this.renderShowMonths()))), React.createElement(_DatepickerStyle.DatepickerSection, null, React.createElement(_DatepickerStyle.DatepickerContent, null, React.createElement(_DatepickerStyle.DatepickerTodayBtn, {
        type: "button",
        onMouseDown: this.handleClickToday
      }, "Today")))));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (prevState.isDatepickerFocus && prevState.previousFullDate === prevState.getFullDate) {
        return {
          isOpen: true
        };
      }

      if (prevState.previousFullDate !== prevState.getFullDate) {
        return {
          previousFullDate: prevState.getFullDate
        };
      }

      return null;
    }
  }]);
  return Datepicker;
}(React.Component);

var _default = Datepicker;
exports["default"] = _default;