<template>
  <div>
    <h4>Inside of Provider</h4>
    <BokeProvider :globalConfig="globalConfig" :globalState="globalState">
      <BokeUserAvatar
          tag
          :data="data"
      ></BokeUserAvatar>
    </BokeProvider>
    <h4>Out of Provider</h4>
    <BokeUserAvatar
        tag
        :data="data"
    ></BokeUserAvatar>
  </div>
</template>

<script setup>

import {BokeProvider, BokeUserAvatar} from '@devops/boke-devops-vue';

const globalConfig = {
  avatar: {
    user_name: "cmdb_name"
  },
  avatarCard: {
    enabled: false
  }
}
const globalState = {
  global_always_avatar_is_hihglight: userinfo=>{ // 是否高亮Avatar
    return true
  }
}
const data = {
  name: 'Julone', // 原先的, 失效
  cmdb_name: "Julone-new", // 生效!
  dept_name: '运维部',
  user_id: 1,
  avatar: 'https://s1-imfile.feishucdn.com/static-resource/v1/v3_009p_b3b75461-971a-41e0-ac58-f755d34ef05g~?image_size=noop&cut_type=&quality=&format=png&sticker_format=.webp'
}
</script>