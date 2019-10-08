define("components", ["vue-property-decorator","gsap","lodash/debounce","vue","core-js/modules/es6.typed.array-buffer","core-js/modules/es6.typed.data-view","core-js/modules/es6.typed.int8-array","core-js/modules/es6.typed.uint8-array","core-js/modules/es6.typed.uint8-clamped-array","core-js/modules/es6.typed.int16-array","core-js/modules/es6.typed.uint16-array","core-js/modules/es6.typed.int32-array","core-js/modules/es6.typed.uint32-array","core-js/modules/es6.typed.float32-array","core-js/modules/es6.typed.float64-array","core-js/modules/es6.map","core-js/modules/es6.set","core-js/modules/es6.weak-map","core-js/modules/es6.weak-set","core-js/modules/es6.reflect.apply","core-js/modules/es6.reflect.construct","core-js/modules/es6.reflect.define-property","core-js/modules/es6.reflect.delete-property","core-js/modules/es6.reflect.get","core-js/modules/es6.reflect.get-own-property-descriptor","core-js/modules/es6.reflect.get-prototype-of","core-js/modules/es6.reflect.has","core-js/modules/es6.reflect.is-extensible","core-js/modules/es6.reflect.own-keys","core-js/modules/es6.reflect.prevent-extensions","core-js/modules/es6.reflect.set","core-js/modules/es6.reflect.set-prototype-of","core-js/modules/es6.promise","core-js/modules/es6.symbol","core-js/modules/es6.object.freeze","core-js/modules/es6.object.seal","core-js/modules/es6.object.prevent-extensions","core-js/modules/es6.object.is-frozen","core-js/modules/es6.object.is-sealed","core-js/modules/es6.object.is-extensible","core-js/modules/es6.object.get-own-property-descriptor","core-js/modules/es6.object.get-prototype-of","core-js/modules/es6.object.keys","core-js/modules/es6.object.get-own-property-names","core-js/modules/es6.object.assign","core-js/modules/es6.object.is","core-js/modules/es6.object.set-prototype-of","core-js/modules/es6.function.name","core-js/modules/es6.string.raw","core-js/modules/es6.string.from-code-point","core-js/modules/es6.string.code-point-at","core-js/modules/es6.string.repeat","core-js/modules/es6.string.starts-with","core-js/modules/es6.string.ends-with","core-js/modules/es6.string.includes","core-js/modules/es6.regexp.flags","core-js/modules/es6.regexp.match","core-js/modules/es6.regexp.replace","core-js/modules/es6.regexp.split","core-js/modules/es6.regexp.search","core-js/modules/es6.array.from","core-js/modules/es6.array.of","core-js/modules/es6.array.copy-within","core-js/modules/es6.array.find","core-js/modules/es6.array.find-index","core-js/modules/es6.array.fill","core-js/modules/es6.array.iterator","core-js/modules/es6.number.is-finite","core-js/modules/es6.number.is-integer","core-js/modules/es6.number.is-safe-integer","core-js/modules/es6.number.is-nan","core-js/modules/es6.number.epsilon","core-js/modules/es6.number.min-safe-integer","core-js/modules/es6.number.max-safe-integer","core-js/modules/es6.math.acosh","core-js/modules/es6.math.asinh","core-js/modules/es6.math.atanh","core-js/modules/es6.math.cbrt","core-js/modules/es6.math.clz32","core-js/modules/es6.math.cosh","core-js/modules/es6.math.expm1","core-js/modules/es6.math.fround","core-js/modules/es6.math.hypot","core-js/modules/es6.math.imul","core-js/modules/es6.math.log1p","core-js/modules/es6.math.log10","core-js/modules/es6.math.log2","core-js/modules/es6.math.sign","core-js/modules/es6.math.sinh","core-js/modules/es6.math.tanh","core-js/modules/es6.math.trunc","core-js/modules/es7.array.includes","core-js/modules/es7.object.values","core-js/modules/es7.object.entries","core-js/modules/es7.object.get-own-property-descriptors","core-js/modules/es7.string.pad-start","core-js/modules/es7.string.pad-end","core-js/modules/web.timers","core-js/modules/web.immediate","core-js/modules/web.dom.iterable"], function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__6__, __WEBPACK_EXTERNAL_MODULE__7__, __WEBPACK_EXTERNAL_MODULE__9__, __WEBPACK_EXTERNAL_MODULE__19__, __WEBPACK_EXTERNAL_MODULE__20__, __WEBPACK_EXTERNAL_MODULE__21__, __WEBPACK_EXTERNAL_MODULE__22__, __WEBPACK_EXTERNAL_MODULE__23__, __WEBPACK_EXTERNAL_MODULE__24__, __WEBPACK_EXTERNAL_MODULE__25__, __WEBPACK_EXTERNAL_MODULE__26__, __WEBPACK_EXTERNAL_MODULE__27__, __WEBPACK_EXTERNAL_MODULE__28__, __WEBPACK_EXTERNAL_MODULE__29__, __WEBPACK_EXTERNAL_MODULE__30__, __WEBPACK_EXTERNAL_MODULE__31__, __WEBPACK_EXTERNAL_MODULE__32__, __WEBPACK_EXTERNAL_MODULE__33__, __WEBPACK_EXTERNAL_MODULE__34__, __WEBPACK_EXTERNAL_MODULE__35__, __WEBPACK_EXTERNAL_MODULE__36__, __WEBPACK_EXTERNAL_MODULE__37__, __WEBPACK_EXTERNAL_MODULE__38__, __WEBPACK_EXTERNAL_MODULE__39__, __WEBPACK_EXTERNAL_MODULE__40__, __WEBPACK_EXTERNAL_MODULE__41__, __WEBPACK_EXTERNAL_MODULE__42__, __WEBPACK_EXTERNAL_MODULE__43__, __WEBPACK_EXTERNAL_MODULE__44__, __WEBPACK_EXTERNAL_MODULE__45__, __WEBPACK_EXTERNAL_MODULE__46__, __WEBPACK_EXTERNAL_MODULE__47__, __WEBPACK_EXTERNAL_MODULE__48__, __WEBPACK_EXTERNAL_MODULE__49__, __WEBPACK_EXTERNAL_MODULE__50__, __WEBPACK_EXTERNAL_MODULE__51__, __WEBPACK_EXTERNAL_MODULE__52__, __WEBPACK_EXTERNAL_MODULE__53__, __WEBPACK_EXTERNAL_MODULE__54__, __WEBPACK_EXTERNAL_MODULE__55__, __WEBPACK_EXTERNAL_MODULE__56__, __WEBPACK_EXTERNAL_MODULE__57__, __WEBPACK_EXTERNAL_MODULE__58__, __WEBPACK_EXTERNAL_MODULE__59__, __WEBPACK_EXTERNAL_MODULE__60__, __WEBPACK_EXTERNAL_MODULE__61__, __WEBPACK_EXTERNAL_MODULE__62__, __WEBPACK_EXTERNAL_MODULE__63__, __WEBPACK_EXTERNAL_MODULE__64__, __WEBPACK_EXTERNAL_MODULE__65__, __WEBPACK_EXTERNAL_MODULE__66__, __WEBPACK_EXTERNAL_MODULE__67__, __WEBPACK_EXTERNAL_MODULE__68__, __WEBPACK_EXTERNAL_MODULE__69__, __WEBPACK_EXTERNAL_MODULE__70__, __WEBPACK_EXTERNAL_MODULE__71__, __WEBPACK_EXTERNAL_MODULE__72__, __WEBPACK_EXTERNAL_MODULE__73__, __WEBPACK_EXTERNAL_MODULE__74__, __WEBPACK_EXTERNAL_MODULE__75__, __WEBPACK_EXTERNAL_MODULE__76__, __WEBPACK_EXTERNAL_MODULE__77__, __WEBPACK_EXTERNAL_MODULE__78__, __WEBPACK_EXTERNAL_MODULE__79__, __WEBPACK_EXTERNAL_MODULE__80__, __WEBPACK_EXTERNAL_MODULE__81__, __WEBPACK_EXTERNAL_MODULE__82__, __WEBPACK_EXTERNAL_MODULE__83__, __WEBPACK_EXTERNAL_MODULE__84__, __WEBPACK_EXTERNAL_MODULE__85__, __WEBPACK_EXTERNAL_MODULE__86__, __WEBPACK_EXTERNAL_MODULE__87__, __WEBPACK_EXTERNAL_MODULE__88__, __WEBPACK_EXTERNAL_MODULE__89__, __WEBPACK_EXTERNAL_MODULE__90__, __WEBPACK_EXTERNAL_MODULE__91__, __WEBPACK_EXTERNAL_MODULE__92__, __WEBPACK_EXTERNAL_MODULE__93__, __WEBPACK_EXTERNAL_MODULE__94__, __WEBPACK_EXTERNAL_MODULE__95__, __WEBPACK_EXTERNAL_MODULE__96__, __WEBPACK_EXTERNAL_MODULE__97__, __WEBPACK_EXTERNAL_MODULE__98__, __WEBPACK_EXTERNAL_MODULE__99__, __WEBPACK_EXTERNAL_MODULE__100__, __WEBPACK_EXTERNAL_MODULE__101__, __WEBPACK_EXTERNAL_MODULE__102__, __WEBPACK_EXTERNAL_MODULE__103__, __WEBPACK_EXTERNAL_MODULE__104__, __WEBPACK_EXTERNAL_MODULE__105__, __WEBPACK_EXTERNAL_MODULE__106__, __WEBPACK_EXTERNAL_MODULE__107__, __WEBPACK_EXTERNAL_MODULE__108__, __WEBPACK_EXTERNAL_MODULE__109__, __WEBPACK_EXTERNAL_MODULE__110__, __WEBPACK_EXTERNAL_MODULE__111__, __WEBPACK_EXTERNAL_MODULE__112__, __WEBPACK_EXTERNAL_MODULE__113__, __WEBPACK_EXTERNAL_MODULE__114__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    click: 'gtm-click'
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseLink = __webpack_require__(133);

var _baseLink2 = _interopRequireDefault(_baseLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _baseLink2.default;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__6__;

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
exports.StepRowAnimation = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _defaults = __webpack_require__(3);

var _defaults2 = _interopRequireDefault(_defaults);

var _vuePropertyDecorator = __webpack_require__(0);

var _gsap = __webpack_require__(6);

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
/* 9 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__9__;

/***/ }),
/* 10 */
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var v1 = __webpack_require__(119);
var v4 = __webpack_require__(120);

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;


/***/ }),
/* 12 */
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
/* 13 */
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
/* 14 */
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CardBase = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _events = __webpack_require__(4);

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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.registry = exports.PublicEventService = exports.ViewportUtility = exports.TextUtils = exports.BrowserCapabilities = exports.Defaults = undefined;

var _defaults = __webpack_require__(3);

Object.defineProperty(exports, 'Defaults', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_defaults).default;
    }
});

var _browserCapabilities = __webpack_require__(2);

Object.defineProperty(exports, 'BrowserCapabilities', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_browserCapabilities).default;
    }
});

var _textUtils = __webpack_require__(17);

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

var _publicEventService = __webpack_require__(18);

Object.defineProperty(exports, 'PublicEventService', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_publicEventService).default;
    }
});

__webpack_require__(19);

__webpack_require__(20);

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

var _componentRegistry = __webpack_require__(117);

var _componentRegistry2 = _interopRequireDefault(_componentRegistry);

var _components = __webpack_require__(122);

var _components2 = _interopRequireDefault(_components);

var _directives = __webpack_require__(424);

var Directives = _interopRequireWildcard(_directives);

__webpack_require__(427);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var registry = new _componentRegistry2.default();
Object.keys(_components2.default).forEach(function (c) {
    registry.registerComponent(_components2.default[c]);
});
Object.keys(Directives).forEach(function (d) {
    registry.registerDirective(new Directives[d]());
});
exports.registry = registry;

/***/ }),
/* 17 */
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _vue = __webpack_require__(9);

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
/* 19 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__19__;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__20__;

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
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _uniqId = __webpack_require__(118);

var _portalVue = __webpack_require__(121);

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
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UniqId = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _uuid = __webpack_require__(11);

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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(10)))

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(12);
var bytesToUuid = __webpack_require__(13);

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
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(12);
var bytesToUuid = __webpack_require__(13);

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
/* 121 */
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

var Vue = _interopDefault(__webpack_require__(9));

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
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _atoms = __webpack_require__(123);

var Atoms = _interopRequireWildcard(_atoms);

var _molecules = __webpack_require__(186);

var Molecules = _interopRequireWildcard(_molecules);

var _organisms = __webpack_require__(353);

var Organisms = _interopRequireWildcard(_organisms);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = _extends({}, Atoms, Molecules, Organisms);

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _anchorOverlay = __webpack_require__(124);

Object.defineProperty(exports, 'AnchorOverlay', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_anchorOverlay).default;
  }
});

var _actionButton = __webpack_require__(127);

Object.defineProperty(exports, 'ActionButton', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_actionButton).default;
  }
});

var _animatedArrow = __webpack_require__(130);

Object.defineProperty(exports, 'AnimatedArrow', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_animatedArrow).default;
  }
});

var _BaseLink = __webpack_require__(5);

Object.defineProperty(exports, 'BaseLink', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_BaseLink).default;
  }
});

var _contentLink = __webpack_require__(135);

Object.defineProperty(exports, 'ContentLink', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_contentLink).default;
  }
});

var _contentButton = __webpack_require__(137);

Object.defineProperty(exports, 'ContentButton', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_contentButton).default;
  }
});

var _contentLinkList = __webpack_require__(139);

Object.defineProperty(exports, 'ContentLinkList', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_contentLinkList).default;
  }
});

var _hitArea = __webpack_require__(142);

Object.defineProperty(exports, 'HitArea', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_hitArea).default;
  }
});

var _horizontalList = __webpack_require__(145);

Object.defineProperty(exports, 'HorizontalList', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_horizontalList).default;
  }
});

var _icon = __webpack_require__(148);

