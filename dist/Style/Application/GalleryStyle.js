"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GalleryThumbnailWrapper = exports.GalleryImageWrapper = exports.GalleryItem = exports.GalleryItemWrapper = exports.GalleryContainer = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Colors = require("../Colors");

function _templateObject5() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  img {\n    height: 4em;\n    width: 4em;\n    object-fit: cover;\n    cursor: pointer;\n    margin: .3em;\n\n    &.active {\n      border: 1px solid ", ";\n    }\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  img {\n    height: 50vh;\n    width: auto;\n    object-fit: contain;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n  margin: 5px;\n\n  ", "\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  display: flex;\n  flex-wrap: wrap;\n\n  img {\n    height: 5em;\n    width: 5em;\n    object-fit: cover;\n    cursor: pointer;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  position: relative;\n\n  .modal-content {\n    width: 95vw;\n\n    .modal-header {\n      border-bottom: none;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var GalleryContainer = _styledComponents["default"].div(_templateObject());

exports.GalleryContainer = GalleryContainer;

var GalleryItemWrapper = _styledComponents["default"].div(_templateObject2());

exports.GalleryItemWrapper = GalleryItemWrapper;

var GalleryItem = _styledComponents["default"].div(_templateObject3(), function (_ref) {
  var imageLeft = _ref.imageLeft;

  if (imageLeft !== 0) {
    return "\n        &:last-child:after {\n          content: '+".concat(imageLeft, "';\n          position: absolute;\n          top: 0;\n          left: 0;\n          display: flex;\n          justify-content: center;\n          align-items: center;\n          color: ").concat(_Colors.SecondaryColor.blue, ";\n          height: 100%;\n          width: 100%;\n          font-size: 18px;\n          background: rgba(255, 255, 255, 0.75);\n          cursor: pointer;\n        }\n      ");
  }
});

exports.GalleryItem = GalleryItem;

var GalleryImageWrapper = _styledComponents["default"].div(_templateObject4());

exports.GalleryImageWrapper = GalleryImageWrapper;

var GalleryThumbnailWrapper = _styledComponents["default"].div(_templateObject5(), _Colors.SecondaryColor.white);

exports.GalleryThumbnailWrapper = GalleryThumbnailWrapper;