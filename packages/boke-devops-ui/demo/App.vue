<template>
  <BokeProvider :globalConfig="globalConfig" :globalState="globalState">
    <div style="display: flex; align-items: center; padding: 12px">
        <BokeUserAvatar
          :is_highlight="true"
          tag
          :data="{ name: 'Julone', dept_name: '运维部', avatar:'https://s1-imfile.feishucdn.com/static-resource/v1/v3_009p_b3b75461-971a-41e0-ac58-f755d34ef05g~?image_size=noop&cut_type=&quality=&format=png&sticker_format=.webp' }"
        ></BokeUserAvatar>

        <BokeUserAvatarGroup 
        :tag="true"
        :data="options.map(item => item.data)"
        :is_highlight="v=> {
          console.log(v);
          return false
        }"
      ></BokeUserAvatarGroup>

      <BokeUserAvatarGroup 
          :tag="true"
      :data="options.map(item => item.data).filter((item, index) => index ==0)"
    ></BokeUserAvatarGroup>
      <BokeUserAvatarGroup 
        :data="[]"
        tag
        placeholder=""
      ></BokeUserAvatarGroup>
      <BokeUserSelect
        :options="options"
        v-model="user"
        style="max-width: 250px"
        :customProps="{user_name: 'name'}"

      ></BokeUserSelect>
    </div>
  </BokeProvider>
</template>
<script setup lang="ts">
import { computed, ref, onMounted } from "vue";
import { BokeProvider, BokeUserAvatar, BokeUserSelect, BokeUserAvatarGroup } from "./../src/index";

