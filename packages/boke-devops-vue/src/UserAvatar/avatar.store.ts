import { computed, toRef,  getCurrentInstance, inject } from "vue"
import { globalConfig, globalState } from "../Provider/store"
import { mergeWith } from "lodash-es"

export const useCustomProps = () => {
    const props = getCurrentInstance()?.attrs as any;
    const injectGlobalConfig = inject("globalConfig") as any
    const injectGlobalState = inject("globalState") as any
    const mergedProps = mergeWith({}, globalConfig.avatar, injectGlobalConfig?.avatar, props?.customProps || {});
    const mergedAvatarCardProps = mergeWith({}, globalConfig.avatarCard, injectGlobalConfig?.avatarCard);


    let NAME_KEY = toRef(mergedProps, 'user_name')
    let AVATAR_KEY = toRef(mergedProps, 'user_avatar')
    let DEPT_KEY = toRef(mergedProps, 'dept_name')
    let USERID_KEY = toRef(mergedProps, 'user_id')


    const global_always_avatar_is_hihglight = injectGlobalState?.global_always_avatar_is_hihglight || globalState?.global_always_avatar_is_hihglight
    const global_disabled_avatar_card = injectGlobalConfig?.avatarCard?.enabled == false
    const AVATAR_CARD_URL = mergedAvatarCardProps.api_url

    return {
        NAME_KEY,
        AVATAR_KEY,
        DEPT_KEY,
        USERID_KEY,
        global_always_avatar_is_hihglight,
        global_disabled_avatar_card,
        AVATAR_CARD_URL
    }
}