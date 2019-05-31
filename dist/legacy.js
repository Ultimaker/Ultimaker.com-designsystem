define("components", ["vue-property-decorator","gsap","lodash/debounce","gsap/Draggable","vuex","vue"], function(__WEBPACK_EXTERNAL_MODULE__0__, __WEBPACK_EXTERNAL_MODULE__1__, __WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__26__, __WEBPACK_EXTERNAL_MODULE__58__, __WEBPACK_EXTERNAL_MODULE__64__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 98);
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";

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
class Image {
}
exports.Image = Image;


/***/ }),
/* 4 */
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
/* 5 */
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
/* 6 */
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
/* 7 */
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
/* 8 */
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
/* 9 */
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
/* 10 */
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
/* 11 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('img',{staticClass:"img--contain",class:_vm.classList,attrs:{"alt":_vm.alt,"src":_vm.src,"srcset":_vm.srcset},on:{"error":function($event){return _vm.$emit('error')}}})}
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
/* 12 */
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
/* 13 */
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
/* 14 */
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
/* 15 */
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
/* 16 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"link link--icon link--large",attrs:{"href":_vm.youtubeUrl,"target":"_blank"},on:{"click":function($event){$event.preventDefault();return _vm.triggerClick($event)}}},[_c('icon',{attrs:{"icon-name":_vm.icon}}),_vm._v(" "),_c('span',{staticClass:"link__underline"},[_vm._v("\n        "+_vm._s(_vm.label)+"\n    ")]),_vm._v(" "),(_vm.videoVisible)?_c('modal',{staticClass:"modal--video",on:{"close":_vm.toggleVideoVisible}},[_c('youtube-video',{attrs:{"video-id":_vm.youtubeId}})],1):_vm._e()],1)}
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
/* 17 */
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
/* 18 */
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
/* 19 */
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
/* 20 */
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
/* 21 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{staticClass:"business-card",attrs:{"href":_vm.contentLink.url,"rel":"noopener","target":"_blank","tabindex":"0"},on:{"click":function($event){_vm.clickEvent ? _vm.$emitPublic(_vm.clickEventType, _vm.clickEventData) : ''}}},[_c('div',{staticClass:"business-card__header"},[_c('div',{staticClass:"business-card__image-wrapper"},[(_vm.image)?_c('responsive-picture',_vm._b({},'responsive-picture',_vm.mapImage(_vm.image),false)):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"business-card__description"},[_c('h4',{staticClass:"business-card__title"},[_vm._v("\n                "+_vm._s(_vm.title)+"\n            ")]),_vm._v(" "),_vm._l((_vm.properties),function(property){return (_vm.properties)?_c('p',{staticClass:"business-card__property"},[_vm._v("\n                "+_vm._s(property.value)+" "+_vm._s(property.label)+"\n            ")]):_vm._e()})],2)]),_vm._v(" "),_c('div',{staticClass:"business-card__footer"},[_c('span',{staticClass:"link faux-content-link business-card__link"},[_c('span',{staticClass:"link__underline"},[_vm._v("\n                "+_vm._s(_vm.contentLink.label)+"\n            ")])])])])}
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
/* 22 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"card-product"},[_c('anchor-overlay',{attrs:{"url":_vm.url,"title":_vm.title}}),_vm._v(" "),_c('div',{staticClass:"card-product__image-container"},[(_vm.image && !_vm.imageError)?_c('c-image',_vm._b({staticClass:"card-product__image",on:{"error":function($event){_vm.imageError = true}}},'c-image',_vm.image,false)):_vm._e(),_vm._v(" "),(!_vm.image || _vm.imageError)?_c('div',{staticClass:"img--contain card-product__image gray-background"},[_vm._v(_vm._s(_vm.title))]):_vm._e()],1),_vm._v(" "),_c('h3',{staticClass:"card-product__heading"},[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),_c('list-unordered',{staticClass:"card-product__list",attrs:{"listItems":_vm.listItems}})],1)}
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
/* 23 */
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
/* 24 */
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
/* 25 */
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
/* 26 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__26__;

/***/ }),
/* 27 */
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
/* 28 */
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
/* 29 */
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
/* 30 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.navigation && _vm.navigation.length)?_c('nav',{staticClass:"footer__nav"},[_c('div',{staticClass:"flexgrid"},[_c('div',{staticClass:"flexgrid__cell--xxs-6 flexgrid__cell--xs-8 flexgrid__cell--sm-6"},[_c('div',{staticClass:"flexgrid"},[(_vm.navigation.length > 0)?_c('div',{staticClass:"flexgrid__cell--xs-6"},[_c('div',{staticClass:"footer-nav__column"},[_c('h3',{staticClass:"footer-nav__title",attrs:{"id":"footer-nav__title-01"}},[_vm._v(_vm._s(_vm.navigation[0].label))]),_vm._v(" "),(_vm.navigation[0].items.length)?[_c('content-link-list',{attrs:{"links":_vm.navigation[0].items,"block":"footer-nav","aria-labelledby":"footer-nav__title-01"}})]:_vm._e()],2)]):_vm._e(),_vm._v(" "),(_vm.navigation.length > 1)?_c('div',{staticClass:"flexgrid__cell--xs-6"},[_c('div',{staticClass:"footer-nav__column"},[_c('h3',{staticClass:"footer-nav__title",attrs:{"id":"footer-nav__title-02"}},[_vm._v(_vm._s(_vm.navigation[1].label))]),_vm._v(" "),(_vm.navigation[1].items.length)?[_c('content-link-list',{attrs:{"links":_vm.navigation[1].items,"block":"footer-nav","aria-labelledby":"footer-nav__title-02"}})]:_vm._e()],2)]):_vm._e()])]),_vm._v(" "),(_vm.navigation.length > 2)?_c('div',{staticClass:"flexgrid__cell--xxs-6 flexgrid__cell--xs-4 flexgrid__cell--sm-6"},[_c('div',{staticClass:"footer-nav__column footer-nav__column--last footer-nav__column--double"},[_c('h3',{staticClass:"footer-nav__title",attrs:{"id":"footer-nav__title-03"}},[_vm._v(_vm._s(_vm.navigation[2].label))]),_vm._v(" "),(_vm.navigation[2].items.length)?[_c('content-link-list',{attrs:{"links":_vm.navigation[2].items,"block":"footer-nav","aria-labelledby":"footer-nav__title-03"}})]:_vm._e()],2)]):_vm._e()])]):_vm._e()}
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
/* 31 */
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
/* 32 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"legal"},[_c('p',{staticClass:"legal__copyright-label"},[_c('small',{domProps:{"innerHTML":_vm._s(_vm.label)}})]),_vm._v(" "),(_vm.navigation && _vm.navigation.length)?[_c('nav',{staticClass:"legal__nav"},[_c('content-link-list',{attrs:{"links":_vm.navigation,"block":"legal"}})],1)]:_vm._e()],2)}
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
/* 33 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"list-section",class:_vm.defineCardTypesClass()},[(_vm.title)?[_c('header',{staticClass:"list-section__header"},[_c('h3',{staticClass:"list-section__title"},[_vm._v(_vm._s(_vm.title)+"\n                "),_c('span',{staticClass:"list-section__count"},[_vm._v("("+_vm._s(_vm.cards.length)+")")]),_vm._v(" "),(_vm.tooltip)?[_c('transition',{attrs:{"name":"tooltip"}},[_c('tooltip',_vm._b({directives:[{name:"show",rawName:"v-show",value:(_vm.visibleTooltip),expression:"visibleTooltip"}],staticClass:"section-tooltip",attrs:{"block":"list-section","id":("tooltip_" + _vm.uniqId)}},'tooltip',_vm.tooltip,false),[_vm._v("\n                            "+_vm._s(_vm.tooltip.description)+"\n                        ")])],1)]:_vm._e()],2),_vm._v(" "),(_vm.tooltip)?[(_vm.tooltip)?_c('action-button',{staticClass:"link list-section__info-link",attrs:{"icon":_vm.tooltip.icon,"mod":"reversed","role":"button","aria-describedby":("tooltip_" + _vm.uniqId)},nativeOn:{"click":function($event){$event.preventDefault();return _vm.toggleTooltip($event)},"blur":function($event){$event.preventDefault();return _vm.hideTooltip($event)}}},[_vm._v("\n                    "+_vm._s(_vm.tooltip.label)+"\n                ")]):_vm._e()]:_vm._e()],2)]:_vm._e(),_vm._v(" "),(_vm.cards && _vm.cards.length > 0)?_c('ul',{staticClass:"list-section-list",attrs:{"aria-label":_vm.title}},[_c('div',{staticClass:"flexgrid flexgrid--justify-space-between flexgrid--mobile-xl-row"},_vm._l((_vm.cards),function(card,index){return (index < _vm.showMax)?_c('div',{key:index,staticClass:"flexgrid__cell--md-4 flexgrid__cell--xs-6"},[_c('li',{ref:"visible",refInFor:true,staticClass:"list-section-list__item"},[_c(card.type,_vm._b({tag:"component"},'component',card,false))],1)]):_vm._e()}),0),_vm._v(" "),(_vm.cards.length > _vm.showMax)?_c('transition-group',{staticClass:"flexgrid flexgrid--justify-space-between flexgrid--mobile-xl-row list-section--hidden",attrs:{"tag":"div","css":false},on:{"before-enter":_vm.beforeEnter,"enter":_vm.enter}},_vm._l((_vm.cards),function(card,index){return (index >= _vm.showMax)?_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.showHiddenItems),expression:"showHiddenItems"}],key:card.title + index,staticClass:"flexgrid__cell--md-4 flexgrid__cell--xs-6",attrs:{"data-index":index}},[_c('li',{staticClass:"list-section-list__item"},[_c(card.type,_vm._b({tag:"component"},'component',card,false))],1)]):_vm._e()}),0):_vm._e()],1):_vm._e(),_vm._v(" "),(_vm.cards.length > _vm.showMax && _vm.showMax && !_vm.showHiddenItems)?_c('footer',{staticClass:"list-section__footer"},[_c('button',{staticClass:"button--secondary list-section__footer__button",on:{"click":_vm.showHidden}},[_vm._v(_vm._s(_vm.showCount())+"\n        ")])]):_vm._e()],2)}
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
/* 34 */
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
/* 35 */
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
/* 36 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('nav',{key:"large-menu",staticClass:"main-nav",class:_vm.classList,attrs:{"aria-label":"site"}},[_c('ul',{staticClass:"main-nav__list",class:{'main-nav__list-visible': _vm.mainNavOpen && _vm.showCompactMenu},attrs:{"role":"menu"}},_vm._l((_vm.items),function(item,index){return (_vm.items)?_c('main-nav-item',_vm._b({key:index,ref:"navItem",refInFor:true,attrs:{"is-compact":_vm.showCompactMenu,"main-nav-open":_vm.mainNavOpen,"active":false,"itemId":'nav-' + index}},'main-nav-item',item,false)):_vm._e()}),1)])}
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
/* 37 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',{staticClass:"main-nav__item",class:{ 'main-nav__item--active': _vm.active },attrs:{"role":"menuitem"},on:{"mouseleave":_vm.delayHideFlyout,"mouseenter":_vm.showFlyout}},[_c('div',{on:{"keydown":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"down",40,$event.key,["Down","ArrowDown"])){ return null; }$event.preventDefault();return _vm.selectFlyoutFirstLink($event)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"tab",9,$event.key,"Tab")){ return null; }if(!$event.shiftKey){ return null; }if($event.ctrlKey||$event.altKey||$event.metaKey){ return null; }return _vm.hideFlyout($event)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }$event.preventDefault();return _vm.hideFlyout($event)}]}},[_c('base-link',{ref:"parent",staticClass:"main-nav__link",attrs:{"url":_vm.url,"aria-haspopup":"true","aria-controls":_vm.itemId,"aria-current":_vm.isActive,"label":_vm.label,"aria-expanded":!_vm.isCompact && _vm.flyoutIsOpen},on:{"focus":_vm.showFlyout},nativeOn:{"click":function($event){return _vm.hideFlyout($event)}}})],1),_vm._v(" "),_c('icon-button',{directives:[{name:"show",rawName:"v-show",value:(_vm.toggleIsVisible),expression:"toggleIsVisible"}],staticClass:"icon-button--small main-nav__toggle disable-focus",attrs:{"icon-name":_vm.angleDirection,"tabindex":"-1"},on:{"click":_vm.toggleFlyout}}),_vm._v(" "),(_vm.items)?_c('flyout',{ref:"flyout",staticClass:"flyout--large",class:{ 'flyout--is-open': _vm.flyoutIsOpen },attrs:{"id":_vm.itemId,"items":_vm.items,"is-compact":_vm.isCompact},on:{"open":_vm.showFlyout,"close":_vm.hideFlyout,"main":_vm.selectParent},nativeOn:{"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }return _vm.selectParent($event)}}}):_vm._e()],1)}
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
/* 38 */
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
/* 39 */
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
/* 40 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('form',{staticClass:"search",attrs:{"action":"","id":"search"},on:{"submit":function($event){$event.preventDefault();return _vm.doSearch($event)}}},[_c('div',{attrs:{"role":"search"}},[_c('div',{staticClass:"search__inputholder"},[_c('label',{staticClass:"search__label",attrs:{"for":"search__input"}},[_vm._v(_vm._s(_vm.label))]),_vm._v(" "),_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.searchValue),expression:"searchValue"}],ref:"search__input",staticClass:"search__input",attrs:{"id":"search__input","type":"text","name":"search","placeholder":_vm.placeholder},domProps:{"value":(_vm.searchValue)},on:{"blur":_vm.onBlur,"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"esc",27,$event.key,["Esc","Escape"])){ return null; }return _vm.close($event)},"input":function($event){if($event.target.composing){ return; }_vm.searchValue=$event.target.value}}})]),_vm._v(" "),_c('icon-button',{attrs:{"button-class":"icon-button icon-button--large search__button","button-aria-label":"Search","icon-name":"search"},on:{"click":_vm.doSearch}}),_vm._v(" "),_c('icon-button',{attrs:{"button-class":"icon-button icon-button--large search__close-button","button-aria-label":"Close search","icon-name":"close"},on:{"click":_vm.close}})],1)])}
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
/* 41 */
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
/* 42 */
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
/* 43 */
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
/* 44 */
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
/* 45 */
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
/* 46 */
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
/* 47 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"tooltip-toggle"},[_c('transition',{on:{"enter":_vm.tooltipEnter,"leave":_vm.tooltipLeave}},[_c('tooltip',{directives:[{name:"show",rawName:"v-show",value:(_vm.visible),expression:"visible"}],ref:"tooltip",class:_vm.tooltipClass,attrs:{"block":"tooltip-toggle"}},[_vm._v("\n            "+_vm._s(_vm.description)+"\n        ")])],1),_vm._v(" "),_c('icon-button',{ref:"button",attrs:{"button-class":"icon-button--visually-hidden-label icon-button--transparent icon-button--small-icon","icon-name":_vm.icon},nativeOn:{"click":function($event){$event.preventDefault();return _vm.toggle($event)},"keyup":[function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.toggle($event)},function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"space",32,$event.key,[" ","Spacebar"])){ return null; }return _vm.toggle($event)}],"blur":function($event){$event.preventDefault();return _vm.hide($event)}}},[_vm._v("\n        "+_vm._s(_vm.label)+"\n    ")])],1)}
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
/* 48 */
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
/* 49 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"tab-table-row"},[_c('div',{staticClass:"tab-table-row__label"},[_c('p',{staticClass:"tab-table-row__label-text"},[_vm._v(_vm._s(_vm.label))])]),_vm._v(" "),_c('div',{staticClass:"tab-table-row__content"},[_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.value),expression:"value"}],staticClass:"content-manageble content-manageble--copy-small tab-table-row__value",domProps:{"innerHTML":_vm._s(_vm.value)}}),_vm._v(" "),(_vm.linkList)?_c('ul',{staticClass:"tab-table-row__linklist"},[_vm._l((_vm.linkList),function(link){return [_c('li',{staticClass:"tab-table-row__linklist-item"},[_c('content-link',_vm._b({staticClass:"link tab-table-row__linklist-link",attrs:{"label":link.label}},'content-link',link,false))],1)]})],2):_vm._e()])])}
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
/* 50 */
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
/* 51 */
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
/* 52 */
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
/* 53 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"hero hero--product organism"},[_c('section',{staticClass:"container hero__container"},[_c('div',{staticClass:"flexgrid flexgrid--gutter flexgrid--column-reversed flexgrid--mobile-xl-row"},[_c('div',{staticClass:"flexgrid__cell--xs-6"},[_c('div',{staticClass:"hero__description"},[_c('HeaderBlock',{staticClass:"hero__header header-block--hero"},[_c('HeroHeading',{attrs:{"title":_vm.title,"subtitle":_vm.subtitle}})],1),_vm._v(" "),_c('p',{staticClass:"hero__intro copy--intro"},[_vm._v(_vm._s(_vm.description))]),_vm._v(" "),(_vm.products)?_c('div',{staticClass:"hero__products"},[_vm._l((_vm.products),function(product){return [_c('product',_vm._b({class:_vm.productsClass},'product',product,false))]})],2):_vm._e(),_vm._v(" "),(_vm.ctas)?_c('cta-block',{attrs:{"mod":"hero","ctas":_vm.ctas.ctas,"styleContentButton":"button button--primary","block":"hero"}}):_vm._e(),_vm._v(" "),_c('ul',{staticClass:"hero__linklist"},[_vm._l((_vm.linkList),function(link){return [_c('li',{staticClass:"hero__linklist-item"},[_c('ContentLink',_vm._b({staticClass:"link hero__linklist-link",attrs:{"label":link.label}},'ContentLink',link,false))],1)]})],2)],1)]),_vm._v(" "),_c('div',{staticClass:"flexgrid__cell--xs-6"},[_c('div',{staticClass:"hero__image"},[(_vm.image)?[_c('c-image',_vm._b({attrs:{"keep-in-view":""}},'c-image',_vm.image,false))]:_vm._e()],2)])])])])}
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
/* 54 */
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
/* 55 */
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
/* 56 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"organism"},[_c('div',{staticClass:"container"},[_c('header-block',{attrs:{"title":_vm.title,"subtitle":_vm.subtitle}}),_vm._v(" "),_c('div',{ref:"scrollWidthContainer",staticClass:"table-compare"},[_c('div',{ref:"scrollContainer",staticClass:"table-compare__scroll-container"},[(_vm.content)?_c('table',{staticClass:"table-compare__table",style:(("--number-of-columns: " + (_vm.content.columns.length) + ";"))},[_c('colgroup',[_c('col'),_vm._v(" "),_vm._l((_vm.content.columns),function(col){return _c('col')})],2),_vm._v(" "),_c('thead',[_c('tr',[_c('th',{attrs:{"scope":"col"}}),_vm._v(" "),_vm._l((_vm.content.columns),function(col){return _c('th',{ref:"columns",refInFor:true,attrs:{"scope":"col"}},[(col.image && col.image.url)?_c('c-image',_vm._b({staticClass:"table-compare__image",attrs:{"alt":"col.alt"}},'c-image',col.image,false)):_vm._e(),_vm._v("\n                            "+_vm._s(col.title)+"\n                        ")],1)})],2)]),_vm._v(" "),_c('tbody',_vm._l((_vm.content.rows),function(row){return _c('tr',[_c('th',{attrs:{"scope":"row"}},[_c('div',{staticClass:"table-compare__feature"},[_vm._v("\n                                "+_vm._s(row.label)+"\n                            ")])]),_vm._v(" "),_vm._l((row.cells),function(cell){return _c('td',[_c('span',{staticClass:"table-compare__cell"},[_vm._v(_vm._s(cell.label))]),_vm._v(" "),(cell.checked)?_c('icon',{staticClass:"table-compare__checkmark",attrs:{"icon-name":"checkmark"}}):_vm._e()],1)})],2)}),0),_vm._v(" "),_c('tfoot',[_c('tr',[_c('th',{attrs:{"scope":"row"}}),_vm._v(" "),_vm._l((_vm.content.columns),function(cell){return _c('td',[(cell.cta)?_c(cell.cta.type,_vm._b({tag:"component",class:_vm.getClassNames(cell.cta.type)},'component',cell.cta,false)):_vm._e()],1)})],2)])]):_vm._e()]),_vm._v(" "),(_vm.content.columns.length > 1)?_c('div',{staticClass:"table-compare__scroll-buttons"},[_c('icon-button',{staticClass:"table-compare__scroll-button table-compare__scroll-button--left",attrs:{"icon-name":"angle-left","disabled":_vm.disableLeft},on:{"click":function($event){return _vm.scroll(true)}}}),_vm._v(" "),_c('icon-button',{staticClass:"table-compare__scroll-button table-compare__scroll-button--right",attrs:{"icon-name":"angle-right","disabled":_vm.disableRight},on:{"click":function($event){return _vm.scroll(false)}}})],1):_vm._e()]),_vm._v(" "),_c('footer-block',{attrs:{"ctas":_vm.ctas}})],1)])}
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
/* 57 */
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
/* 58 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__58__;

/***/ }),
/* 59 */
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
/* 60 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('article',{staticClass:"hero hero--cover organism"},[_c('div',{staticClass:"hero-cover__image--full"},[(this.image)?_c('c-image',_vm._b({},'c-image',this.image,false)):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"hero-cover__image--overlay"}),_vm._v(" "),_c('section',{staticClass:"hero-cover__container container"},[_c('div',{staticClass:"flexgrid__cell--xs-6 hero--cover-reset"},[_c('h1',{staticClass:"hero-cover__headline"},[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),(_vm.description)?_c('p',{staticClass:"copy--intro"},[_vm._v(_vm._s(_vm.description))]):_vm._e(),_vm._v(" "),(_vm.ctas)?_c('cta-block',{attrs:{"mod":"hero","ctas":_vm.ctas.ctas,"styleContentButton":"button button--primary"}}):_vm._e()],1)])])}
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
/* 61 */
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
/* 62 */
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
/* 63 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',{staticClass:"footer"},[_c('div',{staticClass:"footer__container"},[_c('div',{staticClass:"footer__primary"},[_c('router-link',{staticClass:"branded-logo footer__branded-logo",attrs:{"to":"/","aria-label":"Ultimaker homepage"}},[_c('icon',{staticClass:"branded-logo__robot",attrs:{"icon-name":"robot-ultimaker"}}),_vm._v(" "),_c('icon',{staticClass:"branded-logo__logo",attrs:{"icon-name":"logo-ultimaker"}})],1),_vm._v(" "),_c('footer-nav',{attrs:{"navigation":_vm.navigation}})],1),_vm._v(" "),_c('div',{staticClass:"footer__secondary"},[_c('social-nav'),_vm._v(" "),_c('locale-selector',_vm._g(_vm._b({staticClass:"footer__locale-selector",attrs:{"country":_vm.country}},'locale-selector',_vm.localeSelector,false),_vm.$listeners))],1),_vm._v(" "),_c('div',{staticClass:"footer__tertiary"},[_c('legal-nav',{staticClass:"footer__legal",attrs:{"navigation":_vm.legalNavigation.navigation,"label":_vm.legalNavigation.label}})],1)])])}
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
/* 64 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__64__;

/***/ }),
/* 65 */
/***/ (function(module, exports) {

var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',{directives:[{name:"size-emitter",rawName:"v-size-emitter",value:('header'),expression:"'header'"}],staticClass:"header",class:_vm.headerClasses,attrs:{"role":"banner"}},[_c('div',{staticClass:"header__top",class:{'header--mobile-inverted': _vm.mainNavOpen}},[_c('router-link',{staticClass:"home-link",attrs:{"to":"/","aria-label":"Ultimaker homepage"}},[_c('icon',{staticClass:"home-link__logo",attrs:{"icon-name":"logo-ultimaker"}})],1),_vm._v(" "),(_vm.navigation)?_c('main-nav',_vm._g({attrs:{"items":_vm.navigation,"main-nav-open":_vm.mainNavOpen}},_vm.$listeners)):_vm._e(),_vm._v(" "),(_vm.cta && _vm.search)?_c('sys-nav',{attrs:{"order-now-icon":_vm.cta.icon,"order-now-label":_vm.cta.label,"order-now-link":_vm.cta.url,"search-icon":_vm.search.icon,"search-label":_vm.search.label},on:{"open-search":_vm.openSearch}}):_vm._e(),_vm._v(" "),_c('nav-assist',{staticClass:"main-nav__nav-assist",attrs:{"open-state":_vm.mainNavOpen},on:{"toggle":_vm.navAssistToggle}}),_vm._v(" "),_c('transition',{attrs:{"name":"search"},on:{"after-enter":_vm.handleFocus,"leave":_vm.handleFocus}},[(_vm.searchOpen)?_c('search-bar',{ref:"search",staticClass:"header__search",attrs:{"label":_vm.search.label,"placeholder":_vm.search.placeholder,"open-state":_vm.searchOpen},on:{"close":_vm.closeSearch}}):_vm._e()],1)],1)])}
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
/* 66 */
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
/* 67 */
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
/* 68 */
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
/* 69 */,
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = "<svg class=\"arrow--animated\" fill=\"currentColor\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 120\">\n    <defs>\n        <clipPath id=\"mask\" class=\"arrow__mask\">\n            <rect x=\"40\" y=\"40\" width=\"40\" height=\"40\" rotate=\"45deg\"/>\n        </clipPath>\n    </defs>\n    <g clip-path=\"url(#mask)\">\n        <path class=\"arrow__line arrow__line-1\" d=\"M15.3 55h94.8v10.1H15.3z\" clip-path=\"url(#mask)\" />\n        <path class=\"arrow__line arrow__line-2\" d=\"M15.3 55h94.8v10.1H15.3z\"/>\n        <path class=\"arrow__line arrow__line-3\" d=\"M15.3 55h94.8v10.1H15.3z\"/>\n    </g>\n</svg>\n";

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = "<button type=\"button\" @click=\"toggleState()\" @keyup.esc=\"close\" class=\"nav-assist\"\n        :class=\"{'nav-assist--close': this.openState, 'nav-assist--initial-state': !this.used}\" aria-label=\"menu\"\n        :aria-expanded=\"this.openState.toString()\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\">\n        <rect class=\"nav-assist__line nav-assist__line-2\" x=\"2\" y=\"11\" width=\"20\" height=\"2\"/>\n        <rect class=\"nav-assist__line nav-assist__line-1\" x=\"2\" y=\"4.5\" width=\"20\" height=\"2\"/>\n        <rect class=\"nav-assist__line nav-assist__line-3\" x=\"2\" y=\"17.5\" width=\"20\" height=\"2\"/>\n        <rect class=\"nav-assist__line nav-assist__line-4\" x=\"-1.3\" y=\"11\" transform=\"matrix(0.7071 -0.7071 0.7071 0.7071 -4.9706 12)\" width=\"26.6\" height=\"2\"/>\n        <rect class=\"nav-assist__line nav-assist__line-5\" x=\"11\" y=\"-1.3\" transform=\"matrix(0.7071 -0.7071 0.7071 0.7071 -4.9706 12)\" width=\"2\" height=\"26.6\"/>\n    </svg>\n</button>\n";

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = "<picture>\n    <template>\n        <responsive-picture-source v-if=\"desktopHdWidth\" media=\"(min-width: 1201px)\" :image=\"lazyLoading ? '' : desktopHdWidth\" />\n        <responsive-picture-source v-if=\"desktopWidth\" media=\"(min-width: 1025px)\" :image=\"lazyLoading ? '' : desktopWidth\" />\n        <responsive-picture-source v-if=\"tabletWidth\" media=\"(min-width: 768px)\" :image=\"lazyLoading ? '' : tabletWidth\" />\n        <responsive-picture-source v-if=\"mobileXlWidth\" media=\"(min-width: 569px)\" :image=\"lazyLoading ? '' : mobileXlWidth\" />\n        <responsive-picture-source v-if=\"mobileLWidth\" media=\"(min-width: 481px)\" :image=\" lazyLoading ? '' : mobileLWidth\" />\n        <responsive-picture-source media=\"(max-width: 480px)\" :image=\"mobileWidth\" />\n    </template>\n\n    <img :src=\"lazyLoading ? '' : mobileWidth.url ? mobileWidth.url : mobileWidth\" :alt=\"description\" class=\"img--responsive\" :class=\"classes\"/>\n</picture>\n";

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = "<dl class=\"tabbable-dl\">\n    <template v-for=\"(item, index) in items\">\n        <dt class=\"tabbable-dl__term tabbable-dl__term--vue\" ref=\"terms\">\n            <a class=\"tabbable-dl__link\" @click.prevent=\"changeIndex(index)\" @keyup.enter=\"changeIndex(index)\" role=\"button\" tabindex=\"0\">\n                <h3 class=\"tabbable-dl__title\">\n                    <icon class=\"tabbable-dl__icon\" icon-name=\"angle-right\"></icon>\n                    {{ item.title }}\n                </h3>\n            </a>\n        </dt>\n        <dd class=\"tabbable-dl__desc tabbable-dl__desc--vue\" ref=\"descriptions\">{{ item.description }}</dd>\n    </template>\n</dl>\n";

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = "<div class=\"brand-card\">\n    <div class=\"brand-card__image-wrapper\">\n        <responsive-picture v-bind=\"image\"></responsive-picture>\n    </div>\n    <template v-if=\"body && type === 'text'\">\n        <p class=\"brand-card__quote\">{{body}}</p>\n    </template>\n    <template v-else-if=\"body\">\n        <q class=\"brand-card__quote\">{{body}}</q>\n    </template>\n</div>";

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = "<article class=\"card\" :class=\"classObject\" tabindex=\"0\">\n    <div class=\"card__visual\">\n        <div class=\"card__image\" v-if=\"card.image\">\n            <responsive-picture class=\"img--responsive\" v-if=\"card.image.mobileWidth\" v-bind=\"card.image\" ></responsive-picture>\n            <cms-image class=\"img--responsive\" v-else :image=\"card.image[0]\" :orientation=\"'square'\"></cms-image>\n        </div>\n        <icon v-if=\"card.icon\" :icon-name=\"card.icon.iconName\" class=\"card__icon\"></icon>\n    </div>\n    <div class=\"card__content\">\n        <h3 class=\"card__headline\">{{ card.title }}</h3>\n        <p class=\"card__description\" v-if=\"card.description\">{{ card.description }}</p>\n        <content-link class=\"link\" v-if=\"card.contentLink && card.contentLink.href\" :block=\"'card'\" :url=\"card.contentLink.href\" :label=\"card.contentLink.text\">\n        </content-link>\n    </div>\n</article>\n\n";

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = "<a class=\"toggle toggle--icon\" role=\"button\" tabindex=\"0\" @click=\"toggle\"\n       @keyup.enter=\"toggle\">\n    <icon :icon-name=\"toggleIcon\"></icon>\n    <span>{{ toggleText }}</span>\n</a>\n";

/***/ }),
/* 79 */
/***/ (function(module, exports) {

module.exports = "<span class=\"currency\">\n    <span class=\"currency__type\">{{ currencyType }}</span>\n    {{ formattedAmount }}\n</span>\n";

/***/ }),
/* 80 */
/***/ (function(module, exports) {

module.exports = "<ul class=\"main-nav__flyout\"\n    v-if=\"items && items.length > 0\"\n    @keydown.down=\"selectNextLink\"\n    @keydown.tab.exact=\"selectNextLink\"\n    @keydown.up=\"selectPrevLink\"\n    @keydown.tab.shift.exact=\"selectPrevLink\"\n    @keydown.right=\"selectNextSection($event, true)\"\n    @keydown.left=\"selectPrevSection($event, true)\"\n    @mouseenter.stop=\"open\"\n    v-show=\"isCompact || !viewportUtil.isResizing\">\n    <flyout-section ref=\"items\"\n        v-for=\"(item, key) in items\"\n        v-if=\"item.items && item.items.length\"\n        v-bind=\"item\"\n        :is-compact=\"isCompact\"\n        :key=\"key\"\n        :itemId=\"`flyout_title_${ uniqId }_${ key }`\"\n        @close=\"$emit('close')\"\n        >\n    </flyout-section>\n</ul>\n";

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = "<header class=\"header-block\">\n    <slot>\n        <h2 class=\"header-block__title\" v-if=\"title\">{{ title }}</h2>\n        <p class=\"header-block__subtitle\" v-if=\"subtitle\">{{ subtitle }}</p>\n    </slot>\n</header>\n";

/***/ }),
/* 82 */
/***/ (function(module, exports) {

module.exports = "<div>\n    <h1 class='hero__title header-block__title--hero'>{{ title }}</h1>\n    <h2 class=\"hero__subtitle header-block__subtitle--hero\" v-if=\"subtitle\">{{ subtitle }}</h2>\n</div>\n";

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = "<nav class=\"pager\" aria-label=\"pagination\">\n    <ul class=\"pager__list\">\n        <li ref=\"indicator\" class=\"pager__active-page\" aria-hidden=\"true\">\n            <icon class=\"pager__active-page-indicator\" icon-name=\"hexagon-fill\"></icon>\n        </li>\n        <li ref=\"page\" v-for=\"(page, index) in pages\" \n            class=\"pager__page\" >\n            <a class=\"pager__page-indicator\" @click=\"changeIndex(index)\"\n                aria-role=\"button\" \n                :aria-label=\"getAriaLabel(index)\" \n                :aria-current='index === activeIndex'>\n                <icon icon-name=\"hexagon\"></icon>\n            </a>\n        </li>\n    </ul>\n</nav>\n";

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = "<div :id=\"id\" class=\"tabs__content\" v-show=\"active\" role=\"tabpanel\" :aria-hidden=\"!active\" :aria-label=\"label\">\n    <template v-show=\"content\">\n        <component :is=\"content.type\"\n                   v-bind=\"content\">\n        </component>\n    </template>\n</div>\n";

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = "<article class=\"brands\">\n    <section class=\"container brands__container\">\n        <h2 class=\"brands__title\"> {{ title }}</h2>\n        <div class=\"flexgrid flexgrid--gutter brands__grid\">\n            <template v-for=\"brand in brands\">\n            <div class=\"flexgrid__cell--sm-4 brands__grid-cell\">\n                <brand-card v-bind=\"brand\"></brand-card>\n            </div>\n            </template>\n        </div>\n        <content-link v-if=\"contentLink && contentLink.href\"\n                      :block=\"'brands'\"\n                      :mod=\"'large'\"\n                      :url=\"contentLink.href\"\n                      :label=\"contentLink.text\" />\n    </section>\n</article>\n";

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = "<article class=\"brands brands--large\">\n    <section class=\"container brands__container\">\n        <h2 class=\"brands__title\">{{ title }}</h2>\n        <p class=\"brands__body\" v-if=\"text\">{{ text }}</p>\n        <div class=\"flexgrid flexgrid--gutter brands__grid\">\n            <template v-for=\"brand in brands\">\n            <div class=\"flexgrid__cell--sm-4 brands__grid-cell\">\n                <brand-card v-bind=\"brand\"></brand-card>\n            </div>\n            </template>\n        </div>\n        <content-link v-if=\"contentLink\" :block=\"'brands'\" :mod=\"'large'\" :url=\"contentLink.href\">{{ contentLink.text }}</content-link>\n    </section>\n</article>\n";

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = "<article class=\"case\">\n    <section class=\"container case__container\">\n        <figure class=\"case__media\" v-show=\"this.isMobileXl\">\n            <figcaption class=\"flex-grid flexgrid__cell--xs-6\">\n                <h2 class=\"case__title\">{{ title }}</h2>\n            </figcaption>\n\n            <div class=\"case__media-placeholder\">\n                <figcaption>\n                    <icon-button @click=\"toggleVideo\" class=\"case__link icon-button--underline-large\" :icon-name=\"buttonIcon\">{{ buttonLabel }}</icon-button>\n                </figcaption>\n                <div class=\"case__image-overlay\"></div>\n                <responsive-picture v-bind=\"image\" img-class=\"case__image--full\"></responsive-picture>\n            </div>\n\n            <figcaption class=\"flex-grid flexgrid__cell--xs-6\">\n                <p class=\"case__paragraph case__paragraph--last\">{{ description }}</p>\n            </figcaption>\n        </figure>\n\n        <figure class=\"case__media\" v-show=\"!this.isMobileXl\">\n            <div class=\"case__media-placeholder\">\n                <figcaption class=\"flex-grid flexgrid__cell--xs-6 case__flex-grid--center\">\n                    <h2 class=\"case__title\">{{ title }}</h2>\n                    <p class=\"case__paragraph\">{{ description }}</p>\n                    <icon-button @click=\"toggleVideo\" class=\"case__link icon-button--underline-large\" :icon-name=\"buttonIcon\">{{ buttonLabel }}</icon-button>\n                </figcaption>\n\n                <div class=\"case__image-overlay\"></div>\n                <responsive-picture v-bind=\"image\" img-class=\"case__image--full\"></responsive-picture>\n            </div>\n        </figure>\n    </section>\n    <modal class=\"modal--video\" v-if=\"showVideo\" @close=\"toggleVideo\">\n        <youtube-video :video-id=\"videoId\"></youtube-video>\n    </modal>\n</article>\n";

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = "<article class=\"ecosystem\">\n    <section class=\"container ecosystem__container\">\n      <h2 class=\"ecosystem__title\" v-if=\"title\">{{ title }}</h2>\n      <div class=\"ecosystem__items\">\n          <card v-for=\"(item, index) in items\" :key=\"index\" :card=\"item\" :block=\"'ecosystem'\"></card>\n      </div>\n    </section>\n</article>\n";

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = "<article class=\"examples\">\n    <div class=\"container examples__container\">\n        <header>\n            <h2 class=\"examples__headline\">{{ title }}</h2>\n        </header>\n\n        <div class=\"cards\">\n            <div class=\"flexgrid flexgrid--gutter\">\n                <div class=\"flexgrid__cell--sm-4 flexgrid__cell--xs-6\" v-for=\"(card, key) in cards\">\n                    <card :key=\"key\" :block=\"'examples'\" :card=\"card\" v-if=\"enabled\"></card>\n                </div>\n            </div>\n        </div>\n    </div>\n</article>\n";

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = "<article class=\"explore\">\n    <section class=\"container explore__container\">\n        <div class=\"flexgrid flexgrid--gutter\">\n            <div class=\"flexgrid__cell--xs-6\">\n                <h2 class=\"explore__title\">{{ title }}</h2>\n            </div>\n        </div>\n        <div class=\"explore__image-placeholder\">\n            <template v-for=\"(item, index) in items\">\n                <transition @enter=\"imageEnter\" @leave=\"imageLeave\">\n                    <picture ref=\"image\" v-show=\"index === activeSlide\">\n                        <source media=\"(min-width: 569px)\" :srcset=\"item.image.mobileXlWidth.url + ', ' + item.image.mobileXlWidth.retina.url + ' 2x'\">\n                        <img class=\"img--responsive explore__image img--contain\" :src=\"item.image.mobileWidth.url\" :alt=\"item.image.alt\">\n                    </picture>\n                </transition>\n            </template>\n            <pager name=\"explore-pager\" class=\"explore__pager\" :pages=\"items.length\"\n                   :active-index=\"activeSlide\" @index-changed=\"indexChanged\"></pager>\n        </div>\n        <div class=\"flexgrid flexgrid--gutter\">\n            <div class=\"flexgrid__cell--xs-6\">\n                <div class=\"explore__description\">\n                    <tabbable-definition-list\n                        :items=\"items\"\n                        :active-index=\"activeSlide\"\n                        @index-changed=\"indexChanged\"\n                    ></tabbable-definition-list>\n                </div>\n                <div class=\"explore__navigation\">\n                    <icon-button class=\"explore__nav\"\n                                 v-if=\"buttons && buttons.previous\"\n                                 :icon-name=\"buttons.previous.iconName\"\n                                 @click=\"navClicked('previous')\">\n                        <span class=\"icon-button__label\">{{ buttons.previous.label }}</span>\n                    </icon-button>\n                    <icon-button class=\"explore__nav icon-button--reversed\"\n                                 v-if=\"buttons && buttons.next\"\n                                 :icon-name=\"buttons.next.iconName\"\n                                 @click=\"navClicked('next')\">\n                        <span class=\"icon-button__label\">{{ buttons.next.label }}</span>\n                    </icon-button>\n                </div>\n            </div>\n        </div>\n    </section>\n</article>\n";

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = "<article class=\"hero hero--products-application\">\n    <div class=\"hero__container--top\">\n            <responsive-picture v-bind=\"heroImage\" imgClass=\"hero__image--full\"></responsive-picture>\n            <div class=\"hero__image-overlay\"></div>\n        <div class=\"container\">\n            <div class=\"flexgrid flexgrid--gutter\">\n                <div class=\"flexgrid__cell--xs-6\">\n                    <div class=\"hero__headline\">\n                        <h1>{{ title }}</h1>\n                    </div>\n                </div>\n\n                <div class=\"flexgrid__cell\" style=\"position:relative;\">\n                    <p class=\"hero__subtitle\">{{ subtitle }}</p>\n                    <responsive-picture v-bind=\"productImage\" imgClass=\"hero__image--product\"></responsive-picture>\n                </div>\n\n                <div class=\"flexgrid__cell--xs-6\">\n                    <div class=\"hero__usp-container\">\n                        <div class=\"hero__usp usp--icon\" v-for=\"icon in uspIcons\">\n                            <icon :icon-name=\"icon.iconName\" class=\"usp__icon\"></icon>\n                            <small class=\"usp__label\">{{ icon.text }}</small>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"container\">\n        <div class=\"flexgrid flexgrid--gutter\">\n            <div class=\"flexgrid__cell--xs-6\">\n                <div class=\"hero__description\">\n                    <p class=\"copy--intro\">{{ description }}</p>\n                    <!-- {{> molecules-price-table}} -->\n                    <!-- {{> molecules-price-table-tabs}} -->\n                    <!-- {{> atoms-anchor-button:button--primary|hero__button}} -->\n                    <p>TODO: Pricetable</p>\n                    <router-link :to=\"ctaLink.href\" class=\"button button--primary hero__button\">{{  ctaLink.text }}</router-link>\n                    <ul class=\"link-list link-list--icon hero__link-list\" v-if=\"links && links.length\">\n                        <li class=\"link-list__item\" v-for=\"link in links\">\n                            <content-link  v-if=\"link.href\"\n                                           :url=\"link.href\"\n                                           :icon=\"link.icon\"\n                                           :label=\"link.text\" />\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n</article>\n";

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = "<article class=\"hero hero--text\" v-if=\"this.contents && contents.length\" >\n    <div class=\"container\">\n        <h1 v-if=\"title && title.length\">{{ title }}</h1>\n        <div class=\"hero__content content--rich\" v-html=\"contents\" />\n    </div>\n</article>\n\n";

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = "<article class=\"slider-reveal\" v-bind:class=\"styleModifiers\">\n    <section class=\"container slider-reveal__container\">\n        <div class=\"flexgrid flexgrid--gutter\">\n            <div class=\"flexgrid__cell--xs-6 slider-reveal__grid-cell\">\n                <h2 class=\"slider-reveal__title\"> {{ title }}</h2>\n                <p v-if=\"!isMobile\" class=\"slider-reveal__body\" v-for=\"content in contents\">{{ content }}</p>\n                <content-link v-if=\"!isMobile && link && link.href\"\n                              v-bind=\"link\"\n                              class=\"link--icon link--large\"\n                              :label=\"link.text\"\n                              :url=\"link.href\" />\n            </div>\n            <div class=\"flexgrid__cell--xs-6 slider-reveal__grid-cell\">\n                <div ref=\"image-wrapper\" class=\"slider-reveal__image-wrapper\">\n                    <div class=\"slider-reveal__image-aspect\">\n                        <div class=\"slider-reveal__mask\"\n                            ref=\"image-mask\"\n                            v-for=\"image in imageSlider.images\"\n                        >\n                            <responsive-picture v-bind=\"image\" img-class=\"slider-reveal__image\"></responsive-picture>\n                        </div>\n                    </div>\n                </div>\n                <p v-if=\"isMobile\" class=\"slider-reveal__body\" v-for=\"content in contents\">{{ content }}</p>\n                <content-link v-if=\"isMobile && link && link.href\"\n                              v-bind=\"link\"\n                              class=\"link--icon link--large\"\n                              :label=\"link.text\"\n                              :url=\"link.href\" />\n            </div>\n        </div>\n    </section>\n</article>\n";

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = "<article class=\"ubr\">\n    <section class=\"container\">\n        <h2>{{ title }}</h2>\n        <div class=\"flexgrid flexgrid--gutter flexgrid--column-reversed flexgrid--mobile-xl-row\">\n            <div class=\"flexgrid__cell--xs-6\">\n                <div class=\"ubr__description\">\n                    <p>{{ description }}</p>\n                    <ul class=\"list ubr__list\">\n                        <li class=\"list__item\" v-for=\"reason of reasons\">{{ reason }}</li>\n                    </ul>\n                </div>\n            </div>\n            <div class=\"flexgrid__cell--xs-6\">\n                <template v-if=\"image && image.length\">\n                    <div class=\"ubr__image \">\n                        <cms-image class=\"img--responsive\" :image=\"image[0]\" :orientation=\"'landscape'\"></cms-image>\n                    </div>\n                </template>\n            </div>\n        </div>\n    </section>\n</article>\n";

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = "<article class=\"content-cover content-cover--cover\">\n    <c-image v-if=\"this.image\" v-bind=\"this.image\"/>\n\n    <div class=\"content-cover__image--overlay\"></div>\n\n    <section class=\"content-cover__container\">\n        <div class=\"flexgrid__cell--xs-6 content-cover-content content-cover--cover-reset\">\n            <h3 class=\"content-cover__title\">{{ title }}</h3>\n            <p class=\"content-cover__description\">{{ description }}</p>\n            <div>\n                <component v-if=\"cta\" v-bind=\"cta\" :is=\"cta.type\" :class=\"getClassNames(cta.type)\"/>\n            </div>\n        </div>\n    </section>\n</article>\n";

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = "<article class=\"general-content\">\n    <section class=\"container general-content__container\">\n        <div class=\"flexgrid flexgrid--gutter\" :class=\"{'flexgrid--row-reversed': reversed}\">\n            <div class=\"flexgrid__cell--xs-6 flexgrid__cell--md-4 general-content__grid-cell\">\n                <h2 class=\"general-content__title\"> {{ title }}</h2>\n                <p class=\"general-content__body\" v-for=\"p in text\">{{ p }}</p>\n                <content-link class=\"link\" v-if=\"contentLink && contentLink.href\" :block=\"'general-content'\" :url=\"contentLink.href\" :label=\"contentLink.text\">\n                </content-link>\n            </div>\n            <div class=\"flexgrid__cell--xs-6 flexgrid__cell--md-8 general-content__grid-cell\">\n                <div class=\"general-content__image-wrapper\">\n                    <responsive-picture v-if=\"image\" v-bind=\"image\"></responsive-picture>\n                </div>\n            </div>\n        </div>\n    </section>\n</article>\n";

/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports = "<article class=\"hero hero--products\">\n    <section class=\"container hero__container\">\n        <div class=\"flexgrid flexgrid--gutter flexgrid--column-reversed flexgrid--mobile-xl-row\">\n\n            <div class=\"flexgrid__cell--xs-6\">\n                <div class=\"hero__description\">\n                    <!--Intro-->\n                    <h1>{{ title }}</h1>\n                    <p class=\"copy--intro\">{{ description }}</p>\n                    <!--End intro-->\n\n                    <!--Price table-->\n                    <div class=\"price-table hero__price-table\">\n                        <ul class=\"price-table__list\" role=\"tablist\">\n                            <li class=\"price-table__item\" v-for=\"material in materials\" role=\"tab\">\n                                <icon icon-name=\"material\" class=\"price-table__icon\"></icon>\n                                <span class=\"price-table__info\">\n                                    <small class=\"price-table__tagline\">\n                                        {{ material['short_title'] }},\n                                        {{ material.weight.value }}{{ material.weight.unit }}\n                                        from\n                                    </small>\n                                    <currency :currency-type=\"material.price.currency\" :amount=\"material.price.value\" :decimals=\"0\"></currency>\n                                </span>\n                            </li>\n                        </ul>\n                        <small class=\"price-table__disclaimer\">{{ labels.excludingVat }}</small>\n                    </div>\n                    <!--End price table-->\n\n                    <!--Button-->\n                    <a href=\"\" class=\"button button--primary hero__button\" v-if=\"materials && materials.length\">{{ labels.buyCta }}</a>\n                    <!--End button-->\n\n                    <!--Link list icons-->\n                    <ul class=\"link-list link-list--icon hero__link-list\">\n                        <template v-if=\"documents\">\n                            <li class=\"link-list__item\" v-for=\"link in this.link\">\n                                <content-link :url=\"link.uri\" icon=\"info\">{{ link.title }}</content-link>\n                            </li>\n                        </template>\n                        <template v-if=\"this.documents\">\n                            <li class=\"link-list__item\" v-for=\"document in documents\" v-if=\"document.links\">\n                                <content-link :url=\"document.links.self.href\" icon=\"download\">{{ labels.download}} {{ document.title }}</content-link>\n                            </li>\n                        </template>\n                    </ul>\n                    <!--End link list-->\n                </div>\n            </div>\n\n            <!--Image -->\n            <div class=\"flexgrid__cell--xs-6\">\n                <div class=\"hero__image--product\">\n                    <template v-if=\"this.image && this.image.length\">\n                        <cms-image :image=\"image[0]\" :orientation=\"'square'\"></cms-image>\n                    </template>\n                </div>\n            </div>\n            <!--End image-->\n\n        </div>\n    </section>\n</article>\n";

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var atoms_namespaceObject = {};
__webpack_require__.r(atoms_namespaceObject);
__webpack_require__.d(atoms_namespaceObject, "AnchorOverlay", function() { return anchor_overlay; });
__webpack_require__.d(atoms_namespaceObject, "ActionButton", function() { return atoms_action_button; });
__webpack_require__.d(atoms_namespaceObject, "AnimatedArrow", function() { return atoms_animated_arrow; });
__webpack_require__.d(atoms_namespaceObject, "BaseLink", function() { return atoms_BaseLink; });
__webpack_require__.d(atoms_namespaceObject, "ContentLink", function() { return atoms_content_link; });
__webpack_require__.d(atoms_namespaceObject, "ContentButton", function() { return atoms_content_button; });
__webpack_require__.d(atoms_namespaceObject, "ContentLinkList", function() { return atoms_content_link_list; });
__webpack_require__.d(atoms_namespaceObject, "HitArea", function() { return atoms_hit_area; });
__webpack_require__.d(atoms_namespaceObject, "HorizontalList", function() { return atoms_horizontal_list; });
__webpack_require__.d(atoms_namespaceObject, "Icon", function() { return atoms_icon; });
__webpack_require__.d(atoms_namespaceObject, "Image", function() { return atoms_c_image; });
__webpack_require__.d(atoms_namespaceObject, "LiInline", function() { return li_inline; });
__webpack_require__.d(atoms_namespaceObject, "LiItem", function() { return li_item; });
__webpack_require__.d(atoms_namespaceObject, "NavAssist", function() { return atoms_nav_assist; });
__webpack_require__.d(atoms_namespaceObject, "ResponsivePicture", function() { return atoms_responsive_picture; });
__webpack_require__.d(atoms_namespaceObject, "SpanLabel", function() { return span_label; });
__webpack_require__.d(atoms_namespaceObject, "TabbableDefinitionList", function() { return atoms_tabbable_definition_list; });
__webpack_require__.d(atoms_namespaceObject, "Tooltip", function() { return atoms_tooltip; });
__webpack_require__.d(atoms_namespaceObject, "YoutubeLink", function() { return atoms_youtube_link; });
__webpack_require__.d(atoms_namespaceObject, "YoutubeVideo", function() { return atoms_youtube_video; });
var molecules_namespaceObject = {};
__webpack_require__.r(molecules_namespaceObject);
__webpack_require__.d(molecules_namespaceObject, "AutoComplete", function() { return molecules_auto_complete; });
__webpack_require__.d(molecules_namespaceObject, "BlockIcon", function() { return molecules_block_icon; });
__webpack_require__.d(molecules_namespaceObject, "Brand", function() { return brand_Brand; });
__webpack_require__.d(molecules_namespaceObject, "BrandCard", function() { return cards_brand_card; });
__webpack_require__.d(molecules_namespaceObject, "BusinessCard", function() { return cards_business_card; });
__webpack_require__.d(molecules_namespaceObject, "Card", function() { return _LEGACY_card; });
__webpack_require__.d(molecules_namespaceObject, "CardProduct", function() { return cards_card_product; });
__webpack_require__.d(molecules_namespaceObject, "Color", function() { return molecules_color; });
__webpack_require__.d(molecules_namespaceObject, "ContentBlock", function() { return molecules_content_block; });
__webpack_require__.d(molecules_namespaceObject, "ContentToggle", function() { return molecules_content_toggle; });
__webpack_require__.d(molecules_namespaceObject, "CtaBlock", function() { return molecules_cta_block; });
__webpack_require__.d(molecules_namespaceObject, "Currency", function() { return molecules_currency; });
__webpack_require__.d(molecules_namespaceObject, "FauxVerticalScroll", function() { return molecules_faux_vertical_scroll; });
__webpack_require__.d(molecules_namespaceObject, "Flyout", function() { return molecules_flyout; });
__webpack_require__.d(molecules_namespaceObject, "FlyoutSection", function() { return molecules_flyout_section; });
__webpack_require__.d(molecules_namespaceObject, "FooterBlock", function() { return molecules_footer_block; });
__webpack_require__.d(molecules_namespaceObject, "FooterNav", function() { return molecules_footer_nav; });
__webpack_require__.d(molecules_namespaceObject, "HeaderBlock", function() { return molecules_header_block; });
__webpack_require__.d(molecules_namespaceObject, "HeroHeading", function() { return molecules_hero_heading; });
__webpack_require__.d(molecules_namespaceObject, "IconButton", function() { return molecules_icon_button; });
__webpack_require__.d(molecules_namespaceObject, "LegalNav", function() { return molecules_legal_nav; });
__webpack_require__.d(molecules_namespaceObject, "ListSection", function() { return molecules_list_section; });
__webpack_require__.d(molecules_namespaceObject, "ListUnordered", function() { return list_unordered; });
__webpack_require__.d(molecules_namespaceObject, "ListUnorderedLimit", function() { return list_unordered_limit_ListUnorderedLimit; });
__webpack_require__.d(molecules_namespaceObject, "MainNav", function() { return molecules_main_nav; });
__webpack_require__.d(molecules_namespaceObject, "MainNavItem", function() { return molecules_main_nav_item; });
__webpack_require__.d(molecules_namespaceObject, "Modal", function() { return molecules_modal; });
__webpack_require__.d(molecules_namespaceObject, "Pager", function() { return molecules_pager; });
__webpack_require__.d(molecules_namespaceObject, "Product", function() { return molecules_product; });
__webpack_require__.d(molecules_namespaceObject, "Search", function() { return search; });
__webpack_require__.d(molecules_namespaceObject, "SocialNav", function() { return molecules_social_nav; });
__webpack_require__.d(molecules_namespaceObject, "SubNavigationItem", function() { return molecules_subnavigation_item; });
__webpack_require__.d(molecules_namespaceObject, "SysNav", function() { return molecules_sys_nav; });
__webpack_require__.d(molecules_namespaceObject, "Tab", function() { return molecules_tab; });
__webpack_require__.d(molecules_namespaceObject, "Tabs", function() { return molecules_tabs; });
__webpack_require__.d(molecules_namespaceObject, "Tag", function() { return molecules_tag; });
__webpack_require__.d(molecules_namespaceObject, "TagList", function() { return molecules_tag_list; });
__webpack_require__.d(molecules_namespaceObject, "TooltipToggle", function() { return tooltip_toggle_TooltipToggle; });
__webpack_require__.d(molecules_namespaceObject, "TabTable", function() { return tab_table_TabTable; });
__webpack_require__.d(molecules_namespaceObject, "TabTableRow", function() { return tab_table_row_TabTableRow; });
var organisms_namespaceObject = {};
__webpack_require__.r(organisms_namespaceObject);
__webpack_require__.d(organisms_namespaceObject, "Brands", function() { return brands_Brands; });
__webpack_require__.d(organisms_namespaceObject, "Colors", function() { return colors_Colors; });
__webpack_require__.d(organisms_namespaceObject, "CountrySelector", function() { return organisms_country_selector; });
__webpack_require__.d(organisms_namespaceObject, "HeroProduct", function() { return organisms_hero_product; });
__webpack_require__.d(organisms_namespaceObject, "LocaleSelector", function() { return organisms_locale_selector; });
__webpack_require__.d(organisms_namespaceObject, "ContentHighlight", function() { return content_highlight_ContentHighlight; });
__webpack_require__.d(organisms_namespaceObject, "TableCompare", function() { return organisms_table_compare; });
__webpack_require__.d(organisms_namespaceObject, "TabbedTable", function() { return tabbed_table_TabbedTable; });
var organisms_page_namespaceObject = {};
__webpack_require__.r(organisms_page_namespaceObject);
__webpack_require__.d(organisms_page_namespaceObject, "LegacyBrands", function() { return legacy_brands_LegacyBrands; });
__webpack_require__.d(organisms_page_namespaceObject, "BrandsLarge", function() { return organisms_page_brands_large; });
__webpack_require__.d(organisms_page_namespaceObject, "Cases", function() { return organisms_page_cases; });
__webpack_require__.d(organisms_page_namespaceObject, "Colors", function() { return colors_Colors; });
__webpack_require__.d(organisms_page_namespaceObject, "Ecosystem", function() { return organisms_page_ecosystem; });
__webpack_require__.d(organisms_page_namespaceObject, "Examples", function() { return organisms_page_examples; });
__webpack_require__.d(organisms_page_namespaceObject, "Explore", function() { return organisms_page_explore; });
__webpack_require__.d(organisms_page_namespaceObject, "HeroBasic", function() { return organisms_page_hero_basic; });
__webpack_require__.d(organisms_page_namespaceObject, "HeroProductsApplication", function() { return organisms_page_hero_products_application; });
__webpack_require__.d(organisms_page_namespaceObject, "HeroText", function() { return organisms_page_hero_text; });
__webpack_require__.d(organisms_page_namespaceObject, "HeroCover", function() { return organisms_page_hero_cover; });
__webpack_require__.d(organisms_page_namespaceObject, "SliderReveal", function() { return organisms_page_slider_reveal; });
__webpack_require__.d(organisms_page_namespaceObject, "Subnavigation", function() { return organisms_page_subnavigation; });
__webpack_require__.d(organisms_page_namespaceObject, "Tabbedcontent", function() { return organisms_page_tabbed_content; });
__webpack_require__.d(organisms_page_namespaceObject, "Ubr", function() { return organisms_page_ubr; });
__webpack_require__.d(organisms_page_namespaceObject, "PageDrawer", function() { return organisms_page_page_drawer; });
__webpack_require__.d(organisms_page_namespaceObject, "PageFooter", function() { return organisms_page_page_footer; });
__webpack_require__.d(organisms_page_namespaceObject, "PageHeader", function() { return organisms_page_page_header; });
__webpack_require__.d(organisms_page_namespaceObject, "Overview", function() { return organisms_page_overview; });
__webpack_require__.d(organisms_page_namespaceObject, "OverviewUBR", function() { return organisms_page_overview_ubr; });
__webpack_require__.d(organisms_page_namespaceObject, "ContentGeneral", function() { return organisms_page_content_general; });
__webpack_require__.d(organisms_page_namespaceObject, "ContentCover", function() { return organisms_page_content_cover; });
__webpack_require__.d(organisms_page_namespaceObject, "GeneralContent", function() { return _LEGACY_general_content; });
__webpack_require__.d(organisms_page_namespaceObject, "LegacyHeroProduct", function() { return _LEGACY_hero_product; });
var directives_namespaceObject = {};
__webpack_require__.r(directives_namespaceObject);
__webpack_require__.d(directives_namespaceObject, "SizeEmitter", function() { return size_emitter_SizeEmitter; });

// EXTERNAL MODULE: ./src/scss/component-library.scss
var component_library = __webpack_require__(70);

// CONCATENATED MODULE: ./src/js/plugins/uniq-id.ts
class UniqId {
    static install(vue) {
        Object.defineProperty(vue.prototype, 'uniqId', {
            configurable: true,
            get: function uniqId() {
                return this._uid;
            },
        });
    }
}

// CONCATENATED MODULE: ./src/js/plugins/component-registry.js

class component_registry_ComponentRegistry {
    constructor() {
        this.components = [];
        this.directives = [];
    }
    registerComponent(component) {
        this.components.push(component);
    }
    registerDirective(directive) {
        this.directives.push(directive);
    }
    install(vue) {
        vue.use(UniqId);
        this.directives
            .filter(d => typeof d.name === 'string')
            .forEach(d => vue.directive(d.name, d));
        this.components
            .filter((c => typeof c.name === 'string' || (c.extendOptions && typeof c.extendOptions.name === 'string')))
            .forEach(c => vue.component(c.extendOptions ? c.extendOptions.name : c.name, c));
    }
    listComponents() {
        this.components.forEach(c => console.info(c.name));
    }
    listDirectives() {
        this.directives.forEach(d => console.info(d.name));
    }
}
/* harmony default export */ var component_registry = (component_registry_ComponentRegistry);

// EXTERNAL MODULE: external "vue-property-decorator"
var external_vue_property_decorator_ = __webpack_require__(0);

// EXTERNAL MODULE: ./src/js/components/atoms/anchor-overlay/template.vue.html
var template_vue = __webpack_require__(4);
var template_vue_default = /*#__PURE__*/__webpack_require__.n(template_vue);

// CONCATENATED MODULE: ./src/js/components/atoms/anchor-overlay/component.ts
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let component_AnchorOverlay = class AnchorOverlay extends external_vue_property_decorator_["Vue"] {
};
__decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: true }),
    __metadata("design:type", String)
], component_AnchorOverlay.prototype, "title", void 0);
__decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: true }),
    __metadata("design:type", String)
], component_AnchorOverlay.prototype, "url", void 0);
component_AnchorOverlay = __decorate([
    template_vue_default.a,
    Object(external_vue_property_decorator_["Component"])({
        name: 'AnchorOverlay',
    })
], component_AnchorOverlay);
/* harmony default export */ var component = (component_AnchorOverlay);

