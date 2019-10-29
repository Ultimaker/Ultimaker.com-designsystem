define("components", ["vue","vue-property-decorator","lodash/debounce","core-js/modules/es6.typed.array-buffer","core-js/modules/es6.typed.data-view","core-js/modules/es6.typed.int8-array","core-js/modules/es6.typed.uint8-array","core-js/modules/es6.typed.uint8-clamped-array","core-js/modules/es6.typed.int16-array","core-js/modules/es6.typed.uint16-array","core-js/modules/es6.typed.int32-array","core-js/modules/es6.typed.uint32-array","core-js/modules/es6.typed.float32-array","core-js/modules/es6.typed.float64-array","core-js/modules/es6.map","core-js/modules/es6.set","core-js/modules/es6.weak-map","core-js/modules/es6.weak-set","core-js/modules/es6.reflect.apply","core-js/modules/es6.reflect.construct","core-js/modules/es6.reflect.define-property","core-js/modules/es6.reflect.delete-property","core-js/modules/es6.reflect.get","core-js/modules/es6.reflect.get-own-property-descriptor","core-js/modules/es6.reflect.get-prototype-of","core-js/modules/es6.reflect.has","core-js/modules/es6.reflect.is-extensible","core-js/modules/es6.reflect.own-keys","core-js/modules/es6.reflect.prevent-extensions","core-js/modules/es6.reflect.set","core-js/modules/es6.reflect.set-prototype-of","core-js/modules/es6.promise","core-js/modules/es6.symbol","core-js/modules/es6.object.freeze","core-js/modules/es6.object.seal","core-js/modules/es6.object.prevent-extensions","core-js/modules/es6.object.is-frozen","core-js/modules/es6.object.is-sealed","core-js/modules/es6.object.is-extensible","core-js/modules/es6.object.get-own-property-descriptor","core-js/modules/es6.object.get-prototype-of","core-js/modules/es6.object.keys","core-js/modules/es6.object.get-own-property-names","core-js/modules/es6.object.assign","core-js/modules/es6.object.is","core-js/modules/es6.object.set-prototype-of","core-js/modules/es6.function.name","core-js/modules/es6.string.raw","core-js/modules/es6.string.from-code-point","core-js/modules/es6.string.code-point-at","core-js/modules/es6.string.repeat","core-js/modules/es6.string.starts-with","core-js/modules/es6.string.ends-with","core-js/modules/es6.string.includes","core-js/modules/es6.regexp.flags","core-js/modules/es6.regexp.match","core-js/modules/es6.regexp.replace","core-js/modules/es6.regexp.split","core-js/modules/es6.regexp.search","core-js/modules/es6.array.from","core-js/modules/es6.array.of","core-js/modules/es6.array.copy-within","core-js/modules/es6.array.find","core-js/modules/es6.array.find-index","core-js/modules/es6.array.fill","core-js/modules/es6.array.iterator","core-js/modules/es6.number.is-finite","core-js/modules/es6.number.is-integer","core-js/modules/es6.number.is-safe-integer","core-js/modules/es6.number.is-nan","core-js/modules/es6.number.epsilon","core-js/modules/es6.number.min-safe-integer","core-js/modules/es6.number.max-safe-integer","core-js/modules/es6.math.acosh","core-js/modules/es6.math.asinh","core-js/modules/es6.math.atanh","core-js/modules/es6.math.cbrt","core-js/modules/es6.math.clz32","core-js/modules/es6.math.cosh","core-js/modules/es6.math.expm1","core-js/modules/es6.math.fround","core-js/modules/es6.math.hypot","core-js/modules/es6.math.imul","core-js/modules/es6.math.log1p","core-js/modules/es6.math.log10","core-js/modules/es6.math.log2","core-js/modules/es6.math.sign","core-js/modules/es6.math.sinh","core-js/modules/es6.math.tanh","core-js/modules/es6.math.trunc","core-js/modules/es7.array.includes","core-js/modules/es7.object.values","core-js/modules/es7.object.entries","core-js/modules/es7.object.get-own-property-descriptors","core-js/modules/es7.string.pad-start","core-js/modules/es7.string.pad-end","core-js/modules/web.timers","core-js/modules/web.immediate","core-js/modules/web.dom.iterable"], function(__WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__6__, __WEBPACK_EXTERNAL_MODULE__188__, __WEBPACK_EXTERNAL_MODULE__287__, __WEBPACK_EXTERNAL_MODULE__288__, __WEBPACK_EXTERNAL_MODULE__289__, __WEBPACK_EXTERNAL_MODULE__290__, __WEBPACK_EXTERNAL_MODULE__291__, __WEBPACK_EXTERNAL_MODULE__292__, __WEBPACK_EXTERNAL_MODULE__293__, __WEBPACK_EXTERNAL_MODULE__294__, __WEBPACK_EXTERNAL_MODULE__295__, __WEBPACK_EXTERNAL_MODULE__296__, __WEBPACK_EXTERNAL_MODULE__297__, __WEBPACK_EXTERNAL_MODULE__298__, __WEBPACK_EXTERNAL_MODULE__299__, __WEBPACK_EXTERNAL_MODULE__300__, __WEBPACK_EXTERNAL_MODULE__301__, __WEBPACK_EXTERNAL_MODULE__302__, __WEBPACK_EXTERNAL_MODULE__303__, __WEBPACK_EXTERNAL_MODULE__304__, __WEBPACK_EXTERNAL_MODULE__305__, __WEBPACK_EXTERNAL_MODULE__306__, __WEBPACK_EXTERNAL_MODULE__307__, __WEBPACK_EXTERNAL_MODULE__308__, __WEBPACK_EXTERNAL_MODULE__309__, __WEBPACK_EXTERNAL_MODULE__310__, __WEBPACK_EXTERNAL_MODULE__311__, __WEBPACK_EXTERNAL_MODULE__312__, __WEBPACK_EXTERNAL_MODULE__313__, __WEBPACK_EXTERNAL_MODULE__314__, __WEBPACK_EXTERNAL_MODULE__315__, __WEBPACK_EXTERNAL_MODULE__316__, __WEBPACK_EXTERNAL_MODULE__317__, __WEBPACK_EXTERNAL_MODULE__318__, __WEBPACK_EXTERNAL_MODULE__319__, __WEBPACK_EXTERNAL_MODULE__320__, __WEBPACK_EXTERNAL_MODULE__321__, __WEBPACK_EXTERNAL_MODULE__322__, __WEBPACK_EXTERNAL_MODULE__323__, __WEBPACK_EXTERNAL_MODULE__324__, __WEBPACK_EXTERNAL_MODULE__325__, __WEBPACK_EXTERNAL_MODULE__326__, __WEBPACK_EXTERNAL_MODULE__327__, __WEBPACK_EXTERNAL_MODULE__328__, __WEBPACK_EXTERNAL_MODULE__329__, __WEBPACK_EXTERNAL_MODULE__330__, __WEBPACK_EXTERNAL_MODULE__331__, __WEBPACK_EXTERNAL_MODULE__332__, __WEBPACK_EXTERNAL_MODULE__333__, __WEBPACK_EXTERNAL_MODULE__334__, __WEBPACK_EXTERNAL_MODULE__335__, __WEBPACK_EXTERNAL_MODULE__336__, __WEBPACK_EXTERNAL_MODULE__337__, __WEBPACK_EXTERNAL_MODULE__338__, __WEBPACK_EXTERNAL_MODULE__339__, __WEBPACK_EXTERNAL_MODULE__340__, __WEBPACK_EXTERNAL_MODULE__341__, __WEBPACK_EXTERNAL_MODULE__342__, __WEBPACK_EXTERNAL_MODULE__343__, __WEBPACK_EXTERNAL_MODULE__344__, __WEBPACK_EXTERNAL_MODULE__345__, __WEBPACK_EXTERNAL_MODULE__346__, __WEBPACK_EXTERNAL_MODULE__347__, __WEBPACK_EXTERNAL_MODULE__348__, __WEBPACK_EXTERNAL_MODULE__349__, __WEBPACK_EXTERNAL_MODULE__350__, __WEBPACK_EXTERNAL_MODULE__351__, __WEBPACK_EXTERNAL_MODULE__352__, __WEBPACK_EXTERNAL_MODULE__353__, __WEBPACK_EXTERNAL_MODULE__354__, __WEBPACK_EXTERNAL_MODULE__355__, __WEBPACK_EXTERNAL_MODULE__356__, __WEBPACK_EXTERNAL_MODULE__357__, __WEBPACK_EXTERNAL_MODULE__358__, __WEBPACK_EXTERNAL_MODULE__359__, __WEBPACK_EXTERNAL_MODULE__360__, __WEBPACK_EXTERNAL_MODULE__361__, __WEBPACK_EXTERNAL_MODULE__362__, __WEBPACK_EXTERNAL_MODULE__363__, __WEBPACK_EXTERNAL_MODULE__364__, __WEBPACK_EXTERNAL_MODULE__365__, __WEBPACK_EXTERNAL_MODULE__366__, __WEBPACK_EXTERNAL_MODULE__367__, __WEBPACK_EXTERNAL_MODULE__368__, __WEBPACK_EXTERNAL_MODULE__369__, __WEBPACK_EXTERNAL_MODULE__370__, __WEBPACK_EXTERNAL_MODULE__371__, __WEBPACK_EXTERNAL_MODULE__372__, __WEBPACK_EXTERNAL_MODULE__373__, __WEBPACK_EXTERNAL_MODULE__374__, __WEBPACK_EXTERNAL_MODULE__375__, __WEBPACK_EXTERNAL_MODULE__376__, __WEBPACK_EXTERNAL_MODULE__377__, __WEBPACK_EXTERNAL_MODULE__378__, __WEBPACK_EXTERNAL_MODULE__379__, __WEBPACK_EXTERNAL_MODULE__380__, __WEBPACK_EXTERNAL_MODULE__381__, __WEBPACK_EXTERNAL_MODULE__382__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 284);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__1__;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _debounce = __webpack_require__(188);

var _debounce2 = _interopRequireDefault(_debounce);

var _browserCapabilities = __webpack_require__(3);

var _browserCapabilities2 = _interopRequireDefault(_browserCapabilities);

var _defaults = __webpack_require__(5);

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
/* 3 */
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    gtm: {
        click: 'gtm-click',
        close: 'gtm-close',
        change: 'gtm-change',
        dataType: {
            countryChange: 'country-change',
            languageChange: 'language-change'
        }
    }
};

