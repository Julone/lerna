import {reactive} from "vue"
import {merge} from "lodash-es"
export const globalConfig = reactive({
    avatar: {
        user_name: "name",
        dept_name: "dept_name",
        user_avatar: "avatar",
        user_id: "user_id"
    }
})


export const globalState = reactive({
    global_always_avatar_is_hihglight: null, //如果设置这个, 自带的头像高亮将失效
})

export const mergeConfig = (props : any) => {
    if (props.globalConfig) {
        merge(globalConfig, props.globalConfig)
    }
    if (props.globalState) {
        merge(globalState, props.globalState)
    }
}