// CONCATENATED MODULE: ./src/js/components/atoms/anchor-overlay/index.ts

/* harmony default export */ var anchor_overlay = (component);

// EXTERNAL MODULE: ./src/js/components/atoms/action-button/action-button.vue.html
var action_button_vue = __webpack_require__(5);
var action_button_vue_default = /*#__PURE__*/__webpack_require__.n(action_button_vue);

// CONCATENATED MODULE: ./src/js/components/atoms/action-button/action-button.ts
var action_button_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var action_button_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let action_button_ActionButton = class ActionButton extends external_vue_property_decorator_["Vue"] {
    get classObject() {
        const classes = {};
        if (this.block !== '' && typeof this.block === 'string') {
            classes[`${this.block}__link`] = true;
        }
        if (this.mod !== '' && typeof this.mod === 'string') {
            this.mod.split(' ').forEach((mod) => {
                classes[`link--${mod}`] = true;
            });
        }
        if (this.icon !== '' && this.mod && this.mod.indexOf('small') === -1) {
            classes['link--icon'] = true;
        }
        return classes;
    }
};
action_button_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: false }),
    action_button_metadata("design:type", String)
], action_button_ActionButton.prototype, "block", void 0);
action_button_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: false }),
    action_button_metadata("design:type", String)
], action_button_ActionButton.prototype, "mod", void 0);
action_button_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: false }),
    action_button_metadata("design:type", String)
], action_button_ActionButton.prototype, "icon", void 0);
action_button_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: false }),
    action_button_metadata("design:type", String)
], action_button_ActionButton.prototype, "label", void 0);
action_button_ActionButton = action_button_decorate([
    action_button_vue_default.a,
    Object(external_vue_property_decorator_["Component"])({
        name: 'ActionButton',
    })
], action_button_ActionButton);
/* harmony default export */ var action_button = (action_button_ActionButton);

