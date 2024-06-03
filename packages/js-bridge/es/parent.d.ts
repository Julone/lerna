interface CommonEvent {
    [props: string]: (prop: any) => any;
}
interface CallbackEvent {
    getAuthorization?: (data?: any) => any;
    getUserInfo?: (data?: any) => any;
    [props: string]: (prop?: any) => any;
}
declare type ConfigType = {
    /***自定义事件的具体实现 */
    events: CommonEvent;
    /***异步自定义事件的具体实现: 支持async异步方法 */
    eventsCallback: CallbackEvent;
    /***自动启动父iframe事件绑定, 默认: 是 */
    autoStart?: boolean;
};
export default function (iframeTarget: HTMLIFrameElement, configs: ConfigType): {
    postMessage(eventName: any, eventData: any): void;
    destory(): void;
    start(): void;
    on(eventName: any, cb: any): void;
    off(key: any): void;
};
export {};