Object.defineProperty(exports, 'Icon', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_icon).default;
  }
});

var _cImage = __webpack_require__(151);

Object.defineProperty(exports, 'Image', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_cImage).default;
  }
});

var _labelFilter = __webpack_require__(158);

Object.defineProperty(exports, 'LabelFilter', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_labelFilter).default;
  }
});

var _liInline = __webpack_require__(161);

Object.defineProperty(exports, 'LiInline', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_liInline).default;
  }
});

var _liItem = __webpack_require__(164);

Object.defineProperty(exports, 'LiItem', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_liItem).default;
  }
});

var _navAssist = __webpack_require__(167);

Object.defineProperty(exports, 'NavAssist', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_navAssist).default;
  }
});

var _responsivePicture = __webpack_require__(170);

Object.defineProperty(exports, 'ResponsivePicture', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_responsivePicture).default;
  }
});

var _spanLabel = __webpack_require__(174);

Object.defineProperty(exports, 'SpanLabel', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_spanLabel).default;
  }
});

var _tooltip = __webpack_require__(177);

Object.defineProperty(exports, 'Tooltip', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_tooltip).default;
  }
});

var _youtubeLink = __webpack_require__(180);

Object.defineProperty(exports, 'YoutubeLink', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_youtubeLink).default;
  }
});

var _youtubeVideo = __webpack_require__(183);

Object.defineProperty(exports, 'YoutubeVideo', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_youtubeVideo).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _component = __webpack_require__(125);

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _component2.default;

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _templateVue = __webpack_require__(126);

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
/* 126 */
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
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionButton = __webpack_require__(128);

var _actionButton2 = _interopRequireDefault(_actionButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _actionButton2.default;

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _actionButtonVue = __webpack_require__(129);

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
/* 129 */
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
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _animatedArrow = __webpack_require__(131);

var _animatedArrow2 = _interopRequireDefault(_animatedArrow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _animatedArrow2.default;

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _animatedArrowVue = __webpack_require__(132);

var _animatedArrowVue2 = _interopRequireDefault(_animatedArrowVue);

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

var AnimatedArrow = function (_Vue) {
    _inherits(AnimatedArrow, _Vue);

    function AnimatedArrow() {
        _classCallCheck(this, AnimatedArrow);

        return _possibleConstructorReturn(this, (AnimatedArrow.__proto__ || Object.getPrototypeOf(AnimatedArrow)).apply(this, arguments));
    }

    return AnimatedArrow;
}(_vuePropertyDecorator.Vue);
AnimatedArrow = __decorate([_animatedArrowVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'animated-arrow'
})], AnimatedArrow);
exports.default = AnimatedArrow;

/***/ }),
/* 132 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"arrow--animated",attrs:{"fill":"currentColor","xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 120 120"}},[_c('defs',[_c('clipPath',{staticClass:"arrow__mask",attrs:{"id":"mask"}},[_c('rect',{attrs:{"x":"40","y":"40","width":"40","height":"40","rotate":"45deg"}})])]),_vm._v(" "),_c('g',{attrs:{"clip-path":"url(#mask)"}},[_c('path',{staticClass:"arrow__line arrow__line-1",attrs:{"d":"M15.3 55h94.8v10.1H15.3z","clip-path":"url(#mask)"}}),_vm._v(" "),_c('path',{staticClass:"arrow__line arrow__line-2",attrs:{"d":"M15.3 55h94.8v10.1H15.3z"}}),_vm._v(" "),_c('path',{staticClass:"arrow__line arrow__line-3",attrs:{"d":"M15.3 55h94.8v10.1H15.3z"}})])])}
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
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _events = __webpack_require__(4);

var _events2 = _interopRequireDefault(_events);

var _baseLinkVue = __webpack_require__(134);

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
/* 134 */
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
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _contentLink = __webpack_require__(136);

var _contentLink2 = _interopRequireDefault(_contentLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _contentLink2.default;

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _BaseLink2 = __webpack_require__(5);

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
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _contentButton = __webpack_require__(138);

var _contentButton2 = _interopRequireDefault(_contentButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _contentButton2.default;

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _BaseLink2 = __webpack_require__(5);

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
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _contentLinkList = __webpack_require__(140);

var _contentLinkList2 = _interopRequireDefault(_contentLinkList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _contentLinkList2.default;

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _contentLinkListVue = __webpack_require__(141);

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
/* 141 */
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
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hitArea = __webpack_require__(143);

var _hitArea2 = _interopRequireDefault(_hitArea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _hitArea2.default;

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _hitAreaVue = __webpack_require__(144);

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
/* 144 */
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
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _horizontalList = __webpack_require__(146);

var _horizontalList2 = _interopRequireDefault(_horizontalList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _horizontalList2.default;

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _horizontalListVue = __webpack_require__(147);

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
/* 147 */
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
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icon = __webpack_require__(149);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _icon.Icon;
  }
});

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Icon = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _iconVue = __webpack_require__(150);

var _iconVue2 = _interopRequireDefault(_iconVue);

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

var Icon = function (_Vue) {
    _inherits(Icon, _Vue);

    function Icon() {
        _classCallCheck(this, Icon);

        return _possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).apply(this, arguments));
    }

    _createClass(Icon, [{
        key: "iconClass",
        get: function get() {
            return "icon--" + this.iconName;
        }
    }, {
        key: "iconHref",
        get: function get() {
            return "#icon-" + this.iconName;
        }
    }]);

    return Icon;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", String)], Icon.prototype, "iconName", void 0);
exports.Icon = Icon = __decorate([_iconVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'icon'
})], Icon);
exports.Icon = Icon;

/***/ }),
/* 150 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"icon",class:_vm.iconClass},[_c('use',{attrs:{"xlink:href":_vm.iconHref}})])}
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
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cImage = __webpack_require__(152);

var _cImage2 = _interopRequireDefault(_cImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _cImage2.default;

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _cImage = __webpack_require__(153);

var _inView = __webpack_require__(155);

var _browserCapabilities = __webpack_require__(2);

var _browserCapabilities2 = _interopRequireDefault(_browserCapabilities);

var _viewport = __webpack_require__(1);

var _viewport2 = _interopRequireDefault(_viewport);

var _cImage2 = __webpack_require__(156);

var _cImageVue = __webpack_require__(157);

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
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Image = __webpack_require__(154);

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
/* 154 */
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
/* 155 */
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
/* 156 */
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
/* 157 */
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
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _labelFilter = __webpack_require__(159);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _labelFilter.LabelFilter;
  }
});

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LabelFilter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _labelFilterVue = __webpack_require__(160);

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
/* 160 */
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
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _liInline = __webpack_require__(162);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _liInline.LiInline;
  }
});

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LiInline = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _liInlineVue = __webpack_require__(163);

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
/* 163 */
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
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _component = __webpack_require__(165);

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _component2.default;

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _templateVue = __webpack_require__(166);

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
/* 166 */
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
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _navAssist = __webpack_require__(168);

var _navAssist2 = _interopRequireDefault(_navAssist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _navAssist2.default;

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _navAssistVue = __webpack_require__(169);

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

        _this.inInitialState = true;
        return _this;
    }

    _createClass(NavAssist, [{
        key: "toggleState",
        value: function toggleState() {
            this.inInitialState = false;
            if (this.openState) {
                return this.$emit('nav-assist-click', 'close-mobile-nav');
            }
            return this.$emit('nav-assist-click', 'open-mobile-nav');
        }
    }, {
        key: "close",
        value: function close() {
            if (this.openState) {
                this.$emit('nav-assist-click', 'close-mobile-nav');
            }
        }
    }, {
        key: "ariaExpanded",
        get: function get() {
            return this.openState.toString();
        }
    }]);

    return NavAssist;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Boolean, default: false }), __metadata("design:type", Boolean)], NavAssist.prototype, "openState", void 0);
NavAssist = __decorate([_navAssistVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'nav-assist'
})], NavAssist);
exports.default = NavAssist;

/***/ }),
/* 169 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"nav-assist",class:{'nav-assist--close': this.openState, 'nav-assist--initial-state': this.inInitialState},attrs:{"type":"button","aria-label":"menu","aria-expanded":_vm.ariaExpanded},on:{"click":_vm.toggleState,"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }return _vm.close($event)}}},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24"}},[_c('rect',{staticClass:"nav-assist__line nav-assist__line-2",attrs:{"x":"2","y":"11","width":"20","height":"2"}}),_vm._v(" "),_c('rect',{staticClass:"nav-assist__line nav-assist__line-1",attrs:{"x":"2","y":"4.5","width":"20","height":"2"}}),_vm._v(" "),_c('rect',{staticClass:"nav-assist__line nav-assist__line-3",attrs:{"x":"2","y":"17.5","width":"20","height":"2"}}),_vm._v(" "),_c('rect',{staticClass:"nav-assist__line nav-assist__line-4",attrs:{"x":"-1.3","y":"11","transform":"matrix(0.7071 -0.7071 0.7071 0.7071 -4.9706 12)","width":"26.6","height":"2"}}),_vm._v(" "),_c('rect',{staticClass:"nav-assist__line nav-assist__line-5",attrs:{"x":"11","y":"-1.3","transform":"matrix(0.7071 -0.7071 0.7071 0.7071 -4.9706 12)","width":"2","height":"26.6"}})])])}
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
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _responsivePicture = __webpack_require__(171);

var _responsivePicture2 = _interopRequireDefault(_responsivePicture);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _responsivePicture2.default;

/***/ }),
/* 171 */
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

var _responsivePictureSource = __webpack_require__(172);

var _responsivePictureSource2 = _interopRequireDefault(_responsivePictureSource);

var _responsivePictureVue = __webpack_require__(173);

var _responsivePictureVue2 = _interopRequireDefault(_responsivePictureVue);

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
ResponsivePicture = __decorate([_responsivePictureVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'responsive-picture',
    components: {
        ResponsivePictureSource: _responsivePictureSource2.default
    }
})], ResponsivePicture);
exports.default = ResponsivePicture;

/***/ }),
/* 172 */
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
/* 173 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('picture',[[(_vm.desktopHdWidth)?_c('responsive-picture-source',{attrs:{"media":"(min-width: 1201px)","image":_vm.lazyLoading ? '' : _vm.desktopHdWidth}}):_vm._e(),_vm._v(" "),(_vm.desktopWidth)?_c('responsive-picture-source',{attrs:{"media":"(min-width: 1025px)","image":_vm.lazyLoading ? '' : _vm.desktopWidth}}):_vm._e(),_vm._v(" "),(_vm.tabletWidth)?_c('responsive-picture-source',{attrs:{"media":"(min-width: 768px)","image":_vm.lazyLoading ? '' : _vm.tabletWidth}}):_vm._e(),_vm._v(" "),(_vm.mobileXlWidth)?_c('responsive-picture-source',{attrs:{"media":"(min-width: 569px)","image":_vm.lazyLoading ? '' : _vm.mobileXlWidth}}):_vm._e(),_vm._v(" "),(_vm.mobileLWidth)?_c('responsive-picture-source',{attrs:{"media":"(min-width: 481px)","image":_vm.lazyLoading ? '' : _vm.mobileLWidth}}):_vm._e(),_vm._v(" "),_c('responsive-picture-source',{attrs:{"media":"(max-width: 480px)","image":_vm.mobileWidth}})],_vm._v(" "),_c('img',{staticClass:"img--responsive",class:_vm.classes,attrs:{"src":_vm.lazyLoading ? '' : _vm.mobileWidth.url ? _vm.mobileWidth.url : _vm.mobileWidth,"alt":_vm.description}})],2)}
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
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _component = __webpack_require__(175);

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _component2.default;

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _templateVue = __webpack_require__(176);

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
/* 176 */
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
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tooltip = __webpack_require__(178);

var _tooltip2 = _interopRequireDefault(_tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _tooltip2.default;

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _tooltipVue = __webpack_require__(179);

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
/* 179 */
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
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _youtubeLink = __webpack_require__(181);

var _youtubeLink2 = _interopRequireDefault(_youtubeLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _youtubeLink2.default;

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _BaseLink2 = __webpack_require__(5);

var _BaseLink3 = _interopRequireDefault(_BaseLink2);

var _youtube = __webpack_require__(14);

var _youtube2 = _interopRequireDefault(_youtube);

var _youtubeLinkVue = __webpack_require__(182);

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
/* 182 */
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
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _youtubeVideo = __webpack_require__(184);

var _youtubeVideo2 = _interopRequireDefault(_youtubeVideo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _youtubeVideo2.default;

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _youtube = __webpack_require__(14);

var _youtube2 = _interopRequireDefault(_youtube);

var _youtubeVideoVue = __webpack_require__(185);

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
/* 185 */
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
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _articleAuthor = __webpack_require__(187);

Object.defineProperty(exports, 'ArticleAuthor', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_articleAuthor).default;
  }
});

var _articleCtas = __webpack_require__(191);

Object.defineProperty(exports, 'ArticleCtas', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_articleCtas).default;
  }
});

var _articleDescriptionList = __webpack_require__(194);

Object.defineProperty(exports, 'ArticleDescriptionList', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_articleDescriptionList).default;
  }
});

var _articleImage = __webpack_require__(197);

Object.defineProperty(exports, 'ArticleImage', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_articleImage).default;
  }
});

var _articleIntro = __webpack_require__(200);

Object.defineProperty(exports, 'ArticleIntro', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_articleIntro).default;
  }
});

var _articleTable = __webpack_require__(203);

Object.defineProperty(exports, 'ArticleTable', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_articleTable).default;
  }
});

var _articleText = __webpack_require__(206);

Object.defineProperty(exports, 'ArticleText', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_articleText).default;
  }
});

var _articleVideo = __webpack_require__(209);

Object.defineProperty(exports, 'ArticleVideo', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_articleVideo).default;
  }
});

var _autoComplete = __webpack_require__(212);

Object.defineProperty(exports, 'AutoComplete', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_autoComplete).default;
  }
});

var _blockIcon = __webpack_require__(216);

Object.defineProperty(exports, 'BlockIcon', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_blockIcon).default;
  }
});