// CONCATENATED MODULE: ./src/js/components/atoms/action-button/index.ts

/* harmony default export */ var atoms_action_button = (action_button);

// CONCATENATED MODULE: ./src/js/components/atoms/animated-arrow/animated-arrow.ts
var animated_arrow_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let animated_arrow_AnimatedArrow = class AnimatedArrow extends external_vue_property_decorator_["Vue"] {
};
animated_arrow_AnimatedArrow = animated_arrow_decorate([
    Object(external_vue_property_decorator_["Component"])({
        name: 'animated-arrow',
        template: __webpack_require__(72),
    })
], animated_arrow_AnimatedArrow);
/* harmony default export */ var animated_arrow = (animated_arrow_AnimatedArrow);

// CONCATENATED MODULE: ./src/js/components/atoms/animated-arrow/index.ts

/* harmony default export */ var atoms_animated_arrow = (animated_arrow);

// CONCATENATED MODULE: ./src/js/constants/events.js
/* harmony default export */ var events = ({
    click: 'gtm-click',
});

// EXTERNAL MODULE: ./src/js/components/atoms/BaseLink/base-link.vue.html
var base_link_vue = __webpack_require__(6);
var base_link_vue_default = /*#__PURE__*/__webpack_require__.n(base_link_vue);

// CONCATENATED MODULE: ./src/js/components/atoms/BaseLink/base-link.ts
var base_link_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var base_link_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let base_link_BaseLink = class BaseLink extends external_vue_property_decorator_["Vue"] {
    constructor() {
        super(...arguments);
        this.absoluteUrlRegex = /^(http(s)?):\/\//;
        this.domainRegex = /(http(s)?):\/\/(www.)?ultimaker\.com/;
    }
    get urlTarget() {
        if (this.url) {
            return this.url.match(this.domainRegex) ? '_self' : '_blank';
        }
        return '';
    }
    get slots() {
        return this.$slots &&
            this.$slots.default &&
            this.$slots.default.length;
    }
    get classObject() {
        const classes = {};
        if (this.block !== '' && typeof this.block === 'string') {
            classes[`${this.block}__link`] = true;
        }
        if (this.mod !== '' && typeof this.mod === 'string') {
            this.mod.split(' ').forEach((mod) => {
                classes[`link--${mod}`] = true;
            });
        }
        if (this.icon !== '' && typeof this.icon === 'string') {
            classes['link--icon'] = true;
        }
        return classes;
    }
    get linkProps() {
        if (this.url && this.url.match(this.absoluteUrlRegex)) {
            return {
                is: 'a',
                href: this.url,
                target: this.urlTarget,
                rel: 'noopener',
            };
        }
        return {
            is: 'router-link',
            to: this.url,
            ref: 'link',
        };
    }
    get clickEventData() {
        if (this.clickEvent) {
            return {
                dataType: this.clickEvent.name,
                data: Object.assign({}, this.clickEvent.data, { pageSlug: this.$route.fullPath, ctaUrlTarget: this.urlTarget }),
            };
        }
        return null;
    }
    triggerEventClick() {
        if (this.clickEvent) {
            this.$emitPublic(events.click, this.clickEventData);
        }
    }
};
base_link_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String }),
    base_link_metadata("design:type", String)
], base_link_BaseLink.prototype, "type", void 0);
base_link_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String }),
    base_link_metadata("design:type", String)
], base_link_BaseLink.prototype, "block", void 0);
base_link_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String }),
    base_link_metadata("design:type", String)
], base_link_BaseLink.prototype, "mod", void 0);
base_link_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String }),
    base_link_metadata("design:type", String)
], base_link_BaseLink.prototype, "icon", void 0);
base_link_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String }),
    base_link_metadata("design:type", String)
], base_link_BaseLink.prototype, "url", void 0);
base_link_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String }),
    base_link_metadata("design:type", String)
], base_link_BaseLink.prototype, "label", void 0);
base_link_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Object }),
    base_link_metadata("design:type", Object)
], base_link_BaseLink.prototype, "clickEvent", void 0);
base_link_BaseLink = base_link_decorate([
    base_link_vue_default.a,
    Object(external_vue_property_decorator_["Component"])({
        name: 'base-link',
    })
], base_link_BaseLink);
/* harmony default export */ var base_link = (base_link_BaseLink);

// CONCATENATED MODULE: ./src/js/components/atoms/BaseLink/index.ts

/* harmony default export */ var atoms_BaseLink = (base_link);

// CONCATENATED MODULE: ./src/js/components/atoms/content-link/content-link.ts
var content_link_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var content_link_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let content_link_ContentLink = class ContentLink extends atoms_BaseLink {
};
content_link_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: false }),
    content_link_metadata("design:type", Object)
], content_link_ContentLink.prototype, "icon", void 0);
content_link_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: true }),
    content_link_metadata("design:type", Object)
], content_link_ContentLink.prototype, "url", void 0);
content_link_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: true }),
    content_link_metadata("design:type", Object)
], content_link_ContentLink.prototype, "label", void 0);
content_link_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Object, required: false }),
    content_link_metadata("design:type", Object)
], content_link_ContentLink.prototype, "clickEvent", void 0);
content_link_ContentLink = content_link_decorate([
    Object(external_vue_property_decorator_["Component"])({
        name: 'ContentLink',
    })
], content_link_ContentLink);
/* harmony default export */ var content_link = (content_link_ContentLink);

// CONCATENATED MODULE: ./src/js/components/atoms/content-link/index.ts

/* harmony default export */ var atoms_content_link = (content_link);

// CONCATENATED MODULE: ./src/js/components/atoms/content-button/content-button.ts
var content_button_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var content_button_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let content_button_ContentButton = class ContentButton extends atoms_BaseLink {
};
content_button_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: false }),
    content_button_metadata("design:type", Object)
], content_button_ContentButton.prototype, "icon", void 0);
content_button_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: false }),
    content_button_metadata("design:type", Object)
], content_button_ContentButton.prototype, "url", void 0);
content_button_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: true }),
    content_button_metadata("design:type", Object)
], content_button_ContentButton.prototype, "label", void 0);
content_button_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Object, required: false }),
    content_button_metadata("design:type", Object)
], content_button_ContentButton.prototype, "clickEvent", void 0);
content_button_ContentButton = content_button_decorate([
    Object(external_vue_property_decorator_["Component"])({
        name: 'ContentButton',
    })
], content_button_ContentButton);
/* harmony default export */ var content_button = (content_button_ContentButton);

// CONCATENATED MODULE: ./src/js/components/atoms/content-button/index.ts

/* harmony default export */ var atoms_content_button = (content_button);

// EXTERNAL MODULE: ./src/js/components/atoms/content-link-list/content-link-list.vue.html
var content_link_list_vue = __webpack_require__(7);
var content_link_list_vue_default = /*#__PURE__*/__webpack_require__.n(content_link_list_vue);

// CONCATENATED MODULE: ./src/js/components/atoms/content-link-list/content-link-list.ts
var content_link_list_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var content_link_list_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let content_link_list_ContentLinkList = class ContentLinkList extends external_vue_property_decorator_["Vue"] {
};
content_link_list_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: true }),
    content_link_list_metadata("design:type", String)
], content_link_list_ContentLinkList.prototype, "block", void 0);
content_link_list_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Array, default: [] }),
    content_link_list_metadata("design:type", Array)
], content_link_list_ContentLinkList.prototype, "links", void 0);
content_link_list_ContentLinkList = content_link_list_decorate([
    content_link_list_vue_default.a,
    Object(external_vue_property_decorator_["Component"])({
        name: 'content-link-list',
    })
], content_link_list_ContentLinkList);
/* harmony default export */ var content_link_list = (content_link_list_ContentLinkList);

// CONCATENATED MODULE: ./src/js/components/atoms/content-link-list/index.js

/* harmony default export */ var atoms_content_link_list = (content_link_list);

// EXTERNAL MODULE: ./src/js/components/atoms/hit-area/hit-area.vue.html
var hit_area_vue = __webpack_require__(8);
var hit_area_vue_default = /*#__PURE__*/__webpack_require__.n(hit_area_vue);

// CONCATENATED MODULE: ./src/js/components/atoms/hit-area/hit-area.ts
var hit_area_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let hit_area_HitArea = class HitArea extends external_vue_property_decorator_["Vue"] {
};
hit_area_HitArea = hit_area_decorate([
    hit_area_vue_default.a,
    Object(external_vue_property_decorator_["Component"])({
        name: 'hit-area',
    })
], hit_area_HitArea);
/* harmony default export */ var hit_area = (hit_area_HitArea);

// CONCATENATED MODULE: ./src/js/components/atoms/hit-area/index.ts

/* harmony default export */ var atoms_hit_area = (hit_area);

// EXTERNAL MODULE: ./src/js/components/atoms/horizontal-list/horizontal-list.vue.html
var horizontal_list_vue = __webpack_require__(9);
var horizontal_list_vue_default = /*#__PURE__*/__webpack_require__.n(horizontal_list_vue);

// CONCATENATED MODULE: ./src/js/components/atoms/horizontal-list/horizontal-list.ts
var horizontal_list_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var horizontal_list_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let horizontal_list_HorizontalList = class HorizontalList extends external_vue_property_decorator_["Vue"] {
};
horizontal_list_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String }),
    horizontal_list_metadata("design:type", String)
], horizontal_list_HorizontalList.prototype, "styleModifier", void 0);
horizontal_list_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: true }),
    horizontal_list_metadata("design:type", String)
], horizontal_list_HorizontalList.prototype, "label", void 0);
horizontal_list_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Array, required: true }),
    horizontal_list_metadata("design:type", Array)
], horizontal_list_HorizontalList.prototype, "listItems", void 0);
horizontal_list_HorizontalList = horizontal_list_decorate([
    horizontal_list_vue_default.a,
    Object(external_vue_property_decorator_["Component"])({
        name: 'horizontal-list',
    })
], horizontal_list_HorizontalList);
/* harmony default export */ var horizontal_list = (horizontal_list_HorizontalList);

// CONCATENATED MODULE: ./src/js/components/atoms/horizontal-list/index.ts

/* harmony default export */ var atoms_horizontal_list = (horizontal_list);

// EXTERNAL MODULE: ./src/js/components/atoms/icon/icon.vue.html
var icon_vue = __webpack_require__(10);
var icon_vue_default = /*#__PURE__*/__webpack_require__.n(icon_vue);

// CONCATENATED MODULE: ./src/js/components/atoms/icon/icon.ts
var icon_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var icon_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


const defaultIconUrl = '/static/icons/iconset.svg';
let icon_Icon = class Icon extends external_vue_property_decorator_["Vue"] {
    constructor() {
        super(...arguments);
        /* eslint-disable dot-notation */
        this.iconUrl = window['svgIconMap'] || defaultIconUrl;
        this.ready = false;
        this.symbolData = null;
        this.viewBox = null;
    }
    get iconId() {
        return `icon-${this.iconName}`;
    }
    get iconClass() {
        return `icon--${this.iconName}`;
    }
    get iconRef() {
        return `${this.iconUrl}#icon-${this.iconName}`;
    }
    mounted() {
        // Only render in browser
        this.ready = true;
    }
};
icon_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: true }),
    icon_metadata("design:type", String)
], icon_Icon.prototype, "iconName", void 0);
icon_Icon = icon_decorate([
    icon_vue_default.a,
    Object(external_vue_property_decorator_["Component"])({
        name: 'icon',
    })
], icon_Icon);
/* harmony default export */ var icon = (icon_Icon);

// CONCATENATED MODULE: ./src/js/components/atoms/icon/index.ts

/* harmony default export */ var atoms_icon = (icon);

// EXTERNAL MODULE: ./node_modules/@ultimaker/ultimaker.com-model-definitions/dist/atoms/media/Image.js
var Image = __webpack_require__(3);

// CONCATENATED MODULE: ./src/js/components/atoms/c-image/c-image.models.ts

var ImageFormat;
(function (ImageFormat) {
    ImageFormat["default"] = "";
    ImageFormat["jpg"] = "jpg";
    ImageFormat["pjpg"] = "pjpg";
    ImageFormat["png"] = "png";
    ImageFormat["png8"] = "png8";
    ImageFormat["webp"] = "webp";
})(ImageFormat || (ImageFormat = {}));
var ResizeBehavior;
(function (ResizeBehavior) {
    ResizeBehavior["default"] = "";
    ResizeBehavior["pad"] = "pad";
    ResizeBehavior["fill"] = "fill";
    ResizeBehavior["scale"] = "scale";
    ResizeBehavior["crop"] = "crop";
    ResizeBehavior["thumb"] = "thumb";
})(ResizeBehavior || (ResizeBehavior = {}));

// CONCATENATED MODULE: ./src/js/utils/browser-capabilities.js
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
        if (!this.isBrowser) {
            return true;
        }
        const edgeVersion = window.navigator.userAgent.match(/Edge\/(\d{2})\./);
        const edgePartialSupport = (edgeVersion) ? (parseInt(edgeVersion[1], 10) >= 16) : false;
        if (edgePartialSupport) {
            return false;
        }
        return 'objectFit' in document.documentElement.style;
    }
}
/* harmony default export */ var browser_capabilities = (BrowserCapabilities);

// EXTERNAL MODULE: external "lodash/debounce"
var debounce_ = __webpack_require__(2);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce_);

// CONCATENATED MODULE: ./src/js/constants/defaults.js
/* harmony default export */ var defaults = ({
    consentLevel: 0b0011,
    suggestedConsentLevel: 0b1111,
    consentLevels: {
        functional: 0b0001,
        analytics: 0b0010,
        personalization: 0b0100,
        tracking: 0b1000,
        minimal: 0b0011,
        all: 0b1111,
    },
    country: {
        name: 'United States of America',
        code: 'US',
        currency: {
            code: 'USD',
            symbol: '$',
        },
    },
    language: 'en',
    breakpoints: {
        mobile: {
            min: 0,
            max: 568,
        },
        mobileXl: {
            min: 569,
            max: 767,
        },
        tablet: {
            min: 768,
            max: 1024,
        },
        desktop: {
            min: 1025,
            max: 1200,
        },
        desktopHd: {
            min: 1201,
            max: Infinity,
        },
    },
    buildingUnit: 12,
    defaultDuration: 0.3,
    defaultEase: '.23, 1, .32, 1',
});

// CONCATENATED MODULE: ./src/js/utils/viewport.js



let viewport_instance = null;
let _scrollAnimationPending = false;
let _resizeAnimationPending = false;
const _resizeHandlers = [];
const _scrollHandlers = [];
const _orientationChangeHandlers = [];
function scrollHandler() {
    if (!_scrollAnimationPending) {
        _scrollAnimationPending = true;
        window.requestAnimationFrame(() => {
            this.updateScrollState();
            _scrollHandlers.forEach(h => h());
            _scrollAnimationPending = false;
        });
    }
}
function resizeHandler() {
    if (!_resizeAnimationPending) {
        _resizeAnimationPending = true;
        window.requestAnimationFrame(() => {
            this.updateScreenDimensions();
            _resizeHandlers.forEach(h => h());
            _resizeAnimationPending = false;
        });
    }
}
function orientationChangeHandler() {
    window.requestAnimationFrame(() => {
        _orientationChangeHandlers.forEach(h => h());
    });
}
function documentLoadedHandler() {
    this.updateScrollState();
    this.updateScreenDimensions();
}
/* eslint-disable complexity */
class viewport_ViewportUtility {
    constructor() {
        if (viewport_instance !== null) {
            return viewport_instance;
        }
        viewport_instance = this;
        this.resizing = false;
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
        return viewport_instance;
    }
    _attachEventListeners() {
        const minWait = 1000 / 60; // 60 fps
        const maxWait = 1000 / 30; // 30 fps
        document.addEventListener('scroll', debounce_default()(() => {
            scrollHandler.apply(this);
        }, minWait, { maxWait }));
        if (browser_capabilities.supportsTouch) {
            document.addEventListener('touchmove', debounce_default()(() => {
                scrollHandler.apply(this);
            }, minWait, { maxWait }));
        }
        document.addEventListener('DOMContentLoaded', () => {
            documentLoadedHandler.apply(this);
        });
        window.addEventListener('resize', () => {
            this.resizing = true;
        });
        window.addEventListener('resize', debounce_default()(() => {
            this.resizing = false;
            resizeHandler.apply(this);
        }, minWait, { maxWait }));
        window.addEventListener('orientationchange', () => {
            orientationChangeHandler.apply(this);
        });
    }
    updateScrollState() {
        let y = window.pageYOffset;
        const x = window.pageXOffset;
        const maxScrollY = this.documentHeight - this.screenHeight;
        let direction = this.scrollDirection;
        if (y > maxScrollY) {
            y = maxScrollY;
        }
        if (y > this.scrollY) {
            direction = 'down';
        }
        else if (y < this.scrollY) {
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
    get isResizing() {
        return this.resizing;
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
        return this.screenWidth <= defaults.breakpoints.mobile.max;
    }
    get isMobileXl() {
        return this.screenWidth <= defaults.breakpoints.mobileXl.max;
    }
    get isTablet() {
        return this.screenWidth <= defaults.breakpoints.tablet.max;
    }
    addResizeHandler(handler) {
        _resizeHandlers.push(handler);
    }
    removeResizeHandler(handler) {
        // not using filter because _resizeHandler is a constant
        const index = _resizeHandlers.indexOf(handler);
        if (index < 0) {
            return;
        }
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
        if (index < 0) {
            return;
        }
        _scrollHandlers.splice(index, 1);
    }
    addOrientationChangeHandler(handler) {
        _orientationChangeHandlers.push(handler);
    }
    removeOrientationChangeHandler(handler) {
        // not using filter because _scrollHandlers is a constant
        const index = _orientationChangeHandlers.indexOf(handler);
        if (index < 0) {
            return;
        }
        _orientationChangeHandlers.splice(index, 1);
    }
}
/* harmony default export */ var viewport = (viewport_ViewportUtility);

// CONCATENATED MODULE: ./src/js/mixins/in-view.ts
var in_view_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var in_view_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let in_view_InView = class InView extends external_vue_property_decorator_["Vue"] {
    constructor() {
        super(...arguments);
        this.inView = false;
        this.viewportUtil = new viewport();
    }
    intersectionHandler(entries) {
        if (entries.length) {
            const entry = entries.slice(-1)[0];
            this.setInView(entry.isIntersecting);
        }
    }
    intersectionPolyHandler() {
        const windowBottom = this.viewportUtil.scrollY + this.viewportUtil.screenHeight;
        const pictureBounds = this.$el.getBoundingClientRect();
        const pictureTop = this.viewportUtil.scrollY + pictureBounds.top;
        const pictureBottom = pictureTop + pictureBounds.height;
        this.setInView(this.viewportUtil.scrollY <= pictureBottom && windowBottom >= pictureTop);
    }
    setInView(inView) {
        if (this.inView && this.keepInView) {
            return;
        }
        this.inView = inView;
    }
    mounted() {
        if (!browser_capabilities.supportsIntersectionObserver) {
            this.viewportUtil.addResizeHandler(this.intersectionPolyHandler);
            this.viewportUtil.addScrollHandler(this.intersectionPolyHandler);
            return;
        }
        this.inViewObserver = new IntersectionObserver(this.intersectionHandler);
        this.inViewObserver.observe(this.$el);
    }
    beforeDestroy() {
        if (this.inViewObserver) {
            this.inViewObserver.unobserve(this.$el);
        }
        else {
            this.viewportUtil.removeResizeHandler(this.intersectionPolyHandler);
            this.viewportUtil.removeScrollHandler(this.intersectionPolyHandler);
        }
    }
};
in_view_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Boolean, default: true }),
    in_view_metadata("design:type", Boolean)
], in_view_InView.prototype, "keepInView", void 0);
in_view_InView = in_view_decorate([
    external_vue_property_decorator_["Component"]
], in_view_InView);


// CONCATENATED MODULE: ./src/js/components/atoms/c-image/c-image.constants.ts
const imageConstants = {
    maxWidth: 4000,
    maxHeight: 4000,
    initialSize: 20,
    tinyGif: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
};

// EXTERNAL MODULE: ./src/js/components/atoms/c-image/c-image.vue.html
var c_image_vue = __webpack_require__(11);
var c_image_vue_default = /*#__PURE__*/__webpack_require__.n(c_image_vue);

// CONCATENATED MODULE: ./src/js/components/atoms/c-image/c-image.ts
var c_image_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var c_image_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







let c_image_CImage = class CImage extends Object(external_vue_property_decorator_["Mixins"])(in_view_InView) {
    constructor() {
        super(...arguments);
        this.viewportUtil = new viewport();
        this.imageLoaded = false;
        this.ready = false;
        this.width = 0;
        this.height = 0;
    }
    mounted() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!browser_capabilities.isBrowser)
                return;
            this.viewportUtil.addResizeHandler(this.resizeHandler);
            yield this.calculateDimensions(true);
            this.ready = true;
        });
    }
    beforeDestroy() {
        this.viewportUtil.removeResizeHandler(this.resizeHandler);
        this.viewportUtil.removeScrollHandler(this.resizeHandler);
    }
    reset() {
        return __awaiter(this, void 0, void 0, function* () {
            this.ready = false;
            this.imageLoaded = false;
            this.width = 0;
            this.height = 0;
            this.$nextTick(() => { this.ready = true; });
            if (this.inView) {
                yield this.inViewWatcher(true);
            }
        });
    }
    get classList() {
        return {
            'img--loading': !this.inView || !this.imageLoaded,
        };
    }
    get src() {
        if (browser_capabilities.isBrowser) {
            return imageConstants.tinyGif;
        }
        return this.url;
    }
    get srcset() {
        if (!this.ready) {
            return `${imageConstants.tinyGif} 1w`;
        }
        return `${this.imageLoaded && this.inView ? this.imageUrl : this.thumbUrl} ${this.width || imageConstants.initialSize}w`;
    }
    get imageUrl() {
        return `${this.url}${this.getParams({})}`;
    }
    get thumbUrl() {
        if (this.resizeBehavior !== ResizeBehavior.default) {
            const cropFactor = this.width > this.height ? this.width / imageConstants.initialSize : this.height / imageConstants.initialSize;
            const height = Math.round(this.height / cropFactor);
            const width = Math.round(this.width / cropFactor);
            return `${this.url}${this.getParams({ width, height })}`;
        }
        return `${this.url}${this.getParams({ width: imageConstants.initialSize })}`;
    }
    getParams(options) {
        const elementWidth = this.width || imageConstants.initialSize;
        const elementHeight = this.height;
        const paramMap = new Map([
            ['w', options && options.width ? options.width : elementWidth],
            ['h', options && options.height ? options.height : elementHeight],
            ['fit', this.resizeBehavior],
            ['f', this.focusArea],
            ['r', this.radius],
        ]);
        if (this.imageFormat === ImageFormat.jpg || this.imageFormat === ImageFormat.pjpg) {
            paramMap.set('q', this.quality);
        }
        if (this.backgroundColor) {
            paramMap.set('bg', `rgb:${this.backgroundColor}`);
        }
        switch (this.imageFormat) {
            case ImageFormat.pjpg:
                paramMap.set('fm', ImageFormat.jpg);
                paramMap.set('fl', 'progressive');
                break;
            case ImageFormat.png8:
                paramMap.set('fm', ImageFormat.png);
                paramMap.set('fl', 'png8');
                break;
            default:
                if (this.imageFormat !== ImageFormat.default) {
                    paramMap.set('fm', this.imageFormat);
                }
        }
        return Array.from(paramMap.keys()).reduce((accumulator, current) => {
            const value = paramMap.get(current);
            if (!value)
                return accumulator;
            return `${accumulator}${accumulator === '' ? '?' : '&'}${current}=${value}`;
        }, '');
    }
    calculateDimensions(forceUpdate = false) {
        if (!browser_capabilities.isBrowser)
            return Promise.resolve();
        if (!this.inView && !forceUpdate)
            return Promise.resolve();
        return new Promise((resolve) => {
            window.requestAnimationFrame(() => {
                const rect = this.$el.getBoundingClientRect();
                const desiredWidth = Math.floor(rect.width * (window.devicePixelRatio || 1));
                const desiredHeight = Math.floor(rect.height * (window.devicePixelRatio || 1));
                if (this.resizeBehavior !== ResizeBehavior.default) {
                    this.width = desiredWidth > imageConstants.maxWidth ? imageConstants.maxWidth : desiredWidth;
                    this.height = desiredHeight > imageConstants.maxHeight ? imageConstants.maxHeight : desiredHeight;
                }
                else {
                    this.width = desiredWidth > imageConstants.maxWidth ? imageConstants.maxWidth : desiredWidth;
                }
                resolve();
            });
        });
    }
    inViewWatcher(val) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!val || this.imageLoaded) {
                return;
            }
            yield this.calculateDimensions();
            const imageToLoad = document.createElement('img');
            imageToLoad.src = this.imageUrl;
            imageToLoad.addEventListener('load', this.imageLoadHandler);
        });
    }
    resizeHandler() {
        this.calculateDimensions();
    }
    imageLoadHandler() {
        this.imageLoaded = true;
    }
};
c_image_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: true }),
    c_image_metadata("design:type", String)
], c_image_CImage.prototype, "mimeType", void 0);
c_image_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: true }),
    c_image_metadata("design:type", String)
], c_image_CImage.prototype, "url", void 0);
c_image_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, default: '' }),
    c_image_metadata("design:type", String)
], c_image_CImage.prototype, "alt", void 0);
c_image_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Boolean, default: false }),
    c_image_metadata("design:type", Boolean)
], c_image_CImage.prototype, "crop", void 0);
c_image_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, default: ImageFormat.default }),
    c_image_metadata("design:type", String)
], c_image_CImage.prototype, "imageFormat", void 0);
c_image_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, default: ResizeBehavior.default }),
    c_image_metadata("design:type", String)
], c_image_CImage.prototype, "resizeBehavior", void 0);
c_image_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, default: Image["FocusArea"].center }),
    c_image_metadata("design:type", String)
], c_image_CImage.prototype, "focusArea", void 0);
c_image_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Number, default: 0 }),
    c_image_metadata("design:type", Number)
], c_image_CImage.prototype, "radius", void 0);
c_image_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Number, default: 65 }),
    c_image_metadata("design:type", Number)
], c_image_CImage.prototype, "quality", void 0);
c_image_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, default: null }),
    c_image_metadata("design:type", Object)
], c_image_CImage.prototype, "backgroundColor", void 0);
c_image_decorate([
    Object(external_vue_property_decorator_["Watch"])('url'),
    c_image_metadata("design:type", Function),
    c_image_metadata("design:paramtypes", []),
    c_image_metadata("design:returntype", Promise)
], c_image_CImage.prototype, "reset", null);
c_image_decorate([
    Object(external_vue_property_decorator_["Watch"])('inView'),
    c_image_metadata("design:type", Function),
    c_image_metadata("design:paramtypes", [Boolean]),
    c_image_metadata("design:returntype", Promise)
], c_image_CImage.prototype, "inViewWatcher", null);
c_image_CImage = c_image_decorate([
    c_image_vue_default.a,
    Object(external_vue_property_decorator_["Component"])({
        name: 'c-image',
    })
], c_image_CImage);
/* harmony default export */ var c_image = (c_image_CImage);

// CONCATENATED MODULE: ./src/js/components/atoms/c-image/index.ts

/* harmony default export */ var atoms_c_image = (c_image);

// EXTERNAL MODULE: ./src/js/components/atoms/li-inline/template.vue.html
var li_inline_template_vue = __webpack_require__(12);
var li_inline_template_vue_default = /*#__PURE__*/__webpack_require__.n(li_inline_template_vue);

// CONCATENATED MODULE: ./src/js/components/atoms/li-inline/component.ts
var component_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var component_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let component_LiInline = class LiInline extends external_vue_property_decorator_["Vue"] {
};
component_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: [String, Object], required: true }),
    component_metadata("design:type", Object)
], component_LiInline.prototype, "item", void 0);
component_LiInline = component_decorate([
    li_inline_template_vue_default.a,
    Object(external_vue_property_decorator_["Component"])({
        name: 'LiInline',
    })
], component_LiInline);
/* harmony default export */ var li_inline_component = (component_LiInline);

// CONCATENATED MODULE: ./src/js/components/atoms/li-inline/index.ts

/* harmony default export */ var li_inline = (li_inline_component);

// EXTERNAL MODULE: ./src/js/components/atoms/li-item/template.vue.html
var li_item_template_vue = __webpack_require__(13);
var li_item_template_vue_default = /*#__PURE__*/__webpack_require__.n(li_item_template_vue);

// CONCATENATED MODULE: ./src/js/components/atoms/li-item/component.ts
var li_item_component_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var li_item_component_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let component_LiItem = class LiItem extends external_vue_property_decorator_["Vue"] {
};
li_item_component_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: [String, Object], required: true }),
    li_item_component_metadata("design:type", Object)
], component_LiItem.prototype, "item", void 0);
component_LiItem = li_item_component_decorate([
    li_item_template_vue_default.a,
    Object(external_vue_property_decorator_["Component"])({
        name: 'LiItem',
    })
], component_LiItem);
/* harmony default export */ var li_item_component = (component_LiItem);

// CONCATENATED MODULE: ./src/js/components/atoms/li-item/index.ts

/* harmony default export */ var li_item = (li_item_component);

// CONCATENATED MODULE: ./src/js/components/atoms/nav-assist/nav-assist.ts
var nav_assist_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var nav_assist_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let nav_assist_NavAssist = class NavAssist extends external_vue_property_decorator_["Vue"] {
    constructor() {
        super(...arguments);
        this.used = false;
    }
    toggleState() {
        this.used = true;
        this.$emit('toggle');
    }
    close() {
        if (this.openState) {
            this.$emit('toggle');
        }
    }
    onOpenStateChange() {
        this.used = true;
        this.$emit('used');
    }
};
nav_assist_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Boolean, default: false }),
    nav_assist_metadata("design:type", Boolean)
], nav_assist_NavAssist.prototype, "openState", void 0);
nav_assist_decorate([
    Object(external_vue_property_decorator_["Watch"])('openState'),
    nav_assist_metadata("design:type", Function),
    nav_assist_metadata("design:paramtypes", []),
    nav_assist_metadata("design:returntype", void 0)
], nav_assist_NavAssist.prototype, "onOpenStateChange", null);
nav_assist_NavAssist = nav_assist_decorate([
    Object(external_vue_property_decorator_["Component"])({
        name: 'nav-assist',
        template: __webpack_require__(73),
    })
], nav_assist_NavAssist);
/* harmony default export */ var nav_assist = (nav_assist_NavAssist);

// CONCATENATED MODULE: ./src/js/components/atoms/nav-assist/index.ts

/* harmony default export */ var atoms_nav_assist = (nav_assist);

// CONCATENATED MODULE: ./src/js/components/atoms/responsive-picture/responsive-picture-source.ts
var responsive_picture_source_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var responsive_picture_source_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let responsive_picture_source_ResponsivePictureSource = class ResponsivePictureSource extends external_vue_property_decorator_["Vue"] {
    get srcset() {
        if (typeof this.image === 'string') {
            return this.image;
        }
        return this.image.retinaUrl ? `${this.image.url}, ${this.image.retinaUrl} 2x` : this.image.url;
    }
};
responsive_picture_source_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: [String, Object], required: true }),
    responsive_picture_source_metadata("design:type", Object)
], responsive_picture_source_ResponsivePictureSource.prototype, "image", void 0);
responsive_picture_source_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: true }),
    responsive_picture_source_metadata("design:type", String)
], responsive_picture_source_ResponsivePictureSource.prototype, "media", void 0);
responsive_picture_source_ResponsivePictureSource = responsive_picture_source_decorate([
    Object(external_vue_property_decorator_["Component"])({
        name: 'responsive-picture-source',
        template: '<source :media="media" :srcset="srcset">',
    })
], responsive_picture_source_ResponsivePictureSource);
/* harmony default export */ var responsive_picture_source = (responsive_picture_source_ResponsivePictureSource);

