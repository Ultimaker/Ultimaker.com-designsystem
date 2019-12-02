define("components", ["vue","lodash/debounce","core-js/modules/es6.typed.array-buffer","core-js/modules/es6.typed.data-view","core-js/modules/es6.typed.int8-array","core-js/modules/es6.typed.uint8-array","core-js/modules/es6.typed.uint8-clamped-array","core-js/modules/es6.typed.int16-array","core-js/modules/es6.typed.uint16-array","core-js/modules/es6.typed.int32-array","core-js/modules/es6.typed.uint32-array","core-js/modules/es6.typed.float32-array","core-js/modules/es6.typed.float64-array","core-js/modules/es6.map","core-js/modules/es6.set","core-js/modules/es6.weak-map","core-js/modules/es6.weak-set","core-js/modules/es6.reflect.apply","core-js/modules/es6.reflect.construct","core-js/modules/es6.reflect.define-property","core-js/modules/es6.reflect.delete-property","core-js/modules/es6.reflect.get","core-js/modules/es6.reflect.get-own-property-descriptor","core-js/modules/es6.reflect.get-prototype-of","core-js/modules/es6.reflect.has","core-js/modules/es6.reflect.is-extensible","core-js/modules/es6.reflect.own-keys","core-js/modules/es6.reflect.prevent-extensions","core-js/modules/es6.reflect.set","core-js/modules/es6.reflect.set-prototype-of","core-js/modules/es6.promise","core-js/modules/es6.symbol","core-js/modules/es6.object.freeze","core-js/modules/es6.object.seal","core-js/modules/es6.object.prevent-extensions","core-js/modules/es6.object.is-frozen","core-js/modules/es6.object.is-sealed","core-js/modules/es6.object.is-extensible","core-js/modules/es6.object.get-own-property-descriptor","core-js/modules/es6.object.get-prototype-of","core-js/modules/es6.object.keys","core-js/modules/es6.object.get-own-property-names","core-js/modules/es6.object.assign","core-js/modules/es6.object.is","core-js/modules/es6.object.set-prototype-of","core-js/modules/es6.function.name","core-js/modules/es6.string.raw","core-js/modules/es6.string.from-code-point","core-js/modules/es6.string.code-point-at","core-js/modules/es6.string.repeat","core-js/modules/es6.string.starts-with","core-js/modules/es6.string.ends-with","core-js/modules/es6.string.includes","core-js/modules/es6.regexp.flags","core-js/modules/es6.regexp.match","core-js/modules/es6.regexp.replace","core-js/modules/es6.regexp.split","core-js/modules/es6.regexp.search","core-js/modules/es6.array.from","core-js/modules/es6.array.of","core-js/modules/es6.array.copy-within","core-js/modules/es6.array.find","core-js/modules/es6.array.find-index","core-js/modules/es6.array.fill","core-js/modules/es6.array.iterator","core-js/modules/es6.number.is-finite","core-js/modules/es6.number.is-integer","core-js/modules/es6.number.is-safe-integer","core-js/modules/es6.number.is-nan","core-js/modules/es6.number.epsilon","core-js/modules/es6.number.min-safe-integer","core-js/modules/es6.number.max-safe-integer","core-js/modules/es6.math.acosh","core-js/modules/es6.math.asinh","core-js/modules/es6.math.atanh","core-js/modules/es6.math.cbrt","core-js/modules/es6.math.clz32","core-js/modules/es6.math.cosh","core-js/modules/es6.math.expm1","core-js/modules/es6.math.fround","core-js/modules/es6.math.hypot","core-js/modules/es6.math.imul","core-js/modules/es6.math.log1p","core-js/modules/es6.math.log10","core-js/modules/es6.math.log2","core-js/modules/es6.math.sign","core-js/modules/es6.math.sinh","core-js/modules/es6.math.tanh","core-js/modules/es6.math.trunc","core-js/modules/es7.array.includes","core-js/modules/es7.object.values","core-js/modules/es7.object.entries","core-js/modules/es7.object.get-own-property-descriptors","core-js/modules/es7.string.pad-start","core-js/modules/es7.string.pad-end","core-js/modules/web.timers","core-js/modules/web.immediate","core-js/modules/web.dom.iterable","vue-property-decorator"], function(__WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__101__, __WEBPACK_EXTERNAL_MODULE__103__, __WEBPACK_EXTERNAL_MODULE__104__, __WEBPACK_EXTERNAL_MODULE__105__, __WEBPACK_EXTERNAL_MODULE__106__, __WEBPACK_EXTERNAL_MODULE__107__, __WEBPACK_EXTERNAL_MODULE__108__, __WEBPACK_EXTERNAL_MODULE__109__, __WEBPACK_EXTERNAL_MODULE__110__, __WEBPACK_EXTERNAL_MODULE__111__, __WEBPACK_EXTERNAL_MODULE__112__, __WEBPACK_EXTERNAL_MODULE__113__, __WEBPACK_EXTERNAL_MODULE__114__, __WEBPACK_EXTERNAL_MODULE__115__, __WEBPACK_EXTERNAL_MODULE__116__, __WEBPACK_EXTERNAL_MODULE__117__, __WEBPACK_EXTERNAL_MODULE__118__, __WEBPACK_EXTERNAL_MODULE__119__, __WEBPACK_EXTERNAL_MODULE__120__, __WEBPACK_EXTERNAL_MODULE__121__, __WEBPACK_EXTERNAL_MODULE__122__, __WEBPACK_EXTERNAL_MODULE__123__, __WEBPACK_EXTERNAL_MODULE__124__, __WEBPACK_EXTERNAL_MODULE__125__, __WEBPACK_EXTERNAL_MODULE__126__, __WEBPACK_EXTERNAL_MODULE__127__, __WEBPACK_EXTERNAL_MODULE__128__, __WEBPACK_EXTERNAL_MODULE__129__, __WEBPACK_EXTERNAL_MODULE__130__, __WEBPACK_EXTERNAL_MODULE__131__, __WEBPACK_EXTERNAL_MODULE__132__, __WEBPACK_EXTERNAL_MODULE__133__, __WEBPACK_EXTERNAL_MODULE__134__, __WEBPACK_EXTERNAL_MODULE__135__, __WEBPACK_EXTERNAL_MODULE__136__, __WEBPACK_EXTERNAL_MODULE__137__, __WEBPACK_EXTERNAL_MODULE__138__, __WEBPACK_EXTERNAL_MODULE__139__, __WEBPACK_EXTERNAL_MODULE__140__, __WEBPACK_EXTERNAL_MODULE__141__, __WEBPACK_EXTERNAL_MODULE__142__, __WEBPACK_EXTERNAL_MODULE__143__, __WEBPACK_EXTERNAL_MODULE__144__, __WEBPACK_EXTERNAL_MODULE__145__, __WEBPACK_EXTERNAL_MODULE__146__, __WEBPACK_EXTERNAL_MODULE__147__, __WEBPACK_EXTERNAL_MODULE__148__, __WEBPACK_EXTERNAL_MODULE__149__, __WEBPACK_EXTERNAL_MODULE__150__, __WEBPACK_EXTERNAL_MODULE__151__, __WEBPACK_EXTERNAL_MODULE__152__, __WEBPACK_EXTERNAL_MODULE__153__, __WEBPACK_EXTERNAL_MODULE__154__, __WEBPACK_EXTERNAL_MODULE__155__, __WEBPACK_EXTERNAL_MODULE__156__, __WEBPACK_EXTERNAL_MODULE__157__, __WEBPACK_EXTERNAL_MODULE__158__, __WEBPACK_EXTERNAL_MODULE__159__, __WEBPACK_EXTERNAL_MODULE__160__, __WEBPACK_EXTERNAL_MODULE__161__, __WEBPACK_EXTERNAL_MODULE__162__, __WEBPACK_EXTERNAL_MODULE__163__, __WEBPACK_EXTERNAL_MODULE__164__, __WEBPACK_EXTERNAL_MODULE__165__, __WEBPACK_EXTERNAL_MODULE__166__, __WEBPACK_EXTERNAL_MODULE__167__, __WEBPACK_EXTERNAL_MODULE__168__, __WEBPACK_EXTERNAL_MODULE__169__, __WEBPACK_EXTERNAL_MODULE__170__, __WEBPACK_EXTERNAL_MODULE__171__, __WEBPACK_EXTERNAL_MODULE__172__, __WEBPACK_EXTERNAL_MODULE__173__, __WEBPACK_EXTERNAL_MODULE__174__, __WEBPACK_EXTERNAL_MODULE__175__, __WEBPACK_EXTERNAL_MODULE__176__, __WEBPACK_EXTERNAL_MODULE__177__, __WEBPACK_EXTERNAL_MODULE__178__, __WEBPACK_EXTERNAL_MODULE__179__, __WEBPACK_EXTERNAL_MODULE__180__, __WEBPACK_EXTERNAL_MODULE__181__, __WEBPACK_EXTERNAL_MODULE__182__, __WEBPACK_EXTERNAL_MODULE__183__, __WEBPACK_EXTERNAL_MODULE__184__, __WEBPACK_EXTERNAL_MODULE__185__, __WEBPACK_EXTERNAL_MODULE__186__, __WEBPACK_EXTERNAL_MODULE__187__, __WEBPACK_EXTERNAL_MODULE__188__, __WEBPACK_EXTERNAL_MODULE__189__, __WEBPACK_EXTERNAL_MODULE__190__, __WEBPACK_EXTERNAL_MODULE__191__, __WEBPACK_EXTERNAL_MODULE__192__, __WEBPACK_EXTERNAL_MODULE__193__, __WEBPACK_EXTERNAL_MODULE__194__, __WEBPACK_EXTERNAL_MODULE__195__, __WEBPACK_EXTERNAL_MODULE__196__, __WEBPACK_EXTERNAL_MODULE__197__, __WEBPACK_EXTERNAL_MODULE__198__, __WEBPACK_EXTERNAL_MODULE__239__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 99);
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

var _debounce = __webpack_require__(101);

var _debounce2 = _interopRequireDefault(_debounce);

var _browserCapabilities = __webpack_require__(66);

var _browserCapabilities2 = _interopRequireDefault(_browserCapabilities);

var _defaults = __webpack_require__(67);

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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BaseLink_vue_vue_type_template_id_5fae73fc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73);
/* harmony import */ var _BaseLink_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _BaseLink_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _BaseLink_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _BaseLink_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BaseLink_vue_vue_type_template_id_5fae73fc___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _BaseLink_vue_vue_type_template_id_5fae73fc___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ActionButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 6 */
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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_AnchorOverlay_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_AnchorOverlay_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_AnchorOverlay_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_AnchorOverlay_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_AnchorOverlay_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_AnchorOverlay_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 8 */
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
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseLink_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseLink_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseLink_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseLink_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseLink_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_BaseLink_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 10 */
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
            if (this.url.startsWith('/')) {
                return {
                    is: 'a',
                    href: this.url,
                    target: '_self',
                    ref: 'link'
                };
            }
            if (this.url && this.url.match(absoluteUrlRegex)) {
                return {
                    is: 'a',
                    href: this.url,
                    target: this.urlTarget,
                    rel: 'noopener'
                };
            }
            return {
                is: 'a',
                href: this.url,
                target: '_self',
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
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _BaseLink = __webpack_require__(3);

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
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentLink_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentLink_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentLink_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentLink_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentLink_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentLink_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _BaseLink = __webpack_require__(3);

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
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentLinkList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentLinkList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentLinkList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentLinkList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentLinkList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ContentLinkList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 16 */
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
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HitArea_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HitArea_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HitArea_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HitArea_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HitArea_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HitArea_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 18 */
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
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_HorizontalList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 20 */
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
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(22);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Icon_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 22 */
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
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_intersect_observer_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_intersect_observer_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_intersect_observer_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_intersect_observer_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_intersect_observer_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_intersect_observer_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('IntersectObserver', {
    props: {
        disconnectAfterIntersect: {
            default: false,
            required: false,
            type: Boolean
        },
        root: {
            default: function _default() {
                return null;
            },

            required: false,
            type: Object
        },
        rootMargin: {
            default: function _default() {
                return '0px';
            },

            required: false,
            type: String
        },
        threshold: {
            default: function _default() {
                return [0];
            },

            required: false,
            type: Array
        }
    },
    data: function data() {
        return {
            error: false,
            observer: null
        };
    },

    methods: {
        disconnect: function disconnect() {
            if (this.observer) {
                this.observer.disconnect();
                this.observer = null;
            }
        },
        intersectionHandler: function intersectionHandler(entries) {
            if (entries[0].isIntersecting) {
                this.$emit('intersecting', { target: entries[0].target });
                if (this.disconnectAfterIntersect) {
                    this.disconnect();
                    this.$emit('disconnect', { target: entries[0].target });
                }
                return;
            }
            this.$emit('not-intersecting', { target: entries[0].target });
        }
    },
    created: function created() {
        var msg = '';
        if (this.$slots.default && this.$slots.default.length > 1) {
            this.error = true;
            msg = '[Intersect] you can only wrap one element in a <intersect> component';
        }
        if (!this.$slots.default || this.$slots.default.length < 1) {
            this.error = true;
            msg = '[Intersect] you must have one child inside a <intersect> component.';
        }
        if (!msg) {
            return;
        }
        if (!_vue2.default.config.silent) {
            throw new Error(msg);
        }
        console.warn(msg);
    },
    destroyed: function destroyed() {
        if (!this.observer) {
            return;
        }
        this.observer.disconnect();
    },
    mounted: function mounted() {
        var _this = this;

        if (this.error) {
            return;
        }
        this.observer = new IntersectionObserver(this.intersectionHandler, {
            root: this.root,
            rootMargin: this.rootMargin,
            threshold: this.threshold
        });
        this.$nextTick(function () {
            if (!_this.observer) {
                return;
            }
            if (!_this.$slots.default) {
                return;
            }
            if (!(_this.$slots.default[0].elm instanceof Element)) {
                return;
            }
            _this.observer.observe(_this.$slots.default[0].elm);
        });
    }
});

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_LabelFilter_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_LabelFilter_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_LabelFilter_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_LabelFilter_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_LabelFilter_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_LabelFilter_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 26 */
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
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_LiInline_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_LiInline_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_LiInline_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_LiInline_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_LiInline_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_LiInline_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 28 */
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
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_LiItem_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_LiItem_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_LiItem_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_LiItem_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_LiItem_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_LiItem_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 30 */
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
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_NavAssist_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_NavAssist_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_NavAssist_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_NavAssist_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_NavAssist_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_NavAssist_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 32 */
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
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SpanLabel_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SpanLabel_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SpanLabel_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SpanLabel_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SpanLabel_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SpanLabel_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 34 */
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
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_YoutubeLink_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(36);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_YoutubeLink_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_YoutubeLink_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_YoutubeLink_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_YoutubeLink_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_YoutubeLink_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _BaseLink = __webpack_require__(3);

var _BaseLink2 = _interopRequireDefault(_BaseLink);

var _youtube = __webpack_require__(70);

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
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_YoutubeVideo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(38);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_YoutubeVideo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_YoutubeVideo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_YoutubeVideo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_YoutubeVideo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_YoutubeVideo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _youtube = __webpack_require__(70);

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
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterCategory_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterCategory_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterCategory_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterCategory_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterCategory_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FilterCategory_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 40 */
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
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Flyout_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Flyout_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Flyout_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Flyout_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Flyout_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_Flyout_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 42 */
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
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FlyoutSection_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FlyoutSection_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FlyoutSection_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FlyoutSection_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FlyoutSection_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FlyoutSection_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 44 */
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
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterNavigationCategory_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterNavigationCategory_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterNavigationCategory_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterNavigationCategory_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterNavigationCategory_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_FooterNavigationCategory_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 46 */
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
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_IconButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_IconButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_IconButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_IconButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_IconButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_IconButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 48 */
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
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_InPageNotification_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_InPageNotification_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_InPageNotification_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_InPageNotification_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_InPageNotification_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_InPageNotification_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 50 */
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
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_list_section_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_list_section_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_list_section_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_list_section_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_list_section_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_list_section_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 52 */
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

var _viewport = __webpack_require__(2);

var _viewport2 = _interopRequireDefault(_viewport);

var _ValueFilter = __webpack_require__(234);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _vue2.default.component('ListSection', {
    props: {
        cards: {
            type: Array,
            required: true
        },
        filterGroup: {
            type: Object
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
            chunkIndex: 0,
            chunks: [],
            chunkSize: 3,
            expanded: false,
            showMax: 6,
            valueFilter: new _ValueFilter.ValueFilter(this.cards, this.filterGroup || undefined),
            viewportUtil: new _viewport2.default(),
            visibleChunks: 12,
            visibleTooltip: false
        };
    },

    watch: {
        cards: function cards() {
            this.createChunks();
        }
    },
    computed: {
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
        }
    },
    methods: {
        filteredCards: function filteredCards() {
            return this.valueFilter.filteredItems();
        },
        filterCategories: function filterCategories() {
            if (this.filterGroup === undefined) {
                return [];
            }
            return this.filterGroup.filterCategories;
        },
        createChunks: function createChunks() {
            this.chunkIndex = 0;
            this.chunks = [];
            while (this.chunkIndex < this.filteredCards().length) {
                this.chunks.push(this.filteredCards().slice(this.chunkIndex, this.chunkSize + this.chunkIndex));
                this.chunkIndex += this.chunkSize;
            }
        },
        toggleFilterLabel: function toggleFilterLabel(value) {
            if (this.valueFilter.isFilterActive(value)) {
                this.valueFilter.removeActiveFilterValue(value);
            } else {
                this.valueFilter.addActiveFilterValue(value);
            }
            this.createChunks();
        },
        isAnyLabelSelected: function isAnyLabelSelected(labels) {
            var _this = this;

            return labels.some(function (label) {
                return _this.valueFilter.activeFilters().includes(label);
            });
        },
        removeCategoryLabels: function removeCategoryLabels(labels) {
            var _this2 = this;

            labels.forEach(function (label) {
                return _this2.valueFilter.removeActiveFilterValue(label);
            });
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

                return _label + ' (' + this.filteredCards().length + ')';
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
    },
    created: function created() {
        this.createChunks();
    }
});

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ListUnorderedLimit_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(55);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ListUnorderedLimit_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ListUnorderedLimit_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ListUnorderedLimit_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ListUnorderedLimit_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_ListUnorderedLimit_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 55 */
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
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_MainNavigation_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(57);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_MainNavigation_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_MainNavigation_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_MainNavigation_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_MainNavigation_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_MainNavigation_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

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
            showCompactMenu: false
        };
    },

    computed: {
        classList: function classList() {
            return {
                'main-nav--open': this.mainNavOpen
            };
        }
    },
    methods: {
        handleNavAssistClick: function handleNavAssistClick(stateChange) {
            this.$emit('nav-assist-click', stateChange);
        }
    }
});

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_MainNavigationItem_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_MainNavigationItem_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_MainNavigationItem_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_MainNavigationItem_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_MainNavigationItem_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_MainNavigationItem_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vuePropertyDecorator = __webpack_require__(239);

