/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/awesome-notifications/dist/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/awesome-notifications/dist/index.js ***!
  \**********************************************************/
/***/ ((module) => {

!function(t,e){ true?module.exports=e():0}(self,(function(){return(()=>{"use strict";var t={d:(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},o:(t,e)=>Object.prototype.hasOwnProperty.call(t,e),r:t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}},e={};function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function r(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}t.r(e),t.d(e,{default:()=>B});var i={maxNotifications:10,animationDuration:300,position:"bottom-right",labels:{tip:"Tip",info:"Info",success:"Success",warning:"Attention",alert:"Error",async:"Loading",confirm:"Confirmation required",confirmOk:"OK",confirmCancel:"Cancel"},icons:{tip:"question-circle",info:"info-circle",success:"check-circle",warning:"exclamation-circle",alert:"exclamation-triangle",async:"cog fa-spin",confirm:"exclamation-triangle",prefix:"<i class='fa fas fa-fw fa-",suffix:"'></i>",enabled:!0},replacements:{tip:null,info:null,success:null,warning:null,alert:null,async:null,"async-block":null,modal:null,confirm:null,general:{"<script>":"","<\/script>":""}},messages:{tip:"",info:"",success:"Action has been succeeded",warning:"",alert:"Action has been failed",confirm:"This action can't be undone. Continue?",async:"Please, wait...","async-block":"Loading"},formatError:function(t){if(t.response){if(!t.response.data)return"500 API Server Error";if(t.response.data.errors)return t.response.data.errors.map((function(t){return t.detail})).join("<br>");if(t.response.statusText)return"".concat(t.response.status," ").concat(t.response.statusText,": ").concat(t.response.data)}return t.message?t.message:t},durations:{global:5e3,success:null,info:null,tip:null,warning:null,alert:null},minDurations:{async:1e3,"async-block":1e3}},a=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i;o(this,t),Object.assign(this,this.defaultsDeep(n,e))}var e,a;return e=t,a=[{key:"icon",value:function(t){return this.icons.enabled?"".concat(this.icons.prefix).concat(this.icons[t]).concat(this.icons.suffix):""}},{key:"label",value:function(t){return this.labels[t]}},{key:"duration",value:function(t){var e=this.durations[t];return null===e?this.durations.global:e}},{key:"toSecs",value:function(t){return"".concat(t/1e3,"s")}},{key:"applyReplacements",value:function(t,e){if(!t)return this.messages[e]||"";for(var n=0,o=["general",e];n<o.length;n++){var r=o[n];if(this.replacements[r])for(var i in this.replacements[r])t=t.replace(i,this.replacements[r][i])}return t}},{key:"override",value:function(e){return e?new t(e,this):this}},{key:"defaultsDeep",value:function(t,e){var o={};for(var r in t)e.hasOwnProperty(r)?o[r]="object"===n(t[r])&&null!==t[r]?this.defaultsDeep(t[r],e[r]):e[r]:o[r]=t[r];return o}}],a&&r(e.prototype,a),t}(),c="awn",s={popup:"".concat(c,"-popup"),toast:"".concat(c,"-toast"),btn:"".concat(c,"-btn"),confirm:"".concat(c,"-confirm")},u={prefix:s.toast,klass:{label:"".concat(s.toast,"-label"),content:"".concat(s.toast,"-content"),icon:"".concat(s.toast,"-icon"),progressBar:"".concat(s.toast,"-progress-bar"),progressBarPause:"".concat(s.toast,"-progress-bar-paused")},ids:{container:"".concat(s.toast,"-container")}},l={prefix:s.popup,klass:{buttons:"".concat(c,"-buttons"),button:s.btn,successBtn:"".concat(s.btn,"-success"),cancelBtn:"".concat(s.btn,"-cancel"),title:"".concat(s.popup,"-title"),body:"".concat(s.popup,"-body"),content:"".concat(s.popup,"-content"),dotAnimation:"".concat(s.popup,"-loading-dots")},ids:{wrapper:"".concat(s.popup,"-wrapper"),confirmOk:"".concat(s.confirm,"-ok"),confirmCancel:"".concat(s.confirm,"-cancel")}},f={klass:{hiding:"".concat(c,"-hiding")},lib:c};function p(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var d=function(){function t(e,n,o,r,i){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.newNode=document.createElement("div"),n&&(this.newNode.id=n),o&&(this.newNode.className=o),r&&(this.newNode.style.cssText=r),this.parent=e,this.options=i}var e,n;return e=t,n=[{key:"beforeInsert",value:function(){}},{key:"afterInsert",value:function(){}},{key:"insert",value:function(){return this.beforeInsert(),this.el=this.parent.appendChild(this.newNode),this.afterInsert(),this}},{key:"replace",value:function(t){var e=this;if(this.getElement())return this.beforeDelete().then((function(){return e.updateType(t.type),e.parent.replaceChild(t.newNode,e.el),e.el=e.getElement(t.newNode),e.afterInsert(),e}))}},{key:"beforeDelete",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.el,n=0;return this.start&&(n=this.options.minDurations[this.type]+this.start-Date.now())<0&&(n=0),new Promise((function(o){setTimeout((function(){e.classList.add(f.klass.hiding),setTimeout(o,t.options.animationDuration)}),n)}))}},{key:"delete",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.el;return this.getElement(e)?this.beforeDelete(e).then((function(){e.remove(),t.afterDelete()})):null}},{key:"afterDelete",value:function(){}},{key:"getElement",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.el;return t?document.getElementById(t.id):null}},{key:"addEvent",value:function(t,e){this.el.addEventListener(t,e)}},{key:"toggleClass",value:function(t){this.el.classList.toggle(t)}},{key:"updateType",value:function(t){this.type=t,this.duration=this.options.duration(this.type)}}],n&&p(e.prototype,n),t}();function y(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var h=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.callback=e,this.remaining=n,this.resume()}var e,n;return e=t,(n=[{key:"pause",value:function(){this.paused=!0,window.clearTimeout(this.timerId),this.remaining-=new Date-this.start}},{key:"resume",value:function(){var t=this;this.paused=!1,this.start=new Date,window.clearTimeout(this.timerId),this.timerId=window.setTimeout((function(){window.clearTimeout(t.timerId),t.callback()}),this.remaining)}},{key:"toggle",value:function(){this.paused?this.resume():this.pause()}}])&&y(e.prototype,n),t}();function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function v(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function b(t,e){return b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},b(t,e)}function k(t,e){if(e&&("object"===m(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function g(t){return g=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},g(t)}var w=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&b(t,e)}(a,t);var e,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=g(o);if(r){var n=g(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return k(this,t)});function a(t,e,n,o){var r;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,a),(r=i.call(this,o,"".concat(u.prefix,"-").concat(Math.floor(Date.now()-100*Math.random())),"".concat(u.prefix," ").concat(u.prefix,"-").concat(e),"animation-duration: ".concat(n.toSecs(n.animationDuration),";"),n)).updateType(e),r.setInnerHtml(t),r}return e=a,n=[{key:"setInnerHtml",value:function(t){"alert"===this.type&&t&&(t=this.options.formatError(t)),t=this.options.applyReplacements(t,this.type),this.newNode.innerHTML='<div class="awn-toast-wrapper">'.concat(this.progressBar).concat(this.label,'<div class="').concat(u.klass.content,'">').concat(t,'</div><span class="').concat(u.klass.icon,'">').concat(this.options.icon(this.type),"</span></div>")}},{key:"beforeInsert",value:function(){var t=this;if(this.parent.childElementCount>=this.options.maxNotifications){var e=Array.from(this.parent.getElementsByClassName(u.prefix));this.delete(e.find((function(e){return!t.isDeleted(e)})))}}},{key:"afterInsert",value:function(){var t=this;if("async"==this.type)return this.start=Date.now();if(this.addEvent("click",(function(){return t.delete()})),!(this.duration<=0)){this.timer=new h((function(){return t.delete()}),this.duration);for(var e=0,n=["mouseenter","mouseleave"];e<n.length;e++){var o=n[e];this.addEvent(o,(function(){t.isDeleted()||(t.toggleClass(u.klass.progressBarPause),t.timer.toggle())}))}}}},{key:"isDeleted",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.el;return t.classList.contains(f.klass.hiding)}},{key:"progressBar",get:function(){return this.duration<=0||"async"===this.type?"":"<div class='".concat(u.klass.progressBar,"' style=\"animation-duration:").concat(this.options.toSecs(this.duration),';"></div>')}},{key:"label",get:function(){return'<b class="'.concat(u.klass.label,'">').concat(this.options.label(this.type),"</b>")}}],n&&v(e.prototype,n),a}(d);function O(t){return O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},O(t)}function T(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function E(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function _(t,e){return _=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},_(t,e)}function S(t,e){if(e&&("object"===O(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function j(t){return j=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},j(t)}var P=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_(t,e)}(a,t);var e,n,o,r,i=(o=a,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=j(o);if(r){var n=j(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return S(this,t)});function a(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"modal",o=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,c=arguments.length>4?arguments[4]:void 0;T(this,a);var s="animation-duration: ".concat(o.toSecs(o.animationDuration),";");return(e=i.call(this,document.body,l.ids.wrapper,null,s,o))[l.ids.confirmOk]=r,e[l.ids.confirmCancel]=c,e.className="".concat(l.prefix,"-").concat(n),["confirm","async-block","modal"].includes(n)||(n="modal"),e.updateType(n),e.setInnerHtml(t),e.insert(),e}return e=a,(n=[{key:"setInnerHtml",value:function(t){var e=this.options.applyReplacements(t,this.type);switch(this.type){case"confirm":var n=["<button class='".concat(l.klass.button," ").concat(l.klass.successBtn,"'id='").concat(l.ids.confirmOk,"'>").concat(this.options.labels.confirmOk,"</button>")];!1!==this[l.ids.confirmCancel]&&n.push("<button class='".concat(l.klass.button," ").concat(l.klass.cancelBtn,"'id='").concat(l.ids.confirmCancel,"'>").concat(this.options.labels.confirmCancel,"</button>")),e="".concat(this.options.icon(this.type),"<div class='").concat(l.klass.title,"'>").concat(this.options.label(this.type),'</div><div class="').concat(l.klass.content,'">').concat(e,"</div><div class='").concat(l.klass.buttons," ").concat(l.klass.buttons,"-").concat(n.length,"'>").concat(n.join(""),"</div>");break;case"async-block":e="".concat(e,'<div class="').concat(l.klass.dotAnimation,'"></div>')}this.newNode.innerHTML='<div class="'.concat(l.klass.body," ").concat(this.className,'">').concat(e,"</div>")}},{key:"keyupListener",value:function(t){if("async-block"===this.type)return t.preventDefault();switch(t.code){case"Escape":t.preventDefault(),this.delete();case"Tab":if(t.preventDefault(),"confirm"!==this.type||!1===this[l.ids.confirmCancel])return!0;var e=this.okBtn;t.shiftKey?document.activeElement.id==l.ids.confirmOk&&(e=this.cancelBtn):document.activeElement.id!==l.ids.confirmCancel&&(e=this.cancelBtn),e.focus()}}},{key:"afterInsert",value:function(){var t=this;switch(this.listener=function(e){return t.keyupListener(e)},window.addEventListener("keydown",this.listener),this.type){case"async-block":this.start=Date.now();break;case"confirm":this.okBtn.focus(),this.addEvent("click",(function(e){if("BUTTON"!==e.target.nodeName)return!1;t.delete(),t[e.target.id]&&t[e.target.id]()}));break;default:document.activeElement.blur(),this.addEvent("click",(function(e){e.target.id===t.newNode.id&&t.delete()}))}}},{key:"afterDelete",value:function(){window.removeEventListener("keydown",this.listener)}},{key:"okBtn",get:function(){return document.getElementById(l.ids.confirmOk)}},{key:"cancelBtn",get:function(){return document.getElementById(l.ids.confirmCancel)}}])&&E(e.prototype,n),a}(d);function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function D(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function x(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}var B=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};D(this,t),this.options=new a(e)}var e,n;return e=t,(n=[{key:"tip",value:function(t,e){return this._addToast(t,"tip",e).el}},{key:"info",value:function(t,e){return this._addToast(t,"info",e).el}},{key:"success",value:function(t,e){return this._addToast(t,"success",e).el}},{key:"warning",value:function(t,e){return this._addToast(t,"warning",e).el}},{key:"alert",value:function(t,e){return this._addToast(t,"alert",e).el}},{key:"async",value:function(t,e,n,o,r){var i=this._addToast(o,"async",r);return this._afterAsync(t,e,n,r,i)}},{key:"confirm",value:function(t,e,n,o){return this._addPopup(t,"confirm",o,e,n)}},{key:"asyncBlock",value:function(t,e,n,o,r){var i=this._addPopup(o,"async-block",r);return this._afterAsync(t,e,n,r,i)}},{key:"modal",value:function(t,e,n){return this._addPopup(t,e,n)}},{key:"closeToasts",value:function(){for(var t=this.container;t.firstChild;)t.removeChild(t.firstChild)}},{key:"_addPopup",value:function(t,e,n,o,r){return new P(t,e,this.options.override(n),o,r)}},{key:"_addToast",value:function(t,e,n,o){n=this.options.override(n);var r=new w(t,e,n,this.container);return o?o instanceof P?o.delete().then((function(){return r.insert()})):o.replace(r):r.insert()}},{key:"_afterAsync",value:function(t,e,n,o,r){return t.then(this._responseHandler(e,"success",o,r),this._responseHandler(n,"alert",o,r))}},{key:"_responseHandler",value:function(t,e,n,o){var r=this;return function(i){switch(C(t)){case"undefined":case"string":var a="alert"===e?t||i:t;r._addToast(a,e,n,o);break;default:o.delete().then((function(){t&&t(i)}))}}}},{key:"_createContainer",value:function(){return new d(document.body,u.ids.container,"awn-".concat(this.options.position)).insert().el}},{key:"container",get:function(){return document.getElementById(u.ids.container)||this._createContainer()}}])&&x(e.prototype,n),t}();return e})()}));

