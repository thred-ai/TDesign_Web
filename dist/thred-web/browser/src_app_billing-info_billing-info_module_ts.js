(self["webpackChunkthred_web"] = self["webpackChunkthred_web"] || []).push([["src_app_billing-info_billing-info_module_ts"],{

/***/ 52221:
/*!********************************************************!*\
  !*** ./src/app/billing-info/billing-info.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BillingInfoComponent": () => (/* binding */ BillingInfoComponent)
/* harmony export */ });
/* harmony import */ var _Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 16304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globals */ 37503);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _models_billing_address_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/billing-address.model */ 47677);
/* harmony import */ var ngx_stripe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-stripe */ 72284);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _services_load_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/load.service */ 6029);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.component */ 55041);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ 79866);
/* harmony import */ var _services_routing_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/routing.service */ 78078);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ 93738);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/select */ 67441);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ 5015);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/radio */ 82613);


























function BillingInfoComponent_ngx_spinner_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ngx-spinner", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h3", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Updating Billing Information...\n");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("color", ctx_r0.selectedIndicator().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("bdColor", ctx_r0.selectedIndicator().bg_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("color", ctx_r0.selectedIndicator().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("type", ctx_r0.selectedIndicator().name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("fullScreen", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("font-family", ctx_r0.storeInfo().fontName);
  }
}

function BillingInfoComponent_header_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "header");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " BILLING ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, " SECURE CHECKOUT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "mat-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, " lock ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMapInterpolate1"]("bg-", ctx_r1.storeInfo().colorStyle.back_code, " py-6");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-image", "url(" + ctx_r1.storeInfo().themeLink.toString() + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("font-family", ctx_r1.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("font-family", ctx_r1.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("inline", true);
  }
}

function BillingInfoComponent_section_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BillingInfoComponent_section_4_div_2_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return ctx_r24.useG();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("height", 45, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", "/assets/google_pay_" + ctx_r3.storeInfo().colorStyle.back_code + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
  }
}

function BillingInfoComponent_section_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BillingInfoComponent_section_4_div_3_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return ctx_r26.useM();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("height", 45, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", "/assets/microsoft_pay_" + ctx_r4.storeInfo().colorStyle.back_code + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
  }
}

function BillingInfoComponent_section_4_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BillingInfoComponent_section_4_div_4_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return ctx_r28.useA();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("height", 45, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", "/assets/apple_pay_" + ctx_r5.storeInfo().colorStyle.back_code + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
  }
}

function BillingInfoComponent_section_4_mat_card_header_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Billing Method");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("color", ctx_r6.selectedTheme().color)("font-family", ctx_r6.storeInfo().fontName);
  }
}

function BillingInfoComponent_section_4_div_11_mat_error_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Cardholder name is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function BillingInfoComponent_section_4_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-form-field", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "mat-placeholder", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Cardholder Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, BillingInfoComponent_section_4_div_11_mat_error_6_Template, 4, 0, "mat-error", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMapInterpolate1"]("text-", ctx_r7.storeInfo().colorStyle.text_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("color", ctx_r7.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("color", ctx_r7.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r7.billingForm.controls["cardholder"].hasError("required"));
  }
}

function BillingInfoComponent_section_4_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "ngx-stripe-card", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("options", ctx_r8.cardOptions)("elementsOptions", ctx_r8.elementsOptions);
  }
}

function BillingInfoComponent_section_4_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-form-field", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "mat-placeholder", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Company (Optional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMapInterpolate1"]("text-", ctx_r9.storeInfo().colorStyle.text_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("color", ctx_r9.selectedTheme().color);
  }
}

function BillingInfoComponent_section_4_mat_error_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Address is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function BillingInfoComponent_section_4_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "button", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BillingInfoComponent_section_4_div_24_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r32);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return ctx_r31.hasUnitNumber = !ctx_r31.hasUnitNumber;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " + Add C/O, Apt, Suite, Unit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMapInterpolate1"]("text-", ctx_r11.storeInfo().colorStyle.text_code, "");
  }
}

function BillingInfoComponent_section_4_div_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-form-field", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "textarea", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "mat-placeholder", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Address 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMapInterpolate1"]("text-", ctx_r12.storeInfo().colorStyle.text_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("color", ctx_r12.selectedTheme().color);
  }
}

function BillingInfoComponent_section_4_mat_option_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const country_r33 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMapInterpolate2"]("not-empty-select text-", ctx_r13.storeInfo().colorStyle.text_code, " bg-", ctx_r13.storeInfo().colorStyle.back_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", country_r33.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", country_r33.name, " ");
  }
}

function BillingInfoComponent_section_4_mat_error_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Country is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function BillingInfoComponent_section_4_mat_error_39_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " City is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function BillingInfoComponent_section_4_mat_option_43_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const state_r34 = ctx.$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMapInterpolate2"]("not-empty-select text-", ctx_r16.storeInfo().colorStyle.text_code, " bg-", ctx_r16.storeInfo().colorStyle.back_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", state_r34.abbreviation);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", state_r34.name, " ");
  }
}

