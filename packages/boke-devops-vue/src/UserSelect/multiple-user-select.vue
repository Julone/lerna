<template>
  <ASelect
    v-model:value="innerdata"
    class="wiki-user-caseder"
    v-if="options"
    @change="onNodeClick($event)"
    style="flex: 1"
    :dropdownStyle="{ zIndex: 100000 }"
    allowClear
    :virtual="true"
    :options="options"
    mode="multiple"
    :fieldNames="{ children: 'children', label: 'label', value: 'value' }"
    :disabled="props.disabled || false"
    show-search
    :dropdownMatchSelectWidth="240"
    :max-tag-count="props.maxTagCount || 100"
    :filter-option="onFilterOption"
    v-bind="$attrs"
  >
    <template #tagRender="{ label, closable, onClose, option }">
      <slot name="tagRender" v-bind="{label, closable, onClose, option}">
        <BokeUserAvatar
        v-if="option?.data"
        :data="option?.data"
        :size="18"
        :hidePopover="true"
        :noID="true"
        style="width: fit-content"
        :noDialogDetail="true"
        :tag="true"
        :closable="closable"
        @close="onClose"
        :customProps="$attrs.customProps"
        v-bind="props.tagRenderProps"
      >
      </BokeUserAvatar>
      </slot>
    </template>
    <template #placeholder>
      <div
        style="display: flex; align-items: center; line-height: 12px; gap: 8px"
      >
        <UserOutlined />
        {{ props.placeholder || "未选择用户" }}
      </div>
    </template>
    <template #option="item">
      <div style="display: flex; align-items: center; height: 100%">
        <div
          style="
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            pointer-events: none;
          "
        >
          <div class="user-select-user-label">
            <a-avatar
              :src="item?.data?.[AVATAR_KEY]"
              :class="'user-select-avatar-icon'"
              :size="18"
            >
              <div style="display: flex;width: 18px;height: 18px"></div>
            </a-avatar>
            <span>
              {{ item.data?.[NAME_KEY] }}
            </span>
          </div>
          <small style="margin: 0 8px; zoom: 0.8">{{
            item.data?.[DEPT_KEY]
          }}</small>
        </div>
      </div>
    </template>
  </ASelect>
</template>

<script setup lang="tsx">
import {
  defineProps,
  ref,
  computed,
  nextTick,
  watch,
  onUpdated,
} from "vue";

import {find as _find} from "lodash-es";
import { Select as ASelect, Avatar as AAvatar} from "ant-design-vue/es";
import {BokeUserAvatar, avatarStore} from "./../index";
import { UserOutlined } from "@ant-design/icons-vue";

import { onErrorCaptured } from "vue";
const {useCustomProps} = avatarStore;

const props = defineProps([
  "modelValue",
  "options",
  "disabled",
  "optionDisabledProp",
  "hideValues",
  "placeholder",
  "maxTagCount",
  "tagRenderProps"
]);

const emits = defineEmits(["update:modelValue", "blur", "focus", "change"]);

const  {NAME_KEY, AVATAR_KEY, DEPT_KEY,USERID_KEY } =useCustomProps()

const innerdata = ref(null);
const options = computed(() => {
  const target = props.options ;
  return target
    ?.map((item) => {
      item.disabled = props.optionDisabledProp
        ? item[props.optionDisabledProp]
        : item.disabled;
      return item;
    })
    .filter((user) => {
      return !props.hideValues?.includes(user.value);
    });
});

const onNodeClick = (e) => {
  const target = _find(options.value, (item: any) => item.value == e);
  emits("change", target);
  emits("update:modelValue", e);
  nextTick(() => {
    innerdata.value = e;
  });
};

const onFilterOption = (inputValue, option) => {
  const description = option.label
    .toLowerCase()
    .includes(inputValue.toLowerCase());
  return option.label.toLowerCase().includes(inputValue.toLowerCase());
};

onUpdated(() => {
  innerdata.value = props.modelValue;
});

onErrorCaptured(()=> {
  return false
})
</script>
<style lang="less" scoped>
.wiki-user-caseder {
    /deep/ .ant-select-selection-item {
      align-items: center;
    }

  &.ant-select-disabled {
      /deep/.ant-select-selector {
        // border: none !important;
        background: transparent !important;

        .ant-select-selection-item {
          color: var(--boke-text-color-regular) !important;
        }
      }
  }
}

.user-select-user-label {
  font-size: 12px;
  white-space: nowrap;
  display: flex;
  max-width: 80px;
  margin-left: 4px;
  gap: 12px;
  /deep/ .user-select-avatar-icon {
    flex: none;
  }
}
</style>