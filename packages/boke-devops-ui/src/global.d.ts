import BokeUserAvatar from './AegisUser/user-avatar.vue'
import BokeProvider from './Provider.vue'
import BokeUserSelect from './AegisUser/multiple-user-select.vue'
declare module 'vue' {
  export interface GlobalComponents {
    BokeUserAvatar: typeof BokeUserAvatar
    BokeProvider: typeof BokeProvider
    BokeUserSelect: typeof BokeUserSelect
  }
}