var _brand = __webpack_require__(219);

Object.defineProperty(exports, 'Brand', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_brand).default;
  }
});

var _businessCard = __webpack_require__(222);

Object.defineProperty(exports, 'BusinessCard', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_businessCard).default;
  }
});

var _cardArticle = __webpack_require__(225);

Object.defineProperty(exports, 'CardArticle', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_cardArticle).default;
  }
});

var _cardBase = __webpack_require__(228);

Object.defineProperty(exports, 'CardBase', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_cardBase).default;
  }
});

var _cardDownload = __webpack_require__(229);

Object.defineProperty(exports, 'CardDownload', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_cardDownload).default;
  }
});

var _cardProduct = __webpack_require__(233);

Object.defineProperty(exports, 'CardProduct', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_cardProduct).default;
  }
});

var _color = __webpack_require__(236);

Object.defineProperty(exports, 'Color', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_color).default;
  }
});

var _contentBlock = __webpack_require__(240);

Object.defineProperty(exports, 'ContentBlock', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_contentBlock).default;
  }
});

var _contentToggle = __webpack_require__(243);

Object.defineProperty(exports, 'ContentToggle', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_contentToggle).default;
  }
});

var _ctaBlock = __webpack_require__(246);

Object.defineProperty(exports, 'CtaBlock', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ctaBlock).default;
  }
});

var _filterCategory = __webpack_require__(249);

Object.defineProperty(exports, 'FilterCategory', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_filterCategory).default;
  }
});

var _flyout = __webpack_require__(252);

Object.defineProperty(exports, 'Flyout', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_flyout).default;
  }
});

var _flyoutSection = __webpack_require__(255);

Object.defineProperty(exports, 'FlyoutSection', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_flyoutSection).default;
  }
});

var _footerBlock = __webpack_require__(258);

Object.defineProperty(exports, 'FooterBlock', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_footerBlock).default;
  }
});

var _footerNavigationCategory = __webpack_require__(261);

Object.defineProperty(exports, 'FooterNavigationCategory', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_footerNavigationCategory).default;
  }
});

var _headerBlock = __webpack_require__(264);

Object.defineProperty(exports, 'HeaderBlock', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_headerBlock).default;
  }
});

var _heroHeading = __webpack_require__(267);

Object.defineProperty(exports, 'HeroHeading', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_heroHeading).default;
  }
});

var _iconButton = __webpack_require__(270);

Object.defineProperty(exports, 'IconButton', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_iconButton).default;
  }
});

var _inPageNotification = __webpack_require__(273);

Object.defineProperty(exports, 'InPageNotification', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_inPageNotification).default;
  }
});

var _listSection = __webpack_require__(276);

Object.defineProperty(exports, 'ListSection', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_listSection).default;
  }
});

var _listUnordered = __webpack_require__(285);

Object.defineProperty(exports, 'ListUnordered', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_listUnordered).default;
  }
});

var _listUnorderedLimit = __webpack_require__(288);

Object.defineProperty(exports, 'ListUnorderedLimit', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_listUnorderedLimit).default;
  }
});

var _mainNavigation = __webpack_require__(291);

Object.defineProperty(exports, 'MainNavigation', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_mainNavigation).default;
  }
});

var _mainNavigationItem = __webpack_require__(294);

Object.defineProperty(exports, 'MainNavigationItem', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_mainNavigationItem).default;
  }
});

var _modal = __webpack_require__(297);

Object.defineProperty(exports, 'Modal', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_modal).default;
  }
});

var _modalButton = __webpack_require__(300);

Object.defineProperty(exports, 'ModalButton', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_modalButton).default;
  }
});

var _modalWizard = __webpack_require__(303);

Object.defineProperty(exports, 'ModalWizard', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_modalWizard).default;
  }
});

var _product = __webpack_require__(306);

Object.defineProperty(exports, 'Product', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_product).default;
  }
});

var _searchBar = __webpack_require__(309);

Object.defineProperty(exports, 'SearchBar', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_searchBar).default;
  }
});

var _searchBarPage = __webpack_require__(312);

Object.defineProperty(exports, 'SearchBarPage', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_searchBarPage).default;
  }
});

var _searchResult = __webpack_require__(315);

Object.defineProperty(exports, 'SearchResult', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_searchResult).default;
  }
});

var _socialNav = __webpack_require__(319);

Object.defineProperty(exports, 'SocialNav', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_socialNav).default;
  }
});

var _socialSharing = __webpack_require__(322);

Object.defineProperty(exports, 'SocialSharing', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_socialSharing).default;
  }
});

var _subNavigationItem = __webpack_require__(326);

Object.defineProperty(exports, 'SubNavigationItem', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_subNavigationItem).default;
  }
});

var _sysNav = __webpack_require__(329);

Object.defineProperty(exports, 'SysNav', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_sysNav).default;
  }
});

var _tab = __webpack_require__(332);

Object.defineProperty(exports, 'Tab', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_tab).default;
  }
});

var _tabs = __webpack_require__(335);

Object.defineProperty(exports, 'Tabs', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_tabs).default;
  }
});

var _tabTable = __webpack_require__(338);

Object.defineProperty(exports, 'TabTable', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_tabTable).default;
  }
});

var _tabTableRow = __webpack_require__(341);

Object.defineProperty(exports, 'TabTableRow', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_tabTableRow).default;
  }
});

var _tooltipToggle = __webpack_require__(344);

Object.defineProperty(exports, 'TooltipToggle', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_tooltipToggle).default;
  }
});

var _wizardStepConfirmation = __webpack_require__(347);

Object.defineProperty(exports, 'WizardStepConfirmation', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_wizardStepConfirmation).default;
  }
});

var _wizardStepDownloadList = __webpack_require__(350);

Object.defineProperty(exports, 'WizardStepDownloadList', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_wizardStepDownloadList).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _articleAuthor = __webpack_require__(188);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _articleAuthor.ArticleAuthor;
  }
});

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ArticleAuthor = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _articleAuthorVue = __webpack_require__(189);

var _articleAuthorVue2 = _interopRequireDefault(_articleAuthorVue);

var _format = __webpack_require__(190);

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
/* 189 */
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
/* 190 */
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
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _articleCtas = __webpack_require__(192);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _articleCtas.ArticleCtas;
  }
});

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ArticleCtas = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _articleCtasVue = __webpack_require__(193);

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
/* 193 */
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
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _articleDescriptionList = __webpack_require__(195);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _articleDescriptionList.ArticleDescriptionList;
  }
});

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ArticleDescriptionList = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _articleDescriptionListVue = __webpack_require__(196);

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
/* 196 */
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
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _articleImage = __webpack_require__(198);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _articleImage.ArticleImage;
  }
});

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ArticleImage = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _articleImageVue = __webpack_require__(199);

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
/* 199 */
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
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _articleIntro = __webpack_require__(201);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _articleIntro.ArticleIntro;
  }
});

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ArticleIntro = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _articleIntroVue = __webpack_require__(202);

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
/* 202 */
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
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _articleTable = __webpack_require__(204);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _articleTable.ArticleTable;
  }
});

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ArticleTable = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _articleTableVue = __webpack_require__(205);

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
/* 205 */
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
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _articleText = __webpack_require__(207);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _articleText.ArticleText;
  }
});

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ArticleText = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _articleTextVue = __webpack_require__(208);

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
/* 208 */
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
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _articleVideo = __webpack_require__(210);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _articleVideo.ArticleVideo;
  }
});

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ArticleVideo = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _articleVideoVue = __webpack_require__(211);

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
/* 211 */
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
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _autoComplete = __webpack_require__(213);

var _autoComplete2 = _interopRequireDefault(_autoComplete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _autoComplete2.default;

/***/ }),
/* 213 */
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

var _autoCompleteVue = __webpack_require__(214);

var _autoCompleteVue2 = _interopRequireDefault(_autoCompleteVue);

var _escapeStringRegexp = __webpack_require__(215);

var _escapeStringRegexp2 = _interopRequireDefault(_escapeStringRegexp);

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
        _this.reversed = false;
        _this.selectedIndex = -1;
        _this.viewportUtil = new _viewport2.default();
        return _this;
    }

    _createClass(AutoComplete, [{
        key: "calculateDirection",
        value: function calculateDirection() {
            if (!this.$refs.autoCompleteInput) {
                return;
            }
            var windowTop = this.viewportUtil.scrollY;
            var windowBottom = windowTop + this.viewportUtil.screenHeight * (2 / 3);
            var inputBounds = this.$refs.autoCompleteInput.getBoundingClientRect();
            var inputTop = this.viewportUtil.scrollY + inputBounds.top;
            var inputBottom = inputTop + inputBounds.height;
            this.reversed = windowBottom < inputBottom;
        }
    }, {
        key: "clearSelection",
        value: function clearSelection() {
            this.input = '';
        }
    }, {
        key: "filterAutoCompleteItemsTitleByString",
        value: function filterAutoCompleteItemsTitleByString(list, string) {
            return list.filter(function (autoCompleteItem) {
                return new RegExp((0, _escapeStringRegexp2.default)(string), 'i').test(autoCompleteItem.title);
            });
        }
    }, {
        key: "filterOutHighlightedItems",
        value: function filterOutHighlightedItems(filterKeys) {
            if (!filterKeys.length) {
                return this.autoCompleteItems;
            }
            return this.autoCompleteItems.filter(function (autoCompleteItem) {
                return !filterKeys.includes(autoCompleteItem.value);
            });
        }
    }, {
        key: "focus",
        value: function focus() {
            if (!this.$refs.autoCompleteInput) {
                return;
            }
            this.$refs.autoCompleteInput.focus();
        }
    }, {
        key: "highlightItem",
        value: function highlightItem(direction) {
            this.selectedIndex = this.selectedIndex + direction;
            if (this.selectedIndex > this.listItems.length - 1) {
                this.selectedIndex = 0;
            }
            if (this.selectedIndex < 0) {
                this.selectedIndex = this.listItems.length - 1;
            }
            this.listItems[this.selectedIndex].focus();
        }
    }, {
        key: "highlightString",
        value: function highlightString(data) {
            var stringToReplace = new RegExp((0, _escapeStringRegexp2.default)(this.input), 'i');
            var matches = data.match(stringToReplace);
            if (!matches) {
                return data;
            }
            return data.replace(stringToReplace, "<span class=\"auto-complete__value\">" + matches[0] + "</span>");
        }
    }, {
        key: "keyEscapeHandler",
        value: function keyEscapeHandler() {
            this.clearSelection();
            this.reportSelectionMade(null);
        }
    }, {
        key: "reportSelectionMade",
        value: function reportSelectionMade(item) {
            var code = null;
            if (item) {
                code = item.value;
            }
            this.$emit('auto-complete-input', code);
        }
    }, {
        key: "selectItem",
        value: function selectItem(item) {
            this.reportSelectionMade(item);
            this.clearSelection();
        }
    }, {
        key: "mounted",
        value: function mounted() {
            this.focus();
            this.viewportUtil.addScrollHandler(this.calculateDirection);
            this.viewportUtil.addResizeHandler(this.calculateDirection);
            _vuePropertyDecorator.Vue.nextTick(this.calculateDirection);
        }
    }, {
        key: "classObject",
        get: function get() {
            return {
                'auto-complete--reversed': this.reversed
            };
        }
    }, {
        key: "hasInput",
        get: function get() {
            return this.input.length >= this.minChar;
        }
    }, {
        key: "autoCompleteItems",
        get: function get() {
            var _this2 = this;

            var items = [];
            Object.keys(this.datasource).forEach(function (key) {
                if (key !== 'type') {
                    items.push({
                        title: _this2.datasource[key] + " - " + key,
                        value: key
                    });
                }
            });
            return items;
        }
    }, {
        key: "autoCompleteId",
        get: function get() {
            return "autocomplete-" + Math.floor(Math.random() * 10000);
        }
    }, {
        key: "listItems",
        get: function get() {
            return this.$refs.listItems;
        }
    }, {
        key: "highlightedItems",
        get: function get() {
            var _this3 = this;

            var highlightedItems = [];
            if (!this.highlightedKeys.length) {
                return highlightedItems;
            }
            return this.autoCompleteItems.filter(function (autoCompleteItem) {
                return _this3.highlightedKeys.includes(autoCompleteItem.value);
            });
        }
    }, {
        key: "suggestedItems",
        get: function get() {
            var suggestedItems = this.filterOutHighlightedItems(this.highlightedKeys);
            if (!this.hasInput) {
                if (this.showSuggestions) {
                    return suggestedItems;
                }
                return [];
            }
            return this.filterAutoCompleteItemsTitleByString(suggestedItems, this.input);
        }
    }]);

    return AutoComplete;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object, required: true }), __metadata("design:type", Object)], AutoComplete.prototype, "datasource", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Array, default: function _default() {
        return [];
    } }), __metadata("design:type", Array)], AutoComplete.prototype, "highlightedKeys", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], AutoComplete.prototype, "highlightedLabel", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], AutoComplete.prototype, "label", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Number, default: 3 }), __metadata("design:type", Number)], AutoComplete.prototype, "minChar", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], AutoComplete.prototype, "placeholder", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Boolean }), __metadata("design:type", Boolean)], AutoComplete.prototype, "showSuggestions", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], AutoComplete.prototype, "suggestionsLabel", void 0);
AutoComplete = __decorate([_autoCompleteVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'auto-complete'
})], AutoComplete);
exports.default = AutoComplete;

