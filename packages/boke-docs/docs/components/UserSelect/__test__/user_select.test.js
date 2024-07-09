import UserSelect from '../demo/normal.vue'
import UserSelectWith_provider from '../demo/with_provider.vue'
import { mount, VueWrapper } from '@vue/test-utils';
import { describe, expect, it, vi, test, } from 'vitest';

test('user select is normal', async () => {
    const wrapper = mount(UserSelect, {
        },
    );
    expect(wrapper.element).toMatchSnapshot() // 匹配快照
})

test('with provider', async () => {
    const wrapper = mount(UserSelectWith_provider, {
        }
    )
    expect(wrapper.element).toMatchSnapshot() // 匹配快照
})