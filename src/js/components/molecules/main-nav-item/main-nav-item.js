import Vue from 'vue';
import BrowserCapabilities from 'utils/browser-capabilities';

export default Vue.component('main-nav-item', {
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
        }
    },
    methods: {
        showFlyout() {
            if (this.hideTimeout) {
                clearTimeout(this.hideTimeout);
                this.hideTimeout = null;
            }
            this.flyoutIsOpen = true;
        },
        hideFlyout() {
            this.flyoutIsOpen = false;
        },
        delayHideFlyout() {
            if (this.hideTimeout === null) {
                this.hideTimeout = setTimeout(() => {
                    this.hideTimeout = null;
                    this.hideFlyout();
                }, 100);
            }
        },
        selectFirstFlyoutItem() {
            this.showFlyout();
            Vue.nextTick(() => {
                const firstFlyoutItem = this.$el.querySelector('.flyout__link');

                if (firstFlyoutItem) {
                    firstFlyoutItem.focus();
                }
            });
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
            this.$refs.parent.focus();
            this.hideFlyout();
        }
    }
});

