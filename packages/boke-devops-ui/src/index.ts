
import BokeUserAvatar from './AegisUser/user-avatar.vue'
import BokeUserAvatarGroup from './AegisUser/user-avatar-group.vue'

import BokeProvider from './Provider.vue'
import BokeUserSelect from './AegisUser/multiple-user-select.vue'
import { Tag as BokeTag } from "ant-design-vue/es"
import { Button as BokeButton } from "ant-design-vue/es"
// export { RangePicker as BokeRangePicker } from "ant-design-vue"
import { Segmented as BokeSegmented } from "ant-design-vue/es"

import BokeMicroAppProvider from "./Microapp/MicroAppProvider.vue"

import "./style/variables.less"

export {
  BokeUserAvatar,
  BokeProvider,
  BokeUserSelect,
  BokeTag,
  BokeButton,
  BokeUserAvatarGroup,
  BokeMicroAppProvider,
  
  // BokeRangePicker,
}

export default {
  install(app: any, customOptions = {
  }) {
 
    app.component('boke-provider', BokeProvider);
    app.component('boke-user-avatar', BokeUserAvatar);
    app.component('boke-user-avatar-group', BokeUserAvatarGroup);
    app.component("boke-user-select", BokeUserSelect);
    
    app.component("boke-tag", BokeTag);
    app.component("boke-button", BokeButton);
    app.component("boke-segmented", BokeSegmented);
    
    // app.component("boke-range-picker", BokeRangePicker);
  },
}