// CONCATENATED MODULE: ./src/js/components/atoms/responsive-picture/responsive-picture.ts
var responsive_picture_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var responsive_picture_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let responsive_picture_ResponsivePicture = class ResponsivePicture extends external_vue_property_decorator_["Vue"] {
    constructor() {
        super(...arguments);
        this.viewportUtil = new viewport();
        this.ready = false;
        this.inView = false;
        this.loaded = false;
    }
    get lazyLoading() {
        return (this.lazy && !this.inView) || (!this.lazy && this.ready) || (!this.lazy);
    }
    get classes() {
        return {
            [this.imgClass]: true,
            'img--lazy': this.lazy,
            'img--loading': this.lazy && this.inView && !this.loaded,
            'img--loaded': this.loaded,
        };
    }
    calculateInView() {
        if (this.inView) {
            return;
        }
        const windowBottom = this.viewportUtil.scrollY + this.viewportUtil.screenHeight;
        const pictureBounds = this.$el.getBoundingClientRect();
        const pictureTop = this.viewportUtil.scrollY + pictureBounds.top;
        const pictureBottom = pictureTop + pictureBounds.height;
        this.inView = this.viewportUtil.scrollY <= pictureBottom && windowBottom >= pictureTop;
    }
    mounted() {
        window.requestAnimationFrame(() => {
            this.ready = true;
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
        const img = this.$el.querySelector('img');
        if (img) {
            img.addEventListener('load', () => {
                this.loaded = true;
            });
        }
    }
    beforeDestroy() {
        if (this.lazy) {
            this.viewportUtil.removeResizeHandler(this.calculateInView);
            this.viewportUtil.removeScrollHandler(this.calculateInView);
        }
    }
};
responsive_picture_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: [String, Object], required: false }),
    responsive_picture_metadata("design:type", Object)
], responsive_picture_ResponsivePicture.prototype, "desktopHdWidth", void 0);
responsive_picture_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: [String, Object], required: false }),
    responsive_picture_metadata("design:type", Object)
], responsive_picture_ResponsivePicture.prototype, "desktopWidth", void 0);
responsive_picture_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: [String, Object], required: false }),
    responsive_picture_metadata("design:type", Object)
], responsive_picture_ResponsivePicture.prototype, "tabletWidth", void 0);
responsive_picture_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: [String, Object], required: false }),
    responsive_picture_metadata("design:type", Object)
], responsive_picture_ResponsivePicture.prototype, "mobileXlWidth", void 0);
responsive_picture_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: [String, Object], required: false }),
    responsive_picture_metadata("design:type", Object)
], responsive_picture_ResponsivePicture.prototype, "mobileLWidth", void 0);
responsive_picture_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: [String, Object], required: true }),
    responsive_picture_metadata("design:type", Object)
], responsive_picture_ResponsivePicture.prototype, "mobileWidth", void 0);
responsive_picture_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Boolean, required: false, default: true }),
    responsive_picture_metadata("design:type", Boolean)
], responsive_picture_ResponsivePicture.prototype, "lazy", void 0);
responsive_picture_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: false, default: '' }),
    responsive_picture_metadata("design:type", String)
], responsive_picture_ResponsivePicture.prototype, "description", void 0);
responsive_picture_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: false, default: '' }),
    responsive_picture_metadata("design:type", String)
], responsive_picture_ResponsivePicture.prototype, "imgClass", void 0);
responsive_picture_ResponsivePicture = responsive_picture_decorate([
    Object(external_vue_property_decorator_["Component"])({
        name: 'responsive-picture',
        template: __webpack_require__(74),
        components: {
            ResponsivePictureSource: responsive_picture_source,
        },
    })
], responsive_picture_ResponsivePicture);
/* harmony default export */ var responsive_picture = (responsive_picture_ResponsivePicture);

// CONCATENATED MODULE: ./src/js/components/atoms/responsive-picture/index.ts

/* harmony default export */ var atoms_responsive_picture = (responsive_picture);

// EXTERNAL MODULE: ./src/js/components/atoms/span-label/template.vue.html
var span_label_template_vue = __webpack_require__(14);
var span_label_template_vue_default = /*#__PURE__*/__webpack_require__.n(span_label_template_vue);

// CONCATENATED MODULE: ./src/js/components/atoms/span-label/component.ts
var span_label_component_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var span_label_component_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let component_SpanLabel = class SpanLabel extends external_vue_property_decorator_["Vue"] {
};
span_label_component_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: true }),
    span_label_component_metadata("design:type", String)
], component_SpanLabel.prototype, "item", void 0);
component_SpanLabel = span_label_component_decorate([
    span_label_template_vue_default.a,
    Object(external_vue_property_decorator_["Component"])({
        name: 'SpanLabel',
    })
], component_SpanLabel);
/* harmony default export */ var span_label_component = (component_SpanLabel);

// CONCATENATED MODULE: ./src/js/components/atoms/span-label/index.ts

/* harmony default export */ var span_label = (span_label_component);

// EXTERNAL MODULE: external "gsap"
var external_gsap_ = __webpack_require__(1);

// CONCATENATED MODULE: ./src/js/components/atoms/tabbable-definition-list/tabbable-definition-list.js
/* eslint-disable no-param-reassign */



/* harmony default export */ var tabbable_definition_list = ({
    name: 'tabbable-definition-list',
    template: __webpack_require__(75),
    data: () => ({
        viewport: new viewport(),
        heights: [],
    }),
    props: {
        items: {
            type: Array,
            default: () => [],
        },
        activeIndex: {
            type: Number,
            default: 0,
        },
    },
    watch: {
        items() {
            this.updateElementPositions();
        },
        activeIndex(newValue, oldValue) {
            this.killTweensAndCompleteOf(this.$refs.terms);
            this.killTweensAndCompleteOf(this.$refs.descriptions);
            const duration = 0.4;
            const direction = this.getDirection(oldValue, newValue);
            const height = this.heights[newValue];
            const delay = this.viewport.isMobile ? duration * 0.6 : 0;
            const descriptionHeight = (this.viewport.isMobile ? height.dt : 0) + height.dd + (defaults.buildingUnit * 2.5);
            const elementsToHide = !this.viewport.isMobile ? this.$refs.descriptions[oldValue] :
                [this.$refs.terms[oldValue], this.$refs.descriptions[oldValue]];
            // Animate current text up
            // Open New Item
            external_gsap_["TweenLite"].to(elementsToHide, duration, { height: 0, y: 20 * direction, ease: external_gsap_["Power3"].easeOut });
            external_gsap_["TweenLite"].fromTo(elementsToHide, duration * 0.3, { autoAlpha: 1 }, { autoAlpha: 0, ease: external_gsap_["Power0"].easeNone });
            // Close current item
            // Animate next text up
            external_gsap_["TweenLite"].fromTo(this.$refs.descriptions[newValue], duration, { height: 0, y: -20 * direction }, { height: descriptionHeight, y: 0, ease: external_gsap_["Power3"].easeOut, delay });
            external_gsap_["TweenLite"].fromTo(this.$refs.descriptions[newValue], duration * 0.3, { autoAlpha: 0 }, { autoAlpha: 1, ease: external_gsap_["Power0"].easeNone, delay });
            if (this.viewport.isMobile) {
                external_gsap_["TweenLite"].fromTo(this.$refs.terms[newValue], duration, { height: 0, y: -20 * direction }, { height: height.dt, y: 0, ease: external_gsap_["Power3"].easeOut, delay });
                external_gsap_["TweenLite"].fromTo(this.$refs.terms[newValue], duration * 0.3, { autoAlpha: 0 }, { autoAlpha: 1, ease: external_gsap_["Power0"].easeNone, delay });
            }
        },
    },
    methods: {
        changeIndex(index) {
            this.$emit('index-changed', { index });
        },
        getDirection(oldValue, newValue) {
            if (this.viewport.isMobile) {
                if (oldValue < newValue) {
                    return (newValue - (this.$refs.terms.length - 1) === oldValue) ? 1 : -1;
                }
                return (oldValue - (this.$refs.terms.length - 1) === newValue) ? -1 : 1;
            }
            return (oldValue < newValue) ? -1 : 1;
        },
        killTweensAndCompleteOf(elements) {
            const tweens = external_gsap_["TweenLite"].getTweensOf(elements);
            if (tweens) {
                for (let i = 0, leni = tweens.length; i < leni; i += 1) {
                    tweens[i].seek(tweens[i].duration());
                }
                external_gsap_["TweenLite"].killTweensOf(tweens);
            }
        },
        renderItemOffscreen(item) {
            item.style.display = 'block';
            item.style.position = 'relative';
            item.style.left = '-9999px';
            item.style.height = 'auto';
            item.style.transform = '';
        },
        resetItemPosition(item) {
            item.style.position = '';
            item.style.display = '';
            item.style.left = '';
        },
        calculateDimensions() {
            this.heights = [];
            if (!this.$refs.descriptions || !this.$refs.descriptions.length) {
                return;
            }
            /** REMARK **
             * Trying to prevent layout trashing by first
             * 1. position dom elements
             * 2. read values
             * 3. reset elements
             *
             * Doing these steps for each elements causes a lot more layout calculations
             */
            // 1. position dom elements
            this.$refs.terms.forEach((element) => {
                this.renderItemOffscreen(element);
            });
            this.$refs.descriptions.forEach((element) => {
                element.style.marginBottom = '0'; // Margin is added by adding 24px to the height; see 'elementHeight';
                this.renderItemOffscreen(element);
            });
            // 2. read values (measure heights)
            this.$refs.descriptions.forEach((element) => {
                const currentHeight = {
                    dt: element.previousElementSibling.getBoundingClientRect().height,
                    dd: element.getBoundingClientRect().height,
                };
                this.heights.push(currentHeight);
            });
            // 3. reset elements (restore elements)
            this.$refs.terms.forEach((element, index) => {
                this.resetItemPosition(element);
                if (this.viewport.isMobile) {
                    element.style.opacity = (index === this.activeIndex) ? '1' : '0';
                    element.style.visibility = (index === this.activeIndex) ? 'visible' : 'hidden';
                }
                else {
                    element.style.opacity = '1';
                    element.style.visibility = 'visible';
                }
            });
            this.$refs.descriptions.forEach((element, index) => {
                this.resetItemPosition(element, index);
                if (index !== this.activeIndex) {
                    element.style.height = '0';
                    element.style.opacity = '0';
                    element.style.visibility = 'hidden';
                }
            });
        },
        updateElementPositions() {
            const currentElement = this.$refs.descriptions[this.activeIndex];
            currentElement.style.height = '';
            const currentElementHeight = currentElement.getBoundingClientRect().height;
            const { isMobile } = this.viewport;
            this.$el.style.height = 'auto';
            this.calculateDimensions();
            const maxElementHeight = isMobile ? this.maxHeight : this.$el.getBoundingClientRect().height + this.maxHeight - currentElementHeight;
            const height = this.heights[this.activeIndex];
            this.$refs.descriptions.forEach((element, index) => {
                element.style.top = isMobile ? `${this.heights[index].dt + (defaults.buildingUnit * 2.5)}px` : 0;
            });
            if (isMobile) {
                currentElement.style.height = `${height.dt + height.dd + (defaults.buildingUnit * 2.5)}px`;
            }
            else {
                currentElement.style.height = `${height.dd + (defaults.buildingUnit * 2.5)}px`;
            }
            this.$el.style.height = `${maxElementHeight + (defaults.buildingUnit * 0.5)}px`;
        },
    },
    computed: {
        maxHeight() {
            if (!this.heights.length) {
                return 0;
            }
            if (this.viewport.isMobile) {
                return Math.max(...this.heights.map(i => i.dt + (defaults.buildingUnit * 2.5) + i.dd));
            }
            return Math.max(...this.heights.map(i => i.dd));
        },
    },
    mounted() {
        this.updateElementPositions();
        this.viewport.addResizeHandler(this.updateElementPositions);
    },
    beforeDestroy() {
        this.viewport.removeResizeHandler(this.updateElementPositions);
    },
});

// CONCATENATED MODULE: ./src/js/components/atoms/tabbable-definition-list/index.js

/* harmony default export */ var atoms_tabbable_definition_list = (tabbable_definition_list);

// EXTERNAL MODULE: ./src/js/components/atoms/tooltip/tooltip.vue.html
var tooltip_vue = __webpack_require__(15);
var tooltip_vue_default = /*#__PURE__*/__webpack_require__.n(tooltip_vue);

// CONCATENATED MODULE: ./src/js/components/atoms/tooltip/tooltip.ts
var tooltip_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var tooltip_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let tooltip_Tooltip = class Tooltip extends external_vue_property_decorator_["Vue"] {
    classObject() {
        const classes = {};
        if (this.block) {
            classes[`${this.block}__tooltip`] = true;
        }
        return classes;
    }
};
tooltip_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: false, default: '' }),
    tooltip_metadata("design:type", String)
], tooltip_Tooltip.prototype, "block", void 0);
tooltip_Tooltip = tooltip_decorate([
    tooltip_vue_default.a,
    Object(external_vue_property_decorator_["Component"])({
        name: 'Tooltip',
    })
], tooltip_Tooltip);
/* harmony default export */ var tooltip = (tooltip_Tooltip);

// CONCATENATED MODULE: ./src/js/components/atoms/tooltip/index.ts

/* harmony default export */ var atoms_tooltip = (tooltip);

// CONCATENATED MODULE: ./src/js/constants/youtube.ts
/* harmony default export */ var youtube = ({
    videoUrl: 'https://www.youtube.com/watch?v=',
    embedUrl: 'https://www.youtube-nocookie.com/embed/',
});

// EXTERNAL MODULE: ./src/js/components/atoms/youtube-link/youtube-link.vue.html
var youtube_link_vue = __webpack_require__(16);
var youtube_link_vue_default = /*#__PURE__*/__webpack_require__.n(youtube_link_vue);

// CONCATENATED MODULE: ./src/js/components/atoms/youtube-link/youtube-link.ts
var youtube_link_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var youtube_link_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let youtube_link_YoutubeLink = class YoutubeLink extends atoms_BaseLink {
    constructor() {
        super(...arguments);
        this.videoVisible = false;
    }
    get youtubeUrl() {
        return `${youtube.videoUrl}${this.youtubeId}`;
    }
    toggleVideoVisible() {
        this.videoVisible = !this.videoVisible;
    }
    triggerClick() {
        this.toggleVideoVisible();
    }
};
youtube_link_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, default: 'play-video' }),
    youtube_link_metadata("design:type", Object)
], youtube_link_YoutubeLink.prototype, "icon", void 0);
youtube_link_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: true }),
    youtube_link_metadata("design:type", Object)
], youtube_link_YoutubeLink.prototype, "youtubeId", void 0);
youtube_link_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: true }),
    youtube_link_metadata("design:type", Object)
], youtube_link_YoutubeLink.prototype, "label", void 0);
youtube_link_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Object, required: false }),
    youtube_link_metadata("design:type", Object)
], youtube_link_YoutubeLink.prototype, "clickEvent", void 0);
youtube_link_YoutubeLink = youtube_link_decorate([
    youtube_link_vue_default.a,
    Object(external_vue_property_decorator_["Component"])({
        name: 'YoutubeLink',
    })
], youtube_link_YoutubeLink);
/* harmony default export */ var youtube_link = (youtube_link_YoutubeLink);

// CONCATENATED MODULE: ./src/js/components/atoms/youtube-link/index.ts

/* harmony default export */ var atoms_youtube_link = (youtube_link);

// EXTERNAL MODULE: ./src/js/components/atoms/youtube-video/youtube-video.vue.html
var youtube_video_vue = __webpack_require__(17);
var youtube_video_vue_default = /*#__PURE__*/__webpack_require__.n(youtube_video_vue);

// CONCATENATED MODULE: ./src/js/components/atoms/youtube-video/youtube-video.ts
var youtube_video_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var youtube_video_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let youtube_video_YoutubeVideo = class YoutubeVideo extends external_vue_property_decorator_["Vue"] {
    constructor() {
        super(...arguments);
        this.loadVideo = false;
        this.videoQuery = 'autoplay=1';
    }
    get videoUrl() {
        return `${youtube.embedUrl}${this.videoId}?${this.videoQuery}`;
    }
    mounted() {
        this.loadVideo = true;
    }
};
youtube_video_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: true }),
    youtube_video_metadata("design:type", String)
], youtube_video_YoutubeVideo.prototype, "videoId", void 0);
youtube_video_YoutubeVideo = youtube_video_decorate([
    youtube_video_vue_default.a,
    Object(external_vue_property_decorator_["Component"])({
        name: 'youtube-video',
    })
], youtube_video_YoutubeVideo);
/* harmony default export */ var youtube_video = (youtube_video_YoutubeVideo);

// CONCATENATED MODULE: ./src/js/components/atoms/youtube-video/index.ts

/* harmony default export */ var atoms_youtube_video = (youtube_video);

// CONCATENATED MODULE: ./src/js/components/atoms/index.js





















// EXTERNAL MODULE: ./src/js/components/molecules/auto-complete/auto-complete.vue.html
var auto_complete_vue = __webpack_require__(18);
var auto_complete_vue_default = /*#__PURE__*/__webpack_require__.n(auto_complete_vue);

// CONCATENATED MODULE: ./src/js/components/molecules/auto-complete/auto-complete.ts
var auto_complete_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var auto_complete_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let auto_complete_AutoComplete = class AutoComplete extends external_vue_property_decorator_["Vue"] {
    constructor() {
        super(...arguments);
        this.input = '';
        this.selectedItem = null;
        this.selectedIndex = 0;
        this.reversed = false;
        this.forceOpen = false;
        this.viewportUtil = new viewport();
    }
    get items() {
        const items = [];
        if (!this.datasource) {
            return items;
        }
        Object.keys(this.datasource)
            .forEach((key) => {
            items.push({
                title: this.datasource[key],
                value: key,
            });
        });
        return items;
    }
    get classObject() {
        return {
            required: this.required,
            'auto-complete--reversed': this.reversed,
        };
    }
    get listId() {
        return `${this.inputId}__dropdown`;
    }
    get hasInput() {
        return this.input.length > 0;
    }
    get matchTitle() {
        return this.hasInput && this.input.length >= this.minChar;
    }
    get matchValue() {
        return this.hasInput && this.input.length === this.minChar - 1;
    }
    get hasItems() {
        return Array.isArray(this.items) && this.items.length > 0;
    }
    get isValid() {
        return !(this.selectedItem === null || this.input !== this.selectedItem.title);
    }
    get isOpen() {
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
    get suggestedItems() {
        const filterMatch = new RegExp(this.input, 'i');
        let filteredItems = [];
        if (this.storedItems) {
            filteredItems = this.items.filter(item => !this.storedItems.find(i => i.value === item.value));
        }
        const allSuggestedTitles = filteredItems.filter(item => filterMatch.test(item.title));
        const allSuggestedValues = filteredItems.filter(item => filterMatch.test(item.value));
        if (this.matchValue) {
            return allSuggestedValues;
        }
        if (this.matchTitle) {
            return allSuggestedTitles;
        }
        return [];
    }
    init() {
        this.forceOpen = this.defaultOpen;
        this.viewportUtil.addScrollHandler(this.calculateDirection);
        this.viewportUtil.addResizeHandler(this.calculateDirection);
        if (this.value && this.value.title) {
            this.input = this.value.title;
        }
        external_vue_property_decorator_["Vue"].nextTick(this.calculateDirection);
    }
    calculateDirection() {
        if (!this.$refs.autoComplete) {
            return;
        }
        const windowTop = this.viewportUtil.scrollY;
        const windowBottom = windowTop + (this.viewportUtil.screenHeight * (2 / 3));
        // @ts-ignore, exist  by default on html elements
        const inputBounds = this.$refs.autoComplete.getBoundingClientRect();
        const inputTop = this.viewportUtil.scrollY + inputBounds.top;
        const inputBottom = inputTop + inputBounds.height;
        this.reversed = windowBottom < inputBottom;
    }
    highlightString(data) {
        const stringToReplace = new RegExp(this.input, 'i');
        const matches = data.match(stringToReplace);
        if (!matches) {
            return data;
        }
        return data.replace(stringToReplace, `<span class="auto-complete__value">${matches[0]}</span>`);
    }
    resetInput() {
        this.selectedIndex = 0;
        if (this.input === '') {
            this.$emit('close');
        }
        this.input = '';
    }
    resetIndex() {
        this.selectedIndex = 0;
    }
    focus() {
        if (this.hasItems) {
            this.$refs.autoComplete.focus();
        }
    }
    selectItem(item) {
        this.input = item.title || '';
        this.selectedItem = item;
        this.forceOpen = false;
        this.resetIndex();
        this.focus();
        this.$emit('input', item);
    }
    selectItemByInput() {
        const matcher = new RegExp(`^${this.input}$`, 'i');
        let item;
        if (this.input.length >= this.minChar) {
            item = this.items.find(i => matcher.test(i.title));
        }
        else if (this.input.length === this.minChar - 1) {
            item = this.items.find(i => matcher.test(i.value));
        }
        if (item) {
            this.selectItem(item);
        }
    }
    selectCurrent() {
        const listItems = this.$el.querySelectorAll('.auto-complete__list-item');
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
    selectNext() {
        if (!this.hasInput) {
            return;
        }
        this.selectedIndex = this.selectedIndex + 1;
    }
    selectPrevious() {
        if (!this.hasInput) {
            return;
        }
        this.selectedIndex = this.selectedIndex - 1;
    }
    closeList() {
        this.selectedIndex = 0;
        external_vue_property_decorator_["Vue"].nextTick(this.focus);
    }
    onValue(newValue) {
        if (newValue !== null) {
            this.input = newValue.title;
        }
        this.selectedItem = newValue;
    }
    onInput(newValue) {
        if (this.selectedItem !== null && newValue !== this.selectedItem.title) {
            this.selectedItem = null;
        }
        this.resetIndex();
    }
    onSelectedIndex() {
        const listItems = this.$el.querySelectorAll('.auto-complete__list-item');
        if (!listItems) {
            return;
        }
        const lastIndex = listItems.length - 1;
        if (this.selectedIndex > lastIndex) {
            this.selectedIndex = 0;
        }
        else if (this.selectedIndex < 0) {
            this.selectedIndex = lastIndex;
        }
        if (listItems.length > this.selectedIndex) {
            listItems[this.selectedIndex].focus();
        }
    }
    beforeMount() {
        this.init();
    }
};
auto_complete_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, default: () => `autocomplete${Math.floor(Math.random() * 10000)}` }),
    auto_complete_metadata("design:type", String)
], auto_complete_AutoComplete.prototype, "inputId", void 0);
auto_complete_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Object, default: null }),
    auto_complete_metadata("design:type", Object)
], auto_complete_AutoComplete.prototype, "value", void 0);
auto_complete_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Boolean, default: null }),
    auto_complete_metadata("design:type", Boolean)
], auto_complete_AutoComplete.prototype, "defaultOpen", void 0);
auto_complete_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Number, default: 3 }),
    auto_complete_metadata("design:type", Number)
], auto_complete_AutoComplete.prototype, "minChar", void 0);
auto_complete_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Array, default: () => [] }),
    auto_complete_metadata("design:type", Array)
], auto_complete_AutoComplete.prototype, "storedItems", void 0);
auto_complete_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, default: '' }),
    auto_complete_metadata("design:type", String)
], auto_complete_AutoComplete.prototype, "storedLabel", void 0);
auto_complete_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Boolean, default: false }),
    auto_complete_metadata("design:type", Boolean)
], auto_complete_AutoComplete.prototype, "required", void 0);
auto_complete_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, default: null }),
    auto_complete_metadata("design:type", Object)
], auto_complete_AutoComplete.prototype, "label", void 0);
auto_complete_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, default: null }),
    auto_complete_metadata("design:type", Object)
], auto_complete_AutoComplete.prototype, "placeholder", void 0);
auto_complete_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, default: null }),
    auto_complete_metadata("design:type", Object)
], auto_complete_AutoComplete.prototype, "highlightedLabel", void 0);
auto_complete_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, default: '' }),
    auto_complete_metadata("design:type", Object)
], auto_complete_AutoComplete.prototype, "suggestionsLabel", void 0);
auto_complete_decorate([
    Object(external_vue_property_decorator_["Prop"])({ required: true }),
    auto_complete_metadata("design:type", Object)
], auto_complete_AutoComplete.prototype, "datasource", void 0);
auto_complete_decorate([
    Object(external_vue_property_decorator_["Watch"])('isOpen'),
    auto_complete_metadata("design:type", Function),
    auto_complete_metadata("design:paramtypes", []),
    auto_complete_metadata("design:returntype", void 0)
], auto_complete_AutoComplete.prototype, "calculateDirection", null);
auto_complete_decorate([
    Object(external_vue_property_decorator_["Watch"])('value'),
    auto_complete_metadata("design:type", Function),
    auto_complete_metadata("design:paramtypes", [Object]),
    auto_complete_metadata("design:returntype", void 0)
], auto_complete_AutoComplete.prototype, "onValue", null);
auto_complete_decorate([
    Object(external_vue_property_decorator_["Watch"])('input'),
    auto_complete_metadata("design:type", Function),
    auto_complete_metadata("design:paramtypes", [Object]),
    auto_complete_metadata("design:returntype", void 0)
], auto_complete_AutoComplete.prototype, "onInput", null);
auto_complete_decorate([
    Object(external_vue_property_decorator_["Watch"])('selectedIndex'),
    auto_complete_metadata("design:type", Function),
    auto_complete_metadata("design:paramtypes", []),
    auto_complete_metadata("design:returntype", void 0)
], auto_complete_AutoComplete.prototype, "onSelectedIndex", null);
auto_complete_AutoComplete = auto_complete_decorate([
    auto_complete_vue_default.a,
    Object(external_vue_property_decorator_["Component"])({
        name: 'auto-complete',
    })
], auto_complete_AutoComplete);
/* harmony default export */ var auto_complete = (auto_complete_AutoComplete);

// CONCATENATED MODULE: ./src/js/components/molecules/auto-complete/index.ts

/* harmony default export */ var molecules_auto_complete = (auto_complete);

// EXTERNAL MODULE: ./src/js/components/molecules/block-icon/block-icon.vue.html
var block_icon_vue = __webpack_require__(19);
var block_icon_vue_default = /*#__PURE__*/__webpack_require__.n(block_icon_vue);

// CONCATENATED MODULE: ./src/js/components/molecules/block-icon/block-icon.ts
var block_icon_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var block_icon_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let block_icon_BlockIcon = class BlockIcon extends external_vue_property_decorator_["Vue"] {
    // eslint-disable-next-line class-methods-use-this
    getClassNames(type) {
        return {
            ContentButton: 'button',
            ContentLink: 'link link--medium',
            YoutubeLink: '',
        }[type] || '';
    }
};
block_icon_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: true }),
    block_icon_metadata("design:type", Object)
], block_icon_BlockIcon.prototype, "title", void 0);
block_icon_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: false }),
    block_icon_metadata("design:type", Object)
], block_icon_BlockIcon.prototype, "description", void 0);
block_icon_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: false }),
    block_icon_metadata("design:type", Object)
], block_icon_BlockIcon.prototype, "icon", void 0);
block_icon_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Object, required: false }),
    block_icon_metadata("design:type", Object)
], block_icon_BlockIcon.prototype, "cta", void 0);
block_icon_BlockIcon = block_icon_decorate([
    block_icon_vue_default.a,
    Object(external_vue_property_decorator_["Component"])({
        name: 'BlockIcon',
    })
], block_icon_BlockIcon);
/* harmony default export */ var block_icon = (block_icon_BlockIcon);

// CONCATENATED MODULE: ./src/js/components/molecules/block-icon/index.ts

/* harmony default export */ var molecules_block_icon = (block_icon);

// EXTERNAL MODULE: ./src/js/components/molecules/brand/brand.vue.html
var brand_vue = __webpack_require__(20);
var brand_vue_default = /*#__PURE__*/__webpack_require__.n(brand_vue);

// CONCATENATED MODULE: ./src/js/components/molecules/brand/brand.ts
var brand_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var brand_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let brand_Brand = class Brand extends external_vue_property_decorator_["Vue"] {
};
brand_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Object }),
    brand_metadata("design:type", Object)
], brand_Brand.prototype, "image", void 0);
brand_Brand = brand_decorate([
    brand_vue_default.a,
    Object(external_vue_property_decorator_["Component"])({
        name: 'Brand',
    })
], brand_Brand);


// CONCATENATED MODULE: ./src/js/components/molecules/cards/brand-card/brand-card.js
/* harmony default export */ var brand_card = ({
    name: 'brand-card',
    template: __webpack_require__(76),
    props: {
        body: {
            type: String,
            default: '',
        },
        type: {
            type: String,
            default: 'quote',
        },
        image: {
            type: Object,
            default: () => ({}),
        },
    },
});

// CONCATENATED MODULE: ./src/js/components/molecules/cards/brand-card/index.js

/* harmony default export */ var cards_brand_card = (brand_card);

// EXTERNAL MODULE: ./src/js/components/molecules/cards/business-card/business-card.vue.html
var business_card_vue = __webpack_require__(21);
var business_card_vue_default = /*#__PURE__*/__webpack_require__.n(business_card_vue);

// CONCATENATED MODULE: ./src/js/components/molecules/cards/business-card/business-card.ts
var business_card_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var business_card_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let business_card_BusinessCard = class BusinessCard extends external_vue_property_decorator_["Vue"] {
    mapImage(image) {
        const img = {
            mobileWidth: image.mobileUrl,
            desktopWidth: image.desktopUrl,
        };
        return img;
    }
    get clickEventType() {
        return events.click;
    }
    get clickEventData() {
        if (this.clickEvent) {
            return {
                dataType: this.clickEvent.name,
                data: this.clickEvent.data,
            };
        }
        return null;
    }
};
business_card_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: true }),
    business_card_metadata("design:type", Object)
], business_card_BusinessCard.prototype, "title", void 0);
business_card_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Object, required: false }),
    business_card_metadata("design:type", Object)
], business_card_BusinessCard.prototype, "image", void 0);
business_card_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Object, required: true }),
    business_card_metadata("design:type", Object)
], business_card_BusinessCard.prototype, "contentLink", void 0);
business_card_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Array, required: false }),
    business_card_metadata("design:type", Object)
], business_card_BusinessCard.prototype, "properties", void 0);
business_card_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Object, required: false }),
    business_card_metadata("design:type", Object)
], business_card_BusinessCard.prototype, "clickEvent", void 0);
business_card_BusinessCard = business_card_decorate([
    business_card_vue_default.a,
    Object(external_vue_property_decorator_["Component"])({
        name: 'BusinessCard',
    })
], business_card_BusinessCard);
/* harmony default export */ var business_card = (business_card_BusinessCard);

// CONCATENATED MODULE: ./src/js/components/molecules/cards/business-card/index.ts

/* harmony default export */ var cards_business_card = (business_card);

// CONCATENATED MODULE: ./src/js/components/molecules/cards/__LEGACY__card/card.ts
var card_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var card_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let card_Card = class Card extends external_vue_property_decorator_["Vue"] {
    get classObject() {
        const classes = {};
        if (this.block !== '') {
            classes[`${this.block}__card`] = true;
        }
        return classes;
    }
};
card_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String }),
    card_metadata("design:type", String)
], card_Card.prototype, "block", void 0);
card_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Object, required: true }),
    card_metadata("design:type", Object)
], card_Card.prototype, "card", void 0);
card_Card = card_decorate([
    Object(external_vue_property_decorator_["Component"])({
        name: 'card',
        template: __webpack_require__(77),
    })
], card_Card);
/* harmony default export */ var card = (card_Card);

// CONCATENATED MODULE: ./src/js/components/molecules/cards/__LEGACY__card/index.ts

/* harmony default export */ var _LEGACY_card = (card);

// EXTERNAL MODULE: ./src/js/components/molecules/cards/card-product/card-product.vue.html
var card_product_vue = __webpack_require__(22);
var card_product_vue_default = /*#__PURE__*/__webpack_require__.n(card_product_vue);

