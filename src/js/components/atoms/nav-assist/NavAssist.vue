<template>
    <button type="button" @click="toggleState" @keyup.esc="close" class="nav-assist"
            :class="{'nav-assist--close': this.openState, 'nav-assist--initial-state': this.inInitialState}" aria-label="menu"
            :aria-expanded="ariaExpanded">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <rect class="nav-assist__line nav-assist__line-2" x="2" y="11" width="20" height="2"/>
            <rect class="nav-assist__line nav-assist__line-1" x="2" y="4.5" width="20" height="2"/>
            <rect class="nav-assist__line nav-assist__line-3" x="2" y="17.5" width="20" height="2"/>
            <rect class="nav-assist__line nav-assist__line-4" x="-1.3" y="11" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -4.9706 12)" width="26.6" height="2"/>
            <rect class="nav-assist__line nav-assist__line-5" x="11" y="-1.3" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -4.9706 12)" width="2" height="26.6"/>
        </svg>
    </button>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.component('NavAssist', {
    props: {
        openState: {
            type: Boolean,
            default: false,
        },
    },
    data() {
        return {
            inInitialState: true,
        }
    },
    computed: {
        ariaExpanded(): string {
            return this.openState.toString();
        }
    },
    methods: {
        toggleState(): any {
            this.inInitialState = false;

            if (this.openState) {
                return this.$emit('nav-assist-click', 'close-mobile-nav');
            }

            return this.$emit('nav-assist-click', 'open-mobile-nav');
        },
        close(): void {
            if (this.openState) {
                this.$emit('nav-assist-click', 'close-mobile-nav');
            }
        }
    }
});
</script>
