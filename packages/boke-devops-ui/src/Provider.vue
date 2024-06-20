<template>
    <slot name="default"></slot>
</template>
<script setup lang="tsx">

import { globalConfig, mergeConfig } from "./store"
const props = defineProps({
  "globalConfig": {
    type: Object,
    default: () => ({})
  }
})

if (props.globalConfig) {
  mergeConfig(props.globalConfig)
}
</script>
