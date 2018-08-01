import Defaults from 'constants/defaults';
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
        maxMobileRes: Defaults.breakpoints.tablet.max + 1
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
            return this.viewportUtil.screenWidth < this.maxMobileRes;
        }
    },
    methods: {
        focusNextMainNavItem(index) {
            const nextMainNavItem = this.$el.querySelectorAll('.main-nav__link')[index + 1];

            if (nextMainNavItem) {
                nextMainNavItem.focus();
            } else {
                this.$emit('focusPrev');
            }
        },
        focusPrevMainNavItem(index) {
            const prevMainNavItem = this.$el.querySelectorAll('.main-nav__link')[index - 1];

            if (prevMainNavItem) {
                prevMainNavItem.focus();
            } else {
                this.$emit('focusNext');
            }
        }
    }
};
