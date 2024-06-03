(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "tslib", "./parent", "./child", "./utils"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const tslib_1 = require("tslib");
    var parent_1 = require("./parent");
    exports.iggqaJsBridgeParent = parent_1.default;
    var child_1 = require("./child");
    exports.iggqaJsBridgeChild = child_1.default;
    tslib_1.__exportStar(require("./utils"), exports);
});