/***/ }),
/* 214 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"auto-complete",class:_vm.classObject,attrs:{"aria-haspopup":"listbox","role":"combobox","aria-owns":_vm.autoCompleteId},on:{"keydown":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }return _vm.keyEscapeHandler($event)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"up",38,$event.key,["Up","ArrowUp"])){ return null; }return _vm.highlightItem(-1)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"])){ return null; }return _vm.highlightItem(1)}]}},[_c('label',[_c('span',{staticClass:"auto-complete__input-label"},[_vm._v(_vm._s(_vm.label))]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model.trim",value:(_vm.input),expression:"input",modifiers:{"trim":true}}],ref:"autoCompleteInput",staticClass:"auto-complete__input",attrs:{"aria-autocomplete":"list","autocomplete":"off","type":"text","id":(_vm.autoCompleteId + "-input"),"aria-controls":(_vm.autoCompleteId + "-input"),"placeholder":_vm.placeholder},domProps:{"value":(_vm.input)},on:{"input":function($event){if($event.target.composing){ return; }_vm.input=$event.target.value.trim()},"blur":function($event){return _vm.$forceUpdate()}}})]),_vm._v(" "),_c('div',{ref:"autoCompleteListbox",staticClass:"auto-complete__dropdown",attrs:{"role":"listbox","id":_vm.autoCompleteId}},[(_vm.highlightedItems && _vm.highlightedItems.length)?[_c('h4',{staticClass:"auto-complete__label",attrs:{"id":(_vm.autoCompleteId + "-highlighted-label")}},[_vm._v(_vm._s(_vm.highlightedLabel))]),_vm._v(" "),_c('ul',{staticClass:"auto-complete__list",attrs:{"aria-labelledby":(_vm.autoCompleteId + "-highlighted-label")}},_vm._l((_vm.highlightedItems),function(item){return _c('li',{ref:"listItems",refInFor:true,staticClass:"auto-complete__list-item",attrs:{"role":"option","tabindex":"-1"},domProps:{"innerHTML":_vm._s(_vm.highlightString(item.title))},on:{"click":function($event){if($event.target !== $event.currentTarget){ return null; }return _vm.selectItem(item)},"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.selectItem(item)}}})}),0)]:_vm._e(),_vm._v(" "),(_vm.suggestedItems.length)?[_c('h4',{staticClass:"auto-complete__label",attrs:{"id":(_vm.autoCompleteId + "-suggested-label")}},[_vm._v(_vm._s(_vm.suggestionsLabel))]),_vm._v(" "),_c('ul',{staticClass:"auto-complete__list",attrs:{"aria-labelledby":(_vm.autoCompleteId + "-suggested-label")}},_vm._l((_vm.suggestedItems),function(item){return _c('li',{ref:"listItems",refInFor:true,staticClass:"auto-complete__list-item",attrs:{"role":"option","tabindex":"-1"},domProps:{"innerHTML":_vm._s(_vm.highlightString(item.title))},on:{"click":function($event){if($event.target !== $event.currentTarget){ return null; }return _vm.selectItem(item)},"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.selectItem(item)}}})}),0)]:_vm._e()],2)])}
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
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const matchOperatorsRegex = /[|\\{}()[\]^$+*?.-]/g;

module.exports = string => {
	if (typeof string !== 'string') {
		throw new TypeError('Expected a string');
	}

	return string.replace(matchOperatorsRegex, '\\$&');
};


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _blockIcon = __webpack_require__(217);

var _blockIcon2 = _interopRequireDefault(_blockIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _blockIcon2.default;

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _blockIconVue = __webpack_require__(218);

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
/* 218 */
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
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _brand = __webpack_require__(220);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _brand.Brand;
  }
});

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Brand = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _brandVue = __webpack_require__(221);

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
/* 221 */
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
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _businessCard = __webpack_require__(223);

var _businessCard2 = _interopRequireDefault(_businessCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _businessCard2.default;

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _events = __webpack_require__(4);

var _events2 = _interopRequireDefault(_events);

var _businessCardVue = __webpack_require__(224);

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
/* 224 */
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
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cardArticle = __webpack_require__(226);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _cardArticle.CardArticle;
  }
});

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CardArticle = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _cardBase = __webpack_require__(15);

var _vuePropertyDecorator = __webpack_require__(0);

var _cardArticleVue = __webpack_require__(227);

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
/* 227 */
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
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cardBase = __webpack_require__(15);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _cardBase.CardBase;
  }
});

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cardDownload = __webpack_require__(230);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _cardDownload.CardDownload;
  }
});

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CardDownload = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _cardDownloadVue = __webpack_require__(231);

var _cardDownloadVue2 = _interopRequireDefault(_cardDownloadVue);

var _uuid = __webpack_require__(232);

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
/* 231 */
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
/* 232 */
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

var _uuid = __webpack_require__(11);

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(10)))

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cardProduct = __webpack_require__(234);

var _cardProduct2 = _interopRequireDefault(_cardProduct);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _cardProduct2.default;

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _cardProductVue = __webpack_require__(235);

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
/* 235 */
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
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _color = __webpack_require__(237);

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _color2.default;

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _color = __webpack_require__(238);

var _colorVue = __webpack_require__(239);

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
/* 238 */
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
/* 239 */
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
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _contentBlock = __webpack_require__(241);

var _contentBlock2 = _interopRequireDefault(_contentBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _contentBlock2.default;

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _contentBlockVue = __webpack_require__(242);

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
/* 242 */
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
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _contentToggle = __webpack_require__(244);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _contentToggle.ContentToggle;
  }
});

/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ContentToggle = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _contentToggleVue = __webpack_require__(245);

var _contentToggleVue2 = _interopRequireDefault(_contentToggleVue);

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

var ContentToggle = function (_Vue) {
    _inherits(ContentToggle, _Vue);

    function ContentToggle() {
        _classCallCheck(this, ContentToggle);

        var _this = _possibleConstructorReturn(this, (ContentToggle.__proto__ || Object.getPrototypeOf(ContentToggle)).apply(this, arguments));

        _this.expanded = _this.initiallyExpanded || false;
        return _this;
    }

    _createClass(ContentToggle, [{
        key: "toggle",
        value: function toggle(evt) {
            if (this.preventDefault) {
                evt.preventDefault();
            }
            this.expanded = !this.expanded;
            this.$emit('content-toggle', { expanded: this.expanded });
        }
    }, {
        key: "toggleIcon",
        get: function get() {
            return this.expanded ? this.collapseIcon : this.expandIcon;
        }
    }, {
        key: "toggleText",
        get: function get() {
            return this.expanded ? this.collapseText : this.expandText;
        }
    }]);

    return ContentToggle;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: false, default: 'angle-up' }), __metadata("design:type", String)], ContentToggle.prototype, "collapseIcon", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: false, default: 'Less' }), __metadata("design:type", String)], ContentToggle.prototype, "collapseText", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: false, default: 'angle-down' }), __metadata("design:type", String)], ContentToggle.prototype, "expandIcon", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: false, default: 'More' }), __metadata("design:type", String)], ContentToggle.prototype, "expandText", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Boolean, required: false }), __metadata("design:type", Boolean)], ContentToggle.prototype, "initiallyExpanded", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Boolean, default: true }), __metadata("design:type", Boolean)], ContentToggle.prototype, "preventDefault", void 0);
exports.ContentToggle = ContentToggle = __decorate([_contentToggleVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'ContentToggle'
})], ContentToggle);
exports.ContentToggle = ContentToggle;

/***/ }),
/* 245 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"toggle",on:{"click":_vm.toggle}},[_c('icon',{staticClass:"toggle__icon",attrs:{"icon-name":_vm.toggleIcon}}),_vm._v(" "),_c('span',{staticClass:"toggle__icon-text"},[_vm._v(_vm._s(_vm.toggleText))])],1)}
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

var _ctaBlock = __webpack_require__(247);

var _ctaBlock2 = _interopRequireDefault(_ctaBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ctaBlock2.default;

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

var _ctaBlockVue = __webpack_require__(248);

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
    name: 'cta-block'
})], CtaBlock);
exports.default = CtaBlock;

/***/ }),
/* 248 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.ctas.length)?_c('div',{staticClass:"cta-block",class:_vm.classMod},_vm._l((_vm.ctas),function(cta,index){return _c(cta.type,_vm._b({key:index,tag:"component",class:_vm.classObject(cta.type),attrs:{"label":cta.label,"mod":_vm.modifier(cta.type)}},'component',cta,false))}),1):_vm._e()}
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
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _filterCategory = __webpack_require__(250);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _filterCategory.FilterCategory;
  }
});

/***/ }),
/* 250 */
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

var _filterCategoryVue = __webpack_require__(251);

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
/* 251 */
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
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _flyout = __webpack_require__(253);

var _flyout2 = _interopRequireDefault(_flyout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _flyout2.default;

/***/ }),
/* 253 */
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

var _flyoutVue = __webpack_require__(254);

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
/* 254 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.items && _vm.items.length > 0)?_c('ul',{directives:[{name:"show",rawName:"v-show",value:(_vm.isCompact || !_vm.viewportUtil.isResizing),expression:"isCompact || !viewportUtil.isResizing"}],staticClass:"main-nav__flyout",on:{"keydown":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"])){ return null; }return _vm.selectNextLink($event)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"tab",9,$event.key,"Tab")){ return null; }if($event.ctrlKey||$event.shiftKey||$event.altKey||$event.metaKey){ return null; }return _vm.selectNextLink($event)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"up",38,$event.key,["Up","ArrowUp"])){ return null; }return _vm.selectPrevLink($event)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"tab",9,$event.key,"Tab")){ return null; }if(!$event.shiftKey){ return null; }if($event.ctrlKey||$event.altKey||$event.metaKey){ return null; }return _vm.selectPrevLink($event)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"right",39,$event.key,["Right","ArrowRight"])){ return null; }if('button' in $event && $event.button !== 2){ return null; }return _vm.selectNextSection($event, true)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"left",37,$event.key,["Left","ArrowLeft"])){ return null; }if('button' in $event && $event.button !== 0){ return null; }return _vm.selectPrevSection($event, true)}],"mouseenter":function($event){$event.stopPropagation();return _vm.open($event)}}},_vm._l((_vm.items),function(item,key){return (item.items && item.items.length)?_c('flyout-section',_vm._b({key:key,ref:"items",refInFor:true,attrs:{"is-compact":_vm.isCompact,"itemId":("flyout_title_" + _vm.uniqId + "_" + key)},on:{"content-link-click":function($event){return _vm.$emit('content-link-click')}}},'flyout-section',item,false)):_vm._e()}),1):_vm._e()}
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
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _flyoutSection = __webpack_require__(256);

var _flyoutSection2 = _interopRequireDefault(_flyoutSection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _flyoutSection2.default;

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _flyoutSectionVue = __webpack_require__(257);

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
/* 257 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"flyout__section",class:_vm.sectionClass},[(_vm.label)?_c('strong',{staticClass:"flyout__title",attrs:{"id":_vm.itemId}},[_vm._v(_vm._s(_vm.label))]):_vm._e(),_vm._v(" "),_c('ul',{staticClass:"flyout__list",attrs:{"aria-labelledby":_vm.itemId,"aria-haspopup":_vm.items.length > _vm.maxVisible,"aria-expanded":!_vm.isCompact || _vm.isExpanded}},[_vm._l((_vm.items),function(item,index){return (index < _vm.maxVisible)?_c('li',{staticClass:"flyout__list-item"},[_c('content-link',{ref:"firstFocusableLinks",refInFor:true,staticClass:"flyout__link link",attrs:{"url":item.url,"label":item.label},nativeOn:{"click":function($event){return _vm.$emit('content-link-click')}}})],1):_vm._e()}),_vm._v(" "),_vm._l((_vm.items),function(item,index){return (index >= _vm.maxVisible)?_c('li',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isCompact || _vm.isExpanded),expression:"!isCompact || isExpanded"}],staticClass:"flyout__list-item"},[_c('content-link',{ref:"focusable",refInFor:true,staticClass:"flyout__link link",attrs:{"url":item.url,"label":item.label},nativeOn:{"click":function($event){return _vm.$emit('content-link-click')}}})],1):_vm._e()}),_vm._v(" "),(_vm.flyoutToggleIsVisible)?_c('li',{staticClass:"flyout__list-item"},[_c('content-toggle',{staticClass:"flyout__toggle",attrs:{"aria-hidden":"true"},on:{"content-toggle":_vm.toggleExpanded}})],1):_vm._e()],2),_vm._v(" "),(_vm.bottomItem)?[_c('content-link',{ref:"bottomLink",staticClass:"link flyout__link--cta-mini",attrs:{"url":_vm.bottomItem.url,"label":_vm.bottomItem.label},nativeOn:{"click":function($event){return _vm.$emit('content-link-click')}}})]:_vm._e()],2)}
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
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _footerBlock = __webpack_require__(259);

var _footerBlock2 = _interopRequireDefault(_footerBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _footerBlock2.default;

/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _footerBlockVue = __webpack_require__(260);

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
/* 260 */
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
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _footerNavigationCategory = __webpack_require__(262);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _footerNavigationCategory.FooterNavigationCategory;
  }
});

/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.FooterNavigationCategory = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _footerNavigationCategoryVue = __webpack_require__(263);

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
/* 263 */
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
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _headerBlock = __webpack_require__(265);

var _headerBlock2 = _interopRequireDefault(_headerBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _headerBlock2.default;

/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _headerBlockVue = __webpack_require__(266);

var _headerBlockVue2 = _interopRequireDefault(_headerBlockVue);

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
HeaderBlock = __decorate([_headerBlockVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'HeaderBlock'
})], HeaderBlock);
exports.default = HeaderBlock;

