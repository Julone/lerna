<template>
  <a-popover placement="bottomLeft" v-model:open="popoverVisible" :arrow="false" :mouseEnterDelay="0.1"
    :mouseLeaveDelay="0.3" transitionName="ant-zoom-big"
    :trigger="props.disabledPopover || props.disabled || global_disabled_avatar_card ? 'contextmenu' : 'hover'"
    :overlayStyle="{ zIndex: '9999', }">
    <template #content>
      <userAvatarCard :userinfo="{ user_name, dept_name, user_id, user_icon }" @pinCard="popoverVisible = true">
      </userAvatarCard>
    </template>
    <div style="display:inline-flex" ref="avatarRef">
      <ATag class="boke-useravator-wrapper" :class="{
        'wrapper-only-name': props.onlyName,
        is_tag: props.tag && !props.color,
        is_highlight: isHigh(),
        disabled: props.disabled,
        'only-icon-style': props.onlyIcon
      }" v-bind="attrs" :style="{ padding: '2px', paddingRight: '12px', borderRadius: '50px' }" v-if="data"
        :color="props.color || 'default'" :title="data?.[DEPT_KEY]">
        <div class="left-icon" ref="targetRef">
          <AAvatar v-if="!props.onlyName" :src="user_icon" :class="'avator-icon'" :size="props.size"></AAvatar>
          <span v-else>
            <span v-if="props.linkType == 'text'">
              {{ user_name }}
            </span>
            <el-link v-else :type="props.linkType" :underline="false">
              {{ user_name }}
            </el-link>
          </span>
        </div>
        <slot name="prefix"></slot>
        <div class="label" v-if="!props.onlyIcon && !props.onlyName">
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
        <AButton size="small" v-if="props.closable" @click.stop.prevent="onClose" :color="props.color" type="text"
          shape="circle" style="margin-left: 3px; transform: translateY(0) scale(0.6); opacity: 0.8">
          <template #icon>
            <CloseOutlined />
          </template>
        </AButton>
        <slot name="default" :scoped="data"></slot>
      </ATag>
    </div>
  </a-popover>
</template>

<script lang="jsx">
import { defineComponent } from "vue"
import {
  ref,
  defineEmits,
  computed,
} from "vue";
import { Avatar as AAvatar, Button as AButton, Tag as ATag, Popover as APopover, BadgeRibbon as ABadgeRibbon } from "ant-design-vue/es"
import { useCustomProps } from "./avatar.store"
import { isFunction } from "lodash-es"
import { CloseOutlined } from "@ant-design/icons-vue"
import userAvatarCard from "./user-avatar-card.vue";

export default defineComponent({
  inheritAttrs: false,
  name: "BokeUserAvator", // 切记：defineOptions() vue3.3才有，请使用defineComponent
  components: {
    'AAvatar': AAvatar,
    "AButton": AButton,
    "ATag": ATag,
    CloseOutlined,
    APopover,
    userAvatarCard,
    'ABadgeRibbon': ABadgeRibbon
  },
  props: {
    size: {
      type: [Number, String],
      required: false,
      default: 28
    },
    hidePopover: {
      type: Boolean,
      required: false,
      default: false
    },
    onlyIcon: {
      type: Boolean,
      required: false,
      default: false
    },
    onlyName: {
      type: Boolean,
      required: false,
      default: false
    },
    noID: {
      type: Boolean,
      required: false,
      default: false
    },
    linkType: {
      type: null,
      required: false,
      default: "primary"
    },
    data: {
      type: null,
      required: false,
      default: null
    },
    shape: {
      type: String,
      required: false,
      default: "circle"
    },
    disabledPopover: {
      type: Boolean,
      required: false,
      default: false
    },
    tag: {
      type: Boolean,
      required: false,
      default: false
    },
    closable: {
      type: Boolean,
      required: false,
      default: false
    },
    color: {
      type: String,
      required: false,
      default: ""
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    suffix: {
      type: String,
      required: false,
      default: ""
    },
    is_highlight: {
      type: Function,
      required: false,
      default: () => false
    }
  },
  emits: ['close'],
  setup(props, { attrs, emit }) {
    const { NAME_KEY, AVATAR_KEY, DEPT_KEY, USERID_KEY, global_always_avatar_is_hihglight, global_disabled_avatar_card } = useCustomProps()
    const appVersion = "1.0.0";
    const targetRef = ref();
    const showViewer = ref(false);

    const isMyself = ref(false);

    const user_name = computed(() => {
      return props.data[NAME_KEY.value] || "未知用户";
    });

    const dept_name = computed(() => {
      return props.data[DEPT_KEY.value] || "未知部门";
    });

    const user_id = computed(() => {
      return props.data[USERID_KEY.value] || "未知用户";
    });
    const data = ref(props.data);
    const user_icon = ref(props.data[AVATAR_KEY.value]);
    const isLoading = ref(false);

    const isHigh = () => {
      if (global_always_avatar_is_hihglight) {
        return isFunction(global_always_avatar_is_hihglight) ? global_always_avatar_is_hihglight(data.value) : global_always_avatar_is_hihglight
      }
      return isFunction(props.is_highlight) ? props?.is_highlight(data.value) : props.is_highlight
    }

    const onClose = () => {
      emit("close")
    }
    const avatarRef = ref()
    const getPopupContainer = () => {
      console.log(avatarRef.value, "targetRef.value")
      return avatarRef.value
    }
    const popoverVisible = ref(false)
    return {
      user_name,
      dept_name,
      user_id,
      data,
      user_icon,
      isLoading,
      isHigh,
      props,
      attrs,
      emit,
      onClose,
      global_disabled_avatar_card,
      targetRef,
      avatarRef,
      popoverVisible
    }
  }
})
</script>
<style lang="less" scoped>
.boke-useravator-wrapper {
  display: inline-flex;
  position: relative;
  align-items: center;
  overflow: hidden;
  margin-left: 4px;
  border: none;

  &.ant-tag-default {
    cursor: default;
    background-color: transparent;

    &:hover {
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

.only-icon-style {
  padding: 0;
  margin: 0;
}
</style>
