(self["webpackChunkthred_web"] = self["webpackChunkthred_web"] || []).push([["src_app_checkout_checkout_module_ts"],{

/***/ 81594:
/*!************************************************!*\
  !*** ./src/app/checkout/checkout.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckoutComponent": () => (/* binding */ CheckoutComponent)
/* harmony export */ });
/* harmony import */ var _Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 16304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globals */ 37503);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var ngx_stripe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-stripe */ 72284);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 25917);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _services_load_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/load.service */ 6029);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ 79866);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.component */ 55041);
/* harmony import */ var _services_routing_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/routing.service */ 78078);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 76627);

















function CheckoutComponent_ngx_spinner_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ngx-spinner", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h3", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("color", ctx_r0.selectedIndicator().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("bdColor", ctx_r0.selectedIndicator().bg_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("color", ctx_r0.selectedIndicator().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("type", ctx_r0.selectedIndicator().name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("fullScreen", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-family", ctx_r0.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.loadingName, "\n");
  }
}

function CheckoutComponent_header_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "header", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " REVIEW ORDER ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " SECURE CHECKOUT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " lock ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("bg-", ctx_r1.storeInfo().colorStyle.back_code, " py-6");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx_r1.stillLoadingProducts());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background-image", "url(" + ctx_r1.storeInfo().themeLink.toString() + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-family", ctx_r1.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-family", ctx_r1.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("inline", true);
  }
}

function CheckoutComponent_section_3_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "a", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CheckoutComponent_section_3_div_32_Template_a_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const product_r6 = restoredCtx.$implicit;
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return ctx_r9.routeToProduct(product_r6.product.productID);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "img", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CheckoutComponent_section_3_div_32_Template_a_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const product_r6 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return ctx_r11.routeToProduct(product_r6.product.productID);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "Size:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Color:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "input", 45, 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function CheckoutComponent_section_3_div_32_Template_input_change_21_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const product_r6 = restoredCtx.$implicit;

      const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](22);

      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return ctx_r12.updateProductQty(product_r6, _r8.value);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CheckoutComponent_section_3_div_32_Template_button_click_23_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);
      const product_r6 = restoredCtx.$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return ctx_r13.updateProductQty(product_r6, "0");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](24, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "span", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const product_r6 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    let tmp_4_0;
    let tmp_7_0;
    let tmp_19_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("src", product_r6.product.url, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("text-", ctx_r3.storeInfo().colorStyle.text_code, " text-decoration-none");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-family", ctx_r3.storeInfo().fontName)("color", ctx_r3.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((tmp_4_0 = product_r6.product == null ? null : product_r6.product.name) !== null && tmp_4_0 !== undefined ? tmp_4_0 : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-family", ctx_r3.storeInfo().fontName)("color", ctx_r3.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"]((tmp_7_0 = product_r6.size) !== null && tmp_7_0 !== undefined ? tmp_7_0 : "M");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-family", ctx_r3.storeInfo().fontName)("color", ctx_r3.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r3.getColor(product_r6.product));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-family", ctx_r3.storeInfo().fontName)("color", ctx_r3.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r3.formatPrice(product_r6.product.price / 100));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-family", ctx_r3.storeInfo().fontName)("color", ctx_r3.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-family", ctx_r3.storeInfo().fontName)("background-color", ctx_r3.selectedTheme().bg_color)("color", ctx_r3.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", (tmp_19_0 = product_r6.quantity) !== null && tmp_19_0 !== undefined ? tmp_19_0 : 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-family", ctx_r3.storeInfo().fontName);
  }
}

function CheckoutComponent_section_3_a_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CheckoutComponent_section_3_a_39_Template_a_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return ctx_r14.placeOrder($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-family", ctx_r4.storeInfo().fontName)("background-color", ctx_r4.selectedTheme().color)("color", ctx_r4.selectedTheme().bg_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("innerHTML", "Place Order", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeHtml"]);
  }
}

function CheckoutComponent_section_3_ngx_stripe_payment_request_button_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ngx-stripe-payment-request-button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("paymentMethod", function CheckoutComponent_section_3_ngx_stripe_payment_request_button_40_Template_ngx_stripe_payment_request_button_paymentMethod_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return ctx_r16.onPaymentMethod($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("paymentOptions", ctx_r5.paymentRequestOptions);
  }
}

