<template>
    <header class="header header--fixed" :lang="language" role="banner">
        <div class="header__top" :class="{'header--mobile-inverted': mainNavOpen}">
            <a :href="homepageUrl" class="home-link" aria-label="Ultimaker homepage">
                <icon class="home-link__logo" icon-name="logo-ultimaker"></icon>
            </a>

            <main-navigation v-if="navigation" :navigation="navigation" :main-nav-open="mainNavOpen"
                             @nav-assist-click="handleNavAssistClick"></main-navigation>

            <sys-nav v-if="cta && search" @open-search="openSearch"
                     :order-now-icon="cta.icon" :order-now-label="cta.label" :order-now-link="cta.url"
                     :search-icon="search.icon" :search-label="search.label">
            </sys-nav>

            <nav-assist class="main-nav__nav-assist" :open-state="mainNavOpen"
                        @nav-assist-click="handleNavAssistClick"></nav-assist>

            <transition name="search" @after-enter="handleFocus" @leave="handleFocus">
                <search-bar class="header__search"
                            ref="search"
                            :label="search.label"
                            :languageCode="language"
                            :placeholder="search.placeholder"
                            :open-state="searchOpen"
                            @close="closeSearch"
                            v-if="searchOpen">
                </search-bar>
            </transition>
        </div>
    </header>
</template>

<script lang="ts">
    import Vue from 'vue';
    import ViewportUtility from '../../../utils/viewport';

    export default Vue.component('PageHeader', {
        props: {
            cta: {
                type: Object,
                required: false
            },
            homepageUrl: {
                type: String,
                required: false,
                default: '/',
            },
            language: {
                type: String,
                required: false,
            },
            navigation: {
                type: Array,
                required: false,
            },
            search: {
                type: Object,
                required: false,
            },
        },
        data() {
            return {
                assistUsed: false,
                mainNavOpen: false,
                maxMobileRes: 1025,
                preferencesBarStatus: 'open',
                resize: false,
                searchOpen: false,
                showCompactMenu: true,
                viewportUtil: new ViewportUtility(),
            };
        },
        methods: {
            openSearch(): void {
                this.searchOpen = true;
            },
            closeSearch(): void {
                this.searchOpen = false;
            },
            handleOpenCompactMenu(show): void {
                if (!show) {
                    this.closeMainNav();
                }
            },
            handleFocus(): void {
                const {search}: HTMLFormElement = (this.$refs as HTMLFormElement);

                if (!this.$refs.search || !search.focusInput) {
                    return;
                }

                search.focusInput();
            },
            handleNavAssistClick(stateChange): void {
                if (stateChange === 'open-mobile-nav') {
                    this.closeSearch();
                    this.openMainNav();
                }

                if (stateChange === 'close-mobile-nav') {
                    this.closeSearch();
                    this.closeMainNav();
                }
            },
            focusFirstSysNavItem(): void {
                const firstNavItem: HTMLElement | null = this.$el.querySelector('.sys-nav__link');

                if (firstNavItem) {
                    firstNavItem.focus();
                }
            },
            focusHomeNavItem(): void {
                const homeLink: HTMLElement | null = this.$el.querySelector('.home-link');

                if (homeLink) {
                    homeLink.focus();
                }
            },
            handleResize(): void {
                this.showCompactMenu = this.viewportUtil.screenWidth < this.maxMobileRes;
            },
            openMainNav(): void {
                this.mainNavOpen = true;
            },
            closeMainNav(): void {
                this.mainNavOpen = false;
            },
            beforeDestroy(): void {
                this.viewportUtil.removeResizeHandler(this.handleResize);
            },
            beforeMount(): void {
                this.viewportUtil.addResizeHandler(this.handleResize);
            },
            mounted(): void {
                this.handleResize();
            }
        }
    })
    ;
</script>