var _browserCapabilities = __webpack_require__(66);

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
            required: false,
            default: false
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
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SearchBar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

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
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SysNav_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SysNav_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SysNav_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SysNav_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SysNav_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_SysNav_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 63 */
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
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(65);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_ts_loader_index_js_ref_2_1_node_modules_vue_loader_lib_index_js_vue_loader_options_PageHeader_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 65 */
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
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BrowserCapabilities = function () {
    function BrowserCapabilities() {
        _classCallCheck(this, BrowserCapabilities);
    }

    _createClass(BrowserCapabilities, null, [{
        key: 'hasWindow',
        get: function get() {
            return typeof window !== 'undefined';
        }
    }, {
        key: 'isIE11',
        get: function get() {
            return !!window.MSInputMethodContext && !!document.documentMode;
        }
    }, {
        key: 'isOldIE',
        get: function get() {
            return (/MSIE/.test(navigator.userAgent)
            );
        }
    }, {
        key: 'isSafari',
        get: function get() {
            return (/Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor)
            );
        }
    }, {
        key: 'supportsTouch',
        get: function get() {
            return !this.hasWindow || 'ontouchstart' in document.documentElement;
        }
    }, {
        key: 'supportsFontLoadingApi',
        get: function get() {
            return !this.hasWindow || 'fonts' in document;
        }
    }, {
        key: 'supportsIntl',
        get: function get() {
            return !this.hasWindow || 'Intl' in window;
        }
    }, {
        key: 'supportsPictureElement',
        get: function get() {
            return !this.hasWindow || 'HTMLPictureElement' in window;
        }
    }, {
        key: 'supportsIntersectionObserver',
        get: function get() {
            return !this.hasWindow || 'IntersectionObserver' in window;
        }
    }, {
        key: 'supportsObjectFit',
        get: function get() {
            if (!this.hasWindow) {
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
/* 67 */
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
/* 68 */
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
/* 69 */
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
/* 70 */
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
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{class:_vm.classObject,attrs:{"href":"#"}},[(_vm.icon)?_c('icon',{attrs:{"icon-name":_vm.icon}}):_vm._e(),_vm._v(" "),_vm._t("default")],2)}
var staticRenderFns = []



/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"anchor-overlay hit-area",attrs:{"href":_vm.url,"title":_vm.title,"aria-label":_vm.title}})}
var staticRenderFns = []



