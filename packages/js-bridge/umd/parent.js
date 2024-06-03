(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "tslib", "./utils"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const tslib_1 = require("tslib");
    const utils_1 = require("./utils");
    (() => {
        if (!(window.iggqaMessageQueue)) {
            window.iggqaMessageQueue = new Map();
            window.addEventListener("message", (data) => {
                window.iggqaMessageQueue.forEach((cb, key) => {
                    key && cb(data);
                });
            });
        }
        utils_1.parentLogger("IGGQA-JS-BRIDGE", "ParentSDK is Ready");
        return;
    })();
    function default_1(iframeTarget, configs) {
        const frameUUID = encodeURIComponent(iframeTarget.src);
        let { events = {}, eventsCallback = {}, autoStart = true } = configs;
        const handler = function (e) {
            try {
                const { eventName, eventData, msgScoped } = JSON.parse(e.data);
                if (msgScoped != "IGGQA-JS-BRIDGE") {
                    return; // 没有msgScoped, 不属于sdk传递的消息
                }
                Object.keys(events).forEach((key) => {
                    if (eventName == key) {
                        events[key](eventData);
                        utils_1.parentLogger("IGGQA-JS-BRIDGE", `postMessage to ParentSdk: ${e.data}`);
                    }
                });
                Object.keys(eventsCallback).forEach((key) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                    if (eventName == key) {
                        let cbdata = yield eventsCallback[key](eventData);
                        let data = JSON.stringify({
                            eventName: eventName + "@Callback",
                            eventData: cbdata,
                            msgScoped: "IGGQA-JS-BRIDGE"
                        });
                        utils_1.parentLogger("IGGQA-JS-BRIDGE", `callbackListener to ChildSdk: ${data}`);
                        iframeTarget.contentWindow.postMessage(data, "*");
                    }
                }));
            }
            catch (error) {
            }
        };
        const methods = {
            postMessage(eventName, eventData) {
                const data = JSON.stringify({
                    eventName: eventName,
                    eventData: eventData,
                    msgScoped: "IGGQA-JS-BRIDGE"
                });
                utils_1.parentLogger("IGGQA-JS-BRIDGE", `postMessage to ChildSdk: ${data}`);
                iframeTarget.contentWindow.postMessage(data, "*");
            },
            destory() {
                window.iggqaMessageQueue.delete(frameUUID);
            },
            start() {
                window.iggqaMessageQueue.set(frameUUID, handler);
            },
            on(eventName, cb) {
                events[eventName] = cb;
            },
            off(key) {
                delete events[key];
            },
        };
        autoStart && methods.start();
        return Object.assign({}, methods);
    }
    exports.default = default_1;
});