// CONCATENATED MODULE: ./src/js/components/molecules/cards/card-product/card-product.ts
var card_product_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var card_product_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let card_product_CardProduct = class CardProduct extends external_vue_property_decorator_["Vue"] {
    constructor() {
        super(...arguments);
        this.imageError = false;
    }
    get listItems() {
        let properties = [];
        if (this.properties) {
            properties = this.properties.map(property => ({
                item: {
                    item: {
                        item: property,
                    },
                    type: 'SpanLabel',
                },
                type: 'LiInline',
            }));
        }
        return {
            items: properties,
            type: 'LiInline',
        };
    }
};
card_product_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Object }),
    card_product_metadata("design:type", Object)
], card_product_CardProduct.prototype, "image", void 0);
card_product_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Array }),
    card_product_metadata("design:type", Object)
], card_product_CardProduct.prototype, "properties", void 0);
card_product_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: true }),
    card_product_metadata("design:type", Object)
], card_product_CardProduct.prototype, "title", void 0);
card_product_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: true }),
    card_product_metadata("design:type", Object)
], card_product_CardProduct.prototype, "url", void 0);
card_product_CardProduct = card_product_decorate([
    card_product_vue_default.a,
    Object(external_vue_property_decorator_["Component"])({
        name: 'CardProduct',
    })
], card_product_CardProduct);
/* harmony default export */ var card_product = (card_product_CardProduct);

// CONCATENATED MODULE: ./src/js/components/molecules/cards/card-product/index.ts

/* harmony default export */ var cards_card_product = (card_product);

// CONCATENATED MODULE: ./src/js/utils/color.ts
class color_Color {
    static lightness(color) {
        const white = 765;
        const expression = /^#([A-Fa-f0-9]{2})([A-Fa-f0-9]{2})([A-Fa-f0-9]{2})/;
        const matches = color && color.match ? color.match(expression) : false;
        if (!matches || matches.length !== 4) {
            return 0;
        }
        return Math.round((parseInt(matches[1], 16) +
            parseInt(matches[2], 16) +
            parseInt(matches[3], 16)) / white * 100) / 100;
    }
}

// EXTERNAL MODULE: ./src/js/components/molecules/color/color.vue.html
var color_vue = __webpack_require__(23);
var color_vue_default = /*#__PURE__*/__webpack_require__.n(color_vue);

// CONCATENATED MODULE: ./src/js/components/molecules/color/color.ts
var color_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var color_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let color_color_Color = class Color extends external_vue_property_decorator_["Vue"] {
    get styleBackground() {
        const styles = {};
        styles.background = this.color;
        if (this.opacity < 100) {
            styles.opacity = this.opacity / 100;
        }
        return styles;
    }
    get styleIcon() {
        const styles = {};
        styles.color = color_Color.lightness(this.color) >= 0.5 ? '#000' : '#FFF';
        return styles;
    }
    get color() {
        const hexColorNoPrefix = (/^([A-Fa-f0-9]{6})/);
        if (this.rgbHex && this.rgbHex.match && this.rgbHex.match(hexColorNoPrefix)) {
            return `#${this.rgbHex}`;
        }
        return this.rgbHex;
    }
};
color_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: true }),
    color_metadata("design:type", Object)
], color_color_Color.prototype, "rgbHex", void 0);
color_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Number, required: true }),
    color_metadata("design:type", Object)
], color_color_Color.prototype, "opacity", void 0);
color_color_Color = color_decorate([
    color_vue_default.a,
    Object(external_vue_property_decorator_["Component"])({
        name: 'color',
    })
], color_color_Color);
/* harmony default export */ var color = (color_color_Color);

// CONCATENATED MODULE: ./src/js/components/molecules/color/index.ts

/* harmony default export */ var molecules_color = (color);

// EXTERNAL MODULE: ./src/js/components/molecules/content-block/content-block.vue.html
var content_block_vue = __webpack_require__(24);
var content_block_vue_default = /*#__PURE__*/__webpack_require__.n(content_block_vue);

// CONCATENATED MODULE: ./src/js/components/molecules/content-block/content-block.ts
var content_block_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var content_block_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let content_block_ContentBlock = class ContentBlock extends external_vue_property_decorator_["Vue"] {
    getClassNames(type) {
        return {
            ContentButton: 'button',
            ContentLink: 'link link--medium',
            YoutubeLink: '',
        }[type] || '';
    }
};
content_block_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: true }),
    content_block_metadata("design:type", Object)
], content_block_ContentBlock.prototype, "title", void 0);
content_block_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: true }),
    content_block_metadata("design:type", Object)
], content_block_ContentBlock.prototype, "description", void 0);
content_block_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Object }),
    content_block_metadata("design:type", Object)
], content_block_ContentBlock.prototype, "image", void 0);
content_block_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Object }),
    content_block_metadata("design:type", Object)
], content_block_ContentBlock.prototype, "cta", void 0);
content_block_ContentBlock = content_block_decorate([
    content_block_vue_default.a,
    Object(external_vue_property_decorator_["Component"])({
        name: 'ContentBlock',
    })
], content_block_ContentBlock);
/* harmony default export */ var content_block = (content_block_ContentBlock);

// CONCATENATED MODULE: ./src/js/components/molecules/content-block/index.ts

/* harmony default export */ var molecules_content_block = (content_block);

// CONCATENATED MODULE: ./src/js/components/molecules/content-toggle/content-toggle.js
/* harmony default export */ var content_toggle = ({
    name: 'content-toggle',
    template: __webpack_require__(78),
    props: {
        toggleState: {
            type: Boolean,
            default: false,
        },
        expandedText: {
            type: String,
            default: 'Less',
        },
        collapsedText: {
            type: String,
            default: 'More',
        },
        expandedIcon: {
            type: String,
            default: 'angle-up',
        },
        collapsedIcon: {
            type: String,
            default: 'angle-down',
        },
    },
    computed: {
        toggleText() {
            return this.toggleState ? this.expandedText : this.collapsedText;
        },
        toggleIcon() {
            return this.toggleState ? this.expandedIcon : this.collapsedIcon;
        },
    },
    methods: {
        toggle() {
            this.$emit('toggle');
        },
    },
});

// CONCATENATED MODULE: ./src/js/components/molecules/content-toggle/index.js

/* harmony default export */ var molecules_content_toggle = (content_toggle);

// EXTERNAL MODULE: ./src/js/components/molecules/cta-block/cta-block.vue.html
var cta_block_vue = __webpack_require__(25);
var cta_block_vue_default = /*#__PURE__*/__webpack_require__.n(cta_block_vue);

// CONCATENATED MODULE: ./src/js/components/molecules/cta-block/cta-block.ts
var cta_block_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var cta_block_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let cta_block_CtaBlock = class CtaBlock extends external_vue_property_decorator_["Vue"] {
    constructor() {
        super(...arguments);
        this.modifiers = {
            ContentButton: this.modContentButton || 'primary',
            ContentLink: this.modContentLink || 'large',
        };
        this.classes = {
            ContentButton: this.styleContentButton || 'button',
            ContentLink: this.styleContentLink || 'link',
        };
    }
    modifier(type) {
        return this.modifiers[type];
    }
    classObject(type) {
        return `${this.classes[type]} cta-link`;
    }
    get classMod() {
        const classes = {};
        if (this.mod !== '' && typeof this.mod === 'string') {
            this.mod.split(' ').forEach((mod) => {
                classes[`cta-block--${mod}`] = true;
            });
        }
        return classes;
    }
};
cta_block_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Array, required: true }),
    cta_block_metadata("design:type", Object)
], cta_block_CtaBlock.prototype, "ctas", void 0);
cta_block_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String }),
    cta_block_metadata("design:type", Object)
], cta_block_CtaBlock.prototype, "mod", void 0);
cta_block_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String }),
    cta_block_metadata("design:type", Object)
], cta_block_CtaBlock.prototype, "styleContentButton", void 0);
cta_block_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String }),
    cta_block_metadata("design:type", Object)
], cta_block_CtaBlock.prototype, "styleContentLink", void 0);
cta_block_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String }),
    cta_block_metadata("design:type", Object)
], cta_block_CtaBlock.prototype, "modContentLink", void 0);
cta_block_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String }),
    cta_block_metadata("design:type", Object)
], cta_block_CtaBlock.prototype, "modContentButton", void 0);
cta_block_CtaBlock = cta_block_decorate([
    cta_block_vue_default.a,
    Object(external_vue_property_decorator_["Component"])({
        name: 'cta-block',
    })
], cta_block_CtaBlock);
/* harmony default export */ var cta_block = (cta_block_CtaBlock);

// CONCATENATED MODULE: ./src/js/components/molecules/cta-block/index.ts

/* harmony default export */ var molecules_cta_block = (cta_block);

// CONCATENATED MODULE: ./src/js/utils/arithmetic.js
/**
 * Arithmetic (from the Greek ἀριθμός arithmos, "number") is a branch of mathematics that consists
 * of the study of numbers, especially the properties of the traditional operations between them—addition,
 * subtraction, multiplication and division.
 */
class Arithmetic {
    /**
     * Rounds a number to the given amount of decimals
     * @param {!number} number - Number to round
     * @param {!number} decimals - Amount of decimals
     * @returns {number} - Result
     */
    static round(number, decimals) {
        const multiplier = Math.pow(10, decimals);
        return decimals > 0 ?
            Math.round(number * multiplier) / multiplier :
            Math.round(number);
    }
    /**
     * Converts a number to a string with specified number of decimals
     * @remark .toFixed uses floor instead of round
     * @param {!number} number - Number to convert
     * @param {!number} decimals - Amount of decimals
     * @returns {string} - Result
     */
    static fixedNumber(number, decimals) {
        const rounded = Arithmetic.round(number, decimals);
        return parseFloat(rounded).toFixed(decimals);
    }
    /**
     * Finds the greatest common divisor for two numbers
     * @param {!number} a - First number
     * @param {!number} b - Second number
     * @returns {number} - Common divisor
     */
    static greatestCommonDivisor(a, b) {
        return b === 0 ? a : Arithmetic.greatestCommonDivisor(b, a % b);
    }
}
/* harmony default export */ var arithmetic = (Arithmetic);

// CONCATENATED MODULE: ./src/js/components/molecules/currency/currency.js

/* harmony default export */ var currency = ({
    name: 'currency',
    template: __webpack_require__(79),
    props: {
        amount: {
            type: Number,
            required: true,
        },
        currencyType: {
            type: String,
        },
        decimals: {
            type: Number,
            default: 2,
        },
    },
    computed: {
        formattedAmount() {
            return arithmetic.fixedNumber(this.amount, this.decimals);
        },
    },
});

// CONCATENATED MODULE: ./src/js/components/molecules/currency/index.js

/* harmony default export */ var molecules_currency = (currency);

// EXTERNAL MODULE: external "gsap/Draggable"
var Draggable_ = __webpack_require__(26);
var Draggable_default = /*#__PURE__*/__webpack_require__.n(Draggable_);

// EXTERNAL MODULE: ./src/js/components/molecules/faux-vertical-scroll/faux-vertical-scroll.vue.html
var faux_vertical_scroll_vue = __webpack_require__(27);
var faux_vertical_scroll_vue_default = /*#__PURE__*/__webpack_require__.n(faux_vertical_scroll_vue);

// CONCATENATED MODULE: ./src/js/components/molecules/faux-vertical-scroll/faux-vertical-scroll.ts
var faux_vertical_scroll_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* eslint-disable */








let faux_vertical_scroll_FauxVerticalScroll = class FauxVerticalScroll extends external_vue_property_decorator_["Vue"] {
    constructor() {
        super(...arguments);
        this.viewportUtil = new viewport();
        this.transitionDuration = defaults.defaultDuration;
        this.draggableElement = undefined;
        this.scale = 0;
        this.canDrag = false;
        this.isMounted = false;
    }
    barStyle() {
        return {
            display: this.canDrag ? 'block' : 'hidden',
            opacity: this.canDrag ? 1 : 0,
            width: `${this.scale}px`,
        };
    }
    calculateOffset() {
        if (this.isMounted &&
            this.$refs.content &&
            this.$refs.container) {
            return this.$refs.content.scrollWidth - this.$refs.container.clientWidth;
        }
        return 0;
    }
    tweenBar() {
        const contentWidth = this.$refs.content.scrollWidth;
        const clientWidth = this.$refs.container.clientWidth;
        const correction = ((clientWidth / 100) * 0.51);
        const offSet = (clientWidth - this.$refs.content._gsTransform.x * correction) + this.scale;
        const percentage = (100 - ((contentWidth - (offSet - clientWidth)) / contentWidth * 100));
        const width = percentage * (clientWidth / 100);
        external_gsap_["TweenLite"].to(this.$refs.bar, this.transitionDuration / 2, {
            left: offSet === clientWidth ? 0 : percentage > 100 ? (clientWidth - this.scale) : (width - this.scale),
            ease: external_gsap_["Power3"].easeOut,
        });
    }
    createDraggable() {
        const { content } = this.$refs;
        const clientWidth = this.$refs.container.clientWidth;
        this.draggableElement = Draggable_default.a.create(content, {
            type: 'x',
            lockAxis: 'x',
            edgeResistance: 0.65,
            overshootTolerance: ((clientWidth / 100) * 5),
            throwProps: {
                x: {
                    velocity: 'auto',
                    max: 0,
                    min: -this.calculateOffset(),
                },
            },
            onDrag: () => {
                this.tweenBar();
            },
            onThrowUpdate: () => {
                this.tweenBar();
            },
        });
    }
    calculateBarScale() {
        const contentWidth = this.$refs.content.scrollWidth;
        const clientWidth = this.$refs.container.clientWidth;
        this.scale = (contentWidth / clientWidth) * 100;
        this.barStyle();
    }
    mounted() {
        this.canDrag = this.calculateOffset() > 0;
        this.isMounted = true;
        this.calculateBarScale();
        if (!this.draggableElement && this.canDrag) {
            this.createDraggable();
        }
    }
    handleResize() {
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
    beforeMount() {
        this.viewportUtil.addResizeHandler(this.handleResize);
        if (browser_capabilities.isBrowser) {
            this.handleResize();
        }
        this.viewportUtil.triggerResize();
        setTimeout(() => {
            this.handleResize();
        }, 100);
    }
    beforeDestroy() {
        this.draggableElement[0].kill();
        this.viewportUtil.removeResizeHandler(this.handleResize);
    }
};
faux_vertical_scroll_FauxVerticalScroll = faux_vertical_scroll_decorate([
    faux_vertical_scroll_vue_default.a,
    Object(external_vue_property_decorator_["Component"])({
        name: 'faux-vertical-scroll',
    })
], faux_vertical_scroll_FauxVerticalScroll);
/* harmony default export */ var faux_vertical_scroll = (faux_vertical_scroll_FauxVerticalScroll);

// CONCATENATED MODULE: ./src/js/components/molecules/faux-vertical-scroll/index.ts

/* harmony default export */ var molecules_faux_vertical_scroll = (faux_vertical_scroll);

// CONCATENATED MODULE: ./src/js/components/molecules/flyout/flyout.ts
var flyout_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var flyout_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var flyout_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


let flyout_Flyout = class Flyout extends external_vue_property_decorator_["Vue"] {
    constructor() {
        super(...arguments);
        this.sectionIndex = 0;
        this.viewportUtil = new viewport();
    }
    get flyoutSections() {
        return Array.isArray(this.$refs.items) ? this.$refs.items : [this.$refs.items];
    }
    open() {
        this.$emit('open');
    }
    close() {
        this.reset();
        this.$emit('close');
    }
    backToParent() {
        this.$emit('main');
        this.close();
    }
    reset() {
        this.sectionIndex = 0;
        // @ts-ignore
        this.flyoutSections.forEach(s => s && s.reset && s.reset());
    }
    selectFirstLink() {
        return flyout_awaiter(this, void 0, void 0, function* () {
            this.reset();
            yield this.$nextTick();
            // @ts-ignore
            this.flyoutSections[this.sectionIndex].selectFirstLink();
        });
    }
    selectNextLink(e) {
        if (this.disableKeyboardEvents) {
            return;
        }
        e.preventDefault();
        // @ts-ignore
        const hasNext = this.flyoutSections[this.sectionIndex].selectNextLink();
        if (!hasNext) {
            // @ts-ignore
            this.selectNextSection();
        }
    }
    selectPrevLink(e) {
        if (this.disableKeyboardEvents) {
            return;
        }
        if (typeof e !== 'undefined') {
            e.preventDefault();
        }
        // @ts-ignore
        const hasPrev = this.flyoutSections[this.sectionIndex].selectPrevLink();
        if (!hasPrev) {
            // @ts-ignore
            this.selectPrevSection();
        }
    }
    selectNextSection(e, keepIndex) {
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
        const currentSection = this.sectionIndex;
        // @ts-ignore
        const currentLinkIndex = this.flyoutSections[this.sectionIndex].focusIndex;
        this.sectionIndex = this.sectionIndex + 1;
        if (keepIndex) {
            // @ts-ignore
            this.flyoutSections[this.sectionIndex].setFocusIndex(currentLinkIndex);
        }
        else {
            // @ts-ignore
            this.flyoutSections[this.sectionIndex].selectFirstLink();
        }
        // @ts-ignore
        this.flyoutSections[currentSection].reset();
    }
    selectPrevSection(e, keepIndex) {
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
        const currentSection = this.sectionIndex;
        // @ts-ignore
        const currentLinkIndex = this.flyoutSections[this.sectionIndex].focusIndex;
        this.sectionIndex = this.sectionIndex - 1;
        if (keepIndex) {
            // @ts-ignore
            this.flyoutSections[this.sectionIndex].setFocusIndex(currentLinkIndex);
        }
        else {
            // @ts-ignore
            this.flyoutSections[this.sectionIndex].selectLastLink();
        }
        // @ts-ignore
        this.flyoutSections[currentSection].reset();
    }
};
flyout_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Array, required: true }),
    flyout_metadata("design:type", Array)
], flyout_Flyout.prototype, "items", void 0);
flyout_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Boolean, required: false }),
    flyout_metadata("design:type", Boolean)
], flyout_Flyout.prototype, "isCompact", void 0);
flyout_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Boolean, required: false, default: false }),
    flyout_metadata("design:type", Boolean)
], flyout_Flyout.prototype, "disableKeyboardEvents", void 0);
flyout_Flyout = flyout_decorate([
    Object(external_vue_property_decorator_["Component"])({
        name: 'flyout',
        template: __webpack_require__(80),
    })
], flyout_Flyout);
/* harmony default export */ var flyout = (flyout_Flyout);

// CONCATENATED MODULE: ./src/js/components/molecules/flyout/index.js

/* harmony default export */ var molecules_flyout = (flyout);

// EXTERNAL MODULE: ./src/js/components/molecules/flyout-section/flyout-section.vue.html
var flyout_section_vue = __webpack_require__(28);
var flyout_section_vue_default = /*#__PURE__*/__webpack_require__.n(flyout_section_vue);

// CONCATENATED MODULE: ./src/js/components/molecules/flyout-section/flyout-section.ts
var flyout_section_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var flyout_section_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let flyout_section_Flyout = class Flyout extends external_vue_property_decorator_["Vue"] {
    constructor() {
        super(...arguments);
        this.isExpanded = false;
        this.focusIndex = null;
        this.columnClassDouble = 'flyout__section--2-columns';
        this.columnClassTriple = 'flyout__section--3-columns';
    }
    get hasItems() {
        return this.items;
    }
    get focusableItems() {
        const links = Array.isArray(this.$refs.firstFocusableLinks) ? this.$refs.firstFocusableLinks : [this.$refs.firstFocusableLinks];
        const otherFocusable = this.$refs.focusable;
        if (otherFocusable) {
            if (Array.isArray(otherFocusable)) {
                links.push(...otherFocusable);
            }
            else {
                links.push(otherFocusable);
            }
        }
        if (this.$refs.bottomLink) {
            links.push(this.$refs.bottomLink);
        }
        return links;
    }
    get moreThanMaxItems() {
        if (!this.items || !this.maxItemsCol)
            return false;
        return this.items.length > this.maxItemsCol;
    }
    get lessThanDoubleMaxItems() {
        if (!this.items || !this.maxItemsCol)
            return false;
        return this.items.length <= this.maxItemsCol * 2;
    }
    get moreThanDoubleMaxItems() {
        if (!this.items || !this.maxItemsCol)
            return false;
        return this.items.length > this.maxItemsCol * 2;
    }
    get sectionClass() {
        if (this.hasItems && this.moreThanMaxItems && this.lessThanDoubleMaxItems) {
            return this.columnClassDouble;
        }
        if (this.hasItems && this.moreThanDoubleMaxItems) {
            return this.columnClassTriple;
        }
        return '';
    }
    get flyoutToggleIsVisible() {
        if (!this.items || !this.maxVisible)
            return false;
        return this.isCompact && this.items.length > this.maxVisible;
    }
    toggleExpanded() {
        this.isExpanded = !this.isExpanded;
    }
    selectFirstLink() {
        this.focusIndex = 0;
    }
    selectLastLink() {
        this.focusIndex = this.focusIndex === null ? this.focusableItems.length - 1 : this.focusIndex - 1;
    }
    selectNextLink() {
        if (this.focusIndex === null)
            return false;
        if (this.focusIndex >= this.focusableItems.length - 1) {
            return false;
        }
        this.focusIndex = this.focusIndex + 1;
        return true;
    }
    selectPrevLink() {
        if (this.focusIndex === null)
            return false;
        if (this.focusIndex <= 0) {
            return false;
        }
        this.focusIndex = this.focusIndex - 1;
        return true;
    }
    setFocusIndex(index) {
        if (index <= 0) {
            this.focusIndex = 0;
        }
        else if (index >= this.focusableItems.length) {
            this.focusIndex = this.focusableItems.length - 1;
        }
        else {
            this.focusIndex = index;
        }
    }
    reset() {
        this.focusIndex = null;
    }
    onFocusIndex(newVal) {
        const focusComponent = this.focusableItems[newVal];
        if (typeof focusComponent === 'undefined') {
            return;
        }
        // @ts-ignore
        const focusElement = focusComponent.$el || focusComponent;
        if (focusElement.focus) {
            focusElement.focus();
        }
    }
};
flyout_section_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: true }),
    flyout_section_metadata("design:type", String)
], flyout_section_Flyout.prototype, "label", void 0);
flyout_section_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Array, required: false }),
    flyout_section_metadata("design:type", Array)
], flyout_section_Flyout.prototype, "items", void 0);
flyout_section_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Object, required: false }),
    flyout_section_metadata("design:type", Object)
], flyout_section_Flyout.prototype, "bottomItem", void 0);
flyout_section_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Boolean, required: false }),
    flyout_section_metadata("design:type", Boolean)
], flyout_section_Flyout.prototype, "isCompact", void 0);
flyout_section_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Number, required: false, default: 3 }),
    flyout_section_metadata("design:type", Number)
], flyout_section_Flyout.prototype, "maxVisible", void 0);
flyout_section_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Number, required: false, default: 6 }),
    flyout_section_metadata("design:type", Number)
], flyout_section_Flyout.prototype, "maxItemsCol", void 0);
flyout_section_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: false, default: () => `flyout_title_${Math.floor((Math.random() * 10000))}` }),
    flyout_section_metadata("design:type", String)
], flyout_section_Flyout.prototype, "itemId", void 0);
flyout_section_decorate([
    Object(external_vue_property_decorator_["Watch"])('focusIndex'),
    flyout_section_metadata("design:type", Function),
    flyout_section_metadata("design:paramtypes", [Object]),
    flyout_section_metadata("design:returntype", void 0)
], flyout_section_Flyout.prototype, "onFocusIndex", null);
flyout_section_Flyout = flyout_section_decorate([
    flyout_section_vue_default.a,
    Object(external_vue_property_decorator_["Component"])({
        name: 'flyout-section',
    })
], flyout_section_Flyout);
/* harmony default export */ var flyout_section = (flyout_section_Flyout);

// CONCATENATED MODULE: ./src/js/components/molecules/flyout-section/index.js

/* harmony default export */ var molecules_flyout_section = (flyout_section);

// EXTERNAL MODULE: ./src/js/components/molecules/footer-block/footer-block.vue.html
var footer_block_vue = __webpack_require__(29);
var footer_block_vue_default = /*#__PURE__*/__webpack_require__.n(footer_block_vue);

// CONCATENATED MODULE: ./src/js/components/molecules/footer-block/footer-block.ts
var footer_block_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var footer_block_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let footer_block_FooterBlock = class FooterBlock extends external_vue_property_decorator_["Vue"] {
};
footer_block_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Object, required: false }),
    footer_block_metadata("design:type", Object)
], footer_block_FooterBlock.prototype, "ctas", void 0);
footer_block_FooterBlock = footer_block_decorate([
    footer_block_vue_default.a,
    Object(external_vue_property_decorator_["Component"])({
        name: 'FooterBlock',
    })
], footer_block_FooterBlock);
/* harmony default export */ var footer_block = (footer_block_FooterBlock);

// CONCATENATED MODULE: ./src/js/components/molecules/footer-block/index.ts

/* harmony default export */ var molecules_footer_block = (footer_block);

// EXTERNAL MODULE: ./src/js/components/molecules/footer-nav/footer-nav.vue.html
var footer_nav_vue = __webpack_require__(30);
var footer_nav_vue_default = /*#__PURE__*/__webpack_require__.n(footer_nav_vue);

// CONCATENATED MODULE: ./src/js/components/molecules/footer-nav/footer-nav.ts
var footer_nav_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var footer_nav_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let footer_nav_FooterNav = class FooterNav extends external_vue_property_decorator_["Vue"] {
};
footer_nav_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Array, required: true }),
    footer_nav_metadata("design:type", Array)
], footer_nav_FooterNav.prototype, "navigation", void 0);
footer_nav_FooterNav = footer_nav_decorate([
    footer_nav_vue_default.a,
    Object(external_vue_property_decorator_["Component"])({
        name: 'footer-nav',
    })
], footer_nav_FooterNav);
/* harmony default export */ var footer_nav = (footer_nav_FooterNav);

// CONCATENATED MODULE: ./src/js/components/molecules/footer-nav/index.ts

/* harmony default export */ var molecules_footer_nav = (footer_nav);

// CONCATENATED MODULE: ./src/js/components/molecules/header-block/header-block.ts
var header_block_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var header_block_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let header_block_HeaderBlock = class HeaderBlock extends external_vue_property_decorator_["Vue"] {
};
header_block_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: false }),
    header_block_metadata("design:type", String)
], header_block_HeaderBlock.prototype, "title", void 0);
header_block_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: false }),
    header_block_metadata("design:type", String)
], header_block_HeaderBlock.prototype, "subtitle", void 0);
header_block_HeaderBlock = header_block_decorate([
    Object(external_vue_property_decorator_["Component"])({
        name: 'HeaderBlock',
        template: __webpack_require__(81),
    })
], header_block_HeaderBlock);
/* harmony default export */ var header_block = (header_block_HeaderBlock);

// CONCATENATED MODULE: ./src/js/components/molecules/header-block/index.ts

/* harmony default export */ var molecules_header_block = (header_block);

// CONCATENATED MODULE: ./src/js/components/molecules/hero-heading/hero-heading.ts
var hero_heading_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var hero_heading_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let hero_heading_HeroHeading = class HeroHeading extends external_vue_property_decorator_["Vue"] {
};
hero_heading_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: true }),
    hero_heading_metadata("design:type", String)
], hero_heading_HeroHeading.prototype, "title", void 0);
hero_heading_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: false }),
    hero_heading_metadata("design:type", String)
], hero_heading_HeroHeading.prototype, "subtitle", void 0);
hero_heading_HeroHeading = hero_heading_decorate([
    Object(external_vue_property_decorator_["Component"])({
        name: 'HeroHeading',
        template: __webpack_require__(82),
    })
], hero_heading_HeroHeading);
/* harmony default export */ var hero_heading = (hero_heading_HeroHeading);

// CONCATENATED MODULE: ./src/js/components/molecules/hero-heading/index.ts

/* harmony default export */ var molecules_hero_heading = (hero_heading);

// EXTERNAL MODULE: ./src/js/components/molecules/icon-button/icon-button.vue.html
var icon_button_vue = __webpack_require__(31);
var icon_button_vue_default = /*#__PURE__*/__webpack_require__.n(icon_button_vue);

// CONCATENATED MODULE: ./src/js/components/molecules/icon-button/icon-button.ts
var icon_button_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var icon_button_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let icon_button_IconButton = class IconButton extends external_vue_property_decorator_["Vue"] {
    get hasDefaultSlot() {
        return !!this.$slots.default;
    }
    focus() {
        this.$el.focus();
    }
};
icon_button_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String }),
    icon_button_metadata("design:type", String)
], icon_button_IconButton.prototype, "buttonClass", void 0);
icon_button_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, default: '' }),
    icon_button_metadata("design:type", String)
], icon_button_IconButton.prototype, "buttonAriaLabel", void 0);
icon_button_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String }),
    icon_button_metadata("design:type", String)
], icon_button_IconButton.prototype, "iconName", void 0);
icon_button_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Boolean, default: false }),
    icon_button_metadata("design:type", Boolean)
], icon_button_IconButton.prototype, "disabled", void 0);
icon_button_IconButton = icon_button_decorate([
    icon_button_vue_default.a,
    Object(external_vue_property_decorator_["Component"])({
        name: 'icon-button',
    })
], icon_button_IconButton);
/* harmony default export */ var icon_button = (icon_button_IconButton);

// CONCATENATED MODULE: ./src/js/components/molecules/icon-button/index.ts

/* harmony default export */ var molecules_icon_button = (icon_button);

// EXTERNAL MODULE: ./src/js/components/molecules/legal-nav/legal-nav.vue.html
var legal_nav_vue = __webpack_require__(32);
var legal_nav_vue_default = /*#__PURE__*/__webpack_require__.n(legal_nav_vue);

// CONCATENATED MODULE: ./src/js/components/molecules/legal-nav/legal-nav.ts
var legal_nav_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var legal_nav_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let legal_nav_LegalNav = class LegalNav extends external_vue_property_decorator_["Vue"] {
};
legal_nav_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Array, required: true }),
    legal_nav_metadata("design:type", Object)
], legal_nav_LegalNav.prototype, "navigation", void 0);
legal_nav_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: true }),
    legal_nav_metadata("design:type", Object)
], legal_nav_LegalNav.prototype, "label", void 0);
legal_nav_LegalNav = legal_nav_decorate([
    legal_nav_vue_default.a,
    Object(external_vue_property_decorator_["Component"])({
        name: 'legal-nav',
    })
], legal_nav_LegalNav);
/* harmony default export */ var legal_nav = (legal_nav_LegalNav);

// CONCATENATED MODULE: ./src/js/components/molecules/legal-nav/index.ts

/* harmony default export */ var molecules_legal_nav = (legal_nav);

// CONCATENATED MODULE: ./src/js/utils/functions.js
const identity = x => x;
const unique = (values, fn = identity) => values.reduce((acc, value) => (acc.filter(v => fn(v) === fn(value)).length ? acc : [...acc, value]), []);
const keyValueMap = arr => arr.reduce((acc, value) => {
    acc[value] = value;
    return acc;
}, {});

// EXTERNAL MODULE: ./src/js/components/molecules/list-section/list-section.vue.html
var list_section_vue = __webpack_require__(33);
var list_section_vue_default = /*#__PURE__*/__webpack_require__.n(list_section_vue);

// CONCATENATED MODULE: ./src/js/components/molecules/list-section/list-section.ts
var list_section_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var list_section_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








