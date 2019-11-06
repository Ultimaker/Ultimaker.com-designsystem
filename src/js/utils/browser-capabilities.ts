class BrowserCapabilities {
    private static instance: BrowserCapabilities;

    // eslint-disable-next-line no-useless-constructor,no-empty-function
    private constructor() {}

    static get hasWindow(): boolean {
        return typeof window !== 'undefined';
    }

    // https://stackoverflow.com/questions/21825157/internet-explorer-11-detection#answer-21825207
    static get isIE11(): boolean {
        // @ts-ignore
        return !!window.MSInputMethodContext && !!document.documentMode;
    }

    // <= IE10
    static get isOldIE(): boolean {
        return /MSIE/.test(navigator.userAgent);
    }

    // https://stackoverflow.com/questions/12625876/how-to-detect-chrome-and-safari-browser-webkit#answer-12625944
    static get isSafari(): boolean {
        return /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
    }

    static get supportsTouch(): boolean {
        return !this.hasWindow || 'ontouchstart' in document.documentElement;
    }

    static get supportsFontLoadingApi(): boolean {
        return !this.hasWindow || 'fonts' in document;
    }

    static get supportsIntl(): boolean {
        return !this.hasWindow || 'Intl' in window;
    }

    static get supportsPictureElement(): boolean {
        return !this.hasWindow || 'HTMLPictureElement' in window;
    }

    // @todo remove this and rely on https://www.npmjs.com/package/intersection-observer
    static get supportsIntersectionObserver(): boolean {
        return !this.hasWindow || 'IntersectionObserver' in window;
    }

    static get supportsObjectFit(): boolean {
        if (!this.hasWindow) { return true; }

        const edgeVersion = window.navigator.userAgent.match(/Edge\/(\d{2})\./);
        const edgePartialSupport = (edgeVersion) ? (parseInt(edgeVersion[1], 10) >= 16) : false;

        if (edgePartialSupport) {
            return false;
        }

        return 'objectFit' in document.documentElement.style;
    }
}

export default BrowserCapabilities;
