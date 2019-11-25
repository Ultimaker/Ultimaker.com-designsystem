<template>
    <nav key="large-menu" class="main-nav" :class="classList" aria-label="site">
        <ul class="main-nav__list" role="menu" :class="{'main-nav__list-visible': mainNavOpen}">
            <main-navigation-item v-if="navigation" ref="navItem"
                                  v-for="(mainNavigationItem, index) in navigation" :key="index"
                                  :is-compact="showCompactMenu"
                                  :main-nav-open="mainNavOpen"
                                  :active="false"
                                  :itemId="'nav-' + index"
                                  v-bind="mainNavigationItem"
                                  @nav-assist-click="handleNavAssistClick"
            />
        </ul>
    </nav>
</template>

<script lang="ts">
    import Vue from 'vue';

    export default Vue.component('MainNavigation', {
        props: {
            navigation: {
                type: Array,
                required: true,
            },
            mainNavOpen: {
                type: Boolean,
                required: false,
            },
        },
        data() {
            return {
                showCompactMenu: false,
            }
        },
        computed: {
            classList(): object {
                return {
                    'main-nav--open': this.mainNavOpen,
                };
            }
        },
        methods: {
            handleNavAssistClick(stateChange): void {
                this.$emit('nav-assist-click', stateChange);
            }
        },
    });
</script>

