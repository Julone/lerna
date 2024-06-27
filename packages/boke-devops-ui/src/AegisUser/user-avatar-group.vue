<template>
  <a-typography-text v-if="!data || data.length === 0" type="info">{{props.placeholder}}</a-typography-text>
  <rmp-user-avatar v-else-if="data.length == 1" :data="data[0]" :key="data[0]?.[AVATAR_KEY]" :size="size" :hide-popover="false"
    :show-text="props.showText" :is_highlight="() => props.is_highlight(data[0])"  :tag="props.tag"></rmp-user-avatar>
  <a-popover v-else show-arrow placement="bottom" destroy-on-close>
    <div>
      <a-avatar-group>
        <template v-for="(el, index) in data">
          <a-avatar :src="el?.[AVATAR_KEY]" :key="el?.[AVATAR_KEY]" v-if="index < props.max"  :size="$props.size" :class="{ is_highlight: isH(el) }"></a-avatar>
        </template>
        <a-avatar v-if="props.max < data.length" shape="circle" style="background: rgb(103 103 103)" :size="$props.size"> 共{{ data.length }}人</a-avatar>
      </a-avatar-group>
    </div>
    <!-- <div slot="content">触发元素是指触发浮层内容显示的元素</div> -->
    <template #content>
      <div style="padding: 8px; max-width: 320px;  gap: 16px; display: flex; flex-wrap: wrap">
        <rmp-user-avatar v-for="(el, index) in data" :key="el?.[AVATAR_KEY]" :data="el" :size="'small'" :show-text="true"
          style="display: inline-flex" :is_highlight="() => props.is_highlight(el)" :tag="props.tag" ></rmp-user-avatar>
      </div>
    </template>
  </a-popover>
</template>

<script setup lang="tsx">
import {useAttrs} from "vue"
import RmpUserAvatar from './user-avatar.vue';
import { Popover as APopover, AvatarGroup as AAvatarGroup, Avatar as AAvatar, TypographyText as ATypographyText} from "ant-design-vue"
import { useCustomProps } from "./store"
import {isFunction} from "lodash-es"

const props = defineProps({
  data: {
    type: Array,
    default: () => [],
  },
  size: {
    type: String,
    default: '27px',
  },
  showText: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
    // default: (v)=>{
    //   console.log('%cpackagv', 'color: #007acc;', v, 'placeholder' in v);
    //   return 'placeholder' in v? v.placeholder : '暂无人员'
    // },
    default: "暂无人员"
  },
  max: {
    type: Number,
    default: 3,
  },
  is_highlight: {
    type: Function,
    default: (v) => {
      return false
    }
  },
  tag: {
    type: Boolean,
  }
});

const attrs = useAttrs()
const { AVATAR_KEY, global_always_avatar_is_hihglight, NAME_KEY, DEPT_KEY } = useCustomProps()
const isH = (item) => {
  if(global_always_avatar_is_hihglight) {
    return isFunction(global_always_avatar_is_hihglight)? global_always_avatar_is_hihglight(item): global_always_avatar_is_hihglight
  }
  return (isFunction(props.is_highlight)? props?.is_highlight(item): props.is_highlight)
}
</script>
<style lang="less" scoped>
.is_highlight{
  box-shadow: 0 2px 8px -1px var(--boke-color-primary);
}
</style>