/***/ }),
/* 5 */
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
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__6__;

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseLink_vue_vue_type_template_id_51adaed5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(198);
/* harmony import */ var _BaseLink_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _BaseLink_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _BaseLink_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _BaseLink_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BaseLink_vue_vue_type_template_id_51adaed5___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _BaseLink_vue_vue_type_template_id_51adaed5___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('ActionButton', {
    props: {
        block: {
            type: String,
            required: false
        },
        mod: {
            type: String,
            required: false
        },
        icon: {
            type: String,
            required: false
        },
        label: {
            type: String,
            required: false
        }
    },
    computed: {
        classObject: function classObject() {
            var classes = {};
            if (this.block !== '' && typeof this.block === 'string') {
                classes[this.block + '__link'] = true;
            }
            if (this.mod !== '' && typeof this.mod === 'string') {
                this.mod.split(' ').forEach(function (mod) {
                    classes['link--' + mod] = true;
                });
            }
            if (this.icon !== '' && this.mod && this.mod.indexOf('small') === -1) {
                classes['link--icon'] = true;
            }
            return classes;
        }
    }
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_AnchorOverlay_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_AnchorOverlay_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_AnchorOverlay_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_AnchorOverlay_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_AnchorOverlay_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_AnchorOverlay_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('AnchorOverlay', {
    props: {
        title: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    }
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseLink_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseLink_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseLink_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseLink_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseLink_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseLink_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _events = __webpack_require__(4);

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var absoluteUrlRegex = /^(http(s)?):\/\//;
var domainRegex = /(http(s)?):\/\/(www.)?ultimaker\.com/;
exports.default = _vue2.default.component('BaseLink', {
    props: {
        type: {
            type: String,
            required: false
        },
        block: {
            type: String,
            required: false
        },
        mod: {
            type: String,
            required: false
        },
        icon: {
            type: String,
            required: false
        },
        url: {
            type: String,
            required: false
        },
        label: {
            type: String,
            required: false
        },
        clickEvent: {
            type: Object,
            required: false
        }
    },
    computed: {
        urlTarget: function urlTarget() {
            if (this.url) {
                return this.url.match(domainRegex) ? '_self' : '_blank';
            }
            return '';
        },
        slots: function slots() {
            return this.$slots && this.$slots.default && this.$slots.default.length;
        },
        classObject: function classObject() {
            var classes = {};
            if (this.block !== '' && typeof this.block === 'string') {
                classes[this.block + '__link'] = true;
            }
            if (this.mod !== '' && typeof this.mod === 'string') {
                this.mod.split(' ').forEach(function (mod) {
                    classes['link--' + mod] = true;
                });
            }
            if (this.icon !== '' && typeof this.icon === 'string') {
                classes['link--icon'] = true;
            }
            return classes;
        },
        linkProps: function linkProps() {
            if (this.url && this.url.match(absoluteUrlRegex)) {
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
        },
        clickEventData: function clickEventData() {
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
    },
    methods: {
        triggerEventClick: function triggerEventClick() {
            if (this.clickEvent) {
                this.$emitPublic(_events2.default.gtm.click, this.clickEventData);
            }
        }
    }
});

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentLink_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentLink_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentLink_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentLink_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentLink_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentLink_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _BaseLink = __webpack_require__(7);

var _BaseLink2 = _interopRequireDefault(_BaseLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('ContentLink', {
    extends: _BaseLink2.default,
    props: {
        icon: {
            type: String,
            required: false
        },
        url: {
            type: String,
            required: true
        },
        label: {
            type: String,
            required: true
        },
        clickEvent: {
            type: Object,
            required: false
        }
    }
});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _BaseLink = __webpack_require__(7);

var _BaseLink2 = _interopRequireDefault(_BaseLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('ContentButton', {
    extends: _BaseLink2.default,
    props: {
        icon: {
            type: String,
            required: false
        },
        url: {
            type: String,
            required: true
        },
        label: {
            type: String,
            required: true
        },
        clickEvent: {
            type: Object,
            required: false
        }
    }
});

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_YoutubeLink_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(19);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_YoutubeLink_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_YoutubeLink_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_YoutubeLink_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_YoutubeLink_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_YoutubeLink_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _BaseLink = __webpack_require__(7);

var _BaseLink2 = _interopRequireDefault(_BaseLink);

var _youtube = __webpack_require__(193);

var _youtube2 = _interopRequireDefault(_youtube);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('YoutubeLink', {
    extends: _BaseLink2.default,
    props: {
        icon: {
            type: String,
            required: false,
            default: 'play-video'
        },
        youtubeId: {
            type: String,
            required: true
        },
        label: {
            type: String,
            required: true
        },
        clickEvent: {
            type: Object,
            required: false
        }
    },
    data: function data() {
        return {
            videoVisible: false
        };
    },

    computed: {
        youtubeUrl: function youtubeUrl() {
            return '' + _youtube2.default.videoUrl + this.youtubeId;
        }
    },
    methods: {
        toggleVideoVisible: function toggleVideoVisible() {
            this.videoVisible = !this.videoVisible;
        }
    }
});

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentLinkList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentLinkList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentLinkList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentLinkList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentLinkList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentLinkList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('ContentLinkList', {
    props: {
        block: {
            type: String,
            required: true
        },
        links: {
            type: Array,
            required: true,
            default: []
        }
    }
});

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HitArea_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HitArea_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HitArea_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HitArea_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HitArea_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HitArea_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('HitArea', {});

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('HorizontalList', {
    props: {
        styleModifier: {
            type: String,
            required: false
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

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('Icon', {
    props: {
        iconName: {
            type: String,
            required: true
        }
    },
    computed: {
        iconClass: function iconClass() {
            return 'icon--' + this.iconName;
        },
        iconHref: function iconHref() {
            return '#icon-' + this.iconName;
        }
    }
});

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_LiInline_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_LiInline_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_LiInline_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_LiInline_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_LiInline_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_LiInline_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('LiInline', {
    props: {
        item: {
            type: [String, Object],
            required: true
        }
    }
});

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_LiItem_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_LiItem_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_LiItem_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_LiItem_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_LiItem_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_LiItem_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('LiItem', {
    props: {
        item: {
            type: [String, Object],
            required: true
        }
    }
});

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_NavAssist_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_NavAssist_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_NavAssist_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_NavAssist_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_NavAssist_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_NavAssist_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('NavAssist', {
    props: {
        openState: {
            type: Boolean,
            default: false
        }
    },
    data: function data() {
        return {
            inInitialState: true
        };
    },

    computed: {
        ariaExpanded: function ariaExpanded() {
            return this.openState.toString();
        }
    },
    methods: {
        toggleState: function toggleState() {
            this.inInitialState = false;
            if (this.openState) {
                return this.$emit('nav-assist-click', 'close-mobile-nav');
            }
            return this.$emit('nav-assist-click', 'open-mobile-nav');
        },
        close: function close() {
            if (this.openState) {
                this.$emit('nav-assist-click', 'close-mobile-nav');
            }
        }
    }
});

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SpanLabel_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SpanLabel_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SpanLabel_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SpanLabel_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SpanLabel_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SpanLabel_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('SpanLabel', {
    props: {
        item: {
            type: String,
            required: true
        }
    }
});

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ToolTip_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ToolTip_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ToolTip_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ToolTip_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ToolTip_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ToolTip_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('Tooltip', {
    props: {
        block: {
            type: String,
            required: false,
            default: ''
        }
    },
    computed: {
        classObject: function classObject() {
            var classes = {};
            if (this.block) {
                classes[this.block + '__tooltip'] = true;
            }
            return classes;
        }
    }
});

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_YoutubeVideo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_YoutubeVideo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_YoutubeVideo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_YoutubeVideo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_YoutubeVideo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_YoutubeVideo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _youtube = __webpack_require__(193);

var _youtube2 = _interopRequireDefault(_youtube);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('YoutubeVideo', {
    props: {
        videoId: {
            type: String,
            required: true
        }
    },
    data: function data() {
        return {
            loadVideo: false,
            videoQuery: 'autoplay=1'
        };
    },

    computed: {
        videoUrl: function videoUrl() {
            return '' + _youtube2.default.embedUrl + this.videoId + '?' + this.videoQuery;
        }
    },
    mounted: function mounted() {
        this.loadVideo = true;
    }
});

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_LabelFilter_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_LabelFilter_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_LabelFilter_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_LabelFilter_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_LabelFilter_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_LabelFilter_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('LabelFilter', {
    props: {
        checked: {
            type: Boolean,
            required: false,
            default: false
        },
        disabled: {
            type: Boolean,
            required: false,
            default: false
        },
        eventChange: {
            type: String,
            required: true
        },
        label: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        value: {
            type: String,
            required: true
        }
    },
    data: function data() {
        return {
            checkedState: this.checked || false
        };
    },

    methods: {
        onChange: function onChange() {
            this.$emit(this.eventChange, {
                checked: this.checkedState,
                disabled: this.disabled,
                value: this.value
            });
        }
    }
});

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleAuthor_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleAuthor_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleAuthor_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleAuthor_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleAuthor_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleAuthor_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _format = __webpack_require__(420);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('ArticleAuthor', {
    props: {
        name: {
            type: String,
            required: true
        },
        image: {
            type: Object,
            required: false
        },
        publishedDate: {
            type: String,
            required: true
        }
    },
    computed: {
        formatedDate: function formatedDate() {
            return _format.Format.ISODate(this.publishedDate);
        }
    }
});

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleCtas_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleCtas_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleCtas_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleCtas_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleCtas_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleCtas_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('ArticleCtas', {
    props: {
        ctas: {
            type: Object,
            required: false
        }
    }
});

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleDescriptionList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleDescriptionList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleDescriptionList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleDescriptionList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleDescriptionList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleDescriptionList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('ArticleDescriptionList', {
    props: {
        descriptions: {
            type: Array,
            required: true
        }
    }
});

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleImage_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleImage_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleImage_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleImage_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleImage_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleImage_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('ArticleImage', {
    props: {
        image: {
            type: Object,
            required: false
        },
        caption: {
            type: String,
            required: false
        }
    }
});

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleIntro_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(51);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleIntro_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleIntro_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleIntro_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleIntro_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleIntro_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('ArticleIntro', {
    props: {
        intro: {
            type: String,
            required: true
        }
    }
});

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ActicleTable_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ActicleTable_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ActicleTable_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ActicleTable_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ActicleTable_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ActicleTable_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('ArticleTable', {
    props: {
        table: {
            type: String,
            required: true
        }
    }
});

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleVideo_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleVideo_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleVideo_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleVideo_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleVideo_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleVideo_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('ArticleVideo', {
    props: {
        cta: {
            type: Object,
            required: true
        },
        overlay: {
            type: Object,
            required: false
        }
    }
});

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleText_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleText_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleText_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleText_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleText_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleText_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('ArticleText', {
    props: {
        text: {
            type: String,
            required: true
        }
    }
});

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_BlockIcon_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_BlockIcon_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_BlockIcon_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_BlockIcon_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_BlockIcon_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_BlockIcon_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('BlockIcon', {
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: false
        },
        icon: {
            type: String,
            required: false
        },
        cta: {
            type: Object,
            required: false
        }
    },
    methods: {
        getClassNames: function getClassNames(type) {
            return {
                ContentButton: 'button',
                ContentLink: 'link link--medium',
                YoutubeLink: ''
            }[type] || '';
        }
    }
});

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Brand_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Brand_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Brand_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Brand_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Brand_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Brand_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('Brand', {
    props: {
        image: {
            type: Object
        }
    }
});

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Color_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Color_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Color_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Color_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Color_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Color_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _color = __webpack_require__(431);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('Color', {
    props: {
        rgbHex: {
            type: String,
            required: true
        },
        opacity: {
            type: Number,
            required: true
        }
    },
    computed: {
        styleBackground: function styleBackground() {
            var styles = {};
            styles.background = this.color;
            if (this.opacity < 100) {
                styles.opacity = this.opacity / 100;
            }
            return styles;
        },
        styleIcon: function styleIcon() {
            var styles = {};
            styles.color = _color.Color.lightness(this.color) >= 0.5 ? '#000' : '#FFF';
            return styles;
        },
        color: function color() {
            var hexColorNoPrefix = /^([A-Fa-f0-9]{6})/;
            if (this.rgbHex && this.rgbHex.match && this.rgbHex.match(hexColorNoPrefix)) {
                return '#' + this.rgbHex;
            }
            return this.rgbHex;
        }
    }
});

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentBlock_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentBlock_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentBlock_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentBlock_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentBlock_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentBlock_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('ContentBlock', {
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
            type: Object
        },
        cta: {
            type: Object
        }
    },
    methods: {
        getClassNames: function getClassNames(type) {
            return {
                ContentButton: 'button',
                ContentLink: 'link link--medium',
                YoutubeLink: ''
            }[type] || '';
        }
    }
});

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentToggle_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentToggle_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentToggle_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentToggle_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentToggle_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentToggle_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('ContentToggle', {
    props: {
        collapseIcon: {
            type: String,
            required: false,
            default: 'angle-up'
        },
        collapseText: {
            type: String,
            required: false,
            default: 'Less'
        },
        expandIcon: {
            type: String,
            required: false,
            default: 'angle-down'
        },
        expandText: {
            type: String,
            required: false,
            default: 'More'
        },
        initiallyExpanded: {
            type: Boolean,
            required: false
        },
        preventDefault: {
            type: Boolean,
            default: true
        }
    },
    data: function data() {
        return {
            expanded: this.initiallyExpanded || false
        };
    },

    computed: {
        toggleIcon: function toggleIcon() {
            return this.expanded ? this.collapseIcon : this.expandIcon;
        },
        toggleText: function toggleText() {
            return this.expanded ? this.collapseText : this.expandText;
        }
    },
    methods: {
        toggle: function toggle(evt) {
            if (this.preventDefault) {
                evt.preventDefault();
            }
            this.expanded = !this.expanded;
            this.$emit('content-toggle', { expanded: this.expanded });
        }
    }
});

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_CtaBlock_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(69);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_CtaBlock_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_CtaBlock_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_CtaBlock_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_CtaBlock_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_CtaBlock_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('CtaBlock', {
    props: {
        ctas: {
            type: Array,
            required: true
        },
        mod: {
            type: String
        },
        styleContentButton: {
            type: String
        },
        styleContentLink: {
            type: String
        },
        modContentLink: {
            type: String
        },
        modContentButton: {
            type: String
        }
    },
    data: function data() {
        return {
            modifiers: {
                ContentButton: this.modContentButton || 'primary',
                ContentLink: this.modContentLink || 'large'
            },
            classes: {
                ContentButton: this.styleContentButton || 'button',
                ContentLink: this.styleContentLink || 'link'
            }
        };
    },

    computed: {
        classMod: function classMod() {
            var classes = {};
            if (this.mod !== '' && typeof this.mod === 'string') {
                this.mod.split(' ').forEach(function (mod) {
                    classes['cta-block--' + mod] = true;
                });
            }
            return classes;
        }
    },
    methods: {
        modifier: function modifier(type) {
            return this.modifiers[type];
        },
        classObject: function classObject(type) {
            return this.classes[type] + ' cta-link';
        }
    }
});

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ListUnordered_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ListUnordered_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ListUnordered_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ListUnordered_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ListUnordered_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ListUnordered_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('ListUnordered', {
    props: {
        listItems: {
            type: Object,
            required: true
        }
    }
});

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderBlock_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderBlock_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderBlock_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderBlock_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderBlock_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HeaderBlock_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('HeaderBlock', {
    props: {
        title: {
            type: String
        },
        subtitle: {
            type: String
        }
    }
});

/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterBlock_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterBlock_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterBlock_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterBlock_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterBlock_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterBlock_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('FooterBlock', {
    props: {
        ctas: {
            type: Object
        }
    }
});

/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ListUnorderedLimit_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ListUnorderedLimit_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ListUnorderedLimit_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ListUnorderedLimit_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ListUnorderedLimit_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ListUnorderedLimit_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _viewport = __webpack_require__(2);

var _viewport2 = _interopRequireDefault(_viewport);

var _events = __webpack_require__(4);

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('ListUnorderedLimit', {
    props: {
        listItems: {
            type: Array,
            required: true
        },
        limit: {
            type: Object
        }
    },
    data: function data() {
        return {
            componentMounted: false,
            showAll: false,
            viewportUtil: new _viewport2.default()
        };
    },

    methods: {
        getClickEventData: function getClickEventData() {
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
        },
        determineLimit: function determineLimit(limit) {
            if (limit === undefined) {
                return -1;
            }
            if (this.listItems.length <= limit) {
                return -1;
            }
            return limit;
        },
        showButtonLabel: function showButtonLabel() {
            var _ref = this.limit && this.limit.expand ? this.limit.expand : { label: '' },
                label = _ref.label;

            return label + ' (' + this.listItems.length + ')';
        },
        showHidden: function showHidden() {
            this.showAll = true;
            this.$emitPublic(_events2.default.gtm.click, this.getClickEventData());
        },
        showLimit: function showLimit() {
            if (this.limit === undefined || !this.componentMounted) {
                return -1;
            }
            if (this.viewportUtil.isMobile) {
                return this.determineLimit(this.limit.smallScreen);
            }
            return this.determineLimit(this.limit.largeScreen);
        }
    },
    mounted: function mounted() {
        this.componentMounted = true;
    }
});

/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_WizardStepDownloadList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_WizardStepDownloadList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_WizardStepDownloadList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_WizardStepDownloadList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_WizardStepDownloadList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_WizardStepDownloadList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('WizardStepDownloadList', {
    props: {
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: false
        },
        description: {
            type: String,
            required: false
        },
        items: {
            type: Array,
            required: true
        },
        submitButton: {
            type: Object,
            required: true
        }
    },
    data: function data() {
        return {
            selected: 0,
            name: 'download'
        };
    },

    computed: {
        selectedItem: function selectedItem() {
            return this.selected;
        },
        file: function file() {
            return this.items[this.selectedItem].file;
        }
    },
    methods: {
        setSelectedItem: function setSelectedItem(index) {
            this.selected = index;
        },
        handleSubmit: function handleSubmit() {
            var _this = this;

            if (window.$u && window.$u.store && window.$u.store.pushSetting) {
                window.$u.store.pushSetting('robot', true);
            }

            setTimeout(function () {
                _this.afterSubmit();
            });
        },
        afterSubmit: function afterSubmit() {
            this.$emit('step-complete');
        }
    }
});

/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_WizardStepConfirmation_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_WizardStepConfirmation_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_WizardStepConfirmation_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_WizardStepConfirmation_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_WizardStepConfirmation_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_WizardStepConfirmation_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('WizardStepConfirmation', {
    props: {
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: false
        },
        contentTitle: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        image: {
            type: Object,
            required: true
        },
        ctas: {
            type: Object,
            required: false
        }
    }
});

/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_BusinessCard_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_BusinessCard_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_BusinessCard_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_BusinessCard_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_BusinessCard_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_BusinessCard_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _events = __webpack_require__(4);

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('BusinessCard', {
    props: {
        title: {
            type: String,
            required: true
        },
        image: {
            type: Object,
            required: false
        },
        contentLink: {
            type: Object,
            required: true
        },
        properties: {
            type: Array,
            required: false
        },
        clickEvent: {
            type: Object,
            required: false
        }
    },
    computed: {
        clickEventType: function clickEventType() {
            return _events2.default.gtm.click;
        },
        clickEventData: function clickEventData() {
            if (this.clickEvent) {
                return {
                    dataType: this.clickEvent.name,
                    data: this.clickEvent.data
                };
            }
            return null;
        }
    }
});

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_CardArticle_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_CardArticle_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_CardArticle_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_CardArticle_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_CardArticle_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_CardArticle_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _CardBase = __webpack_require__(195);

var _CardBase2 = _interopRequireDefault(_CardBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('CardArticle', {
    extends: _CardBase2.default,
    props: {
        description: {
            type: String
        },
        labels: {
            type: Array
        },
        url: {
            type: String
        }
    },
    computed: {
        listItems: function listItems() {
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
    }
});

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_CardBase_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_CardBase_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_CardBase_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_CardBase_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_CardBase_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_CardBase_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _events = __webpack_require__(4);

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('CardBase', {
    props: {
        clickEvent: {
            type: Object
        },
        image: {
            type: Object
        },
        title: {
            type: String,
            required: true
        }
    },
    computed: {
        clickEventData: function clickEventData() {
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
    },
    methods: {
        triggerEventClick: function triggerEventClick() {
            if (!this.clickEvent) {
                return;
            }
            this.$emitPublic(_events2.default.gtm.click, this.clickEventData);
        }
    }
});

/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_CardDownload_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_CardDownload_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_CardDownload_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_CardDownload_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_CardDownload_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_CardDownload_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _uuid = __webpack_require__(444);

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('CardDownload', {
    props: {
        name: {
            type: String,
            required: true
        },
        selected: {
            type: Boolean,
            required: true
        },
        index: {
            type: Number,
            required: true
        },
        setSelectedItem: {
            type: Function,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        file: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        image: {
            type: Object,
            required: false
        }
    },
    computed: {
        id: function id() {
            return (0, _uuid2.default)();
        }
    },
    methods: {
        handleSelect: function handleSelect() {
            this.setSelectedItem(this.index);
        }
    }
});

/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_CardProduct_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_CardProduct_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_CardProduct_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_CardProduct_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_CardProduct_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_CardProduct_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('CardProduct', {
    props: {
        image: {
            type: Object
        },
        properties: {
            type: Array
        },
        title: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    },
    data: function data() {
        return {
            imageError: false
        };
    },

    computed: {
        listItems: function listItems() {
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
    }
});

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Flyout_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Flyout_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Flyout_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Flyout_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Flyout_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Flyout_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _viewport = __webpack_require__(2);

var _viewport2 = _interopRequireDefault(_viewport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = _vue2.default.component('Flyout', {
    props: {
        items: {
            type: Array,
            required: true
        },
        isCompact: {
            type: Boolean,
            required: false
        },
        disableKeyboardEvents: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    data: function data() {
        return {
            sectionIndex: 0,
            viewportUtil: new _viewport2.default()
        };
    },

    computed: {
        flyoutSections: function flyoutSections() {
            return Array.isArray(this.$refs.items) ? this.$refs.items : [this.$refs.items];
        }
    },
    methods: {
        open: function open() {
            this.$emit('open');
        },
        close: function close() {
            this.reset();
            this.$emit('close');
        },
        backToParent: function backToParent() {
            this.$emit('main');
            this.close();
        },
        reset: function reset() {
            this.sectionIndex = 0;

            this.flyoutSections.forEach(function (s) {
                return s && s.reset && s.reset();
            });
        },
        selectFirstLink: function selectFirstLink() {
            var _this = this;

            return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _this.reset();
                                _context.next = 3;
                                return _this.$nextTick();

                            case 3:
                                _this.flyoutSections[_this.sectionIndex].selectFirstLink();

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this);
            }))();
        },
        selectNextLink: function selectNextLink(e) {
            if (this.disableKeyboardEvents) {
                return;
            }
            e.preventDefault();

            var hasNext = this.flyoutSections[this.sectionIndex].selectNextLink();
            if (!hasNext) {
                this.selectNextSection();
            }
        },
        selectPrevLink: function selectPrevLink(e) {
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
        },
        selectNextSection: function selectNextSection(e, keepIndex) {
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
        },
        selectPrevSection: function selectPrevSection(e, keepIndex) {
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
    }
});

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterNavigationCategory_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterNavigationCategory_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterNavigationCategory_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterNavigationCategory_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterNavigationCategory_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterNavigationCategory_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('FooterNavigationCategory', {
    props: {
        label: {
            type: String,
            required: true
        },
        items: {
            type: Array,
            required: false
        }
    }
});

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroHeading_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroHeading_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroHeading_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroHeading_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroHeading_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroHeading_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('HeroHeading', {
    props: {
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: false
        }
    }
});

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_IconButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(99);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_IconButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_IconButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_IconButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_IconButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_IconButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('IconButton', {
    props: {
        buttonAriaLabel: {
            type: String,
            default: null
        },
        buttonClass: {
            type: String,
            default: null
        },
        disabled: {
            type: Boolean,
            default: false
        },
        iconName: {
            type: String,
            default: null
        },
        preventDefault: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        clickHandler: function clickHandler(evt) {
            if (this.preventDefault) {
                evt.preventDefault();
            }
            this.$emit('click');
            this.$emit('icon-button-click');
        }
    }
});

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_InPageNotification_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(101);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_InPageNotification_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_InPageNotification_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_InPageNotification_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_InPageNotification_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_InPageNotification_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _events = __webpack_require__(4);

var _events2 = _interopRequireDefault(_events);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('InPageNotification', {
    props: {
        message: {
            type: String,
            required: true
        },
        clickEvent: {
            type: Object,
            required: false
        }
    },
    data: function data() {
        return {
            display: true
        };
    },

    methods: {
        close: function close() {
            this.display = false;
            this.triggerEventClick();
        },
        clickEventData: function clickEventData() {
            if (!this.clickEvent) {
                return null;
            }
            var _clickEvent = this.clickEvent,
                name = _clickEvent.name,
                data = _clickEvent.data;

            return {
                dataType: name,
                data: _extends({}, data, {
                    pageSlug: this.$route.fullPath
                })
            };
        },
        triggerEventClick: function triggerEventClick() {
            if (!this.clickEvent) {
                return;
            }
            this.$emitPublic(_events2.default.gtm.close, this.clickEventData());
        }
    }
});

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_MainNavigation_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(103);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_MainNavigation_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_MainNavigation_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_MainNavigation_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_MainNavigation_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_MainNavigation_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _viewport = __webpack_require__(2);

var _viewport2 = _interopRequireDefault(_viewport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('MainNavigation', {
    props: {
        navigation: {
            type: Array,
            required: true
        },
        mainNavOpen: {
            type: Boolean,
            required: false
        }
    },
    data: function data() {
        return {
            viewportUtil: new _viewport2.default(),
            showCompactMenu: true
        };
    },

    computed: {
        classList: function classList() {
            return {
                'main-nav--small': this.showCompactMenu,
                'main-nav--large': !this.showCompactMenu,
                'main-nav--open': this.mainNavOpen && this.showCompactMenu
            };
        }
    },
    methods: {
        handleNavAssistClick: function handleNavAssistClick(stateChange) {
            this.$emit('nav-assist-click', stateChange);
        },
        handleResize: function handleResize() {
            this.showCompactMenu = this.viewportUtil.isTablet;
            if (!this.showCompactMenu) {
                this.$emit('show-compact-menu', false);
            }
        }
    },
    mounted: function mounted() {
        this.viewportUtil.addResizeHandler(this.handleResize);
        this.showCompactMenu = this.viewportUtil.isTablet;
    },
    beforeDestroy: function beforeDestroy() {
        this.viewportUtil.removeResizeHandler(this.handleResize);
    }
});

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(105);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Modal_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('Modal', {
    methods: {
        closeModal: function closeModal(e) {
            if (e.type === 'keyup' && e.key !== 'Esc' && e.key !== 'Escape') {
                return;
            }
            this.$emit('close');
        }
    },
    created: function created() {
        document.body.classList.add('disable-scroll');
        window.addEventListener('keyup', this.closeModal);
    },
    beforeDestroy: function beforeDestroy() {
        document.body.classList.remove('disable-scroll');
        window.removeEventListener('keyup', this.closeModal);
    }
});

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(107);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('ModalButton', {
    props: {
        clickEvent: {
            type: Object,
            required: false
        },
        label: {
            type: String,
            required: true
        },
        modal: {
            type: Object,
            required: true
        }
    },
    data: function data() {
        return {
            modalVisible: false
        };
    },

    methods: {
        toggleModalVisible: function toggleModalVisible() {
            this.modalVisible = !this.modalVisible;
        },
        triggerClick: function triggerClick() {
            this.toggleModalVisible();
        }
    }
});

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalWizard_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(109);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalWizard_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalWizard_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalWizard_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalWizard_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ModalWizard_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('ModalWizard', {
    props: {
        title: {
            type: String,
            required: true
        },
        steps: {
            type: Array,
            required: true
        }
    },
    data: function data() {
        return {
            activeStep: 0
        };
    },

    methods: {
        showNextStep: function showNextStep() {
            if (this.steps && this.steps.length > this.activeStep + 1) {
                this.activeStep += 1;
            }
        }
    }
});

/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(111);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Product_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('Product', {
    props: {
        icon: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        pricing: {
            type: Object,
            required: true
        }
    }
});

/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(113);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('SearchBar', {
    props: {
        label: {
            type: String,
            required: true
        },
        languageCode: {
            type: String,
            required: false
        },
        placeholder: {
            type: String,
            required: true
        },
        openState: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    data: function data() {
        return {
            searchValue: ''
        };
    },

    computed: {
        action: function action() {
            var prefix = '';
            if (this.languageCode && this.languageCode !== 'en') {
                prefix = '/' + this.languageCode;
            }
            return prefix + '/search';
        }
    },
    methods: {
        close: function close() {
            if (this.openState) {
                this.$emit('close');
            }
        },
        handleSubmit: function handleSubmit() {
            if (!this.searchValue.length) {
                return;
            }
            this.close();
            window.location.href = this.action + '?search=' + encodeURIComponent(this.searchValue);
        },
        onBlur: function onBlur() {
            if (this.searchValue === '') {
                this.close();
            }
        },
        focusInput: function focusInput() {
            this.$refs['search-bar__input'].focus();
        }
    }
});

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBarPage_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(115);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBarPage_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBarPage_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBarPage_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBarPage_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBarPage_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('SearchBarPage', {
    props: {
        eventSubmitSearch: {
            type: String,
            required: true
        },
        isLoading: {
            type: Boolean,
            required: true
        },
        label: {
            type: String,
            required: true
        },
        placeholder: {
            type: String,
            required: true
        },
        searchFieldName: {
            type: String,
            default: 'search'
        },
        terms: {
            type: String,
            required: true
        }
    },
    data: function data() {
        return {
            q: ''
        };
    },

    methods: {
        handleSubmit: function handleSubmit() {
            if (!this.q.length || this.q === this.terms) {
                return;
            }
            this.$emit(this.eventSubmitSearch, this.q);
        }
    },
    mounted: function mounted() {
        this.q = this.terms;
    }
});

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResult_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(117);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResult_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResult_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResult_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResult_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResult_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _mark = __webpack_require__(459);

var _mark2 = _interopRequireDefault(_mark);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('SearchResult', {
    props: {
        terms: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        link: {
            type: String,
            required: true
        },
        snippet: {
            type: String,
            required: true
        },
        formattedUrl: {
            type: String,
            required: true
        }
    },
    data: function data() {
        return {
            focused: false
        };
    },

    computed: {
        computedTitle: function computedTitle() {
            return (0, _mark2.default)(this.title, this.terms);
        },
        computedSnippet: function computedSnippet() {
            return (0, _mark2.default)(this.snippet, this.terms);
        }
    }
});

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialNav_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(119);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialNav_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialNav_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialNav_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialNav_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialNav_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('SocialNav', {});

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialSharing_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(121);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialSharing_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialSharing_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialSharing_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialSharing_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialSharing_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _generateSocialSharingUrl = __webpack_require__(462);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var protocolAndHost = 'https://www.ultimaker.com';
exports.default = _vue2.default.component('SocialSharing', {
    computed: {
        items: function items() {
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
    },
    methods: {
        url: function url(_ref) {
            var type = _ref.type;

            var url = '' + protocolAndHost + this.$route.fullPath;
            return (0, _generateSocialSharingUrl.generateSocialSharingUrl)(url, type);
        }
    }
});

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SubNavigationItem_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(123);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SubNavigationItem_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SubNavigationItem_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SubNavigationItem_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SubNavigationItem_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SubNavigationItem_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('SubNavigationItem', {
    props: {
        url: {
            type: String,
            required: true
        },
        image: {
            type: Object
        },
        label: {
            type: String,
            required: true
        }
    }
});

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SysNav_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(125);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SysNav_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SysNav_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SysNav_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SysNav_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SysNav_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('SysNav', {
    props: {
        orderNowIcon: {
            type: String,
            default: 'store'
        },
        orderNowLink: {
            type: String,
            required: true
        },
        orderNowLabel: {
            type: String,
            required: true
        },
        searchIcon: {
            type: String,
            default: 'search'
        },
        searchLabel: {
            type: String,
            required: true
        }
    },
    methods: {
        openSearch: function openSearch() {
            this.$emit('open-search');
        }
    }
});

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Tab_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(127);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Tab_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Tab_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Tab_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Tab_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Tab_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('Tab', {
    props: {
        id: {
            type: String,
            required: true
        },
        label: {
            type: String,
            required: true
        },
        content: {
            type: Object,
            required: true
        },
        active: {
            type: Boolean,
            required: true
        }
    }
});

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_TabTable_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(129);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_TabTable_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_TabTable_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_TabTable_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_TabTable_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_TabTable_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('TabTable', {
    props: {
        id: {
            type: String,
            required: true
        },
        label: {
            type: String,
            required: true
        },
        rows: {
            type: Array,
            required: true
        },
        active: {
            type: Boolean,
            required: true
        }
    }
});

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_TabTableRow_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(131);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_TabTableRow_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_TabTableRow_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_TabTableRow_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_TabTableRow_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_TabTableRow_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('TabTableRow', {
    props: {
        label: {
            type: String,
            required: true
        },
        value: {
            type: String,
            required: false
        },
        linkList: {
            type: Array,
            required: false
        },
        tooltip: {
            type: Object,
            required: false
        }
    }
});

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(133);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('Tabs', {
    props: {
        tabs: {
            type: Array,
            required: true
        },
        defaultTab: {
            type: Number,
            default: 0
        },
        sequenced: {
            type: Boolean,
            required: true
        }
    },
    data: function data() {
        return {
            activeTab: 0,
            correction: 0
        };
    },

    methods: {
        getLinkClassList: function getLinkClassList(index) {
            return {
                'tabs__list_link--active': index === this.activeTab
            };
        }
    },
    mounted: function mounted() {
        this.activeTab = this.defaultTab;
    }
});

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_TooltipToggle_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(135);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_TooltipToggle_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_TooltipToggle_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_TooltipToggle_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_TooltipToggle_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_TooltipToggle_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _defaults = __webpack_require__(5);

var _defaults2 = _interopRequireDefault(_defaults);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('TooltipToggle', {
    props: {
        label: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    },
    data: function data() {
        return {
            buildingUnit: _defaults2.default.buildingUnit,
            duration: _defaults2.default.defaultDuration,
            ease: _defaults2.default.defaultEase,
            visible: false,
            tooltipLeft: true,
            yAxisCorrection: 0
        };
    },

    computed: {
        tooltipClass: function tooltipClass() {
            return {
                'tooltip--arrow-left': this.tooltipLeft
            };
        }
    },
    methods: {
        show: function show() {
            this.visible = true;
        },
        toggleTooltip: function toggleTooltip() {
            if (!this.visible) {
                this.show();
            } else {
                this.hide();
            }
        },
        hideTooltip: function hideTooltip() {
            this.hide();
        },
        hide: function hide() {
            this.visible = false;
        }
    }
});

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FlyoutSection_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(137);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FlyoutSection_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FlyoutSection_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FlyoutSection_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FlyoutSection_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FlyoutSection_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.default = _vue2.default.component('FlyoutSection', {
    props: {
        label: {
            type: String,
            required: true
        },
        items: {
            type: Array,
            required: false
        },
        bottomItem: {
            type: Object,
            required: false
        },
        isCompact: {
            type: Boolean,
            required: false
        },
        maxVisible: {
            type: Number,
            required: false,
            default: 3
        },
        maxItemsCol: {
            type: Number,
            required: false,
            default: 6
        },
        itemId: {
            type: String,
            required: false,
            default: 'flyout_title_' + Math.floor(Math.random() * 10000)
        }
    },
    data: function data() {
        return {
            isExpanded: false,
            focusIndex: null,
            columnClassDouble: 'flyout__section--2-columns',
            columnClassTriple: 'flyout__section--3-columns'
        };
    },

    computed: {
        hasItems: function hasItems() {
            return this.items;
        },
        focusableItems: function focusableItems() {
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
        },
        moreThanMaxItems: function moreThanMaxItems() {
            if (!this.items || !this.maxItemsCol) return false;
            return this.items.length > this.maxItemsCol;
        },
        lessThanDoubleMaxItems: function lessThanDoubleMaxItems() {
            if (!this.items || !this.maxItemsCol) return false;
            return this.items.length <= this.maxItemsCol * 2;
        },
        moreThanDoubleMaxItems: function moreThanDoubleMaxItems() {
            if (!this.items || !this.maxItemsCol) return false;
            return this.items.length > this.maxItemsCol * 2;
        },
        sectionClass: function sectionClass() {
            if (this.hasItems && this.moreThanMaxItems && this.lessThanDoubleMaxItems) {
                return this.columnClassDouble;
            }
            if (this.hasItems && this.moreThanDoubleMaxItems) {
                return this.columnClassTriple;
            }
            return '';
        },
        flyoutToggleIsVisible: function flyoutToggleIsVisible() {
            if (!this.items || !this.maxVisible) return false;
            return this.isCompact && this.items.length > this.maxVisible;
        }
    },
    watch: {
        focusIndex: function focusIndex(newVal) {
            var focusComponent = this.focusableItems[newVal];
            if (typeof focusComponent === 'undefined') {
                return;
            }

            var focusElement = focusComponent.$el || focusComponent;
            if (focusElement.focus) {
                focusElement.focus();
            }
        }
    },
    methods: {
        toggleExpanded: function toggleExpanded() {
            this.isExpanded = !this.isExpanded;
        },
        selectFirstLink: function selectFirstLink() {
            this.focusIndex = 0;
        },
        selectLastLink: function selectLastLink() {
            this.focusIndex = this.focusIndex === null ? this.focusableItems.length - 1 : this.focusIndex - 1;
        },
        selectNextLink: function selectNextLink() {
            if (this.focusIndex === null) return false;
            if (this.focusIndex >= this.focusableItems.length - 1) {
                return false;
            }
            this.focusIndex = this.focusIndex + 1;
            return true;
        },
        selectPrevLink: function selectPrevLink() {
            if (this.focusIndex === null) return false;
            if (this.focusIndex <= 0) {
                return false;
            }
            this.focusIndex = this.focusIndex - 1;
            return true;
        },
        setFocusIndex: function setFocusIndex(index) {
            if (index <= 0) {
                this.focusIndex = 0;
            } else if (index >= this.focusableItems.length) {
                this.focusIndex = this.focusableItems.length - 1;
            } else {
                this.focusIndex = index;
            }
        },
        reset: function reset() {
            this.focusIndex = null;
        }
    }
});

/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ListSection_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(139);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ListSection_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ListSection_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ListSection_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ListSection_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ListSection_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _viewport = __webpack_require__(2);

var _viewport2 = _interopRequireDefault(_viewport);

var _getFiltersInCardCollection = __webpack_require__(472);

var _getFilteredCardsFromActiveFilterCategories = __webpack_require__(473);

var _events = __webpack_require__(4);

var _events2 = _interopRequireDefault(_events);

var _updateActiveFilterCategories = __webpack_require__(475);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('ListSection', {
    props: {
        cards: {
            type: Array,
            required: true
        },
        filterCategories: {
            type: Array
        },
        limit: {
            type: Object
        },
        title: {
            type: String
        },
        tooltip: {
            type: Object
        }
    },
    data: function data() {
        return {
            activeFilterCategories: [],
            chunks: [],
            chunkSize: 3,
            chunkIndex: 0,
            expanded: false,
            eventFilterCategoryChange: 'filter-category-change',
            showMax: 6,
            viewportUtil: new _viewport2.default(),
            visibleChunks: 0,
            visibleTooltip: false
        };
    },

    watch: {
        cards: function cards() {
            this.createChunks();
        }
    },
    computed: {
        activeFilters: function activeFilters() {
            return (0, _getFiltersInCardCollection.getFiltersInCardCollection)(this.filteredCards);
        },
        clickEventData: function clickEventData() {
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
        },
        filteredCards: function filteredCards() {
            if (!this.activeFilterCategories.length) {
                return this.cards;
            }
            return (0, _getFilteredCardsFromActiveFilterCategories.getFilteredCardsFromActiveFilterCategories)(this.cards, this.activeFilterCategories);
        }
    },
    methods: {
        createChunks: function createChunks() {
            this.chunkIndex = 0;
            this.chunks = [];
            while (this.chunkIndex < this.filteredCards.length) {
                this.chunks.push(this.filteredCards.slice(this.chunkIndex, this.chunkSize + this.chunkIndex));
                this.chunkIndex += this.chunkSize;
            }
        },
        handleFilterCategoryChange: function handleFilterCategoryChange(changedFilterCategory) {
            this.activeFilterCategories = (0, _updateActiveFilterCategories.updateActiveFilterCategories)(this.activeFilterCategories, changedFilterCategory);
            this.createChunks();
        },
        handleResize: function handleResize() {
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
        },
        hideTooltip: function hideTooltip() {
            this.visibleTooltip = false;
        },
        showAll: function showAll() {
            this.expanded = true;
            this.visibleChunks = Number.MAX_SAFE_INTEGER;
        },
        showButton: function showButton() {
            if (this.limit && !this.limit.expandAmount && this.expanded) {
                return false;
            }
            if (this.expanded && this.chunks.length <= this.visibleChunks) {
                return false;
            }
            return !(this.chunks.length <= this.visibleChunks);
        },
        showChunk: function showChunk() {
            this.expanded = true;
            if (this.limit && this.limit.expandAmount) {
                this.visibleChunks = this.visibleChunks + Math.ceil(this.limit.expandAmount / this.chunkSize);
            }
        },
        showLabel: function showLabel() {
            if (this.limit && this.limit.expand && this.limit.expandAmount) {
                var label = this.limit.expand.label;

                return label;
            }
            if (this.limit && this.limit.expand && !this.limit.expandAmount) {
                var _label = this.limit.expand.label;

                return _label + ' (' + this.filteredCards.length + ')';
            }
            return '';
        },
        toggleTooltip: function toggleTooltip() {
            this.visibleTooltip = !this.visibleTooltip;
        },
        tooltipVisible: function tooltipVisible() {
            return this.visibleTooltip;
        },
        triggerEventClick: function triggerEventClick() {
            if (this.limit && this.limit.expand && this.limit.expand.clickEvent) {
                try {
                    this.$emitPublic(_events2.default.gtm.click, this.clickEventData);
                } catch (e) {
                    console.warn(e);
                }
            }
        }
    },
    beforeDestroy: function beforeDestroy() {
        this.viewportUtil.removeResizeHandler(this.handleResize);
    },
    mounted: function mounted() {
        this.viewportUtil.addResizeHandler(this.handleResize);
        this.viewportUtil.triggerResize();
        this.handleResize();
        this.createChunks();
    }
});

/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_MainNavigationItem_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(141);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_MainNavigationItem_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_MainNavigationItem_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_MainNavigationItem_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_MainNavigationItem_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_MainNavigationItem_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vuePropertyDecorator = __webpack_require__(6);

var _browserCapabilities = __webpack_require__(3);

var _browserCapabilities2 = _interopRequireDefault(_browserCapabilities);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = _vuePropertyDecorator.Vue.component('MainNavigationItem', {
    props: {
        mainNavOpen: {
            type: Boolean,
            required: false
        },
        label: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        },
        categories: {
            type: Array,
            required: false
        },
        itemId: {
            type: String,
            required: true
        },
        isCompact: {
            type: Boolean,
            required: false
        },
        active: {
            type: Boolean,
            required: true
        }
    },
    data: function data() {
        return {
            flyoutIsOpen: false,
            hideTimeout: null,
            angleDirection: 'angle-down',
            isTouch: _browserCapabilities2.default.supportsTouch
        };
    },

    computed: {
        toggleIsVisible: function toggleIsVisible() {
            return !!this.categories && !this.isCompact && this.isTouch;
        },
        isActive: function isActive() {
            return this.active ? 'page' : false;
        }
    },
    watch: {
        flyoutIsOpen: function flyoutIsOpen(newVal) {
            var _this = this;

            return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return _this.$nextTick();

                            case 2:
                                _context.next = 4;
                                return new Promise(function (resolve) {
                                    return setTimeout(resolve, 10);
                                });

                            case 4:
                                _this.angleDirection = newVal ? 'angle-up' : 'angle-down';

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this);
            }))();
        }
    },
    methods: {
        closeMobileNav: function closeMobileNav() {
            this.$emit('nav-assist-click', 'close-mobile-nav');
            this.closeFlyout();
        },
        focus: function focus() {
            var navLink = this.$refs.parent;
            if (navLink && navLink.$el) {
                navLink.$el.focus();
            }
        },
        openFlyout: function openFlyout() {
            var _this2 = this;

            return _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return _this2.$nextTick();

                            case 2:
                                _context2.next = 4;
                                return new Promise(function (resolve) {
                                    return setTimeout(resolve, 10);
                                });

                            case 4:
                                if (_this2.hideTimeout) {
                                    clearTimeout(_this2.hideTimeout);
                                    _this2.hideTimeout = null;
                                }
                                _this2.flyoutIsOpen = true;

                            case 6:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, _this2);
            }))();
        },
        closeFlyout: function closeFlyout() {
            this.flyoutIsOpen = false;
        },
        toggleFlyout: function toggleFlyout() {
            if (this.flyoutIsOpen) {
                this.closeFlyout();
                return;
            }
            this.openFlyout().then();
        },
        delayHideFlyout: function delayHideFlyout() {
            var _this3 = this;

            return new Promise(function (resolve) {
                if (_this3.hideTimeout === null) {
                    _this3.hideTimeout = setTimeout(function () {
                        _this3.hideTimeout = null;
                        _this3.closeFlyout();
                        resolve();
                    }, 100);
                }
            });
        },
        selectFlyoutFirstLink: function selectFlyoutFirstLink() {
            var _this4 = this;

            return _asyncToGenerator(regeneratorRuntime.mark(function _callee3() {
                var refs;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return _this4.openFlyout();

                            case 2:
                                _context3.next = 4;
                                return _this4.$nextTick();

                            case 4:
                                refs = _this4.$refs;

                                if (!(refs.flyout && refs.flyout.selectFirstLink)) {
                                    _context3.next = 8;
                                    break;
                                }

                                _context3.next = 8;
                                return refs.flyout.selectFirstLink();

                            case 8:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, _this4);
            }))();
        },
        selectNextNavItem: function selectNextNavItem() {
            this.closeFlyout();
            this.$emit('tab');
        },
        selectPrevNavItem: function selectPrevNavItem() {
            this.closeFlyout();
            this.$emit('shifttab');
        },
        selectParent: function selectParent() {
            var _this5 = this;

            return _asyncToGenerator(regeneratorRuntime.mark(function _callee4() {
                var parent;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                if (!_this5.isCompact) {
                                    _context4.next = 2;
                                    break;
                                }

                                return _context4.abrupt('return');

                            case 2:
                                parent = _this5.$refs.parent;

                                if (parent.$el) {
                                    parent.$el.focus();
                                } else if (parent.focus) {
                                    parent.focus();
                                }
                                _context4.next = 6;
                                return _this5.$nextTick();

                            case 6:
                                _this5.closeFlyout();

                            case 7:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, _this5);
            }))();
        }
    }
});

/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterCategory_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(143);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterCategory_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterCategory_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterCategory_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterCategory_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterCategory_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('FilterCategory', {
    props: {
        activeFilters: {
            type: Array,
            default: []
        },
        labels: {
            type: Array,
            required: true
        },
        eventChange: {
            type: String,
            required: true
        },
        showAllLabel: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        }
    },
    data: function data() {
        return {
            eventLabelFilterChange: 'label-filter-change',
            filters: this.labels.map(function (label) {
                return {
                    checked: false,
                    disabled: false,
                    value: label
                };
            })
        };
    },

    watch: {
        activeFilters: function activeFilters() {
            var _this = this;

            this.filters = this.filters.map(function (filter) {
                return _extends({}, filter, {
                    disabled: _this.isFilterDisabled(filter.value)
                });
            });
        }
    },
    computed: {
        category: function category() {
            return this.title.toLowerCase().replace(/\s+/g, '-');
        },
        checkResetFiltersState: function checkResetFiltersState() {
            var activeFilter = this.filters.find(function (filter) {
                return filter.checked;
            });
            return activeFilter ? '' : 'filter-category__reset--active';
        }
    },
    methods: {
        emitEvent: function emitEvent(eventName) {
            this.$emit(eventName, {
                category: this.category,
                filters: this.filters
            });
        },
        handleLabelFilterChange: function handleLabelFilterChange(filter) {
            this.updateFilter(filter);
            this.emitEvent(this.eventChange);
        },
        isFilterDisabled: function isFilterDisabled(label) {
            return !this.activeFilters.includes(label);
        },
        updateFilter: function updateFilter(labelFilter) {
            var foundIndex = this.filters.findIndex(function (filter) {
                return filter.value === labelFilter.value;
            });
            this.filters.splice(foundIndex, 1, labelFilter);
        },
        resetFilters: function resetFilters() {
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
    }
});

/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleContent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(145);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleContent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleContent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleContent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleContent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleContent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('ArticleContent', {
    props: {
        molecules: {
            type: Array,
            required: true
        }
    }
});

/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleHeader_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(147);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleHeader_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleHeader_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleHeader_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleHeader_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ArticleHeader_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('ArticleHeader', {
    props: {
        author: {
            type: Object,
            required: true
        },
        labels: {
            type: Array
        },
        publishedDate: {
            type: String,
            required: true
        }
    },
    computed: {
        listItems: function listItems() {
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
    }
});

/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Brands_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(149);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Brands_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Brands_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Brands_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Brands_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Brands_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('Brands', {
    props: {
        ctas: {
            type: Object
        },
        expand: {
            type: Object
        },
        items: {
            type: Array,
            required: true
        },
        limit: {
            type: Object
        },
        subtitle: {
            type: String
        },
        title: {
            type: String,
            required: true
        }
    }
});

/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Colors_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(151);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Colors_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Colors_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Colors_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Colors_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Colors_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('Colors', {
    props: {
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String
        },
        colorCtas: {
            type: Object,
            required: true
        },
        colorList: {
            type: Array,
            required: true
        },
        ctas: {
            type: Object
        }
    },
    data: function data() {
        return {
            activeColorIndex: 0
        };
    },

    computed: {
        activeColor: function activeColor() {
            return this.colorList[this.activeColorIndex];
        }
    },
    methods: {
        setActiveColor: function setActiveColor(index) {
            this.activeColorIndex = index;
        }
    }
});

/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentCover_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(153);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentCover_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentCover_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentCover_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentCover_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentCover_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('ContentCover', {
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        cta: {
            type: Object
        },
        image: {
            type: Object
        }
    },
    methods: {
        getClassNames: function getClassNames(type) {
            return {
                ContentButton: 'content-cover__button button',
                ContentLink: 'content-cover__link link link--medium',
                YoutubeLink: 'content-cover__link link link--medium'
            }[type] || '';
        }
    }
});

