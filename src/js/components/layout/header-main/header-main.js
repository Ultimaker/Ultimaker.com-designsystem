import Vue from 'vue';
import {mapGetters} from 'vuex';
import ViewportUtil from 'utils/viewport';
import PublicEventService from 'services/public-event-service';

export default Vue.component('header-main', {
    name: 'header-main',
    template: require('./header-main.html'),
    data() {
        return {
            assistUsed: false,
            viewportUtil: new ViewportUtil(),
            offsetTopHeader: 0,
            mainNavOpen: false,
            searchOpen: false,
            showCompactMenu: true,
            maxMobileRes: 1025,
            resize: false
        };
    },
    props: {
        index: {
            type: Number
        }
    },
    methods: {
        navAssistToggle() {
            if (this.searchOpen || this.mainNavOpen) {
                this.mainNavOpen = this.searchOpen = false;
            } else {
                this.mainNavOpen = true;
                this.searchOpen = false;
            }
        },
        openSearch() {
            this.searchOpen = true;
        },
        closeSearch() {
            this.searchOpen = false;
        },
        handleFocus() {
            if (!this.$refs.search || !this.$refs.search.focusInput) {
                return;
            }
            this.$refs.search.focusInput();
        },
        focusFirstSysNavItem() {
            const firstNavItem = this.$el.querySelector('.sys-nav__link');

            if (firstNavItem) {
                firstNavItem.focus();
            }
        },
        focusHomeNavItem() {
            const homeLink = this.$el.querySelector('.home-link');

            if (homeLink) {
                homeLink.focus();
            }
        },
        focusNextMainNavItem(index) {
            const nextMainNavItem= this.$el.querySelectorAll('.main-nav__link')[index + 1];

            if (nextMainNavItem) {
                nextMainNavItem.focus();
            } else {
                this.focusFirstSysNavItem();
            }
        },
        focusPrevMainNavItem(index) {
            const prevMainNavItem= this.$el.querySelectorAll('.main-nav__link')[index - 1];

            if (prevMainNavItem) {
                prevMainNavItem.focus();
            } else {
                this.focusHomeNavItem();
            }
        },
        handleResize() {
            this.showCompactMenu = this.viewportUtil.screenWidth < this.maxMobileRes;
        }
    },
    computed: {
        ...mapGetters(['mainNav']),
        assistState() {
            return this.mainNavOpen || this.searchOpen;
        },
        headerClasses() {
            const scrollY = this.viewportUtil.scrollY < 0 ? 0 : this.viewportUtil.scrollY,
                isFixed = scrollY >= this.offsetTopHeader;

            return {
                'header--absolute': !isFixed,
                'header--fixed': isFixed
            };
        }
    },
    beforeMount() {
        PublicEventService.on('size', ({element, size}) => {
            if (element === 'drawer') {
                this.offsetTopHeader = size;
            }
        });
    },
    mounted() {
        this.handleResize();
        this.viewportUtil.addResizeHandler(this.handleResize);
    },
    beforeDestroy() {
        this.viewportUtil.removeResizeHandler(this.handleResize);
    }
});
