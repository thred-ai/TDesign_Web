(self["webpackChunkthred_web"] = self["webpackChunkthred_web"] || []).push([["src_app_landing_landing_module_ts"],{

/***/ 68096:
/*!**************************************!*\
  !*** ./node_modules/aos/dist/aos.js ***!
  \**************************************/
/***/ (function(module) {

!function(e,t){ true?module.exports=t():0}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},r=n(1),a=(o(r),n(6)),u=o(a),c=n(7),s=o(c),f=n(8),d=o(f),l=n(9),p=o(l),m=n(10),b=o(m),v=n(11),y=o(v),g=n(14),h=o(g),w=[],k=!1,x={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},j=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(k=!0),k)return w=(0,y.default)(w,x),(0,b.default)(w,x.once),w},O=function(){w=(0,h.default)(),j()},M=function(){w.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})},S=function(e){return e===!0||"mobile"===e&&p.default.mobile()||"phone"===e&&p.default.phone()||"tablet"===e&&p.default.tablet()||"function"==typeof e&&e()===!0},_=function(e){x=i(x,e),w=(0,h.default)();var t=document.all&&!window.atob;return S(x.disable)||t?M():(x.disableMutationObserver||d.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),x.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",x.easing),document.querySelector("body").setAttribute("data-aos-duration",x.duration),document.querySelector("body").setAttribute("data-aos-delay",x.delay),"DOMContentLoaded"===x.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?j(!0):"load"===x.startEvent?window.addEventListener(x.startEvent,function(){j(!0)}):document.addEventListener(x.startEvent,function(){j(!0)}),window.addEventListener("resize",(0,s.default)(j,x.debounceDelay,!0)),window.addEventListener("orientationchange",(0,s.default)(j,x.debounceDelay,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,b.default)(w,x.once)},x.throttleDelay)),x.disableMutationObserver||d.default.ready("[data-aos]",O),w)};e.exports={init:_,refresh:j,refreshHard:O}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function o(t){var n=b,o=v;return b=v=void 0,k=t,g=e.apply(o,n)}function r(e){return k=e,h=setTimeout(f,t),M?o(e):g}function a(e){var n=e-w,o=e-k,i=t-n;return S?j(i,y-o):i}function c(e){var n=e-w,o=e-k;return void 0===w||n>=t||n<0||S&&o>=y}function f(){var e=O();return c(e)?d(e):void(h=setTimeout(f,a(e)))}function d(e){return h=void 0,_&&b?o(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),k=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(O())}function m(){var e=O(),n=c(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(f,t),o(w)}return void 0===h&&(h=setTimeout(f,t)),g}var b,v,y,g,h,w,k=0,M=!1,S=!1,_=!0;if("function"!=typeof e)throw new TypeError(s);return t=u(t)||0,i(n)&&(M=!!n.leading,S="maxWait"in n,y=S?x(u(n.maxWait)||0,t):y,_="trailing"in n?!!n.trailing:_),m.cancel=l,m.flush=p,m}function o(e,t,o){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(s);return i(o)&&(r="leading"in o?!!o.leading:r,a="trailing"in o?!!o.trailing:a),n(e,t,{leading:r,maxWait:t,trailing:a})}function i(e){var t="undefined"==typeof e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function r(e){return!!e&&"object"==("undefined"==typeof e?"undefined":c(e))}function a(e){return"symbol"==("undefined"==typeof e?"undefined":c(e))||r(e)&&k.call(e)==d}function u(e){if("number"==typeof e)return e;if(a(e))return f;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=m.test(e);return n||b.test(e)?v(e.slice(2),n?2:8):p.test(e)?f:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s="Expected a function",f=NaN,d="[object Symbol]",l=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,y="object"==("undefined"==typeof t?"undefined":c(t))&&t&&t.Object===Object&&t,g="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,h=y||g||Function("return this")(),w=Object.prototype,k=w.toString,x=Math.max,j=Math.min,O=function(){return h.Date.now()};e.exports=o}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=b,o=v;return b=v=void 0,O=t,g=e.apply(o,n)}function r(e){return O=e,h=setTimeout(f,t),M?i(e):g}function u(e){var n=e-w,o=e-O,i=t-n;return S?x(i,y-o):i}function s(e){var n=e-w,o=e-O;return void 0===w||n>=t||n<0||S&&o>=y}function f(){var e=j();return s(e)?d(e):void(h=setTimeout(f,u(e)))}function d(e){return h=void 0,_&&b?i(e):(b=v=void 0,g)}function l(){void 0!==h&&clearTimeout(h),O=0,b=w=v=h=void 0}function p(){return void 0===h?g:d(j())}function m(){var e=j(),n=s(e);if(b=arguments,v=this,w=e,n){if(void 0===h)return r(w);if(S)return h=setTimeout(f,t),i(w)}return void 0===h&&(h=setTimeout(f,t)),g}var b,v,y,g,h,w,O=0,M=!1,S=!1,_=!0;if("function"!=typeof e)throw new TypeError(c);return t=a(t)||0,o(n)&&(M=!!n.leading,S="maxWait"in n,y=S?k(a(n.maxWait)||0,t):y,_="trailing"in n?!!n.trailing:_),m.cancel=l,m.flush=p,m}function o(e){var t="undefined"==typeof e?"undefined":u(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==("undefined"==typeof e?"undefined":u(e))}function r(e){return"symbol"==("undefined"==typeof e?"undefined":u(e))||i(e)&&w.call(e)==f}function a(e){if("number"==typeof e)return e;if(r(e))return s;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(d,"");var n=p.test(e);return n||m.test(e)?b(e.slice(2),n?2:8):l.test(e)?s:+e}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",s=NaN,f="[object Symbol]",d=/^\s+|\s+$/g,l=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,b=parseInt,v="object"==("undefined"==typeof t?"undefined":u(t))&&t&&t.Object===Object&&t,y="object"==("undefined"==typeof self?"undefined":u(self))&&self&&self.Object===Object&&self,g=v||y||Function("return this")(),h=Object.prototype,w=h.toString,k=Math.max,x=Math.min,j=function(){return g.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e){var t=void 0,o=void 0,i=void 0;for(t=0;t<e.length;t+=1){if(o=e[t],o.dataset&&o.dataset.aos)return!0;if(i=o.children&&n(o.children))return!0}return!1}function o(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function i(){return!!o()}function r(e,t){var n=window.document,i=o(),r=new i(a);u=t,r.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function a(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),o=Array.prototype.slice.call(e.removedNodes),i=t.concat(o);if(n(i))return u()})}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){};t.default={isSupported:i,ready:r}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,a=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=function(){function e(){n(this,e)}return i(e,[{key:"phone",value:function(){var e=o();return!(!r.test(e)&&!a.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=o();return!(!u.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new s},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof o&&("false"===o||!n&&"true"!==o)&&e.node.classList.remove("aos-animate")},o=function(e,t){var o=window.pageYOffset,i=window.innerHeight;e.forEach(function(e,r){n(e,i+o,t)})};t.default=o},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(12),r=o(i),a=function(e,t){return e.forEach(function(e,n){e.node.classList.add("aos-init"),e.position=(0,r.default)(e.node,t.offset)}),e};t.default=a},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(13),r=o(i),a=function(e,t){var n=0,o=0,i=window.innerHeight,a={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(a.offset&&!isNaN(a.offset)&&(o=parseInt(a.offset)),a.anchor&&document.querySelectorAll(a.anchor)&&(e=document.querySelectorAll(a.anchor)[0]),n=(0,r.default)(e).top,a.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=i/2;break;case"bottom-center":n+=i/2+e.offsetHeight;break;case"center-center":n+=i/2+e.offsetHeight/2;break;case"top-top":n+=i;break;case"bottom-top":n+=e.offsetHeight+i;break;case"center-top":n+=e.offsetHeight/2+i}return a.anchorPlacement||a.offset||isNaN(t)||(o=t),n+o};t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,function(e){return{node:e}})};t.default=n}])});

/***/ }),

