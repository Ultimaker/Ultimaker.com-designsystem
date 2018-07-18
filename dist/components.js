define("components", ["gsap","vuex","lodash/find","vue","lodash/filter","lodash/debounce"], function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__3__, __WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__5__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__5__;

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var atoms_namespaceObject = {};
__webpack_require__.r(atoms_namespaceObject);
__webpack_require__.d(atoms_namespaceObject, "AnimatedArrow", function() { return atoms_animated_arrow; });
__webpack_require__.d(atoms_namespaceObject, "ContentLink", function() { return atoms_content_link; });
__webpack_require__.d(atoms_namespaceObject, "ContentLinkList", function() { return atoms_content_link_list; });
__webpack_require__.d(atoms_namespaceObject, "HitArea", function() { return atoms_hit_area; });
__webpack_require__.d(atoms_namespaceObject, "HorizontalList", function() { return atoms_horizontal_list; });
__webpack_require__.d(atoms_namespaceObject, "Icon", function() { return atoms_icon; });
__webpack_require__.d(atoms_namespaceObject, "NavAssist", function() { return atoms_nav_assist; });
__webpack_require__.d(atoms_namespaceObject, "ResponsivePicture", function() { return atoms_responsive_picture; });
__webpack_require__.d(atoms_namespaceObject, "TabbableDefinitionList", function() { return atoms_tabbable_definition_list; });
__webpack_require__.d(atoms_namespaceObject, "Tooltip", function() { return atoms_tooltip; });
__webpack_require__.d(atoms_namespaceObject, "YoutubeVideo", function() { return atoms_youtube_video; });
var molecules_namespaceObject = {};
__webpack_require__.r(molecules_namespaceObject);
__webpack_require__.d(molecules_namespaceObject, "AutoComplete", function() { return molecules_auto_complete; });
__webpack_require__.d(molecules_namespaceObject, "BrandCard", function() { return molecules_brand_card; });
__webpack_require__.d(molecules_namespaceObject, "Card", function() { return molecules_card; });
__webpack_require__.d(molecules_namespaceObject, "Color", function() { return molecules_color; });
__webpack_require__.d(molecules_namespaceObject, "ContentToggle", function() { return molecules_content_toggle; });
__webpack_require__.d(molecules_namespaceObject, "Currency", function() { return molecules_currency; });
__webpack_require__.d(molecules_namespaceObject, "FauxVerticalScroll", function() { return molecules_faux_vertical_scroll; });
__webpack_require__.d(molecules_namespaceObject, "Flyout", function() { return molecules_flyout; });
__webpack_require__.d(molecules_namespaceObject, "FlyoutSection", function() { return molecules_flyout_section; });
__webpack_require__.d(molecules_namespaceObject, "IconButton", function() { return molecules_icon_button; });
__webpack_require__.d(molecules_namespaceObject, "Modal", function() { return molecules_modal; });
__webpack_require__.d(molecules_namespaceObject, "Pager", function() { return molecules_pager; });
__webpack_require__.d(molecules_namespaceObject, "ResellerCard", function() { return molecules_reseller_card; });
__webpack_require__.d(molecules_namespaceObject, "Search", function() { return search; });
var organisms_namespaceObject = {};
__webpack_require__.r(organisms_namespaceObject);
__webpack_require__.d(organisms_namespaceObject, "CmsImage", function() { return organisms_cms_image; });
__webpack_require__.d(organisms_namespaceObject, "CountrySelector", function() { return organisms_country_selector; });
__webpack_require__.d(organisms_namespaceObject, "SubNav", function() { return organisms_sub_nav; });
var organisms_page_namespaceObject = {};
__webpack_require__.r(organisms_page_namespaceObject);
__webpack_require__.d(organisms_page_namespaceObject, "Brands", function() { return organisms_page_brands; });
__webpack_require__.d(organisms_page_namespaceObject, "BrandsLarge", function() { return organisms_page_brands_large; });
__webpack_require__.d(organisms_page_namespaceObject, "Cases", function() { return organisms_page_cases; });
__webpack_require__.d(organisms_page_namespaceObject, "Colors", function() { return organisms_page_colors; });
__webpack_require__.d(organisms_page_namespaceObject, "Ecosystem", function() { return organisms_page_ecosystem; });
__webpack_require__.d(organisms_page_namespaceObject, "Examples", function() { return organisms_page_examples; });
__webpack_require__.d(organisms_page_namespaceObject, "Explore", function() { return organisms_page_explore; });
__webpack_require__.d(organisms_page_namespaceObject, "GeneralContent", function() { return organisms_page_general_content; });
__webpack_require__.d(organisms_page_namespaceObject, "HeroProduct", function() { return organisms_page_hero_product; });
__webpack_require__.d(organisms_page_namespaceObject, "HeroProductsApplication", function() { return organisms_page_hero_products_application; });
__webpack_require__.d(organisms_page_namespaceObject, "HeroText", function() { return organisms_page_hero_text; });
__webpack_require__.d(organisms_page_namespaceObject, "Resellers", function() { return organisms_page_resellers; });
__webpack_require__.d(organisms_page_namespaceObject, "SliderReveal", function() { return organisms_page_slider_reveal; });
__webpack_require__.d(organisms_page_namespaceObject, "Ubr", function() { return organisms_page_ubr; });

// CONCATENATED MODULE: ./src/js/utils/component-registry.js
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ComponentRegistry = function () {
    function ComponentRegistry() {
        _classCallCheck(this, ComponentRegistry);

        this.components = [];
    }

    _createClass(ComponentRegistry, [{
        key: 'registerComponent',
        value: function registerComponent(component) {
            this.components.push(component);
        }
    }, {
        key: 'install',
        value: function install(Vue, options) {
            this.components.filter(function (c) {
                return typeof c.name === 'string';
            }).forEach(function (c) {
                return Vue.component(c.name, c);
            });
        }
    }, {
        key: 'listComponents',
        value: function listComponents() {
            this.components.forEach(function (c) {
                return console.log(c.name);
            });
        }
    }]);

    return ComponentRegistry;
}();

/* harmony default export */ var component_registry = (ComponentRegistry);
// CONCATENATED MODULE: ./src/js/components/atoms/animated-arrow/animated-arrow.js
/* harmony default export */ var animated_arrow = ({
    name: 'animated-arrow',
    template: __webpack_require__(48)
});
// CONCATENATED MODULE: ./src/js/components/atoms/animated-arrow/index.js

/* harmony default export */ var atoms_animated_arrow = (animated_arrow);
// CONCATENATED MODULE: ./src/js/components/atoms/content-link/content-link.js
/* harmony default export */ var content_link = ({
    name: 'content-link',
    template: __webpack_require__(47),
    props: {
        block: {
            type: String,
            default: ''
        },
        mod: {
            type: String,
            default: ''
        },
        icon: {
            type: String,
            default: ''
        },
        href: {
            type: String,
            default: ''
        }
    },
    computed: {
        classObject: function classObject() {
            var classes = {};

            if (this.block !== '') {
                classes[this.block + '__link'] = true;
            }
            if (this.mod !== '' && typeof this.mod === 'string') {
                this.mod.split(' ').forEach(function (mod) {
                    classes['link--' + mod] = true;
                });
            }
            if (this.icon !== '' && this.mod.indexOf('small') === -1) {
                classes['link--icon'] = true;
            }

            return classes;
        }
    }
});
// CONCATENATED MODULE: ./src/js/components/atoms/content-link/index.js


/* harmony default export */ var atoms_content_link = (content_link);
// CONCATENATED MODULE: ./src/js/components/atoms/content-link-list/content-link-list.js
/* harmony default export */ var content_link_list = ({
    name: 'content-link-list',
    template: __webpack_require__(46),
    props: {
        block: {
            type: String,
            required: true
        },
        links: {
            type: Array,
            default: function _default() {
                return [];
            }
        }
    }
});
// CONCATENATED MODULE: ./src/js/components/atoms/content-link-list/index.js

/* harmony default export */ var atoms_content_link_list = (content_link_list);
// CONCATENATED MODULE: ./src/js/components/atoms/hit-area/hit-area.js
/* harmony default export */ var hit_area = ({
    name: 'hit-area',
    template: __webpack_require__(45)
});
// CONCATENATED MODULE: ./src/js/components/atoms/hit-area/index.js

/* harmony default export */ var atoms_hit_area = (hit_area);
// CONCATENATED MODULE: ./src/js/components/atoms/horizontal-list/horizontal-list.js
/* harmony default export */ var horizontal_list = ({
    name: 'horizontal-list',
    template: __webpack_require__(44),
    props: {
        styleModifier: {
            type: String
        },
        label: {
            type: String,
            required: true
        },
        listItems: {
            type: Array,
            required: true
        }
    }
});
// CONCATENATED MODULE: ./src/js/components/atoms/horizontal-list/index.js

/* harmony default export */ var atoms_horizontal_list = (horizontal_list);
// CONCATENATED MODULE: ./src/js/components/atoms/icon/icon.js


var defaultIconUrl = '/static/icons/iconset.svg';

/* harmony default export */ var icon = ({
    name: 'icon',
    data: function data() {
        return {
            ready: false,
            symbolData: null,
            viewBox: null
        };
    },
    props: {
        iconName: {
            type: String,
            required: true
        }
    },
    computed: {
        iconId: function iconId() {
            return 'icon-' + this.iconName;
        },
        iconClass: function iconClass() {
            return 'icon--' + this.iconName;
        },
        iconUrl: function iconUrl() {
            return window.svgIconMap || defaultIconUrl;
        },
        iconRef: function iconRef() {
            return this.iconUrl + '#icon-' + this.iconName;
        }
    },
    mounted: function mounted() {
        var _this = this;

        this.ready = true;

        if (/Trident\//.test(window.navigator.userAgent)) {
            var requestOptions = {
                cache: 'cache',
                headers: new Headers()
            },
                request = new Request(this.iconUrl, requestOptions);

            fetch(request).then(function (result) {
                var parser = new DOMParser(),
                    doc = parser.parseFromString(result.data, 'image/svg+xml'),
                    symbol = doc.querySelector('#icon-' + _this.iconName);

                if (symbol !== null) {
                    var symbolContainer = _this.$el.querySelector('#symbol-container'),
                        clone = symbol.cloneNode(true);

                    if (symbol.viewBox && symbol.viewBox.baseVal) {
                        var box = symbol.viewBox.baseVal;

                        _this.viewBox = box.x + ' ' + box.y + ' ' + box.width + ' ' + box.height;
                    }

                    while (clone.childNodes.length) {
                        symbolContainer.appendChild(clone.firstChild);
                    }
                }
            });
        }
    },

    template: __webpack_require__(43)
});
// CONCATENATED MODULE: ./src/js/components/atoms/icon/index.js

/* harmony default export */ var atoms_icon = (icon);
// CONCATENATED MODULE: ./src/js/components/atoms/nav-assist/nav-assist.js
/* harmony default export */ var nav_assist = ({
    name: 'nav-assist',
    template: __webpack_require__(42),
    data: function data() {
        return {
            used: false
        };
    },
    props: {
        openState: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        toggleState: function toggleState() {
            this.used = true;
            this.$emit('toggle');
        },
        close: function close() {
            if (this.openState) {
                this.$emit('toggle');
            }
        }
    },
    watch: {
        openState: function openState(value) {
            this.used = true;
            this.$emit('used');
        }
    }
});
// CONCATENATED MODULE: ./src/js/components/atoms/nav-assist/index.js

/* harmony default export */ var atoms_nav_assist = (nav_assist);
// EXTERNAL MODULE: external "lodash/debounce"
var debounce_ = __webpack_require__(5);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce_);

// CONCATENATED MODULE: ./src/js/utils/browser-capabilities.js
var browser_capabilities_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function browser_capabilities_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var instance = null;

var BrowserCapabilities = function () {
    function BrowserCapabilities() {
        browser_capabilities_classCallCheck(this, BrowserCapabilities);

        if (instance !== null) {
            return instance;
        }
        instance = this;

        return instance;
    }

    browser_capabilities_createClass(BrowserCapabilities, null, [{
        key: 'supportsTouch',
        get: function get() {
            return 'ontouchstart' in document.documentElement;
        }
    }, {
        key: 'supportsFontLoadingApi',
        get: function get() {
            return 'fonts' in document;
        }
    }, {
        key: 'supportsIntl',
        get: function get() {
            return 'Intl' in window;
        }
    }, {
        key: 'supportsObjectFit',
        get: function get() {
            var edgeVersion = window.navigator.userAgent.match(/Edge\/(\d{2})\./);
            var edgePartialSupport = edgeVersion ? parseInt(edgeVersion[1], 10) >= 16 : false;

            if (edgePartialSupport) {
                return false;
            }

            return 'objectFit' in document.documentElement.style;
        }
    }, {
        key: 'supportsPictureElement',
        get: function get() {
            return 'HTMLPictureElement' in window;
        }
    }]);

    return BrowserCapabilities;
}();

/* harmony default export */ var browser_capabilities = (BrowserCapabilities);
// CONCATENATED MODULE: ./src/js/constants/defaults.js
/* harmony default export */ var defaults = ({
    consentLevel: 3,
    suggestedConsentLevel: 15,
    consentLevels: {
        functional: 1,
        analytics: 2,
        personalization: 4,
        tracking: 8,
        minimal: 3,
        all: 15
    },
    country: {
        name: 'United States of America',
        code: 'US',
        currency: {
            code: 'USD',
            symbol: '$'
        }
    },
    language: 'en',
    breakpoints: {
        mobile: {
            min: 0,
            max: 568
        },
        mobileXl: {
            min: 569,
            max: 767
        },
        tablet: {
            min: 768,
            max: 1024
        },
        desktop: {
            min: 1025,
            max: 1200
        },
        desktopHd: {
            min: 1201,
            max: Infinity
        }
    },
    buildingUnit: 12
});
// CONCATENATED MODULE: ./src/js/utils/viewport.js
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var viewport_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function viewport_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var viewport_instance = null,
    _scrollAnimationPending = false,
    _resizeAnimationPending = false;
var _resizeHandlers = [],
    _scrollHandlers = [],
    _orientationChangeHandlers = [];

function scrollHandler(e) {
    var _this = this;

    if (!_scrollAnimationPending) {
        _scrollAnimationPending = true;
        window.requestAnimationFrame(function () {
            _this.updateScrollState();
            _scrollHandlers.forEach(function (h) {
                return h();
            });
            _scrollAnimationPending = false;
        });
    }
}

function resizeHandler(e) {
    var _this2 = this;

    if (!_resizeAnimationPending) {
        _resizeAnimationPending = true;
        window.requestAnimationFrame(function () {
            _this2.updateScreenDimensions();
            _resizeHandlers.forEach(function (h) {
                return h();
            });
            _resizeAnimationPending = false;
        });
    }
}

function orientationChangeHandler(e) {
    window.requestAnimationFrame(function () {
        _orientationChangeHandlers.forEach(function (h) {
            return h();
        });
    });
}

function documentLoadedHandler() {
    this.updateScrollState();
    this.updateScreenDimensions();
}

