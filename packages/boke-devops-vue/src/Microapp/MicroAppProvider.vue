<template>
    <slot name="default"></slot>
</template>
<script setup lang="jsx">
import { onMounted } from 'vue';
import {isEmpty,cloneDeep } from "lodash-es"

const props = defineProps({
    'appName': {
        type: String,
        default: 'sub',
        require: true,
    },
    'runtime_mode': {
        type: String,
        default: 'alive'
    },
    "mapRoutes": {
        type: Array,
        default: []
    },
    "router": {
        type: Object,
    },
})

const isWujieEnv = !!window.$wujie;

onMounted(() => {
    if (isWujieEnv) {
        if (!isEmpty(props.mapRoutes)) {
            const namespace = props.appName;
        }

        props.router.beforeEach((to, from, next)=> {
            if(window.$wujie?.bus) {
                window.$wujie?.bus.$emit("sub-route-change", props.appName, to.fullPath);// child to parent
                next()
            }else {
                next()
            }
        })

        window.$wujie.bus.$on(props.appName + '-router-change', (path) => {
            props.router.push(path)
        })
    }
})

</script>
