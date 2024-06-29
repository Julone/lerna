import Avatar from '../user-avatar.vue'
import gutter from "./gutter.vue"
import { mount, VueWrapper } from '@vue/test-utils';
import { describe, expect, it, vi, test, } from 'vitest';

test('Link changes the state when hovered', async () => {
    const wrapper = mount(Avatar, {
            props: {
                data: { name: 'Julone', dept_name: '运维部', avatar: 'https://s1-imfile.fewebp' }
            },
            slots: {
                default : 'sdafasd'
            }
        }
    );
    wrapper.vm.$nextTick(() => {
        const actions = wrapper.find('.boke-useravator-wrapper');
        expect(actions.exists()).toBeTruthy();
    })

})