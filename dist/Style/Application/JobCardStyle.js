"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.IconHolder = exports.CustomLink = exports.LabelTag = exports.Image = exports.JobCardFooterWrapper = exports.SubtitleTitle = exports.Title = exports.JobcardDescriptionWrapper = exports.JobcardDetailWrapper = exports.JobcardBodyWrapper = exports.JobcardHeaderContent = exports.JobcardHeaderImage = exports.JobcardHeaderWrapper = exports.JobCardWrapper = exports.JobcardContainer = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactRouterDom = require("react-router-dom");

var _Colors = require("../Colors");

var _StyleConfig = require("../../Utils/StyleConfig");

function _templateObject15() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  width: .5em;\n  height: .5em;\n"]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  cursor: pointer;\n  &:hover {\n    color: ", ";\n  }\n"]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  font-family: Poppins;\n  display: inline-block;\n  color: ", ";\n  background-color: ", ";\n  padding: .2em .6em;\n  font-size: 12px;\n  letter-spacing: 1px;\n  margin-bottom: .5em;\n  text-transform: uppercase;\n"]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  object-fit: contain;\n  height: 5em;\n  width: 5em;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: absolute;\n  bottom: 0;\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n  outline: none;\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  color: ", ";\n  word-break: break-word;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  word-break: break-word;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  margin-top: 2em;\n  color: ", ";\n  font-weight: 100;\n  p {\n    position: relative;\n    font-size: 14px;\n    line-height: 1.6;\n    height: 9.28571em;\n    overflow: hidden;\n    &:after {\n      content: '';\n      text-align: right;\n      position: absolute;\n      bottom: 0;\n      right: 0;\n      width: 10em;\n      height: 1.428571429em;\n      background: linear-gradient(90deg, rgba(256, 256, 256, 0.0), rgba(256, 256, 256, 1.0) 75%);\n    }\n  }\n\n  span {\n    display: flex;\n    align-items: center;\n    margin-top: .5em;\n\n    svg {\n      margin-right: .5em;\n    }\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = (0, _taggedTemplateLiteral2["default"])(["  \n  padding-top: 1.5em;\n\n  ul {\n    display: grid;\n    grid-template-columns: auto auto;\n    grid-gap: .4em;\n    margin: 0;\n    padding: 0;\n    li {\n      position: relative;\n      display: flex;\n      margin-left: 1em;\n      list-style-type: none;\n\n      svg {\n        margin: .5em;\n      }\n    }\n\n    @media ", " {\n      grid-template-columns: auto;\n    }\n\n    @media ", " {\n      grid-template-columns: auto;\n    }\n  }\n\n  div {\n    display: flex;\n    align-items: center;\n  }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  padding-top: 0;\n  padding-right: 1.4em;\n  padding-bottom: 1.4em;\n  padding-left: 1.4em;\n  margin-bottom: 3.4em;\n  cursor: pointer;\n  outline: none;\n\n  &:before {\n    content: '';\n    background: ", ";\n    width: 100%;\n    height: 1px;\n    display: flex;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  padding-left: 1.2em;\n  cursor: pointer;\n\n  label {\n    background: ", ";\n    color: ", ";\n    text-transform: uppercase;\n    padding: .2em .6em;\n    font-size: 12px;\n    letter-spacing: 1px;\n    margin-bottom: .5em;\n  }\n\n  h3 {\n    font-weight: 600;\n    margin: 0;\n  }\n\n  a {\n    color: ", ";\n    text-decoration: none;\n    font-size: 14px;\n\n    &:hover {\n      text-decoration: none;\n      opacity: .75;\n    }\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: .2em;\n  border: 1px solid #C6C6C6;\n  overflow: hidden;\n  margin: auto;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: grid;\n  grid-template-columns: auto 1fr;\n  padding: 1.4em;\n  outline: none;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  background-color: white;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  background: ", ";\n  border: 1px solid ", ";\n  width: 100%;\n  min-width: 300px;\n  height: 100%;\n  outline: none;\n\n  a {\n    text-decoration: none;\n  }\n\n  &:after {\n    content: '';\n    opacity: 0;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background: repeating-linear-gradient(-45deg, transparent, transparent 3px, ", " 5px);\n    top: .5em;\n    left: .5em;\n    z-index: 0;\n    transition: all .2s;\n  }\n\n  &:hover:after {\n    opacity: 1;\n    transition: all .2s;\n  }\n\n  @media ", " {\n    width: 300px;\n  }\n\n  @media ", " {\n    width: 300px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var JobcardContainer = _styledComponents["default"].div(_templateObject(), _Colors.SecondaryColor.white, _Colors.SecondaryColor.lightgrey, _Colors.SecondaryColor.lightgrey, _StyleConfig.Device.mobileM, _StyleConfig.Device.mobileS);

exports.JobcardContainer = JobcardContainer;

var JobCardWrapper = _styledComponents["default"].div(_templateObject2());

exports.JobCardWrapper = JobCardWrapper;

var JobcardHeaderWrapper = _styledComponents["default"].div(_templateObject3());

exports.JobcardHeaderWrapper = JobcardHeaderWrapper;

var JobcardHeaderImage = _styledComponents["default"].div(_templateObject4());

exports.JobcardHeaderImage = JobcardHeaderImage;

var JobcardHeaderContent = _styledComponents["default"].div(_templateObject5(), _Colors.PrimaryColor.glintsblue, _Colors.SecondaryColor.white, _Colors.SecondaryColor.blue);

exports.JobcardHeaderContent = JobcardHeaderContent;

var JobcardBodyWrapper = _styledComponents["default"].div(_templateObject6(), _Colors.SecondaryColor.lightgrey);

exports.JobcardBodyWrapper = JobcardBodyWrapper;

var JobcardDetailWrapper = _styledComponents["default"].div(_templateObject7(), _StyleConfig.Device.mobileM, _StyleConfig.Device.mobileS);

exports.JobcardDetailWrapper = JobcardDetailWrapper;

var JobcardDescriptionWrapper = _styledComponents["default"].div(_templateObject8(), _Colors.SecondaryColor.lightblack);

exports.JobcardDescriptionWrapper = JobcardDescriptionWrapper;

var Title = _styledComponents["default"].h3(_templateObject9());

exports.Title = Title;

var SubtitleTitle = _styledComponents["default"].p(_templateObject10(), _Colors.SecondaryColor.blue);

exports.SubtitleTitle = SubtitleTitle;

var JobCardFooterWrapper = _styledComponents["default"].footer(_templateObject11());

exports.JobCardFooterWrapper = JobCardFooterWrapper;

var Image = _styledComponents["default"].img(_templateObject12());

exports.Image = Image;

var LabelTag = _styledComponents["default"].span(_templateObject13(), _Colors.SecondaryColor.white, _Colors.PrimaryColor.glintsblue);

exports.LabelTag = LabelTag;
var CustomLink = (0, _styledComponents["default"])(_reactRouterDom.Link)(_templateObject14(), _Colors.SecondaryColor.black, _Colors.SecondaryColor.black);
exports.CustomLink = CustomLink;

var IconHolder = _styledComponents["default"].div(_templateObject15());

exports.IconHolder = IconHolder;