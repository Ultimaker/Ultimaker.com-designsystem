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
        }
    },
    methods: {
        async showFlyout() {
            await this.$nextTick();

            if (this.hideTimeout) {
                clearTimeout(this.hideTimeout);
                this.hideTimeout = null;
            }
            this.flyoutIsOpen = true;
        },
        hideFlyout() {
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
        async selectFirstFlyoutItem() {
            this.showFlyout();
            await this.$nextTick();

            const firstFlyoutItem = this.$el.querySelector('.flyout__link');

            if (firstFlyoutItem) {
                firstFlyoutItem.focus();
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

            this.$refs.parent.$el.focus();
            this.hideFlyout();
        }
    }
};
