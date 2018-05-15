let instance = null;

/* istanbul ignore next: too browser specific */
class BrowserCapabilities {
    constructor() {
        if (instance !== null) {
            return instance;
        }
        instance = this;

        return instance;
    }

    static get supportsTouch() {
        return 'ontouchstart' in document.documentElement;
    }

    static get supportsFontLoadingApi() {
        return 'fonts' in document;
    }

    static get supportsIntl() {
        return 'Intl' in window;
    }

    static get supportsObjectFit() {
        const edgeVersion = window.navigator.userAgent.match(/Edge\/(\d{2})\./);
        const edgePartialSupport = (edgeVersion) ? (parseInt(edgeVersion[1], 10) >= 16) : false;

        if (edgePartialSupport) {
            return false;
        }

        return 'objectFit' in document.documentElement.style;
    }

    static get supportsPictureElement() {
        return 'HTMLPictureElement' in window;
    }
}

export default BrowserCapabilities;
