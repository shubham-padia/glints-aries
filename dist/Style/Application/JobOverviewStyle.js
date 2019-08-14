"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JobOverviewInfostyle = exports.JobOverviewLinkStyle = exports.JobOverviewHeadingStyle = exports.JobOverviewLabelStyle = exports.JobOverviewBodystyle = exports.JobOverviewHeaderStyle = exports.JobOverviewContainer = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _StyleConfig = require("../../Utils/StyleConfig");

function _templateObject7() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: 30px;\n  \n\n  @media ", " {\n    display: block;\n    flex-wrap: none;\n  }\n\n  p {\n    margin-right: 30px !important;\n    margin-bottom: 10px !important;\n    font-size: 14px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #000000;\n    display: flex;\n    \n    span svg {\n      margin-top: 0;\n    }\n\n    svg {\n      vertical-align: middle;\n      margin-right: 5px;\n      margin-top: 7px;\n      width: 6px;\n      height: 6px;\n    }\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-bottom: 15px;\n  a {\n    display: block;\n    font-size: 14px;\n    font-weight: normal;\n    font-style: normal;\n    font-stretch: normal;\n    line-height: normal;\n    letter-spacing: normal;\n    color: #0076e0;\n    cursor: pointer;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-size: 18px;\n  font-weight: 500;\n  font-style: normal;\n  font-stretch: normal;\n  line-height: normal;\n  letter-spacing: normal;\n  color: #000000;\n  margin-bottom: 10px !important;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: inline-block;\n  color: #ffffff;\n  background: #00aeef;\n  padding: 1px 6px;\n  font-size: 12px;\n  letter-spacing: 1px;\n  text-transform: uppercase;\n  font-weight: 500;\n  margin-bottom: 15px !important;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-left: 30px;\n  width: 100%;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  min-width: 64px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  display: flex;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var JobOverviewContainer = _styledComponents["default"].div(_templateObject());

exports.JobOverviewContainer = JobOverviewContainer;

var JobOverviewHeaderStyle = _styledComponents["default"].div(_templateObject2());

exports.JobOverviewHeaderStyle = JobOverviewHeaderStyle;

var JobOverviewBodystyle = _styledComponents["default"].div(_templateObject3());

exports.JobOverviewBodystyle = JobOverviewBodystyle;

var JobOverviewLabelStyle = _styledComponents["default"].p(_templateObject4());

exports.JobOverviewLabelStyle = JobOverviewLabelStyle;

var JobOverviewHeadingStyle = _styledComponents["default"].h1(_templateObject5());

exports.JobOverviewHeadingStyle = JobOverviewHeadingStyle;

var JobOverviewLinkStyle = _styledComponents["default"].div(_templateObject6());

exports.JobOverviewLinkStyle = JobOverviewLinkStyle;

var JobOverviewInfostyle = _styledComponents["default"].div(_templateObject7(), _StyleConfig.Device.tablet);

exports.JobOverviewInfostyle = JobOverviewInfostyle;