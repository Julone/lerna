<template>
    <slot name="default"></slot>
</template>
<script setup lang="tsx">
import { onMounted } from 'vue';
import blankVue from "./blank.vue"
import _ from "lodash"

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
        if (!_.isEmpty(props.mapRoutes)) {
            const namespace = props.appName;

            const rootRoutes = {
                name: namespace,
                components: {
                    default: blankVue,
                },
                children: _.cloneDeep(props.mapRoutes).map(function digui(element) {
                    element.name = namespace + '_' + element.name;
                    element.path = `/${namespace}/` + (element.path.startsWith('/') ? element.path.substring(1) : element.path);
                    if (element.children) {
                        element.children = element.children.map(digui)
                    }
                    return element
                }),
            }
            props.router.addRoute(rootRoutes);
            props.router.replace(props.router.currentRoute.value.fullPath)
        }

        props.router.beforeEach((to, from, next)=> {
            if(window.$wujie?.bus) {
                window.$wujie?.bus.$emit("sub-route-change", props.appName, to.fullPath);// child to parent
                next()
            }else {
                next()
            }
        })

        window.$wujie.bus.$on(props.appName + '-router-change', (path: string) => {
            props.router.push(path)
        })
    }
})



</script>
