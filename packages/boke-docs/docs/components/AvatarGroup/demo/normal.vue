<template>
<div>
  <BokeUserAvatarGroup
      tag
      :data="data"
  ></BokeUserAvatarGroup>

</div>

</template>

<script setup>

import {BokeProvider, BokeUserAvatarGroup} from '@devops/boke-devops-vue';

const data = [
    {
  name: 'Julone', // Yes
  cmdb_name: "Julone-new", // No
  dept_name: '运维部',
  avatar: 'https://s1-imfile.feishucdn.com/static-resource/v1/v3_009p_b3b75461-971a-41e0-ac58-f755d34ef05g~?image_size=noop&cut_type=&quality=&format=png&sticker_format=.webp'
},
    {
  name: 'Julone2', // Yes
  cmdb_name: "Julone-new", // No
  dept_name: '运维部',
  avatar: 'https://s1-imfile.feishucdn.com/static-resource/v1/v3_009p_b3b75461-971a-41e0-ac58-f755d34ef05g~?image_size=noop&cut_type=&quality=&format=png&sticker_format=.webp'
},
    {
  name: 'Julone3', // Yes
  cmdb_name: "Julone-new", // No
  dept_name: '运维部',
  avatar: 'https://s1-imfile.feishucdn.com/static-resource/v1/v3_009p_b3b75461-971a-41e0-ac58-f755d34ef05g~?image_size=noop&cut_type=&quality=&format=png&sticker_format=.webp'
}
]
</script>