let list_section_ListSection = class ListSection extends external_vue_property_decorator_["Vue"] {
    constructor() {
        super(...arguments);
        this.cardTransitionDuration = defaults.defaultDuration;
        this.cardOffset = defaults.buildingUnit * 5;
        this.showHiddenItems = false;
        this.visibleTooltip = false;
        this.showMax = Number.MAX_SAFE_INTEGER;
        this.lastTopValue = 0;
        this.delayIncrement = 0.1;
        this.rowIndex = 0;
        this.increment = 1;
        this.viewportUtil = new viewport();
    }
    defineCardTypesClass() {
        if (this.cards && this.cards.length) {
            // @ts-ignore
            const values = unique(this.cards.map((card) => card.type.toLowerCase()));
            return values.map(val => (val.match('card') ? 'list-section--cards' : 'list-section--blocks'));
        }
        return '';
    }
    get clickEventType() {
        return events.click;
    }
    get clickEventData() {
        if (this.expand && this.expand.clickEvent) {
            const { clickEvent } = this.expand;
            return {
                dataType: clickEvent.name,
                data: Object.assign({}, clickEvent.data, { pageSlug: this.$route.fullPath }),
            };
        }
        return null;
    }
    tooltipVisible() {
        return this.visibleTooltip;
    }
    hideTooltip() {
        this.visibleTooltip = false;
    }
    toggleTooltip() {
        this.visibleTooltip = !this.visibleTooltip;
    }
    showCount() {
        if (!this.showHiddenItems) {
            return `${this.expand && this.expand.label ? this.expand.label : ''} (${this.cards.length})`;
        }
        return (this.expand && this.expand.label) || '';
    }
    triggerEventClick() {
        if (this.expand && this.expand.clickEvent) {
            try {
                this.$emitPublic(this.clickEventType, this.clickEventData);
                // eslint-disable-next-line no-empty
            }
            catch (e) { }
        }
    }
    showHidden() {
        this.triggerEventClick();
        this.showHiddenItems = true;
    }
    isNewRow(topValue) {
        return this.lastTopValue !== topValue;
    }
    addRow(topValue) {
        this.rowIndex = this.rowIndex + this.increment;
        this.lastTopValue = topValue;
    }
    beforeEnter(el) {
        external_gsap_["TweenLite"].set(el, { opacity: 0, y: this.cardOffset });
    }
    enter(el, done) {
        const elTopValue = el.getBoundingClientRect().top;
        if (this.isNewRow(elTopValue)) {
            this.addRow(elTopValue);
        }
        external_gsap_["TweenLite"].fromTo(el, this.cardTransitionDuration, {
            opacity: 0,
            y: this.cardOffset,
        }, {
            opacity: 1,
            y: 0,
            ease: external_gsap_["Power3"].easeOut,
            onComplete: done,
            delay: this.rowIndex * this.delayIncrement,
        });
    }
    handleResize() {
        if (!this.showHiddenItems && this.viewportUtil.isMobile) {
            this.showMax = (this.limit && typeof this.limit.smallScreen === 'number' ? this.limit.smallScreen : Number.MAX_SAFE_INTEGER);
        }
        else {
            this.showMax = (this.limit && typeof this.limit.largeScreen === 'number' ? this.limit.largeScreen : Number.MAX_SAFE_INTEGER);
        }
    }
    mounted() {
        if (!browser_capabilities.isBrowser) {
            return;
        }
        this.viewportUtil.addResizeHandler(this.handleResize);
        this.handleResize();
        this.viewportUtil.triggerResize();
        setTimeout(() => {
            this.handleResize();
        }, 100);
    }
    beforeDestroy() {
        this.viewportUtil.removeResizeHandler(this.handleResize);
    }
};
list_section_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: false }),
    list_section_metadata("design:type", Object)
], list_section_ListSection.prototype, "title", void 0);
list_section_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Array, required: true }),
    list_section_metadata("design:type", Object)
], list_section_ListSection.prototype, "cards", void 0);
list_section_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Object, required: false }),
    list_section_metadata("design:type", Object)
], list_section_ListSection.prototype, "tooltip", void 0);
list_section_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Object, required: false }),
    list_section_metadata("design:type", Object)
], list_section_ListSection.prototype, "limit", void 0);
list_section_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Object, required: false }),
    list_section_metadata("design:type", Object)
], list_section_ListSection.prototype, "expand", void 0);
list_section_ListSection = list_section_decorate([
    list_section_vue_default.a,
    Object(external_vue_property_decorator_["Component"])({
        name: 'ListSection',
    })
], list_section_ListSection);
/* harmony default export */ var list_section = (list_section_ListSection);

// CONCATENATED MODULE: ./src/js/components/molecules/list-section/index.ts

/* harmony default export */ var molecules_list_section = (list_section);

// EXTERNAL MODULE: ./src/js/components/molecules/list-unordered/template.vue.html
var list_unordered_template_vue = __webpack_require__(34);
var list_unordered_template_vue_default = /*#__PURE__*/__webpack_require__.n(list_unordered_template_vue);

// CONCATENATED MODULE: ./src/js/components/molecules/list-unordered/component.ts
var list_unordered_component_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var list_unordered_component_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let component_ListUnordered = class ListUnordered extends external_vue_property_decorator_["Vue"] {
};
list_unordered_component_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Object, required: true }),
    list_unordered_component_metadata("design:type", Object)
], component_ListUnordered.prototype, "listItems", void 0);
component_ListUnordered = list_unordered_component_decorate([
    list_unordered_template_vue_default.a,
    Object(external_vue_property_decorator_["Component"])({
        name: 'ListUnordered',
    })
], component_ListUnordered);
/* harmony default export */ var list_unordered_component = (component_ListUnordered);

// CONCATENATED MODULE: ./src/js/components/molecules/list-unordered/index.ts

/* harmony default export */ var list_unordered = (list_unordered_component);

// CONCATENATED MODULE: ./src/js/mixins/step-row-animation/step-row-animation.ts
var step_row_animation_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let step_row_animation_StepRowAnimation = class StepRowAnimation extends external_vue_property_decorator_["Vue"] {
    constructor() {
        super(...arguments);
        this.lastTopValue = 0;
        this.delayIncrement = 0.1;
        this.rowIndex = 0;
        this.increment = 1;
        this.cardTransitionDuration = defaults.defaultDuration;
        this.cardOffset = defaults.buildingUnit * 5;
    }
    addRow(topValue) {
        this.rowIndex = this.rowIndex + this.increment;
        this.lastTopValue = topValue;
    }
    beforeEnter(el) {
        external_gsap_["TweenLite"].set(el, { opacity: 0, y: this.cardOffset });
    }
    enter(el, done) {
        const elTopValue = el.getBoundingClientRect().top;
        if (this.isNewRow(elTopValue)) {
            this.addRow(elTopValue);
        }
        external_gsap_["TweenLite"].fromTo(el, this.cardTransitionDuration, {
            opacity: 0,
            y: this.cardOffset,
        }, {
            opacity: 1,
            y: 0,
            ease: external_gsap_["Power3"].easeOut,
            onComplete: done,
            delay: this.rowIndex * this.delayIncrement,
        });
    }
    isNewRow(topValue) {
        return this.lastTopValue !== topValue;
    }
};
step_row_animation_StepRowAnimation = step_row_animation_decorate([
    external_vue_property_decorator_["Component"]
], step_row_animation_StepRowAnimation);


// EXTERNAL MODULE: ./src/js/components/molecules/list-unordered-limit/list-unordered-limit.vue.html
var list_unordered_limit_vue = __webpack_require__(35);
var list_unordered_limit_vue_default = /*#__PURE__*/__webpack_require__.n(list_unordered_limit_vue);

// CONCATENATED MODULE: ./src/js/components/molecules/list-unordered-limit/list-unordered-limit.ts
var list_unordered_limit_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var list_unordered_limit_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let list_unordered_limit_ListUnorderedLimit = class ListUnorderedLimit extends Object(external_vue_property_decorator_["Mixins"])(step_row_animation_StepRowAnimation) {
    constructor() {
        super(...arguments);
        this.componentMounted = false;
        this.showAll = false;
        this.viewportUtil = new viewport();
    }
    getClickEventData() {
        if (!this.limit || !this.limit.expand || !this.limit.expand.clickEvent) {
            return null;
        }
        const { clickEvent } = this.limit.expand;
        return {
            dataType: clickEvent.name,
            data: Object.assign({}, clickEvent.data, { pageSlug: this.$route.fullPath }),
        };
    }
    /**
     * -1 means no limit
     *
     * @param {number|undefined} limit
     * @returns {number}
     */
    determineLimit(limit) {
        if (limit === undefined) {
            return -1;
        }
        if (this.listItems.length <= limit) {
            return -1;
        }
        return limit;
    }
    mounted() {
        this.componentMounted = true;
    }
    showButtonLabel() {
        const { label } = this.limit && this.limit.expand ? this.limit.expand : { label: '' };
        return `${label} (${this.listItems.length})`;
    }
    showHidden() {
        this.showAll = true;
        this.$emitPublic(events.click, this.getClickEventData());
    }
    /**
     * -1 means no limit
     *
     * @returns {number}
     */
    showLimit() {
        if (this.limit === undefined || !this.componentMounted) {
            return -1;
        }
        if (this.viewportUtil.isMobile) {
            return this.determineLimit(this.limit.smallScreen);
        }
        return this.determineLimit(this.limit.largeScreen);
    }
};
list_unordered_limit_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Array, required: true }),
    list_unordered_limit_metadata("design:type", Array)
], list_unordered_limit_ListUnorderedLimit.prototype, "listItems", void 0);
list_unordered_limit_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Object }),
    list_unordered_limit_metadata("design:type", Object)
], list_unordered_limit_ListUnorderedLimit.prototype, "limit", void 0);
list_unordered_limit_ListUnorderedLimit = list_unordered_limit_decorate([
    list_unordered_limit_vue_default.a,
    Object(external_vue_property_decorator_["Component"])({
        name: 'ListUnorderedLimit',
    })
], list_unordered_limit_ListUnorderedLimit);


// EXTERNAL MODULE: ./src/js/components/molecules/main-nav/main-nav.vue.html
var main_nav_vue = __webpack_require__(36);
var main_nav_vue_default = /*#__PURE__*/__webpack_require__.n(main_nav_vue);

// CONCATENATED MODULE: ./src/js/components/molecules/main-nav/main-nav.ts
var main_nav_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var main_nav_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let main_nav_MainNav = class MainNav extends external_vue_property_decorator_["Vue"] {
    constructor() {
        super(...arguments);
        this.viewportUtil = new viewport();
        this.showCompactMenu = true;
    }
    get classList() {
        return {
            'main-nav--small': this.showCompactMenu,
            'main-nav--large': !this.showCompactMenu,
            'main-nav--open': this.mainNavOpen && this.showCompactMenu,
        };
    }
    handleResize() {
        this.showCompactMenu = this.viewportUtil.isTablet;
    }
    mounted() {
        this.viewportUtil.addResizeHandler(this.handleResize);
        if (browser_capabilities.isBrowser) {
            this.showCompactMenu = this.viewportUtil.isTablet;
        }
    }
    beforeDestroy() {
        this.viewportUtil.removeResizeHandler(this.handleResize);
    }
};
main_nav_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Array, required: false }),
    main_nav_metadata("design:type", Array)
], main_nav_MainNav.prototype, "items", void 0);
main_nav_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Boolean, required: false }),
    main_nav_metadata("design:type", Boolean)
], main_nav_MainNav.prototype, "mainNavOpen", void 0);
main_nav_MainNav = main_nav_decorate([
    main_nav_vue_default.a,
    Object(external_vue_property_decorator_["Component"])({
        name: 'main-nav',
    })
], main_nav_MainNav);
/* harmony default export */ var main_nav = (main_nav_MainNav);

// CONCATENATED MODULE: ./src/js/components/molecules/main-nav/index.js

/* harmony default export */ var molecules_main_nav = (main_nav);

// EXTERNAL MODULE: ./src/js/components/molecules/main-nav-item/main-nav-item.vue.html
var main_nav_item_vue = __webpack_require__(37);
var main_nav_item_vue_default = /*#__PURE__*/__webpack_require__.n(main_nav_item_vue);

// CONCATENATED MODULE: ./src/js/components/molecules/main-nav-item/main-nav-item.ts
var main_nav_item_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var main_nav_item_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var main_nav_item_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



let main_nav_item_MainNavItem = class MainNavItem extends external_vue_property_decorator_["Vue"] {
    constructor() {
        super(...arguments);
        this.flyoutIsOpen = false;
        this.hideTimeout = null;
        this.angleDirection = 'angle-down';
        this.isTouch = browser_capabilities.supportsTouch;
    }
    get isActive() {
        return this.active ? 'page' : false;
    }
    function(newVal) {
        return main_nav_item_awaiter(this, void 0, void 0, function* () {
            yield this.$nextTick();
            yield new Promise(resolve => setTimeout(resolve, 10));
            this.angleDirection = newVal ? 'angle-up' : 'angle-down';
        });
    }
    get toggleIsVisible() {
        return !!this.items && !this.isCompact && this.isTouch;
    }
    focus() {
        const navLink = this.$refs.parent;
        if (navLink && navLink.$el) {
            navLink.$el.focus();
        }
    }
    showFlyout() {
        return main_nav_item_awaiter(this, void 0, void 0, function* () {
            yield this.$nextTick();
            yield new Promise(resolve => setTimeout(resolve, 10));
            if (this.hideTimeout) {
                clearTimeout(this.hideTimeout);
                this.hideTimeout = null;
            }
            this.flyoutIsOpen = true;
        });
    }
    hideFlyout() {
        this.$emit('closeMainNav');
        this.flyoutIsOpen = false;
    }
    toggleFlyout() {
        this.flyoutIsOpen = !this.flyoutIsOpen;
    }
    delayHideFlyout() {
        return new Promise((resolve) => {
            if (this.hideTimeout === null) {
                this.hideTimeout = setTimeout(() => {
                    this.hideTimeout = null;
                    this.hideFlyout();
                    resolve();
                }, 100);
            }
        });
    }
    selectFlyoutFirstLink() {
        return main_nav_item_awaiter(this, void 0, void 0, function* () {
            yield this.showFlyout();
            yield this.$nextTick();
            const refs = this.$refs;
            if (refs.flyout && refs.flyout.selectFirstLink) {
                yield refs.flyout.selectFirstLink();
            }
        });
    }
    selectNextNavItem() {
        this.hideFlyout();
        this.$emit('tab');
    }
    selectPrevNavItem() {
        this.hideFlyout();
        this.$emit('shifttab');
    }
    selectParent() {
        return main_nav_item_awaiter(this, void 0, void 0, function* () {
            if (this.isCompact) {
                return;
            }
            const { parent } = this.$refs;
            // @ts-ignore
            if (parent.$el) {
                // @ts-ignore
                parent.$el.focus();
                // @ts-ignore
            }
            else if (parent.focus) {
                // @ts-ignore
                parent.focus();
            }
            yield this.$nextTick();
            this.hideFlyout();
        });
    }
};
main_nav_item_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Boolean, required: false }),
    main_nav_item_metadata("design:type", Boolean)
], main_nav_item_MainNavItem.prototype, "mainNavOpen", void 0);
main_nav_item_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: true }),
    main_nav_item_metadata("design:type", String)
], main_nav_item_MainNavItem.prototype, "label", void 0);
main_nav_item_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: false }),
    main_nav_item_metadata("design:type", String)
], main_nav_item_MainNavItem.prototype, "url", void 0);
main_nav_item_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Array, required: false }),
    main_nav_item_metadata("design:type", Array)
], main_nav_item_MainNavItem.prototype, "items", void 0);
main_nav_item_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: true }),
    main_nav_item_metadata("design:type", String)
], main_nav_item_MainNavItem.prototype, "itemId", void 0);
main_nav_item_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Boolean, required: false }),
    main_nav_item_metadata("design:type", Boolean)
], main_nav_item_MainNavItem.prototype, "isCompact", void 0);
main_nav_item_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Boolean, required: true }),
    main_nav_item_metadata("design:type", Boolean)
], main_nav_item_MainNavItem.prototype, "active", void 0);
main_nav_item_decorate([
    Object(external_vue_property_decorator_["Watch"])('flyoutIsOpen'),
    main_nav_item_metadata("design:type", Function),
    main_nav_item_metadata("design:paramtypes", [Object]),
    main_nav_item_metadata("design:returntype", Promise)
], main_nav_item_MainNavItem.prototype, "function", null);
main_nav_item_MainNavItem = main_nav_item_decorate([
    main_nav_item_vue_default.a,
    Object(external_vue_property_decorator_["Component"])({
        name: 'main-nav-item',
    })
], main_nav_item_MainNavItem);
/* harmony default export */ var main_nav_item = (main_nav_item_MainNavItem);

// CONCATENATED MODULE: ./src/js/components/molecules/main-nav-item/index.js

/* harmony default export */ var molecules_main_nav_item = (main_nav_item);

// EXTERNAL MODULE: ./src/js/components/molecules/modal/modal.vue.html
var modal_vue = __webpack_require__(38);
var modal_vue_default = /*#__PURE__*/__webpack_require__.n(modal_vue);

// CONCATENATED MODULE: ./src/js/components/molecules/modal/modal.ts
var modal_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let modal_Modal = class Modal extends external_vue_property_decorator_["Vue"] {
    constructor() {
        super(...arguments);
        this.iframeLoaded = false;
    }
    created() {
        window.addEventListener('keyup', this.closeModal);
    }
    beforeDestroy() {
        window.removeEventListener('keyup', this.closeModal);
    }
    closeModal(e) {
        if (e.type === 'keyup' && e.key !== 'Esc' && e.key !== 'Escape') {
            return;
        }
        this.$emit('close');
    }
    showContent() {
        this.iframeLoaded = true;
        external_gsap_["TweenLite"].to(this.$refs.modal, 0.1, { opacity: 1, ease: external_gsap_["Power2"].easeOut });
        external_gsap_["TweenLite"].to(this.$refs.modal, 0.3, { scale: 1, ease: external_gsap_["Power2"].easeOut });
    }
    enter(el, done) {
        const iframe = this.$refs.modal.querySelector('iframe');
        const timeLine = new external_gsap_["TimelineLite"]();
        external_gsap_["TweenLite"].set(this.$refs.modal, { opacity: 0, scale: 0.6 });
        timeLine.fromTo(this.$refs.overlay, 0.2, { opacity: 0 }, { opacity: 0.8 });
        timeLine.fromTo(this.$refs.close, 0.2, { opacity: 0 }, { opacity: 1 }, 0);
        if (iframe) {
            const loadTimeout = setTimeout(() => {
                this.showContent();
            }, 1500);
            iframe.addEventListener('load', () => {
                if (!this.iframeLoaded) {
                    clearTimeout(loadTimeout);
                    this.showContent();
                }
            });
        }
        else {
            timeLine.to(this.$refs.modal, 0.1, { opacity: 1, ease: external_gsap_["Power2"].easeOut }, 0.2);
            timeLine.to(this.$refs.modal, 0.3, { scale: 1, ease: external_gsap_["Power2"].easeOut }, 0.2);
        }
        timeLine.call(done);
    }
    leave(el, done) {
        const timeLine = new external_gsap_["TimelineLite"]();
        timeLine.to(this.$refs.modal, 0.2, { opacity: 0, scale: 0.6, ease: external_gsap_["Power2"].easeIn });
        timeLine.fromTo([this.$refs.overlay, this.$refs.close], 0.4, { opacity: 1 }, { opacity: 0 }, 0);
        timeLine.call(done);
    }
};
modal_Modal = modal_decorate([
    modal_vue_default.a,
    Object(external_vue_property_decorator_["Component"])({
        name: 'modal',
    })
], modal_Modal);
/* harmony default export */ var modal = (modal_Modal);

// CONCATENATED MODULE: ./src/js/components/molecules/modal/index.ts

/* harmony default export */ var molecules_modal = (modal);

// CONCATENATED MODULE: ./src/js/components/molecules/pager/pager.js


/* harmony default export */ var pager = ({
    name: 'pager',
    template: __webpack_require__(83),
    data: () => ({
        indicatorActive: false,
        viewport: new viewport(),
    }),
    props: {
        pages: {
            type: Number,
            required: true,
        },
        activeIndex: {
            type: Number,
            default: 0,
        },
    },
    methods: {
        resizeHandler() {
            this.moveToCurrentPosition();
        },
        getChangeOffset() {
            const indicatorRect = this.$refs.indicator.getBoundingClientRect();
            const indicatorOffsetRect = this.$refs.indicator.offsetParent.getBoundingClientRect();
            const currentPageRect = this.$refs.page[this.activeIndex].getBoundingClientRect();
            return {
                x: currentPageRect.left - indicatorOffsetRect.left,
                y: currentPageRect.top - indicatorOffsetRect.top,
                changeX: currentPageRect.left - indicatorRect.left,
                changeY: currentPageRect.top - indicatorRect.top,
            };
        },
        moveToCurrentPosition() {
            const { x, y } = this.getChangeOffset();
            external_gsap_["TweenLite"].to(this.$refs.indicator, 0, { x, y });
        },
        changeIndex(index) {
            this.$emit('index-changed', { index });
        },
        getAriaLabel(index) {
            let label = '';
            if (index === this.activeIndex) {
                label += '"current page, ';
            }
            label += `page ${index + 1}`;
            return label;
        },
    },
    watch: {
        activeIndex() {
            const tl = new external_gsap_["TimelineLite"]();
            const offsets = this.getChangeOffset();
            tl
                .to(this.$refs.indicator, 0.2, { x: offsets.x - (offsets.changeX * 0.2), y: offsets.y - (offsets.changeY * 0.2), scaleX: 0.7, scaleY: 1.5 })
                .to(this.$refs.indicator, 0.2, { x: offsets.x, y: offsets.y, scaleX: 1, scaleY: 1 });
            external_gsap_["TweenLite"].to(tl, tl.duration, { ease: external_gsap_["Power3"].easeOut });
        },
    },
    mounted() {
        this.indicatorActive = true;
        this.moveToCurrentPosition();
        this.viewport.addResizeHandler(this.resizeHandler);
    },
    beforeDestroy() {
        this.viewport.removeResizeHandler(this.resizeHandler);
    },
});

// CONCATENATED MODULE: ./src/js/components/molecules/pager/index.js

/* harmony default export */ var molecules_pager = (pager);

// EXTERNAL MODULE: ./src/js/components/molecules/product/product.vue.html
var product_vue = __webpack_require__(39);
var product_vue_default = /*#__PURE__*/__webpack_require__.n(product_vue);

// CONCATENATED MODULE: ./src/js/components/molecules/product/product.ts
var product_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var product_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let product_Product = class Product extends external_vue_property_decorator_["Vue"] {
};
product_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: true }),
    product_metadata("design:type", Object)
], product_Product.prototype, "icon", void 0);
product_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: true }),
    product_metadata("design:type", Object)
], product_Product.prototype, "name", void 0);
product_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Object, required: true }),
    product_metadata("design:type", Object)
], product_Product.prototype, "pricing", void 0);
product_Product = product_decorate([
    product_vue_default.a,
    Object(external_vue_property_decorator_["Component"])({
        name: 'Product',
    })
], product_Product);
/* harmony default export */ var product = (product_Product);

// CONCATENATED MODULE: ./src/js/components/molecules/product/index.ts

/* harmony default export */ var molecules_product = (product);

// EXTERNAL MODULE: ./src/js/components/molecules/search/search-bar.vue.html
var search_bar_vue = __webpack_require__(40);
var search_bar_vue_default = /*#__PURE__*/__webpack_require__.n(search_bar_vue);

// CONCATENATED MODULE: ./src/js/components/molecules/search/search-bar.ts
var search_bar_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var search_bar_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let search_bar_SearchBar = class SearchBar extends external_vue_property_decorator_["Vue"] {
    constructor() {
        super(...arguments);
        this.searchValue = '';
    }
    close() {
        if (this.openState) {
            this.$emit('close');
        }
    }
    doSearch() {
        if (this.searchValue !== '') {
            // temporary solution until search is implemented
            // @ts-ignore
            window.location = `/search?search=${encodeURIComponent(this.searchValue)}`;
            this.close();
        }
    }
    onBlur() {
        if (this.searchValue === '') {
            this.close();
        }
    }
    focusInput() {
        // @ts-ignore
        this.$refs.search__input.focus();
    }
};
search_bar_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: true }),
    search_bar_metadata("design:type", Object)
], search_bar_SearchBar.prototype, "label", void 0);
search_bar_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: true }),
    search_bar_metadata("design:type", Object)
], search_bar_SearchBar.prototype, "placeholder", void 0);
search_bar_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Boolean, required: false, default: false }),
    search_bar_metadata("design:type", Boolean)
], search_bar_SearchBar.prototype, "openState", void 0);
search_bar_SearchBar = search_bar_decorate([
    search_bar_vue_default.a,
    Object(external_vue_property_decorator_["Component"])({
        name: 'search-bar',
    })
], search_bar_SearchBar);
/* harmony default export */ var search_bar = (search_bar_SearchBar);

// CONCATENATED MODULE: ./src/js/components/molecules/search/index.js

/* harmony default export */ var search = (search_bar);

// EXTERNAL MODULE: ./src/js/components/molecules/social-nav/social-nav.vue.html
var social_nav_vue = __webpack_require__(41);
var social_nav_vue_default = /*#__PURE__*/__webpack_require__.n(social_nav_vue);

// CONCATENATED MODULE: ./src/js/components/molecules/social-nav/social-nav.ts
var social_nav_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let social_nav_SocialNav = class SocialNav extends external_vue_property_decorator_["Vue"] {
};
social_nav_SocialNav = social_nav_decorate([
    social_nav_vue_default.a,
    Object(external_vue_property_decorator_["Component"])({
        name: 'social-nav',
    })
], social_nav_SocialNav);
/* harmony default export */ var social_nav = (social_nav_SocialNav);

// CONCATENATED MODULE: ./src/js/components/molecules/social-nav/index.ts

/* harmony default export */ var molecules_social_nav = (social_nav);

// EXTERNAL MODULE: ./src/js/components/molecules/subnavigation-item/subnavigation-item.vue.html
var subnavigation_item_vue = __webpack_require__(42);
var subnavigation_item_vue_default = /*#__PURE__*/__webpack_require__.n(subnavigation_item_vue);

// CONCATENATED MODULE: ./src/js/components/molecules/subnavigation-item/subnavigation-item.ts
var subnavigation_item_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var subnavigation_item_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let subnavigation_item_SubNavigationItem = class SubNavigationItem extends external_vue_property_decorator_["Vue"] {
};
subnavigation_item_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: true }),
    subnavigation_item_metadata("design:type", Object)
], subnavigation_item_SubNavigationItem.prototype, "url", void 0);
subnavigation_item_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Object }),
    subnavigation_item_metadata("design:type", Object)
], subnavigation_item_SubNavigationItem.prototype, "image", void 0);
subnavigation_item_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: true }),
    subnavigation_item_metadata("design:type", Object)
], subnavigation_item_SubNavigationItem.prototype, "label", void 0);
subnavigation_item_SubNavigationItem = subnavigation_item_decorate([
    subnavigation_item_vue_default.a,
    Object(external_vue_property_decorator_["Component"])({
        name: 'SubNavigationItem',
    })
], subnavigation_item_SubNavigationItem);
/* harmony default export */ var subnavigation_item = (subnavigation_item_SubNavigationItem);

// CONCATENATED MODULE: ./src/js/components/molecules/subnavigation-item/index.ts

/* harmony default export */ var molecules_subnavigation_item = (subnavigation_item);

// EXTERNAL MODULE: ./src/js/components/molecules/sys-nav/sys-nav.vue.html
var sys_nav_vue = __webpack_require__(43);
var sys_nav_vue_default = /*#__PURE__*/__webpack_require__.n(sys_nav_vue);

// CONCATENATED MODULE: ./src/js/components/molecules/sys-nav/sys-nav.ts
var sys_nav_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var sys_nav_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let sys_nav_SysNav = class SysNav extends external_vue_property_decorator_["Vue"] {
    openSearch() {
        this.$emit('open-search');
    }
};
sys_nav_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, default: 'store' }),
    sys_nav_metadata("design:type", String)
], sys_nav_SysNav.prototype, "orderNowIcon", void 0);
sys_nav_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: true }),
    sys_nav_metadata("design:type", String)
], sys_nav_SysNav.prototype, "orderNowLink", void 0);
sys_nav_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: true }),
    sys_nav_metadata("design:type", String)
], sys_nav_SysNav.prototype, "orderNowLabel", void 0);
sys_nav_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, default: 'search' }),
    sys_nav_metadata("design:type", String)
], sys_nav_SysNav.prototype, "searchIcon", void 0);
sys_nav_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: true }),
    sys_nav_metadata("design:type", String)
], sys_nav_SysNav.prototype, "searchLabel", void 0);
sys_nav_SysNav = sys_nav_decorate([
    sys_nav_vue_default.a,
    Object(external_vue_property_decorator_["Component"])({
        name: 'sys-nav',
    })
], sys_nav_SysNav);
/* harmony default export */ var sys_nav = (sys_nav_SysNav);

// CONCATENATED MODULE: ./src/js/components/molecules/sys-nav/index.ts

/* harmony default export */ var molecules_sys_nav = (sys_nav);

// CONCATENATED MODULE: ./src/js/components/molecules/tab/tab.ts
var tab_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var tab_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let tab_Tab = class Tab extends external_vue_property_decorator_["Vue"] {
};
tab_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: true }),
    tab_metadata("design:type", Object)
], tab_Tab.prototype, "id", void 0);
tab_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: true }),
    tab_metadata("design:type", Object)
], tab_Tab.prototype, "label", void 0);
tab_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Object, required: true }),
    tab_metadata("design:type", Object)
], tab_Tab.prototype, "content", void 0);
tab_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Boolean, required: true }),
    tab_metadata("design:type", Object)
], tab_Tab.prototype, "active", void 0);
tab_Tab = tab_decorate([
    Object(external_vue_property_decorator_["Component"])({
        name: 'Tab',
        template: __webpack_require__(84),
    })
], tab_Tab);
/* harmony default export */ var tab = (tab_Tab);

// CONCATENATED MODULE: ./src/js/components/molecules/tab/index.ts

/* harmony default export */ var molecules_tab = (tab);

// EXTERNAL MODULE: ./src/js/components/molecules/tabs/tabs.vue.html
var tabs_vue = __webpack_require__(44);
var tabs_vue_default = /*#__PURE__*/__webpack_require__.n(tabs_vue);

// CONCATENATED MODULE: ./src/js/components/molecules/tabs/tabs.ts
var tabs_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var tabs_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var tabs_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






let tabs_Tabs = class Tabs extends external_vue_property_decorator_["Vue"] {
    constructor() {
        super(...arguments);
        this.activeTab = 0;
        this.viewportUtil = new viewport();
        this.correction = 0;
    }
    setActiveTab() {
        const tabs = this.$refs.tab;
        if (!tabs) {
            return;
        }
        tabs[this.activeTab].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
        setTimeout(() => this.positionIndicator(), 50);
    }
    getLinkClassList(index) {
        return {
            'tabs__list_link--active': index === this.activeTab,
        };
    }
    positionIndicator() {
        return tabs_awaiter(this, void 0, void 0, function* () {
            const tabs = this.$refs.tab;
            if (!tabs) {
                return;
            }
            const { offsetLeft, offsetWidth } = tabs[this.activeTab];
            external_gsap_["TweenLite"].to(this.$refs.indicator, defaults.defaultDuration, {
                x: offsetLeft - this.correction,
                width: offsetWidth,
                ease: external_gsap_["Power3"].easeOut,
            });
        });
    }
    scrollCorrection() {
        const { tabList } = this.$refs;
        const tabs = this.$refs.tab;
        this.correction = tabList.scrollLeft;
        if (!tabs) {
            return;
        }
        const { offsetLeft, offsetWidth } = tabs[this.activeTab];
        external_gsap_["TweenLite"].to(this.$refs.indicator, 0, {
            x: offsetLeft - this.correction,
            width: offsetWidth,
            ease: external_gsap_["Power2"].easeOut,
        });
    }
    mounted() {
        this.activeTab = this.defaultTab;
        this.viewportUtil.addResizeHandler(this.positionIndicator);
        this.$refs.tabList.addEventListener('scroll', this.scrollCorrection);
        if (browser_capabilities.supportsTouch) {
            this.$refs.tabList.addEventListener('touchmove', this.scrollCorrection);
        }
    }
    beforeDestroy() {
        this.viewportUtil.removeResizeHandler(this.positionIndicator);
    }
};
tabs_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Array, required: true }),
    tabs_metadata("design:type", Array)
], tabs_Tabs.prototype, "tabs", void 0);
tabs_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Number, default: 0 }),
    tabs_metadata("design:type", Number)
], tabs_Tabs.prototype, "defaultTab", void 0);
tabs_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Boolean, required: true }),
    tabs_metadata("design:type", Boolean)
], tabs_Tabs.prototype, "sequenced", void 0);
tabs_decorate([
    Object(external_vue_property_decorator_["Watch"])('activeTab'),
    tabs_metadata("design:type", Function),
    tabs_metadata("design:paramtypes", []),
    tabs_metadata("design:returntype", void 0)
], tabs_Tabs.prototype, "setActiveTab", null);
tabs_Tabs = tabs_decorate([
    tabs_vue_default.a,
    Object(external_vue_property_decorator_["Component"])({
        name: 'Tabs',
    })
], tabs_Tabs);
/* harmony default export */ var tabs_tabs = (tabs_Tabs);

