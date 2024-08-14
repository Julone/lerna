import BokeUserAvatar from './UserAvatar/user-avatar.vue';
import BokeUserAvatarGroup from './UserAvatar/user-avatar-group.vue';
import BokeProvider from './Provider/Provider.vue';
import BokeUserSelect from './UserSelect/multiple-user-select.vue';
import { Tag as BokeTag } from 'ant-design-vue/es';
import { Button as BokeButton } from 'ant-design-vue/es';
import { Segmented as BokeSegmented } from 'ant-design-vue/es';
import BokeMicroAppProvider from './Microapp/MicroAppProvider.vue';
import './utils/style.global.less';
export * as avatarStore from './UserAvatar/avatar.store';
export { BokeUserAvatar, BokeProvider, BokeUserSelect, BokeUserAvatarGroup, BokeMicroAppProvider, BokeTag, BokeButton, BokeSegmented };
declare const _default: {
    install(app: any): void;
};
export default _default;
