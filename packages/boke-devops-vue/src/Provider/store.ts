import {reactive} from "vue"
import {mergeWith} from "lodash-es"

export const globalConfig = {
    avatar: {
        user_name: "name",
        dept_name: "dept_name",
        user_avatar: "avatar",
        user_id: "user_id"
    }
}


export const globalState = reactive({
    global_always_avatar_is_hihglight: null, //如果设置这个, 自带的头像高亮将失效
})

export const mergeConfig = (props: any) => {
    return {
        gc: mergeWith({}, globalConfig, props.globalConfig),
        gs: mergeWith({}, globalState, props.globalState), // TIP: 为什么需要合并到{}, 因为要避免污染全局的属性
    }
}