/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('component',_vm._b({class:_vm.classObject,on:{"click":_vm.triggerEventClick}},'component',_vm.linkProps,false),[(_vm.icon)?_c('icon',{attrs:{"icon-name":_vm.icon}}):_vm._e(),_vm._v(" "),(!_vm.slots)?_c('span',{staticClass:"link__underline"},[_vm._v("\n        "+_vm._s(_vm.label)+"\n    ")]):_vm._t("default")],2)}
var staticRenderFns = []



/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('ul',{class:_vm.block + '__list'},_vm._l((_vm.links),function(link){return _c('li',{class:_vm.block + '__item'},[_c('content-link',{class:link.class,attrs:{"block":_vm.block,"icon":link.icon,"url":link.url,"label":link.label}})],1)}),0)}
var staticRenderFns = []



/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"hit-area",attrs:{"role":"button","tabindex":"0"}},[_vm._t("default")],2)}
var staticRenderFns = []



/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{class:_vm.styleModifier},[_c('strong',{staticClass:"caption-list__headline"},[_vm._v("\n        "+_vm._s(_vm.label)+"\n    ")]),_vm._v(" "),_c('ul',{staticClass:"caption-list"},_vm._l((_vm.listItems),function(item){return _c('li',{staticClass:"caption-list__list-item"},[_vm._v("\n            "+_vm._s(item.additionalContent)+"\n            "),_c('a',{attrs:{"href":item.url}},[_vm._v(_vm._s(item.text))])])}),0)])}
var staticRenderFns = []



/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"icon",class:this.iconClass},[_c('use',{attrs:{"xlink:href":this.iconHref}})])}
var staticRenderFns = []



/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',[_vm._t("default")],2)}
var staticRenderFns = []



/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('label',{staticClass:"label-filter"},[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.checkedState),expression:"checkedState"}],ref:"checkbox",attrs:{"disabled":_vm.disabled,"name":_vm.name,"type":"checkbox"},domProps:{"checked":_vm.checked,"value":_vm.value,"checked":Array.isArray(_vm.checkedState)?_vm._i(_vm.checkedState,_vm.value)>-1:(_vm.checkedState)},on:{"change":[function($event){var $$a=_vm.checkedState,$$el=$event.target,$$c=$$el.checked?(true):(false);if(Array.isArray($$a)){var $$v=_vm.value,$$i=_vm._i($$a,$$v);if($$el.checked){$$i<0&&(_vm.checkedState=$$a.concat([$$v]))}else{$$i>-1&&(_vm.checkedState=$$a.slice(0,$$i).concat($$a.slice($$i+1)))}}else{_vm.checkedState=$$c}},_vm.onChange]}}),_vm._v(" "),_c('span',{staticClass:"label-filter__label"},[_vm._v(_vm._s(_vm.label))])])}
var staticRenderFns = []



/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"list__item list__item--inline"},[(!_vm.item.item)?[_vm._v(_vm._s(_vm.item))]:[_c(_vm.item.type,_vm._b({tag:"component"},'component',_vm.item.item,false))]],2)}
var staticRenderFns = []



/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"list__item"},[(_vm.item.item)?[_c(_vm.item.type,_vm._b({tag:"component"},'component',_vm.item.item,false))]:(_vm.item.type)?[_c(_vm.item.type,_vm._b({tag:"component"},'component',_vm.item,false))]:[_vm._v(_vm._s(_vm.item))]],2)}
var staticRenderFns = []



/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"nav-assist",class:{'nav-assist--close': this.openState, 'nav-assist--initial-state': this.inInitialState},attrs:{"type":"button","aria-label":"menu","aria-expanded":_vm.ariaExpanded},on:{"click":_vm.toggleState,"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }return _vm.close($event)}}},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","viewBox":"0 0 24 24"}},[_c('rect',{staticClass:"nav-assist__line nav-assist__line-2",attrs:{"x":"2","y":"11","width":"20","height":"2"}}),_vm._v(" "),_c('rect',{staticClass:"nav-assist__line nav-assist__line-1",attrs:{"x":"2","y":"4.5","width":"20","height":"2"}}),_vm._v(" "),_c('rect',{staticClass:"nav-assist__line nav-assist__line-3",attrs:{"x":"2","y":"17.5","width":"20","height":"2"}}),_vm._v(" "),_c('rect',{staticClass:"nav-assist__line nav-assist__line-4",attrs:{"x":"-1.3","y":"11","transform":"matrix(0.7071 -0.7071 0.7071 0.7071 -4.9706 12)","width":"26.6","height":"2"}}),_vm._v(" "),_c('rect',{staticClass:"nav-assist__line nav-assist__line-5",attrs:{"x":"11","y":"-1.3","transform":"matrix(0.7071 -0.7071 0.7071 0.7071 -4.9706 12)","width":"2","height":"26.6"}})])])}
var staticRenderFns = []



