"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.debounce = void 0;

var _this = void 0,
    _arguments = arguments;

var debounce = function debounce(func, wait, immediate) {
  var timeout;
  wait = wait ? wait : 15;
  return function () {
    var context = _this;
    var args = _arguments;

    var later = function later() {
      timeout = null;

      if (!immediate) {
        func.apply(context, args);
      }
    };

    var callNow = immediate && timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) {
      func.apply(context, args);
    }
  };
};

exports.debounce = debounce;