/***/ 341:
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingComponent": () => (/* binding */ LandingComponent)
/* harmony export */ });
/* harmony import */ var _Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 16304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aos */ 68096);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globals */ 37503);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _services_load_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/load.service */ 6029);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.component */ 55041);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../login/login.component */ 98458);














function LandingComponent_div_1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " We're the go-to! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Did you know Thred has a growing community of over 30,000 brands? ");
  }
}

function LandingComponent_div_1_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Download the Thred app for better design tools! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 19);
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", "assets/landing_app_preview.png", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
  }
}

function LandingComponent_div_1_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Want to maximise your margins? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Have full control over your profit margins with bulk-buying options. ");
  }
}

function LandingComponent_div_1_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Be an early bird! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Take advantage of Fast Fashion trends by launching lines 34.7x faster ");
  }
}

function LandingComponent_div_1_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " We got you! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Most P.O.D services lack love and branding options. We give lots of both :) ");
  }
}

function LandingComponent_div_1_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " E-commerce has never been easier. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " An all in one store builder + inventory and customer fulfillment centre. That\u2019s Thred! ");
  }
}

function LandingComponent_div_1_div_32_h1_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h1", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "Join Thred, the world\u2019s fastest growing brand platform ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function LandingComponent_div_1_div_32_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "app-login", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("signedIn", function LandingComponent_div_1_div_32_div_3_Template_app_login_signedIn_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return ctx_r20.route($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("width", ctx_r15.myInnerHeight(), "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("isLanding", true)("affiliate", ctx_r15.affiliate);
  }
}

function LandingComponent_div_1_div_32_h1_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h1", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Welcome Back! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function LandingComponent_div_1_div_32_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function LandingComponent_div_1_div_32_div_5_Template_a_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return ctx_r22.getStarted();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "h2", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6, "View My Store");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function LandingComponent_div_1_div_32_div_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function LandingComponent_div_1_div_32_div_61_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return ctx_r24.getStarted();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "h2", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Get Started");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function LandingComponent_div_1_div_32_div_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function LandingComponent_div_1_div_32_div_62_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
      return ctx_r26.getStarted();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "h2", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "View My Store");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function LandingComponent_div_1_div_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, LandingComponent_div_1_div_32_h1_2_Template, 2, 0, "h1", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, LandingComponent_div_1_div_32_div_3_Template, 6, 4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, LandingComponent_div_1_div_32_h1_4_Template, 2, 0, "h1", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, LandingComponent_div_1_div_32_div_5_Template, 7, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "h1", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Sell online in 30 seconds");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](15, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "h1", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Direct traffic to your online store");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](24, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](25, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "h1", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "Built in Design Tools");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](34, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](35, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "h1", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, "A range of converting templates to choose from");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](44, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](46, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](47, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "h1", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54, "Full control over margins without storage costs.");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](56, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](57, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](61, LandingComponent_div_1_div_32_div_61_Template, 4, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](62, LandingComponent_div_1_div_32_div_62_Template, 4, 0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r13.signedIn == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r13.signedIn == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r13.signedIn == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r13.signedIn == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", "assets/landing_1.png", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", "assets/landing_2.png", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", "assets/landing_3.png", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", "assets/landing_4a.png", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", "assets/landing_4b.png", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", "assets/landing_5.png", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r13.signedIn == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r13.signedIn == true);
  }
}

function LandingComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "ul", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, LandingComponent_div_1_ng_template_4_Template, 3, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, LandingComponent_div_1_ng_template_9_Template, 3, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, LandingComponent_div_1_ng_template_14_Template, 3, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, LandingComponent_div_1_ng_template_19_Template, 3, 0, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](21, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, LandingComponent_div_1_ng_template_24_Template, 3, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](26, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, LandingComponent_div_1_ng_template_29_Template, 3, 0, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](31, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](32, LandingComponent_div_1_div_32_Template, 63, 12, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](5);

    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](10);

    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](15);

    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](20);

    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](25);

    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](30);

    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngbTooltip", _r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", "assets/logo_transparent.png", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngbTooltip", _r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", "assets/logo_transparent.png", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngbTooltip", _r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", "assets/logo_transparent.png", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngbTooltip", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", "assets/logo_transparent.png", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngbTooltip", _r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", "assets/logo_transparent.png", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngbTooltip", _r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", "assets/logo_transparent.png", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.signedIn != undefined && ctx_r0.affiliate != undefined);
  }
}

class LandingComponent {
  constructor(loadService, platformID, _router, router, rootComponent, titleService, metaService, cdr) {
    this.loadService = loadService;
    this.platformID = platformID;
    this._router = _router;
    this.router = router;
    this.rootComponent = rootComponent;
    this.titleService = titleService;
    this.metaService = metaService;
    this.cdr = cdr;
    this.signedIn = undefined;
    this.affiliate = undefined;
  }