/***/ }),
/* 266 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"header-block"},[_vm._t("default",[(_vm.title)?_c('h2',{staticClass:"header-block__title"},[_vm._v(_vm._s(_vm.title))]):_vm._e(),_vm._v(" "),(_vm.subtitle)?_c('p',{staticClass:"header-block__subtitle"},[_vm._v(_vm._s(_vm.subtitle))]):_vm._e()])],2)}
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
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _heroHeading = __webpack_require__(268);

var _heroHeading2 = _interopRequireDefault(_heroHeading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _heroHeading2.default;

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _heroHeadingVue = __webpack_require__(269);

var _heroHeadingVue2 = _interopRequireDefault(_heroHeadingVue);

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
HeroHeading = __decorate([_heroHeadingVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'HeroHeading'
})], HeroHeading);
exports.default = HeroHeading;

/***/ }),
/* 269 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('h1',{staticClass:"hero__title header-block__title--hero"},[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),(_vm.subtitle)?_c('h2',{staticClass:"hero__subtitle header-block__subtitle--hero"},[_vm._v(_vm._s(_vm.subtitle))]):_vm._e()])}
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
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _iconButton = __webpack_require__(271);

var _iconButton2 = _interopRequireDefault(_iconButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _iconButton2.default;

/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _iconButtonVue = __webpack_require__(272);

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
/* 272 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"icon-button",class:_vm.buttonClass,attrs:{"aria-label":_vm.buttonAriaLabel,"aria-disabled":_vm.disabled,"role":"button","tabindex":"0"},on:{"click":function($event){return _vm.$emit('click')},"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.$emit('click')}}},[_c('icon',{staticClass:"icon-button__icon",attrs:{"iconName":_vm.iconName}}),_vm._v(" "),(_vm.hasDefaultSlot)?_c('span',{staticClass:"icon-button__label"},[_vm._t("default")],2):_vm._e()],1)}
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
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inPageNotification = __webpack_require__(274);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _inPageNotification.InPageNotification;
  }
});

/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.InPageNotification = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _inPageNotificationVue = __webpack_require__(275);

var _inPageNotificationVue2 = _interopRequireDefault(_inPageNotificationVue);

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

var InPageNotification = function (_Vue) {
    _inherits(InPageNotification, _Vue);

    function InPageNotification() {
        _classCallCheck(this, InPageNotification);

        var _this = _possibleConstructorReturn(this, (InPageNotification.__proto__ || Object.getPrototypeOf(InPageNotification)).apply(this, arguments));

        _this.display = true;
        return _this;
    }

    _createClass(InPageNotification, [{
        key: "close",
        value: function close() {
            this.display = false;
        }
    }]);

    return InPageNotification;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], InPageNotification.prototype, "message", void 0);
exports.InPageNotification = InPageNotification = __decorate([_inPageNotificationVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'InPageNotification'
})], InPageNotification);
exports.InPageNotification = InPageNotification;

/***/ }),
/* 275 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.display),expression:"display"}],staticClass:"notification in-page-notification"},[_c('icon-button',{attrs:{"button-class":"icon-button in-page-notification__button button--close","button-aria-label":"close","icon-name":"close"},on:{"click":_vm.close}}),_vm._v(" "),_c('p',{staticClass:"notification__content notification__content--centered"},[_vm._v("\n        "+_vm._s(_vm.message)+"\n    ")])],1)}
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
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _listSection = __webpack_require__(277);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _listSection.ListSection;
  }
});

/***/ }),
/* 277 */
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

var _listSectionVue = __webpack_require__(278);

var _listSectionVue2 = _interopRequireDefault(_listSectionVue);

var _events = __webpack_require__(4);

var _events2 = _interopRequireDefault(_events);

var _viewport = __webpack_require__(1);

var _viewport2 = _interopRequireDefault(_viewport);

var _stepRowAnimation = __webpack_require__(8);

var _getFiltersInCardCollection = __webpack_require__(279);

var _getFilteredCardsFromActiveFilterCategories = __webpack_require__(280);

var _updateActiveFilterCategories = __webpack_require__(282);

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
/* 278 */
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
/* 279 */
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
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getFilteredCardsFromActiveFilterCategories = getFilteredCardsFromActiveFilterCategories;

var _getActiveFiltersForCategory = __webpack_require__(281);

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
/* 281 */
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
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.updateActiveFilterCategories = updateActiveFilterCategories;

var _findIndexInActiveFilterCategories = __webpack_require__(283);

var _isFilterCategoryActive = __webpack_require__(284);

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
/* 283 */
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
/* 284 */
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
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _component = __webpack_require__(286);

var _component2 = _interopRequireDefault(_component);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _component2.default;

/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _templateVue = __webpack_require__(287);

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
/* 287 */
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
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _listUnorderedLimit = __webpack_require__(289);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _listUnorderedLimit.ListUnorderedLimit;
  }
});

/***/ }),
/* 289 */
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

var _events = __webpack_require__(4);

var _events2 = _interopRequireDefault(_events);

var _stepRowAnimation = __webpack_require__(8);

var _viewport = __webpack_require__(1);

var _viewport2 = _interopRequireDefault(_viewport);

var _listUnorderedLimitVue = __webpack_require__(290);

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
/* 290 */
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
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mainNavigation = __webpack_require__(292);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _mainNavigation.MainNavigation;
  }
});

/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MainNavigation = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _mainNavigationVue = __webpack_require__(293);

var _mainNavigationVue2 = _interopRequireDefault(_mainNavigationVue);

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
        key: "handleNavAssistClick",
        value: function handleNavAssistClick(stateChange) {
            this.$emit('nav-assist-click', stateChange);
        }
    }, {
        key: "handleResize",
        value: function handleResize() {
            this.showCompactMenu = this.viewportUtil.isTablet;
            if (!this.showCompactMenu) {
                this.$emit('show-compact-menu', false);
            }
        }
    }, {
        key: "mounted",
        value: function mounted() {
            this.viewportUtil.addResizeHandler(this.handleResize);
            this.showCompactMenu = this.viewportUtil.isTablet;
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
/* 293 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{key:"large-menu",staticClass:"main-nav",class:_vm.classList,attrs:{"aria-label":"site"}},[_c('ul',{staticClass:"main-nav__list",class:{'main-nav__list-visible': _vm.mainNavOpen && _vm.showCompactMenu},attrs:{"role":"menu"}},_vm._l((_vm.navigation),function(mainNavigationItem,index){return (_vm.navigation)?_c('main-navigation-item',_vm._b({key:index,ref:"navItem",refInFor:true,attrs:{"is-compact":_vm.showCompactMenu,"main-nav-open":_vm.mainNavOpen,"active":false,"itemId":'nav-' + index},on:{"nav-assist-click":_vm.handleNavAssistClick}},'main-navigation-item',mainNavigationItem,false)):_vm._e()}),1)])}
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
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mainNavigationItem = __webpack_require__(295);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _mainNavigationItem.MainNavigationItem;
  }
});

/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.MainNavigationItem = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _mainNavigationItemVue = __webpack_require__(296);

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
        key: "closeMobileNav",
        value: function closeMobileNav() {
            this.$emit('nav-assist-click', 'close-mobile-nav');
            this.closeFlyout();
        }
    }, {
        key: "focus",
        value: function focus() {
            var navLink = this.$refs.parent;
            if (navLink && navLink.$el) {
                navLink.$el.focus();
            }
        }
    }, {
        key: "openFlyout",
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

            function openFlyout() {
                return _ref2.apply(this, arguments);
            }

            return openFlyout;
        }()
    }, {
        key: "closeFlyout",
        value: function closeFlyout() {
            this.flyoutIsOpen = false;
        }
    }, {
        key: "toggleFlyout",
        value: function toggleFlyout() {
            if (this.flyoutIsOpen) {
                this.closeFlyout();
                return;
            }
            this.openFlyout().then();
        }
    }, {
        key: "delayHideFlyout",
        value: function delayHideFlyout() {
            var _this2 = this;

            return new Promise(function (resolve) {
                if (_this2.hideTimeout === null) {
                    _this2.hideTimeout = setTimeout(function () {
                        _this2.hideTimeout = null;
                        _this2.closeFlyout();
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
                                return this.openFlyout();

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
            this.closeFlyout();
            this.$emit('tab');
        }
    }, {
        key: "selectPrevNavItem",
        value: function selectPrevNavItem() {
            this.closeFlyout();
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
                                this.closeFlyout();

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
/* 296 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"main-nav__item",class:{ 'main-nav__item--active': _vm.active },attrs:{"role":"menuitem"},on:{"mouseleave":_vm.delayHideFlyout,"mouseenter":_vm.openFlyout}},[_c('div',{on:{"keydown":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"])){ return null; }$event.preventDefault();return _vm.selectFlyoutFirstLink($event)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"tab",9,$event.key,"Tab")){ return null; }if(!$event.shiftKey){ return null; }if($event.ctrlKey||$event.altKey||$event.metaKey){ return null; }return _vm.closeMobileNav($event)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }$event.preventDefault();return _vm.closeMobileNav($event)}]}},[_c('base-link',{ref:"parent",staticClass:"main-nav__link",attrs:{"url":_vm.url,"aria-haspopup":"true","aria-controls":_vm.itemId,"aria-current":_vm.isActive,"label":_vm.label,"aria-expanded":!_vm.isCompact && _vm.flyoutIsOpen},on:{"focus":_vm.openFlyout},nativeOn:{"click":function($event){return _vm.closeMobileNav($event)}}})],1),_vm._v(" "),_c('icon-button',{directives:[{name:"show",rawName:"v-show",value:(_vm.toggleIsVisible),expression:"toggleIsVisible"}],staticClass:"icon-button--small main-nav__toggle disable-focus",attrs:{"icon-name":_vm.angleDirection,"tabindex":"-1"},on:{"click":_vm.toggleFlyout}}),_vm._v(" "),(_vm.categories)?_c('flyout',{ref:"flyout",staticClass:"flyout--large",class:{ 'flyout--is-open': _vm.flyoutIsOpen },attrs:{"id":_vm.itemId,"items":_vm.categories,"is-compact":_vm.isCompact},on:{"content-link-click":_vm.closeMobileNav,"open":_vm.openFlyout,"close":_vm.closeFlyout,"main":_vm.selectParent},nativeOn:{"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }return _vm.selectParent($event)}}}):_vm._e()],1)}
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
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _modal = __webpack_require__(298);

var _modal2 = _interopRequireDefault(_modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _modal2.default;

/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _gsap = __webpack_require__(6);

var _modalVue = __webpack_require__(299);

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
/* 299 */
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
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _modalButton = __webpack_require__(301);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _modalButton.ModalButton;
  }
});

/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ModalButton = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _modalButtonVue = __webpack_require__(302);

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
/* 302 */
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
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _modalWizard = __webpack_require__(304);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _modalWizard.ModalWizard;
  }
});

/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ModalWizard = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _modalWizardVue = __webpack_require__(305);

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
/* 305 */
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
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _product = __webpack_require__(307);

var _product2 = _interopRequireDefault(_product);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _product2.default;

/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _productVue = __webpack_require__(308);

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
/* 308 */
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
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _searchBar = __webpack_require__(310);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _searchBar.SearchBar;
  }
});

/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SearchBar = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _searchBarVue = __webpack_require__(311);

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
            window.location.href = this.action + "?search=" + encodeURIComponent(this.searchValue);
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
    }, {
        key: "action",
        get: function get() {
            var prefix = '';
            if (this.languageCode && this.languageCode !== 'en') {
                prefix = "/" + this.languageCode;
            }
            return prefix + "/search";
        }
    }]);

    return SearchBar;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], SearchBar.prototype, "label", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: false, default: null }), __metadata("design:type", String)], SearchBar.prototype, "languageCode", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], SearchBar.prototype, "placeholder", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Boolean, required: false, default: false }), __metadata("design:type", Boolean)], SearchBar.prototype, "openState", void 0);
exports.SearchBar = SearchBar = __decorate([_searchBarVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'search-bar'
})], SearchBar);
exports.SearchBar = SearchBar;

/***/ }),
/* 311 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form',{ref:"search-form",staticClass:"search-bar",attrs:{"action":_vm.action,"method":"get"},on:{"submit":function($event){$event.preventDefault();return _vm.handleSubmit($event)}}},[_c('div',{attrs:{"role":"search"}},[_c('div',{staticClass:"search-bar__inputholder"},[_c('label',{staticClass:"search-bar__label",attrs:{"for":"search-bar__input"}},[_vm._v(_vm._s(_vm.label))]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.searchValue),expression:"searchValue"}],ref:"search-bar__input",staticClass:"search-bar__input",attrs:{"placeholder":_vm.placeholder,"autocapitalize":"off","autocomplete":"off","autocorrect":"off","id":"search-bar__input","name":"search"},domProps:{"value":(_vm.searchValue)},on:{"blur":_vm.onBlur,"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }return _vm.close($event)},"input":function($event){if($event.target.composing){ return; }_vm.searchValue=$event.target.value}}})]),_vm._v(" "),_c('icon-button',{attrs:{"button-class":"icon-button icon-button--large search-bar__button","button-aria-label":"Search","icon-name":"search"},on:{"click":_vm.handleSubmit}}),_vm._v(" "),_c('icon-button',{attrs:{"button-class":"icon-button icon-button--large search-bar__close-button","button-aria-label":"Close search","icon-name":"close"},on:{"click":_vm.close}})],1)])}
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
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _searchBarPage = __webpack_require__(313);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _searchBarPage.SearchBarPage;
  }
});

/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SearchBarPage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _searchBarPageVue = __webpack_require__(314);

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
/* 314 */
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
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _searchResult = __webpack_require__(316);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _searchResult.SearchResult;
  }
});

/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SearchResult = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _searchResultVue = __webpack_require__(317);

var _searchResultVue2 = _interopRequireDefault(_searchResultVue);

var _mark = __webpack_require__(318);

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
/* 317 */
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
/* 318 */
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
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _socialNav = __webpack_require__(320);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _socialNav.SocialNav;
  }
});

/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SocialNav = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _socialNavVue = __webpack_require__(321);

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
exports.SocialNav = SocialNav = __decorate([_socialNavVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'social-nav'
})], SocialNav);
exports.SocialNav = SocialNav;

/***/ }),
/* 321 */
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
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _socialSharing = __webpack_require__(323);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _socialSharing.SocialSharing;
  }
});

/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SocialSharing = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _socialSharingVue = __webpack_require__(324);

var _socialSharingVue2 = _interopRequireDefault(_socialSharingVue);

var _generateSocialSharingUrl = __webpack_require__(325);

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
/* 324 */
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
/* 325 */
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
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _subNavigationItem = __webpack_require__(327);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _subNavigationItem.SubNavigationItem;
  }
});

/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SubNavigationItem = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _subNavigationItemVue = __webpack_require__(328);

