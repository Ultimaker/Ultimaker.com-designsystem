import ViewportUtil from 'utils/viewport';

export default {
    name: 'main-nav',
    template: require('./main-nav.html'),
    props: {
        items: {
            type: Array,
            required: true
        },
        mainNavOpen: {
            type: Boolean,
            required: true
        }
    },
    data: () => ({
        viewportUtil: new ViewportUtil(),
        showCompactMenu: null,
        ready: false
    }),
    computed: {
        classList() {
            return {
                'main-nav--small': this.showCompactMenu,
                'main-nav--large': !this.showCompactMenu,
                'main-nav--open': this.mainNavOpen && this.showCompactMenu
            };
        },
        transitionName() {
            if (this.ready && this.isCompact) {
                return 'menu-open';
            }

            return '';
        }
    },
    methods: {
        handleResize() {
            this.showCompactMenu = this.viewportUtil.isTablet;
            this.ready = true;
        },
        focusNextMainNavItem(index) {
            const nextMainNavItem = this.$refs.navItem[index + 1];

            if (nextMainNavItem) {
                nextMainNavItem.focus();
            } else {
                this.$emit('focusPrev');
            }
        },
        focusPrevMainNavItem(index) {
            const prevMainNavItem = this.$refs.navItem[index - 1];

            if (prevMainNavItem) {
                prevMainNavItem.focus();
            } else {
                this.$emit('focusNext');
            }
        }
    },
    beforeMount() {
        this.viewportUtil.addResizeHandler(this.handleResize);
        this.ready = false;

        // trigger resize sets ready to true, so component doesn't animate when dehydrating/instantiating
        this.viewportUtil.triggerResize();
        // timeout when trigger resize doesn't fire
        setTimeout(() => {
            this.ready = true;
        }, 100);
    },
    beforeDestroy() {
        this.viewportUtil.removeResizeHandler(this.handleResize);
    }
};