function CheckoutComponent_section_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "section", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "section", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "h2", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "1. Shipping Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "h3", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "h3", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "h3", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CheckoutComponent_section_3_Template_a_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r18.routeToShipping();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Change");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "h2", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "2. Payment Method ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "h3", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CheckoutComponent_section_3_Template_a_click_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r19);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r20.routeToBilling();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "Change");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "h2", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "3. Review Order");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, CheckoutComponent_section_3_div_32_Template, 27, 44, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "aside", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "p", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](39, CheckoutComponent_section_3_a_39_Template, 1, 9, "a", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](40, CheckoutComponent_section_3_ngx_stripe_payment_request_button_40_Template, 1, 1, "ngx-stripe-payment-request-button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "h3", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "h3", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "h3", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](49, "Shipping & Handling:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "h3", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "h3", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, "Sales Tax:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "h3", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "h3", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](59, "Order Total:");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "h3", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    let tmp_37_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("background-color", ctx_r2.selectedTheme().bg_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx_r2.stillLoadingProducts());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("bg-", ctx_r2.storeInfo().colorStyle.back_code, " rounded-3 shadow-lg p-2 pb-1");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx_r2.stillLoadingProducts());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-family", ctx_r2.storeInfo().fontName)("color", ctx_r2.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-family", ctx_r2.storeInfo().fontName)("color", ctx_r2.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.getShippingAddressFirst());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-family", ctx_r2.storeInfo().fontName)("color", ctx_r2.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.getShippingAddressSecond());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-family", ctx_r2.storeInfo().fontName)("color", ctx_r2.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.getShippingAddressThird());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-family", ctx_r2.storeInfo().fontName)("color", ctx_r2.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("href", "/", ctx_r2.storeInfo().username, "/shipping-address", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("bg-", ctx_r2.storeInfo().colorStyle.back_code, " rounded-3 shadow-lg p-2 pt-3 pb-1 mt-3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx_r2.stillLoadingProducts());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-family", ctx_r2.storeInfo().fontName)("color", ctx_r2.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-family", ctx_r2.storeInfo().fontName)("color", ctx_r2.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.getBillingAddressFirst());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-family", ctx_r2.storeInfo().fontName)("color", ctx_r2.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("bg-", ctx_r2.storeInfo().colorStyle.back_code, " rounded-3 shadow-lg p-4 pt-3 mt-3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-family", ctx_r2.storeInfo().fontName)("color", ctx_r2.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r2.cart());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵclassMapInterpolate1"]("bg-", ctx_r2.storeInfo().colorStyle.back_code, " rounded-3 shadow-lg p-4 pb-0");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx_r2.stillLoading());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("font-family", ctx_r2.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx_r2.err == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r2.err, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r2.useOtherPaymentMethod);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.isBrowser() && ctx_r2.tax() != undefined && ((tmp_37_0 = ctx_r2.billingAddress()) == null ? null : tmp_37_0.admin_area) != undefined && ((tmp_37_0 = ctx_r2.billingAddress()) == null ? null : tmp_37_0.admin_area) != "");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("color", ctx_r2.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("Items (", ctx_r2.itemCount(), "):");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("color", ctx_r2.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.formatPrice(ctx_r2.total()));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("color", ctx_r2.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("color", ctx_r2.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.shipping());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("color", ctx_r2.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("color", ctx_r2.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.productTax());
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("color", ctx_r2.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵstyleProp"]("color", ctx_r2.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r2.orderTotal());
  }
}

class CheckoutComponent {
  // cardOptions: StripePaymentRequestButtonElementOptions = {
  //   style:{
  //     paymentRequestButton:{
  //       theme:'dark',
  //     }
  //   },
  // };
  constructor(platformID, stripeKey, cdr, router, _router, titleService, metaService, loadService, spinner, rootComponent, stripeService, routingService) {
    var _a;

    this.platformID = platformID;
    this.stripeKey = stripeKey;
    this.cdr = cdr;
    this.router = router;
    this._router = _router;
    this.titleService = titleService;
    this.metaService = metaService;
    this.loadService = loadService;
    this.spinner = spinner;
    this.rootComponent = rootComponent;
    this.stripeService = stripeService;
    this.routingService = routingService;
    this.useCard = false;
    this.err = "";
    this.loadingName = '';
    this.isSpinning = false;
    this.useOtherPaymentMethod = false;
    this.paymentRequestOptions = {
      country: 'US',
      currency: 'usd',
      total: {
        label: "Thred Apps Inc.",
        amount: 0
      },
      requestPayerName: false,
      requestPayerEmail: false
    };
    this.useOtherPaymentMethod = (_a = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.useOtherPaymentMethod) !== null && _a !== void 0 ? _a : false;
  }

  storeInfo() {
    return _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo;
  }

  availableCurrencies() {
    return _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.availableCurrencies;
  }

  selectedCurrency() {
    return _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.selectedCurrency;
  }

  templates() {
    return _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.availableTemplates;
  }

  availableTemplates() {
    return _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.availableTemplates;
  }

  selectedProduct() {
    return _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.selectedProduct;
  }

  selectedTemplate() {
    return _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.selectedTemplate;
  }

  shippingAddress() {
    return _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.shippingInfo;
  }

  billingAddress() {
    return _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.billingInfo;
  }

  tax() {
    return _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.shippingTax;
  }

  cartLength() {
    var _a, _b;

    if (((_a = this.rootComponent.cart) === null || _a === void 0 ? void 0 : _a.length) == 0) {
      return "";
    }

    return (_b = this.rootComponent.cart) === null || _b === void 0 ? void 0 : _b.length;
  }

  cart() {
    var _a;

    return (_a = this.rootComponent.cart) !== null && _a !== void 0 ? _a : [];
  }

  routeToCart() {
    this.rootComponent.routeToCart();
  }

  productTax() {
    var _a;

    let tax = (_a = this.productTaxNum()) !== null && _a !== void 0 ? _a : 0;

    if (tax > 0) {
      return this.numberWithCommas(this.formatPrice(tax !== null && tax !== void 0 ? tax : 0));
    }

    return "N/A";
  }

  productTaxNum() {
    var _a;

    return (this.total() + this.shippingNum()) * ((_a = this.tax()) !== null && _a !== void 0 ? _a : 0);
  }

  orderTotal() {
    return this.numberWithCommas(this.formatPrice(this.total() + this.shippingNum() + this.productTaxNum()));
  }

  getColor(product) {
    var _a, _b, _c;

    let colors = (_a = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.templates.find(template => template.productCode == (product === null || product === void 0 ? void 0 : product.productType))) === null || _a === void 0 ? void 0 : _a.colors;
    return (_c = (_b = colors === null || colors === void 0 ? void 0 : colors.find(color => color.code == (product === null || product === void 0 ? void 0 : product.templateColor))) === null || _b === void 0 ? void 0 : _b.display) !== null && _c !== void 0 ? _c : "White";
  }

  stillLoadingProducts() {
    var _a, _b;

    return ((_b = (_a = this.rootComponent.cart) === null || _a === void 0 ? void 0 : _a.filter(product => {
      var _a;

      return ((_a = product.product) === null || _a === void 0 ? void 0 : _a.price) == undefined;
    })) === null || _b === void 0 ? void 0 : _b.length) != 0;
  }

  stillLoading() {
    var _a, _b, _c, _d;

    return ((_b = (_a = this.rootComponent.cart) === null || _a === void 0 ? void 0 : _a.filter(product => {
      var _a;

      return ((_a = product.product) === null || _a === void 0 ? void 0 : _a.price) == undefined;
    })) === null || _b === void 0 ? void 0 : _b.length) != 0 || ((_d = (_c = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.availableCurrencies) === null || _c === void 0 ? void 0 : _c.filter(currency => currency.shipping_rate_usd == undefined)) === null || _d === void 0 ? void 0 : _d.length) != 0 || _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.shippingTax == undefined;
  }

  calculateShipping($event) {
    let country = $event.target.options[$event.target.options.selectedIndex].text;
    this.selectedCountry = country;
  }

  onKey(event) {
    const inputValue = event.target.value;
    this.selectedCode = inputValue;
  }

  calculateDiscount() {// this.selectedCountry = country
  }

  updateProductQty(product, newQty) {
    var _this = this;

    return (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var _a, _b, _c;

      product.quantity = Number(newQty);
      let mappedData = [];
      let dataToRemove = [];
      (_a = _this.rootComponent.cart) === null || _a === void 0 ? void 0 : _a.forEach((cartProduct, index) => {
        var _a, _b, _c;

        if (((_a = cartProduct.quantity) !== null && _a !== void 0 ? _a : 0) > 0) {
          let data = {
            "UID": (_b = cartProduct.product) === null || _b === void 0 ? void 0 : _b.uid,
            "Size": cartProduct.size,
            "Qty": cartProduct.quantity,
            "Timestamp": cartProduct.timestamp,
            "Post_ID": (_c = cartProduct.product) === null || _c === void 0 ? void 0 : _c.productID
          };
          mappedData.push(data);
        } else {
          dataToRemove.push(cartProduct);
        }
      });
      _this.rootComponent.cart = (_b = _this.rootComponent.cart) === null || _b === void 0 ? void 0 : _b.filter(cartProduct => !dataToRemove.includes(cartProduct));
      yield _this.loadService.changeCart(mappedData);

      if (((_c = _this.rootComponent.cart) === null || _c === void 0 ? void 0 : _c.length) == 0) {
        _this.routeToCart();

        return;
      }

      _this.cdr.detectChanges(); // this.selectedCountry = country

    })();
  }

  calculate() {
    this.cdr.detectChanges();
  }

  shipping() {
    var _a, _b;

    let shipping = ((_b = (_a = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.availableCurrencies.find(country => country.name_full == this.selectedCountry)) === null || _a === void 0 ? void 0 : _a.shipping_rate_usd) !== null && _b !== void 0 ? _b : 0) / 100;

    if (shipping > 0) {
      return this.numberWithCommas(this.formatPrice(shipping));
    }

    return "FREE";
  }

  shippingNum() {
    var _a, _b;

    return ((_b = (_a = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.availableCurrencies.find(country => country.name_full == this.selectedCountry)) === null || _a === void 0 ? void 0 : _a.shipping_rate_usd) !== null && _b !== void 0 ? _b : 0) / 100;
  }

  total() {
    var _a;

    var total = 0;
    (_a = this.rootComponent.cart) === null || _a === void 0 ? void 0 : _a.forEach(product => {
      var _a, _b, _c;

      total += ((_b = (_a = product.product) === null || _a === void 0 ? void 0 : _a.price) !== null && _b !== void 0 ? _b : 0) * ((_c = product.quantity) !== null && _c !== void 0 ? _c : 1);
    });
    return total / 100;
  }

  format(d) {
    return _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.months[d.getMonth()].substring(0, 3) + " " + d.getDate() + " " + d.getFullYear();
  }

  hasCart() {
    var _a, _b;

    return (_b = ((_a = this.rootComponent.cart) === null || _a === void 0 ? void 0 : _a.length) != 0) !== null && _b !== void 0 ? _b : false;
  }

  callback() {
    var _this2 = this;

    return (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;

      if (yield _this2.loadService.authenticated()) {
        if (_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo.username) {
          // this.cardOptions.style!.paymentRequestButton.theme = this.theme()
          _this2.loadingName = (_b = (_a = _this2.storeInfo()) === null || _a === void 0 ? void 0 : _a.fullName) !== null && _b !== void 0 ? _b : '';

          _this2.showSpinner();

          _this2.rootComponent.setFavIcon(_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo.profileLink.toString());

          _this2.rootComponent.setOptions();

          _this2.addTags((_c = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo.fullName) !== null && _c !== void 0 ? _c : "Thred", ((_d = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo.profileLink) !== null && _d !== void 0 ? _d : new URL("https://shopmythred.com")).toString(), (_e = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo.bio) !== null && _e !== void 0 ? _e : "Check out my Thred Store!", "shopmythred.com/" + _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo.username);

          if (_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.userInfo == undefined && (0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.isPlatformBrowser)(_this2.platformID)) {
            _this2.loadService.getCustomer();
          } else if (((_f = _this2.rootComponent.cart) === null || _f === void 0 ? void 0 : _f.length) == 0 && (0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.isPlatformBrowser)(_this2.platformID)) {
            _this2.routeToCart();

            return;
          } else if (_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.shippingInfo == undefined && (0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.isPlatformBrowser)(_this2.platformID)) {
            _this2.loadService.getShippingAddress();
          } else if ((((_g = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.shippingInfo) === null || _g === void 0 ? void 0 : _g.email) == "" || ((_h = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.shippingInfo) === null || _h === void 0 ? void 0 : _h.email) == undefined) && (0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.isPlatformBrowser)(_this2.platformID)) {
            _this2.routeToCart();

            return;
          } else if (!_this2.useOtherPaymentMethod && _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.billingInfo == undefined && (0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.isPlatformBrowser)(_this2.platformID)) {
            _this2.loadService.getBillingInfo();
          } else if (!_this2.useOtherPaymentMethod && (((_j = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.billingInfo) === null || _j === void 0 ? void 0 : _j.number) == "" || ((_k = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.billingInfo) === null || _k === void 0 ? void 0 : _k.number) == undefined) && (0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.isPlatformBrowser)(_this2.platformID)) {
            _this2.routeToBilling();

            return;
          } else if (_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.availableCurrencies.length == 0 && (0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.isPlatformBrowser)(_this2.platformID)) {
            _this2.loadService.getCountries();
          } else if (_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.templates.length == 0 && (0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.isPlatformBrowser)(_this2.platformID)) {
            _this2.loadService.getTemplates();
          } else if (((_l = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.billingInfo) === null || _l === void 0 ? void 0 : _l.admin_area) == undefined || ((_m = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.billingInfo) === null || _m === void 0 ? void 0 : _m.admin_area) == "" && (0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.isPlatformBrowser)(_this2.platformID)) {
            _this2.loadService.getBillingAddress();
          } else if (_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.shippingTax == undefined && ((_o = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.billingInfo) === null || _o === void 0 ? void 0 : _o.admin_area) && ((_p = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.billingInfo) === null || _p === void 0 ? void 0 : _p.admin_area) != "" && (0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.isPlatformBrowser)(_this2.platformID)) {
            _this2.loadService.getTax(_this2.billingAddress());
          } else {
            console.log(_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.billingInfo.country);
            let same = (_q = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.availableCurrencies) === null || _q === void 0 ? void 0 : _q.filter(currency => {
              var _a;

              return currency.name_full == ((_a = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.billingInfo) === null || _a === void 0 ? void 0 : _a.country);
            });

            if (same && same.length != 0) {
              const amount = Math.round(((_r = (_this2.total() + _this2.shippingNum() + _this2.productTaxNum()) * same[0].rate) !== null && _r !== void 0 ? _r : 1) * 100);
              console.log(same[0].currency_name);
              console.log(amount);
              _this2.paymentRequestOptions = {
                country: same[0].name,
                currency: same[0].currency_name.toLowerCase(),
                total: {
                  label: (_s = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo.fullName) !== null && _s !== void 0 ? _s : "Thred Apps Inc.",
                  amount: amount
                },
                requestPayerName: true,
                requestPayerEmail: true
              };
              console.log(_this2.paymentRequestOptions);
            } else {
              const amount = Math.round((_this2.total() + _this2.shippingNum() + _this2.productTaxNum()) * 100);
              console.log(same[0].currency_name);
              console.log(amount);
              _this2.paymentRequestOptions = {
                country: 'US',
                currency: 'usd',
                total: {
                  label: (_t = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo.fullName) !== null && _t !== void 0 ? _t : "Thred Apps Inc.",
                  amount: amount
                },
                requestPayerName: true,
                requestPayerEmail: true
              };
            }

            _this2.cdr.detectChanges();
          }
        } else {
          _this2.routingService.routeTo404(_this2.getStoreName().isCustom);
        }
      } else {
        _this2.routeToCart();
      }
    })();
  }

  theme() {
    if (this.storeInfo().colorStyle.back_code == 'light') {
      return 'dark';
    }

    return 'light';
  }

  selectedIndicator() {
    var _a, _b, _c, _d, _e, _f;

    let co = (_b = (_a = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo) === null || _a === void 0 ? void 0 : _a.loading) === null || _b === void 0 ? void 0 : _b.color;
    let bco = (_d = (_c = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo) === null || _c === void 0 ? void 0 : _c.loading) === null || _d === void 0 ? void 0 : _d.bg_color;
    let name = (_f = (_e = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo) === null || _e === void 0 ? void 0 : _e.loading) === null || _f === void 0 ? void 0 : _f.name;
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

    let co = (_b = (_a = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo) === null || _a === void 0 ? void 0 : _a.colorStyle) === null || _b === void 0 ? void 0 : _b.btn_color;
    let bco = (_d = (_c = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo) === null || _c === void 0 ? void 0 : _c.colorStyle) === null || _d === void 0 ? void 0 : _d.bg_color;
    let name = (_f = (_e = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo) === null || _e === void 0 ? void 0 : _e.colorStyle) === null || _f === void 0 ? void 0 : _f.name;
    let color = "rgba(" + co[0] + "," + co[1] + "," + co[2] + "," + co[3] + ")";
    let bg_color = "rgba(" + bco[0] + "," + bco[1] + "," + bco[2] + "," + bco[3] + ")";
    var theme = {
      "name": name,
      "color": color,
      "bg_color": bg_color
    };
    return theme;
  }

  showSpinner() {
    if (!this.isSpinning) {
      this.isSpinning = true;

      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.isPlatformBrowser)(this.platformID)) {
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
      this.isSpinning = false; // this.spinner.hide()
    }
  }

  routeToProduct(productID) {
    this.rootComponent.routeToProduct(productID);
  }

  routeToShipping() {
    this.rootComponent.routeToShipping();
  }

  routeToBilling() {
    this.rootComponent.routeToBilling();
  }

  routeToShop() {
    this.rootComponent.routeToShop();
  }

  placeOrder(event) {
    /** spinner starts on init */
    this.loadingName = 'Placing Order...';

    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.isPlatformBrowser)(this.platformID)) {
      this.spinner.show();
    }

    ;
    event.target.disabled = true;
    let storeID = this.storeInfo().uid;
    this.loadService.createPayment(storeID, true, (order_id, client_secret, err) => {
      this.spinner.hide();

      if (err) {
        this.err = err;
      } else {
        this.finishedOrder(order_id, client_secret);
      }
    });
  }

  finishedOrder(order_id, _client_secret) {
    this.loadingName = '';

    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.isPlatformBrowser)(this.platformID)) {
      this.spinner.hide();
    }

    ;
    this.rootComponent.routeToOrder(order_id);
  }

  init() {
    _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.shippingInfo = undefined;
    _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.billingInfo = undefined;
    _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.shippingTax = undefined;
    const storeInfo = this.getStoreName();
    this.downloadAllStoreInfo(storeInfo.link, storeInfo.isCustom);
  }

  downloadAllStoreInfo(storeName, isCustom = false) {
    this.loadService.myCallback = () => this.callback();

    this.loadService.getUser(storeName, undefined, isCustom);
  }

  getStoreName() {
    var request = "";

    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.isPlatformServer)(this.platformID)) {
      request = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.URL;
      console.log(request);
    } else {
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

  onPaymentMethod(ev) {
    let storeID = this.storeInfo().uid;
    this.loadService.createPayment(storeID, false, (order_id, client_secret, err) => {
      return this.stripeService.confirmCardPayment(client_secret, {
        payment_method: ev.paymentMethod.id
      }, {
        handleActions: false
      }).subscribe(confirmResult => {
        if (confirmResult.error) {
          // Report to the browser that the payment failed, 
          // prompting it to re-show the payment interface, 
          // or show an error message and close the payment.
          this.err = err;
          ev.complete('fail');
          console.log(confirmResult.error);
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_7__.of)({
            error: new Error('Error Confirming the payment')
          });
        } else {
          // Report to the browser that the confirmation was 
          // successful, prompting it to close the browser 
          // payment method collection interface.
          console.log('success');
          ev.complete('success'); // Let Stripe.js handle the rest of the payment flow.

          return this.finishedOrder(order_id, client_secret);
        }
      });
    });
  }

  getShippingAddressSecond() {
    var _a, _b;

    var address = (_a = this.shippingAddress()) === null || _a === void 0 ? void 0 : _a.street;
    var unit = (_b = this.shippingAddress()) === null || _b === void 0 ? void 0 : _b.unit;
    if (unit) address += ". " + unit;
    return address;
  }

  getShippingAddressThird() {
    var _a, _b, _c;

    return ((_a = this.shippingAddress()) === null || _a === void 0 ? void 0 : _a.city) + ", " + ((_b = this.shippingAddress()) === null || _b === void 0 ? void 0 : _b.admin_area) + ". " + ((_c = this.shippingAddress()) === null || _c === void 0 ? void 0 : _c.postal);
  }

  itemCount() {
    var _a;

    var count = 0;
    (_a = this.rootComponent.cart) === null || _a === void 0 ? void 0 : _a.forEach(product => {
      var _a;

      count += (_a = product.quantity) !== null && _a !== void 0 ? _a : 0;
    });
    return count;
  }

  getShippingAddressFirst() {
    var _a, _b;

    var name = (_a = this.shippingAddress()) === null || _a === void 0 ? void 0 : _a.name;
    var company = (_b = this.shippingAddress()) === null || _b === void 0 ? void 0 : _b.company;
    if (company) name += " - " + company;
    return name;
  }

  getBillingAddressFirst() {
    var _a, _b;

    var name = ((_a = this.billingAddress()) === null || _a === void 0 ? void 0 : _a.brand) + " ending in " + ((_b = this.billingAddress()) === null || _b === void 0 ? void 0 : _b.number);

    if (this.useOtherPaymentMethod) {
      name = "";
    }

    return name;
  }

  isBrowser() {
    return (0,_angular_common__WEBPACK_IMPORTED_MODULE_6__.isPlatformBrowser)(this.platformID);
  }

  formatPrice(price) {
    var priceAsString = new String((price * _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.selectedCurrency.rate).toFixed(2));
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

    return this.numberWithCommas(this.getCurrencyForCountry(_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.selectedCurrency, _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.selectedCurrency.name != "US") + priceAsString);
  }

  numberWithCommas(x) {
    return x.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  getCurrencyForCountry(country, shouldShowName) {
    var returnItem = country.currency_symbol;
    if (shouldShowName) returnItem = country.name + " " + returnItem;
    return returnItem;
  }

  addTags(title, imgUrl, description, url) {
    this.metaService.updateTag({
      property: 'og:title',
      content: title + " - " + "Home"
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

  ngAfterViewInit() {}

  ngOnInit() {
    this.init();
  }

}

CheckoutComponent.ɵfac = function CheckoutComponent_Factory(t) {
  return new (t || CheckoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_stripe__WEBPACK_IMPORTED_MODULE_8__.STRIPE_PUBLISHABLE_KEY), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.Meta), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_load_service__WEBPACK_IMPORTED_MODULE_2__.LoadService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_stripe__WEBPACK_IMPORTED_MODULE_8__.StripeService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_routing_service__WEBPACK_IMPORTED_MODULE_4__.RoutingService));
};

CheckoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: CheckoutComponent,
  selectors: [["app-checkout"]],
  decls: 4,
  vars: 3,
  consts: [["size", "large", 3, "bdColor", "color", "type", "fullScreen", 4, "ngIf"], [3, "hidden", "class", 4, "ngIf"], ["class", "py-5", 3, "hidden", "background-color", 4, "ngIf"], ["size", "large", 3, "bdColor", "color", "type", "fullScreen"], [1, "text-center"], [3, "hidden"], [1, "cover", 2, "background-image", "url(https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Resources%2FSample-Walls%2FHome%2F1.jpg?alt=media)"], [1, "d-flex", "align-items-center", "justify-content-center", 2, "height", "200px", "font-weight", "bold", "font-size", "35px"], [1, "text-center", 2, "line-height", "1.2em", "text-shadow", "2px 2px 4px #42424281"], [1, "text-center", 2, "line-height", "1.2em", "font-size", "25px", "text-shadow", "2px 2px 4px #42424281"], [3, "inline"], [1, "py-5", 3, "hidden"], [1, "container", "pb-5", "mb-2", "mb-md-4"], [1, "row"], [1, "col-lg-8"], [1, "py-0", "px-xl-2"], [1, "text-accent", 3, "hidden"], [1, "h6", "mb-3", "pb-1", "ps-4", "mt-2"], [1, "fw-normal", "ps-4", 2, "font-style", "italic"], ["role", "button", 1, "text-primary", "text-decoration-none", "ps-4", 2, "font-weight", "bold", 3, "href", "click"], ["role", "button", 1, "text-primary", "text-decoration-none", "ps-4", 2, "font-weight", "bold", 3, "click"], [1, "h6", "mb-1", "pb-1", "ps-2", "mt-2"], [1, "py-2", "px-xl-2"], ["class", "d-sm-flex justify-content-between align-items-center pb-3 pt-3", 4, "ngFor", "ngForOf"], [1, "col-lg-4", "pt-4", "pt-lg-0", "ps-xl-5"], [1, "text-center", "mt-1", "mb-3", 2, "line-height", "1.0em", "font-size", "12px", "height", "15px", "font-weight", "normal", "color", "red", 3, "hidden"], [1, "text-center", "mt-2"], ["class", "btn mb-4 d-flex flex-wrap", "style", "font-weight:bold; font-size:20px; justify-content: center;", 3, "font-family", "background-color", "color", "innerHTML", "click", 4, "ngIf"], ["class", "mb-4", 3, "paymentOptions", "paymentMethod", 4, "ngIf"], [1, "text-center", "mt-4", "pt-3", "border-top", "border-bottom"], [1, "d-flex", "justify-content-between"], [1, "fw-bold", 2, "font-size", "9"], [1, "fw-normal", 2, "font-size", "9"], [1, "d-flex", "justify-content-between", "pt-2", "mt-2"], [1, "d-sm-flex", "justify-content-between", "align-items-center", "pb-3", "pt-3"], [1, "d-block", "d-sm-flex", "align-items-center", "text-center", "text-sm-start"], ["role", "button", 1, "d-inline-block", "flex-shrink-0", "mx-auto", "me-sm-4", 3, "click"], ["onerror", "this.src='https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Resources%2Flink_empty.jpeg?alt=media';", "width", "160", "alt", "Product", 2, "border-radius", "2.5%", 3, "src"], [1, "pt-2"], ["role", "button", 2, "font-weight", "bold", 3, "click"], [1, "fs-sm"], [1, "text-muted", "me-2"], [1, "fs-lg", "text-accent", "pt-2"], [1, "pt-2", "pt-sm-0", "ps-sm-3", "mx-auto", "mx-sm-0", "text-center", "text-sm-start", 2, "max-width", "5.5rem"], ["for", "quantity_i", 1, "form-label"], ["type", "number", "id", "quantity_i", "min", "1", 1, "form-control", 3, "value", "change"], ["qtyChooser", ""], ["type", "button", 1, "btn", "btn-link", "px-0", "text-danger", 3, "click"], [1, "ci-close-circle", "me-0"], [1, "fs-sm", 2, "font-size", "10px"], [1, "btn", "mb-4", "d-flex", "flex-wrap", 2, "font-weight", "bold", "font-size", "20px", "justify-content", "center", 3, "innerHTML", "click"], [1, "mb-4", 3, "paymentOptions", "paymentMethod"]],
  template: function CheckoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, CheckoutComponent_ngx_spinner_1_Template, 3, 10, "ngx-spinner", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, CheckoutComponent_header_2_Template, 10, 11, "header", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, CheckoutComponent_section_3_Template, 62, 105, "section", 2);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isBrowser());
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isBrowser() && ctx.hasCart() && ctx.storeInfo().username != undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.isBrowser() && ctx.hasCart() && ctx.storeInfo().username != undefined);
    }
  },
  directives: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, ngx_stripe__WEBPACK_IMPORTED_MODULE_8__.StripePaymentRequestButtonComponent],
  styles: [".centered[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n\n.cover[_ngcontent-%COMP%]{\n    color: rgb(255, 255, 255);\n    position: relative;\n    \n    background-repeat: no-repeat;\n    background-position-x: center;\n    background-position-y: center;\n    background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrb3V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7RUFDbEM7O0FBRUY7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLDZCQUE2QjtJQUk3QixzQkFBc0I7QUFDMUIiLCJmaWxlIjoiY2hlY2tvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jZW50ZXJlZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgfVxuXG4uY292ZXJ7XG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLyogaGVpZ2h0OiA1MDBweDsgKi9cbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogY2VudGVyO1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4iXX0= */"]
});

