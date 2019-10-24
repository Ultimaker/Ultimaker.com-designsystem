<template>
    <button class="toggle" @click="toggle">
        <icon class="toggle__icon" :icon-name="toggleIcon"></icon>
        <span class="toggle__icon-text">{{ toggleText }}</span>
    </button>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.component('ContentToggle', {
        props: {
            collapseIcon: {
                type: String,
                required: false,
                default: 'angle-up',
            },
            collapseText: {
                type: String,
                required: false,
                default: 'Less',
            },
            expandIcon: {
                type: String,
                required: false,
                default: 'angle-down',
            },
            expandText: {
                type: String,
                required: false,
                default: 'More',
            },
            initiallyExpanded: {
                type: Boolean,
                required: false,
            },
            preventDefault: {
                type: Boolean,
                default: true,
            },
        },
        data() {
            return {
                expanded: this.initiallyExpanded || false
            }
        },
        computed: {
            toggleIcon(): string {
                return this.expanded ? this.collapseIcon : this.expandIcon;
            },
            toggleText(): string {
                return this.expanded ? this.collapseText : this.expandText;
            },
        },
        methods: {
            toggle(evt: Event): void {
                if (this.preventDefault) {
                    evt.preventDefault();
                }

                this.expanded = !this.expanded;
                this.$emit('content-toggle', { expanded: this.expanded });
            }
        }
    });
</script>
