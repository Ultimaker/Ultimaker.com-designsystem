define("components", ["vue-property-decorator","gsap","lodash/debounce","vue","core-js/modules/es6.typed.array-buffer","core-js/modules/es6.typed.data-view","core-js/modules/es6.typed.int8-array","core-js/modules/es6.typed.uint8-array","core-js/modules/es6.typed.uint8-clamped-array","core-js/modules/es6.typed.int16-array","core-js/modules/es6.typed.uint16-array","core-js/modules/es6.typed.int32-array","core-js/modules/es6.typed.uint32-array","core-js/modules/es6.typed.float32-array","core-js/modules/es6.typed.float64-array","core-js/modules/es6.map","core-js/modules/es6.set","core-js/modules/es6.weak-map","core-js/modules/es6.weak-set","core-js/modules/es6.reflect.apply","core-js/modules/es6.reflect.construct","core-js/modules/es6.reflect.define-property","core-js/modules/es6.reflect.delete-property","core-js/modules/es6.reflect.get","core-js/modules/es6.reflect.get-own-property-descriptor","core-js/modules/es6.reflect.get-prototype-of","core-js/modules/es6.reflect.has","core-js/modules/es6.reflect.is-extensible","core-js/modules/es6.reflect.own-keys","core-js/modules/es6.reflect.prevent-extensions","core-js/modules/es6.reflect.set","core-js/modules/es6.reflect.set-prototype-of","core-js/modules/es6.promise","core-js/modules/es6.symbol","core-js/modules/es6.object.freeze","core-js/modules/es6.object.seal","core-js/modules/es6.object.prevent-extensions","core-js/modules/es6.object.is-frozen","core-js/modules/es6.object.is-sealed","core-js/modules/es6.object.is-extensible","core-js/modules/es6.object.get-own-property-descriptor","core-js/modules/es6.object.get-prototype-of","core-js/modules/es6.object.keys","core-js/modules/es6.object.get-own-property-names","core-js/modules/es6.object.assign","core-js/modules/es6.object.is","core-js/modules/es6.object.set-prototype-of","core-js/modules/es6.function.name","core-js/modules/es6.string.raw","core-js/modules/es6.string.from-code-point","core-js/modules/es6.string.code-point-at","core-js/modules/es6.string.repeat","core-js/modules/es6.string.starts-with","core-js/modules/es6.string.ends-with","core-js/modules/es6.string.includes","core-js/modules/es6.regexp.flags","core-js/modules/es6.regexp.match","core-js/modules/es6.regexp.replace","core-js/modules/es6.regexp.split","core-js/modules/es6.regexp.search","core-js/modules/es6.array.from","core-js/modules/es6.array.of","core-js/modules/es6.array.copy-within","core-js/modules/es6.array.find","core-js/modules/es6.array.find-index","core-js/modules/es6.array.fill","core-js/modules/es6.array.iterator","core-js/modules/es6.number.is-finite","core-js/modules/es6.number.is-integer","core-js/modules/es6.number.is-safe-integer","core-js/modules/es6.number.is-nan","core-js/modules/es6.number.epsilon","core-js/modules/es6.number.min-safe-integer","core-js/modules/es6.number.max-safe-integer","core-js/modules/es6.math.acosh","core-js/modules/es6.math.asinh","core-js/modules/es6.math.atanh","core-js/modules/es6.math.cbrt","core-js/modules/es6.math.clz32","core-js/modules/es6.math.cosh","core-js/modules/es6.math.expm1","core-js/modules/es6.math.fround","core-js/modules/es6.math.hypot","core-js/modules/es6.math.imul","core-js/modules/es6.math.log1p","core-js/modules/es6.math.log10","core-js/modules/es6.math.log2","core-js/modules/es6.math.sign","core-js/modules/es6.math.sinh","core-js/modules/es6.math.tanh","core-js/modules/es6.math.trunc","core-js/modules/es7.array.includes","core-js/modules/es7.object.values","core-js/modules/es7.object.entries","core-js/modules/es7.object.get-own-property-descriptors","core-js/modules/es7.string.pad-start","core-js/modules/es7.string.pad-end","core-js/modules/web.timers","core-js/modules/web.immediate","core-js/modules/web.dom.iterable","vuex"], function(__WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__10__, __WEBPACK_EXTERNAL_MODULE__13__, __WEBPACK_EXTERNAL_MODULE__14__, __WEBPACK_EXTERNAL_MODULE__15__, __WEBPACK_EXTERNAL_MODULE__16__, __WEBPACK_EXTERNAL_MODULE__17__, __WEBPACK_EXTERNAL_MODULE__18__, __WEBPACK_EXTERNAL_MODULE__19__, __WEBPACK_EXTERNAL_MODULE__20__, __WEBPACK_EXTERNAL_MODULE__21__, __WEBPACK_EXTERNAL_MODULE__22__, __WEBPACK_EXTERNAL_MODULE__23__, __WEBPACK_EXTERNAL_MODULE__24__, __WEBPACK_EXTERNAL_MODULE__25__, __WEBPACK_EXTERNAL_MODULE__26__, __WEBPACK_EXTERNAL_MODULE__27__, __WEBPACK_EXTERNAL_MODULE__28__, __WEBPACK_EXTERNAL_MODULE__29__, __WEBPACK_EXTERNAL_MODULE__30__, __WEBPACK_EXTERNAL_MODULE__31__, __WEBPACK_EXTERNAL_MODULE__32__, __WEBPACK_EXTERNAL_MODULE__33__, __WEBPACK_EXTERNAL_MODULE__34__, __WEBPACK_EXTERNAL_MODULE__35__, __WEBPACK_EXTERNAL_MODULE__36__, __WEBPACK_EXTERNAL_MODULE__37__, __WEBPACK_EXTERNAL_MODULE__38__, __WEBPACK_EXTERNAL_MODULE__39__, __WEBPACK_EXTERNAL_MODULE__40__, __WEBPACK_EXTERNAL_MODULE__41__, __WEBPACK_EXTERNAL_MODULE__42__, __WEBPACK_EXTERNAL_MODULE__43__, __WEBPACK_EXTERNAL_MODULE__44__, __WEBPACK_EXTERNAL_MODULE__45__, __WEBPACK_EXTERNAL_MODULE__46__, __WEBPACK_EXTERNAL_MODULE__47__, __WEBPACK_EXTERNAL_MODULE__48__, __WEBPACK_EXTERNAL_MODULE__49__, __WEBPACK_EXTERNAL_MODULE__50__, __WEBPACK_EXTERNAL_MODULE__51__, __WEBPACK_EXTERNAL_MODULE__52__, __WEBPACK_EXTERNAL_MODULE__53__, __WEBPACK_EXTERNAL_MODULE__54__, __WEBPACK_EXTERNAL_MODULE__55__, __WEBPACK_EXTERNAL_MODULE__56__, __WEBPACK_EXTERNAL_MODULE__57__, __WEBPACK_EXTERNAL_MODULE__58__, __WEBPACK_EXTERNAL_MODULE__59__, __WEBPACK_EXTERNAL_MODULE__60__, __WEBPACK_EXTERNAL_MODULE__61__, __WEBPACK_EXTERNAL_MODULE__62__, __WEBPACK_EXTERNAL_MODULE__63__, __WEBPACK_EXTERNAL_MODULE__64__, __WEBPACK_EXTERNAL_MODULE__65__, __WEBPACK_EXTERNAL_MODULE__66__, __WEBPACK_EXTERNAL_MODULE__67__, __WEBPACK_EXTERNAL_MODULE__68__, __WEBPACK_EXTERNAL_MODULE__69__, __WEBPACK_EXTERNAL_MODULE__70__, __WEBPACK_EXTERNAL_MODULE__71__, __WEBPACK_EXTERNAL_MODULE__72__, __WEBPACK_EXTERNAL_MODULE__73__, __WEBPACK_EXTERNAL_MODULE__74__, __WEBPACK_EXTERNAL_MODULE__75__, __WEBPACK_EXTERNAL_MODULE__76__, __WEBPACK_EXTERNAL_MODULE__77__, __WEBPACK_EXTERNAL_MODULE__78__, __WEBPACK_EXTERNAL_MODULE__79__, __WEBPACK_EXTERNAL_MODULE__80__, __WEBPACK_EXTERNAL_MODULE__81__, __WEBPACK_EXTERNAL_MODULE__82__, __WEBPACK_EXTERNAL_MODULE__83__, __WEBPACK_EXTERNAL_MODULE__84__, __WEBPACK_EXTERNAL_MODULE__85__, __WEBPACK_EXTERNAL_MODULE__86__, __WEBPACK_EXTERNAL_MODULE__87__, __WEBPACK_EXTERNAL_MODULE__88__, __WEBPACK_EXTERNAL_MODULE__89__, __WEBPACK_EXTERNAL_MODULE__90__, __WEBPACK_EXTERNAL_MODULE__91__, __WEBPACK_EXTERNAL_MODULE__92__, __WEBPACK_EXTERNAL_MODULE__93__, __WEBPACK_EXTERNAL_MODULE__94__, __WEBPACK_EXTERNAL_MODULE__95__, __WEBPACK_EXTERNAL_MODULE__96__, __WEBPACK_EXTERNAL_MODULE__97__, __WEBPACK_EXTERNAL_MODULE__98__, __WEBPACK_EXTERNAL_MODULE__99__, __WEBPACK_EXTERNAL_MODULE__100__, __WEBPACK_EXTERNAL_MODULE__101__, __WEBPACK_EXTERNAL_MODULE__102__, __WEBPACK_EXTERNAL_MODULE__103__, __WEBPACK_EXTERNAL_MODULE__104__, __WEBPACK_EXTERNAL_MODULE__105__, __WEBPACK_EXTERNAL_MODULE__106__, __WEBPACK_EXTERNAL_MODULE__107__, __WEBPACK_EXTERNAL_MODULE__108__, __WEBPACK_EXTERNAL_MODULE__109__, __WEBPACK_EXTERNAL_MODULE__276__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 11);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module, global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_gsScope", function() { return _gsScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TweenLite", function() { return TweenLite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "globals", function() { return globals; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TweenLite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleTimeline", function() { return SimpleTimeline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Animation", function() { return Animation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ease", function() { return Ease; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Linear", function() { return Linear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Power0", function() { return Power0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Power1", function() { return Power1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Power2", function() { return Power2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Power3", function() { return Power3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Power4", function() { return Power4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TweenPlugin", function() { return TweenPlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDispatcher", function() { return EventDispatcher; });
/*!
 * VERSION: 2.0.2
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */

/* ES6 changes:
	- declare and export _gsScope at top.
	- set var TweenLite = the result of the main function
	- export default TweenLite at the bottom
	- return TweenLite at the bottom of the main function
	- pass in _gsScope as the first parameter of the main function (which is actually at the bottom)
	- remove the "export to multiple environments" in Definition().
 */
var _gsScope = (typeof(window) !== "undefined") ? window : ( true && module.exports && typeof(global) !== "undefined") ? global : undefined || {};

var TweenLite = (function(window, moduleName) {

		"use strict";
		var _exports = {},
			_doc = window.document,
			_globals = window.GreenSockGlobals = window.GreenSockGlobals || window;
		if (_globals.TweenLite) {
			return _globals.TweenLite; //in case the core set of classes is already loaded, don't instantiate twice.
		}
		var _namespace = function(ns) {
				var a = ns.split("."),
					p = _globals, i;
				for (i = 0; i < a.length; i++) {
					p[a[i]] = p = p[a[i]] || {};
				}
				return p;
			},
			gs = _namespace("com.greensock"),
			_tinyNum = 0.0000000001,
			_slice = function(a) { //don't use Array.prototype.slice.call(target, 0) because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
				var b = [],
					l = a.length,
					i;
				for (i = 0; i !== l; b.push(a[i++])) {}
				return b;
			},
			_emptyFunc = function() {},
			_isArray = (function() { //works around issues in iframe environments where the Array global isn't shared, thus if the object originates in a different window/iframe, "(obj instanceof Array)" will evaluate false. We added some speed optimizations to avoid Object.prototype.toString.call() unless it's absolutely necessary because it's VERY slow (like 20x slower)
				var toString = Object.prototype.toString,
					array = toString.call([]);
				return function(obj) {
					return obj != null && (obj instanceof Array || (typeof(obj) === "object" && !!obj.push && toString.call(obj) === array));
				};
			}()),
			a, i, p, _ticker, _tickerActive,
			_defLookup = {},

			/**
			 * @constructor
			 * Defines a GreenSock class, optionally with an array of dependencies that must be instantiated first and passed into the definition.
			 * This allows users to load GreenSock JS files in any order even if they have interdependencies (like CSSPlugin extends TweenPlugin which is
			 * inside TweenLite.js, but if CSSPlugin is loaded first, it should wait to run its code until TweenLite.js loads and instantiates TweenPlugin
			 * and then pass TweenPlugin to CSSPlugin's definition). This is all done automatically and internally.
			 *
			 * Every definition will be added to a "com.greensock" global object (typically window, but if a window.GreenSockGlobals object is found,
			 * it will go there as of v1.7). For example, TweenLite will be found at window.com.greensock.TweenLite and since it's a global class that should be available anywhere,
			 * it is ALSO referenced at window.TweenLite. However some classes aren't considered global, like the base com.greensock.core.Animation class, so
			 * those will only be at the package like window.com.greensock.core.Animation. Again, if you define a GreenSockGlobals object on the window, everything
			 * gets tucked neatly inside there instead of on the window directly. This allows you to do advanced things like load multiple versions of GreenSock
			 * files and put them into distinct objects (imagine a banner ad uses a newer version but the main site uses an older one). In that case, you could
			 * sandbox the banner one like:
			 *
			 * <script>
			 *     var gs = window.GreenSockGlobals = {}; //the newer version we're about to load could now be referenced in a "gs" object, like gs.TweenLite.to(...). Use whatever alias you want as long as it's unique, "gs" or "banner" or whatever.
			 * </script>
			 * <script src="js/greensock/v1.7/TweenMax.js"></script>
			 * <script>
			 *     window.GreenSockGlobals = window._gsQueue = window._gsDefine = null; //reset it back to null (along with the special _gsQueue variable) so that the next load of TweenMax affects the window and we can reference things directly like TweenLite.to(...)
			 * </script>
			 * <script src="js/greensock/v1.6/TweenMax.js"></script>
			 * <script>
			 *     gs.TweenLite.to(...); //would use v1.7
			 *     TweenLite.to(...); //would use v1.6
			 * </script>
			 *
			 * @param {!string} ns The namespace of the class definition, leaving off "com.greensock." as that's assumed. For example, "TweenLite" or "plugins.CSSPlugin" or "easing.Back".
			 * @param {!Array.<string>} dependencies An array of dependencies (described as their namespaces minus "com.greensock." prefix). For example ["TweenLite","plugins.TweenPlugin","core.Animation"]
			 * @param {!function():Object} func The function that should be called and passed the resolved dependencies which will return the actual class for this definition.
			 * @param {boolean=} global If true, the class will be added to the global scope (typically window unless you define a window.GreenSockGlobals object)
			 */
			Definition = function(ns, dependencies, func, global) {
				this.sc = (_defLookup[ns]) ? _defLookup[ns].sc : []; //subclasses
				_defLookup[ns] = this;
				this.gsClass = null;
				this.func = func;
				var _classes = [];
				this.check = function(init) {
					var i = dependencies.length,
						missing = i,
						cur, a, n, cl;
					while (--i > -1) {
						if ((cur = _defLookup[dependencies[i]] || new Definition(dependencies[i], [])).gsClass) {
							_classes[i] = cur.gsClass;
							missing--;
						} else if (init) {
							cur.sc.push(this);
						}
					}
					if (missing === 0 && func) {
						a = ("com.greensock." + ns).split(".");
						n = a.pop();
						cl = _namespace(a.join("."))[n] = this.gsClass = func.apply(func, _classes);

						//exports to multiple environments
						if (global) {
							_globals[n] = _exports[n] = cl; //provides a way to avoid global namespace pollution. By default, the main classes like TweenLite, Power1, Strong, etc. are added to window unless a GreenSockGlobals is defined. So if you want to have things added to a custom object instead, just do something like window.GreenSockGlobals = {} before loading any GreenSock files. You can even set up an alias like window.GreenSockGlobals = windows.gs = {} so that you can access everything like gs.TweenLite. Also remember that ALL classes are added to the window.com.greensock object (in their respective packages, like com.greensock.easing.Power1, com.greensock.TweenLite, etc.)
							/*
							if (typeof(module) !== "undefined" && module.exports) { //node
								if (ns === moduleName) {
									module.exports = _exports[moduleName] = cl;
									for (i in _exports) {
										cl[i] = _exports[i];
									}
								} else if (_exports[moduleName]) {
									_exports[moduleName][n] = cl;
								}
							} else if (typeof(define) === "function" && define.amd){ //AMD
								define((window.GreenSockAMDPath ? window.GreenSockAMDPath + "/" : "") + ns.split(".").pop(), [], function() { return cl; });
							}
							*/
						}
						for (i = 0; i < this.sc.length; i++) {
							this.sc[i].check();
						}
					}
				};
				this.check(true);
			},

			//used to create Definition instances (which basically registers a class that has dependencies).
			_gsDefine = window._gsDefine = function(ns, dependencies, func, global) {
				return new Definition(ns, dependencies, func, global);
			},

			//a quick way to create a class that doesn't have any dependencies. Returns the class, but first registers it in the GreenSock namespace so that other classes can grab it (other classes might be dependent on the class).
			_class = gs._class = function(ns, func, global) {
				func = func || function() {};
				_gsDefine(ns, [], function(){ return func; }, global);
				return func;
			};

		_gsDefine.globals = _globals;



/*
 * ----------------------------------------------------------------
 * Ease
 * ----------------------------------------------------------------
 */
		var _baseParams = [0, 0, 1, 1],
			Ease = _class("easing.Ease", function(func, extraParams, type, power) {
				this._func = func;
				this._type = type || 0;
				this._power = power || 0;
				this._params = extraParams ? _baseParams.concat(extraParams) : _baseParams;
			}, true),
			_easeMap = Ease.map = {},
			_easeReg = Ease.register = function(ease, names, types, create) {
				var na = names.split(","),
					i = na.length,
					ta = (types || "easeIn,easeOut,easeInOut").split(","),
					e, name, j, type;
				while (--i > -1) {
					name = na[i];
					e = create ? _class("easing."+name, null, true) : gs.easing[name] || {};
					j = ta.length;
					while (--j > -1) {
						type = ta[j];
						_easeMap[name + "." + type] = _easeMap[type + name] = e[type] = ease.getRatio ? ease : ease[type] || new ease();
					}
				}
			};

		p = Ease.prototype;
		p._calcEnd = false;
		p.getRatio = function(p) {
			if (this._func) {
				this._params[0] = p;
				return this._func.apply(null, this._params);
			}
			var t = this._type,
				pw = this._power,
				r = (t === 1) ? 1 - p : (t === 2) ? p : (p < 0.5) ? p * 2 : (1 - p) * 2;
			if (pw === 1) {
				r *= r;
			} else if (pw === 2) {
				r *= r * r;
			} else if (pw === 3) {
				r *= r * r * r;
			} else if (pw === 4) {
				r *= r * r * r * r;
			}
			return (t === 1) ? 1 - r : (t === 2) ? r : (p < 0.5) ? r / 2 : 1 - (r / 2);
		};

		//create all the standard eases like Linear, Quad, Cubic, Quart, Quint, Strong, Power0, Power1, Power2, Power3, and Power4 (each with easeIn, easeOut, and easeInOut)
		a = ["Linear","Quad","Cubic","Quart","Quint,Strong"];
		i = a.length;
		while (--i > -1) {
			p = a[i]+",Power"+i;
			_easeReg(new Ease(null,null,1,i), p, "easeOut", true);
			_easeReg(new Ease(null,null,2,i), p, "easeIn" + ((i === 0) ? ",easeNone" : ""));
			_easeReg(new Ease(null,null,3,i), p, "easeInOut");
		}
		_easeMap.linear = gs.easing.Linear.easeIn;
		_easeMap.swing = gs.easing.Quad.easeInOut; //for jQuery folks


/*
 * ----------------------------------------------------------------
 * EventDispatcher
 * ----------------------------------------------------------------
 */
		var EventDispatcher = _class("events.EventDispatcher", function(target) {
			this._listeners = {};
			this._eventTarget = target || this;
		});
		p = EventDispatcher.prototype;

		p.addEventListener = function(type, callback, scope, useParam, priority) {
			priority = priority || 0;
			var list = this._listeners[type],
				index = 0,
				listener, i;
			if (this === _ticker && !_tickerActive) {
				_ticker.wake();
			}
			if (list == null) {
				this._listeners[type] = list = [];
			}
			i = list.length;
			while (--i > -1) {
				listener = list[i];
				if (listener.c === callback && listener.s === scope) {
					list.splice(i, 1);
				} else if (index === 0 && listener.pr < priority) {
					index = i + 1;
				}
			}
			list.splice(index, 0, {c:callback, s:scope, up:useParam, pr:priority});
		};

		p.removeEventListener = function(type, callback) {
			var list = this._listeners[type], i;
			if (list) {
				i = list.length;
				while (--i > -1) {
					if (list[i].c === callback) {
						list.splice(i, 1);
						return;
					}
				}
			}
		};

		p.dispatchEvent = function(type) {
			var list = this._listeners[type],
				i, t, listener;
			if (list) {
				i = list.length;
				if (i > 1) {
					list = list.slice(0); //in case addEventListener() is called from within a listener/callback (otherwise the index could change, resulting in a skip)
				}
				t = this._eventTarget;
				while (--i > -1) {
					listener = list[i];
					if (listener) {
						if (listener.up) {
							listener.c.call(listener.s || t, {type:type, target:t});
						} else {
							listener.c.call(listener.s || t);
						}
					}
				}
			}
		};


/*
 * ----------------------------------------------------------------
 * Ticker
 * ----------------------------------------------------------------
 */
 		var _reqAnimFrame = window.requestAnimationFrame,
			_cancelAnimFrame = window.cancelAnimationFrame,
			_getTime = Date.now || function() {return new Date().getTime();},
			_lastUpdate = _getTime();

		//now try to determine the requestAnimationFrame and cancelAnimationFrame functions and if none are found, we'll use a setTimeout()/clearTimeout() polyfill.
		a = ["ms","moz","webkit","o"];
		i = a.length;
		while (--i > -1 && !_reqAnimFrame) {
			_reqAnimFrame = window[a[i] + "RequestAnimationFrame"];
			_cancelAnimFrame = window[a[i] + "CancelAnimationFrame"] || window[a[i] + "CancelRequestAnimationFrame"];
		}

		_class("Ticker", function(fps, useRAF) {
			var _self = this,
				_startTime = _getTime(),
				_useRAF = (useRAF !== false && _reqAnimFrame) ? "auto" : false,
				_lagThreshold = 500,
				_adjustedLag = 33,
				_tickWord = "tick", //helps reduce gc burden
				_fps, _req, _id, _gap, _nextTime,
				_tick = function(manual) {
					var elapsed = _getTime() - _lastUpdate,
						overlap, dispatch;
					if (elapsed > _lagThreshold) {
						_startTime += elapsed - _adjustedLag;
					}
					_lastUpdate += elapsed;
					_self.time = (_lastUpdate - _startTime) / 1000;
					overlap = _self.time - _nextTime;
					if (!_fps || overlap > 0 || manual === true) {
						_self.frame++;
						_nextTime += overlap + (overlap >= _gap ? 0.004 : _gap - overlap);
						dispatch = true;
					}
					if (manual !== true) { //make sure the request is made before we dispatch the "tick" event so that timing is maintained. Otherwise, if processing the "tick" requires a bunch of time (like 15ms) and we're using a setTimeout() that's based on 16.7ms, it'd technically take 31.7ms between frames otherwise.
						_id = _req(_tick);
					}
					if (dispatch) {
						_self.dispatchEvent(_tickWord);
					}
				};

			EventDispatcher.call(_self);
			_self.time = _self.frame = 0;
			_self.tick = function() {
				_tick(true);
			};

			_self.lagSmoothing = function(threshold, adjustedLag) {
				if (!arguments.length) { //if lagSmoothing() is called with no arguments, treat it like a getter that returns a boolean indicating if it's enabled or not. This is purposely undocumented and is for internal use.
					return (_lagThreshold < 1 / _tinyNum);
				}
				_lagThreshold = threshold || (1 / _tinyNum); //zero should be interpreted as basically unlimited
				_adjustedLag = Math.min(adjustedLag, _lagThreshold, 0);
			};

			_self.sleep = function() {
				if (_id == null) {
					return;
				}
				if (!_useRAF || !_cancelAnimFrame) {
					clearTimeout(_id);
				} else {
					_cancelAnimFrame(_id);
				}
				_req = _emptyFunc;
				_id = null;
				if (_self === _ticker) {
					_tickerActive = false;
				}
			};

			_self.wake = function(seamless) {
				if (_id !== null) {
					_self.sleep();
				} else if (seamless) {
					_startTime += -_lastUpdate + (_lastUpdate = _getTime());
				} else if (_self.frame > 10) { //don't trigger lagSmoothing if we're just waking up, and make sure that at least 10 frames have elapsed because of the iOS bug that we work around below with the 1.5-second setTimout().
					_lastUpdate = _getTime() - _lagThreshold + 5;
				}
				_req = (_fps === 0) ? _emptyFunc : (!_useRAF || !_reqAnimFrame) ? function(f) { return setTimeout(f, ((_nextTime - _self.time) * 1000 + 1) | 0); } : _reqAnimFrame;
				if (_self === _ticker) {
					_tickerActive = true;
				}
				_tick(2);
			};

			_self.fps = function(value) {
				if (!arguments.length) {
					return _fps;
				}
				_fps = value;
				_gap = 1 / (_fps || 60);
				_nextTime = this.time + _gap;
				_self.wake();
			};

			_self.useRAF = function(value) {
				if (!arguments.length) {
					return _useRAF;
				}
				_self.sleep();
				_useRAF = value;
				_self.fps(_fps);
			};
			_self.fps(fps);

			//a bug in iOS 6 Safari occasionally prevents the requestAnimationFrame from working initially, so we use a 1.5-second timeout that automatically falls back to setTimeout() if it senses this condition.
			setTimeout(function() {
				if (_useRAF === "auto" && _self.frame < 5 && (_doc || {}).visibilityState !== "hidden") {
					_self.useRAF(false);
				}
			}, 1500);
		});

		p = gs.Ticker.prototype = new gs.events.EventDispatcher();
		p.constructor = gs.Ticker;


/*
 * ----------------------------------------------------------------
 * Animation
 * ----------------------------------------------------------------
 */
		var Animation = _class("core.Animation", function(duration, vars) {
				this.vars = vars = vars || {};
				this._duration = this._totalDuration = duration || 0;
				this._delay = Number(vars.delay) || 0;
				this._timeScale = 1;
				this._active = (vars.immediateRender === true);
				this.data = vars.data;
				this._reversed = (vars.reversed === true);

				if (!_rootTimeline) {
					return;
				}
				if (!_tickerActive) { //some browsers (like iOS 6 Safari) shut down JavaScript execution when the tab is disabled and they [occasionally] neglect to start up requestAnimationFrame again when returning - this code ensures that the engine starts up again properly.
					_ticker.wake();
				}

				var tl = this.vars.useFrames ? _rootFramesTimeline : _rootTimeline;
				tl.add(this, tl._time);

				if (this.vars.paused) {
					this.paused(true);
				}
			});

		_ticker = Animation.ticker = new gs.Ticker();
		p = Animation.prototype;
		p._dirty = p._gc = p._initted = p._paused = false;
		p._totalTime = p._time = 0;
		p._rawPrevTime = -1;
		p._next = p._last = p._onUpdate = p._timeline = p.timeline = null;
		p._paused = false;


		//some browsers (like iOS) occasionally drop the requestAnimationFrame event when the user switches to a different tab and then comes back again, so we use a 2-second setTimeout() to sense if/when that condition occurs and then wake() the ticker.
		var _checkTimeout = function() {
				if (_tickerActive && _getTime() - _lastUpdate > 2000 && ((_doc || {}).visibilityState !== "hidden" || !_ticker.lagSmoothing())) { //note: if the tab is hidden, we should still wake if lagSmoothing has been disabled.
					_ticker.wake();
				}
				var t = setTimeout(_checkTimeout, 2000);
				if (t.unref) {
					// allows a node process to exit even if the timeout’s callback hasn't been invoked. Without it, the node process could hang as this function is called every two seconds.
					t.unref();
				}
			};
		_checkTimeout();


		p.play = function(from, suppressEvents) {
			if (from != null) {
				this.seek(from, suppressEvents);
			}
			return this.reversed(false).paused(false);
		};

		p.pause = function(atTime, suppressEvents) {
			if (atTime != null) {
				this.seek(atTime, suppressEvents);
			}
			return this.paused(true);
		};

		p.resume = function(from, suppressEvents) {
			if (from != null) {
				this.seek(from, suppressEvents);
			}
			return this.paused(false);
		};

		p.seek = function(time, suppressEvents) {
			return this.totalTime(Number(time), suppressEvents !== false);
		};

		p.restart = function(includeDelay, suppressEvents) {
			return this.reversed(false).paused(false).totalTime(includeDelay ? -this._delay : 0, (suppressEvents !== false), true);
		};

		p.reverse = function(from, suppressEvents) {
			if (from != null) {
				this.seek((from || this.totalDuration()), suppressEvents);
			}
			return this.reversed(true).paused(false);
		};

		p.render = function(time, suppressEvents, force) {
			//stub - we override this method in subclasses.
		};

		p.invalidate = function() {
			this._time = this._totalTime = 0;
			this._initted = this._gc = false;
			this._rawPrevTime = -1;
			if (this._gc || !this.timeline) {
				this._enabled(true);
			}
			return this;
		};

		p.isActive = function() {
			var tl = this._timeline, //the 2 root timelines won't have a _timeline; they're always active.
				startTime = this._startTime,
				rawTime;
			return (!tl || (!this._gc && !this._paused && tl.isActive() && (rawTime = tl.rawTime(true)) >= startTime && rawTime < startTime + this.totalDuration() / this._timeScale - 0.0000001));
		};

		p._enabled = function (enabled, ignoreTimeline) {
			if (!_tickerActive) {
				_ticker.wake();
			}
			this._gc = !enabled;
			this._active = this.isActive();
			if (ignoreTimeline !== true) {
				if (enabled && !this.timeline) {
					this._timeline.add(this, this._startTime - this._delay);
				} else if (!enabled && this.timeline) {
					this._timeline._remove(this, true);
				}
			}
			return false;
		};


		p._kill = function(vars, target) {
			return this._enabled(false, false);
		};

		p.kill = function(vars, target) {
			this._kill(vars, target);
			return this;
		};

		p._uncache = function(includeSelf) {
			var tween = includeSelf ? this : this.timeline;
			while (tween) {
				tween._dirty = true;
				tween = tween.timeline;
			}
			return this;
		};

		p._swapSelfInParams = function(params) {
			var i = params.length,
				copy = params.concat();
			while (--i > -1) {
				if (params[i] === "{self}") {
					copy[i] = this;
				}
			}
			return copy;
		};

		p._callback = function(type) {
			var v = this.vars,
				callback = v[type],
				params = v[type + "Params"],
				scope = v[type + "Scope"] || v.callbackScope || this,
				l = params ? params.length : 0;
			switch (l) { //speed optimization; call() is faster than apply() so use it when there are only a few parameters (which is by far most common). Previously we simply did var v = this.vars; v[type].apply(v[type + "Scope"] || v.callbackScope || this, v[type + "Params"] || _blankArray);
				case 0: callback.call(scope); break;
				case 1: callback.call(scope, params[0]); break;
				case 2: callback.call(scope, params[0], params[1]); break;
				default: callback.apply(scope, params);
			}
		};

//----Animation getters/setters --------------------------------------------------------

		p.eventCallback = function(type, callback, params, scope) {
			if ((type || "").substr(0,2) === "on") {
				var v = this.vars;
				if (arguments.length === 1) {
					return v[type];
				}
				if (callback == null) {
					delete v[type];
				} else {
					v[type] = callback;
					v[type + "Params"] = (_isArray(params) && params.join("").indexOf("{self}") !== -1) ? this._swapSelfInParams(params) : params;
					v[type + "Scope"] = scope;
				}
				if (type === "onUpdate") {
					this._onUpdate = callback;
				}
			}
			return this;
		};

		p.delay = function(value) {
			if (!arguments.length) {
				return this._delay;
			}
			if (this._timeline.smoothChildTiming) {
				this.startTime( this._startTime + value - this._delay );
			}
			this._delay = value;
			return this;
		};

		p.duration = function(value) {
			if (!arguments.length) {
				this._dirty = false;
				return this._duration;
			}
			this._duration = this._totalDuration = value;
			this._uncache(true); //true in case it's a TweenMax or TimelineMax that has a repeat - we'll need to refresh the totalDuration.
			if (this._timeline.smoothChildTiming) if (this._time > 0) if (this._time < this._duration) if (value !== 0) {
				this.totalTime(this._totalTime * (value / this._duration), true);
			}
			return this;
		};

		p.totalDuration = function(value) {
			this._dirty = false;
			return (!arguments.length) ? this._totalDuration : this.duration(value);
		};

		p.time = function(value, suppressEvents) {
			if (!arguments.length) {
				return this._time;
			}
			if (this._dirty) {
				this.totalDuration();
			}
			return this.totalTime((value > this._duration) ? this._duration : value, suppressEvents);
		};

		p.totalTime = function(time, suppressEvents, uncapped) {
			if (!_tickerActive) {
				_ticker.wake();
			}
			if (!arguments.length) {
				return this._totalTime;
			}
			if (this._timeline) {
				if (time < 0 && !uncapped) {
					time += this.totalDuration();
				}
				if (this._timeline.smoothChildTiming) {
					if (this._dirty) {
						this.totalDuration();
					}
					var totalDuration = this._totalDuration,
						tl = this._timeline;
					if (time > totalDuration && !uncapped) {
						time = totalDuration;
					}
					this._startTime = (this._paused ? this._pauseTime : tl._time) - ((!this._reversed ? time : totalDuration - time) / this._timeScale);
					if (!tl._dirty) { //for performance improvement. If the parent's cache is already dirty, it already took care of marking the ancestors as dirty too, so skip the function call here.
						this._uncache(false);
					}
					//in case any of the ancestor timelines had completed but should now be enabled, we should reset their totalTime() which will also ensure that they're lined up properly and enabled. Skip for animations that are on the root (wasteful). Example: a TimelineLite.exportRoot() is performed when there's a paused tween on the root, the export will not complete until that tween is unpaused, but imagine a child gets restarted later, after all [unpaused] tweens have completed. The startTime of that child would get pushed out, but one of the ancestors may have completed.
					if (tl._timeline) {
						while (tl._timeline) {
							if (tl._timeline._time !== (tl._startTime + tl._totalTime) / tl._timeScale) {
								tl.totalTime(tl._totalTime, true);
							}
							tl = tl._timeline;
						}
					}
				}
				if (this._gc) {
					this._enabled(true, false);
				}
				if (this._totalTime !== time || this._duration === 0) {
					if (_lazyTweens.length) {
						_lazyRender();
					}
					this.render(time, suppressEvents, false);
					if (_lazyTweens.length) { //in case rendering caused any tweens to lazy-init, we should render them because typically when someone calls seek() or time() or progress(), they expect an immediate render.
						_lazyRender();
					}
				}
			}
			return this;
		};

		p.progress = p.totalProgress = function(value, suppressEvents) {
			var duration = this.duration();
			return (!arguments.length) ? (duration ? this._time / duration : this.ratio) : this.totalTime(duration * value, suppressEvents);
		};

		p.startTime = function(value) {
			if (!arguments.length) {
				return this._startTime;
			}
			if (value !== this._startTime) {
				this._startTime = value;
				if (this.timeline) if (this.timeline._sortChildren) {
					this.timeline.add(this, value - this._delay); //ensures that any necessary re-sequencing of Animations in the timeline occurs to make sure the rendering order is correct.
				}
			}
			return this;
		};

		p.endTime = function(includeRepeats) {
			return this._startTime + ((includeRepeats != false) ? this.totalDuration() : this.duration()) / this._timeScale;
		};

		p.timeScale = function(value) {
			if (!arguments.length) {
				return this._timeScale;
			}
			var pauseTime, t;
			value = value || _tinyNum; //can't allow zero because it'll throw the math off
			if (this._timeline && this._timeline.smoothChildTiming) {
				pauseTime = this._pauseTime;
				t = (pauseTime || pauseTime === 0) ? pauseTime : this._timeline.totalTime();
				this._startTime = t - ((t - this._startTime) * this._timeScale / value);
			}
			this._timeScale = value;
			t = this.timeline;
			while (t && t.timeline) { //must update the duration/totalDuration of all ancestor timelines immediately in case in the middle of a render loop, one tween alters another tween's timeScale which shoves its startTime before 0, forcing the parent timeline to shift around and shiftChildren() which could affect that next tween's render (startTime). Doesn't matter for the root timeline though.
				t._dirty = true;
				t.totalDuration();
				t = t.timeline;
			}
			return this;
		};

		p.reversed = function(value) {
			if (!arguments.length) {
				return this._reversed;
			}
			if (value != this._reversed) {
				this._reversed = value;
				this.totalTime(((this._timeline && !this._timeline.smoothChildTiming) ? this.totalDuration() - this._totalTime : this._totalTime), true);
			}
			return this;
		};

		p.paused = function(value) {
			if (!arguments.length) {
				return this._paused;
			}
			var tl = this._timeline,
				raw, elapsed;
			if (value != this._paused) if (tl) {
				if (!_tickerActive && !value) {
					_ticker.wake();
				}
				raw = tl.rawTime();
				elapsed = raw - this._pauseTime;
				if (!value && tl.smoothChildTiming) {
					this._startTime += elapsed;
					this._uncache(false);
				}
				this._pauseTime = value ? raw : null;
				this._paused = value;
				this._active = this.isActive();
				if (!value && elapsed !== 0 && this._initted && this.duration()) {
					raw = tl.smoothChildTiming ? this._totalTime : (raw - this._startTime) / this._timeScale;
					this.render(raw, (raw === this._totalTime), true); //in case the target's properties changed via some other tween or manual update by the user, we should force a render.
				}
			}
			if (this._gc && !value) {
				this._enabled(true, false);
			}
			return this;
		};


/*
 * ----------------------------------------------------------------
 * SimpleTimeline
 * ----------------------------------------------------------------
 */
		var SimpleTimeline = _class("core.SimpleTimeline", function(vars) {
			Animation.call(this, 0, vars);
			this.autoRemoveChildren = this.smoothChildTiming = true;
		});

		p = SimpleTimeline.prototype = new Animation();
		p.constructor = SimpleTimeline;
		p.kill()._gc = false;
		p._first = p._last = p._recent = null;
		p._sortChildren = false;

		p.add = p.insert = function(child, position, align, stagger) {
			var prevTween, st;
			child._startTime = Number(position || 0) + child._delay;
			if (child._paused) if (this !== child._timeline) { //we only adjust the _pauseTime if it wasn't in this timeline already. Remember, sometimes a tween will be inserted again into the same timeline when its startTime is changed so that the tweens in the TimelineLite/Max are re-ordered properly in the linked list (so everything renders in the proper order).
				child._pauseTime = this.rawTime() - (child._timeline.rawTime() - child._pauseTime);
			}
			if (child.timeline) {
				child.timeline._remove(child, true); //removes from existing timeline so that it can be properly added to this one.
			}
			child.timeline = child._timeline = this;
			if (child._gc) {
				child._enabled(true, true);
			}
			prevTween = this._last;
			if (this._sortChildren) {
				st = child._startTime;
				while (prevTween && prevTween._startTime > st) {
					prevTween = prevTween._prev;
				}
			}
			if (prevTween) {
				child._next = prevTween._next;
				prevTween._next = child;
			} else {
				child._next = this._first;
				this._first = child;
			}
			if (child._next) {
				child._next._prev = child;
			} else {
				this._last = child;
			}
			child._prev = prevTween;
			this._recent = child;
			if (this._timeline) {
				this._uncache(true);
			}
			return this;
		};

		p._remove = function(tween, skipDisable) {
			if (tween.timeline === this) {
				if (!skipDisable) {
					tween._enabled(false, true);
				}

				if (tween._prev) {
					tween._prev._next = tween._next;
				} else if (this._first === tween) {
					this._first = tween._next;
				}
				if (tween._next) {
					tween._next._prev = tween._prev;
				} else if (this._last === tween) {
					this._last = tween._prev;
				}
				tween._next = tween._prev = tween.timeline = null;
				if (tween === this._recent) {
					this._recent = this._last;
				}

				if (this._timeline) {
					this._uncache(true);
				}
			}
			return this;
		};

		p.render = function(time, suppressEvents, force) {
			var tween = this._first,
				next;
			this._totalTime = this._time = this._rawPrevTime = time;
			while (tween) {
				next = tween._next; //record it here because the value could change after rendering...
				if (tween._active || (time >= tween._startTime && !tween._paused && !tween._gc)) {
					if (!tween._reversed) {
						tween.render((time - tween._startTime) * tween._timeScale, suppressEvents, force);
					} else {
						tween.render(((!tween._dirty) ? tween._totalDuration : tween.totalDuration()) - ((time - tween._startTime) * tween._timeScale), suppressEvents, force);
					}
				}
				tween = next;
			}
		};

		p.rawTime = function() {
			if (!_tickerActive) {
				_ticker.wake();
			}
			return this._totalTime;
		};

/*
 * ----------------------------------------------------------------
 * TweenLite
 * ----------------------------------------------------------------
 */
		var TweenLite = _class("TweenLite", function(target, duration, vars) {
				Animation.call(this, duration, vars);
				this.render = TweenLite.prototype.render; //speed optimization (avoid prototype lookup on this "hot" method)

				if (target == null) {
					throw "Cannot tween a null target.";
				}

				this.target = target = (typeof(target) !== "string") ? target : TweenLite.selector(target) || target;

				var isSelector = (target.jquery || (target.length && target !== window && target[0] && (target[0] === window || (target[0].nodeType && target[0].style && !target.nodeType)))),
					overwrite = this.vars.overwrite,
					i, targ, targets;

				this._overwrite = overwrite = (overwrite == null) ? _overwriteLookup[TweenLite.defaultOverwrite] : (typeof(overwrite) === "number") ? overwrite >> 0 : _overwriteLookup[overwrite];

				if ((isSelector || target instanceof Array || (target.push && _isArray(target))) && typeof(target[0]) !== "number") {
					this._targets = targets = _slice(target);  //don't use Array.prototype.slice.call(target, 0) because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
					this._propLookup = [];
					this._siblings = [];
					for (i = 0; i < targets.length; i++) {
						targ = targets[i];
						if (!targ) {
							targets.splice(i--, 1);
							continue;
						} else if (typeof(targ) === "string") {
							targ = targets[i--] = TweenLite.selector(targ); //in case it's an array of strings
							if (typeof(targ) === "string") {
								targets.splice(i+1, 1); //to avoid an endless loop (can't imagine why the selector would return a string, but just in case)
							}
							continue;
						} else if (targ.length && targ !== window && targ[0] && (targ[0] === window || (targ[0].nodeType && targ[0].style && !targ.nodeType))) { //in case the user is passing in an array of selector objects (like jQuery objects), we need to check one more level and pull things out if necessary. Also note that <select> elements pass all the criteria regarding length and the first child having style, so we must also check to ensure the target isn't an HTML node itself.
							targets.splice(i--, 1);
							this._targets = targets = targets.concat(_slice(targ));
							continue;
						}
						this._siblings[i] = _register(targ, this, false);
						if (overwrite === 1) if (this._siblings[i].length > 1) {
							_applyOverwrite(targ, this, null, 1, this._siblings[i]);
						}
					}

				} else {
					this._propLookup = {};
					this._siblings = _register(target, this, false);
					if (overwrite === 1) if (this._siblings.length > 1) {
						_applyOverwrite(target, this, null, 1, this._siblings);
					}
				}
				if (this.vars.immediateRender || (duration === 0 && this._delay === 0 && this.vars.immediateRender !== false)) {
					this._time = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)
					this.render(Math.min(0, -this._delay)); //in case delay is negative
				}
			}, true),
			_isSelector = function(v) {
				return (v && v.length && v !== window && v[0] && (v[0] === window || (v[0].nodeType && v[0].style && !v.nodeType))); //we cannot check "nodeType" if the target is window from within an iframe, otherwise it will trigger a security error in some browsers like Firefox.
			},
			_autoCSS = function(vars, target) {
				var css = {},
					p;
				for (p in vars) {
					if (!_reservedProps[p] && (!(p in target) || p === "transform" || p === "x" || p === "y" || p === "width" || p === "height" || p === "className" || p === "border") && (!_plugins[p] || (_plugins[p] && _plugins[p]._autoCSS))) { //note: <img> elements contain read-only "x" and "y" properties. We should also prioritize editing css width/height rather than the element's properties.
						css[p] = vars[p];
						delete vars[p];
					}
				}
				vars.css = css;
			};

		p = TweenLite.prototype = new Animation();
		p.constructor = TweenLite;
		p.kill()._gc = false;

//----TweenLite defaults, overwrite management, and root updates ----------------------------------------------------

		p.ratio = 0;
		p._firstPT = p._targets = p._overwrittenProps = p._startAt = null;
		p._notifyPluginsOfEnabled = p._lazy = false;

		TweenLite.version = "2.0.2";
		TweenLite.defaultEase = p._ease = new Ease(null, null, 1, 1);
		TweenLite.defaultOverwrite = "auto";
		TweenLite.ticker = _ticker;
		TweenLite.autoSleep = 120;
		TweenLite.lagSmoothing = function(threshold, adjustedLag) {
			_ticker.lagSmoothing(threshold, adjustedLag);
		};

		TweenLite.selector = window.$ || window.jQuery || function(e) {
			var selector = window.$ || window.jQuery;
			if (selector) {
				TweenLite.selector = selector;
				return selector(e);
			}
			if (!_doc) { //in some dev environments (like Angular 6), GSAP gets loaded before the document is defined! So re-query it here if/when necessary.
				_doc = window.document;
			}
			return (!_doc) ? e : (_doc.querySelectorAll ? _doc.querySelectorAll(e) : _doc.getElementById((e.charAt(0) === "#") ? e.substr(1) : e));
		};

		var _lazyTweens = [],
			_lazyLookup = {},
			_numbersExp = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/ig,
			_relExp = /[\+-]=-?[\.\d]/,
			//_nonNumbersExp = /(?:([\-+](?!(\d|=)))|[^\d\-+=e]|(e(?![\-+][\d])))+/ig,
			_setRatio = function(v) {
				var pt = this._firstPT,
					min = 0.000001,
					val;
				while (pt) {
					val = !pt.blob ? pt.c * v + pt.s : (v === 1 && this.end != null) ? this.end : v ? this.join("") : this.start;
					if (pt.m) {
						val = pt.m.call(this._tween, val, this._target || pt.t, this._tween);
					} else if (val < min) if (val > -min && !pt.blob) { //prevents issues with converting very small numbers to strings in the browser
						val = 0;
					}
					if (!pt.f) {
						pt.t[pt.p] = val;
					} else if (pt.fp) {
						pt.t[pt.p](pt.fp, val);
					} else {
						pt.t[pt.p](val);
					}
					pt = pt._next;
				}
			},
			//compares two strings (start/end), finds the numbers that are different and spits back an array representing the whole value but with the changing values isolated as elements. For example, "rgb(0,0,0)" and "rgb(100,50,0)" would become ["rgb(", 0, ",", 50, ",0)"]. Notice it merges the parts that are identical (performance optimization). The array also has a linked list of PropTweens attached starting with _firstPT that contain the tweening data (t, p, s, c, f, etc.). It also stores the starting value as a "start" property so that we can revert to it if/when necessary, like when a tween rewinds fully. If the quantity of numbers differs between the start and end, it will always prioritize the end value(s). The pt parameter is optional - it's for a PropTween that will be appended to the end of the linked list and is typically for actually setting the value after all of the elements have been updated (with array.join("")).
			_blobDif = function(start, end, filter, pt) {
				var a = [],
					charIndex = 0,
					s = "",
					color = 0,
					startNums, endNums, num, i, l, nonNumbers, currentNum;
				a.start = start;
				a.end = end;
				start = a[0] = start + ""; //ensure values are strings
				end = a[1] = end + "";
				if (filter) {
					filter(a); //pass an array with the starting and ending values and let the filter do whatever it needs to the values.
					start = a[0];
					end = a[1];
				}
				a.length = 0;
				startNums = start.match(_numbersExp) || [];
				endNums = end.match(_numbersExp) || [];
				if (pt) {
					pt._next = null;
					pt.blob = 1;
					a._firstPT = a._applyPT = pt; //apply last in the linked list (which means inserting it first)
				}
				l = endNums.length;
				for (i = 0; i < l; i++) {
					currentNum = endNums[i];
					nonNumbers = end.substr(charIndex, end.indexOf(currentNum, charIndex)-charIndex);
					s += (nonNumbers || !i) ? nonNumbers : ","; //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
					charIndex += nonNumbers.length;
					if (color) { //sense rgba() values and round them.
						color = (color + 1) % 5;
					} else if (nonNumbers.substr(-5) === "rgba(") {
						color = 1;
					}
					if (currentNum === startNums[i] || startNums.length <= i) {
						s += currentNum;
					} else {
						if (s) {
							a.push(s);
							s = "";
						}
						num = parseFloat(startNums[i]);
						a.push(num);
						a._firstPT = {_next: a._firstPT, t:a, p: a.length-1, s:num, c:((currentNum.charAt(1) === "=") ? parseInt(currentNum.charAt(0) + "1", 10) * parseFloat(currentNum.substr(2)) : (parseFloat(currentNum) - num)) || 0, f:0, m:(color && color < 4) ? Math.round : 0};
						//note: we don't set _prev because we'll never need to remove individual PropTweens from this list.
					}
					charIndex += currentNum.length;
				}
				s += end.substr(charIndex);
				if (s) {
					a.push(s);
				}
				a.setRatio = _setRatio;
				if (_relExp.test(end)) { //if the end string contains relative values, delete it so that on the final render (in _setRatio()), we don't actually set it to the string with += or -= characters (forces it to use the calculated value).
					a.end = null;
				}
				return a;
			},
			//note: "funcParam" is only necessary for function-based getters/setters that require an extra parameter like getAttribute("width") and setAttribute("width", value). In this example, funcParam would be "width". Used by AttrPlugin for example.
			_addPropTween = function(target, prop, start, end, overwriteProp, mod, funcParam, stringFilter, index) {
				if (typeof(end) === "function") {
					end = end(index || 0, target);
				}
				var type = typeof(target[prop]),
					getterName = (type !== "function") ? "" : ((prop.indexOf("set") || typeof(target["get" + prop.substr(3)]) !== "function") ? prop : "get" + prop.substr(3)),
					s = (start !== "get") ? start : !getterName ? target[prop] : funcParam ? target[getterName](funcParam) : target[getterName](),
					isRelative = (typeof(end) === "string" && end.charAt(1) === "="),
					pt = {t:target, p:prop, s:s, f:(type === "function"), pg:0, n:overwriteProp || prop, m:(!mod ? 0 : (typeof(mod) === "function") ? mod : Math.round), pr:0, c:isRelative ? parseInt(end.charAt(0) + "1", 10) * parseFloat(end.substr(2)) : (parseFloat(end) - s) || 0},
					blob;

				if (typeof(s) !== "number" || (typeof(end) !== "number" && !isRelative)) {
					if (funcParam || isNaN(s) || (!isRelative && isNaN(end)) || typeof(s) === "boolean" || typeof(end) === "boolean") {
						//a blob (string that has multiple numbers in it)
						pt.fp = funcParam;
						blob = _blobDif(s, (isRelative ? (parseFloat(pt.s) + pt.c) + (pt.s + "").replace(/[0-9\-\.]/g, "") : end), stringFilter || TweenLite.defaultStringFilter, pt);
						pt = {t: blob, p: "setRatio", s: 0, c: 1, f: 2, pg: 0, n: overwriteProp || prop, pr: 0, m: 0}; //"2" indicates it's a Blob property tween. Needed for RoundPropsPlugin for example.
					} else {
						pt.s = parseFloat(s);
						if (!isRelative) {
							pt.c = (parseFloat(end) - pt.s) || 0;
						}
					}
				}
				if (pt.c) { //only add it to the linked list if there's a change.
					if ((pt._next = this._firstPT)) {
						pt._next._prev = pt;
					}
					this._firstPT = pt;
					return pt;
				}
			},
			_internals = TweenLite._internals = {isArray:_isArray, isSelector:_isSelector, lazyTweens:_lazyTweens, blobDif:_blobDif}, //gives us a way to expose certain private values to other GreenSock classes without contaminating tha main TweenLite object.
			_plugins = TweenLite._plugins = {},
			_tweenLookup = _internals.tweenLookup = {},
			_tweenLookupNum = 0,
			_reservedProps = _internals.reservedProps = {ease:1, delay:1, overwrite:1, onComplete:1, onCompleteParams:1, onCompleteScope:1, useFrames:1, runBackwards:1, startAt:1, onUpdate:1, onUpdateParams:1, onUpdateScope:1, onStart:1, onStartParams:1, onStartScope:1, onReverseComplete:1, onReverseCompleteParams:1, onReverseCompleteScope:1, onRepeat:1, onRepeatParams:1, onRepeatScope:1, easeParams:1, yoyo:1, immediateRender:1, repeat:1, repeatDelay:1, data:1, paused:1, reversed:1, autoCSS:1, lazy:1, onOverwrite:1, callbackScope:1, stringFilter:1, id:1, yoyoEase:1},
			_overwriteLookup = {none:0, all:1, auto:2, concurrent:3, allOnStart:4, preexisting:5, "true":1, "false":0},
			_rootFramesTimeline = Animation._rootFramesTimeline = new SimpleTimeline(),
			_rootTimeline = Animation._rootTimeline = new SimpleTimeline(),
			_nextGCFrame = 30,
			_lazyRender = _internals.lazyRender = function() {
				var i = _lazyTweens.length,
					tween;
				_lazyLookup = {};
				while (--i > -1) {
					tween = _lazyTweens[i];
					if (tween && tween._lazy !== false) {
						tween.render(tween._lazy[0], tween._lazy[1], true);
						tween._lazy = false;
					}
				}
				_lazyTweens.length = 0;
			};

		_rootTimeline._startTime = _ticker.time;
		_rootFramesTimeline._startTime = _ticker.frame;
		_rootTimeline._active = _rootFramesTimeline._active = true;
		setTimeout(_lazyRender, 1); //on some mobile devices, there isn't a "tick" before code runs which means any lazy renders wouldn't run before the next official "tick".

		Animation._updateRoot = TweenLite.render = function() {
				var i, a, p;
				if (_lazyTweens.length) { //if code is run outside of the requestAnimationFrame loop, there may be tweens queued AFTER the engine refreshed, so we need to ensure any pending renders occur before we refresh again.
					_lazyRender();
				}
				_rootTimeline.render((_ticker.time - _rootTimeline._startTime) * _rootTimeline._timeScale, false, false);
				_rootFramesTimeline.render((_ticker.frame - _rootFramesTimeline._startTime) * _rootFramesTimeline._timeScale, false, false);
				if (_lazyTweens.length) {
					_lazyRender();
				}
				if (_ticker.frame >= _nextGCFrame) { //dump garbage every 120 frames or whatever the user sets TweenLite.autoSleep to
					_nextGCFrame = _ticker.frame + (parseInt(TweenLite.autoSleep, 10) || 120);
					for (p in _tweenLookup) {
						a = _tweenLookup[p].tweens;
						i = a.length;
						while (--i > -1) {
							if (a[i]._gc) {
								a.splice(i, 1);
							}
						}
						if (a.length === 0) {
							delete _tweenLookup[p];
						}
					}
					//if there are no more tweens in the root timelines, or if they're all paused, make the _timer sleep to reduce load on the CPU slightly
					p = _rootTimeline._first;
					if (!p || p._paused) if (TweenLite.autoSleep && !_rootFramesTimeline._first && _ticker._listeners.tick.length === 1) {
						while (p && p._paused) {
							p = p._next;
						}
						if (!p) {
							_ticker.sleep();
						}
					}
				}
			};

		_ticker.addEventListener("tick", Animation._updateRoot);

		var _register = function(target, tween, scrub) {
				var id = target._gsTweenID, a, i;
				if (!_tweenLookup[id || (target._gsTweenID = id = "t" + (_tweenLookupNum++))]) {
					_tweenLookup[id] = {target:target, tweens:[]};
				}
				if (tween) {
					a = _tweenLookup[id].tweens;
					a[(i = a.length)] = tween;
					if (scrub) {
						while (--i > -1) {
							if (a[i] === tween) {
								a.splice(i, 1);
							}
						}
					}
				}
				return _tweenLookup[id].tweens;
			},
			_onOverwrite = function(overwrittenTween, overwritingTween, target, killedProps) {
				var func = overwrittenTween.vars.onOverwrite, r1, r2;
				if (func) {
					r1 = func(overwrittenTween, overwritingTween, target, killedProps);
				}
				func = TweenLite.onOverwrite;
				if (func) {
					r2 = func(overwrittenTween, overwritingTween, target, killedProps);
				}
				return (r1 !== false && r2 !== false);
			},
			_applyOverwrite = function(target, tween, props, mode, siblings) {
				var i, changed, curTween, l;
				if (mode === 1 || mode >= 4) {
					l = siblings.length;
					for (i = 0; i < l; i++) {
						if ((curTween = siblings[i]) !== tween) {
							if (!curTween._gc) {
								if (curTween._kill(null, target, tween)) {
									changed = true;
								}
							}
						} else if (mode === 5) {
							break;
						}
					}
					return changed;
				}
				//NOTE: Add 0.0000000001 to overcome floating point errors that can cause the startTime to be VERY slightly off (when a tween's time() is set for example)
				var startTime = tween._startTime + _tinyNum,
					overlaps = [],
					oCount = 0,
					zeroDur = (tween._duration === 0),
					globalStart;
				i = siblings.length;
				while (--i > -1) {
					if ((curTween = siblings[i]) === tween || curTween._gc || curTween._paused) {
						//ignore
					} else if (curTween._timeline !== tween._timeline) {
						globalStart = globalStart || _checkOverlap(tween, 0, zeroDur);
						if (_checkOverlap(curTween, globalStart, zeroDur) === 0) {
							overlaps[oCount++] = curTween;
						}
					} else if (curTween._startTime <= startTime) if (curTween._startTime + curTween.totalDuration() / curTween._timeScale > startTime) if (!((zeroDur || !curTween._initted) && startTime - curTween._startTime <= 0.0000000002)) {
						overlaps[oCount++] = curTween;
					}
				}

				i = oCount;
				while (--i > -1) {
					curTween = overlaps[i];
					l = curTween._firstPT; //we need to discern if there were property tweens originally; if they all get removed in the next line's _kill() call, the tween should be killed. See https://github.com/greensock/GreenSock-JS/issues/278
					if (mode === 2) if (curTween._kill(props, target, tween)) {
						changed = true;
					}
					if (mode !== 2 || (!curTween._firstPT && curTween._initted && l)) {
						if (mode !== 2 && !_onOverwrite(curTween, tween)) {
							continue;
						}
						if (curTween._enabled(false, false)) { //if all property tweens have been overwritten, kill the tween.
							changed = true;
						}
					}
				}
				return changed;
			},
			_checkOverlap = function(tween, reference, zeroDur) {
				var tl = tween._timeline,
					ts = tl._timeScale,
					t = tween._startTime;
				while (tl._timeline) {
					t += tl._startTime;
					ts *= tl._timeScale;
					if (tl._paused) {
						return -100;
					}
					tl = tl._timeline;
				}
				t /= ts;
				return (t > reference) ? t - reference : ((zeroDur && t === reference) || (!tween._initted && t - reference < 2 * _tinyNum)) ? _tinyNum : ((t += tween.totalDuration() / tween._timeScale / ts) > reference + _tinyNum) ? 0 : t - reference - _tinyNum;
			};


//---- TweenLite instance methods -----------------------------------------------------------------------------

		p._init = function() {
			var v = this.vars,
				op = this._overwrittenProps,
				dur = this._duration,
				immediate = !!v.immediateRender,
				ease = v.ease,
				i, initPlugins, pt, p, startVars, l;
			if (v.startAt) {
				if (this._startAt) {
					this._startAt.render(-1, true); //if we've run a startAt previously (when the tween instantiated), we should revert it so that the values re-instantiate correctly particularly for relative tweens. Without this, a TweenLite.fromTo(obj, 1, {x:"+=100"}, {x:"-=100"}), for example, would actually jump to +=200 because the startAt would run twice, doubling the relative change.
					this._startAt.kill();
				}
				startVars = {};
				for (p in v.startAt) { //copy the properties/values into a new object to avoid collisions, like var to = {x:0}, from = {x:500}; timeline.fromTo(e, 1, from, to).fromTo(e, 1, to, from);
					startVars[p] = v.startAt[p];
				}
				startVars.data = "isStart";
				startVars.overwrite = false;
				startVars.immediateRender = true;
				startVars.lazy = (immediate && v.lazy !== false);
				startVars.startAt = startVars.delay = null; //no nesting of startAt objects allowed (otherwise it could cause an infinite loop).
				startVars.onUpdate = v.onUpdate;
				startVars.onUpdateParams = v.onUpdateParams;
				startVars.onUpdateScope = v.onUpdateScope || v.callbackScope || this;
				this._startAt = TweenLite.to(this.target || {}, 0, startVars);
				if (immediate) {
					if (this._time > 0) {
						this._startAt = null; //tweens that render immediately (like most from() and fromTo() tweens) shouldn't revert when their parent timeline's playhead goes backward past the startTime because the initial render could have happened anytime and it shouldn't be directly correlated to this tween's startTime. Imagine setting up a complex animation where the beginning states of various objects are rendered immediately but the tween doesn't happen for quite some time - if we revert to the starting values as soon as the playhead goes backward past the tween's startTime, it will throw things off visually. Reversion should only happen in TimelineLite/Max instances where immediateRender was false (which is the default in the convenience methods like from()).
					} else if (dur !== 0) {
						return; //we skip initialization here so that overwriting doesn't occur until the tween actually begins. Otherwise, if you create several immediateRender:true tweens of the same target/properties to drop into a TimelineLite or TimelineMax, the last one created would overwrite the first ones because they didn't get placed into the timeline yet before the first render occurs and kicks in overwriting.
					}
				}
			} else if (v.runBackwards && dur !== 0) {
				//from() tweens must be handled uniquely: their beginning values must be rendered but we don't want overwriting to occur yet (when time is still 0). Wait until the tween actually begins before doing all the routines like overwriting. At that time, we should render at the END of the tween to ensure that things initialize correctly (remember, from() tweens go backwards)
				if (this._startAt) {
					this._startAt.render(-1, true);
					this._startAt.kill();
					this._startAt = null;
				} else {
					if (this._time !== 0) { //in rare cases (like if a from() tween runs and then is invalidate()-ed), immediateRender could be true but the initial forced-render gets skipped, so there's no need to force the render in this context when the _time is greater than 0
						immediate = false;
					}
					pt = {};
					for (p in v) { //copy props into a new object and skip any reserved props, otherwise onComplete or onUpdate or onStart could fire. We should, however, permit autoCSS to go through.
						if (!_reservedProps[p] || p === "autoCSS") {
							pt[p] = v[p];
						}
					}
					pt.overwrite = 0;
					pt.data = "isFromStart"; //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
					pt.lazy = (immediate && v.lazy !== false);
					pt.immediateRender = immediate; //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
					this._startAt = TweenLite.to(this.target, 0, pt);
					if (!immediate) {
						this._startAt._init(); //ensures that the initial values are recorded
						this._startAt._enabled(false); //no need to have the tween render on the next cycle. Disable it because we'll always manually control the renders of the _startAt tween.
						if (this.vars.immediateRender) {
							this._startAt = null;
						}
					} else if (this._time === 0) {
						return;
					}
				}
			}
			this._ease = ease = (!ease) ? TweenLite.defaultEase : (ease instanceof Ease) ? ease : (typeof(ease) === "function") ? new Ease(ease, v.easeParams) : _easeMap[ease] || TweenLite.defaultEase;
			if (v.easeParams instanceof Array && ease.config) {
				this._ease = ease.config.apply(ease, v.easeParams);
			}
			this._easeType = this._ease._type;
			this._easePower = this._ease._power;
			this._firstPT = null;

			if (this._targets) {
				l = this._targets.length;
				for (i = 0; i < l; i++) {
					if ( this._initProps( this._targets[i], (this._propLookup[i] = {}), this._siblings[i], (op ? op[i] : null), i) ) {
						initPlugins = true;
					}
				}
			} else {
				initPlugins = this._initProps(this.target, this._propLookup, this._siblings, op, 0);
			}

			if (initPlugins) {
				TweenLite._onPluginEvent("_onInitAllProps", this); //reorders the array in order of priority. Uses a static TweenPlugin method in order to minimize file size in TweenLite
			}
			if (op) if (!this._firstPT) if (typeof(this.target) !== "function") { //if all tweening properties have been overwritten, kill the tween. If the target is a function, it's probably a delayedCall so let it live.
				this._enabled(false, false);
			}
			if (v.runBackwards) {
				pt = this._firstPT;
				while (pt) {
					pt.s += pt.c;
					pt.c = -pt.c;
					pt = pt._next;
				}
			}
			this._onUpdate = v.onUpdate;
			this._initted = true;
		};

		p._initProps = function(target, propLookup, siblings, overwrittenProps, index) {
			var p, i, initPlugins, plugin, pt, v;
			if (target == null) {
				return false;
			}

			if (_lazyLookup[target._gsTweenID]) {
				_lazyRender(); //if other tweens of the same target have recently initted but haven't rendered yet, we've got to force the render so that the starting values are correct (imagine populating a timeline with a bunch of sequential tweens and then jumping to the end)
			}

			if (!this.vars.css) if (target.style) if (target !== window && target.nodeType) if (_plugins.css) if (this.vars.autoCSS !== false) { //it's so common to use TweenLite/Max to animate the css of DOM elements, we assume that if the target is a DOM element, that's what is intended (a convenience so that users don't have to wrap things in css:{}, although we still recommend it for a slight performance boost and better specificity). Note: we cannot check "nodeType" on the window inside an iframe.
				_autoCSS(this.vars, target);
			}
			for (p in this.vars) {
				v = this.vars[p];
				if (_reservedProps[p]) {
					if (v) if ((v instanceof Array) || (v.push && _isArray(v))) if (v.join("").indexOf("{self}") !== -1) {
						this.vars[p] = v = this._swapSelfInParams(v, this);
					}

				} else if (_plugins[p] && (plugin = new _plugins[p]())._onInitTween(target, this.vars[p], this, index)) {

					//t - target 		[object]
					//p - property 		[string]
					//s - start			[number]
					//c - change		[number]
					//f - isFunction	[boolean]
					//n - name			[string]
					//pg - isPlugin 	[boolean]
					//pr - priority		[number]
					//m - mod           [function | 0]
					this._firstPT = pt = {_next:this._firstPT, t:plugin, p:"setRatio", s:0, c:1, f:1, n:p, pg:1, pr:plugin._priority, m:0};
					i = plugin._overwriteProps.length;
					while (--i > -1) {
						propLookup[plugin._overwriteProps[i]] = this._firstPT;
					}
					if (plugin._priority || plugin._onInitAllProps) {
						initPlugins = true;
					}
					if (plugin._onDisable || plugin._onEnable) {
						this._notifyPluginsOfEnabled = true;
					}
					if (pt._next) {
						pt._next._prev = pt;
					}

				} else {
					propLookup[p] = _addPropTween.call(this, target, p, "get", v, p, 0, null, this.vars.stringFilter, index);
				}
			}

			if (overwrittenProps) if (this._kill(overwrittenProps, target)) { //another tween may have tried to overwrite properties of this tween before init() was called (like if two tweens start at the same time, the one created second will run first)
				return this._initProps(target, propLookup, siblings, overwrittenProps, index);
			}
			if (this._overwrite > 1) if (this._firstPT) if (siblings.length > 1) if (_applyOverwrite(target, this, propLookup, this._overwrite, siblings)) {
				this._kill(propLookup, target);
				return this._initProps(target, propLookup, siblings, overwrittenProps, index);
			}
			if (this._firstPT) if ((this.vars.lazy !== false && this._duration) || (this.vars.lazy && !this._duration)) { //zero duration tweens don't lazy render by default; everything else does.
				_lazyLookup[target._gsTweenID] = true;
			}
			return initPlugins;
		};

		p.render = function(time, suppressEvents, force) {
			var prevTime = this._time,
				duration = this._duration,
				prevRawPrevTime = this._rawPrevTime,
				isComplete, callback, pt, rawPrevTime;
			if (time >= duration - 0.0000001 && time >= 0) { //to work around occasional floating point math artifacts.
				this._totalTime = this._time = duration;
				this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1;
				if (!this._reversed ) {
					isComplete = true;
					callback = "onComplete";
					force = (force || this._timeline.autoRemoveChildren); //otherwise, if the animation is unpaused/activated after it's already finished, it doesn't get removed from the parent timeline.
				}
				if (duration === 0) if (this._initted || !this.vars.lazy || force) { //zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
					if (this._startTime === this._timeline._duration) { //if a zero-duration tween is at the VERY end of a timeline and that timeline renders at its end, it will typically add a tiny bit of cushion to the render time to prevent rounding errors from getting in the way of tweens rendering their VERY end. If we then reverse() that timeline, the zero-duration tween will trigger its onReverseComplete even though technically the playhead didn't pass over it again. It's a very specific edge case we must accommodate.
						time = 0;
					}
					if (prevRawPrevTime < 0 || (time <= 0 && time >= -0.0000001) || (prevRawPrevTime === _tinyNum && this.data !== "isPause")) if (prevRawPrevTime !== time) { //note: when this.data is "isPause", it's a callback added by addPause() on a timeline that we should not be triggered when LEAVING its exact start time. In other words, tl.addPause(1).play(1) shouldn't pause.
						force = true;
						if (prevRawPrevTime > _tinyNum) {
							callback = "onReverseComplete";
						}
					}
					this._rawPrevTime = rawPrevTime = (!suppressEvents || time || prevRawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
				}

			} else if (time < 0.0000001) { //to work around occasional floating point math artifacts, round super small values to 0.
				this._totalTime = this._time = 0;
				this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0;
				if (prevTime !== 0 || (duration === 0 && prevRawPrevTime > 0)) {
					callback = "onReverseComplete";
					isComplete = this._reversed;
				}
				if (time < 0) {
					this._active = false;
					if (duration === 0) if (this._initted || !this.vars.lazy || force) { //zero-duration tweens are tricky because we must discern the momentum/direction of time in order to determine whether the starting values should be rendered or the ending values. If the "playhead" of its timeline goes past the zero-duration tween in the forward direction or lands directly on it, the end values should be rendered, but if the timeline's "playhead" moves past it in the backward direction (from a postitive time to a negative time), the starting values must be rendered.
						if (prevRawPrevTime >= 0 && !(prevRawPrevTime === _tinyNum && this.data === "isPause")) {
							force = true;
						}
						this._rawPrevTime = rawPrevTime = (!suppressEvents || time || prevRawPrevTime === time) ? time : _tinyNum; //when the playhead arrives at EXACTLY time 0 (right on top) of a zero-duration tween, we need to discern if events are suppressed so that when the playhead moves again (next time), it'll trigger the callback. If events are NOT suppressed, obviously the callback would be triggered in this render. Basically, the callback should fire either when the playhead ARRIVES or LEAVES this exact spot, not both. Imagine doing a timeline.seek(0) and there's a callback that sits at 0. Since events are suppressed on that seek() by default, nothing will fire, but when the playhead moves off of that position, the callback should fire. This behavior is what people intuitively expect. We set the _rawPrevTime to be a precise tiny number to indicate this scenario rather than using another property/variable which would increase memory usage. This technique is less readable, but more efficient.
					}
				}
				if (!this._initted || (this._startAt && this._startAt.progress())) { //if we render the very beginning (time == 0) of a fromTo(), we must force the render (normal tweens wouldn't need to render at a time of 0 when the prevTime was also 0). This is also mandatory to make sure overwriting kicks in immediately. Also, we check progress() because if startAt has already rendered at its end, we should force a render at its beginning. Otherwise, if you put the playhead directly on top of where a fromTo({immediateRender:false}) starts, and then move it backwards, the from() won't revert its values.
					force = true;
				}
			} else {
				this._totalTime = this._time = time;

				if (this._easeType) {
					var r = time / duration, type = this._easeType, pow = this._easePower;
					if (type === 1 || (type === 3 && r >= 0.5)) {
						r = 1 - r;
					}
					if (type === 3) {
						r *= 2;
					}
					if (pow === 1) {
						r *= r;
					} else if (pow === 2) {
						r *= r * r;
					} else if (pow === 3) {
						r *= r * r * r;
					} else if (pow === 4) {
						r *= r * r * r * r;
					}

					if (type === 1) {
						this.ratio = 1 - r;
					} else if (type === 2) {
						this.ratio = r;
					} else if (time / duration < 0.5) {
						this.ratio = r / 2;
					} else {
						this.ratio = 1 - (r / 2);
					}

				} else {
					this.ratio = this._ease.getRatio(time / duration);
				}
			}

			if (this._time === prevTime && !force) {
				return;
			} else if (!this._initted) {
				this._init();
				if (!this._initted || this._gc) { //immediateRender tweens typically won't initialize until the playhead advances (_time is greater than 0) in order to ensure that overwriting occurs properly. Also, if all of the tweening properties have been overwritten (which would cause _gc to be true, as set in _init()), we shouldn't continue otherwise an onStart callback could be called for example.
					return;
				} else if (!force && this._firstPT && ((this.vars.lazy !== false && this._duration) || (this.vars.lazy && !this._duration))) {
					this._time = this._totalTime = prevTime;
					this._rawPrevTime = prevRawPrevTime;
					_lazyTweens.push(this);
					this._lazy = [time, suppressEvents];
					return;
				}
				//_ease is initially set to defaultEase, so now that init() has run, _ease is set properly and we need to recalculate the ratio. Overall this is faster than using conditional logic earlier in the method to avoid having to set ratio twice because we only init() once but renderTime() gets called VERY frequently.
				if (this._time && !isComplete) {
					this.ratio = this._ease.getRatio(this._time / duration);
				} else if (isComplete && this._ease._calcEnd) {
					this.ratio = this._ease.getRatio((this._time === 0) ? 0 : 1);
				}
			}
			if (this._lazy !== false) { //in case a lazy render is pending, we should flush it because the new render is occurring now (imagine a lazy tween instantiating and then immediately the user calls tween.seek(tween.duration()), skipping to the end - the end render would be forced, and then if we didn't flush the lazy render, it'd fire AFTER the seek(), rendering it at the wrong time.
				this._lazy = false;
			}
			if (!this._active) if (!this._paused && this._time !== prevTime && time >= 0) {
				this._active = true;  //so that if the user renders a tween (as opposed to the timeline rendering it), the timeline is forced to re-render and align it with the proper time/frame on the next rendering cycle. Maybe the tween already finished but the user manually re-renders it as halfway done.
			}
			if (prevTime === 0) {
				if (this._startAt) {
					if (time >= 0) {
						this._startAt.render(time, true, force);
					} else if (!callback) {
						callback = "_dummyGS"; //if no callback is defined, use a dummy value just so that the condition at the end evaluates as true because _startAt should render AFTER the normal render loop when the time is negative. We could handle this in a more intuitive way, of course, but the render loop is the MOST important thing to optimize, so this technique allows us to avoid adding extra conditional logic in a high-frequency area.
					}
				}
				if (this.vars.onStart) if (this._time !== 0 || duration === 0) if (!suppressEvents) {
					this._callback("onStart");
				}
			}
			pt = this._firstPT;
			while (pt) {
				if (pt.f) {
					pt.t[pt.p](pt.c * this.ratio + pt.s);
				} else {
					pt.t[pt.p] = pt.c * this.ratio + pt.s;
				}
				pt = pt._next;
			}

			if (this._onUpdate) {
				if (time < 0) if (this._startAt && time !== -0.0001) { //if the tween is positioned at the VERY beginning (_startTime 0) of its parent timeline, it's illegal for the playhead to go back further, so we should not render the recorded startAt values.
					this._startAt.render(time, true, force); //note: for performance reasons, we tuck this conditional logic inside less traveled areas (most tweens don't have an onUpdate). We'd just have it at the end before the onComplete, but the values should be updated before any onUpdate is called, so we ALSO put it here and then if it's not called, we do so later near the onComplete.
				}
				if (!suppressEvents) if (this._time !== prevTime || isComplete || force) {
					this._callback("onUpdate");
				}
			}
			if (callback) if (!this._gc || force) { //check _gc because there's a chance that kill() could be called in an onUpdate
				if (time < 0 && this._startAt && !this._onUpdate && time !== -0.0001) { //-0.0001 is a special value that we use when looping back to the beginning of a repeated TimelineMax, in which case we shouldn't render the _startAt values.
					this._startAt.render(time, true, force);
				}
				if (isComplete) {
					if (this._timeline.autoRemoveChildren) {
						this._enabled(false, false);
					}
					this._active = false;
				}
				if (!suppressEvents && this.vars[callback]) {
					this._callback(callback);
				}
				if (duration === 0 && this._rawPrevTime === _tinyNum && rawPrevTime !== _tinyNum) { //the onComplete or onReverseComplete could trigger movement of the playhead and for zero-duration tweens (which must discern direction) that land directly back on their start time, we don't want to fire again on the next render. Think of several addPause()'s in a timeline that forces the playhead to a certain spot, but what if it's already paused and another tween is tweening the "time" of the timeline? Each time it moves [forward] past that spot, it would move back, and since suppressEvents is true, it'd reset _rawPrevTime to _tinyNum so that when it begins again, the callback would fire (so ultimately it could bounce back and forth during that tween). Again, this is a very uncommon scenario, but possible nonetheless.
					this._rawPrevTime = 0;
				}
			}
		};

		p._kill = function(vars, target, overwritingTween) {
			if (vars === "all") {
				vars = null;
			}
			if (vars == null) if (target == null || target === this.target) {
				this._lazy = false;
				return this._enabled(false, false);
			}
			target = (typeof(target) !== "string") ? (target || this._targets || this.target) : TweenLite.selector(target) || target;
			var simultaneousOverwrite = (overwritingTween && this._time && overwritingTween._startTime === this._startTime && this._timeline === overwritingTween._timeline),
				firstPT = this._firstPT,
				i, overwrittenProps, p, pt, propLookup, changed, killProps, record, killed;
			if ((_isArray(target) || _isSelector(target)) && typeof(target[0]) !== "number") {
				i = target.length;
				while (--i > -1) {
					if (this._kill(vars, target[i], overwritingTween)) {
						changed = true;
					}
				}
			} else {
				if (this._targets) {
					i = this._targets.length;
					while (--i > -1) {
						if (target === this._targets[i]) {
							propLookup = this._propLookup[i] || {};
							this._overwrittenProps = this._overwrittenProps || [];
							overwrittenProps = this._overwrittenProps[i] = vars ? this._overwrittenProps[i] || {} : "all";
							break;
						}
					}
				} else if (target !== this.target) {
					return false;
				} else {
					propLookup = this._propLookup;
					overwrittenProps = this._overwrittenProps = vars ? this._overwrittenProps || {} : "all";
				}

				if (propLookup) {
					killProps = vars || propLookup;
					record = (vars !== overwrittenProps && overwrittenProps !== "all" && vars !== propLookup && (typeof(vars) !== "object" || !vars._tempKill)); //_tempKill is a super-secret way to delete a particular tweening property but NOT have it remembered as an official overwritten property (like in BezierPlugin)
					if (overwritingTween && (TweenLite.onOverwrite || this.vars.onOverwrite)) {
						for (p in killProps) {
							if (propLookup[p]) {
								if (!killed) {
									killed = [];
								}
								killed.push(p);
							}
						}
						if ((killed || !vars) && !_onOverwrite(this, overwritingTween, target, killed)) { //if the onOverwrite returned false, that means the user wants to override the overwriting (cancel it).
							return false;
						}
					}

					for (p in killProps) {
						if ((pt = propLookup[p])) {
							if (simultaneousOverwrite) { //if another tween overwrites this one and they both start at exactly the same time, yet this tween has already rendered once (for example, at 0.001) because it's first in the queue, we should revert the values to where they were at 0 so that the starting values aren't contaminated on the overwriting tween.
								if (pt.f) {
									pt.t[pt.p](pt.s);
								} else {
									pt.t[pt.p] = pt.s;
								}
								changed = true;
							}
							if (pt.pg && pt.t._kill(killProps)) {
								changed = true; //some plugins need to be notified so they can perform cleanup tasks first
							}
							if (!pt.pg || pt.t._overwriteProps.length === 0) {
								if (pt._prev) {
									pt._prev._next = pt._next;
								} else if (pt === this._firstPT) {
									this._firstPT = pt._next;
								}
								if (pt._next) {
									pt._next._prev = pt._prev;
								}
								pt._next = pt._prev = null;
							}
							delete propLookup[p];
						}
						if (record) {
							overwrittenProps[p] = 1;
						}
					}
					if (!this._firstPT && this._initted && firstPT) { //if all tweening properties are killed, kill the tween. Without this line, if there's a tween with multiple targets and then you killTweensOf() each target individually, the tween would technically still remain active and fire its onComplete even though there aren't any more properties tweening.
						this._enabled(false, false);
					}
				}
			}
			return changed;
		};

		p.invalidate = function() {
			if (this._notifyPluginsOfEnabled) {
				TweenLite._onPluginEvent("_onDisable", this);
			}
			this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null;
			this._notifyPluginsOfEnabled = this._active = this._lazy = false;
			this._propLookup = (this._targets) ? {} : [];
			Animation.prototype.invalidate.call(this);
			if (this.vars.immediateRender) {
				this._time = -_tinyNum; //forces a render without having to set the render() "force" parameter to true because we want to allow lazying by default (using the "force" parameter always forces an immediate full render)
				this.render(Math.min(0, -this._delay)); //in case delay is negative.
			}
			return this;
		};

		p._enabled = function(enabled, ignoreTimeline) {
			if (!_tickerActive) {
				_ticker.wake();
			}
			if (enabled && this._gc) {
				var targets = this._targets,
					i;
				if (targets) {
					i = targets.length;
					while (--i > -1) {
						this._siblings[i] = _register(targets[i], this, true);
					}
				} else {
					this._siblings = _register(this.target, this, true);
				}
			}
			Animation.prototype._enabled.call(this, enabled, ignoreTimeline);
			if (this._notifyPluginsOfEnabled) if (this._firstPT) {
				return TweenLite._onPluginEvent((enabled ? "_onEnable" : "_onDisable"), this);
			}
			return false;
		};


//----TweenLite static methods -----------------------------------------------------

		TweenLite.to = function(target, duration, vars) {
			return new TweenLite(target, duration, vars);
		};

		TweenLite.from = function(target, duration, vars) {
			vars.runBackwards = true;
			vars.immediateRender = (vars.immediateRender != false);
			return new TweenLite(target, duration, vars);
		};

		TweenLite.fromTo = function(target, duration, fromVars, toVars) {
			toVars.startAt = fromVars;
			toVars.immediateRender = (toVars.immediateRender != false && fromVars.immediateRender != false);
			return new TweenLite(target, duration, toVars);
		};

		TweenLite.delayedCall = function(delay, callback, params, scope, useFrames) {
			return new TweenLite(callback, 0, {delay:delay, onComplete:callback, onCompleteParams:params, callbackScope:scope, onReverseComplete:callback, onReverseCompleteParams:params, immediateRender:false, lazy:false, useFrames:useFrames, overwrite:0});
		};

		TweenLite.set = function(target, vars) {
			return new TweenLite(target, 0, vars);
		};

		TweenLite.getTweensOf = function(target, onlyActive) {
			if (target == null) { return []; }
			target = (typeof(target) !== "string") ? target : TweenLite.selector(target) || target;
			var i, a, j, t;
			if ((_isArray(target) || _isSelector(target)) && typeof(target[0]) !== "number") {
				i = target.length;
				a = [];
				while (--i > -1) {
					a = a.concat(TweenLite.getTweensOf(target[i], onlyActive));
				}
				i = a.length;
				//now get rid of any duplicates (tweens of arrays of objects could cause duplicates)
				while (--i > -1) {
					t = a[i];
					j = i;
					while (--j > -1) {
						if (t === a[j]) {
							a.splice(i, 1);
						}
					}
				}
			} else if (target._gsTweenID) {
				a = _register(target).concat();
				i = a.length;
				while (--i > -1) {
					if (a[i]._gc || (onlyActive && !a[i].isActive())) {
						a.splice(i, 1);
					}
				}
			}
			return a || [];
		};

		TweenLite.killTweensOf = TweenLite.killDelayedCallsTo = function(target, onlyActive, vars) {
			if (typeof(onlyActive) === "object") {
				vars = onlyActive; //for backwards compatibility (before "onlyActive" parameter was inserted)
				onlyActive = false;
			}
			var a = TweenLite.getTweensOf(target, onlyActive),
				i = a.length;
			while (--i > -1) {
				a[i]._kill(vars, target);
			}
		};



/*
 * ----------------------------------------------------------------
 * TweenPlugin   (could easily be split out as a separate file/class, but included for ease of use (so that people don't need to include another script call before loading plugins which is easy to forget)
 * ----------------------------------------------------------------
 */
		var TweenPlugin = _class("plugins.TweenPlugin", function(props, priority) {
					this._overwriteProps = (props || "").split(",");
					this._propName = this._overwriteProps[0];
					this._priority = priority || 0;
					this._super = TweenPlugin.prototype;
				}, true);

		p = TweenPlugin.prototype;
		TweenPlugin.version = "1.19.0";
		TweenPlugin.API = 2;
		p._firstPT = null;
		p._addTween = _addPropTween;
		p.setRatio = _setRatio;

		p._kill = function(lookup) {
			var a = this._overwriteProps,
				pt = this._firstPT,
				i;
			if (lookup[this._propName] != null) {
				this._overwriteProps = [];
			} else {
				i = a.length;
				while (--i > -1) {
					if (lookup[a[i]] != null) {
						a.splice(i, 1);
					}
				}
			}
			while (pt) {
				if (lookup[pt.n] != null) {
					if (pt._next) {
						pt._next._prev = pt._prev;
					}
					if (pt._prev) {
						pt._prev._next = pt._next;
						pt._prev = null;
					} else if (this._firstPT === pt) {
						this._firstPT = pt._next;
					}
				}
				pt = pt._next;
			}
			return false;
		};

		p._mod = p._roundProps = function(lookup) {
			var pt = this._firstPT,
				val;
			while (pt) {
				val = lookup[this._propName] || (pt.n != null && lookup[ pt.n.split(this._propName + "_").join("") ]);
				if (val && typeof(val) === "function") { //some properties that are very plugin-specific add a prefix named after the _propName plus an underscore, so we need to ignore that extra stuff here.
					if (pt.f === 2) {
						pt.t._applyPT.m = val;
					} else {
						pt.m = val;
					}
				}
				pt = pt._next;
			}
		};

		TweenLite._onPluginEvent = function(type, tween) {
			var pt = tween._firstPT,
				changed, pt2, first, last, next;
			if (type === "_onInitAllProps") {
				//sorts the PropTween linked list in order of priority because some plugins need to render earlier/later than others, like MotionBlurPlugin applies its effects after all x/y/alpha tweens have rendered on each frame.
				while (pt) {
					next = pt._next;
					pt2 = first;
					while (pt2 && pt2.pr > pt.pr) {
						pt2 = pt2._next;
					}
					if ((pt._prev = pt2 ? pt2._prev : last)) {
						pt._prev._next = pt;
					} else {
						first = pt;
					}
					if ((pt._next = pt2)) {
						pt2._prev = pt;
					} else {
						last = pt;
					}
					pt = next;
				}
				pt = tween._firstPT = first;
			}
			while (pt) {
				if (pt.pg) if (typeof(pt.t[type]) === "function") if (pt.t[type]()) {
					changed = true;
				}
				pt = pt._next;
			}
			return changed;
		};

		TweenPlugin.activate = function(plugins) {
			var i = plugins.length;
			while (--i > -1) {
				if (plugins[i].API === TweenPlugin.API) {
					_plugins[(new plugins[i]())._propName] = plugins[i];
				}
			}
			return true;
		};

		//provides a more concise way to define plugins that have no dependencies besides TweenPlugin and TweenLite, wrapping common boilerplate stuff into one function (added in 1.9.0). You don't NEED to use this to define a plugin - the old way still works and can be useful in certain (rare) situations.
		_gsDefine.plugin = function(config) {
			if (!config || !config.propName || !config.init || !config.API) { throw "illegal plugin definition."; }
			var propName = config.propName,
				priority = config.priority || 0,
				overwriteProps = config.overwriteProps,
				map = {init:"_onInitTween", set:"setRatio", kill:"_kill", round:"_mod", mod:"_mod", initAll:"_onInitAllProps"},
				Plugin = _class("plugins." + propName.charAt(0).toUpperCase() + propName.substr(1) + "Plugin",
					function() {
						TweenPlugin.call(this, propName, priority);
						this._overwriteProps = overwriteProps || [];
					}, (config.global === true)),
				p = Plugin.prototype = new TweenPlugin(propName),
				prop;
			p.constructor = Plugin;
			Plugin.API = config.API;
			for (prop in map) {
				if (typeof(config[prop]) === "function") {
					p[map[prop]] = config[prop];
				}
			}
			Plugin.version = config.version;
			TweenPlugin.activate([Plugin]);
			return Plugin;
		};


		//now run through all the dependencies discovered and if any are missing, log that to the console as a warning. This is why it's best to have TweenLite load last - it can check all the dependencies for you.
		a = window._gsQueue;
		if (a) {
			for (i = 0; i < a.length; i++) {
				a[i]();
			}
			for (p in _defLookup) {
				if (!_defLookup[p].func) {
					window.console.log("GSAP encountered missing dependency: " + p);
				}
			}
		}

		_tickerActive = false; //ensures that the first official animation forces a ticker.tick() to update the time when it is instantiated

		return TweenLite;

})(_gsScope, "TweenLite");

var globals = _gsScope.GreenSockGlobals;
var nonGlobals = globals.com.greensock;

var SimpleTimeline = nonGlobals.core.SimpleTimeline;
var Animation = nonGlobals.core.Animation;
var Ease = globals.Ease;
var Linear = globals.Linear;
var Power0 = Linear;
var Power1 = globals.Power1;
var Power2 = globals.Power2;
var Power3 = globals.Power3;
var Power4 = globals.Power4;
var TweenPlugin = globals.TweenPlugin;
var EventDispatcher = nonGlobals.events.EventDispatcher;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(184)(module), __webpack_require__(185)))

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

var _debounce = __webpack_require__(10);

var _debounce2 = _interopRequireDefault(_debounce);

var _browserCapabilities = __webpack_require__(3);

var _browserCapabilities2 = _interopRequireDefault(_browserCapabilities);

var _defaults = __webpack_require__(5);

var _defaults2 = _interopRequireDefault(_defaults);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var instance = null,
    _scrollAnimationPending = false,
    _resizeAnimationPending = false;
var _resizeHandlers = [],
    _scrollHandlers = [],
    _orientationChangeHandlers = [];

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

            var minWait = 1000 / 60,
                maxWait = 1000 / 30;

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

var instance = null,
    isBrowser = typeof window !== 'undefined';

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
    buildingUnit: 12,
    defaultDuration: .3,
    defaultEase: '.23, 1, .32, 1'
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _vue = __webpack_require__(13);

var _vue2 = _interopRequireDefault(_vue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EventScope = new _vue2.default(),
    EventLog = [],
    excludedLogEvents = ['size'];

var PublicEventService = function () {
    function PublicEventService() {
        _classCallCheck(this, PublicEventService);
    }

    _createClass(PublicEventService, null, [{
        key: 'emit',
        value: function emit(event, args) {
            if (!excludedLogEvents.includes(event)) {
                EventLog.push({ 'at': Date.now(), 'event': event, 'args': args });
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseLink = __webpack_require__(118);

var _baseLink2 = _interopRequireDefault(_baseLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _baseLink2.default;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    click: 'gtm-click'
};

/***/ }),
/* 9 */
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
/* 10 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__10__;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.registry = exports.PublicEventService = exports.ViewportUtility = exports.TextUtils = exports.BrowserCapabilities = exports.Arithmetic = exports.Defaults = undefined;

var _defaults = __webpack_require__(5);

Object.defineProperty(exports, 'Defaults', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_defaults).default;
    }
});

var _arithmetic = __webpack_require__(9);

Object.defineProperty(exports, 'Arithmetic', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_arithmetic).default;
    }
});

var _browserCapabilities = __webpack_require__(3);

Object.defineProperty(exports, 'BrowserCapabilities', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_browserCapabilities).default;
    }
});

var _textUtils = __webpack_require__(12);

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

var _publicEventService = __webpack_require__(6);

Object.defineProperty(exports, 'PublicEventService', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_publicEventService).default;
    }
});

__webpack_require__(14);

__webpack_require__(15);

__webpack_require__(16);

__webpack_require__(17);

__webpack_require__(18);

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

var _componentRegistry = __webpack_require__(111);

var _componentRegistry2 = _interopRequireDefault(_componentRegistry);

var _components = __webpack_require__(113);

var _components2 = _interopRequireDefault(_components);

var _directives = __webpack_require__(318);

var Directives = _interopRequireWildcard(_directives);

__webpack_require__(320);

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
/* 12 */
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
/* 13 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__13__;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__14__;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__15__;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__16__;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__17__;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__18__;

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

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

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
  runtime.wrap = wrap;

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

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
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
  runtime.awrap = function(arg) {
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
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
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
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
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
        if (delegate.iterator.return) {
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

  runtime.keys = function(object) {
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
  runtime.values = values;

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
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _uniqId = __webpack_require__(112);

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
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
                    return this._uid;
                }
            });
        }
    }]);

    return UniqId;
}();

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _atoms = __webpack_require__(114);

var Atoms = _interopRequireWildcard(_atoms);

var _molecules = __webpack_require__(160);

var Molecules = _interopRequireWildcard(_molecules);

var _organisms = __webpack_require__(248);

var Organisms = _interopRequireWildcard(_organisms);

var _organismsPage = __webpack_require__(255);

var OrganismsPage = _interopRequireWildcard(_organismsPage);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = _extends({}, Atoms, Molecules, Organisms, OrganismsPage);

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _animatedArrow = __webpack_require__(115);

Object.defineProperty(exports, 'AnimatedArrow', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_animatedArrow).default;
  }
});

var _BaseLink = __webpack_require__(7);

Object.defineProperty(exports, 'BaseLink', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_BaseLink).default;
  }
});

var _contentLink = __webpack_require__(120);

Object.defineProperty(exports, 'ContentLink', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_contentLink).default;
  }
});

var _contentButton = __webpack_require__(122);

Object.defineProperty(exports, 'ContentButton', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_contentButton).default;
  }
});

var _actionButton = __webpack_require__(124);

Object.defineProperty(exports, 'ActionButton', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_actionButton).default;
  }
});

var _contentLinkList = __webpack_require__(127);

Object.defineProperty(exports, 'ContentLinkList', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_contentLinkList).default;
  }
});

var _hitArea = __webpack_require__(130);

Object.defineProperty(exports, 'HitArea', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_hitArea).default;
  }
});

var _horizontalList = __webpack_require__(133);

Object.defineProperty(exports, 'HorizontalList', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_horizontalList).default;
  }
});

var _icon = __webpack_require__(136);

Object.defineProperty(exports, 'Icon', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_icon).default;
  }
});

var _cImage = __webpack_require__(139);

Object.defineProperty(exports, 'Image', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_cImage).default;
  }
});

var _navAssist = __webpack_require__(144);

Object.defineProperty(exports, 'NavAssist', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_navAssist).default;
  }
});

var _responsivePicture = __webpack_require__(147);

Object.defineProperty(exports, 'ResponsivePicture', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_responsivePicture).default;
  }
});

var _tabbableDefinitionList = __webpack_require__(151);

Object.defineProperty(exports, 'TabbableDefinitionList', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_tabbableDefinitionList).default;
  }
});

var _tooltip = __webpack_require__(154);

Object.defineProperty(exports, 'Tooltip', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_tooltip).default;
  }
});

var _youtubeVideo = __webpack_require__(157);

Object.defineProperty(exports, 'YoutubeVideo', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_youtubeVideo).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _animatedArrow = __webpack_require__(116);

var _animatedArrow2 = _interopRequireDefault(_animatedArrow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _animatedArrow2.default;

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(1);

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
    template: __webpack_require__(117)
})], AnimatedArrow);
exports.default = AnimatedArrow;

/***/ }),
/* 117 */
/***/ (function(module, exports) {

module.exports = "<svg class=\"arrow--animated\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 120\">\n    <defs>\n        <clipPath id=\"mask\" class=\"arrow__mask\">\n            <rect x=\"40\" y=\"40\" width=\"40\" height=\"40\" rotate=\"45deg\"/>\n        </clipPath>\n    </defs>\n    <g clip-path=\"url(#mask)\">\n        <path class=\"arrow__line arrow__line-1\" d=\"M15.3 55h94.8v10.1H15.3z\" clip-path=\"url(#mask)\" />\n        <path class=\"arrow__line arrow__line-2\" d=\"M15.3 55h94.8v10.1H15.3z\"/>\n        <path class=\"arrow__line arrow__line-3\" d=\"M15.3 55h94.8v10.1H15.3z\"/>\n    </g>\n</svg>\n";

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(1);

var _events = __webpack_require__(8);

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
                this.$emitPublic(this.clickEventType, this.clickEventData);
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
            if (this.icon !== '' && this.mod && this.mod.indexOf('small') === -1) {
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
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: false }), __metadata("design:type", String)], BaseLink.prototype, "block", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: false }), __metadata("design:type", String)], BaseLink.prototype, "mod", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: false }), __metadata("design:type", String)], BaseLink.prototype, "icon", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: false }), __metadata("design:type", String)], BaseLink.prototype, "url", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: false }), __metadata("design:type", String)], BaseLink.prototype, "label", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object, required: false }), __metadata("design:type", Object)], BaseLink.prototype, "clickEvent", void 0);
BaseLink = __decorate([(0, _vuePropertyDecorator.Component)({
    name: 'base-link',
    template: __webpack_require__(119)
})], BaseLink);
exports.default = BaseLink;

/***/ }),
/* 119 */
/***/ (function(module, exports) {

module.exports = "<component :class=\"classObject\"\n           @click=\"triggerEventClick\"\n           v-bind=\"linkProps\">\n    <icon v-if=\"this.icon\" :icon-name=\"icon\" />\n    <span v-if=\"!slots\" class=\"link__underline\">\n        {{label}}\n    </span>\n    <slot v-else ></slot>\n\n</component>\n";

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _contentLink = __webpack_require__(121);

var _contentLink2 = _interopRequireDefault(_contentLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _contentLink2.default;

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(1);

var _BaseLink2 = __webpack_require__(7);

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
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _contentButton = __webpack_require__(123);

var _contentButton2 = _interopRequireDefault(_contentButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _contentButton2.default;

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(1);

var _BaseLink2 = __webpack_require__(7);

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
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionButton = __webpack_require__(125);

var _actionButton2 = _interopRequireDefault(_actionButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _actionButton2.default;

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(1);

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
ActionButton = __decorate([(0, _vuePropertyDecorator.Component)({
    name: 'ActionButton',
    template: __webpack_require__(126)
})], ActionButton);
exports.default = ActionButton;

/***/ }),
/* 126 */
/***/ (function(module, exports) {

module.exports = "<a href=\"#\" :class=\"classObject\">\n    <icon v-if=\"this.icon\" :icon-name=\"icon\" />\n    <slot ></slot>\n</a>\n";

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _contentLinkList = __webpack_require__(128);

var _contentLinkList2 = _interopRequireDefault(_contentLinkList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _contentLinkList2.default;

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(1);

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
ContentLinkList = __decorate([(0, _vuePropertyDecorator.Component)({
    name: 'content-link-list',
    template: __webpack_require__(129)
})], ContentLinkList);
exports.default = ContentLinkList;

/***/ }),
/* 129 */
/***/ (function(module, exports) {

module.exports = "<ul :class=\"block + '__list'\">\n    <li v-for=\"link in links\" :class=\"block + '__item'\">\n        <content-link :class=\"link.class\" :block='block' :icon=\"link.icon\" :url=\"link.url\" :label=\"link.label\"></content-link>\n    </li>\n</ul>\n";

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _hitArea = __webpack_require__(131);

var _hitArea2 = _interopRequireDefault(_hitArea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _hitArea2.default;

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(1);

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
HitArea = __decorate([(0, _vuePropertyDecorator.Component)({
    name: 'hit-area',
    template: __webpack_require__(132)
})], HitArea);
exports.default = HitArea;

/***/ }),
/* 132 */
/***/ (function(module, exports) {

module.exports = "<a class=\"hit-area\" role=\"button\" tabindex=\"0\">\n    <slot></slot>\n</a>\n";

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _horizontalList = __webpack_require__(134);

var _horizontalList2 = _interopRequireDefault(_horizontalList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _horizontalList2.default;

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(1);

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
HorizontalList = __decorate([(0, _vuePropertyDecorator.Component)({
    name: 'horizontal-list',
    template: __webpack_require__(135)
})], HorizontalList);
exports.default = HorizontalList;

/***/ }),
/* 135 */
/***/ (function(module, exports) {

module.exports = "<section :class=\"styleModifier\">\n    <strong class=\"caption-list__headline\">\n        {{ label }}\n    </strong>\n    <ul class=\"caption-list\">\n        <li class=\"caption-list__list-item\" v-for=\"item in listItems\">\n            {{ item.additionalContent }}\n            <a :href=\"item.url\">{{ item.text }}</a>\n        </li>\n    </ul>\n</section>\n";

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _icon = __webpack_require__(137);

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _icon2.default;

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(1);

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
        key: "iconUrl",
        get: function get() {
            return window['svgIconMap'] || defaultIconUrl;
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
Icon = __decorate([(0, _vuePropertyDecorator.Component)({
    name: 'icon',
    template: __webpack_require__(138)
})], Icon);
exports.default = Icon;

/***/ }),
/* 138 */
/***/ (function(module, exports) {

module.exports = "<svg class=\"icon\" :class=\"iconClass\" :viewBox=\"viewBox\" v-if=\"ready\">\n    <use :xlink:href=\"iconRef\" v-if=\"!symbolData\"></use>\n</svg>\n\n";

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cImage = __webpack_require__(140);

var _cImage2 = _interopRequireDefault(_cImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _cImage2.default;

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(1);

var _cImage = __webpack_require__(141);

var _browserCapabilities = __webpack_require__(3);

var _browserCapabilities2 = _interopRequireDefault(_browserCapabilities);

var _viewport = __webpack_require__(2);

var _viewport2 = _interopRequireDefault(_viewport);

var _cImage2 = __webpack_require__(142);

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

var CImage = function (_Vue) {
    _inherits(CImage, _Vue);

    function CImage() {
        _classCallCheck(this, CImage);

        var _this = _possibleConstructorReturn(this, (CImage.__proto__ || Object.getPrototypeOf(CImage)).apply(this, arguments));

        _this.viewportUtil = new _viewport2.default();
        _this.thumbnailLoaded = false;
        _this.imageLoaded = false;
        _this.inView = false;
        _this.width = 0;
        _this.height = 0;
        return _this;
    }

    _createClass(CImage, [{
        key: "getParams",
        value: function getParams(options) {
            var paramMap = new Map([['w', options && options.width ? options.width : this.width], ['h', this.height], ['fit', this.resizeBehavior], ['f', this.focusArea], ['r', this.radius]]);
            if (this.imageFormat === _cImage.ImageFormat.jpg || this.imageFormat === _cImage.ImageFormat.pjpg) {
                paramMap.set('q', this.quality);
            }
            if (this.backgroundColor) {
                paramMap.set('bg', "rgb:" + this.backgroundColor);
            }
            switch (this.imageFormat) {
                case _cImage.ImageFormat.pjpg:
                    paramMap.set('fm', _cImage.ImageFormat.jpg);
                    paramMap.set('fl', 'progressive');
                    break;
                case _cImage.ImageFormat.png8:
                    paramMap.set('fm', _cImage.ImageFormat.png);
                    paramMap.set('fl', 'png8');
                    break;
                default:
                    if (this.imageFormat !== _cImage.ImageFormat.default) {
                        paramMap.set('fm', this.imageFormat);
                    }
            }
            return Array.from(paramMap.keys()).reduce(function (accumulator, current) {
                var value = paramMap.get(current);
                if (!value) return accumulator;
                return "" + accumulator + (accumulator === '' ? '?' : '&') + current + "=" + value;
            }, '');
        }
    }, {
        key: "calculateInView",
        value: function calculateInView() {
            if (this.inView && this.keepInView) {
                return;
            }
            var windowBottom = this.viewportUtil.scrollY + this.viewportUtil.screenHeight;
            var pictureBounds = this.$el.getBoundingClientRect();
            var pictureTop = this.viewportUtil.scrollY + pictureBounds.top;
            var pictureBottom = pictureTop + pictureBounds.height;
            this.inView = this.viewportUtil.scrollY <= pictureBottom && windowBottom >= pictureTop;
        }
    }, {
        key: "calculateDimensions",
        value: function calculateDimensions() {
            var _this2 = this;

            if (!_browserCapabilities2.default.isBrowser) return Promise.resolve();
            if (!this.inView) return Promise.resolve();
            return new Promise(function (resolve) {
                window.requestAnimationFrame(function () {
                    var rect = _this2.$el.getBoundingClientRect();
                    var desiredWidth = rect.width * (window.devicePixelRatio || 1);
                    _this2.width = desiredWidth > _cImage2.imageConstants.maxWidth ? _cImage2.imageConstants.maxWidth : Math.floor(desiredWidth);
                    resolve();
                });
            });
        }
    }, {
        key: "onInView",
        value: function () {
            var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(val) {
                var imageToLoad;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (val) {
                                    _context.next = 2;
                                    break;
                                }

                                return _context.abrupt("return");

                            case 2:
                                _context.next = 4;
                                return this.calculateDimensions();

                            case 4:
                                imageToLoad = document.createElement('img');

                                imageToLoad.src = this.imageUrl;
                                imageToLoad.addEventListener('load', this.onImageLoad);

                            case 7:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function onInView(_x) {
                return _ref.apply(this, arguments);
            }

            return onInView;
        }()
    }, {
        key: "resizeHandler",
        value: function resizeHandler() {
            this.calculateInView();
            this.calculateDimensions();
        }
    }, {
        key: "scrollHandler",
        value: function scrollHandler() {
            this.calculateInView();
        }
    }, {
        key: "onThumbnailLoad",
        value: function () {
            var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(e) {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                this.thumbnailLoaded = true;

                            case 1:
                            case "end":
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function onThumbnailLoad(_x2) {
                return _ref2.apply(this, arguments);
            }

            return onThumbnailLoad;
        }()
    }, {
        key: "onImageLoad",
        value: function () {
            var _ref3 = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(e) {
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                this.imageLoaded = true;

                            case 1:
                            case "end":
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function onImageLoad(_x3) {
                return _ref3.apply(this, arguments);
            }

            return onImageLoad;
        }()
    }, {
        key: "mounted",
        value: function mounted() {
            var _this3 = this;

            if (!_browserCapabilities2.default.isBrowser) return;
            window.requestAnimationFrame(function () {
                _this3.calculateInView();
                _this3.viewportUtil.addResizeHandler(_this3.resizeHandler);
                _this3.viewportUtil.addScrollHandler(_this3.scrollHandler);
            });
            this.$el.addEventListener('load', this.onThumbnailLoad);
        }
    }, {
        key: "beforeDestroy",
        value: function beforeDestroy() {
            this.viewportUtil.removeResizeHandler(this.resizeHandler);
            this.viewportUtil.removeScrollHandler(this.resizeHandler);
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
            return this.imageLoaded && this.inView ? this.imageUrl : this.thumbUrl;
        }
    }, {
        key: "imageUrl",
        get: function get() {
            return "" + this.url + this.getParams({});
        }
    }, {
        key: "thumbUrl",
        get: function get() {
            return "" + this.url + this.getParams({ width: _cImage2.imageConstants.initialWidth });
        }
    }]);

    return CImage;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", String)], CImage.prototype, "mimeType", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", String)], CImage.prototype, "url", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, default: '' }), __metadata("design:type", String)], CImage.prototype, "alt", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Boolean, default: true }), __metadata("design:type", Boolean)], CImage.prototype, "keepInView", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, default: _cImage.ImageFormat.default }), __metadata("design:type", String)], CImage.prototype, "imageFormat", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, default: _cImage.ResizeBehavior.default }), __metadata("design:type", String)], CImage.prototype, "resizeBehavior", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, default: _cImage.FocusArea.center }), __metadata("design:type", String)], CImage.prototype, "focusArea", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Number, default: 0 }), __metadata("design:type", Number)], CImage.prototype, "radius", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Number, default: 65 }), __metadata("design:type", Number)], CImage.prototype, "quality", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, default: null }), __metadata("design:type", Object)], CImage.prototype, "backgroundColor", void 0);
__decorate([(0, _vuePropertyDecorator.Watch)('inView'), __metadata("design:type", Function), __metadata("design:paramtypes", [Boolean]), __metadata("design:returntype", Promise)], CImage.prototype, "onInView", null);
CImage = __decorate([(0, _vuePropertyDecorator.Component)({
    name: 'c-image',
    template: __webpack_require__(143)
})], CImage);
exports.default = CImage;

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
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
var FocusArea = exports.FocusArea = undefined;
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
})(FocusArea || (exports.FocusArea = FocusArea = {}));

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var imageConstants = exports.imageConstants = {
    maxWidth: 4000,
    initialWidth: 20
};

/***/ }),
/* 143 */
/***/ (function(module, exports) {

module.exports = "<img :alt=\"alt\" :src=\"src\" class=\"img--contain\" :class=\"classList\" />\n";

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _navAssist = __webpack_require__(145);

var _navAssist2 = _interopRequireDefault(_navAssist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _navAssist2.default;

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(1);

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
NavAssist = __decorate([(0, _vuePropertyDecorator.Component)({
    name: 'nav-assist',
    template: __webpack_require__(146)
})], NavAssist);
exports.default = NavAssist;

/***/ }),
/* 146 */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" @click=\"toggleState()\" @keyup.esc=\"close\" class=\"nav-assist\"\n        :class=\"{'nav-assist--close': this.openState, 'nav-assist--initial-state': !this.used}\" aria-label=\"menu\"\n        :aria-expanded=\"this.openState.toString()\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">\n        <rect class=\"nav-assist__line nav-assist__line-2\" x=\"2\" y=\"11\" width=\"20\" height=\"2\"/>\n        <rect class=\"nav-assist__line nav-assist__line-1\" x=\"2\" y=\"4.5\" width=\"20\" height=\"2\"/>\n        <rect class=\"nav-assist__line nav-assist__line-3\" x=\"2\" y=\"17.5\" width=\"20\" height=\"2\"/>\n        <rect class=\"nav-assist__line nav-assist__line-4\" x=\"-1.3\" y=\"11\" transform=\"matrix(0.7071 -0.7071 0.7071 0.7071 -4.9706 12)\" width=\"26.6\" height=\"2\"/>\n        <rect class=\"nav-assist__line nav-assist__line-5\" x=\"11\" y=\"-1.3\" transform=\"matrix(0.7071 -0.7071 0.7071 0.7071 -4.9706 12)\" width=\"2\" height=\"26.6\"/>\n    </svg>\n</button>\n";

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _responsivePicture = __webpack_require__(148);

var _responsivePicture2 = _interopRequireDefault(_responsivePicture);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _responsivePicture2.default;

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(1);

var _viewport = __webpack_require__(2);

var _viewport2 = _interopRequireDefault(_viewport);

var _responsivePictureSource = __webpack_require__(149);

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
    template: __webpack_require__(150),
    components: {
        ResponsivePictureSource: _responsivePictureSource2.default
    }
})], ResponsivePicture);
exports.default = ResponsivePicture;

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(1);

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
/* 150 */
/***/ (function(module, exports) {

module.exports = "<picture>\n    <template>\n        <responsive-picture-source v-if=\"desktopHdWidth\" media=\"(min-width: 1201px)\" :image=\"lazyLoading ? '' : desktopHdWidth\" />\n        <responsive-picture-source v-if=\"desktopWidth\" media=\"(min-width: 1025px)\" :image=\"lazyLoading ? '' : desktopWidth\" />\n        <responsive-picture-source v-if=\"tabletWidth\" media=\"(min-width: 768px)\" :image=\"lazyLoading ? '' : tabletWidth\" />\n        <responsive-picture-source v-if=\"mobileXlWidth\" media=\"(min-width: 569px)\" :image=\"lazyLoading ? '' : mobileXlWidth\" />\n        <responsive-picture-source v-if=\"mobileLWidth\" media=\"(min-width: 481px)\" :image=\" lazyLoading ? '' : mobileLWidth\" />\n        <responsive-picture-source media=\"(max-width: 480px)\" :image=\"mobileWidth\" />\n    </template>\n\n    <img :src=\"lazyLoading ? '' : mobileWidth.url ? mobileWidth.url : mobileWidth\" :alt=\"description\" class=\"img--responsive\" :class=\"classes\"/>\n</picture>\n";

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tabbableDefinitionList = __webpack_require__(152);

var _tabbableDefinitionList2 = _interopRequireDefault(_tabbableDefinitionList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _tabbableDefinitionList2.default;

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _gsap = __webpack_require__(4);

var _viewport = __webpack_require__(2);

var _viewport2 = _interopRequireDefault(_viewport);

var _defaults = __webpack_require__(5);

var _defaults2 = _interopRequireDefault(_defaults);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

exports.default = {
    name: 'tabbable-definition-list',
    template: __webpack_require__(153),
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

            var duration = 0.4,
                direction = this.getDirection(oldValue, newValue),
                height = this.heights[newValue],
                delay = this.viewport.isMobile ? duration * 0.6 : 0,
                descriptionHeight = (this.viewport.isMobile ? height.dt : 0) + height.dd + _defaults2.default.buildingUnit * 2.5,
                elementsToHide = !this.viewport.isMobile ? this.$refs.descriptions[oldValue] : [this.$refs.terms[oldValue], this.$refs.descriptions[oldValue]];

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
                for (var i = 0, leni = tweens.length; i < leni; i++) {
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

            this.$refs.descriptions.map(function (element) {
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
/* 153 */
/***/ (function(module, exports) {

module.exports = "<dl class=\"tabbable-dl\">\n    <template v-for=\"(item, index) in items\">\n        <dt class=\"tabbable-dl__term tabbable-dl__term--vue\" ref=\"terms\">\n            <a class=\"tabbable-dl__link\" @click.prevent=\"changeIndex(index)\" @keyup.enter=\"changeIndex(index)\" role=\"button\" tabindex=\"0\">\n                <h3 class=\"tabbable-dl__title\">\n                    <icon class=\"tabbable-dl__icon\" icon-name=\"angle-right\"></icon>\n                    {{ item.title }}\n                </h3>\n            </a>\n        </dt>\n        <dd class=\"tabbable-dl__desc tabbable-dl__desc--vue\" ref=\"descriptions\">{{ item.description }}</dd>\n    </template>\n</dl>\n";

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tooltip = __webpack_require__(155);

var _tooltip2 = _interopRequireDefault(_tooltip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _tooltip2.default;

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(1);

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
            if (this.block !== '') {
                classes[this.block + "__tooltip"] = true;
            }
            return classes;
        }
    }]);

    return Tooltip;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: false }), __metadata("design:type", String)], Tooltip.prototype, "block", void 0);
Tooltip = __decorate([(0, _vuePropertyDecorator.Component)({
    name: 'Tooltip',
    template: __webpack_require__(156)
})], Tooltip);
exports.default = Tooltip;

/***/ }),
/* 156 */
/***/ (function(module, exports) {

module.exports = "<div class=\"tooltip\" :class=\"classObject()\">\n    <slot/>\n</div>\n";

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _youtubeVideo = __webpack_require__(158);

var _youtubeVideo2 = _interopRequireDefault(_youtubeVideo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _youtubeVideo2.default;

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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

exports.default = {
    name: 'youtube-video',
    template: __webpack_require__(159),
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
                    valueType = typeof value === 'undefined' ? 'undefined' : _typeof(value);

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
};

/***/ }),
/* 159 */
/***/ (function(module, exports) {

module.exports = "<div class=\"youtube-video\">\n    <iframe v-if=\"loadVideo\" :src=\"videoUrl\" frameborder=\"0\" allowfullscreen=\"allowfullscreen\" class=\"youtube-video__frame\"></iframe>\n</div>\n";

/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _autoComplete = __webpack_require__(161);

Object.defineProperty(exports, 'AutoComplete', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_autoComplete).default;
  }
});

var _brandCard = __webpack_require__(164);

Object.defineProperty(exports, 'BrandCard', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_brandCard).default;
  }
});

var _card = __webpack_require__(167);

Object.defineProperty(exports, 'Card', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_card).default;
  }
});

var _color = __webpack_require__(170);

Object.defineProperty(exports, 'Color', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_color).default;
  }
});

var _contentToggle = __webpack_require__(173);

Object.defineProperty(exports, 'ContentToggle', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_contentToggle).default;
  }
});

var _currency = __webpack_require__(176);

Object.defineProperty(exports, 'Currency', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_currency).default;
  }
});

var _ctaBlock = __webpack_require__(179);

Object.defineProperty(exports, 'CtaBlock', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ctaBlock).default;
  }
});

var _fauxVerticalScroll = __webpack_require__(182);

Object.defineProperty(exports, 'FauxVerticalScroll', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_fauxVerticalScroll).default;
  }
});

var _flyout = __webpack_require__(188);

Object.defineProperty(exports, 'Flyout', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_flyout).default;
  }
});

var _flyoutSection = __webpack_require__(191);

Object.defineProperty(exports, 'FlyoutSection', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_flyoutSection).default;
  }
});

var _footerNav = __webpack_require__(194);

Object.defineProperty(exports, 'FooterNav', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_footerNav).default;
  }
});

var _iconButton = __webpack_require__(197);

Object.defineProperty(exports, 'IconButton', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_iconButton).default;
  }
});

var _legalNav = __webpack_require__(200);

Object.defineProperty(exports, 'LegalNav', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_legalNav).default;
  }
});

var _mainNav = __webpack_require__(203);

Object.defineProperty(exports, 'MainNav', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_mainNav).default;
  }
});

var _mainNavItem = __webpack_require__(206);

Object.defineProperty(exports, 'MainNavItem', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_mainNavItem).default;
  }
});

var _materialCard = __webpack_require__(209);

Object.defineProperty(exports, 'MaterialCard', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_materialCard).default;
  }
});

var _modal = __webpack_require__(212);

Object.defineProperty(exports, 'Modal', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_modal).default;
  }
});

var _pager = __webpack_require__(215);

Object.defineProperty(exports, 'Pager', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_pager).default;
  }
});

var _search = __webpack_require__(218);

Object.defineProperty(exports, 'Search', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_search).default;
  }
});

var _socialNav = __webpack_require__(221);

Object.defineProperty(exports, 'SocialNav', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_socialNav).default;
  }
});

var _subnavigationItem = __webpack_require__(224);

Object.defineProperty(exports, 'SubNavigationItem', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_subnavigationItem).default;
  }
});

var _sysNav = __webpack_require__(227);

Object.defineProperty(exports, 'SysNav', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_sysNav).default;
  }
});

var _tab = __webpack_require__(230);

Object.defineProperty(exports, 'Tab', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_tab).default;
  }
});

var _tabs = __webpack_require__(233);

Object.defineProperty(exports, 'Tabs', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_tabs).default;
  }
});

var _tag = __webpack_require__(236);

Object.defineProperty(exports, 'Tag', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_tag).default;
  }
});

var _tagList = __webpack_require__(239);

Object.defineProperty(exports, 'TagList', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_tagList).default;
  }
});

var _listSection = __webpack_require__(242);

Object.defineProperty(exports, 'ListSection', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_listSection).default;
  }
});

var _businessCard = __webpack_require__(245);

Object.defineProperty(exports, 'BusinessCard', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_businessCard).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _autoComplete = __webpack_require__(162);

var _autoComplete2 = _interopRequireDefault(_autoComplete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _autoComplete2.default;

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(1);

var _viewport = __webpack_require__(2);

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
            return;
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
        return "autocomplete" + ~~(Math.random() * 10000);
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
AutoComplete = __decorate([(0, _vuePropertyDecorator.Component)({
    name: 'auto-complete',
    template: __webpack_require__(163)
})], AutoComplete);
exports.default = AutoComplete;

/***/ }),
/* 163 */
/***/ (function(module, exports) {

module.exports = "<div class=\"auto-complete\"\n    :class=\"classObject\"\n     role=\"combobox\"\n     aria-haspopup=\"listbox\"\n\n     v-if=\"hasItems\"\n     :aria-owns=\"listId\"\n     :aria-expanded=\"isOpen\"\n\n     @keydown.up.prevent=\"selectPrevious\"\n     @keydown.shift.tab.prevent=\"selectPrevious\"\n     @keydown.down.prevent=\"selectCurrent\"\n     @keydown.tab.exact.prevent=\"selectCurrent\">\n\n\n    <input ref=\"autoComplete\"\n           class=\"auto-complete__input\"\n           type=\"text\"\n           autofocus=\"true\"\n           autocomplete=\"off\"\n           aria-autocomplete=\"list\"\n\n           :id=\"inputId\"\n           :aria-controls=\"listId\"\n           :placeholder=\"placeholder\"\n           :required=\"required\"\n\n           v-model.trim=\"input\"\n           @input=\"input = $event.target.value\"\n\n           @keyup.esc=\"resetInput\"\n           @keydown=\"forceOpen = true\"\n           @keydown.enter.prevent=\"selectItemByInput\">\n\n    <div :id=\"listId\" class=\"auto-complete__dropdown\" role=\"listbox\"\n         v-if=\"isOpen\"\n         @keyup.esc=\"closeList\"\n         @keydown.backspace.prevent\n         @keydown.down.prevent=\"selectNext\"\n         @keydown.tab.exact.prevent=\"selectNext\">\n\n        <template v-if=\"storedItems && storedItems.length\">\n            <h4 class=\"auto-complete__label\" id=\"storedLabel\">\n                {{ storedLabel }}\n            </h4>\n            <ul class=\"auto-complete__list\" aria-labelledby=\"storedLabel\">\n                <li class=\"auto-complete__list-item\" role=\"option\" tabindex=\"0\"\n                    v-for=\"item in storedItems\"\n                    @click=\"selectItem(item)\"\n                    @keyup.enter.prevent=\"selectItem(item)\"\n                    @keyup.esc=\"closeList\">\n                    {{ item.title }}\n                </li>\n            </ul>\n        </template>\n\n        <template v-if=\"suggestedItems && suggestedItems.length\">\n            <h4 class=\"auto-complete__label\" id=\"suggestedLabel\">\n                {{ suggestionsLabel }}\n            </h4>\n            <ul class=\"auto-complete__list\" aria-labelledby=\"suggestedLabel\">\n                <template v-if=\"matchValue\">\n                    <li class=\"auto-complete__list-item\" role=\"option\" tabindex=\"0\"\n                        v-for=\"item in suggestedItems\"\n                        @click=\"selectItem(item)\"\n                        @keyup.enter.prevent=\"selectItem(item)\">\n                        {{ item.title }}\n                    </li>\n                </template>\n                <template v-else>\n                    <li class=\"auto-complete__list-item\" role=\"option\" tabindex=\"0\"\n                        v-for=\"item in suggestedItems\"\n                        v-html=\"highlightString(item.title)\"\n                        @click=\"selectItem(item)\"\n                        @keyup.enter.prevent=\"selectItem(item)\"\n                        >\n                    </li>\n                </template>\n            </ul>\n        </template>\n    </div>\n\n</div>\n";

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _brandCard = __webpack_require__(165);

var _brandCard2 = _interopRequireDefault(_brandCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _brandCard2.default;

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: 'brand-card',
    template: __webpack_require__(166),
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
/* 166 */
/***/ (function(module, exports) {

module.exports = "<div class=\"brand-card\">\n    <div class=\"brand-card__image-wrapper\">\n        <responsive-picture v-bind=\"image\"></responsive-picture>\n    </div>\n    <template v-if=\"body && type === 'text'\">\n        <p class=\"brand-card__quote\">{{body}}</p>\n    </template>\n    <template v-else-if=\"body\">\n        <q class=\"brand-card__quote\">{{body}}</q>\n    </template>\n</div>";

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _card = __webpack_require__(168);

var _card2 = _interopRequireDefault(_card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _card2.default;

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(1);

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
    template: __webpack_require__(169)
})], Card);
exports.default = Card;

/***/ }),
/* 169 */
/***/ (function(module, exports) {

module.exports = "<article class=\"card\" :class=\"classObject\" tabindex=\"0\">\n    <div class=\"card__visual\">\n        <div class=\"card__image\" v-if=\"card.image\">\n            <responsive-picture class=\"img--responsive\" v-if=\"card.image.mobileWidth\" v-bind=\"card.image\" ></responsive-picture>\n            <cms-image class=\"img--responsive\" v-else :image=\"card.image[0]\" :orientation=\"'square'\"></cms-image>\n        </div>\n        <icon v-if=\"card.icon\" :icon-name=\"card.icon.iconName\" class=\"card__icon\"></icon>\n    </div>\n    <div class=\"card__content\">\n        <h3 class=\"card__headline\">{{ card.title }}</h3>\n        <p class=\"card__description\" v-if=\"card.description\">{{ card.description }}</p>\n        <content-link class=\"link\" v-if=\"card.contentLink\" :block=\"'card'\" :url=\"card.contentLink.href\" :label=\"card.contentLink.text\">\n        </content-link>\n    </div>\n</article>\n\n";

/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _color = __webpack_require__(171);

var _color2 = _interopRequireDefault(_color);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _color2.default;

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: 'color',
    template: __webpack_require__(172),
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
};

/***/ }),
/* 172 */
/***/ (function(module, exports) {

module.exports = "<div class=\"color\">\n    <div class=\"color__spec color__spec--show\">\n        <icon icon-name=\"show\" :style=\"styleIcon\"></icon>\n    </div>\n    <div class=\"color__spec color__spec--swatch\" :style=\"styleBackground\"></div>\n</div>\n";

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _contentToggle = __webpack_require__(174);

var _contentToggle2 = _interopRequireDefault(_contentToggle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _contentToggle2.default;

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: 'content-toggle',
    template: __webpack_require__(175),
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
/* 175 */
/***/ (function(module, exports) {

module.exports = "<a class=\"toggle toggle--icon\" role=\"button\" tabindex=\"0\" @click=\"toggle\"\n       @keyup.enter=\"toggle\">\n    <icon :icon-name=\"toggleIcon\"></icon>\n    <span>{{ toggleText }}</span>\n</a>\n";

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _currency = __webpack_require__(177);

var _currency2 = _interopRequireDefault(_currency);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _currency2.default;

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _arithmetic = __webpack_require__(9);

var _arithmetic2 = _interopRequireDefault(_arithmetic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'currency',
    template: __webpack_require__(178),
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
/* 178 */
/***/ (function(module, exports) {

module.exports = "<span class=\"currency\">\n    <span class=\"currency__type\">{{ currencyType }}</span>\n    {{ formattedAmount }}\n</span>\n";

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ctaBlock = __webpack_require__(180);

var _ctaBlock2 = _interopRequireDefault(_ctaBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ctaBlock2.default;

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(1);

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
            ContentButton: 'button',
            ContentLink: 'large'
        };
        _this.classes = {
            ContentButton: _this.styleContentButton,
            ContentLink: 'link link--large'
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
            return this.classes[type];
        }
    }]);

    return CtaBlock;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Array, required: true }), __metadata("design:type", Object)], CtaBlock.prototype, "ctas", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: false }), __metadata("design:type", String)], CtaBlock.prototype, "block", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", String)], CtaBlock.prototype, "styleContentButton", void 0);
CtaBlock = __decorate([(0, _vuePropertyDecorator.Component)({
    name: 'cta-block',
    template: __webpack_require__(181)
})], CtaBlock);
exports.default = CtaBlock;

/***/ }),
/* 181 */
/***/ (function(module, exports) {

module.exports = "<div class=\"cta__block\" v-if=\"ctas.length > 0\">\n    <template v-for=\"(cta, index) in ctas\">\n        <component :is=\"cta.type\"\n                   v-bind=\"cta\"\n                   :key=\"index\"\n                   :class=\"classObject(cta.type)\"\n                   :label=\"cta.label\"\n                   :mod=\"modifier(cta.type)\">\n        </component>\n    </template>\n</div>\n";

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fauxVerticalScroll = __webpack_require__(183);

var _fauxVerticalScroll2 = _interopRequireDefault(_fauxVerticalScroll);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _fauxVerticalScroll2.default;

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(1);

var _gsap = __webpack_require__(4);

var _Draggable = __webpack_require__(321);

var _Draggable2 = _interopRequireDefault(_Draggable);

__webpack_require__(186);

var _defaults = __webpack_require__(5);

var _defaults2 = _interopRequireDefault(_defaults);

var _viewport = __webpack_require__(2);

var _viewport2 = _interopRequireDefault(_viewport);

var _browserCapabilities = __webpack_require__(3);

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
FauxVerticalScroll = __decorate([(0, _vuePropertyDecorator.Component)({
    name: 'faux-vertical-scroll',
    template: __webpack_require__(187)
})], FauxVerticalScroll);
exports.default = FauxVerticalScroll;

/***/ }),
/* 184 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 185 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 186 */
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

var _TweenLite = __webpack_require__(0);

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
/* 187 */
/***/ (function(module, exports) {

module.exports = "<div class=\"faux-vertical-scroll\" ref=\"container\">\n    <div class=\"faux-vertical-scroll__content\" ref=\"content\">\n        <slot></slot>\n    </div>\n    <div class=\"faux-vertical-scroll__bar\" ref=\"bar\" :style=\"barStyle()\"></div>\n</div>\n";

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _flyout = __webpack_require__(189);

var _flyout2 = _interopRequireDefault(_flyout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _flyout2.default;

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(1);

var _viewport = __webpack_require__(2);

var _viewport2 = _interopRequireDefault(_viewport);

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
                return this.backToParent();
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
                return this.backToParent();
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
Flyout = __decorate([(0, _vuePropertyDecorator.Component)({
    name: 'flyout',
    template: __webpack_require__(190)
})], Flyout);
exports.default = Flyout;

/***/ }),
/* 190 */
/***/ (function(module, exports) {

module.exports = "<ul class=\"main-nav__flyout\"\n    v-if=\"items && items.length > 0\"\n    @keydown.down=\"selectNextLink\"\n    @keydown.tab.exact=\"selectNextLink\"\n    @keydown.up=\"selectPrevLink\"\n    @keydown.tab.shift.exact=\"selectPrevLink\"\n    @keydown.right=\"selectNextSection($event, true)\"\n    @keydown.left=\"selectPrevSection($event, true)\"\n    @mouseenter.stop=\"open\"\n    v-show=\"isCompact || !viewportUtil.isResizing\">\n    <flyout-section ref=\"items\"\n        v-for=\"(item, key) in items\"\n        v-if=\"item.items && item.items.length\"\n        v-bind=\"item\"\n        :is-compact=\"isCompact\"\n        :key=\"key\"\n        :itemId=\"`flyout_title_${ uniqId }_${ key }`\"\n        @close=\"$emit('close')\"\n        >\n    </flyout-section>\n</ul>\n";

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _flyoutSection = __webpack_require__(192);

var _flyoutSection2 = _interopRequireDefault(_flyoutSection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _flyoutSection2.default;

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(1);

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
        return "flyout_title_" + ~~(Math.random() * 10000);
    } }), __metadata("design:type", String)], Flyout.prototype, "itemId", void 0);
__decorate([(0, _vuePropertyDecorator.Watch)('focusIndex'), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", void 0)], Flyout.prototype, "onFocusIndex", null);
Flyout = __decorate([(0, _vuePropertyDecorator.Component)({
    name: 'flyout-section',
    template: __webpack_require__(193)
})], Flyout);
exports.default = Flyout;

/***/ }),
/* 193 */
/***/ (function(module, exports) {

module.exports = "<li class=\"flyout__section\" :class=\"sectionClass\">\n    <strong v-if=\"label\" class=\"flyout__title\" :id=\"itemId\">{{ label }}</strong>\n    <ul class=\"flyout__list\"\n        :aria-labelledby=\"itemId\"\n        :aria-haspopup=\"items.length > maxVisible\"\n        :aria-expanded=\"!isCompact || isExpanded\">\n\n        <li class=\"flyout__list-item\"  v-for=\"(item, index) in items\" v-if=\"index < maxVisible\">\n            <content-link ref=\"firstFocusableLinks\" @click.native=\"$emit('close')\" :url=\"item.url\" class=\"flyout__link link\" :label=\"item.label\"></content-link>\n        </li>\n\n        <li class=\"flyout__list-item\" v-show=\"flyoutToggleIsVisible && ! isExpanded\">\n            <content-toggle class=\"flyout__toggle\"\n                            :ref=\"flyoutToggleIsVisible && ! isExpanded ? 'focusable' : ''\"\n                            :toggle-state=\"false\"\n                            aria-hidden=\"true\"\n                            @toggle=\"toggleExpanded\">\n            </content-toggle>\n        </li>\n\n        <!-- items using v-show so spiders can index the entire menu -->\n        <li class=\"flyout__list-item\" v-for=\"(item, index) in items\" v-if=\"index >= maxVisible\" v-show=\"!isCompact || isExpanded\">\n            <content-link ref=\"focusable\"  @click.native=\"$emit('close')\" :url=\"item.url\" class=\"flyout__link link\" :label=\"item.label\"></content-link>\n        </li>\n\n        <li class=\"flyout__list-item\" v-show=\"flyoutToggleIsVisible && isExpanded\">\n            <content-toggle class=\"flyout__toggle\"\n                            ref=\"flyoutToggleIsVisible && isExpanded ? 'focusable' : ''\"\n                            :toggle-state=\"true\"\n                            aria-hidden=\"true\"\n                            @toggle=\"toggleExpanded\">\n            </content-toggle>\n        </li>\n    </ul>\n\n    <template v-if=\"bottomItem\">\n        <content-link ref=\"bottomLink\" @click.native=\"$emit('close')\" :url=\"bottomItem.url\" class=\"link flyout__link--cta-mini\" :label=\"bottomItem.label\"></content-link>\n    </template>\n</li>\n";

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _footerNav = __webpack_require__(195);

var _footerNav2 = _interopRequireDefault(_footerNav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _footerNav2.default;

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(1);

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

var FooterNav = function (_Vue) {
    _inherits(FooterNav, _Vue);

    function FooterNav() {
        _classCallCheck(this, FooterNav);

        return _possibleConstructorReturn(this, (FooterNav.__proto__ || Object.getPrototypeOf(FooterNav)).apply(this, arguments));
    }

    return FooterNav;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Array, required: true }), __metadata("design:type", Array)], FooterNav.prototype, "navigation", void 0);
FooterNav = __decorate([(0, _vuePropertyDecorator.Component)({
    name: 'footer-nav',
    template: __webpack_require__(196)
})], FooterNav);
exports.default = FooterNav;

/***/ }),
/* 196 */
/***/ (function(module, exports) {

module.exports = "<nav class=\"footer__nav\" v-if=\"navigation && navigation.length\">\n    <div class=\"flexgrid\">\n        <div class=\"flexgrid__cell--xxs-6 flexgrid__cell--xs-8 flexgrid__cell--sm-6\">\n            <div class=\"flexgrid\">\n                <div class=\"flexgrid__cell--xs-6\" v-if=\"navigation.length > 0\">\n                    <div class=\"footer-nav__column\">\n                        <h3 id=\"footer-nav__title-01\" class=\"footer-nav__title\">{{ navigation[0].label }}</h3>\n                        <template v-if=\"navigation[0].items.length\">\n                            <content-link-list :links=\"navigation[0].items\"\n                                               block=\"footer-nav\" aria-labelledby=\"footer-nav__title-01\"></content-link-list>\n                        </template>\n                    </div>\n                </div>\n                <div class=\"flexgrid__cell--xs-6\" v-if=\"navigation.length > 1\">\n                    <div class=\"footer-nav__column\">\n                        <h3 id=\"footer-nav__title-02\" class=\"footer-nav__title\">{{ navigation[1].label }}</h3>\n                        <template v-if=\"navigation[1].items.length\">\n                            <content-link-list :links=\"navigation[1].items\"\n                                               block=\"footer-nav\" aria-labelledby=\"footer-nav__title-02\"></content-link-list>\n                        </template>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"flexgrid__cell--xxs-6 flexgrid__cell--xs-4 flexgrid__cell--sm-6\"\n             v-if=\"navigation.length > 2\">\n            <div class=\"footer-nav__column footer-nav__column--last footer-nav__column--double\">\n                <h3 id=\"footer-nav__title-03\" class=\"footer-nav__title\">{{ navigation[2].label }}</h3>\n                <template v-if=\"navigation[2].items.length\">\n                    <content-link-list :links=\"navigation[2].items\"\n                                       block=\"footer-nav\" aria-labelledby=\"footer-nav__title-03\"></content-link-list>\n                </template>\n            </div>\n        </div>\n    </div>\n</nav>\n";

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _iconButton = __webpack_require__(198);

var _iconButton2 = _interopRequireDefault(_iconButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _iconButton2.default;

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(1);

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
IconButton = __decorate([(0, _vuePropertyDecorator.Component)({
    name: 'icon-button',
    template: __webpack_require__(199)
})], IconButton);
exports.default = IconButton;

/***/ }),
/* 199 */
/***/ (function(module, exports) {

module.exports = "<a class=\"icon-button\" :class=\"buttonClass\" :aria-label=\"buttonAriaLabel\" role=\"button\" tabindex=\"0\" @click=\"$emit('click')\" @keyup.enter=\"$emit('click')\">\n    <icon class=\"icon-button__icon\" :icon-name=\"iconName\"></icon>\n    <span class=\"icon-button__label\" v-if=\"hasDefaultSlot\">\n        <slot></slot>\n    </span>\n</a>\n";

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _legalNav = __webpack_require__(201);

var _legalNav2 = _interopRequireDefault(_legalNav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _legalNav2.default;

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(1);

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

var LegalNav = function (_Vue) {
    _inherits(LegalNav, _Vue);

    function LegalNav() {
        _classCallCheck(this, LegalNav);

        return _possibleConstructorReturn(this, (LegalNav.__proto__ || Object.getPrototypeOf(LegalNav)).apply(this, arguments));
    }

    return LegalNav;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Array, required: true }), __metadata("design:type", Object)], LegalNav.prototype, "navigation", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], LegalNav.prototype, "label", void 0);
LegalNav = __decorate([(0, _vuePropertyDecorator.Component)({
    name: 'legal-nav',
    template: __webpack_require__(202)
})], LegalNav);
exports.default = LegalNav;

/***/ }),
/* 202 */
/***/ (function(module, exports) {

module.exports = "<div class=\"legal\">\n    <p class=\"legal__copyright-label\">\n        <small v-html=\"label\"></small>\n    </p>\n\n    <template v-if=\"navigation && navigation.length\">\n        <nav class=\"legal__nav\">\n            <content-link-list :links=\"navigation\" block=\"legal\"></content-link-list>\n        </nav>\n    </template>\n</div>\n";

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mainNav = __webpack_require__(204);

var _mainNav2 = _interopRequireDefault(_mainNav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _mainNav2.default;

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(1);

var _viewport = __webpack_require__(2);

var _viewport2 = _interopRequireDefault(_viewport);

var _browserCapabilities = __webpack_require__(3);

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

var MainNav = function (_Vue) {
    _inherits(MainNav, _Vue);

    function MainNav() {
        _classCallCheck(this, MainNav);

        var _this = _possibleConstructorReturn(this, (MainNav.__proto__ || Object.getPrototypeOf(MainNav)).apply(this, arguments));

        _this.viewportUtil = new _viewport2.default();
        _this.showCompactMenu = true;
        return _this;
    }

    _createClass(MainNav, [{
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

    return MainNav;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Array, required: false }), __metadata("design:type", Array)], MainNav.prototype, "items", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Boolean, required: false }), __metadata("design:type", Boolean)], MainNav.prototype, "mainNavOpen", void 0);
MainNav = __decorate([(0, _vuePropertyDecorator.Component)({
    name: 'main-nav',
    template: __webpack_require__(205)
})], MainNav);
exports.default = MainNav;

/***/ }),
/* 205 */
/***/ (function(module, exports) {

module.exports = "<nav key=\"large-menu\" class=\"main-nav\" :class=\"classList\" aria-label=\"site\">\n    <ul class=\"main-nav__list\" role=\"menu\" :class=\"{'main-nav__list-visible': mainNavOpen && showCompactMenu}\">\n        <main-nav-item v-if=\"items\" ref=\"navItem\"\n            v-for=\"(item, index) in items\" :key=\"index\"\n            :is-compact=\"showCompactMenu\"\n            :main-nav-open=\"mainNavOpen\"\n            :active=\"false\"\n            :itemId=\"'nav-' + index\"\n            v-bind=\"item\">\n        </main-nav-item>\n    </ul>\n</nav>\n";

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mainNavItem = __webpack_require__(207);

var _mainNavItem2 = _interopRequireDefault(_mainNavItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _mainNavItem2.default;

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(1);

var _browserCapabilities = __webpack_require__(3);

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

var MainNavItem = function (_Vue) {
    _inherits(MainNavItem, _Vue);

    function MainNavItem() {
        _classCallCheck(this, MainNavItem);

        var _this = _possibleConstructorReturn(this, (MainNavItem.__proto__ || Object.getPrototypeOf(MainNavItem)).apply(this, arguments));

        _this.flyoutIsOpen = false;
        _this.hideTimeout = null;
        _this.angleDirection = 'angle-down';
        _this.isTouch = _browserCapabilities2.default.supportsTouch;
        return _this;
    }

    _createClass(MainNavItem, [{
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
            return !!this.items && !this.isCompact && this.isTouch;
        }
    }]);

    return MainNavItem;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Boolean, required: false }), __metadata("design:type", Boolean)], MainNavItem.prototype, "mainNavOpen", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", String)], MainNavItem.prototype, "label", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: false }), __metadata("design:type", String)], MainNavItem.prototype, "url", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Array, required: false }), __metadata("design:type", Array)], MainNavItem.prototype, "items", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", String)], MainNavItem.prototype, "itemId", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Boolean, required: false }), __metadata("design:type", Boolean)], MainNavItem.prototype, "isCompact", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Boolean, required: true }), __metadata("design:type", Boolean)], MainNavItem.prototype, "active", void 0);
__decorate([(0, _vuePropertyDecorator.Watch)('flyoutIsOpen'), __metadata("design:type", Function), __metadata("design:paramtypes", [Object]), __metadata("design:returntype", Promise)], MainNavItem.prototype, "function", null);
MainNavItem = __decorate([(0, _vuePropertyDecorator.Component)({
    name: 'main-nav-item',
    template: __webpack_require__(208)
})], MainNavItem);
exports.default = MainNavItem;

/***/ }),
/* 208 */
/***/ (function(module, exports) {

module.exports = "<li class=\"main-nav__item\" role=\"menuitem\" :class=\"{ 'main-nav__item--active': active }\"\n    @mouseleave=\"delayHideFlyout\" @mouseenter=\"showFlyout\">\n\n    <div @keydown.down.prevent=\"selectFlyoutFirstLink\"\n         @keydown.tab.shift.exact=\"hideFlyout\"\n         @keydown.esc.prevent=\"hideFlyout\">\n        <base-link :url=\"url\"\n                     ref=\"parent\"\n                     class=\"main-nav__link\"\n                     @focus=\"showFlyout\"\n                     @click.native=\"hideFlyout\"\n                     aria-haspopup=\"true\"\n                     :aria-controls=\"itemId\"\n                     :aria-current=\"isActive\"\n                     :label=\"label\"\n                     :aria-expanded=\"!isCompact && flyoutIsOpen\">\n        </base-link>\n    </div>\n\n    <icon-button class=\"icon-button--small main-nav__toggle disable-focus\"\n                 :icon-name=\"angleDirection\"\n                 v-show=\"toggleIsVisible\"\n                 @click=\"toggleFlyout\" tabindex=\"-1\">\n    </icon-button>\n\n    <flyout :id=\"itemId\" v-if=\"items\" ref=\"flyout\"\n        @keydown.esc.native=\"selectParent\"\n        @open=\"showFlyout\"\n        @close=\"hideFlyout\"\n        @main=\"selectParent\"\n        class=\"flyout--large\"\n        :items=\"items\"\n        :is-compact=\"isCompact\"\n        :class=\"{ 'flyout--is-open': flyoutIsOpen }\">\n    </flyout>\n</li>\n";

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _materialCard = __webpack_require__(210);

var _materialCard2 = _interopRequireDefault(_materialCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _materialCard2.default;

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(1);

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

var MaterialCard = function (_Vue) {
    _inherits(MaterialCard, _Vue);

    function MaterialCard() {
        _classCallCheck(this, MaterialCard);

        return _possibleConstructorReturn(this, (MaterialCard.__proto__ || Object.getPrototypeOf(MaterialCard)).apply(this, arguments));
    }

    return MaterialCard;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object, required: true }), __metadata("design:type", Object)], MaterialCard.prototype, "card", void 0);
MaterialCard = __decorate([(0, _vuePropertyDecorator.Component)({
    name: 'material-card',
    template: __webpack_require__(211)
})], MaterialCard);
exports.default = MaterialCard;

/***/ }),
/* 211 */
/***/ (function(module, exports) {

module.exports = " <content-link :url=\"card.slug\"\n               class=\"materials-card\"\n               tabindex=\"0\"\n               mod=\"reversed\"\n               role=\"link\"\n               aria-describedby=\"material\">\n        <article class=\"materials-card__article\">\n            <div class=\"materials-card__visual\">\n                <template v-if=\"card.image\">\n                  <div class=\"materials-card__image\">\n                    <responsive-picture v-if=\"card.image && card.image.mobileWidth\" class=\"img--responsive\" v-bind=\"card.image\"></responsive-picture>\n                    <cms-image v-else class=\"img--responsive\" :image=\"card.image[0]\" :orientation=\"'square'\"></cms-image>\n                  </div>\n                </template>\n            </div>\n            <div class=\"materials-card__content\">\n                <h3 class=\"materials-card__headline\">{{ card.title }}</h3>\n                <tag-list class=\"materials-card__taglist\" v-if=\"card.tags\" :tags=\"card.tags\" />\n            </div>\n        </article>\n</content-link>\n\n";

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _modal = __webpack_require__(213);

var _modal2 = _interopRequireDefault(_modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _modal2.default;

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _gsap = __webpack_require__(4);

exports.default = {
    name: 'modal',
    template: __webpack_require__(214),
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
            _gsap.TweenLite.to(this.$refs.modal, 0.1, { opacity: 1, ease: _gsap.Power2.easeOut });
            _gsap.TweenLite.to(this.$refs.modal, 0.3, { scale: 1, ease: _gsap.Power2.easeOut });
        },
        enter: function enter(_el, done) {
            var _this = this;

            var iframe = this.$refs.modal.querySelector('iframe'),
                timeLine = new _gsap.TimelineLite();

            _gsap.TweenLite.set(this.$refs.modal, { opacity: 0, scale: 0.6 });
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
                timeLine.to(this.$refs.modal, 0.1, { opacity: 1, ease: _gsap.Power2.easeOut }, 0.2);
                timeLine.to(this.$refs.modal, 0.3, { scale: 1, ease: _gsap.Power2.easeOut }, 0.2);
            }

            timeLine.call(done);
        },
        leave: function leave(_el, done) {
            var timeLine = new _gsap.TimelineLite();

            timeLine.to(this.$refs.modal, 0.2, { opacity: 0, scale: 0.6, ease: _gsap.Power2.easeIn });
            timeLine.fromTo([this.$refs.overlay, this.$refs.close], 0.4, { opacity: 1 }, { opacity: 0 }, 0);
            timeLine.call(done);
        }
    }
};

/***/ }),
/* 214 */
/***/ (function(module, exports) {

module.exports = "<transition name=\"modal\" @enter=\"enter\" @leave=\"leave\">\n    <div class=\"modal\" @click=\"closeModal\">\n        <div ref=\"overlay\" class=\"modal__overlay\"></div>\n        <icon-button ref=\"close\" icon-name=\"close\" class=\"modal__close\"/>\n        <div ref=\"modal\" class=\"modal__content\" @click.stop>\n            <div class=\"modal__header\">\n                <slot name=\"header\" />\n            </div>\n            <slot />\n        </div>\n    </div>\n</transition>\n";

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pager = __webpack_require__(216);

var _pager2 = _interopRequireDefault(_pager);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _pager2.default;

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _gsap = __webpack_require__(4);

var _viewport = __webpack_require__(2);

var _viewport2 = _interopRequireDefault(_viewport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'pager',
    template: __webpack_require__(217),
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
            var tl = new _gsap.TimelineLite(),
                offsets = this.getChangeOffset();

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
/* 217 */
/***/ (function(module, exports) {

module.exports = "<nav class=\"pager\" aria-label=\"pagination\">\n    <ul class=\"pager__list\">\n        <li ref=\"indicator\" class=\"pager__active-page\" aria-hidden=\"true\">\n            <icon class=\"pager__active-page-indicator\" icon-name=\"hexagon-fill\"></icon>\n        </li>\n        <li ref=\"page\" v-for=\"(page, index) in pages\" \n            class=\"pager__page\" >\n            <a class=\"pager__page-indicator\" @click=\"changeIndex(index)\"\n                aria-role=\"button\" \n                :aria-label=\"getAriaLabel(index)\" \n                :aria-current='index === activeIndex'>\n                <icon icon-name=\"hexagon\"></icon>\n            </a>\n        </li>\n    </ul>\n</nav>\n";

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _searchBar = __webpack_require__(219);

var _searchBar2 = _interopRequireDefault(_searchBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _searchBar2.default;

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(1);

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
        key: "doSearch",
        value: function doSearch() {
            if (this.searchValue !== '') {
                window.location = "/search?search=" + encodeURIComponent(this.searchValue);
                this.close();
            }
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
            this.$refs.search__input.focus();
        }
    }]);

    return SearchBar;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], SearchBar.prototype, "label", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], SearchBar.prototype, "placeholder", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Boolean, required: false, default: false }), __metadata("design:type", Boolean)], SearchBar.prototype, "openState", void 0);
SearchBar = __decorate([(0, _vuePropertyDecorator.Component)({
    name: 'search-bar',
    template: __webpack_require__(220)
})], SearchBar);
exports.default = SearchBar;

/***/ }),
/* 220 */
/***/ (function(module, exports) {

module.exports = "<form action=\"\" id=\"search\" class=\"search\" @submit.prevent=\"doSearch\">\n    <div role=\"search\">\n        <div class=\"search__inputholder\">\n            <label for=\"search__input\" class=\"search__label\">{{label}}</label>\n            <input id=\"search__input\" type=\"text\" name=\"search\" :placeholder=\"placeholder\" class=\"search__input\"\n                   @blur=\"onBlur\" @keyup.esc=\"close\"\n                   v-model=\"searchValue\"\n                   ref=\"search__input\">\n        </div>\n        <icon-button button-class=\"icon-button icon-button--large search__button\" button-aria-label=\"Search\"\n                     icon-name=\"search\" @click=\"doSearch\"></icon-button>\n        <icon-button button-class=\"icon-button icon-button--large search__close-button\" button-aria-label=\"Close search\"\n                     icon-name=\"close\" @click=\"close\"></icon-button>\n    </div>\n</form>\n";

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _socialNav = __webpack_require__(222);

var _socialNav2 = _interopRequireDefault(_socialNav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _socialNav2.default;

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(1);

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
SocialNav = __decorate([(0, _vuePropertyDecorator.Component)({
    name: 'social-nav',
    template: __webpack_require__(223)
})], SocialNav);
exports.default = SocialNav;

/***/ }),
/* 223 */
/***/ (function(module, exports) {

module.exports = "<nav class=\"social-nav footer__social-nav\">\n    <ul class=\"social-nav__list\" aria-label=\"follow Ultimaker\">\n        <li class=\"social-nav__item footer__social-item\">\n            <a class=\"social-nav__link icon-button icon-button--small\"\n               href=\"https://nl.linkedin.com/company/ultimaker\" aria-label=\"LinkedIn\">\n                <icon class=\"social-nav__icon\" icon-name=\"linkedin\"></icon>\n            </a>\n        </li>\n        <li class=\"social-nav__item footer__social-item\">\n            <a class=\"social-nav__link icon-button icon-button--small\"\n               href=\"https://twitter.com/Ultimaker\" aria-label=\"Twitter\">\n                <icon class=\"social-nav__icon\" icon-name=\"twitter\"></icon>\n            </a>\n        </li>\n        <li class=\"social-nav__item footer__social-item\">\n            <a class=\"social-nav__link icon-button icon-button--small\"\n               href=\"https://www.youtube.com/user/Ultimaker3D\" aria-label=\"YouTube\">\n                <icon class=\"social-nav__icon\" icon-name=\"youtube\"></icon>\n            </a>\n        </li>\n        <li class=\"social-nav__item footer__social-item\">\n            <a class=\"social-nav__link icon-button icon-button--small\"\n               href=\"https://www.facebook.com/Ultimaker\" aria-label=\"Facebook\">\n                <icon class=\"social-nav__icon\" icon-name=\"facebook\"></icon>\n            </a>\n        </li>\n        <li class=\"social-nav__item footer__social-item\">\n            <a class=\"social-nav__link icon-button icon-button--small\"\n               href=\"http://instagram.com/ultimaker\" aria-label=\"Instagram\">\n                <icon class=\"social-nav__icon\" icon-name=\"instagram\"></icon>\n            </a>\n        </li>\n    </ul>\n</nav>\n";

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _subnavigationItem = __webpack_require__(225);

var _subnavigationItem2 = _interopRequireDefault(_subnavigationItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _subnavigationItem2.default;

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(1);

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
SubNavigationItem = __decorate([(0, _vuePropertyDecorator.Component)({
    name: 'SubNavigationItem',
    template: __webpack_require__(226)
})], SubNavigationItem);
exports.default = SubNavigationItem;

/***/ }),
/* 226 */
/***/ (function(module, exports) {

module.exports = "<base-link :url=\"url\" class=\"overflow-container__link link link--reversed\">\n    <div class=\"overflow-container__image-container\">\n        <c-image v-if=\"image\" v-bind=\"image\" keep-in-view></c-image>\n    </div>\n    <a class=\"overflow-container__label\" :aria-label=\"label\" >\n        <span class=\"link__underline\">\n            {{label}}\n        </span>\n    </a>\n</base-link>\n";

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sysNav = __webpack_require__(228);

var _sysNav2 = _interopRequireDefault(_sysNav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _sysNav2.default;

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(1);

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
SysNav = __decorate([(0, _vuePropertyDecorator.Component)({
    name: 'sys-nav',
    template: __webpack_require__(229)
})], SysNav);
exports.default = SysNav;

/***/ }),
/* 229 */
/***/ (function(module, exports) {

module.exports = "<nav class=\"sys-nav\" aria-label=\"quick access\">\n    <ul class=\"sys-nav__list\" role=\"presentation\">\n        <li class=\"sys-nav__item\">\n            <base-link v-if=\"orderNowLink\" :url=\"orderNowLink\" class=\"sys-nav__link\">\n                <icon class=\"sys-nav__icon\" :icon-name=\"orderNowIcon\"></icon>\n                <span class=\"sys-nav__label sys-nav__label--hidden-sm\">{{ orderNowLabel }}</span>\n            </base-link>\n        </li>\n        <li class=\"sys-nav__item\">\n            <a class=\"sys-nav__link\"\n               @click=\"openSearch\"\n               @keyup.enter=\"openSearch\"\n               role=\"button\" tabindex=\"0\">\n                <icon class=\"sys-nav__icon\" :icon-name=\"searchIcon\"></icon>\n                <span class=\"sys-nav__label sys-nav__label--hidden-sm\">{{ searchLabel }}</span>\n            </a>\n        </li>\n    </ul>\n</nav>\n";

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tab = __webpack_require__(231);

var _tab2 = _interopRequireDefault(_tab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _tab2.default;

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(1);

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

        var _this = _possibleConstructorReturn(this, (Tab.__proto__ || Object.getPrototypeOf(Tab)).apply(this, arguments));

        _this.visible = true;
        return _this;
    }

    _createClass(Tab, [{
        key: "setVisible",
        value: function setVisible(val) {
            this.visible = val;
        }
    }]);

    return Tab;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", String)], Tab.prototype, "id", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", String)], Tab.prototype, "title", void 0);
Tab = __decorate([(0, _vuePropertyDecorator.Component)({
    name: 'tab',
    template: __webpack_require__(232)
})], Tab);
exports.default = Tab;

/***/ }),
/* 232 */
/***/ (function(module, exports) {

module.exports = "<div :id=\"id\" class=\"tabs__content\" v-show=\"visible\" role=\"tabpanel\" :aria-hidden=\"!visible\" :aria-label=\"title\">\n    <slot></slot>\n</div>\n";

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tabs = __webpack_require__(234);

var _tabs2 = _interopRequireDefault(_tabs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _tabs2.default;

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(1);

var _viewport = __webpack_require__(2);

var _viewport2 = _interopRequireDefault(_viewport);

var _gsap = __webpack_require__(4);

var _defaults = __webpack_require__(5);

var _defaults2 = _interopRequireDefault(_defaults);

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

var Tabs = function (_Vue) {
    _inherits(Tabs, _Vue);

    function Tabs() {
        _classCallCheck(this, Tabs);

        var _this = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).apply(this, arguments));

        _this.tabs = [];
        _this.activeTab = 0;
        _this.viewportUtil = new _viewport2.default();
        return _this;
    }

    _createClass(Tabs, [{
        key: "setActiveTab",
        value: function setActiveTab() {
            var _this2 = this;

            this.tabs.forEach(function (tab, index) {
                tab.setVisible(_this2.activeTab === index);
            });
            this.positionIndicator();
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
        value: function positionIndicator() {
            var tabs = this.$refs.tab;
            if (!tabs) {
                return;
            }
            var _tabs$activeTab = tabs[this.activeTab],
                offsetLeft = _tabs$activeTab.offsetLeft,
                offsetWidth = _tabs$activeTab.offsetWidth;

            _gsap.TweenLite.to(this.$refs.indicator, _defaults2.default.defaultDuration, {
                x: offsetLeft,
                width: offsetWidth,
                ease: _gsap.Power3.easeOut
            });
        }
    }, {
        key: "populateTabs",
        value: function populateTabs() {
            this.tabs = this.$children.reduce(function (acc, child) {
                if (child && child.$options && child.$options.propsData) {
                    acc.push(child);
                }
                return acc;
            }, []);
        }
    }, {
        key: "mounted",
        value: function mounted() {
            this.populateTabs();
            this.activeTab = this.defaultTab;
            this.setActiveTab();
            this.viewportUtil.addResizeHandler(this.positionIndicator);
        }
    }, {
        key: "beforeDestroy",
        value: function beforeDestroy() {
            this.viewportUtil.removeResizeHandler(this.positionIndicator);
        }
    }]);

    return Tabs;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Number, default: 0 }), __metadata("design:type", Number)], Tabs.prototype, "defaultTab", void 0);
__decorate([(0, _vuePropertyDecorator.Watch)('activeTab'), __metadata("design:type", Function), __metadata("design:paramtypes", []), __metadata("design:returntype", void 0)], Tabs.prototype, "setActiveTab", null);
Tabs = __decorate([(0, _vuePropertyDecorator.Component)({
    name: 'tabs',
    template: __webpack_require__(235)
})], Tabs);
exports.default = Tabs;

/***/ }),
/* 235 */
/***/ (function(module, exports) {

module.exports = "<div class=\"tabs\">\n    <div class=\"tabs__nav\">\n        <faux-scroll>\n            <ul class=\"tabs__list\" role=\"tablist\">\n                <li class=\"tabs__list_item\" v-for=\"(tab, index) in tabs\" role=\"presentation\" ref=\"tab\">\n                    <a class=\"tabs__list_link\" :class=\"getLinkClassList(index)\" @click.prevent=\"activeTab = index\" :href=\"'#' + tab.id\"\n                       role=\"tab\" :aria-controls=\"tab.id\" :aria-selected=\"activeTab === index\">\n                        {{ tab.title }}\n                    </a>\n                </li>\n                <li class=\"tabs__indicator\" aria-hidden=\"true\" role=\"none\" ref=\"indicator\"></li>\n            </ul>\n        </faux-scroll>\n    </div>\n\n    <div class=\"tabs__contents\">\n        <slot></slot>\n    </div>\n</div>\n";

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tag = __webpack_require__(237);

var _tag2 = _interopRequireDefault(_tag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _tag2.default;

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(1);

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
Tag = __decorate([(0, _vuePropertyDecorator.Component)({
    name: 'tag',
    template: __webpack_require__(238)
})], Tag);
exports.default = Tag;

/***/ }),
/* 238 */
/***/ (function(module, exports) {

module.exports = "<label class=\"tag\">{{tag.title}}</label>\n";

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tagList = __webpack_require__(240);

var _tagList2 = _interopRequireDefault(_tagList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _tagList2.default;

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(1);

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
TagList = __decorate([(0, _vuePropertyDecorator.Component)({
    name: 'tag-list',
    template: __webpack_require__(241)
})], TagList);
exports.default = TagList;

/***/ }),
/* 241 */
/***/ (function(module, exports) {

module.exports = "<ul class=\"tag-list__list list\">\n    <li class=\"tag-list__item list_item\" v-for=\"tag in tags\">\n        <tag :tag=\"tag\" />\n    </li>\n</ul>\n";

/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _listSection = __webpack_require__(243);

var _listSection2 = _interopRequireDefault(_listSection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _listSection2.default;

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(1);

var _gsap = __webpack_require__(4);

var _defaults = __webpack_require__(5);

var _defaults2 = _interopRequireDefault(_defaults);

var _viewport = __webpack_require__(2);

var _viewport2 = _interopRequireDefault(_viewport);

var _browserCapabilities = __webpack_require__(3);

var _browserCapabilities2 = _interopRequireDefault(_browserCapabilities);

var _events = __webpack_require__(8);

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

var ListSection = function (_Vue) {
    _inherits(ListSection, _Vue);

    function ListSection() {
        _classCallCheck(this, ListSection);

        var _this = _possibleConstructorReturn(this, (ListSection.__proto__ || Object.getPrototypeOf(ListSection)).apply(this, arguments));

        _this.cardTransitionDuration = _defaults2.default.defaultDuration;
        _this.cardOffset = _defaults2.default.buildingUnit * 5;
        _this.showHiddenItems = false;
        _this.visibleTooltip = false;
        _this.showMax = Number.MAX_SAFE_INTEGER;
        _this.lastTopValue = 0;
        _this.delayIncrement = 0.1;
        _this.rowIndex = 0;
        _this.increment = 1;
        _this.viewportUtil = new _viewport2.default();
        return _this;
    }

    _createClass(ListSection, [{
        key: "tooltipVisible",
        value: function tooltipVisible() {
            return this.visibleTooltip;
        }
    }, {
        key: "hideTooltip",
        value: function hideTooltip() {
            this.visibleTooltip = false;
        }
    }, {
        key: "toggleTooltip",
        value: function toggleTooltip() {
            this.visibleTooltip = !this.visibleTooltip;
        }
    }, {
        key: "showCount",
        value: function showCount() {
            if (!this.showHiddenItems) {
                return (this.expand && this.expand.label ? this.expand.label : '') + " (" + this.cards.length + ")";
            }
            return this.expand && this.expand.label || '';
        }
    }, {
        key: "triggerEventClick",
        value: function triggerEventClick() {
            if (this.expand && this.expand.clickEvent) {
                this.$emitPublic(this.clickEventType, this.clickEventData);
            }
        }
    }, {
        key: "showHidden",
        value: function showHidden() {
            this.triggerEventClick();
            this.showHiddenItems = true;
        }
    }, {
        key: "isNewRow",
        value: function isNewRow(topValue) {
            return this.lastTopValue !== topValue;
        }
    }, {
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
        key: "handleResize",
        value: function handleResize() {
            if (!this.showHiddenItems && this.viewportUtil.isMobile) {
                this.showMax = this.limit && typeof this.limit.smallScreen === 'number' ? this.limit.smallScreen : Number.MAX_SAFE_INTEGER;
            } else {
                this.showMax = this.limit && typeof this.limit.largeScreen === 'number' ? this.limit.largeScreen : Number.MAX_SAFE_INTEGER;
            }
        }
    }, {
        key: "mounted",
        value: function mounted() {
            var _this2 = this;

            if (!_browserCapabilities2.default.isBrowser) {
                return;
            }
            this.viewportUtil.addResizeHandler(this.handleResize);
            this.handleResize();
            this.viewportUtil.triggerResize();
            setTimeout(function () {
                _this2.handleResize();
            }, 100);
        }
    }, {
        key: "beforeDestroy",
        value: function beforeDestroy() {
            this.viewportUtil.removeResizeHandler(this.handleResize);
        }
    }, {
        key: "clickEventType",
        get: function get() {
            return _events2.default.click;
        }
    }, {
        key: "clickEventData",
        get: function get() {
            if (this.expand && this.expand.clickEvent) {
                var clickEvent = this.expand.clickEvent;

                return {
                    dataType: clickEvent.name,
                    data: _extends({}, clickEvent.data, {
                        pageSlug: this.$route.fullPath
                    })
                };
            }
            return null;
        }
    }]);

    return ListSection;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: false }), __metadata("design:type", Object)], ListSection.prototype, "title", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Array, required: true }), __metadata("design:type", Object)], ListSection.prototype, "cards", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object, required: false }), __metadata("design:type", Object)], ListSection.prototype, "tooltip", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object, required: false }), __metadata("design:type", Object)], ListSection.prototype, "limit", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object, required: false }), __metadata("design:type", Object)], ListSection.prototype, "expand", void 0);
ListSection = __decorate([(0, _vuePropertyDecorator.Component)({
    name: 'ListSection',
    template: __webpack_require__(244)
})], ListSection);
exports.default = ListSection;

/***/ }),
/* 244 */
/***/ (function(module, exports) {

module.exports = "<section class=\"list-section\">\n    <header class=\"list-section__header\">\n        <h3 class=\"list-section__title\" v-if=\"title\">{{ title }}\n            <span class=\"list-section__count\">({{cards.length}})</span>\n            <template v-if=\"tooltip\">\n                <transition name=\"tooltip\">\n                    <tooltip class=\"section-tooltip\" block=\"list-section\" v-show=\"visibleTooltip\" v-bind=\"tooltip\" :id=\"`tooltip_${ uniqId }`\">\n                        {{ tooltip.description }}\n                    </tooltip>\n                </transition>\n            </template>\n        </h3>\n        <action-button\n            class=\"link list-section__info-link\"\n            :icon=\"tooltip.icon\"\n            mod=\"reversed\"\n            @click.native.prevent=\"toggleTooltip\"\n            @blur.native.prevent=\"hideTooltip\"\n            role=\"button\"\n            :aria-describedby=\"`tooltip_${ uniqId }`\"\n            v-if=\"tooltip\">\n            {{ tooltip.label }}\n        </action-button>\n    </header>\n    <ul class=\"list-section-list\" v-if=\"cards && cards.length > 0\" :aria-label=\"title\">\n        <div class=\"flexgrid flexgrid--justify-space-between flexgrid--mobile-xl-row\">\n            <div class=\"flexgrid__cell--md-4 flexgrid__cell--xs-6\"\n                 v-for=\"(card, index) in cards\"\n                 :key=\"index\"\n                 v-if=\"index < showMax\">\n                <li ref=\"visible\" class=\"list-section-list__item\">\n                    <component :is=\"card.type\"\n                               v-bind=\"card\">\n                    </component>\n                </li>\n            </div>\n            <template v-if=\"cards.length > showMax && showMax && !showHiddenItems\">\n                <div class=\"flexgrid__cell flexgrid__cell--list-section__button--center\">\n                    <button class=\"button--secondary list-section-list__button\"\n                            @click=\"showHidden\">{{ showCount() }}\n                    </button>\n                </div>\n            </template>\n        </div>\n        <transition-group @before-enter=\"beforeEnter\"\n                          @enter=\"enter\"\n                          tag=\"div\"\n                          :css=\"false\"\n                          class=\"flexgrid flexgrid--justify-space-between flexgrid--mobile-xl-row list-section--hidden\">\n            <div class=\"flexgrid__cell--md-4 flexgrid__cell--xs-6\"\n                 v-for=\"(card, index) in cards\"\n                 v-if=\" index >= showMax\"\n                 v-show=\"showHiddenItems\"\n                 :key=\"card.title + index\"\n                 :data-index=\"index\">\n                <li class=\"list-section-list__item\">\n                    <component :is=\"card.type\"\n                               v-bind=\"card\">\n                    </component>\n\n                </li>\n            </div>\n        </transition-group>\n    </ul>\n</section>\n";

/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _businessCard = __webpack_require__(246);

var _businessCard2 = _interopRequireDefault(_businessCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _businessCard2.default;

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(1);

var _events = __webpack_require__(8);

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

var BusinessCard = function (_Vue) {
    _inherits(BusinessCard, _Vue);

    function BusinessCard() {
        _classCallCheck(this, BusinessCard);

        return _possibleConstructorReturn(this, (BusinessCard.__proto__ || Object.getPrototypeOf(BusinessCard)).apply(this, arguments));
    }

    _createClass(BusinessCard, [{
        key: "mapImage",
        value: function mapImage(image) {
            var img = {
                mobileWidth: image.mobileUrl,
                desktopWidth: image.desktopUrl
            };
            return img;
        }
    }, {
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
BusinessCard = __decorate([(0, _vuePropertyDecorator.Component)({
    name: 'BusinessCard',
    template: __webpack_require__(247)
})], BusinessCard);
exports.default = BusinessCard;

/***/ }),
/* 247 */
/***/ (function(module, exports) {

module.exports = "<a class=\"business-card\"\n   :href=\"contentLink.url\"\n   rel=\"noopener\"\n   target=\"_blank\"\n   tabindex=\"0\"\n   @click=\"clickEvent ? $emitPublic(clickEventType, clickEventData) : ''\"\n>\n    <div class=\"business-card__header\">\n        <div class=\"business-card__image-wrapper\">\n            <responsive-picture v-bind=\"mapImage(image)\" v-if=\"image\" />\n        </div>\n        <div class=\"business-card__description\">\n            <h4 class=\"business-card__title\">\n                {{ title }}\n            </h4>\n\n            <p class=\"business-card__property\" v-if=\"properties\" v-for=\"(property) in properties\">\n                {{ property.value }} {{ property.label }}\n            </p>\n        </div>\n    </div>\n    <div class=\"business-card__footer\">\n        <span class=\"link faux-content-link business-card__link\">\n            <span class=\"link__underline\">\n                {{ contentLink.label }}\n            </span>\n        </span>\n    </div>\n</a>\n";

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _countrySelector = __webpack_require__(249);

Object.defineProperty(exports, 'CountrySelector', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_countrySelector).default;
  }
});

var _localeSelector = __webpack_require__(252);

Object.defineProperty(exports, 'LocaleSelector', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_localeSelector).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _countrySelector = __webpack_require__(250);

var _countrySelector2 = _interopRequireDefault(_countrySelector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _countrySelector2.default;

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(1);

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
CountrySelector = __decorate([(0, _vuePropertyDecorator.Component)({
    name: 'country-selector',
    template: __webpack_require__(251)
})], CountrySelector);
exports.default = CountrySelector;

/***/ }),
/* 251 */
/***/ (function(module, exports) {

module.exports = "<div class=\"country-selector\">\n    <auto-complete class=\"country-selector__auto-complete auto-complete--small\" ref=\"autocomplete\"\n        :placeholder=\"placeholder\"\n        title-field=\"name\" value-field=\"code\"\n        v-model=\"countryInput\"\n        @input=\"countryChanged\"\n        @close=\"close\"\n        @changeFocus=\"focusClose\"\n        :datasource=\"datasource\"\n        :storedLabel=\"highlightedLabel\"\n        :stored-items=\"detectedCountries\"\n        :suggestionsLabel=\"suggestionsLabel\"\n        default-open>\n    </auto-complete>\n    <icon-button icon-name=\"close\" button-aria-label=\"Cancel\" ref=\"closeCountryPanel\"\n        button-class=\"country-selector__icon-button icon-button settings-selector__edit-button icon-button--small icon-button--reversed\"\n        @click=\"close\">\n    </icon-button>\n</div>\n";

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _localeSelector = __webpack_require__(253);

var _localeSelector2 = _interopRequireDefault(_localeSelector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _localeSelector2.default;

/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(1);

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
            if (this.country && this.country.currency && this.country.currency.symbol) {
                return this.country.name + " - " + this.country.currency.symbol;
            }
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
LocaleSelector = __decorate([(0, _vuePropertyDecorator.Component)({
    name: 'locale-selector',
    template: __webpack_require__(254)
})], LocaleSelector);
exports.default = LocaleSelector;

/***/ }),
/* 254 */
/***/ (function(module, exports) {

module.exports = "<div class=\"locale-selector\">\n    <icon-button @click=\"toggleCountrySelector\" v-show=\"!countrySelectorOpen\"\n                 ref=\"countrySelectorToggle\"\n                 icon-name=\"geo\"\n                 class=\"icon-button--small locale-selector__edit--buton\"\n                 :aria-label=\"currentCountryAriaLabel\">\n        {{ currentCountryLabel }}\n    </icon-button>\n\n    <icon-button v-show=\"countrySelectorOpen\"\n                 icon-name=\"geo\"\n                 class=\"icon-button--small locale-selector__edit--buton\"\n                 aria-label=\"change your country\">\n    </icon-button>\n\n    <country-selector class=\"footer__country-selector\" ref=\"countrySelector\" v-if=\"ready\" v-show=\"countrySelectorOpen\"\n                      v-bind=\"$props\"\n                      @close=\"toggleCountrySelector\"\n                      @input=\"setCountry\"\n                      v-model=\"countryInput\">\n    </country-selector>\n</div>\n";

/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _brands = __webpack_require__(256);

Object.defineProperty(exports, 'Brands', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_brands).default;
  }
});

var _brandsLarge = __webpack_require__(259);

Object.defineProperty(exports, 'BrandsLarge', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_brandsLarge).default;
  }
});

var _cases = __webpack_require__(262);

Object.defineProperty(exports, 'Cases', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_cases).default;
  }
});

var _colors = __webpack_require__(265);

Object.defineProperty(exports, 'Colors', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_colors).default;
  }
});

var _ecosystem = __webpack_require__(268);

Object.defineProperty(exports, 'Ecosystem', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ecosystem).default;
  }
});

var _examples = __webpack_require__(271);

Object.defineProperty(exports, 'Examples', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_examples).default;
  }
});

var _explore = __webpack_require__(274);

Object.defineProperty(exports, 'Explore', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_explore).default;
  }
});

var _generalContent = __webpack_require__(278);

Object.defineProperty(exports, 'GeneralContent', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_generalContent).default;
  }
});

var _heroBasic = __webpack_require__(281);

Object.defineProperty(exports, 'HeroBasic', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_heroBasic).default;
  }
});

var _heroProduct = __webpack_require__(284);

Object.defineProperty(exports, 'HeroProduct', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_heroProduct).default;
  }
});

var _heroProductsApplication = __webpack_require__(287);

Object.defineProperty(exports, 'HeroProductsApplication', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_heroProductsApplication).default;
  }
});

var _heroText = __webpack_require__(290);

Object.defineProperty(exports, 'HeroText', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_heroText).default;
  }
});

var _heroVideo = __webpack_require__(293);

Object.defineProperty(exports, 'HeroVideo', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_heroVideo).default;
  }
});

var _sliderReveal = __webpack_require__(296);

Object.defineProperty(exports, 'SliderReveal', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_sliderReveal).default;
  }
});

var _subnavigation = __webpack_require__(299);

Object.defineProperty(exports, 'Subnavigation', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_subnavigation).default;
  }
});

var _ubr = __webpack_require__(304);

Object.defineProperty(exports, 'Ubr', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ubr).default;
  }
});

var _pageDrawer = __webpack_require__(307);

Object.defineProperty(exports, 'PageDrawer', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_pageDrawer).default;
  }
});

var _pageFooter = __webpack_require__(309);

Object.defineProperty(exports, 'PageFooter', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_pageFooter).default;
  }
});

var _pageHeader = __webpack_require__(312);

Object.defineProperty(exports, 'PageHeader', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_pageHeader).default;
  }
});

var _overview = __webpack_require__(315);

Object.defineProperty(exports, 'Overview', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_overview).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _brands = __webpack_require__(257);

var _brands2 = _interopRequireDefault(_brands);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _brands2.default;

/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: 'brands',
    template: __webpack_require__(258),
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
};

/***/ }),
/* 258 */
/***/ (function(module, exports) {

module.exports = "<article class=\"brands\">\n    <section class=\"container brands__container\">\n        <h2 class=\"brands__title\"> {{ title }}</h2>\n        <div class=\"flexgrid flexgrid--gutter brands__grid\">\n            <template v-for=\"brand in brands\">\n            <div class=\"flexgrid__cell--sm-4 brands__grid-cell\">\n                <brand-card v-bind=\"brand\"></brand-card>\n            </div>\n            </template>\n        </div>\n        <content-link v-if=\"contentLink\" :block=\"'brands'\" :mod=\"'large'\" :url=\"contentLink.href\">{{ contentLink.text }}</content-link>\n    </section>\n</article>\n";

/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _brandsLarge = __webpack_require__(260);

var _brandsLarge2 = _interopRequireDefault(_brandsLarge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _brandsLarge2.default;

/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: 'brands-large',
    template: __webpack_require__(261),
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
};

/***/ }),
/* 261 */
/***/ (function(module, exports) {

module.exports = "<article class=\"brands brands--large\">\n    <section class=\"container brands__container\">\n        <h2 class=\"brands__title\">{{ title }}</h2>\n        <p class=\"brands__body\" v-if=\"text\">{{ text }}</p>\n        <div class=\"flexgrid flexgrid--gutter brands__grid\">\n            <template v-for=\"brand in brands\">\n            <div class=\"flexgrid__cell--sm-4 brands__grid-cell\">\n                <brand-card v-bind=\"brand\"></brand-card>\n            </div>\n            </template>\n        </div>\n        <content-link v-if=\"contentLink\" :block=\"'brands'\" :mod=\"'large'\" :url=\"contentLink.href\">{{ contentLink.text }}</content-link>\n    </section>\n</article>\n";

/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _cases = __webpack_require__(263);

var _cases2 = _interopRequireDefault(_cases);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _cases2.default;

/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _viewport = __webpack_require__(2);

var _viewport2 = _interopRequireDefault(_viewport);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'cases',
    template: __webpack_require__(264),
    data: function data() {
        return {
            viewport: new _viewport2.default(),
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
};

/***/ }),
/* 264 */
/***/ (function(module, exports) {

module.exports = "<article class=\"case\">\n    <section class=\"container case__container\">\n        <figure class=\"case__media\" v-show=\"this.isMobileXl\">\n            <figcaption class=\"flex-grid flexgrid__cell--xs-6\">\n                <h2 class=\"case__title\">{{ title }}</h2>\n            </figcaption>\n\n            <div class=\"case__media-placeholder\">\n                <figcaption>\n                    <icon-button @click=\"toggleVideo\" class=\"case__link icon-button--underline-large\" :icon-name=\"buttonIcon\">{{ buttonLabel }}</icon-button>\n                </figcaption>\n                <div class=\"case__image-overlay\"></div>\n                <responsive-picture v-bind=\"image\" img-class=\"case__image--full\"></responsive-picture>\n            </div>\n\n            <figcaption class=\"flex-grid flexgrid__cell--xs-6\">\n                <p class=\"case__paragraph case__paragraph--last\">{{ description }}</p>\n            </figcaption>\n        </figure>\n\n        <figure class=\"case__media\" v-show=\"!this.isMobileXl\">\n            <div class=\"case__media-placeholder\">\n                <figcaption class=\"flex-grid flexgrid__cell--xs-6 case__flex-grid--center\">\n                    <h2 class=\"case__title\">{{ title }}</h2>\n                    <p class=\"case__paragraph\">{{ description }}</p>\n                    <icon-button @click=\"toggleVideo\" class=\"case__link icon-button--underline-large\" :icon-name=\"buttonIcon\">{{ buttonLabel }}</icon-button>\n                </figcaption>\n\n                <div class=\"case__image-overlay\"></div>\n                <responsive-picture v-bind=\"image\" img-class=\"case__image--full\"></responsive-picture>\n            </div>\n        </figure>\n    </section>\n    <modal class=\"modal--video\" v-if=\"showVideo\" @close=\"toggleVideo\">\n        <youtube-video :video-id=\"videoId\"></youtube-video>\n    </modal>\n</article>\n";

/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _colors = __webpack_require__(266);

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _colors2.default;

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: 'colors',
    template: __webpack_require__(267),
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
        },
        labels: {
            type: Object,
            required: false
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
        setSelected: function setSelected(color) {
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
};

/***/ }),
/* 267 */
/***/ (function(module, exports) {

module.exports = "<article class=\"colors\" v-if=\"shouldRender\">\n    <div class=\"container\">\n        <header>\n            <h2>{{ title }}</h2>\n        </header>\n        <div class=\"flexgrid flexgrid--gutter flexgrid--column-reversed flexgrid--mobile-xl-row\">\n\n            <div class=\"flexgrid__cell--xs-6 flexgrid__cell--sm-4\">\n                <div class=\"colors__swatches\">\n                    <ul class=\"list colors__list\" v-if=\"colors\">\n                        <li class=\"list__item colors__list-item\" :class=\"{'color--selected': color === activeColor }\"\n                            v-for=\"color in colors\">\n                            <hit-area @mouseover.native=\"checkTooltipPos\" @focus.native=\"checkTooltipPos\"\n                                      @click.native=\"setSelected(color)\" @keyup.enter.native=\"setSelected(color)\">\n                                <tooltip block=\"colors\">\n                                    <dl class=\"list tooltip__list\">\n                                        <dt class=\"list__item tooltip__list-item tooltip__label\">Material:</dt>\n                                        <dd class=\"list__item tooltip__list-item\">{{ color.title }}</dd>\n                                        <template v-if=\"!color.is_transparent\">\n                                            <dt class=\"list__item tooltip__list-item tooltip__label\">Color:</dt>\n                                            <dd class=\"list__item tooltip__list-item\">{{ color. system_code }}</dd>\n                                        </template>\n                                        <dt class=\"list__item tooltip__list-item tooltip__label\">Weight:</dt>\n                                        <dd class=\"list__item tooltip__list-item\"><span>{{material.weight.value}} {{material.weight.unit}}</span>\n                                        </dd>\n                                    </dl>\n                                </tooltip>\n                                <color v-if=\"color.is_transparent\"></color>\n                                <color :background=\"color.rgb_hex_code\" v-else></color>\n                            </hit-area>\n                        </li>\n                    </ul>\n                    <content-link mod=\"large\"><span >{{ labels.whereToBuy }}</span></content-link>\n                </div>\n            </div>\n            <div class=\"flexgrid__cell--sm-8 flexgrid__cell--xs-6\">\n                <div class=\"colors__image\" ref=\"image\" :class=\"imageClass\">\n                    <cms-image :image=\"image\" orientation=\"landscape\"></cms-image>\n                </div>\n            </div>\n        </div>\n    </div>\n</article>\n\n";

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ecosystem = __webpack_require__(269);

var _ecosystem2 = _interopRequireDefault(_ecosystem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ecosystem2.default;

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: 'ecosystem',
    template: __webpack_require__(270),
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
};

/***/ }),
/* 270 */
/***/ (function(module, exports) {

module.exports = "<article class=\"ecosystem\">\n    <section class=\"container\">\n      <h2 class=\"ecosystem__title\" v-if=\"title\">{{ title }}</h2>\n      <div class=\"ecosystem__items\">\n          <card v-for=\"(item, index) in items\" :key=\"index\" :card=\"item\" :block=\"'ecosystem'\"></card>\n      </div>\n    </section>\n</article>";

/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _examples = __webpack_require__(272);

var _examples2 = _interopRequireDefault(_examples);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _examples2.default;

/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: 'examples',
    template: __webpack_require__(273),
    data: function data() {
        return {
            enabled: false
        };
    },
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
    },
    mounted: function mounted() {
        this.enabled = true;
    }
};

/***/ }),
/* 273 */
/***/ (function(module, exports) {

module.exports = "<article class=\"examples\">\n    <div class=\"container\">\n        <header>\n            <h2 class=\"examples__headline\">{{ title }}</h2>\n        </header>\n\n        <div class=\"cards\">\n            <div class=\"flexgrid flexgrid--gutter\">\n                <div class=\"flexgrid__cell--sm-4 flexgrid__cell--xs-6\" v-for=\"(card, key) in cards\">\n                    <card :key=\"key\" :block=\"'examples'\" :card=\"card\" v-if=\"enabled\"></card>\n                </div>\n            </div>\n        </div>\n    </div>\n</article>\n";

/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _explore = __webpack_require__(275);

var _explore2 = _interopRequireDefault(_explore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _explore2.default;

/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _vuex = __webpack_require__(276);

var _gsap = __webpack_require__(4);

var defaultAnimationDuration = 1;

exports.default = {
    name: 'explore',
    template: __webpack_require__(277),
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
    computed: _extends({}, (0, _vuex.mapGetters)('page', ['page']), {
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
            _gsap.TweenLite.fromTo(image, defaultAnimationDuration, { opacity: 0 }, { opacity: 1, ease: _gsap.Power0.easeIn, onComplete: done });
        },
        imageLeave: function imageLeave(image, done) {
            _gsap.TweenLite.to(image, defaultAnimationDuration, { opacity: 0, ease: _gsap.Power0.easeOut, onComplete: done });
        }
    }
};

/***/ }),
/* 276 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__276__;

/***/ }),
/* 277 */
/***/ (function(module, exports) {

module.exports = "<article class=\"explore\">\n    <section class=\"container explore__container\">\n        <div class=\"flexgrid flexgrid--gutter\">\n            <div class=\"flexgrid__cell--xs-6\">\n                <h2 class=\"explore__title\">{{ title }}</h2>\n            </div>\n        </div>\n        <div class=\"explore__image-placeholder\">\n            <template v-for=\"(item, index) in items\">\n                <transition @enter=\"imageEnter\" @leave=\"imageLeave\">\n                    <picture ref=\"image\" v-show=\"index === activeSlide\">\n                        <source media=\"(min-width: 569px)\" :srcset=\"item.image.mobileXlWidth.url + ', ' + item.image.mobileXlWidth.retina.url + ' 2x'\">\n                        <img class=\"img--responsive explore__image img--contain\" :src=\"item.image.mobileWidth.url\" :alt=\"item.image.alt\">\n                    </picture>\n                </transition>\n            </template>\n            <pager name=\"explore-pager\" class=\"explore__pager\" :pages=\"items.length\"\n                   :active-index=\"activeSlide\" @index-changed=\"indexChanged\"></pager>\n        </div>\n        <div class=\"flexgrid flexgrid--gutter\">\n            <div class=\"flexgrid__cell--xs-6\">\n                <div class=\"explore__description\">\n                    <tabbable-definition-list\n                        :items=\"items\"\n                        :active-index=\"activeSlide\"\n                        @index-changed=\"indexChanged\"\n                    ></tabbable-definition-list>\n                </div>\n                <div class=\"explore__navigation\">\n                    <icon-button class=\"explore__nav\"\n                                 v-if=\"buttons && buttons.previous\"\n                                 :icon-name=\"buttons.previous.iconName\"\n                                 @click=\"navClicked('previous')\">\n                        <span class=\"icon-button__label\">{{ buttons.previous.label }}</span>\n                    </icon-button>\n                    <icon-button class=\"explore__nav icon-button--reversed\"\n                                 v-if=\"buttons && buttons.next\"\n                                 :icon-name=\"buttons.next.iconName\"\n                                 @click=\"navClicked('next')\">\n                        <span class=\"icon-button__label\">{{ buttons.next.label }}</span>\n                    </icon-button>\n                </div>\n            </div>\n        </div>\n    </section>\n</article>\n";

/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _generalContent = __webpack_require__(279);

var _generalContent2 = _interopRequireDefault(_generalContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _generalContent2.default;

/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: 'general-content',
    template: __webpack_require__(280),
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
};

/***/ }),
/* 280 */
/***/ (function(module, exports) {

module.exports = "<article class=\"general-content\">\n    <section class=\"container general-content__container\">\n        <div class=\"flexgrid flexgrid--gutter\" :class=\"{'flexgrid--row-reversed': reversed}\">\n            <div class=\"flexgrid__cell--xs-6 flexgrid__cell--md-4 general-content__grid-cell\">\n                <h2 class=\"general-content__title\"> {{ title }}</h2>\n                <p class=\"general-content__body\" v-for=\"p in text\">{{ p }}</p>\n                <content-link class=\"link\" v-if=\"contentLink\" :block=\"'general-content'\" :url=\"contentLink.href\" :label=\"contentLink.text\">\n                </content-link>\n            </div>\n            <div class=\"flexgrid__cell--xs-6 flexgrid__cell--md-8 general-content__grid-cell\">\n                <div class=\"general-content__image-wrapper\">\n                    <responsive-picture v-if=\"image\" v-bind=\"image\"></responsive-picture>\n                </div>\n            </div>\n        </div>\n    </section>\n</article>\n";

/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _heroBasic = __webpack_require__(282);

var _heroBasic2 = _interopRequireDefault(_heroBasic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _heroBasic2.default;

/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(1);

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
HeroBasic = __decorate([(0, _vuePropertyDecorator.Component)({
    name: 'hero-basic',
    template: __webpack_require__(283)
})], HeroBasic);
exports.default = HeroBasic;

/***/ }),
/* 283 */
/***/ (function(module, exports) {

module.exports = "<article class=\"hero hero--basic\">\n    <section class=\"container hero__container\">\n        <div class=\"flexgrid flexgrid--gutter flexgrid--column-reversed flexgrid--mobile-xl-row\">\n\n            <div class=\"flexgrid__cell--xs-6\">\n                <div class=\"hero__description\">\n                    <!--Intro-->\n                    <h1>{{ title }}</h1>\n                    <h2 class=\"hero__subtitle\" v-if=\"subtitle\">{{ subtitle }}</h2>\n                    <p class=\"copy--intro\">{{ description }}</p>\n                    <!--End intro-->\n\n                    <cta-block :ctas=\"ctas.ctas\" v-if=\"ctas\" styleContentButton=\"button button--primary\"\n                               block=\"hero\" />\n                </div>\n            </div>\n\n            <!--Image -->\n            <div class=\"flexgrid__cell--xs-6\">\n                <div class=\"hero__image--basic\">\n                    <template v-if=\"image\">\n                        <c-image v-bind=\"image\" keep-in-view></c-image>\n                    </template>\n                </div>\n            </div>\n            <!--End image-->\n        </div>\n    </section>\n</article>\n";

/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _heroProduct = __webpack_require__(285);

var _heroProduct2 = _interopRequireDefault(_heroProduct);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _heroProduct2.default;

/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: 'hero-product',
    template: __webpack_require__(286),
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
};

/***/ }),
/* 286 */
/***/ (function(module, exports) {

module.exports = "<article class=\"hero hero--products\">\n    <section class=\"container hero__container\">\n        <div class=\"flexgrid flexgrid--gutter flexgrid--column-reversed flexgrid--mobile-xl-row\">\n\n            <div class=\"flexgrid__cell--xs-6\">\n                <div class=\"hero__description\">\n                    <!--Intro-->\n                    <h1>{{ title }}</h1>\n                    <p class=\"copy--intro\">{{ description }}</p>\n                    <!--End intro-->\n\n                    <!--Price table-->\n                    <div class=\"price-table hero__price-table\">\n                        <ul class=\"price-table__list\" role=\"tablist\">\n                            <li class=\"price-table__item\" v-for=\"material in materials\" role=\"tab\">\n                                <icon icon-name=\"material\" class=\"price-table__icon\"></icon>\n                                <span class=\"price-table__info\">\n                                    <small class=\"price-table__tagline\">\n                                        {{ material['short_title'] }},\n                                        {{ material.weight.value }}{{ material.weight.unit }}\n                                        from\n                                    </small>\n                                    <currency :currency-type=\"material.price.currency\" :amount=\"material.price.value\" :decimals=\"0\"></currency>\n                                </span>\n                            </li>\n                        </ul>\n                        <small class=\"price-table__disclaimer\">{{ labels.excludingVat }}</small>\n                    </div>\n                    <!--End price table-->\n\n                    <!--Button-->\n                    <a href=\"\" class=\"button button--primary hero__button\" v-if=\"materials && materials.length\">{{ labels.buyCta }}</a>\n                    <!--End button-->\n\n                    <!--Link list icons-->\n                    <ul class=\"link-list link-list--icon hero__link-list\">\n                        <template v-if=\"documents\">\n                            <li class=\"link-list__item\" v-for=\"link in this.link\">\n                                <content-link :url=\"link.uri\" icon=\"info\">{{ link.title }}</content-link>\n                            </li>\n                        </template>\n                        <template v-if=\"this.documents\">\n                            <li class=\"link-list__item\" v-for=\"document in documents\" v-if=\"document.links\">\n                                <content-link :url=\"document.links.self.href\" icon=\"download\">{{ labels.download}} {{ document.title }}</content-link>\n                            </li>\n                        </template>\n                    </ul>\n                    <!--End link list-->\n                </div>\n            </div>\n\n            <!--Image -->\n            <div class=\"flexgrid__cell--xs-6\">\n                <div class=\"hero__image--product\">\n                    <template v-if=\"this.image && this.image.length\">\n                        <cms-image :image=\"image[0]\" :orientation=\"'square'\"></cms-image>\n                    </template>\n                </div>\n            </div>\n            <!--End image-->\n\n        </div>\n    </section>\n</article>\n";

/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _heroProductsApplication = __webpack_require__(288);

var _heroProductsApplication2 = _interopRequireDefault(_heroProductsApplication);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _heroProductsApplication2.default;

/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: 'hero-products-application',
    template: __webpack_require__(289),
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
};

/***/ }),
/* 289 */
/***/ (function(module, exports) {

module.exports = "<article class=\"hero hero--products-application\">\n    <div class=\"hero__container--top\">\n            <responsive-picture v-bind=\"heroImage\" imgClass=\"hero__image--full\"></responsive-picture>\n            <div class=\"hero__image-overlay\"></div>\n        <div class=\"container\">\n            <div class=\"flexgrid flexgrid--gutter\">\n                <div class=\"flexgrid__cell--xs-6\">\n                    <div class=\"hero__headline\">\n                        <h1>{{ title }}</h1>\n                    </div>\n                </div>\n\n                <div class=\"flexgrid__cell\" style=\"position:relative;\">\n                    <p class=\"hero__subtitle\">{{ subtitle }}</p>\n                    <responsive-picture v-bind=\"productImage\" imgClass=\"hero__image--product\"></responsive-picture>\n                </div>\n\n                <div class=\"flexgrid__cell--xs-6\">\n                    <div class=\"hero__usp-container\">\n                        <div class=\"hero__usp usp--icon\" v-for=\"icon in uspIcons\">\n                            <icon :icon-name=\"icon.iconName\" class=\"usp__icon\"></icon>\n                            <small class=\"usp__label\">{{ icon.text }}</small>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"container\">\n        <div class=\"flexgrid flexgrid--gutter\">\n            <div class=\"flexgrid__cell--xs-6\">\n                <div class=\"hero__description\">\n                    <p class=\"copy--intro\">{{ description }}</p>\n                    <!-- {{> molecules-price-table}} -->\n                    <!-- {{> molecules-price-table-tabs}} -->\n                    <!-- {{> atoms-anchor-button:button--primary|hero__button}} -->\n                    <p>TODO: Pricetable</p>\n                    <router-link :to=\"ctaLink.href\" class=\"button button--primary hero__button\">{{  ctaLink.text }}</router-link>\n                    <ul class=\"link-list link-list--icon hero__link-list\" v-if=\"links && links.length\">\n                        <li class=\"link-list__item\" v-for=\"link in links\">\n                            <content-link :url=\"link.href\" :icon=\"link.icon\">{{ link.text }}</content-link>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</article>\n";

/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _heroText = __webpack_require__(291);

var _heroText2 = _interopRequireDefault(_heroText);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _heroText2.default;

/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: 'hero-text',
    template: __webpack_require__(292),
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
};

/***/ }),
/* 292 */
/***/ (function(module, exports) {

module.exports = "<article class=\"hero hero--text\" v-if=\"this.contents && contents.length\" >\n    <div class=\"container\">\n        <h1 v-if=\"title && title.length\">{{ title }}</h1>\n        <div class=\"hero__content content--rich\" v-html=\"contents\" />\n    </div>\n</article>\n\n";

/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _heroVideo = __webpack_require__(294);

var _heroVideo2 = _interopRequireDefault(_heroVideo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _heroVideo2.default;

/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(1);

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

var HeroVideo = function (_Vue) {
    _inherits(HeroVideo, _Vue);

    function HeroVideo() {
        _classCallCheck(this, HeroVideo);

        var _this = _possibleConstructorReturn(this, (HeroVideo.__proto__ || Object.getPrototypeOf(HeroVideo)).apply(this, arguments));

        _this.showVideo = false;
        return _this;
    }

    _createClass(HeroVideo, [{
        key: "toggleVideo",
        value: function toggleVideo() {
            this.showVideo = !this.showVideo;
        }
    }]);

    return HeroVideo;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", String)], HeroVideo.prototype, "title", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, default: undefined }), __metadata("design:type", String)], HeroVideo.prototype, "description", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object, required: true }), __metadata("design:type", Object)], HeroVideo.prototype, "heroImage", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, default: undefined }), __metadata("design:type", String)], HeroVideo.prototype, "videoId", void 0);
HeroVideo = __decorate([(0, _vuePropertyDecorator.Component)({
    name: 'hero-video',
    template: __webpack_require__(295)
})], HeroVideo);
exports.default = HeroVideo;

/***/ }),
/* 295 */
/***/ (function(module, exports) {

module.exports = "<article class=\"hero hero--video\">\n    <responsive-picture v-bind=\"heroImage\" imgClass=\"hero-video__image--full\"></responsive-picture>\n    <div class=\"hero-video__image--overlay\"></div>\n    <section class=\"container\">\n        <div class=\"flexgrid__cell--xs-6 hero--video-reset\">\n            <h1 class=\"hero-video__headline\">{{ title }}</h1>\n            <p class=\"copy--intro\" v-if=\"description\">{{ description }}</p>\n            <button type=\"button\" v-if=\"videoId\" icon=\"play-video\" class=\"link--large\" @click=\"toggleVideo\" style=\"background-color: red\">Play Video</button>\n        </div>\n    </section>\n    <modal class=\"modal--video\" v-if=\"showVideo\" @close=\"toggleVideo\">\n        <youtube-video :video-id=\"videoId\"></youtube-video>\n    </modal>\n</article>\n";

/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sliderReveal = __webpack_require__(297);

var _sliderReveal2 = _interopRequireDefault(_sliderReveal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _sliderReveal2.default;

/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _viewport = __webpack_require__(2);

var _viewport2 = _interopRequireDefault(_viewport);

var _gsap = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    name: 'slider-reveal',
    template: __webpack_require__(298),
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
            viewportUtil: new _viewport2.default()
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

                this.timeLine = new _gsap.TimelineLite({ paused: true });
                this.timeLine.fromTo(this.$refs['image-mask'][1], 0.2, { height: 0 }, { height: this.itemHeight, ease: _gsap.Power2.easeInOut });
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

            _gsap.TweenLite.to(this.timeLine, 0.2, { progress: progress });
        },
        resizeHandler: function resizeHandler() {
            this.resize();
        },
        scrollHandler: function scrollHandler() {
            this.scroll();
        }
    }
};

/***/ }),
/* 298 */
/***/ (function(module, exports) {

module.exports = "<article class=\"slider-reveal\" v-bind:class=\"styleModifiers\">\n    <section class=\"container slider-reveal__container\">\n        <div class=\"flexgrid flexgrid--gutter\">\n            <div class=\"flexgrid__cell--xs-6 slider-reveal__grid-cell\">\n                <h2 class=\"slider-reveal__title\"> {{ title }}</h2>\n                <p v-if=\"!isMobile\" class=\"slider-reveal__body\" v-for=\"content in contents\">{{ content }}</p>\n                <content-link v-if=\"!isMobile && hasLink\" v-bind=\"link\" class=\"link--icon link--large\">{{ link.text }}</content-link>\n            </div>\n            <div class=\"flexgrid__cell--xs-6 slider-reveal__grid-cell\">\n                <div ref=\"image-wrapper\" class=\"slider-reveal__image-wrapper\">\n                    <div class=\"slider-reveal__image-aspect\">\n                        <div class=\"slider-reveal__mask\"\n                            ref=\"image-mask\"\n                            v-for=\"image in imageSlider.images\"\n                        >\n                            <responsive-picture v-bind=\"image\" img-class=\"slider-reveal__image\"></responsive-picture>\n                        </div>\n                    </div>\n                </div>\n                <p v-if=\"isMobile\" class=\"slider-reveal__body\" v-for=\"content in contents\">{{ content }}</p>\n                <content-link v-if=\"isMobile && hasLink\" v-bind=\"link\" class=\"link--icon link--large\">{{ link.text }}</content-link>\n            </div>\n        </div>\n    </section>\n</article>";

/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _subnavigation = __webpack_require__(300);

var _subnavigation2 = _interopRequireDefault(_subnavigation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _subnavigation2.default;

/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(1);

var _overflowContainer = __webpack_require__(301);

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
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _overflowContainer = __webpack_require__(302);

var _overflowContainer2 = _interopRequireDefault(_overflowContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _overflowContainer2.default;

/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(1);

var _browserCapabilities = __webpack_require__(3);

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

var OverflowContainer = function (_Vue) {
    _inherits(OverflowContainer, _Vue);

    function OverflowContainer() {
        _classCallCheck(this, OverflowContainer);

        var _this = _possibleConstructorReturn(this, (OverflowContainer.__proto__ || Object.getPrototypeOf(OverflowContainer)).apply(this, arguments));

        _this.activeSelector = '.active';
        return _this;
    }

    _createClass(OverflowContainer, [{
        key: "mounted",
        value: function mounted() {
            var subnav = this.$refs.subNav;
            if (subnav) {
                var activeItem = subnav.querySelector(this.activeSelector);
                if (activeItem) {
                    activeItem.scrollIntoView({ inline: 'center' });
                }
            }
        }
    }, {
        key: "isTouch",
        get: function get() {
            return _browserCapabilities2.default.supportsTouch;
        }
    }]);

    return OverflowContainer;
}(_vuePropertyDecorator.Vue);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Array, required: true }), __metadata("design:type", Array)], OverflowContainer.prototype, "items", void 0);
OverflowContainer = __decorate([(0, _vuePropertyDecorator.Component)({
    name: 'OverflowContainer',
    template: __webpack_require__(303)
})], OverflowContainer);
exports.default = OverflowContainer;

/***/ }),
/* 303 */
/***/ (function(module, exports) {

module.exports = "<nav aria-label=\"sub items\" class=\"overflow-container overflow-container--fixed\" ref=\"subNav\" v-if=\"items\">\n    <ul class=\"overflow-container__list\" :class=\"isTouch ? 'touch' : ''\" role=\"presentation\"  v-if=\"items\">\n        <li class=\"overflow-container__item\" v-for=\"(item, index) in items\" ref=\"listItems\" role=\"menuitem\">\n            <component :is=\"item.type\"\n                       :key=\"index\"\n                       v-bind=\"item\">\n            </component>\n        </li>\n    </ul>\n</nav>\n";

/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ubr = __webpack_require__(305);

var _ubr2 = _interopRequireDefault(_ubr);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _ubr2.default;

/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    name: 'ubr',
    template: __webpack_require__(306),
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
};

/***/ }),
/* 306 */
/***/ (function(module, exports) {

module.exports = "<article class=\"ubr\">\n    <section class=\"container\">\n        <h2>{{ title }}</h2>\n        <div class=\"flexgrid flexgrid--gutter flexgrid--column-reversed flexgrid--mobile-xl-row\">\n            <div class=\"flexgrid__cell--xs-6\">\n                <div class=\"ubr__description\">\n                    <p>{{ description }}</p>\n                    <ul class=\"list ubr__list\">\n                        <li class=\"list__item\" v-for=\"reason of reasons\">{{ reason }}</li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"flexgrid__cell--xs-6\">\n                <template v-if=\"image && image.length\">\n                    <div class=\"ubr__image \">\n                        <cms-image class=\"img--responsive\" :image=\"image[0]\" :orientation=\"'landscape'\"></cms-image>\n                    </div>\n                </template>\n            </div>\n        </div>\n    </section>\n</article>\n";

/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pageDrawer = __webpack_require__(308);

var _pageDrawer2 = _interopRequireDefault(_pageDrawer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _pageDrawer2.default;

/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(1);

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

var PageDrawer = function (_Vue) {
    _inherits(PageDrawer, _Vue);

    function PageDrawer() {
        _classCallCheck(this, PageDrawer);

        return _possibleConstructorReturn(this, (PageDrawer.__proto__ || Object.getPrototypeOf(PageDrawer)).apply(this, arguments));
    }

    return PageDrawer;
}(_vuePropertyDecorator.Vue);
PageDrawer = __decorate([(0, _vuePropertyDecorator.Component)({
    name: 'page-drawer',
    template: "<section class=\"drawer\" v-size-emitter=\"'drawer'\"><slot></slot></section>"
})], PageDrawer);
exports.default = PageDrawer;

/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pageFooter = __webpack_require__(310);

var _pageFooter2 = _interopRequireDefault(_pageFooter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _pageFooter2.default;

/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(1);

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
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object, required: true }), __metadata("design:type", Object)], PageFooter.prototype, "legalNavigation", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object, required: true }), __metadata("design:type", Object)], PageFooter.prototype, "country", void 0);
PageFooter = __decorate([(0, _vuePropertyDecorator.Component)({
    name: 'page-footer',
    template: __webpack_require__(311)
})], PageFooter);
exports.default = PageFooter;

/***/ }),
/* 311 */
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n    <div class=\"footer__container\">\n        <div class=\"footer__primary\">\n            <router-link to=\"/\" class=\"branded-logo footer__branded-logo\" aria-label=\"Ultimaker homepage\">\n                <icon class=\"branded-logo__robot\" icon-name=\"robot-ultimaker\"></icon>\n                <icon class=\"branded-logo__logo\" icon-name=\"logo-ultimaker\"></icon>\n            </router-link>\n\n            <footer-nav :navigation=\"navigation\"></footer-nav>\n        </div>\n\n        <div class=\"footer__secondary\">\n            <social-nav></social-nav>\n            <locale-selector class=\"footer__locale-selector\"\n                             v-bind=\"localeSelector\"\n                             :country=\"country\"\n                             v-on=\"$listeners\">\n            </locale-selector>\n        </div>\n\n        <div class=\"footer__tertiary\">\n            <legal-nav class=\"footer__legal\" :navigation=\"legalNavigation.navigation\" :label=\"legalNavigation.label\"></legal-nav>\n        </div>\n    </div>\n</footer>\n";

/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pageHeader = __webpack_require__(313);

var _pageHeader2 = _interopRequireDefault(_pageHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _pageHeader2.default;

/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(1);

var _viewport = __webpack_require__(2);

var _viewport2 = _interopRequireDefault(_viewport);

var _publicEventService = __webpack_require__(6);

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
PageHeader = __decorate([(0, _vuePropertyDecorator.Component)({
    name: 'page-header',
    template: __webpack_require__(314)
})], PageHeader);
exports.default = PageHeader;

/***/ }),
/* 314 */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\" :class=\"headerClasses\" role=\"banner\" v-size-emitter=\"'header'\">\n    <div class=\"header__top\" :class=\"{'header--mobile-inverted': mainNavOpen}\">\n        <router-link to=\"/\" class=\"home-link\" aria-label=\"Ultimaker homepage\">\n            <icon class=\"home-link__logo\" icon-name=\"logo-ultimaker\"></icon>\n        </router-link>\n\n        <main-nav v-if=\"navigation\" :items=\"navigation\" :main-nav-open=\"mainNavOpen\" v-on=\"$listeners\"></main-nav>\n\n        <sys-nav v-if=\"cta && search\" @open-search=\"openSearch\"\n                 :order-now-icon=\"cta.icon\" :order-now-label=\"cta.label\" :order-now-link=\"cta.url\"\n                 :search-icon=\"search.icon\" :search-label=\"search.label\">\n        </sys-nav>\n\n        <nav-assist class=\"main-nav__nav-assist\" :open-state=\"mainNavOpen\" @toggle=\"navAssistToggle\"></nav-assist>\n\n        <transition name=\"search\" @after-enter=\"handleFocus\" @leave=\"handleFocus\">\n            <search-bar class=\"header__search\"\n                        ref=\"search\"\n                        :label=\"search.label\"\n                        :placeholder=\"search.placeholder\"\n                        :open-state=\"searchOpen\"\n                        @close=\"closeSearch\"\n                        v-if=\"searchOpen\">\n            </search-bar>\n        </transition>\n    </div>\n</header>\n";

/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _overview = __webpack_require__(316);

var _overview2 = _interopRequireDefault(_overview);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _overview2.default;

/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _vuePropertyDecorator = __webpack_require__(1);

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
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: true }), __metadata("design:type", Object)], Overview.prototype, "title", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: String, required: false }), __metadata("design:type", Object)], Overview.prototype, "subtitle", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Array, required: true }), __metadata("design:type", Object)], Overview.prototype, "sections", void 0);
__decorate([(0, _vuePropertyDecorator.Prop)({ type: Object, required: false }), __metadata("design:type", Object)], Overview.prototype, "ctas", void 0);
Overview = __decorate([(0, _vuePropertyDecorator.Component)({
    name: 'overview',
    template: __webpack_require__(317)
})], Overview);
exports.default = Overview;

/***/ }),
/* 317 */
/***/ (function(module, exports) {

module.exports = "<article class=\"organism overview\">\n    <section class=\"container\">\n        <h2 class=\"overview__title\">{{ title }}</h2>\n        <p class=\"subtitle overview__subtitle\" v-if=\"subtitle\">{{ subtitle }}</p>\n\n        <template v-for=\"(section, index) in sections\">\n            <component :is=\"section.type\"\n                   v-bind=\"section\"\n                   :key=\"index\">\n            </component>\n        </template>\n\n        <cta-block :ctas=\"ctas.ctas\"\n                   styleContentButton=\"button\"\n                   v-if=\"ctas\"\n                   block=\"overview\" />\n    </section>\n</article>\n";

/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _sizeEmitter = __webpack_require__(319);

Object.defineProperty(exports, 'SizeEmitter', {
  enumerable: true,
  get: function get() {
    return _sizeEmitter.SizeEmitter;
  }
});

/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SizeEmitter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _debounce = __webpack_require__(10);

var _debounce2 = _interopRequireDefault(_debounce);

var _viewport = __webpack_require__(2);

var _viewport2 = _interopRequireDefault(_viewport);

var _publicEventService = __webpack_require__(6);

var _publicEventService2 = _interopRequireDefault(_publicEventService);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var viewportUtil = new _viewport2.default();
var sizeHandlerFactory = function sizeHandlerFactory(binding, vnode) {
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
};

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
            vnode.context['sizeHandler'] = sizeHandlerFactory(binding, vnode);
            vnode.context.$on('emit-size', function () {
                if (!vnode.context) {
                    return;
                }
                vnode.context['sizeHandler']();
            });
            viewportUtil.addResizeHandler((0, _debounce2.default)(vnode.context['sizeHandler'], 50));
            viewportUtil.addScrollHandler((0, _debounce2.default)(vnode.context['sizeHandler'], 50));
            el.addEventListener('transitionend', (0, _debounce2.default)(vnode.context['sizeHandler'], 50));
            vnode.context['sizeHandler']();
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
            viewportUtil.removeResizeHandler(vnode.context['sizeHandler']);
            viewportUtil.removeScrollHandler(vnode.context['sizeHandler']);
        }
    }], [{
        key: 'inserted',
        value: function inserted(el, binding, vnode) {
            if (!vnode.context) {
                return;
            }
            (0, _debounce2.default)(vnode.context['sizeHandler'], 50);
        }
    }, {
        key: 'update',
        value: function update(el, binding, vnode) {
            if (!vnode.context) {
                return;
            }
            (0, _debounce2.default)(vnode.context['sizeHandler'], 50);
        }
    }, {
        key: 'componentUpdated',
        value: function componentUpdated(el, binding, vnode) {
            if (!vnode.context) {
                return;
            }
            (0, _debounce2.default)(vnode.context['sizeHandler'], 50);
        }
    }]);

    return SizeEmitter;
}();

/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 321 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/gsap/TweenLite.js
var TweenLite = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/gsap/CSSPlugin.js
/*!
 * VERSION: 2.0.2
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */


	TweenLite["_gsScope"]._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin","TweenLite"], function() {

		/** @constructor **/
		var CSSPlugin = function() {
				TweenLite["TweenPlugin"].call(this, "css");
				this._overwriteProps.length = 0;
				this.setRatio = CSSPlugin.prototype.setRatio; //speed optimization (avoid prototype lookup on this "hot" method)
			},
			_globals = TweenLite["_gsScope"]._gsDefine.globals,
			_hasPriority, //turns true whenever a CSSPropTween instance is created that has a priority other than 0. This helps us discern whether or not we should spend the time organizing the linked list or not after a CSSPlugin's _onInitTween() method is called.
			_suffixMap, //we set this in _onInitTween() each time as a way to have a persistent variable we can use in other methods like _parse() without having to pass it around as a parameter and we keep _parse() decoupled from a particular CSSPlugin instance
			_cs, //computed style (we store this in a shared variable to conserve memory and make minification tighter
			_overwriteProps, //alias to the currently instantiating CSSPlugin's _overwriteProps array. We use this closure in order to avoid having to pass a reference around from method to method and aid in minification.
			_specialProps = {},
			p = CSSPlugin.prototype = new TweenLite["TweenPlugin"]("css");

		p.constructor = CSSPlugin;
		CSSPlugin.version = "2.0.2";
		CSSPlugin.API = 2;
		CSSPlugin.defaultTransformPerspective = 0;
		CSSPlugin.defaultSkewType = "compensated";
		CSSPlugin.defaultSmoothOrigin = true;
		p = "px"; //we'll reuse the "p" variable to keep file size down
		CSSPlugin.suffixMap = {top:p, right:p, bottom:p, left:p, width:p, height:p, fontSize:p, padding:p, margin:p, perspective:p, lineHeight:""};


		var _numExp = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
			_relNumExp = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
			_valuesExp = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, //finds all the values that begin with numbers or += or -= and then a number. Includes suffixes. We use this to split complex values apart like "1px 5px 20px rgb(255,102,51)"
			_NaNExp = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g, //also allows scientific notation and doesn't kill the leading -/+ in -= and +=
			_suffixExp = /(?:\d|\-|\+|=|#|\.)*/g,
			_opacityExp = /opacity *= *([^)]*)/i,
			_opacityValExp = /opacity:([^;]*)/i,
			_alphaFilterExp = /alpha\(opacity *=.+?\)/i,
			_rgbhslExp = /^(rgb|hsl)/,
			_capsExp = /([A-Z])/g,
			_camelExp = /-([a-z])/gi,
			_urlExp = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, //for pulling out urls from url(...) or url("...") strings (some browsers wrap urls in quotes, some don't when reporting things like backgroundImage)
			_camelFunc = function(s, g) { return g.toUpperCase(); },
			_horizExp = /(?:Left|Right|Width)/i,
			_ieGetMatrixExp = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
			_ieSetMatrixExp = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
			_commasOutsideParenExp = /,(?=[^\)]*(?:\(|$))/gi, //finds any commas that are not within parenthesis
			_complexExp = /[\s,\(]/i, //for testing a string to find if it has a space, comma, or open parenthesis (clues that it's a complex value)
			_DEG2RAD = Math.PI / 180,
			_RAD2DEG = 180 / Math.PI,
			_forcePT = {},
			_dummyElement = {style:{}},
			_doc = TweenLite["_gsScope"].document || {createElement: function() {return _dummyElement;}},
			_createElement = function(type, ns) {
				return _doc.createElementNS ? _doc.createElementNS(ns || "http://www.w3.org/1999/xhtml", type) : _doc.createElement(type);
			},
			_tempDiv = _createElement("div"),
			_tempImg = _createElement("img"),
			_internals = CSSPlugin._internals = {_specialProps:_specialProps}, //provides a hook to a few internal methods that we need to access from inside other plugins
			_agent = (TweenLite["_gsScope"].navigator || {}).userAgent || "",
			_autoRound,
			_reqSafariFix, //we won't apply the Safari transform fix until we actually come across a tween that affects a transform property (to maintain best performance).

			_isSafari,
			_isFirefox, //Firefox has a bug that causes 3D transformed elements to randomly disappear unless a repaint is forced after each update on each element.
			_isSafariLT6, //Safari (and Android 4 which uses a flavor of Safari) has a bug that prevents changes to "top" and "left" properties from rendering properly if changed on the same frame as a transform UNLESS we set the element's WebkitBackfaceVisibility to hidden (weird, I know). Doing this for Android 3 and earlier seems to actually cause other problems, though (fun!)
			_ieVers,
			_supportsOpacity = (function() { //we set _isSafari, _ieVers, _isFirefox, and _supportsOpacity all in one function here to reduce file size slightly, especially in the minified version.
				var i = _agent.indexOf("Android"),
					a = _createElement("a");
				_isSafari = (_agent.indexOf("Safari") !== -1 && _agent.indexOf("Chrome") === -1 && (i === -1 || parseFloat(_agent.substr(i+8, 2)) > 3));
				_isSafariLT6 = (_isSafari && (parseFloat(_agent.substr(_agent.indexOf("Version/")+8, 2)) < 6));
				_isFirefox = (_agent.indexOf("Firefox") !== -1);
				if ((/MSIE ([0-9]{1,}[\.0-9]{0,})/).exec(_agent) || (/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/).exec(_agent)) {
					_ieVers = parseFloat( RegExp.$1 );
				}
				if (!a) {
					return false;
				}
				a.style.cssText = "top:1px;opacity:.55;";
				return /^0.55/.test(a.style.opacity);
			}()),
			_getIEOpacity = function(v) {
				return (_opacityExp.test( ((typeof(v) === "string") ? v : (v.currentStyle ? v.currentStyle.filter : v.style.filter) || "") ) ? ( parseFloat( RegExp.$1 ) / 100 ) : 1);
			},
			_log = function(s) {//for logging messages, but in a way that won't throw errors in old versions of IE.
				if (TweenLite["_gsScope"].console) {
					console.log(s);
				}
			},
			_target, //when initting a CSSPlugin, we set this variable so that we can access it from within many other functions without having to pass it around as params
			_index, //when initting a CSSPlugin, we set this variable so that we can access it from within many other functions without having to pass it around as params

			_prefixCSS = "", //the non-camelCase vendor prefix like "-o-", "-moz-", "-ms-", or "-webkit-"
			_prefix = "", //camelCase vendor prefix like "O", "ms", "Webkit", or "Moz".

			// @private feed in a camelCase property name like "transform" and it will check to see if it is valid as-is or if it needs a vendor prefix. It returns the corrected camelCase property name (i.e. "WebkitTransform" or "MozTransform" or "transform" or null if no such property is found, like if the browser is IE8 or before, "transform" won't be found at all)
			_checkPropPrefix = function(p, e) {
				e = e || _tempDiv;
				var s = e.style,
					a, i;
				if (s[p] !== undefined) {
					return p;
				}
				p = p.charAt(0).toUpperCase() + p.substr(1);
				a = ["O","Moz","ms","Ms","Webkit"];
				i = 5;
				while (--i > -1 && s[a[i]+p] === undefined) { }
				if (i >= 0) {
					_prefix = (i === 3) ? "ms" : a[i];
					_prefixCSS = "-" + _prefix.toLowerCase() + "-";
					return _prefix + p;
				}
				return null;
			},

			_getComputedStyle = (typeof(window) !== "undefined" ? window : _doc.defaultView || {getComputedStyle:function() {}}).getComputedStyle,

			/**
			 * @private Returns the css style for a particular property of an element. For example, to get whatever the current "left" css value for an element with an ID of "myElement", you could do:
			 * var currentLeft = CSSPlugin.getStyle( document.getElementById("myElement"), "left");
			 *
			 * @param {!Object} t Target element whose style property you want to query
			 * @param {!string} p Property name (like "left" or "top" or "marginTop", etc.)
			 * @param {Object=} cs Computed style object. This just provides a way to speed processing if you're going to get several properties on the same element in quick succession - you can reuse the result of the getComputedStyle() call.
			 * @param {boolean=} calc If true, the value will not be read directly from the element's "style" property (if it exists there), but instead the getComputedStyle() result will be used. This can be useful when you want to ensure that the browser itself is interpreting the value.
			 * @param {string=} dflt Default value that should be returned in the place of null, "none", "auto" or "auto auto".
			 * @return {?string} The current property value
			 */
			_getStyle = CSSPlugin.getStyle = function(t, p, cs, calc, dflt) {
				var rv;
				if (!_supportsOpacity) if (p === "opacity") { //several versions of IE don't use the standard "opacity" property - they use things like filter:alpha(opacity=50), so we parse that here.
					return _getIEOpacity(t);
				}
				if (!calc && t.style[p]) {
					rv = t.style[p];
				} else if ((cs = cs || _getComputedStyle(t))) {
					rv = cs[p] || cs.getPropertyValue(p) || cs.getPropertyValue(p.replace(_capsExp, "-$1").toLowerCase());
				} else if (t.currentStyle) {
					rv = t.currentStyle[p];
				}
				return (dflt != null && (!rv || rv === "none" || rv === "auto" || rv === "auto auto")) ? dflt : rv;
			},

			/**
			 * @private Pass the target element, the property name, the numeric value, and the suffix (like "%", "em", "px", etc.) and it will spit back the equivalent pixel number.
			 * @param {!Object} t Target element
			 * @param {!string} p Property name (like "left", "top", "marginLeft", etc.)
			 * @param {!number} v Value
			 * @param {string=} sfx Suffix (like "px" or "%" or "em")
			 * @param {boolean=} recurse If true, the call is a recursive one. In some browsers (like IE7/8), occasionally the value isn't accurately reported initially, but if we run the function again it will take effect.
			 * @return {number} value in pixels
			 */
			_convertToPixels = _internals.convertToPixels = function(t, p, v, sfx, recurse) {
				if (sfx === "px" || (!sfx && p !== "lineHeight")) { return v; }
				if (sfx === "auto" || !v) { return 0; }
				var horiz = _horizExp.test(p),
					node = t,
					style = _tempDiv.style,
					neg = (v < 0),
					precise = (v === 1),
					pix, cache, time;
				if (neg) {
					v = -v;
				}
				if (precise) {
					v *= 100;
				}
				if (p === "lineHeight" && !sfx) { //special case of when a simple lineHeight (without a unit) is used. Set it to the value, read back the computed value, and then revert.
					cache = _getComputedStyle(t).lineHeight;
					t.style.lineHeight = v;
					pix = parseFloat(_getComputedStyle(t).lineHeight);
					t.style.lineHeight = cache;
				} else if (sfx === "%" && p.indexOf("border") !== -1) {
					pix = (v / 100) * (horiz ? t.clientWidth : t.clientHeight);
				} else {
					style.cssText = "border:0 solid red;position:" + _getStyle(t, "position") + ";line-height:0;";
					if (sfx === "%" || !node.appendChild || sfx.charAt(0) === "v" || sfx === "rem") {
						node = t.parentNode || _doc.body;
						if (_getStyle(node, "display").indexOf("flex") !== -1) { //Edge and IE11 have a bug that causes offsetWidth to report as 0 if the container has display:flex and the child is position:relative. Switching to position: absolute solves it.
							style.position = "absolute";
						}
						cache = node._gsCache;
						time = TweenLite["default"].ticker.frame;
						if (cache && horiz && cache.time === time) { //performance optimization: we record the width of elements along with the ticker frame so that we can quickly get it again on the same tick (seems relatively safe to assume it wouldn't change on the same tick)
							return cache.width * v / 100;
						}
						style[(horiz ? "width" : "height")] = v + sfx;
					} else {
						style[(horiz ? "borderLeftWidth" : "borderTopWidth")] = v + sfx;
					}
					node.appendChild(_tempDiv);
					pix = parseFloat(_tempDiv[(horiz ? "offsetWidth" : "offsetHeight")]);
					node.removeChild(_tempDiv);
					if (horiz && sfx === "%" && CSSPlugin.cacheWidths !== false) {
						cache = node._gsCache = node._gsCache || {};
						cache.time = time;
						cache.width = pix / v * 100;
					}
					if (pix === 0 && !recurse) {
						pix = _convertToPixels(t, p, v, sfx, true);
					}
				}
				if (precise) {
					pix /= 100;
				}
				return neg ? -pix : pix;
			},
			_calculateOffset = _internals.calculateOffset = function(t, p, cs) { //for figuring out "top" or "left" in px when it's "auto". We need to factor in margin with the offsetLeft/offsetTop
				if (_getStyle(t, "position", cs) !== "absolute") { return 0; }
				var dim = ((p === "left") ? "Left" : "Top"),
					v = _getStyle(t, "margin" + dim, cs);
				return t["offset" + dim] - (_convertToPixels(t, p, parseFloat(v), v.replace(_suffixExp, "")) || 0);
			},

			// @private returns at object containing ALL of the style properties in camelCase and their associated values.
			_getAllStyles = function(t, cs) {
				var s = {},
					i, tr, p;
				if ((cs = cs || _getComputedStyle(t, null))) {
					if ((i = cs.length)) {
						while (--i > -1) {
							p = cs[i];
							if (p.indexOf("-transform") === -1 || _transformPropCSS === p) { //Some webkit browsers duplicate transform values, one non-prefixed and one prefixed ("transform" and "WebkitTransform"), so we must weed out the extra one here.
								s[p.replace(_camelExp, _camelFunc)] = cs.getPropertyValue(p);
							}
						}
					} else { //some browsers behave differently - cs.length is always 0, so we must do a for...in loop.
						for (i in cs) {
							if (i.indexOf("Transform") === -1 || _transformProp === i) { //Some webkit browsers duplicate transform values, one non-prefixed and one prefixed ("transform" and "WebkitTransform"), so we must weed out the extra one here.
								s[i] = cs[i];
							}
						}
					}
				} else if ((cs = t.currentStyle || t.style)) {
					for (i in cs) {
						if (typeof(i) === "string" && s[i] === undefined) {
							s[i.replace(_camelExp, _camelFunc)] = cs[i];
						}
					}
				}
				if (!_supportsOpacity) {
					s.opacity = _getIEOpacity(t);
				}
				tr = _getTransform(t, cs, false);
				s.rotation = tr.rotation;
				s.skewX = tr.skewX;
				s.scaleX = tr.scaleX;
				s.scaleY = tr.scaleY;
				s.x = tr.x;
				s.y = tr.y;
				if (_supports3D) {
					s.z = tr.z;
					s.rotationX = tr.rotationX;
					s.rotationY = tr.rotationY;
					s.scaleZ = tr.scaleZ;
				}
				if (s.filters) {
					delete s.filters;
				}
				return s;
			},

			// @private analyzes two style objects (as returned by _getAllStyles()) and only looks for differences between them that contain tweenable values (like a number or color). It returns an object with a "difs" property which refers to an object containing only those isolated properties and values for tweening, and a "firstMPT" property which refers to the first MiniPropTween instance in a linked list that recorded all the starting values of the different properties so that we can revert to them at the end or beginning of the tween - we don't want the cascading to get messed up. The forceLookup parameter is an optional generic object with properties that should be forced into the results - this is necessary for className tweens that are overwriting others because imagine a scenario where a rollover/rollout adds/removes a class and the user swipes the mouse over the target SUPER fast, thus nothing actually changed yet and the subsequent comparison of the properties would indicate they match (especially when px rounding is taken into consideration), thus no tweening is necessary even though it SHOULD tween and remove those properties after the tween (otherwise the inline styles will contaminate things). See the className SpecialProp code for details.
			_cssDif = function(t, s1, s2, vars, forceLookup) {
				var difs = {},
					style = t.style,
					val, p, mpt;
				for (p in s2) {
					if (p !== "cssText") if (p !== "length") if (isNaN(p)) if (s1[p] !== (val = s2[p]) || (forceLookup && forceLookup[p])) if (p.indexOf("Origin") === -1) if (typeof(val) === "number" || typeof(val) === "string") {
						difs[p] = (val === "auto" && (p === "left" || p === "top")) ? _calculateOffset(t, p) : ((val === "" || val === "auto" || val === "none") && typeof(s1[p]) === "string" && s1[p].replace(_NaNExp, "") !== "") ? 0 : val; //if the ending value is defaulting ("" or "auto"), we check the starting value and if it can be parsed into a number (a string which could have a suffix too, like 700px), then we swap in 0 for "" or "auto" so that things actually tween.
						if (style[p] !== undefined) { //for className tweens, we must remember which properties already existed inline - the ones that didn't should be removed when the tween isn't in progress because they were only introduced to facilitate the transition between classes.
							mpt = new MiniPropTween(style, p, style[p], mpt);
						}
					}
				}
				if (vars) {
					for (p in vars) { //copy properties (except className)
						if (p !== "className") {
							difs[p] = vars[p];
						}
					}
				}
				return {difs:difs, firstMPT:mpt};
			},
			_dimensions = {width:["Left","Right"], height:["Top","Bottom"]},
			_margins = ["marginLeft","marginRight","marginTop","marginBottom"],

			/**
			 * @private Gets the width or height of an element
			 * @param {!Object} t Target element
			 * @param {!string} p Property name ("width" or "height")
			 * @param {Object=} cs Computed style object (if one exists). Just a speed optimization.
			 * @return {number} Dimension (in pixels)
			 */
			_getDimension = function(t, p, cs) {
				if ((t.nodeName + "").toLowerCase() === "svg") { //Chrome no longer supports offsetWidth/offsetHeight on SVG elements.
					return (cs || _getComputedStyle(t))[p] || 0;
				} else if (t.getCTM && _isSVG(t)) {
					return t.getBBox()[p] || 0;
				}
				var v = parseFloat((p === "width") ? t.offsetWidth : t.offsetHeight),
					a = _dimensions[p],
					i = a.length;
				cs = cs || _getComputedStyle(t, null);
				while (--i > -1) {
					v -= parseFloat( _getStyle(t, "padding" + a[i], cs, true) ) || 0;
					v -= parseFloat( _getStyle(t, "border" + a[i] + "Width", cs, true) ) || 0;
				}
				return v;
			},

			// @private Parses position-related complex strings like "top left" or "50px 10px" or "70% 20%", etc. which are used for things like transformOrigin or backgroundPosition. Optionally decorates a supplied object (recObj) with the following properties: "ox" (offsetX), "oy" (offsetY), "oxp" (if true, "ox" is a percentage not a pixel value), and "oxy" (if true, "oy" is a percentage not a pixel value)
			_parsePosition = function(v, recObj) {
				if (v === "contain" || v === "auto" || v === "auto auto") { //note: Firefox uses "auto auto" as default whereas Chrome uses "auto".
					return v + " ";
				}
				if (v == null || v === "") {
					v = "0 0";
				}
				var a = v.split(" "),
					x = (v.indexOf("left") !== -1) ? "0%" : (v.indexOf("right") !== -1) ? "100%" : a[0],
					y = (v.indexOf("top") !== -1) ? "0%" : (v.indexOf("bottom") !== -1) ? "100%" : a[1],
					i;
				if (a.length > 3 && !recObj) { //multiple positions
					a = v.split(", ").join(",").split(",");
					v = [];
					for (i = 0; i < a.length; i++) {
						v.push(_parsePosition(a[i]));
					}
					return v.join(",");
				}
				if (y == null) {
					y = (x === "center") ? "50%" : "0";
				} else if (y === "center") {
					y = "50%";
				}
				if (x === "center" || (isNaN(parseFloat(x)) && (x + "").indexOf("=") === -1)) { //remember, the user could flip-flop the values and say "bottom center" or "center bottom", etc. "center" is ambiguous because it could be used to describe horizontal or vertical, hence the isNaN(). If there's an "=" sign in the value, it's relative.
					x = "50%";
				}
				v = x + " " + y + ((a.length > 2) ? " " + a[2] : "");
				if (recObj) {
					recObj.oxp = (x.indexOf("%") !== -1);
					recObj.oyp = (y.indexOf("%") !== -1);
					recObj.oxr = (x.charAt(1) === "=");
					recObj.oyr = (y.charAt(1) === "=");
					recObj.ox = parseFloat(x.replace(_NaNExp, ""));
					recObj.oy = parseFloat(y.replace(_NaNExp, ""));
					recObj.v = v;
				}
				return recObj || v;
			},

			/**
			 * @private Takes an ending value (typically a string, but can be a number) and a starting value and returns the change between the two, looking for relative value indicators like += and -= and it also ignores suffixes (but make sure the ending value starts with a number or +=/-= and that the starting value is a NUMBER!)
			 * @param {(number|string)} e End value which is typically a string, but could be a number
			 * @param {(number|string)} b Beginning value which is typically a string but could be a number
			 * @return {number} Amount of change between the beginning and ending values (relative values that have a "+=" or "-=" are recognized)
			 */
			_parseChange = function(e, b) {
				if (typeof(e) === "function") {
					e = e(_index, _target);
				}
				return (typeof(e) === "string" && e.charAt(1) === "=") ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) : (parseFloat(e) - parseFloat(b)) || 0;
			},

			/**
			 * @private Takes a value and a default number, checks if the value is relative, null, or numeric and spits back a normalized number accordingly. Primarily used in the _parseTransform() function.
			 * @param {Object} v Value to be parsed
			 * @param {!number} d Default value (which is also used for relative calculations if "+=" or "-=" is found in the first parameter)
			 * @return {number} Parsed value
			 */
			_parseVal = function(v, d) {
				if (typeof(v) === "function") {
					v = v(_index, _target);
				}
				var isRelative = (typeof(v) === "string" && v.charAt(1) === "=");
				if (typeof(v) === "string" && v.charAt(v.length - 2) === "v") { //convert vw and vh into px-equivalents.
					v = (isRelative ? v.substr(0, 2) : 0) + (window["inner" + ((v.substr(-2) === "vh") ? "Height" : "Width")] * (parseFloat(isRelative ? v.substr(2) : v) / 100));
				}
				return (v == null) ? d : isRelative ? parseInt(v.charAt(0) + "1", 10) * parseFloat(v.substr(2)) + d : parseFloat(v) || 0;
			},

			/**
			 * @private Translates strings like "40deg" or "40" or 40rad" or "+=40deg" or "270_short" or "-90_cw" or "+=45_ccw" to a numeric radian angle. Of course a starting/default value must be fed in too so that relative values can be calculated properly.
			 * @param {Object} v Value to be parsed
			 * @param {!number} d Default value (which is also used for relative calculations if "+=" or "-=" is found in the first parameter)
			 * @param {string=} p property name for directionalEnd (optional - only used when the parsed value is directional ("_short", "_cw", or "_ccw" suffix). We need a way to store the uncompensated value so that at the end of the tween, we set it to exactly what was requested with no directional compensation). Property name would be "rotation", "rotationX", or "rotationY"
			 * @param {Object=} directionalEnd An object that will store the raw end values for directional angles ("_short", "_cw", or "_ccw" suffix). We need a way to store the uncompensated value so that at the end of the tween, we set it to exactly what was requested with no directional compensation.
			 * @return {number} parsed angle in radians
			 */
			_parseAngle = function(v, d, p, directionalEnd) {
				var min = 0.000001,
					cap, split, dif, result, isRelative;
				if (typeof(v) === "function") {
					v = v(_index, _target);
				}
				if (v == null) {
					result = d;
				} else if (typeof(v) === "number") {
					result = v;
				} else {
					cap = 360;
					split = v.split("_");
					isRelative = (v.charAt(1) === "=");
					dif = (isRelative ? parseInt(v.charAt(0) + "1", 10) * parseFloat(split[0].substr(2)) : parseFloat(split[0])) * ((v.indexOf("rad") === -1) ? 1 : _RAD2DEG) - (isRelative ? 0 : d);
					if (split.length) {
						if (directionalEnd) {
							directionalEnd[p] = d + dif;
						}
						if (v.indexOf("short") !== -1) {
							dif = dif % cap;
							if (dif !== dif % (cap / 2)) {
								dif = (dif < 0) ? dif + cap : dif - cap;
							}
						}
						if (v.indexOf("_cw") !== -1 && dif < 0) {
							dif = ((dif + cap * 9999999999) % cap) - ((dif / cap) | 0) * cap;
						} else if (v.indexOf("ccw") !== -1 && dif > 0) {
							dif = ((dif - cap * 9999999999) % cap) - ((dif / cap) | 0) * cap;
						}
					}
					result = d + dif;
				}
				if (result < min && result > -min) {
					result = 0;
				}
				return result;
			},

			_colorLookup = {aqua:[0,255,255],
				lime:[0,255,0],
				silver:[192,192,192],
				black:[0,0,0],
				maroon:[128,0,0],
				teal:[0,128,128],
				blue:[0,0,255],
				navy:[0,0,128],
				white:[255,255,255],
				fuchsia:[255,0,255],
				olive:[128,128,0],
				yellow:[255,255,0],
				orange:[255,165,0],
				gray:[128,128,128],
				purple:[128,0,128],
				green:[0,128,0],
				red:[255,0,0],
				pink:[255,192,203],
				cyan:[0,255,255],
				transparent:[255,255,255,0]},

			_hue = function(h, m1, m2) {
				h = (h < 0) ? h + 1 : (h > 1) ? h - 1 : h;
				return ((((h * 6 < 1) ? m1 + (m2 - m1) * h * 6 : (h < 0.5) ? m2 : (h * 3 < 2) ? m1 + (m2 - m1) * (2 / 3 - h) * 6 : m1) * 255) + 0.5) | 0;
			},

			/**
			 * @private Parses a color (like #9F0, #FF9900, rgb(255,51,153) or hsl(108, 50%, 10%)) into an array with 3 elements for red, green, and blue or if toHSL parameter is true, it will populate the array with hue, saturation, and lightness values. If a relative value is found in an hsl() or hsla() string, it will preserve those relative prefixes and all the values in the array will be strings instead of numbers (in all other cases it will be populated with numbers).
			 * @param {(string|number)} v The value the should be parsed which could be a string like #9F0 or rgb(255,102,51) or rgba(255,0,0,0.5) or it could be a number like 0xFF00CC or even a named color like red, blue, purple, etc.
			 * @param {(boolean)} toHSL If true, an hsl() or hsla() value will be returned instead of rgb() or rgba()
			 * @return {Array.<number>} An array containing red, green, and blue (and optionally alpha) in that order, or if the toHSL parameter was true, the array will contain hue, saturation and lightness (and optionally alpha) in that order. Always numbers unless there's a relative prefix found in an hsl() or hsla() string and toHSL is true.
			 */
			_parseColor = CSSPlugin.parseColor = function(v, toHSL) {
				var a, r, g, b, h, s, l, max, min, d, wasHSL;
				if (!v) {
					a = _colorLookup.black;
				} else if (typeof(v) === "number") {
					a = [v >> 16, (v >> 8) & 255, v & 255];
				} else {
					if (v.charAt(v.length - 1) === ",") { //sometimes a trailing comma is included and we should chop it off (typically from a comma-delimited list of values like a textShadow:"2px 2px 2px blue, 5px 5px 5px rgb(255,0,0)" - in this example "blue," has a trailing comma. We could strip it out inside parseComplex() but we'd need to do it to the beginning and ending values plus it wouldn't provide protection from other potential scenarios like if the user passes in a similar value.
						v = v.substr(0, v.length - 1);
					}
					if (_colorLookup[v]) {
						a = _colorLookup[v];
					} else if (v.charAt(0) === "#") {
						if (v.length === 4) { //for shorthand like #9F0
							r = v.charAt(1);
							g = v.charAt(2);
							b = v.charAt(3);
							v = "#" + r + r + g + g + b + b;
						}
						v = parseInt(v.substr(1), 16);
						a = [v >> 16, (v >> 8) & 255, v & 255];
					} else if (v.substr(0, 3) === "hsl") {
						a = wasHSL = v.match(_numExp);
						if (!toHSL) {
							h = (Number(a[0]) % 360) / 360;
							s = Number(a[1]) / 100;
							l = Number(a[2]) / 100;
							g = (l <= 0.5) ? l * (s + 1) : l + s - l * s;
							r = l * 2 - g;
							if (a.length > 3) {
								a[3] = Number(a[3]);
							}
							a[0] = _hue(h + 1 / 3, r, g);
							a[1] = _hue(h, r, g);
							a[2] = _hue(h - 1 / 3, r, g);
						} else if (v.indexOf("=") !== -1) { //if relative values are found, just return the raw strings with the relative prefixes in place.
							return v.match(_relNumExp);
						}
					} else {
						a = v.match(_numExp) || _colorLookup.transparent;
					}
					a[0] = Number(a[0]);
					a[1] = Number(a[1]);
					a[2] = Number(a[2]);
					if (a.length > 3) {
						a[3] = Number(a[3]);
					}
				}
				if (toHSL && !wasHSL) {
					r = a[0] / 255;
					g = a[1] / 255;
					b = a[2] / 255;
					max = Math.max(r, g, b);
					min = Math.min(r, g, b);
					l = (max + min) / 2;
					if (max === min) {
						h = s = 0;
					} else {
						d = max - min;
						s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
						h = (max === r) ? (g - b) / d + (g < b ? 6 : 0) : (max === g) ? (b - r) / d + 2 : (r - g) / d + 4;
						h *= 60;
					}
					a[0] = (h + 0.5) | 0;
					a[1] = (s * 100 + 0.5) | 0;
					a[2] = (l * 100 + 0.5) | 0;
				}
				return a;
			},
			_formatColors = function(s, toHSL) {
				var colors = s.match(_colorExp) || [],
					charIndex = 0,
					parsed = "",
					i, color, temp;
				if (!colors.length) {
					return s;
				}
				for (i = 0; i < colors.length; i++) {
					color = colors[i];
					temp = s.substr(charIndex, s.indexOf(color, charIndex)-charIndex);
					charIndex += temp.length + color.length;
					color = _parseColor(color, toHSL);
					if (color.length === 3) {
						color.push(1);
					}
					parsed += temp + (toHSL ? "hsla(" + color[0] + "," + color[1] + "%," + color[2] + "%," + color[3] : "rgba(" + color.join(",")) + ")";
				}
				return parsed + s.substr(charIndex);
			},
			_colorExp = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b"; //we'll dynamically build this Regular Expression to conserve file size. After building it, it will be able to find rgb(), rgba(), # (hexadecimal), and named color values like red, blue, purple, etc.

		for (p in _colorLookup) {
			_colorExp += "|" + p + "\\b";
		}
		_colorExp = new RegExp(_colorExp+")", "gi");

		CSSPlugin.colorStringFilter = function(a) {
			var combined = a[0] + " " + a[1],
				toHSL;
			if (_colorExp.test(combined)) {
				toHSL = (combined.indexOf("hsl(") !== -1 || combined.indexOf("hsla(") !== -1);
				a[0] = _formatColors(a[0], toHSL);
				a[1] = _formatColors(a[1], toHSL);
			}
			_colorExp.lastIndex = 0;
		};

		if (!TweenLite["default"].defaultStringFilter) {
			TweenLite["default"].defaultStringFilter = CSSPlugin.colorStringFilter;
		}

		/**
		 * @private Returns a formatter function that handles taking a string (or number in some cases) and returning a consistently formatted one in terms of delimiters, quantity of values, etc. For example, we may get boxShadow values defined as "0px red" or "0px 0px 10px rgb(255,0,0)" or "0px 0px 20px 20px #F00" and we need to ensure that what we get back is described with 4 numbers and a color. This allows us to feed it into the _parseComplex() method and split the values up appropriately. The neat thing about this _getFormatter() function is that the dflt defines a pattern as well as a default, so for example, _getFormatter("0px 0px 0px 0px #777", true) not only sets the default as 0px for all distances and #777 for the color, but also sets the pattern such that 4 numbers and a color will always get returned.
		 * @param {!string} dflt The default value and pattern to follow. So "0px 0px 0px 0px #777" will ensure that 4 numbers and a color will always get returned.
		 * @param {boolean=} clr If true, the values should be searched for color-related data. For example, boxShadow values typically contain a color whereas borderRadius don't.
		 * @param {boolean=} collapsible If true, the value is a top/left/right/bottom style one that acts like margin or padding, where if only one value is received, it's used for all 4; if 2 are received, the first is duplicated for 3rd (bottom) and the 2nd is duplicated for the 4th spot (left), etc.
		 * @return {Function} formatter function
		 */
		var _getFormatter = function(dflt, clr, collapsible, multi) {
				if (dflt == null) {
					return function(v) {return v;};
				}
				var dColor = clr ? (dflt.match(_colorExp) || [""])[0] : "",
					dVals = dflt.split(dColor).join("").match(_valuesExp) || [],
					pfx = dflt.substr(0, dflt.indexOf(dVals[0])),
					sfx = (dflt.charAt(dflt.length - 1) === ")") ? ")" : "",
					delim = (dflt.indexOf(" ") !== -1) ? " " : ",",
					numVals = dVals.length,
					dSfx = (numVals > 0) ? dVals[0].replace(_numExp, "") : "",
					formatter;
				if (!numVals) {
					return function(v) {return v;};
				}
				if (clr) {
					formatter = function(v) {
						var color, vals, i, a;
						if (typeof(v) === "number") {
							v += dSfx;
						} else if (multi && _commasOutsideParenExp.test(v)) {
							a = v.replace(_commasOutsideParenExp, "|").split("|");
							for (i = 0; i < a.length; i++) {
								a[i] = formatter(a[i]);
							}
							return a.join(",");
						}
						color = (v.match(_colorExp) || [dColor])[0];
						vals = v.split(color).join("").match(_valuesExp) || [];
						i = vals.length;
						if (numVals > i--) {
							while (++i < numVals) {
								vals[i] = collapsible ? vals[(((i - 1) / 2) | 0)] : dVals[i];
							}
						}
						return pfx + vals.join(delim) + delim + color + sfx + (v.indexOf("inset") !== -1 ? " inset" : "");
					};
					return formatter;

				}
				formatter = function(v) {
					var vals, a, i;
					if (typeof(v) === "number") {
						v += dSfx;
					} else if (multi && _commasOutsideParenExp.test(v)) {
						a = v.replace(_commasOutsideParenExp, "|").split("|");
						for (i = 0; i < a.length; i++) {
							a[i] = formatter(a[i]);
						}
						return a.join(",");
					}
					vals = v.match(_valuesExp) || [];
					i = vals.length;
					if (numVals > i--) {
						while (++i < numVals) {
							vals[i] = collapsible ? vals[(((i - 1) / 2) | 0)] : dVals[i];
						}
					}
					return pfx + vals.join(delim) + sfx;
				};
				return formatter;
			},

			/**
			 * @private returns a formatter function that's used for edge-related values like marginTop, marginLeft, paddingBottom, paddingRight, etc. Just pass a comma-delimited list of property names related to the edges.
			 * @param {!string} props a comma-delimited list of property names in order from top to left, like "marginTop,marginRight,marginBottom,marginLeft"
			 * @return {Function} a formatter function
			 */
			_getEdgeParser = function(props) {
				props = props.split(",");
				return function(t, e, p, cssp, pt, plugin, vars) {
					var a = (e + "").split(" "),
						i;
					vars = {};
					for (i = 0; i < 4; i++) {
						vars[props[i]] = a[i] = a[i] || a[(((i - 1) / 2) >> 0)];
					}
					return cssp.parse(t, vars, pt, plugin);
				};
			},

			// @private used when other plugins must tween values first, like BezierPlugin or ThrowPropsPlugin, etc. That plugin's setRatio() gets called first so that the values are updated, and then we loop through the MiniPropTweens which handle copying the values into their appropriate slots so that they can then be applied correctly in the main CSSPlugin setRatio() method. Remember, we typically create a proxy object that has a bunch of uniquely-named properties that we feed to the sub-plugin and it does its magic normally, and then we must interpret those values and apply them to the css because often numbers must get combined/concatenated, suffixes added, etc. to work with css, like boxShadow could have 4 values plus a color.
			_setPluginRatio = _internals._setPluginRatio = function(v) {
				this.plugin.setRatio(v);
				var d = this.data,
					proxy = d.proxy,
					mpt = d.firstMPT,
					min = 0.000001,
					val, pt, i, str, p;
				while (mpt) {
					val = proxy[mpt.v];
					if (mpt.r) {
						val = mpt.r(val);
					} else if (val < min && val > -min) {
						val = 0;
					}
					mpt.t[mpt.p] = val;
					mpt = mpt._next;
				}
				if (d.autoRotate) {
					d.autoRotate.rotation = d.mod ? d.mod.call(this._tween, proxy.rotation, this.t, this._tween) : proxy.rotation; //special case for ModifyPlugin to hook into an auto-rotating bezier
				}
				//at the end, we must set the CSSPropTween's "e" (end) value dynamically here because that's what is used in the final setRatio() method. Same for "b" at the beginning.
				if (v === 1 || v === 0) {
					mpt = d.firstMPT;
					p = (v === 1) ? "e" : "b";
					while (mpt) {
						pt = mpt.t;
						if (!pt.type) {
							pt[p] = pt.s + pt.xs0;
						} else if (pt.type === 1) {
							str = pt.xs0 + pt.s + pt.xs1;
							for (i = 1; i < pt.l; i++) {
								str += pt["xn"+i] + pt["xs"+(i+1)];
							}
							pt[p] = str;
						}
						mpt = mpt._next;
					}
				}
			},

			/**
			 * @private @constructor Used by a few SpecialProps to hold important values for proxies. For example, _parseToProxy() creates a MiniPropTween instance for each property that must get tweened on the proxy, and we record the original property name as well as the unique one we create for the proxy, plus whether or not the value needs to be rounded plus the original value.
			 * @param {!Object} t target object whose property we're tweening (often a CSSPropTween)
			 * @param {!string} p property name
			 * @param {(number|string|object)} v value
			 * @param {MiniPropTween=} next next MiniPropTween in the linked list
			 * @param {boolean=} r if true, the tweened value should be rounded to the nearest integer
			 */
			MiniPropTween = function(t, p, v, next, r) {
				this.t = t;
				this.p = p;
				this.v = v;
				this.r = r;
				if (next) {
					next._prev = this;
					this._next = next;
				}
			},

			/**
			 * @private Most other plugins (like BezierPlugin and ThrowPropsPlugin and others) can only tween numeric values, but CSSPlugin must accommodate special values that have a bunch of extra data (like a suffix or strings between numeric values, etc.). For example, boxShadow has values like "10px 10px 20px 30px rgb(255,0,0)" which would utterly confuse other plugins. This method allows us to split that data apart and grab only the numeric data and attach it to uniquely-named properties of a generic proxy object ({}) so that we can feed that to virtually any plugin to have the numbers tweened. However, we must also keep track of which properties from the proxy go with which CSSPropTween values and instances. So we create a linked list of MiniPropTweens. Each one records a target (the original CSSPropTween), property (like "s" or "xn1" or "xn2") that we're tweening and the unique property name that was used for the proxy (like "boxShadow_xn1" and "boxShadow_xn2") and whether or not they need to be rounded. That way, in the _setPluginRatio() method we can simply copy the values over from the proxy to the CSSPropTween instance(s). Then, when the main CSSPlugin setRatio() method runs and applies the CSSPropTween values accordingly, they're updated nicely. So the external plugin tweens the numbers, _setPluginRatio() copies them over, and setRatio() acts normally, applying css-specific values to the element.
			 * This method returns an object that has the following properties:
			 *  - proxy: a generic object containing the starting values for all the properties that will be tweened by the external plugin.  This is what we feed to the external _onInitTween() as the target
			 *  - end: a generic object containing the ending values for all the properties that will be tweened by the external plugin. This is what we feed to the external plugin's _onInitTween() as the destination values
			 *  - firstMPT: the first MiniPropTween in the linked list
			 *  - pt: the first CSSPropTween in the linked list that was created when parsing. If shallow is true, this linked list will NOT attach to the one passed into the _parseToProxy() as the "pt" (4th) parameter.
			 * @param {!Object} t target object to be tweened
			 * @param {!(Object|string)} vars the object containing the information about the tweening values (typically the end/destination values) that should be parsed
			 * @param {!CSSPlugin} cssp The CSSPlugin instance
			 * @param {CSSPropTween=} pt the next CSSPropTween in the linked list
			 * @param {TweenPlugin=} plugin the external TweenPlugin instance that will be handling tweening the numeric values
			 * @param {boolean=} shallow if true, the resulting linked list from the parse will NOT be attached to the CSSPropTween that was passed in as the "pt" (4th) parameter.
			 * @return An object containing the following properties: proxy, end, firstMPT, and pt (see above for descriptions)
			 */
			_parseToProxy = _internals._parseToProxy = function(t, vars, cssp, pt, plugin, shallow) {
				var bpt = pt,
					start = {},
					end = {},
					transform = cssp._transform,
					oldForce = _forcePT,
					i, p, xp, mpt, firstPT;
				cssp._transform = null;
				_forcePT = vars;
				pt = firstPT = cssp.parse(t, vars, pt, plugin);
				_forcePT = oldForce;
				//break off from the linked list so the new ones are isolated.
				if (shallow) {
					cssp._transform = transform;
					if (bpt) {
						bpt._prev = null;
						if (bpt._prev) {
							bpt._prev._next = null;
						}
					}
				}
				while (pt && pt !== bpt) {
					if (pt.type <= 1) {
						p = pt.p;
						end[p] = pt.s + pt.c;
						start[p] = pt.s;
						if (!shallow) {
							mpt = new MiniPropTween(pt, "s", p, mpt, pt.r);
							pt.c = 0;
						}
						if (pt.type === 1) {
							i = pt.l;
							while (--i > 0) {
								xp = "xn" + i;
								p = pt.p + "_" + xp;
								end[p] = pt.data[xp];
								start[p] = pt[xp];
								if (!shallow) {
									mpt = new MiniPropTween(pt, xp, p, mpt, pt.rxp[xp]);
								}
							}
						}
					}
					pt = pt._next;
				}
				return {proxy:start, end:end, firstMPT:mpt, pt:firstPT};
			},



			/**
			 * @constructor Each property that is tweened has at least one CSSPropTween associated with it. These instances store important information like the target, property, starting value, amount of change, etc. They can also optionally have a number of "extra" strings and numeric values named xs1, xn1, xs2, xn2, xs3, xn3, etc. where "s" indicates string and "n" indicates number. These can be pieced together in a complex-value tween (type:1) that has alternating types of data like a string, number, string, number, etc. For example, boxShadow could be "5px 5px 8px rgb(102, 102, 51)". In that value, there are 6 numbers that may need to tween and then pieced back together into a string again with spaces, suffixes, etc. xs0 is special in that it stores the suffix for standard (type:0) tweens, -OR- the first string (prefix) in a complex-value (type:1) CSSPropTween -OR- it can be the non-tweening value in a type:-1 CSSPropTween. We do this to conserve memory.
			 * CSSPropTweens have the following optional properties as well (not defined through the constructor):
			 *  - l: Length in terms of the number of extra properties that the CSSPropTween has (default: 0). For example, for a boxShadow we may need to tween 5 numbers in which case l would be 5; Keep in mind that the start/end values for the first number that's tweened are always stored in the s and c properties to conserve memory. All additional values thereafter are stored in xn1, xn2, etc.
			 *  - xfirst: The first instance of any sub-CSSPropTweens that are tweening properties of this instance. For example, we may split up a boxShadow tween so that there's a main CSSPropTween of type:1 that has various xs* and xn* values associated with the h-shadow, v-shadow, blur, color, etc. Then we spawn a CSSPropTween for each of those that has a higher priority and runs BEFORE the main CSSPropTween so that the values are all set by the time it needs to re-assemble them. The xfirst gives us an easy way to identify the first one in that chain which typically ends at the main one (because they're all prepende to the linked list)
			 *  - plugin: The TweenPlugin instance that will handle the tweening of any complex values. For example, sometimes we don't want to use normal subtweens (like xfirst refers to) to tween the values - we might want ThrowPropsPlugin or BezierPlugin some other plugin to do the actual tweening, so we create a plugin instance and store a reference here. We need this reference so that if we get a request to round values or disable a tween, we can pass along that request.
			 *  - data: Arbitrary data that needs to be stored with the CSSPropTween. Typically if we're going to have a plugin handle the tweening of a complex-value tween, we create a generic object that stores the END values that we're tweening to and the CSSPropTween's xs1, xs2, etc. have the starting values. We store that object as data. That way, we can simply pass that object to the plugin and use the CSSPropTween as the target.
			 *  - setRatio: Only used for type:2 tweens that require custom functionality. In this case, we call the CSSPropTween's setRatio() method and pass the ratio each time the tween updates. This isn't quite as efficient as doing things directly in the CSSPlugin's setRatio() method, but it's very convenient and flexible.
			 * @param {!Object} t Target object whose property will be tweened. Often a DOM element, but not always. It could be anything.
			 * @param {string} p Property to tween (name). For example, to tween element.width, p would be "width".
			 * @param {number} s Starting numeric value
			 * @param {number} c Change in numeric value over the course of the entire tween. For example, if element.width starts at 5 and should end at 100, c would be 95.
			 * @param {CSSPropTween=} next The next CSSPropTween in the linked list. If one is defined, we will define its _prev as the new instance, and the new instance's _next will be pointed at it.
			 * @param {number=} type The type of CSSPropTween where -1 = a non-tweening value, 0 = a standard simple tween, 1 = a complex value (like one that has multiple numbers in a comma- or space-delimited string like border:"1px solid red"), and 2 = one that uses a custom setRatio function that does all of the work of applying the values on each update.
			 * @param {string=} n Name of the property that should be used for overwriting purposes which is typically the same as p but not always. For example, we may need to create a subtween for the 2nd part of a "clip:rect(...)" tween in which case "p" might be xs1 but "n" is still "clip"
			 * @param {boolean=} r If true, the value(s) should be rounded
			 * @param {number=} pr Priority in the linked list order. Higher priority CSSPropTweens will be updated before lower priority ones. The default priority is 0.
			 * @param {string=} b Beginning value. We store this to ensure that it is EXACTLY what it was when the tween began without any risk of interpretation issues.
			 * @param {string=} e Ending value. We store this to ensure that it is EXACTLY what the user defined at the end of the tween without any risk of interpretation issues.
			 */
			CSSPropTween = _internals.CSSPropTween = function(t, p, s, c, next, type, n, r, pr, b, e) {
				this.t = t; //target
				this.p = p; //property
				this.s = s; //starting value
				this.c = c; //change value
				this.n = n || p; //name that this CSSPropTween should be associated to (usually the same as p, but not always - n is what overwriting looks at)
				if (!(t instanceof CSSPropTween)) {
					_overwriteProps.push(this.n);
				}
				this.r = !r ? r : (typeof(r) === "function") ? r : Math.round; //round (boolean)
				this.type = type || 0; //0 = normal tween, -1 = non-tweening (in which case xs0 will be applied to the target's property, like tp.t[tp.p] = tp.xs0), 1 = complex-value SpecialProp, 2 = custom setRatio() that does all the work
				if (pr) {
					this.pr = pr;
					_hasPriority = true;
				}
				this.b = (b === undefined) ? s : b;
				this.e = (e === undefined) ? s + c : e;
				if (next) {
					this._next = next;
					next._prev = this;
				}
			},

			_addNonTweeningNumericPT = function(target, prop, start, end, next, overwriteProp) { //cleans up some code redundancies and helps minification. Just a fast way to add a NUMERIC non-tweening CSSPropTween
				var pt = new CSSPropTween(target, prop, start, end - start, next, -1, overwriteProp);
				pt.b = start;
				pt.e = pt.xs0 = end;
				return pt;
			},

			/**
			 * Takes a target, the beginning value and ending value (as strings) and parses them into a CSSPropTween (possibly with child CSSPropTweens) that accommodates multiple numbers, colors, comma-delimited values, etc. For example:
			 * sp.parseComplex(element, "boxShadow", "5px 10px 20px rgb(255,102,51)", "0px 0px 0px red", true, "0px 0px 0px rgb(0,0,0,0)", pt);
			 * It will walk through the beginning and ending values (which should be in the same format with the same number and type of values) and figure out which parts are numbers, what strings separate the numeric/tweenable values, and then create the CSSPropTweens accordingly. If a plugin is defined, no child CSSPropTweens will be created. Instead, the ending values will be stored in the "data" property of the returned CSSPropTween like: {s:-5, xn1:-10, xn2:-20, xn3:255, xn4:0, xn5:0} so that it can be fed to any other plugin and it'll be plain numeric tweens but the recomposition of the complex value will be handled inside CSSPlugin's setRatio().
			 * If a setRatio is defined, the type of the CSSPropTween will be set to 2 and recomposition of the values will be the responsibility of that method.
			 *
			 * @param {!Object} t Target whose property will be tweened
			 * @param {!string} p Property that will be tweened (its name, like "left" or "backgroundColor" or "boxShadow")
			 * @param {string} b Beginning value
			 * @param {string} e Ending value
			 * @param {boolean} clrs If true, the value could contain a color value like "rgb(255,0,0)" or "#F00" or "red". The default is false, so no colors will be recognized (a performance optimization)
			 * @param {(string|number|Object)} dflt The default beginning value that should be used if no valid beginning value is defined or if the number of values inside the complex beginning and ending values don't match
			 * @param {?CSSPropTween} pt CSSPropTween instance that is the current head of the linked list (we'll prepend to this).
			 * @param {number=} pr Priority in the linked list order. Higher priority properties will be updated before lower priority ones. The default priority is 0.
			 * @param {TweenPlugin=} plugin If a plugin should handle the tweening of extra properties, pass the plugin instance here. If one is defined, then NO subtweens will be created for any extra properties (the properties will be created - just not additional CSSPropTween instances to tween them) because the plugin is expected to do so. However, the end values WILL be populated in the "data" property, like {s:100, xn1:50, xn2:300}
			 * @param {function(number)=} setRatio If values should be set in a custom function instead of being pieced together in a type:1 (complex-value) CSSPropTween, define that custom function here.
			 * @return {CSSPropTween} The first CSSPropTween in the linked list which includes the new one(s) added by the parseComplex() call.
			 */
			_parseComplex = CSSPlugin.parseComplex = function(t, p, b, e, clrs, dflt, pt, pr, plugin, setRatio) {
				//DEBUG: _log("parseComplex: "+p+", b: "+b+", e: "+e);
				b = b || dflt || "";
				if (typeof(e) === "function") {
					e = e(_index, _target);
				}
				pt = new CSSPropTween(t, p, 0, 0, pt, (setRatio ? 2 : 1), null, false, pr, b, e);
				e += ""; //ensures it's a string
				if (clrs && _colorExp.test(e + b)) { //if colors are found, normalize the formatting to rgba() or hsla().
					e = [b, e];
					CSSPlugin.colorStringFilter(e);
					b = e[0];
					e = e[1];
				}
				var ba = b.split(", ").join(",").split(" "), //beginning array
					ea = e.split(", ").join(",").split(" "), //ending array
					l = ba.length,
					autoRound = (_autoRound !== false),
					i, xi, ni, bv, ev, bnums, enums, bn, hasAlpha, temp, cv, str, useHSL;
				if (e.indexOf(",") !== -1 || b.indexOf(",") !== -1) {
					if ((e + b).indexOf("rgb") !== -1 || (e + b).indexOf("hsl") !== -1) { //keep rgb(), rgba(), hsl(), and hsla() values together! (remember, we're splitting on spaces)
						ba = ba.join(" ").replace(_commasOutsideParenExp, ", ").split(" ");
						ea = ea.join(" ").replace(_commasOutsideParenExp, ", ").split(" ");
					} else {
						ba = ba.join(" ").split(",").join(", ").split(" ");
						ea = ea.join(" ").split(",").join(", ").split(" ");
					}
					l = ba.length;
				}
				if (l !== ea.length) {
					//DEBUG: _log("mismatched formatting detected on " + p + " (" + b + " vs " + e + ")");
					ba = (dflt || "").split(" ");
					l = ba.length;
				}
				pt.plugin = plugin;
				pt.setRatio = setRatio;
				_colorExp.lastIndex = 0;
				for (i = 0; i < l; i++) {
					bv = ba[i];
					ev = ea[i] + "";
					bn = parseFloat(bv);
					//if the value begins with a number (most common). It's fine if it has a suffix like px
					if (bn || bn === 0) {
						pt.appendXtra("", bn, _parseChange(ev, bn), ev.replace(_relNumExp, ""), (autoRound && ev.indexOf("px") !== -1) ? Math.round : false, true);

					//if the value is a color
					} else if (clrs && _colorExp.test(bv)) {
						str = ev.indexOf(")") + 1;
						str = ")" + (str ? ev.substr(str) : ""); //if there's a comma or ) at the end, retain it.
						useHSL = (ev.indexOf("hsl") !== -1 && _supportsOpacity);
						temp = ev; //original string value so we can look for any prefix later.
						bv = _parseColor(bv, useHSL);
						ev = _parseColor(ev, useHSL);
						hasAlpha = (bv.length + ev.length > 6);
						if (hasAlpha && !_supportsOpacity && ev[3] === 0) { //older versions of IE don't support rgba(), so if the destination alpha is 0, just use "transparent" for the end color
							pt["xs" + pt.l] += pt.l ? " transparent" : "transparent";
							pt.e = pt.e.split(ea[i]).join("transparent");
						} else {
							if (!_supportsOpacity) { //old versions of IE don't support rgba().
								hasAlpha = false;
							}
							if (useHSL) {
								pt.appendXtra(temp.substr(0, temp.indexOf("hsl")) + (hasAlpha ? "hsla(" : "hsl("), bv[0], _parseChange(ev[0], bv[0]), ",", false, true)
									.appendXtra("", bv[1], _parseChange(ev[1], bv[1]), "%,", false)
									.appendXtra("", bv[2], _parseChange(ev[2], bv[2]), (hasAlpha ? "%," : "%" + str), false);
							} else {
								pt.appendXtra(temp.substr(0, temp.indexOf("rgb")) + (hasAlpha ? "rgba(" : "rgb("), bv[0], ev[0] - bv[0], ",", Math.round, true)
									.appendXtra("", bv[1], ev[1] - bv[1], ",", Math.round)
									.appendXtra("", bv[2], ev[2] - bv[2], (hasAlpha ? "," : str), Math.round);
							}

							if (hasAlpha) {
								bv = (bv.length < 4) ? 1 : bv[3];
								pt.appendXtra("", bv, ((ev.length < 4) ? 1 : ev[3]) - bv, str, false);
							}
						}
						_colorExp.lastIndex = 0; //otherwise the test() on the RegExp could move the lastIndex and taint future results.

					} else {
						bnums = bv.match(_numExp); //gets each group of numbers in the beginning value string and drops them into an array

						//if no number is found, treat it as a non-tweening value and just append the string to the current xs.
						if (!bnums) {
							pt["xs" + pt.l] += (pt.l || pt["xs" + pt.l]) ? " " + ev : ev;

						//loop through all the numbers that are found and construct the extra values on the pt.
						} else {
							enums = ev.match(_relNumExp); //get each group of numbers in the end value string and drop them into an array. We allow relative values too, like +=50 or -=.5
							if (!enums || enums.length !== bnums.length) {
								//DEBUG: _log("mismatched formatting detected on " + p + " (" + b + " vs " + e + ")");
								return pt;
							}
							ni = 0;
							for (xi = 0; xi < bnums.length; xi++) {
								cv = bnums[xi];
								temp = bv.indexOf(cv, ni);
								pt.appendXtra(bv.substr(ni, temp - ni), Number(cv), _parseChange(enums[xi], cv), "", (autoRound && bv.substr(temp + cv.length, 2) === "px") ? Math.round : false, (xi === 0));
								ni = temp + cv.length;
							}
							pt["xs" + pt.l] += bv.substr(ni);
						}
					}
				}
				//if there are relative values ("+=" or "-=" prefix), we need to adjust the ending value to eliminate the prefixes and combine the values properly.
				if (e.indexOf("=") !== -1) if (pt.data) {
					str = pt.xs0 + pt.data.s;
					for (i = 1; i < pt.l; i++) {
						str += pt["xs" + i] + pt.data["xn" + i];
					}
					pt.e = str + pt["xs" + i];
				}
				if (!pt.l) {
					pt.type = -1;
					pt.xs0 = pt.e;
				}
				return pt.xfirst || pt;
			},
			i = 9;


		p = CSSPropTween.prototype;
		p.l = p.pr = 0; //length (number of extra properties like xn1, xn2, xn3, etc.
		while (--i > 0) {
			p["xn" + i] = 0;
			p["xs" + i] = "";
		}
		p.xs0 = "";
		p._next = p._prev = p.xfirst = p.data = p.plugin = p.setRatio = p.rxp = null;


		/**
		 * Appends and extra tweening value to a CSSPropTween and automatically manages any prefix and suffix strings. The first extra value is stored in the s and c of the main CSSPropTween instance, but thereafter any extras are stored in the xn1, xn2, xn3, etc. The prefixes and suffixes are stored in the xs0, xs1, xs2, etc. properties. For example, if I walk through a clip value like "rect(10px, 5px, 0px, 20px)", the values would be stored like this:
		 * xs0:"rect(", s:10, xs1:"px, ", xn1:5, xs2:"px, ", xn2:0, xs3:"px, ", xn3:20, xn4:"px)"
		 * And they'd all get joined together when the CSSPlugin renders (in the setRatio() method).
		 * @param {string=} pfx Prefix (if any)
		 * @param {!number} s Starting value
		 * @param {!number} c Change in numeric value over the course of the entire tween. For example, if the start is 5 and the end is 100, the change would be 95.
		 * @param {string=} sfx Suffix (if any)
		 * @param {boolean=} r Round (if true).
		 * @param {boolean=} pad If true, this extra value should be separated by the previous one by a space. If there is no previous extra and pad is true, it will automatically drop the space.
		 * @return {CSSPropTween} returns itself so that multiple methods can be chained together.
		 */
		p.appendXtra = function(pfx, s, c, sfx, r, pad) {
			var pt = this,
				l = pt.l;
			pt["xs" + l] += (pad && (l || pt["xs" + l])) ? " " + pfx : pfx || "";
			if (!c) if (l !== 0 && !pt.plugin) { //typically we'll combine non-changing values right into the xs to optimize performance, but we don't combine them when there's a plugin that will be tweening the values because it may depend on the values being split apart, like for a bezier, if a value doesn't change between the first and second iteration but then it does on the 3rd, we'll run into trouble because there's no xn slot for that value!
				pt["xs" + l] += s + (sfx || "");
				return pt;
			}
			pt.l++;
			pt.type = pt.setRatio ? 2 : 1;
			pt["xs" + pt.l] = sfx || "";
			if (l > 0) {
				pt.data["xn" + l] = s + c;
				pt.rxp["xn" + l] = r; //round extra property (we need to tap into this in the _parseToProxy() method)
				pt["xn" + l] = s;
				if (!pt.plugin) {
					pt.xfirst = new CSSPropTween(pt, "xn" + l, s, c, pt.xfirst || pt, 0, pt.n, r, pt.pr);
					pt.xfirst.xs0 = 0; //just to ensure that the property stays numeric which helps modern browsers speed up processing. Remember, in the setRatio() method, we do pt.t[pt.p] = val + pt.xs0 so if pt.xs0 is "" (the default), it'll cast the end value as a string. When a property is a number sometimes and a string sometimes, it prevents the compiler from locking in the data type, slowing things down slightly.
				}
				return pt;
			}
			pt.data = {s:s + c};
			pt.rxp = {};
			pt.s = s;
			pt.c = c;
			pt.r = r;
			return pt;
		};

		/**
		 * @constructor A SpecialProp is basically a css property that needs to be treated in a non-standard way, like if it may contain a complex value like boxShadow:"5px 10px 15px rgb(255, 102, 51)" or if it is associated with another plugin like ThrowPropsPlugin or BezierPlugin. Every SpecialProp is associated with a particular property name like "boxShadow" or "throwProps" or "bezier" and it will intercept those values in the vars object that's passed to the CSSPlugin and handle them accordingly.
		 * @param {!string} p Property name (like "boxShadow" or "throwProps")
		 * @param {Object=} options An object containing any of the following configuration options:
		 *                      - defaultValue: the default value
		 *                      - parser: A function that should be called when the associated property name is found in the vars. This function should return a CSSPropTween instance and it should ensure that it is properly inserted into the linked list. It will receive 4 paramters: 1) The target, 2) The value defined in the vars, 3) The CSSPlugin instance (whose _firstPT should be used for the linked list), and 4) A computed style object if one was calculated (this is a speed optimization that allows retrieval of starting values quicker)
		 *                      - formatter: a function that formats any value received for this special property (for example, boxShadow could take "5px 5px red" and format it to "5px 5px 0px 0px red" so that both the beginning and ending values have a common order and quantity of values.)
		 *                      - prefix: if true, we'll determine whether or not this property requires a vendor prefix (like Webkit or Moz or ms or O)
		 *                      - color: set this to true if the value for this SpecialProp may contain color-related values like rgb(), rgba(), etc.
		 *                      - priority: priority in the linked list order. Higher priority SpecialProps will be updated before lower priority ones. The default priority is 0.
		 *                      - multi: if true, the formatter should accommodate a comma-delimited list of values, like boxShadow could have multiple boxShadows listed out.
		 *                      - collapsible: if true, the formatter should treat the value like it's a top/right/bottom/left value that could be collapsed, like "5px" would apply to all, "5px, 10px" would use 5px for top/bottom and 10px for right/left, etc.
		 *                      - keyword: a special keyword that can [optionally] be found inside the value (like "inset" for boxShadow). This allows us to validate beginning/ending values to make sure they match (if the keyword is found in one, it'll be added to the other for consistency by default).
		 */
		var SpecialProp = function(p, options) {
				options = options || {};
				this.p = options.prefix ? _checkPropPrefix(p) || p : p;
				_specialProps[p] = _specialProps[this.p] = this;
				this.format = options.formatter || _getFormatter(options.defaultValue, options.color, options.collapsible, options.multi);
				if (options.parser) {
					this.parse = options.parser;
				}
				this.clrs = options.color;
				this.multi = options.multi;
				this.keyword = options.keyword;
				this.dflt = options.defaultValue;
				this.pr = options.priority || 0;
			},

			//shortcut for creating a new SpecialProp that can accept multiple properties as a comma-delimited list (helps minification). dflt can be an array for multiple values (we don't do a comma-delimited list because the default value may contain commas, like rect(0px,0px,0px,0px)). We attach this method to the SpecialProp class/object instead of using a private _createSpecialProp() method so that we can tap into it externally if necessary, like from another plugin.
			_registerComplexSpecialProp = _internals._registerComplexSpecialProp = function(p, options, defaults) {
				if (typeof(options) !== "object") {
					options = {parser:defaults}; //to make backwards compatible with older versions of BezierPlugin and ThrowPropsPlugin
				}
				var a = p.split(","),
					d = options.defaultValue,
					i, temp;
				defaults = defaults || [d];
				for (i = 0; i < a.length; i++) {
					options.prefix = (i === 0 && options.prefix);
					options.defaultValue = defaults[i] || d;
					temp = new SpecialProp(a[i], options);
				}
			},

			//creates a placeholder special prop for a plugin so that the property gets caught the first time a tween of it is attempted, and at that time it makes the plugin register itself, thus taking over for all future tweens of that property. This allows us to not mandate that things load in a particular order and it also allows us to log() an error that informs the user when they attempt to tween an external plugin-related property without loading its .js file.
			_registerPluginProp = _internals._registerPluginProp = function(p) {
				if (!_specialProps[p]) {
					var pluginName = p.charAt(0).toUpperCase() + p.substr(1) + "Plugin";
					_registerComplexSpecialProp(p, {parser:function(t, e, p, cssp, pt, plugin, vars) {
						var pluginClass = _globals.com.greensock.plugins[pluginName];
						if (!pluginClass) {
							_log("Error: " + pluginName + " js file not loaded.");
							return pt;
						}
						pluginClass._cssRegister();
						return _specialProps[p].parse(t, e, p, cssp, pt, plugin, vars);
					}});
				}
			};


		p = SpecialProp.prototype;

		/**
		 * Alias for _parseComplex() that automatically plugs in certain values for this SpecialProp, like its property name, whether or not colors should be sensed, the default value, and priority. It also looks for any keyword that the SpecialProp defines (like "inset" for boxShadow) and ensures that the beginning and ending values have the same number of values for SpecialProps where multi is true (like boxShadow and textShadow can have a comma-delimited list)
		 * @param {!Object} t target element
		 * @param {(string|number|object)} b beginning value
		 * @param {(string|number|object)} e ending (destination) value
		 * @param {CSSPropTween=} pt next CSSPropTween in the linked list
		 * @param {TweenPlugin=} plugin If another plugin will be tweening the complex value, that TweenPlugin instance goes here.
		 * @param {function=} setRatio If a custom setRatio() method should be used to handle this complex value, that goes here.
		 * @return {CSSPropTween=} First CSSPropTween in the linked list
		 */
		p.parseComplex = function(t, b, e, pt, plugin, setRatio) {
			var kwd = this.keyword,
				i, ba, ea, l, bi, ei;
			//if this SpecialProp's value can contain a comma-delimited list of values (like boxShadow or textShadow), we must parse them in a special way, and look for a keyword (like "inset" for boxShadow) and ensure that the beginning and ending BOTH have it if the end defines it as such. We also must ensure that there are an equal number of values specified (we can't tween 1 boxShadow to 3 for example)
			if (this.multi) if (_commasOutsideParenExp.test(e) || _commasOutsideParenExp.test(b)) {
				ba = b.replace(_commasOutsideParenExp, "|").split("|");
				ea = e.replace(_commasOutsideParenExp, "|").split("|");
			} else if (kwd) {
				ba = [b];
				ea = [e];
			}
			if (ea) {
				l = (ea.length > ba.length) ? ea.length : ba.length;
				for (i = 0; i < l; i++) {
					b = ba[i] = ba[i] || this.dflt;
					e = ea[i] = ea[i] || this.dflt;
					if (kwd) {
						bi = b.indexOf(kwd);
						ei = e.indexOf(kwd);
						if (bi !== ei) {
							if (ei === -1) { //if the keyword isn't in the end value, remove it from the beginning one.
								ba[i] = ba[i].split(kwd).join("");
							} else if (bi === -1) { //if the keyword isn't in the beginning, add it.
								ba[i] += " " + kwd;
							}
						}
					}
				}
				b = ba.join(", ");
				e = ea.join(", ");
			}
			return _parseComplex(t, this.p, b, e, this.clrs, this.dflt, pt, this.pr, plugin, setRatio);
		};

		/**
		 * Accepts a target and end value and spits back a CSSPropTween that has been inserted into the CSSPlugin's linked list and conforms with all the conventions we use internally, like type:-1, 0, 1, or 2, setting up any extra property tweens, priority, etc. For example, if we have a boxShadow SpecialProp and call:
		 * this._firstPT = sp.parse(element, "5px 10px 20px rgb(2550,102,51)", "boxShadow", this);
		 * It should figure out the starting value of the element's boxShadow, compare it to the provided end value and create all the necessary CSSPropTweens of the appropriate types to tween the boxShadow. The CSSPropTween that gets spit back should already be inserted into the linked list (the 4th parameter is the current head, so prepend to that).
		 * @param {!Object} t Target object whose property is being tweened
		 * @param {Object} e End value as provided in the vars object (typically a string, but not always - like a throwProps would be an object).
		 * @param {!string} p Property name
		 * @param {!CSSPlugin} cssp The CSSPlugin instance that should be associated with this tween.
		 * @param {?CSSPropTween} pt The CSSPropTween that is the current head of the linked list (we'll prepend to it)
		 * @param {TweenPlugin=} plugin If a plugin will be used to tween the parsed value, this is the plugin instance.
		 * @param {Object=} vars Original vars object that contains the data for parsing.
		 * @return {CSSPropTween} The first CSSPropTween in the linked list which includes the new one(s) added by the parse() call.
		 */
		p.parse = function(t, e, p, cssp, pt, plugin, vars) {
			return this.parseComplex(t.style, this.format(_getStyle(t, this.p, _cs, false, this.dflt)), this.format(e), pt, plugin);
		};

		/**
		 * Registers a special property that should be intercepted from any "css" objects defined in tweens. This allows you to handle them however you want without CSSPlugin doing it for you. The 2nd parameter should be a function that accepts 3 parameters:
		 *  1) Target object whose property should be tweened (typically a DOM element)
		 *  2) The end/destination value (could be a string, number, object, or whatever you want)
		 *  3) The tween instance (you probably don't need to worry about this, but it can be useful for looking up information like the duration)
		 *
		 * Then, your function should return a function which will be called each time the tween gets rendered, passing a numeric "ratio" parameter to your function that indicates the change factor (usually between 0 and 1). For example:
		 *
		 * CSSPlugin.registerSpecialProp("myCustomProp", function(target, value, tween) {
		 *      var start = target.style.width;
		 *      return function(ratio) {
		 *              target.style.width = (start + value * ratio) + "px";
		 *              console.log("set width to " + target.style.width);
		 *          }
		 * }, 0);
		 *
		 * Then, when I do this tween, it will trigger my special property:
		 *
		 * TweenLite.to(element, 1, {css:{myCustomProp:100}});
		 *
		 * In the example, of course, we're just changing the width, but you can do anything you want.
		 *
		 * @param {!string} name Property name (or comma-delimited list of property names) that should be intercepted and handled by your function. For example, if I define "myCustomProp", then it would handle that portion of the following tween: TweenLite.to(element, 1, {css:{myCustomProp:100}})
		 * @param {!function(Object, Object, Object, string):function(number)} onInitTween The function that will be called when a tween of this special property is performed. The function will receive 4 parameters: 1) Target object that should be tweened, 2) Value that was passed to the tween, 3) The tween instance itself (rarely used), and 4) The property name that's being tweened. Your function should return a function that should be called on every update of the tween. That function will receive a single parameter that is a "change factor" value (typically between 0 and 1) indicating the amount of change as a ratio. You can use this to determine how to set the values appropriately in your function.
		 * @param {number=} priority Priority that helps the engine determine the order in which to set the properties (default: 0). Higher priority properties will be updated before lower priority ones.
		 */
		CSSPlugin.registerSpecialProp = function(name, onInitTween, priority) {
			_registerComplexSpecialProp(name, {parser:function(t, e, p, cssp, pt, plugin, vars) {
				var rv = new CSSPropTween(t, p, 0, 0, pt, 2, p, false, priority);
				rv.plugin = plugin;
				rv.setRatio = onInitTween(t, e, cssp._tween, p);
				return rv;
			}, priority:priority});
		};






		//transform-related methods and properties
		CSSPlugin.useSVGTransformAttr = true; //Safari and Firefox both have some rendering bugs when applying CSS transforms to SVG elements, so default to using the "transform" attribute instead (users can override this).
		var _transformProps = ("scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent").split(","),
			_transformProp = _checkPropPrefix("transform"), //the Javascript (camelCase) transform property, like msTransform, WebkitTransform, MozTransform, or OTransform.
			_transformPropCSS = _prefixCSS + "transform",
			_transformOriginProp = _checkPropPrefix("transformOrigin"),
			_supports3D = (_checkPropPrefix("perspective") !== null),
			Transform = _internals.Transform = function() {
				this.perspective = parseFloat(CSSPlugin.defaultTransformPerspective) || 0;
				this.force3D = (CSSPlugin.defaultForce3D === false || !_supports3D) ? false : CSSPlugin.defaultForce3D || "auto";
			},
			_SVGElement = TweenLite["_gsScope"].SVGElement,
			_useSVGTransformAttr,
			//Some browsers (like Firefox and IE) don't honor transform-origin properly in SVG elements, so we need to manually adjust the matrix accordingly. We feature detect here rather than always doing the conversion for certain browsers because they may fix the problem at some point in the future.

			_createSVG = function(type, container, attributes) {
				var element = _doc.createElementNS("http://www.w3.org/2000/svg", type),
					reg = /([a-z])([A-Z])/g,
					p;
				for (p in attributes) {
					element.setAttributeNS(null, p.replace(reg, "$1-$2").toLowerCase(), attributes[p]);
				}
				container.appendChild(element);
				return element;
			},
			_docElement = _doc.documentElement || {},
			_forceSVGTransformAttr = (function() {
				//IE and Android stock don't support CSS transforms on SVG elements, so we must write them to the "transform" attribute. We populate this variable in the _parseTransform() method, and only if/when we come across an SVG element
				var force = _ieVers || (/Android/i.test(_agent) && !TweenLite["_gsScope"].chrome),
					svg, rect, width;
				if (_doc.createElementNS && !force) { //IE8 and earlier doesn't support SVG anyway
					svg = _createSVG("svg", _docElement);
					rect = _createSVG("rect", svg, {width:100, height:50, x:100});
					width = rect.getBoundingClientRect().width;
					rect.style[_transformOriginProp] = "50% 50%";
					rect.style[_transformProp] = "scaleX(0.5)";
					force = (width === rect.getBoundingClientRect().width && !(_isFirefox && _supports3D)); //note: Firefox fails the test even though it does support CSS transforms in 3D. Since we can't push 3D stuff into the transform attribute, we force Firefox to pass the test here (as long as it does truly support 3D).
					_docElement.removeChild(svg);
				}
				return force;
			})(),
			_parseSVGOrigin = function(e, local, decoratee, absolute, smoothOrigin, skipRecord) {
				var tm = e._gsTransform,
					m = _getMatrix(e, true),
					v, x, y, xOrigin, yOrigin, a, b, c, d, tx, ty, determinant, xOriginOld, yOriginOld;
				if (tm) {
					xOriginOld = tm.xOrigin; //record the original values before we alter them.
					yOriginOld = tm.yOrigin;
				}
				if (!absolute || (v = absolute.split(" ")).length < 2) {
					b = e.getBBox();
					if (b.x === 0 && b.y === 0 && b.width + b.height === 0) { //some browsers (like Firefox) misreport the bounds if the element has zero width and height (it just assumes it's at x:0, y:0), thus we need to manually grab the position in that case.
						b = {x: parseFloat(e.hasAttribute("x") ? e.getAttribute("x") : e.hasAttribute("cx") ? e.getAttribute("cx") : 0) || 0, y: parseFloat(e.hasAttribute("y") ? e.getAttribute("y") : e.hasAttribute("cy") ? e.getAttribute("cy") : 0) || 0, width:0, height:0};
					}
					local = _parsePosition(local).split(" ");
					v = [(local[0].indexOf("%") !== -1 ? parseFloat(local[0]) / 100 * b.width : parseFloat(local[0])) + b.x,
						 (local[1].indexOf("%") !== -1 ? parseFloat(local[1]) / 100 * b.height : parseFloat(local[1])) + b.y];
				}
				decoratee.xOrigin = xOrigin = parseFloat(v[0]);
				decoratee.yOrigin = yOrigin = parseFloat(v[1]);
				if (absolute && m !== _identity2DMatrix) { //if svgOrigin is being set, we must invert the matrix and determine where the absolute point is, factoring in the current transforms. Otherwise, the svgOrigin would be based on the element's non-transformed position on the canvas.
					a = m[0];
					b = m[1];
					c = m[2];
					d = m[3];
					tx = m[4];
					ty = m[5];
					determinant = (a * d - b * c);
					if (determinant) { //if it's zero (like if scaleX and scaleY are zero), skip it to avoid errors with dividing by zero.
						x = xOrigin * (d / determinant) + yOrigin * (-c / determinant) + ((c * ty - d * tx) / determinant);
						y = xOrigin * (-b / determinant) + yOrigin * (a / determinant) - ((a * ty - b * tx) / determinant);
						xOrigin = decoratee.xOrigin = v[0] = x;
						yOrigin = decoratee.yOrigin = v[1] = y;
					}
				}
				if (tm) { //avoid jump when transformOrigin is changed - adjust the x/y values accordingly
					if (skipRecord) {
						decoratee.xOffset = tm.xOffset;
						decoratee.yOffset = tm.yOffset;
						tm = decoratee;
					}
					if (smoothOrigin || (smoothOrigin !== false && CSSPlugin.defaultSmoothOrigin !== false)) {
						x = xOrigin - xOriginOld;
						y = yOrigin - yOriginOld;
						//originally, we simply adjusted the x and y values, but that would cause problems if, for example, you created a rotational tween part-way through an x/y tween. Managing the offset in a separate variable gives us ultimate flexibility.
						//tm.x -= x - (x * m[0] + y * m[2]);
						//tm.y -= y - (x * m[1] + y * m[3]);
						tm.xOffset += (x * m[0] + y * m[2]) - x;
						tm.yOffset += (x * m[1] + y * m[3]) - y;
					} else {
						tm.xOffset = tm.yOffset = 0;
					}
				}
				if (!skipRecord) {
					e.setAttribute("data-svg-origin", v.join(" "));
				}
			},
			_getBBoxHack = function(swapIfPossible) { //works around issues in some browsers (like Firefox) that don't correctly report getBBox() on SVG elements inside a <defs> element and/or <mask>. We try creating an SVG, adding it to the documentElement and toss the element in there so that it's definitely part of the rendering tree, then grab the bbox and if it works, we actually swap out the original getBBox() method for our own that does these extra steps whenever getBBox is needed. This helps ensure that performance is optimal (only do all these extra steps when absolutely necessary...most elements don't need it).
				var svg = _createElement("svg", (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) || "http://www.w3.org/2000/svg"),
					oldParent = this.parentNode,
					oldSibling = this.nextSibling,
					oldCSS = this.style.cssText,
					bbox;
				_docElement.appendChild(svg);
				svg.appendChild(this);
				this.style.display = "block";
				if (swapIfPossible) {
					try {
						bbox = this.getBBox();
						this._originalGetBBox = this.getBBox;
						this.getBBox = _getBBoxHack;
					} catch (e) { }
				} else if (this._originalGetBBox) {
					bbox = this._originalGetBBox();
				}
				if (oldSibling) {
					oldParent.insertBefore(this, oldSibling);
				} else {
					oldParent.appendChild(this);
				}
				_docElement.removeChild(svg);
				this.style.cssText = oldCSS;
				return bbox;
			},
			_getBBox = function(e) {
				try {
					return e.getBBox(); //Firefox throws errors if you try calling getBBox() on an SVG element that's not rendered (like in a <symbol> or <defs>). https://bugzilla.mozilla.org/show_bug.cgi?id=612118
				} catch (error) {
					return _getBBoxHack.call(e, true);
				}
			},
			_isSVG = function(e) { //reports if the element is an SVG on which getBBox() actually works
				return !!(_SVGElement && e.getCTM && (!e.parentNode || e.ownerSVGElement) && _getBBox(e));
			},
			_identity2DMatrix = [1,0,0,1,0,0],
			_getMatrix = function(e, force2D) {
				var tm = e._gsTransform || new Transform(),
					rnd = 100000,
					style = e.style,
					isDefault, s, m, n, dec, none;
				if (_transformProp) {
					s = _getStyle(e, _transformPropCSS, null, true);
				} else if (e.currentStyle) {
					//for older versions of IE, we need to interpret the filter portion that is in the format: progid:DXImageTransform.Microsoft.Matrix(M11=6.123233995736766e-17, M12=-1, M21=1, M22=6.123233995736766e-17, sizingMethod='auto expand') Notice that we need to swap b and c compared to a normal matrix.
					s = e.currentStyle.filter.match(_ieGetMatrixExp);
					s = (s && s.length === 4) ? [s[0].substr(4), Number(s[2].substr(4)), Number(s[1].substr(4)), s[3].substr(4), (tm.x || 0), (tm.y || 0)].join(",") : "";
				}
				isDefault = (!s || s === "none" || s === "matrix(1, 0, 0, 1, 0, 0)");
				if (_transformProp && ((none = (!_getComputedStyle(e) || _getComputedStyle(e).display === "none")) || !e.parentNode)) { //note: Firefox returns null for getComputedStyle() if the element is in an iframe that has display:none. https://bugzilla.mozilla.org/show_bug.cgi?id=548397
					if (none) { //browsers don't report transforms accurately unless the element is in the DOM and has a display value that's not "none". Firefox and Microsoft browsers have a partial bug where they'll report transforms even if display:none BUT not any percentage-based values like translate(-50%, 8px) will be reported as if it's translate(0, 8px).
						n = style.display;
						style.display = "block";
					}
					if (!e.parentNode) {
						dec = 1; //flag
						_docElement.appendChild(e);
					}
					s = _getStyle(e, _transformPropCSS, null, true);
					isDefault = (!s || s === "none" || s === "matrix(1, 0, 0, 1, 0, 0)");
					if (n) {
						style.display = n;
					} else if (none) {
						_removeProp(style, "display");
					}
					if (dec) {
						_docElement.removeChild(e);
					}
				}
				if (tm.svg || (e.getCTM && _isSVG(e))) {
					if (isDefault && (style[_transformProp] + "").indexOf("matrix") !== -1) { //some browsers (like Chrome 40) don't correctly report transforms that are applied inline on an SVG element (they don't get included in the computed style), so we double-check here and accept matrix values
						s = style[_transformProp];
						isDefault = 0;
					}
					m = e.getAttribute("transform");
					if (isDefault && m) {
						m = e.transform.baseVal.consolidate().matrix; //ensures that even complex values like "translate(50,60) rotate(135,0,0)" are parsed because it mashes it into a matrix.
						s = "matrix(" + m.a + "," + m.b + "," + m.c + "," + m.d + "," + m.e + "," + m.f + ")";
						isDefault = 0;
					}
				}
				if (isDefault) {
					return _identity2DMatrix;
				}
				//split the matrix values out into an array (m for matrix)
				m = (s || "").match(_numExp) || [];
				i = m.length;
				while (--i > -1) {
					n = Number(m[i]);
					m[i] = (dec = n - (n |= 0)) ? ((dec * rnd + (dec < 0 ? -0.5 : 0.5)) | 0) / rnd + n : n; //convert strings to Numbers and round to 5 decimal places to avoid issues with tiny numbers. Roughly 20x faster than Number.toFixed(). We also must make sure to round before dividing so that values like 0.9999999999 become 1 to avoid glitches in browser rendering and interpretation of flipped/rotated 3D matrices. And don't just multiply the number by rnd, floor it, and then divide by rnd because the bitwise operations max out at a 32-bit signed integer, thus it could get clipped at a relatively low value (like 22,000.00000 for example).
				}
				return (force2D && m.length > 6) ? [m[0], m[1], m[4], m[5], m[12], m[13]] : m;
			},

			/**
			 * Parses the transform values for an element, returning an object with x, y, z, scaleX, scaleY, scaleZ, rotation, rotationX, rotationY, skewX, and skewY properties. Note: by default (for performance reasons), all skewing is combined into skewX and rotation but skewY still has a place in the transform object so that we can record how much of the skew is attributed to skewX vs skewY. Remember, a skewY of 10 looks the same as a rotation of 10 and skewX of -10.
			 * @param {!Object} t target element
			 * @param {Object=} cs computed style object (optional)
			 * @param {boolean=} rec if true, the transform values will be recorded to the target element's _gsTransform object, like target._gsTransform = {x:0, y:0, z:0, scaleX:1...}
			 * @param {boolean=} parse if true, we'll ignore any _gsTransform values that already exist on the element, and force a reparsing of the css (calculated style)
			 * @return {object} object containing all of the transform properties/values like {x:0, y:0, z:0, scaleX:1...}
			 */
			_getTransform = _internals.getTransform = function(t, cs, rec, parse) {
				if (t._gsTransform && rec && !parse) {
					return t._gsTransform; //if the element already has a _gsTransform, use that. Note: some browsers don't accurately return the calculated style for the transform (particularly for SVG), so it's almost always safest to just use the values we've already applied rather than re-parsing things.
				}
				var tm = rec ? t._gsTransform || new Transform() : new Transform(),
					invX = (tm.scaleX < 0), //in order to interpret things properly, we need to know if the user applied a negative scaleX previously so that we can adjust the rotation and skewX accordingly. Otherwise, if we always interpret a flipped matrix as affecting scaleY and the user only wants to tween the scaleX on multiple sequential tweens, it would keep the negative scaleY without that being the user's intent.
					min = 0.00002,
					rnd = 100000,
					zOrigin = _supports3D ? parseFloat(_getStyle(t, _transformOriginProp, cs, false, "0 0 0").split(" ")[2]) || tm.zOrigin  || 0 : 0,
					defaultTransformPerspective = parseFloat(CSSPlugin.defaultTransformPerspective) || 0,
					m, i, scaleX, scaleY, rotation, skewX;

				tm.svg = !!(t.getCTM && _isSVG(t));
				if (tm.svg) {
					_parseSVGOrigin(t, _getStyle(t, _transformOriginProp, cs, false, "50% 50%") + "", tm, t.getAttribute("data-svg-origin"));
					_useSVGTransformAttr = CSSPlugin.useSVGTransformAttr || _forceSVGTransformAttr;
				}
				m = _getMatrix(t);
				if (m !== _identity2DMatrix) {

					if (m.length === 16) {
						//we'll only look at these position-related 6 variables first because if x/y/z all match, it's relatively safe to assume we don't need to re-parse everything which risks losing important rotational information (like rotationX:180 plus rotationY:180 would look the same as rotation:180 - there's no way to know for sure which direction was taken based solely on the matrix3d() values)
						var a11 = m[0], a21 = m[1], a31 = m[2], a41 = m[3],
							a12 = m[4], a22 = m[5], a32 = m[6], a42 = m[7],
							a13 = m[8], a23 = m[9], a33 = m[10],
							a14 = m[12], a24 = m[13], a34 = m[14],
							a43 = m[11],
							angle = Math.atan2(a32, a33),
							t1, t2, t3, t4, cos, sin;
						//we manually compensate for non-zero z component of transformOrigin to work around bugs in Safari
						if (tm.zOrigin) {
							a34 = -tm.zOrigin;
							a14 = a13*a34-m[12];
							a24 = a23*a34-m[13];
							a34 = a33*a34+tm.zOrigin-m[14];
						}
						//note for possible future consolidation: rotationX: Math.atan2(a32, a33), rotationY: Math.atan2(-a31, Math.sqrt(a33 * a33 + a32 * a32)), rotation: Math.atan2(a21, a11), skew: Math.atan2(a12, a22). However, it doesn't seem to be quite as reliable as the full-on backwards rotation procedure.
						tm.rotationX = angle * _RAD2DEG;
						//rotationX
						if (angle) {
							cos = Math.cos(-angle);
							sin = Math.sin(-angle);
							t1 = a12*cos+a13*sin;
							t2 = a22*cos+a23*sin;
							t3 = a32*cos+a33*sin;
							a13 = a12*-sin+a13*cos;
							a23 = a22*-sin+a23*cos;
							a33 = a32*-sin+a33*cos;
							a43 = a42*-sin+a43*cos;
							a12 = t1;
							a22 = t2;
							a32 = t3;
						}
						//rotationY
						angle = Math.atan2(-a31, a33);
						tm.rotationY = angle * _RAD2DEG;
						if (angle) {
							cos = Math.cos(-angle);
							sin = Math.sin(-angle);
							t1 = a11*cos-a13*sin;
							t2 = a21*cos-a23*sin;
							t3 = a31*cos-a33*sin;
							a23 = a21*sin+a23*cos;
							a33 = a31*sin+a33*cos;
							a43 = a41*sin+a43*cos;
							a11 = t1;
							a21 = t2;
							a31 = t3;
						}
						//rotationZ
						angle = Math.atan2(a21, a11);
						tm.rotation = angle * _RAD2DEG;
						if (angle) {
							cos = Math.cos(angle);
							sin = Math.sin(angle);
							t1 = a11*cos+a21*sin;
							t2 = a12*cos+a22*sin;
							t3 = a13*cos+a23*sin;
							a21 = a21*cos-a11*sin;
							a22 = a22*cos-a12*sin;
							a23 = a23*cos-a13*sin;
							a11 = t1;
							a12 = t2;
							a13 = t3;
						}

						if (tm.rotationX && Math.abs(tm.rotationX) + Math.abs(tm.rotation) > 359.9) { //when rotationY is set, it will often be parsed as 180 degrees different than it should be, and rotationX and rotation both being 180 (it looks the same), so we adjust for that here.
							tm.rotationX = tm.rotation = 0;
							tm.rotationY = 180 - tm.rotationY;
						}

						//skewX
						angle = Math.atan2(a12, a22);

						//scales
						tm.scaleX = ((Math.sqrt(a11 * a11 + a21 * a21 + a31 * a31) * rnd + 0.5) | 0) / rnd;
						tm.scaleY = ((Math.sqrt(a22 * a22 + a32 * a32) * rnd + 0.5) | 0) / rnd;
						tm.scaleZ = ((Math.sqrt(a13 * a13 + a23 * a23 + a33 * a33) * rnd + 0.5) | 0) / rnd;
						a11 /= tm.scaleX;
						a12 /= tm.scaleY;
						a21 /= tm.scaleX;
						a22 /= tm.scaleY;
						if (Math.abs(angle) > min) {
							tm.skewX = angle * _RAD2DEG;
							a12 = 0; //unskews
							if (tm.skewType !== "simple") {
								tm.scaleY *= 1 / Math.cos(angle); //by default, we compensate the scale based on the skew so that the element maintains a similar proportion when skewed, so we have to alter the scaleY here accordingly to match the default (non-adjusted) skewing that CSS does (stretching more and more as it skews).
							}

						} else {
							tm.skewX = 0;
						}

						/* //for testing purposes
						var transform = "matrix3d(",
							comma = ",",
							zero = "0";
						a13 /= tm.scaleZ;
						a23 /= tm.scaleZ;
						a31 /= tm.scaleX;
						a32 /= tm.scaleY;
						a33 /= tm.scaleZ;
						transform += ((a11 < min && a11 > -min) ? zero : a11) + comma + ((a21 < min && a21 > -min) ? zero : a21) + comma + ((a31 < min && a31 > -min) ? zero : a31);
						transform += comma + ((a41 < min && a41 > -min) ? zero : a41) + comma + ((a12 < min && a12 > -min) ? zero : a12) + comma + ((a22 < min && a22 > -min) ? zero : a22);
						transform += comma + ((a32 < min && a32 > -min) ? zero : a32) + comma + ((a42 < min && a42 > -min) ? zero : a42) + comma + ((a13 < min && a13 > -min) ? zero : a13);
						transform += comma + ((a23 < min && a23 > -min) ? zero : a23) + comma + ((a33 < min && a33 > -min) ? zero : a33) + comma + ((a43 < min && a43 > -min) ? zero : a43) + comma;
						transform += a14 + comma + a24 + comma + a34 + comma + (tm.perspective ? (1 + (-a34 / tm.perspective)) : 1) + ")";
						console.log(transform);
						document.querySelector(".test").style[_transformProp] = transform;
						*/

						tm.perspective = a43 ? 1 / ((a43 < 0) ? -a43 : a43) : 0;
						tm.x = a14;
						tm.y = a24;
						tm.z = a34;
						if (tm.svg) {
							tm.x -= tm.xOrigin - (tm.xOrigin * a11 - tm.yOrigin * a12);
							tm.y -= tm.yOrigin - (tm.yOrigin * a21 - tm.xOrigin * a22);
						}

					} else if ((!_supports3D || parse || !m.length || tm.x !== m[4] || tm.y !== m[5] || (!tm.rotationX && !tm.rotationY))) { //sometimes a 6-element matrix is returned even when we performed 3D transforms, like if rotationX and rotationY are 180. In cases like this, we still need to honor the 3D transforms. If we just rely on the 2D info, it could affect how the data is interpreted, like scaleY might get set to -1 or rotation could get offset by 180 degrees. For example, do a TweenLite.to(element, 1, {css:{rotationX:180, rotationY:180}}) and then later, TweenLite.to(element, 1, {css:{rotationX:0}}) and without this conditional logic in place, it'd jump to a state of being unrotated when the 2nd tween starts. Then again, we need to honor the fact that the user COULD alter the transforms outside of CSSPlugin, like by manually applying new css, so we try to sense that by looking at x and y because if those changed, we know the changes were made outside CSSPlugin and we force a reinterpretation of the matrix values. Also, in Webkit browsers, if the element's "display" is "none", its calculated style value will always return empty, so if we've already recorded the values in the _gsTransform object, we'll just rely on those.
						var k = (m.length >= 6),
							a = k ? m[0] : 1,
							b = m[1] || 0,
							c = m[2] || 0,
							d = k ? m[3] : 1;
						tm.x = m[4] || 0;
						tm.y = m[5] || 0;
						scaleX = Math.sqrt(a * a + b * b);
						scaleY = Math.sqrt(d * d + c * c);
						rotation = (a || b) ? Math.atan2(b, a) * _RAD2DEG : tm.rotation || 0; //note: if scaleX is 0, we cannot accurately measure rotation. Same for skewX with a scaleY of 0. Therefore, we default to the previously recorded value (or zero if that doesn't exist).
						skewX = (c || d) ? Math.atan2(c, d) * _RAD2DEG + rotation : tm.skewX || 0;
						tm.scaleX = scaleX;
						tm.scaleY = scaleY;
						tm.rotation = rotation;
						tm.skewX = skewX;
						if (_supports3D) {
							tm.rotationX = tm.rotationY = tm.z = 0;
							tm.perspective = defaultTransformPerspective;
							tm.scaleZ = 1;
						}
						if (tm.svg) {
							tm.x -= tm.xOrigin - (tm.xOrigin * a + tm.yOrigin * c);
							tm.y -= tm.yOrigin - (tm.xOrigin * b + tm.yOrigin * d);
						}
					}
					if (Math.abs(tm.skewX) > 90 && Math.abs(tm.skewX) < 270) {
						if (invX) {
							tm.scaleX *= -1;
							tm.skewX += (tm.rotation <= 0) ? 180 : -180;
							tm.rotation += (tm.rotation <= 0) ? 180 : -180;
						} else {
							tm.scaleY *= -1;
							tm.skewX += (tm.skewX <= 0) ? 180 : -180;
						}
					}
					tm.zOrigin = zOrigin;
					//some browsers have a hard time with very small values like 2.4492935982947064e-16 (notice the "e-" towards the end) and would render the object slightly off. So we round to 0 in these cases. The conditional logic here is faster than calling Math.abs(). Also, browsers tend to render a SLIGHTLY rotated object in a fuzzy way, so we need to snap to exactly 0 when appropriate.
					for (i in tm) {
						if (tm[i] < min) if (tm[i] > -min) {
							tm[i] = 0;
						}
					}
				}
				//DEBUG: _log("parsed rotation of " + t.getAttribute("id")+": "+(tm.rotationX)+", "+(tm.rotationY)+", "+(tm.rotation)+", scale: "+tm.scaleX+", "+tm.scaleY+", "+tm.scaleZ+", position: "+tm.x+", "+tm.y+", "+tm.z+", perspective: "+tm.perspective+ ", origin: "+ tm.xOrigin+ ","+ tm.yOrigin);
				if (rec) {
					t._gsTransform = tm; //record to the object's _gsTransform which we use so that tweens can control individual properties independently (we need all the properties to accurately recompose the matrix in the setRatio() method)
					if (tm.svg) { //if we're supposed to apply transforms to the SVG element's "transform" attribute, make sure there aren't any CSS transforms applied or they'll override the attribute ones. Also clear the transform attribute if we're using CSS, just to be clean.
						if (_useSVGTransformAttr && t.style[_transformProp]) {
							TweenLite["default"].delayedCall(0.001, function(){ //if we apply this right away (before anything has rendered), we risk there being no transforms for a brief moment and it also interferes with adjusting the transformOrigin in a tween with immediateRender:true (it'd try reading the matrix and it wouldn't have the appropriate data in place because we just removed it).
								_removeProp(t.style, _transformProp);
							});
						} else if (!_useSVGTransformAttr && t.getAttribute("transform")) {
							TweenLite["default"].delayedCall(0.001, function(){
								t.removeAttribute("transform");
							});
						}
					}
				}
				return tm;
			},

			//for setting 2D transforms in IE6, IE7, and IE8 (must use a "filter" to emulate the behavior of modern day browser transforms)
			_setIETransformRatio = function(v) {
				var t = this.data, //refers to the element's _gsTransform object
					ang = -t.rotation * _DEG2RAD,
					skew = ang + t.skewX * _DEG2RAD,
					rnd = 100000,
					a = ((Math.cos(ang) * t.scaleX * rnd) | 0) / rnd,
					b = ((Math.sin(ang) * t.scaleX * rnd) | 0) / rnd,
					c = ((Math.sin(skew) * -t.scaleY * rnd) | 0) / rnd,
					d = ((Math.cos(skew) * t.scaleY * rnd) | 0) / rnd,
					style = this.t.style,
					cs = this.t.currentStyle,
					filters, val;
				if (!cs) {
					return;
				}
				val = b; //just for swapping the variables an inverting them (reused "val" to avoid creating another variable in memory). IE's filter matrix uses a non-standard matrix configuration (angle goes the opposite way, and b and c are reversed and inverted)
				b = -c;
				c = -val;
				filters = cs.filter;
				style.filter = ""; //remove filters so that we can accurately measure offsetWidth/offsetHeight
				var w = this.t.offsetWidth,
					h = this.t.offsetHeight,
					clip = (cs.position !== "absolute"),
					m = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + b + ", M21=" + c + ", M22=" + d,
					ox = t.x + (w * t.xPercent / 100),
					oy = t.y + (h * t.yPercent / 100),
					dx, dy;

				//if transformOrigin is being used, adjust the offset x and y
				if (t.ox != null) {
					dx = ((t.oxp) ? w * t.ox * 0.01 : t.ox) - w / 2;
					dy = ((t.oyp) ? h * t.oy * 0.01 : t.oy) - h / 2;
					ox += dx - (dx * a + dy * b);
					oy += dy - (dx * c + dy * d);
				}

				if (!clip) {
					m += ", sizingMethod='auto expand')";
				} else {
					dx = (w / 2);
					dy = (h / 2);
					//translate to ensure that transformations occur around the correct origin (default is center).
					m += ", Dx=" + (dx - (dx * a + dy * b) + ox) + ", Dy=" + (dy - (dx * c + dy * d) + oy) + ")";
				}
				if (filters.indexOf("DXImageTransform.Microsoft.Matrix(") !== -1) {
					style.filter = filters.replace(_ieSetMatrixExp, m);
				} else {
					style.filter = m + " " + filters; //we must always put the transform/matrix FIRST (before alpha(opacity=xx)) to avoid an IE bug that slices part of the object when rotation is applied with alpha.
				}

				//at the end or beginning of the tween, if the matrix is normal (1, 0, 0, 1) and opacity is 100 (or doesn't exist), remove the filter to improve browser performance.
				if (v === 0 || v === 1) if (a === 1) if (b === 0) if (c === 0) if (d === 1) if (!clip || m.indexOf("Dx=0, Dy=0") !== -1) if (!_opacityExp.test(filters) || parseFloat(RegExp.$1) === 100) if (filters.indexOf( true && filters.indexOf("Alpha")) === -1) {
					style.removeAttribute("filter");
				}

				//we must set the margins AFTER applying the filter in order to avoid some bugs in IE8 that could (in rare scenarios) cause them to be ignored intermittently (vibration).
				if (!clip) {
					var mult = (_ieVers < 8) ? 1 : -1, //in Internet Explorer 7 and before, the box model is broken, causing the browser to treat the width/height of the actual rotated filtered image as the width/height of the box itself, but Microsoft corrected that in IE8. We must use a negative offset in IE8 on the right/bottom
						marg, prop, dif;
					dx = t.ieOffsetX || 0;
					dy = t.ieOffsetY || 0;
					t.ieOffsetX = Math.round((w - ((a < 0 ? -a : a) * w + (b < 0 ? -b : b) * h)) / 2 + ox);
					t.ieOffsetY = Math.round((h - ((d < 0 ? -d : d) * h + (c < 0 ? -c : c) * w)) / 2 + oy);
					for (i = 0; i < 4; i++) {
						prop = _margins[i];
						marg = cs[prop];
						//we need to get the current margin in case it is being tweened separately (we want to respect that tween's changes)
						val = (marg.indexOf("px") !== -1) ? parseFloat(marg) : _convertToPixels(this.t, prop, parseFloat(marg), marg.replace(_suffixExp, "")) || 0;
						if (val !== t[prop]) {
							dif = (i < 2) ? -t.ieOffsetX : -t.ieOffsetY; //if another tween is controlling a margin, we cannot only apply the difference in the ieOffsets, so we essentially zero-out the dx and dy here in that case. We record the margin(s) later so that we can keep comparing them, making this code very flexible.
						} else {
							dif = (i < 2) ? dx - t.ieOffsetX : dy - t.ieOffsetY;
						}
						style[prop] = (t[prop] = Math.round( val - dif * ((i === 0 || i === 2) ? 1 : mult) )) + "px";
					}
				}
			},

			/* translates a super small decimal to a string WITHOUT scientific notation
			_safeDecimal = function(n) {
				var s = (n < 0 ? -n : n) + "",
					a = s.split("e-");
				return (n < 0 ? "-0." : "0.") + new Array(parseInt(a[1], 10) || 0).join("0") + a[0].split(".").join("");
			},
			*/

			_setTransformRatio = _internals.set3DTransformRatio = _internals.setTransformRatio = function(v) {
				var t = this.data, //refers to the element's _gsTransform object
					style = this.t.style,
					angle = t.rotation,
					rotationX = t.rotationX,
					rotationY = t.rotationY,
					sx = t.scaleX,
					sy = t.scaleY,
					sz = t.scaleZ,
					x = t.x,
					y = t.y,
					z = t.z,
					isSVG = t.svg,
					perspective = t.perspective,
					force3D = t.force3D,
					skewY = t.skewY,
					skewX = t.skewX,
					t1,	a11, a12, a13, a21, a22, a23, a31, a32, a33, a41, a42, a43,
					zOrigin, min, cos, sin, t2, transform, comma, zero, skew, rnd;
				if (skewY) { //for performance reasons, we combine all skewing into the skewX and rotation values. Remember, a skewY of 10 degrees looks the same as a rotation of 10 degrees plus a skewX of 10 degrees.
					skewX += skewY;
					angle += skewY;
				}

				//check to see if we should render as 2D (and SVGs must use 2D when _useSVGTransformAttr is true)
				if (((((v === 1 || v === 0) && force3D === "auto" && (this.tween._totalTime === this.tween._totalDuration || !this.tween._totalTime)) || !force3D) && !z && !perspective && !rotationY && !rotationX && sz === 1) || (_useSVGTransformAttr && isSVG) || !_supports3D) { //on the final render (which could be 0 for a from tween), if there are no 3D aspects, render in 2D to free up memory and improve performance especially on mobile devices. Check the tween's totalTime/totalDuration too in order to make sure it doesn't happen between repeats if it's a repeating tween.

					//2D
					if (angle || skewX || isSVG) {
						angle *= _DEG2RAD;
						skew = skewX * _DEG2RAD;
						rnd = 100000;
						a11 = Math.cos(angle) * sx;
						a21 = Math.sin(angle) * sx;
						a12 = Math.sin(angle - skew) * -sy;
						a22 = Math.cos(angle - skew) * sy;
						if (skew && t.skewType === "simple") { //by default, we compensate skewing on the other axis to make it look more natural, but you can set the skewType to "simple" to use the uncompensated skewing that CSS does
							t1 = Math.tan(skew - skewY * _DEG2RAD);
							t1 = Math.sqrt(1 + t1 * t1);
							a12 *= t1;
							a22 *= t1;
							if (skewY) {
								t1 = Math.tan(skewY * _DEG2RAD);
								t1 = Math.sqrt(1 + t1 * t1);
								a11 *= t1;
								a21 *= t1;
							}
						}
						if (isSVG) {
							x += t.xOrigin - (t.xOrigin * a11 + t.yOrigin * a12) + t.xOffset;
							y += t.yOrigin - (t.xOrigin * a21 + t.yOrigin * a22) + t.yOffset;
							if (_useSVGTransformAttr && (t.xPercent || t.yPercent)) { //The SVG spec doesn't support percentage-based translation in the "transform" attribute, so we merge it into the matrix to simulate it.
								min = this.t.getBBox();
								x += t.xPercent * 0.01 * min.width;
								y += t.yPercent * 0.01 * min.height;
							}
							min = 0.000001;
							if (x < min) if (x > -min) {
								x = 0;
							}
							if (y < min) if (y > -min) {
								y = 0;
							}
						}
						transform = (((a11 * rnd) | 0) / rnd) + "," + (((a21 * rnd) | 0) / rnd) + "," + (((a12 * rnd) | 0) / rnd) + "," + (((a22 * rnd) | 0) / rnd) + "," + x + "," + y + ")";
						if (isSVG && _useSVGTransformAttr) {
							this.t.setAttribute("transform", "matrix(" + transform);
						} else {
							//some browsers have a hard time with very small values like 2.4492935982947064e-16 (notice the "e-" towards the end) and would render the object slightly off. So we round to 5 decimal places.
							style[_transformProp] = ((t.xPercent || t.yPercent) ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix(" : "matrix(") + transform;
						}
					} else {
						style[_transformProp] = ((t.xPercent || t.yPercent) ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix(" : "matrix(") + sx + ",0,0," + sy + "," + x + "," + y + ")";
					}
					return;

				}
				if (_isFirefox) { //Firefox has a bug (at least in v25) that causes it to render the transparent part of 32-bit PNG images as black when displayed inside an iframe and the 3D scale is very small and doesn't change sufficiently enough between renders (like if you use a Power4.easeInOut to scale from 0 to 1 where the beginning values only change a tiny amount to begin the tween before accelerating). In this case, we force the scale to be 0.00002 instead which is visually the same but works around the Firefox issue.
					min = 0.0001;
					if (sx < min && sx > -min) {
						sx = sz = 0.00002;
					}
					if (sy < min && sy > -min) {
						sy = sz = 0.00002;
					}
					if (perspective && !t.z && !t.rotationX && !t.rotationY) { //Firefox has a bug that causes elements to have an odd super-thin, broken/dotted black border on elements that have a perspective set but aren't utilizing 3D space (no rotationX, rotationY, or z).
						perspective = 0;
					}
				}
				if (angle || skewX) {
					angle *= _DEG2RAD;
					cos = a11 = Math.cos(angle);
					sin = a21 = Math.sin(angle);
					if (skewX) {
						angle -= skewX * _DEG2RAD;
						cos = Math.cos(angle);
						sin = Math.sin(angle);
						if (t.skewType === "simple") { //by default, we compensate skewing on the other axis to make it look more natural, but you can set the skewType to "simple" to use the uncompensated skewing that CSS does
							t1 = Math.tan((skewX - skewY) * _DEG2RAD);
							t1 = Math.sqrt(1 + t1 * t1);
							cos *= t1;
							sin *= t1;
							if (t.skewY) {
								t1 = Math.tan(skewY * _DEG2RAD);
								t1 = Math.sqrt(1 + t1 * t1);
								a11 *= t1;
								a21 *= t1;
							}
						}
					}
					a12 = -sin;
					a22 = cos;

				} else if (!rotationY && !rotationX && sz === 1 && !perspective && !isSVG) { //if we're only translating and/or 2D scaling, this is faster...
					style[_transformProp] = ((t.xPercent || t.yPercent) ? "translate(" + t.xPercent + "%," + t.yPercent + "%) translate3d(" : "translate3d(") + x + "px," + y + "px," + z +"px)" + ((sx !== 1 || sy !== 1) ? " scale(" + sx + "," + sy + ")" : "");
					return;
				} else {
					a11 = a22 = 1;
					a12 = a21 = 0;
				}
				// KEY  INDEX   AFFECTS a[row][column]
				// a11  0       rotation, rotationY, scaleX
				// a21  1       rotation, rotationY, scaleX
				// a31  2       rotationY, scaleX
				// a41  3       rotationY, scaleX
				// a12  4       rotation, skewX, rotationX, scaleY
				// a22  5       rotation, skewX, rotationX, scaleY
				// a32  6       rotationX, scaleY
				// a42  7       rotationX, scaleY
				// a13  8       rotationY, rotationX, scaleZ
				// a23  9       rotationY, rotationX, scaleZ
				// a33  10      rotationY, rotationX, scaleZ
				// a43  11      rotationY, rotationX, perspective, scaleZ
				// a14  12      x, zOrigin, svgOrigin
				// a24  13      y, zOrigin, svgOrigin
				// a34  14      z, zOrigin
				// a44  15
				// rotation: Math.atan2(a21, a11)
				// rotationY: Math.atan2(a13, a33) (or Math.atan2(a13, a11))
				// rotationX: Math.atan2(a32, a33)
				a33 = 1;
				a13 = a23 = a31 = a32 = a41 = a42 = 0;
				a43 = (perspective) ? -1 / perspective : 0;
				zOrigin = t.zOrigin;
				min = 0.000001; //threshold below which browsers use scientific notation which won't work.
				comma = ",";
				zero = "0";
				angle = rotationY * _DEG2RAD;
				if (angle) {
					cos = Math.cos(angle);
					sin = Math.sin(angle);
					a31 = -sin;
					a41 = a43*-sin;
					a13 = a11*sin;
					a23 = a21*sin;
					a33 = cos;
					a43 *= cos;
					a11 *= cos;
					a21 *= cos;
				}
				angle = rotationX * _DEG2RAD;
				if (angle) {
					cos = Math.cos(angle);
					sin = Math.sin(angle);
					t1 = a12*cos+a13*sin;
					t2 = a22*cos+a23*sin;
					a32 = a33*sin;
					a42 = a43*sin;
					a13 = a12*-sin+a13*cos;
					a23 = a22*-sin+a23*cos;
					a33 = a33*cos;
					a43 = a43*cos;
					a12 = t1;
					a22 = t2;
				}
				if (sz !== 1) {
					a13*=sz;
					a23*=sz;
					a33*=sz;
					a43*=sz;
				}
				if (sy !== 1) {
					a12*=sy;
					a22*=sy;
					a32*=sy;
					a42*=sy;
				}
				if (sx !== 1) {
					a11*=sx;
					a21*=sx;
					a31*=sx;
					a41*=sx;
				}

				if (zOrigin || isSVG) {
					if (zOrigin) {
						x += a13*-zOrigin;
						y += a23*-zOrigin;
						z += a33*-zOrigin+zOrigin;
					}
					if (isSVG) { //due to bugs in some browsers, we need to manage the transform-origin of SVG manually
						x += t.xOrigin - (t.xOrigin * a11 + t.yOrigin * a12) + t.xOffset;
						y += t.yOrigin - (t.xOrigin * a21 + t.yOrigin * a22) + t.yOffset;
					}
					if (x < min && x > -min) {
						x = zero;
					}
					if (y < min && y > -min) {
						y = zero;
					}
					if (z < min && z > -min) {
						z = 0; //don't use string because we calculate perspective later and need the number.
					}
				}

				//optimized way of concatenating all the values into a string. If we do it all in one shot, it's slower because of the way browsers have to create temp strings and the way it affects memory. If we do it piece-by-piece with +=, it's a bit slower too. We found that doing it in these sized chunks works best overall:
				transform = ((t.xPercent || t.yPercent) ? "translate(" + t.xPercent + "%," + t.yPercent + "%) matrix3d(" : "matrix3d(");
				transform += ((a11 < min && a11 > -min) ? zero : a11) + comma + ((a21 < min && a21 > -min) ? zero : a21) + comma + ((a31 < min && a31 > -min) ? zero : a31);
				transform += comma + ((a41 < min && a41 > -min) ? zero : a41) + comma + ((a12 < min && a12 > -min) ? zero : a12) + comma + ((a22 < min && a22 > -min) ? zero : a22);
				if (rotationX || rotationY || sz !== 1) { //performance optimization (often there's no rotationX or rotationY, so we can skip these calculations)
					transform += comma + ((a32 < min && a32 > -min) ? zero : a32) + comma + ((a42 < min && a42 > -min) ? zero : a42) + comma + ((a13 < min && a13 > -min) ? zero : a13);
					transform += comma + ((a23 < min && a23 > -min) ? zero : a23) + comma + ((a33 < min && a33 > -min) ? zero : a33) + comma + ((a43 < min && a43 > -min) ? zero : a43) + comma;
				} else {
					transform += ",0,0,0,0,1,0,";
				}
				transform += x + comma + y + comma + z + comma + (perspective ? (1 + (-z / perspective)) : 1) + ")";

				style[_transformProp] = transform;
			};

		p = Transform.prototype;
		p.x = p.y = p.z = p.skewX = p.skewY = p.rotation = p.rotationX = p.rotationY = p.zOrigin = p.xPercent = p.yPercent = p.xOffset = p.yOffset = 0;
		p.scaleX = p.scaleY = p.scaleZ = 1;

		_registerComplexSpecialProp("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {parser:function(t, e, parsingProp, cssp, pt, plugin, vars) {
			if (cssp._lastParsedTransform === vars) { return pt; } //only need to parse the transform once, and only if the browser supports it.
			cssp._lastParsedTransform = vars;
			var scaleFunc = (vars.scale && typeof(vars.scale) === "function") ? vars.scale : 0, //if there's a function-based "scale" value, swap in the resulting numeric value temporarily. Otherwise, if it's called for both scaleX and scaleY independently, they may not match (like if the function uses Math.random()).
				swapFunc;
			if (typeof(vars[parsingProp]) === "function") { //whatever property triggers the initial parsing might be a function-based value in which case it already got called in parse(), thus we don't want to call it again in here. The most efficient way to avoid this is to temporarily swap the value directly into the vars object, and then after we do all our parsing in this function, we'll swap it back again.
				swapFunc = vars[parsingProp];
				vars[parsingProp] = e;
			}
			if (scaleFunc) {
				vars.scale = scaleFunc(_index, t);
			}
			var originalGSTransform = t._gsTransform,
				style = t.style,
				min = 0.000001,
				i = _transformProps.length,
				v = vars,
				endRotations = {},
				transformOriginString = "transformOrigin",
				m1 = _getTransform(t, _cs, true, v.parseTransform),
				orig = v.transform && ((typeof(v.transform) === "function") ? v.transform(_index, _target) : v.transform),
				m2, copy, has3D, hasChange, dr, x, y, matrix, p;
			m1.skewType = v.skewType || m1.skewType || CSSPlugin.defaultSkewType;
			cssp._transform = m1;
			if ("rotationZ" in v) {
				v.rotation = v.rotationZ;
			}
			if (orig && typeof(orig) === "string" && _transformProp) { //for values like transform:"rotate(60deg) scale(0.5, 0.8)"
				copy = _tempDiv.style; //don't use the original target because it might be SVG in which case some browsers don't report computed style correctly.
				copy[_transformProp] = orig;
				copy.display = "block"; //if display is "none", the browser often refuses to report the transform properties correctly.
				copy.position = "absolute";
				if (orig.indexOf("%") !== -1) { //%-based translations will fail unless we set the width/height to match the original target...
					copy.width = _getStyle(t, "width");
					copy.height = _getStyle(t, "height");
				}
				_doc.body.appendChild(_tempDiv);
				m2 = _getTransform(_tempDiv, null, false);
				if (m1.skewType === "simple") { //the default _getTransform() reports the skewX/scaleY as if skewType is "compensated", thus we need to adjust that here if skewType is "simple".
					m2.scaleY *= Math.cos(m2.skewX * _DEG2RAD);
				}
				if (m1.svg) { //if it's an SVG element, x/y part of the matrix will be affected by whatever we use as the origin and the offsets, so compensate here...
					x = m1.xOrigin;
					y = m1.yOrigin;
					m2.x -= m1.xOffset;
					m2.y -= m1.yOffset;
					if (v.transformOrigin || v.svgOrigin) { //if this tween is altering the origin, we must factor that in here. The actual work of recording the transformOrigin values and setting up the PropTween is done later (still inside this function) so we cannot leave the changes intact here - we only want to update the x/y accordingly.
						orig = {};
						_parseSVGOrigin(t, _parsePosition(v.transformOrigin), orig, v.svgOrigin, v.smoothOrigin, true);
						x = orig.xOrigin;
						y = orig.yOrigin;
						m2.x -= orig.xOffset - m1.xOffset;
						m2.y -= orig.yOffset - m1.yOffset;
					}
					if (x || y) {
						matrix = _getMatrix(_tempDiv, true);
						m2.x -= x - (x * matrix[0] + y * matrix[2]);
						m2.y -= y - (x * matrix[1] + y * matrix[3]);
					}
				}
				_doc.body.removeChild(_tempDiv);
				if (!m2.perspective) {
					m2.perspective = m1.perspective; //tweening to no perspective gives very unintuitive results - just keep the same perspective in that case.
				}
				if (v.xPercent != null) {
					m2.xPercent = _parseVal(v.xPercent, m1.xPercent);
				}
				if (v.yPercent != null) {
					m2.yPercent = _parseVal(v.yPercent, m1.yPercent);
				}
			} else if (typeof(v) === "object") { //for values like scaleX, scaleY, rotation, x, y, skewX, and skewY or transform:{...} (object)
				m2 = {scaleX:_parseVal((v.scaleX != null) ? v.scaleX : v.scale, m1.scaleX),
					scaleY:_parseVal((v.scaleY != null) ? v.scaleY : v.scale, m1.scaleY),
					scaleZ:_parseVal(v.scaleZ, m1.scaleZ),
					x:_parseVal(v.x, m1.x),
					y:_parseVal(v.y, m1.y),
					z:_parseVal(v.z, m1.z),
					xPercent:_parseVal(v.xPercent, m1.xPercent),
					yPercent:_parseVal(v.yPercent, m1.yPercent),
					perspective:_parseVal(v.transformPerspective, m1.perspective)};
				dr = v.directionalRotation;
				if (dr != null) {
					if (typeof(dr) === "object") {
						for (copy in dr) {
							v[copy] = dr[copy];
						}
					} else {
						v.rotation = dr;
					}
				}
				if (typeof(v.x) === "string" && v.x.indexOf("%") !== -1) {
					m2.x = 0;
					m2.xPercent = _parseVal(v.x, m1.xPercent);
				}
				if (typeof(v.y) === "string" && v.y.indexOf("%") !== -1) {
					m2.y = 0;
					m2.yPercent = _parseVal(v.y, m1.yPercent);
				}

				m2.rotation = _parseAngle(("rotation" in v) ? v.rotation : ("shortRotation" in v) ? v.shortRotation + "_short" : m1.rotation, m1.rotation, "rotation", endRotations);
				if (_supports3D) {
					m2.rotationX = _parseAngle(("rotationX" in v) ? v.rotationX : ("shortRotationX" in v) ? v.shortRotationX + "_short" : m1.rotationX || 0, m1.rotationX, "rotationX", endRotations);
					m2.rotationY = _parseAngle(("rotationY" in v) ? v.rotationY : ("shortRotationY" in v) ? v.shortRotationY + "_short" : m1.rotationY || 0, m1.rotationY, "rotationY", endRotations);
				}
				m2.skewX = _parseAngle(v.skewX, m1.skewX);
				m2.skewY = _parseAngle(v.skewY, m1.skewY);
			}
			if (_supports3D && v.force3D != null) {
				m1.force3D = v.force3D;
				hasChange = true;
			}

			has3D = (m1.force3D || m1.z || m1.rotationX || m1.rotationY || m2.z || m2.rotationX || m2.rotationY || m2.perspective);
			if (!has3D && v.scale != null) {
				m2.scaleZ = 1; //no need to tween scaleZ.
			}

			while (--i > -1) {
				p = _transformProps[i];
				orig = m2[p] - m1[p];
				if (orig > min || orig < -min || v[p] != null || _forcePT[p] != null) {
					hasChange = true;
					pt = new CSSPropTween(m1, p, m1[p], orig, pt);
					if (p in endRotations) {
						pt.e = endRotations[p]; //directional rotations typically have compensated values during the tween, but we need to make sure they end at exactly what the user requested
					}
					pt.xs0 = 0; //ensures the value stays numeric in setRatio()
					pt.plugin = plugin;
					cssp._overwriteProps.push(pt.n);
				}
			}

			orig = v.transformOrigin;
			if (m1.svg && (orig || v.svgOrigin)) {
				x = m1.xOffset; //when we change the origin, in order to prevent things from jumping we adjust the x/y so we must record those here so that we can create PropTweens for them and flip them at the same time as the origin
				y = m1.yOffset;
				_parseSVGOrigin(t, _parsePosition(orig), m2, v.svgOrigin, v.smoothOrigin);
				pt = _addNonTweeningNumericPT(m1, "xOrigin", (originalGSTransform ? m1 : m2).xOrigin, m2.xOrigin, pt, transformOriginString); //note: if there wasn't a transformOrigin defined yet, just start with the destination one; it's wasteful otherwise, and it causes problems with fromTo() tweens. For example, TweenLite.to("#wheel", 3, {rotation:180, transformOrigin:"50% 50%", delay:1}); TweenLite.fromTo("#wheel", 3, {scale:0.5, transformOrigin:"50% 50%"}, {scale:1, delay:2}); would cause a jump when the from values revert at the beginning of the 2nd tween.
				pt = _addNonTweeningNumericPT(m1, "yOrigin", (originalGSTransform ? m1 : m2).yOrigin, m2.yOrigin, pt, transformOriginString);
				if (x !== m1.xOffset || y !== m1.yOffset) {
					pt = _addNonTweeningNumericPT(m1, "xOffset", (originalGSTransform ? x : m1.xOffset), m1.xOffset, pt, transformOriginString);
					pt = _addNonTweeningNumericPT(m1, "yOffset", (originalGSTransform ? y : m1.yOffset), m1.yOffset, pt, transformOriginString);
				}
				orig = "0px 0px"; //certain browsers (like firefox) completely botch transform-origin, so we must remove it to prevent it from contaminating transforms. We manage it ourselves with xOrigin and yOrigin
			}
			if (orig || (_supports3D && has3D && m1.zOrigin)) { //if anything 3D is happening and there's a transformOrigin with a z component that's non-zero, we must ensure that the transformOrigin's z-component is set to 0 so that we can manually do those calculations to get around Safari bugs. Even if the user didn't specifically define a "transformOrigin" in this particular tween (maybe they did it via css directly).
				if (_transformProp) {
					hasChange = true;
					p = _transformOriginProp;
					orig = (orig || _getStyle(t, p, _cs, false, "50% 50%")) + ""; //cast as string to avoid errors
					pt = new CSSPropTween(style, p, 0, 0, pt, -1, transformOriginString);
					pt.b = style[p];
					pt.plugin = plugin;
					if (_supports3D) {
						copy = m1.zOrigin;
						orig = orig.split(" ");
						m1.zOrigin = ((orig.length > 2 && !(copy !== 0 && orig[2] === "0px")) ? parseFloat(orig[2]) : copy) || 0; //Safari doesn't handle the z part of transformOrigin correctly, so we'll manually handle it in the _set3DTransformRatio() method.
						pt.xs0 = pt.e = orig[0] + " " + (orig[1] || "50%") + " 0px"; //we must define a z value of 0px specifically otherwise iOS 5 Safari will stick with the old one (if one was defined)!
						pt = new CSSPropTween(m1, "zOrigin", 0, 0, pt, -1, pt.n); //we must create a CSSPropTween for the _gsTransform.zOrigin so that it gets reset properly at the beginning if the tween runs backward (as opposed to just setting m1.zOrigin here)
						pt.b = copy;
						pt.xs0 = pt.e = m1.zOrigin;
					} else {
						pt.xs0 = pt.e = orig;
					}

					//for older versions of IE (6-8), we need to manually calculate things inside the setRatio() function. We record origin x and y (ox and oy) and whether or not the values are percentages (oxp and oyp).
				} else {
					_parsePosition(orig + "", m1);
				}
			}
			if (hasChange) {
				cssp._transformType = (!(m1.svg && _useSVGTransformAttr) && (has3D || this._transformType === 3)) ? 3 : 2; //quicker than calling cssp._enableTransforms();
			}
			if (swapFunc) {
				vars[parsingProp] = swapFunc;
			}
			if (scaleFunc) {
				vars.scale = scaleFunc;
			}
			return pt;
		}, prefix:true});

		_registerComplexSpecialProp("boxShadow", {defaultValue:"0px 0px 0px 0px #999", prefix:true, color:true, multi:true, keyword:"inset"});

		_registerComplexSpecialProp("borderRadius", {defaultValue:"0px", parser:function(t, e, p, cssp, pt, plugin) {
			e = this.format(e);
			var props = ["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],
				style = t.style,
				ea1, i, es2, bs2, bs, es, bn, en, w, h, esfx, bsfx, rel, hn, vn, em;
			w = parseFloat(t.offsetWidth);
			h = parseFloat(t.offsetHeight);
			ea1 = e.split(" ");
			for (i = 0; i < props.length; i++) { //if we're dealing with percentages, we must convert things separately for the horizontal and vertical axis!
				if (this.p.indexOf("border")) { //older browsers used a prefix
					props[i] = _checkPropPrefix(props[i]);
				}
				bs = bs2 = _getStyle(t, props[i], _cs, false, "0px");
				if (bs.indexOf(" ") !== -1) {
					bs2 = bs.split(" ");
					bs = bs2[0];
					bs2 = bs2[1];
				}
				es = es2 = ea1[i];
				bn = parseFloat(bs);
				bsfx = bs.substr((bn + "").length);
				rel = (es.charAt(1) === "=");
				if (rel) {
					en = parseInt(es.charAt(0)+"1", 10);
					es = es.substr(2);
					en *= parseFloat(es);
					esfx = es.substr((en + "").length - (en < 0 ? 1 : 0)) || "";
				} else {
					en = parseFloat(es);
					esfx = es.substr((en + "").length);
				}
				if (esfx === "") {
					esfx = _suffixMap[p] || bsfx;
				}
				if (esfx !== bsfx) {
					hn = _convertToPixels(t, "borderLeft", bn, bsfx); //horizontal number (we use a bogus "borderLeft" property just because the _convertToPixels() method searches for the keywords "Left", "Right", "Top", and "Bottom" to determine of it's a horizontal or vertical property, and we need "border" in the name so that it knows it should measure relative to the element itself, not its parent.
					vn = _convertToPixels(t, "borderTop", bn, bsfx); //vertical number
					if (esfx === "%") {
						bs = (hn / w * 100) + "%";
						bs2 = (vn / h * 100) + "%";
					} else if (esfx === "em") {
						em = _convertToPixels(t, "borderLeft", 1, "em");
						bs = (hn / em) + "em";
						bs2 = (vn / em) + "em";
					} else {
						bs = hn + "px";
						bs2 = vn + "px";
					}
					if (rel) {
						es = (parseFloat(bs) + en) + esfx;
						es2 = (parseFloat(bs2) + en) + esfx;
					}
				}
				pt = _parseComplex(style, props[i], bs + " " + bs2, es + " " + es2, false, "0px", pt);
			}
			return pt;
		}, prefix:true, formatter:_getFormatter("0px 0px 0px 0px", false, true)});
		_registerComplexSpecialProp("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {defaultValue:"0px", parser:function(t, e, p, cssp, pt, plugin) {
			return _parseComplex(t.style, p, this.format(_getStyle(t, p, _cs, false, "0px 0px")), this.format(e), false, "0px", pt);
		}, prefix:true, formatter:_getFormatter("0px 0px", false, true)});
		_registerComplexSpecialProp("backgroundPosition", {defaultValue:"0 0", parser:function(t, e, p, cssp, pt, plugin) {
			var bp = "background-position",
				cs = (_cs || _getComputedStyle(t, null)),
				bs = this.format( ((cs) ? _ieVers ? cs.getPropertyValue(bp + "-x") + " " + cs.getPropertyValue(bp + "-y") : cs.getPropertyValue(bp) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"), //Internet Explorer doesn't report background-position correctly - we must query background-position-x and background-position-y and combine them (even in IE10). Before IE9, we must do the same with the currentStyle object and use camelCase
				es = this.format(e),
				ba, ea, i, pct, overlap, src;
			if ((bs.indexOf("%") !== -1) !== (es.indexOf("%") !== -1) && es.split(",").length < 2) {
				src = _getStyle(t, "backgroundImage").replace(_urlExp, "");
				if (src && src !== "none") {
					ba = bs.split(" ");
					ea = es.split(" ");
					_tempImg.setAttribute("src", src); //set the temp IMG's src to the background-image so that we can measure its width/height
					i = 2;
					while (--i > -1) {
						bs = ba[i];
						pct = (bs.indexOf("%") !== -1);
						if (pct !== (ea[i].indexOf("%") !== -1)) {
							overlap = (i === 0) ? t.offsetWidth - _tempImg.width : t.offsetHeight - _tempImg.height;
							ba[i] = pct ? (parseFloat(bs) / 100 * overlap) + "px" : (parseFloat(bs) / overlap * 100) + "%";
						}
					}
					bs = ba.join(" ");
				}
			}
			return this.parseComplex(t.style, bs, es, pt, plugin);
		}, formatter:_parsePosition});
		_registerComplexSpecialProp("backgroundSize", {defaultValue:"0 0", formatter:function(v) {
			v += ""; //ensure it's a string
			return (v.substr(0,2) === "co") ? v : _parsePosition(v.indexOf(" ") === -1 ? v + " " + v : v); //if set to something like "100% 100%", Safari typically reports the computed style as just "100%" (no 2nd value), but we should ensure that there are two values, so copy the first one. Otherwise, it'd be interpreted as "100% 0" (wrong). Also remember that it could be "cover" or "contain" which we can't tween but should be able to set.
		}});
		_registerComplexSpecialProp("perspective", {defaultValue:"0px", prefix:true});
		_registerComplexSpecialProp("perspectiveOrigin", {defaultValue:"50% 50%", prefix:true});
		_registerComplexSpecialProp("transformStyle", {prefix:true});
		_registerComplexSpecialProp("backfaceVisibility", {prefix:true});
		_registerComplexSpecialProp("userSelect", {prefix:true});
		_registerComplexSpecialProp("margin", {parser:_getEdgeParser("marginTop,marginRight,marginBottom,marginLeft")});
		_registerComplexSpecialProp("padding", {parser:_getEdgeParser("paddingTop,paddingRight,paddingBottom,paddingLeft")});
		_registerComplexSpecialProp("clip", {defaultValue:"rect(0px,0px,0px,0px)", parser:function(t, e, p, cssp, pt, plugin){
			var b, cs, delim;
			if (_ieVers < 9) { //IE8 and earlier don't report a "clip" value in the currentStyle - instead, the values are split apart into clipTop, clipRight, clipBottom, and clipLeft. Also, in IE7 and earlier, the values inside rect() are space-delimited, not comma-delimited.
				cs = t.currentStyle;
				delim = _ieVers < 8 ? " " : ",";
				b = "rect(" + cs.clipTop + delim + cs.clipRight + delim + cs.clipBottom + delim + cs.clipLeft + ")";
				e = this.format(e).split(",").join(delim);
			} else {
				b = this.format(_getStyle(t, this.p, _cs, false, this.dflt));
				e = this.format(e);
			}
			return this.parseComplex(t.style, b, e, pt, plugin);
		}});
		_registerComplexSpecialProp("textShadow", {defaultValue:"0px 0px 0px #999", color:true, multi:true});
		_registerComplexSpecialProp("autoRound,strictUnits", {parser:function(t, e, p, cssp, pt) {return pt;}}); //just so that we can ignore these properties (not tween them)
		_registerComplexSpecialProp("border", {defaultValue:"0px solid #000", parser:function(t, e, p, cssp, pt, plugin) {
			var bw = _getStyle(t, "borderTopWidth", _cs, false, "0px"),
				end = this.format(e).split(" "),
				esfx = end[0].replace(_suffixExp, "");
			if (esfx !== "px") { //if we're animating to a non-px value, we need to convert the beginning width to that unit.
				bw = (parseFloat(bw) / _convertToPixels(t, "borderTopWidth", 1, esfx)) + esfx;
			}
			return this.parseComplex(t.style, this.format(bw + " " + _getStyle(t, "borderTopStyle", _cs, false, "solid") + " " + _getStyle(t, "borderTopColor", _cs, false, "#000")), end.join(" "), pt, plugin);
			}, color:true, formatter:function(v) {
				var a = v.split(" ");
				return a[0] + " " + (a[1] || "solid") + " " + (v.match(_colorExp) || ["#000"])[0];
			}});
		_registerComplexSpecialProp("borderWidth", {parser:_getEdgeParser("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}); //Firefox doesn't pick up on borderWidth set in style sheets (only inline).
		_registerComplexSpecialProp("float,cssFloat,styleFloat", {parser:function(t, e, p, cssp, pt, plugin) {
			var s = t.style,
				prop = ("cssFloat" in s) ? "cssFloat" : "styleFloat";
			return new CSSPropTween(s, prop, 0, 0, pt, -1, p, false, 0, s[prop], e);
		}});

		//opacity-related
		var _setIEOpacityRatio = function(v) {
				var t = this.t, //refers to the element's style property
					filters = t.filter || _getStyle(this.data, "filter") || "",
					val = (this.s + this.c * v) | 0,
					skip;
				if (val === 100) { //for older versions of IE that need to use a filter to apply opacity, we should remove the filter if opacity hits 1 in order to improve performance, but make sure there isn't a transform (matrix) or gradient in the filters.
					if (filters.indexOf("atrix(") === -1 && filters.indexOf("radient(") === -1 && filters.indexOf("oader(") === -1) {
						t.removeAttribute("filter");
						skip = (!_getStyle(this.data, "filter")); //if a class is applied that has an alpha filter, it will take effect (we don't want that), so re-apply our alpha filter in that case. We must first remove it and then check.
					} else {
						t.filter = filters.replace(_alphaFilterExp, "");
						skip = true;
					}
				}
				if (!skip) {
					if (this.xn1) {
						t.filter = filters = filters || ("alpha(opacity=" + val + ")"); //works around bug in IE7/8 that prevents changes to "visibility" from being applied properly if the filter is changed to a different alpha on the same frame.
					}
					if (filters.indexOf("pacity") === -1) { //only used if browser doesn't support the standard opacity style property (IE 7 and 8). We omit the "O" to avoid case-sensitivity issues
						if (val !== 0 || !this.xn1) { //bugs in IE7/8 won't render the filter properly if opacity is ADDED on the same frame/render as "visibility" changes (this.xn1 is 1 if this tween is an "autoAlpha" tween)
							t.filter = filters + " alpha(opacity=" + val + ")"; //we round the value because otherwise, bugs in IE7/8 can prevent "visibility" changes from being applied properly.
						}
					} else {
						t.filter = filters.replace(_opacityExp, "opacity=" + val);
					}
				}
			};
		_registerComplexSpecialProp("opacity,alpha,autoAlpha", {defaultValue:"1", parser:function(t, e, p, cssp, pt, plugin) {
			var b = parseFloat(_getStyle(t, "opacity", _cs, false, "1")),
				style = t.style,
				isAutoAlpha = (p === "autoAlpha");
			if (typeof(e) === "string" && e.charAt(1) === "=") {
				e = ((e.charAt(0) === "-") ? -1 : 1) * parseFloat(e.substr(2)) + b;
			}
			if (isAutoAlpha && b === 1 && _getStyle(t, "visibility", _cs) === "hidden" && e !== 0) { //if visibility is initially set to "hidden", we should interpret that as intent to make opacity 0 (a convenience)
				b = 0;
			}
			if (_supportsOpacity) {
				pt = new CSSPropTween(style, "opacity", b, e - b, pt);
			} else {
				pt = new CSSPropTween(style, "opacity", b * 100, (e - b) * 100, pt);
				pt.xn1 = isAutoAlpha ? 1 : 0; //we need to record whether or not this is an autoAlpha so that in the setRatio(), we know to duplicate the setting of the alpha in order to work around a bug in IE7 and IE8 that prevents changes to "visibility" from taking effect if the filter is changed to a different alpha(opacity) at the same time. Setting it to the SAME value first, then the new value works around the IE7/8 bug.
				style.zoom = 1; //helps correct an IE issue.
				pt.type = 2;
				pt.b = "alpha(opacity=" + pt.s + ")";
				pt.e = "alpha(opacity=" + (pt.s + pt.c) + ")";
				pt.data = t;
				pt.plugin = plugin;
				pt.setRatio = _setIEOpacityRatio;
			}
			if (isAutoAlpha) { //we have to create the "visibility" PropTween after the opacity one in the linked list so that they run in the order that works properly in IE8 and earlier
				pt = new CSSPropTween(style, "visibility", 0, 0, pt, -1, null, false, 0, ((b !== 0) ? "inherit" : "hidden"), ((e === 0) ? "hidden" : "inherit"));
				pt.xs0 = "inherit";
				cssp._overwriteProps.push(pt.n);
				cssp._overwriteProps.push(p);
			}
			return pt;
		}});


		var _removeProp = function(s, p) {
				if (p) {
					if (s.removeProperty) {
						if (p.substr(0,2) === "ms" || p.substr(0,6) === "webkit") { //Microsoft and some Webkit browsers don't conform to the standard of capitalizing the first prefix character, so we adjust so that when we prefix the caps with a dash, it's correct (otherwise it'd be "ms-transform" instead of "-ms-transform" for IE9, for example)
							p = "-" + p;
						}
						s.removeProperty(p.replace(_capsExp, "-$1").toLowerCase());
					} else { //note: old versions of IE use "removeAttribute()" instead of "removeProperty()"
						s.removeAttribute(p);
					}
				}
			},
			_setClassNameRatio = function(v) {
				this.t._gsClassPT = this;
				if (v === 1 || v === 0) {
					this.t.setAttribute("class", (v === 0) ? this.b : this.e);
					var mpt = this.data, //first MiniPropTween
						s = this.t.style;
					while (mpt) {
						if (!mpt.v) {
							_removeProp(s, mpt.p);
						} else {
							s[mpt.p] = mpt.v;
						}
						mpt = mpt._next;
					}
					if (v === 1 && this.t._gsClassPT === this) {
						this.t._gsClassPT = null;
					}
				} else if (this.t.getAttribute("class") !== this.e) {
					this.t.setAttribute("class", this.e);
				}
			};
		_registerComplexSpecialProp("className", {parser:function(t, e, p, cssp, pt, plugin, vars) {
			var b = t.getAttribute("class") || "", //don't use t.className because it doesn't work consistently on SVG elements; getAttribute("class") and setAttribute("class", value") is more reliable.
				cssText = t.style.cssText,
				difData, bs, cnpt, cnptLookup, mpt;
			pt = cssp._classNamePT = new CSSPropTween(t, p, 0, 0, pt, 2);
			pt.setRatio = _setClassNameRatio;
			pt.pr = -11;
			_hasPriority = true;
			pt.b = b;
			bs = _getAllStyles(t, _cs);
			//if there's a className tween already operating on the target, force it to its end so that the necessary inline styles are removed and the class name is applied before we determine the end state (we don't want inline styles interfering that were there just for class-specific values)
			cnpt = t._gsClassPT;
			if (cnpt) {
				cnptLookup = {};
				mpt = cnpt.data; //first MiniPropTween which stores the inline styles - we need to force these so that the inline styles don't contaminate things. Otherwise, there's a small chance that a tween could start and the inline values match the destination values and they never get cleaned.
				while (mpt) {
					cnptLookup[mpt.p] = 1;
					mpt = mpt._next;
				}
				cnpt.setRatio(1);
			}
			t._gsClassPT = pt;
			pt.e = (e.charAt(1) !== "=") ? e : b.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ((e.charAt(0) === "+") ? " " + e.substr(2) : "");
			t.setAttribute("class", pt.e);
			difData = _cssDif(t, bs, _getAllStyles(t), vars, cnptLookup);
			t.setAttribute("class", b);
			pt.data = difData.firstMPT;
			t.style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
			pt = pt.xfirst = cssp.parse(t, difData.difs, pt, plugin); //we record the CSSPropTween as the xfirst so that we can handle overwriting propertly (if "className" gets overwritten, we must kill all the properties associated with the className part of the tween, so we can loop through from xfirst to the pt itself)
			return pt;
		}});


		var _setClearPropsRatio = function(v) {
			if (v === 1 || v === 0) if (this.data._totalTime === this.data._totalDuration && this.data.data !== "isFromStart") { //this.data refers to the tween. Only clear at the END of the tween (remember, from() tweens make the ratio go from 1 to 0, so we can't just check that and if the tween is the zero-duration one that's created internally to render the starting values in a from() tween, ignore that because otherwise, for example, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in).
				var s = this.t.style,
					transformParse = _specialProps.transform.parse,
					a, p, i, clearTransform, transform;
				if (this.e === "all") {
					s.cssText = "";
					clearTransform = true;
				} else {
					a = this.e.split(" ").join("").split(",");
					i = a.length;
					while (--i > -1) {
						p = a[i];
						if (_specialProps[p]) {
							if (_specialProps[p].parse === transformParse) {
								clearTransform = true;
							} else {
								p = (p === "transformOrigin") ? _transformOriginProp : _specialProps[p].p; //ensures that special properties use the proper browser-specific property name, like "scaleX" might be "-webkit-transform" or "boxShadow" might be "-moz-box-shadow"
							}
						}
						_removeProp(s, p);
					}
				}
				if (clearTransform) {
					_removeProp(s, _transformProp);
					transform = this.t._gsTransform;
					if (transform) {
						if (transform.svg) {
							this.t.removeAttribute("data-svg-origin");
							this.t.removeAttribute("transform");
						}
						delete this.t._gsTransform;
					}
				}

			}
		};
		_registerComplexSpecialProp("clearProps", {parser:function(t, e, p, cssp, pt) {
			pt = new CSSPropTween(t, p, 0, 0, pt, 2);
			pt.setRatio = _setClearPropsRatio;
			pt.e = e;
			pt.pr = -10;
			pt.data = cssp._tween;
			_hasPriority = true;
			return pt;
		}});

		p = "bezier,throwProps,physicsProps,physics2D".split(",");
		i = p.length;
		while (i--) {
			_registerPluginProp(p[i]);
		}








		p = CSSPlugin.prototype;
		p._firstPT = p._lastParsedTransform = p._transform = null;

		//gets called when the tween renders for the first time. This kicks everything off, recording start/end values, etc.
		p._onInitTween = function(target, vars, tween, index) {
			if (!target.nodeType) { //css is only for dom elements
				return false;
			}
			this._target = _target = target;
			this._tween = tween;
			this._vars = vars;
			_index = index;
			_autoRound = vars.autoRound;
			_hasPriority = false;
			_suffixMap = vars.suffixMap || CSSPlugin.suffixMap;
			_cs = _getComputedStyle(target, "");
			_overwriteProps = this._overwriteProps;
			var style = target.style,
				v, pt, pt2, first, last, next, zIndex, tpt, threeD;
			if (_reqSafariFix) if (style.zIndex === "") {
				v = _getStyle(target, "zIndex", _cs);
				if (v === "auto" || v === "") {
					//corrects a bug in [non-Android] Safari that prevents it from repainting elements in their new positions if they don't have a zIndex set. We also can't just apply this inside _parseTransform() because anything that's moved in any way (like using "left" or "top" instead of transforms like "x" and "y") can be affected, so it is best to ensure that anything that's tweening has a z-index. Setting "WebkitPerspective" to a non-zero value worked too except that on iOS Safari things would flicker randomly. Plus zIndex is less memory-intensive.
					this._addLazySet(style, "zIndex", 0);
				}
			}

			if (typeof(vars) === "string") {
				first = style.cssText;
				v = _getAllStyles(target, _cs);
				style.cssText = first + ";" + vars;
				v = _cssDif(target, v, _getAllStyles(target)).difs;
				if (!_supportsOpacity && _opacityValExp.test(vars)) {
					v.opacity = parseFloat( RegExp.$1 );
				}
				vars = v;
				style.cssText = first;
			}

			if (vars.className) { //className tweens will combine any differences they find in the css with the vars that are passed in, so {className:"myClass", scale:0.5, left:20} would work.
				this._firstPT = pt = _specialProps.className.parse(target, vars.className, "className", this, null, null, vars);
			} else {
				this._firstPT = pt = this.parse(target, vars, null);
			}

			if (this._transformType) {
				threeD = (this._transformType === 3);
				if (!_transformProp) {
					style.zoom = 1; //helps correct an IE issue.
				} else if (_isSafari) {
					_reqSafariFix = true;
					//if zIndex isn't set, iOS Safari doesn't repaint things correctly sometimes (seemingly at random).
					if (style.zIndex === "") {
						zIndex = _getStyle(target, "zIndex", _cs);
						if (zIndex === "auto" || zIndex === "") {
							this._addLazySet(style, "zIndex", 0);
						}
					}
					//Setting WebkitBackfaceVisibility corrects 3 bugs:
					// 1) [non-Android] Safari skips rendering changes to "top" and "left" that are made on the same frame/render as a transform update.
					// 2) iOS Safari sometimes neglects to repaint elements in their new positions. Setting "WebkitPerspective" to a non-zero value worked too except that on iOS Safari things would flicker randomly.
					// 3) Safari sometimes displayed odd artifacts when tweening the transform (or WebkitTransform) property, like ghosts of the edges of the element remained. Definitely a browser bug.
					//Note: we allow the user to override the auto-setting by defining WebkitBackfaceVisibility in the vars of the tween.
					if (_isSafariLT6) {
						this._addLazySet(style, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (threeD ? "visible" : "hidden"));
					}
				}
				pt2 = pt;
				while (pt2 && pt2._next) {
					pt2 = pt2._next;
				}
				tpt = new CSSPropTween(target, "transform", 0, 0, null, 2);
				this._linkCSSP(tpt, null, pt2);
				tpt.setRatio = _transformProp ? _setTransformRatio : _setIETransformRatio;
				tpt.data = this._transform || _getTransform(target, _cs, true);
				tpt.tween = tween;
				tpt.pr = -1; //ensures that the transforms get applied after the components are updated.
				_overwriteProps.pop(); //we don't want to force the overwrite of all "transform" tweens of the target - we only care about individual transform properties like scaleX, rotation, etc. The CSSPropTween constructor automatically adds the property to _overwriteProps which is why we need to pop() here.
			}

			if (_hasPriority) {
				//reorders the linked list in order of pr (priority)
				while (pt) {
					next = pt._next;
					pt2 = first;
					while (pt2 && pt2.pr > pt.pr) {
						pt2 = pt2._next;
					}
					if ((pt._prev = pt2 ? pt2._prev : last)) {
						pt._prev._next = pt;
					} else {
						first = pt;
					}
					if ((pt._next = pt2)) {
						pt2._prev = pt;
					} else {
						last = pt;
					}
					pt = next;
				}
				this._firstPT = first;
			}
			return true;
		};


		p.parse = function(target, vars, pt, plugin) {
			var style = target.style,
				p, sp, bn, en, bs, es, bsfx, esfx, isStr, rel;
			for (p in vars) {
				es = vars[p]; //ending value string
				if (typeof(es) === "function") {
					es = es(_index, _target);
				}
				sp = _specialProps[p]; //SpecialProp lookup.
				if (sp) {
					pt = sp.parse(target, es, p, this, pt, plugin, vars);
				} else if (p.substr(0,2) === "--") { //for tweening CSS variables (which always start with "--"). To maximize performance and simplicity, we bypass CSSPlugin altogether and just add a normal property tween to the tween instance itself.
					this._tween._propLookup[p] = this._addTween.call(this._tween, target.style, "setProperty", _getComputedStyle(target).getPropertyValue(p) + "", es + "", p, false, p);
					continue;
				} else {
					bs = _getStyle(target, p, _cs) + "";
					isStr = (typeof(es) === "string");
					if (p === "color" || p === "fill" || p === "stroke" || p.indexOf("Color") !== -1 || (isStr && _rgbhslExp.test(es))) { //Opera uses background: to define color sometimes in addition to backgroundColor:
						if (!isStr) {
							es = _parseColor(es);
							es = ((es.length > 3) ? "rgba(" : "rgb(") + es.join(",") + ")";
						}
						pt = _parseComplex(style, p, bs, es, true, "transparent", pt, 0, plugin);

					} else if (isStr && _complexExp.test(es)) {
						pt = _parseComplex(style, p, bs, es, true, null, pt, 0, plugin);

					} else {
						bn = parseFloat(bs);
						bsfx = (bn || bn === 0) ? bs.substr((bn + "").length) : ""; //remember, bs could be non-numeric like "normal" for fontWeight, so we should default to a blank suffix in that case.

						if (bs === "" || bs === "auto") {
							if (p === "width" || p === "height") {
								bn = _getDimension(target, p, _cs);
								bsfx = "px";
							} else if (p === "left" || p === "top") {
								bn = _calculateOffset(target, p, _cs);
								bsfx = "px";
							} else {
								bn = (p !== "opacity") ? 0 : 1;
								bsfx = "";
							}
						}

						rel = (isStr && es.charAt(1) === "=");
						if (rel) {
							en = parseInt(es.charAt(0) + "1", 10);
							es = es.substr(2);
							en *= parseFloat(es);
							esfx = es.replace(_suffixExp, "");
						} else {
							en = parseFloat(es);
							esfx = isStr ? es.replace(_suffixExp, "") : "";
						}

						if (esfx === "") {
							esfx = (p in _suffixMap) ? _suffixMap[p] : bsfx; //populate the end suffix, prioritizing the map, then if none is found, use the beginning suffix.
						}

						es = (en || en === 0) ? (rel ? en + bn : en) + esfx : vars[p]; //ensures that any += or -= prefixes are taken care of. Record the end value before normalizing the suffix because we always want to end the tween on exactly what they intended even if it doesn't match the beginning value's suffix.
						//if the beginning/ending suffixes don't match, normalize them...
						if (bsfx !== esfx) if (esfx !== "" || p === "lineHeight") if (en || en === 0) if (bn) { //note: if the beginning value (bn) is 0, we don't need to convert units!
							bn = _convertToPixels(target, p, bn, bsfx);
							if (esfx === "%") {
								bn /= _convertToPixels(target, p, 100, "%") / 100;
								if (vars.strictUnits !== true) { //some browsers report only "px" values instead of allowing "%" with getComputedStyle(), so we assume that if we're tweening to a %, we should start there too unless strictUnits:true is defined. This approach is particularly useful for responsive designs that use from() tweens.
									bs = bn + "%";
								}

							} else if (esfx === "em" || esfx === "rem" || esfx === "vw" || esfx === "vh") {
								bn /= _convertToPixels(target, p, 1, esfx);

							//otherwise convert to pixels.
							} else if (esfx !== "px") {
								en = _convertToPixels(target, p, en, esfx);
								esfx = "px"; //we don't use bsfx after this, so we don't need to set it to px too.
							}
							if (rel) if (en || en === 0) {
								es = (en + bn) + esfx; //the changes we made affect relative calculations, so adjust the end value here.
							}
						}

						if (rel) {
							en += bn;
						}

						if ((bn || bn === 0) && (en || en === 0)) { //faster than isNaN(). Also, previously we required en !== bn but that doesn't really gain much performance and it prevents _parseToProxy() from working properly if beginning and ending values match but need to get tweened by an external plugin anyway. For example, a bezier tween where the target starts at left:0 and has these points: [{left:50},{left:0}] wouldn't work properly because when parsing the last point, it'd match the first (current) one and a non-tweening CSSPropTween would be recorded when we actually need a normal tween (type:0) so that things get updated during the tween properly.
							pt = new CSSPropTween(style, p, bn, en - bn, pt, 0, p, (_autoRound !== false && (esfx === "px" || p === "zIndex")), 0, bs, es);
							pt.xs0 = esfx;
							//DEBUG: _log("tween "+p+" from "+pt.b+" ("+bn+esfx+") to "+pt.e+" with suffix: "+pt.xs0);
						} else if (style[p] === undefined || !es && (es + "" === "NaN" || es == null)) {
							_log("invalid " + p + " tween value: " + vars[p]);
						} else {
							pt = new CSSPropTween(style, p, en || bn || 0, 0, pt, -1, p, false, 0, bs, es);
							pt.xs0 = (es === "none" && (p === "display" || p.indexOf("Style") !== -1)) ? bs : es; //intermediate value should typically be set immediately (end value) except for "display" or things like borderTopStyle, borderBottomStyle, etc. which should use the beginning value during the tween.
							//DEBUG: _log("non-tweening value "+p+": "+pt.xs0);
						}
					}
				}
				if (plugin) if (pt && !pt.plugin) {
					pt.plugin = plugin;
				}
			}
			return pt;
		};


		//gets called every time the tween updates, passing the new ratio (typically a value between 0 and 1, but not always (for example, if an Elastic.easeOut is used, the value can jump above 1 mid-tween). It will always start and 0 and end at 1.
		p.setRatio = function(v) {
			var pt = this._firstPT,
				min = 0.000001,
				val, str, i;
			//at the end of the tween, we set the values to exactly what we received in order to make sure non-tweening values (like "position" or "float" or whatever) are set and so that if the beginning/ending suffixes (units) didn't match and we normalized to px, the value that the user passed in is used here. We check to see if the tween is at its beginning in case it's a from() tween in which case the ratio will actually go from 1 to 0 over the course of the tween (backwards).
			if (v === 1 && (this._tween._time === this._tween._duration || this._tween._time === 0)) {
				while (pt) {
					if (pt.type !== 2) {
						if (pt.r && pt.type !== -1) {
							val = pt.r(pt.s + pt.c);
							if (!pt.type) {
								pt.t[pt.p] = val + pt.xs0;
							} else if (pt.type === 1) { //complex value (one that typically has multiple numbers inside a string, like "rect(5px,10px,20px,25px)"
								i = pt.l;
								str = pt.xs0 + val + pt.xs1;
								for (i = 1; i < pt.l; i++) {
									str += pt["xn"+i] + pt["xs"+(i+1)];
								}
								pt.t[pt.p] = str;
							}
						} else {
							pt.t[pt.p] = pt.e;
						}
					} else {
						pt.setRatio(v);
					}
					pt = pt._next;
				}

			} else if (v || !(this._tween._time === this._tween._duration || this._tween._time === 0) || this._tween._rawPrevTime === -0.000001) {
				while (pt) {
					val = pt.c * v + pt.s;
					if (pt.r) {
						val = pt.r(val);
					} else if (val < min) if (val > -min) {
						val = 0;
					}
					if (!pt.type) {
						pt.t[pt.p] = val + pt.xs0;
					} else if (pt.type === 1) { //complex value (one that typically has multiple numbers inside a string, like "rect(5px,10px,20px,25px)"
						i = pt.l;
						if (i === 2) {
							pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2;
						} else if (i === 3) {
							pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3;
						} else if (i === 4) {
							pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3 + pt.xn3 + pt.xs4;
						} else if (i === 5) {
							pt.t[pt.p] = pt.xs0 + val + pt.xs1 + pt.xn1 + pt.xs2 + pt.xn2 + pt.xs3 + pt.xn3 + pt.xs4 + pt.xn4 + pt.xs5;
						} else {
							str = pt.xs0 + val + pt.xs1;
							for (i = 1; i < pt.l; i++) {
								str += pt["xn"+i] + pt["xs"+(i+1)];
							}
							pt.t[pt.p] = str;
						}

					} else if (pt.type === -1) { //non-tweening value
						pt.t[pt.p] = pt.xs0;

					} else if (pt.setRatio) { //custom setRatio() for things like SpecialProps, external plugins, etc.
						pt.setRatio(v);
					}
					pt = pt._next;
				}

			//if the tween is reversed all the way back to the beginning, we need to restore the original values which may have different units (like % instead of px or em or whatever).
			} else {
				while (pt) {
					if (pt.type !== 2) {
						pt.t[pt.p] = pt.b;
					} else {
						pt.setRatio(v);
					}
					pt = pt._next;
				}
			}
		};

		/**
		 * @private
		 * Forces rendering of the target's transforms (rotation, scale, etc.) whenever the CSSPlugin's setRatio() is called.
		 * Basically, this tells the CSSPlugin to create a CSSPropTween (type 2) after instantiation that runs last in the linked
		 * list and calls the appropriate (3D or 2D) rendering function. We separate this into its own method so that we can call
		 * it from other plugins like BezierPlugin if, for example, it needs to apply an autoRotation and this CSSPlugin
		 * doesn't have any transform-related properties of its own. You can call this method as many times as you
		 * want and it won't create duplicate CSSPropTweens.
		 *
		 * @param {boolean} threeD if true, it should apply 3D tweens (otherwise, just 2D ones are fine and typically faster)
		 */
		p._enableTransforms = function(threeD) {
			this._transform = this._transform || _getTransform(this._target, _cs, true); //ensures that the element has a _gsTransform property with the appropriate values.
			this._transformType = (!(this._transform.svg && _useSVGTransformAttr) && (threeD || this._transformType === 3)) ? 3 : 2;
		};

		var lazySet = function(v) {
			this.t[this.p] = this.e;
			this.data._linkCSSP(this, this._next, null, true); //we purposefully keep this._next even though it'd make sense to null it, but this is a performance optimization, as this happens during the while (pt) {} loop in setRatio() at the bottom of which it sets pt = pt._next, so if we null it, the linked list will be broken in that loop.
		};
		/** @private Gives us a way to set a value on the first render (and only the first render). **/
		p._addLazySet = function(t, p, v) {
			var pt = this._firstPT = new CSSPropTween(t, p, 0, 0, this._firstPT, 2);
			pt.e = v;
			pt.setRatio = lazySet;
			pt.data = this;
		};

		/** @private **/
		p._linkCSSP = function(pt, next, prev, remove) {
			if (pt) {
				if (next) {
					next._prev = pt;
				}
				if (pt._next) {
					pt._next._prev = pt._prev;
				}
				if (pt._prev) {
					pt._prev._next = pt._next;
				} else if (this._firstPT === pt) {
					this._firstPT = pt._next;
					remove = true; //just to prevent resetting this._firstPT 5 lines down in case pt._next is null. (optimized for speed)
				}
				if (prev) {
					prev._next = pt;
				} else if (!remove && this._firstPT === null) {
					this._firstPT = pt;
				}
				pt._next = next;
				pt._prev = prev;
			}
			return pt;
		};

		p._mod = function(lookup) {
			var pt = this._firstPT;
			while (pt) {
				if (typeof(lookup[pt.p]) === "function") { //only gets called by RoundPropsPlugin (ModifyPlugin manages all the rendering internally for CSSPlugin properties that need modification). Remember, we handle rounding a bit differently in this plugin for performance reasons, leveraging "r" as an indicator that the value should be rounded internally.
					pt.r = lookup[pt.p];
				}
				pt = pt._next;
			}
		};

		//we need to make sure that if alpha or autoAlpha is killed, opacity is too. And autoAlpha affects the "visibility" property.
		p._kill = function(lookup) {
			var copy = lookup,
				pt, p, xfirst;
			if (lookup.autoAlpha || lookup.alpha) {
				copy = {};
				for (p in lookup) { //copy the lookup so that we're not changing the original which may be passed elsewhere.
					copy[p] = lookup[p];
				}
				copy.opacity = 1;
				if (copy.autoAlpha) {
					copy.visibility = 1;
				}
			}
			if (lookup.className && (pt = this._classNamePT)) { //for className tweens, we need to kill any associated CSSPropTweens too; a linked list starts at the className's "xfirst".
				xfirst = pt.xfirst;
				if (xfirst && xfirst._prev) {
					this._linkCSSP(xfirst._prev, pt._next, xfirst._prev._prev); //break off the prev
				} else if (xfirst === this._firstPT) {
					this._firstPT = pt._next;
				}
				if (pt._next) {
					this._linkCSSP(pt._next, pt._next._next, xfirst._prev);
				}
				this._classNamePT = null;
			}
			pt = this._firstPT;
			while (pt) {
				if (pt.plugin && pt.plugin !== p && pt.plugin._kill) { //for plugins that are registered with CSSPlugin, we should notify them of the kill.
					pt.plugin._kill(lookup);
					p = pt.plugin;
				}
				pt = pt._next;
			}
			return TweenLite["TweenPlugin"].prototype._kill.call(this, copy);
		};



		//used by cascadeTo() for gathering all the style properties of each child element into an array for comparison.
		var _getChildStyles = function(e, props, targets) {
				var children, i, child, type;
				if (e.slice) {
					i = e.length;
					while (--i > -1) {
						_getChildStyles(e[i], props, targets);
					}
					return;
				}
				children = e.childNodes;
				i = children.length;
				while (--i > -1) {
					child = children[i];
					type = child.type;
					if (child.style) {
						props.push(_getAllStyles(child));
						if (targets) {
							targets.push(child);
						}
					}
					if ((type === 1 || type === 9 || type === 11) && child.childNodes.length) {
						_getChildStyles(child, props, targets);
					}
				}
			};

		/**
		 * Typically only useful for className tweens that may affect child elements, this method creates a TweenLite
		 * and then compares the style properties of all the target's child elements at the tween's start and end, and
		 * if any are different, it also creates tweens for those and returns an array containing ALL of the resulting
		 * tweens (so that you can easily add() them to a TimelineLite, for example). The reason this functionality is
		 * wrapped into a separate static method of CSSPlugin instead of being integrated into all regular className tweens
		 * is because it creates entirely new tweens that may have completely different targets than the original tween,
		 * so if they were all lumped into the original tween instance, it would be inconsistent with the rest of the API
		 * and it would create other problems. For example:
		 *  - If I create a tween of elementA, that tween instance may suddenly change its target to include 50 other elements (unintuitive if I specifically defined the target I wanted)
		 *  - We can't just create new independent tweens because otherwise, what happens if the original/parent tween is reversed or pause or dropped into a TimelineLite for tight control? You'd expect that tween's behavior to affect all the others.
		 *  - Analyzing every style property of every child before and after the tween is an expensive operation when there are many children, so this behavior shouldn't be imposed on all className tweens by default, especially since it's probably rare that this extra functionality is needed.
		 *
		 * @param {Object} target object to be tweened
		 * @param {number} Duration in seconds (or frames for frames-based tweens)
		 * @param {Object} Object containing the end values, like {className:"newClass", ease:Linear.easeNone}
		 * @return {Array} An array of TweenLite instances
		 */
		CSSPlugin.cascadeTo = function(target, duration, vars) {
			var tween = TweenLite["default"].to(target, duration, vars),
				results = [tween],
				b = [],
				e = [],
				targets = [],
				_reservedProps = TweenLite["default"]._internals.reservedProps,
				i, difs, p, from;
			target = tween._targets || tween.target;
			_getChildStyles(target, b, targets);
			tween.render(duration, true, true);
			_getChildStyles(target, e);
			tween.render(0, true, true);
			tween._enabled(true);
			i = targets.length;
			while (--i > -1) {
				difs = _cssDif(targets[i], b[i], e[i]);
				if (difs.firstMPT) {
					difs = difs.difs;
					for (p in vars) {
						if (_reservedProps[p]) {
							difs[p] = vars[p];
						}
					}
					from = {};
					for (p in difs) {
						from[p] = b[i][p];
					}
					results.push(TweenLite["default"].fromTo(targets[i], duration, from, difs));
				}
			}
			return results;
		};

		TweenLite["TweenPlugin"].activate([CSSPlugin]);
		return CSSPlugin;

	}, true);

var CSSPlugin_CSSPlugin = TweenLite["globals"].CSSPlugin;

// CONCATENATED MODULE: ./node_modules/gsap/Draggable.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Draggable", function() { return Draggable_Draggable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Draggable_Draggable; });
/*!
 * VERSION: 0.16.5
 * DATE: 2018-08-27
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * Requires TweenLite and CSSPlugin version 1.17.0 or later (TweenMax contains both TweenLite and CSSPlugin). ThrowPropsPlugin is required for momentum-based continuation of movement after the mouse/touch is released (ThrowPropsPlugin is a membership benefit of Club GreenSock - http://greensock.com/club/).
 *
 * @license Copyright (c) 2008-2018, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 *
 * @author: Jack Doyle, jack@greensock.com
 */




	TweenLite["_gsScope"]._gsDefine("utils.Draggable", ["events.EventDispatcher","TweenLite","plugins.CSSPlugin"], function() {

		var _tempVarsXY = {css:{}, data:"_draggable"}, //speed optimization - we reuse the same vars object for x/y TweenLite.set() calls to minimize garbage collection tasks and improve performance.
			_tempVarsX = {css:{}, data:"_draggable"},
			_tempVarsY = {css:{}, data:"_draggable"},
			_tempVarsRotation = {css:{}},
			_globals = TweenLite["_gsScope"]._gsDefine.globals,
			_tempEvent = {}, //for populating with pageX/pageY in old versions of IE
			_emptyFunc = function() { return false; },
			_dummyElement = {style:{}, appendChild:_emptyFunc, removeChild:_emptyFunc},
			_doc = TweenLite["_gsScope"].document || {createElement: function() {return _dummyElement;}},
			_docElement = _doc.documentElement || {},
			_createElement = function(type) {
				return _doc.createElementNS ? _doc.createElementNS("http://www.w3.org/1999/xhtml", type) : _doc.createElement(type);
			},
			_tempDiv = _createElement("div"),
			_emptyArray = [],
			_RAD2DEG = 180 / Math.PI,
			_max = 999999999999999,
			_getTime = Date.now || function() {return new Date().getTime();},
			_isOldIE = !!(!_doc.addEventListener && _doc.all),
			_placeholderDiv = _doc.createElement("div"),
			_renderQueue = [],
			_lookup = {}, //when a Draggable is created, the target gets a unique _gsDragID property that allows gets associated with the Draggable instance for quick lookups in Draggable.get(). This avoids circular references that could cause gc problems.
			_lookupCount = 0,
			_clickableTagExp = /^(?:a|input|textarea|button|select)$/i,
			_dragCount = 0, //total number of elements currently being dragged
			_prefix,
			_isMultiTouching,
			_isAndroid = (TweenLite["_gsScope"].navigator && TweenLite["_gsScope"].navigator.userAgent.toLowerCase().indexOf("android") !== -1), //Android handles touch events in an odd way and it's virtually impossible to "feature test" so we resort to UA sniffing
			_lastDragTime = 0,
			_temp1 = {}, // a simple object we reuse and populate (usually x/y properties) to conserve memory and improve performance.
			_windowProxy = {}, //memory/performance optimization - we reuse this object during autoScroll to store window-related bounds/offsets.
			_slice = function(a) { //don't use Array.prototype.slice.call(target, 0) because that doesn't work in IE8 with a NodeList that's returned by querySelectorAll()
				if (typeof(a) === "string") {
					a = TweenLite["default"].selector(a);
				}
				if (!a || a.nodeType) { //if it's not an array, wrap it in one.
					return [a];
				}
				var b = [],
					l = a.length,
					i;
				for (i = 0; i !== l; b.push(a[i++]));
				return b;
			},
			_copy = function(obj, factor) {
				var copy = {}, p;
				if (factor) {
					for (p in obj) {
						copy[p] = obj[p] * factor;
					}
				} else {
					for (p in obj) {
						copy[p] = obj[p];
					}
				}
				return copy;
			},
			ThrowPropsPlugin,

			_renderQueueTick = function() {
				var i = _renderQueue.length;
				while (--i > -1) {
					_renderQueue[i]();
				}
			},
			_addToRenderQueue = function(func) {
				_renderQueue.push(func);
				if (_renderQueue.length === 1) {
					TweenLite["default"].ticker.addEventListener("tick", _renderQueueTick, this, false, 1);
				}
			},
			_removeFromRenderQueue = function(func) {
				var i = _renderQueue.length;
				while (--i > -1) {
					if (_renderQueue[i] === func) {
						_renderQueue.splice(i, 1);
					}
				}
				TweenLite["default"].to(_renderQueueTimeout, 0, {overwrite:"all", delay:15, onComplete:_renderQueueTimeout, data:"_draggable"}); //remove the "tick" listener only after the render queue is empty for 15 seconds (to improve performance). Adding/removing it constantly for every click/touch wouldn't deliver optimal speed, and we also don't want the ticker to keep calling the render method when things are idle for long periods of time (we want to improve battery life on mobile devices).
			},
			_renderQueueTimeout = function() {
				if (!_renderQueue.length) {
					TweenLite["default"].ticker.removeEventListener("tick", _renderQueueTick);
				}
			},

			_extend = function(obj, defaults) {
				var p;
				for (p in defaults) {
					if (obj[p] === undefined) {
						obj[p] = defaults[p];
					}
				}
				return obj;
			},
			_getDocScrollTop = function() {
				return (window.pageYOffset != null) ? window.pageYOffset : (_doc.scrollTop != null) ? _doc.scrollTop : _docElement.scrollTop || _doc.body.scrollTop || 0;
			},
			_getDocScrollLeft = function() {
				return (window.pageXOffset != null) ? window.pageXOffset : (_doc.scrollLeft != null) ? _doc.scrollLeft : _docElement.scrollLeft || _doc.body.scrollLeft || 0;
			},
			_addScrollListener = function(e, callback) {
				_addListener(e, "scroll", callback);
				if (!_isRoot(e.parentNode)) {
					_addScrollListener(e.parentNode, callback);
				}
			},
			_removeScrollListener = function(e, callback) {
				_removeListener(e, "scroll", callback);
				if (!_isRoot(e.parentNode)) {
					_removeScrollListener(e.parentNode, callback);
				}
			},
			_isRoot = function (e) {
				return !!(!e || e === _docElement || e === _doc || e === _doc.body || e === window || !e.nodeType || !e.parentNode);
			},
			_getMaxScroll = function(element, axis) {
				var dim = (axis === "x") ? "Width" : "Height",
					scroll = "scroll" + dim,
					client = "client" + dim,
					body = _doc.body;
				return Math.max(0, _isRoot(element) ? Math.max(_docElement[scroll], body[scroll]) - (window["inner" + dim] || _docElement[client] || body[client]) : element[scroll] - element[client]);
			},
			_recordMaxScrolls = function(e) { //records _gsMaxScrollX and _gsMaxScrollY properties for the element and all ancestors up the chain so that we can cap it, otherwise dragging beyond the edges with autoScroll on can endlessly scroll.
				var isRoot = _isRoot(e),
					x = _getMaxScroll(e, "x"),
					y = _getMaxScroll(e, "y");
				if (isRoot) {
					e = _windowProxy;
				} else {
					_recordMaxScrolls(e.parentNode);
				}
				e._gsMaxScrollX = x;
				e._gsMaxScrollY = y;
				e._gsScrollX = e.scrollLeft || 0;
				e._gsScrollY = e.scrollTop || 0;
			},

			//just used for IE8 and earlier to normalize events and populate pageX/pageY
			_populateIEEvent = function(e, preventDefault) {
				e = e || window.event;
				_tempEvent.pageX = e.clientX + _doc.body.scrollLeft + _docElement.scrollLeft;
				_tempEvent.pageY = e.clientY + _doc.body.scrollTop + _docElement.scrollTop;
				if (preventDefault) {
					e.returnValue = false;
				}
				return _tempEvent;
			},

			//grabs the first element it finds (and we include the window as an element), so if it's selector text, it'll feed that value to TweenLite.selector, if it's a jQuery object or some other selector engine's result, it'll grab the first one, and same for an array. If the value doesn't contain a DOM element, it'll just return null.
			_unwrapElement = function(value) {
				if (!value) {
					return value;
				}
				if (typeof(value) === "string") {
					value = TweenLite["default"].selector(value);
				}
				if (value.length && value !== window && value[0] && value[0].style && !value.nodeType) {
					value = value[0];
				}
				return (value === window || (value.nodeType && value.style)) ? value : null;
			},

			_checkPrefix = function(e, p) {
				var s = e.style,
					capped, i, a;
				if (s[p] === undefined) {
					a = ["O","Moz","ms","Ms","Webkit"];
					i = 5;
					capped = p.charAt(0).toUpperCase() + p.substr(1);
					while (--i > -1 && s[a[i]+capped] === undefined) { }
					if (i < 0) {
						return "";
					}
					_prefix = (i === 3) ? "ms" : a[i];
					p = _prefix + capped;
				}
				return p;
			},

			_setStyle = function(e, p, value) {
				var s = e.style;
				if (!s) {
					return;
				}
				if (s[p] === undefined) {
					p = _checkPrefix(e, p);
				}
				if (value == null) {
					if (s.removeProperty) {
						s.removeProperty(p.replace(/([A-Z])/g, "-$1").toLowerCase());
					} else { //note: old versions of IE use "removeAttribute()" instead of "removeProperty()"
						s.removeAttribute(p);
					}
				} else if (s[p] !== undefined) {
					s[p] = value;
				}
			},

			_getCSFunc = (typeof(window) !== "undefined" ? window : _doc.defaultView || {getComputedStyle:function() {}}).getComputedStyle,
			_getComputedStyle = function(e, s) {
				return _getCSFunc((e instanceof Element) ? e : e.host || (e.parentNode || {}).host || e, s); //the "host" stuff helps to accommodate ShadowDom objects.
			},
			_horizExp = /(?:Left|Right|Width)/i,
			_suffixExp = /(?:\d|\-|\+|=|#|\.)*/g,
			_convertToPixels = function(t, p, v, sfx, recurse) {
				if (sfx === "px" || !sfx) { return v; }
				if (sfx === "auto" || !v) { return 0; }
				var horiz = _horizExp.test(p),
					node = t,
					style = _tempDiv.style,
					neg = (v < 0),
					pix;
				if (neg) {
					v = -v;
				}
				if (sfx === "%" && p.indexOf("border") !== -1) {
					pix = (v / 100) * (horiz ? t.clientWidth : t.clientHeight);
				} else {
					style.cssText = "border:0 solid red;position:" + _getStyle(t, "position", true) + ";line-height:0;";
					if (sfx === "%" || !node.appendChild) {
						node = t.parentNode || _doc.body;
						style[(horiz ? "width" : "height")] = v + sfx;
					} else {
						style[(horiz ? "borderLeftWidth" : "borderTopWidth")] = v + sfx;
					}
					node.appendChild(_tempDiv);
					pix = parseFloat(_tempDiv[(horiz ? "offsetWidth" : "offsetHeight")]);
					node.removeChild(_tempDiv);
					if (pix === 0 && !recurse) {
						pix = _convertToPixels(t, p, v, sfx, true);
					}
				}
				return neg ? -pix : pix;
			},
			_calculateOffset = function(t, p) { //for figuring out "top" or "left" in px when it's "auto". We need to factor in margin with the offsetLeft/offsetTop
				if (_getStyle(t, "position", true) !== "absolute") { return 0; }
				var dim = ((p === "left") ? "Left" : "Top"),
					v = _getStyle(t, "margin" + dim, true);
				return t["offset" + dim] - (_convertToPixels(t, p, parseFloat(v), (v + "").replace(_suffixExp, "")) || 0);
			},

			_getStyle = function(element, prop, keepUnits) {
				var rv = (element._gsTransform || {})[prop],
					cs;
				if (rv || rv === 0) {
					return rv;
				} else if (element.style && element.style[prop]) { //shadow dom elements don't have "style".
					rv = element.style[prop];
				} else if ((cs = _getComputedStyle(element))) {
					rv = cs.getPropertyValue(prop.replace(/([A-Z])/g, "-$1").toLowerCase());
					rv = (rv || cs.length) ? rv : cs[prop]; //Opera behaves VERY strangely - length is usually 0 and cs[prop] is the only way to get accurate results EXCEPT when checking for -o-transform which only works with cs.getPropertyValue()!
				} else if (element.currentStyle) {
					rv = element.currentStyle[prop];
				}
				if (rv === "auto" && (prop === "top" || prop === "left")) {
					rv = _calculateOffset(element, prop);
				}
				return keepUnits ? rv : parseFloat(rv) || 0;
			},

			_dispatchEvent = function(instance, type, callbackName) {
				var vars = instance.vars,
					callback = vars[callbackName],
					listeners = instance._listeners[type];
				if (typeof(callback) === "function") {
					callback.apply(vars[callbackName + "Scope"] || vars.callbackScope || instance, vars[callbackName + "Params"] || [instance.pointerEvent]);
				}
				if (listeners) {
					instance.dispatchEvent(type);
				}
			},
			_getBounds = function(obj, context) { //accepts any of the following: a DOM element, jQuery object, selector text, or an object defining bounds as {top, left, width, height} or {minX, maxX, minY, maxY}. Returns an object with left, top, width, and height properties.
				var e = _unwrapElement(obj),
					top, left, offset;
				if (!e) {
					if (obj.left !== undefined) {
						offset = _getOffsetTransformOrigin(context); //the bounds should be relative to the origin
						return {left: obj.left - offset.x, top: obj.top - offset.y, width: obj.width, height: obj.height};
					}
					left = obj.min || obj.minX || obj.minRotation || 0;
					top = obj.min || obj.minY || 0;
					return {left:left, top:top, width:(obj.max || obj.maxX || obj.maxRotation || 0) - left, height:(obj.max || obj.maxY || 0) - top};
				}
				return _getElementBounds(e, context);
			},

			_svgBorderFactor,
			_svgBorderScales,
			_svgScrollOffset,
			_hasBorderBug,
			_hasReparentBug,//some browsers, like Chrome 49, alter the offsetTop/offsetLeft/offsetParent of elements when a non-identity transform is applied.
			_setEnvironmentVariables = function() { //some browsers factor the border into the SVG coordinate space, some don't (like Firefox). Some apply transforms to them, some don't. We feature-detect here so we know how to handle the border(s). We can't do this immediately - we must wait for the document.body to exist.
				if (!_doc.createElementNS) {
					_svgBorderFactor = 0;
					_svgBorderScales = false;
					return;
				}
				var div = _createElement("div"),
					svg = _doc.createElementNS("http://www.w3.org/2000/svg", "svg"),
					wrapper = _createElement("div"),
					style = div.style,
					parent = _doc.body || _docElement,
					isFlex = (_getStyle(parent, "display", true) === "flex"), //Firefox bug causes getScreenCTM() to return null when parent is display:flex and the element isn't rendered inside the window (like if it's below the scroll position)
					matrix, e1, point, oldValue;
				if (_doc.body && _transformProp) {
					style.position = "absolute";
					parent.appendChild(wrapper);
					wrapper.appendChild(div);
					oldValue = div.offsetParent;
					wrapper.style[_transformProp] = "rotate(1deg)";
					_hasReparentBug = (div.offsetParent === oldValue);
					wrapper.style.position = "absolute";
					style.height = "10px";
					oldValue = div.offsetTop;
					wrapper.style.border = "5px solid red";
					_hasBorderBug = (oldValue !== div.offsetTop); //some browsers, like Firefox 38, cause the offsetTop/Left to be affected by a parent's border.
					parent.removeChild(wrapper);
				}
				style = svg.style;
				svg.setAttributeNS(null, "width", "400px");
				svg.setAttributeNS(null, "height", "400px");
				svg.setAttributeNS(null, "viewBox", "0 0 400 400");
				style.display = "block";
				style.boxSizing = "border-box";
				style.border = "0px solid red";
				style.transform = "none";
				// in some browsers (like certain flavors of Android), the getScreenCTM() matrix is contaminated by the scroll position. We can run some logic here to detect that condition, but we ended up not needing this because we found another workaround using getBoundingClientRect().
				div.style.cssText = "width:100px;height:100px;overflow:scroll;-ms-overflow-style:none;";
				parent.appendChild(div);
				div.appendChild(svg);
				point = svg.createSVGPoint().matrixTransform(svg.getScreenCTM());
				e1 = point.y;
				div.scrollTop = 100;
				point.x = point.y = 0;
				point = point.matrixTransform(svg.getScreenCTM());
				_svgScrollOffset = (e1 - point.y < 100.1) ? 0 : e1 - point.y - 150;
				div.removeChild(svg);
				parent.removeChild(div);
				// -- end _svgScrollOffset calculation.
				parent.appendChild(svg);
				if (isFlex) {
					parent.style.display = "block"; //Firefox bug causes getScreenCTM() to return null when parent is display:flex and the element isn't rendered inside the window (like if it's below the scroll position)
				}
				matrix = svg.getScreenCTM();
				e1 = matrix.e;
				style.border = "50px solid red";
				matrix = svg.getScreenCTM();
				if (e1 === 0 && matrix.e === 0 && matrix.f === 0 && matrix.a === 1) { //Opera has a bunch of bugs - it doesn't adjust the x/y of the matrix, nor does it scale when box-sizing is border-box but it does so elsewhere; to get the correct behavior we set _svgBorderScales to true.
					_svgBorderFactor = 1;
					_svgBorderScales = true;
				} else {
					_svgBorderFactor = (e1 !== matrix.e) ? 1 : 0;
					_svgBorderScales = (matrix.a !== 1);
				}
				if (isFlex) {
					parent.style.display = "flex";
				}
				parent.removeChild(svg);
			},

			_supports3D = (_checkPrefix(_tempDiv, "perspective") !== ""),

			// start matrix and point conversion methods...
			_transformOriginProp = _checkPrefix(_tempDiv, "transformOrigin").replace(/^ms/g, "Ms").replace(/([A-Z])/g, "-$1").toLowerCase(),
			_transformProp = _checkPrefix(_tempDiv, "transform"),
			_transformPropCSS = _transformProp.replace(/^ms/g, "Ms").replace(/([A-Z])/g, "-$1").toLowerCase(),
			_point1 = {}, //we reuse _point1 and _point2 objects inside matrix and point conversion methods to conserve memory and minimize garbage collection tasks.
			_point2 = {},
			_SVGElement = TweenLite["_gsScope"].SVGElement,
			_isSVG = function(e) {
				return !!(_SVGElement && typeof(e.getBBox) === "function" && e.getCTM && (!e.parentNode || (e.parentNode.getBBox && e.parentNode.getCTM)));
			},
			_isIE10orBelow = (TweenLite["_gsScope"].navigator && (((/MSIE ([0-9]{1,}[\.0-9]{0,})/).exec(TweenLite["_gsScope"].navigator.userAgent) || (/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/).exec(TweenLite["_gsScope"].navigator.userAgent)) && parseFloat( RegExp.$1 ) < 11)), //Ideally we'd avoid user agent sniffing, but there doesn't seem to be a way to feature-detect and sense a border-related bug that only affects IE10 and IE9.
			_tempTransforms = [],
			_tempElements = [],
			_getSVGOffsets = function(e) { //SVG elements don't always report offsetTop/offsetLeft/offsetParent at all (I'm looking at you, Firefox 29 and Android), so we have to do some work to manufacture those values. You can pass any SVG element and it'll spit back an object with offsetTop, offsetLeft, offsetParent, scaleX, and scaleY properties. We need the scaleX and scaleY to handle the way SVG can resize itself based on the container.
				if (!e.getBoundingClientRect || !e.parentNode || !_transformProp) {
					return {offsetTop:0, offsetLeft:0, scaleX:1, scaleY:1, offsetParent:_docElement};
				}
				if (Draggable.cacheSVGData !== false && e._dCache && e._dCache.lastUpdate === TweenLite["default"].ticker.frame) { //performance optimization. Assume that if the offsets are requested again on the same tick, we can just feed back the values we already calculated (no need to keep recalculating until another tick elapses).
					return e._dCache;
				}
				var curElement = e,
					cache = _cache(e),
					eRect, parentRect, offsetParent, cs, m, i, point1, point2, borderWidth, borderHeight, width, height;
				cache.lastUpdate = TweenLite["default"].ticker.frame;
				if (e.getBBox && !cache.isSVGRoot) { //if it's a nested/child SVG element, we must find the parent SVG canvas and measure the offset from there.
					curElement = e.parentNode;
					eRect = e.getBBox();
					while (curElement && (curElement.nodeName + "").toLowerCase() !== "svg") {
						curElement = curElement.parentNode;
					}
					cs = _getSVGOffsets(curElement);
					cache.offsetTop = eRect.y * cs.scaleY;
					cache.offsetLeft = eRect.x * cs.scaleX;
					cache.scaleX = cs.scaleX;
					cache.scaleY = cs.scaleY;
					cache.offsetParent = curElement || _docElement;
					return cache;
				}
				//only root SVG elements continue here...
				offsetParent = cache.offsetParent;
				if (offsetParent === _doc.body) {
					offsetParent = _docElement; //avoids problems with margins/padding on the body
				}
				//walk up the ancestors and record any non-identity transforms (and reset them to "none") until we reach the offsetParent. We must do this so that the getBoundingClientRect() is accurate for measuring the offsetTop/offsetLeft. We'll revert the values later...
				_tempElements.length = _tempTransforms.length = 0;
				while (curElement) {
					m = _getStyle(curElement, _transformProp, true);
					if (m !== "matrix(1, 0, 0, 1, 0, 0)" && m !== "none" && m !== "translate3d(0px, 0px, 0px)") {
						_tempElements.push(curElement);
						_tempTransforms.push(curElement.style[_transformProp]);
						curElement.style[_transformProp] = "none";
					}
					if (curElement === offsetParent) {
						break;
					}
					curElement = curElement.parentNode;
				}
				parentRect = offsetParent.getBoundingClientRect();
				m = e.getScreenCTM();

				point2 = e.createSVGPoint();
				point1 = point2.matrixTransform(m);
				cache.scaleX = Math.sqrt(m.a * m.a + m.b * m.b);
				cache.scaleY = Math.sqrt(m.d * m.d + m.c * m.c);
				if (_svgBorderFactor === undefined) {
					_setEnvironmentVariables();
				}
				if (cache.borderBox && !_svgBorderScales && e.getAttribute("width")) { //some browsers (like Safari) don't properly scale the matrix to accommodate the border when box-sizing is border-box, so we must calculate it here...
					cs = _getComputedStyle(e) || {};
					borderWidth = (parseFloat(cs.borderLeftWidth) + parseFloat(cs.borderRightWidth)) || 0;
					borderHeight = (parseFloat(cs.borderTopWidth) + parseFloat(cs.borderBottomWidth)) || 0;
					width = parseFloat(cs.width) || 0;
					height = parseFloat(cs.height) || 0;
					cache.scaleX *= (width - borderWidth) / width;
					cache.scaleY *= (height - borderHeight) / height;
				}
				if (_svgScrollOffset) { //some browsers (like Chrome for Android) have bugs in the way getScreenCTM() is reported (it doesn't factor in scroll position), so we must revert to a more expensive technique for calculating offsetTop/Left.
					eRect = e.getBoundingClientRect();
					cache.offsetLeft = eRect.left - parentRect.left;
					cache.offsetTop = eRect.top - parentRect.top;
				} else {
					cache.offsetLeft = point1.x - parentRect.left;
					cache.offsetTop = point1.y - parentRect.top;
				}
				cache.offsetParent = offsetParent;
				i = _tempElements.length;
				while (--i > -1) {
					_tempElements[i].style[_transformProp] = _tempTransforms[i];
				}
				return cache;
			},
			_getOffsetTransformOrigin = function(e, decoratee) { //returns the x/y position of the transformOrigin of the element, in its own local coordinate system (pixels), offset from the top left corner.
				decoratee = decoratee || {};
				if (!e || e === _docElement || !e.parentNode || e === window) {
					return {x:0, y:0};
				}
				var cs = _getComputedStyle(e),
					v = (_transformOriginProp && cs) ? cs.getPropertyValue(_transformOriginProp) : "50% 50%",
					a = v.split(" "),
					x = (v.indexOf("left") !== -1) ? "0%" : (v.indexOf("right") !== -1) ? "100%" : a[0],
					y = (v.indexOf("top") !== -1) ? "0%" : (v.indexOf("bottom") !== -1) ? "100%" : a[1];
				if (y === "center" || y == null) {
					y = "50%";
				}
				if (x === "center" || isNaN(parseFloat(x))) { //remember, the user could flip-flop the values and say "bottom center" or "center bottom", etc. "center" is ambiguous because it could be used to describe horizontal or vertical, hence the isNaN(). If there's an "=" sign in the value, it's relative.
					x = "50%";
				}
				if (e.getBBox && _isSVG(e)) { //SVG elements must be handled in a special way because their origins are calculated from the top left.
					if (!e._gsTransform) {
						TweenLite["default"].set(e, {x:"+=0", overwrite:false}); //forces creation of the _gsTransform where we store all the transform components including xOrigin and yOrigin for SVG elements, as of GSAP 1.15.0 which also takes care of calculating the origin from the upper left corner of the SVG canvas.
						if (e._gsTransform.xOrigin === undefined) {
							console.log("Draggable requires at least GSAP 1.17.0");
						}
					}
					v = e.getBBox();
					decoratee.x = (e._gsTransform.xOrigin - v.x);
					decoratee.y = (e._gsTransform.yOrigin - v.y);
				} else {
					if (e.getBBox && (x + y).indexOf("%") !== -1) { //Firefox doesn't report offsetWidth/height on <svg> elements.
						e = e.getBBox();
						e = {offsetWidth: e.width, offsetHeight: e.height};
					}
					decoratee.x = ((x.indexOf("%") !== -1) ? e.offsetWidth * parseFloat(x) / 100 : parseFloat(x));
					decoratee.y = ((y.indexOf("%") !== -1) ? e.offsetHeight * parseFloat(y) / 100 : parseFloat(y));
				}
				return decoratee;
			},
			_cache = function(e) { //computes some important values and stores them in a _dCache object attached to the element itself so that we can optimize performance
				if (Draggable.cacheSVGData !== false && e._dCache && e._dCache.lastUpdate === TweenLite["default"].ticker.frame) { //performance optimization. Assume that if the offsets are requested again on the same tick, we can just feed back the values we already calculated (no need to keep recalculating until another tick elapses).
					return e._dCache;
				}
				var cache = e._dCache = e._dCache || {},
					cs = _getComputedStyle(e),
					isSVG = (e.getBBox && _isSVG(e)),
					isSVGRoot = ((e.nodeName + "").toLowerCase() === "svg"),
					curSVG;
				cache.isSVG = isSVG;
				cache.isSVGRoot = isSVGRoot;
				cache.borderBox = (cs.boxSizing === "border-box");
				cache.computedStyle = cs;
				if (isSVGRoot) { //some browsers don't report parentNode on SVG elements.
					curSVG = e.parentNode || _docElement;
					curSVG.insertBefore(_tempDiv, e);
					cache.offsetParent = _tempDiv.offsetParent || _docElement; //in some cases, Firefox still reports offsetParent as null.
					curSVG.removeChild(_tempDiv);
				} else if (isSVG) {
					curSVG = e.parentNode;
					while (curSVG && (curSVG.nodeName + "").toLowerCase() !== "svg") { //offsetParent is always the SVG canvas for SVG elements.
						curSVG = curSVG.parentNode;
					}
					cache.offsetParent = curSVG;
				} else {
					cache.offsetParent = e.offsetParent;
				}
				return cache;
			},
			_getOffset2DMatrix = function(e, offsetOrigin, parentOffsetOrigin, zeroOrigin, isBase) {  //"isBase" helps us discern context - it should only be true when the element is the base one (the one at which we're starting to walk up the chain). It only matters in cases when it's an <svg> element itself because that's a case when we don't apply scaling.
				if (e === window || !e || !e.style || !e.parentNode) {
					return [1,0,0,1,0,0];
				}
				var cache = e._dCache || _cache(e),
					parent = e.parentNode,
					parentCache = parent._dCache || _cache(parent),
					cs = cache.computedStyle,
					parentOffsetParent = cache.isSVG ? parentCache.offsetParent : parent.offsetParent,
					m, isRoot, offsets, rect, t, sx, sy, offsetX, offsetY, parentRect, borderTop, borderLeft, borderTranslateX, borderTranslateY;
				m = (cache.isSVG && (e.style[_transformProp] + "").indexOf("matrix") !== -1) ? e.style[_transformProp] : cs ? cs.getPropertyValue(_transformPropCSS) : e.currentStyle ? e.currentStyle[_transformProp] : "1,0,0,1,0,0"; //some browsers (like Chrome 40) don't correctly report transforms that are applied inline on an SVG element (they don't get included in the computed style), so we double-check here and accept matrix values
				if (e.getBBox && (e.getAttribute("transform") + "").indexOf("matrix") !== -1) { //SVG can store transform data in its "transform" attribute instead of the CSS, so look for that here (only accept matrix()).
					m = e.getAttribute("transform");
				}
				m = (m + "").match(/(?:\-|\.|\b)(\d|\.|e\-)+/g) || [1,0,0,1,0,0];
				if (m.length > 6) {
					m = [m[0], m[1], m[4], m[5], m[12], m[13]];
				}
				if (zeroOrigin) {
					m[4] = m[5] = 0;
				} else if (cache.isSVG && (t = e._gsTransform) && (t.xOrigin || t.yOrigin)) {
					//SVGs handle origin very differently. Factor in GSAP's handling of origin values here:
					m[0] = parseFloat(m[0]);
					m[1] = parseFloat(m[1]);
					m[2] = parseFloat(m[2]);
					m[3] = parseFloat(m[3]);
					m[4] = parseFloat(m[4]) - (t.xOrigin - (t.xOrigin * m[0] + t.yOrigin * m[2]));
					m[5] = parseFloat(m[5]) - (t.yOrigin - (t.xOrigin * m[1] + t.yOrigin * m[3]));
				}
				if (offsetOrigin) {
					if (_svgBorderFactor === undefined) {
						_setEnvironmentVariables();
					}
					offsets = (cache.isSVG || cache.isSVGRoot) ? _getSVGOffsets(e) : e;
					if (cache.isSVG) { //don't just rely on "instanceof _SVGElement" because if the SVG is embedded via an object tag, it won't work (SVGElement is mapped to a different object))
						rect = e.getBBox();
						parentRect = (parentCache.isSVGRoot) ? {x:0, y:0} : parent.getBBox();
						offsets = {offsetLeft:rect.x - parentRect.x, offsetTop:rect.y - parentRect.y, offsetParent:cache.offsetParent};
					} else if (cache.isSVGRoot) {
						borderTop = parseInt(cs.borderTopWidth, 10) || 0;
						borderLeft = parseInt(cs.borderLeftWidth, 10) || 0;
						borderTranslateX = ((m[0] - _svgBorderFactor) * borderLeft + m[2] * borderTop);
						borderTranslateY = (m[1] * borderLeft + (m[3] - _svgBorderFactor) * borderTop);

						sx = offsetOrigin.x;
						sy = offsetOrigin.y;
						offsetX = (sx - (sx * m[0] + sy * m[2])); //accommodate the SVG root's transforms when the origin isn't in the top left.
						offsetY = (sy - (sx * m[1] + sy * m[3]));

						m[4] = parseFloat(m[4]) + offsetX;
						m[5] = parseFloat(m[5]) + offsetY;
						offsetOrigin.x -= offsetX;
						offsetOrigin.y -= offsetY;
						sx = offsets.scaleX;
						sy = offsets.scaleY;
						if (!isBase) { //when getting the matrix for a root <svg> element itself (NOT in the context of an SVG element that's nested inside of it like a <path>), we do NOT apply the scaling!
							offsetOrigin.x *= sx;
							offsetOrigin.y *= sy;
						}
						m[0] *= sx;
						m[1] *= sy;
						m[2] *= sx;
						m[3] *= sy;
						if (!_isIE10orBelow) {
							offsetOrigin.x += borderTranslateX;
							offsetOrigin.y += borderTranslateY;
						}
						if (parentOffsetParent === _doc.body && offsets.offsetParent === _docElement) { //to avoid issues with margin/padding on the <body>, we always set the offsetParent to _docElement in the _getSVGOffsets() function but there's a condition we check later in this function for (parentOffsetParent === offsets.offsetParent) which would fail if we don't run this logic. In other words, parentOffsetParent may be <body> and the <svg>'s offsetParent is also <body> but artificially set to _docElement to avoid margin/padding issues.
							parentOffsetParent = _docElement;
						}
					} else if (!_hasBorderBug && e.offsetParent) {
						offsetOrigin.x += parseInt(_getStyle(e.offsetParent, "borderLeftWidth"), 10) || 0;
						offsetOrigin.y += parseInt(_getStyle(e.offsetParent, "borderTopWidth"), 10) || 0;
					}
					isRoot = (parent === _docElement || parent === _doc.body);
					m[4] = Number(m[4]) + offsetOrigin.x + (offsets.offsetLeft || 0) - parentOffsetOrigin.x - (isRoot ? 0 : parent.scrollLeft || 0);
					m[5] = Number(m[5]) + offsetOrigin.y + (offsets.offsetTop || 0) - parentOffsetOrigin.y - (isRoot ? 0 : parent.scrollTop || 0);
					if (parent && _getStyle(e, "position", cs) === "fixed") { //fixed position elements should factor in the scroll position of the document.
						m[4] += _getDocScrollLeft();
						m[5] += _getDocScrollTop();
					}
					if (parent && parent !== _docElement && parentOffsetParent === offsets.offsetParent && !parentCache.isSVG && (!_hasReparentBug || _getOffset2DMatrix(parent).join("") === "100100")) {
						offsets = (parentCache.isSVGRoot) ? _getSVGOffsets(parent) : parent;
						m[4] -= offsets.offsetLeft || 0;
						m[5] -= offsets.offsetTop || 0;
						if (!_hasBorderBug && parentCache.offsetParent && !cache.isSVG && !cache.isSVGRoot) {
							m[4] -= parseInt(_getStyle(parentCache.offsetParent, "borderLeftWidth"), 10) || 0;
							m[5] -= parseInt(_getStyle(parentCache.offsetParent, "borderTopWidth"), 10) || 0;
						}
					}
				}
				return m;
			},
			_getConcatenatedMatrix = function(e, invert) {
				if (!e || e === window || !e.parentNode) {
					return [1,0,0,1,0,0];
				}
				//note: we keep reusing _point1 and _point2 in order to minimize memory usage and garbage collection chores.
				var originOffset = _getOffsetTransformOrigin(e, _point1),
					parentOriginOffset = _getOffsetTransformOrigin(e.parentNode, _point2),
					m = _getOffset2DMatrix(e, originOffset, parentOriginOffset, false, !invert),
					a, b, c, d, tx, ty, m2, determinant;
				while ((e = e.parentNode) && e.parentNode && e !== _docElement) {
					originOffset = parentOriginOffset;
					parentOriginOffset = _getOffsetTransformOrigin(e.parentNode, (originOffset === _point1) ? _point2 : _point1);
					m2 = _getOffset2DMatrix(e, originOffset, parentOriginOffset);
					a = m[0];
					b = m[1];
					c = m[2];
					d = m[3];
					tx = m[4];
					ty = m[5];
					m[0] = a * m2[0] + b * m2[2];
					m[1] = a * m2[1] + b * m2[3];
					m[2] = c * m2[0] + d * m2[2];
					m[3] = c * m2[1] + d * m2[3];
					m[4] = tx * m2[0] + ty * m2[2] + m2[4];
					m[5] = tx * m2[1] + ty * m2[3] + m2[5];
				}
				if (invert) {
					a = m[0];
					b = m[1];
					c = m[2];
					d = m[3];
					tx = m[4];
					ty = m[5];
					determinant = (a * d - b * c);
					m[0] = d / determinant;
					m[1] = -b / determinant;
					m[2] = -c / determinant;
					m[3] = a / determinant;
					m[4] = (c * ty - d * tx) / determinant;
					m[5] = -(a * ty - b * tx) / determinant;
				}
				return m;
			},
			_localToGlobal = function(e, p, fromTopLeft, decoratee, zeroOrigin) {
				e = _unwrapElement(e);
				var m = _getConcatenatedMatrix(e, false, zeroOrigin),
					x = p.x,
					y = p.y;
				if (fromTopLeft) {
					_getOffsetTransformOrigin(e, p);
					x -= p.x;
					y -= p.y;
				}
				decoratee = (decoratee === true) ? p : decoratee || {};
				decoratee.x = x * m[0] + y * m[2] + m[4];
				decoratee.y = x * m[1] + y * m[3] + m[5];
				return decoratee;
			},
			_localizePoint = function(p, localToGlobal, globalToLocal) {
				var x = p.x * localToGlobal[0] + p.y * localToGlobal[2] + localToGlobal[4],
					y = p.x * localToGlobal[1] + p.y * localToGlobal[3] + localToGlobal[5];
				p.x = x * globalToLocal[0] + y * globalToLocal[2] + globalToLocal[4];
				p.y = x * globalToLocal[1] + y * globalToLocal[3] + globalToLocal[5];
				return p;
			},

			_getElementBounds = function(e, context, fromTopLeft) {
				if (!(e = _unwrapElement(e))) {
					return null;
				}
				context = _unwrapElement(context);
				var isSVG = (e.getBBox && _isSVG(e)),
					origin, left, right, top, bottom, mLocalToGlobal, mGlobalToLocal, p1, p2, p3, p4, bbox, width, height, cache, borderLeft, borderTop, viewBox, viewBoxX, viewBoxY, computedDimensions, cs;
				if (e === window) {
					top = _getDocScrollTop();
					left = _getDocScrollLeft();
					right = left + (_docElement.clientWidth || e.innerWidth || _doc.body.clientWidth || 0);
					bottom = top + (((e.innerHeight || 0) - 20 < _docElement.clientHeight) ? _docElement.clientHeight : e.innerHeight || _doc.body.clientHeight || 0); //some browsers (like Firefox) ignore absolutely positioned elements, and collapse the height of the documentElement, so it could be 8px, for example, if you have just an absolutely positioned div. In that case, we use the innerHeight to resolve this.
				} else if (context === undefined || context === window) {
					return e.getBoundingClientRect();
				} else {
					origin = _getOffsetTransformOrigin(e);
					left = -origin.x;
					top = -origin.y;
					if (isSVG) {
						bbox = e.getBBox();
						width = bbox.width;
						height = bbox.height;
					} else if ((e.nodeName + "").toLowerCase() !== "svg" && e.offsetWidth) { //Chrome dropped support for "offsetWidth" on SVG elements
						width = e.offsetWidth;
						height = e.offsetHeight;
					} else {
						computedDimensions = _getComputedStyle(e);
						width = parseFloat(computedDimensions.width);
						height = parseFloat(computedDimensions.height);
					}
					right = left + width;
					bottom = top + height;
					if (e.nodeName.toLowerCase() === "svg" && !_isOldIE) { //root SVG elements are a special beast because they have 2 types of scaling - transforms on themselves as well as the stretching of the SVG canvas itself based on the outer size and the viewBox. If, for example, the SVG's viewbox is "0 0 100 100" but the CSS is set to width:200px; height:200px, that'd make it appear at 2x scale even though the element itself has no CSS transforms but the offsetWidth/offsetHeight are based on that css, not the viewBox so we need to adjust them accordingly.
						cache = _getSVGOffsets(e);
						cs = cache.computedStyle || {};
						viewBox = (e.getAttribute("viewBox") || "0 0").split(" ");
						viewBoxX = parseFloat(viewBox[0]);
						viewBoxY = parseFloat(viewBox[1]);
						borderLeft = parseFloat(cs.borderLeftWidth) || 0;
						borderTop = parseFloat(cs.borderTopWidth) || 0;
						right -= width - ((width - borderLeft) / cache.scaleX) - viewBoxX;
						bottom -= height - ((height - borderTop) / cache.scaleY) - viewBoxY;
						left -= borderLeft / cache.scaleX - viewBoxX;
						top -= borderTop / cache.scaleY - viewBoxY;
						if (computedDimensions) { //when we had to use computed styles, factor in the border now.
							right += (parseFloat(cs.borderRightWidth) + borderLeft) / cache.scaleX;
							bottom += (borderTop + parseFloat(cs.borderBottomWidth)) / cache.scaleY;
						}
					}
				}
				if (e === context) {
					return {left:left, top:top, width: right - left, height: bottom - top};
				}
				mLocalToGlobal = _getConcatenatedMatrix(e);
				mGlobalToLocal = _getConcatenatedMatrix(context, true);
				p1 = _localizePoint({x:left, y:top}, mLocalToGlobal, mGlobalToLocal);
				p2 = _localizePoint({x:right, y:top}, mLocalToGlobal, mGlobalToLocal);
				p3 = _localizePoint({x:right, y:bottom}, mLocalToGlobal, mGlobalToLocal);
				p4 = _localizePoint({x:left, y:bottom}, mLocalToGlobal, mGlobalToLocal);
				left = Math.min(p1.x, p2.x, p3.x, p4.x);
				top = Math.min(p1.y, p2.y, p3.y, p4.y);
				_temp1.x = _temp1.y = 0;
				if (fromTopLeft) {
					_getOffsetTransformOrigin(context, _temp1);
				}
				return {left:left + _temp1.x, top:top + _temp1.y, width:Math.max(p1.x, p2.x, p3.x, p4.x) - left, height:Math.max(p1.y, p2.y, p3.y, p4.y) - top};
			},
			// end matrix and point conversion methods



			_isArrayLike = function(e) {
				return (e && e.length && e[0] && ((e[0].nodeType && e[0].style && !e.nodeType) || (e[0].length && e[0][0]))) ? true : false; //could be an array of jQuery objects too, so accommodate that.
			},

			_flattenArray = function(a) {
				var result = [],
					l = a.length,
					i, e, j;
				for (i = 0; i < l; i++) {
					e = a[i];
					if (_isArrayLike(e)) {
						j = e.length;
						for (j = 0; j < e.length; j++) {
							result.push(e[j]);
						}
					} else if (e && e.length !== 0) {
						result.push(e);
					}
				}
				return result;
			},

			_isTouchDevice = (typeof(window) !== "undefined" && ("ontouchstart" in _docElement) && ("orientation" in window)),
			_touchEventLookup = (function(types) { //we create an object that makes it easy to translate touch event types into their "pointer" counterparts if we're in a browser that uses those instead. Like IE10 uses "MSPointerDown" instead of "touchstart", for example.
				var standard = types.split(","),
					converted = ((_tempDiv.onpointerdown !== undefined) ? "pointerdown,pointermove,pointerup,pointercancel" : (_tempDiv.onmspointerdown !== undefined) ? "MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel" : types).split(","),
					obj = {},
					i = 4;
				while (--i > -1) {
					obj[standard[i]] = converted[i];
					obj[converted[i]] = standard[i];
				}
				return obj;
			}("touchstart,touchmove,touchend,touchcancel")),

			_addListener = function(element, type, func, capture) {
				if (element.addEventListener) {
					var touchType = _touchEventLookup[type];
					capture = capture || {passive:false};
					element.addEventListener(touchType || type, func, capture);
					if (touchType && type !== touchType) { //some browsers actually support both, so must we.
						element.addEventListener(type, func, capture);
					}
				} else if (element.attachEvent) {
					element.attachEvent("on" + type, func);
				}
			},

			_removeListener = function(element, type, func) {
				if (element.removeEventListener) {
					var touchType = _touchEventLookup[type];
					element.removeEventListener(touchType || type, func);
					if (touchType && type !== touchType) {
						element.removeEventListener(type, func);
					}
				} else if (element.detachEvent) {
					element.detachEvent("on" + type, func);
				}
			},

			_hasTouchID = function(list, ID) {
				var i = list.length;
				while (--i > -1) {
					if (list[i].identifier === ID) {
						return true;
					}
				}
				return false;
			},

			_onMultiTouchDocumentEnd = function(e) {
				_isMultiTouching = (e.touches && _dragCount < e.touches.length);
				_removeListener(e.target, "touchend", _onMultiTouchDocumentEnd);
			},

			_onMultiTouchDocument = function(e) {
				_isMultiTouching = (e.touches && _dragCount < e.touches.length);
				_addListener(e.target, "touchend", _onMultiTouchDocumentEnd);
			},

			_parseThrowProps = function(draggable, snap, max, min, factor, forceZeroVelocity) {
				var vars = {},
					a, i, l;
				if (snap) {
					if (factor !== 1 && snap instanceof Array) { //some data must be altered to make sense, like if the user passes in an array of rotational values in degrees, we must convert it to radians. Or for scrollLeft and scrollTop, we invert the values.
						vars.end = a = [];
						l = snap.length;
						if (typeof(snap[0]) === "object") { //if the array is populated with objects, like points ({x:100, y:200}), make copies before multiplying by the factor, otherwise we'll mess up the originals and the user may reuse it elsewhere.
							for (i = 0; i < l; i++) {
								a[i] = _copy(snap[i], factor);
							}
						} else {
							for (i = 0; i < l; i++) {
								a[i] = snap[i] * factor;
							}
						}
						max += 1.1; //allow 1.1 pixels of wiggle room when snapping in order to work around some browser inconsistencies in the way bounds are reported which can make them roughly a pixel off. For example, if "snap:[-$('#menu').width(), 0]" was defined and #menu had a wrapper that was used as the bounds, some browsers would be one pixel off, making the minimum -752 for example when snap was [-753,0], thus instead of snapping to -753, it would snap to 0 since -753 was below the minimum.
						min -= 1.1;
					} else if (typeof(snap) === "function") {
						vars.end = function(value) {
							var result = snap.call(draggable, value),
								copy, p;
							if (factor !== 1) {
								if (typeof(result) === "object") {
									copy = {};
									for (p in result) {
										copy[p] = result[p] * factor;
									}
									result = copy;
								} else {
									result *= factor;
								}
							}
							return result; //we need to ensure that we can scope the function call to the Draggable instance itself so that users can access important values like maxX, minX, maxY, minY, x, and y from within that function.
						};
					} else {
						vars.end = snap;
					}
				}
				if (max || max === 0) {
					vars.max = max;
				}
				if (min || min === 0) {
					vars.min = min;
				}
				if (forceZeroVelocity) {
					vars.velocity = 0;
				}
				return vars;
			},

			_isClickable = function(e) { //sometimes it's convenient to mark an element as clickable by adding a data-clickable="true" attribute (in which case we won't preventDefault() the mouse/touch event). This method checks if the element is an <a>, <input>, or <button> or has an onclick or has the data-clickable or contentEditable attribute set to true (or any of its parent elements).
				var data;
				return (!e || !e.getAttribute || e.nodeName === "BODY") ? false : ((data = e.getAttribute("data-clickable")) === "true" || (data !== "false" && (e.onclick || _clickableTagExp.test(e.nodeName + "") || e.getAttribute("contentEditable") === "true"))) ? true : _isClickable(e.parentNode);
			},

			_setSelectable = function(elements, selectable) {
				var i = elements.length,
					e;
				while (--i > -1) {
					e = elements[i];
					e.ondragstart = e.onselectstart = selectable ? null : _emptyFunc;
					_setStyle(e, "userSelect", (selectable ? "text" : "none"));
				}
			},

			_addPaddingBR = (function() { //this function is in charge of analyzing browser behavior related to padding. It sets the _addPaddingBR to true if the browser doesn't normally factor in the bottom or right padding on the element inside the scrolling area, and it sets _addPaddingLeft to true if it's a browser that requires the extra offset (offsetLeft) to be added to the paddingRight (like Opera).
				var div = _doc.createElement("div"),
					child = _doc.createElement("div"),
					childStyle = child.style,
					parent = _doc.body || _tempDiv,
					val;
				childStyle.display = "inline-block";
				childStyle.position = "relative";
				div.style.cssText = child.innerHTML = "width:90px; height:40px; padding:10px; overflow:auto; visibility: hidden";
				div.appendChild(child);
				parent.appendChild(div);
				val = (child.offsetHeight + 18 > div.scrollHeight); //div.scrollHeight should be child.offsetHeight + 20 because of the 10px of padding on each side, but some browsers ignore one side. We allow a 2px margin of error.
				parent.removeChild(div);
				return val;
			}()),




			//The ScrollProxy class wraps an element's contents into another div (we call it "content") that we either add padding when necessary or apply a translate3d() transform in order to overscroll (scroll past the boundaries). This allows us to simply set the scrollTop/scrollLeft (or top/left for easier reverse-axis orientation, which is what we do in Draggable) and it'll do all the work for us. For example, if we tried setting scrollTop to -100 on a normal DOM element, it wouldn't work - it'd look the same as setting it to 0, but if we set scrollTop of a ScrollProxy to -100, it'll give the correct appearance by either setting paddingTop of the wrapper to 100 or applying a 100-pixel translateY.
			ScrollProxy = function(element, vars) {
				element = _unwrapElement(element);
				vars = vars || {};
				var content = _doc.createElement("div"),
					style = content.style,
					node = element.firstChild,
					offsetTop = 0,
					offsetLeft = 0,
					prevTop = element.scrollTop,
					prevLeft = element.scrollLeft,
					scrollWidth = element.scrollWidth,
					scrollHeight = element.scrollHeight,
					extraPadRight = 0,
					maxLeft = 0,
					maxTop = 0,
					elementWidth, elementHeight, contentHeight, nextNode, transformStart, transformEnd;

				if (_supports3D && vars.force3D !== false) {
					transformStart = "translate3d(";
					transformEnd = "px,0px)";
				} else if (_transformProp) {
					transformStart = "translate(";
					transformEnd = "px)";
				}

				this.scrollTop = function(value, force) {
					if (!arguments.length) {
						return -this.top();
					}
					this.top(-value, force);
				};

				this.scrollLeft = function(value, force) {
					if (!arguments.length) {
						return -this.left();
					}
					this.left(-value, force);
				};

				this.left = function(value, force) {
					if (!arguments.length) {
						return -(element.scrollLeft + offsetLeft);
					}
					var dif = element.scrollLeft - prevLeft,
						oldOffset = offsetLeft;
					if ((dif > 2 || dif < -2) && !force) { //if the user interacts with the scrollbar (or something else scrolls it, like the mouse wheel), we should kill any tweens of the ScrollProxy.
						prevLeft = element.scrollLeft;
						TweenLite["default"].killTweensOf(this, true, {left:1, scrollLeft:1});
						this.left(-prevLeft);
						if (vars.onKill) {
							vars.onKill();
						}
						return;
					}
					value = -value; //invert because scrolling works in the opposite direction
					if (value < 0) {
						offsetLeft = (value - 0.5) | 0;
						value = 0;
					} else if (value > maxLeft) {
						offsetLeft = (value - maxLeft) | 0;
						value = maxLeft;
					} else {
						offsetLeft = 0;
					}
					if (offsetLeft || oldOffset) {
						if (transformStart) {
							if (!this._suspendTransforms) {
								style[_transformProp] = transformStart + -offsetLeft + "px," + -offsetTop + transformEnd;
							}
						} else {
							style.left = -offsetLeft + "px";
						}
						if (offsetLeft + extraPadRight >= 0) {
							style.paddingRight = offsetLeft + extraPadRight + "px";
						}
					}
					element.scrollLeft = value | 0;
					prevLeft = element.scrollLeft; //don't merge this with the line above because some browsers adjsut the scrollLeft after it's set, so in order to be 100% accurate in tracking it, we need to ask the browser to report it.
				};

				this.top = function(value, force) {
					if (!arguments.length) {
						return -(element.scrollTop + offsetTop);
					}
					var dif = element.scrollTop - prevTop,
						oldOffset = offsetTop;
					if ((dif > 2 || dif < -2) && !force) { //if the user interacts with the scrollbar (or something else scrolls it, like the mouse wheel), we should kill any tweens of the ScrollProxy.
						prevTop = element.scrollTop;
						TweenLite["default"].killTweensOf(this, true, {top:1, scrollTop:1});
						this.top(-prevTop);
						if (vars.onKill) {
							vars.onKill();
						}
						return;
					}
					value = -value; //invert because scrolling works in the opposite direction
					if (value < 0) {
						offsetTop = (value - 0.5) | 0;
						value = 0;
					} else if (value > maxTop) {
						offsetTop = (value - maxTop) | 0;
						value = maxTop;
					} else {
						offsetTop = 0;
					}
					if (offsetTop || oldOffset) {
						if (transformStart) {
							if (!this._suspendTransforms) {
								style[_transformProp] = transformStart + -offsetLeft + "px," + -offsetTop + transformEnd;
							}
						} else {
							style.top = -offsetTop + "px";
						}
					}
					element.scrollTop = value | 0;
					prevTop = element.scrollTop;
				};

				this.maxScrollTop = function() {
					return maxTop;
				};

				this.maxScrollLeft = function() {
					return maxLeft;
				};

				this.disable = function() {
					node = content.firstChild;
					while (node) {
						nextNode = node.nextSibling;
						element.appendChild(node);
						node = nextNode;
					}
					if (element === content.parentNode) { //in case disable() is called when it's already disabled.
						element.removeChild(content);
					}
				};

				this.enable = function() {
					node = element.firstChild;
					if (node === content) {
						return;
					}
					while (node) {
						nextNode = node.nextSibling;
						content.appendChild(node);
						node = nextNode;
					}
					element.appendChild(content);
					this.calibrate();
				};

				this.calibrate = function(force) {
					var widthMatches = (element.clientWidth === elementWidth),
						x, y;
					prevTop = element.scrollTop;
					prevLeft = element.scrollLeft;
					if (widthMatches && element.clientHeight === elementHeight && content.offsetHeight === contentHeight && scrollWidth === element.scrollWidth && scrollHeight === element.scrollHeight && !force) {
						return; //no need to recalculate things if the width and height haven't changed.
					}
					if (offsetTop || offsetLeft) {
						x = this.left();
						y = this.top();
						this.left(-element.scrollLeft);
						this.top(-element.scrollTop);
					}
					//first, we need to remove any width constraints to see how the content naturally flows so that we can see if it's wider than the containing element. If so, we've got to record the amount of overage so that we can apply that as padding in order for browsers to correctly handle things. Then we switch back to a width of 100% (without that, some browsers don't flow the content correctly)
					if (!widthMatches || force) {
						style.display = "block";
						style.width = "auto";
						style.paddingRight = "0px";
						extraPadRight = Math.max(0, element.scrollWidth - element.clientWidth);
						//if the content is wider than the container, we need to add the paddingLeft and paddingRight in order for things to behave correctly.
						if (extraPadRight) {
							extraPadRight += _getStyle(element, "paddingLeft") + (_addPaddingBR ? _getStyle(element, "paddingRight") : 0);
						}
					}
					style.display = "inline-block";
					style.position = "relative";
					style.overflow = "visible";
					style.verticalAlign = "top";
					style.width = "100%";
					style.paddingRight = extraPadRight + "px";
					//some browsers neglect to factor in the bottom padding when calculating the scrollHeight, so we need to add that padding to the content when that happens. Allow a 2px margin for error
					if (_addPaddingBR) {
						style.paddingBottom = _getStyle(element, "paddingBottom", true);
					}
					if (_isOldIE) {
						style.zoom = "1";
					}
					elementWidth = element.clientWidth;
					elementHeight = element.clientHeight;
					scrollWidth = element.scrollWidth;
					scrollHeight = element.scrollHeight;
					maxLeft = element.scrollWidth - elementWidth;
					maxTop = element.scrollHeight - elementHeight;
					contentHeight = content.offsetHeight;
					style.display = "block";
					if (x || y) {
						this.left(x);
						this.top(y);
					}
				};

				this.content = content;
				this.element = element;
				this._suspendTransforms = false;
				this.enable();
			},





			Draggable = function(target, vars) {
				TweenLite["EventDispatcher"].call(this, target);
				target = _unwrapElement(target); //in case the target is a selector object or selector text
				if (!ThrowPropsPlugin) {
					ThrowPropsPlugin = _globals.com.greensock.plugins.ThrowPropsPlugin;
				}
				this.vars = vars = _copy(vars || {});
				this.target = target;
				this.x = this.y = this.rotation = 0;
				this.dragResistance = parseFloat(vars.dragResistance) || 0;
				this.edgeResistance = isNaN(vars.edgeResistance) ? 1 : parseFloat(vars.edgeResistance) || 0;
				this.lockAxis = vars.lockAxis;
				this.autoScroll = vars.autoScroll || 0;
				this.lockedAxis = null;
				this.allowEventDefault = !!vars.allowEventDefault;
				var type = (vars.type || (_isOldIE ? "top,left" : "x,y")).toLowerCase(),
					xyMode = (type.indexOf("x") !== -1 || type.indexOf("y") !== -1),
					rotationMode = (type.indexOf("rotation") !== -1),
					xProp = rotationMode ? "rotation" : xyMode ? "x" : "left",
					yProp = xyMode ? "y" : "top",
					allowX = (type.indexOf("x") !== -1 || type.indexOf("left") !== -1 || type === "scroll"),
					allowY = (type.indexOf("y") !== -1 || type.indexOf("top") !== -1 || type === "scroll"),
					minimumMovement = vars.minimumMovement || 2,
					self = this,
					triggers = _slice(vars.trigger || vars.handle || target),
					killProps = {},
					dragEndTime = 0,
					checkAutoScrollBounds = false,
					autoScrollMarginTop = vars.autoScrollMarginTop || 40,
					autoScrollMarginRight = vars.autoScrollMarginRight || 40,
					autoScrollMarginBottom = vars.autoScrollMarginBottom || 40,
					autoScrollMarginLeft = vars.autoScrollMarginLeft || 40,
					isClickable = vars.clickableTest || _isClickable,
					clickTime = 0,
					enabled, scrollProxy, startPointerX, startPointerY, startElementX, startElementY, hasBounds, hasDragCallback, maxX, minX, maxY, minY, tempVars, cssVars, touch, touchID, rotationOrigin, dirty, old, snapX, snapY, snapXY, isClicking, touchEventTarget, matrix, interrupted, startScrollTop, startScrollLeft, applyObj, allowNativeTouchScrolling, touchDragAxis, isDispatching, clickDispatch, trustedClickDispatch,

					onContextMenu = function(e) { //used to prevent long-touch from triggering a context menu.
						if (self.isPressed && e.which < 2) {
							self.endDrag();
						} else {
							e.preventDefault();
							e.stopPropagation();
							return false;
						}
					},

					//this method gets called on every tick of TweenLite.ticker which allows us to synchronize the renders to the core engine (which is typically synchronized with the display refresh via requestAnimationFrame). This is an optimization - it's better than applying the values inside the "mousemove" or "touchmove" event handler which may get called many times inbetween refreshes.
					render = function(suppressEvents) {
						if (self.autoScroll && self.isDragging && (checkAutoScrollBounds || dirty)) {
							var e = target,
								autoScrollFactor = self.autoScroll * 15, //multiplying by 15 just gives us a better "feel" speed-wise.
								parent, isRoot, rect, pointerX, pointerY, changeX, changeY, gap;
							checkAutoScrollBounds = false;
							_windowProxy.scrollTop = ((window.pageYOffset != null) ? window.pageYOffset : (_docElement.scrollTop != null) ? _docElement.scrollTop : _doc.body.scrollTop);
							_windowProxy.scrollLeft = ((window.pageXOffset != null) ? window.pageXOffset : (_docElement.scrollLeft != null) ? _docElement.scrollLeft : _doc.body.scrollLeft);
							pointerX = self.pointerX - _windowProxy.scrollLeft;
							pointerY = self.pointerY - _windowProxy.scrollTop;
							while (e && !isRoot) { //walk up the chain and sense wherever the pointer is within 40px of an edge that's scrollable.
								isRoot = _isRoot(e.parentNode);
								parent = isRoot ? _windowProxy : e.parentNode;
								rect = isRoot ? {bottom:Math.max(_docElement.clientHeight, window.innerHeight || 0), right: Math.max(_docElement.clientWidth, window.innerWidth || 0), left:0, top:0} : parent.getBoundingClientRect();
								changeX = changeY = 0;
								if (allowY) {
									gap = parent._gsMaxScrollY - parent.scrollTop;
									if (gap < 0) {
										changeY = gap;
									} else if (pointerY > rect.bottom - autoScrollMarginBottom && gap) {
										checkAutoScrollBounds = true;
										changeY = Math.min(gap, (autoScrollFactor * (1 - Math.max(0, (rect.bottom - pointerY)) / autoScrollMarginBottom)) | 0);
									} else if (pointerY < rect.top + autoScrollMarginTop && parent.scrollTop) {
										checkAutoScrollBounds = true;
										changeY = -Math.min(parent.scrollTop, (autoScrollFactor * (1 - Math.max(0, (pointerY - rect.top)) / autoScrollMarginTop)) | 0);
									}
									if (changeY) {
										parent.scrollTop += changeY;
									}
								}
								if (allowX) {
									gap = parent._gsMaxScrollX - parent.scrollLeft;
									if (gap < 0) {
										changeX = gap;
									} else if (pointerX > rect.right - autoScrollMarginRight && gap) {
										checkAutoScrollBounds = true;
										changeX = Math.min(gap, (autoScrollFactor * (1 - Math.max(0, (rect.right - pointerX)) / autoScrollMarginRight)) | 0);
									} else if (pointerX < rect.left + autoScrollMarginLeft && parent.scrollLeft) {
										checkAutoScrollBounds = true;
										changeX = -Math.min(parent.scrollLeft, (autoScrollFactor * (1 - Math.max(0, (pointerX - rect.left)) / autoScrollMarginLeft)) | 0);
									}
									if (changeX) {
										parent.scrollLeft += changeX;
									}
								}

								if (isRoot && (changeX || changeY)) {
									window.scrollTo(parent.scrollLeft, parent.scrollTop);
									setPointerPosition(self.pointerX + changeX, self.pointerY + changeY);
								}
								e = parent;
							}
						}
						if (dirty) {
							var x = self.x,
								y = self.y,
								min = 0.000001;
							if (x < min && x > -min) { //browsers don't handle super small decimals well.
								x = 0;
							}
							if (y < min && y > -min) {
								y = 0;
							}
							if (rotationMode) {
								self.deltaX = x - applyObj.data.rotation;
								applyObj.data.rotation = self.rotation = x;
								applyObj.setRatio(1); //note: instead of doing TweenLite.set(), as a performance optimization we skip right to the method that renders the transforms inside CSSPlugin. For old versions of IE, though, we do a normal TweenLite.set() to leverage its ability to re-reroute to an IE-specific 2D renderer.
							} else {
								if (scrollProxy) {
									if (allowY) {
										self.deltaY = y - scrollProxy.top();
										scrollProxy.top(y);
									}
									if (allowX) {
										self.deltaX = x - scrollProxy.left();
										scrollProxy.left(x);
									}
								} else if (xyMode) {
									if (allowY) {
										self.deltaY = y - applyObj.data.y;
										applyObj.data.y = y;
									}
									if (allowX) {
										self.deltaX = x - applyObj.data.x;
										applyObj.data.x = x;
									}
									applyObj.setRatio(1); //note: instead of doing TweenLite.set(), as a performance optimization we skip right to the method that renders the transforms inside CSSPlugin. For old versions of IE, though, we do a normal TweenLite.set() to leverage its ability to re-reroute to an IE-specific 2D renderer.
								} else {
									if (allowY) {
										self.deltaY = y - parseFloat(target.style.top || 0);
										target.style.top = y + "px";
									}
									if (allowX) {
										self.deltaY = x - parseFloat(target.style.left || 0);
										target.style.left = x + "px";
									}
								}
							}
							if (hasDragCallback && !suppressEvents && !isDispatching) {
								isDispatching = true; //in case onDrag has an update() call (avoid endless loop)
								_dispatchEvent(self, "drag", "onDrag");
								isDispatching = false;
							}
						}
						dirty = false;
					},

					//copies the x/y from the element (whether that be transforms, top/left, or ScrollProxy's top/left) to the Draggable's x and y (and rotation if necessary) properties so that they reflect reality and it also (optionally) applies any snapping necessary. This is used by the ThrowPropsPlugin tween in an onUpdate to ensure things are synced and snapped.
					syncXY = function(skipOnUpdate, skipSnap) {
						var x = self.x,
							y = self.y,
							snappedValue;
						if (!target._gsTransform && (xyMode || rotationMode)) { //just in case the _gsTransform got wiped, like if the user called clearProps on the transform or something (very rare), doing an x tween forces a re-parsing of the transforms and population of the _gsTransform.
							TweenLite["default"].set(target, {x:"+=0", overwrite:false, data:"_draggable"});
						}
						if (xyMode) {
							self.y = target._gsTransform.y;
							self.x = target._gsTransform.x;
						} else if (rotationMode) {
							self.x = self.rotation = target._gsTransform.rotation;
						} else if (scrollProxy) {
							self.y = scrollProxy.top();
							self.x = scrollProxy.left();
						} else {
							self.y = parseInt(target.style.top, 10) || 0;
							self.x = parseInt(target.style.left, 10) || 0;
						}
						if ((snapX || snapY || snapXY) && !skipSnap && (self.isDragging || self.isThrowing)) {
							if (snapXY) {
								_temp1.x = self.x;
								_temp1.y = self.y;
								snappedValue = snapXY(_temp1);
								if (snappedValue.x !== self.x) {
									self.x = snappedValue.x;
									dirty = true;
								}
								if (snappedValue.y !== self.y) {
									self.y = snappedValue.y;
									dirty = true;
								}
							}
							if (snapX) {
								snappedValue = snapX(self.x);
								if (snappedValue !== self.x) {
									self.x = snappedValue;
									if (rotationMode) {
										self.rotation = snappedValue;
									}
									dirty = true;
								}
							}
							if (snapY) {
								snappedValue = snapY(self.y);
								if (snappedValue !== self.y) {
									self.y = snappedValue;
								}
								dirty = true;
							}
						}
						if (dirty) {
							render(true);
						}
						if (!skipOnUpdate) {
							self.deltaX = self.x - x;
							self.deltaY = self.y - y;
							_dispatchEvent(self, "throwupdate", "onThrowUpdate");
						}
					},

					calculateBounds = function() {
						var bounds, targetBounds, snap, snapIsRaw;
						hasBounds = false;
						if (scrollProxy) {
							scrollProxy.calibrate();
							self.minX = minX = -scrollProxy.maxScrollLeft();
							self.minY = minY = -scrollProxy.maxScrollTop();
							self.maxX = maxX = self.maxY = maxY = 0;
							hasBounds = true;
						} else if (!!vars.bounds) {
							bounds = _getBounds(vars.bounds, target.parentNode); //could be a selector/jQuery object or a DOM element or a generic object like {top:0, left:100, width:1000, height:800} or {minX:100, maxX:1100, minY:0, maxY:800}
							if (rotationMode) {
								self.minX = minX = bounds.left;
								self.maxX = maxX = bounds.left + bounds.width;
								self.minY = minY = self.maxY = maxY = 0;
							} else if (vars.bounds.maxX !== undefined || vars.bounds.maxY !== undefined) {
								bounds = vars.bounds;
								self.minX = minX = bounds.minX;
								self.minY = minY = bounds.minY;
								self.maxX = maxX = bounds.maxX;
								self.maxY = maxY = bounds.maxY;
							} else {
								targetBounds = _getBounds(target, target.parentNode);
								self.minX = minX = _getStyle(target, xProp) + bounds.left - targetBounds.left;
								self.minY = minY = _getStyle(target, yProp) + bounds.top - targetBounds.top;
								self.maxX = maxX = minX + (bounds.width - targetBounds.width);
								self.maxY = maxY = minY + (bounds.height - targetBounds.height);
							}
							if (minX > maxX) {
								self.minX = maxX;
								self.maxX = maxX = minX;
								minX = self.minX;
							}
							if (minY > maxY) {
								self.minY = maxY;
								self.maxY = maxY = minY;
								minY = self.minY;
							}
							if (rotationMode) {
								self.minRotation = minX;
								self.maxRotation = maxX;
							}
							hasBounds = true;
						}
						if (vars.liveSnap) {
							snap = (vars.liveSnap === true) ? (vars.snap || {}) : vars.liveSnap;
							snapIsRaw = (snap instanceof Array || typeof(snap) === "function");
							if (rotationMode) {
								snapX = buildSnapFunc((snapIsRaw ? snap : snap.rotation), minX, maxX, 1);
								snapY = null;
							} else {
								if (snap.points) {
									snapXY = buildPointSnapFunc((snapIsRaw ? snap : snap.points), minX, maxX, minY, maxY, snap.radius, scrollProxy ? -1 : 1);
								} else {
									if (allowX) {
										snapX = buildSnapFunc((snapIsRaw ? snap : snap.x || snap.left || snap.scrollLeft), minX, maxX, scrollProxy ? -1 : 1);
									}
									if (allowY) {
										snapY = buildSnapFunc((snapIsRaw ? snap : snap.y || snap.top || snap.scrollTop), minY, maxY, scrollProxy ? -1 : 1);
									}
								}
							}
						}

					},

					onThrowComplete = function() {
						self.isThrowing = false;
						_dispatchEvent(self, "throwcomplete", "onThrowComplete");
					},
					onThrowOverwrite = function() {
						self.isThrowing = false;
					},

					animate = function(throwProps, forceZeroVelocity) {
						var snap, snapIsRaw, tween, overshootTolerance;
						if (throwProps && ThrowPropsPlugin) {
							if (throwProps === true) {
								snap = vars.snap || vars.liveSnap || {};
								snapIsRaw = (snap instanceof Array || typeof(snap) === "function");
								throwProps = {resistance:(vars.throwResistance || vars.resistance || 1000) / (rotationMode ? 10 : 1)};
								if (rotationMode) {
									throwProps.rotation = _parseThrowProps(self, snapIsRaw ? snap : snap.rotation, maxX, minX, 1, forceZeroVelocity);
								} else {
									if (allowX) {
										throwProps[xProp] = _parseThrowProps(self, snapIsRaw ? snap : snap.points || snap.x || snap.left || snap.scrollLeft, maxX, minX, scrollProxy ? -1 : 1, forceZeroVelocity || (self.lockedAxis === "x"));
									}
									if (allowY) {
										throwProps[yProp] = _parseThrowProps(self, snapIsRaw ? snap : snap.points || snap.y || snap.top || snap.scrollTop, maxY, minY, scrollProxy ? -1 : 1, forceZeroVelocity || (self.lockedAxis === "y"));
									}
									if (snap.points || (snap instanceof Array && typeof(snap[0]) === "object")) {
										throwProps.linkedProps = xProp + "," + yProp;
										throwProps.radius = snap.radius; //note: we also disable liveSnapping while throwing if there's a "radius" defined, otherwise it looks weird to have the item thrown past a snapping point but live-snapping mid-tween. We do this by altering the onUpdateParams so that "skipSnap" parameter is true for syncXY.
									}
								}
							}
							self.isThrowing = true;
							overshootTolerance = (!isNaN(vars.overshootTolerance)) ? vars.overshootTolerance : (vars.edgeResistance === 1) ? 0 : (1 - self.edgeResistance) + 0.2;
							self.tween = tween = ThrowPropsPlugin.to(scrollProxy || target, {throwProps:throwProps, data:"_draggable", ease:(vars.ease || _globals.Power3.easeOut), onComplete:onThrowComplete, onOverwrite:onThrowOverwrite, onUpdate:(vars.fastMode ? _dispatchEvent : syncXY), onUpdateParams:(vars.fastMode ? [self, "onthrowupdate", "onThrowUpdate"] : (snap && snap.radius) ? [false, true] : _emptyArray)}, Math.max(vars.minDuration || 0, vars.maxDuration || 0) || 2, (!isNaN(vars.minDuration) ? vars.minDuration : (overshootTolerance === 0 || (typeof(throwProps) === "object" && throwProps.resistance > 1000)) ? 0 : 0.5), overshootTolerance);
							if (!vars.fastMode) {
								//to populate the end values, we just scrub the tween to the end, record the values, and then jump back to the beginning.
								if (scrollProxy) {
									scrollProxy._suspendTransforms = true; //Microsoft browsers have a bug that causes them to briefly render the position incorrectly (it flashes to the end state when we seek() the tween even though we jump right back to the current position, and this only seems to happen when we're affecting both top and left), so we set a _suspendTransforms flag to prevent it from actually applying the values in the ScrollProxy.
								}
								tween.render(tween.duration(), true, true);
								syncXY(true, true);
								self.endX = self.x;
								self.endY = self.y;
								if (rotationMode) {
									self.endRotation = self.x;
								}
								tween.play(0);
								syncXY(true, true);
								if (scrollProxy) {
									scrollProxy._suspendTransforms = false;
								}
							}
						} else if (hasBounds) {
							self.applyBounds();
						}
					},

					updateMatrix = function(shiftStart) {
						var start = matrix || [1,0,0,1,0,0],
							a, b, c, d, tx, ty, determinant, pointerX, pointerY;
						matrix = _getConcatenatedMatrix(target.parentNode, true);
						if (shiftStart && self.isPressed && start.join(",") !== matrix.join(",")) { //if the matrix changes WHILE the element is pressed, we must adjust the startPointerX and startPointerY accordingly, so we invert the original matrix and figure out where the pointerX and pointerY were in the global space, then apply the new matrix to get the updated coordinates.
							a = start[0];
							b = start[1];
							c = start[2];
							d = start[3];
							tx = start[4];
							ty = start[5];
							determinant = (a * d - b * c);
							pointerX = startPointerX * (d / determinant) + startPointerY * (-c / determinant) + ((c * ty - d * tx) / determinant);
							pointerY = startPointerX * (-b / determinant) + startPointerY * (a / determinant) + (-(a * ty - b * tx) / determinant);
							startPointerY = pointerX * matrix[1] + pointerY * matrix[3] + matrix[5];
							startPointerX = pointerX * matrix[0] + pointerY * matrix[2] + matrix[4];
						}
						if (!matrix[1] && !matrix[2] && matrix[0] == 1 && matrix[3] == 1 && matrix[4] == 0 && matrix[5] == 0) { //if there are no transforms, we can optimize performance by not factoring in the matrix
							matrix = null;
						}

					},

					recordStartPositions = function() {
						var edgeTolerance = 1 - self.edgeResistance;
						updateMatrix(false);
						if (matrix) {
							startPointerX = self.pointerX * matrix[0] + self.pointerY * matrix[2] + matrix[4]; //translate to local coordinate system
							startPointerY = self.pointerX * matrix[1] + self.pointerY * matrix[3] + matrix[5];
						}
						if (dirty) {
							setPointerPosition(self.pointerX, self.pointerY);
							render(true);
						}
						if (scrollProxy) {
							calculateBounds();
							startElementY = scrollProxy.top();
							startElementX = scrollProxy.left();
						} else {
							//if the element is in the process of tweening, don't force snapping to occur because it could make it jump. Imagine the user throwing, then before it's done, clicking on the element in its inbetween state.
							if (isTweening()) {
								syncXY(true, true);
								calculateBounds();
							} else {
								self.applyBounds();
							}
							if (rotationMode) {
								rotationOrigin = self.rotationOrigin = _localToGlobal(target, {x:0, y:0});
								syncXY(true, true);
								startElementX = self.x; //starting rotation (x always refers to rotation in type:"rotation", measured in degrees)
								startElementY = self.y = Math.atan2(rotationOrigin.y - self.pointerY, self.pointerX - rotationOrigin.x) * _RAD2DEG;
							} else {
								startScrollTop = target.parentNode ? target.parentNode.scrollTop || 0 : 0;
								startScrollLeft = target.parentNode ? target.parentNode.scrollLeft || 0 : 0;
								startElementY = _getStyle(target, yProp); //record the starting top and left values so that we can just add the mouse's movement to them later.
								startElementX = _getStyle(target, xProp);
							}
						}
						if (hasBounds && edgeTolerance) {
							if (startElementX > maxX) {
								startElementX = maxX + (startElementX - maxX) / edgeTolerance;
							} else if (startElementX < minX) {
								startElementX = minX - (minX - startElementX) / edgeTolerance;
							}
							if (!rotationMode) {
								if (startElementY > maxY) {
									startElementY = maxY + (startElementY - maxY) / edgeTolerance;
								} else if (startElementY < minY) {
									startElementY = minY - (minY - startElementY) / edgeTolerance;
								}
							}
						}
						self.startX = startElementX;
						self.startY = startElementY;
					},

					isTweening = function() {
						return (self.tween && self.tween.isActive());
					},

					removePlaceholder = function() {
						if (_placeholderDiv.parentNode && !isTweening() && !self.isDragging) { //_placeholderDiv just props open auto-scrolling containers so they don't collapse as the user drags left/up. We remove it after dragging (and throwing, if necessary) finishes.
							_placeholderDiv.parentNode.removeChild(_placeholderDiv);
						}
					},

					buildSnapFunc = function(snap, min, max, factor) {
						if (typeof(snap) === "function") {
							return function(n) {
								var edgeTolerance = !self.isPressed ? 1 : 1 - self.edgeResistance; //if we're tweening, disable the edgeTolerance because it's already factored into the tweening values (we don't want to apply it multiple times)
								return snap.call(self, (n > max ? max + (n - max) * edgeTolerance : (n < min) ? min + (n - min) * edgeTolerance : n)) * factor;
							};
						}
						if (snap instanceof Array) {
							return function(n) {
								var i = snap.length,
									closest = 0,
									absDif = _max,
									val, dif;
								while (--i > -1) {
									val = snap[i];
									dif = val - n;
									if (dif < 0) {
										dif = -dif;
									}
									if (dif < absDif && val >= min && val <= max) {
										closest = i;
										absDif = dif;
									}
								}
								return snap[closest];
							};
						}
						return isNaN(snap) ? function(n) { return n; } : function() { return snap * factor; };
					},

					buildPointSnapFunc = function(snap, minX, maxX, minY, maxY, radius, factor) {
						radius = (radius && radius < _max) ? radius * radius : _max; //so we don't have to Math.sqrt() in the functions. Performance optimization.
						if (typeof(snap) === "function") {
							return function(point) {
								var edgeTolerance = !self.isPressed ? 1 : 1 - self.edgeResistance,
									x = point.x,
									y = point.y,
									result, dx, dy; //if we're tweening, disable the edgeTolerance because it's already factored into the tweening values (we don't want to apply it multiple times)
								point.x = x = (x > maxX ? maxX + (x - maxX) * edgeTolerance : (x < minX) ? minX + (x - minX) * edgeTolerance : x);
								point.y = y = (y > maxY ? maxY + (y - maxY) * edgeTolerance : (y < minY) ? minY + (y - minY) * edgeTolerance : y);
								result = snap.call(self, point);
								if (result !== point) {
									point.x = result.x;
									point.y = result.y;
								}
								if (factor !== 1) {
									point.x *= factor;
									point.y *= factor;
								}
								if (radius < _max) {
									dx = point.x - x;
									dy = point.y - y;
									if (dx * dx + dy * dy > radius) {
										point.x = x;
										point.y = y;
									}
								}
								return point;
							};
						}
						if (snap instanceof Array) {
							return function(p) {
								var i = snap.length,
									closest = 0,
									minDist = _max,
									x, y, point, dist;
								while (--i > -1) {
									point = snap[i];
									x = point.x - p.x;
									y = point.y - p.y;
									dist = x * x + y * y;
									if (dist < minDist) {
										closest = i;
										minDist = dist;
									}
								}
								return (minDist <= radius) ? snap[closest] : p;
							};
						}
						return function(n) { return n; };
					},

					//called when the mouse is pressed (or touch starts)
					onPress = function(e, force) {
						var i;
						if (!enabled || self.isPressed || !e || ((e.type === "mousedown" || e.type === "pointerdown") && !force && _getTime() - clickTime < 30 && _touchEventLookup[self.pointerEvent.type])) { //when we DON'T preventDefault() in order to accommodate touch-scrolling and the user just taps, many browsers also fire a mousedown/mouseup sequence AFTER the touchstart/touchend sequence, thus it'd result in two quick "click" events being dispatched. This line senses that condition and halts it on the subsequent mousedown.
							return;
						}
						interrupted = isTweening();
						self.pointerEvent = e;
						if (_touchEventLookup[e.type]) { //note: on iOS, BOTH touchmove and mousemove are dispatched, but the mousemove has pageY and pageX of 0 which would mess up the calculations and needlessly hurt performance.
							touchEventTarget = (e.type.indexOf("touch") !== -1) ? (e.currentTarget || e.target) : _doc; //pointer-based touches (for Microsoft browsers) don't remain locked to the original target like other browsers, so we must use the document instead. The event type would be "MSPointerDown" or "pointerdown".
							_addListener(touchEventTarget, "touchend", onRelease);
							_addListener(touchEventTarget, "touchmove", onMove);
							_addListener(touchEventTarget, "touchcancel", onRelease);
							_addListener(_doc, "touchstart", _onMultiTouchDocument);
						} else {
							touchEventTarget = null;
							_addListener(_doc, "mousemove", onMove); //attach these to the document instead of the box itself so that if the user's mouse moves too quickly (and off of the box), things still work.
						}
						touchDragAxis = null;
						_addListener(_doc, "mouseup", onRelease);
						if (e && e.target) {
							_addListener(e.target, "mouseup", onRelease); //we also have to listen directly on the element because some browsers don't bubble up the event to the _doc on elements with contentEditable="true"
						}
						isClicking = (isClickable.call(self, e.target) && !vars.dragClickables && !force);
						if (isClicking) {
							_addListener(e.target, "change", onRelease); //in some browsers, when you mousedown on a <select> element, no mouseup gets dispatched! So we listen for a "change" event instead.
							_dispatchEvent(self, "pressInit", "onPressInit");
							_dispatchEvent(self, "press", "onPress");
							_setSelectable(triggers, true); //accommodates things like inputs and elements with contentEditable="true" (otherwise user couldn't drag to select text)
							return;
						}
						allowNativeTouchScrolling = (!touchEventTarget || allowX === allowY || self.vars.allowNativeTouchScrolling === false || (self.vars.allowContextMenu && e && (e.ctrlKey || e.which > 2))) ? false : allowX ? "y" : "x"; //note: in Chrome, right-clicking (for a context menu) fires onPress and it doesn't have the event.which set properly, so we must look for event.ctrlKey. If the user wants to allow context menus we should of course sense it here and not allow native touch scrolling.
						if (_isOldIE) {
							e = _populateIEEvent(e, true);
						} else if (!allowNativeTouchScrolling && !self.allowEventDefault) {
							e.preventDefault();
							if (e.preventManipulation) {
								e.preventManipulation();  //for some Microsoft browsers
							}
						}
						if (e.changedTouches) { //touch events store the data slightly differently
							e = touch = e.changedTouches[0];
							touchID = e.identifier;
						} else if (e.pointerId) {
							touchID = e.pointerId; //for some Microsoft browsers
						} else {
							touch = touchID = null;
						}
						_dragCount++;
						_addToRenderQueue(render); //causes the Draggable to render on each "tick" of TweenLite.ticker (performance optimization - updating values in a mousemove can cause them to happen too frequently, like multiple times between frame redraws which is wasteful, and it also prevents values from updating properly in IE8)
						startPointerY = self.pointerY = e.pageY; //record the starting x and y so that we can calculate the movement from the original in _onMouseMove
						startPointerX = self.pointerX = e.pageX;
						_dispatchEvent(self, "pressInit", "onPressInit");
						if (allowNativeTouchScrolling || self.autoScroll) {
							_recordMaxScrolls(target.parentNode);
						}
						if (target.parentNode && self.autoScroll && !scrollProxy && !rotationMode && target.parentNode._gsMaxScrollX && !_placeholderDiv.parentNode && !target.getBBox) { //add a placeholder div to prevent the parent container from collapsing when the user drags the element left.
							_placeholderDiv.style.width = target.parentNode.scrollWidth + "px";
							target.parentNode.appendChild(_placeholderDiv);
						}
						recordStartPositions();
						if (self.tween) {
							self.tween.kill();
						}
						self.isThrowing = false;
						TweenLite["default"].killTweensOf(scrollProxy || target, true, killProps); //in case the user tries to drag it before the last tween is done.
						if (scrollProxy) {
							TweenLite["default"].killTweensOf(target, true, {scrollTo:1}); //just in case the original target's scroll position is being tweened somewhere else.
						}
						self.tween = self.lockedAxis = null;
						if (vars.zIndexBoost || (!rotationMode && !scrollProxy && vars.zIndexBoost !== false)) {
							target.style.zIndex = Draggable.zIndex++;
						}
						self.isPressed = true;
						hasDragCallback = !!(vars.onDrag || self._listeners.drag);
						if (!rotationMode) {
							i = triggers.length;
							while (--i > -1) {
								_setStyle(triggers[i], "cursor", vars.cursor || "move");
							}
						}
						_dispatchEvent(self, "press", "onPress");
					},

					//called every time the mouse/touch moves
					onMove = function(e) {
						var originalEvent = e,
							touches, pointerX, pointerY, i, dx, dy;
						if (!enabled || _isMultiTouching || !self.isPressed || !e) {
							return;
						}
						self.pointerEvent = e;
						touches = e.changedTouches;
						if (touches) { //touch events store the data slightly differently
							e = touches[0];
							if (e !== touch && e.identifier !== touchID) { //Usually changedTouches[0] will be what we're looking for, but in case it's not, look through the rest of the array...(and Android browsers don't reuse the event like iOS)
								i = touches.length;
								while (--i > -1 && (e = touches[i]).identifier !== touchID) {}
								if (i < 0) {
									return;
								}
							}
						} else if (e.pointerId && touchID && e.pointerId !== touchID) { //for some Microsoft browsers, we must attach the listener to the doc rather than the trigger so that when the finger moves outside the bounds of the trigger, things still work. So if the event we're receiving has a pointerId that doesn't match the touchID, ignore it (for multi-touch)
							return;
						}
						if (_isOldIE) {
							e = _populateIEEvent(e, true);
						} else {
							if (touchEventTarget && allowNativeTouchScrolling && !touchDragAxis) { //Android browsers force us to decide on the first "touchmove" event if we should allow the default (scrolling) behavior or preventDefault(). Otherwise, a "touchcancel" will be fired and then no "touchmove" or "touchend" will fire during the scrolling (no good).
								pointerX = e.pageX;
								pointerY = e.pageY;
								if (matrix) {
									i = pointerX * matrix[0] + pointerY * matrix[2] + matrix[4];
									pointerY = pointerX * matrix[1] + pointerY * matrix[3] + matrix[5];
									pointerX = i;
								}
								dx = Math.abs(pointerX - startPointerX);
								dy = Math.abs(pointerY - startPointerY);
								if ((dx !== dy && (dx > minimumMovement || dy > minimumMovement)) || (_isAndroid && allowNativeTouchScrolling === touchDragAxis)) {
									touchDragAxis = (dx > dy && allowX) ? "x" : "y";
									if (self.vars.lockAxisOnTouchScroll !== false) {
										self.lockedAxis = (touchDragAxis === "x") ? "y" : "x";
										if (typeof(self.vars.onLockAxis) === "function") {
											self.vars.onLockAxis.call(self, originalEvent);
										}
									}
									if (_isAndroid && allowNativeTouchScrolling === touchDragAxis) {
										onRelease(originalEvent);
										return;
									}
								}
							}
							if (!self.allowEventDefault && (!allowNativeTouchScrolling || (touchDragAxis && allowNativeTouchScrolling !== touchDragAxis)) && originalEvent.cancelable !== false) {
								originalEvent.preventDefault();
								if (originalEvent.preventManipulation) { //for some Microsoft browsers
									originalEvent.preventManipulation();
								}
							}
						}
						if (self.autoScroll) {
							checkAutoScrollBounds = true;
						}
						setPointerPosition(e.pageX, e.pageY);
					},

					setPointerPosition = function(pointerX, pointerY) {
						var dragTolerance = 1 - self.dragResistance,
							edgeTolerance = 1 - self.edgeResistance,
							xChange, yChange, x, y, dif, temp;

						self.pointerX = pointerX;
						self.pointerY = pointerY;
						if (rotationMode) {
							y = Math.atan2(rotationOrigin.y - pointerY, pointerX - rotationOrigin.x) * _RAD2DEG;
							dif = self.y - y;
							if (dif > 180) {
								startElementY -= 360;
								self.y = y;
							} else if (dif < -180) {
								startElementY += 360;
								self.y = y;
							}
							if (self.x !== startElementX || Math.abs(startElementY - y) > minimumMovement) {
								self.y = y;
								x = startElementX + (startElementY - y) * dragTolerance;
							} else {
								x = startElementX;
							}

						} else {
							if (matrix) {
								temp = pointerX * matrix[0] + pointerY * matrix[2] + matrix[4];
								pointerY = pointerX * matrix[1] + pointerY * matrix[3] + matrix[5];
								pointerX = temp;
							}
							yChange = (pointerY - startPointerY);
							xChange = (pointerX - startPointerX);
							if (yChange < minimumMovement && yChange > -minimumMovement) {
								yChange = 0;
							}
							if (xChange < minimumMovement && xChange > -minimumMovement) {
								xChange = 0;
							}
							if ((self.lockAxis || self.lockedAxis) && (xChange || yChange)) {
								temp = self.lockedAxis;
								if (!temp) {
									self.lockedAxis = temp = (allowX && Math.abs(xChange) > Math.abs(yChange)) ? "y" : allowY ? "x" : null;
									if (temp && typeof(self.vars.onLockAxis) === "function") {
										self.vars.onLockAxis.call(self, self.pointerEvent);
									}
								}
								if (temp === "y") {
									yChange = 0;
								} else if (temp === "x") {
									xChange = 0;
								}
							}
							x = startElementX + xChange * dragTolerance;
							y = startElementY + yChange * dragTolerance;
						}

						if ((snapX || snapY || snapXY) && (self.x !== x || (self.y !== y && !rotationMode))) {
							if (snapXY) {
								_temp1.x = x;
								_temp1.y = y;
								temp = snapXY(_temp1);
								x = temp.x;
								y = temp.y;
							}
							if (snapX) {
								x = snapX(x);
							}
							if (snapY) {
								y = snapY(y);
							}
						} else if (hasBounds) {
							if (x > maxX) {
								x = maxX + (x - maxX) * edgeTolerance;
							} else if (x < minX) {
								x = minX + (x - minX) * edgeTolerance;
							}
							if (!rotationMode) {
								if (y > maxY) {
									y = maxY + (y - maxY) * edgeTolerance;
								} else if (y < minY) {
									y = minY + (y - minY) * edgeTolerance;
								}
							}
						}
						if (!rotationMode && !matrix) {
							x = Math.round(x); //helps work around an issue with some Win Touch devices
							y = Math.round(y);
						}
						if (self.x !== x || (self.y !== y && !rotationMode)) {
							if (rotationMode) {
								self.endRotation = self.x = self.endX = x;
								dirty = true;
							} else {
								if (allowY) {
									self.y = self.endY = y;
									dirty = true; //a flag that indicates we need to render the target next time the TweenLite.ticker dispatches a "tick" event (typically on a requestAnimationFrame) - this is a performance optimization (we shouldn't render on every move because sometimes many move events can get dispatched between screen refreshes, and that'd be wasteful to render every time)
								}
								if (allowX) {
									self.x = self.endX = x;
									dirty = true;
								}
							}
							if (!self.isDragging && self.isPressed) {
								self.isDragging = true;
								_dispatchEvent(self, "dragstart", "onDragStart");
							}
						}
					},

					//called when the mouse/touch is released
					onRelease = function(e, force) {
						if (!enabled || !self.isPressed || (e && touchID != null && !force && ((e.pointerId && e.pointerId !== touchID) || (e.changedTouches && !_hasTouchID(e.changedTouches, touchID))))) {  //for some Microsoft browsers, we must attach the listener to the doc rather than the trigger so that when the finger moves outside the bounds of the trigger, things still work. So if the event we're receiving has a pointerId that doesn't match the touchID, ignore it (for multi-touch)
							return;
						}
						self.isPressed = false;
						var originalEvent = e,
							wasDragging = self.isDragging,
							isContextMenuRelease = (self.vars.allowContextMenu && e && (e.ctrlKey || e.which > 2)),
							placeholderDelayedCall = TweenLite["default"].delayedCall(0.001, removePlaceholder),
							touches, i, syntheticEvent, eventTarget, syntheticClick;
						if (touchEventTarget) {
							_removeListener(touchEventTarget, "touchend", onRelease);
							_removeListener(touchEventTarget, "touchmove", onMove);
							_removeListener(touchEventTarget, "touchcancel", onRelease);
							_removeListener(_doc, "touchstart", _onMultiTouchDocument);
						} else {
							_removeListener(_doc, "mousemove", onMove);
						}
						_removeListener(_doc, "mouseup", onRelease);
						if (e && e.target) {
							_removeListener(e.target, "mouseup", onRelease);
						}
						dirty = false;
						if (isClicking && !isContextMenuRelease) {
							if (e) {
								_removeListener(e.target, "change", onRelease);
								self.pointerEvent = originalEvent;
							}
							_setSelectable(triggers, false);
							_dispatchEvent(self, "release", "onRelease");
							_dispatchEvent(self, "click", "onClick");
							isClicking = false;
							return;
						}
						_removeFromRenderQueue(render);
						if (!rotationMode) {
							i = triggers.length;
							while (--i > -1) {
								_setStyle(triggers[i], "cursor", vars.cursor || "move");
							}
						}
						if (wasDragging) {
							dragEndTime = _lastDragTime = _getTime();
							self.isDragging = false;
						}
						_dragCount--;
						if (e) {
							if (_isOldIE) {
								e = _populateIEEvent(e, false);
							}
							touches = e.changedTouches;
							if (touches) { //touch events store the data slightly differently
								e = touches[0];
								if (e !== touch && e.identifier !== touchID) { //Usually changedTouches[0] will be what we're looking for, but in case it's not, look through the rest of the array...(and Android browsers don't reuse the event like iOS)
									i = touches.length;
									while (--i > -1 && (e = touches[i]).identifier !== touchID) {}
									if (i < 0) {
										return;
									}
								}
							}
							self.pointerEvent = originalEvent;
							self.pointerX = e.pageX;
							self.pointerY = e.pageY;
						}
						if (isContextMenuRelease && originalEvent) {
							originalEvent.preventDefault();
							if (originalEvent.preventManipulation) {
								originalEvent.preventManipulation();  //for some Microsoft browsers
							}
							_dispatchEvent(self, "release", "onRelease");
						} else if (originalEvent && !wasDragging) {
							if (interrupted && (vars.snap || vars.bounds)) { //otherwise, if the user clicks on the object while it's animating to a snapped position, and then releases without moving 3 pixels, it will just stay there (it should animate/snap)
								animate(vars.throwProps);
							}
							_dispatchEvent(self, "release", "onRelease");
							if ((!_isAndroid || originalEvent.type !== "touchmove") && originalEvent.type.indexOf("cancel") === -1) { //to accommodate native scrolling on Android devices, we have to immediately call onRelease() on the first touchmove event, but that shouldn't trigger a "click".
								_dispatchEvent(self, "click", "onClick");
								if (_getTime() - clickTime < 300) {
									_dispatchEvent(self, "doubleclick", "onDoubleClick");
								}
								eventTarget = originalEvent.target || originalEvent.srcElement || target; //old IE uses srcElement
								clickTime = _getTime();
								syntheticClick = function () { // some browsers (like Firefox) won't trust script-generated clicks, so if the user tries to click on a video to play it, for example, it simply won't work. Since a regular "click" event will most likely be generated anyway (one that has its isTrusted flag set to true), we must slightly delay our script-generated click so that the "real"/trusted one is prioritized. Remember, when there are duplicate events in quick succession, we suppress all but the first one. Some browsers don't even trigger the "real" one at all, so our synthetic one is a safety valve that ensures that no matter what, a click event does get dispatched.
									if (clickTime !== clickDispatch && self.enabled() && !self.isPressed) {
										if (eventTarget.click) { //some browsers (like mobile Safari) don't properly trigger the click event
											eventTarget.click();
										} else if (_doc.createEvent) {
											syntheticEvent = _doc.createEvent("MouseEvents");
											syntheticEvent.initMouseEvent("click", true, true, window, 1, self.pointerEvent.screenX, self.pointerEvent.screenY, self.pointerX, self.pointerY, false, false, false, false, 0, null);
											eventTarget.dispatchEvent(syntheticEvent);
										}
									}
								};
								if (!_isAndroid && !originalEvent.defaultPrevented) { //iOS Safari requires the synthetic click to happen immediately or else it simply won't work, but Android doesn't play nice.
									TweenLite["default"].delayedCall(0.00001, syntheticClick); //in addition to the iOS bug workaround, there's a Firefox issue with clicking on things like a video to play, so we must fake a click event in a slightly delayed fashion. Previously, we listened for the "click" event with "capture" false which solved the video-click-to-play issue, but it would allow the "click" event to be dispatched twice like if you were using a jQuery.click() because that was handled in the capture phase, thus we had to switch to the capture phase to avoid the double-dispatching, but do the delayed synthetic click.
								}
							}
						} else {
							animate(vars.throwProps); //will skip if throwProps isn't defined or ThrowPropsPlugin isn't loaded.
							if (!_isOldIE && !self.allowEventDefault && originalEvent && (vars.dragClickables || !isClickable.call(self, originalEvent.target)) && wasDragging && (!allowNativeTouchScrolling || (touchDragAxis && allowNativeTouchScrolling === touchDragAxis)) && originalEvent.cancelable !== false) {
								originalEvent.preventDefault();
								if (originalEvent.preventManipulation) {
									originalEvent.preventManipulation();  //for some Microsoft browsers
								}
							}
							_dispatchEvent(self, "release", "onRelease");
						}
						if (isTweening()) {
							placeholderDelayedCall.duration( self.tween.duration() ); //sync the timing so that the placeholder DIV gets
						}
						if (wasDragging) {
							_dispatchEvent(self, "dragend", "onDragEnd");
						}
						return true;
					},

					updateScroll = function(e) {
						if (e && self.isDragging && !scrollProxy) {
							var parent = e.target || e.srcElement || target.parentNode,
								deltaX = parent.scrollLeft - parent._gsScrollX,
								deltaY = parent.scrollTop - parent._gsScrollY;
							if (deltaX || deltaY) {
								if (matrix) {
									startPointerX -= deltaX * matrix[0] + deltaY * matrix[2];
									startPointerY -= deltaY * matrix[3] + deltaX * matrix[1];
								} else {
									startPointerX -= deltaX;
									startPointerY -= deltaY;
								}
								parent._gsScrollX += deltaX;
								parent._gsScrollY += deltaY;
								setPointerPosition(self.pointerX, self.pointerY);
							}
						}
					},

					onClick = function(e) { //this was a huge pain in the neck to align all the various browsers and their behaviors. Chrome, Firefox, Safari, Opera, Android, and Microsoft Edge all handle events differently! Some will only trigger native behavior (like checkbox toggling) from trusted events. Others don't even support isTrusted, but require 2 events to flow through before triggering native behavior. Edge treats everything as trusted but also mandates that 2 flow through to trigger the correct native behavior.
						var time = _getTime(),
							recentlyClicked = (time - clickTime < 40),
							recentlyDragged = (time - dragEndTime < 40),
							alreadyDispatched = (recentlyClicked && clickDispatch === clickTime),
							isModern = !!e.preventDefault,
							defaultPrevented = (self.pointerEvent && self.pointerEvent.defaultPrevented),
							alreadyDispatchedTrusted = (recentlyClicked && trustedClickDispatch === clickTime),
							trusted = e.isTrusted || (e.isTrusted == null && recentlyClicked && alreadyDispatched); //note: Safari doesn't support isTrusted, and it won't properly execute native behavior (like toggling checkboxes) on the first synthetic "click" event - we must wait for the 2nd and treat it as trusted (but stop propagation at that point). Confusing, I know. Don't you love cross-browser compatibility challenges?
						if (isModern && (alreadyDispatched || (recentlyDragged && self.vars.suppressClickOnDrag !== false) )) {
							e.stopImmediatePropagation();
						}
						if (recentlyClicked && !(self.pointerEvent && self.pointerEvent.defaultPrevented) && (!alreadyDispatched || (trusted !== alreadyDispatchedTrusted))) { //let the first click pass through unhindered. Let the next one only if it's trusted, then no more (stop quick-succession ones)
							if (trusted && alreadyDispatched) {
								trustedClickDispatch = clickTime;
							}
							clickDispatch = clickTime;
							return;
						}
						if (self.isPressed || recentlyDragged || recentlyClicked) {
							if (!isModern) {
								e.returnValue = false;
							} else if (!trusted || !e.detail || !recentlyClicked || defaultPrevented) {
								e.preventDefault();
								if (e.preventManipulation) {
									e.preventManipulation();  //for some Microsoft browsers
								}
							}
						}
					},

					localizePoint = function(p) {
						return matrix ? {x:p.x * matrix[0] + p.y * matrix[2] + matrix[4], y:p.x * matrix[1] + p.y * matrix[3] + matrix[5]} : {x:p.x, y:p.y};
					};

				old = Draggable.get(this.target);
				if (old) {
					old.kill(); // avoids duplicates (an element can only be controlled by one Draggable)
				}

				//give the user access to start/stop dragging...
				this.startDrag = function(e, align) {
					var r1, r2, p1, p2;
					onPress(e || self.pointerEvent, true);
					//if the pointer isn't on top of the element, adjust things accordingly
					if (align && !self.hitTest(e || self.pointerEvent)) {
						r1 = _parseRect(e || self.pointerEvent);
						r2 = _parseRect(target);
						p1 = localizePoint({x:r1.left + r1.width / 2, y:r1.top + r1.height / 2});
						p2 = localizePoint({x:r2.left + r2.width / 2, y:r2.top + r2.height / 2});
						startPointerX -= p1.x - p2.x;
						startPointerY -= p1.y - p2.y;
					}
					if (!self.isDragging) {
						self.isDragging = true;
						_dispatchEvent(self, "dragstart", "onDragStart");
					}
				};
				this.drag = onMove;
				this.endDrag = function(e) {
					onRelease(e || self.pointerEvent, true);
				};
				this.timeSinceDrag = function() {
					return self.isDragging ? 0 : (_getTime() - dragEndTime) / 1000;
				};
				this.timeSinceClick = function() {
					return (_getTime() - clickTime) / 1000;
				};
				this.hitTest = function(target, threshold) {
					return Draggable.hitTest(self.target, target, threshold);
				};

				this.getDirection = function(from, diagonalThreshold) { //from can be "start" (default), "velocity", or an element
					var mode = (from === "velocity" && ThrowPropsPlugin) ? from : (typeof(from) === "object" && !rotationMode) ? "element" : "start",
						xChange, yChange, ratio, direction, r1, r2;
					if (mode === "element") {
						r1 = _parseRect(self.target);
						r2 = _parseRect(from);
					}
					xChange = (mode === "start") ? self.x - startElementX : (mode === "velocity") ? ThrowPropsPlugin.getVelocity(this.target, xProp) : (r1.left + r1.width / 2) - (r2.left + r2.width / 2);
					if (rotationMode) {
						return xChange < 0 ? "counter-clockwise" : "clockwise";
					} else {
						diagonalThreshold = diagonalThreshold || 2;
						yChange = (mode === "start") ? self.y - startElementY : (mode === "velocity") ? ThrowPropsPlugin.getVelocity(this.target, yProp) : (r1.top + r1.height / 2) - (r2.top + r2.height / 2);
						ratio = Math.abs(xChange / yChange);
						direction = (ratio < 1 / diagonalThreshold) ? "" : (xChange < 0) ? "left" : "right";
						if (ratio < diagonalThreshold) {
							if (direction !== "") {
								direction += "-";
							}
							direction += (yChange < 0) ? "up" : "down";
						}
					}
					return direction;
				};


				this.applyBounds = function(newBounds) {
					var x, y, forceZeroVelocity, e, parent, isRoot;
					if (newBounds && vars.bounds !== newBounds) {
						vars.bounds = newBounds;
						return self.update(true);
					}
					syncXY(true);
					calculateBounds();
					if (hasBounds) {
						x = self.x;
						y = self.y;
						if (x > maxX) {
							x = maxX;
						} else if (x < minX) {
							x = minX;
						}
						if (y > maxY) {
							y = maxY;
						} else if (y < minY) {
							y = minY;
						}
						if (self.x !== x || self.y !== y) {
							forceZeroVelocity = true;
							self.x = self.endX = x;
							if (rotationMode) {
								self.endRotation = x;
							} else {
								self.y = self.endY = y;
							}
							dirty = true;
							render(true);
							if (self.autoScroll && !self.isDragging) {
								_recordMaxScrolls(target.parentNode);
								e = target;
								_windowProxy.scrollTop = ((window.pageYOffset != null) ? window.pageYOffset : (_docElement.scrollTop != null) ? _docElement.scrollTop : _doc.body.scrollTop);
								_windowProxy.scrollLeft = ((window.pageXOffset != null) ? window.pageXOffset : (_docElement.scrollLeft != null) ? _docElement.scrollLeft : _doc.body.scrollLeft);
								while (e && !isRoot) { //walk up the chain and sense wherever the scrollTop/scrollLeft exceeds the maximum.
									isRoot = _isRoot(e.parentNode);
									parent = isRoot ? _windowProxy : e.parentNode;
									if (allowY && parent.scrollTop > parent._gsMaxScrollY) {
										parent.scrollTop = parent._gsMaxScrollY;
									}
									if (allowX && parent.scrollLeft > parent._gsMaxScrollX) {
										parent.scrollLeft = parent._gsMaxScrollX;
									}
									e = parent;
								}
							}
						}
						if (self.isThrowing && (forceZeroVelocity || self.endX > maxX || self.endX < minX || self.endY > maxY || self.endY < minY)) {
							animate(vars.throwProps, forceZeroVelocity);
						}
					}
					return self;
				};

				this.update = function(applyBounds, sticky, ignoreExternalChanges) {
					var x = self.x,
						y = self.y;
					updateMatrix(!sticky);
					if (applyBounds) {
						self.applyBounds();
					} else {
						if (dirty && ignoreExternalChanges) {
							render(true);
						}
						syncXY(true);
					}
					if (sticky) {
						setPointerPosition(self.pointerX, self.pointerY);
						if (dirty) {
							render(true);
						}
					}
					if (self.isPressed && !sticky && ((allowX && Math.abs(x - self.x) > 0.01) || (allowY && (Math.abs(y - self.y) > 0.01 && !rotationMode)))) {
						recordStartPositions();
					}
					if (self.autoScroll) {
						_recordMaxScrolls(target.parentNode);
						checkAutoScrollBounds = self.isDragging;
						render(true);
					}
					if (self.autoScroll) { //in case reparenting occurred.
						_removeScrollListener(target, updateScroll);
						_addScrollListener(target, updateScroll);
					}
					return self;
				};

				this.enable = function(type) {
					var id, i, trigger;
					if (type !== "soft") {
						i = triggers.length;
						while (--i > -1) {
							trigger = triggers[i];
							_addListener(trigger, "mousedown", onPress);
							_addListener(trigger, "touchstart", onPress);
							_addListener(trigger, "click", onClick, true); //note: used to pass true for capture but it prevented click-to-play-video functionality in Firefox.
							if (!rotationMode) {
								_setStyle(trigger, "cursor", vars.cursor || "move");
							}
							_setStyle(trigger, "touchCallout", "none");
							_setStyle(trigger, "touchAction", (allowX === allowY) ? "none" : allowX ? "pan-y" : "pan-x");
							if (_isSVG(trigger)) { // a bug in chrome doesn't respect touch-action on SVG elements - it only works if we set it on the parent SVG.
								_setStyle(trigger.ownerSVGElement || trigger, "touchAction", (allowX === allowY) ? "none" : allowX ? "pan-y" : "pan-x");
							}
							if (!this.vars.allowContextMenu) {
								_addListener(trigger, "contextmenu", onContextMenu);
							}
						}
						_setSelectable(triggers, false);
					}
					_addScrollListener(target, updateScroll);
					enabled = true;
					if (ThrowPropsPlugin && type !== "soft") {
						ThrowPropsPlugin.track(scrollProxy || target, (xyMode ? "x,y" : rotationMode ? "rotation" : "top,left"));
					}
					if (scrollProxy) {
						scrollProxy.enable();
					}
					target._gsDragID = id = "d" + (_lookupCount++);
					_lookup[id] = this;
					if (scrollProxy) {
						scrollProxy.element._gsDragID = id;
					}
					TweenLite["default"].set(target, {x:"+=0", overwrite:false, data:"_draggable"}); //simply ensures that there's a _gsTransform on the element.
					applyObj = {
						t:target,
						data:_isOldIE ? cssVars : target._gsTransform,
						tween:{},
						setRatio:(_isOldIE ? function() { TweenLite["default"].set(target, tempVars); } : CSSPlugin_CSSPlugin._internals.setTransformRatio || CSSPlugin_CSSPlugin._internals.set3DTransformRatio)
					};
					recordStartPositions();
					self.update(true);
					return self;
				};

				this.disable = function(type) {
					var dragging = self.isDragging,
						i, trigger;
					if (!rotationMode) {
						i = triggers.length;
						while (--i > -1) {
							_setStyle(triggers[i], "cursor", null);
						}
					}
					if (type !== "soft") {
						i = triggers.length;
						while (--i > -1) {
							trigger = triggers[i];
							_setStyle(trigger, "touchCallout", null);
							_setStyle(trigger, "touchAction", null);
							_removeListener(trigger, "mousedown", onPress);
							_removeListener(trigger, "touchstart", onPress);
							_removeListener(trigger, "click", onClick);
							_removeListener(trigger, "contextmenu", onContextMenu);
						}
						_setSelectable(triggers, true);
						if (touchEventTarget) {
							_removeListener(touchEventTarget, "touchcancel", onRelease);
							_removeListener(touchEventTarget, "touchend", onRelease);
							_removeListener(touchEventTarget, "touchmove", onMove);
						}
						_removeListener(_doc, "mouseup", onRelease);
						_removeListener(_doc, "mousemove", onMove);
					}
					_removeScrollListener(target, updateScroll);
					enabled = false;
					if (ThrowPropsPlugin && type !== "soft") {
						ThrowPropsPlugin.untrack(scrollProxy || target, (xyMode ? "x,y" : rotationMode ? "rotation" : "top,left"));
					}
					if (scrollProxy) {
						scrollProxy.disable();
					}
					_removeFromRenderQueue(render);
					self.isDragging = self.isPressed = isClicking = false;
					if (dragging) {
						_dispatchEvent(self, "dragend", "onDragEnd");
					}
					return self;
				};

				this.enabled = function(value, type) {
					return arguments.length ? (value ? self.enable(type) : self.disable(type)) : enabled;
				};

				this.kill = function() {
					self.isThrowing = false;
					TweenLite["default"].killTweensOf(scrollProxy || target, true, killProps);
					self.disable();
					TweenLite["default"].set(triggers, {clearProps:"userSelect"});
					delete _lookup[target._gsDragID];
					return self;
				};

				if (type.indexOf("scroll") !== -1) {
					scrollProxy = this.scrollProxy = new ScrollProxy(target, _extend({onKill:function() { //ScrollProxy's onKill() gets called if/when the ScrollProxy senses that the user interacted with the scroll position manually (like using the scrollbar). IE9 doesn't fire the "mouseup" properly when users drag the scrollbar of an element, so this works around that issue.
						if (self.isPressed) {
							onRelease(null);
						}}}, vars));
					//a bug in many Android devices' stock browser causes scrollTop to get forced back to 0 after it is altered via JS, so we set overflow to "hidden" on mobile/touch devices (they hide the scroll bar anyway). That works around the bug. (This bug is discussed at https://code.google.com/p/android/issues/detail?id=19625)
					target.style.overflowY = (allowY && !_isTouchDevice) ? "auto" : "hidden";
					target.style.overflowX = (allowX && !_isTouchDevice) ? "auto" : "hidden";
					target = scrollProxy.content;
				}

				if (vars.force3D !== false) {
					TweenLite["default"].set(target, {force3D:true}); //improve performance by forcing a GPU layer when possible
				}
				if (rotationMode) {
					killProps.rotation = 1;
				} else {
					if (allowX) {
						killProps[xProp] = 1;
					}
					if (allowY) {
						killProps[yProp] = 1;
					}
				}
				if (rotationMode) {
					tempVars = _tempVarsRotation;
					cssVars = tempVars.css;
					tempVars.overwrite = false;
				} else if (xyMode) {
					tempVars = (allowX && allowY) ? _tempVarsXY : allowX ? _tempVarsX : _tempVarsY;
					cssVars = tempVars.css;
					tempVars.overwrite = false;
				}

				this.enable();
			},
			p = Draggable.prototype = new TweenLite["EventDispatcher"]();

		p.constructor = Draggable;
		p.pointerX = p.pointerY = p.startX = p.startY = p.deltaX = p.deltaY = 0;
		p.isDragging = p.isPressed = false;
		Draggable.version = "0.16.5";
		Draggable.zIndex = 1000;

		_addListener(_doc, "touchcancel", function() {
			//some older Android devices intermittently stop dispatching "touchmove" events if we don't listen for "touchcancel" on the document. Very strange indeed.
		});
		_addListener(_doc, "contextmenu", function(e) {
			var p;
			for (p in _lookup) {
				if (_lookup[p].isPressed) {
					_lookup[p].endDrag();
				}
			}
		});

		Draggable.create = function(targets, vars) {
			if (typeof(targets) === "string") {
				targets = TweenLite["default"].selector(targets);
			}
			var a = (!targets || targets.length === 0) ? [] : _isArrayLike(targets) ? _flattenArray(targets) : [targets],
				i = a.length;
			while (--i > -1) {
				a[i] = new Draggable(a[i], vars);
			}
			return a;
		};

		Draggable.get = function(target) {
			return _lookup[(_unwrapElement(target) || {})._gsDragID];
		};

		Draggable.timeSinceDrag = function() {
			return (_getTime() - _lastDragTime) / 1000;
		};

		var _tempRect = {}, //reuse to reduce garbage collection tasks
			_oldIERect = function(e) { //IE8 doesn't support getBoundingClientRect(), so we use this as a backup.
				var top = 0,
					left = 0,
					width, height;
				e = _unwrapElement(e);
				width = e.offsetWidth;
				height = e.offsetHeight;
				while(e) {
					top += e.offsetTop;
					left += e.offsetLeft;
					e = e.offsetParent;
				}
				return {top: top, left: left, width: width, height: height};
			},
			_parseRect = function(e, undefined) { //accepts a DOM element, a mouse event, or a rectangle object and returns the corresponding rectangle with left, right, width, height, top, and bottom properties
				if (e === window) {
					_tempRect.left = _tempRect.top = 0;
					_tempRect.width = _tempRect.right = _docElement.clientWidth || e.innerWidth || _doc.body.clientWidth || 0;
					_tempRect.height = _tempRect.bottom = ((e.innerHeight || 0) - 20 < _docElement.clientHeight) ? _docElement.clientHeight : e.innerHeight || _doc.body.clientHeight || 0;
					return _tempRect;
				}
				var r = (e.pageX !== undefined) ? {left:e.pageX - _getDocScrollLeft(), top:e.pageY - _getDocScrollTop(), right:e.pageX - _getDocScrollLeft() + 1, bottom:e.pageY - _getDocScrollTop() + 1} : (!e.nodeType && e.left !== undefined && e.top !== undefined) ? e : _isOldIE ? _oldIERect(e) : _unwrapElement(e).getBoundingClientRect();
				if (r.right === undefined && r.width !== undefined) {
					r.right = r.left + r.width;
					r.bottom = r.top + r.height;
				} else if (r.width === undefined) { //some browsers don't include width and height properties. We can't just set them directly on r because some browsers throw errors, so create a new generic object.
					r = {width: r.right - r.left, height: r.bottom - r.top, right: r.right, left: r.left, bottom: r.bottom, top: r.top};
				}
				return r;
			};

		Draggable.hitTest = function(obj1, obj2, threshold) {
			if (obj1 === obj2) {
				return false;
			}
			var r1 = _parseRect(obj1),
				r2 = _parseRect(obj2),
				isOutside = (r2.left > r1.right || r2.right < r1.left || r2.top > r1.bottom || r2.bottom < r1.top),
				overlap, area, isRatio;
			if (isOutside || !threshold) {
				return !isOutside;
			}
			isRatio = ((threshold + "").indexOf("%") !== -1);
			threshold = parseFloat(threshold) || 0;
			overlap = {left:Math.max(r1.left, r2.left), top:Math.max(r1.top, r2.top)};
			overlap.width = Math.min(r1.right, r2.right) - overlap.left;
			overlap.height = Math.min(r1.bottom, r2.bottom) - overlap.top;
			if (overlap.width < 0 || overlap.height < 0) {
				return false;
			}
			if (isRatio) {
				threshold *= 0.01;
				area = overlap.width * overlap.height;
				return (area >= r1.width * r1.height * threshold || area >= r2.width * r2.height * threshold);
			}
			return (overlap.width > threshold && overlap.height > threshold);
		};

		_placeholderDiv.style.cssText = "visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;";

		return Draggable;

	}, true);

var Draggable_Draggable = TweenLite["globals"].Draggable;


/***/ })
/******/ ])});;
//# sourceMappingURL=components.js.map