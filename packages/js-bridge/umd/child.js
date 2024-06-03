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
    const ChildHanlder = () => {
        let methods = {};
        const triggerAppEvent = (eventName, eventData) => {
            const webviewBridge = window || null;
            if (!webviewBridge && window.iggqaJsBridge) {
                alert('请在 IGGQA 中运行此页面!');
            }
            else {
                const postdata = {
                    eventName: eventName,
                    eventData: eventData,
                    msgScoped: "IGGQA-JS-BRIDGE"
                };
                utils_1.childLogger("IGGQA-JS-BRIDGE", `postMessage to ParentSdk: ${postdata}`);
                webviewBridge.parent.postMessage(JSON.stringify(postdata), '*');
            }
        };
        methods.goPage = (path = '', params = {}) => {
            triggerAppEvent('goPage', { path, params });
        };
        methods.refreshTag = () => {
            triggerAppEvent('refreshTag', {});
        };
        methods.closeModal = () => {
            triggerAppEvent('closeModal', {});
        };
        methods.toast = (text = '你触发了一个提示！') => {
            triggerAppEvent('toast', text);
        };
        methods.$on = (eventName, callback) => {
            window.messageArray.set(eventName, (eventData) => {
                callback(eventData);
            });
        };
        methods.$off = (eventName) => {
            window.messageArray.delete(eventName);
        };
        methods.$onCallback = (eventName, callback) => {
            methods.$on(eventName + '@Callback', callback);
        };
        methods.$offCallback = (eventName) => {
            methods.$off(eventName + '@Callback');
        };
        methods.cacheData = {};
        methods.version = '0.0.1';
        const cratePromise = (asyncName, timeout = 1200) => {
            let result = {
                status: "pending",
                data: null,
                err: null
            };
            let pro = new Promise((resolve, rejected) => {
                let autoTimer;
                const callback = (eventData) => {
                    autoTimer && clearTimeout(autoTimer);
                    methods.$offCallback(asyncName);
                    resolve(eventData);
                };
                autoTimer = setTimeout(() => {
                    callback(null);
                }, timeout); // 1.2秒内没有应答 直接结束.
                methods.$onCallback(asyncName, callback);
                triggerAppEvent(asyncName, null);
            }).then(res => {
                result.data = res;
                result.status = "fulfiled";
                methods.cacheData[asyncName] = result;
                return result;
            }).catch(e => {
                result.err = e;
                result.status = "rejected";
                methods.cacheData[asyncName] = result;
                return result;
            });
            return pro;
        };
        function withAsyncContext(asyncName) {
            let run = null;
            try {
                run = () => {
                    if (methods.cacheData[asyncName]) {
                        if (methods.cacheData[asyncName].status === 'fulfiled') {
                            return methods.cacheData[asyncName].data;
                        }
                        else if (methods.cacheData[asyncName].status === 'rejected') {
                            throw methods.cacheData[asyncName].err;
                        }
                    }
                    throw cratePromise(asyncName).then(res => res.data);
                };
                return run();
            }
            catch (e) {
                if (e instanceof Promise) {
                    e.finally(done => {
                        throw methods.cacheData[asyncName].data;
                    });
                }
            }
        }
        methods.getAuthorization = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield cratePromise("getAuthorization").then(res => res.data);
        });
        methods.getUserInfo = () => tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield cratePromise("getUserInfo").then(res => res.data);
        });
        methods.fetchCustomData = (tokenName) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield cratePromise(tokenName, 3000).then(res => res.data);
        });
        methods.triggerEvent = (eventName, eventArgs) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            triggerAppEvent(eventName, eventArgs);
        });
        if (!window.iggqaJsBridge) {
            window.iggqaJsBridge = new Proxy(methods, {
                get(target, property) {
                    if (property in target) {
                        return target[property];
                    }
                },
            });
            window.messageArray = new Map();
            window.addEventListener('message', ({ data, source, origin }) => {
                window.messageArray.forEach((callback, key) => {
                    try {
                        const { eventName, eventData, msgScoped } = JSON.parse(data);
                        if (msgScoped != "IGGQA-JS-BRIDGE") {
                            return; // 非IGGQA的信息不处理
                        }
                        if (eventName == key) {
                            callback(eventData);
                            utils_1.childLogger("IGGQA-JS-BRIDGE", `postMessage to ChildSdk: ${data}`);
                        }
                    }
                    catch (e) {
                    }
                });
            });
            utils_1.childLogger("IGGQA-JS-BRIDGE", "ChildSdk is ready");
        }
        return window.iggqaJsBridge;
    };
    exports.default = ChildHanlder();
});