// CONCATENATED MODULE: ./src/js/components/molecules/tabs/index.ts

/* harmony default export */ var molecules_tabs = (tabs_tabs);

// EXTERNAL MODULE: ./src/js/components/molecules/tag/tag.vue.html
var tag_vue = __webpack_require__(45);
var tag_vue_default = /*#__PURE__*/__webpack_require__.n(tag_vue);

// CONCATENATED MODULE: ./src/js/components/molecules/tag/tag.ts
var tag_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var tag_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let tag_Tag = class Tag extends external_vue_property_decorator_["Vue"] {
};
tag_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Object, required: true }),
    tag_metadata("design:type", Object)
], tag_Tag.prototype, "tag", void 0);
tag_Tag = tag_decorate([
    tag_vue_default.a,
    Object(external_vue_property_decorator_["Component"])({
        name: 'tag',
    })
], tag_Tag);
/* harmony default export */ var tag = (tag_Tag);

// CONCATENATED MODULE: ./src/js/components/molecules/tag/index.ts

/* harmony default export */ var molecules_tag = (tag);

// EXTERNAL MODULE: ./src/js/components/molecules/tag-list/tag-list.vue.html
var tag_list_vue = __webpack_require__(46);
var tag_list_vue_default = /*#__PURE__*/__webpack_require__.n(tag_list_vue);

// CONCATENATED MODULE: ./src/js/components/molecules/tag-list/tag-list.ts
var tag_list_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var tag_list_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let tag_list_TagList = class TagList extends external_vue_property_decorator_["Vue"] {
};
tag_list_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Array, required: true }),
    tag_list_metadata("design:type", Object)
], tag_list_TagList.prototype, "tags", void 0);
tag_list_TagList = tag_list_decorate([
    tag_list_vue_default.a,
    Object(external_vue_property_decorator_["Component"])({
        name: 'tag-list',
    })
], tag_list_TagList);
/* harmony default export */ var tag_list = (tag_list_TagList);

// CONCATENATED MODULE: ./src/js/components/molecules/tag-list/index.ts

/* harmony default export */ var molecules_tag_list = (tag_list);

// EXTERNAL MODULE: ./src/js/components/molecules/tooltip-toggle/tooltip-toggle.vue.html
var tooltip_toggle_vue = __webpack_require__(47);
var tooltip_toggle_vue_default = /*#__PURE__*/__webpack_require__.n(tooltip_toggle_vue);

// CONCATENATED MODULE: ./src/js/components/molecules/tooltip-toggle/tooltip-toggle.ts
var tooltip_toggle_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var tooltip_toggle_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var tooltip_toggle_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




let tooltip_toggle_TooltipToggle = class TooltipToggle extends external_vue_property_decorator_["Vue"] {
    constructor() {
        super(...arguments);
        this.buildingUnit = defaults.buildingUnit;
        this.duration = defaults.defaultDuration;
        this.visible = false;
        this.tooltipLeft = false;
    }
    get tooltipClass() {
        return {
            'tooltip--arrow-left': this.tooltipLeft,
        };
    }
    show() {
        return tooltip_toggle_awaiter(this, void 0, void 0, function* () {
            this.visible = true;
        });
    }
    toggle() {
        if (!this.visible) {
            this.show();
        }
        else {
            this.hide();
        }
    }
    hide() {
        this.visible = false;
    }
    tooltipEnter(el, done) {
        const tooltipElement = el;
        const iconElement = this.$refs.button.$el;
        const { height: tooltipHeight, width: tooltipWidth } = tooltipElement.getBoundingClientRect();
        const { x: iconX, width: iconWidth } = iconElement.getBoundingClientRect();
        const iconCenterOffset = iconWidth / 2;
        let xAxisCorrection = tooltipWidth / -2 + iconCenterOffset;
        if (iconX + xAxisCorrection < 0) {
            xAxisCorrection = 0;
            this.tooltipLeft = true;
        }
        else {
            this.tooltipLeft = false;
        }
        external_gsap_["TweenLite"]
            .fromTo(tooltipElement, this.duration, { autoAlpha: 0, x: xAxisCorrection, y: this.buildingUnit * -1 }, { autoAlpha: 1, x: xAxisCorrection, y: 0, ease: external_gsap_["Power2"].easeOut })
            .eventCallback('onComplete', done);
    }
    tooltipLeave(el, done) {
        const { height } = el.getBoundingClientRect();
        external_gsap_["TweenLite"]
            .to(el, this.duration, { autoAlpha: 0, y: this.buildingUnit * -1, ease: external_gsap_["Power2"].easeIn })
            .eventCallback('onComplete', done);
    }
};
tooltip_toggle_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: true }),
    tooltip_toggle_metadata("design:type", String)
], tooltip_toggle_TooltipToggle.prototype, "label", void 0);
tooltip_toggle_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: true }),
    tooltip_toggle_metadata("design:type", String)
], tooltip_toggle_TooltipToggle.prototype, "icon", void 0);
tooltip_toggle_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: true }),
    tooltip_toggle_metadata("design:type", String)
], tooltip_toggle_TooltipToggle.prototype, "description", void 0);
tooltip_toggle_TooltipToggle = tooltip_toggle_decorate([
    tooltip_toggle_vue_default.a,
    Object(external_vue_property_decorator_["Component"])({
        name: 'TooltipToggle',
    })
], tooltip_toggle_TooltipToggle);


// EXTERNAL MODULE: ./src/js/components/molecules/tab-table/tab-table.vue.html
var tab_table_vue = __webpack_require__(48);
var tab_table_vue_default = /*#__PURE__*/__webpack_require__.n(tab_table_vue);

// CONCATENATED MODULE: ./src/js/components/molecules/tab-table/tab-table.ts
var tab_table_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var tab_table_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let tab_table_TabTable = class TabTable extends external_vue_property_decorator_["Vue"] {
};
tab_table_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: true }),
    tab_table_metadata("design:type", Object)
], tab_table_TabTable.prototype, "id", void 0);
tab_table_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: true }),
    tab_table_metadata("design:type", Object)
], tab_table_TabTable.prototype, "label", void 0);
tab_table_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Array, required: true }),
    tab_table_metadata("design:type", Object)
], tab_table_TabTable.prototype, "rows", void 0);
tab_table_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Boolean, required: true }),
    tab_table_metadata("design:type", Object)
], tab_table_TabTable.prototype, "active", void 0);
tab_table_TabTable = tab_table_decorate([
    tab_table_vue_default.a,
    Object(external_vue_property_decorator_["Component"])({
        name: 'TabTable',
    })
], tab_table_TabTable);


// EXTERNAL MODULE: ./src/js/components/molecules/tab-table-row/tab-table-row.vue.html
var tab_table_row_vue = __webpack_require__(49);
var tab_table_row_vue_default = /*#__PURE__*/__webpack_require__.n(tab_table_row_vue);

// CONCATENATED MODULE: ./src/js/components/molecules/tab-table-row/tab-table-row.ts
var tab_table_row_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var tab_table_row_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let tab_table_row_TabTableRow = class TabTableRow extends external_vue_property_decorator_["Vue"] {
};
tab_table_row_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: true }),
    tab_table_row_metadata("design:type", Object)
], tab_table_row_TabTableRow.prototype, "label", void 0);
tab_table_row_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: false }),
    tab_table_row_metadata("design:type", Object)
], tab_table_row_TabTableRow.prototype, "value", void 0);
tab_table_row_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Array, required: false }),
    tab_table_row_metadata("design:type", Object)
], tab_table_row_TabTableRow.prototype, "linkList", void 0);
tab_table_row_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Object, required: false }),
    tab_table_row_metadata("design:type", Object)
], tab_table_row_TabTableRow.prototype, "tooltip", void 0);
tab_table_row_TabTableRow = tab_table_row_decorate([
    tab_table_row_vue_default.a,
    Object(external_vue_property_decorator_["Component"])({
        name: 'TabTableRow',
    })
], tab_table_row_TabTableRow);


// CONCATENATED MODULE: ./src/js/components/molecules/index.js









































// EXTERNAL MODULE: ./src/js/components/organisms/brands/brands.vue.html
var brands_vue = __webpack_require__(50);
var brands_vue_default = /*#__PURE__*/__webpack_require__.n(brands_vue);

// CONCATENATED MODULE: ./src/js/components/organisms/brands/brands.ts
var brands_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var brands_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let brands_Brands = class Brands extends external_vue_property_decorator_["Vue"] {
};
brands_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Object }),
    brands_metadata("design:type", Object)
], brands_Brands.prototype, "ctas", void 0);
brands_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Object }),
    brands_metadata("design:type", Object)
], brands_Brands.prototype, "expand", void 0);
brands_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Array, required: true }),
    brands_metadata("design:type", Object)
], brands_Brands.prototype, "items", void 0);
brands_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Object }),
    brands_metadata("design:type", Object)
], brands_Brands.prototype, "limit", void 0);
brands_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String }),
    brands_metadata("design:type", Object)
], brands_Brands.prototype, "subtitle", void 0);
brands_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: true }),
    brands_metadata("design:type", Object)
], brands_Brands.prototype, "title", void 0);
brands_Brands = brands_decorate([
    brands_vue_default.a,
    Object(external_vue_property_decorator_["Component"])({
        name: 'Brands',
    })
], brands_Brands);


// EXTERNAL MODULE: ./src/js/components/organisms/colors/colors.vue.html
var colors_vue = __webpack_require__(51);
var colors_vue_default = /*#__PURE__*/__webpack_require__.n(colors_vue);

// CONCATENATED MODULE: ./src/js/components/organisms/colors/colors.ts
var colors_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var colors_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let colors_Colors = class Colors extends external_vue_property_decorator_["Vue"] {
    constructor() {
        super(...arguments);
        this.activeColorIndex = 0;
    }
    get activeColor() {
        return this.colorList[this.activeColorIndex];
    }
    setActiveColor(index) {
        this.activeColorIndex = index;
    }
};
colors_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: true }),
    colors_metadata("design:type", Object)
], colors_Colors.prototype, "title", void 0);
colors_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String }),
    colors_metadata("design:type", Object)
], colors_Colors.prototype, "subtitle", void 0);
colors_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Object, required: true }),
    colors_metadata("design:type", Object)
], colors_Colors.prototype, "colorCtas", void 0);
colors_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Array, required: true }),
    colors_metadata("design:type", Object)
], colors_Colors.prototype, "colorList", void 0);
colors_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Object }),
    colors_metadata("design:type", Object)
], colors_Colors.prototype, "ctas", void 0);
colors_Colors = colors_decorate([
    colors_vue_default.a,
    Object(external_vue_property_decorator_["Component"])({
        name: 'colors',
    })
], colors_Colors);


// EXTERNAL MODULE: ./src/js/components/organisms/country-selector/country-selector.vue.html
var country_selector_vue = __webpack_require__(52);
var country_selector_vue_default = /*#__PURE__*/__webpack_require__.n(country_selector_vue);

// CONCATENATED MODULE: ./src/js/components/organisms/country-selector/country-selector.ts
var country_selector_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var country_selector_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var country_selector_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


let country_selector_CountrySelector = class CountrySelector extends external_vue_property_decorator_["Vue"] {
    constructor() {
        super(...arguments);
        this.initPromise = null;
        this.countryInput = null;
        this.selectedCountry = null;
    }
    onSelectedCountry() {
        this.$emit('input', this.selectedCountry);
    }
    get detectedCountries() {
        const detectedCountries = [];
        if (!this.country || !this.country.code) {
            return detectedCountries;
        }
        try {
            const detectedCountryByIp = this.datasource[this.country.code];
            if (detectedCountryByIp) {
                detectedCountries.push({
                    title: detectedCountryByIp,
                    value: this.country.code,
                });
            }
        }
        catch (ex) {
            // parent scope should do error handling
            throw ex;
        }
        return detectedCountries;
    }
    focus() {
        return country_selector_awaiter(this, void 0, void 0, function* () {
            yield this.initPromise;
            yield this.$nextTick();
            this.$refs.autocomplete.focus();
            if (this.$refs.autocomplete.input) {
                yield this.$refs.autocomplete.init();
                this.$refs.autocomplete.resetInput();
            }
            this.$refs.autocomplete.calculateDirection();
        });
    }
    focusClose() {
        this.$refs.closeCountryPanel.focus();
    }
    close() {
        this.$emit('close');
    }
    countryChanged(country) {
        return new Promise((resolve) => {
            if (country !== null) {
                setTimeout(() => {
                    /*
                    This works around an issue where the keydown.enter event in the autocomplete -> input is also
                    applied on the editCountry button.  This causes to close and immediately reopen the edit country
                    panel. Suspecting a virtual dom issue. Should recheck with newer version of Vue.
                    */
                    this.selectedCountry = country;
                    resolve(country);
                }, 100);
            }
        });
    }
};
country_selector_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Object, default: null }),
    country_selector_metadata("design:type", Object)
], country_selector_CountrySelector.prototype, "value", void 0);
country_selector_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, default: null }),
    country_selector_metadata("design:type", Object)
], country_selector_CountrySelector.prototype, "label", void 0);
country_selector_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, default: '' }),
    country_selector_metadata("design:type", Object)
], country_selector_CountrySelector.prototype, "placeholder", void 0);
country_selector_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, default: null }),
    country_selector_metadata("design:type", Object)
], country_selector_CountrySelector.prototype, "highlightedLabel", void 0);
country_selector_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, default: '' }),
    country_selector_metadata("design:type", Object)
], country_selector_CountrySelector.prototype, "suggestionsLabel", void 0);
country_selector_decorate([
    Object(external_vue_property_decorator_["Prop"])({ required: true }),
    country_selector_metadata("design:type", Object)
], country_selector_CountrySelector.prototype, "datasource", void 0);
country_selector_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Object, default: null }),
    country_selector_metadata("design:type", Object)
], country_selector_CountrySelector.prototype, "country", void 0);
country_selector_decorate([
    Object(external_vue_property_decorator_["Watch"])('selectedCountry'),
    country_selector_metadata("design:type", Function),
    country_selector_metadata("design:paramtypes", []),
    country_selector_metadata("design:returntype", void 0)
], country_selector_CountrySelector.prototype, "onSelectedCountry", null);
country_selector_CountrySelector = country_selector_decorate([
    country_selector_vue_default.a,
    Object(external_vue_property_decorator_["Component"])({
        name: 'country-selector',
    })
], country_selector_CountrySelector);
/* harmony default export */ var country_selector = (country_selector_CountrySelector);

// CONCATENATED MODULE: ./src/js/components/organisms/country-selector/index.js

/* harmony default export */ var organisms_country_selector = (country_selector);

// EXTERNAL MODULE: ./src/js/components/organisms/hero-product/hero-product.vue.html
var hero_product_vue = __webpack_require__(53);
var hero_product_vue_default = /*#__PURE__*/__webpack_require__.n(hero_product_vue);

// CONCATENATED MODULE: ./src/js/components/organisms/hero-product/hero-product.ts
var hero_product_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var hero_product_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let hero_product_HeroProduct = class HeroProduct extends external_vue_property_decorator_["Vue"] {
    get productsClass() {
        return `hero__products-item hero__products-item--${this.products.length > 1 ? 'multiple' : 'single'}`;
    }
};
hero_product_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: true }),
    hero_product_metadata("design:type", Object)
], hero_product_HeroProduct.prototype, "title", void 0);
hero_product_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: false }),
    hero_product_metadata("design:type", Object)
], hero_product_HeroProduct.prototype, "subtitle", void 0);
hero_product_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: true }),
    hero_product_metadata("design:type", Object)
], hero_product_HeroProduct.prototype, "description", void 0);
hero_product_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Object, required: false }),
    hero_product_metadata("design:type", Object)
], hero_product_HeroProduct.prototype, "image", void 0);
hero_product_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Object, required: false }),
    hero_product_metadata("design:type", Object)
], hero_product_HeroProduct.prototype, "ctas", void 0);
hero_product_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Array, required: true }),
    hero_product_metadata("design:type", Object)
], hero_product_HeroProduct.prototype, "products", void 0);
hero_product_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Array, required: true }),
    hero_product_metadata("design:type", Object)
], hero_product_HeroProduct.prototype, "linkList", void 0);
hero_product_HeroProduct = hero_product_decorate([
    hero_product_vue_default.a,
    Object(external_vue_property_decorator_["Component"])({
        name: 'HeroProduct',
    })
], hero_product_HeroProduct);
/* harmony default export */ var hero_product = (hero_product_HeroProduct);

// CONCATENATED MODULE: ./src/js/components/organisms/hero-product/index.ts

/* harmony default export */ var organisms_hero_product = (hero_product);

// EXTERNAL MODULE: ./src/js/components/organisms/locale-selector/locale-selector.vue.html
var locale_selector_vue = __webpack_require__(54);
var locale_selector_vue_default = /*#__PURE__*/__webpack_require__.n(locale_selector_vue);

// CONCATENATED MODULE: ./src/js/components/organisms/locale-selector/locale-selector.ts
var locale_selector_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var locale_selector_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var locale_selector_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


let locale_selector_LocaleSelector = class LocaleSelector extends external_vue_property_decorator_["Vue"] {
    constructor() {
        super(...arguments);
        this.ready = false;
        this.countrySelectorOpen = false;
        this.countryInput = null;
    }
    get currentCountryLabel() {
        if (this.country && this.country.currency && this.country.currency.symbol) {
            return `${this.country.name} - ${this.country.currency.symbol}`;
        }
        if (this.country) {
            return `${this.country.name}`;
        }
        return 'Please select your country';
    }
    get currentCountryAriaLabel() {
        return `Change your country, currently: ${this.country.name}`;
    }
    beforeMount() {
        this.countryInput = this.country;
    }
    mounted() {
        // Remark: $ref doesn't work with v-if, but we don't want this component
        //         to render on the server. This prevents SSR and enables the $ref.
        this.ready = true;
    }
    toggleCountrySelector() {
        return locale_selector_awaiter(this, void 0, void 0, function* () {
            this.countrySelectorOpen = !this.countrySelectorOpen;
            if (this.countrySelectorOpen && this.$refs.countrySelector) {
                yield this.$refs.countrySelector.focus();
            }
            else if (!this.countrySelectorOpen && this.$refs.countrySelectorToggle) {
                yield this.$nextTick();
                this.$refs.countrySelectorToggle.focus();
            }
        });
    }
    setCountry() {
        return locale_selector_awaiter(this, void 0, void 0, function* () {
            this.$emit('country-changed', { country: this.countryInput });
            yield this.toggleCountrySelector();
        });
    }
};
locale_selector_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, default: null }),
    locale_selector_metadata("design:type", Object)
], locale_selector_LocaleSelector.prototype, "label", void 0);
locale_selector_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, default: '' }),
    locale_selector_metadata("design:type", Object)
], locale_selector_LocaleSelector.prototype, "placeholder", void 0);
locale_selector_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, default: null }),
    locale_selector_metadata("design:type", Object)
], locale_selector_LocaleSelector.prototype, "highlightedLabel", void 0);
locale_selector_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, default: '' }),
    locale_selector_metadata("design:type", Object)
], locale_selector_LocaleSelector.prototype, "suggestionsLabel", void 0);
locale_selector_decorate([
    Object(external_vue_property_decorator_["Prop"])({ required: true }),
    locale_selector_metadata("design:type", Object)
], locale_selector_LocaleSelector.prototype, "datasource", void 0);
locale_selector_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Object, default: null }),
    locale_selector_metadata("design:type", Object)
], locale_selector_LocaleSelector.prototype, "country", void 0);
locale_selector_LocaleSelector = locale_selector_decorate([
    locale_selector_vue_default.a,
    Object(external_vue_property_decorator_["Component"])({
        name: 'locale-selector',
    })
], locale_selector_LocaleSelector);
/* harmony default export */ var locale_selector = (locale_selector_LocaleSelector);

// CONCATENATED MODULE: ./src/js/components/organisms/locale-selector/index.ts

/* harmony default export */ var organisms_locale_selector = (locale_selector);

// EXTERNAL MODULE: ./src/js/components/organisms/content-highlight/content-highlight.vue.html
var content_highlight_vue = __webpack_require__(55);
var content_highlight_vue_default = /*#__PURE__*/__webpack_require__.n(content_highlight_vue);

// CONCATENATED MODULE: ./src/js/components/organisms/content-highlight/content-highlight.ts
var content_highlight_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var content_highlight_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let content_highlight_ContentHighlight = class ContentHighlight extends external_vue_property_decorator_["Vue"] {
};
content_highlight_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: true }),
    content_highlight_metadata("design:type", Object)
], content_highlight_ContentHighlight.prototype, "title", void 0);
content_highlight_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String }),
    content_highlight_metadata("design:type", Object)
], content_highlight_ContentHighlight.prototype, "subtitle", void 0);
content_highlight_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String }),
    content_highlight_metadata("design:type", Object)
], content_highlight_ContentHighlight.prototype, "description", void 0);
content_highlight_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Object }),
    content_highlight_metadata("design:type", Object)
], content_highlight_ContentHighlight.prototype, "image", void 0);
content_highlight_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Object }),
    content_highlight_metadata("design:type", Object)
], content_highlight_ContentHighlight.prototype, "ctas", void 0);
content_highlight_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Boolean, required: true }),
    content_highlight_metadata("design:type", Object)
], content_highlight_ContentHighlight.prototype, "reversed", void 0);
content_highlight_ContentHighlight = content_highlight_decorate([
    content_highlight_vue_default.a,
    Object(external_vue_property_decorator_["Component"])({
        name: 'ContentHighlight',
    })
], content_highlight_ContentHighlight);


// EXTERNAL MODULE: ./src/js/components/organisms/table-compare/table-compare.vue.html
var table_compare_vue = __webpack_require__(56);
var table_compare_vue_default = /*#__PURE__*/__webpack_require__.n(table_compare_vue);

// CONCATENATED MODULE: ./src/js/components/organisms/table-compare/table-compare.ts
var table_compare_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var table_compare_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





let table_compare_TableCompare = class TableCompare extends external_vue_property_decorator_["Vue"] {
    constructor() {
        super(...arguments);
        this.disableLeft = false;
        this.disableRight = false;
        this.viewportUtility = new viewport();
    }
    mounted() {
        this.resizeHandler = debounce_default()(this.resetScrollPosition, 100);
        this.viewportUtility.addResizeHandler(this.resizeHandler);
        const options = {
            root: this.$refs.scrollWidthContainer,
            threshold: 0.99,
        };
        if (browser_capabilities.supportsIntersectionObserver) {
            this.observer = new IntersectionObserver(this.intersectionObserver, options);
            this.observeColumns();
        }
    }
    beforeDestroy() {
        this.resizeHandler.cancel();
        this.viewportUtility.removeResizeHandler(this.resizeHandler);
        this.observer.unobserve(this.$refs.scrollContainer);
    }
    observeColumns() {
        this.observer.disconnect();
        if (this.$refs.columns && this.$refs.columns.length) {
            this.observer.observe(this.$refs.columns[0]);
            this.observer.observe(this.$refs.columns.slice(-1)[0]);
        }
    }
    intersectionObserver(entries) {
        const firstColumn = this.$refs.columns[0];
        const lastColumn = this.$refs.columns.slice(-1)[0];
        this.disableLeft = false;
        this.disableRight = false;
        entries.some((entry) => {
            if (entry.isIntersecting) {
                if (entry.target === firstColumn) {
                    this.disableLeft = true;
                    return true;
                }
                if (entry.target === lastColumn) {
                    this.disableRight = true;
                    return true;
                }
            }
            return false;
        });
    }
    scroll(reverse = false) {
        const scrollWidth = this.$refs.scrollWidthContainer.clientWidth;
        const { scrollLeft } = this.$refs.scrollContainer;
        this.$refs.scrollContainer.scrollTo({
            left: scrollLeft + (reverse ? -1 : 1) * scrollWidth,
            behavior: 'smooth',
        });
    }
    resetScrollPosition() {
        this.$refs.scrollContainer.scrollLeft = 0;
    }
    getClassNames(type) {
        return {
            ContentButton: 'button',
            ContentLink: 'link link--medium',
            YoutubeLink: '',
        }[type] || '';
    }
};
table_compare_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: true }),
    table_compare_metadata("design:type", Object)
], table_compare_TableCompare.prototype, "title", void 0);
table_compare_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String }),
    table_compare_metadata("design:type", Object)
], table_compare_TableCompare.prototype, "subtitle", void 0);
table_compare_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Object, required: true }),
    table_compare_metadata("design:type", Object)
], table_compare_TableCompare.prototype, "content", void 0);
table_compare_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Object }),
    table_compare_metadata("design:type", Object)
], table_compare_TableCompare.prototype, "ctas", void 0);
table_compare_decorate([
    Object(external_vue_property_decorator_["Watch"])('content.columns'),
    table_compare_metadata("design:type", Function),
    table_compare_metadata("design:paramtypes", []),
    table_compare_metadata("design:returntype", void 0)
], table_compare_TableCompare.prototype, "observeColumns", null);
table_compare_TableCompare = table_compare_decorate([
    table_compare_vue_default.a,
    Object(external_vue_property_decorator_["Component"])({
        name: 'TableCompare',
    })
], table_compare_TableCompare);
/* harmony default export */ var table_compare = (table_compare_TableCompare);

// CONCATENATED MODULE: ./src/js/components/organisms/table-compare/index.ts

/* harmony default export */ var organisms_table_compare = (table_compare);

// EXTERNAL MODULE: ./src/js/components/organisms/tabbed-table/tabbed-table.vue.html
var tabbed_table_vue = __webpack_require__(57);
var tabbed_table_vue_default = /*#__PURE__*/__webpack_require__.n(tabbed_table_vue);

// CONCATENATED MODULE: ./src/js/components/organisms/tabbed-table/tabbed-table.ts
var tabbed_table_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var tabbed_table_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let tabbed_table_TabbedTable = class TabbedTable extends external_vue_property_decorator_["Vue"] {
};
tabbed_table_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: true }),
    tabbed_table_metadata("design:type", Object)
], tabbed_table_TabbedTable.prototype, "title", void 0);
tabbed_table_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: false }),
    tabbed_table_metadata("design:type", Object)
], tabbed_table_TabbedTable.prototype, "subtitle", void 0);
tabbed_table_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Array, required: true }),
    tabbed_table_metadata("design:type", Object)
], tabbed_table_TabbedTable.prototype, "tabs", void 0);
tabbed_table_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Object, required: true }),
    tabbed_table_metadata("design:type", Object)
], tabbed_table_TabbedTable.prototype, "ctas", void 0);
tabbed_table_TabbedTable = tabbed_table_decorate([
    tabbed_table_vue_default.a,
    Object(external_vue_property_decorator_["Component"])({
        name: 'TabbedTable',
    })
], tabbed_table_TabbedTable);


// CONCATENATED MODULE: ./src/js/components/organisms/index.js









// CONCATENATED MODULE: ./src/js/components/organisms-page/__LEGACY__brands/legacy-brands.ts
var legacy_brands_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var legacy_brands_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let legacy_brands_LegacyBrands = class LegacyBrands extends external_vue_property_decorator_["Vue"] {
};
legacy_brands_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: true }),
    legacy_brands_metadata("design:type", String)
], legacy_brands_LegacyBrands.prototype, "title", void 0);
legacy_brands_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Array, required: true }),
    legacy_brands_metadata("design:type", Array)
], legacy_brands_LegacyBrands.prototype, "brands", void 0);
legacy_brands_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Object }),
    legacy_brands_metadata("design:type", Object)
], legacy_brands_LegacyBrands.prototype, "contentLink", void 0);
legacy_brands_LegacyBrands = legacy_brands_decorate([
    Object(external_vue_property_decorator_["Component"])({
        name: 'LegacyBrands',
        template: __webpack_require__(85),
    })
], legacy_brands_LegacyBrands);


// CONCATENATED MODULE: ./src/js/components/organisms-page/brands-large/brands-large.js
/* harmony default export */ var brands_large = ({
    name: 'brands-large',
    template: __webpack_require__(86),
    props: {
        title: {
            type: String,
            required: true,
        },
        text: {
            type: String,
        },
        brands: {
            type: Array,
            required: true,
        },
        contentLink: {
            type: Object,
        },
    },
});

// CONCATENATED MODULE: ./src/js/components/organisms-page/brands-large/index.js

/* harmony default export */ var organisms_page_brands_large = (brands_large);

// CONCATENATED MODULE: ./src/js/components/organisms-page/cases/cases.js

/* harmony default export */ var cases = ({
    name: 'cases',
    template: __webpack_require__(87),
    data: () => ({
        viewport: new viewport(),
        showVideo: false,
    }),
    props: {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        videoId: {
            type: String,
            required: true,
        },
        buttonLabel: {
            type: String,
            required: true,
        },
        buttonIcon: {
            type: String,
            required: true,
        },
        image: {
            type: Object,
            required: true,
        },
    },
    computed: {
        isMobileXl() {
            return this.viewport.isMobileXl;
        },
    },
    methods: {
        toggleVideo() {
            this.showVideo = !this.showVideo;
        },
    },
});

// CONCATENATED MODULE: ./src/js/components/organisms-page/cases/index.js

/* harmony default export */ var organisms_page_cases = (cases);

// CONCATENATED MODULE: ./src/js/components/organisms-page/ecosystem/ecosystem.js
/* harmony default export */ var ecosystem = ({
    name: 'ecosystem',
    template: __webpack_require__(88),
    props: {
        title: {
            type: String,
            required: false,
        },
        items: {
            type: Array,
            required: true,
        },
    },
});

// CONCATENATED MODULE: ./src/js/components/organisms-page/ecosystem/index.js

/* harmony default export */ var organisms_page_ecosystem = (ecosystem);

// CONCATENATED MODULE: ./src/js/components/organisms-page/examples/examples.js
/* harmony default export */ var examples = ({
    name: 'examples',
    template: __webpack_require__(89),
    data: () => ({
        enabled: false,
    }),
    props: {
        title: {
            type: String,
            required: true,
        },
        cards: {
            type: Array,
            required: true,
        },
        horizontalList: {
            type: Object,
        },
    },
    mounted() {
        // TODO: Fix weird card problem (breaking render in SSR,
        // see: http://localhost:8080/materials/ultimaker-pla)
        this.enabled = true;
    },
});

// CONCATENATED MODULE: ./src/js/components/organisms-page/examples/index.js

/* harmony default export */ var organisms_page_examples = (examples);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(58);

// CONCATENATED MODULE: ./src/js/components/organisms-page/explore/explore.js


const defaultAnimationDuration = 1;
/* harmony default export */ var explore = ({
    name: 'explore',
    template: __webpack_require__(90),
    data: () => ({
        activeSlide: 0,
    }),
    props: {
        title: {
            type: String,
            required: true,
        },
        items: {
            type: Array,
            required: true,
        },
    },
    computed: Object.assign({}, Object(external_vuex_["mapGetters"])('page', ['page']), { isMobile() {
            return false;
        },
        buttons() {
            return {
                next: {
                    label: 'next',
                    iconName: 'arrow-down',
                },
                previous: {
                    label: 'previous',
                    iconName: 'arrow-up',
                },
            };
        } }),
    methods: {
        indexChanged(payload) {
            this.activeSlide = payload.index;
        },
        navClicked(direction) {
            const maxItems = this.items.length;
            if (direction === 'previous') {
                this.activeSlide -= 1;
                this.activeSlide = (this.activeSlide < 0) ? maxItems - 1 : this.activeSlide;
            }
            else {
                this.activeSlide += 1;
                this.activeSlide = (this.activeSlide > maxItems - 1) ? 0 : this.activeSlide;
            }
        },
        imageEnter(image, done) {
            external_gsap_["TweenLite"].fromTo(image, defaultAnimationDuration, { opacity: 0 }, { opacity: 1, ease: external_gsap_["Power0"].easeIn, onComplete: done });
        },
        imageLeave(image, done) {
            external_gsap_["TweenLite"].to(image, defaultAnimationDuration, { opacity: 0, ease: external_gsap_["Power0"].easeOut, onComplete: done });
        },
    },
});

