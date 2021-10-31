exports.id = 630;
exports.ids = [630];
exports.modules = {

/***/ 12200:
/*!****************************************************************!*\
  !*** ./src/app/shipping-address/shipping-address.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShippingAddressComponent": () => (/* binding */ ShippingAddressComponent)
/* harmony export */ });
/* harmony import */ var _Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 16304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globals */ 37503);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _models_shipping_address_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/shipping-address.model */ 37927);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _services_load_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/load.service */ 6029);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.component */ 55041);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ 79866);
/* harmony import */ var _services_routing_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/routing.service */ 78078);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 93738);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/select */ 67441);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ 5015);























function ShippingAddressComponent_ngx_spinner_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "ngx-spinner", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "h3", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, " Updating Shipping Address...\n");
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

function ShippingAddressComponent_header_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "header");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " SHIPPING ");
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

function ShippingAddressComponent_section_4_mat_error_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " First name is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function ShippingAddressComponent_section_4_mat_error_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " First name is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function ShippingAddressComponent_section_4_mat_error_31_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Email address is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function ShippingAddressComponent_section_4_mat_error_32_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Email address is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "invalid");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function ShippingAddressComponent_section_4_mat_error_44_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Address is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function ShippingAddressComponent_section_4_div_45_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ShippingAddressComponent_section_4_div_45_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return ctx_r18.hasUnitNumber = !ctx_r18.hasUnitNumber;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " + Add C/O, Apt, Suite, Unit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMapInterpolate1"]("text-", ctx_r8.storeInfo().colorStyle.text_code, "");
  }
}

function ShippingAddressComponent_section_4_div_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "mat-form-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "textarea", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "mat-placeholder", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Address 2");
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

function ShippingAddressComponent_section_4_mat_option_51_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const country_r20 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMapInterpolate2"]("not-empty-select text-", ctx_r10.storeInfo().colorStyle.text_code, " bg-", ctx_r10.storeInfo().colorStyle.back_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", country_r20.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", country_r20.name, " ");
  }
}

function ShippingAddressComponent_section_4_mat_error_54_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Country is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function ShippingAddressComponent_section_4_mat_error_60_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " City is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function ShippingAddressComponent_section_4_mat_option_64_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-option", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const state_r21 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMapInterpolate2"]("not-empty-select text-", ctx_r13.storeInfo().colorStyle.text_code, " bg-", ctx_r13.storeInfo().colorStyle.back_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", state_r21.abbreviation);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", state_r21.name, " ");
  }
}