const user = ref([]);
const options = ref([]);
onMounted(() => {
  options.value = [{"user_id":1,"name":"聂强龙","fs_open_id":"ou_d062833bcd23179eecaef55419a86379","open_id":"ou_d062833bcd23179eecaef55419a86379","dept_name":"运维部","avatar":"https://s1-imfile.feishucdn.com/static-resource/v1/v3_006i_70c45b5c-c78b-41a9-adb3-35eb77127d4g~?image_size=noop&cut_type=&quality=&format=png&sticker_format=.webp"},{"user_id":3,"name":"黄彬彬","fs_open_id":"ou_5b974bd6586d74051e2cb2a9f9684ff7","open_id":"bebe3dd0a6020c86e6938eda42efb9ff","dept_name":"运维部","avatar":"https://s1-imfile.feishucdn.com/static-resource/v1/90c6ee91-ba4f-4fcc-9a2b-565a43a8982g~?image_size=noop&cut_type=&quality=&format=png&sticker_format=.webp"},{"user_id":4,"name":"李铎","fs_open_id":"ou_04ccaa26d69b8738a2618bcb9a1a88d0","open_id":"ou_04ccaa26d69b8738a2618bcb9a1a88d0","dept_name":"运维部","avatar":"https://s1-imfile.feishucdn.com/static-resource/v1/v2_60faa7d1-caa4-4b50-abdf-c20f6538976g~?image_size=noop&cut_type=&quality=&format=png&sticker_format=.webp"},{"user_id":6,"name":"陈路","fs_open_id":"ou_a3cbf13858699b18f98ce4a98f7af295","open_id":"ou_a3cbf13858699b18f98ce4a98f7af295","dept_name":"运维部","avatar":"https://s1-imfile.feishucdn.com/static-resource/v1/v2_a4b7d76d-78f7-4c03-a02b-2df0d26c069g~?image_size=noop&cut_type=&quality=&format=png&sticker_format=.webp"},{"user_id":7,"name":"肖芳强","fs_open_id":"ou_ad94ea704a428f327b9cfe3206bbbd33","open_id":"ou_ad94ea704a428f327b9cfe3206bbbd33","dept_name":"运维部","avatar":"https://s1-imfile.feishucdn.com/static-resource/v1/v2_a225d0f6-e822-4cb4-86ef-9e7a1ac276cg~?image_size=noop&cut_type=&quality=&format=png&sticker_format=.webp"},{"user_id":9,"name":"李坚","fs_open_id":"ou_cc35f3da7e1a374c92436266101bff50","open_id":"ou_cc35f3da7e1a374c92436266101bff50","dept_name":"运维部","avatar":"https://s1-imfile.feishucdn.com/static-resource/v1/v2_f05ccef0-b501-4d29-a274-fe20375757bg~?image_size=noop&cut_type=&quality=&format=png&sticker_format=.webp"},{"user_id":11,"name":"王浩","fs_open_id":"ou_5bb1d1c3308a38a4eacf82570036de64","open_id":"ou_5bb1d1c3308a38a4eacf82570036de64","dept_name":"运维部","avatar":"https://s1-imfile.feishucdn.com/static-resource/v1/v3_006j_bf38834b-ba16-4bbd-aa56-a0409ec1bbcg~?image_size=noop&cut_type=&quality=&format=png&sticker_format=.webp"},{"user_id":12,"name":"韩旭","fs_open_id":"ou_db77e3fa79b4e9dfd6eb2868e91ccf34","open_id":"ou_db77e3fa79b4e9dfd6eb2868e91ccf34","dept_name":"运维部","avatar":"https://s1-imfile.feishucdn.com/static-resource/v1/v3_00ah_c23471a3-0a0c-4d35-933b-447c78018d4g~?image_size=noop&cut_type=&quality=&format=png&sticker_format=.webp"},{"user_id":15,"name":"王佳","fs_open_id":"ou_1ef54baae2e6bc3963e51b1881a979af","open_id":"ou_1ef54baae2e6bc3963e51b1881a979af","dept_name":"运维部","avatar":"https://s1-imfile.feishucdn.com/static-resource/v1/v2_c94685a3-2668-4dc4-885a-655e6e769a5g~?image_size=noop&cut_type=&quality=&format=png&sticker_format=.webp"},{"user_id":20,"name":"孙好强","fs_open_id":"ou_2b1d824284611e9886fc48c67115211e","open_id":"ou_2b1d824284611e9886fc48c67115211e","dept_name":"运维部","avatar":"https://s1-imfile.feishucdn.com/static-resource/v1/v2_21f32dbc-3708-4d40-b057-69170ea2f6bg~?image_size=noop&cut_type=&quality=&format=png&sticker_format=.webp"},{"user_id":187,"name":"张鑫泽","fs_open_id":"ou_84a97b641f012e88b116cd7fcce07811","open_id":"ou_84a97b641f012e88b116cd7fcce07811","dept_name":"运维部","avatar":"https://s1-imfile.feishucdn.com/static-resource/v1/v3_009b_da2c8565-03e0-40b8-92ad-65eb18d89b5g~?image_size=noop&cut_type=&quality=&format=png&sticker_format=.webp"},{"user_id":191,"name":"豆士博","fs_open_id":"ou_21b730795b2c15ca3f04fefb50140c6c","open_id":"ou_21b730795b2c15ca3f04fefb50140c6c","dept_name":"运维部","avatar":"https://s1-imfile.feishucdn.com/static-resource/v1/v3_008s_c9e26c1a-f2d7-4212-855a-8f044d3f98eg~?image_size=noop&cut_type=&quality=&format=png&sticker_format=.webp"},{"user_id":215,"name":"曾庆亮","fs_open_id":"ou_53698354af5ce4c46ea9a007dde57e28","open_id":"ou_53698354af5ce4c46ea9a007dde57e28","dept_name":"运维部","avatar":"https://s1-imfile.feishucdn.com/static-resource/v1/v2_fe4224d1-c3b2-4012-914f-b52bf9a6bd1g~?image_size=noop&cut_type=&quality=&format=png&sticker_format=.webp"},{"user_id":219,"name":"吴浩阳","fs_open_id":"ou_ad2b3e250b3b53b54881f61f4ee070da","open_id":"ou_ad2b3e250b3b53b54881f61f4ee070da","dept_name":"运维部","avatar":"https://s1-imfile.feishucdn.com/static-resource/v1/v2_02a850f2-75c1-4fcf-8730-ac15bc84e66g~?image_size=noop&cut_type=&quality=&format=png&sticker_format=.webp"},{"user_id":230,"name":"邹伟诚","fs_open_id":"ou_735cc07f54d57ef38f2f9056e8a02414","open_id":"ou_735cc07f54d57ef38f2f9056e8a02414","dept_name":"运维部","avatar":"https://s1-imfile.feishucdn.com/static-resource/v1/v3_009g_27afbb84-5aad-43d9-85a5-dd19eca504eg~?image_size=noop&cut_type=&quality=&format=png&sticker_format=.webp"},{"user_id":271,"name":"张磊","fs_open_id":"ou_54a618646a90d8a10f98595bb4b21b2e","open_id":"ou_54a618646a90d8a10f98595bb4b21b2e","dept_name":"运维部","avatar":"https://s1-imfile.feishucdn.com/static-resource/v1/v2_3117aa81-7b82-4fc4-aba3-fb7c7cf9bbbg~?image_size=noop&cut_type=&quality=&format=png&sticker_format=.webp"},{"user_id":307,"name":"吴力","fs_open_id":"ou_01c757965611e7728a4016e619da5776","open_id":"ou_01c757965611e7728a4016e619da5776","dept_name":"运维部","avatar":"https://s1-imfile.feishucdn.com/static-resource/v1/v3_00ak_1f096aae-758e-4e9e-8b38-9991db1b58bg~?image_size=noop&cut_type=&quality=&format=png&sticker_format=.webp"},{"user_id":396,"name":"陈静雯","fs_open_id":"ou_e035b86109bd6956a4298fcf451c82b9","open_id":"ou_e035b86109bd6956a4298fcf451c82b9","dept_name":"运维部","avatar":"https://s1-imfile.feishucdn.com/static-resource/v1/v2_23bf81ae-1a7f-431e-9fb2-2fa487b30a0g~?image_size=noop&cut_type=&quality=&format=png&sticker_format=.webp"},{"user_id":465,"name":"周志鹏","fs_open_id":"ou_09e48cc682863431a43f136411a5da9f","open_id":"ou_09e48cc682863431a43f136411a5da9f","dept_name":"运维部","avatar":"https://s1-imfile.feishucdn.com/static-resource/v1/v3_009n_a0c9ae13-dda1-4d9c-8d12-f0eec8a0307g~?image_size=noop&cut_type=&quality=&format=png&sticker_format=.webp"},{"user_id":484,"name":"李建恒","fs_open_id":"ou_09505779bcb6a21e9d8a6ed56ae7e27e","open_id":"ou_09505779bcb6a21e9d8a6ed56ae7e27e","dept_name":"运维部","avatar":"https://s1-imfile.feishucdn.com/static-resource/v1/v3_006i_8fbd2748-a570-40a8-b3de-f248cd770fag~?image_size=noop&cut_type=&quality=&format=png&sticker_format=.webp"},{"user_id":502,"name":"高靖松","fs_open_id":"ou_244ed287214fd727f55ef0283a2855f7","open_id":"ou_244ed287214fd727f55ef0283a2855f7","dept_name":"运维部","avatar":"https://s1-imfile.feishucdn.com/static-resource/v1/v3_006t_bfd84ae9-838f-4b52-ac31-64bbaa29b07g~?image_size=noop&cut_type=&quality=&format=png&sticker_format=.webp"},{"user_id":506,"name":"支嘉彬","fs_open_id":"ou_37665560cf00b991d6d9da87169f9b1b","open_id":"ou_37665560cf00b991d6d9da87169f9b1b","dept_name":"运维部","avatar":"https://s1-imfile.feishucdn.com/static-resource/v1/v3_0093_4839b7de-63d9-4b62-99b6-57dc903c1b7g~?image_size=noop&cut_type=&quality=&format=png&sticker_format=.webp"},{"user_id":511,"name":"宋方域","fs_open_id":"ou_b8c12844881af96b84edff545897204b","open_id":"ou_b8c12844881af96b84edff545897204b","dept_name":"运维部","avatar":"https://s1-imfile.feishucdn.com/static-resource/v1/v3_006o_3f170624-82ea-42db-b82b-d6f8bd0e924g~?image_size=noop&cut_type=&quality=&format=png&sticker_format=.webp"},{"user_id":608,"name":"李祖龙","fs_open_id":"ou_1db5e6731088d670983c43b8a5546c23","open_id":"ou_1db5e6731088d670983c43b8a5546c23","dept_name":"运维部","avatar":"https://s1-imfile.feishucdn.com/static-resource/v1/v3_009p_b3b75461-971a-41e0-ac58-f755d34ef05g~?image_size=noop&cut_type=&quality=&format=png&sticker_format=.webp"},{"user_id":617,"name":"项行舟","fs_open_id":"ou_f22b04ae05e7ecf39ebbd681b91ccca8","open_id":"ou_f22b04ae05e7ecf39ebbd681b91ccca8","dept_name":"运维部","avatar":"https://s1-imfile.feishucdn.com/static-resource/v1/v3_00a7_0376c6cf-0eb3-44f5-809a-9b160f5b646g~?image_size=noop&cut_type=&quality=&format=png&sticker_format=.webp"},{"user_id":622,"name":"舒常思","fs_open_id":"ou_604edc50311dc25242cfecb6653657b5","open_id":"ou_604edc50311dc25242cfecb6653657b5","dept_name":"运维部","avatar":"https://s1-imfile.feishucdn.com/static-resource/v1/v3_008b_7be9a1ee-6b03-45e7-b4ab-53e3d65bf91g~?image_size=noop&cut_type=&quality=&format=png&sticker_format=.webp"},{"user_id":623,"name":"孙雪晴","fs_open_id":"ou_6cf5905c4021555e393c9658c8b484d4","open_id":"ou_6cf5905c4021555e393c9658c8b484d4","dept_name":"运维部","avatar":"https://s1-imfile.feishucdn.com/static-resource/v1/v2_2cca6fde-b584-4f75-8dff-81ca4866774g~?image_size=noop&cut_type=&quality=&format=png&sticker_format=.webp"}].map((item, index) => {
    return {
      label: item.name,
      value: item.user_id,
      data: { ...item },
    };
  });
});
const globalConfig = { "avatar": { "user_name": "name", "dept_name": "dept_name", "user_avatar": "avatar" } }
const globalState={
  // global_always_avatar_is_hihglight(item){
  //   return false
  // },
  global_always_avatar_is_hihglight: null
}
</script>
<style lang="less" scoped>
</style>