var viewport_ViewportUtility = function () {
    function ViewportUtility() {
        viewport_classCallCheck(this, ViewportUtility);

        if (viewport_instance !== null) {
            return viewport_instance;
        }
        viewport_instance = this;

        this.screenWidth = 0;
        this.screenHeight = 0;

        this.scrollDirection = null;
        this.scrollOffsetStart = 0;
        this.scrollOffset = 0;

        this.scrollX = 0;
        this.scrollY = 0;

        if ((typeof window === 'undefined' ? 'undefined' : _typeof(window)) !== 'object') {
            return this.instance;
        }

        this._attachEventListeners();
        this.updateScrollState();
        this.updateScreenDimensions();

        return viewport_instance;
    }

    viewport_createClass(ViewportUtility, [{
        key: '_attachEventListeners',
        value: function _attachEventListeners() {
            var _this3 = this;

            var minWait = 1000 / 60,
                maxWait = 1000 / 30;

            document.addEventListener('scroll', debounce_default()(function () {
                scrollHandler.apply(_this3);
            }, minWait, { maxWait: maxWait }));

            if (browser_capabilities.supportsTouch) {
                document.addEventListener('touchmove', debounce_default()(function () {
                    scrollHandler.apply(_this3);
                }, minWait, { maxWait: maxWait }));
            }

            document.addEventListener('DOMContentLoaded', function () {
                documentLoadedHandler.apply(_this3);
            });

            window.addEventListener('resize', debounce_default()(function () {
                resizeHandler.apply(_this3);
            }, minWait, { maxWait: maxWait }));

            window.addEventListener('orientationchange', function () {
                orientationChangeHandler.apply(_this3);
            });
        }
    }, {
        key: 'updateScrollState',
        value: function updateScrollState() {
            var y = window.pageYOffset;
            var x = window.pageXOffset,
                maxScrollY = this.documentHeight - this.screenHeight;
            var direction = this.scrollDirection;

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
    }, {
        key: 'calculateResize',
        value: function calculateResize() {
            scrollHandler.apply(this);
        }
    }, {
        key: 'updateScreenDimensions',
        value: function updateScreenDimensions() {
            var currentWindow = window;

            this.screenWidth = currentWindow.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

            this.screenHeight = currentWindow.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        }
    }, {
        key: 'addResizeHandler',
        value: function addResizeHandler(handler) {
            _resizeHandlers.push(handler);
        }
    }, {
        key: 'removeResizeHandler',
        value: function removeResizeHandler(handler) {
            var index = _resizeHandlers.indexOf(handler);

            if (index < 0) {
                return;
            }
            _resizeHandlers.splice(index, 1);
        }
    }, {
        key: 'triggerResize',
        value: function triggerResize() {
            resizeHandler.apply(this);
        }
    }, {
        key: 'addScrollHandler',
        value: function addScrollHandler(handler) {
            _scrollHandlers.push(handler);
        }
    }, {
        key: 'removeScrollHandler',
        value: function removeScrollHandler(handler) {
            var index = _scrollHandlers.indexOf(handler);

            if (index < 0) {
                return;
            }
            _scrollHandlers.splice(index, 1);
        }
    }, {
        key: 'addOrientationChangeHandler',
        value: function addOrientationChangeHandler(handler) {
            _orientationChangeHandlers.push(handler);
        }
    }, {
        key: 'removeOrientationChangeHandler',
        value: function removeOrientationChangeHandler(handler) {
            var index = _orientationChangeHandlers.indexOf(handler);

            if (index < 0) {
                return;
            }
            _orientationChangeHandlers.splice(index, 1);
        }
    }, {
        key: 'top',
        get: function get() {
            return this.scrollY <= 0;
        }
    }, {
        key: 'documentHeight',
        get: function get() {
            if (typeof window !== 'undefined') {
                return Math.max(document.body.scrollHeight, document.body.offsetHeight);
            }

            return 0;
        }
    }, {
        key: 'isMobile',
        get: function get() {
            return this.screenWidth <= defaults.breakpoints.mobile.max;
        }
    }, {
        key: 'isMobileXl',
        get: function get() {
            return this.screenWidth <= defaults.breakpoints.mobileXl.max;
        }
    }, {
        key: 'isTablet',
        get: function get() {
            return this.screenWidth <= defaults.breakpoints.tablet.max;
        }
    }]);

    return ViewportUtility;
}();

/* harmony default export */ var viewport = (viewport_ViewportUtility);
// CONCATENATED MODULE: ./src/js/components/atoms/responsive-picture/responsive-picture-source.js
/* harmony default export */ var responsive_picture_source = ({
    name: 'responsive-picture-source',
    template: '<source :media="media" :srcset="srcset">',
    props: {
        image: {
            required: true
        },
        media: {
            type: String,
            required: true
        }
    },
    computed: {
        srcset: function srcset() {
            if (typeof this.image === 'string') {
                return this.image;
            }

            return this.image.retinaUrl ? this.image.url + ', ' + this.image.retinaUrl + ' 2x' : this.image.url;
        }
    }
});
// CONCATENATED MODULE: ./src/js/components/atoms/responsive-picture/responsive-picture.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* harmony default export */ var responsive_picture = ({
    name: 'responsive-picture',
    components: {
        ResponsivePictureSource: responsive_picture_source
    },
    template: __webpack_require__(41),
    data: function data() {
        return {
            viewportUtil: new viewport(),
            ready: false,
            inView: false,
            loaded: false
        };
    },
    props: {
        desktopHdWidth: {
            required: false
        },
        desktopWidth: {
            required: false
        },
        tabletWidth: {
            required: false
        },
        mobileXlWidth: {
            required: false
        },
        mobileLWidth: {
            required: false
        },
        mobileWidth: {
            required: true
        },
        lazy: {
            type: Boolean,
            default: true
        },
        description: {
            type: String,
            default: ''
        },
        imgClass: {
            type: String,
            default: ''
        }
    },
    computed: {
        lazyLoading: function lazyLoading() {
            return this.lazy && !this.inView || !this.lazy && this.ready;
        },
        classes: function classes() {
            var _ref;

            return _ref = {}, _defineProperty(_ref, this.imgClass, true), _defineProperty(_ref, 'img--lazy', this.lazy), _defineProperty(_ref, 'img--loading', this.lazy && this.inView && !this.loaded), _defineProperty(_ref, 'img--loaded', this.loaded), _ref;
        }
    },
    methods: {
        calculateInView: function calculateInView() {
            if (this.inView === true) {
                return;
            }
            var windowBottom = this.viewportUtil.scrollY + this.viewportUtil.screenHeight,
                pictureBounds = this.$el.getBoundingClientRect(),
                pictureTop = this.viewportUtil.scrollY + pictureBounds.top,
                pictureBottom = pictureTop + pictureBounds.height;

            this.inView = this.viewportUtil.scrollY <= pictureBottom && windowBottom >= pictureTop;
        }
    },
    mounted: function mounted() {
        var _this = this;

        window.requestAnimationFrame(function () {
            _this.ready = true;
        });

        if (!this.lazy) {
            this.inView = true;

            return;
        }
        if (this.lazy) {
            this.calculateInView();
            this.viewportUtil.addResizeHandler(this.calculateInView);
            this.viewportUtil.addScrollHandler(this.calculateInView);
        }

        this.$el.querySelector('img').addEventListener('load', function () {
            _this.loaded = true;
        });
    },
    beforeDestroy: function beforeDestroy() {
        if (this.lazy) {
            this.viewportUtil.removeResizeHandler(this.calculateInView);
            this.viewportUtil.removeScrollHandler(this.calculateInView);
        }
    }
});
// CONCATENATED MODULE: ./src/js/components/atoms/responsive-picture/index.js

/* harmony default export */ var atoms_responsive_picture = (responsive_picture);
// EXTERNAL MODULE: external "gsap"
var external_gsap_ = __webpack_require__(0);

// CONCATENATED MODULE: ./src/js/components/atoms/tabbable-definition-list/tabbable-definition-list.js
function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }







/* harmony default export */ var tabbable_definition_list = ({
    name: 'tabbable-definition-list',
    template: __webpack_require__(40),
    data: function data() {
        return {
            viewport: new viewport(),
            heights: []
        };
    },
    props: {
        items: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        activeIndex: {
            type: Number,
            default: 0
        }
    },
    watch: {
        items: function items() {
            this.updateElementPositions();
        },
        activeIndex: function activeIndex(newValue, oldValue) {
            this.killTweensAndCompleteOf(this.$refs.terms);
            this.killTweensAndCompleteOf(this.$refs.descriptions);

            var duration = 0.4,
                direction = this.getDirection(oldValue, newValue),
                height = this.heights[newValue],
                delay = this.viewport.isMobile ? duration * 0.6 : 0,
                descriptionHeight = (this.viewport.isMobile ? height.dt : 0) + height.dd + defaults.buildingUnit * 2.5,
                elementsToHide = !this.viewport.isMobile ? this.$refs.descriptions[oldValue] : [this.$refs.terms[oldValue], this.$refs.descriptions[oldValue]];

            external_gsap_["TweenLite"].to(elementsToHide, duration, { height: 0, y: 20 * direction, ease: external_gsap_["Power3"].easeOut });
            external_gsap_["TweenLite"].fromTo(elementsToHide, duration * 0.3, { autoAlpha: 1 }, { autoAlpha: 0, ease: external_gsap_["Power0"].easeNone });

            external_gsap_["TweenLite"].fromTo(this.$refs.descriptions[newValue], duration, { height: 0, y: -20 * direction }, { height: descriptionHeight, y: 0, ease: external_gsap_["Power3"].easeOut, delay: delay });
            external_gsap_["TweenLite"].fromTo(this.$refs.descriptions[newValue], duration * 0.3, { autoAlpha: 0 }, { autoAlpha: 1, ease: external_gsap_["Power0"].easeNone, delay: delay });
            if (this.viewport.isMobile) {
                external_gsap_["TweenLite"].fromTo(this.$refs.terms[newValue], duration, { height: 0, y: -20 * direction }, { height: height.dt, y: 0, ease: external_gsap_["Power3"].easeOut, delay: delay });
                external_gsap_["TweenLite"].fromTo(this.$refs.terms[newValue], duration * 0.3, { autoAlpha: 0 }, { autoAlpha: 1, ease: external_gsap_["Power0"].easeNone, delay: delay });
            }
        }
    },
    methods: {
        changeIndex: function changeIndex(index) {
            this.$emit('index-changed', { index: index });
        },
        getDirection: function getDirection(oldValue, newValue) {
            if (this.viewport.isMobile) {
                if (oldValue < newValue) {
                    return newValue - (this.$refs.terms.length - 1) === oldValue ? 1 : -1;
                }

                return oldValue - (this.$refs.terms.length - 1) === newValue ? -1 : 1;
            }

            return oldValue < newValue ? -1 : 1;
        },
        killTweensAndCompleteOf: function killTweensAndCompleteOf(elements) {
            var tweens = external_gsap_["TweenLite"].getTweensOf(elements);

            if (tweens) {
                for (var i = 0, leni = tweens.length; i < leni; i++) {
                    tweens[i].seek(tweens[i].duration());
                }
                external_gsap_["TweenLite"].killTweensOf(tweens);
            }
        },
        renderItemOffscreen: function renderItemOffscreen(item) {
            item.style.display = 'block';
            item.style.position = 'relative';
            item.style.left = '-9999px';
            item.style.height = 'auto';
            item.style.transform = '';
        },
        resetItemPosition: function resetItemPosition(item) {
            item.style.position = '';
            item.style.display = '';
            item.style.left = '';
        },
        calculateDimensions: function calculateDimensions() {
            var _this = this;

            this.heights = [];

            if (!this.$refs.descriptions || !this.$refs.descriptions.length) {
                return;
            }

            this.$refs.terms.forEach(function (element) {
                _this.renderItemOffscreen(element);
            });
            this.$refs.descriptions.forEach(function (element) {
                element.style.marginBottom = '0';
                _this.renderItemOffscreen(element);
            });

            this.$refs.descriptions.map(function (element, index) {
                var currentHeight = {
                    dt: element.previousElementSibling.getBoundingClientRect().height,
                    dd: element.getBoundingClientRect().height
                };

                _this.heights.push(currentHeight);
            });

            this.$refs.terms.forEach(function (element, index) {
                _this.resetItemPosition(element);

                if (_this.viewport.isMobile) {
                    element.style.opacity = index === _this.activeIndex ? '1' : '0';
                    element.style.visibility = index === _this.activeIndex ? 'visible' : 'hidden';
                } else {
                    element.style.opacity = '1';
                    element.style.visibility = 'visible';
                }
            });

            this.$refs.descriptions.forEach(function (element, index) {
                _this.resetItemPosition(element, index);

                if (index !== _this.activeIndex) {
                    element.style.height = '0';
                    element.style.opacity = '0';
                    element.style.visibility = 'hidden';
                }
            });
        },
        updateElementPositions: function updateElementPositions() {
            var _this2 = this;

            var currentElement = this.$refs.descriptions[this.activeIndex];

            currentElement.style.height = '';

            var currentElementHeight = currentElement.getBoundingClientRect().height,
                isMobile = this.viewport.isMobile;

            this.$el.style.height = 'auto';
            this.calculateDimensions();

            var maxElementHeight = isMobile ? this.maxHeight : this.$el.getBoundingClientRect().height + this.maxHeight - currentElementHeight,
                height = this.heights[this.activeIndex];

            this.$refs.descriptions.forEach(function (element, index) {
                element.style.top = isMobile ? _this2.heights[index].dt + defaults.buildingUnit * 2.5 + 'px' : 0;
            });

            if (isMobile) {
                currentElement.style.height = height.dt + height.dd + defaults.buildingUnit * 2.5 + 'px';
            } else {
                currentElement.style.height = height.dd + defaults.buildingUnit * 2.5 + 'px';
            }
            this.$el.style.height = maxElementHeight + defaults.buildingUnit * 0.5 + 'px';
        }
    },
    computed: {
        maxHeight: function maxHeight() {
            if (!this.heights.length) {
                return 0;
            }
            if (this.viewport.isMobile) {
                return Math.max.apply(Math, _toConsumableArray(this.heights.map(function (i) {
                    return i.dt + defaults.buildingUnit * 2.5 + i.dd;
                })));
            }

            return Math.max.apply(Math, _toConsumableArray(this.heights.map(function (i) {
                return i.dd;
            })));
        }
    },
    mounted: function mounted() {
        this.updateElementPositions();
        this.viewport.addResizeHandler(this.updateElementPositions);
    },
    beforeDestroy: function beforeDestroy() {
        this.viewport.removeResizeHandler(this.updateElementPositions);
    }
});
// CONCATENATED MODULE: ./src/js/components/atoms/tabbable-definition-list/index.js

/* harmony default export */ var atoms_tabbable_definition_list = (tabbable_definition_list);
// CONCATENATED MODULE: ./src/js/components/atoms/tooltip/tooltip.js
/* harmony default export */ var tooltip = ({
    name: 'tooltip',
    template: __webpack_require__(39),
    props: {
        block: {
            type: String,
            default: ''
        }
    },
    computed: {
        classObject: function classObject() {
            var classes = {};

            if (this.block !== '') {
                classes[this.block + '__tooltip'] = true;
            }

            return classes;
        }
    }
});
// CONCATENATED MODULE: ./src/js/components/atoms/tooltip/index.js

/* harmony default export */ var atoms_tooltip = (tooltip);
// CONCATENATED MODULE: ./src/js/components/atoms/youtube-video/youtube-video.js
var youtube_video_typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var embedProps = {
    modestbranding: {
        type: Boolean,
        default: true
    },
    controls: {
        type: Boolean,
        default: true
    },
    jsapi: {
        type: Boolean,
        default: true
    },
    fullscreen: {
        type: Boolean,
        default: true
    },
    rel: {
        type: Boolean,
        default: false
    },
    playsinline: {
        type: Boolean,
        default: true
    },
    start: {
        type: Number
    },
    end: {
        type: Number
    }
};