/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentGeneral_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(155);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentGeneral_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentGeneral_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentGeneral_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentGeneral_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentGeneral_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('ContentGeneral', {
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        cta: {
            type: Object
        },
        image: {
            type: Object
        },
        reversed: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        getClassNames: function getClassNames(type) {
            return {
                ContentButton: 'content-general__button button',
                ContentLink: 'content-general__link link link--medium',
                YoutubeLink: 'content-general__link link link--medium'
            }[type] || '';
        }
    }
});

/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentHighlight_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(157);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentHighlight_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentHighlight_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentHighlight_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentHighlight_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentHighlight_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('ContentHighlight', {
    props: {
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String
        },
        description: {
            type: String
        },
        image: {
            type: Object
        },
        ctas: {
            type: Object
        },
        reversed: {
            type: Boolean,
            required: true
        }
    }
});

/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroArticle_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(159);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroArticle_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroArticle_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroArticle_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroArticle_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroArticle_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('HeroArticle', {
    props: {
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: false
        },
        image: {
            type: Object,
            required: true
        }
    }
});

/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroBasic_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(161);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroBasic_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroBasic_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroBasic_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroBasic_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroBasic_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('HeroBasic', {
    props: {
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: false
        },
        description: {
            type: String,
            required: true
        },
        image: {
            type: Object,
            required: false
        },
        ctas: {
            type: Object,
            required: false
        }
    }
});

/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroCover_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(163);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroCover_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroCover_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroCover_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroCover_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroCover_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('HeroCover', {
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        ctas: {
            type: Object,
            required: false
        },
        image: {
            type: Object,
            required: false
        }
    },
    data: function data() {
        return {
            showVideo: false
        };
    },

    methods: {
        toggleVideo: function toggleVideo() {
            this.showVideo = !this.showVideo;
        }
    }
});

/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroHomepage_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(165);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroHomepage_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroHomepage_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroHomepage_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroHomepage_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroHomepage_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _buildSrcset = __webpack_require__(495);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('HeroHomepage', {
    props: {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: false
        },
        image: {
            type: Object,
            required: false
        },
        ctas: {
            type: Object,
            required: false
        }
    },
    data: function data() {
        return {
            showVideo: false
        };
    },

    computed: {
        srcSet: function srcSet() {
            if (!this.image) return '';
            var _image = this.image,
                url = _image.url,
                focusArea = _image.focusArea;

            return (0, _buildSrcset.buildSrcSet)({ url: url, focusArea: focusArea });
        },
        srcSetPortrait: function srcSetPortrait() {
            if (!this.image) return '';
            var _image2 = this.image,
                url = _image2.url,
                focusArea = _image2.focusArea;

            return (0, _buildSrcset.buildSrcSet)({ url: url, focusArea: focusArea, portrait: true });
        },
        srcSetWebp: function srcSetWebp() {
            if (!this.image) return '';
            var _image3 = this.image,
                url = _image3.url,
                focusArea = _image3.focusArea;

            return (0, _buildSrcset.buildSrcSet)({ url: url, focusArea: focusArea, webp: true });
        },
        srcSetWebpPortrait: function srcSetWebpPortrait() {
            if (!this.image) return '';
            var _image4 = this.image,
                url = _image4.url,
                focusArea = _image4.focusArea;

            return (0, _buildSrcset.buildSrcSet)({ url: url, focusArea: focusArea, webp: true, portrait: true });
        }
    }
});

/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroProduct_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(167);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroProduct_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroProduct_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroProduct_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroProduct_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HeroProduct_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('HeroProduct', {
    props: {
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: false
        },
        description: {
            type: String,
            required: true
        },
        image: {
            type: Object,
            required: false
        },
        ctas: {
            type: Object,
            required: false
        },
        products: {
            type: Array,
            required: true
        },
        linkList: {
            type: Array,
            required: false
        }
    },
    computed: {
        productsClass: function productsClass() {
            return 'hero__products-item hero__products-item--' + (this.products.length > 1 ? 'multiple' : 'single');
        }
    }
});

/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_JobBoardFrame_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(169);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_JobBoardFrame_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_JobBoardFrame_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_JobBoardFrame_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_JobBoardFrame_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_JobBoardFrame_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('JobBoardFrame', {
    data: function data() {
        return {
            url: 'https://boards.greenhouse.io/embed/job_board/js?for=ultimaker'
        };
    },
    beforeMount: function beforeMount() {
        var script = document.createElement('script');
        script.src = this.url;
        script.onload = function () {
            if (window.Grnhse) {
                window.Grnhse.Iframe.load();
            }
        };
        document.body.appendChild(script);
    }
});

/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Overview_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(171);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Overview_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Overview_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Overview_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Overview_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Overview_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('Overview', {
    props: {
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: false
        },
        sections: {
            type: Array,
            required: true
        },
        ctas: {
            type: Object,
            required: false
        }
    }
});

/***/ }),
/* 172 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_OverviewUbr_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(173);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_OverviewUbr_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_OverviewUbr_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_OverviewUbr_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_OverviewUbr_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_OverviewUbr_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('OverviewUbr', {
    props: {
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: false
        },
        items: {
            type: Array,
            required: true
        },
        ctas: {
            type: Object,
            required: false
        }
    }
});

/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_PageFooter_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(175);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_PageFooter_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_PageFooter_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_PageFooter_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_PageFooter_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_PageFooter_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('PageFooter', {
    props: {
        copyrightLabel: {
            type: String,
            required: true
        },
        countryCode: {
            type: String,
            required: false
        },
        countrySelector: {
            type: Object,
            required: true
        },
        eventCountryChanged: {
            type: String,
            required: true
        },
        eventLanguageChanged: {
            type: String,
            required: true
        },
        languageCode: {
            type: String,
            required: true
        },
        localeSelector: {
            type: Object,
            required: true
        },
        legalNavigation: {
            type: Array,
            required: true
        },
        language: {
            type: String,
            required: false
        },
        navigation: {
            type: Array,
            required: true
        }
    },
    data: function data() {
        return {
            currentlyEditing: null
        };
    },

    computed: {
        showCountrySelector: function showCountrySelector() {
            return !this.currentlyEditing || this.currentlyEditing === 'countrySelector';
        },
        showLanguageSelector: function showLanguageSelector() {
            if (Object.keys(this.localeSelector.datasource).length < 3) {
                return false;
            }
            return !this.currentlyEditing || this.currentlyEditing === 'languageSelector';
        }
    },
    methods: {
        toggleSelector: function toggleSelector(type) {
            this.currentlyEditing = type;
        },
        countryChangedHandler: function countryChangedHandler(code) {
            this.$emit(this.eventCountryChanged, code);
        },
        languageChangedHandler: function languageChangedHandler(code) {
            this.$emit(this.eventLanguageChanged, code);
        }
    }
});

/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(177);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _viewport = __webpack_require__(2);

var _viewport2 = _interopRequireDefault(_viewport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('PageHeader', {
    props: {
        cta: {
            type: Object,
            required: false
        },
        homepageUrl: {
            type: String,
            required: false,
            default: '/'
        },
        language: {
            type: String,
            required: false
        },
        navigation: {
            type: Array,
            required: false
        },
        search: {
            type: Object,
            required: false
        }
    },
    data: function data() {
        return {
            assistUsed: false,
            mainNavOpen: false,
            maxMobileRes: 1025,
            preferencesBarStatus: 'open',
            resize: false,
            searchOpen: false,
            showCompactMenu: true,
            viewportUtil: new _viewport2.default()
        };
    },

    methods: {
        openSearch: function openSearch() {
            this.searchOpen = true;
        },
        closeSearch: function closeSearch() {
            this.searchOpen = false;
        },
        handleOpenCompactMenu: function handleOpenCompactMenu(show) {
            if (!show) {
                this.closeMainNav();
            }
        },
        handleFocus: function handleFocus() {
            var search = this.$refs.search;

            if (!this.$refs.search || !search.focusInput) {
                return;
            }
            search.focusInput();
        },
        handleNavAssistClick: function handleNavAssistClick(stateChange) {
            if (stateChange === 'open-mobile-nav') {
                this.closeSearch();
                this.openMainNav();
            }
            if (stateChange === 'close-mobile-nav') {
                this.closeSearch();
                this.closeMainNav();
            }
        },
        focusFirstSysNavItem: function focusFirstSysNavItem() {
            var firstNavItem = this.$el.querySelector('.sys-nav__link');
            if (firstNavItem) {
                firstNavItem.focus();
            }
        },
        focusHomeNavItem: function focusHomeNavItem() {
            var homeLink = this.$el.querySelector('.home-link');
            if (homeLink) {
                homeLink.focus();
            }
        },
        handleResize: function handleResize() {
            this.showCompactMenu = this.viewportUtil.screenWidth < this.maxMobileRes;
        },
        openMainNav: function openMainNav() {
            this.mainNavOpen = true;
        },
        closeMainNav: function closeMainNav() {
            this.mainNavOpen = false;
        },
        beforeDestroy: function beforeDestroy() {
            this.viewportUtil.removeResizeHandler(this.handleResize);
        },
        beforeMount: function beforeMount() {
            this.viewportUtil.addResizeHandler(this.handleResize);
        },
        mounted: function mounted() {
            this.handleResize();
        }
    }
});

/***/ }),
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResults_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(179);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResults_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResults_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResults_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResults_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchResults_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('SearchResults', {
    props: {
        eventLoadMore: {
            type: String,
            required: true
        },
        eventSubmitSearch: {
            type: String,
            required: true
        },
        isLoading: {
            type: Boolean,
            required: true
        },
        label: {
            type: String
        },
        placeholder: {
            type: String
        },
        searchResults: {
            type: Array,
            required: true
        },
        showLoadMore: {
            type: Boolean,
            required: true
        },
        terms: {
            type: String,
            required: true
        }
    },
    computed: {
        computedTitle: function computedTitle() {
            return this.searchResults.length ? 'Search results for: \u201C' + this.terms + '\u201D' : 'No results for \u201C' + this.terms + '\u201D';
        }
    },
    methods: {
        loadMore: function loadMore() {
            this.$emit(this.eventLoadMore);
        },
        submitSearch: function submitSearch(payload) {
            this.$emit(this.eventSubmitSearch, payload);
        }
    }
});

/***/ }),
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SubNavigation_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(181);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SubNavigation_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SubNavigation_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SubNavigation_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SubNavigation_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SubNavigation_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _browserCapabilities = __webpack_require__(3);

var _browserCapabilities2 = _interopRequireDefault(_browserCapabilities);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('SubNavigation', {
    props: {
        items: {
            type: Array,
            required: true
        }
    },
    data: function data() {
        return {
            activeSelector: '.exact-active',
            scrollTimeout: 300,
            isTouch: false
        };
    },
    mounted: function mounted() {
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
});

/***/ }),
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_TabbedContent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(183);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_TabbedContent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_TabbedContent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_TabbedContent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_TabbedContent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_TabbedContent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('TabbedContent', {
    props: {
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String
        },
        tabs: {
            type: Array,
            required: true
        },
        ctas: {
            type: Object
        },
        sequenced: {
            type: Boolean,
            required: false,
            default: false
        }
    }
});

/***/ }),
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_TabbedTable_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(185);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_TabbedTable_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_TabbedTable_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_TabbedTable_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_TabbedTable_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_TabbedTable_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('TabbedTable', {
    props: {
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String,
            required: false
        },
        tabs: {
            type: Array,
            required: true
        },
        ctas: {
            type: Object,
            required: true
        }
    }
});

/***/ }),
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_TableCompare_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(187);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_TableCompare_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_TableCompare_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_TableCompare_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_TableCompare_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_TableCompare_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _viewport = __webpack_require__(2);

var _viewport2 = _interopRequireDefault(_viewport);

var _browserCapabilities = __webpack_require__(3);

var _browserCapabilities2 = _interopRequireDefault(_browserCapabilities);

var _debounce = __webpack_require__(188);

var _debounce2 = _interopRequireDefault(_debounce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = _vue2.default.component('TableCompare', {
    props: {
        title: {
            type: String,
            required: true
        },
        subtitle: {
            type: String
        },
        content: {
            type: Object,
            required: true
        },
        ctas: {
            type: Object
        }
    },
    data: function data() {
        return {
            observer: null,
            disableLeft: false,
            disableRight: false,
            viewportUtility: new _viewport2.default(),
            initiallyVisible: 3,
            scrollingColumns: 0,
            showScrollingColumns: false
        };
    },

    watch: {
        'content.columns': function contentColumns() {
            this.observeColumns();
        },
        'scrollingColumns': function scrollingColumns() {
            this.resetScrollingColumns();
        }
    },
    computed: {
        columnLength: function columnLength() {
            return this.content.columns.length;
        },
        showScrollButtons: function showScrollButtons() {
            return this.columnLength - this.initiallyVisible > 0 && !this.viewportUtility.isMobile || (this.viewportUtility.isMobile || this.viewportUtility.isTablet) && this.columnLength > 1;
        }
    },
    methods: {
        observeColumns: function observeColumns() {
            this.observer.disconnect();
            if (this.$refs.columns && this.$refs.columns.length) {
                this.observer.observe(this.$refs.columns[0]);
                this.observer.observe(this.$refs.columns.slice(-1)[0]);
            }
        },
        resetScrollingColumns: function resetScrollingColumns() {
            this.showScrollingColumns = !this.viewportUtility.isMobile && !this.viewportUtility.isTablet;
            this.scrollingColumns = !this.viewportUtility.isMobile && !this.viewportUtility.isTablet ? this.columnLength + 1 : this.columnLength;
        },
        intersectionObserver: function intersectionObserver(entries) {
            var _this = this;

            var firstColumn = this.$refs.columns[0];
            var lastColumn = this.$refs.columns.slice(-1)[0];
            this.disableLeft = false;
            this.disableRight = false;
            entries.some(function (entry) {
                if (entry.isIntersecting) {
                    if (entry.target === firstColumn) {
                        _this.disableLeft = true;
                        return true;
                    }
                    if (entry.target === lastColumn) {
                        _this.disableRight = true;
                        return true;
                    }
                }
                return false;
            });
        },
        scroll: function scroll() {
            var _this2 = this;

            var reverse = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
            return _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                var scrollWidth, scrollLeft, scrollContainer, xCord;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                scrollWidth = _this2.$refs.scrollWidthContainer.clientWidth;
                                scrollLeft = _this2.$refs.scrollContainer.scrollLeft;
                                scrollContainer = _this2.$refs.scrollContainer;
                                xCord = scrollLeft + (reverse ? -1 : 1) * scrollWidth;

                                if (!(_this2.$refs.scrollContainer.scrollTo || _this2.viewportUtility.isMobile)) {
                                    _context.next = 9;
                                    break;
                                }

                                _context.next = 7;
                                return _this2.$refs.scrollContainer.scrollTo({
                                    left: xCord,
                                    behavior: 'smooth'
                                });

                            case 7:
                                _context.next = 10;
                                break;

                            case 9:
                                scrollContainer.scrollLeft = reverse ? 0 : _this2.initiallyVisible * (scrollWidth / _this2.columnLength);

                            case 10:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, _this2);
            }))();
        },
        resetScrollPosition: function resetScrollPosition() {
            this.resetScrollingColumns();
            this.$refs.scrollContainer.scrollLeft = 0;
        },
        getClassNames: function getClassNames(type) {
            return {
                ContentButton: 'button',
                ContentLink: 'link link--medium',
                YoutubeLink: ''
            }[type] || '';
        }
    },
    beforeDestroy: function beforeDestroy() {
        this.resizeHandler.cancel();
        this.viewportUtility.removeResizeHandler(this.resizeHandler);
        this.observer.unobserve(this.$refs.scrollContainer);
    },
    mounted: function mounted() {
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
});

