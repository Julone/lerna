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

export const mergeConfig = (data) => {
    merge(globalConfig, data)
}