/* harmony default export */ var youtube_video = ({
    name: 'youtube-video',
    template: __webpack_require__(38),
    data: function data() {
        return {
            loadVideo: false
        };
    },
    props: _extends({
        videoId: {
            type: String,
            required: true
        }
    }, embedProps),
    computed: {
        videoQuery: function videoQuery() {
            var _this = this;

            var options = [];

            Object.keys(embedProps).forEach(function (key) {
                var value = _this[key],
                    valueType = typeof value === 'undefined' ? 'undefined' : youtube_video_typeof(value);

                if (valueType === 'boolean') {
                    options.push(key + '=' + ~~_this[key]);
                } else if (valueType !== 'undefined') {
                    options.push(key + '=' + _this[key]);
                }
            });

            return 'autoplay=1&' + options.join('&');
        },
        videoUrl: function videoUrl() {
            return 'https://www.youtube-nocookie.com/embed/' + this.videoId + '?' + this.videoQuery;
        }
    },
    mounted: function mounted() {
        this.loadVideo = true;
    }
});
// CONCATENATED MODULE: ./src/js/components/atoms/youtube-video/index.js

/* harmony default export */ var atoms_youtube_video = (youtube_video);
// CONCATENATED MODULE: ./src/js/components/atoms/index.js











// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(3);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "lodash/filter"
var filter_ = __webpack_require__(4);
var filter_default = /*#__PURE__*/__webpack_require__.n(filter_);

// EXTERNAL MODULE: external "lodash/find"
var find_ = __webpack_require__(2);
var find_default = /*#__PURE__*/__webpack_require__.n(find_);

// CONCATENATED MODULE: ./src/js/components/molecules/auto-complete/auto-complete.js






/* harmony default export */ var auto_complete = ({
    name: 'auto-complete',
    template: __webpack_require__(37),
    data: function data() {
        return {
            input: '',
            selectedItem: null,
            selectedIndex: 0,
            reversed: false,
            forceOpen: false,
            viewportUtil: new viewport()
        };
    },
    props: {
        inputId: {
            type: String,
            default: function _default() {
                return 'autocomplete' + ~~(Math.random() * 10000);
            }
        },
        value: {
            type: Object,
            default: null
        },
        defaultOpen: {
            type: Boolean,
            default: false
        },
        placeholder: {
            type: String,
            default: null
        },
        items: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        minChar: {
            type: Number,
            default: 3
        },
        titleField: {
            type: String,
            default: 'title'
        },
        valueField: {
            type: String,
            default: 'value'
        },
        storedItems: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        storedLabel: {
            type: String,
            default: 'Detected'
        },
        suggestionsLabel: {
            type: String,
            default: 'Suggestions'
        },
        required: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        classObject: function classObject() {
            return {
                'required': this.required,
                'auto-complete--reversed': this.reversed
            };
        },
        listId: function listId() {
            return this.inputId + '__dropdown';
        },
        hasInput: function hasInput() {
            return this.input.length > 0;
        },
        matchTitle: function matchTitle() {
            return this.hasInput && this.input.length >= this.minChar;
        },
        matchValue: function matchValue() {
            return this.hasInput && this.input.length === this.minChar - 1;
        },
        hasItems: function hasItems() {
            return Array.isArray(this.items) && this.items.length > 0;
        },
        isValid: function isValid() {
            return !(this.selectedItem === null || this.input !== this.selectedItem[this.titleField]);
        },
        isOpen: function isOpen() {
            if (!(this.storedItems && this.storedItems.length) && !(this.suggestedItems && this.suggestedItems.length)) {
                return false;
            }

            if (this.forceOpen) {
                return true;
            }

            if (this.hasInput && !this.isValid) {
                return true;
            }

            return this.hasInput && this.hasItems && !this.isValid;
        },
        suggestedItems: function suggestedItems() {
            var _this = this;

            var filterMatch = new RegExp(this.input, 'i'),
                filteredItems = filter_default()(this.items, function (item) {
                return !_this.storedItems || !_this.storedItems.includes(item);
            }),
                allSuggestedTitles = filter_default()(filteredItems, function (item) {
                return filterMatch.test(item[_this.titleField]);
            }),
                allSuggestedValues = filter_default()(filteredItems, function (item) {
                return filterMatch.test(item[_this.valueField]);
            });

            if (this.matchValue) {
                return allSuggestedValues;
            } else if (this.matchTitle) {
                return allSuggestedTitles;
            }

            return null;
        }
    },
    methods: {
        init: function init() {
            this.forceOpen = this.defaultOpen;
            this.viewportUtil.addScrollHandler(this.calculateDirection);
            this.viewportUtil.addResizeHandler(this.calculateDirection);
            if (this.value && this.value[this.titleField]) {
                this.input = this.value[this.titleField];
            }

            external_vue_default.a.nextTick(this.calculateDirection);
        },
        calculateDirection: function calculateDirection() {
            if (!this.$refs.autoComplete) {
                return;
            }
            var windowTop = this.viewportUtil.scrollY,
                windowBottom = windowTop + this.viewportUtil.screenHeight * (2 / 3),
                inputBounds = this.$refs.autoComplete.getBoundingClientRect(),
                inputTop = this.viewportUtil.scrollY + inputBounds.top,
                inputBottom = inputTop + inputBounds.height;

            this.reversed = windowBottom < inputBottom;
        },
        highlightString: function highlightString(data) {
            var stringToReplace = new RegExp(this.input, 'i'),
                matches = data.match(stringToReplace);

            if (!matches) {
                return data;
            }

            return data.replace(stringToReplace, '<span class="auto-complete__value">' + matches[0] + '</span>');
        },
        resetInput: function resetInput() {
            this.selectedIndex = 0;
            if (this.input === '') {
                this.$emit('close');
            }
            this.input = '';
        },
        resetIndex: function resetIndex() {
            this.selectedIndex = 0;
        },
        focus: function focus() {
            if (this.hasItems) {
                this.$refs.autoComplete.focus();
            }
        },
        selectItem: function selectItem(item) {
            this.input = item[this.titleField] || '';
            this.selectedItem = item;
            this.forceOpen = false;
            this.resetIndex();
            this.focus();
            this.$emit('input', item);
        },
        selectItemByInput: function selectItemByInput() {
            var _this2 = this;

            var matcher = new RegExp('^' + this.input + '$', 'i');
            var item = null;

            if (this.input.length >= this.minChar) {
                item = find_default()(this.items, function (i) {
                    return matcher.test(i[_this2.titleField]);
                });
            } else if (this.input.length === this.minChar - 1) {
                item = find_default()(this.items, function (i) {
                    return matcher.test(i[_this2.valueField]);
                });
            }

            if (item) {
                this.selectItem(item);
            }
        },
        selectCurrent: function selectCurrent() {
            var listItems = this.$el.querySelectorAll('.auto-complete__list-item');

            if (!listItems.length) {
                if (!this.input.length) {
                    this.$emit('changeFocus');
                }

                return;
            }

            if (listItems.length > this.selectedIndex) {
                listItems[this.selectedIndex].focus();
            }
        },
        selectNext: function selectNext() {
            if (!this.hasInput) {
                return;
            }
            this.selectedIndex++;
        },
        selectPrevious: function selectPrevious() {
            if (!this.hasInput) {
                return;
            }
            this.selectedIndex--;
        },
        closeList: function closeList() {
            this.selectedIndex = 0;
            external_vue_default.a.nextTick(this.focus);
        }
    },
    watch: {
        value: function value(newValue) {
            if (newValue !== null) {
                this.input = newValue[this.titleField];
            }
            this.selectedItem = newValue;
        },
        input: function input(newValue) {
            if (this.selectedItem !== null && newValue !== this.selectedItem[this.titleField]) {
                this.selectedItem = null;
            }
            this.resetIndex();
        },
        selectedIndex: function selectedIndex() {
            var listItems = this.$el.querySelectorAll('.auto-complete__list-item');

            if (!listItems) {
                return;
            }

            var lastIndex = listItems.length - 1;

            if (this.selectedIndex > lastIndex) {
                this.selectedIndex = 0;
            } else if (this.selectedIndex < 0) {
                this.selectedIndex = lastIndex;
            }

            if (listItems.length > this.selectedIndex) {
                listItems[this.selectedIndex].focus();
            }
        }
    },
    beforeMount: function beforeMount() {
        this.init();
    }
});
// CONCATENATED MODULE: ./src/js/components/molecules/auto-complete/index.js

/* harmony default export */ var molecules_auto_complete = (auto_complete);
// CONCATENATED MODULE: ./src/js/components/molecules/brand-card/brand-card.js
/* harmony default export */ var brand_card = ({
    name: 'brand-card',
    template: __webpack_require__(36),
    props: {
        body: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'quote'
        },
        image: {
            type: Object,
            default: function _default() {
                return {};
            }
        }
    }
});
// CONCATENATED MODULE: ./src/js/components/molecules/brand-card/index.js

/* harmony default export */ var molecules_brand_card = (brand_card);
// CONCATENATED MODULE: ./src/js/components/molecules/card/card.js
/* harmony default export */ var card = ({
    name: 'card',
    template: __webpack_require__(35),
    props: {
        block: {
            type: String,
            default: ''
        },
        card: {
            type: Object,
            default: function _default() {
                return {};
            }
        }
    },
    computed: {
        classObject: function classObject() {
            var classes = {};

            if (this.block !== '') {
                classes[this.block + '__card'] = true;
            }

            return classes;
        }
    }
});
// CONCATENATED MODULE: ./src/js/components/molecules/card/index.js

/* harmony default export */ var molecules_card = (card);
// CONCATENATED MODULE: ./src/js/components/molecules/color/color.js
/* harmony default export */ var color = ({
    name: 'color',
    template: __webpack_require__(34),
    props: {
        background: {
            type: String,
            default: ''
        }
    },
    methods: {
        lightness: function lightness(color) {
            var expression = /^#([A-Fa-f0-9]{2})([A-Fa-f0-9]{2})([A-Fa-f0-9]{2})/,
                matches = color && color.match ? color.match(expression) : false;

            if (!matches || matches.length !== 4) {
                return 0;
            }

            return parseInt(matches[1], 16) + parseInt(matches[2], 16) + parseInt(matches[3], 16);
        }
    },
    computed: {
        styleBackground: function styleBackground() {
            var styles = {};

            if (this.background !== '') {
                styles['background'] = this.background;
            }

            return styles;
        },
        styleIcon: function styleIcon() {
            var breakpoint = 382.5;
            var styles = {};

            if (this.background === '') {
                styles['color'] = 'black';

                return styles;
            }
            styles['color'] = this.lightness(this.background) >= breakpoint ? 'black' : 'white';

            return styles;
        }
    }
});
// CONCATENATED MODULE: ./src/js/components/molecules/color/index.js

/* harmony default export */ var molecules_color = (color);
// CONCATENATED MODULE: ./src/js/components/molecules/content-toggle/content-toggle.js
/* harmony default export */ var content_toggle = ({
    name: 'content-toggle',
    template: __webpack_require__(33),
    props: {
        toggleState: {
            type: Boolean,
            default: false
        },
        expandedText: {
            type: String,
            default: 'Less'
        },
        collapsedText: {
            type: String,
            default: 'More'
        },
        expandedIcon: {
            type: String,
            default: 'angle-up'
        },
        collapsedIcon: {
            type: String,
            default: 'angle-down'
        }
    },
    computed: {
        toggleText: function toggleText() {
            return this.toggleState ? this.expandedText : this.collapsedText;
        },
        toggleIcon: function toggleIcon() {
            return this.toggleState ? this.expandedIcon : this.collapsedIcon;
        }
    },
    methods: {
        toggle: function toggle() {
            this.toggleState = !this.toggleState;
            this.$emit('toggle');
        }
    }
});
// CONCATENATED MODULE: ./src/js/components/molecules/content-toggle/index.js

/* harmony default export */ var molecules_content_toggle = (content_toggle);
// CONCATENATED MODULE: ./src/js/utils/arithmetic.js
var arithmetic_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function arithmetic_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Arithmetic = function () {
  function Arithmetic() {
    arithmetic_classCallCheck(this, Arithmetic);
  }

  arithmetic_createClass(Arithmetic, null, [{
    key: "round",
    value: function round(number, decimals) {
      var multiplier = Math.pow(10, decimals);

      return decimals > 0 ? Math.round(number * multiplier) / multiplier : Math.round(number);
    }
  }, {
    key: "fixedNumber",
    value: function fixedNumber(number, decimals) {
      var rounded = Arithmetic.round(number, decimals);

      return parseFloat(rounded).toFixed(decimals);
    }
  }, {
    key: "greatestCommonDivisor",
    value: function greatestCommonDivisor(a, b) {
      return b === 0 ? a : Arithmetic.greatestCommonDivisor(b, a % b);
    }
  }]);

  return Arithmetic;
}();

/* harmony default export */ var arithmetic = (Arithmetic);
// CONCATENATED MODULE: ./src/js/components/molecules/currency/currency.js


/* harmony default export */ var currency = ({
    name: 'currency',
    template: __webpack_require__(32),
    props: {
        amount: {
            type: Number,
            required: true
        },
        currencyType: {
            type: String,
            default: '$'
        },
        decimals: {
            type: Number,
            default: 2
        }
    },
    computed: {
        formattedAmount: function formattedAmount() {
            return arithmetic.fixedNumber(this.amount, this.decimals);
        }
    }
});
// CONCATENATED MODULE: ./src/js/components/molecules/currency/index.js

/* harmony default export */ var molecules_currency = (currency);
// CONCATENATED MODULE: ./src/js/components/molecules/faux-vertical-scroll/faux-vertical-scroll.js
/* harmony default export */ var faux_vertical_scroll = ({
    name: 'faux-scroll',
    template: __webpack_require__(31),
    data: function data() {
        return {
            drag: {
                active: false,
                hasDragged: false,
                startX: 0,
                lastOffset: 0,
                maxOffset: 0
            },
            bar: {
                left: 0,
                scale: 100
            },
            posX: 0
        };
    },
    computed: {
        barStyle: function barStyle() {
            return {
                display: this.bar.scale < 100 ? 'block' : 'none',
                opacity: this.drag.active ? 1 : 0,
                width: this.bar.scale + '%'
            };
        }
    },
    methods: {
        click: function click(e) {
            if (!this.drag.hasDragged) {
                return;
            }
            e.preventDefault();
            e.stopPropagation();
        },
        mousedown: function mousedown(e) {
            e.preventDefault();
            e.stopPropagation();

            this.drag.startX = e.clientX;
            this.setActive();
        },
        mouseup: function mouseup(e) {
            this.setInactive();
        },
        mousemove: function mousemove(e) {
            if (!this.drag.active) {
                return;
            }
            this.calculateScrollState(this.drag.startX - e.clientX);
        },
        touchstart: function touchstart(e) {
            if (!e.changedTouches.length) {
                return;
            }
            this.drag.startX = e.changedTouches[0].pageX;
            this.setActive();
        },
        touchend: function touchend(e) {
            this.setInactive();
        },
        touchmove: function touchmove(e) {
            if (!this.drag.active || !e.changedTouches.length) {
                return;
            }
            e.preventDefault();
            e.stopPropagation();
            this.calculateScrollState(this.drag.startX - e.changedTouches[0].pageX);
        },
        setActive: function setActive() {
            this.drag.active = true;
            this.drag.hasDragged = false;
            this.drag.maxOffset = this.$el.scrollWidth - this.$el.offsetWidth;

            window.requestAnimationFrame(this.updateScrollState);
        },
        setInactive: function setInactive() {
            this.posX = this.drag.lastOffset;
            this.drag.active = false;
        },
        updateScrollState: function updateScrollState() {
            var left = this.drag.lastOffset * (this.bar.scale / 100) + this.bar.left;

            this.$el.scrollLeft = this.drag.lastOffset;
            this.$refs.bar.style.transform = 'translateX(' + left + 'px)';
            if (this.drag.active) {
                window.requestAnimationFrame(this.updateScrollState);
            }
        },
        calculateScrollState: function calculateScrollState(offset) {
            var totalOffset = offset + this.posX;
            var scale = this.$el.offsetWidth / this.$el.scrollWidth * 100;

            if (totalOffset > this.drag.maxOffset) {
                totalOffset = this.drag.maxOffset;
            } else if (totalOffset < 0) {
                totalOffset = 0;
            }

            this.bar.left = totalOffset;
            this.bar.scale = scale;
            this.drag.hasDragged = true;
            this.drag.lastOffset = totalOffset;
        }
    }
});
// CONCATENATED MODULE: ./src/js/components/molecules/faux-vertical-scroll/index.js