/***/ }),
/* 188 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__188__;

/***/ }),
/* 189 */
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
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

var v1 = __webpack_require__(387);
var v4 = __webpack_require__(388);

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;


/***/ }),
/* 191 */
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
/* 192 */
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
/* 193 */
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
/* 194 */
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
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardBase_vue_vue_type_template_id_6be6d936___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(232);
/* harmony import */ var _CardBase_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _CardBase_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _CardBase_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _CardBase_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CardBase_vue_vue_type_template_id_6be6d936___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _CardBase_vue_vue_type_template_id_6be6d936___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{class:_vm.classObject,attrs:{"href":"#"}},[(_vm.icon)?_c('icon',{attrs:{"icon-name":_vm.icon}}):_vm._e(),_vm._v(" "),_vm._t("default")],2)}
var staticRenderFns = []



/***/ }),
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"anchor-overlay hit-area",attrs:{"href":_vm.url,"title":_vm.title,"aria-label":_vm.title}})}
var staticRenderFns = []



/***/ }),
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('component',_vm._b({class:_vm.classObject,on:{"click":_vm.triggerEventClick}},'component',_vm.linkProps,false),[(_vm.icon)?_c('icon',{attrs:{"icon-name":_vm.icon}}):_vm._e(),_vm._v(" "),(!_vm.slots)?_c('span',{staticClass:"link__underline"},[_vm._v("\n        "+_vm._s(_vm.label)+"\n    ")]):_vm._t("default")],2)}
var staticRenderFns = []



/***/ }),
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"link link--icon link--large",attrs:{"href":_vm.youtubeUrl,"target":"_blank"},on:{"click":function($event){$event.preventDefault();return _vm.toggleVideoVisible($event)}}},[_c('icon',{attrs:{"icon-name":_vm.icon}}),_vm._v(" "),_c('span',{staticClass:"link__underline"},[_vm._v("\n        "+_vm._s(_vm.label)+"\n    ")]),_vm._v(" "),_c('portal',{attrs:{"to":"modals"}},[(_vm.videoVisible)?_c('modal',{staticClass:"modal--video",on:{"close":_vm.toggleVideoVisible}},[_c('youtube-video',{attrs:{"video-id":_vm.youtubeId}})],1):_vm._e()],1)],1)}
var staticRenderFns = []



/***/ }),
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{class:_vm.block + '__list'},_vm._l((_vm.links),function(link){return _c('li',{class:_vm.block + '__item'},[_c('content-link',{class:link.class,attrs:{"block":_vm.block,"icon":link.icon,"url":link.url,"label":link.label}})],1)}),0)}
var staticRenderFns = []



/***/ }),
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"hit-area",attrs:{"role":"button","tabindex":"0"}},[_vm._t("default")],2)}
var staticRenderFns = []



/***/ }),
/* 202 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{class:_vm.styleModifier},[_c('strong',{staticClass:"caption-list__headline"},[_vm._v("\n        "+_vm._s(_vm.label)+"\n    ")]),_vm._v(" "),_c('ul',{staticClass:"caption-list"},_vm._l((_vm.listItems),function(item){return _c('li',{staticClass:"caption-list__list-item"},[_vm._v("\n            "+_vm._s(item.additionalContent)+"\n            "),_c('a',{attrs:{"href":item.url}},[_vm._v(_vm._s(item.text))])])}),0)])}
var staticRenderFns = []



/***/ }),
/* 203 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"icon",class:this.iconClass},[_c('use',{attrs:{"xlink:href":this.iconHref}})])}
var staticRenderFns = []



/***/ }),
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"list__item list__item--inline"},[(!_vm.item.item)?[_vm._v(_vm._s(_vm.item))]:[_c(_vm.item.type,_vm._b({tag:"component"},'component',_vm.item.item,false))]],2)}
var staticRenderFns = []



/***/ }),
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"list__item"},[(_vm.item.item)?[_c(_vm.item.type,_vm._b({tag:"component"},'component',_vm.item.item,false))]:(_vm.item.type)?[_c(_vm.item.type,_vm._b({tag:"component"},'component',_vm.item,false))]:[_vm._v(_vm._s(_vm.item))]],2)}
var staticRenderFns = []



/***/ }),
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"nav-assist",class:{'nav-assist--close': this.openState, 'nav-assist--initial-state': this.inInitialState},attrs:{"type":"button","aria-label":"menu","aria-expanded":_vm.ariaExpanded},on:{"click":_vm.toggleState,"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }return _vm.close($event)}}},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24"}},[_c('rect',{staticClass:"nav-assist__line nav-assist__line-2",attrs:{"x":"2","y":"11","width":"20","height":"2"}}),_vm._v(" "),_c('rect',{staticClass:"nav-assist__line nav-assist__line-1",attrs:{"x":"2","y":"4.5","width":"20","height":"2"}}),_vm._v(" "),_c('rect',{staticClass:"nav-assist__line nav-assist__line-3",attrs:{"x":"2","y":"17.5","width":"20","height":"2"}}),_vm._v(" "),_c('rect',{staticClass:"nav-assist__line nav-assist__line-4",attrs:{"x":"-1.3","y":"11","transform":"matrix(0.7071 -0.7071 0.7071 0.7071 -4.9706 12)","width":"26.6","height":"2"}}),_vm._v(" "),_c('rect',{staticClass:"nav-assist__line nav-assist__line-5",attrs:{"x":"11","y":"-1.3","transform":"matrix(0.7071 -0.7071 0.7071 0.7071 -4.9706 12)","width":"2","height":"26.6"}})])])}
var staticRenderFns = []



/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"label"},[_vm._v(_vm._s(_vm.item))])}
var staticRenderFns = []



/***/ }),
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tooltip",class:this.classObject},[_vm._t("default")],2)}
var staticRenderFns = []



/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"youtube-video"},[(this.loadVideo)?_c('iframe',{staticClass:"youtube-video__frame",attrs:{"src":this.videoUrl,"frameborder":"0","allowfullscreen":"allowfullscreen"}}):_vm._e()])}
var staticRenderFns = []



/***/ }),
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{staticClass:"label-filter"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.checkedState),expression:"checkedState"}],ref:"checkbox",attrs:{"disabled":_vm.disabled,"name":_vm.name,"type":"checkbox"},domProps:{"checked":_vm.checked,"value":_vm.value,"checked":Array.isArray(_vm.checkedState)?_vm._i(_vm.checkedState,_vm.value)>-1:(_vm.checkedState)},on:{"change":[function($event){var $$a=_vm.checkedState,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=_vm.value,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.checkedState=$$a.concat([$$v]))}else{$$i>-1&&(_vm.checkedState=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.checkedState=$$c}},_vm.onChange]}}),_vm._v(" "),_c('span',{staticClass:"label-filter__label"},[_vm._v(_vm._s(_vm.label))])])}
var staticRenderFns = []



/***/ }),
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-author"},[(_vm.image)?_c('c-image',_vm._b({staticClass:"article-author__image"},'c-image',_vm.image,false)):_vm._e(),_vm._v(" "),_c('div',{staticClass:"article-author__meta"},[_c('span',{staticClass:"article-author__name"},[_vm._v(_vm._s(_vm.name))]),_vm._v(" "),_c('span',{staticClass:"article-author__published-date"},[_vm._v(_vm._s(_vm.formatedDate))])])],1)}
var staticRenderFns = []



/***/ }),
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('cta-block',{staticClass:"article-ctas",attrs:{"ctas":_vm.ctas.ctas}})}
var staticRenderFns = []



/***/ }),
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"article-description-list"},[_c('dl',[_vm._l((_vm.descriptions),function(ref){
var term = ref.term;
var description = ref.description;
return [_c('dt',[_vm._v(_vm._s(term))]),_vm._v(" "),_c('dd',[_vm._v(_vm._s(description))])]})],2)])}
var staticRenderFns = []



/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('figure',{staticClass:"article-image"},[_c('div',{staticClass:"article-image__container"},[(_vm.image)?_c('c-image',_vm._b({staticClass:"article-image__image",attrs:{"resize-behaviour":"crop"}},'c-image',_vm.image,false)):_vm._e()],1),_vm._v(" "),(_vm.caption)?_c('figcaption',{staticClass:"article-image__caption"},[_vm._v(_vm._s(_vm.caption))]):_vm._e()])}
var staticRenderFns = []



/***/ }),
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-intro",domProps:{"innerHTML":_vm._s(_vm.intro)}})}
var staticRenderFns = []



/***/ }),
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"article-table",domProps:{"innerHTML":_vm._s(_vm.table)}})}
var staticRenderFns = []



/***/ }),
/* 217 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"article-video"},[(_vm.overlay)?_c('c-image',_vm._b({staticClass:"article-video__overlay",attrs:{"resize-behaviour":"crop"}},'c-image',_vm.overlay,false)):_vm._e(),_vm._v(" "),_c('div',{staticClass:"article-video__overlay--overlay"}),_vm._v(" "),_c('youtube-link',_vm._b({staticClass:"article-video__button"},'youtube-link',_vm.cta,false))],1)}
var staticRenderFns = []



/***/ }),
/* 218 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"article-text",domProps:{"innerHTML":_vm._s(_vm.text)}})}
var staticRenderFns = []



/***/ }),
/* 219 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"block-icon flexgrid"},[_c('div',{staticClass:"block-icon__visual flexgrid__cell flexgrid__cell--xxs-4 flexgrid__cell--xs-12"},[(_vm.icon)?_c('icon',{staticClass:"block-icon__icon",attrs:{"icon-name":_vm.icon}}):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"block-icon__content flexgrid__cell flexgrid__cell--xxs-8 flexgrid__cell--xs-12"},[_c('h3',{staticClass:"block-icon__headline"},[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),(_vm.description)?_c('p',{staticClass:"block-icon__description"},[_vm._v(_vm._s(_vm.description))]):_vm._e(),_vm._v(" "),(_vm.cta)?_c(_vm.cta.type,_vm._b({tag:"component",staticClass:"block-icon__link",class:_vm.getClassNames(_vm.cta.type)},'component',_vm.cta,false)):_vm._e()],1)])}
var staticRenderFns = []



/***/ }),
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"brand"},[_c('c-image',_vm._b({staticClass:"brand__image"},'c-image',_vm.image,false))],1)}
var staticRenderFns = []



/***/ }),
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"color",attrs:{"tabindex":"0"}},[_c('div',{staticClass:"color__spec color__spec--show"},[_c('icon',{staticClass:"color__icon",style:(_vm.styleIcon),attrs:{"icon-name":"show"}})],1),_vm._v(" "),_c('div',{staticClass:"color__spec color__spec--swatch",style:(_vm.styleBackground)})])}
var staticRenderFns = []



