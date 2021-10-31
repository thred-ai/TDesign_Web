(self["webpackChunkthred_web"] = self["webpackChunkthred_web"] || []).push([["src_app_about_about_module_ts"],{

/***/ 26698:
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals */ 37503);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _services_load_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/load.service */ 6029);
/* harmony import */ var _services_routing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/routing.service */ 78078);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.component */ 55041);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ 79866);











function AboutComponent_ngx_spinner_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ngx-spinner", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h3", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    let tmp_6_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", ctx_r0.selectedIndicator().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("bdColor", ctx_r0.selectedIndicator().bg_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("color", ctx_r0.selectedIndicator().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("type", ctx_r0.selectedIndicator().name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("fullScreen", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("font-family", ctx_r0.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", (tmp_6_0 = ctx_r0.storeInfo()) == null ? null : tmp_6_0.fullName, "\n");
} }
function AboutComponent_header_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "header");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " ABOUT US ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("bg-", ctx_r1.storeInfo().colorStyle.back_code, " py-6");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("background-image", "url(" + ctx_r1.storeInfo().themeLink.toString() + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("text-center text-", ctx_r1.storeInfo().colorStyle.text_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("font-family", ctx_r1.storeInfo().fontName);
} }
function AboutComponent_section_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " Our Story ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("background-color", ctx_r2.selectedTheme().bg_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", ctx_r2.storeInfo().profileLink, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("text-center text-", ctx_r2.storeInfo().colorStyle.text_code, " px-5 mx-5 mb-5");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("font-family", ctx_r2.storeInfo().fontName)("color", ctx_r2.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("font-family", ctx_r2.storeInfo().fontName)("color", ctx_r2.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx_r2.storeBio(), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
} }
function AboutComponent_footer_4_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AboutComponent_footer_4_div_22_Template_a_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const social_r5 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r6.openSocial(social_r5.link); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const social_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("width", 45, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("width", 45, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r4.getLinkImg(social_r5.name), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
function AboutComponent_footer_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, AboutComponent_footer_4_div_22_Template, 3, 5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Powered by Thred");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("py-5 bg-", ctx_r3.storeInfo().colorStyle.back_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("width", 50, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("width", 50, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("width", 50, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("width", 50, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("width", 50, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("width", 50, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("width", 50, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("width", 50, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("width", 50, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("width", 50, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("width", 50, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("width", 50, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r3.storeInfo().socials);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("width", 50, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("width", 50, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("width", 50, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("width", 50, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("width", 50, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("m-0 text-center text-", ctx_r3.storeInfo().colorStyle.text_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("font-family", ctx_r3.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("\u00A9 ", ctx_r3.storeInfo().fullName, " 2021");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("m-0 text-center text-", ctx_r3.storeInfo().colorStyle.text_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("font-family", ctx_r3.storeInfo().fontName);
} }
class AboutComponent {
    constructor(platformID, cdr, router, titleService, metaService, loadService, routingService, rootComponent, _router, spinner) {
        this.platformID = platformID;
        this.cdr = cdr;
        this.router = router;
        this.titleService = titleService;
        this.metaService = metaService;
        this.loadService = loadService;
        this.routingService = routingService;
        this.rootComponent = rootComponent;
        this._router = _router;
        this.spinner = spinner;
        this.defaultBio = "Hello! <br/><br/>FULL9NAME was made for creative trail blazers like you. The dreamers who seek new adventures that warp reality and transcend time. Our lust for life lives on through our unique pieces. Here’s your chance to display inspiration, love, heartache, vibes in the form of a unique piece of clothing/accessory not found anywhere else in the world but here… <br/><br/>With a purchase of FULL9NAME you show the world that you are a free thinker, and belong to the tribe of dreamers. We welcome you with open arms. <br/><br/> We are FULL9NAME.";
        this.isSpinning = false;
    }
    storeInfo() { return _globals__WEBPACK_IMPORTED_MODULE_0__.Globals.storeInfo; }
    availableCurrencies() { return _globals__WEBPACK_IMPORTED_MODULE_0__.Globals.availableCurrencies; }
    selectedCurrency() { return _globals__WEBPACK_IMPORTED_MODULE_0__.Globals.selectedCurrency; }
    templates() { return _globals__WEBPACK_IMPORTED_MODULE_0__.Globals.availableTemplates; }
    availableTemplates() { return _globals__WEBPACK_IMPORTED_MODULE_0__.Globals.availableTemplates; }
    getLinkImg(name) {
        return _globals__WEBPACK_IMPORTED_MODULE_0__.Globals.socials.filter(obj => {
            return obj.name == name;
        })[0].img;
    }
    openSocial(l) {
        const link = document.createElement('a');
        link.target = '_blank';
        let url = '';
        if (!/^http[s]?:\/\//.test(l)) {
            url += 'http://';
        }
        url += l;
        link.href = url;
        link.setAttribute('visibility', 'hidden');
        link.click();
        link.remove();
    }
    isBrowser() {
        return (0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.isPlatformBrowser)(this.platformID);
    }
    selectedIndicator() {
        var _a, _b, _c, _d, _e, _f;
        let co = (_b = (_a = _globals__WEBPACK_IMPORTED_MODULE_0__.Globals.storeInfo) === null || _a === void 0 ? void 0 : _a.loading) === null || _b === void 0 ? void 0 : _b.color;
        let bco = (_d = (_c = _globals__WEBPACK_IMPORTED_MODULE_0__.Globals.storeInfo) === null || _c === void 0 ? void 0 : _c.loading) === null || _d === void 0 ? void 0 : _d.bg_color;
        let name = (_f = (_e = _globals__WEBPACK_IMPORTED_MODULE_0__.Globals.storeInfo) === null || _e === void 0 ? void 0 : _e.loading) === null || _f === void 0 ? void 0 : _f.name;
        let color = "rgba(" + co[0] + "," + co[1] + "," + co[2] + "," + co[3] + ")";
        let bg_color = "rgba(" + bco[0] + "," + bco[1] + "," + bco[2] + "," + bco[3] + ")";
        var indicator = {
            "name": name,
            "color": color,
            "bg_color": bg_color
        };
        return indicator;
    }
    selectedTheme() {
        var _a, _b, _c, _d, _e, _f;
        let co = (_b = (_a = _globals__WEBPACK_IMPORTED_MODULE_0__.Globals.storeInfo) === null || _a === void 0 ? void 0 : _a.colorStyle) === null || _b === void 0 ? void 0 : _b.btn_color;
        let bco = (_d = (_c = _globals__WEBPACK_IMPORTED_MODULE_0__.Globals.storeInfo) === null || _c === void 0 ? void 0 : _c.colorStyle) === null || _d === void 0 ? void 0 : _d.bg_color;
        let name = (_f = (_e = _globals__WEBPACK_IMPORTED_MODULE_0__.Globals.storeInfo) === null || _e === void 0 ? void 0 : _e.colorStyle) === null || _f === void 0 ? void 0 : _f.name;
        let color = "rgba(" + co[0] + "," + co[1] + "," + co[2] + "," + co[3] + ")";
        let bg_color = "rgba(" + bco[0] + "," + bco[1] + "," + bco[2] + "," + bco[3] + ")";
        var theme = {
            "name": name,
            "color": color,
            "bg_color": bg_color
        };
        return theme;
    }
    storeBio() {
        var _a, _b, _c;
        let bio = this.storeInfo().bio;
        if (bio == "" || bio == undefined) {
            return this.defaultBio.replace(/FULL9NAME/g, (_b = (_a = this.storeInfo().fullName) === null || _a === void 0 ? void 0 : _a.trim()) !== null && _b !== void 0 ? _b : "This brand");
        }
        return (_c = bio.replace(/\n/g, "<br>")) !== null && _c !== void 0 ? _c : "";
    }
    ngOnInit() {
        this.init();
    }
    showSpinner() {
        if (!this.isSpinning) {
            this.isSpinning = true;
            if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.isPlatformBrowser)(this.platformID)) {
                this.spinner.show();
            }
            ;
            setTimeout(() => {
                this.spinner.hide();
            }, 1500);
        }
    }
    hideSpinner() {
        if (this.isSpinning) {
            this.isSpinning = false;
            // this.spinner.hide()
        }
    }
    callback() {
        var _a, _b, _c;
        if (_globals__WEBPACK_IMPORTED_MODULE_0__.Globals.storeInfo.username) {
            this.showSpinner();
            this.rootComponent.setOptions();
            this.rootComponent.setFavIcon(_globals__WEBPACK_IMPORTED_MODULE_0__.Globals.storeInfo.profileLink.toString());
            this.addTags((_a = _globals__WEBPACK_IMPORTED_MODULE_0__.Globals.storeInfo.fullName) !== null && _a !== void 0 ? _a : "Thred", ((_b = _globals__WEBPACK_IMPORTED_MODULE_0__.Globals.storeInfo.profileLink) !== null && _b !== void 0 ? _b : new URL("https://shopmythred.com")).toString(), (_c = _globals__WEBPACK_IMPORTED_MODULE_0__.Globals.storeInfo.bio) !== null && _c !== void 0 ? _c : "Check out my Thred Store!", "shopmythred.com/" + _globals__WEBPACK_IMPORTED_MODULE_0__.Globals.storeInfo.username);
            if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.isPlatformBrowser)(this.platformID)) {
                this.loadService.logView();
            }
            if (_globals__WEBPACK_IMPORTED_MODULE_0__.Globals.userInfo == undefined && (0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.isPlatformBrowser)(this.platformID)) {
                this.loadService.getCustomer();
            }
            else {
                if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.isPlatformBrowser)(this.platformID)) {
                    this.cdr.detectChanges();
                }
            }
        }
        else {
            this.routingService.routeTo404(this.getStoreName().isCustom);
        }
    }
    addTags(title, imgUrl, description, url) {
        this.metaService.updateTag({ property: 'og:title', content: title + " - " + "About" });
        this.metaService.updateTag({ property: 'og:image', content: imgUrl });
        this.metaService.updateTag({ property: 'og:url', content: url });
        this.metaService.updateTag({ property: 'og:description', content: description });
        this.titleService.setTitle(title);
        this.metaService.updateTag({ property: 'description', content: description });
    }
    init() {
        const storeInfo = this.getStoreName();
        this.downloadAllStoreInfo(storeInfo.link, storeInfo.isCustom);
    }
    downloadAllStoreInfo(storeName, isCustom = false) {
        this.loadService.myCallback = () => this.callback();
        this.loadService.getUser(storeName, undefined, isCustom);
    }
    getStoreName() {
        var request = "";
        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.isPlatformServer)(this.platformID)) {
            request = _globals__WEBPACK_IMPORTED_MODULE_0__.Globals.URL;
            console.log(request);
        }
        else {
            request = globalThis.location.host;
        }
        if (request != 'localhost:4200' && request != 'shopmythred.com') {
            return {
                isCustom: true,
                link: request
            };
        }
        const routeParams = this.router.snapshot.paramMap;
        const storeID = routeParams.get('user');
        return {
            isCustom: false,
            link: storeID
        };
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.Meta), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_load_service__WEBPACK_IMPORTED_MODULE_1__.LoadService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_routing_service__WEBPACK_IMPORTED_MODULE_2__.RoutingService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerService)); };
AboutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 5, vars: 4, consts: [["size", "large", 3, "bdColor", "color", "type", "fullScreen", 4, "ngIf"], [3, "class", 4, "ngIf"], ["class", "py-5", 3, "background-color", 4, "ngIf"], ["size", "large", 3, "bdColor", "color", "type", "fullScreen"], [1, "text-center", "mt-5"], [1, "cover", 2, "background-image", "url(https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Resources%2FSample-Walls%2FHome%2F1.jpg?alt=media)"], [1, "d-flex", "align-items-center", "justify-content-center", 2, "height", "300px", "font-weight", "bold", "font-size", "35px"], [2, "line-height", "1.2em", "text-shadow", "2px 2px 4px #42424281"], [1, "py-5"], [1, "mx-auto", "d-block", "mb-5", 3, "src"], [2, "font-size", "30px", "line-height", "1.2em", "font-weight", "bold"], [1, "text-left", "px-5", "mx-2", 2, "font-size", "20px", "line-height", "1.2em", 3, "innerHTML"], [1, "container", "w-100", "d-block", "justify-content-center"], [1, "w-100", "row", "row-cols-1", "row-cols-md-7", "row-cols-xl-7", "justify-content-center", "justify-content-sm-start", "mb-5"], [1, "col", "mb-", "mx-2"], ["role", "button"], ["alt", "ok", "src", "assets/visacard.png", 2, "object-fit", "contain"], [1, "col", "mb-2", "mx-2"], ["alt", "ok", "src", "assets/mastercard.png", 2, "object-fit", "contain"], ["alt", "ok", "src", "assets/amexcard.png", 2, "object-fit", "contain"], ["alt", "ok", "src", "assets/applecard.png", 2, "object-fit", "contain"], ["alt", "ok", "src", "assets/googlecard.png", 2, "object-fit", "contain"], ["alt", "ok", "src", "assets/microsoftcard.png", 2, "object-fit", "contain"], [1, "w-100", "row", "row-cols-2", "row-cols-md-4", "row-cols-xl-4", "justify-content-center"], ["class", "col mb-4 mx-3", 3, "width", 4, "ngFor", "ngForOf"], [1, "w-100", "row", "row-cols-4", "row-cols-md-7", "row-cols-xl-7", "justify-content-end"], [1, "col", "mb-4", "mx-2"], [1, "container"], [1, "col", "mb-4", "mx-3"], ["role", "button", 3, "click"], ["alt", "ok", 1, "rounded-circle", 2, "object-fit", "contain", 3, "src"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AboutComponent_ngx_spinner_1_Template, 3, 10, "ngx-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, AboutComponent_header_2_Template, 5, 10, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, AboutComponent_section_3_Template, 5, 18, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, AboutComponent_footer_4_Template, 35, 49, "footer", 1);
    } if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isBrowser());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isBrowser() && ((tmp_1_0 = ctx.storeInfo()) == null ? null : tmp_1_0.username) != undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isBrowser() && ((tmp_2_0 = ctx.storeInfo()) == null ? null : tmp_2_0.username) != undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isBrowser());
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf], styles: [".centered[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n\n.cover[_ngcontent-%COMP%]{\n    color: rgb(255, 255, 255);\n    position: relative;\n    \n    background-repeat: no-repeat;\n    background-position-x: center;\n    background-position-y: center;\n    background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFib3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7RUFDbEM7O0FBRUY7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLDZCQUE2QjtJQUk3QixzQkFBc0I7QUFDMUIiLCJmaWxlIjoiYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXJlZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgfVxuXG4uY292ZXJ7XG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLyogaGVpZ2h0OiA1MDBweDsgKi9cbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogY2VudGVyO1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuIl19 */"] });


/***/ }),

/***/ 46985:
/*!***************************************!*\
  !*** ./src/app/about/about.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutModule": () => (/* binding */ AboutModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.component */ 26698);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globals */ 37503);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ 79866);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);







const routes = [
    {
        path: '',
        component: _about_component__WEBPACK_IMPORTED_MODULE_0__.AboutComponent,
    },
];
class AboutModule {
}
AboutModule.ɵfac = function AboutModule_Factory(t) { return new (t || AboutModule)(); };
AboutModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AboutModule, bootstrap: [_about_component__WEBPACK_IMPORTED_MODULE_0__.AboutComponent] });
AboutModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [_globals__WEBPACK_IMPORTED_MODULE_1__.Globals], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__.NgxSpinnerModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AboutModule, { declarations: [_about_component__WEBPACK_IMPORTED_MODULE_0__.AboutComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        ngx_spinner__WEBPACK_IMPORTED_MODULE_4__.NgxSpinnerModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_about_about_module_ts.js.map