/* harmony default export */ var molecules_faux_vertical_scroll = (faux_vertical_scroll);
// CONCATENATED MODULE: ./src/js/components/molecules/flyout/flyout.js
/* harmony default export */ var flyout = ({
    name: 'flyout',
    template: __webpack_require__(30),
    data: function data() {
        return {
            linkIndex: 0,
            sectionIndex: 0,
            calc: 0
        };
    },

    props: {
        sections: {
            type: Array
        },
        isCompact: {
            type: Boolean
        },
        disableKeyboardEvents: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        clearIndexes: function clearIndexes() {
            this.linkIndex = 0;
            this.calc = 0;
            this.sectionIndex = 0;
        },
        checkIndexes: function checkIndexes(links, sections) {
            if (this.sectionIndex === 0) {
                this.clearIndexes();
            } else if (this.sectionIndex === sections.length - 1) {
                this.calc = links.length - sections[this.sectionIndex].querySelectorAll('a').length;
            }
            this.linkIndex = this.calc;
        },
        open: function open() {
            this.$emit('open');
        },
        close: function close() {
            this.clearIndexes();
            this.$emit('close');
        },
        backToParent: function backToParent() {
            this.$emit('main');
            this.close();
        },
        selectNextFlyoutLink: function selectNextFlyoutLink(e) {
            if (this.disableKeyboardEvents) {
                return;
            }

            var flyoutLinks = this.$el.querySelectorAll('a'),
                flyoutSections = this.$el.querySelectorAll('.flyout__section'),
                sectionLength = flyoutSections[this.sectionIndex].querySelectorAll('a').length;

            e.preventDefault();
            this.linkIndex++;

            if (flyoutLinks[this.linkIndex]) {
                flyoutLinks[this.linkIndex].focus();
            } else {
                this.backToParent();
            }

            if (this.linkIndex === sectionLength + this.calc) {
                this.sectionIndex++;
                this.calc += sectionLength;
            }
        },
        selectPrevFlyoutLink: function selectPrevFlyoutLink(e) {
            if (this.disableKeyboardEvents) {
                return;
            }

            var flyoutLinks = this.$el.querySelectorAll('a'),
                flyoutSections = this.$el.querySelectorAll('.flyout__section');

            e.preventDefault();
            this.linkIndex--;

            if (flyoutLinks[this.linkIndex]) {
                flyoutLinks[this.linkIndex].focus();
            } else {
                this.backToParent();
            }

            if (this.linkIndex === this.calc - 1) {
                this.sectionIndex--;
                this.calc -= flyoutSections[this.sectionIndex].querySelectorAll('a').length;
            }
        },
        selectNextFlyoutSection: function selectNextFlyoutSection(e) {
            if (this.disableKeyboardEvents) {
                return;
            }

            e.preventDefault();

            var flyoutLinks = this.$el.querySelectorAll('a'),
                flyoutSections = this.$el.querySelectorAll('.flyout__section');

            if (this.sectionIndex < flyoutSections.length - 1) {
                this.sectionIndex++;
            } else {
                this.sectionIndex = 0;
            }

            if (this.sectionIndex < flyoutSections.length && this.sectionIndex > 0) {
                this.calc += flyoutSections[this.sectionIndex - 1].querySelectorAll('a').length;
            }

            this.checkIndexes(flyoutLinks, flyoutSections);
            flyoutSections[this.sectionIndex].querySelector('a').focus();
        },
        selectPrevFlyoutSection: function selectPrevFlyoutSection(e) {
            if (this.disableKeyboardEvents) {
                return;
            }

            e.preventDefault();

            var flyoutLinks = this.$el.querySelectorAll('a'),
                flyoutSections = this.$el.querySelectorAll('.flyout__section');

            if (this.sectionIndex > 0) {
                this.sectionIndex--;
            } else {
                this.sectionIndex = flyoutSections.length - 1;
            }

            if (this.sectionIndex < flyoutSections.length && this.sectionIndex > 0) {
                this.calc -= flyoutSections[this.sectionIndex].querySelectorAll('a').length;
            }

            this.checkIndexes(flyoutLinks, flyoutSections);
            flyoutSections[this.sectionIndex].querySelector('a').focus();
        }
    }
});
// CONCATENATED MODULE: ./src/js/components/molecules/flyout/index.js

/* harmony default export */ var molecules_flyout = (flyout);
// CONCATENATED MODULE: ./src/js/components/molecules/flyout-section/flyout-section.js
/* harmony default export */ var flyout_section = ({
    name: 'flyout-section',
    template: __webpack_require__(29),

    data: function data() {
        return {
            columnClassDouble: 'flyout__section--2-columns',
            columnClassTriple: 'flyout__section--3-columns'
        };
    },

    props: {
        isCompact: {
            type: Boolean
        },
        isExpanded: {
            type: Boolean,
            default: false
        },
        maxVisible: {
            type: Number,
            default: 3
        },
        maxItemsCol: {
            type: Number,
            default: 6
        },
        title: {
            type: String,
            required: true
        },
        itemId: {
            type: String,
            default: function _default() {
                return 'flyout_title_' + ~~(Math.random() * 10000);
            }
        },
        links: {
            type: Array,
            required: true
        },
        bottomLinks: {
            type: Array
        }
    },
    computed: {
        hasItems: function hasItems() {
            return this.links;
        },
        moreThanMaxItems: function moreThanMaxItems() {
            return this.links.length > this.maxItemsCol;
        },
        lessThanDoubleMaxItems: function lessThanDoubleMaxItems() {
            return this.links.length <= this.maxItemsCol * 2;
        },
        moreThanDoubleMaxItems: function moreThanDoubleMaxItems() {
            return this.links.length > this.maxItemsCol * 2;
        },
        sectionClass: function sectionClass() {
            if (this.hasItems && this.moreThanMaxItems && this.lessThanDoubleMaxItems) {
                return this.columnClassDouble;
            } else if (this.hasItems && this.moreThanDoubleMaxItems) {
                return this.columnClassTriple;
            }

            return '';
        }
    }
});
// CONCATENATED MODULE: ./src/js/components/molecules/flyout-section/index.js

/* harmony default export */ var molecules_flyout_section = (flyout_section);
// CONCATENATED MODULE: ./src/js/components/molecules/icon-button/icon-button.js


/* harmony default export */ var icon_button = ({
    name: 'icon-button',
    template: __webpack_require__(28),
    props: {
        buttonClass: {
            type: String
        },
        buttonAriaLabel: {
            type: String,
            default: ''
        },
        iconName: String
    },
    computed: {
        hasDefaultSlot: function hasDefaultSlot() {
            return !!this.$slots.default;
        }
    },
    methods: {
        focus: function focus() {
            this.$el.focus();
        }
    }
});
// CONCATENATED MODULE: ./src/js/components/molecules/icon-button/index.js

/* harmony default export */ var molecules_icon_button = (icon_button);
// CONCATENATED MODULE: ./src/js/components/molecules/modal/modal.js



/* harmony default export */ var modal = ({
    name: 'modal',
    template: __webpack_require__(27),
    data: function data() {
        return {
            iframeLoaded: false
        };
    },
    created: function created() {
        window.addEventListener('keyup', this.closeModal);
    },
    beforeDestroy: function beforeDestroy() {
        window.removeEventListener('keyup', this.closeModal);
    },

    methods: {
        closeModal: function closeModal(e) {
            if (e.type === 'keyup' && e.key !== 'Esc' && e.key !== 'Escape') {
                return;
            }
            this.$emit('close');
        },
        showContent: function showContent() {
            this.iframeLoaded = true;
            external_gsap_["TweenLite"].to(this.$refs.modal, 0.1, { opacity: 1, ease: external_gsap_["Power2"].easeOut });
            external_gsap_["TweenLite"].to(this.$refs.modal, 0.3, { scale: 1, ease: external_gsap_["Power2"].easeOut });
        },
        enter: function enter(el, done) {
            var _this = this;

            var iframe = this.$refs.modal.querySelector('iframe'),
                timeLine = new external_gsap_["TimelineLite"]();

            external_gsap_["TweenLite"].set(this.$refs.modal, { opacity: 0, scale: 0.6 });
            timeLine.fromTo(this.$refs.overlay, 0.2, { opacity: 0 }, { opacity: 0.8 });
            timeLine.fromTo(this.$refs.close, 0.2, { opacity: 0 }, { opacity: 1 }, 0);

            if (iframe) {
                var loadTimeout = setTimeout(function () {
                    _this.showContent();
                }, 1500);

                iframe.addEventListener('load', function () {
                    if (!_this.iframeLoaded) {
                        clearTimeout(loadTimeout);
                        _this.showContent();
                    }
                });
            } else {
                timeLine.to(this.$refs.modal, 0.1, { opacity: 1, ease: external_gsap_["Power2"].easeOut }, 0.2);
                timeLine.to(this.$refs.modal, 0.3, { scale: 1, ease: external_gsap_["Power2"].easeOut }, 0.2);
            }

            timeLine.call(done);
        },
        leave: function leave(el, done) {
            var timeLine = new external_gsap_["TimelineLite"]();

            timeLine.to(this.$refs.modal, 0.2, { opacity: 0, scale: 0.6, ease: external_gsap_["Power2"].easeIn });
            timeLine.fromTo([this.$refs.overlay, this.$refs.close], 0.4, { opacity: 1 }, { opacity: 0 }, 0);
            timeLine.call(done);
        }
    }
});
// CONCATENATED MODULE: ./src/js/components/molecules/modal/index.js

/* harmony default export */ var molecules_modal = (modal);
// CONCATENATED MODULE: ./src/js/components/molecules/pager/pager.js



/* harmony default export */ var pager = ({
    name: 'pager',
    template: __webpack_require__(26),
    data: function data() {
        return {
            indicatorActive: false,
            viewport: new viewport()
        };
    },
    props: {
        pages: {
            type: Number,
            required: true
        },
        activeIndex: {
            type: Number,
            default: 0
        }
    },
    methods: {
        resizeHandler: function resizeHandler() {
            this.moveToCurrentPosition();
        },
        getChangeOffset: function getChangeOffset() {
            var indicatorRect = this.$refs.indicator.getBoundingClientRect(),
                indicatorOffsetRect = this.$refs.indicator.offsetParent.getBoundingClientRect(),
                currentPageRect = this.$refs.page[this.activeIndex].getBoundingClientRect();

            return {
                x: currentPageRect.left - indicatorOffsetRect.left,
                y: currentPageRect.top - indicatorOffsetRect.top,
                changeX: currentPageRect.left - indicatorRect.left,
                changeY: currentPageRect.top - indicatorRect.top
            };
        },
        moveToCurrentPosition: function moveToCurrentPosition() {
            var _getChangeOffset = this.getChangeOffset(),
                x = _getChangeOffset.x,
                y = _getChangeOffset.y;

            external_gsap_["TweenLite"].to(this.$refs.indicator, 0, { x: x, y: y });
        },
        changeIndex: function changeIndex(index) {
            this.$emit('index-changed', { index: index });
        },
        getAriaLabel: function getAriaLabel(index) {
            var label = '';

            if (index === this.activeIndex) {
                label += '"current page, ';
            }

            label += 'page ' + (index + 1);

            return label;
        }
    },
    watch: {
        activeIndex: function activeIndex(newValue, oldValue) {
            var tl = new external_gsap_["TimelineLite"](),
                offsets = this.getChangeOffset();

            tl.to(this.$refs.indicator, 0.2, { x: offsets.x - offsets.changeX * 0.2, y: offsets.y - offsets.changeY * 0.2, scaleX: 0.7, scaleY: 1.5 }).to(this.$refs.indicator, 0.2, { x: offsets.x, y: offsets.y, scaleX: 1, scaleY: 1 });
            external_gsap_["TweenLite"].to(tl, tl.duration, { ease: external_gsap_["Power3"].easeOut });
        }
    },
    mounted: function mounted() {
        this.indicatorActive = true;
        this.moveToCurrentPosition();
        this.viewport.addResizeHandler(this.resizeHandler);
    },
    beforeDestroy: function beforeDestroy() {
        this.viewport.removeResizeHandler(this.resizeHandler);
    }
});
// CONCATENATED MODULE: ./src/js/components/molecules/pager/index.js

/* harmony default export */ var molecules_pager = (pager);
// CONCATENATED MODULE: ./src/js/components/molecules/reseller-card/reseller-card.js
/* harmony default export */ var reseller_card = ({
    name: 'reseller-card',
    template: __webpack_require__(25),
    props: {
        name: {
            type: String,
            required: true
        },
        preferred: {
            type: Boolean,
            default: false
        },
        href: {
            type: String,
            required: true
        },
        labels: {
            type: Object,
            required: true
        }
    }
});
// CONCATENATED MODULE: ./src/js/components/molecules/reseller-card/index.js

/* harmony default export */ var molecules_reseller_card = (reseller_card);
// CONCATENATED MODULE: ./src/js/components/molecules/search/search-bar.js
/* harmony default export */ var search_bar = ({
    name: 'search-bar',
    template: __webpack_require__(24),
    data: function data() {
        return {
            searchValue: ''
        };
    },
    props: {
        openState: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        close: function close() {
            if (this.openState) {
                this.$emit('close');
            }
        },
        doSearch: function doSearch() {
            if (this.searchValue !== '') {
                window.location = 'https://ultimaker.com/search?search=' + encodeURIComponent(this.searchValue);
                this.close();
            }
        },
        onBlur: function onBlur() {
            if (this.searchValue === '') {
                this.close();
            }
        },
        focusInput: function focusInput() {
            this.$refs.search__input.focus();
        }
    }
});
// CONCATENATED MODULE: ./src/js/components/molecules/search/index.js

/* harmony default export */ var search = (search_bar);
// CONCATENATED MODULE: ./src/js/components/molecules/index.js














// CONCATENATED MODULE: ./src/js/components/organisms/cms-image/cms-image.js
function getImage(image, orientation, device) {
    var format = orientation + '_' + device;

    if (image.links && image.links[format] && image.links[format][0]) {
        return { url: image.links[format][0].href };
    }

    return '';
}

/* harmony default export */ var cms_image = ({
    name: 'cms-image',
    template: __webpack_require__(23),
    props: {
        image: {
            type: Object,
            required: true
        },
        orientation: {
            type: String,
            required: true,
            default: 'square'
        }
    },
    computed: {
        mobileImage: function mobileImage() {
            return getImage(this.image, this.orientation, 'mobile');
        },
        desktopImage: function desktopImage() {
            return getImage(this.image, this.orientation, 'desktop');
        },
        desktopRetinaImage: function desktopRetinaImage() {
            return getImage(this.image, this.orientation, 'desktop');
        },
        styles: function styles() {
            switch (this.orientation) {
                case 'square':
                    return { 'padding-top': '100%' };
                case 'landscape':
                    return { 'padding-top': '60%' };
                case 'portrait':
                    return { 'padding-top': '165%' };
                case 'landscapefull':
                    return { 'padding-top': '35%' };
                default:
                    return {};
            }
        }
    }
});
// CONCATENATED MODULE: ./src/js/components/organisms/cms-image/index.js