/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"label"},[_vm._v(_vm._s(_vm.item))])}
var staticRenderFns = []



/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"link link--icon link--large",attrs:{"href":_vm.youtubeUrl,"target":"_blank"},on:{"click":function($event){$event.preventDefault();return _vm.toggleVideoVisible($event)}}},[_c('icon',{attrs:{"icon-name":_vm.icon}}),_vm._v(" "),_c('span',{staticClass:"link__underline"},[_vm._v("\n        "+_vm._s(_vm.label)+"\n    ")]),_vm._v(" "),_c('portal',{attrs:{"to":"modals"}},[(_vm.videoVisible)?_c('modal',{staticClass:"modal--video",on:{"close":_vm.toggleVideoVisible}},[_c('youtube-video',{attrs:{"video-id":_vm.youtubeId}})],1):_vm._e()],1)],1)}
var staticRenderFns = []



/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"youtube-video"},[(this.loadVideo)?_c('iframe',{staticClass:"youtube-video__frame",attrs:{"src":this.videoUrl,"frameborder":"0","allowfullscreen":"allowfullscreen"}}):_vm._e()])}
var staticRenderFns = []



/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"filter-category"},[_c('h4',{staticClass:"filter-category__title"},[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),_c('form',[_c('input',{staticClass:"filter-category__reset",class:_vm.checkResetFiltersState,attrs:{"type":"reset"},domProps:{"value":_vm.showAllLabel},on:{"click":_vm.resetFilters}}),_vm._v(" "),_c('ul',{staticClass:"filter-category__list"},_vm._l((_vm.labels),function(label,key){return _c('li',{key:key,staticClass:"filter-category__list-item"},[_c('label-filter',{attrs:{"disabled":_vm.isFilterDisabled(label),"eventChange":_vm.eventLabelFilterChange,"label":label,"name":_vm.showAllLabel,"value":label},on:_vm._d({},[_vm.eventLabelFilterChange,_vm.handleLabelFilterChange])})],1)}),0)])])}
var staticRenderFns = []



/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.items && _vm.items.length > 0)?_c('ul',{staticClass:"main-nav__flyout",on:{"keydown":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"])){ return null; }return _vm.selectNextLink($event)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"tab",9,$event.key,"Tab")){ return null; }if($event.ctrlKey||$event.shiftKey||$event.altKey||$event.metaKey){ return null; }return _vm.selectNextLink($event)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"up",38,$event.key,["Up","ArrowUp"])){ return null; }return _vm.selectPrevLink($event)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"tab",9,$event.key,"Tab")){ return null; }if(!$event.shiftKey){ return null; }if($event.ctrlKey||$event.altKey||$event.metaKey){ return null; }return _vm.selectPrevLink($event)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"right",39,$event.key,["Right","ArrowRight"])){ return null; }if('button' in $event && $event.button !== 2){ return null; }return _vm.selectNextSection($event, true)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"left",37,$event.key,["Left","ArrowLeft"])){ return null; }if('button' in $event && $event.button !== 0){ return null; }return _vm.selectPrevSection($event, true)}],"mouseenter":function($event){$event.stopPropagation();return _vm.open($event)}}},_vm._l((_vm.items),function(item,key){return (item.items && item.items.length)?_c('flyout-section',_vm._b({key:key,ref:"items",refInFor:true,attrs:{"is-compact":_vm.isCompact,"itemId":("flyout_title_" + _vm.uniqId + "_" + key)},on:{"content-link-click":function($event){return _vm.$emit('content-link-click')}}},'flyout-section',item,false)):_vm._e()}),1):_vm._e()}
var staticRenderFns = []



/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"flyout__section",class:_vm.sectionClass},[(_vm.label)?_c('strong',{staticClass:"flyout__title",attrs:{"id":_vm.itemId}},[_vm._v(_vm._s(_vm.label))]):_vm._e(),_vm._v(" "),_c('ul',{staticClass:"flyout__list",attrs:{"aria-labelledby":_vm.itemId,"aria-haspopup":_vm.items.length > _vm.maxVisible,"aria-expanded":!_vm.isCompact || _vm.isExpanded}},[_vm._l((_vm.items),function(item,index){return (index < _vm.maxVisible)?_c('li',{staticClass:"flyout__list-item"},[_c('content-link',{ref:"firstFocusableLinks",refInFor:true,staticClass:"flyout__link link",attrs:{"url":item.url,"label":item.label},nativeOn:{"click":function($event){return _vm.$emit('content-link-click')}}})],1):_vm._e()}),_vm._v(" "),_vm._l((_vm.items),function(item,index){return (index >= _vm.maxVisible)?_c('li',{directives:[{name:"show",rawName:"v-show",value:(!_vm.isCompact || _vm.isExpanded),expression:"!isCompact || isExpanded"}],staticClass:"flyout__list-item"},[_c('content-link',{ref:"focusable",refInFor:true,staticClass:"flyout__link link",attrs:{"url":item.url,"label":item.label},nativeOn:{"click":function($event){return _vm.$emit('content-link-click')}}})],1):_vm._e()}),_vm._v(" "),(_vm.flyoutToggleIsVisible)?_c('li',{staticClass:"flyout__list-item"},[_c('content-toggle',{staticClass:"flyout__toggle",attrs:{"aria-hidden":"true"},on:{"content-toggle":_vm.toggleExpanded}})],1):_vm._e()],2),_vm._v(" "),(_vm.bottomItem)?[_c('content-link',{ref:"bottomLink",staticClass:"link flyout__link--cta-mini",attrs:{"url":_vm.bottomItem.url,"label":_vm.bottomItem.label},nativeOn:{"click":function($event){return _vm.$emit('content-link-click')}}})]:_vm._e()],2)}
var staticRenderFns = []



/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.items.length)?_c('div',{staticClass:"footer-navigation-category__column"},[_c('h3',{staticClass:"footer-navigation-category__title"},[_vm._v(_vm._s(_vm.label))]),_vm._v(" "),(_vm.items && _vm.items.length)?_c('ul',{staticClass:"footer-navigation-category__list"},_vm._l((_vm.items),function(link){return _c('li',{staticClass:"footer-navigation-category__item"},[_c('content-link',_vm._b({staticClass:"footer-navigation-category__link link link--reversed"},'content-link',link,false))],1)}),0):_vm._e()]):_vm._e()}
var staticRenderFns = []



/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"icon-button",class:_vm.buttonClass,attrs:{"aria-label":_vm.buttonAriaLabel,"aria-disabled":_vm.disabled},on:{"click":_vm.clickHandler}},[_c('icon',{staticClass:"icon-button__icon",attrs:{"iconName":_vm.iconName}}),_vm._v(" "),(!!this.$slots.default)?_c('span',{staticClass:"icon-button__label"},[_vm._t("default")],2):_vm._e()],1)}
var staticRenderFns = []



/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.display),expression:"display"}],staticClass:"notification in-page-notification"},[_c('icon-button',{attrs:{"button-class":"icon-button in-page-notification__button button--close","button-aria-label":"close","icon-name":"close"},on:{"click":_vm.close}}),_vm._v(" "),_c('p',{staticClass:"notification__content notification__content--centered"},[_vm._v("\n        "+_vm._s(_vm.message)+"\n    ")])],1)}
var staticRenderFns = []



