import {parentLogger} from './utils'
(() => {
  if (!(window.iggqaMessageQueue)) {
    window.iggqaMessageQueue = new Map();
    window.addEventListener("message", (data) => {
      window.iggqaMessageQueue.forEach((cb, key) => {
        key && cb(data);
      });
    });
  }
  parentLogger("IGGQA-JS-BRIDGE", "ParentSDK is Ready")
  return;
})()

interface CommonEvent {
  [props: string]: (prop: any) => any;
}

interface CallbackEvent {
  getAuthorization?: (data?: any) => any
  getUserInfo?: (data?: any) => any
  [props: string]: (prop?: any) => any;
}
type ConfigType = { 
  /***自定义事件的具体实现 */
  events: CommonEvent, 
  /***异步自定义事件的具体实现: 支持async异步方法 */
  eventsCallback: CallbackEvent,
  /***自动启动父iframe事件绑定, 默认: 是 */
  autoStart?: boolean
}
export default function (iframeTarget: HTMLIFrameElement, configs: ConfigType) {
  const frameUUID = encodeURIComponent(iframeTarget.src);
  let { events = {}, eventsCallback = {}, autoStart = true } = configs as any;

  const handler = function (e) {
    try {
      const { eventName, eventData, msgScoped } = JSON.parse(e.data);
      if(msgScoped != "IGGQA-JS-BRIDGE") {
        return // 没有msgScoped, 不属于sdk传递的消息
      }
      Object.keys(events).forEach((key) => {
        if (eventName == key) {
          events[key](eventData);
          parentLogger("IGGQA-JS-BRIDGE", `postMessage to ParentSdk: ${e.data}`)
        }
      });

      Object.keys(eventsCallback).forEach( async (key) => {
        if (eventName == key) {
          let cbdata = await eventsCallback[key](eventData);
          let data = JSON.stringify({
            eventName: eventName + "@Callback",
            eventData: cbdata,
            msgScoped: "IGGQA-JS-BRIDGE"
          });
          parentLogger("IGGQA-JS-BRIDGE", `callbackListener to ChildSdk: ${data}`)
          iframeTarget.contentWindow.postMessage(data, "*");
        }
      });
    } catch (error) {
    }
  };
  const methods = {
      postMessage(eventName, eventData) {
        const data = JSON.stringify({
          eventName: eventName,
          eventData: eventData,
          msgScoped: "IGGQA-JS-BRIDGE"
        });
        parentLogger("IGGQA-JS-BRIDGE", `postMessage to ChildSdk: ${data}`)
        iframeTarget.contentWindow.postMessage(data, "*");
      },
      destory() {
        window.iggqaMessageQueue.delete(frameUUID);
      },
      start(){
        window.iggqaMessageQueue.set(frameUUID, handler);
      },
      on(eventName, cb) {
        events[eventName] = cb;
      },
      off(key) {
        delete events[key];
      },
  }
  autoStart && methods.start();
  return {
    ...methods
  }
  
}