function BillingInfoComponent_section_4_mat_error_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " State is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function BillingInfoComponent_section_4_div_56_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-radio-group", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "mat-radio-button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function BillingInfoComponent_section_4_div_56_Template_mat_radio_button_change_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r36);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return ctx_r35.radioChange($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Use Shipping Address ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "mat-radio-button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function BillingInfoComponent_section_4_div_56_Template_mat_radio_button_change_7_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r36);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return ctx_r37.radioChange($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Use This Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMapInterpolate1"]("text-", ctx_r19.storeInfo().colorStyle.text_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMapInterpolate1"]("text-", ctx_r19.storeInfo().colorStyle.text_code, "");
  }
}

function BillingInfoComponent_section_4_div_89_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BillingInfoComponent_section_4_div_89_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r39);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return ctx_r38.addCard();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-color", ctx_r20.buttonBack());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("height", 45, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", "/assets/google_pay_" + ctx_r20.storeInfo().colorStyle.back_code + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
  }
}

function BillingInfoComponent_section_4_div_90_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BillingInfoComponent_section_4_div_90_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r41);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return ctx_r40.addCard();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-color", ctx_r21.buttonBack());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("height", 45, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", "/assets/microsoft_pay_" + ctx_r21.storeInfo().colorStyle.back_code + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
  }
}

function BillingInfoComponent_section_4_div_91_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BillingInfoComponent_section_4_div_91_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r43);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return ctx_r42.addCard();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-color", ctx_r22.buttonBack());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("height", 45, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", "/assets/apple_pay_" + ctx_r22.storeInfo().colorStyle.back_code + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
  }
}

function BillingInfoComponent_section_4_a_93_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BillingInfoComponent_section_4_a_93_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r45);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return ctx_r44.addCard();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("font-family", ctx_r23.storeInfo().fontName)("background-color", ctx_r23.selectedTheme().color)("color", ctx_r23.selectedTheme().bg_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHTML", "Review Order", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
  }
}

function BillingInfoComponent_section_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, BillingInfoComponent_section_4_div_2_Template, 3, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, BillingInfoComponent_section_4_div_3_Template, 3, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, BillingInfoComponent_section_4_div_4_Template, 3, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "section", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "form", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, BillingInfoComponent_section_4_mat_card_header_9_Template, 3, 5, "mat-card-header", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, BillingInfoComponent_section_4_div_11_Template, 7, 9, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, BillingInfoComponent_section_4_div_12_Template, 3, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, BillingInfoComponent_section_4_div_13_Template, 6, 5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Billing Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "mat-form-field", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](20, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "mat-placeholder", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, BillingInfoComponent_section_4_mat_error_23_Template, 4, 0, "mat-error", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, BillingInfoComponent_section_4_div_24_Template, 4, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, BillingInfoComponent_section_4_div_25_Template, 6, 5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "mat-select", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, BillingInfoComponent_section_4_mat_option_30_Template, 2, 6, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "mat-placeholder", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "Country");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](33, BillingInfoComponent_section_4_mat_error_33_Template, 4, 0, "mat-error", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "mat-form-field", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](36, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "mat-placeholder", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](39, BillingInfoComponent_section_4_mat_error_39_Template, 4, 0, "mat-error", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "mat-form-field", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "mat-select", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](43, BillingInfoComponent_section_4_mat_option_43_Template, 2, 6, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "mat-placeholder", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](46, BillingInfoComponent_section_4_mat_error_46_Template, 4, 0, "mat-error", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "mat-form-field", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](50, "input", 30, 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "mat-placeholder", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "mat-hint", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](56, BillingInfoComponent_section_4_div_56_Template, 9, 6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "aside", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "h2", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](62, "Subtotal");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "h3", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "h3", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "a", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](69, "Shipping estimates");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "form", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "h2", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](75);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "select", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function BillingInfoComponent_section_4_Template_select_change_76_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r47);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r46.calculateShipping($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](77, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](78, "Choose your country");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](80, "United States");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](81, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](82, "Canada");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](83, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](84, "United Kingdom");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](85, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](86, "Please choose your country!");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](87, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function BillingInfoComponent_section_4_Template_button_click_87_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r47);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r48.calculate();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](88, "Calculate shipping");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](89, BillingInfoComponent_section_4_div_89_Template, 3, 6, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](90, BillingInfoComponent_section_4_div_90_Template, 3, 6, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](91, BillingInfoComponent_section_4_div_91_Template, 3, 6, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](92, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](93, BillingInfoComponent_section_4_a_93_Template, 1, 9, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](94, "p", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](95);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](51);

    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-color", ctx_r2.selectedTheme().bg_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.googlePay && !ctx_r2.useGoogle);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.microsoftPay && !ctx_r2.useMicrosoft);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.applePay && !ctx_r2.useApple);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r2.billingForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMapInterpolate1"]("shipping-card bg-", ctx_r2.storeInfo().colorStyle.back_code, " mt-0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.useGoogle != true && ctx_r2.useApple != true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.useGoogle != true && ctx_r2.useApple != true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.useGoogle != true && ctx_r2.useApple != true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.useGoogle != true && ctx_r2.useApple != true && ctx_r2.useMicrosoft != true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMapInterpolate1"]("text-", ctx_r2.storeInfo().colorStyle.text_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("font-family", ctx_r2.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMapInterpolate1"]("text-", ctx_r2.storeInfo().colorStyle.text_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("color", ctx_r2.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.billingForm.controls["address"].hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r2.hasUnitNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.hasUnitNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMapInterpolate1"]("full-width text-", ctx_r2.storeInfo().colorStyle.text_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.countries());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("color", ctx_r2.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.billingForm.controls["country"].hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMapInterpolate1"]("text-", ctx_r2.storeInfo().colorStyle.text_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("color", ctx_r2.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.billingForm.controls["city"].hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.states(ctx_r2.billingForm.controls["country"].value));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("color", ctx_r2.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.getStateFieldName(ctx_r2.billingForm.controls["country"].value));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.billingForm.controls["state"].hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMapInterpolate1"]("text-", ctx_r2.storeInfo().colorStyle.text_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("color", ctx_r2.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.getZipFieldName(ctx_r2.billingForm.controls["country"].value));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", _r18.value.length, " / 5");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.shippingAddress());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMapInterpolate1"]("bg-", ctx_r2.storeInfo().colorStyle.back_code, " rounded-3 shadow-lg p-4");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx_r2.stillLoadingProducts());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("font-family", ctx_r2.storeInfo().fontName)("color", ctx_r2.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("font-family", ctx_r2.storeInfo().fontName)("color", ctx_r2.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.formatPrice(ctx_r2.total()));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-color", ctx_r2.selectedTheme().bg_color)("color", ctx_r2.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("font-family", ctx_r2.storeInfo().fontName)("color", ctx_r2.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-color", ctx_r2.selectedTheme().bg_color)("color", ctx_r2.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("font-family", ctx_r2.storeInfo().fontName)("color", ctx_r2.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("Shipping: ", ctx_r2.shipping(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("color", ctx_r2.selectedTheme().color)("background-color", ctx_r2.selectedTheme().bg_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("font-family", ctx_r2.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.googlePay && ctx_r2.useGoogle);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.microsoftPay && ctx_r2.useMicrosoft);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.applePay && ctx_r2.useApple);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r2.useApple && !ctx_r2.useGoogle && !ctx_r2.useMicrosoft);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("font-family", ctx_r2.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx_r2.err == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r2.err, " ");
  }
}