/***/ }),
/* 222 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"content-block disable-focus",attrs:{"tabIndex":"-1"}},[_c('div',{staticClass:"content-block-container__image"},[(_vm.image)?_c('c-image',_vm._b({staticClass:"content-block__image",attrs:{"keep-in-view":""}},'c-image',_vm.image,false)):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"content-block__content"},[_c('h3',{staticClass:"content-block__headline"},[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),_c('p',{staticClass:"content-block__description"},[_vm._v(_vm._s(_vm.description))]),_vm._v(" "),(_vm.cta)?_c(_vm.cta.type,_vm._b({tag:"component",class:_vm.getClassNames(_vm.cta.type)},'component',_vm.cta,false)):_vm._e()],1)])}
var staticRenderFns = []



/***/ }),
/* 223 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"toggle",on:{"click":_vm.toggle}},[_c('icon',{staticClass:"toggle__icon",attrs:{"icon-name":_vm.toggleIcon}}),_vm._v(" "),_c('span',{staticClass:"toggle__icon-text"},[_vm._v(_vm._s(_vm.toggleText))])],1)}
var staticRenderFns = []



/***/ }),
/* 224 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.ctas.length)?_c('div',{staticClass:"cta-block",class:_vm.classMod},_vm._l((_vm.ctas),function(cta,index){return _c(cta.type,_vm._b({key:index,tag:"component",class:_vm.classObject(cta.type),attrs:{"label":cta.label,"mod":_vm.modifier(cta.type)}},'component',cta,false))}),1):_vm._e()}
var staticRenderFns = []



/***/ }),
/* 225 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{staticClass:"list"},[_vm._l((_vm.listItems.items),function(item,index){return [(!item.item)?[_c(_vm.listItems.type,{key:index,tag:"component",attrs:{"item":item}})]:(_vm.listItems.type)?[_c(_vm.listItems.type,_vm._b({key:index,tag:"component"},'component',item,false))]:(item.type)?[_c(item.type,_vm._b({key:index,tag:"component"},'component',item,false))]:_vm._e()]})],2)}
var staticRenderFns = []



/***/ }),
/* 226 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"header-block"},[_vm._t("default",[(_vm.title)?_c('h2',{staticClass:"header-block__title"},[_vm._v(_vm._s(_vm.title))]):_vm._e(),_vm._v(" "),(_vm.subtitle)?_c('p',{staticClass:"header-block__subtitle"},[_vm._v(_vm._s(_vm.subtitle))]):_vm._e()])],2)}
var staticRenderFns = []



/***/ }),
/* 227 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"footer-block"},[(_vm.ctas)?_c('cta-block',{attrs:{"ctas":_vm.ctas.ctas,"styleContentButton":"button","mod":"footer","block":"overview"}}):_vm._e()],1)}
var staticRenderFns = []



/***/ }),
/* 228 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"list-unordered-limit"},[_c('main',[_c('ul',[_vm._l((_vm.listItems),function(item,index){return [_c('li-item',{directives:[{name:"show",rawName:"v-show",value:(_vm.showLimit() === -1 || index < _vm.showLimit() || _vm.showAll),expression:"showLimit() === -1 || index < showLimit() || showAll"}],key:index,attrs:{"item":item}})]})],2)]),_vm._v(" "),_c('footer',{directives:[{name:"show",rawName:"v-show",value:(_vm.showLimit() !== -1 && !_vm.showAll),expression:"showLimit() !== -1 && !showAll"}]},[_c('button',{staticClass:"button--secondary",on:{"click":_vm.showHidden}},[_vm._v(_vm._s(_vm.showButtonLabel()))])])])}
var staticRenderFns = []



/***/ }),
/* 229 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form',{staticClass:"wizard-step-download-list",attrs:{"target":"_blank","method":"get","action":_vm.file},on:{"submit":_vm.handleSubmit}},[_c('header-block',{staticClass:"header-block--wizard",attrs:{"title":_vm.title,"subtitle":_vm.subtitle}}),_vm._v(" "),(_vm.description)?_c('p',{staticClass:"wizard-step-download-list__description"},[_vm._v(_vm._s(_vm.description))]):_vm._e(),_vm._v(" "),(_vm.items)?_c('ul',{staticClass:"wizard-step-download-list__items flexgrid flexgrid--justify-space-between flexgrid--mobile-xl-row"},_vm._l((_vm.items),function(item,index){return _c('li',{staticClass:"wizard-step-download-list__item flexgrid__cell--sm-4"},[_c('card-download',_vm._b({key:"index",attrs:{"index":index,"selected":_vm.selectedItem === index,"name":_vm.name,"setSelectedItem":_vm.setSelectedItem}},'card-download',item,false))],1)}),0):_vm._e(),_vm._v(" "),(_vm.submitButton)?_c('button',{staticClass:"wizard-step-download-list__button button"},[_vm._v("\n        "+_vm._s(_vm.submitButton.label)+"\n    ")]):_vm._e()],1)}
var staticRenderFns = []



/***/ }),
/* 230 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"organism wizard-step-confirmation"},[_c('section',{staticClass:"container wizard-step-confirmation__container"},[_c('header-block',{attrs:{"title":_vm.title,"subtitle":_vm.subtitle}}),_vm._v(" "),_c('div',{staticClass:"flexgrid"},[_c('div',{staticClass:"flexgrid__cell--xs-6 wizard-step-confirmation__grid-cell wizard-step-confirmation__image"},[_c('div',{staticClass:"wizard-step-confirmation__image-wrapper"},[(_vm.image)?_c('c-image',_vm._b({},'c-image',_vm.image,false)):_vm._e()],1)]),_vm._v(" "),_c('div',{staticClass:"flexgrid__cell--xs-6 wizard-step-confirmation__grid-cell wizard-step-confirmation__content"},[_c('h3',[_vm._v(_vm._s(_vm.contentTitle))]),_vm._v(" "),_c('div',{staticClass:"content-manageble wizard-step-confirmation__body",domProps:{"innerHTML":_vm._s(_vm.content)}}),_vm._v(" "),(_vm.ctas)?_c('cta-block',{attrs:{"mod-content-link":"wizard-step-confirmation","ctas":_vm.ctas.ctas}}):_vm._e()],1)])],1)])}
var staticRenderFns = []



/***/ }),
/* 231 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"business-card",attrs:{"href":_vm.contentLink.url,"rel":"noopener","target":"_blank","tabindex":"0"},on:{"click":function($event){_vm.clickEvent ? _vm.$emitPublic(_vm.clickEventType, _vm.clickEventData) : ''}}},[_c('div',{staticClass:"business-card__header"},[_c('div',{staticClass:"business-card__image-wrapper"},[(_vm.image)?_c('c-image',_vm._b({staticClass:"business-card__image",attrs:{"resizeBehavior":"pad"}},'c-image',_vm.image,false)):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"business-card__description"},[_c('h4',{staticClass:"business-card__title"},[_vm._v("\n                "+_vm._s(_vm.title)+"\n            ")]),_vm._v(" "),_vm._l((_vm.properties),function(property){return (_vm.properties)?_c('p',{staticClass:"business-card__property"},[_vm._v("\n                "+_vm._s(property.value)+" "+_vm._s(property.label)+"\n            ")]):_vm._e()})],2)]),_vm._v(" "),_c('div',{staticClass:"business-card__footer"},[_c('span',{staticClass:"link faux-content-link business-card__link"},[_c('span',{staticClass:"link__underline"},[_vm._v("\n            "+_vm._s(_vm.contentLink.label)+"\n        ")])])])])}
var staticRenderFns = []



/***/ }),
/* 232 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"card-article",on:{"click":_vm.triggerEventClick}},[(_vm.url)?_c('anchor-overlay',{attrs:{"url":_vm.url,"title":_vm.title}}):_vm._e(),_vm._v(" "),(_vm.image)?_c('div',{staticClass:"card-article__image-container"},[_c('c-image',_vm._b({staticClass:"card-article__image"},'c-image',_vm.image,false))],1):_vm._e(),_vm._v(" "),_c('h3',{staticClass:"card-article__heading"},[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),(_vm.description)?_c('p',{staticClass:"card-article__description"},[_vm._v("\n        "+_vm._s(_vm.description)+"\n    ")]):_vm._e(),_vm._v(" "),_c('list-unordered',{staticClass:"card-article__labels-list",attrs:{"listItems":_vm.listItems}})],1)}
var staticRenderFns = []



/***/ }),
/* 233 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"card-article",on:{"click":_vm.triggerEventClick}},[(_vm.url)?_c('anchor-overlay',{attrs:{"url":_vm.url,"title":_vm.title}}):_vm._e(),_vm._v(" "),(_vm.image)?_c('div',{staticClass:"card-article__image-container"},[_c('c-image',_vm._b({staticClass:"card-article__image"},'c-image',_vm.image,false))],1):_vm._e(),_vm._v(" "),_c('h3',{staticClass:"card-article__heading"},[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),(_vm.description)?_c('p',{staticClass:"card-article__description"},[_vm._v("\n        "+_vm._s(_vm.description)+"\n    ")]):_vm._e(),_vm._v(" "),_c('list-unordered',{staticClass:"card-article__labels-list",attrs:{"listItems":_vm.listItems}})],1)}
var staticRenderFns = []



/***/ }),
/* 234 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card-download"},[_c('input',{staticClass:"card-download__radio",attrs:{"type":"radio","id":_vm.id,"name":_vm.name},domProps:{"checked":_vm.selected,"value":_vm.file},on:{"change":_vm.handleSelect}}),_vm._v(" "),_c('label',{staticClass:"card-download__label",attrs:{"for":_vm.id}},[_c('div',{staticClass:"card-download__image-wrapper"},[(_vm.image)?_c('c-image',_vm._b({},'c-image',_vm.image,false)):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"card-download__content"},[_c('h4',{staticClass:"card-download__title"},[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),(_vm.description)?_c('p',{staticClass:"card-download__desc"},[_vm._v(_vm._s(_vm.description))]):_vm._e()])])])}
var staticRenderFns = []



/***/ }),
/* 235 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"card-product"},[_c('anchor-overlay',{attrs:{"url":_vm.url,"title":_vm.title}}),_vm._v(" "),_c('div',{staticClass:"card-product__image-container"},[(_vm.image && !_vm.imageError)?_c('c-image',_vm._b({staticClass:"card-product__image",on:{"error":function($event){_vm.imageError = true}}},'c-image',_vm.image,false)):_vm._e(),_vm._v(" "),(!_vm.image || _vm.imageError)?_c('div',{staticClass:"img--contain card-product__image gray-background"},[_vm._v(_vm._s(_vm.title))]):_vm._e()],1),_vm._v(" "),_c('h3',{staticClass:"card-product__heading"},[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),_c('list-unordered',{staticClass:"card-product__labels-list",attrs:{"listItems":_vm.listItems}})],1)}
var staticRenderFns = []



/***/ }),
/* 236 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.items && _vm.items.length > 0)?_c('ul',{directives:[{name:"show",rawName:"v-show",value:(_vm.isCompact || !_vm.viewportUtil.isResizing),expression:"isCompact || !viewportUtil.isResizing"}],staticClass:"main-nav__flyout",on:{"keydown":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"])){ return null; }return _vm.selectNextLink($event)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"tab",9,$event.key,"Tab")){ return null; }if($event.ctrlKey||$event.shiftKey||$event.altKey||$event.metaKey){ return null; }return _vm.selectNextLink($event)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"up",38,$event.key,["Up","ArrowUp"])){ return null; }return _vm.selectPrevLink($event)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"tab",9,$event.key,"Tab")){ return null; }if(!$event.shiftKey){ return null; }if($event.ctrlKey||$event.altKey||$event.metaKey){ return null; }return _vm.selectPrevLink($event)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"right",39,$event.key,["Right","ArrowRight"])){ return null; }if('button' in $event && $event.button !== 2){ return null; }return _vm.selectNextSection($event, true)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"left",37,$event.key,["Left","ArrowLeft"])){ return null; }if('button' in $event && $event.button !== 0){ return null; }return _vm.selectPrevSection($event, true)}],"mouseenter":function($event){$event.stopPropagation();return _vm.open($event)}}},_vm._l((_vm.items),function(item,key){return (item.items && item.items.length)?_c('flyout-section',_vm._b({key:key,ref:"items",refInFor:true,attrs:{"is-compact":_vm.isCompact,"itemId":("flyout_title_" + _vm.uniqId + "_" + key)},on:{"content-link-click":function($event){return _vm.$emit('content-link-click')}}},'flyout-section',item,false)):_vm._e()}),1):_vm._e()}
var staticRenderFns = []



/***/ }),
/* 237 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.items.length)?_c('div',{staticClass:"footer-navigation-category__column"},[_c('h3',{staticClass:"footer-navigation-category__title"},[_vm._v(_vm._s(_vm.label))]),_vm._v(" "),(_vm.items && _vm.items.length)?_c('ul',{staticClass:"footer-navigation-category__list"},_vm._l((_vm.items),function(link){return _c('li',{staticClass:"footer-navigation-category__item"},[_c('content-link',_vm._b({staticClass:"footer-navigation-category__link link link--reversed"},'content-link',link,false))],1)}),0):_vm._e()]):_vm._e()}
var staticRenderFns = []



/***/ }),
/* 238 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('h1',{staticClass:"hero__title header-block__title--hero"},[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),(_vm.subtitle)?_c('h2',{staticClass:"hero__subtitle header-block__subtitle--hero"},[_vm._v(_vm._s(_vm.subtitle))]):_vm._e()])}
var staticRenderFns = []



/***/ }),
/* 239 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"icon-button",class:_vm.buttonClass,attrs:{"aria-label":_vm.buttonAriaLabel,"aria-disabled":_vm.disabled},on:{"click":_vm.clickHandler}},[_c('icon',{staticClass:"icon-button__icon",attrs:{"iconName":_vm.iconName}}),_vm._v(" "),(!!this.$slots.default)?_c('span',{staticClass:"icon-button__label"},[_vm._t("default")],2):_vm._e()],1)}
var staticRenderFns = []



/***/ }),
/* 240 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.display),expression:"display"}],staticClass:"notification in-page-notification"},[_c('icon-button',{attrs:{"button-class":"icon-button in-page-notification__button button--close","button-aria-label":"close","icon-name":"close"},on:{"click":_vm.close}}),_vm._v(" "),_c('p',{staticClass:"notification__content notification__content--centered"},[_vm._v("\n        "+_vm._s(_vm.message)+"\n    ")])],1)}
var staticRenderFns = []



/***/ }),
/* 241 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{key:"large-menu",staticClass:"main-nav",class:_vm.classList,attrs:{"aria-label":"site"}},[_c('ul',{staticClass:"main-nav__list",class:{'main-nav__list-visible': _vm.mainNavOpen && _vm.showCompactMenu},attrs:{"role":"menu"}},_vm._l((_vm.navigation),function(mainNavigationItem,index){return (_vm.navigation)?_c('main-navigation-item',_vm._b({key:index,ref:"navItem",refInFor:true,attrs:{"is-compact":_vm.showCompactMenu,"main-nav-open":_vm.mainNavOpen,"active":false,"itemId":'nav-' + index},on:{"nav-assist-click":_vm.handleNavAssistClick}},'main-navigation-item',mainNavigationItem,false)):_vm._e()}),1)])}
var staticRenderFns = []



/***/ }),
/* 242 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal",on:{"click":function($event){$event.preventDefault();$event.stopPropagation();return _vm.closeModal($event)}}},[_c('div',{ref:"overlay",staticClass:"modal__overlay"}),_vm._v(" "),_c('icon-button',{ref:"close",staticClass:"modal__close",attrs:{"icon-name":"close"}}),_vm._v(" "),_c('div',{ref:"modal",staticClass:"modal__content",on:{"click":function($event){$event.stopPropagation();}}},[_c('div',{staticClass:"modal__header"},[_vm._t("header")],2),_vm._v(" "),_vm._t("default")],2)],1)}
var staticRenderFns = []



/***/ }),
/* 243 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"modal-button__container"},[_c('button',{staticClass:"button",attrs:{"type":"button"},on:{"click":_vm.triggerClick}},[_vm._v("\n        "+_vm._s(_vm.label)+"\n    ")]),_vm._v(" "),_c('portal',{attrs:{"to":"modals"}},[(_vm.modalVisible)?_c('modal',{staticClass:"modal--wizard",on:{"close":_vm.toggleModalVisible}},[_c(_vm.modal.type,_vm._b({tag:"component"},'component',_vm.modal,false))],1):_vm._e()],1)],1)}
var staticRenderFns = []



/***/ }),
/* 244 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"modal-wizard"},[(_vm.steps)?_vm._l((_vm.steps),function(step,index){return _c('div',{staticClass:"modal-wizard__step"},[(index === _vm.activeStep)?_c(step.type,_vm._b({tag:"component",on:{"step-complete":_vm.showNextStep}},'component',step,false)):_vm._e()],1)}):_vm._e()],2)}
var staticRenderFns = []



/***/ }),
/* 245 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"product"},[_c('div',{staticClass:"product__icon-container"},[_c('icon',{staticClass:"product__icon",attrs:{"icon-name":_vm.icon}})],1),_vm._v(" "),_c('div',{staticClass:"product__information"},[_c('p',{staticClass:"product__name"},[_vm._v("\n            "+_vm._s(_vm.name)+"\n        ")])])])}
var staticRenderFns = []



/***/ }),
/* 246 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form',{ref:"search-form",staticClass:"search-bar",attrs:{"action":_vm.action,"method":"get"},on:{"submit":function($event){$event.preventDefault();return _vm.handleSubmit($event)}}},[_c('div',{attrs:{"role":"search"}},[_c('div',{staticClass:"search-bar__inputholder"},[_c('label',{staticClass:"search-bar__label",attrs:{"for":"search-bar__input"}},[_vm._v(_vm._s(_vm.label))]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.searchValue),expression:"searchValue"}],ref:"search-bar__input",staticClass:"search-bar__input",attrs:{"placeholder":_vm.placeholder,"autocapitalize":"off","autocomplete":"off","autocorrect":"off","id":"search-bar__input","name":"search"},domProps:{"value":(_vm.searchValue)},on:{"blur":_vm.onBlur,"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }return _vm.close($event)},"input":function($event){if($event.target.composing){ return; }_vm.searchValue=$event.target.value}}})]),_vm._v(" "),_c('icon-button',{attrs:{"button-class":"icon-button icon-button--large search-bar__button","button-aria-label":"Search","icon-name":"search"},on:{"click":_vm.handleSubmit}}),_vm._v(" "),_c('icon-button',{attrs:{"button-class":"icon-button icon-button--large search-bar__close-button","button-aria-label":"Close search","icon-name":"close"},on:{"click":_vm.close}})],1)])}
var staticRenderFns = []



/***/ }),
/* 247 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form',{staticClass:"search-bar-page",attrs:{"accept-charset":"utf-8","action":"/search","method":"get"},on:{"submit":function($event){$event.preventDefault();return _vm.handleSubmit($event)}}},[_c('label',[_c('span',{staticClass:"search-bar-page__label"},[_vm._v(_vm._s(_vm.label))]),_vm._v(" "),_c('button',{staticClass:"search-bar-page__button",attrs:{"disabled":_vm.isLoading}},[_c('icon',{attrs:{"icon-name":'search'}})],1),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.q),expression:"q"}],staticClass:"search-bar-page__input",attrs:{"disabled":_vm.isLoading,"name":_vm.searchFieldName,"placeholder":_vm.placeholder,"autocapitalize":"off","autocomplete":"off","autocorrect":"off","maxlength":"512","spellcheck":"false","type":"text"},domProps:{"value":(_vm.q)},on:{"input":function($event){if($event.target.composing){ return; }_vm.q=$event.target.value}}})])])}
var staticRenderFns = []



/***/ }),
/* 248 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"search-result",class:{ 'search-result--focus': _vm.focused }},[_c('h3',{staticClass:"search-result__title"},[_c('a',{staticClass:"search-result__link",attrs:{"href":_vm.link},domProps:{"innerHTML":_vm._s(_vm.computedTitle)},on:{"focus":function($event){_vm.focused = !_vm.focused},"blur":function($event){_vm.focused = !_vm.focused}}})]),_vm._v(" "),_c('p',{staticClass:"search-result__snippet",domProps:{"innerHTML":_vm._s(_vm.computedSnippet)}}),_vm._v(" "),_c('p',{staticClass:"search-result__url"},[_vm._v("\n        "+_vm._s(_vm.formattedUrl)+"\n    ")])])}
var staticRenderFns = []



/***/ }),
/* 249 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"social-nav footer__social-nav"},[_c('ul',{staticClass:"social-nav__list",attrs:{"aria-label":"follow Ultimaker"}},[_c('li',{staticClass:"social-nav__item footer__social-item"},[_c('a',{staticClass:"social-nav__link icon-button icon-button--small",attrs:{"href":"https://nl.linkedin.com/company/ultimaker","aria-label":"LinkedIn"}},[_c('icon',{staticClass:"social-nav__icon",attrs:{"icon-name":"linkedin"}})],1)]),_vm._v(" "),_c('li',{staticClass:"social-nav__item footer__social-item"},[_c('a',{staticClass:"social-nav__link icon-button icon-button--small",attrs:{"href":"https://twitter.com/Ultimaker","aria-label":"Twitter"}},[_c('icon',{staticClass:"social-nav__icon",attrs:{"icon-name":"twitter"}})],1)]),_vm._v(" "),_c('li',{staticClass:"social-nav__item footer__social-item"},[_c('a',{staticClass:"social-nav__link icon-button icon-button--small",attrs:{"href":"https://www.youtube.com/user/Ultimaker3D","aria-label":"YouTube"}},[_c('icon',{staticClass:"social-nav__icon",attrs:{"icon-name":"youtube"}})],1)]),_vm._v(" "),_c('li',{staticClass:"social-nav__item footer__social-item"},[_c('a',{staticClass:"social-nav__link icon-button icon-button--small",attrs:{"href":"https://www.facebook.com/Ultimaker","aria-label":"Facebook"}},[_c('icon',{staticClass:"social-nav__icon",attrs:{"icon-name":"facebook"}})],1)]),_vm._v(" "),_c('li',{staticClass:"social-nav__item footer__social-item"},[_c('a',{staticClass:"social-nav__link icon-button icon-button--small",attrs:{"href":"http://instagram.com/ultimaker","aria-label":"Instagram"}},[_c('icon',{staticClass:"social-nav__icon",attrs:{"icon-name":"instagram"}})],1)])])])}
var staticRenderFns = []



/***/ }),
/* 250 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"social-sharing"},[_vm._l((_vm.items),function(item){return [_c('a',{staticClass:"social-sharing__link",attrs:{"href":_vm.url(item),"target":"_blank"}},[_c('span',{staticClass:"social-sharing__text"},[_vm._v(_vm._s(item.label))]),_vm._v(" "),_c('icon',{staticClass:"social-sharing__icon",attrs:{"icon-name":item.iconName}})],1)]})],2)}
var staticRenderFns = []



/***/ }),
/* 251 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('base-link',{staticClass:"subnavigation__link link link--reversed",attrs:{"url":_vm.url}},[_c('div',{staticClass:"subnavigation__image-container"},[(_vm.image)?_c('c-image',_vm._b({attrs:{"keep-in-view":""}},'c-image',_vm.image,false)):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"subnavigation__label",attrs:{"aria-label":_vm.label}},[_c('span',{staticClass:"link__underline"},[_vm._v("\n            "+_vm._s(_vm.label)+"\n        ")])])])}
var staticRenderFns = []



/***/ }),
/* 252 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"sys-nav",attrs:{"aria-label":"quick access"}},[_c('ul',{staticClass:"sys-nav__list",attrs:{"role":"presentation"}},[_c('li',{staticClass:"sys-nav__item"},[(_vm.orderNowLink)?_c('base-link',{staticClass:"sys-nav__link",attrs:{"url":_vm.orderNowLink}},[_c('icon',{staticClass:"sys-nav__icon",attrs:{"icon-name":_vm.orderNowIcon}}),_vm._v(" "),_c('span',{staticClass:"sys-nav__label sys-nav__label--hidden-sm"},[_vm._v(_vm._s(_vm.orderNowLabel))])],1):_vm._e()],1),_vm._v(" "),_c('li',{staticClass:"sys-nav__item"},[_c('a',{staticClass:"sys-nav__link",attrs:{"role":"button","tabindex":"0"},on:{"click":_vm.openSearch,"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.openSearch($event)}}},[_c('icon',{staticClass:"sys-nav__icon",attrs:{"icon-name":_vm.searchIcon}}),_vm._v(" "),_c('span',{staticClass:"sys-nav__label sys-nav__label--hidden-sm"},[_vm._v(_vm._s(_vm.searchLabel))])],1)])])])}
var staticRenderFns = []



/***/ }),
/* 253 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.active),expression:"active"}],staticClass:"tabs__content",attrs:{"id":_vm.id,"role":"tabpanel","aria-hidden":!_vm.active,"aria-label":_vm.label}},[[_c(_vm.content.type,_vm._b({tag:"component"},'component',_vm.content,false))]],2)}
var staticRenderFns = []



/***/ }),
/* 254 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"flexgrid flexgrid--mobile-xl-row"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.active),expression:"active"}],staticClass:"tab-table__content flexgrid__cell--sm-8",attrs:{"id":_vm.id,"role":"tabpanel","aria-hidden":!_vm.active,"aria-label":_vm.label}},_vm._l((_vm.rows),function(row){return _c(row.type,_vm._b({tag:"component"},'component',row,false))}),1)])}
var staticRenderFns = []



/***/ }),
/* 255 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"tab-table-row"},[(_vm.tooltip)?[_c('div',{staticClass:"tab-table-row__label--tooltip"},[_c('tooltip-toggle',_vm._b({attrs:{"label":_vm.label}},'tooltip-toggle',_vm.tooltip,false))],1)]:[_c('div',{staticClass:"tab-table-row__label"},[_c('p',{staticClass:"tab-table-row__label-text"},[_vm._v(_vm._s(_vm.label))])])],_vm._v(" "),_c('div',{staticClass:"tab-table-row__content"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.value),expression:"value"}],staticClass:"content-manageble content-manageble--copy-small tab-table-row__value",domProps:{"innerHTML":_vm._s(_vm.value)}}),_vm._v(" "),(_vm.linkList)?_c('ul',{staticClass:"tab-table-row__linklist"},[_vm._l((_vm.linkList),function(link){return [_c('li',{staticClass:"tab-table-row__linklist-item"},[_c('content-link',_vm._b({staticClass:"link tab-table-row__linklist-link",attrs:{"label":link.label}},'content-link',link,false))],1)]})],2):_vm._e()])],2)}
var staticRenderFns = []



/***/ }),
/* 256 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.tabs)?_c('div',{staticClass:"tabs"},[_c('div',{staticClass:"tabs__nav"},[_c('ul',{ref:"tabList",staticClass:"tabs__list",attrs:{"role":"tablist"}},_vm._l((_vm.tabs),function(tab,index){return _c('li',{ref:"tab",refInFor:true,staticClass:"tabs__list_item",attrs:{"role":"presentation"}},[_c('a',{staticClass:"tabs__list_link",class:_vm.getLinkClassList(index),attrs:{"href":"#","role":"tab","aria-controls":tab.id,"aria-selected":_vm.activeTab === index},on:{"click":function($event){$event.preventDefault();_vm.activeTab = index}}},[(_vm.sequenced)?_c('span',[_vm._v(_vm._s(((index+1) + ". ")))]):_vm._e(),_vm._v("\n                    "+_vm._s(tab.label)+"\n                ")])])}),0)]),_vm._v(" "),_vm._l((_vm.tabs),function(tab,index){return _c('div',{staticClass:"tabs__contents"},[[_c(tab.type,_vm._b({key:index,tag:"component",attrs:{"id":tab.label+index,"active":_vm.activeTab === index}},'component',tab,false))]],2)})],2):_vm._e()}
var staticRenderFns = []



/***/ }),
/* 257 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tooltip-toggle"},[_c('tooltip',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],ref:"tooltip",class:_vm.tooltipClass,attrs:{"block":"tooltip-toggle","id":_vm.uniqId + '_tooltip'}},[_vm._v("\n        "+_vm._s(_vm.description)+"\n    ")]),_vm._v(" "),_c('icon-button',{ref:"button",attrs:{"aria-expanded":_vm.visible.toString(),"aria-describedby":_vm.uniqId + '_tooltip',"icon-name":_vm.icon,"button-class":"icon-button--transparent icon-button--reversed icon-button--small-icon"},nativeOn:{"click":function($event){$event.preventDefault();return _vm.toggleTooltip($event)},"keyup":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.toggleTooltip($event)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"space",32,$event.key,[" ","Spacebar"])){ return null; }return _vm.toggleTooltip($event)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }return _vm.hideTooltip($event)}],"blur":function($event){$event.preventDefault();return _vm.hideTooltip($event)}}},[_vm._v("\n        "+_vm._s(_vm.label)+"\n    ")])],1)}
var staticRenderFns = []



/***/ }),
/* 258 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"flyout__section",class:_vm.sectionClass},[(_vm.label)?_c('strong',{staticClass:"flyout__title",attrs:{"id":_vm.itemId}},[_vm._v(_vm._s(_vm.label))]):_vm._e(),_vm._v(" "),_c('ul',{staticClass:"flyout__list",attrs:{"aria-labelledby":_vm.itemId,"aria-haspopup":_vm.items.length > _vm.maxVisible,"aria-expanded":!_vm.isCompact || _vm.isExpanded}},[_vm._l((_vm.items),function(item,index){return (index < _vm.maxVisible)?_c('li',{staticClass:"flyout__list-item"},[_c('content-link',{ref:"firstFocusableLinks",refInFor:true,staticClass:"flyout__link link",attrs:{"url":item.url,"label":item.label},nativeOn:{"click":function($event){return _vm.$emit('content-link-click')}}})],1):_vm._e()}),_vm._v(" "),_vm._l((_vm.items),function(item,index){return (index >= _vm.maxVisible)?_c('li',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isCompact || _vm.isExpanded),expression:"!isCompact || isExpanded"}],staticClass:"flyout__list-item"},[_c('content-link',{ref:"focusable",refInFor:true,staticClass:"flyout__link link",attrs:{"url":item.url,"label":item.label},nativeOn:{"click":function($event){return _vm.$emit('content-link-click')}}})],1):_vm._e()}),_vm._v(" "),(_vm.flyoutToggleIsVisible)?_c('li',{staticClass:"flyout__list-item"},[_c('content-toggle',{staticClass:"flyout__toggle",attrs:{"aria-hidden":"true"},on:{"content-toggle":_vm.toggleExpanded}})],1):_vm._e()],2),_vm._v(" "),(_vm.bottomItem)?[_c('content-link',{ref:"bottomLink",staticClass:"link flyout__link--cta-mini",attrs:{"url":_vm.bottomItem.url,"label":_vm.bottomItem.label},nativeOn:{"click":function($event){return _vm.$emit('content-link-click')}}})]:_vm._e()],2)}
var staticRenderFns = []



/***/ }),
/* 259 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"list-section"},[(_vm.title)?[_c('header',{staticClass:"list-section__header"},[_c('h3',{staticClass:"list-section__title"},[_vm._v(_vm._s(_vm.title)+"\n                "),_c('span',{staticClass:"list-section__count"},[_vm._v("("+_vm._s(_vm.cards.length)+")")]),_vm._v(" "),(_vm.tooltip)?[_c('transition',{attrs:{"name":"tooltip"}},[_c('tooltip',_vm._b({directives:[{name:"show",rawName:"v-show",value:(_vm.visibleTooltip),expression:"visibleTooltip"}],staticClass:"section-tooltip",attrs:{"block":"list-section","id":("tooltip_" + _vm.uniqId)}},'tooltip',_vm.tooltip,false),[_vm._v("\n                            "+_vm._s(_vm.tooltip.description)+"\n                        ")])],1)]:_vm._e()],2),_vm._v(" "),(_vm.tooltip)?[(_vm.tooltip)?_c('action-button',{staticClass:"link list-section__info-link",attrs:{"icon":_vm.tooltip.icon,"mod":"reversed","role":"button","aria-describedby":("tooltip_" + _vm.uniqId)},nativeOn:{"click":function($event){$event.preventDefault();return _vm.toggleTooltip($event)},"blur":function($event){$event.preventDefault();return _vm.hideTooltip($event)}}},[_vm._v("\n                    "+_vm._s(_vm.tooltip.label)+"\n                ")]):_vm._e()]:_vm._e()],2)]:_vm._e(),_vm._v(" "),_vm._l((_vm.filterCategories),function(filterCategory){return [_c('filter-category',_vm._b({attrs:{"activeFilters":_vm.activeFilters,"eventChange":_vm.eventFilterCategoryChange},on:_vm._d({},[_vm.eventFilterCategoryChange,_vm.handleFilterCategoryChange])},'filter-category',filterCategory,false))]}),_vm._v(" "),_c('ul',{staticClass:"list-section__container"},_vm._l((_vm.chunks),function(chunk,index){return _c('li',{directives:[{name:"show",rawName:"v-show",value:(index < _vm.visibleChunks),expression:"index < visibleChunks"}],key:index,staticClass:"list-section__row",class:chunk.length % 2 === 0 && 'list-section__row--even'},_vm._l((chunk),function(card,i){return (chunk && chunk.length)?_c(card.type,_vm._b({key:i,tag:"component",staticClass:"list-section__item"},'component',card,false)):_vm._e()}),1)}),0),_vm._v(" "),_c('footer',{staticClass:"list-section__footer"},[_c('button',{directives:[{name:"show",rawName:"v-show",value:(_vm.showButton()),expression:"showButton()"}],staticClass:"button--secondary list-section__footer__button",on:{"click":function($event){_vm.limit && _vm.limit.expandAmount ? _vm.showChunk() : _vm.showAll()}}},[_vm._v("\n            "+_vm._s(_vm.showLabel())+"\n        ")])])],2)}
var staticRenderFns = []



/***/ }),
/* 260 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"main-nav__item",class:{ 'main-nav__item--active': _vm.active },attrs:{"role":"menuitem"},on:{"mouseleave":_vm.delayHideFlyout,"mouseenter":_vm.openFlyout}},[_c('div',{on:{"keydown":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"])){ return null; }$event.preventDefault();return _vm.selectFlyoutFirstLink($event)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"tab",9,$event.key,"Tab")){ return null; }if(!$event.shiftKey){ return null; }if($event.ctrlKey||$event.altKey||$event.metaKey){ return null; }return _vm.closeMobileNav($event)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }$event.preventDefault();return _vm.closeMobileNav($event)}]}},[_c('base-link',{ref:"parent",staticClass:"main-nav__link",attrs:{"url":_vm.url,"aria-haspopup":"true","aria-controls":_vm.itemId,"aria-current":_vm.isActive,"label":_vm.label,"aria-expanded":!_vm.isCompact && _vm.flyoutIsOpen},on:{"focus":_vm.openFlyout},nativeOn:{"click":function($event){return _vm.closeMobileNav($event)}}})],1),_vm._v(" "),_c('icon-button',{directives:[{name:"show",rawName:"v-show",value:(_vm.toggleIsVisible),expression:"toggleIsVisible"}],staticClass:"icon-button--small main-nav__toggle disable-focus",attrs:{"icon-name":_vm.angleDirection,"tabindex":"-1"},on:{"click":_vm.toggleFlyout}}),_vm._v(" "),(_vm.categories)?_c('flyout',{ref:"flyout",staticClass:"flyout--large",class:{ 'flyout--is-open': _vm.flyoutIsOpen },attrs:{"id":_vm.itemId,"items":_vm.categories,"is-compact":_vm.isCompact},on:{"content-link-click":_vm.closeMobileNav,"open":_vm.openFlyout,"close":_vm.closeFlyout,"main":_vm.selectParent},nativeOn:{"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }return _vm.selectParent($event)}}}):_vm._e()],1)}
var staticRenderFns = []



/***/ }),
/* 261 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"filter-category"},[_c('h4',{staticClass:"filter-category__title"},[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),_c('form',[_c('input',{staticClass:"filter-category__reset",class:_vm.checkResetFiltersState,attrs:{"type":"reset"},domProps:{"value":_vm.showAllLabel},on:{"click":_vm.resetFilters}}),_vm._v(" "),_c('ul',{staticClass:"filter-category__list"},_vm._l((_vm.labels),function(label,key){return _c('li',{key:key,staticClass:"filter-category__list-item"},[_c('label-filter',{attrs:{"disabled":_vm.isFilterDisabled(label),"eventChange":_vm.eventLabelFilterChange,"label":label,"name":_vm.showAllLabel,"value":label},on:_vm._d({},[_vm.eventLabelFilterChange,_vm.handleLabelFilterChange])})],1)}),0)])])}
var staticRenderFns = []



/***/ }),
/* 262 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"organism article"},[_c('div',{staticClass:"container"},[_vm._l((_vm.molecules),function(articleMolecule){return _c(articleMolecule.type,_vm._b({tag:"component"},'component',articleMolecule,false))}),_vm._v(" "),_c('SocialSharing')],2)])}
var staticRenderFns = []



/***/ }),
/* 263 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"article-header container"},[_c('article-author',_vm._b({attrs:{"publishedDate":_vm.publishedDate}},'article-author',_vm.author,false)),_vm._v(" "),_c('list-unordered',{staticClass:"article-header__list",attrs:{"listItems":_vm.listItems}})],1)}
var staticRenderFns = []



/***/ }),
/* 264 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"organism brands2"},[_c('article',{staticClass:"container"},[_c('header-block',{attrs:{"title":_vm.title,"subtitle":_vm.subtitle}}),_vm._v(" "),_c('list-unordered-limit',{attrs:{"limit":_vm.limit,"listItems":_vm.items}}),_vm._v(" "),_c('footer-block',{attrs:{"ctas":_vm.ctas}})],1)])}
var staticRenderFns = []



/***/ }),
/* 265 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"organism colors"},[_c('div',{staticClass:"container"},[_c('header-block',{attrs:{"title":_vm.title,"subtitle":_vm.subtitle}}),_vm._v(" "),_c('div',{staticClass:"flexgrid flexgrid--gutter flexgrid--column-reversed flexgrid--mobile-xl-row"},[_c('div',{staticClass:"flexgrid__cell--xs-6 flexgrid__cell--sm-4"},[_c('div',{staticClass:"colors__swatches"},[_c('ul',{staticClass:"colors__list"},_vm._l((_vm.colorList),function(color,index){return _c('li',{staticClass:"colors__list-item",on:{"click":function($event){return _vm.setActiveColor(index)},"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"space",32,$event.key,[" ","Spacebar"])){ return null; }$event.preventDefault();return _vm.setActiveColor(index)}}},[_c('color',{class:{'color--selected': color === _vm.activeColor },attrs:{"rgb-hex":color.rgbHex,"opacity":color.opacity}})],1)}),0),_vm._v(" "),(_vm.colorCtas.ctas)?_c('cta-block',{attrs:{"ctas":_vm.colorCtas.ctas,"mod":"baseline"}}):_vm._e()],1)]),_vm._v(" "),(_vm.activeColor.exampleImage)?_c('div',{staticClass:"flexgrid__cell--sm-8 flexgrid__cell--xs-6"},[_c('c-image',_vm._b({staticClass:"colors__image"},'c-image',_vm.activeColor.exampleImage,false))],1):_vm._e()]),_vm._v(" "),_c('footer-block',{staticClass:"footer-block--push-down",attrs:{"ctas":_vm.ctas}})],1)])}
var staticRenderFns = []



/***/ }),
/* 266 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"content-cover content-cover--cover"},[(this.image)?_c('c-image',_vm._b({},'c-image',this.image,false)):_vm._e(),_vm._v(" "),_c('div',{staticClass:"content-cover__image--overlay"}),_vm._v(" "),_c('section',{staticClass:"content-cover__container"},[_c('div',{staticClass:"flexgrid__cell--xs-6 content-cover-content content-cover--cover-reset"},[_c('h3',{staticClass:"content-cover__title"},[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),_c('p',{staticClass:"content-cover__description"},[_vm._v(_vm._s(_vm.description))]),_vm._v(" "),_c('div',[(_vm.cta)?_c(_vm.cta.type,_vm._b({tag:"component",class:_vm.getClassNames(_vm.cta.type)},'component',_vm.cta,false)):_vm._e()],1)])])],1)}
var staticRenderFns = []



/***/ }),
/* 267 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"content-general"},[_c('section',{staticClass:"content-general__container"},[_c('div',{staticClass:"flexgrid flexgrid--gutter",class:{'flexgrid--row-reversed': _vm.reversed}},[_c('div',{staticClass:"flexgrid__cell--xs-6 content-general__grid-cell content-general__content"},[_c('h3',{staticClass:"content-general__title"},[_vm._v(" "+_vm._s(_vm.title))]),_vm._v(" "),_c('div',{staticClass:"content-manageble content-general__body",domProps:{"innerHTML":_vm._s(_vm.description)}}),_vm._v(" "),(_vm.cta)?_c(_vm.cta.type,_vm._b({tag:"component",class:_vm.getClassNames(_vm.cta.type)},'component',_vm.cta,false)):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"flexgrid__cell--xs-6 content-general__grid-cell content-general__image"},[_c('div',{staticClass:"content-general__image-wrapper"},[(_vm.image)?_c('c-image',_vm._b({},'c-image',_vm.image,false)):_vm._e()],1)])])])])}
var staticRenderFns = []



/***/ }),
/* 268 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"organism content-highlight"},[_c('section',{staticClass:"container content-highlight__container"},[_c('div',{staticClass:"flexgrid",class:{'flexgrid--row-reversed': _vm.reversed}},[_c('div',{staticClass:"flexgrid__cell--xs-6 content-highlight__grid-cell content-highlight__image"},[_c('div',{staticClass:"content-highlight__image-wrapper"},[(_vm.image)?_c('c-image',_vm._b({},'c-image',_vm.image,false)):_vm._e()],1)]),_vm._v(" "),_c('div',{staticClass:"flexgrid__cell--xs-6 content-highlight__grid-cell content-highlight__content"},[_c('header-block',{staticClass:"content-highlight-header",attrs:{"title":_vm.title,"subtitle":_vm.subtitle}}),_vm._v(" "),_c('div',{staticClass:"content-manageble content-highlight__body",domProps:{"innerHTML":_vm._s(_vm.description)}}),_vm._v(" "),_c('footer-block',{staticClass:"content-highlight-footer",attrs:{"ctas":_vm.ctas}})],1)])])])}
var staticRenderFns = []



/***/ }),
/* 269 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"hero hero--article organism"},[_c('div',{staticClass:"hero-article__image--full"},[(this.image)?_c('c-image',_vm._b({attrs:{"resize-behavior":"fill"}},'c-image',this.image,false)):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"hero-article__image--overlay"}),_vm._v(" "),_c('section',{staticClass:"hero-article__container container"},[_c('div',{staticClass:"flexgrid__cell--xs-12 hero--article-reset"},[_c('header-block',{staticClass:"hero__article-header header-block--hero"},[_c('HeroHeading',{attrs:{"title":_vm.title,"subtitle":_vm.subtitle}})],1)],1)])])}
var staticRenderFns = []



/***/ }),
/* 270 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"hero hero--basic organism"},[_c('section',{staticClass:"container hero__container"},[_c('div',{staticClass:"flexgrid flexgrid--gutter flexgrid--column-reversed flexgrid--mobile-xl-row"},[_c('div',{staticClass:"flexgrid__cell--xs-6"},[_c('div',{staticClass:"hero__description"},[_c('HeaderBlock',{staticClass:"hero__header header-block--hero"},[_c('h1',{staticClass:"hero__title header-block__title--hero"},[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),(_vm.subtitle)?_c('h2',{staticClass:"hero__subtitle header-block__subtitle--hero"},[_vm._v(_vm._s(_vm.subtitle))]):_vm._e()]),_vm._v(" "),_c('p',{staticClass:"hero__intro copy--intro"},[_vm._v(_vm._s(_vm.description))]),_vm._v(" "),(_vm.ctas)?_c('cta-block',{attrs:{"mod":"hero","ctas":_vm.ctas.ctas,"styleContentButton":"button button--primary","block":"hero"}}):_vm._e()],1)]),_vm._v(" "),_c('div',{staticClass:"flexgrid__cell--xs-6"},[_c('div',{staticClass:"hero__image"},[(_vm.image)?[_c('c-image',_vm._b({attrs:{"keep-in-view":""}},'c-image',_vm.image,false))]:_vm._e()],2)])])])])}
var staticRenderFns = []



/***/ }),
/* 271 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"hero hero--cover organism"},[_c('div',{staticClass:"hero-cover__image--full"},[(this.image)?_c('c-image',_vm._b({attrs:{"resize-behavior":"fill"}},'c-image',this.image,false)):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"hero-cover__image--overlay"}),_vm._v(" "),_c('section',{staticClass:"hero-cover__container container"},[_c('div',{staticClass:"flexgrid__cell--xs-6 hero--cover-reset"},[_c('h1',{staticClass:"hero-cover__headline"},[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),(_vm.description)?_c('p',{staticClass:"copy--intro"},[_vm._v(_vm._s(_vm.description))]):_vm._e(),_vm._v(" "),(_vm.ctas)?_c('cta-block',{attrs:{"mod":"hero","ctas":_vm.ctas.ctas,"styleContentButton":"button button--primary"}}):_vm._e()],1)])])}
var staticRenderFns = []



/***/ }),
/* 272 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hero-homepage"},[_c('div',{staticClass:"hero-homepage__content"},[_c('h1',{staticClass:"hero-homepage__title"},[_vm._v("\n            "+_vm._s(_vm.title)+"\n        ")]),_vm._v(" "),(_vm.image)?_c('picture',{attrs:{"role":"presentation"}},[_c('source',{attrs:{"srcset":_vm.srcSetWebpPortrait,"type":"image/webp","media":"(orientation: portrait)"}}),_vm._v(" "),_c('source',{attrs:{"srcset":_vm.srcSetWebp,"type":"image/webp","media":"(orientation: landscape)"}}),_vm._v(" "),_c('source',{attrs:{"srcset":_vm.srcSetPortrait,"media":"(orientation: portrait)"}}),_vm._v(" "),_c('source',{attrs:{"srcset":_vm.srcSet,"media":"(orientation: landscape)"}}),_vm._v(" "),_c('img',{staticClass:"hero-homepage__image",attrs:{"src":((_vm.image.url) + "?w=1920&h=1080&fit=fill"),"alt":""}})]):_vm._e(),_vm._v(" "),(_vm.description)?_c('p',{staticClass:"hero-homepage__description"},[_vm._v("\n            "+_vm._s(_vm.description)+"\n        ")]):_vm._e(),_vm._v(" "),(_vm.ctas)?_c('cta-block',{attrs:{"ctas":_vm.ctas.ctas}}):_vm._e()],1)])}
var staticRenderFns = []



/***/ }),
/* 273 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"hero hero--product organism"},[_c('section',{staticClass:"container hero__container"},[_c('div',{staticClass:"flexgrid flexgrid--gutter flexgrid--column-reversed flexgrid--mobile-xl-row"},[_c('div',{staticClass:"flexgrid__cell--xs-6"},[_c('div',{staticClass:"hero__description"},[_c('header-block',{staticClass:"hero__header header-block--hero"},[_c('HeroHeading',{attrs:{"title":_vm.title,"subtitle":_vm.subtitle}})],1),_vm._v(" "),_c('p',{staticClass:"hero__intro copy--intro"},[_vm._v(_vm._s(_vm.description))]),_vm._v(" "),(_vm.products)?_c('div',{staticClass:"hero__products"},[_vm._l((_vm.products),function(product){return [_c('product',_vm._b({class:_vm.productsClass},'product',product,false))]})],2):_vm._e(),_vm._v(" "),(_vm.ctas)?_c('cta-block',{attrs:{"mod":"hero","ctas":_vm.ctas.ctas,"styleContentButton":"button button--primary","block":"hero"}}):_vm._e(),_vm._v(" "),(_vm.linkList)?_c('ul',{staticClass:"hero__linklist"},[_vm._l((_vm.linkList),function(link){return [_c('li',{staticClass:"hero__linklist-item"},[_c('ContentLink',_vm._b({staticClass:"link hero__linklist-link",attrs:{"label":link.label}},'ContentLink',link,false))],1)]})],2):_vm._e()],1)]),_vm._v(" "),_c('div',{staticClass:"flexgrid__cell--xs-6"},[_c('div',{staticClass:"hero__image"},[(_vm.image)?[_c('c-image',_vm._b({attrs:{"keep-in-view":""}},'c-image',_vm.image,false))]:_vm._e()],2)])])])])}
var staticRenderFns = []



/***/ }),
/* 274 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _vm._m(0)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"job-board-frame organism"},[_c('div',{staticClass:"container"},[_c('div',{attrs:{"id":"grnhse_app"}})])])}]



/***/ }),
/* 275 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"organism overview"},[_c('section',{staticClass:"container"},[_c('header-block',{attrs:{"title":_vm.title,"subtitle":_vm.subtitle}}),_vm._v(" "),_vm._l((_vm.sections),function(section,index){return [_c(section.type,_vm._b({key:index,tag:"component"},'component',section,false))]}),_vm._v(" "),_c('footer-block',{attrs:{"ctas":_vm.ctas}})],2)])}
var staticRenderFns = []



/***/ }),
/* 276 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"organism overview-ubr"},[_c('section',{staticClass:"container"},[_c('header-block',{attrs:{"title":_vm.title,"subtitle":_vm.subtitle}}),_vm._v(" "),_c('div',{staticClass:"flexgrid flexgrid--justify-center flexgrid--gutter flexgrid--mobile-xl-row"},_vm._l((_vm.items),function(blockIcon,index){return _c('block-icon',_vm._b({key:index,staticClass:"flexgrid__cell flexgrid__cell--xs-6 flexgrid__cell--sm-4 flexgrid__cell--lg-3"},'block-icon',blockIcon,false))}),1),_vm._v(" "),_c('footer-block',{attrs:{"ctas":_vm.ctas}})],1)])}
var staticRenderFns = []



/***/ }),
/* 277 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"footer",attrs:{"lang":_vm.language}},[_c('div',{staticClass:"footer__container"},[_c('div',{staticClass:"footer__primary"},[_c('router-link',{staticClass:"branded-logo footer__branded-logo",attrs:{"to":"/","aria-label":"Ultimaker homepage"}},[_c('icon',{staticClass:"branded-logo__u",attrs:{"icon-name":"ultimaker-u"}})],1),_vm._v(" "),(_vm.navigation && _vm.navigation.length)?_c('nav',{staticClass:"footer__navigation"},_vm._l((_vm.navigation),function(navigationItem,index){return _c('footer-navigation-category',_vm._b({key:index},'footer-navigation-category',navigationItem,false))}),1):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"footer__secondary"},[_c('social-nav'),_vm._v(" "),_c('div',{staticClass:"footer__locales"},[_c('icon',{staticClass:"footer__locales-icon",attrs:{"icon-name":"geo"}}),_vm._v(" "),(_vm.showCountrySelector)?_c('locale-selector',_vm._b({staticClass:"footer__country-selector",attrs:{"type":"countrySelector","eventLocaleChanged":_vm.eventCountryChanged,"initialIsoCode":_vm.countryCode},on:_vm._d({"is-editing":_vm.toggleSelector},[_vm.eventCountryChanged,_vm.countryChangedHandler])},'locale-selector',_vm.countrySelector,false)):_vm._e(),_vm._v(" "),(!_vm.currentlyEditing && _vm.showLanguageSelector)?_c('span',{staticClass:"footer__dash"},[_vm._v("–")]):_vm._e(),_vm._v(" "),(_vm.showLanguageSelector)?_c('locale-selector',_vm._b({staticClass:"footer__language-selector",attrs:{"type":"languageSelector","showSuggestions":"","eventLocaleChanged":_vm.eventLanguageChanged,"initialIsoCode":_vm.languageCode,"minChar":1},on:_vm._d({"is-editing":_vm.toggleSelector},[_vm.eventLanguageChanged,_vm.languageChangedHandler])},'locale-selector',_vm.localeSelector,false)):_vm._e()],1)],1),_vm._v(" "),_c('div',{staticClass:"footer__tertiary"},[(_vm.legalNavigation && _vm.legalNavigation.length)?_c('nav',{staticClass:"footer__legal"},[_c('footer-navigation-category',{staticClass:"footer__legal__column",attrs:{"items":_vm.legalNavigation,"label":_vm.copyrightLabel}})],1):_vm._e()])])])}
var staticRenderFns = []



/***/ }),
/* 278 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"header header--fixed",attrs:{"lang":_vm.language,"role":"banner"}},[_c('div',{staticClass:"header__top",class:{'header--mobile-inverted': _vm.mainNavOpen}},[_c('a',{staticClass:"home-link",attrs:{"href":_vm.homepageUrl,"aria-label":"Ultimaker homepage"}},[_c('icon',{staticClass:"home-link__logo",attrs:{"icon-name":"logo-ultimaker"}})],1),_vm._v(" "),(_vm.navigation)?_c('main-navigation',{attrs:{"navigation":_vm.navigation,"main-nav-open":_vm.mainNavOpen},on:{"nav-assist-click":_vm.handleNavAssistClick,"show-compact-menu":_vm.handleOpenCompactMenu}}):_vm._e(),_vm._v(" "),(_vm.cta && _vm.search)?_c('sys-nav',{attrs:{"order-now-icon":_vm.cta.icon,"order-now-label":_vm.cta.label,"order-now-link":_vm.cta.url,"search-icon":_vm.search.icon,"search-label":_vm.search.label},on:{"open-search":_vm.openSearch}}):_vm._e(),_vm._v(" "),_c('nav-assist',{staticClass:"main-nav__nav-assist",attrs:{"open-state":_vm.mainNavOpen},on:{"nav-assist-click":_vm.handleNavAssistClick}}),_vm._v(" "),_c('transition',{attrs:{"name":"search"},on:{"after-enter":_vm.handleFocus,"leave":_vm.handleFocus}},[(_vm.searchOpen)?_c('search-bar',{ref:"search",staticClass:"header__search",attrs:{"label":_vm.search.label,"languageCode":_vm.language,"placeholder":_vm.search.placeholder,"open-state":_vm.searchOpen},on:{"close":_vm.closeSearch}}):_vm._e()],1)],1)])}
var staticRenderFns = []



/***/ }),
/* 279 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"search-results"},[_c('search-bar-page',{attrs:{"eventSubmitSearch":_vm.eventSubmitSearch,"isLoading":_vm.isLoading,"label":_vm.label,"placeholder":_vm.placeholder,"terms":_vm.terms},on:_vm._d({},[_vm.eventSubmitSearch,_vm.submitSearch])}),_vm._v(" "),(_vm.terms.length && !_vm.isLoading)?_c('h1',{staticClass:"search-results__title"},[_vm._v("\n        "+_vm._s(_vm.computedTitle)+"\n    ")]):_vm._e(),_vm._v(" "),(_vm.searchResults.length)?_c('ul',{staticClass:"search-results__list"},_vm._l((_vm.searchResults),function(searchResult,key){return _c('li',{key:key,staticClass:"search-results__list-item"},[_c('search-result',_vm._b({attrs:{"terms":_vm.terms}},'search-result',searchResult,false))],1)}),0):_vm._e(),_vm._v(" "),(_vm.showLoadMore)?_c('footer',{staticClass:"search-results__footer"},[_c('button',{staticClass:"button button--secondary",attrs:{"disabled":_vm.isLoading},on:{"click":_vm.loadMore}},[_vm._v("\n            Load more\n        ")])]):_vm._e()],1)}
var staticRenderFns = []



/***/ }),
/* 280 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.items)?_c('nav',{ref:"subNav",staticClass:"subnavigation subnavigation--fixed",attrs:{"aria-label":"sub items"}},[(_vm.items)?_c('ul',{staticClass:"subnavigation__list",class:_vm.isTouch ? 'touch' : '',attrs:{"role":"presentation"}},_vm._l((_vm.items),function(item,index){return _c('li',{ref:"listItems",refInFor:true,staticClass:"subnavigation__item"},[_c(item.type,_vm._b({key:index,tag:"component"},'component',item,false))],1)}),0):_vm._e()]):_vm._e()}
var staticRenderFns = []



/***/ }),
/* 281 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"organism tabbed-content"},[_c('section',{staticClass:"container"},[_c('header-block',{attrs:{"title":_vm.title,"subtitle":_vm.subtitle}}),_vm._v(" "),(_vm.tabs && _vm.tabs.length)?_c('Tabs',{attrs:{"tabs":_vm.tabs,"sequenced":_vm.sequenced}}):_vm._e(),_vm._v(" "),_c('footer-block',{attrs:{"ctas":_vm.ctas}})],1)])}
var staticRenderFns = []



/***/ }),
/* 282 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"organism tabbed-table"},[_c('section',{staticClass:"container"},[_c('header-block',{attrs:{"title":_vm.title,"subtitle":_vm.subtitle}}),_vm._v(" "),(_vm.tabs && _vm.tabs.length)?_c('tabs',{attrs:{"tabs":_vm.tabs,"sequenced":false}}):_vm._e(),_vm._v(" "),_c('footer-block',{attrs:{"ctas":_vm.ctas}})],1)])}
var staticRenderFns = []



/***/ }),
/* 283 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"organism"},[_c('div',{staticClass:"container"},[_c('header-block',{attrs:{"title":_vm.title,"subtitle":_vm.subtitle}}),_vm._v(" "),_c('div',{ref:"scrollWidthContainer",staticClass:"table-compare"},[_c('div',{ref:"scrollContainer",staticClass:"table-compare__scroll-container"},[(_vm.content)?_c('table',{staticClass:"table-compare__table",style:(("--number-of-columns: " + _vm.scrollingColumns + ";"))},[_c('colgroup',[(_vm.showScrollingColumns)?_c('col'):_vm._e(),_vm._v(" "),_vm._l((_vm.content.columns),function(col){return _c('col')}),_vm._v(" "),(_vm.showScrollingColumns)?_c('col'):_vm._e()],2),_vm._v(" "),_c('thead',[_c('tr',[(_vm.showScrollingColumns)?_c('th',{attrs:{"scope":"col"}}):_vm._e(),_vm._v(" "),_vm._l((_vm.content.columns),function(col){return _c('th',{ref:"columns",refInFor:true,attrs:{"scope":"col"}},[(col.image && col.image.url)?_c('c-image',_vm._b({staticClass:"table-compare__image",attrs:{"alt":"col.alt"}},'c-image',col.image,false)):_vm._e(),_vm._v(" "),_c('span',[_vm._v(_vm._s(col.title))])],1)}),_vm._v(" "),(_vm.showScrollingColumns)?_c('th',{attrs:{"scope":"col"}}):_vm._e()],2)]),_vm._v(" "),_c('tbody',_vm._l((_vm.content.rows),function(row){return _c('tr',[(_vm.showScrollingColumns)?_c('td'):_vm._e(),_vm._v(" "),_vm._l((row.cells),function(cell){return _c('td',[_c('span',{staticClass:"table-compare__cell"},[_vm._v(_vm._s(cell.label))]),_vm._v(" "),(cell.checked)?_c('icon',{staticClass:"table-compare__checkmark",attrs:{"icon-name":"checkmark"}}):_vm._e()],1)}),_vm._v(" "),(_vm.showScrollingColumns)?_c('td'):_vm._e()],2)}),0),_vm._v(" "),_c('tfoot',[_c('tr',[(_vm.showScrollingColumns)?_c('th',{attrs:{"scope":"row"}}):_vm._e(),_vm._v(" "),_vm._l((_vm.content.columns),function(cell){return _c('td',[(cell.cta)?_c(cell.cta.type,_vm._b({tag:"component",class:_vm.getClassNames(cell.cta.type)},'component',cell.cta,false)):_vm._e()],1)}),_vm._v(" "),(_vm.showScrollingColumns)?_c('td',{attrs:{"scope":"row"}}):_vm._e()],2)])]):_vm._e()]),_vm._v(" "),(_vm.showScrollButtons)?_c('div',{staticClass:"table-compare__scroll-buttons"},[_c('icon-button',{staticClass:"table-compare__scroll-button table-compare__scroll-button--left",attrs:{"icon-name":"angle-left","disabled":_vm.disableLeft},on:{"click":function($event){return _vm.scroll(true)}}}),_vm._v(" "),_c('icon-button',{staticClass:"table-compare__scroll-button table-compare__scroll-button--right",attrs:{"icon-name":"angle-right","disabled":_vm.disableRight},on:{"click":function($event){return _vm.scroll(false)}}})],1):_vm._e(),_vm._v(" "),_c('div',{staticClass:"table-compare-features"},[_c('div',{staticClass:"table-compare-features--header"}),_vm._v(" "),_vm._l((_vm.content.rows),function(row){return _c('div',{staticClass:"table-compare-features--body"},[(row.tooltip)?_c('div',{staticClass:"table-compare__feature"},[_c('tooltip-toggle',_vm._b({attrs:{"label":row.label}},'tooltip-toggle',row.tooltip,false))],1):_c('div',{staticClass:"table-compare__feature--no-tooltip"},[_c('span',[_vm._v(_vm._s(row.label))])])])}),_vm._v(" "),_c('div',{staticClass:"table-compare-features--footer"})],2)]),_vm._v(" "),_c('footer-block',{attrs:{"ctas":_vm.ctas}})],1)])}
var staticRenderFns = []



/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.registry = exports.PublicEventService = exports.ViewportUtility = exports.TextUtils = exports.BrowserCapabilities = exports.Defaults = undefined;

var _defaults = __webpack_require__(5);

Object.defineProperty(exports, 'Defaults', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_defaults).default;
    }
});

var _browserCapabilities = __webpack_require__(3);

Object.defineProperty(exports, 'BrowserCapabilities', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_browserCapabilities).default;
    }
});

var _textUtils = __webpack_require__(285);

Object.defineProperty(exports, 'TextUtils', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_textUtils).default;
    }
});

var _viewport = __webpack_require__(2);

Object.defineProperty(exports, 'ViewportUtility', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_viewport).default;
    }
});

var _publicEventService = __webpack_require__(286);

Object.defineProperty(exports, 'PublicEventService', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_publicEventService).default;
    }
});

__webpack_require__(287);

__webpack_require__(288);

__webpack_require__(289);

__webpack_require__(290);

__webpack_require__(291);

__webpack_require__(292);

__webpack_require__(293);

__webpack_require__(294);

__webpack_require__(295);

__webpack_require__(296);

__webpack_require__(297);

__webpack_require__(298);

__webpack_require__(299);

__webpack_require__(300);

__webpack_require__(301);

__webpack_require__(302);

__webpack_require__(303);

__webpack_require__(304);

__webpack_require__(305);

__webpack_require__(306);

__webpack_require__(307);

__webpack_require__(308);

__webpack_require__(309);

__webpack_require__(310);

__webpack_require__(311);

__webpack_require__(312);

__webpack_require__(313);

__webpack_require__(314);

__webpack_require__(315);

__webpack_require__(316);

__webpack_require__(317);

__webpack_require__(318);

__webpack_require__(319);

__webpack_require__(320);

__webpack_require__(321);

__webpack_require__(322);

__webpack_require__(323);

__webpack_require__(324);

__webpack_require__(325);

__webpack_require__(326);

__webpack_require__(327);

__webpack_require__(328);

__webpack_require__(329);

__webpack_require__(330);

__webpack_require__(331);

__webpack_require__(332);

__webpack_require__(333);

__webpack_require__(334);

__webpack_require__(335);

__webpack_require__(336);

__webpack_require__(337);

__webpack_require__(338);

__webpack_require__(339);

__webpack_require__(340);

__webpack_require__(341);

__webpack_require__(342);

__webpack_require__(343);

__webpack_require__(344);

__webpack_require__(345);

__webpack_require__(346);

__webpack_require__(347);

__webpack_require__(348);

__webpack_require__(349);

__webpack_require__(350);

__webpack_require__(351);

__webpack_require__(352);

__webpack_require__(353);

__webpack_require__(354);

__webpack_require__(355);

__webpack_require__(356);

__webpack_require__(357);

__webpack_require__(358);

__webpack_require__(359);

__webpack_require__(360);

__webpack_require__(361);

__webpack_require__(362);

__webpack_require__(363);

__webpack_require__(364);

__webpack_require__(365);

__webpack_require__(366);

__webpack_require__(367);

__webpack_require__(368);

__webpack_require__(369);

__webpack_require__(370);

__webpack_require__(371);

__webpack_require__(372);

__webpack_require__(373);

__webpack_require__(374);

__webpack_require__(375);

__webpack_require__(376);

__webpack_require__(377);

__webpack_require__(378);

__webpack_require__(379);

__webpack_require__(380);

__webpack_require__(381);

__webpack_require__(382);

__webpack_require__(383);

__webpack_require__(384);

var _componentRegistry = __webpack_require__(385);

var _componentRegistry2 = _interopRequireDefault(_componentRegistry);

var _components = __webpack_require__(390);

var _components2 = _interopRequireDefault(_components);

__webpack_require__(507);

var _clickOutside = __webpack_require__(508);

var _clickOutside2 = _interopRequireDefault(_clickOutside);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __svg__ = { filename: __webpack_require__.p +"static/icons/iconset.svg" };
var registry = new _componentRegistry2.default();
Object.keys(_components2.default).forEach(function (c) {
    registry.registerComponent(_components2.default[c]);
});
registry.registerDirective(_clickOutside2.default);
exports.registry = registry;

/***/ }),
/* 285 */
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
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _vue = __webpack_require__(1);

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
/* 287 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__287__;

/***/ }),
/* 288 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__288__;

/***/ }),
/* 289 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__289__;

/***/ }),
/* 290 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__290__;

/***/ }),
/* 291 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__291__;

/***/ }),
/* 292 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__292__;

/***/ }),
/* 293 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__293__;

/***/ }),
/* 294 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__294__;

/***/ }),
/* 295 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__295__;

/***/ }),
/* 296 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__296__;

/***/ }),
/* 297 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__297__;

/***/ }),
/* 298 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__298__;

/***/ }),
/* 299 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__299__;

/***/ }),
/* 300 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__300__;

/***/ }),
/* 301 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__301__;

/***/ }),
/* 302 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__302__;

/***/ }),
/* 303 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__303__;

/***/ }),
/* 304 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__304__;

/***/ }),
/* 305 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__305__;

/***/ }),
/* 306 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__306__;

/***/ }),
/* 307 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__307__;

/***/ }),
/* 308 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__308__;

/***/ }),
/* 309 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__309__;

/***/ }),
/* 310 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__310__;

/***/ }),
/* 311 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__311__;

/***/ }),
/* 312 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__312__;

/***/ }),
/* 313 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__313__;

/***/ }),
/* 314 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__314__;

/***/ }),
/* 315 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__315__;

/***/ }),
/* 316 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__316__;

/***/ }),
/* 317 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__317__;

/***/ }),
/* 318 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__318__;

/***/ }),
/* 319 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__319__;

/***/ }),
/* 320 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__320__;

/***/ }),
/* 321 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__321__;

/***/ }),
/* 322 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__322__;

/***/ }),
/* 323 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__323__;

/***/ }),
/* 324 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__324__;

/***/ }),
/* 325 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__325__;

/***/ }),
/* 326 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__326__;

/***/ }),
/* 327 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__327__;

/***/ }),
/* 328 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__328__;

/***/ }),
/* 329 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__329__;

/***/ }),
/* 330 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__330__;

/***/ }),
/* 331 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__331__;

/***/ }),
/* 332 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__332__;

/***/ }),
/* 333 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__333__;

/***/ }),
/* 334 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__334__;

/***/ }),
/* 335 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__335__;

/***/ }),
/* 336 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__336__;

/***/ }),
/* 337 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__337__;

/***/ }),
/* 338 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__338__;

/***/ }),
/* 339 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__339__;

/***/ }),
/* 340 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__340__;

/***/ }),
/* 341 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__341__;

/***/ }),
/* 342 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__342__;

/***/ }),
/* 343 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__343__;

/***/ }),
/* 344 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__344__;

/***/ }),
/* 345 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__345__;

/***/ }),
/* 346 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__346__;

/***/ }),
/* 347 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__347__;

/***/ }),
/* 348 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__348__;

/***/ }),
/* 349 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__349__;

/***/ }),
/* 350 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__350__;

/***/ }),
/* 351 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__351__;

/***/ }),
/* 352 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__352__;

/***/ }),
/* 353 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__353__;

/***/ }),
/* 354 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__354__;

/***/ }),
/* 355 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__355__;

/***/ }),
/* 356 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__356__;

/***/ }),
/* 357 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__357__;

/***/ }),
/* 358 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__358__;

/***/ }),
/* 359 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__359__;

/***/ }),
/* 360 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__360__;

/***/ }),
/* 361 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__361__;

/***/ }),
/* 362 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__362__;

/***/ }),
/* 363 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__363__;

/***/ }),
/* 364 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__364__;

/***/ }),
/* 365 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__365__;

/***/ }),
/* 366 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__366__;

/***/ }),
/* 367 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__367__;

/***/ }),
/* 368 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__368__;

/***/ }),
/* 369 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__369__;

/***/ }),
/* 370 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__370__;

/***/ }),
/* 371 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__371__;

/***/ }),
/* 372 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__372__;

/***/ }),
/* 373 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__373__;

/***/ }),
/* 374 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__374__;

/***/ }),
/* 375 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__375__;

/***/ }),
/* 376 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__376__;

/***/ }),
/* 377 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__377__;

/***/ }),
/* 378 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__378__;

/***/ }),
/* 379 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__379__;

/***/ }),
/* 380 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__380__;

/***/ }),
/* 381 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__381__;

/***/ }),
/* 382 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__382__;

/***/ }),
/* 383 */
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
/* 384 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 385 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _uniqId = __webpack_require__(386);

var _portalVue = __webpack_require__(389);

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
/* 386 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UniqId = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _uuid = __webpack_require__(190);

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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(189)))

/***/ }),
/* 387 */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(191);
var bytesToUuid = __webpack_require__(192);

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
/* 388 */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(191);
var bytesToUuid = __webpack_require__(192);

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
/* 389 */
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

