<template>
  <div style="display:inline-flex">
    <a-tag
      class="boke-useravator-wrapper"
      :class="{
        'wrapper-only-name': props.onlyName,
        ['el-avatar--' + props.shape]: props.animated,
        is_tag: props.tag && !props.color,
        is_highlight: props.is_highlight,
        disabled: props.disabled,
        'only-icon-style': props.onlyIcon
      }"
      v-bind="attrs"
      :style="{ padding: props.animated ? '4px' : '2px', paddingRight: '12px', borderRadius: '50px' }"
      v-if="data"
      :color="props.color || 'default'"
      :title="data?.[DEPT_KEY]"
    >
      <div
        class="left-icon"
        ref="targetRef"
        @mouseenter="onShowPopover()"
        @mousemove="onShowPopover()"
        @mouseleave="onClosePopover()"
      >
        <a-avatar
          v-if="!props.onlyName"
          :src="usericon"
          :class="'avator-icon'"
          :size="props.size"
        >
          <img :src="defaultUserPng" alt="" />
        </a-avatar>
        <span v-else>
          <span v-if="props.linkType == 'text'">
            {{ user_name }}
          </span>
          <el-link v-else :type="props.linkType" :underline="false">
            {{ user_name }}
          </el-link>
        </span>
        <span id="download-btn-ani" v-if="props.animated" :key="userid"></span>
      </div>
      <slot name="prefix"></slot>
      <div
        class="label"
        v-if="!props.onlyIcon && !props.onlyName"
      >
        <span class="realname">
          {{
            isLoading
              ? "加载中..."
              : user_name
          }}
        </span>
        <span class="id" v-if="!props.noID">
          <span>{{ dept_name }}</span>
        </span>
      </div>
      <div v-if="props.suffix">{{ props.suffix }}</div>
      <a-button
        size="small"
        v-if="props.closable"
        @click="emits('close')"
        :color="props.color"
        type="text"
        shape="circle"
        style="margin-left: 3px; transform: translateY(0) scale(0.6); opacity: 0.8"
      >
      <template #icon>
        <CloseOutlined />
      </template>
      </a-button>
      <slot name="default" :scoped="data"></slot>
    </a-tag>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue"

defineComponent({
  inheritAttrs: false,
  name: "BokeUserAvator", // 切记：defineOptions() vue3.3才有，请使用defineComponent
})
</script>

<script lang="ts" setup>
import {
  defineProps,
  watchEffect,
  ref,
  reactive,
  withDefaults,
  inject,
  createVNode,
  useSlots,
  render,
  defineEmits,
  computed,
  useAttrs
} from "vue";
import UserAvator from "./index.vue";
import { CloseOutlined } from "@ant-design/icons-vue";
import defaultUserPng from "./default-user.png";
import {Avatar as AAvatar, Button as AButton, Tag as ATag} from "ant-design-vue/es"
import {useCustomProps} from "./store"

const { NAME_KEY, AVATAR_KEY, DEPT_KEY,USERID_KEY} = useCustomProps()
const appVersion = "1.0.0";
const emits = defineEmits([ "close"]);

const targetRef = ref();
const onShowPopover = () => {};
const showViewer = ref(false);

const onClosePopover = () => {};
const isMyself = ref(false);
const attrs = useAttrs();
const props = withDefaults(
  defineProps<{
    size?: number | "large" | "default" | "small";
    hidePopover?: boolean;
    onlyIcon?: boolean;
    onlyName?: boolean;
    linkType?: any;
    data?: any;
    shape?: string;
    animated?: boolean;
    insidePopover?: boolean;
    noID?: boolean;
    noDialogDetail?: boolean;
    tag?: boolean;
    closable?: boolean;
    color?: string;
    disabled?: boolean;
    suffix?: string;
    is_highlight?: boolean;
  }>(),
  {
    size: 28,
    hidePopover: false,
    onlyIcon: false,
    onlyName: false,
    linkType: "primary",
    data: null,
    shape: "circle",
    animated: false,
    insidePopover: false,
    noID: false,
    noDialogDetail: false,
    tag: false,
    closable: false,
    color: "",
    disabled: false,
    suffix: "",
    is_highlight: false,
  }
);

const user_name = computed(() => {
  return props.data[NAME_KEY.value] || "未知用户";
});

const dept_name = computed(() => {
  return props.data[DEPT_KEY.value] || "未知部门";
});

const user_id = computed(() => {
  return props.data[USERID_KEY.value] || "未知用户";
});
const data = ref<any>(props.data);
const usericon = ref(props.data[AVATAR_KEY.value]);
const isLoading = ref(false);
</script>

<style lang="less" scoped>
.boke-useravator-wrapper {
  display: inline-flex;
  position: relative;
  align-items: center;
  overflow: hidden;
  margin-left: 4px;
  border: none;
  &.ant-tag-default{
    cursor: default;
    background-color: transparent;
    &:hover{
      filter: brightness(0.8)
    }
  }
  &.is_tag {
    background-color: var(--boke-fill-color-light);
    border-radius: 118px;
  }

  &.is_highlight {
    border-radius: 118px;
    background-color: var(--boke-color-primary);
    color: white;
  }
  &.disabled {
    pointer-events: none;
  }

  .left-icon {
    display: inline-flex;
    padding: 0 4px 0 2px;
    position: relative;
  }

  &.wrapper-only-name {
    margin-left: 0px;

    .left-icon {
      padding: 0 0px;
    }
  }

  .label {
    font-size: 12px;
    white-space: nowrap;
    display: flex;
    flex-direction: column;
    max-width: 80px;
    margin-left: 4px;

    span {
      text-overflow: ellipsis;
      overflow: hidden;
      line-height: 14px;

      &.realname {
        margin-bottom: 0;

        &.lineThrough {
          // text-decoration: line-through;
          color: #75757599;
        }
      }

      &.id {
        opacity: 0.7;
        zoom: 0.8;
      }
    }
  }

  &.isByeBye {
    opacity: 0.5;

    .avator-icon {
      position: relative;

      &::after {
        content: "";
        width: inherit;
        height: 100%;
        position: absolute;
        top: 0px;
        left: 0px;
        z-index: 100;
        display: block;
        border: 2px solid var(--boke-color-danger);
        border-radius: inherit;
        box-sizing: border-box;
        pointer-events: none;
      }
    }
  }

  .left-icon {
    :deep(.el-avatar) {
      &::before {
        content: "";
        width: inherit;
        height: 100%;
        position: absolute;
        top: 0px;
        left: 4px;
        z-index: 100;
        display: block;
        border: 1px solid var(--boke-border-color-extra-light);
        border-radius: inherit;
        box-sizing: border-box;
        pointer-events: none;
        mix-blend-mode: darken;
      }
    }
  }

  :deep(.el-avatar) {
    img {
      width: 100%;
      cursor: pointer;
    }
  }
}

.demo-rich-conent {
  :deep(.el-avatar) {
    img {
      width: 100%;
      cursor: pointer;
    }
  }
}
.only-icon-style{
  padding: 0;
  margin: 0;
}
</style>
