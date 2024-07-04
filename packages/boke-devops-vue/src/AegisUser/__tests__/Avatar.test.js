import Avatar from '../user-avatar.vue'
import { mount, VueWrapper } from '@vue/test-utils';
import { describe, expect, it, vi, test, } from 'vitest';

test('Link changes the state when hovered', async () => {
    const wrapper = mount(Avatar, {
            props: {
                data: { name: 'Julone', dept_name: '运维部', avatar: 'https://s1-imfile.fewebp' }
            },
            slots: {
                default : 'sdafasd'
            },
        },
    );
    expect(wrapper.element).toMatchSnapshot() // 匹配快照
    const actions = wrapper.find('.boke-useravator-wrapper');
    expect(actions.exists()).toBeTruthy(); // 查找是否有类名
})