/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"list-section"},[(_vm.title)?[_c('header',{staticClass:"list-section__header"},[_c('h3',{staticClass:"list-section__title"},[_vm._v(_vm._s(_vm.title)+"\n                "),_c('span',{staticClass:"list-section__count"},[_vm._v("("+_vm._s(_vm.cards.length)+")")]),_vm._v(" "),(_vm.tooltip)?[_c('transition',{attrs:{"name":"tooltip"}},[_c('tooltip',_vm._b({directives:[{name:"show",rawName:"v-show",value:(_vm.visibleTooltip),expression:"visibleTooltip"}],staticClass:"section-tooltip",attrs:{"block":"list-section","id":("tooltip_" + _vm.uniqId)}},'tooltip',_vm.tooltip,false),[_vm._v("\n                            "+_vm._s(_vm.tooltip.description)+"\n                        ")])],1)]:_vm._e()],2),_vm._v(" "),(_vm.tooltip)?[(_vm.tooltip)?_c('action-button',{staticClass:"link list-section__info-link",attrs:{"icon":_vm.tooltip.icon,"mod":"reversed","role":"button","aria-describedby":("tooltip_" + _vm.uniqId)},nativeOn:{"click":function($event){$event.preventDefault();return _vm.toggleTooltip($event)},"blur":function($event){$event.preventDefault();return _vm.hideTooltip($event)}}},[_vm._v("\n                    "+_vm._s(_vm.tooltip.label)+"\n                ")]):_vm._e()]:_vm._e()],2)]:_vm._e(),_vm._v(" "),_vm._l((_vm.filterCategories()),function(filterCategory){return [_c('section',{staticClass:"filter-category"},[_c('h4',{staticClass:"filter-category__title"},[_vm._v(_vm._s(filterCategory.title))]),_vm._v(" "),_c('form',[_c('input',{staticClass:"filter-category__reset",class:!_vm.isAnyLabelSelected(filterCategory.labels) ? 'filter-category__reset--active' : '',attrs:{"type":"reset"},domProps:{"value":filterCategory.showAllLabel},on:{"click":function($event){return _vm.removeCategoryLabels(filterCategory.labels)}}}),_vm._v(" "),_c('ul',{staticClass:"filter-category__list"},_vm._l((filterCategory.labels),function(label,key){return _c('li',{key:key,staticClass:"filter-category__list-item"},[_c('label',{staticClass:"label-filter"},[_c('input',{ref:"checkbox",refInFor:true,attrs:{"name":label,"type":"checkbox","disabled":!_vm.valueFilter.possibleFilters().includes(label)},domProps:{"checked":_vm.valueFilter.activeFilters().includes(label)},on:{"click":function($event){return _vm.toggleFilterLabel(label)}}}),_vm._v(" "),_c('span',{staticClass:"label-filter__label"},[_vm._v(_vm._s(label))])])])}),0)])])]}),_vm._v(" "),_c('ul',{staticClass:"list-section__container"},_vm._l((_vm.chunks),function(chunk,index){return _c('li',{directives:[{name:"show",rawName:"v-show",value:(index < _vm.visibleChunks),expression:"index < visibleChunks"}],key:index,staticClass:"list-section__row",class:chunk.length % 2 === 0 && 'list-section__row--even'},_vm._l((chunk),function(card,i){return (chunk && chunk.length)?_c(card.type,_vm._b({key:i,tag:"component",staticClass:"list-section__item"},'component',card,false)):_vm._e()}),1)}),0),_vm._v(" "),_c('footer',{staticClass:"list-section__footer"},[_c('button',{directives:[{name:"show",rawName:"v-show",value:(_vm.showButton()),expression:"showButton()"}],staticClass:"button--secondary list-section__footer__button",on:{"click":function($event){_vm.limit && _vm.limit.expandAmount ? _vm.showChunk() : _vm.showAll()}}},[_vm._v("\n            "+_vm._s(_vm.showLabel())+"\n        ")])])],2)}
var staticRenderFns = []



/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"list-unordered-limit"},[_c('main',[_c('ul',[_vm._l((_vm.listItems),function(item,index){return [_c('li-item',{directives:[{name:"show",rawName:"v-show",value:(_vm.showLimit() === -1 || index < _vm.showLimit() || _vm.showAll),expression:"showLimit() === -1 || index < showLimit() || showAll"}],key:index,attrs:{"item":item}})]})],2)]),_vm._v(" "),_c('footer',{directives:[{name:"show",rawName:"v-show",value:(_vm.showLimit() !== -1 && !_vm.showAll),expression:"showLimit() !== -1 && !showAll"}]},[_c('button',{staticClass:"button--secondary",on:{"click":_vm.showHidden}},[_vm._v(_vm._s(_vm.showButtonLabel()))])])])}
var staticRenderFns = []



/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{key:"large-menu",staticClass:"main-nav",class:_vm.classList,attrs:{"aria-label":"site"}},[_c('ul',{staticClass:"main-nav__list",class:{'main-nav__list-visible': _vm.mainNavOpen},attrs:{"role":"menu"}},_vm._l((_vm.navigation),function(mainNavigationItem,index){return (_vm.navigation)?_c('main-navigation-item',_vm._b({key:index,ref:"navItem",refInFor:true,attrs:{"is-compact":_vm.showCompactMenu,"main-nav-open":_vm.mainNavOpen,"active":false,"itemId":'nav-' + index},on:{"nav-assist-click":_vm.handleNavAssistClick}},'main-navigation-item',mainNavigationItem,false)):_vm._e()}),1)])}
var staticRenderFns = []



/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"main-nav__item",class:{ 'main-nav__item--active': _vm.active },attrs:{"role":"menuitem"},on:{"mouseleave":_vm.delayHideFlyout,"mouseenter":_vm.openFlyout}},[_c('div',{on:{"keydown":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"])){ return null; }$event.preventDefault();return _vm.selectFlyoutFirstLink($event)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"tab",9,$event.key,"Tab")){ return null; }if(!$event.shiftKey){ return null; }if($event.ctrlKey||$event.altKey||$event.metaKey){ return null; }return _vm.closeMobileNav($event)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }$event.preventDefault();return _vm.closeMobileNav($event)}]}},[_c('base-link',{ref:"parent",staticClass:"main-nav__link",attrs:{"url":_vm.url,"aria-haspopup":"true","aria-controls":_vm.itemId,"aria-current":_vm.isActive,"label":_vm.label,"aria-expanded":!_vm.isCompact && _vm.flyoutIsOpen},on:{"focus":_vm.openFlyout},nativeOn:{"click":function($event){return _vm.closeMobileNav($event)}}})],1),_vm._v(" "),_c('icon-button',{directives:[{name:"show",rawName:"v-show",value:(_vm.toggleIsVisible),expression:"toggleIsVisible"}],staticClass:"icon-button--small main-nav__toggle disable-focus",attrs:{"icon-name":_vm.angleDirection,"tabindex":"-1"},on:{"click":_vm.toggleFlyout}}),_vm._v(" "),(_vm.categories)?_c('flyout',{ref:"flyout",staticClass:"flyout--large",class:{ 'flyout--is-open': _vm.flyoutIsOpen },attrs:{"id":_vm.itemId,"items":_vm.categories,"is-compact":_vm.isCompact},on:{"content-link-click":_vm.closeMobileNav,"open":_vm.openFlyout,"close":_vm.closeFlyout,"main":_vm.selectParent},nativeOn:{"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }return _vm.selectParent($event)}}}):_vm._e()],1)}
var staticRenderFns = []



/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form',{ref:"search-form",staticClass:"search-bar",attrs:{"action":_vm.action,"method":"get"},on:{"submit":function($event){$event.preventDefault();return _vm.handleSubmit($event)}}},[_c('div',{attrs:{"role":"search"}},[_c('div',{staticClass:"search-bar__inputholder"},[_c('label',{staticClass:"search-bar__label",attrs:{"for":"search-bar__input"}},[_vm._v(_vm._s(_vm.label))]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.searchValue),expression:"searchValue"}],ref:"search-bar__input",staticClass:"search-bar__input",attrs:{"placeholder":_vm.placeholder,"autocapitalize":"off","autocomplete":"off","autocorrect":"off","id":"search-bar__input","name":"search"},domProps:{"value":(_vm.searchValue)},on:{"blur":_vm.onBlur,"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }return _vm.close($event)},"input":function($event){if($event.target.composing){ return; }_vm.searchValue=$event.target.value}}})]),_vm._v(" "),_c('icon-button',{attrs:{"button-class":"icon-button icon-button--large search-bar__button","button-aria-label":"Search","icon-name":"search"},on:{"click":_vm.handleSubmit}}),_vm._v(" "),_c('icon-button',{attrs:{"button-class":"icon-button icon-button--large search-bar__close-button","button-aria-label":"Close search","icon-name":"close"},on:{"click":_vm.close}})],1)])}
var staticRenderFns = []



