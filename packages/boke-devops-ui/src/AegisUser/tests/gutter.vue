<template>
</template>

<script lang="jsx">
    import {defineComponent} from "vue"
    export default defineComponent({
        name: "gutter",
        slots: {
            default: () => []
        },
        setup(props, {slots}) {
            return () => {
                return <div class="gutter">
                    {slots.default}
                </div>
            }
        }
    })
</script>