// CONCATENATED MODULE: ./src/js/components/organisms-page/explore/index.js

/* harmony default export */ var organisms_page_explore = (explore);

// EXTERNAL MODULE: ./src/js/components/organisms-page/hero-basic/hero-basic.vue.html
var hero_basic_vue = __webpack_require__(59);
var hero_basic_vue_default = /*#__PURE__*/__webpack_require__.n(hero_basic_vue);

// CONCATENATED MODULE: ./src/js/components/organisms-page/hero-basic/hero-basic.ts
var hero_basic_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var hero_basic_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let hero_basic_HeroBasic = class HeroBasic extends external_vue_property_decorator_["Vue"] {
};
hero_basic_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: true }),
    hero_basic_metadata("design:type", Object)
], hero_basic_HeroBasic.prototype, "title", void 0);
hero_basic_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: false }),
    hero_basic_metadata("design:type", Object)
], hero_basic_HeroBasic.prototype, "subtitle", void 0);
hero_basic_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: true }),
    hero_basic_metadata("design:type", Object)
], hero_basic_HeroBasic.prototype, "description", void 0);
hero_basic_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Object, required: false }),
    hero_basic_metadata("design:type", Object)
], hero_basic_HeroBasic.prototype, "image", void 0);
hero_basic_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Object, required: false }),
    hero_basic_metadata("design:type", Object)
], hero_basic_HeroBasic.prototype, "ctas", void 0);
hero_basic_HeroBasic = hero_basic_decorate([
    hero_basic_vue_default.a,
    Object(external_vue_property_decorator_["Component"])({
        name: 'hero-basic',
    })
], hero_basic_HeroBasic);
/* harmony default export */ var hero_basic = (hero_basic_HeroBasic);

// CONCATENATED MODULE: ./src/js/components/organisms-page/hero-basic/index.ts

/* harmony default export */ var organisms_page_hero_basic = (hero_basic);

// CONCATENATED MODULE: ./src/js/components/organisms-page/hero-products-application/hero-products-application.js
/* harmony default export */ var hero_products_application = ({
    name: 'hero-products-application',
    template: __webpack_require__(91),
    props: {
        title: {
            required: true,
            type: String,
        },
        subtitle: {
            required: true,
            type: String,
        },
        heroImage: {
            required: true,
            type: Object,
        },
        productImage: {
            required: true,
            type: Object,
        },
        uspIcons: {
            required: true,
            type: Array,
        },
        description: {
            required: true,
            type: String,
        },
        ctaLink: {
            required: true,
            type: Object,
        },
        product: {
            required: false,
            type: Object,
        },
        links: {
            required: false,
            type: Array,
        },
    },
});

// CONCATENATED MODULE: ./src/js/components/organisms-page/hero-products-application/index.js

/* harmony default export */ var organisms_page_hero_products_application = (hero_products_application);

// CONCATENATED MODULE: ./src/js/components/organisms-page/hero-text/hero-text.js
/* harmony default export */ var hero_text = ({
    name: 'hero-text',
    template: __webpack_require__(92),
    props: {
        title: {
            type: String,
            required: false,
        },
        contents: {
            type: String,
            required: true,
        },
    },
});

// CONCATENATED MODULE: ./src/js/components/organisms-page/hero-text/index.js

/* harmony default export */ var organisms_page_hero_text = (hero_text);

// EXTERNAL MODULE: ./src/js/components/organisms-page/hero-cover/hero-cover.vue.html
var hero_cover_vue = __webpack_require__(60);
var hero_cover_vue_default = /*#__PURE__*/__webpack_require__.n(hero_cover_vue);

// CONCATENATED MODULE: ./src/js/components/organisms-page/hero-cover/hero-cover.ts
var hero_cover_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var hero_cover_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let hero_cover_HeroCover = class HeroCover extends external_vue_property_decorator_["Vue"] {
    constructor() {
        super(...arguments);
        this.showVideo = false;
    }
    toggleVideo() {
        this.showVideo = !this.showVideo;
    }
};
hero_cover_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: true }),
    hero_cover_metadata("design:type", Object)
], hero_cover_HeroCover.prototype, "title", void 0);
hero_cover_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: true }),
    hero_cover_metadata("design:type", Object)
], hero_cover_HeroCover.prototype, "description", void 0);
hero_cover_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Object }),
    hero_cover_metadata("design:type", Object)
], hero_cover_HeroCover.prototype, "ctas", void 0);
hero_cover_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Object }),
    hero_cover_metadata("design:type", Object)
], hero_cover_HeroCover.prototype, "image", void 0);
hero_cover_HeroCover = hero_cover_decorate([
    hero_cover_vue_default.a,
    Object(external_vue_property_decorator_["Component"])({
        name: 'hero-cover',
    })
], hero_cover_HeroCover);
/* harmony default export */ var hero_cover = (hero_cover_HeroCover);

// CONCATENATED MODULE: ./src/js/components/organisms-page/hero-cover/index.ts

/* harmony default export */ var organisms_page_hero_cover = (hero_cover);

// CONCATENATED MODULE: ./src/js/components/organisms-page/slider-reveal/slider-reveal.js


/* harmony default export */ var slider_reveal = ({
    name: 'slider-reveal',
    template: __webpack_require__(93),
    props: {
        styleModifiers: {
            type: Array,
            required: false,
        },
        title: {
            type: String,
            required: false,
        },
        contents: {
            type: Array,
            required: true,
        },
        imageSlider: {
            type: Object,
            required: true,
        },
        link: {
            type: Object,
            required: false,
        },
    },
    computed: {
        hasLink() {
            return this.link && this.link.href && this.link.text;
        },
    },
    data() {
        return {
            isMobile: false,
            itemOffsetY: 0,
            itemHeight: 0,
            prevItemHeight: 0,
            screenCenterY: 0,
            timeLine: null,
            viewportUtil: new viewport(),
        };
    },
    mounted() {
        this.$nextTick(() => this.initialize());
    },
    beforeDestroy() {
        this.removeEventListeners();
    },
    methods: {
        initialize() {
            this.resize();
            this.scroll();
            this.addEventListeners();
        },
        addEventListeners() {
            this.viewportUtil.addScrollHandler(this.scrollHandler);
            this.viewportUtil.addResizeHandler(this.resizeHandler);
        },
        removeEventListeners() {
            this.viewportUtil.removeScrollHandler(this.scrollHandler);
            this.viewportUtil.removeResizeHandler(this.resizeHandler);
        },
        getOffsetForElement(el) {
            // TODO: Maybe put this in a util so we can reuse;
            const rect = el.getBoundingClientRect();
            const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
        },
        calculateOffsets() {
            if (this.$refs['image-mask'] && this.$refs['image-mask'][0]) {
                this.itemOffsetY = this.getOffsetForElement(this.$refs['image-mask'][0]);
                this.itemHeight = this.$refs['image-wrapper'].getBoundingClientRect().height;
                this.screenCenterY = window.innerHeight * 0.5;
            }
            else {
                setTimeout(this.calculateOffsets, 200);
            }
        },
        setupTimeLine() {
            if (this.itemHeight !== this.prevItemHeight) {
                this.prevItemHeight = this.itemHeight;
                this.timeLine = new external_gsap_["TimelineLite"]({ paused: true });
                this.timeLine.fromTo(this.$refs['image-mask'][1], 0.2, { height: 0 }, { height: this.itemHeight, ease: external_gsap_["Power2"].easeInOut });
            }
        },
        resize() {
            this.isMobile = this.viewportUtil.isMobile;
            this.calculateOffsets();
            this.setupTimeLine();
            this.scroll();
        },
        scroll() {
            let progress = 0;
            let diff = (this.itemOffsetY.top - this.viewportUtil.scrollY) - this.screenCenterY + this.itemHeight;
            diff = diff < 0 ? 0 : diff;
            diff = diff > this.itemHeight ? this.itemHeight : diff;
            progress = (diff / this.itemHeight);
            external_gsap_["TweenLite"].to(this.timeLine, 0.2, { progress });
        },
        resizeHandler() {
            this.resize();
        },
        scrollHandler() {
            this.scroll();
        },
    },
});

// CONCATENATED MODULE: ./src/js/components/organisms-page/slider-reveal/index.js

/* harmony default export */ var organisms_page_slider_reveal = (slider_reveal);

// EXTERNAL MODULE: ./src/js/components/organisms/overflow-container/overflow-container.vue.html
var overflow_container_vue = __webpack_require__(61);
var overflow_container_vue_default = /*#__PURE__*/__webpack_require__.n(overflow_container_vue);

// CONCATENATED MODULE: ./src/js/components/organisms/overflow-container/overflow-container.ts
var overflow_container_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var overflow_container_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



let overflow_container_OverflowContainer = class OverflowContainer extends external_vue_property_decorator_["Vue"] {
    constructor() {
        super(...arguments);
        this.activeSelector = '.exact-active';
        this.scrollTimeout = 300;
        this.isTouch = false;
    }
    mounted() {
        const subnav = this.$refs.subNav;
        this.isTouch = browser_capabilities.supportsTouch;
        if (subnav) {
            const activeItem = subnav.querySelector(this.activeSelector);
            if (activeItem && this.isTouch) {
                setTimeout(() => activeItem.scrollIntoView({ inline: 'center' }), this.scrollTimeout);
            }
        }
    }
};
overflow_container_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Array, required: true }),
    overflow_container_metadata("design:type", Array)
], overflow_container_OverflowContainer.prototype, "items", void 0);
overflow_container_OverflowContainer = overflow_container_decorate([
    overflow_container_vue_default.a,
    Object(external_vue_property_decorator_["Component"])({
        name: 'OverflowContainer',
    })
], overflow_container_OverflowContainer);
/* harmony default export */ var overflow_container = (overflow_container_OverflowContainer);

// CONCATENATED MODULE: ./src/js/components/organisms/overflow-container/index.js

/* harmony default export */ var organisms_overflow_container = (overflow_container);

// CONCATENATED MODULE: ./src/js/components/organisms-page/subnavigation/subnavigation.ts
var subnavigation_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var subnavigation_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let subnavigation_Subnavigation = class Subnavigation extends organisms_overflow_container {
};
subnavigation_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Array, required: true }),
    subnavigation_metadata("design:type", Object)
], subnavigation_Subnavigation.prototype, "items", void 0);
subnavigation_Subnavigation = subnavigation_decorate([
    Object(external_vue_property_decorator_["Component"])({
        name: 'Subnavigation',
    })
], subnavigation_Subnavigation);
/* harmony default export */ var subnavigation = (subnavigation_Subnavigation);

// CONCATENATED MODULE: ./src/js/components/organisms-page/subnavigation/index.js

/* harmony default export */ var organisms_page_subnavigation = (subnavigation);

// EXTERNAL MODULE: ./src/js/components/organisms-page/tabbed-content/tabbed-content.vue.html
var tabbed_content_vue = __webpack_require__(62);
var tabbed_content_vue_default = /*#__PURE__*/__webpack_require__.n(tabbed_content_vue);

// CONCATENATED MODULE: ./src/js/components/organisms-page/tabbed-content/tabbed-content.ts
var tabbed_content_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var tabbed_content_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let tabbed_content_TabbedContent = class TabbedContent extends external_vue_property_decorator_["Vue"] {
};
tabbed_content_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: true }),
    tabbed_content_metadata("design:type", Object)
], tabbed_content_TabbedContent.prototype, "title", void 0);
tabbed_content_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Array, required: true }),
    tabbed_content_metadata("design:type", Object)
], tabbed_content_TabbedContent.prototype, "tabs", void 0);
tabbed_content_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Object }),
    tabbed_content_metadata("design:type", Object)
], tabbed_content_TabbedContent.prototype, "ctas", void 0);
tabbed_content_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String }),
    tabbed_content_metadata("design:type", Object)
], tabbed_content_TabbedContent.prototype, "subtitle", void 0);
tabbed_content_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Boolean, required: false, default: false }),
    tabbed_content_metadata("design:type", Object)
], tabbed_content_TabbedContent.prototype, "sequenced", void 0);
tabbed_content_TabbedContent = tabbed_content_decorate([
    tabbed_content_vue_default.a,
    Object(external_vue_property_decorator_["Component"])({
        name: 'TabbedContent',
    })
], tabbed_content_TabbedContent);
/* harmony default export */ var tabbed_content = (tabbed_content_TabbedContent);

// CONCATENATED MODULE: ./src/js/components/organisms-page/tabbed-content/index.ts

/* harmony default export */ var organisms_page_tabbed_content = (tabbed_content);

// CONCATENATED MODULE: ./src/js/components/organisms-page/ubr/ubr.js
/* harmony default export */ var ubr = ({
    name: 'ubr',
    template: __webpack_require__(94),
    props: {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        image: {
            type: Array,
            required: true,
        },
        reasons: {
            type: Array,
            required: true,
        },
    },
});

// CONCATENATED MODULE: ./src/js/components/organisms-page/ubr/index.js

/* harmony default export */ var organisms_page_ubr = (ubr);

// CONCATENATED MODULE: ./src/js/components/organisms-page/page-drawer/page-drawer.ts
var page_drawer_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let page_drawer_PageDrawer = class PageDrawer extends external_vue_property_decorator_["Vue"] {
};
page_drawer_PageDrawer = page_drawer_decorate([
    Object(external_vue_property_decorator_["Component"])({
        name: 'page-drawer',
        template: '<section class="drawer" v-size-emitter="\'drawer\'"><slot></slot></section>',
    })
], page_drawer_PageDrawer);
/* harmony default export */ var page_drawer = (page_drawer_PageDrawer);

// CONCATENATED MODULE: ./src/js/components/organisms-page/page-drawer/index.ts

/* harmony default export */ var organisms_page_page_drawer = (page_drawer);

// EXTERNAL MODULE: ./src/js/components/organisms-page/page-footer/page-footer.vue.html
var page_footer_vue = __webpack_require__(63);
var page_footer_vue_default = /*#__PURE__*/__webpack_require__.n(page_footer_vue);

// CONCATENATED MODULE: ./src/js/components/organisms-page/page-footer/page-footer.ts
var page_footer_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var page_footer_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let page_footer_PageFooter = class PageFooter extends external_vue_property_decorator_["Vue"] {
};
page_footer_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Array, required: true }),
    page_footer_metadata("design:type", Object)
], page_footer_PageFooter.prototype, "navigation", void 0);
page_footer_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Object, required: true }),
    page_footer_metadata("design:type", Object)
], page_footer_PageFooter.prototype, "localeSelector", void 0);
page_footer_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Object, required: true }),
    page_footer_metadata("design:type", Object)
], page_footer_PageFooter.prototype, "legalNavigation", void 0);
page_footer_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Object, required: true }),
    page_footer_metadata("design:type", Object)
], page_footer_PageFooter.prototype, "country", void 0);
page_footer_PageFooter = page_footer_decorate([
    page_footer_vue_default.a,
    Object(external_vue_property_decorator_["Component"])({
        name: 'page-footer',
    })
], page_footer_PageFooter);
/* harmony default export */ var page_footer = (page_footer_PageFooter);

// CONCATENATED MODULE: ./src/js/components/organisms-page/page-footer/index.ts

/* harmony default export */ var organisms_page_page_footer = (page_footer);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(64);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// CONCATENATED MODULE: ./src/js/plugins/public-event-service.js

const EventScope = new external_vue_default.a();
const EventLog = [];
const excludedLogEvents = ['size'];
class PublicEventService {
    static emit(event, args) {
        if (!excludedLogEvents.includes(event)) {
            EventLog.push({ at: Date.now(), event, args });
        }
        EventScope.$emit(event, args);
    }
    static on(event, func) {
        EventScope.$on(event, func);
    }
    static off(event, func) {
        EventScope.$off(event, func);
    }
    static log(event, after = 0) {
        return EventLog.filter(e => e.event === event && e.at > after);
    }
    // eslint-disable-next-line no-shadow
    static install(Vue) {
        Object.defineProperty(Vue.prototype, '$emitPublic', {
            configurable: true,
            get() {
                return PublicEventService.emit;
            },
        });
        Object.defineProperty(Vue.prototype, '$onPublic', {
            configurable: true,
            get() {
                return PublicEventService.on;
            },
        });
        Object.defineProperty(Vue.prototype, '$offPublic', {
            configurable: true,
            get() {
                return PublicEventService.off;
            },
        });
    }
}
/* harmony default export */ var public_event_service = (PublicEventService);

// EXTERNAL MODULE: ./src/js/components/organisms-page/page-header/page-header.vue.html
var page_header_vue = __webpack_require__(65);
var page_header_vue_default = /*#__PURE__*/__webpack_require__.n(page_header_vue);

// CONCATENATED MODULE: ./src/js/components/organisms-page/page-header/page-header.ts
var page_header_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var page_header_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




let page_header_PageHeader = class PageHeader extends external_vue_property_decorator_["Vue"] {
    constructor() {
        super(...arguments);
        this.assistUsed = false;
        this.viewportUtil = new viewport();
        this.offsetTopHeader = 0;
        this.searchOpen = false;
        this.showCompactMenu = true;
        this.maxMobileRes = 1025;
        this.resize = false;
    }
    get assistState() {
        return this.mainNavOpen || this.searchOpen;
    }
    get headerClasses() {
        const scrollY = this.viewportUtil.scrollY < 0 ? 0 : this.viewportUtil.scrollY;
        const isFixed = scrollY >= this.offsetTopHeader;
        return {
            'header--absolute': !isFixed,
            'header--fixed': isFixed,
        };
    }
    navAssistToggle() {
        if (this.searchOpen || this.mainNavOpen) {
            this.searchOpen = false;
            this.$emit('toggle-nav', false);
        }
        else {
            this.$emit('toggle-nav', true);
            this.searchOpen = false;
        }
    }
    openSearch() {
        this.searchOpen = true;
    }
    closeSearch() {
        this.searchOpen = false;
    }
    handleFocus() {
        if (!this.$refs.search || !this.$refs.search.focusInput) {
            return;
        }
        this.$refs.search.focusInput();
    }
    focusFirstSysNavItem() {
        const firstNavItem = this.$el.querySelector('.sys-nav__link');
        if (firstNavItem) {
            firstNavItem.focus();
        }
    }
    focusHomeNavItem() {
        const homeLink = this.$el.querySelector('.home-link');
        if (homeLink) {
            homeLink.focus();
        }
    }
    handleResize() {
        this.showCompactMenu = this.viewportUtil.screenWidth < this.maxMobileRes;
    }
    beforeMount() {
        public_event_service.on('size', ({ element, size }) => {
            if (element === 'drawer') {
                this.offsetTopHeader = size;
            }
        });
    }
    mounted() {
        this.handleResize();
        this.viewportUtil.addResizeHandler(this.handleResize);
    }
    beforeDestroy() {
        this.viewportUtil.removeResizeHandler(this.handleResize);
    }
};
page_header_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Array, required: false }),
    page_header_metadata("design:type", Object)
], page_header_PageHeader.prototype, "navigation", void 0);
page_header_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Object, required: false }),
    page_header_metadata("design:type", Object)
], page_header_PageHeader.prototype, "cta", void 0);
page_header_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Object, required: false }),
    page_header_metadata("design:type", Object)
], page_header_PageHeader.prototype, "search", void 0);
page_header_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Boolean, required: true }),
    page_header_metadata("design:type", Boolean)
], page_header_PageHeader.prototype, "mainNavOpen", void 0);
page_header_PageHeader = page_header_decorate([
    page_header_vue_default.a,
    Object(external_vue_property_decorator_["Component"])({
        name: 'page-header',
    })
], page_header_PageHeader);
/* harmony default export */ var page_header = (page_header_PageHeader);

// CONCATENATED MODULE: ./src/js/components/organisms-page/page-header/index.ts

/* harmony default export */ var organisms_page_page_header = (page_header);

// EXTERNAL MODULE: ./src/js/components/organisms-page/overview/overview.vue.html
var overview_vue = __webpack_require__(66);
var overview_vue_default = /*#__PURE__*/__webpack_require__.n(overview_vue);

// CONCATENATED MODULE: ./src/js/components/organisms-page/overview/overview.ts
var overview_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var overview_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let overview_Overview = class Overview extends external_vue_property_decorator_["Vue"] {
};
overview_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: true }),
    overview_metadata("design:type", Object)
], overview_Overview.prototype, "title", void 0);
overview_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: false }),
    overview_metadata("design:type", Object)
], overview_Overview.prototype, "subtitle", void 0);
overview_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Array, required: true }),
    overview_metadata("design:type", Object)
], overview_Overview.prototype, "sections", void 0);
overview_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Object, required: false }),
    overview_metadata("design:type", Object)
], overview_Overview.prototype, "ctas", void 0);
overview_Overview = overview_decorate([
    overview_vue_default.a,
    Object(external_vue_property_decorator_["Component"])({
        name: 'overview',
    })
], overview_Overview);
/* harmony default export */ var overview = (overview_Overview);

// CONCATENATED MODULE: ./src/js/components/organisms-page/overview/index.ts

/* harmony default export */ var organisms_page_overview = (overview);

// EXTERNAL MODULE: ./src/js/components/organisms-page/overview-ubr/overview-ubr.vue.html
var overview_ubr_vue = __webpack_require__(67);
var overview_ubr_vue_default = /*#__PURE__*/__webpack_require__.n(overview_ubr_vue);

// CONCATENATED MODULE: ./src/js/components/organisms-page/overview-ubr/overview-ubr.ts
var overview_ubr_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var overview_ubr_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let overview_ubr_OverviewUBR = class OverviewUBR extends external_vue_property_decorator_["Vue"] {
};
overview_ubr_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: true }),
    overview_ubr_metadata("design:type", Object)
], overview_ubr_OverviewUBR.prototype, "title", void 0);
overview_ubr_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: false }),
    overview_ubr_metadata("design:type", Object)
], overview_ubr_OverviewUBR.prototype, "subtitle", void 0);
overview_ubr_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Array, required: true }),
    overview_ubr_metadata("design:type", Object)
], overview_ubr_OverviewUBR.prototype, "items", void 0);
overview_ubr_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Object, required: false }),
    overview_ubr_metadata("design:type", Object)
], overview_ubr_OverviewUBR.prototype, "ctas", void 0);
overview_ubr_OverviewUBR = overview_ubr_decorate([
    overview_ubr_vue_default.a,
    Object(external_vue_property_decorator_["Component"])({
        name: 'overview-ubr',
    })
], overview_ubr_OverviewUBR);
/* harmony default export */ var overview_ubr = (overview_ubr_OverviewUBR);

// CONCATENATED MODULE: ./src/js/components/organisms-page/overview-ubr/index.ts

/* harmony default export */ var organisms_page_overview_ubr = (overview_ubr);

// EXTERNAL MODULE: ./src/js/components/organisms-page/content-general/content-general.vue.html
var content_general_vue = __webpack_require__(68);
var content_general_vue_default = /*#__PURE__*/__webpack_require__.n(content_general_vue);

// CONCATENATED MODULE: ./src/js/components/organisms-page/content-general/content-general.ts
var content_general_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var content_general_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let content_general_GeneralContent = class GeneralContent extends external_vue_property_decorator_["Vue"] {
    getClassNames(type) {
        return {
            ContentButton: 'content-general__button button',
            ContentLink: 'content-general__link link link--medium',
            YoutubeLink: 'content-general__link link link--medium',
        }[type] || '';
    }
};
content_general_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: true }),
    content_general_metadata("design:type", Object)
], content_general_GeneralContent.prototype, "title", void 0);
content_general_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: true }),
    content_general_metadata("design:type", Object)
], content_general_GeneralContent.prototype, "description", void 0);
content_general_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Object }),
    content_general_metadata("design:type", Object)
], content_general_GeneralContent.prototype, "cta", void 0);
content_general_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Object }),
    content_general_metadata("design:type", Object)
], content_general_GeneralContent.prototype, "image", void 0);
content_general_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Boolean, required: true }),
    content_general_metadata("design:type", Object)
], content_general_GeneralContent.prototype, "reversed", void 0);
content_general_GeneralContent = content_general_decorate([
    content_general_vue_default.a,
    Object(external_vue_property_decorator_["Component"])({
        name: 'ContentGeneral',
    })
], content_general_GeneralContent);
/* harmony default export */ var content_general = (content_general_GeneralContent);

// CONCATENATED MODULE: ./src/js/components/organisms-page/content-general/index.js

/* harmony default export */ var organisms_page_content_general = (content_general);

// CONCATENATED MODULE: ./src/js/components/organisms-page/content-cover/content-cover.ts
var content_cover_decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var content_cover_metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let content_cover_GeneralContent = class GeneralContent extends external_vue_property_decorator_["Vue"] {
    getClassNames(type) {
        return {
            ContentButton: 'content-cover__button button',
            ContentLink: 'content-cover__link link link--medium',
            YoutubeLink: 'content-cover__link link link--medium',
        }[type] || '';
    }
};
content_cover_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: true }),
    content_cover_metadata("design:type", Object)
], content_cover_GeneralContent.prototype, "title", void 0);
content_cover_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: String, required: true }),
    content_cover_metadata("design:type", Object)
], content_cover_GeneralContent.prototype, "description", void 0);
content_cover_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Object }),
    content_cover_metadata("design:type", Object)
], content_cover_GeneralContent.prototype, "cta", void 0);
content_cover_decorate([
    Object(external_vue_property_decorator_["Prop"])({ type: Object }),
    content_cover_metadata("design:type", Object)
], content_cover_GeneralContent.prototype, "image", void 0);
content_cover_GeneralContent = content_cover_decorate([
    Object(external_vue_property_decorator_["Component"])({
        name: 'ContentCover',
        template: __webpack_require__(95),
    })
], content_cover_GeneralContent);
/* harmony default export */ var content_cover = (content_cover_GeneralContent);

// CONCATENATED MODULE: ./src/js/components/organisms-page/content-cover/index.js

/* harmony default export */ var organisms_page_content_cover = (content_cover);

// CONCATENATED MODULE: ./src/js/components/organisms-page/__LEGACY__general-content/general-content.js
/* harmony default export */ var general_content = ({
    name: 'general-content',
    template: __webpack_require__(96),
    props: {
        title: {
            type: String,
            required: true,
        },
        text: {
            type: Array,
            required: true,
            default: () => [],
        },
        reversed: {
            type: Boolean,
            default: false,
        },
        contentLink: {
            type: Object,
        },
        image: {
            type: Object,
        },
    },
});

// CONCATENATED MODULE: ./src/js/components/organisms-page/__LEGACY__general-content/index.js

/* harmony default export */ var _LEGACY_general_content = (general_content);

// CONCATENATED MODULE: ./src/js/components/organisms-page/__LEGACY__hero-product/hero-product.js
/* harmony default export */ var _LEGACY_hero_product_hero_product = ({
    name: 'legacy-hero-product',
    template: __webpack_require__(97),
    props: {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        link: {
            type: Array,
            required: false,
        },
        image: {
            type: Array,
            required: true,
        },
        materials: {
            type: Array,
            required: true,
        },
        documents: {
            type: Array,
            required: false,
        },
        labels: {
            type: Object,
            required: true,
        },
    },
});

// CONCATENATED MODULE: ./src/js/components/organisms-page/__LEGACY__hero-product/index.js

/* harmony default export */ var _LEGACY_hero_product = (_LEGACY_hero_product_hero_product);

// CONCATENATED MODULE: ./src/js/components/organisms-page/index.js

























// CONCATENATED MODULE: ./src/js/components/index.js




/* harmony default export */ var components = (Object.assign({}, atoms_namespaceObject, molecules_namespaceObject, organisms_namespaceObject, organisms_page_namespaceObject));

// CONCATENATED MODULE: ./src/js/directives/size-emitter.ts



const viewportUtil = new viewport();
function SizeHandlerFactory(binding, vnode) {
    return () => {
        if (!vnode || !vnode.context) {
            return;
        }
        const height = vnode.elm.offsetHeight;
        if (vnode.context.__sizeEmitterHeight !== height) {
            public_event_service.emit('size', { element: binding.value, size: height });
            // eslint-disable-next-line no-param-reassign
            vnode.context.__sizeEmitterHeight = height;
        }
    };
}
class size_emitter_SizeEmitter {
    constructor() {
        this.name = 'SizeEmitter';
    }
    bind(el, binding, vnode) {
        if (!vnode || !vnode.context) {
            return;
        }
        // eslint-disable-next-line no-param-reassign
        vnode.context.sizeHandler = SizeHandlerFactory(binding, vnode);
        vnode.context.$on('emit-size', () => {
            if (!vnode.context) {
                return;
            }
            vnode.context.sizeHandler();
        });
        viewportUtil.addResizeHandler(debounce_default()(vnode.context.sizeHandler, 50));
        viewportUtil.addScrollHandler(debounce_default()(vnode.context.sizeHandler, 50));
        el.addEventListener('transitionend', debounce_default()(vnode.context.sizeHandler, 50));
        vnode.context.sizeHandler();
    }
    static inserted(el, binding, vnode) {
        if (!vnode.context) {
            return;
        }
        debounce_default()(vnode.context.sizeHandler, 50);
    }
    static update(el, binding, vnode) {
        if (!vnode.context) {
            return;
        }
        debounce_default()(vnode.context.sizeHandler, 50);
    }
    static componentUpdated(el, binding, vnode) {
        if (!vnode.context) {
            return;
        }
        debounce_default()(vnode.context.sizeHandler, 50);
    }
    unbind(el, binding, vnode) {
        if (this && this.$root) {
            this.$root.$emit('size', { element: binding.value, size: 0 });
        }
        if (!vnode.context) {
            return;
        }
        viewportUtil.removeResizeHandler(vnode.context.sizeHandler);
        viewportUtil.removeScrollHandler(vnode.context.sizeHandler);
    }
}

// CONCATENATED MODULE: ./src/js/directives/index.ts


// EXTERNAL MODULE: ./src/scss/utilities/_all.scss
var _all = __webpack_require__(71);

// CONCATENATED MODULE: ./src/js/utils/text-utils.js
class TextUtils {
    static htmlDecode(input) {
        const e = document.createElement('div');
        e.innerHTML = input;
        return e.childNodes.length === 0 ? '' : e.childNodes[0].nodeValue;
    }
}
/* harmony default export */ var text_utils = (TextUtils);

// CONCATENATED MODULE: ./src/js/legacy.ts
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registry", function() { return registry; });
/* concated harmony reexport Defaults */__webpack_require__.d(__webpack_exports__, "Defaults", function() { return defaults; });
/* concated harmony reexport Arithmetic */__webpack_require__.d(__webpack_exports__, "Arithmetic", function() { return arithmetic; });
/* concated harmony reexport BrowserCapabilities */__webpack_require__.d(__webpack_exports__, "BrowserCapabilities", function() { return browser_capabilities; });
/* concated harmony reexport TextUtils */__webpack_require__.d(__webpack_exports__, "TextUtils", function() { return text_utils; });
/* concated harmony reexport ViewportUtility */__webpack_require__.d(__webpack_exports__, "ViewportUtility", function() { return viewport; });
/* concated harmony reexport PublicEventService */__webpack_require__.d(__webpack_exports__, "PublicEventService", function() { return public_event_service; });
// >>> ordering of these imports matters





// <<< ordering of these imports matters
const registry = new component_registry();
Object.keys(components).forEach((c) => {
    registry.registerComponent(components[c]);
});
Object.keys(directives_namespaceObject).forEach((d) => {
    registry.registerDirective(new directives_namespaceObject[d]);
});









/***/ })
/******/ ])});;
//# sourceMappingURL=legacy.js.map