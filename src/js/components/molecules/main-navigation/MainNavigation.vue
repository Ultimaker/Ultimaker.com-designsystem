<template>
    <nav key="large-menu" class="main-nav" :class="classList" aria-label="site">
        <ul class="main-nav__list" role="menu" :class="{'main-nav__list-visible': mainNavOpen && showCompactMenu}">
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
    import ViewportUtility from '../../../utils/viewport';

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
                viewportUtil: new ViewportUtility(),
                showCompactMenu: false,
            }
        },
        computed: {
            classList(): object {
                return {
                    'main-nav--small': this.showCompactMenu,
                    'main-nav--large': !this.showCompactMenu,
                    'main-nav--open': this.mainNavOpen && this.showCompactMenu,
                };
            }
        },
        methods: {
            handleNavAssistClick(stateChange): void {
                this.$emit('nav-assist-click', stateChange);
            },
            handleResize(): void {
                this.showCompactMenu = this.viewportUtil.isTablet;

                if (!this.showCompactMenu) {
                    this.$emit('show-compact-menu', false);
                }
            }
        },
        mounted(): void {
            this.viewportUtil.addResizeHandler(this.handleResize);
            this.showCompactMenu = this.viewportUtil.isTablet;
        },
        beforeDestroy(): void {
            this.viewportUtil.removeResizeHandler(this.handleResize);
        }
    });
</script>