var _subNavigationItemVue2 = _interopRequireDefault(_subNavigationItemVue);

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
exports.SubNavigationItem = SubNavigationItem = __decorate([_subNavigationItemVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'SubNavigationItem'
})], SubNavigationItem);
exports.SubNavigationItem = SubNavigationItem;

/***/ }),
/* 328 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('base-link',{staticClass:"subnavigation__link link link--reversed",attrs:{"url":_vm.url}},[_c('div',{staticClass:"subnavigation__image-container"},[(_vm.image)?_c('c-image',_vm._b({attrs:{"keep-in-view":""}},'c-image',_vm.image,false)):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"subnavigation__label",attrs:{"aria-label":_vm.label}},[_c('span',{staticClass:"link__underline"},[_vm._v("\n            "+_vm._s(_vm.label)+"\n        ")])])])}
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
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sysNav = __webpack_require__(330);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _sysNav.SysNav;
  }
});

/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SysNav = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _sysNavVue = __webpack_require__(331);

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
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, default: 'store' }), __metadata("design:type", Object)], SysNav.prototype, "orderNowIcon", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], SysNav.prototype, "orderNowLink", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], SysNav.prototype, "orderNowLabel", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, default: 'search' }), __metadata("design:type", Object)], SysNav.prototype, "searchIcon", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], SysNav.prototype, "searchLabel", void 0);
exports.SysNav = SysNav = __decorate([_sysNavVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'sys-nav'
})], SysNav);
exports.SysNav = SysNav;

/***/ }),
/* 331 */
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
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tab = __webpack_require__(333);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _tab.Tab;
  }
});

/***/ }),
/* 333 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Tab = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _tabVue = __webpack_require__(334);

var _tabVue2 = _interopRequireDefault(_tabVue);

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
exports.Tab = Tab = __decorate([_tabVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'Tab'
})], Tab);
exports.Tab = Tab;

/***/ }),
/* 334 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.active),expression:"active"}],staticClass:"tabs__content",attrs:{"id":_vm.id,"role":"tabpanel","aria-hidden":!_vm.active,"aria-label":_vm.label}},[[_c(_vm.content.type,_vm._b({tag:"component"},'component',_vm.content,false))]],2)}
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
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tabs = __webpack_require__(336);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _tabs.Tabs;
  }
});

/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Tabs = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _browserCapabilities = __webpack_require__(2);

var _browserCapabilities2 = _interopRequireDefault(_browserCapabilities);

var _viewport = __webpack_require__(1);

var _viewport2 = _interopRequireDefault(_viewport);

var _gsap = __webpack_require__(6);

var _defaults = __webpack_require__(3);

var _defaults2 = _interopRequireDefault(_defaults);

var _tabsVue = __webpack_require__(337);

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
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Array, required: true }), __metadata("design:type", Object)], Tabs.prototype, "tabs", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Number, default: 0 }), __metadata("design:type", Object)], Tabs.prototype, "defaultTab", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Boolean, required: true }), __metadata("design:type", Object)], Tabs.prototype, "sequenced", void 0);
__decorate([(0, _vuePropertyDecorator.Watch)('activeTab'), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], Tabs.prototype, "setActiveTab", null);
exports.Tabs = Tabs = __decorate([_tabsVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'Tabs'
})], Tabs);
exports.Tabs = Tabs;

/***/ }),
/* 337 */
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
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tabTable = __webpack_require__(339);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _tabTable.TabTable;
  }
});

/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TabTable = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _tabTableVue = __webpack_require__(340);

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
/* 340 */
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
/* 341 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tabTableRow = __webpack_require__(342);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _tabTableRow.TabTableRow;
  }
});

/***/ }),
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TabTableRow = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _tabTableRowVue = __webpack_require__(343);

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
/* 343 */
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
/* 344 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tooltipToggle = __webpack_require__(345);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _tooltipToggle.TooltipToggle;
  }
});

/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TooltipToggle = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _gsap = __webpack_require__(6);

var _defaults = __webpack_require__(3);

var _defaults2 = _interopRequireDefault(_defaults);

var _tooltipToggleVue = __webpack_require__(346);

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
/* 346 */
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
/* 347 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wizardStepConfirmation = __webpack_require__(348);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_wizardStepConfirmation).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 348 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _wizardStepConfirmationVue = __webpack_require__(349);

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
/* 349 */
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
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wizardStepDownloadList = __webpack_require__(351);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _wizardStepDownloadList.WizardStepDownloadList;
  }
});