function ShippingAddressComponent_section_4_mat_error_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " State is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function ShippingAddressComponent_section_4_mat_error_83_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Phone Number is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "required");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function ShippingAddressComponent_section_4_mat_error_84_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Phone Number is ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "invalid");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function ShippingAddressComponent_section_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "section", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "section", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "form", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "mat-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Shipping Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "mat-form-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "mat-placeholder", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "First name");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, ShippingAddressComponent_section_4_mat_error_16_Template, 4, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "mat-form-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "mat-placeholder", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Last name");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](22, ShippingAddressComponent_section_4_mat_error_22_Template, 4, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "mat-form-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](26, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "mat-placeholder", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "Email Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "mat-hint", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](30, "Required for Shipment Tracking");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, ShippingAddressComponent_section_4_mat_error_31_Template, 4, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](32, ShippingAddressComponent_section_4_mat_error_32_Template, 4, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "mat-form-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](35, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "mat-placeholder", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, "Company (Optional)");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "mat-form-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](41, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "mat-placeholder", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](43, "Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](44, ShippingAddressComponent_section_4_mat_error_44_Template, 4, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](45, ShippingAddressComponent_section_4_div_45_Template, 4, 3, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](46, ShippingAddressComponent_section_4_div_46_Template, 6, 5, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "mat-form-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "mat-select", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](51, ShippingAddressComponent_section_4_mat_option_51_Template, 2, 6, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "mat-placeholder", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53, "Country");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](54, ShippingAddressComponent_section_4_mat_error_54_Template, 4, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "mat-form-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](57, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "mat-placeholder", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](59, "City");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](60, ShippingAddressComponent_section_4_mat_error_60_Template, 4, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "mat-form-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "mat-select", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](64, ShippingAddressComponent_section_4_mat_option_64_Template, 2, 6, "mat-option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "mat-placeholder", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](66);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](67, ShippingAddressComponent_section_4_mat_error_67_Template, 4, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "mat-form-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](71, "input", 31, 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "mat-placeholder", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](75, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](77, "mat-form-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](78, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "mat-placeholder", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](80, "Phone Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](81, "mat-hint", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](82, "Required for Shipment Tracking");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](83, ShippingAddressComponent_section_4_mat_error_83_Template, 4, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](84, ShippingAddressComponent_section_4_mat_error_84_Template, 4, 0, "mat-error", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](85, "aside", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](86, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](87, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](88, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](89, "h2", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](90, "Subtotal");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](91, "h3", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](92);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](93, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](94, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](95, "h3", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](96, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](97, "Shipping estimates");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](98, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](99, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](100, "form", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](101, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](102, "h2", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](103);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](104, "select", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function ShippingAddressComponent_section_4_Template_select_change_104_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r22.calculateShipping($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](105, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](106, "Choose your country");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](107, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](108, "United States");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](109, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](110, "Canada");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](111, "option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](112, "United Kingdom");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](113, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](114, "Please choose your country!");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](115, "button", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ShippingAddressComponent_section_4_Template_button_click_115_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r24.calculate();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](116, "Calculate shipping");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](117, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](118, "a", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ShippingAddressComponent_section_4_Template_a_click_118_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r23);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r25.save();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](119, "p", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](120);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-color", ctx_r2.selectedTheme().bg_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r2.addressForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMapInterpolate1"]("shipping-card bg-", ctx_r2.storeInfo().colorStyle.back_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMapInterpolate1"]("text-", ctx_r2.storeInfo().colorStyle.text_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("font-family", ctx_r2.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMapInterpolate1"]("text-", ctx_r2.storeInfo().colorStyle.text_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("color", ctx_r2.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.addressForm.controls["firstName"].hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMapInterpolate1"]("text-", ctx_r2.storeInfo().colorStyle.text_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("color", ctx_r2.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.addressForm.controls["lastName"].hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMapInterpolate1"]("text-", ctx_r2.storeInfo().colorStyle.text_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("email", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("color", ctx_r2.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("color", ctx_r2.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.addressForm.controls["email"].hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.addressForm.controls["email"].hasError("email"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMapInterpolate1"]("text-", ctx_r2.storeInfo().colorStyle.text_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("color", ctx_r2.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMapInterpolate1"]("text-", ctx_r2.storeInfo().colorStyle.text_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("color", ctx_r2.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.addressForm.controls["address"].hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r2.hasUnitNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.hasUnitNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.countries());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("color", ctx_r2.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.addressForm.controls["country"].hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMapInterpolate1"]("text-", ctx_r2.storeInfo().colorStyle.text_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("color", ctx_r2.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.addressForm.controls["city"].hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.states(ctx_r2.addressForm.controls["country"].value));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("color", ctx_r2.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.getStateFieldName(ctx_r2.addressForm.controls["country"].value));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.addressForm.controls["state"].hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMapInterpolate1"]("text-", ctx_r2.storeInfo().colorStyle.text_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("color", ctx_r2.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.getZipFieldName(ctx_r2.addressForm.controls["country"].value));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMapInterpolate1"]("text-", ctx_r2.storeInfo().colorStyle.text_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("color", ctx_r2.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("color", ctx_r2.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.addressForm.controls["phone"].hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.addressForm.controls["phone"].errors == null ? null : ctx_r2.addressForm.controls["phone"].errors.pattern);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("font-family", ctx_r2.storeInfo().fontName)("background-color", ctx_r2.selectedTheme().color)("color", ctx_r2.selectedTheme().bg_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHTML", "Continue", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("font-family", ctx_r2.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx_r2.err == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r2.err, " ");
  }
}

class ShippingAddressComponent {
  constructor(platformID, cdr, router, titleService, metaService, loadService, fb, _router, rootComponent, spinner, routingService) {
    this.platformID = platformID;
    this.cdr = cdr;
    this.router = router;
    this.titleService = titleService;
    this.metaService = metaService;
    this.loadService = loadService;
    this.fb = fb;
    this._router = _router;
    this.rootComponent = rootComponent;
    this.spinner = spinner;
    this.routingService = routingService;
    this.addressForm = this.fb.group({
      company: null,
      firstName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      lastName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      address: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      address2: null,
      country: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
      email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.email]],
      phone: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern("^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$")]],
      city: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      state: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
      postalCode: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(8)]],
      shipping: ['free']
    });
    this.hasUnitNumber = false;
    this.err = "";
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

  shippingI() {
    return _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.shippingInfo;
  }

  firstName() {
    var _a;

    return (_a = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.shippingInfo) === null || _a === void 0 ? void 0 : _a.name.split(' ').slice(0, -1).join(' ');
  }

  lastName() {
    var _a;

    return (_a = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.shippingInfo) === null || _a === void 0 ? void 0 : _a.name.split(' ').slice(-1).join(' ');
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

  save() {
    var _a, _b, _c, _d;

    if (this.addressForm.valid) {
      let f = this.addressForm.controls;
      let name = f.firstName.value + " " + f.lastName.value;
      _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.shippingInfo = new _models_shipping_address_model__WEBPACK_IMPORTED_MODULE_2__.ShippingInfo(name, f.company.value, f.address.value, f.city.value, f.country.value, f.state.value, (_b = (_a = f.address2) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : "", f.postalCode.value, f.phone.value, "", f.email.value);

      if (f.country.value == "CA" || f.country.value == "Canada") {
        _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.shippingInfo.admin_area = (_d = (_c = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.caProvinces.find(province => {
          return province.name == f.state.value || province.abbreviation == f.state.value;
        })) === null || _c === void 0 ? void 0 : _c.abbreviation) !== null && _d !== void 0 ? _d : "ON";
      }

      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.isPlatformBrowser)(this.platformID)) {
        this.spinner.show();
      }

      ;
      this.loadService.linkAddress(err => {
        this.spinner.hide();

        if (err) {
          this.err = err;
        } else {
          this.err = "";
          _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.billingInfo = undefined;
          this.routeToBilling();
        }
      });
    } else {}
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

  onKey(event) {
    const inputValue = event.target.value;
    this.selectedCode = inputValue;
  }

  calculateDiscount() {// this.selectedCountry = country
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
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;

    this.addressForm.controls.company.setValue((_b = (_a = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.shippingInfo) === null || _a === void 0 ? void 0 : _a.company) !== null && _b !== void 0 ? _b : "");
    this.addressForm.controls.firstName.setValue(this.firstName());
    this.addressForm.controls.lastName.setValue(this.lastName());
    this.addressForm.controls.address.setValue((_d = (_c = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.shippingInfo) === null || _c === void 0 ? void 0 : _c.street) !== null && _d !== void 0 ? _d : "");
    this.addressForm.controls.address2.setValue((_f = (_e = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.shippingInfo) === null || _e === void 0 ? void 0 : _e.unit) !== null && _f !== void 0 ? _f : "");
    this.addressForm.controls.country.setValue((_h = (_g = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.shippingInfo) === null || _g === void 0 ? void 0 : _g.country) !== null && _h !== void 0 ? _h : "");
    this.addressForm.controls.email.setValue((_k = (_j = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.shippingInfo) === null || _j === void 0 ? void 0 : _j.email) !== null && _k !== void 0 ? _k : "ok");
    this.addressForm.controls.phone.setValue((_m = (_l = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.shippingInfo) === null || _l === void 0 ? void 0 : _l.phone_num) !== null && _m !== void 0 ? _m : "");
    this.addressForm.controls.city.setValue((_p = (_o = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.shippingInfo) === null || _o === void 0 ? void 0 : _o.city) !== null && _p !== void 0 ? _p : "");
    this.addressForm.controls.state.setValue((_r = (_q = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.shippingInfo) === null || _q === void 0 ? void 0 : _q.admin_area) !== null && _r !== void 0 ? _r : "");
    this.addressForm.controls.postalCode.setValue((_t = (_s = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.shippingInfo) === null || _s === void 0 ? void 0 : _s.postal) !== null && _t !== void 0 ? _t : "");
  }

  callback() {
    var _this = this;

    return (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var _a, _b, _c;

      if (yield _this.loadService.authenticated()) {
        if (_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo.username) {
          _this.rootComponent.setOptions();

          _this.rootComponent.setFavIcon(_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo.profileLink.toString());

          _this.addTags((_a = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo.fullName) !== null && _a !== void 0 ? _a : "Thred", ((_b = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo.profileLink) !== null && _b !== void 0 ? _b : new URL("https://shopmythred.com")).toString(), (_c = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo.bio) !== null && _c !== void 0 ? _c : "Check out my Thred Store!", "shopmythred.com/" + _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo.username);

          if (_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.shippingInfo == undefined && (0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.isPlatformBrowser)(_this.platformID)) {
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

  routeToCart() {
    this.rootComponent.routeToCart();
  }

  routeToBilling() {
    var _a;

    this.loadService.myCallback = () => this.routeToBilling();

    if (_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.billingInfo == undefined) {
      this.loadService.getBillingAddress();
    } else if ((_a = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.billingInfo) === null || _a === void 0 ? void 0 : _a.name) {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.isPlatformBrowser)(this.platformID)) {
        this.spinner.hide();
      }

      ;
      this.rootComponent.routeToReview();
    } else {
      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_8__.isPlatformBrowser)(this.platformID)) {
        this.spinner.hide();
      }

      ;
      this.rootComponent.routeToBilling();
    }
  }

  init() {
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

  ngOnInit() {
    this.init();
  }

  onSubmit() {
    alert('Thanks!');
  }

}

ShippingAddressComponent.ɵfac = function ShippingAddressComponent_Factory(t) {
  return new (t || ShippingAddressComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.Meta), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_load_service__WEBPACK_IMPORTED_MODULE_3__.LoadService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_routing_service__WEBPACK_IMPORTED_MODULE_5__.RoutingService));
};

ShippingAddressComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: ShippingAddressComponent,
  selectors: [["app-shipping-address"]],
  decls: 5,
  vars: 3,
  consts: [["size", "large", 3, "bdColor", "color", "type", "fullScreen", 4, "ngIf"], [3, "class", 4, "ngIf"], [2, "max-height", "100%", "min-height", "100%"], ["class", "py-5", 3, "background-color", 4, "ngIf"], ["size", "large", 3, "bdColor", "color", "type", "fullScreen"], [1, "text-center", "mt-5"], [1, "cover"], [1, "d-flex", "align-items-center", "justify-content-center", 2, "height", "200px", "font-weight", "bold", "font-size", "35px"], [1, "text-center", 2, "line-height", "1.2em", "text-shadow", "2px 2px 4px #42424281"], [1, "text-center", 2, "line-height", "1.2em", "font-size", "25px", "text-shadow", "2px 2px 4px #42424281"], [3, "inline"], [1, "py-5"], [1, "container", "pb-5", "mb-2", "mb-md-4"], [1, "row"], [1, "col-lg-8"], ["novalidate", "", 3, "formGroup"], [1, "col"], [1, "full-width"], ["matInput", "", "formControlName", "firstName"], [1, "placeholder"], [4, "ngIf"], ["matInput", "", "formControlName", "lastName"], ["matInput", "", "type", "email", "name", "email", "formControlName", "email", 3, "email"], ["align", "end"], ["matInput", "", "formControlName", "company"], ["matInput", "", "formControlName", "address"], ["class", "row", 4, "ngIf"], ["formControlName", "country"], [3, "class", "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "city"], ["formControlName", "state"], ["matInput", "", "maxlength", "10", "formControlName", "postalCode"], ["postalCode", ""], ["matInput", "", "name", "phone", "formControlName", "phone"], [1, "col-lg-4", "pt-4", "pt-lg-0", "ps-xl-5"], [1, "py-2", "px-xl-2"], [1, "text-center", "mb-4", "pb-3", "border-bottom", 3, "hidden"], [1, "h6", "mb-3", "pb-1"], [1, "fw-normal"], ["id", "order-options", 1, "accordion"], [1, "accordion-item"], [1, "accordion-header"], ["href", "#shipping-estimates", "role", "button", "data-bs-toggle", "collapse", "aria-expanded", "true", "aria-controls", "shipping-estimates", 1, "accordion-button", "collapsed"], ["id", "shipping-estimates", "data-bs-parent", "#order-options", 1, "accordion-collapse", "collapse"], [1, "accordion-body"], ["novalidate", "novalidate", 1, "needs-validation"], [1, "mb-3"], [1, "h5", "mb-3", "pb-1"], ["required", "required", 1, "form-select", 3, "change"], ["value", ""], ["value", "United States"], ["value", "Canada"], ["value", "United Kingdom"], [1, "invalid-feedback"], ["type", "button", 1, "btn", "btn-primary", "d-block", "w-100", 3, "click"], [1, "text-center", "mt-2"], [1, "btn", "mt-4", "d-flex", "flex-wrap", 2, "font-weight", "bold", "font-size", "20px", "justify-content", "center", 3, "innerHTML", "click"], [1, "text-center", "mt-3", "mb-3", 2, "line-height", "1.0em", "font-size", "12px", "height", "15px", "font-weight", "normal", "color", "red", 3, "hidden"], ["mat-button", "", "type", "button", 3, "click"], ["matInput", "", "formControlName", "address2"], [3, "value"]],
  template: function ShippingAddressComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ShippingAddressComponent_ngx_spinner_1_Template, 3, 9, "ngx-spinner", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ShippingAddressComponent_header_2_Template, 10, 10, "header", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, ShippingAddressComponent_section_4_Template, 121, 136, "section", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isBrowser());
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isBrowser() && ctx.storeInfo().username != undefined);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isBrowser() && ctx.storeInfo().username != undefined);
    }
  },
  directives: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerComponent, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardContent, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatFormField, _angular_material_input__WEBPACK_IMPORTED_MODULE_15__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatPlaceholder, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.EmailValidator, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatHint, _angular_material_select__WEBPACK_IMPORTED_MODULE_16__.MatSelect, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__.MatError, _angular_material_button__WEBPACK_IMPORTED_MODULE_17__.MatButton, _angular_material_core__WEBPACK_IMPORTED_MODULE_18__.MatOption],
  styles: [".placeholder {\n  color: rebeccapurple;\n}\n\n.mat-select .mat-form-field-type-mat-select .mat-form-field-label, .mat-select-value {\n  color: #808080\n}\n\n.not-empty-select.mat-selected {\n  color: #808080 !important;\n}\n\n.full-width {\n    width: 100%;\n  }\n\n.shipping-card {\n    min-width: 120px;\n    margin: 20px auto;\n  }\n\n.mat-radio-button {\n    display: block;\n    margin: 5px 0;\n  }\n\n.row {\n    display: flex;\n    flex-direction: row;\n  }\n\n.col {\n    flex: 1;\n    margin-right: 20px;\n  }\n\n.col:last-child {\n    margin-right: 0;\n  }\n\n.centered {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n\n.cover{\n    color: rgb(255, 255, 255);\n    position: relative;\n    /* height: 500px; */\n    background-repeat: no-repeat;\n    background-position-x: center;\n    background-position-y: center;\n    background-size: cover;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoaXBwaW5nLWFkZHJlc3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7SUFDSSxXQUFXO0VBQ2I7O0FBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0VBQ25COztBQUVBO0lBQ0UsY0FBYztJQUNkLGFBQWE7RUFDZjs7QUFFQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7RUFDckI7O0FBRUE7SUFDRSxPQUFPO0lBQ1Asa0JBQWtCO0VBQ3BCOztBQUVBO0lBQ0UsZUFBZTtFQUNqQjs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztFQUNsQzs7QUFFRjtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IsNkJBQTZCO0lBSTdCLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzaGlwcGluZy1hZGRyZXNzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGxhY2Vob2xkZXIge1xuICBjb2xvcjogcmViZWNjYXB1cnBsZTtcbn1cblxuLm1hdC1zZWxlY3QgLm1hdC1mb3JtLWZpZWxkLXR5cGUtbWF0LXNlbGVjdCAubWF0LWZvcm0tZmllbGQtbGFiZWwsIC5tYXQtc2VsZWN0LXZhbHVlIHtcbiAgY29sb3I6ICM4MDgwODBcbn1cblxuLm5vdC1lbXB0eS1zZWxlY3QubWF0LXNlbGVjdGVkIHtcbiAgY29sb3I6ICM4MDgwODAgIWltcG9ydGFudDtcbn1cblxuLmZ1bGwtd2lkdGgge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIFxuICAuc2hpcHBpbmctY2FyZCB7XG4gICAgbWluLXdpZHRoOiAxMjBweDtcbiAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgfVxuICBcbiAgLm1hdC1yYWRpby1idXR0b24ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogNXB4IDA7XG4gIH1cbiAgXG4gIC5yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgfVxuICBcbiAgLmNvbCB7XG4gICAgZmxleDogMTtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIH1cbiAgXG4gIC5jb2w6bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xuICB9XG4gIFxuICAuY2VudGVyZWQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIH1cblxuLmNvdmVye1xuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC8qIGhlaWdodDogNTAwcHg7ICovXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IGNlbnRlcjtcbiAgICAtd2Via2l0LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLW1vei1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIC1vLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbiJdfQ== */"],
  encapsulation: 2
});