/***/ }),

/***/ "./assets/js/main.js":
/*!***************************!*\
  !*** ./assets/js/main.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _partials_GeoAjaxRender__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partials/GeoAjaxRender */ "./assets/js/partials/GeoAjaxRender.js");
/* harmony import */ var _partials_GeoCheckState__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./partials/GeoCheckState */ "./assets/js/partials/GeoCheckState.js");
/* harmony import */ var _partials_GeoCheckState__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_partials_GeoCheckState__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./assets/js/partials/GeoAjaxRender.js":
/*!*********************************************!*\
  !*** ./assets/js/partials/GeoAjaxRender.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var awesome_notifications__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! awesome-notifications */ "./node_modules/awesome-notifications/dist/index.js");
/* harmony import */ var awesome_notifications__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(awesome_notifications__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ip_regex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ip-regex */ "./node_modules/ip-regex/index.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }


var options = {
  position: "bottom-right",
  icons: {
    enabled: false
  },
  maxNotifications: 1
};
function removeDuplicates() {
  var input = document.querySelector('.ipContent');
  var ips = input.value.trim().split(/\s+/);
  var uniqueIps = _toConsumableArray(new Set(ips)).join(' ');
  input.value = uniqueIps;
}
function validateIpsFields() {
  var tables = document.querySelectorAll('.tableContainer');
  var input = document.querySelector('.ipContent');
  var errorDiv = document.querySelector('.error-notify');
  var ips = input.value.trim();
  var ipArray = ips.split(/\s+/);
  errorDiv.classList.add('hidden');
  if (ipArray.length > 30) {
    var submitButton = document.querySelector('.ipSubmitBtn');

    // check if the button should still be disabled based on stored timestamp
    var disabledUntil = localStorage.getItem('submitBtnDisabledUntil');
    if (disabledUntil && new Date().getTime() < disabledUntil) {
      submitButton.disabled = true;
      return;
    }
    errorDiv.classList.remove('hidden');
    errorDiv.textContent = 'Error: The maximum number of IPs is either greater than 30 or in an invalid format. Please wait for 1 minute.';
    tables.forEach(function (table) {
      return table.classList.add('hidden');
    });
    // disable the button and store the current timestamp
    submitButton.disabled = true;
    localStorage.setItem('submitBtnDisabledUntil', new Date().getTime() + 60000);
    setTimeout(function () {
      submitButton.disabled = false;
      localStorage.removeItem('submitBtnDisabledUntil');
    }, 60000); // 20 seconds

    return;
  }
  if (!(0,ip_regex__WEBPACK_IMPORTED_MODULE_1__["default"])({
    exact: true
  }).test(ips)) {
    tables.forEach(function (table) {
      return table.classList.add('hidden');
    });
    return;
  }
}
document.addEventListener('DOMContentLoaded', function () {
  var submitBtn = document.querySelector('.ipSubmitBtn');
  var tables = document.querySelectorAll('.tableContainer');
  var input = document.querySelector('.ipContent');
  submitBtn.addEventListener('click', function (event) {
    event.preventDefault();
    removeDuplicates();
    validateIpsFields();
    var ips = input.value.trim();
    var ipArray = ips.split(/\s+/);
    if (ipArray.length < 30) {
      var xhr = new XMLHttpRequest();
      xhr.open('POST', '../source/inc/GeoRenderData.php');
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.onload = function () {
        if (xhr.status === 200) {
          var responseText = xhr.responseText;
          if (responseText.includes('Fatal Error') || responseText.includes('Uncaught')) {
            tables.forEach(function (table) {
              return table.classList.add('hidden');
            });
            new (awesome_notifications__WEBPACK_IMPORTED_MODULE_0___default())().alert('Something went wrong. Please check the IPs you have typed and ensure there are no extra spaces between them.', options);
          } else {
            tables.forEach(function (table) {
              return table.classList.remove('hidden');
            });
            document.querySelector('.tableContainer').innerHTML = responseText;
            new (awesome_notifications__WEBPACK_IMPORTED_MODULE_0___default())().success('Data has been successfully generated.', options);
          }
        } else {
          console.error("Error: ".concat(xhr.status));
        }
      };
      xhr.send("ips=".concat(encodeURIComponent(ips)));
    }
  });
});

/***/ }),