  ngOnInit() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.isPlatformBrowser)(this.platformID)) {
      aos__WEBPACK_IMPORTED_MODULE_1__.init();
      this.isSignedIn();
      this.router.queryParams.subscribe(params => {
        var _a;

        console.log(params); // { orderby: "price" }

        this.affiliate = (_a = params.affiliate) !== null && _a !== void 0 ? _a : "";
        this.cdr.detectChanges();
        console.log(this.affiliate);
      });
    }

    this.addTags("Thred - Get Started", "https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Resources%2Flanding_page.png?alt=media", "Start your store in 30 seconds, free.", "shopmythred.com");
  }

  isBrowser() {
    return (0,_angular_common__WEBPACK_IMPORTED_MODULE_7__.isPlatformBrowser)(this.platformID);
  }

  isSignedIn() {
    var _this = this;

    return (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var _a;

      if ((yield _this.loadService.authenticated()) && !((_a = yield _this.loadService.isLoggedIn()) === null || _a === void 0 ? void 0 : _a.isAnonymous)) {
        _this.signedIn = true;
      } else {
        _this.signedIn = false;
      }

      _this.cdr.detectChanges();
    })();
  }

  addTags(title, imgUrl, description, url) {
    this.metaService.updateTag({
      property: 'og:title',
      content: title
    });
    this.metaService.updateTag({
      property: 'og:image',
      content: imgUrl
    });
    this.metaService.updateTag({
      property: 'og:url',
      content: url
    });
    this.metaService.updateTag({
      property: 'og:description',
      content: description
    });
    this.titleService.setTitle(title);
    this.metaService.updateTag({
      property: 'description',
      content: description
    });
  }

  route(signedIn) {
    var _this2 = this;

    return (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var _a;

      if (signedIn) {
        if ((yield _this2.loadService.authenticated()) && !((_a = yield _this2.loadService.isLoggedIn()) === null || _a === void 0 ? void 0 : _a.isAnonymous)) {
          // this.routeToProfile()
          _this2.loadService.myCallback = () => {
            _globals__WEBPACK_IMPORTED_MODULE_2__.Globals.storeInfo = JSON.parse(JSON.stringify(_globals__WEBPACK_IMPORTED_MODULE_2__.Globals.userInfo));

            _this2.rootComponent.routeToProfile();
          };

          yield _this2.loadService.getCustomer();
        } else {
          window.location.href = "shopmythred.com/thred/home";
        }
      } else {
        window.scrollTo(0, 0);
      }
    })();
  }

  myInnerHeight() {
    let height = window.screen.height;
    let width = window.screen.width;

    if (width < height) {
      console.log(window);
      return width * 0.8;
    } else {
      return height * 0.8;
    }
  }

  routeToHome() {
    this.rootComponent.routeToHome();
  }

  getStarted() {
    if (this.signedIn) {
      this.route(true);
    } else {
      window.scrollTo(0, 0);
    }
  }

}

LandingComponent.ɵfac = function LandingComponent_Factory(t) {
  return new (t || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_load_service__WEBPACK_IMPORTED_MODULE_3__.LoadService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.Meta), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef));
};

LandingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: LandingComponent,
  selectors: [["app-landing"]],
  decls: 2,
  vars: 1,
  consts: [[2, "height", "100vh", "position", "relative", "top", "-30px"], ["class", "animation-area", 4, "ngIf"], [1, "animation-area"], [1, "box-area"], ["role", "button", 1, "w-100", "h-100", 3, "ngbTooltip"], ["tipContent1", ""], [1, "bubble1", "rounded-circle", 2, "object-fit", "contain", "opacity", "0.3", "background-color", "rgb(5, 224, 97)", 3, "src"], ["tipContent2", ""], [1, "bubble2", "rounded-circle", 2, "object-fit", "contain", "opacity", "0.4", "background-color", "rgb(255, 83, 83)", 3, "src"], ["tipContent3", ""], [1, "bubble3", "rounded-circle", 2, "object-fit", "contain", "opacity", "0.6", "background-color", "rgb(231, 213, 44)", 3, "src"], ["tipContent4", ""], [1, "bubble4", "rounded-circle", 2, "object-fit", "contain", "opacity", "0.2", "background-color", "rgb(130, 93, 204)", 3, "src"], ["tipContent5", ""], [1, "bubble5", "rounded-circle", 2, "object-fit", "contain", "opacity", "0.25", "background-color", "white", 3, "src"], ["tipContent6", ""], [1, "bubble6", "rounded-circle", 2, "object-fit", "contain", "opacity", "0.45", "background-color", "rgb(60, 195, 219)", 3, "src"], ["class", "mx-0 row h-100", 4, "ngIf"], [1, "fw-bolder"], [1, "rounded", "w-100", 2, "object-fit", "contain", 3, "src"], [1, "mx-0", "row", "h-100"], [1, "row", "row-cols-1", "justify-content-center", "pb-2", "h-100", "w-100", "mx-0"], ["class", "text-center text-light fw-bolder col mt-5 mx-0 w-100", "style", "font-size: xx-large; line-height: 1.2em; text-shadow: 2px 2px 4px #42424281;", 4, "ngIf"], ["class", "col mb-5 mt-2 mx-0 h-100 w-100", 4, "ngIf"], ["data-aos", "fade-down", "data-aos-duration", "1500", "class", "text-center text-light fw-bolder col mt-5 mx-0 w-100", "style", "font-size: xx-large; line-height: 1.2em; text-shadow: 2px 2px 4px #42424281;", 4, "ngIf"], [1, "row", "row-cols-1", "justify-content-start", "pb-2", "mx-auto", "px-0", "px-sm-5", "h-100"], [1, "col", "mb-5", 2, "width", "fit-content", "max-width", "800px"], ["data-aos", "fade-up-right", "data-aos-duration", "1500", 1, "h-100", "mx-auto", "w-100", "bg-transparent"], [1, "card-body", "p-2", "pb-0"], [1, "text-center", "text-light", "px-2"], [1, "text-center"], [1, "rounded", "w-100", 2, "overflow", "hidden"], [1, "card-footer", "p-4", "pt-0", "pb-4", "border-top-0", "bg-transparent"], [1, "row", "row-cols-1", "justify-content-end", "pb-2", "mx-auto", "px-0", "px-sm-5", "h-100"], ["data-aos", "fade-up", "data-aos-duration", "1500", 1, "h-100", "mx-auto", "w-100", "bg-transparent"], ["data-aos", "fade-up", "data-aos-duration", "1500", 1, "h-100", "mx-auto", "w-100"], [1, "card-body", "p-2", "pb-0", "bg-transparent"], [1, "row", "row-cols-1", "justify-content-start", "pb-2", "px-0", "px-sm-5", "mx-auto", "h-100"], [1, "row", "row-cols-1", "justify-content-center", "pb-2", "px-0", "px-sm-5", "mx-auto", "h-100"], [1, "col", "mb-5", 2, "width", "fit-content", "max-width", "100%"], ["class", "text-center text-light", 4, "ngIf"], [1, "text-center", "text-light", "fw-bolder", "col", "mt-5", "mx-0", "w-100", 2, "font-size", "xx-large", "line-height", "1.2em", "text-shadow", "2px 2px 4px #42424281"], [1, "col", "mb-5", "mt-2", "mx-0", "h-100", "w-100"], ["data-aos", "flip-up", "data-aos-duration", "1500", 1, "h-100", "mx-auto", 2, "width", "fit-content"], [1, "rounded", "shadow-lg", 2, "overflow", "hidden"], [3, "isLanding", "affiliate", "signedIn"], ["data-aos", "fade-down", "data-aos-duration", "1500", 1, "text-center", "text-light", "fw-bolder", "col", "mt-5", "mx-0", "w-100", 2, "font-size", "xx-large", "line-height", "1.2em", "text-shadow", "2px 2px 4px #42424281"], ["data-aos", "fade-down", "data-aos-duration", "1500", 1, "h-100", "mx-auto", 2, "width", "fit-content"], [1, "text-center", "text-light"], ["role", "button", 1, "d-flex", "align-items-center", "justify-content-center", "w-100", 2, "text-decoration", "none", "color", "white", 3, "click"], [1, "px-5", "py-3", "d-flex", "align-items-center", "justify-content-center", "bg-dark", "rounded-pill", "w-100"]],
  template: function LandingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, LandingComponent_div_1_Template, 33, 13, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isBrowser());
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbTooltip, _login_login_component__WEBPACK_IMPORTED_MODULE_5__.LoginComponent],
  styles: [".animation-area[_ngcontent-%COMP%] {\n\tbackground: linear-gradient(to left, #bae2fd, #74c7ee);\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n\n}\n\nh1[_ngcontent-%COMP%]{\n    font-family: montserrat;\n    font-size: xx-large;\n    line-height: 1.2em;\n    text-shadow: 2px 2px 4px #42424281;\n}\n\n.box-area[_ngcontent-%COMP%] {\n\ttop: 0;\n    left: 0;\n    right: 0;\n}\n\n.box-area[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n\tposition: fixed;\n\tdisplay: block;\n\tlist-style: none;\n\twidth: 200px;\n    height: 200px;\n    object-fit: contain;\n\tanimation: animate 20s linear infinite;\n    bottom: -300px;\n    \n}\n\n.bubble1[_ngcontent-%COMP%]{\n    animation: rAnimate 20s linear infinite;\n    animation-delay: 0s;\n    width: 80px;\n\theight: 80px;\n}\n\n.bubble2[_ngcontent-%COMP%]{\n    animation: rAnimate 20s linear infinite;\n    animation-delay: 1.5s;\n    animation-duration: 20s;\n    width: 30px;\n\theight: 30px;\n}\n\n.bubble3[_ngcontent-%COMP%]{\n    animation: rAnimate 20s linear infinite;\n    animation-delay: 5.5s;\n    width: 100px;\n\theight: 100px;\n}\n\n.bubble4[_ngcontent-%COMP%]{\n    animation: rAnimate 20s linear infinite;\n    animation-delay: 0s;\n    animation-duration: 30s;\n    width: 150px;\n\theight: 150px;\n}\n\n.bubble5[_ngcontent-%COMP%]{\n    animation: rAnimate 20s linear infinite;\n    animation-delay: 0s;\n    width: 40px;\n\theight: 40px;\n}\n\n.bubble6[_ngcontent-%COMP%]{\n    animation: rAnimate 20s linear infinite;\n    animation-delay: 7s;\n    width: 110px;\n\theight: 110px;\n}\n\n.box-area[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1) {\n\tleft: 86%;\n\t\n\tanimation-delay: 0s;\n}\n\n.box-area[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2) {\n\tleft: 12%;\n\t\n\tanimation-delay: 1.5s;\n\tanimation-duration: 20s;\n}\n\n.box-area[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3) {\n\tleft: 70%;\n\t\n\tanimation-delay: 5.5s;\n}\n\n.box-area[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4) {\n\tleft: 42%;\n\t\n\tanimation-delay: 0s;\n\tanimation-duration: 30s;\n}\n\n.box-area[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(5) {\n\tleft: 65%;\n\t\n\tanimation-delay: 0s;\n}\n\n.box-area[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(6) {\n\tleft: 15%;\n\t\n\tanimation-delay: 7s;\n}\n\n@keyframes animate {\n\t0% {\n\t\ttransform: translateY(0);\n\t\topacity: 1;\n\t}\n\t100% {\n\t\ttransform: translateY(-800px);\n\t\topacity: 0;\n\t}\n}\n\n@keyframes rAnimate {\n\t0% {\n\t\ttransform: rotate(0deg);\n\t}\n\t100% {\n\t\ttransform: rotate(360deg);\n\t}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7Q0FDQyxzREFBc0Q7SUFDbkQsMkJBQW1CO0lBQW5CLHdCQUFtQjtJQUFuQixtQkFBbUI7O0FBRXZCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsa0NBQWtDO0FBQ3RDOztBQUNBO0NBQ0MsTUFBTTtJQUNILE9BQU87SUFDUCxRQUFRO0FBQ1o7O0FBQ0E7Q0FDQyxlQUFlO0NBQ2YsY0FBYztDQUNkLGdCQUFnQjtDQUNoQixZQUFZO0lBQ1QsYUFBYTtJQUNiLG1CQUFtQjtDQUN0QixzQ0FBc0M7SUFDbkMsY0FBYzs7QUFFbEI7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMsbUJBQW1CO0lBQ25CLFdBQVc7Q0FDZCxZQUFZO0FBQ2I7O0FBRUE7SUFDSSx1Q0FBdUM7SUFDdkMscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixXQUFXO0NBQ2QsWUFBWTtBQUNiOztBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLHFCQUFxQjtJQUNyQixZQUFZO0NBQ2YsYUFBYTtBQUNkOztBQUVBO0lBQ0ksdUNBQXVDO0lBQ3ZDLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsWUFBWTtDQUNmLGFBQWE7QUFDZDs7QUFFQTtJQUNJLHVDQUF1QztJQUN2QyxtQkFBbUI7SUFDbkIsV0FBVztDQUNkLFlBQVk7QUFDYjs7QUFFQTtJQUNJLHVDQUF1QztJQUN2QyxtQkFBbUI7SUFDbkIsWUFBWTtDQUNmLGFBQWE7QUFDZDs7QUFFQTtDQUNDLFNBQVM7O0NBRVQsbUJBQW1CO0FBQ3BCOztBQUNBO0NBQ0MsU0FBUzs7Q0FFVCxxQkFBcUI7Q0FDckIsdUJBQXVCO0FBQ3hCOztBQUNBO0NBQ0MsU0FBUzs7Q0FFVCxxQkFBcUI7QUFDdEI7O0FBQ0E7Q0FDQyxTQUFTOztDQUVULG1CQUFtQjtDQUNuQix1QkFBdUI7QUFDeEI7O0FBQ0E7Q0FDQyxTQUFTOztDQUVULG1CQUFtQjtBQUNwQjs7QUFDQTtDQUNDLFNBQVM7O0NBRVQsbUJBQW1CO0FBQ3BCOztBQUNBO0NBQ0M7RUFDQyx3QkFBd0I7RUFDeEIsVUFBVTtDQUNYO0NBQ0E7RUFDQyw2QkFBNkI7RUFDN0IsVUFBVTtDQUNYO0FBQ0Q7O0FBRUE7Q0FDQztFQUNDLHVCQUF1QjtDQUN4QjtDQUNBO0VBQ0MseUJBQXlCO0NBQzFCO0FBQ0QiLCJmaWxlIjoibGFuZGluZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uYW5pbWF0aW9uLWFyZWEge1xuXHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgI2JhZTJmZCwgIzc0YzdlZSk7XG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcblxufVxuXG5oMXtcbiAgICBmb250LWZhbWlseTogbW9udHNlcnJhdDtcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjJlbTtcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCA0cHggIzQyNDI0MjgxO1xufVxuLmJveC1hcmVhIHtcblx0dG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG59XG4uYm94LWFyZWEgbGkge1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRsaXN0LXN0eWxlOiBub25lO1xuXHR3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuXHRhbmltYXRpb246IGFuaW1hdGUgMjBzIGxpbmVhciBpbmZpbml0ZTtcbiAgICBib3R0b206IC0zMDBweDtcbiAgICBcbn1cblxuLmJ1YmJsZTF7XG4gICAgYW5pbWF0aW9uOiByQW5pbWF0ZSAyMHMgbGluZWFyIGluZmluaXRlO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMHM7XG4gICAgd2lkdGg6IDgwcHg7XG5cdGhlaWdodDogODBweDtcbn1cblxuLmJ1YmJsZTJ7XG4gICAgYW5pbWF0aW9uOiByQW5pbWF0ZSAyMHMgbGluZWFyIGluZmluaXRlO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMS41cztcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDIwcztcbiAgICB3aWR0aDogMzBweDtcblx0aGVpZ2h0OiAzMHB4O1xufVxuXG4uYnViYmxlM3tcbiAgICBhbmltYXRpb246IHJBbmltYXRlIDIwcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiA1LjVzO1xuICAgIHdpZHRoOiAxMDBweDtcblx0aGVpZ2h0OiAxMDBweDtcbn1cblxuLmJ1YmJsZTR7XG4gICAgYW5pbWF0aW9uOiByQW5pbWF0ZSAyMHMgbGluZWFyIGluZmluaXRlO1xuICAgIGFuaW1hdGlvbi1kZWxheTogMHM7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzMHM7XG4gICAgd2lkdGg6IDE1MHB4O1xuXHRoZWlnaHQ6IDE1MHB4O1xufVxuXG4uYnViYmxlNXtcbiAgICBhbmltYXRpb246IHJBbmltYXRlIDIwcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwcztcbiAgICB3aWR0aDogNDBweDtcblx0aGVpZ2h0OiA0MHB4O1xufVxuXG4uYnViYmxlNntcbiAgICBhbmltYXRpb246IHJBbmltYXRlIDIwcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgYW5pbWF0aW9uLWRlbGF5OiA3cztcbiAgICB3aWR0aDogMTEwcHg7XG5cdGhlaWdodDogMTEwcHg7XG59XG5cbi5ib3gtYXJlYSBsaTpudGgtY2hpbGQoMSkge1xuXHRsZWZ0OiA4NiU7XG5cdFxuXHRhbmltYXRpb24tZGVsYXk6IDBzO1xufVxuLmJveC1hcmVhIGxpOm50aC1jaGlsZCgyKSB7XG5cdGxlZnQ6IDEyJTtcblx0XG5cdGFuaW1hdGlvbi1kZWxheTogMS41cztcblx0YW5pbWF0aW9uLWR1cmF0aW9uOiAyMHM7XG59XG4uYm94LWFyZWEgbGk6bnRoLWNoaWxkKDMpIHtcblx0bGVmdDogNzAlO1xuXHRcblx0YW5pbWF0aW9uLWRlbGF5OiA1LjVzO1xufVxuLmJveC1hcmVhIGxpOm50aC1jaGlsZCg0KSB7XG5cdGxlZnQ6IDQyJTtcblx0XG5cdGFuaW1hdGlvbi1kZWxheTogMHM7XG5cdGFuaW1hdGlvbi1kdXJhdGlvbjogMzBzO1xufVxuLmJveC1hcmVhIGxpOm50aC1jaGlsZCg1KSB7XG5cdGxlZnQ6IDY1JTtcblx0XG5cdGFuaW1hdGlvbi1kZWxheTogMHM7XG59XG4uYm94LWFyZWEgbGk6bnRoLWNoaWxkKDYpIHtcblx0bGVmdDogMTUlO1xuXHRcblx0YW5pbWF0aW9uLWRlbGF5OiA3cztcbn1cbkBrZXlmcmFtZXMgYW5pbWF0ZSB7XG5cdDAlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG5cdFx0b3BhY2l0eTogMTtcblx0fVxuXHQxMDAlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTgwMHB4KTtcblx0XHRvcGFjaXR5OiAwO1xuXHR9XG59XG5cbkBrZXlmcmFtZXMgckFuaW1hdGUge1xuXHQwJSB7XG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG5cdH1cblx0MTAwJSB7XG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcblx0fVxufVxuIl19 */"]
});

