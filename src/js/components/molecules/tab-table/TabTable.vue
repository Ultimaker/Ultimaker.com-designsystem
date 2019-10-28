<template>
    <div class="flexgrid flexgrid--mobile-xl-row">
        <div :id="id" class="tab-table__content flexgrid__cell--sm-8"  v-show="active" role="tabpanel" :aria-hidden="!active" :aria-label="label">
            <component :is="row.type" v-bind="row" v-for="row in rows" />
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.component('TabTable', {
        props: {
            id: {
                type: String,
                required: true,
            },
            label: {
                type: String,
                required: true,
            },
            rows: {
                type: Array,
                required: true,
            },
            active: {
                type: Boolean,
                required: true,
            },
        },
    });
</script>
