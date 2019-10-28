<template>
    <div :id="id" class="tabs__content" v-show="active" role="tabpanel" :aria-hidden="!active" :aria-label="label">
        <template v-show="content">
            <component :is="content.type"
                       v-bind="content">
            </component>
        </template>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.component('Tab', {
        props: {
            id: {
                type: String,
                required: true
            },
            label: {
                type: String,
                required: true,
            },
            content: {
                type: Object,
                required: true,
            },
            active: {
                type: Boolean,
                required: true,
            },
        },
    });
</script>