/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{staticClass:"sys-nav",attrs:{"aria-label":"quick access"}},[_c('ul',{staticClass:"sys-nav__list",attrs:{"role":"presentation"}},[_c('li',{staticClass:"sys-nav__item"},[(_vm.orderNowLink)?_c('base-link',{staticClass:"sys-nav__link",attrs:{"url":_vm.orderNowLink}},[_c('icon',{staticClass:"sys-nav__icon",attrs:{"icon-name":_vm.orderNowIcon}}),_vm._v(" "),_c('span',{staticClass:"sys-nav__label"},[_vm._v(_vm._s(_vm.orderNowLabel))])],1):_vm._e()],1),_vm._v(" "),_c('li',{staticClass:"sys-nav__item"},[_c('a',{staticClass:"sys-nav__link",attrs:{"role":"button","tabindex":"0"},on:{"click":_vm.openSearch,"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.openSearch($event)}}},[_c('icon',{staticClass:"sys-nav__icon",attrs:{"icon-name":_vm.searchIcon}}),_vm._v(" "),_c('span',{staticClass:"sys-nav__label"},[_vm._v(_vm._s(_vm.searchLabel))])],1)])])])}
var staticRenderFns = []



/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{staticClass:"header header--fixed",attrs:{"lang":_vm.language,"role":"banner"}},[_c('div',{staticClass:"header__top",class:{'header--mobile-inverted': _vm.mainNavOpen}},[_c('a',{staticClass:"home-link",attrs:{"href":_vm.homepageUrl,"aria-label":"Ultimaker homepage"}},[_c('icon',{staticClass:"home-link__logo",attrs:{"icon-name":"logo-ultimaker"}})],1),_vm._v(" "),(_vm.navigation)?_c('main-navigation',{attrs:{"navigation":_vm.navigation,"main-nav-open":_vm.mainNavOpen},on:{"nav-assist-click":_vm.handleNavAssistClick}}):_vm._e(),_vm._v(" "),(_vm.cta && _vm.search)?_c('sys-nav',{attrs:{"order-now-icon":_vm.cta.icon,"order-now-label":_vm.cta.label,"order-now-link":_vm.cta.url,"search-icon":_vm.search.icon,"search-label":_vm.search.label},on:{"open-search":_vm.openSearch}}):_vm._e(),_vm._v(" "),_c('nav-assist',{staticClass:"main-nav__nav-assist",attrs:{"open-state":_vm.mainNavOpen},on:{"nav-assist-click":_vm.handleNavAssistClick}}),_vm._v(" "),_c('transition',{attrs:{"name":"search"},on:{"after-enter":_vm.handleFocus,"leave":_vm.handleFocus}},[(_vm.searchOpen)?_c('search-bar',{ref:"search",staticClass:"header__search",attrs:{"label":_vm.search.label,"languageCode":_vm.language,"placeholder":_vm.search.placeholder,"open-state":_vm.searchOpen},on:{"close":_vm.closeSearch}}):_vm._e()],1)],1)])}
var staticRenderFns = []



/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.registry = exports.PublicEventService = exports.ViewportUtility = exports.TextUtils = exports.BrowserCapabilities = exports.Defaults = undefined;

var _defaults = __webpack_require__(67);

Object.defineProperty(exports, 'Defaults', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_defaults).default;
    }
});

var _browserCapabilities = __webpack_require__(66);

Object.defineProperty(exports, 'BrowserCapabilities', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_browserCapabilities).default;
    }
});

var _textUtils = __webpack_require__(100);

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

var _publicEventService = __webpack_require__(102);

Object.defineProperty(exports, 'PublicEventService', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_publicEventService).default;
    }
});

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

__webpack_require__(119);

__webpack_require__(120);

__webpack_require__(121);

__webpack_require__(122);

__webpack_require__(123);

__webpack_require__(124);

__webpack_require__(125);

__webpack_require__(126);

__webpack_require__(127);

__webpack_require__(128);

__webpack_require__(129);

__webpack_require__(130);

__webpack_require__(131);

__webpack_require__(132);

__webpack_require__(133);

__webpack_require__(134);

__webpack_require__(135);

__webpack_require__(136);

__webpack_require__(137);

__webpack_require__(138);

__webpack_require__(139);

__webpack_require__(140);

__webpack_require__(141);

__webpack_require__(142);

__webpack_require__(143);

__webpack_require__(144);

__webpack_require__(145);

__webpack_require__(146);

__webpack_require__(147);

__webpack_require__(148);

__webpack_require__(149);

__webpack_require__(150);

__webpack_require__(151);

__webpack_require__(152);

__webpack_require__(153);

__webpack_require__(154);

__webpack_require__(155);

__webpack_require__(156);

__webpack_require__(157);

__webpack_require__(158);

__webpack_require__(159);

__webpack_require__(160);

__webpack_require__(161);

__webpack_require__(162);

__webpack_require__(163);

__webpack_require__(164);

__webpack_require__(165);

__webpack_require__(166);

__webpack_require__(167);

__webpack_require__(168);

__webpack_require__(169);

__webpack_require__(170);

__webpack_require__(171);

__webpack_require__(172);

__webpack_require__(173);

__webpack_require__(174);

__webpack_require__(175);

__webpack_require__(176);

__webpack_require__(177);

__webpack_require__(178);

__webpack_require__(179);

__webpack_require__(180);

__webpack_require__(181);

__webpack_require__(182);

__webpack_require__(183);

__webpack_require__(184);

__webpack_require__(185);

__webpack_require__(186);

__webpack_require__(187);

__webpack_require__(188);

__webpack_require__(189);

__webpack_require__(190);

__webpack_require__(191);

__webpack_require__(192);

__webpack_require__(193);

__webpack_require__(194);

__webpack_require__(195);

__webpack_require__(196);

__webpack_require__(197);

__webpack_require__(198);

__webpack_require__(199);

__webpack_require__(200);

var _componentRegistry = __webpack_require__(201);

var _componentRegistry2 = _interopRequireDefault(_componentRegistry);

var _components = __webpack_require__(208);

var _components2 = _interopRequireDefault(_components);

__webpack_require__(244);

var _clickOutside = __webpack_require__(245);

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
/* 100 */
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
/* 101 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__101__;

/***/ }),
/* 102 */
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
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__117__;

/***/ }),
/* 118 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__118__;

/***/ }),
/* 119 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__119__;

/***/ }),
/* 120 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__120__;

/***/ }),
/* 121 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__121__;

/***/ }),
/* 122 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__122__;

/***/ }),
/* 123 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__123__;

/***/ }),
/* 124 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__124__;

/***/ }),
/* 125 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__125__;

/***/ }),
/* 126 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__126__;

/***/ }),
/* 127 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__127__;

/***/ }),
/* 128 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__128__;

/***/ }),
/* 129 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__129__;

/***/ }),
/* 130 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__130__;

/***/ }),
/* 131 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__131__;

/***/ }),
/* 132 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__132__;

/***/ }),
/* 133 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__133__;

/***/ }),
/* 134 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__134__;

/***/ }),
/* 135 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__135__;

/***/ }),
/* 136 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__136__;

/***/ }),
/* 137 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__137__;

/***/ }),
/* 138 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__138__;

/***/ }),
/* 139 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__139__;

/***/ }),
/* 140 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__140__;

/***/ }),
/* 141 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__141__;

/***/ }),
/* 142 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__142__;

/***/ }),
/* 143 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__143__;

/***/ }),
/* 144 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__144__;

/***/ }),
/* 145 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__145__;

/***/ }),
/* 146 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__146__;

/***/ }),
/* 147 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__147__;

/***/ }),
/* 148 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__148__;

/***/ }),
/* 149 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__149__;

/***/ }),
/* 150 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__150__;

/***/ }),
/* 151 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__151__;

/***/ }),
/* 152 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__152__;

/***/ }),
/* 153 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__153__;

/***/ }),
/* 154 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__154__;

/***/ }),
/* 155 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__155__;

/***/ }),
/* 156 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__156__;

/***/ }),
/* 157 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__157__;

/***/ }),
/* 158 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__158__;

/***/ }),
/* 159 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__159__;

/***/ }),
/* 160 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__160__;

/***/ }),
/* 161 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__161__;

/***/ }),
/* 162 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__162__;

/***/ }),
/* 163 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__163__;

/***/ }),
/* 164 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__164__;

/***/ }),
/* 165 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__165__;

/***/ }),
/* 166 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__166__;

/***/ }),
/* 167 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__167__;

/***/ }),
/* 168 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__168__;

/***/ }),
/* 169 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__169__;

/***/ }),
/* 170 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__170__;

/***/ }),
/* 171 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__171__;

/***/ }),
/* 172 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__172__;

/***/ }),
/* 173 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__173__;

/***/ }),
/* 174 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__174__;

/***/ }),
/* 175 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__175__;

/***/ }),
/* 176 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__176__;

/***/ }),
/* 177 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__177__;

/***/ }),
/* 178 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__178__;

/***/ }),
/* 179 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__179__;

/***/ }),
/* 180 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__180__;

/***/ }),
/* 181 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__181__;

/***/ }),
/* 182 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__182__;

/***/ }),
/* 183 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__183__;

/***/ }),
/* 184 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__184__;

/***/ }),
/* 185 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__185__;

/***/ }),
/* 186 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__186__;

/***/ }),
/* 187 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__187__;

/***/ }),
/* 188 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__188__;

/***/ }),
/* 189 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__189__;

/***/ }),
/* 190 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__190__;

/***/ }),
/* 191 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__191__;

/***/ }),
/* 192 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__192__;

/***/ }),
/* 193 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__193__;

/***/ }),
/* 194 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__194__;

/***/ }),
/* 195 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__195__;

/***/ }),
/* 196 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__196__;

/***/ }),
/* 197 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__197__;

/***/ }),
/* 198 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__198__;

/***/ }),
/* 199 */
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
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _uniqId = __webpack_require__(202);