/***/ }),

/***/ 40630:
/*!*************************************************************!*\
  !*** ./src/app/shipping-address/shipping-address.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShippingAddressModule": () => (/* binding */ ShippingAddressModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals */ 37503);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ 93738);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ 79866);
/* harmony import */ var _shipping_address_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shipping-address.component */ 12200);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/radio */ 82613);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ 67441);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);














const routes = [
    {
        path: '',
        component: _shipping_address_component__WEBPACK_IMPORTED_MODULE_1__.ShippingAddressComponent,
    },
];
class ShippingAddressModule {
}
ShippingAddressModule.ɵfac = function ShippingAddressModule_Factory(t) { return new (t || ShippingAddressModule)(); };
ShippingAddressModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ShippingAddressModule, bootstrap: [_shipping_address_component__WEBPACK_IMPORTED_MODULE_1__.ShippingAddressComponent] });
ShippingAddressModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ providers: [_globals__WEBPACK_IMPORTED_MODULE_0__.Globals], imports: [[
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
            _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule.forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ShippingAddressModule, { declarations: [_shipping_address_component__WEBPACK_IMPORTED_MODULE_1__.ShippingAddressComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInputModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButtonModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_6__.MatSelectModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__.MatRadioModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_8__.MatCardModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule,
        ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_4__.MatInputModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule,
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_7__.MatRadioModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterModule] }); })();


/***/ })

};
;
//# sourceMappingURL=630.js.map