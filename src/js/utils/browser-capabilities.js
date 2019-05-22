let instance = null;
const isBrowser = typeof window !== 'undefined';

/* istanbul ignore next: too browser specific */
class BrowserCapabilities {
    constructor() {
        if (instance !== null) {
            return instance;
        }
        instance = this;

        return instance;
    }

    static get isBrowser() {
        return isBrowser;
    }

    static get supportsTouch() {
        return !this.isBrowser || 'ontouchstart' in document.documentElement;
    }

    static get supportsFontLoadingApi() {
        return !this.isBrowser || 'fonts' in document;
    }

    static get supportsIntl() {
        return !this.isBrowser || 'Intl' in window;
    }

    static get supportsPictureElement() {
        return !this.isBrowser || 'HTMLPictureElement' in window;
    }

    static get supportsIntersectionObserver() {
        return !this.isBrowser || 'IntersectionObserver' in window;
    }

    static get supportsObjectFit() {
        if (!this.isBrowser) { return true; }

        const edgeVersion = window.navigator.userAgent.match(/Edge\/(\d{2})\./);
        const edgePartialSupport = (edgeVersion) ? (parseInt(edgeVersion[1], 10) >= 16) : false;

        if (edgePartialSupport) {
            return false;
        }

        return 'objectFit' in document.documentElement.style;
    }
}

export default BrowserCapabilities;
