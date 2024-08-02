import {reactive} from "vue"
import {mergeWith} from "lodash-es"

export const globalConfig = {
    avatar: {
        user_name: "name",
        dept_name: "dept_name",
        user_avatar: "avatar",
        user_id: "user_id" // cmdb中的user_id
    },
    avatarCard: {
        // "api_url": process.env.NODE_ENV == 'development'? "http://172.18.12.155:8000/api": "https://devops.pocketcity.com/api",
        "api_url": process.env.NODE_ENV == 'development'? "https://devopstest.pocketcity.com/api": "//devops.pocketcity.com/api",
        "enabled": true,
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
