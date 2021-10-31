(self["webpackChunkthred_web"] = self["webpackChunkthred_web"] || []).push([["src_app_home_home_module_ts"],{

/***/ 45067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals */ 37503);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _services_load_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/load.service */ 6029);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.component */ 55041);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ 79866);
/* harmony import */ var _services_routing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/routing.service */ 78078);











function HomeComponent_ngx_spinner_1_Template(rf, ctx) { if (rf & 1) {
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
function HomeComponent_header_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "header");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomeComponent_header_2_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r4.routeToShop(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "BROWSE PRODUCTS");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("bg-", ctx_r1.storeInfo().colorStyle.back_code, " py-6");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("background-image", "url(" + ((tmp_1_0 = ctx_r1.storeInfo().themeLink == null ? null : ctx_r1.storeInfo().themeLink.toString()) !== null && tmp_1_0 !== undefined ? tmp_1_0 : "") + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("text-center text-", ctx_r1.storeInfo().colorStyle.text_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("font-family", ctx_r1.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r1.storeInfo().slogan, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("font-family", ctx_r1.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("btn btn-", ctx_r1.storeInfo().colorStyle.text_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", ctx_r1.selectedTheme().bg_color);
} }
function HomeComponent_section_3_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomeComponent_section_3_div_6_Template_a_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10); const product_r8 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r9.routeToProduct(product_r8.productID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "h4", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomeComponent_section_3_div_6_Template_a_click_7_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10); const product_r8 = restoredCtx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r11.routeToProduct(product_r8.productID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomeComponent_section_3_div_6_Template_a_click_11_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r10); const product_r8 = restoredCtx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r12.routeToProduct(product_r8.productID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r8 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("card h-100 bg-", ctx_r6.storeInfo().colorStyle.back_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("border-secondary", ctx_r6.storeInfo().colorStyle.text_code == "light");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", product_r8.url, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("font-family", ctx_r6.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", ctx_r6.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](product_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("btn btn-outline-", ctx_r6.storeInfo().colorStyle.text_code, " mt-auto d-flex justify-content-center text-center");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("font-family", ctx_r6.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r6.formatPrice(product_r8.price / 100));
} }
function HomeComponent_section_3_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomeComponent_section_3_div_16_Template_a_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15); const product_r13 = restoredCtx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r14.routeToProduct(product_r13.productID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "h4", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomeComponent_section_3_div_16_Template_a_click_7_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15); const product_r13 = restoredCtx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r16.routeToProduct(product_r13.productID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomeComponent_section_3_div_16_Template_a_click_11_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15); const product_r13 = restoredCtx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r17.routeToProduct(product_r13.productID); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r13 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("card h-100 bg-", ctx_r7.storeInfo().colorStyle.back_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("border-secondary", ctx_r7.storeInfo().colorStyle.text_code == "light");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", product_r13.url, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("font-family", ctx_r7.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", ctx_r7.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](product_r13.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("btn btn-outline-", ctx_r7.storeInfo().colorStyle.text_code, " mt-auto d-flex justify-content-center text-center");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("font-family", ctx_r7.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r7.formatPrice(product_r13.price / 100));
} }
function HomeComponent_section_3_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "section", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " NEW ARRIVALS ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, HomeComponent_section_3_div_6_Template, 13, 18, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomeComponent_section_3_Template_a_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r18.routeToAbout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, " FEATURED ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, HomeComponent_section_3_div_16_Template, 13, 18, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    let tmp_5_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("background-color", ctx_r2.selectedTheme().bg_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", ctx_r2.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("text-center text-", ctx_r2.storeInfo().colorStyle.text_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("font-family", ctx_r2.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.newArrivalProducts());
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", (tmp_5_0 = ctx_r2.storeInfo().homeLink == null ? null : ctx_r2.storeInfo().homeLink.toString()) !== null && tmp_5_0 !== undefined ? tmp_5_0 : "", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMapInterpolate1"]("text-center text-", ctx_r2.storeInfo().colorStyle.text_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("font-family", ctx_r2.storeInfo().fontName)("color", ctx_r2.selectedTheme().color)("font-family", ctx_r2.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r2.featuredProducts());
} }
function HomeComponent_footer_4_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function HomeComponent_footer_4_div_22_Template_a_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23); const social_r21 = restoredCtx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r22.openSocial(social_r21.link); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const social_r21 = ctx.$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("width", 45, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("width", 45, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r20.getLinkImg(social_r21.name), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
function HomeComponent_footer_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "img", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, HomeComponent_footer_4_div_22_Template, 3, 5, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](26, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "div", 44);
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
class HomeComponent {
    constructor(platformID, cdr, router, titleService, metaService, loadService, rootComponent, _router, spinner, injector, routingService, location) {
        this.platformID = platformID;
        this.cdr = cdr;
        this.router = router;
        this.titleService = titleService;
        this.metaService = metaService;
        this.loadService = loadService;
        this.rootComponent = rootComponent;
        this._router = _router;
        this.spinner = spinner;
        this.injector = injector;
        this.routingService = routingService;
        this.location = location;
        this.isSpinning = false;
        this.storeProducts = undefined;
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
    newArrivalProducts() {
        var _a;
        return (_a = this.storeProducts) === null || _a === void 0 ? void 0 : _a.sort(function (a, b) {
            if (a.timestamp > b.timestamp) {
                return -1;
            }
            if (a.timestamp < b.timestamp) {
                return 1;
            }
            return 0;
        }).slice(0, 4);
    }
    featuredProducts() {
        var _a;
        return (_a = this.storeProducts) === null || _a === void 0 ? void 0 : _a.sort(function (a, b) {
            if (a.likes > b.likes) {
                return -1;
            }
            if (a.likes < b.likes) {
                return 1;
            }
            return 0;
        }).slice(0, 4);
    }
    selectedProduct() { return _globals__WEBPACK_IMPORTED_MODULE_0__.Globals.selectedProduct; }
    ngOnDestroy() {
        this.loadService.adminComponent = undefined;
    }
    ngOnInit() {
        this.loadService.homeComponent = this;
        this.init();
    }
    routeToProduct(productID) {
        this.rootComponent.routeToProduct(productID);
    }
    routeToShop() {
        this.rootComponent.routeToShop();
    }
    routeToAbout() {
        this.rootComponent.routeToAbout();
    }
    selectedIndicator() {
        var _a, _b, _c, _d, _e, _f;
        let co = (_b = (_a = _globals__WEBPACK_IMPORTED_MODULE_0__.Globals.storeInfo) === null || _a === void 0 ? void 0 : _a.loading) === null || _b === void 0 ? void 0 : _b.color;
        let bco = (_d = (_c = _globals__WEBPACK_IMPORTED_MODULE_0__.Globals.storeInfo) === null || _c === void 0 ? void 0 : _c.loading) === null || _d === void 0 ? void 0 : _d.bg_color;
        let name = (_f = (_e = _globals__WEBPACK_IMPORTED_MODULE_0__.Globals.storeInfo) === null || _e === void 0 ? void 0 : _e.loading) === null || _f === void 0 ? void 0 : _f.name;
        let color = "rgba(" + co[0] + "," + co[1] + "," + co[2] + "," + co[3] + ")";
        let bg_color = "rgba(" + bco[0] + "," + bco[1] + "," + bco[2] + "," + bco[3] + ")";
        let indicator = {
            "name": name,
            "color": color,
            "bg_color": bg_color
        };
        return indicator;
    }
    showSpinner() {
        if (!this.isSpinning) {
            this.isSpinning = true;
            if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.isPlatformBrowser)(this.platformID)) {
                this.spinner.show();
            }
            ;
            setTimeout(() => {
                if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.isPlatformBrowser)(this.platformID)) {
                    this.spinner.hide();
                }
                ;
            }, 1500);
        }
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
    hideSpinner() {
        if (this.isSpinning) {
            this.isSpinning = false;
            // this.spinner.hide()
        }
    }
    callback() {
        var _a, _b, _c;
        console.log("callback    ");
        if (_globals__WEBPACK_IMPORTED_MODULE_0__.Globals.storeInfo.username) {
            this.rootComponent.setFavIcon(_globals__WEBPACK_IMPORTED_MODULE_0__.Globals.storeInfo.profileLink.toString());
            this.addTags((_a = _globals__WEBPACK_IMPORTED_MODULE_0__.Globals.storeInfo.fullName) !== null && _a !== void 0 ? _a : "Thred", ((_b = _globals__WEBPACK_IMPORTED_MODULE_0__.Globals.storeInfo.profileLink) !== null && _b !== void 0 ? _b : new URL("https://shopmythred.com")).toString(), (_c = _globals__WEBPACK_IMPORTED_MODULE_0__.Globals.storeInfo.bio) !== null && _c !== void 0 ? _c : "Check out my Thred Store!", "shopmythred.com/" + _globals__WEBPACK_IMPORTED_MODULE_0__.Globals.storeInfo.username);
            if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.isPlatformBrowser)(this.platformID)) {
                this.showSpinner();
                this.loadService.logView();
                this.rootComponent.setOptions();
            }
            if (_globals__WEBPACK_IMPORTED_MODULE_0__.Globals.userInfo == undefined && (0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.isPlatformBrowser)(this.platformID)) {
                this.loadService.getCustomer();
            }
            else if (_globals__WEBPACK_IMPORTED_MODULE_0__.Globals.availableCurrencies.length == 0 && (0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.isPlatformBrowser)(this.platformID)) {
                this.loadService.getCountries();
            }
            else if (_globals__WEBPACK_IMPORTED_MODULE_0__.Globals.templates.length == 0 && (0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.isPlatformBrowser)(this.platformID)) {
                this.loadService.getTemplates();
            }
            else if (this.storeProducts == undefined) {
                this.loadService.getPosts(products => {
                    this.storeProducts = products;
                });
            }
            else {
                this.rootComponent.cdr.detectChanges();
            }
        }
        else {
            console.log("oppa gungnam");
            console.log(_globals__WEBPACK_IMPORTED_MODULE_0__.Globals.storeInfo);
            this.routingService.routeTo404(this.getStoreName().isCustom);
        }
    }
    init() {
        const storeInfo = this.getStoreName();
        this.downloadAllStoreInfo(storeInfo.link, storeInfo.isCustom);
    }
    isBrowser() {
        return (0,_angular_common__WEBPACK_IMPORTED_MODULE_5__.isPlatformBrowser)(this.platformID);
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
    open(e, item) {
    }
    formatPrice(price) {
        var priceAsString = new String((price * _globals__WEBPACK_IMPORTED_MODULE_0__.Globals.selectedCurrency.rate).toFixed(2));
        let index = priceAsString.indexOf(".");
        switch (index) {
            case priceAsString.length - 1:
                priceAsString += "00";
                break;
            case priceAsString.length - 2:
                priceAsString += "0";
                break;
            default:
                break;
        }
        return this.numberWithCommas(this.getCurrencyForCountry(_globals__WEBPACK_IMPORTED_MODULE_0__.Globals.selectedCurrency, _globals__WEBPACK_IMPORTED_MODULE_0__.Globals.selectedCurrency.name != "US") + priceAsString);
    }
    numberWithCommas(x) {
        return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    getCurrencyForCountry(country, shouldShowName) {
        var returnItem = country.currency_symbol;
        if (shouldShowName)
            returnItem = country.name + " " + returnItem;
        return returnItem;
    }
    addTags(title, imgUrl, description, url) {
        this.metaService.updateTag({ property: 'og:title', content: title + " - " + "Home" });
        this.metaService.updateTag({ property: 'og:image', content: imgUrl });
        this.metaService.updateTag({ property: 'og:url', content: url });
        this.metaService.updateTag({ property: 'og:description', content: description });
        this.titleService.setTitle(title);
        this.metaService.updateTag({ property: 'description', content: description });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.Meta), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_load_service__WEBPACK_IMPORTED_MODULE_1__.LoadService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_routing_service__WEBPACK_IMPORTED_MODULE_3__.RoutingService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__.PlatformLocation)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 5, vars: 4, consts: [["size", "large", 3, "bdColor", "color", "type", "fullScreen", 4, "ngIf"], [3, "class", 4, "ngIf"], ["class", "py-5", 3, "background-color", 4, "ngIf"], ["size", "large", 3, "bdColor", "color", "type", "fullScreen"], [1, "text-center", "mt-5"], [1, "cover"], [1, "d-flex", "align-items-center", "justify-content-center", 2, "height", "600px", "font-weight", "bold", "font-size", "40px"], [2, "line-height", "1.2em", "text-shadow", "2px 2px 4px #42424281"], [1, "text-center", "px-5", "mx-5", 2, "font-size", "30px", "line-height", "1.2em", "font-weight", "bold", "text-shadow", "2px 2px 4px #42424281"], ["role", "button", 2, "font-weight", "bold", 3, "click"], [1, "py-5"], [1, "container", "mt-5"], [1, "d-flex", "align-items-center", "justify-content-center", "pb-1", "mb-5", 2, "height", "50px", "font-weight", "bold", "font-size", "30px"], [2, "line-height", "1.2em"], [1, "row", "gx-4", "gx-lg-5", "row-cols-2", "row-cols-md-4", "row-cols-xl-4", "justify-content-center", "mb-2", "pb-2"], ["class", "col mb-5", 4, "ngFor", "ngForOf"], [1, "d-block", "align-items-center", "pt-0"], [1, "d-block", "align-items-center", "text-center", "text-sm-start"], ["role", "button", 1, "mx-auto", "me-sm-4", 3, "click"], ["alt", "Product", 2, "max-width", "100%", "height", "auto", 3, "src"], [1, "d-flex", "align-items-center", "justify-content-center", "pb-4", "mb-5", "mt-5", "pt-5", 2, "height", "50px", "font-weight", "bold", "font-size", "30px"], [1, "col", "mb-5"], ["role", "button", 3, "click"], ["alt", "ok", "onerror", "this.src='https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Resources%2Flink_empty.jpeg?alt=media';", 1, "card-img-top", 3, "src"], [1, "card-body", "p-2", "pb-0"], [1, "text-center"], [1, "fw-bolder"], ["role", "button", 2, "text-decoration", "none", 3, "click"], [1, "card-footer", "p-4", "pt-0", "pb-4", "border-top-0", "bg-transparent"], [1, "container", "w-100", "d-block", "justify-content-center"], [1, "w-100", "row", "row-cols-1", "row-cols-md-7", "row-cols-xl-7", "justify-content-center", "justify-content-sm-start", "mb-5"], [1, "col", "mb-", "mx-2"], ["role", "button"], ["alt", "ok", "src", "assets/visacard.png", 2, "object-fit", "contain"], [1, "col", "mb-2", "mx-2"], ["alt", "ok", "src", "assets/mastercard.png", 2, "object-fit", "contain"], ["alt", "ok", "src", "assets/amexcard.png", 2, "object-fit", "contain"], ["alt", "ok", "src", "assets/applecard.png", 2, "object-fit", "contain"], ["alt", "ok", "src", "assets/googlecard.png", 2, "object-fit", "contain"], ["alt", "ok", "src", "assets/microsoftcard.png", 2, "object-fit", "contain"], [1, "w-100", "row", "row-cols-2", "row-cols-md-4", "row-cols-xl-4", "justify-content-center"], ["class", "col mb-4 mx-3", 3, "width", 4, "ngFor", "ngForOf"], [1, "w-100", "row", "row-cols-4", "row-cols-md-7", "row-cols-xl-7", "justify-content-end"], [1, "col", "mb-4", "mx-2"], [1, "container"], [1, "col", "mb-4", "mx-3"], ["alt", "ok", 1, "rounded-circle", 2, "object-fit", "contain", 3, "src"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, HomeComponent_ngx_spinner_1_Template, 3, 10, "ngx-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, HomeComponent_header_2_Template, 9, 19, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, HomeComponent_section_3_Template, 17, 24, "section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, HomeComponent_footer_4_Template, 35, 49, "footer", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isBrowser());
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isBrowser() && (ctx.storeProducts == null ? null : ctx.storeProducts.length) != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isBrowser() && (ctx.storeProducts == null ? null : ctx.storeProducts.length) != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isBrowser() && (ctx.storeProducts == null ? null : ctx.storeProducts.length) != 0);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf], styles: [".centered[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n\n.cover[_ngcontent-%COMP%]{\n    color: rgb(255, 255, 255);\n    position: relative;\n    \n    background-repeat: no-repeat;\n    background-position-x: center;\n    background-position-y: center;\n    background-size: cover;\n}\n\n.middle[_ngcontent-%COMP%]{\n    color: rgb(255, 255, 255);\n    position: relative;\n    \n    background-repeat: no-repeat;\n    background-position-x: center;\n    background-position-y: center;\n    background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztFQUNsQzs7QUFFRjtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IsNkJBQTZCO0lBSTdCLHNCQUFzQjtBQUMxQjs7QUFHQTtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IsNkJBQTZCO0lBSTdCLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyZWQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIH1cblxuLmNvdmVye1xuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC8qIGhlaWdodDogNTAwcHg7ICovXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGNlbnRlcjtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuXG4ubWlkZGxle1xuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC8qIGhlaWdodDogNTAwcHg7ICovXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGNlbnRlcjtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn0iXX0= */"] });


/***/ }),

/***/ 3467:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeModule": () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ 45067);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 93738);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globals */ 37503);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ 79866);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);








const routes = [
    {
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent,
    },
];
class HomeModule {
}
HomeModule.ɵfac = function HomeModule_Factory(t) { return new (t || HomeModule)(); };
HomeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: HomeModule, bootstrap: [_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent] });
HomeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [_globals__WEBPACK_IMPORTED_MODULE_1__.Globals], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardModule,
            ngx_spinner__WEBPACK_IMPORTED_MODULE_5__.NgxSpinnerModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardModule,
        ngx_spinner__WEBPACK_IMPORTED_MODULE_5__.NgxSpinnerModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map