class BillingInfoComponent {
  constructor(platformID, stripeKey, cdr, router, titleService, metaService, loadService, _router, fb, rootComponent, spinner, stripeService, window, routingService) {
    this.platformID = platformID;
    this.stripeKey = stripeKey;
    this.cdr = cdr;
    this.router = router;
    this.titleService = titleService;
    this.metaService = metaService;
    this.loadService = loadService;
    this._router = _router;
    this.fb = fb;
    this.rootComponent = rootComponent;
    this.spinner = spinner;
    this.stripeService = stripeService;
    this.window = window;
    this.routingService = routingService;
    this.cardOptions = {
      hidePostalCode: true,
      style: {
        base: {
          iconColor: '#06415F',
          color: '#051113',
          fontWeight: 'regular',
          fontFamily: 'Arial',
          fontSize: '16px',
          '::placeholder': {
            color: '#979999'
          }
        }
      }
    };
    this.elementsOptions = {
      locale: 'en'
    };
    this.billingForm = this.fb.group({
      company: null,
      cardholder: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      address: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      address2: null,
      country: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      city: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      state: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      postalCode: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(8)]],
      shipping: ['custom', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]
    });
    this.hasUnitNumber = false;
    this.validCard = false;
    this.err = "";
    this.applePay = false;
    this.googlePay = false;
    this.microsoftPay = false;
    this.useApple = false;
    this.useGoogle = false;
    this.useMicrosoft = false;
    this.paymentRequestOptions = {
      country: 'ES',
      currency: 'eur',
      total: {
        label: 'Demo Total',
        amount: 1099
      },
      requestPayerName: true,
      requestPayerEmail: true
    };
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

  shippingAddress() {
    return _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.shippingInfo;
  }

  states(country) {
    country = country === null || country === void 0 ? void 0 : country.toLowerCase();

    if (country == "canada") {
      return _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.caProvinces;
    }

    if (country == "united states") {
      return _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.usStates;
    }

    if (country == "united kingdom") {
      return _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.ukNations;
    }

    return _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.usStates;
  }

  countries() {
    return _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.countries;
  }

  getStateFieldName(country) {
    country = country === null || country === void 0 ? void 0 : country.toLowerCase();

    if (country == "canada") {
      return "Province";
    }

    if (country == "united states") {
      return "State";
    }

    if (country == "united kingdom") {
      return "Region";
    }

    return "State";
  }

  getZipFieldName(country) {
    country = country === null || country === void 0 ? void 0 : country.toLowerCase();

    if (country == "canada") {
      return "Postal Code";
    }

    if (country == "united states") {
      return "Zip Code";
    }

    if (country == "united kingdom") {
      return "Postal Code";
    }

    return "Zip Code";
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

  cartLength() {
    var _a, _b;

    if (((_a = this.rootComponent.cart) === null || _a === void 0 ? void 0 : _a.length) == 0) {
      return "";
    }

    return (_b = this.rootComponent.cart) === null || _b === void 0 ? void 0 : _b.length;
  }

  cart() {
    return this.rootComponent;
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

  calculateShipping($event) {
    let country = $event.target.options[$event.target.options.selectedIndex].text;
    this.selectedCountry = country;
  }

  firstName() {
    var _a;

    return (_a = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.billingInfo) === null || _a === void 0 ? void 0 : _a.name.split(' ').slice(0, -1).join(' ');
  }

  lastName() {
    var _a;

    return (_a = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.billingInfo) === null || _a === void 0 ? void 0 : _a.name.split(' ').slice(-1).join(' ');
  }

  onKey(event) {
    const inputValue = event.target.value;
    this.selectedCode = inputValue;
  }

  calculateDiscount() {// this.selectedCountry = country
  }

  radioChange(event) {
    var _a, _b, _c, _d, _e, _f, _g;

    let val = event.value;

    if (val == "shipping") {
      let sInfo = this.shippingAddress();
      this.billingForm.controls.company.setValue(sInfo === null || sInfo === void 0 ? void 0 : sInfo.company);
      this.billingForm.controls.country.setValue(sInfo === null || sInfo === void 0 ? void 0 : sInfo.country);
      this.billingForm.controls.city.setValue(sInfo === null || sInfo === void 0 ? void 0 : sInfo.city);
      this.billingForm.controls.state.setValue(sInfo === null || sInfo === void 0 ? void 0 : sInfo.admin_area);
      this.billingForm.controls.postalCode.setValue(sInfo === null || sInfo === void 0 ? void 0 : sInfo.postal);
      this.billingForm.controls.address.setValue(sInfo === null || sInfo === void 0 ? void 0 : sInfo.street);
      this.billingForm.controls.address2.setValue(sInfo === null || sInfo === void 0 ? void 0 : sInfo.unit);
      this.billingForm.controls.shipping.setValue("shipping");
    } else {
      this.billingForm.controls.company.setValue((_a = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.billingInfo) === null || _a === void 0 ? void 0 : _a.company);
      this.billingForm.controls.country.setValue((_b = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.billingInfo) === null || _b === void 0 ? void 0 : _b.country);
      this.billingForm.controls.city.setValue((_c = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.billingInfo) === null || _c === void 0 ? void 0 : _c.city);
      this.billingForm.controls.state.setValue((_d = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.billingInfo) === null || _d === void 0 ? void 0 : _d.admin_area);
      this.billingForm.controls.postalCode.setValue((_e = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.billingInfo) === null || _e === void 0 ? void 0 : _e.postal);
      this.billingForm.controls.address.setValue((_f = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.billingInfo) === null || _f === void 0 ? void 0 : _f.street);
      this.billingForm.controls.address2.setValue((_g = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.billingInfo) === null || _g === void 0 ? void 0 : _g.unit);
      this.billingForm.controls.shipping.setValue("custom");
    }

    this.cdr.detectChanges();
  }

  updateProductQty(product, newQty) {
    var _a, _b;

    product.quantity = Number(newQty);
    let mappedData = [];
    let dataToRemove = [];
    (_a = this.rootComponent.cart) === null || _a === void 0 ? void 0 : _a.forEach((cartProduct, index) => {
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
    this.rootComponent.cart = (_b = this.rootComponent.cart) === null || _b === void 0 ? void 0 : _b.filter(cartProduct => !dataToRemove.includes(cartProduct));
    this.loadService.changeCart(mappedData);
    this.cdr.detectChanges(); // this.selectedCountry = country
  }

  calculate() {
    this.cdr.detectChanges();
  }

  shipping() {
    var _a, _b;

    let shipping = ((_b = (_a = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.availableCurrencies.find(country => country.name_full == this.selectedCountry)) === null || _a === void 0 ? void 0 : _a.shipping_rate_usd) !== null && _b !== void 0 ? _b : 0) / 100;

    if (shipping > 0) {
      return this.formatPrice(shipping);
    }

    return "FREE";
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

  setForm() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;

    (_a = this.card) === null || _a === void 0 ? void 0 : _a.element.on('change', ({
      error
    }) => {
      this.validCard = !error;

      if (error) {
        console.log(error);
      }
    });
    this.billingForm.controls.company.setValue((_c = (_b = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.billingInfo) === null || _b === void 0 ? void 0 : _b.company) !== null && _c !== void 0 ? _c : "");
    this.billingForm.controls.cardholder.setValue((_e = (_d = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.billingInfo) === null || _d === void 0 ? void 0 : _d.name) !== null && _e !== void 0 ? _e : "");
    this.billingForm.controls.address.setValue((_g = (_f = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.billingInfo) === null || _f === void 0 ? void 0 : _f.street) !== null && _g !== void 0 ? _g : "");
    this.billingForm.controls.address2.setValue((_j = (_h = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.billingInfo) === null || _h === void 0 ? void 0 : _h.unit) !== null && _j !== void 0 ? _j : "");
    this.billingForm.controls.country.setValue((_l = (_k = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.billingInfo) === null || _k === void 0 ? void 0 : _k.country) !== null && _l !== void 0 ? _l : "");
    this.billingForm.controls.city.setValue((_o = (_m = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.billingInfo) === null || _m === void 0 ? void 0 : _m.city) !== null && _o !== void 0 ? _o : "");
    this.billingForm.controls.state.setValue((_q = (_p = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.billingInfo) === null || _p === void 0 ? void 0 : _p.admin_area) !== null && _q !== void 0 ? _q : "");
    this.billingForm.controls.postalCode.setValue((_s = (_r = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.billingInfo) === null || _r === void 0 ? void 0 : _r.postal) !== null && _s !== void 0 ? _s : "");
  }

  selectedIndicator() {
    var _a, _b, _c, _d, _e, _f;

    let co = (_b = (_a = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo) === null || _a === void 0 ? void 0 : _a.loading) === null || _b === void 0 ? void 0 : _b.color;
    let bco = (_d = (_c = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo) === null || _c === void 0 ? void 0 : _c.loading) === null || _d === void 0 ? void 0 : _d.bg_color;
    let name = (_f = (_e = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo) === null || _e === void 0 ? void 0 : _e.loading) === null || _f === void 0 ? void 0 : _f.name;
    let color = "rgba(" + co[0] + "," + co[1] + "," + co[2] + "," + co[3] + ")";
    let bg_color = "rgba(" + bco[0] + "," + bco[1] + "," + bco[2] + "," + bco[3] + ")";
    let indicator = {
      "name": name,
      "color": color,
      "bg_color": bg_color
    };
    return indicator;
  }

  callback() {
    var _this = this;

    return (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var _a, _b, _c;

      if (yield _this.loadService.authenticated()) {
        _this.cardOptions.style.base.color = _this.selectedTheme().color;
        _this.cardOptions.style.base.iconColor = _this.selectedTheme().color;
        _this.cardOptions.style.base['::placeholder'].color = _this.selectedTheme().color;

        if (_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo.username) {
          _this.rootComponent.setFavIcon(_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo.profileLink.toString());

          _this.addTags((_a = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo.fullName) !== null && _a !== void 0 ? _a : "Thred", ((_b = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo.profileLink) !== null && _b !== void 0 ? _b : new URL("https://shopmythred.com")).toString(), (_c = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo.bio) !== null && _c !== void 0 ? _c : "Check out my Thred Store!", "shopmythred.com/" + _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo.username);

          if (_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.billingInfo == undefined && (0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.isPlatformBrowser)(_this.platformID)) {
            _this.loadService.getBillingAddress();
          } else if (_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.shippingInfo == undefined && (0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.isPlatformBrowser)(_this.platformID)) {
            _this.loadService.getShippingAddress();
          } else if (_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.userInfo == undefined && (0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.isPlatformBrowser)(_this.platformID)) {
            _this.loadService.getCustomer();
          } else if (_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.availableCurrencies.length == 0 && (0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.isPlatformBrowser)(_this.platformID)) {
            _this.loadService.getCountries();
          } else if (_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.templates.length == 0 && (0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.isPlatformBrowser)(_this.platformID)) {
            _this.loadService.getTemplates();
          } else {
            _this.setForm();

            _this.cdr.detectChanges();
          }
        } else {
          _this.routingService.routeTo404(_this.getStoreName().isCustom);
        }
      } else {
        _this.routeToCart();
      }
    })();
  }

  addCard() {
    var _this2 = this;

    return (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var _a, _b, _c, _d;

      if (_this2.billingForm.valid && _this2.validCard) {
        let f = _this2.billingForm.controls;
        _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.billingInfo = new _models_billing_address_model__WEBPACK_IMPORTED_MODULE_2__.BillingInfo(f.cardholder.value, f.company.value, undefined, undefined, f.address.value, f.city.value, f.country.value, f.state.value, f.address2.value, f.postalCode.value, _this2.getCountryCode(f.country.value));

        if (f.country.value == "CA" || f.country.value == "Canada") {
          _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.billingInfo.admin_area = (_b = (_a = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.caProvinces.find(province => {
            return province.name == f.state.value || province.abbreviation == f.state.value;
          })) === null || _a === void 0 ? void 0 : _a.abbreviation) !== null && _b !== void 0 ? _b : "ON";
        }

        console.log(f.country.value);

        _this2.loadService.linkCard({
          card: _this2.card,
          stripe: _this2.stripeService
        }, err => {
          if (err) {
            _this2.err = err;
          } else {
            _this2.routeToReview();
          }
        });

        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.isPlatformBrowser)(_this2.platformID)) {
          _this2.spinner.show();
        }

        ;
      } else if (_this2.useApple || _this2.useGoogle || _this2.useMicrosoft) {
        let f = _this2.billingForm.controls;
        _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.billingInfo = new _models_billing_address_model__WEBPACK_IMPORTED_MODULE_2__.BillingInfo(undefined, undefined, undefined, undefined, f.address.value, f.city.value, f.country.value, f.state.value, f.address2.value, f.postalCode.value, _this2.getCountryCode(f.country.value));

        if (f.country.value == "CA" || f.country.value == "Canada") {
          _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.billingInfo.admin_area = (_d = (_c = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.caProvinces.find(province => {
            return province.name == f.state.value || province.abbreviation == f.state.value;
          })) === null || _c === void 0 ? void 0 : _c.abbreviation) !== null && _d !== void 0 ? _d : "ON";
        }

        console.log(f.country.value);

        _this2.loadService.linkCard({
          card: _this2.card,
          stripe: _this2.stripeService
        }, err => {
          if (err) {
            _this2.err = err;
          } else {
            _this2.routeToReview();
          }
        });

        _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.useOtherPaymentMethod = true;
      }
    })();
  }

  routeToCart() {
    this.rootComponent.routeToCart();
  }

  routeToReview() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.isPlatformBrowser)(this.platformID)) {
      this.spinner.hide();
    }

    ;
    this.rootComponent.routeToReview();
  }

  init() {
    this.cardOptions.style.base.color = this.selectedTheme().color;
    _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.billingInfo = undefined;
    _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.shippingInfo = undefined;
    const storeInfo = this.getStoreName();
    this.downloadAllStoreInfo(storeInfo.link, storeInfo.isCustom);
  }

  downloadAllStoreInfo(storeName, isCustom = false) {
    this.loadService.myCallback = () => this.callback();

    this.loadService.getUser(storeName, undefined, isCustom);
  }

  getStoreName() {
    var request = "";

    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.isPlatformServer)(this.platformID)) {
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

  isBrowser() {
    return (0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.isPlatformBrowser)(this.platformID);
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

    return this.getCurrencyForCountry(_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.selectedCurrency, _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.selectedCurrency.name != "US") + priceAsString;
  }

  getCurrencyForCountry(country, shouldShowName) {
    var returnItem = country.currency_symbol;
    if (shouldShowName) returnItem = country.name + " " + returnItem;
    return returnItem;
  }

  getCountryCode(country) {
    var _a;

    var returnItem = (_a = this.availableCurrencies().find(c => c.name_full == country)) === null || _a === void 0 ? void 0 : _a.name;
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

  buttonBack() {
    var _a, _b;

    console.log((_a = this.storeInfo()) === null || _a === void 0 ? void 0 : _a.colorStyle.back_code);

    if (((_b = this.storeInfo()) === null || _b === void 0 ? void 0 : _b.colorStyle.back_code) == "dark") {
      return 'rgb(255,255,255)';
    }

    return 'rgb(0,0,0)';
  }

  useA() {
    this.useApple = true;
  }

  useG() {
    this.useGoogle = true;
  }

  useM() {
    this.useMicrosoft = true;
  }

  ngOnInit() {
    this.stripeService.elements().subscribe(elements => {
      var _a;

      const Stripe = this.window.getNativeWindow().Stripe;
      this.stripe = Stripe(this.stripeKey);
      let paymentRequest = (_a = this.stripe) === null || _a === void 0 ? void 0 : _a.paymentRequest(this.paymentRequestOptions);
      console.log(paymentRequest);
      paymentRequest === null || paymentRequest === void 0 ? void 0 : paymentRequest.canMakePayment().then(result => {
        console.log(result);

        if (result) {
          console.log(result);
          this.applePay = result.applePay;
          this.googlePay = result.googlePay;
          this.microsoftPay = !(this.googlePay || this.applePay);
          this.cdr.detectChanges(); // this.prButton.mount(this.buttonRef.nativeElement);
          // this.prButton = this.elements.create("paymentRequestButton", {
          //   paymentRequest: paymentRequest,
          // });
        }
      });
    });
    this.init();
  }

}

BillingInfoComponent.ɵfac = function BillingInfoComponent_Factory(t) {
  return new (t || BillingInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_stripe__WEBPACK_IMPORTED_MODULE_9__.STRIPE_PUBLISHABLE_KEY), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.Meta), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_load_service__WEBPACK_IMPORTED_MODULE_3__.LoadService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_12__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_stripe__WEBPACK_IMPORTED_MODULE_9__.StripeService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_stripe__WEBPACK_IMPORTED_MODULE_9__.WindowRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_routing_service__WEBPACK_IMPORTED_MODULE_5__.RoutingService));
};

BillingInfoComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: BillingInfoComponent,
  selectors: [["app-billing-info"]],
  viewQuery: function BillingInfoComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](ngx_stripe__WEBPACK_IMPORTED_MODULE_9__.StripeCardComponent, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.card = _t.first);
    }
  },
  decls: 5,
  vars: 6,
  consts: [["size", "large", 3, "bdColor", "color", "type", "fullScreen", 4, "ngIf"], [1, "h-100"], [3, "class", 4, "ngIf"], ["class", "py-5", 3, "background-color", 4, "ngIf"], ["size", "large", 3, "bdColor", "color", "type", "fullScreen"], [1, "text-center"], [1, "cover", 2, "background-image", "url(https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Resources%2FSample-Walls%2FHome%2F1.jpg?alt=media)"], [1, "d-flex", "align-items-center", "justify-content-center", 2, "height", "200px", "font-weight", "bold", "font-size", "35px"], [1, "text-center", 2, "line-height", "1.2em", "text-shadow", "2px 2px 4px #42424281"], [1, "text-center", 2, "line-height", "1.2em", "font-size", "25px", "text-shadow", "2px 2px 4px #42424281"], [3, "inline"], [1, "py-5"], [1, "container", "pb-5", "mb-2", "mb-md-4"], ["class", "col d-flex justify-content-start", 4, "ngIf"], [1, "row", "mt-3"], [1, "col-lg-8"], ["novalidate", "", 3, "formGroup"], [4, "ngIf"], ["class", "row", 4, "ngIf"], ["class", "row gx-10 row-cols-1 row-cols-md-3 row-cols-xl-3 mb-4 mt-4 justify-content-between", 4, "ngIf"], [1, "row", "mt-5"], [1, "col"], [1, "full-width"], ["matInput", "", "formControlName", "address"], [1, "placeholder"], [1, "row"], ["formControlName", "country"], [3, "class", "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "city"], ["formControlName", "state"], ["matInput", "", "maxlength", "10", "formControlName", "postalCode"], ["postalCode", ""], ["align", "end"], [1, "col-lg-4", "pt-4", "pt-lg-0", "ps-xl-5"], [1, "py-2", "px-xl-2"], [1, "text-center", "mb-4", "pb-3", "border-bottom", 3, "hidden"], [1, "h6", "mb-3", "pb-1"], [1, "fw-normal"], ["id", "order-options", 1, "accordion"], [1, "accordion-item"], [1, "accordion-header"], ["href", "#shipping-estimates", "role", "button", "data-bs-toggle", "collapse", "aria-expanded", "true", "aria-controls", "shipping-estimates", 1, "accordion-button", "collapsed"], ["id", "shipping-estimates", "data-bs-parent", "#order-options", 1, "accordion-collapse", "collapse"], [1, "accordion-body"], ["novalidate", "novalidate", 1, "needs-validation"], [1, "mb-3"], [1, "h5", "mb-3", "pb-1"], ["required", "required", 1, "form-select", 3, "change"], ["value", ""], ["value", "United States"], ["value", "Canada"], ["value", "United Kingdom"], [1, "invalid-feedback"], ["type", "button", 1, "btn", "btn-primary", "d-block", "w-100", 3, "click"], ["class", "col mt-4 d-flex justify-content-center rounded w-100", 3, "background-color", 4, "ngIf"], ["class", "col mt-4 d-flex justify-content-center rounded", 3, "background-color", 4, "ngIf"], [1, "text-center", "mt-2"], ["class", "btn mt-4 d-flex flex-wrap", "style", "font-weight:bold; font-size:20px; justify-content: center;", 3, "font-family", "background-color", "color", "innerHTML", "click", 4, "ngIf"], [1, "text-center", "mt-3", "mb-3", 2, "line-height", "1.0em", "font-size", "12px", "height", "15px", "font-weight", "normal", "color", "red", 3, "hidden"], [1, "col", "d-flex", "justify-content-start"], ["role", "button", 3, "click"], ["alt", "ok", 2, "object-fit", "contain", 3, "src"], ["matInput", "", "formControlName", "cardholder"], [1, "row", "gx-10", "row-cols-1", "row-cols-md-3", "row-cols-xl-3", "mb-4", "mt-4", "justify-content-between"], [1, "col", "d-block"], [3, "options", "elementsOptions"], ["matInput", "", "formControlName", "company"], ["mat-button", "", "type", "button", 3, "click"], ["matInput", "", "formControlName", "address2"], [3, "value"], ["formControlName", "shipping"], ["value", "shipping", 3, "change"], ["value", "custom", 3, "change"], [1, "col", "mt-4", "d-flex", "justify-content-center", "rounded", "w-100"], ["role", "button", 1, "w-100", 3, "click"], ["alt", "ok", 1, "w-100", 2, "object-fit", "contain", 3, "src"], [1, "col", "mt-4", "d-flex", "justify-content-center", "rounded"], ["alt", "ok", 1, "w-100", 2, "object-fit", "cover", 3, "src"], [1, "btn", "mt-4", "d-flex", "flex-wrap", 2, "font-weight", "bold", "font-size", "20px", "justify-content", "center", 3, "innerHTML", "click"]],
  template: function BillingInfoComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, BillingInfoComponent_ngx_spinner_1_Template, 3, 9, "ngx-spinner", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, BillingInfoComponent_header_3_Template, 10, 10, "header", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, BillingInfoComponent_section_4_Template, 96, 107, "section", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isBrowser());
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-color", ctx.selectedTheme().bg_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isBrowser() && ctx.storeInfo().username != undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isBrowser() && ctx.storeInfo().username != undefined && ctx.cardOptions.style.base.color == ctx.selectedTheme().color);
    }
  },
  directives: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, ngx_spinner__WEBPACK_IMPORTED_MODULE_12__.NgxSpinnerComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_14__.MatCardTitle, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_16__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatPlaceholder, _angular_material_select__WEBPACK_IMPORTED_MODULE_17__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MaxLengthValidator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatHint, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__.MatError, ngx_stripe__WEBPACK_IMPORTED_MODULE_9__.StripeCardComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_18__.MatButton, _angular_material_core__WEBPACK_IMPORTED_MODULE_19__.MatOption, _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__.MatRadioGroup, _angular_material_radio__WEBPACK_IMPORTED_MODULE_20__.MatRadioButton],
  styles: ["\n\n.placeholder {\n  color: rebeccapurple;\n}\n\n.mat-select .mat-form-field-type-mat-select .mat-form-field-label, .mat-select-value {\n  color: #808080\n}\n\n.not-empty-select.mat-selected {\n  color: #808080 !important;\n}\n\n.full-width {\n    width: 100%;\n  }\n\n.shipping-card {\n    min-width: 120px;\n    margin: 20px auto;\n  }\n\n.mat-radio-button {\n    display: block;\n    margin: 5px 0;\n  }\n\n.row {\n    display: flex;\n    flex-direction: row;\n  }\n\n.col {\n    flex: 1;\n    margin-right: 20px;\n  }\n\n.col:last-child {\n    margin-right: 0;\n  }\n\n.centered {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n\n.cover{\n    color: rgb(255, 255, 255);\n    position: relative;\n    /* height: 500px; */\n    background-repeat: no-repeat;\n    background-position-x: center;\n    background-position-y: center;\n    background-size: cover;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbGxpbmctaW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0lBQ0ksV0FBVztFQUNiOztBQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtFQUNuQjs7QUFFQTtJQUNFLGNBQWM7SUFDZCxhQUFhO0VBQ2Y7O0FBRUE7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0VBQ3JCOztBQUVBO0lBQ0UsT0FBTztJQUNQLGtCQUFrQjtFQUNwQjs7QUFFQTtJQUNFLGVBQWU7RUFDakI7O0FBRUE7SUFDRSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7RUFDbEM7O0FBRUY7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQiw0QkFBNEI7SUFDNUIsNkJBQTZCO0lBQzdCLDZCQUE2QjtJQUk3QixzQkFBc0I7QUFDMUIiLCJmaWxlIjoiYmlsbGluZy1pbmZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IHJlYmVjY2FwdXJwbGU7XG59XG5cbi5tYXQtc2VsZWN0IC5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1zZWxlY3QgLm1hdC1mb3JtLWZpZWxkLWxhYmVsLCAubWF0LXNlbGVjdC12YWx1ZSB7XG4gIGNvbG9yOiAjODA4MDgwXG59XG5cbi5ub3QtZW1wdHktc2VsZWN0Lm1hdC1zZWxlY3RlZCB7XG4gIGNvbG9yOiAjODA4MDgwICFpbXBvcnRhbnQ7XG59XG5cbi5mdWxsLXdpZHRoIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICBcbiAgLnNoaXBwaW5nLWNhcmQge1xuICAgIG1pbi13aWR0aDogMTIwcHg7XG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XG4gIH1cbiAgXG4gIC5tYXQtcmFkaW8tYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IDVweCAwO1xuICB9XG4gIFxuICAucm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cbiAgXG4gIC5jb2wge1xuICAgIGZsZXg6IDE7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICB9XG4gIFxuICAuY29sOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbiAgfVxuICBcbiAgLmNlbnRlcmVkIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB9XG5cbi5jb3ZlcntcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAvKiBoZWlnaHQ6IDUwMHB4OyAqL1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi14OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiBjZW50ZXI7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4iXX0= */"],
  encapsulation: 2
});

