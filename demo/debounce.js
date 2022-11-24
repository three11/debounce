(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.debounce = {}));
})(this, (function (exports) { 'use strict';

    var debounce = function (callback, wait, immediate) {
        if (wait === void 0) { wait = 15; }
        if (immediate === void 0) { immediate = false; }
        var timeout;
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var context = this;
            if (immediate && !timeout) {
                callback.apply(context, args);
            }
            if (typeof timeout === 'number') {
                clearTimeout(timeout);
            }
            timeout = setTimeout(function () {
                timeout = null;
                if (!immediate) {
                    callback.apply(context, args);
                }
            }, wait);
        };
    };

    exports.debounce = debounce;
    exports.default = debounce;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=debounce.js.map
