## boke-devops-vue
练习时长2天半的组件库

## 安装

```bash
npm i @devops/boke-devops-vue --registry=https://nexus3.pocketcity.com/repository/boke-npm-public/
```

## 使用

```vue
<template>
  <BokeProvider>
    <div style="display: flex; align-items: center; padding: 12px">
      <BokeUserAvatar
        :userinfo="{ name: 'Test', dept_name: '运维部' }"
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
import { BokeProvider, BokeUserAvatar, BokeUserSelect } from "@devops/boke-devops-vue";

const user = ref([]);
const option = ref([]);
onMounted(() => {
  option.value = Array.from({ length: 1000 }).map((item, index) => {
    return {
      label: "sdf",
      value: index,
      data: { name: "Test", dept_name: "运维部" },
    };
  });
});
</script>
<style lang="less" scoped>
</style>
```