var Vue = _interopDefault(__webpack_require__(1));

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
/* 390 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _atoms = __webpack_require__(391);

var Atoms = _interopRequireWildcard(_atoms);

var _molecules = __webpack_require__(415);

var Molecules = _interopRequireWildcard(_molecules);

var _organisms = __webpack_require__(480);

var Organisms = _interopRequireWildcard(_organisms);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = _extends({}, Atoms, Molecules, Organisms);

/***/ }),
/* 391 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Image = undefined;

var _cImage = __webpack_require__(392);

Object.defineProperty(exports, 'Image', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_cImage).default;
  }
});

var _ActionButton = __webpack_require__(399);

var _ActionButton2 = _interopRequireDefault(_ActionButton);

var _AnchorOverlay = __webpack_require__(400);

var _AnchorOverlay2 = _interopRequireDefault(_AnchorOverlay);

var _BaseLink = __webpack_require__(7);

var _BaseLink2 = _interopRequireDefault(_BaseLink);

var _ContentLink = __webpack_require__(401);

var _ContentLink2 = _interopRequireDefault(_ContentLink);

var _ContentButton = __webpack_require__(402);

var _ContentButton2 = _interopRequireDefault(_ContentButton);

var _YoutubeLink = __webpack_require__(403);

var _YoutubeLink2 = _interopRequireDefault(_YoutubeLink);

var _ContentLinkList = __webpack_require__(404);

var _ContentLinkList2 = _interopRequireDefault(_ContentLinkList);

var _HitArea = __webpack_require__(405);

var _HitArea2 = _interopRequireDefault(_HitArea);

var _HorizontalList = __webpack_require__(406);

var _HorizontalList2 = _interopRequireDefault(_HorizontalList);

var _Icon = __webpack_require__(407);

var _Icon2 = _interopRequireDefault(_Icon);

var _LiInline = __webpack_require__(408);

var _LiInline2 = _interopRequireDefault(_LiInline);

var _LiItem = __webpack_require__(409);

var _LiItem2 = _interopRequireDefault(_LiItem);

var _NavAssist = __webpack_require__(410);

var _NavAssist2 = _interopRequireDefault(_NavAssist);

var _SpanLabel = __webpack_require__(411);

var _SpanLabel2 = _interopRequireDefault(_SpanLabel);

var _ToolTip = __webpack_require__(412);

var _ToolTip2 = _interopRequireDefault(_ToolTip);

var _YoutubeVideo = __webpack_require__(413);

var _YoutubeVideo2 = _interopRequireDefault(_YoutubeVideo);

var _LabelFilter = __webpack_require__(414);

var _LabelFilter2 = _interopRequireDefault(_LabelFilter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 392 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cImage = __webpack_require__(393);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _cImage.CImage;
  }
});

/***/ }),
/* 393 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CImage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(6);

var _cImage = __webpack_require__(394);

var _browserCapabilities = __webpack_require__(3);

var _browserCapabilities2 = _interopRequireDefault(_browserCapabilities);

var _viewport = __webpack_require__(2);

var _viewport2 = _interopRequireDefault(_viewport);

var _cImage2 = __webpack_require__(396);

var _cImageVue = __webpack_require__(397);

var _cImageVue2 = _interopRequireDefault(_cImageVue);

var _inView = __webpack_require__(398);

var _inView2 = _interopRequireDefault(_inView);

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
}((0, _vuePropertyDecorator.Mixins)(_inView2.default));
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, default: '' }), __metadata("design:type", String)], CImage.prototype, "alt", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Boolean, default: false }), __metadata("design:type", Boolean)], CImage.prototype, "crop", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, default: _cImage.FocusArea.center }), __metadata("design:type", String)], CImage.prototype, "focusArea", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", String)], CImage.prototype, "mimeType", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, default: _cImage.ResizeBehavior.default }), __metadata("design:type", String)], CImage.prototype, "resizeBehavior", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Number, default: 65 }), __metadata("design:type", Number)], CImage.prototype, "quality", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", String)], CImage.prototype, "url", void 0);
__decorate([(0, _vuePropertyDecorator.Watch)('url'), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", Promise)], CImage.prototype, "reset", null);
__decorate([(0, _vuePropertyDecorator.Watch)('inView'), __metadata("design:type", Function), __metadata("design:paramtypes", [Boolean]), __metadata("design:returntype", Promise)], CImage.prototype, "inViewWatcher", null);
exports.CImage = CImage = __decorate([_cImageVue2.default, (0, _vuePropertyDecorator.Component)({
    name: 'CImage'
})], CImage);
exports.CImage = CImage;

/***/ }),
/* 394 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _Image = __webpack_require__(395);

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
/* 395 */
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
/* 396 */
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
/* 397 */
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
/* 398 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _browserCapabilities = __webpack_require__(3);

var _browserCapabilities2 = _interopRequireDefault(_browserCapabilities);

var _viewport = __webpack_require__(2);

var _viewport2 = _interopRequireDefault(_viewport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InView = _vue2.default.extend({
    props: {
        keepInView: {
            type: Boolean,
            default: true
        }
    },
    data: function data() {
        return {
            inView: false,
            inViewObserver: undefined,
            inViewOptions: {},
            viewportUtil: new _viewport2.default()
        };
    },

    methods: {
        intersectionHandler: function intersectionHandler(entries) {
            if (entries.length) {
                var entry = entries.slice(-1)[0];
                this.setInView(entry.isIntersecting);
            }
        },
        intersectionPolyHandler: function intersectionPolyHandler() {
            var windowBottom = this.viewportUtil.scrollY + this.viewportUtil.screenHeight;
            var pictureBounds = this.$el.getBoundingClientRect();
            var pictureTop = this.viewportUtil.scrollY + pictureBounds.top;
            var pictureBottom = pictureTop + pictureBounds.height;
            this.setInView(this.viewportUtil.scrollY <= pictureBottom && windowBottom >= pictureTop);
        },
        setInView: function setInView(inView) {
            if (this.inView && this.keepInView) {
                return;
            }
            this.inView = inView;
        },
        setInViewOptions: function setInViewOptions(options) {
            this.inViewOptions = options;
        }
    },
    mounted: function mounted() {
        if (!_browserCapabilities2.default.supportsIntersectionObserver) {
            this.viewportUtil.addResizeHandler(this.intersectionPolyHandler);
            this.viewportUtil.addScrollHandler(this.intersectionPolyHandler);
            return;
        }
        this.inViewObserver = new IntersectionObserver(this.intersectionHandler, this.inViewOptions);
        this.inViewObserver.observe(this.$el);
    },
    beforeDestroy: function beforeDestroy() {
        if (this.inViewObserver) {
            this.inViewObserver.unobserve(this.$el);
        } else {
            this.viewportUtil.removeResizeHandler(this.intersectionPolyHandler);
            this.viewportUtil.removeScrollHandler(this.intersectionPolyHandler);
        }
    }
});
exports.default = InView;

/***/ }),
/* 399 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ActionButton_vue_vue_type_template_id_6ccdf09c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(196);
/* harmony import */ var _ActionButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ActionButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ActionButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _ActionButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ActionButton_vue_vue_type_template_id_6ccdf09c___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _ActionButton_vue_vue_type_template_id_6ccdf09c___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 400 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AnchorOverlay_vue_vue_type_template_id_172fd43e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(197);
/* harmony import */ var _AnchorOverlay_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _AnchorOverlay_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _AnchorOverlay_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _AnchorOverlay_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AnchorOverlay_vue_vue_type_template_id_172fd43e___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _AnchorOverlay_vue_vue_type_template_id_172fd43e___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 401 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContentLink_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ContentLink_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ContentLink_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(
  _ContentLink_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 402 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContentButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ContentButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ContentButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
var render, staticRenderFns




/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(
  _ContentButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__["default"],
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 403 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _YoutubeLink_vue_vue_type_template_id_138c4998___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(199);
/* harmony import */ var _YoutubeLink_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _YoutubeLink_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _YoutubeLink_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _YoutubeLink_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _YoutubeLink_vue_vue_type_template_id_138c4998___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _YoutubeLink_vue_vue_type_template_id_138c4998___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 404 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContentLinkList_vue_vue_type_template_id_7397f34c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(200);
/* harmony import */ var _ContentLinkList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(20);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ContentLinkList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ContentLinkList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _ContentLinkList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ContentLinkList_vue_vue_type_template_id_7397f34c___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _ContentLinkList_vue_vue_type_template_id_7397f34c___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 405 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HitArea_vue_vue_type_template_id_274bc638___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(201);
/* harmony import */ var _HitArea_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HitArea_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HitArea_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _HitArea_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HitArea_vue_vue_type_template_id_274bc638___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _HitArea_vue_vue_type_template_id_274bc638___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 406 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HorizontalList_vue_vue_type_template_id_35f515ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(202);
/* harmony import */ var _HorizontalList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HorizontalList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HorizontalList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _HorizontalList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HorizontalList_vue_vue_type_template_id_35f515ea___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _HorizontalList_vue_vue_type_template_id_35f515ea___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 407 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Icon_vue_vue_type_template_id_160d3d57___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(203);
/* harmony import */ var _Icon_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(26);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Icon_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Icon_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _Icon_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Icon_vue_vue_type_template_id_160d3d57___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _Icon_vue_vue_type_template_id_160d3d57___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 408 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LiInline_vue_vue_type_template_id_705c0280___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(204);
/* harmony import */ var _LiInline_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _LiInline_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _LiInline_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _LiInline_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LiInline_vue_vue_type_template_id_705c0280___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _LiInline_vue_vue_type_template_id_705c0280___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 409 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LiItem_vue_vue_type_template_id_b224ac44___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(205);
/* harmony import */ var _LiItem_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _LiItem_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _LiItem_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _LiItem_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LiItem_vue_vue_type_template_id_b224ac44___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _LiItem_vue_vue_type_template_id_b224ac44___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 410 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavAssist_vue_vue_type_template_id_5535d1ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(206);
/* harmony import */ var _NavAssist_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(32);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _NavAssist_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _NavAssist_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _NavAssist_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NavAssist_vue_vue_type_template_id_5535d1ee___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _NavAssist_vue_vue_type_template_id_5535d1ee___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 411 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SpanLabel_vue_vue_type_template_id_2deffd43___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(207);
/* harmony import */ var _SpanLabel_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(34);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _SpanLabel_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _SpanLabel_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _SpanLabel_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SpanLabel_vue_vue_type_template_id_2deffd43___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _SpanLabel_vue_vue_type_template_id_2deffd43___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 412 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ToolTip_vue_vue_type_template_id_692e8ed4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(208);
/* harmony import */ var _ToolTip_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ToolTip_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ToolTip_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _ToolTip_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ToolTip_vue_vue_type_template_id_692e8ed4___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _ToolTip_vue_vue_type_template_id_692e8ed4___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 413 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _YoutubeVideo_vue_vue_type_template_id_2efc4de0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(209);
/* harmony import */ var _YoutubeVideo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(38);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _YoutubeVideo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _YoutubeVideo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _YoutubeVideo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _YoutubeVideo_vue_vue_type_template_id_2efc4de0___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _YoutubeVideo_vue_vue_type_template_id_2efc4de0___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 414 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LabelFilter_vue_vue_type_template_id_87ec1224___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(210);
/* harmony import */ var _LabelFilter_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _LabelFilter_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _LabelFilter_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _LabelFilter_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LabelFilter_vue_vue_type_template_id_87ec1224___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _LabelFilter_vue_vue_type_template_id_87ec1224___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 415 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AutoComplete = undefined;

var _autoComplete = __webpack_require__(416);

Object.defineProperty(exports, 'AutoComplete', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_autoComplete).default;
  }
});