/* harmony default export */ var organisms_cms_image = (cms_image);
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(1);

// CONCATENATED MODULE: ./src/js/components/organisms/country-selector/country-selector.js
var country_selector_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }




/* harmony default export */ var country_selector = ({
    name: 'country-selector',
    template: __webpack_require__(22),
    data: function data() {
        return {
            initialized: false,
            initPromise: null,
            country: {},
            selectedCountry: {}
        };
    },
    props: {
        placeholder: {
            type: String,
            default: ''
        },
        value: {
            type: Object,
            default: null
        }
    },
    computed: country_selector_extends({}, Object(external_vuex_["mapGetters"])(['countries', 'detectedCountry']), {
        detectedCountries: function detectedCountries() {
            var detectedCountries = [];

            try {
                var detectedCountryByIp = find_default()(this.countries, { 'code': this.detectedCountry.code });

                if (detectedCountryByIp) {
                    detectedCountries.push(detectedCountryByIp);
                }
            } catch (ex) {
                throw ex;
            }

            return detectedCountries;
        }
    }),
    watch: {
        selectedCountry: function selectedCountry() {
            this.$emit('input', this.selectedCountry);
        }
    },
    methods: {
        init: function init() {
            var _this = this;

            if (this.initPromise !== null) {
                return this.initPromise;
            }

            var countryPromises = [this.$store.dispatch('FETCH_COUNTRIES'), this.$store.dispatch('FETCH_COUNTRY')];

            this.initPromise = Promise.all(countryPromises).then(function () {
                _this.initialized = true;
                if (_this.value && !_this.value.code && _this.selectedCountry && !_this.selectedCountry.code) {
                    _this.selectedCountry = find_default()(_this.countries, { 'code': _this.detectedCountry.code });
                }
            });

            return this.initPromise;
        },
        focus: function () {
            var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return this.initPromise;

                            case 2:
                                _context.next = 4;
                                return this.$nextTick();

                            case 4:

                                this.$refs.autocomplete.focus();

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function focus() {
                return _ref.apply(this, arguments);
            }

            return focus;
        }(),
        focusClose: function focusClose() {
            this.$refs.closeCountryPanel.focus();
        },
        close: function close() {
            this.$emit('close');
        },
        countryChanged: function countryChanged(country) {
            var _this2 = this;

            return new Promise(function (resolve, reject) {
                if (country !== null) {
                    setTimeout(function () {
                        _this2.selectedCountry = country;
                        resolve(country);
                    }, 100);
                }
            });
        }
    },
    beforeMount: function beforeMount() {
        this.init();
    }
});
// CONCATENATED MODULE: ./src/js/components/organisms/country-selector/index.js

/* harmony default export */ var organisms_country_selector = (country_selector);
// CONCATENATED MODULE: ./src/js/components/organisms/sub-nav/sub-nav.js
var sub_nav_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





/* harmony default export */ var sub_nav = ({
    name: 'sub-nav',
    template: __webpack_require__(21),
    data: function data() {
        return {
            viewport: new viewport()
        };
    },
    computed: sub_nav_extends({
        classObject: function classObject() {
            var classes = {
                'sub-nav--collapsed': this.viewport.scrollY > 75 && this.viewport.scrollOffset > -75
            };

            return classes;
        }
    }, Object(external_vuex_["mapGetters"])('page', ['page', 'pageLoading'])),
    methods: {
        mapLink: function mapLink(link) {
            return link.replace(/^\/api\/pages/, '');
        }
    }
});
// CONCATENATED MODULE: ./src/js/components/organisms/sub-nav/index.js

/* harmony default export */ var organisms_sub_nav = (sub_nav);
// CONCATENATED MODULE: ./src/js/components/organisms/index.js



// CONCATENATED MODULE: ./src/js/components/organisms-page/brands/brands.js
/* harmony default export */ var brands = ({
    name: 'brands',
    template: __webpack_require__(20),
    props: {
        title: {
            type: String,
            required: true
        },
        brands: {
            type: Array,
            required: true
        },
        contentLink: {
            type: Object
        }
    }
});
// CONCATENATED MODULE: ./src/js/components/organisms-page/brands/index.js

/* harmony default export */ var organisms_page_brands = (brands);
// CONCATENATED MODULE: ./src/js/components/organisms-page/brands-large/brands-large.js
/* harmony default export */ var brands_large = ({
    name: 'brands-large',
    template: __webpack_require__(19),
    props: {
        title: {
            type: String,
            required: true
        },
        text: {
            type: String
        },
        brands: {
            type: Array,
            required: true
        },
        contentLink: {
            type: Object
        }
    }
});
// CONCATENATED MODULE: ./src/js/components/organisms-page/brands-large/index.js

/* harmony default export */ var organisms_page_brands_large = (brands_large);
// CONCATENATED MODULE: ./src/js/components/organisms-page/cases/cases.js


/* harmony default export */ var cases = ({
    name: 'cases',
    template: __webpack_require__(18),
    data: function data() {
        return {
            viewport: new viewport(),
            showVideo: false
        };
    },
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        videoId: {
            type: String,
            required: true
        },
        buttonLabel: {
            type: String,
            required: true
        },
        buttonIcon: {
            type: String,
            required: true
        },
        image: {
            type: Object,
            required: true
        }
    },
    computed: {
        isMobileXl: function isMobileXl() {
            return this.viewport.isMobileXl;
        }
    },
    methods: {
        toggleVideo: function toggleVideo() {
            this.showVideo = !this.showVideo;
        }
    }
});
// CONCATENATED MODULE: ./src/js/components/organisms-page/cases/index.js

/* harmony default export */ var organisms_page_cases = (cases);
// CONCATENATED MODULE: ./src/js/components/organisms-page/colors/colors.js
/* harmony default export */ var colors = ({
    name: 'colors',
    template: __webpack_require__(17),
    data: function data() {
        return {
            activeColor: null,
            imageLoaded: false
        };
    },
    props: {
        title: {
            type: String,
            require: true
        },
        material: {
            type: Object,
            required: true
        }
    },
    computed: {
        shouldRender: function shouldRender() {
            return this.material !== null;
        },
        colors: function colors() {
            if (!this.material) {
                return null;
            }

            return this.material.material_colors;
        },
        image: function image() {
            if (this.activeColor) {
                return this.activeColor.image[0];
            }
            if (this.colors && this.colors.length) {
                return this.colors[0].image[0];
            }

            return null;
        },
        imageClass: function imageClass() {
            return {
                'colors__image--loading': !this.imageLoaded
            };
        }
    },
    methods: {
        checkTooltipPos: function checkTooltipPos(e) {
            var target = e.currentTarget,
                tooltip = target.querySelector('.tooltip'),
                classPushLeft = 'push--left',
                classPushRight = 'push--right';

            tooltip.classList.remove(classPushLeft);
            tooltip.classList.remove(classPushRight);

            var boundaryLeft = tooltip.getBoundingClientRect().x,
                tooltipWidth = tooltip.getBoundingClientRect().width,
                viewportWidth = window.innerWidth,
                boundaryRight = boundaryLeft + tooltipWidth;

            if (boundaryLeft < 0) {
                tooltip.classList.add(classPushRight);
            } else if (boundaryRight > viewportWidth) {
                tooltip.classList.add(classPushLeft);
            }
        },
        setSelected: function setSelected(color, e) {
            this.activeColor = color;
        }
    },
    watch: {
        image: function image() {
            this.imageLoaded = false;
        }
    },
    mounted: function mounted() {
        var _this = this;

        if (!this.image && !this.$refs.image) {
            return;
        }

        var img = this.$refs.image.querySelector('img');

        if (img) {
            img.addEventListener('load', function () {
                _this.imageLoaded = true;
            });
        }
    }
});
// CONCATENATED MODULE: ./src/js/components/organisms-page/colors/index.js

/* harmony default export */ var organisms_page_colors = (colors);
// CONCATENATED MODULE: ./src/js/components/organisms-page/ecosystem/ecosystem.js
/* harmony default export */ var ecosystem = ({
    name: 'ecosystem',
    template: __webpack_require__(16),
    props: {
        title: {
            type: String,
            required: false
        },
        items: {
            type: Array,
            required: true
        }
    }
});
// CONCATENATED MODULE: ./src/js/components/organisms-page/ecosystem/index.js

/* harmony default export */ var organisms_page_ecosystem = (ecosystem);
// CONCATENATED MODULE: ./src/js/components/organisms-page/examples/examples.js
/* harmony default export */ var examples = ({
    name: 'examples',
    template: __webpack_require__(15),
    props: {
        title: {
            type: String,
            required: true
        },
        cards: {
            type: Array,
            required: true
        },
        horizontalList: {
            type: Object
        }
    }
});
// CONCATENATED MODULE: ./src/js/components/organisms-page/examples/index.js

/* harmony default export */ var organisms_page_examples = (examples);
// CONCATENATED MODULE: ./src/js/components/organisms-page/explore/explore.js
var explore_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };





var defaultAnimationDuration = 1;

/* harmony default export */ var explore = ({
    name: 'explore',
    template: __webpack_require__(14),
    data: function data() {
        return {
            activeSlide: 0
        };
    },
    props: {
        title: {
            type: String,
            required: true
        },
        items: {
            type: Array,
            required: true
        }
    },
    computed: explore_extends({}, Object(external_vuex_["mapGetters"])('page', ['page']), {
        isMobile: function isMobile() {
            return false;
        },
        buttons: function buttons() {
            return {
                next: {
                    label: 'next',
                    iconName: 'arrow-down'
                },
                previous: {
                    label: 'previous',
                    iconName: 'arrow-up'
                }
            };
        }
    }),
    methods: {
        indexChanged: function indexChanged(payload) {
            this.activeSlide = payload.index;
        },
        navClicked: function navClicked(direction) {
            var maxItems = this.items.length;

            if (direction === 'previous') {
                this.activeSlide = --this.activeSlide < 0 ? maxItems - 1 : this.activeSlide;
            } else {
                this.activeSlide = ++this.activeSlide > maxItems - 1 ? 0 : this.activeSlide;
            }
        },
        imageEnter: function imageEnter(image, done) {
            external_gsap_["TweenLite"].fromTo(image, defaultAnimationDuration, { opacity: 0 }, { opacity: 1, ease: external_gsap_["Power0"].easeIn, onComplete: done });
        },
        imageLeave: function imageLeave(image, done) {
            external_gsap_["TweenLite"].to(image, defaultAnimationDuration, { opacity: 0, ease: external_gsap_["Power0"].easeOut, onComplete: done });
        }
    }
});
// CONCATENATED MODULE: ./src/js/components/organisms-page/explore/index.js

/* harmony default export */ var organisms_page_explore = (explore);
// CONCATENATED MODULE: ./src/js/components/organisms-page/general-content/general-content.js
/* harmony default export */ var general_content = ({
    name: 'general-content',
    template: __webpack_require__(13),
    props: {
        title: {
            type: String,
            required: true
        },
        text: {
            type: Array,
            required: true,
            default: function _default() {
                return [];
            }
        },
        reversed: {
            type: Boolean,
            default: false
        },
        contentLink: {
            type: Object
        },
        image: {
            type: Object
        }
    }
});
// CONCATENATED MODULE: ./src/js/components/organisms-page/general-content/index.js

/* harmony default export */ var organisms_page_general_content = (general_content);
// CONCATENATED MODULE: ./src/js/components/organisms-page/hero-product/hero-product.js
/* harmony default export */ var hero_product = ({
    name: 'hero-product',
    template: __webpack_require__(12),
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        link: {
            type: Array,
            required: false
        },
        image: {
            type: Array,
            required: true
        },
        materials: {
            type: Array,
            required: true
        },
        documents: {
            type: Array,
            required: false
        },
        labels: {
            type: Object,
            required: true
        }
    }
});
// CONCATENATED MODULE: ./src/js/components/organisms-page/hero-product/index.js

/* harmony default export */ var organisms_page_hero_product = (hero_product);
// CONCATENATED MODULE: ./src/js/components/organisms-page/hero-products-application/hero-products-application.js
/* harmony default export */ var hero_products_application = ({
    name: 'hero-products-application',
    template: __webpack_require__(11),
    props: {
        title: {
            required: true,
            type: String
        },
        subtitle: {
            required: true,
            type: String
        },
        heroImage: {
            required: true,
            type: Object
        },
        productImage: {
            required: true,
            type: Object
        },
        uspIcons: {
            required: true,
            type: Array
        },
        description: {
            required: true,
            type: String
        },
        ctaLink: {
            required: true,
            type: Object
        },
        product: {
            required: false,
            type: Object
        },
        links: {
            required: false,
            type: Array
        }
    }
});
// CONCATENATED MODULE: ./src/js/components/organisms-page/hero-products-application/index.js

/* harmony default export */ var organisms_page_hero_products_application = (hero_products_application);
// CONCATENATED MODULE: ./src/js/components/organisms-page/hero-text/hero-text.js
/* harmony default export */ var hero_text = ({
    name: 'hero-text',
    template: __webpack_require__(10),
    props: {
        title: {
            type: String,
            required: false
        },
        contents: {
            type: String,
            required: true
        }
    }
});
// CONCATENATED MODULE: ./src/js/components/organisms-page/hero-text/index.js

/* harmony default export */ var organisms_page_hero_text = (hero_text);
// CONCATENATED MODULE: ./src/js/components/organisms-page/resellers/resellers.js
/* harmony default export */ var resellers = ({
    name: 'resellers',
    template: __webpack_require__(9),
    data: function data() {
        return {
            visibleAllAuthorizedResellers: false,
            visibleTooltipPreferred: false,
            showMax: 6
        };
    },
    props: {
        title: {
            type: String,
            required: true
        },
        tooltip: {
            type: String
        },
        resellers: {
            type: Array,
            required: true
        },
        labels: {
            type: Object,
            required: true
        }
    },
    methods: {
        showTooltipPreferred: function showTooltipPreferred() {
            this.visibleTooltipPreferred = true;
        },
        hideTooltipPreferred: function hideTooltipPreferred() {
            this.visibleTooltipPreferred = false;
        },
        showAllAuthorizedResellers: function showAllAuthorizedResellers() {
            this.visibleAllAuthorizedResellers = true;
        }
    },
    computed: {
        preferredResellersTooltipVisible: function preferredResellersTooltipVisible() {
            return this.labels.preferredResellersInfoText && this.labels.preferredResellersInfoLabel;
        },
        resellersPreferred: function resellersPreferred() {
            return this.resellers.filter(function (reseller) {
                return reseller.preferred === true;
            });
        },
        resellersAuthorized: function resellersAuthorized() {
            return this.resellers.filter(function (reseller) {
                return reseller.preferred === false;
            });
        },
        pagedResellersAuthorized: function pagedResellersAuthorized() {
            return this.visibleAllAuthorizedResellers ? this.resellersAuthorized : this.resellersAuthorized.slice(0, this.showMax);
        }
    }
});
// CONCATENATED MODULE: ./src/js/components/organisms-page/resellers/index.js

/* harmony default export */ var organisms_page_resellers = (resellers);
// CONCATENATED MODULE: ./src/js/components/organisms-page/slider-reveal/slider-reveal.js



