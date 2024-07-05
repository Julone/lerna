import { computed, toRef,  getCurrentInstance } from "vue"
import { globalConfig, globalState } from "./../store"

export const NAME_KEY = computed(() => globalConfig.avatar.user_name)
export const AVATAR_KEY = computed(() => globalConfig.avatar.user_avatar)
export const DEPT_KEY = computed(() => globalConfig.avatar.dept_name)
export const USERID_KEY = computed(() => globalConfig.avatar.user_id)

export const useCustomProps = () => {
    const props = getCurrentInstance()?.attrs as any;
    let NAME_KEY = toRef(props?.customProps || {}, 'user_name', globalConfig.avatar.user_name)
    let AVATAR_KEY = toRef(props?.customProps || {}, 'user_avatar', globalConfig.avatar.user_avatar)
    let DEPT_KEY = toRef(props?.customProps || {}, 'dept_name', globalConfig.avatar.dept_name)
    let USERID_KEY = toRef(props?.customProps || {}, 'user_id', globalConfig.avatar.user_id)
    const global_always_avatar_is_hihglight = globalState.global_always_avatar_is_hihglight
    return {
        NAME_KEY,
        AVATAR_KEY,
        DEPT_KEY,
        USERID_KEY,
        global_always_avatar_is_hihglight
    }
}