var _ArticleAuthor = __webpack_require__(419);

var _ArticleAuthor2 = _interopRequireDefault(_ArticleAuthor);

var _ArticleCtas = __webpack_require__(421);

var _ArticleCtas2 = _interopRequireDefault(_ArticleCtas);

var _ArticleDescriptionList = __webpack_require__(422);

var _ArticleDescriptionList2 = _interopRequireDefault(_ArticleDescriptionList);

var _ArticleImage = __webpack_require__(423);

var _ArticleImage2 = _interopRequireDefault(_ArticleImage);

var _ArticleIntro = __webpack_require__(424);

var _ArticleIntro2 = _interopRequireDefault(_ArticleIntro);

var _ActicleTable = __webpack_require__(425);

var _ActicleTable2 = _interopRequireDefault(_ActicleTable);

var _ArticleVideo = __webpack_require__(426);

var _ArticleVideo2 = _interopRequireDefault(_ArticleVideo);

var _ArticleText = __webpack_require__(427);

var _ArticleText2 = _interopRequireDefault(_ArticleText);

var _BlockIcon = __webpack_require__(428);

var _BlockIcon2 = _interopRequireDefault(_BlockIcon);

var _Brand = __webpack_require__(429);

var _Brand2 = _interopRequireDefault(_Brand);

var _Color = __webpack_require__(430);

var _Color2 = _interopRequireDefault(_Color);

var _ContentBlock = __webpack_require__(432);

var _ContentBlock2 = _interopRequireDefault(_ContentBlock);

var _ContentToggle = __webpack_require__(433);

var _ContentToggle2 = _interopRequireDefault(_ContentToggle);

var _CtaBlock = __webpack_require__(434);

var _CtaBlock2 = _interopRequireDefault(_CtaBlock);

var _ListUnordered = __webpack_require__(435);

var _ListUnordered2 = _interopRequireDefault(_ListUnordered);

var _HeaderBlock = __webpack_require__(436);

var _HeaderBlock2 = _interopRequireDefault(_HeaderBlock);

var _FooterBlock = __webpack_require__(437);

var _FooterBlock2 = _interopRequireDefault(_FooterBlock);

var _ListUnorderedLimit = __webpack_require__(438);

var _ListUnorderedLimit2 = _interopRequireDefault(_ListUnorderedLimit);

var _WizardStepDownloadList = __webpack_require__(439);

var _WizardStepDownloadList2 = _interopRequireDefault(_WizardStepDownloadList);

var _WizardStepConfirmation = __webpack_require__(440);

var _WizardStepConfirmation2 = _interopRequireDefault(_WizardStepConfirmation);

var _BusinessCard = __webpack_require__(441);

var _BusinessCard2 = _interopRequireDefault(_BusinessCard);

var _CardArticle = __webpack_require__(442);

var _CardArticle2 = _interopRequireDefault(_CardArticle);

var _CardBase = __webpack_require__(195);

var _CardBase2 = _interopRequireDefault(_CardBase);

var _CardDownload = __webpack_require__(443);

var _CardDownload2 = _interopRequireDefault(_CardDownload);

var _CardProduct = __webpack_require__(445);

var _CardProduct2 = _interopRequireDefault(_CardProduct);

var _Flyout = __webpack_require__(446);

var _Flyout2 = _interopRequireDefault(_Flyout);

var _FooterNavigationCategory = __webpack_require__(447);

var _FooterNavigationCategory2 = _interopRequireDefault(_FooterNavigationCategory);

var _HeroHeading = __webpack_require__(448);

var _HeroHeading2 = _interopRequireDefault(_HeroHeading);

var _IconButton = __webpack_require__(449);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _InPageNotification = __webpack_require__(450);

var _InPageNotification2 = _interopRequireDefault(_InPageNotification);

var _MainNavigation = __webpack_require__(451);

var _MainNavigation2 = _interopRequireDefault(_MainNavigation);

var _Modal = __webpack_require__(452);

var _Modal2 = _interopRequireDefault(_Modal);

var _ModalButton = __webpack_require__(453);

var _ModalButton2 = _interopRequireDefault(_ModalButton);

var _ModalWizard = __webpack_require__(454);

var _ModalWizard2 = _interopRequireDefault(_ModalWizard);

var _Product = __webpack_require__(455);

var _Product2 = _interopRequireDefault(_Product);

var _SearchBar = __webpack_require__(456);

var _SearchBar2 = _interopRequireDefault(_SearchBar);

var _SearchBarPage = __webpack_require__(457);

var _SearchBarPage2 = _interopRequireDefault(_SearchBarPage);

var _SearchResult = __webpack_require__(458);

var _SearchResult2 = _interopRequireDefault(_SearchResult);

var _SocialNav = __webpack_require__(460);

var _SocialNav2 = _interopRequireDefault(_SocialNav);

var _SocialSharing = __webpack_require__(461);

var _SocialSharing2 = _interopRequireDefault(_SocialSharing);

var _SubNavigationItem = __webpack_require__(463);

var _SubNavigationItem2 = _interopRequireDefault(_SubNavigationItem);

var _SysNav = __webpack_require__(464);

var _SysNav2 = _interopRequireDefault(_SysNav);

var _Tab = __webpack_require__(465);

var _Tab2 = _interopRequireDefault(_Tab);

var _TabTable = __webpack_require__(466);

var _TabTable2 = _interopRequireDefault(_TabTable);

var _TabTableRow = __webpack_require__(467);

var _TabTableRow2 = _interopRequireDefault(_TabTableRow);

var _Tabs = __webpack_require__(468);

var _Tabs2 = _interopRequireDefault(_Tabs);

var _TooltipToggle = __webpack_require__(469);

var _TooltipToggle2 = _interopRequireDefault(_TooltipToggle);

var _FlyoutSection = __webpack_require__(470);

var _FlyoutSection2 = _interopRequireDefault(_FlyoutSection);

var _ListSection = __webpack_require__(471);

var _ListSection2 = _interopRequireDefault(_ListSection);

var _MainNavigationItem = __webpack_require__(478);

var _MainNavigationItem2 = _interopRequireDefault(_MainNavigationItem);

var _FilterCategory = __webpack_require__(479);