/* harmony default export */ var slider_reveal = ({
    name: 'slider-reveal',
    template: __webpack_require__(8),
    props: {
        styleModifiers: {
            type: Array,
            required: false
        },
        title: {
            type: String,
            required: false
        },
        contents: {
            type: Array,
            required: true
        },
        imageSlider: {
            type: Object,
            required: true
        },
        link: {
            type: Object,
            required: false
        }
    },
    computed: {
        hasLink: function hasLink() {
            return this.link && this.link.text;
        }
    },
    data: function data() {
        return {
            isMobile: false,
            itemOffsetY: 0,
            itemHeight: 0,
            prevItemHeight: 0,
            screenCenterY: 0,
            timeLine: null,
            viewportUtil: new viewport()
        };
    },
    mounted: function mounted() {
        var _this = this;

        this.$nextTick(function () {
            return _this.initialize();
        });
    },
    beforeDestroy: function beforeDestroy() {
        this.removeEventListeners();
    },

    methods: {
        initialize: function initialize() {
            this.resize();
            this.scroll();
            this.addEventListeners();
        },
        addEventListeners: function addEventListeners() {
            this.viewportUtil.addScrollHandler(this.scrollHandler);
            this.viewportUtil.addResizeHandler(this.resizeHandler);
        },
        removeEventListeners: function removeEventListeners() {
            this.viewportUtil.removeScrollHandler(this.scrollHandler);
            this.viewportUtil.removeResizeHandler(this.resizeHandler);
        },
        getOffsetForElement: function getOffsetForElement(el) {
            var rect = el.getBoundingClientRect();
            var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
        },
        calculateOffsets: function calculateOffsets() {
            if (this.$refs['image-mask'] && this.$refs['image-mask'][0]) {
                this.itemOffsetY = this.getOffsetForElement(this.$refs['image-mask'][0]);
                this.itemHeight = this.$refs['image-wrapper'].getBoundingClientRect().height;
                this.screenCenterY = window.innerHeight * 0.5;
            } else {
                setTimeout(this.calculateOffsets, 200);
            }
        },
        setupTimeLine: function setupTimeLine() {
            if (this.itemHeight !== this.prevItemHeight) {
                this.prevItemHeight = this.itemHeight;

                this.timeLine = new external_gsap_["TimelineLite"]({ paused: true });
                this.timeLine.fromTo(this.$refs['image-mask'][1], 0.2, { height: 0 }, { height: this.itemHeight, ease: external_gsap_["Power2"].easeInOut });
            }
        },
        resize: function resize() {
            this.isMobile = this.viewportUtil.isMobile;

            this.calculateOffsets();
            this.setupTimeLine();
            this.scroll();
        },
        scroll: function scroll() {
            var progress = 0;
            var diff = this.itemOffsetY.top - this.viewportUtil.scrollY - this.screenCenterY + this.itemHeight;

            diff = diff < 0 ? 0 : diff;
            diff = diff > this.itemHeight ? this.itemHeight : diff;
            progress = diff / this.itemHeight;

            external_gsap_["TweenLite"].to(this.timeLine, 0.2, { progress: progress });
        },
        resizeHandler: function resizeHandler() {
            this.resize();
        },
        scrollHandler: function scrollHandler() {
            this.scroll();
        }
    }
});
// CONCATENATED MODULE: ./src/js/components/organisms-page/slider-reveal/index.js

/* harmony default export */ var organisms_page_slider_reveal = (slider_reveal);
// CONCATENATED MODULE: ./src/js/components/organisms-page/ubr/ubr.js
/* harmony default export */ var ubr = ({
    name: 'ubr',
    template: __webpack_require__(7),
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        image: {
            type: Array,
            required: true
        },
        reasons: {
            type: Array,
            required: true
        }
    }
});
// CONCATENATED MODULE: ./src/js/components/organisms-page/ubr/index.js

/* harmony default export */ var organisms_page_ubr = (ubr);
// CONCATENATED MODULE: ./src/js/components/organisms-page/index.js














// CONCATENATED MODULE: ./src/js/components/index.js
var components_extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };






/* harmony default export */ var components = (components_extends({}, atoms_namespaceObject, molecules_namespaceObject, organisms_namespaceObject, organisms_page_namespaceObject));
// EXTERNAL MODULE: ./src/scss/ultimaker.scss
var ultimaker = __webpack_require__(50);

// CONCATENATED MODULE: ./src/js/utils/text-utils.js
var text_utils_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function text_utils_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TextUtils = function () {
    function TextUtils() {
        text_utils_classCallCheck(this, TextUtils);
    }

    text_utils_createClass(TextUtils, null, [{
        key: 'htmlDecode',
        value: function htmlDecode(input) {
            var e = document.createElement('div');

            e.innerHTML = input;

            return e.childNodes.length === 0 ? '' : e.childNodes[0].nodeValue;
        }
    }]);

    return TextUtils;
}();

/* harmony default export */ var text_utils = (TextUtils);
// CONCATENATED MODULE: ./src/js/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registry", function() { return registry; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Defaults", function() { return defaults; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "Arithmetic", function() { return arithmetic; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "BrowserCapabilities", function() { return browser_capabilities; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "TextUtils", function() { return text_utils; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "ViewportUtility", function() { return viewport; });




var __svg__ = { filename: __webpack_require__.p +"static/icons/iconset.svg" };

var registry = new component_registry();

Object.keys(components).forEach(function (c) {
    registry.registerComponent(components[c]);
});









