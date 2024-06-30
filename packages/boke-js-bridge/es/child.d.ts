interface ChildMethods {
    /*** 获取授权 */
    getAuthorization: () => Promise<any>;
    /*** 获取用户信息 */
    getUserInfo: () => Promise<any>;
    /*** 获取自定义事件的数据 */
    fetchCustomData: (tokenName /*** 获取授权 */: any) => Promise<any>;
    /*** 触发parent的事件 */
    triggerEvent: (methodName: string, methodData?: any) => any;
    /**事件挂载函数到Child */
    $on: (methodName: string, cb: (data: string) => void) => void;
    /**事件移除函数到Child */
    $off: (methodName: string) => void;
    /**事件挂载函数到Child, 包含Parent回调函数 */
    $onCallback: (methodName: string, cb: (data: string) => void) => void;
    /**事件移除函数到Child, 包含Parent回调函数 */
    $offCallback: (methodName: string) => void;
    goPage: (path: string, params: any) => void;
    refreshTag: () => void;
    /*** 关闭弹窗 */
    closeModal: () => void;
    toast: (msg: string) => void;
    cacheData: any;
    version: string;
}
declare const _default: ChildMethods;
export default _default;
