<template>
  <div style="display:inline-flex">
    <a-tag
      class="boke-useravator-wrapper"
      :class="{
        'wrapper-only-name': props.onlyName,
        ['el-avatar--' + props.shape]: props.animated,
        is_tag: props.tag && !props.color,
        is_highlight: props.is_highlight,
        disabled: props.disabled
      }"
      v-bind="attrs"
      :style="{ padding: props.animated ? '4px' : '2px', paddingRight: '12px', borderRadius: '50px' }"
      v-if="userinfo"
      :color="props.color || 'default'"
      :title="userinfo?.department_name || userinfo?.dept_name"
    >
      <div
        class="left-icon"
        ref="targetRef"
        @mouseenter="onShowPopover()"
        @mousemove="onShowPopover()"
        @mouseleave="onClosePopover()"
        @click.stop="onScaleAvator()"
      >
        <a-avatar
          v-if="!props.onlyName"
          :src="usericon"
          :class="userinfo?.roles?.join(' ') + ' avator-icon'"
          :size="props.size"
        >
          <img :src="defaultUserPng" alt="" />
        </a-avatar>
        <span v-else>
          <span v-if="props.linkType == 'text'">
            {{ userinfo?.name || id }}
          </span>
          <el-link v-else :type="props.linkType" :underline="false">
            {{ userinfo?.name || id }}
          </el-link>
        </span>
        <span id="download-btn-ani" v-if="props.animated" :key="userid"></span>
      </div>
      <slot name="prefix"></slot>
      <div
        class="label"
        v-if="!props.onlyIcon && !props.onlyName"
        :class="userinfo?.roles?.join(' ')"
      >
        <span class="realname">
          {{
            isLoading
              ? "加载中..."
              : userinfo?.name || userinfo?.real_name || "未知用户"
          }}
        </span>
        <span class="id" v-if="!props.noID">
          <span>{{ userinfo?.department_name || userinfo?.dept_name }}</span>
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
      <slot name="default" :scoped="userinfo"></slot>
    </a-tag>
  </div>
</template>

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
const appVersion = "1.0.0";
const emits = defineEmits(["onScaleAvator", "close"]);

const targetRef = ref();
const onShowPopover = () => {};
const showViewer = ref(false);
const onScaleAvator = () => {};

const onClosePopover = () => {};
const isMyself = ref(false);
const attrs = useAttrs();
const props = withDefaults(
  defineProps<{
    id?: string | number;
    size?: number | "large" | "default" | "small";
    hidePopover?: boolean;
    onlyIcon?: boolean;
    onlyName?: boolean;
    linkType?: any;
    userinfo?: any;
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
    is_highlight?: boolean
  }>(),
  {
    id: "",
    size: 28,
    hidePopover: false,
    onlyIcon: false,
    onlyName: false,
    linkType: "primary",
    userinfo: null,
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
    is_highlight: false
  }
);
const userid = ref<any>(props.id);
const userinfo = ref<any>(props.userinfo);
const firstLoad = ref(false);
const usericon = ref(props.userinfo?.avatar);
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
</style>
