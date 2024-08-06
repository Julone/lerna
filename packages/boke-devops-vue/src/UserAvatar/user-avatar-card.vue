<template>
    <div
      class="mps-user-avator-rich-conent"
      style="display: flex; gap: 16px; flex-direction: row;     align-items: flex-start;"
    >
      <div style="z-index: 2">
        <img :src="userinfo.user_icon" style="width: 70px; height: 70px;border-radius: 500px;margin-top: 10px;" />
      </div>
      <div style="z-index: 2">
        <p
          class="demo-rich-content__name"
          style="margin: 0 0 6px 0; font-weight: 500"
        >
          <a-space :size="12" :spacer="spacer" :wrap="false">
            <span style="font-weight:bold">{{ userinfo.user_name }}</span>
            <span class="dept_class">{{ userinfo.dept_name }}</span>
            <span class="dept_class" v-if="userinfo.dept_name != extraInfo?.min_fs_department_name && extraInfo?.min_fs_department_name">{{ extraInfo?.min_fs_department_name }}</span>
          </a-space>
        </p>
        <p
            v-if="extraInfo"
          class="demo-rich-content__mention"
          style="
            margin: 0 0 8px 0;
            font-size: 14px;
            color: var(--el-color-info);
          "
        >
          <a-space :wrap="true" :size="2">
            <ATag :bordered="false" color="orange" v-for="el in extraInfogroups" :key="el.name" size="small">
              {{el.name}}
            </ATag>
            <a-button  type="link" size="small"  @click="seeAllRoles = !seeAllRoles, $emit('pinCard')" style="zoom: 0.8">关联角色({{extraInfogroupsCount}})<CaretDownOutlined :rotate="seeAllRoles?180: 0" /></a-button>
          </a-space>
        </p>
        <p
            v-if="extraInfo"
            class="demo-rich-content__mention"
            style="
            margin: 0 0 6px 0;
            font-size: 14px;
            color: var(--el-color-info);
          "
        >
          <a-space :wrap="true" :size="2">
            <MpsRoleTag v-for="(el,index) in projectslist"  :key="el" size="small">
              {{el}}
            </MpsRoleTag>
            <a-button  type="link" size="small"  @click="seeAllProjects = !seeAllProjects, $emit('pinCard')" style="zoom: 0.8">关联项目({{projectslistCount}})<CaretDownOutlined :rotate="seeAllProjects?180: 0" /></a-button>
          </a-space>
        </p>
        <p  class="demo-rich-content__desc" style="margin:  8px 0 0">
          <a-space :size="2" :spacer="spacer">
            <a-button
                type="primary"
              size="small"
                :disabled="!extraInfo"
              @click="onChat(extraInfo?.fs_open_id)"
            >
              飞书联系
            </a-button>
          </a-space>
        </p>
        <a style="position:absolute; right: 8px; bottom: 8px;float:right; font-size: 12px; opacity: 0.8; color: #ccc; transform: translateY(0px)" href="https://devops.pocketcity.com/">数据来源: Aegis</a>

      </div>
      <div
        class="mps-user-avator-rich-conent_after"
        :style="{
          'background-image': `url('https://sf3-scmcdn-cn.feishucdn.com/obj/feishu-static/lark/open/app_store/images/banner-2c2539b4.png')`,
          opacity: 0.4,
          'background-size': 'cover',
          'background-position-y': '-30px',
        }"
      ></div>
    </div>
</template>
<style lang="scss" scoped>
  .mps-user-avator-rich-conent {
    min-width: 270px;
    max-width: 350px;
    :deep(.el-avatar) {
      img {
        width: 100%;
        cursor: zoom-in;
      }
    }
    :deep(.dept_class){
      color: #333;
      font-size: 12px;
    }

    .mps-user-avator-rich-conent_after {
      content: '';
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      top: 0px;
      z-index: 1;
      border-radius: 8px;

      background-repeat: no-repeat;
      background-size: contain;
      background-position: left top;
    }
  }
</style>
<script>
  import { defineComponent, createVNode } from 'vue'
  import {Tag as ATag ,Divider as ADivider, Space as ASpace, Button as AButton} from "ant-design-vue"
  import {hex_sha1} from "./encode";
  import {globalConfig}  from "./../Provider/store"
  import {CaretDownOutlined} from "@ant-design/icons-vue"
  export default defineComponent({
    props: ['userinfo'],
    components: { MpsRoleTag: ATag,  MpsGroupTag: ATag, MpsDictTag: ATag ,ASpace,AButton,ATag,CaretDownOutlined},
    emit: ['pinCard'],
    data() {
      return {
        showViewer: false,
        spacer: createVNode(ADivider, {
          direction: 'vertical',
          style: { margin: '0 2px' },
        }),
        isDark: false,
        extraInfo: null,
        seeAllProjects:  false,
        seeAllRoles: false
      }
    },
    computed: {
      projectslist(){
        return (this.extraInfo?.projects_list || []).filter((item, index) => {
          if(this.seeAllProjects) {
            return true
          }
          return index < 4
        })
      },
      projectslistCount(){
        return (this.extraInfo?.projects_list || [])?.length
      },
      extraInfogroups(){
        return (this.extraInfo?.groups || []).filter((item, index) => {
          if(this.seeAllRoles) {
            return true
          }
          return index < 4
        })
      },
      extraInfogroupsCount(){
        return (this.extraInfo?.groups || []).length
      }

    },
    methods: {
      onChat(account) {
        window.open(`feishu://applink.feishu.cn/client/chat/open?openId=${account}`)
      },
    },
    mounted() {
      // 预备参数
      const jsapi_ticket = Math.random().toString(36).substr(2, 18)
      const noncestr = Math.random().toString(36).substr(2, 7)
      const user_id =  this.userinfo?.user_id
      const timestamp = Date.now()
      // 加密参数生成签名
      const encode = `jsapi_ticket=${jsapi_ticket}&noncestr=${noncestr}&user_id=${user_id}&timestamp=${timestamp}`
      const signature = hex_sha1(encode)
      // 查询
      const api = `/users/getUserInfo/?${encode}&signature=${signature}`
      fetch(globalConfig.avatarCard.api_url + api,).then(res=> res.json()).then(res=> {
        if (res.code == 0) {
          this.extraInfo = res.data
        }
      })
    },
  })
</script>

