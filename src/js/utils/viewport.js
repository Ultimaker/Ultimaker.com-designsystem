import debounce from 'lodash/debounce';
import BrowserCapabilities from 'utils/browser-capabilities';
import Defaults from 'constants/defaults';

let instance = null,
    _scrollAnimationPending = false,
    _resizeAnimationPending = false;
const _resizeHandlers = [],
    _scrollHandlers = [],
    _orientationChangeHandlers = [];

function scrollHandler(e) {
    if (!_scrollAnimationPending) {
        _scrollAnimationPending = true;
        window.requestAnimationFrame(() => {
            this.updateScrollState();
            _scrollHandlers.forEach(h => h());
            _scrollAnimationPending = false;
        });
    }
}

function resizeHandler(e) {
    if (!_resizeAnimationPending) {
        _resizeAnimationPending = true;
        window.requestAnimationFrame(() => {
            this.updateScreenDimensions();
            _resizeHandlers.forEach(h => h());
            _resizeAnimationPending = false;
        });
    }
}

function orientationChangeHandler(e) {
    window.requestAnimationFrame(() => {
        _orientationChangeHandlers.forEach(h => h());
    });
}

function documentLoadedHandler() {
    this.updateScrollState();
    this.updateScreenDimensions();
}

/* eslint-disable complexity */
class ViewportUtility {
    constructor() {
        if (instance !== null) {
            return instance;
        }
        instance = this;

        this.screenWidth = 0;
        this.screenHeight = 0;

        this.scrollDirection = null;
        this.scrollOffsetStart = 0;
        this.scrollOffset = 0;

        this.scrollX = 0;
        this.scrollY = 0;

        if (typeof window !== 'object') {
            return this.instance;
        }

        this._attachEventListeners();
        this.updateScrollState();
        this.updateScreenDimensions();

        return instance;
    }

    _attachEventListeners() {
        const minWait = 1000 / 60, // 60 fps
            maxWait = 1000 / 30; // 30 fps

        document.addEventListener('scroll', debounce(() => {
            scrollHandler.apply(this);
        }, minWait, {maxWait: maxWait}));

        if (BrowserCapabilities.supportsTouch) {
            document.addEventListener('touchmove', debounce(() => {
                scrollHandler.apply(this);
            }, minWait, {maxWait: maxWait}));
        }

        document.addEventListener('DOMContentLoaded', () => {
            documentLoadedHandler.apply(this);
        });

        window.addEventListener('resize', debounce(() => {
            resizeHandler.apply(this);
        }, minWait, {maxWait: maxWait}));

        window.addEventListener('orientationchange', () => {
            orientationChangeHandler.apply(this);
        });
    }

    updateScrollState() {
        let y = window.pageYOffset;
        const x = window.pageXOffset,
            maxScrollY = this.documentHeight - this.screenHeight;
        let direction = this.scrollDirection;

        if (y > maxScrollY) {
            y = maxScrollY;
        }
        if (y > this.scrollY) {
            direction = 'down';
        } else if (y < this.scrollY) {
            direction = 'up';
        }

        if (this.scrollDirection !== direction) {
            this.scrollOffsetStart = y;
        }
        this.scrollOffset = y - this.scrollOffsetStart;
        this.scrollDirection = direction;

        this.scrollX = x;
        this.scrollY = y;
    }

    calculateResize() {
        scrollHandler.apply(this);
    }

    updateScreenDimensions() {
        const currentWindow = window;

        /* istanbul ignore next */
        this.screenWidth = currentWindow.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth;
        /* istanbul ignore next */
        this.screenHeight = currentWindow.innerHeight ||
            document.documentElement.clientHeight ||
            document.body.clientHeight;
    }

    get top() {
        return this.scrollY <= 0;
    }

    get documentHeight() {
        if (typeof window !== 'undefined') {
            return Math.max(document.body.scrollHeight, document.body.offsetHeight);
        }

        return 0;
    }

    get isMobile() {
        return this.screenWidth <= Defaults.breakpoints.mobile.max;
    }

    get isMobileXl() {
        return this.screenWidth <= Defaults.breakpoints.mobileXl.max;
    }

    get isTablet() {
        return this.screenWidth <= Defaults.breakpoints.tablet.max;
    }

    addResizeHandler(handler) {
        _resizeHandlers.push(handler);
    }

    removeResizeHandler(handler) {
        // not using filter because _resizeHandler is a constant
        const index = _resizeHandlers.indexOf(handler);

        if (index < 0) { return; }
        _resizeHandlers.splice(index, 1);
    }

    triggerResize() {
        resizeHandler.apply(this);
    }

    addScrollHandler(handler) {
        _scrollHandlers.push(handler);
    }

    removeScrollHandler(handler) {
        // not using filter because _scrollHandlers is a constant
        const index = _scrollHandlers.indexOf(handler);

        if (index < 0) { return; }
        _scrollHandlers.splice(index, 1);
    }

    addOrientationChangeHandler(handler) {
        _orientationChangeHandlers.push(handler);
    }

    removeOrientationChangeHandler(handler) {
        // not using filter because _scrollHandlers is a constant
        const index = _orientationChangeHandlers.indexOf(handler);

        if (index < 0) { return; }
        _orientationChangeHandlers.splice(index, 1);
    }
}

export default ViewportUtility;
