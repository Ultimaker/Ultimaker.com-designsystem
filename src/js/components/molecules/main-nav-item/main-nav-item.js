import BrowserCapabilities from 'utils/browser-capabilities';

export default {
    name: 'main-nav-item',
    template: require('./main-nav-item.html'),
    data() {
        return {
            flyoutIsOpen: false,
            hideTimeout: null,
            isTouch: BrowserCapabilities.supportsTouch
        };
    },
    props: {
        itemId: {
            type: String
        },
        href: {
            type: String,
            default: '#'
        },
        title: {
            type: String,
            default: ''
        },
        sections: {
            type: Array
        },
        active: {
            type: Boolean,
            default: false
        },
        isCompact: {
            type: Boolean
        }
    },
    computed: {
        isActive() {
            return this.active ? 'page' : false;
        },
        angleDirection() {
            return this.flyoutIsOpen ? 'angle-up' : 'angle-down';
        },
        flyoutTransitionName() {
            return this.isCompact ? '' : 'flyout-open';
        },
        toggleIsVisible() {
            return !!this.sections && !this.isCompact && this.isTouch;
        }
    },
    methods: {
        focus() {
            const navLink = this.$refs.parent;

            if (navLink && navLink.$el) {
                navLink.$el.focus();
            }
        },
        async showFlyout() {
            await this.$nextTick();

            if (this.hideTimeout) {
                clearTimeout(this.hideTimeout);
                this.hideTimeout = null;
            }
            this.flyoutIsOpen = true;
        },
        hideFlyout() {
            this.$emit('closeMainNav');
            this.flyoutIsOpen = false;
        },
        toggleFlyout() {
            this.flyoutIsOpen = !this.flyoutIsOpen;
        },
        delayHideFlyout() {
            return new Promise(resolve => {
                if (this.hideTimeout === null) {
                    this.hideTimeout = setTimeout(() => {
                        this.hideTimeout = null;
                        this.hideFlyout();
                        resolve();
                    }, 100);
                }
            });
        },
        async selectFlyoutFirstLink() {
            this.showFlyout();
            await this.$nextTick();

            if (this.$refs.flyout && this.$refs.flyout.selectFirstLink) {
                this.$refs.flyout.selectFirstLink();
            }
        },
        selectNextNavItem() {
            this.hideFlyout();
            this.$emit('tab');
        },
        selectPrevNavItem() {
            this.hideFlyout();
            this.$emit('shifttab');
        },
        selectParent() {
            if (this.isCompact) { return; }

            const parent =  this.$refs.parent;

            if (parent.$el) {
                parent.$el.focus();
            } else if (parent.focus) {
                parent.focus();
            }

            this.hideFlyout();
        }
    }
};