var _portalVue = __webpack_require__(207);

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
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UniqId = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _uuid = __webpack_require__(204);

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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(203)))

/***/ }),
/* 203 */
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
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

var v1 = __webpack_require__(205);
var v4 = __webpack_require__(206);

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(68);
var bytesToUuid = __webpack_require__(69);

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
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(68);
var bytesToUuid = __webpack_require__(69);

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
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

 /*! 
  * portal-vue © Thorsten Lünborg, 2019 
  * 
  * Version: 2.1.6
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
      if (!to || !from && force === false) return;

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
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _atoms = __webpack_require__(209);

var Atoms = _interopRequireWildcard(_atoms);

var _molecules = __webpack_require__(226);

var Molecules = _interopRequireWildcard(_molecules);

var _organisms = __webpack_require__(242);

var Organisms = _interopRequireWildcard(_organisms);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = _extends({}, Atoms, Molecules, Organisms);

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ActionButton = __webpack_require__(210);

var _ActionButton2 = _interopRequireDefault(_ActionButton);

var _AnchorOverlay = __webpack_require__(211);

var _AnchorOverlay2 = _interopRequireDefault(_AnchorOverlay);

var _BaseLink = __webpack_require__(3);

var _BaseLink2 = _interopRequireDefault(_BaseLink);

var _ContentButton = __webpack_require__(212);

var _ContentButton2 = _interopRequireDefault(_ContentButton);

var _ContentLink = __webpack_require__(213);

var _ContentLink2 = _interopRequireDefault(_ContentLink);

var _ContentLinkList = __webpack_require__(214);

var _ContentLinkList2 = _interopRequireDefault(_ContentLinkList);

var _HitArea = __webpack_require__(215);

var _HitArea2 = _interopRequireDefault(_HitArea);

var _HorizontalList = __webpack_require__(216);

var _HorizontalList2 = _interopRequireDefault(_HorizontalList);

var _Icon = __webpack_require__(217);

var _Icon2 = _interopRequireDefault(_Icon);

var _IntersectObserver = __webpack_require__(218);

var _IntersectObserver2 = _interopRequireDefault(_IntersectObserver);

var _LabelFilter = __webpack_require__(219);

var _LabelFilter2 = _interopRequireDefault(_LabelFilter);

var _LiInline = __webpack_require__(220);

var _LiInline2 = _interopRequireDefault(_LiInline);

var _LiItem = __webpack_require__(221);

var _LiItem2 = _interopRequireDefault(_LiItem);

var _NavAssist = __webpack_require__(222);

var _NavAssist2 = _interopRequireDefault(_NavAssist);

var _SpanLabel = __webpack_require__(223);

var _SpanLabel2 = _interopRequireDefault(_SpanLabel);

var _YoutubeLink = __webpack_require__(224);

var _YoutubeLink2 = _interopRequireDefault(_YoutubeLink);

var _YoutubeVideo = __webpack_require__(225);

var _YoutubeVideo2 = _interopRequireDefault(_YoutubeVideo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ActionButton_vue_vue_type_template_id_d96fe6dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71);
/* harmony import */ var _ActionButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ActionButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ActionButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _ActionButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ActionButton_vue_vue_type_template_id_d96fe6dc___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _ActionButton_vue_vue_type_template_id_d96fe6dc___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AnchorOverlay_vue_vue_type_template_id_742cd8ba___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72);
/* harmony import */ var _AnchorOverlay_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _AnchorOverlay_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _AnchorOverlay_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _AnchorOverlay_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AnchorOverlay_vue_vue_type_template_id_742cd8ba___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _AnchorOverlay_vue_vue_type_template_id_742cd8ba___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContentButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
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
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContentLink_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
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
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContentLinkList_vue_vue_type_template_id_70bc23ad___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(74);
/* harmony import */ var _ContentLinkList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(15);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ContentLinkList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ContentLinkList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _ContentLinkList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ContentLinkList_vue_vue_type_template_id_70bc23ad___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _ContentLinkList_vue_vue_type_template_id_70bc23ad___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HitArea_vue_vue_type_template_id_0265bfc7___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75);
/* harmony import */ var _HitArea_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HitArea_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HitArea_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _HitArea_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HitArea_vue_vue_type_template_id_0265bfc7___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _HitArea_vue_vue_type_template_id_0265bfc7___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HorizontalList_vue_vue_type_template_id_cc5853e8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76);
/* harmony import */ var _HorizontalList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HorizontalList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HorizontalList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _HorizontalList_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _HorizontalList_vue_vue_type_template_id_cc5853e8___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _HorizontalList_vue_vue_type_template_id_cc5853e8___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 217 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Icon_vue_vue_type_template_id_9679c1fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(77);
/* harmony import */ var _Icon_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(21);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Icon_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Icon_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _Icon_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Icon_vue_vue_type_template_id_9679c1fa___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _Icon_vue_vue_type_template_id_9679c1fa___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 218 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IntersectObserver_vue_vue_type_template_id_6e304b13___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(78);
/* harmony import */ var _intersect_observer_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(23);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _intersect_observer_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _intersect_observer_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _intersect_observer_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _IntersectObserver_vue_vue_type_template_id_6e304b13___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _IntersectObserver_vue_vue_type_template_id_6e304b13___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 219 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LabelFilter_vue_vue_type_template_id_0d84bde6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(79);
/* harmony import */ var _LabelFilter_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _LabelFilter_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _LabelFilter_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _LabelFilter_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LabelFilter_vue_vue_type_template_id_0d84bde6___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _LabelFilter_vue_vue_type_template_id_0d84bde6___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 220 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LiInline_vue_vue_type_template_id_852faa56___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80);
/* harmony import */ var _LiInline_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _LiInline_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _LiInline_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _LiInline_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LiInline_vue_vue_type_template_id_852faa56___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _LiInline_vue_vue_type_template_id_852faa56___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 221 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LiItem_vue_vue_type_template_id_2533e880___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);
/* harmony import */ var _LiItem_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _LiItem_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _LiItem_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _LiItem_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LiItem_vue_vue_type_template_id_2533e880___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _LiItem_vue_vue_type_template_id_2533e880___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 222 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NavAssist_vue_vue_type_template_id_ef4c07ee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82);
/* harmony import */ var _NavAssist_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _NavAssist_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _NavAssist_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _NavAssist_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NavAssist_vue_vue_type_template_id_ef4c07ee___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _NavAssist_vue_vue_type_template_id_ef4c07ee___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 223 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SpanLabel_vue_vue_type_template_id_3aecaae9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(83);
/* harmony import */ var _SpanLabel_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _SpanLabel_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _SpanLabel_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _SpanLabel_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SpanLabel_vue_vue_type_template_id_3aecaae9___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _SpanLabel_vue_vue_type_template_id_3aecaae9___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 224 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _YoutubeLink_vue_vue_type_template_id_8d57fef2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(84);
/* harmony import */ var _YoutubeLink_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(35);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _YoutubeLink_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _YoutubeLink_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _YoutubeLink_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _YoutubeLink_vue_vue_type_template_id_8d57fef2___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _YoutubeLink_vue_vue_type_template_id_8d57fef2___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 225 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _YoutubeVideo_vue_vue_type_template_id_96d609b6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var _YoutubeVideo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _YoutubeVideo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _YoutubeVideo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _YoutubeVideo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _YoutubeVideo_vue_vue_type_template_id_96d609b6___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _YoutubeVideo_vue_vue_type_template_id_96d609b6___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _FilterCategory = __webpack_require__(227);

var _FilterCategory2 = _interopRequireDefault(_FilterCategory);

var _Flyout = __webpack_require__(228);

var _Flyout2 = _interopRequireDefault(_Flyout);

var _FlyoutSection = __webpack_require__(229);

var _FlyoutSection2 = _interopRequireDefault(_FlyoutSection);

var _FooterNavigationCategory = __webpack_require__(230);

