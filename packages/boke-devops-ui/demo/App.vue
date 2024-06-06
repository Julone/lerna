<template>
  <BokeProvider>
    <div style="display: flex; align-items: center; padding: 12px">
      <BokeUserAvatar
      is_highlight
      tag
        :userinfo="{ name: 'Julone', dept_name: '运维部' }"
      ></BokeUserAvatar>
      <BokeUserSelect
        :options="option"
        v-model="user"
        style="max-width: 250px"
      ></BokeUserSelect>
    </div>
  </BokeProvider>
</template>
<script setup lang="ts">
import { computed, ref, onMounted } from "vue";
import { BokeProvider, BokeUserAvatar, BokeUserSelect } from "./../src/index";

const user = ref([]);
const option = ref([]);
onMounted(() => {
  option.value = Array.from({ length: 1000 }).map((item, index) => {
    return {
      label: "sdf",
      value: index,
      data: { name: "Julone", dept_name: "运维部" },
    };
  });
});
</script>
<style lang="less" scoped>
</style>