/***/ }),

/***/ 80538:
/*!*****************************************************!*\
  !*** ./src/app/billing-info/billing-info.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BillingInfoModule": () => (/* binding */ BillingInfoModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals */ 37503);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 93738);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ 79866);
/* harmony import */ var _billing_info_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./billing-info.component */ 52221);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/radio */ 82613);
/* harmony import */ var ngx_stripe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-stripe */ 72284);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ 67441);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
















const routes = [
    {
        path: '',
        component: _billing_info_component__WEBPACK_IMPORTED_MODULE_1__.BillingInfoComponent,
    },
];
class BillingInfoModule {
}
BillingInfoModule.ɵfac = function BillingInfoModule_Factory(t) { return new (t || BillingInfoModule)(); };
BillingInfoModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: BillingInfoModule, bootstrap: [_billing_info_component__WEBPACK_IMPORTED_MODULE_1__.BillingInfoComponent] });
BillingInfoModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [_globals__WEBPACK_IMPORTED_MODULE_0__.Globals], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInputModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_6__.MatSelectModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__.MatRadioModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule,
            ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInputModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__.MatRadioModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forChild(routes),
            ngx_stripe__WEBPACK_IMPORTED_MODULE_13__.NgxStripeModule.forRoot('pk_live_m7nEWhyTHoxGspcxtJAci6pu002LUiOnJK'),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](BillingInfoModule, { declarations: [_billing_info_component__WEBPACK_IMPORTED_MODULE_1__.BillingInfoComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInputModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_6__.MatSelectModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__.MatRadioModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule,
        ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInputModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__.MatRadioModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule, ngx_stripe__WEBPACK_IMPORTED_MODULE_13__.NgxStripeModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_billing-info_billing-info_module_ts.js.map