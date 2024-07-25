<template>
<div>
  <BokeUserAvatar
      tag
      :data="data"
  ></BokeUserAvatar>
  无数据的时候
  <BokeUserAvatar
      tag
      :data="{}"
  ></BokeUserAvatar>
</div>

</template>

<script setup>

import {BokeProvider, BokeUserAvatar} from '@devops/boke-devops-vue';

const data = {
  name: 'Julone', // Yes
  cmdb_name: "Julone-new", // No
  dept_name: '运维部',
  avatar: 'https://s1-imfile.feishucdn.com/static-resource/v1/v3_009p_b3b75461-971a-41e0-ac58-f755d34ef05g~?image_size=noop&cut_type=&quality=&format=png&sticker_format=.webp'
}
</script>