/***/ }),

/***/ 68721:
/*!*******************************************!*\
  !*** ./src/app/landing/landing.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LandingModule": () => (/* binding */ LandingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals */ 37503);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ 93738);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ 79866);
/* harmony import */ var _landing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landing.component */ 341);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login/login.module */ 80107);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);










const routes = [
    {
        path: '',
        component: _landing_component__WEBPACK_IMPORTED_MODULE_1__.LandingComponent,
    },
];
class LandingModule {
}
LandingModule.ɵfac = function LandingModule_Factory(t) { return new (t || LandingModule)(); };
LandingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: LandingModule, bootstrap: [_landing_component__WEBPACK_IMPORTED_MODULE_1__.LandingComponent] });
LandingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [_globals__WEBPACK_IMPORTED_MODULE_0__.Globals], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule,
            _login_login_module__WEBPACK_IMPORTED_MODULE_2__.LoginModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule,
            ngx_spinner__WEBPACK_IMPORTED_MODULE_7__.NgxSpinnerModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](LandingModule, { declarations: [_landing_component__WEBPACK_IMPORTED_MODULE_1__.LandingComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_5__.MatCardModule,
        _login_login_module__WEBPACK_IMPORTED_MODULE_2__.LoginModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.NgbModule,
        ngx_spinner__WEBPACK_IMPORTED_MODULE_7__.NgxSpinnerModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_landing_landing_module_ts.js.map