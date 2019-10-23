<template>
    <a href="#" :class="classObject">
        <icon v-if="icon" :icon-name="icon" />
        <slot></slot>
    </a>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.component('ActionButton', {
    props: {
        block: {
            type: String,
            required: false,
        },
        mod: {
            type: String,
            required: false,
        },
        icon: {
            type: String,
            required: false,
        },
        label: {
            type: String,
            required: false,
        },
    },
    computed: {
        classObject: function() {
            const classes = {};

            if (this.block !== '' && typeof this.block === 'string') {
                classes[`${this.block}__link`] = true;
            }
            if (this.mod !== '' && typeof this.mod === 'string') {
                this.mod.split(' ').forEach((mod) => {
                    classes[`link--${mod}`] = true;
                });
            }
            if (this.icon !== '' && this.mod && this.mod.indexOf('small') === -1) {
                classes['link--icon'] = true;
            }

            return classes;
        }
    }
})
</script>