/***/ "./assets/js/partials/GeoCheckState.js":
/*!*********************************************!*\
  !*** ./assets/js/partials/GeoCheckState.js ***!
  \*********************************************/
/***/ (() => {

document.addEventListener('DOMContentLoaded', function () {
  // check if the button should still be disabled based on stored timestamp
  var submitButton = document.querySelector('.ipSubmitBtn');
  var disabledUntil = localStorage.getItem('submitBtnDisabledUntil');
  if (disabledUntil && new Date().getTime() < disabledUntil) {
    var timeLeft = Math.round((disabledUntil - new Date().getTime()) / 1000);
    submitButton.disabled = true;
    submitButton.innerText = "Submit (".concat(timeLeft, "s left)");
    var intervalId = setInterval(function () {
      var currentTime = new Date().getTime();
      var timeLeft = Math.round((disabledUntil - currentTime) / 1000);
      if (timeLeft <= 0) {
        clearInterval(intervalId);
        submitButton.disabled = false;
        submitButton.innerText = 'Submit';
      } else {
        submitButton.innerText = "Submit (".concat(timeLeft, "s left)");
      }
    }, 1000);
    return;
  }
});

/***/ }),

/***/ "./assets/scss/main.scss":
/*!*******************************!*\
  !*** ./assets/scss/main.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/ip-regex/index.js":
/*!****************************************!*\
  !*** ./node_modules/ip-regex/index.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const word = '[a-fA-F\\d:]';

const boundry = options => options && options.includeBoundaries
	? `(?:(?<=\\s|^)(?=${word})|(?<=${word})(?=\\s|$))`
	: '';

const v4 = '(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}';

const v6segment = '[a-fA-F\\d]{1,4}';

const v6 = `
(?:
(?:${v6segment}:){7}(?:${v6segment}|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:${v6segment}:){6}(?:${v4}|:${v6segment}|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:${v6segment}:){5}(?::${v4}|(?::${v6segment}){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:${v6segment}:){4}(?:(?::${v6segment}){0,1}:${v4}|(?::${v6segment}){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:${v6segment}:){3}(?:(?::${v6segment}){0,2}:${v4}|(?::${v6segment}){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:${v6segment}:){2}(?:(?::${v6segment}){0,3}:${v4}|(?::${v6segment}){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:${v6segment}:){1}(?:(?::${v6segment}){0,4}:${v4}|(?::${v6segment}){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::${v6segment}){0,5}:${v4}|(?::${v6segment}){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`.replace(/\s*\/\/.*$/gm, '').replace(/\n/g, '').trim();

// Pre-compile only the exact regexes because adding a global flag make regexes stateful
const v46Exact = new RegExp(`(?:^${v4}$)|(?:^${v6}$)`);
const v4exact = new RegExp(`^${v4}$`);
const v6exact = new RegExp(`^${v6}$`);

const ipRegex = options => options && options.exact
	? v46Exact
	: new RegExp(`(?:${boundry(options)}${v4}${boundry(options)})|(?:${boundry(options)}${v6}${boundry(options)})`, 'g');

ipRegex.v4 = options => options && options.exact ? v4exact : new RegExp(`${boundry(options)}${v4}${boundry(options)}`, 'g');
ipRegex.v6 = options => options && options.exact ? v6exact : new RegExp(`${boundry(options)}${v6}${boundry(options)}`, 'g');

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ipRegex);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/main": 0,
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["main"], () => (__webpack_require__("./assets/js/main.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["main"], () => (__webpack_require__("./assets/scss/main.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;