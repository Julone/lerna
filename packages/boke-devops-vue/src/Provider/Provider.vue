<template>
    <slot name="default"></slot>
</template>
<script setup lang="tsx">
import {provide} from "vue"
import {  mergeConfig } from "./store
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
</script>
