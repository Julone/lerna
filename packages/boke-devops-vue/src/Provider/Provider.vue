<template>
  <slot name="default"></slot>
</template>
<script setup lang="tsx">
import {provide} from "vue"
import {mergeConfig} from "./store"
import {version} from "./../../package.json"

const props = defineProps({
  "globalConfig": {
    type: Object,
    default: () => ({})
  },
  "globalState": {
    type: Object,
    default: () => ({})
  }
})

const {gc, gs} = mergeConfig(props)
provide("globalConfig", gc)
provide("globalState", gs)

console.log(
      ` %c ${'@devops/boke-devops-vue'}  %c 由 BOKE运维部 构建 v${version} `,
      'color: #fff; background: #ea3c37; padding:5px 0;',
      'background: #333; color: #fff; padding:5px 0;',
    );
</script>