/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "<article class=\"ubr\">\n    <section class=\"container\">\n        <h2>{{ title }}</h2>\n        <div class=\"flexgrid flexgrid--gutter flexgrid--column-reversed flexgrid--mobile-xl-row\">\n            <div class=\"flexgrid__cell--xs-6\">\n                <div class=\"ubr__description\">\n                    <p>{{ description }}</p>\n                    <ul class=\"list ubr__list\">\n                        <li class=\"list__item\" v-for=\"reason of reasons\">{{ reason }}</li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"flexgrid__cell--xs-6\">\n                <template v-if=\"image && image.length\">\n                    <div class=\"ubr__image \">\n                        <cms-image class=\"img--responsive\" :image=\"image[0]\" :orientation=\"'landscape'\"></cms-image>\n                    </div>\n                </template>\n            </div>\n        </div>\n    </section>\n</article>\n";

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = "<article class=\"slider-reveal\" v-bind:class=\"styleModifiers\">\n    <section class=\"container slider-reveal__container\">\n        <div class=\"flexgrid flexgrid--gutter\">\n            <div class=\"flexgrid__cell--xs-6 slider-reveal__grid-cell\">\n                <h2 class=\"slider-reveal__title\"> {{ title }}</h2>\n                <p v-if=\"!isMobile\" class=\"slider-reveal__body\" v-for=\"content in contents\">{{ content }}</p>\n                <content-link v-if=\"!isMobile && hasLink\" v-bind=\"link\" class=\"link--icon link--large\">{{ link.text }}</content-link>\n            </div>\n            <div class=\"flexgrid__cell--xs-6 slider-reveal__grid-cell\">\n                <div ref=\"image-wrapper\" class=\"slider-reveal__image-wrapper\">\n                    <div class=\"slider-reveal__image-aspect\">\n                        <div class=\"slider-reveal__mask\"\n                            ref=\"image-mask\"\n                            v-for=\"image in imageSlider.images\"\n                        >\n                            <responsive-picture v-bind=\"image\" img-class=\"slider-reveal__image\"></responsive-picture>\n                        </div>\n                    </div>\n                </div>\n                <p v-if=\"isMobile\" class=\"slider-reveal__body\" v-for=\"content in contents\">{{ content }}</p>\n                <content-link v-if=\"isMobile && hasLink\" v-bind=\"link\" class=\"link--icon link--large\">{{ link.text }}</content-link>\n            </div>\n        </div>\n    </section>\n</article>";

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "<article class=\"resellers\">\n    <section class=\"container\">\n        <h2 class=\"resellers__title\">{{title}}</h2>\n        <section class=\"reseller-section reseller-section--preferred\" v-if=\"resellers\">\n            <header class=\"reseller-section__header\">\n                <h3 class=\"reseller-section__title\">{{ labels.preferredResellers }} \n                    <span class=\"reseller-section__count\">({{resellersPreferred.length}})</span>\n                    <template v-if=\"preferredResellersTooltipVisible\">\n                        <transition name=\"tooltip\">\n                            <tooltip id=\"tooltip-preferred\" block=\"resellers\" v-show=\"visibleTooltipPreferred\">\n                                {{ labels.preferredResellersInfoText }}\n                            </tooltip>\n                        </transition>\n                    </template>\n                </h3>\n                <content-link\n                    class=\"reseller-section__info-link\"\n                    :icon=\"'info'\"\n                    mod=\"reversed\"\n                    @click.native.prevent\n                    @focus.native.prevent=\"showTooltipPreferred\"\n                    @blur.native.prevent=\"hideTooltipPreferred\"\n                    role=\"button\"\n                    aria-describedby=\"tooltip-preferred\"\n                    v-if=\"preferredResellersTooltipVisible\">\n                    {{ labels.preferredResellersInfoLabel }}\n                </content-link>\n            </header>\n\n            <ul class=\"reseller-list\" v-if=\"resellersPreferred.length > 0\">\n                <div class=\"flexgrid flexgrid--gutter flexgrid--mobile-xl-row\">\n                    <template v-for=\"reseller in resellersPreferred\">\n                        <div class=\"flexgrid__cell--sm-4 flexgrid__cell--xs-6\">\n                            <li class=\"reseller-list__item\">\n                                <reseller-card v-bind=\"reseller\" :labels=\"labels\"></reseller-card>\n                            </li>\n                        </div>\n                    </template>\n                </div>\n            </ul>\n        </section>\n\n        <section class=\"reseller-section reseller-section--authorized\" v-if=\"resellers\">\n            <header class=\"reseller-section__header\">\n                <h3 class=\"reseller-section__title\">{{ labels.authorizedResellers }} <span\n                    class=\"reseller-section__count\">({{ resellersAuthorized.length }})</span>\n                </h3>\n            </header>\n            <ul class=\"reseller-list\" v-if=\"resellersAuthorized.length > 0\">\n                <div class=\"flexgrid flexgrid--gutter flexgrid--mobile-xl-row\">\n                    <div class=\"flexgrid__cell--sm-4 flexgrid__cell--xs-6\" v-for=\"(reseller, index) in pagedResellersAuthorized\">\n                        <li class=\"reseller-list__item\">\n                            <reseller-card v-bind=\"reseller\" :labels=\"labels\"></reseller-card>\n                        </li>\n                    </div>\n                    <template v-if=\"resellersAuthorized.length > showMax && !visibleAllAuthorizedResellers\">\n                        <div class=\"flexgrid__cell flexgrid__cell--reseller-list__button--center\">\n                            <button class=\"button--secondary reseller-list__button\"\n                                    @click=\"showAllAuthorizedResellers\">{{ labels.showAll }}\n                            </button>\n                        </div>\n                    </template>\n                </div>\n            </ul>\n        </section>\n    </section>\n</article>\n";

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "<article class=\"hero hero--text\" v-if=\"this.contents && contents.length\" >\n    <div class=\"container\">\n        <h1 v-if=\"title && title.length\">{{ title }}</h1>\n        <div class=\"hero__content content--rich\" v-html=\"contents\" />\n    </div>\n</article>\n\n";

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = "<article class=\"hero hero--products-application\">\n    <div class=\"hero__container--top\">\n            <responsive-picture v-bind=\"heroImage\" imgClass=\"hero__image--full\"></responsive-picture>\n            <div class=\"hero__image-overlay\"></div>\n        <div class=\"container\">\n            <div class=\"flexgrid flexgrid--gutter\">\n                <div class=\"flexgrid__cell--xs-6\">\n                    <div class=\"hero__headline\">\n                        <h1>{{ title }}</h1>\n                    </div>\n                </div>\n\n                <div class=\"flexgrid__cell\" style=\"position:relative;\">\n                    <p class=\"hero__subtitle\">{{ subtitle }}</p>\n                    <responsive-picture v-bind=\"productImage\" imgClass=\"hero__image--product\"></responsive-picture>\n                </div>\n\n                <div class=\"flexgrid__cell--xs-6\">\n                    <div class=\"hero__usp-container\">\n                        <div class=\"hero__usp usp--icon\" v-for=\"icon in uspIcons\">\n                            <icon :icon-name=\"icon.iconName\" class=\"usp__icon\"></icon>\n                            <small class=\"usp__label\">{{ icon.text }}</small>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"container\">\n        <div class=\"flexgrid flexgrid--gutter\">\n            <div class=\"flexgrid__cell--xs-6\">\n                <div class=\"hero__description\">\n                    <p class=\"copy--intro\">{{ description }}</p>\n                    <!-- {{> molecules-price-table}} -->\n                    <!-- {{> molecules-price-table-tabs}} -->\n                    <!-- {{> atoms-anchor-button:button--primary|hero__button}} -->\n                    <p>TODO: Pricetable</p>\n                    <router-link :to=\"ctaLink.href\" class=\"button button--primary hero__button\">{{  ctaLink.text }}</router-link>\n                    <ul class=\"link-list link-list--icon hero__link-list\" v-if=\"links && links.length\">\n                        <li class=\"link-list__item\" v-for=\"link in links\">\n                            <content-link :href=\"link.href\" :icon=\"link.icon\">{{ link.text }}</content-link>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</article>\n";

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = "<article class=\"hero hero--products\">\n    <section class=\"container hero__container\">\n        <div class=\"flexgrid flexgrid--gutter flexgrid--column-reversed flexgrid--mobile-xl-row\">\n\n            <div class=\"flexgrid__cell--xs-6\">\n                <div class=\"hero__description\">\n                    <!--Intro-->\n                    <h1>{{ title }}</h1>\n                    <p class=\"copy--intro\">{{ description }}</p>\n                    <!--End intro-->\n\n                    <!--Price table-->\n                    <div class=\"price-table hero__price-table\">\n                        <ul class=\"price-table__list\" role=\"tablist\">\n                            <li class=\"price-table__item\" v-for=\"material in materials\" role=\"tab\">\n                                <icon icon-name=\"material\" class=\"price-table__icon\"></icon>\n                                <span class=\"price-table__info\">\n                                    <small class=\"price-table__tagline\">\n                                        {{ material['short_title'] }},\n                                        {{ material.weight.value }}{{ material.weight.unit }}\n                                        from\n                                    </small>\n                                    <currency :currency-type=\"material.price.currency\" :amount=\"material.price.value\" :decimals=\"0\"></currency>\n                                </span>\n                            </li>\n                        </ul>\n                        <small class=\"price-table__disclaimer\">{{ labels.excludingVat }}</small>\n                    </div>\n                    <!--End price table-->\n\n                    <!--Button-->\n                    <a href=\"\" class=\"button button--primary hero__button\" v-if=\"materials && materials.length\">{{ labels.buyCta }}</a>\n                    <!--End button-->\n\n                    <!--Link list icons-->\n                    <ul class=\"link-list link-list--icon hero__link-list\">\n                        <template v-if=\"documents\">\n                            <li class=\"link-list__item\" v-for=\"link in this.link\">\n                                <content-link :href=\"link.uri\" icon=\"info\">{{ link.title }}</content-link>\n                            </li>\n                        </template>\n                        <template v-if=\"this.documents\">\n                            <li class=\"link-list__item\" v-for=\"document in documents\" v-if=\"document.links\">\n                                <content-link :href=\"document.links.self.href\" icon=\"download\">{{ labels.download}} {{ document.title }}</content-link>\n                            </li>\n                        </template>\n                    </ul>\n                    <!--End link list-->\n                </div>\n            </div>\n\n            <!--Image -->\n            <div class=\"flexgrid__cell--xs-6\">\n                <div class=\"hero__image--product\">\n                    <template v-if=\"this.image && this.image.length\">\n                        <cms-image :image=\"image[0]\" :orientation=\"'square'\"></cms-image>\n                    </template>\n                </div>\n            </div>\n            <!--End image-->\n\n        </div>\n    </section>\n</article>\n";

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = "<article class=\"general-content\">\n    <section class=\"container general-content__container\">\n        <div class=\"flexgrid flexgrid--gutter\" :class=\"{'flexgrid--row-reversed': reversed}\">\n            <div class=\"flexgrid__cell--xs-6 flexgrid__cell--md-4 general-content__grid-cell\">\n                <h2 class=\"general-content__title\"> {{ title }}</h2>\n                <p class=\"general-content__body\" v-for=\"p in text\">{{ p }}</p>\n                <content-link  v-if=\"contentLink\" :block=\"'general-content'\" :href=\"contentLink.href\">{{ contentLink.text }}</content-link>\n            </div>\n            <div class=\"flexgrid__cell--xs-6 flexgrid__cell--md-8 general-content__grid-cell\">\n                <div class=\"general-content__image-wrapper\">\n                    <responsive-picture v-if=\"image\" v-bind=\"image\"></responsive-picture>\n                </div>\n            </div>\n        </div>\n    </section>\n</article>";

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = "<article class=\"explore\">\n    <section class=\"container explore__container\">\n        <div class=\"flexgrid flexgrid--gutter\">\n            <div class=\"flexgrid__cell--xs-6\">\n                <h2 class=\"explore__title\">{{ title }}</h2>\n            </div>\n        </div>\n        <div class=\"explore__image-placeholder\">\n            <template v-for=\"(item, index) in items\">\n                <transition @enter=\"imageEnter\" @leave=\"imageLeave\">\n                    <picture ref=\"image\" v-show=\"index === activeSlide\">\n                        <source media=\"(min-width: 569px)\" :srcset=\"item.image.mobileXlWidth.url + ', ' + item.image.mobileXlWidth.retina.url + ' 2x'\">\n                        <img class=\"img--responsive explore__image img--contain\" :src=\"item.image.mobileWidth.url\" :alt=\"item.image.alt\">\n                    </picture>\n                </transition>\n            </template>\n            <pager name=\"explore-pager\" class=\"explore__pager\" :pages=\"items.length\"\n                   :active-index=\"activeSlide\" @index-changed=\"indexChanged\"></pager>\n        </div>\n        <div class=\"flexgrid flexgrid--gutter\">\n            <div class=\"flexgrid__cell--xs-6\">\n                <div class=\"explore__description\">\n                    <tabbable-definition-list\n                        :items=\"items\"\n                        :active-index=\"activeSlide\"\n                        @index-changed=\"indexChanged\"\n                    ></tabbable-definition-list>\n                </div>\n                <div class=\"explore__navigation\">\n                    <icon-button class=\"explore__nav\"\n                                 v-if=\"buttons && buttons.previous\"\n                                 :icon-name=\"buttons.previous.iconName\"\n                                 @click=\"navClicked('previous')\">\n                        <span class=\"icon-button__label\">{{ buttons.previous.label }}</span>\n                    </icon-button>\n                    <icon-button class=\"explore__nav icon-button--reversed\"\n                                 v-if=\"buttons && buttons.next\"\n                                 :icon-name=\"buttons.next.iconName\"\n                                 @click=\"navClicked('next')\">\n                        <span class=\"icon-button__label\">{{ buttons.next.label }}</span>\n                    </icon-button>\n                </div>\n            </div>\n        </div>\n    </section>\n</article>\n";

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = "<article class=\"examples\">\n    <div class=\"container\">\n        <header>\n            <h2 class=\"examples__headline\">{{ title }}</h2>\n        </header>\n        <horizontal-list class=\"examples__caption\" v-bind=\"horizontalList\" v-if=\"horizontalList\"></horizontal-list>\n        <div class=\"cards\">\n            <div class=\"flexgrid flexgrid--gutter\">\n                <div class=\"flexgrid__cell--sm-4 flexgrid__cell--xs-6\" v-for=\"card in this.cards\">\n                    <card :block=\"'examples'\" :card=\"card\"></card>\n                </div>\n            </div>\n        </div>\n    </div>\n</article>\n";

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = "<article class=\"ecosystem\">\n    <section class=\"container\">\n      <h2 class=\"ecosystem__title\" v-if=\"title\">{{ title }}</h2>\n      <div class=\"ecosystem__items\">\n          <card v-for=\"(item, index) in items\" :key=\"index\" :card=\"item\" :block=\"'ecosystem'\"></card>\n      </div>\n    </section>\n</article>";

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = "<article class=\"colors\" v-if=\"shouldRender\">\n    <div class=\"container\">\n        <header>\n            <h2>{{ title }}</h2>\n        </header>\n        <div class=\"flexgrid flexgrid--gutter flexgrid--column-reversed flexgrid--mobile-xl-row\">\n\n            <div class=\"flexgrid__cell--xs-6 flexgrid__cell--sm-4\">\n                <div class=\"colors__swatches\">\n                    <ul class=\"list colors__list\" v-if=\"colors\">\n                        <li class=\"list__item colors__list-item\" :class=\"{'color--selected': color === activeColor }\"\n                            v-for=\"color in colors\">\n                            <hit-area @mouseover.native=\"checkTooltipPos\" @focus.native=\"checkTooltipPos\"\n                                      @click.native=\"setSelected(color)\" @keyup.enter.native=\"setSelected(color)\">\n                                <tooltip block=\"colors\">\n                                    <dl class=\"list tooltip__list\">\n                                        <dt class=\"list__item tooltip__list-item tooltip__label\">Material:</dt>\n                                        <dd class=\"list__item tooltip__list-item\">{{ color.title }}</dd>\n                                        <template v-if=\"!color.is_transparent\">\n                                            <dt class=\"list__item tooltip__list-item tooltip__label\">Color:</dt>\n                                            <dd class=\"list__item tooltip__list-item\">{{ color. system_code }}</dd>\n                                        </template>\n                                        <dt class=\"list__item tooltip__list-item tooltip__label\">Weight:</dt>\n                                        <dd class=\"list__item tooltip__list-item\"><span class=\"hardcoded\">750 g</span>\n                                        </dd>\n                                    </dl>\n                                </tooltip>\n                                <color v-if=\"color.is_transparent\"></color>\n                                <color :background=\"color.rgb_hex_code\" v-else></color>\n                            </hit-area>\n                        </li>\n                    </ul>\n                    <content-link mod=\"large\"><span class=\"hardcoded\">Where to buy</span></content-link>\n                </div>\n            </div>\n            <div class=\"flexgrid__cell--sm-8 flexgrid__cell--xs-6\">\n                <div class=\"colors__image\" ref=\"image\" :class=\"imageClass\">\n                    <cms-image :image=\"image\" orientation=\"landscape\"></cms-image>\n                </div>\n            </div>\n        </div>\n    </div>\n</article>\n\n";

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = "<article class=\"case\">\n    <section class=\"container case__container\">\n        <figure class=\"case__media\" v-show=\"this.isMobileXl\">\n            <figcaption class=\"flex-grid flexgrid__cell--xs-6\">\n                <h2 class=\"case__title\">{{ title }}</h2>\n            </figcaption>\n\n            <div class=\"case__media-placeholder\">\n                <figcaption>\n                    <icon-button @click=\"toggleVideo\" class=\"case__link icon-button--underline-large\" :icon-name=\"buttonIcon\">{{ buttonLabel }}</icon-button>\n                </figcaption>\n                <div class=\"case__image-overlay\"></div>\n                <responsive-picture v-bind=\"image\" img-class=\"case__image--full\"></responsive-picture>\n            </div>\n\n            <figcaption class=\"flex-grid flexgrid__cell--xs-6\">\n                <p class=\"case__paragraph case__paragraph--last\">{{ description }}</p>\n            </figcaption>\n        </figure>\n\n        <figure class=\"case__media\" v-show=\"!this.isMobileXl\">\n            <div class=\"case__media-placeholder\">\n                <figcaption class=\"flex-grid flexgrid__cell--xs-6 case__flex-grid--center\">\n                    <h2 class=\"case__title\">{{ title }}</h2>\n                    <p class=\"case__paragraph\">{{ description }}</p>\n                    <icon-button @click=\"toggleVideo\" class=\"case__link icon-button--underline-large\" :icon-name=\"buttonIcon\">{{ buttonLabel }}</icon-button>\n                </figcaption>\n\n                <div class=\"case__image-overlay\"></div>\n                <responsive-picture v-bind=\"image\" img-class=\"case__image--full\"></responsive-picture>\n            </div>\n        </figure>\n    </section>\n    <modal class=\"modal--video\" v-if=\"showVideo\" @close=\"toggleVideo\">\n        <youtube-video :video-id=\"videoId\"></youtube-video>\n    </modal>\n</article>\n";

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = "<article class=\"brands brands--large\">\n    <section class=\"container brands__container\">\n        <h2 class=\"brands__title\">{{ title }}</h2>\n        <p class=\"brands__body\" v-if=\"text\">{{ text }}</p>\n        <div class=\"flexgrid flexgrid--gutter brands__grid\">\n            <template v-for=\"brand in brands\">\n            <div class=\"flexgrid__cell--sm-4 brands__grid-cell\">\n                <brand-card v-bind=\"brand\"></brand-card>\n            </div>\n            </template>\n        </div>\n        <content-link v-if=\"contentLink\" :block=\"'brands'\" :mod=\"'large'\" :href=\"contentLink.href\">{{ contentLink.text }}</content-link>\n    </section>\n</article>";

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = "<article class=\"brands\">\n    <section class=\"container brands__container\">\n        <h2 class=\"brands__title\"> {{ title }}</h2>\n        <div class=\"flexgrid flexgrid--gutter brands__grid\">\n            <template v-for=\"brand in brands\">\n            <div class=\"flexgrid__cell--sm-4 brands__grid-cell\">\n                <brand-card v-bind=\"brand\"></brand-card>\n            </div>\n            </template>\n        </div>\n        <content-link v-if=\"contentLink\" :block=\"'brands'\" :mod=\"'large'\" :href=\"contentLink.href\">{{ contentLink.text }}</content-link>\n    </section>\n</article>";

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = "<nav aria-label=\"sub items\" class=\"sub-nav sub-nav--fixed\" :class=\"classObject\" v-if=\"page\">\n    <faux-scroll>\n        <ul class=\"sub-nav__list\" role=\"presentation\"  v-if=\"page.links && page.links.siblings && page.links.siblings.length\">\n            <li class=\"sub-nav__item\" v-for=\"sibling in page.links.siblings\">\n                <router-link class=\"sub-nav__link\" :to=\"mapLink(sibling.href)\" active-class=\"sub-nav__link--active\">\n                    <responsive-picture class=\"sub-nav__image\" v-if=\"sibling.icon\"\n                        :desktop-width=\"sibling.icon.thumbsquare_desktop\"\n                        :mobile-width=\"sibling.icon.thumbsquare_mobile\">\n                    </responsive-picture>\n                    <p class=\"sub-nav__label\">{{ sibling.title }}</p>\n                </router-link>\n            </li>\n        </ul>\n    </faux-scroll>\n\n</nav>\n";

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = "<div class=\"country-selector\" v-if=\"initialized\">\n    <auto-complete class=\"country-selector__auto-complete auto-complete--small\" ref=\"autocomplete\"\n        :placeholder=\"placeholder\"\n        title-field=\"name\" value-field=\"code\"\n        v-model=\"country\"\n        @input=\"countryChanged\"\n        @close=\"close\"\n        @changeFocus=\"focusClose\"\n        :items=\"countries\"\n        :stored-items=\"detectedCountries\"\n        default-open>\n    </auto-complete>\n    <!-- TODO: refactor out settings-selector__edit-button (see: https://jira.ultimaker.com:8443/browse/UWEB-4969)-->\n    <icon-button icon-name=\"close\" button-aria-label=\"Cancel\" ref=\"closeCountryPanel\"\n        button-class=\"country-selector__icon-button icon-button settings-selector__edit-button icon-button--small icon-button--reversed\"\n        @click=\"close\">\n    </icon-button>\n</div>";

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = "<div class=\"cms-image\" :style=\"styles\">\n    <responsive-picture class=\"cms-image__image\"\n        :desktop-hd-width=\"desktopRetinaImage\"\n        :desktop-width=\"desktopImage\"\n        :mobile-width=\"mobileImage\"\n        :alt=\"image.alt_text\">\n    </responsive-picture>\n</div>\n";

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = "<form action=\"\" id=\"search\" class=\"search\" @submit.prevent=\"doSearch\">\n    <div role=\"search\">\n        <div class=\"search__inputholder\">\n            <label for=\"search__input\" class=\"search__label\">Search</label>\n            <input id=\"search__input\" type=\"text\" name=\"search\" placeholder=\"How can we help?\" class=\"search__input\"\n                   @blur=\"onBlur\" @keyup.esc=\"close\"\n                   v-model=\"searchValue\"\n                   ref=\"search__input\">\n        </div>\n        <icon-button button-class=\"icon-button icon-button--large search__button\" button-aria-label=\"Search\"\n                     icon-name=\"search\" @click=\"doSearch\"></icon-button>\n        <icon-button button-class=\"icon-button icon-button--large search__close-button\" button-aria-label=\"Close search\"\n                     icon-name=\"close\" @click=\"close\"></icon-button>\n    </div>\n</form>\n";

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = "<router-link class=\"reseller-card\" tabindex=\"0\" :to=\"href\">\n    <h4 class=\"reseller-card__title\">\n        {{name}}\n        <small class=\"reseller-badge reseller-badge--inline\" v-if=\"preferred\">\n            <icon :icon-name=\"'rate-solid'\" class=\"reseller-badge__icon\"></icon>\n        </small>\n    </h4>\n    <span class=\"link faux-content-link reseller-link\">\n        <span class=\"link__underline\">\n            {{ labels.visitWebsite }}\n        </span>\n    </span>\n</router-link>\n";

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = "<nav class=\"pager\" aria-label=\"pagination\">\n    <ul class=\"pager__list\">\n        <li ref=\"indicator\" class=\"pager__active-page\" aria-hidden=\"true\">\n            <icon class=\"pager__active-page-indicator\" icon-name=\"hexagon-fill\"></icon>\n        </li>\n        <li ref=\"page\" v-for=\"(page, index) in pages\" \n            class=\"pager__page\" >\n            <a class=\"pager__page-indicator\" @click=\"changeIndex(index)\"\n                aria-role=\"button\" \n                :aria-label=\"getAriaLabel(index)\" \n                :aria-current='index === activeIndex'>\n                <icon icon-name=\"hexagon\"></icon>\n            </a>\n        </li>\n    </ul>\n</nav>\n";

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = "<transition name=\"modal\" @enter=\"enter\" @leave=\"leave\">\n    <div class=\"modal\" @click=\"closeModal\">\n        <div ref=\"overlay\" class=\"modal__overlay\"></div>\n        <icon-button ref=\"close\" icon-name=\"close\" class=\"modal__close\"/>\n        <div ref=\"modal\" class=\"modal__content\" @click.stop>\n            <div class=\"modal__header\">\n                <slot name=\"header\" />\n            </div>\n            <slot />\n        </div>\n    </div>\n</transition>\n";

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = "<a class=\"icon-button\" :class=\"buttonClass\" :aria-label=\"buttonAriaLabel\" role=\"button\" tabindex=\"0\" @click=\"$emit('click')\" @keyup.enter=\"$emit('click')\">\n    <icon class=\"icon-button__icon\" :icon-name=\"iconName\"></icon>\n    <span class=\"icon-button__label\" v-if=\"hasDefaultSlot\">\n        <slot></slot>\n    </span>\n</a>\n";

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = "<li class=\"flyout__section\" :class=\"sectionClass\">\n    <strong class=\"flyout__title\" :id=\"itemId\">{{ title }}</strong>\n    <ul class=\"flyout__list\"\n        :aria-labelledby=\"itemId\"\n        :aria-haspopup=\"links.length > maxVisible\"\n        :aria-expanded=\"isExpanded\"\n        v-if=\"isCompact\">\n\n        <template v-for=\"(link, index) in links\">\n            <li class=\"flyout__list-item\"  v-if=\"index <= maxVisible - 1\">\n                <content-link @click.native=\"$emit('close')\" :href=\"link.href\" class=\"flyout__link\">{{ link.title }}</content-link>\n            </li>\n            <li class=\"flyout__list-item\" v-else>\n                <template v-if=\"isExpanded\">\n                    <content-link @click.native=\"$emit('close')\" :href=\"link.href\" class=\"flyout__link\">{{ link.title }}</content-link>\n                </template>\n            </li>\n        </template>\n\n        <li class=\"flyout__list-item\" v-if=\"links.length > maxVisible\">\n            <content-toggle class=\"flyout__toggle\"\n                            aria-hidden=\"true\"\n                            @toggle=\"isExpanded = !isExpanded\">\n            </content-toggle>\n        </li>\n    </ul>\n\n    <ul class=\"flyout__list\"\n        :aria-labelledby=\"itemId\"\n        v-else-if=\"!isCompact\">\n        <template v-for=\"link in links\">\n            <li class=\"flyout__list-item\">\n                <content-link @click.native=\"$emit('close')\" :href=\"link.href\" class=\"flyout__link\">{{ link.title }}</content-link>\n            </li>\n        </template>\n    </ul>\n\n    <template v-if=\"bottomLinks\" v-for=\"bottomLink in bottomLinks\">\n        <content-link @click.native=\"$emit('close')\" :href=\"bottomLink.href\" class=\"flyout__link--cta-mini\" >{{ bottomLink.title }}</content-link>\n    </template>\n</li>\n";

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = "<ul class=\"main-nav__flyout\"\n     v-if=\"sections && sections.length > 0\"\n    @keydown.down=\"selectNextFlyoutLink\"\n    @keydown.tab.exact=\"selectNextFlyoutLink\"\n    @keydown.up=\"selectPrevFlyoutLink\"\n    @keydown.tab.shift.exact=\"selectPrevFlyoutLink\"\n    @keydown.right=\"selectNextFlyoutSection\"\n    @keydown.left=\"selectPrevFlyoutSection\"\n    @mouseenter.stop=\"open\">\n    <template v-for=\"section in sections\">\n        <flyout-section @close=\"$emit('close')\" :is-compact=\"isCompact\" v-bind=\"section\">\n        </flyout-section>\n    </template>\n</ul>\n";

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = "<div class=\"faux-vertical-scroll\" ref=\"container\"\n     @touchstart=\"touchstart\"\n     @touchmove=\"touchmove\"\n     @touchend=\"touchend\"\n     @mousedown=\"mousedown\"\n     @mouseup=\"mouseup\"\n     @click=\"click\"\n     @mousemove=\"mousemove\"\n>\n    <div class=\"faux-vertical-scroll__content\" ref=\"content\">\n        <slot></slot>\n    </div>\n    <div class=\"faux-vertical-scroll__bar\" ref=\"bar\" :style=\"barStyle\"></div>\n</div>\n";

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = "<span class=\"currency\">\n    <span class=\"currency__type\">{{ currencyType }}</span>\n    {{ formattedAmount }}\n</span>\n";

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = "<a class=\"toggle toggle--icon\" role=\"button\" tabindex=\"0\" @click=\"toggle\"\n       @keyup.enter=\"toggle\">\n    <icon :icon-name=\"toggleIcon\"></icon>\n    <span>{{ toggleText }}</span>\n</a>\n";

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = "<div class=\"color\">\n    <div class=\"color__spec color__spec--show\">\n        <icon icon-name=\"show\" :style=\"styleIcon\"></icon>\n    </div>\n    <div class=\"color__spec color__spec--swatch\" :style=\"styleBackground\"></div>\n</div>\n";

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = "<article class=\"card\" :class=\"classObject\">\n    <div class=\"card__visual\">\n        <template v-if=\"card.image\">\n          <div class=\"card__image\">\n            <responsive-picture v-if=\"card.image && card.image.mobileWidth\" class=\"img--responsive\" v-bind=\"card.image\"></responsive-picture>\n            <cms-image v-else class=\"img--responsive\" :image=\"card.image[0]\" :orientation=\"'square'\"></cms-image>\n          </div>\n        </template>\n        <icon v-if=\"card.icon\" :icon-name=\"card.icon.iconName\" class=\"card__icon\"></icon>\n    </div>\n    <div class=\"card__content\">\n        <h3 class=\"card__headline\">{{ card.title }}</h3>\n        <p class=\"card__description\">{{ card.description }}</p>\n        <content-link class=\"card__link\" v-if=\"card.contentLink\" :block=\"'card'\" :href=\"card.contentLink.href\">{{ card.contentLink.text }}</content-link>\n    </div>\n</article>\n";

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = "<div class=\"brand-card\">\n    <div class=\"brand-card__image-wrapper\">\n        <responsive-picture v-bind=\"image\"></responsive-picture>\n    </div>\n    <template v-if=\"body && type === 'text'\">\n        <p class=\"brand-card__quote\">{{body}}</p>\n    </template>\n    <template v-else-if=\"body\">\n        <q class=\"brand-card__quote\">{{body}}</q>\n    </template>\n</div>";

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = "<div class=\"auto-complete\"\n    :class=\"classObject\"\n     role=\"combobox\"\n     aria-haspopup=\"listbox\"\n\n     v-if=\"hasItems\"\n     :aria-owns=\"listId\"\n     :aria-expanded=\"isOpen\"\n\n     @keydown.up.prevent=\"selectPrevious\"\n     @keydown.shift.tab.prevent=\"selectPrevious\"\n     @keydown.down.prevent=\"selectCurrent\"\n     @keydown.tab.exact.prevent=\"selectCurrent\">\n\n\n    <input ref=\"autoComplete\"\n           class=\"auto-complete__input\"\n           type=\"text\"\n           autofocus=\"true\"\n           autocomplete=\"off\"\n           aria-autocomplete=\"list\"\n\n           :id=\"inputId\"\n           :aria-controls=\"listId\"\n           :placeholder=\"placeholder\"\n           :required=\"required\"\n\n           v-model.trim=\"input\"\n           @input=\"input = $event.target.value\"\n\n           @keyup.esc=\"resetInput\"\n           @keydown=\"forceOpen = true\"\n           @keydown.enter.prevent=\"selectItemByInput\">\n\n    <div :id=\"listId\" class=\"auto-complete__dropdown\" role=\"listbox\"\n         v-if=\"isOpen\"\n         @keyup.esc=\"closeList\"\n         @keydown.backspace.prevent\n         @keydown.down.prevent=\"selectNext\"\n         @keydown.tab.exact.prevent=\"selectNext\">\n\n        <template v-if=\"storedItems && storedItems.length\">\n            <h4 class=\"auto-complete__label\" id=\"storedLabel\">\n                {{ storedLabel }}\n            </h4>\n            <ul class=\"auto-complete__list\" aria-labelledby=\"storedLabel\">\n                <li class=\"auto-complete__list-item\" role=\"option\" tabindex=\"0\"\n                    v-for=\"item in storedItems\"\n                    @click=\"selectItem(item)\"\n                    @keyup.enter.prevent=\"selectItem(item)\"\n                    @keyup.esc=\"closeList\">\n                    {{ item[titleField] }}\n                </li>\n            </ul>\n        </template>\n\n        <template v-if=\"suggestedItems && suggestedItems.length\">\n            <h4 class=\"auto-complete__label\" id=\"suggestedLabel\">\n                {{ suggestionsLabel }}\n            </h4>\n            <ul class=\"auto-complete__list\" aria-labelledby=\"suggestedLabel\">\n                <template v-if=\"matchValue\">\n                    <li class=\"auto-complete__list-item\" role=\"option\" tabindex=\"0\"\n                        v-for=\"item in suggestedItems\"\n                        @click=\"selectItem(item)\"\n                        @keyup.enter.prevent=\"selectItem(item)\">\n                        {{ item[titleField] }}\n                    </li>\n                </template>\n                <template v-else>\n                    <li class=\"auto-complete__list-item\" role=\"option\" tabindex=\"0\"\n                        v-for=\"item in suggestedItems\"\n                        v-html=\"highlightString(item[titleField])\"\n                        @click=\"selectItem(item)\"\n                        @keyup.enter.prevent=\"selectItem(item)\"\n                        >\n                    </li>\n                </template>\n            </ul>\n        </template>\n    </div>\n\n</div>\n";

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = "<div class=\"youtube-video\">\n    <iframe v-if=\"loadVideo\" :src=\"videoUrl\" frameborder=\"0\" allowfullscreen=\"allowfullscreen\" class=\"youtube-video__frame\"></iframe>\n</div>\n";

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = "<div class=\"tooltip\" :class=\"classObject\">\n    <slot></slot>\n</div>\n";

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = "<dl class=\"tabbable-dl\">\n    <template v-for=\"(item, index) in items\">\n        <dt class=\"tabbable-dl__term tabbable-dl__term--vue\" ref=\"terms\">\n            <a class=\"tabbable-dl__link\" @click.prevent=\"changeIndex(index)\" @keyup.enter=\"changeIndex(index)\" role=\"button\" tabindex=\"0\">\n                <h3 class=\"tabbable-dl__title\">\n                    <icon class=\"tabbable-dl__icon\" icon-name=\"angle-right\"></icon>\n                    {{ item.title }}\n                </h3>\n            </a>\n        </dt>\n        <dd class=\"tabbable-dl__desc tabbable-dl__desc--vue\" ref=\"descriptions\">{{ item.description }}</dd>\n    </template>\n</dl>\n";

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = "<picture>\n    <template>\n        <responsive-picture-source v-if=\"desktopHdWidth\" media=\"(min-width: 1201px)\" :image=\"lazyLoading ? '' : desktopHdWidth\" />\n        <responsive-picture-source v-if=\"desktopWidth\" media=\"(min-width: 1025px)\" :image=\"lazyLoading ? '' : desktopWidth\" />\n        <responsive-picture-source v-if=\"tabletWidth\" media=\"(min-width: 768px)\" :image=\"lazyLoading ? '' : tabletWidth\" />\n        <responsive-picture-source v-if=\"mobileXlWidth\" media=\"(min-width: 569px)\" :image=\"lazyLoading ? '' : mobileXlWidth\" />\n        <responsive-picture-source v-if=\"mobileLWidth\" media=\"(min-width: 481px)\" :image=\"lazyLoading ? '' : mobileLWidth\" />\n        <responsive-picture-source media=\"(max-width: 480px)\" :image=\"mobileWidth\" />\n    </template>\n    <img :src=\"lazyLoading ? '' : mobileWidth.url ? mobileWidth.url : mobileWidth\" :alt=\"description\" class=\"img--responsive\" :class=\"classes\"/>\n</picture>\n";

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" @click=\"toggleState()\" @keyup.esc=\"close\" class=\"nav-assist\"\n        :class=\"{'nav-assist--close': this.openState, 'nav-assist--initial-state': !this.used}\" aria-label=\"menu\"\n        :aria-expanded=\"this.openState.toString()\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">\n        <rect class=\"nav-assist__line nav-assist__line-2\" x=\"2\" y=\"11\" width=\"20\" height=\"2\"/>\n        <rect class=\"nav-assist__line nav-assist__line-1\" x=\"2\" y=\"4.5\" width=\"20\" height=\"2\"/>\n        <rect class=\"nav-assist__line nav-assist__line-3\" x=\"2\" y=\"17.5\" width=\"20\" height=\"2\"/>\n        <rect class=\"nav-assist__line nav-assist__line-4\" x=\"-1.3\" y=\"11\" transform=\"matrix(0.7071 -0.7071 0.7071 0.7071 -4.9706 12)\" width=\"26.6\" height=\"2\"/>\n        <rect class=\"nav-assist__line nav-assist__line-5\" x=\"11\" y=\"-1.3\" transform=\"matrix(0.7071 -0.7071 0.7071 0.7071 -4.9706 12)\" width=\"2\" height=\"26.6\"/>\n    </svg>\n</button>\n";

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = "<svg class=\"icon\" :class=\"iconClass\" :viewBox=\"viewBox\" v-if=\"ready\">\n    <use :xlink:href=\"iconRef\" v-if=\"!symbolData\"></use>\n    <g id=\"symbol-container\"></g>\n</svg>\n\n";

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = "<section :class=\"styleModifier\">\n    <strong class=\"caption-list__headline\">\n        {{ label }}\n    </strong>\n    <ul class=\"caption-list\">\n        <li class=\"caption-list__list-item\" v-for=\"item in listItems\">\n            {{ item.additionalContent }}\n            <a :href=\"item.url\">{{ item.text }}</a>\n        </li>\n    </ul>\n</section>\n";

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = "<a class=\"hit-area\" role=\"button\" tabindex=\"0\">\n    <slot></slot>\n</a>\n";

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = "<ul :class=\"block + '__list'\">\n    <li v-for=\"link in links\" :class=\"block + '__item'\">\n        <content-link :class=\"link.class\" :block='block' :icon=\"link.icon\" :href=\"link.href\">{{ link.title }}</content-link>\n    </li>\n</ul>\n";

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = "<router-link :to=\"href\" class=\"link\" :class=\"classObject\" v-if=\"href.match && href.match(/^\\//i)\">\n    <icon v-if=\"this.icon && this.mod.indexOf('small') === -1\" :icon-name=\"icon\"></icon>\n    <span class=\"link__underline\">\n        <slot></slot>\n    </span>\n</router-link>\n<a :href=\"href\" :to=\"href\" class=\"link\" :class=\"classObject\" v-else>\n    <icon v-if=\"this.icon && this.mod.indexOf('small') === -1\" :icon-name=\"icon\"></icon>\n    <span class=\"link__underline\">\n        <slot></slot>\n    </span>\n</a>\n";

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = "<svg class=\"arrow--animated\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 120\">\n    <defs>\n        <clipPath id=\"mask\" class=\"arrow__mask\">\n            <rect x=\"40\" y=\"40\" width=\"40\" height=\"40\" rotate=\"45deg\"/>\n        </clipPath>\n    </defs>\n    <g clip-path=\"url(#mask)\">\n        <path class=\"arrow__line arrow__line-1\" d=\"M15.3 55h94.8v10.1H15.3z\" clip-path=\"url(#mask)\" />\n        <path class=\"arrow__line arrow__line-2\" d=\"M15.3 55h94.8v10.1H15.3z\"/>\n        <path class=\"arrow__line arrow__line-3\" d=\"M15.3 55h94.8v10.1H15.3z\"/>\n    </g>\n</svg>";

/***/ }),
/* 49 */,
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })
/******/ ])});;
//# sourceMappingURL=components.js.map