var _FooterNavigationCategory2 = _interopRequireDefault(_FooterNavigationCategory);

var _IconButton = __webpack_require__(231);

var _IconButton2 = _interopRequireDefault(_IconButton);

var _InPageNotification = __webpack_require__(232);

var _InPageNotification2 = _interopRequireDefault(_InPageNotification);

var _ListSection = __webpack_require__(233);

var _ListSection2 = _interopRequireDefault(_ListSection);

var _ListUnorderedLimit = __webpack_require__(236);

var _ListUnorderedLimit2 = _interopRequireDefault(_ListUnorderedLimit);

var _MainNavigation = __webpack_require__(237);

var _MainNavigation2 = _interopRequireDefault(_MainNavigation);

var _MainNavigationItem = __webpack_require__(238);

var _MainNavigationItem2 = _interopRequireDefault(_MainNavigationItem);

var _SearchBar = __webpack_require__(240);

var _SearchBar2 = _interopRequireDefault(_SearchBar);

var _SysNav = __webpack_require__(241);

var _SysNav2 = _interopRequireDefault(_SysNav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 227 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FilterCategory_vue_vue_type_template_id_eb0dae62___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(86);
/* harmony import */ var _FilterCategory_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _FilterCategory_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _FilterCategory_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _FilterCategory_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FilterCategory_vue_vue_type_template_id_eb0dae62___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _FilterCategory_vue_vue_type_template_id_eb0dae62___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 228 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Flyout_vue_vue_type_template_id_0ea8a90d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87);
/* harmony import */ var _Flyout_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _Flyout_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _Flyout_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _Flyout_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Flyout_vue_vue_type_template_id_0ea8a90d___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _Flyout_vue_vue_type_template_id_0ea8a90d___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 229 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FlyoutSection_vue_vue_type_template_id_13f4ba84___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(88);
/* harmony import */ var _FlyoutSection_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _FlyoutSection_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _FlyoutSection_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _FlyoutSection_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FlyoutSection_vue_vue_type_template_id_13f4ba84___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _FlyoutSection_vue_vue_type_template_id_13f4ba84___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 230 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FooterNavigationCategory_vue_vue_type_template_id_53e0edd9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89);
/* harmony import */ var _FooterNavigationCategory_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _FooterNavigationCategory_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _FooterNavigationCategory_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _FooterNavigationCategory_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FooterNavigationCategory_vue_vue_type_template_id_53e0edd9___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _FooterNavigationCategory_vue_vue_type_template_id_53e0edd9___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 231 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _IconButton_vue_vue_type_template_id_2835c339___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(90);
/* harmony import */ var _IconButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _IconButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _IconButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _IconButton_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _IconButton_vue_vue_type_template_id_2835c339___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _IconButton_vue_vue_type_template_id_2835c339___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 232 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _InPageNotification_vue_vue_type_template_id_3fca82d1___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(91);
/* harmony import */ var _InPageNotification_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _InPageNotification_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _InPageNotification_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _InPageNotification_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _InPageNotification_vue_vue_type_template_id_3fca82d1___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _InPageNotification_vue_vue_type_template_id_3fca82d1___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 233 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListSection_vue_vue_type_template_id_447b7bc8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92);
/* harmony import */ var _list_section_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _list_section_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _list_section_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _list_section_scss_vue_type_style_index_0_id_447b7bc8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(235);
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(
  _list_section_ts_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListSection_vue_vue_type_template_id_447b7bc8_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _ListSection_vue_vue_type_template_id_447b7bc8_scoped_true___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  "447b7bc8",
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ValueFilter = exports.ValueFilter = function () {
    function ValueFilter(items, filterGroup) {
        _classCallCheck(this, ValueFilter);

        this.filterGroup = undefined;
        this.filterValues = [];
        this.activeFilterValues = [];

        this.items = [];
        this.items = items;
        this.filterGroup = filterGroup;
        this.filterValues = filterGroup ? filterGroup.filterValues : [];
    }

    _createClass(ValueFilter, [{
        key: "setFilterValues",
        value: function setFilterValues(filterValues) {
            this.filterValues = filterValues;
        }
    }, {
        key: "activeFilters",
        value: function activeFilters() {
            return this.activeFilterValues;
        }
    }, {
        key: "possibleFilters",
        value: function possibleFilters() {
            var _this = this;

            var possibleFilters = [];
            if (this.filterGroup === undefined) {
                return [];
            }
            this.filteredItems().forEach(function (item) {
                if (_this.filterGroup === undefined) {
                    return;
                }
                if (item[_this.filterGroup.filterKey] === undefined) {
                    return;
                }
                item[_this.filterGroup.filterKey].forEach(function (value) {
                    possibleFilters.push(value);
                });
            });
            return Array.from(new Set(possibleFilters.filter(function (filterValue) {
                return _this.filterValues.includes(filterValue);
            })));
        }
    }, {
        key: "addActiveFilterValue",
        value: function addActiveFilterValue(value) {
            this.activeFilterValues.push(value);
        }
    }, {
        key: "removeActiveFilterValue",
        value: function removeActiveFilterValue(value) {
            this.activeFilterValues = this.activeFilterValues.filter(function (filterValue) {
                return filterValue !== value;
            });
        }
    }, {
        key: "isFilterActive",
        value: function isFilterActive(value) {
            return this.activeFilterValues.includes(value);
        }
    }, {
        key: "filterItemsByValues",
        value: function filterItemsByValues() {
            var _this2 = this;

            return this.items.filter(function (item) {
                return _this2.activeFilterValues.every(function (value) {
                    if (_this2.filterGroup === undefined) {
                        return false;
                    }
                    if (item[_this2.filterGroup.filterKey] === undefined) {
                        return false;
                    }
                    return item[_this2.filterGroup.filterKey].includes(value);
                });
            });
        }
    }, {
        key: "filteredItems",
        value: function filteredItems() {
            return this.filterItemsByValues();
        }
    }]);

    return ValueFilter;
}();

/***/ }),
/* 235 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_2_node_modules_sass_loader_dist_cjs_js_list_section_scss_vue_type_style_index_0_id_447b7bc8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_2_node_modules_sass_loader_dist_cjs_js_list_section_scss_vue_type_style_index_0_id_447b7bc8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_2_node_modules_sass_loader_dist_cjs_js_list_section_scss_vue_type_style_index_0_id_447b7bc8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_4_2_node_modules_sass_loader_dist_cjs_js_list_section_scss_vue_type_style_index_0_id_447b7bc8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 236 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListUnorderedLimit_vue_vue_type_template_id_9e4ebd32___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93);
/* harmony import */ var _ListUnorderedLimit_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _ListUnorderedLimit_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _ListUnorderedLimit_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _ListUnorderedLimit_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListUnorderedLimit_vue_vue_type_template_id_9e4ebd32___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _ListUnorderedLimit_vue_vue_type_template_id_9e4ebd32___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 237 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MainNavigation_vue_vue_type_template_id_96778c70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(94);
/* harmony import */ var _MainNavigation_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(56);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _MainNavigation_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _MainNavigation_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _MainNavigation_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MainNavigation_vue_vue_type_template_id_96778c70___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _MainNavigation_vue_vue_type_template_id_96778c70___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 238 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MainNavigationItem_vue_vue_type_template_id_38fb657b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95);
/* harmony import */ var _MainNavigationItem_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(58);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _MainNavigationItem_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _MainNavigationItem_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _MainNavigationItem_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MainNavigationItem_vue_vue_type_template_id_38fb657b___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _MainNavigationItem_vue_vue_type_template_id_38fb657b___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 239 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__239__;

/***/ }),
/* 240 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SearchBar_vue_vue_type_template_id_ecdae444___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96);
/* harmony import */ var _SearchBar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _SearchBar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _SearchBar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _SearchBar_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SearchBar_vue_vue_type_template_id_ecdae444___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _SearchBar_vue_vue_type_template_id_ecdae444___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 241 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SysNav_vue_vue_type_template_id_7edee8c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97);
/* harmony import */ var _SysNav_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _SysNav_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _SysNav_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _SysNav_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SysNav_vue_vue_type_template_id_7edee8c0___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _SysNav_vue_vue_type_template_id_7edee8c0___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _PageHeader = __webpack_require__(243);

var _PageHeader2 = _interopRequireDefault(_PageHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 243 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PageHeader_vue_vue_type_template_id_64166b01___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(98);
/* harmony import */ var _PageHeader_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(64);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _PageHeader_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _PageHeader_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _PageHeader_vue_vue_type_script_lang_ts___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PageHeader_vue_vue_type_template_id_64166b01___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _PageHeader_vue_vue_type_template_id_64166b01___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 245 */
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