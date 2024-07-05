import BokeUserAvatar from './AegisUser/user-avatar.vue';
import BokeUserAvatarGroup from './AegisUser/user-avatar-group.vue';
import BokeProvider from './Provider/Provider.vue';
import BokeUserSelect from './AegisUser/multiple-user-select.vue';
import { Tag as BokeTag } from "ant-design-vue/es";
import { Button as BokeButton } from "ant-design-vue/es";
import BokeMicroAppProvider from "./Microapp/MicroAppProvider.vue";
import "./style/variables.less";
export { BokeUserAvatar, BokeProvider, BokeUserSelect, BokeTag, BokeButton, BokeUserAvatarGroup, BokeMicroAppProvider, };
declare const _default: {
    install(app: any, customOptions?: {}): void;
};
export default _default;
