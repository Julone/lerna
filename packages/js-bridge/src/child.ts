import {childLogger} from './utils'
interface ChildMethods {
    /*** 获取授权 */
    getAuthorization: () => Promise<any>,
    /*** 获取用户信息 */
    getUserInfo: () => Promise<any>,
    /*** 获取自定义事件的数据 */
    fetchCustomData: (tokenName /*** 获取授权 */: any) => Promise<any>;
    /*** 触发parent的事件 */
    triggerEvent: (methodName:string, methodData?: any) => any;
    /**事件挂载函数到Child */
    $on: (methodName: string, cb: (data: string) => void) => void,
    /**事件移除函数到Child */
    $off: (methodName: string) => void,
    /**事件挂载函数到Child, 包含Parent回调函数 */
    $onCallback: (methodName: string, cb: (data: string) => void) => void,
    /**事件移除函数到Child, 包含Parent回调函数 */
    $offCallback: (methodName: string) => void,
    goPage: (path: string, params: any) => void,
    refreshTag: () => void,
    /*** 关闭弹窗 */
    closeModal: () => void,
    toast: (msg: string) => void,
    cacheData: any,
    version: string
}

const ChildHanlder: () => ChildMethods = () => {
    let methods = {} as ChildMethods;
    const triggerAppEvent = (eventName, eventData) => {
        const webviewBridge = window || null;
        if (!webviewBridge && window.iggqaJsBridge) {
            alert('请在 IGGQA 中运行此页面!');
        } else {
            const postdata = {
                eventName: eventName,
                eventData: eventData,
                msgScoped: "IGGQA-JS-BRIDGE"
            }
            childLogger("IGGQA-JS-BRIDGE", `postMessage to ParentSdk: ${postdata}`)
            webviewBridge.parent.postMessage(
                JSON.stringify(postdata),
                '*',
            );
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
    methods.version = '0.0.1'

    const cratePromise = (asyncName, timeout = 1200) => {
        let result = {
            status: "pending",
            data: null,
            err: null
        }

        let pro = new Promise((resolve, rejected) => {
            let autoTimer
            const callback = (eventData) => {
                autoTimer && clearTimeout(autoTimer);
                methods.$offCallback(asyncName);
                resolve(eventData);
            }
            autoTimer = setTimeout(()=> {
                callback(null)
            }, timeout) // 1.2秒内没有应答 直接结束.
            methods.$onCallback(asyncName, callback);
            triggerAppEvent(asyncName, null);
        }).then(res => {
            result.data = res;
            result.status = "fulfiled";
            methods.cacheData[asyncName] = result;
            return result
        }).catch(e => {
            result.err = e;
            result.status = "rejected";
            methods.cacheData[asyncName] = result;
            return result
        })
        return pro
    }

    function withAsyncContext(asyncName) {
        let run = null;
        try {
            run = () => {
                if (methods.cacheData[asyncName]) {
                    if (methods.cacheData[asyncName].status === 'fulfiled') {
                        return methods.cacheData[asyncName].data
                    } else if (methods.cacheData[asyncName].status === 'rejected') {
                        throw methods.cacheData[asyncName].err;
                    }
                }
                throw cratePromise(asyncName).then(res => res.data)
            }
            return run();
        } catch (e) {
            if (e instanceof Promise) {
                (e as any).finally(done => {
                    throw methods.cacheData[asyncName].data
                })
            }
        }
    }

    methods.getAuthorization = async () => {
        return await cratePromise("getAuthorization").then(res => res.data)
    };
    methods.getUserInfo = async () => {
        return await cratePromise("getUserInfo").then(res => res.data)
    };
    methods.fetchCustomData = async (tokenName) => {
        return await cratePromise(tokenName, 3000).then(res => res.data)
    }
    methods.triggerEvent=async (eventName, eventArgs)=> {
        triggerAppEvent(eventName, eventArgs);
    }
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
                    const { eventName, eventData,msgScoped } = JSON.parse(data);
                    if(msgScoped != "IGGQA-JS-BRIDGE") {
                        return; // 非IGGQA的信息不处理
                    }
                    if (eventName == key) {
                        callback(eventData);
                        childLogger("IGGQA-JS-BRIDGE", `postMessage to ChildSdk: ${data}`)
                    }
                } catch (e) {
                }
            });
        });
        childLogger("IGGQA-JS-BRIDGE", "ChildSdk is ready")
    }
    return window.iggqaJsBridge;
}

export default ChildHanlder()