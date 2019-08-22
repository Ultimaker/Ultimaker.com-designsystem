define("components", ["vue-property-decorator","gsap","lodash/debounce","vue","core-js/modules/es6.typed.array-buffer","core-js/modules/es6.typed.data-view","core-js/modules/es6.typed.int8-array","core-js/modules/es6.typed.uint8-array","core-js/modules/es6.typed.uint8-clamped-array","core-js/modules/es6.typed.int16-array","core-js/modules/es6.typed.uint16-array","core-js/modules/es6.typed.int32-array","core-js/modules/es6.typed.uint32-array","core-js/modules/es6.typed.float32-array","core-js/modules/es6.typed.float64-array","core-js/modules/es6.map","core-js/modules/es6.set","core-js/modules/es6.weak-map","core-js/modules/es6.weak-set","core-js/modules/es6.reflect.apply","core-js/modules/es6.reflect.construct","core-js/modules/es6.reflect.define-property","core-js/modules/es6.reflect.delete-property","core-js/modules/es6.reflect.get","core-js/modules/es6.reflect.get-own-property-descriptor","core-js/modules/es6.reflect.get-prototype-of","core-js/modules/es6.reflect.has","core-js/modules/es6.reflect.is-extensible","core-js/modules/es6.reflect.own-keys","core-js/modules/es6.reflect.prevent-extensions","core-js/modules/es6.reflect.set","core-js/modules/es6.reflect.set-prototype-of","core-js/modules/es6.promise","core-js/modules/es6.symbol","core-js/modules/es6.object.freeze","core-js/modules/es6.object.seal","core-js/modules/es6.object.prevent-extensions","core-js/modules/es6.object.is-frozen","core-js/modules/es6.object.is-sealed","core-js/modules/es6.object.is-extensible","core-js/modules/es6.object.get-own-property-descriptor","core-js/modules/es6.object.get-prototype-of","core-js/modules/es6.object.keys","core-js/modules/es6.object.get-own-property-names","core-js/modules/es6.object.assign","core-js/modules/es6.object.is","core-js/modules/es6.object.set-prototype-of","core-js/modules/es6.function.name","core-js/modules/es6.string.raw","core-js/modules/es6.string.from-code-point","core-js/modules/es6.string.code-point-at","core-js/modules/es6.string.repeat","core-js/modules/es6.string.starts-with","core-js/modules/es6.string.ends-with","core-js/modules/es6.string.includes","core-js/modules/es6.regexp.flags","core-js/modules/es6.regexp.match","core-js/modules/es6.regexp.replace","core-js/modules/es6.regexp.split","core-js/modules/es6.regexp.search","core-js/modules/es6.array.from","core-js/modules/es6.array.of","core-js/modules/es6.array.copy-within","core-js/modules/es6.array.find","core-js/modules/es6.array.find-index","core-js/modules/es6.array.fill","core-js/modules/es6.array.iterator","core-js/modules/es6.number.is-finite","core-js/modules/es6.number.is-integer","core-js/modules/es6.number.is-safe-integer","core-js/modules/es6.number.is-nan","core-js/modules/es6.number.epsilon","core-js/modules/es6.number.min-safe-integer","core-js/modules/es6.number.max-safe-integer","core-js/modules/es6.math.acosh","core-js/modules/es6.math.asinh","core-js/modules/es6.math.atanh","core-js/modules/es6.math.cbrt","core-js/modules/es6.math.clz32","core-js/modules/es6.math.cosh","core-js/modules/es6.math.expm1","core-js/modules/es6.math.fround","core-js/modules/es6.math.hypot","core-js/modules/es6.math.imul","core-js/modules/es6.math.log1p","core-js/modules/es6.math.log10","core-js/modules/es6.math.log2","core-js/modules/es6.math.sign","core-js/modules/es6.math.sinh","core-js/modules/es6.math.tanh","core-js/modules/es6.math.trunc","core-js/modules/es7.array.includes","core-js/modules/es7.object.values","core-js/modules/es7.object.entries","core-js/modules/es7.object.get-own-property-descriptors","core-js/modules/es7.string.pad-start","core-js/modules/es7.string.pad-end","core-js/modules/web.timers","core-js/modules/web.immediate","core-js/modules/web.dom.iterable","gsap/Draggable","gsap/TweenLite.js"], function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__7__, __WEBPACK_EXTERNAL_MODULE__11__, __WEBPACK_EXTERNAL_MODULE__21__, __WEBPACK_EXTERNAL_MODULE__22__, __WEBPACK_EXTERNAL_MODULE__23__, __WEBPACK_EXTERNAL_MODULE__24__, __WEBPACK_EXTERNAL_MODULE__25__, __WEBPACK_EXTERNAL_MODULE__26__, __WEBPACK_EXTERNAL_MODULE__27__, __WEBPACK_EXTERNAL_MODULE__28__, __WEBPACK_EXTERNAL_MODULE__29__, __WEBPACK_EXTERNAL_MODULE__30__, __WEBPACK_EXTERNAL_MODULE__31__, __WEBPACK_EXTERNAL_MODULE__32__, __WEBPACK_EXTERNAL_MODULE__33__, __WEBPACK_EXTERNAL_MODULE__34__, __WEBPACK_EXTERNAL_MODULE__35__, __WEBPACK_EXTERNAL_MODULE__36__, __WEBPACK_EXTERNAL_MODULE__37__, __WEBPACK_EXTERNAL_MODULE__38__, __WEBPACK_EXTERNAL_MODULE__39__, __WEBPACK_EXTERNAL_MODULE__40__, __WEBPACK_EXTERNAL_MODULE__41__, __WEBPACK_EXTERNAL_MODULE__42__, __WEBPACK_EXTERNAL_MODULE__43__, __WEBPACK_EXTERNAL_MODULE__44__, __WEBPACK_EXTERNAL_MODULE__45__, __WEBPACK_EXTERNAL_MODULE__46__, __WEBPACK_EXTERNAL_MODULE__47__, __WEBPACK_EXTERNAL_MODULE__48__, __WEBPACK_EXTERNAL_MODULE__49__, __WEBPACK_EXTERNAL_MODULE__50__, __WEBPACK_EXTERNAL_MODULE__51__, __WEBPACK_EXTERNAL_MODULE__52__, __WEBPACK_EXTERNAL_MODULE__53__, __WEBPACK_EXTERNAL_MODULE__54__, __WEBPACK_EXTERNAL_MODULE__55__, __WEBPACK_EXTERNAL_MODULE__56__, __WEBPACK_EXTERNAL_MODULE__57__, __WEBPACK_EXTERNAL_MODULE__58__, __WEBPACK_EXTERNAL_MODULE__59__, __WEBPACK_EXTERNAL_MODULE__60__, __WEBPACK_EXTERNAL_MODULE__61__, __WEBPACK_EXTERNAL_MODULE__62__, __WEBPACK_EXTERNAL_MODULE__63__, __WEBPACK_EXTERNAL_MODULE__64__, __WEBPACK_EXTERNAL_MODULE__65__, __WEBPACK_EXTERNAL_MODULE__66__, __WEBPACK_EXTERNAL_MODULE__67__, __WEBPACK_EXTERNAL_MODULE__68__, __WEBPACK_EXTERNAL_MODULE__69__, __WEBPACK_EXTERNAL_MODULE__70__, __WEBPACK_EXTERNAL_MODULE__71__, __WEBPACK_EXTERNAL_MODULE__72__, __WEBPACK_EXTERNAL_MODULE__73__, __WEBPACK_EXTERNAL_MODULE__74__, __WEBPACK_EXTERNAL_MODULE__75__, __WEBPACK_EXTERNAL_MODULE__76__, __WEBPACK_EXTERNAL_MODULE__77__, __WEBPACK_EXTERNAL_MODULE__78__, __WEBPACK_EXTERNAL_MODULE__79__, __WEBPACK_EXTERNAL_MODULE__80__, __WEBPACK_EXTERNAL_MODULE__81__, __WEBPACK_EXTERNAL_MODULE__82__, __WEBPACK_EXTERNAL_MODULE__83__, __WEBPACK_EXTERNAL_MODULE__84__, __WEBPACK_EXTERNAL_MODULE__85__, __WEBPACK_EXTERNAL_MODULE__86__, __WEBPACK_EXTERNAL_MODULE__87__, __WEBPACK_EXTERNAL_MODULE__88__, __WEBPACK_EXTERNAL_MODULE__89__, __WEBPACK_EXTERNAL_MODULE__90__, __WEBPACK_EXTERNAL_MODULE__91__, __WEBPACK_EXTERNAL_MODULE__92__, __WEBPACK_EXTERNAL_MODULE__93__, __WEBPACK_EXTERNAL_MODULE__94__, __WEBPACK_EXTERNAL_MODULE__95__, __WEBPACK_EXTERNAL_MODULE__96__, __WEBPACK_EXTERNAL_MODULE__97__, __WEBPACK_EXTERNAL_MODULE__98__, __WEBPACK_EXTERNAL_MODULE__99__, __WEBPACK_EXTERNAL_MODULE__100__, __WEBPACK_EXTERNAL_MODULE__101__, __WEBPACK_EXTERNAL_MODULE__102__, __WEBPACK_EXTERNAL_MODULE__103__, __WEBPACK_EXTERNAL_MODULE__104__, __WEBPACK_EXTERNAL_MODULE__105__, __WEBPACK_EXTERNAL_MODULE__106__, __WEBPACK_EXTERNAL_MODULE__107__, __WEBPACK_EXTERNAL_MODULE__108__, __WEBPACK_EXTERNAL_MODULE__109__, __WEBPACK_EXTERNAL_MODULE__110__, __WEBPACK_EXTERNAL_MODULE__111__, __WEBPACK_EXTERNAL_MODULE__112__, __WEBPACK_EXTERNAL_MODULE__113__, __WEBPACK_EXTERNAL_MODULE__114__, __WEBPACK_EXTERNAL_MODULE__115__, __WEBPACK_EXTERNAL_MODULE__116__, __WEBPACK_EXTERNAL_MODULE__264__, __WEBPACK_EXTERNAL_MODULE__266__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _debounce = __webpack_require__(7);

var _debounce2 = _interopRequireDefault(_debounce);

var _browserCapabilities = __webpack_require__(2);

var _browserCapabilities2 = _interopRequireDefault(_browserCapabilities);

var _defaults = __webpack_require__(3);

var _defaults2 = _interopRequireDefault(_defaults);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var instance = null;
var _scrollAnimationPending = false;
var _resizeAnimationPending = false;
var _resizeHandlers = [];
var _scrollHandlers = [];
var _orientationChangeHandlers = [];

function scrollHandler() {
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

function resizeHandler() {
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

function orientationChangeHandler() {
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

var ViewportUtility = function () {
    function ViewportUtility() {
        _classCallCheck(this, ViewportUtility);

        if (instance !== null) {
            return instance;
        }

        instance = this;

        this.resizing = false;

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

        return instance;
    }

    _createClass(ViewportUtility, [{
        key: '_attachEventListeners',
        value: function _attachEventListeners() {
            var _this3 = this;

            var minWait = 1000 / 60;
            var maxWait = 1000 / 30;

            document.addEventListener('scroll', (0, _debounce2.default)(function () {
                scrollHandler.apply(_this3);
            }, minWait, { maxWait: maxWait }));

            if (_browserCapabilities2.default.supportsTouch) {
                document.addEventListener('touchmove', (0, _debounce2.default)(function () {
                    scrollHandler.apply(_this3);
                }, minWait, { maxWait: maxWait }));
            }

            document.addEventListener('DOMContentLoaded', function () {
                documentLoadedHandler.apply(_this3);
            });

            window.addEventListener('resize', function () {
                _this3.resizing = true;
            });

            window.addEventListener('resize', (0, _debounce2.default)(function () {
                _this3.resizing = false;
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
            var x = window.pageXOffset;
            var maxScrollY = this.documentHeight - this.screenHeight;
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
        key: 'isResizing',
        get: function get() {
            return this.resizing;
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
            return this.screenWidth <= _defaults2.default.breakpoints.mobile.max;
        }
    }, {
        key: 'isMobileXl',
        get: function get() {
            return this.screenWidth <= _defaults2.default.breakpoints.mobileXl.max;
        }
    }, {
        key: 'isTablet',
        get: function get() {
            return this.screenWidth <= _defaults2.default.breakpoints.tablet.max;
        }
    }]);

    return ViewportUtility;
}();

exports.default = ViewportUtility;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var instance = null;
var isBrowser = typeof window !== 'undefined';

var BrowserCapabilities = function () {
    function BrowserCapabilities() {
        _classCallCheck(this, BrowserCapabilities);

        if (instance !== null) {
            return instance;
        }
        instance = this;

        return instance;
    }

    _createClass(BrowserCapabilities, null, [{
        key: 'isBrowser',
        get: function get() {
            return isBrowser;
        }
    }, {
        key: 'supportsTouch',
        get: function get() {
            return !this.isBrowser || 'ontouchstart' in document.documentElement;
        }
    }, {
        key: 'supportsFontLoadingApi',
        get: function get() {
            return !this.isBrowser || 'fonts' in document;
        }
    }, {
        key: 'supportsIntl',
        get: function get() {
            return !this.isBrowser || 'Intl' in window;
        }
    }, {
        key: 'supportsPictureElement',
        get: function get() {
            return !this.isBrowser || 'HTMLPictureElement' in window;
        }
    }, {
        key: 'supportsIntersectionObserver',
        get: function get() {
            return !this.isBrowser || 'IntersectionObserver' in window;
        }
    }, {
        key: 'supportsObjectFit',
        get: function get() {
            if (!this.isBrowser) {
                return true;
            }

            var edgeVersion = window.navigator.userAgent.match(/Edge\/(\d{2})\./);
            var edgePartialSupport = edgeVersion ? parseInt(edgeVersion[1], 10) >= 16 : false;

            if (edgePartialSupport) {
                return false;
            }

            return 'objectFit' in document.documentElement.style;
        }
    }]);

    return BrowserCapabilities;
}();

exports.default = BrowserCapabilities;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
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
        code: 'US'
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
    buildingUnit: 12,
    defaultDuration: 0.3,
    defaultEase: '.23, 1, .32, 1'
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    click: 'gtm-click'
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseLink = __webpack_require__(135);

var _baseLink2 = _interopRequireDefault(_baseLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _baseLink2.default;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__7__;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _vue = __webpack_require__(11);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventScope = new _vue2.default();
var EventLog = [];
var excludedLogEvents = ['size'];

var PublicEventService = function () {
    function PublicEventService() {
        _classCallCheck(this, PublicEventService);
    }

    _createClass(PublicEventService, null, [{
        key: 'emit',
        value: function emit(event, args) {
            if (!excludedLogEvents.includes(event)) {
                EventLog.push({ at: Date.now(), event: event, args: args });
            }
            EventScope.$emit(event, args);
        }
    }, {
        key: 'on',
        value: function on(event, func) {
            EventScope.$on(event, func);
        }
    }, {
        key: 'off',
        value: function off(event, func) {
            EventScope.$off(event, func);
        }
    }, {
        key: 'log',
        value: function log(event) {
            var after = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

            return EventLog.filter(function (e) {
                return e.event === event && e.at > after;
            });
        }
    }, {
        key: 'install',
        value: function install(Vue) {
            Object.defineProperty(Vue.prototype, '$emitPublic', {
                configurable: true,
                get: function get() {
                    return PublicEventService.emit;
                }
            });

            Object.defineProperty(Vue.prototype, '$onPublic', {
                configurable: true,
                get: function get() {
                    return PublicEventService.on;
                }
            });

            Object.defineProperty(Vue.prototype, '$offPublic', {
                configurable: true,
                get: function get() {
                    return PublicEventService.off;
                }
            });
        }
    }]);

    return PublicEventService;
}();

exports.default = PublicEventService;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.StepRowAnimation = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _defaults = __webpack_require__(3);

var _defaults2 = _interopRequireDefault(_defaults);

var _vuePropertyDecorator = __webpack_require__(0);

var _gsap = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var StepRowAnimation = function (_Vue) {
    _inherits(StepRowAnimation, _Vue);

    function StepRowAnimation() {
        _classCallCheck(this, StepRowAnimation);

        var _this = _possibleConstructorReturn(this, (StepRowAnimation.__proto__ || Object.getPrototypeOf(StepRowAnimation)).apply(this, arguments));

        _this.lastTopValue = 0;
        _this.delayIncrement = 0.1;
        _this.rowIndex = 0;
        _this.increment = 1;
        _this.cardTransitionDuration = _defaults2.default.defaultDuration;
        _this.cardOffset = _defaults2.default.buildingUnit * 5;
        return _this;
    }

    _createClass(StepRowAnimation, [{
        key: "addRow",
        value: function addRow(topValue) {
            this.rowIndex = this.rowIndex + this.increment;
            this.lastTopValue = topValue;
        }
    }, {
        key: "beforeEnter",
        value: function beforeEnter(el) {
            _gsap.TweenLite.set(el, { opacity: 0, y: this.cardOffset });
        }
    }, {
        key: "enter",
        value: function enter(el, done) {
            var elTopValue = el.getBoundingClientRect().top;
            if (this.isNewRow(elTopValue)) {
                this.addRow(elTopValue);
            }
            _gsap.TweenLite.fromTo(el, this.cardTransitionDuration, {
                opacity: 0,
                y: this.cardOffset
            }, {
                opacity: 1,
                y: 0,
                ease: _gsap.Power3.easeOut,
                onComplete: done,
                delay: this.rowIndex * this.delayIncrement
            });
        }
    }, {
        key: "isNewRow",
        value: function isNewRow(topValue) {
            return this.lastTopValue !== topValue;
        }
    }]);

    return StepRowAnimation;
}(_vuePropertyDecorator.Vue);
exports.StepRowAnimation = StepRowAnimation = __decorate([_vuePropertyDecorator.Component], StepRowAnimation);
exports.StepRowAnimation = StepRowAnimation;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Arithmetic = function () {
  function Arithmetic() {
    _classCallCheck(this, Arithmetic);
  }

  _createClass(Arithmetic, null, [{
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

exports.default = Arithmetic;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__11__;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var v1 = __webpack_require__(121);
var v4 = __webpack_require__(122);

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;


/***/ }),
/* 14 */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),
/* 15 */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([bth[buf[i++]], bth[buf[i++]], 
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]]]).join('');
}

module.exports = bytesToUuid;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    videoUrl: 'https://www.youtube.com/watch?v=',
    embedUrl: 'https://www.youtube-nocookie.com/embed/'
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CardBase = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _events = __webpack_require__(5);

var _events2 = _interopRequireDefault(_events);

var _vuePropertyDecorator = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardBase = function (_Vue) {
    _inherits(CardBase, _Vue);

    function CardBase() {
        _classCallCheck(this, CardBase);

        return _possibleConstructorReturn(this, (CardBase.__proto__ || Object.getPrototypeOf(CardBase)).apply(this, arguments));
    }

    _createClass(CardBase, [{
        key: "triggerEventClick",
        value: function triggerEventClick() {
            if (!this.clickEvent) {
                return;
            }
            this.$emitPublic(_events2.default.click, this.clickEventData);
        }
    }, {
        key: "clickEventData",
        get: function get() {
            if (!this.clickEvent) {
                return {};
            }
            return {
                dataType: this.clickEvent.name,
                data: _extends({}, this.clickEvent.data, {
                    pageSlug: this.$route.fullPath
                })
            };
        }
    }]);

    return CardBase;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object }), __metadata("design:type", Object)], CardBase.prototype, "clickEvent", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object }), __metadata("design:type", Object)], CardBase.prototype, "image", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], CardBase.prototype, "title", void 0);
exports.CardBase = CardBase = __decorate([(0, _vuePropertyDecorator.Component)({
    name: 'CardBase'
})], CardBase);
exports.CardBase = CardBase;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _colors = __webpack_require__(388);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _colors.Colors;
  }
});

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.registry = exports.PublicEventService = exports.ViewportUtility = exports.TextUtils = exports.BrowserCapabilities = exports.Arithmetic = exports.Defaults = undefined;

var _defaults = __webpack_require__(3);

Object.defineProperty(exports, 'Defaults', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_defaults).default;
    }
});

var _arithmetic = __webpack_require__(10);

Object.defineProperty(exports, 'Arithmetic', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_arithmetic).default;
    }
});

var _browserCapabilities = __webpack_require__(2);

Object.defineProperty(exports, 'BrowserCapabilities', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_browserCapabilities).default;
    }
});

var _textUtils = __webpack_require__(20);

Object.defineProperty(exports, 'TextUtils', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_textUtils).default;
    }
});

var _viewport = __webpack_require__(1);

Object.defineProperty(exports, 'ViewportUtility', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_viewport).default;
    }
});

var _publicEventService = __webpack_require__(8);

Object.defineProperty(exports, 'PublicEventService', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_publicEventService).default;
    }
});

__webpack_require__(21);

__webpack_require__(22);

__webpack_require__(23);

__webpack_require__(24);

__webpack_require__(25);

__webpack_require__(26);

__webpack_require__(27);

__webpack_require__(28);

__webpack_require__(29);

__webpack_require__(30);

__webpack_require__(31);

__webpack_require__(32);

__webpack_require__(33);

__webpack_require__(34);

__webpack_require__(35);

__webpack_require__(36);

__webpack_require__(37);

__webpack_require__(38);

__webpack_require__(39);

__webpack_require__(40);

__webpack_require__(41);

__webpack_require__(42);

__webpack_require__(43);

__webpack_require__(44);

__webpack_require__(45);

__webpack_require__(46);

__webpack_require__(47);

__webpack_require__(48);

__webpack_require__(49);

__webpack_require__(50);

__webpack_require__(51);

__webpack_require__(52);

__webpack_require__(53);

__webpack_require__(54);

__webpack_require__(55);

__webpack_require__(56);

__webpack_require__(57);

__webpack_require__(58);

__webpack_require__(59);

__webpack_require__(60);

__webpack_require__(61);

__webpack_require__(62);

__webpack_require__(63);

__webpack_require__(64);

__webpack_require__(65);

__webpack_require__(66);

__webpack_require__(67);

__webpack_require__(68);

__webpack_require__(69);

__webpack_require__(70);

__webpack_require__(71);

__webpack_require__(72);

__webpack_require__(73);

__webpack_require__(74);

__webpack_require__(75);

__webpack_require__(76);

__webpack_require__(77);

__webpack_require__(78);

__webpack_require__(79);

__webpack_require__(80);

__webpack_require__(81);

__webpack_require__(82);

__webpack_require__(83);

__webpack_require__(84);

__webpack_require__(85);

__webpack_require__(86);

__webpack_require__(87);

__webpack_require__(88);

__webpack_require__(89);

__webpack_require__(90);

__webpack_require__(91);

__webpack_require__(92);

__webpack_require__(93);

__webpack_require__(94);

__webpack_require__(95);

__webpack_require__(96);

__webpack_require__(97);

__webpack_require__(98);

__webpack_require__(99);

__webpack_require__(100);

__webpack_require__(101);

__webpack_require__(102);

__webpack_require__(103);

__webpack_require__(104);

__webpack_require__(105);

__webpack_require__(106);

__webpack_require__(107);

__webpack_require__(108);

__webpack_require__(109);

__webpack_require__(110);

__webpack_require__(111);

__webpack_require__(112);

__webpack_require__(113);

__webpack_require__(114);

__webpack_require__(115);

__webpack_require__(116);

__webpack_require__(117);

__webpack_require__(118);

var _componentRegistry = __webpack_require__(119);

var _componentRegistry2 = _interopRequireDefault(_componentRegistry);

var _components = __webpack_require__(124);

var _components2 = _interopRequireDefault(_components);

var _directives = __webpack_require__(451);

var Directives = _interopRequireWildcard(_directives);

__webpack_require__(453);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __svg__ = { filename: __webpack_require__.p +"static/icons/iconset.svg" };
var registry = new _componentRegistry2.default();
Object.keys(_components2.default).forEach(function (c) {
    registry.registerComponent(_components2.default[c]);
});
Object.keys(Directives).forEach(function (d) {
    registry.registerDirective(new Directives[d]());
});
exports.registry = registry;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TextUtils = function () {
    function TextUtils() {
        _classCallCheck(this, TextUtils);
    }

    _createClass(TextUtils, null, [{
        key: 'htmlDecode',
        value: function htmlDecode(input) {
            var e = document.createElement('div');

            e.innerHTML = input;

            return e.childNodes.length === 0 ? '' : e.childNodes[0].nodeValue;
        }
    }]);

    return TextUtils;
}();

exports.default = TextUtils;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__21__;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__22__;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__23__;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__24__;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__25__;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__26__;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__27__;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__28__;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__29__;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__30__;

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__31__;

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__32__;

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__33__;

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__34__;

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__35__;

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__36__;

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__37__;

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__38__;

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__39__;

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__40__;

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__41__;

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__42__;

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__43__;

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__44__;

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__45__;

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__46__;

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__47__;

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__48__;

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__49__;

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__50__;

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__51__;

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__52__;

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__53__;

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__54__;

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__55__;

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__56__;

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__57__;

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__58__;

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__59__;

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__60__;

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__61__;

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__62__;

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__63__;

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__64__;

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__65__;

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__66__;

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__67__;

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__68__;

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__69__;

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__70__;

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__71__;

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__72__;

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__73__;

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__74__;

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__75__;

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__76__;

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__77__;

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__78__;

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__79__;

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__80__;

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__81__;

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__82__;

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__83__;

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__84__;

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__85__;

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__86__;

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__87__;

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__88__;

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__89__;

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__90__;

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__91__;

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__92__;

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__93__;

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__94__;

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__95__;

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__96__;

/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__97__;

/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__98__;

/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__99__;

/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__100__;

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__101__;

/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__102__;

/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__103__;

/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__104__;

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__105__;

/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__106__;

/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__107__;

/***/ }),
/* 108 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__108__;

/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__109__;

/***/ }),
/* 110 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__110__;

/***/ }),
/* 111 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__111__;

/***/ }),
/* 112 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__112__;

/***/ }),
/* 113 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__113__;

/***/ }),
/* 114 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__114__;

/***/ }),
/* 115 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__115__;

/***/ }),
/* 116 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__116__;

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _uniqId = __webpack_require__(120);

var _portalVue = __webpack_require__(123);

var _portalVue2 = _interopRequireDefault(_portalVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ComponentRegistry = function () {
    function ComponentRegistry() {
        _classCallCheck(this, ComponentRegistry);

        this.components = [];
        this.directives = [];
    }

    _createClass(ComponentRegistry, [{
        key: 'registerComponent',
        value: function registerComponent(component) {
            this.components.push(component);
        }
    }, {
        key: 'registerDirective',
        value: function registerDirective(directive) {
            this.directives.push(directive);
        }
    }, {
        key: 'install',
        value: function install(vue) {
            vue.use(_uniqId.UniqId);
            vue.use(_portalVue2.default);

            this.directives.filter(function (d) {
                return typeof d.name === 'string';
            }).forEach(function (d) {
                return vue.directive(d.name, d);
            });

            this.components.filter(function (c) {
                return typeof c.name === 'string' || c.extendOptions && typeof c.extendOptions.name === 'string';
            }).forEach(function (c) {
                return vue.component(c.extendOptions ? c.extendOptions.name : c.name, c);
            });
        }
    }, {
        key: 'listComponents',
        value: function listComponents() {
            this.components.forEach(function (c) {
                return console.info(c.name);
            });
        }
    }, {
        key: 'listDirectives',
        value: function listDirectives() {
            this.directives.forEach(function (d) {
                return console.info(d.name);
            });
        }
    }]);

    return ComponentRegistry;
}();

exports.default = ComponentRegistry;

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UniqId = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _uuid = __webpack_require__(13);

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var UniqId = exports.UniqId = function () {
    function UniqId() {
        _classCallCheck(this, UniqId);
    }

    _createClass(UniqId, null, [{
        key: 'install',
        value: function install(vue) {
            Object.defineProperty(vue.prototype, 'uniqId', {
                configurable: true,
                get: function uniqId() {
                    if (process.env.BABEL_ENV) {
                        return 'static_id';
                    }
                    return (0, _uuid2.default)();
                }
            });
        }
    }]);

    return UniqId;
}();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(12)))

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(14);
var bytesToUuid = __webpack_require__(15);

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

var _nodeId;
var _clockseq;

// Previous uuid creation time
var _lastMSecs = 0;
var _lastNSecs = 0;

// See https://github.com/broofa/node-uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};
  var node = options.node || _nodeId;
  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189
  if (node == null || clockseq == null) {
    var seedBytes = rng();
    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [
        seedBytes[0] | 0x01,
        seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]
      ];
    }
    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  }

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(14);
var bytesToUuid = __webpack_require__(15);

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

 /*! 
  * portal-vue © Thorsten Lünborg, 2019 
  * 
  * Version: 2.1.5
  * 
  * LICENCE: MIT 
  * 
  * https://github.com/linusborg/portal-vue
  * 
 */



Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var Vue = _interopDefault(__webpack_require__(11));

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

var inBrowser = typeof window !== 'undefined';
function freeze(item) {
  if (Array.isArray(item) || _typeof(item) === 'object') {
    return Object.freeze(item);
  }

  return item;
}
function combinePassengers(transports) {
  var slotProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return transports.reduce(function (passengers, transport) {
    var temp = transport.passengers[0];
    var newPassengers = typeof temp === 'function' ? temp(slotProps) : transport.passengers;
    return passengers.concat(newPassengers);
  }, []);
}
function stableSort(array, compareFn) {
  return array.map(function (v, idx) {
    return [idx, v];
  }).sort(function (a, b) {
    return compareFn(a[1], b[1]) || a[0] - b[0];
  }).map(function (c) {
    return c[1];
  });
}
function pick(obj, keys) {
  return keys.reduce(function (acc, key) {
    if (obj.hasOwnProperty(key)) {
      acc[key] = obj[key];
    }

    return acc;
  }, {});
}

var transports = {};
var targets = {};
var sources = {};
var Wormhole = Vue.extend({
  data: function data() {
    return {
      transports: transports,
      targets: targets,
      sources: sources,
      trackInstances: inBrowser
    };
  },
  methods: {
    open: function open(transport) {
      if (!inBrowser) return;
      var to = transport.to,
          from = transport.from,
          passengers = transport.passengers,
          _transport$order = transport.order,
          order = _transport$order === void 0 ? Infinity : _transport$order;
      if (!to || !from || !passengers) return;
      var newTransport = {
        to: to,
        from: from,
        passengers: freeze(passengers),
        order: order
      };
      var keys = Object.keys(this.transports);

      if (keys.indexOf(to) === -1) {
        Vue.set(this.transports, to, []);
      }

      var currentIndex = this.$_getTransportIndex(newTransport); // Copying the array here so that the PortalTarget change event will actually contain two distinct arrays

      var newTransports = this.transports[to].slice(0);

      if (currentIndex === -1) {
        newTransports.push(newTransport);
      } else {
        newTransports[currentIndex] = newTransport;
      }

      this.transports[to] = stableSort(newTransports, function (a, b) {
        return a.order - b.order;
      });
    },
    close: function close(transport) {
      var force = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var to = transport.to,
          from = transport.from;
      if (!to || !from) return;

      if (!this.transports[to]) {
        return;
      }

      if (force) {
        this.transports[to] = [];
      } else {
        var index = this.$_getTransportIndex(transport);

        if (index >= 0) {
          // Copying the array here so that the PortalTarget change event will actually contain two distinct arrays
          var newTransports = this.transports[to].slice(0);
          newTransports.splice(index, 1);
          this.transports[to] = newTransports;
        }
      }
    },
    registerTarget: function registerTarget(target, vm, force) {
      if (!inBrowser) return;

      if (this.trackInstances && !force && this.targets[target]) {
        console.warn("[portal-vue]: Target ".concat(target, " already exists"));
      }

      this.$set(this.targets, target, Object.freeze([vm]));
    },
    unregisterTarget: function unregisterTarget(target) {
      this.$delete(this.targets, target);
    },
    registerSource: function registerSource(source, vm, force) {
      if (!inBrowser) return;

      if (this.trackInstances && !force && this.sources[source]) {
        console.warn("[portal-vue]: source ".concat(source, " already exists"));
      }

      this.$set(this.sources, source, Object.freeze([vm]));
    },
    unregisterSource: function unregisterSource(source) {
      this.$delete(this.sources, source);
    },
    hasTarget: function hasTarget(to) {
      return !!(this.targets[to] && this.targets[to][0]);
    },
    hasSource: function hasSource(to) {
      return !!(this.sources[to] && this.sources[to][0]);
    },
    hasContentFor: function hasContentFor(to) {
      return !!this.transports[to] && !!this.transports[to].length;
    },
    // Internal
    $_getTransportIndex: function $_getTransportIndex(_ref) {
      var to = _ref.to,
          from = _ref.from;

      for (var i in this.transports[to]) {
        if (this.transports[to][i].from === from) {
          return +i;
        }
      }

      return -1;
    }
  }
});
var wormhole = new Wormhole(transports);

var _id = 1;
var Portal = Vue.extend({
  name: 'portal',
  props: {
    disabled: {
      type: Boolean
    },
    name: {
      type: String,
      default: function _default() {
        return String(_id++);
      }
    },
    order: {
      type: Number,
      default: 0
    },
    slim: {
      type: Boolean
    },
    slotProps: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    tag: {
      type: String,
      default: 'DIV'
    },
    to: {
      type: String,
      default: function _default() {
        return String(Math.round(Math.random() * 10000000));
      }
    }
  },
  created: function created() {
    var _this = this;

    this.$nextTick(function () {
      wormhole.registerSource(_this.name, _this);
    });
  },
  mounted: function mounted() {
    if (!this.disabled) {
      this.sendUpdate();
    }
  },
  updated: function updated() {
    if (this.disabled) {
      this.clear();
    } else {
      this.sendUpdate();
    }
  },
  beforeDestroy: function beforeDestroy() {
    wormhole.unregisterSource(this.name);
    this.clear();
  },
  watch: {
    to: function to(newValue, oldValue) {
      oldValue && oldValue !== newValue && this.clear(oldValue);
      this.sendUpdate();
    }
  },
  methods: {
    clear: function clear(target) {
      var closer = {
        from: this.name,
        to: target || this.to
      };
      wormhole.close(closer);
    },
    normalizeSlots: function normalizeSlots() {
      return this.$scopedSlots.default ? [this.$scopedSlots.default] : this.$slots.default;
    },
    normalizeOwnChildren: function normalizeOwnChildren(children) {
      return typeof children === 'function' ? children(this.slotProps) : children;
    },
    sendUpdate: function sendUpdate() {
      var slotContent = this.normalizeSlots();

      if (slotContent) {
        var transport = {
          from: this.name,
          to: this.to,
          passengers: _toConsumableArray(slotContent),
          order: this.order
        };
        wormhole.open(transport);
      } else {
        this.clear();
      }
    }
  },
  render: function render(h) {
    var children = this.$slots.default || this.$scopedSlots.default || [];
    var Tag = this.tag;

    if (children && this.disabled) {
      return children.length <= 1 && this.slim ? this.normalizeOwnChildren(children)[0] : h(Tag, [this.normalizeOwnChildren(children)]);
    } else {
      return this.slim ? h() : h(Tag, {
        class: {
          'v-portal': true
        },
        style: {
          display: 'none'
        },
        key: 'v-portal-placeholder'
      });
    }
  }
});

var PortalTarget = Vue.extend({
  name: 'portalTarget',
  props: {
    multiple: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      required: true
    },
    slim: {
      type: Boolean,
      default: false
    },
    slotProps: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    tag: {
      type: String,
      default: 'div'
    },
    transition: {
      type: [String, Object, Function]
    }
  },
  data: function data() {
    return {
      transports: wormhole.transports,
      firstRender: true
    };
  },
  created: function created() {
    var _this = this;

    this.$nextTick(function () {
      wormhole.registerTarget(_this.name, _this);
    });
  },
  watch: {
    ownTransports: function ownTransports() {
      this.$emit('change', this.children().length > 0);
    },
    name: function name(newVal, oldVal) {
      /**
       * TODO
       * This should warn as well ...
       */
      wormhole.unregisterTarget(oldVal);
      wormhole.registerTarget(newVal, this);
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    if (this.transition) {
      this.$nextTick(function () {
        // only when we have a transition, because it causes a re-render
        _this2.firstRender = false;
      });
    }
  },
  beforeDestroy: function beforeDestroy() {
    wormhole.unregisterTarget(this.name);
  },
  computed: {
    ownTransports: function ownTransports() {
      var transports = this.transports[this.name] || [];

      if (this.multiple) {
        return transports;
      }

      return transports.length === 0 ? [] : [transports[transports.length - 1]];
    },
    passengers: function passengers() {
      return combinePassengers(this.ownTransports, this.slotProps);
    }
  },
  methods: {
    // can't be a computed prop because it has to "react" to $slot changes.
    children: function children() {
      return this.passengers.length !== 0 ? this.passengers : this.$scopedSlots.default ? this.$scopedSlots.default(this.slotProps) : this.$slots.default || [];
    },
    // can't be a computed prop because it has to "react" to this.children().
    noWrapper: function noWrapper() {
      var noWrapper = this.slim && !this.transition;

      if (noWrapper && this.children().length > 1) {
        console.warn('[portal-vue]: PortalTarget with `slim` option received more than one child element.');
      }

      return noWrapper;
    }
  },
  render: function render(h) {
    var noWrapper = this.noWrapper();
    var children = this.children();
    var Tag = this.transition || this.tag;
    return noWrapper ? children[0] : this.slim && !Tag ? h() : h(Tag, {
      props: {
        // if we have a transition component, pass the tag if it exists
        tag: this.transition && this.tag ? this.tag : undefined
      },
      class: {
        'vue-portal-target': true
      }
    }, children);
  }
});

var _id$1 = 0;
var portalProps = ['disabled', 'name', 'order', 'slim', 'slotProps', 'tag', 'to'];
var targetProps = ['multiple', 'transition'];
var MountingPortal = Vue.extend({
  name: 'MountingPortal',
  inheritAttrs: false,
  props: {
    append: {
      type: [Boolean, String]
    },
    bail: {
      type: Boolean
    },
    mountTo: {
      type: String,
      required: true
    },
    // Portal
    disabled: {
      type: Boolean
    },
    // name for the portal
    name: {
      type: String,
      default: function _default() {
        return 'mounted_' + String(_id$1++);
      }
    },
    order: {
      type: Number,
      default: 0
    },
    slim: {
      type: Boolean
    },
    slotProps: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    tag: {
      type: String,
      default: 'DIV'
    },
    // name for the target
    to: {
      type: String,
      default: function _default() {
        return String(Math.round(Math.random() * 10000000));
      }
    },
    // Target
    multiple: {
      type: Boolean,
      default: false
    },
    targetSlim: {
      type: Boolean
    },
    targetSlotProps: {
      type: Object,
      default: function _default() {
        return {};
      }
    },
    targetTag: {
      type: String,
      default: 'div'
    },
    transition: {
      type: [String, Object, Function]
    }
  },
  created: function created() {
    if (typeof document === 'undefined') return;
    var el = document.querySelector(this.mountTo);

    if (!el) {
      console.error("[portal-vue]: Mount Point '".concat(this.mountTo, "' not found in document"));
      return;
    }

    var props = this.$props; // Target already exists

    if (wormhole.targets[props.name]) {
      if (props.bail) {
        console.warn("[portal-vue]: Target ".concat(props.name, " is already mounted.\n        Aborting because 'bail: true' is set"));
      } else {
        this.portalTarget = wormhole.targets[props.name];
      }

      return;
    }

    var append = props.append;

    if (append) {
      var type = typeof append === 'string' ? append : 'DIV';
      var mountEl = document.createElement(type);
      el.appendChild(mountEl);
      el = mountEl;
    } // get props for target from $props
    // we have to rename a few of them


    var _props = pick(this.$props, targetProps);

    _props.slim = this.targetSlim;
    _props.tag = this.targetTag;
    _props.slotProps = this.targetSlotProps;
    _props.name = this.to;
    this.portalTarget = new PortalTarget({
      el: el,
      parent: this.$parent || this,
      propsData: _props
    });
  },
  beforeDestroy: function beforeDestroy() {
    var target = this.portalTarget;

    if (this.append) {
      var el = target.$el;
      el.parentNode.removeChild(el);
    }

    target.$destroy();
  },
  render: function render(h) {
    if (!this.portalTarget) {
      console.warn("[portal-vue] Target wasn't mounted");
      return h();
    } // if there's no "manual" scoped slot, so we create a <Portal> ourselves


    if (!this.$scopedSlots.manual) {
      var props = pick(this.$props, portalProps);
      return h(Portal, {
        props: props,
        attrs: this.$attrs,
        on: this.$listeners,
        scopedSlots: this.$scopedSlots
      }, this.$slots.default);
    } // else, we render the scoped slot


    var content = this.$scopedSlots.manual({
      to: this.to
    }); // if user used <template> for the scoped slot
    // content will be an array

    if (Array.isArray(content)) {
      content = content[0];
    }

    if (!content) return h();
    return content;
  }
});

function install(Vue$$1) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  Vue$$1.component(options.portalName || 'Portal', Portal);
  Vue$$1.component(options.portalTargetName || 'PortalTarget', PortalTarget);
  Vue$$1.component(options.MountingPortalName || 'MountingPortal', MountingPortal);
}

var index = {
  install: install
};

exports.default = index;
exports.Portal = Portal;
exports.PortalTarget = PortalTarget;
exports.MountingPortal = MountingPortal;
exports.Wormhole = wormhole;
//# sourceMappingURL=portal-vue.common.js.map


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _atoms = __webpack_require__(125);

var Atoms = _interopRequireWildcard(_atoms);

var _molecules = __webpack_require__(191);

var Molecules = _interopRequireWildcard(_molecules);

var _organisms = __webpack_require__(378);

var Organisms = _interopRequireWildcard(_organisms);

var _organismsPage = __webpack_require__(445);

var OrganismsPage = _interopRequireWildcard(_organismsPage);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = _extends({}, Atoms, Molecules, Organisms, OrganismsPage);

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _anchorOverlay = __webpack_require__(126);

Object.defineProperty(exports, 'AnchorOverlay', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_anchorOverlay).default;
  }
});

var _actionButton = __webpack_require__(129);

Object.defineProperty(exports, 'ActionButton', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_actionButton).default;
  }
});

var _animatedArrow = __webpack_require__(132);

Object.defineProperty(exports, 'AnimatedArrow', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_animatedArrow).default;
  }
});

var _BaseLink = __webpack_require__(6);

Object.defineProperty(exports, 'BaseLink', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_BaseLink).default;
  }
});

var _contentLink = __webpack_require__(137);

Object.defineProperty(exports, 'ContentLink', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_contentLink).default;
  }
});

var _contentButton = __webpack_require__(139);

Object.defineProperty(exports, 'ContentButton', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_contentButton).default;
  }
});

var _contentLinkList = __webpack_require__(141);

Object.defineProperty(exports, 'ContentLinkList', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_contentLinkList).default;
  }
});

var _hitArea = __webpack_require__(144);

Object.defineProperty(exports, 'HitArea', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_hitArea).default;
  }
});

var _horizontalList = __webpack_require__(147);

Object.defineProperty(exports, 'HorizontalList', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_horizontalList).default;
  }
});

var _icon = __webpack_require__(150);

Object.defineProperty(exports, 'Icon', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_icon).default;
  }
});

var _cImage = __webpack_require__(153);

Object.defineProperty(exports, 'Image', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_cImage).default;
  }
});

var _labelFilter = __webpack_require__(160);

Object.defineProperty(exports, 'LabelFilter', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_labelFilter).default;
  }
});

var _liInline = __webpack_require__(163);

Object.defineProperty(exports, 'LiInline', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_liInline).default;
  }
});

var _liItem = __webpack_require__(166);

Object.defineProperty(exports, 'LiItem', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_liItem).default;
  }
});

var _navAssist = __webpack_require__(169);

Object.defineProperty(exports, 'NavAssist', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_navAssist).default;
  }
});

var _responsivePicture = __webpack_require__(172);

Object.defineProperty(exports, 'ResponsivePicture', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_responsivePicture).default;
  }
});

var _spanLabel = __webpack_require__(176);

Object.defineProperty(exports, 'SpanLabel', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_spanLabel).default;
  }
});

var _tabbableDefinitionList = __webpack_require__(179);

Object.defineProperty(exports, 'TabbableDefinitionList', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_tabbableDefinitionList).default;
  }
});

var _tooltip = __webpack_require__(182);

Object.defineProperty(exports, 'Tooltip', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_tooltip).default;
  }
});

var _youtubeLink = __webpack_require__(185);

Object.defineProperty(exports, 'YoutubeLink', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_youtubeLink).default;
  }
});

var _youtubeVideo = __webpack_require__(188);

Object.defineProperty(exports, 'YoutubeVideo', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_youtubeVideo).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _component = __webpack_require__(127);

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _component2.default;

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _templateVue = __webpack_require__(128);

var _templateVue2 = _interopRequireDefault(_templateVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnchorOverlay = function (_Vue) {
    _inherits(AnchorOverlay, _Vue);

    function AnchorOverlay() {
        _classCallCheck(this, AnchorOverlay);

        return _possibleConstructorReturn(this, (AnchorOverlay.__proto__ || Object.getPrototypeOf(AnchorOverlay)).apply(this, arguments));
    }

    return AnchorOverlay;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", String)], AnchorOverlay.prototype, "title", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", String)], AnchorOverlay.prototype, "url", void 0);
AnchorOverlay = __decorate([_templateVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'AnchorOverlay'
})], AnchorOverlay);
exports.default = AnchorOverlay;

/***/ }),
/* 128 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"anchor-overlay hit-area",attrs:{"href":_vm.url,"title":_vm.title,"aria-label":_vm.title}})}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionButton = __webpack_require__(130);

var _actionButton2 = _interopRequireDefault(_actionButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _actionButton2.default;

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _actionButtonVue = __webpack_require__(131);

var _actionButtonVue2 = _interopRequireDefault(_actionButtonVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ActionButton = function (_Vue) {
    _inherits(ActionButton, _Vue);

    function ActionButton() {
        _classCallCheck(this, ActionButton);

        return _possibleConstructorReturn(this, (ActionButton.__proto__ || Object.getPrototypeOf(ActionButton)).apply(this, arguments));
    }

    _createClass(ActionButton, [{
        key: "classObject",
        get: function get() {
            var classes = {};
            if (this.block !== '' && typeof this.block === 'string') {
                classes[this.block + "__link"] = true;
            }
            if (this.mod !== '' && typeof this.mod === 'string') {
                this.mod.split(' ').forEach(function (mod) {
                    classes["link--" + mod] = true;
                });
            }
            if (this.icon !== '' && this.mod && this.mod.indexOf('small') === -1) {
                classes['link--icon'] = true;
            }
            return classes;
        }
    }]);

    return ActionButton;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: false }), __metadata("design:type", String)], ActionButton.prototype, "block", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: false }), __metadata("design:type", String)], ActionButton.prototype, "mod", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: false }), __metadata("design:type", String)], ActionButton.prototype, "icon", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: false }), __metadata("design:type", String)], ActionButton.prototype, "label", void 0);
ActionButton = __decorate([_actionButtonVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'ActionButton'
})], ActionButton);
exports.default = ActionButton;

/***/ }),
/* 131 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{class:_vm.classObject,attrs:{"href":"#"}},[(this.icon)?_c('icon',{attrs:{"icon-name":_vm.icon}}):_vm._e(),_vm._v(" "),_vm._t("default")],2)}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _animatedArrow = __webpack_require__(133);

var _animatedArrow2 = _interopRequireDefault(_animatedArrow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _animatedArrow2.default;

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AnimatedArrow = function (_Vue) {
    _inherits(AnimatedArrow, _Vue);

    function AnimatedArrow() {
        _classCallCheck(this, AnimatedArrow);

        return _possibleConstructorReturn(this, (AnimatedArrow.__proto__ || Object.getPrototypeOf(AnimatedArrow)).apply(this, arguments));
    }

    return AnimatedArrow;
}(_vuePropertyDecorator.Vue);
AnimatedArrow = __decorate([(0, _vuePropertyDecorator.Component)({
    name: 'animated-arrow',
    template: __webpack_require__(134)
})], AnimatedArrow);
exports.default = AnimatedArrow;

/***/ }),
/* 134 */
/***/ (function(module, exports) {

module.exports = "<svg class=\"arrow--animated\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 120\">\n    <defs>\n        <clipPath id=\"mask\" class=\"arrow__mask\">\n            <rect x=\"40\" y=\"40\" width=\"40\" height=\"40\" rotate=\"45deg\"/>\n        </clipPath>\n    </defs>\n    <g clip-path=\"url(#mask)\">\n        <path class=\"arrow__line arrow__line-1\" d=\"M15.3 55h94.8v10.1H15.3z\" clip-path=\"url(#mask)\" />\n        <path class=\"arrow__line arrow__line-2\" d=\"M15.3 55h94.8v10.1H15.3z\"/>\n        <path class=\"arrow__line arrow__line-3\" d=\"M15.3 55h94.8v10.1H15.3z\"/>\n    </g>\n</svg>\n";

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _events = __webpack_require__(5);

var _events2 = _interopRequireDefault(_events);

var _baseLinkVue = __webpack_require__(136);

var _baseLinkVue2 = _interopRequireDefault(_baseLinkVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BaseLink = function (_Vue) {
    _inherits(BaseLink, _Vue);

    function BaseLink() {
        _classCallCheck(this, BaseLink);

        var _this = _possibleConstructorReturn(this, (BaseLink.__proto__ || Object.getPrototypeOf(BaseLink)).apply(this, arguments));

        _this.absoluteUrlRegex = /^(http(s)?):\/\//;
        _this.domainRegex = /(http(s)?):\/\/(www.)?ultimaker\.com/;
        return _this;
    }

    _createClass(BaseLink, [{
        key: "triggerEventClick",
        value: function triggerEventClick() {
            if (this.clickEvent) {
                this.$emitPublic(_events2.default.click, this.clickEventData);
            }
        }
    }, {
        key: "urlTarget",
        get: function get() {
            if (this.url) {
                return this.url.match(this.domainRegex) ? '_self' : '_blank';
            }
            return '';
        }
    }, {
        key: "slots",
        get: function get() {
            return this.$slots && this.$slots.default && this.$slots.default.length;
        }
    }, {
        key: "classObject",
        get: function get() {
            var classes = {};
            if (this.block !== '' && typeof this.block === 'string') {
                classes[this.block + "__link"] = true;
            }
            if (this.mod !== '' && typeof this.mod === 'string') {
                this.mod.split(' ').forEach(function (mod) {
                    classes["link--" + mod] = true;
                });
            }
            if (this.icon !== '' && typeof this.icon === 'string') {
                classes['link--icon'] = true;
            }
            return classes;
        }
    }, {
        key: "linkProps",
        get: function get() {
            if (this.url && this.url.match(this.absoluteUrlRegex)) {
                return {
                    is: 'a',
                    href: this.url,
                    target: this.urlTarget,
                    rel: 'noopener'
                };
            }
            return {
                is: 'router-link',
                to: this.url,
                ref: 'link'
            };
        }
    }, {
        key: "clickEventData",
        get: function get() {
            if (this.clickEvent) {
                return {
                    dataType: this.clickEvent.name,
                    data: _extends({}, this.clickEvent.data, {
                        pageSlug: this.$route.fullPath,
                        ctaUrlTarget: this.urlTarget
                    })
                };
            }
            return null;
        }
    }]);

    return BaseLink;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String }), __metadata("design:type", String)], BaseLink.prototype, "type", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String }), __metadata("design:type", String)], BaseLink.prototype, "block", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String }), __metadata("design:type", String)], BaseLink.prototype, "mod", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String }), __metadata("design:type", String)], BaseLink.prototype, "icon", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String }), __metadata("design:type", String)], BaseLink.prototype, "url", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String }), __metadata("design:type", String)], BaseLink.prototype, "label", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object }), __metadata("design:type", Object)], BaseLink.prototype, "clickEvent", void 0);
BaseLink = __decorate([_baseLinkVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'base-link'
})], BaseLink);
exports.default = BaseLink;

/***/ }),
/* 136 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('component',_vm._b({class:_vm.classObject,on:{"click":_vm.triggerEventClick}},'component',_vm.linkProps,false),[(this.icon)?_c('icon',{attrs:{"icon-name":_vm.icon}}):_vm._e(),_vm._v(" "),(!_vm.slots)?_c('span',{staticClass:"link__underline"},[_vm._v("\n        "+_vm._s(_vm.label)+"\n    ")]):_vm._t("default")],2)}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _contentLink = __webpack_require__(138);

var _contentLink2 = _interopRequireDefault(_contentLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _contentLink2.default;

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _BaseLink2 = __webpack_require__(6);

var _BaseLink3 = _interopRequireDefault(_BaseLink2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContentLink = function (_BaseLink) {
    _inherits(ContentLink, _BaseLink);

    function ContentLink() {
        _classCallCheck(this, ContentLink);

        return _possibleConstructorReturn(this, (ContentLink.__proto__ || Object.getPrototypeOf(ContentLink)).apply(this, arguments));
    }

    return ContentLink;
}(_BaseLink3.default);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: false }), __metadata("design:type", Object)], ContentLink.prototype, "icon", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], ContentLink.prototype, "url", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], ContentLink.prototype, "label", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object, required: false }), __metadata("design:type", Object)], ContentLink.prototype, "clickEvent", void 0);
ContentLink = __decorate([(0, _vuePropertyDecorator.Component)({
    name: 'ContentLink'
})], ContentLink);
exports.default = ContentLink;

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _contentButton = __webpack_require__(140);

var _contentButton2 = _interopRequireDefault(_contentButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _contentButton2.default;

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _BaseLink2 = __webpack_require__(6);

var _BaseLink3 = _interopRequireDefault(_BaseLink2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContentButton = function (_BaseLink) {
    _inherits(ContentButton, _BaseLink);

    function ContentButton() {
        _classCallCheck(this, ContentButton);

        return _possibleConstructorReturn(this, (ContentButton.__proto__ || Object.getPrototypeOf(ContentButton)).apply(this, arguments));
    }

    return ContentButton;
}(_BaseLink3.default);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: false }), __metadata("design:type", Object)], ContentButton.prototype, "icon", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: false }), __metadata("design:type", Object)], ContentButton.prototype, "url", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], ContentButton.prototype, "label", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object, required: false }), __metadata("design:type", Object)], ContentButton.prototype, "clickEvent", void 0);
ContentButton = __decorate([(0, _vuePropertyDecorator.Component)({
    name: 'ContentButton'
})], ContentButton);
exports.default = ContentButton;

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _contentLinkList = __webpack_require__(142);

var _contentLinkList2 = _interopRequireDefault(_contentLinkList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _contentLinkList2.default;

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _contentLinkListVue = __webpack_require__(143);

var _contentLinkListVue2 = _interopRequireDefault(_contentLinkListVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContentLinkList = function (_Vue) {
    _inherits(ContentLinkList, _Vue);

    function ContentLinkList() {
        _classCallCheck(this, ContentLinkList);

        return _possibleConstructorReturn(this, (ContentLinkList.__proto__ || Object.getPrototypeOf(ContentLinkList)).apply(this, arguments));
    }

    return ContentLinkList;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", String)], ContentLinkList.prototype, "block", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Array, default: [] }), __metadata("design:type", Array)], ContentLinkList.prototype, "links", void 0);
ContentLinkList = __decorate([_contentLinkListVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'content-link-list'
})], ContentLinkList);
exports.default = ContentLinkList;

/***/ }),
/* 143 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{class:_vm.block + '__list'},_vm._l((_vm.links),function(link){return _c('li',{class:_vm.block + '__item'},[_c('content-link',{class:link.class,attrs:{"block":_vm.block,"icon":link.icon,"url":link.url,"label":link.label}})],1)}),0)}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hitArea = __webpack_require__(145);

var _hitArea2 = _interopRequireDefault(_hitArea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _hitArea2.default;

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _hitAreaVue = __webpack_require__(146);

var _hitAreaVue2 = _interopRequireDefault(_hitAreaVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HitArea = function (_Vue) {
    _inherits(HitArea, _Vue);

    function HitArea() {
        _classCallCheck(this, HitArea);

        return _possibleConstructorReturn(this, (HitArea.__proto__ || Object.getPrototypeOf(HitArea)).apply(this, arguments));
    }

    return HitArea;
}(_vuePropertyDecorator.Vue);
HitArea = __decorate([_hitAreaVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'hit-area'
})], HitArea);
exports.default = HitArea;

/***/ }),
/* 146 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"hit-area",attrs:{"role":"button","tabindex":"0"}},[_vm._t("default")],2)}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _horizontalList = __webpack_require__(148);

var _horizontalList2 = _interopRequireDefault(_horizontalList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _horizontalList2.default;

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _horizontalListVue = __webpack_require__(149);

var _horizontalListVue2 = _interopRequireDefault(_horizontalListVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HorizontalList = function (_Vue) {
    _inherits(HorizontalList, _Vue);

    function HorizontalList() {
        _classCallCheck(this, HorizontalList);

        return _possibleConstructorReturn(this, (HorizontalList.__proto__ || Object.getPrototypeOf(HorizontalList)).apply(this, arguments));
    }

    return HorizontalList;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String }), __metadata("design:type", String)], HorizontalList.prototype, "styleModifier", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", String)], HorizontalList.prototype, "label", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Array, required: true }), __metadata("design:type", Array)], HorizontalList.prototype, "listItems", void 0);
HorizontalList = __decorate([_horizontalListVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'horizontal-list'
})], HorizontalList);
exports.default = HorizontalList;

/***/ }),
/* 149 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{class:_vm.styleModifier},[_c('strong',{staticClass:"caption-list__headline"},[_vm._v("\n        "+_vm._s(_vm.label)+"\n    ")]),_vm._v(" "),_c('ul',{staticClass:"caption-list"},_vm._l((_vm.listItems),function(item){return _c('li',{staticClass:"caption-list__list-item"},[_vm._v("\n            "+_vm._s(item.additionalContent)+"\n            "),_c('a',{attrs:{"href":item.url}},[_vm._v(_vm._s(item.text))])])}),0)])}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icon = __webpack_require__(151);

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _icon2.default;

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _iconVue = __webpack_require__(152);

var _iconVue2 = _interopRequireDefault(_iconVue);

var _browserCapabilities = __webpack_require__(2);

var _browserCapabilities2 = _interopRequireDefault(_browserCapabilities);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var defaultIconUrl = '/static/icons/iconset.svg';
var Icon = function (_Vue) {
    _inherits(Icon, _Vue);

    function Icon() {
        _classCallCheck(this, Icon);

        var _this = _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));

        _this.iconUrl = _browserCapabilities2.default.isBrowser && window['svgIconMap'] ? window['svgIconMap'] : defaultIconUrl;
        _this.ready = false;
        _this.symbolData = null;
        _this.viewBox = null;
        return _this;
    }

    _createClass(Icon, [{
        key: "mounted",
        value: function mounted() {
            this.ready = true;
        }
    }, {
        key: "iconId",
        get: function get() {
            return "icon-" + this.iconName;
        }
    }, {
        key: "iconClass",
        get: function get() {
            return "icon--" + this.iconName;
        }
    }, {
        key: "iconRef",
        get: function get() {
            return this.iconUrl + "#icon-" + this.iconName;
        }
    }]);

    return Icon;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", String)], Icon.prototype, "iconName", void 0);
Icon = __decorate([_iconVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'icon'
})], Icon);
exports.default = Icon;

/***/ }),
/* 152 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.ready)?_c('svg',{staticClass:"icon",class:_vm.iconClass,attrs:{"viewBox":_vm.viewBox}},[(!_vm.symbolData)?_c('use',{attrs:{"xlink:href":_vm.iconRef}}):_vm._e()]):_vm._e()}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cImage = __webpack_require__(154);

var _cImage2 = _interopRequireDefault(_cImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _cImage2.default;

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _cImage = __webpack_require__(155);

var _inView = __webpack_require__(157);

var _browserCapabilities = __webpack_require__(2);

var _browserCapabilities2 = _interopRequireDefault(_browserCapabilities);

var _viewport = __webpack_require__(1);

var _viewport2 = _interopRequireDefault(_viewport);

var _cImage2 = __webpack_require__(158);

var _cImageVue = __webpack_require__(159);

var _cImageVue2 = _interopRequireDefault(_cImageVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CImage = function (_Mixins) {
    _inherits(CImage, _Mixins);

    function CImage() {
        _classCallCheck(this, CImage);

        var _this = _possibleConstructorReturn(this, (CImage.__proto__ || Object.getPrototypeOf(CImage)).apply(this, arguments));

        _this.height = 0;
        _this.imageError = false;
        _this.imageLoaded = false;
        _this.ready = false;
        _this.viewportUtil = new _viewport2.default();
        _this.width = 0;
        return _this;
    }

    _createClass(CImage, [{
        key: "beforeMount",
        value: function beforeMount() {
            if (_browserCapabilities2.default.isBrowser) {
                var height = this.viewportUtil.screenHeight * 1.5;
                this.setInViewOptions({ rootMargin: height + "px 0px " + height + "px 0px" });
            }
        }
    }, {
        key: "setError",
        value: function setError() {
            this.$emit('error');
            this.imageError = true;
        }
    }, {
        key: "mounted",
        value: function () {
            var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (_browserCapabilities2.default.isBrowser) {
                                    _context.next = 2;
                                    break;
                                }

                                return _context.abrupt("return");

                            case 2:
                                this.viewportUtil.addResizeHandler(this.resizeHandler);
                                _context.next = 5;
                                return this.calculateDimensions(true);

                            case 5:
                                this.ready = true;

                            case 6:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function mounted() {
                return _ref.apply(this, arguments);
            }

            return mounted;
        }()
    }, {
        key: "beforeDestroy",
        value: function beforeDestroy() {
            this.viewportUtil.removeResizeHandler(this.resizeHandler);
            this.viewportUtil.removeScrollHandler(this.resizeHandler);
        }
    }, {
        key: "reset",
        value: function () {
            var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
                var _this2 = this;

                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                this.ready = false;
                                this.imageLoaded = false;
                                this.width = 0;
                                this.height = 0;
                                this.$nextTick(function () {
                                    _this2.ready = true;
                                });

                                if (!this.inView) {
                                    _context2.next = 8;
                                    break;
                                }

                                _context2.next = 8;
                                return this.inViewWatcher(true);

                            case 8:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function reset() {
                return _ref2.apply(this, arguments);
            }

            return reset;
        }()
    }, {
        key: "getParams",
        value: function getParams(options) {
            var elementWidth = this.width || _cImage2.imageConstants.initialSize;
            var elementHeight = this.height;
            var paramMap = new Map([['w', options && options.width ? options.width : elementWidth], ['h', options && options.height ? options.height : elementHeight], ['fit', this.resizeBehavior], ['f', this.focusArea]]);
            return Array.from(paramMap.keys()).reduce(function (accumulator, current) {
                var value = paramMap.get(current);
                if (!value) return accumulator;
                return "" + accumulator + (accumulator === '' ? '?' : '&') + current + "=" + value;
            }, '');
        }
    }, {
        key: "calculateDimensions",
        value: function calculateDimensions() {
            var _this3 = this;

            var forceUpdate = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            if (!_browserCapabilities2.default.isBrowser) return Promise.resolve();
            if (!this.inView && !forceUpdate) return Promise.resolve();
            return new Promise(function (resolve) {
                window.requestAnimationFrame(function () {
                    var rect = _this3.$el.getBoundingClientRect();
                    var desiredWidth = Math.floor(rect.width * (window.devicePixelRatio || 1));
                    var desiredHeight = Math.floor(rect.height * (window.devicePixelRatio || 1));
                    if (_this3.resizeBehavior !== _cImage.ResizeBehavior.default) {
                        _this3.width = desiredWidth > _cImage2.imageConstants.maxWidth ? _cImage2.imageConstants.maxWidth : desiredWidth;
                        _this3.height = desiredHeight > _cImage2.imageConstants.maxHeight ? _cImage2.imageConstants.maxHeight : desiredHeight;
                    } else {
                        _this3.width = desiredWidth > _cImage2.imageConstants.maxWidth ? _cImage2.imageConstants.maxWidth : desiredWidth;
                    }
                    resolve();
                });
            });
        }
    }, {
        key: "inViewWatcher",
        value: function () {
            var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(val) {
                var imageToLoad;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                if (!(!val || this.imageLoaded)) {
                                    _context3.next = 2;
                                    break;
                                }

                                return _context3.abrupt("return");

                            case 2:
                                _context3.next = 4;
                                return this.calculateDimensions();

                            case 4:
                                imageToLoad = document.createElement('img');

                                imageToLoad.src = this.src;
                                imageToLoad.addEventListener('load', this.imageLoadHandler);

                            case 7:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function inViewWatcher(_x2) {
                return _ref3.apply(this, arguments);
            }

            return inViewWatcher;
        }()
    }, {
        key: "resizeHandler",
        value: function resizeHandler() {
            this.calculateDimensions();
        }
    }, {
        key: "imageLoadHandler",
        value: function imageLoadHandler() {
            this.imageLoaded = true;
        }
    }, {
        key: "classList",
        get: function get() {
            return {
                'img--loading': !this.inView || !this.imageLoaded
            };
        }
    }, {
        key: "src",
        get: function get() {
            if (!this.imageLoaded) {
                return "" + this.url + this.getParams({ width: _cImage2.imageConstants.initialSize });
            }
            return "" + this.url + this.getParams({});
        }
    }]);

    return CImage;
}((0, _vuePropertyDecorator.Mixins)(_inView.InView));
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, default: '' }), __metadata("design:type", String)], CImage.prototype, "alt", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Boolean, default: false }), __metadata("design:type", Boolean)], CImage.prototype, "crop", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, default: _cImage.FocusArea.center }), __metadata("design:type", String)], CImage.prototype, "focusArea", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", String)], CImage.prototype, "mimeType", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, default: _cImage.ResizeBehavior.default }), __metadata("design:type", String)], CImage.prototype, "resizeBehavior", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Number, default: 65 }), __metadata("design:type", Number)], CImage.prototype, "quality", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", String)], CImage.prototype, "url", void 0);
__decorate([(0, _vuePropertyDecorator.Watch)('url'), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", Promise)], CImage.prototype, "reset", null);
__decorate([(0, _vuePropertyDecorator.Watch)('inView'), __metadata("design:type", Function), __metadata("design:paramtypes", [Boolean]), __metadata("design:returntype", Promise)], CImage.prototype, "inViewWatcher", null);
CImage = __decorate([_cImageVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'c-image'
})], CImage);
exports.default = CImage;

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Image = __webpack_require__(156);

Object.defineProperty(exports, "FocusArea", {
    enumerable: true,
    get: function get() {
        return _Image.FocusArea;
    }
});
var ImageFormat = exports.ImageFormat = undefined;
(function (ImageFormat) {
    ImageFormat["default"] = "";
    ImageFormat["jpg"] = "jpg";
    ImageFormat["pjpg"] = "pjpg";
    ImageFormat["png"] = "png";
    ImageFormat["png8"] = "png8";
    ImageFormat["webp"] = "webp";
})(ImageFormat || (exports.ImageFormat = ImageFormat = {}));
var ResizeBehavior = exports.ResizeBehavior = undefined;
(function (ResizeBehavior) {
    ResizeBehavior["default"] = "";
    ResizeBehavior["pad"] = "pad";
    ResizeBehavior["fill"] = "fill";
    ResizeBehavior["scale"] = "scale";
    ResizeBehavior["crop"] = "crop";
    ResizeBehavior["thumb"] = "thumb";
})(ResizeBehavior || (exports.ResizeBehavior = ResizeBehavior = {}));

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

Object.defineProperty(exports, "__esModule", { value: true });
var FocusArea;
(function (FocusArea) {
    FocusArea["center"] = "";
    FocusArea["top"] = "top";
    FocusArea["right"] = "right";
    FocusArea["bottom"] = "bottom";
    FocusArea["left"] = "left";
    FocusArea["topRight"] = "top_right";
    FocusArea["topLeft"] = "top_left";
    FocusArea["bottomRight"] = "bottom_right";
    FocusArea["bottomLeft"] = "bottom_left";
    FocusArea["faceLargest"] = "face";
    FocusArea["faces"] = "faces";
})(FocusArea = exports.FocusArea || (exports.FocusArea = {}));

var Image = function Image() {
    _classCallCheck(this, Image);
};

exports.Image = Image;

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InView = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _browserCapabilities = __webpack_require__(2);

var _browserCapabilities2 = _interopRequireDefault(_browserCapabilities);

var _viewport = __webpack_require__(1);

var _viewport2 = _interopRequireDefault(_viewport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InView = function (_Vue) {
    _inherits(InView, _Vue);

    function InView() {
        _classCallCheck(this, InView);

        var _this = _possibleConstructorReturn(this, (InView.__proto__ || Object.getPrototypeOf(InView)).apply(this, arguments));

        _this.inView = false;
        _this.inViewOptions = {};
        _this.viewportUtil = new _viewport2.default();
        return _this;
    }

    _createClass(InView, [{
        key: "intersectionHandler",
        value: function intersectionHandler(entries) {
            if (entries.length) {
                var entry = entries.slice(-1)[0];
                this.setInView(entry.isIntersecting);
            }
        }
    }, {
        key: "intersectionPolyHandler",
        value: function intersectionPolyHandler() {
            var windowBottom = this.viewportUtil.scrollY + this.viewportUtil.screenHeight;
            var pictureBounds = this.$el.getBoundingClientRect();
            var pictureTop = this.viewportUtil.scrollY + pictureBounds.top;
            var pictureBottom = pictureTop + pictureBounds.height;
            this.setInView(this.viewportUtil.scrollY <= pictureBottom && windowBottom >= pictureTop);
        }
    }, {
        key: "setInView",
        value: function setInView(inView) {
            if (this.inView && this.keepInView) {
                return;
            }
            this.inView = inView;
        }
    }, {
        key: "setInViewOptions",
        value: function setInViewOptions(options) {
            this.inViewOptions = options;
        }
    }, {
        key: "mounted",
        value: function mounted() {
            if (!_browserCapabilities2.default.supportsIntersectionObserver) {
                this.viewportUtil.addResizeHandler(this.intersectionPolyHandler);
                this.viewportUtil.addScrollHandler(this.intersectionPolyHandler);
                return;
            }
            this.inViewObserver = new IntersectionObserver(this.intersectionHandler, this.inViewOptions);
            this.inViewObserver.observe(this.$el);
        }
    }, {
        key: "beforeDestroy",
        value: function beforeDestroy() {
            if (this.inViewObserver) {
                this.inViewObserver.unobserve(this.$el);
            } else {
                this.viewportUtil.removeResizeHandler(this.intersectionPolyHandler);
                this.viewportUtil.removeScrollHandler(this.intersectionPolyHandler);
            }
        }
    }]);

    return InView;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Boolean, default: true }), __metadata("design:type", Boolean)], InView.prototype, "keepInView", void 0);
exports.InView = InView = __decorate([_vuePropertyDecorator.Component], InView);
exports.InView = InView;

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var imageConstants = exports.imageConstants = {
    maxWidth: 4000,
    maxHeight: 4000,
    initialSize: 20,
    tinyGif: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'
};

/***/ }),
/* 159 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('img',{staticClass:"img--contain",class:_vm.classList,attrs:{"alt":_vm.alt,"src":_vm.src},on:{"error":_vm.setError}})}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _labelFilter = __webpack_require__(161);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _labelFilter.LabelFilter;
  }
});

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LabelFilter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _labelFilterVue = __webpack_require__(162);

var _labelFilterVue2 = _interopRequireDefault(_labelFilterVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LabelFilter = function (_Vue) {
    _inherits(LabelFilter, _Vue);

    function LabelFilter() {
        _classCallCheck(this, LabelFilter);

        var _this = _possibleConstructorReturn(this, (LabelFilter.__proto__ || Object.getPrototypeOf(LabelFilter)).apply(this, arguments));

        _this.checkedState = _this.checked || false;
        return _this;
    }

    _createClass(LabelFilter, [{
        key: "onChange",
        value: function onChange($event) {
            this.$emit(this.eventChange, {
                checked: this.checkedState,
                disabled: this.disabled,
                value: this.value
            });
        }
    }]);

    return LabelFilter;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Boolean, default: false }), __metadata("design:type", Object)], LabelFilter.prototype, "checked", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Boolean, default: false }), __metadata("design:type", Object)], LabelFilter.prototype, "disabled", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], LabelFilter.prototype, "eventChange", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], LabelFilter.prototype, "label", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], LabelFilter.prototype, "name", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], LabelFilter.prototype, "value", void 0);
exports.LabelFilter = LabelFilter = __decorate([_labelFilterVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'LabelFilter'
})], LabelFilter);
exports.LabelFilter = LabelFilter;

/***/ }),
/* 162 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{staticClass:"label-filter"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.checkedState),expression:"checkedState"}],ref:"checkbox",attrs:{"disabled":_vm.disabled,"name":_vm.name,"type":"checkbox"},domProps:{"checked":_vm.checked,"value":_vm.value,"checked":Array.isArray(_vm.checkedState)?_vm._i(_vm.checkedState,_vm.value)>-1:(_vm.checkedState)},on:{"change":[function($event){var $$a=_vm.checkedState,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=_vm.value,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.checkedState=$$a.concat([$$v]))}else{$$i>-1&&(_vm.checkedState=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.checkedState=$$c}},_vm.onChange]}}),_vm._v(" "),_c('span',{staticClass:"label-filter__label"},[_vm._v(_vm._s(_vm.label))])])}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _liInline = __webpack_require__(164);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _liInline.LiInline;
  }
});

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LiInline = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _liInlineVue = __webpack_require__(165);

var _liInlineVue2 = _interopRequireDefault(_liInlineVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LiInline = function (_Vue) {
    _inherits(LiInline, _Vue);

    function LiInline() {
        _classCallCheck(this, LiInline);

        return _possibleConstructorReturn(this, (LiInline.__proto__ || Object.getPrototypeOf(LiInline)).apply(this, arguments));
    }

    return LiInline;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: [String, Object], required: true }), __metadata("design:type", Object)], LiInline.prototype, "item", void 0);
exports.LiInline = LiInline = __decorate([_liInlineVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'LiInline'
})], LiInline);
exports.LiInline = LiInline;

/***/ }),
/* 165 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"list__item list__item--inline"},[(!_vm.item.item)?[_vm._v(_vm._s(_vm.item))]:[_c(_vm.item.type,_vm._b({tag:"component"},'component',_vm.item.item,false))]],2)}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _component = __webpack_require__(167);

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _component2.default;

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _templateVue = __webpack_require__(168);

var _templateVue2 = _interopRequireDefault(_templateVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LiItem = function (_Vue) {
    _inherits(LiItem, _Vue);

    function LiItem() {
        _classCallCheck(this, LiItem);

        return _possibleConstructorReturn(this, (LiItem.__proto__ || Object.getPrototypeOf(LiItem)).apply(this, arguments));
    }

    return LiItem;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: [String, Object], required: true }), __metadata("design:type", Object)], LiItem.prototype, "item", void 0);
LiItem = __decorate([_templateVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'LiItem'
})], LiItem);
exports.default = LiItem;

/***/ }),
/* 168 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"list__item"},[(_vm.item.item)?[_c(_vm.item.type,_vm._b({tag:"component"},'component',_vm.item.item,false))]:(_vm.item.type)?[_c(_vm.item.type,_vm._b({tag:"component"},'component',_vm.item,false))]:[_vm._v(_vm._s(_vm.item))]],2)}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _navAssist = __webpack_require__(170);

var _navAssist2 = _interopRequireDefault(_navAssist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _navAssist2.default;

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _navAssistVue = __webpack_require__(171);

var _navAssistVue2 = _interopRequireDefault(_navAssistVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavAssist = function (_Vue) {
    _inherits(NavAssist, _Vue);

    function NavAssist() {
        _classCallCheck(this, NavAssist);

        var _this = _possibleConstructorReturn(this, (NavAssist.__proto__ || Object.getPrototypeOf(NavAssist)).apply(this, arguments));

        _this.used = false;
        return _this;
    }

    _createClass(NavAssist, [{
        key: "toggleState",
        value: function toggleState() {
            this.used = true;
            this.$emit('toggle');
        }
    }, {
        key: "close",
        value: function close() {
            if (this.openState) {
                this.$emit('toggle');
            }
        }
    }, {
        key: "onOpenStateChange",
        value: function onOpenStateChange() {
            this.used = true;
            this.$emit('used');
        }
    }]);

    return NavAssist;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Boolean, default: false }), __metadata("design:type", Boolean)], NavAssist.prototype, "openState", void 0);
__decorate([(0, _vuePropertyDecorator.Watch)('openState'), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], NavAssist.prototype, "onOpenStateChange", null);
NavAssist = __decorate([_navAssistVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'nav-assist'
})], NavAssist);
exports.default = NavAssist;

/***/ }),
/* 171 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"nav-assist",class:{'nav-assist--close': this.openState, 'nav-assist--initial-state': !this.used},attrs:{"type":"button","aria-label":"menu","aria-expanded":this.openState.toString()},on:{"click":function($event){return _vm.toggleState()},"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }return _vm.close($event)}}},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24"}},[_c('rect',{staticClass:"nav-assist__line nav-assist__line-2",attrs:{"x":"2","y":"11","width":"20","height":"2"}}),_vm._v(" "),_c('rect',{staticClass:"nav-assist__line nav-assist__line-1",attrs:{"x":"2","y":"4.5","width":"20","height":"2"}}),_vm._v(" "),_c('rect',{staticClass:"nav-assist__line nav-assist__line-3",attrs:{"x":"2","y":"17.5","width":"20","height":"2"}}),_vm._v(" "),_c('rect',{staticClass:"nav-assist__line nav-assist__line-4",attrs:{"x":"-1.3","y":"11","transform":"matrix(0.7071 -0.7071 0.7071 0.7071 -4.9706 12)","width":"26.6","height":"2"}}),_vm._v(" "),_c('rect',{staticClass:"nav-assist__line nav-assist__line-5",attrs:{"x":"11","y":"-1.3","transform":"matrix(0.7071 -0.7071 0.7071 0.7071 -4.9706 12)","width":"2","height":"26.6"}})])])}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _responsivePicture = __webpack_require__(173);

var _responsivePicture2 = _interopRequireDefault(_responsivePicture);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _responsivePicture2.default;

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _viewport = __webpack_require__(1);

var _viewport2 = _interopRequireDefault(_viewport);

var _responsivePictureSource = __webpack_require__(174);

var _responsivePictureSource2 = _interopRequireDefault(_responsivePictureSource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResponsivePicture = function (_Vue) {
    _inherits(ResponsivePicture, _Vue);

    function ResponsivePicture() {
        _classCallCheck(this, ResponsivePicture);

        var _this = _possibleConstructorReturn(this, (ResponsivePicture.__proto__ || Object.getPrototypeOf(ResponsivePicture)).apply(this, arguments));

        _this.viewportUtil = new _viewport2.default();
        _this.ready = false;
        _this.inView = false;
        _this.loaded = false;
        return _this;
    }

    _createClass(ResponsivePicture, [{
        key: "calculateInView",
        value: function calculateInView() {
            if (this.inView) {
                return;
            }
            var windowBottom = this.viewportUtil.scrollY + this.viewportUtil.screenHeight;
            var pictureBounds = this.$el.getBoundingClientRect();
            var pictureTop = this.viewportUtil.scrollY + pictureBounds.top;
            var pictureBottom = pictureTop + pictureBounds.height;
            this.inView = this.viewportUtil.scrollY <= pictureBottom && windowBottom >= pictureTop;
        }
    }, {
        key: "mounted",
        value: function mounted() {
            var _this2 = this;

            window.requestAnimationFrame(function () {
                _this2.ready = true;
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
            var img = this.$el.querySelector('img');
            if (img) {
                img.addEventListener('load', function () {
                    _this2.loaded = true;
                });
            }
        }
    }, {
        key: "beforeDestroy",
        value: function beforeDestroy() {
            if (this.lazy) {
                this.viewportUtil.removeResizeHandler(this.calculateInView);
                this.viewportUtil.removeScrollHandler(this.calculateInView);
            }
        }
    }, {
        key: "lazyLoading",
        get: function get() {
            return this.lazy && !this.inView || !this.lazy && this.ready || !this.lazy;
        }
    }, {
        key: "classes",
        get: function get() {
            var _ref;

            return _ref = {}, _defineProperty(_ref, this.imgClass, true), _defineProperty(_ref, 'img--lazy', this.lazy), _defineProperty(_ref, 'img--loading', this.lazy && this.inView && !this.loaded), _defineProperty(_ref, 'img--loaded', this.loaded), _ref;
        }
    }]);

    return ResponsivePicture;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: [String, Object], required: false }), __metadata("design:type", Object)], ResponsivePicture.prototype, "desktopHdWidth", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: [String, Object], required: false }), __metadata("design:type", Object)], ResponsivePicture.prototype, "desktopWidth", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: [String, Object], required: false }), __metadata("design:type", Object)], ResponsivePicture.prototype, "tabletWidth", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: [String, Object], required: false }), __metadata("design:type", Object)], ResponsivePicture.prototype, "mobileXlWidth", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: [String, Object], required: false }), __metadata("design:type", Object)], ResponsivePicture.prototype, "mobileLWidth", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: [String, Object], required: true }), __metadata("design:type", Object)], ResponsivePicture.prototype, "mobileWidth", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Boolean, required: false, default: true }), __metadata("design:type", Boolean)], ResponsivePicture.prototype, "lazy", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: false, default: '' }), __metadata("design:type", String)], ResponsivePicture.prototype, "description", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: false, default: '' }), __metadata("design:type", String)], ResponsivePicture.prototype, "imgClass", void 0);
ResponsivePicture = __decorate([(0, _vuePropertyDecorator.Component)({
    name: 'responsive-picture',
    template: __webpack_require__(175),
    components: {
        ResponsivePictureSource: _responsivePictureSource2.default
    }
})], ResponsivePicture);
exports.default = ResponsivePicture;

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ResponsivePictureSource = function (_Vue) {
    _inherits(ResponsivePictureSource, _Vue);

    function ResponsivePictureSource() {
        _classCallCheck(this, ResponsivePictureSource);

        return _possibleConstructorReturn(this, (ResponsivePictureSource.__proto__ || Object.getPrototypeOf(ResponsivePictureSource)).apply(this, arguments));
    }

    _createClass(ResponsivePictureSource, [{
        key: "srcset",
        get: function get() {
            if (typeof this.image === 'string') {
                return this.image;
            }
            return this.image.retinaUrl ? this.image.url + ", " + this.image.retinaUrl + " 2x" : this.image.url;
        }
    }]);

    return ResponsivePictureSource;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: [String, Object], required: true }), __metadata("design:type", Object)], ResponsivePictureSource.prototype, "image", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", String)], ResponsivePictureSource.prototype, "media", void 0);
ResponsivePictureSource = __decorate([(0, _vuePropertyDecorator.Component)({
    name: 'responsive-picture-source',
    template: '<source :media="media" :srcset="srcset">'
})], ResponsivePictureSource);
exports.default = ResponsivePictureSource;

/***/ }),
/* 175 */
/***/ (function(module, exports) {

module.exports = "<picture>\n    <template>\n        <responsive-picture-source v-if=\"desktopHdWidth\" media=\"(min-width: 1201px)\" :image=\"lazyLoading ? '' : desktopHdWidth\" />\n        <responsive-picture-source v-if=\"desktopWidth\" media=\"(min-width: 1025px)\" :image=\"lazyLoading ? '' : desktopWidth\" />\n        <responsive-picture-source v-if=\"tabletWidth\" media=\"(min-width: 768px)\" :image=\"lazyLoading ? '' : tabletWidth\" />\n        <responsive-picture-source v-if=\"mobileXlWidth\" media=\"(min-width: 569px)\" :image=\"lazyLoading ? '' : mobileXlWidth\" />\n        <responsive-picture-source v-if=\"mobileLWidth\" media=\"(min-width: 481px)\" :image=\" lazyLoading ? '' : mobileLWidth\" />\n        <responsive-picture-source media=\"(max-width: 480px)\" :image=\"mobileWidth\" />\n    </template>\n\n    <img :src=\"lazyLoading ? '' : mobileWidth.url ? mobileWidth.url : mobileWidth\" :alt=\"description\" class=\"img--responsive\" :class=\"classes\"/>\n</picture>\n";

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _component = __webpack_require__(177);

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _component2.default;

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _templateVue = __webpack_require__(178);

var _templateVue2 = _interopRequireDefault(_templateVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SpanLabel = function (_Vue) {
    _inherits(SpanLabel, _Vue);

    function SpanLabel() {
        _classCallCheck(this, SpanLabel);

        return _possibleConstructorReturn(this, (SpanLabel.__proto__ || Object.getPrototypeOf(SpanLabel)).apply(this, arguments));
    }

    return SpanLabel;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", String)], SpanLabel.prototype, "item", void 0);
SpanLabel = __decorate([_templateVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'SpanLabel'
})], SpanLabel);
exports.default = SpanLabel;

/***/ }),
/* 178 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"label"},[_vm._v(_vm._s(_vm.item))])}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tabbableDefinitionList = __webpack_require__(180);

var _tabbableDefinitionList2 = _interopRequireDefault(_tabbableDefinitionList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _tabbableDefinitionList2.default;

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _gsap = __webpack_require__(4);

var _viewport = __webpack_require__(1);

var _viewport2 = _interopRequireDefault(_viewport);

var _defaults = __webpack_require__(3);

var _defaults2 = _interopRequireDefault(_defaults);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.default = {
    name: 'tabbable-definition-list',
    template: __webpack_require__(181),
    data: function data() {
        return {
            viewport: new _viewport2.default(),
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

            var duration = 0.4;
            var direction = this.getDirection(oldValue, newValue);
            var height = this.heights[newValue];
            var delay = this.viewport.isMobile ? duration * 0.6 : 0;
            var descriptionHeight = (this.viewport.isMobile ? height.dt : 0) + height.dd + _defaults2.default.buildingUnit * 2.5;
            var elementsToHide = !this.viewport.isMobile ? this.$refs.descriptions[oldValue] : [this.$refs.terms[oldValue], this.$refs.descriptions[oldValue]];

            _gsap.TweenLite.to(elementsToHide, duration, { height: 0, y: 20 * direction, ease: _gsap.Power3.easeOut });
            _gsap.TweenLite.fromTo(elementsToHide, duration * 0.3, { autoAlpha: 1 }, { autoAlpha: 0, ease: _gsap.Power0.easeNone });

            _gsap.TweenLite.fromTo(this.$refs.descriptions[newValue], duration, { height: 0, y: -20 * direction }, { height: descriptionHeight, y: 0, ease: _gsap.Power3.easeOut, delay: delay });
            _gsap.TweenLite.fromTo(this.$refs.descriptions[newValue], duration * 0.3, { autoAlpha: 0 }, { autoAlpha: 1, ease: _gsap.Power0.easeNone, delay: delay });
            if (this.viewport.isMobile) {
                _gsap.TweenLite.fromTo(this.$refs.terms[newValue], duration, { height: 0, y: -20 * direction }, { height: height.dt, y: 0, ease: _gsap.Power3.easeOut, delay: delay });
                _gsap.TweenLite.fromTo(this.$refs.terms[newValue], duration * 0.3, { autoAlpha: 0 }, { autoAlpha: 1, ease: _gsap.Power0.easeNone, delay: delay });
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
            var tweens = _gsap.TweenLite.getTweensOf(elements);

            if (tweens) {
                for (var i = 0, leni = tweens.length; i < leni; i += 1) {
                    tweens[i].seek(tweens[i].duration());
                }
                _gsap.TweenLite.killTweensOf(tweens);
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

            this.$refs.descriptions.forEach(function (element) {
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

            var currentElementHeight = currentElement.getBoundingClientRect().height;
            var isMobile = this.viewport.isMobile;


            this.$el.style.height = 'auto';
            this.calculateDimensions();

            var maxElementHeight = isMobile ? this.maxHeight : this.$el.getBoundingClientRect().height + this.maxHeight - currentElementHeight;
            var height = this.heights[this.activeIndex];

            this.$refs.descriptions.forEach(function (element, index) {
                element.style.top = isMobile ? _this2.heights[index].dt + _defaults2.default.buildingUnit * 2.5 + 'px' : 0;
            });

            if (isMobile) {
                currentElement.style.height = height.dt + height.dd + _defaults2.default.buildingUnit * 2.5 + 'px';
            } else {
                currentElement.style.height = height.dd + _defaults2.default.buildingUnit * 2.5 + 'px';
            }
            this.$el.style.height = maxElementHeight + _defaults2.default.buildingUnit * 0.5 + 'px';
        }
    },
    computed: {
        maxHeight: function maxHeight() {
            if (!this.heights.length) {
                return 0;
            }
            if (this.viewport.isMobile) {
                return Math.max.apply(Math, _toConsumableArray(this.heights.map(function (i) {
                    return i.dt + _defaults2.default.buildingUnit * 2.5 + i.dd;
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
};

/***/ }),
/* 181 */
/***/ (function(module, exports) {

module.exports = "<dl class=\"tabbable-dl\">\n    <template v-for=\"(item, index) in items\">\n        <dt class=\"tabbable-dl__term tabbable-dl__term--vue\" ref=\"terms\">\n            <a class=\"tabbable-dl__link\" @click.prevent=\"changeIndex(index)\" @keyup.enter=\"changeIndex(index)\" role=\"button\" tabindex=\"0\">\n                <h3 class=\"tabbable-dl__title\">\n                    <icon class=\"tabbable-dl__icon\" icon-name=\"angle-right\"></icon>\n                    {{ item.title }}\n                </h3>\n            </a>\n        </dt>\n        <dd class=\"tabbable-dl__desc tabbable-dl__desc--vue\" ref=\"descriptions\">{{ item.description }}</dd>\n    </template>\n</dl>\n";

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tooltip = __webpack_require__(183);

var _tooltip2 = _interopRequireDefault(_tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _tooltip2.default;

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _tooltipVue = __webpack_require__(184);

var _tooltipVue2 = _interopRequireDefault(_tooltipVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Tooltip = function (_Vue) {
    _inherits(Tooltip, _Vue);

    function Tooltip() {
        _classCallCheck(this, Tooltip);

        return _possibleConstructorReturn(this, (Tooltip.__proto__ || Object.getPrototypeOf(Tooltip)).apply(this, arguments));
    }

    _createClass(Tooltip, [{
        key: "classObject",
        value: function classObject() {
            var classes = {};
            if (this.block) {
                classes[this.block + "__tooltip"] = true;
            }
            return classes;
        }
    }]);

    return Tooltip;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: false, default: '' }), __metadata("design:type", String)], Tooltip.prototype, "block", void 0);
Tooltip = __decorate([_tooltipVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'Tooltip'
})], Tooltip);
exports.default = Tooltip;

/***/ }),
/* 184 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tooltip",class:_vm.classObject()},[_vm._t("default")],2)}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _youtubeLink = __webpack_require__(186);

var _youtubeLink2 = _interopRequireDefault(_youtubeLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _youtubeLink2.default;

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _BaseLink2 = __webpack_require__(6);

var _BaseLink3 = _interopRequireDefault(_BaseLink2);

var _youtube = __webpack_require__(16);

var _youtube2 = _interopRequireDefault(_youtube);

var _youtubeLinkVue = __webpack_require__(187);

var _youtubeLinkVue2 = _interopRequireDefault(_youtubeLinkVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var YoutubeLink = function (_BaseLink) {
    _inherits(YoutubeLink, _BaseLink);

    function YoutubeLink() {
        _classCallCheck(this, YoutubeLink);

        var _this = _possibleConstructorReturn(this, (YoutubeLink.__proto__ || Object.getPrototypeOf(YoutubeLink)).apply(this, arguments));

        _this.videoVisible = false;
        return _this;
    }

    _createClass(YoutubeLink, [{
        key: "toggleVideoVisible",
        value: function toggleVideoVisible() {
            this.videoVisible = !this.videoVisible;
        }
    }, {
        key: "triggerClick",
        value: function triggerClick() {
            this.toggleVideoVisible();
        }
    }, {
        key: "youtubeUrl",
        get: function get() {
            return "" + _youtube2.default.videoUrl + this.youtubeId;
        }
    }]);

    return YoutubeLink;
}(_BaseLink3.default);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, default: 'play-video' }), __metadata("design:type", Object)], YoutubeLink.prototype, "icon", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], YoutubeLink.prototype, "youtubeId", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], YoutubeLink.prototype, "label", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object, required: false }), __metadata("design:type", Object)], YoutubeLink.prototype, "clickEvent", void 0);
YoutubeLink = __decorate([_youtubeLinkVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'YoutubeLink'
})], YoutubeLink);
exports.default = YoutubeLink;

/***/ }),
/* 187 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"link link--icon link--large",attrs:{"href":_vm.youtubeUrl,"target":"_blank"},on:{"click":function($event){$event.preventDefault();return _vm.triggerClick($event)}}},[_c('icon',{attrs:{"icon-name":_vm.icon}}),_vm._v(" "),_c('span',{staticClass:"link__underline"},[_vm._v("\n        "+_vm._s(_vm.label)+"\n    ")]),_vm._v(" "),_c('portal',{attrs:{"to":"modals"}},[(_vm.videoVisible)?_c('modal',{staticClass:"modal--video",on:{"close":_vm.toggleVideoVisible}},[_c('youtube-video',{attrs:{"video-id":_vm.youtubeId}})],1):_vm._e()],1)],1)}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _youtubeVideo = __webpack_require__(189);

var _youtubeVideo2 = _interopRequireDefault(_youtubeVideo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _youtubeVideo2.default;

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _youtube = __webpack_require__(16);

var _youtube2 = _interopRequireDefault(_youtube);

var _youtubeVideoVue = __webpack_require__(190);

var _youtubeVideoVue2 = _interopRequireDefault(_youtubeVideoVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var YoutubeVideo = function (_Vue) {
    _inherits(YoutubeVideo, _Vue);

    function YoutubeVideo() {
        _classCallCheck(this, YoutubeVideo);

        var _this = _possibleConstructorReturn(this, (YoutubeVideo.__proto__ || Object.getPrototypeOf(YoutubeVideo)).apply(this, arguments));

        _this.loadVideo = false;
        _this.videoQuery = 'autoplay=1';
        return _this;
    }

    _createClass(YoutubeVideo, [{
        key: "mounted",
        value: function mounted() {
            this.loadVideo = true;
        }
    }, {
        key: "videoUrl",
        get: function get() {
            return "" + _youtube2.default.embedUrl + this.videoId + "?" + this.videoQuery;
        }
    }]);

    return YoutubeVideo;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", String)], YoutubeVideo.prototype, "videoId", void 0);
YoutubeVideo = __decorate([_youtubeVideoVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'youtube-video'
})], YoutubeVideo);
exports.default = YoutubeVideo;

/***/ }),
/* 190 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"youtube-video"},[(_vm.loadVideo)?_c('iframe',{staticClass:"youtube-video__frame",attrs:{"src":_vm.videoUrl,"frameborder":"0","allowfullscreen":"allowfullscreen"}}):_vm._e()])}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _autoComplete = __webpack_require__(192);

Object.defineProperty(exports, 'AutoComplete', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_autoComplete).default;
  }
});

var _articleAuthor = __webpack_require__(195);

Object.defineProperty(exports, 'ArticleAuthor', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_articleAuthor).default;
  }
});

var _articleCtas = __webpack_require__(199);

Object.defineProperty(exports, 'ArticleCtas', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_articleCtas).default;
  }
});

var _articleDescriptionList = __webpack_require__(202);

Object.defineProperty(exports, 'ArticleDescriptionList', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_articleDescriptionList).default;
  }
});

var _articleImage = __webpack_require__(205);

Object.defineProperty(exports, 'ArticleImage', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_articleImage).default;
  }
});

var _articleIntro = __webpack_require__(208);

Object.defineProperty(exports, 'ArticleIntro', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_articleIntro).default;
  }
});

var _articleTable = __webpack_require__(211);

Object.defineProperty(exports, 'ArticleTable', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_articleTable).default;
  }
});

var _articleText = __webpack_require__(214);

Object.defineProperty(exports, 'ArticleText', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_articleText).default;
  }
});

var _articleVideo = __webpack_require__(217);

Object.defineProperty(exports, 'ArticleVideo', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_articleVideo).default;
  }
});

var _blockIcon = __webpack_require__(220);

Object.defineProperty(exports, 'BlockIcon', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_blockIcon).default;
  }
});

var _brand = __webpack_require__(223);

Object.defineProperty(exports, 'Brand', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_brand).default;
  }
});

var _brandCard = __webpack_require__(226);

Object.defineProperty(exports, 'BrandCard', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_brandCard).default;
  }
});

var _businessCard = __webpack_require__(229);

Object.defineProperty(exports, 'BusinessCard', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_businessCard).default;
  }
});

var _LEGACY__card = __webpack_require__(232);

Object.defineProperty(exports, 'Card', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_LEGACY__card).default;
  }
});

var _cardArticle = __webpack_require__(235);

Object.defineProperty(exports, 'CardArticle', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_cardArticle).default;
  }
});

var _cardBase = __webpack_require__(238);

Object.defineProperty(exports, 'CardBase', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_cardBase).default;
  }
});

var _cardDownload = __webpack_require__(239);

Object.defineProperty(exports, 'CardDownload', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_cardDownload).default;
  }
});

var _cardProduct = __webpack_require__(243);

Object.defineProperty(exports, 'CardProduct', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_cardProduct).default;
  }
});

var _color = __webpack_require__(246);

Object.defineProperty(exports, 'Color', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_color).default;
  }
});

var _contentBlock = __webpack_require__(250);

Object.defineProperty(exports, 'ContentBlock', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_contentBlock).default;
  }
});

var _contentToggle = __webpack_require__(253);

Object.defineProperty(exports, 'ContentToggle', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_contentToggle).default;
  }
});

var _ctaBlock = __webpack_require__(256);

Object.defineProperty(exports, 'CtaBlock', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ctaBlock).default;
  }
});

var _currency = __webpack_require__(259);

Object.defineProperty(exports, 'Currency', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_currency).default;
  }
});

var _fauxVerticalScroll = __webpack_require__(262);

Object.defineProperty(exports, 'FauxVerticalScroll', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_fauxVerticalScroll).default;
  }
});

var _filterCategory = __webpack_require__(268);

Object.defineProperty(exports, 'FilterCategory', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_filterCategory).default;
  }
});

var _flyout = __webpack_require__(271);

Object.defineProperty(exports, 'Flyout', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_flyout).default;
  }
});

var _flyoutSection = __webpack_require__(274);

Object.defineProperty(exports, 'FlyoutSection', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_flyoutSection).default;
  }
});

var _footerBlock = __webpack_require__(277);

Object.defineProperty(exports, 'FooterBlock', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_footerBlock).default;
  }
});

var _footerNavigationCategory = __webpack_require__(280);

Object.defineProperty(exports, 'FooterNavigationCategory', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_footerNavigationCategory).default;
  }
});

var _headerBlock = __webpack_require__(283);

Object.defineProperty(exports, 'HeaderBlock', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_headerBlock).default;
  }
});

var _heroHeading = __webpack_require__(286);

Object.defineProperty(exports, 'HeroHeading', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_heroHeading).default;
  }
});

var _iconButton = __webpack_require__(289);

Object.defineProperty(exports, 'IconButton', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_iconButton).default;
  }
});

var _listSection = __webpack_require__(292);

Object.defineProperty(exports, 'ListSection', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_listSection).default;
  }
});

var _listUnordered = __webpack_require__(301);

Object.defineProperty(exports, 'ListUnordered', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_listUnordered).default;
  }
});

var _listUnorderedLimit = __webpack_require__(304);

Object.defineProperty(exports, 'ListUnorderedLimit', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_listUnorderedLimit).default;
  }
});

var _mainNavigation = __webpack_require__(307);

Object.defineProperty(exports, 'MainNavigation', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_mainNavigation).default;
  }
});

var _mainNavigationItem = __webpack_require__(310);

Object.defineProperty(exports, 'MainNavigationItem', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_mainNavigationItem).default;
  }
});

var _modal = __webpack_require__(313);

Object.defineProperty(exports, 'Modal', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_modal).default;
  }
});

var _modalButton = __webpack_require__(316);

Object.defineProperty(exports, 'ModalButton', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_modalButton).default;
  }
});

var _modalWizard = __webpack_require__(319);

Object.defineProperty(exports, 'ModalWizard', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_modalWizard).default;
  }
});

var _pager = __webpack_require__(322);

Object.defineProperty(exports, 'Pager', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_pager).default;
  }
});

var _product = __webpack_require__(325);

Object.defineProperty(exports, 'Product', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_product).default;
  }
});

var _searchBar = __webpack_require__(328);

Object.defineProperty(exports, 'SearchBar', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_searchBar).default;
  }
});

var _searchBarPage = __webpack_require__(331);

Object.defineProperty(exports, 'SearchBarPage', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_searchBarPage).default;
  }
});

var _socialNav = __webpack_require__(334);

Object.defineProperty(exports, 'SocialNav', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_socialNav).default;
  }
});

var _searchResult = __webpack_require__(337);

Object.defineProperty(exports, 'SearchResult', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_searchResult).default;
  }
});

var _socialSharing = __webpack_require__(341);

Object.defineProperty(exports, 'SocialSharing', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_socialSharing).default;
  }
});

var _subnavigationItem = __webpack_require__(345);

Object.defineProperty(exports, 'SubNavigationItem', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_subnavigationItem).default;
  }
});

var _sysNav = __webpack_require__(348);

Object.defineProperty(exports, 'SysNav', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_sysNav).default;
  }
});

var _tab = __webpack_require__(351);

Object.defineProperty(exports, 'Tab', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_tab).default;
  }
});

var _tabs = __webpack_require__(354);

Object.defineProperty(exports, 'Tabs', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_tabs).default;
  }
});

var _tag = __webpack_require__(357);

Object.defineProperty(exports, 'Tag', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_tag).default;
  }
});

var _tagList = __webpack_require__(360);

Object.defineProperty(exports, 'TagList', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_tagList).default;
  }
});

var _tooltipToggle = __webpack_require__(363);

Object.defineProperty(exports, 'TooltipToggle', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_tooltipToggle).default;
  }
});

var _tabTable = __webpack_require__(366);

Object.defineProperty(exports, 'TabTable', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_tabTable).default;
  }
});

var _tabTableRow = __webpack_require__(369);

Object.defineProperty(exports, 'TabTableRow', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_tabTableRow).default;
  }
});

var _wizardStepDownloadList = __webpack_require__(372);

Object.defineProperty(exports, 'WizardStepDownloadList', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_wizardStepDownloadList).default;
  }
});

var _wizardStepConfirmation = __webpack_require__(375);

Object.defineProperty(exports, 'WizardStepConfirmation', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_wizardStepConfirmation).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _autoComplete = __webpack_require__(193);

var _autoComplete2 = _interopRequireDefault(_autoComplete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _autoComplete2.default;

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _viewport = __webpack_require__(1);

var _viewport2 = _interopRequireDefault(_viewport);

var _autoCompleteVue = __webpack_require__(194);

var _autoCompleteVue2 = _interopRequireDefault(_autoCompleteVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AutoComplete = function (_Vue) {
    _inherits(AutoComplete, _Vue);

    function AutoComplete() {
        _classCallCheck(this, AutoComplete);

        var _this = _possibleConstructorReturn(this, (AutoComplete.__proto__ || Object.getPrototypeOf(AutoComplete)).apply(this, arguments));

        _this.input = '';
        _this.selectedItem = null;
        _this.selectedIndex = 0;
        _this.reversed = false;
        _this.forceOpen = false;
        _this.viewportUtil = new _viewport2.default();
        return _this;
    }

    _createClass(AutoComplete, [{
        key: "init",
        value: function init() {
            this.forceOpen = this.defaultOpen;
            this.viewportUtil.addScrollHandler(this.calculateDirection);
            this.viewportUtil.addResizeHandler(this.calculateDirection);
            if (this.value && this.value.title) {
                this.input = this.value.title;
            }
            _vuePropertyDecorator.Vue.nextTick(this.calculateDirection);
        }
    }, {
        key: "calculateDirection",
        value: function calculateDirection() {
            if (!this.$refs.autoComplete) {
                return;
            }
            var windowTop = this.viewportUtil.scrollY;
            var windowBottom = windowTop + this.viewportUtil.screenHeight * (2 / 3);

            var inputBounds = this.$refs.autoComplete.getBoundingClientRect();
            var inputTop = this.viewportUtil.scrollY + inputBounds.top;
            var inputBottom = inputTop + inputBounds.height;
            this.reversed = windowBottom < inputBottom;
        }
    }, {
        key: "highlightString",
        value: function highlightString(data) {
            var stringToReplace = new RegExp(this.input, 'i');
            var matches = data.match(stringToReplace);
            if (!matches) {
                return data;
            }
            return data.replace(stringToReplace, "<span class=\"auto-complete__value\">" + matches[0] + "</span>");
        }
    }, {
        key: "resetInput",
        value: function resetInput() {
            this.selectedIndex = 0;
            if (this.input === '') {
                this.$emit('close');
            }
            this.input = '';
        }
    }, {
        key: "resetIndex",
        value: function resetIndex() {
            this.selectedIndex = 0;
        }
    }, {
        key: "focus",
        value: function focus() {
            if (this.hasItems) {
                this.$refs.autoComplete.focus();
            }
        }
    }, {
        key: "selectItem",
        value: function selectItem(item) {
            this.input = item.title || '';
            this.selectedItem = item;
            this.forceOpen = false;
            this.resetIndex();
            this.focus();
            this.$emit('input', item);
        }
    }, {
        key: "selectItemByInput",
        value: function selectItemByInput() {
            var matcher = new RegExp("^" + this.input + "$", 'i');
            var item = void 0;
            if (this.input.length >= this.minChar) {
                item = this.items.find(function (i) {
                    return matcher.test(i.title);
                });
            } else if (this.input.length === this.minChar - 1) {
                item = this.items.find(function (i) {
                    return matcher.test(i.value);
                });
            }
            if (item) {
                this.selectItem(item);
            }
        }
    }, {
        key: "selectCurrent",
        value: function selectCurrent() {
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
        }
    }, {
        key: "selectNext",
        value: function selectNext() {
            if (!this.hasInput) {
                return;
            }
            this.selectedIndex = this.selectedIndex + 1;
        }
    }, {
        key: "selectPrevious",
        value: function selectPrevious() {
            if (!this.hasInput) {
                return;
            }
            this.selectedIndex = this.selectedIndex - 1;
        }
    }, {
        key: "closeList",
        value: function closeList() {
            this.selectedIndex = 0;
            _vuePropertyDecorator.Vue.nextTick(this.focus);
        }
    }, {
        key: "onValue",
        value: function onValue(newValue) {
            if (newValue !== null) {
                this.input = newValue.title;
            }
            this.selectedItem = newValue;
        }
    }, {
        key: "onInput",
        value: function onInput(newValue) {
            if (this.selectedItem !== null && newValue !== this.selectedItem.title) {
                this.selectedItem = null;
            }
            this.resetIndex();
        }
    }, {
        key: "onSelectedIndex",
        value: function onSelectedIndex() {
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
    }, {
        key: "beforeMount",
        value: function beforeMount() {
            this.init();
        }
    }, {
        key: "items",
        get: function get() {
            var _this2 = this;

            var items = [];
            if (!this.datasource) {
                return items;
            }
            Object.keys(this.datasource).forEach(function (key) {
                items.push({
                    title: _this2.datasource[key],
                    value: key
                });
            });
            return items;
        }
    }, {
        key: "classObject",
        get: function get() {
            return {
                required: this.required,
                'auto-complete--reversed': this.reversed
            };
        }
    }, {
        key: "listId",
        get: function get() {
            return this.inputId + "__dropdown";
        }
    }, {
        key: "hasInput",
        get: function get() {
            return this.input.length > 0;
        }
    }, {
        key: "matchTitle",
        get: function get() {
            return this.hasInput && this.input.length >= this.minChar;
        }
    }, {
        key: "matchValue",
        get: function get() {
            return this.hasInput && this.input.length === this.minChar - 1;
        }
    }, {
        key: "hasItems",
        get: function get() {
            return Array.isArray(this.items) && this.items.length > 0;
        }
    }, {
        key: "isValid",
        get: function get() {
            return !(this.selectedItem === null || this.input !== this.selectedItem.title);
        }
    }, {
        key: "isOpen",
        get: function get() {
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
        }
    }, {
        key: "suggestedItems",
        get: function get() {
            var _this3 = this;

            var filterMatch = new RegExp(this.input, 'i');
            var filteredItems = [];
            if (this.storedItems) {
                filteredItems = this.items.filter(function (item) {
                    return !_this3.storedItems.find(function (i) {
                        return i.value === item.value;
                    });
                });
            }
            var allSuggestedTitles = filteredItems.filter(function (item) {
                return filterMatch.test(item.title);
            });
            var allSuggestedValues = filteredItems.filter(function (item) {
                return filterMatch.test(item.value);
            });
            if (this.matchValue) {
                return allSuggestedValues;
            }
            if (this.matchTitle) {
                return allSuggestedTitles;
            }
            return [];
        }
    }]);

    return AutoComplete;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, default: function _default() {
        return "autocomplete" + Math.floor(Math.random() * 10000);
    } }), __metadata("design:type", String)], AutoComplete.prototype, "inputId", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object, default: null }), __metadata("design:type", Object)], AutoComplete.prototype, "value", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Boolean, default: null }), __metadata("design:type", Boolean)], AutoComplete.prototype, "defaultOpen", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Number, default: 3 }), __metadata("design:type", Number)], AutoComplete.prototype, "minChar", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Array, default: function _default() {
        return [];
    } }), __metadata("design:type", Array)], AutoComplete.prototype, "storedItems", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, default: '' }), __metadata("design:type", String)], AutoComplete.prototype, "storedLabel", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Boolean, default: false }), __metadata("design:type", Boolean)], AutoComplete.prototype, "required", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, default: null }), __metadata("design:type", Object)], AutoComplete.prototype, "label", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, default: null }), __metadata("design:type", Object)], AutoComplete.prototype, "placeholder", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, default: null }), __metadata("design:type", Object)], AutoComplete.prototype, "highlightedLabel", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, default: '' }), __metadata("design:type", Object)], AutoComplete.prototype, "suggestionsLabel", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ required: true }), __metadata("design:type", Object)], AutoComplete.prototype, "datasource", void 0);
__decorate([(0, _vuePropertyDecorator.Watch)('isOpen'), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], AutoComplete.prototype, "calculateDirection", null);
__decorate([(0, _vuePropertyDecorator.Watch)('value'), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], AutoComplete.prototype, "onValue", null);
__decorate([(0, _vuePropertyDecorator.Watch)('input'), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], AutoComplete.prototype, "onInput", null);
__decorate([(0, _vuePropertyDecorator.Watch)('selectedIndex'), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], AutoComplete.prototype, "onSelectedIndex", null);
AutoComplete = __decorate([_autoCompleteVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'auto-complete'
})], AutoComplete);
exports.default = AutoComplete;

/***/ }),
/* 194 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.hasItems)?_c('div',{staticClass:"auto-complete",class:_vm.classObject,attrs:{"role":"combobox","aria-haspopup":"listbox","aria-owns":_vm.listId,"aria-expanded":_vm.isOpen},on:{"keydown":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"up",38,$event.key,["Up","ArrowUp"])){ return null; }$event.preventDefault();return _vm.selectPrevious($event)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"tab",9,$event.key,"Tab")){ return null; }if(!$event.shiftKey){ return null; }$event.preventDefault();return _vm.selectPrevious($event)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"])){ return null; }$event.preventDefault();return _vm.selectCurrent($event)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"tab",9,$event.key,"Tab")){ return null; }if($event.ctrlKey||$event.shiftKey||$event.altKey||$event.metaKey){ return null; }$event.preventDefault();return _vm.selectCurrent($event)}]}},[_c('input',{directives:[{name:"model",rawName:"v-model.trim",value:(_vm.input),expression:"input",modifiers:{"trim":true}}],ref:"autoComplete",staticClass:"auto-complete__input",attrs:{"type":"text","autofocus":"true","autocomplete":"off","aria-autocomplete":"list","id":_vm.inputId,"aria-controls":_vm.listId,"placeholder":_vm.placeholder,"required":_vm.required},domProps:{"value":(_vm.input)},on:{"input":[function($event){if($event.target.composing){ return; }_vm.input=$event.target.value.trim()},function($event){_vm.input = $event.target.value}],"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }return _vm.resetInput($event)},"keydown":[function($event){_vm.forceOpen = true},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }$event.preventDefault();return _vm.selectItemByInput($event)}],"blur":function($event){return _vm.$forceUpdate()}}}),_vm._v(" "),(_vm.isOpen)?_c('div',{staticClass:"auto-complete__dropdown",attrs:{"id":_vm.listId,"role":"listbox"},on:{"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }return _vm.closeList($event)},"keydown":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"backspace",undefined,$event.key,undefined)){ return null; }$event.preventDefault();},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"])){ return null; }$event.preventDefault();return _vm.selectNext($event)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"tab",9,$event.key,"Tab")){ return null; }if($event.ctrlKey||$event.shiftKey||$event.altKey||$event.metaKey){ return null; }$event.preventDefault();return _vm.selectNext($event)}]}},[(_vm.storedItems && _vm.storedItems.length)?[_c('h4',{staticClass:"auto-complete__label",attrs:{"id":"storedLabel"}},[_vm._v("\n                "+_vm._s(_vm.storedLabel)+"\n            ")]),_vm._v(" "),_c('ul',{staticClass:"auto-complete__list",attrs:{"aria-labelledby":"storedLabel"}},_vm._l((_vm.storedItems),function(item){return _c('li',{staticClass:"auto-complete__list-item",attrs:{"role":"option","tabindex":"0"},on:{"click":function($event){return _vm.selectItem(item)},"keyup":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }$event.preventDefault();return _vm.selectItem(item)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }return _vm.closeList($event)}]}},[_vm._v("\n                    "+_vm._s(item.title)+"\n                ")])}),0)]:_vm._e(),_vm._v(" "),(_vm.suggestedItems && _vm.suggestedItems.length)?[_c('h4',{staticClass:"auto-complete__label",attrs:{"id":"suggestedLabel"}},[_vm._v("\n                "+_vm._s(_vm.suggestionsLabel)+"\n            ")]),_vm._v(" "),_c('ul',{staticClass:"auto-complete__list",attrs:{"aria-labelledby":"suggestedLabel"}},[(_vm.matchValue)?_vm._l((_vm.suggestedItems),function(item){return _c('li',{staticClass:"auto-complete__list-item",attrs:{"role":"option","tabindex":"0"},on:{"click":function($event){return _vm.selectItem(item)},"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }$event.preventDefault();return _vm.selectItem(item)}}},[_vm._v("\n                        "+_vm._s(item.title)+"\n                    ")])}):_vm._l((_vm.suggestedItems),function(item){return _c('li',{staticClass:"auto-complete__list-item",attrs:{"role":"option","tabindex":"0"},domProps:{"innerHTML":_vm._s(_vm.highlightString(item.title))},on:{"click":function($event){return _vm.selectItem(item)},"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }$event.preventDefault();return _vm.selectItem(item)}}})})],2)]:_vm._e()],2):_vm._e()]):_vm._e()}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _articleAuthor = __webpack_require__(196);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _articleAuthor.ArticleAuthor;
  }
});

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ArticleAuthor = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _articleAuthorVue = __webpack_require__(197);

var _articleAuthorVue2 = _interopRequireDefault(_articleAuthorVue);

var _format = __webpack_require__(198);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArticleAuthor = function (_Vue) {
    _inherits(ArticleAuthor, _Vue);

    function ArticleAuthor() {
        _classCallCheck(this, ArticleAuthor);

        return _possibleConstructorReturn(this, (ArticleAuthor.__proto__ || Object.getPrototypeOf(ArticleAuthor)).apply(this, arguments));
    }

    _createClass(ArticleAuthor, [{
        key: "formatedDate",
        get: function get() {
            return _format.Format.ISODate(this.publishedDate);
        }
    }]);

    return ArticleAuthor;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], ArticleAuthor.prototype, "name", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object, required: false }), __metadata("design:type", Object)], ArticleAuthor.prototype, "image", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], ArticleAuthor.prototype, "publishedDate", void 0);
exports.ArticleAuthor = ArticleAuthor = __decorate([_articleAuthorVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'ArticleAuthor'
})], ArticleAuthor);
exports.ArticleAuthor = ArticleAuthor;

/***/ }),
/* 197 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-author"},[(_vm.image)?_c('c-image',_vm._b({staticClass:"article-author__image"},'c-image',_vm.image,false)):_vm._e(),_vm._v(" "),_c('div',{staticClass:"article-author__meta"},[_c('span',{staticClass:"article-author__name"},[_vm._v(_vm._s(_vm.name))]),_vm._v(" "),_c('span',{staticClass:"article-author__published-date"},[_vm._v(_vm._s(_vm.formatedDate))])])],1)}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Format = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _defaults = __webpack_require__(3);

var _defaults2 = _interopRequireDefault(_defaults);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Format = exports.Format = function () {
    function Format() {
        _classCallCheck(this, Format);
    }

    _createClass(Format, null, [{
        key: 'ISODate',
        value: function ISODate(date) {
            var locale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.locale;
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.options;

            var dateObj = new Date(date);
            return new Intl.DateTimeFormat(locale, options).format(dateObj);
        }
    }]);

    return Format;
}();

Format.options = {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
};
Format.locale = _defaults2.default.language + '-' + _defaults2.default.country.code;

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _articleCtas = __webpack_require__(200);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _articleCtas.ArticleCtas;
  }
});

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ArticleCtas = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _articleCtasVue = __webpack_require__(201);

var _articleCtasVue2 = _interopRequireDefault(_articleCtasVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArticleCtas = function (_Vue) {
    _inherits(ArticleCtas, _Vue);

    function ArticleCtas() {
        _classCallCheck(this, ArticleCtas);

        return _possibleConstructorReturn(this, (ArticleCtas.__proto__ || Object.getPrototypeOf(ArticleCtas)).apply(this, arguments));
    }

    return ArticleCtas;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object, required: false }), __metadata("design:type", Object)], ArticleCtas.prototype, "ctas", void 0);
exports.ArticleCtas = ArticleCtas = __decorate([_articleCtasVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'ArticleCtas'
})], ArticleCtas);
exports.ArticleCtas = ArticleCtas;

/***/ }),
/* 201 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('cta-block',{staticClass:"article-ctas",attrs:{"ctas":_vm.ctas.ctas}})}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _articleDescriptionList = __webpack_require__(203);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _articleDescriptionList.ArticleDescriptionList;
  }
});

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ArticleDescriptionList = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _articleDescriptionListVue = __webpack_require__(204);

var _articleDescriptionListVue2 = _interopRequireDefault(_articleDescriptionListVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArticleDescriptionList = function (_Vue) {
    _inherits(ArticleDescriptionList, _Vue);

    function ArticleDescriptionList() {
        _classCallCheck(this, ArticleDescriptionList);

        return _possibleConstructorReturn(this, (ArticleDescriptionList.__proto__ || Object.getPrototypeOf(ArticleDescriptionList)).apply(this, arguments));
    }

    return ArticleDescriptionList;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Array, required: true }), __metadata("design:type", Object)], ArticleDescriptionList.prototype, "descriptions", void 0);
exports.ArticleDescriptionList = ArticleDescriptionList = __decorate([_articleDescriptionListVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'ArticleDescriptionList'
})], ArticleDescriptionList);
exports.ArticleDescriptionList = ArticleDescriptionList;

/***/ }),
/* 204 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"article-description-list"},[_c('dl',[_vm._l((_vm.descriptions),function(ref){
var term = ref.term;
var description = ref.description;
return [_c('dt',[_vm._v(_vm._s(term))]),_vm._v(" "),_c('dd',[_vm._v(_vm._s(description))])]})],2)])}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _articleImage = __webpack_require__(206);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _articleImage.ArticleImage;
  }
});

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ArticleImage = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _articleImageVue = __webpack_require__(207);

var _articleImageVue2 = _interopRequireDefault(_articleImageVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArticleImage = function (_Vue) {
    _inherits(ArticleImage, _Vue);

    function ArticleImage() {
        _classCallCheck(this, ArticleImage);

        return _possibleConstructorReturn(this, (ArticleImage.__proto__ || Object.getPrototypeOf(ArticleImage)).apply(this, arguments));
    }

    return ArticleImage;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object, required: false }), __metadata("design:type", Object)], ArticleImage.prototype, "image", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: false }), __metadata("design:type", Object)], ArticleImage.prototype, "caption", void 0);
exports.ArticleImage = ArticleImage = __decorate([_articleImageVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'ArticleImage'
})], ArticleImage);
exports.ArticleImage = ArticleImage;

/***/ }),
/* 207 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('figure',{staticClass:"article-image"},[_c('div',{staticClass:"article-image__container"},[(_vm.image)?_c('c-image',_vm._b({staticClass:"article-image__image",attrs:{"resize-behaviour":"crop"}},'c-image',_vm.image,false)):_vm._e()],1),_vm._v(" "),(_vm.caption)?_c('figcaption',{staticClass:"article-image__caption"},[_vm._v(_vm._s(_vm.caption))]):_vm._e()])}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _articleIntro = __webpack_require__(209);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _articleIntro.ArticleIntro;
  }
});

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ArticleIntro = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _articleIntroVue = __webpack_require__(210);

var _articleIntroVue2 = _interopRequireDefault(_articleIntroVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArticleIntro = function (_Vue) {
    _inherits(ArticleIntro, _Vue);

    function ArticleIntro() {
        _classCallCheck(this, ArticleIntro);

        return _possibleConstructorReturn(this, (ArticleIntro.__proto__ || Object.getPrototypeOf(ArticleIntro)).apply(this, arguments));
    }

    return ArticleIntro;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], ArticleIntro.prototype, "intro", void 0);
exports.ArticleIntro = ArticleIntro = __decorate([_articleIntroVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'ArticleIntro'
})], ArticleIntro);
exports.ArticleIntro = ArticleIntro;

/***/ }),
/* 210 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-intro",domProps:{"innerHTML":_vm._s(_vm.intro)}})}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _articleTable = __webpack_require__(212);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _articleTable.ArticleTable;
  }
});

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ArticleTable = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _articleTableVue = __webpack_require__(213);

var _articleTableVue2 = _interopRequireDefault(_articleTableVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArticleTable = function (_Vue) {
    _inherits(ArticleTable, _Vue);

    function ArticleTable() {
        _classCallCheck(this, ArticleTable);

        return _possibleConstructorReturn(this, (ArticleTable.__proto__ || Object.getPrototypeOf(ArticleTable)).apply(this, arguments));
    }

    return ArticleTable;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], ArticleTable.prototype, "table", void 0);
exports.ArticleTable = ArticleTable = __decorate([_articleTableVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'ArticleTable'
})], ArticleTable);
exports.ArticleTable = ArticleTable;

/***/ }),
/* 213 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"article-table",domProps:{"innerHTML":_vm._s(_vm.table)}})}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _articleText = __webpack_require__(215);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _articleText.ArticleText;
  }
});

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ArticleText = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _articleTextVue = __webpack_require__(216);

var _articleTextVue2 = _interopRequireDefault(_articleTextVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArticleText = function (_Vue) {
    _inherits(ArticleText, _Vue);

    function ArticleText() {
        _classCallCheck(this, ArticleText);

        return _possibleConstructorReturn(this, (ArticleText.__proto__ || Object.getPrototypeOf(ArticleText)).apply(this, arguments));
    }

    return ArticleText;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], ArticleText.prototype, "text", void 0);
exports.ArticleText = ArticleText = __decorate([_articleTextVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'ArticleText'
})], ArticleText);
exports.ArticleText = ArticleText;

/***/ }),
/* 216 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"article-text",domProps:{"innerHTML":_vm._s(_vm.text)}})}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _articleVideo = __webpack_require__(218);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _articleVideo.ArticleVideo;
  }
});

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ArticleVideo = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _articleVideoVue = __webpack_require__(219);

var _articleVideoVue2 = _interopRequireDefault(_articleVideoVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArticleVideo = function (_Vue) {
    _inherits(ArticleVideo, _Vue);

    function ArticleVideo() {
        _classCallCheck(this, ArticleVideo);

        return _possibleConstructorReturn(this, (ArticleVideo.__proto__ || Object.getPrototypeOf(ArticleVideo)).apply(this, arguments));
    }

    return ArticleVideo;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object, required: true }), __metadata("design:type", Object)], ArticleVideo.prototype, "cta", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object, required: false }), __metadata("design:type", Object)], ArticleVideo.prototype, "overlay", void 0);
exports.ArticleVideo = ArticleVideo = __decorate([_articleVideoVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'ArticleVideo'
})], ArticleVideo);
exports.ArticleVideo = ArticleVideo;

/***/ }),
/* 219 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-video"},[(_vm.overlay)?_c('c-image',_vm._b({staticClass:"article-video__overlay",attrs:{"resize-behaviour":"crop"}},'c-image',_vm.overlay,false)):_vm._e(),_vm._v(" "),_c('div',{staticClass:"article-video__overlay--overlay"}),_vm._v(" "),_c('youtube-link',_vm._b({staticClass:"article-video__button"},'youtube-link',_vm.cta,false))],1)}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _blockIcon = __webpack_require__(221);

var _blockIcon2 = _interopRequireDefault(_blockIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _blockIcon2.default;

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _blockIconVue = __webpack_require__(222);

var _blockIconVue2 = _interopRequireDefault(_blockIconVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlockIcon = function (_Vue) {
    _inherits(BlockIcon, _Vue);

    function BlockIcon() {
        _classCallCheck(this, BlockIcon);

        return _possibleConstructorReturn(this, (BlockIcon.__proto__ || Object.getPrototypeOf(BlockIcon)).apply(this, arguments));
    }

    _createClass(BlockIcon, [{
        key: "getClassNames",
        value: function getClassNames(type) {
            return {
                ContentButton: 'button',
                ContentLink: 'link link--medium',
                YoutubeLink: ''
            }[type] || '';
        }
    }]);

    return BlockIcon;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], BlockIcon.prototype, "title", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: false }), __metadata("design:type", Object)], BlockIcon.prototype, "description", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: false }), __metadata("design:type", Object)], BlockIcon.prototype, "icon", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object, required: false }), __metadata("design:type", Object)], BlockIcon.prototype, "cta", void 0);
BlockIcon = __decorate([_blockIconVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'BlockIcon'
})], BlockIcon);
exports.default = BlockIcon;

/***/ }),
/* 222 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"block-icon flexgrid"},[_c('div',{staticClass:"block-icon__visual flexgrid__cell flexgrid__cell--xxs-4 flexgrid__cell--xs-12"},[(_vm.icon)?_c('icon',{staticClass:"block-icon__icon",attrs:{"icon-name":_vm.icon}}):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"block-icon__content flexgrid__cell flexgrid__cell--xxs-8 flexgrid__cell--xs-12"},[_c('h3',{staticClass:"block-icon__headline"},[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),(_vm.description)?_c('p',{staticClass:"block-icon__description"},[_vm._v(_vm._s(_vm.description))]):_vm._e(),_vm._v(" "),(_vm.cta)?_c(_vm.cta.type,_vm._b({tag:"component",staticClass:"block-icon__link",class:_vm.getClassNames(_vm.cta.type)},'component',_vm.cta,false)):_vm._e()],1)])}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _brand = __webpack_require__(224);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _brand.Brand;
  }
});

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Brand = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _brandVue = __webpack_require__(225);

var _brandVue2 = _interopRequireDefault(_brandVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Brand = function (_Vue) {
    _inherits(Brand, _Vue);

    function Brand() {
        _classCallCheck(this, Brand);

        return _possibleConstructorReturn(this, (Brand.__proto__ || Object.getPrototypeOf(Brand)).apply(this, arguments));
    }

    return Brand;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object }), __metadata("design:type", Object)], Brand.prototype, "image", void 0);
exports.Brand = Brand = __decorate([_brandVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'Brand'
})], Brand);
exports.Brand = Brand;

/***/ }),
/* 225 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"brand"},[_c('c-image',_vm._b({staticClass:"brand__image"},'c-image',_vm.image,false))],1)}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _brandCard = __webpack_require__(227);

var _brandCard2 = _interopRequireDefault(_brandCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _brandCard2.default;

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: 'brand-card',
    template: __webpack_require__(228),
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
};

/***/ }),
/* 228 */
/***/ (function(module, exports) {

module.exports = "<div class=\"brand-card\">\n    <div class=\"brand-card__image-wrapper\">\n        <responsive-picture v-bind=\"image\"></responsive-picture>\n    </div>\n    <template v-if=\"body && type === 'text'\">\n        <p class=\"brand-card__quote\">{{body}}</p>\n    </template>\n    <template v-else-if=\"body\">\n        <q class=\"brand-card__quote\">{{body}}</q>\n    </template>\n</div>";

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _businessCard = __webpack_require__(230);

var _businessCard2 = _interopRequireDefault(_businessCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _businessCard2.default;

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _events = __webpack_require__(5);

var _events2 = _interopRequireDefault(_events);

var _businessCardVue = __webpack_require__(231);

var _businessCardVue2 = _interopRequireDefault(_businessCardVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BusinessCard = function (_Vue) {
    _inherits(BusinessCard, _Vue);

    function BusinessCard() {
        _classCallCheck(this, BusinessCard);

        return _possibleConstructorReturn(this, (BusinessCard.__proto__ || Object.getPrototypeOf(BusinessCard)).apply(this, arguments));
    }

    _createClass(BusinessCard, [{
        key: "clickEventType",
        get: function get() {
            return _events2.default.click;
        }
    }, {
        key: "clickEventData",
        get: function get() {
            if (this.clickEvent) {
                return {
                    dataType: this.clickEvent.name,
                    data: this.clickEvent.data
                };
            }
            return null;
        }
    }]);

    return BusinessCard;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], BusinessCard.prototype, "title", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object, required: false }), __metadata("design:type", Object)], BusinessCard.prototype, "image", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object, required: true }), __metadata("design:type", Object)], BusinessCard.prototype, "contentLink", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Array, required: false }), __metadata("design:type", Object)], BusinessCard.prototype, "properties", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object, required: false }), __metadata("design:type", Object)], BusinessCard.prototype, "clickEvent", void 0);
BusinessCard = __decorate([_businessCardVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'BusinessCard'
})], BusinessCard);
exports.default = BusinessCard;

/***/ }),
/* 231 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"business-card",attrs:{"href":_vm.contentLink.url,"rel":"noopener","target":"_blank","tabindex":"0"},on:{"click":function($event){_vm.clickEvent ? _vm.$emitPublic(_vm.clickEventType, _vm.clickEventData) : ''}}},[_c('div',{staticClass:"business-card__header"},[_c('div',{staticClass:"business-card__image-wrapper"},[(_vm.image)?_c('c-image',_vm._b({staticClass:"business-card__image",attrs:{"resizeBehavior":"pad"}},'c-image',_vm.image,false)):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"business-card__description"},[_c('h4',{staticClass:"business-card__title"},[_vm._v("\n                "+_vm._s(_vm.title)+"\n            ")]),_vm._v(" "),_vm._l((_vm.properties),function(property){return (_vm.properties)?_c('p',{staticClass:"business-card__property"},[_vm._v("\n                "+_vm._s(property.value)+" "+_vm._s(property.label)+"\n            ")]):_vm._e()})],2)]),_vm._v(" "),_c('div',{staticClass:"business-card__footer"},[_c('span',{staticClass:"link faux-content-link business-card__link"},[_c('span',{staticClass:"link__underline"},[_vm._v("\n                "+_vm._s(_vm.contentLink.label)+"\n            ")])])])])}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _card = __webpack_require__(233);

var _card2 = _interopRequireDefault(_card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _card2.default;

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Card = function (_Vue) {
    _inherits(Card, _Vue);

    function Card() {
        _classCallCheck(this, Card);

        return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));
    }

    _createClass(Card, [{
        key: "classObject",
        get: function get() {
            var classes = {};
            if (this.block !== '') {
                classes[this.block + "__card"] = true;
            }
            return classes;
        }
    }]);

    return Card;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String }), __metadata("design:type", String)], Card.prototype, "block", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object, required: true }), __metadata("design:type", Object)], Card.prototype, "card", void 0);
Card = __decorate([(0, _vuePropertyDecorator.Component)({
    name: 'card',
    template: __webpack_require__(234)
})], Card);
exports.default = Card;

/***/ }),
/* 234 */
/***/ (function(module, exports) {

module.exports = "<article class=\"card\" :class=\"classObject\" tabindex=\"0\">\n    <div class=\"card__visual\">\n        <div class=\"card__image\" v-if=\"card.image\">\n            <responsive-picture class=\"img--responsive\" v-if=\"card.image.mobileWidth\" v-bind=\"card.image\" ></responsive-picture>\n            <cms-image class=\"img--responsive\" v-else :image=\"card.image[0]\" :orientation=\"'square'\"></cms-image>\n        </div>\n        <icon v-if=\"card.icon\" :icon-name=\"card.icon.iconName\" class=\"card__icon\"></icon>\n    </div>\n    <div class=\"card__content\">\n        <h3 class=\"card__headline\">{{ card.title }}</h3>\n        <p class=\"card__description\" v-if=\"card.description\">{{ card.description }}</p>\n        <content-link class=\"link\" v-if=\"card.contentLink && card.contentLink.href\" :block=\"'card'\" :url=\"card.contentLink.href\" :label=\"card.contentLink.text\">\n        </content-link>\n    </div>\n</article>\n\n";

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cardArticle = __webpack_require__(236);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _cardArticle.CardArticle;
  }
});

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CardArticle = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _cardBase = __webpack_require__(17);

var _vuePropertyDecorator = __webpack_require__(0);

var _cardArticleVue = __webpack_require__(237);

var _cardArticleVue2 = _interopRequireDefault(_cardArticleVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardArticle = function (_CardBase) {
    _inherits(CardArticle, _CardBase);

    function CardArticle() {
        _classCallCheck(this, CardArticle);

        return _possibleConstructorReturn(this, (CardArticle.__proto__ || Object.getPrototypeOf(CardArticle)).apply(this, arguments));
    }

    _createClass(CardArticle, [{
        key: "listItems",
        get: function get() {
            var properties = [];
            if (this.labels) {
                properties = this.labels.map(function (property) {
                    return {
                        item: {
                            item: {
                                item: property
                            },
                            type: 'SpanLabel'
                        },
                        type: 'LiInline'
                    };
                });
            }
            return {
                items: properties,
                type: 'LiInline'
            };
        }
    }]);

    return CardArticle;
}(_cardBase.CardBase);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String }), __metadata("design:type", Object)], CardArticle.prototype, "description", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Array }), __metadata("design:type", Object)], CardArticle.prototype, "labels", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String }), __metadata("design:type", Object)], CardArticle.prototype, "url", void 0);
exports.CardArticle = CardArticle = __decorate([_cardArticleVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'CardArticle'
})], CardArticle);
exports.CardArticle = CardArticle;

/***/ }),
/* 237 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"card-article",on:{"click":_vm.triggerEventClick}},[(_vm.url)?_c('anchor-overlay',{attrs:{"url":_vm.url,"title":_vm.title}}):_vm._e(),_vm._v(" "),(_vm.image)?_c('div',{staticClass:"card-article__image-container"},[_c('c-image',_vm._b({staticClass:"card-article__image"},'c-image',_vm.image,false))],1):_vm._e(),_vm._v(" "),_c('h3',{staticClass:"card-article__heading"},[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),(_vm.description)?_c('p',{staticClass:"card-article__description"},[_vm._v("\n        "+_vm._s(_vm.description)+"\n    ")]):_vm._e(),_vm._v(" "),_c('list-unordered',{staticClass:"card-article__labels-list",attrs:{"listItems":_vm.listItems}})],1)}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cardBase = __webpack_require__(17);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _cardBase.CardBase;
  }
});

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cardDownload = __webpack_require__(240);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _cardDownload.CardDownload;
  }
});

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CardDownload = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _cardDownloadVue = __webpack_require__(241);

var _cardDownloadVue2 = _interopRequireDefault(_cardDownloadVue);

var _uuid = __webpack_require__(242);

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardDownload = function (_Vue) {
    _inherits(CardDownload, _Vue);

    function CardDownload() {
        _classCallCheck(this, CardDownload);

        return _possibleConstructorReturn(this, (CardDownload.__proto__ || Object.getPrototypeOf(CardDownload)).apply(this, arguments));
    }

    _createClass(CardDownload, [{
        key: "handleSelect",
        value: function handleSelect() {
            this.setSelectedItem(this.index);
        }
    }, {
        key: "id",
        get: function get() {
            return (0, _uuid2.default)();
        }
    }]);

    return CardDownload;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], CardDownload.prototype, "name", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Boolean, required: true }), __metadata("design:type", Object)], CardDownload.prototype, "selected", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Number, required: true }), __metadata("design:type", Object)], CardDownload.prototype, "index", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Function, required: true }), __metadata("design:type", Object)], CardDownload.prototype, "setSelectedItem", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], CardDownload.prototype, "title", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], CardDownload.prototype, "file", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], CardDownload.prototype, "description", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object, required: false }), __metadata("design:type", Object)], CardDownload.prototype, "image", void 0);
exports.CardDownload = CardDownload = __decorate([_cardDownloadVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'CardDownload'
})], CardDownload);
exports.CardDownload = CardDownload;

/***/ }),
/* 241 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card-download"},[_c('input',{staticClass:"card-download__radio",attrs:{"type":"radio","id":_vm.id,"name":_vm.name},domProps:{"checked":_vm.selected,"value":_vm.file},on:{"change":_vm.handleSelect}}),_vm._v(" "),_c('label',{staticClass:"card-download__label",attrs:{"for":_vm.id}},[_c('div',{staticClass:"card-download__image-wrapper"},[(_vm.image)?_c('c-image',_vm._b({},'c-image',_vm.image,false)):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"card-download__content"},[_c('h4',{staticClass:"card-download__title"},[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),(_vm.description)?_c('p',{staticClass:"card-download__desc"},[_vm._v(_vm._s(_vm.description))]):_vm._e()])])])}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    if (process.env.BABEL_ENV) {
        return 'static';
    }
    return (0, _uuid2.default)();
};

var _uuid = __webpack_require__(13);

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(12)))

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cardProduct = __webpack_require__(244);

var _cardProduct2 = _interopRequireDefault(_cardProduct);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _cardProduct2.default;

/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _cardProductVue = __webpack_require__(245);

var _cardProductVue2 = _interopRequireDefault(_cardProductVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardProduct = function (_Vue) {
    _inherits(CardProduct, _Vue);

    function CardProduct() {
        _classCallCheck(this, CardProduct);

        var _this = _possibleConstructorReturn(this, (CardProduct.__proto__ || Object.getPrototypeOf(CardProduct)).apply(this, arguments));

        _this.imageError = false;
        return _this;
    }

    _createClass(CardProduct, [{
        key: "listItems",
        get: function get() {
            var properties = [];
            if (this.properties) {
                properties = this.properties.map(function (property) {
                    return {
                        item: {
                            item: {
                                item: property
                            },
                            type: 'SpanLabel'
                        },
                        type: 'LiInline'
                    };
                });
            }
            return {
                items: properties,
                type: 'LiInline'
            };
        }
    }]);

    return CardProduct;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object }), __metadata("design:type", Object)], CardProduct.prototype, "image", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Array }), __metadata("design:type", Object)], CardProduct.prototype, "properties", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], CardProduct.prototype, "title", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], CardProduct.prototype, "url", void 0);
CardProduct = __decorate([_cardProductVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'CardProduct'
})], CardProduct);
exports.default = CardProduct;

/***/ }),
/* 245 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"card-product"},[_c('anchor-overlay',{attrs:{"url":_vm.url,"title":_vm.title}}),_vm._v(" "),_c('div',{staticClass:"card-product__image-container"},[(_vm.image && !_vm.imageError)?_c('c-image',_vm._b({staticClass:"card-product__image",on:{"error":function($event){_vm.imageError = true}}},'c-image',_vm.image,false)):_vm._e(),_vm._v(" "),(!_vm.image || _vm.imageError)?_c('div',{staticClass:"img--contain card-product__image gray-background"},[_vm._v(_vm._s(_vm.title))]):_vm._e()],1),_vm._v(" "),_c('h3',{staticClass:"card-product__heading"},[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),_c('list-unordered',{staticClass:"card-product__labels-list",attrs:{"listItems":_vm.listItems}})],1)}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _color = __webpack_require__(247);

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _color2.default;

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _color = __webpack_require__(248);

var _colorVue = __webpack_require__(249);

var _colorVue2 = _interopRequireDefault(_colorVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Color = function (_Vue) {
    _inherits(Color, _Vue);

    function Color() {
        _classCallCheck(this, Color);

        return _possibleConstructorReturn(this, (Color.__proto__ || Object.getPrototypeOf(Color)).apply(this, arguments));
    }

    _createClass(Color, [{
        key: "styleBackground",
        get: function get() {
            var styles = {};
            styles.background = this.color;
            if (this.opacity < 100) {
                styles.opacity = this.opacity / 100;
            }
            return styles;
        }
    }, {
        key: "styleIcon",
        get: function get() {
            var styles = {};
            styles.color = _color.Color.lightness(this.color) >= 0.5 ? '#000' : '#FFF';
            return styles;
        }
    }, {
        key: "color",
        get: function get() {
            var hexColorNoPrefix = /^([A-Fa-f0-9]{6})/;
            if (this.rgbHex && this.rgbHex.match && this.rgbHex.match(hexColorNoPrefix)) {
                return "#" + this.rgbHex;
            }
            return this.rgbHex;
        }
    }]);

    return Color;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], Color.prototype, "rgbHex", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Number, required: true }), __metadata("design:type", Object)], Color.prototype, "opacity", void 0);
Color = __decorate([_colorVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'color'
})], Color);
exports.default = Color;

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Color = exports.Color = function () {
    function Color() {
        _classCallCheck(this, Color);
    }

    _createClass(Color, null, [{
        key: "lightness",
        value: function lightness(color) {
            var white = 765;
            var expression = /^#([A-Fa-f0-9]{2})([A-Fa-f0-9]{2})([A-Fa-f0-9]{2})/;
            var matches = color && color.match ? color.match(expression) : false;
            if (!matches || matches.length !== 4) {
                return 0;
            }
            return Math.round((parseInt(matches[1], 16) + parseInt(matches[2], 16) + parseInt(matches[3], 16)) / white * 100) / 100;
        }
    }]);

    return Color;
}();

/***/ }),
/* 249 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"color",attrs:{"tabindex":"0"}},[_c('div',{staticClass:"color__spec color__spec--show"},[_c('icon',{staticClass:"color__icon",style:(_vm.styleIcon),attrs:{"icon-name":"show"}})],1),_vm._v(" "),_c('div',{staticClass:"color__spec color__spec--swatch",style:(_vm.styleBackground)})])}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _contentBlock = __webpack_require__(251);

var _contentBlock2 = _interopRequireDefault(_contentBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _contentBlock2.default;

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _contentBlockVue = __webpack_require__(252);

var _contentBlockVue2 = _interopRequireDefault(_contentBlockVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContentBlock = function (_Vue) {
    _inherits(ContentBlock, _Vue);

    function ContentBlock() {
        _classCallCheck(this, ContentBlock);

        return _possibleConstructorReturn(this, (ContentBlock.__proto__ || Object.getPrototypeOf(ContentBlock)).apply(this, arguments));
    }

    _createClass(ContentBlock, [{
        key: "getClassNames",
        value: function getClassNames(type) {
            return {
                ContentButton: 'button',
                ContentLink: 'link link--medium',
                YoutubeLink: ''
            }[type] || '';
        }
    }]);

    return ContentBlock;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], ContentBlock.prototype, "title", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], ContentBlock.prototype, "description", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object }), __metadata("design:type", Object)], ContentBlock.prototype, "image", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object }), __metadata("design:type", Object)], ContentBlock.prototype, "cta", void 0);
ContentBlock = __decorate([_contentBlockVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'ContentBlock'
})], ContentBlock);
exports.default = ContentBlock;

/***/ }),
/* 252 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"content-block disable-focus",attrs:{"tabIndex":"-1"}},[_c('div',{staticClass:"content-block-container__image"},[(_vm.image)?_c('c-image',_vm._b({staticClass:"content-block__image",attrs:{"keep-in-view":""}},'c-image',_vm.image,false)):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"content-block__content"},[_c('h3',{staticClass:"content-block__headline"},[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),_c('p',{staticClass:"content-block__description"},[_vm._v(_vm._s(_vm.description))]),_vm._v(" "),(_vm.cta)?_c(_vm.cta.type,_vm._b({tag:"component",class:_vm.getClassNames(_vm.cta.type)},'component',_vm.cta,false)):_vm._e()],1)])}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _contentToggle = __webpack_require__(254);

var _contentToggle2 = _interopRequireDefault(_contentToggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _contentToggle2.default;

/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: 'content-toggle',
    template: __webpack_require__(255),
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
            this.$emit('toggle');
        }
    }
};

/***/ }),
/* 255 */
/***/ (function(module, exports) {

module.exports = "<a class=\"toggle toggle--icon\" role=\"button\" tabindex=\"0\" @click=\"toggle\"\n       @keyup.enter=\"toggle\">\n    <icon :icon-name=\"toggleIcon\"></icon>\n    <span>{{ toggleText }}</span>\n</a>\n";

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ctaBlock = __webpack_require__(257);

var _ctaBlock2 = _interopRequireDefault(_ctaBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ctaBlock2.default;

/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _ctaBlockVue = __webpack_require__(258);

var _ctaBlockVue2 = _interopRequireDefault(_ctaBlockVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CtaBlock = function (_Vue) {
    _inherits(CtaBlock, _Vue);

    function CtaBlock() {
        _classCallCheck(this, CtaBlock);

        var _this = _possibleConstructorReturn(this, (CtaBlock.__proto__ || Object.getPrototypeOf(CtaBlock)).apply(this, arguments));

        _this.modifiers = {
            ContentButton: _this.modContentButton || 'primary',
            ContentLink: _this.modContentLink || 'large'
        };
        _this.classes = {
            ContentButton: _this.styleContentButton || 'button',
            ContentLink: _this.styleContentLink || 'link'
        };
        return _this;
    }

    _createClass(CtaBlock, [{
        key: "modifier",
        value: function modifier(type) {
            return this.modifiers[type];
        }
    }, {
        key: "classObject",
        value: function classObject(type) {
            return this.classes[type] + " cta-link";
        }
    }, {
        key: "classMod",
        get: function get() {
            var classes = {};
            if (this.mod !== '' && typeof this.mod === 'string') {
                this.mod.split(' ').forEach(function (mod) {
                    classes["cta-block--" + mod] = true;
                });
            }
            return classes;
        }
    }]);

    return CtaBlock;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Array, required: true }), __metadata("design:type", Object)], CtaBlock.prototype, "ctas", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String }), __metadata("design:type", Object)], CtaBlock.prototype, "mod", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String }), __metadata("design:type", Object)], CtaBlock.prototype, "styleContentButton", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String }), __metadata("design:type", Object)], CtaBlock.prototype, "styleContentLink", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String }), __metadata("design:type", Object)], CtaBlock.prototype, "modContentLink", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String }), __metadata("design:type", Object)], CtaBlock.prototype, "modContentButton", void 0);
CtaBlock = __decorate([_ctaBlockVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'CtaBlock'
})], CtaBlock);
exports.default = CtaBlock;

/***/ }),
/* 258 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.ctas.length > 0)?_c('div',{staticClass:"cta-block",class:_vm.classMod},[_vm._l((_vm.ctas),function(cta,index){return [_c(cta.type,_vm._b({key:index,tag:"component",class:_vm.classObject(cta.type),attrs:{"label":cta.label,"mod":_vm.modifier(cta.type)}},'component',cta,false))]})],2):_vm._e()}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _currency = __webpack_require__(260);

var _currency2 = _interopRequireDefault(_currency);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _currency2.default;

/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _arithmetic = __webpack_require__(10);

var _arithmetic2 = _interopRequireDefault(_arithmetic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'currency',
    template: __webpack_require__(261),
    props: {
        amount: {
            type: Number,
            required: true
        },
        currencyType: {
            type: String
        },
        decimals: {
            type: Number,
            default: 2
        }
    },
    computed: {
        formattedAmount: function formattedAmount() {
            return _arithmetic2.default.fixedNumber(this.amount, this.decimals);
        }
    }
};

/***/ }),
/* 261 */
/***/ (function(module, exports) {

module.exports = "<span class=\"currency\">\n    <span class=\"currency__type\">{{ currencyType }}</span>\n    {{ formattedAmount }}\n</span>\n";

/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fauxVerticalScroll = __webpack_require__(263);

var _fauxVerticalScroll2 = _interopRequireDefault(_fauxVerticalScroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _fauxVerticalScroll2.default;

/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _gsap = __webpack_require__(4);

var _Draggable = __webpack_require__(264);

var _Draggable2 = _interopRequireDefault(_Draggable);

__webpack_require__(265);

var _defaults = __webpack_require__(3);

var _defaults2 = _interopRequireDefault(_defaults);

var _viewport = __webpack_require__(1);

var _viewport2 = _interopRequireDefault(_viewport);

var _browserCapabilities = __webpack_require__(2);

var _browserCapabilities2 = _interopRequireDefault(_browserCapabilities);

var _fauxVerticalScrollVue = __webpack_require__(267);

var _fauxVerticalScrollVue2 = _interopRequireDefault(_fauxVerticalScrollVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FauxVerticalScroll = function (_Vue) {
    _inherits(FauxVerticalScroll, _Vue);

    function FauxVerticalScroll() {
        _classCallCheck(this, FauxVerticalScroll);

        var _this = _possibleConstructorReturn(this, (FauxVerticalScroll.__proto__ || Object.getPrototypeOf(FauxVerticalScroll)).apply(this, arguments));

        _this.viewportUtil = new _viewport2.default();
        _this.transitionDuration = _defaults2.default.defaultDuration;
        _this.draggableElement = undefined;
        _this.scale = 0;
        _this.canDrag = false;
        _this.isMounted = false;
        return _this;
    }

    _createClass(FauxVerticalScroll, [{
        key: "barStyle",
        value: function barStyle() {
            return {
                display: this.canDrag ? 'block' : 'hidden',
                opacity: this.canDrag ? 1 : 0,
                width: this.scale + "px"
            };
        }
    }, {
        key: "calculateOffset",
        value: function calculateOffset() {
            if (this.isMounted && this.$refs.content && this.$refs.container) {
                return this.$refs.content.scrollWidth - this.$refs.container.clientWidth;
            }
            return 0;
        }
    }, {
        key: "tweenBar",
        value: function tweenBar() {
            var contentWidth = this.$refs.content.scrollWidth;
            var clientWidth = this.$refs.container.clientWidth;
            var correction = clientWidth / 100 * 0.51;
            var offSet = clientWidth - this.$refs.content._gsTransform.x * correction + this.scale;
            var percentage = 100 - (contentWidth - (offSet - clientWidth)) / contentWidth * 100;
            var width = percentage * (clientWidth / 100);
            _gsap.TweenLite.to(this.$refs.bar, this.transitionDuration / 2, {
                left: offSet === clientWidth ? 0 : percentage > 100 ? clientWidth - this.scale : width - this.scale,
                ease: _gsap.Power3.easeOut
            });
        }
    }, {
        key: "createDraggable",
        value: function createDraggable() {
            var _this2 = this;

            var content = this.$refs.content;

            var clientWidth = this.$refs.container.clientWidth;
            this.draggableElement = _Draggable2.default.create(content, {
                type: 'x',
                lockAxis: 'x',
                edgeResistance: 0.65,
                overshootTolerance: clientWidth / 100 * 5,
                throwProps: {
                    x: {
                        velocity: 'auto',
                        max: 0,
                        min: -this.calculateOffset()
                    }
                },
                onDrag: function onDrag() {
                    _this2.tweenBar();
                },
                onThrowUpdate: function onThrowUpdate() {
                    _this2.tweenBar();
                }
            });
        }
    }, {
        key: "calculateBarScale",
        value: function calculateBarScale() {
            var contentWidth = this.$refs.content.scrollWidth;
            var clientWidth = this.$refs.container.clientWidth;
            this.scale = contentWidth / clientWidth * 100;
            this.barStyle();
        }
    }, {
        key: "mounted",
        value: function mounted() {
            this.canDrag = this.calculateOffset() > 0;
            this.isMounted = true;
            this.calculateBarScale();
            if (!this.draggableElement && this.canDrag) {
                this.createDraggable();
            }
        }
    }, {
        key: "handleResize",
        value: function handleResize() {
            if (this.isMounted) {
                this.canDrag = this.calculateOffset() > 0;
                if (this.draggableElement) {
                    this.draggableElement[0].kill();
                }
                if (this.canDrag) {
                    this.calculateBarScale();
                    this.createDraggable();
                }
            }
        }
    }, {
        key: "beforeMount",
        value: function beforeMount() {
            var _this3 = this;

            this.viewportUtil.addResizeHandler(this.handleResize);
            if (_browserCapabilities2.default.isBrowser) {
                this.handleResize();
            }
            this.viewportUtil.triggerResize();
            setTimeout(function () {
                _this3.handleResize();
            }, 100);
        }
    }, {
        key: "beforeDestroy",
        value: function beforeDestroy() {
            this.draggableElement[0].kill();
            this.viewportUtil.removeResizeHandler(this.handleResize);
        }
    }]);

    return FauxVerticalScroll;
}(_vuePropertyDecorator.Vue);
FauxVerticalScroll = __decorate([_fauxVerticalScrollVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'faux-vertical-scroll'
})], FauxVerticalScroll);
exports.default = FauxVerticalScroll;

/***/ }),
/* 264 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__264__;

/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.VelocityTracker = exports.default = exports.ThrowPropsPlugin = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*!
 * VERSION: 0.11.1
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * ThrowPropsPlugin is a Club GreenSock membership benefit; You must have a valid membership to use
 * this code without violating the terms of use. Visit http://greensock.com/club/ to sign up or get more details.
 * This work is subject to the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */

var _TweenLite = __webpack_require__(266);

_TweenLite._gsScope._gsDefine("plugins.ThrowPropsPlugin", ["utils.VelocityTracker", "plugins.TweenPlugin", "TweenLite", "easing.Ease"], function (VelocityTracker) {

	var ThrowPropsPlugin = function ThrowPropsPlugin(props, priority) {
		_TweenLite.TweenPlugin.call(this, "throwProps");
		this._overwriteProps.length = 0;
	},
	    _max = 999999999999999,
	    _min = 0.0000000001,
	    _globals = _TweenLite._gsScope._gsDefine.globals,
	    _recordEndMode = false,
	    _transforms = { x: 1, y: 1, z: 2, scale: 1, scaleX: 1, scaleY: 1, rotation: 1, rotationZ: 1, rotationX: 2, rotationY: 2, skewX: 1, skewY: 1, xPercent: 1, yPercent: 1 },
	    _getClosest = function _getClosest(n, values, max, min, radius) {
		var i = values.length,
		    closest = 0,
		    absDif = _max,
		    val,
		    dif,
		    p,
		    dist;
		if ((typeof n === "undefined" ? "undefined" : _typeof(n)) === "object") {
			while (--i > -1) {
				val = values[i];
				dif = 0;
				for (p in n) {
					dist = val[p] - n[p];
					dif += dist * dist;
				}
				if (dif < absDif) {
					closest = i;
					absDif = dif;
				}
			}
			if ((radius || _max) < _max && radius < Math.sqrt(absDif)) {
				return n;
			}
		} else {
			while (--i > -1) {
				val = values[i];
				dif = val - n;
				if (dif < 0) {
					dif = -dif;
				}
				if (dif < absDif && val >= min && val <= max) {
					closest = i;
					absDif = dif;
				}
			}
		}
		return values[closest];
	},
	    _parseEnd = function _parseEnd(curProp, end, max, min, name, radius) {
		if (curProp.end === "auto") {
			return curProp;
		}
		var endVar = curProp.end,
		    adjustedEnd,
		    p;
		max = isNaN(max) ? _max : max;
		min = isNaN(min) ? -_max : min;
		if ((typeof end === "undefined" ? "undefined" : _typeof(end)) === "object") {
			adjustedEnd = end.calculated ? end : (typeof endVar === "function" ? endVar(end) : _getClosest(end, endVar, max, min, radius)) || end;
			if (!end.calculated) {
				for (p in adjustedEnd) {
					end[p] = adjustedEnd[p];
				}
				end.calculated = true;
			}
			adjustedEnd = adjustedEnd[name];
		} else {
			adjustedEnd = typeof endVar === "function" ? endVar(end) : endVar instanceof Array ? _getClosest(end, endVar, max, min, radius) : Number(endVar);
		}
		if (adjustedEnd > max) {
			adjustedEnd = max;
		} else if (adjustedEnd < min) {
			adjustedEnd = min;
		}
		return { max: adjustedEnd, min: adjustedEnd, unitFactor: curProp.unitFactor };
	},
	    _extend = function _extend(decoratee, extras, exclude) {
		for (var p in extras) {
			if (decoratee[p] === undefined && p !== exclude) {
				decoratee[p] = extras[p];
			}
		}
		return decoratee;
	},
	    _calculateChange = ThrowPropsPlugin.calculateChange = function (velocity, ease, duration, checkpoint) {
		if (checkpoint == null) {
			checkpoint = 0.05;
		}
		var e = ease instanceof _TweenLite.Ease ? ease : !ease ? _TweenLite.TweenLite.defaultEase : new _TweenLite.Ease(ease);
		return duration * checkpoint * velocity / e.getRatio(checkpoint);
	},
	    _calculateDuration = ThrowPropsPlugin.calculateDuration = function (start, end, velocity, ease, checkpoint) {
		checkpoint = checkpoint || 0.05;
		var e = ease instanceof _TweenLite.Ease ? ease : !ease ? _TweenLite.TweenLite.defaultEase : new _TweenLite.Ease(ease);
		return Math.abs((end - start) * e.getRatio(checkpoint) / velocity / checkpoint);
	},
	    _calculateTweenDuration = ThrowPropsPlugin.calculateTweenDuration = function (target, vars, maxDuration, minDuration, overshootTolerance, recordEnd) {
		if (typeof target === "string") {
			target = _TweenLite.TweenLite.selector(target);
		}
		if (!target) {
			return 0;
		}
		if (maxDuration == null) {
			maxDuration = 10;
		}
		if (minDuration == null) {
			minDuration = 0.2;
		}
		if (overshootTolerance == null) {
			overshootTolerance = 1;
		}
		if (target.length) {
			target = target[0] || target;
		}
		var duration = 0,
		    clippedDuration = 9999999999,
		    throwPropsVars = vars.throwProps || vars,
		    ease = vars.ease instanceof _TweenLite.Ease ? vars.ease : !vars.ease ? _TweenLite.TweenLite.defaultEase : new _TweenLite.Ease(vars.ease),
		    checkpoint = isNaN(throwPropsVars.checkpoint) ? 0.05 : Number(throwPropsVars.checkpoint),
		    resistance = isNaN(throwPropsVars.resistance) ? ThrowPropsPlugin.defaultResistance : Number(throwPropsVars.resistance),
		    p,
		    curProp,
		    curDuration,
		    curVelocity,
		    curResistance,
		    curVal,
		    end,
		    curClippedDuration,
		    tracker,
		    unitFactor,
		    linkedProps,
		    linkedPropNames,
		    i;

		if (throwPropsVars.linkedProps) {
			linkedPropNames = throwPropsVars.linkedProps.split(",");
			linkedProps = {};
			for (i = 0; i < linkedPropNames.length; i++) {
				p = linkedPropNames[i];
				curProp = throwPropsVars[p];
				if (curProp) {
					if (curProp.velocity !== undefined && typeof curProp.velocity === "number") {
						curVelocity = Number(curProp.velocity) || 0;
					} else {
						tracker = tracker || VelocityTracker.getByTarget(target);
						curVelocity = tracker && tracker.isTrackingProp(p) ? tracker.getVelocity(p) : 0;
					}
					curResistance = isNaN(curProp.resistance) ? resistance : Number(curProp.resistance);
					curDuration = curVelocity * curResistance > 0 ? curVelocity / curResistance : curVelocity / -curResistance;
					curVal = typeof target[p] === "function" ? target[p.indexOf("set") || typeof target["get" + p.substr(3)] !== "function" ? p : "get" + p.substr(3)]() : target[p] || 0;
					linkedProps[p] = curVal + _calculateChange(curVelocity, ease, curDuration, checkpoint);
				}
			}
		}

		for (p in throwPropsVars) {

			if (p !== "resistance" && p !== "checkpoint" && p !== "preventOvershoot" && p !== "linkedProps" && p !== "radius") {
				curProp = throwPropsVars[p];
				if ((typeof curProp === "undefined" ? "undefined" : _typeof(curProp)) !== "object") {
					tracker = tracker || VelocityTracker.getByTarget(target);
					if (tracker && tracker.isTrackingProp(p)) {
						curProp = typeof curProp === "number" ? { velocity: curProp } : { velocity: tracker.getVelocity(p) };
					} else {
						curVelocity = Number(curProp) || 0;
						curDuration = curVelocity * resistance > 0 ? curVelocity / resistance : curVelocity / -resistance;
					}
				}
				if ((typeof curProp === "undefined" ? "undefined" : _typeof(curProp)) === "object") {

					if (curProp.velocity !== undefined && typeof curProp.velocity === "number") {
						curVelocity = Number(curProp.velocity) || 0;
					} else {
						tracker = tracker || VelocityTracker.getByTarget(target);
						curVelocity = tracker && tracker.isTrackingProp(p) ? tracker.getVelocity(p) : 0;
					}
					curResistance = isNaN(curProp.resistance) ? resistance : Number(curProp.resistance);
					curDuration = curVelocity * curResistance > 0 ? curVelocity / curResistance : curVelocity / -curResistance;
					curVal = typeof target[p] === "function" ? target[p.indexOf("set") || typeof target["get" + p.substr(3)] !== "function" ? p : "get" + p.substr(3)]() : target[p] || 0;
					end = curVal + _calculateChange(curVelocity, ease, curDuration, checkpoint);
					if (curProp.end !== undefined) {
						curProp = _parseEnd(curProp, linkedProps && p in linkedProps ? linkedProps : end, curProp.max, curProp.min, p, throwPropsVars.radius);
						if (recordEnd || _recordEndMode) {
							throwPropsVars[p] = _extend(curProp, throwPropsVars[p], "end");
						}
					}
					if (curProp.max !== undefined && end > Number(curProp.max) + _min) {
						unitFactor = curProp.unitFactor || ThrowPropsPlugin.defaultUnitFactors[p] || 1;
						curClippedDuration = curVal > curProp.max && curProp.min !== curProp.max || curVelocity * unitFactor > -15 && curVelocity * unitFactor < 45 ? minDuration + (maxDuration - minDuration) * 0.1 : _calculateDuration(curVal, curProp.max, curVelocity, ease, checkpoint);
						if (curClippedDuration + overshootTolerance < clippedDuration) {
							clippedDuration = curClippedDuration + overshootTolerance;
						}
					} else if (curProp.min !== undefined && end < Number(curProp.min) - _min) {
						unitFactor = curProp.unitFactor || ThrowPropsPlugin.defaultUnitFactors[p] || 1;
						curClippedDuration = curVal < curProp.min && curProp.min !== curProp.max || curVelocity * unitFactor > -45 && curVelocity * unitFactor < 15 ? minDuration + (maxDuration - minDuration) * 0.1 : _calculateDuration(curVal, curProp.min, curVelocity, ease, checkpoint);
						if (curClippedDuration + overshootTolerance < clippedDuration) {
							clippedDuration = curClippedDuration + overshootTolerance;
						}
					}

					if (curClippedDuration > duration) {
						duration = curClippedDuration;
					}
				}

				if (curDuration > duration) {
					duration = curDuration;
				}
			}
		}
		if (duration > clippedDuration) {
			duration = clippedDuration;
		}
		if (duration > maxDuration) {
			return maxDuration;
		} else if (duration < minDuration) {
			return minDuration;
		}
		return duration;
	},
	    p = ThrowPropsPlugin.prototype = new _TweenLite.TweenPlugin("throwProps"),
	    _cssProxy,
	    _cssVars,
	    _last,
	    _lastValue;

	p.constructor = ThrowPropsPlugin;
	ThrowPropsPlugin.version = "0.11.1";
	ThrowPropsPlugin.API = 2;
	ThrowPropsPlugin._autoCSS = true;
	ThrowPropsPlugin.defaultResistance = 100;
	ThrowPropsPlugin.defaultUnitFactors = { time: 1000, totalTime: 1000 };

	ThrowPropsPlugin.track = function (target, props, types) {
		return VelocityTracker.track(target, props, types);
	};

	ThrowPropsPlugin.untrack = function (target, props) {
		VelocityTracker.untrack(target, props);
	};

	ThrowPropsPlugin.isTracking = function (target, prop) {
		return VelocityTracker.isTracking(target, prop);
	};

	ThrowPropsPlugin.getVelocity = function (target, prop) {
		var vt = VelocityTracker.getByTarget(target);
		return vt ? vt.getVelocity(prop) : NaN;
	};

	ThrowPropsPlugin._cssRegister = function () {
		var CSSPlugin = _globals.com.greensock.plugins.CSSPlugin;
		if (!CSSPlugin) {
			return;
		}
		var _internals = CSSPlugin._internals,
		    _parseToProxy = _internals._parseToProxy,
		    _setPluginRatio = _internals._setPluginRatio,
		    CSSPropTween = _internals.CSSPropTween;
		_internals._registerComplexSpecialProp("throwProps", { parser: function parser(t, e, prop, cssp, pt, plugin) {
				plugin = new ThrowPropsPlugin();
				var velocities = {},
				    min = {},
				    max = {},
				    end = {},
				    res = {},
				    preventOvershoot = {},
				    hasResistance,
				    val,
				    p,
				    data,
				    tracker;
				_cssVars = {};
				for (p in e) {
					if (p !== "resistance" && p !== "preventOvershoot" && p !== "linkedProps" && p !== "radius") {
						val = e[p];
						if ((typeof val === "undefined" ? "undefined" : _typeof(val)) === "object") {
							if (val.velocity !== undefined && typeof val.velocity === "number") {
								velocities[p] = Number(val.velocity) || 0;
							} else {
								tracker = tracker || VelocityTracker.getByTarget(t);
								velocities[p] = tracker && tracker.isTrackingProp(p) ? tracker.getVelocity(p) : 0;
							}
							if (val.end !== undefined) {
								end[p] = val.end;
							}
							if (val.min !== undefined) {
								min[p] = val.min;
							}
							if (val.max !== undefined) {
								max[p] = val.max;
							}
							if (val.preventOvershoot) {
								preventOvershoot[p] = true;
							}
							if (val.resistance !== undefined) {
								hasResistance = true;
								res[p] = val.resistance;
							}
						} else if (typeof val === "number") {
							velocities[p] = val;
						} else {
							tracker = tracker || VelocityTracker.getByTarget(t);
							if (tracker && tracker.isTrackingProp(p)) {
								velocities[p] = tracker.getVelocity(p);
							} else {
								velocities[p] = val || 0;
							}
						}
						if (_transforms[p]) {
							cssp._enableTransforms(_transforms[p] === 2);
						}
					}
				}
				data = _parseToProxy(t, velocities, cssp, pt, plugin);
				_cssProxy = data.proxy;
				velocities = data.end;
				for (p in _cssProxy) {
					_cssVars[p] = { velocity: velocities[p], min: min[p], max: max[p], end: end[p], resistance: res[p], preventOvershoot: preventOvershoot[p] };
				}
				if (e.resistance != null) {
					_cssVars.resistance = e.resistance;
				}
				if (e.linkedProps != null) {
					_cssVars.linkedProps = e.linkedProps;
				}
				if (e.radius != null) {
					_cssVars.radius = e.radius;
				}
				if (e.preventOvershoot) {
					_cssVars.preventOvershoot = true;
				}
				pt = new CSSPropTween(t, "throwProps", 0, 0, data.pt, 2);
				cssp._overwriteProps.pop();
				pt.plugin = plugin;
				pt.setRatio = _setPluginRatio;
				pt.data = data;
				plugin._onInitTween(_cssProxy, _cssVars, cssp._tween);
				return pt;
			} });
	};

	ThrowPropsPlugin.to = function (target, vars, maxDuration, minDuration, overshootTolerance) {
		if (!vars.throwProps) {
			vars = { throwProps: vars };
		}
		if (overshootTolerance === 0) {
			vars.throwProps.preventOvershoot = true;
		}
		_recordEndMode = true;
		var tween = new _TweenLite.TweenLite(target, minDuration || 1, vars);
		tween.render(0, true, true);
		if (tween.vars.css) {
			tween.duration(_calculateTweenDuration(_cssProxy, { throwProps: _cssVars, ease: vars.ease }, maxDuration, minDuration, overshootTolerance));
			if (tween._delay && !tween.vars.immediateRender) {
				tween.invalidate();
			} else {
				_last._onInitTween(_cssProxy, _lastValue, tween);
			}
			_recordEndMode = false;
			return tween;
		} else {
			tween.kill();
			tween = new _TweenLite.TweenLite(target, _calculateTweenDuration(target, vars, maxDuration, minDuration, overshootTolerance), vars);
			_recordEndMode = false;
			return tween;
		}
	};

	p._onInitTween = function (target, value, tween, index) {
		this.target = target;
		this._props = [];
		_last = this;
		_lastValue = value;
		var ease = tween._ease,
		    checkpoint = isNaN(value.checkpoint) ? 0.05 : Number(value.checkpoint),
		    duration = tween._duration,
		    preventOvershoot = value.preventOvershoot,
		    cnt = 0,
		    p,
		    curProp,
		    curVal,
		    isFunc,
		    velocity,
		    change1,
		    end,
		    change2,
		    tracker,
		    linkedProps,
		    linkedPropNames,
		    i;

		if (value.linkedProps) {
			linkedPropNames = value.linkedProps.split(",");
			linkedProps = {};
			for (i = 0; i < linkedPropNames.length; i++) {
				p = linkedPropNames[i];
				curProp = value[p];
				if (curProp) {
					if (curProp.velocity !== undefined && typeof curProp.velocity === "number") {
						velocity = Number(curProp.velocity) || 0;
					} else {
						tracker = tracker || VelocityTracker.getByTarget(target);
						velocity = tracker && tracker.isTrackingProp(p) ? tracker.getVelocity(p) : 0;
					}
					curVal = typeof target[p] === "function" ? target[p.indexOf("set") || typeof target["get" + p.substr(3)] !== "function" ? p : "get" + p.substr(3)]() : target[p] || 0;
					linkedProps[p] = curVal + _calculateChange(velocity, ease, duration, checkpoint);
				}
			}
		}

		for (p in value) {
			if (p !== "resistance" && p !== "checkpoint" && p !== "preventOvershoot" && p !== "linkedProps" && p !== "radius") {
				curProp = value[p];
				if (typeof curProp === "function") {
					curProp = curProp(index, target);
				}
				if (typeof curProp === "number") {
					velocity = Number(curProp) || 0;
				} else if ((typeof curProp === "undefined" ? "undefined" : _typeof(curProp)) === "object" && !isNaN(curProp.velocity)) {
					velocity = Number(curProp.velocity);
				} else {
					tracker = tracker || VelocityTracker.getByTarget(target);
					if (tracker && tracker.isTrackingProp(p)) {
						velocity = tracker.getVelocity(p);
					} else {
						throw "ERROR: No velocity was defined in the throwProps tween of " + target + " property: " + p;
					}
				}
				change1 = _calculateChange(velocity, ease, duration, checkpoint);
				change2 = 0;
				isFunc = typeof target[p] === "function";
				curVal = isFunc ? target[p.indexOf("set") || typeof target["get" + p.substr(3)] !== "function" ? p : "get" + p.substr(3)]() : target[p];
				if ((typeof curProp === "undefined" ? "undefined" : _typeof(curProp)) === "object") {
					end = curVal + change1;
					if (curProp.end !== undefined) {
						curProp = _parseEnd(curProp, linkedProps && p in linkedProps ? linkedProps : end, curProp.max, curProp.min, p, value.radius);
						if (_recordEndMode) {
							value[p] = _extend(curProp, value[p], "end");
						}
					}
					if (curProp.max !== undefined && Number(curProp.max) < end) {
						if (preventOvershoot || curProp.preventOvershoot) {
							change1 = curProp.max - curVal;
						} else {
							change2 = curProp.max - curVal - change1;
						}
					} else if (curProp.min !== undefined && Number(curProp.min) > end) {
						if (preventOvershoot || curProp.preventOvershoot) {
							change1 = curProp.min - curVal;
						} else {
							change2 = curProp.min - curVal - change1;
						}
					}
				}
				this._overwriteProps[cnt] = p;
				this._props[cnt++] = { p: p, s: curVal, c1: change1, c2: change2, f: isFunc, r: false };
			}
		}
		return true;
	};

	p._kill = function (lookup) {
		var i = this._props.length;
		while (--i > -1) {
			if (lookup[this._props[i].p] != null) {
				this._props.splice(i, 1);
			}
		}
		return _TweenLite.TweenPlugin.prototype._kill.call(this, lookup);
	};

	p._mod = function (lookup) {
		var p = this._props,
		    i = p.length,
		    val;
		while (--i > -1) {
			val = lookup[p[i].p] || lookup.throwProps;
			if (typeof val === "function") {
				p[i].m = val;
			}
		}
	};

	p.setRatio = function (v) {
		var i = this._props.length,
		    cp,
		    val;
		while (--i > -1) {
			cp = this._props[i];
			val = cp.s + cp.c1 * v + cp.c2 * v * v;
			if (cp.m) {
				val = cp.m(val, this.target);
			} else if (v === 1) {
				val = (val * 10000 + (val < 0 ? -0.5 : 0.5) | 0) / 10000;
			}
			if (cp.f) {
				this.target[cp.p](val);
			} else {
				this.target[cp.p] = val;
			}
		}
	};

	_TweenLite.TweenPlugin.activate([ThrowPropsPlugin]);

	return ThrowPropsPlugin;
}, true);

_TweenLite._gsScope._gsDefine("utils.VelocityTracker", ["TweenLite"], function () {

	var _first,
	    _initted,
	    _time1,
	    _time2,
	    _capsExp = /([A-Z])/g,
	    _empty = {},
	    _doc = _TweenLite._gsScope.document,
	    _transforms = { x: 1, y: 1, z: 2, scale: 1, scaleX: 1, scaleY: 1, rotation: 1, rotationZ: 1, rotationX: 2, rotationY: 2, skewX: 1, skewY: 1, xPercent: 1, yPercent: 1 },
	    _getComputedStyle = _doc && _doc.defaultView ? _doc.defaultView.getComputedStyle : function () {},
	    _getStyle = function _getStyle(t, p, cs) {
		var rv = (t._gsTransform || _empty)[p];
		if (rv || rv === 0) {
			return rv;
		} else if (t.style[p]) {
			rv = t.style[p];
		} else if (cs = cs || _getComputedStyle(t, null)) {
			rv = cs[p] || cs.getPropertyValue(p) || cs.getPropertyValue(p.replace(_capsExp, "-$1").toLowerCase());
		} else if (t.currentStyle) {
			rv = t.currentStyle[p];
		}
		return parseFloat(rv) || 0;
	},
	    _ticker = _TweenLite.TweenLite.ticker,
	    VelocityProp = function VelocityProp(p, isFunc, next) {
		this.p = p;
		this.f = isFunc;
		this.v1 = this.v2 = 0;
		this.t1 = this.t2 = _ticker.time;
		this.css = false;
		this.type = "";
		this._prev = null;
		if (next) {
			this._next = next;
			next._prev = this;
		}
	},
	    _update = function _update() {
		var vt = _first,
		    t = _ticker.time,
		    val,
		    vp;

		if (t - _time1 >= 0.03) {
			_time2 = _time1;
			_time1 = t;
			while (vt) {
				vp = vt._firstVP;
				while (vp) {
					val = vp.css ? _getStyle(vt.target, vp.p) : vp.f ? vt.target[vp.p]() : vt.target[vp.p];
					if (val !== vp.v1 || t - vp.t1 > 0.15) {
						vp.v2 = vp.v1;
						vp.v1 = val;
						vp.t2 = vp.t1;
						vp.t1 = t;
					}
					vp = vp._next;
				}
				vt = vt._next;
			}
		}
	},
	    VelocityTracker = function VelocityTracker(target) {
		this._lookup = {};
		this.target = target;
		this.elem = target.style && target.nodeType ? true : false;
		if (!_initted) {
			_ticker.addEventListener("tick", _update, null, false, -100);
			_time1 = _time2 = _ticker.time;
			_initted = true;
		}
		if (_first) {
			this._next = _first;
			_first._prev = this;
		}
		_first = this;
	},
	    getByTarget = VelocityTracker.getByTarget = function (target) {
		var vt = _first;
		while (vt) {
			if (vt.target === target) {
				return vt;
			}
			vt = vt._next;
		}
	},
	    p = VelocityTracker.prototype;

	p.addProp = function (prop, type) {
		if (!this._lookup[prop]) {
			var t = this.target,
			    isFunc = typeof t[prop] === "function",
			    alt = isFunc ? this._altProp(prop) : prop,
			    vp = this._firstVP;
			this._firstVP = this._lookup[prop] = this._lookup[alt] = vp = new VelocityProp(alt !== prop && prop.indexOf("set") === 0 ? alt : prop, isFunc, vp);
			vp.css = this.elem && (this.target.style[vp.p] !== undefined || _transforms[vp.p]);
			if (vp.css && _transforms[vp.p] && !t._gsTransform) {
				_TweenLite.TweenLite.set(t, { x: "+=0", overwrite: false });
			}
			vp.type = type || vp.css && prop.indexOf("rotation") === 0 ? "deg" : "";
			vp.v1 = vp.v2 = vp.css ? _getStyle(t, vp.p) : isFunc ? t[vp.p]() : t[vp.p];
		}
	};

	p.removeProp = function (prop) {
		var vp = this._lookup[prop];
		if (vp) {
			if (vp._prev) {
				vp._prev._next = vp._next;
			} else if (vp === this._firstVP) {
				this._firstVP = vp._next;
			}
			if (vp._next) {
				vp._next._prev = vp._prev;
			}
			this._lookup[prop] = 0;
			if (vp.f) {
				this._lookup[this._altProp(prop)] = 0;
			}
		}
	};

	p.isTrackingProp = function (prop) {
		return this._lookup[prop] instanceof VelocityProp;
	};

	p.getVelocity = function (prop) {
		var vp = this._lookup[prop],
		    target = this.target,
		    val,
		    dif,
		    rotationCap;
		if (!vp) {
			throw "The velocity of " + prop + " is not being tracked.";
		}
		val = vp.css ? _getStyle(target, vp.p) : vp.f ? target[vp.p]() : target[vp.p];
		dif = val - vp.v2;
		if (vp.type === "rad" || vp.type === "deg") {
			rotationCap = vp.type === "rad" ? Math.PI * 2 : 360;
			dif = dif % rotationCap;
			if (dif !== dif % (rotationCap / 2)) {
				dif = dif < 0 ? dif + rotationCap : dif - rotationCap;
			}
		}
		return dif / (_ticker.time - vp.t2);
	};

	p._altProp = function (p) {
		var pre = p.substr(0, 3),
		    alt = (pre === "get" ? "set" : pre === "set" ? "get" : pre) + p.substr(3);
		return typeof this.target[alt] === "function" ? alt : p;
	};

	VelocityTracker.getByTarget = function (target) {
		var vt = _first;
		if (typeof target === "string") {
			target = _TweenLite.TweenLite.selector(target);
		}
		if (target.length && target !== window && target[0] && target[0].style && !target.nodeType) {
			target = target[0];
		}
		while (vt) {
			if (vt.target === target) {
				return vt;
			}
			vt = vt._next;
		}
	};

	VelocityTracker.track = function (target, props, types) {
		var vt = getByTarget(target),
		    a = props.split(","),
		    i = a.length;
		types = (types || "").split(",");
		if (!vt) {
			vt = new VelocityTracker(target);
		}
		while (--i > -1) {
			vt.addProp(a[i], types[i] || types[0]);
		}
		return vt;
	};

	VelocityTracker.untrack = function (target, props) {
		var vt = getByTarget(target),
		    a = (props || "").split(","),
		    i = a.length;
		if (!vt) {
			return;
		}
		while (--i > -1) {
			vt.removeProp(a[i]);
		}
		if (!vt._firstVP || !props) {
			if (vt._prev) {
				vt._prev._next = vt._next;
			} else if (vt === _first) {
				_first = vt._next;
			}
			if (vt._next) {
				vt._next._prev = vt._prev;
			}
		}
	};

	VelocityTracker.isTracking = function (target, prop) {
		var vt = getByTarget(target);
		return !vt ? false : !prop && vt._firstVP ? true : vt.isTrackingProp(prop);
	};

	return VelocityTracker;
}, true);

var ThrowPropsPlugin = exports.ThrowPropsPlugin = _TweenLite.globals.ThrowPropsPlugin;
exports.default = ThrowPropsPlugin;
var VelocityTracker = exports.VelocityTracker = _TweenLite.globals.com.greensock.utils.VelocityTracker;

/***/ }),
/* 266 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__266__;

/***/ }),
/* 267 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{ref:"container",staticClass:"faux-vertical-scroll"},[_c('div',{ref:"content",staticClass:"faux-vertical-scroll__content"},[_vm._t("default")],2),_vm._v(" "),_c('div',{ref:"bar",staticClass:"faux-vertical-scroll__bar",style:(_vm.barStyle())})])}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _filterCategory = __webpack_require__(269);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _filterCategory.FilterCategory;
  }
});

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FilterCategory = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _filterCategoryVue = __webpack_require__(270);

var _filterCategoryVue2 = _interopRequireDefault(_filterCategoryVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FilterCategory = function (_Vue) {
    _inherits(FilterCategory, _Vue);

    function FilterCategory() {
        _classCallCheck(this, FilterCategory);

        var _this = _possibleConstructorReturn(this, (FilterCategory.__proto__ || Object.getPrototypeOf(FilterCategory)).apply(this, arguments));

        _this.eventLabelFilterChange = 'label-filter-change';
        _this.filters = _this.labels.map(function (label) {
            return {
                checked: false,
                disabled: _this.isFilterDisabled(label),
                value: label
            };
        });
        return _this;
    }

    _createClass(FilterCategory, [{
        key: "watchActiveFilters",
        value: function watchActiveFilters() {
            var _this2 = this;

            this.filters = this.filters.map(function (filter) {
                return _extends({}, filter, {
                    disabled: _this2.isFilterDisabled(filter.value)
                });
            });
        }
    }, {
        key: "emitEvent",
        value: function emitEvent(eventName) {
            this.$emit(eventName, {
                category: this.category,
                filters: this.filters
            });
        }
    }, {
        key: "handleLabelFilterChange",
        value: function handleLabelFilterChange(filter) {
            this.updateFilter(filter);
            this.emitEvent(this.eventChange);
        }
    }, {
        key: "isFilterDisabled",
        value: function isFilterDisabled(label) {
            return !this.activeFilters.includes(label);
        }
    }, {
        key: "updateFilter",
        value: function updateFilter(labelFilter) {
            var foundIndex = this.filters.findIndex(function (filter) {
                return filter.value === labelFilter.value;
            });
            this.filters.splice(foundIndex, 1, labelFilter);
        }
    }, {
        key: "resetFilters",
        value: function resetFilters() {
            if (!this.filters.find(function (filter) {
                return filter.checked;
            })) {
                return;
            }
            this.filters = this.filters.map(function (filter) {
                return _extends({}, filter, {
                    checked: false
                });
            });
            this.emitEvent(this.eventChange);
        }
    }, {
        key: "category",
        get: function get() {
            return this.title.toLowerCase().replace(/\s+/g, '-');
        }
    }, {
        key: "checkResetFiltersState",
        get: function get() {
            var activeFilter = this.filters.find(function (filter) {
                return filter.checked;
            });
            return activeFilter ? '' : 'filter-category__reset--active';
        }
    }]);

    return FilterCategory;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Array, default: function _default() {
        return [];
    } }), __metadata("design:type", Object)], FilterCategory.prototype, "activeFilters", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Array, required: true }), __metadata("design:type", Object)], FilterCategory.prototype, "labels", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], FilterCategory.prototype, "eventChange", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], FilterCategory.prototype, "showAllLabel", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], FilterCategory.prototype, "title", void 0);
__decorate([(0, _vuePropertyDecorator.Watch)('activeFilters'), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], FilterCategory.prototype, "watchActiveFilters", null);
exports.FilterCategory = FilterCategory = __decorate([_filterCategoryVue2.default, (0, _vuePropertyDecorator.Component)({ name: 'FilterCategory' })], FilterCategory);
exports.FilterCategory = FilterCategory;

/***/ }),
/* 270 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"filter-category"},[_c('h4',{staticClass:"filter-category__title"},[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),_c('form',[_c('input',{staticClass:"filter-category__reset",class:_vm.checkResetFiltersState,attrs:{"type":"reset"},domProps:{"value":_vm.showAllLabel},on:{"click":_vm.resetFilters}}),_vm._v(" "),_c('ul',{staticClass:"filter-category__list"},_vm._l((_vm.labels),function(label,key){return _c('li',{key:key,staticClass:"filter-category__list-item"},[_c('label-filter',{attrs:{"disabled":_vm.isFilterDisabled(label),"eventChange":_vm.eventLabelFilterChange,"label":label,"name":_vm.showAllLabel,"value":label},on:_vm._d({},[_vm.eventLabelFilterChange,_vm.handleLabelFilterChange])})],1)}),0)])])}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _flyout = __webpack_require__(272);

var _flyout2 = _interopRequireDefault(_flyout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _flyout2.default;

/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _viewport = __webpack_require__(1);

var _viewport2 = _interopRequireDefault(_viewport);

var _flyoutVue = __webpack_require__(273);

var _flyoutVue2 = _interopRequireDefault(_flyoutVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Flyout = function (_Vue) {
    _inherits(Flyout, _Vue);

    function Flyout() {
        _classCallCheck(this, Flyout);

        var _this = _possibleConstructorReturn(this, (Flyout.__proto__ || Object.getPrototypeOf(Flyout)).apply(this, arguments));

        _this.sectionIndex = 0;
        _this.viewportUtil = new _viewport2.default();
        return _this;
    }

    _createClass(Flyout, [{
        key: "open",
        value: function open() {
            this.$emit('open');
        }
    }, {
        key: "close",
        value: function close() {
            this.reset();
            this.$emit('close');
        }
    }, {
        key: "backToParent",
        value: function backToParent() {
            this.$emit('main');
            this.close();
        }
    }, {
        key: "reset",
        value: function reset() {
            this.sectionIndex = 0;

            this.flyoutSections.forEach(function (s) {
                return s && s.reset && s.reset();
            });
        }
    }, {
        key: "selectFirstLink",
        value: function () {
            var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                this.reset();
                                _context.next = 3;
                                return this.$nextTick();

                            case 3:
                                this.flyoutSections[this.sectionIndex].selectFirstLink();

                            case 4:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function selectFirstLink() {
                return _ref.apply(this, arguments);
            }

            return selectFirstLink;
        }()
    }, {
        key: "selectNextLink",
        value: function selectNextLink(e) {
            if (this.disableKeyboardEvents) {
                return;
            }
            e.preventDefault();

            var hasNext = this.flyoutSections[this.sectionIndex].selectNextLink();
            if (!hasNext) {
                this.selectNextSection();
            }
        }
    }, {
        key: "selectPrevLink",
        value: function selectPrevLink(e) {
            if (this.disableKeyboardEvents) {
                return;
            }
            if (typeof e !== 'undefined') {
                e.preventDefault();
            }

            var hasPrev = this.flyoutSections[this.sectionIndex].selectPrevLink();
            if (!hasPrev) {
                this.selectPrevSection();
            }
        }
    }, {
        key: "selectNextSection",
        value: function selectNextSection(e, keepIndex) {
            if (this.disableKeyboardEvents) {
                return;
            }
            if (typeof e !== 'undefined') {
                e.preventDefault();
            }
            if (this.sectionIndex >= this.flyoutSections.length - 1) {
                this.backToParent();
                return;
            }
            var currentSection = this.sectionIndex;

            var currentLinkIndex = this.flyoutSections[this.sectionIndex].focusIndex;
            this.sectionIndex = this.sectionIndex + 1;
            if (keepIndex) {
                this.flyoutSections[this.sectionIndex].setFocusIndex(currentLinkIndex);
            } else {
                this.flyoutSections[this.sectionIndex].selectFirstLink();
            }

            this.flyoutSections[currentSection].reset();
        }
    }, {
        key: "selectPrevSection",
        value: function selectPrevSection(e, keepIndex) {
            if (this.disableKeyboardEvents) {
                return;
            }
            if (typeof e !== 'undefined') {
                e.preventDefault();
            }
            if (this.sectionIndex <= 0) {
                this.backToParent();
                return;
            }
            var currentSection = this.sectionIndex;

            var currentLinkIndex = this.flyoutSections[this.sectionIndex].focusIndex;
            this.sectionIndex = this.sectionIndex - 1;
            if (keepIndex) {
                this.flyoutSections[this.sectionIndex].setFocusIndex(currentLinkIndex);
            } else {
                this.flyoutSections[this.sectionIndex].selectLastLink();
            }

            this.flyoutSections[currentSection].reset();
        }
    }, {
        key: "flyoutSections",
        get: function get() {
            return Array.isArray(this.$refs.items) ? this.$refs.items : [this.$refs.items];
        }
    }]);

    return Flyout;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Array, required: true }), __metadata("design:type", Array)], Flyout.prototype, "items", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Boolean, required: false }), __metadata("design:type", Boolean)], Flyout.prototype, "isCompact", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Boolean, required: false, default: false }), __metadata("design:type", Boolean)], Flyout.prototype, "disableKeyboardEvents", void 0);
Flyout = __decorate([_flyoutVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'flyout'
})], Flyout);
exports.default = Flyout;

/***/ }),
/* 273 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.items && _vm.items.length > 0)?_c('ul',{directives:[{name:"show",rawName:"v-show",value:(_vm.isCompact || !_vm.viewportUtil.isResizing),expression:"isCompact || !viewportUtil.isResizing"}],staticClass:"main-nav__flyout",on:{"keydown":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"])){ return null; }return _vm.selectNextLink($event)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"tab",9,$event.key,"Tab")){ return null; }if($event.ctrlKey||$event.shiftKey||$event.altKey||$event.metaKey){ return null; }return _vm.selectNextLink($event)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"up",38,$event.key,["Up","ArrowUp"])){ return null; }return _vm.selectPrevLink($event)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"tab",9,$event.key,"Tab")){ return null; }if(!$event.shiftKey){ return null; }if($event.ctrlKey||$event.altKey||$event.metaKey){ return null; }return _vm.selectPrevLink($event)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"right",39,$event.key,["Right","ArrowRight"])){ return null; }if('button' in $event && $event.button !== 2){ return null; }return _vm.selectNextSection($event, true)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"left",37,$event.key,["Left","ArrowLeft"])){ return null; }if('button' in $event && $event.button !== 0){ return null; }return _vm.selectPrevSection($event, true)}],"mouseenter":function($event){$event.stopPropagation();return _vm.open($event)}}},_vm._l((_vm.items),function(item,key){return (item.items && item.items.length)?_c('flyout-section',_vm._b({key:key,ref:"items",refInFor:true,attrs:{"is-compact":_vm.isCompact,"itemId":("flyout_title_" + _vm.uniqId + "_" + key)},on:{"close":function($event){return _vm.$emit('close')}}},'flyout-section',item,false)):_vm._e()}),1):_vm._e()}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _flyoutSection = __webpack_require__(275);

var _flyoutSection2 = _interopRequireDefault(_flyoutSection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _flyoutSection2.default;

/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _flyoutSectionVue = __webpack_require__(276);

var _flyoutSectionVue2 = _interopRequireDefault(_flyoutSectionVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Flyout = function (_Vue) {
    _inherits(Flyout, _Vue);

    function Flyout() {
        _classCallCheck(this, Flyout);

        var _this = _possibleConstructorReturn(this, (Flyout.__proto__ || Object.getPrototypeOf(Flyout)).apply(this, arguments));

        _this.isExpanded = false;
        _this.focusIndex = null;
        _this.columnClassDouble = 'flyout__section--2-columns';
        _this.columnClassTriple = 'flyout__section--3-columns';
        return _this;
    }

    _createClass(Flyout, [{
        key: "toggleExpanded",
        value: function toggleExpanded() {
            this.isExpanded = !this.isExpanded;
        }
    }, {
        key: "selectFirstLink",
        value: function selectFirstLink() {
            this.focusIndex = 0;
        }
    }, {
        key: "selectLastLink",
        value: function selectLastLink() {
            this.focusIndex = this.focusIndex === null ? this.focusableItems.length - 1 : this.focusIndex - 1;
        }
    }, {
        key: "selectNextLink",
        value: function selectNextLink() {
            if (this.focusIndex === null) return false;
            if (this.focusIndex >= this.focusableItems.length - 1) {
                return false;
            }
            this.focusIndex = this.focusIndex + 1;
            return true;
        }
    }, {
        key: "selectPrevLink",
        value: function selectPrevLink() {
            if (this.focusIndex === null) return false;
            if (this.focusIndex <= 0) {
                return false;
            }
            this.focusIndex = this.focusIndex - 1;
            return true;
        }
    }, {
        key: "setFocusIndex",
        value: function setFocusIndex(index) {
            if (index <= 0) {
                this.focusIndex = 0;
            } else if (index >= this.focusableItems.length) {
                this.focusIndex = this.focusableItems.length - 1;
            } else {
                this.focusIndex = index;
            }
        }
    }, {
        key: "reset",
        value: function reset() {
            this.focusIndex = null;
        }
    }, {
        key: "onFocusIndex",
        value: function onFocusIndex(newVal) {
            var focusComponent = this.focusableItems[newVal];
            if (typeof focusComponent === 'undefined') {
                return;
            }

            var focusElement = focusComponent.$el || focusComponent;
            if (focusElement.focus) {
                focusElement.focus();
            }
        }
    }, {
        key: "hasItems",
        get: function get() {
            return this.items;
        }
    }, {
        key: "focusableItems",
        get: function get() {
            var links = Array.isArray(this.$refs.firstFocusableLinks) ? this.$refs.firstFocusableLinks : [this.$refs.firstFocusableLinks];
            var otherFocusable = this.$refs.focusable;
            if (otherFocusable) {
                if (Array.isArray(otherFocusable)) {
                    links.push.apply(links, _toConsumableArray(otherFocusable));
                } else {
                    links.push(otherFocusable);
                }
            }
            if (this.$refs.bottomLink) {
                links.push(this.$refs.bottomLink);
            }
            return links;
        }
    }, {
        key: "moreThanMaxItems",
        get: function get() {
            if (!this.items || !this.maxItemsCol) return false;
            return this.items.length > this.maxItemsCol;
        }
    }, {
        key: "lessThanDoubleMaxItems",
        get: function get() {
            if (!this.items || !this.maxItemsCol) return false;
            return this.items.length <= this.maxItemsCol * 2;
        }
    }, {
        key: "moreThanDoubleMaxItems",
        get: function get() {
            if (!this.items || !this.maxItemsCol) return false;
            return this.items.length > this.maxItemsCol * 2;
        }
    }, {
        key: "sectionClass",
        get: function get() {
            if (this.hasItems && this.moreThanMaxItems && this.lessThanDoubleMaxItems) {
                return this.columnClassDouble;
            }
            if (this.hasItems && this.moreThanDoubleMaxItems) {
                return this.columnClassTriple;
            }
            return '';
        }
    }, {
        key: "flyoutToggleIsVisible",
        get: function get() {
            if (!this.items || !this.maxVisible) return false;
            return this.isCompact && this.items.length > this.maxVisible;
        }
    }]);

    return Flyout;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", String)], Flyout.prototype, "label", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Array, required: false }), __metadata("design:type", Array)], Flyout.prototype, "items", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object, required: false }), __metadata("design:type", Object)], Flyout.prototype, "bottomItem", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Boolean, required: false }), __metadata("design:type", Boolean)], Flyout.prototype, "isCompact", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Number, required: false, default: 3 }), __metadata("design:type", Number)], Flyout.prototype, "maxVisible", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Number, required: false, default: 6 }), __metadata("design:type", Number)], Flyout.prototype, "maxItemsCol", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: false, default: function _default() {
        return "flyout_title_" + Math.floor(Math.random() * 10000);
    } }), __metadata("design:type", String)], Flyout.prototype, "itemId", void 0);
__decorate([(0, _vuePropertyDecorator.Watch)('focusIndex'), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], Flyout.prototype, "onFocusIndex", null);
Flyout = __decorate([_flyoutSectionVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'flyout-section'
})], Flyout);
exports.default = Flyout;

/***/ }),
/* 276 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"flyout__section",class:_vm.sectionClass},[(_vm.label)?_c('strong',{staticClass:"flyout__title",attrs:{"id":_vm.itemId}},[_vm._v(_vm._s(_vm.label))]):_vm._e(),_vm._v(" "),_c('ul',{staticClass:"flyout__list",attrs:{"aria-labelledby":_vm.itemId,"aria-haspopup":_vm.items.length > _vm.maxVisible,"aria-expanded":!_vm.isCompact || _vm.isExpanded}},[_vm._l((_vm.items),function(item,index){return (index < _vm.maxVisible)?_c('li',{staticClass:"flyout__list-item"},[_c('content-link',{ref:"firstFocusableLinks",refInFor:true,staticClass:"flyout__link link",attrs:{"url":item.url,"label":item.label},nativeOn:{"click":function($event){return _vm.$emit('close')}}})],1):_vm._e()}),_vm._v(" "),_c('li',{directives:[{name:"show",rawName:"v-show",value:(_vm.flyoutToggleIsVisible && ! _vm.isExpanded),expression:"flyoutToggleIsVisible && ! isExpanded"}],staticClass:"flyout__list-item"},[_c('content-toggle',{ref:_vm.flyoutToggleIsVisible && ! _vm.isExpanded ? 'focusable' : '',staticClass:"flyout__toggle",attrs:{"toggle-state":false,"aria-hidden":"true"},on:{"toggle":_vm.toggleExpanded}})],1),_vm._v(" "),_vm._l((_vm.items),function(item,index){return (index >= _vm.maxVisible)?_c('li',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isCompact || _vm.isExpanded),expression:"!isCompact || isExpanded"}],staticClass:"flyout__list-item"},[_c('content-link',{ref:"focusable",refInFor:true,staticClass:"flyout__link link",attrs:{"url":item.url,"label":item.label},nativeOn:{"click":function($event){return _vm.$emit('close')}}})],1):_vm._e()}),_vm._v(" "),_c('li',{directives:[{name:"show",rawName:"v-show",value:(_vm.flyoutToggleIsVisible && _vm.isExpanded),expression:"flyoutToggleIsVisible && isExpanded"}],staticClass:"flyout__list-item"},[_c('content-toggle',{ref:"flyoutToggleIsVisible && isExpanded ? 'focusable' : ''",staticClass:"flyout__toggle",attrs:{"toggle-state":true,"aria-hidden":"true"},on:{"toggle":_vm.toggleExpanded}})],1)],2),_vm._v(" "),(_vm.bottomItem)?[_c('content-link',{ref:"bottomLink",staticClass:"link flyout__link--cta-mini",attrs:{"url":_vm.bottomItem.url,"label":_vm.bottomItem.label},nativeOn:{"click":function($event){return _vm.$emit('close')}}})]:_vm._e()],2)}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _footerBlock = __webpack_require__(278);

var _footerBlock2 = _interopRequireDefault(_footerBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _footerBlock2.default;

/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _footerBlockVue = __webpack_require__(279);

var _footerBlockVue2 = _interopRequireDefault(_footerBlockVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterBlock = function (_Vue) {
    _inherits(FooterBlock, _Vue);

    function FooterBlock() {
        _classCallCheck(this, FooterBlock);

        return _possibleConstructorReturn(this, (FooterBlock.__proto__ || Object.getPrototypeOf(FooterBlock)).apply(this, arguments));
    }

    return FooterBlock;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object, required: false }), __metadata("design:type", Object)], FooterBlock.prototype, "ctas", void 0);
FooterBlock = __decorate([_footerBlockVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'FooterBlock'
})], FooterBlock);
exports.default = FooterBlock;

/***/ }),
/* 279 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"footer-block"},[(_vm.ctas)?_c('cta-block',{attrs:{"ctas":_vm.ctas.ctas,"styleContentButton":"button","mod":"footer","block":"overview"}}):_vm._e()],1)}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _footerNavigationCategory = __webpack_require__(281);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _footerNavigationCategory.FooterNavigationCategory;
  }
});

/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FooterNavigationCategory = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _footerNavigationCategoryVue = __webpack_require__(282);

var _footerNavigationCategoryVue2 = _interopRequireDefault(_footerNavigationCategoryVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterNavigationCategory = function (_Vue) {
    _inherits(FooterNavigationCategory, _Vue);

    function FooterNavigationCategory() {
        _classCallCheck(this, FooterNavigationCategory);

        return _possibleConstructorReturn(this, (FooterNavigationCategory.__proto__ || Object.getPrototypeOf(FooterNavigationCategory)).apply(this, arguments));
    }

    return FooterNavigationCategory;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], FooterNavigationCategory.prototype, "label", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Array, required: false }), __metadata("design:type", Object)], FooterNavigationCategory.prototype, "items", void 0);
exports.FooterNavigationCategory = FooterNavigationCategory = __decorate([_footerNavigationCategoryVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'FooterNavigationCategory'
})], FooterNavigationCategory);
exports.FooterNavigationCategory = FooterNavigationCategory;

/***/ }),
/* 282 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.items.length)?_c('div',{staticClass:"footer-navigation-category__column"},[_c('h3',{staticClass:"footer-navigation-category__title"},[_vm._v(_vm._s(_vm.label))]),_vm._v(" "),(_vm.items && _vm.items.length)?_c('ul',{staticClass:"footer-navigation-category__list"},_vm._l((_vm.items),function(link){return _c('li',{staticClass:"footer-navigation-category__item"},[_c('content-link',_vm._b({staticClass:"footer-navigation-category__link link link--reversed"},'content-link',link,false))],1)}),0):_vm._e()]):_vm._e()}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _headerBlock = __webpack_require__(284);

var _headerBlock2 = _interopRequireDefault(_headerBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _headerBlock2.default;

/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderBlock = function (_Vue) {
    _inherits(HeaderBlock, _Vue);

    function HeaderBlock() {
        _classCallCheck(this, HeaderBlock);

        return _possibleConstructorReturn(this, (HeaderBlock.__proto__ || Object.getPrototypeOf(HeaderBlock)).apply(this, arguments));
    }

    return HeaderBlock;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: false }), __metadata("design:type", String)], HeaderBlock.prototype, "title", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: false }), __metadata("design:type", String)], HeaderBlock.prototype, "subtitle", void 0);
HeaderBlock = __decorate([(0, _vuePropertyDecorator.Component)({
    name: 'HeaderBlock',
    template: __webpack_require__(285)
})], HeaderBlock);
exports.default = HeaderBlock;

/***/ }),
/* 285 */
/***/ (function(module, exports) {

module.exports = "<header class=\"header-block\">\n    <slot>\n        <h2 class=\"header-block__title\" v-if=\"title\">{{ title }}</h2>\n        <p class=\"header-block__subtitle\" v-if=\"subtitle\">{{ subtitle }}</p>\n    </slot>\n</header>\n";

/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _heroHeading = __webpack_require__(287);

var _heroHeading2 = _interopRequireDefault(_heroHeading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _heroHeading2.default;

/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeroHeading = function (_Vue) {
    _inherits(HeroHeading, _Vue);

    function HeroHeading() {
        _classCallCheck(this, HeroHeading);

        return _possibleConstructorReturn(this, (HeroHeading.__proto__ || Object.getPrototypeOf(HeroHeading)).apply(this, arguments));
    }

    return HeroHeading;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", String)], HeroHeading.prototype, "title", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: false }), __metadata("design:type", String)], HeroHeading.prototype, "subtitle", void 0);
HeroHeading = __decorate([(0, _vuePropertyDecorator.Component)({
    name: 'HeroHeading',
    template: __webpack_require__(288)
})], HeroHeading);
exports.default = HeroHeading;

/***/ }),
/* 288 */
/***/ (function(module, exports) {

module.exports = "<div>\n    <h1 class='hero__title header-block__title--hero'>{{ title }}</h1>\n    <h2 class=\"hero__subtitle header-block__subtitle--hero\" v-if=\"subtitle\">{{ subtitle }}</h2>\n</div>\n";

/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _iconButton = __webpack_require__(290);

var _iconButton2 = _interopRequireDefault(_iconButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _iconButton2.default;

/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _iconButtonVue = __webpack_require__(291);

var _iconButtonVue2 = _interopRequireDefault(_iconButtonVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IconButton = function (_Vue) {
    _inherits(IconButton, _Vue);

    function IconButton() {
        _classCallCheck(this, IconButton);

        return _possibleConstructorReturn(this, (IconButton.__proto__ || Object.getPrototypeOf(IconButton)).apply(this, arguments));
    }

    _createClass(IconButton, [{
        key: "focus",
        value: function focus() {
            this.$el.focus();
        }
    }, {
        key: "hasDefaultSlot",
        get: function get() {
            return !!this.$slots.default;
        }
    }]);

    return IconButton;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String }), __metadata("design:type", String)], IconButton.prototype, "buttonClass", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, default: '' }), __metadata("design:type", String)], IconButton.prototype, "buttonAriaLabel", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String }), __metadata("design:type", String)], IconButton.prototype, "iconName", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Boolean, default: false }), __metadata("design:type", Boolean)], IconButton.prototype, "disabled", void 0);
IconButton = __decorate([_iconButtonVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'icon-button'
})], IconButton);
exports.default = IconButton;

/***/ }),
/* 291 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"icon-button",class:_vm.buttonClass,attrs:{"aria-label":_vm.buttonAriaLabel,"aria-disabled":_vm.disabled,"role":"button","tabindex":"0"},on:{"click":function($event){return _vm.$emit('click')},"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.$emit('click')}}},[_c('icon',{staticClass:"icon-button__icon",attrs:{"icon-name":_vm.iconName}}),_vm._v(" "),(_vm.hasDefaultSlot)?_c('span',{staticClass:"icon-button__label"},[_vm._t("default")],2):_vm._e()],1)}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _listSection = __webpack_require__(293);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _listSection.ListSection;
  }
});

/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ListSection = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _listSectionVue = __webpack_require__(294);

var _listSectionVue2 = _interopRequireDefault(_listSectionVue);

var _events = __webpack_require__(5);

var _events2 = _interopRequireDefault(_events);

var _viewport = __webpack_require__(1);

var _viewport2 = _interopRequireDefault(_viewport);

var _stepRowAnimation = __webpack_require__(9);

var _getFiltersInCardCollection = __webpack_require__(295);

var _getFilteredCardsFromActiveFilterCategories = __webpack_require__(296);

var _updateActiveFilterCategories = __webpack_require__(298);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListSection = function (_Mixins) {
    _inherits(ListSection, _Mixins);

    function ListSection() {
        _classCallCheck(this, ListSection);

        var _this = _possibleConstructorReturn(this, (ListSection.__proto__ || Object.getPrototypeOf(ListSection)).apply(this, arguments));

        _this.activeFilterCategories = [];
        _this.chunks = [];
        _this.chunkSize = 3;
        _this.chunkIndex = 0;
        _this.expanded = false;
        _this.eventFilterCategoryChange = 'filter-category-change';
        _this.showMax = 6;
        _this.viewportUtil = new _viewport2.default();
        _this.visibleChunks = 0;
        _this.visibleTooltip = false;
        return _this;
    }

    _createClass(ListSection, [{
        key: "beforeDestroy",
        value: function beforeDestroy() {
            this.viewportUtil.removeResizeHandler(this.handleResize);
        }
    }, {
        key: "mounted",
        value: function mounted() {
            this.viewportUtil.addResizeHandler(this.handleResize);
            this.viewportUtil.triggerResize();
            this.handleResize();
            this.createChunks();
        }
    }, {
        key: "createChunks",
        value: function createChunks() {
            this.chunkIndex = 0;
            this.chunks = [];
            while (this.chunkIndex < this.filteredCards.length) {
                this.chunks.push(this.filteredCards.slice(this.chunkIndex, this.chunkSize + this.chunkIndex));
                this.chunkIndex += this.chunkSize;
            }
        }
    }, {
        key: "handleFilterCategoryChange",
        value: function handleFilterCategoryChange(changedFilterCategory) {
            this.activeFilterCategories = (0, _updateActiveFilterCategories.updateActiveFilterCategories)(this.activeFilterCategories, changedFilterCategory);
            this.createChunks();
        }
    }, {
        key: "handleResize",
        value: function handleResize() {
            var oldChunkSize = this.chunkSize;
            if (this.viewportUtil.isMobile) {
                this.showMax = this.limit && typeof this.limit.smallScreen === 'number' ? this.limit.smallScreen : Number.MAX_SAFE_INTEGER;
                this.chunkSize = 1;
            } else if (this.viewportUtil.isMobileXl) {
                this.showMax = this.limit && typeof this.limit.smallScreen === 'number' ? this.limit.smallScreen : Number.MAX_SAFE_INTEGER;
                this.chunkSize = 2;
            } else {
                this.showMax = this.limit && typeof this.limit.largeScreen === 'number' ? this.limit.largeScreen : Number.MAX_SAFE_INTEGER;
                this.chunkSize = 3;
            }
            if (oldChunkSize !== this.chunkSize) {
                this.createChunks();
            }
            if (!this.expanded) {
                this.visibleChunks = Math.ceil(this.showMax / this.chunkSize);
            }
        }
    }, {
        key: "hideTooltip",
        value: function hideTooltip() {
            this.visibleTooltip = false;
        }
    }, {
        key: "showAll",
        value: function showAll() {
            this.expanded = true;
            this.visibleChunks = Number.MAX_SAFE_INTEGER;
        }
    }, {
        key: "showButton",
        value: function showButton() {
            if (this.limit && !this.limit.expandAmount && this.expanded) {
                return false;
            }
            if (this.expanded && this.chunks.length <= this.visibleChunks) {
                return false;
            }
            return !(this.chunks.length <= this.visibleChunks);
        }
    }, {
        key: "showChunk",
        value: function showChunk() {
            this.expanded = true;
            if (this.limit && this.limit.expandAmount) {
                this.visibleChunks = this.visibleChunks + Math.ceil(this.limit.expandAmount / this.chunkSize);
            }
        }
    }, {
        key: "showLabel",
        value: function showLabel() {
            if (this.limit && this.limit.expand && this.limit.expandAmount) {
                var label = this.limit.expand.label;

                return label;
            }
            if (this.limit && this.limit.expand && !this.limit.expandAmount) {
                var _label = this.limit.expand.label;

                return _label + " (" + this.filteredCards.length + ")";
            }
            return '';
        }
    }, {
        key: "toggleTooltip",
        value: function toggleTooltip() {
            this.visibleTooltip = !this.visibleTooltip;
        }
    }, {
        key: "tooltipVisible",
        value: function tooltipVisible() {
            return this.visibleTooltip;
        }
    }, {
        key: "triggerEventClick",
        value: function triggerEventClick() {
            if (this.limit && this.limit.expand && this.limit.expand.clickEvent) {
                try {
                    this.$emitPublic(_events2.default.click, this.clickEventData);
                } catch (e) {
                    console.warn(e);
                }
            }
        }
    }, {
        key: "activeFilters",
        get: function get() {
            return (0, _getFiltersInCardCollection.getFiltersInCardCollection)(this.filteredCards);
        }
    }, {
        key: "clickEventData",
        get: function get() {
            if (this.limit && this.limit.expand && this.limit.expand.clickEvent) {
                var clickEvent = this.limit.expand.clickEvent;

                return {
                    dataType: clickEvent.name,
                    data: _extends({}, clickEvent.data, {
                        pageSlug: this.$route.fullPath
                    })
                };
            }
            return null;
        }
    }, {
        key: "filteredCards",
        get: function get() {
            if (!this.activeFilterCategories.length) {
                return this.cards;
            }
            return (0, _getFilteredCardsFromActiveFilterCategories.getFilteredCardsFromActiveFilterCategories)(this.cards, this.activeFilterCategories);
        }
    }]);

    return ListSection;
}((0, _vuePropertyDecorator.Mixins)(_stepRowAnimation.StepRowAnimation));
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Array, required: true }), __metadata("design:type", Object)], ListSection.prototype, "cards", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Array }), __metadata("design:type", Object)], ListSection.prototype, "filterCategories", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object }), __metadata("design:type", Object)], ListSection.prototype, "limit", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String }), __metadata("design:type", Object)], ListSection.prototype, "title", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object }), __metadata("design:type", Object)], ListSection.prototype, "tooltip", void 0);
__decorate([(0, _vuePropertyDecorator.Watch)('cards'), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], ListSection.prototype, "createChunks", null);
exports.ListSection = ListSection = __decorate([_listSectionVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'ListSection'
})], ListSection);
exports.ListSection = ListSection;

/***/ }),
/* 294 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"list-section"},[(_vm.title)?[_c('header',{staticClass:"list-section__header"},[_c('h3',{staticClass:"list-section__title"},[_vm._v(_vm._s(_vm.title)+"\n                "),_c('span',{staticClass:"list-section__count"},[_vm._v("("+_vm._s(_vm.cards.length)+")")]),_vm._v(" "),(_vm.tooltip)?[_c('transition',{attrs:{"name":"tooltip"}},[_c('tooltip',_vm._b({directives:[{name:"show",rawName:"v-show",value:(_vm.visibleTooltip),expression:"visibleTooltip"}],staticClass:"section-tooltip",attrs:{"block":"list-section","id":("tooltip_" + _vm.uniqId)}},'tooltip',_vm.tooltip,false),[_vm._v("\n                            "+_vm._s(_vm.tooltip.description)+"\n                        ")])],1)]:_vm._e()],2),_vm._v(" "),(_vm.tooltip)?[(_vm.tooltip)?_c('action-button',{staticClass:"link list-section__info-link",attrs:{"icon":_vm.tooltip.icon,"mod":"reversed","role":"button","aria-describedby":("tooltip_" + _vm.uniqId)},nativeOn:{"click":function($event){$event.preventDefault();return _vm.toggleTooltip($event)},"blur":function($event){$event.preventDefault();return _vm.hideTooltip($event)}}},[_vm._v("\n                    "+_vm._s(_vm.tooltip.label)+"\n                ")]):_vm._e()]:_vm._e()],2)]:_vm._e(),_vm._v(" "),_vm._l((_vm.filterCategories),function(filterCategory){return [_c('filter-category',_vm._b({attrs:{"activeFilters":_vm.activeFilters,"eventChange":_vm.eventFilterCategoryChange},on:_vm._d({},[_vm.eventFilterCategoryChange,_vm.handleFilterCategoryChange])},'filter-category',filterCategory,false))]}),_vm._v(" "),_c('transition-group',{staticClass:"list-section__container",attrs:{"tag":"ul"},on:{"before-enter":_vm.beforeEnter,"enter":_vm.enter}},_vm._l((_vm.chunks),function(chunk,index){return _c('li',{directives:[{name:"show",rawName:"v-show",value:(index < _vm.visibleChunks),expression:"index < visibleChunks"}],key:index,staticClass:"list-section__row",class:chunk.length % 2 === 0 && 'list-section__row--even'},_vm._l((chunk),function(card,i){return (chunk && chunk.length)?_c(card.type,_vm._b({key:i,tag:"component",staticClass:"list-section__item"},'component',card,false)):_vm._e()}),1)}),0),_vm._v(" "),_c('footer',{staticClass:"list-section__footer"},[_c('button',{directives:[{name:"show",rawName:"v-show",value:(_vm.showButton()),expression:"showButton()"}],staticClass:"button--secondary list-section__footer__button",on:{"click":function($event){_vm.limit && _vm.limit.expandAmount ? _vm.showChunk() : _vm.showAll()}}},[_vm._v("\n            "+_vm._s(_vm.showLabel())+"\n        ")])])],2)}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getFiltersInCardCollection = getFiltersInCardCollection;
function getFiltersInCardCollection(cards) {
    return cards.filter(function (card) {
        return card.labels;
    }).reduce(function (acc, card) {
        card.labels.forEach(function (label) {
            if (!acc.includes(label)) {
                acc.push(label);
            }
        });
        return acc;
    }, []);
}

/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getFilteredCardsFromActiveFilterCategories = getFilteredCardsFromActiveFilterCategories;

var _getActiveFiltersForCategory = __webpack_require__(297);

function getFilteredCardsFromCategory(cards, activeCategory, filters) {
    return cards.filter(function (card) {
        return card.labels;
    }).reduce(function (acc, card) {
        if (card.labels.some(function (label) {
            return filters.includes(label);
        })) {
            acc.push(card);
        }
        return acc;
    }, []);
}
function getFilteredCardsFromActiveFilterCategories(cards, activeFilterCategories) {
    var allCards = [];
    var filters = [];
    var activeFilters = [];
    activeFilterCategories.forEach(function (activeCategory) {
        if (allCards.length === 0) {
            filters = (0, _getActiveFiltersForCategory.getActiveFiltersForCategory)(activeCategory);
            allCards = getFilteredCardsFromCategory(cards, activeCategory, filters);
        } else {
            activeFilters = (0, _getActiveFiltersForCategory.getActiveFiltersForCategory)(activeCategory);
            allCards = getFilteredCardsFromCategory(allCards, activeCategory, activeFilters);
        }
    });
    return allCards.filter(function (card, index) {
        return allCards.indexOf(card) === index;
    });
}

/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getActiveFiltersForCategory = getActiveFiltersForCategory;
function getActiveFiltersForCategory(filterCategory) {
    return filterCategory.filters.reduce(function (acc, filter) {
        if (filter.checked && !filter.disabled) {
            acc.push(filter.value);
        }
        return acc;
    }, []);
}

/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.updateActiveFilterCategories = updateActiveFilterCategories;

var _findIndexInActiveFilterCategories = __webpack_require__(299);

var _isFilterCategoryActive = __webpack_require__(300);

function addActiveFilterCategory(activeFilterCategories, changedFilterCategory) {
    activeFilterCategories.push(changedFilterCategory);
    return activeFilterCategories;
}
function removeActiveFilterCategory(activeFilterCategories, indexInActiveFilterCategories) {
    activeFilterCategories.splice(indexInActiveFilterCategories, 1);
    return activeFilterCategories;
}
function updateActiveFilterCategory(activeFilterCategories, changedFilterCategory, indexInActiveFilterCategories) {
    activeFilterCategories.splice(indexInActiveFilterCategories, 1, changedFilterCategory);
    return activeFilterCategories;
}
function updateActiveFilterCategories(activeFilterCategories, changedFilterCategory) {
    var indexInActiveFilterCategories = (0, _findIndexInActiveFilterCategories.findIndexInActiveFilterCategories)(activeFilterCategories, changedFilterCategory);
    var filterCategoryActive = (0, _isFilterCategoryActive.isFilterCategoryActive)(changedFilterCategory);
    if (indexInActiveFilterCategories === -1 && filterCategoryActive) {
        return addActiveFilterCategory(activeFilterCategories, changedFilterCategory);
    }
    if (!filterCategoryActive) {
        return removeActiveFilterCategory(activeFilterCategories, indexInActiveFilterCategories);
    }
    return updateActiveFilterCategory(activeFilterCategories, changedFilterCategory, indexInActiveFilterCategories);
}

/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.findIndexInActiveFilterCategories = findIndexInActiveFilterCategories;
function findIndexInActiveFilterCategories(activeFilterCategories, changedFilterCategory) {
    return activeFilterCategories.findIndex(function (activeFilterCategory) {
        return activeFilterCategory.category === changedFilterCategory.category;
    });
}

/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isFilterCategoryActive = isFilterCategoryActive;
function isFilterCategoryActive(filterCategory) {
    return filterCategory.filters.find(function (filter) {
        return filter.checked;
    }) !== undefined;
}

/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _component = __webpack_require__(302);

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _component2.default;

/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _templateVue = __webpack_require__(303);

var _templateVue2 = _interopRequireDefault(_templateVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListUnordered = function (_Vue) {
    _inherits(ListUnordered, _Vue);

    function ListUnordered() {
        _classCallCheck(this, ListUnordered);

        return _possibleConstructorReturn(this, (ListUnordered.__proto__ || Object.getPrototypeOf(ListUnordered)).apply(this, arguments));
    }

    return ListUnordered;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object, required: true }), __metadata("design:type", Object)], ListUnordered.prototype, "listItems", void 0);
ListUnordered = __decorate([_templateVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'ListUnordered'
})], ListUnordered);
exports.default = ListUnordered;

/***/ }),
/* 303 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"list"},[_vm._l((_vm.listItems.items),function(item,index){return [(!item.item)?[_c(_vm.listItems.type,{key:index,tag:"component",attrs:{"item":item}})]:(_vm.listItems.type)?[_c(_vm.listItems.type,_vm._b({key:index,tag:"component"},'component',item,false))]:(item.type)?[_c(item.type,_vm._b({key:index,tag:"component"},'component',item,false))]:_vm._e()]})],2)}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _listUnorderedLimit = __webpack_require__(305);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _listUnorderedLimit.ListUnorderedLimit;
  }
});

/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ListUnorderedLimit = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _events = __webpack_require__(5);

var _events2 = _interopRequireDefault(_events);

var _stepRowAnimation = __webpack_require__(9);

var _viewport = __webpack_require__(1);

var _viewport2 = _interopRequireDefault(_viewport);

var _listUnorderedLimitVue = __webpack_require__(306);

var _listUnorderedLimitVue2 = _interopRequireDefault(_listUnorderedLimitVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListUnorderedLimit = function (_Mixins) {
    _inherits(ListUnorderedLimit, _Mixins);

    function ListUnorderedLimit() {
        _classCallCheck(this, ListUnorderedLimit);

        var _this = _possibleConstructorReturn(this, (ListUnorderedLimit.__proto__ || Object.getPrototypeOf(ListUnorderedLimit)).apply(this, arguments));

        _this.componentMounted = false;
        _this.showAll = false;
        _this.viewportUtil = new _viewport2.default();
        return _this;
    }

    _createClass(ListUnorderedLimit, [{
        key: "getClickEventData",
        value: function getClickEventData() {
            if (!this.limit || !this.limit.expand || !this.limit.expand.clickEvent) {
                return null;
            }
            var clickEvent = this.limit.expand.clickEvent;

            return {
                dataType: clickEvent.name,
                data: _extends({}, clickEvent.data, {
                    pageSlug: this.$route.fullPath
                })
            };
        }
    }, {
        key: "determineLimit",
        value: function determineLimit(limit) {
            if (limit === undefined) {
                return -1;
            }
            if (this.listItems.length <= limit) {
                return -1;
            }
            return limit;
        }
    }, {
        key: "mounted",
        value: function mounted() {
            this.componentMounted = true;
        }
    }, {
        key: "showButtonLabel",
        value: function showButtonLabel() {
            var _ref = this.limit && this.limit.expand ? this.limit.expand : { label: '' },
                label = _ref.label;

            return label + " (" + this.listItems.length + ")";
        }
    }, {
        key: "showHidden",
        value: function showHidden() {
            this.showAll = true;
            this.$emitPublic(_events2.default.click, this.getClickEventData());
        }
    }, {
        key: "showLimit",
        value: function showLimit() {
            if (this.limit === undefined || !this.componentMounted) {
                return -1;
            }
            if (this.viewportUtil.isMobile) {
                return this.determineLimit(this.limit.smallScreen);
            }
            return this.determineLimit(this.limit.largeScreen);
        }
    }]);

    return ListUnorderedLimit;
}((0, _vuePropertyDecorator.Mixins)(_stepRowAnimation.StepRowAnimation));
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Array, required: true }), __metadata("design:type", Array)], ListUnorderedLimit.prototype, "listItems", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object }), __metadata("design:type", Object)], ListUnorderedLimit.prototype, "limit", void 0);
exports.ListUnorderedLimit = ListUnorderedLimit = __decorate([_listUnorderedLimitVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'ListUnorderedLimit'
})], ListUnorderedLimit);
exports.ListUnorderedLimit = ListUnorderedLimit;

/***/ }),
/* 306 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"list-unordered-limit"},[_c('main',[_c('transition-group',{attrs:{"tag":"ul"},on:{"before-enter":_vm.beforeEnter,"enter":_vm.enter}},[_vm._l((_vm.listItems),function(item,index){return [_c('li-item',{directives:[{name:"show",rawName:"v-show",value:(_vm.showLimit() === -1 || index < _vm.showLimit() || _vm.showAll),expression:"showLimit() === -1 || index < showLimit() || showAll"}],key:index,attrs:{"item":item}})]})],2)],1),_vm._v(" "),_c('footer',{directives:[{name:"show",rawName:"v-show",value:(_vm.showLimit() !== -1 && !_vm.showAll),expression:"showLimit() !== -1 && !showAll"}]},[_c('button',{staticClass:"button--secondary",on:{"click":_vm.showHidden}},[_vm._v(_vm._s(_vm.showButtonLabel()))])])])}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mainNavigation = __webpack_require__(308);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _mainNavigation.MainNavigation;
  }
});

/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MainNavigation = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _mainNavigationVue = __webpack_require__(309);

var _mainNavigationVue2 = _interopRequireDefault(_mainNavigationVue);

var _viewport = __webpack_require__(1);

var _viewport2 = _interopRequireDefault(_viewport);

var _browserCapabilities = __webpack_require__(2);

var _browserCapabilities2 = _interopRequireDefault(_browserCapabilities);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainNavigation = function (_Vue) {
    _inherits(MainNavigation, _Vue);

    function MainNavigation() {
        _classCallCheck(this, MainNavigation);

        var _this = _possibleConstructorReturn(this, (MainNavigation.__proto__ || Object.getPrototypeOf(MainNavigation)).apply(this, arguments));

        _this.viewportUtil = new _viewport2.default();
        _this.showCompactMenu = true;
        return _this;
    }

    _createClass(MainNavigation, [{
        key: "handleResize",
        value: function handleResize() {
            this.showCompactMenu = this.viewportUtil.isTablet;
        }
    }, {
        key: "mounted",
        value: function mounted() {
            this.viewportUtil.addResizeHandler(this.handleResize);
            if (_browserCapabilities2.default.isBrowser) {
                this.showCompactMenu = this.viewportUtil.isTablet;
            }
        }
    }, {
        key: "beforeDestroy",
        value: function beforeDestroy() {
            this.viewportUtil.removeResizeHandler(this.handleResize);
        }
    }, {
        key: "classList",
        get: function get() {
            return {
                'main-nav--small': this.showCompactMenu,
                'main-nav--large': !this.showCompactMenu,
                'main-nav--open': this.mainNavOpen && this.showCompactMenu
            };
        }
    }]);

    return MainNavigation;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Array, required: true }), __metadata("design:type", Object)], MainNavigation.prototype, "navigation", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Boolean, required: false }), __metadata("design:type", Boolean)], MainNavigation.prototype, "mainNavOpen", void 0);
exports.MainNavigation = MainNavigation = __decorate([_mainNavigationVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'MainNavigation'
})], MainNavigation);
exports.MainNavigation = MainNavigation;

/***/ }),
/* 309 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{key:"large-menu",staticClass:"main-nav",class:_vm.classList,attrs:{"aria-label":"site"}},[_c('ul',{staticClass:"main-nav__list",class:{'main-nav__list-visible': _vm.mainNavOpen && _vm.showCompactMenu},attrs:{"role":"menu"}},_vm._l((_vm.navigation),function(mainNavigationItem,index){return (_vm.navigation)?_c('main-navigation-item',_vm._b({key:index,ref:"navItem",refInFor:true,attrs:{"is-compact":_vm.showCompactMenu,"main-nav-open":_vm.mainNavOpen,"active":false,"itemId":'nav-' + index}},'main-navigation-item',mainNavigationItem,false)):_vm._e()}),1)])}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mainNavigationItem = __webpack_require__(311);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _mainNavigationItem.MainNavigationItem;
  }
});

/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MainNavigationItem = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _mainNavigationItemVue = __webpack_require__(312);

var _mainNavigationItemVue2 = _interopRequireDefault(_mainNavigationItemVue);

var _browserCapabilities = __webpack_require__(2);

var _browserCapabilities2 = _interopRequireDefault(_browserCapabilities);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainNavigationItem = function (_Vue) {
    _inherits(MainNavigationItem, _Vue);

    function MainNavigationItem() {
        _classCallCheck(this, MainNavigationItem);

        var _this = _possibleConstructorReturn(this, (MainNavigationItem.__proto__ || Object.getPrototypeOf(MainNavigationItem)).apply(this, arguments));

        _this.flyoutIsOpen = false;
        _this.hideTimeout = null;
        _this.angleDirection = 'angle-down';
        _this.isTouch = _browserCapabilities2.default.supportsTouch;
        return _this;
    }

    _createClass(MainNavigationItem, [{
        key: "function",
        value: function () {
            var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(newVal) {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return this.$nextTick();

                            case 2:
                                _context.next = 4;
                                return new Promise(function (resolve) {
                                    return setTimeout(resolve, 10);
                                });

                            case 4:
                                this.angleDirection = newVal ? 'angle-up' : 'angle-down';

                            case 5:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function _function(_x) {
                return _ref.apply(this, arguments);
            }

            return _function;
        }()
    }, {
        key: "focus",
        value: function focus() {
            var navLink = this.$refs.parent;
            if (navLink && navLink.$el) {
                navLink.$el.focus();
            }
        }
    }, {
        key: "showFlyout",
        value: function () {
            var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return this.$nextTick();

                            case 2:
                                _context2.next = 4;
                                return new Promise(function (resolve) {
                                    return setTimeout(resolve, 10);
                                });

                            case 4:
                                if (this.hideTimeout) {
                                    clearTimeout(this.hideTimeout);
                                    this.hideTimeout = null;
                                }
                                this.flyoutIsOpen = true;

                            case 6:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function showFlyout() {
                return _ref2.apply(this, arguments);
            }

            return showFlyout;
        }()
    }, {
        key: "hideFlyout",
        value: function hideFlyout() {
            this.$emit('closeMainNav');
            this.flyoutIsOpen = false;
        }
    }, {
        key: "toggleFlyout",
        value: function toggleFlyout() {
            this.flyoutIsOpen = !this.flyoutIsOpen;
        }
    }, {
        key: "delayHideFlyout",
        value: function delayHideFlyout() {
            var _this2 = this;

            return new Promise(function (resolve) {
                if (_this2.hideTimeout === null) {
                    _this2.hideTimeout = setTimeout(function () {
                        _this2.hideTimeout = null;
                        _this2.hideFlyout();
                        resolve();
                    }, 100);
                }
            });
        }
    }, {
        key: "selectFlyoutFirstLink",
        value: function () {
            var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
                var refs;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return this.showFlyout();

                            case 2:
                                _context3.next = 4;
                                return this.$nextTick();

                            case 4:
                                refs = this.$refs;

                                if (!(refs.flyout && refs.flyout.selectFirstLink)) {
                                    _context3.next = 8;
                                    break;
                                }

                                _context3.next = 8;
                                return refs.flyout.selectFirstLink();

                            case 8:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function selectFlyoutFirstLink() {
                return _ref3.apply(this, arguments);
            }

            return selectFlyoutFirstLink;
        }()
    }, {
        key: "selectNextNavItem",
        value: function selectNextNavItem() {
            this.hideFlyout();
            this.$emit('tab');
        }
    }, {
        key: "selectPrevNavItem",
        value: function selectPrevNavItem() {
            this.hideFlyout();
            this.$emit('shifttab');
        }
    }, {
        key: "selectParent",
        value: function () {
            var _ref4 = _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
                var parent;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                if (!this.isCompact) {
                                    _context4.next = 2;
                                    break;
                                }

                                return _context4.abrupt("return");

                            case 2:
                                parent = this.$refs.parent;

                                if (parent.$el) {
                                    parent.$el.focus();
                                } else if (parent.focus) {
                                    parent.focus();
                                }
                                _context4.next = 6;
                                return this.$nextTick();

                            case 6:
                                this.hideFlyout();

                            case 7:
                            case "end":
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function selectParent() {
                return _ref4.apply(this, arguments);
            }

            return selectParent;
        }()
    }, {
        key: "isActive",
        get: function get() {
            return this.active ? 'page' : false;
        }
    }, {
        key: "toggleIsVisible",
        get: function get() {
            return !!this.categories && !this.isCompact && this.isTouch;
        }
    }]);

    return MainNavigationItem;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Boolean, required: false }), __metadata("design:type", Boolean)], MainNavigationItem.prototype, "mainNavOpen", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], MainNavigationItem.prototype, "label", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], MainNavigationItem.prototype, "url", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Array, required: false }), __metadata("design:type", Object)], MainNavigationItem.prototype, "categories", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", String)], MainNavigationItem.prototype, "itemId", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Boolean, required: false }), __metadata("design:type", Boolean)], MainNavigationItem.prototype, "isCompact", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Boolean, required: true }), __metadata("design:type", Boolean)], MainNavigationItem.prototype, "active", void 0);
__decorate([(0, _vuePropertyDecorator.Watch)('flyoutIsOpen'), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", Promise)], MainNavigationItem.prototype, "function", null);
exports.MainNavigationItem = MainNavigationItem = __decorate([_mainNavigationItemVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'MainNavigationItem'
})], MainNavigationItem);
exports.MainNavigationItem = MainNavigationItem;

/***/ }),
/* 312 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"main-nav__item",class:{ 'main-nav__item--active': _vm.active },attrs:{"role":"menuitem"},on:{"mouseleave":_vm.delayHideFlyout,"mouseenter":_vm.showFlyout}},[_c('div',{on:{"keydown":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"])){ return null; }$event.preventDefault();return _vm.selectFlyoutFirstLink($event)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"tab",9,$event.key,"Tab")){ return null; }if(!$event.shiftKey){ return null; }if($event.ctrlKey||$event.altKey||$event.metaKey){ return null; }return _vm.hideFlyout($event)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }$event.preventDefault();return _vm.hideFlyout($event)}]}},[_c('base-link',{ref:"parent",staticClass:"main-nav__link",attrs:{"url":_vm.url,"aria-haspopup":"true","aria-controls":_vm.itemId,"aria-current":_vm.isActive,"label":_vm.label,"aria-expanded":!_vm.isCompact && _vm.flyoutIsOpen},on:{"focus":_vm.showFlyout},nativeOn:{"click":function($event){return _vm.hideFlyout($event)}}})],1),_vm._v(" "),_c('icon-button',{directives:[{name:"show",rawName:"v-show",value:(_vm.toggleIsVisible),expression:"toggleIsVisible"}],staticClass:"icon-button--small main-nav__toggle disable-focus",attrs:{"icon-name":_vm.angleDirection,"tabindex":"-1"},on:{"click":_vm.toggleFlyout}}),_vm._v(" "),(_vm.categories)?_c('flyout',{ref:"flyout",staticClass:"flyout--large",class:{ 'flyout--is-open': _vm.flyoutIsOpen },attrs:{"id":_vm.itemId,"items":_vm.categories,"is-compact":_vm.isCompact},on:{"open":_vm.showFlyout,"close":_vm.hideFlyout,"main":_vm.selectParent},nativeOn:{"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }return _vm.selectParent($event)}}}):_vm._e()],1)}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _modal = __webpack_require__(314);

var _modal2 = _interopRequireDefault(_modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _modal2.default;

/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _gsap = __webpack_require__(4);

var _modalVue = __webpack_require__(315);

var _modalVue2 = _interopRequireDefault(_modalVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Modal = function (_Vue) {
    _inherits(Modal, _Vue);

    function Modal() {
        _classCallCheck(this, Modal);

        var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).apply(this, arguments));

        _this.iframeLoaded = false;
        return _this;
    }

    _createClass(Modal, [{
        key: "created",
        value: function created() {
            document.body.classList.add('disable-scroll');
            window.addEventListener('keyup', this.closeModal);
        }
    }, {
        key: "beforeDestroy",
        value: function beforeDestroy() {
            document.body.classList.remove('disable-scroll');
            window.removeEventListener('keyup', this.closeModal);
        }
    }, {
        key: "closeModal",
        value: function closeModal(e) {
            if (e.type === 'keyup' && e.key !== 'Esc' && e.key !== 'Escape') {
                return;
            }
            this.$emit('close');
        }
    }, {
        key: "showContent",
        value: function showContent() {
            this.iframeLoaded = true;
            _gsap.TweenLite.to(this.$refs.modal, 0.1, { css: { opacity: 1 }, ease: _gsap.Power2.easeOut });
            _gsap.TweenLite.to(this.$refs.modal, 0.3, { css: { scale: 1 }, ease: _gsap.Power2.easeOut });
        }
    }, {
        key: "enter",
        value: function enter(el, done) {
            var _this2 = this;

            var iframe = this.$refs.modal.querySelector('iframe');
            var timeLine = new _gsap.TimelineLite();
            _gsap.TweenLite.set(this.$refs.modal, { css: { opacity: 0, scale: 0.6 } });
            timeLine.fromTo(this.$refs.overlay, 0.2, { css: { opacity: 0 } }, { css: { opacity: 0.8 } });
            timeLine.fromTo(this.$refs.close, 0.2, { css: { opacity: 0 } }, { css: { opacity: 1 } }, 0);
            if (iframe) {
                var loadTimeout = setTimeout(function () {
                    _this2.showContent();
                }, 1500);
                iframe.addEventListener('load', function () {
                    if (!_this2.iframeLoaded) {
                        clearTimeout(loadTimeout);
                        _this2.showContent();
                    }
                });
            } else {
                timeLine.to(this.$refs.modal, 0.1, { opacity: 1, ease: _gsap.Power2.easeOut }, 0.2);
                timeLine.to(this.$refs.modal, 0.3, { scale: 1, ease: _gsap.Power2.easeOut }, 0.2);
            }
            timeLine.call(done);
        }
    }, {
        key: "leave",
        value: function leave(el, done) {
            var timeLine = new _gsap.TimelineLite();
            timeLine.to(this.$refs.modal, 0.2, { opacity: 0, scale: 0.6, ease: _gsap.Power2.easeIn });
            timeLine.fromTo([this.$refs.overlay, this.$refs.close], 0.4, { opacity: 1 }, { opacity: 0 }, 0);
            timeLine.call(done);
        }
    }]);

    return Modal;
}(_vuePropertyDecorator.Vue);
Modal = __decorate([_modalVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'modal'
})], Modal);
exports.default = Modal;

/***/ }),
/* 315 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('transition',{attrs:{"name":"modal"},on:{"enter":_vm.enter,"leave":_vm.leave}},[_c('div',{staticClass:"modal",on:{"click":function($event){$event.preventDefault();$event.stopPropagation();return _vm.closeModal($event)}}},[_c('div',{ref:"overlay",staticClass:"modal__overlay"}),_vm._v(" "),_c('icon-button',{ref:"close",staticClass:"modal__close",attrs:{"icon-name":"close"}}),_vm._v(" "),_c('div',{ref:"modal",staticClass:"modal__content",on:{"click":function($event){$event.stopPropagation();}}},[_c('div',{staticClass:"modal__header"},[_vm._t("header")],2),_vm._v(" "),_vm._t("default")],2)],1)])}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _modalButton = __webpack_require__(317);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _modalButton.ModalButton;
  }
});

/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ModalButton = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _modalButtonVue = __webpack_require__(318);

var _modalButtonVue2 = _interopRequireDefault(_modalButtonVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalButton = function (_Vue) {
    _inherits(ModalButton, _Vue);

    function ModalButton() {
        _classCallCheck(this, ModalButton);

        var _this = _possibleConstructorReturn(this, (ModalButton.__proto__ || Object.getPrototypeOf(ModalButton)).apply(this, arguments));

        _this.modalVisible = false;
        return _this;
    }

    _createClass(ModalButton, [{
        key: "toggleModalVisible",
        value: function toggleModalVisible() {
            this.modalVisible = !this.modalVisible;
        }
    }, {
        key: "triggerClick",
        value: function triggerClick() {
            this.toggleModalVisible();
        }
    }]);

    return ModalButton;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object, required: false }), __metadata("design:type", Object)], ModalButton.prototype, "clickEvent", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], ModalButton.prototype, "label", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object, required: true }), __metadata("design:type", Object)], ModalButton.prototype, "modal", void 0);
exports.ModalButton = ModalButton = __decorate([_modalButtonVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'ModalButton'
})], ModalButton);
exports.ModalButton = ModalButton;

/***/ }),
/* 318 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-button__container"},[_c('button',{staticClass:"button",attrs:{"type":"button"},on:{"click":_vm.triggerClick}},[_vm._v("\n        "+_vm._s(_vm.label)+"\n    ")]),_vm._v(" "),_c('portal',{attrs:{"to":"modals"}},[(_vm.modalVisible)?_c('modal',{staticClass:"modal--wizard",on:{"close":_vm.toggleModalVisible}},[_c(_vm.modal.type,_vm._b({tag:"component"},'component',_vm.modal,false))],1):_vm._e()],1)],1)}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _modalWizard = __webpack_require__(320);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _modalWizard.ModalWizard;
  }
});

/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ModalWizard = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _modalWizardVue = __webpack_require__(321);

var _modalWizardVue2 = _interopRequireDefault(_modalWizardVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ModalWizard = function (_Vue) {
    _inherits(ModalWizard, _Vue);

    function ModalWizard() {
        _classCallCheck(this, ModalWizard);

        var _this = _possibleConstructorReturn(this, (ModalWizard.__proto__ || Object.getPrototypeOf(ModalWizard)).apply(this, arguments));

        _this.activeStep = 0;
        return _this;
    }

    _createClass(ModalWizard, [{
        key: "showNextStep",
        value: function showNextStep() {
            if (this.steps && this.steps.length > this.activeStep + 1) {
                this.activeStep += 1;
            }
        }
    }]);

    return ModalWizard;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], ModalWizard.prototype, "title", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Array, required: true }), __metadata("design:type", Object)], ModalWizard.prototype, "steps", void 0);
exports.ModalWizard = ModalWizard = __decorate([_modalWizardVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'ModalWizard'
})], ModalWizard);
exports.ModalWizard = ModalWizard;

/***/ }),
/* 321 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"modal-wizard"},[(_vm.steps)?_vm._l((_vm.steps),function(step,index){return _c('div',{staticClass:"modal-wizard__step"},[(index === _vm.activeStep)?_c(step.type,_vm._b({tag:"component",on:{"step-complete":_vm.showNextStep}},'component',step,false)):_vm._e()],1)}):_vm._e()],2)}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pager = __webpack_require__(323);

var _pager2 = _interopRequireDefault(_pager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _pager2.default;

/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _gsap = __webpack_require__(4);

var _viewport = __webpack_require__(1);

var _viewport2 = _interopRequireDefault(_viewport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'pager',
    template: __webpack_require__(324),
    data: function data() {
        return {
            indicatorActive: false,
            viewport: new _viewport2.default()
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
            var indicatorRect = this.$refs.indicator.getBoundingClientRect();
            var indicatorOffsetRect = this.$refs.indicator.offsetParent.getBoundingClientRect();
            var currentPageRect = this.$refs.page[this.activeIndex].getBoundingClientRect();

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

            _gsap.TweenLite.to(this.$refs.indicator, 0, { x: x, y: y });
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
        activeIndex: function activeIndex() {
            var tl = new _gsap.TimelineLite();
            var offsets = this.getChangeOffset();

            tl.to(this.$refs.indicator, 0.2, { x: offsets.x - offsets.changeX * 0.2, y: offsets.y - offsets.changeY * 0.2, scaleX: 0.7, scaleY: 1.5 }).to(this.$refs.indicator, 0.2, { x: offsets.x, y: offsets.y, scaleX: 1, scaleY: 1 });
            _gsap.TweenLite.to(tl, tl.duration, { ease: _gsap.Power3.easeOut });
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
};

/***/ }),
/* 324 */
/***/ (function(module, exports) {

module.exports = "<nav class=\"pager\" aria-label=\"pagination\">\n    <ul class=\"pager__list\">\n        <li ref=\"indicator\" class=\"pager__active-page\" aria-hidden=\"true\">\n            <icon class=\"pager__active-page-indicator\" icon-name=\"hexagon-fill\"></icon>\n        </li>\n        <li ref=\"page\" v-for=\"(page, index) in pages\" \n            class=\"pager__page\" >\n            <a class=\"pager__page-indicator\" @click=\"changeIndex(index)\"\n                aria-role=\"button\" \n                :aria-label=\"getAriaLabel(index)\" \n                :aria-current='index === activeIndex'>\n                <icon icon-name=\"hexagon\"></icon>\n            </a>\n        </li>\n    </ul>\n</nav>\n";

/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _product = __webpack_require__(326);

var _product2 = _interopRequireDefault(_product);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _product2.default;

/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _productVue = __webpack_require__(327);

var _productVue2 = _interopRequireDefault(_productVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Product = function (_Vue) {
    _inherits(Product, _Vue);

    function Product() {
        _classCallCheck(this, Product);

        return _possibleConstructorReturn(this, (Product.__proto__ || Object.getPrototypeOf(Product)).apply(this, arguments));
    }

    return Product;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], Product.prototype, "icon", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], Product.prototype, "name", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object, required: true }), __metadata("design:type", Object)], Product.prototype, "pricing", void 0);
Product = __decorate([_productVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'Product'
})], Product);
exports.default = Product;

/***/ }),
/* 327 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"product"},[_c('div',{staticClass:"product__icon-container"},[_c('icon',{staticClass:"product__icon",attrs:{"icon-name":_vm.icon}})],1),_vm._v(" "),_c('div',{staticClass:"product__information"},[_c('p',{staticClass:"product__name"},[_vm._v("\n            "+_vm._s(_vm.name)+"\n        ")]),_vm._v(" "),_c('p',{staticClass:"product__pricing"},[_vm._v("\n            "+_vm._s(_vm.pricing.label)+"\n        ")])])])}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _searchBar = __webpack_require__(329);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _searchBar.SearchBar;
  }
});

/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SearchBar = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _searchBarVue = __webpack_require__(330);

var _searchBarVue2 = _interopRequireDefault(_searchBarVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchBar = function (_Vue) {
    _inherits(SearchBar, _Vue);

    function SearchBar() {
        _classCallCheck(this, SearchBar);

        var _this = _possibleConstructorReturn(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).apply(this, arguments));

        _this.searchValue = '';
        return _this;
    }

    _createClass(SearchBar, [{
        key: "close",
        value: function close() {
            if (this.openState) {
                this.$emit('close');
            }
        }
    }, {
        key: "handleSubmit",
        value: function handleSubmit() {
            if (!this.searchValue.length) {
                return;
            }
            this.close();
            window.location.href = "/search?search=" + encodeURIComponent(this.searchValue);
        }
    }, {
        key: "onBlur",
        value: function onBlur() {
            if (this.searchValue === '') {
                this.close();
            }
        }
    }, {
        key: "focusInput",
        value: function focusInput() {
            this.$refs['search-bar__input'].focus();
        }
    }]);

    return SearchBar;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], SearchBar.prototype, "label", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], SearchBar.prototype, "placeholder", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Boolean, required: false, default: false }), __metadata("design:type", Boolean)], SearchBar.prototype, "openState", void 0);
exports.SearchBar = SearchBar = __decorate([_searchBarVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'search-bar'
})], SearchBar);
exports.SearchBar = SearchBar;

/***/ }),
/* 330 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form',{ref:"search-form",staticClass:"search-bar",attrs:{"action":"/search","method":"get"},on:{"submit":function($event){$event.preventDefault();return _vm.handleSubmit($event)}}},[_c('div',{attrs:{"role":"search"}},[_c('div',{staticClass:"search-bar__inputholder"},[_c('label',{staticClass:"search-bar__label",attrs:{"for":"search-bar__input"}},[_vm._v(_vm._s(_vm.label))]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.searchValue),expression:"searchValue"}],ref:"search-bar__input",staticClass:"search-bar__input",attrs:{"placeholder":_vm.placeholder,"autocapitalize":"off","autocomplete":"off","autocorrect":"off","id":"search-bar__input","name":"search"},domProps:{"value":(_vm.searchValue)},on:{"blur":_vm.onBlur,"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }return _vm.close($event)},"input":function($event){if($event.target.composing){ return; }_vm.searchValue=$event.target.value}}})]),_vm._v(" "),_c('icon-button',{attrs:{"button-class":"icon-button icon-button--large search-bar__button","button-aria-label":"Search","icon-name":"search"},on:{"click":_vm.handleSubmit}}),_vm._v(" "),_c('icon-button',{attrs:{"button-class":"icon-button icon-button--large search-bar__close-button","button-aria-label":"Close search","icon-name":"close"},on:{"click":_vm.close}})],1)])}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _searchBarPage = __webpack_require__(332);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _searchBarPage.SearchBarPage;
  }
});

/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SearchBarPage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _searchBarPageVue = __webpack_require__(333);

var _searchBarPageVue2 = _interopRequireDefault(_searchBarPageVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchBarPage = function (_Vue) {
    _inherits(SearchBarPage, _Vue);

    function SearchBarPage() {
        _classCallCheck(this, SearchBarPage);

        var _this = _possibleConstructorReturn(this, (SearchBarPage.__proto__ || Object.getPrototypeOf(SearchBarPage)).apply(this, arguments));

        _this.q = '';
        return _this;
    }

    _createClass(SearchBarPage, [{
        key: "handleSubmit",
        value: function handleSubmit() {
            if (!this.q.length || this.q === this.terms) {
                return;
            }
            this.$emit(this.eventSubmitSearch, this.q);
        }
    }, {
        key: "mounted",
        value: function mounted() {
            this.q = this.terms;
        }
    }]);

    return SearchBarPage;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], SearchBarPage.prototype, "eventSubmitSearch", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Boolean, required: true }), __metadata("design:type", Object)], SearchBarPage.prototype, "isLoading", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], SearchBarPage.prototype, "label", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], SearchBarPage.prototype, "placeholder", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, default: 'search' }), __metadata("design:type", Object)], SearchBarPage.prototype, "searchFieldName", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], SearchBarPage.prototype, "terms", void 0);
exports.SearchBarPage = SearchBarPage = __decorate([_searchBarPageVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'SearchBarPage'
})], SearchBarPage);
exports.SearchBarPage = SearchBarPage;

/***/ }),
/* 333 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form',{staticClass:"search-bar-page",attrs:{"accept-charset":"utf-8","action":"/search","method":"get"},on:{"submit":function($event){$event.preventDefault();return _vm.handleSubmit($event)}}},[_c('label',[_c('span',{staticClass:"search-bar-page__label"},[_vm._v(_vm._s(_vm.label))]),_vm._v(" "),_c('button',{staticClass:"search-bar-page__button",attrs:{"disabled":_vm.isLoading}},[_c('icon',{attrs:{"icon-name":'search'}})],1),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.q),expression:"q"}],staticClass:"search-bar-page__input",attrs:{"disabled":_vm.isLoading,"name":_vm.searchFieldName,"placeholder":_vm.placeholder,"autocapitalize":"off","autocomplete":"off","autocorrect":"off","maxlength":"512","spellcheck":"false","type":"text"},domProps:{"value":(_vm.q)},on:{"input":function($event){if($event.target.composing){ return; }_vm.q=$event.target.value}}})])])}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _socialNav = __webpack_require__(335);

var _socialNav2 = _interopRequireDefault(_socialNav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _socialNav2.default;

/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _socialNavVue = __webpack_require__(336);

var _socialNavVue2 = _interopRequireDefault(_socialNavVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SocialNav = function (_Vue) {
    _inherits(SocialNav, _Vue);

    function SocialNav() {
        _classCallCheck(this, SocialNav);

        return _possibleConstructorReturn(this, (SocialNav.__proto__ || Object.getPrototypeOf(SocialNav)).apply(this, arguments));
    }

    return SocialNav;
}(_vuePropertyDecorator.Vue);
SocialNav = __decorate([_socialNavVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'social-nav'
})], SocialNav);
exports.default = SocialNav;

/***/ }),
/* 336 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"social-nav footer__social-nav"},[_c('ul',{staticClass:"social-nav__list",attrs:{"aria-label":"follow Ultimaker"}},[_c('li',{staticClass:"social-nav__item footer__social-item"},[_c('a',{staticClass:"social-nav__link icon-button icon-button--small",attrs:{"href":"https://nl.linkedin.com/company/ultimaker","aria-label":"LinkedIn"}},[_c('icon',{staticClass:"social-nav__icon",attrs:{"icon-name":"linkedin"}})],1)]),_vm._v(" "),_c('li',{staticClass:"social-nav__item footer__social-item"},[_c('a',{staticClass:"social-nav__link icon-button icon-button--small",attrs:{"href":"https://twitter.com/Ultimaker","aria-label":"Twitter"}},[_c('icon',{staticClass:"social-nav__icon",attrs:{"icon-name":"twitter"}})],1)]),_vm._v(" "),_c('li',{staticClass:"social-nav__item footer__social-item"},[_c('a',{staticClass:"social-nav__link icon-button icon-button--small",attrs:{"href":"https://www.youtube.com/user/Ultimaker3D","aria-label":"YouTube"}},[_c('icon',{staticClass:"social-nav__icon",attrs:{"icon-name":"youtube"}})],1)]),_vm._v(" "),_c('li',{staticClass:"social-nav__item footer__social-item"},[_c('a',{staticClass:"social-nav__link icon-button icon-button--small",attrs:{"href":"https://www.facebook.com/Ultimaker","aria-label":"Facebook"}},[_c('icon',{staticClass:"social-nav__icon",attrs:{"icon-name":"facebook"}})],1)]),_vm._v(" "),_c('li',{staticClass:"social-nav__item footer__social-item"},[_c('a',{staticClass:"social-nav__link icon-button icon-button--small",attrs:{"href":"http://instagram.com/ultimaker","aria-label":"Instagram"}},[_c('icon',{staticClass:"social-nav__icon",attrs:{"icon-name":"instagram"}})],1)])])])}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 337 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _searchResult = __webpack_require__(338);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _searchResult.SearchResult;
  }
});

/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SearchResult = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _searchResultVue = __webpack_require__(339);

var _searchResultVue2 = _interopRequireDefault(_searchResultVue);

var _mark = __webpack_require__(340);

var _mark2 = _interopRequireDefault(_mark);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchResult = function (_Vue) {
    _inherits(SearchResult, _Vue);

    function SearchResult() {
        _classCallCheck(this, SearchResult);

        var _this = _possibleConstructorReturn(this, (SearchResult.__proto__ || Object.getPrototypeOf(SearchResult)).apply(this, arguments));

        _this.focused = false;
        return _this;
    }

    _createClass(SearchResult, [{
        key: "computedTitle",
        get: function get() {
            return (0, _mark2.default)(this.title, this.terms);
        }
    }, {
        key: "computedSnippet",
        get: function get() {
            return (0, _mark2.default)(this.snippet, this.terms);
        }
    }]);

    return SearchResult;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], SearchResult.prototype, "terms", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], SearchResult.prototype, "title", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], SearchResult.prototype, "link", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], SearchResult.prototype, "snippet", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], SearchResult.prototype, "formattedUrl", void 0);
exports.SearchResult = SearchResult = __decorate([_searchResultVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'SearchResult'
})], SearchResult);
exports.SearchResult = SearchResult;

/***/ }),
/* 339 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"search-result",class:{ 'search-result--focus': _vm.focused }},[_c('h3',{staticClass:"search-result__title"},[_c('a',{staticClass:"search-result__link",attrs:{"href":_vm.link},domProps:{"innerHTML":_vm._s(_vm.computedTitle)},on:{"focus":function($event){_vm.focused = !_vm.focused},"blur":function($event){_vm.focused = !_vm.focused}}})]),_vm._v(" "),_c('p',{staticClass:"search-result__snippet",domProps:{"innerHTML":_vm._s(_vm.computedSnippet)}}),_vm._v(" "),_c('p',{staticClass:"search-result__url"},[_vm._v("\n        "+_vm._s(_vm.formattedUrl)+"\n    ")])])}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 340 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = mark;
function mark(text, terms) {
    var termsRE = new RegExp('(' + terms.split(/\s/).join('|') + ')', 'gi');

    return text.replace(termsRE, '<mark>$1</mark>');
}

/***/ }),
/* 341 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _socialSharing = __webpack_require__(342);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _socialSharing.SocialSharing;
  }
});

/***/ }),
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SocialSharing = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _socialSharingVue = __webpack_require__(343);

var _socialSharingVue2 = _interopRequireDefault(_socialSharingVue);

var _generateSocialSharingUrl = __webpack_require__(344);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var protocolAndHost = 'https://www.ultimaker.com';
var SocialSharing = function (_Vue) {
    _inherits(SocialSharing, _Vue);

    function SocialSharing() {
        _classCallCheck(this, SocialSharing);

        return _possibleConstructorReturn(this, (SocialSharing.__proto__ || Object.getPrototypeOf(SocialSharing)).apply(this, arguments));
    }

    _createClass(SocialSharing, [{
        key: "url",
        value: function url(_ref) {
            var type = _ref.type;

            var url = "" + protocolAndHost + this.$route.fullPath;
            return (0, _generateSocialSharingUrl.generateSocialSharingUrl)(url, type);
        }
    }, {
        key: "items",
        get: function get() {
            return [{
                type: 'linkedin',
                iconName: 'linkedin',
                label: 'Share on Linkedin'
            }, {
                type: 'facebook',
                iconName: 'facebook',
                label: 'Share on Facebook'
            }, {
                type: 'twitter',
                iconName: 'twitter',
                label: 'Share on Twitter'
            }];
        }
    }]);

    return SocialSharing;
}(_vuePropertyDecorator.Vue);
exports.SocialSharing = SocialSharing = __decorate([_socialSharingVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'SocialSharing'
})], SocialSharing);
exports.SocialSharing = SocialSharing;

/***/ }),
/* 343 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"social-sharing"},[_vm._l((_vm.items),function(item){return [_c('a',{staticClass:"social-sharing__link",attrs:{"href":_vm.url(item),"target":"_blank"}},[_c('span',{staticClass:"social-sharing__text"},[_vm._v(_vm._s(item.label))]),_vm._v(" "),_c('icon',{staticClass:"social-sharing__icon",attrs:{"icon-name":item.iconName}})],1)]})],2)}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 344 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.generateSocialSharingUrl = generateSocialSharingUrl;

var facebookAppId = '620273961411218';
function generateSocialSharingUrl(url) {
    var socialNetwork = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    var encodedUrl = encodeURIComponent(url);
    switch (socialNetwork) {
        case 'twitter':
            return 'https://twitter.com/intent/tweet?url=' + encodedUrl;
        case 'facebook':
            return 'https://www.facebook.com/dialog/share?app_id=' + facebookAppId + '&display=popup&href=' + encodedUrl + '&redirect_uri=' + encodedUrl;
        case 'linkedin':
            return 'https://www.linkedin.com/shareArticle?mini=true&url=' + encodedUrl + '&source=LinkedIn';
        default:
            return url;
    }
}

/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _subnavigationItem = __webpack_require__(346);

var _subnavigationItem2 = _interopRequireDefault(_subnavigationItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _subnavigationItem2.default;

/***/ }),
/* 346 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _subnavigationItemVue = __webpack_require__(347);

var _subnavigationItemVue2 = _interopRequireDefault(_subnavigationItemVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SubNavigationItem = function (_Vue) {
    _inherits(SubNavigationItem, _Vue);

    function SubNavigationItem() {
        _classCallCheck(this, SubNavigationItem);

        return _possibleConstructorReturn(this, (SubNavigationItem.__proto__ || Object.getPrototypeOf(SubNavigationItem)).apply(this, arguments));
    }

    return SubNavigationItem;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], SubNavigationItem.prototype, "url", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object }), __metadata("design:type", Object)], SubNavigationItem.prototype, "image", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], SubNavigationItem.prototype, "label", void 0);
SubNavigationItem = __decorate([_subnavigationItemVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'SubNavigationItem'
})], SubNavigationItem);
exports.default = SubNavigationItem;

/***/ }),
/* 347 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('base-link',{staticClass:"overflow-container__link link link--reversed",attrs:{"url":_vm.url}},[_c('div',{staticClass:"overflow-container__image-container"},[(_vm.image)?_c('c-image',_vm._b({attrs:{"keep-in-view":""}},'c-image',_vm.image,false)):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"overflow-container__label",attrs:{"aria-label":_vm.label}},[_c('span',{staticClass:"link__underline"},[_vm._v("\n            "+_vm._s(_vm.label)+"\n        ")])])])}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 348 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sysNav = __webpack_require__(349);

var _sysNav2 = _interopRequireDefault(_sysNav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _sysNav2.default;

/***/ }),
/* 349 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _sysNavVue = __webpack_require__(350);

var _sysNavVue2 = _interopRequireDefault(_sysNavVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SysNav = function (_Vue) {
    _inherits(SysNav, _Vue);

    function SysNav() {
        _classCallCheck(this, SysNav);

        return _possibleConstructorReturn(this, (SysNav.__proto__ || Object.getPrototypeOf(SysNav)).apply(this, arguments));
    }

    _createClass(SysNav, [{
        key: "openSearch",
        value: function openSearch() {
            this.$emit('open-search');
        }
    }]);

    return SysNav;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, default: 'store' }), __metadata("design:type", String)], SysNav.prototype, "orderNowIcon", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", String)], SysNav.prototype, "orderNowLink", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", String)], SysNav.prototype, "orderNowLabel", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, default: 'search' }), __metadata("design:type", String)], SysNav.prototype, "searchIcon", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", String)], SysNav.prototype, "searchLabel", void 0);
SysNav = __decorate([_sysNavVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'sys-nav'
})], SysNav);
exports.default = SysNav;

/***/ }),
/* 350 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"sys-nav",attrs:{"aria-label":"quick access"}},[_c('ul',{staticClass:"sys-nav__list",attrs:{"role":"presentation"}},[_c('li',{staticClass:"sys-nav__item"},[(_vm.orderNowLink)?_c('base-link',{staticClass:"sys-nav__link",attrs:{"url":_vm.orderNowLink}},[_c('icon',{staticClass:"sys-nav__icon",attrs:{"icon-name":_vm.orderNowIcon}}),_vm._v(" "),_c('span',{staticClass:"sys-nav__label sys-nav__label--hidden-sm"},[_vm._v(_vm._s(_vm.orderNowLabel))])],1):_vm._e()],1),_vm._v(" "),_c('li',{staticClass:"sys-nav__item"},[_c('a',{staticClass:"sys-nav__link",attrs:{"role":"button","tabindex":"0"},on:{"click":_vm.openSearch,"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.openSearch($event)}}},[_c('icon',{staticClass:"sys-nav__icon",attrs:{"icon-name":_vm.searchIcon}}),_vm._v(" "),_c('span',{staticClass:"sys-nav__label sys-nav__label--hidden-sm"},[_vm._v(_vm._s(_vm.searchLabel))])],1)])])])}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 351 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tab = __webpack_require__(352);

var _tab2 = _interopRequireDefault(_tab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _tab2.default;

/***/ }),
/* 352 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Tab = function (_Vue) {
    _inherits(Tab, _Vue);

    function Tab() {
        _classCallCheck(this, Tab);

        return _possibleConstructorReturn(this, (Tab.__proto__ || Object.getPrototypeOf(Tab)).apply(this, arguments));
    }

    return Tab;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], Tab.prototype, "id", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], Tab.prototype, "label", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object, required: true }), __metadata("design:type", Object)], Tab.prototype, "content", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Boolean, required: true }), __metadata("design:type", Object)], Tab.prototype, "active", void 0);
Tab = __decorate([(0, _vuePropertyDecorator.Component)({
    name: 'Tab',
    template: __webpack_require__(353)
})], Tab);
exports.default = Tab;

/***/ }),
/* 353 */
/***/ (function(module, exports) {

module.exports = "<div :id=\"id\" class=\"tabs__content\" v-show=\"active\" role=\"tabpanel\" :aria-hidden=\"!active\" :aria-label=\"label\">\n    <template v-show=\"content\">\n        <component :is=\"content.type\"\n                   v-bind=\"content\">\n        </component>\n    </template>\n</div>\n";

/***/ }),
/* 354 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tabs = __webpack_require__(355);

var _tabs2 = _interopRequireDefault(_tabs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _tabs2.default;

/***/ }),
/* 355 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _browserCapabilities = __webpack_require__(2);

var _browserCapabilities2 = _interopRequireDefault(_browserCapabilities);

var _viewport = __webpack_require__(1);

var _viewport2 = _interopRequireDefault(_viewport);

var _gsap = __webpack_require__(4);

var _defaults = __webpack_require__(3);

var _defaults2 = _interopRequireDefault(_defaults);

var _tabsVue = __webpack_require__(356);

var _tabsVue2 = _interopRequireDefault(_tabsVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Tabs = function (_Vue) {
    _inherits(Tabs, _Vue);

    function Tabs() {
        _classCallCheck(this, Tabs);

        var _this = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).apply(this, arguments));

        _this.activeTab = 0;
        _this.viewportUtil = new _viewport2.default();
        _this.correction = 0;
        return _this;
    }

    _createClass(Tabs, [{
        key: "setActiveTab",
        value: function setActiveTab() {
            var _this2 = this;

            var tabs = this.$refs.tab;
            if (!tabs) {
                return;
            }
            tabs[this.activeTab].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
            setTimeout(function () {
                return _this2.positionIndicator();
            }, 50);
        }
    }, {
        key: "getLinkClassList",
        value: function getLinkClassList(index) {
            return {
                'tabs__list_link--active': index === this.activeTab
            };
        }
    }, {
        key: "positionIndicator",
        value: function () {
            var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                var tabs, _tabs$activeTab, offsetLeft, offsetWidth;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                tabs = this.$refs.tab;

                                if (tabs) {
                                    _context.next = 3;
                                    break;
                                }

                                return _context.abrupt("return");

                            case 3:
                                _tabs$activeTab = tabs[this.activeTab], offsetLeft = _tabs$activeTab.offsetLeft, offsetWidth = _tabs$activeTab.offsetWidth;

                                _gsap.TweenLite.to(this.$refs.indicator, _defaults2.default.defaultDuration, {
                                    x: offsetLeft - this.correction,
                                    width: offsetWidth,
                                    ease: _gsap.Power3.easeOut
                                });

                            case 5:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function positionIndicator() {
                return _ref.apply(this, arguments);
            }

            return positionIndicator;
        }()
    }, {
        key: "scrollCorrection",
        value: function scrollCorrection() {
            var tabList = this.$refs.tabList;

            var tabs = this.$refs.tab;
            this.correction = tabList.scrollLeft;
            if (!tabs) {
                return;
            }
            var _tabs$activeTab2 = tabs[this.activeTab],
                offsetLeft = _tabs$activeTab2.offsetLeft,
                offsetWidth = _tabs$activeTab2.offsetWidth;

            _gsap.TweenLite.to(this.$refs.indicator, 0, {
                x: offsetLeft - this.correction,
                width: offsetWidth,
                ease: _gsap.Power2.easeOut
            });
        }
    }, {
        key: "mounted",
        value: function mounted() {
            this.activeTab = this.defaultTab;
            this.viewportUtil.addResizeHandler(this.positionIndicator);
            this.$refs.tabList.addEventListener('scroll', this.scrollCorrection);
            if (_browserCapabilities2.default.supportsTouch) {
                this.$refs.tabList.addEventListener('touchmove', this.scrollCorrection);
            }
        }
    }, {
        key: "beforeDestroy",
        value: function beforeDestroy() {
            this.viewportUtil.removeResizeHandler(this.positionIndicator);
        }
    }]);

    return Tabs;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Array, required: true }), __metadata("design:type", Array)], Tabs.prototype, "tabs", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Number, default: 0 }), __metadata("design:type", Number)], Tabs.prototype, "defaultTab", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Boolean, required: true }), __metadata("design:type", Boolean)], Tabs.prototype, "sequenced", void 0);
__decorate([(0, _vuePropertyDecorator.Watch)('activeTab'), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], Tabs.prototype, "setActiveTab", null);
Tabs = __decorate([_tabsVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'Tabs'
})], Tabs);
exports.default = Tabs;

/***/ }),
/* 356 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.tabs)?_c('div',{staticClass:"tabs"},[_c('div',{staticClass:"tabs__nav"},[_c('ul',{ref:"tabList",staticClass:"tabs__list",attrs:{"role":"tablist"}},[_vm._l((_vm.tabs),function(tab,index){return _c('li',{ref:"tab",refInFor:true,staticClass:"tabs__list_item",attrs:{"role":"presentation"}},[_c('a',{staticClass:"tabs__list_link",class:_vm.getLinkClassList(index),attrs:{"href":'#' + tab.id,"role":"tab","aria-controls":tab.id,"aria-selected":_vm.activeTab === index},on:{"click":function($event){$event.preventDefault();_vm.activeTab = index}}},[(_vm.sequenced)?_c('span',[_vm._v(_vm._s(((index+1) + ". ")))]):_vm._e(),_vm._v("\n                    "+_vm._s(tab.label)+"\n                ")])])}),_vm._v(" "),_c('li',{ref:"indicator",staticClass:"tabs__indicator",attrs:{"aria-hidden":"true","role":"none"}})],2)]),_vm._v(" "),_vm._l((_vm.tabs),function(tab,index){return _c('div',{staticClass:"tabs__contents"},[[_c(tab.type,_vm._b({key:index,tag:"component",attrs:{"id":tab.label+index,"active":_vm.activeTab === index}},'component',tab,false))]],2)})],2):_vm._e()}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 357 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tag = __webpack_require__(358);

var _tag2 = _interopRequireDefault(_tag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _tag2.default;

/***/ }),
/* 358 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _tagVue = __webpack_require__(359);

var _tagVue2 = _interopRequireDefault(_tagVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Tag = function (_Vue) {
    _inherits(Tag, _Vue);

    function Tag() {
        _classCallCheck(this, Tag);

        return _possibleConstructorReturn(this, (Tag.__proto__ || Object.getPrototypeOf(Tag)).apply(this, arguments));
    }

    return Tag;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object, required: true }), __metadata("design:type", Object)], Tag.prototype, "tag", void 0);
Tag = __decorate([_tagVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'tag'
})], Tag);
exports.default = Tag;

/***/ }),
/* 359 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{staticClass:"tag"},[_vm._v(_vm._s(_vm.tag.title))])}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 360 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tagList = __webpack_require__(361);

var _tagList2 = _interopRequireDefault(_tagList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _tagList2.default;

/***/ }),
/* 361 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _tagListVue = __webpack_require__(362);

var _tagListVue2 = _interopRequireDefault(_tagListVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TagList = function (_Vue) {
    _inherits(TagList, _Vue);

    function TagList() {
        _classCallCheck(this, TagList);

        return _possibleConstructorReturn(this, (TagList.__proto__ || Object.getPrototypeOf(TagList)).apply(this, arguments));
    }

    return TagList;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Array, required: true }), __metadata("design:type", Object)], TagList.prototype, "tags", void 0);
TagList = __decorate([_tagListVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'tag-list'
})], TagList);
exports.default = TagList;

/***/ }),
/* 362 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"tag-list__list list"},_vm._l((_vm.tags),function(tag){return _c('li',{staticClass:"tag-list__item list_item"},[_c('tag',{attrs:{"tag":tag}})],1)}),0)}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 363 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tooltipToggle = __webpack_require__(364);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _tooltipToggle.TooltipToggle;
  }
});

/***/ }),
/* 364 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TooltipToggle = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _gsap = __webpack_require__(4);

var _defaults = __webpack_require__(3);

var _defaults2 = _interopRequireDefault(_defaults);

var _tooltipToggleVue = __webpack_require__(365);

var _tooltipToggleVue2 = _interopRequireDefault(_tooltipToggleVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TooltipToggle = function (_Vue) {
    _inherits(TooltipToggle, _Vue);

    function TooltipToggle() {
        _classCallCheck(this, TooltipToggle);

        var _this = _possibleConstructorReturn(this, (TooltipToggle.__proto__ || Object.getPrototypeOf(TooltipToggle)).apply(this, arguments));

        _this.buildingUnit = _defaults2.default.buildingUnit;
        _this.duration = _defaults2.default.defaultDuration;
        _this.ease = _defaults2.default.defaultEase;
        _this.visible = false;
        _this.tooltipLeft = true;
        _this.yAxisCorrection = 0;
        return _this;
    }

    _createClass(TooltipToggle, [{
        key: "show",
        value: function show() {
            this.visible = true;
        }
    }, {
        key: "toggleTooltip",
        value: function toggleTooltip() {
            if (!this.visible) {
                this.show();
            } else {
                this.hide();
            }
        }
    }, {
        key: "hideTooltip",
        value: function hideTooltip() {
            this.hide();
        }
    }, {
        key: "hide",
        value: function hide() {
            this.visible = false;
        }
    }, {
        key: "tooltipEnter",
        value: function tooltipEnter(el, done) {
            var tooltipElement = el;
            _gsap.TweenLite.fromTo(tooltipElement, this.duration, { autoAlpha: 0, x: 0, y: this.buildingUnit * -1 }, { autoAlpha: 1, x: 0, y: 0, ease: this.ease }).eventCallback('onComplete', done);
        }
    }, {
        key: "tooltipLeave",
        value: function tooltipLeave(el, done) {
            _gsap.TweenLite.to(el, this.duration, { autoAlpha: 0, y: this.buildingUnit * -1, ease: this.ease }).eventCallback('onComplete', done);
        }
    }, {
        key: "tooltipClass",
        get: function get() {
            return {
                'tooltip--arrow-left': this.tooltipLeft
            };
        }
    }]);

    return TooltipToggle;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", String)], TooltipToggle.prototype, "label", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", String)], TooltipToggle.prototype, "icon", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", String)], TooltipToggle.prototype, "description", void 0);
exports.TooltipToggle = TooltipToggle = __decorate([_tooltipToggleVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'TooltipToggle'
})], TooltipToggle);
exports.TooltipToggle = TooltipToggle;

/***/ }),
/* 365 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tooltip-toggle"},[_c('transition',{on:{"enter":_vm.tooltipEnter,"leave":_vm.tooltipLeave}},[_c('tooltip',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],ref:"tooltip",class:_vm.tooltipClass,attrs:{"block":"tooltip-toggle","id":_vm.uniqId + '_tooltip'}},[_vm._v("\n            "+_vm._s(_vm.description)+"\n        ")])],1),_vm._v(" "),_c('icon-button',{ref:"button",attrs:{"aria-expanded":_vm.visible.toString(),"aria-describedby":_vm.uniqId + '_tooltip',"icon-name":_vm.icon,"button-class":"icon-button--transparent icon-button--reversed icon-button--small-icon"},nativeOn:{"click":function($event){$event.preventDefault();return _vm.toggleTooltip($event)},"keyup":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.toggleTooltip($event)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"space",32,$event.key,[" ","Spacebar"])){ return null; }return _vm.toggleTooltip($event)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }return _vm.hideTooltip($event)}],"blur":function($event){$event.preventDefault();return _vm.hideTooltip($event)}}},[_vm._v("\n        "+_vm._s(_vm.label)+"\n    ")])],1)}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 366 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tabTable = __webpack_require__(367);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _tabTable.TabTable;
  }
});

/***/ }),
/* 367 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TabTable = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _tabTableVue = __webpack_require__(368);

var _tabTableVue2 = _interopRequireDefault(_tabTableVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TabTable = function (_Vue) {
    _inherits(TabTable, _Vue);

    function TabTable() {
        _classCallCheck(this, TabTable);

        return _possibleConstructorReturn(this, (TabTable.__proto__ || Object.getPrototypeOf(TabTable)).apply(this, arguments));
    }

    return TabTable;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], TabTable.prototype, "id", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], TabTable.prototype, "label", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Array, required: true }), __metadata("design:type", Object)], TabTable.prototype, "rows", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Boolean, required: true }), __metadata("design:type", Object)], TabTable.prototype, "active", void 0);
exports.TabTable = TabTable = __decorate([_tabTableVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'TabTable'
})], TabTable);
exports.TabTable = TabTable;

/***/ }),
/* 368 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flexgrid flexgrid--mobile-xl-row"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.active),expression:"active"}],staticClass:"tab-table__content flexgrid__cell--sm-8",attrs:{"id":_vm.id,"role":"tabpanel","aria-hidden":!_vm.active,"aria-label":_vm.label}},_vm._l((_vm.rows),function(row){return _c(row.type,_vm._b({tag:"component"},'component',row,false))}),1)])}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 369 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tabTableRow = __webpack_require__(370);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _tabTableRow.TabTableRow;
  }
});

/***/ }),
/* 370 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TabTableRow = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _tabTableRowVue = __webpack_require__(371);

var _tabTableRowVue2 = _interopRequireDefault(_tabTableRowVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TabTableRow = function (_Vue) {
    _inherits(TabTableRow, _Vue);

    function TabTableRow() {
        _classCallCheck(this, TabTableRow);

        return _possibleConstructorReturn(this, (TabTableRow.__proto__ || Object.getPrototypeOf(TabTableRow)).apply(this, arguments));
    }

    return TabTableRow;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], TabTableRow.prototype, "label", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: false }), __metadata("design:type", Object)], TabTableRow.prototype, "value", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Array, required: false }), __metadata("design:type", Object)], TabTableRow.prototype, "linkList", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object, required: false }), __metadata("design:type", Object)], TabTableRow.prototype, "tooltip", void 0);
exports.TabTableRow = TabTableRow = __decorate([_tabTableRowVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'TabTableRow'
})], TabTableRow);
exports.TabTableRow = TabTableRow;

/***/ }),
/* 371 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"tab-table-row"},[(_vm.tooltip)?[_c('div',{staticClass:"tab-table-row__label--tooltip"},[_c('tooltip-toggle',_vm._b({attrs:{"label":_vm.label}},'tooltip-toggle',_vm.tooltip,false))],1)]:[_c('div',{staticClass:"tab-table-row__label"},[_c('p',{staticClass:"tab-table-row__label-text"},[_vm._v(_vm._s(_vm.label))])])],_vm._v(" "),_c('div',{staticClass:"tab-table-row__content"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.value),expression:"value"}],staticClass:"content-manageble content-manageble--copy-small tab-table-row__value",domProps:{"innerHTML":_vm._s(_vm.value)}}),_vm._v(" "),(_vm.linkList)?_c('ul',{staticClass:"tab-table-row__linklist"},[_vm._l((_vm.linkList),function(link){return [_c('li',{staticClass:"tab-table-row__linklist-item"},[_c('content-link',_vm._b({staticClass:"link tab-table-row__linklist-link",attrs:{"label":link.label}},'content-link',link,false))],1)]})],2):_vm._e()])],2)}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 372 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wizardStepDownloadList = __webpack_require__(373);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _wizardStepDownloadList.WizardStepDownloadList;
  }
});

/***/ }),
/* 373 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WizardStepDownloadList = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _wizardStepDownloadListVue = __webpack_require__(374);

var _wizardStepDownloadListVue2 = _interopRequireDefault(_wizardStepDownloadListVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WizardStepDownloadList = function (_Vue) {
    _inherits(WizardStepDownloadList, _Vue);

    function WizardStepDownloadList() {
        _classCallCheck(this, WizardStepDownloadList);

        var _this = _possibleConstructorReturn(this, (WizardStepDownloadList.__proto__ || Object.getPrototypeOf(WizardStepDownloadList)).apply(this, arguments));

        _this.selected = 0;
        _this.name = 'download';
        return _this;
    }

    _createClass(WizardStepDownloadList, [{
        key: "setSelectedItem",
        value: function setSelectedItem(index) {
            this.selected = index;
        }
    }, {
        key: "handleSubmit",
        value: function handleSubmit() {
            var _this2 = this;

            if (window.$u && window.$u.store && window.$u.store.pushSetting) {
                window.$u.store.pushSetting('robot', true);
            }

            setTimeout(function () {
                _this2.afterSubmit();
            });
        }
    }, {
        key: "afterSubmit",
        value: function afterSubmit() {
            this.$emit('step-complete');
        }
    }, {
        key: "selectedItem",
        get: function get() {
            return this.selected;
        }
    }, {
        key: "file",
        get: function get() {
            return this.items[this.selectedItem].file;
        }
    }]);

    return WizardStepDownloadList;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], WizardStepDownloadList.prototype, "title", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: false }), __metadata("design:type", Object)], WizardStepDownloadList.prototype, "subtitle", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: false }), __metadata("design:type", Object)], WizardStepDownloadList.prototype, "description", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Array, required: true }), __metadata("design:type", Object)], WizardStepDownloadList.prototype, "items", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object, required: true }), __metadata("design:type", Object)], WizardStepDownloadList.prototype, "submitButton", void 0);
exports.WizardStepDownloadList = WizardStepDownloadList = __decorate([_wizardStepDownloadListVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'WizardStepDownloadList'
})], WizardStepDownloadList);
exports.WizardStepDownloadList = WizardStepDownloadList;

/***/ }),
/* 374 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form',{staticClass:"wizard-step-download-list",attrs:{"target":"_blank","method":"get","action":_vm.file},on:{"submit":_vm.handleSubmit}},[_c('header-block',{staticClass:"header-block--wizard",attrs:{"title":_vm.title,"subtitle":_vm.subtitle}}),_vm._v(" "),(_vm.description)?_c('p',{staticClass:"wizard-step-download-list__description"},[_vm._v(_vm._s(_vm.description))]):_vm._e(),_vm._v(" "),(_vm.items)?_c('ul',{staticClass:"wizard-step-download-list__items flexgrid flexgrid--justify-space-between flexgrid--mobile-xl-row"},_vm._l((_vm.items),function(item,index){return _c('li',{staticClass:"wizard-step-download-list__item flexgrid__cell--sm-4"},[_c('card-download',_vm._b({key:"index",attrs:{"index":index,"selected":_vm.selectedItem === index,"name":_vm.name,"setSelectedItem":_vm.setSelectedItem}},'card-download',item,false))],1)}),0):_vm._e(),_vm._v(" "),(_vm.submitButton)?_c('button',{staticClass:"wizard-step-download-list__button button"},[_vm._v("\n        "+_vm._s(_vm.submitButton.label)+"\n    ")]):_vm._e()],1)}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 375 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wizardStepConfirmation = __webpack_require__(376);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_wizardStepConfirmation).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 376 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _wizardStepConfirmationVue = __webpack_require__(377);

var _wizardStepConfirmationVue2 = _interopRequireDefault(_wizardStepConfirmationVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WizardStepConfirmation = function (_Vue) {
    _inherits(WizardStepConfirmation, _Vue);

    function WizardStepConfirmation() {
        _classCallCheck(this, WizardStepConfirmation);

        return _possibleConstructorReturn(this, (WizardStepConfirmation.__proto__ || Object.getPrototypeOf(WizardStepConfirmation)).apply(this, arguments));
    }

    return WizardStepConfirmation;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], WizardStepConfirmation.prototype, "title", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: false }), __metadata("design:type", Object)], WizardStepConfirmation.prototype, "subtitle", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], WizardStepConfirmation.prototype, "contentTitle", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], WizardStepConfirmation.prototype, "content", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object, required: true }), __metadata("design:type", Object)], WizardStepConfirmation.prototype, "image", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object, required: false }), __metadata("design:type", Object)], WizardStepConfirmation.prototype, "ctas", void 0);
WizardStepConfirmation = __decorate([_wizardStepConfirmationVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'WizardStepConfirmation'
})], WizardStepConfirmation);
exports.default = WizardStepConfirmation;

/***/ }),
/* 377 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"organism wizard-step-confirmation"},[_c('section',{staticClass:"container wizard-step-confirmation__container"},[_c('HeaderBlock',{attrs:{"title":_vm.title,"subtitle":_vm.subtitle}}),_vm._v(" "),_c('div',{staticClass:"flexgrid"},[_c('div',{staticClass:"flexgrid__cell--xs-6 wizard-step-confirmation__grid-cell wizard-step-confirmation__image"},[_c('div',{staticClass:"wizard-step-confirmation__image-wrapper"},[(_vm.image)?_c('c-image',_vm._b({},'c-image',_vm.image,false)):_vm._e()],1)]),_vm._v(" "),_c('div',{staticClass:"flexgrid__cell--xs-6 wizard-step-confirmation__grid-cell wizard-step-confirmation__content"},[_c('h3',[_vm._v(_vm._s(_vm.contentTitle))]),_vm._v(" "),_c('div',{staticClass:"content-manageble wizard-step-confirmation__body",domProps:{"innerHTML":_vm._s(_vm.content)}}),_vm._v(" "),(_vm.ctas)?_c('cta-block',{attrs:{"mod-content-link":"wizard-step-confirmation","ctas":_vm.ctas.ctas}}):_vm._e()],1)])],1)])}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 378 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _articleContent = __webpack_require__(379);

Object.defineProperty(exports, 'ArticleContent', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_articleContent).default;
  }
});

var _articleHeader = __webpack_require__(382);

Object.defineProperty(exports, 'ArticleHeader', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_articleHeader).default;
  }
});

var _brands = __webpack_require__(385);

Object.defineProperty(exports, 'Brands', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_brands).default;
  }
});

var _colors = __webpack_require__(18);

Object.defineProperty(exports, 'Colors', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_colors).default;
  }
});

var _contentCover = __webpack_require__(390);

Object.defineProperty(exports, 'ContentCover', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_contentCover).default;
  }
});

var _contentGeneral = __webpack_require__(393);

Object.defineProperty(exports, 'ContentGeneral', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_contentGeneral).default;
  }
});

var _contentHighlight = __webpack_require__(396);

Object.defineProperty(exports, 'ContentHighlight', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_contentHighlight).default;
  }
});

var _countrySelector = __webpack_require__(399);

Object.defineProperty(exports, 'CountrySelector', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_countrySelector).default;
  }
});

var _heroArticle = __webpack_require__(402);

Object.defineProperty(exports, 'HeroArticle', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_heroArticle).default;
  }
});

var _heroBasic = __webpack_require__(405);

Object.defineProperty(exports, 'HeroBasic', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_heroBasic).default;
  }
});

var _heroCover = __webpack_require__(408);

Object.defineProperty(exports, 'HeroCover', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_heroCover).default;
  }
});

var _heroHomepage = __webpack_require__(411);

Object.defineProperty(exports, 'HeroHomepage', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_heroHomepage).default;
  }
});

var _heroProduct = __webpack_require__(415);

Object.defineProperty(exports, 'HeroProduct', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_heroProduct).default;
  }
});

var _localeSelector = __webpack_require__(418);

Object.defineProperty(exports, 'LocaleSelector', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_localeSelector).default;
  }
});

var _overview = __webpack_require__(421);

Object.defineProperty(exports, 'Overview', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_overview).default;
  }
});

var _overviewUbr = __webpack_require__(424);

Object.defineProperty(exports, 'OverviewUbr', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_overviewUbr).default;
  }
});

var _pageFooter = __webpack_require__(427);

Object.defineProperty(exports, 'PageFooter', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_pageFooter).default;
  }
});

var _pageHeader = __webpack_require__(430);

Object.defineProperty(exports, 'PageHeader', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_pageHeader).default;
  }
});

var _searchResults = __webpack_require__(433);

Object.defineProperty(exports, 'SearchResults', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_searchResults).default;
  }
});

var _tabbedContent = __webpack_require__(436);

Object.defineProperty(exports, 'TabbedContent', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_tabbedContent).default;
  }
});

var _tabbedTable = __webpack_require__(439);

Object.defineProperty(exports, 'TabbedTable', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_tabbedTable).default;
  }
});

var _tableCompare = __webpack_require__(442);

Object.defineProperty(exports, 'TableCompare', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_tableCompare).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 379 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _articleContent = __webpack_require__(380);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _articleContent.ArticleContent;
  }
});

/***/ }),
/* 380 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ArticleContent = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _articleContentVue = __webpack_require__(381);

var _articleContentVue2 = _interopRequireDefault(_articleContentVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArticleContent = function (_Vue) {
    _inherits(ArticleContent, _Vue);

    function ArticleContent() {
        _classCallCheck(this, ArticleContent);

        return _possibleConstructorReturn(this, (ArticleContent.__proto__ || Object.getPrototypeOf(ArticleContent)).apply(this, arguments));
    }

    return ArticleContent;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Array, required: true }), __metadata("design:type", Object)], ArticleContent.prototype, "molecules", void 0);
exports.ArticleContent = ArticleContent = __decorate([_articleContentVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'ArticleContent'
})], ArticleContent);
exports.ArticleContent = ArticleContent;

/***/ }),
/* 381 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"organism article"},[_c('div',{staticClass:"container"},[_vm._l((_vm.molecules),function(articleMolecule){return _c(articleMolecule.type,_vm._b({tag:"component"},'component',articleMolecule,false))}),_vm._v(" "),_c('SocialSharing')],2)])}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 382 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _articleHeader = __webpack_require__(383);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _articleHeader.ArticleHeader;
  }
});

/***/ }),
/* 383 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ArticleHeader = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _articleHeaderVue = __webpack_require__(384);

var _articleHeaderVue2 = _interopRequireDefault(_articleHeaderVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArticleHeader = function (_Vue) {
    _inherits(ArticleHeader, _Vue);

    function ArticleHeader() {
        _classCallCheck(this, ArticleHeader);

        return _possibleConstructorReturn(this, (ArticleHeader.__proto__ || Object.getPrototypeOf(ArticleHeader)).apply(this, arguments));
    }

    _createClass(ArticleHeader, [{
        key: "listItems",
        get: function get() {
            var properties = [];
            if (this.labels) {
                properties = this.labels.map(function (property) {
                    return {
                        item: {
                            item: {
                                item: property
                            },
                            type: 'SpanLabel'
                        },
                        type: 'LiInline'
                    };
                });
            }
            return {
                items: properties,
                type: 'LiInline'
            };
        }
    }]);

    return ArticleHeader;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object, required: true }), __metadata("design:type", Object)], ArticleHeader.prototype, "author", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Array }), __metadata("design:type", Object)], ArticleHeader.prototype, "labels", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], ArticleHeader.prototype, "publishedDate", void 0);
exports.ArticleHeader = ArticleHeader = __decorate([_articleHeaderVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'ArticleHeader'
})], ArticleHeader);
exports.ArticleHeader = ArticleHeader;

/***/ }),
/* 384 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"article-header container"},[_c('ArticleAuthor',_vm._b({attrs:{"publishedDate":_vm.publishedDate}},'ArticleAuthor',_vm.author,false)),_vm._v(" "),_c('list-unordered',{staticClass:"article-header__list",attrs:{"listItems":_vm.listItems}})],1)}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 385 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _brands = __webpack_require__(386);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _brands.Brands;
  }
});

/***/ }),
/* 386 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Brands = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _brandsVue = __webpack_require__(387);

var _brandsVue2 = _interopRequireDefault(_brandsVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Brands = function (_Vue) {
    _inherits(Brands, _Vue);

    function Brands() {
        _classCallCheck(this, Brands);

        return _possibleConstructorReturn(this, (Brands.__proto__ || Object.getPrototypeOf(Brands)).apply(this, arguments));
    }

    return Brands;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object }), __metadata("design:type", Object)], Brands.prototype, "ctas", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object }), __metadata("design:type", Object)], Brands.prototype, "expand", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Array, required: true }), __metadata("design:type", Object)], Brands.prototype, "items", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object }), __metadata("design:type", Object)], Brands.prototype, "limit", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String }), __metadata("design:type", Object)], Brands.prototype, "subtitle", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], Brands.prototype, "title", void 0);
exports.Brands = Brands = __decorate([_brandsVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'Brands'
})], Brands);
exports.Brands = Brands;

/***/ }),
/* 387 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"organism brands2"},[_c('article',{staticClass:"container"},[_c('header-block',{attrs:{"title":_vm.title,"subtitle":_vm.subtitle}}),_vm._v(" "),_c('list-unordered-limit',{attrs:{"limit":_vm.limit,"listItems":_vm.items}}),_vm._v(" "),_c('footer-block',{attrs:{"ctas":_vm.ctas}})],1)])}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 388 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Colors = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _colorsVue = __webpack_require__(389);

var _colorsVue2 = _interopRequireDefault(_colorsVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Colors = function (_Vue) {
    _inherits(Colors, _Vue);

    function Colors() {
        _classCallCheck(this, Colors);

        var _this = _possibleConstructorReturn(this, (Colors.__proto__ || Object.getPrototypeOf(Colors)).apply(this, arguments));

        _this.activeColorIndex = 0;
        return _this;
    }

    _createClass(Colors, [{
        key: "setActiveColor",
        value: function setActiveColor(index) {
            this.activeColorIndex = index;
        }
    }, {
        key: "activeColor",
        get: function get() {
            return this.colorList[this.activeColorIndex];
        }
    }]);

    return Colors;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], Colors.prototype, "title", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String }), __metadata("design:type", Object)], Colors.prototype, "subtitle", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object, required: true }), __metadata("design:type", Object)], Colors.prototype, "colorCtas", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Array, required: true }), __metadata("design:type", Object)], Colors.prototype, "colorList", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object }), __metadata("design:type", Object)], Colors.prototype, "ctas", void 0);
exports.Colors = Colors = __decorate([_colorsVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'colors'
})], Colors);
exports.Colors = Colors;

/***/ }),
/* 389 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"organism colors"},[_c('div',{staticClass:"container"},[_c('header-block',{attrs:{"title":_vm.title,"subtitle":_vm.subtitle}}),_vm._v(" "),_c('div',{staticClass:"flexgrid flexgrid--gutter flexgrid--column-reversed flexgrid--mobile-xl-row"},[_c('div',{staticClass:"flexgrid__cell--xs-6 flexgrid__cell--sm-4"},[_c('div',{staticClass:"colors__swatches"},[_c('ul',{staticClass:"colors__list"},_vm._l((_vm.colorList),function(color,index){return _c('li',{staticClass:"colors__list-item",on:{"click":function($event){return _vm.setActiveColor(index)},"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"space",32,$event.key,[" ","Spacebar"])){ return null; }$event.preventDefault();return _vm.setActiveColor(index)}}},[_c('color',{class:{'color--selected': color === _vm.activeColor },attrs:{"rgb-hex":color.rgbHex,"opacity":color.opacity}})],1)}),0),_vm._v(" "),(_vm.colorCtas.ctas)?_c('cta-block',{attrs:{"ctas":_vm.colorCtas.ctas,"mod":"baseline"}}):_vm._e()],1)]),_vm._v(" "),(_vm.activeColor.exampleImage)?_c('div',{staticClass:"flexgrid__cell--sm-8 flexgrid__cell--xs-6"},[_c('c-image',_vm._b({staticClass:"colors__image"},'c-image',_vm.activeColor.exampleImage,false))],1):_vm._e()]),_vm._v(" "),_c('footer-block',{staticClass:"footer-block--push-down",attrs:{"ctas":_vm.ctas}})],1)])}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 390 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _contentCover = __webpack_require__(391);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _contentCover.ContentCover;
  }
});

/***/ }),
/* 391 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ContentCover = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _contentCoverVue = __webpack_require__(392);

var _contentCoverVue2 = _interopRequireDefault(_contentCoverVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContentCover = function (_Vue) {
    _inherits(ContentCover, _Vue);

    function ContentCover() {
        _classCallCheck(this, ContentCover);

        return _possibleConstructorReturn(this, (ContentCover.__proto__ || Object.getPrototypeOf(ContentCover)).apply(this, arguments));
    }

    _createClass(ContentCover, [{
        key: "getClassNames",
        value: function getClassNames(type) {
            return {
                ContentButton: 'content-cover__button button',
                ContentLink: 'content-cover__link link link--medium',
                YoutubeLink: 'content-cover__link link link--medium'
            }[type] || '';
        }
    }]);

    return ContentCover;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], ContentCover.prototype, "title", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], ContentCover.prototype, "description", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object }), __metadata("design:type", Object)], ContentCover.prototype, "cta", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object }), __metadata("design:type", Object)], ContentCover.prototype, "image", void 0);
exports.ContentCover = ContentCover = __decorate([_contentCoverVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'ContentCover'
})], ContentCover);
exports.ContentCover = ContentCover;

/***/ }),
/* 392 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"content-cover content-cover--cover"},[(this.image)?_c('c-image',_vm._b({},'c-image',this.image,false)):_vm._e(),_vm._v(" "),_c('div',{staticClass:"content-cover__image--overlay"}),_vm._v(" "),_c('section',{staticClass:"content-cover__container"},[_c('div',{staticClass:"flexgrid__cell--xs-6 content-cover-content content-cover--cover-reset"},[_c('h3',{staticClass:"content-cover__title"},[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),_c('p',{staticClass:"content-cover__description"},[_vm._v(_vm._s(_vm.description))]),_vm._v(" "),_c('div',[(_vm.cta)?_c(_vm.cta.type,_vm._b({tag:"component",class:_vm.getClassNames(_vm.cta.type)},'component',_vm.cta,false)):_vm._e()],1)])])],1)}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 393 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _contentGeneral = __webpack_require__(394);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _contentGeneral.ContentGeneral;
  }
});

/***/ }),
/* 394 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ContentGeneral = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _contentGeneralVue = __webpack_require__(395);

var _contentGeneralVue2 = _interopRequireDefault(_contentGeneralVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContentGeneral = function (_Vue) {
    _inherits(ContentGeneral, _Vue);

    function ContentGeneral() {
        _classCallCheck(this, ContentGeneral);

        return _possibleConstructorReturn(this, (ContentGeneral.__proto__ || Object.getPrototypeOf(ContentGeneral)).apply(this, arguments));
    }

    _createClass(ContentGeneral, [{
        key: "getClassNames",
        value: function getClassNames(type) {
            return {
                ContentButton: 'content-general__button button',
                ContentLink: 'content-general__link link link--medium',
                YoutubeLink: 'content-general__link link link--medium'
            }[type] || '';
        }
    }]);

    return ContentGeneral;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], ContentGeneral.prototype, "title", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], ContentGeneral.prototype, "description", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object }), __metadata("design:type", Object)], ContentGeneral.prototype, "cta", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object }), __metadata("design:type", Object)], ContentGeneral.prototype, "image", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Boolean, required: true }), __metadata("design:type", Object)], ContentGeneral.prototype, "reversed", void 0);
exports.ContentGeneral = ContentGeneral = __decorate([_contentGeneralVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'ContentGeneral'
})], ContentGeneral);
exports.ContentGeneral = ContentGeneral;

/***/ }),
/* 395 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"content-general"},[_c('section',{staticClass:"content-general__container"},[_c('div',{staticClass:"flexgrid flexgrid--gutter",class:{'flexgrid--row-reversed': _vm.reversed}},[_c('div',{staticClass:"flexgrid__cell--xs-6 content-general__grid-cell content-general__content"},[_c('h3',{staticClass:"content-general__title"},[_vm._v(" "+_vm._s(_vm.title))]),_vm._v(" "),_c('div',{staticClass:"content-manageble content-general__body",domProps:{"innerHTML":_vm._s(_vm.description)}}),_vm._v(" "),(_vm.cta)?_c(_vm.cta.type,_vm._b({tag:"component",class:_vm.getClassNames(_vm.cta.type)},'component',_vm.cta,false)):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"flexgrid__cell--xs-6 content-general__grid-cell content-general__image"},[_c('div',{staticClass:"content-general__image-wrapper"},[(_vm.image)?_c('c-image',_vm._b({},'c-image',_vm.image,false)):_vm._e()],1)])])])])}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 396 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _contentHighlight = __webpack_require__(397);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _contentHighlight.ContentHighlight;
  }
});

/***/ }),
/* 397 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ContentHighlight = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _contentHighlightVue = __webpack_require__(398);

var _contentHighlightVue2 = _interopRequireDefault(_contentHighlightVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContentHighlight = function (_Vue) {
    _inherits(ContentHighlight, _Vue);

    function ContentHighlight() {
        _classCallCheck(this, ContentHighlight);

        return _possibleConstructorReturn(this, (ContentHighlight.__proto__ || Object.getPrototypeOf(ContentHighlight)).apply(this, arguments));
    }

    return ContentHighlight;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], ContentHighlight.prototype, "title", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String }), __metadata("design:type", Object)], ContentHighlight.prototype, "subtitle", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String }), __metadata("design:type", Object)], ContentHighlight.prototype, "description", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object }), __metadata("design:type", Object)], ContentHighlight.prototype, "image", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object }), __metadata("design:type", Object)], ContentHighlight.prototype, "ctas", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Boolean, required: true }), __metadata("design:type", Object)], ContentHighlight.prototype, "reversed", void 0);
exports.ContentHighlight = ContentHighlight = __decorate([_contentHighlightVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'ContentHighlight'
})], ContentHighlight);
exports.ContentHighlight = ContentHighlight;

/***/ }),
/* 398 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"organism content-highlight"},[_c('section',{staticClass:"container content-highlight__container"},[_c('div',{staticClass:"flexgrid",class:{'flexgrid--row-reversed': _vm.reversed}},[_c('div',{staticClass:"flexgrid__cell--xs-6 content-highlight__grid-cell content-highlight__image"},[_c('div',{staticClass:"content-highlight__image-wrapper"},[(_vm.image)?_c('c-image',_vm._b({},'c-image',_vm.image,false)):_vm._e()],1)]),_vm._v(" "),_c('div',{staticClass:"flexgrid__cell--xs-6 content-highlight__grid-cell content-highlight__content"},[_c('HeaderBlock',{staticClass:"content-highlight-header",attrs:{"title":_vm.title,"subtitle":_vm.subtitle}}),_vm._v(" "),_c('div',{staticClass:"content-manageble content-highlight__body",domProps:{"innerHTML":_vm._s(_vm.description)}}),_vm._v(" "),_c('FooterBlock',{staticClass:"content-highlight-footer",attrs:{"ctas":_vm.ctas}})],1)])])])}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 399 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _countrySelector = __webpack_require__(400);

var _countrySelector2 = _interopRequireDefault(_countrySelector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _countrySelector2.default;

/***/ }),
/* 400 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _countrySelectorVue = __webpack_require__(401);

var _countrySelectorVue2 = _interopRequireDefault(_countrySelectorVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CountrySelector = function (_Vue) {
    _inherits(CountrySelector, _Vue);

    function CountrySelector() {
        _classCallCheck(this, CountrySelector);

        var _this = _possibleConstructorReturn(this, (CountrySelector.__proto__ || Object.getPrototypeOf(CountrySelector)).apply(this, arguments));

        _this.initPromise = null;
        _this.countryInput = null;
        _this.selectedCountry = null;
        return _this;
    }

    _createClass(CountrySelector, [{
        key: "onSelectedCountry",
        value: function onSelectedCountry() {
            this.$emit('input', this.selectedCountry);
        }
    }, {
        key: "focus",
        value: function () {
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

                                if (!this.$refs.autocomplete.input) {
                                    _context.next = 9;
                                    break;
                                }

                                _context.next = 8;
                                return this.$refs.autocomplete.init();

                            case 8:
                                this.$refs.autocomplete.resetInput();

                            case 9:
                                this.$refs.autocomplete.calculateDirection();

                            case 10:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function focus() {
                return _ref.apply(this, arguments);
            }

            return focus;
        }()
    }, {
        key: "focusClose",
        value: function focusClose() {
            this.$refs.closeCountryPanel.focus();
        }
    }, {
        key: "close",
        value: function close() {
            this.$emit('close');
        }
    }, {
        key: "countryChanged",
        value: function countryChanged(country) {
            var _this2 = this;

            return new Promise(function (resolve) {
                if (country !== null) {
                    setTimeout(function () {
                        _this2.selectedCountry = country;
                        resolve(country);
                    }, 100);
                }
            });
        }
    }, {
        key: "detectedCountries",
        get: function get() {
            var detectedCountries = [];
            if (!this.country || !this.country.code) {
                return detectedCountries;
            }
            try {
                var detectedCountryByIp = this.datasource[this.country.code];
                if (detectedCountryByIp) {
                    detectedCountries.push({
                        title: detectedCountryByIp,
                        value: this.country.code
                    });
                }
            } catch (ex) {
                throw ex;
            }
            return detectedCountries;
        }
    }]);

    return CountrySelector;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object, default: null }), __metadata("design:type", Object)], CountrySelector.prototype, "value", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, default: null }), __metadata("design:type", Object)], CountrySelector.prototype, "label", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, default: '' }), __metadata("design:type", Object)], CountrySelector.prototype, "placeholder", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, default: null }), __metadata("design:type", Object)], CountrySelector.prototype, "highlightedLabel", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, default: '' }), __metadata("design:type", Object)], CountrySelector.prototype, "suggestionsLabel", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ required: true }), __metadata("design:type", Object)], CountrySelector.prototype, "datasource", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object, default: null }), __metadata("design:type", Object)], CountrySelector.prototype, "country", void 0);
__decorate([(0, _vuePropertyDecorator.Watch)('selectedCountry'), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], CountrySelector.prototype, "onSelectedCountry", null);
CountrySelector = __decorate([_countrySelectorVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'country-selector'
})], CountrySelector);
exports.default = CountrySelector;

/***/ }),
/* 401 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"country-selector"},[_c('auto-complete',{ref:"autocomplete",staticClass:"country-selector__auto-complete auto-complete--small",attrs:{"placeholder":_vm.placeholder,"title-field":"name","value-field":"code","datasource":_vm.datasource,"storedLabel":_vm.highlightedLabel,"stored-items":_vm.detectedCountries,"suggestionsLabel":_vm.suggestionsLabel,"default-open":""},on:{"input":_vm.countryChanged,"close":_vm.close,"changeFocus":_vm.focusClose},model:{value:(_vm.countryInput),callback:function ($$v) {_vm.countryInput=$$v},expression:"countryInput"}}),_vm._v(" "),_c('icon-button',{ref:"closeCountryPanel",attrs:{"icon-name":"close","button-aria-label":"Cancel","button-class":"country-selector__icon-button icon-button settings-selector__edit-button icon-button--small icon-button--reversed"},on:{"click":_vm.close}})],1)}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 402 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _heroArticle = __webpack_require__(403);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _heroArticle.HeroArticle;
  }
});

/***/ }),
/* 403 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HeroArticle = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _heroArticleVue = __webpack_require__(404);

var _heroArticleVue2 = _interopRequireDefault(_heroArticleVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeroArticle = function (_Vue) {
    _inherits(HeroArticle, _Vue);

    function HeroArticle() {
        _classCallCheck(this, HeroArticle);

        return _possibleConstructorReturn(this, (HeroArticle.__proto__ || Object.getPrototypeOf(HeroArticle)).apply(this, arguments));
    }

    return HeroArticle;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], HeroArticle.prototype, "title", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: false }), __metadata("design:type", Object)], HeroArticle.prototype, "subtitle", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object, required: true }), __metadata("design:type", Object)], HeroArticle.prototype, "image", void 0);
exports.HeroArticle = HeroArticle = __decorate([_heroArticleVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'HeroArticle'
})], HeroArticle);
exports.HeroArticle = HeroArticle;

/***/ }),
/* 404 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"hero hero--article organism"},[_c('div',{staticClass:"hero-article__image--full"},[(this.image)?_c('c-image',_vm._b({attrs:{"resize-behavior":"fill"}},'c-image',this.image,false)):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"hero-article__image--overlay"}),_vm._v(" "),_c('section',{staticClass:"hero-article__container container"},[_c('div',{staticClass:"flexgrid__cell--xs-12 hero--article-reset"},[_c('HeaderBlock',{staticClass:"hero__article-header header-block--hero"},[_c('HeroHeading',{attrs:{"title":_vm.title,"subtitle":_vm.subtitle}})],1)],1)])])}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 405 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _heroBasic = __webpack_require__(406);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _heroBasic.HeroBasic;
  }
});

/***/ }),
/* 406 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HeroBasic = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _heroBasicVue = __webpack_require__(407);

var _heroBasicVue2 = _interopRequireDefault(_heroBasicVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeroBasic = function (_Vue) {
    _inherits(HeroBasic, _Vue);

    function HeroBasic() {
        _classCallCheck(this, HeroBasic);

        return _possibleConstructorReturn(this, (HeroBasic.__proto__ || Object.getPrototypeOf(HeroBasic)).apply(this, arguments));
    }

    return HeroBasic;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], HeroBasic.prototype, "title", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: false }), __metadata("design:type", Object)], HeroBasic.prototype, "subtitle", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], HeroBasic.prototype, "description", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object, required: false }), __metadata("design:type", Object)], HeroBasic.prototype, "image", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object, required: false }), __metadata("design:type", Object)], HeroBasic.prototype, "ctas", void 0);
exports.HeroBasic = HeroBasic = __decorate([_heroBasicVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'hero-basic'
})], HeroBasic);
exports.HeroBasic = HeroBasic;

/***/ }),
/* 407 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"hero hero--basic organism"},[_c('section',{staticClass:"container hero__container"},[_c('div',{staticClass:"flexgrid flexgrid--gutter flexgrid--column-reversed flexgrid--mobile-xl-row"},[_c('div',{staticClass:"flexgrid__cell--xs-6"},[_c('div',{staticClass:"hero__description"},[_c('HeaderBlock',{staticClass:"hero__header header-block--hero"},[_c('h1',{staticClass:"hero__title header-block__title--hero"},[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),(_vm.subtitle)?_c('h2',{staticClass:"hero__subtitle header-block__subtitle--hero"},[_vm._v(_vm._s(_vm.subtitle))]):_vm._e()]),_vm._v(" "),_c('p',{staticClass:"hero__intro copy--intro"},[_vm._v(_vm._s(_vm.description))]),_vm._v(" "),(_vm.ctas)?_c('cta-block',{attrs:{"mod":"hero","ctas":_vm.ctas.ctas,"styleContentButton":"button button--primary","block":"hero"}}):_vm._e()],1)]),_vm._v(" "),_c('div',{staticClass:"flexgrid__cell--xs-6"},[_c('div',{staticClass:"hero__image"},[(_vm.image)?[_c('c-image',_vm._b({attrs:{"keep-in-view":""}},'c-image',_vm.image,false))]:_vm._e()],2)])])])])}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 408 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _heroCover = __webpack_require__(409);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _heroCover.HeroCover;
  }
});

/***/ }),
/* 409 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HeroCover = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _heroCoverVue = __webpack_require__(410);

var _heroCoverVue2 = _interopRequireDefault(_heroCoverVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeroCover = function (_Vue) {
    _inherits(HeroCover, _Vue);

    function HeroCover() {
        _classCallCheck(this, HeroCover);

        var _this = _possibleConstructorReturn(this, (HeroCover.__proto__ || Object.getPrototypeOf(HeroCover)).apply(this, arguments));

        _this.showVideo = false;
        return _this;
    }

    _createClass(HeroCover, [{
        key: "toggleVideo",
        value: function toggleVideo() {
            this.showVideo = !this.showVideo;
        }
    }]);

    return HeroCover;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], HeroCover.prototype, "title", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], HeroCover.prototype, "description", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object, required: false }), __metadata("design:type", Object)], HeroCover.prototype, "ctas", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object, required: false }), __metadata("design:type", Object)], HeroCover.prototype, "image", void 0);
exports.HeroCover = HeroCover = __decorate([_heroCoverVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'hero-cover'
})], HeroCover);
exports.HeroCover = HeroCover;

/***/ }),
/* 410 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"hero hero--cover organism"},[_c('div',{staticClass:"hero-cover__image--full"},[(this.image)?_c('c-image',_vm._b({attrs:{"resize-behavior":"fill"}},'c-image',this.image,false)):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"hero-cover__image--overlay"}),_vm._v(" "),_c('section',{staticClass:"hero-cover__container container"},[_c('div',{staticClass:"flexgrid__cell--xs-6 hero--cover-reset"},[_c('h1',{staticClass:"hero-cover__headline"},[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),(_vm.description)?_c('p',{staticClass:"copy--intro"},[_vm._v(_vm._s(_vm.description))]):_vm._e(),_vm._v(" "),(_vm.ctas)?_c('cta-block',{attrs:{"mod":"hero","ctas":_vm.ctas.ctas,"styleContentButton":"button button--primary"}}):_vm._e()],1)])])}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 411 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _heroHomepage = __webpack_require__(412);

var _heroHomepage2 = _interopRequireDefault(_heroHomepage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _heroHomepage2.default;

/***/ }),
/* 412 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _heroHomepageVue = __webpack_require__(413);

var _heroHomepageVue2 = _interopRequireDefault(_heroHomepageVue);

var _buildSrcset = __webpack_require__(414);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeroHomepage = function (_Vue) {
    _inherits(HeroHomepage, _Vue);

    function HeroHomepage() {
        _classCallCheck(this, HeroHomepage);

        return _possibleConstructorReturn(this, (HeroHomepage.__proto__ || Object.getPrototypeOf(HeroHomepage)).apply(this, arguments));
    }

    _createClass(HeroHomepage, [{
        key: "srcSet",
        get: function get() {
            if (!this.image) return '';
            var _image = this.image,
                url = _image.url,
                focusArea = _image.focusArea;

            return (0, _buildSrcset.buildSrcSet)({ url: url, focusArea: focusArea });
        }
    }, {
        key: "srcSetPortrait",
        get: function get() {
            if (!this.image) return '';
            var _image2 = this.image,
                url = _image2.url,
                focusArea = _image2.focusArea;

            return (0, _buildSrcset.buildSrcSet)({ url: url, focusArea: focusArea, portrait: true });
        }
    }, {
        key: "srcSetWebp",
        get: function get() {
            if (!this.image) return '';
            var _image3 = this.image,
                url = _image3.url,
                focusArea = _image3.focusArea;

            return (0, _buildSrcset.buildSrcSet)({ url: url, focusArea: focusArea, webp: true });
        }
    }, {
        key: "srcSetWebpPortrait",
        get: function get() {
            if (!this.image) return '';
            var _image4 = this.image,
                url = _image4.url,
                focusArea = _image4.focusArea;

            return (0, _buildSrcset.buildSrcSet)({ url: url, focusArea: focusArea, webp: true, portrait: true });
        }
    }]);

    return HeroHomepage;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], HeroHomepage.prototype, "title", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: false }), __metadata("design:type", Object)], HeroHomepage.prototype, "description", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object, required: false }), __metadata("design:type", Object)], HeroHomepage.prototype, "image", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object, required: false }), __metadata("design:type", Object)], HeroHomepage.prototype, "ctas", void 0);
HeroHomepage = __decorate([_heroHomepageVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'hero-homepage'
})], HeroHomepage);
exports.default = HeroHomepage;

/***/ }),
/* 413 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hero-homepage"},[_c('div',{staticClass:"hero-homepage__content"},[_c('h1',{staticClass:"hero-homepage__title"},[_vm._v("\n            "+_vm._s(_vm.title)+"\n        ")]),_vm._v(" "),(_vm.image)?_c('picture',{attrs:{"role":"presentation"}},[_c('source',{attrs:{"srcset":_vm.srcSetWebpPortrait,"type":"image/webp","media":"(orientation: portrait)"}}),_vm._v(" "),_c('source',{attrs:{"srcset":_vm.srcSetWebp,"type":"image/webp","media":"(orientation: landscape)"}}),_vm._v(" "),_c('source',{attrs:{"srcset":_vm.srcSetPortrait,"media":"(orientation: portrait)"}}),_vm._v(" "),_c('source',{attrs:{"srcset":_vm.srcSet,"media":"(orientation: landscape)"}}),_vm._v(" "),_c('img',{staticClass:"hero-homepage__image",attrs:{"src":((_vm.image.url) + "?w=1920&h=1080&fit=fill"),"alt":""}})]):_vm._e(),_vm._v(" "),(_vm.description)?_c('p',{staticClass:"hero-homepage__description"},[_vm._v("\n            "+_vm._s(_vm.description)+"\n        ")]):_vm._e(),_vm._v(" "),(_vm.ctas)?_c('cta-block',{attrs:{"ctas":_vm.ctas.ctas}}):_vm._e()],1)])}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 414 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var LANDSCAPE_SCREEN_WIDTHS = [1280, 1920, 2048, 2880];
var PORTRAIT_SCREEN_WIDTHS = [750, 1125, 1536];
var buildSrcSet = exports.buildSrcSet = function buildSrcSet(_ref) {
    var url = _ref.url,
        _ref$focusArea = _ref.focusArea,
        focusArea = _ref$focusArea === undefined ? '' : _ref$focusArea,
        _ref$webp = _ref.webp,
        webp = _ref$webp === undefined ? false : _ref$webp,
        _ref$portrait = _ref.portrait,
        portrait = _ref$portrait === undefined ? false : _ref$portrait;
    return (portrait ? PORTRAIT_SCREEN_WIDTHS : LANDSCAPE_SCREEN_WIDTHS).map(function (width) {
        var height = Math.ceil(portrait ? width / 9 * 16 : width / 16 * 9);
        return url + '?w=' + width + '&h=' + height + '&fit=fill&f=' + focusArea + (webp ? '&fm=webp' : '') + ' ' + width + 'w';
    }).join(', ');
};

/***/ }),
/* 415 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _heroProduct = __webpack_require__(416);

var _heroProduct2 = _interopRequireDefault(_heroProduct);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _heroProduct2.default;

/***/ }),
/* 416 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _heroProductVue = __webpack_require__(417);

var _heroProductVue2 = _interopRequireDefault(_heroProductVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeroProduct = function (_Vue) {
    _inherits(HeroProduct, _Vue);

    function HeroProduct() {
        _classCallCheck(this, HeroProduct);

        return _possibleConstructorReturn(this, (HeroProduct.__proto__ || Object.getPrototypeOf(HeroProduct)).apply(this, arguments));
    }

    _createClass(HeroProduct, [{
        key: "productsClass",
        get: function get() {
            return "hero__products-item hero__products-item--" + (this.products.length > 1 ? 'multiple' : 'single');
        }
    }]);

    return HeroProduct;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], HeroProduct.prototype, "title", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: false }), __metadata("design:type", Object)], HeroProduct.prototype, "subtitle", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], HeroProduct.prototype, "description", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object, required: false }), __metadata("design:type", Object)], HeroProduct.prototype, "image", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object, required: false }), __metadata("design:type", Object)], HeroProduct.prototype, "ctas", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Array, required: true }), __metadata("design:type", Object)], HeroProduct.prototype, "products", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Array, required: false }), __metadata("design:type", Object)], HeroProduct.prototype, "linkList", void 0);
HeroProduct = __decorate([_heroProductVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'HeroProduct'
})], HeroProduct);
exports.default = HeroProduct;

/***/ }),
/* 417 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"hero hero--product organism"},[_c('section',{staticClass:"container hero__container"},[_c('div',{staticClass:"flexgrid flexgrid--gutter flexgrid--column-reversed flexgrid--mobile-xl-row"},[_c('div',{staticClass:"flexgrid__cell--xs-6"},[_c('div',{staticClass:"hero__description"},[_c('HeaderBlock',{staticClass:"hero__header header-block--hero"},[_c('HeroHeading',{attrs:{"title":_vm.title,"subtitle":_vm.subtitle}})],1),_vm._v(" "),_c('p',{staticClass:"hero__intro copy--intro"},[_vm._v(_vm._s(_vm.description))]),_vm._v(" "),(_vm.products)?_c('div',{staticClass:"hero__products"},[_vm._l((_vm.products),function(product){return [_c('product',_vm._b({class:_vm.productsClass},'product',product,false))]})],2):_vm._e(),_vm._v(" "),(_vm.ctas)?_c('cta-block',{attrs:{"mod":"hero","ctas":_vm.ctas.ctas,"styleContentButton":"button button--primary","block":"hero"}}):_vm._e(),_vm._v(" "),(_vm.linkList)?_c('ul',{staticClass:"hero__linklist"},[_vm._l((_vm.linkList),function(link){return [_c('li',{staticClass:"hero__linklist-item"},[_c('ContentLink',_vm._b({staticClass:"link hero__linklist-link",attrs:{"label":link.label}},'ContentLink',link,false))],1)]})],2):_vm._e()],1)]),_vm._v(" "),_c('div',{staticClass:"flexgrid__cell--xs-6"},[_c('div',{staticClass:"hero__image"},[(_vm.image)?[_c('c-image',_vm._b({attrs:{"keep-in-view":""}},'c-image',_vm.image,false))]:_vm._e()],2)])])])])}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 418 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _localeSelector = __webpack_require__(419);

var _localeSelector2 = _interopRequireDefault(_localeSelector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _localeSelector2.default;

/***/ }),
/* 419 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _localeSelectorVue = __webpack_require__(420);

var _localeSelectorVue2 = _interopRequireDefault(_localeSelectorVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LocaleSelector = function (_Vue) {
    _inherits(LocaleSelector, _Vue);

    function LocaleSelector() {
        _classCallCheck(this, LocaleSelector);

        var _this = _possibleConstructorReturn(this, (LocaleSelector.__proto__ || Object.getPrototypeOf(LocaleSelector)).apply(this, arguments));

        _this.ready = false;
        _this.countrySelectorOpen = false;
        _this.countryInput = null;
        return _this;
    }

    _createClass(LocaleSelector, [{
        key: "beforeMount",
        value: function beforeMount() {
            this.countryInput = this.country;
        }
    }, {
        key: "mounted",
        value: function mounted() {
            this.ready = true;
        }
    }, {
        key: "toggleCountrySelector",
        value: function () {
            var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                this.countrySelectorOpen = !this.countrySelectorOpen;

                                if (!(this.countrySelectorOpen && this.$refs.countrySelector)) {
                                    _context.next = 6;
                                    break;
                                }

                                _context.next = 4;
                                return this.$refs.countrySelector.focus();

                            case 4:
                                _context.next = 10;
                                break;

                            case 6:
                                if (!(!this.countrySelectorOpen && this.$refs.countrySelectorToggle)) {
                                    _context.next = 10;
                                    break;
                                }

                                _context.next = 9;
                                return this.$nextTick();

                            case 9:
                                this.$refs.countrySelectorToggle.focus();

                            case 10:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function toggleCountrySelector() {
                return _ref.apply(this, arguments);
            }

            return toggleCountrySelector;
        }()
    }, {
        key: "setCountry",
        value: function () {
            var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                this.$emit('country-changed', { country: this.countryInput });
                                _context2.next = 3;
                                return this.toggleCountrySelector();

                            case 3:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function setCountry() {
                return _ref2.apply(this, arguments);
            }

            return setCountry;
        }()
    }, {
        key: "currentCountryLabel",
        get: function get() {
            if (this.country) {
                return "" + this.country.name;
            }
            return 'Please select your country';
        }
    }, {
        key: "currentCountryAriaLabel",
        get: function get() {
            return "Change your country, currently: " + this.country.name;
        }
    }]);

    return LocaleSelector;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, default: null }), __metadata("design:type", Object)], LocaleSelector.prototype, "label", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, default: '' }), __metadata("design:type", Object)], LocaleSelector.prototype, "placeholder", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, default: null }), __metadata("design:type", Object)], LocaleSelector.prototype, "highlightedLabel", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, default: '' }), __metadata("design:type", Object)], LocaleSelector.prototype, "suggestionsLabel", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ required: true }), __metadata("design:type", Object)], LocaleSelector.prototype, "datasource", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object, default: null }), __metadata("design:type", Object)], LocaleSelector.prototype, "country", void 0);
LocaleSelector = __decorate([_localeSelectorVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'locale-selector'
})], LocaleSelector);
exports.default = LocaleSelector;

/***/ }),
/* 420 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"locale-selector"},[_c('icon-button',{directives:[{name:"show",rawName:"v-show",value:(!_vm.countrySelectorOpen),expression:"!countrySelectorOpen"}],ref:"countrySelectorToggle",staticClass:"icon-button--small locale-selector__edit--buton",attrs:{"icon-name":"geo","aria-label":_vm.currentCountryAriaLabel},on:{"click":_vm.toggleCountrySelector}},[_vm._v("\n        "+_vm._s(_vm.currentCountryLabel)+"\n    ")]),_vm._v(" "),_c('icon-button',{directives:[{name:"show",rawName:"v-show",value:(_vm.countrySelectorOpen),expression:"countrySelectorOpen"}],staticClass:"icon-button--small locale-selector__edit--buton",attrs:{"icon-name":"geo","aria-label":"change your country"}}),_vm._v(" "),(_vm.ready)?_c('country-selector',_vm._b({directives:[{name:"show",rawName:"v-show",value:(_vm.countrySelectorOpen),expression:"countrySelectorOpen"}],ref:"countrySelector",staticClass:"footer__country-selector",on:{"close":_vm.toggleCountrySelector,"input":_vm.setCountry},model:{value:(_vm.countryInput),callback:function ($$v) {_vm.countryInput=$$v},expression:"countryInput"}},'country-selector',_vm.$props,false)):_vm._e()],1)}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 421 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _overview = __webpack_require__(422);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _overview.Overview;
  }
});

/***/ }),
/* 422 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Overview = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _overviewVue = __webpack_require__(423);

var _overviewVue2 = _interopRequireDefault(_overviewVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Overview = function (_Vue) {
    _inherits(Overview, _Vue);

    function Overview() {
        _classCallCheck(this, Overview);

        return _possibleConstructorReturn(this, (Overview.__proto__ || Object.getPrototypeOf(Overview)).apply(this, arguments));
    }

    return Overview;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object, required: false }), __metadata("design:type", Object)], Overview.prototype, "ctas", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Array, required: true }), __metadata("design:type", Object)], Overview.prototype, "sections", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: false }), __metadata("design:type", Object)], Overview.prototype, "subtitle", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], Overview.prototype, "title", void 0);
exports.Overview = Overview = __decorate([_overviewVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'Overview'
})], Overview);
exports.Overview = Overview;

/***/ }),
/* 423 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"organism overview"},[_c('section',{staticClass:"container"},[_c('HeaderBlock',{attrs:{"title":_vm.title,"subtitle":_vm.subtitle}}),_vm._v(" "),_vm._l((_vm.sections),function(section,index){return [_c(section.type,_vm._b({key:index,tag:"component"},'component',section,false))]}),_vm._v(" "),_c('FooterBlock',{attrs:{"ctas":_vm.ctas}})],2)])}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 424 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _overviewUbr = __webpack_require__(425);

var _overviewUbr2 = _interopRequireDefault(_overviewUbr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _overviewUbr2.default;

/***/ }),
/* 425 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _overviewUbrVue = __webpack_require__(426);

var _overviewUbrVue2 = _interopRequireDefault(_overviewUbrVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OverviewUBR = function (_Vue) {
    _inherits(OverviewUBR, _Vue);

    function OverviewUBR() {
        _classCallCheck(this, OverviewUBR);

        return _possibleConstructorReturn(this, (OverviewUBR.__proto__ || Object.getPrototypeOf(OverviewUBR)).apply(this, arguments));
    }

    return OverviewUBR;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], OverviewUBR.prototype, "title", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: false }), __metadata("design:type", Object)], OverviewUBR.prototype, "subtitle", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Array, required: true }), __metadata("design:type", Object)], OverviewUBR.prototype, "items", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object, required: false }), __metadata("design:type", Object)], OverviewUBR.prototype, "ctas", void 0);
OverviewUBR = __decorate([_overviewUbrVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'overview-ubr'
})], OverviewUBR);
exports.default = OverviewUBR;

/***/ }),
/* 426 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"organism overview-ubr"},[_c('section',{staticClass:"container"},[_c('HeaderBlock',{attrs:{"title":_vm.title,"subtitle":_vm.subtitle}}),_vm._v(" "),_c('div',{staticClass:"flexgrid flexgrid--justify-center flexgrid--gutter flexgrid--mobile-xl-row"},_vm._l((_vm.items),function(blockIcon,index){return _c('BlockIcon',_vm._b({key:index,staticClass:"flexgrid__cell flexgrid__cell--xs-6 flexgrid__cell--sm-4 flexgrid__cell--lg-3"},'BlockIcon',blockIcon,false))}),1),_vm._v(" "),_c('FooterBlock',{attrs:{"ctas":_vm.ctas}})],1)])}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 427 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pageFooter = __webpack_require__(428);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _pageFooter.PageFooter;
  }
});

/***/ }),
/* 428 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PageFooter = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _pageFooterVue = __webpack_require__(429);

var _pageFooterVue2 = _interopRequireDefault(_pageFooterVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageFooter = function (_Vue) {
    _inherits(PageFooter, _Vue);

    function PageFooter() {
        _classCallCheck(this, PageFooter);

        return _possibleConstructorReturn(this, (PageFooter.__proto__ || Object.getPrototypeOf(PageFooter)).apply(this, arguments));
    }

    return PageFooter;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Array, required: true }), __metadata("design:type", Object)], PageFooter.prototype, "navigation", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object, required: true }), __metadata("design:type", Object)], PageFooter.prototype, "localeSelector", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Array, required: true }), __metadata("design:type", Object)], PageFooter.prototype, "legalNavigation", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], PageFooter.prototype, "copyrightLabel", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object, required: true }), __metadata("design:type", Object)], PageFooter.prototype, "country", void 0);
exports.PageFooter = PageFooter = __decorate([_pageFooterVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'PageFooter'
})], PageFooter);
exports.PageFooter = PageFooter;

/***/ }),
/* 429 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"footer"},[_c('div',{staticClass:"footer__container"},[_c('div',{staticClass:"footer__primary"},[_c('router-link',{staticClass:"branded-logo footer__branded-logo",attrs:{"to":"/","aria-label":"Ultimaker homepage"}},[_c('icon',{staticClass:"branded-logo__u",attrs:{"icon-name":"ultimaker-u"}})],1),_vm._v(" "),(_vm.navigation && _vm.navigation.length)?_c('nav',{staticClass:"footer__navigation"},_vm._l((_vm.navigation),function(navigationItem,index){return _c('footer-navigation-category',_vm._b({key:index},'footer-navigation-category',navigationItem,false))}),1):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"footer__secondary"},[_c('social-nav'),_vm._v(" "),_c('locale-selector',_vm._g(_vm._b({staticClass:"footer__locale-selector",attrs:{"country":_vm.country}},'locale-selector',_vm.localeSelector,false),_vm.$listeners))],1),_vm._v(" "),_c('div',{staticClass:"footer__tertiary"},[(_vm.legalNavigation && _vm.legalNavigation.length)?_c('nav',{staticClass:"footer__legal"},[_c('footer-navigation-category',{staticClass:"footer__legal__column",attrs:{"label":_vm.copyrightLabel,"items":_vm.legalNavigation}})],1):_vm._e()])])])}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 430 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pageHeader = __webpack_require__(431);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _pageHeader.PageHeader;
  }
});

/***/ }),
/* 431 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PageHeader = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _pageHeaderVue = __webpack_require__(432);

var _pageHeaderVue2 = _interopRequireDefault(_pageHeaderVue);

var _viewport = __webpack_require__(1);

var _viewport2 = _interopRequireDefault(_viewport);

var _publicEventService = __webpack_require__(8);

var _publicEventService2 = _interopRequireDefault(_publicEventService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageHeader = function (_Vue) {
    _inherits(PageHeader, _Vue);

    function PageHeader() {
        _classCallCheck(this, PageHeader);

        var _this = _possibleConstructorReturn(this, (PageHeader.__proto__ || Object.getPrototypeOf(PageHeader)).apply(this, arguments));

        _this.assistUsed = false;
        _this.viewportUtil = new _viewport2.default();
        _this.offsetTopHeader = 0;
        _this.searchOpen = false;
        _this.showCompactMenu = true;
        _this.maxMobileRes = 1025;
        _this.resize = false;
        return _this;
    }

    _createClass(PageHeader, [{
        key: "navAssistToggle",
        value: function navAssistToggle() {
            if (this.searchOpen || this.mainNavOpen) {
                this.searchOpen = false;
                this.$emit('toggle-nav', false);
            } else {
                this.$emit('toggle-nav', true);
                this.searchOpen = false;
            }
        }
    }, {
        key: "openSearch",
        value: function openSearch() {
            this.searchOpen = true;
        }
    }, {
        key: "closeSearch",
        value: function closeSearch() {
            this.searchOpen = false;
        }
    }, {
        key: "handleFocus",
        value: function handleFocus() {
            if (!this.$refs.search || !this.$refs.search.focusInput) {
                return;
            }
            this.$refs.search.focusInput();
        }
    }, {
        key: "focusFirstSysNavItem",
        value: function focusFirstSysNavItem() {
            var firstNavItem = this.$el.querySelector('.sys-nav__link');
            if (firstNavItem) {
                firstNavItem.focus();
            }
        }
    }, {
        key: "focusHomeNavItem",
        value: function focusHomeNavItem() {
            var homeLink = this.$el.querySelector('.home-link');
            if (homeLink) {
                homeLink.focus();
            }
        }
    }, {
        key: "handleResize",
        value: function handleResize() {
            this.showCompactMenu = this.viewportUtil.screenWidth < this.maxMobileRes;
        }
    }, {
        key: "beforeMount",
        value: function beforeMount() {
            var _this2 = this;

            _publicEventService2.default.on('size', function (_ref) {
                var element = _ref.element,
                    size = _ref.size;

                if (element === 'drawer') {
                    _this2.offsetTopHeader = size;
                }
            });
        }
    }, {
        key: "mounted",
        value: function mounted() {
            this.handleResize();
            this.viewportUtil.addResizeHandler(this.handleResize);
        }
    }, {
        key: "beforeDestroy",
        value: function beforeDestroy() {
            this.viewportUtil.removeResizeHandler(this.handleResize);
        }
    }, {
        key: "assistState",
        get: function get() {
            return this.mainNavOpen || this.searchOpen;
        }
    }, {
        key: "headerClasses",
        get: function get() {
            var scrollY = this.viewportUtil.scrollY < 0 ? 0 : this.viewportUtil.scrollY;
            var isFixed = scrollY >= this.offsetTopHeader;
            return {
                'header--absolute': !isFixed,
                'header--fixed': isFixed
            };
        }
    }]);

    return PageHeader;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Array, required: false }), __metadata("design:type", Object)], PageHeader.prototype, "navigation", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object, required: false }), __metadata("design:type", Object)], PageHeader.prototype, "cta", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object, required: false }), __metadata("design:type", Object)], PageHeader.prototype, "search", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Boolean, required: true }), __metadata("design:type", Boolean)], PageHeader.prototype, "mainNavOpen", void 0);
exports.PageHeader = PageHeader = __decorate([_pageHeaderVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'PageHeader'
})], PageHeader);
exports.PageHeader = PageHeader;

/***/ }),
/* 432 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{directives:[{name:"size-emitter",rawName:"v-size-emitter",value:('header'),expression:"'header'"}],staticClass:"header",class:_vm.headerClasses,attrs:{"role":"banner"}},[_c('div',{staticClass:"header__top",class:{'header--mobile-inverted': _vm.mainNavOpen}},[_c('router-link',{staticClass:"home-link",attrs:{"to":"/","aria-label":"Ultimaker homepage"}},[_c('icon',{staticClass:"home-link__logo",attrs:{"icon-name":"logo-ultimaker"}})],1),_vm._v(" "),(_vm.navigation)?_c('main-navigation',_vm._g({attrs:{"navigation":_vm.navigation,"main-nav-open":_vm.mainNavOpen}},_vm.$listeners)):_vm._e(),_vm._v(" "),(_vm.cta && _vm.search)?_c('sys-nav',{attrs:{"order-now-icon":_vm.cta.icon,"order-now-label":_vm.cta.label,"order-now-link":_vm.cta.url,"search-icon":_vm.search.icon,"search-label":_vm.search.label},on:{"open-search":_vm.openSearch}}):_vm._e(),_vm._v(" "),_c('nav-assist',{staticClass:"main-nav__nav-assist",attrs:{"open-state":_vm.mainNavOpen},on:{"toggle":_vm.navAssistToggle}}),_vm._v(" "),_c('transition',{attrs:{"name":"search"},on:{"after-enter":_vm.handleFocus,"leave":_vm.handleFocus}},[(_vm.searchOpen)?_c('search-bar',{ref:"search",staticClass:"header__search",attrs:{"label":_vm.search.label,"placeholder":_vm.search.placeholder,"open-state":_vm.searchOpen},on:{"close":_vm.closeSearch}}):_vm._e()],1)],1)])}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 433 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _searchResults = __webpack_require__(434);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _searchResults.SearchResults;
  }
});

/***/ }),
/* 434 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SearchResults = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _stepRowAnimation = __webpack_require__(9);

var _vuePropertyDecorator = __webpack_require__(0);

var _searchResultsVue = __webpack_require__(435);

var _searchResultsVue2 = _interopRequireDefault(_searchResultsVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SearchResults = function (_Mixins) {
    _inherits(SearchResults, _Mixins);

    function SearchResults() {
        _classCallCheck(this, SearchResults);

        return _possibleConstructorReturn(this, (SearchResults.__proto__ || Object.getPrototypeOf(SearchResults)).apply(this, arguments));
    }

    _createClass(SearchResults, [{
        key: "loadMore",
        value: function loadMore() {
            this.$emit(this.eventLoadMore);
        }
    }, {
        key: "submitSearch",
        value: function submitSearch(payload) {
            this.$emit(this.eventSubmitSearch, payload);
        }
    }, {
        key: "computedTitle",
        get: function get() {
            return this.searchResults.length ? "Search results for: \u201C" + this.terms + "\u201D" : "No results for \u201C" + this.terms + "\u201D";
        }
    }]);

    return SearchResults;
}((0, _vuePropertyDecorator.Mixins)(_stepRowAnimation.StepRowAnimation));
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], SearchResults.prototype, "eventLoadMore", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], SearchResults.prototype, "eventSubmitSearch", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Boolean, required: true }), __metadata("design:type", Object)], SearchResults.prototype, "isLoading", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String }), __metadata("design:type", Object)], SearchResults.prototype, "label", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String }), __metadata("design:type", Object)], SearchResults.prototype, "placeholder", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Array, required: true }), __metadata("design:type", Object)], SearchResults.prototype, "searchResults", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Boolean, required: true }), __metadata("design:type", Object)], SearchResults.prototype, "showLoadMore", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], SearchResults.prototype, "terms", void 0);
exports.SearchResults = SearchResults = __decorate([_searchResultsVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'SearchResults'
})], SearchResults);
exports.SearchResults = SearchResults;

/***/ }),
/* 435 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"search-results"},[_c('search-bar-page',{attrs:{"eventSubmitSearch":_vm.eventSubmitSearch,"isLoading":_vm.isLoading,"label":_vm.label,"placeholder":_vm.placeholder,"terms":_vm.terms},on:_vm._d({},[_vm.eventSubmitSearch,_vm.submitSearch])}),_vm._v(" "),(_vm.terms.length && !_vm.isLoading)?_c('h1',{staticClass:"search-results__title"},[_vm._v("\n        "+_vm._s(_vm.computedTitle)+"\n    ")]):_vm._e(),_vm._v(" "),(_vm.searchResults.length)?_c('ul',{staticClass:"search-results__list"},_vm._l((_vm.searchResults),function(searchResult,key){return _c('li',{key:key,staticClass:"search-results__list-item"},[_c('search-result',_vm._b({attrs:{"terms":_vm.terms}},'search-result',searchResult,false))],1)}),0):_vm._e(),_vm._v(" "),(_vm.showLoadMore)?_c('footer',{staticClass:"search-results__footer"},[_c('button',{staticClass:"button button--secondary",attrs:{"disabled":_vm.isLoading},on:{"click":_vm.loadMore}},[_vm._v("\n            Load more\n        ")])]):_vm._e()],1)}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 436 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tabbedContent = __webpack_require__(437);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _tabbedContent.TabbedContent;
  }
});

/***/ }),
/* 437 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TabbedContent = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _tabbedContentVue = __webpack_require__(438);

var _tabbedContentVue2 = _interopRequireDefault(_tabbedContentVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TabbedContent = function (_Vue) {
    _inherits(TabbedContent, _Vue);

    function TabbedContent() {
        _classCallCheck(this, TabbedContent);

        return _possibleConstructorReturn(this, (TabbedContent.__proto__ || Object.getPrototypeOf(TabbedContent)).apply(this, arguments));
    }

    return TabbedContent;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], TabbedContent.prototype, "title", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Array, required: true }), __metadata("design:type", Object)], TabbedContent.prototype, "tabs", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object }), __metadata("design:type", Object)], TabbedContent.prototype, "ctas", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String }), __metadata("design:type", Object)], TabbedContent.prototype, "subtitle", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Boolean, required: false, default: false }), __metadata("design:type", Object)], TabbedContent.prototype, "sequenced", void 0);
exports.TabbedContent = TabbedContent = __decorate([_tabbedContentVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'TabbedContent'
})], TabbedContent);
exports.TabbedContent = TabbedContent;

/***/ }),
/* 438 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"organism tabbed-content"},[_c('section',{staticClass:"container"},[_c('HeaderBlock',{attrs:{"title":_vm.title,"subtitle":_vm.subtitle}}),_vm._v(" "),(_vm.tabs && _vm.tabs.length)?_c('Tabs',{attrs:{"tabs":_vm.tabs,"sequenced":_vm.sequenced}}):_vm._e(),_vm._v(" "),_c('FooterBlock',{attrs:{"ctas":_vm.ctas}})],1)])}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 439 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tabbedTable = __webpack_require__(440);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _tabbedTable.TabbedTable;
  }
});

/***/ }),
/* 440 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TabbedTable = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _tabbedTableVue = __webpack_require__(441);

var _tabbedTableVue2 = _interopRequireDefault(_tabbedTableVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TabbedTable = function (_Vue) {
    _inherits(TabbedTable, _Vue);

    function TabbedTable() {
        _classCallCheck(this, TabbedTable);

        return _possibleConstructorReturn(this, (TabbedTable.__proto__ || Object.getPrototypeOf(TabbedTable)).apply(this, arguments));
    }

    return TabbedTable;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], TabbedTable.prototype, "title", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: false }), __metadata("design:type", Object)], TabbedTable.prototype, "subtitle", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Array, required: true }), __metadata("design:type", Object)], TabbedTable.prototype, "tabs", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object, required: true }), __metadata("design:type", Object)], TabbedTable.prototype, "ctas", void 0);
exports.TabbedTable = TabbedTable = __decorate([_tabbedTableVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'TabbedTable'
})], TabbedTable);
exports.TabbedTable = TabbedTable;

/***/ }),
/* 441 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"organism tabbed-table"},[_c('section',{staticClass:"container"},[_c('header-block',{attrs:{"title":_vm.title,"subtitle":_vm.subtitle}}),_vm._v(" "),(_vm.tabs && _vm.tabs.length)?_c('tabs',{attrs:{"tabs":_vm.tabs,"sequenced":false}}):_vm._e(),_vm._v(" "),_c('footer-block',{attrs:{"ctas":_vm.ctas}})],1)])}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 442 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tableCompare = __webpack_require__(443);

var _tableCompare2 = _interopRequireDefault(_tableCompare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _tableCompare2.default;

/***/ }),
/* 443 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _debounce = __webpack_require__(7);

var _debounce2 = _interopRequireDefault(_debounce);

var _viewport = __webpack_require__(1);

var _viewport2 = _interopRequireDefault(_viewport);

var _browserCapabilities = __webpack_require__(2);

var _browserCapabilities2 = _interopRequireDefault(_browserCapabilities);

var _tableCompareVue = __webpack_require__(444);

var _tableCompareVue2 = _interopRequireDefault(_tableCompareVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TableCompare = function (_Vue) {
    _inherits(TableCompare, _Vue);

    function TableCompare() {
        _classCallCheck(this, TableCompare);

        var _this = _possibleConstructorReturn(this, (TableCompare.__proto__ || Object.getPrototypeOf(TableCompare)).apply(this, arguments));

        _this.disableLeft = false;
        _this.disableRight = false;
        _this.viewportUtility = new _viewport2.default();
        return _this;
    }

    _createClass(TableCompare, [{
        key: "mounted",
        value: function mounted() {
            this.resizeHandler = (0, _debounce2.default)(this.resetScrollPosition, 100);
            this.viewportUtility.addResizeHandler(this.resizeHandler);
            var options = {
                root: this.$refs.scrollWidthContainer,
                threshold: 0.99
            };
            if (_browserCapabilities2.default.supportsIntersectionObserver) {
                this.observer = new IntersectionObserver(this.intersectionObserver, options);
                this.observeColumns();
            }
        }
    }, {
        key: "beforeDestroy",
        value: function beforeDestroy() {
            this.resizeHandler.cancel();
            this.viewportUtility.removeResizeHandler(this.resizeHandler);
            this.observer.unobserve(this.$refs.scrollContainer);
        }
    }, {
        key: "observeColumns",
        value: function observeColumns() {
            this.observer.disconnect();
            if (this.$refs.columns && this.$refs.columns.length) {
                this.observer.observe(this.$refs.columns[0]);
                this.observer.observe(this.$refs.columns.slice(-1)[0]);
            }
        }
    }, {
        key: "intersectionObserver",
        value: function intersectionObserver(entries) {
            var _this2 = this;

            var firstColumn = this.$refs.columns[0];
            var lastColumn = this.$refs.columns.slice(-1)[0];
            this.disableLeft = false;
            this.disableRight = false;
            entries.some(function (entry) {
                if (entry.isIntersecting) {
                    if (entry.target === firstColumn) {
                        _this2.disableLeft = true;
                        return true;
                    }
                    if (entry.target === lastColumn) {
                        _this2.disableRight = true;
                        return true;
                    }
                }
                return false;
            });
        }
    }, {
        key: "scroll",
        value: function scroll() {
            var reverse = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            var scrollWidth = this.$refs.scrollWidthContainer.clientWidth;
            var scrollLeft = this.$refs.scrollContainer.scrollLeft;

            this.$refs.scrollContainer.scrollTo({
                left: scrollLeft + (reverse ? -1 : 1) * scrollWidth,
                behavior: 'smooth'
            });
        }
    }, {
        key: "resetScrollPosition",
        value: function resetScrollPosition() {
            this.$refs.scrollContainer.scrollLeft = 0;
        }
    }, {
        key: "getClassNames",
        value: function getClassNames(type) {
            return {
                ContentButton: 'button',
                ContentLink: 'link link--medium',
                YoutubeLink: ''
            }[type] || '';
        }
    }]);

    return TableCompare;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], TableCompare.prototype, "title", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String }), __metadata("design:type", Object)], TableCompare.prototype, "subtitle", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object, required: true }), __metadata("design:type", Object)], TableCompare.prototype, "content", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object }), __metadata("design:type", Object)], TableCompare.prototype, "ctas", void 0);
__decorate([(0, _vuePropertyDecorator.Watch)('content.columns'), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], TableCompare.prototype, "observeColumns", null);
TableCompare = __decorate([_tableCompareVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'TableCompare'
})], TableCompare);
exports.default = TableCompare;

/***/ }),
/* 444 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"organism"},[_c('div',{staticClass:"container"},[_c('header-block',{attrs:{"title":_vm.title,"subtitle":_vm.subtitle}}),_vm._v(" "),_c('div',{ref:"scrollWidthContainer",staticClass:"table-compare"},[_c('div',{ref:"scrollContainer",staticClass:"table-compare__scroll-container"},[(_vm.content)?_c('table',{staticClass:"table-compare__table",style:(("--number-of-columns: " + (_vm.content.columns.length) + ";"))},[_c('colgroup',[_c('col'),_vm._v(" "),_vm._l((_vm.content.columns),function(col){return _c('col')})],2),_vm._v(" "),_c('thead',[_c('tr',[_c('th',{attrs:{"scope":"col"}}),_vm._v(" "),_vm._l((_vm.content.columns),function(col){return _c('th',{ref:"columns",refInFor:true,attrs:{"scope":"col"}},[(col.image && col.image.url)?_c('c-image',_vm._b({staticClass:"table-compare__image",attrs:{"alt":"col.alt"}},'c-image',col.image,false)):_vm._e(),_vm._v("\n                            "+_vm._s(col.title)+"\n                        ")],1)})],2)]),_vm._v(" "),_c('tbody',_vm._l((_vm.content.rows),function(row){return _c('tr',[_c('th',{attrs:{"scope":"row"}},[(row.tooltip)?_c('div',{staticClass:"table-compare__feature"},[_c('tooltip-toggle',_vm._b({attrs:{"label":row.label}},'tooltip-toggle',row.tooltip,false))],1):_c('div',{staticClass:"table-compare__feature--no-tooltip"},[_vm._v("\n                                    "+_vm._s(row.label)+"\n                            ")])]),_vm._v(" "),_vm._l((row.cells),function(cell){return _c('td',[_c('span',{staticClass:"table-compare__cell"},[_vm._v(_vm._s(cell.label))]),_vm._v(" "),(cell.checked)?_c('icon',{staticClass:"table-compare__checkmark",attrs:{"icon-name":"checkmark"}}):_vm._e()],1)})],2)}),0),_vm._v(" "),_c('tfoot',[_c('tr',[_c('th',{attrs:{"scope":"row"}}),_vm._v(" "),_vm._l((_vm.content.columns),function(cell){return _c('td',[(cell.cta)?_c(cell.cta.type,_vm._b({tag:"component",class:_vm.getClassNames(cell.cta.type)},'component',cell.cta,false)):_vm._e()],1)})],2)])]):_vm._e()]),_vm._v(" "),(_vm.content.columns.length > 1)?_c('div',{staticClass:"table-compare__scroll-buttons"},[_c('icon-button',{staticClass:"table-compare__scroll-button table-compare__scroll-button--left",attrs:{"icon-name":"angle-left","disabled":_vm.disableLeft},on:{"click":function($event){return _vm.scroll(true)}}}),_vm._v(" "),_c('icon-button',{staticClass:"table-compare__scroll-button table-compare__scroll-button--right",attrs:{"icon-name":"angle-right","disabled":_vm.disableRight},on:{"click":function($event){return _vm.scroll(false)}}})],1):_vm._e()]),_vm._v(" "),_c('footer-block',{attrs:{"ctas":_vm.ctas}})],1)])}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 445 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _colors = __webpack_require__(18);

Object.defineProperty(exports, 'Colors', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_colors).default;
  }
});

var _subnavigation = __webpack_require__(446);

Object.defineProperty(exports, 'Subnavigation', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_subnavigation).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 446 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _subnavigation = __webpack_require__(447);

var _subnavigation2 = _interopRequireDefault(_subnavigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _subnavigation2.default;

/***/ }),
/* 447 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _overflowContainer = __webpack_require__(448);

var _overflowContainer2 = _interopRequireDefault(_overflowContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Subnavigation = function (_OverflowContainer) {
    _inherits(Subnavigation, _OverflowContainer);

    function Subnavigation() {
        _classCallCheck(this, Subnavigation);

        return _possibleConstructorReturn(this, (Subnavigation.__proto__ || Object.getPrototypeOf(Subnavigation)).apply(this, arguments));
    }

    return Subnavigation;
}(_overflowContainer2.default);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Array, required: true }), __metadata("design:type", Object)], Subnavigation.prototype, "items", void 0);
Subnavigation = __decorate([(0, _vuePropertyDecorator.Component)({
    name: 'Subnavigation'
})], Subnavigation);
exports.default = Subnavigation;

/***/ }),
/* 448 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _overflowContainer = __webpack_require__(449);

var _overflowContainer2 = _interopRequireDefault(_overflowContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _overflowContainer2.default;

/***/ }),
/* 449 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _browserCapabilities = __webpack_require__(2);

var _browserCapabilities2 = _interopRequireDefault(_browserCapabilities);

var _overflowContainerVue = __webpack_require__(450);

var _overflowContainerVue2 = _interopRequireDefault(_overflowContainerVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = undefined && undefined.__metadata || function (k, v) {
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OverflowContainer = function (_Vue) {
    _inherits(OverflowContainer, _Vue);

    function OverflowContainer() {
        _classCallCheck(this, OverflowContainer);

        var _this = _possibleConstructorReturn(this, (OverflowContainer.__proto__ || Object.getPrototypeOf(OverflowContainer)).apply(this, arguments));

        _this.activeSelector = '.exact-active';
        _this.scrollTimeout = 300;
        _this.isTouch = false;
        return _this;
    }

    _createClass(OverflowContainer, [{
        key: "mounted",
        value: function mounted() {
            var subnav = this.$refs.subNav;
            this.isTouch = _browserCapabilities2.default.supportsTouch;
            if (subnav) {
                var activeItem = subnav.querySelector(this.activeSelector);
                if (activeItem && this.isTouch) {
                    setTimeout(function () {
                        return activeItem.scrollIntoView({ inline: 'center' });
                    }, this.scrollTimeout);
                }
            }
        }
    }]);

    return OverflowContainer;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Array, required: true }), __metadata("design:type", Array)], OverflowContainer.prototype, "items", void 0);
OverflowContainer = __decorate([_overflowContainerVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'OverflowContainer'
})], OverflowContainer);
exports.default = OverflowContainer;

/***/ }),
/* 450 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.items)?_c('nav',{ref:"subNav",staticClass:"overflow-container overflow-container--fixed",attrs:{"aria-label":"sub items"}},[(_vm.items)?_c('ul',{staticClass:"overflow-container__list",class:_vm.isTouch ? 'touch' : '',attrs:{"role":"presentation"}},_vm._l((_vm.items),function(item,index){return _c('li',{ref:"listItems",refInFor:true,staticClass:"overflow-container__item"},[_c(item.type,_vm._b({key:index,tag:"component"},'component',item,false))],1)}),0):_vm._e()]):_vm._e()}
var staticRenderFns = []

module.exports = function (_exports) {
  var options = typeof _exports === 'function'
    ? _exports.options
    : _exports
  options.render = render
  options.staticRenderFns = staticRenderFns
  return _exports
}


/***/ }),
/* 451 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sizeEmitter = __webpack_require__(452);

Object.defineProperty(exports, 'SizeEmitter', {
  enumerable: true,
  get: function get() {
    return _sizeEmitter.SizeEmitter;
  }
});

/***/ }),
/* 452 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SizeEmitter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _debounce = __webpack_require__(7);

var _debounce2 = _interopRequireDefault(_debounce);

var _viewport = __webpack_require__(1);

var _viewport2 = _interopRequireDefault(_viewport);

var _publicEventService = __webpack_require__(8);

var _publicEventService2 = _interopRequireDefault(_publicEventService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var viewportUtil = new _viewport2.default();
function SizeHandlerFactory(binding, vnode) {
    return function () {
        if (!vnode || !vnode.context) {
            return;
        }
        var height = vnode.elm.offsetHeight;
        if (vnode.context.__sizeEmitterHeight !== height) {
            _publicEventService2.default.emit('size', { element: binding.value, size: height });

            vnode.context.__sizeEmitterHeight = height;
        }
    };
}

var SizeEmitter = exports.SizeEmitter = function () {
    function SizeEmitter() {
        _classCallCheck(this, SizeEmitter);

        this.name = 'SizeEmitter';
    }

    _createClass(SizeEmitter, [{
        key: 'bind',
        value: function bind(el, binding, vnode) {
            if (!vnode || !vnode.context) {
                return;
            }

            vnode.context.sizeHandler = SizeHandlerFactory(binding, vnode);
            vnode.context.$on('emit-size', function () {
                if (!vnode.context) {
                    return;
                }
                vnode.context.sizeHandler();
            });
            viewportUtil.addResizeHandler((0, _debounce2.default)(vnode.context.sizeHandler, 50));
            viewportUtil.addScrollHandler((0, _debounce2.default)(vnode.context.sizeHandler, 50));
            el.addEventListener('transitionend', (0, _debounce2.default)(vnode.context.sizeHandler, 50));
            vnode.context.sizeHandler();
        }
    }, {
        key: 'unbind',
        value: function unbind(el, binding, vnode) {
            if (this && this.$root) {
                this.$root.$emit('size', { element: binding.value, size: 0 });
            }
            if (!vnode.context) {
                return;
            }
            viewportUtil.removeResizeHandler(vnode.context.sizeHandler);
            viewportUtil.removeScrollHandler(vnode.context.sizeHandler);
        }
    }], [{
        key: 'inserted',
        value: function inserted(el, binding, vnode) {
            if (!vnode.context) {
                return;
            }
            (0, _debounce2.default)(vnode.context.sizeHandler, 50);
        }
    }, {
        key: 'update',
        value: function update(el, binding, vnode) {
            if (!vnode.context) {
                return;
            }
            (0, _debounce2.default)(vnode.context.sizeHandler, 50);
        }
    }, {
        key: 'componentUpdated',
        value: function componentUpdated(el, binding, vnode) {
            if (!vnode.context) {
                return;
            }
            (0, _debounce2.default)(vnode.context.sizeHandler, 50);
        }
    }]);

    return SizeEmitter;
}();

/***/ }),
/* 453 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })
/******/ ])});;
//# sourceMappingURL=components.js.map