var _FilterCategory2 = _interopRequireDefault(_FilterCategory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 416 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _autoComplete = __webpack_require__(417);

var _autoComplete2 = _interopRequireDefault(_autoComplete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _autoComplete2.default;

/***/ }),
/* 417 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(6);

var _viewport = __webpack_require__(2);

var _viewport2 = _interopRequireDefault(_viewport);

var _autoCompleteVue = __webpack_require__(418);

var _autoCompleteVue2 = _interopRequireDefault(_autoCompleteVue);

var _escapeStringRegexp = __webpack_require__(194);

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
/* 418 */
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
/* 419 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ArticleAuthor_vue_vue_type_template_id_ff643f0e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(211);
/* harmony import */ var _ArticleAuthor_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ArticleAuthor_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ArticleAuthor_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _ArticleAuthor_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ArticleAuthor_vue_vue_type_template_id_ff643f0e___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _ArticleAuthor_vue_vue_type_template_id_ff643f0e___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 420 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Format = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _defaults = __webpack_require__(5);

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
/* 421 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ArticleCtas_vue_vue_type_template_id_3e24f8e5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(212);
/* harmony import */ var _ArticleCtas_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ArticleCtas_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ArticleCtas_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _ArticleCtas_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ArticleCtas_vue_vue_type_template_id_3e24f8e5___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _ArticleCtas_vue_vue_type_template_id_3e24f8e5___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 422 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ArticleDescriptionList_vue_vue_type_template_id_28a52abe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(213);
/* harmony import */ var _ArticleDescriptionList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(46);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ArticleDescriptionList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ArticleDescriptionList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _ArticleDescriptionList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ArticleDescriptionList_vue_vue_type_template_id_28a52abe___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _ArticleDescriptionList_vue_vue_type_template_id_28a52abe___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 423 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ArticleImage_vue_vue_type_template_id_2bb90fa4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(214);
/* harmony import */ var _ArticleImage_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ArticleImage_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ArticleImage_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _ArticleImage_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ArticleImage_vue_vue_type_template_id_2bb90fa4___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _ArticleImage_vue_vue_type_template_id_2bb90fa4___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 424 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ArticleIntro_vue_vue_type_template_id_3efc9bf0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(215);
/* harmony import */ var _ArticleIntro_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ArticleIntro_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ArticleIntro_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _ArticleIntro_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ArticleIntro_vue_vue_type_template_id_3efc9bf0___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _ArticleIntro_vue_vue_type_template_id_3efc9bf0___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 425 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ActicleTable_vue_vue_type_template_id_b3f9c430___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(216);
/* harmony import */ var _ActicleTable_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(52);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ActicleTable_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ActicleTable_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _ActicleTable_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ActicleTable_vue_vue_type_template_id_b3f9c430___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _ActicleTable_vue_vue_type_template_id_b3f9c430___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 426 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ArticleVideo_vue_vue_type_template_id_9d93e69e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(217);
/* harmony import */ var _ArticleVideo_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ArticleVideo_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ArticleVideo_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _ArticleVideo_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ArticleVideo_vue_vue_type_template_id_9d93e69e___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _ArticleVideo_vue_vue_type_template_id_9d93e69e___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 427 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ArticleText_vue_vue_type_template_id_dedb64e4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(218);
/* harmony import */ var _ArticleText_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ArticleText_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ArticleText_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _ArticleText_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ArticleText_vue_vue_type_template_id_dedb64e4___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _ArticleText_vue_vue_type_template_id_dedb64e4___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 428 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BlockIcon_vue_vue_type_template_id_79553b1e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(219);
/* harmony import */ var _BlockIcon_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _BlockIcon_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _BlockIcon_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _BlockIcon_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BlockIcon_vue_vue_type_template_id_79553b1e___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _BlockIcon_vue_vue_type_template_id_79553b1e___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 429 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Brand_vue_vue_type_template_id_9ad64aa0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(220);
/* harmony import */ var _Brand_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Brand_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Brand_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _Brand_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Brand_vue_vue_type_template_id_9ad64aa0___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _Brand_vue_vue_type_template_id_9ad64aa0___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 430 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Color_vue_vue_type_template_id_75ccd30a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(221);
/* harmony import */ var _Color_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Color_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Color_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _Color_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Color_vue_vue_type_template_id_75ccd30a___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _Color_vue_vue_type_template_id_75ccd30a___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 431 */
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
/* 432 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContentBlock_vue_vue_type_template_id_5aa84906___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(222);
/* harmony import */ var _ContentBlock_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ContentBlock_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ContentBlock_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _ContentBlock_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ContentBlock_vue_vue_type_template_id_5aa84906___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _ContentBlock_vue_vue_type_template_id_5aa84906___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 433 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContentToggle_vue_vue_type_template_id_5d65cb48___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(223);
/* harmony import */ var _ContentToggle_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ContentToggle_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ContentToggle_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _ContentToggle_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ContentToggle_vue_vue_type_template_id_5d65cb48___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _ContentToggle_vue_vue_type_template_id_5d65cb48___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 434 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CtaBlock_vue_vue_type_template_id_317cc2c2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(224);
/* harmony import */ var _CtaBlock_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(68);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _CtaBlock_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _CtaBlock_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _CtaBlock_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CtaBlock_vue_vue_type_template_id_317cc2c2___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _CtaBlock_vue_vue_type_template_id_317cc2c2___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 435 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListUnordered_vue_vue_type_template_id_63e6dde0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(225);
/* harmony import */ var _ListUnordered_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(70);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ListUnordered_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ListUnordered_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _ListUnordered_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListUnordered_vue_vue_type_template_id_63e6dde0___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _ListUnordered_vue_vue_type_template_id_63e6dde0___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 436 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HeaderBlock_vue_vue_type_template_id_e613d334___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(226);
/* harmony import */ var _HeaderBlock_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HeaderBlock_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HeaderBlock_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _HeaderBlock_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HeaderBlock_vue_vue_type_template_id_e613d334___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _HeaderBlock_vue_vue_type_template_id_e613d334___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 437 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FooterBlock_vue_vue_type_template_id_b2cc3b04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(227);
/* harmony import */ var _FooterBlock_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(74);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _FooterBlock_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _FooterBlock_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _FooterBlock_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FooterBlock_vue_vue_type_template_id_b2cc3b04___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _FooterBlock_vue_vue_type_template_id_b2cc3b04___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 438 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListUnorderedLimit_vue_vue_type_template_id_40f54f19___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(228);
/* harmony import */ var _ListUnorderedLimit_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ListUnorderedLimit_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ListUnorderedLimit_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _ListUnorderedLimit_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListUnorderedLimit_vue_vue_type_template_id_40f54f19___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _ListUnorderedLimit_vue_vue_type_template_id_40f54f19___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 439 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WizardStepDownloadList_vue_vue_type_template_id_50c30c1f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(229);
/* harmony import */ var _WizardStepDownloadList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(78);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _WizardStepDownloadList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _WizardStepDownloadList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _WizardStepDownloadList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WizardStepDownloadList_vue_vue_type_template_id_50c30c1f___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _WizardStepDownloadList_vue_vue_type_template_id_50c30c1f___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 440 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WizardStepConfirmation_vue_vue_type_template_id_606af002___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(230);
/* harmony import */ var _WizardStepConfirmation_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(80);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _WizardStepConfirmation_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _WizardStepConfirmation_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _WizardStepConfirmation_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WizardStepConfirmation_vue_vue_type_template_id_606af002___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _WizardStepConfirmation_vue_vue_type_template_id_606af002___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 441 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BusinessCard_vue_vue_type_template_id_dd7b3aa6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(231);
/* harmony import */ var _BusinessCard_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _BusinessCard_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _BusinessCard_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _BusinessCard_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BusinessCard_vue_vue_type_template_id_dd7b3aa6___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _BusinessCard_vue_vue_type_template_id_dd7b3aa6___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 442 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardArticle_vue_vue_type_template_id_575aa8ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(233);
/* harmony import */ var _CardArticle_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(84);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _CardArticle_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _CardArticle_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _CardArticle_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CardArticle_vue_vue_type_template_id_575aa8ea___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _CardArticle_vue_vue_type_template_id_575aa8ea___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 443 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardDownload_vue_vue_type_template_id_794fcfe6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(234);
/* harmony import */ var _CardDownload_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(88);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _CardDownload_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _CardDownload_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _CardDownload_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CardDownload_vue_vue_type_template_id_794fcfe6___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _CardDownload_vue_vue_type_template_id_794fcfe6___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 444 */
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

var _uuid = __webpack_require__(190);

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(189)))

/***/ }),
/* 445 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _CardProduct_vue_vue_type_template_id_a4be629e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(235);
/* harmony import */ var _CardProduct_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _CardProduct_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _CardProduct_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _CardProduct_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _CardProduct_vue_vue_type_template_id_a4be629e___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _CardProduct_vue_vue_type_template_id_a4be629e___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 446 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Flyout_vue_vue_type_template_id_2b4f0b92___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(236);
/* harmony import */ var _Flyout_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Flyout_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Flyout_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _Flyout_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Flyout_vue_vue_type_template_id_2b4f0b92___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _Flyout_vue_vue_type_template_id_2b4f0b92___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 447 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FooterNavigationCategory_vue_vue_type_template_id_46f6559c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(237);
/* harmony import */ var _FooterNavigationCategory_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _FooterNavigationCategory_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _FooterNavigationCategory_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _FooterNavigationCategory_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FooterNavigationCategory_vue_vue_type_template_id_46f6559c___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _FooterNavigationCategory_vue_vue_type_template_id_46f6559c___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 448 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HeroHeading_vue_vue_type_template_id_40a46b19___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(238);
/* harmony import */ var _HeroHeading_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HeroHeading_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HeroHeading_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _HeroHeading_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HeroHeading_vue_vue_type_template_id_40a46b19___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _HeroHeading_vue_vue_type_template_id_40a46b19___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 449 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IconButton_vue_vue_type_template_id_c977c244___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(239);
/* harmony import */ var _IconButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(98);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _IconButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _IconButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _IconButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _IconButton_vue_vue_type_template_id_c977c244___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _IconButton_vue_vue_type_template_id_c977c244___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 450 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InPageNotification_vue_vue_type_template_id_6a12ea88___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(240);
/* harmony import */ var _InPageNotification_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(100);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _InPageNotification_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _InPageNotification_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _InPageNotification_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InPageNotification_vue_vue_type_template_id_6a12ea88___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _InPageNotification_vue_vue_type_template_id_6a12ea88___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 451 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MainNavigation_vue_vue_type_template_id_057d2996___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(241);
/* harmony import */ var _MainNavigation_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(102);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _MainNavigation_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _MainNavigation_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _MainNavigation_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MainNavigation_vue_vue_type_template_id_057d2996___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _MainNavigation_vue_vue_type_template_id_057d2996___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 452 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Modal_vue_vue_type_template_id_788cc4f2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(242);
/* harmony import */ var _Modal_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(104);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Modal_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Modal_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _Modal_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Modal_vue_vue_type_template_id_788cc4f2___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _Modal_vue_vue_type_template_id_788cc4f2___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 453 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ModalButton_vue_vue_type_template_id_02277652___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(243);
/* harmony import */ var _ModalButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(106);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ModalButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ModalButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _ModalButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ModalButton_vue_vue_type_template_id_02277652___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _ModalButton_vue_vue_type_template_id_02277652___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 454 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ModalWizard_vue_vue_type_template_id_db10b192___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(244);
/* harmony import */ var _ModalWizard_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(108);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ModalWizard_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ModalWizard_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _ModalWizard_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ModalWizard_vue_vue_type_template_id_db10b192___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _ModalWizard_vue_vue_type_template_id_db10b192___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 455 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Product_vue_vue_type_template_id_028c1ee6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(245);
/* harmony import */ var _Product_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(110);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Product_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Product_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _Product_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Product_vue_vue_type_template_id_028c1ee6___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _Product_vue_vue_type_template_id_028c1ee6___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 456 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SearchBar_vue_vue_type_template_id_dbaab0ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(246);
/* harmony import */ var _SearchBar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(112);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _SearchBar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _SearchBar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _SearchBar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SearchBar_vue_vue_type_template_id_dbaab0ea___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _SearchBar_vue_vue_type_template_id_dbaab0ea___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 457 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SearchBarPage_vue_vue_type_template_id_2320f0e3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(247);
/* harmony import */ var _SearchBarPage_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(114);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _SearchBarPage_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _SearchBarPage_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _SearchBarPage_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SearchBarPage_vue_vue_type_template_id_2320f0e3___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _SearchBarPage_vue_vue_type_template_id_2320f0e3___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 458 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SearchResult_vue_vue_type_template_id_6b5f934e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(248);
/* harmony import */ var _SearchResult_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(116);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _SearchResult_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _SearchResult_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _SearchResult_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SearchResult_vue_vue_type_template_id_6b5f934e___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _SearchResult_vue_vue_type_template_id_6b5f934e___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 459 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = mark;

var _escapeStringRegexp = __webpack_require__(194);

var _escapeStringRegexp2 = _interopRequireDefault(_escapeStringRegexp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function mark(text, terms) {
    var termsRE = new RegExp('(' + (0, _escapeStringRegexp2.default)(terms).split(/\s/).join('|') + ')', 'gi');

    return text.replace(termsRE, '<mark>$1</mark>');
}

/***/ }),
/* 460 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SocialNav_vue_vue_type_template_id_d070a5a0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(249);
/* harmony import */ var _SocialNav_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(118);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _SocialNav_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _SocialNav_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _SocialNav_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SocialNav_vue_vue_type_template_id_d070a5a0___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _SocialNav_vue_vue_type_template_id_d070a5a0___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 461 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SocialSharing_vue_vue_type_template_id_1fc9c9d9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(250);
/* harmony import */ var _SocialSharing_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(120);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _SocialSharing_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _SocialSharing_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _SocialSharing_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SocialSharing_vue_vue_type_template_id_1fc9c9d9___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _SocialSharing_vue_vue_type_template_id_1fc9c9d9___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 462 */
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
/* 463 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SubNavigationItem_vue_vue_type_template_id_629f7bb0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(251);
/* harmony import */ var _SubNavigationItem_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(122);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _SubNavigationItem_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _SubNavigationItem_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _SubNavigationItem_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SubNavigationItem_vue_vue_type_template_id_629f7bb0___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _SubNavigationItem_vue_vue_type_template_id_629f7bb0___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 464 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SysNav_vue_vue_type_template_id_24c4cb75___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(252);
/* harmony import */ var _SysNav_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(124);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _SysNav_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _SysNav_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _SysNav_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SysNav_vue_vue_type_template_id_24c4cb75___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _SysNav_vue_vue_type_template_id_24c4cb75___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 465 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tab_vue_vue_type_template_id_2f003bbe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(253);
/* harmony import */ var _Tab_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(126);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Tab_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Tab_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _Tab_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Tab_vue_vue_type_template_id_2f003bbe___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _Tab_vue_vue_type_template_id_2f003bbe___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 466 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TabTable_vue_vue_type_template_id_2bf1abbe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(254);
/* harmony import */ var _TabTable_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(128);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _TabTable_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _TabTable_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _TabTable_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TabTable_vue_vue_type_template_id_2bf1abbe___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _TabTable_vue_vue_type_template_id_2bf1abbe___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 467 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TabTableRow_vue_vue_type_template_id_384c1ee9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(255);
/* harmony import */ var _TabTableRow_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(130);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _TabTableRow_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _TabTableRow_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _TabTableRow_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TabTableRow_vue_vue_type_template_id_384c1ee9___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _TabTableRow_vue_vue_type_template_id_384c1ee9___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 468 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tabs_vue_vue_type_template_id_593bc094___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(256);
/* harmony import */ var _Tabs_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(132);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Tabs_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Tabs_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _Tabs_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Tabs_vue_vue_type_template_id_593bc094___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _Tabs_vue_vue_type_template_id_593bc094___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 469 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TooltipToggle_vue_vue_type_template_id_79ed5228___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(257);
/* harmony import */ var _TooltipToggle_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(134);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _TooltipToggle_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _TooltipToggle_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _TooltipToggle_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TooltipToggle_vue_vue_type_template_id_79ed5228___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _TooltipToggle_vue_vue_type_template_id_79ed5228___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 470 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FlyoutSection_vue_vue_type_template_id_76c88c9e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(258);
/* harmony import */ var _FlyoutSection_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(136);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _FlyoutSection_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _FlyoutSection_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _FlyoutSection_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FlyoutSection_vue_vue_type_template_id_76c88c9e___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _FlyoutSection_vue_vue_type_template_id_76c88c9e___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 471 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListSection_vue_vue_type_template_id_1614c642___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(259);
/* harmony import */ var _ListSection_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(138);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ListSection_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ListSection_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _ListSection_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListSection_vue_vue_type_template_id_1614c642___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _ListSection_vue_vue_type_template_id_1614c642___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 472 */
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
/* 473 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getFilteredCardsFromActiveFilterCategories = getFilteredCardsFromActiveFilterCategories;

var _getActiveFiltersForCategory = __webpack_require__(474);

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
/* 474 */
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
/* 475 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.updateActiveFilterCategories = updateActiveFilterCategories;

var _findIndexInActiveFilterCategories = __webpack_require__(476);

var _isFilterCategoryActive = __webpack_require__(477);

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
/* 476 */
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
/* 477 */
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
/* 478 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MainNavigationItem_vue_vue_type_template_id_00029767___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(260);
/* harmony import */ var _MainNavigationItem_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(140);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _MainNavigationItem_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _MainNavigationItem_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _MainNavigationItem_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MainNavigationItem_vue_vue_type_template_id_00029767___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _MainNavigationItem_vue_vue_type_template_id_00029767___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 479 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FilterCategory_vue_vue_type_template_id_5bbc307c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(261);
/* harmony import */ var _FilterCategory_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(142);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _FilterCategory_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _FilterCategory_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _FilterCategory_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FilterCategory_vue_vue_type_template_id_5bbc307c___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _FilterCategory_vue_vue_type_template_id_5bbc307c___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 480 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LocaleSelector = undefined;

var _localeSelector = __webpack_require__(481);

Object.defineProperty(exports, 'LocaleSelector', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_localeSelector).default;
  }
});

var _ArticleContent = __webpack_require__(484);

var _ArticleContent2 = _interopRequireDefault(_ArticleContent);

var _ArticleHeader = __webpack_require__(485);

var _ArticleHeader2 = _interopRequireDefault(_ArticleHeader);

var _Brands = __webpack_require__(486);

var _Brands2 = _interopRequireDefault(_Brands);

var _Colors = __webpack_require__(487);

var _Colors2 = _interopRequireDefault(_Colors);

var _ContentCover = __webpack_require__(488);

var _ContentCover2 = _interopRequireDefault(_ContentCover);

var _ContentGeneral = __webpack_require__(489);

var _ContentGeneral2 = _interopRequireDefault(_ContentGeneral);

var _ContentHighlight = __webpack_require__(490);

var _ContentHighlight2 = _interopRequireDefault(_ContentHighlight);

var _HeroArticle = __webpack_require__(491);

var _HeroArticle2 = _interopRequireDefault(_HeroArticle);

var _HeroBasic = __webpack_require__(492);

var _HeroBasic2 = _interopRequireDefault(_HeroBasic);

var _HeroCover = __webpack_require__(493);

var _HeroCover2 = _interopRequireDefault(_HeroCover);

var _HeroHomepage = __webpack_require__(494);

var _HeroHomepage2 = _interopRequireDefault(_HeroHomepage);

var _HeroProduct = __webpack_require__(496);

var _HeroProduct2 = _interopRequireDefault(_HeroProduct);

var _JobBoardFrame = __webpack_require__(497);

var _JobBoardFrame2 = _interopRequireDefault(_JobBoardFrame);

var _Overview = __webpack_require__(498);

var _Overview2 = _interopRequireDefault(_Overview);

var _OverviewUbr = __webpack_require__(499);

var _OverviewUbr2 = _interopRequireDefault(_OverviewUbr);

var _PageFooter = __webpack_require__(500);

var _PageFooter2 = _interopRequireDefault(_PageFooter);

var _PageHeader = __webpack_require__(501);

var _PageHeader2 = _interopRequireDefault(_PageHeader);

var _SearchResults = __webpack_require__(502);

var _SearchResults2 = _interopRequireDefault(_SearchResults);

var _SubNavigation = __webpack_require__(503);

var _SubNavigation2 = _interopRequireDefault(_SubNavigation);

var _TabbedContent = __webpack_require__(504);

var _TabbedContent2 = _interopRequireDefault(_TabbedContent);

var _TabbedTable = __webpack_require__(505);

var _TabbedTable2 = _interopRequireDefault(_TabbedTable);

var _TableCompare = __webpack_require__(506);

var _TableCompare2 = _interopRequireDefault(_TableCompare);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 481 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _localeSelector = __webpack_require__(482);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _localeSelector.LocaleSelector;
  }
});

/***/ }),
/* 482 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.LocaleSelector = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(6);

var _localeSelectorVue = __webpack_require__(483);

var _localeSelectorVue2 = _interopRequireDefault(_localeSelectorVue);

var _events = __webpack_require__(4);

var _events2 = _interopRequireDefault(_events);

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
                var dataType = _events2.default.gtm.dataType.languageChange;
                if (this.type.includes('country')) {
                    dataType = _events2.default.gtm.dataType.countryChange;
                }

                this.$emitPublic(_events2.default.gtm.change, {
                    dataType: dataType,
                    data: {
                        acceptLanguage: this.acceptLanguage,
                        fromIsoCode: this.currentIsoCode,

                        fromLanguage: this.currentIsoCode,
                        pathname: window.location.pathname,
                        toIsoCode: code,

                        toLanguage: code
                    }
                });
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
    }, {
        key: "acceptLanguage",
        get: function get() {
            var headers = this.$store.state.request.headers;

            if (headers === undefined) {
                return 'no-accept-language';
            }
            if (!headers['accept-language']) {
                return 'no-accept-language';
            }
            return headers['accept-language'];
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
    name: 'LocaleSelector'
})], LocaleSelector);
exports.LocaleSelector = LocaleSelector;

/***/ }),
/* 483 */
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
/* 484 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ArticleContent_vue_vue_type_template_id_758ecb4c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(262);
/* harmony import */ var _ArticleContent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(144);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ArticleContent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ArticleContent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _ArticleContent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ArticleContent_vue_vue_type_template_id_758ecb4c___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _ArticleContent_vue_vue_type_template_id_758ecb4c___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 485 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ArticleHeader_vue_vue_type_template_id_5a2590fc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(263);
/* harmony import */ var _ArticleHeader_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(146);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ArticleHeader_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ArticleHeader_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _ArticleHeader_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ArticleHeader_vue_vue_type_template_id_5a2590fc___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _ArticleHeader_vue_vue_type_template_id_5a2590fc___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 486 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Brands_vue_vue_type_template_id_b68370da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(264);
/* harmony import */ var _Brands_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(148);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Brands_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Brands_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _Brands_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Brands_vue_vue_type_template_id_b68370da___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _Brands_vue_vue_type_template_id_b68370da___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 487 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Colors_vue_vue_type_template_id_bc1e3b10___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(265);
/* harmony import */ var _Colors_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(150);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Colors_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Colors_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _Colors_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Colors_vue_vue_type_template_id_bc1e3b10___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _Colors_vue_vue_type_template_id_bc1e3b10___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 488 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContentCover_vue_vue_type_template_id_6d708e82___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(266);
/* harmony import */ var _ContentCover_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(152);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ContentCover_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ContentCover_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _ContentCover_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ContentCover_vue_vue_type_template_id_6d708e82___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _ContentCover_vue_vue_type_template_id_6d708e82___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 489 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContentGeneral_vue_vue_type_template_id_3b4f0908___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(267);
/* harmony import */ var _ContentGeneral_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(154);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ContentGeneral_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ContentGeneral_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _ContentGeneral_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ContentGeneral_vue_vue_type_template_id_3b4f0908___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _ContentGeneral_vue_vue_type_template_id_3b4f0908___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 490 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContentHighlight_vue_vue_type_template_id_b8e8a288___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(268);
/* harmony import */ var _ContentHighlight_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(156);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ContentHighlight_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ContentHighlight_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _ContentHighlight_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ContentHighlight_vue_vue_type_template_id_b8e8a288___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _ContentHighlight_vue_vue_type_template_id_b8e8a288___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 491 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HeroArticle_vue_vue_type_template_id_57bd7bb3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(269);
/* harmony import */ var _HeroArticle_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(158);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HeroArticle_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HeroArticle_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _HeroArticle_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HeroArticle_vue_vue_type_template_id_57bd7bb3___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _HeroArticle_vue_vue_type_template_id_57bd7bb3___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 492 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HeroBasic_vue_vue_type_template_id_184ced16___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(270);
/* harmony import */ var _HeroBasic_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(160);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HeroBasic_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HeroBasic_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _HeroBasic_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HeroBasic_vue_vue_type_template_id_184ced16___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _HeroBasic_vue_vue_type_template_id_184ced16___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 493 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HeroCover_vue_vue_type_template_id_90e77b04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(271);
/* harmony import */ var _HeroCover_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(162);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HeroCover_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HeroCover_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _HeroCover_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HeroCover_vue_vue_type_template_id_90e77b04___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _HeroCover_vue_vue_type_template_id_90e77b04___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 494 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HeroHomepage_vue_vue_type_template_id_6245c409___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(272);
/* harmony import */ var _HeroHomepage_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(164);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HeroHomepage_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HeroHomepage_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _HeroHomepage_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HeroHomepage_vue_vue_type_template_id_6245c409___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _HeroHomepage_vue_vue_type_template_id_6245c409___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 495 */
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
/* 496 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HeroProduct_vue_vue_type_template_id_81cb459a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(273);
/* harmony import */ var _HeroProduct_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(166);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HeroProduct_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HeroProduct_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _HeroProduct_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HeroProduct_vue_vue_type_template_id_81cb459a___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _HeroProduct_vue_vue_type_template_id_81cb459a___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 497 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _JobBoardFrame_vue_vue_type_template_id_16cbdbc1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(274);
/* harmony import */ var _JobBoardFrame_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(168);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _JobBoardFrame_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _JobBoardFrame_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _JobBoardFrame_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _JobBoardFrame_vue_vue_type_template_id_16cbdbc1___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _JobBoardFrame_vue_vue_type_template_id_16cbdbc1___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 498 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Overview_vue_vue_type_template_id_75ab19c5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(275);
/* harmony import */ var _Overview_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(170);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Overview_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Overview_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _Overview_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Overview_vue_vue_type_template_id_75ab19c5___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _Overview_vue_vue_type_template_id_75ab19c5___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 499 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OverviewUbr_vue_vue_type_template_id_4ad8a0a5___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(276);
/* harmony import */ var _OverviewUbr_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(172);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _OverviewUbr_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _OverviewUbr_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _OverviewUbr_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OverviewUbr_vue_vue_type_template_id_4ad8a0a5___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _OverviewUbr_vue_vue_type_template_id_4ad8a0a5___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 500 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PageFooter_vue_vue_type_template_id_470261b2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(277);
/* harmony import */ var _PageFooter_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(174);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _PageFooter_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _PageFooter_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _PageFooter_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PageFooter_vue_vue_type_template_id_470261b2___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _PageFooter_vue_vue_type_template_id_470261b2___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 501 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PageHeader_vue_vue_type_template_id_7c22e5e6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(278);
/* harmony import */ var _PageHeader_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(176);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _PageHeader_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _PageHeader_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _PageHeader_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PageHeader_vue_vue_type_template_id_7c22e5e6___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _PageHeader_vue_vue_type_template_id_7c22e5e6___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 502 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SearchResults_vue_vue_type_template_id_38b659d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(279);
/* harmony import */ var _SearchResults_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(178);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _SearchResults_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _SearchResults_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _SearchResults_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SearchResults_vue_vue_type_template_id_38b659d6___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _SearchResults_vue_vue_type_template_id_38b659d6___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 503 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SubNavigation_vue_vue_type_template_id_accb344e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(280);
/* harmony import */ var _SubNavigation_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(180);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _SubNavigation_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _SubNavigation_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _SubNavigation_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SubNavigation_vue_vue_type_template_id_accb344e___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _SubNavigation_vue_vue_type_template_id_accb344e___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 504 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TabbedContent_vue_vue_type_template_id_55a7135d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(281);
/* harmony import */ var _TabbedContent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(182);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _TabbedContent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _TabbedContent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _TabbedContent_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TabbedContent_vue_vue_type_template_id_55a7135d___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _TabbedContent_vue_vue_type_template_id_55a7135d___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 505 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TabbedTable_vue_vue_type_template_id_b23263b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(282);
/* harmony import */ var _TabbedTable_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(184);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _TabbedTable_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _TabbedTable_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _TabbedTable_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TabbedTable_vue_vue_type_template_id_b23263b6___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _TabbedTable_vue_vue_type_template_id_b23263b6___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 506 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TableCompare_vue_vue_type_template_id_2668b994___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(283);
/* harmony import */ var _TableCompare_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(186);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _TableCompare_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _TableCompare_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _TableCompare_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TableCompare_vue_vue_type_template_id_2668b994___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _TableCompare_vue_vue_type_template_id_2668b994___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 507 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 508 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ClickOutside = _vue2.default.directive('ClickOutside', {
    bind: function bind(el, binding, vnode) {
        el.clickOutsideEvent = function (event) {
            if (!(el === event.target || el.contains(event.target))) {
                if (vnode.context) {
                    vnode.context[binding.expression](event);
                }
            }
        };
        document.body.addEventListener('click', el.clickOutsideEvent);
    },
    unbind: function unbind(el) {
        document.body.removeEventListener('click', el.clickOutsideEvent);
    }
});
exports.default = ClickOutside;

/***/ })
/******/ ])});;
//# sourceMappingURL=components.js.map