/***/ }),

/***/ 28400:
/*!*********************************************!*\
  !*** ./src/app/checkout/checkout.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckoutModule": () => (/* binding */ CheckoutModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals */ 37503);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 93738);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ 79866);
/* harmony import */ var _checkout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkout.component */ 81594);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var ngx_stripe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-stripe */ 72284);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);











const routes = [
    {
        path: '',
        component: _checkout_component__WEBPACK_IMPORTED_MODULE_1__.CheckoutComponent,
    },
];
class CheckoutModule {
}
CheckoutModule.ɵfac = function CheckoutModule_Factory(t) { return new (t || CheckoutModule)(); };
CheckoutModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: CheckoutModule, bootstrap: [_checkout_component__WEBPACK_IMPORTED_MODULE_1__.CheckoutComponent] });
CheckoutModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [_globals__WEBPACK_IMPORTED_MODULE_0__.Globals], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule,
            ngx_spinner__WEBPACK_IMPORTED_MODULE_6__.NgxSpinnerModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes),
            ngx_stripe__WEBPACK_IMPORTED_MODULE_8__.NgxStripeModule.forRoot('pk_live_m7nEWhyTHoxGspcxtJAci6pu002LUiOnJK'),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](CheckoutModule, { declarations: [_checkout_component__WEBPACK_IMPORTED_MODULE_1__.CheckoutComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__.MatIconModule,
        ngx_spinner__WEBPACK_IMPORTED_MODULE_6__.NgxSpinnerModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, ngx_stripe__WEBPACK_IMPORTED_MODULE_8__.NgxStripeModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_checkout_checkout_module_ts.js.map