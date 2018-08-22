import ViewportUtil from 'utils/viewport';
import BrowserCapabilities from 'utils/browser-capabilities';

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
        }
    },
    methods: {
        handleResize() {
            this.showCompactMenu = this.viewportUtil.isTablet;
            this.ready = true;
        }
    },
    beforeMount() {
        this.ready = false;
        this.viewportUtil.addResizeHandler(this.handleResize);
        if (BrowserCapabilities.isBrowser) {
            this.showCompactMenu = this.viewportUtil.isTablet;
        }

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
