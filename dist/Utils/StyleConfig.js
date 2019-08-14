"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Device = exports.ScreenSize = exports.Theme = exports.PsychedelicTheme = exports.Variant = void 0;
var Variant = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  GHOST: 'ghost',
  LINK: 'link'
};
exports.Variant = Variant;
var PsychedelicTheme = {
  BLUE_DOMINANT: 'blue-dominant',
  BLUE_DEFAULT: 'blue-default',
  RED_DOMINANT: 'red-dominant',
  RED_DEFAULT: 'red-default',
  YELLOW_DOMINANT: 'yellow-dominant',
  YELLOW_DEFAULT: 'yellow-default'
};
exports.PsychedelicTheme = PsychedelicTheme;
var Theme = {
  RED: 'red',
  YELLOW: 'yellow',
  BLUE: 'blue',
  BLUE_RED: 'blue-red',
  WHITE: 'white',
  GREY: 'grey'
};
/* Screen size library of Glints
 * Usage:
 * @media ${Device.mobileL} { ... }
 */

exports.Theme = Theme;
var ScreenSize = {
  mobileS: 320,
  mobileM: 480,
  mobileL: 640,
  tablet: 768,
  desktopS: 1024,
  desktopM: 1260,
  desktopL: 1440
};
exports.ScreenSize = ScreenSize;
var Device = {
  mobileS: "(max-width: ".concat(ScreenSize.mobileS, "px)"),
  mobileM: "(max-width: ".concat(ScreenSize.mobileM, "px)"),
  mobileL: "(max-width: ".concat(ScreenSize.mobileL, "px)"),
  tablet: "(max-width: ".concat(ScreenSize.tablet, "px)"),
  desktopS: "(max-width: ".concat(ScreenSize.desktopS, "px)"),
  desktopM: "(max-width: ".concat(ScreenSize.desktopM, "px)"),
  desktopL: "(max-width: ".concat(ScreenSize.desktopL, "px)")
};
exports.Device = Device;