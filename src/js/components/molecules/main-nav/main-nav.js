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
        viewportUtil: new ViewportUtil()
    }),
    computed: {
        classList() {
            return {
                'main-nav--small': this.showCompactMenu,
                'main-nav--large': !this.showCompactMenu,
                'main-nav--open': this.mainNavOpen && this.showCompactMenu
            };
        },
        showCompactMenu() {
            return this.viewportUtil.isTablet;
        }
    },
    methods: {
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
    }
};
