import * as tslib_1 from "tslib";
import { parentLogger } from './utils';
(() => {
    if (!(window.bokeMessageQueue)) {
        window.bokeMessageQueue = new Map();
        window.addEventListener("message", (data) => {
            window.bokeMessageQueue.forEach((cb, key) => {
                key && cb(data);
            });
        });
    }
    parentLogger("boke-JS-BRIDGE", "ParentSDK is Ready");
    return;
})();
export default function (iframeTarget, configs) {
    const frameUUID = encodeURIComponent(iframeTarget.src);
    let { events = {}, eventsCallback = {}, autoStart = true } = configs;
    const handler = function (e) {
        try {
            const { eventName, eventData, msgScoped } = JSON.parse(e.data);
            if (msgScoped != "boke-JS-BRIDGE") {
                return; // 没有msgScoped, 不属于sdk传递的消息
            }
            Object.keys(events).forEach((key) => {
                if (eventName == key) {
                    events[key](eventData);
                    parentLogger("boke-JS-BRIDGE", `postMessage to ParentSdk: ${e.data}`);
                }
            });
            Object.keys(eventsCallback).forEach((key) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                if (eventName == key) {
                    let cbdata = yield eventsCallback[key](eventData);
                    let data = JSON.stringify({
                        eventName: eventName + "@Callback",
                        eventData: cbdata,
                        msgScoped: "boke-JS-BRIDGE"
                    });
                    parentLogger("boke-JS-BRIDGE", `callbackListener to ChildSdk: ${data}`);
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
                msgScoped: "boke-JS-BRIDGE"
            });
            parentLogger("boke-JS-BRIDGE", `postMessage to ChildSdk: ${data}`);
            iframeTarget.contentWindow.postMessage(data, "*");
        },
        destory() {
            window.bokeMessageQueue.delete(frameUUID);
        },
        start() {
            window.bokeMessageQueue.set(frameUUID, handler);
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
