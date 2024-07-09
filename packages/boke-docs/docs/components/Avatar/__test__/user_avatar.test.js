import UserAvatar from '../demo/normal.vue'
import UserAvatarWith_provider from '../demo/with_provider.vue'
import { mount, VueWrapper } from '@vue/test-utils';
import { describe, expect, it, vi, test, } from 'vitest';

test('user avatar is normal', async () => {
    const wrapper = mount(UserAvatar, {
        },
    );
    expect(wrapper.element).toMatchSnapshot() // 匹配快照
})

test('with provider', async () => {
    const wrapper = mount(UserAvatarWith_provider, {
        }
    )
    expect(wrapper.element).toMatchSnapshot() // 匹配快照
})