/***/ }),
/* 351 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WizardStepDownloadList = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _wizardStepDownloadListVue = __webpack_require__(352);

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
/* 352 */
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
/* 353 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _articleContent = __webpack_require__(354);

Object.defineProperty(exports, 'ArticleContent', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_articleContent).default;
  }
});

var _articleHeader = __webpack_require__(357);

Object.defineProperty(exports, 'ArticleHeader', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_articleHeader).default;
  }
});

var _brands = __webpack_require__(360);

Object.defineProperty(exports, 'Brands', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_brands).default;
  }
});

var _colors = __webpack_require__(363);

Object.defineProperty(exports, 'Colors', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_colors).default;
  }
});

var _contentCover = __webpack_require__(366);

Object.defineProperty(exports, 'ContentCover', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_contentCover).default;
  }
});

var _contentGeneral = __webpack_require__(369);

Object.defineProperty(exports, 'ContentGeneral', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_contentGeneral).default;
  }
});

var _contentHighlight = __webpack_require__(372);

Object.defineProperty(exports, 'ContentHighlight', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_contentHighlight).default;
  }
});

var _heroArticle = __webpack_require__(375);

Object.defineProperty(exports, 'HeroArticle', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_heroArticle).default;
  }
});

var _heroBasic = __webpack_require__(378);

Object.defineProperty(exports, 'HeroBasic', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_heroBasic).default;
  }
});

var _heroCover = __webpack_require__(381);

Object.defineProperty(exports, 'HeroCover', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_heroCover).default;
  }
});

var _heroHomepage = __webpack_require__(384);

Object.defineProperty(exports, 'HeroHomepage', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_heroHomepage).default;
  }
});

var _heroProduct = __webpack_require__(388);

Object.defineProperty(exports, 'HeroProduct', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_heroProduct).default;
  }
});

var _localeSelector = __webpack_require__(391);

Object.defineProperty(exports, 'LocaleSelector', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_localeSelector).default;
  }
});

var _overview = __webpack_require__(394);

Object.defineProperty(exports, 'Overview', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_overview).default;
  }
});

var _overviewUbr = __webpack_require__(397);

Object.defineProperty(exports, 'OverviewUbr', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_overviewUbr).default;
  }
});

var _pageFooter = __webpack_require__(400);

Object.defineProperty(exports, 'PageFooter', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_pageFooter).default;
  }
});

var _pageHeader = __webpack_require__(403);

Object.defineProperty(exports, 'PageHeader', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_pageHeader).default;
  }
});

var _searchResults = __webpack_require__(406);

Object.defineProperty(exports, 'SearchResults', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_searchResults).default;
  }
});

var _subnavigation = __webpack_require__(409);

Object.defineProperty(exports, 'Subnavigation', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_subnavigation).default;
  }
});

var _tabbedContent = __webpack_require__(412);

Object.defineProperty(exports, 'TabbedContent', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_tabbedContent).default;
  }
});

var _tabbedTable = __webpack_require__(415);

Object.defineProperty(exports, 'TabbedTable', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_tabbedTable).default;
  }
});

var _tableCompare = __webpack_require__(418);

Object.defineProperty(exports, 'TableCompare', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_tableCompare).default;
  }
});

var _jobBoardFrame = __webpack_require__(421);

Object.defineProperty(exports, 'JobBoardFrame', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_jobBoardFrame).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 354 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _articleContent = __webpack_require__(355);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _articleContent.ArticleContent;
  }
});

/***/ }),
/* 355 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ArticleContent = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _articleContentVue = __webpack_require__(356);

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
/* 356 */
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
/* 357 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _articleHeader = __webpack_require__(358);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _articleHeader.ArticleHeader;
  }
});

/***/ }),
/* 358 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ArticleHeader = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _articleHeaderVue = __webpack_require__(359);

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
/* 359 */
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
/* 360 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _brands = __webpack_require__(361);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _brands.Brands;
  }
});

/***/ }),
/* 361 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Brands = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _brandsVue = __webpack_require__(362);

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
/* 362 */
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
/* 363 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _colors = __webpack_require__(364);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _colors.Colors;
  }
});

/***/ }),
/* 364 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Colors = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _colorsVue = __webpack_require__(365);

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
/* 365 */
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
/* 366 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _contentCover = __webpack_require__(367);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _contentCover.ContentCover;
  }
});

/***/ }),
/* 367 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ContentCover = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _contentCoverVue = __webpack_require__(368);

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
/* 368 */
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
/* 369 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _contentGeneral = __webpack_require__(370);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _contentGeneral.ContentGeneral;
  }
});

/***/ }),
/* 370 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ContentGeneral = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _contentGeneralVue = __webpack_require__(371);

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
/* 371 */
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
/* 372 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _contentHighlight = __webpack_require__(373);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _contentHighlight.ContentHighlight;
  }
});

/***/ }),
/* 373 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ContentHighlight = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _contentHighlightVue = __webpack_require__(374);

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
/* 374 */
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
/* 375 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _heroArticle = __webpack_require__(376);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _heroArticle.HeroArticle;
  }
});

/***/ }),
/* 376 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HeroArticle = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _heroArticleVue = __webpack_require__(377);

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
/* 377 */
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
/* 378 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _heroBasic = __webpack_require__(379);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _heroBasic.HeroBasic;
  }
});

/***/ }),
/* 379 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HeroBasic = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _heroBasicVue = __webpack_require__(380);

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
/* 380 */
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
/* 381 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _heroCover = __webpack_require__(382);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _heroCover.HeroCover;
  }
});

/***/ }),
/* 382 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.HeroCover = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _heroCoverVue = __webpack_require__(383);

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
/* 383 */
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
/* 384 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _heroHomepage = __webpack_require__(385);

var _heroHomepage2 = _interopRequireDefault(_heroHomepage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _heroHomepage2.default;

/***/ }),
/* 385 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _heroHomepageVue = __webpack_require__(386);

var _heroHomepageVue2 = _interopRequireDefault(_heroHomepageVue);

var _buildSrcset = __webpack_require__(387);

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
/* 386 */
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
/* 387 */
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
/* 388 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _heroProduct = __webpack_require__(389);

var _heroProduct2 = _interopRequireDefault(_heroProduct);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _heroProduct2.default;

/***/ }),
/* 389 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _heroProductVue = __webpack_require__(390);

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
/* 390 */
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
/* 391 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _localeSelector = __webpack_require__(392);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _localeSelector.LocaleSelector;
  }
});

/***/ }),
/* 392 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LocaleSelector = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _localeSelectorVue = __webpack_require__(393);

var _localeSelectorVue2 = _interopRequireDefault(_localeSelectorVue);

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

var LocaleSelector = function (_Vue) {
    _inherits(LocaleSelector, _Vue);

    function LocaleSelector() {
        _classCallCheck(this, LocaleSelector);

        var _this = _possibleConstructorReturn(this, (LocaleSelector.__proto__ || Object.getPrototypeOf(LocaleSelector)).apply(this, arguments));

        _this.localeSelectorOpen = false;
        _this.currentIsoCode = _this.initialIsoCode;
        return _this;
    }

    _createClass(LocaleSelector, [{
        key: "handleLocaleChange",
        value: function handleLocaleChange(code) {
            if (!code) {
                this.toggleLocaleSelector();
                return;
            }
            if (this.currentIsoCode !== code) {
                this.currentIsoCode = code;
                this.$emit(this.eventLocaleChanged, code);
            }
            this.toggleLocaleSelector();
        }
    }, {
        key: "toggleLocaleSelector",
        value: function toggleLocaleSelector() {
            this.localeSelectorOpen = !this.localeSelectorOpen;
            if (this.localeSelectorOpen) {
                this.$emit('is-editing', this.type);
                return;
            }
            this.$emit('is-editing', null);
        }
    }, {
        key: "localeSelectorClickOutsideHandler",
        value: function localeSelectorClickOutsideHandler() {
            if (this.localeSelectorOpen) {
                this.localeSelectorOpen = false;
                this.$emit('is-editing', null);
            }
        }
    }, {
        key: "onInitialIsoCodeChange",
        value: function onInitialIsoCodeChange() {
            this.currentIsoCode = this.initialIsoCode;
        }
    }, {
        key: "ariaLabel",
        get: function get() {
            return "Change your locale, currently: " + this.datasource[this.currentIsoCode];
        }
    }, {
        key: "buttonText",
        get: function get() {
            return this.currentIsoCode.toUpperCase();
        }
    }, {
        key: "iconButtonText",
        get: function get() {
            return this.datasource[this.currentIsoCode];
        }
    }]);

    return LocaleSelector;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object, required: true }), __metadata("design:type", Object)], LocaleSelector.prototype, "datasource", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", String)], LocaleSelector.prototype, "eventLocaleChanged", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, default: null }), __metadata("design:type", Object)], LocaleSelector.prototype, "highlightedLabel", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, default: '' }), __metadata("design:type", String)], LocaleSelector.prototype, "iconName", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", String)], LocaleSelector.prototype, "initialIsoCode", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, default: null }), __metadata("design:type", Object)], LocaleSelector.prototype, "label", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Number, default: 3 }), __metadata("design:type", Number)], LocaleSelector.prototype, "minChar", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, default: '' }), __metadata("design:type", Object)], LocaleSelector.prototype, "placeholder", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Boolean, required: false }), __metadata("design:type", Boolean)], LocaleSelector.prototype, "showSuggestions", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, default: '' }), __metadata("design:type", Object)], LocaleSelector.prototype, "suggestionsLabel", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", String)], LocaleSelector.prototype, "type", void 0);
__decorate([(0, _vuePropertyDecorator.Watch)('initialIsoCode'), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], LocaleSelector.prototype, "onInitialIsoCodeChange", null);
exports.LocaleSelector = LocaleSelector = __decorate([_localeSelectorVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'locale-selector'
})], LocaleSelector);
exports.LocaleSelector = LocaleSelector;

/***/ }),
/* 393 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"click-outside",rawName:"v-click-outside",value:(_vm.localeSelectorClickOutsideHandler),expression:"localeSelectorClickOutsideHandler"}],staticClass:"locale-selector"},[_c('button',{directives:[{name:"show",rawName:"v-show",value:(!_vm.localeSelectorOpen && !_vm.iconName),expression:"!localeSelectorOpen && !iconName"}],staticClass:"button--transparent button--small",attrs:{"aria-label":_vm.ariaLabel},on:{"click":_vm.toggleLocaleSelector}},[_vm._v("\n        "+_vm._s(_vm.buttonText)+"\n    ")]),_vm._v(" "),_c('icon-button',{directives:[{name:"show",rawName:"v-show",value:(!_vm.localeSelectorOpen && _vm.iconName),expression:"!localeSelectorOpen && iconName"}],attrs:{"button-class":"icon-button--small icon-button--reversed","icon-name":_vm.iconName,"button-aria-label":_vm.ariaLabel},on:{"click":_vm.toggleLocaleSelector}},[_vm._v("\n        "+_vm._s(_vm.iconButtonText)+"\n    ")]),_vm._v(" "),(_vm.localeSelectorOpen)?[_c('auto-complete',{attrs:{"datasource":_vm.datasource,"highlightedKeys":[this.currentIsoCode],"highlightedLabel":_vm.highlightedLabel,"label":_vm.label,"minChar":_vm.minChar,"placeholder":_vm.placeholder,"showSuggestions":_vm.showSuggestions,"suggestionsLabel":_vm.suggestionsLabel},on:{"auto-complete-input":_vm.handleLocaleChange}}),_vm._v(" "),_c('icon-button',{ref:"closeCountryPanel",attrs:{"buttonAriaLabel":"Cancel","buttonClass":"locale-selector__icon-button","iconName":"close"},on:{"click":_vm.toggleLocaleSelector}})]:_vm._e()],2)}
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
/* 394 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _overview = __webpack_require__(395);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _overview.Overview;
  }
});

/***/ }),
/* 395 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Overview = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _overviewVue = __webpack_require__(396);

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
/* 396 */
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
/* 397 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _overviewUbr = __webpack_require__(398);

var _overviewUbr2 = _interopRequireDefault(_overviewUbr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _overviewUbr2.default;

/***/ }),
/* 398 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _overviewUbrVue = __webpack_require__(399);

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
/* 399 */
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
/* 400 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pageFooter = __webpack_require__(401);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _pageFooter.PageFooter;
  }
});

/***/ }),
/* 401 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PageFooter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _pageFooterVue = __webpack_require__(402);

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

        var _this = _possibleConstructorReturn(this, (PageFooter.__proto__ || Object.getPrototypeOf(PageFooter)).apply(this, arguments));

        _this.currentlyEditing = null;
        return _this;
    }

    _createClass(PageFooter, [{
        key: "toggleSelector",
        value: function toggleSelector(type) {
            this.currentlyEditing = type;
        }
    }, {
        key: "countryChangedHandler",
        value: function countryChangedHandler(code) {
            this.$emit(this.eventCountryChanged, code);
        }
    }, {
        key: "languageChangedHandler",
        value: function languageChangedHandler(code) {
            this.$emit(this.eventLanguageChanged, code);
        }
    }, {
        key: "showCountrySelector",
        get: function get() {
            return !this.currentlyEditing || this.currentlyEditing === 'countrySelector';
        }
    }, {
        key: "showLanguageSelector",
        get: function get() {
            if (Object.keys(this.localeSelector.datasource).length < 3) {
                return false;
            }
            return !this.currentlyEditing || this.currentlyEditing === 'languageSelector';
        }
    }]);

    return PageFooter;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], PageFooter.prototype, "copyrightLabel", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], PageFooter.prototype, "countryCode", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object, required: true }), __metadata("design:type", Object)], PageFooter.prototype, "countrySelector", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], PageFooter.prototype, "eventCountryChanged", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], PageFooter.prototype, "eventLanguageChanged", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], PageFooter.prototype, "languageCode", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object, required: true }), __metadata("design:type", Object)], PageFooter.prototype, "localeSelector", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Array, required: true }), __metadata("design:type", Object)], PageFooter.prototype, "legalNavigation", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: false }), __metadata("design:type", Object)], PageFooter.prototype, "language", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Array, required: true }), __metadata("design:type", Object)], PageFooter.prototype, "navigation", void 0);
exports.PageFooter = PageFooter = __decorate([_pageFooterVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'PageFooter'
})], PageFooter);
exports.PageFooter = PageFooter;

/***/ }),
/* 402 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"footer",attrs:{"lang":_vm.language}},[_c('div',{staticClass:"footer__container"},[_c('div',{staticClass:"footer__primary"},[_c('router-link',{staticClass:"branded-logo footer__branded-logo",attrs:{"to":"/","aria-label":"Ultimaker homepage"}},[_c('icon',{staticClass:"branded-logo__u",attrs:{"icon-name":"ultimaker-u"}})],1),_vm._v(" "),(_vm.navigation && _vm.navigation.length)?_c('nav',{staticClass:"footer__navigation"},_vm._l((_vm.navigation),function(navigationItem,index){return _c('footer-navigation-category',_vm._b({key:index},'footer-navigation-category',navigationItem,false))}),1):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"footer__secondary"},[_c('social-nav'),_vm._v(" "),_c('div',{staticClass:"footer__locales"},[_c('icon',{staticClass:"footer__locales-icon",attrs:{"icon-name":"geo"}}),_vm._v(" "),(_vm.showCountrySelector)?_c('locale-selector',_vm._b({staticClass:"footer__country-selector",attrs:{"type":"countrySelector","eventLocaleChanged":_vm.eventCountryChanged,"initialIsoCode":_vm.countryCode},on:_vm._d({"is-editing":_vm.toggleSelector},[_vm.eventCountryChanged,_vm.countryChangedHandler])},'locale-selector',_vm.countrySelector,false)):_vm._e(),_vm._v(" "),(!_vm.currentlyEditing && _vm.showLanguageSelector)?_c('span',{staticClass:"footer__dash"},[_vm._v("–")]):_vm._e(),_vm._v(" "),(_vm.showLanguageSelector)?_c('locale-selector',_vm._b({staticClass:"footer__language-selector",attrs:{"type":"languageSelector","showSuggestions":"","eventLocaleChanged":_vm.eventLanguageChanged,"initialIsoCode":_vm.languageCode,"minChar":1},on:_vm._d({"is-editing":_vm.toggleSelector},[_vm.eventLanguageChanged,_vm.languageChangedHandler])},'locale-selector',_vm.localeSelector,false)):_vm._e()],1)],1),_vm._v(" "),_c('div',{staticClass:"footer__tertiary"},[(_vm.legalNavigation && _vm.legalNavigation.length)?_c('nav',{staticClass:"footer__legal"},[_c('footer-navigation-category',{staticClass:"footer__legal__column",attrs:{"items":_vm.legalNavigation,"label":_vm.copyrightLabel}})],1):_vm._e()])])])}
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
/* 403 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pageHeader = __webpack_require__(404);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _pageHeader.PageHeader;
  }
});

/***/ }),
/* 404 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PageHeader = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _viewport = __webpack_require__(1);

var _viewport2 = _interopRequireDefault(_viewport);

var _pageHeaderVue = __webpack_require__(405);

var _pageHeaderVue2 = _interopRequireDefault(_pageHeaderVue);

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

var PageHeader = function (_Vue) {
    _inherits(PageHeader, _Vue);

    function PageHeader() {
        _classCallCheck(this, PageHeader);

        var _this = _possibleConstructorReturn(this, (PageHeader.__proto__ || Object.getPrototypeOf(PageHeader)).apply(this, arguments));

        _this.assistUsed = false;
        _this.mainNavOpen = false;
        _this.maxMobileRes = 1025;
        _this.preferencesBarStatus = 'open';
        _this.resize = false;
        _this.searchOpen = false;
        _this.showCompactMenu = true;
        _this.viewportUtil = new _viewport2.default();
        return _this;
    }

    _createClass(PageHeader, [{
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
        key: "handleOpenCompactMenu",
        value: function handleOpenCompactMenu(show) {
            if (!show) {
                this.closeMainNav();
            }
        }
    }, {
        key: "handleFocus",
        value: function handleFocus() {
            var search = this.$refs.search;

            if (!this.$refs.search || !search.focusInput) {
                return;
            }
            search.focusInput();
        }
    }, {
        key: "handleNavAssistClick",
        value: function handleNavAssistClick(stateChange) {
            if (stateChange === 'open-mobile-nav') {
                this.closeSearch();
                this.openMainNav();
            }
            if (stateChange === 'close-mobile-nav') {
                this.closeSearch();
                this.closeMainNav();
            }
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
        key: "openMainNav",
        value: function openMainNav() {
            this.mainNavOpen = true;
        }
    }, {
        key: "closeMainNav",
        value: function closeMainNav() {
            this.mainNavOpen = false;
        }
    }, {
        key: "beforeDestroy",
        value: function beforeDestroy() {
            this.viewportUtil.removeResizeHandler(this.handleResize);
            this.$offPublic('preferences-bar');
        }
    }, {
        key: "beforeMount",
        value: function beforeMount() {
            this.viewportUtil.addResizeHandler(this.handleResize);
        }
    }, {
        key: "mounted",
        value: function mounted() {
            var _this2 = this;

            this.handleResize();
            this.$onPublic('preferences-bar', function (payload) {
                _this2.preferencesBarStatus = payload;
            });
        }
    }, {
        key: "storedHeights",
        get: function get() {
            return this.$parent.$store.getters['sizeEmitter/storedHeights'];
        }
    }, {
        key: "headerClasses",
        get: function get() {
            var isFixed = true;
            if (this.storedHeights.drawer !== null && this.preferencesBarStatus !== 'closed') {
                isFixed = this.viewportUtil.scrollY >= this.storedHeights.drawer;
            }
            return {
                'header--absolute': !isFixed,
                'header--fixed': isFixed
            };
        }
    }]);

    return PageHeader;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object, required: false }), __metadata("design:type", Object)], PageHeader.prototype, "cta", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: false, default: '/' }), __metadata("design:type", String)], PageHeader.prototype, "homepageUrl", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: false }), __metadata("design:type", Object)], PageHeader.prototype, "language", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Array, required: false }), __metadata("design:type", Object)], PageHeader.prototype, "navigation", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object, required: false }), __metadata("design:type", Object)], PageHeader.prototype, "search", void 0);
exports.PageHeader = PageHeader = __decorate([_pageHeaderVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'PageHeader'
})], PageHeader);
exports.PageHeader = PageHeader;

/***/ }),
/* 405 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{directives:[{name:"size-emitter",rawName:"v-size-emitter",value:('header'),expression:"'header'"}],staticClass:"header",class:_vm.headerClasses,attrs:{"lang":_vm.language,"role":"banner"}},[_c('div',{staticClass:"header__top",class:{'header--mobile-inverted': _vm.mainNavOpen}},[_c('a',{staticClass:"home-link",attrs:{"href":_vm.homepageUrl,"aria-label":"Ultimaker homepage"}},[_c('icon',{staticClass:"home-link__logo",attrs:{"icon-name":"logo-ultimaker"}})],1),_vm._v(" "),(_vm.navigation)?_c('main-navigation',{attrs:{"navigation":_vm.navigation,"main-nav-open":_vm.mainNavOpen},on:{"nav-assist-click":_vm.handleNavAssistClick,"show-compact-menu":_vm.handleOpenCompactMenu}}):_vm._e(),_vm._v(" "),(_vm.cta && _vm.search)?_c('sys-nav',{attrs:{"order-now-icon":_vm.cta.icon,"order-now-label":_vm.cta.label,"order-now-link":_vm.cta.url,"search-icon":_vm.search.icon,"search-label":_vm.search.label},on:{"open-search":_vm.openSearch}}):_vm._e(),_vm._v(" "),_c('nav-assist',{staticClass:"main-nav__nav-assist",attrs:{"open-state":_vm.mainNavOpen},on:{"nav-assist-click":_vm.handleNavAssistClick}}),_vm._v(" "),_c('transition',{attrs:{"name":"search"},on:{"after-enter":_vm.handleFocus,"leave":_vm.handleFocus}},[(_vm.searchOpen)?_c('search-bar',{ref:"search",staticClass:"header__search",attrs:{"label":_vm.search.label,"languageCode":_vm.language,"placeholder":_vm.search.placeholder,"open-state":_vm.searchOpen},on:{"close":_vm.closeSearch}}):_vm._e()],1)],1)])}
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
/* 406 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _searchResults = __webpack_require__(407);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _searchResults.SearchResults;
  }
});

/***/ }),
/* 407 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SearchResults = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _stepRowAnimation = __webpack_require__(8);

var _vuePropertyDecorator = __webpack_require__(0);

var _searchResultsVue = __webpack_require__(408);

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
/* 408 */
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
/* 409 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _subnavigation = __webpack_require__(410);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _subnavigation.Subnavigation;
  }
});

/***/ }),
/* 410 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Subnavigation = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _browserCapabilities = __webpack_require__(2);

var _browserCapabilities2 = _interopRequireDefault(_browserCapabilities);

var _subnavigationVue = __webpack_require__(411);

var _subnavigationVue2 = _interopRequireDefault(_subnavigationVue);

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

var Subnavigation = function (_Vue) {
    _inherits(Subnavigation, _Vue);

    function Subnavigation() {
        _classCallCheck(this, Subnavigation);

        var _this = _possibleConstructorReturn(this, (Subnavigation.__proto__ || Object.getPrototypeOf(Subnavigation)).apply(this, arguments));

        _this.activeSelector = '.exact-active';
        _this.scrollTimeout = 300;
        _this.isTouch = false;
        return _this;
    }

    _createClass(Subnavigation, [{
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

    return Subnavigation;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Array, required: true }), __metadata("design:type", Object)], Subnavigation.prototype, "items", void 0);
exports.Subnavigation = Subnavigation = __decorate([_subnavigationVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'Subnavigation'
})], Subnavigation);
exports.Subnavigation = Subnavigation;

/***/ }),
/* 411 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.items)?_c('nav',{ref:"subNav",staticClass:"subnavigation subnavigation--fixed",attrs:{"aria-label":"sub items"}},[(_vm.items)?_c('ul',{staticClass:"subnavigation__list",class:_vm.isTouch ? 'touch' : '',attrs:{"role":"presentation"}},_vm._l((_vm.items),function(item,index){return _c('li',{ref:"listItems",refInFor:true,staticClass:"subnavigation__item"},[_c(item.type,_vm._b({key:index,tag:"component"},'component',item,false))],1)}),0):_vm._e()]):_vm._e()}
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
/* 412 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tabbedContent = __webpack_require__(413);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _tabbedContent.TabbedContent;
  }
});

/***/ }),
/* 413 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TabbedContent = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _tabbedContentVue = __webpack_require__(414);

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
/* 414 */
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
/* 415 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tabbedTable = __webpack_require__(416);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _tabbedTable.TabbedTable;
  }
});

/***/ }),
/* 416 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TabbedTable = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _tabbedTableVue = __webpack_require__(417);

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
/* 417 */
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
/* 418 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tableCompare = __webpack_require__(419);

var _tableCompare2 = _interopRequireDefault(_tableCompare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _tableCompare2.default;

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

var _debounce = __webpack_require__(7);

var _debounce2 = _interopRequireDefault(_debounce);

var _viewport = __webpack_require__(1);

var _viewport2 = _interopRequireDefault(_viewport);

var _browserCapabilities = __webpack_require__(2);

var _browserCapabilities2 = _interopRequireDefault(_browserCapabilities);

var _tableCompareVue = __webpack_require__(420);

var _tableCompareVue2 = _interopRequireDefault(_tableCompareVue);

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

var TableCompare = function (_Vue) {
    _inherits(TableCompare, _Vue);

    function TableCompare() {
        _classCallCheck(this, TableCompare);

        var _this = _possibleConstructorReturn(this, (TableCompare.__proto__ || Object.getPrototypeOf(TableCompare)).apply(this, arguments));

        _this.disableLeft = false;
        _this.disableRight = false;
        _this.viewportUtility = new _viewport2.default();
        _this.initiallyVisible = 3;
        _this.scrollingColumns = 0;
        _this.showScrollingColumns = false;
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
            this.resetScrollPosition();
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
        key: "resetScrollingColumns",
        value: function resetScrollingColumns() {
            this.showScrollingColumns = !this.viewportUtility.isMobile && !this.viewportUtility.isTablet;
            this.scrollingColumns = !this.viewportUtility.isMobile && !this.viewportUtility.isTablet ? this.columnLength + 1 : this.columnLength;
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
        value: function () {
            var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                var reverse = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
                var scrollWidth, scrollLeft, scrollContainer, xCord;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                scrollWidth = this.$refs.scrollWidthContainer.clientWidth;
                                scrollLeft = this.$refs.scrollContainer.scrollLeft;
                                scrollContainer = this.$refs.scrollContainer;
                                xCord = scrollLeft + (reverse ? -1 : 1) * scrollWidth;

                                if (!(this.$refs.scrollContainer.scrollTo || this.viewportUtility.isMobile)) {
                                    _context.next = 9;
                                    break;
                                }

                                _context.next = 7;
                                return this.$refs.scrollContainer.scrollTo({
                                    left: xCord,
                                    behavior: 'smooth'
                                });

                            case 7:
                                _context.next = 10;
                                break;

                            case 9:
                                scrollContainer.scrollLeft = reverse ? 0 : this.initiallyVisible * (scrollWidth / this.columnLength);

                            case 10:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function scroll() {
                return _ref.apply(this, arguments);
            }

            return scroll;
        }()
    }, {
        key: "resetScrollPosition",
        value: function resetScrollPosition() {
            this.resetScrollingColumns();
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
    }, {
        key: "columnLength",
        get: function get() {
            return this.content.columns.length;
        }
    }, {
        key: "showScrollButtons",
        get: function get() {
            return this.columnLength - this.initiallyVisible > 0 && !this.viewportUtility.isMobile || (this.viewportUtility.isMobile || this.viewportUtility.isTablet) && this.columnLength > 1;
        }
    }]);

    return TableCompare;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], TableCompare.prototype, "title", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String }), __metadata("design:type", Object)], TableCompare.prototype, "subtitle", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object, required: true }), __metadata("design:type", Object)], TableCompare.prototype, "content", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object }), __metadata("design:type", Object)], TableCompare.prototype, "ctas", void 0);
__decorate([(0, _vuePropertyDecorator.Watch)('content.columns'), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], TableCompare.prototype, "observeColumns", null);
__decorate([(0, _vuePropertyDecorator.Watch)('scrollingColumns'), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], TableCompare.prototype, "resetScrollingColumns", null);
TableCompare = __decorate([_tableCompareVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'TableCompare'
})], TableCompare);
exports.default = TableCompare;

/***/ }),
/* 420 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"organism"},[_c('div',{staticClass:"container"},[_c('header-block',{attrs:{"title":_vm.title,"subtitle":_vm.subtitle}}),_vm._v(" "),_c('div',{ref:"scrollWidthContainer",staticClass:"table-compare"},[_c('div',{ref:"scrollContainer",staticClass:"table-compare__scroll-container"},[(_vm.content)?_c('table',{staticClass:"table-compare__table",style:(("--number-of-columns: " + _vm.scrollingColumns + ";"))},[_c('colgroup',[(_vm.showScrollingColumns)?_c('col'):_vm._e(),_vm._v(" "),_vm._l((_vm.content.columns),function(col){return _c('col')}),_vm._v(" "),(_vm.showScrollingColumns)?_c('col'):_vm._e()],2),_vm._v(" "),_c('thead',[_c('tr',[(_vm.showScrollingColumns)?_c('th',{attrs:{"scope":"col"}}):_vm._e(),_vm._v(" "),_vm._l((_vm.content.columns),function(col){return _c('th',{ref:"columns",refInFor:true,attrs:{"scope":"col"}},[(col.image && col.image.url)?_c('c-image',_vm._b({staticClass:"table-compare__image",attrs:{"alt":"col.alt"}},'c-image',col.image,false)):_vm._e(),_vm._v(" "),_c('span',[_vm._v(_vm._s(col.title))])],1)}),_vm._v(" "),(_vm.showScrollingColumns)?_c('th',{attrs:{"scope":"col"}}):_vm._e()],2)]),_vm._v(" "),_c('tbody',_vm._l((_vm.content.rows),function(row){return _c('tr',[(_vm.showScrollingColumns)?_c('td'):_vm._e(),_vm._v(" "),_vm._l((row.cells),function(cell){return _c('td',[_c('span',{staticClass:"table-compare__cell"},[_vm._v(_vm._s(cell.label))]),_vm._v(" "),(cell.checked)?_c('icon',{staticClass:"table-compare__checkmark",attrs:{"icon-name":"checkmark"}}):_vm._e()],1)}),_vm._v(" "),(_vm.showScrollingColumns)?_c('td'):_vm._e()],2)}),0),_vm._v(" "),_c('tfoot',[_c('tr',[(_vm.showScrollingColumns)?_c('th',{attrs:{"scope":"row"}}):_vm._e(),_vm._v(" "),_vm._l((_vm.content.columns),function(cell){return _c('td',[(cell.cta)?_c(cell.cta.type,_vm._b({tag:"component",class:_vm.getClassNames(cell.cta.type)},'component',cell.cta,false)):_vm._e()],1)}),_vm._v(" "),(_vm.showScrollingColumns)?_c('td',{attrs:{"scope":"row"}}):_vm._e()],2)])]):_vm._e()]),_vm._v(" "),(_vm.showScrollButtons)?_c('div',{staticClass:"table-compare__scroll-buttons"},[_c('icon-button',{staticClass:"table-compare__scroll-button table-compare__scroll-button--left",attrs:{"icon-name":"angle-left","disabled":_vm.disableLeft},on:{"click":function($event){return _vm.scroll(true)}}}),_vm._v(" "),_c('icon-button',{staticClass:"table-compare__scroll-button table-compare__scroll-button--right",attrs:{"icon-name":"angle-right","disabled":_vm.disableRight},on:{"click":function($event){return _vm.scroll(false)}}})],1):_vm._e(),_vm._v(" "),_c('div',{staticClass:"table-compare-features"},[_c('div',{staticClass:"table-compare-features--header"}),_vm._v(" "),_vm._l((_vm.content.rows),function(row){return _c('div',{staticClass:"table-compare-features--body"},[(row.tooltip)?_c('div',{staticClass:"table-compare__feature"},[_c('tooltip-toggle',_vm._b({attrs:{"label":row.label}},'tooltip-toggle',row.tooltip,false))],1):_c('div',{staticClass:"table-compare__feature--no-tooltip"},[_c('span',[_vm._v(_vm._s(row.label))])])])}),_vm._v(" "),_c('div',{staticClass:"table-compare-features--footer"})],2)]),_vm._v(" "),_c('footer-block',{attrs:{"ctas":_vm.ctas}})],1)])}
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

var _jobBoardFrame = __webpack_require__(422);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _jobBoardFrame.JobBoardFrame;
  }
});

/***/ }),
/* 422 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.JobBoardFrame = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(0);

var _jobBoardFrameVue = __webpack_require__(423);

var _jobBoardFrameVue2 = _interopRequireDefault(_jobBoardFrameVue);

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

var JobBoardFrame = function (_Vue) {
    _inherits(JobBoardFrame, _Vue);

    function JobBoardFrame() {
        _classCallCheck(this, JobBoardFrame);

        var _this = _possibleConstructorReturn(this, (JobBoardFrame.__proto__ || Object.getPrototypeOf(JobBoardFrame)).apply(this, arguments));

        _this.url = 'https://boards.greenhouse.io/embed/job_board/js?for=ultimaker';
        return _this;
    }

    _createClass(JobBoardFrame, [{
        key: "beforeMount",
        value: function beforeMount() {
            var script = document.createElement('script');
            script.src = this.url;
            script.onload = function () {
                if (window.Grnhse) {
                    window.Grnhse.Iframe.load();
                }
            };
            document.body.appendChild(script);
        }
    }]);

    return JobBoardFrame;
}(_vuePropertyDecorator.Vue);
exports.JobBoardFrame = JobBoardFrame = __decorate([_jobBoardFrameVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'JobBoardFrame'
})], JobBoardFrame);
exports.JobBoardFrame = JobBoardFrame;

/***/ }),
/* 423 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"job-board-frame organism"},[_c('div',{staticClass:"container"},[_c('div',{attrs:{"id":"grnhse_app"}})])])}]

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

var _sizeEmitter = __webpack_require__(425);

Object.defineProperty(exports, 'SizeEmitter', {
  enumerable: true,
  get: function get() {
    return _sizeEmitter.SizeEmitter;
  }
});

var _clickOutside = __webpack_require__(426);

Object.defineProperty(exports, 'ClickOutside', {
  enumerable: true,
  get: function get() {
    return _clickOutside.ClickOutside;
  }
});

/***/ }),
/* 425 */
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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var debounceResizeTimeout = 200;
var debounceScrollTimeout = 10;
var viewportUtil = new _viewport2.default();
function dispatchChange(vnode, binding, height) {
    vnode.context.$store.dispatch('sizeEmitter/SET_STORED_HEIGHT', { key: binding.value, value: height }).then().catch(function (err) {
        return console.error(err);
    });

    vnode.context.__sizeEmitterHeight = height;
}
function SizeHandlerFactory(binding, vnode) {
    return function () {
        if (!vnode || !vnode.context) {
            return;
        }
        var height = vnode.elm.offsetHeight;
        if (typeof vnode.context.__sizeEmitterHeight === 'undefined') {
            dispatchChange(vnode, binding, height);
            return;
        }
        if (height === 0) {
            return;
        }
        dispatchChange(vnode, binding, height);
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
            viewportUtil.addResizeHandler((0, _debounce2.default)(vnode.context.sizeHandler, debounceResizeTimeout));
            viewportUtil.addScrollHandler((0, _debounce2.default)(vnode.context.sizeHandler, debounceScrollTimeout));
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
            (0, _debounce2.default)(vnode.context.sizeHandler, debounceResizeTimeout);
        }
    }, {
        key: 'update',
        value: function update(el, binding, vnode) {
            if (!vnode.context) {
                return;
            }
            (0, _debounce2.default)(vnode.context.sizeHandler, debounceResizeTimeout);
        }
    }, {
        key: 'componentUpdated',
        value: function componentUpdated(el, binding, vnode) {
            if (!vnode.context) {
                return;
            }
            (0, _debounce2.default)(vnode.context.sizeHandler, debounceResizeTimeout);
        }
    }]);

    return SizeEmitter;
}();

/***/ }),
/* 426 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ClickOutside = exports.ClickOutside = function () {
    function ClickOutside() {
        _classCallCheck(this, ClickOutside);

        this.name = 'ClickOutside';
    }

    _createClass(ClickOutside, [{
        key: 'bind',
        value: function bind(el, binding, vnode) {
            el.clickOutsideEvent = function (event) {
                if (!(el === event.target || el.contains(event.target))) {
                    if (vnode.context) {
                        vnode.context[binding.expression](event);
                    }
                }
            };
            document.body.addEventListener('click', el.clickOutsideEvent);
        }
    }, {
        key: 'unbind',
        value: function unbind(el) {
            document.body.removeEventListener('click', el.clickOutsideEvent);
        }
    }]);

    return ClickOutside;
}();

/***/ }),
/* 427 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })
/******/ ])});;
//# sourceMappingURL=legacy.js.map