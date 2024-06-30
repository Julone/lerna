(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parentLogger = (title, msg) => {
        console.log(` %c ${title}  %c ${msg} `, 'color: #fff; background: #4B60CF; padding:5px 0;', 'background: #030307; color: #fff; padding:5px 0;word-break:break-all');
    };
    exports.childLogger = (title, msg) => {
        console.log(` %c ${title}  %c ${msg}`, 'color: #fa8c16; background: #fff7e6; padding:5px 0;', 'background: #030307; color: #fff; padding:5px 0;word-break:break-all');
    };
});
