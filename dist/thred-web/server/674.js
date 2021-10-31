exports.id = 674;
exports.ids = [674];
exports.modules = {

/***/ 58838:
/*!****************************************************!*\
  !*** ./src/app/admin-view/admin-view.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminViewComponent": () => (/* binding */ AdminViewComponent)
/* harmony export */ });
/* harmony import */ var _Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 16304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globals */ 37503);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/animations */ 17238);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _cropper_cropper_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cropper/cropper.component */ 79788);
/* harmony import */ var _design_design_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../design/design.component */ 44619);
/* harmony import */ var _models_product_in_cart_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/product-in-cart.model */ 49991);
/* harmony import */ var _social_form_social_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../social-form/social-form.component */ 38554);
/* harmony import */ var _inventory_buy_inventory_buy_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../inventory-buy/inventory-buy.component */ 58379);
/* harmony import */ var _edit_plan_edit_plan_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../edit-plan/edit-plan.component */ 7659);
/* harmony import */ var _store_setup_store_setup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store-setup/store-setup.component */ 31147);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _services_load_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/load.service */ 6029);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../app.component */ 55041);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-spinner */ 79866);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/clipboard */ 14785);
/* harmony import */ var _services_routing_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/routing.service */ 78078);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-color-picker */ 61922);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @swimlane/ngx-charts */ 2945);





























function AdminViewComponent_ngx_spinner_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ngx-spinner", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "h3", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    let tmp_7_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("color", ctx_r0.selectedIndicator().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("bdColor", ctx_r0.selectedIndicator().bg_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("color", ctx_r0.selectedIndicator().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("type", ctx_r0.selectedIndicator().name);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("fullScreen", true)("name", "adminSpinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r0.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", (tmp_7_0 = ctx_r0.storeInfo()) == null ? null : tmp_7_0.fullName, "\n");
  }
}

function AdminViewComponent_ngx_spinner_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ngx-spinner", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "h3", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    let tmp_7_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("color", ctx_r1.selectedIndicator().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("bdColor", ctx_r1.selectedIndicator().bg_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("color", ctx_r1.selectedIndicator().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("type", ctx_r1.selectedIndicator().name);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("fullScreen", true)("name", "sampleSpinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r1.storeForm.controls["font"].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", (tmp_7_0 = ctx_r1.storeInfo()) == null ? null : tmp_7_0.fullName, "\n");
  }
}

function AdminViewComponent_div_3_div_3_li_5_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AdminViewComponent_div_3_div_3_li_5_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r14);
      const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().index;
      const s_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().index;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return ctx_r12.selectSetting(i_r9, s_r6);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMapInterpolate1"]("side d-flex text-", ctx_r10.storeInfo().colorStyle.text_code, " align-items-center justify-content-start");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r10.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", option_r8.Icon, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", option_r8.Title, " ");
  }
}

function AdminViewComponent_div_3_div_3_li_5_a_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AdminViewComponent_div_3_div_3_li_5_a_2_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r19);
      const i_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().index;
      const s_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().index;
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return ctx_r17.selectSetting(i_r9, s_r6);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r11.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", option_r8.Icon, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", option_r8.Title, " ");
  }
}

function AdminViewComponent_div_3_div_3_li_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, AdminViewComponent_div_3_div_3_li_5_a_1_Template, 5, 7, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, AdminViewComponent_div_3_div_3_li_5_a_2_Template, 5, 4, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const option_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("active", ((tmp_0_0 = ctx_r7.getSelectedPanel()) == null ? null : tmp_0_0.Title) == option_r8.Title);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r7.shouldRed(option_r8));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r7.shouldRed(option_r8));
  }
}

function AdminViewComponent_div_3_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](5, AdminViewComponent_div_3_div_3_li_5_Template, 3, 4, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const panel_r5 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMapInterpolate1"]("sidebar-header bg-", ctx_r3.storeInfo().colorStyle.back_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r3.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](panel_r5.Category);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", panel_r5.Options);
  }
}

function AdminViewComponent_div_3_div_6_header_1_a_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " STORE IS LIVE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, " check_circle ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r24.storeInfo().fontName);
  }
}

function AdminViewComponent_div_3_div_6_header_1_a_6_ng_template_1_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "mat-icon", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, " error_outline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "p", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const a_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", a_r29, " ");
  }
}

function AdminViewComponent_div_3_div_6_header_1_a_6_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, AdminViewComponent_div_3_div_6_header_1_a_6_ng_template_1_div_0_Template, 6, 1, "div", 34);
  }

  if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r27.missingInfo());
  }
}

function AdminViewComponent_div_3_div_6_header_1_a_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, AdminViewComponent_div_3_div_6_header_1_a_6_ng_template_1_Template, 1, 1, "ng-template", null, 33, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, " STORE INACTIVE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "mat-icon", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, " error_outline ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](2);

    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r25.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngbTooltip", _r26);
  }
}

function AdminViewComponent_div_3_div_6_header_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "header");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AdminViewComponent_div_3_div_6_header_1_Template_a_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r31);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return ctx_r30.toggleSidebar();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "menu_open");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](5, AdminViewComponent_div_3_div_6_header_1_a_5_Template, 5, 2, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, AdminViewComponent_div_3_div_6_header_1_a_6_Template, 7, 3, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AdminViewComponent_div_3_div_6_header_1_Template_a_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r31);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
      return ctx_r32.toggleSidebar();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "a", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12, "arrow_back_ios");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    let tmp_4_0;
    let tmp_9_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMapInterpolate1"]("bg-", ctx_r22.storeInfo().colorStyle.back_code, " py-6");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMapInterpolate1"]("btn side text-", ctx_r22.storeInfo().colorStyle.text_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r22.storeLive());
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r22.storeLive());
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("background-image", "url(" + ((tmp_4_0 = ctx_r22.storeInfo().themeLink == null ? null : ctx_r22.storeInfo().themeLink.toString()) !== null && tmp_4_0 !== undefined ? tmp_4_0 : "") + ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMapInterpolate1"]("side text-center text-", ctx_r22.storeInfo().colorStyle.text_code, " d-flex align-items-center justify-content-between");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r22.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMapInterpolate1"]("btn side mt-2 text-", ctx_r22.storeInfo().colorStyle.text_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("@rotatedState", ctx_r22.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", (tmp_9_0 = ctx_r22.getSelectedPanel()) == null ? null : tmp_9_0.Title, " ");
  }
}

function AdminViewComponent_div_3_div_6_section_2_div_1_a_46_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
  }

  if (rf & 2) {
    const social_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r47.toolTip(social_r45).name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r47.toolTip(social_r45).link, " ");
  }
}

function AdminViewComponent_div_3_div_6_section_2_div_1_a_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "a", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AdminViewComponent_div_3_div_6_section_2_div_1_a_46_Template_a_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r50);
      const social_r45 = restoredCtx.$implicit;
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](5);
      return ctx_r49.showSocialModal(social_r45);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, AdminViewComponent_div_3_div_6_section_2_div_1_a_46_ng_template_1_Template, 3, 2, "ng-template", null, 74, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "img", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const social_r45 = ctx.$implicit;

    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](2);

    const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("width", 45, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("not-set", ctx_r44.toolTip(social_r45).name == "No " + social_r45.name + " URL set");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngbTooltip", _r46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("width", 45, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("src", social_r45.img, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
  }
}

function AdminViewComponent_div_3_div_6_section_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "form", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AdminViewComponent_div_3_div_6_section_2_div_1_Template_a_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r52);

      const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](15);

      return _r43.click();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](8, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](9, "canvas", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AdminViewComponent_div_3_div_6_section_2_div_1_Template_a_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r52);

      const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](15);

      return _r43.click();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13, "file_upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "input", 55, 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function AdminViewComponent_div_3_div_6_section_2_div_1_Template_input_change_14_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r52);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
      return ctx_r54.fileChangeEvent($event, "Profile");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AdminViewComponent_div_3_div_6_section_2_div_1_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r52);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
      return ctx_r55.saveProfile();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17, "Save Changes");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](21, "Username");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](22, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "mat-hint", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](25, "This will also be your store's handle");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](26, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](27, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](28, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](29, "Display Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](30, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](31, "mat-hint", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](32, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](33, "This will also be your store's name");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](34, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](35, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](36, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](37, "Biography");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](38, "textarea", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](39, "mat-hint", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](40, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](41, "This will show up on your store's 'About' page");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](42, "div", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](43, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](44, "Socials");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](45, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](46, AdminViewComponent_div_3_div_6_section_2_div_1_a_46_Template, 4, 8, "a", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](47, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](48, "h2", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](49, "Custom Store Domain");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](50, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](51, "form", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](52, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](53, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](54, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](55, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](56, "Current Domain");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](57, "input", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](58, "mat-hint", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](59, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](60, "Adding a custom domain helps boost conversions by over 30%");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](61, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AdminViewComponent_div_3_div_6_section_2_div_1_Template_button_click_61_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r52);
      const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
      return ctx_r56.saveEmail();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](62, "Add Custom Domain");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("background-color", ctx_r33.selectedTheme().bg_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("border-secondary", ctx_r33.storeInfo().colorStyle.text_code == "light");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx_r33.userForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("src", ctx_r33.getImgSrc(), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("color", ctx_r33.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r33.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r33.storeInfo().fontName)("color", ctx_r33.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMapInterpolate1"]("form-control mt-1 bg-", ctx_r33.storeInfo().colorStyle.back_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r33.storeInfo().fontName)("color", ctx_r33.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r33.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r33.storeInfo().fontName)("color", ctx_r33.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMapInterpolate1"]("form-control mt-1 bg-", ctx_r33.storeInfo().colorStyle.back_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r33.storeInfo().fontName)("color", ctx_r33.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate1"]("placeholder", "ex: '", ctx_r33.getUsername(), "'");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r33.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r33.storeInfo().fontName)("color", ctx_r33.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMapInterpolate1"]("form-control mt-1 bg-", ctx_r33.storeInfo().colorStyle.back_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r33.storeInfo().fontName)("color", ctx_r33.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r33.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r33.storeInfo().fontName)("color", ctx_r33.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r33.socials());
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("background-color", ctx_r33.selectedTheme().bg_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("border-secondary", ctx_r33.storeInfo().colorStyle.text_code == "light");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("color", ctx_r33.selectedTheme().color)("font-family", ctx_r33.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx_r33.changeEmailForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r33.storeInfo().fontName)("color", ctx_r33.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMapInterpolate1"]("form-control mt-1 bg-", ctx_r33.storeInfo().colorStyle.back_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r33.storeInfo().fontName)("color", ctx_r33.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵattribute"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r33.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r33.storeInfo().fontName);
  }
}

function AdminViewComponent_div_3_div_6_section_2_div_2_option_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "option", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const sTheme_r63 = ctx.$implicit;
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("selected", sTheme_r63.name == ctx_r57.theme);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](sTheme_r63.name);
  }
}

function AdminViewComponent_div_3_div_6_section_2_div_2_option_33_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "option", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const font_r64 = ctx.$implicit;
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("selected", font_r64 == ctx_r58.userInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](font_r64);
  }
}

function AdminViewComponent_div_3_div_6_section_2_div_2_option_89_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "option", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const indicator_r65 = ctx.$implicit;
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("selected", indicator_r65 == ctx_r62.storeForm.controls["loadingIndicator"].value);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](indicator_r65);
  }
}

function AdminViewComponent_div_3_div_6_section_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "button", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AdminViewComponent_div_3_div_6_section_2_div_2_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r67);
      const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
      return ctx_r66.saveStore();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, "Save Changes");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "form", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, "Store Slogan");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](11, "input", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "mat-hint", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14, "This will show up on your store's homepage");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "label", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](18, "Store Theme \u279C");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "mat-hint", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](21, "Your Store's color theme. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "select", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function AdminViewComponent_div_3_div_6_section_2_div_2_Template_select_change_23_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r67);
      const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
      return ctx_r68.selectTheme();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](24, AdminViewComponent_div_3_div_6_section_2_div_2_option_24_Template, 2, 2, "option", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](25, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](26, "label", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](27, "Store Font \u279C");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](28, "mat-hint", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](29, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](30, "Your Store's Font. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](31, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](32, "select", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](33, AdminViewComponent_div_3_div_6_section_2_div_2_option_33_Template, 2, 2, "option", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](34, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](35, "label", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](36, "Store Background Image \u279C");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](37, "mat-hint", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](38, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](39, "This will show up at the top for ALL pages");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](40, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](41, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AdminViewComponent_div_3_div_6_section_2_div_2_Template_a_click_41_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r67);

      const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](49);

      return _r59.click();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](42, "img", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](43, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](44, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](45, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AdminViewComponent_div_3_div_6_section_2_div_2_Template_a_click_45_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r67);

      const _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](49);

      return _r59.click();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](46, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](47, "file_upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](48, "input", 55, 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function AdminViewComponent_div_3_div_6_section_2_div_2_Template_input_change_48_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r67);
      const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
      return ctx_r71.fileChangeEvent($event, "Background");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](50, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](51, "label", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](52, "Homepage Promotion Image \u279C");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](53, "mat-hint", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](54, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](55, "This will show up on the homepage");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](56, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](57, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AdminViewComponent_div_3_div_6_section_2_div_2_Template_a_click_57_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r67);

      const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](65);

      return _r60.click();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](58, "img", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](59, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](60, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](61, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AdminViewComponent_div_3_div_6_section_2_div_2_Template_a_click_61_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r67);

      const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](65);

      return _r60.click();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](62, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](63, "file_upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](64, "input", 55, 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function AdminViewComponent_div_3_div_6_section_2_div_2_Template_input_change_64_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r67);
      const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
      return ctx_r74.fileChangeEvent($event, "Promotion");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](66, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](67, "label", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](68, "Action Image \u279C");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](69, "mat-hint", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](70, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](71, "Displayed with any action button (ex: Continue Shopping) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](72, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](73, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AdminViewComponent_div_3_div_6_section_2_div_2_Template_a_click_73_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r67);

      const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](81);

      return _r61.click();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](74, "img", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](75, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](76, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](77, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AdminViewComponent_div_3_div_6_section_2_div_2_Template_a_click_77_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r67);

      const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](81);

      return _r61.click();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](78, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](79, "file_upload");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](80, "input", 55, 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function AdminViewComponent_div_3_div_6_section_2_div_2_Template_input_change_80_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r67);
      const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
      return ctx_r77.fileChangeEvent($event, "Action");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](82, "label", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](83, "Store Loading Indicator \u279C");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](84, "mat-hint", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](85, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](86, "Displayed anytime loading is in progress. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](87, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](88, "select", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("change", function AdminViewComponent_div_3_div_6_section_2_div_2_Template_select_change_88_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r67);
      const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
      return ctx_r78.showSampleSpinner();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](89, AdminViewComponent_div_3_div_6_section_2_div_2_option_89_Template, 2, 2, "option", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](90, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](91, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](92, "label", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](93, "Loading Color");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](94, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](95, "a", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("colorPickerSelect", function AdminViewComponent_div_3_div_6_section_2_div_2_Template_a_colorPickerSelect_95_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r67);
      const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
      return ctx_r79.selectColor($event, true);
    })("colorPickerChange", function AdminViewComponent_div_3_div_6_section_2_div_2_Template_a_colorPickerChange_95_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r67);
      const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
      return ctx_r80.selectedIndicator().color = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](96, "mat-icon", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](97, "colorize");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](98, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](99, "label", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](100, "Loading Background Color");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](101, "div", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](102, "a", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("colorPickerSelect", function AdminViewComponent_div_3_div_6_section_2_div_2_Template_a_colorPickerSelect_102_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r67);
      const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
      return ctx_r81.selectColor($event, false);
    })("colorPickerChange", function AdminViewComponent_div_3_div_6_section_2_div_2_Template_a_colorPickerChange_102_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r67);
      const ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
      return ctx_r82.selectedIndicator().bg_color = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](103, "mat-icon", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](104, "colorize");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](105, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AdminViewComponent_div_3_div_6_section_2_div_2_Template_button_click_105_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r67);
      const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
      return ctx_r83.saveStore();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](106, "Save Changes");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("background-color", ctx_r34.selectedTheme().bg_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("border-secondary", ctx_r34.storeInfo().colorStyle.text_code == "light");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r34.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx_r34.storeForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r34.storeInfo().fontName)("color", ctx_r34.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMapInterpolate1"]("form-control mt-1 bg-", ctx_r34.storeInfo().colorStyle.back_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r34.storeInfo().fontName)("color", ctx_r34.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r34.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r34.storeInfo().fontName)("color", ctx_r34.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r34.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMapInterpolate1"]("form-select bg-", ctx_r34.storeInfo().colorStyle.back_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r34.storeInfo().fontName)("color", ctx_r34.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r34.themes());
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r34.storeInfo().fontName)("color", ctx_r34.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r34.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMapInterpolate1"]("form-select bg-", ctx_r34.storeInfo().colorStyle.back_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r34.storeInfo().fontName)("color", ctx_r34.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r34.fonts());
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r34.storeInfo().fontName)("color", ctx_r34.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r34.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMapInterpolate1"]("card h-auto bg-", ctx_r34.storeInfo().colorStyle.back_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("src", ctx_r34.storeForm.controls["themeImg"].value, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("color", ctx_r34.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r34.storeInfo().fontName)("color", ctx_r34.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r34.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMapInterpolate1"]("card h-auto bg-", ctx_r34.storeInfo().colorStyle.back_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("src", ctx_r34.storeForm.controls["homeImg"].value, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("color", ctx_r34.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r34.storeInfo().fontName)("color", ctx_r34.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r34.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMapInterpolate1"]("card h-auto bg-", ctx_r34.storeInfo().colorStyle.back_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("src", ctx_r34.storeForm.controls["actionImg"].value, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("color", ctx_r34.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r34.storeInfo().fontName)("color", ctx_r34.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r34.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMapInterpolate1"]("form-select bg-", ctx_r34.storeInfo().colorStyle.back_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r34.storeInfo().fontName)("color", ctx_r34.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r34.loaders());
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r34.storeInfo().fontName)("color", ctx_r34.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("background", ctx_r34.selectedIndicator().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("cpPosition", "top")("cpPositionRelativeToArrow", true)("cpOutputFormat", "rgba")("cpOKButton", true)("cpOKButtonText", "SET COLOR")("cpOKButtonClass", "btn btn-dark")("cpSaveClickOutside", false)("colorPicker", ctx_r34.selectedIndicator().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("color", ctx_r34.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r34.storeInfo().fontName)("color", ctx_r34.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("background", ctx_r34.selectedIndicator().bg_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("cpPosition", "top")("cpPositionRelativeToArrow", true)("cpOutputFormat", "rgba")("cpOKButton", true)("cpOKButtonText", "SET COLOR")("cpOKButtonClass", "btn btn-dark")("cpSaveClickOutside", false)("colorPicker", ctx_r34.selectedIndicator().bg_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("color", ctx_r34.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r34.storeInfo().fontName);
  }
}

function AdminViewComponent_div_3_div_6_section_2_div_3_div_1_div_6_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "a", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AdminViewComponent_div_3_div_6_section_2_div_3_div_1_div_6_div_2_Template_a_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r91);
      const product_r89 = restoredCtx.$implicit;
      const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](7);
      return ctx_r90.routeToProduct(product_r89.productID);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "img", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "h4", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "a", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AdminViewComponent_div_3_div_6_section_2_div_3_div_1_div_6_div_2_Template_a_click_7_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r91);
      const product_r89 = restoredCtx.$implicit;
      const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](7);
      return ctx_r92.routeToProduct(product_r89.productID);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "div", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AdminViewComponent_div_3_div_6_section_2_div_3_div_1_div_6_div_2_Template_a_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r91);
      const product_r89 = restoredCtx.$implicit;
      const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](7);
      return ctx_r93.editProduct(product_r89);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12, "edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AdminViewComponent_div_3_div_6_section_2_div_3_div_1_div_6_div_2_Template_a_click_13_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r91);
      const product_r89 = restoredCtx.$implicit;
      const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](7);
      return ctx_r94.deleteProduct(product_r89);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](15, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "div", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "a", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AdminViewComponent_div_3_div_6_section_2_div_3_div_1_div_6_div_2_Template_a_click_18_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r91);
      const product_r89 = restoredCtx.$implicit;
      const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](7);
      return ctx_r95.routeToProduct(product_r89.productID);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const product_r89 = ctx.$implicit;
    const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMapInterpolate1"]("card h-100 bg-", ctx_r88.storeInfo().colorStyle.back_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("border-secondary", ctx_r88.storeInfo().colorStyle.text_code == "light");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("src", product_r89.url, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("color", ctx_r88.selectedTheme().color)("font-family", ctx_r88.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](product_r89.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("color", ctx_r88.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("color", ctx_r88.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMapInterpolate1"]("btn btn-outline-", ctx_r88.storeInfo().colorStyle.text_code, " mt-0 d-flex justify-content-center text-center");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r88.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r88.formatPrice(product_r89.price / 100));
  }
}

function AdminViewComponent_div_3_div_6_section_2_div_3_div_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, AdminViewComponent_div_3_div_6_section_2_div_3_div_1_div_6_div_2_Template, 20, 24, "div", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r86.storeProducts);
  }
}

function AdminViewComponent_div_3_div_6_section_2_div_3_div_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AdminViewComponent_div_3_div_6_section_2_div_3_div_1_div_7_Template_a_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r97);
      const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](6);
      return ctx_r96.createNewProduct();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, " Create your first product ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "mat-icon", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, " new_releases ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "a", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AdminViewComponent_div_3_div_6_section_2_div_3_div_1_div_7_Template_a_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r97);
      const ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](6);
      return ctx_r98.createNewProduct();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](8, "img", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("background-color", ctx_r87.selectedTheme().bg_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("border-secondary", ctx_r87.storeInfo().colorStyle.text_code == "light");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMapInterpolate1"]("side d-flex text-", ctx_r87.storeInfo().colorStyle.text_code, " m-3 align-items-center justify-content-center fw-bold");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r87.storeInfo().fontName);
  }
}

function AdminViewComponent_div_3_div_6_section_2_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r100 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "a", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AdminViewComponent_div_3_div_6_section_2_div_3_div_1_Template_a_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r100);
      const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](5);
      return ctx_r99.createNewProduct();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "mat-icon", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, " storefront ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, " NEW PRODUCT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, AdminViewComponent_div_3_div_6_section_2_div_3_div_1_div_6_Template, 3, 1, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](7, AdminViewComponent_div_3_div_6_section_2_div_3_div_1_div_7_Template, 9, 10, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMapInterpolate1"]("btn d-flex mx-2 mx-md-4 mx-lg-5 ps-0 mb-5 text-", ctx_r84.storeInfo().colorStyle.text_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r84.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (ctx_r84.storeProducts == null ? null : ctx_r84.storeProducts.length) != 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (ctx_r84.storeProducts == null ? null : ctx_r84.storeProducts.length) == 0);
  }
}

function AdminViewComponent_div_3_div_6_section_2_div_3_div_2_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AdminViewComponent_div_3_div_6_section_2_div_3_div_2_button_13_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r104);
      const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](6);
      return ctx_r103.startSubscription();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Start 14 day Free Trial");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r101.storeInfo().fontName)("background-color", ctx_r101.selectedTheme().color)("color", ctx_r101.selectedTheme().bg_color);
  }
}

function AdminViewComponent_div_3_div_6_section_2_div_3_div_2_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AdminViewComponent_div_3_div_6_section_2_div_3_div_2_button_14_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r106);
      const ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](6);
      return ctx_r105.startSubscription();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Start Subscription");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r102.storeInfo().fontName)("background-color", ctx_r102.selectedTheme().color)("color", ctx_r102.selectedTheme().bg_color);
  }
}

function AdminViewComponent_div_3_div_6_section_2_div_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "a", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, " PLAN NEEDED ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "mat-icon", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8, " new_releases ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, " Set up your merchant plan to create your first product. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](13, AdminViewComponent_div_3_div_6_section_2_div_3_div_2_button_13_Template, 2, 8, "button", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](14, AdminViewComponent_div_3_div_6_section_2_div_3_div_2_button_14_Template, 2, 8, "button", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMapInterpolate1"]("card bg-", ctx_r85.storeInfo().colorStyle.back_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("border-secondary", ctx_r85.storeInfo().colorStyle.text_code == "light");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMapInterpolate1"]("side d-flex text-", ctx_r85.storeInfo().colorStyle.text_code, " m-3 align-items-center justify-content-center fw-bold");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r85.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMapInterpolate1"]("px-2 text-center text-", ctx_r85.storeInfo().colorStyle.text_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r85.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r85.canTrial);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r85.canTrial);
  }
}

function AdminViewComponent_div_3_div_6_section_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, AdminViewComponent_div_3_div_6_section_2_div_3_div_1_Template, 8, 7, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, AdminViewComponent_div_3_div_6_section_2_div_3_div_2_Template, 15, 17, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r35.subInfo != undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r35.subInfo == undefined);
  }
}

function AdminViewComponent_div_3_div_6_section_2_div_4_div_1_div_4_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r115 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AdminViewComponent_div_3_div_6_section_2_div_4_div_1_div_4_button_17_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r115);
      const inv_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](6);
      return ctx_r113.setUpAutoReload(inv_r110);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Set up Auto-Reload");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r111.storeInfo().fontName)("background-color", ctx_r111.selectedTheme().color)("color", ctx_r111.selectedTheme().bg_color);
  }
}

function AdminViewComponent_div_3_div_6_section_2_div_4_div_1_div_4_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r118 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AdminViewComponent_div_3_div_6_section_2_div_4_div_1_div_4_button_18_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r118);
      const inv_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
      const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](6);
      return ctx_r116.removeAutoReload(inv_r110);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Auto-Reload");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "mat-icon", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "check_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r112.storeInfo().fontName);
  }
}

function AdminViewComponent_div_3_div_6_section_2_div_4_div_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r120 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "h2", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "label", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7, "Remaining: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "mat-hint", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "a", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "a", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](13, "img", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "button", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AdminViewComponent_div_3_div_6_section_2_div_4_div_1_div_4_Template_button_click_15_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r120);
      const inv_r110 = restoredCtx.$implicit;
      const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](6);
      return ctx_r119.buyMore(inv_r110);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](16, "Add More");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](17, AdminViewComponent_div_3_div_6_section_2_div_4_div_1_div_4_button_17_Template, 2, 8, "button", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](18, AdminViewComponent_div_3_div_6_section_2_div_4_div_1_div_4_button_18_Template, 4, 2, "button", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const inv_r110 = ctx.$implicit;
    const ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](6);
    let tmp_8_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMapInterpolate1"]("card bg-", ctx_r109.storeInfo().colorStyle.back_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("border-secondary", ctx_r109.storeInfo().colorStyle.text_code == "light");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("color", ctx_r109.selectedTheme().color)("font-family", ctx_r109.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](inv_r110.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r109.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r109.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("color", ctx_r109.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", (tmp_8_0 = inv_r110.amount) !== null && tmp_8_0 !== undefined ? tmp_8_0 : 0, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("src", ctx_r109.getTypeImages(inv_r110.name), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r109.storeInfo().fontName)("background-color", ctx_r109.selectedTheme().color)("color", ctx_r109.selectedTheme().bg_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !inv_r110.autoReload);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", inv_r110.autoReload);
  }
}

function AdminViewComponent_div_3_div_6_section_2_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "h1", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "MY INVENTORY");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, AdminViewComponent_div_3_div_6_section_2_div_4_div_1_div_4_Template, 19, 30, "div", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r107 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMapInterpolate2"]("text-center fw-bolder bg-", ctx_r107.storeInfo().colorStyle.text_code, " text-", ctx_r107.storeInfo().colorStyle.back_code, " py-5");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("color", ctx_r107.selectedTheme().color)("font-family", ctx_r107.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r107.inventory);
  }
}

function AdminViewComponent_div_3_div_6_section_2_div_4_div_2_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r124 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "h2", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "label", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9, "Price: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "mat-hint", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "a", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "div", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "label", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "div", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "a", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](18, "img", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "button", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AdminViewComponent_div_3_div_6_section_2_div_4_div_2_div_7_Template_button_click_20_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r124);
      const template_r122 = restoredCtx.$implicit;
      const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](6);
      return ctx_r123.buyNewInventory(template_r122);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const template_r122 = ctx.$implicit;
    const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMapInterpolate1"]("card bg-", ctx_r121.storeInfo().colorStyle.back_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("border-secondary", ctx_r121.storeInfo().colorStyle.text_code == "light");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("color", ctx_r121.selectedTheme().color)("font-family", ctx_r121.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](template_r122.templateDisplayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r121.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r121.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("color", ctx_r121.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r121.formatPrice(template_r122.bulkPrice / 100, true));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r121.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("(Per. ", template_r122.templateDisplayName.slice(0, -1).toLowerCase(), ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("src", ctx_r121.getTypeImages(template_r122.templateDisplayName), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r121.storeInfo().fontName)("background-color", ctx_r121.selectedTheme().color)("color", ctx_r121.selectedTheme().bg_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("Buy ", template_r122.bulkUnit, " Units");
  }
}

function AdminViewComponent_div_3_div_6_section_2_div_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "h1", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "Buy your own inventory");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](7, AdminViewComponent_div_3_div_6_section_2_div_4_div_2_div_7_Template, 22, 32, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMapInterpolate2"]("text-center fw-bolder bg-", ctx_r108.storeInfo().colorStyle.text_code, " text-", ctx_r108.storeInfo().colorStyle.back_code, " py-5");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("color", ctx_r108.selectedTheme().color)("font-family", ctx_r108.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", ctx_r108.invTitle, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r108.availableToBuyTemplates());
  }
}

function AdminViewComponent_div_3_div_6_section_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, AdminViewComponent_div_3_div_6_section_2_div_4_div_1_Template, 5, 10, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, AdminViewComponent_div_3_div_6_section_2_div_4_div_2_Template, 8, 11, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ((tmp_0_0 = ctx_r36.inventory == null ? null : ctx_r36.inventory.length) !== null && tmp_0_0 !== undefined ? tmp_0_0 : 0) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r36.availableToBuyTemplates().length > 0);
  }
}

function AdminViewComponent_div_3_div_6_section_2_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r126 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "h2", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "Change Email Address");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "form", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, "New Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](11, "input", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "mat-hint", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14, "The new email you wish to use");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](19, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](20, "input", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "mat-hint", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](23, "Confirm your password to make changes");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AdminViewComponent_div_3_div_6_section_2_div_5_Template_button_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r126);
      const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
      return ctx_r125.saveEmail();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](25, "Update Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](26, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](27, "h2", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](28, "Change Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](29, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](30, "form", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](31, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](32, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](33, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](34, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](35, "Old Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](36, "input", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](37, "mat-hint", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](38, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](39, "Your current password");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](40, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](41, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](42, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](43, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](44, "New Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](45, "input", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](46, "mat-hint", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](47, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](48, "The new password you wish to use");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](49, "div", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](50, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](51, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](52, "label", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](53, "Confirm New Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](54, "input", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](55, "mat-hint", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](56, "i", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](57, "Confirm your new password");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](58, "button", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AdminViewComponent_div_3_div_6_section_2_div_5_Template_button_click_58_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r126);
      const ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
      return ctx_r127.savePassword();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](59, "Update Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("background-color", ctx_r37.selectedTheme().bg_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("border-secondary", ctx_r37.storeInfo().colorStyle.text_code == "light");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("color", ctx_r37.selectedTheme().color)("font-family", ctx_r37.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx_r37.changeEmailForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r37.storeInfo().fontName)("color", ctx_r37.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMapInterpolate1"]("form-control mt-1 bg-", ctx_r37.storeInfo().colorStyle.back_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r37.storeInfo().fontName)("color", ctx_r37.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r37.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r37.storeInfo().fontName)("color", ctx_r37.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMapInterpolate1"]("form-control mt-1 bg-", ctx_r37.storeInfo().colorStyle.back_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r37.storeInfo().fontName)("color", ctx_r37.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("type", ctx_r37.show ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r37.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r37.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("background-color", ctx_r37.selectedTheme().bg_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("border-secondary", ctx_r37.storeInfo().colorStyle.text_code == "light");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("color", ctx_r37.selectedTheme().color)("font-family", ctx_r37.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx_r37.changePassForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r37.storeInfo().fontName)("color", ctx_r37.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMapInterpolate1"]("form-control mt-1 bg-", ctx_r37.storeInfo().colorStyle.back_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r37.storeInfo().fontName)("color", ctx_r37.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("type", ctx_r37.show ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r37.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r37.storeInfo().fontName)("color", ctx_r37.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMapInterpolate1"]("form-control mt-1 bg-", ctx_r37.storeInfo().colorStyle.back_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r37.storeInfo().fontName)("color", ctx_r37.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("type", ctx_r37.show ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r37.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r37.storeInfo().fontName)("color", ctx_r37.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMapInterpolate1"]("form-control mt-1 bg-", ctx_r37.storeInfo().colorStyle.back_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r37.storeInfo().fontName)("color", ctx_r37.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("type", ctx_r37.show ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r37.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r37.storeInfo().fontName);
  }
}

function AdminViewComponent_div_3_div_6_section_2_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r131 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "a", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, " Payment Method ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "mat-icon", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8, " new_releases ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, " This is required to activate your merchant plan. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "button", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AdminViewComponent_div_3_div_6_section_2_div_6_div_1_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r131);
      const ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](5);
      return ctx_r130.routeToBillingAdmin();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14, "Add Payment Method");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMapInterpolate1"]("card bg-", ctx_r128.storeInfo().colorStyle.back_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("border-secondary", ctx_r128.storeInfo().colorStyle.text_code == "light");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMapInterpolate1"]("side d-flex text-", ctx_r128.storeInfo().colorStyle.text_code, " m-3 align-items-center justify-content-center fw-bold");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r128.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMapInterpolate1"]("px-2 text-center text-", ctx_r128.storeInfo().colorStyle.text_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r128.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r128.storeInfo().fontName)("background-color", ctx_r128.selectedTheme().color)("color", ctx_r128.selectedTheme().bg_color);
  }
}

function AdminViewComponent_div_3_div_6_section_2_div_6_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r133 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "h2", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "Payment Method");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "mat-hint", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "a", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "mat-hint", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "a", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "mat-hint", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "a", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "mat-hint", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "a", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "button", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AdminViewComponent_div_3_div_6_section_2_div_6_div_2_Template_button_click_24_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r133);
      const ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](5);
      return ctx_r132.routeToBillingAdmin();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](25, "Edit Billing Info");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMapInterpolate1"]("card bg-", ctx_r129.storeInfo().colorStyle.back_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("border-secondary", ctx_r129.storeInfo().colorStyle.text_code == "light");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("color", ctx_r129.selectedTheme().color)("font-family", ctx_r129.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r129.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("color", ctx_r129.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r129.getBillingAddressFirst());
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r129.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("color", ctx_r129.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r129.getBillingAddressSecond());
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r129.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("color", ctx_r129.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r129.getBillingAddressThird());
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r129.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("color", ctx_r129.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r129.getBillingAddressFourth());
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r129.storeInfo().fontName)("background-color", ctx_r129.selectedTheme().color)("color", ctx_r129.selectedTheme().bg_color);
  }
}

function AdminViewComponent_div_3_div_6_section_2_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, AdminViewComponent_div_3_div_6_section_2_div_6_div_1_Template, 15, 23, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, AdminViewComponent_div_3_div_6_section_2_div_6_div_2_Template, 26, 42, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ((tmp_0_0 = ctx_r38.billingInfo()) == null ? null : tmp_0_0.number) == undefined || ((tmp_0_0 = ctx_r38.billingInfo()) == null ? null : tmp_0_0.number) == "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r38.billingInfo()) == null ? null : tmp_1_0.number) != undefined && ((tmp_1_0 = ctx_r38.billingInfo()) == null ? null : tmp_1_0.number) != "");
  }
}

function AdminViewComponent_div_3_div_6_section_2_div_7_div_1_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r139 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AdminViewComponent_div_3_div_6_section_2_div_7_div_1_button_13_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r139);
      const ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](6);
      return ctx_r138.startSubscription();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Start 14 day Free Trial");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r136.storeInfo().fontName)("background-color", ctx_r136.selectedTheme().color)("color", ctx_r136.selectedTheme().bg_color);
  }
}

function AdminViewComponent_div_3_div_6_section_2_div_7_div_1_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r141 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AdminViewComponent_div_3_div_6_section_2_div_7_div_1_button_14_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r141);
      const ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](6);
      return ctx_r140.startSubscription();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Start Subscription");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r137.storeInfo().fontName)("background-color", ctx_r137.selectedTheme().color)("color", ctx_r137.selectedTheme().bg_color);
  }
}

function AdminViewComponent_div_3_div_6_section_2_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "a", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, " Merchant Plan ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "mat-icon", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8, " new_releases ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, " Set up your merchant plan to activate your online store. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](13, AdminViewComponent_div_3_div_6_section_2_div_7_div_1_button_13_Template, 2, 8, "button", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](14, AdminViewComponent_div_3_div_6_section_2_div_7_div_1_button_14_Template, 2, 8, "button", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMapInterpolate1"]("card bg-", ctx_r134.storeInfo().colorStyle.back_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("border-secondary", ctx_r134.storeInfo().colorStyle.text_code == "light");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMapInterpolate1"]("side d-flex text-", ctx_r134.storeInfo().colorStyle.text_code, " m-3 align-items-center justify-content-center fw-bold");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r134.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMapInterpolate1"]("px-2 text-center text-", ctx_r134.storeInfo().colorStyle.text_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r134.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r134.canTrial);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r134.canTrial);
  }
}

function AdminViewComponent_div_3_div_6_section_2_div_7_div_2_h2_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "h2", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Merchant Plan");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("color", ctx_r142.selectedTheme().color)("font-family", ctx_r142.storeInfo().fontName);
  }
}

function AdminViewComponent_div_3_div_6_section_2_div_7_div_2_a_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "a", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Renew Merchant Plan ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "mat-icon", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4, " new_releases ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r143.storeInfo().fontName);
  }
}

function AdminViewComponent_div_3_div_6_section_2_div_7_div_2_b_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "b", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "(Trial)");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }
}

function AdminViewComponent_div_3_div_6_section_2_div_7_div_2_mat_hint_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-hint", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "a", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](6);
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r145.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("color", ctx_r145.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"]("", ctx_r145.formatPrice(((tmp_2_0 = ctx_r145.subInfo == null ? null : ctx_r145.subInfo.plan.amount) !== null && tmp_2_0 !== undefined ? tmp_2_0 : 0) / 100), "/", (tmp_2_0 = ctx_r145.subInfo == null ? null : ctx_r145.subInfo.plan.interval) !== null && tmp_2_0 !== undefined ? tmp_2_0 : "month", "");
  }
}

function AdminViewComponent_div_3_div_6_section_2_div_7_div_2_mat_hint_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "mat-hint", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "a", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "FREE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "b", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](6);
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r146.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("color", ctx_r146.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"]("(", ctx_r146.formatPrice(((tmp_2_0 = ctx_r146.subInfo == null ? null : ctx_r146.subInfo.plan.amount) !== null && tmp_2_0 !== undefined ? tmp_2_0 : 0) / 100), "/", (tmp_2_0 = ctx_r146.subInfo == null ? null : ctx_r146.subInfo.plan.interval) !== null && tmp_2_0 !== undefined ? tmp_2_0 : "month", " after trial)");
  }
}

function AdminViewComponent_div_3_div_6_section_2_div_7_div_2_div_19_label_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "label", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Renews: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r151.storeInfo().fontName);
  }
}

function AdminViewComponent_div_3_div_6_section_2_div_7_div_2_div_19_label_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "label", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Trial End: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r152.storeInfo().fontName);
  }
}

function AdminViewComponent_div_3_div_6_section_2_div_7_div_2_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, AdminViewComponent_div_3_div_6_section_2_div_7_div_2_div_19_label_1_Template, 2, 2, "label", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, AdminViewComponent_div_3_div_6_section_2_div_7_div_2_div_19_label_2_Template, 2, 2, "label", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "mat-hint", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "a", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r147.subInfo.status != "trialing");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r147.subInfo.status == "trialing");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r147.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("color", ctx_r147.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r147.planRenewalDate());
  }
}

function AdminViewComponent_div_3_div_6_section_2_div_7_div_2_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "label", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Plan Ends: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "mat-hint", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "a", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r148.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r148.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("color", ctx_r148.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r148.planEndDate());
  }
}

function AdminViewComponent_div_3_div_6_section_2_div_7_div_2_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r154 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "button", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AdminViewComponent_div_3_div_6_section_2_div_7_div_2_div_21_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r154);
      const ctx_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](6);
      return ctx_r153.editSubscription(ctx_r153.subInfo);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Edit Plan");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r149.storeInfo().fontName)("background-color", ctx_r149.selectedTheme().color)("color", ctx_r149.selectedTheme().bg_color);
  }
}

function AdminViewComponent_div_3_div_6_section_2_div_7_div_2_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r156 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "button", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AdminViewComponent_div_3_div_6_section_2_div_7_div_2_div_22_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r156);
      const ctx_r155 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](6);
      return ctx_r155.editSubscription(ctx_r155.subInfo);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Renew Plan");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r150.storeInfo().fontName)("background-color", ctx_r150.selectedTheme().color)("color", ctx_r150.selectedTheme().bg_color);
  }
}

function AdminViewComponent_div_3_div_6_section_2_div_7_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, AdminViewComponent_div_3_div_6_section_2_div_7_div_2_h2_4_Template, 2, 5, "h2", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](5, AdminViewComponent_div_3_div_6_section_2_div_7_div_2_a_5_Template, 5, 2, "a", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "label", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9, "Plan: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "mat-hint", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "a", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](13, AdminViewComponent_div_3_div_6_section_2_div_7_div_2_b_13_Template, 2, 0, "b", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "label", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](16, "Price: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](17, AdminViewComponent_div_3_div_6_section_2_div_7_div_2_mat_hint_17_Template, 3, 7, "mat-hint", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](18, AdminViewComponent_div_3_div_6_section_2_div_7_div_2_mat_hint_18_Template, 5, 7, "mat-hint", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](19, AdminViewComponent_div_3_div_6_section_2_div_7_div_2_div_19_Template, 6, 8, "div", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](20, AdminViewComponent_div_3_div_6_section_2_div_7_div_2_div_20_Template, 6, 8, "div", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](21, AdminViewComponent_div_3_div_6_section_2_div_7_div_2_div_21_Template, 3, 8, "div", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](22, AdminViewComponent_div_3_div_6_section_2_div_7_div_2_div_22_Template, 3, 8, "div", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMapInterpolate1"]("card bg-", ctx_r135.storeInfo().colorStyle.back_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("border-secondary", ctx_r135.storeInfo().colorStyle.text_code == "light");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r135.subInfo.cancel_at_period_end);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r135.subInfo.cancel_at_period_end);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r135.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r135.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("color", ctx_r135.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", ctx_r135.planStatus(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r135.subInfo.status == "trialing");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r135.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r135.subInfo.status != "trialing");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r135.subInfo.status == "trialing");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r135.subInfo.cancel_at_period_end);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r135.subInfo.cancel_at_period_end);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx_r135.subInfo.cancel_at_period_end);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r135.subInfo.cancel_at_period_end);
  }
}

function AdminViewComponent_div_3_div_6_section_2_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, AdminViewComponent_div_3_div_6_section_2_div_7_div_1_Template, 15, 17, "div", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, AdminViewComponent_div_3_div_6_section_2_div_7_div_2_Template, 23, 24, "div", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r39.subInfo == undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r39.subInfo != undefined && ((tmp_1_0 = ctx_r39.subInfo == null ? null : ctx_r39.subInfo.plan.active) !== null && tmp_1_0 !== undefined ? tmp_1_0 : false));
  }
}

function AdminViewComponent_div_3_div_6_section_2_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r160 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "a", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, " Direct-Deposit Account ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "mat-icon", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8, " new_releases ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10, " Set up your bank account to receive payments. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "button", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AdminViewComponent_div_3_div_6_section_2_div_8_div_1_Template_button_click_13_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r160);
      const ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](5);
      return ctx_r159.beginBankAdd();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14, "Link Bank Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMapInterpolate1"]("card bg-", ctx_r157.storeInfo().colorStyle.back_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("border-secondary", ctx_r157.storeInfo().colorStyle.text_code == "light");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMapInterpolate1"]("side d-flex text-", ctx_r157.storeInfo().colorStyle.text_code, " m-3 align-items-center justify-content-center fw-bold");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r157.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMapInterpolate1"]("px-2 text-center text-", ctx_r157.storeInfo().colorStyle.text_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r157.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r157.storeInfo().fontName)("background-color", ctx_r157.selectedTheme().color)("color", ctx_r157.selectedTheme().bg_color);
  }
}

function AdminViewComponent_div_3_div_6_section_2_div_8_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r162 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "h2", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "Direct-Deposit Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "label", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9, "Institution: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "mat-hint", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "a", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "label", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](15, "Account Number: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "mat-hint", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "a", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "div", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "label", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](21, "Country: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "mat-hint", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "a", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](25, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](26, "button", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AdminViewComponent_div_3_div_6_section_2_div_8_div_2_Template_button_click_26_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r162);
      const ctx_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](5);
      return ctx_r161.beginBankAdd();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](27, "Edit Account");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r158 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMapInterpolate1"]("card bg-", ctx_r158.storeInfo().colorStyle.back_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("border-secondary", ctx_r158.storeInfo().colorStyle.text_code == "light");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("color", ctx_r158.selectedTheme().color)("font-family", ctx_r158.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r158.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r158.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("color", ctx_r158.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r158.bankInfo.external_accounts.data[0].bank_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r158.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r158.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("color", ctx_r158.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("\u2022\u2022\u2022\u2022\u2022\u2022", ctx_r158.bankInfo.external_accounts.data[0].last4, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r158.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r158.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("color", ctx_r158.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r158.bankInfo.external_accounts.data[0].country);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r158.storeInfo().fontName)("background-color", ctx_r158.selectedTheme().color)("color", ctx_r158.selectedTheme().bg_color);
  }
}

function AdminViewComponent_div_3_div_6_section_2_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, AdminViewComponent_div_3_div_6_section_2_div_8_div_1_Template, 15, 23, "div", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, AdminViewComponent_div_3_div_6_section_2_div_8_div_2_Template, 28, 42, "div", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r40.bankInfo == undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r40.bankInfo != undefined);
  }
}

function AdminViewComponent_div_3_div_6_section_2_div_9_div_2_ngx_charts_area_chart_7_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const model_r172 = ctx.model;
    const ctx_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"](" ", model_r172.series, " \u2022 ", model_r172.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r169.formatGraphElement(model_r172.value, model_r172.series));
  }
}

function AdminViewComponent_div_3_div_6_section_2_div_9_div_2_ngx_charts_area_chart_7_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const model_r173 = ctx.model;
    const ctx_r171 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", model_r173[0].series, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r171.formatGraphElement(model_r173[0].value, model_r173[0].series));
  }
}

function AdminViewComponent_div_3_div_6_section_2_div_9_div_2_ngx_charts_area_chart_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ngx-charts-area-chart", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " > ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, AdminViewComponent_div_3_div_6_section_2_div_9_div_2_ngx_charts_area_chart_7_ng_template_2_Template, 3, 3, "ng-template", null, 177, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, AdminViewComponent_div_3_div_6_section_2_div_9_div_2_ngx_charts_area_chart_7_ng_template_4_Template, 3, 2, "ng-template", null, 178, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r164 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const ctx_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("fill", ctx_r165.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("results", item_r164.series)("xAxis", true)("yAxis", false)("gradient", true)("customColors", item_r164.customColors)("showXAxisLabel", false)("showYAxisLabel", false)("xAxisLabel", item_r164.xAxisLabel)("xAxisTickFormatting", ctx_r165.formatPercent)("yAxisLabel", item_r164.yAxisLabel);
  }
}

function AdminViewComponent_div_3_div_6_section_2_div_9_div_2_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r176 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "h4", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "a", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "Get started by sharing your affiliate link.");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "a", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AdminViewComponent_div_3_div_6_section_2_div_9_div_2_div_8_Template_a_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r176);
      const ctx_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](6);
      return ctx_r175.copyAffiliateURL();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "mat-icon", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "span", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7, " content_copy ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8, " COPY ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r166 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("color", ctx_r166.selectedTheme().color)("font-family", ctx_r166.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMapInterpolate1"]("btn d-flex mx-auto ps-0 mb-5 justify-content-center text-", ctx_r166.storeInfo().colorStyle.text_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r166.storeInfo().fontName);
  }
}

function AdminViewComponent_div_3_div_6_section_2_div_9_div_2_p_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r164 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const ctx_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r167.storeInfo().fontName)("color", ctx_r167.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", item_r164.xAxisLabel.toUpperCase(), " ");
  }
}

function AdminViewComponent_div_3_div_6_section_2_div_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "p", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "h2", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](7, AdminViewComponent_div_3_div_6_section_2_div_9_div_2_ngx_charts_area_chart_7_Template, 6, 13, "ngx-charts-area-chart", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, AdminViewComponent_div_3_div_6_section_2_div_9_div_2_div_8_Template, 9, 10, "div", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](9, AdminViewComponent_div_3_div_6_section_2_div_9_div_2_p_9_Template, 2, 6, "p", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r164 = ctx.$implicit;
    const ctx_r163 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMapInterpolate1"]("card bg-", ctx_r163.storeInfo().colorStyle.back_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("border-secondary", ctx_r163.storeInfo().colorStyle.text_code == "light");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMapInterpolate1"]("text-center text-", ctx_r163.storeInfo().colorStyle.text_code, " px-2 mx-2 my-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r163.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", item_r164.series[0].name.toUpperCase(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("color", ctx_r163.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r163.formatGraphElement(ctx_r163.totalElement(item_r164.series[0].series), item_r164.series[0].name));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", item_r164.shouldDisplay);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !item_r164.shouldDisplay);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", item_r164.shouldDisplay);
  }
}

function AdminViewComponent_div_3_div_6_section_2_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, AdminViewComponent_div_3_div_6_section_2_div_9_div_2_Template, 10, 18, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r41.charts(true));
  }
}

function AdminViewComponent_div_3_div_6_section_2_div_10_div_2_ngx_charts_area_chart_7_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const model_r187 = ctx.model;
    const ctx_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"](" ", model_r187.series, " \u2022 ", model_r187.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r184.formatGraphElement(model_r187.value, model_r187.series));
  }
}

function AdminViewComponent_div_3_div_6_section_2_div_10_div_2_ngx_charts_area_chart_7_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const model_r188 = ctx.model;
    const ctx_r186 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", model_r188[0].series, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r186.formatGraphElement(model_r188[0].value, model_r188[0].series));
  }
}

function AdminViewComponent_div_3_div_6_section_2_div_10_div_2_ngx_charts_area_chart_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "ngx-charts-area-chart", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " > ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, AdminViewComponent_div_3_div_6_section_2_div_10_div_2_ngx_charts_area_chart_7_ng_template_2_Template, 3, 3, "ng-template", null, 177, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, AdminViewComponent_div_3_div_6_section_2_div_10_div_2_ngx_charts_area_chart_7_ng_template_4_Template, 3, 2, "ng-template", null, 178, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r179 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const ctx_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("fill", ctx_r180.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("results", item_r179.series)("xAxis", true)("yAxis", false)("gradient", true)("customColors", item_r179.customColors)("showXAxisLabel", false)("showYAxisLabel", false)("xAxisLabel", item_r179.xAxisLabel)("xAxisTickFormatting", ctx_r180.formatPercent)("yAxisLabel", item_r179.yAxisLabel);
  }
}

function AdminViewComponent_div_3_div_6_section_2_div_10_div_2_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "h4", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "a", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "Nothing to display here.");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "mat-icon", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, "sentiment_dissatisfied");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r181 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("color", ctx_r181.selectedTheme().color)("font-family", ctx_r181.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("color", ctx_r181.selectedTheme().color);
  }
}

function AdminViewComponent_div_3_div_6_section_2_div_10_div_2_p_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r179 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]().$implicit;
    const ctx_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r182.storeInfo().fontName)("color", ctx_r182.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", item_r179.xAxisLabel.toUpperCase(), " ");
  }
}

function AdminViewComponent_div_3_div_6_section_2_div_10_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "p", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "h2", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](7, AdminViewComponent_div_3_div_6_section_2_div_10_div_2_ngx_charts_area_chart_7_Template, 6, 13, "ngx-charts-area-chart", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, AdminViewComponent_div_3_div_6_section_2_div_10_div_2_div_8_Template, 7, 8, "div", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](9, AdminViewComponent_div_3_div_6_section_2_div_10_div_2_p_9_Template, 2, 6, "p", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const item_r179 = ctx.$implicit;
    const ctx_r178 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMapInterpolate1"]("card bg-", ctx_r178.storeInfo().colorStyle.back_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("border-secondary", ctx_r178.storeInfo().colorStyle.text_code == "light");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMapInterpolate1"]("text-center text-", ctx_r178.storeInfo().colorStyle.text_code, " px-2 mx-2 my-2");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r178.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", item_r179.series[0].name.toUpperCase(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("color", ctx_r178.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r178.formatGraphElement(ctx_r178.totalElement(item_r179.series[0].series), item_r179.series[0].name));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", item_r179.shouldDisplay);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !item_r179.shouldDisplay);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", item_r179.shouldDisplay);
  }
}

function AdminViewComponent_div_3_div_6_section_2_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, AdminViewComponent_div_3_div_6_section_2_div_10_div_2_Template, 10, 18, "div", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r42.charts());
  }
}

function AdminViewComponent_div_3_div_6_section_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "section", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, AdminViewComponent_div_3_div_6_section_2_div_1_Template, 63, 93, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, AdminViewComponent_div_3_div_6_section_2_div_2_Template, 107, 151, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, AdminViewComponent_div_3_div_6_section_2_div_3_Template, 3, 2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, AdminViewComponent_div_3_div_6_section_2_div_4_Template, 3, 2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](5, AdminViewComponent_div_3_div_6_section_2_div_5_Template, 60, 105, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, AdminViewComponent_div_3_div_6_section_2_div_6_Template, 3, 2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](7, AdminViewComponent_div_3_div_6_section_2_div_7_Template, 3, 2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, AdminViewComponent_div_3_div_6_section_2_div_8_Template, 3, 2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](9, AdminViewComponent_div_3_div_6_section_2_div_9_Template, 3, 1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](10, AdminViewComponent_div_3_div_6_section_2_div_10_Template, 3, 1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("background-color", ctx_r23.selectedTheme().bg_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ((tmp_1_0 = ctx_r23.getSelectedPanel()) == null ? null : tmp_1_0.Title) == "PROFILE");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx_r23.getSelectedPanel()) == null ? null : tmp_2_0.Title) == "STORE");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ((tmp_3_0 = ctx_r23.getSelectedPanel()) == null ? null : tmp_3_0.Title) == "PRODUCTS");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ((tmp_4_0 = ctx_r23.getSelectedPanel()) == null ? null : tmp_4_0.Title) == "INVENTORY");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx_r23.getSelectedPanel()) == null ? null : tmp_5_0.Title) == "SECURITY");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ((tmp_6_0 = ctx_r23.getSelectedPanel()) == null ? null : tmp_6_0.Title) == "BILLING");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ((tmp_7_0 = ctx_r23.getSelectedPanel()) == null ? null : tmp_7_0.Title) == "PLAN");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ((tmp_8_0 = ctx_r23.getSelectedPanel()) == null ? null : tmp_8_0.Title) == "PAYMENTS");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ((tmp_9_0 = ctx_r23.getSelectedPanel()) == null ? null : tmp_9_0.Title) == "AFFILIATE");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ((tmp_10_0 = ctx_r23.getSelectedPanel()) == null ? null : tmp_10_0.Title) == "ANALYTICS");
  }
}

function AdminViewComponent_div_3_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, AdminViewComponent_div_3_div_6_header_1_Template, 14, 20, "header", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, AdminViewComponent_div_3_div_6_section_2_Template, 11, 13, "section", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r4.isBrowser());
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r4.isBrowser());
  }
}

function AdminViewComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r192 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "nav", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, AdminViewComponent_div_3_div_3_Template, 6, 7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AdminViewComponent_div_3_Template_a_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r192);
      const ctx_r191 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r191.signOutPressed();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, " LOG OUT ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, AdminViewComponent_div_3_div_6_Template, 3, 2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("background-color", ctx_r2.selectedTheme().bg_color);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("hidden", ctx_r2.storeInfo().username == undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMapInterpolate1"]("bg-", ctx_r2.storeInfo().colorStyle.back_code, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassProp"]("active", ctx_r2.classApplied);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r2.panels);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵstyleProp"]("font-family", ctx_r2.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r2.signedIn);
  }
}

class AdminViewComponent {
  constructor(platformID, cdr, router, titleService, metaService, loadService, rootComponent, fb, modalService, spinner, _router, sanitizer, clipboard, routingService) {
    this.platformID = platformID;
    this.cdr = cdr;
    this.router = router;
    this.titleService = titleService;
    this.metaService = metaService;
    this.loadService = loadService;
    this.rootComponent = rootComponent;
    this.fb = fb;
    this.modalService = modalService;
    this.spinner = spinner;
    this._router = _router;
    this.sanitizer = sanitizer;
    this.clipboard = clipboard;
    this.routingService = routingService; // @ViewChild("chart") chart?: ChartComponent;

    this.activeAffiliates = new Array();
    this.items = [];
    this.miscItems = [];
    this.signedIn = false;
    this.canTrial = true;
    this.invTitle = 'SELL MORE';
    this.state = 'default';
    this.panels = [{
      Category: "DASHBOARD",
      Options: [{
        "Title": "ANALYTICS",
        "Icon": "trending_up",
        "Active": false
      }]
    }, {
      Category: "MANAGE",
      Options: [{
        "Title": "STORE",
        "Icon": "shopping_bag",
        "Active": false
      }, {
        "Title": "PRODUCTS",
        "Icon": "brush",
        "Active": false
      }, {
        "Title": "INVENTORY",
        "Icon": "local_shipping",
        "Active": false
      }, {
        "Title": "PROFILE",
        "Icon": "person_outline",
        "Active": false
      }, {
        "Title": "AFFILIATE",
        "Icon": "local_atm",
        "Active": false
      }]
    }, {
      Category: "SETTINGS",
      Options: [{
        "Title": "BILLING",
        "Icon": "credit_card",
        "Active": false
      }, {
        "Title": "PLAN",
        "Icon": "work",
        "Active": false
      }, {
        "Title": "PAYMENTS",
        "Icon": "monetization_on",
        "Active": false
      }, {
        "Title": "SECURITY",
        "Icon": "admin_panel_settings",
        "Active": false
      }]
    }, {
      Category: "OTHER",
      Options: [{
        "Title": "PRIVACY",
        "Icon": "vpn_lock",
        "Active": false
      }, {
        "Title": "LEGAL",
        "Icon": "sticky_note_2",
        "Active": false
      }, {
        "Title": "QUESTIONS",
        "Icon": "contact_support",
        "Active": false
      }]
    }];
    this.defaultBio = "";
    this.color = "";
    this.bg_color = "";
    this.isSpinning = false;
    this.theme = 'Light';
    this.userForm = this.fb.group({
      username: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
      full_name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
      bio: [null],
      profile_pic: [null],
      custom_url: [null],
      socials: new Array()
    });
    this.storeForm = this.fb.group({
      slogan: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
      loadingIndicator: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
      loadingIndicatorColor: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
      loadingIndicatorBgColor: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
      themeImg: [null],
      homeImg: [null],
      actionImg: [null],
      storeTheme: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
      font: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]
    });
    this.changeEmailForm = this.fb.group({
      newEmail: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
      password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]
    });
    this.changePassForm = this.fb.group({
      password: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
      newPassword: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required],
      confirmNewPassword: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.Validators.required]
    });
    this.show = false;
    this.classApplied = false;
    this.storeProducts = undefined;
    _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.userInfo = undefined;
    _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.selectedCurrency = undefined;
    _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.themes = undefined;
    _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.productsSold = undefined;
    _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.views = undefined;
    _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.dropCarts = undefined;
    _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.billingInfo = undefined; // this.billingInfo().
  }

  socials() {
    return _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.socials;
  }

  toolTip(logo) {
    var _a;

    let same = (_a = this.userForm.controls.socials.value) === null || _a === void 0 ? void 0 : _a.filter(social => {
      return social.name == logo.name;
    });

    if (same && same.length !== 0) {
      return same[0];
    }

    return {
      name: 'No ' + logo.name + ' URL set',
      link: ""
    };
  }

  showSocialModal(logo) {
    var _a;

    const modalRef = this.modalService.open(_social_form_social_form_component__WEBPACK_IMPORTED_MODULE_5__.SocialFormComponent);
    let same = (_a = this.userForm.controls.socials.value) === null || _a === void 0 ? void 0 : _a.filter(social => {
      return social.name == logo.name;
    });
    var prefix = "";

    if (logo.name.toLowerCase() == "tiktok") {
      prefix = "@";
    }

    modalRef.componentInstance.socialForm.controls.link.setValue(logo.name.toLowerCase() + ".com/" + prefix);

    if (same && same.length !== 0) {
      modalRef.componentInstance.socialForm.controls.link.setValue(same[0].link);
    }

    modalRef.componentInstance.linkImg = logo.img;
    modalRef.componentInstance.name = logo.name;
    let sub = modalRef.dismissed.subscribe(url => {
      sub.unsubscribe();
      let array = this.userForm.controls.socials.value;

      if (url != '0' && url != '' && url != 'undefined') {
        let same = array === null || array === void 0 ? void 0 : array.filter(social => {
          return logo.name == social.name;
        });

        if (!same || same.length == 0) {
          if (array != undefined || array != null) {
            array.push({
              name: logo.name,
              link: url
            });
          } else {
            array = [{
              name: logo.name,
              link: url
            }];
          }
        } else {
          array[array.indexOf(same[0])].link = url;
        }
      } else {
        array.forEach((element, index) => {
          if (element.name == logo.name) array.splice(index, 1);
        });
      }

      this.userForm.controls.socials.setValue(array);
    });
  }

  ngOnDestroy() {
    this.loadService.adminComponent = undefined;
  }

  getBillingAddressThird() {
    var _a, _b;

    var address = (_a = this.billingInfo()) === null || _a === void 0 ? void 0 : _a.street;
    var unit = (_b = this.billingInfo()) === null || _b === void 0 ? void 0 : _b.unit;
    if (unit) address += ". " + unit;
    return address;
  }

  getBillingAddressFourth() {
    var _a, _b, _c;

    return ((_a = this.billingInfo()) === null || _a === void 0 ? void 0 : _a.city) + ", " + ((_b = this.billingInfo()) === null || _b === void 0 ? void 0 : _b.admin_area) + ". " + ((_c = this.billingInfo()) === null || _c === void 0 ? void 0 : _c.postal);
  }

  getBillingAddressSecond() {
    var _a, _b;

    var name = (_a = this.billingInfo()) === null || _a === void 0 ? void 0 : _a.name;
    var company = (_b = this.billingInfo()) === null || _b === void 0 ? void 0 : _b.company;
    if (company) name += " - " + company;
    return name;
  }

  organizeByMonth(set, type) {
    var months = new Array(); //SPLIT SALES INTO SEPERATE ARRAYS BY YEAR

    let sets = Array();
    set.forEach(data => {
      let timestamp = data.timestamp;
      let year = timestamp === null || timestamp === void 0 ? void 0 : timestamp.getFullYear();
      var result = sets.find(obj => {
        var years = obj.find(obj2 => {
          var _a;

          return ((_a = obj2.timestamp) === null || _a === void 0 ? void 0 : _a.getFullYear()) == year;
        });
        return years != undefined;
      });

      if (result) {
        sets[sets.indexOf(result)].push(data);
      } else {
        sets.push([data]);
      }
    });
    _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.months.forEach(month => {
      //IF MONTH AND YEAR ARE UNDEFINED FOR A GIVEN INTERVAL, PUT IN AN EMPTY FILLER VALUE OF 0
      sets.forEach(s => {
        var _a;

        var result = s.find(obj => {
          var _a;

          return _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.months[(_a = obj.timestamp) === null || _a === void 0 ? void 0 : _a.getMonth()] == month;
        });

        if (!result) {
          var time = s.find(obj => {
            return obj.timestamp != undefined;
          });
          var d = new Date((_a = time === null || time === void 0 ? void 0 : time.timestamp) === null || _a === void 0 ? void 0 : _a.getFullYear(), _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.months.indexOf(month), 1);

          if (type == "Products Sold") {
            set.push(new _models_product_in_cart_model__WEBPACK_IMPORTED_MODULE_4__.ProductInCart(undefined, undefined, 0, undefined, d, undefined, undefined, 0));
          } else if (type == "Gross Revenue") {
            set.push(new _models_product_in_cart_model__WEBPACK_IMPORTED_MODULE_4__.ProductInCart(undefined, undefined, 0, undefined, d, undefined, undefined, 0));
          } else if (type == "Net Profit") {
            set.push(new _models_product_in_cart_model__WEBPACK_IMPORTED_MODULE_4__.ProductInCart(undefined, undefined, 0, undefined, d, undefined, undefined, 0));
          } else if (type == "Onboarded Users (Affiliate)") {
            set.push({
              affiliate: "",
              timestamp: d
            });
          } else if (type == "Affiliate Revenue") {
            set.push({
              affiliate: "",
              timestamp: d
            });
          } else if (type == "Store Views") {
            set.push({
              views: 0,
              timestamp: d
            });
          } else if (type == "Abandoned Carts") {
            set.push({
              dropCarts: 0,
              timestamp: d
            });
          }
        }
      });
    }); //SORT SALES BY TIMESTAMP

    set.sort(function (a, b) {
      if (a.timestamp < b.timestamp) {
        return -1;
      }

      if (a.timestamp > b.timestamp) {
        return 1;
      }

      return 0;
    }); //REMOVE EMPTY MONTHS THAT ARE IN THE FUTURE

    set = set.filter(obj => {
      return new Date() >= obj.timestamp;
    }); //APPEND TO FINAL SERIES ARRAY

    set.forEach(data => {
      var _a, _b, _c, _d, _e;

      let month = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.months[(_a = data.timestamp) === null || _a === void 0 ? void 0 : _a.getMonth()].substring(0, 3) + " " + data.timestamp.getFullYear();
      var result = months.find(obj => {
        return (obj === null || obj === void 0 ? void 0 : obj.name) === month;
      });
      let value = 0;

      if (type == "Products Sold") {
        value = (_b = data.quantity) !== null && _b !== void 0 ? _b : 0;
      } else if (type == "Gross Revenue") {
        value = (_d = (_c = data.product) === null || _c === void 0 ? void 0 : _c.price) !== null && _d !== void 0 ? _d : 0;
      } else if (type == "Net Profit") {
        value = (_e = data.profit) !== null && _e !== void 0 ? _e : 0;

        if (isNaN(value)) {
          value = 0;
        }
      } else if (type == "Onboarded Users (Affiliate)") {
        if (data.affiliate != "") {
          value = 1;
        }
      } else if (type == "Affiliate Revenue") {
        if (data.affiliate != "") {
          value = 37 / 2;
        }
      } else if (type == "Store Views") {
        value = data.views;
      } else if (type == "Abandoned Carts") {
        value = data.dropCarts;
      }

      if (result) {
        months[months.indexOf(result)].value += value !== null && value !== void 0 ? value : 0;
      } else {
        months.push({
          name: month,
          value: value !== null && value !== void 0 ? value : 0
        });
      }
    });
    return months;
  }

  formatPercent(val) {
    // var t = this as unknown as XAxisTicksComponent
    // let series = t.ticks as Array<string>
    // var result = series.filter(obj => {
    //   return obj === val
    // })[0]
    // if (series.indexOf(result) == 0 || series.indexOf(result) == series.length - 1){
    //   return val
    // }
    return "";
  }

  charts(onlyAffiliates = false) {
    if (onlyAffiliates) {
      return this.items.filter(item => {
        return item.name == "Onboarded Users (Affiliate)" || item.name == "Affiliate Revenue";
      }).sort(function (a, b) {
        if (a.index < b.index) {
          return -1;
        }

        if (a.index > b.index) {
          return 1;
        }

        return 0;
      });
    }

    if (_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.productsSold == undefined || _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.newCustomers == undefined || _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.dropCarts == undefined) {
      return [];
    }

    let newItems = this.items.concat(this.miscItems);
    return newItems.filter(item => {
      return !((item.name == "Onboarded Users (Affiliate)" || item.name == "Affiliate Revenue") && this.activeAffiliates.length == 0);
    }).sort(function (a, b) {
      if (a.index < b.index) {
        return -1;
      }

      if (a.index > b.index) {
        return 1;
      }

      return 0;
    });
  }

  addMiscCharts(name, data_set) {
    var _a;

    if (!this.miscItems.some(e => (e === null || e === void 0 ? void 0 : e.name) === name)) {
      let set = this.organizeByMonth(data_set, name);
      var index = 0;

      if (name == "Store Views") {
        index = 0;
      } else if (name == "Abandoned Carts") {
        index = 4;
      }

      let item = {
        name: name,
        legend: true,
        showLabels: true,
        animations: true,
        xAxis: true,
        yAxis: true,
        index: index,
        showYAxisLabel: true,
        showXAxisLabel: true,
        xAxisLabel: ((_a = set[0]) === null || _a === void 0 ? void 0 : _a.name) + '  ➜  ' + "TODAY",
        yAxisLabel: 'Population',
        timeline: true,
        shouldDisplay: set.length != 0,
        customColors: [{
          name: name,
          value: '#1ac6ff'
        }],
        series: [{
          "name": name,
          "series": set
        }]
      };
      this.miscItems.push(item);
    }
  }

  addChart(name, data_set) {
    var _a;

    if (!this.items.some(e => (e === null || e === void 0 ? void 0 : e.name) === name)) {
      let set = this.organizeByMonth(data_set, name);
      var index = 0;

      if (name == "Products Sold") {
        index = 2;
      } else if (name == "Gross Revenue") {
        index = 1;
      } else if (name == "Net Profit") {
        index = 3;
      } else if (name == "Onboarded Users (Affiliate)" || name == "Affiliate Revenue") {
        index = 4;
      } else {
        index = 5;
      }

      let item = {
        name: name,
        legend: true,
        showLabels: true,
        animations: true,
        xAxis: true,
        yAxis: true,
        index: index,
        showYAxisLabel: true,
        showXAxisLabel: true,
        xAxisLabel: ((_a = set[0]) === null || _a === void 0 ? void 0 : _a.name) + '  ➜  ' + "TODAY",
        yAxisLabel: 'Population',
        timeline: true,
        shouldDisplay: set.length != 0,
        customColors: [{
          name: name,
          value: '#1ac6ff'
        }],
        series: [{
          "name": name,
          "series": set
        }]
      };
      this.items.push(item);
    }
  }

  loaders() {
    return _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.loaders;
  }

  storeInfo() {
    return _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo;
  }

  userInfo() {
    return _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.userInfo;
  }

  availableCurrencies() {
    return _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.availableCurrencies;
  }

  selectedCurrency() {
    return _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.selectedCurrency;
  }

  templates() {
    return _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.templates;
  }

  availableTemplates() {
    return _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.availableTemplates;
  }

  themes() {
    return _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.themes;
  }

  fonts() {
    return _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.fonts;
  }

  shouldRed(panel) {
    var _a, _b;

    if (panel.Title == "BILLING") {
      if (((_a = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.billingInfo) === null || _a === void 0 ? void 0 : _a.number) == "") {
        return true;
      }
    } else if (panel.Title == "PAYMENTS") {
      if (this.bankInfo == undefined) {
        return true;
      }
    } else if (panel.Title == "PLAN") {
      if (this.subInfo == undefined) {
        return true;
      }
    } else if (panel.Title == "PRODUCTS") {
      if (((_b = this.storeProducts) === null || _b === void 0 ? void 0 : _b.length) == 0) {
        return true;
      }
    }

    return false;
  }

  getBillingAddressFirst() {
    var _a, _b;

    var name = ((_a = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.billingInfo) === null || _a === void 0 ? void 0 : _a.brand) + " ending in " + ((_b = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.billingInfo) === null || _b === void 0 ? void 0 : _b.number);
    return name;
  }

  selectedIndicator() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;

    let co = (_b = (_a = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo) === null || _a === void 0 ? void 0 : _a.loading) === null || _b === void 0 ? void 0 : _b.color;
    let bco = (_d = (_c = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo) === null || _c === void 0 ? void 0 : _c.loading) === null || _d === void 0 ? void 0 : _d.bg_color;
    let name = (_f = (_e = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo) === null || _e === void 0 ? void 0 : _e.loading) === null || _f === void 0 ? void 0 : _f.name;
    let color = (_g = this.storeForm.controls.loadingIndicatorColor.value) !== null && _g !== void 0 ? _g : "rgba(" + co[0] + "," + co[1] + "," + co[2] + "," + co[3] + ")";
    let bg_color = (_h = this.storeForm.controls.loadingIndicatorBgColor.value) !== null && _h !== void 0 ? _h : "rgba(" + bco[0] + "," + bco[1] + "," + bco[2] + "," + bco[3] + ")";
    let indicator = {
      "name": (_j = this.storeForm.controls.loadingIndicator.value) !== null && _j !== void 0 ? _j : name,
      "color": color,
      "bg_color": bg_color
    };
    return indicator;
  }

  getTypeImages(templateName) {
    let template = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.templates.filter(obj => {
      return obj.templateDisplayName == templateName;
    })[0];
    var len = template.colors.filter(obj => {
      return obj.code == "black";
    });
    var img;

    if (len.length == 0) {
      img = template.colors.filter(obj => {
        return obj.code == "white";
      })[0].img;
    } else {
      img = len[0].img;
    }

    return this.sanitizer.bypassSecurityTrustResourceUrl("data:image/jpeg;base64," + img);
  }

  buyMore(inventory) {
    const modalRef = this.modalService.open(_inventory_buy_inventory_buy_component__WEBPACK_IMPORTED_MODULE_6__.InventoryBuyComponent, {
      size: "lg"
    });
    modalRef.componentInstance.inventory = inventory;
    let sub = modalRef.dismissed.subscribe(inv => {
      var _a;

      sub.unsubscribe();

      if (inv) {
        let same = (_a = this.inventory) === null || _a === void 0 ? void 0 : _a.filter(i => {
          i.id == inv.id;
        })[0];

        if (same) {
          same.amount = inv.amount;
        }
      }
    });
  }

  checkBilling() {
    var _a, _b;

    if (((_a = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.billingInfo) === null || _a === void 0 ? void 0 : _a.number) && ((_b = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.billingInfo) === null || _b === void 0 ? void 0 : _b.number) != "") {
      return true;
    } else {
      var sec = 0;
      var ind = 0;
      this.panels.forEach((panel, section) => {
        panel.Options.forEach((option, index) => {
          if (option.Title == 'BILLING') {
            sec = section;
            ind = index;
            return;
          }
        });
      });
      this.selectSetting(ind, sec);
      return false;
    }
  }

  storeLive() {
    var _a, _b, _c;

    return ((_b = (_a = this.storeProducts) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0) != 0 && ((_c = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.billingInfo) === null || _c === void 0 ? void 0 : _c.number) && this.bankInfo && this.subInfo;
  }

  buyNewInventory(template) {
    if (this.checkBilling()) {
      const modalRef = this.modalService.open(_inventory_buy_inventory_buy_component__WEBPACK_IMPORTED_MODULE_6__.InventoryBuyComponent, {
        size: "lg"
      });
      modalRef.componentInstance.template = template;
      let sub = modalRef.dismissed.subscribe(inv => {
        var _a;

        sub.unsubscribe();

        if (inv) {
          (_a = this.inventory) === null || _a === void 0 ? void 0 : _a.unshift(inv);
        }
      });
    }
  }

  missingInfo() {
    var _a, _b, _c;

    var array = Array();

    if (((_a = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.billingInfo) === null || _a === void 0 ? void 0 : _a.number) == "") {
      array.push("Add your billing method");
    }

    if (this.subInfo == undefined) {
      array.push("Start your Thred Merchant plan");
    }

    if (this.bankInfo == undefined) {
      array.push("Set up your merchant payments account");
    }

    if (((_c = (_b = this.storeProducts) === null || _b === void 0 ? void 0 : _b.length) !== null && _c !== void 0 ? _c : 0) == 0) {
      array.push("Create your first product");
    }

    return array;
  }

  removeAutoReload(inventory) {
    this.loadService.removeAutoReload(inventory, success => {
      if (success) {
        inventory.autoReload = false;
        this.toast("Auto-Reload for " + inventory.name.toLowerCase() + " removed");
      }
    });
  }

  setUpAutoReload(inventory) {
    if (this.checkBilling()) {
      this.loadService.setAutoReload(inventory, success => {
        if (success) {
          inventory.autoReload = true;
          this.toast("Auto-Reload for " + inventory.name.toLowerCase() + " set");
        }
      });
    }
  }

  getInventory() {
    if (this.inventory != undefined) return;
    this.inventory = [];
    this.loadService.getInventory(inventory => {
      this.inventory = inventory;

      if (inventory.length == 0) {
        this.invTitle = 'INCREASE PROFIT';
      }

      this.cdr.detectChanges();
    });
  }

  hasInventory(template) {
    var _a, _b, _c;

    return ((_c = (_b = (_a = this.inventory) === null || _a === void 0 ? void 0 : _a.filter(obj => {
      return template.productCode == obj.code;
    })) === null || _b === void 0 ? void 0 : _b.length) !== null && _c !== void 0 ? _c : 0) > 0;
  }

  availableToBuyTemplates() {
    var _a;

    return (_a = this.templates()) === null || _a === void 0 ? void 0 : _a.filter(template => {
      return !this.hasInventory(template);
    });
  }

  matchInventory(template) {
    var _a;

    return ((_a = this.inventory) === null || _a === void 0 ? void 0 : _a.filter(obj => {
      return template.productCode == obj.code;
    }))[0];
  }

  totalElement(series) {
    var total = 0;
    series.forEach(item => {
      total += item.value;
    });
    return total;
  }

  formatGraphElement(element, name) {
    if (name == "Gross Revenue" || name == "Net Profit" || name == "Affiliate Revenue") {
      return this.formatPrice(element);
    }

    return element;
  }

  formatPrice(price, short = false) {
    var _a, _b, _c, _d, _e;

    var priceAsString = new String(Number((price * ((_b = (_a = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.selectedCurrency) === null || _a === void 0 ? void 0 : _a.rate) !== null && _b !== void 0 ? _b : 1)).toFixed(2)).toLocaleString('en'));

    if (!short) {
      priceAsString = new String(Number((price * ((_d = (_c = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.selectedCurrency) === null || _c === void 0 ? void 0 : _c.rate) !== null && _d !== void 0 ? _d : 1)).toFixed(2)));
    }

    let index = priceAsString.indexOf(".");

    switch (index) {
      case priceAsString.length - 1:
        priceAsString += "00";
        break;

      case -1:
        priceAsString += ".00";
        break;

      case priceAsString.length - 2:
        priceAsString += "0";
        break;

      default:
        break;
    }

    return this.getCurrencyForCountry(((_e = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.selectedCurrency) === null || _e === void 0 ? void 0 : _e.name) != "US", _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.selectedCurrency) + priceAsString;
  }

  getCurrencyForCountry(shouldShowName, country) {
    var _a;

    var returnItem = (_a = country === null || country === void 0 ? void 0 : country.currency_symbol) !== null && _a !== void 0 ? _a : "$";
    if (shouldShowName) returnItem = (country === null || country === void 0 ? void 0 : country.name) + " " + returnItem;
    return returnItem;
  }

  showSpinner(duration = 2000) {
    if (!this.isSpinning) {
      this.isSpinning = true;

      if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_14__.isPlatformBrowser)(this.platformID)) {
        this.spinner.show("adminSpinner");
      }

      ;
      setTimeout(() => {
        this.spinner.hide("adminSpinner");
      }, duration);
    }
  }

  showSampleSpinner(duration = 1500) {
    this.isSpinning = true;

    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_14__.isPlatformBrowser)(this.platformID)) {
      this.spinner.show("sampleSpinner");
    }

    ;
    setTimeout(() => {
      this.spinner.hide("sampleSpinner");
    }, duration);
  }

  hideSpinner() {
    if (this.isSpinning) {
      this.isSpinning = false; // this.spinner.hide()
    }
  }

  getSelectedPanel() {
    var _a;

    let selected = (_a = this.panels.filter(panel => {
      var _a;

      return ((_a = panel.Options) === null || _a === void 0 ? void 0 : _a.filter(option => option.Active).length) != 0;
    })[0]) === null || _a === void 0 ? void 0 : _a.Options.filter(option => option === null || option === void 0 ? void 0 : option.Active)[0];
    return selected;
  }

  setForm() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5;

    this.userForm.controls.username.setValue((_b = (_a = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.userInfo) === null || _a === void 0 ? void 0 : _a.username) !== null && _b !== void 0 ? _b : "");
    this.userForm.controls.full_name.setValue((_d = (_c = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.userInfo) === null || _c === void 0 ? void 0 : _c.fullName) !== null && _d !== void 0 ? _d : "");
    this.userForm.controls.bio.setValue((_f = (_e = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.userInfo) === null || _e === void 0 ? void 0 : _e.bio) !== null && _f !== void 0 ? _f : "");
    this.storeForm.controls.slogan.setValue((_h = (_g = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.userInfo) === null || _g === void 0 ? void 0 : _g.slogan) !== null && _h !== void 0 ? _h : "");
    this.storeForm.controls.loadingIndicator.setValue((_l = (_k = (_j = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.userInfo) === null || _j === void 0 ? void 0 : _j.loading) === null || _k === void 0 ? void 0 : _k.name) !== null && _l !== void 0 ? _l : "");
    this.storeForm.controls.themeImg.setValue((_o = (_m = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.userInfo) === null || _m === void 0 ? void 0 : _m.themeLink) === null || _o === void 0 ? void 0 : _o.toString());
    this.storeForm.controls.homeImg.setValue((_q = (_p = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.userInfo) === null || _p === void 0 ? void 0 : _p.homeLink) === null || _q === void 0 ? void 0 : _q.toString());
    this.storeForm.controls.actionImg.setValue((_s = (_r = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.userInfo) === null || _r === void 0 ? void 0 : _r.actionLink) === null || _s === void 0 ? void 0 : _s.toString());
    this.storeForm.controls.font.setValue((_t = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.userInfo) === null || _t === void 0 ? void 0 : _t.fontName);
    this.userForm.controls.socials.setValue((_u = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.userInfo) === null || _u === void 0 ? void 0 : _u.socials);
    this.userForm.controls.custom_url.setValue((_w = (_v = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.userInfo) === null || _v === void 0 ? void 0 : _v.customURL) === null || _w === void 0 ? void 0 : _w.fullURL());
    this.storeForm.controls.storeTheme.setValue((_y = (_x = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.userInfo) === null || _x === void 0 ? void 0 : _x.colorStyle) === null || _y === void 0 ? void 0 : _y.name.toString());
    this.theme = (_1 = (_0 = (_z = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.userInfo) === null || _z === void 0 ? void 0 : _z.colorStyle) === null || _0 === void 0 ? void 0 : _0.name.toString()) !== null && _1 !== void 0 ? _1 : 'Light';
    let co = (_3 = (_2 = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.userInfo) === null || _2 === void 0 ? void 0 : _2.loading) === null || _3 === void 0 ? void 0 : _3.color;
    let bco = (_5 = (_4 = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.userInfo) === null || _4 === void 0 ? void 0 : _4.loading) === null || _5 === void 0 ? void 0 : _5.bg_color;
    let color = "rgba(" + co[0] + "," + co[1] + "," + co[2] + "," + co[3] + ")";
    let bg_color = "rgba(" + bco[0] + "," + bco[1] + "," + bco[2] + "," + bco[3] + ")";
    this.storeForm.controls.loadingIndicatorColor.setValue(color !== null && color !== void 0 ? color : []);
    this.storeForm.controls.loadingIndicatorBgColor.setValue(bg_color !== null && bg_color !== void 0 ? bg_color : []);
  }

  isBase64(str) {
    try {
      return btoa(atob(str)) == str;
    } catch (err) {
      return false;
    }
  }

  selectColor(value, isPrimary) {
    if (isPrimary) {
      this.storeForm.controls.loadingIndicatorColor.setValue(value !== null && value !== void 0 ? value : []);
    } else {
      this.storeForm.controls.loadingIndicatorBgColor.setValue(value !== null && value !== void 0 ? value : []);
    }

    this.showSampleSpinner(2000);
  }

  fileChangeEvent(event, type = "Profile") {
    const modalRef = this.modalService.open(_cropper_cropper_component__WEBPACK_IMPORTED_MODULE_2__.CropperComponent, {
      size: "lg"
    });
    modalRef.componentInstance.imageChangedEvent = event;

    if (type == "Profile") {
      modalRef.componentInstance.ratio = 1;
      modalRef.componentInstance.width = 200;
      modalRef.componentInstance.height = 200;
      let sub = modalRef.dismissed.subscribe(img => {
        sub.unsubscribe();

        if (img != '0') {
          this.userForm.controls.profile_pic.setValue(img);
        }
      });
    } else if (type == "Background") {
      modalRef.componentInstance.ratio = 1.78;
      modalRef.componentInstance.width = 2560;
      modalRef.componentInstance.height = 1440;
      let sub = modalRef.dismissed.subscribe(img => {
        sub.unsubscribe();

        if (img != '0') {
          this.storeForm.controls.themeImg.setValue(img);
        }
      });
    } else if (type == "Promotion") {
      modalRef.componentInstance.ratio = 1.78;
      modalRef.componentInstance.width = 2560;
      modalRef.componentInstance.height = 1440;
      let sub = modalRef.dismissed.subscribe(img => {
        sub.unsubscribe();

        if (img != '0') {
          this.storeForm.controls.homeImg.setValue(img);
        }
      });
    } else if (type == "Action") {
      modalRef.componentInstance.ratio = 1.78;
      modalRef.componentInstance.width = 2560;
      modalRef.componentInstance.height = 1440;
      let sub = modalRef.dismissed.subscribe(img => {
        sub.unsubscribe();

        if (img != '0') {
          this.storeForm.controls.actionImg.setValue(img);
        }
      });
    }
  }

  getImgSrc() {
    var _a;

    if (this.userForm.controls.profile_pic.value) {
      return this.userForm.controls.profile_pic.value;
    }

    return (_a = this.userInfo()) === null || _a === void 0 ? void 0 : _a.profileLink;
  }

  getUsername() {
    var _a, _b;

    if (this.userForm.controls.full_name.value) {
      return this.userForm.controls.full_name.value;
    }

    return (_b = (_a = this.userInfo()) === null || _a === void 0 ? void 0 : _a.fullName) !== null && _b !== void 0 ? _b : "Brian's Tees";
  }

  saveProfile() {
    var _a;

    if (this.userForm.valid) {
      var data = {
        username: this.userForm.controls.username.value,
        full_name: this.userForm.controls.full_name.value,
        bio: this.userForm.controls.bio.value,
        socials: this.userForm.controls.socials.value,
        custom_url: this.userForm.controls.custom_url.value.trim(),
        profile_pic: this.userForm.controls.profile_pic.value
      };
      this.loadService.checkUsername(data.username, err => {
        if (err) {
          this.toast("A store with this name already exists!");
        } else {
          this.loadService.checkURL(data.custom_url, error => {
            if (error) {
              this.toast(error);
            } else {
              this.loadService.myCallback = () => this.toast("Profile Information Updated!");

              this.loadService.saveUser(data);
            }
          });
        }
      }, (_a = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.userInfo) === null || _a === void 0 ? void 0 : _a.uid);
    } else {
      this.toast("One or more fields are invalid!");
    }
  }

  savePassword() {
    if (this.changePassForm.valid) {
      if (this.changePassForm.controls.password.value != this.changePassForm.controls.confirmNewPassword.value) {
        return;
      }

      let data = {
        password: this.changePassForm.controls.password.value,
        newPassword: this.changePassForm.controls.newPassword.value
      };
      this.loadService.savePassword(data, success => {
        this.changePassForm.controls.password.setValue(undefined);
        this.changePassForm.controls.newPassword.setValue(undefined);

        if (success) {
          this.toast("Password Updated!");
        } else {
          this.toast("Error! Something went wrong.");
        }
      });
    } else {}
  }

  password() {
    this.show = !this.show;
  }

  saveEmail() {
    if (this.changeEmailForm.valid) {
      let data = {
        password: this.changeEmailForm.controls.password.value,
        newEmail: this.changeEmailForm.controls.newEmail.value
      };
      this.loadService.saveEmail(data, success => {
        this.changeEmailForm.controls.password.setValue(undefined);
        this.changeEmailForm.controls.newEmail.setValue(undefined);

        if (success) {
          this.toast("Email Updated!");
        } else {
          this.toast("Error! Something went wrong.");
        }
      });
    } else {}
  }

  joinColor(color) {
    let c = color.replace("rgb", "").replace("a", "").replace("(", "").replace(")", "").split(",");
    var returnArr = new Array();
    c.forEach(element => {
      returnArr.push(element.trim());
    });

    if (returnArr.length < 4) {
      for (let i = 0; i < 4 - returnArr.length; i++) {
        returnArr.push("1");
      }
    }

    return returnArr.join(",");
  }

  numToColor(color) {
    var returnArr = new Array();
    color.forEach(color => {
      returnArr.push(color.toString());
    });
    return returnArr.join(",");
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

  selectTheme() {
    this.theme = this.storeForm.controls.storeTheme.value;
  }

  saveStore() {
    var _this = this;

    return (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var _a;

      if (_this.storeForm.valid) {
        var color = _this.joinColor(_this.storeForm.controls.loadingIndicatorColor.value);

        var bg_color = _this.joinColor(_this.storeForm.controls.loadingIndicatorBgColor.value);

        var data = {
          slogan: _this.storeForm.controls.slogan.value,
          indicator: {
            name: _this.storeForm.controls.loadingIndicator.value,
            color: color,
            bg_color: bg_color
          },
          loadingIndicatorColor: color,
          loadingIndicatorBgColor: bg_color,
          font: _this.storeForm.controls.font.value
        };
        var selectedTheme = _this.storeForm.controls.storeTheme.value;
        let matchingTheme = (_a = _this.themes()) === null || _a === void 0 ? void 0 : _a.filter(theme => (theme === null || theme === void 0 ? void 0 : theme.name) == selectedTheme)[0];

        if (matchingTheme) {
          var color = _this.numToColor(matchingTheme.btn_color);

          var bg_color = _this.numToColor(matchingTheme.bg_color);

          data.theme = {
            back_code: matchingTheme.back_code,
            text_code: matchingTheme.text_code,
            bg_color: bg_color,
            btn_color: color,
            name: matchingTheme === null || matchingTheme === void 0 ? void 0 : matchingTheme.name
          };
        }

        var images = new Array();

        if (_this.storeForm.controls.themeImg.value && _this.isBase64(_this.storeForm.controls.themeImg.value.replace(/^[\w\d;:\/]+base64\,/g, ''))) {
          images.push({
            "type": "theme",
            "img": _this.storeForm.controls.themeImg.value
          });
        }

        if (_this.storeForm.controls.homeImg.value && _this.isBase64(_this.storeForm.controls.homeImg.value.replace(/^[\w\d;:\/]+base64\,/g, ''))) {
          images.push({
            "type": "home",
            "img": _this.storeForm.controls.homeImg.value
          });
        }

        if (_this.storeForm.controls.actionImg.value && _this.isBase64(_this.storeForm.controls.actionImg.value.replace(/^[\w\d;:\/]+base64\,/g, ''))) {
          images.push({
            "type": "action",
            "img": _this.storeForm.controls.actionImg.value
          });
        }

        data.images = images;

        _this.loadService.myCallback = () => _this.toast("Store Settings Updated!");

        yield _this.loadService.saveStore(data);
      } else {}
    })();
  }

  toast(message) {
    this.loadService.openSnackBar(message);
  }

  isMobile() {
    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_14__.isPlatformBrowser)(this.platformID)) {
      let height = window.innerHeight;
      let width = window.innerWidth;
      return width < height;
    }

    return false;
  }

  selectSetting(index, section) {
    var _this2 = this;

    return (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (section == 3) {
        var urlLink = "";

        if (index == 0 || index == 1) {
          urlLink = "https://thredapps.com/privacy-policy";
        } else if (index == 2) {
          urlLink = "https://thredapps.com/customer-support";
        }

        const link = document.createElement('a');
        link.target = '_blank';
        let url = '';

        if (!/^http[s]?:\/\//.test(urlLink)) {
          url += 'http://';
        }

        url += urlLink;
        link.href = url;

        _this2.spinner.hide("adminSpinner");

        link.setAttribute('visibility', 'hidden');
        link.click();
        link.remove();
        return;
      }

      if (_this2.isMobile()) {
        _this2.classApplied = false;
      }

      _this2.panels.forEach(panel => {
        panel.Options.forEach(option => {
          option.Active = false;
        });
      });

      let user = yield _this2.loadService.isLoggedIn();

      if (_this2.panels[section].Options[index].Title == "ANALYTICS" && (user === null || user === void 0 ? void 0 : user.uid) && !(user === null || user === void 0 ? void 0 : user.isAnonymous)) {
        _this2.getMiscStats();
      } else if (_this2.panels[section].Options[index].Title == "AFFILIATE" && (user === null || user === void 0 ? void 0 : user.uid) && !(user === null || user === void 0 ? void 0 : user.isAnonymous)) {
        _this2.getAffiliateStats(true);
      }

      _this2.panels[section].Options[index].Active = true;

      _this2.cdr.detectChanges();
    })();
  }

  copyAffiliateURL() {
    this.toast("Affiliate link copied to clipboard!");
    var host = 'shopmythred.com';
    this.clipboard.copy(host + "/?affiliate=" + this.storeInfo().uid);
  }

  getSoldProducts() {
    var _a;

    if (_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.productsSold == undefined) {
      this.loadService.saleCallback = () => this.getSoldProducts();

      this.loadService.getSoldProducts((_a = this.storeInfo()) === null || _a === void 0 ? void 0 : _a.uid);
    } else {
      let data = ["Products Sold", "Gross Revenue", "Net Profit"];
      data.forEach(d => {
        this.addChart(d, _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.productsSold);
      });
      this.getAffiliateStats();
    }
  }

  getAffiliateStats(showEmpty = false) {
    var _this3 = this;

    return (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (_this3.activeAffiliates.length == 0) {
        _this3.loadService.miscCallback = () => _this3.getMiscStats();

        let user = yield _this3.loadService.isLoggedIn();

        _this3.loadService.getAffiliateStats(user === null || user === void 0 ? void 0 : user.uid, affiliates => {
          _this3.activeAffiliates = affiliates;

          if (affiliates.length != 0 || showEmpty) {
            let data = ["Onboarded Users (Affiliate)", "Affiliate Revenue"];
            data.forEach(d => {
              _this3.addChart(d, _this3.activeAffiliates);
            });
          }
        });
      }
    })();
  }

  getMiscStats() {
    var _this4 = this;

    return (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.views == undefined && _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.dropCarts == undefined) {
        _this4.loadService.miscCallback = () => _this4.getMiscStats();

        let user = yield _this4.loadService.isLoggedIn();

        _this4.loadService.getMiscStats(user === null || user === void 0 ? void 0 : user.uid);
      } else {
        let data = [{
          name: "Store Views",
          series: _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.views
        }, {
          name: "Abandoned Carts",
          series: _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.dropCarts
        }];
        data.forEach(d => {
          var _a;

          _this4.addMiscCharts(d === null || d === void 0 ? void 0 : d.name, (_a = d === null || d === void 0 ? void 0 : d.series) !== null && _a !== void 0 ? _a : []);
        });

        _this4.getSoldProducts();
      }
    })();
  }

  isBrowser() {
    return (0,_angular_common__WEBPACK_IMPORTED_MODULE_14__.isPlatformBrowser)(this.platformID);
  }

  toggleSidebar() {
    this.classApplied = !this.classApplied;

    if (this.classApplied) {
      this.state = 'rotated';
    } else {
      this.state = 'default';
    }
  }

  storeBio() {
    var _a, _b, _c;

    let bio = this.storeInfo().bio;

    if (bio == "" || bio == undefined) {
      return this.defaultBio.replace(/FULL9NAME/g, (_b = (_a = this.storeInfo().fullName) === null || _a === void 0 ? void 0 : _a.trim()) !== null && _b !== void 0 ? _b : "This brand");
    }

    return (_c = bio.replace(/\n/g, "<br>")) !== null && _c !== void 0 ? _c : "";
  }

  planEndDate() {
    return new Date(this.subInfo.cancel_at * 1000).toDateString();
  }

  ngOnInit() {
    this.loadService.adminComponent = this;
    this.init();
  }

  showWelcomeModal() {
    if (_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.isNewUser) {
      const modalRef = this.modalService.open(_store_setup_store_setup_component__WEBPACK_IMPORTED_MODULE_8__.StoreSetupComponent, {
        size: "lg"
      }); // modalRef.componentInstance.canTrial = this.canTrial

      let sub = modalRef.dismissed.subscribe(subInfo => {
        sub.unsubscribe(); // if (subInfo){
        //   this.subInfo = subInfo
        // }

        if (this.checkBilling()) {}
      });
    }
  }

  routeToProduct(productID) {
    this.rootComponent.routeToProduct(productID);
  }

  startSubscription() {
    var _a, _b;

    if (((_a = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.billingInfo) === null || _a === void 0 ? void 0 : _a.number) && ((_b = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.billingInfo) === null || _b === void 0 ? void 0 : _b.number) != "") {
      var sec = 0;
      var ind = 0;

      if (this.getSelectedPanel().Title != "PLAN") {
        this.panels.forEach((panel, section) => {
          panel.Options.forEach((option, index) => {
            if (option.Title == 'PLAN') {
              sec = section;
              ind = index;
            }
          });
        });
        this.selectSetting(ind, sec);
      }

      const modalRef = this.modalService.open(_edit_plan_edit_plan_component__WEBPACK_IMPORTED_MODULE_7__.EditPlanComponent, {
        size: "lg"
      });
      modalRef.componentInstance.canTrial = this.canTrial;
      let sub = modalRef.dismissed.subscribe(subInfo => {
        sub.unsubscribe();

        if (subInfo) {
          this.subInfo = subInfo;
        }
      });
    } else {
      var sec = 0;
      var ind = 0;
      this.panels.forEach((panel, section) => {
        panel.Options.forEach((option, index) => {
          if (option.Title == 'BILLING') {
            sec = section;
            ind = index;
            return;
          }
        });
      });
      this.selectSetting(ind, sec);
    }
  }

  editSubscription(subInfo) {
    const modalRef = this.modalService.open(_edit_plan_edit_plan_component__WEBPACK_IMPORTED_MODULE_7__.EditPlanComponent, {
      size: "lg"
    });
    modalRef.componentInstance.subInfo = subInfo;
    let sub = modalRef.dismissed.subscribe(subInfo => {
      sub.unsubscribe();

      if (subInfo) {
        this.subInfo = subInfo;
      }
    });
  }

  callback() {
    var _this5 = this;

    return (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var _a, _b, _c;

      if (_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo.username) {
        _this5.showSpinner();

        _this5.rootComponent.setOptions();

        _this5.rootComponent.setFavIcon(_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo.profileLink.toString());

        _this5.addTags((_a = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo.fullName) !== null && _a !== void 0 ? _a : "Thred", ((_b = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo.profileLink) !== null && _b !== void 0 ? _b : new URL("https://shopmythred.com")).toString(), (_c = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo.bio) !== null && _c !== void 0 ? _c : "Check out my Thred Store!", "shopmythred.com/" + _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo.username);

        if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_14__.isPlatformBrowser)(_this5.platformID)) {
          if (_this5.signedIn) {
            if (_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.userInfo == undefined && (0,_angular_common__WEBPACK_IMPORTED_MODULE_14__.isPlatformBrowser)(_this5.platformID)) {
              _this5.loadService.getCustomer();
            } else if (_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.selectedCurrency == undefined) {
              _this5.loadService.getCountries();
            } else if (_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.themes == undefined) {
              _this5.loadService.getThemes();
            } else if (_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.templates.length == 0 && (0,_angular_common__WEBPACK_IMPORTED_MODULE_14__.isPlatformBrowser)(_this5.platformID)) {
              _this5.loadService.getTemplates();
            } else if (_this5.storeProducts == undefined) {
              _this5.loadService.getPosts(products => {
                _this5.storeProducts = products;
              });
            }

            if (_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.billingInfo == undefined) {
              _this5.loadService.getAllBillingInfo();
            } else {
              _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.storeInfo = JSON.parse(JSON.stringify(_globals__WEBPACK_IMPORTED_MODULE_1__.Globals.userInfo));

              _this5.routingService.routeToProfile(_this5.getStoreName().link, _this5.getStoreName().isCustom);

              _this5.getInventory();

              _this5.hideSpinner();

              _this5.setForm();

              _this5.showWelcomeModal();

              _this5.cdr.detectChanges();
            }
          } else {
            _this5.spinner.hide("adminSpinner");

            _this5.rootComponent.accountPressed();
          }
        }
      } else {
        _this5.routingService.routeTo404(_this5.getStoreName().isCustom);
      }
    })();
  }

  planStatus() {
    var _a;

    if (((_a = this.subInfo) === null || _a === void 0 ? void 0 : _a.plan.id) == "price_1JmgQyIdY1nzc70NXgzC1vCN") {
      return "Thred Core Plan";
    }

    return "";
  }

  planRenewalDate() {
    return new Date(this.subInfo.current_period_end * 1000).toDateString();
  }

  billingInfo() {
    return _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.billingInfo;
  }

  beginBankAdd() {
    this.spinner.show("adminSpinner");
    this.loadService.beginBankAdd(urlLink => {
      const link = document.createElement('a');
      link.target = '_blank';
      let url = '';

      if (!/^http[s]?:\/\//.test(urlLink)) {
        url += 'http://';
      }

      url += urlLink;
      link.href = url;
      this.spinner.hide("adminSpinner");
      link.setAttribute('visibility', 'hidden');
      link.click();
      link.remove();
    });
  }

  routeToBillingAdmin() {
    this.rootComponent.routeToBillingAdmin();
  }

  init() {
    var _this6 = this;

    return (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var _a;

      let user = yield _this6.loadService.isLoggedIn();
      let uid = user === null || user === void 0 ? void 0 : user.uid;
      let isAnon = (_a = user === null || user === void 0 ? void 0 : user.isAnonymous) !== null && _a !== void 0 ? _a : false;
      _this6.signedIn = uid != undefined && !isAnon;

      if (!_this6.bankInfo) {
        _this6.loadService.getBankInfo( /*#__PURE__*/function () {
          var _ref = (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (bankInfo) {
            _this6.bankInfo = bankInfo;

            _this6.cdr.detectChanges();
          });

          return function (_x2) {
            return _ref.apply(this, arguments);
          };
        }());
      }

      if (!_this6.subInfo) {
        _this6.loadService.getSubInfo( /*#__PURE__*/function () {
          var _ref2 = (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (subInfo, canTrial) {
            _this6.subInfo = subInfo;
            _this6.canTrial = canTrial;

            _this6.cdr.detectChanges();
          });

          return function (_x3, _x4) {
            return _ref2.apply(this, arguments);
          };
        }());
      }

      _this6.router.queryParams.subscribe(params => {
        let selected = params.selected;
        let s = selected === null || selected === void 0 ? void 0 : selected.toUpperCase();
        var sec = 0;
        var ind = 0;

        if (selected == undefined) {
          if (_this6.panels.filter(panel => {
            return panel.Options.filter(option => {
              return option.Active;
            }).length > 0;
          }).length == 0) {
            _this6.selectSetting(ind, sec);
          }
        }

        _this6.panels.forEach((panel, section) => {
          panel.Options.forEach((option, index) => {
            if (option.Title == s) {
              sec = section;
              ind = index;
              return;
            }
          });
        });

        if (selected != undefined) {
          _this6.selectSetting(ind, sec);
        }
      });

      const storeInfo = _this6.getStoreName();

      _this6.downloadAllStoreInfo(storeInfo.link, storeInfo.isCustom);

      if (_this6.classApplied) {
        _this6.state = 'rotated';
      } else {
        _this6.state = 'default';
      }
    })();
  }

  downloadAllStoreInfo(storeName, isCustom = false) {
    this.loadService.myCallback = () => this.callback();

    this.loadService.getUser(storeName, undefined, isCustom);
  }

  getStoreName() {
    var request = "";

    if ((0,_angular_common__WEBPACK_IMPORTED_MODULE_14__.isPlatformServer)(this.platformID)) {
      request = _globals__WEBPACK_IMPORTED_MODULE_1__.Globals.URL;
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

  deleteProduct(product) {
    var _this7 = this;

    return (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      yield _this7.loadService.deleteProduct({
        productID: product.productID
      });

      _this7.toast("Product Removed");
    })();
  }

  editProduct(product) {
    var _a, _b;

    let ngbModalOptions = {
      backdrop: 'static',
      keyboard: false,
      size: "xl"
    };
    const modalRef = this.modalService.open(_design_design_component__WEBPACK_IMPORTED_MODULE_3__.DesignComponent, ngbModalOptions);
    modalRef.componentInstance.templates = this.templates().filter(template => {
      var _a;

      return !template.onlyBulk || ((_a = this.inventory) === null || _a === void 0 ? void 0 : _a.filter(inv => {
        return inv.name == template.templateDisplayName;
      }).length) != 0;
    });
    modalRef.componentInstance.step = 1;
    modalRef.componentInstance.mode = "edit";
    modalRef.componentInstance.designForm.controls.name.setValue((_a = product.name) !== null && _a !== void 0 ? _a : "");
    modalRef.componentInstance.designForm.controls.price.setValue(product.price / 100);
    modalRef.componentInstance.product = product;
    modalRef.componentInstance.designForm.controls.description.setValue((_b = product.description) !== null && _b !== void 0 ? _b : "");
    modalRef.componentInstance.linkImg = product.url;
  }

  createNewProduct() {
    let ngbModalOptions = {
      backdrop: 'static',
      keyboard: false,
      size: "md"
    };
    const modalRef = this.modalService.open(_design_design_component__WEBPACK_IMPORTED_MODULE_3__.DesignComponent, ngbModalOptions);
    modalRef.componentInstance.templates = this.templates().filter(template => {
      var _a;

      return !template.onlyBulk || ((_a = this.inventory) === null || _a === void 0 ? void 0 : _a.filter(inv => {
        return inv.name == template.templateDisplayName;
      }).length) != 0;
    });
  }

  routeToHome() {
    this.rootComponent.routeToHome();
  }

  signOutPressed() {
    this.loadService.myCallback = () => this.routeToHome();

    this.loadService.signOut();
  }

  addTags(title, imgUrl, description, url) {
    this.metaService.updateTag({
      property: 'og:title',
      content: title + " - " + "About"
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

}

AdminViewComponent.ɵfac = function AdminViewComponent_Factory(t) {
  return new (t || AdminViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__.PLATFORM_ID), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.Title), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.Meta), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_load_service__WEBPACK_IMPORTED_MODULE_9__.LoadService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_app_component__WEBPACK_IMPORTED_MODULE_10__.AppComponent), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_18__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_19__.Clipboard), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_routing_service__WEBPACK_IMPORTED_MODULE_11__.RoutingService));
};

AdminViewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: AdminViewComponent,
  selectors: [["app-admin-view"]],
  decls: 4,
  vars: 3,
  consts: [["size", "large", 3, "bdColor", "color", "type", "fullScreen", "name", 4, "ngIf"], ["class", "wrapper", 3, "hidden", "background-color", 4, "ngIf"], ["size", "large", 3, "bdColor", "color", "type", "fullScreen", "name"], [1, "text-center", "mt-5"], [1, "wrapper", 3, "hidden"], ["id", "sidebar"], [2, "position", "fixed", "width", "250px", "height", "90vh", "overflow-y", "auto"], [4, "ngFor", "ngForOf"], ["role", "button", 1, "btn", "side", "ms-2", 2, "font-size", "12px", "color", "crimson", "margin-bottom", "20vh", 3, "click"], ["id", "content", "class", "w-100 h-100", 4, "ngIf"], [2, "height", "50px", "color", "#6c757d"], [1, "list-unstyled", "components", "pb-1", "mb-1"], [3, "active", 4, "ngFor", "ngForOf"], ["role", "button", "style", "font-size: 20px;", 3, "font-family", "class", "click", 4, "ngIf"], ["role", "button", "class", "side d-flex text-danger align-items-center justify-content-start", "style", "font-size: 20px;", 3, "font-family", "click", 4, "ngIf"], ["role", "button", 2, "font-size", "20px", 3, "click"], [1, "me-2", "ms-3"], [1, "material-icons-outlined", 2, "font-size", "25px"], ["role", "button", 1, "side", "d-flex", "text-danger", "align-items-center", "justify-content-start", 2, "font-size", "20px", 3, "click"], ["id", "content", 1, "w-100", "h-100"], [3, "class", 4, "ngIf"], ["class", "py-2 ", 3, "background-color", 4, "ngIf"], [1, "w-100", "d-flex", "justify-content-start", "align-items-center"], ["role", "button", 2, "text-shadow", "2px 2px 4px #42424281", 3, "click"], ["role", "button", "class", "side d-flex text-light btn btn-success rounded-pill mb-2 align-items-center justify-content-center fw-bold", "style", "font-size: 15px;", 3, "font-family", 4, "ngIf"], ["role", "button", "class", "side d-flex text-light btn btn-danger rounded-pill mb-2 align-items-center justify-content-center fw-bold", "style", "font-size: 15px;", 3, "font-family", "ngbTooltip", 4, "ngIf"], [1, "cover", 2, "height", "200px", "background-image", "url(https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Resources%2FSample-Walls%2FHome%2F1.jpg?alt=media)"], [1, "d-flex", "align-items-center", "justify-content-center", "h-100", 2, "font-weight", "bold", "font-size", "35px"], ["role", "button", 2, "line-height", "1.2em", "text-shadow", "2px 2px 4px #42424281", 3, "click"], [2, "text-shadow", "2px 2px 4px #42424281"], ["role", "button", 1, "side", "d-flex", "text-light", "btn", "btn-success", "rounded-pill", "mb-2", "align-items-center", "justify-content-center", "fw-bold", 2, "font-size", "15px"], [1, "ms-2"], ["role", "button", 1, "side", "d-flex", "text-light", "btn", "btn-danger", "rounded-pill", "mb-2", "align-items-center", "justify-content-center", "fw-bold", 2, "font-size", "15px", 3, "ngbTooltip"], ["etipContent", ""], ["class", "d-flex", 4, "ngFor", "ngForOf"], [1, "d-flex"], [1, "ms-2", "me-2", "text-danger"], [1, "material-icons-outlined"], [1, "text-start"], [1, "py-2"], ["class", "py-3", 4, "ngIf"], [4, "ngIf"], ["class", "h-100", 4, "ngIf"], [1, "py-3"], [1, "card", "ms-4", "me-4"], [1, "card-body"], ["novalidate", "", 3, "formGroup"], [1, "row", "row-cols-1", "px-2", "row-cols-md-2", "row-cols-xl-2", "justify-content-center"], [1, "col-md-8", "mx-auto", "d-block", "mb-4"], [1, "text-center"], ["role", "button", 1, "btn", 3, "click"], ["alt", "", "width", "128", "height", "128", 1, "rounded-circle", "img-responsive", "mt-2", 2, "object-fit", "cover", 3, "src"], ["id", "canvas", "alt", "", "width", "128", "height", "128", 1, "rounded-circle", "img-responsive", "mt-2", 2, "object-fit", "cover", "display", "none"], [1, "mt-2"], ["role", "button", 1, "btn", "mb-2", 3, "click"], ["type", "file", 2, "display", "none", 3, "change"], ["fileInput", ""], [1, "btn", "btn-dark", "mx-auto", "d-flex", 3, "click"], [1, "col-md-8", "mx-auto", "d-block"], [1, "form-group", "mb-4"], ["for", "inputUsername", 1, "fw-bold"], ["type", "text", "id", "inputUsername", "placeholder", "ex: 'brianstees'", "formControlName", "username"], ["align", "start"], [2, "font-size", "12px", "color", "#6c757d"], ["type", "text", "id", "inputUsername", "formControlName", "full_name", 3, "placeholder"], ["rows", "5", "id", "inputBio", "placeholder", "Describe your store...", "formControlName", "bio"], [1, "col-md-8", "mx-auto", "mt-3", "d-block"], [1, "d-flex", "justify-content-start", 2, "overflow", "scroll"], ["role", "button", "class", "btn mx-2", 3, "width", "not-set", "ngbTooltip", "click", 4, "ngFor", "ngForOf"], [1, "card", "ms-4", "me-4", "py-3"], [1, "text-center", "fw-bolder", "m-2", "mb-4", 2, "font-size", "x-large"], [1, "row"], ["type", "text ", "type", "email", "placeholder", "shopmythred.com (default)", "formControlName", "newEmail"], ["role", "button", 1, "btn", "mx-2", 3, "ngbTooltip", "click"], ["tipContent", ""], ["alt", "ok", 1, "rounded-circle", 2, "object-fit", "contain", 3, "src"], [1, "btn", "btn-dark", "mx-auto", "d-flex", "mb-5", 3, "click"], ["type", "text ", "id", "inputSlogan", "placeholder", "ex: 'Coolest brand on the block'", "formControlName", "slogan"], [1, "row", "gx-10", "row-cols-1", "row-cols-md-1", "row-cols-xl-1", "justify-content-center"], [1, "col-md-8", "mb-3", "mx-auto", "d-block"], ["for", "inputUsername", 1, "fw-bold", "mb-1", "me-1"], ["formControlName", "storeTheme", "required", "required", 3, "change"], [3, "selected", 4, "ngFor", "ngForOf"], ["formControlName", "font", "required", "required"], ["alt", "ok", "onerror", "this.src='https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Resources%2FSample-Walls%2FHome%2F1.jpg?alt=media';", 1, "card-img-top", 3, "src"], [1, "card-body", "p-2", "pb-1"], [1, "mt-2", "text-center"], ["fileBackground", ""], ["fileHome", ""], ["fileAction", ""], ["formControlName", "loadingIndicator", "required", "required", 3, "change"], [1, "row", "gx-10", "row-cols-1", "justify-content-center"], [1, "card", "h-auto"], ["role", "button", 1, "btn", 3, "cpPosition", "cpPositionRelativeToArrow", "cpOutputFormat", "cpOKButton", "cpOKButtonText", "cpOKButtonClass", "cpSaveClickOutside", "colorPicker", "colorPickerSelect", "colorPickerChange"], [1, "mt-1"], [3, "selected"], ["role", "button", 3, "click"], [1, "me-2"], [2, "font-size", "25px"], ["class", "container px-4 px-lg-5 mt-0 pt-0", 4, "ngIf"], [1, "container", "px-4", "px-lg-5", "mt-0", "pt-0"], [1, "row", "gx-4", "gx-lg-5", "row-cols-1", "row-cols-md-3", "row-cols-xl-3", "justify-content-center"], ["class", "col mb-5", 4, "ngFor", "ngForOf"], [1, "col", "mb-5"], ["alt", "ok", "onerror", "this.src='https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Resources%2Flink_empty.jpeg?alt=media';", 1, "card-img-top", 3, "src"], [1, "card-body", "pb-0"], [1, "fw-bolder"], ["role", "button", 2, "text-decoration", "none", 3, "click"], [1, "d-flex", "align-items-center", "justify-content-center", "w-100"], [1, "card-footer", "p-4", "pt-0", "pb-4", "border-top-0", "bg-transparent"], ["role", "button", 2, "font-weight", "bold", 3, "click"], [1, "card", "py-3", "px-3"], [1, "ms-2", "text-danger"], ["role", "button", 1, "w-100", "side", 3, "click"], ["src", "/assets/design_image.png", 1, "rounded", "w-100"], [1, "row", "gx-0", "gx-md-4", "gx-lg-4", "row-cols-1", "row-cols-md-2", "row-cols-xl-2", "justify-content-center", "m-2", "m-md-3", "m-lg-3"], [1, "col", "mb-2"], ["role", "button", 2, "font-size", "20px"], [1, "card-body", "mt-4"], [1, "d-flex", "align-items-center", "justify-content-center", "mt-3", "mb-2", 2, "font-size", "15px"], ["class", "btn d-flex", 3, "font-family", "background-color", "color", "click", 4, "ngIf"], [1, "btn", "d-flex", 3, "click"], [2, "font-size", "xx-large"], [1, "row", "gx-0", "gx-md-4", "gx-lg-4", "row-cols-1", "row-cols-md-2", "row-cols-xl-2", "justify-content-start", "mx-2", "mx-md-3", "mx-lg-3", "mb-0"], ["class", "col", 4, "ngFor", "ngForOf"], [1, "col"], [1, "text-center", "fw-bolder", "m-2", 2, "font-size", "x-large"], [1, "card-body", "mt-2"], [1, "d-flex", "align-items-center", "justify-content-center", "my-2", 2, "font-size", "22px"], [1, "mb-1", "me-1", "text-center", 2, "color", "#6c757d"], ["role", "button", 1, "fw-bolder", "text-center", 2, "text-decoration", "none"], [1, "rounded", "mx-auto", 2, "width", "25%", "aspect-ratio", "1 / 1"], ["role", "button", 2, "text-shadow", "2px 2px 4px #42424281"], [1, "rounded", "img-responsive", "h-100", "w-100", "p-1", 2, "object-fit", "contain", "background-color", "#cdf4fc", 3, "src"], [1, "d-flex", "align-items-center", "justify-content-center", "mt-4", "mb-2", 2, "font-size", "15px"], [1, "btn", "d-flex", "mx-1", 3, "click"], ["class", "btn d-flex mx-1", 3, "font-family", "background-color", "color", "click", 4, "ngIf"], ["class", "btn btn-success d-flex mx-1", 3, "font-family", "click", 4, "ngIf"], [1, "btn", "btn-success", "d-flex", "mx-1", 3, "click"], [1, "ms-1"], [2, "font-size", "xx-large", "line-height", "1.2em"], [1, "row", "gx-0", "gx-md-4", "gx-lg-4", "row-cols-1", "row-cols-md-2", "row-cols-xl-2", "justify-content-start", "m-2", "m-md-3", "m-lg-3"], ["class", "col mb-2", 4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center", "justify-content-center"], [1, "mx-auto"], [1, "d-flex", "align-items-center", "justify-content-center", "my-2", "mx-auto", 2, "font-size", "22px"], [1, "d-flex", "align-items-center", "justify-content-center", "my-2", "mx-auto", 2, "font-size", "10px"], ["type", "text ", "type", "email", "placeholder", "ex: 'johnapple@gmail.com'", "formControlName", "newEmail"], ["type", "text ", "placeholder", "Confirm Password", "type", "password", "formControlName", "password", 3, "type"], ["type", "text ", "placeholder", "Confirm Old Password", "formControlName", "password", 3, "type"], ["type", "text ", "placeholder", "Enter New Password", "formControlName", "newPassword", 3, "type"], ["type", "text ", "placeholder", "Confirm New Password", "formControlName", "confirmNewPassword", 3, "type"], [1, "d-block", "align-items-center", "justify-content-start", "my-2", 2, "font-size", "15px"], ["role", "button", 2, "text-decoration", "none"], ["class", "w-100 h-100 ", 4, "ngIf"], [1, "w-100", "h-100"], ["class", "text-center fw-bolder m-2", "style", "font-size: x-large;", 3, "color", "font-family", 4, "ngIf"], ["role", "button", "class", "side d-flex text-danger m-3 align-items-center justify-content-center fw-bold", "style", "font-size: 20px;", 3, "font-family", 4, "ngIf"], [1, "mb-1", "me-1", 2, "color", "#6c757d"], ["role", "button", 1, "fw-bold", 2, "text-decoration", "none"], ["style", "color: #6c757d;", 4, "ngIf"], ["align", "start", 3, "font-family", 4, "ngIf"], ["class", "d-block align-items-center justify-content-start my-2 mb-5", "style", "font-size: 15px;", 4, "ngIf"], ["class", "d-flex align-items-center justify-content-center mt-3 mb-2", "style", "font-size: 15px;", 4, "ngIf"], ["role", "button", 1, "side", "d-flex", "text-danger", "m-3", "align-items-center", "justify-content-center", "fw-bold", 2, "font-size", "20px"], [2, "color", "#6c757d"], [1, "d-block", "align-items-center", "justify-content-start", "my-2", "mb-5", 2, "font-size", "15px"], ["style", "color: #6c757d;", "class", " mb-1 me-1", 3, "font-family", 4, "ngIf"], [1, "btn", "me-1", "d-flex", 3, "click"], [1, "h-100"], [2, "font-weight", "bolder"], [1, "text-center", "fw-bolder", 2, "font-size", "x-large"], [1, "card-body", "d-flex", "justify-content-center", "align-items-center", "my-2", 2, "height", "300px"], [3, "results", "xAxis", "yAxis", "gradient", "customColors", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "xAxisTickFormatting", "yAxisLabel", "fill", 4, "ngIf"], ["class", "text-center", 4, "ngIf"], ["class", "text-center px-2 mx-2 my-2", "style", "font-weight: bold; font-size: smaller;", 3, "font-family", "color", 4, "ngIf"], [3, "results", "xAxis", "yAxis", "gradient", "customColors", "showXAxisLabel", "showYAxisLabel", "xAxisLabel", "xAxisTickFormatting", "yAxisLabel"], ["tooltipTemplate", ""], ["seriesTooltipTemplate", ""], [1, "fw-bolder", 2, "font-size", "large", "line-height", "1.0em"], ["role", "button", 2, "text-decoration", "none", "line-height", "1.2em"], [1, "text-center", "px-2", "mx-2", "my-2", 2, "font-weight", "bold", "font-size", "smaller"], [1, "fw-bolder", 2, "font-size", "x-large", "line-height", "1.0em"]],
  template: function AdminViewComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, AdminViewComponent_ngx_spinner_1_Template, 3, 11, "ngx-spinner", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](2, AdminViewComponent_ngx_spinner_2_Template, 3, 11, "ngx-spinner", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, AdminViewComponent_div_3_Template, 7, 13, "div", 1);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.isBrowser());
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.isBrowser());
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.isBrowser());
    }
  },
  directives: [_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, ngx_spinner__WEBPACK_IMPORTED_MODULE_18__.NgxSpinnerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, _angular_material_icon__WEBPACK_IMPORTED_MODULE_20__.MatIcon, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__.NgbTooltip, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormControlName, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__.MatHint, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.RequiredValidator, ngx_color_picker__WEBPACK_IMPORTED_MODULE_22__.ColorPickerDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_13__["ɵNgSelectMultipleOption"], _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_23__.AreaChartComponent],
  styles: ["@import \"https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700\";\n\n\n.side[_ngcontent-%COMP%] {\n    color: inherit;\n    text-decoration: none;\n    transition: all 0.05s;\n}\n\n\n.not-set[_ngcontent-%COMP%]{\n    opacity: 0.2;\n}\n\n\n#sidebar[_ngcontent-%COMP%] {\n    background: #1b1b1b;\n    color: #fff;\n    transition: all 0.05s;\n}\n\n\n#sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%] {\n    padding: 20px;\n    background: #1b1b1b;\n}\n\n\n#sidebar[_ngcontent-%COMP%]   ul.components[_ngcontent-%COMP%] {\n    padding: 20px 0;\n    border-bottom: 1px solid #47748b;\n}\n\n\n#sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    color: #fff;\n    padding: 10px;\n}\n\n\n#sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    padding: 10px;\n    font-size: 1.1em;\n    display: block;\n}\n\n\n#sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    color: #7386D5;\n    background: #fff;\n}\n\n\n#sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%]    > a[_ngcontent-%COMP%], a[aria-expanded=\"true\"][_ngcontent-%COMP%] {\n    color: #fff;\n    background: #6d7fcc;\n}\n\n\nul[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 0.9em !important;\n    padding-left: 40px !important;\n    background: #6d7fcc;\n}\n\n\n.centered[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n\n\n.cover[_ngcontent-%COMP%]{\n    color: rgb(255, 255, 255);\n    position: relative;\n    \n    background-repeat: no-repeat;\n    background-position-x: center;\n    background-position-y: center;\n    background-size: cover;\n}\n\n\n.wrapper[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: stretch;\n}\n\n\n#sidebar[_ngcontent-%COMP%] {\n    min-width: 250px;\n    max-width: 250px;\n    min-height: 100vh;\n}\n\n\n#sidebar.active[_ngcontent-%COMP%] {\n    margin-left: -250px;\n}\n\n\na[data-toggle=\"collapse\"][_ngcontent-%COMP%] {\n    position: relative;\n}\n\n\n.dropdown-toggle[_ngcontent-%COMP%]::after {\n    display: block;\n    position: absolute;\n    top: 50%;\n    right: 20px;\n    transform: translateY(-50%);\n}\n\n\n@media (max-width: 768px) {\n    #sidebar[_ngcontent-%COMP%] {\n        margin-left: -250px;\n    }\n    #sidebar.active[_ngcontent-%COMP%] {\n        margin-left: 0;\n    }\n}\n\n\n.card[_ngcontent-%COMP%] {\n    margin-bottom: 1.5rem;\n    box-shadow: 0 1px 15px 1px rgba(52,40,104,.08);\n}\n\n\n.card[_ngcontent-%COMP%] {\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    min-width: 0;\n    word-wrap: break-word;\n    background-color: #fff;\n    background-clip: border-box;\n    border: 1px solid #e5e9f2;\n    border-radius: .2rem;\n}\n\n\n.card-header[_ngcontent-%COMP%]:first-child {\n    border-radius: calc(.2rem - 1px) calc(.2rem - 1px) 0 0;\n}\n\n\n.card-header[_ngcontent-%COMP%] {\n    border-bottom-width: 1px;\n}\n\n\n.card-header[_ngcontent-%COMP%] {\n    padding: .75rem 1.25rem;\n    margin-bottom: 0;\n    color: inherit;\n    background-color: #fff;\n    border-bottom: 1px solid #e5e9f2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkbWluLXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw2RUFBNkU7OztBQUc3RTtJQUNJLGNBQWM7SUFDZCxxQkFBcUI7SUFDckIscUJBQXFCO0FBQ3pCOzs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7OztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxxQkFBcUI7QUFDekI7OztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0NBQWdDO0FBQ3BDOzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOzs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7OztBQUNBO0lBQ0ksMkJBQTJCO0lBQzNCLDZCQUE2QjtJQUM3QixtQkFBbUI7QUFDdkI7OztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsZ0NBQWdDO0VBQ2xDOzs7QUFFRjtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLDRCQUE0QjtJQUM1Qiw2QkFBNkI7SUFDN0IsNkJBQTZCO0lBSTdCLHNCQUFzQjtBQUMxQjs7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isb0JBQW9CO0FBQ3hCOzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOzs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7OztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsV0FBVztJQUNYLDJCQUEyQjtBQUMvQjs7O0FBRUE7SUFDSTtRQUNJLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtBQUNKOzs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQiw4Q0FBOEM7QUFDbEQ7OztBQUNBO0lBQ0ksa0JBQWtCO0lBRWxCLGFBQWE7SUFFYixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLHlCQUF5QjtJQUN6QixvQkFBb0I7QUFDeEI7OztBQUNBO0lBQ0ksc0RBQXNEO0FBQzFEOzs7QUFDQTtJQUNJLHdCQUF3QjtBQUM1Qjs7O0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxzQkFBc0I7SUFDdEIsZ0NBQWdDO0FBQ3BDIiwiZmlsZSI6ImFkbWluLXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9UG9wcGluczozMDAsNDAwLDUwMCw2MDAsNzAwXCI7XG5cblxuLnNpZGUge1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4wNXM7XG59XG5cbi5ub3Qtc2V0e1xuICAgIG9wYWNpdHk6IDAuMjtcbn1cblxuI3NpZGViYXIge1xuICAgIGJhY2tncm91bmQ6ICMxYjFiMWI7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMDVzO1xufVxuXG4jc2lkZWJhciAuc2lkZWJhci1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYmFja2dyb3VuZDogIzFiMWIxYjtcbn1cblxuI3NpZGViYXIgdWwuY29tcG9uZW50cyB7XG4gICAgcGFkZGluZzogMjBweCAwO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNDc3NDhiO1xufVxuXG4jc2lkZWJhciB1bCBwIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4jc2lkZWJhciB1bCBsaSBhIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4jc2lkZWJhciB1bCBsaSBhOmhvdmVyIHtcbiAgICBjb2xvcjogIzczODZENTtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4jc2lkZWJhciB1bCBsaS5hY3RpdmUgPiBhLCBhW2FyaWEtZXhwYW5kZWQ9XCJ0cnVlXCJdIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBiYWNrZ3JvdW5kOiAjNmQ3ZmNjO1xufVxudWwgdWwgYSB7XG4gICAgZm9udC1zaXplOiAwLjllbSAhaW1wb3J0YW50O1xuICAgIHBhZGRpbmctbGVmdDogNDBweCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6ICM2ZDdmY2M7XG59XG5cbi5jZW50ZXJlZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgfVxuXG4uY292ZXJ7XG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLyogaGVpZ2h0OiA1MDBweDsgKi9cbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb24teDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb24teTogY2VudGVyO1xuICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ud3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbn1cblxuI3NpZGViYXIge1xuICAgIG1pbi13aWR0aDogMjUwcHg7XG4gICAgbWF4LXdpZHRoOiAyNTBweDtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuI3NpZGViYXIuYWN0aXZlIHtcbiAgICBtYXJnaW4tbGVmdDogLTI1MHB4O1xufVxuXG5hW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl0ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmRyb3Bkb3duLXRvZ2dsZTo6YWZ0ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICByaWdodDogMjBweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICNzaWRlYmFyIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0yNTBweDtcbiAgICB9XG4gICAgI3NpZGViYXIuYWN0aXZlIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgfVxufVxuXG4uY2FyZCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDE1cHggMXB4IHJnYmEoNTIsNDAsMTA0LC4wOCk7XG59XG4uY2FyZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtaW4td2lkdGg6IDA7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jbGlwOiBib3JkZXItYm94O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNWU5ZjI7XG4gICAgYm9yZGVyLXJhZGl1czogLjJyZW07XG59XG4uY2FyZC1oZWFkZXI6Zmlyc3QtY2hpbGQge1xuICAgIGJvcmRlci1yYWRpdXM6IGNhbGMoLjJyZW0gLSAxcHgpIGNhbGMoLjJyZW0gLSAxcHgpIDAgMDtcbn1cbi5jYXJkLWhlYWRlciB7XG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMXB4O1xufVxuLmNhcmQtaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAuNzVyZW0gMS4yNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNWU5ZjI7XG59Il19 */"],
  data: {
    animation: [// Each unique animation requires its own trigger. The first argument of the trigger function is the name
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_24__.trigger)('rotatedState', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_24__.state)('default', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_24__.style)({
      transform: 'rotateY(0)'
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_24__.state)('rotated', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_24__.style)({
      transform: 'rotateY(-180deg)'
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_24__.transition)('rotated => default', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_24__.animate)('200ms ease-out')), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_24__.transition)('default => rotated', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_24__.animate)('200ms ease-in'))])]
  }
});

/***/ }),

/***/ 41674:
/*!*************************************************!*\
  !*** ./src/app/admin-view/admin-view.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminViewModule": () => (/* binding */ AdminViewModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _admin_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin-view.component */ 58838);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../globals */ 37503);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ 93738);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-spinner */ 79866);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-drag-scroll */ 93494);
/* harmony import */ var _design_design_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../design/design.component */ 44619);
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-image-cropper */ 55819);
/* harmony import */ var _cropper_cropper_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cropper/cropper.component */ 79788);
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-color-picker */ 61922);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ 83166);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ 51095);
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ 67441);
/* harmony import */ var _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @swimlane/ngx-charts */ 2945);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var ngx_currency__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-currency */ 24879);
/* harmony import */ var _social_form_social_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../social-form/social-form.component */ 38554);
/* harmony import */ var _inventory_buy_inventory_buy_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../inventory-buy/inventory-buy.component */ 58379);
/* harmony import */ var _inventory_list_inventory_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../inventory-list/inventory-list.component */ 36032);
/* harmony import */ var _edit_plan_edit_plan_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../edit-plan/edit-plan.component */ 7659);
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/cdk/clipboard */ 14785);
/* harmony import */ var _store_setup_store_setup_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store-setup/store-setup.component */ 31147);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);



























const routes = [
    {
        path: '',
        component: _admin_view_component__WEBPACK_IMPORTED_MODULE_0__.AdminViewComponent,
    },
];
class AdminViewModule {
    constructor() {
    }
}
AdminViewModule.ɵfac = function AdminViewModule_Factory(t) { return new (t || AdminViewModule)(); };
AdminViewModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AdminViewModule, bootstrap: [_admin_view_component__WEBPACK_IMPORTED_MODULE_0__.AdminViewComponent] });
AdminViewModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [_globals__WEBPACK_IMPORTED_MODULE_1__.Globals], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
            _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule,
            _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInputModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule,
            _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelectModule,
            ngx_spinner__WEBPACK_IMPORTED_MODULE_16__.NgxSpinnerModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__.ReactiveFormsModule,
            ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_18__.DragScrollModule,
            ngx_image_cropper__WEBPACK_IMPORTED_MODULE_19__.ImageCropperModule,
            ngx_color_picker__WEBPACK_IMPORTED_MODULE_20__.ColorPickerModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbModule,
            _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_22__.NgxChartsModule,
            _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_23__.ClipboardModule,
            ngx_currency__WEBPACK_IMPORTED_MODULE_24__.NgxCurrencyModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_25__.RouterModule.forChild(routes),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AdminViewModule, { declarations: [_admin_view_component__WEBPACK_IMPORTED_MODULE_0__.AdminViewComponent,
        _design_design_component__WEBPACK_IMPORTED_MODULE_2__.DesignComponent,
        _cropper_cropper_component__WEBPACK_IMPORTED_MODULE_3__.CropperComponent,
        _social_form_social_form_component__WEBPACK_IMPORTED_MODULE_4__.SocialFormComponent,
        _inventory_buy_inventory_buy_component__WEBPACK_IMPORTED_MODULE_5__.InventoryBuyComponent,
        _inventory_list_inventory_list_component__WEBPACK_IMPORTED_MODULE_6__.InventoryListComponent,
        _edit_plan_edit_plan_component__WEBPACK_IMPORTED_MODULE_7__.EditPlanComponent,
        _store_setup_store_setup_component__WEBPACK_IMPORTED_MODULE_8__.StoreSetupComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
        _angular_material_card__WEBPACK_IMPORTED_MODULE_11__.MatCardModule,
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule,
        _angular_material_input__WEBPACK_IMPORTED_MODULE_13__.MatInputModule,
        _angular_material_button__WEBPACK_IMPORTED_MODULE_14__.MatButtonModule,
        _angular_material_select__WEBPACK_IMPORTED_MODULE_15__.MatSelectModule,
        ngx_spinner__WEBPACK_IMPORTED_MODULE_16__.NgxSpinnerModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_17__.ReactiveFormsModule,
        ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_18__.DragScrollModule,
        ngx_image_cropper__WEBPACK_IMPORTED_MODULE_19__.ImageCropperModule,
        ngx_color_picker__WEBPACK_IMPORTED_MODULE_20__.ColorPickerModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_21__.NgbModule,
        _swimlane_ngx_charts__WEBPACK_IMPORTED_MODULE_22__.NgxChartsModule,
        _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_23__.ClipboardModule,
        ngx_currency__WEBPACK_IMPORTED_MODULE_24__.NgxCurrencyModule, _angular_router__WEBPACK_IMPORTED_MODULE_25__.RouterModule] }); })();


/***/ }),

/***/ 79788:
/*!**********************************************!*\
  !*** ./src/app/cropper/cropper.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CropperComponent": () => (/* binding */ CropperComponent)
/* harmony export */ });
/* harmony import */ var _Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 16304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-image-cropper */ 55819);






const _c0 = function () {
  return {
    "display": "block"
  };
};

class CropperComponent {
  constructor(activeModal) {
    this.activeModal = activeModal;
    this.imageChangedEvent = '';
    this.croppedImage = '';
    this.ratio = 1;
    this.width = 200;
    this.height = 200;
  }

  innerHeight() {
    return window.innerHeight * 0.9;
  }

  ngOnInit() {
    console.log(window.innerHeight);
  }

  imageCropped(event) {
    this.croppedImage = event.base64;
  }

  imageLoaded() {// show cropper
  }

  compressImage(src) {
    return new Promise((res, rej) => {
      const img = new Image();
      img.src = src;

      img.onload = () => {
        const elem = document.createElement('canvas');
        elem.width = this.width;
        elem.height = this.height;
        const ctx = elem.getContext('2d');
        ctx === null || ctx === void 0 ? void 0 : ctx.drawImage(img, 0, 0, this.width, this.height);
        const data = ctx === null || ctx === void 0 ? void 0 : ctx.canvas.toDataURL("image/jpg");
        res(data);
      };

      img.onerror = error => rej(error);
    });
  }

  useImage() {
    var _this = this;

    return (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      let res = yield _this.compressImage(_this.croppedImage);

      _this.activeModal.dismiss(res);
    })();
  }

  cropperReady() {// cropper ready
  }

  loadImageFailed() {// show message
  }

}

CropperComponent.ɵfac = function CropperComponent_Factory(t) {
  return new (t || CropperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbActiveModal));
};

CropperComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: CropperComponent,
  selectors: [["app-cropper"]],
  decls: 5,
  vars: 6,
  consts: [[1, "rounded", 3, "ngStyle"], ["cropContainer", ""], ["role", "button", 1, "rounded-top", "bg-dark", "mt-auto", "d-flex", "justify-content-center", "align-items-center", "text-center", "text-light", "fw-bold", 2, "height", "45px", "text-decoration", "none", 3, "click"], ["format", "png", 3, "imageChangedEvent", "maintainAspectRatio", "containWithinAspectRatio", "aspectRatio", "imageCropped", "imageLoaded", "cropperReady", "loadImageFailed"]],
  template: function CropperComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CropperComponent_Template_a_click_2_listener() {
        return ctx.useImage();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " USE PHOTO ");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "image-cropper", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("imageCropped", function CropperComponent_Template_image_cropper_imageCropped_4_listener($event) {
        return ctx.imageCropped($event);
      })("imageLoaded", function CropperComponent_Template_image_cropper_imageLoaded_4_listener() {
        return ctx.imageLoaded();
      })("cropperReady", function CropperComponent_Template_image_cropper_cropperReady_4_listener() {
        return ctx.cropperReady();
      })("loadImageFailed", function CropperComponent_Template_image_cropper_loadImageFailed_4_listener() {
        return ctx.loadImageFailed();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c0));
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("imageChangedEvent", ctx.imageChangedEvent)("maintainAspectRatio", true)("containWithinAspectRatio", true)("aspectRatio", ctx.ratio);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle, ngx_image_cropper__WEBPACK_IMPORTED_MODULE_4__.ImageCropperComponent],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcm9wcGVyLmNvbXBvbmVudC5jc3MifQ== */"]
});

/***/ }),

/***/ 44619:
/*!********************************************!*\
  !*** ./src/app/design/design.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DesignComponent": () => (/* binding */ DesignComponent)
/* harmony export */ });
/* harmony import */ var _Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 16304);
/* harmony import */ var ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-drag-scroll */ 93494);
/* harmony import */ var _cropper_cropper_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cropper/cropper.component */ 79788);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globals */ 37503);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! html2canvas */ 20977);
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ngx_currency__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-currency */ 24879);
/* harmony import */ var _popup_dialog_popup_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../popup-dialog/popup-dialog.component */ 57207);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ 79866);
/* harmony import */ var _services_load_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/load.service */ 6029);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ 76627);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 38583);


















const _c0 = ["carousel"];
const _c1 = ["productTemplates"];

function DesignComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "a", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DesignComponent_div_17_Template_a_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9);

      const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](7);

      return _r7.click();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "p", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "input", 54, 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function DesignComponent_div_17_Template_input_change_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r9);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r10.fileChangeEvent($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "img", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "a", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "img", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const color_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("border-color", ctx_r1.calculateColor(color_r6).border_color)("height", ctx_r1.calculateHeight(), "px")("top", ctx_r1.calculateCenterY(), "px")("width", ctx_r1.calculateWidth(), "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("noDesign", ctx_r1.shouldShowCanvas());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassMapInterpolate1"]("fw-bolder text-center text-wrap text-", ctx_r1.calculateColor(color_r6).text_color, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", !ctx_r1.shouldShowCanvas());
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r1.sideName(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx_r1.shouldShowCanvas())("src", ctx_r1.selectedImage(), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r1.getColorSide(undefined, color_r6), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
  }
}

function DesignComponent_div_55_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DesignComponent_div_55_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13);
      const template_r11 = restoredCtx.$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r12.selectTemplate(template_r11);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const template_r11 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("productTypeBtn", ctx_r2.selectedTemplate != template_r11)("selected", ctx_r2.selectedTemplate == template_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r2.getTypeImages(template_r11), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
  }
}

function DesignComponent_div_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DesignComponent_div_61_Template_a_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r17);
      const i_r15 = restoredCtx.index;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r16.selectSide(i_r15);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const i_r15 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("productTypeBtn", ctx_r3.selectedSide != i_r15)("selected", ctx_r3.selectedSide == i_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r3.getColorSide(i_r15), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
  }
}

function DesignComponent_span_87_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Create Product ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

function DesignComponent_span_88_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Update Product ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }
}

const _c2 = function () {
  return [];
};

class DesignComponent {
  constructor(sanitizer, cdr, modalService, activeModal, fb, spinner, loadService) {
    this.cdr = cdr;
    this.modalService = modalService;
    this.activeModal = activeModal;
    this.fb = fb;
    this.spinner = spinner;
    this.loadService = loadService;
    this.mode = "create";
    this.customCurrencyMaskConfig = {
      align: "left",
      allowNegative: false,
      allowZero: true,
      decimal: ".",
      precision: 2,
      prefix: "$ ",
      suffix: "",
      thousands: ",",
      min: 0,
      inputMode: ngx_currency__WEBPACK_IMPORTED_MODULE_7__.CurrencyMaskInputMode.NATURAL
    };
    this.selectedSide = 0;
    this.step = 0;
    this.openCrop = false;
    this.designForm = this.fb.group({
      name: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
      description: null,
      price: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]]
    });
    this.sanitizer = sanitizer;
  }

  myInnerHeight() {
    let height = window.innerHeight;
    let width = window.innerWidth;

    if (width < height) {
      return width * 0.98;
    } else {
      if (this.step == 0) {
        return height * 0.70;
      }

      return height * 0.70;
    }
  }

  storeInfo() {
    return _globals__WEBPACK_IMPORTED_MODULE_2__.Globals.storeInfo;
  }

  availableCurrencies() {
    return _globals__WEBPACK_IMPORTED_MODULE_2__.Globals.availableCurrencies;
  }

  selectedCurrency() {
    return _globals__WEBPACK_IMPORTED_MODULE_2__.Globals.selectedCurrency;
  }

  selectedIndicator() {
    var _a, _b, _c, _d, _e, _f;

    let co = (_b = (_a = _globals__WEBPACK_IMPORTED_MODULE_2__.Globals.storeInfo) === null || _a === void 0 ? void 0 : _a.loading) === null || _b === void 0 ? void 0 : _b.color;
    let bco = (_d = (_c = _globals__WEBPACK_IMPORTED_MODULE_2__.Globals.storeInfo) === null || _c === void 0 ? void 0 : _c.loading) === null || _d === void 0 ? void 0 : _d.bg_color;
    let name = (_f = (_e = _globals__WEBPACK_IMPORTED_MODULE_2__.Globals.storeInfo) === null || _e === void 0 ? void 0 : _e.loading) === null || _f === void 0 ? void 0 : _f.name;
    let color = "rgba(" + co[0] + "," + co[1] + "," + co[2] + "," + co[3] + ")";
    let bg_color = "rgba(" + bco[0] + "," + bco[1] + "," + bco[2] + "," + bco[3] + ")";
    let indicator = {
      "name": name,
      "color": color,
      "bg_color": bg_color
    };
    return indicator;
  }

  takeSnap() {
    var _this = this;

    return (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      if (_this.frontImg == undefined && _this.backImg == undefined) {
        return;
      }

      _this.spinner.show("designSpinner");

      setTimeout(() => {
        _this.selectedSide = 0;

        if (_this.frontImg == undefined) {
          _this.selectedSide = 1;
        }

        _this.cdr.detectChanges();

        let element = document.querySelector("#capture");
        html2canvas__WEBPACK_IMPORTED_MODULE_3___default()(element).then( /*#__PURE__*/function () {
          var _ref = (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (canvas) {
            _this.linkImg = canvas.toDataURL();
            var amt = _this.selectedTemplate.minPrice / 100;

            if (_this.backImg && _this.frontImg) {
              amt += _this.selectedTemplate.extraCost / 100;
            }

            _this.designForm.controls.price.setValue(amt);

            _this.spinner.hide("designSpinner");

            _this.step = 1;
          });

          return function (_x) {
            return _ref.apply(this, arguments);
          };
        }());
      }, 500);
    })();
  }

  createDesign() {
    var _this2 = this;

    return (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      var _a, _b, _c, _d, _e, _f, _g;

      let nameField = _this2.designForm.controls.name;
      let priceField = _this2.designForm.controls.price;
      let descField = _this2.designForm.controls.description;

      if (nameField.invalid) {
        return;
      } else if (priceField.invalid || priceField.value * 100 < _this2.selectedTemplate.minPrice) {
        return;
      } else if (descField.invalid) {
        return;
      }

      _this2.spinner.show("productSpinner");

      let name = nameField.value;
      let price = priceField.value * 100;
      let desc = (_a = descField.value) !== null && _a !== void 0 ? _a : "";

      if (_this2.mode == "create") {
        var displaySide = "front";
        var sides = new Array();
        var images = [{
          img: _this2.linkImg,
          type: "link_"
        }];

        if (_this2.frontImg) {
          sides.push("Front");
          images.push({
            img: _this2.frontImg,
            type: ""
          });
        } else {
          displaySide = "back";
        }

        if (_this2.backImg) {
          sides.push("Back");
          images.push({
            img: _this2.backImg,
            type: "BACK_"
          });
        }

        if (sides.length == 0) {
          sides.push("Front");
          images = [{
            img: _this2.linkImg,
            type: "link_"
          }, {
            img: _this2.frontImg,
            type: ""
          }];
        }

        let mappedData = {
          name: name !== null && name !== void 0 ? name : "Post",
          price: price !== null && price !== void 0 ? price : 2000,
          description: desc !== null && desc !== void 0 ? desc : "",
          productType: (_c = (_b = _this2.selectedTemplate) === null || _b === void 0 ? void 0 : _b.productCode) !== null && _c !== void 0 ? _c : "ATC1000",
          displaySide: displaySide,
          templateColor: (_e = (_d = _this2.selectedColor) === null || _d === void 0 ? void 0 : _d.code) !== null && _e !== void 0 ? _e : "white",
          sides: sides,
          images: images
        };
        yield _this2.loadService.createProduct(mappedData);
      } else {
        let mappedData = {
          name: name !== null && name !== void 0 ? name : "Post",
          price: price !== null && price !== void 0 ? price : 2000,
          description: desc !== null && desc !== void 0 ? desc : "",
          available: true,
          productID: (_g = (_f = _this2.product) === null || _f === void 0 ? void 0 : _f.productID) !== null && _g !== void 0 ? _g : ""
        };
        yield _this2.loadService.updateProduct(mappedData);
      }

      _this2.modalService.dismissAll();

      return _this2.spinner.hide("productSpinner");
    })();
  }

  selectedTheme() {
    var _a, _b, _c, _d, _e, _f;

    let co = (_b = (_a = _globals__WEBPACK_IMPORTED_MODULE_2__.Globals.storeInfo) === null || _a === void 0 ? void 0 : _a.colorStyle) === null || _b === void 0 ? void 0 : _b.btn_color;
    let bco = (_d = (_c = _globals__WEBPACK_IMPORTED_MODULE_2__.Globals.storeInfo) === null || _c === void 0 ? void 0 : _c.colorStyle) === null || _d === void 0 ? void 0 : _d.bg_color;
    let name = (_f = (_e = _globals__WEBPACK_IMPORTED_MODULE_2__.Globals.storeInfo) === null || _e === void 0 ? void 0 : _e.colorStyle) === null || _f === void 0 ? void 0 : _f.name;
    let color = "rgba(" + co[0] + "," + co[1] + "," + co[2] + "," + co[3] + ")";
    let bg_color = "rgba(" + bco[0] + "," + bco[1] + "," + bco[2] + "," + bco[3] + ")";
    var theme = {
      "name": name,
      "color": color,
      "bg_color": bg_color
    };
    return theme;
  }

  shouldShowCanvas() {
    if (this.selectedSide == 0) {
      if (this.frontImg == undefined) {
        return true;
      }

      return false;
    }

    if (this.backImg == undefined) {
      return true;
    }

    return false;
  }

  minimumPrice() {
    var _a, _b;

    return ((_b = (_a = this.selectedTemplate) === null || _a === void 0 ? void 0 : _a.minPrice) !== null && _b !== void 0 ? _b : 0) / 100;
  }

  selectedImage() {
    console.log(this.selectedSide);

    if (this.selectedSide == 0) {
      return this.frontImg;
    }

    return this.backImg;
  }

  moveLeft() {
    var _a, _b;

    if (((_a = this.ds) === null || _a === void 0 ? void 0 : _a.currIndex) != 0) {
      (_b = this.ds) === null || _b === void 0 ? void 0 : _b.moveLeft();
    }
  }

  moveRight() {
    var _a, _b, _c, _d;

    if (((_a = this.ds) === null || _a === void 0 ? void 0 : _a.currIndex) != ((_c = (_b = this.selectedTemplate) === null || _b === void 0 ? void 0 : _b.colors.length) !== null && _c !== void 0 ? _c : 0) - 1) {
      (_d = this.ds) === null || _d === void 0 ? void 0 : _d.moveRight();
    }
  }

  didMove() {
    var _a, _b, _c;

    this.selectedColor = (_a = this.selectedTemplate) === null || _a === void 0 ? void 0 : _a.colors[(_c = (_b = this.ds) === null || _b === void 0 ? void 0 : _b.currIndex) !== null && _c !== void 0 ? _c : 0];
  }

  getTypeImages(template) {
    var len = template.colors.filter(obj => {
      return obj.code == "black";
    });
    var img;

    if (len.length == 0) {
      img = template.colors.filter(obj => {
        return obj.code == "white";
      })[0].img;
    } else {
      img = len[0].img;
    }

    return this.sanitizer.bypassSecurityTrustResourceUrl("data:image/jpeg;base64," + img);
  }

  sideName() {
    var _a;

    var side = this.selectedSide;

    if (side == undefined) {
      side = 0;
    }

    return ("Click To Add " + ((_a = this.selectedTemplate) === null || _a === void 0 ? void 0 : _a.supportedSides[side].name) + " design").toUpperCase();
  }

  cancel() {
    if (this.frontImg == undefined && this.backImg == undefined) {
      this.activeModal.dismiss();
      return;
    }

    this.openPopup();
  }

  openPopup() {
    var _this3 = this;

    if (this.linkImg == undefined) {
      let element = document.querySelector("#capture");
      html2canvas__WEBPACK_IMPORTED_MODULE_3___default()(element).then( /*#__PURE__*/function () {
        var _ref2 = (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* (canvas) {
          const modalRef = _this3.modalService.open(_popup_dialog_popup_dialog_component__WEBPACK_IMPORTED_MODULE_4__.PopupDialogComponent, {
            size: "sm",
            centered: true
          });

          let img = canvas.toDataURL();
          modalRef.componentInstance.yesBtn = "Yes";
          modalRef.componentInstance.noBtn = "No";
          modalRef.componentInstance.message = "You will lose your product.";
          modalRef.componentInstance.title = "ARE YOU SURE?";
          modalRef.componentInstance.img = img;
          let sub = modalRef.dismissed.subscribe(resp => {
            sub.unsubscribe();

            if (resp.Success) {
              _this3.activeModal.dismiss();
            }
          });
        });

        return function (_x2) {
          return _ref2.apply(this, arguments);
        };
      }());
    } else {
      const modalRef = this.modalService.open(_popup_dialog_popup_dialog_component__WEBPACK_IMPORTED_MODULE_4__.PopupDialogComponent, {
        size: "sm",
        centered: true
      });
      modalRef.componentInstance.yesBtn = "Yes";
      modalRef.componentInstance.noBtn = "No";
      modalRef.componentInstance.message = "You will lose your product.";
      modalRef.componentInstance.title = "ARE YOU SURE?";
      modalRef.componentInstance.img = this.linkImg;
      let sub = modalRef.dismissed.subscribe(resp => {
        sub.unsubscribe();

        if (resp.Success) {
          this.activeModal.dismiss();
        }
      });
    }
  }

  fileChangeEvent(event, type) {
    var _a, _b, _c;

    if (type === void 0) {
      type = (_a = this.selectedSide) !== null && _a !== void 0 ? _a : 0;
    }

    this.openCrop = true;
    const modalRef = this.modalService.open(_cropper_cropper_component__WEBPACK_IMPORTED_MODULE_1__.CropperComponent, {
      size: "md"
    });
    modalRef.componentInstance.imageChangedEvent = event;
    var width = 1125;
    var height = 1742;

    if ((_b = this.selectedTemplate) === null || _b === void 0 ? void 0 : _b.supportedSides[type].useReverseAspect) {
      width = 1742;
      height = 1125;
    }

    modalRef.componentInstance.ratio = (_c = this.selectedTemplate) === null || _c === void 0 ? void 0 : _c.supportedSides[type].reversedAspectRatio();
    modalRef.componentInstance.width = width;
    modalRef.componentInstance.height = height;
    let sub = modalRef.dismissed.subscribe(img => {
      sub.unsubscribe();
      this.openCrop = false;
      console.log(img);

      if (img != '0') {
        event.srcElement.value = "";
        event.target.value = "";

        if (type == 0) {
          this.frontImg = img;
        } else {
          this.backImg = img;
        }
      }

      this.cdr.detectChanges();
    });
  }

  getColorSide(side, color) {
    if (side == undefined) {
      side = this.selectedSide;
    }

    if (color == undefined) {
      color = this.selectedColor;
    }

    var img = color.img;

    if (side == 1) {
      img = color.imgBack;
    }

    return this.sanitizer.bypassSecurityTrustResourceUrl("data:image/jpeg;base64," + img);
  }

  getProductImages(type) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;

    if (type == "prev") {
      if (((_a = this.ds) === null || _a === void 0 ? void 0 : _a.currIndex) == 0) {
        return '';
      }

      return this.sanitizer.bypassSecurityTrustResourceUrl("data:image/jpeg;base64," + ((_b = this.selectedTemplate) === null || _b === void 0 ? void 0 : _b.colors[((_d = (_c = this.ds) === null || _c === void 0 ? void 0 : _c.currIndex) !== null && _d !== void 0 ? _d : 1) - 1].img));
    }

    if (((_e = this.ds) === null || _e === void 0 ? void 0 : _e.currIndex) == ((_g = (_f = this.selectedTemplate) === null || _f === void 0 ? void 0 : _f.colors.length) !== null && _g !== void 0 ? _g : 1) - 1) {
      return '';
    }

    return this.sanitizer.bypassSecurityTrustResourceUrl("data:image/jpeg;base64," + ((_h = this.selectedTemplate) === null || _h === void 0 ? void 0 : _h.colors[((_k = (_j = this.ds) === null || _j === void 0 ? void 0 : _j.currIndex) !== null && _k !== void 0 ? _k : 1) + 1].img));
  }

  getProductColor(type) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;

    if (type == "prev") {
      if (((_a = this.ds) === null || _a === void 0 ? void 0 : _a.currIndex) == 0) {
        return '';
      }

      return this.getColor((_b = this.selectedTemplate) === null || _b === void 0 ? void 0 : _b.colors[((_d = (_c = this.ds) === null || _c === void 0 ? void 0 : _c.currIndex) !== null && _d !== void 0 ? _d : 1) - 1]);
    }

    if (((_e = this.ds) === null || _e === void 0 ? void 0 : _e.currIndex) == ((_g = (_f = this.selectedTemplate) === null || _f === void 0 ? void 0 : _f.colors.length) !== null && _g !== void 0 ? _g : 1) - 1) {
      return '';
    }

    return this.getColor((_h = this.selectedTemplate) === null || _h === void 0 ? void 0 : _h.colors[((_k = (_j = this.ds) === null || _j === void 0 ? void 0 : _j.currIndex) !== null && _k !== void 0 ? _k : 1) + 1]);
  }

  nextStep() {
    this.takeSnap();
  }

  moveColors(index) {
    var _a;

    (_a = this.ds) === null || _a === void 0 ? void 0 : _a.moveTo(index);
  }

  moveTo(index) {
    var _a;

    (_a = this.dsp) === null || _a === void 0 ? void 0 : _a.moveTo(index);
  }

  selectSide(side) {
    this.selectedSide = side;
  }

  selectTemplate(template) {
    var _a, _b;

    this.selectedTemplate = template;
    this.selectedColor = template.colors[0];
    this.selectedSide = 0;
    let index = (_b = (_a = this.templates) === null || _a === void 0 ? void 0 : _a.indexOf(template)) !== null && _b !== void 0 ? _b : 0;
    this.moveTo(index);
    this.moveColors(0);
  }

  getColor(color) {
    let r = color.rgb[0] * 255;
    let g = color.rgb[1] * 255;
    let b = color.rgb[2] * 255;
    return "rgb(" + r + "," + g + "," + b + ")";
  }

  templateNum() {
    var _a;

    if (this.selectedTemplate) {
      return (_a = this.templates) === null || _a === void 0 ? void 0 : _a.indexOf(this.selectedTemplate);
    }

    return 0;
  }

  ngOnInit() {
    this.loadTemplate();
  }

  calculateHeight() {
    var _a;

    return this.calculateWidth() * this.selectedTemplate.supportedSides[(_a = this.selectedSide) !== null && _a !== void 0 ? _a : 0].regularAspectRatio();
  }

  calculateWidth() {
    var _a, _b, _c, _d;

    let frame = (_a = document.getElementById("frame")) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
    let width = ((_b = frame === null || frame === void 0 ? void 0 : frame.width) !== null && _b !== void 0 ? _b : 0) + 10;
    return width * ((_d = this.selectedTemplate.supportedSides[(_c = this.selectedSide) !== null && _c !== void 0 ? _c : 0].widthMultiplier) !== null && _d !== void 0 ? _d : 0);
  }

  calculateCenterY() {
    var _a, _b, _c, _d, _e;

    let frame = (_a = document.getElementById("frame")) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect();
    let width = (_b = frame === null || frame === void 0 ? void 0 : frame.width) !== null && _b !== void 0 ? _b : 0;
    let back = (_c = document.getElementById("back")) === null || _c === void 0 ? void 0 : _c.getBoundingClientRect();
    let height = (_d = back === null || back === void 0 ? void 0 : back.height) !== null && _d !== void 0 ? _d : 0;
    return height / 2 + this.selectedTemplate.supportedSides[(_e = this.selectedSide) !== null && _e !== void 0 ? _e : 0].centerYConst * (width / 375) - this.calculateHeight() / 2;
  }

  calculateColor(color) {
    if (color.code == "white") {
      return {
        text_color: "secondary",
        border_color: "#808080"
      };
    }

    return {
      text_color: "light",
      border_color: "#ffffff"
    };
  }

  loadTemplate() {
    this.selectedTemplate = this.templates[0];
    this.selectedColor = this.selectedTemplate.colors[0];
    this.cdr.detectChanges(); // var unsafeImageUrl = this.sanitizer.
    // this.base64Data = this.sanitizer.bypassSecurityTrustUrl(unsafeImageUrl);
  }

}

DesignComponent.ɵfac = function DesignComponent_Factory(t) {
  return new (t || DesignComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_load_service__WEBPACK_IMPORTED_MODULE_5__.LoadService));
};

DesignComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: DesignComponent,
  selectors: [["app-design"]],
  viewQuery: function DesignComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5, ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_12__.DragScrollComponent);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c1, 5, ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_12__.DragScrollComponent);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.ds = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.dsp = _t.first);
    }
  },
  decls: 92,
  vars: 74,
  consts: [["id", "frame", 3, "hidden"], [1, "w-100", 2, "position", "relative", 3, "hidden"], [1, "bg-light", "rounded-top", "d-flex", "justify-content-between", "align-items-center", "px-3", 2, "height", "70px"], ["role", "button", 2, "text-shadow", "2px 2px 4px #42424281", 3, "click"], [1, "text-center", "mt-3"], [1, "fw-bolder"], ["role", "button", 2, "text-decoration", "none", "font-size", "larger"], [1, "fw-normal", 2, "text-decoration", "none", "font-size", "smaller"], [1, "w-100", 2, "position", "absolute"], ["id", "capture", 1, "w-100"], [1, "w-100", "h-100", 3, "indexChanged", "scrollbar-hidden"], ["carousel", ""], ["drag-scroll-item", "", "class", "w-100 bg-light", 4, "ngFor", "ngForOf"], [1, "p-3", "bg-light", "d-flex", "justify-content-between", "align-items-center", "rounded-bottom"], [1, "d-flex", "justify-content-between", "align-items-center"], ["role", "button", 1, "pt-1", 2, "text-shadow", "2px 2px 4px #42424281", 3, "click"], [1, "fw-bolder", 3, "hidden"], [1, "p-1", "rounded-circle", "shadow", 3, "hidden"], [1, "rounded-circle", "img-responsive", "h-100", "w-100", "p-1", 2, "object-fit", "contain", "background-color", "#cdf4fc", 3, "src"], [2, "width", "40px", "height", "40px", 3, "hidden"], [1, "h-100", "d-flex", "justify-content-center", "align-items-center"], [1, "rounded-pill", "px-3", "py-3", "d-flex", "align-items-center", "justify-content-center", "shadow", 2, "background-color", "#57b846"], ["role", "button", 1, "text-light", "d-flex", "align-items-center", "justify-content-center", 2, "font-size", "18px", "text-decoration", "none", 3, "click"], [1, "ms-1"], ["size", "medium", 3, "bdColor", "color", "type", "fullScreen", "name", "disableAnimation"], [1, "mt-5"], [1, "d-flex", "justify-content-between", "w-100", 2, "position", "absolute", "pointer-events", "none"], [1, "px-2", "py-2", 2, "overflow", "scroll"], ["role", "button", 1, "d-flex", "align-items-center", "justify-content-center", 2, "font-size", "smaller", "width", "60px", "text-decoration", "none"], [1, "fw-bolder", "text-center", "text-dark"], ["class", "mx-auto mb-2 p-1 rounded-circle", "style", "pointer-events: auto;", 3, "productTypeBtn", "selected", 4, "ngFor", "ngForOf"], ["class", "mx-auto mb-2 p-1 rounded", "style", "pointer-events: auto;", 3, "productTypeBtn", "selected", 4, "ngFor", "ngForOf"], [1, "w-100", "rounded", 2, "background-color", "#e6e6e6", "position", "relative", 3, "hidden"], [1, "p-0", "pt-0", "w-100"], [1, "container-contact1", "rounded-bottom", "w-100", "h-100", "p-2", "d-flex", "justify-content-center"], [1, "w-100", "py-1", "d-flex", "justify-content-center", 2, "background-color", "#cdf4fc"], [1, "contact1-pic"], ["alt", "IMG", 3, "src"], [1, "mt-4", "px-3", "px-md-5", "px-lg-5", "w-100", "contact1-form", 3, "formGroup"], [1, "contact1-form-title", "mb-4", "fw-bolder", 2, "font-size", "20px"], [1, "wrap-input1", "w-100", "mb-3"], ["type", "text", "name", "name", "formControlName", "name", "placeholder", "Name", 1, "input1", "w-100", "py-3", "px-3", "px-lg-4", "px-md-4", "fw-bold"], [1, "shadow-input1", "py-3", "px-2", "px-lg-4", "px-md-4"], ["currencyMask", "", "placeholder", "Price", "formControlName", "price", 1, "input1", "py-3", "px-3", "px-lg-4", "px-md-4", "fw-bold", 3, "options"], ["name", "message", "placeholder", "Description (Optional)", "formControlName", "description", 1, "input1", "p-3", "p-lg-4", "p-md-4", "fw-bold"], [1, "shadow-input1", "p-2", "p-lg-4", "p-md-4"], [1, "container-contact1-form-btn", "mb-4", "w-100"], [1, "contact1-form-btn", 3, "click"], ["class", "my-auto p-3 px-4 fw-bolder", 4, "ngIf"], ["drag-scroll-item", "", 1, "w-100", "bg-light"], ["id", "back", 2, "background-color", "#cdf4fc", "position", "relative", "aspect-ratio", "1/1"], [1, "w-100", "h-100", "d-flex", "justify-content-center", 2, "position", "absolute"], ["role", "button", 1, "d-flex", "align-items-center", "justify-content-center", 2, "position", "absolute", "pointer-events", "auto", "text-decoration", "none", 3, "click"], [2, "pointer-events", "none", 3, "hidden"], ["type", "file", 2, "display", "none", 3, "change"], ["fileBackground", ""], [1, "w-100", "h-100", 2, "object-fit", "contain", "pointer-events", "auto", 3, "hidden", "src"], ["role", "button"], ["alt", "ok", "onerror", "this.src='https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Resources%2Flink_empty.jpeg?alt=media';", 1, "w-100", "h-100", 2, "object-fit", "contain", "aspect-ratio", "1/1", 3, "src"], [1, "mx-auto", "mb-2", "p-1", "rounded-circle", 2, "pointer-events", "auto"], ["role", "button", 2, "pointer-events", "auto", 3, "click"], ["alt", "ok", "onerror", "this.src='https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Resources%2Flink_empty.jpeg?alt=media';", 1, "rounded-circle", "img-responsive", "h-100", "w-100", 2, "object-fit", "contain", "background-color", "#cdf4fc", 3, "src"], [1, "mx-auto", "mb-2", "p-1", "rounded", 2, "pointer-events", "auto"], ["alt", "ok", "onerror", "this.src='https://firebasestorage.googleapis.com/v0/b/clothingapp-ed125.appspot.com/o/Resources%2Flink_empty.jpeg?alt=media';", 1, "img-responsive", "h-100", "w-100", 2, "object-fit", "contain", "background-color", "#cdf4fc", 3, "src"], [1, "my-auto", "p-3", "px-4", "fw-bolder"]],
  template: function DesignComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DesignComponent_Template_a_click_3_listener() {
        return ctx.cancel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "highlight_off");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "h4", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "a", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "h5", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "drag-scroll", 10, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](17, DesignComponent_div_17_Template, 11, 18, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DesignComponent_Template_a_click_21_listener() {
        return ctx.moveLeft();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "mat-icon", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "arrow_back_ios");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DesignComponent_Template_a_click_25_listener() {
        return ctx.moveLeft();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](26, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](27, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](29, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "a", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DesignComponent_Template_a_click_32_listener() {
        return ctx.nextStep();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, " Done ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "mat-icon", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "check_circle");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "div", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DesignComponent_Template_a_click_38_listener() {
        return ctx.moveRight();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](39, "img", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "a", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DesignComponent_Template_a_click_40_listener() {
        return ctx.moveRight();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "mat-icon", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](42, "arrow_forward_ios");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](43, "div", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](45, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "ngx-spinner", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "h3", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48, "GENERATING PRODUCT...");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "div", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "a", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "p", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53, " TYPE ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](55, DesignComponent_div_55_Template, 3, 5, "div", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "div", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "a", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "p", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](59, " SIDE ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](61, DesignComponent_div_61_Template, 3, 5, "div", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "div", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DesignComponent_Template_a_click_64_listener() {
        return ctx.cancel();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](66, "highlight_off");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](67, "mat-icon");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](68, "div", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "div", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "div", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "div", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](72, "img", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "form", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "span", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](75, " PRODUCT DETAILS ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](77, "input", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](78, "span", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](80, "input", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](81, "span", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](82, "div", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](83, "textarea", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](84, "span", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](85, "div", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](86, "button", 47);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function DesignComponent_Template_button_click_86_listener() {
        return ctx.createDesign();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](87, DesignComponent_span_87_Template, 2, 0, "span", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](88, DesignComponent_span_88_Template, 2, 0, "span", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](89, "ngx-spinner", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](90, "h3", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](91, "UPLOADING PRODUCT...");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      let tmp_37_0;
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx.openCrop);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx.step != 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx.selectedTemplate == null ? null : ctx.selectedTemplate.templateDisplayName, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.selectedColor == null ? null : ctx.selectedColor.display);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("indexChanged", ctx.didMove())("scrollbar-hidden", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.templates[ctx.templateNum()].colors);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("color", ctx.getProductColor("prev"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", (ctx.ds == null ? null : ctx.ds.currIndex) == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-color", ctx.getProductColor("prev"))("width", 40, "px")("height", 40, "px");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", (ctx.ds == null ? null : ctx.ds.currIndex) == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx.getProductImages("prev"), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", (ctx.ds == null ? null : ctx.ds.currIndex) != 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", (ctx.ds == null ? null : ctx.ds.currIndex) != 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("height", 40, "px");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("background-color", ctx.getProductColor("next"))("width", 40, "px")("height", 40, "px");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", (ctx.ds == null ? null : ctx.ds.currIndex) == (ctx.selectedTemplate == null ? null : ctx.selectedTemplate.colors).length - 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx.getProductImages("next"), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("color", ctx.getProductColor("next"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", (ctx.ds == null ? null : ctx.ds.currIndex) == (ctx.selectedTemplate == null ? null : ctx.selectedTemplate.colors).length - 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", (ctx.ds == null ? null : ctx.ds.currIndex) != (ctx.selectedTemplate == null ? null : ctx.selectedTemplate.colors).length - 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", (ctx.ds == null ? null : ctx.ds.currIndex) != (ctx.selectedTemplate == null ? null : ctx.selectedTemplate.colors).length - 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("color", ctx.selectedIndicator().color);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("bdColor", ctx.selectedIndicator().bg_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("color", ctx.selectedIndicator().color);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("type", ctx.selectedIndicator().name);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("fullScreen", false)("name", "designSpinner")("disableAnimation", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("font-family", ctx.storeInfo().fontName);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("height", ctx.myInnerHeight(), "px");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.templates);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("height", ctx.myInnerHeight(), "px");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", (tmp_37_0 = ctx.selectedTemplate == null ? null : ctx.selectedTemplate.supportedSides) !== null && tmp_37_0 !== undefined ? tmp_37_0 : _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](73, _c2));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hidden", ctx.step == 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx.linkImg, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.designForm);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("options", ctx.customCurrencyMaskConfig);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.mode == "create");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.mode == "edit");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("color", ctx.selectedIndicator().color);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("bdColor", ctx.selectedIndicator().bg_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("color", ctx.selectedIndicator().color);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("type", ctx.selectedIndicator().name);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("fullScreen", false)("name", "productSpinner")("disableAnimation", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleProp"]("font-family", ctx.storeInfo().fontName);
    }
  },
  directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_13__.MatIcon, ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_12__.DragScrollComponent, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgForOf, ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, ngx_currency__WEBPACK_IMPORTED_MODULE_7__.CurrencyMaskDirective, _angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, ngx_drag_scroll__WEBPACK_IMPORTED_MODULE_12__.DragScrollItemDirective],
  styles: ["@charset \"UTF-8\";\n\n.selected[_ngcontent-%COMP%]{\n\n    width: 45px;\n    height: 45px;\n    background-color: #4298f5;\n}\n\n.productTypeBtn[_ngcontent-%COMP%]{\n    width: 50px;\n    height: 50px;\n    background-color: white;\n}\n\n.noDesign[_ngcontent-%COMP%]{\n    border-style: solid;\n    border-width: 2px;\n    font-size:small;\n    border-color: rgb(255, 255, 255);\n}\n\n\n\n.animated[_ngcontent-%COMP%] {\n  animation-duration: 1s;\n  animation-fill-mode: both;\n}\n\n.animated.infinite[_ngcontent-%COMP%] {\n  animation-iteration-count: infinite;\n}\n\n.animated.hinge[_ngcontent-%COMP%] {\n  animation-duration: 2s;\n}\n\n.animated.flipOutX[_ngcontent-%COMP%], .animated.flipOutY[_ngcontent-%COMP%], .animated.bounceIn[_ngcontent-%COMP%], .animated.bounceOut[_ngcontent-%COMP%] {\n  animation-duration: .75s;\n}\n\n@keyframes bounce {\n  from, 20%, 53%, 80%, to {\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    transform: translate3d(0,0,0);\n  }\n\n  40%, 43% {\n    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    transform: translate3d(0, -30px, 0);\n  }\n\n  70% {\n    animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n    transform: translate3d(0, -15px, 0);\n  }\n\n  90% {\n    transform: translate3d(0,-4px,0);\n  }\n}\n\n.bounce[_ngcontent-%COMP%] {\n  animation-name: bounce;\n  transform-origin: center bottom;\n}\n\n@keyframes flash {\n  from, 50%, to {\n    opacity: 1;\n  }\n\n  25%, 75% {\n    opacity: 0;\n  }\n}\n\n.flash[_ngcontent-%COMP%] {\n  animation-name: flash;\n}\n\n\n\n@keyframes pulse {\n  from {\n    transform: scale3d(1, 1, 1);\n  }\n\n  50% {\n    transform: scale3d(1.05, 1.05, 1.05);\n  }\n\n  to {\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n.pulse[_ngcontent-%COMP%] {\n  animation-name: pulse;\n}\n\n@keyframes rubberBand {\n  from {\n    transform: scale3d(1, 1, 1);\n  }\n\n  30% {\n    transform: scale3d(1.25, 0.75, 1);\n  }\n\n  40% {\n    transform: scale3d(0.75, 1.25, 1);\n  }\n\n  50% {\n    transform: scale3d(1.15, 0.85, 1);\n  }\n\n  65% {\n    transform: scale3d(.95, 1.05, 1);\n  }\n\n  75% {\n    transform: scale3d(1.05, .95, 1);\n  }\n\n  to {\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n.rubberBand[_ngcontent-%COMP%] {\n  animation-name: rubberBand;\n}\n\n@keyframes shake {\n  from, to {\n    transform: translate3d(0, 0, 0);\n  }\n\n  10%, 30%, 50%, 70%, 90% {\n    transform: translate3d(-10px, 0, 0);\n  }\n\n  20%, 40%, 60%, 80% {\n    transform: translate3d(10px, 0, 0);\n  }\n}\n\n.shake[_ngcontent-%COMP%] {\n  animation-name: shake;\n}\n\n@keyframes headShake {\n  0% {\n    transform: translateX(0);\n  }\n\n  6.5% {\n    transform: translateX(-6px) rotateY(-9deg);\n  }\n\n  18.5% {\n    transform: translateX(5px) rotateY(7deg);\n  }\n\n  31.5% {\n    transform: translateX(-3px) rotateY(-5deg);\n  }\n\n  43.5% {\n    transform: translateX(2px) rotateY(3deg);\n  }\n\n  50% {\n    transform: translateX(0);\n  }\n}\n\n.headShake[_ngcontent-%COMP%] {\n  animation-timing-function: ease-in-out;\n  animation-name: headShake;\n}\n\n@keyframes swing {\n  20% {\n    transform: rotate3d(0, 0, 1, 15deg);\n  }\n\n  40% {\n    transform: rotate3d(0, 0, 1, -10deg);\n  }\n\n  60% {\n    transform: rotate3d(0, 0, 1, 5deg);\n  }\n\n  80% {\n    transform: rotate3d(0, 0, 1, -5deg);\n  }\n\n  to {\n    transform: rotate3d(0, 0, 1, 0deg);\n  }\n}\n\n.swing[_ngcontent-%COMP%] {\n  transform-origin: top center;\n  animation-name: swing;\n}\n\n@keyframes tada {\n  from {\n    transform: scale3d(1, 1, 1);\n  }\n\n  10%, 20% {\n    transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);\n  }\n\n  30%, 50%, 70%, 90% {\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n  }\n\n  40%, 60%, 80% {\n    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n  }\n\n  to {\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n.tada[_ngcontent-%COMP%] {\n  animation-name: tada;\n}\n\n\n\n@keyframes wobble {\n  from {\n    transform: none;\n  }\n\n  15% {\n    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\n  }\n\n  30% {\n    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\n  }\n\n  45% {\n    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\n  }\n\n  60% {\n    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\n  }\n\n  75% {\n    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\n  }\n\n  to {\n    transform: none;\n  }\n}\n\n.wobble[_ngcontent-%COMP%] {\n  animation-name: wobble;\n}\n\n@keyframes jello {\n  from, 11.1%, to {\n    transform: none;\n  }\n\n  22.2% {\n    transform: skewX(-12.5deg) skewY(-12.5deg);\n  }\n\n  33.3% {\n    transform: skewX(6.25deg) skewY(6.25deg);\n  }\n\n  44.4% {\n    transform: skewX(-3.125deg) skewY(-3.125deg);\n  }\n\n  55.5% {\n    transform: skewX(1.5625deg) skewY(1.5625deg);\n  }\n\n  66.6% {\n    transform: skewX(-0.78125deg) skewY(-0.78125deg);\n  }\n\n  77.7% {\n    transform: skewX(0.390625deg) skewY(0.390625deg);\n  }\n\n  88.8% {\n    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\n  }\n}\n\n.jello[_ngcontent-%COMP%] {\n  animation-name: jello;\n  transform-origin: center;\n}\n\n@keyframes bounceIn {\n  from, 20%, 40%, 60%, 80%, to {\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  0% {\n    opacity: 0;\n    transform: scale3d(.3, .3, .3);\n  }\n\n  20% {\n    transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  40% {\n    transform: scale3d(.9, .9, .9);\n  }\n\n  60% {\n    opacity: 1;\n    transform: scale3d(1.03, 1.03, 1.03);\n  }\n\n  80% {\n    transform: scale3d(.97, .97, .97);\n  }\n\n  to {\n    opacity: 1;\n    transform: scale3d(1, 1, 1);\n  }\n}\n\n.bounceIn[_ngcontent-%COMP%] {\n  animation-name: bounceIn;\n}\n\n@keyframes bounceInDown {\n  from, 60%, 75%, 90%, to {\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  0% {\n    opacity: 0;\n    transform: translate3d(0, -3000px, 0);\n  }\n\n  60% {\n    opacity: 1;\n    transform: translate3d(0, 25px, 0);\n  }\n\n  75% {\n    transform: translate3d(0, -10px, 0);\n  }\n\n  90% {\n    transform: translate3d(0, 5px, 0);\n  }\n\n  to {\n    transform: none;\n  }\n}\n\n.bounceInDown[_ngcontent-%COMP%] {\n  animation-name: bounceInDown;\n}\n\n@keyframes bounceInLeft {\n  from, 60%, 75%, 90%, to {\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  0% {\n    opacity: 0;\n    transform: translate3d(-3000px, 0, 0);\n  }\n\n  60% {\n    opacity: 1;\n    transform: translate3d(25px, 0, 0);\n  }\n\n  75% {\n    transform: translate3d(-10px, 0, 0);\n  }\n\n  90% {\n    transform: translate3d(5px, 0, 0);\n  }\n\n  to {\n    transform: none;\n  }\n}\n\n.bounceInLeft[_ngcontent-%COMP%] {\n  animation-name: bounceInLeft;\n}\n\n@keyframes bounceInRight {\n  from, 60%, 75%, 90%, to {\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  from {\n    opacity: 0;\n    transform: translate3d(3000px, 0, 0);\n  }\n\n  60% {\n    opacity: 1;\n    transform: translate3d(-25px, 0, 0);\n  }\n\n  75% {\n    transform: translate3d(10px, 0, 0);\n  }\n\n  90% {\n    transform: translate3d(-5px, 0, 0);\n  }\n\n  to {\n    transform: none;\n  }\n}\n\n.bounceInRight[_ngcontent-%COMP%] {\n  animation-name: bounceInRight;\n}\n\n@keyframes bounceInUp {\n  from, 60%, 75%, 90%, to {\n    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n  }\n\n  from {\n    opacity: 0;\n    transform: translate3d(0, 3000px, 0);\n  }\n\n  60% {\n    opacity: 1;\n    transform: translate3d(0, -20px, 0);\n  }\n\n  75% {\n    transform: translate3d(0, 10px, 0);\n  }\n\n  90% {\n    transform: translate3d(0, -5px, 0);\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.bounceInUp[_ngcontent-%COMP%] {\n  animation-name: bounceInUp;\n}\n\n@keyframes bounceOut {\n  20% {\n    transform: scale3d(.9, .9, .9);\n  }\n\n  50%, 55% {\n    opacity: 1;\n    transform: scale3d(1.1, 1.1, 1.1);\n  }\n\n  to {\n    opacity: 0;\n    transform: scale3d(.3, .3, .3);\n  }\n}\n\n.bounceOut[_ngcontent-%COMP%] {\n  animation-name: bounceOut;\n}\n\n@keyframes bounceOutDown {\n  20% {\n    transform: translate3d(0, 10px, 0);\n  }\n\n  40%, 45% {\n    opacity: 1;\n    transform: translate3d(0, -20px, 0);\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, 2000px, 0);\n  }\n}\n\n.bounceOutDown[_ngcontent-%COMP%] {\n  animation-name: bounceOutDown;\n}\n\n@keyframes bounceOutLeft {\n  20% {\n    opacity: 1;\n    transform: translate3d(20px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(-2000px, 0, 0);\n  }\n}\n\n.bounceOutLeft[_ngcontent-%COMP%] {\n  animation-name: bounceOutLeft;\n}\n\n@keyframes bounceOutRight {\n  20% {\n    opacity: 1;\n    transform: translate3d(-20px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(2000px, 0, 0);\n  }\n}\n\n.bounceOutRight[_ngcontent-%COMP%] {\n  animation-name: bounceOutRight;\n}\n\n@keyframes bounceOutUp {\n  20% {\n    transform: translate3d(0, -10px, 0);\n  }\n\n  40%, 45% {\n    opacity: 1;\n    transform: translate3d(0, 20px, 0);\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, -2000px, 0);\n  }\n}\n\n.bounceOutUp[_ngcontent-%COMP%] {\n  animation-name: bounceOutUp;\n}\n\n@keyframes fadeIn {\n  from {\n    opacity: 0;\n  }\n\n  to {\n    opacity: 1;\n  }\n}\n\n.fadeIn[_ngcontent-%COMP%] {\n  animation-name: fadeIn;\n}\n\n@keyframes fadeInDown {\n  from {\n    opacity: 0;\n    transform: translate3d(0, -100%, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n\n.fadeInDown[_ngcontent-%COMP%] {\n  animation-name: fadeInDown;\n}\n\n@keyframes fadeInDownBig {\n  from {\n    opacity: 0;\n    transform: translate3d(0, -2000px, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n\n.fadeInDownBig[_ngcontent-%COMP%] {\n  animation-name: fadeInDownBig;\n}\n\n@keyframes fadeInLeft {\n  from {\n    opacity: 0;\n    transform: translate3d(-100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n\n.fadeInLeft[_ngcontent-%COMP%] {\n  animation-name: fadeInLeft;\n}\n\n@keyframes fadeInLeftBig {\n  from {\n    opacity: 0;\n    transform: translate3d(-2000px, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n\n.fadeInLeftBig[_ngcontent-%COMP%] {\n  animation-name: fadeInLeftBig;\n}\n\n@keyframes fadeInRight {\n  from {\n    opacity: 0;\n    transform: translate3d(100%, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n\n.fadeInRight[_ngcontent-%COMP%] {\n  animation-name: fadeInRight;\n}\n\n@keyframes fadeInRightBig {\n  from {\n    opacity: 0;\n    transform: translate3d(2000px, 0, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n\n.fadeInRightBig[_ngcontent-%COMP%] {\n  animation-name: fadeInRightBig;\n}\n\n@keyframes fadeInUp {\n  from {\n    opacity: 0;\n    transform: translate3d(0, 100%, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n\n.fadeInUp[_ngcontent-%COMP%] {\n  animation-name: fadeInUp;\n}\n\n@keyframes fadeInUpBig {\n  from {\n    opacity: 0;\n    transform: translate3d(0, 2000px, 0);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n\n.fadeInUpBig[_ngcontent-%COMP%] {\n  animation-name: fadeInUpBig;\n}\n\n@keyframes fadeOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n  }\n}\n\n.fadeOut[_ngcontent-%COMP%] {\n  animation-name: fadeOut;\n}\n\n@keyframes fadeOutDown {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, 100%, 0);\n  }\n}\n\n.fadeOutDown[_ngcontent-%COMP%] {\n  animation-name: fadeOutDown;\n}\n\n@keyframes fadeOutDownBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, 2000px, 0);\n  }\n}\n\n.fadeOutDownBig[_ngcontent-%COMP%] {\n  animation-name: fadeOutDownBig;\n}\n\n@keyframes fadeOutLeft {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n\n.fadeOutLeft[_ngcontent-%COMP%] {\n  animation-name: fadeOutLeft;\n}\n\n@keyframes fadeOutLeftBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(-2000px, 0, 0);\n  }\n}\n\n.fadeOutLeftBig[_ngcontent-%COMP%] {\n  animation-name: fadeOutLeftBig;\n}\n\n@keyframes fadeOutRight {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n.fadeOutRight[_ngcontent-%COMP%] {\n  animation-name: fadeOutRight;\n}\n\n@keyframes fadeOutRightBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(2000px, 0, 0);\n  }\n}\n\n.fadeOutRightBig[_ngcontent-%COMP%] {\n  animation-name: fadeOutRightBig;\n}\n\n@keyframes fadeOutUp {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, -100%, 0);\n  }\n}\n\n.fadeOutUp[_ngcontent-%COMP%] {\n  animation-name: fadeOutUp;\n}\n\n@keyframes fadeOutUpBig {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(0, -2000px, 0);\n  }\n}\n\n.fadeOutUpBig[_ngcontent-%COMP%] {\n  animation-name: fadeOutUpBig;\n}\n\n@keyframes flip {\n  from {\n    transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n    animation-timing-function: ease-out;\n  }\n\n  40% {\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n    animation-timing-function: ease-out;\n  }\n\n  50% {\n    transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n    animation-timing-function: ease-in;\n  }\n\n  80% {\n    transform: perspective(400px) scale3d(.95, .95, .95);\n    animation-timing-function: ease-in;\n  }\n\n  to {\n    transform: perspective(400px);\n    animation-timing-function: ease-in;\n  }\n}\n\n.animated.flip[_ngcontent-%COMP%] {\n  -webkit-backface-visibility: visible;\n  backface-visibility: visible;\n  animation-name: flip;\n}\n\n@keyframes flipInX {\n  from {\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    animation-timing-function: ease-in;\n    opacity: 0;\n  }\n\n  40% {\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    animation-timing-function: ease-in;\n  }\n\n  60% {\n    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n    opacity: 1;\n  }\n\n  80% {\n    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n  }\n\n  to {\n    transform: perspective(400px);\n  }\n}\n\n.flipInX[_ngcontent-%COMP%] {\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  animation-name: flipInX;\n}\n\n@keyframes flipInY {\n  from {\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    animation-timing-function: ease-in;\n    opacity: 0;\n  }\n\n  40% {\n    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n    animation-timing-function: ease-in;\n  }\n\n  60% {\n    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n    opacity: 1;\n  }\n\n  80% {\n    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n  }\n\n  to {\n    transform: perspective(400px);\n  }\n}\n\n.flipInY[_ngcontent-%COMP%] {\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  animation-name: flipInY;\n}\n\n@keyframes flipOutX {\n  from {\n    transform: perspective(400px);\n  }\n\n  30% {\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n    opacity: 1;\n  }\n\n  to {\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n    opacity: 0;\n  }\n}\n\n.flipOutX[_ngcontent-%COMP%] {\n  animation-name: flipOutX;\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n}\n\n@keyframes flipOutY {\n  from {\n    transform: perspective(400px);\n  }\n\n  30% {\n    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n    opacity: 1;\n  }\n\n  to {\n    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n    opacity: 0;\n  }\n}\n\n.flipOutY[_ngcontent-%COMP%] {\n  -webkit-backface-visibility: visible !important;\n  backface-visibility: visible !important;\n  animation-name: flipOutY;\n}\n\n@keyframes lightSpeedIn {\n  from {\n    transform: translate3d(100%, 0, 0) skewX(-30deg);\n    opacity: 0;\n  }\n\n  60% {\n    transform: skewX(20deg);\n    opacity: 1;\n  }\n\n  80% {\n    transform: skewX(-5deg);\n    opacity: 1;\n  }\n\n  to {\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.lightSpeedIn[_ngcontent-%COMP%] {\n  animation-name: lightSpeedIn;\n  animation-timing-function: ease-out;\n}\n\n@keyframes lightSpeedOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    transform: translate3d(100%, 0, 0) skewX(30deg);\n    opacity: 0;\n  }\n}\n\n.lightSpeedOut[_ngcontent-%COMP%] {\n  animation-name: lightSpeedOut;\n  animation-timing-function: ease-in;\n}\n\n@keyframes rotateIn {\n  from {\n    transform-origin: center;\n    transform: rotate3d(0, 0, 1, -200deg);\n    opacity: 0;\n  }\n\n  to {\n    transform-origin: center;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.rotateIn[_ngcontent-%COMP%] {\n  animation-name: rotateIn;\n}\n\n@keyframes rotateInDownLeft {\n  from {\n    transform-origin: left bottom;\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n\n  to {\n    transform-origin: left bottom;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.rotateInDownLeft[_ngcontent-%COMP%] {\n  animation-name: rotateInDownLeft;\n}\n\n@keyframes rotateInDownRight {\n  from {\n    transform-origin: right bottom;\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n\n  to {\n    transform-origin: right bottom;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.rotateInDownRight[_ngcontent-%COMP%] {\n  animation-name: rotateInDownRight;\n}\n\n@keyframes rotateInUpLeft {\n  from {\n    transform-origin: left bottom;\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n\n  to {\n    transform-origin: left bottom;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.rotateInUpLeft[_ngcontent-%COMP%] {\n  animation-name: rotateInUpLeft;\n}\n\n@keyframes rotateInUpRight {\n  from {\n    transform-origin: right bottom;\n    transform: rotate3d(0, 0, 1, -90deg);\n    opacity: 0;\n  }\n\n  to {\n    transform-origin: right bottom;\n    transform: none;\n    opacity: 1;\n  }\n}\n\n.rotateInUpRight[_ngcontent-%COMP%] {\n  animation-name: rotateInUpRight;\n}\n\n@keyframes rotateOut {\n  from {\n    transform-origin: center;\n    opacity: 1;\n  }\n\n  to {\n    transform-origin: center;\n    transform: rotate3d(0, 0, 1, 200deg);\n    opacity: 0;\n  }\n}\n\n.rotateOut[_ngcontent-%COMP%] {\n  animation-name: rotateOut;\n}\n\n@keyframes rotateOutDownLeft {\n  from {\n    transform-origin: left bottom;\n    opacity: 1;\n  }\n\n  to {\n    transform-origin: left bottom;\n    transform: rotate3d(0, 0, 1, 45deg);\n    opacity: 0;\n  }\n}\n\n.rotateOutDownLeft[_ngcontent-%COMP%] {\n  animation-name: rotateOutDownLeft;\n}\n\n@keyframes rotateOutDownRight {\n  from {\n    transform-origin: right bottom;\n    opacity: 1;\n  }\n\n  to {\n    transform-origin: right bottom;\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n}\n\n.rotateOutDownRight[_ngcontent-%COMP%] {\n  animation-name: rotateOutDownRight;\n}\n\n@keyframes rotateOutUpLeft {\n  from {\n    transform-origin: left bottom;\n    opacity: 1;\n  }\n\n  to {\n    transform-origin: left bottom;\n    transform: rotate3d(0, 0, 1, -45deg);\n    opacity: 0;\n  }\n}\n\n.rotateOutUpLeft[_ngcontent-%COMP%] {\n  animation-name: rotateOutUpLeft;\n}\n\n@keyframes rotateOutUpRight {\n  from {\n    transform-origin: right bottom;\n    opacity: 1;\n  }\n\n  to {\n    transform-origin: right bottom;\n    transform: rotate3d(0, 0, 1, 90deg);\n    opacity: 0;\n  }\n}\n\n.rotateOutUpRight[_ngcontent-%COMP%] {\n  animation-name: rotateOutUpRight;\n}\n\n@keyframes hinge {\n  0% {\n    transform-origin: top left;\n    animation-timing-function: ease-in-out;\n  }\n\n  20%, 60% {\n    transform: rotate3d(0, 0, 1, 80deg);\n    transform-origin: top left;\n    animation-timing-function: ease-in-out;\n  }\n\n  40%, 80% {\n    transform: rotate3d(0, 0, 1, 60deg);\n    transform-origin: top left;\n    animation-timing-function: ease-in-out;\n    opacity: 1;\n  }\n\n  to {\n    transform: translate3d(0, 700px, 0);\n    opacity: 0;\n  }\n}\n\n.hinge[_ngcontent-%COMP%] {\n  animation-name: hinge;\n}\n\n@keyframes jackInTheBox {\n  from {\n    opacity: 0;\n    transform: scale(0.1) rotate(30deg);\n    transform-origin: center bottom;\n  }\n\n  50% {\n    transform: rotate(-10deg);\n  }\n\n  70% {\n    transform: rotate(3deg);\n  }\n\n  to {\n    opacity: 1;\n    transform: scale(1);\n  }\n}\n\n.jackInTheBox[_ngcontent-%COMP%] {\n  animation-name: jackInTheBox;\n}\n\n\n\n@keyframes rollIn {\n  from {\n    opacity: 0;\n    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n  }\n\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n\n.rollIn[_ngcontent-%COMP%] {\n  animation-name: rollIn;\n}\n\n\n\n@keyframes rollOut {\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\n  }\n}\n\n.rollOut[_ngcontent-%COMP%] {\n  animation-name: rollOut;\n}\n\n@keyframes zoomIn {\n  from {\n    opacity: 0;\n    transform: scale3d(.3, .3, .3);\n  }\n\n  50% {\n    opacity: 1;\n  }\n}\n\n.zoomIn[_ngcontent-%COMP%] {\n  animation-name: zoomIn;\n}\n\n@keyframes zoomInDown {\n  from {\n    opacity: 0;\n    transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n.zoomInDown[_ngcontent-%COMP%] {\n  animation-name: zoomInDown;\n}\n\n@keyframes zoomInLeft {\n  from {\n    opacity: 0;\n    transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n.zoomInLeft[_ngcontent-%COMP%] {\n  animation-name: zoomInLeft;\n}\n\n@keyframes zoomInRight {\n  from {\n    opacity: 0;\n    transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n.zoomInRight[_ngcontent-%COMP%] {\n  animation-name: zoomInRight;\n}\n\n@keyframes zoomInUp {\n  from {\n    opacity: 0;\n    transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  60% {\n    opacity: 1;\n    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n.zoomInUp[_ngcontent-%COMP%] {\n  animation-name: zoomInUp;\n}\n\n@keyframes zoomOut {\n  from {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0;\n    transform: scale3d(.3, .3, .3);\n  }\n\n  to {\n    opacity: 0;\n  }\n}\n\n.zoomOut[_ngcontent-%COMP%] {\n  animation-name: zoomOut;\n}\n\n@keyframes zoomOutDown {\n  40% {\n    opacity: 1;\n    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  to {\n    opacity: 0;\n    transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);\n    transform-origin: center bottom;\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n.zoomOutDown[_ngcontent-%COMP%] {\n  animation-name: zoomOutDown;\n}\n\n@keyframes zoomOutLeft {\n  40% {\n    opacity: 1;\n    transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    transform: scale(.1) translate3d(-2000px, 0, 0);\n    transform-origin: left center;\n  }\n}\n\n.zoomOutLeft[_ngcontent-%COMP%] {\n  animation-name: zoomOutLeft;\n}\n\n@keyframes zoomOutRight {\n  40% {\n    opacity: 1;\n    transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);\n  }\n\n  to {\n    opacity: 0;\n    transform: scale(.1) translate3d(2000px, 0, 0);\n    transform-origin: right center;\n  }\n}\n\n.zoomOutRight[_ngcontent-%COMP%] {\n  animation-name: zoomOutRight;\n}\n\n@keyframes zoomOutUp {\n  40% {\n    opacity: 1;\n    transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  to {\n    opacity: 0;\n    transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);\n    transform-origin: center bottom;\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n\n.zoomOutUp[_ngcontent-%COMP%] {\n  animation-name: zoomOutUp;\n}\n\n@keyframes slideInDown {\n  from {\n    transform: translate3d(0, -100%, 0);\n    visibility: visible;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.slideInDown[_ngcontent-%COMP%] {\n  animation-name: slideInDown;\n}\n\n@keyframes slideInLeft {\n  from {\n    transform: translate3d(-100%, 0, 0);\n    visibility: visible;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.slideInLeft[_ngcontent-%COMP%] {\n  animation-name: slideInLeft;\n}\n\n@keyframes slideInRight {\n  from {\n    transform: translate3d(100%, 0, 0);\n    visibility: visible;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.slideInRight[_ngcontent-%COMP%] {\n  animation-name: slideInRight;\n}\n\n@keyframes slideInUp {\n  from {\n    transform: translate3d(0, 100%, 0);\n    visibility: visible;\n  }\n\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n}\n\n.slideInUp[_ngcontent-%COMP%] {\n  animation-name: slideInUp;\n}\n\n@keyframes slideOutDown {\n  from {\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    transform: translate3d(0, 100%, 0);\n  }\n}\n\n.slideOutDown[_ngcontent-%COMP%] {\n  animation-name: slideOutDown;\n}\n\n@keyframes slideOutLeft {\n  from {\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    transform: translate3d(-100%, 0, 0);\n  }\n}\n\n.slideOutLeft[_ngcontent-%COMP%] {\n  animation-name: slideOutLeft;\n}\n\n@keyframes slideOutRight {\n  from {\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    transform: translate3d(100%, 0, 0);\n  }\n}\n\n.slideOutRight[_ngcontent-%COMP%] {\n  animation-name: slideOutRight;\n}\n\n@keyframes slideOutUp {\n  from {\n    transform: translate3d(0, 0, 0);\n  }\n\n  to {\n    visibility: hidden;\n    transform: translate3d(0, -100%, 0);\n  }\n}\n\n.slideOutUp[_ngcontent-%COMP%] {\n  animation-name: slideOutUp;\n}\n\n\n\n*[_ngcontent-%COMP%] {\n      margin: 0px; \n      padding: 0px; \n      box-sizing: border-box;\n  }\n\nbody[_ngcontent-%COMP%], html[_ngcontent-%COMP%] {\n      height: 100%;\n  }\n\n\n\na[_ngcontent-%COMP%] {\n      line-height: 1.7;\n      color: #666666;\n      margin: 0px;\n      transition: all 0.4s;\n      -webkit-transition: all 0.4s;\n    -o-transition: all 0.4s;\n    -moz-transition: all 0.4s;\n  }\n\na[_ngcontent-%COMP%]:focus {\n      outline: none !important;\n  }\n\na[_ngcontent-%COMP%]:hover {\n      text-decoration: none;\n      color: #57b846;\n  }\n\n\n\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n      margin: 0px;\n  }\n\np[_ngcontent-%COMP%] {\n      line-height: 1.7;\n      color: #666666;\n      margin: 0px;\n  }\n\nul[_ngcontent-%COMP%], li[_ngcontent-%COMP%] {\n      margin: 0px;\n      list-style-type: none;\n  }\n\n\n\ninput[_ngcontent-%COMP%] {\n      outline: none;\n      border: none;\n  }\n\ntextarea[_ngcontent-%COMP%] {\n    outline: none;\n    border: none;\n  }\n\ntextarea[_ngcontent-%COMP%]:focus, input[_ngcontent-%COMP%]:focus {\n    border-color: transparent !important;\n  }\n\ninput[_ngcontent-%COMP%]::-webkit-input-placeholder { color: #999999; }\n\ninput[_ngcontent-%COMP%]:-moz-placeholder { color: #999999; }\n\ninput[_ngcontent-%COMP%]::-moz-placeholder { color: #999999; }\n\ninput[_ngcontent-%COMP%]:-ms-input-placeholder { color: #999999; }\n\ntextarea[_ngcontent-%COMP%]::-webkit-input-placeholder { color: #999999; }\n\ntextarea[_ngcontent-%COMP%]:-moz-placeholder { color: #999999; }\n\ntextarea[_ngcontent-%COMP%]::-moz-placeholder { color: #999999; }\n\ntextarea[_ngcontent-%COMP%]:-ms-input-placeholder { color: #999999; }\n\n\n\nbutton[_ngcontent-%COMP%] {\n      outline: none !important;\n      border: none;\n      background: transparent;\n  }\n\nbutton[_ngcontent-%COMP%]:hover {\n      cursor: pointer;\n  }\n\niframe[_ngcontent-%COMP%] {\n      border: none !important;\n  }\n\n\n\n.contact1[_ngcontent-%COMP%] {\n    width: 100%;\n    min-height: 100%;\n    padding: 15px;\n  \n    background: #009bff;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n  }\n\n.container-contact1[_ngcontent-%COMP%] {\n    background: #fff;\n    overflow: hidden;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    align-items: center;\n  \n  }\n\n\n\n.contact1-pic[_ngcontent-%COMP%] {\n    width: 296px;\n  }\n\n.contact1-pic[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n\n\n\n.contact1-form-title[_ngcontent-%COMP%] {\n    display: block;\n    color: #333333;\n    line-height: 1.2;\n    text-align: center;\n  }\n\ninput.input1[_ngcontent-%COMP%] {\n    border-radius: 25px;\n  }\n\ninput.input1[_ngcontent-%COMP%]    + .shadow-input1[_ngcontent-%COMP%] {\n    border-radius: 25px;\n  }\n\ntextarea.input1[_ngcontent-%COMP%] {\n    min-height: 150px;\n    border-radius: 25px;\n  }\n\ntextarea.input1[_ngcontent-%COMP%]    + .shadow-input1[_ngcontent-%COMP%] {\n    border-radius: 25px;\n  }\n\n\n\n.wrap-input1[_ngcontent-%COMP%] {\n    position: relative;\n    width: 100%;\n    z-index: 1;\n  }\n\n.input1[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    background: #e6e6e6;\n    line-height: 1.5;\n    color: #666666;\n  }\n\n.shadow-input1[_ngcontent-%COMP%] {\n    content: '';\n    display: block;\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    z-index: -1;\n    width: 100%;\n    height: 100%;\n    box-shadow: 0px 0px 0px 0px;\n    color: rgba(87,184,70, 0.5);\n  }\n\n.input1[_ngcontent-%COMP%]:focus    + .shadow-input1[_ngcontent-%COMP%] {\n    animation: anim-shadow 0.5s ease-in-out forwards;\n  }\n\n@keyframes anim-shadow {\n    to {\n      box-shadow: 0px 0px 80px 30px;\n      opacity: 0;\n    }\n  }\n\n\n\n.container-contact1-form-btn[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n\n.contact1-form-btn[_ngcontent-%COMP%] {\n    height: 50px;\n    border-radius: 25px;\n    background: #57b846;\n    line-height: 1.5;\n    color: #fff;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    transition: all 0.4s;\n  }\n\n.contact1-form-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    margin-left: 7px;\n    transition: all 0.4s;\n  }\n\n.contact1-form-btn[_ngcontent-%COMP%]:hover {\n    background: #333333;\n  }\n\n.contact1-form-btn[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n    transform: translateX(10px);\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlc2lnbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjs7QUFFaEI7O0lBRUksV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGdDQUFnQztBQUNwQzs7QUFHQTs7Ozs7O0VBTUU7O0FBRUY7RUFDRSxzQkFBc0I7RUFDdEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBOzs7O0VBSUUsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0U7SUFDRSxtRUFBbUU7SUFDbkUsNkJBQTZCO0VBQy9COztFQUVBO0lBQ0UsbUVBQW1FO0lBQ25FLG1DQUFtQztFQUNyQzs7RUFFQTtJQUNFLG1FQUFtRTtJQUNuRSxtQ0FBbUM7RUFDckM7O0VBRUE7SUFDRSxnQ0FBZ0M7RUFDbEM7QUFDRjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRTtJQUNFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLFVBQVU7RUFDWjtBQUNGOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBLDZFQUE2RTs7QUFFN0U7RUFDRTtJQUNFLDJCQUEyQjtFQUM3Qjs7RUFFQTtJQUNFLG9DQUFvQztFQUN0Qzs7RUFFQTtJQUNFLDJCQUEyQjtFQUM3QjtBQUNGOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0U7SUFDRSwyQkFBMkI7RUFDN0I7O0VBRUE7SUFDRSxpQ0FBaUM7RUFDbkM7O0VBRUE7SUFDRSxpQ0FBaUM7RUFDbkM7O0VBRUE7SUFDRSxpQ0FBaUM7RUFDbkM7O0VBRUE7SUFDRSxnQ0FBZ0M7RUFDbEM7O0VBRUE7SUFDRSxnQ0FBZ0M7RUFDbEM7O0VBRUE7SUFDRSwy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O0lBQ1QsT0FBTztJQUNQLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLDJCQUEyQjtJQUMzQiwyQkFBMkI7RUFDN0I7O0FBRUE7SUFFRSxnREFBZ0Q7RUFDbEQ7O0FBU0E7SUFDRTtNQUNFLDZCQUE2QjtNQUM3QixVQUFVO0lBQ1o7RUFDRjs7QUFFQSxnREFBZ0Q7O0FBQ2hEO0lBS0UsYUFBYTtJQUNiLGVBQWU7SUFDZix1QkFBdUI7RUFDekI7O0FBRUE7SUFDRSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsV0FBVztJQUtYLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBS25CLG9CQUFvQjtFQUN0Qjs7QUFFQTtJQUNFLGdCQUFnQjtJQUtoQixvQkFBb0I7RUFDdEI7O0FBRUE7SUFDRSxtQkFBbUI7RUFDckI7O0FBRUE7SUFLRSwyQkFBMkI7RUFDN0IiLCJmaWxlIjoiZGVzaWduLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG5cbi5zZWxlY3RlZHtcblxuICAgIHdpZHRoOiA0NXB4O1xuICAgIGhlaWdodDogNDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI5OGY1O1xufVxuXG4ucHJvZHVjdFR5cGVCdG57XG4gICAgd2lkdGg6IDUwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4ubm9EZXNpZ257XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDJweDtcbiAgICBmb250LXNpemU6c21hbGw7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XG59XG5cblxuLyohXG4gKiBhbmltYXRlLmNzcyAtaHR0cDovL2RhbmVkZW4ubWUvYW5pbWF0ZVxuICogVmVyc2lvbiAtIDMuNS4yXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgLSBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE3IERhbmllbCBFZGVuXG4gKi9cblxuLmFuaW1hdGVkIHtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxcztcbiAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbn1cblxuLmFuaW1hdGVkLmluZmluaXRlIHtcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG59XG5cbi5hbmltYXRlZC5oaW5nZSB7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XG59XG5cbi5hbmltYXRlZC5mbGlwT3V0WCxcbi5hbmltYXRlZC5mbGlwT3V0WSxcbi5hbmltYXRlZC5ib3VuY2VJbixcbi5hbmltYXRlZC5ib3VuY2VPdXQge1xuICBhbmltYXRpb24tZHVyYXRpb246IC43NXM7XG59XG5cbkBrZXlmcmFtZXMgYm91bmNlIHtcbiAgZnJvbSwgMjAlLCA1MyUsIDgwJSwgdG8ge1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MTAsIDAuMzU1LCAxLjAwMCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XG4gIH1cblxuICA0MCUsIDQzJSB7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1MCwgMC44NTUsIDAuMDYwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0zMHB4LCAwKTtcbiAgfVxuXG4gIDcwJSB7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1MCwgMC44NTUsIDAuMDYwKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xNXB4LCAwKTtcbiAgfVxuXG4gIDkwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLC00cHgsMCk7XG4gIH1cbn1cblxuLmJvdW5jZSB7XG4gIGFuaW1hdGlvbi1uYW1lOiBib3VuY2U7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBib3R0b207XG59XG5cbkBrZXlmcmFtZXMgZmxhc2gge1xuICBmcm9tLCA1MCUsIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgMjUlLCA3NSUge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cblxuLmZsYXNoIHtcbiAgYW5pbWF0aW9uLW5hbWU6IGZsYXNoO1xufVxuXG4vKiBvcmlnaW5hbGx5IGF1dGhvcmVkIGJ5IE5pY2sgUGV0dGl0IC0gaHR0cHM6Ly9naXRodWIuY29tL25pY2twZXR0aXQvZ2xpZGUgKi9cblxuQGtleWZyYW1lcyBwdWxzZSB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcbiAgfVxuXG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMDUsIDEuMDUsIDEuMDUpO1xuICB9XG5cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcbiAgfVxufVxuXG4ucHVsc2Uge1xuICBhbmltYXRpb24tbmFtZTogcHVsc2U7XG59XG5cbkBrZXlmcmFtZXMgcnViYmVyQmFuZCB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcbiAgfVxuXG4gIDMwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMjUsIDAuNzUsIDEpO1xuICB9XG5cbiAgNDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC43NSwgMS4yNSwgMSk7XG4gIH1cblxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjE1LCAwLjg1LCAxKTtcbiAgfVxuXG4gIDY1JSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKC45NSwgMS4wNSwgMSk7XG4gIH1cblxuICA3NSUge1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjA1LCAuOTUsIDEpO1xuICB9XG5cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcbiAgfVxufVxuXG4ucnViYmVyQmFuZCB7XG4gIGFuaW1hdGlvbi1uYW1lOiBydWJiZXJCYW5kO1xufVxuXG5Aa2V5ZnJhbWVzIHNoYWtlIHtcbiAgZnJvbSwgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cblxuICAxMCUsIDMwJSwgNTAlLCA3MCUsIDkwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTBweCwgMCwgMCk7XG4gIH1cblxuICAyMCUsIDQwJSwgNjAlLCA4MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTBweCwgMCwgMCk7XG4gIH1cbn1cblxuLnNoYWtlIHtcbiAgYW5pbWF0aW9uLW5hbWU6IHNoYWtlO1xufVxuXG5Aa2V5ZnJhbWVzIGhlYWRTaGFrZSB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cblxuICA2LjUlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTZweCkgcm90YXRlWSgtOWRlZyk7XG4gIH1cblxuICAxOC41JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDVweCkgcm90YXRlWSg3ZGVnKTtcbiAgfVxuXG4gIDMxLjUlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTNweCkgcm90YXRlWSgtNWRlZyk7XG4gIH1cblxuICA0My41JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDJweCkgcm90YXRlWSgzZGVnKTtcbiAgfVxuXG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xuICB9XG59XG5cbi5oZWFkU2hha2Uge1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcbiAgYW5pbWF0aW9uLW5hbWU6IGhlYWRTaGFrZTtcbn1cblxuQGtleWZyYW1lcyBzd2luZyB7XG4gIDIwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAxNWRlZyk7XG4gIH1cblxuICA0MCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTEwZGVnKTtcbiAgfVxuXG4gIDYwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA1ZGVnKTtcbiAgfVxuXG4gIDgwJSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAtNWRlZyk7XG4gIH1cblxuICB0byB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAwZGVnKTtcbiAgfVxufVxuXG4uc3dpbmcge1xuICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgY2VudGVyO1xuICBhbmltYXRpb24tbmFtZTogc3dpbmc7XG59XG5cbkBrZXlmcmFtZXMgdGFkYSB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcbiAgfVxuXG4gIDEwJSwgMjAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoLjksIC45LCAuOSkgcm90YXRlM2QoMCwgMCwgMSwgLTNkZWcpO1xuICB9XG5cbiAgMzAlLCA1MCUsIDcwJSwgOTAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4xLCAxLjEsIDEuMSkgcm90YXRlM2QoMCwgMCwgMSwgM2RlZyk7XG4gIH1cblxuICA0MCUsIDYwJSwgODAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4xLCAxLjEsIDEuMSkgcm90YXRlM2QoMCwgMCwgMSwgLTNkZWcpO1xuICB9XG5cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLCAxLCAxKTtcbiAgfVxufVxuXG4udGFkYSB7XG4gIGFuaW1hdGlvbi1uYW1lOiB0YWRhO1xufVxuXG4vKiBvcmlnaW5hbGx5IGF1dGhvcmVkIGJ5IE5pY2sgUGV0dGl0IC0gaHR0cHM6Ly9naXRodWIuY29tL25pY2twZXR0aXQvZ2xpZGUgKi9cblxuQGtleWZyYW1lcyB3b2JibGUge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cblxuICAxNSUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTI1JSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgLTVkZWcpO1xuICB9XG5cbiAgMzAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIwJSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgM2RlZyk7XG4gIH1cblxuICA0NSUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTE1JSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgLTNkZWcpO1xuICB9XG5cbiAgNjAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwJSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgMmRlZyk7XG4gIH1cblxuICA3NSUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTUlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAtMWRlZyk7XG4gIH1cblxuICB0byB7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG59XG5cbi53b2JibGUge1xuICBhbmltYXRpb24tbmFtZTogd29iYmxlO1xufVxuXG5Aa2V5ZnJhbWVzIGplbGxvIHtcbiAgZnJvbSwgMTEuMSUsIHRvIHtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cblxuICAyMi4yJSB7XG4gICAgdHJhbnNmb3JtOiBza2V3WCgtMTIuNWRlZykgc2tld1koLTEyLjVkZWcpO1xuICB9XG5cbiAgMzMuMyUge1xuICAgIHRyYW5zZm9ybTogc2tld1goNi4yNWRlZykgc2tld1koNi4yNWRlZyk7XG4gIH1cblxuICA0NC40JSB7XG4gICAgdHJhbnNmb3JtOiBza2V3WCgtMy4xMjVkZWcpIHNrZXdZKC0zLjEyNWRlZyk7XG4gIH1cblxuICA1NS41JSB7XG4gICAgdHJhbnNmb3JtOiBza2V3WCgxLjU2MjVkZWcpIHNrZXdZKDEuNTYyNWRlZyk7XG4gIH1cblxuICA2Ni42JSB7XG4gICAgdHJhbnNmb3JtOiBza2V3WCgtMC43ODEyNWRlZykgc2tld1koLTAuNzgxMjVkZWcpO1xuICB9XG5cbiAgNzcuNyUge1xuICAgIHRyYW5zZm9ybTogc2tld1goMC4zOTA2MjVkZWcpIHNrZXdZKDAuMzkwNjI1ZGVnKTtcbiAgfVxuXG4gIDg4LjglIHtcbiAgICB0cmFuc2Zvcm06IHNrZXdYKC0wLjE5NTMxMjVkZWcpIHNrZXdZKC0wLjE5NTMxMjVkZWcpO1xuICB9XG59XG5cbi5qZWxsbyB7XG4gIGFuaW1hdGlvbi1uYW1lOiBqZWxsbztcbiAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xufVxuXG5Aa2V5ZnJhbWVzIGJvdW5jZUluIHtcbiAgZnJvbSwgMjAlLCA0MCUsIDYwJSwgODAlLCB0byB7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxMCwgMC4zNTUsIDEuMDAwKTtcbiAgfVxuXG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCguMywgLjMsIC4zKTtcbiAgfVxuXG4gIDIwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMSwgMS4xLCAxLjEpO1xuICB9XG5cbiAgNDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoLjksIC45LCAuOSk7XG4gIH1cblxuICA2MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMDMsIDEuMDMsIDEuMDMpO1xuICB9XG5cbiAgODAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoLjk3LCAuOTcsIC45Nyk7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XG4gIH1cbn1cblxuLmJvdW5jZUluIHtcbiAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluO1xufVxuXG5Aa2V5ZnJhbWVzIGJvdW5jZUluRG93biB7XG4gIGZyb20sIDYwJSwgNzUlLCA5MCUsIHRvIHtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEwLCAwLjM1NSwgMS4wMDApO1xuICB9XG5cbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMzAwMHB4LCAwKTtcbiAgfVxuXG4gIDYwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDI1cHgsIDApO1xuICB9XG5cbiAgNzUlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMHB4LCAwKTtcbiAgfVxuXG4gIDkwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCA1cHgsIDApO1xuICB9XG5cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxufVxuXG4uYm91bmNlSW5Eb3duIHtcbiAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluRG93bjtcbn1cblxuQGtleWZyYW1lcyBib3VuY2VJbkxlZnQge1xuICBmcm9tLCA2MCUsIDc1JSwgOTAlLCB0byB7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxMCwgMC4zNTUsIDEuMDAwKTtcbiAgfVxuXG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTMwMDBweCwgMCwgMCk7XG4gIH1cblxuICA2MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyNXB4LCAwLCAwKTtcbiAgfVxuXG4gIDc1JSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTBweCwgMCwgMCk7XG4gIH1cblxuICA5MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNXB4LCAwLCAwKTtcbiAgfVxuXG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cbn1cblxuLmJvdW5jZUluTGVmdCB7XG4gIGFuaW1hdGlvbi1uYW1lOiBib3VuY2VJbkxlZnQ7XG59XG5cbkBrZXlmcmFtZXMgYm91bmNlSW5SaWdodCB7XG4gIGZyb20sIDYwJSwgNzUlLCA5MCUsIHRvIHtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEwLCAwLjM1NSwgMS4wMDApO1xuICB9XG5cbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDMwMDBweCwgMCwgMCk7XG4gIH1cblxuICA2MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjVweCwgMCwgMCk7XG4gIH1cblxuICA3NSUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTBweCwgMCwgMCk7XG4gIH1cblxuICA5MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTVweCwgMCwgMCk7XG4gIH1cblxuICB0byB7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG59XG5cbi5ib3VuY2VJblJpZ2h0IHtcbiAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluUmlnaHQ7XG59XG5cbkBrZXlmcmFtZXMgYm91bmNlSW5VcCB7XG4gIGZyb20sIDYwJSwgNzUlLCA5MCUsIHRvIHtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEwLCAwLjM1NSwgMS4wMDApO1xuICB9XG5cbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDMwMDBweCwgMCk7XG4gIH1cblxuICA2MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjBweCwgMCk7XG4gIH1cblxuICA3NSUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCk7XG4gIH1cblxuICA5MCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTVweCwgMCk7XG4gIH1cblxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuXG4uYm91bmNlSW5VcCB7XG4gIGFuaW1hdGlvbi1uYW1lOiBib3VuY2VJblVwO1xufVxuXG5Aa2V5ZnJhbWVzIGJvdW5jZU91dCB7XG4gIDIwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKC45LCAuOSwgLjkpO1xuICB9XG5cbiAgNTAlLCA1NSUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMSwgMS4xLCAxLjEpO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKC4zLCAuMywgLjMpO1xuICB9XG59XG5cbi5ib3VuY2VPdXQge1xuICBhbmltYXRpb24tbmFtZTogYm91bmNlT3V0O1xufVxuXG5Aa2V5ZnJhbWVzIGJvdW5jZU91dERvd24ge1xuICAyMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCk7XG4gIH1cblxuICA0MCUsIDQ1JSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMHB4LCAwKTtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMjAwMHB4LCAwKTtcbiAgfVxufVxuXG4uYm91bmNlT3V0RG93biB7XG4gIGFuaW1hdGlvbi1uYW1lOiBib3VuY2VPdXREb3duO1xufVxuXG5Aa2V5ZnJhbWVzIGJvdW5jZU91dExlZnQge1xuICAyMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMHB4LCAwLCAwKTtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTIwMDBweCwgMCwgMCk7XG4gIH1cbn1cblxuLmJvdW5jZU91dExlZnQge1xuICBhbmltYXRpb24tbmFtZTogYm91bmNlT3V0TGVmdDtcbn1cblxuQGtleWZyYW1lcyBib3VuY2VPdXRSaWdodCB7XG4gIDIwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yMHB4LCAwLCAwKTtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjAwMHB4LCAwLCAwKTtcbiAgfVxufVxuXG4uYm91bmNlT3V0UmlnaHQge1xuICBhbmltYXRpb24tbmFtZTogYm91bmNlT3V0UmlnaHQ7XG59XG5cbkBrZXlmcmFtZXMgYm91bmNlT3V0VXAge1xuICAyMCUge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwcHgsIDApO1xuICB9XG5cbiAgNDAlLCA0NSUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAyMHB4LCAwKTtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwMDBweCwgMCk7XG4gIH1cbn1cblxuLmJvdW5jZU91dFVwIHtcbiAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZU91dFVwO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4uZmFkZUluIHtcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJbjtcbn1cblxuQGtleWZyYW1lcyBmYWRlSW5Eb3duIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxufVxuXG4uZmFkZUluRG93biB7XG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5Eb3duO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbkRvd25CaWcge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwMDBweCwgMCk7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cbn1cblxuLmZhZGVJbkRvd25CaWcge1xuICBhbmltYXRpb24tbmFtZTogZmFkZUluRG93bkJpZztcbn1cblxuQGtleWZyYW1lcyBmYWRlSW5MZWZ0IHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxufVxuXG4uZmFkZUluTGVmdCB7XG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5MZWZ0O1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJbkxlZnRCaWcge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTIwMDBweCwgMCwgMCk7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cbn1cblxuLmZhZGVJbkxlZnRCaWcge1xuICBhbmltYXRpb24tbmFtZTogZmFkZUluTGVmdEJpZztcbn1cblxuQGtleWZyYW1lcyBmYWRlSW5SaWdodCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxufVxuXG4uZmFkZUluUmlnaHQge1xuICBhbmltYXRpb24tbmFtZTogZmFkZUluUmlnaHQ7XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluUmlnaHRCaWcge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjAwMHB4LCAwLCAwKTtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxufVxuXG4uZmFkZUluUmlnaHRCaWcge1xuICBhbmltYXRpb24tbmFtZTogZmFkZUluUmlnaHRCaWc7XG59XG5cbkBrZXlmcmFtZXMgZmFkZUluVXAge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cbn1cblxuLmZhZGVJblVwIHtcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJblVwO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVJblVwQmlnIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDIwMDBweCwgMCk7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cbn1cblxuLmZhZGVJblVwQmlnIHtcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJblVwQmlnO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVPdXQge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cblxuLmZhZGVPdXQge1xuICBhbmltYXRpb24tbmFtZTogZmFkZU91dDtcbn1cblxuQGtleWZyYW1lcyBmYWRlT3V0RG93biB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xuICB9XG59XG5cbi5mYWRlT3V0RG93biB7XG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0RG93bjtcbn1cblxuQGtleWZyYW1lcyBmYWRlT3V0RG93bkJpZyB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDIwMDBweCwgMCk7XG4gIH1cbn1cblxuLmZhZGVPdXREb3duQmlnIHtcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXREb3duQmlnO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVPdXRMZWZ0IHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xuICB9XG59XG5cbi5mYWRlT3V0TGVmdCB7XG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0TGVmdDtcbn1cblxuQGtleWZyYW1lcyBmYWRlT3V0TGVmdEJpZyB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yMDAwcHgsIDAsIDApO1xuICB9XG59XG5cbi5mYWRlT3V0TGVmdEJpZyB7XG4gIGFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0TGVmdEJpZztcbn1cblxuQGtleWZyYW1lcyBmYWRlT3V0UmlnaHQge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcbiAgfVxufVxuXG4uZmFkZU91dFJpZ2h0IHtcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXRSaWdodDtcbn1cblxuQGtleWZyYW1lcyBmYWRlT3V0UmlnaHRCaWcge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMDAwcHgsIDAsIDApO1xuICB9XG59XG5cbi5mYWRlT3V0UmlnaHRCaWcge1xuICBhbmltYXRpb24tbmFtZTogZmFkZU91dFJpZ2h0QmlnO1xufVxuXG5Aa2V5ZnJhbWVzIGZhZGVPdXRVcCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMDAlLCAwKTtcbiAgfVxufVxuXG4uZmFkZU91dFVwIHtcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXRVcDtcbn1cblxuQGtleWZyYW1lcyBmYWRlT3V0VXBCaWcge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjAwMHB4LCAwKTtcbiAgfVxufVxuXG4uZmFkZU91dFVwQmlnIHtcbiAgYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXRVcEJpZztcbn1cblxuQGtleWZyYW1lcyBmbGlwIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgLTM2MGRlZyk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gIH1cblxuICA0MCUge1xuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHRyYW5zbGF0ZTNkKDAsIDAsIDE1MHB4KSByb3RhdGUzZCgwLCAxLCAwLCAtMTkwZGVnKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbiAgfVxuXG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgdHJhbnNsYXRlM2QoMCwgMCwgMTUwcHgpIHJvdGF0ZTNkKDAsIDEsIDAsIC0xNzBkZWcpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gIH1cblxuICA4MCUge1xuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHNjYWxlM2QoLjk1LCAuOTUsIC45NSk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgfVxuXG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICB9XG59XG5cbi5hbmltYXRlZC5mbGlwIHtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBhbmltYXRpb24tbmFtZTogZmxpcDtcbn1cblxuQGtleWZyYW1lcyBmbGlwSW5YIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgOTBkZWcpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIDQwJSB7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgLTIwZGVnKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICB9XG5cbiAgNjAlIHtcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgxLCAwLCAwLCAxMGRlZyk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIDgwJSB7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgLTVkZWcpO1xuICB9XG5cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpO1xuICB9XG59XG5cbi5mbGlwSW5YIHtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcbiAgYW5pbWF0aW9uLW5hbWU6IGZsaXBJblg7XG59XG5cblxuQGtleWZyYW1lcyBmbGlwSW5ZIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgOTBkZWcpO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIDQwJSB7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgLTIwZGVnKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICB9XG5cbiAgNjAlIHtcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgwLCAxLCAwLCAxMGRlZyk7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIDgwJSB7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgLTVkZWcpO1xuICB9XG5cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpO1xuICB9XG59XG5cbi5mbGlwSW5ZIHtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcbiAgYW5pbWF0aW9uLW5hbWU6IGZsaXBJblk7XG59XG5cbkBrZXlmcmFtZXMgZmxpcE91dFgge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KTtcbiAgfVxuXG4gIDMwJSB7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgLTIwZGVnKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDEsIDAsIDAsIDkwZGVnKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5cbi5mbGlwT3V0WCB7XG4gIGFuaW1hdGlvbi1uYW1lOiBmbGlwT3V0WDtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcbn1cblxuQGtleWZyYW1lcyBmbGlwT3V0WSB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpO1xuICB9XG5cbiAgMzAlIHtcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgwLCAxLCAwLCAtMTVkZWcpO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICB0byB7XG4gICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgOTBkZWcpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cblxuLmZsaXBPdXRZIHtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcbiAgYW5pbWF0aW9uLW5hbWU6IGZsaXBPdXRZO1xufVxuXG5Aa2V5ZnJhbWVzIGxpZ2h0U3BlZWRJbiB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCkgc2tld1goLTMwZGVnKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgNjAlIHtcbiAgICB0cmFuc2Zvcm06IHNrZXdYKDIwZGVnKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgODAlIHtcbiAgICB0cmFuc2Zvcm06IHNrZXdYKC01ZGVnKTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbi5saWdodFNwZWVkSW4ge1xuICBhbmltYXRpb24tbmFtZTogbGlnaHRTcGVlZEluO1xuICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbn1cblxuQGtleWZyYW1lcyBsaWdodFNwZWVkT3V0IHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApIHNrZXdYKDMwZGVnKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5cbi5saWdodFNwZWVkT3V0IHtcbiAgYW5pbWF0aW9uLW5hbWU6IGxpZ2h0U3BlZWRPdXQ7XG4gIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG59XG5cbkBrZXlmcmFtZXMgcm90YXRlSW4ge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAtMjAwZGVnKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgdG8ge1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4ucm90YXRlSW4ge1xuICBhbmltYXRpb24tbmFtZTogcm90YXRlSW47XG59XG5cbkBrZXlmcmFtZXMgcm90YXRlSW5Eb3duTGVmdCB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTQ1ZGVnKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgdG8ge1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbi5yb3RhdGVJbkRvd25MZWZ0IHtcbiAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZUluRG93bkxlZnQ7XG59XG5cbkBrZXlmcmFtZXMgcm90YXRlSW5Eb3duUmlnaHQge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA0NWRlZyk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIHRvIHtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuLnJvdGF0ZUluRG93blJpZ2h0IHtcbiAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZUluRG93blJpZ2h0O1xufVxuXG5Aa2V5ZnJhbWVzIHJvdGF0ZUluVXBMZWZ0IHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA0NWRlZyk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIHRvIHtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4ucm90YXRlSW5VcExlZnQge1xuICBhbmltYXRpb24tbmFtZTogcm90YXRlSW5VcExlZnQ7XG59XG5cbkBrZXlmcmFtZXMgcm90YXRlSW5VcFJpZ2h0IHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTkwZGVnKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgdG8ge1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxufVxuXG4ucm90YXRlSW5VcFJpZ2h0IHtcbiAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZUluVXBSaWdodDtcbn1cblxuQGtleWZyYW1lcyByb3RhdGVPdXQge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIHRvIHtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAyMDBkZWcpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cblxuLnJvdGF0ZU91dCB7XG4gIGFuaW1hdGlvbi1uYW1lOiByb3RhdGVPdXQ7XG59XG5cbkBrZXlmcmFtZXMgcm90YXRlT3V0RG93bkxlZnQge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgdG8ge1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgNDVkZWcpO1xuICAgIG9wYWNpdHk6IDA7XG4gIH1cbn1cblxuLnJvdGF0ZU91dERvd25MZWZ0IHtcbiAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZU91dERvd25MZWZ0O1xufVxuXG5Aa2V5ZnJhbWVzIHJvdGF0ZU91dERvd25SaWdodCB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgdG8ge1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC00NWRlZyk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuXG4ucm90YXRlT3V0RG93blJpZ2h0IHtcbiAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZU91dERvd25SaWdodDtcbn1cblxuQGtleWZyYW1lcyByb3RhdGVPdXRVcExlZnQge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgdG8ge1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTQ1ZGVnKTtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5cbi5yb3RhdGVPdXRVcExlZnQge1xuICBhbmltYXRpb24tbmFtZTogcm90YXRlT3V0VXBMZWZ0O1xufVxuXG5Aa2V5ZnJhbWVzIHJvdGF0ZU91dFVwUmlnaHQge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XG4gICAgb3BhY2l0eTogMTtcbiAgfVxuXG4gIHRvIHtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XG4gICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA5MGRlZyk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuXG4ucm90YXRlT3V0VXBSaWdodCB7XG4gIGFuaW1hdGlvbi1uYW1lOiByb3RhdGVPdXRVcFJpZ2h0O1xufVxuXG5Aa2V5ZnJhbWVzIGhpbmdlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICB9XG5cbiAgMjAlLCA2MCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgODBkZWcpO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICB9XG5cbiAgNDAlLCA4MCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgNjBkZWcpO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cblxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCA3MDBweCwgMCk7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxufVxuXG4uaGluZ2Uge1xuICBhbmltYXRpb24tbmFtZTogaGluZ2U7XG59XG5cbkBrZXlmcmFtZXMgamFja0luVGhlQm94IHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMSkgcm90YXRlKDMwZGVnKTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgYm90dG9tO1xuICB9XG5cbiAgNTAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTBkZWcpO1xuICB9XG5cbiAgNzAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzZGVnKTtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIH1cbn1cblxuLmphY2tJblRoZUJveCB7XG4gIGFuaW1hdGlvbi1uYW1lOiBqYWNrSW5UaGVCb3g7XG59XG5cbi8qIG9yaWdpbmFsbHkgYXV0aG9yZWQgYnkgTmljayBQZXR0aXQgLSBodHRwczovL2dpdGh1Yi5jb20vbmlja3BldHRpdC9nbGlkZSAqL1xuXG5Aa2V5ZnJhbWVzIHJvbGxJbiB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgLTEyMGRlZyk7XG4gIH1cblxuICB0byB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cbn1cblxuLnJvbGxJbiB7XG4gIGFuaW1hdGlvbi1uYW1lOiByb2xsSW47XG59XG5cbi8qIG9yaWdpbmFsbHkgYXV0aG9yZWQgYnkgTmljayBQZXR0aXQgLSBodHRwczovL2dpdGh1Yi5jb20vbmlja3BldHRpdC9nbGlkZSAqL1xuXG5Aa2V5ZnJhbWVzIHJvbGxPdXQge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAxMjBkZWcpO1xuICB9XG59XG5cbi5yb2xsT3V0IHtcbiAgYW5pbWF0aW9uLW5hbWU6IHJvbGxPdXQ7XG59XG5cbkBrZXlmcmFtZXMgem9vbUluIHtcbiAgZnJvbSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoLjMsIC4zLCAuMyk7XG4gIH1cblxuICA1MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuLnpvb21JbiB7XG4gIGFuaW1hdGlvbi1uYW1lOiB6b29tSW47XG59XG5cbkBrZXlmcmFtZXMgem9vbUluRG93biB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKC4xLCAuMSwgLjEpIHRyYW5zbGF0ZTNkKDAsIC0xMDAwcHgsIDApO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1MCwgMC4wNTUsIDAuNjc1LCAwLjE5MCk7XG4gIH1cblxuICA2MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKC40NzUsIC40NzUsIC40NzUpIHRyYW5zbGF0ZTNkKDAsIDYwcHgsIDApO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIwLCAxKTtcbiAgfVxufVxuXG4uem9vbUluRG93biB7XG4gIGFuaW1hdGlvbi1uYW1lOiB6b29tSW5Eb3duO1xufVxuXG5Aa2V5ZnJhbWVzIHpvb21JbkxlZnQge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCguMSwgLjEsIC4xKSB0cmFuc2xhdGUzZCgtMTAwMHB4LCAwLCAwKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NTAsIDAuMDU1LCAwLjY3NSwgMC4xOTApO1xuICB9XG5cbiAgNjAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCguNDc1LCAuNDc1LCAuNDc1KSB0cmFuc2xhdGUzZCgxMHB4LCAwLCAwKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyMCwgMSk7XG4gIH1cbn1cblxuLnpvb21JbkxlZnQge1xuICBhbmltYXRpb24tbmFtZTogem9vbUluTGVmdDtcbn1cblxuQGtleWZyYW1lcyB6b29tSW5SaWdodCB7XG4gIGZyb20ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKC4xLCAuMSwgLjEpIHRyYW5zbGF0ZTNkKDEwMDBweCwgMCwgMCk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUwLCAwLjA1NSwgMC42NzUsIDAuMTkwKTtcbiAgfVxuXG4gIDYwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoLjQ3NSwgLjQ3NSwgLjQ3NSkgdHJhbnNsYXRlM2QoLTEwcHgsIDAsIDApO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIwLCAxKTtcbiAgfVxufVxuXG4uem9vbUluUmlnaHQge1xuICBhbmltYXRpb24tbmFtZTogem9vbUluUmlnaHQ7XG59XG5cbkBrZXlmcmFtZXMgem9vbUluVXAge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCguMSwgLjEsIC4xKSB0cmFuc2xhdGUzZCgwLCAxMDAwcHgsIDApO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1MCwgMC4wNTUsIDAuNjc1LCAwLjE5MCk7XG4gIH1cblxuICA2MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKC40NzUsIC40NzUsIC40NzUpIHRyYW5zbGF0ZTNkKDAsIC02MHB4LCAwKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyMCwgMSk7XG4gIH1cbn1cblxuLnpvb21JblVwIHtcbiAgYW5pbWF0aW9uLW5hbWU6IHpvb21JblVwO1xufVxuXG5Aa2V5ZnJhbWVzIHpvb21PdXQge1xuICBmcm9tIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG5cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCguMywgLjMsIC4zKTtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG59XG5cbi56b29tT3V0IHtcbiAgYW5pbWF0aW9uLW5hbWU6IHpvb21PdXQ7XG59XG5cbkBrZXlmcmFtZXMgem9vbU91dERvd24ge1xuICA0MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKC40NzUsIC40NzUsIC40NzUpIHRyYW5zbGF0ZTNkKDAsIC02MHB4LCAwKTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NTAsIDAuMDU1LCAwLjY3NSwgMC4xOTApO1xuICB9XG5cbiAgdG8ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKC4xLCAuMSwgLjEpIHRyYW5zbGF0ZTNkKDAsIDIwMDBweCwgMCk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGJvdHRvbTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyMCwgMSk7XG4gIH1cbn1cblxuLnpvb21PdXREb3duIHtcbiAgYW5pbWF0aW9uLW5hbWU6IHpvb21PdXREb3duO1xufVxuXG5Aa2V5ZnJhbWVzIHpvb21PdXRMZWZ0IHtcbiAgNDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCguNDc1LCAuNDc1LCAuNDc1KSB0cmFuc2xhdGUzZCg0MnB4LCAwLCAwKTtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoLjEpIHRyYW5zbGF0ZTNkKC0yMDAwcHgsIDAsIDApO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgY2VudGVyO1xuICB9XG59XG5cbi56b29tT3V0TGVmdCB7XG4gIGFuaW1hdGlvbi1uYW1lOiB6b29tT3V0TGVmdDtcbn1cblxuQGtleWZyYW1lcyB6b29tT3V0UmlnaHQge1xuICA0MCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBzY2FsZTNkKC40NzUsIC40NzUsIC40NzUpIHRyYW5zbGF0ZTNkKC00MnB4LCAwLCAwKTtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoLjEpIHRyYW5zbGF0ZTNkKDIwMDBweCwgMCwgMCk7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgY2VudGVyO1xuICB9XG59XG5cbi56b29tT3V0UmlnaHQge1xuICBhbmltYXRpb24tbmFtZTogem9vbU91dFJpZ2h0O1xufVxuXG5Aa2V5ZnJhbWVzIHpvb21PdXRVcCB7XG4gIDQwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlM2QoLjQ3NSwgLjQ3NSwgLjQ3NSkgdHJhbnNsYXRlM2QoMCwgNjBweCwgMCk7XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUwLCAwLjA1NSwgMC42NzUsIDAuMTkwKTtcbiAgfVxuXG4gIHRvIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGUzZCguMSwgLjEsIC4xKSB0cmFuc2xhdGUzZCgwLCAtMjAwMHB4LCAwKTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgYm90dG9tO1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIwLCAxKTtcbiAgfVxufVxuXG4uem9vbU91dFVwIHtcbiAgYW5pbWF0aW9uLW5hbWU6IHpvb21PdXRVcDtcbn1cblxuQGtleWZyYW1lcyBzbGlkZUluRG93biB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cblxuICB0byB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxufVxuXG4uc2xpZGVJbkRvd24ge1xuICBhbmltYXRpb24tbmFtZTogc2xpZGVJbkRvd247XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVJbkxlZnQge1xuICBmcm9tIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG5cbiAgdG8ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cbn1cblxuLnNsaWRlSW5MZWZ0IHtcbiAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlSW5MZWZ0O1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlSW5SaWdodCB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxuXG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG5cbi5zbGlkZUluUmlnaHQge1xuICBhbmltYXRpb24tbmFtZTogc2xpZGVJblJpZ2h0O1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlSW5VcCB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgfVxuXG4gIHRvIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICB9XG59XG5cbi5zbGlkZUluVXAge1xuICBhbmltYXRpb24tbmFtZTogc2xpZGVJblVwO1xufVxuXG5Aa2V5ZnJhbWVzIHNsaWRlT3V0RG93biB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cblxuICB0byB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XG4gIH1cbn1cblxuLnNsaWRlT3V0RG93biB7XG4gIGFuaW1hdGlvbi1uYW1lOiBzbGlkZU91dERvd247XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVPdXRMZWZ0IHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxuXG4gIHRvIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XG4gIH1cbn1cblxuLnNsaWRlT3V0TGVmdCB7XG4gIGFuaW1hdGlvbi1uYW1lOiBzbGlkZU91dExlZnQ7XG59XG5cbkBrZXlmcmFtZXMgc2xpZGVPdXRSaWdodCB7XG4gIGZyb20ge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIH1cblxuICB0byB7XG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XG4gIH1cbn1cblxuLnNsaWRlT3V0UmlnaHQge1xuICBhbmltYXRpb24tbmFtZTogc2xpZGVPdXRSaWdodDtcbn1cblxuQGtleWZyYW1lcyBzbGlkZU91dFVwIHtcbiAgZnJvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgfVxuXG4gIHRvIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG4gIH1cbn1cblxuLnNsaWRlT3V0VXAge1xuICBhbmltYXRpb24tbmFtZTogc2xpZGVPdXRVcDtcbn1cblxuICBcbiAgXG4gIC8qLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIFsgUkVTVFlMRSBUQUcgXSovXG4gIFxuICAqIHtcbiAgICAgIG1hcmdpbjogMHB4OyBcbiAgICAgIHBhZGRpbmc6IDBweDsgXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG4gIFxuICBib2R5LCBodG1sIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgfVxuICBcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICBhIHtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjc7XG4gICAgICBjb2xvcjogIzY2NjY2NjtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIH1cbiAgXG4gIGE6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xuICB9XG4gIFxuICBhOmhvdmVyIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIGNvbG9yOiAjNTdiODQ2O1xuICB9XG4gIFxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gIGgxLGgyLGgzLGg0LGg1LGg2IHtcbiAgICAgIG1hcmdpbjogMHB4O1xuICB9XG4gIFxuICBwIHtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjc7XG4gICAgICBjb2xvcjogIzY2NjY2NjtcbiAgICAgIG1hcmdpbjogMHB4O1xuICB9XG4gIFxuICB1bCwgbGkge1xuICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIH1cbiAgXG4gIFxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gIGlucHV0IHtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gIH1cbiAgXG4gIHRleHRhcmVhIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgfVxuICBcbiAgdGV4dGFyZWE6Zm9jdXMsIGlucHV0OmZvY3VzIHtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIGlucHV0Ojotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHsgY29sb3I6ICM5OTk5OTk7IH1cbiAgaW5wdXQ6LW1vei1wbGFjZWhvbGRlciB7IGNvbG9yOiAjOTk5OTk5OyB9XG4gIGlucHV0OjotbW96LXBsYWNlaG9sZGVyIHsgY29sb3I6ICM5OTk5OTk7IH1cbiAgaW5wdXQ6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgY29sb3I6ICM5OTk5OTk7IH1cbiAgXG4gIHRleHRhcmVhOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHsgY29sb3I6ICM5OTk5OTk7IH1cbiAgdGV4dGFyZWE6LW1vei1wbGFjZWhvbGRlciB7IGNvbG9yOiAjOTk5OTk5OyB9XG4gIHRleHRhcmVhOjotbW96LXBsYWNlaG9sZGVyIHsgY29sb3I6ICM5OTk5OTk7IH1cbiAgdGV4dGFyZWE6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgY29sb3I6ICM5OTk5OTk7IH1cbiAgXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgYnV0dG9uIHtcbiAgICAgIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICB9XG4gIFxuICBidXR0b246aG92ZXIge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIFxuICBpZnJhbWUge1xuICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIH1cbiAgXG4gIFxuICBcbiAgXG4gIC8qLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gIFsgQ29udGFjdCAxIF0qL1xuICBcbiAgLmNvbnRhY3QxIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gIFxuICAgIGJhY2tncm91bmQ6ICMwMDliZmY7XG4gIFxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG4gIFxuICAuY29udGFpbmVyLWNvbnRhY3QxIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIFxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgXG4gIH1cbiAgXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIFsgIF0qL1xuICAuY29udGFjdDEtcGljIHtcbiAgICB3aWR0aDogMjk2cHg7XG4gIH1cbiAgXG4gIC5jb250YWN0MS1waWMgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gIFxuICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBbICBdKi9cblxuICBcbiAgLmNvbnRhY3QxLWZvcm0tdGl0bGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGNvbG9yOiAjMzMzMzMzO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIFxuICBpbnB1dC5pbnB1dDEge1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIH1cbiAgaW5wdXQuaW5wdXQxICsgLnNoYWRvdy1pbnB1dDEge1xuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XG4gIH1cbiAgXG4gIHRleHRhcmVhLmlucHV0MSB7XG4gICAgbWluLWhlaWdodDogMTUwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgfVxuICB0ZXh0YXJlYS5pbnB1dDEgKyAuc2hhZG93LWlucHV0MSB7XG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgfVxuICBcbiAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAud3JhcC1pbnB1dDEge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiAxO1xuICB9XG4gIFxuICAuaW5wdXQxIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAjZTZlNmU2O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgY29sb3I6ICM2NjY2NjY7XG4gIH1cbiAgXG4gIC5zaGFkb3ctaW5wdXQxIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgei1pbmRleDogLTE7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweDtcbiAgICBjb2xvcjogcmdiYSg4NywxODQsNzAsIDAuNSk7XG4gIH1cbiAgXG4gIC5pbnB1dDE6Zm9jdXMgKyAuc2hhZG93LWlucHV0MSB7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IGFuaW0tc2hhZG93IDAuNXMgZWFzZS1pbi1vdXQgZm9yd2FyZHM7XG4gICAgYW5pbWF0aW9uOiBhbmltLXNoYWRvdyAwLjVzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xuICB9XG4gIFxuICBALXdlYmtpdC1rZXlmcmFtZXMgYW5pbS1zaGFkb3cge1xuICAgIHRvIHtcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggODBweCAzMHB4O1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgYW5pbS1zaGFkb3cge1xuICAgIHRvIHtcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggODBweCAzMHB4O1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIH1cbiAgXG4gIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgLmNvbnRhaW5lci1jb250YWN0MS1mb3JtLWJ0biB7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgIGRpc3BsYXk6IC1tb3otYm94O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG4gIFxuICAuY29udGFjdDEtZm9ybS1idG4ge1xuICAgIGhlaWdodDogNTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIGJhY2tncm91bmQ6ICM1N2I4NDY7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgZGlzcGxheTogLW1vei1ib3g7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIH1cbiAgXG4gIC5jb250YWN0MS1mb3JtLWJ0biBpIHtcbiAgICBtYXJnaW4tbGVmdDogN3B4O1xuICBcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgIC1vLXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gIH1cbiAgXG4gIC5jb250YWN0MS1mb3JtLWJ0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogIzMzMzMzMztcbiAgfVxuICBcbiAgLmNvbnRhY3QxLWZvcm0tYnRuOmhvdmVyIGkge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpO1xuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpO1xuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTBweCk7XG4gICAgLW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTtcbiAgfVxuICBcbiAgIl19 */"]
});

/***/ }),

/***/ 7659:
/*!**************************************************!*\
  !*** ./src/app/edit-plan/edit-plan.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditPlanComponent": () => (/* binding */ EditPlanComponent)
/* harmony export */ });
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../globals */ 37503);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _services_load_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/load.service */ 6029);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ 79866);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ 76627);








function EditPlanComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Renew your plan to keep your store!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("font-family", ctx_r0.storeInfo().fontName);
} }
function EditPlanComponent_div_7_b_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "b", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "(Trial)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function EditPlanComponent_div_7_mat_hint_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-hint", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("font-family", ctx_r4.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", ctx_r4.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r4.formatPrice(((tmp_2_0 = ctx_r4.subInfo == null ? null : ctx_r4.subInfo.plan.amount) !== null && tmp_2_0 !== undefined ? tmp_2_0 : 0) / 100), "/", (tmp_2_0 = ctx_r4.subInfo == null ? null : ctx_r4.subInfo.plan.interval) !== null && tmp_2_0 !== undefined ? tmp_2_0 : "month", "");
} }
function EditPlanComponent_div_7_mat_hint_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-hint", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "FREE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "b", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    let tmp_2_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("font-family", ctx_r5.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", ctx_r5.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("(", ctx_r5.formatPrice(((tmp_2_0 = ctx_r5.subInfo == null ? null : ctx_r5.subInfo.plan.amount) !== null && tmp_2_0 !== undefined ? tmp_2_0 : 0) / 100), "/", (tmp_2_0 = ctx_r5.subInfo == null ? null : ctx_r5.subInfo.plan.interval) !== null && tmp_2_0 !== undefined ? tmp_2_0 : "month", " after trial)");
} }
function EditPlanComponent_div_7_div_14_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Renews: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("font-family", ctx_r10.storeInfo().fontName);
} }
function EditPlanComponent_div_7_div_14_label_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Trial End: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("font-family", ctx_r11.storeInfo().fontName);
} }
function EditPlanComponent_div_7_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, EditPlanComponent_div_7_div_14_label_1_Template, 2, 2, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, EditPlanComponent_div_7_div_14_label_2_Template, 2, 2, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-hint", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.subInfo.status != "trialing");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.subInfo.status == "trialing");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("font-family", ctx_r6.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", ctx_r6.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r6.planRenewalDate());
} }
function EditPlanComponent_div_7_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Plan Ends: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-hint", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("font-family", ctx_r7.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("font-family", ctx_r7.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", ctx_r7.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r7.planEndDate());
} }
function EditPlanComponent_div_7_div_16_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditPlanComponent_div_7_div_16_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r12.cancelSubscription(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Cancel Subscription ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "back_hand");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("font-family", ctx_r8.storeInfo().fontName)("background-color", ctx_r8.selectedTheme().color)("color", ctx_r8.selectedTheme().bg_color);
} }
function EditPlanComponent_div_7_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditPlanComponent_div_7_div_17_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r14.reactivateSubscription(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Reactivate Subscription ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "mat-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "check_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("font-family", ctx_r9.storeInfo().fontName)("background-color", ctx_r9.selectedTheme().color)("color", ctx_r9.selectedTheme().bg_color);
} }
function EditPlanComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, EditPlanComponent_div_7_b_8_Template, 2, 0, "b", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Price: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, EditPlanComponent_div_7_mat_hint_12_Template, 3, 7, "mat-hint", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, EditPlanComponent_div_7_mat_hint_13_Template, 5, 7, "mat-hint", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, EditPlanComponent_div_7_div_14_Template, 6, 8, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, EditPlanComponent_div_7_div_15_Template, 6, 8, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](16, EditPlanComponent_div_7_div_16_Template, 5, 8, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, EditPlanComponent_div_7_div_17_Template, 5, 8, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("font-family", ctx_r1.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", ctx_r1.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r1.planStatus(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.subInfo.status == "trialing");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("font-family", ctx_r1.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.subInfo.status != "trialing");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.subInfo.status == "trialing");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r1.subInfo.cancel_at_period_end);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.subInfo.cancel_at_period_end);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r1.subInfo.cancel_at_period_end);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.subInfo.cancel_at_period_end);
} }
function EditPlanComponent_div_8_mat_hint_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-hint", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("font-family", ctx_r16.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", ctx_r16.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r16.formatPrice(35), "/month after trial");
} }
function EditPlanComponent_div_8_mat_hint_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "mat-hint", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("font-family", ctx_r17.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", ctx_r17.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r17.formatPrice(35), "/month");
} }
function EditPlanComponent_div_8_button_14_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditPlanComponent_div_8_button_14_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r20.startSubscription(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Start Free Trial");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("font-family", ctx_r18.storeInfo().fontName)("background-color", ctx_r18.selectedTheme().color)("color", ctx_r18.selectedTheme().bg_color);
} }
function EditPlanComponent_div_8_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function EditPlanComponent_div_8_button_15_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r22.startSubscription(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Start Subscription");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("font-family", ctx_r19.storeInfo().fontName)("background-color", ctx_r19.selectedTheme().color)("color", ctx_r19.selectedTheme().bg_color);
} }
function EditPlanComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Thred Core Plan");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Price: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, EditPlanComponent_div_8_mat_hint_11_Template, 3, 6, "mat-hint", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, EditPlanComponent_div_8_mat_hint_12_Template, 3, 6, "mat-hint", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, EditPlanComponent_div_8_button_14_Template, 2, 8, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, EditPlanComponent_div_8_button_15_Template, 2, 8, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("font-family", ctx_r2.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", ctx_r2.selectedTheme().color);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("font-family", ctx_r2.storeInfo().fontName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.canTrial);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r2.canTrial);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r2.canTrial);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r2.canTrial);
} }
class EditPlanComponent {
    constructor(activeModal, loadService, spinner) {
        this.activeModal = activeModal;
        this.loadService = loadService;
        this.spinner = spinner;
        this.mode = 'new';
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
    storeInfo() { return _globals__WEBPACK_IMPORTED_MODULE_0__.Globals.storeInfo; }
    startSubscription() {
        this.spinner.show('subSpinner');
        this.loadService.startSubscription((id) => {
            this.subInfo = id;
            this.done();
        });
    }
    planStatus() {
        var _a, _b;
        console.log((_a = this.subInfo) === null || _a === void 0 ? void 0 : _a.items.data[0].plan.id);
        if (((_b = this.subInfo) === null || _b === void 0 ? void 0 : _b.plan.id) == "price_1JmgQyIdY1nzc70NXgzC1vCN") {
            return "Thred Core Plan";
        }
        return "";
    }
    planRenewalDate() {
        return new Date(this.subInfo.current_period_end * 1000).toDateString();
    }
    planEndDate() {
        return new Date(this.subInfo.cancel_at * 1000).toDateString();
    }
    formatPrice(price, short = false) {
        var priceAsString = new String(Number((price * _globals__WEBPACK_IMPORTED_MODULE_0__.Globals.selectedCurrency.rate).toFixed(2)).toLocaleString('en'));
        if (!short) {
            priceAsString = new String(Number((price * _globals__WEBPACK_IMPORTED_MODULE_0__.Globals.selectedCurrency.rate).toFixed(2)));
        }
        let index = priceAsString.indexOf(".");
        switch (index) {
            case priceAsString.length - 1:
                priceAsString += "00";
                break;
            case -1:
                priceAsString += ".00";
                break;
            case priceAsString.length - 2:
                console.log(priceAsString);
                priceAsString += "0";
                break;
            default:
                break;
        }
        return this.getCurrencyForCountry(_globals__WEBPACK_IMPORTED_MODULE_0__.Globals.selectedCurrency, _globals__WEBPACK_IMPORTED_MODULE_0__.Globals.selectedCurrency.name != "US") + priceAsString;
    }
    cancelSubscription() {
        this.spinner.show('subSpinner');
        this.loadService.stopSubscription((id) => {
            this.subInfo = id;
            this.done();
        });
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
    reactivateSubscription() {
        this.spinner.show('subSpinner');
        this.loadService.reactivateSubscription((id) => {
            this.subInfo = id;
            this.done();
        });
    }
    done() {
        this.spinner.hide('subSpinner');
        this.activeModal.dismiss(this.subInfo);
    }
    getCurrencyForCountry(country, shouldShowName) {
        var returnItem = country.currency_symbol;
        if (shouldShowName)
            returnItem = (country === null || country === void 0 ? void 0 : country.name) + " " + returnItem;
        return returnItem;
    }
    ngOnInit() {
        this.mode = this.subInfo == undefined ? 'new' : 'edit';
        console.log(this.canTrial);
    }
}
EditPlanComponent.ɵfac = function EditPlanComponent_Factory(t) { return new (t || EditPlanComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbActiveModal), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_load_service__WEBPACK_IMPORTED_MODULE_1__.LoadService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_4__.NgxSpinnerService)); };
EditPlanComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: EditPlanComponent, selectors: [["app-edit-plan"]], decls: 9, vars: 20, consts: [["size", "medium", 3, "bdColor", "color", "type", "fullScreen", "name", "disableAnimation"], [1, "row", "gx-0", "gx-md-4", "gx-lg-4", "row-cols-1", "row-cols-md-2", "row-cols-xl-2", "justify-content-center", "mx-2", "mt-2", "mx-md-3", "mt-md-3", "mx-lg-3", "mt-lg-3"], [1, "col", "h-100"], [1, "text-center", "fw-bolder", "m-2", 2, "font-size", "x-large"], ["class", "d-flex align-items-center justify-content-center mt-3 mb-2", "style", "font-size: 15px;", 4, "ngIf"], ["class", "card-body mt-2", 4, "ngIf"], [1, "d-flex", "align-items-center", "justify-content-center", "mt-3", "mb-2", 2, "font-size", "15px"], [1, "text-center", "fw-bolder", "m-2", "text-danger", 2, "font-size", "initial"], [1, "card-body", "mt-2"], [1, "rounded", "mx-auto", 2, "width", "35%", "aspect-ratio", "1 / 1"], ["role", "button", 2, "text-shadow", "2px 2px 4px #42424281"], ["src", "assets/thred_basic.png", 1, "rounded", "img-responsive", "h-100", "w-100", "p-1", 2, "object-fit", "contain"], [1, "d-block", "align-items-center", "justify-content-center", "mt-3", "mb-5", 2, "font-size", "19px"], [1, "mx-auto", "w-100", "d-flex", "align-items-center", "justify-content-center"], ["role", "button", 1, "fw-bold", "text-center", "mx-auto", 2, "text-decoration", "none"], ["style", "color: #6c757d;", 4, "ngIf"], [1, "d-block", "align-items-center", "justify-content-start", "my-2", 2, "font-size", "15px"], [1, "mb-1", "me-1", 2, "color", "#6c757d"], ["align", "start", 3, "font-family", 4, "ngIf"], ["class", "d-block align-items-center justify-content-start my-2 mb-5", "style", "font-size: 15px;", 4, "ngIf"], [2, "color", "#6c757d"], ["align", "start"], ["role", "button", 1, "fw-bold", 2, "text-decoration", "none"], [1, "d-block", "align-items-center", "justify-content-start", "my-2", "mb-5", 2, "font-size", "15px"], ["style", "color: #6c757d;", "class", " mb-1 me-1", 3, "font-family", 4, "ngIf"], [1, "btn", "d-flex", 3, "click"], [1, "ms-1"], [1, "d-block", "align-items-center", "justify-content-start", "my-2", "mb-4", 2, "font-size", "15px"], ["class", "btn d-flex", 3, "font-family", "background-color", "color", "click", 4, "ngIf"]], template: function EditPlanComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ngx-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Merchant Plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, EditPlanComponent_div_6_Template, 3, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, EditPlanComponent_div_7_Template, 18, 15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, EditPlanComponent_div_8_Template, 16, 11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", ctx.selectedIndicator().color);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("bdColor", ctx.selectedIndicator().bg_color);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("color", ctx.selectedIndicator().color);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("type", ctx.selectedIndicator().name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("fullScreen", false)("name", "subSpinner")("disableAnimation", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMapInterpolate1"]("bg-", ctx.storeInfo().colorStyle.back_code, " w-100 h-100 m-0");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("color", ctx.selectedTheme().color)("font-family", ctx.storeInfo().fontName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.mode == "edit" && ctx.subInfo.cancel_at_period_end);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.mode == "edit");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.mode == "new");
    } }, directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_4__.NgxSpinnerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatHint, _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXBsYW4uY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 58379:
/*!**********************************************************!*\
  !*** ./src/app/inventory-buy/inventory-buy.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InventoryBuyComponent": () => (/* binding */ InventoryBuyComponent)
/* harmony export */ });
/* harmony import */ var _Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ 16304);
/* harmony import */ var _models_inventory_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/inventory.model */ 30504);
/* harmony import */ var _globals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../globals */ 37503);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 39075);
/* harmony import */ var _services_load_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/load.service */ 6029);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-spinner */ 79866);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ 98295);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ 76627);












function InventoryBuyComponent_div_1_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InventoryBuyComponent_div_1_button_13_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r4.setUpAutoReload(ctx_r4.inventory);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Set up Auto-Reload");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function InventoryBuyComponent_div_1_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InventoryBuyComponent_div_1_button_14_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
      return ctx_r6.removeAutoReload(ctx_r6.inventory);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Auto-Reload");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "check_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
}

function InventoryBuyComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "label", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Remaining: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "mat-hint", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InventoryBuyComponent_div_1_Template_button_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r8.buyMore(ctx_r8.inventory);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, InventoryBuyComponent_div_1_button_13_Template, 2, 0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, InventoryBuyComponent_div_1_button_14_Template, 4, 0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", (tmp_0_0 = ctx_r0.inventory.amount) !== null && tmp_0_0 !== undefined ? tmp_0_0 : 0, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r0.getTypeImages(ctx_r0.inventory.name), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Add 100 Units for ", ctx_r0.formatPrice(ctx_r0.matchTemplate(ctx_r0.inventory).bulkPrice, true), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r0.inventory.autoReload);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.inventory.autoReload);
  }
}

function InventoryBuyComponent_div_2_p_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "additional");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, " side)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("(-", ctx_r10.formatPrice(((tmp_0_0 = ctx_r10.template == null ? null : ctx_r10.template.extraCost) !== null && tmp_0_0 !== undefined ? tmp_0_0 : 0) / 100, true), " per. ");
  }
}

function InventoryBuyComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h2", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function InventoryBuyComponent_div_2_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
      return ctx_r11.buyNew(ctx_r11.template);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "check_circle");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "h2", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "\u2022 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, " on every sale, giving you full control on pricing. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, InventoryBuyComponent_div_2_p_22_Template, 5, 1, "p", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, "\u2022 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](30, "(Profit: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "\u2022 When you pre-purchase your inventory, you have ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37, "full ownership");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](39, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "\u2022 Thred will fulfill your orders/manage your inventory with ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "no added cost");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](47, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, "(Sit back, and make money \uD83C\uDFA8\uD83D\uDCB0)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    let tmp_5_0;
    let tmp_7_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.template.templateDisplayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r1.getTypeImages(ctx_r1.template.templateDisplayName), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("Buy ", ctx_r1.template.bulkUnit, " Units for ", ctx_r1.formatPrice(ctx_r1.template.bulkPrice / 100 * ctx_r1.template.bulkUnit, true), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Benefits of pre-purchasing ", ctx_r1.template.templateDisplayName.toLowerCase(), ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r1.calculateMarginPercent(ctx_r1.template), "% margins");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx_r1.template.supportedSides.length) !== null && tmp_5_0 !== undefined ? tmp_5_0 : 0) > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", ctx_r1.calculateMarginDifference(ctx_r1.template), "x your current margins");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" when pricing at ", ctx_r1.formatPrice(((tmp_7_0 = ctx_r1.template == null ? null : ctx_r1.template.bulkSuggestPrice) !== null && tmp_7_0 !== undefined ? tmp_7_0 : 0) / 100), ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx_r1.formatPrice(ctx_r1.calculateMargin(true, ctx_r1.template)), " per. ", ctx_r1.template.templateDisplayName.slice(0, -1).toLowerCase(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("(You own your ", ctx_r1.template.bulkUnit, " ", ctx_r1.template.templateDisplayName.toLowerCase(), ")");
  }
}

class InventoryBuyComponent {
  constructor(sanitizer, loadService, spinner, activeModal) {
    this.sanitizer = sanitizer;
    this.loadService = loadService;
    this.spinner = spinner;
    this.activeModal = activeModal;
    this.mode = "new";
  }

  storeInfo() {
    return _globals__WEBPACK_IMPORTED_MODULE_2__.Globals.storeInfo;
  }

  templates() {
    return _globals__WEBPACK_IMPORTED_MODULE_2__.Globals.templates;
  }

  calculateMarginPercent(template) {
    return Math.round(this.calculateMargin(true, template) / (template.bulkSuggestPrice / 100) * 100);
  }

  calculateMarginDifference(template) {
    return Math.round((template.bulkSuggestPrice - template.bulkPrice) * 0.95 / ((template.bulkSuggestPrice - template.minPrice) * 0.90));
  }

  calculateMargin(isBulk, template) {
    if (isBulk) {
      return (template.bulkSuggestPrice - template.bulkPrice) * 0.95 / 100;
    }

    return (template.bulkSuggestPrice - template.minPrice) * 0.90 / 100;
  }

  matchTemplate(inventory) {
    return this.templates().filter(obj => {
      return obj.productCode == inventory.code;
    })[0];
  }

  formatPrice(price, short = false) {
    var priceAsString = new String(Number(Math.round(price * _globals__WEBPACK_IMPORTED_MODULE_2__.Globals.selectedCurrency.rate).toFixed(2)).toLocaleString('en'));

    if (!short) {
      priceAsString = new String(Number((price * _globals__WEBPACK_IMPORTED_MODULE_2__.Globals.selectedCurrency.rate).toFixed(2)).toLocaleString('en'));
    }

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

    return this.getCurrencyForCountry(_globals__WEBPACK_IMPORTED_MODULE_2__.Globals.selectedCurrency, _globals__WEBPACK_IMPORTED_MODULE_2__.Globals.selectedCurrency.name != "US") + priceAsString;
  }

  getCurrencyForCountry(country, shouldShowName) {
    var returnItem = country.currency_symbol;
    if (shouldShowName) returnItem = (country === null || country === void 0 ? void 0 : country.name) + " " + returnItem;
    return returnItem;
  }

  buyMore(inventory) {
    var _this = this;

    return (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this.spinner.show("invSpinner");

      yield _this.loadService.createBulkPayment(inventory.code, id => {
        if (_this.inventory) {
          _this.inventory.amount += _this.matchTemplate(inventory).bulkUnit;
        }

        _this.spinner.hide("invSpinner");

        _this.activeModal.dismiss(_this.inventory);

        _this.toast(_this.matchTemplate(inventory).bulkUnit + " " + inventory.name.toLowerCase() + " added to inventory!");
      });
    })();
  }

  selectedIndicator() {
    var _a, _b, _c, _d, _e, _f;

    let co = (_b = (_a = _globals__WEBPACK_IMPORTED_MODULE_2__.Globals.storeInfo) === null || _a === void 0 ? void 0 : _a.loading) === null || _b === void 0 ? void 0 : _b.color;
    let bco = (_d = (_c = _globals__WEBPACK_IMPORTED_MODULE_2__.Globals.storeInfo) === null || _c === void 0 ? void 0 : _c.loading) === null || _d === void 0 ? void 0 : _d.bg_color;
    let name = (_f = (_e = _globals__WEBPACK_IMPORTED_MODULE_2__.Globals.storeInfo) === null || _e === void 0 ? void 0 : _e.loading) === null || _f === void 0 ? void 0 : _f.name;
    let color = "rgba(" + co[0] + "," + co[1] + "," + co[2] + "," + co[3] + ")";
    let bg_color = "rgba(" + bco[0] + "," + bco[1] + "," + bco[2] + "," + bco[3] + ")";
    let indicator = {
      "name": name,
      "color": color,
      "bg_color": bg_color
    };
    return indicator;
  }

  buyNew(template) {
    var _this2 = this;

    return (0,_Users_artakoroushnia_Desktop_thred_web_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__.default)(function* () {
      _this2.spinner.show("invSpinner");

      yield _this2.loadService.createBulkPayment(template.productCode, id => {
        _this2.inventory = new _models_inventory_model__WEBPACK_IMPORTED_MODULE_1__.Inventory(template.productCode, template.templateDisplayName, template.bulkUnit, new Date(), id, true);
        _this2.mode = "add";

        _this2.spinner.hide("invSpinner");

        _this2.activeModal.dismiss(_this2.inventory);

        _this2.toast(template.bulkUnit + " " + template.templateDisplayName.toLowerCase() + " added to inventory!");
      });
    })();
  }

  toast(message) {
    this.loadService.openSnackBar(message);
  }

  selectedTheme() {
    var _a, _b, _c, _d, _e, _f;

    let co = (_b = (_a = _globals__WEBPACK_IMPORTED_MODULE_2__.Globals.storeInfo) === null || _a === void 0 ? void 0 : _a.colorStyle) === null || _b === void 0 ? void 0 : _b.btn_color;
    let bco = (_d = (_c = _globals__WEBPACK_IMPORTED_MODULE_2__.Globals.storeInfo) === null || _c === void 0 ? void 0 : _c.colorStyle) === null || _d === void 0 ? void 0 : _d.bg_color;
    let name = (_f = (_e = _globals__WEBPACK_IMPORTED_MODULE_2__.Globals.storeInfo) === null || _e === void 0 ? void 0 : _e.colorStyle) === null || _f === void 0 ? void 0 : _f.name;
    let color = "rgba(" + co[0] + "," + co[1] + "," + co[2] + "," + co[3] + ")";
    let bg_color = "rgba(" + bco[0] + "," + bco[1] + "," + bco[2] + "," + bco[3] + ")";
    var theme = {
      "name": name,
      "color": color,
      "bg_color": bg_color
    };
    return theme;
  }

  removeAutoReload(inventory) {
    this.loadService.removeAutoReload(inventory, success => {
      if (success) {
        inventory.autoReload = false;
        this.toast("Auto-Reload for " + inventory.name.toLowerCase() + " removed");
      }
    });
  }

  setUpAutoReload(inventory) {
    this.loadService.setAutoReload(inventory, success => {
      if (success) {
        inventory.autoReload = true;
        this.toast("Auto-Reload for " + inventory.name.toLowerCase() + " set");
      }
    });
  }

  getTypeImages(templateName) {
    let template = _globals__WEBPACK_IMPORTED_MODULE_2__.Globals.templates.filter(obj => {
      return obj.templateDisplayName == templateName;
    })[0];
    var len = template.colors.filter(obj => {
      return obj.code == "black";
    });
    var img;

    if (len.length == 0) {
      img = template.colors.filter(obj => {
        return obj.code == "white";
      })[0].img;
    } else {
      img = len[0].img;
    }

    return this.sanitizer.bypassSecurityTrustResourceUrl("data:image/jpeg;base64," + img);
  }

  ngOnInit() {
    this.mode = this.inventory == undefined ? 'new' : 'add';
  }

}

InventoryBuyComponent.ɵfac = function InventoryBuyComponent_Factory(t) {
  return new (t || InventoryBuyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_load_service__WEBPACK_IMPORTED_MODULE_3__.LoadService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_6__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbActiveModal));
};

InventoryBuyComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: InventoryBuyComponent,
  selectors: [["app-inventory-buy"]],
  decls: 3,
  vars: 11,
  consts: [["size", "medium", 3, "bdColor", "color", "type", "fullScreen", "name", "disableAnimation"], ["class", "my-4", 4, "ngIf"], [1, "my-4"], [1, "d-flex", "align-items-center", "justify-content-center", "my-3", 2, "font-size", "28px"], [1, "mb-1", "me-1", "text-center", "fw-bold", 2, "color", "#6c757d"], ["align", "start"], ["role", "button", 1, "fw-bolder", "text-center", "text-dark", 2, "text-decoration", "none"], [1, "rounded", "mx-auto", 2, "width", "35%", "aspect-ratio", "1 / 1"], ["role", "button", 2, "text-shadow", "2px 2px 4px #42424281"], [1, "rounded", "img-responsive", "h-100", "w-100", "p-1", 2, "object-fit", "contain", "background-color", "#cdf4fc", 3, "src"], [1, "d-block", "align-items-center", "justify-content-center", "mt-4", "mb-5", 2, "font-size", "15px"], [1, "btn", "btn-dark", "d-flex", "my-2", "mx-auto", "d-flex", "align-items-center", "justify-content-center", 2, "width", "35%", 3, "click"], ["class", "btn btn-dark d-flex align-items-center justify-content-center mx-auto my-2 fw-bolder", "style", "width: 35%;", 3, "click", 4, "ngIf"], ["class", "btn btn-success d-flex align-items-center justify-content-center mx-auto my-2 fw-bolder", "style", "width: 35%;", 3, "click", 4, "ngIf"], [1, "btn", "btn-dark", "d-flex", "align-items-center", "justify-content-center", "mx-auto", "my-2", "fw-bolder", 2, "width", "35%", 3, "click"], [1, "btn", "btn-success", "d-flex", "align-items-center", "justify-content-center", "mx-auto", "my-2", "fw-bolder", 2, "width", "35%", 3, "click"], [1, "ms-1"], [1, "text-center", "fw-bolder", "m-2", 2, "font-size", "x-large"], [1, "btn", "btn-dark", "d-flex", "my-2", "align-items-center", "justify-content-between", "mx-auto", "fw-bolder", 2, "width", "35%", 3, "click"], [1, "d-flex", "align-items-center", "justify-content-center"], [2, "width", "fit-content"], [1, "text-start", "fw-bolder", "m-2", 2, "font-size", "x-large"], [1, "text-start", "m-2"], ["style", "color: #6c757d;", 4, "ngIf"], [2, "color", "#6c757d"]],
  template: function InventoryBuyComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "ngx-spinner", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, InventoryBuyComponent_div_1_Template, 15, 5, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, InventoryBuyComponent_div_2_Template, 50, 13, "div", 1);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("color", ctx.selectedIndicator().color);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("bdColor", ctx.selectedIndicator().bg_color);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("color", ctx.selectedIndicator().color);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("type", ctx.selectedIndicator().name);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("fullScreen", false)("name", "invSpinner")("disableAnimation", true);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.mode == "add");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.mode == "new");
    }
  },
  directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_6__.NgxSpinnerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__.MatHint, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIcon],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnZlbnRvcnktYnV5LmNvbXBvbmVudC5jc3MifQ== */"]
});

/***/ }),

/***/ 36032:
/*!************************************************************!*\
  !*** ./src/app/inventory-list/inventory-list.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InventoryListComponent": () => (/* binding */ InventoryListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);

class InventoryListComponent {
    constructor() { }
    ngOnInit() {
    }
}
InventoryListComponent.ɵfac = function InventoryListComponent_Factory(t) { return new (t || InventoryListComponent)(); };
InventoryListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InventoryListComponent, selectors: [["app-inventory-list"]], decls: 2, vars: 0, template: function InventoryListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "inventory-list works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnZlbnRvcnktbGlzdC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 38554:
/*!******************************************************!*\
  !*** ./src/app/social-form/social-form.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SocialFormComponent": () => (/* binding */ SocialFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ 76627);




class SocialFormComponent {
    constructor(fb, activeModal) {
        this.fb = fb;
        this.activeModal = activeModal;
        this.socialForm = this.fb.group({
            link: [null],
        });
    }
    ngOnInit() {
        console.log(this.linkImg);
    }
    close() {
        this.activeModal.dismiss();
    }
    finish() {
        var _a;
        var returnItem = (_a = this.socialForm.controls.link.value) !== null && _a !== void 0 ? _a : undefined;
        console.log(returnItem);
        this.activeModal.dismiss(returnItem);
    }
    myInnerHeight() {
        let height = window.innerHeight;
        let width = window.innerWidth;
        if (width < height) {
            return width * 0.98;
        }
        else {
            return height * 0.70;
        }
    }
}
SocialFormComponent.ɵfac = function SocialFormComponent_Factory(t) { return new (t || SocialFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbActiveModal)); };
SocialFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SocialFormComponent, selectors: [["app-social-form"]], decls: 22, vars: 5, consts: [[1, "w-100", "rounded", 2, "background-color", "#e6e6e6", "position", "relative"], [1, "bg-light", "rounded-top", "d-flex", "justify-content-between", "align-items-center", "px-3", 2, "height", "70px"], ["role", "button", 2, "text-shadow", "2px 2px 4px #42424281", 3, "click"], [1, "p-0", "pt-0", "w-100"], [1, "container-contact1", "rounded-bottom", "w-100", "h-100", "p-2", "d-flex", "justify-content-center"], [1, "w-100", "py-1", "d-flex", "justify-content-center"], [1, "contact1-pic", "w-100"], ["alt", "IMG", 1, "w-100", 2, "object-fit", "contain", "height", "100px", 3, "src"], [1, "mt-4", "px-3", "px-md-5", "px-lg-5", "w-100", "contact1-form", 3, "formGroup"], [1, "contact1-form-title", "mb-4", "fw-bolder", 2, "font-size", "20px"], [1, "wrap-input1", "w-100", "mb-3"], ["type", "text", "name", "link", "formControlName", "link", 1, "input1", "w-100", "py-3", "px-3", "px-lg-4", "px-md-4", "fw-bold", 3, "placeholder"], [1, "shadow-input1", "py-3", "px-2", "px-lg-4", "px-md-4"], [1, "container-contact1-form-btn", "mb-4", "mt-auto", "w-100"], [1, "contact1-form-btn", 3, "click"], [1, "my-auto", "p-3", "px-4", "fw-bolder"]], template: function SocialFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SocialFormComponent_Template_a_click_3_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "highlight_off");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SocialFormComponent_Template_button_click_19_listener() { return ctx.finish(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.linkImg, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.socialForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("placeholder", "", ctx.name, " URL");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Save ", ctx.name, " URL ");
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_3__.MatIcon, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName], styles: [".animated[_ngcontent-%COMP%] {\n    animation-duration: 1s;\n    animation-fill-mode: both;\n  }\n  \n  .animated.infinite[_ngcontent-%COMP%] {\n    animation-iteration-count: infinite;\n  }\n  \n  .animated.hinge[_ngcontent-%COMP%] {\n    animation-duration: 2s;\n  }\n  \n  .animated.flipOutX[_ngcontent-%COMP%], .animated.flipOutY[_ngcontent-%COMP%], .animated.bounceIn[_ngcontent-%COMP%], .animated.bounceOut[_ngcontent-%COMP%] {\n    animation-duration: .75s;\n  }\n  \n  .modal-dialog[_ngcontent-%COMP%] {\n    position:fixed;\n    top:auto;\n    right:auto;\n    left:auto;\n    bottom:0;\n }\n  \n  @keyframes bounce {\n    from, 20%, 53%, 80%, to {\n      animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n      transform: translate3d(0,0,0);\n    }\n  \n    40%, 43% {\n      animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n      transform: translate3d(0, -30px, 0);\n    }\n  \n    70% {\n      animation-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);\n      transform: translate3d(0, -15px, 0);\n    }\n  \n    90% {\n      transform: translate3d(0,-4px,0);\n    }\n  }\n  \n  .bounce[_ngcontent-%COMP%] {\n    animation-name: bounce;\n    transform-origin: center bottom;\n  }\n  \n  @keyframes flash {\n    from, 50%, to {\n      opacity: 1;\n    }\n  \n    25%, 75% {\n      opacity: 0;\n    }\n  }\n  \n  .flash[_ngcontent-%COMP%] {\n    animation-name: flash;\n  }\n  \n  \n  \n  @keyframes pulse {\n    from {\n      transform: scale3d(1, 1, 1);\n    }\n  \n    50% {\n      transform: scale3d(1.05, 1.05, 1.05);\n    }\n  \n    to {\n      transform: scale3d(1, 1, 1);\n    }\n  }\n  \n  .pulse[_ngcontent-%COMP%] {\n    animation-name: pulse;\n  }\n  \n  @keyframes rubberBand {\n    from {\n      transform: scale3d(1, 1, 1);\n    }\n  \n    30% {\n      transform: scale3d(1.25, 0.75, 1);\n    }\n  \n    40% {\n      transform: scale3d(0.75, 1.25, 1);\n    }\n  \n    50% {\n      transform: scale3d(1.15, 0.85, 1);\n    }\n  \n    65% {\n      transform: scale3d(.95, 1.05, 1);\n    }\n  \n    75% {\n      transform: scale3d(1.05, .95, 1);\n    }\n  \n    to {\n      transform: scale3d(1, 1, 1);\n    }\n  }\n  \n  .rubberBand[_ngcontent-%COMP%] {\n    animation-name: rubberBand;\n  }\n  \n  @keyframes shake {\n    from, to {\n      transform: translate3d(0, 0, 0);\n    }\n  \n    10%, 30%, 50%, 70%, 90% {\n      transform: translate3d(-10px, 0, 0);\n    }\n  \n    20%, 40%, 60%, 80% {\n      transform: translate3d(10px, 0, 0);\n    }\n  }\n  \n  .shake[_ngcontent-%COMP%] {\n    animation-name: shake;\n  }\n  \n  @keyframes headShake {\n    0% {\n      transform: translateX(0);\n    }\n  \n    6.5% {\n      transform: translateX(-6px) rotateY(-9deg);\n    }\n  \n    18.5% {\n      transform: translateX(5px) rotateY(7deg);\n    }\n  \n    31.5% {\n      transform: translateX(-3px) rotateY(-5deg);\n    }\n  \n    43.5% {\n      transform: translateX(2px) rotateY(3deg);\n    }\n  \n    50% {\n      transform: translateX(0);\n    }\n  }\n  \n  .headShake[_ngcontent-%COMP%] {\n    animation-timing-function: ease-in-out;\n    animation-name: headShake;\n  }\n  \n  @keyframes swing {\n    20% {\n      transform: rotate3d(0, 0, 1, 15deg);\n    }\n  \n    40% {\n      transform: rotate3d(0, 0, 1, -10deg);\n    }\n  \n    60% {\n      transform: rotate3d(0, 0, 1, 5deg);\n    }\n  \n    80% {\n      transform: rotate3d(0, 0, 1, -5deg);\n    }\n  \n    to {\n      transform: rotate3d(0, 0, 1, 0deg);\n    }\n  }\n  \n  .swing[_ngcontent-%COMP%] {\n    transform-origin: top center;\n    animation-name: swing;\n  }\n  \n  @keyframes tada {\n    from {\n      transform: scale3d(1, 1, 1);\n    }\n  \n    10%, 20% {\n      transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);\n    }\n  \n    30%, 50%, 70%, 90% {\n      transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);\n    }\n  \n    40%, 60%, 80% {\n      transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);\n    }\n  \n    to {\n      transform: scale3d(1, 1, 1);\n    }\n  }\n  \n  .tada[_ngcontent-%COMP%] {\n    animation-name: tada;\n  }\n  \n  \n  \n  @keyframes wobble {\n    from {\n      transform: none;\n    }\n  \n    15% {\n      transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);\n    }\n  \n    30% {\n      transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);\n    }\n  \n    45% {\n      transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);\n    }\n  \n    60% {\n      transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);\n    }\n  \n    75% {\n      transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);\n    }\n  \n    to {\n      transform: none;\n    }\n  }\n  \n  .wobble[_ngcontent-%COMP%] {\n    animation-name: wobble;\n  }\n  \n  @keyframes jello {\n    from, 11.1%, to {\n      transform: none;\n    }\n  \n    22.2% {\n      transform: skewX(-12.5deg) skewY(-12.5deg);\n    }\n  \n    33.3% {\n      transform: skewX(6.25deg) skewY(6.25deg);\n    }\n  \n    44.4% {\n      transform: skewX(-3.125deg) skewY(-3.125deg);\n    }\n  \n    55.5% {\n      transform: skewX(1.5625deg) skewY(1.5625deg);\n    }\n  \n    66.6% {\n      transform: skewX(-0.78125deg) skewY(-0.78125deg);\n    }\n  \n    77.7% {\n      transform: skewX(0.390625deg) skewY(0.390625deg);\n    }\n  \n    88.8% {\n      transform: skewX(-0.1953125deg) skewY(-0.1953125deg);\n    }\n  }\n  \n  .jello[_ngcontent-%COMP%] {\n    animation-name: jello;\n    transform-origin: center;\n  }\n  \n  @keyframes bounceIn {\n    from, 20%, 40%, 60%, 80%, to {\n      animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    }\n  \n    0% {\n      opacity: 0;\n      transform: scale3d(.3, .3, .3);\n    }\n  \n    20% {\n      transform: scale3d(1.1, 1.1, 1.1);\n    }\n  \n    40% {\n      transform: scale3d(.9, .9, .9);\n    }\n  \n    60% {\n      opacity: 1;\n      transform: scale3d(1.03, 1.03, 1.03);\n    }\n  \n    80% {\n      transform: scale3d(.97, .97, .97);\n    }\n  \n    to {\n      opacity: 1;\n      transform: scale3d(1, 1, 1);\n    }\n  }\n  \n  .bounceIn[_ngcontent-%COMP%] {\n    animation-name: bounceIn;\n  }\n  \n  @keyframes bounceInDown {\n    from, 60%, 75%, 90%, to {\n      animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    }\n  \n    0% {\n      opacity: 0;\n      transform: translate3d(0, -3000px, 0);\n    }\n  \n    60% {\n      opacity: 1;\n      transform: translate3d(0, 25px, 0);\n    }\n  \n    75% {\n      transform: translate3d(0, -10px, 0);\n    }\n  \n    90% {\n      transform: translate3d(0, 5px, 0);\n    }\n  \n    to {\n      transform: none;\n    }\n  }\n  \n  .bounceInDown[_ngcontent-%COMP%] {\n    animation-name: bounceInDown;\n  }\n  \n  @keyframes bounceInLeft {\n    from, 60%, 75%, 90%, to {\n      animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    }\n  \n    0% {\n      opacity: 0;\n      transform: translate3d(-3000px, 0, 0);\n    }\n  \n    60% {\n      opacity: 1;\n      transform: translate3d(25px, 0, 0);\n    }\n  \n    75% {\n      transform: translate3d(-10px, 0, 0);\n    }\n  \n    90% {\n      transform: translate3d(5px, 0, 0);\n    }\n  \n    to {\n      transform: none;\n    }\n  }\n  \n  .bounceInLeft[_ngcontent-%COMP%] {\n    animation-name: bounceInLeft;\n  }\n  \n  @keyframes bounceInRight {\n    from, 60%, 75%, 90%, to {\n      animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    }\n  \n    from {\n      opacity: 0;\n      transform: translate3d(3000px, 0, 0);\n    }\n  \n    60% {\n      opacity: 1;\n      transform: translate3d(-25px, 0, 0);\n    }\n  \n    75% {\n      transform: translate3d(10px, 0, 0);\n    }\n  \n    90% {\n      transform: translate3d(-5px, 0, 0);\n    }\n  \n    to {\n      transform: none;\n    }\n  }\n  \n  .bounceInRight[_ngcontent-%COMP%] {\n    animation-name: bounceInRight;\n  }\n  \n  @keyframes bounceInUp {\n    from, 60%, 75%, 90%, to {\n      animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\n    }\n  \n    from {\n      opacity: 0;\n      transform: translate3d(0, 3000px, 0);\n    }\n  \n    60% {\n      opacity: 1;\n      transform: translate3d(0, -20px, 0);\n    }\n  \n    75% {\n      transform: translate3d(0, 10px, 0);\n    }\n  \n    90% {\n      transform: translate3d(0, -5px, 0);\n    }\n  \n    to {\n      transform: translate3d(0, 0, 0);\n    }\n  }\n  \n  .bounceInUp[_ngcontent-%COMP%] {\n    animation-name: bounceInUp;\n  }\n  \n  @keyframes bounceOut {\n    20% {\n      transform: scale3d(.9, .9, .9);\n    }\n  \n    50%, 55% {\n      opacity: 1;\n      transform: scale3d(1.1, 1.1, 1.1);\n    }\n  \n    to {\n      opacity: 0;\n      transform: scale3d(.3, .3, .3);\n    }\n  }\n  \n  .bounceOut[_ngcontent-%COMP%] {\n    animation-name: bounceOut;\n  }\n  \n  @keyframes bounceOutDown {\n    20% {\n      transform: translate3d(0, 10px, 0);\n    }\n  \n    40%, 45% {\n      opacity: 1;\n      transform: translate3d(0, -20px, 0);\n    }\n  \n    to {\n      opacity: 0;\n      transform: translate3d(0, 2000px, 0);\n    }\n  }\n  \n  .bounceOutDown[_ngcontent-%COMP%] {\n    animation-name: bounceOutDown;\n  }\n  \n  @keyframes bounceOutLeft {\n    20% {\n      opacity: 1;\n      transform: translate3d(20px, 0, 0);\n    }\n  \n    to {\n      opacity: 0;\n      transform: translate3d(-2000px, 0, 0);\n    }\n  }\n  \n  .bounceOutLeft[_ngcontent-%COMP%] {\n    animation-name: bounceOutLeft;\n  }\n  \n  @keyframes bounceOutRight {\n    20% {\n      opacity: 1;\n      transform: translate3d(-20px, 0, 0);\n    }\n  \n    to {\n      opacity: 0;\n      transform: translate3d(2000px, 0, 0);\n    }\n  }\n  \n  .bounceOutRight[_ngcontent-%COMP%] {\n    animation-name: bounceOutRight;\n  }\n  \n  @keyframes bounceOutUp {\n    20% {\n      transform: translate3d(0, -10px, 0);\n    }\n  \n    40%, 45% {\n      opacity: 1;\n      transform: translate3d(0, 20px, 0);\n    }\n  \n    to {\n      opacity: 0;\n      transform: translate3d(0, -2000px, 0);\n    }\n  }\n  \n  .bounceOutUp[_ngcontent-%COMP%] {\n    animation-name: bounceOutUp;\n  }\n  \n  @keyframes fadeIn {\n    from {\n      opacity: 0;\n    }\n  \n    to {\n      opacity: 1;\n    }\n  }\n  \n  .fadeIn[_ngcontent-%COMP%] {\n    animation-name: fadeIn;\n  }\n  \n  @keyframes fadeInDown {\n    from {\n      opacity: 0;\n      transform: translate3d(0, -100%, 0);\n    }\n  \n    to {\n      opacity: 1;\n      transform: none;\n    }\n  }\n  \n  .fadeInDown[_ngcontent-%COMP%] {\n    animation-name: fadeInDown;\n  }\n  \n  @keyframes fadeInDownBig {\n    from {\n      opacity: 0;\n      transform: translate3d(0, -2000px, 0);\n    }\n  \n    to {\n      opacity: 1;\n      transform: none;\n    }\n  }\n  \n  .fadeInDownBig[_ngcontent-%COMP%] {\n    animation-name: fadeInDownBig;\n  }\n  \n  @keyframes fadeInLeft {\n    from {\n      opacity: 0;\n      transform: translate3d(-100%, 0, 0);\n    }\n  \n    to {\n      opacity: 1;\n      transform: none;\n    }\n  }\n  \n  .fadeInLeft[_ngcontent-%COMP%] {\n    animation-name: fadeInLeft;\n  }\n  \n  @keyframes fadeInLeftBig {\n    from {\n      opacity: 0;\n      transform: translate3d(-2000px, 0, 0);\n    }\n  \n    to {\n      opacity: 1;\n      transform: none;\n    }\n  }\n  \n  .fadeInLeftBig[_ngcontent-%COMP%] {\n    animation-name: fadeInLeftBig;\n  }\n  \n  @keyframes fadeInRight {\n    from {\n      opacity: 0;\n      transform: translate3d(100%, 0, 0);\n    }\n  \n    to {\n      opacity: 1;\n      transform: none;\n    }\n  }\n  \n  .fadeInRight[_ngcontent-%COMP%] {\n    animation-name: fadeInRight;\n  }\n  \n  @keyframes fadeInRightBig {\n    from {\n      opacity: 0;\n      transform: translate3d(2000px, 0, 0);\n    }\n  \n    to {\n      opacity: 1;\n      transform: none;\n    }\n  }\n  \n  .fadeInRightBig[_ngcontent-%COMP%] {\n    animation-name: fadeInRightBig;\n  }\n  \n  @keyframes fadeInUp {\n    from {\n      opacity: 0;\n      transform: translate3d(0, 100%, 0);\n    }\n  \n    to {\n      opacity: 1;\n      transform: none;\n    }\n  }\n  \n  .fadeInUp[_ngcontent-%COMP%] {\n    animation-name: fadeInUp;\n  }\n  \n  @keyframes fadeInUpBig {\n    from {\n      opacity: 0;\n      transform: translate3d(0, 2000px, 0);\n    }\n  \n    to {\n      opacity: 1;\n      transform: none;\n    }\n  }\n  \n  .fadeInUpBig[_ngcontent-%COMP%] {\n    animation-name: fadeInUpBig;\n  }\n  \n  @keyframes fadeOut {\n    from {\n      opacity: 1;\n    }\n  \n    to {\n      opacity: 0;\n    }\n  }\n  \n  .fadeOut[_ngcontent-%COMP%] {\n    animation-name: fadeOut;\n  }\n  \n  @keyframes fadeOutDown {\n    from {\n      opacity: 1;\n    }\n  \n    to {\n      opacity: 0;\n      transform: translate3d(0, 100%, 0);\n    }\n  }\n  \n  .fadeOutDown[_ngcontent-%COMP%] {\n    animation-name: fadeOutDown;\n  }\n  \n  @keyframes fadeOutDownBig {\n    from {\n      opacity: 1;\n    }\n  \n    to {\n      opacity: 0;\n      transform: translate3d(0, 2000px, 0);\n    }\n  }\n  \n  .fadeOutDownBig[_ngcontent-%COMP%] {\n    animation-name: fadeOutDownBig;\n  }\n  \n  @keyframes fadeOutLeft {\n    from {\n      opacity: 1;\n    }\n  \n    to {\n      opacity: 0;\n      transform: translate3d(-100%, 0, 0);\n    }\n  }\n  \n  .fadeOutLeft[_ngcontent-%COMP%] {\n    animation-name: fadeOutLeft;\n  }\n  \n  @keyframes fadeOutLeftBig {\n    from {\n      opacity: 1;\n    }\n  \n    to {\n      opacity: 0;\n      transform: translate3d(-2000px, 0, 0);\n    }\n  }\n  \n  .fadeOutLeftBig[_ngcontent-%COMP%] {\n    animation-name: fadeOutLeftBig;\n  }\n  \n  @keyframes fadeOutRight {\n    from {\n      opacity: 1;\n    }\n  \n    to {\n      opacity: 0;\n      transform: translate3d(100%, 0, 0);\n    }\n  }\n  \n  .fadeOutRight[_ngcontent-%COMP%] {\n    animation-name: fadeOutRight;\n  }\n  \n  @keyframes fadeOutRightBig {\n    from {\n      opacity: 1;\n    }\n  \n    to {\n      opacity: 0;\n      transform: translate3d(2000px, 0, 0);\n    }\n  }\n  \n  .fadeOutRightBig[_ngcontent-%COMP%] {\n    animation-name: fadeOutRightBig;\n  }\n  \n  @keyframes fadeOutUp {\n    from {\n      opacity: 1;\n    }\n  \n    to {\n      opacity: 0;\n      transform: translate3d(0, -100%, 0);\n    }\n  }\n  \n  .fadeOutUp[_ngcontent-%COMP%] {\n    animation-name: fadeOutUp;\n  }\n  \n  @keyframes fadeOutUpBig {\n    from {\n      opacity: 1;\n    }\n  \n    to {\n      opacity: 0;\n      transform: translate3d(0, -2000px, 0);\n    }\n  }\n  \n  .fadeOutUpBig[_ngcontent-%COMP%] {\n    animation-name: fadeOutUpBig;\n  }\n  \n  @keyframes flip {\n    from {\n      transform: perspective(400px) rotate3d(0, 1, 0, -360deg);\n      animation-timing-function: ease-out;\n    }\n  \n    40% {\n      transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);\n      animation-timing-function: ease-out;\n    }\n  \n    50% {\n      transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);\n      animation-timing-function: ease-in;\n    }\n  \n    80% {\n      transform: perspective(400px) scale3d(.95, .95, .95);\n      animation-timing-function: ease-in;\n    }\n  \n    to {\n      transform: perspective(400px);\n      animation-timing-function: ease-in;\n    }\n  }\n  \n  .animated.flip[_ngcontent-%COMP%] {\n    -webkit-backface-visibility: visible;\n    backface-visibility: visible;\n    animation-name: flip;\n  }\n  \n  @keyframes flipInX {\n    from {\n      transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n      animation-timing-function: ease-in;\n      opacity: 0;\n    }\n  \n    40% {\n      transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n      animation-timing-function: ease-in;\n    }\n  \n    60% {\n      transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\n      opacity: 1;\n    }\n  \n    80% {\n      transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\n    }\n  \n    to {\n      transform: perspective(400px);\n    }\n  }\n  \n  .flipInX[_ngcontent-%COMP%] {\n    -webkit-backface-visibility: visible !important;\n    backface-visibility: visible !important;\n    animation-name: flipInX;\n  }\n  \n  @keyframes flipInY {\n    from {\n      transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n      animation-timing-function: ease-in;\n      opacity: 0;\n    }\n  \n    40% {\n      transform: perspective(400px) rotate3d(0, 1, 0, -20deg);\n      animation-timing-function: ease-in;\n    }\n  \n    60% {\n      transform: perspective(400px) rotate3d(0, 1, 0, 10deg);\n      opacity: 1;\n    }\n  \n    80% {\n      transform: perspective(400px) rotate3d(0, 1, 0, -5deg);\n    }\n  \n    to {\n      transform: perspective(400px);\n    }\n  }\n  \n  .flipInY[_ngcontent-%COMP%] {\n    -webkit-backface-visibility: visible !important;\n    backface-visibility: visible !important;\n    animation-name: flipInY;\n  }\n  \n  @keyframes flipOutX {\n    from {\n      transform: perspective(400px);\n    }\n  \n    30% {\n      transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\n      opacity: 1;\n    }\n  \n    to {\n      transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\n      opacity: 0;\n    }\n  }\n  \n  .flipOutX[_ngcontent-%COMP%] {\n    animation-name: flipOutX;\n    -webkit-backface-visibility: visible !important;\n    backface-visibility: visible !important;\n  }\n  \n  @keyframes flipOutY {\n    from {\n      transform: perspective(400px);\n    }\n  \n    30% {\n      transform: perspective(400px) rotate3d(0, 1, 0, -15deg);\n      opacity: 1;\n    }\n  \n    to {\n      transform: perspective(400px) rotate3d(0, 1, 0, 90deg);\n      opacity: 0;\n    }\n  }\n  \n  .flipOutY[_ngcontent-%COMP%] {\n    -webkit-backface-visibility: visible !important;\n    backface-visibility: visible !important;\n    animation-name: flipOutY;\n  }\n  \n  @keyframes lightSpeedIn {\n    from {\n      transform: translate3d(100%, 0, 0) skewX(-30deg);\n      opacity: 0;\n    }\n  \n    60% {\n      transform: skewX(20deg);\n      opacity: 1;\n    }\n  \n    80% {\n      transform: skewX(-5deg);\n      opacity: 1;\n    }\n  \n    to {\n      transform: none;\n      opacity: 1;\n    }\n  }\n  \n  .lightSpeedIn[_ngcontent-%COMP%] {\n    animation-name: lightSpeedIn;\n    animation-timing-function: ease-out;\n  }\n  \n  @keyframes lightSpeedOut {\n    from {\n      opacity: 1;\n    }\n  \n    to {\n      transform: translate3d(100%, 0, 0) skewX(30deg);\n      opacity: 0;\n    }\n  }\n  \n  .lightSpeedOut[_ngcontent-%COMP%] {\n    animation-name: lightSpeedOut;\n    animation-timing-function: ease-in;\n  }\n  \n  @keyframes rotateIn {\n    from {\n      transform-origin: center;\n      transform: rotate3d(0, 0, 1, -200deg);\n      opacity: 0;\n    }\n  \n    to {\n      transform-origin: center;\n      transform: none;\n      opacity: 1;\n    }\n  }\n  \n  .rotateIn[_ngcontent-%COMP%] {\n    animation-name: rotateIn;\n  }\n  \n  @keyframes rotateInDownLeft {\n    from {\n      transform-origin: left bottom;\n      transform: rotate3d(0, 0, 1, -45deg);\n      opacity: 0;\n    }\n  \n    to {\n      transform-origin: left bottom;\n      transform: none;\n      opacity: 1;\n    }\n  }\n  \n  .rotateInDownLeft[_ngcontent-%COMP%] {\n    animation-name: rotateInDownLeft;\n  }\n  \n  @keyframes rotateInDownRight {\n    from {\n      transform-origin: right bottom;\n      transform: rotate3d(0, 0, 1, 45deg);\n      opacity: 0;\n    }\n  \n    to {\n      transform-origin: right bottom;\n      transform: none;\n      opacity: 1;\n    }\n  }\n  \n  .rotateInDownRight[_ngcontent-%COMP%] {\n    animation-name: rotateInDownRight;\n  }\n  \n  @keyframes rotateInUpLeft {\n    from {\n      transform-origin: left bottom;\n      transform: rotate3d(0, 0, 1, 45deg);\n      opacity: 0;\n    }\n  \n    to {\n      transform-origin: left bottom;\n      transform: none;\n      opacity: 1;\n    }\n  }\n  \n  .rotateInUpLeft[_ngcontent-%COMP%] {\n    animation-name: rotateInUpLeft;\n  }\n  \n  @keyframes rotateInUpRight {\n    from {\n      transform-origin: right bottom;\n      transform: rotate3d(0, 0, 1, -90deg);\n      opacity: 0;\n    }\n  \n    to {\n      transform-origin: right bottom;\n      transform: none;\n      opacity: 1;\n    }\n  }\n  \n  .rotateInUpRight[_ngcontent-%COMP%] {\n    animation-name: rotateInUpRight;\n  }\n  \n  @keyframes rotateOut {\n    from {\n      transform-origin: center;\n      opacity: 1;\n    }\n  \n    to {\n      transform-origin: center;\n      transform: rotate3d(0, 0, 1, 200deg);\n      opacity: 0;\n    }\n  }\n  \n  .rotateOut[_ngcontent-%COMP%] {\n    animation-name: rotateOut;\n  }\n  \n  @keyframes rotateOutDownLeft {\n    from {\n      transform-origin: left bottom;\n      opacity: 1;\n    }\n  \n    to {\n      transform-origin: left bottom;\n      transform: rotate3d(0, 0, 1, 45deg);\n      opacity: 0;\n    }\n  }\n  \n  .rotateOutDownLeft[_ngcontent-%COMP%] {\n    animation-name: rotateOutDownLeft;\n  }\n  \n  @keyframes rotateOutDownRight {\n    from {\n      transform-origin: right bottom;\n      opacity: 1;\n    }\n  \n    to {\n      transform-origin: right bottom;\n      transform: rotate3d(0, 0, 1, -45deg);\n      opacity: 0;\n    }\n  }\n  \n  .rotateOutDownRight[_ngcontent-%COMP%] {\n    animation-name: rotateOutDownRight;\n  }\n  \n  @keyframes rotateOutUpLeft {\n    from {\n      transform-origin: left bottom;\n      opacity: 1;\n    }\n  \n    to {\n      transform-origin: left bottom;\n      transform: rotate3d(0, 0, 1, -45deg);\n      opacity: 0;\n    }\n  }\n  \n  .rotateOutUpLeft[_ngcontent-%COMP%] {\n    animation-name: rotateOutUpLeft;\n  }\n  \n  @keyframes rotateOutUpRight {\n    from {\n      transform-origin: right bottom;\n      opacity: 1;\n    }\n  \n    to {\n      transform-origin: right bottom;\n      transform: rotate3d(0, 0, 1, 90deg);\n      opacity: 0;\n    }\n  }\n  \n  .rotateOutUpRight[_ngcontent-%COMP%] {\n    animation-name: rotateOutUpRight;\n  }\n  \n  @keyframes hinge {\n    0% {\n      transform-origin: top left;\n      animation-timing-function: ease-in-out;\n    }\n  \n    20%, 60% {\n      transform: rotate3d(0, 0, 1, 80deg);\n      transform-origin: top left;\n      animation-timing-function: ease-in-out;\n    }\n  \n    40%, 80% {\n      transform: rotate3d(0, 0, 1, 60deg);\n      transform-origin: top left;\n      animation-timing-function: ease-in-out;\n      opacity: 1;\n    }\n  \n    to {\n      transform: translate3d(0, 700px, 0);\n      opacity: 0;\n    }\n  }\n  \n  .hinge[_ngcontent-%COMP%] {\n    animation-name: hinge;\n  }\n  \n  @keyframes jackInTheBox {\n    from {\n      opacity: 0;\n      transform: scale(0.1) rotate(30deg);\n      transform-origin: center bottom;\n    }\n  \n    50% {\n      transform: rotate(-10deg);\n    }\n  \n    70% {\n      transform: rotate(3deg);\n    }\n  \n    to {\n      opacity: 1;\n      transform: scale(1);\n    }\n  }\n  \n  .jackInTheBox[_ngcontent-%COMP%] {\n    animation-name: jackInTheBox;\n  }\n  \n  \n  \n  @keyframes rollIn {\n    from {\n      opacity: 0;\n      transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);\n    }\n  \n    to {\n      opacity: 1;\n      transform: none;\n    }\n  }\n  \n  .rollIn[_ngcontent-%COMP%] {\n    animation-name: rollIn;\n  }\n  \n  \n  \n  @keyframes rollOut {\n    from {\n      opacity: 1;\n    }\n  \n    to {\n      opacity: 0;\n      transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);\n    }\n  }\n  \n  .rollOut[_ngcontent-%COMP%] {\n    animation-name: rollOut;\n  }\n  \n  @keyframes zoomIn {\n    from {\n      opacity: 0;\n      transform: scale3d(.3, .3, .3);\n    }\n  \n    50% {\n      opacity: 1;\n    }\n  }\n  \n  .zoomIn[_ngcontent-%COMP%] {\n    animation-name: zoomIn;\n  }\n  \n  @keyframes zoomInDown {\n    from {\n      opacity: 0;\n      transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);\n      animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    }\n  \n    60% {\n      opacity: 1;\n      transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n      animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    }\n  }\n  \n  .zoomInDown[_ngcontent-%COMP%] {\n    animation-name: zoomInDown;\n  }\n  \n  @keyframes zoomInLeft {\n    from {\n      opacity: 0;\n      transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);\n      animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    }\n  \n    60% {\n      opacity: 1;\n      transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);\n      animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    }\n  }\n  \n  .zoomInLeft[_ngcontent-%COMP%] {\n    animation-name: zoomInLeft;\n  }\n  \n  @keyframes zoomInRight {\n    from {\n      opacity: 0;\n      transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);\n      animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    }\n  \n    60% {\n      opacity: 1;\n      transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);\n      animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    }\n  }\n  \n  .zoomInRight[_ngcontent-%COMP%] {\n    animation-name: zoomInRight;\n  }\n  \n  @keyframes zoomInUp {\n    from {\n      opacity: 0;\n      transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);\n      animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    }\n  \n    60% {\n      opacity: 1;\n      transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n      animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    }\n  }\n  \n  .zoomInUp[_ngcontent-%COMP%] {\n    animation-name: zoomInUp;\n  }\n  \n  @keyframes zoomOut {\n    from {\n      opacity: 1;\n    }\n  \n    50% {\n      opacity: 0;\n      transform: scale3d(.3, .3, .3);\n    }\n  \n    to {\n      opacity: 0;\n    }\n  }\n  \n  .zoomOut[_ngcontent-%COMP%] {\n    animation-name: zoomOut;\n  }\n  \n  @keyframes zoomOutDown {\n    40% {\n      opacity: 1;\n      transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n      animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    }\n  \n    to {\n      opacity: 0;\n      transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);\n      transform-origin: center bottom;\n      animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    }\n  }\n  \n  .zoomOutDown[_ngcontent-%COMP%] {\n    animation-name: zoomOutDown;\n  }\n  \n  @keyframes zoomOutLeft {\n    40% {\n      opacity: 1;\n      transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);\n    }\n  \n    to {\n      opacity: 0;\n      transform: scale(.1) translate3d(-2000px, 0, 0);\n      transform-origin: left center;\n    }\n  }\n  \n  .zoomOutLeft[_ngcontent-%COMP%] {\n    animation-name: zoomOutLeft;\n  }\n  \n  @keyframes zoomOutRight {\n    40% {\n      opacity: 1;\n      transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);\n    }\n  \n    to {\n      opacity: 0;\n      transform: scale(.1) translate3d(2000px, 0, 0);\n      transform-origin: right center;\n    }\n  }\n  \n  .zoomOutRight[_ngcontent-%COMP%] {\n    animation-name: zoomOutRight;\n  }\n  \n  @keyframes zoomOutUp {\n    40% {\n      opacity: 1;\n      transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);\n      animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n    }\n  \n    to {\n      opacity: 0;\n      transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);\n      transform-origin: center bottom;\n      animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n    }\n  }\n  \n  .zoomOutUp[_ngcontent-%COMP%] {\n    animation-name: zoomOutUp;\n  }\n  \n  @keyframes slideInDown {\n    from {\n      transform: translate3d(0, -100%, 0);\n      visibility: visible;\n    }\n  \n    to {\n      transform: translate3d(0, 0, 0);\n    }\n  }\n  \n  .slideInDown[_ngcontent-%COMP%] {\n    animation-name: slideInDown;\n  }\n  \n  @keyframes slideInLeft {\n    from {\n      transform: translate3d(-100%, 0, 0);\n      visibility: visible;\n    }\n  \n    to {\n      transform: translate3d(0, 0, 0);\n    }\n  }\n  \n  .slideInLeft[_ngcontent-%COMP%] {\n    animation-name: slideInLeft;\n  }\n  \n  @keyframes slideInRight {\n    from {\n      transform: translate3d(100%, 0, 0);\n      visibility: visible;\n    }\n  \n    to {\n      transform: translate3d(0, 0, 0);\n    }\n  }\n  \n  .slideInRight[_ngcontent-%COMP%] {\n    animation-name: slideInRight;\n  }\n  \n  @keyframes slideInUp {\n    from {\n      transform: translate3d(0, 100%, 0);\n      visibility: visible;\n    }\n  \n    to {\n      transform: translate3d(0, 0, 0);\n    }\n  }\n  \n  .slideInUp[_ngcontent-%COMP%] {\n    animation-name: slideInUp;\n  }\n  \n  @keyframes slideOutDown {\n    from {\n      transform: translate3d(0, 0, 0);\n    }\n  \n    to {\n      visibility: hidden;\n      transform: translate3d(0, 100%, 0);\n    }\n  }\n  \n  .slideOutDown[_ngcontent-%COMP%] {\n    animation-name: slideOutDown;\n  }\n  \n  @keyframes slideOutLeft {\n    from {\n      transform: translate3d(0, 0, 0);\n    }\n  \n    to {\n      visibility: hidden;\n      transform: translate3d(-100%, 0, 0);\n    }\n  }\n  \n  .slideOutLeft[_ngcontent-%COMP%] {\n    animation-name: slideOutLeft;\n  }\n  \n  @keyframes slideOutRight {\n    from {\n      transform: translate3d(0, 0, 0);\n    }\n  \n    to {\n      visibility: hidden;\n      transform: translate3d(100%, 0, 0);\n    }\n  }\n  \n  .slideOutRight[_ngcontent-%COMP%] {\n    animation-name: slideOutRight;\n  }\n  \n  @keyframes slideOutUp {\n    from {\n      transform: translate3d(0, 0, 0);\n    }\n  \n    to {\n      visibility: hidden;\n      transform: translate3d(0, -100%, 0);\n    }\n  }\n  \n  .slideOutUp[_ngcontent-%COMP%] {\n    animation-name: slideOutUp;\n  }\n  \n  \n  \n  *[_ngcontent-%COMP%] {\n        margin: 0px; \n        padding: 0px; \n        box-sizing: border-box;\n    }\n  \n  body[_ngcontent-%COMP%], html[_ngcontent-%COMP%] {\n        height: 100%;\n    }\n  \n  \n  \n  a[_ngcontent-%COMP%] {\n        line-height: 1.7;\n        color: #666666;\n        margin: 0px;\n        transition: all 0.4s;\n        -webkit-transition: all 0.4s;\n      -o-transition: all 0.4s;\n      -moz-transition: all 0.4s;\n    }\n  \n  a[_ngcontent-%COMP%]:focus {\n        outline: none !important;\n    }\n  \n  a[_ngcontent-%COMP%]:hover {\n        text-decoration: none;\n        color: #57b846;\n    }\n  \n  \n  \n  h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], h6[_ngcontent-%COMP%] {\n        margin: 0px;\n    }\n  \n  p[_ngcontent-%COMP%] {\n        line-height: 1.7;\n        color: #666666;\n        margin: 0px;\n    }\n  \n  ul[_ngcontent-%COMP%], li[_ngcontent-%COMP%] {\n        margin: 0px;\n        list-style-type: none;\n    }\n  \n  \n  \n  input[_ngcontent-%COMP%] {\n        outline: none;\n        border: none;\n    }\n  \n  textarea[_ngcontent-%COMP%] {\n      outline: none;\n      border: none;\n    }\n  \n  textarea[_ngcontent-%COMP%]:focus, input[_ngcontent-%COMP%]:focus {\n      border-color: transparent !important;\n    }\n  \n  input[_ngcontent-%COMP%]::-webkit-input-placeholder { color: #999999; }\n  \n  input[_ngcontent-%COMP%]:-moz-placeholder { color: #999999; }\n  \n  input[_ngcontent-%COMP%]::-moz-placeholder { color: #999999; }\n  \n  input[_ngcontent-%COMP%]:-ms-input-placeholder { color: #999999; }\n  \n  textarea[_ngcontent-%COMP%]::-webkit-input-placeholder { color: #999999; }\n  \n  textarea[_ngcontent-%COMP%]:-moz-placeholder { color: #999999; }\n  \n  textarea[_ngcontent-%COMP%]::-moz-placeholder { color: #999999; }\n  \n  textarea[_ngcontent-%COMP%]:-ms-input-placeholder { color: #999999; }\n  \n  \n  \n  button[_ngcontent-%COMP%] {\n        outline: none !important;\n        border: none;\n        background: transparent;\n    }\n  \n  button[_ngcontent-%COMP%]:hover {\n        cursor: pointer;\n    }\n  \n  iframe[_ngcontent-%COMP%] {\n        border: none !important;\n    }\n  \n  \n  \n  .contact1[_ngcontent-%COMP%] {\n      width: 100%;\n      min-height: 100%;\n      padding: 15px;\n    \n      background: #009bff;\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: center;\n      align-items: center;\n    }\n  \n  .container-contact1[_ngcontent-%COMP%] {\n      background: #fff;\n      overflow: hidden;\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: space-between;\n      align-items: center;\n    \n    }\n  \n  \n  \n  .contact1-pic[_ngcontent-%COMP%] {\n      width: 296px;\n    }\n  \n  .contact1-pic[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n      max-width: 100%;\n    }\n  \n  \n  \n  .contact1-form-title[_ngcontent-%COMP%] {\n      display: block;\n      color: #333333;\n      line-height: 1.2;\n      text-align: center;\n    }\n  \n  input.input1[_ngcontent-%COMP%] {\n      border-radius: 25px;\n    }\n  \n  input.input1[_ngcontent-%COMP%]    + .shadow-input1[_ngcontent-%COMP%] {\n      border-radius: 25px;\n    }\n  \n  textarea.input1[_ngcontent-%COMP%] {\n      min-height: 150px;\n      border-radius: 25px;\n    }\n  \n  textarea.input1[_ngcontent-%COMP%]    + .shadow-input1[_ngcontent-%COMP%] {\n      border-radius: 25px;\n    }\n  \n  \n  \n  .wrap-input1[_ngcontent-%COMP%] {\n      position: relative;\n      width: 100%;\n      z-index: 1;\n    }\n  \n  .input1[_ngcontent-%COMP%] {\n      display: block;\n      width: 100%;\n      background: #e6e6e6;\n      line-height: 1.5;\n      color: #666666;\n    }\n  \n  .shadow-input1[_ngcontent-%COMP%] {\n      content: '';\n      display: block;\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      z-index: -1;\n      width: 100%;\n      height: 100%;\n      box-shadow: 0px 0px 0px 0px;\n      color: rgba(87,184,70, 0.5);\n    }\n  \n  .input1[_ngcontent-%COMP%]:focus    + .shadow-input1[_ngcontent-%COMP%] {\n      animation: anim-shadow 0.5s ease-in-out forwards;\n    }\n  \n  @keyframes anim-shadow {\n      to {\n        box-shadow: 0px 0px 80px 30px;\n        opacity: 0;\n      }\n    }\n  \n  \n  \n  .container-contact1-form-btn[_ngcontent-%COMP%] {\n      display: flex;\n      flex-wrap: wrap;\n      justify-content: center;\n    }\n  \n  .contact1-form-btn[_ngcontent-%COMP%] {\n      height: 50px;\n      border-radius: 25px;\n      background: #57b846;\n      line-height: 1.5;\n      color: #fff;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      transition: all 0.4s;\n    }\n  \n  .contact1-form-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n      margin-left: 7px;\n      transition: all 0.4s;\n    }\n  \n  .contact1-form-btn[_ngcontent-%COMP%]:hover {\n      background: #333333;\n    }\n  \n  .contact1-form-btn[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%] {\n      transform: translateX(10px);\n    }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2lhbC1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7SUFDdEIseUJBQXlCO0VBQzNCOztFQUVBO0lBQ0UsbUNBQW1DO0VBQ3JDOztFQUVBO0lBQ0Usc0JBQXNCO0VBQ3hCOztFQUVBOzs7O0lBSUUsd0JBQXdCO0VBQzFCOztFQUVBO0lBQ0UsY0FBYztJQUNkLFFBQVE7SUFDUixVQUFVO0lBQ1YsU0FBUztJQUNULFFBQVE7Q0FDWDs7RUFFQztJQUNFO01BQ0UsbUVBQW1FO01BQ25FLDZCQUE2QjtJQUMvQjs7SUFFQTtNQUNFLG1FQUFtRTtNQUNuRSxtQ0FBbUM7SUFDckM7O0lBRUE7TUFDRSxtRUFBbUU7TUFDbkUsbUNBQW1DO0lBQ3JDOztJQUVBO01BQ0UsZ0NBQWdDO0lBQ2xDO0VBQ0Y7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsK0JBQStCO0VBQ2pDOztFQUVBO0lBQ0U7TUFDRSxVQUFVO0lBQ1o7O0lBRUE7TUFDRSxVQUFVO0lBQ1o7RUFDRjs7RUFFQTtJQUNFLHFCQUFxQjtFQUN2Qjs7RUFFQSw2RUFBNkU7O0VBRTdFO0lBQ0U7TUFDRSwyQkFBMkI7SUFDN0I7O0lBRUE7TUFDRSxvQ0FBb0M7SUFDdEM7O0lBRUE7TUFDRSwyQkFBMkI7SUFDN0I7RUFDRjs7RUFFQTtJQUNFLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFO01BQ0UsMkJBQTJCO0lBQzdCOztJQUVBO01BQ0UsaUNBQWlDO0lBQ25DOztJQUVBO01BQ0UsaUNBQWlDO0lBQ25DOztJQUVBO01BQ0UsaUNBQWlDO0lBQ25DOztJQUVBO01BQ0UsZ0NBQWdDO0lBQ2xDOztJQUVBO01BQ0UsZ0NBQWdDO0lBQ2xDOztJQUVBO01BQ0UsMkJBQTJCO0lBQzdCO0VBQ0Y7O0VBRUE7SUFDRSwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRTtNQUNFLCtCQUErQjtJQUNqQzs7SUFFQTtNQUNFLG1DQUFtQztJQUNyQzs7SUFFQTtNQUNFLGtDQUFrQztJ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QkFBNkI7UUFDN0IsVUFBVTtNQUNaO0lBQ0Y7O0VBRUEsZ0RBQWdEOztFQUNoRDtNQUtFLGFBQWE7TUFDYixlQUFlO01BQ2YsdUJBQXVCO0lBQ3pCOztFQUVBO01BQ0UsWUFBWTtNQUNaLG1CQUFtQjtNQUNuQixtQkFBbUI7TUFDbkIsZ0JBQWdCO01BQ2hCLFdBQVc7TUFLWCxhQUFhO01BQ2IsdUJBQXVCO01BQ3ZCLG1CQUFtQjtNQUtuQixvQkFBb0I7SUFDdEI7O0VBRUE7TUFDRSxnQkFBZ0I7TUFLaEIsb0JBQW9CO0lBQ3RCOztFQUVBO01BQ0UsbUJBQW1CO0lBQ3JCOztFQUVBO01BS0UsMkJBQTJCO0lBQzdCIiwiZmlsZSI6InNvY2lhbC1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYW5pbWF0ZWQge1xuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XG4gICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgfVxuICBcbiAgLmFuaW1hdGVkLmluZmluaXRlIHtcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgfVxuICBcbiAgLmFuaW1hdGVkLmhpbmdlIHtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xuICB9XG4gIFxuICAuYW5pbWF0ZWQuZmxpcE91dFgsXG4gIC5hbmltYXRlZC5mbGlwT3V0WSxcbiAgLmFuaW1hdGVkLmJvdW5jZUluLFxuICAuYW5pbWF0ZWQuYm91bmNlT3V0IHtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IC43NXM7XG4gIH1cblxuICAubW9kYWwtZGlhbG9nIHtcbiAgICBwb3NpdGlvbjpmaXhlZDtcbiAgICB0b3A6YXV0bztcbiAgICByaWdodDphdXRvO1xuICAgIGxlZnQ6YXV0bztcbiAgICBib3R0b206MDtcbiB9ICBcbiAgXG4gIEBrZXlmcmFtZXMgYm91bmNlIHtcbiAgICBmcm9tLCAyMCUsIDUzJSwgODAlLCB0byB7XG4gICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4yMTUsIDAuNjEwLCAwLjM1NSwgMS4wMDApO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLDAsMCk7XG4gICAgfVxuICBcbiAgICA0MCUsIDQzJSB7XG4gICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC43NTUsIDAuMDUwLCAwLjg1NSwgMC4wNjApO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMzBweCwgMCk7XG4gICAgfVxuICBcbiAgICA3MCUge1xuICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1MCwgMC44NTUsIDAuMDYwKTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTE1cHgsIDApO1xuICAgIH1cbiAgXG4gICAgOTAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwtNHB4LDApO1xuICAgIH1cbiAgfVxuICBcbiAgLmJvdW5jZSB7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgYm90dG9tO1xuICB9XG4gIFxuICBAa2V5ZnJhbWVzIGZsYXNoIHtcbiAgICBmcm9tLCA1MCUsIHRvIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICBcbiAgICAyNSUsIDc1JSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgfVxuICBcbiAgLmZsYXNoIHtcbiAgICBhbmltYXRpb24tbmFtZTogZmxhc2g7XG4gIH1cbiAgXG4gIC8qIG9yaWdpbmFsbHkgYXV0aG9yZWQgYnkgTmljayBQZXR0aXQgLSBodHRwczovL2dpdGh1Yi5jb20vbmlja3BldHRpdC9nbGlkZSAqL1xuICBcbiAgQGtleWZyYW1lcyBwdWxzZSB7XG4gICAgZnJvbSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XG4gICAgfVxuICBcbiAgICA1MCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMDUsIDEuMDUsIDEuMDUpO1xuICAgIH1cbiAgXG4gICAgdG8ge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xuICAgIH1cbiAgfVxuICBcbiAgLnB1bHNlIHtcbiAgICBhbmltYXRpb24tbmFtZTogcHVsc2U7XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgcnViYmVyQmFuZCB7XG4gICAgZnJvbSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XG4gICAgfVxuICBcbiAgICAzMCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMjUsIDAuNzUsIDEpO1xuICAgIH1cbiAgXG4gICAgNDAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUzZCgwLjc1LCAxLjI1LCAxKTtcbiAgICB9XG4gIFxuICAgIDUwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4xNSwgMC44NSwgMSk7XG4gICAgfVxuICBcbiAgICA2NSUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZTNkKC45NSwgMS4wNSwgMSk7XG4gICAgfVxuICBcbiAgICA3NSUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMDUsIC45NSwgMSk7XG4gICAgfVxuICBcbiAgICB0byB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XG4gICAgfVxuICB9XG4gIFxuICAucnViYmVyQmFuZCB7XG4gICAgYW5pbWF0aW9uLW5hbWU6IHJ1YmJlckJhbmQ7XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgc2hha2Uge1xuICAgIGZyb20sIHRvIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgfVxuICBcbiAgICAxMCUsIDMwJSwgNTAlLCA3MCUsIDkwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMHB4LCAwLCAwKTtcbiAgICB9XG4gIFxuICAgIDIwJSwgNDAlLCA2MCUsIDgwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwcHgsIDAsIDApO1xuICAgIH1cbiAgfVxuICBcbiAgLnNoYWtlIHtcbiAgICBhbmltYXRpb24tbmFtZTogc2hha2U7XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgaGVhZFNoYWtlIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gICAgfVxuICBcbiAgICA2LjUlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNnB4KSByb3RhdGVZKC05ZGVnKTtcbiAgICB9XG4gIFxuICAgIDE4LjUlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1cHgpIHJvdGF0ZVkoN2RlZyk7XG4gICAgfVxuICBcbiAgICAzMS41JSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTNweCkgcm90YXRlWSgtNWRlZyk7XG4gICAgfVxuICBcbiAgICA0My41JSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMnB4KSByb3RhdGVZKDNkZWcpO1xuICAgIH1cbiAgXG4gICAgNTAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTtcbiAgICB9XG4gIH1cbiAgXG4gIC5oZWFkU2hha2Uge1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xuICAgIGFuaW1hdGlvbi1uYW1lOiBoZWFkU2hha2U7XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgc3dpbmcge1xuICAgIDIwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDE1ZGVnKTtcbiAgICB9XG4gIFxuICAgIDQwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC0xMGRlZyk7XG4gICAgfVxuICBcbiAgICA2MCUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA1ZGVnKTtcbiAgICB9XG4gIFxuICAgIDgwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC01ZGVnKTtcbiAgICB9XG4gIFxuICAgIHRvIHtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgMGRlZyk7XG4gICAgfVxuICB9XG4gIFxuICAuc3dpbmcge1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBjZW50ZXI7XG4gICAgYW5pbWF0aW9uLW5hbWU6IHN3aW5nO1xuICB9XG4gIFxuICBAa2V5ZnJhbWVzIHRhZGEge1xuICAgIGZyb20ge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEsIDEsIDEpO1xuICAgIH1cbiAgXG4gICAgMTAlLCAyMCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZTNkKC45LCAuOSwgLjkpIHJvdGF0ZTNkKDAsIDAsIDEsIC0zZGVnKTtcbiAgICB9XG4gIFxuICAgIDMwJSwgNTAlLCA3MCUsIDkwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMS4xLCAxLjEsIDEuMSkgcm90YXRlM2QoMCwgMCwgMSwgM2RlZyk7XG4gICAgfVxuICBcbiAgICA0MCUsIDYwJSwgODAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjEsIDEuMSwgMS4xKSByb3RhdGUzZCgwLCAwLCAxLCAtM2RlZyk7XG4gICAgfVxuICBcbiAgICB0byB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XG4gICAgfVxuICB9XG4gIFxuICAudGFkYSB7XG4gICAgYW5pbWF0aW9uLW5hbWU6IHRhZGE7XG4gIH1cbiAgXG4gIC8qIG9yaWdpbmFsbHkgYXV0aG9yZWQgYnkgTmljayBQZXR0aXQgLSBodHRwczovL2dpdGh1Yi5jb20vbmlja3BldHRpdC9nbGlkZSAqL1xuICBcbiAgQGtleWZyYW1lcyB3b2JibGUge1xuICAgIGZyb20ge1xuICAgICAgdHJhbnNmb3JtOiBub25lO1xuICAgIH1cbiAgXG4gICAgMTUlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTI1JSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgLTVkZWcpO1xuICAgIH1cbiAgXG4gICAgMzAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjAlLCAwLCAwKSByb3RhdGUzZCgwLCAwLCAxLCAzZGVnKTtcbiAgICB9XG4gIFxuICAgIDQ1JSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xNSUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIC0zZGVnKTtcbiAgICB9XG4gIFxuICAgIDYwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwJSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgMmRlZyk7XG4gICAgfVxuICBcbiAgICA3NSUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtNSUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIC0xZGVnKTtcbiAgICB9XG4gIFxuICAgIHRvIHtcbiAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICB9XG4gIH1cbiAgXG4gIC53b2JibGUge1xuICAgIGFuaW1hdGlvbi1uYW1lOiB3b2JibGU7XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgamVsbG8ge1xuICAgIGZyb20sIDExLjElLCB0byB7XG4gICAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgfVxuICBcbiAgICAyMi4yJSB7XG4gICAgICB0cmFuc2Zvcm06IHNrZXdYKC0xMi41ZGVnKSBza2V3WSgtMTIuNWRlZyk7XG4gICAgfVxuICBcbiAgICAzMy4zJSB7XG4gICAgICB0cmFuc2Zvcm06IHNrZXdYKDYuMjVkZWcpIHNrZXdZKDYuMjVkZWcpO1xuICAgIH1cbiAgXG4gICAgNDQuNCUge1xuICAgICAgdHJhbnNmb3JtOiBza2V3WCgtMy4xMjVkZWcpIHNrZXdZKC0zLjEyNWRlZyk7XG4gICAgfVxuICBcbiAgICA1NS41JSB7XG4gICAgICB0cmFuc2Zvcm06IHNrZXdYKDEuNTYyNWRlZykgc2tld1koMS41NjI1ZGVnKTtcbiAgICB9XG4gIFxuICAgIDY2LjYlIHtcbiAgICAgIHRyYW5zZm9ybTogc2tld1goLTAuNzgxMjVkZWcpIHNrZXdZKC0wLjc4MTI1ZGVnKTtcbiAgICB9XG4gIFxuICAgIDc3LjclIHtcbiAgICAgIHRyYW5zZm9ybTogc2tld1goMC4zOTA2MjVkZWcpIHNrZXdZKDAuMzkwNjI1ZGVnKTtcbiAgICB9XG4gIFxuICAgIDg4LjglIHtcbiAgICAgIHRyYW5zZm9ybTogc2tld1goLTAuMTk1MzEyNWRlZykgc2tld1koLTAuMTk1MzEyNWRlZyk7XG4gICAgfVxuICB9XG4gIFxuICAuamVsbG8ge1xuICAgIGFuaW1hdGlvbi1uYW1lOiBqZWxsbztcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgYm91bmNlSW4ge1xuICAgIGZyb20sIDIwJSwgNDAlLCA2MCUsIDgwJSwgdG8ge1xuICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxMCwgMC4zNTUsIDEuMDAwKTtcbiAgICB9XG4gIFxuICAgIDAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlM2QoLjMsIC4zLCAuMyk7XG4gICAgfVxuICBcbiAgICAyMCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMSwgMS4xLCAxLjEpO1xuICAgIH1cbiAgXG4gICAgNDAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUzZCguOSwgLjksIC45KTtcbiAgICB9XG4gIFxuICAgIDYwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZTNkKDEuMDMsIDEuMDMsIDEuMDMpO1xuICAgIH1cbiAgXG4gICAgODAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUzZCguOTcsIC45NywgLjk3KTtcbiAgICB9XG4gIFxuICAgIHRvIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMSwgMSwgMSk7XG4gICAgfVxuICB9XG4gIFxuICAuYm91bmNlSW4ge1xuICAgIGFuaW1hdGlvbi1uYW1lOiBib3VuY2VJbjtcbiAgfVxuICBcbiAgQGtleWZyYW1lcyBib3VuY2VJbkRvd24ge1xuICAgIGZyb20sIDYwJSwgNzUlLCA5MCUsIHRvIHtcbiAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MTAsIDAuMzU1LCAxLjAwMCk7XG4gICAgfVxuICBcbiAgICAwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMzAwMHB4LCAwKTtcbiAgICB9XG4gIFxuICAgIDYwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAyNXB4LCAwKTtcbiAgICB9XG4gIFxuICAgIDc1JSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0xMHB4LCAwKTtcbiAgICB9XG4gIFxuICAgIDkwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDVweCwgMCk7XG4gICAgfVxuICBcbiAgICB0byB7XG4gICAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgfVxuICB9XG4gIFxuICAuYm91bmNlSW5Eb3duIHtcbiAgICBhbmltYXRpb24tbmFtZTogYm91bmNlSW5Eb3duO1xuICB9XG4gIFxuICBAa2V5ZnJhbWVzIGJvdW5jZUluTGVmdCB7XG4gICAgZnJvbSwgNjAlLCA3NSUsIDkwJSwgdG8ge1xuICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxMCwgMC4zNTUsIDEuMDAwKTtcbiAgICB9XG4gIFxuICAgIDAlIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0zMDAwcHgsIDAsIDApO1xuICAgIH1cbiAgXG4gICAgNjAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDI1cHgsIDAsIDApO1xuICAgIH1cbiAgXG4gICAgNzUlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwcHgsIDAsIDApO1xuICAgIH1cbiAgXG4gICAgOTAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoNXB4LCAwLCAwKTtcbiAgICB9XG4gIFxuICAgIHRvIHtcbiAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICB9XG4gIH1cbiAgXG4gIC5ib3VuY2VJbkxlZnQge1xuICAgIGFuaW1hdGlvbi1uYW1lOiBib3VuY2VJbkxlZnQ7XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgYm91bmNlSW5SaWdodCB7XG4gICAgZnJvbSwgNjAlLCA3NSUsIDkwJSwgdG8ge1xuICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMjE1LCAwLjYxMCwgMC4zNTUsIDEuMDAwKTtcbiAgICB9XG4gIFxuICAgIGZyb20ge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMzAwMHB4LCAwLCAwKTtcbiAgICB9XG4gIFxuICAgIDYwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjVweCwgMCwgMCk7XG4gICAgfVxuICBcbiAgICA3NSUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMHB4LCAwLCAwKTtcbiAgICB9XG4gIFxuICAgIDkwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC01cHgsIDAsIDApO1xuICAgIH1cbiAgXG4gICAgdG8ge1xuICAgICAgdHJhbnNmb3JtOiBub25lO1xuICAgIH1cbiAgfVxuICBcbiAgLmJvdW5jZUluUmlnaHQge1xuICAgIGFuaW1hdGlvbi1uYW1lOiBib3VuY2VJblJpZ2h0O1xuICB9XG4gIFxuICBAa2V5ZnJhbWVzIGJvdW5jZUluVXAge1xuICAgIGZyb20sIDYwJSwgNzUlLCA5MCUsIHRvIHtcbiAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjIxNSwgMC42MTAsIDAuMzU1LCAxLjAwMCk7XG4gICAgfVxuICBcbiAgICBmcm9tIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDMwMDBweCwgMCk7XG4gICAgfVxuICBcbiAgICA2MCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwcHgsIDApO1xuICAgIH1cbiAgXG4gICAgNzUlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTBweCwgMCk7XG4gICAgfVxuICBcbiAgICA5MCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtNXB4LCAwKTtcbiAgICB9XG4gIFxuICAgIHRvIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgfVxuICB9XG4gIFxuICAuYm91bmNlSW5VcCB7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZUluVXA7XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgYm91bmNlT3V0IHtcbiAgICAyMCUge1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZTNkKC45LCAuOSwgLjkpO1xuICAgIH1cbiAgXG4gICAgNTAlLCA1NSUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUzZCgxLjEsIDEuMSwgMS4xKTtcbiAgICB9XG4gIFxuICAgIHRvIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlM2QoLjMsIC4zLCAuMyk7XG4gICAgfVxuICB9XG4gIFxuICAuYm91bmNlT3V0IHtcbiAgICBhbmltYXRpb24tbmFtZTogYm91bmNlT3V0O1xuICB9XG4gIFxuICBAa2V5ZnJhbWVzIGJvdW5jZU91dERvd24ge1xuICAgIDIwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwcHgsIDApO1xuICAgIH1cbiAgXG4gICAgNDAlLCA0NSUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwcHgsIDApO1xuICAgIH1cbiAgXG4gICAgdG8ge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMjAwMHB4LCAwKTtcbiAgICB9XG4gIH1cbiAgXG4gIC5ib3VuY2VPdXREb3duIHtcbiAgICBhbmltYXRpb24tbmFtZTogYm91bmNlT3V0RG93bjtcbiAgfVxuICBcbiAgQGtleWZyYW1lcyBib3VuY2VPdXRMZWZ0IHtcbiAgICAyMCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMjBweCwgMCwgMCk7XG4gICAgfVxuICBcbiAgICB0byB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMjAwMHB4LCAwLCAwKTtcbiAgICB9XG4gIH1cbiAgXG4gIC5ib3VuY2VPdXRMZWZ0IHtcbiAgICBhbmltYXRpb24tbmFtZTogYm91bmNlT3V0TGVmdDtcbiAgfVxuICBcbiAgQGtleWZyYW1lcyBib3VuY2VPdXRSaWdodCB7XG4gICAgMjAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yMHB4LCAwLCAwKTtcbiAgICB9XG4gIFxuICAgIHRvIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIwMDBweCwgMCwgMCk7XG4gICAgfVxuICB9XG4gIFxuICAuYm91bmNlT3V0UmlnaHQge1xuICAgIGFuaW1hdGlvbi1uYW1lOiBib3VuY2VPdXRSaWdodDtcbiAgfVxuICBcbiAgQGtleWZyYW1lcyBib3VuY2VPdXRVcCB7XG4gICAgMjAlIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwcHgsIDApO1xuICAgIH1cbiAgXG4gICAgNDAlLCA0NSUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMjBweCwgMCk7XG4gICAgfVxuICBcbiAgICB0byB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjAwMHB4LCAwKTtcbiAgICB9XG4gIH1cbiAgXG4gIC5ib3VuY2VPdXRVcCB7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGJvdW5jZU91dFVwO1xuICB9XG4gIFxuICBAa2V5ZnJhbWVzIGZhZGVJbiB7XG4gICAgZnJvbSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgXG4gICAgdG8ge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1cbiAgXG4gIC5mYWRlSW4ge1xuICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW47XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgZmFkZUluRG93biB7XG4gICAgZnJvbSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMTAwJSwgMCk7XG4gICAgfVxuICBcbiAgICB0byB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiBub25lO1xuICAgIH1cbiAgfVxuICBcbiAgLmZhZGVJbkRvd24ge1xuICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5Eb3duO1xuICB9XG4gIFxuICBAa2V5ZnJhbWVzIGZhZGVJbkRvd25CaWcge1xuICAgIGZyb20ge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwMDBweCwgMCk7XG4gICAgfVxuICBcbiAgICB0byB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiBub25lO1xuICAgIH1cbiAgfVxuICBcbiAgLmZhZGVJbkRvd25CaWcge1xuICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5Eb3duQmlnO1xuICB9XG4gIFxuICBAa2V5ZnJhbWVzIGZhZGVJbkxlZnQge1xuICAgIGZyb20ge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xuICAgIH1cbiAgXG4gICAgdG8ge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICB9XG4gIH1cbiAgXG4gIC5mYWRlSW5MZWZ0IHtcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZUluTGVmdDtcbiAgfVxuICBcbiAgQGtleWZyYW1lcyBmYWRlSW5MZWZ0QmlnIHtcbiAgICBmcm9tIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0yMDAwcHgsIDAsIDApO1xuICAgIH1cbiAgXG4gICAgdG8ge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICB9XG4gIH1cbiAgXG4gIC5mYWRlSW5MZWZ0QmlnIHtcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZUluTGVmdEJpZztcbiAgfVxuICBcbiAgQGtleWZyYW1lcyBmYWRlSW5SaWdodCB7XG4gICAgZnJvbSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKTtcbiAgICB9XG4gIFxuICAgIHRvIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgfVxuICB9XG4gIFxuICAuZmFkZUluUmlnaHQge1xuICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlSW5SaWdodDtcbiAgfVxuICBcbiAgQGtleWZyYW1lcyBmYWRlSW5SaWdodEJpZyB7XG4gICAgZnJvbSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMDAwcHgsIDAsIDApO1xuICAgIH1cbiAgXG4gICAgdG8ge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICB9XG4gIH1cbiAgXG4gIC5mYWRlSW5SaWdodEJpZyB7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJblJpZ2h0QmlnO1xuICB9XG4gIFxuICBAa2V5ZnJhbWVzIGZhZGVJblVwIHtcbiAgICBmcm9tIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xuICAgIH1cbiAgXG4gICAgdG8ge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICB9XG4gIH1cbiAgXG4gIC5mYWRlSW5VcCB7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGVJblVwO1xuICB9XG4gIFxuICBAa2V5ZnJhbWVzIGZhZGVJblVwQmlnIHtcbiAgICBmcm9tIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDIwMDBweCwgMCk7XG4gICAgfVxuICBcbiAgICB0byB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiBub25lO1xuICAgIH1cbiAgfVxuICBcbiAgLmZhZGVJblVwQmlnIHtcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZUluVXBCaWc7XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgZmFkZU91dCB7XG4gICAgZnJvbSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgXG4gICAgdG8ge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIH1cbiAgXG4gIC5mYWRlT3V0IHtcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZU91dDtcbiAgfVxuICBcbiAgQGtleWZyYW1lcyBmYWRlT3V0RG93biB7XG4gICAgZnJvbSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgXG4gICAgdG8ge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XG4gICAgfVxuICB9XG4gIFxuICAuZmFkZU91dERvd24ge1xuICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0RG93bjtcbiAgfVxuICBcbiAgQGtleWZyYW1lcyBmYWRlT3V0RG93bkJpZyB7XG4gICAgZnJvbSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgXG4gICAgdG8ge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMjAwMHB4LCAwKTtcbiAgICB9XG4gIH1cbiAgXG4gIC5mYWRlT3V0RG93bkJpZyB7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXREb3duQmlnO1xuICB9XG4gIFxuICBAa2V5ZnJhbWVzIGZhZGVPdXRMZWZ0IHtcbiAgICBmcm9tIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICBcbiAgICB0byB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XG4gICAgfVxuICB9XG4gIFxuICAuZmFkZU91dExlZnQge1xuICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0TGVmdDtcbiAgfVxuICBcbiAgQGtleWZyYW1lcyBmYWRlT3V0TGVmdEJpZyB7XG4gICAgZnJvbSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgXG4gICAgdG8ge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTIwMDBweCwgMCwgMCk7XG4gICAgfVxuICB9XG4gIFxuICAuZmFkZU91dExlZnRCaWcge1xuICAgIGFuaW1hdGlvbi1uYW1lOiBmYWRlT3V0TGVmdEJpZztcbiAgfVxuICBcbiAgQGtleWZyYW1lcyBmYWRlT3V0UmlnaHQge1xuICAgIGZyb20ge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIFxuICAgIHRvIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xuICAgIH1cbiAgfVxuICBcbiAgLmZhZGVPdXRSaWdodCB7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXRSaWdodDtcbiAgfVxuICBcbiAgQGtleWZyYW1lcyBmYWRlT3V0UmlnaHRCaWcge1xuICAgIGZyb20ge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIFxuICAgIHRvIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDIwMDBweCwgMCwgMCk7XG4gICAgfVxuICB9XG4gIFxuICAuZmFkZU91dFJpZ2h0QmlnIHtcbiAgICBhbmltYXRpb24tbmFtZTogZmFkZU91dFJpZ2h0QmlnO1xuICB9XG4gIFxuICBAa2V5ZnJhbWVzIGZhZGVPdXRVcCB7XG4gICAgZnJvbSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgXG4gICAgdG8ge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xuICAgIH1cbiAgfVxuICBcbiAgLmZhZGVPdXRVcCB7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXRVcDtcbiAgfVxuICBcbiAgQGtleWZyYW1lcyBmYWRlT3V0VXBCaWcge1xuICAgIGZyb20ge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIFxuICAgIHRvIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMDAwcHgsIDApO1xuICAgIH1cbiAgfVxuICBcbiAgLmZhZGVPdXRVcEJpZyB7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGZhZGVPdXRVcEJpZztcbiAgfVxuICBcbiAgQGtleWZyYW1lcyBmbGlwIHtcbiAgICBmcm9tIHtcbiAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDAsIDEsIDAsIC0zNjBkZWcpO1xuICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gICAgfVxuICBcbiAgICA0MCUge1xuICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgdHJhbnNsYXRlM2QoMCwgMCwgMTUwcHgpIHJvdGF0ZTNkKDAsIDEsIDAsIC0xOTBkZWcpO1xuICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gICAgfVxuICBcbiAgICA1MCUge1xuICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgdHJhbnNsYXRlM2QoMCwgMCwgMTUwcHgpIHJvdGF0ZTNkKDAsIDEsIDAsIC0xNzBkZWcpO1xuICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICB9XG4gIFxuICAgIDgwJSB7XG4gICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSBzY2FsZTNkKC45NSwgLjk1LCAuOTUpO1xuICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICB9XG4gIFxuICAgIHRvIHtcbiAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpO1xuICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICB9XG4gIH1cbiAgXG4gIC5hbmltYXRlZC5mbGlwIHtcbiAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICBhbmltYXRpb24tbmFtZTogZmxpcDtcbiAgfVxuICBcbiAgQGtleWZyYW1lcyBmbGlwSW5YIHtcbiAgICBmcm9tIHtcbiAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDEsIDAsIDAsIDkwZGVnKTtcbiAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgXG4gICAgNDAlIHtcbiAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDEsIDAsIDAsIC0yMGRlZyk7XG4gICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgIH1cbiAgXG4gICAgNjAlIHtcbiAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDEsIDAsIDAsIDEwZGVnKTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICBcbiAgICA4MCUge1xuICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgLTVkZWcpO1xuICAgIH1cbiAgXG4gICAgdG8ge1xuICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCk7XG4gICAgfVxuICB9XG4gIFxuICAuZmxpcEluWCB7XG4gICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xuICAgIGFuaW1hdGlvbi1uYW1lOiBmbGlwSW5YO1xuICB9XG4gIFxuICBAa2V5ZnJhbWVzIGZsaXBJblkge1xuICAgIGZyb20ge1xuICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgOTBkZWcpO1xuICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICBcbiAgICA0MCUge1xuICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgLTIwZGVnKTtcbiAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgfVxuICBcbiAgICA2MCUge1xuICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgMTBkZWcpO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIFxuICAgIDgwJSB7XG4gICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgwLCAxLCAwLCAtNWRlZyk7XG4gICAgfVxuICBcbiAgICB0byB7XG4gICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KTtcbiAgICB9XG4gIH1cbiAgXG4gIC5mbGlwSW5ZIHtcbiAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGZsaXBJblk7XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgZmxpcE91dFgge1xuICAgIGZyb20ge1xuICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCk7XG4gICAgfVxuICBcbiAgICAzMCUge1xuICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMSwgMCwgMCwgLTIwZGVnKTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICBcbiAgICB0byB7XG4gICAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDQwMHB4KSByb3RhdGUzZCgxLCAwLCAwLCA5MGRlZyk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgfVxuICBcbiAgLmZsaXBPdXRYIHtcbiAgICBhbmltYXRpb24tbmFtZTogZmxpcE91dFg7XG4gICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xuICB9XG4gIFxuICBAa2V5ZnJhbWVzIGZsaXBPdXRZIHtcbiAgICBmcm9tIHtcbiAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpO1xuICAgIH1cbiAgXG4gICAgMzAlIHtcbiAgICAgIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoNDAwcHgpIHJvdGF0ZTNkKDAsIDEsIDAsIC0xNWRlZyk7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgXG4gICAgdG8ge1xuICAgICAgdHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg0MDBweCkgcm90YXRlM2QoMCwgMSwgMCwgOTBkZWcpO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIH1cbiAgXG4gIC5mbGlwT3V0WSB7XG4gICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiB2aXNpYmxlICFpbXBvcnRhbnQ7XG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xuICAgIGFuaW1hdGlvbi1uYW1lOiBmbGlwT3V0WTtcbiAgfVxuICBcbiAgQGtleWZyYW1lcyBsaWdodFNwZWVkSW4ge1xuICAgIGZyb20ge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKSBza2V3WCgtMzBkZWcpO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIFxuICAgIDYwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNrZXdYKDIwZGVnKTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICBcbiAgICA4MCUge1xuICAgICAgdHJhbnNmb3JtOiBza2V3WCgtNWRlZyk7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgXG4gICAgdG8ge1xuICAgICAgdHJhbnNmb3JtOiBub25lO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1cbiAgXG4gIC5saWdodFNwZWVkSW4ge1xuICAgIGFuaW1hdGlvbi1uYW1lOiBsaWdodFNwZWVkSW47XG4gICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgbGlnaHRTcGVlZE91dCB7XG4gICAgZnJvbSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgXG4gICAgdG8ge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwLCAwKSBza2V3WCgzMGRlZyk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgfVxuICBcbiAgLmxpZ2h0U3BlZWRPdXQge1xuICAgIGFuaW1hdGlvbi1uYW1lOiBsaWdodFNwZWVkT3V0O1xuICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgcm90YXRlSW4ge1xuICAgIGZyb20ge1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCAtMjAwZGVnKTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICBcbiAgICB0byB7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XG4gICAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxuICBcbiAgLnJvdGF0ZUluIHtcbiAgICBhbmltYXRpb24tbmFtZTogcm90YXRlSW47XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgcm90YXRlSW5Eb3duTGVmdCB7XG4gICAgZnJvbSB7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTQ1ZGVnKTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICBcbiAgICB0byB7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGJvdHRvbTtcbiAgICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG4gIFxuICAucm90YXRlSW5Eb3duTGVmdCB7XG4gICAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZUluRG93bkxlZnQ7XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgcm90YXRlSW5Eb3duUmlnaHQge1xuICAgIGZyb20ge1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA0NWRlZyk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgXG4gICAgdG8ge1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQgYm90dG9tO1xuICAgICAgdHJhbnNmb3JtOiBub25lO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1cbiAgXG4gIC5yb3RhdGVJbkRvd25SaWdodCB7XG4gICAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZUluRG93blJpZ2h0O1xuICB9XG4gIFxuICBAa2V5ZnJhbWVzIHJvdGF0ZUluVXBMZWZ0IHtcbiAgICBmcm9tIHtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA0NWRlZyk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgXG4gICAgdG8ge1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XG4gICAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxuICBcbiAgLnJvdGF0ZUluVXBMZWZ0IHtcbiAgICBhbmltYXRpb24tbmFtZTogcm90YXRlSW5VcExlZnQ7XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgcm90YXRlSW5VcFJpZ2h0IHtcbiAgICBmcm9tIHtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgLTkwZGVnKTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICBcbiAgICB0byB7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XG4gICAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxuICBcbiAgLnJvdGF0ZUluVXBSaWdodCB7XG4gICAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZUluVXBSaWdodDtcbiAgfVxuICBcbiAgQGtleWZyYW1lcyByb3RhdGVPdXQge1xuICAgIGZyb20ge1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIFxuICAgIHRvIHtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlM2QoMCwgMCwgMSwgMjAwZGVnKTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICB9XG4gIFxuICAucm90YXRlT3V0IHtcbiAgICBhbmltYXRpb24tbmFtZTogcm90YXRlT3V0O1xuICB9XG4gIFxuICBAa2V5ZnJhbWVzIHJvdGF0ZU91dERvd25MZWZ0IHtcbiAgICBmcm9tIHtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIFxuICAgIHRvIHtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUzZCgwLCAwLCAxLCA0NWRlZyk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgfVxuICBcbiAgLnJvdGF0ZU91dERvd25MZWZ0IHtcbiAgICBhbmltYXRpb24tbmFtZTogcm90YXRlT3V0RG93bkxlZnQ7XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgcm90YXRlT3V0RG93blJpZ2h0IHtcbiAgICBmcm9tIHtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICBcbiAgICB0byB7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC00NWRlZyk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgfVxuICBcbiAgLnJvdGF0ZU91dERvd25SaWdodCB7XG4gICAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZU91dERvd25SaWdodDtcbiAgfVxuICBcbiAgQGtleWZyYW1lcyByb3RhdGVPdXRVcExlZnQge1xuICAgIGZyb20ge1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgXG4gICAgdG8ge1xuICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIC00NWRlZyk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgfVxuICBcbiAgLnJvdGF0ZU91dFVwTGVmdCB7XG4gICAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZU91dFVwTGVmdDtcbiAgfVxuICBcbiAgQGtleWZyYW1lcyByb3RhdGVPdXRVcFJpZ2h0IHtcbiAgICBmcm9tIHtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGJvdHRvbTtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICBcbiAgICB0byB7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBib3R0b207XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDkwZGVnKTtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICB9XG4gIFxuICAucm90YXRlT3V0VXBSaWdodCB7XG4gICAgYW5pbWF0aW9uLW5hbWU6IHJvdGF0ZU91dFVwUmlnaHQ7XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgaGluZ2Uge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xuICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gICAgfVxuICBcbiAgICAyMCUsIDYwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDgwZGVnKTtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xuICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gICAgfVxuICBcbiAgICA0MCUsIDgwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZTNkKDAsIDAsIDEsIDYwZGVnKTtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xuICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgXG4gICAgdG8ge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCA3MDBweCwgMCk7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgfVxuICBcbiAgLmhpbmdlIHtcbiAgICBhbmltYXRpb24tbmFtZTogaGluZ2U7XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgamFja0luVGhlQm94IHtcbiAgICBmcm9tIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuMSkgcm90YXRlKDMwZGVnKTtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBib3R0b207XG4gICAgfVxuICBcbiAgICA1MCUge1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTEwZGVnKTtcbiAgICB9XG4gIFxuICAgIDcwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzZGVnKTtcbiAgICB9XG4gIFxuICAgIHRvIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIH1cbiAgfVxuICBcbiAgLmphY2tJblRoZUJveCB7XG4gICAgYW5pbWF0aW9uLW5hbWU6IGphY2tJblRoZUJveDtcbiAgfVxuICBcbiAgLyogb3JpZ2luYWxseSBhdXRob3JlZCBieSBOaWNrIFBldHRpdCAtIGh0dHBzOi8vZ2l0aHViLmNvbS9uaWNrcGV0dGl0L2dsaWRlICovXG4gIFxuICBAa2V5ZnJhbWVzIHJvbGxJbiB7XG4gICAgZnJvbSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCkgcm90YXRlM2QoMCwgMCwgMSwgLTEyMGRlZyk7XG4gICAgfVxuICBcbiAgICB0byB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiBub25lO1xuICAgIH1cbiAgfVxuICBcbiAgLnJvbGxJbiB7XG4gICAgYW5pbWF0aW9uLW5hbWU6IHJvbGxJbjtcbiAgfVxuICBcbiAgLyogb3JpZ2luYWxseSBhdXRob3JlZCBieSBOaWNrIFBldHRpdCAtIGh0dHBzOi8vZ2l0aHViLmNvbS9uaWNrcGV0dGl0L2dsaWRlICovXG4gIFxuICBAa2V5ZnJhbWVzIHJvbGxPdXQge1xuICAgIGZyb20ge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIFxuICAgIHRvIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApIHJvdGF0ZTNkKDAsIDAsIDEsIDEyMGRlZyk7XG4gICAgfVxuICB9XG4gIFxuICAucm9sbE91dCB7XG4gICAgYW5pbWF0aW9uLW5hbWU6IHJvbGxPdXQ7XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgem9vbUluIHtcbiAgICBmcm9tIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlM2QoLjMsIC4zLCAuMyk7XG4gICAgfVxuICBcbiAgICA1MCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIH1cbiAgXG4gIC56b29tSW4ge1xuICAgIGFuaW1hdGlvbi1uYW1lOiB6b29tSW47XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgem9vbUluRG93biB7XG4gICAgZnJvbSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZTNkKC4xLCAuMSwgLjEpIHRyYW5zbGF0ZTNkKDAsIC0xMDAwcHgsIDApO1xuICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUwLCAwLjA1NSwgMC42NzUsIDAuMTkwKTtcbiAgICB9XG4gIFxuICAgIDYwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZTNkKC40NzUsIC40NzUsIC40NzUpIHRyYW5zbGF0ZTNkKDAsIDYwcHgsIDApO1xuICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMjAsIDEpO1xuICAgIH1cbiAgfVxuICBcbiAgLnpvb21JbkRvd24ge1xuICAgIGFuaW1hdGlvbi1uYW1lOiB6b29tSW5Eb3duO1xuICB9XG4gIFxuICBAa2V5ZnJhbWVzIHpvb21JbkxlZnQge1xuICAgIGZyb20ge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUzZCguMSwgLjEsIC4xKSB0cmFuc2xhdGUzZCgtMTAwMHB4LCAwLCAwKTtcbiAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjU1MCwgMC4wNTUsIDAuNjc1LCAwLjE5MCk7XG4gICAgfVxuICBcbiAgICA2MCUge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUzZCguNDc1LCAuNDc1LCAuNDc1KSB0cmFuc2xhdGUzZCgxMHB4LCAwLCAwKTtcbiAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIwLCAxKTtcbiAgICB9XG4gIH1cbiAgXG4gIC56b29tSW5MZWZ0IHtcbiAgICBhbmltYXRpb24tbmFtZTogem9vbUluTGVmdDtcbiAgfVxuICBcbiAgQGtleWZyYW1lcyB6b29tSW5SaWdodCB7XG4gICAgZnJvbSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZTNkKC4xLCAuMSwgLjEpIHRyYW5zbGF0ZTNkKDEwMDBweCwgMCwgMCk7XG4gICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NTAsIDAuMDU1LCAwLjY3NSwgMC4xOTApO1xuICAgIH1cbiAgXG4gICAgNjAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlM2QoLjQ3NSwgLjQ3NSwgLjQ3NSkgdHJhbnNsYXRlM2QoLTEwcHgsIDAsIDApO1xuICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuMTc1LCAwLjg4NSwgMC4zMjAsIDEpO1xuICAgIH1cbiAgfVxuICBcbiAgLnpvb21JblJpZ2h0IHtcbiAgICBhbmltYXRpb24tbmFtZTogem9vbUluUmlnaHQ7XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgem9vbUluVXAge1xuICAgIGZyb20ge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUzZCguMSwgLjEsIC4xKSB0cmFuc2xhdGUzZCgwLCAxMDAwcHgsIDApO1xuICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUwLCAwLjA1NSwgMC42NzUsIDAuMTkwKTtcbiAgICB9XG4gIFxuICAgIDYwJSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZTNkKC40NzUsIC40NzUsIC40NzUpIHRyYW5zbGF0ZTNkKDAsIC02MHB4LCAwKTtcbiAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIwLCAxKTtcbiAgICB9XG4gIH1cbiAgXG4gIC56b29tSW5VcCB7XG4gICAgYW5pbWF0aW9uLW5hbWU6IHpvb21JblVwO1xuICB9XG4gIFxuICBAa2V5ZnJhbWVzIHpvb21PdXQge1xuICAgIGZyb20ge1xuICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG4gIFxuICAgIDUwJSB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZTNkKC4zLCAuMywgLjMpO1xuICAgIH1cbiAgXG4gICAgdG8ge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG4gIH1cbiAgXG4gIC56b29tT3V0IHtcbiAgICBhbmltYXRpb24tbmFtZTogem9vbU91dDtcbiAgfVxuICBcbiAgQGtleWZyYW1lcyB6b29tT3V0RG93biB7XG4gICAgNDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlM2QoLjQ3NSwgLjQ3NSwgLjQ3NSkgdHJhbnNsYXRlM2QoMCwgLTYwcHgsIDApO1xuICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNTUwLCAwLjA1NSwgMC42NzUsIDAuMTkwKTtcbiAgICB9XG4gIFxuICAgIHRvIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlM2QoLjEsIC4xLCAuMSkgdHJhbnNsYXRlM2QoMCwgMjAwMHB4LCAwKTtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBib3R0b207XG4gICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyMCwgMSk7XG4gICAgfVxuICB9XG4gIFxuICAuem9vbU91dERvd24ge1xuICAgIGFuaW1hdGlvbi1uYW1lOiB6b29tT3V0RG93bjtcbiAgfVxuICBcbiAgQGtleWZyYW1lcyB6b29tT3V0TGVmdCB7XG4gICAgNDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlM2QoLjQ3NSwgLjQ3NSwgLjQ3NSkgdHJhbnNsYXRlM2QoNDJweCwgMCwgMCk7XG4gICAgfVxuICBcbiAgICB0byB7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSguMSkgdHJhbnNsYXRlM2QoLTIwMDBweCwgMCwgMCk7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGNlbnRlcjtcbiAgICB9XG4gIH1cbiAgXG4gIC56b29tT3V0TGVmdCB7XG4gICAgYW5pbWF0aW9uLW5hbWU6IHpvb21PdXRMZWZ0O1xuICB9XG4gIFxuICBAa2V5ZnJhbWVzIHpvb21PdXRSaWdodCB7XG4gICAgNDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlM2QoLjQ3NSwgLjQ3NSwgLjQ3NSkgdHJhbnNsYXRlM2QoLTQycHgsIDAsIDApO1xuICAgIH1cbiAgXG4gICAgdG8ge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoLjEpIHRyYW5zbGF0ZTNkKDIwMDBweCwgMCwgMCk7XG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBjZW50ZXI7XG4gICAgfVxuICB9XG4gIFxuICAuem9vbU91dFJpZ2h0IHtcbiAgICBhbmltYXRpb24tbmFtZTogem9vbU91dFJpZ2h0O1xuICB9XG4gIFxuICBAa2V5ZnJhbWVzIHpvb21PdXRVcCB7XG4gICAgNDAlIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlM2QoLjQ3NSwgLjQ3NSwgLjQ3NSkgdHJhbnNsYXRlM2QoMCwgNjBweCwgMCk7XG4gICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC41NTAsIDAuMDU1LCAwLjY3NSwgMC4xOTApO1xuICAgIH1cbiAgXG4gICAgdG8ge1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUzZCguMSwgLjEsIC4xKSB0cmFuc2xhdGUzZCgwLCAtMjAwMHB4LCAwKTtcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlciBib3R0b207XG4gICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyMCwgMSk7XG4gICAgfVxuICB9XG4gIFxuICAuem9vbU91dFVwIHtcbiAgICBhbmltYXRpb24tbmFtZTogem9vbU91dFVwO1xuICB9XG4gIFxuICBAa2V5ZnJhbWVzIHNsaWRlSW5Eb3duIHtcbiAgICBmcm9tIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICB9XG4gIFxuICAgIHRvIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgfVxuICB9XG4gIFxuICAuc2xpZGVJbkRvd24ge1xuICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZUluRG93bjtcbiAgfVxuICBcbiAgQGtleWZyYW1lcyBzbGlkZUluTGVmdCB7XG4gICAgZnJvbSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgfVxuICBcbiAgICB0byB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgIH1cbiAgfVxuICBcbiAgLnNsaWRlSW5MZWZ0IHtcbiAgICBhbmltYXRpb24tbmFtZTogc2xpZGVJbkxlZnQ7XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgc2xpZGVJblJpZ2h0IHtcbiAgICBmcm9tIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMCwgMCk7XG4gICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIH1cbiAgXG4gICAgdG8ge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB9XG4gIH1cbiAgXG4gIC5zbGlkZUluUmlnaHQge1xuICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZUluUmlnaHQ7XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgc2xpZGVJblVwIHtcbiAgICBmcm9tIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMTAwJSwgMCk7XG4gICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgIH1cbiAgXG4gICAgdG8ge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB9XG4gIH1cbiAgXG4gIC5zbGlkZUluVXAge1xuICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZUluVXA7XG4gIH1cbiAgXG4gIEBrZXlmcmFtZXMgc2xpZGVPdXREb3duIHtcbiAgICBmcm9tIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgfVxuICBcbiAgICB0byB7XG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDEwMCUsIDApO1xuICAgIH1cbiAgfVxuICBcbiAgLnNsaWRlT3V0RG93biB7XG4gICAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlT3V0RG93bjtcbiAgfVxuICBcbiAgQGtleWZyYW1lcyBzbGlkZU91dExlZnQge1xuICAgIGZyb20ge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB9XG4gIFxuICAgIHRvIHtcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xuICAgIH1cbiAgfVxuICBcbiAgLnNsaWRlT3V0TGVmdCB7XG4gICAgYW5pbWF0aW9uLW5hbWU6IHNsaWRlT3V0TGVmdDtcbiAgfVxuICBcbiAgQGtleWZyYW1lcyBzbGlkZU91dFJpZ2h0IHtcbiAgICBmcm9tIHtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gICAgfVxuICBcbiAgICB0byB7XG4gICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xuICAgIH1cbiAgfVxuICBcbiAgLnNsaWRlT3V0UmlnaHQge1xuICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZU91dFJpZ2h0O1xuICB9XG4gIFxuICBAa2V5ZnJhbWVzIHNsaWRlT3V0VXAge1xuICAgIGZyb20ge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICB9XG4gIFxuICAgIHRvIHtcbiAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTEwMCUsIDApO1xuICAgIH1cbiAgfVxuICBcbiAgLnNsaWRlT3V0VXAge1xuICAgIGFuaW1hdGlvbi1uYW1lOiBzbGlkZU91dFVwO1xuICB9XG4gIFxuICAgIFxuICAgIFxuICAgIC8qLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgWyBSRVNUWUxFIFRBRyBdKi9cbiAgICBcbiAgICAqIHtcbiAgICAgICAgbWFyZ2luOiAwcHg7IFxuICAgICAgICBwYWRkaW5nOiAwcHg7IFxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIH1cbiAgICBcbiAgICBib2R5LCBodG1sIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgIH1cbiAgICBcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gICAgYSB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjc7XG4gICAgICAgIGNvbG9yOiAjNjY2NjY2O1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgICAtby10cmFuc2l0aW9uOiBhbGwgMC40cztcbiAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgfVxuICAgIFxuICAgIGE6Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIFxuICAgIGE6aG92ZXIge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiAjNTdiODQ2O1xuICAgIH1cbiAgICBcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gICAgaDEsaDIsaDMsaDQsaDUsaDYge1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICB9XG4gICAgXG4gICAgcCB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjc7XG4gICAgICAgIGNvbG9yOiAjNjY2NjY2O1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICB9XG4gICAgXG4gICAgdWwsIGxpIHtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICB9XG4gICAgXG4gICAgXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAgIGlucHV0IHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgIH1cbiAgICBcbiAgICB0ZXh0YXJlYSB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgIH1cbiAgICBcbiAgICB0ZXh0YXJlYTpmb2N1cywgaW5wdXQ6Zm9jdXMge1xuICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIH1cbiAgICBcbiAgICBpbnB1dDo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7IGNvbG9yOiAjOTk5OTk5OyB9XG4gICAgaW5wdXQ6LW1vei1wbGFjZWhvbGRlciB7IGNvbG9yOiAjOTk5OTk5OyB9XG4gICAgaW5wdXQ6Oi1tb3otcGxhY2Vob2xkZXIgeyBjb2xvcjogIzk5OTk5OTsgfVxuICAgIGlucHV0Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IGNvbG9yOiAjOTk5OTk5OyB9XG4gICAgXG4gICAgdGV4dGFyZWE6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIgeyBjb2xvcjogIzk5OTk5OTsgfVxuICAgIHRleHRhcmVhOi1tb3otcGxhY2Vob2xkZXIgeyBjb2xvcjogIzk5OTk5OTsgfVxuICAgIHRleHRhcmVhOjotbW96LXBsYWNlaG9sZGVyIHsgY29sb3I6ICM5OTk5OTk7IH1cbiAgICB0ZXh0YXJlYTotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyBjb2xvcjogIzk5OTk5OTsgfVxuICAgIFxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbiAgICBidXR0b24ge1xuICAgICAgICBvdXRsaW5lOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuICAgIFxuICAgIGJ1dHRvbjpob3ZlciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgXG4gICAgaWZyYW1lIHtcbiAgICAgICAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIFxuICAgIFxuICAgIC8qLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgWyBDb250YWN0IDEgXSovXG4gICAgXG4gICAgLmNvbnRhY3QxIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgbWluLWhlaWdodDogMTAwJTtcbiAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgXG4gICAgICBiYWNrZ3JvdW5kOiAjMDA5YmZmO1xuICAgIFxuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICBkaXNwbGF5OiAtbW96LWJveDtcbiAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG4gICAgXG4gICAgLmNvbnRhaW5lci1jb250YWN0MSB7XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgZGlzcGxheTogLW1vei1ib3g7XG4gICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIFxuICAgIH1cbiAgICBcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIFsgIF0qL1xuICAgIC5jb250YWN0MS1waWMge1xuICAgICAgd2lkdGg6IDI5NnB4O1xuICAgIH1cbiAgICBcbiAgICAuY29udGFjdDEtcGljIGltZyB7XG4gICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIFxuICAgIFxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgWyAgXSovXG4gIFxuICAgIFxuICAgIC5jb250YWN0MS1mb3JtLXRpdGxlIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICBcbiAgICBpbnB1dC5pbnB1dDEge1xuICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICB9XG4gICAgaW5wdXQuaW5wdXQxICsgLnNoYWRvdy1pbnB1dDEge1xuICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICB9XG4gICAgXG4gICAgdGV4dGFyZWEuaW5wdXQxIHtcbiAgICAgIG1pbi1oZWlnaHQ6IDE1MHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICB9XG4gICAgdGV4dGFyZWEuaW5wdXQxICsgLnNoYWRvdy1pbnB1dDEge1xuICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICB9XG4gICAgXG4gICAgLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuICAgIC53cmFwLWlucHV0MSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgfVxuICAgIFxuICAgIC5pbnB1dDEge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJhY2tncm91bmQ6ICNlNmU2ZTY7XG4gICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgY29sb3I6ICM2NjY2NjY7XG4gICAgfVxuICAgIFxuICAgIC5zaGFkb3ctaW5wdXQxIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgei1pbmRleDogLTE7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDBweDtcbiAgICAgIGNvbG9yOiByZ2JhKDg3LDE4NCw3MCwgMC41KTtcbiAgICB9XG4gICAgXG4gICAgLmlucHV0MTpmb2N1cyArIC5zaGFkb3ctaW5wdXQxIHtcbiAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBhbmltLXNoYWRvdyAwLjVzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xuICAgICAgYW5pbWF0aW9uOiBhbmltLXNoYWRvdyAwLjVzIGVhc2UtaW4tb3V0IGZvcndhcmRzO1xuICAgIH1cbiAgICBcbiAgICBALXdlYmtpdC1rZXlmcmFtZXMgYW5pbS1zaGFkb3cge1xuICAgICAgdG8ge1xuICAgICAgICBib3gtc2hhZG93OiAwcHggMHB4IDgwcHggMzBweDtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgQGtleWZyYW1lcyBhbmltLXNoYWRvdyB7XG4gICAgICB0byB7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggODBweCAzMHB4O1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG4gICAgLmNvbnRhaW5lci1jb250YWN0MS1mb3JtLWJ0biB7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgIGRpc3BsYXk6IC1tb3otYm94O1xuICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuICAgIFxuICAgIC5jb250YWN0MS1mb3JtLWJ0biB7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgYmFja2dyb3VuZDogIzU3Yjg0NjtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgZGlzcGxheTogLW1vei1ib3g7XG4gICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgXG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgfVxuICAgIFxuICAgIC5jb250YWN0MS1mb3JtLWJ0biBpIHtcbiAgICAgIG1hcmdpbi1sZWZ0OiA3cHg7XG4gICAgXG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgICAgLW8tdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjRzO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNHM7XG4gICAgfVxuICAgIFxuICAgIC5jb250YWN0MS1mb3JtLWJ0bjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAjMzMzMzMzO1xuICAgIH1cbiAgICBcbiAgICAuY29udGFjdDEtZm9ybS1idG46aG92ZXIgaSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTtcbiAgICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwcHgpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTtcbiAgICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTtcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMHB4KTtcbiAgICB9Il19 */"] });


/***/ }),

/***/ 31147:
/*!******************************************************!*\
  !*** ./src/app/store-setup/store-setup.component.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StoreSetupComponent": () => (/* binding */ StoreSetupComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 12664);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 76627);



class StoreSetupComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
    }
    getStarted() {
        this.activeModal.dismiss();
    }
    ngOnInit() {
    }
}
StoreSetupComponent.ɵfac = function StoreSetupComponent_Factory(t) { return new (t || StoreSetupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbActiveModal)); };
StoreSetupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StoreSetupComponent, selectors: [["app-store-setup"]], decls: 44, vars: 0, consts: [[1, "w-100"], [1, "text-center", "fw-bolder", "m-2", "mt-4"], [1, "text-center", "fw-bolder", "mx-2", "mt-2"], [1, "d-flex", "justify-content-center", "mt-5"], [1, "mt-2"], [1, "d-flex"], [1, "ms-2", "me-2"], [1, "material-icons-outlined"], [1, "text-start"], [1, "p-2", "w-100", "mt-5"], ["src", "/assets/design_image_2.png", 1, "rounded", "w-100", "aspect-ratio", 2, "object-fit", "contain"], [1, "d-flex", "justify-content-center", "align-items-center", "m-2"], ["role", "button", 1, "side", "d-flex", "text-light", "btn", "btn-success", "rounded-pill", "mb-2", "align-items-center", "justify-content-center", "fw-bold", 3, "click"], [1, "ms-2"], [1, "material-icons-outlined", 2, "font-size", "25px"]], template: function StoreSetupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Welcome to Thred");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "A few things before you get started...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " work ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Set up your ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "billing");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " & ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "merchant plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " to get started ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " monetization_on ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Link your ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "direct-deposit account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " to get paid from your store ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " brush ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Create your first ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "product!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StoreSetupComponent_Template_a_click_39_listener() { return ctx.getStarted(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " GET STARTED ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " check_circle ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdG9yZS1zZXR1cC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ })

};
;
//# sourceMappingURL=674.js.map