<template>
  <a-typography-text v-if="!data || data.length === 0" type="info">{{props.placeholder}}</a-typography-text>
  <rmp-user-avatar v-else-if="data.length == 1" :data="data[0]" :size="size" :hide-popover="false"
    :show-text="props.showText"></rmp-user-avatar>
  <a-popover v-else show-arrow placement="bottom" destroy-on-close>
    <div>
      <a-avatar-group>
        <a-avatar :src="el?.[AVATAR_KEY]" v-for="(el, index) in data" v-show="index < props.max" :size="$props.size"></a-avatar>
        <a-avatar v-if="props.max < data.length" shape="circle" style="background: rgb(103 103 103)" :size="$props.size"> 共{{ data.length }}人</a-avatar>
      </a-avatar-group>
    </div>
    <!-- <div slot="content">触发元素是指触发浮层内容显示的元素</div> -->
    <template #content>
      <div style="padding: 8px; max-width: 320px;  gap: 16px; display: flex; flex-wrap: wrap">
        <rmp-user-avatar v-for="(el, index) in data" :key="index" :data="el" :size="'small'" :show-text="true"
          style="display: inline-flex"></rmp-user-avatar>
      </div>
    </template>
  </a-popover>
</template>

<script setup lang="tsx">
import RmpUserAvatar from './user-avatar.vue';
import { Popover as APopover, AvatarGroup as AAvatarGroup, Avatar as AAvatar, TypographyText as ATypographyText} from "ant-design-vue"
import { useCustomProps } from "./store"

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
});
const { AVATAR_KEY } = useCustomProps()

</script>
<style lang="less" scoped></style>
